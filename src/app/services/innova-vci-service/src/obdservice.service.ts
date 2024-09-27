/**
 * @Author: quocdo-macbook
 * @Date:   2020-12-21T08:20:18+07:00
 * @Last modified by:   quocdo-macbook
 * @Last modified time: 2021-12-29T11:11:35+07:00
 */



import { OBD2FF } from './obd/obd2ff';
import { Injectable } from '@angular/core';
import { EnumNotify, NotifyDataType, enumProtocol, enumInnovagroup, EnumSerialType } from './standard/enums';
import { NotifyService } from './utilities/notify.service'
import { CommandService } from './command/command.service'
import { OBD2 } from './obd/obd2'
import { YMME } from './obd/ymme'
import { NWSCAN } from './obd/nwscan';
import { Livedata } from './obd/livedata';
import { OBDSystem } from './obd/OBDSystem';
import { GUI } from './obd/gui';
import { Symptom } from './obd/symptom';
import { OFM } from './obd/ofm';
import * as Dataparser from './utilities/dataParser'
import * as ENUMVCIs from './obd/vcistd'
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OBDService {

  isDevConnected: boolean;
  isBTDevConnected: Subscription;
  registerCallback: Subscription;
  toolInfo: string = null;
  apiVersion: String = '1.16';
  serial_type: EnumSerialType;
  constructor(private notifyService: NotifyService,
    private commService: CommandService,
    private obd2: OBD2,
    private nwscan: NWSCAN,
    private obdsystem: OBDSystem,
    private obd2ff: OBD2FF,
    private ofm: OFM,
    private livedata: Livedata,
    private symptom: Symptom, private ymme: YMME,
    private gui: GUI) {
    this.isDevConnected = false
  }


  /**
   *
   *
   * @param {(NotifyDataType) => any} [cb=null] : register notify process
   * @returns {Promise<boolean>}
   * @memberof OBDService
   */
  async initialize(cb: (NotifyDataType) => any = null): Promise<boolean> {

    this.isDevConnected = await this.commService.initialize(EnumSerialType.Bluetooth)

    // changed by ngoclb
    if (this.isDevConnected) {
      if (this.registerCallback) {
        this.registerCallback.unsubscribe();
      }
      if (cb) {
        this.registerCallback = this.notifyService.Event.subscribe(t => cb(t))
      }
      this.isDevConnected = await this.obd2.initialize();
    }

    return this.isDevConnected;
  }

  /**
   * [initialize_ble function initialize bluetooth]
   * @param  {(NotifyDataType) => any} [cb=null] : register notify process
   * @return   {Promise<boolean>}
   */
  async initialize_bt(cb: (NotifyDataType) => any = null): Promise<boolean> {
    const stt = await this.commService.initialize(EnumSerialType.Bluetooth)
    // added by lbngoc
    if (stt) {
      if (this.registerCallback) {
        this.registerCallback.unsubscribe();
      }
      if (cb) {
        this.registerCallback = this.notifyService.Event.subscribe(t => cb(t));
        this.isDevConnected = await this.obd2.initialize(1500);
        if (!this.isDevConnected) {
          // await this.disconnectBluetoothDevices();
        }
      }
    }

    //this.isDevConnected = false;
    return stt;
  }

  async disconnectBluetoothDevices(): Promise<boolean> {
    if (this.isBTDevConnected) {
      this.isBTDevConnected.unsubscribe();
      this.isBTDevConnected = null;
    }
    return await this.commService.disconnectBluetoothDevices();
  }

  BluetoothIsConnected(): any {
    return this.isBTDevConnected;
  }

  stopQuery() {
    return this.obd2.stopQuery();
  }

  async get_list_bt_devices(): Promise<any> {
    return await this.commService.getBluetoothDevicesList();
  }

  async get_list_bt_bondeddevices(): Promise<any> {
    return await this.commService.getBluetoothBondedDevicesList();
  }



  public async connectBlueToothDevice(macAddress: string): Promise<boolean> {
    console.log('connectBlueToothDevice macAddress: ', macAddress);
    // modified by NGOCLB
    return new Promise(async (resolve) => {
      console.log('resolve: ', resolve);
      this.isBTDevConnected = await this.commService.connectBlueToothDevice(macAddress, (isSuccess) => {
        // this.isBTDevConnected.add(() => {
        //   let isSuccess = !this.isBTDevConnected.closed;
        if (!isSuccess) {
          this.isBTDevConnected = null;
        }
        resolve(isSuccess);
        // });
      });
    })
  }

  public async getVehReport_YMME_String() { return await this.obd2.getYMMEString() }
  public async getVehReport_MonitorIconStatus() { return await this.obd2.getMonitorIcon() }
  public async getVehReport_MonitorIconStatus_PID41() { return await this.obd2.getMonitorIcon_SID41() }
  public async getVehReport_RPM_VSS() { return await this.obd2.getRPM_VSS() }
  public async getVehReport_FreezeFrameDTCInfo() { return await this.obd2.getFreezeFrameDTCInfo() }
  public async getVehReport_FreezeFrameLDInfo() { return await this.obd2.getFreezeFrameLiveData() }
  public async getVehReport_OBD2_DTC_Info() { return await this.obd2.getOBD2DTCInfo() }
  public async getVehReport_OBD2_VehicleInfo_SID9() { return await this.obd2.getVehicleInfo_SID9() }
  public async getVehReport_OBD2_DTC_Def(moduleindex, index) { return await this.obd2.getOBD2DTCDef(moduleindex, index) }
  public async getVehReport_YMME_PROFILE() { return await this.obd2.getVehReport_YMME_PROFILE() }
  public async getVehReport_OBD2_LD_SID1_BUFF() { return await this.obd2.getVehReport_OBD2_LD_SID1_BUFF_new() }
  public async getVehReport_OBD2_FF_SID2_BUFF() {

    //NXP do not support readble format
    return await this.obd2.getVehReport_OBD2_FF_SID2_BUFF_RAW_new()

  }
  public async getVehReport_OBD2_DTC_SID37A_BUFF() { return await this.obd2.getVehReport_OBD2_DTC_SID37A_BUFF_new() }
  //public async getVehReport_OBD2_SPECIALTEST_SID568_BUFF() { return await this.obd2.getVehReport_OBD2_SPECIALTEST_SID568_BUFF() }
  public async getVehReport_OBD2_SPECIALTEST_SID5_BUFF() { return await this.obd2.getVehReport_OBD2_SPECIALTEST_SID5_BUFF_new() }
  public async getVehReport_OBD2_SPECIALTEST_SID6_BUFF() { return await this.obd2.getVehReport_OBD2_SPECIALTEST_SID6_BUFF_v2() }
  public async getVehReport_OBD2_SPECIALTEST_SID8_BUFF() { return await this.obd2.getVehReport_OBD2_SPECIALTEST_SID8_BUFF_new() }
  public async getVehReport_OBD2_VEHINFO_SID9_BUFF() { return await this.obd2.getVehReport_OBD2_VEHINFO_SID9_BUFF_new() }
  public async getVehReport_OBD2_RECORED_LD_BUFF() { return await this.obd2.getVehReport_OBD2_RECORED_LD_BUFF() }
  public async getVehReport_OEM_MODULE_BUFF() { return await this.obd2.getVehReport_OEM_MODULE_BUFF() }
  public async linkVehReport_OBD2_SPECIALTEST_SID6() { return this.obd2.link_OBD2_SPECIALTEST_SID6() }
  public async linkVehReport_OBD2_SPECIALTEST_SID5() { return this.obd2.link_OBD2_SPECIALTEST_SID5() }
  public async linkVehReport_OBD2_SPECIALTEST_SID8() { return this.obd2.link_OBD2_SPECIALTEST_SID8() }
  public async OBD2_erase_Dtcs() { return this.obd2.Erase_OBD2_Dtcs() }
  async getVersion() {
    return {
      ...await this.obd2.getInfo(),
      'apiVersion': this.apiVersion
    }
  }

  isConnected() {
    return this.isDevConnected;
  }

  async setVINString(vinstring) {
    return this.nwscan.setVinString(vinstring);
  }
  /**
   * Query OBD2 , trying all basic protocol J1979
   *
   * @param {({ percent, index, total, message, isfinish }) => any} [cb=null] use to notify linking info
   * @returns {Promise<enumProtocol>} linked protocol
   * @memberof OBDService
   */
  async obd2Query(cb: ({ percent, index, total, message, isfinish }) => any = null, isNeedCheckVoltage?: boolean): Promise<enumProtocol> {
    const resp = await this.obd2.Query((obd2info) => {
      cb && cb(obd2info)
    }, isNeedCheckVoltage)
    return resp
  }


  /**
   * collect data of full obd2 : Monitor Icon , FF , DTC , VIN and Get Report
   *
   * @param {({ message }) => any} [cb=null]
   * @returns  {Promise<any>} OBD2 Buffer in raw
   * @memberof OBDService
   */

  async getBluetoothName(): Promise<string> {
    return await this.obd2.GetBluetoothName();
  }

  async setBluetoothName(newName) {
    const resp = await this.obd2.SetBluetoothName(newName)
    return resp
  }

  async obd2RetriveData(cb: ({ message }) => any = null) {
    const resp = await this.obd2.retreiveData((linkinfo) => {
      cb && cb(linkinfo)
    })
    return resp
  }

  async obd2FFDTCMonRetriveData(cb: ({ message }) => any = null) {
    const resp = await this.obd2.retreiveFFDTCMonData((linkinfo) => {
      cb && cb(linkinfo)
    })
    return resp
  }

  async obd2DTCRetriveData(cb: ({ message }) => any = null) {
    const resp = await this.obd2.retreiveDTCData((linkinfo) => {
      cb && cb(linkinfo)
    })
    return resp
  }

  async obd2QuickRetriveData(cb: ({ message }) => any = null, readFFDtc?: boolean) {
    const resp = await this.obd2.quick_retreiveData((linkinfo) => {
      cb && cb(linkinfo)
    }, readFFDtc)
    return resp
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  /**
   * OBD2 Autolink Process , Trying query  , retreive data then get report data in raw
   *
   * @param {({ percent, index, total, message, isfinish }) => any} [cb=null]
   * @returns {Promise<boolean>} true:success , false : fail
   * @memberof OBDService
   */
  async obd2AutoLink(cb: ({ percent, index, total, message, isfinish }) => any = null) {
    try {
      const linkedPro = await this.obd2Query(cb)
      if (linkedPro == enumProtocol.eprotocol_PROTOCOL_NO)
        return false

      await this.obd2RetriveData(cb);
      return true
    } catch (err) {
      return false
    }
  }

  async obd2FFDTCMonLink(cb: ({ percent, index, total, message, isfinish }) => any = null) {
    try {
      const linkedPro = await this.obd2Query(cb)
      if (linkedPro == enumProtocol.eprotocol_PROTOCOL_NO)
        return false

      await this.obd2FFDTCMonRetriveData(cb);
      return true
    } catch (err) {
      return false
    }
  }

  async obd2DTCLink(cb: ({ percent, index, total, message, isfinish }) => any = null) {
    try {
      const linkedPro = await this.obd2Query(cb)
      if (linkedPro == enumProtocol.eprotocol_PROTOCOL_NO)
        return false

      await this.obd2DTCRetriveData(cb);
      return true
    } catch (err) {
      return false
    }
  }

  async obd2QuickLink(cb: ({ percent, index, total, message, isfinish }) => any = null) {
    try {
      const linkedPro = await this.obd2Query(cb)
      if (linkedPro == enumProtocol.eprotocol_PROTOCOL_NO)
        return false

      await this.obd2QuickRetriveData(cb);
      return true
    } catch (err) {
      return false
    }
  }

  async testdata(eprotocol: enumProtocol) {
    // return this.commService.testWrite()
    const resp = await this.obd2.QueryProtocolCAN(eprotocol)
    this.log('response data :' + JSON.stringify(resp))
    return resp;
  }

  log(t): void {
    this.notifyService.log(t);
  }

  /**
   * [setYmmeProfile set ymmeprofile]
   * @param  manufacture_enum [any]
   * @param  year_enum                     [any]
   * @param  make_enum                     [any]
   * @param  model_enum                    [any]
   * @param  engine_enum                   [any]
   * @param  trim_enum                     [any]
   * @param  option_enum                   [any]
   * @param  transmission_enum             [any]
   * @return            Promise<boolean>
   */
  async setYmmeProfile(ymmeprofile = {
    manufacture_enum: undefined,
    year_enum: undefined,
    make_enum: undefined,
    model_enum: undefined,
    engine_enum: undefined,
    trim_enum: undefined,
    option_enum: undefined,
    transmission_enum: undefined
  }) {
    this.log(JSON.stringify(ymmeprofile))
    return await this.nwscan.setYmmeProfile(ymmeprofile)
  }

  /**
   * [getYMMEProfile get the current ymmeprofile]
   * @return Promise<any>
   */
  async getYMMEProfile() {
    return await this.nwscan.getYMMEProfile();
  }

  /**
   * [nwscan_getSupportSystem this function gets the list of supported systems]
   * @return Promise<{}>
   */
  async nwscan_getSupportSystem() {
    return await this.nwscan.getSupportedOEMModules()
  }

  /**
   * [nwscan_eraseSystem Erase system and subSystem]
   * @param  {system,  subSystem} [system index and subsystem index]
   * @return            Promise<{}>
   */
  async nwscan_eraseSystem({ system, subSystem }) {
    return await this.nwscan.eraseOEMSystem({ system, subSystem })
  }

  /**
   * [nwscan_LinkSystem Link system and subSystem]
   * @param  {system,  subSystem} [system index and subsystem index]
   * @return      Promise<{}>
   */
  async nwscan_LinkSystem({ system, subSystem }) {
    return await this.nwscan.getOEMSystem_quick({ system, subSystem })
  }

  async nwscan_getdtcdef({ system, subSystem, id }) {
    return await this.nwscan.getDtcdef({ system, subSystem, id })
  }

  async nwscan_getdtcdef_withgroup({ system, subSystem, id, group }) {
    return await this.nwscan.getDtcdef_withgroup({ system, subSystem, id, group })
  }

  async nwscan_getdtc_listgroup({ system, subSystem, id }) {
    return await this.nwscan.getDtc_listInspecGroup({ system, subSystem, id })
  }

  async nws_querySystem({ system, subSystem }) {
    return await this.nwscan.QueryOEMSystem({ system, subSystem })
  }

  async nws_exitSystem({ system, subSystem }) {
    return await this.nwscan.ExitOEMSystem({ system, subSystem })
  }
  /**
   * [getBatteryVoltage Get ECU battery voltage]
   * @return Promise<{BatteryVoltage:any,Unit:string}>
   */
  async getBatteryVoltage() {
    return await this.obdsystem.getECUVoltage()
  }

  async setting_smogcheckstate(loc) {
    return await this.obd2.SetOBD2SmogCheckState(loc);
  }

  async setting_smogcheckcountry(loc) {
    return await this.obd2.SetOBD2SmogCheckCountry(loc);
  }

  async getting_smogcheckstate() {
    return await this.obd2.GetOBD2SmogCheckState();
  }

  async getting_smogcheckcountry() {
    return await this.obd2.GetOBD2SmogCheckCountry();
  }

  async getting_ledstatus() {
    return await this.obd2.GetOBD2LedStatus();
  }

  async setting_fueltype(type) {
    return await this.obd2.SetFuelType(type);
  }

  async getting_fueltype() {
    return await this.obd2.GetFuelType();
  }

  async setting_vehtype(type) {
    return await this.obd2.SetVehType(type);
  }

  async getting_vehtype() {
    return await this.obd2.GetVehType();
  }

  async setting_getguid() {
    return await this.obdsystem.readGUID()
  }

  async setting_setguid(guid) {
    return await this.obdsystem.writeGUID(guid)
  }

  async setting_unittype(unittype) {
    return await this.obdsystem.settingUnitType(unittype);
  }

  async setting_language(lang_id) {
    return await this.obdsystem.SettingLanguage(lang_id);
  }

  async getodometer_pidsupport() {
    return await this.ofm.ofm_getodometer_pidsupport()
  }
  async getservicecheck_pidsupport() {
    return await this.ofm.ofm_getservicecheck_pidsupport()
  }

  async getwarninglight_pidsupport() {
    return await this.ofm.ofm_getwarninglight_pidsupport()
  }

  async gettpmspid_pidsupport() {
    return await this.ofm.ofm_gettpms_pidsupport()
  }

  async getofmprofileid_value(profileid) {
    return await this.ofm.getofmprofileid_value(profileid);
  }

  async ofm_getitemname(itemid) { return ENUMVCIs.Enum_ofm_Items[itemid] as string; }

  async nws_getdtcgroup_all() {
    return await this.nwscan.getInnovaGroupDtc(enumInnovagroup.einnovagroup_INNOVA_GROUP_UNKNOW);
  }

  async ld_abs_get_ListItem_Val(start_idx, end_idx) {
    return await this.livedata.getlivedata_list_itemval_v2(enumInnovagroup.einnovagroup_GROUP_ABS,
      start_idx, end_idx);
  }

  async ld_srs_get_ListItem_Val(start_idx, end_idx) {
    return await this.livedata.getlivedata_list_itemval_v2(enumInnovagroup.einnovagroup_GROUP_SRS,
      start_idx, end_idx);
  }

  async ld_ecm_get_ListItem_Val(start_idx, end_idx) {
    return await this.livedata.getlivedata_list_itemval_v2(enumInnovagroup.einnovagroup_GROUP_ENH_ECM,
      start_idx, end_idx);
  }

  async ld_others_get_ListItem_Val(start_idx, end_idx) {
    return await this.livedata.getlivedata_list_itemval_v2(enumInnovagroup.einnovagroup_INNOVA_GROUP_UNKNOW,
      start_idx, end_idx);
  }

  async ld_obd2_get_ListItem_Val(start_idx, end_idx) {
    return await this.livedata.getlivedata_list_itemval(enumInnovagroup.einnovagroup_GROUP_OBDII,
      start_idx, end_idx);
  }

  async ld_hybrid_ld_ListItem_Val(start_idx, end_idx) {
    return await this.livedata.getlivedata_list_itemval(enumInnovagroup.einnovagroup_INNOVA_GROUP_UNKNOW,
      start_idx, end_idx);
  }

  async ld_hybrid_ld_get_itemval(itemid) {
    return await this.livedata.getlivedata_itemval(enumInnovagroup.einnovagroup_INNOVA_GROUP_UNKNOW,
      itemid);
  }
  async ld_disable_dtc_trigger() {
    return await this.livedata.disable_dtc_trigger();
  }

  async ld_enable_dtc_trigger() {
    return await this.livedata.enable_dtc_trigger();
  }

  async ld_hybrid_get_info() {
    return await this.livedata.getlivedata_hybrid_info();
  }
  /**
   * [getVehReport_MIL_Status get Mil Status report]
   * @return Promise<{MilStatus:status}> status : ON or OFF
   */
  async getVehReport_MIL_Status() {
    return await this.obd2.getVehReport_MIL_Status();
  }

  async getVehReport_DriveCycle_Mon_List() {
    return await this.obd2.getVehReport_DriveCycle_Mon_List();
  }

  async getVehReport_DriveCycle_Mon_Text(textid) {
    return await this.obd2.getVehReport_DriveCycle_Mon_Text(textid);
  }

  //symptom diagnostic here
  async symptom_init() {
    return await this.symptom.initprocess();
  }

  async getsymptom_screenui() {
    return await this.symptom.getScreen_UI();
  }

  async setSymptom_SetNormalSelection(index) {
    return await this.symptom.set_useroptionselection(index);
  }

  async setSymptom_SetSoftkeySelection(index) {
    return await this.symptom.set_softkeyselection(index);
  }

  // Live Data
  async ld_obd2_get_itemlist() {
    return await this.livedata.getOBD2_LiveDataListPIDsupport();
  }

  async ld_obd2_get_itemval(itemid) {
    return await this.livedata.getOBD2_LiveDataItem_Val(itemid);
  }

  async ld_abs_get_itemlist() {
    return await this.livedata.getABS_LiveDataListPIDsupport();
  }

  async ld_abs_get_itemval(itemid) {
    return await this.livedata.getABS_LiveDataItem_Val(itemid);
  }

  async ld_srs_get_itemlist() {
    return await this.livedata.getSRS_LiveDataListPIDsupport();
  }

  async ld_srs_get_itemval(itemid) {
    return await this.livedata.getSRS_LiveDataItem_Val(itemid);
  }

  async ld_ecm_get_itemlist() {
    return await this.livedata.getECM_LiveDataListPIDsupport();
  }

  async ld_ecm_get_itemval(itemid) {
    return await this.livedata.getECM_LiveDataItem_Val(itemid);
  }

  async ld_other_get_itemval(itemid) {
    return await this.livedata.getOther_LiveDataItem_Val(itemid)
  }

  async ld_obd2_get_iteminfo(itemid) {
    return await this.livedata.getlivedata_iteminfo(enumInnovagroup.einnovagroup_GROUP_OBDII, itemid);
  }

  async ld_abs_get_iteminfo(itemid) {
    return await this.livedata.getlivedata_iteminfo(enumInnovagroup.einnovagroup_GROUP_ABS, itemid);
  }

  async ld_srs_get_iteminfo(itemid) {
    return await this.livedata.getlivedata_iteminfo(enumInnovagroup.einnovagroup_GROUP_SRS, itemid);
  }

  async ld_ecm_get_iteminfo(itemid) {
    return await this.livedata.getlivedata_iteminfo(enumInnovagroup.einnovagroup_GROUP_ENH_ECM, itemid);
  }

  async ld_others_get_iteminfo(itemid) {
    return await this.livedata.getlivedata_iteminfo(enumInnovagroup.einnovagroup_INNOVA_GROUP_UNKNOW, itemid);
  }

  async ld_ecm_get_numbersupporteditem() {
    return await this.livedata.getECM_LiveDataNumberItemSupport();
  }

  async ld_abs_get_numbersupporteditem() {
    return await this.livedata.getABS_LiveDataNumberItemSupport();
  }

  async ld_system_subsystem_numbersupporteditem(system, subsystem) {
    return await this.livedata.getlivedata_numberpidsuppport_other(system, subsystem);
  }

  async ld_srs_get_numbersupporteditem() {
    return await this.livedata.getSRS_LiveDataNumberItemSupport();
  }

  async ld_ecm_get_listinfo(start, end) {
    return await this.livedata.getlivedata_listinfo(enumInnovagroup.einnovagroup_GROUP_ENH_ECM, start, end);
  }

  async ld_abs_get_listinfo(start, end) {
    return await this.livedata.getlivedata_listinfo(enumInnovagroup.einnovagroup_GROUP_ABS, start, end);
  }

  async ld_srs_get_listinfo(start, end) {
    return await this.livedata.getlivedata_listinfo(enumInnovagroup.einnovagroup_GROUP_SRS, start, end);
  }

  async ld_others_get_listinfo(start, end) {
    return await this.livedata.getlivedata_listinfo(enumInnovagroup.einnovagroup_INNOVA_GROUP_UNKNOW, start, end);
  }

  // Service Reset
  async power_actual_test_enter_proc() {
    return await this.gui.proc_enter_proc(ENUMVCIs.SYS_PROC_ID.PROC_SYSTEM_AND_ACTUAL_TEST, ENUMVCIs.SYS_CMD_ID.CMD_INIT_PROC);
  }

  async service_reset_proc_enter() {
    return await this.gui.proc_enter_proc(ENUMVCIs.SYS_PROC_ID.PROC_SERVICE_RESET, ENUMVCIs.SYS_CMD_ID.CMD_INIT_PROC);
  }

  async oil_reset_enter_proc() {
    return await this.gui.proc_enter_proc(ENUMVCIs.SYS_PROC_ID.PROC_OIL_RESET, ENUMVCIs.SYS_CMD_ID.CMD_INIT_PROC);
  }

  async battery_reset_enter_proc() {
    return await this.gui.proc_enter_proc(ENUMVCIs.SYS_PROC_ID.PROC_OEM_BAT_RESET, ENUMVCIs.SYS_CMD_ID.CMD_INIT_PROC);
  }

  async epb_enter_proc() {
    return await this.gui.proc_enter_proc(ENUMVCIs.SYS_PROC_ID.PROC_EPB, ENUMVCIs.SYS_CMD_ID.CMD_INIT_PROC);
  }

  async sas_enter_proc() {
    return await this.gui.proc_enter_proc(ENUMVCIs.SYS_PROC_ID.PROC_SAS_CALIBRATION, ENUMVCIs.SYS_CMD_ID.CMD_INIT_PROC);
  }


  /**
   * [specfunction_enter_proc enter proc special test]
   * @return [description]
   */
  async spectest_enter_proc() {
    return await this.gui.gui_proc_enter_specialFunction_feature(ENUMVCIs.SF_FunctionGroup.UNKNOWN);
    // await this.gui.gui_set_special_function_group(ENUMVCIs.SF_FunctionGroup.UNKNOWN);
    // return await this.gui.proc_enter_proc(ENUMVCIs.SYS_PROC_ID.PROC_SPECIAL_FUNCTION, ENUMVCIs.SYS_CMD_ID.CMD_INIT_PROC);
  }

  async spectest_activetest_set_module(system, subsystem) {
    return await this.gui.gui_proc_sf_at_set_active_module(system, subsystem);
  }

  async dpf_enter_proc() {
    //await this.gui.gui_set_special_function_group(ENUMVCIs.SF_FunctionGroup.UNKNOWN);
    return await this.gui.proc_enter_proc(ENUMVCIs.SYS_PROC_ID.PROC_DPF_RESET, ENUMVCIs.SYS_CMD_ID.CMD_INIT_PROC);
  }

  async actuatortest_enter_proc() {
    //await this.gui.gui_set_special_function_group(ENUMVCIs.SF_FunctionGroup.UNKNOWN);
    return await this.gui.proc_enter_proc(ENUMVCIs.SYS_PROC_ID.PROC_ACTIVE_TEST, ENUMVCIs.SYS_CMD_ID.CMD_INIT_PROC);
  }

  async tpms_reset_enter_proc() {
    return await this.gui.proc_enter_proc(ENUMVCIs.SYS_PROC_ID.PROC_TPMS_RESET_MENU, ENUMVCIs.SYS_CMD_ID.CMD_INIT_PROC);
  }

  async battery_health_check_enter_proc() {
    return await this.gui.proc_enter_proc(ENUMVCIs.SYS_PROC_ID.PROC_BATTERY_HEALTH_CHECK, ENUMVCIs.SYS_CMD_ID.CMD_INIT_PROC);
  }

  async gui_set_key_option_old(id) {
    try {
      await this.gui.set_param(ENUMVCIs.VCI_GUI_Param_Type.param_selection, id);
      await this.delay(100);
      await this.gui.gui_set_key_code(ENUMVCIs.GUI_KEY_CODE.GUI_KEY_ENTER);
    }
    catch (err) {
      this.log('set key option issue:' + err);
    }


  }

  //
  async gui_set_key_option(id) {
    try {
      await this.gui.gui_set_key_code_with_index(ENUMVCIs.GUI_KEY_CODE.GUI_KEY_ENTER, id);
    }
    catch (err) {
      this.log('set key option issue:' + err);
    }
  }

  async gui_set_softkey(type: string) {
    if (type === "left") {
      //await this.gui.set_param(ENUMVCIs.VCI_GUI_Param_Type.param_selection, id);
      return await this.gui.gui_set_key_code(ENUMVCIs.GUI_KEY_CODE.GUI_SOFTKEY_1);
    }
    else {
      //await this.gui.set_param(ENUMVCIs.VCI_GUI_Param_Type.param_selection, id);
      return await this.gui.gui_set_key_code(ENUMVCIs.GUI_KEY_CODE.GUI_SOFTKEY_2);
    }
  }
  async cancel_process() {
    return await this.obd2.cancel_vci_process();
  }

  async reset_fast_cancel() {
    return await this.obd2.ResetFastCancel();
  }

  async deregisterReceiveCb() {
    this.commService.isRegisterCallBack = false;
  }
  async initGUIProc() {
    this.commService.isRegisterCallBack = true;
    this.commService.isConfirmNormal = false;
  }
  async deinitGUIProc() {
    this.commService.isRegisterCallBack = false;
    this.log('Terminate proc');
    await this.gui_terminate_proc();
  }
  async gui_register_cb(cbfunc = null) {
    try {
      this.commService.isRegisterCallBack = true;
      this.commService.isConfirmNormal = false;
      this.commService.EventCallBackFunction.subscribe(
        {
          next: data => {

            cbfunc & cbfunc(data);

            // this.logger.log(datau8array.toString())
          },
          error: err => {
            this.log('error' + err)
          },
          complete: () => {
            this.log('done')
          }
        });
    }
    catch (err) {
      alert(err)
      this.log(err)
    }

  }
  async gui_set_input_val(input_val: string) {
    return await this.gui.set_param(ENUMVCIs.VCI_GUI_Param_Type.param_input, input_val);
  }
  async gui_exec_disp() {
    return await this.gui.gui_notice_disp();
  }

  async gui_terminate_proc() {
    //await this.gui.gui_set_special_function_group(ENUMVCIs.SF_FunctionGroup.UNKNOWN);
    return await this.gui.proc_terminate_proc();
  }

  async ABS_bleeding_enter_proc() {
    // await this.gui.gui_set_special_function_group(ENUMVCIs.SF_FunctionGroup.ABS_Bleeding);
    // return await this.gui.proc_enter_proc(ENUMVCIs.SYS_PROC_ID.PROC_SPECIAL_FUNCTION, ENUMVCIs.SYS_CMD_ID.CMD_INIT_PROC);
    return await this.gui.gui_proc_enter_specialFunction_feature(ENUMVCIs.SF_FunctionGroup.ABS_Bleeding);
  }


  //20-08-2020 10:17 Log Data Function
  /**
   * [StartLog start logging data]
   * @return [true if start logging no issue, otherwise is false]
   */
  async StartLog() {
    await this.obdsystem.SetLogFunction(ENUMVCIs.VCI_Data_Logging.EN_All);
    return await this.obdsystem.StartLog();
  }

  /**
   * [StopLog stop logging data]
   * @return [true if stop logging no issue, otherwise is false]
   */
  async StopLog() {
    return await this.obdsystem.StopLog();
  }

  /**
  * [GetLog get the logging data stored before ]
  * @return [vehicle data logged in VCI]
  */
  async GetLog() {
    return await this.obdsystem.GetLog();
  }

  //YMME function 07-09-2020 21:26
  async ymme_init() {
    await this.ymme.init();
    return await this.ymme.get(0);
  }

  async ymme_get(sel_id) {
    return await this.ymme.get(sel_id);
  }

  async ymme_back() {
    return await this.ymme.get(0xFF);
  }

  async ymme_confirm() {
    return await this.ymme.confirm();
  }





}

export { EnumNotify, Dataparser }
