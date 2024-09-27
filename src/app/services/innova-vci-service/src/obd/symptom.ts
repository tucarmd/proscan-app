import { Injectable } from '@angular/core';
import * as ENUMs from './../standard/enums'
import * as ENUMVCIs from './vcistd'
import { OBDx } from './obd'
import { isNullOrUndefined, isObject } from 'util';
import * as DataParser from './../utilities/dataParser'

@Injectable({
    providedIn: 'root'
})

export class Symptom extends OBDx {
  async initprocess()
  {
    try{
      //this.logdebug("initialize Symptom");
        await this.LinkVciCmd({
            Procid: ENUMVCIs.VCIProg.symptom,
            stateid: ENUMVCIs.VCICmd_symptom.symptom_init
        });
    }
    catch(err)
    {
      this.logdebug(err);
    }
  }

  async getScreen_UI()
  {
    try{
      //this.logdebug("Getting ui");

      /*Get Screen Title here*/
      var usbData = [...DataParser.numberToBytes(ENUMVCIs.VCI_symptom_getui.symptom_get_title, 1)];

      let _title = await this.LinkVciCmd({
          Procid: ENUMVCIs.VCIProg.symptom,
          stateid: ENUMVCIs.VCICmd_symptom.symptom_getui,
          usbData, nretry:1,timeout:4000
      });
      let _title_str = DataParser.bytesToString(_title);
      //this.logdebug(_title_str);
      /*Get Body screen here*/
      usbData = [...DataParser.numberToBytes(ENUMVCIs.VCI_symptom_getui.symptom_get_body, 1)];
      let _body = await this.LinkVciCmd({
          Procid: ENUMVCIs.VCIProg.symptom,
          stateid: ENUMVCIs.VCICmd_symptom.symptom_getui,
          usbData, nretry:1,timeout:4000
      });
      let _body_str = DataParser.bytesToString(_body).split('\n').join('\\n');
      _body_str = _body_str.split('\r').join('\\r');
      //this.logdebug(_body_str);
      /*Get Optionlist here*/
      usbData = [...DataParser.numberToBytes(ENUMVCIs.VCI_symptom_getui.symptom_get_optionlist, 1)];
      let _optlist = await this.LinkVciCmd({
          Procid: ENUMVCIs.VCIProg.symptom,
          stateid: ENUMVCIs.VCICmd_symptom.symptom_getui,
          usbData, nretry:1,timeout:4000
      });
      let _optlist_str = DataParser.bytesToString(_optlist);
      //this.logdebug(_optlist_str);

      /*Get Optionlist here*/
      usbData = [...DataParser.numberToBytes(ENUMVCIs.VCI_symptom_getui.symptom_get_softkey, 1)];
      let _softkey = await this.LinkVciCmd({
          Procid: ENUMVCIs.VCIProg.symptom,
          stateid: ENUMVCIs.VCICmd_symptom.symptom_getui,
          usbData, nretry:1,timeout:4000
      });
      let _softkey_str = DataParser.bytesToString(_softkey);
      //this.logdebug(_softkey_str);
      return {title:(JSON.parse(_title_str).Title),body:(JSON.parse(_body_str).Body),option:_optlist_str,softkey:_softkey_str};
    }
    catch(err)
    {
      this.logdebug(err);
      return ({});
    }
  }

  async set_useroptionselection(index){
    try{
      const usbData = [...DataParser.numberToBytes(ENUMVCIs.VCI_symptom_selection_type.symptom_normal_selection, 1),...DataParser.numberToBytes(index, 1)];
      const data = await this.LinkVciCmd({
          Procid: ENUMVCIs.VCIProg.symptom,
          stateid: ENUMVCIs.VCICmd_symptom.symptom_setselection,
          usbData, nretry:1,timeout:2000});
      return true;
    }
    catch(err)
    {
      this.logdebug(err);
      return false;
    }

  }

  async set_softkeyselection(index){
    try{
      const usbData = [...DataParser.numberToBytes(ENUMVCIs.VCI_symptom_selection_type.symtom_softkey_selection, 1),...DataParser.numberToBytes(index, 1)];
      const data = await this.LinkVciCmd({
          Procid: ENUMVCIs.VCIProg.symptom,
          stateid: ENUMVCIs.VCICmd_symptom.symptom_setselection,
          usbData, nretry:1,timeout:2000});
      return true;
    }
    catch(err)
    {
      this.logdebug(err);
    }
  }
}
