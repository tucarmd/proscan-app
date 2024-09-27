import { Injectable } from '@angular/core';
import * as ENUMs from '../standard/enums'
import * as ENUMVCIs from './vcistd'
import { OBDx } from './obd'
import * as _ from 'lodash'
import * as OBDUtil from './obdUtils'
import { isNullOrUndefined, isObject } from 'util';
import * as DataParser from '../utilities/dataParser'
import { enumProtocol } from '../standard/enums';
import { Languages, Metrics, TransferStatus, VehicleDataTypes, BufferSegmentTypes, FreezeFrameDataTypes } from './vcistd'

@Injectable({
    providedIn: 'root'
})

export class OBD2FF extends OBDx {
    theFFBuffer = [];
    theFFBufferDTC = null;
    theFFBufferItemName = [];
    theFFBufferUnit = [];
    itemFFValuesBuffer = []
    bNoRecordedItem = 0
    buffer = {}
    transferStatus = null


    formatBuffer(name, type, buffer) {
        const bufferType = [type];
        const segmentType = DataParser.numberToBytes(BufferSegmentTypes[name], 2);
        const bufferLength = DataParser.numberToBytes(buffer.length, 4);
        return [...bufferType, ...segmentType, ...bufferLength, ...buffer];
    }
    appendBuffer(name, data, type = 0) {
        const buff = this.buffer[name] || [];
        let formatedBuffer = this.formatBuffer(name, type, data);
        this.buffer[name] = buff.concat(formatedBuffer);
    }

    getFFDataCommand(itemType, pkgIndex = null, language = Languages.ENGLISH, unit = Metrics.USA) {
        const iCommand = [100, 0, 0, 0];
        const iReportId = [0, 0, 0, 0];
        const iVehicleIndex = [0];
        const reserved = [0];

        const dataType = VehicleDataTypes.OBD2_FF_SID2_BUFF;
        const enumDataType = [dataType];
        const dataBufferIndex = [0];
        const enumItemType = [_.get(FreezeFrameDataTypes, itemType, 1)];
        let params, iSize;

        params = [0, 0, 0, 0];
        if (language !== undefined) params.push(language);
        if (unit !== undefined) params.push(unit);

        // package index
        if (pkgIndex !== null) {
            iSize = [pkgIndex, 0, 0, 0];
        } else {
            iSize = DataParser.numberToBytes(params.length, 4).reverse();
        }

        let data = [].concat(iReportId, iCommand, iVehicleIndex, enumDataType, dataBufferIndex, enumItemType, iSize, params);

        return {
            dataType,
            bufferIndex: 0,
            params,
            data,
        };
    }

    getUsbCommand(dataType, bufferIndex = 0, params = []) {

        const iCommand = [100, 0, 0, 0];
        const iReportId = [0, 0, 0, 0];
        const iVehicleIndex = [0];
        const reserved = [0];

        const enumDataType = [_.get(VehicleDataTypes, dataType, 1)];
        const dataBufferIndex = [bufferIndex];
        const iSize = DataParser.numberToBytes(params.length, 4).reverse();
        const data = [].concat(iReportId, iCommand, iVehicleIndex, enumDataType, dataBufferIndex, reserved, iSize, params);
        return {
            dataType,
            bufferIndex,
            params,
            data,
        };
    }

    public getFFBuffer(language = Languages.ENGLISH, unit = Metrics.USA) {
        return new Promise(async resolve => {
            this.logdebug('Getting freezeframe');

            this.theFFBuffer = [];
            this.theFFBufferDTC = null;
            this.theFFBufferItemName = [];
            this.theFFBufferUnit = [];

            const retData = { data: null, raw: null };
            let isNeedCheckFF = true

            if (isNeedCheckFF && !await this.getFFHeader(language, unit)) isNeedCheckFF = false

            if (isNeedCheckFF && !await this.getFFDTC(language, unit)) isNeedCheckFF = false

            if (isNeedCheckFF && !await this.getFFItemNames(language, unit)) isNeedCheckFF = false

            if (isNeedCheckFF && !await this.getFFItemUnits(language, unit)) isNeedCheckFF = false

            this.itemFFValuesBuffer = [];
            if (isNeedCheckFF && !await this.getFFItemValues(language, unit)) isNeedCheckFF = false

            const parseItemFF = (datas, lensize = 1) => {
                //LEN
                const retdata = [];
                for (let i = 0; i < datas.length;) {
                    if (retdata.length >= this.bNoRecordedItem) break;
                    const j = DataParser.arrayToNumber(datas.slice(i), lensize, false); //datas[i++];
                    i += lensize;
                    if (j > 0) retdata.push(datas.slice(i, i + j));
                    else retdata.push(null);
                    i += j;
                }
                return retdata;
            };

            const parseFreezeFrameData = () => {
                const retdatas = [];
                try {
                    const listItemNames = parseItemFF(this.theFFBufferItemName, 2);


                    const listItemValues = parseItemFF(this.itemFFValuesBuffer, 1);


                    const listItemUnits = parseItemFF(this.theFFBufferUnit, 1);


                    for (let j = 0; j < this.bNoRecordedItem; j++) {
                        retdatas.push({
                            name: DataParser.getStringOfObj(listItemNames[j]),
                            value: DataParser.getStringOfObj(listItemValues[j]),
                            unit: DataParser.getStringOfObj(listItemUnits[j]) || '',
                        });
                    }

                    return retdatas;
                } catch (exception) {
                    this.logdebug(exception);
                    return null;
                }
            };

            retData.data = {
                dtc: { code: DataParser.getStringOfObj(this.theFFBufferDTC), definition: null },
                datas: parseFreezeFrameData(),
            };

            this.parseFFItemValues();
            // await this.getLDRecordTime(language, unit);
            this.appendBuffer('FREEZE_FRAME', this.theFFBuffer);

            return resolve(retData);
        });
    }


    async getFFDTC(language = Languages.ENGLISH, unit = Metrics.USA) {
        const command = this.getFFDataCommand('DTC_INFO', null, language, unit);
        let theBuffer = [];
        try {
            this.logdebug('FreezeFrame Get DTC');
            // const result = await this.executor.execAsync({ ...commands.getVehicleV5Data, data: command.data });
            const { data } = await this.Link({
                id: 0x80,
                data: command.data
            })
            const result = data
            this.logdebug(`resule : ${JSON.stringify(result)}`);
            // parse result
            if (!_.isEmpty(result)) {
                let milDtcLen = result[0];
                theBuffer = theBuffer.concat(_.slice(result, 0, milDtcLen + 1));

                this.logdebug('FreezeFrame ' + JSON.stringify(result));

            } else {
                theBuffer.push(0);
                this.logdebug('FreezeFrame : ' + 'NO DTC FF');
            }
        } catch (error) {
            // no FF DTC
            theBuffer.push(0);
        }
        this.theFFBufferDTC = theBuffer;
        this.theFFBuffer = this.theFFBuffer.concat(theBuffer);

        return Promise.resolve(theBuffer.length > 0);
    }


    async getFFHeader(language = Languages.ENGLISH, unit = Metrics.USA) {
        const command = this.getFFDataCommand('LD_HEADER', null);
        try {
            this.logdebug('FreezeFrame getFFHeader');
            // const result = await this.executor.execAsync({ ...commands.getVehicleV5Data, data: command.data });
            const { data } = await this.Link({
                id: 0x80,
                data: command.data
            })
            const result = data
            // parse result
            this.bNoRecordedItem = result[5];
            this.logdebug('FreezeFrame : Number recorded: ' + this.bNoRecordedItem);
            // number of items (2 bytes)
            this.theFFBuffer = this.theFFBuffer.concat([this.bNoRecordedItem, 0]);

            // return Promise.resolve(true);
            //Hung vo update to ensure number record > 0
            return Promise.resolve(this.bNoRecordedItem > 0)
        } catch (error) {
            //throw error;
            this.logdebug('FreezeFrame' + JSON.stringify(error));

            return Promise.resolve(false);
        }
    }


    async getFFItemNames(language = Languages.ENGLISH, unit = Metrics.USA, pkgIndex = 0) {
        const command = this.getFFDataCommand('LD_ITEM_NAME_STRING', pkgIndex, language, unit);

        this.logdebug('FreezeFrame getFFItemNames :' + `packageIndex ${pkgIndex}`);

        // const result = await this.executor.execAsync({ ...commands.getVehicleV5Data, data: command.data });
        const { data } = await this.Link({
            id: 0x80,
            data: command.data
        })
        const result = data
        this.logdebug('FreezeFrame getFFItemNames' + `length of response ${result ? result.length : 0}`);

        if (result && result.length === 512) {
            // parse result
            this.transferStatus = result.length === 512 ? result[510] : TransferStatus.COMPLETED;
            //names is as [len1 (2 bytes), name1, len2 (2 bytes), name2, ...]
            //since some last bytes of the buffer with 512 bytes may not use, so we only add meaningful data to the final buffer
            let namesBufferIndex = 0;
            for (let i = 0; i < this.bNoRecordedItem; i++) {
                const itemNameBytes = [result[namesBufferIndex++], result[namesBufferIndex++]];
                let itemNameLen = DataParser.bytesToInt(itemNameBytes, 2, 0);
                let itemNameArr = _.slice(result, namesBufferIndex, namesBufferIndex + itemNameLen);
                namesBufferIndex = namesBufferIndex + itemNameLen;

                this.theFFBufferItemName = this.theFFBufferItemName.concat(itemNameBytes, itemNameArr);
                this.theFFBuffer = this.theFFBuffer.concat(itemNameBytes, itemNameArr);
            }

            if (this.transferStatus === TransferStatus.TRANSFERRING) {
                // more packages are still pending, keep request for data
                await this.getFFItemNames(language, unit, pkgIndex + 1);
            }
            return Promise.resolve(this.transferStatus === TransferStatus.COMPLETED);
        }

        return Promise.resolve(false);
    }


    async getFFItemUnits(language = Languages.ENGLISH, unit = Metrics.USA, pkgIndex = 0) {
        return new Promise(async resolve => {
            const command = this.getFFDataCommand('LD_ITEM_UNIT_STRING', pkgIndex, language, unit);
            this.logdebug('FreezeFrame getFFItemUnits : ' + `packageIndex ${pkgIndex}`);
            // const result = await this.executor.execAsync({ ...commands.getVehicleV5Data, data: command.data });
            const { data } = await this.Link({
                id: 0x80,
                data: command.data
            })
            const result = data
            this.logdebug('FreezeFrame getFFItemUnits : ' + `length of response ${result ? result.length : 0}`);
            if (result && result.length === 512) {
                // parse result
                this.transferStatus = result.length === 512 ? result[510] : TransferStatus.COMPLETED;
                //names is as [len1 (1 byte), unit1, len2 (1 byte), unit2, ...]
                //since some last bytes of the buffer with 512 bytes may not use, so we only add meaningful data to the final buffer
                let unitsBufferIndex = 0;
                for (let i = 0; i < this.bNoRecordedItem; i++) {
                    const itemUnitBytes = [result[unitsBufferIndex]];
                    let itemUnitLen = result[unitsBufferIndex++];

                    let itemUnitArr = _.slice(result, unitsBufferIndex, unitsBufferIndex + itemUnitLen);
                    unitsBufferIndex = unitsBufferIndex + itemUnitLen;

                    this.theFFBufferUnit = this.theFFBufferUnit.concat(itemUnitBytes, itemUnitArr);

                    this.theFFBuffer = this.theFFBuffer.concat(itemUnitBytes, itemUnitArr);
                }

                if (this.transferStatus === TransferStatus.TRANSFERRING) {
                    // more packages are still pending, keep request for data
                    await this.getFFItemUnits(language, unit, pkgIndex + 1);
                }

                return resolve(this.transferStatus === TransferStatus.COMPLETED);
            }
            return resolve(false);
        });
    }


    async getFFItemValues(language = Languages.ENGLISH, unit = Metrics.USA, pkgIndex = 0) {
        const command = this.getFFDataCommand('LD_ITEM_VALUE_STRING', pkgIndex, language, unit);

        this.logdebug('FreezeFrame getFFItemValues ' + `packageIndex ${pkgIndex}`);

        // let result = await this.executor.execAsync({ ...commands.getVehicleV5Data, data: command.data });
        const { data } = await this.Link({
            id: 0x80,
            data: command.data
        })
        let result = data

        this.logdebug('FreezeFrame getFFItemValues ' + `length of response ${result ? result.length : 0}`);
        if (result && result.length === 512) {
            // parse result
            this.transferStatus = result.length === 512 ? result[510] : TransferStatus.COMPLETED;
            result = _.take(result, result.length - 2);

            this.itemFFValuesBuffer = this.itemFFValuesBuffer.concat(result);

            if (this.transferStatus === TransferStatus.TRANSFERRING) {
                // more packages are still pending, keep request for data
                await this.getFFItemValues(language, unit, pkgIndex + 1);
            }
            return Promise.resolve(this.transferStatus === TransferStatus.COMPLETED);
        }
        return Promise.resolve(false);
    }


    parseFFItemValues() {
        let valuesBuffer = this.itemFFValuesBuffer;
        if (valuesBuffer.length > 0) {
            let valuesBufferIndex = 0;
            let theBuffer = [];
            let itemValueIndex = 0;

            for (let i = 0; i < this.bNoRecordedItem; i++) {
                const itemValueBytes = [valuesBuffer[itemValueIndex++], valuesBuffer[itemValueIndex++]];
                let itemValueLen = DataParser.bytesToInt(itemValueBytes, 2, 0);
                let itemValueArr = _.slice(valuesBuffer, itemValueIndex, itemValueIndex + itemValueLen);

                itemValueIndex = itemValueIndex + itemValueLen;

                theBuffer = theBuffer.concat(itemValueBytes, itemValueArr);
            }
            this.theFFBuffer = this.theFFBuffer.concat(theBuffer);
        }
    }


}