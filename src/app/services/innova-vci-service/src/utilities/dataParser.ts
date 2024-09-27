import { Buffer } from 'buffer';
import * as _ from 'lodash'


export function arrayu8_tostringhex(byteArray: Uint8Array): String {
    return Array.from(byteArray, function (byte) {
        return ('0' + (byte & 0xFF).toString(16)).slice(-2);
    }).join('')
}



export function isNA(s): boolean {
    if (s === null || s === undefined || s.trim() === '') { return true }

    s = s.toLowerCase()

    return s === 'na' || s === 'n/a'
}


export function hexToDecimal(s, def): number {
    s = (s || '').toLowerCase()
    if (s.indexOf('0x') !== 0) { s = '0x' + s }
    try {
        const rtn = parseInt(s)
        if (isNA(rtn)) {
            return def
        }
        return rtn
    }
    catch (err) {
        console.log(err)
        return def
    }
}

export function stringToDecimal(s, def): number {
    s = (s || '').toLowerCase()
    try {
        let rtn = parseInt(s)
        if (isNA(rtn)) {
            return def
        }
        return rtn
    }
    catch (err) {
        console.log(err)
        return def
    }
}

export function isHex(v): boolean {
    const hexRegEx = /[0-9,a-f]/gim
    return (v.match(hexRegEx) || []).length === v.length
}

export function isDigitOrLetter(v): boolean {
    const hexRegEx = /[a-z,0-9]/gim
    return (v.match(hexRegEx) || []).length === v.length
}

export function toWellformedHex(s): string {
    s = s || ''
    s = s.replace(/ /g, '')
    if (s.length % 2 === 1)
        s = '0' + s

    return s
}

// Convert a hex string to a byte array
export function hexStringToBytes(hex) {

    for (var bytes = [], c = 0; c < hex.length; c += 2)
        bytes.push(parseInt(hex.substr(c, 2), 16))

    return bytes
}

// Convert a byte array to a hex string
export function bytesToHexString(bytes, ishasspace = false): String {
    var hex = [];
    for (var i = 0; i < bytes.length; i++) {
        hex.push((bytes[i] >>> 4).toString(16))
        hex.push((bytes[i] & 0xF).toString(16))
        if (ishasspace)
            hex.push(' ');
    }
    return hex.join('').trim()
}


export function bytesToString(bytes): string {
    //return _.trim(String.fromCharCode.apply(null, bytes), '\0')
    return _.trim(new TextDecoder('utf-8').decode(Uint8Array.from(bytes)) , '\0') //06-11-2019 21:58 Quoc Do change here to try decode utf8
}


export function stringToBytes(str) {
    const bytes = []
    for (let i = 0; i < str.length; i++) {
        bytes.push(str.charCodeAt(i))
    }
    return bytes
    // return bytes
}

export function numberToBytes(x, size) {
    let bytes = []
    let current = parseInt(x, 10)

    do {
        bytes.push(current & 0xFF)
        current = current >>> 8
    } while (!!current)

    // adding padding 0 if size provided
    if (size) {
        if (size > bytes.length) {
            let padIndex = bytes.length

            while (padIndex < size) {
                bytes.push(0)
                padIndex++
            }
        }
        else {
            bytes = bytes.splice(0, size)
        }
    }

    return bytes
}

export function numberToDecBytes(x, size) {
    let bytes = []
    let current = parseInt(x)
    let byte
    do {
        byte = current % 10
        bytes.push(byte)
        current = (current - byte) / 10
    } while (!!current)

    // adding padding 0 if size provided
    if (size) {
        if (size > bytes.length) {
            let padIndex = bytes.length

            while (padIndex < size) {
                bytes.push(0)
                padIndex++
            }
        }
        else {
            bytes = bytes.splice(0, size)
        }
    }

    // reverse the order
    bytes.reverse()


    return bytes
}

export function arrayToNumber(datas, size = 4, isMsb = false, isUnsigned = true) {
    try {
        let ret = 0
        let val = _.assign([], datas.slice(0, _.min([datas.length, size])));
        if (isMsb === false) {
            val = _.reverse(val);
        }
        for (let j = 0; j < size;) {
            ret += val[j];
            j++;
            if (j < size) ret <<= 8;
        }
        if (isUnsigned)
            return ret >>> 0;
        else
            return ret;
    } catch (err) {
        return 0;
    }
}


export function arrayFromNumber(val, size = 4, isMsb = false) {
    let ret = [];
    //LSB
    for (let j = 0; j < size; j++) {
        ret.push((val >> (j * 8)) & 0xff);
    }
    //MSB
    if (isMsb) {
        ret = ret.reverse();
    }
    return ret;
}

export function bytesToInt(bytes, size = 2, endian = 1) {
    let rtn = _.chunk(bytes, size)
    rtn = rtn.map((arr) => {
        if (!endian) {
            arr.reverse()
        }
        let val = 0
        arr.map((v) => {
            val = (val << 8) + v
        })
        return val
    })

    // if (rtn.length === 1) {
    //     return rtn[0]
    // }
    return rtn[0]
}


export function bytesToDouble(bytes, endian = 1) {
    const buffer = new ArrayBuffer(8)
    const dv = new DataView(buffer, 0)
    bytes.map((b, index) => dv.setUint8(index, b))

    return dv.getFloat64(0, !endian)
}

export function bytesToInt_dec(bytes) {
    let rtn = 0
    bytes.map((byte, index) => {
        if (byte > 9) {
            throw new Error('Invalid number')
        }
        rtn = rtn + (byte * Math.pow(10, index))
    })
    return rtn
}


export function readbleToJSON(val) {
    try {
        if (_.isArray(val) && val.length === 0) return {};

        const _string = bytesToString(val);
        if (_.isString(_string)) {
            try {
                return JSON.parse(_string);
            } catch (err) {
                let tempstring = _.replace(_string, /""/g, '"');
                tempstring = _.replace(tempstring, /}/g, '}');
                tempstring = _.replace(tempstring, /[\n]/g, '//n');

                return JSON.parse(tempstring);
            }
        }
        //   logger.log('Warning', 'TODO', 'ReadableFormat', _string);
        return null;
    } catch (err) {
        //   logger.log('ParseToJSON', err);
        return null;
    }
}


export function getStringOfObj(obj) {
    if (!obj) return 'null';

    if (typeof obj === 'string') {
        return obj;
    }
    if (_.isArray(obj)) {
        if (obj.length === 0) return null;
        const s = this.bytesToString(obj);
        if (s) return s;

    }
    if (_.isNumber(obj)) {
        return `0x${obj.toString(16)}`
    }
    return JSON.stringify(obj);
}

export function bytestoObj(data)
{
    try{
    let a = this.bytesToString(data)
    return JSON.parse(a)
    }catch(err)
    {
        return undefined
    }
}

export function getObjfromString(jsonObj) {
    try {
        return JSON.parse(jsonObj);
    } catch (err) {
        console.log('Error JSON', jsonObj);
    }
    return null;
}

export function getValOfObj(key, obj) {
    try {
        const _keys = _.keys(obj);
        //console.log('key of object', _keys);
        //const _keys = Object.keys(obj);
        key = _.lowerCase(key);
        for (let i = 0; i < _keys.length; i++) {
            if (_.lowerCase(_keys[i]) === key) {
                return obj[_keys[i]];
            }
        }
        return null;
    } catch (err) {
        console.log(err);
        return null;
    }
}

export function ObjtoStringBeauty(data)
{
    try{
    return JSON.stringify(data,(key,value)=>{
        if(Array.isArray(value) && (typeof value[0] == 'number'))
        {
         return `[${this.bytesToHexString(value,true)}]`
        }
        return value
      })
    }catch(err)
    {
        return JSON.stringify(data)
    }
}