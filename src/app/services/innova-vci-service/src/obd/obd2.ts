/**
 * @Author: quocdo-macbook
 * @Date:   2020-11-06T22:46:24+07:00
 * @Last modified by:   quocdo-macbook
 * @Last modified time: 2022-03-01T11:57:14+07:00
 */



import { Injectable } from '@angular/core';
import * as ENUMs from './../standard/enums'
import * as ENUMVCIs from './vcistd'
import { OBDx } from './obd'
import * as _ from 'lodash'
import * as OBDUtil from './obdUtils'
import { isNullOrUndefined } from 'util';
import * as DataParser from './../utilities/dataParser'
import { enumProtocol } from './../standard/enums';
// import * from './../standard/enums';

@Injectable({
    providedIn: 'root'
})

export class OBD2 extends OBDx {

    // added by NGOCLB
    private isCancelQuery = false;
    public stopQuery() {
      this.isCancelQuery = true;
    }

    public async Query(cbinfo = null, isNeedCheckVoltage?: boolean): Promise<enumProtocol> {
        try {

            const notifyInfo = (percent = 0, index = 0, total = 0, message = undefined, isfinish = false) => {
                cbinfo && cbinfo({ percent, index, total, message, isfinish });
            }

            //get total process
            let result = await this.LinkVciCmd({
                Procid: ENUMVCIs.VCIProg.obd2,
                stateid: ENUMVCIs.VCICmd_obd2.start_Query,
                nretry: 0, // added by ngoclb
                timeout: 200
            }) || []

            const listProtocol = _.chunk(result, 2)
            let index = 0
            const total = listProtocol.length;
            if (_.isEmpty(listProtocol)) {
                notifyInfo(100.0, 0, 0, undefined, true)
                return enumProtocol.eprotocol_PROTOCOL_NO;
            }
            const fFuncCheckVoltage = async () => {
              const usbData = [0, 0]
        const batvol = await this.LinkVciCmd({
          Procid: ENUMVCIs.VCIProg.tool,
          stateid: ENUMVCIs.VCICmd_tool.getecuvoltage, usbData, nretry: 0, timeout: 1000
              })
              let j = DataParser.bytesToString(batvol);
        if (j.search("Battery Voltage") > 0) {
                  var temp = JSON.parse(j.replace("Battery Voltage", "BatteryVoltage"));
                  return temp['BatteryVoltage'];
              }
              let v = new Float32Array(new Uint8Array(batvol).buffer)[0];
              if (!isNullOrUndefined(v)) {
                  return v;
              }
            }
            this.isCancelQuery = false;
            const fLinkToProtx = async (list) => {
                try {
                    index++;
                    if (_.isEmpty(list) || this.isCancelQuery) {
                        this.isCancelQuery = false;
                        return enumProtocol.eprotocol_PROTOCOL_NO;
                    }
                    if (isNeedCheckVoltage) {
                      //14-08-2020 11:56 Quoc Do update here to check voltage
                      let _ecuvol = await fFuncCheckVoltage();
                      if(_ecuvol<1)
                      {
                        return enumProtocol.eprotocol_UNKNOWN; // changed to UNKNOWN by ngoclb
                      }
                    }
                    let protocolx = list.shift();
                    // protocolx = [5,0]
                    const idprotocol = ((protocolx[1] << 8) & 0xff00) + protocolx[0];
                    // this.logdebug(protocolx)
                    notifyInfo((100.0 * index / total), index, total, OBDUtil.enumProtocolToString(idprotocol))
                    this.logdebug('start link ' + protocolx);
                    const respdata = await this.LinkVciCmd({
                        Procid: ENUMVCIs.VCIProg.obd2,
                        stateid: ENUMVCIs.VCICmd_obd2.Link_To_Prot_N, usbData: protocolx
                    })
                    //  this.logdebug('finished')
                    if (!isNullOrUndefined(respdata) && respdata[0] == 0xaa) {
                        return idprotocol
                    }
                    else {
                        return await fLinkToProtx(list)
                    }

                } catch (_err) {
                    this.logdebug('stop query ' + _err)
                    return enumProtocol.eprotocol_PROTOCOL_NO;
                }
            }
            const linkedProtocol = await fLinkToProtx(listProtocol);
            this.logdebug('finished ' + linkedProtocol) // added by ngoclb
            notifyInfo(100.0, total, total, OBDUtil.enumProtocolToString(linkedProtocol), true)
            return linkedProtocol;
        } catch (err) {
            this.logdebug('crash ' + err);
            return enumProtocol.eprotocol_PROTOCOL_NO;
}
}

public async quick_retreiveData(cb:({message})=>any = null, readFFDtc?: boolean) {
   // changed by ngoclb
  const args = readFFDtc ? [
    {id:ENUMVCIs.VCICmd_obd2.Read_Dtc,message:'Reading DTC',data:[]},
    {id:ENUMVCIs.VCICmd_obd2.freezeframe,message:'Reading FreezeFrame',data:[]},
    {id:ENUMVCIs.VCICmd_obd2.ReadService9,message:'Read Service 9',data:[]},
  ] : [
    {id:ENUMVCIs.VCICmd_obd2.monitoricon,message:'Reading Monitor Icon',data:[]}, //need read monitor icon first
    {id:ENUMVCIs.VCICmd_obd2.ReadVin,message:'Reading VIN',data:[]},
  ]

  const f = async (dd) => {
    try {
      if(dd.length == 0)
      return true;
      const d = dd.shift();

      cb && cb(d.message)

      await this.LinkVciCmd({
        Procid: ENUMVCIs.VCIProg.obd2,
        stateid: d.id,
        usbData: d.data,nretry:3,timeout:10000
      })
      return await f(dd);
    } catch (err) {
      return false
    }
  }
  return await f(args);
}

public async retreiveData(cb:({message})=>any = null) {
        const args = [
            {id:ENUMVCIs.VCICmd_obd2.monitoricon,message:'Reading Monitor Icon',data:[]},

            {id:ENUMVCIs.VCICmd_obd2.Read_Dtc,message:'Reading DTC',data:[]},
            {id:ENUMVCIs.VCICmd_obd2.freezeframe,message:'Reading FreezeFrame',data:[]},
            {id:ENUMVCIs.VCICmd_obd2.ReadVin,message:'Reading VIN',data:[]},
            //{id:ENUMVCIs.VCICmd_obd2.ReadService5,message:'Read Service 5',data:[]},
            //{id:ENUMVCIs.VCICmd_obd2.ReadService6,message:'Read Service 6',data:[]},
            //{id:ENUMVCIs.VCICmd_obd2.ReadService8,message:'Read Service 8',data:[]},
            {id:ENUMVCIs.VCICmd_obd2.ReadService9,message:'Read Service 9',data:[]},
      { id: ENUMVCIs.VCICmd_obd2.GetReport, message: 'Reading Report full', data: [...DataParser.numberToBytes(ENUMVCIs.VCICmd_obd2_reporttype.report_full, 1)] }
    ]

    const f = async (dd) => {
      try {
        if (dd.length == 0)
          return true;
        const d = dd.shift();

        cb && cb(d.message)

        await this.LinkVciCmd({
          Procid: ENUMVCIs.VCIProg.obd2,
          stateid: d.id,
          usbData: d.data, nretry: 3, timeout: 10000
        })
        return await f(dd);
      } catch (err) {
        return false
      }
    }
    return await f(args);
  }

  public async retreiveFFDTCMonData(cb: ({ message }) => any = null) {
    const args = [
      { id: ENUMVCIs.VCICmd_obd2.monitoricon, message: 'Reading Monitor Icon', data: [] },
      { id: ENUMVCIs.VCICmd_obd2.Read_Dtc, message: 'Reading DTC', data: [] },
      { id: ENUMVCIs.VCICmd_obd2.freezeframe, message: 'Reading FreezeFrame', data: [] },
    ]

    const f = async (dd) => {
      try {
        if (dd.length == 0)
          return true;
        const d = dd.shift();

        cb && cb(d.message)

        await this.LinkVciCmd({
          Procid: ENUMVCIs.VCIProg.obd2,
          stateid: d.id,
          usbData: d.data, nretry: 3, timeout: 10000
        })
        return await f(dd);
      } catch (err) {
        return false
      }
    }
    return await f(args);
  }

  public async retreiveDTCData(cb: ({ message }) => any = null) {
    const args = [
      { id: ENUMVCIs.VCICmd_obd2.Read_Dtc, message: 'Reading DTC', data: [] },
        ]

        const f = async (dd) => {
            try {
                if(dd.length == 0)
                return true;
                const d = dd.shift();

                cb && cb(d.message)

                await this.LinkVciCmd({
                    Procid: ENUMVCIs.VCIProg.obd2,
                    stateid: d.id,
                    usbData: d.data,nretry:3,timeout:10000
                })
                return await f(dd);
            } catch (err) {
                return false
            }
        }
        return await f(args);
    }

    public async getVehicleProfile() {

        try {
            await this.LinkVciCmd({
                Procid: ENUMVCIs.VCIProg.obd2,
                stateid: ENUMVCIs.VCICmd_obd2.ReadVin
            })

            const resp = await this.LinkVciCmd({
                Procid: ENUMVCIs.VCIProg.obd2,
                stateid: ENUMVCIs.VCICmd_obd2.getymmeprofile
            })

            return resp;
        } catch (err) {
            return undefined
        }
    }

    public async QueryProtocolCAN(eProtocol: enumProtocol) {
        return await this.LinkVciCmd({
            Procid: ENUMVCIs.VCIProg.obd2,
            stateid: ENUMVCIs.VCICmd_obd2.Link_To_Prot_N, usbData: DataParser.numberToBytes(eProtocol, 2)
        })
    }

  public async Erase_OBD2_Dtcs() {
      const usbData = [];
        //link sid 05
        const data= await this.LinkVciCmd({
            Procid: ENUMVCIs.VCIProg.obd2,
            stateid: ENUMVCIs.VCICmd_obd2.Erase_Dtc,
            usbData,
            nretry: 1, timeout:10000
        })
    // this.logdebug(`erase res: ${data}`)
        let result="OK";
    if (data == undefined) {
            result="sent";
    } else if (data.status) {
      result = data.error ? data.error : "unknown error"
        }
        return({result: result})
    }

  public async link_OBD2_SPECIALTEST_SID6() {
      const usbData = [];
        //link sid 05
        const data= await this.LinkVciCmd({
            Procid: ENUMVCIs.VCIProg.obd2,
            stateid: ENUMVCIs.VCICmd_obd2.ReadService6,
            usbData,
            nretry: 1, timeout:4000
        })
        let result="OK";
    if (data == undefined) {
            result="sent";
        }
        return({result: result})
    }

  public async link_OBD2_SPECIALTEST_SID5() {
        const usbData = [];
        const data= await this.LinkVciCmd({
            Procid: ENUMVCIs.VCIProg.obd2,
            stateid: ENUMVCIs.VCICmd_obd2.ReadService5,
            usbData,
            nretry: 1, timeout:4000
        })
        let result="OK";
    if (data == undefined) {
            result="sent";
        }
        return({result: result})
    }

  public async link_OBD2_SPECIALTEST_SID8() {
        const usbData = [];
        const data= await this.LinkVciCmd({
            Procid: ENUMVCIs.VCIProg.obd2,
            stateid: ENUMVCIs.VCICmd_obd2.ReadService8,
            usbData,
            nretry: 1, timeout:4000
        })
        let result="OK";
    if (data == undefined) {
            result="Not support";
        }
    else {
      switch (data[0]) {
             case ENUMVCIs.enumEVAPStatus.eEVAPSTATE_NO_SUP:
              result="Not support";
             break;
             case ENUMVCIs.enumEVAPStatus.eEVAPSTATE_SUP_OK:
              result="OK";
             break;
             case ENUMVCIs.enumEVAPStatus.eEVAPSTATE_RES_NEG:
             case ENUMVCIs.enumEVAPStatus.eEVAPSTATE_RES_NO:
              result="Sent";
             break;


           }
        }
        return({result: result})
    }

  public async getVehReport_MIL_Status() {
      let ret = {MilStatus:undefined}
      const usbData = [...DataParser.numberToBytes(ENUMVCIs.VCICmd_obd2_reporttype.report_mil_stat, 1)];
      const data= await this.LinkVciCmd({
          Procid: ENUMVCIs.VCIProg.obd2,
          stateid: ENUMVCIs.VCICmd_obd2.GetReport,
          usbData
      })
      let j = DataParser.bytesToString(data)
    if (j.search("Mil Status") > 0) {
          var temp = JSON.parse(j.replace("Mil Status", "MilStatus"));
          return temp as string;
      }
      let v = new Int8Array(new Uint8Array(data).buffer)[0];
      if (!isNullOrUndefined(v)) {
      if (v === 0) {
            return ({MilStatus:"OFF"})
          }
      else {
            return ({MilStatus:"ON"})
          }
      }
      return ret
    }

  public async getVehReport_DriveCycle_Mon_List() {
    return new Promise(async resolve => {
      {
        try{
          const usbData = [...DataParser.numberToBytes(ENUMVCIs.VCICmd_obd2_reporttype.report_drivecycle_mon_list, 1)];
          const data= await this.LinkVciCmd({
            Procid: ENUMVCIs.VCIProg.obd2,
            stateid: ENUMVCIs.VCICmd_obd2.GetReport,
            usbData
          })
          let j = DataParser.bytesToString(data)
          this.logdebug(j)
          return resolve(JSON.parse(j));
        }
        catch(err){
          this.logdebug(err);
          return resolve({})
        }


      }
    })
  }

  public async getVehReport_DriveCycle_Mon_Text(textid: number) {
    return new Promise(async resolve => {
      try{
        const usbData = [...DataParser.numberToBytes(ENUMVCIs.VCICmd_obd2_reporttype.report_drivecycle_mon_text, 1), ...DataParser.numberToBytes(textid as number, 1)];
        const data= await this.LinkVciCmd({
          Procid: ENUMVCIs.VCIProg.obd2,
          stateid: ENUMVCIs.VCICmd_obd2.GetReport,
          usbData, nretry: 1, timeout:4000
        })
        this.logdebug("textid:"+DataParser.numberToBytes(textid as number, 1));
        let j = DataParser.bytesToString(data).split('``').join('`')
        j=j.split('`').join('\\n')
        this.logdebug(j)
        return resolve(JSON.parse(j));
      }
      catch (err) {
        this.logdebug(err);
        return resolve({})
      }
})
}

  public async getYMMEString() {
    return new Promise(async resolve => {
  try{
  const usbData = [...DataParser.numberToBytes(ENUMVCIs.VCICmd_obd2_reporttype.report_ymme, 1)]
  const t = await this.LinkVciCmd({
    Procid: ENUMVCIs.VCIProg.obd2,
    stateid: ENUMVCIs.VCICmd_obd2.GetReport,
          usbData, nretry: 3, timeout: 7000
    })
  let j = DataParser.bytesToString(t)
  //this.logdebug(j);
  return resolve(JSON.parse(j));
  }
      catch (err) {
    this.logdebug('getYMMEString error:' + err);
    return resolve({});
  }

})
}

  public async getMonitorIcon() {
  return new Promise(async resolve =>{
    try{
    const usbData = [...DataParser.numberToBytes(ENUMVCIs.VCICmd_obd2_reporttype.report_mon_stat, 1)]
    const t = await this.LinkVciCmd({
      Procid: ENUMVCIs.VCIProg.obd2,
      stateid: ENUMVCIs.VCICmd_obd2.GetReport,
      usbData, nretry: 3, timeout:7000
    })
    let j = DataParser.bytesToString(t)
    //this.logdebug(j);
    return resolve(JSON.parse(j));
    }
      catch (err) {
      this.logdebug('getMonitorIcon error:' + err);
      return resolve({});
    }

  })
}

  //01-03-2022 11:16 Quoc Do added for get new monitor status using PID 41
  public async getMonitorIcon_SID41() {
    return new Promise(async resolve => {
      try {
        const usbData = [...DataParser.numberToBytes(ENUMVCIs.VCICmd_obd2_reporttype.report_TDC_monitor, 1)]
        const t = await this.LinkVciCmd({
          Procid: ENUMVCIs.VCIProg.obd2,
          stateid: ENUMVCIs.VCICmd_obd2.GetReport,
          usbData, nretry: 3, timeout: 7000
        })
        let j = DataParser.bytesToString(t)
        //this.logdebug(j);
        return resolve(JSON.parse(j));
      }
      catch (err) {
        this.logdebug('getMonitorIcon_SID41 error:' + err);
        return resolve({});
      }

    })
  }

  //01-03-2022 11:39 Quoc Do added new function read RPM VSS
  //{
  //   "Rpm": 16383,
  //   "Vss": 10
  // }

  public async getRPM_VSS() {
    return new Promise(async resolve => {
      try {
        const usbData = [...DataParser.numberToBytes(ENUMVCIs.VCICmd_obd2_reporttype.report_RPM_VSS, 1)]
        const t = await this.LinkVciCmd({
          Procid: ENUMVCIs.VCIProg.obd2,
          stateid: ENUMVCIs.VCICmd_obd2.GetReport,
          usbData, nretry: 3, timeout: 7000
        })
        let j = DataParser.bytesToString(t)
        //this.logdebug(j);
        return resolve(JSON.parse(j));
      }
      catch (err) {
        this.logdebug('getRPM_VSS error:' + err);
        return resolve({});
      }

    })
  }

  public async getVehicleInfo_SID9() {
  return new Promise(async resolve =>{
    try{
    const usbData = [...DataParser.numberToBytes(ENUMVCIs.VCICmd_obd2_reporttype.report_vehicle_info, 1)]
    const t = await this.LinkVciCmd({
      Procid: ENUMVCIs.VCIProg.obd2,
      stateid: ENUMVCIs.VCICmd_obd2.GetReport,
      usbData, nretry: 3, timeout:7000
    })
    let j = DataParser.bytesToString(t)
      this.logdebug('Vehicle info res:'+j);
    return resolve(JSON.parse(j));
      } catch (err) {
      this.logdebug('Vehicle info err:'+err);
      return resolve({});
    }

  })
}


  public async getFreezeFrameDTCInfo() {
  return new Promise(async resolve =>{
    try{
    const usbData = [...DataParser.numberToBytes(ENUMVCIs.VCICmd_obd2_reporttype.report_ff_info, 1)]
    const t = await this.LinkVciCmd({
      Procid: ENUMVCIs.VCIProg.obd2,
      stateid: ENUMVCIs.VCICmd_obd2.GetReport,
      usbData, nretry: 3, timeout:7000
    })
      let j = JSON.parse(DataParser.bytesToString(t));
        if (j.length > 0) {
        j[3] = j[3]!=undefined?ENUMVCIs.EnumSeverityText[j[3]]:ENUMVCIs.EnumSeverityText[0];
      }

    //this.logdebug(j);
      return resolve(j);
    }
      catch (err) {
      this.logdebug('FF Dtc Info err:'+err);
      return resolve({});
    }

  })
}

  public async getFreezeFrameLiveData() {
  return new Promise(async resolve =>{
      try {
				const usbData = [
					...DataParser.numberToBytes(
						ENUMVCIs.VCICmd_obd2_reporttype.report_ff_ld,
						1
					),
				];
    const t = await this.LinkVciCmd({
      Procid: ENUMVCIs.VCIProg.obd2,
      stateid: ENUMVCIs.VCICmd_obd2.GetReport,
					usbData,
					nretry: 3,
					timeout: 7000,
				});
				let j = DataParser.bytesToString(t);
    return resolve(JSON.parse(j));
			} catch (err) {
        this.logdebug('FF LD Info err:' + err);
        return resolve({});
      }
  })
}

  public async getOBD2DTCInfo() {
  return new Promise(async resolve =>{
    try{
    const usbData = [...DataParser.numberToBytes(ENUMVCIs.VCICmd_obd2_reporttype.report_dtcs, 1)]
    const t = await this.LinkVciCmd({
      Procid: ENUMVCIs.VCIProg.obd2,
      stateid: ENUMVCIs.VCICmd_obd2.GetReport,
      usbData, nretry: 3, timeout:7000
    })
    let j = DataParser.bytesToString(t)
    //this.logdebug(j);
    return resolve(JSON.parse(j));
    }
      catch (err) {
      this.logdebug('getOBD2DTCInfo:'+err);
      return resolve({});
    }

  })
}

  public async getOBD2DTCDef(moduleindex: number, dtcindex: number) {
  return new Promise(async resolve =>{
    const usbData = [...DataParser.numberToBytes(ENUMVCIs.VCICmd_obd2_reporttype.report_dtc_def, 1),
      ...DataParser.numberToBytes(moduleindex, 1),...DataParser.numberToBytes(dtcindex, 1)]
    const t = await this.LinkVciCmd({
      Procid: ENUMVCIs.VCIProg.obd2,
      stateid: ENUMVCIs.VCICmd_obd2.GetReport,
      usbData, nretry: 3, timeout:7000
    })
    let j = DataParser.bytesToString(t)
    //this.logdebug(j);
    return resolve(JSON.parse(j));
  })
}

public async getVehReport_YMME_PROFILE() {
    let ret = []
    let MaxNumBuff = 1;

    const __flink = async (idx, MaxNumBuff) => {

        if (idx >= MaxNumBuff)
            return ret;
        const usbData = [...DataParser.numberToBytes(ENUMVCIs.VCICmd_obd2_reporttype.report_vehicle_data_ymme_profile, 1)]
        const t = await this.LinkVciCmd({
          Procid: ENUMVCIs.VCIProg.obd2,
          stateid: ENUMVCIs.VCICmd_obd2.GetReport,
          usbData, nretry: 3, timeout:1000 // decrease timeout
        })
        ret.push({bufferIndex:idx,data:t})
        this.logdebug('link buffer:' + idx)
        return await __flink(idx + 1, MaxNumBuff)
    }
    return await __flink(0, MaxNumBuff)
}
  public async getVehReport_OBD2_LD_SID1_BUFF_new() {
    let ret = []
    let MaxNumBuff = 2;

    const __flink = async (idx, MaxNumBuff) => {

        if (idx >= MaxNumBuff)
            return ret;
        const usbData = [...DataParser.numberToBytes(ENUMVCIs.VCICmd_obd2_reporttype.report_sid1, 1),
          ...DataParser.numberToBytes(idx, 1)]
        const t = await this.LinkVciCmd({
          Procid: ENUMVCIs.VCIProg.obd2,
          stateid: ENUMVCIs.VCICmd_obd2.GetReport,
          usbData, nretry: 1, timeout:4000
        })
        ret.push({bufferIndex:idx,data:t})
        this.logdebug('link buffer:' + idx)
        return await __flink(idx + 1, MaxNumBuff)
    }
    return await __flink(0, MaxNumBuff)
  }
  // public async getVehReport_OBD2_FF_SID2_BUFF() {
  //     return await this.LinkHIDUSBCmd(USBHIDCommand_64.eVEHICLE_DATA_OBD2_FF_SID2_BUFF);
  // }
  public async getVehReport_OBD2_FF_SID2_BUFF_RAW_new() {
  let ret = []
  let MaxNumBuff = 2;

  const __flink = async (idx, MaxNumBuff) => {

    if (idx >= MaxNumBuff)
    return ret;
    const usbData = [...DataParser.numberToBytes(ENUMVCIs.VCICmd_obd2_reporttype.report_sid2, 1),
    ...DataParser.numberToBytes(idx, 1)]
    const t = await this.LinkVciCmd({
      Procid: ENUMVCIs.VCIProg.obd2,
      stateid: ENUMVCIs.VCICmd_obd2.GetReport,
      usbData, nretry: 1, timeout:4000
    })
    ret.push({bufferIndex:idx,data:t})
    this.logdebug('link buffer:' + idx)
    return await __flink(idx + 1, MaxNumBuff)
  }
  return await __flink(0, MaxNumBuff)
}
  public async getVehReport_OBD2_DTC_SID37A_BUFF_new() {
    let ret = []
    let MaxNumBuff = 2;

    const __flink = async (idx, MaxNumBuff) => {

        if (idx >= MaxNumBuff)
            return ret;
        const usbData = [...DataParser.numberToBytes(ENUMVCIs.VCICmd_obd2_reporttype.report_sid37A, 1),
        ...DataParser.numberToBytes(idx, 1)]
        const t = await this.LinkVciCmd({
          Procid: ENUMVCIs.VCIProg.obd2,
          stateid: ENUMVCIs.VCICmd_obd2.GetReport,
          usbData, nretry: 1, timeout:4000
        })
        ret.push({bufferIndex:idx,data:t})
        this.logdebug('link buffer:' + idx)
        return await __flink(idx + 1, MaxNumBuff)
    }
    return await __flink(0, MaxNumBuff)
  }

  public async getVehReport_OBD2_SPECIALTEST_SID5_BUFF_new() {
    let ret = []
    let MaxNumBuff = 1;

    const __flink = async (idx, MaxNumBuff) => {

        if (idx >= MaxNumBuff)
            return ret;
        const usbData = [...DataParser.numberToBytes(ENUMVCIs.VCICmd_obd2_reporttype.report_sid5, 1),
        ...DataParser.numberToBytes(idx, 1)]
        const t = await this.LinkVciCmd({
          Procid: ENUMVCIs.VCIProg.obd2,
          stateid: ENUMVCIs.VCICmd_obd2.GetReport,
          usbData, nretry: 1, timeout:10000
        })
        ret.push({bufferIndex:idx,data:t})
        this.logdebug('link buffer:' + idx)
        return await __flink(idx + 1, MaxNumBuff)
    }
    return await __flink(0, MaxNumBuff)
  }
  public async getVehReport_OBD2_SPECIALTEST_SID6_BUFF_v2(){
    let ret = []
    let MaxNumBuff = 1;

    const __flink = async (idx, MaxNumBuff) => {

      if (idx >= MaxNumBuff)
      return ret;
      let usbData = [...DataParser.numberToBytes(ENUMVCIs.VCICmd_obd2_reporttype.report_sid6_tids, 1),
      ...DataParser.numberToBytes(idx, 1)]
      const t = await this.LinkVciCmd({
        Procid: ENUMVCIs.VCIProg.obd2,
        stateid: ENUMVCIs.VCICmd_obd2.GetReport,
        usbData, nretry: 1, timeout:10000
      })
      const j = JSON.parse(DataParser.bytesToString(t));
      this.logdebug(DataParser.bytesToString(t));
      if (_.isObject(j)) {

        var keys = Object.keys(j);
        var obj={};
        for (let item of j) {
          var keys = Object.keys(item);
           usbData = [...DataParser.numberToBytes(ENUMVCIs.VCICmd_obd2_reporttype.report_sid6_comp_ids, 1),
            ...DataParser.numberToBytes(item[keys[0]], 1)]
            this.logdebug('Get CompText of textid:'+item[keys[0]])
          const m = await this.LinkVciCmd({
            Procid: ENUMVCIs.VCIProg.obd2,
            stateid: ENUMVCIs.VCICmd_obd2.GetReport,
            usbData , nretry: 1, timeout:10000
          })
          const c = JSON.parse(DataParser.bytesToString(m));
          if (_.isObject(c)) {
            obj[keys[0]]=c;
          }
          else {
            obj[keys[0]]='';
          }

        }
        //let text = DataParser.getStringOfObj(obj);
        ret.push({bufferIndex:idx,data:obj});
      }
      else {
        ret.push({bufferIndex:idx,data:t})
      }


      this.logdebug('link buffer:' + idx)
      return await __flink(idx + 1, MaxNumBuff)
    }
  //  const testid = await __flink(0, MaxNumBuff);

    return await __flink(0, MaxNumBuff);
  }
  public async getVehReport_OBD2_SPECIALTEST_SID6_BUFF_new() {
    let ret = []
    let MaxNumBuff = 1;

    const __flink = async (idx, MaxNumBuff) => {

      if (idx >= MaxNumBuff)
      return ret;
      const usbData = [...DataParser.numberToBytes(ENUMVCIs.VCICmd_obd2_reporttype.report_sid6, 1),
      ...DataParser.numberToBytes(idx, 1)]
      const t = await this.LinkVciCmd({
        Procid: ENUMVCIs.VCIProg.obd2,
        stateid: ENUMVCIs.VCICmd_obd2.GetReport,
        usbData, nretry: 1, timeout:10000
      })
      ret.push({bufferIndex:idx,data:t})
      this.logdebug('link buffer:' + idx)
      return await __flink(idx + 1, MaxNumBuff)
    }
    return await __flink(0, MaxNumBuff)
  }
  public async getVehReport_OBD2_SPECIALTEST_SID8_BUFF_new() {
    let ret = []
    let MaxNumBuff = 1;

    const __flink = async (idx, MaxNumBuff) => {

        if (idx >= MaxNumBuff)
            return ret;
        const usbData = [...DataParser.numberToBytes(ENUMVCIs.VCICmd_obd2_reporttype.report_sid8, 1),
        ...DataParser.numberToBytes(idx, 1)]
        const t = await this.LinkVciCmd({
          Procid: ENUMVCIs.VCIProg.obd2,
          stateid: ENUMVCIs.VCICmd_obd2.GetReport,
          usbData, nretry: 1, timeout:4000
        })
        ret.push({bufferIndex:idx,data:t})
        this.logdebug('link buffer:' + idx)
        return await __flink(idx + 1, MaxNumBuff)
    }
    return await __flink(0, MaxNumBuff)
  }

  public async getVehReport_OBD2_VEHINFO_SID9_BUFF_new() {
    let ret = []
    let MaxNumBuff = 2;

    const __flink = async (idx, MaxNumBuff) => {

        if (idx >= MaxNumBuff)
            return ret;
        const usbData = [...DataParser.numberToBytes(ENUMVCIs.VCICmd_obd2_reporttype.report_sid9, 1),
        ...DataParser.numberToBytes(idx, 1)]
        const t = await this.LinkVciCmd({
          Procid: ENUMVCIs.VCIProg.obd2,
          stateid: ENUMVCIs.VCICmd_obd2.GetReport,
          usbData, nretry: 1, timeout:4000
        })
        ret.push({bufferIndex:idx,data:t})
        this.logdebug('link buffer:' + idx)
        return await __flink(idx + 1, MaxNumBuff)
    }
    return await __flink(0, MaxNumBuff)
  }

  // 18-06-2022 Nguyen Pham added function for new smog check and LED status
  public async SetOBD2SmogCheckState(loc) {
    this.logdebug("Set Smog Check Location:" + loc)
    const usbData = [...DataParser.numberToBytes(loc, 1)];
    try {
      const val = await this.LinkVciCmd({
        Procid: ENUMVCIs.VCIProg.obd2,
        stateid: ENUMVCIs.VCICmd_obd2.SetSmogCheckState, usbData
      })
      if (isNullOrUndefined(val)) {
        return false;
      }
      // this.logdebug("Smog check val: "+ JSON.stringify(val))
      // else {
      //   return true;
      // }
    } catch (error) {
      return false;
    }
        return true;
      }

  public async SetOBD2SmogCheckCountry(loc) {
    this.logdebug("Set Smog Check Country:" + loc)
    const usbData = [...DataParser.numberToBytes(loc, 1)];
    try {
      const val = await this.LinkVciCmd({
        Procid: ENUMVCIs.VCIProg.obd2,
        stateid: ENUMVCIs.VCICmd_obd2.SetSmogCheckCountry, usbData
      })
      if (isNullOrUndefined(val)) {
        return false;
      }
    } catch (error) {
      return false;
    }
    return true;
  }

  public async GetOBD2LedStatus() {
    return new Promise(async resolve => {
      try {
        const usbData = [...DataParser.numberToBytes(ENUMVCIs.VCICmd_obd2.GetLedStatus, 1)]
        const t = await this.LinkVciCmd({
          Procid: ENUMVCIs.VCIProg.obd2,
          stateid: ENUMVCIs.VCICmd_obd2.GetReport,
          usbData
        })
        let j = DataParser.bytesToString(t)
        this.logdebug('Get Led status: '+j);
        return resolve(JSON.parse(j));
      }
      catch (err) {
        this.logdebug('err GetLedStatus:' + JSON.stringify(err));
        return resolve({});
      }

    })
  }

  public async GetOBD2SmogCheckState() {
    return new Promise(async resolve => {
      try {
        const t = await this.LinkVciCmd({
          Procid: ENUMVCIs.VCIProg.obd2,
          stateid: ENUMVCIs.VCICmd_obd2.GetSmogCheckState,
        })
        
        return resolve(t[0]);
      }
      catch (err) {
        this.logdebug('err GetSmogCheck:' + JSON.stringify(err));
        return resolve({});
      }

    })
  }

  public async GetOBD2SmogCheckCountry() {
    return new Promise(async resolve => {
      try {
        const t = await this.LinkVciCmd({
          Procid: ENUMVCIs.VCIProg.obd2,
          stateid: ENUMVCIs.VCICmd_obd2.GetSmogCheckCountry,
        })
        
        return resolve(t[0]);
      }
      catch (err) {
        this.logdebug('err GetSmogCheck:' + JSON.stringify(err));
        return resolve({});
      }

    })
  }

  public async SetFuelType(type) {
    this.logdebug("Set Fuel Type: " + type)
    const usbData = [...DataParser.numberToBytes(type, 1)];
    try {
      const val = await this.LinkVciCmd({
        Procid: ENUMVCIs.VCIProg.obd2,
        stateid: ENUMVCIs.VCICmd_obd2.SetFuelType, usbData
      })
      if (isNullOrUndefined(val)) {
        return false;
      }
      // else {
      //   return true;
      // }
    } catch (error) {
      return false;
    }
        return true;
      }

  public async GetFuelType() {
    return new Promise(async resolve => {
      try {
        const t = await this.LinkVciCmd({
          Procid: ENUMVCIs.VCIProg.obd2,
          stateid: ENUMVCIs.VCICmd_obd2.GetFuelType,
        })
        const enumFuelType = {
          0: 'Unknown',
          1: 'GAS',
          2: 'DIESEL',
        }
        let fuelType = enumFuelType[t[0]];
        this.logdebug('GetFuelType: '+ fuelType);
        return resolve({result: fuelType});
      }
      catch (err) {
        this.logdebug('err GetFuelType:' + JSON.stringify(err));
        return resolve({});
      }
    })
  }

  public async GetVehType() {
    return new Promise(async resolve => {
      try {
        const t = await this.LinkVciCmd({
          Procid: ENUMVCIs.VCIProg.obd2,
          stateid: ENUMVCIs.VCICmd_obd2.GetVehType,
        })
        const enumVehType = {
          0: 'Unknown',
          1: 'Normal',
          2: 'Electric',
          3: 'Hybrid',
        }
        let vehType = enumVehType[t[0]];
        this.logdebug('GetVehType: '+ vehType);
        return resolve({result: vehType});
      }
      catch (err) {
        this.logdebug('err GetVehType:' + JSON.stringify(err));
        return resolve({});
      }
    })
  }

  public async SetVehType(type) {
    this.logdebug("Set Veh Type: " + type)
    const usbData = [...DataParser.numberToBytes(type, 1)];
    try {
      const val = await this.LinkVciCmd({
        Procid: ENUMVCIs.VCIProg.obd2,
        stateid: ENUMVCIs.VCICmd_obd2.SetVehType, usbData
      })
      if (isNullOrUndefined(val)) {
        return false;
      }
    } catch (error) {
      return false;
    }
    return true;
  }


  public async GetBluetoothName(): Promise<string> {
    return new Promise(async resolve => {
      try {
        const t = await this.LinkVciCmd({
          Procid: ENUMVCIs.VCIProg.tool,
          stateid: ENUMVCIs.VCICmd_BT_setting.get_bt_name,
        })
        this.logdebug(JSON.stringify(t))
        let name = DataParser.bytesToString(t);
        return resolve(name);
      }
      catch (err) {
        this.logdebug('err GetBlueToothName:' + JSON.stringify(err));
        return resolve(null);
      }

    })
  }

  public async SetBluetoothName(newName: string) {
    // dummy script, need to change when new FW support BT name release
    let nameString = await DataParser.stringToBytes(newName)
    let nameLength = nameString.length // change this
    
    const usbData = [nameLength, ...nameString];
    try {
      const val = await this.LinkVciCmd({
        Procid: ENUMVCIs.VCIProg.tool,
        stateid: ENUMVCIs.VCICmd_BT_setting.set_bt_name, usbData
      })
      if (isNullOrUndefined(val)) {
        return false;
      }
    } catch (error) {
      return false;
    }
    return true;
  }
}

export { enumProtocol }
