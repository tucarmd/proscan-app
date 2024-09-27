/*
 * Created by Truyen Nguyen.
 * Email: truyenn@carmd.com.
 * Date: 7/17/2018 (m/d/y).
 * Time: 11:0:34.
 * Copyright (c) 2018, CARMD.COM CORP, (http://carmd.com). All rights reserved.
 */

import { Injectable } from '@angular/core';
import { BLEResponse, BLEEnum } from './innova-device-models';
import { InnovaHelper } from "./innova-helper";

@Injectable()
export class InnovaDeviceHelper {

    static buildRequest4BytesData(command: number, len: number): ArrayBufferLike {
        let data = new Uint8Array(4);
        data[0] = 0xAD;
        data[1] = command;
        data[2] = len;
        data[3] = this.calculateChecksum(data, 3);
        return data.buffer;
    }

    static buildVCIBufferCommand = function (subCommand: Array<number>): ArrayBufferLike {
        //ad800b040000006500000003000300
        let data = new Uint8Array(15);
        data[0] = BLEEnum.Header.Request;
        data[1] = BLEEnum.CommandId.VCI;
        data[2] = 0x0b;
        data[3] = 0x04;
        data[4] = 0x00;
        data[5] = 0x00;
        data[6] = 0x00;
        data[7] = 0x65;
        data[8] = 0x00;
        data[9] = 0x00;
        data[10] = 0x00;
        data[11] = subCommand[0];
        data[12] = 0x00;
        data[13] = subCommand[1];
        data[14] = InnovaDeviceHelper.calculateChecksum(data, 14);
        return data.buffer;
    };

    static buildGetWholeBufferCommand = function (subCommand: Array<number>, len, checksum, dataPayloadBuffer): ArrayBufferLike {
        //ad800b040000006500000003000300
        var data = new Uint8Array(len + 4);
        data[0] = BLEEnum.Header.Request;
        data[1] = BLEEnum.CommandId.VCI;
        data[2] = len;
        data[3] = 0x00;
        data[4] = 0x00;
        data[5] = 0x00;
        data[6] = 0x00;
        data[7] = 0x64;
        data[8] = 0x00;
        data[9] = 0x00;
        data[10] = 0x00;
        data[11] = 0x00;
        data[12] = subCommand[0];
        data[13] = subCommand[1];
        if (!dataPayloadBuffer) {
            data[14] = 0x00;
            data[15] = 0x00;
            data[16] = 0x00;
            data[17] = 0x00;
            data[18] = 0x00;
        } else {
            for (var i = 0; i < dataPayloadBuffer.length; i++) {
                data[13 + i] = dataPayloadBuffer[i];
            }
        }
        data[data.length - 1] = checksum;
        return data.buffer;
    };

    static buildRequestCommandRaw = function (command, len, data): ArrayBufferLike {
        let requestData = new Uint8Array(1 + 1 + 1 + data.length + 1);
        requestData[0] = BLEEnum.Header.Request;
        requestData[1] = command;
        requestData[2] = len;
        for (let i = 0; i < data.length; i++) {
            requestData[i + 3] = data[i];
        }
        requestData[3 + data.length] = InnovaDeviceHelper.calculateChecksum(requestData, requestData.length - 1);
        return requestData.buffer;
    };

    static calculateChecksum(buffer, length) {
        let total = 0;
        for (let i = 0; i < length; i++) {
            total += buffer[i];
        }
        return total % 256;
    }

    static getDataBufferBody = (dataBuffer: Uint8Array): Uint8Array => {
        if (!dataBuffer || dataBuffer.length < 5) return null;
        return dataBuffer.subarray(4, dataBuffer.length - 1);
    };

    static getVCIDataBufferBody = (dataBuffer: Uint8Array): Uint8Array => {
        if (!dataBuffer) return null;
        return dataBuffer.subarray(9, dataBuffer.length - 1);
    };

    static parseResponseData(buffer, commandId) {
        if (!buffer) {
            return null;
        }

        let responseData = new BLEResponse();
        responseData.buffer = new Uint8Array(buffer);

        if (!responseData.buffer || responseData.buffer.length == 0) {
            return null;
        }

        responseData.header = responseData.buffer[0];
        if (responseData.header == BLEEnum.Header.PositiveResponse) {
            if (responseData.buffer.length > 4) {
                responseData.commandId = responseData.buffer[1] - 1;

                if (responseData.commandId == commandId) {
                    responseData.length = InnovaHelper.convertBytesToInt(responseData.buffer[2], responseData.buffer[3]) + 5;
                }
                responseData.statusCode = responseData.buffer[4];
            }
        }
        if (responseData.header == BLEEnum.Header.NegativeResponse) {
            //ddc302000000a2 is BUSY
            if (responseData.buffer[1] == BLEEnum.RequestStatus.BusyOrProcessing) {
                responseData.statusCode = BLEEnum.RequestStatus.BusyOrProcessing;
            } else {
                if (responseData.buffer.length > 4) {
                    responseData.commandId = responseData.buffer[1] - 1;
                    responseData.statusCode = responseData.buffer[4];
                    responseData.errorCode = responseData.buffer[5];
                }
            }
        }
        return responseData;
    }

    static parsePidListData(arrayBuffer) {
        if (!arrayBuffer) {
            return null;
        }
        let pidList = [];
        for (let i = 0; i < arrayBuffer.length; i++) {
            pidList[i] = arrayBuffer[i];
        }
        return pidList;
    }

    static parsePidData(arrayBuffer) {
        if (!arrayBuffer || arrayBuffer.length < 6) {
            return null;
        }
        let length = InnovaHelper.convertBytesToInt(arrayBuffer[2], arrayBuffer[3]);
        let pidData = new Uint8Array(length);
        for (let i = 0; i < length; i++) {
            pidData[i] = arrayBuffer[i + 4];
        }
        //this.logger.debug("Length: " + length);
        //this.logger.debug("pid: " + pidData[1], "-  value: " + pidData[2]);
        return {
            pid: pidData[1],
            value: pidData[2]
        };
    }



    static getErrorMessage(errorCode) {
        switch (errorCode) {
            case BLEEnum.ErrorCode.NO_PROTOCOL:
                return "No Protocol - query fail";
            case BLEEnum.ErrorCode.NO_VEHICLE_DATA:
                return "Request without correct response from vehicle";
            case BLEEnum.ErrorCode.INVALID_PARAMETER:
                return "Parameter is not matched with spec";
            case BLEEnum.ErrorCode.MSG_NOT_SUPPORTED:
                return "Message is not supported";
            case BLEEnum.ErrorCode.GENERAL:
                return "This value indicate general error";
            case BLEEnum.ErrorCode.PROCESS_NOT_READY:
                return "Inform this process is not ready , need to retry in next time example retry in 100ms";
            case BLEEnum.ErrorCode.UPGRADE_WRITE_FAIL:
                return "Need to restart write flash present section again";
        }
        return "Unknown";
    };

    static getCommandName(commandId: number, subCommandId: number = null) {
        let name = BLEEnum.CommandId[commandId];
        if (commandId == BLEEnum.CommandId.VCI && subCommandId) {
            let subName = BLEEnum.VCICommandId[subCommandId];

            if (subName) {
                name += " - " + subName;
            }
        }

        if (name) {
            return name.match(/[A-Z]+[^A-Z]*|[^A-Z]+/g).join(" ");
        } else {
            return "Unknown"
        }
    }
}