import { CommandService } from './../command/command.service'
import { NotifyService } from './../utilities/notify.service'
import * as DataParser from './../utilities/dataParser'
import { isArray, isString, isNullOrUndefined } from 'util';
import { Injectable } from '@angular/core';
import * as ENUMVCIs from './vcistd'
import * as ENUMs from './../standard/enums'
import { VCIProg, EnumVCIProcStates, VCICmd_obd2, VCICmd_nwscan, VCICmd_system,VCICmd_Unsolicited_msg, ICOMMANDS, USBHIDCommand_64 } from './vcistd'
import * as _ from 'lodash';
@Injectable({
    providedIn: 'root'
})


export abstract class OBDx {
    private is_initializing = false;
    constructor(private VCICmd: CommandService, private notifier: NotifyService) {

    }

    // modified by ngoclb, force return boolean for this function
    public async initialize(sleepMs = 0) {
      if (this.is_initializing) return false;
      this.is_initializing = true;
      this.VCICmd.ResetListenerData();
      try {
        if (sleepMs) {
            await this.sleep(sleepMs);
        }
        // await this.getInfo()
        await this.setReableFormat(true)
      } catch (err) {
        this.logdebug("setReableFormat error:" + err.message);
        this.is_initializing = false;
        return false;
      }
      this.is_initializing = false;
      return true;
    }

    public async cancel_vci_process()
    {
      try{
        this.logdebug("cancel vci process")
        const data = await this.LinkVciCmd({
            Procid: VCIProg.unsolicited_msg,
            stateid: VCICmd_Unsolicited_msg.msg_cancel,
            nretry: 0,
            timeout: 200 // ngoclb: change timeout
        });
        await this.EnableFastCancel();
        return data;
      }
      catch(err)
      {
        this.logdebug("cancel vci process:" + err);
      }
    }

    // modified by ngoclb, also get tooid in this function
    public async getInfo() {
        let ret = { productid: -1, main: '', boot: '', db: '' }

        const { data, error } = await this.Link(ICOMMANDS.getUsbProductId);
        if (!data) {
          ret = _.set(ret, "error", error.message ? error.message : error)
        } else {
          const pid = DataParser.bytesToInt(data, 2, 0)
          ret = _.set(ret, "productid", pid)
        }
        //main:xxx , boot:xxx
        let v = await this.LinkVciCmd({ Procid: VCIProg.systemdata, stateid: VCICmd_system.getversion });
        v = (_.chunk(v, 16) || []);
        const [_m, _b,_d] = v
        if (!isNullOrUndefined(_m)) {
            ret = _.set(ret, "main", DataParser.bytesToString(_m))
        }
        if (!isNullOrUndefined(_b)) {
            ret = _.set(ret, "boot", DataParser.bytesToString(_b))
        }
        if (!isNullOrUndefined(_d)) {
            ret = _.set(ret, "db", DataParser.bytesToString(_d))
        }
        return ret;
    }
    async setReableFormat(status) {
        const { data, error } = await this.Link({
            // ...ICOMMANDS.setResponseFormat,
            id: ICOMMANDS.setResponseFormat.id,
            data: [status ? 1 : 0],
            nretry: 0, timeout: 300 });
        if (error) {
          throw new Error(error.message);
        }
        if (status) {
            await this.LinkVciCmd({ Procid: VCIProg.enable_jsonfmt, stateid: 0 })
            await this.LinkVciCmd({ Procid: VCIProg.enable_jsonfmt_def, stateid: 0 })
        }
        else {
            await this.LinkVciCmd({ Procid: VCIProg.disable_jsonfmt, stateid: 0 })
            await this.LinkVciCmd({ Procid: VCIProg.disable_jsonfmt_def, stateid: 0 })
        }
    }

    // added by ngoclb
    private async sleep(ms) {
      return new Promise(resolve => {
        setTimeout(resolve, ms)
      });
    }

    async LinkVciCmd(cmdInfo: { Procid, stateid, usbData?: Array<Number>, nretry?: Number, timeout?: Number }) {
        const { Procid, stateid, usbData = [], nretry = 3, timeout = 2000 } = cmdInfo

        let procdata = DataParser.arrayFromNumber(Procid, 2);
        let statedata = DataParser.arrayFromNumber(stateid, 1);
        const usbCommandHeader = [0x04, 0x00, 0x00, 0x00, 0x65, 0x00, 0x00, 0x00];
        const respdata = await this.Link({
            id: 0x80,
            data: [].concat(usbCommandHeader, procdata, statedata, usbData),
            nretry,
            timeout
        })
        const { data } = respdata
        // this.logdebug(`vci link res: ${data}`)
        if (isNullOrUndefined(data)) {
            return undefined;
        }
        const [b0, b1, b2, b3, status, ...vcidata] = data;
        if (status == 0xAA) return vcidata
        if (status == 0x11 && stateid == ENUMVCIs.VCICmd_obd2.Erase_Dtc) {
            const [ERASE_STATUS, ERR_CODE, ...restvcidata] = vcidata
            const ERASE_ERR_CODE = {
                0x00: "OBD2_ERASE_STT_NONE",
                0x01: "OBD2_ERASE_STT_SUCCESS",
                0x02: "OBD2_ERASE_STT_NEGATIVE",
                0x03: "OBD2_ERASE_STT_NO_RESPONSE",
                0x04: "OBD2_ERASE_STT_NEGATIVE_22",
                0xFF: "OBD2_ERASE_STT_UNKNOWN"
            }
            // this.logdebug(`vci link check: ${ERR_CODE}`)
            // this.logdebug(`vci link check: ${ERASE_ERR_CODE[ERR_CODE]}`)
            return {
                status: "Erase fail",
                error: ERASE_ERR_CODE[ERR_CODE]
            }
        }
        return undefined;
    }

    async LinkHIDUSBCmd(cmdInfo: { cmd: Number, vehicleIdx?: Number, MaxNumBuff: Number, nretry?: Number, timeout?: Number }) {
        try {
            const { cmd, vehicleIdx = 0, nretry = 3, timeout = 4000, MaxNumBuff } = cmdInfo
            const usbData = [cmd, vehicleIdx, 0]
            const usbCommandHeader = [0x04, 0x00, 0x00, 0x00, 0x64, 0x00, 0x00, 0x00];
            let ret = []
            const __flink = async (idx, MaxNumBuff) => {

                if (idx >= MaxNumBuff)
                    return ret;

                const t = await this.Link({
                    id: 0x80,
                    data: [].concat(usbCommandHeader, [0,cmd], [idx], [0, 0, 0,0,0]),
                    nretry,
                    timeout
                }) || []
                ret.push({bufferIndex:idx,...t})

                return await __flink(idx + 1, MaxNumBuff)
            }
            return await __flink(0, MaxNumBuff)
        } catch (errorcode) {
            return []
        }
    }

    public async getToolReportBuffer(reportConfig: {
        isVEHICLE_DATA_YMME_PROFILE?: Boolean,
        isVEHICLE_DATA_OBD2_LD_SID1_BUFF?: Boolean,
        isVEHICLE_DATA_OBD2_FF_SID2_BUFF?: Boolean,
        isVEHICLE_DATA_OBD2_DTC_SID37A_BUFF?: Boolean,
        isVEHICLE_DATA_OBD2_SPECIALTEST_SID568_BUFF?: Boolean,
        isVEHICLE_DATA_OBD2_VEHINFO_SID9_BUFF?: Boolean,
        isVEHICLE_DATA_OBD2_RECORED_LD_BUFF?: Boolean,
        isVEHICLE_DATA_OEM_MODULE_BUFF?: Boolean,
    }) {
        const returndata = {
            YMME_PROFILE: [],
            OBD2_LD_SID1_BUFF: [],
            OBD2_FF_SID2_BUFF: [],
            OBD2_DTC_SID37A_BUFF: [],
            OBD2_SPECIALTEST_SID568_BUFF: [],
            OBD2_VEHINFO_SID9_BUFF: [],
            OBD2_RECORED_LD_BUFF: [],
            OEM_MODULE_BUFF: [],
        };

        if (reportConfig.isVEHICLE_DATA_YMME_PROFILE) {
            returndata.YMME_PROFILE = await this.getVehReport_YMME_PROFILE();
        }

        if (reportConfig.isVEHICLE_DATA_OBD2_LD_SID1_BUFF) {
            returndata.OBD2_LD_SID1_BUFF = await this.getVehReport_OBD2_LD_SID1_BUFF()
        }

        if (reportConfig.isVEHICLE_DATA_OBD2_FF_SID2_BUFF) {
            returndata.OBD2_FF_SID2_BUFF = await this.getVehReport_OBD2_FF_SID2_BUFF()
        }

        if (reportConfig.isVEHICLE_DATA_OBD2_DTC_SID37A_BUFF) {
            returndata.OBD2_DTC_SID37A_BUFF = await this.getVehReport_OBD2_DTC_SID37A_BUFF()
        }

        if (reportConfig.isVEHICLE_DATA_OBD2_SPECIALTEST_SID568_BUFF) {
            returndata.OBD2_SPECIALTEST_SID568_BUFF = await this.getVehReport_OBD2_SPECIALTEST_SID568_BUFF()
        }

        if (reportConfig.isVEHICLE_DATA_OBD2_VEHINFO_SID9_BUFF) {
            returndata.OBD2_VEHINFO_SID9_BUFF = await this.getVehReport_OBD2_VEHINFO_SID9_BUFF()
        }

        if (reportConfig.isVEHICLE_DATA_OBD2_RECORED_LD_BUFF) {
            returndata.OBD2_RECORED_LD_BUFF = await this.getVehReport_OBD2_RECORED_LD_BUFF()
        }

        if (reportConfig.isVEHICLE_DATA_OEM_MODULE_BUFF) {
            returndata.OEM_MODULE_BUFF = await this.getVehReport_OEM_MODULE_BUFF()
        }

        return returndata;
    }

    public async getVehReport_YMME_PROFILE() { return await this.LinkHIDUSBCmd(USBHIDCommand_64.eVEHICLE_DATA_YMME_PROFILE); }
    public async getVehReport_OBD2_LD_SID1_BUFF() { return await this.LinkHIDUSBCmd(USBHIDCommand_64.eVEHICLE_DATA_OBD2_LD_SID1_BUFF); }
    public async getVehReport_OBD2_FF_SID2_BUFF() {
        return await this.LinkHIDUSBCmd(USBHIDCommand_64.eVEHICLE_DATA_OBD2_FF_SID2_BUFF);
    }
    public async getVehReport_OBD2_FF_SID2_BUFF_RAW() {
        return await this.LinkHIDUSBCmd(USBHIDCommand_64.eVEHICLE_DATA_OBD2_FF_SID2_BUFF_RAW);
    }

    public async getVehReport_OBD2_DTC_SID37A_BUFF() { return await this.LinkHIDUSBCmd(USBHIDCommand_64.eVEHICLE_DATA_OBD2_DTC_SID37A_BUFF); }
    public async getVehReport_OBD2_SPECIALTEST_SID568_BUFF() { return await this.LinkHIDUSBCmd(USBHIDCommand_64.eVEHICLE_DATA_OBD2_SPECIALTEST_SID568_BUFF); }
    public async getVehReport_OBD2_SPECIALTEST_SID5_BUFF() { return await this.LinkHIDUSBCmd(USBHIDCommand_64.eVEHICLE_DATA_OBD2_SPECIALTEST_SID5_BUFF); }
    public async getVehReport_OBD2_SPECIALTEST_SID6_BUFF() { return await this.LinkHIDUSBCmd(USBHIDCommand_64.eVEHICLE_DATA_OBD2_SPECIALTEST_SID6_BUFF); }
    public async getVehReport_OBD2_SPECIALTEST_SID8_BUFF() { return await this.LinkHIDUSBCmd(USBHIDCommand_64.eVEHICLE_DATA_OBD2_SPECIALTEST_SID8_BUFF); }
    public async getVehReport_OBD2_VEHINFO_SID9_BUFF() { return await this.LinkHIDUSBCmd(USBHIDCommand_64.eVEHICLE_DATA_OBD2_VEHINFO_SID9_BUFF); }
    public async getVehReport_OBD2_RECORED_LD_BUFF() { return await this.LinkHIDUSBCmd(USBHIDCommand_64.eVEHICLE_DATA_OBD2_RECORED_LD_BUFF); }
    public async getVehReport_OEM_MODULE_BUFF() { return await this.LinkHIDUSBCmd(USBHIDCommand_64.eVEHICLE_DATA_OEM_MODULE_BUFF); }

    public async Link(cmdinfo: { id, data?: any, nretry?: Number, timeout?: Number }) {
        try {
            return await this.VCICmd.sendData(cmdinfo)
        } catch (err) {
            return {
                data: undefined,
                error: err
            }
        }
    }

    public async LinkMultiData(cmdinfo: { id, data?: any, nretry?: Number, timeout?: Number }) {
        try {
            return await this.VCICmd.sendGetMultiData(cmdinfo)
        } catch (err) {
            return {
                data: undefined,
                error: err
            }
        }
    }

    public async EnableFastCancel()
    {
      return await this.VCICmd.EnableFastCancel();
    }

    public async ResetFastCancel()
    {
      return await this.VCICmd.ResetFastCancel();
    }

    public registerReceiveCb(func:(data)=>any)
    {
      this.VCICmd.EventCallBackFunction.subscribe(func);
    }

    // public deregisterReceiveCb()
    // {
    //   this.VCICmd.deregisterCallbackFunc();
    // }

    public logdebug(data) {
        if (isArray(data)) {
            this.notifier.log(DataParser.bytesToHexString(data));
            return
        }

        if (isString(data)) {
            this.notifier.log(data);
            return
        }

        this.notifier.log(JSON.stringify(data))
    }

    public async Cancel_VCI_Process()
    {
      try{
        this.logdebug("Cancel Process...")

      }
      catch(err)
      {

      }
    }

}
