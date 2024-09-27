import { Injectable } from '@angular/core';
import * as ENUMVCIs from './vcistd'
import { OBDx } from './obd'
import * as _ from 'lodash'
import * as DataParser from './../utilities/dataParser'
import { enumInnovagroup } from '../standard/enums';
import { isNullOrUndefined } from 'util';

@Injectable({
  providedIn: 'root'
})

export class YMME extends OBDx {
  async init(): Promise<boolean>
  {
    try{
      await this.LinkVciCmd({
          Procid: ENUMVCIs.VCIProg.ymme,
          stateid: ENUMVCIs.VCICmd_YMME.init, usbData: [],
          nretry: 1, timeout: 10000
      });
      return true;
    }catch(err){
      this.logdebug('Error initialize YMME Selection:'+err)
      return false;
    }
  }

  async get(sel_id)
  {
    return new Promise(async resolve => {
      try{
        const usbData = [...DataParser.numberToBytes(sel_id, 1)];
        const data = await this.LinkVciCmd({
            Procid: ENUMVCIs.VCIProg.ymme,
            stateid: ENUMVCIs.VCICmd_YMME.get, usbData,
            nretry: 1, timeout: 10000
        });
        let j ={}
        if(isNullOrUndefined(data))
        {
            j= {}
        }
        else
        {
            j= JSON.parse(DataParser.bytesToString(data) as string);
        }
        return resolve(j);
      }catch(err){
        this.logdebug('Error initialize YMME get selection:'+err)
        return resolve({});
      }
    })

  }

  async confirm()
  {
    try{
      await this.LinkVciCmd({
          Procid: ENUMVCIs.VCIProg.ymme,
          stateid: ENUMVCIs.VCICmd_YMME.confirm, usbData: [],
          nretry: 1, timeout: 10000
      });
      return true;
    }catch(err){
      this.logdebug('Error initialize YMME confirm:'+err)
      return false;
    }
  }

}
