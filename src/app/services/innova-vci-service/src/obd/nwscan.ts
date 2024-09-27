/**
 * @Author: quocdo-macbook
 * @Date:   2020-11-06T22:46:24+07:00
 * @Last modified by:   quocdo-macbook
 * @Last modified time: 2022-01-26T15:03:18+07:00
 */



import { Injectable } from '@angular/core';
import * as ENUMs from './../standard/enums'
import * as ENUMVCIs from './vcistd'
import { OBDx } from './obd'
import * as _ from 'lodash'
import * as OBDUtil from './obdUtils'
import { isNullOrUndefined, isObject } from 'util';
import * as DataParser from './../utilities/dataParser'
import { enumProtocol } from './../standard/enums';
// import * from './../standard/enums';

@Injectable({
    providedIn: 'root'
})

export class NWSCAN extends OBDx {

    async setVinString(VinString) {
        try {
      this.logdebug("Input VIN:" + VinString);
            if (_.isEmpty(VinString) || VinString.length != 0x11) { return false; }
            const usbData = DataParser.stringToBytes(VinString) || []
            await this.LinkVciCmd({
                Procid: ENUMVCIs.VCIProg.systemdata,
                stateid: ENUMVCIs.VCICmd_system.setvin,
                usbData: [0x11, 0x00, ...usbData],
                nretry: 2, timeout: 3000
            });
            return true;
        } catch (err) {
            return false;
        }
    }


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
        // const usbArgs = [ENUMVCIs.VCICmd_system.setymme];
        const usbData = [
            ...DataParser.numberToBytes(512, 2),
            ...DataParser.numberToBytes(0xaa, 1),//1
            ...DataParser.numberToBytes(ymmeprofile.manufacture_enum, 2),
            ...DataParser.numberToBytes(ymmeprofile.year_enum, 2),
            ...DataParser.numberToBytes(ymmeprofile.make_enum, 2),
            ...DataParser.numberToBytes(ymmeprofile.model_enum, 2),
            ...DataParser.numberToBytes(ymmeprofile.trim_enum || 0xffff, 2),
            ...DataParser.numberToBytes(ymmeprofile.option_enum || 0xffff, 2),
            ...DataParser.numberToBytes(ymmeprofile.engine_enum || 0xff, 2),
            ...DataParser.numberToBytes(ymmeprofile.transmission_enum || 0xffff, 2),
        ]
        try {
            const result = await this.LinkVciCmd({
                Procid: ENUMVCIs.VCIProg.systemdata,
                stateid: ENUMVCIs.VCICmd_system.setymme,
                usbData,
                nretry: 1
            });
            const [status] = result;
            return (status === 0xaa)
        } catch (error) {
            return false
        }
    }

    async getYMMEProfile() {
        // const usbArgs = [];
        const usbData = [0, 0]
        try {
            const result = await this.LinkVciCmd({
                Procid: ENUMVCIs.VCIProg.systemdata,
                stateid: ENUMVCIs.VCICmd_system.getymme,
                usbData,
                nretry: 2
            });
            this.logdebug(result)
            return result
        } catch (error) {
            return undefined
        }
    }

    getSupportedOEMModules() {
        return new Promise(async resolve => {
            try {
                //const progID = [0x04, 0x00];
                // const usbArgs = [0x03, 0xee];
                //const usbArgs = [0x03];//Version firmware from .12
                // const usbData = [];
                const modules = [];

                this.logdebug('Reading supported OEM modules');

                const data = await this.LinkVciCmd({
                    Procid: ENUMVCIs.VCIProg.oem,
                    stateid: 3, usbData: [0xee],
                    nretry: 1, timeout: 10000
                });
                const getGroupName = a => {
                    try {
                        return ENUMVCIs.EnumInnovaGroups[a];
                    } catch (ex) {
                        return `Unknown Group : ${a}`;
                    }
                };
                const getInspecGroupName = a => {
                    try {
                        return ENUMVCIs.EnumInspectionGroups[a];
                    } catch (ex) {
                        return `Unknown Group : ${a}`;
                    }
                };
                let temp = DataParser.bytesToString(data);
                //this.logdebug(temp);
                const objSystem = JSON.parse(temp);
        this.logdebug("OEM Modules:" + DataParser.ObjtoStringBeauty(objSystem.data));
                if (_.isObject(objSystem)) {
                    if (objSystem && objSystem.data.length > 0) {

                        objSystem.data.forEach(obj => {
                            //const { System: system, SubSystem: subsystem, ModuleName: modulename, InnovaGroup: group } = obj;

              modules.push({ System: obj[0] as number, SubSystem: obj[1] as number, ModuleName: obj[2] as string, InnovaGroup: obj[3] as number, groupName: getGroupName(obj[3] as number), inspecGroup: getInspecGroupName(obj[4] as number) });
                        });
                        return resolve({ raw: null, data: modules });
                    }
                }

                // parse data to get the list of suppurted system and subsystem
                let index = 0;
                const nSystem = data[index++];
                for (let sysIndex = 0; sysIndex < nSystem; sysIndex++) {
                    const systemId = DataParser.bytesToInt([data[index++], data[index++]], 2, 0);
                    const nSubSystem = data[index++];

                    for (let subIndex = 0; subIndex < nSubSystem; subIndex++) {
                        const LB = data[index++];
                        const HB = data[index++];
                        // const bInnovaGroup = data[index++];
                        const bInnovaGroup = 0xFF;
                        const subSystemId = DataParser.bytesToInt([LB, HB], 2, 0);
                        modules.push({
                            system: systemId,
                            subsystem: subSystemId,
                            innovagroup: bInnovaGroup,
                            groupName: getGroupName(bInnovaGroup),
                        });
                    }
                }

                return resolve({ raw: modules, data: null });
            } catch (err) {
                return resolve({});
            }
        });
    }

  eraseOEMSystem({ system, subSystem }) {
        return new Promise(async resolve => {
            try {
                // const usbArgs = [0x05].concat(DataParser.numberToBytes(system, 2), DataParser.numberToBytes(subSystem, 2));
                const usbData = [...DataParser.numberToBytes(system, 2), ...DataParser.numberToBytes(subSystem, 2)];

                this.logdebug(`Erasing oem module ${system} ${subSystem}`);
                const data = await this.LinkVciCmd({
                    Procid: ENUMVCIs.VCIProg.oem,
                    stateid: ENUMVCIs.VCICmd_nwscan.erasedtcsystem,
                    usbData
                });

        if (data === undefined) {
          return resolve({ Erase_Dtc: "Sent" })
                }
        else {
          return resolve({ Erase_Dtc: "OK" })
                }
      } catch (err) {
                return resolve({});
            }
        })
    }

  async QueryOEMSystem({ system, subSystem }) {
        return new Promise(async resolve => {
            try {
                // const usbArgs = [0x05].concat(DataParser.numberToBytes(system, 2), DataParser.numberToBytes(subSystem, 2));
                const usbData = [...DataParser.numberToBytes(system, 2), ...DataParser.numberToBytes(subSystem, 2)];

                this.logdebug(`query oem module ${system} ${subSystem}`);
                const data = await this.LinkVciCmd({
                    Procid: ENUMVCIs.VCIProg.oem,
                    stateid: ENUMVCIs.VCICmd_nwscan.querysystem,
                    usbData
                });

        if (data === undefined) {
          return resolve({ Status: "Fail" })
                }
        else {
          return resolve({ Status: "OK" })
                }
      } catch (err) {
                return resolve({});
            }
        })
    }

  async ExitOEMSystem({ system, subSystem }) {
        return new Promise(async resolve => {
            try {
                // const usbArgs = [0x05].concat(DataParser.numberToBytes(system, 2), DataParser.numberToBytes(subSystem, 2));
                const usbData = [...DataParser.numberToBytes(system, 2), ...DataParser.numberToBytes(subSystem, 2)];

                this.logdebug(`exit oem module ${system} ${subSystem}`);
                const data = await this.LinkVciCmd({
                    Procid: ENUMVCIs.VCIProg.oem,
                    stateid: ENUMVCIs.VCICmd_nwscan.exitsystem,
                    usbData
                });

        if (data === undefined) {
          return resolve({ Status: "Fail" })
                }
        else {
          return resolve({ Status: "OK" })
                }
      } catch (err) {
                return resolve({});
            }
        })
    }



  async getOEMSystem_quick({ system, subSystem }) {
      return new Promise(async resolve => {
          try {
              // const usbArgs = [0x05].concat(DataParser.numberToBytes(system, 2), DataParser.numberToBytes(subSystem, 2));
              const usbData = [...DataParser.numberToBytes(system, 2), ...DataParser.numberToBytes(subSystem, 2)];
              const modules = [];
        const getInspecGroup = a => {
                  try {
                      return ENUMVCIs.EnumInspectionGroups[a];
                  } catch (ex) {
                      return `Unknown Group : ${a}`;
                  }
              };
              this.logdebug(`Reading oem module ${system} ${subSystem} quickly`);
              const rawbuff = await this.LinkVciCmd({
                  Procid: ENUMVCIs.VCIProg.oem,
                  stateid: ENUMVCIs.VCICmd_nwscan.quick_readsystem,
                  usbData, nretry: 3, timeout: 10000
              });
        if (isNullOrUndefined(rawbuff)) {
                return resolve(null);
              }
              const objSystem = DataParser.readbleToJSON(rawbuff)
              await this.logdebug(objSystem);
        if (_.isObject(objSystem)) {

          if (Object.keys(objSystem).includes("Dtcs")) {
            const { ModuleName: modulename, InspecGroup: inspec_gr, Dtcs, InvalidDTC } = objSystem;
            await Dtcs.forEach(obj => {
              const { 0: DTCCode, 1: type } = obj;
                    modules.push(
                      {
                  code: DTCCode, type: type
                      }
                    )
                  })
                  return resolve({
                      data: {
                          system, subSystem,
                          modulename,
                InspecGroup: getInspecGroup(inspec_gr),
                          Dtcs: modules,
                          IsInvalidDTC: InvalidDTC
                      }
                  });
                }
          else if (Object.keys(objSystem).includes("Status")) {
            const { ModuleName: modulename, Status: status } = objSystem;
                  return resolve({
                      error: {
                          system, subSystem,
                          modulename,
                Status: ENUMVCIs.Enum_Nws_Link_Status[status]
                      }
                  });
                }

              }
              return resolve({ raw: rawbuff })
          } catch (err) {
        this.logdebug(`Reading oem module ${system} ${subSystem}:` + err);
              return resolve({});
          }
      });
    }

  getDtc_listInspecGroup({ system, subSystem, id }) {
      return new Promise(async resolve => {
          try {
              // const usbArgs = [0x05].concat(DataParser.numberToBytes(system, 2), DataParser.numberToBytes(subSystem, 2));

        const usbData = [...DataParser.numberToBytes(system, 2), ...DataParser.numberToBytes(subSystem, 2), ...DataParser.numberToBytes(id, 2)];
              const modules = [];
              this.logdebug(`Getting dtc def ${system} ${subSystem} id: ${id} `);
              const rawbuff = await this.LinkVciCmd({
                  Procid: ENUMVCIs.VCIProg.oem,
                  stateid: ENUMVCIs.VCICmd_nwscan.get_dtc_listinspec,
                  usbData, nretry: 3, timeout: 10000
              });

              const objSystem = DataParser.readbleToJSON(rawbuff)

              //this.logdebug(objSystem);
        if (_.isObject(objSystem)) {
          const { 0: dtc, 1: type, 2: list } = objSystem;
                  this.logdebug('response of getting dtc group' + DataParser.getStringOfObj(objSystem))
                  return resolve({
                      code: dtc,
                      type: type,
                      list: list
                  });
              }

              return resolve({ raw: rawbuff })
          } catch (err) {
              return resolve({});
          }
      });
    }

  getDtcdef_withgroup({ system, subSystem, id, group }) {
      return new Promise(async resolve => {
          try {
              // const usbArgs = [0x05].concat(DataParser.numberToBytes(system, 2), DataParser.numberToBytes(subSystem, 2));
              const groupid = Object.keys(ENUMVCIs.EnumInspectionGroups).find(key => ENUMVCIs.EnumInspectionGroups[key] === group);
        const usbData = [...DataParser.numberToBytes(system, 2), ...DataParser.numberToBytes(subSystem, 2), ...DataParser.numberToBytes(id, 2), ...DataParser.numberToBytes(groupid, 1)];
              const modules = [];
              this.logdebug(`Getting dtc def ${system} ${subSystem} id: ${id} group: ${group} `);
              const rawbuff = await this.LinkVciCmd({
                  Procid: ENUMVCIs.VCIProg.oem,
                  stateid: ENUMVCIs.VCICmd_nwscan.get_dtc_def,
                  usbData, nretry: 3, timeout: 5000
              });

              const objSystem = DataParser.readbleToJSON(rawbuff)
              //this.logdebug(objSystem);
        if (_.isObject(objSystem)) {
          const { 0: dtc, 1: type, 2: def } = objSystem;

                  return resolve({
                      code: dtc,
                      type: type,
            def: def
                  });
              }

              return resolve({ raw: rawbuff })
          } catch (err) {
              return resolve({});
          }
      });
    }

  getDtcdef({ system, subSystem, id }) {
      return new Promise(async resolve => {
          try {
              // const usbArgs = [0x05].concat(DataParser.numberToBytes(system, 2), DataParser.numberToBytes(subSystem, 2));
        const usbData = [...DataParser.numberToBytes(system, 2), ...DataParser.numberToBytes(subSystem, 2), ...DataParser.numberToBytes(id, 2), ...DataParser.numberToBytes(255, 1)];
              const modules = [];
              this.logdebug(`Getting dtc def ${system} ${subSystem} id: ${id} `);
              const rawbuff = await this.LinkVciCmd({
                  Procid: ENUMVCIs.VCIProg.oem,
                  stateid: ENUMVCIs.VCICmd_nwscan.get_dtc_def,
                  usbData, nretry: 3, timeout: 5000
              });

              const objSystem = DataParser.readbleToJSON(rawbuff)
              //this.logdebug(objSystem);
        if (_.isObject(objSystem)) {
          const { 0: dtc, 1: type, 2: def } = objSystem;

                  return resolve({
                      code: dtc,
                      type: type,
            def: def
                  });
              }

              return resolve({ raw: rawbuff })
          } catch (err) {
              this.logdebug('Get def issue')
              return resolve({});
          }
      });
    }
  getOEMSystem({ system, subSystem }) {
        return new Promise(async resolve => {
            try {
                // const usbArgs = [0x05].concat(DataParser.numberToBytes(system, 2), DataParser.numberToBytes(subSystem, 2));
                const usbData = [...DataParser.numberToBytes(system, 2), ...DataParser.numberToBytes(subSystem, 2)];
                const modules = [];
                this.logdebug(`Reading oem module ${system} ${subSystem}`);
                const rawbuff = await this.LinkVciCmd({
                    Procid: ENUMVCIs.VCIProg.oem,
                    stateid: ENUMVCIs.VCICmd_nwscan.readdtsystem,
                    usbData, nretry: 1, timeout: 20000
                });

                const objSystem = DataParser.readbleToJSON(rawbuff)
                this.logdebug(objSystem);
        if (_.isObject(objSystem)) {
                    const { System: system, SubSystem: subsystem, ModuleName: modulename, Dtcs, InvalidDTC, BodyInfo } = objSystem;
                    objSystem.Dtcs.forEach(obj => {
            const { 0: DTCCode, 1: type, 2: def } = obj;
                        modules.push(
                            {
                code: DTCCode, type: type, definition: def
                            }
                        )
                    })
                    return resolve({
                        data: {
                            system, subsystem,
                            modulename,
                            Dtcs: modules,
                            InvalidDTC: !!InvalidDTC
                        }
                    });
                }

                /*
                if (_.isObject(objSystem)) {
                    const { System: system, SubSystem: subsystem, ModuleName: modulename, Dtcs, InvalidDTC, BodyInfo } = objSystem;
                    let MapInfo = BodyInfo
                    if (BodyInfo) {
                        MapInfo = BodyInfo.sort((x, y) => {
                            try {
                                return x.Option - y.Option
                            } catch (err) {
                                return 0
                            }
                        }).map(optionx => {
                            const dtcMap = (optionx.Dtcs || []).map(r => {
                                return {
                                    ...r,
                                    definition: _.get(r, 'def'),
                                };
                            })
                            return {
                                ...optionx,
                                Dtcs: dtcMap
                            }
                        })
                    }
                    const mapDtcs = (Dtcs || []).map(r => {
                        return {
                            ...r,
                            definition: _.get(r, 'def'),
                        };
                    });
                    return resolve({
                        data: {
                            system, subsystem,
                            modulename,
                            Dtcs: mapDtcs,
                            InvalidDTC: !!InvalidDTC,
                            BodyInfo: MapInfo
                        }
                    });
                }*/

                return resolve({ raw: rawbuff })
            } catch (err) {
                return resolve({});
            }
        });
    }

    configJsonReport(isEnable = true) {
        return new Promise(async resolve => {
            const usbArgs = [0x00];
            const usbData = [];
            try {
                await this.LinkVciCmd(
                    {
                        Procid: (isEnable ? ENUMVCIs.VCIProg.enable_jsonfmt : ENUMVCIs.VCIProg.disable_jsonfmt),
                        stateid: 0,
                        usbData,
                        nretry: 1
                    }
                );
                return resolve(true);
            } catch (error) {
                console.log(error);
                return resolve(false);
            }
        });
    }

    async configJsonDTCDef(isEnable = true) {
        try {
            const usbArgs = [0x00];
            const usbData = [];
            return await this.LinkVciCmd(
                {
                    Procid: (isEnable ? ENUMVCIs.VCIProg.enable_jsonfmt_def : ENUMVCIs.VCIProg.disable_jsonfmt_def),
                    stateid: 0,
                    usbData,
                    nretry: 1
                }
            );
        } catch (err) {
            return false;
        }
    }
  getInnovaGroupDtc(group: ENUMs.enumInnovagroup) {
        return new Promise(async resolve => {
            try {
                const usbData = [...DataParser.numberToBytes(group, 1)];
                const getGroupName = a => {
                    try {
                        return ENUMVCIs.EnumInnovaGroups[a];
                    } catch (ex) {
                        return `Unknown Group : ${a}`;
                    }
                };
                this.logdebug('Reading dtc of ' + getGroupName(group));
        const data = await this.LinkVciCmd({
                    Procid: ENUMVCIs.VCIProg.oem,
                    stateid: ENUMVCIs.VCICmd_nwscan.readdtcgroup,
                    usbData,
                    nretry: 2, timeout: 3000
                });
                return resolve(DataParser.bytesToString(data));
      } catch (err) {
                this.logdebug(err);
                return resolve({});
            }
        })
    }
    parser(data) {
        this.logdebug(data)
    }


}

export { enumProtocol }
