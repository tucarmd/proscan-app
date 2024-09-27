/**
 * @Author: quocdo-macbook
 * @Date:   2020-11-06T22:46:24+07:00
 * @Last modified by:   quocdo-macbook
 * @Last modified time: 2021-09-08T08:43:42+07:00
 */



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

export class GUI extends OBDx {
  private gui_call_func = function(data:string){};
  private that =null;
  async gui_notice_disp()
  {
    try{
      const data = await this.LinkVciCmd({
        Procid: ENUMVCIs.VCIProg.gui,
        stateid: ENUMVCIs.VCICmd_GUI.gui_lcd_display,
      });

    }
    catch(err)
    {
      this.logdebug(err);
    }
  }
  async proc_enter_proc(proc_id, cmd_id)
  {
    try{
      const usbData = [...DataParser.numberToBytes(proc_id, 2), ...DataParser.numberToBytes(cmd_id, 2)];
      this.logdebug("Enter Process:" + proc_id + ",cmd_id"+ cmd_id);
      const data = await this.LinkVciCmd({
        Procid: ENUMVCIs.VCIProg.gui,
        stateid: ENUMVCIs.VCICmd_GUI.gui_proc_enter,
        usbData, nretry: 1, timeout: 1000
      });
      if(isNullOrUndefined(data))
      {
        return false;
      }
      else
      {
        return true;
      }
    }
    catch(err)
    {
      this.logdebug(err);
    }
  }

  async proc_leave_proc()
  {
    try{

      await this.LinkVciCmd({
        Procid: ENUMVCIs.VCIProg.gui,
        stateid: ENUMVCIs.VCICmd_GUI.gui_proc_leave
      });
    }
    catch(err)
    {
      this.logdebug(err);
    }
  }

  async proc_terminate_proc()
  {
    try{
      await this.LinkVciCmd({
        Procid: ENUMVCIs.VCIProg.gui,
        stateid: ENUMVCIs.VCICmd_GUI.gui_proc_terminate,
        nretry: 0,
        timeout: 500 // ngoclb: set timeout for this command
      });
    }
    catch(err)
    {
      this.logdebug(err);
    }
  }

  async gui_set_key_code(keycode:number)
  {
    try{
      const usbData = [...DataParser.numberToBytes(keycode, 2)];
      this.logdebug('Set Keycode:'+keycode)
      await this.LinkVciCmd({
        Procid: ENUMVCIs.VCIProg.gui,
        stateid: ENUMVCIs.VCICmd_GUI.gui_set_key,
          usbData,nretry:3
      });
    }
    catch(err)
    {
      this.logdebug(err);
    }

  }

  async gui_set_key_code_with_index(keycode:number, index:number)
  {
    try{
      const usbData = [...DataParser.numberToBytes(keycode, 2),
      ...DataParser.numberToBytes(index, 4)];
      this.logdebug('Set Keycode:'+keycode)
      this.logdebug('Set Keyindex:'+index)
      await this.LinkVciCmd({
        Procid: ENUMVCIs.VCIProg.gui,
        stateid: ENUMVCIs.VCICmd_GUI.gui_set_key_with_index,
          usbData,nretry:3
      });
    }
    catch(err)
    {
      this.logdebug(err);
    }
  }

  async gui_proc_sf_at_set_active_module(system, subsystem)
  {
    const usbData = [...DataParser.numberToBytes(system, 2) ,
      ...DataParser.numberToBytes(subsystem, 2) ] ;
    this.logdebug('Set system:'+ system + ' ' + 'SubSystem:' + subsystem)
    const data = await this.LinkVciCmd({
      Procid: ENUMVCIs.VCIProg.gui,
      stateid: ENUMVCIs.VCICmd_GUI.gui_set_special_at_module,
      usbData, nretry: 1, timeout: 5000
    });
      if(isNullOrUndefined(data))
      {
      return false;
    }
      else
      {
      return true;
    }
  }

  async gui_proc_enter_specialFunction_feature(group_id)
  {
    const usbData = [...DataParser.numberToBytes(ENUMVCIs.SYS_PROC_ID.PROC_SPECIAL_FUNCTION, 2),
    ...DataParser.numberToBytes(ENUMVCIs.SYS_CMD_ID.CMD_INIT_PROC, 2),
    ...DataParser.numberToBytes(group_id, 1)];
    const data = await this.LinkVciCmd({
      Procid: ENUMVCIs.VCIProg.gui,
      stateid: ENUMVCIs.VCICmd_GUI.gui_proc_enter,
      usbData, nretry: 1, timeout: 5000
    });
      if(isNullOrUndefined(data))
      {
      return false;
    }
      else
      {
      return true;
    }
  }
  async gui_set_special_function_group(group_id)
  {
    return new Promise(async resolve =>{
      try{
        const usbData = [...DataParser.numberToBytes(group_id, 1)];
        this.logdebug('Set Special Function Group:'+ group_id)
        const data= await this.LinkVciCmd({
          Procid: ENUMVCIs.VCIProg.gui,
          stateid: ENUMVCIs.VCICmd_GUI.gui_set_special_function_group,
            usbData, timeout:1000
        });
        if(isNullOrUndefined(data))
        {
          return resolve(false);
        }
        else
        {
          return resolve(true);;
        }
      }
      catch(err){
        this.logdebug(err)
        return resolve(false);
      }
    })



  }

  async set_param(type,param)
  {
    // { return new Promise( async (resolve,reject)=>{
    //   let stt= false;
    //   try{
    //     await this.logdebug('Set Param:'+ param);
    //     //this.logdebug('Type Param:'+ (typeof param));
    //     let usbData=[]
    //
    //     switch(typeof param)
    //     {
    //       case 'number':
    //         usbData = [...DataParser.numberToBytes(type, 1), ...DataParser.numberToBytes(param, 4)];
    //       break;
    //       case 'string':
    //         usbData = [...DataParser.numberToBytes(type, 1), ...DataParser.stringToBytes(param)];
    //       break;
    //       default:
    //       break;
    //     }
    //
    //     await this.LinkVciCmd({
    //         Procid: ENUMVCIs.VCIProg.gui,
    //         stateid: ENUMVCIs.VCICmd_GUI.gui_set_param,
    //         usbData,nretry:3
    //     }).then(async (data)=>{
    //       if(data== undefined||data==null)
    //       {
    //         await this.logdebug('set Param false')
    //         stt=false;
    //       }
    //       else
    //       {
    //         await this.logdebug('set Param true')
    //         stt = true;
    //       }
    //     })
    //     await this.logdebug('Finish set option')
    //
    //     //return resolve(true);
    //   }
    //   catch(err)
    //   {
    //     this.logdebug(err);
    //     return reject(Error('Error message'));
    //     //return resolve(false);
    //   }
    //   return await resolve(stt);
    // })
  let stt= false;
  try{
    await this.logdebug('Set Param:'+ param);
      //this.logdebug('Type Param:'+ (typeof param));
    let usbData=[]

    switch(typeof param)
    {
        case 'number':
          usbData = [...DataParser.numberToBytes(type, 1), ...DataParser.numberToBytes(param, 4)];
          break;
        case 'string':
          usbData = [...DataParser.numberToBytes(type, 1), ...DataParser.stringToBytes(param)];
          break;
        default:
          break;
      }

      await this.LinkVciCmd({
        Procid: ENUMVCIs.VCIProg.gui,
        stateid: ENUMVCIs.VCICmd_GUI.gui_set_param,
        usbData,nretry:3
    }).then(async (data)=>{
      if(data== undefined||data==null)
      {
          await this.logdebug('set Param false')
        stt=false;
        }
      else
      {
          await this.logdebug('set Param true')
          stt = true;
        }
      })
      await this.logdebug('Finish set option')

      //return resolve(true);
    }
  catch(err)
  {
      this.logdebug(err);
      //return reject(Error('Error message'));
      //return resolve(false);
    }
    return stt;
  }



}
