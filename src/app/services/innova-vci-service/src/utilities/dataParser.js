"use strict";
exports.__esModule = true;
var _ = require("lodash");
function arrayu8_tostringhex(byteArray) {
    return Array.from(byteArray, function (byte) {
        return ('0' + (byte & 0xFF).toString(16)).slice(-2);
    }).join('');
}
exports.arrayu8_tostringhex = arrayu8_tostringhex;
function isNA(s) {
    if (s === null || s === undefined || s.trim() === '') {
        return true;
    }
    s = s.toLowerCase();
    return s === 'na' || s === 'n/a';
}
exports.isNA = isNA;
function hexToDecimal(s, def) {
    s = (s || '').toLowerCase();
    if (s.indexOf('0x') !== 0) {
        s = '0x' + s;
    }
    try {
        var rtn = parseInt(s);
        if (isNA(rtn)) {
            return def;
        }
        return rtn;
    }
    catch (err) {
        console.log(err);
        return def;
    }
}
exports.hexToDecimal = hexToDecimal;
function stringToDecimal(s, def) {
    s = (s || '').toLowerCase();
    try {
        var rtn = parseInt(s);
        if (isNA(rtn)) {
            return def;
        }
        return rtn;
    }
    catch (err) {
        console.log(err);
        return def;
    }
}
exports.stringToDecimal = stringToDecimal;
function isHex(v) {
    var hexRegEx = /[0-9,a-f]/gim;
    return (v.match(hexRegEx) || []).length === v.length;
}
exports.isHex = isHex;
function isDigitOrLetter(v) {
    var hexRegEx = /[a-z,0-9]/gim;
    return (v.match(hexRegEx) || []).length === v.length;
}
exports.isDigitOrLetter = isDigitOrLetter;
function toWellformedHex(s) {
    s = s || '';
    s = s.replace(/ /g, '');
    if (s.length % 2 === 1)
        s = '0' + s;
    return s;
}
exports.toWellformedHex = toWellformedHex;
// Convert a hex string to a byte array
function hexStringToBytes(hex) {
    for (var bytes = [], c = 0; c < hex.length; c += 2)
        bytes.push(parseInt(hex.substr(c, 2), 16));
    return bytes;
}
exports.hexStringToBytes = hexStringToBytes;
// Convert a byte array to a hex string
function bytesToHexString(bytes, ishasspace) {
    if (ishasspace === void 0) { ishasspace = false; }
    var hex = [];
    for (var i = 0; i < bytes.length; i++) {
        hex.push((bytes[i] >>> 4).toString(16));
        hex.push((bytes[i] & 0xF).toString(16));
        if (ishasspace)
            hex.push(' ');
    }
    return hex.join('').trim();
}
exports.bytesToHexString = bytesToHexString;
function bytesToString(bytes) {
    return _.trim(String.fromCharCode.apply(null, bytes), '\0');
}
exports.bytesToString = bytesToString;
function stringToBytes(str) {
    var bytes = [];
    for (var i = 0; i < str.length; i++) {
        bytes.push(str.charCodeAt(i));
    }
    return bytes;
    // return bytes
}
exports.stringToBytes = stringToBytes;
function numberToBytes(x, size) {
    var bytes = [];
    var current = parseInt(x, 10);
    do {
        bytes.push(current & 0xFF);
        current = current >>> 8;
    } while (!!current);
    // adding padding 0 if size provided
    if (size) {
        if (size > bytes.length) {
            var padIndex = bytes.length;
            while (padIndex < size) {
                bytes.push(0);
                padIndex++;
            }
        }
        else {
            bytes = bytes.splice(0, size);
        }
    }
    return bytes;
}
exports.numberToBytes = numberToBytes;
function numberToDecBytes(x, size) {
    var bytes = [];
    var current = parseInt(x);
    var byte;
    do {
        byte = current % 10;
        bytes.push(byte);
        current = (current - byte) / 10;
    } while (!!current);
    // adding padding 0 if size provided
    if (size) {
        if (size > bytes.length) {
            var padIndex = bytes.length;
            while (padIndex < size) {
                bytes.push(0);
                padIndex++;
            }
        }
        else {
            bytes = bytes.splice(0, size);
        }
    }
    // reverse the order
    bytes.reverse();
    return bytes;
}
exports.numberToDecBytes = numberToDecBytes;
function arrayToNumber(datas, size, isMsb, isUnsigned) {
    if (size === void 0) { size = 4; }
    if (isMsb === void 0) { isMsb = false; }
    if (isUnsigned === void 0) { isUnsigned = true; }
    try {
        var ret = 0;
        var val = _.assign([], datas.slice(0, _.min([datas.length, size])));
        if (isMsb === false) {
            val = _.reverse(val);
        }
        for (var j = 0; j < size;) {
            ret += val[j];
            j++;
            if (j < size)
                ret <<= 8;
        }
        if (isUnsigned)
            return ret >>> 0;
        else
            return ret;
    }
    catch (err) {
        return 0;
    }
}
exports.arrayToNumber = arrayToNumber;
function arrayFromNumber(val, size, isMsb) {
    if (size === void 0) { size = 4; }
    if (isMsb === void 0) { isMsb = false; }
    var ret = [];
    //LSB
    for (var j = 0; j < size; j++) {
        ret.push((val >> (j * 8)) & 0xff);
    }
    //MSB
    if (isMsb) {
        ret = ret.reverse();
    }
    return ret;
}
exports.arrayFromNumber = arrayFromNumber;
function bytesToInt(bytes, size, endian) {
    if (size === void 0) { size = 2; }
    if (endian === void 0) { endian = 1; }
    var rtn = _.chunk(bytes, size);
    rtn = rtn.map(function (arr) {
        if (!endian) {
            arr.reverse();
        }
        var val = 0;
        arr.map(function (v) {
            val = (val << 8) + v;
        });
        return val;
    });
    // if (rtn.length === 1) {
    //     return rtn[0]
    // }
    return rtn[0];
}
exports.bytesToInt = bytesToInt;
function bytesToDouble(bytes, endian) {
    if (endian === void 0) { endian = 1; }
    var buffer = new ArrayBuffer(8);
    var dv = new DataView(buffer, 0);
    bytes.map(function (b, index) { return dv.setUint8(index, b); });
    return dv.getFloat64(0, !endian);
}
exports.bytesToDouble = bytesToDouble;
function bytesToInt_dec(bytes) {
    var rtn = 0;
    bytes.map(function (byte, index) {
        if (byte > 9) {
            throw new Error('Invalid number');
        }
        rtn = rtn + (byte * Math.pow(10, index));
    });
    return rtn;
}
exports.bytesToInt_dec = bytesToInt_dec;
function readbleToJSON(val) {
    try {
        if (_.isArray(val) && val.length === 0)
            return {};
        var _string = bytesToString(val);
        if (_.isString(_string)) {
            try {
                return JSON.parse(_string);
            }
            catch (err) {
                var tempstring = _.replace(_string, /""/g, '"');
                tempstring = _.replace(tempstring, /}/g, '}');
                tempstring = _.replace(tempstring, /[\n]/g, '//n');
                return JSON.parse(tempstring);
            }
        }
        //   logger.log('Warning', 'TODO', 'ReadableFormat', _string);
        return null;
    }
    catch (err) {
        //   logger.log('ParseToJSON', err);
        return null;
    }
}
exports.readbleToJSON = readbleToJSON;
function getStringOfObj(obj) {
    if (!obj)
        return 'null';
    if (typeof obj === 'string') {
        return obj;
    }
    if (_.isArray(obj)) {
        if (obj.length === 0)
            return null;
        var s = this.bytesToString(obj);
        if (s)
            return s;
    }
    if (_.isNumber(obj)) {
        return "0x" + obj.toString(16);
    }
    return JSON.stringify(obj);
}
exports.getStringOfObj = getStringOfObj;
function bytestoObj(data) {
    try {
        var a = this.bytesToString(data);
        return JSON.parse(a);
    }
    catch (err) {
        return undefined;
    }
}
exports.bytestoObj = bytestoObj;
function getObjfromString(jsonObj) {
    try {
        return JSON.parse(jsonObj);
    }
    catch (err) {
        console.log('Error JSON', jsonObj);
    }
    return null;
}
exports.getObjfromString = getObjfromString;
function getValOfObj(key, obj) {
    try {
        var _keys = _.keys(obj);
        //console.log('key of object', _keys);
        //const _keys = Object.keys(obj);
        key = _.lowerCase(key);
        for (var i = 0; i < _keys.length; i++) {
            if (_.lowerCase(_keys[i]) === key) {
                return obj[_keys[i]];
            }
        }
        return null;
    }
    catch (err) {
        console.log(err);
        return null;
    }
}
exports.getValOfObj = getValOfObj;
