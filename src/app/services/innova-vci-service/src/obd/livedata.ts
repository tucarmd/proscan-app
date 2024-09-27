/**
 * @Author: quocdo-macbook
 * @Date:   2021-03-04T10:51:23+07:00
 * @Last modified by:   quocdo-macbook
 * @Last modified time: 2021-03-17T13:26:10+07:00
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

export class Livedata extends OBDx {
  async getOBD2_LiveDataListPIDsupport()
  {
    return await this.getlivedatapidsupport_group(enumInnovagroup.einnovagroup_GROUP_OBDII);

  }

  async getOBD2_LiveDataItem_Val(itemid)
  {
    return await this.getlivedata_itemval(enumInnovagroup.einnovagroup_GROUP_OBDII, itemid);
  }

  async getABS_LiveDataListPIDsupport()
  {
    return await this.getlivedatapidsupport_group_v2(enumInnovagroup.einnovagroup_GROUP_ABS);

  }

  async getABS_LiveDataItem_Val(itemid)
  {
    return await this.getlivedata_itemval_v2(enumInnovagroup.einnovagroup_GROUP_ABS, itemid);
  }

  async getECM_LiveDataListPIDsupport()
  {
    return await this.getlivedatapidsupport_group_v2(enumInnovagroup.einnovagroup_GROUP_ENH_ECM);

  }

  async getECM_LiveDataItem_Val(itemid)
  {
    return await this.getlivedata_itemval_v2(enumInnovagroup.einnovagroup_GROUP_ENH_ECM, itemid);
  }

  async getOther_LiveDataItem_Val(itemid)
  {
    return await this.getlivedata_itemval_v2(enumInnovagroup.einnovagroup_INNOVA_GROUP_UNKNOW, itemid);
  }

  async getSRS_LiveDataListPIDsupport()
  {
    return await this.getlivedatapidsupport_group_v2(enumInnovagroup.einnovagroup_GROUP_SRS);

  }

  async getSRS_LiveDataItem_Val(itemid)
  {
    return await this.getlivedata_itemval_v2(enumInnovagroup.einnovagroup_GROUP_SRS, itemid);
  }

  async getECM_LiveDataNumberItemSupport()
  {
    return await this.getlivedata_numberpidsuppport_group_v2(enumInnovagroup.einnovagroup_GROUP_ENH_ECM);
  }

  async getSRS_LiveDataNumberItemSupport()
  {
    return await this.getlivedata_numberpidsuppport_group_v2(enumInnovagroup.einnovagroup_GROUP_SRS);
  }

  async getABS_LiveDataNumberItemSupport()
  {
    return await this.getlivedata_numberpidsuppport_group_v2(enumInnovagroup.einnovagroup_GROUP_ABS);
  }

  async getlivedatapidsupport_group(innovagroup){return new Promise(async resolve =>{
    try {
      const usbData = [...DataParser.numberToBytes(innovagroup, 1)];

      this.logdebug('Checking item support ' + innovagroup);
      const data= await this.LinkVciCmd({
        Procid: ENUMVCIs.VCIProg.livedata,
        stateid: ENUMVCIs.VCICmd_livedata.read_itemlist,
        usbData, nretry: 1, timeout:30000
      });
      let j = DataParser.bytesToString(data)
      this.logdebug(j);
      return resolve(JSON.parse(j));
    } catch (err) {
      this.logdebug(err);
      return resolve({});
    }
  });

}
async getlivedata_itemval(innovagroup, itemid){
  return new Promise(async resolve =>{
    try {
      const usbData = [...DataParser.numberToBytes(innovagroup, 1),...DataParser.numberToBytes(itemid, 2)];

      this.logdebug('Checking item support '+ itemid);
      const data= await this.LinkVciCmd({
        Procid: ENUMVCIs.VCIProg.livedata,
        stateid: ENUMVCIs.VCICmd_livedata.read_itemval,
        usbData, nretry: 1, timeout:20000
      });
      let j = DataParser.bytesToString(data).split('\n').join('-');
      //this.logdebug('item string:'+j);
      return resolve(JSON.parse(j));
    }
    catch (err) {
      this.logdebug(err);
      return resolve({});
    }
  });

}

async getlivedata_itemval_v2(innovagroup, itemid){
  return new Promise(async resolve =>{
    try {
      const usbData = [...DataParser.numberToBytes(innovagroup, 1),...DataParser.numberToBytes(itemid, 2)];

      this.logdebug('Checking item support '+ itemid);
      const data= await this.LinkVciCmd({
        Procid: ENUMVCIs.VCIProg.livedata,
        stateid: ENUMVCIs.VCICmd_livedata.get_itemval_v2,
        usbData, nretry: 1, timeout:20000
      });
      let j = DataParser.bytesToString(data).split('\n').join('-');
      this.logdebug('item string:'+j);
      return resolve(JSON.parse(j));
    }
    catch (err) {
      this.logdebug(err);
      return resolve({});
    }
  });

}

getlivedata_list_itemval(innovagroup, start_idx, end_idx){
    return new Promise(async resolve =>{
      try {
      //  let list_bytes = (new Uint8Array(list)).map(xx=>{return xx})
        const usbData = [...DataParser.numberToBytes(innovagroup, 1),
        ...DataParser.numberToBytes(start_idx, 1), ...DataParser.numberToBytes(end_idx, 1)];

        this.logdebug('Checking item support list');
        const data= await this.LinkVciCmd({
          Procid: ENUMVCIs.VCIProg.livedata,
          stateid: ENUMVCIs.VCICmd_livedata.read_list_item_val,
          usbData, nretry: 1, timeout:10000
        });
        let j = DataParser.bytesToString(data).split('\n').join('-');
        this.logdebug(start_idx+'-'+end_idx+':'+j);
        return resolve(JSON.parse(j));
      }
      catch(err)
      {
        this.logdebug(err);
        return resolve({});
      }
    })
}

async getlivedata_list_itemval_v2(innovagroup, start_idx, end_idx){
  return new Promise(async resolve =>{
    try {
      //  let list_bytes = (new Uint8Array(list)).map(xx=>{return xx})
      const usbData = [...DataParser.numberToBytes(innovagroup, 1),
      ...DataParser.numberToBytes(start_idx, 2), ...DataParser.numberToBytes(end_idx, 2)];

      this.logdebug('Checking item support list');
      const data= await this.LinkVciCmd({
        Procid: ENUMVCIs.VCIProg.livedata,
        stateid: ENUMVCIs.VCICmd_livedata.get_listitemval,
        usbData, nretry: 1, timeout:10000
      });
      let j = DataParser.bytesToString(data).split('\n').join('-');
      this.logdebug(start_idx+'-'+end_idx+':'+j);
      return resolve(JSON.parse(j));
    }
    catch(err)
    {
      this.logdebug(err);
      return resolve({});
    }
  })
}

getlivedata_hybrid()
{
  return new Promise(async resolve =>{
    try{
      const usbData = [];
        //this.logdebug('Checking item info of:'+ itemid);
        const data= await this.LinkVciCmd({
        Procid: ENUMVCIs.VCIProg.livedata,
        stateid: ENUMVCIs.VCICmd_livedata.start_hybrid_ld,
        usbData, nretry: 1, timeout:5000
      });

      let j = DataParser.bytesToString(data).split('\n').join('-');
    //  this.logdebug('Checking item info of:' +itemid);
      this.logdebug('Response info:' + j);
      return resolve(JSON.parse(j));
    }
    catch(err)
    {
      this.logdebug(err);
      return resolve({});
  }
  })
}

async getlivedata_listinfo(innovagroup, startid, stopid)
{
  return new Promise(async resolve =>{
    try{
      const usbData = [...DataParser.numberToBytes(innovagroup, 1),
        ...DataParser.numberToBytes(startid, 2), ...DataParser.numberToBytes(stopid, 2)];
        //this.logdebug('Checking item info of:'+ itemid);
        const data= await this.LinkVciCmd({
        Procid: ENUMVCIs.VCIProg.livedata,
        stateid: ENUMVCIs.VCICmd_livedata.get_listiteminfo,
        usbData, nretry: 1, timeout:10000
      });

      let j = DataParser.bytesToString(data).split('\n').join('-');
      this.logdebug('Checking item info from:' +startid + 'to ' + stopid);
      this.logdebug('Response info:' + j);
      return resolve(JSON.parse(j));
    }
    catch(err)
    {
      this.logdebug(err);
      return resolve({});
    }
  })
}
getlivedata_iteminfo(innovagroup, itemid){
  return new Promise(async resolve =>{
    try{
      const usbData = [...DataParser.numberToBytes(innovagroup, 1),
      ...DataParser.numberToBytes(itemid, 2)];
      //this.logdebug('Checking item info of:'+ itemid);
      const data= await this.LinkVciCmd({
        Procid: ENUMVCIs.VCIProg.livedata,
        stateid: ENUMVCIs.VCICmd_livedata.read_item_info,
        usbData, nretry: 1, timeout:5000
      });

      let j = DataParser.bytesToString(data).split('\n').join('-');
      this.logdebug('Checking item info of:' +itemid);
      this.logdebug('Response info:' + j);
      return resolve(JSON.parse(j));
    }
    catch(err)
    {
      this.logdebug(err);
      return resolve({});
    }
  })
}

getlivedata_hybrid_info()
{
  return new Promise(async resolve =>{
    try{
      const usbData = [];
        //this.logdebug('Checking item info of:'+ itemid);
        const data= await this.LinkVciCmd({
        Procid: ENUMVCIs.VCIProg.livedata,
        stateid: ENUMVCIs.VCICmd_livedata.start_hybrid_ld,
        usbData, nretry: 1, timeout:5000
      });

      let j = DataParser.bytesToString(data).split('\n').join('-');
      //this.logdebug('Checking item info of:' +itemid);
      this.logdebug('Response info:' + j);
      return resolve(JSON.parse(j));
    }
    catch(err)
    {
      this.logdebug(err);
      return resolve({});
    }
  })
}

enable_dtc_trigger()
{
  return new Promise(async resolve =>{
    try{
      const usbData = [];
        //this.logdebug('Checking item info of:'+ itemid);
        const data= await this.LinkVciCmd({
        Procid: ENUMVCIs.VCIProg.livedata,
        stateid: ENUMVCIs.VCICmd_livedata.set_record_dtc_trigger,
        usbData, nretry: 1, timeout:5000
      });

      let j = DataParser.bytesToString(data).split('\n').join('-');
      //this.logdebug('Checking item info of:' +itemid);
      this.logdebug('Response info:' + j);
      return resolve(JSON.parse(j));
    }
    catch(err)
    {
      this.logdebug(err);
      return resolve({});
    }
  })
}

disable_dtc_trigger()
{
  return new Promise(async resolve =>{
    try{
      const usbData = [];
        //this.logdebug('Checking item info of:'+ itemid);
        const data= await this.LinkVciCmd({
        Procid: ENUMVCIs.VCIProg.livedata,
        stateid: ENUMVCIs.VCICmd_livedata.reset_record_dtc_trigger,
        usbData, nretry: 1, timeout:5000
      });

      let j = DataParser.bytesToString(data).split('\n').join('-');
      //this.logdebug('Checking item info of:' +itemid);
      this.logdebug('Response info:' + j);
      return resolve(JSON.parse(j));
    }
    catch(err)
    {
      this.logdebug(err);
      return resolve({});
    }
  })
}

/*Live Data Version 2 support over 200 Pids*/
async getlivedata_numberpidsuppport_other(system,subsystem)
{
  return new Promise(async resolve =>{
    try {
      const usbData = [...DataParser.numberToBytes(enumInnovagroup.einnovagroup_INNOVA_GROUP_UNKNOW, 1),
        ...DataParser.numberToBytes(system, 2), ...DataParser.numberToBytes(subsystem, 2)];

      this.logdebug('Checking item of system ' + system + ' and subSystem ' + subsystem);
      const data= await this.LinkVciCmd({
        Procid: ENUMVCIs.VCIProg.livedata,
        stateid: ENUMVCIs.VCICmd_livedata.check_getnumpid_group,
        usbData, nretry: 1, timeout:30000
      });
      let j = DataParser.bytesToString(data)
      this.logdebug(j);
      const res = JSON.parse(j);

      return resolve(res);
    } catch (err) {
      this.logdebug(err);
      return resolve({});
    }
  });
}


async getlivedata_numberpidsuppport_group_v2(innovagroup)
{
  return new Promise(async resolve =>{
    try {
      const usbData = [...DataParser.numberToBytes(innovagroup, 1)];

      this.logdebug('Checking item support ' + innovagroup);
      const data= await this.LinkVciCmd({
        Procid: ENUMVCIs.VCIProg.livedata,
        stateid: ENUMVCIs.VCICmd_livedata.check_getnumpid_group,
        usbData, nretry: 1, timeout:30000
      });
      let j = DataParser.bytesToString(data)
      this.logdebug(j);
      let res = JSON.parse(j);
      if(isNullOrUndefined(res))
      {
        res = { Number:0};
      }
      return resolve(res);
    } catch (err) {
      this.logdebug(err);
      return resolve({});
    }
  });
}

async getlivedatapidsupport_group_v2(innovagroup){return new Promise(async resolve =>{
  try {
    const usbData = [...DataParser.numberToBytes(innovagroup, 1)];

    this.logdebug('Checking item support ' + innovagroup);
    const data= await this.LinkVciCmd({
      Procid: ENUMVCIs.VCIProg.livedata,
      stateid: ENUMVCIs.VCICmd_livedata.check_getnumpid_group,
      usbData, nretry: 1, timeout:30000
    });
    let j = DataParser.bytesToString(data)
    this.logdebug(j);
    const ls_pid = JSON.parse(j);
    let ls_item = ls_pid["Number"];
    let new_list_info = [];
    for (let id=0; id< ls_item;id+=15)
    {
      const ls_info = await this.getlivedata_listinfo(innovagroup, id, id+14>ls_item?ls_item-1:id+14)
      new_list_info.push(...ls_info["ListItem"]);
    }
    // for(const item of ls_item)
    // {
    //   const info = await this.getlivedata_iteminfo(innovagroup, item);
    //   new_list_info.push(info["ListItem"][0]);
    // }
    let res = {
      Group: innovagroup,
      ListItem: new_list_info
    }
    return resolve(res);
  } catch (err) {
    this.logdebug(err);
    return resolve({});
  }
});

}

// getlivedata_list_itemval(innovagroup, ...list: number[]){
//   return new Promise(async resolve =>{
//     try {
//     //  let list_bytes = (new Uint8Array(list)).map(xx=>{return xx})
//       const usbData = [...DataParser.numberToBytes(innovagroup, 1),...list];
//
//       this.logdebug('Checking item support list');
//       const data= await this.LinkVciCmd({
//         Procid: ENUMVCIs.VCIProg.livedata,
//         stateid: ENUMVCIs.VCICmd_livedata.read_itemval,
//         usbData, nretry: 1, timeout:10000
//       });
//       let j = DataParser.bytesToString(data).split('\n').join('-');
//       this.logdebug('item string:'+j);
//       return resolve(JSON.parse(j));
//     }
//     catch(err)
//     {
//       this.logdebug(err);
//       return resolve({});
//     }
//   })
// }
}
