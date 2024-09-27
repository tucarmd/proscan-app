/**
 * @Author: quocdo-macbook
 * @Date:   2020-11-06T22:46:24+07:00
 * @Last modified by:   quocdo-macbook
 * @Last modified time: 2022-01-26T15:24:01+07:00
 */



import { Injectable } from '@angular/core';
import * as ENUMs from '../standard/enums'
import * as ENUMVCIs from './vcistd'
import { OBDx } from './obd'
import * as _ from 'lodash'
import * as OBDUtil from './obdUtils'
import { isNullOrUndefined, isObject, debuglog } from 'util';
import * as DataParser from '../utilities/dataParser'
import { enumProtocol } from '../standard/enums';
import { ICOMMANDS, VCI_Data_Logging } from './vcistd';

@Injectable({
    providedIn: 'root'
})

export class OBDSystem extends OBDx {


    public async getECUVoltage() {

        let ret = {BatteryVoltage:undefined,Unit:'V'}
        const usbData = [0, 0]
        try {
      const batvol = await this.LinkVciCmd({
        Procid: ENUMVCIs.VCIProg.tool,
        stateid: ENUMVCIs.VCICmd_tool.getecuvoltage, usbData, nretry: 0, timeout: 300 //chang by ngoclb
            })
            let j = DataParser.bytesToString(batvol)
      if (j.search("Battery Voltage") > 0) {
                var temp = JSON.parse(j.replace("Battery Voltage", "BatteryVoltage"));
                return temp as string;
            }
            let v = new Float32Array(new Uint8Array(batvol).buffer)[0];
            if (!isNullOrUndefined(v)) {
                return {BatteryVoltage:v.toFixed(2),Unit:'V'};
            }
        } catch (error) {
          this.logdebug("getECUVoltage error:" + error)
        }
        return ret
    }

    public async settingUnitType(unit_type) {
      this.logdebug("Unit Selection:" + unit_type)
      const usbData = [...DataParser.numberToBytes(unit_type, 1)];
      try {
      const val = await this.LinkVciCmd({
        Procid: ENUMVCIs.VCIProg.tool,
          stateid: ENUMVCIs.VCICmd_tool.setting_unit, usbData
        })
      if (isNullOrUndefined(val)) {
          return false;
        }
      else {
          return true;
        }
      } catch (error) {
      }
      return true;
    }

    public async SettingLanguage(lang_id) {
      this.logdebug("Language Selection:" + lang_id)
      const usbData = [...DataParser.numberToBytes(lang_id, 1)];
      try {
      const val = await this.LinkVciCmd({
        Procid: ENUMVCIs.VCIProg.tool,
          stateid: ENUMVCIs.VCICmd_tool.setting_language, usbData
        })
      if (isNullOrUndefined(val)) {
          return false;
        }
      else {
          return true;
        }
      } catch (error) {
      }
      return true;
    }

  public async Cancel_VCI_Process() {
      try{
        this.logdebug("Cancel Process...")

      }
    catch (err) {

      }
    }

    /**
     * [SetLogFunction Set function id for data logging]
     * @param  func_id [func_id based on VCI_Data_Logging]
     * @return         [boolean]
     */
  public async SetLogFunction(func_id) {
      try{
        const usbData = [...DataParser.numberToBytes(ICOMMANDS.LogData.setfuncid.id, 1),...DataParser.numberToBytes(func_id, 1)];
        this.logdebug("Set Function Log:" + func_id)
        const func = ICOMMANDS.LogData.setfuncid.options.find(o => o.value===func_id);
        this.logdebug("Set Function Log:" + func.text)
        const { data } = await this.Link(
          {
            id:ICOMMANDS.LogData.id,
            data: usbData
          }
          );
        return true;
      }
    catch (err) {
        this.logdebug("Set Function Log err:" + err)
        return false;
      }
    }

    /**
     * [StartLog Start Data Log]
     * @return [boolean]
     */
  public async StartLog() {
      try{
        this.logdebug("Start Log")
        const usbData = [...DataParser.numberToBytes(ICOMMANDS.LogData.startlog.id, 1)];
        await this.Link(
          {
            id:ICOMMANDS.LogData.id,
            data: usbData
          }
          );
        return true;
      }
      catch(err){
        this.logdebug("Start Log err:" + err)
        return false;
      }
    }

    /**
     * [StopLog Stop data logging]
     * @return [boolean]
     */
  public async StopLog() {
      try{
        this.logdebug("Stop Log")
        const usbData = [...DataParser.numberToBytes(ICOMMANDS.LogData.stoplog.id, 1)];
        await this.Link(
          {
            id:ICOMMANDS.LogData.id,
            data: usbData
          }
          );
        return true;
      }
      catch(err){
        this.logdebug("Stop Log err:" + err)
        return false;
      }
    }
    /**
     * [GetLog Get Log Data]
     * @return [Logging data]
     */
  public async GetLog() {
      try{
        this.logdebug("Get Log")
        const usbData = [...DataParser.numberToBytes(ICOMMANDS.LogData.getlog_encrypt.id, 1)];
        const { data } = await this.LinkMultiData(
          {
            id:ICOMMANDS.LogData.id,
            data: usbData
          }
          );
        return data;
      }
      catch(err){
        this.logdebug("Get Log err:" + err)
        return null;
      }
    }



    guidToBytes(guid) {
      var bytes = [];
      guid.split('-').map((number, index) => {
        var bytesInChar = index < 3 ? number.match(/.{1,2}/g).reverse() :  number.match(/.{1,2}/g);
        bytesInChar.map((byte) => { bytes.push(parseInt(byte, 16));})
      });
      return bytes;
    }
    /**
     * [readGUID Function to read GUID]
     * @return [string of GUID]
     */
    public async readGUID(){
      try{
        const { data } = await this.Link(ICOMMANDS.getGuid);
        const guid = data.slice(0, 4).reverse().concat(data.slice(4,6).reverse()).concat(data.slice(6,8).reverse()).concat(data.slice(8))

        let new_x= Array.from(guid, function (byte:any) {
              return ('0' + (byte & 0xFF).toString(16)).slice(-2);
          }).join('').replace(/(.{8})(.{4})(.{4})(.{4})(.{12})/, "$1-$2-$3-$4-$5").toUpperCase();
        this.logdebug('GUIID:' + new_x)
        return new_x;
      }
      catch(err){
        this.logdebug('Error when reading GUIID:' + err)
        return null;
      }
    }
    /**
     * [writeGUID Function to write GUID]
     * @param  guiid [string of guid]
     * @return       [boolean]
     */
  public async writeGUID(guiid) {
      try{
        this.logdebug('Writing GUID:' + guiid)

        const { data } = await this.Link(
          {
            id:ICOMMANDS.setGuid.id,
            data: this.guidToBytes(guiid)
          }
          );

        return true;
      }
    catch (err) {
        this.logdebug('Error when writing GUIID:' + err)
        return false;
      }
    }


}
