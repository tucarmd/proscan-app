/**
 * @Author: quocdo-macbook
 * @Date:   2020-11-06T22:46:24+07:00
 * @Last modified by:   quocdo-macbook
 * @Last modified time: 2021-03-13T08:39:56+07:00
 */



import { Injectable } from '@angular/core';
import * as ENUMVCIs from './vcistd'
import { OBDx } from './obd'
import * as _ from 'lodash'
import * as DataParser from './../utilities/dataParser'
import { isNullOrUndefined } from 'util';


// import * from './../standard/enums';

@Injectable({
    providedIn: 'root'
})

export class OFM extends OBDx {
    public async ofm_getodometer_pidsupport() { return await this.getofmsupportitem(ENUMVCIs.VCI_ofm_group.ofm_group_odo); }
    public async ofm_gettpms_pidsupport() { return await this.getofmsupportitem(ENUMVCIs.VCI_ofm_group.ofm_group_tpms); }
    public async ofm_getwarninglight_pidsupport() { return await this.getofmsupportitem(ENUMVCIs.VCI_ofm_group.ofm_group_warninglight); }
    public async ofm_getservicecheck_pidsupport() { return await this.getofmsupportitem(ENUMVCIs.VCI_ofm_group.ofm_group_srv_check); }

    async gettpmspid_val(){return new Promise(async resolve =>{
        try {

            this.logdebug('Reading TPMS PID Items...');
            const data = await this.getofmsupportitem(ENUMVCIs.VCI_ofm_group.ofm_group_tpms);
            this.logdebug('Reading TPMS PID Items successfully...');
            let resultdisplay = DataParser.ObjtoStringBeauty(data)
            var obj = JSON.parse(resultdisplay);
            //this.logdebug(resultdisplay);
            if(_.isObject(obj))
            {
            const nPid = obj.num_profile as number;
            //this.logdebug("number pid:" + nPid);
            const modules = [];
            const modules_val = [];
            for (let pididx = 0; pididx < nPid; pididx++) {
                const profileid = obj.list[pididx].profileid as number;
                const ofm_item = obj.list[pididx].ofm_item as number;
                //this.logdebug("ofm_item"+ ofm_item);
                //this.logdebug("profileid"+ profileid);
                //this.logdebug('Reading ofm profile ' + profileid.toString());
                modules.push({
                    profileid: profileid , ofm_item: ofm_item
                });
                const profile_data = await this.getofmprofileid_value(profileid);
                //this.logdebug(profile_data);
                var obj_temp = JSON.parse(profile_data as string);
                  if(_.isObject(obj_temp))
                  {
                modules_val.push({ofm_item:ENUMVCIs.Enum_ofm_Items[ofm_item], pid:obj_temp.itemid, Value:obj_temp.value, Unit:obj_temp.unit});
                  }


            }
            //this.logdebug(j);
            this.logdebug({ num_profie:nPid ,list: modules});
            //return resolve({ num_profie:nPid ,list: modules});
            return resolve(modules_val);
            }
            else
            {
              return resolve(null);
            }

        } catch (err) {
            this.logdebug(err);
            return resolve({});
        }
    });

}

    async getodogroup_val(){return new Promise(async resolve =>{
        try {

            this.logdebug('Reading Odometer Items...');
            const data = await this.getofmsupportitem(ENUMVCIs.VCI_ofm_group.ofm_group_odo);
            this.logdebug('Reading Odometer Items successfully...');
            let resultdisplay = DataParser.ObjtoStringBeauty(data)
            var obj = JSON.parse(resultdisplay);
            //this.logdebug(resultdisplay);
            if(_.isObject(obj))
            {
            const nPid = obj.num_profile as number;
            //this.logdebug("number pid:" + nPid);
            const modules = [];
            const modules_val = [];
            for (let pididx = 0; pididx < nPid; pididx++) {
                const profileid = obj.list[pididx].profileid as number;
                const ofm_item = obj.list[pididx].ofm_item as number;
                //this.logdebug("ofm_item"+ ofm_item);
                //this.logdebug("profileid"+ profileid);
                //this.logdebug('Reading ofm profile ' + profileid.toString());
                modules.push({
                    profileid: profileid , ofm_item: ofm_item
                });
                const profile_data = await this.getofmprofileid_value(profileid);
                //this.logdebug(profile_data);
                var obj_temp = JSON.parse(profile_data as string);
                  if(_.isObject(obj_temp))
                  {
                modules_val.push({ofm_item:ENUMVCIs.Enum_ofm_Items[ofm_item], pid:obj_temp.itemid, Value:obj_temp.value, Unit:obj_temp.unit});
                  }

            }
            //this.logdebug(j);
            this.logdebug({ num_profie:nPid ,list: modules});
            //return resolve({ num_profie:nPid ,list: modules});
            return resolve(modules_val);
            }
            else
            {
              return resolve(null);
            }

        } catch (err) {
            this.logdebug(err);
            return resolve({});
        }
    });

}

async getwarninglight_val(){return new Promise(async resolve =>{
    try {
        this.logdebug('Reading warning light status...');
        const data = await this.getofmsupportitem(ENUMVCIs.VCI_ofm_group.ofm_group_warninglight);
        this.logdebug('Reading warning light status successfully...');
        let resultdisplay = DataParser.ObjtoStringBeauty(data)
        var obj = JSON.parse(resultdisplay);
        //this.logdebug(resultdisplay);
        if(_.isObject(obj))
        {
        const nPid = obj.num_profile as number;
        //this.logdebug("number pid:" + nPid);
        const modules = [];
        const modules_val = [];
        for (let pididx = 0; pididx < nPid; pididx++) {
            const profileid = obj.list[pididx].profileid as number;
            const ofm_item = obj.list[pididx].ofm_item as number;
            //this.logdebug("ofm_item"+ ofm_item);
            //this.logdebug("profileid"+ profileid);
            //this.logdebug('Reading ofm profile ' + profileid.toString());
            modules.push({
                profileid: profileid , ofm_item: ofm_item
            });
            const profile_data = await this.getofmprofileid_value(profileid);
            //this.logdebug(profile_data);
            var obj_temp = JSON.parse(profile_data as string);
              if(_.isObject(obj_temp))
              {
            modules_val.push({ofm_item:ENUMVCIs.Enum_ofm_Items[ofm_item], pid:obj_temp.itemid, Value:obj_temp.value, Unit:obj_temp.unit});
              }


        }
        this.logdebug({ num_profie:nPid ,list: modules});
        //return resolve({ num_profie:nPid ,list: modules});
        return resolve(modules_val);
        }
        else
        {
          return resolve(null);
        }

    } catch (err) {
        this.logdebug(err);
        return resolve({});
    }
});

}
async getservicecheck_val(){return new Promise(async resolve =>{
    try {

        this.logdebug('Reading Service Check Items...');
        const data = await this.getofmsupportitem(ENUMVCIs.VCI_ofm_group.ofm_group_srv_check);
        this.logdebug('Reading Service Check Items status successfully...');
        let resultdisplay = DataParser.ObjtoStringBeauty(data)
        var obj = JSON.parse(resultdisplay);
        if(_.isObject(obj))
        {
        //this.logdebug(resultdisplay);
        const nPid = obj.num_profile as number;
        //this.logdebug("number pid:" + nPid);
        const modules = [];
        const modules_val = [];
        for (let pididx = 0; pididx < nPid; pididx++) {
            const profileid = obj.list[pididx].profileid as number;
            const ofm_item = obj.list[pididx].ofm_item as number;
            //this.logdebug("ofm_item"+ ofm_item);
            //this.logdebug("profileid"+ profileid);
            //this.logdebug('Reading ofm profile ' + profileid.toString());
            modules.push({
                profileid: profileid , ofm_item: ofm_item
            });
            const profile_data = await this.getofmprofileid_value(profileid);
            //this.logdebug(profile_data);
            var obj_temp = JSON.parse(profile_data as string);
              if(_.isObject(obj_temp))
              {
            modules_val.push({ofm_item:ENUMVCIs.Enum_ofm_Items[ofm_item], pid:obj_temp.itemid, Value:obj_temp.value, Unit:obj_temp.unit});
              }


        }
        this.logdebug({ num_profie:nPid ,list: modules});
        //return resolve({ num_profie:nPid ,list: modules});
        return resolve(modules_val);
        }
        else
        {
          return resolve(null);
        }

    } catch (err) {
        this.logdebug(err);
        return resolve({});
    }
});
}
async getofmsupportitem(ofm_group) {return new Promise(async resolve =>{
    try {
        const usbData = [...DataParser.numberToBytes(ofm_group, 1)];
        const mod = [];
        this.logdebug('Checking ofm item support '+ofm_group);
        const data= await this.LinkVciCmd({
            Procid: ENUMVCIs.VCIProg.ofm,
            stateid: ENUMVCIs.VCICmd_ofm.getsupport_item,
            usbData, nretry: 1, timeout:30000
        });
        //this.logdebug(data);
        // if(_.isNullOrUndefined(data))
        // {
        //   return resolve(null);
        // }
        if(data!=undefined)
        {
        let index = 0;
        const nPid = data[index++];
        this.logdebug("number PID:"+ nPid);
        for (let pididx = 0; pididx < nPid; pididx++) {
            const profileid = DataParser.bytesToInt([data[index++], data[index++]], 2, 0);
            const ofm_item = DataParser.bytesToInt([data[index++], data[index++]], 2, 0);
            //this.logdebug("ofm_item"+ ofm_item);
            //this.logdebug("profileid"+ profileid);
            mod.push({
                ofm_item: ofm_item, profileid: profileid
            });
        }
        //this.logdebug(mod);

        return resolve({ num_profile:nPid ,list: mod});
        }
        else
        {
          return resolve({ num_profile:0 ,list: []});
        }

    } catch (err) {
        this.logdebug(err);
        return resolve(null); // changed by ngoclb
    }
});

}

async getofmprofileid_value(profileid){
    return new Promise(async resolve => {
        try{
            const usbData = [...DataParser.numberToBytes(profileid, 2)];
            const modules = [];
            let j= {};
            this.logdebug('Reading ofm profile ' + profileid.toString());
            const data= await this.LinkVciCmd({
                Procid: ENUMVCIs.VCIProg.ofm,
                stateid: ENUMVCIs.VCICmd_ofm.read_item,
                usbData, nretry: 3, timeout:10000
            });
            if(isNullOrUndefined(data))
            {
                j= {pid:profileid, value:"N/S", unit:"null"}
            }
            else
            {
                j= JSON.parse(DataParser.bytesToString(data) as string);
            }

            //this.logdebug("read" + j);
            return resolve(j);
        }
        catch(err)
        {
            this.logdebug(err);
            return resolve({});
        }
    });
}
}
