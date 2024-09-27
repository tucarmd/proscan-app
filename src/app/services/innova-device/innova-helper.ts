/*
 * Created by Truyen Nguyen.
 * Email: truyenn@carmd.com.
 * Date: 7/19/2018 (m/d/y).
 * Time: 9:44:1.
 * Copyright (c) 2018, CARMD.COM CORP, (http://carmd.com). All rights reserved.
 */

import {Injectable} from '@angular/core';
import {UuidV4} from "./uuid-v4";

@Injectable()
export class InnovaHelper {
    static convertByteArrayToHexString(byteArray: Uint8Array): string {
        if (!byteArray) return null;

        let hexStr = "";
        for (let i = 0; i < byteArray.length; i++) {
            hexStr += ('0' + (byteArray[i] & 0xFF).toString(16)).slice(-2);
        }

        return hexStr;
    }

    static convertByteArrayToBase64String(byteArray: Uint8Array, startIndex = 0): string {
        if (!byteArray) return null;

        let base64Str = "";
        for (let i = startIndex; i < byteArray.byteLength; i++) {
            base64Str += String.fromCharCode(byteArray[i]);
        }
        return window.btoa(base64Str);
    }

    static convertLittleEndianHexToDecimal(littleEndianHex): number {
        return parseInt('0x' + littleEndianHex.match(/../g).reverse().join(''));
    }

    static convertHexToAscii = (hexStr): string => {
        if (!hexStr) return null;
        let hex = hexStr.toString();
        let str = '';
        for (let n = 0; n < hex.length; n += 2) {
            var char = String.fromCharCode(parseInt(hex.substr(n, 2), 16));
            str += char;
        }
        //str = this.removeNonAscii( str );

        return str;
    };

    static formatVIN(vin): string {
        if (!vin) return "";
        let ret = '';
        for (let x = 0; x < vin.length; x++) {
            if (vin.charCodeAt(x) >= 0 && vin.charCodeAt(x) <= 90) {
                ret += vin.charAt(x);
            }
        }

        if (ret.length < 17) return "";
        if (ret.length > 17) {
            ret = ret.substring(0, 17);
        }
        return ret;
    }

    static removeNonAscii = (str) => {
        if (!str) return "";
        //remove \u0000 in string
        str = str.replace(/\0/g, '');
        let ret = '';
        for (let x = 0; x < str.length; x++) {
            if (str.charCodeAt(x) >= 0 && str.charCodeAt(x) <= 127) {
                ret += str.charAt(x);
            }
        }
        return ret;
    };

    static concatTypedArray = function (a: Uint8Array, b: Uint8Array): Uint8Array {
        let temp = new Uint8Array(a.byteLength + b.byteLength);
        temp.set(new Uint8Array(a), 0);
        temp.set(new Uint8Array(b), a.byteLength);
        return temp;
    };

    static isLastPackage(buffer, totalLength) {
        return buffer && buffer.length == totalLength;
    };

    static convertBytesToInt(byteHigh, byteLow): number {
        return byteHigh | byteLow << 8;
    }

    static getLength(byteHigh, byteLow): number {
        return byteHigh + (byteLow << 8);
    }
    
    static generateUuid = function (): string {
        return UuidV4.uuid();
    };

    //convert uuidBytes to uuid
    static convertByteArrayToUuid = function (byteArray): string {
        if (!byteArray || byteArray.length != 16) return null;
        return UuidV4.parseBinary(byteArray);
        //return UUID( {random: byteArray} );
    };

    //convert uuidBytes to guid
    static convertByteArrayToGuid = function (byteArray): string {
        if (!byteArray || byteArray.length != 16) return null;
        return UuidV4.parseBinary(this.convertUuidBytesToGuidBytes(byteArray));
    };

    static convertUuidToBytes = function (id): Uint8Array {
        return UuidV4.parse(id);
    };

    static convertUuidBytesToGuidBytes = function (uuidByteArray) {
        let byteArray = JSON.parse(JSON.stringify(uuidByteArray));
        //swap first 4
        let swap = byteArray[0];
        byteArray[0] = byteArray[3];
        byteArray[3] = swap;

        swap = byteArray[1];
        byteArray[1] = byteArray[2];
        byteArray[2] = swap;

        //swap next 2
        swap = byteArray[4];
        byteArray[4] = byteArray[5];
        byteArray[5] = swap;

        //swap next 2
        swap = byteArray[6];
        byteArray[6] = byteArray[7];
        byteArray[7] = swap;

        return byteArray;
    };

    static convertUuidToGuid = function (uuid): string {
        return this.convertByteArrayToGuid(this.convertUuidToBytes(uuid));
    };

    static convertGuidToUuid = function (guid): string {
        let byteArray = this.convertUuidToBytes(guid);
        return UuidV4.parseBinary(this.convertUuidBytesToGuidBytes(byteArray));
    };

    static isInvalidOrEmptyGUID(obj) {
        return undefined === obj || null === obj || obj.length < 36 ||
            "00000000-0000-0000-0000-000000000000" == obj ||
            "ffffffff-ffff-ffff-ffff-ffffffffffff" == obj;
    }

    static decToBytes(decimalValue) {
        var byte0 = decimalValue & 0xff;
        var byte1 = (decimalValue >> 8) & 0xff;
        return new Uint8Array([ byte0, byte1 ]);
    }
}