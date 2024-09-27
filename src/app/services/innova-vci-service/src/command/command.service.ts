/**
 * @Author: quocdo-macbook
 * @Date:   2020-11-06T22:46:24+07:00
 * @Last modified by:   quocdo-macbook
 * @Last modified time: 2021-12-09T21:14:46+07:00
 */



import { Injectable, EventEmitter, Output } from '@angular/core';
import { ConnectivityService } from './../connectivity/connectivity.service'
import * as VCIStd from '../obd/vcistd';
import { NotifyService } from './../utilities/notify.service'
import * as DataParser from './../utilities/dataParser';
import { Buffer } from 'buffer'
import * as _ from 'lodash';
import { Response } from './Response'
import { parserNotifyEvents } from './eventParser'
import { enumDataFrameType, EnumSerialType } from './../standard/enums'
import { timeout } from 'q';
import { isNullOrUndefined, isObject } from 'util';
import { InnovaVCIEvent } from 'src/app/services/innova-tool-models';
import * as ENUMVCIs from '../obd/vcistd'
import { Events } from 'src/app/services/events.service';
@Injectable({
  providedIn: 'root'
})

export class CommandService {

  private command: any = {};
  private callback = null;
  private dataReceiver = null;
  private notifier = null;
  private timerInterval = null;
  private timerIntervalTick = 0;
  private isForceStop = false;
  private formatType = 0;
  private BleMsgRx = enumDataFrameType.unknowFrame;
  private callbackNotify = null;
  private timerTimeout = null;
  private notifyData: any;
  private isProcessing = false;
  public isConfirmNormal = false;
  private isFastCancel = false;
  private  bytes = [];
  // private vciEvents: EventEmitter<any> = new EventEmitter<any>()
  private respData = null;
  private store_multidata = [];
  constructor(private commService: ConnectivityService, private events: Events, private logger: NotifyService, private response: Response) {
    this.isFastCancel = false;
    this.events.subscribe(InnovaVCIEvent.INTERRUPT_PROCESS, () => {
      this.ResetListenerData();
      this.ResetResponse();
    });
  }
  public EventCallBackFunction = new EventEmitter();
  public isRegisterCallBack = false;

  // Add by ngoclb
  public ResetListenerData() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
    this.timerIntervalTick = 0;
    this.command = {};
    this.isProcessing = false;
    this.isFastCancel = false;
  }

  private ResetResponse() {
    this.bytes = [];
    this.response.resetResponse();
  }

  public async EnableFastCancel()
  {
    this.isFastCancel = true;
  }

  public async ResetFastCancel() {
    this.isFastCancel = false;
  }

  public async receivedData(data) {
    try {
      const { command, payload } = data;
    let data_load = null;
    let len_data = 0;

      if (command === 'Unknown') {
      data_load = payload.slice(4);
    }
      else {
      data_load = payload;
    }
    const [b0, b1, b2, b3, status, ...vcidata] = data_load; //remove four bytes of header when listening
      !isNullOrUndefined(this.timerInterval) && await clearInterval(this.timerInterval);
      this.isProcessing = false; // received status
      if (status === 0x99) //End Process
    {

        await this.events.publish('user:gui_info', { Finish: '' });
    }
      else {
        await this.notify_confirmack();
        if (command === 'Unknown') {
          length = vcidata.length - 1;
    }
        else {
      length = vcidata.length;
    }

        let str: string = DataParser.bytesToString(vcidata.slice(0, length)).replace('Select and press ENTER', '');
      //this.logger.log(str);
        str = str.replace('and press Enter', '');
      this.logger.log(str);
      var obj = JSON.parse(str);
        if (_.isObject(obj)) {
          await this.events.publish('user:gui_info', obj);
      }
    }
    }
    catch (err) {
      this.logger.log('Received GUI:' + err)
    }


    //this.EventCallBackFunction.emit(obj);
  }

  async notify_confirmack() {
    try {
      const procid = DataParser.arrayFromNumber(ENUMVCIs.VCIProg.gui, 2);
      const statid = DataParser.arrayFromNumber(ENUMVCIs.VCICmd_GUI.gui_host_ack, 1);
    const usbCommandHeader = [0x04, 0x00, 0x00, 0x00, 0x65, 0x00, 0x00, 0x00];
    const usbData = [];
      const cmdinfo = {
        id: 0x80,
        data: [].concat(usbCommandHeader, procid, statid, usbData, [0, 0])
      }
      let lencmd = [cmdinfo.data.length];
      const datacmd = [0xAD, cmdinfo.id, ...lencmd, ...cmdinfo.data];
    let cs = this.sumdata(datacmd);
    this.logger.log('Send GUI ACK')
    await this.commService.writeHex([...datacmd, cs])
    }
    catch (err) {
      this.logger.log('Gui ACK Error:' + err)
    }


  }

  public async disconnectBluetoothDevices(): Promise<boolean> {
    return this.commService.disconnectBluetoothDevices();
  }

  public async CloseConnection(): Promise<boolean> {
    return this.commService.CloseConnection();
  }

  public async BluetoothIsConnected():Promise<boolean> {
    return this.commService.BluetoothIsConnected();
  }

  public initialize(type: EnumSerialType): Promise<boolean> {
    return this.commService.initialize(async (data) => {
      await this.datareceivehandler(data)
    }, type
    )
  }

  public async connectBlueToothDevice(macAddress:string, cb?: any){ // changed by ngoclb
    try{
      let res = await this.commService.connectBlueToothDevice(macAddress,(data) => {
        this.datareceivehandler_bluetooth(data)
      },cb)
      return res;
    }
    catch (err) {
      //alert(err);
      return null; // add by ngoclb
    }
  }

  public async getBluetoothDevicesList(): Promise<object> {
    console.log('Run getBluetoothDevicesList: ');
    try {
      return await this.commService.listBluetoothDevices();
    }
    catch (err) {
      console.log('err: ', err);
      alert(err);
    }

  }

  public async getBluetoothBondedDevicesList(): Promise<object> {
    console.log('Run getBluetoothBondedDevicesList: ');
    try {
      return await this.commService.listBonnedBluetoothDevices();
    }
    catch (err) {
      console.log('getBluetoothBondedDevicesList err: ', err);
      alert(err);
    }

  }

  private sumdata(data): Number {
    let cs = 0;
    (data || []).map(t => {
      cs += t;
      return t
    })
    cs &= 0xff
    return cs
  }

  /**
   * [sendGetMultiData Function handle send and get multidata of Loggign]
   * @param  cmdinfo [cmd info]
   * @return         [data of response]
   */
  public sendGetMultiData(cmdinfo):Promise<{data,error}> {
    return new Promise(async resolve => {
      try {
        this.ResetListenerData();
        this.ResetResponse();
        let payload:any =[];
        this.command = {
          data: cmdinfo.data || [],
          id: cmdinfo.id,
          timeout: cmdinfo.timeout || 3000,
          nretry: cmdinfo.nretry || 3
        }
        let num_retry = 0;
        let lencmd = [this.command.data.length];
        if (this.command.data.length > 0x7f) {
          lencmd = DataParser.numberToBytes(this.command.data.length, 2)
          lencmd[0] |= 0x80;
        }
        const datacmd = [0xAD, this.command.id, ...lencmd, ...this.command.data]
        let cs = this.sumdata(datacmd)
        this.isProcessing = true
        //this.timerIntervalTick = 0
        this.respData = null
        this.setBleMsgRx(enumDataFrameType.unknowFrame)
        this.timerIntervalTick = 0;
        //this.respData.isvalid = false;
        await this.commService.writeHex([...datacmd, cs])
        if(this.commService.getSerialType() === EnumSerialType.Bluetooth)
        {
          this.command.timeout=this.command.timeout*3;
        }
        this.timerInterval && clearInterval(this.timerInterval);
        this.timerInterval =  setInterval(async ()=>{
          // this.logger.log('TimerID:' + this.timerInterval);
          this.timerIntervalTick +=10
          if(this.isProcessing == false)
          {
            payload  = this.respData;
            // this.command = undefined;
            // this.logger.log('Clear TimerID:' + this.timerInterval);
            // clearInterval(this.timerInterval);
            this.ResetListenerData()
            this.logger.log('Finish received with processing false (multi)')
            return resolve({
              error: undefined,
              data: payload
            })
          }
          if (this.getBleMsgRx() == enumDataFrameType.BusyFrame) {
            this.timerIntervalTick = 0;
            this.setBleMsgRx(enumDataFrameType.unknowFrame);
          }

          if (this.getBleMsgRx() == enumDataFrameType.StartMultiData) {
            this.timerIntervalTick = 0;
            this.setBleMsgRx(enumDataFrameType.unknowFrame);
          }
          if (this.getBleMsgRx() == enumDataFrameType.LogDataofMultiData) {
            // this.logger.log('Clear TimerID:' + this.timerInterval);
            this.timerIntervalTick = 0;
          //  payload.push(this.respData);
            this.logger.log('Data Logging package number:' + this.store_multidata.length)

          }
          if (this.getBleMsgRx() == enumDataFrameType.StopMultiData) {
            this.timerIntervalTick = 0;
            this.setBleMsgRx(enumDataFrameType.unknowFrame);
            !isNullOrUndefined(this.timerInterval) && await clearInterval(this.timerInterval);
            this.isProcessing = false;
            this.command = undefined;
            // this.respData.isvalid = false;
            this.logger.log('Finish received (Multi)')
            return resolve({
              error: undefined,
              data: this.store_multidata
            })
          }


          if(this.timerIntervalTick >= this.command.timeout)
          {
            num_retry++;
            //this.logger.log("time-clock:"+this.timerIntervalTick)
            this.logger.log("time-setup:"+this.command.timeout)
            this.logger.log('timeout')
            if(num_retry >= this.command.nretry)
            {
            //   this.command = undefined;
            //   this.timerIntervalTick=0;
            //   // this.logger.log('TimerID:' + this.timerInterval);
            //  !isNullOrUndefined(this.timerInterval) && await clearInterval(this.timerInterval);
            //  this.isProcessing = false
             this.ResetListenerData()
             this.ResetResponse()
              return resolve({
                error: { message: 'Time Out , No Response' },
                data: undefined
              })
            }
            else {
              await this.commService.writeHex([...datacmd, cs])
              this.timerIntervalTick = 0;
            }


          }
        }, 10)
      }
      catch (errsend) {
        return resolve({
          error: { message: 'sendGetMultiData error ' + errsend.message },
          data: undefined
        })
      }
    })
  }
  public sendData(cmdinfo):Promise<{data,error}> {
    return new Promise(async resolve => {
      try {
        // if(this.isFastCancel)
        // {
        //   this.logger.log('fast cancel, please reset fast cancel')
        //   return resolve( {
        //     data:undefined,
        //     error: { message: 'enable fast cancel, please reset fast cancel'},
        //   })
        // }
        if(this.isProcessing)
          {
            this.logger.log('linking busy')
            return resolve( {
            data:undefined,
            error: { message: 'Linking is busy , need wait to complete'},
          })
        }
        this.ResetListenerData()
        this.ResetResponse()
          //this.timerInterval =null;
        this.command = {
          data: cmdinfo.data || [],
          id: cmdinfo.id,
          timeout: cmdinfo.timeout || 3000,
          nretry: cmdinfo.nretry || 3
        }
        let num_retry = 0;
        // const __clearTimeout = ()=>{
        //   this.logger.log('clear timeout')
        //   if(!!this.timerTimeout)
        //   {
        //   clearTimeout(this.timerTimeout)
        //   this.timerTimeout=null;
        //   }
        // }
        // const ftimeout = () => {
        //   this.logger.log('start timeout '+this.command.timeout)
        //   this.timerTimeout = setTimeout(() => {
        //     this.logger.log('timeout !!!')
        //     this.isProcessing = false;
        //     resolve({
        //       error: { message: 'Time Out , No Response' },
        //       data: undefined
        //     })
        //   }, this.command.timeout)
        // }

        let lencmd = [this.command.data.length];
        if (this.command.data.length > 0x7f) {
          lencmd = DataParser.numberToBytes(this.command.data.length, 2)
          lencmd[0] |= 0x80;
        }
        const datacmd = [0xAD, this.command.id, ...lencmd, ...this.command.data]
        let cs = this.sumdata(datacmd)
        this.isProcessing = true
        //this.timerIntervalTick = 0
        this.respData = null
        this.setBleMsgRx(enumDataFrameType.unknowFrame)
        this.timerIntervalTick = 0;
        //this.respData.isvalid = false;
        await this.commService.writeHex([...datacmd, cs])
        if (this.commService.getSerialType() === EnumSerialType.Bluetooth) {
          // this.command.nretry=this.command.nretry*2;
          this.command.timeout = this.command.timeout * 2;
        }
        // const fGetData = async function():Promise<any>{
        //   this.timerIntervalTick +=10;
        //   if(this.getBleMsgRx() == enumDataFrameType.BusyFrame)
        //   {
        //     this.timerIntervalTick=0;
        //     this.setBleMsgRx(enumDataFrameType.unknowFrame);
        //   }
        //   if(!isNullOrUndefined(this.respData) && this.respData.isvalid)
        //   {
        //     // !isNullOrUndefined(this.timerInterval) && clearInterval(this.timerInterval);
        //     const {payload } = this.respData
        //     this.isProcessing = false;
        //     this.command = undefined;
        //     // this.respData.isvalid = false;
        //     this.logger.log('Finish received')
        //     return {
        //       error: undefined,
        //       data: payload
        //     }
        //   }
        //   if(this.timerIntervalTick >= this.command.timeout)
        //   {
        //     num_retry++;
        //     //this.logger.log("time-clock:"+this.timerIntervalTick)
        //     this.logger.log("time-setup:"+this.command.timeout)
        //     this.logger.log('timeout')
        //     if(num_retry == this.command.nretry)
        //     {
        //       this.command = undefined;
        //       this.timerIntervalTick=0;
        //      // !isNullOrUndefined(this.timerInterval) && clearInterval(this.timerInterval);
        //      this.isProcessing = false
        //       return {
        //         error: { message: 'Time Out , No Response' },
        //         data: undefined
        //       }
        //     }
        //     else
        //     {
        //       await this.commService.writeHex([...datacmd, cs])
        //       this.timerIntervalTick=0;
        //     }
        //
        //
        //   }
        //   setTimeout(fGetData,10);
        // }
        // const data =await fGetData();
        // return resolve(data);
        this.timerInterval && clearInterval(this.timerInterval);
        this.timerInterval =  setInterval(async ()=>{
          // this.logger.log('TimerID:' + this.timerInterval);
          this.timerIntervalTick +=10
          if(this.isProcessing == false)
          {
            const {payload=null } = this.respData;
            // this.command = undefined;
            // this.logger.log('Clear TimerID:' + this.timerInterval);
            // clearInterval(this.timerInterval);
            this.ResetListenerData()
            this.logger.log('Finish received with processing false')
            return resolve({
              error: undefined,
              data: payload
            })
          }
          if (this.getBleMsgRx() == enumDataFrameType.BusyFrame) {
            this.timerIntervalTick = 0;
            this.setBleMsgRx(enumDataFrameType.unknowFrame);
          }
          if (!isNullOrUndefined(this.respData) && this.respData.isvalid) {
            // this.logger.log('Clear TimerID:' + this.timerInterval);
            // !isNullOrUndefined(this.timerInterval) && await clearInterval(this.timerInterval);
            const {payload } = this.respData
            // this.isProcessing = false;
            // this.command = undefined;
            // this.respData.isvalid = false;
            this.ResetListenerData()
            this.logger.log('Finish received')
            return resolve({
              error: undefined,
              data: payload
            })
          }
          // if(this.isConfirmNormal)
          // {
          //   !isNullOrUndefined(this.timerInterval) && clearInterval(this.timerInterval);
          //   //const {payload } = this.respData
          //   this.isProcessing = false;
          //   this.command = undefined;
          //   this.isConfirmNormal = false;
          //   this.logger.log('Return Normal Status')
          //   return resolve({
          //     error: undefined,
          //     data: []
          //   })
          // }

          if(this.timerIntervalTick >= this.command.timeout)
          {
            // var isOpenPort = await this.commService.blIsCheckOpenPort();
            // if(isOpenPort)
            // {
            //   await this.commService.CloseConnection().then(async ()=>{
            //     await this.commService.reinitlialize();
            //   })
            // }
            num_retry++;
            //this.logger.log("time-clock:"+this.timerIntervalTick)
            this.logger.log("time-setup:"+this.command.timeout)
            this.logger.log('timeout commandId='+JSON.stringify(cmdinfo));
            if(num_retry >= this.command.nretry)
            {
            //   this.command = undefined;
            //   this.timerIntervalTick=0;
            //   // this.logger.log('TimerID:' + this.timerInterval);
            //  !isNullOrUndefined(this.timerInterval) && clearInterval(this.timerInterval);
            //  this.isProcessing = false
              this.ResetListenerData()
              this.ResetResponse()
              return resolve({
                error: { message: 'Time Out , No Response' },
                data: undefined
              })
            }
            else {
              await this.commService.writeHex([...datacmd, cs])
              this.timerIntervalTick = 0;
            }


          }
        },10)
        // // ftimeout()

        // this.vciEvents.subscribe((respdata) => {

        //   if(!isObject(respdata))
        //     return;

        //   let {isLinkVCI, isstarttimeout, payload } = respdata
        //   if(!!!isLinkVCI)
        //     return;
        //   __clearTimeout();
        //   if (!!isstarttimeout) {
        //     // __clearTimeout();
        //     ftimeout()
        //     return;
        //   }
        //   this.logger.log(JSON.stringify(respdata))
        //   this.isProcessing = false
        //   return resolve({
        //     data: payload,
        //     error:undefined
        //   })
        // })

      } catch (errsend) {
        this.isProcessing = false
        return resolve({
          error: { message: 'sendData error ' + errsend.message },
          data: undefined
        })
      }
    })
  }

  public async testWrite(): Promise<boolean> {
    await this.sendData({ id: 0xE1, timeout: 100, nretry: 0 })
    return true
  }

  private isConfirmNormalStatus(bytes) {
    if (isNullOrUndefined(this.command)) {
      return false;
    }
    const { id = 1 } = this.command;
    return (
      (bytes[0] === 0xda || bytes[0] === 0xdd) &&
      bytes[1] === id + 1 &&
      bytes[2] === 7 &&
      bytes[3] === 0 &&
      bytes[4] === 2 &&
      bytes[5] === 0 &&
      bytes[6] === 0 &&
      bytes[7] === 0 &&
      bytes[8] === 0xaa &&
      bytes[9] === 0 &&
      bytes[10] === 0 &&
      bytes[11] === 14

    );
  }
  private isFrameACK(bytes) {
    // const { command = {} } = this;
    if (isNullOrUndefined(this.command)) {
      return false;
    }
    const { id = 1 } = this.command;
    return (
      (bytes[0] === 0xda || bytes[0] === 0xdd) &&
      bytes[1] === id + 1 &&
      bytes[2] === 4 && /*Hung Vo fix wrong frame ACK*/
      bytes[3] === 0 &&
      bytes[4] === 0xc4 &&
      bytes[5] === 0 &&
      bytes[6] <= 48 &&
      bytes[7] === 0
    );
  }


  private isFrameBusy(bytes) {
    const busyFrame = [0xdd, 0xc3, 0x02, 0x00, 0x00, 0x00, 0xa2];
    const busyFrame2 = [0xda, 0xc3, 0x02, 0x00, 0x00, 0x00, 0x9f];
    if (bytes.length > 7) {
      return (_.isEqual(bytes.slice(0, 6), busyFrame) || _.isEqual(bytes.slice(0, 6), busyFrame2));
    }
    else if (bytes.length == 7) {
      return (_.isEqual(bytes, busyFrame) || _.isEqual(bytes, busyFrame2));
    }

  }


  private isRequestACK(bytes) {
    const { command = {} } = this;
    const { id = 1 } = command;
    return bytes.length === 7 && (bytes[0] === 0xda || bytes[0] === 0xdd) && bytes[1] === id + 1 && bytes[4] === 0xc5;
  }

  private isStartMultiData(bytes) {
    const { command = {} } = this;
    return (bytes[0] === 0xda || bytes[0] === 0xdd) && (bytes[1] === 0x5B) && bytes[4] === 0x01;
  }

  private isStopMultiData(bytes) {
    const { command = {} } = this;
    return (bytes[0] === 0xda || bytes[0] === 0xdd) && (bytes[1] === 0x5B) && bytes[4] === 0x00;
  }

  private isDataofMulti(bytes) {
    const { command = {} } = this;
    return (bytes[0] === 0xda || bytes[0] === 0xdd) && (bytes[1] === 0x5B) && bytes[4] === 0x02;
  }


  private setBleMsgRx(type) {
    this.BleMsgRx = type; //BLEMsg.unknowFrame;
  }

  private getBleMsgRx() {
    return this.BleMsgRx;
  }


  private isNotifyPacket(bytes) {
    return bytes[0] === 0xda && bytes[1] === 0xc1;
  }


  private isStreamOEMPidData(bytes) {
    return bytes[0] === 0xda && bytes[1] === 0x76;
  }

  private __onNotifyEvents(eventId, data) {

    if (this.callbackNotify == undefined)
      return

    const dataEvent = parserNotifyEvents(eventId, data)
    this.callbackNotify(eventId, dataEvent)
  }

  private __resetTimerTimeout() {

    // !!this.timerTimeout && this.vciEvents.emit({isLinkVCI:true, isstarttimeout: true })
  }

  private async datareceivehandler(dataarray) {
    try {

      if (isNullOrUndefined(dataarray) || dataarray.length == 0) {
        return;
      }
      //const bytes = [];
      var bytes_temp = [];
      (dataarray || []).map(xx => {
          this.bytes.push(xx)
          return xx
      })
      if (this.bytes[0] != 0xDA) {
        // not valid response
        this.logger.log("not valid response")
        this.bytes =[];
        return;
      }
      let lendata=(this.bytes[2] + (this.bytes[3] << 8)) + 5;
      //this.logger.log("len expect"+lendata)
      if((this.bytes.length)< lendata)
      {
          // ngoclb: display log in other way
          this.logger.logComRx(`${DataParser.bytesToHexString(dataarray.slice(0, 22))}${dataarray.length>22?'xxx':''} ...${this.bytes.length}/${lendata}`);
          return;
      }
      else {
         // this.logger.log("len data"+(this.bytes.length))
        //  this.logger.log(this.bytes)
        this.logger.log('Finish getting data');
          bytes_temp = this.bytes;
          // ngoclb: display log in other way
          this.logger.logComRx(`${DataParser.bytesToHexString(this.bytes.slice(-1))} [CS]`);
          this.logger.logComRx(`${DataParser.bytesToHexString(bytes_temp)} [${bytes_temp.length} bytes]`, true);


        this.bytes = [];
      }

      if (this.isFrameBusy(bytes_temp)) {
        this.logger.logComRx('Busy')
        this.timerIntervalTick = 0;
        if (this.isRegisterCallBack == true && this.isConfirmNormal == true) {
          await this.events.publish('user:gui_info', { KeepAlive: '' });
          this.logger.log('KeepAlive GUI');
        }
        this.setBleMsgRx(enumDataFrameType.BusyFrame);
        return;
      }

      if (this.isFrameACK(bytes_temp)) {
        this.setBleMsgRx(enumDataFrameType.RespFrameACK);
        this.logger.logComRx('FrameACK')
        return;
      }

      if (this.isStartMultiData(bytes_temp)) {
        this.setBleMsgRx(enumDataFrameType.StartMultiData);
        this.store_multidata = [];
        this.logger.logComRx('StartMultiData')
        return;
      }

      if (this.isStopMultiData(bytes_temp)) {
        this.setBleMsgRx(enumDataFrameType.StopMultiData);
        this.logger.logComRx('StopMultiData')
        return;
      }



      if (this.isRequestACK(bytes_temp)) {
        this.setBleMsgRx(enumDataFrameType.ReqFrameACK);
        this.logger.logComRx('RequestACK')
        return;
      }
      // check for notify packet
      if (this.isNotifyPacket(bytes_temp)) {
        const lenNotifyExpected = bytes_temp[2] + (bytes_temp[3] << 8);
        const _isDone = ((lenNotifyExpected + 5) === bytes_temp.length)
        this.logger.log('this.isNotifyPacket(bytes_temp)');
        this.notifyData = {
          id: bytes_temp[4],
          expectedLen: lenNotifyExpected,
          payload: _.slice(bytes_temp, 5, bytes_temp.length - 1),
          isDone: _isDone,
          waiting: !_isDone
        }

      } else if (this.notifyData && this.notifyData.waiting) {
        this.notifyData.payload = (this.notifyData.payload || []).concat(bytes_temp)
        this.logger.logComRx('notifyData.payload.length' + this.notifyData.payload.length)
        this.logger.logComRx('notifyData.expectedLen' + this.notifyData.expectedLen)
        this.logger.log('this.notifyData && this.notifyData.waiting');
        if ((this.notifyData.payload.length + 1) >= this.notifyData.expectedLen) {
          this.notifyData.isDone = true
        }
      }
      // else
      // {
      //   this.logger.log('XXXXXXX');
      // }

      if (this.notifyData && this.notifyData.isDone) {
        this.logger.log('this.notifyData && this.notifyData.isDone');
        this.__onNotifyEvents(this.notifyData.id, this.notifyData.payload)
        this.setBleMsgRx(enumDataFrameType.NotifyFrame);
        this.__resetTimerTimeout()
        this.notifyData = null
        return;
      }
      if (this.isConfirmNormalStatus(bytes_temp)) {

        if (this.isConfirmNormal || this.isRegisterCallBack == false) {
              this.isConfirmNormal = false;
            }
            this.logger.log('Confirm Normal Status');

      }
      this.response.resetResponse()
      let resp = this.response.parseResponse(bytes_temp, this.command);

      //received response before timeout
      if (resp) {
        this.setBleMsgRx(enumDataFrameType.NotifyFrame);

      }
      else if (this.command) {
        this.__resetTimerTimeout()
      }
      if (resp) {
        // this.vciEvents.emit({isLinkVCI:true,...resp});
        if (this.isDataofMulti(bytes_temp)) {
          this.setBleMsgRx(enumDataFrameType.LogDataofMultiData);
          this.logger.logComRx('Data of Multi Data with chunk index:' + bytes_temp[5]);
        //  let resp_multidata =
          this.store_multidata.push(
            {
              index: bytes_temp[5],
              payload: bytes_temp.slice(6, bytes_temp.length - 1)
            }

          )
        }
        this.logger.log('Got Valid Response')
        this.respData = { ...resp, isvalid: true }
        this.response.resetResponse();
        if (this.isRegisterCallBack == true && this.isConfirmNormal == true) {
          // if(!isNullOrUndefined(this.EventCallBackFunction))
          // {
            //this.isConfirmNormal = false;
              await this.receivedData(this.respData);
          // }
        }


      }
      if (this.isConfirmNormalStatus(bytes_temp)) {
        if (this.isRegisterCallBack) {
            this.isConfirmNormal = true;
          }

          this.logger.log('Confirm Normal');
          // this.timerIntervalTick =0;
          // return;
      }
    } catch (err) {
      this.bytes = [];
      this.logger.log('datareceivehandler ' + err)
      throw new Error(err);
    }
  }

  private async datareceivehandler_bluetooth(dataarray) {
    try {

      if (isNullOrUndefined(dataarray) || dataarray.length == 0) {
        return;
      }
      //const bytes = [];
      var bytes_temp = [];
      (dataarray || []).map(xx => {
          this.bytes.push(xx)
          return xx
      })
      if (this.bytes.length <= 2) {
        //this.logger.log("received len: "+this.bytes.length)
        return;
      }
      let lendata = (this.bytes[2] + (this.bytes[3] << 8)) + 5;

      //this.logger.log("len expect"+lendata)
      if ((this.bytes.length) < lendata) {
          //this.logger.log("len data"+(this.bytes.length))
          //this.logger.log("waiting enough data")
          return;
      }
      else {
        this.logger.log("Received Valid:" + (lendata) + " bytes")
         //this.logger.log(this.bytes)
          //this.logger.log('Finish getting data');
        //  this.logger.log('buffer:' + DataParser.bytesToHexString(this.bytes));
        bytes_temp = this.bytes.slice(0, lendata);
          this.bytes = this.bytes.slice(lendata);
          this.logger.log('RX:' + DataParser.bytesToHexString(bytes_temp));
          //this.logger.log('buf:' + DataParser.bytesToHexString(this.bytes));
          // if(this.commService.getSerialType() == EnumSerialType.Serial_USB)
          // {
          //   this.bytes =[];
          // }

      }


      if (this.isFrameBusy(bytes_temp)) {
        this.logger.logComRx('Busy')
        this.logger.log('Busy')
        this.timerIntervalTick = 0;
        this.setBleMsgRx(enumDataFrameType.BusyFrame);
        if (this.isRegisterCallBack == true && this.isConfirmNormal == true) {
          await this.events.publish('user:gui_info', { KeepAlive: '' });
          this.logger.log('KeepAlive GUI');
        }
        return;
      }

      if (this.isFrameACK(bytes_temp)) {
        this.setBleMsgRx(enumDataFrameType.RespFrameACK);
        this.logger.logComRx('FrameACK')
        return;
      }

      if (this.isRequestACK(bytes_temp)) {
        this.setBleMsgRx(enumDataFrameType.ReqFrameACK);
        this.logger.logComRx('RequestACK')
        return;
      }
      // check for notify packet
      if (this.isNotifyPacket(bytes_temp)) {
        const lenNotifyExpected = bytes_temp[2] + (bytes_temp[3] << 8);
        const _isDone = ((lenNotifyExpected + 5) === bytes_temp.length)
        this.logger.log('this.isNotifyPacket(bytes_temp)');
        this.notifyData = {
          id: bytes_temp[4],
          expectedLen: lenNotifyExpected,
          payload: _.slice(bytes_temp, 5, bytes_temp.length - 1),
          isDone: _isDone,
          waiting: !_isDone
        }

      } else if (this.notifyData && this.notifyData.waiting) {
        this.notifyData.payload = (this.notifyData.payload || []).concat(bytes_temp)
        this.logger.logComRx('notifyData.payload.length' + this.notifyData.payload.length)
        this.logger.logComRx('notifyData.expectedLen' + this.notifyData.expectedLen)
        this.logger.log('this.notifyData && this.notifyData.waiting');
        if ((this.notifyData.payload.length + 1) >= this.notifyData.expectedLen) {
          this.notifyData.isDone = true
        }
      }
      // else
      // {
      //   this.logger.log('XXXXXXX');
      // }

      if (this.notifyData && this.notifyData.isDone) {
        this.logger.log('this.notifyData && this.notifyData.isDone');
        this.__onNotifyEvents(this.notifyData.id, this.notifyData.payload)
        this.setBleMsgRx(enumDataFrameType.NotifyFrame);
        this.__resetTimerTimeout()
        this.notifyData = null
        return;
      }
      if (this.isConfirmNormalStatus(bytes_temp)) {

        if (this.isConfirmNormal || this.isRegisterCallBack == false) {
              this.isConfirmNormal = false;
            }
            this.logger.log("Confirm Normal Status")
      }
      this.response.resetResponse()
      let resp = this.response.parseResponse(bytes_temp, this.command);

      //received response before timeout
      if (resp) {
        this.setBleMsgRx(enumDataFrameType.NotifyFrame);

      }
      else if (this.command) {
        this.__resetTimerTimeout()
      }
      if (resp) {
        // this.vciEvents.emit({isLinkVCI:true,...resp});
        //this.logger.log('lenght response'+bytes_temp.length);
        this.respData = { ...resp, isvalid: true }
        this.response.resetResponse();
        if (this.isRegisterCallBack == true && this.isConfirmNormal == true) {
          // if(!isNullOrUndefined(this.EventCallBackFunction))
          // {
            //this.isConfirmNormal = false;
            await this.receivedData(this.respData);
          // }
        }


      }
      if (this.isConfirmNormalStatus(bytes_temp)) {
        if (this.isRegisterCallBack) {
            this.isConfirmNormal = true;
          }

          this.logger.logComRx('Confirm Normal Status');
          // this.timerIntervalTick =0;
          // return;
      }
    } catch (err) {
      this.bytes = [];
      this.logger.log('datareceivehandler ' + err)
    }
  }

}
