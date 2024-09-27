"use strict";
(self["webpackChunkcom_carmd_proscan2"] = self["webpackChunkcom_carmd_proscan2"] || []).push([["default-src_app_services_innova-vci_service_ts"],{

/***/ 48420:
/*!***********************************!*\
  !*** ./src/app/app.validators.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ValidateVin": function() { return /* binding */ ValidateVin; },
/* harmony export */   "ValidateMileage": function() { return /* binding */ ValidateMileage; },
/* harmony export */   "ValidateMileageKm": function() { return /* binding */ ValidateMileageKm; }
/* harmony export */ });
/* harmony import */ var _configs_app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./configs/app.config */ 66626);

function ValidateVin(control) {
    // let re = new RegExp('^[A-HJ-NPR-Z\\d]{8}[\\dX][A-HJ-NPR-Z\\d]{2}\\d{6}$');
    let re = new RegExp('^[a-zA-Z0-9]{17}$');
    if (control.value.length && !(control.value.match(re))) {
        return { invalidVin: true };
    }
    return null;
}
function ValidateMileage(control) {
    if (isNaN(control.value) || control.value <= 0 || control.value > _configs_app_config__WEBPACK_IMPORTED_MODULE_0__.MAX_MILEAGE_VALUE) {
        return { invalidMileage: true };
    }
    return null;
}
function ValidateMileageKm(control) {
    if (isNaN(control.value) || control.value <= 0 || control.value > _configs_app_config__WEBPACK_IMPORTED_MODULE_0__.MAX_MILEAGE_VALUE_KM) {
        return { invalidMileage: true };
    }
    return null;
}


/***/ }),

/***/ 80106:
/*!********************************************!*\
  !*** ./src/app/services/events.service.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Events": function() { return /* binding */ Events; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 79441);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);


/**
 * A custom Events service just like Ionic 3 Events https://ionicframework.com/docs/v3/api/util/Events/ which got removed in Ionic 5.
 *
 * @author Shashank Agrawal
 */
class Events {
    constructor() {
        this.channels = {};
        this.subscriptions = {};
    }
    /**
     * Subscribe to a topic and provide a single handler/observer.
     * @param topic The name of the topic to subscribe to.
     * @param observer The observer or callback function to listen when changes are published.
     *
     * @returns Subscription from which you can unsubscribe to release memory resources and to prevent memory leak.
     */
    subscribe(topic, observer) {
        if (!this.channels[topic]) {
            // You can also use ReplaySubject with one concequence
            this.channels[topic] = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        }
        let sub = this.channels[topic].subscribe(observer);
        this.subscriptions[topic] = sub;
        return sub;
    }
    unsubscribe(topic) {
        if (this.subscriptions[topic]) {
            // You can also use ReplaySubject with one concequence
            this.subscriptions[topic].unsubscribe();
            delete this.subscriptions[topic];
        }
    }
    /**
     * Publish some data to the subscribers of the given topic.
     * @param topic The name of the topic to emit data to.
     * @param data data in any format to pass on.
     */
    publish(topic, data) {
        const subject = this.channels[topic];
        if (!subject) {
            // Or you can create a new subject for future subscribers
            return;
        }
        subject.next(data);
    }
    /**
     * When you are sure that you are done with the topic and the subscribers no longer needs to listen to a particular topic, you can
     * destroy the observable of the topic using this method.
     * @param topic The name of the topic to destroy.
     */
    destroy(topic) {
        const subject = this.channels[topic];
        if (!subject) {
            return;
        }
        subject.complete();
        delete this.channels[topic];
    }
}
Events.ɵfac = function Events_Factory(t) { return new (t || Events)(); };
Events.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: Events, factory: Events.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 59413:
/*!***************************************************!*\
  !*** ./src/app/services/innova-helper.service.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InnovaHelper": function() { return /* binding */ InnovaHelper; }
/* harmony export */ });
/* harmony import */ var _uuid_v4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uuid-v4 */ 2658);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);


class InnovaHelper {
    static convertByteArrayToHexString(byteArray) {
        if (!byteArray)
            return null;
        let hexStr = "";
        for (let i = 0; i < byteArray.length; i++) {
            hexStr += ("0" + (byteArray[i] & 0xff).toString(16)).slice(-2);
        }
        return hexStr;
    }
    static convertByteArrayToString(byteArray, startIndex = 0) {
        if (!byteArray)
            return null;
        let res = "";
        for (let i = startIndex; i < byteArray.byteLength; i++) {
            res += String.fromCharCode(byteArray[i]);
        }
        return res;
    }
    static convertByteArrayToBase64String(byteArray, startIndex = 0) {
        if (!byteArray)
            return null;
        return window.btoa(InnovaHelper.convertByteArrayToString(byteArray, startIndex));
    }
    static convertLittleEndianHexToDecimal(littleEndianHex) {
        return parseInt("0x" +
            littleEndianHex
                .match(/../g)
                .reverse()
                .join(""));
    }
    static formatVIN(vin) {
        if (!vin)
            return "";
        let ret = "";
        for (let x = 0; x < vin.length; x++) {
            if (vin.charCodeAt(x) >= 0 && vin.charCodeAt(x) <= 90) {
                ret += vin.charAt(x);
            }
        }
        if (ret.length < 17)
            return "";
        if (ret.length > 17) {
            ret = ret.substring(0, 17);
        }
        return ret;
    }
    static isLastPackage(buffer, totalLength) {
        return buffer && buffer.length === totalLength;
    }
    static convertBytesToInt(byteHigh, byteLow) {
        return byteHigh | (byteLow << 8);
    }
    static convertStringToByteArray(text) {
        let array = new Uint8Array(text.length);
        for (let i = 0; i < text.length; i++) {
            array[i] = text.charCodeAt(i);
        }
        return array;
    }
    static isInvalidOrEmptyGUID(obj) {
        return (undefined === obj ||
            null === obj ||
            obj.length < 36 ||
            "00000000-0000-0000-0000-000000000000" == obj ||
            "ffffffff-ffff-ffff-ffff-ffffffffffff" == (obj + "").toLowerCase());
    }
    static isInvalidOrEmptyVIN(obj) {
        return (undefined === obj ||
            null === obj ||
            obj.length != 17 ||
            "00000000000000000000000000000000" == obj ||
            this._ArrayOfZero(this.convertStringToByteArray(obj)));
    }
    static _ArrayOfZero(obj) {
        for (let i = 0; i < obj.length; i++) {
            if (obj[i] != 0) {
                return false;
            }
        }
        return true;
    }
    static convertBase64ToBinary(base64) {
        var raw = window.atob(base64);
        var rawLength = raw.length;
        var array = new Uint8Array(new ArrayBuffer(rawLength));
        for (let i = 0; i < rawLength; i++) {
            array[i] = raw.charCodeAt(i);
        }
        return array;
    }
    static convertBase(num) {
        return {
            from: (baseFrom) => {
                return {
                    to: (baseTo) => {
                        return parseInt(num, baseFrom).toString(baseTo);
                    }
                };
            }
        };
    }
    static combineUArray(...params) {
        // let len = params.map((arr) => arr.length)
        // .reduce((acc, cur) => acc + cur, 0);
        let res = [];
        params.forEach(arr => {
            arr.forEach(element => {
                res.push(element);
            });
        });
        return new Uint8Array(res);
    }
    static decToBytes(decimalValue) {
        var byte0 = decimalValue & 0xff;
        var byte1 = (decimalValue >> 8) & 0xff;
        return new Uint8Array([byte0, byte1]);
    }
}
InnovaHelper.convertHexToAscii = (hexStr) => {
    if (!hexStr)
        return null;
    let hex = hexStr.toString();
    let str = "";
    for (let n = 0; n < hex.length; n += 2) {
        str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
    }
    //str = this.removeNonAscii( str );
    return str;
};
InnovaHelper.removeNonAscii = str => {
    if (!str)
        return "";
    //remove \u0000 in string
    str = str.replace(/\0/g, "");
    let ret = "";
    for (let x = 0; x < str.length; x++) {
        if (str.charCodeAt(x) >= 0 && str.charCodeAt(x) <= 127) {
            ret += str.charAt(x);
        }
    }
    return ret;
};
InnovaHelper.concatTypedArray = function (a, b) {
    if (!a)
        a = new Uint8Array(0);
    if (!b)
        b = new Uint8Array(0);
    let temp = new Uint8Array(a.byteLength + b.byteLength);
    temp.set(new Uint8Array(a), 0);
    temp.set(new Uint8Array(b), a.byteLength);
    return temp;
};
InnovaHelper.generateUuid = function () {
    return _uuid_v4__WEBPACK_IMPORTED_MODULE_0__.UuidV4.uuid();
};
InnovaHelper.generateGuid = function () {
    let uuid = _uuid_v4__WEBPACK_IMPORTED_MODULE_0__.UuidV4.uuid();
    return InnovaHelper.convertUuidToGuid(uuid);
};
//convert uuidBytes to uuid
InnovaHelper.convertByteArrayToUuid = function (byteArray) {
    if (!byteArray || byteArray.length != 16)
        return null;
    return _uuid_v4__WEBPACK_IMPORTED_MODULE_0__.UuidV4.parseBinary(byteArray);
    //return UUID( {random: byteArray} );
};
//convert uuidBytes to guid
InnovaHelper.convertByteArrayToGuid = function (byteArray) {
    if (!byteArray || byteArray.length != 16)
        return null;
    return _uuid_v4__WEBPACK_IMPORTED_MODULE_0__.UuidV4.parseBinary(this.convertUuidBytesToGuidBytes(byteArray));
};
InnovaHelper.convertUuidToBytes = function (id) {
    return _uuid_v4__WEBPACK_IMPORTED_MODULE_0__.UuidV4.parse(id);
};
InnovaHelper.convertUuidBytesToGuidBytes = function (uuidByteArray) {
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
InnovaHelper.convertUuidToGuid = function (uuid) {
    return this.convertByteArrayToGuid(this.convertUuidToBytes(uuid));
};
InnovaHelper.ɵfac = function InnovaHelper_Factory(t) { return new (t || InnovaHelper)(); };
InnovaHelper.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: InnovaHelper, factory: InnovaHelper.ɵfac });


/***/ }),

/***/ 51572:
/*!****************************************************************************!*\
  !*** ./src/app/services/innova-report-helper/innova-report-data-models.ts ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MANUFACTURE_MAKE_DEFINITION": function() { return /* binding */ MANUFACTURE_MAKE_DEFINITION; },
/* harmony export */   "getManufactureByMake": function() { return /* binding */ getManufactureByMake; },
/* harmony export */   "MONITOR_DEFINITION": function() { return /* binding */ MONITOR_DEFINITION; },
/* harmony export */   "BRAKE_LIFE_DEFINITION_2021": function() { return /* binding */ BRAKE_LIFE_DEFINITION_2021; },
/* harmony export */   "OIL_LIFE_DEFINITION_2021": function() { return /* binding */ OIL_LIFE_DEFINITION_2021; },
/* harmony export */   "OIL_LEVEL_DEFINITION": function() { return /* binding */ OIL_LEVEL_DEFINITION; },
/* harmony export */   "BRAKE_LIFE_DEFINITION": function() { return /* binding */ BRAKE_LIFE_DEFINITION; },
/* harmony export */   "OIL_LIFE_DEFINITION": function() { return /* binding */ OIL_LIFE_DEFINITION; },
/* harmony export */   "TRANSMISSION_FLUID_TEMPERATURE_DEFINITION": function() { return /* binding */ TRANSMISSION_FLUID_TEMPERATURE_DEFINITION; },
/* harmony export */   "TIRE_PRESSURES_DEFINITION": function() { return /* binding */ TIRE_PRESSURES_DEFINITION; }
/* harmony export */ });
const MANUFACTURE_MAKE_DEFINITION = [
    {
        Manufacturer: 'BMW',
        Make: 'BMW',
    },
    {
        Manufacturer: 'BMW',
        Make: 'Mini',
    },
    {
        Manufacturer: 'Chrysler',
        Make: 'Alfa Romeo(FCA)',
    },
    {
        Manufacturer: 'Chrysler',
        Make: 'Chrysler',
    },
    {
        Manufacturer: 'Chrysler',
        Make: 'Dodge',
    },
    {
        Manufacturer: 'Chrysler',
        Make: 'Eagle',
    },
    {
        Manufacturer: 'Chrysler',
        Make: 'Fiat(FCA)',
    },
    {
        Manufacturer: 'Chrysler',
        Make: 'Jeep',
    },
    {
        Manufacturer: 'Chrysler',
        Make: 'Plymouth',
    },
    {
        Manufacturer: 'Chrysler',
        Make: 'Ram',
    },
    {
        Manufacturer: 'Chrysler',
        Make: 'SRT',
    },
    {
        Manufacturer: 'Ford',
        Make: 'Ford',
    },
    {
        Manufacturer: 'Ford',
        Make: 'Lincoln',
    },
    {
        Manufacturer: 'Ford',
        Make: 'Mercury',
    },
    {
        Manufacturer: 'GM',
        Make: 'Buick',
    },
    {
        Manufacturer: 'GM',
        Make: 'Cadillac',
    },
    {
        Manufacturer: 'GM',
        Make: 'Chevrolet',
    },
    {
        Manufacturer: 'GM',
        Make: 'Geo',
    },
    {
        Manufacturer: 'GM',
        Make: 'GMC',
    },
    {
        Manufacturer: 'GM',
        Make: 'Hummer',
    },
    {
        Manufacturer: 'GM',
        Make: 'Oldsmobile',
    },
    {
        Manufacturer: 'GM',
        Make: 'Pontiac',
    },
    {
        Manufacturer: 'GM',
        Make: 'Saab',
    },
    {
        Manufacturer: 'GM',
        Make: 'Saturn',
    },
    {
        Manufacturer: 'Honda',
        Make: 'Acura',
    },
    {
        Manufacturer: 'Honda',
        Make: 'Honda',
    },
    {
        Manufacturer: 'Honda',
        Make: 'Honda ',
    },
    {
        Manufacturer: 'Hyundai',
        Make: 'Hyundai',
    },
    {
        Manufacturer: 'Hyundai',
        Make: 'Kia',
    },
    {
        Manufacturer: 'Jaguar Land Rover',
        Make: 'Jaguar',
    },
    {
        Manufacturer: 'Jaguar Land Rover',
        Make: 'Land Rover',
    },
    {
        Manufacturer: 'Mazda',
        Make: 'Mazda',
    },
    {
        Manufacturer: 'Mercedes-Benz',
        Make: 'Mercedes-Benz',
    },
    {
        Manufacturer: 'Mercedes-Benz',
        Make: 'Smart',
    },
    {
        Manufacturer: 'Mitsubishi',
        Make: 'Mitsubishi',
    },
    {
        Manufacturer: 'Nissan',
        Make: 'Infiniti',
    },
    {
        Manufacturer: 'Nissan',
        Make: 'Nissan',
    },
    {
        Manufacturer: 'Subaru',
        Make: 'Subaru',
    },
    {
        Manufacturer: 'Toyota',
        Make: 'Lexus',
    },
    {
        Manufacturer: 'Toyota',
        Make: 'Scion',
    },
    {
        Manufacturer: 'Toyota',
        Make: 'Toyota',
    },
    {
        Manufacturer: 'Volkswagen',
        Make: 'Audi',
    },
    {
        Manufacturer: 'Volkswagen',
        Make: 'Volkswagen',
    },
    {
        Manufacturer: 'Volvo',
        Make: 'Volvo',
    },
];
function getManufactureByMake(make) {
    make = (make || '').replace(/[^\w]/gi, '').toUpperCase();
    let manufacturer = MANUFACTURE_MAKE_DEFINITION.find(m => m.Make.replace(/[^\w]/gi, '').toUpperCase() === make);
    return manufacturer ? manufacturer.Manufacturer : '';
}
// https://codebeautify.org/xmltojson
const MONITOR_DEFINITION = [
    // [shortName, enName, spName, frName ....]
    [
        'mis',
        'Misfire Monitor',
        'El monitor de fallo de encendido',
        'La sonde des ratés',
    ],
    [
        'fue',
        'Fuel System Monitor',
        'El monitor del sistema de combustible',
        'La sonde du système de carburation',
    ],
    [
        'ccm',
        'Comprehensive Component Monitor (CCM)',
        'El monitor general de componentes (CCM)',
        'La sonde globale des composants (SGC)',
    ],
    [
        'cat',
        'Catalyst Monitor',
        'Monitor del convertidor catalítico',
        'La sonde du convertisseur catalytique',
    ],
    [
        'hca',
        'Heated Catalyst Monitor',
        'Monitor del sistema EGR',
        "Sonde de catalyseur d'hydrocarbures non méthaniques",
    ],
    [
        'eva',
        'EVAP System Monitor',
        'Monitor del sistema EVAP',
        "La sonde du système d'évaporation (EVAP)",
    ],
    [
        'air',
        'Secondary Air System Monitor',
        'Monitor del sistema secundario de aire',
        "La sonde du système d'air secondaire",
    ],
    [
        'o2s',
        'Oxygen Sensor Monitor',
        'Monitor del sensor de oxígeno',
        "La sonde du détecteur d'oxygène",
    ],
    [
        'htr',
        'Oxygen Sensor Heater Monitor',
        'Monitor del calefactor del sensor de oxígeno',
    ],
    [
        'nox',
        'NOx Adsorber Monitor',
        'Monitor de adsorción NOx',
        "Sonde d'absorption de NOx",
    ],
    [
        'egs',
        'Exhaust Gas Sensor Monitor',
        'Monitor de sensor de gases de escape',
        "Sonde du capteur de gaz d'échappement",
    ],
    [
        'hcc',
        'NMHC Monitor',
        'Monitor NMHC',
        'La sonde du convertisseur catalytique chauffé',
    ],
    [
        'egr',
        'EGR System Monitor',
        'Monitor del sistema EGR',
        'La sonde du système de recirculation des gaz du carter («EGR»)',
    ],
    [
        'dpf',
        'PM Filter Monitor',
        'Monitor de filtro PM',
        'Sonde de filtre à particules',
    ],
    ['ect', 'Engine Coolant Temperature', 'Monitor de ECT', 'Sonde de ECT'],
    [
        'bps',
        'Boost Pressure System Monitor',
        'Monitor del sistema de presión de refuerzo',
        'Sonde du système de pression de suralimentation',
    ],
].map((item) => item.join('/').toUpperCase().split('/')); // UPPERCASE ALL
const BRAKE_LIFE_DEFINITION_2021 = [
    {
        ouput: [
            {
                applocation: 'Needs Attention',
                appmessage: 'Inspect',
            },
            {
                applocation: 'Passed',
                appmessage: 'Good Condition',
            },
        ],
        _Make: 'CHEVROLET',
        _PIDs: 'Brake Pad Check',
        _Group: 'Group 2',
        _Operation: 'Equality',
        _Condition: 'Low|OFF',
        _ValueType: 'string',
    },
    {
        ouput: [
            {
                applocation: 'Needs Attention',
                appmessage: 'Inspect',
            },
            {
                applocation: 'Passed',
                appmessage: 'Good Condition',
            },
        ],
        _Make: 'BMW',
        _PIDs: 'Rear Brake Pad Check',
        _Group: 'Group 1',
        _Operation: 'Comparison',
        _Condition: '50',
        _ValueType: 'int',
    },
    {
        ouput: [
            {
                applocation: 'Needs Attention',
                appmessage: 'Inspect',
            },
            {
                applocation: 'Passed',
                appmessage: 'Good Condition',
            },
        ],
        _Make: 'BMW',
        _PIDs: 'Front Brake Pad Check',
        _Group: 'Group 1',
        _Operation: 'Comparison',
        _Condition: '50',
        _ValueType: 'int',
    },
    {
        ouput: [
            {
                applocation: 'Needs Attention',
                appmessage: 'Inspect',
            },
            {
                applocation: 'Passed',
                appmessage: 'Good Condition',
            },
        ],
        _Make: 'FORD',
        _PIDs: 'Brake Pad Check',
        _Group: 'Group 2',
        _Operation: 'Equality',
        _Condition: 'Low|OFF',
        _ValueType: 'string',
    },
    {
        ouput: [
            {
                applocation: 'Needs Attention',
                appmessage: 'Inspect',
            },
            {
                applocation: 'Passed',
                appmessage: 'Good Condition',
            },
        ],
        _Make: 'AUDI',
        _PIDs: 'Brake Pad Check',
        _Group: 'Group 2',
        _Operation: 'Equality',
        _Condition: 'Inactive|Wear indicat.',
        _ValueType: 'string',
    },
    {
        ouput: [
            {
                applocation: 'Needs Attention',
                appmessage: 'Inspect',
            },
            {
                applocation: 'Passed',
                appmessage: 'Good Condition',
            },
        ],
        _Make: 'LINCOLN',
        _PIDs: 'Brake Pad Check',
        _Group: 'Group 2',
        _Operation: 'Equality',
        _Condition: 'Low|OFF',
        _ValueType: 'string',
    },
    {
        ouput: [
            {
                applocation: 'Needs Attention',
                appmessage: 'Inspect',
            },
            {
                applocation: 'Passed',
                appmessage: 'Good Condition',
            },
        ],
        _Make: 'MERCURY',
        _PIDs: 'Brake Pad Check',
        _Group: 'Group 2',
        _Operation: 'Equality',
        _Condition: 'Low|OFF',
        _ValueType: 'string',
    },
    {
        ouput: [
            {
                applocation: 'Needs Attention',
                appmessage: 'Inspect',
            },
            {
                applocation: 'Passed',
                appmessage: 'Good Condition',
            },
        ],
        _Make: 'MERCEDES-BENZ',
        _PIDs: 'Brake Pad Check',
        _Group: 'Group 2',
        _Operation: 'Equality',
        _Condition: 'Off|Not OK|Not Present',
        _ValueType: 'string',
    },
    {
        ouput: [
            {
                applocation: 'Needs Attention',
                appmessage: 'Inspect',
            },
            {
                applocation: 'Passed',
                appmessage: 'Good Condition',
            },
        ],
        _Make: 'MERCEDES-BENZ',
        _PIDs: 'Rear Brake Pad Check',
        _Group: 'Group 2',
        _Operation: 'Equality',
        _Condition: 'Off|Not OK|Not Present',
        _ValueType: 'string',
    },
    {
        ouput: [
            {
                applocation: 'Needs Attention',
                appmessage: 'Inspect',
            },
            {
                applocation: 'Passed',
                appmessage: 'Good Condition',
            },
        ],
        _Make: 'MERCEDES-BENZ',
        _PIDs: 'Front Brake Pad Check',
        _Group: 'Group 2',
        _Operation: 'Equality',
        _Condition: 'Off|Not OK|Not Present',
        _ValueType: 'string',
    },
    {
        ouput: [
            {
                applocation: 'Needs Attention',
                appmessage: 'Inspect',
            },
            {
                applocation: 'Passed',
                appmessage: 'Good Condition',
            },
        ],
        _Make: 'VOLKSWAGEN',
        _PIDs: 'Brake Pad Check',
        _Group: 'Group 2',
        _Operation: 'Equality',
        _Condition: 'Inactive|Wear indicat.',
        _ValueType: 'string',
    },
];
// Update since https://iectech.atlassian.net/browse/TABD-224
const OIL_LIFE_DEFINITION_2021 = [
    {
        ouput: [
            {
                applocation: 'Needs Attention',
                appmessage: '{0:00}%',
            },
            {
                applocation: 'Passed',
                appmessage: '{0:00}%',
            },
        ],
        _Make: 'CHEVROLET',
        _PIDs: 'Oil Life Remaining',
        _Group: 'Group 1',
        _Operation: 'Comparison',
        _Condition: '20',
        _ValueType: 'int',
    },
    {
        ouput: [
            {
                applocation: 'Needs Attention',
                appmessage: '{0:00}%',
            },
            {
                applocation: 'Passed',
                appmessage: '{0:00}%',
            },
        ],
        _Make: 'BMW',
        _PIDs: 'Oil Life Remaining',
        _Group: 'Group 1',
        _Operation: 'Comparison',
        _Condition: '20',
        _ValueType: 'int',
    },
    {
        ouput: [
            {
                applocation: 'Needs Attention',
                appmessage: '{0:00}%',
            },
            {
                applocation: 'Passed',
                appmessage: '{0:00}%',
            },
        ],
        _Make: 'FORD',
        _PIDs: 'Oil Life Remaining',
        _Group: 'Group 1',
        _Operation: 'Comparison',
        _Condition: '15',
        _ValueType: 'int',
    },
    {
        ouput: [
            {
                applocation: 'Needs Attention',
                appmessage: '{0:00}%',
            },
            {
                applocation: 'Passed',
                appmessage: '{0:00}%',
            },
        ],
        _Make: 'OTHERS',
        _PIDs: 'Oil Life Remaining',
        _Group: 'Group 1',
        _Operation: 'Comparison',
        _Condition: '20',
        _ValueType: 'int',
    },
    {
        ouput: [
            {
                applocation: 'Needs Attention',
                appmessage: '{0:00}%',
            },
            {
                applocation: 'Passed',
                appmessage: '{0:00}%',
            },
        ],
        _Make: 'GM',
        _PIDs: 'Oil Life Remaining',
        _Group: 'Group 1',
        _Operation: 'Comparison',
        _Condition: '20',
        _ValueType: 'int',
    },
    {
        ouput: [
            {
                applocation: 'Needs Attention',
                appmessage: '{0:00}%',
            },
            {
                applocation: 'Passed',
                appmessage: '{0:00}%',
            },
        ],
        _Make: 'LINCOLN',
        _PIDs: 'Oil Life Remaining',
        _Group: 'Group 1',
        _Operation: 'Comparison',
        _Condition: '15',
        _ValueType: 'int',
    },
    {
        ouput: [
            {
                applocation: 'Needs Attention',
                appmessage: '{0:00}%',
            },
            {
                applocation: 'Passed',
                appmessage: '{0:00}%',
            },
        ],
        _Make: 'MAZDA',
        _PIDs: 'Oil Life Remaining',
        _Group: 'Group 1',
        _Operation: 'Comparison',
        _Condition: '15',
        _ValueType: 'int',
    },
    {
        ouput: [
            {
                applocation: 'Needs Attention',
                appmessage: '{0:00}%',
            },
            {
                applocation: 'Passed',
                appmessage: '{0:00}%',
            },
        ],
        _Make: 'MERCEDES-BENZ',
        _PIDs: 'Oil Life Remaining',
        _Group: 'Group 1',
        _Operation: 'Comparison',
        _Condition: '2',
        _ValueType: 'int',
    },
    {
        ouput: [
            {
                applocation: 'Needs Attention',
                appmessage: '{0:00}%',
            },
            {
                applocation: 'Passed',
                appmessage: '{0:00}%',
            },
        ],
        _Make: 'HONDA',
        _PIDs: 'Oil Life Remaining',
        _Group: 'Group 1',
        _Operation: 'Comparison',
        _Condition: '15',
        _ValueType: 'int',
    },
    {
        ouput: [
            {
                applocation: 'Needs Attention',
                appmessage: '{0:00}%',
            },
            {
                applocation: 'Passed',
                appmessage: '{0:00}%',
            },
        ],
        _Make: 'ACURA',
        _PIDs: 'Oil Life Remaining',
        _Group: 'Group 1',
        _Operation: 'Comparison',
        _Condition: '15',
        _ValueType: 'int',
    },
    {
        ouput: [
            {
                applocation: 'Needs Attention',
                appmessage: 'Poor',
            },
            {
                applocation: 'Passed',
                appmessage: 'Good',
            },
        ],
        _Make: 'VOLKSWAGEN',
        _PIDs: 'Oil Life Remaining',
        _Group: 'Group 2',
        _Operation: 'Equality',
        _Condition: 'Poor|Poor oil quality',
        _ValueType: 'string',
    },
    {
        ouput: [
            {
                applocation: 'Needs Attention',
                appmessage: 'Poor',
            },
            {
                applocation: 'Passed',
                appmessage: 'Good',
            },
        ],
        _Make: 'AUDI',
        _PIDs: 'Oil Life Remaining',
        _Group: 'Group 2',
        _Operation: 'Equality',
        _Condition: 'Poor|Poor oil quality',
        _ValueType: 'string',
    },
];
// Defined by 'TelematicsDongle_PIDs_Specification (Jul292021).xlsx'
const OIL_LEVEL_DEFINITION = [
    {
        ouput: [
            {
                applocation: 'Needs Attention',
                appmessage: 'XX %',
            },
            {
                applocation: 'Passed',
                appmessage: 'XX %',
            },
        ],
        _Manufacture: 'VOLVO',
        _Group: 'Group 1',
        _Operation: 'Comparison',
        _Condition: 'x<25 || x>57,,x>=35 && x<=57',
        _ValueType: 'int',
    },
    {
        ouput: [
            {
                applocation: 'Needs Attention',
                appmessage: 'Inspect',
            },
            {
                applocation: 'Passed',
                appmessage: 'Good Condition',
            },
        ],
        _Manufacture: 'OTHERS',
        _Group: 'Group 2',
        _Operation: 'Equality',
        _Condition: '??,,OK|OFF|Not present|Not activate|Not Actived|Brake lining 1|Brake Pads Not Worn',
        _ValueType: 'int',
    }
];
// Defined by 'TelematicsDongle_PIDs_Specification (Jul292021).xlsx'
const BRAKE_LIFE_DEFINITION = [
    {
        ouput: [
            {
                applocation: 'Needs Attention',
                appmessage: 'XX %',
            },
            {
                applocation: 'Passed',
                appmessage: 'XX %',
            },
        ],
        _Manufacture: 'BMW',
        _Group: 'Group 1',
        _Operation: 'Comparison',
        _Condition: 'x<50,,x>51',
        _ValueType: 'int',
    },
    {
        ouput: [
            {
                applocation: 'Needs Attention',
                appmessage: 'Inspect',
            },
            {
                applocation: 'Passed',
                appmessage: 'Good Condition',
            },
        ],
        _Manufacture: 'OTHERS',
        _Group: 'Group 2',
        _Operation: 'Equality',
        _Condition: 'Others,,OK|OFF|Not Set|Not present|Not activate|Not Actived|Not Activated|Brake lining 1|Brake Pads Not Worn',
        _ValueType: 'int',
    }
];
// Defined by 'TelematicsDongle_PIDs_Specification (Jul292021).xlsx'
const OIL_LIFE_DEFINITION = [
    {
        ouput: [
            {
                applocation: 'Needs Attention',
                appmessage: 'XX %',
            },
            {
                applocation: 'Passed',
                appmessage: 'XX %',
            },
        ],
        _Manufacture: 'FORD|HONDA',
        _Group: 'Group 1',
        _Operation: 'Comparison',
        _Condition: 'x<15,,x>16',
        _ValueType: 'int',
    },
    {
        ouput: [
            {
                applocation: 'Needs Attention',
                appmessage: 'XX %',
            },
            {
                applocation: 'Passed',
                appmessage: 'XX %',
            },
        ],
        _Manufacture: 'BMW|GM|CHRYSLER|SUBARU',
        _Group: 'Group 1',
        _Operation: 'Comparison',
        _Condition: 'x<20,,x>21',
        _ValueType: 'int',
    },
    {
        ouput: [
            {
                applocation: 'Needs Attention',
                appmessage: 'Poor',
            },
            {
                applocation: 'Passed',
                appmessage: 'Good',
            },
        ],
        _Manufacture: 'FORD',
        _Group: 'Group 2',
        _Operation: 'Equality',
        _Condition: 'Low Oil,,OK',
        _ValueType: 'string',
    },
    {
        ouput: [
            {
                applocation: 'Needs Attention',
                appmessage: 'Poor',
            },
            {
                applocation: 'Passed',
                appmessage: 'Good',
            },
        ],
        _Manufacture: 'VOLKSWAGEN',
        _Group: 'Group 2',
        _Operation: 'Equality',
        _Condition: 'Poor|Poor oil quality,,Good|Good oil quality',
        _ValueType: 'string',
    },
    {
        ouput: [
            {
                applocation: 'Needs Attention',
                appmessage: 'Poor',
            },
            {
                applocation: 'Passed',
                appmessage: 'Good',
            },
        ],
        _Manufacture: 'VOLKSWAGEN',
        _Group: 'Group 3',
        _Operation: 'Comparison',
        _Condition: 'x<>1,,x==1',
        _ValueType: 'int',
    },
    {
        ouput: [
            {
                applocation: 'Needs Attention',
                appmessage: 'Poor',
            },
            {
                applocation: 'Passed',
                appmessage: 'Good',
            },
        ],
        _Manufacture: 'MERCEDES-BENZ',
        _Group: 'Group 3',
        _Operation: 'Comparison',
        _Condition: 'x<1 || x>4,,x>1 && x<4',
        _ValueType: 'int',
    },
];
// Defined by 'TelematicsDongle_PIDs_Specification (Jul292021).xlsx'
const TRANSMISSION_FLUID_TEMPERATURE_DEFINITION = [
    {
        ouput: [
            {
                applocation: 'Needs Attention',
                appmessage: 'Inspect',
            },
            {
                applocation: 'Passed',
                appmessage: 'Good Condition',
            },
        ],
        _Manufacture: 'TOYOTA|SUBARU',
        _PIDs: 'Transmission Fluid Temperature',
        _Group: 'Group 2',
        _Operation: 'Comparison',
        _Condition: 'x>=212,,176<=x && x<=194',
        _ValueType: 'int',
    },
    {
        ouput: [
            {
                applocation: 'Needs Attention',
                appmessage: 'Inspect',
            },
            {
                applocation: 'Passed',
                appmessage: 'Good Condition',
            },
        ],
        _Manufacture: 'BMW|HONDA|ACURA',
        _PIDs: 'Transmission Fluid Temperature',
        _Group: 'Group 2',
        _Operation: 'Comparison',
        _Condition: 'x>=230,,x<230',
        _ValueType: 'int',
    },
    {
        ouput: [
            {
                applocation: 'Needs Attention',
                appmessage: 'Inspect',
            },
            {
                applocation: 'Passed',
                appmessage: 'Good Condition',
            },
        ],
        _Manufacture: 'GM',
        _PIDs: 'Transmission Fluid Temperature',
        _Group: 'Group 2',
        _Operation: 'Comparison',
        _Condition: 'x>240,,x<240',
        _ValueType: 'int',
    },
    {
        ouput: [
            {
                applocation: 'Needs Attention',
                appmessage: 'Inspect',
            },
            {
                applocation: 'Passed',
                appmessage: 'Good Condition',
            },
        ],
        _Manufacture: 'FORD|LINCOLN|VOLKSWAGEN|AUDI',
        _PIDs: 'Transmission Fluid Temperature',
        _Group: 'Group 2',
        _Operation: 'Comparison',
        _Condition: 'x>=221,,176<=x && x<=203',
        _ValueType: 'int',
    },
    {
        ouput: [
            {
                applocation: 'Needs Attention',
                appmessage: 'Inspect',
            },
            {
                applocation: 'Passed',
                appmessage: 'Good Condition',
            },
        ],
        _Manufacture: 'HYUNDAI',
        _PIDs: 'Transmission Fluid Temperature',
        _Group: 'Group 2',
        _Operation: 'Comparison',
        _Condition: 'x>=221,,176<=x && x<=221',
        _ValueType: 'int',
    },
    {
        ouput: [
            {
                applocation: 'Needs Attention',
                appmessage: 'Inspect',
            },
            {
                applocation: 'Passed',
                appmessage: 'Good Condition',
            },
        ],
        _Manufacture: 'MERCURY',
        _PIDs: 'Transmission Fluid Temperature',
        _Group: 'Group 2',
        _Operation: 'Comparison',
        _Condition: 'x>=221,,176<=x && x<=194',
        _ValueType: 'int',
    },
    {
        ouput: [
            {
                applocation: 'Needs Attention',
                appmessage: 'Inspect',
            },
            {
                applocation: 'Passed',
                appmessage: 'Good Condition',
            },
        ],
        _Manufacture: 'MERCEDES-BENZ',
        _PIDs: 'Transmission Fluid Temperature',
        _Group: 'Group 2',
        _Operation: 'Comparison',
        _Condition: 'x>=248,,x<248',
        _ValueType: 'int',
    },
    {
        ouput: [
            {
                applocation: 'Needs Attention',
                appmessage: 'Inspect',
            },
            {
                applocation: 'Passed',
                appmessage: 'Good Condition',
            },
        ],
        _Manufacture: 'MAZDA',
        _PIDs: 'Transmission Fluid Temperature',
        _Group: 'Group 2',
        _Operation: 'Comparison',
        _Condition: 'x>=266,,x<266',
        _ValueType: 'int',
    },
    {
        ouput: [
            {
                applocation: 'Needs Attention',
                appmessage: 'Inspect',
            },
            {
                applocation: 'Passed',
                appmessage: 'Good Condition',
            },
        ],
        _Manufacture: 'VOLVO',
        _PIDs: 'Transmission Fluid Temperature',
        _Group: 'Group 2',
        _Operation: 'Comparison',
        _Condition: 'x>=194,,176<=x && x<=194',
        _ValueType: 'int',
    },
    {
        ouput: [
            {
                applocation: 'Needs Attention',
                appmessage: 'Inspect',
            },
            {
                applocation: 'Passed',
                appmessage: 'Good Condition',
            },
        ],
        _Manufacture: 'CHRYSLER',
        _PIDs: 'Transmission Fluid Temperature',
        _Group: 'Group 2',
        _Operation: 'Comparison',
        _Condition: 'x>=200,,x<=200',
        _ValueType: 'int',
    },
    {
        ouput: [
            {
                applocation: 'Needs Attention',
                appmessage: 'Inspect',
            },
            {
                applocation: 'Passed',
                appmessage: 'Good Condition',
            },
        ],
        _Manufacture: 'JAGUAR LAND ROVER',
        _PIDs: 'Transmission Fluid Temperature',
        _Group: 'Group 2',
        _Operation: 'Comparison',
        _Condition: 'x>=275,,176<=x && x<=221',
        _ValueType: 'int',
    },
    {
        ouput: [
            {
                applocation: 'Needs Attention',
                appmessage: 'Inspect',
            },
            {
                applocation: 'Passed',
                appmessage: 'Good Condition',
            },
        ],
        _Manufacture: 'NISSAN',
        _PIDs: 'Transmission Fluid Temperature',
        _Group: 'Group 2',
        _Operation: 'Comparison',
        _Condition: 'x>=293,,x<293',
        _ValueType: 'int',
    },
    {
        ouput: [
            {
                applocation: 'Needs Attention',
                appmessage: 'Inspect',
            },
            {
                applocation: 'Passed',
                appmessage: 'Good Condition',
            },
        ],
        _Manufacture: 'MITSUBISHI',
        _PIDs: 'Transmission Fluid Temperature',
        _Group: 'Group 2',
        _Operation: 'Comparison',
        _Condition: 'x>176,,58<=x && x<=176',
        _ValueType: 'int',
    },
    {
        ouput: [
            {
                applocation: 'Needs Attention',
                appmessage: 'Inspect',
            },
            {
                applocation: 'Passed',
                appmessage: 'Good Condition',
            },
        ],
        _Manufacture: 'MITSUBISHI',
        _PIDs: 'Transmission Fluid Temperature',
        _Group: 'Group 2',
        _Operation: 'Comparison',
        _Condition: 'x>161,,143<=x && x<=161',
        _Unit: 'COUNT',
        _ValueType: 'int',
    },
];
const TIRE_PRESSURES_DEFINITION = [
    {
        _Pid: '1',
        _Name: 'left front tire pressure',
        _ThresholdName: 'left front tire pressure threshold',
        _StandardName: 'left front tire pressure standard',
        _StatusName: 'left front tire pressure status',
        _OtherName: 'tire 1 pressure',
        _OtherThresholdName: 'tire 1 pressure threshold',
        _OtherStandardName: 'tire 1 pressure standard',
        _OtherStatusName: 'tire 1 pressure status',
    },
    {
        _Pid: '2',
        _Name: 'left rear tire pressure',
        _ThresholdName: 'left rear tire pressure threshold',
        _StandardName: 'left rear tire pressure standard',
        _StatusName: 'left rear tire pressure status',
        _OtherName: 'tire 2 pressure',
        _OtherThresholdName: 'tire 2 pressure threshold',
        _OtherStandardName: 'tire 2 pressure standard',
        _OtherStatusName: 'tire 2 pressure status',
    },
    {
        _Pid: '3',
        _Name: 'right front tire pressure',
        _ThresholdName: 'right front tire pressure threshold',
        _StandardName: 'right front tire pressure standard',
        _StatusName: 'right front tire pressure status',
        _OtherName: 'tire 3 pressure',
        _OtherThresholdName: 'tire 3 pressure threshold',
        _OtherStandardName: 'tire 3 pressure standard',
        _OtherStatusName: 'tire 3 pressure status',
    },
    {
        _Pid: '4',
        _Name: 'right rear tire pressure',
        _ThresholdName: 'right rear tire pressure threshold',
        _StandardName: 'right rear tire pressure standard',
        _StatusName: 'right rear tire pressure status',
        _OtherName: 'tire 4 pressure',
        _OtherThresholdName: 'tire 4 pressure threshold',
        _OtherStandardName: 'tire 4 pressure standard',
        _OtherStatusName: 'tire 4 pressure status',
    },
    {
        _Pid: '5',
        _Name: 'spare tire pressure',
        _ThresholdName: 'spare tire pressure threshold',
        _StandardName: 'spare tire pressure standard',
        _StatusName: 'spare tire pressure status',
        _OtherName: 'tire 5 pressure',
        _OtherThresholdName: 'tire 5 pressure threshold',
        _OtherStandardName: 'tire 5 pressure standard',
        _OtherStatusName: 'tire 5 pressure status',
    },
];


/***/ }),

/***/ 6645:
/*!***********************************************************************!*\
  !*** ./src/app/services/innova-vci-service/src/command/BufferResp.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BufferResp": function() { return /* binding */ BufferResp; }
/* harmony export */ });
class BufferResp {
    constructor(buffer, fLog) {
        this.buffer = buffer;
        this.fLog = fLog;
        this.command = 0;
        this.isCompleted = false;
        this.payload = [];
        this.expectedLength = 0;
        this.error = {};
        this.isCompleted = false;
        this.payload = [];
        this.expectedLength = 0;
        this.error = {};
        //Parse the 1st buffer
        this.command = buffer[1] - 1;
        let type = buffer[0];
        if (type === 0xDD) {
            this.parseFeedback(buffer);
        }
        else if (type === 0xDA) {
            this.parseData(buffer);
        }
        else {
            this.isCompleted = true;
            this.error = { code: 0, message: 'Corrupted packet' };
            this.payload = [];
        }
    }
    logger(t) {
        this.fLog && this.fLog(t);
    }
    translateError(code) {
        let knownErrors = {
            0: "No Error",
            2: "Request without correct response from vehicle",
            3: "Parameter is not matched with spec",
            4: "Message is not supported",
            5: "General error",
            6: "process is not ready , need to retry in next time example retry in 100ms",
            7: "Need to restart write flash present section again",
            8: "Already have it"
        };
        return knownErrors[code] || `Error response with code ${code}`;
    }
    parseFeedback(buffer) {
        let res = buffer[4];
        this.isCompleted = true;
        if (res === 0xC2) {
            let code = buffer[5];
            let message = this.translateError(code);
            this.error = { code, message };
        }
        else if (buffer[1] === 0xcf &&
            buffer[2] === 2 &&
            buffer[3] === 0) {
            this.payload = [buffer[4], buffer[5]];
        }
        else {
            this.payload = [];
        }
    }
    parseData(buffer) {
        if (this.expectedLength === 0) {
            this.expectedLength = buffer[2] + (buffer[3] * 256);
        }
        //Data which include the checksum
        let data = buffer.slice(4, buffer.length);
        this.appendData(data);
    }
    appendData(data) {
        this.payload = this.payload.concat(data);
        //If payload is ready eg = expected-length + checksum
        this.isCompleted = (this.payload.length >= this.expectedLength + 1);
        // console.log(`append response payload: ${this.payload.length}, expected: ${this.expectedLength}`)
        if (this.isCompleted) {
            this.payload = this.payload.slice(0, this.payload.length - 1);
        }
        return this;
    }
}


/***/ }),

/***/ 71818:
/*!*********************************************************************!*\
  !*** ./src/app/services/innova-vci-service/src/command/Response.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Response": function() { return /* binding */ Response; }
/* harmony export */ });
/* harmony import */ var _BufferResp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BufferResp */ 6645);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _utilities_notify_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../utilities/notify.service */ 46607);



class Response {
    constructor(Logger) {
        this.Logger = Logger;
        this.currentResponse = null;
    }
    ensurePayload(payload) {
        return payload && payload.slice(0, payload.length - 1);
    }
    /**
     * Process a given buffer and then returns response if completed, otherwise returns null
     */
    parseResponse(buffer, command) {
        if (!command) {
            return {
                command: 'Unknown',
                error: 'Unexpected data received',
                payload: buffer
            };
        }
        /*
          Fix bug drop package data
        */
        //If there is a pending response, just append data
        if (!this.currentResponse || (this.currentResponse.command !== command.id)) {
            // rule: response command id must equal request command id + 1
            if (!this.currentResponse) {
                this.currentResponse = new _BufferResp__WEBPACK_IMPORTED_MODULE_0__.BufferResp(buffer, (logt) => {
                    this.Logger.log(logt);
                });
                if (buffer && (buffer[1] === 0x81)) { //response in JSON format , Pro34
                    this.currentResponse['isJSON'] = true;
                }
            }
            else if (this.currentResponse && this.currentResponse.isJSON) {
                this.currentResponse.appendData(buffer);
            }
            else {
                // kind of unknown response, just skip it
                return null;
            }
        }
        else if (this.currentResponse.command === command.id) {
            this.currentResponse.appendData(buffer);
        }
        //If response is completed constructed, remove from pending list
        //And returns the response, otherwise returns null
        if (this.currentResponse.isCompleted && this.ensurePayload(this.currentResponse.payload)) {
            let res = this.currentResponse;
            // if ((this.currentResponse.isJSON || command.isVCIMode) && (res.payload.length > 4))
            // {
            //   res.status = res.payload[4];
            //   res.payload = res.payload.slice(5);/*4bytes length , 1byte status , <data>*/
            // }
            this.currentResponse = null;
            //console.log('payload----------------------', bytesToHexString(res.payload))
            return {
                command: res.command,
                error: res.error,
                payload: res.payload,
                status: res.status
            };
        }
        return null;
    }
    /**
     * When error occurs reset the current response
     */
    resetResponse() {
        this.currentResponse = null;
    }
}
Response.ɵfac = function Response_Factory(t) { return new (t || Response)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_utilities_notify_service__WEBPACK_IMPORTED_MODULE_1__.NotifyService)); };
Response.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: Response, factory: Response.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 12843:
/*!****************************************************************************!*\
  !*** ./src/app/services/innova-vci-service/src/command/command.service.ts ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommandService": function() { return /* binding */ CommandService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _utilities_dataParser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../utilities/dataParser */ 81402);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ 202);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _eventParser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./eventParser */ 32963);
/* harmony import */ var _standard_enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../standard/enums */ 13930);
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! util */ 94655);
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_services_innova_tool_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/innova-tool-models */ 92951);
/* harmony import */ var _obd_vcistd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../obd/vcistd */ 48860);
/* harmony import */ var _connectivity_connectivity_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../connectivity/connectivity.service */ 27555);
/* harmony import */ var src_app_services_events_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/events.service */ 80106);
/* harmony import */ var _utilities_notify_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../utilities/notify.service */ 46607);
/* harmony import */ var _Response__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Response */ 71818);

/**
 * @Author: quocdo-macbook
 * @Date:   2020-11-06T22:46:24+07:00
 * @Last modified by:   quocdo-macbook
 * @Last modified time: 2021-12-09T21:14:46+07:00
 */













class CommandService {
    constructor(commService, events, logger, response) {
        this.commService = commService;
        this.events = events;
        this.logger = logger;
        this.response = response;
        this.command = {};
        this.callback = null;
        this.dataReceiver = null;
        this.notifier = null;
        this.timerInterval = null;
        this.timerIntervalTick = 0;
        this.isForceStop = false;
        this.formatType = 0;
        this.BleMsgRx = _standard_enums__WEBPACK_IMPORTED_MODULE_3__.enumDataFrameType.unknowFrame;
        this.callbackNotify = null;
        this.timerTimeout = null;
        this.isProcessing = false;
        this.isConfirmNormal = false;
        this.isFastCancel = false;
        this.bytes = [];
        // private vciEvents: EventEmitter<any> = new EventEmitter<any>()
        this.respData = null;
        this.store_multidata = [];
        this.EventCallBackFunction = new _angular_core__WEBPACK_IMPORTED_MODULE_11__.EventEmitter();
        this.isRegisterCallBack = false;
        this.isFastCancel = false;
        this.events.subscribe(src_app_services_innova_tool_models__WEBPACK_IMPORTED_MODULE_5__.InnovaVCIEvent.INTERRUPT_PROCESS, () => {
            this.ResetListenerData();
            this.ResetResponse();
        });
    }
    // Add by ngoclb
    ResetListenerData() {
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
            this.timerInterval = null;
        }
        this.timerIntervalTick = 0;
        this.command = {};
        this.isProcessing = false;
        this.isFastCancel = false;
    }
    ResetResponse() {
        this.bytes = [];
        this.response.resetResponse();
    }
    EnableFastCancel() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            this.isFastCancel = true;
        });
    }
    ResetFastCancel() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            this.isFastCancel = false;
        });
    }
    receivedData(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const { command, payload } = data;
                let data_load = null;
                let len_data = 0;
                if (command === 'Unknown') {
                    data_load = payload.slice(4);
                }
                else {
                    data_load = payload;
                }
                const [b0, b1, b2, b3, status, ...vcidata] = data_load; //remove four bytes of header when listening
                !(0,util__WEBPACK_IMPORTED_MODULE_4__.isNullOrUndefined)(this.timerInterval) && (yield clearInterval(this.timerInterval));
                this.isProcessing = false; // received status
                if (status === 0x99) //End Process
                 {
                    yield this.events.publish('user:gui_info', { Finish: '' });
                }
                else {
                    yield this.notify_confirmack();
                    if (command === 'Unknown') {
                        length = vcidata.length - 1;
                    }
                    else {
                        length = vcidata.length;
                    }
                    let str = _utilities_dataParser__WEBPACK_IMPORTED_MODULE_0__.bytesToString(vcidata.slice(0, length)).replace('Select and press ENTER', '');
                    //this.logger.log(str);
                    str = str.replace('and press Enter', '');
                    this.logger.log(str);
                    var obj = JSON.parse(str);
                    if (lodash__WEBPACK_IMPORTED_MODULE_1__.isObject(obj)) {
                        yield this.events.publish('user:gui_info', obj);
                    }
                }
            }
            catch (err) {
                this.logger.log('Received GUI:' + err);
            }
            //this.EventCallBackFunction.emit(obj);
        });
    }
    notify_confirmack() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const procid = _utilities_dataParser__WEBPACK_IMPORTED_MODULE_0__.arrayFromNumber(_obd_vcistd__WEBPACK_IMPORTED_MODULE_6__.VCIProg.gui, 2);
                const statid = _utilities_dataParser__WEBPACK_IMPORTED_MODULE_0__.arrayFromNumber(_obd_vcistd__WEBPACK_IMPORTED_MODULE_6__.VCICmd_GUI.gui_host_ack, 1);
                const usbCommandHeader = [0x04, 0x00, 0x00, 0x00, 0x65, 0x00, 0x00, 0x00];
                const usbData = [];
                const cmdinfo = {
                    id: 0x80,
                    data: [].concat(usbCommandHeader, procid, statid, usbData, [0, 0])
                };
                let lencmd = [cmdinfo.data.length];
                const datacmd = [0xAD, cmdinfo.id, ...lencmd, ...cmdinfo.data];
                let cs = this.sumdata(datacmd);
                this.logger.log('Send GUI ACK');
                yield this.commService.writeHex([...datacmd, cs]);
            }
            catch (err) {
                this.logger.log('Gui ACK Error:' + err);
            }
        });
    }
    disconnectBluetoothDevices() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            return this.commService.disconnectBluetoothDevices();
        });
    }
    CloseConnection() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            return this.commService.CloseConnection();
        });
    }
    BluetoothIsConnected() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            return this.commService.BluetoothIsConnected();
        });
    }
    initialize(type) {
        return this.commService.initialize((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            yield this.datareceivehandler(data);
        }), type);
    }
    connectBlueToothDevice(macAddress, cb) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            try {
                let res = yield this.commService.connectBlueToothDevice(macAddress, (data) => {
                    this.datareceivehandler_bluetooth(data);
                }, cb);
                return res;
            }
            catch (err) {
                //alert(err);
                return null; // add by ngoclb
            }
        });
    }
    getBluetoothDevicesList() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            console.log('Run getBluetoothDevicesList: ');
            try {
                return yield this.commService.listBluetoothDevices();
            }
            catch (err) {
                console.log('err: ', err);
                alert(err);
            }
        });
    }
    getBluetoothBondedDevicesList() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            console.log('Run getBluetoothBondedDevicesList: ');
            try {
                return yield this.commService.listBonnedBluetoothDevices();
            }
            catch (err) {
                console.log('getBluetoothBondedDevicesList err: ', err);
                alert(err);
            }
        });
    }
    sumdata(data) {
        let cs = 0;
        (data || []).map(t => {
            cs += t;
            return t;
        });
        cs &= 0xff;
        return cs;
    }
    /**
     * [sendGetMultiData Function handle send and get multidata of Loggign]
     * @param  cmdinfo [cmd info]
     * @return         [data of response]
     */
    sendGetMultiData(cmdinfo) {
        return new Promise((resolve) => (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            try {
                this.ResetListenerData();
                this.ResetResponse();
                let payload = [];
                this.command = {
                    data: cmdinfo.data || [],
                    id: cmdinfo.id,
                    timeout: cmdinfo.timeout || 3000,
                    nretry: cmdinfo.nretry || 3
                };
                let num_retry = 0;
                let lencmd = [this.command.data.length];
                if (this.command.data.length > 0x7f) {
                    lencmd = _utilities_dataParser__WEBPACK_IMPORTED_MODULE_0__.numberToBytes(this.command.data.length, 2);
                    lencmd[0] |= 0x80;
                }
                const datacmd = [0xAD, this.command.id, ...lencmd, ...this.command.data];
                let cs = this.sumdata(datacmd);
                this.isProcessing = true;
                //this.timerIntervalTick = 0
                this.respData = null;
                this.setBleMsgRx(_standard_enums__WEBPACK_IMPORTED_MODULE_3__.enumDataFrameType.unknowFrame);
                this.timerIntervalTick = 0;
                //this.respData.isvalid = false;
                yield this.commService.writeHex([...datacmd, cs]);
                if (this.commService.getSerialType() === _standard_enums__WEBPACK_IMPORTED_MODULE_3__.EnumSerialType.Bluetooth) {
                    this.command.timeout = this.command.timeout * 3;
                }
                this.timerInterval && clearInterval(this.timerInterval);
                this.timerInterval = setInterval(() => (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
                    // this.logger.log('TimerID:' + this.timerInterval);
                    this.timerIntervalTick += 10;
                    if (this.isProcessing == false) {
                        payload = this.respData;
                        // this.command = undefined;
                        // this.logger.log('Clear TimerID:' + this.timerInterval);
                        // clearInterval(this.timerInterval);
                        this.ResetListenerData();
                        this.logger.log('Finish received with processing false (multi)');
                        return resolve({
                            error: undefined,
                            data: payload
                        });
                    }
                    if (this.getBleMsgRx() == _standard_enums__WEBPACK_IMPORTED_MODULE_3__.enumDataFrameType.BusyFrame) {
                        this.timerIntervalTick = 0;
                        this.setBleMsgRx(_standard_enums__WEBPACK_IMPORTED_MODULE_3__.enumDataFrameType.unknowFrame);
                    }
                    if (this.getBleMsgRx() == _standard_enums__WEBPACK_IMPORTED_MODULE_3__.enumDataFrameType.StartMultiData) {
                        this.timerIntervalTick = 0;
                        this.setBleMsgRx(_standard_enums__WEBPACK_IMPORTED_MODULE_3__.enumDataFrameType.unknowFrame);
                    }
                    if (this.getBleMsgRx() == _standard_enums__WEBPACK_IMPORTED_MODULE_3__.enumDataFrameType.LogDataofMultiData) {
                        // this.logger.log('Clear TimerID:' + this.timerInterval);
                        this.timerIntervalTick = 0;
                        //  payload.push(this.respData);
                        this.logger.log('Data Logging package number:' + this.store_multidata.length);
                    }
                    if (this.getBleMsgRx() == _standard_enums__WEBPACK_IMPORTED_MODULE_3__.enumDataFrameType.StopMultiData) {
                        this.timerIntervalTick = 0;
                        this.setBleMsgRx(_standard_enums__WEBPACK_IMPORTED_MODULE_3__.enumDataFrameType.unknowFrame);
                        !(0,util__WEBPACK_IMPORTED_MODULE_4__.isNullOrUndefined)(this.timerInterval) && (yield clearInterval(this.timerInterval));
                        this.isProcessing = false;
                        this.command = undefined;
                        // this.respData.isvalid = false;
                        this.logger.log('Finish received (Multi)');
                        return resolve({
                            error: undefined,
                            data: this.store_multidata
                        });
                    }
                    if (this.timerIntervalTick >= this.command.timeout) {
                        num_retry++;
                        //this.logger.log("time-clock:"+this.timerIntervalTick)
                        this.logger.log("time-setup:" + this.command.timeout);
                        this.logger.log('timeout');
                        if (num_retry >= this.command.nretry) {
                            //   this.command = undefined;
                            //   this.timerIntervalTick=0;
                            //   // this.logger.log('TimerID:' + this.timerInterval);
                            //  !isNullOrUndefined(this.timerInterval) && await clearInterval(this.timerInterval);
                            //  this.isProcessing = false
                            this.ResetListenerData();
                            this.ResetResponse();
                            return resolve({
                                error: { message: 'Time Out , No Response' },
                                data: undefined
                            });
                        }
                        else {
                            yield this.commService.writeHex([...datacmd, cs]);
                            this.timerIntervalTick = 0;
                        }
                    }
                }), 10);
            }
            catch (errsend) {
                return resolve({
                    error: { message: 'sendGetMultiData error ' + errsend.message },
                    data: undefined
                });
            }
        }));
    }
    sendData(cmdinfo) {
        return new Promise((resolve) => (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            try {
                // if(this.isFastCancel)
                // {
                //   this.logger.log('fast cancel, please reset fast cancel')
                //   return resolve( {
                //     data:undefined,
                //     error: { message: 'enable fast cancel, please reset fast cancel'},
                //   })
                // }
                if (this.isProcessing) {
                    this.logger.log('linking busy');
                    return resolve({
                        data: undefined,
                        error: { message: 'Linking is busy , need wait to complete' },
                    });
                }
                this.ResetListenerData();
                this.ResetResponse();
                //this.timerInterval =null;
                this.command = {
                    data: cmdinfo.data || [],
                    id: cmdinfo.id,
                    timeout: cmdinfo.timeout || 3000,
                    nretry: cmdinfo.nretry || 3
                };
                let num_retry = 0;
                // const __clearTimeout = ()=>{
                //   this.logger.log('clear timeout')
                //   if(!!this.timerTimeout)
                //   {
                //   clearTimeout(this.timerTimeout)
                //   this.timerTimeout=null;
                //   }
                // }
                // const ftimeout = () => {
                //   this.logger.log('start timeout '+this.command.timeout)
                //   this.timerTimeout = setTimeout(() => {
                //     this.logger.log('timeout !!!')
                //     this.isProcessing = false;
                //     resolve({
                //       error: { message: 'Time Out , No Response' },
                //       data: undefined
                //     })
                //   }, this.command.timeout)
                // }
                let lencmd = [this.command.data.length];
                if (this.command.data.length > 0x7f) {
                    lencmd = _utilities_dataParser__WEBPACK_IMPORTED_MODULE_0__.numberToBytes(this.command.data.length, 2);
                    lencmd[0] |= 0x80;
                }
                const datacmd = [0xAD, this.command.id, ...lencmd, ...this.command.data];
                let cs = this.sumdata(datacmd);
                this.isProcessing = true;
                //this.timerIntervalTick = 0
                this.respData = null;
                this.setBleMsgRx(_standard_enums__WEBPACK_IMPORTED_MODULE_3__.enumDataFrameType.unknowFrame);
                this.timerIntervalTick = 0;
                //this.respData.isvalid = false;
                yield this.commService.writeHex([...datacmd, cs]);
                if (this.commService.getSerialType() === _standard_enums__WEBPACK_IMPORTED_MODULE_3__.EnumSerialType.Bluetooth) {
                    // this.command.nretry=this.command.nretry*2;
                    this.command.timeout = this.command.timeout * 2;
                }
                // const fGetData = async function():Promise<any>{
                //   this.timerIntervalTick +=10;
                //   if(this.getBleMsgRx() == enumDataFrameType.BusyFrame)
                //   {
                //     this.timerIntervalTick=0;
                //     this.setBleMsgRx(enumDataFrameType.unknowFrame);
                //   }
                //   if(!isNullOrUndefined(this.respData) && this.respData.isvalid)
                //   {
                //     // !isNullOrUndefined(this.timerInterval) && clearInterval(this.timerInterval);
                //     const {payload } = this.respData
                //     this.isProcessing = false;
                //     this.command = undefined;
                //     // this.respData.isvalid = false;
                //     this.logger.log('Finish received')
                //     return {
                //       error: undefined,
                //       data: payload
                //     }
                //   }
                //   if(this.timerIntervalTick >= this.command.timeout)
                //   {
                //     num_retry++;
                //     //this.logger.log("time-clock:"+this.timerIntervalTick)
                //     this.logger.log("time-setup:"+this.command.timeout)
                //     this.logger.log('timeout')
                //     if(num_retry == this.command.nretry)
                //     {
                //       this.command = undefined;
                //       this.timerIntervalTick=0;
                //      // !isNullOrUndefined(this.timerInterval) && clearInterval(this.timerInterval);
                //      this.isProcessing = false
                //       return {
                //         error: { message: 'Time Out , No Response' },
                //         data: undefined
                //       }
                //     }
                //     else
                //     {
                //       await this.commService.writeHex([...datacmd, cs])
                //       this.timerIntervalTick=0;
                //     }
                //
                //
                //   }
                //   setTimeout(fGetData,10);
                // }
                // const data =await fGetData();
                // return resolve(data);
                this.timerInterval && clearInterval(this.timerInterval);
                this.timerInterval = setInterval(() => (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
                    // this.logger.log('TimerID:' + this.timerInterval);
                    this.timerIntervalTick += 10;
                    if (this.isProcessing == false) {
                        const { payload = null } = this.respData;
                        // this.command = undefined;
                        // this.logger.log('Clear TimerID:' + this.timerInterval);
                        // clearInterval(this.timerInterval);
                        this.ResetListenerData();
                        this.logger.log('Finish received with processing false');
                        return resolve({
                            error: undefined,
                            data: payload
                        });
                    }
                    if (this.getBleMsgRx() == _standard_enums__WEBPACK_IMPORTED_MODULE_3__.enumDataFrameType.BusyFrame) {
                        this.timerIntervalTick = 0;
                        this.setBleMsgRx(_standard_enums__WEBPACK_IMPORTED_MODULE_3__.enumDataFrameType.unknowFrame);
                    }
                    if (!(0,util__WEBPACK_IMPORTED_MODULE_4__.isNullOrUndefined)(this.respData) && this.respData.isvalid) {
                        // this.logger.log('Clear TimerID:' + this.timerInterval);
                        // !isNullOrUndefined(this.timerInterval) && await clearInterval(this.timerInterval);
                        const { payload } = this.respData;
                        // this.isProcessing = false;
                        // this.command = undefined;
                        // this.respData.isvalid = false;
                        this.ResetListenerData();
                        this.logger.log('Finish received');
                        return resolve({
                            error: undefined,
                            data: payload
                        });
                    }
                    // if(this.isConfirmNormal)
                    // {
                    //   !isNullOrUndefined(this.timerInterval) && clearInterval(this.timerInterval);
                    //   //const {payload } = this.respData
                    //   this.isProcessing = false;
                    //   this.command = undefined;
                    //   this.isConfirmNormal = false;
                    //   this.logger.log('Return Normal Status')
                    //   return resolve({
                    //     error: undefined,
                    //     data: []
                    //   })
                    // }
                    if (this.timerIntervalTick >= this.command.timeout) {
                        // var isOpenPort = await this.commService.blIsCheckOpenPort();
                        // if(isOpenPort)
                        // {
                        //   await this.commService.CloseConnection().then(async ()=>{
                        //     await this.commService.reinitlialize();
                        //   })
                        // }
                        num_retry++;
                        //this.logger.log("time-clock:"+this.timerIntervalTick)
                        this.logger.log("time-setup:" + this.command.timeout);
                        this.logger.log('timeout commandId=' + JSON.stringify(cmdinfo));
                        if (num_retry >= this.command.nretry) {
                            //   this.command = undefined;
                            //   this.timerIntervalTick=0;
                            //   // this.logger.log('TimerID:' + this.timerInterval);
                            //  !isNullOrUndefined(this.timerInterval) && clearInterval(this.timerInterval);
                            //  this.isProcessing = false
                            this.ResetListenerData();
                            this.ResetResponse();
                            return resolve({
                                error: { message: 'Time Out , No Response' },
                                data: undefined
                            });
                        }
                        else {
                            yield this.commService.writeHex([...datacmd, cs]);
                            this.timerIntervalTick = 0;
                        }
                    }
                }), 10);
                // // ftimeout()
                // this.vciEvents.subscribe((respdata) => {
                //   if(!isObject(respdata))
                //     return;
                //   let {isLinkVCI, isstarttimeout, payload } = respdata
                //   if(!!!isLinkVCI)
                //     return;
                //   __clearTimeout();
                //   if (!!isstarttimeout) {
                //     // __clearTimeout();
                //     ftimeout()
                //     return;
                //   }
                //   this.logger.log(JSON.stringify(respdata))
                //   this.isProcessing = false
                //   return resolve({
                //     data: payload,
                //     error:undefined
                //   })
                // })
            }
            catch (errsend) {
                this.isProcessing = false;
                return resolve({
                    error: { message: 'sendData error ' + errsend.message },
                    data: undefined
                });
            }
        }));
    }
    testWrite() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            yield this.sendData({ id: 0xE1, timeout: 100, nretry: 0 });
            return true;
        });
    }
    isConfirmNormalStatus(bytes) {
        if ((0,util__WEBPACK_IMPORTED_MODULE_4__.isNullOrUndefined)(this.command)) {
            return false;
        }
        const { id = 1 } = this.command;
        return ((bytes[0] === 0xda || bytes[0] === 0xdd) &&
            bytes[1] === id + 1 &&
            bytes[2] === 7 &&
            bytes[3] === 0 &&
            bytes[4] === 2 &&
            bytes[5] === 0 &&
            bytes[6] === 0 &&
            bytes[7] === 0 &&
            bytes[8] === 0xaa &&
            bytes[9] === 0 &&
            bytes[10] === 0 &&
            bytes[11] === 14);
    }
    isFrameACK(bytes) {
        // const { command = {} } = this;
        if ((0,util__WEBPACK_IMPORTED_MODULE_4__.isNullOrUndefined)(this.command)) {
            return false;
        }
        const { id = 1 } = this.command;
        return ((bytes[0] === 0xda || bytes[0] === 0xdd) &&
            bytes[1] === id + 1 &&
            bytes[2] === 4 && /*Hung Vo fix wrong frame ACK*/
            bytes[3] === 0 &&
            bytes[4] === 0xc4 &&
            bytes[5] === 0 &&
            bytes[6] <= 48 &&
            bytes[7] === 0);
    }
    isFrameBusy(bytes) {
        const busyFrame = [0xdd, 0xc3, 0x02, 0x00, 0x00, 0x00, 0xa2];
        const busyFrame2 = [0xda, 0xc3, 0x02, 0x00, 0x00, 0x00, 0x9f];
        if (bytes.length > 7) {
            return (lodash__WEBPACK_IMPORTED_MODULE_1__.isEqual(bytes.slice(0, 6), busyFrame) || lodash__WEBPACK_IMPORTED_MODULE_1__.isEqual(bytes.slice(0, 6), busyFrame2));
        }
        else if (bytes.length == 7) {
            return (lodash__WEBPACK_IMPORTED_MODULE_1__.isEqual(bytes, busyFrame) || lodash__WEBPACK_IMPORTED_MODULE_1__.isEqual(bytes, busyFrame2));
        }
    }
    isRequestACK(bytes) {
        const { command = {} } = this;
        const { id = 1 } = command;
        return bytes.length === 7 && (bytes[0] === 0xda || bytes[0] === 0xdd) && bytes[1] === id + 1 && bytes[4] === 0xc5;
    }
    isStartMultiData(bytes) {
        const { command = {} } = this;
        return (bytes[0] === 0xda || bytes[0] === 0xdd) && (bytes[1] === 0x5B) && bytes[4] === 0x01;
    }
    isStopMultiData(bytes) {
        const { command = {} } = this;
        return (bytes[0] === 0xda || bytes[0] === 0xdd) && (bytes[1] === 0x5B) && bytes[4] === 0x00;
    }
    isDataofMulti(bytes) {
        const { command = {} } = this;
        return (bytes[0] === 0xda || bytes[0] === 0xdd) && (bytes[1] === 0x5B) && bytes[4] === 0x02;
    }
    setBleMsgRx(type) {
        this.BleMsgRx = type; //BLEMsg.unknowFrame;
    }
    getBleMsgRx() {
        return this.BleMsgRx;
    }
    isNotifyPacket(bytes) {
        return bytes[0] === 0xda && bytes[1] === 0xc1;
    }
    isStreamOEMPidData(bytes) {
        return bytes[0] === 0xda && bytes[1] === 0x76;
    }
    __onNotifyEvents(eventId, data) {
        if (this.callbackNotify == undefined)
            return;
        const dataEvent = (0,_eventParser__WEBPACK_IMPORTED_MODULE_2__.parserNotifyEvents)(eventId, data);
        this.callbackNotify(eventId, dataEvent);
    }
    __resetTimerTimeout() {
        // !!this.timerTimeout && this.vciEvents.emit({isLinkVCI:true, isstarttimeout: true })
    }
    datareceivehandler(dataarray) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            try {
                if ((0,util__WEBPACK_IMPORTED_MODULE_4__.isNullOrUndefined)(dataarray) || dataarray.length == 0) {
                    return;
                }
                //const bytes = [];
                var bytes_temp = [];
                (dataarray || []).map(xx => {
                    this.bytes.push(xx);
                    return xx;
                });
                if (this.bytes[0] != 0xDA) {
                    // not valid response
                    this.logger.log("not valid response");
                    this.bytes = [];
                    return;
                }
                let lendata = (this.bytes[2] + (this.bytes[3] << 8)) + 5;
                //this.logger.log("len expect"+lendata)
                if ((this.bytes.length) < lendata) {
                    // ngoclb: display log in other way
                    this.logger.logComRx(`${_utilities_dataParser__WEBPACK_IMPORTED_MODULE_0__.bytesToHexString(dataarray.slice(0, 22))}${dataarray.length > 22 ? 'xxx' : ''} ...${this.bytes.length}/${lendata}`);
                    return;
                }
                else {
                    // this.logger.log("len data"+(this.bytes.length))
                    //  this.logger.log(this.bytes)
                    this.logger.log('Finish getting data');
                    bytes_temp = this.bytes;
                    // ngoclb: display log in other way
                    this.logger.logComRx(`${_utilities_dataParser__WEBPACK_IMPORTED_MODULE_0__.bytesToHexString(this.bytes.slice(-1))} [CS]`);
                    this.logger.logComRx(`${_utilities_dataParser__WEBPACK_IMPORTED_MODULE_0__.bytesToHexString(bytes_temp)} [${bytes_temp.length} bytes]`, true);
                    this.bytes = [];
                }
                if (this.isFrameBusy(bytes_temp)) {
                    this.logger.logComRx('Busy');
                    this.timerIntervalTick = 0;
                    if (this.isRegisterCallBack == true && this.isConfirmNormal == true) {
                        yield this.events.publish('user:gui_info', { KeepAlive: '' });
                        this.logger.log('KeepAlive GUI');
                    }
                    this.setBleMsgRx(_standard_enums__WEBPACK_IMPORTED_MODULE_3__.enumDataFrameType.BusyFrame);
                    return;
                }
                if (this.isFrameACK(bytes_temp)) {
                    this.setBleMsgRx(_standard_enums__WEBPACK_IMPORTED_MODULE_3__.enumDataFrameType.RespFrameACK);
                    this.logger.logComRx('FrameACK');
                    return;
                }
                if (this.isStartMultiData(bytes_temp)) {
                    this.setBleMsgRx(_standard_enums__WEBPACK_IMPORTED_MODULE_3__.enumDataFrameType.StartMultiData);
                    this.store_multidata = [];
                    this.logger.logComRx('StartMultiData');
                    return;
                }
                if (this.isStopMultiData(bytes_temp)) {
                    this.setBleMsgRx(_standard_enums__WEBPACK_IMPORTED_MODULE_3__.enumDataFrameType.StopMultiData);
                    this.logger.logComRx('StopMultiData');
                    return;
                }
                if (this.isRequestACK(bytes_temp)) {
                    this.setBleMsgRx(_standard_enums__WEBPACK_IMPORTED_MODULE_3__.enumDataFrameType.ReqFrameACK);
                    this.logger.logComRx('RequestACK');
                    return;
                }
                // check for notify packet
                if (this.isNotifyPacket(bytes_temp)) {
                    const lenNotifyExpected = bytes_temp[2] + (bytes_temp[3] << 8);
                    const _isDone = ((lenNotifyExpected + 5) === bytes_temp.length);
                    this.logger.log('this.isNotifyPacket(bytes_temp)');
                    this.notifyData = {
                        id: bytes_temp[4],
                        expectedLen: lenNotifyExpected,
                        payload: lodash__WEBPACK_IMPORTED_MODULE_1__.slice(bytes_temp, 5, bytes_temp.length - 1),
                        isDone: _isDone,
                        waiting: !_isDone
                    };
                }
                else if (this.notifyData && this.notifyData.waiting) {
                    this.notifyData.payload = (this.notifyData.payload || []).concat(bytes_temp);
                    this.logger.logComRx('notifyData.payload.length' + this.notifyData.payload.length);
                    this.logger.logComRx('notifyData.expectedLen' + this.notifyData.expectedLen);
                    this.logger.log('this.notifyData && this.notifyData.waiting');
                    if ((this.notifyData.payload.length + 1) >= this.notifyData.expectedLen) {
                        this.notifyData.isDone = true;
                    }
                }
                // else
                // {
                //   this.logger.log('XXXXXXX');
                // }
                if (this.notifyData && this.notifyData.isDone) {
                    this.logger.log('this.notifyData && this.notifyData.isDone');
                    this.__onNotifyEvents(this.notifyData.id, this.notifyData.payload);
                    this.setBleMsgRx(_standard_enums__WEBPACK_IMPORTED_MODULE_3__.enumDataFrameType.NotifyFrame);
                    this.__resetTimerTimeout();
                    this.notifyData = null;
                    return;
                }
                if (this.isConfirmNormalStatus(bytes_temp)) {
                    if (this.isConfirmNormal || this.isRegisterCallBack == false) {
                        this.isConfirmNormal = false;
                    }
                    this.logger.log('Confirm Normal Status');
                }
                this.response.resetResponse();
                let resp = this.response.parseResponse(bytes_temp, this.command);
                //received response before timeout
                if (resp) {
                    this.setBleMsgRx(_standard_enums__WEBPACK_IMPORTED_MODULE_3__.enumDataFrameType.NotifyFrame);
                }
                else if (this.command) {
                    this.__resetTimerTimeout();
                }
                if (resp) {
                    // this.vciEvents.emit({isLinkVCI:true,...resp});
                    if (this.isDataofMulti(bytes_temp)) {
                        this.setBleMsgRx(_standard_enums__WEBPACK_IMPORTED_MODULE_3__.enumDataFrameType.LogDataofMultiData);
                        this.logger.logComRx('Data of Multi Data with chunk index:' + bytes_temp[5]);
                        //  let resp_multidata =
                        this.store_multidata.push({
                            index: bytes_temp[5],
                            payload: bytes_temp.slice(6, bytes_temp.length - 1)
                        });
                    }
                    this.logger.log('Got Valid Response');
                    this.respData = Object.assign(Object.assign({}, resp), { isvalid: true });
                    this.response.resetResponse();
                    if (this.isRegisterCallBack == true && this.isConfirmNormal == true) {
                        // if(!isNullOrUndefined(this.EventCallBackFunction))
                        // {
                        //this.isConfirmNormal = false;
                        yield this.receivedData(this.respData);
                        // }
                    }
                }
                if (this.isConfirmNormalStatus(bytes_temp)) {
                    if (this.isRegisterCallBack) {
                        this.isConfirmNormal = true;
                    }
                    this.logger.log('Confirm Normal');
                    // this.timerIntervalTick =0;
                    // return;
                }
            }
            catch (err) {
                this.bytes = [];
                this.logger.log('datareceivehandler ' + err);
                throw new Error(err);
            }
        });
    }
    datareceivehandler_bluetooth(dataarray) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            try {
                if ((0,util__WEBPACK_IMPORTED_MODULE_4__.isNullOrUndefined)(dataarray) || dataarray.length == 0) {
                    return;
                }
                //const bytes = [];
                var bytes_temp = [];
                (dataarray || []).map(xx => {
                    this.bytes.push(xx);
                    return xx;
                });
                if (this.bytes.length <= 2) {
                    //this.logger.log("received len: "+this.bytes.length)
                    return;
                }
                let lendata = (this.bytes[2] + (this.bytes[3] << 8)) + 5;
                //this.logger.log("len expect"+lendata)
                if ((this.bytes.length) < lendata) {
                    //this.logger.log("len data"+(this.bytes.length))
                    //this.logger.log("waiting enough data")
                    return;
                }
                else {
                    this.logger.log("Received Valid:" + (lendata) + " bytes");
                    //this.logger.log(this.bytes)
                    //this.logger.log('Finish getting data');
                    //  this.logger.log('buffer:' + DataParser.bytesToHexString(this.bytes));
                    bytes_temp = this.bytes.slice(0, lendata);
                    this.bytes = this.bytes.slice(lendata);
                    this.logger.log('RX:' + _utilities_dataParser__WEBPACK_IMPORTED_MODULE_0__.bytesToHexString(bytes_temp));
                    //this.logger.log('buf:' + DataParser.bytesToHexString(this.bytes));
                    // if(this.commService.getSerialType() == EnumSerialType.Serial_USB)
                    // {
                    //   this.bytes =[];
                    // }
                }
                if (this.isFrameBusy(bytes_temp)) {
                    this.logger.logComRx('Busy');
                    this.logger.log('Busy');
                    this.timerIntervalTick = 0;
                    this.setBleMsgRx(_standard_enums__WEBPACK_IMPORTED_MODULE_3__.enumDataFrameType.BusyFrame);
                    if (this.isRegisterCallBack == true && this.isConfirmNormal == true) {
                        yield this.events.publish('user:gui_info', { KeepAlive: '' });
                        this.logger.log('KeepAlive GUI');
                    }
                    return;
                }
                if (this.isFrameACK(bytes_temp)) {
                    this.setBleMsgRx(_standard_enums__WEBPACK_IMPORTED_MODULE_3__.enumDataFrameType.RespFrameACK);
                    this.logger.logComRx('FrameACK');
                    return;
                }
                if (this.isRequestACK(bytes_temp)) {
                    this.setBleMsgRx(_standard_enums__WEBPACK_IMPORTED_MODULE_3__.enumDataFrameType.ReqFrameACK);
                    this.logger.logComRx('RequestACK');
                    return;
                }
                // check for notify packet
                if (this.isNotifyPacket(bytes_temp)) {
                    const lenNotifyExpected = bytes_temp[2] + (bytes_temp[3] << 8);
                    const _isDone = ((lenNotifyExpected + 5) === bytes_temp.length);
                    this.logger.log('this.isNotifyPacket(bytes_temp)');
                    this.notifyData = {
                        id: bytes_temp[4],
                        expectedLen: lenNotifyExpected,
                        payload: lodash__WEBPACK_IMPORTED_MODULE_1__.slice(bytes_temp, 5, bytes_temp.length - 1),
                        isDone: _isDone,
                        waiting: !_isDone
                    };
                }
                else if (this.notifyData && this.notifyData.waiting) {
                    this.notifyData.payload = (this.notifyData.payload || []).concat(bytes_temp);
                    this.logger.logComRx('notifyData.payload.length' + this.notifyData.payload.length);
                    this.logger.logComRx('notifyData.expectedLen' + this.notifyData.expectedLen);
                    this.logger.log('this.notifyData && this.notifyData.waiting');
                    if ((this.notifyData.payload.length + 1) >= this.notifyData.expectedLen) {
                        this.notifyData.isDone = true;
                    }
                }
                // else
                // {
                //   this.logger.log('XXXXXXX');
                // }
                if (this.notifyData && this.notifyData.isDone) {
                    this.logger.log('this.notifyData && this.notifyData.isDone');
                    this.__onNotifyEvents(this.notifyData.id, this.notifyData.payload);
                    this.setBleMsgRx(_standard_enums__WEBPACK_IMPORTED_MODULE_3__.enumDataFrameType.NotifyFrame);
                    this.__resetTimerTimeout();
                    this.notifyData = null;
                    return;
                }
                if (this.isConfirmNormalStatus(bytes_temp)) {
                    if (this.isConfirmNormal || this.isRegisterCallBack == false) {
                        this.isConfirmNormal = false;
                    }
                    this.logger.log("Confirm Normal Status");
                }
                this.response.resetResponse();
                let resp = this.response.parseResponse(bytes_temp, this.command);
                //received response before timeout
                if (resp) {
                    this.setBleMsgRx(_standard_enums__WEBPACK_IMPORTED_MODULE_3__.enumDataFrameType.NotifyFrame);
                }
                else if (this.command) {
                    this.__resetTimerTimeout();
                }
                if (resp) {
                    // this.vciEvents.emit({isLinkVCI:true,...resp});
                    //this.logger.log('lenght response'+bytes_temp.length);
                    this.respData = Object.assign(Object.assign({}, resp), { isvalid: true });
                    this.response.resetResponse();
                    if (this.isRegisterCallBack == true && this.isConfirmNormal == true) {
                        // if(!isNullOrUndefined(this.EventCallBackFunction))
                        // {
                        //this.isConfirmNormal = false;
                        yield this.receivedData(this.respData);
                        // }
                    }
                }
                if (this.isConfirmNormalStatus(bytes_temp)) {
                    if (this.isRegisterCallBack) {
                        this.isConfirmNormal = true;
                    }
                    this.logger.logComRx('Confirm Normal Status');
                    // this.timerIntervalTick =0;
                    // return;
                }
            }
            catch (err) {
                this.bytes = [];
                this.logger.log('datareceivehandler ' + err);
            }
        });
    }
}
CommandService.ɵfac = function CommandService_Factory(t) { return new (t || CommandService)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_connectivity_connectivity_service__WEBPACK_IMPORTED_MODULE_7__.ConnectivityService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](src_app_services_events_service__WEBPACK_IMPORTED_MODULE_8__.Events), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_utilities_notify_service__WEBPACK_IMPORTED_MODULE_9__.NotifyService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_Response__WEBPACK_IMPORTED_MODULE_10__.Response)); };
CommandService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjectable"]({ token: CommandService, factory: CommandService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 32963:
/*!************************************************************************!*\
  !*** ./src/app/services/innova-vci-service/src/command/eventParser.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "parserNotifyEvents": function() { return /* binding */ parserNotifyEvents; }
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 202);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utilities_dataParser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../utilities/dataParser */ 81402);
/* harmony import */ var _standard_enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../standard/enums */ 13930);



function parserNotifyEvents(eventId, data) {
    try {
        const dataRet = [];
        const parseEventData = (bytedatas, isUnsigned = true) => {
            try {
                return _utilities_dataParser__WEBPACK_IMPORTED_MODULE_1__.arrayToNumber(bytedatas, 4, false, isUnsigned) / 100;
            }
            catch (errorexception) {
                return 0.0;
            }
        };
        // let eventData = { data: undefined, unit: undefined, name: undefined, value: undefined }
        if (eventId === _standard_enums__WEBPACK_IMPORTED_MODULE_2__.ENUM_EVENTIDTYPES.Engine_status) {
            dataRet.push({
                eventId,
                value: data[0],
                name: _standard_enums__WEBPACK_IMPORTED_MODULE_2__.ENUM_EVENTTYPEDATA.Ignition,
                data: `'${data[0] ? 'ON' : 'OFF'}`
            });
            return dataRet;
        }
        else if (eventId === _standard_enums__WEBPACK_IMPORTED_MODULE_2__.ENUM_EVENTIDTYPES.Battery_warning) {
            dataRet.push({
                eventId,
                value: data[0],
                name: _standard_enums__WEBPACK_IMPORTED_MODULE_2__.ENUM_EVENTTYPEDATA.Battery_Warning,
                data: `{${data[0] ? 'Low' : 'Normal'}}`
            });
            return dataRet;
        }
        else if (eventId === _standard_enums__WEBPACK_IMPORTED_MODULE_2__.ENUM_EVENTIDTYPES.Fuel_Economy) {
            let a = lodash__WEBPACK_IMPORTED_MODULE_0__.slice(data, 0, 4);
            a = parseEventData(a);
            dataRet.push({
                eventId,
                value: a,
                name: _standard_enums__WEBPACK_IMPORTED_MODULE_2__.ENUM_EVENTTYPEDATA.Current_Fuel_Consumption,
                data: `${a.toFixed(2)}`,
                unit: 'L/100Km',
            });
            a = lodash__WEBPACK_IMPORTED_MODULE_0__.slice(data, 4, 8);
            a = parseEventData(a);
            dataRet.push({
                eventId,
                value: a,
                name: _standard_enums__WEBPACK_IMPORTED_MODULE_2__.ENUM_EVENTTYPEDATA.Avarage_Fuel_Consumption,
                data: `${a.toFixed(2)}`,
                unit: 'L/100Km'
            });
            return dataRet;
        }
        else if (eventId === _standard_enums__WEBPACK_IMPORTED_MODULE_2__.ENUM_EVENTIDTYPES.Fuel_Economy__Other_0c) {
            //hh:mm:ss
            /*
            000024
            84030000
            00000000
            */
            const timeElapse = lodash__WEBPACK_IMPORTED_MODULE_0__.slice(data, 0, 3); //3
            const everageSpeed = lodash__WEBPACK_IMPORTED_MODULE_0__.slice(data, 3, 7); //4
            const distance = lodash__WEBPACK_IMPORTED_MODULE_0__.slice(data, 7, 11); //4
            // let listdata = _.chunk(timeElapse, 1)
            // listdata = listdata.map(t => {
            //   return DataUtils.arrayToNumber(t, 2, false)
            // })
            dataRet.push({
                eventId,
                value: timeElapse,
                data: `${timeElapse[0].toString(16)}:${timeElapse[1].toString(16)}:${timeElapse[2].toString(16)}`,
                name: _standard_enums__WEBPACK_IMPORTED_MODULE_2__.ENUM_EVENTTYPEDATA.Time_Elapse
            });
            dataRet.push({
                eventId,
                value: everageSpeed,
                data: `${parseEventData(everageSpeed).toFixed(2)}`,
                name: _standard_enums__WEBPACK_IMPORTED_MODULE_2__.ENUM_EVENTTYPEDATA.Average_Speed,
                unit: 'Km/h'
            });
            dataRet.push({
                eventId,
                value: distance,
                data: `${parseEventData(distance).toFixed(2)}`,
                name: _standard_enums__WEBPACK_IMPORTED_MODULE_2__.ENUM_EVENTTYPEDATA.Distance,
                unit: 'Km'
            });
            return dataRet;
        }
        else if (eventId === _standard_enums__WEBPACK_IMPORTED_MODULE_2__.ENUM_EVENTIDTYPES.Fuel_Economy__Other_0d) {
            let a = lodash__WEBPACK_IMPORTED_MODULE_0__.slice(data, 0, 4);
            a = parseEventData(a);
            dataRet.push({
                eventId,
                value: a,
                name: _standard_enums__WEBPACK_IMPORTED_MODULE_2__.ENUM_EVENTTYPEDATA.Fuel_Usage,
                data: `${a.toFixed(2)}`,
                unit: 'L'
            });
            a = lodash__WEBPACK_IMPORTED_MODULE_0__.slice(data, 4, 8);
            a = parseEventData(a);
            dataRet.push({
                eventId,
                value: a,
                name: _standard_enums__WEBPACK_IMPORTED_MODULE_2__.ENUM_EVENTTYPEDATA.Fuel_Trip,
                data: `${a.toFixed(2)}`,
                unit: 'L/100Km',
            });
            return dataRet;
        }
        else if (eventId === _standard_enums__WEBPACK_IMPORTED_MODULE_2__.ENUM_EVENTIDTYPES.Fuel_Economy__Other_0e) {
            let a = lodash__WEBPACK_IMPORTED_MODULE_0__.slice(data, 0, 4);
            a = parseEventData(a);
            dataRet.push({
                eventId,
                value: a,
                name: _standard_enums__WEBPACK_IMPORTED_MODULE_2__.ENUM_EVENTTYPEDATA.Fuel_Rate,
                data: `${a.toFixed(2)}`,
                unit: 'L/h'
            });
            a = lodash__WEBPACK_IMPORTED_MODULE_0__.slice(data, 4, 8);
            a = parseEventData(a);
            dataRet.push({
                eventId,
                value: a,
                name: _standard_enums__WEBPACK_IMPORTED_MODULE_2__.ENUM_EVENTTYPEDATA.Distance_to_Empty,
                data: `${a.toFixed(2)}`,
                unit: 'Km',
            });
            return dataRet;
        }
        else if (eventId === _standard_enums__WEBPACK_IMPORTED_MODULE_2__.ENUM_EVENTIDTYPES.Fuel_Economy__Other_0f) {
            const fuelStatusParser = (xxx) => {
                if (xxx === 1) {
                    return 'ECO';
                }
                if (xxx === 0) {
                    return 'NON-ECO';
                }
                return 'Not Supported';
            };
            dataRet.push({
                eventId,
                value: data[0],
                name: _standard_enums__WEBPACK_IMPORTED_MODULE_2__.ENUM_EVENTTYPEDATA.Current_Fuel_Consumption_Status,
                data: `${fuelStatusParser(data[0])}`
            });
            dataRet.push({
                eventId,
                value: data[1],
                name: _standard_enums__WEBPACK_IMPORTED_MODULE_2__.ENUM_EVENTTYPEDATA.Average_Fuel_Consumption_Status,
                data: `${fuelStatusParser(data[1])}`
            });
            let a = lodash__WEBPACK_IMPORTED_MODULE_0__.slice(data, 2, 6);
            a = parseEventData(a);
            dataRet.push({
                eventId,
                value: a,
                name: _standard_enums__WEBPACK_IMPORTED_MODULE_2__.ENUM_EVENTTYPEDATA.Fuel_Tank_Size,
                data: `${a.toFixed(2)}`,
                unit: 'L'
            });
            a = lodash__WEBPACK_IMPORTED_MODULE_0__.slice(data, 6, 10);
            a = parseEventData(a);
            dataRet.push({
                eventId,
                value: a,
                name: _standard_enums__WEBPACK_IMPORTED_MODULE_2__.ENUM_EVENTTYPEDATA.Fuel_Volume_Remaining,
                data: `${a.toFixed(2)}`,
                unit: 'L',
            });
            return dataRet;
        }
        else if (eventId === _standard_enums__WEBPACK_IMPORTED_MODULE_2__.ENUM_EVENTIDTYPES.Acceleration) {
            let a = lodash__WEBPACK_IMPORTED_MODULE_0__.slice(data, 0, 4);
            a = parseEventData(a, false);
            dataRet.push({
                eventId,
                value: a,
                name: _standard_enums__WEBPACK_IMPORTED_MODULE_2__.ENUM_EVENTTYPEDATA.Acceleration,
                data: `${a.toFixed(2)}`,
                unit: 'm/s2'
            });
            return dataRet;
        }
        else if (eventId === _standard_enums__WEBPACK_IMPORTED_MODULE_2__.ENUM_EVENTIDTYPES.Cooling_water_temperature_high) {
            dataRet.push({
                eventId,
                value: data[0],
                name: _standard_enums__WEBPACK_IMPORTED_MODULE_2__.ENUM_EVENTTYPEDATA.Cooling_Water_Temperature_High,
                data: `${data[0] ? 'High' : 'Normal'}`
            });
            return dataRet;
        }
        else if (eventId === _standard_enums__WEBPACK_IMPORTED_MODULE_2__.ENUM_EVENTIDTYPES.Battery_Health) {
            const getBatteryHealthStatus = (a) => {
                if (a === 0) {
                    return 'GOOD';
                }
                if (a === 1) {
                    return 'NORMAL';
                }
                if (a === 2) {
                    return 'WARNING';
                }
                if (a === 3) {
                    return 'BAD';
                }
                if (a === 4) {
                    return 'NOT DETECT';
                }
                if (a === 4) {
                    return 'LOW VOLTAGE';
                }
                return 'Unknow';
            };
            dataRet.push({
                eventId,
                value: data[0],
                name: _standard_enums__WEBPACK_IMPORTED_MODULE_2__.ENUM_EVENTTYPEDATA.Battery_Health,
                data: getBatteryHealthStatus(data[0])
            });
            return dataRet;
        }
        else if (eventId === _standard_enums__WEBPACK_IMPORTED_MODULE_2__.ENUM_EVENTIDTYPES.Distance_Since_start) {
            // eventData.name :  'Distance Since Start'
            let a = lodash__WEBPACK_IMPORTED_MODULE_0__.slice(data, 0, 4);
            a = parseEventData(a);
            dataRet.push({
                eventId,
                value: a,
                data: `${a.toFixed(2)}`,
                unit: 'km',
                name: _standard_enums__WEBPACK_IMPORTED_MODULE_2__.ENUM_EVENTTYPEDATA.Distance_Since_Start
            });
            return dataRet;
        }
        else if (eventId === _standard_enums__WEBPACK_IMPORTED_MODULE_2__.ENUM_EVENTIDTYPES.OEMPidNotify) {
            const numberPid = data.shift();
            const listPids = lodash__WEBPACK_IMPORTED_MODULE_0__.chunk(data, 10);
            // const retPidVal = { data: null, raw: [{ pid: activePid, buff: null }] }
            const pidRetVal = [];
            listPids.forEach(oemPiddata => {
                pidRetVal.push({
                    pid: (oemPiddata[0] + (oemPiddata[1] << 8)),
                    buff: oemPiddata.slice(2)
                });
            });
            dataRet.push({
                eventId,
                value: data,
                data: {
                    data: null, raw: pidRetVal,
                    unit: '',
                    name: _standard_enums__WEBPACK_IMPORTED_MODULE_2__.ENUM_EVENTTYPEDATA.OemPidData
                }
            });
            return dataRet;
        }
        else if (eventId === _standard_enums__WEBPACK_IMPORTED_MODULE_2__.ENUM_EVENTIDTYPES.Fuel_Level_Low) {
            dataRet.push({
                eventId,
                value: data[0],
                name: _standard_enums__WEBPACK_IMPORTED_MODULE_2__.ENUM_EVENTTYPEDATA.Fuel_Level_Low,
                data: `${data[0] ? 'Low' : 'Normal'}`
            });
            return dataRet;
        }
        else if (eventId === _standard_enums__WEBPACK_IMPORTED_MODULE_2__.ENUM_EVENTIDTYPES.Average_Speed) {
            // 1.1.toFixed(1)
            let a = lodash__WEBPACK_IMPORTED_MODULE_0__.slice(data, 0, 4);
            a = parseEventData(a);
            dataRet.push({
                eventId,
                value: a,
                name: _standard_enums__WEBPACK_IMPORTED_MODULE_2__.ENUM_EVENTTYPEDATA.Average_Speed,
                data: `${a.toFixed(2)}`,
                unit: 'km/h'
            });
            return dataRet;
        }
        else if (eventId === _standard_enums__WEBPACK_IMPORTED_MODULE_2__.ENUM_EVENTIDTYPES.NetworkScan_Data) {
            data.pop();
            dataRet.push({
                eventId,
                value: data,
                name: _standard_enums__WEBPACK_IMPORTED_MODULE_2__.ENUM_EVENTTYPEDATA.NetworkScan_Data
            });
            return dataRet;
        }
        return [{
                eventId,
                value: data,
                name: _standard_enums__WEBPACK_IMPORTED_MODULE_2__.ENUM_EVENTTYPEDATA.Event_Unknow,
                data: _utilities_dataParser__WEBPACK_IMPORTED_MODULE_1__.bytesToString(data)
            }];
    }
    catch (err) {
        console.log('parserNotifyEvents ERROR', err);
        return undefined;
    }
}


/***/ }),

/***/ 39152:
/*!******************************************************************!*\
  !*** ./src/app/services/innova-vci-service/src/obd/OBDSystem.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OBDSystem": function() { return /* binding */ OBDSystem; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _vcistd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vcistd */ 48860);
/* harmony import */ var _obd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./obd */ 29326);
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! util */ 94655);
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utilities_dataParser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utilities/dataParser */ 81402);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);







class OBDSystem extends _obd__WEBPACK_IMPORTED_MODULE_1__.OBDx {
    getECUVoltage() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            let ret = { BatteryVoltage: undefined, Unit: 'V' };
            const usbData = [0, 0];
            try {
                const batvol = yield this.LinkVciCmd({
                    Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.tool,
                    stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_tool.getecuvoltage, usbData, nretry: 0, timeout: 300 //chang by ngoclb
                });
                let j = _utilities_dataParser__WEBPACK_IMPORTED_MODULE_3__.bytesToString(batvol);
                if (j.search("Battery Voltage") > 0) {
                    var temp = JSON.parse(j.replace("Battery Voltage", "BatteryVoltage"));
                    return temp;
                }
                let v = new Float32Array(new Uint8Array(batvol).buffer)[0];
                if (!(0,util__WEBPACK_IMPORTED_MODULE_2__.isNullOrUndefined)(v)) {
                    return { BatteryVoltage: v.toFixed(2), Unit: 'V' };
                }
            }
            catch (error) {
                this.logdebug("getECUVoltage error:" + error);
            }
            return ret;
        });
    }
    settingUnitType(unit_type) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.logdebug("Unit Selection:" + unit_type);
            const usbData = [..._utilities_dataParser__WEBPACK_IMPORTED_MODULE_3__.numberToBytes(unit_type, 1)];
            try {
                const val = yield this.LinkVciCmd({
                    Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.tool,
                    stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_tool.setting_unit, usbData
                });
                if ((0,util__WEBPACK_IMPORTED_MODULE_2__.isNullOrUndefined)(val)) {
                    return false;
                }
                else {
                    return true;
                }
            }
            catch (error) {
            }
            return true;
        });
    }
    SettingLanguage(lang_id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.logdebug("Language Selection:" + lang_id);
            const usbData = [..._utilities_dataParser__WEBPACK_IMPORTED_MODULE_3__.numberToBytes(lang_id, 1)];
            try {
                const val = yield this.LinkVciCmd({
                    Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.tool,
                    stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_tool.setting_language, usbData
                });
                if ((0,util__WEBPACK_IMPORTED_MODULE_2__.isNullOrUndefined)(val)) {
                    return false;
                }
                else {
                    return true;
                }
            }
            catch (error) {
            }
            return true;
        });
    }
    Cancel_VCI_Process() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            try {
                this.logdebug("Cancel Process...");
            }
            catch (err) {
            }
        });
    }
    /**
     * [SetLogFunction Set function id for data logging]
     * @param  func_id [func_id based on VCI_Data_Logging]
     * @return         [boolean]
     */
    SetLogFunction(func_id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const usbData = [..._utilities_dataParser__WEBPACK_IMPORTED_MODULE_3__.numberToBytes(_vcistd__WEBPACK_IMPORTED_MODULE_0__.ICOMMANDS.LogData.setfuncid.id, 1), ..._utilities_dataParser__WEBPACK_IMPORTED_MODULE_3__.numberToBytes(func_id, 1)];
                this.logdebug("Set Function Log:" + func_id);
                const func = _vcistd__WEBPACK_IMPORTED_MODULE_0__.ICOMMANDS.LogData.setfuncid.options.find(o => o.value === func_id);
                this.logdebug("Set Function Log:" + func.text);
                const { data } = yield this.Link({
                    id: _vcistd__WEBPACK_IMPORTED_MODULE_0__.ICOMMANDS.LogData.id,
                    data: usbData
                });
                return true;
            }
            catch (err) {
                this.logdebug("Set Function Log err:" + err);
                return false;
            }
        });
    }
    /**
     * [StartLog Start Data Log]
     * @return [boolean]
     */
    StartLog() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            try {
                this.logdebug("Start Log");
                const usbData = [..._utilities_dataParser__WEBPACK_IMPORTED_MODULE_3__.numberToBytes(_vcistd__WEBPACK_IMPORTED_MODULE_0__.ICOMMANDS.LogData.startlog.id, 1)];
                yield this.Link({
                    id: _vcistd__WEBPACK_IMPORTED_MODULE_0__.ICOMMANDS.LogData.id,
                    data: usbData
                });
                return true;
            }
            catch (err) {
                this.logdebug("Start Log err:" + err);
                return false;
            }
        });
    }
    /**
     * [StopLog Stop data logging]
     * @return [boolean]
     */
    StopLog() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            try {
                this.logdebug("Stop Log");
                const usbData = [..._utilities_dataParser__WEBPACK_IMPORTED_MODULE_3__.numberToBytes(_vcistd__WEBPACK_IMPORTED_MODULE_0__.ICOMMANDS.LogData.stoplog.id, 1)];
                yield this.Link({
                    id: _vcistd__WEBPACK_IMPORTED_MODULE_0__.ICOMMANDS.LogData.id,
                    data: usbData
                });
                return true;
            }
            catch (err) {
                this.logdebug("Stop Log err:" + err);
                return false;
            }
        });
    }
    /**
     * [GetLog Get Log Data]
     * @return [Logging data]
     */
    GetLog() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            try {
                this.logdebug("Get Log");
                const usbData = [..._utilities_dataParser__WEBPACK_IMPORTED_MODULE_3__.numberToBytes(_vcistd__WEBPACK_IMPORTED_MODULE_0__.ICOMMANDS.LogData.getlog_encrypt.id, 1)];
                const { data } = yield this.LinkMultiData({
                    id: _vcistd__WEBPACK_IMPORTED_MODULE_0__.ICOMMANDS.LogData.id,
                    data: usbData
                });
                return data;
            }
            catch (err) {
                this.logdebug("Get Log err:" + err);
                return null;
            }
        });
    }
    guidToBytes(guid) {
        var bytes = [];
        guid.split('-').map((number, index) => {
            var bytesInChar = index < 3 ? number.match(/.{1,2}/g).reverse() : number.match(/.{1,2}/g);
            bytesInChar.map((byte) => { bytes.push(parseInt(byte, 16)); });
        });
        return bytes;
    }
    /**
     * [readGUID Function to read GUID]
     * @return [string of GUID]
     */
    readGUID() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const { data } = yield this.Link(_vcistd__WEBPACK_IMPORTED_MODULE_0__.ICOMMANDS.getGuid);
                const guid = data.slice(0, 4).reverse().concat(data.slice(4, 6).reverse()).concat(data.slice(6, 8).reverse()).concat(data.slice(8));
                let new_x = Array.from(guid, function (byte) {
                    return ('0' + (byte & 0xFF).toString(16)).slice(-2);
                }).join('').replace(/(.{8})(.{4})(.{4})(.{4})(.{12})/, "$1-$2-$3-$4-$5").toUpperCase();
                this.logdebug('GUIID:' + new_x);
                return new_x;
            }
            catch (err) {
                this.logdebug('Error when reading GUIID:' + err);
                return null;
            }
        });
    }
    /**
     * [writeGUID Function to write GUID]
     * @param  guiid [string of guid]
     * @return       [boolean]
     */
    writeGUID(guiid) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            try {
                this.logdebug('Writing GUID:' + guiid);
                const { data } = yield this.Link({
                    id: _vcistd__WEBPACK_IMPORTED_MODULE_0__.ICOMMANDS.setGuid.id,
                    data: this.guidToBytes(guiid)
                });
                return true;
            }
            catch (err) {
                this.logdebug('Error when writing GUIID:' + err);
                return false;
            }
        });
    }
}
OBDSystem.ɵfac = /*@__PURE__*/ function () { let ɵOBDSystem_BaseFactory; return function OBDSystem_Factory(t) { return (ɵOBDSystem_BaseFactory || (ɵOBDSystem_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetInheritedFactory"](OBDSystem)))(t || OBDSystem); }; }();
OBDSystem.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: OBDSystem, factory: OBDSystem.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 71362:
/*!************************************************************!*\
  !*** ./src/app/services/innova-vci-service/src/obd/gui.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GUI": function() { return /* binding */ GUI; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _vcistd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vcistd */ 48860);
/* harmony import */ var _obd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./obd */ 29326);
/* harmony import */ var _utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../utilities/dataParser */ 81402);
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! util */ 94655);
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);






class GUI extends _obd__WEBPACK_IMPORTED_MODULE_1__.OBDx {
    constructor() {
        super(...arguments);
        this.gui_call_func = function (data) { };
        this.that = null;
    }
    gui_notice_disp() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const data = yield this.LinkVciCmd({
                    Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.gui,
                    stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_GUI.gui_lcd_display,
                });
            }
            catch (err) {
                this.logdebug(err);
            }
        });
    }
    proc_enter_proc(proc_id, cmd_id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const usbData = [..._utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.numberToBytes(proc_id, 2), ..._utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.numberToBytes(cmd_id, 2)];
                this.logdebug("Enter Process:" + proc_id + ",cmd_id" + cmd_id);
                const data = yield this.LinkVciCmd({
                    Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.gui,
                    stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_GUI.gui_proc_enter,
                    usbData, nretry: 1, timeout: 1000
                });
                if ((0,util__WEBPACK_IMPORTED_MODULE_3__.isNullOrUndefined)(data)) {
                    return false;
                }
                else {
                    return true;
                }
            }
            catch (err) {
                this.logdebug(err);
            }
        });
    }
    proc_leave_proc() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            try {
                yield this.LinkVciCmd({
                    Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.gui,
                    stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_GUI.gui_proc_leave
                });
            }
            catch (err) {
                this.logdebug(err);
            }
        });
    }
    proc_terminate_proc() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            try {
                yield this.LinkVciCmd({
                    Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.gui,
                    stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_GUI.gui_proc_terminate,
                    nretry: 0,
                    timeout: 500 // ngoclb: set timeout for this command
                });
            }
            catch (err) {
                this.logdebug(err);
            }
        });
    }
    gui_set_key_code(keycode) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const usbData = [..._utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.numberToBytes(keycode, 2)];
                this.logdebug('Set Keycode:' + keycode);
                yield this.LinkVciCmd({
                    Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.gui,
                    stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_GUI.gui_set_key,
                    usbData, nretry: 3
                });
            }
            catch (err) {
                this.logdebug(err);
            }
        });
    }
    gui_set_key_code_with_index(keycode, index) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const usbData = [..._utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.numberToBytes(keycode, 2),
                    ..._utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.numberToBytes(index, 4)];
                this.logdebug('Set Keycode:' + keycode);
                this.logdebug('Set Keyindex:' + index);
                yield this.LinkVciCmd({
                    Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.gui,
                    stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_GUI.gui_set_key_with_index,
                    usbData, nretry: 3
                });
            }
            catch (err) {
                this.logdebug(err);
            }
        });
    }
    gui_proc_sf_at_set_active_module(system, subsystem) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const usbData = [..._utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.numberToBytes(system, 2),
                ..._utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.numberToBytes(subsystem, 2)];
            this.logdebug('Set system:' + system + ' ' + 'SubSystem:' + subsystem);
            const data = yield this.LinkVciCmd({
                Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.gui,
                stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_GUI.gui_set_special_at_module,
                usbData, nretry: 1, timeout: 5000
            });
            if ((0,util__WEBPACK_IMPORTED_MODULE_3__.isNullOrUndefined)(data)) {
                return false;
            }
            else {
                return true;
            }
        });
    }
    gui_proc_enter_specialFunction_feature(group_id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const usbData = [..._utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.numberToBytes(_vcistd__WEBPACK_IMPORTED_MODULE_0__.SYS_PROC_ID.PROC_SPECIAL_FUNCTION, 2),
                ..._utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.numberToBytes(_vcistd__WEBPACK_IMPORTED_MODULE_0__.SYS_CMD_ID.CMD_INIT_PROC, 2),
                ..._utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.numberToBytes(group_id, 1)];
            const data = yield this.LinkVciCmd({
                Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.gui,
                stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_GUI.gui_proc_enter,
                usbData, nretry: 1, timeout: 5000
            });
            if ((0,util__WEBPACK_IMPORTED_MODULE_3__.isNullOrUndefined)(data)) {
                return false;
            }
            else {
                return true;
            }
        });
    }
    gui_set_special_function_group(group_id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolve) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                try {
                    const usbData = [..._utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.numberToBytes(group_id, 1)];
                    this.logdebug('Set Special Function Group:' + group_id);
                    const data = yield this.LinkVciCmd({
                        Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.gui,
                        stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_GUI.gui_set_special_function_group,
                        usbData, timeout: 1000
                    });
                    if ((0,util__WEBPACK_IMPORTED_MODULE_3__.isNullOrUndefined)(data)) {
                        return resolve(false);
                    }
                    else {
                        return resolve(true);
                        ;
                    }
                }
                catch (err) {
                    this.logdebug(err);
                    return resolve(false);
                }
            }));
        });
    }
    set_param(type, param) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
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
            let stt = false;
            try {
                yield this.logdebug('Set Param:' + param);
                //this.logdebug('Type Param:'+ (typeof param));
                let usbData = [];
                switch (typeof param) {
                    case 'number':
                        usbData = [..._utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.numberToBytes(type, 1), ..._utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.numberToBytes(param, 4)];
                        break;
                    case 'string':
                        usbData = [..._utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.numberToBytes(type, 1), ..._utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.stringToBytes(param)];
                        break;
                    default:
                        break;
                }
                yield this.LinkVciCmd({
                    Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.gui,
                    stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_GUI.gui_set_param,
                    usbData, nretry: 3
                }).then((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                    if (data == undefined || data == null) {
                        yield this.logdebug('set Param false');
                        stt = false;
                    }
                    else {
                        yield this.logdebug('set Param true');
                        stt = true;
                    }
                }));
                yield this.logdebug('Finish set option');
                //return resolve(true);
            }
            catch (err) {
                this.logdebug(err);
                //return reject(Error('Error message'));
                //return resolve(false);
            }
            return stt;
        });
    }
}
GUI.ɵfac = /*@__PURE__*/ function () { let ɵGUI_BaseFactory; return function GUI_Factory(t) { return (ɵGUI_BaseFactory || (ɵGUI_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetInheritedFactory"](GUI)))(t || GUI); }; }();
GUI.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: GUI, factory: GUI.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 55123:
/*!*****************************************************************!*\
  !*** ./src/app/services/innova-vci-service/src/obd/livedata.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Livedata": function() { return /* binding */ Livedata; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _vcistd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vcistd */ 48860);
/* harmony import */ var _obd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./obd */ 29326);
/* harmony import */ var _utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../utilities/dataParser */ 81402);
/* harmony import */ var _standard_enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../standard/enums */ 13930);
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! util */ 94655);
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);







class Livedata extends _obd__WEBPACK_IMPORTED_MODULE_1__.OBDx {
    getOBD2_LiveDataListPIDsupport() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.getlivedatapidsupport_group(_standard_enums__WEBPACK_IMPORTED_MODULE_3__.enumInnovagroup.einnovagroup_GROUP_OBDII);
        });
    }
    getOBD2_LiveDataItem_Val(itemid) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.getlivedata_itemval(_standard_enums__WEBPACK_IMPORTED_MODULE_3__.enumInnovagroup.einnovagroup_GROUP_OBDII, itemid);
        });
    }
    getABS_LiveDataListPIDsupport() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.getlivedatapidsupport_group_v2(_standard_enums__WEBPACK_IMPORTED_MODULE_3__.enumInnovagroup.einnovagroup_GROUP_ABS);
        });
    }
    getABS_LiveDataItem_Val(itemid) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.getlivedata_itemval_v2(_standard_enums__WEBPACK_IMPORTED_MODULE_3__.enumInnovagroup.einnovagroup_GROUP_ABS, itemid);
        });
    }
    getECM_LiveDataListPIDsupport() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.getlivedatapidsupport_group_v2(_standard_enums__WEBPACK_IMPORTED_MODULE_3__.enumInnovagroup.einnovagroup_GROUP_ENH_ECM);
        });
    }
    getECM_LiveDataItem_Val(itemid) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.getlivedata_itemval_v2(_standard_enums__WEBPACK_IMPORTED_MODULE_3__.enumInnovagroup.einnovagroup_GROUP_ENH_ECM, itemid);
        });
    }
    getOther_LiveDataItem_Val(itemid) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.getlivedata_itemval_v2(_standard_enums__WEBPACK_IMPORTED_MODULE_3__.enumInnovagroup.einnovagroup_INNOVA_GROUP_UNKNOW, itemid);
        });
    }
    getSRS_LiveDataListPIDsupport() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.getlivedatapidsupport_group_v2(_standard_enums__WEBPACK_IMPORTED_MODULE_3__.enumInnovagroup.einnovagroup_GROUP_SRS);
        });
    }
    getSRS_LiveDataItem_Val(itemid) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.getlivedata_itemval_v2(_standard_enums__WEBPACK_IMPORTED_MODULE_3__.enumInnovagroup.einnovagroup_GROUP_SRS, itemid);
        });
    }
    getECM_LiveDataNumberItemSupport() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.getlivedata_numberpidsuppport_group_v2(_standard_enums__WEBPACK_IMPORTED_MODULE_3__.enumInnovagroup.einnovagroup_GROUP_ENH_ECM);
        });
    }
    getSRS_LiveDataNumberItemSupport() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.getlivedata_numberpidsuppport_group_v2(_standard_enums__WEBPACK_IMPORTED_MODULE_3__.enumInnovagroup.einnovagroup_GROUP_SRS);
        });
    }
    getABS_LiveDataNumberItemSupport() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.getlivedata_numberpidsuppport_group_v2(_standard_enums__WEBPACK_IMPORTED_MODULE_3__.enumInnovagroup.einnovagroup_GROUP_ABS);
        });
    }
    getlivedatapidsupport_group(innovagroup) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolve) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                try {
                    const usbData = [..._utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.numberToBytes(innovagroup, 1)];
                    this.logdebug('Checking item support ' + innovagroup);
                    const data = yield this.LinkVciCmd({
                        Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.livedata,
                        stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_livedata.read_itemlist,
                        usbData, nretry: 1, timeout: 30000
                    });
                    let j = _utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.bytesToString(data);
                    this.logdebug(j);
                    return resolve(JSON.parse(j));
                }
                catch (err) {
                    this.logdebug(err);
                    return resolve({});
                }
            }));
        });
    }
    getlivedata_itemval(innovagroup, itemid) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolve) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                try {
                    const usbData = [..._utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.numberToBytes(innovagroup, 1), ..._utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.numberToBytes(itemid, 2)];
                    this.logdebug('Checking item support ' + itemid);
                    const data = yield this.LinkVciCmd({
                        Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.livedata,
                        stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_livedata.read_itemval,
                        usbData, nretry: 1, timeout: 20000
                    });
                    let j = _utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.bytesToString(data).split('\n').join('-');
                    //this.logdebug('item string:'+j);
                    return resolve(JSON.parse(j));
                }
                catch (err) {
                    this.logdebug(err);
                    return resolve({});
                }
            }));
        });
    }
    getlivedata_itemval_v2(innovagroup, itemid) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolve) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                try {
                    const usbData = [..._utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.numberToBytes(innovagroup, 1), ..._utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.numberToBytes(itemid, 2)];
                    this.logdebug('Checking item support ' + itemid);
                    const data = yield this.LinkVciCmd({
                        Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.livedata,
                        stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_livedata.get_itemval_v2,
                        usbData, nretry: 1, timeout: 20000
                    });
                    let j = _utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.bytesToString(data).split('\n').join('-');
                    this.logdebug('item string:' + j);
                    return resolve(JSON.parse(j));
                }
                catch (err) {
                    this.logdebug(err);
                    return resolve({});
                }
            }));
        });
    }
    getlivedata_list_itemval(innovagroup, start_idx, end_idx) {
        return new Promise((resolve) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            try {
                //  let list_bytes = (new Uint8Array(list)).map(xx=>{return xx})
                const usbData = [..._utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.numberToBytes(innovagroup, 1),
                    ..._utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.numberToBytes(start_idx, 1), ..._utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.numberToBytes(end_idx, 1)];
                this.logdebug('Checking item support list');
                const data = yield this.LinkVciCmd({
                    Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.livedata,
                    stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_livedata.read_list_item_val,
                    usbData, nretry: 1, timeout: 10000
                });
                let j = _utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.bytesToString(data).split('\n').join('-');
                this.logdebug(start_idx + '-' + end_idx + ':' + j);
                return resolve(JSON.parse(j));
            }
            catch (err) {
                this.logdebug(err);
                return resolve({});
            }
        }));
    }
    getlivedata_list_itemval_v2(innovagroup, start_idx, end_idx) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolve) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                try {
                    //  let list_bytes = (new Uint8Array(list)).map(xx=>{return xx})
                    const usbData = [..._utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.numberToBytes(innovagroup, 1),
                        ..._utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.numberToBytes(start_idx, 2), ..._utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.numberToBytes(end_idx, 2)];
                    this.logdebug('Checking item support list');
                    const data = yield this.LinkVciCmd({
                        Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.livedata,
                        stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_livedata.get_listitemval,
                        usbData, nretry: 1, timeout: 10000
                    });
                    let j = _utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.bytesToString(data).split('\n').join('-');
                    this.logdebug(start_idx + '-' + end_idx + ':' + j);
                    return resolve(JSON.parse(j));
                }
                catch (err) {
                    this.logdebug(err);
                    return resolve({});
                }
            }));
        });
    }
    getlivedata_hybrid() {
        return new Promise((resolve) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const usbData = [];
                //this.logdebug('Checking item info of:'+ itemid);
                const data = yield this.LinkVciCmd({
                    Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.livedata,
                    stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_livedata.start_hybrid_ld,
                    usbData, nretry: 1, timeout: 5000
                });
                let j = _utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.bytesToString(data).split('\n').join('-');
                //  this.logdebug('Checking item info of:' +itemid);
                this.logdebug('Response info:' + j);
                return resolve(JSON.parse(j));
            }
            catch (err) {
                this.logdebug(err);
                return resolve({});
            }
        }));
    }
    getlivedata_listinfo(innovagroup, startid, stopid) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolve) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                try {
                    const usbData = [..._utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.numberToBytes(innovagroup, 1),
                        ..._utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.numberToBytes(startid, 2), ..._utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.numberToBytes(stopid, 2)];
                    //this.logdebug('Checking item info of:'+ itemid);
                    const data = yield this.LinkVciCmd({
                        Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.livedata,
                        stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_livedata.get_listiteminfo,
                        usbData, nretry: 1, timeout: 10000
                    });
                    let j = _utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.bytesToString(data).split('\n').join('-');
                    this.logdebug('Checking item info from:' + startid + 'to ' + stopid);
                    this.logdebug('Response info:' + j);
                    return resolve(JSON.parse(j));
                }
                catch (err) {
                    this.logdebug(err);
                    return resolve({});
                }
            }));
        });
    }
    getlivedata_iteminfo(innovagroup, itemid) {
        return new Promise((resolve) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const usbData = [..._utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.numberToBytes(innovagroup, 1),
                    ..._utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.numberToBytes(itemid, 2)];
                //this.logdebug('Checking item info of:'+ itemid);
                const data = yield this.LinkVciCmd({
                    Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.livedata,
                    stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_livedata.read_item_info,
                    usbData, nretry: 1, timeout: 5000
                });
                let j = _utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.bytesToString(data).split('\n').join('-');
                this.logdebug('Checking item info of:' + itemid);
                this.logdebug('Response info:' + j);
                return resolve(JSON.parse(j));
            }
            catch (err) {
                this.logdebug(err);
                return resolve({});
            }
        }));
    }
    getlivedata_hybrid_info() {
        return new Promise((resolve) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const usbData = [];
                //this.logdebug('Checking item info of:'+ itemid);
                const data = yield this.LinkVciCmd({
                    Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.livedata,
                    stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_livedata.start_hybrid_ld,
                    usbData, nretry: 1, timeout: 5000
                });
                let j = _utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.bytesToString(data).split('\n').join('-');
                //this.logdebug('Checking item info of:' +itemid);
                this.logdebug('Response info:' + j);
                return resolve(JSON.parse(j));
            }
            catch (err) {
                this.logdebug(err);
                return resolve({});
            }
        }));
    }
    enable_dtc_trigger() {
        return new Promise((resolve) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const usbData = [];
                //this.logdebug('Checking item info of:'+ itemid);
                const data = yield this.LinkVciCmd({
                    Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.livedata,
                    stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_livedata.set_record_dtc_trigger,
                    usbData, nretry: 1, timeout: 5000
                });
                let j = _utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.bytesToString(data).split('\n').join('-');
                //this.logdebug('Checking item info of:' +itemid);
                this.logdebug('Response info:' + j);
                return resolve(JSON.parse(j));
            }
            catch (err) {
                this.logdebug(err);
                return resolve({});
            }
        }));
    }
    disable_dtc_trigger() {
        return new Promise((resolve) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const usbData = [];
                //this.logdebug('Checking item info of:'+ itemid);
                const data = yield this.LinkVciCmd({
                    Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.livedata,
                    stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_livedata.reset_record_dtc_trigger,
                    usbData, nretry: 1, timeout: 5000
                });
                let j = _utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.bytesToString(data).split('\n').join('-');
                //this.logdebug('Checking item info of:' +itemid);
                this.logdebug('Response info:' + j);
                return resolve(JSON.parse(j));
            }
            catch (err) {
                this.logdebug(err);
                return resolve({});
            }
        }));
    }
    /*Live Data Version 2 support over 200 Pids*/
    getlivedata_numberpidsuppport_other(system, subsystem) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolve) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                try {
                    const usbData = [..._utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.numberToBytes(_standard_enums__WEBPACK_IMPORTED_MODULE_3__.enumInnovagroup.einnovagroup_INNOVA_GROUP_UNKNOW, 1),
                        ..._utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.numberToBytes(system, 2), ..._utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.numberToBytes(subsystem, 2)];
                    this.logdebug('Checking item of system ' + system + ' and subSystem ' + subsystem);
                    const data = yield this.LinkVciCmd({
                        Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.livedata,
                        stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_livedata.check_getnumpid_group,
                        usbData, nretry: 1, timeout: 30000
                    });
                    let j = _utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.bytesToString(data);
                    this.logdebug(j);
                    const res = JSON.parse(j);
                    return resolve(res);
                }
                catch (err) {
                    this.logdebug(err);
                    return resolve({});
                }
            }));
        });
    }
    getlivedata_numberpidsuppport_group_v2(innovagroup) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolve) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                try {
                    const usbData = [..._utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.numberToBytes(innovagroup, 1)];
                    this.logdebug('Checking item support ' + innovagroup);
                    const data = yield this.LinkVciCmd({
                        Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.livedata,
                        stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_livedata.check_getnumpid_group,
                        usbData, nretry: 1, timeout: 30000
                    });
                    let j = _utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.bytesToString(data);
                    this.logdebug(j);
                    let res = JSON.parse(j);
                    if ((0,util__WEBPACK_IMPORTED_MODULE_4__.isNullOrUndefined)(res)) {
                        res = { Number: 0 };
                    }
                    return resolve(res);
                }
                catch (err) {
                    this.logdebug(err);
                    return resolve({});
                }
            }));
        });
    }
    getlivedatapidsupport_group_v2(innovagroup) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolve) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                try {
                    const usbData = [..._utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.numberToBytes(innovagroup, 1)];
                    this.logdebug('Checking item support ' + innovagroup);
                    const data = yield this.LinkVciCmd({
                        Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.livedata,
                        stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_livedata.check_getnumpid_group,
                        usbData, nretry: 1, timeout: 30000
                    });
                    let j = _utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.bytesToString(data);
                    this.logdebug(j);
                    const ls_pid = JSON.parse(j);
                    let ls_item = ls_pid["Number"];
                    let new_list_info = [];
                    for (let id = 0; id < ls_item; id += 15) {
                        const ls_info = yield this.getlivedata_listinfo(innovagroup, id, id + 14 > ls_item ? ls_item - 1 : id + 14);
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
                    };
                    return resolve(res);
                }
                catch (err) {
                    this.logdebug(err);
                    return resolve({});
                }
            }));
        });
    }
}
Livedata.ɵfac = /*@__PURE__*/ function () { let ɵLivedata_BaseFactory; return function Livedata_Factory(t) { return (ɵLivedata_BaseFactory || (ɵLivedata_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetInheritedFactory"](Livedata)))(t || Livedata); }; }();
Livedata.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: Livedata, factory: Livedata.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 10591:
/*!***************************************************************!*\
  !*** ./src/app/services/innova-vci-service/src/obd/nwscan.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NWSCAN": function() { return /* binding */ NWSCAN; },
/* harmony export */   "enumProtocol": function() { return /* reexport safe */ _standard_enums__WEBPACK_IMPORTED_MODULE_5__.enumProtocol; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _vcistd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vcistd */ 48860);
/* harmony import */ var _obd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./obd */ 29326);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ 202);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! util */ 94655);
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utilities_dataParser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../utilities/dataParser */ 81402);
/* harmony import */ var _standard_enums__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../standard/enums */ 13930);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);








// import * from './../standard/enums';
class NWSCAN extends _obd__WEBPACK_IMPORTED_MODULE_1__.OBDx {
    setVinString(VinString) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            try {
                this.logdebug("Input VIN:" + VinString);
                if (lodash__WEBPACK_IMPORTED_MODULE_2__.isEmpty(VinString) || VinString.length != 0x11) {
                    return false;
                }
                const usbData = _utilities_dataParser__WEBPACK_IMPORTED_MODULE_4__.stringToBytes(VinString) || [];
                yield this.LinkVciCmd({
                    Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.systemdata,
                    stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_system.setvin,
                    usbData: [0x11, 0x00, ...usbData],
                    nretry: 2, timeout: 3000
                });
                return true;
            }
            catch (err) {
                return false;
            }
        });
    }
    setYmmeProfile(ymmeprofile = {
        manufacture_enum: undefined,
        year_enum: undefined,
        make_enum: undefined,
        model_enum: undefined,
        engine_enum: undefined,
        trim_enum: undefined,
        option_enum: undefined,
        transmission_enum: undefined
    }) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            // const usbArgs = [ENUMVCIs.VCICmd_system.setymme];
            const usbData = [
                ..._utilities_dataParser__WEBPACK_IMPORTED_MODULE_4__.numberToBytes(512, 2),
                ..._utilities_dataParser__WEBPACK_IMPORTED_MODULE_4__.numberToBytes(0xaa, 1),
                ..._utilities_dataParser__WEBPACK_IMPORTED_MODULE_4__.numberToBytes(ymmeprofile.manufacture_enum, 2),
                ..._utilities_dataParser__WEBPACK_IMPORTED_MODULE_4__.numberToBytes(ymmeprofile.year_enum, 2),
                ..._utilities_dataParser__WEBPACK_IMPORTED_MODULE_4__.numberToBytes(ymmeprofile.make_enum, 2),
                ..._utilities_dataParser__WEBPACK_IMPORTED_MODULE_4__.numberToBytes(ymmeprofile.model_enum, 2),
                ..._utilities_dataParser__WEBPACK_IMPORTED_MODULE_4__.numberToBytes(ymmeprofile.trim_enum || 0xffff, 2),
                ..._utilities_dataParser__WEBPACK_IMPORTED_MODULE_4__.numberToBytes(ymmeprofile.option_enum || 0xffff, 2),
                ..._utilities_dataParser__WEBPACK_IMPORTED_MODULE_4__.numberToBytes(ymmeprofile.engine_enum || 0xff, 2),
                ..._utilities_dataParser__WEBPACK_IMPORTED_MODULE_4__.numberToBytes(ymmeprofile.transmission_enum || 0xffff, 2),
            ];
            try {
                const result = yield this.LinkVciCmd({
                    Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.systemdata,
                    stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_system.setymme,
                    usbData,
                    nretry: 1
                });
                const [status] = result;
                return (status === 0xaa);
            }
            catch (error) {
                return false;
            }
        });
    }
    getYMMEProfile() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            // const usbArgs = [];
            const usbData = [0, 0];
            try {
                const result = yield this.LinkVciCmd({
                    Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.systemdata,
                    stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_system.getymme,
                    usbData,
                    nretry: 2
                });
                this.logdebug(result);
                return result;
            }
            catch (error) {
                return undefined;
            }
        });
    }
    getSupportedOEMModules() {
        return new Promise((resolve) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            try {
                //const progID = [0x04, 0x00];
                // const usbArgs = [0x03, 0xee];
                //const usbArgs = [0x03];//Version firmware from .12
                // const usbData = [];
                const modules = [];
                this.logdebug('Reading supported OEM modules');
                const data = yield this.LinkVciCmd({
                    Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.oem,
                    stateid: 3, usbData: [0xee],
                    nretry: 1, timeout: 10000
                });
                const getGroupName = a => {
                    try {
                        return _vcistd__WEBPACK_IMPORTED_MODULE_0__.EnumInnovaGroups[a];
                    }
                    catch (ex) {
                        return `Unknown Group : ${a}`;
                    }
                };
                const getInspecGroupName = a => {
                    try {
                        return _vcistd__WEBPACK_IMPORTED_MODULE_0__.EnumInspectionGroups[a];
                    }
                    catch (ex) {
                        return `Unknown Group : ${a}`;
                    }
                };
                let temp = _utilities_dataParser__WEBPACK_IMPORTED_MODULE_4__.bytesToString(data);
                //this.logdebug(temp);
                const objSystem = JSON.parse(temp);
                this.logdebug("OEM Modules:" + _utilities_dataParser__WEBPACK_IMPORTED_MODULE_4__.ObjtoStringBeauty(objSystem.data));
                if (lodash__WEBPACK_IMPORTED_MODULE_2__.isObject(objSystem)) {
                    if (objSystem && objSystem.data.length > 0) {
                        objSystem.data.forEach(obj => {
                            //const { System: system, SubSystem: subsystem, ModuleName: modulename, InnovaGroup: group } = obj;
                            modules.push({ System: obj[0], SubSystem: obj[1], ModuleName: obj[2], InnovaGroup: obj[3], groupName: getGroupName(obj[3]), inspecGroup: getInspecGroupName(obj[4]) });
                        });
                        return resolve({ raw: null, data: modules });
                    }
                }
                // parse data to get the list of suppurted system and subsystem
                let index = 0;
                const nSystem = data[index++];
                for (let sysIndex = 0; sysIndex < nSystem; sysIndex++) {
                    const systemId = _utilities_dataParser__WEBPACK_IMPORTED_MODULE_4__.bytesToInt([data[index++], data[index++]], 2, 0);
                    const nSubSystem = data[index++];
                    for (let subIndex = 0; subIndex < nSubSystem; subIndex++) {
                        const LB = data[index++];
                        const HB = data[index++];
                        // const bInnovaGroup = data[index++];
                        const bInnovaGroup = 0xFF;
                        const subSystemId = _utilities_dataParser__WEBPACK_IMPORTED_MODULE_4__.bytesToInt([LB, HB], 2, 0);
                        modules.push({
                            system: systemId,
                            subsystem: subSystemId,
                            innovagroup: bInnovaGroup,
                            groupName: getGroupName(bInnovaGroup),
                        });
                    }
                }
                return resolve({ raw: modules, data: null });
            }
            catch (err) {
                return resolve({});
            }
        }));
    }
    eraseOEMSystem({ system, subSystem }) {
        return new Promise((resolve) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            try {
                // const usbArgs = [0x05].concat(DataParser.numberToBytes(system, 2), DataParser.numberToBytes(subSystem, 2));
                const usbData = [..._utilities_dataParser__WEBPACK_IMPORTED_MODULE_4__.numberToBytes(system, 2), ..._utilities_dataParser__WEBPACK_IMPORTED_MODULE_4__.numberToBytes(subSystem, 2)];
                this.logdebug(`Erasing oem module ${system} ${subSystem}`);
                const data = yield this.LinkVciCmd({
                    Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.oem,
                    stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_nwscan.erasedtcsystem,
                    usbData
                });
                if (data === undefined) {
                    return resolve({ Erase_Dtc: "Sent" });
                }
                else {
                    return resolve({ Erase_Dtc: "OK" });
                }
            }
            catch (err) {
                return resolve({});
            }
        }));
    }
    QueryOEMSystem({ system, subSystem }) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolve) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                try {
                    // const usbArgs = [0x05].concat(DataParser.numberToBytes(system, 2), DataParser.numberToBytes(subSystem, 2));
                    const usbData = [..._utilities_dataParser__WEBPACK_IMPORTED_MODULE_4__.numberToBytes(system, 2), ..._utilities_dataParser__WEBPACK_IMPORTED_MODULE_4__.numberToBytes(subSystem, 2)];
                    this.logdebug(`query oem module ${system} ${subSystem}`);
                    const data = yield this.LinkVciCmd({
                        Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.oem,
                        stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_nwscan.querysystem,
                        usbData
                    });
                    if (data === undefined) {
                        return resolve({ Status: "Fail" });
                    }
                    else {
                        return resolve({ Status: "OK" });
                    }
                }
                catch (err) {
                    return resolve({});
                }
            }));
        });
    }
    ExitOEMSystem({ system, subSystem }) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolve) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                try {
                    // const usbArgs = [0x05].concat(DataParser.numberToBytes(system, 2), DataParser.numberToBytes(subSystem, 2));
                    const usbData = [..._utilities_dataParser__WEBPACK_IMPORTED_MODULE_4__.numberToBytes(system, 2), ..._utilities_dataParser__WEBPACK_IMPORTED_MODULE_4__.numberToBytes(subSystem, 2)];
                    this.logdebug(`exit oem module ${system} ${subSystem}`);
                    const data = yield this.LinkVciCmd({
                        Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.oem,
                        stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_nwscan.exitsystem,
                        usbData
                    });
                    if (data === undefined) {
                        return resolve({ Status: "Fail" });
                    }
                    else {
                        return resolve({ Status: "OK" });
                    }
                }
                catch (err) {
                    return resolve({});
                }
            }));
        });
    }
    getOEMSystem_quick({ system, subSystem }) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolve) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                try {
                    // const usbArgs = [0x05].concat(DataParser.numberToBytes(system, 2), DataParser.numberToBytes(subSystem, 2));
                    const usbData = [..._utilities_dataParser__WEBPACK_IMPORTED_MODULE_4__.numberToBytes(system, 2), ..._utilities_dataParser__WEBPACK_IMPORTED_MODULE_4__.numberToBytes(subSystem, 2)];
                    const modules = [];
                    const getInspecGroup = a => {
                        try {
                            return _vcistd__WEBPACK_IMPORTED_MODULE_0__.EnumInspectionGroups[a];
                        }
                        catch (ex) {
                            return `Unknown Group : ${a}`;
                        }
                    };
                    this.logdebug(`Reading oem module ${system} ${subSystem} quickly`);
                    const rawbuff = yield this.LinkVciCmd({
                        Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.oem,
                        stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_nwscan.quick_readsystem,
                        usbData, nretry: 3, timeout: 10000
                    });
                    if ((0,util__WEBPACK_IMPORTED_MODULE_3__.isNullOrUndefined)(rawbuff)) {
                        return resolve(null);
                    }
                    const objSystem = _utilities_dataParser__WEBPACK_IMPORTED_MODULE_4__.readbleToJSON(rawbuff);
                    yield this.logdebug(objSystem);
                    if (lodash__WEBPACK_IMPORTED_MODULE_2__.isObject(objSystem)) {
                        if (Object.keys(objSystem).includes("Dtcs")) {
                            const { ModuleName: modulename, InspecGroup: inspec_gr, Dtcs, InvalidDTC } = objSystem;
                            yield Dtcs.forEach(obj => {
                                const { 0: DTCCode, 1: type } = obj;
                                modules.push({
                                    code: DTCCode, type: type
                                });
                            });
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
                                    Status: _vcistd__WEBPACK_IMPORTED_MODULE_0__.Enum_Nws_Link_Status[status]
                                }
                            });
                        }
                    }
                    return resolve({ raw: rawbuff });
                }
                catch (err) {
                    this.logdebug(`Reading oem module ${system} ${subSystem}:` + err);
                    return resolve({});
                }
            }));
        });
    }
    getDtc_listInspecGroup({ system, subSystem, id }) {
        return new Promise((resolve) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            try {
                // const usbArgs = [0x05].concat(DataParser.numberToBytes(system, 2), DataParser.numberToBytes(subSystem, 2));
                const usbData = [..._utilities_dataParser__WEBPACK_IMPORTED_MODULE_4__.numberToBytes(system, 2), ..._utilities_dataParser__WEBPACK_IMPORTED_MODULE_4__.numberToBytes(subSystem, 2), ..._utilities_dataParser__WEBPACK_IMPORTED_MODULE_4__.numberToBytes(id, 2)];
                const modules = [];
                this.logdebug(`Getting dtc def ${system} ${subSystem} id: ${id} `);
                const rawbuff = yield this.LinkVciCmd({
                    Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.oem,
                    stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_nwscan.get_dtc_listinspec,
                    usbData, nretry: 3, timeout: 10000
                });
                const objSystem = _utilities_dataParser__WEBPACK_IMPORTED_MODULE_4__.readbleToJSON(rawbuff);
                //this.logdebug(objSystem);
                if (lodash__WEBPACK_IMPORTED_MODULE_2__.isObject(objSystem)) {
                    const { 0: dtc, 1: type, 2: list } = objSystem;
                    this.logdebug('response of getting dtc group' + _utilities_dataParser__WEBPACK_IMPORTED_MODULE_4__.getStringOfObj(objSystem));
                    return resolve({
                        code: dtc,
                        type: type,
                        list: list
                    });
                }
                return resolve({ raw: rawbuff });
            }
            catch (err) {
                return resolve({});
            }
        }));
    }
    getDtcdef_withgroup({ system, subSystem, id, group }) {
        return new Promise((resolve) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            try {
                // const usbArgs = [0x05].concat(DataParser.numberToBytes(system, 2), DataParser.numberToBytes(subSystem, 2));
                const groupid = Object.keys(_vcistd__WEBPACK_IMPORTED_MODULE_0__.EnumInspectionGroups).find(key => _vcistd__WEBPACK_IMPORTED_MODULE_0__.EnumInspectionGroups[key] === group);
                const usbData = [..._utilities_dataParser__WEBPACK_IMPORTED_MODULE_4__.numberToBytes(system, 2), ..._utilities_dataParser__WEBPACK_IMPORTED_MODULE_4__.numberToBytes(subSystem, 2), ..._utilities_dataParser__WEBPACK_IMPORTED_MODULE_4__.numberToBytes(id, 2), ..._utilities_dataParser__WEBPACK_IMPORTED_MODULE_4__.numberToBytes(groupid, 1)];
                const modules = [];
                this.logdebug(`Getting dtc def ${system} ${subSystem} id: ${id} group: ${group} `);
                const rawbuff = yield this.LinkVciCmd({
                    Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.oem,
                    stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_nwscan.get_dtc_def,
                    usbData, nretry: 3, timeout: 5000
                });
                const objSystem = _utilities_dataParser__WEBPACK_IMPORTED_MODULE_4__.readbleToJSON(rawbuff);
                //this.logdebug(objSystem);
                if (lodash__WEBPACK_IMPORTED_MODULE_2__.isObject(objSystem)) {
                    const { 0: dtc, 1: type, 2: def } = objSystem;
                    return resolve({
                        code: dtc,
                        type: type,
                        def: def
                    });
                }
                return resolve({ raw: rawbuff });
            }
            catch (err) {
                return resolve({});
            }
        }));
    }
    getDtcdef({ system, subSystem, id }) {
        return new Promise((resolve) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            try {
                // const usbArgs = [0x05].concat(DataParser.numberToBytes(system, 2), DataParser.numberToBytes(subSystem, 2));
                const usbData = [..._utilities_dataParser__WEBPACK_IMPORTED_MODULE_4__.numberToBytes(system, 2), ..._utilities_dataParser__WEBPACK_IMPORTED_MODULE_4__.numberToBytes(subSystem, 2), ..._utilities_dataParser__WEBPACK_IMPORTED_MODULE_4__.numberToBytes(id, 2), ..._utilities_dataParser__WEBPACK_IMPORTED_MODULE_4__.numberToBytes(255, 1)];
                const modules = [];
                this.logdebug(`Getting dtc def ${system} ${subSystem} id: ${id} `);
                const rawbuff = yield this.LinkVciCmd({
                    Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.oem,
                    stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_nwscan.get_dtc_def,
                    usbData, nretry: 3, timeout: 5000
                });
                const objSystem = _utilities_dataParser__WEBPACK_IMPORTED_MODULE_4__.readbleToJSON(rawbuff);
                //this.logdebug(objSystem);
                if (lodash__WEBPACK_IMPORTED_MODULE_2__.isObject(objSystem)) {
                    const { 0: dtc, 1: type, 2: def } = objSystem;
                    return resolve({
                        code: dtc,
                        type: type,
                        def: def
                    });
                }
                return resolve({ raw: rawbuff });
            }
            catch (err) {
                this.logdebug('Get def issue');
                return resolve({});
            }
        }));
    }
    getOEMSystem({ system, subSystem }) {
        return new Promise((resolve) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            try {
                // const usbArgs = [0x05].concat(DataParser.numberToBytes(system, 2), DataParser.numberToBytes(subSystem, 2));
                const usbData = [..._utilities_dataParser__WEBPACK_IMPORTED_MODULE_4__.numberToBytes(system, 2), ..._utilities_dataParser__WEBPACK_IMPORTED_MODULE_4__.numberToBytes(subSystem, 2)];
                const modules = [];
                this.logdebug(`Reading oem module ${system} ${subSystem}`);
                const rawbuff = yield this.LinkVciCmd({
                    Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.oem,
                    stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_nwscan.readdtsystem,
                    usbData, nretry: 1, timeout: 20000
                });
                const objSystem = _utilities_dataParser__WEBPACK_IMPORTED_MODULE_4__.readbleToJSON(rawbuff);
                this.logdebug(objSystem);
                if (lodash__WEBPACK_IMPORTED_MODULE_2__.isObject(objSystem)) {
                    const { System: system, SubSystem: subsystem, ModuleName: modulename, Dtcs, InvalidDTC, BodyInfo } = objSystem;
                    objSystem.Dtcs.forEach(obj => {
                        const { 0: DTCCode, 1: type, 2: def } = obj;
                        modules.push({
                            code: DTCCode, type: type, definition: def
                        });
                    });
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
                return resolve({ raw: rawbuff });
            }
            catch (err) {
                return resolve({});
            }
        }));
    }
    configJsonReport(isEnable = true) {
        return new Promise((resolve) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const usbArgs = [0x00];
            const usbData = [];
            try {
                yield this.LinkVciCmd({
                    Procid: (isEnable ? _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.enable_jsonfmt : _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.disable_jsonfmt),
                    stateid: 0,
                    usbData,
                    nretry: 1
                });
                return resolve(true);
            }
            catch (error) {
                console.log(error);
                return resolve(false);
            }
        }));
    }
    configJsonDTCDef(isEnable = true) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const usbArgs = [0x00];
                const usbData = [];
                return yield this.LinkVciCmd({
                    Procid: (isEnable ? _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.enable_jsonfmt_def : _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.disable_jsonfmt_def),
                    stateid: 0,
                    usbData,
                    nretry: 1
                });
            }
            catch (err) {
                return false;
            }
        });
    }
    getInnovaGroupDtc(group) {
        return new Promise((resolve) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const usbData = [..._utilities_dataParser__WEBPACK_IMPORTED_MODULE_4__.numberToBytes(group, 1)];
                const getGroupName = a => {
                    try {
                        return _vcistd__WEBPACK_IMPORTED_MODULE_0__.EnumInnovaGroups[a];
                    }
                    catch (ex) {
                        return `Unknown Group : ${a}`;
                    }
                };
                this.logdebug('Reading dtc of ' + getGroupName(group));
                const data = yield this.LinkVciCmd({
                    Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.oem,
                    stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_nwscan.readdtcgroup,
                    usbData,
                    nretry: 2, timeout: 3000
                });
                return resolve(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_4__.bytesToString(data));
            }
            catch (err) {
                this.logdebug(err);
                return resolve({});
            }
        }));
    }
    parser(data) {
        this.logdebug(data);
    }
}
NWSCAN.ɵfac = /*@__PURE__*/ function () { let ɵNWSCAN_BaseFactory; return function NWSCAN_Factory(t) { return (ɵNWSCAN_BaseFactory || (ɵNWSCAN_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetInheritedFactory"](NWSCAN)))(t || NWSCAN); }; }();
NWSCAN.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({ token: NWSCAN, factory: NWSCAN.ɵfac, providedIn: 'root' });



/***/ }),

/***/ 29326:
/*!************************************************************!*\
  !*** ./src/app/services/innova-vci-service/src/obd/obd.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OBDx": function() { return /* binding */ OBDx; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _utilities_dataParser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../utilities/dataParser */ 81402);
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! util */ 94655);
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _vcistd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vcistd */ 48860);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ 202);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _command_command_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../command/command.service */ 12843);
/* harmony import */ var _utilities_notify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../utilities/notify.service */ 46607);









class OBDx {
    constructor(VCICmd, notifier) {
        this.VCICmd = VCICmd;
        this.notifier = notifier;
        this.is_initializing = false;
    }
    // modified by ngoclb, force return boolean for this function
    initialize(sleepMs = 0) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            if (this.is_initializing)
                return false;
            this.is_initializing = true;
            this.VCICmd.ResetListenerData();
            try {
                if (sleepMs) {
                    yield this.sleep(sleepMs);
                }
                // await this.getInfo()
                yield this.setReableFormat(true);
            }
            catch (err) {
                this.logdebug("setReableFormat error:" + err.message);
                this.is_initializing = false;
                return false;
            }
            this.is_initializing = false;
            return true;
        });
    }
    cancel_vci_process() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            try {
                this.logdebug("cancel vci process");
                const data = yield this.LinkVciCmd({
                    Procid: _vcistd__WEBPACK_IMPORTED_MODULE_2__.VCIProg.unsolicited_msg,
                    stateid: _vcistd__WEBPACK_IMPORTED_MODULE_2__.VCICmd_Unsolicited_msg.msg_cancel,
                    nretry: 0,
                    timeout: 200 // ngoclb: change timeout
                });
                yield this.EnableFastCancel();
                return data;
            }
            catch (err) {
                this.logdebug("cancel vci process:" + err);
            }
        });
    }
    // modified by ngoclb, also get tooid in this function
    getInfo() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            let ret = { productid: -1, main: '', boot: '', db: '' };
            const { data, error } = yield this.Link(_vcistd__WEBPACK_IMPORTED_MODULE_2__.ICOMMANDS.getUsbProductId);
            if (!data) {
                ret = lodash__WEBPACK_IMPORTED_MODULE_3__.set(ret, "error", error.message ? error.message : error);
            }
            else {
                const pid = _utilities_dataParser__WEBPACK_IMPORTED_MODULE_0__.bytesToInt(data, 2, 0);
                ret = lodash__WEBPACK_IMPORTED_MODULE_3__.set(ret, "productid", pid);
            }
            //main:xxx , boot:xxx
            let v = yield this.LinkVciCmd({ Procid: _vcistd__WEBPACK_IMPORTED_MODULE_2__.VCIProg.systemdata, stateid: _vcistd__WEBPACK_IMPORTED_MODULE_2__.VCICmd_system.getversion });
            v = (lodash__WEBPACK_IMPORTED_MODULE_3__.chunk(v, 16) || []);
            const [_m, _b, _d] = v;
            if (!(0,util__WEBPACK_IMPORTED_MODULE_1__.isNullOrUndefined)(_m)) {
                ret = lodash__WEBPACK_IMPORTED_MODULE_3__.set(ret, "main", _utilities_dataParser__WEBPACK_IMPORTED_MODULE_0__.bytesToString(_m));
            }
            if (!(0,util__WEBPACK_IMPORTED_MODULE_1__.isNullOrUndefined)(_b)) {
                ret = lodash__WEBPACK_IMPORTED_MODULE_3__.set(ret, "boot", _utilities_dataParser__WEBPACK_IMPORTED_MODULE_0__.bytesToString(_b));
            }
            if (!(0,util__WEBPACK_IMPORTED_MODULE_1__.isNullOrUndefined)(_d)) {
                ret = lodash__WEBPACK_IMPORTED_MODULE_3__.set(ret, "db", _utilities_dataParser__WEBPACK_IMPORTED_MODULE_0__.bytesToString(_d));
            }
            return ret;
        });
    }
    setReableFormat(status) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const { data, error } = yield this.Link({
                // ...ICOMMANDS.setResponseFormat,
                id: _vcistd__WEBPACK_IMPORTED_MODULE_2__.ICOMMANDS.setResponseFormat.id,
                data: [status ? 1 : 0],
                nretry: 0, timeout: 300
            });
            if (error) {
                throw new Error(error.message);
            }
            if (status) {
                yield this.LinkVciCmd({ Procid: _vcistd__WEBPACK_IMPORTED_MODULE_2__.VCIProg.enable_jsonfmt, stateid: 0 });
                yield this.LinkVciCmd({ Procid: _vcistd__WEBPACK_IMPORTED_MODULE_2__.VCIProg.enable_jsonfmt_def, stateid: 0 });
            }
            else {
                yield this.LinkVciCmd({ Procid: _vcistd__WEBPACK_IMPORTED_MODULE_2__.VCIProg.disable_jsonfmt, stateid: 0 });
                yield this.LinkVciCmd({ Procid: _vcistd__WEBPACK_IMPORTED_MODULE_2__.VCIProg.disable_jsonfmt_def, stateid: 0 });
            }
        });
    }
    // added by ngoclb
    sleep(ms) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise(resolve => {
                setTimeout(resolve, ms);
            });
        });
    }
    LinkVciCmd(cmdInfo) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const { Procid, stateid, usbData = [], nretry = 3, timeout = 2000 } = cmdInfo;
            let procdata = _utilities_dataParser__WEBPACK_IMPORTED_MODULE_0__.arrayFromNumber(Procid, 2);
            let statedata = _utilities_dataParser__WEBPACK_IMPORTED_MODULE_0__.arrayFromNumber(stateid, 1);
            const usbCommandHeader = [0x04, 0x00, 0x00, 0x00, 0x65, 0x00, 0x00, 0x00];
            const respdata = yield this.Link({
                id: 0x80,
                data: [].concat(usbCommandHeader, procdata, statedata, usbData),
                nretry,
                timeout
            });
            const { data } = respdata;
            // this.logdebug(`vci link res: ${data}`)
            if ((0,util__WEBPACK_IMPORTED_MODULE_1__.isNullOrUndefined)(data)) {
                return undefined;
            }
            const [b0, b1, b2, b3, status, ...vcidata] = data;
            if (status == 0xAA)
                return vcidata;
            if (status == 0x11 && stateid == _vcistd__WEBPACK_IMPORTED_MODULE_2__.VCICmd_obd2.Erase_Dtc) {
                const [ERASE_STATUS, ERR_CODE, ...restvcidata] = vcidata;
                const ERASE_ERR_CODE = {
                    0x00: "OBD2_ERASE_STT_NONE",
                    0x01: "OBD2_ERASE_STT_SUCCESS",
                    0x02: "OBD2_ERASE_STT_NEGATIVE",
                    0x03: "OBD2_ERASE_STT_NO_RESPONSE",
                    0x04: "OBD2_ERASE_STT_NEGATIVE_22",
                    0xFF: "OBD2_ERASE_STT_UNKNOWN"
                };
                // this.logdebug(`vci link check: ${ERR_CODE}`)
                // this.logdebug(`vci link check: ${ERASE_ERR_CODE[ERR_CODE]}`)
                return {
                    status: "Erase fail",
                    error: ERASE_ERR_CODE[ERR_CODE]
                };
            }
            return undefined;
        });
    }
    LinkHIDUSBCmd(cmdInfo) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const { cmd, vehicleIdx = 0, nretry = 3, timeout = 4000, MaxNumBuff } = cmdInfo;
                const usbData = [cmd, vehicleIdx, 0];
                const usbCommandHeader = [0x04, 0x00, 0x00, 0x00, 0x64, 0x00, 0x00, 0x00];
                let ret = [];
                const __flink = (idx, MaxNumBuff) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                    if (idx >= MaxNumBuff)
                        return ret;
                    const t = (yield this.Link({
                        id: 0x80,
                        data: [].concat(usbCommandHeader, [0, cmd], [idx], [0, 0, 0, 0, 0]),
                        nretry,
                        timeout
                    })) || [];
                    ret.push(Object.assign({ bufferIndex: idx }, t));
                    return yield __flink(idx + 1, MaxNumBuff);
                });
                return yield __flink(0, MaxNumBuff);
            }
            catch (errorcode) {
                return [];
            }
        });
    }
    getToolReportBuffer(reportConfig) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const returndata = {
                YMME_PROFILE: [],
                OBD2_LD_SID1_BUFF: [],
                OBD2_FF_SID2_BUFF: [],
                OBD2_DTC_SID37A_BUFF: [],
                OBD2_SPECIALTEST_SID568_BUFF: [],
                OBD2_VEHINFO_SID9_BUFF: [],
                OBD2_RECORED_LD_BUFF: [],
                OEM_MODULE_BUFF: [],
            };
            if (reportConfig.isVEHICLE_DATA_YMME_PROFILE) {
                returndata.YMME_PROFILE = yield this.getVehReport_YMME_PROFILE();
            }
            if (reportConfig.isVEHICLE_DATA_OBD2_LD_SID1_BUFF) {
                returndata.OBD2_LD_SID1_BUFF = yield this.getVehReport_OBD2_LD_SID1_BUFF();
            }
            if (reportConfig.isVEHICLE_DATA_OBD2_FF_SID2_BUFF) {
                returndata.OBD2_FF_SID2_BUFF = yield this.getVehReport_OBD2_FF_SID2_BUFF();
            }
            if (reportConfig.isVEHICLE_DATA_OBD2_DTC_SID37A_BUFF) {
                returndata.OBD2_DTC_SID37A_BUFF = yield this.getVehReport_OBD2_DTC_SID37A_BUFF();
            }
            if (reportConfig.isVEHICLE_DATA_OBD2_SPECIALTEST_SID568_BUFF) {
                returndata.OBD2_SPECIALTEST_SID568_BUFF = yield this.getVehReport_OBD2_SPECIALTEST_SID568_BUFF();
            }
            if (reportConfig.isVEHICLE_DATA_OBD2_VEHINFO_SID9_BUFF) {
                returndata.OBD2_VEHINFO_SID9_BUFF = yield this.getVehReport_OBD2_VEHINFO_SID9_BUFF();
            }
            if (reportConfig.isVEHICLE_DATA_OBD2_RECORED_LD_BUFF) {
                returndata.OBD2_RECORED_LD_BUFF = yield this.getVehReport_OBD2_RECORED_LD_BUFF();
            }
            if (reportConfig.isVEHICLE_DATA_OEM_MODULE_BUFF) {
                returndata.OEM_MODULE_BUFF = yield this.getVehReport_OEM_MODULE_BUFF();
            }
            return returndata;
        });
    }
    getVehReport_YMME_PROFILE() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () { return yield this.LinkHIDUSBCmd(_vcistd__WEBPACK_IMPORTED_MODULE_2__.USBHIDCommand_64.eVEHICLE_DATA_YMME_PROFILE); });
    }
    getVehReport_OBD2_LD_SID1_BUFF() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () { return yield this.LinkHIDUSBCmd(_vcistd__WEBPACK_IMPORTED_MODULE_2__.USBHIDCommand_64.eVEHICLE_DATA_OBD2_LD_SID1_BUFF); });
    }
    getVehReport_OBD2_FF_SID2_BUFF() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.LinkHIDUSBCmd(_vcistd__WEBPACK_IMPORTED_MODULE_2__.USBHIDCommand_64.eVEHICLE_DATA_OBD2_FF_SID2_BUFF);
        });
    }
    getVehReport_OBD2_FF_SID2_BUFF_RAW() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.LinkHIDUSBCmd(_vcistd__WEBPACK_IMPORTED_MODULE_2__.USBHIDCommand_64.eVEHICLE_DATA_OBD2_FF_SID2_BUFF_RAW);
        });
    }
    getVehReport_OBD2_DTC_SID37A_BUFF() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () { return yield this.LinkHIDUSBCmd(_vcistd__WEBPACK_IMPORTED_MODULE_2__.USBHIDCommand_64.eVEHICLE_DATA_OBD2_DTC_SID37A_BUFF); });
    }
    getVehReport_OBD2_SPECIALTEST_SID568_BUFF() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () { return yield this.LinkHIDUSBCmd(_vcistd__WEBPACK_IMPORTED_MODULE_2__.USBHIDCommand_64.eVEHICLE_DATA_OBD2_SPECIALTEST_SID568_BUFF); });
    }
    getVehReport_OBD2_SPECIALTEST_SID5_BUFF() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () { return yield this.LinkHIDUSBCmd(_vcistd__WEBPACK_IMPORTED_MODULE_2__.USBHIDCommand_64.eVEHICLE_DATA_OBD2_SPECIALTEST_SID5_BUFF); });
    }
    getVehReport_OBD2_SPECIALTEST_SID6_BUFF() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () { return yield this.LinkHIDUSBCmd(_vcistd__WEBPACK_IMPORTED_MODULE_2__.USBHIDCommand_64.eVEHICLE_DATA_OBD2_SPECIALTEST_SID6_BUFF); });
    }
    getVehReport_OBD2_SPECIALTEST_SID8_BUFF() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () { return yield this.LinkHIDUSBCmd(_vcistd__WEBPACK_IMPORTED_MODULE_2__.USBHIDCommand_64.eVEHICLE_DATA_OBD2_SPECIALTEST_SID8_BUFF); });
    }
    getVehReport_OBD2_VEHINFO_SID9_BUFF() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () { return yield this.LinkHIDUSBCmd(_vcistd__WEBPACK_IMPORTED_MODULE_2__.USBHIDCommand_64.eVEHICLE_DATA_OBD2_VEHINFO_SID9_BUFF); });
    }
    getVehReport_OBD2_RECORED_LD_BUFF() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () { return yield this.LinkHIDUSBCmd(_vcistd__WEBPACK_IMPORTED_MODULE_2__.USBHIDCommand_64.eVEHICLE_DATA_OBD2_RECORED_LD_BUFF); });
    }
    getVehReport_OEM_MODULE_BUFF() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () { return yield this.LinkHIDUSBCmd(_vcistd__WEBPACK_IMPORTED_MODULE_2__.USBHIDCommand_64.eVEHICLE_DATA_OEM_MODULE_BUFF); });
    }
    Link(cmdinfo) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            try {
                return yield this.VCICmd.sendData(cmdinfo);
            }
            catch (err) {
                return {
                    data: undefined,
                    error: err
                };
            }
        });
    }
    LinkMultiData(cmdinfo) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            try {
                return yield this.VCICmd.sendGetMultiData(cmdinfo);
            }
            catch (err) {
                return {
                    data: undefined,
                    error: err
                };
            }
        });
    }
    EnableFastCancel() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.VCICmd.EnableFastCancel();
        });
    }
    ResetFastCancel() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.VCICmd.ResetFastCancel();
        });
    }
    registerReceiveCb(func) {
        this.VCICmd.EventCallBackFunction.subscribe(func);
    }
    // public deregisterReceiveCb()
    // {
    //   this.VCICmd.deregisterCallbackFunc();
    // }
    logdebug(data) {
        if ((0,util__WEBPACK_IMPORTED_MODULE_1__.isArray)(data)) {
            this.notifier.log(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_0__.bytesToHexString(data));
            return;
        }
        if ((0,util__WEBPACK_IMPORTED_MODULE_1__.isString)(data)) {
            this.notifier.log(data);
            return;
        }
        this.notifier.log(JSON.stringify(data));
    }
    Cancel_VCI_Process() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            try {
                this.logdebug("Cancel Process...");
            }
            catch (err) {
            }
        });
    }
}
OBDx.ɵfac = function OBDx_Factory(t) { return new (t || OBDx)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_command_command_service__WEBPACK_IMPORTED_MODULE_4__.CommandService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_utilities_notify_service__WEBPACK_IMPORTED_MODULE_5__.NotifyService)); };
OBDx.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({ token: OBDx, factory: OBDx.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 24394:
/*!*************************************************************!*\
  !*** ./src/app/services/innova-vci-service/src/obd/obd2.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OBD2": function() { return /* binding */ OBD2; },
/* harmony export */   "enumProtocol": function() { return /* reexport safe */ _standard_enums__WEBPACK_IMPORTED_MODULE_6__.enumProtocol; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _vcistd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vcistd */ 48860);
/* harmony import */ var _obd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./obd */ 29326);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ 202);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _obdUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./obdUtils */ 2586);
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! util */ 94655);
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utilities_dataParser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../utilities/dataParser */ 81402);
/* harmony import */ var _standard_enums__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../standard/enums */ 13930);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2316);









// import * from './../standard/enums';
class OBD2 extends _obd__WEBPACK_IMPORTED_MODULE_1__.OBDx {
    constructor() {
        super(...arguments);
        // added by NGOCLB
        this.isCancelQuery = false;
    }
    stopQuery() {
        this.isCancelQuery = true;
    }
    Query(cbinfo = null, isNeedCheckVoltage) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const notifyInfo = (percent = 0, index = 0, total = 0, message = undefined, isfinish = false) => {
                    cbinfo && cbinfo({ percent, index, total, message, isfinish });
                };
                //get total process
                let result = (yield this.LinkVciCmd({
                    Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.obd2,
                    stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2.start_Query,
                    nretry: 0,
                    timeout: 200
                })) || [];
                const listProtocol = lodash__WEBPACK_IMPORTED_MODULE_2__.chunk(result, 2);
                let index = 0;
                const total = listProtocol.length;
                if (lodash__WEBPACK_IMPORTED_MODULE_2__.isEmpty(listProtocol)) {
                    notifyInfo(100.0, 0, 0, undefined, true);
                    return _standard_enums__WEBPACK_IMPORTED_MODULE_6__.enumProtocol.eprotocol_PROTOCOL_NO;
                }
                const fFuncCheckVoltage = () => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                    const usbData = [0, 0];
                    const batvol = yield this.LinkVciCmd({
                        Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.tool,
                        stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_tool.getecuvoltage, usbData, nretry: 0, timeout: 1000
                    });
                    let j = _utilities_dataParser__WEBPACK_IMPORTED_MODULE_5__.bytesToString(batvol);
                    if (j.search("Battery Voltage") > 0) {
                        var temp = JSON.parse(j.replace("Battery Voltage", "BatteryVoltage"));
                        return temp['BatteryVoltage'];
                    }
                    let v = new Float32Array(new Uint8Array(batvol).buffer)[0];
                    if (!(0,util__WEBPACK_IMPORTED_MODULE_4__.isNullOrUndefined)(v)) {
                        return v;
                    }
                });
                this.isCancelQuery = false;
                const fLinkToProtx = (list) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                    try {
                        index++;
                        if (lodash__WEBPACK_IMPORTED_MODULE_2__.isEmpty(list) || this.isCancelQuery) {
                            this.isCancelQuery = false;
                            return _standard_enums__WEBPACK_IMPORTED_MODULE_6__.enumProtocol.eprotocol_PROTOCOL_NO;
                        }
                        if (isNeedCheckVoltage) {
                            //14-08-2020 11:56 Quoc Do update here to check voltage
                            let _ecuvol = yield fFuncCheckVoltage();
                            if (_ecuvol < 1) {
                                return _standard_enums__WEBPACK_IMPORTED_MODULE_6__.enumProtocol.eprotocol_UNKNOWN; // changed to UNKNOWN by ngoclb
                            }
                        }
                        let protocolx = list.shift();
                        // protocolx = [5,0]
                        const idprotocol = ((protocolx[1] << 8) & 0xff00) + protocolx[0];
                        // this.logdebug(protocolx)
                        notifyInfo((100.0 * index / total), index, total, _obdUtils__WEBPACK_IMPORTED_MODULE_3__.enumProtocolToString(idprotocol));
                        this.logdebug('start link ' + protocolx);
                        const respdata = yield this.LinkVciCmd({
                            Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.obd2,
                            stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2.Link_To_Prot_N, usbData: protocolx
                        });
                        //  this.logdebug('finished')
                        if (!(0,util__WEBPACK_IMPORTED_MODULE_4__.isNullOrUndefined)(respdata) && respdata[0] == 0xaa) {
                            return idprotocol;
                        }
                        else {
                            return yield fLinkToProtx(list);
                        }
                    }
                    catch (_err) {
                        this.logdebug('stop query ' + _err);
                        return _standard_enums__WEBPACK_IMPORTED_MODULE_6__.enumProtocol.eprotocol_PROTOCOL_NO;
                    }
                });
                const linkedProtocol = yield fLinkToProtx(listProtocol);
                this.logdebug('finished ' + linkedProtocol); // added by ngoclb
                notifyInfo(100.0, total, total, _obdUtils__WEBPACK_IMPORTED_MODULE_3__.enumProtocolToString(linkedProtocol), true);
                return linkedProtocol;
            }
            catch (err) {
                this.logdebug('crash ' + err);
                return _standard_enums__WEBPACK_IMPORTED_MODULE_6__.enumProtocol.eprotocol_PROTOCOL_NO;
            }
        });
    }
    quick_retreiveData(cb = null, readFFDtc) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            // changed by ngoclb
            const args = readFFDtc ? [
                { id: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2.Read_Dtc, message: 'Reading DTC', data: [] },
                { id: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2.freezeframe, message: 'Reading FreezeFrame', data: [] },
                { id: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2.ReadService9, message: 'Read Service 9', data: [] },
            ] : [
                { id: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2.monitoricon, message: 'Reading Monitor Icon', data: [] },
                { id: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2.ReadVin, message: 'Reading VIN', data: [] },
            ];
            const f = (dd) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                try {
                    if (dd.length == 0)
                        return true;
                    const d = dd.shift();
                    cb && cb(d.message);
                    yield this.LinkVciCmd({
                        Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.obd2,
                        stateid: d.id,
                        usbData: d.data, nretry: 3, timeout: 10000
                    });
                    return yield f(dd);
                }
                catch (err) {
                    return false;
                }
            });
            return yield f(args);
        });
    }
    retreiveData(cb = null) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const args = [
                { id: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2.monitoricon, message: 'Reading Monitor Icon', data: [] },
                { id: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2.Read_Dtc, message: 'Reading DTC', data: [] },
                { id: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2.freezeframe, message: 'Reading FreezeFrame', data: [] },
                { id: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2.ReadVin, message: 'Reading VIN', data: [] },
                //{id:ENUMVCIs.VCICmd_obd2.ReadService5,message:'Read Service 5',data:[]},
                //{id:ENUMVCIs.VCICmd_obd2.ReadService6,message:'Read Service 6',data:[]},
                //{id:ENUMVCIs.VCICmd_obd2.ReadService8,message:'Read Service 8',data:[]},
                { id: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2.ReadService9, message: 'Read Service 9', data: [] },
                { id: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2.GetReport, message: 'Reading Report full', data: [..._utilities_dataParser__WEBPACK_IMPORTED_MODULE_5__.numberToBytes(_vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2_reporttype.report_full, 1)] }
            ];
            const f = (dd) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                try {
                    if (dd.length == 0)
                        return true;
                    const d = dd.shift();
                    cb && cb(d.message);
                    yield this.LinkVciCmd({
                        Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.obd2,
                        stateid: d.id,
                        usbData: d.data, nretry: 3, timeout: 10000
                    });
                    return yield f(dd);
                }
                catch (err) {
                    return false;
                }
            });
            return yield f(args);
        });
    }
    retreiveFFDTCMonData(cb = null) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const args = [
                { id: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2.monitoricon, message: 'Reading Monitor Icon', data: [] },
                { id: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2.Read_Dtc, message: 'Reading DTC', data: [] },
                { id: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2.freezeframe, message: 'Reading FreezeFrame', data: [] },
            ];
            const f = (dd) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                try {
                    if (dd.length == 0)
                        return true;
                    const d = dd.shift();
                    cb && cb(d.message);
                    yield this.LinkVciCmd({
                        Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.obd2,
                        stateid: d.id,
                        usbData: d.data, nretry: 3, timeout: 10000
                    });
                    return yield f(dd);
                }
                catch (err) {
                    return false;
                }
            });
            return yield f(args);
        });
    }
    retreiveDTCData(cb = null) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const args = [
                { id: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2.Read_Dtc, message: 'Reading DTC', data: [] },
            ];
            const f = (dd) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                try {
                    if (dd.length == 0)
                        return true;
                    const d = dd.shift();
                    cb && cb(d.message);
                    yield this.LinkVciCmd({
                        Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.obd2,
                        stateid: d.id,
                        usbData: d.data, nretry: 3, timeout: 10000
                    });
                    return yield f(dd);
                }
                catch (err) {
                    return false;
                }
            });
            return yield f(args);
        });
    }
    getVehicleProfile() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            try {
                yield this.LinkVciCmd({
                    Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.obd2,
                    stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2.ReadVin
                });
                const resp = yield this.LinkVciCmd({
                    Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.obd2,
                    stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2.getymmeprofile
                });
                return resp;
            }
            catch (err) {
                return undefined;
            }
        });
    }
    QueryProtocolCAN(eProtocol) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.LinkVciCmd({
                Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.obd2,
                stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2.Link_To_Prot_N, usbData: _utilities_dataParser__WEBPACK_IMPORTED_MODULE_5__.numberToBytes(eProtocol, 2)
            });
        });
    }
    Erase_OBD2_Dtcs() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const usbData = [];
            //link sid 05
            const data = yield this.LinkVciCmd({
                Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.obd2,
                stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2.Erase_Dtc,
                usbData,
                nretry: 1, timeout: 10000
            });
            // this.logdebug(`erase res: ${data}`)
            let result = "OK";
            if (data == undefined) {
                result = "sent";
            }
            else if (data.status) {
                result = data.error ? data.error : "unknown error";
            }
            return ({ result: result });
        });
    }
    link_OBD2_SPECIALTEST_SID6() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const usbData = [];
            //link sid 05
            const data = yield this.LinkVciCmd({
                Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.obd2,
                stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2.ReadService6,
                usbData,
                nretry: 1, timeout: 4000
            });
            let result = "OK";
            if (data == undefined) {
                result = "sent";
            }
            return ({ result: result });
        });
    }
    link_OBD2_SPECIALTEST_SID5() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const usbData = [];
            const data = yield this.LinkVciCmd({
                Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.obd2,
                stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2.ReadService5,
                usbData,
                nretry: 1, timeout: 4000
            });
            let result = "OK";
            if (data == undefined) {
                result = "sent";
            }
            return ({ result: result });
        });
    }
    link_OBD2_SPECIALTEST_SID8() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const usbData = [];
            const data = yield this.LinkVciCmd({
                Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.obd2,
                stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2.ReadService8,
                usbData,
                nretry: 1, timeout: 4000
            });
            let result = "OK";
            if (data == undefined) {
                result = "Not support";
            }
            else {
                switch (data[0]) {
                    case _vcistd__WEBPACK_IMPORTED_MODULE_0__.enumEVAPStatus.eEVAPSTATE_NO_SUP:
                        result = "Not support";
                        break;
                    case _vcistd__WEBPACK_IMPORTED_MODULE_0__.enumEVAPStatus.eEVAPSTATE_SUP_OK:
                        result = "OK";
                        break;
                    case _vcistd__WEBPACK_IMPORTED_MODULE_0__.enumEVAPStatus.eEVAPSTATE_RES_NEG:
                    case _vcistd__WEBPACK_IMPORTED_MODULE_0__.enumEVAPStatus.eEVAPSTATE_RES_NO:
                        result = "Sent";
                        break;
                }
            }
            return ({ result: result });
        });
    }
    getVehReport_MIL_Status() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            let ret = { MilStatus: undefined };
            const usbData = [..._utilities_dataParser__WEBPACK_IMPORTED_MODULE_5__.numberToBytes(_vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2_reporttype.report_mil_stat, 1)];
            const data = yield this.LinkVciCmd({
                Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.obd2,
                stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2.GetReport,
                usbData
            });
            let j = _utilities_dataParser__WEBPACK_IMPORTED_MODULE_5__.bytesToString(data);
            if (j.search("Mil Status") > 0) {
                var temp = JSON.parse(j.replace("Mil Status", "MilStatus"));
                return temp;
            }
            let v = new Int8Array(new Uint8Array(data).buffer)[0];
            if (!(0,util__WEBPACK_IMPORTED_MODULE_4__.isNullOrUndefined)(v)) {
                if (v === 0) {
                    return ({ MilStatus: "OFF" });
                }
                else {
                    return ({ MilStatus: "ON" });
                }
            }
            return ret;
        });
    }
    getVehReport_DriveCycle_Mon_List() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolve) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                {
                    try {
                        const usbData = [..._utilities_dataParser__WEBPACK_IMPORTED_MODULE_5__.numberToBytes(_vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2_reporttype.report_drivecycle_mon_list, 1)];
                        const data = yield this.LinkVciCmd({
                            Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.obd2,
                            stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2.GetReport,
                            usbData
                        });
                        let j = _utilities_dataParser__WEBPACK_IMPORTED_MODULE_5__.bytesToString(data);
                        this.logdebug(j);
                        return resolve(JSON.parse(j));
                    }
                    catch (err) {
                        this.logdebug(err);
                        return resolve({});
                    }
                }
            }));
        });
    }
    getVehReport_DriveCycle_Mon_Text(textid) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolve) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                try {
                    const usbData = [..._utilities_dataParser__WEBPACK_IMPORTED_MODULE_5__.numberToBytes(_vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2_reporttype.report_drivecycle_mon_text, 1), ..._utilities_dataParser__WEBPACK_IMPORTED_MODULE_5__.numberToBytes(textid, 1)];
                    const data = yield this.LinkVciCmd({
                        Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.obd2,
                        stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2.GetReport,
                        usbData, nretry: 1, timeout: 4000
                    });
                    this.logdebug("textid:" + _utilities_dataParser__WEBPACK_IMPORTED_MODULE_5__.numberToBytes(textid, 1));
                    let j = _utilities_dataParser__WEBPACK_IMPORTED_MODULE_5__.bytesToString(data).split('``').join('`');
                    j = j.split('`').join('\\n');
                    this.logdebug(j);
                    return resolve(JSON.parse(j));
                }
                catch (err) {
                    this.logdebug(err);
                    return resolve({});
                }
            }));
        });
    }
    getYMMEString() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolve) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                try {
                    const usbData = [..._utilities_dataParser__WEBPACK_IMPORTED_MODULE_5__.numberToBytes(_vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2_reporttype.report_ymme, 1)];
                    const t = yield this.LinkVciCmd({
                        Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.obd2,
                        stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2.GetReport,
                        usbData, nretry: 3, timeout: 7000
                    });
                    let j = _utilities_dataParser__WEBPACK_IMPORTED_MODULE_5__.bytesToString(t);
                    //this.logdebug(j);
                    return resolve(JSON.parse(j));
                }
                catch (err) {
                    this.logdebug('getYMMEString error:' + err);
                    return resolve({});
                }
            }));
        });
    }
    getMonitorIcon() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolve) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                try {
                    const usbData = [..._utilities_dataParser__WEBPACK_IMPORTED_MODULE_5__.numberToBytes(_vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2_reporttype.report_mon_stat, 1)];
                    const t = yield this.LinkVciCmd({
                        Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.obd2,
                        stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2.GetReport,
                        usbData, nretry: 3, timeout: 7000
                    });
                    let j = _utilities_dataParser__WEBPACK_IMPORTED_MODULE_5__.bytesToString(t);
                    //this.logdebug(j);
                    return resolve(JSON.parse(j));
                }
                catch (err) {
                    this.logdebug('getMonitorIcon error:' + err);
                    return resolve({});
                }
            }));
        });
    }
    //01-03-2022 11:16 Quoc Do added for get new monitor status using PID 41
    getMonitorIcon_SID41() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolve) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                try {
                    const usbData = [..._utilities_dataParser__WEBPACK_IMPORTED_MODULE_5__.numberToBytes(_vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2_reporttype.report_TDC_monitor, 1)];
                    const t = yield this.LinkVciCmd({
                        Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.obd2,
                        stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2.GetReport,
                        usbData, nretry: 3, timeout: 7000
                    });
                    let j = _utilities_dataParser__WEBPACK_IMPORTED_MODULE_5__.bytesToString(t);
                    //this.logdebug(j);
                    return resolve(JSON.parse(j));
                }
                catch (err) {
                    this.logdebug('getMonitorIcon_SID41 error:' + err);
                    return resolve({});
                }
            }));
        });
    }
    //01-03-2022 11:39 Quoc Do added new function read RPM VSS
    //{
    //   "Rpm": 16383,
    //   "Vss": 10
    // }
    getRPM_VSS() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolve) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                try {
                    const usbData = [..._utilities_dataParser__WEBPACK_IMPORTED_MODULE_5__.numberToBytes(_vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2_reporttype.report_RPM_VSS, 1)];
                    const t = yield this.LinkVciCmd({
                        Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.obd2,
                        stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2.GetReport,
                        usbData, nretry: 3, timeout: 7000
                    });
                    let j = _utilities_dataParser__WEBPACK_IMPORTED_MODULE_5__.bytesToString(t);
                    //this.logdebug(j);
                    return resolve(JSON.parse(j));
                }
                catch (err) {
                    this.logdebug('getRPM_VSS error:' + err);
                    return resolve({});
                }
            }));
        });
    }
    getVehicleInfo_SID9() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolve) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                try {
                    const usbData = [..._utilities_dataParser__WEBPACK_IMPORTED_MODULE_5__.numberToBytes(_vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2_reporttype.report_vehicle_info, 1)];
                    const t = yield this.LinkVciCmd({
                        Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.obd2,
                        stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2.GetReport,
                        usbData, nretry: 3, timeout: 7000
                    });
                    let j = _utilities_dataParser__WEBPACK_IMPORTED_MODULE_5__.bytesToString(t);
                    this.logdebug('Vehicle info res:' + j);
                    return resolve(JSON.parse(j));
                }
                catch (err) {
                    this.logdebug('Vehicle info err:' + err);
                    return resolve({});
                }
            }));
        });
    }
    getFreezeFrameDTCInfo() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolve) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                try {
                    const usbData = [..._utilities_dataParser__WEBPACK_IMPORTED_MODULE_5__.numberToBytes(_vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2_reporttype.report_ff_info, 1)];
                    const t = yield this.LinkVciCmd({
                        Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.obd2,
                        stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2.GetReport,
                        usbData, nretry: 3, timeout: 7000
                    });
                    let j = JSON.parse(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_5__.bytesToString(t));
                    if (j.length > 0) {
                        j[3] = j[3] != undefined ? _vcistd__WEBPACK_IMPORTED_MODULE_0__.EnumSeverityText[j[3]] : _vcistd__WEBPACK_IMPORTED_MODULE_0__.EnumSeverityText[0];
                    }
                    //this.logdebug(j);
                    return resolve(j);
                }
                catch (err) {
                    this.logdebug('FF Dtc Info err:' + err);
                    return resolve({});
                }
            }));
        });
    }
    getFreezeFrameLiveData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolve) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                try {
                    const usbData = [
                        ..._utilities_dataParser__WEBPACK_IMPORTED_MODULE_5__.numberToBytes(_vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2_reporttype.report_ff_ld, 1),
                    ];
                    const t = yield this.LinkVciCmd({
                        Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.obd2,
                        stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2.GetReport,
                        usbData,
                        nretry: 3,
                        timeout: 7000,
                    });
                    let j = _utilities_dataParser__WEBPACK_IMPORTED_MODULE_5__.bytesToString(t);
                    return resolve(JSON.parse(j));
                }
                catch (err) {
                    this.logdebug('FF LD Info err:' + err);
                    return resolve({});
                }
            }));
        });
    }
    getOBD2DTCInfo() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolve) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                try {
                    const usbData = [..._utilities_dataParser__WEBPACK_IMPORTED_MODULE_5__.numberToBytes(_vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2_reporttype.report_dtcs, 1)];
                    const t = yield this.LinkVciCmd({
                        Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.obd2,
                        stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2.GetReport,
                        usbData, nretry: 3, timeout: 7000
                    });
                    let j = _utilities_dataParser__WEBPACK_IMPORTED_MODULE_5__.bytesToString(t);
                    //this.logdebug(j);
                    return resolve(JSON.parse(j));
                }
                catch (err) {
                    this.logdebug('getOBD2DTCInfo:' + err);
                    return resolve({});
                }
            }));
        });
    }
    getOBD2DTCDef(moduleindex, dtcindex) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolve) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                const usbData = [..._utilities_dataParser__WEBPACK_IMPORTED_MODULE_5__.numberToBytes(_vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2_reporttype.report_dtc_def, 1),
                    ..._utilities_dataParser__WEBPACK_IMPORTED_MODULE_5__.numberToBytes(moduleindex, 1), ..._utilities_dataParser__WEBPACK_IMPORTED_MODULE_5__.numberToBytes(dtcindex, 1)];
                const t = yield this.LinkVciCmd({
                    Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.obd2,
                    stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2.GetReport,
                    usbData, nretry: 3, timeout: 7000
                });
                let j = _utilities_dataParser__WEBPACK_IMPORTED_MODULE_5__.bytesToString(t);
                //this.logdebug(j);
                return resolve(JSON.parse(j));
            }));
        });
    }
    getVehReport_YMME_PROFILE() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            let ret = [];
            let MaxNumBuff = 1;
            const __flink = (idx, MaxNumBuff) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                if (idx >= MaxNumBuff)
                    return ret;
                const usbData = [..._utilities_dataParser__WEBPACK_IMPORTED_MODULE_5__.numberToBytes(_vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2_reporttype.report_vehicle_data_ymme_profile, 1)];
                const t = yield this.LinkVciCmd({
                    Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.obd2,
                    stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2.GetReport,
                    usbData, nretry: 3, timeout: 1000 // decrease timeout
                });
                ret.push({ bufferIndex: idx, data: t });
                this.logdebug('link buffer:' + idx);
                return yield __flink(idx + 1, MaxNumBuff);
            });
            return yield __flink(0, MaxNumBuff);
        });
    }
    getVehReport_OBD2_LD_SID1_BUFF_new() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            let ret = [];
            let MaxNumBuff = 2;
            const __flink = (idx, MaxNumBuff) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                if (idx >= MaxNumBuff)
                    return ret;
                const usbData = [..._utilities_dataParser__WEBPACK_IMPORTED_MODULE_5__.numberToBytes(_vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2_reporttype.report_sid1, 1),
                    ..._utilities_dataParser__WEBPACK_IMPORTED_MODULE_5__.numberToBytes(idx, 1)];
                const t = yield this.LinkVciCmd({
                    Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.obd2,
                    stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2.GetReport,
                    usbData, nretry: 1, timeout: 4000
                });
                ret.push({ bufferIndex: idx, data: t });
                this.logdebug('link buffer:' + idx);
                return yield __flink(idx + 1, MaxNumBuff);
            });
            return yield __flink(0, MaxNumBuff);
        });
    }
    // public async getVehReport_OBD2_FF_SID2_BUFF() {
    //     return await this.LinkHIDUSBCmd(USBHIDCommand_64.eVEHICLE_DATA_OBD2_FF_SID2_BUFF);
    // }
    getVehReport_OBD2_FF_SID2_BUFF_RAW_new() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            let ret = [];
            let MaxNumBuff = 2;
            const __flink = (idx, MaxNumBuff) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                if (idx >= MaxNumBuff)
                    return ret;
                const usbData = [..._utilities_dataParser__WEBPACK_IMPORTED_MODULE_5__.numberToBytes(_vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2_reporttype.report_sid2, 1),
                    ..._utilities_dataParser__WEBPACK_IMPORTED_MODULE_5__.numberToBytes(idx, 1)];
                const t = yield this.LinkVciCmd({
                    Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.obd2,
                    stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2.GetReport,
                    usbData, nretry: 1, timeout: 4000
                });
                ret.push({ bufferIndex: idx, data: t });
                this.logdebug('link buffer:' + idx);
                return yield __flink(idx + 1, MaxNumBuff);
            });
            return yield __flink(0, MaxNumBuff);
        });
    }
    getVehReport_OBD2_DTC_SID37A_BUFF_new() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            let ret = [];
            let MaxNumBuff = 2;
            const __flink = (idx, MaxNumBuff) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                if (idx >= MaxNumBuff)
                    return ret;
                const usbData = [..._utilities_dataParser__WEBPACK_IMPORTED_MODULE_5__.numberToBytes(_vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2_reporttype.report_sid37A, 1),
                    ..._utilities_dataParser__WEBPACK_IMPORTED_MODULE_5__.numberToBytes(idx, 1)];
                const t = yield this.LinkVciCmd({
                    Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.obd2,
                    stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2.GetReport,
                    usbData, nretry: 1, timeout: 4000
                });
                ret.push({ bufferIndex: idx, data: t });
                this.logdebug('link buffer:' + idx);
                return yield __flink(idx + 1, MaxNumBuff);
            });
            return yield __flink(0, MaxNumBuff);
        });
    }
    getVehReport_OBD2_SPECIALTEST_SID5_BUFF_new() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            let ret = [];
            let MaxNumBuff = 1;
            const __flink = (idx, MaxNumBuff) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                if (idx >= MaxNumBuff)
                    return ret;
                const usbData = [..._utilities_dataParser__WEBPACK_IMPORTED_MODULE_5__.numberToBytes(_vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2_reporttype.report_sid5, 1),
                    ..._utilities_dataParser__WEBPACK_IMPORTED_MODULE_5__.numberToBytes(idx, 1)];
                const t = yield this.LinkVciCmd({
                    Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.obd2,
                    stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2.GetReport,
                    usbData, nretry: 1, timeout: 10000
                });
                ret.push({ bufferIndex: idx, data: t });
                this.logdebug('link buffer:' + idx);
                return yield __flink(idx + 1, MaxNumBuff);
            });
            return yield __flink(0, MaxNumBuff);
        });
    }
    getVehReport_OBD2_SPECIALTEST_SID6_BUFF_v2() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            let ret = [];
            let MaxNumBuff = 1;
            const __flink = (idx, MaxNumBuff) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                if (idx >= MaxNumBuff)
                    return ret;
                let usbData = [..._utilities_dataParser__WEBPACK_IMPORTED_MODULE_5__.numberToBytes(_vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2_reporttype.report_sid6_tids, 1),
                    ..._utilities_dataParser__WEBPACK_IMPORTED_MODULE_5__.numberToBytes(idx, 1)];
                const t = yield this.LinkVciCmd({
                    Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.obd2,
                    stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2.GetReport,
                    usbData, nretry: 1, timeout: 10000
                });
                const j = JSON.parse(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_5__.bytesToString(t));
                this.logdebug(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_5__.bytesToString(t));
                if (lodash__WEBPACK_IMPORTED_MODULE_2__.isObject(j)) {
                    var keys = Object.keys(j);
                    var obj = {};
                    for (let item of j) {
                        var keys = Object.keys(item);
                        usbData = [..._utilities_dataParser__WEBPACK_IMPORTED_MODULE_5__.numberToBytes(_vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2_reporttype.report_sid6_comp_ids, 1),
                            ..._utilities_dataParser__WEBPACK_IMPORTED_MODULE_5__.numberToBytes(item[keys[0]], 1)];
                        this.logdebug('Get CompText of textid:' + item[keys[0]]);
                        const m = yield this.LinkVciCmd({
                            Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.obd2,
                            stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2.GetReport,
                            usbData, nretry: 1, timeout: 10000
                        });
                        const c = JSON.parse(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_5__.bytesToString(m));
                        if (lodash__WEBPACK_IMPORTED_MODULE_2__.isObject(c)) {
                            obj[keys[0]] = c;
                        }
                        else {
                            obj[keys[0]] = '';
                        }
                    }
                    //let text = DataParser.getStringOfObj(obj);
                    ret.push({ bufferIndex: idx, data: obj });
                }
                else {
                    ret.push({ bufferIndex: idx, data: t });
                }
                this.logdebug('link buffer:' + idx);
                return yield __flink(idx + 1, MaxNumBuff);
            });
            //  const testid = await __flink(0, MaxNumBuff);
            return yield __flink(0, MaxNumBuff);
        });
    }
    getVehReport_OBD2_SPECIALTEST_SID6_BUFF_new() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            let ret = [];
            let MaxNumBuff = 1;
            const __flink = (idx, MaxNumBuff) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                if (idx >= MaxNumBuff)
                    return ret;
                const usbData = [..._utilities_dataParser__WEBPACK_IMPORTED_MODULE_5__.numberToBytes(_vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2_reporttype.report_sid6, 1),
                    ..._utilities_dataParser__WEBPACK_IMPORTED_MODULE_5__.numberToBytes(idx, 1)];
                const t = yield this.LinkVciCmd({
                    Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.obd2,
                    stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2.GetReport,
                    usbData, nretry: 1, timeout: 10000
                });
                ret.push({ bufferIndex: idx, data: t });
                this.logdebug('link buffer:' + idx);
                return yield __flink(idx + 1, MaxNumBuff);
            });
            return yield __flink(0, MaxNumBuff);
        });
    }
    getVehReport_OBD2_SPECIALTEST_SID8_BUFF_new() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            let ret = [];
            let MaxNumBuff = 1;
            const __flink = (idx, MaxNumBuff) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                if (idx >= MaxNumBuff)
                    return ret;
                const usbData = [..._utilities_dataParser__WEBPACK_IMPORTED_MODULE_5__.numberToBytes(_vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2_reporttype.report_sid8, 1),
                    ..._utilities_dataParser__WEBPACK_IMPORTED_MODULE_5__.numberToBytes(idx, 1)];
                const t = yield this.LinkVciCmd({
                    Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.obd2,
                    stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2.GetReport,
                    usbData, nretry: 1, timeout: 4000
                });
                ret.push({ bufferIndex: idx, data: t });
                this.logdebug('link buffer:' + idx);
                return yield __flink(idx + 1, MaxNumBuff);
            });
            return yield __flink(0, MaxNumBuff);
        });
    }
    getVehReport_OBD2_VEHINFO_SID9_BUFF_new() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            let ret = [];
            let MaxNumBuff = 2;
            const __flink = (idx, MaxNumBuff) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                if (idx >= MaxNumBuff)
                    return ret;
                const usbData = [..._utilities_dataParser__WEBPACK_IMPORTED_MODULE_5__.numberToBytes(_vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2_reporttype.report_sid9, 1),
                    ..._utilities_dataParser__WEBPACK_IMPORTED_MODULE_5__.numberToBytes(idx, 1)];
                const t = yield this.LinkVciCmd({
                    Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.obd2,
                    stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2.GetReport,
                    usbData, nretry: 1, timeout: 4000
                });
                ret.push({ bufferIndex: idx, data: t });
                this.logdebug('link buffer:' + idx);
                return yield __flink(idx + 1, MaxNumBuff);
            });
            return yield __flink(0, MaxNumBuff);
        });
    }
    // 18-06-2022 Nguyen Pham added function for new smog check and LED status
    SetOBD2SmogCheckState(loc) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.logdebug("Set Smog Check Location:" + loc);
            const usbData = [..._utilities_dataParser__WEBPACK_IMPORTED_MODULE_5__.numberToBytes(loc, 1)];
            try {
                const val = yield this.LinkVciCmd({
                    Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.obd2,
                    stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2.SetSmogCheckState, usbData
                });
                if ((0,util__WEBPACK_IMPORTED_MODULE_4__.isNullOrUndefined)(val)) {
                    return false;
                }
                // this.logdebug("Smog check val: "+ JSON.stringify(val))
                // else {
                //   return true;
                // }
            }
            catch (error) {
                return false;
            }
            return true;
        });
    }
    SetOBD2SmogCheckCountry(loc) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.logdebug("Set Smog Check Country:" + loc);
            const usbData = [..._utilities_dataParser__WEBPACK_IMPORTED_MODULE_5__.numberToBytes(loc, 1)];
            try {
                const val = yield this.LinkVciCmd({
                    Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.obd2,
                    stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2.SetSmogCheckCountry, usbData
                });
                if ((0,util__WEBPACK_IMPORTED_MODULE_4__.isNullOrUndefined)(val)) {
                    return false;
                }
            }
            catch (error) {
                return false;
            }
            return true;
        });
    }
    GetOBD2LedStatus() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolve) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                try {
                    const usbData = [..._utilities_dataParser__WEBPACK_IMPORTED_MODULE_5__.numberToBytes(_vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2.GetLedStatus, 1)];
                    const t = yield this.LinkVciCmd({
                        Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.obd2,
                        stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2.GetReport,
                        usbData
                    });
                    let j = _utilities_dataParser__WEBPACK_IMPORTED_MODULE_5__.bytesToString(t);
                    this.logdebug('Get Led status: ' + j);
                    return resolve(JSON.parse(j));
                }
                catch (err) {
                    this.logdebug('err GetLedStatus:' + JSON.stringify(err));
                    return resolve({});
                }
            }));
        });
    }
    GetOBD2SmogCheckState() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolve) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                try {
                    const t = yield this.LinkVciCmd({
                        Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.obd2,
                        stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2.GetSmogCheckState,
                    });
                    return resolve(t[0]);
                }
                catch (err) {
                    this.logdebug('err GetSmogCheck:' + JSON.stringify(err));
                    return resolve({});
                }
            }));
        });
    }
    GetOBD2SmogCheckCountry() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolve) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                try {
                    const t = yield this.LinkVciCmd({
                        Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.obd2,
                        stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2.GetSmogCheckCountry,
                    });
                    return resolve(t[0]);
                }
                catch (err) {
                    this.logdebug('err GetSmogCheck:' + JSON.stringify(err));
                    return resolve({});
                }
            }));
        });
    }
    SetFuelType(type) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.logdebug("Set Fuel Type: " + type);
            const usbData = [..._utilities_dataParser__WEBPACK_IMPORTED_MODULE_5__.numberToBytes(type, 1)];
            try {
                const val = yield this.LinkVciCmd({
                    Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.obd2,
                    stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2.SetFuelType, usbData
                });
                if ((0,util__WEBPACK_IMPORTED_MODULE_4__.isNullOrUndefined)(val)) {
                    return false;
                }
                // else {
                //   return true;
                // }
            }
            catch (error) {
                return false;
            }
            return true;
        });
    }
    GetFuelType() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolve) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                try {
                    const t = yield this.LinkVciCmd({
                        Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.obd2,
                        stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2.GetFuelType,
                    });
                    const enumFuelType = {
                        0: 'Unknown',
                        1: 'GAS',
                        2: 'DIESEL',
                    };
                    let fuelType = enumFuelType[t[0]];
                    this.logdebug('GetFuelType: ' + fuelType);
                    return resolve({ result: fuelType });
                }
                catch (err) {
                    this.logdebug('err GetFuelType:' + JSON.stringify(err));
                    return resolve({});
                }
            }));
        });
    }
    GetVehType() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolve) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                try {
                    const t = yield this.LinkVciCmd({
                        Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.obd2,
                        stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2.GetVehType,
                    });
                    const enumVehType = {
                        0: 'Unknown',
                        1: 'Normal',
                        2: 'Electric',
                        3: 'Hybrid',
                    };
                    let vehType = enumVehType[t[0]];
                    this.logdebug('GetVehType: ' + vehType);
                    return resolve({ result: vehType });
                }
                catch (err) {
                    this.logdebug('err GetVehType:' + JSON.stringify(err));
                    return resolve({});
                }
            }));
        });
    }
    SetVehType(type) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.logdebug("Set Veh Type: " + type);
            const usbData = [..._utilities_dataParser__WEBPACK_IMPORTED_MODULE_5__.numberToBytes(type, 1)];
            try {
                const val = yield this.LinkVciCmd({
                    Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.obd2,
                    stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2.SetVehType, usbData
                });
                if ((0,util__WEBPACK_IMPORTED_MODULE_4__.isNullOrUndefined)(val)) {
                    return false;
                }
            }
            catch (error) {
                return false;
            }
            return true;
        });
    }
    GetBluetoothName() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolve) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                try {
                    const t = yield this.LinkVciCmd({
                        Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.tool,
                        stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_BT_setting.get_bt_name,
                    });
                    this.logdebug(JSON.stringify(t));
                    let name = _utilities_dataParser__WEBPACK_IMPORTED_MODULE_5__.bytesToString(t);
                    return resolve(name);
                }
                catch (err) {
                    this.logdebug('err GetBlueToothName:' + JSON.stringify(err));
                    return resolve(null);
                }
            }));
        });
    }
    SetBluetoothName(newName) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            // dummy script, need to change when new FW support BT name release
            let nameString = yield _utilities_dataParser__WEBPACK_IMPORTED_MODULE_5__.stringToBytes(newName);
            let nameLength = nameString.length; // change this
            const usbData = [nameLength, ...nameString];
            try {
                const val = yield this.LinkVciCmd({
                    Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.tool,
                    stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_BT_setting.set_bt_name, usbData
                });
                if ((0,util__WEBPACK_IMPORTED_MODULE_4__.isNullOrUndefined)(val)) {
                    return false;
                }
            }
            catch (error) {
                return false;
            }
            return true;
        });
    }
}
OBD2.ɵfac = /*@__PURE__*/ function () { let ɵOBD2_BaseFactory; return function OBD2_Factory(t) { return (ɵOBD2_BaseFactory || (ɵOBD2_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetInheritedFactory"](OBD2)))(t || OBD2); }; }();
OBD2.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({ token: OBD2, factory: OBD2.ɵfac, providedIn: 'root' });



/***/ }),

/***/ 89750:
/*!***************************************************************!*\
  !*** ./src/app/services/innova-vci-service/src/obd/obd2ff.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OBD2FF": function() { return /* binding */ OBD2FF; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _obd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./obd */ 29326);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ 202);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilities/dataParser */ 81402);
/* harmony import */ var _vcistd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vcistd */ 48860);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);






class OBD2FF extends _obd__WEBPACK_IMPORTED_MODULE_0__.OBDx {
    constructor() {
        super(...arguments);
        this.theFFBuffer = [];
        this.theFFBufferDTC = null;
        this.theFFBufferItemName = [];
        this.theFFBufferUnit = [];
        this.itemFFValuesBuffer = [];
        this.bNoRecordedItem = 0;
        this.buffer = {};
        this.transferStatus = null;
    }
    formatBuffer(name, type, buffer) {
        const bufferType = [type];
        const segmentType = _utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.numberToBytes(_vcistd__WEBPACK_IMPORTED_MODULE_3__.BufferSegmentTypes[name], 2);
        const bufferLength = _utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.numberToBytes(buffer.length, 4);
        return [...bufferType, ...segmentType, ...bufferLength, ...buffer];
    }
    appendBuffer(name, data, type = 0) {
        const buff = this.buffer[name] || [];
        let formatedBuffer = this.formatBuffer(name, type, data);
        this.buffer[name] = buff.concat(formatedBuffer);
    }
    getFFDataCommand(itemType, pkgIndex = null, language = _vcistd__WEBPACK_IMPORTED_MODULE_3__.Languages.ENGLISH, unit = _vcistd__WEBPACK_IMPORTED_MODULE_3__.Metrics.USA) {
        const iCommand = [100, 0, 0, 0];
        const iReportId = [0, 0, 0, 0];
        const iVehicleIndex = [0];
        const reserved = [0];
        const dataType = _vcistd__WEBPACK_IMPORTED_MODULE_3__.VehicleDataTypes.OBD2_FF_SID2_BUFF;
        const enumDataType = [dataType];
        const dataBufferIndex = [0];
        const enumItemType = [lodash__WEBPACK_IMPORTED_MODULE_1__.get(_vcistd__WEBPACK_IMPORTED_MODULE_3__.FreezeFrameDataTypes, itemType, 1)];
        let params, iSize;
        params = [0, 0, 0, 0];
        if (language !== undefined)
            params.push(language);
        if (unit !== undefined)
            params.push(unit);
        // package index
        if (pkgIndex !== null) {
            iSize = [pkgIndex, 0, 0, 0];
        }
        else {
            iSize = _utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.numberToBytes(params.length, 4).reverse();
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
        const enumDataType = [lodash__WEBPACK_IMPORTED_MODULE_1__.get(_vcistd__WEBPACK_IMPORTED_MODULE_3__.VehicleDataTypes, dataType, 1)];
        const dataBufferIndex = [bufferIndex];
        const iSize = _utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.numberToBytes(params.length, 4).reverse();
        const data = [].concat(iReportId, iCommand, iVehicleIndex, enumDataType, dataBufferIndex, reserved, iSize, params);
        return {
            dataType,
            bufferIndex,
            params,
            data,
        };
    }
    getFFBuffer(language = _vcistd__WEBPACK_IMPORTED_MODULE_3__.Languages.ENGLISH, unit = _vcistd__WEBPACK_IMPORTED_MODULE_3__.Metrics.USA) {
        return new Promise((resolve) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.logdebug('Getting freezeframe');
            this.theFFBuffer = [];
            this.theFFBufferDTC = null;
            this.theFFBufferItemName = [];
            this.theFFBufferUnit = [];
            const retData = { data: null, raw: null };
            let isNeedCheckFF = true;
            if (isNeedCheckFF && !(yield this.getFFHeader(language, unit)))
                isNeedCheckFF = false;
            if (isNeedCheckFF && !(yield this.getFFDTC(language, unit)))
                isNeedCheckFF = false;
            if (isNeedCheckFF && !(yield this.getFFItemNames(language, unit)))
                isNeedCheckFF = false;
            if (isNeedCheckFF && !(yield this.getFFItemUnits(language, unit)))
                isNeedCheckFF = false;
            this.itemFFValuesBuffer = [];
            if (isNeedCheckFF && !(yield this.getFFItemValues(language, unit)))
                isNeedCheckFF = false;
            const parseItemFF = (datas, lensize = 1) => {
                //LEN
                const retdata = [];
                for (let i = 0; i < datas.length;) {
                    if (retdata.length >= this.bNoRecordedItem)
                        break;
                    const j = _utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.arrayToNumber(datas.slice(i), lensize, false); //datas[i++];
                    i += lensize;
                    if (j > 0)
                        retdata.push(datas.slice(i, i + j));
                    else
                        retdata.push(null);
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
                            name: _utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.getStringOfObj(listItemNames[j]),
                            value: _utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.getStringOfObj(listItemValues[j]),
                            unit: _utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.getStringOfObj(listItemUnits[j]) || '',
                        });
                    }
                    return retdatas;
                }
                catch (exception) {
                    this.logdebug(exception);
                    return null;
                }
            };
            retData.data = {
                dtc: { code: _utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.getStringOfObj(this.theFFBufferDTC), definition: null },
                datas: parseFreezeFrameData(),
            };
            this.parseFFItemValues();
            // await this.getLDRecordTime(language, unit);
            this.appendBuffer('FREEZE_FRAME', this.theFFBuffer);
            return resolve(retData);
        }));
    }
    getFFDTC(language = _vcistd__WEBPACK_IMPORTED_MODULE_3__.Languages.ENGLISH, unit = _vcistd__WEBPACK_IMPORTED_MODULE_3__.Metrics.USA) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const command = this.getFFDataCommand('DTC_INFO', null, language, unit);
            let theBuffer = [];
            try {
                this.logdebug('FreezeFrame Get DTC');
                // const result = await this.executor.execAsync({ ...commands.getVehicleV5Data, data: command.data });
                const { data } = yield this.Link({
                    id: 0x80,
                    data: command.data
                });
                const result = data;
                this.logdebug(`resule : ${JSON.stringify(result)}`);
                // parse result
                if (!lodash__WEBPACK_IMPORTED_MODULE_1__.isEmpty(result)) {
                    let milDtcLen = result[0];
                    theBuffer = theBuffer.concat(lodash__WEBPACK_IMPORTED_MODULE_1__.slice(result, 0, milDtcLen + 1));
                    this.logdebug('FreezeFrame ' + JSON.stringify(result));
                }
                else {
                    theBuffer.push(0);
                    this.logdebug('FreezeFrame : ' + 'NO DTC FF');
                }
            }
            catch (error) {
                // no FF DTC
                theBuffer.push(0);
            }
            this.theFFBufferDTC = theBuffer;
            this.theFFBuffer = this.theFFBuffer.concat(theBuffer);
            return Promise.resolve(theBuffer.length > 0);
        });
    }
    getFFHeader(language = _vcistd__WEBPACK_IMPORTED_MODULE_3__.Languages.ENGLISH, unit = _vcistd__WEBPACK_IMPORTED_MODULE_3__.Metrics.USA) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const command = this.getFFDataCommand('LD_HEADER', null);
            try {
                this.logdebug('FreezeFrame getFFHeader');
                // const result = await this.executor.execAsync({ ...commands.getVehicleV5Data, data: command.data });
                const { data } = yield this.Link({
                    id: 0x80,
                    data: command.data
                });
                const result = data;
                // parse result
                this.bNoRecordedItem = result[5];
                this.logdebug('FreezeFrame : Number recorded: ' + this.bNoRecordedItem);
                // number of items (2 bytes)
                this.theFFBuffer = this.theFFBuffer.concat([this.bNoRecordedItem, 0]);
                // return Promise.resolve(true);
                //Hung vo update to ensure number record > 0
                return Promise.resolve(this.bNoRecordedItem > 0);
            }
            catch (error) {
                //throw error;
                this.logdebug('FreezeFrame' + JSON.stringify(error));
                return Promise.resolve(false);
            }
        });
    }
    getFFItemNames(language = _vcistd__WEBPACK_IMPORTED_MODULE_3__.Languages.ENGLISH, unit = _vcistd__WEBPACK_IMPORTED_MODULE_3__.Metrics.USA, pkgIndex = 0) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const command = this.getFFDataCommand('LD_ITEM_NAME_STRING', pkgIndex, language, unit);
            this.logdebug('FreezeFrame getFFItemNames :' + `packageIndex ${pkgIndex}`);
            // const result = await this.executor.execAsync({ ...commands.getVehicleV5Data, data: command.data });
            const { data } = yield this.Link({
                id: 0x80,
                data: command.data
            });
            const result = data;
            this.logdebug('FreezeFrame getFFItemNames' + `length of response ${result ? result.length : 0}`);
            if (result && result.length === 512) {
                // parse result
                this.transferStatus = result.length === 512 ? result[510] : _vcistd__WEBPACK_IMPORTED_MODULE_3__.TransferStatus.COMPLETED;
                //names is as [len1 (2 bytes), name1, len2 (2 bytes), name2, ...]
                //since some last bytes of the buffer with 512 bytes may not use, so we only add meaningful data to the final buffer
                let namesBufferIndex = 0;
                for (let i = 0; i < this.bNoRecordedItem; i++) {
                    const itemNameBytes = [result[namesBufferIndex++], result[namesBufferIndex++]];
                    let itemNameLen = _utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.bytesToInt(itemNameBytes, 2, 0);
                    let itemNameArr = lodash__WEBPACK_IMPORTED_MODULE_1__.slice(result, namesBufferIndex, namesBufferIndex + itemNameLen);
                    namesBufferIndex = namesBufferIndex + itemNameLen;
                    this.theFFBufferItemName = this.theFFBufferItemName.concat(itemNameBytes, itemNameArr);
                    this.theFFBuffer = this.theFFBuffer.concat(itemNameBytes, itemNameArr);
                }
                if (this.transferStatus === _vcistd__WEBPACK_IMPORTED_MODULE_3__.TransferStatus.TRANSFERRING) {
                    // more packages are still pending, keep request for data
                    yield this.getFFItemNames(language, unit, pkgIndex + 1);
                }
                return Promise.resolve(this.transferStatus === _vcistd__WEBPACK_IMPORTED_MODULE_3__.TransferStatus.COMPLETED);
            }
            return Promise.resolve(false);
        });
    }
    getFFItemUnits(language = _vcistd__WEBPACK_IMPORTED_MODULE_3__.Languages.ENGLISH, unit = _vcistd__WEBPACK_IMPORTED_MODULE_3__.Metrics.USA, pkgIndex = 0) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolve) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                const command = this.getFFDataCommand('LD_ITEM_UNIT_STRING', pkgIndex, language, unit);
                this.logdebug('FreezeFrame getFFItemUnits : ' + `packageIndex ${pkgIndex}`);
                // const result = await this.executor.execAsync({ ...commands.getVehicleV5Data, data: command.data });
                const { data } = yield this.Link({
                    id: 0x80,
                    data: command.data
                });
                const result = data;
                this.logdebug('FreezeFrame getFFItemUnits : ' + `length of response ${result ? result.length : 0}`);
                if (result && result.length === 512) {
                    // parse result
                    this.transferStatus = result.length === 512 ? result[510] : _vcistd__WEBPACK_IMPORTED_MODULE_3__.TransferStatus.COMPLETED;
                    //names is as [len1 (1 byte), unit1, len2 (1 byte), unit2, ...]
                    //since some last bytes of the buffer with 512 bytes may not use, so we only add meaningful data to the final buffer
                    let unitsBufferIndex = 0;
                    for (let i = 0; i < this.bNoRecordedItem; i++) {
                        const itemUnitBytes = [result[unitsBufferIndex]];
                        let itemUnitLen = result[unitsBufferIndex++];
                        let itemUnitArr = lodash__WEBPACK_IMPORTED_MODULE_1__.slice(result, unitsBufferIndex, unitsBufferIndex + itemUnitLen);
                        unitsBufferIndex = unitsBufferIndex + itemUnitLen;
                        this.theFFBufferUnit = this.theFFBufferUnit.concat(itemUnitBytes, itemUnitArr);
                        this.theFFBuffer = this.theFFBuffer.concat(itemUnitBytes, itemUnitArr);
                    }
                    if (this.transferStatus === _vcistd__WEBPACK_IMPORTED_MODULE_3__.TransferStatus.TRANSFERRING) {
                        // more packages are still pending, keep request for data
                        yield this.getFFItemUnits(language, unit, pkgIndex + 1);
                    }
                    return resolve(this.transferStatus === _vcistd__WEBPACK_IMPORTED_MODULE_3__.TransferStatus.COMPLETED);
                }
                return resolve(false);
            }));
        });
    }
    getFFItemValues(language = _vcistd__WEBPACK_IMPORTED_MODULE_3__.Languages.ENGLISH, unit = _vcistd__WEBPACK_IMPORTED_MODULE_3__.Metrics.USA, pkgIndex = 0) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const command = this.getFFDataCommand('LD_ITEM_VALUE_STRING', pkgIndex, language, unit);
            this.logdebug('FreezeFrame getFFItemValues ' + `packageIndex ${pkgIndex}`);
            // let result = await this.executor.execAsync({ ...commands.getVehicleV5Data, data: command.data });
            const { data } = yield this.Link({
                id: 0x80,
                data: command.data
            });
            let result = data;
            this.logdebug('FreezeFrame getFFItemValues ' + `length of response ${result ? result.length : 0}`);
            if (result && result.length === 512) {
                // parse result
                this.transferStatus = result.length === 512 ? result[510] : _vcistd__WEBPACK_IMPORTED_MODULE_3__.TransferStatus.COMPLETED;
                result = lodash__WEBPACK_IMPORTED_MODULE_1__.take(result, result.length - 2);
                this.itemFFValuesBuffer = this.itemFFValuesBuffer.concat(result);
                if (this.transferStatus === _vcistd__WEBPACK_IMPORTED_MODULE_3__.TransferStatus.TRANSFERRING) {
                    // more packages are still pending, keep request for data
                    yield this.getFFItemValues(language, unit, pkgIndex + 1);
                }
                return Promise.resolve(this.transferStatus === _vcistd__WEBPACK_IMPORTED_MODULE_3__.TransferStatus.COMPLETED);
            }
            return Promise.resolve(false);
        });
    }
    parseFFItemValues() {
        let valuesBuffer = this.itemFFValuesBuffer;
        if (valuesBuffer.length > 0) {
            let valuesBufferIndex = 0;
            let theBuffer = [];
            let itemValueIndex = 0;
            for (let i = 0; i < this.bNoRecordedItem; i++) {
                const itemValueBytes = [valuesBuffer[itemValueIndex++], valuesBuffer[itemValueIndex++]];
                let itemValueLen = _utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.bytesToInt(itemValueBytes, 2, 0);
                let itemValueArr = lodash__WEBPACK_IMPORTED_MODULE_1__.slice(valuesBuffer, itemValueIndex, itemValueIndex + itemValueLen);
                itemValueIndex = itemValueIndex + itemValueLen;
                theBuffer = theBuffer.concat(itemValueBytes, itemValueArr);
            }
            this.theFFBuffer = this.theFFBuffer.concat(theBuffer);
        }
    }
}
OBD2FF.ɵfac = /*@__PURE__*/ function () { let ɵOBD2FF_BaseFactory; return function OBD2FF_Factory(t) { return (ɵOBD2FF_BaseFactory || (ɵOBD2FF_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetInheritedFactory"](OBD2FF)))(t || OBD2FF); }; }();
OBD2FF.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: OBD2FF, factory: OBD2FF.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2586:
/*!*****************************************************************!*\
  !*** ./src/app/services/innova-vci-service/src/obd/obdUtils.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "enumProtocolToString": function() { return /* binding */ enumProtocolToString; }
/* harmony export */ });
/* harmony import */ var _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../standard/enums_Global */ 45611);

function enumProtocolToString(eprotocol) {
    switch (eprotocol) {
        case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_UNKNOWN: return "UNKNOWN";
        case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_NO: return "Protocol NO";
        case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_VPW: return "Protocol VPW";
        case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_PWM: return "Protocol PWM";
        case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_ISO9141: return "Protocol ISO9141";
        case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_KW2000: return "Protocol KW2000";
        case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_CAN500KBAUD: return "Protocol CAN500KBAUD";
        case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_XCAN500KBAUD: return "Protocol XCAN500KBAUD";
        case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_CAN250KBAUD: return "Protocol CAN250KBAUD";
        case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_XCAN250KBAUD: return "Protocol XCAN250KBAUD";
        case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_BOSCH: return "Protocol BOSCH";
        case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_RESERVE_10: return "Protocol RESERVE 10";
        case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_RESERVE_11: return "Protocol RESERVE 11";
        case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_RESERVE_12: return "Protocol RESERVE 12";
        case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_RESERVE_13: return "Protocol RESERVE 13";
        case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_RESERVE_14: return "Protocol RESERVE 14";
        case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_KW: return "Protocol KW";
        case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_KW1281: return "Protocol KW1281";
        case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_MUT: return "Protocol MUT";
        case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_CAN_C_UDS: return "Protocol CAN C UDS";
        case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_CAN_I_UDS: return "Protocol CAN I UDS";
        case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_RESERVE_20: return "Protocol RESERVE_20";
        case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_CCD2: return "Protocol CCD2";
        case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_SDL: return "Protocol SDL";
        case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_UBP: return "Protocol UBP";
        case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_MCAN: return "Protocol MCAN";
        case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_MCAN_____UDS: return "Protocol MCAN UDS";
        case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_H99B: return "Protocol H99B";
        case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_95HM: return "Protocol 95HM";
        case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_92HM: return "Protocol 92HM";
        case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_CAN: return "Protocol CAN";
        case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_RESERVE_30: return "Protocol RESERVE_30";
        case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_RESERVE_31: return "Protocol RESERVE 31";
        case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_CCD: return "Protocol CCD";
        case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_SCI: return "Protocol SCI";
        case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_RESERVE_34: return "Protocol RESERVE 34";
        case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_RESERVE_35: return "Protocol RESERVE 35";
        case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_RESERVE_36: return "Protocol RESERVE 36";
        case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_RESERVE_37: return "Protocol RESERVE 37";
        case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_RESERVE_38: return "Protocol RESERVE 38";
        case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_RESERVE_39: return "Protocol RESERVE 39";
        case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_RESERVE_40: return "Protocol RESERVE 40";
        case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_RESERVE_41: return "Protocol RESERVE 41";
        case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_OBD1: return "Protocol OBD1";
        case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_RESERVE_43: return "Protocol RESERVE_43";
        case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_RESERVE_44: return "Protocol RESERVE_44";
        case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_RESERVE_45: return "Protocol RESERVE_45";
        case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_RESERVE_46: return "Protocol RESERVE_46";
        case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_RESERVE_47: return "Protocol RESERVE_47";
        case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_DDL1: return "Protocol DDL1";
        case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_SWCAN: return "Protocol SWCAN";
        case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_RESERVE_50: return "Protocol RESERVE_50";
        case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_MB_ISO: return "Protocol MB_ISO";
        case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_KWFB: return "Protocol KWFB";
        case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_BMW_CAN: return "Protocol BMW_CAN";
        case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_TPCAN_2_0: return "Protocol TPCAN_2_0";
        case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_TPCAN_1_6_KW1281: return "Protocol TPCAN 1.6 KW1281";
        case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_TPCAN_1_6_KW2000: return "Protocol TPCAN 1.6 KW2000";
        case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_KWSSM: return "Protocol KWSSM";
        case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_DDL2: return "Protocol DDL2";
        case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_DS2: return "Protocol DS2";
        case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_CAN_UDS: return "Protocol CAN UDS";
        case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_CANUDS: return "Protocol CAN UDS";
        case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_CAN_D2: return "Protocol CAN D2";
        case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_CAN_GGD: return "Protocol CAN GGD";
        case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_ALDL: return "Protocol ALDL";
        case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_GMLAN: return "Protocol GMLAN";
        case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_MAX: return "Protocol MAX";
        case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_CAN_C: return "Protocol CAN C";
        case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_TCAN: return "Protocol TCAN";
        case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_DS1: return "Protocol DS1";
        case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_DS2_MID: return "Protocol DS2 MID";
        case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_D2: return "Protocol D2";
        case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_GGD: return "Protocol GGD";
        case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_Suzuki_SDL: return "Protocol SDL";
        case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_RESERVE_76: return "Protocol RESERVE 76";
        case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_RESERVE_77: return "Protocol RESERVE 77";
        case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_RESERVE_78: return "Protocol RESERVE 78";
        case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_RESERVE_79: return "Protocol RESERVE 79";
        case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_RESERVE_80: return "Protocol RESERVE 80";
        case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_J1708: return "Protocol J1708";
        case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_J1939: return "Protocol J1939";
        default:
            return "NA";
    }
}


/***/ }),

/***/ 16017:
/*!************************************************************!*\
  !*** ./src/app/services/innova-vci-service/src/obd/ofm.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OFM": function() { return /* binding */ OFM; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _vcistd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vcistd */ 48860);
/* harmony import */ var _obd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./obd */ 29326);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ 202);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utilities_dataParser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../utilities/dataParser */ 81402);
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! util */ 94655);
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);







// import * from './../standard/enums';
class OFM extends _obd__WEBPACK_IMPORTED_MODULE_1__.OBDx {
    ofm_getodometer_pidsupport() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () { return yield this.getofmsupportitem(_vcistd__WEBPACK_IMPORTED_MODULE_0__.VCI_ofm_group.ofm_group_odo); });
    }
    ofm_gettpms_pidsupport() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () { return yield this.getofmsupportitem(_vcistd__WEBPACK_IMPORTED_MODULE_0__.VCI_ofm_group.ofm_group_tpms); });
    }
    ofm_getwarninglight_pidsupport() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () { return yield this.getofmsupportitem(_vcistd__WEBPACK_IMPORTED_MODULE_0__.VCI_ofm_group.ofm_group_warninglight); });
    }
    ofm_getservicecheck_pidsupport() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () { return yield this.getofmsupportitem(_vcistd__WEBPACK_IMPORTED_MODULE_0__.VCI_ofm_group.ofm_group_srv_check); });
    }
    gettpmspid_val() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolve) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                try {
                    this.logdebug('Reading TPMS PID Items...');
                    const data = yield this.getofmsupportitem(_vcistd__WEBPACK_IMPORTED_MODULE_0__.VCI_ofm_group.ofm_group_tpms);
                    this.logdebug('Reading TPMS PID Items successfully...');
                    let resultdisplay = _utilities_dataParser__WEBPACK_IMPORTED_MODULE_3__.ObjtoStringBeauty(data);
                    var obj = JSON.parse(resultdisplay);
                    //this.logdebug(resultdisplay);
                    if (lodash__WEBPACK_IMPORTED_MODULE_2__.isObject(obj)) {
                        const nPid = obj.num_profile;
                        //this.logdebug("number pid:" + nPid);
                        const modules = [];
                        const modules_val = [];
                        for (let pididx = 0; pididx < nPid; pididx++) {
                            const profileid = obj.list[pididx].profileid;
                            const ofm_item = obj.list[pididx].ofm_item;
                            //this.logdebug("ofm_item"+ ofm_item);
                            //this.logdebug("profileid"+ profileid);
                            //this.logdebug('Reading ofm profile ' + profileid.toString());
                            modules.push({
                                profileid: profileid, ofm_item: ofm_item
                            });
                            const profile_data = yield this.getofmprofileid_value(profileid);
                            //this.logdebug(profile_data);
                            var obj_temp = JSON.parse(profile_data);
                            if (lodash__WEBPACK_IMPORTED_MODULE_2__.isObject(obj_temp)) {
                                modules_val.push({ ofm_item: _vcistd__WEBPACK_IMPORTED_MODULE_0__.Enum_ofm_Items[ofm_item], pid: obj_temp.itemid, Value: obj_temp.value, Unit: obj_temp.unit });
                            }
                        }
                        //this.logdebug(j);
                        this.logdebug({ num_profie: nPid, list: modules });
                        //return resolve({ num_profie:nPid ,list: modules});
                        return resolve(modules_val);
                    }
                    else {
                        return resolve(null);
                    }
                }
                catch (err) {
                    this.logdebug(err);
                    return resolve({});
                }
            }));
        });
    }
    getodogroup_val() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolve) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                try {
                    this.logdebug('Reading Odometer Items...');
                    const data = yield this.getofmsupportitem(_vcistd__WEBPACK_IMPORTED_MODULE_0__.VCI_ofm_group.ofm_group_odo);
                    this.logdebug('Reading Odometer Items successfully...');
                    let resultdisplay = _utilities_dataParser__WEBPACK_IMPORTED_MODULE_3__.ObjtoStringBeauty(data);
                    var obj = JSON.parse(resultdisplay);
                    //this.logdebug(resultdisplay);
                    if (lodash__WEBPACK_IMPORTED_MODULE_2__.isObject(obj)) {
                        const nPid = obj.num_profile;
                        //this.logdebug("number pid:" + nPid);
                        const modules = [];
                        const modules_val = [];
                        for (let pididx = 0; pididx < nPid; pididx++) {
                            const profileid = obj.list[pididx].profileid;
                            const ofm_item = obj.list[pididx].ofm_item;
                            //this.logdebug("ofm_item"+ ofm_item);
                            //this.logdebug("profileid"+ profileid);
                            //this.logdebug('Reading ofm profile ' + profileid.toString());
                            modules.push({
                                profileid: profileid, ofm_item: ofm_item
                            });
                            const profile_data = yield this.getofmprofileid_value(profileid);
                            //this.logdebug(profile_data);
                            var obj_temp = JSON.parse(profile_data);
                            if (lodash__WEBPACK_IMPORTED_MODULE_2__.isObject(obj_temp)) {
                                modules_val.push({ ofm_item: _vcistd__WEBPACK_IMPORTED_MODULE_0__.Enum_ofm_Items[ofm_item], pid: obj_temp.itemid, Value: obj_temp.value, Unit: obj_temp.unit });
                            }
                        }
                        //this.logdebug(j);
                        this.logdebug({ num_profie: nPid, list: modules });
                        //return resolve({ num_profie:nPid ,list: modules});
                        return resolve(modules_val);
                    }
                    else {
                        return resolve(null);
                    }
                }
                catch (err) {
                    this.logdebug(err);
                    return resolve({});
                }
            }));
        });
    }
    getwarninglight_val() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolve) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                try {
                    this.logdebug('Reading warning light status...');
                    const data = yield this.getofmsupportitem(_vcistd__WEBPACK_IMPORTED_MODULE_0__.VCI_ofm_group.ofm_group_warninglight);
                    this.logdebug('Reading warning light status successfully...');
                    let resultdisplay = _utilities_dataParser__WEBPACK_IMPORTED_MODULE_3__.ObjtoStringBeauty(data);
                    var obj = JSON.parse(resultdisplay);
                    //this.logdebug(resultdisplay);
                    if (lodash__WEBPACK_IMPORTED_MODULE_2__.isObject(obj)) {
                        const nPid = obj.num_profile;
                        //this.logdebug("number pid:" + nPid);
                        const modules = [];
                        const modules_val = [];
                        for (let pididx = 0; pididx < nPid; pididx++) {
                            const profileid = obj.list[pididx].profileid;
                            const ofm_item = obj.list[pididx].ofm_item;
                            //this.logdebug("ofm_item"+ ofm_item);
                            //this.logdebug("profileid"+ profileid);
                            //this.logdebug('Reading ofm profile ' + profileid.toString());
                            modules.push({
                                profileid: profileid, ofm_item: ofm_item
                            });
                            const profile_data = yield this.getofmprofileid_value(profileid);
                            //this.logdebug(profile_data);
                            var obj_temp = JSON.parse(profile_data);
                            if (lodash__WEBPACK_IMPORTED_MODULE_2__.isObject(obj_temp)) {
                                modules_val.push({ ofm_item: _vcistd__WEBPACK_IMPORTED_MODULE_0__.Enum_ofm_Items[ofm_item], pid: obj_temp.itemid, Value: obj_temp.value, Unit: obj_temp.unit });
                            }
                        }
                        this.logdebug({ num_profie: nPid, list: modules });
                        //return resolve({ num_profie:nPid ,list: modules});
                        return resolve(modules_val);
                    }
                    else {
                        return resolve(null);
                    }
                }
                catch (err) {
                    this.logdebug(err);
                    return resolve({});
                }
            }));
        });
    }
    getservicecheck_val() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolve) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                try {
                    this.logdebug('Reading Service Check Items...');
                    const data = yield this.getofmsupportitem(_vcistd__WEBPACK_IMPORTED_MODULE_0__.VCI_ofm_group.ofm_group_srv_check);
                    this.logdebug('Reading Service Check Items status successfully...');
                    let resultdisplay = _utilities_dataParser__WEBPACK_IMPORTED_MODULE_3__.ObjtoStringBeauty(data);
                    var obj = JSON.parse(resultdisplay);
                    if (lodash__WEBPACK_IMPORTED_MODULE_2__.isObject(obj)) {
                        //this.logdebug(resultdisplay);
                        const nPid = obj.num_profile;
                        //this.logdebug("number pid:" + nPid);
                        const modules = [];
                        const modules_val = [];
                        for (let pididx = 0; pididx < nPid; pididx++) {
                            const profileid = obj.list[pididx].profileid;
                            const ofm_item = obj.list[pididx].ofm_item;
                            //this.logdebug("ofm_item"+ ofm_item);
                            //this.logdebug("profileid"+ profileid);
                            //this.logdebug('Reading ofm profile ' + profileid.toString());
                            modules.push({
                                profileid: profileid, ofm_item: ofm_item
                            });
                            const profile_data = yield this.getofmprofileid_value(profileid);
                            //this.logdebug(profile_data);
                            var obj_temp = JSON.parse(profile_data);
                            if (lodash__WEBPACK_IMPORTED_MODULE_2__.isObject(obj_temp)) {
                                modules_val.push({ ofm_item: _vcistd__WEBPACK_IMPORTED_MODULE_0__.Enum_ofm_Items[ofm_item], pid: obj_temp.itemid, Value: obj_temp.value, Unit: obj_temp.unit });
                            }
                        }
                        this.logdebug({ num_profie: nPid, list: modules });
                        //return resolve({ num_profie:nPid ,list: modules});
                        return resolve(modules_val);
                    }
                    else {
                        return resolve(null);
                    }
                }
                catch (err) {
                    this.logdebug(err);
                    return resolve({});
                }
            }));
        });
    }
    getofmsupportitem(ofm_group) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolve) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                try {
                    const usbData = [..._utilities_dataParser__WEBPACK_IMPORTED_MODULE_3__.numberToBytes(ofm_group, 1)];
                    const mod = [];
                    this.logdebug('Checking ofm item support ' + ofm_group);
                    const data = yield this.LinkVciCmd({
                        Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.ofm,
                        stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_ofm.getsupport_item,
                        usbData, nretry: 1, timeout: 30000
                    });
                    //this.logdebug(data);
                    // if(_.isNullOrUndefined(data))
                    // {
                    //   return resolve(null);
                    // }
                    if (data != undefined) {
                        let index = 0;
                        const nPid = data[index++];
                        this.logdebug("number PID:" + nPid);
                        for (let pididx = 0; pididx < nPid; pididx++) {
                            const profileid = _utilities_dataParser__WEBPACK_IMPORTED_MODULE_3__.bytesToInt([data[index++], data[index++]], 2, 0);
                            const ofm_item = _utilities_dataParser__WEBPACK_IMPORTED_MODULE_3__.bytesToInt([data[index++], data[index++]], 2, 0);
                            //this.logdebug("ofm_item"+ ofm_item);
                            //this.logdebug("profileid"+ profileid);
                            mod.push({
                                ofm_item: ofm_item, profileid: profileid
                            });
                        }
                        //this.logdebug(mod);
                        return resolve({ num_profile: nPid, list: mod });
                    }
                    else {
                        return resolve({ num_profile: 0, list: [] });
                    }
                }
                catch (err) {
                    this.logdebug(err);
                    return resolve(null); // changed by ngoclb
                }
            }));
        });
    }
    getofmprofileid_value(profileid) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolve) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                try {
                    const usbData = [..._utilities_dataParser__WEBPACK_IMPORTED_MODULE_3__.numberToBytes(profileid, 2)];
                    const modules = [];
                    let j = {};
                    this.logdebug('Reading ofm profile ' + profileid.toString());
                    const data = yield this.LinkVciCmd({
                        Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.ofm,
                        stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_ofm.read_item,
                        usbData, nretry: 3, timeout: 10000
                    });
                    if ((0,util__WEBPACK_IMPORTED_MODULE_4__.isNullOrUndefined)(data)) {
                        j = { pid: profileid, value: "N/S", unit: "null" };
                    }
                    else {
                        j = JSON.parse(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_3__.bytesToString(data));
                    }
                    //this.logdebug("read" + j);
                    return resolve(j);
                }
                catch (err) {
                    this.logdebug(err);
                    return resolve({});
                }
            }));
        });
    }
}
OFM.ɵfac = /*@__PURE__*/ function () { let ɵOFM_BaseFactory; return function OFM_Factory(t) { return (ɵOFM_BaseFactory || (ɵOFM_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetInheritedFactory"](OFM)))(t || OFM); }; }();
OFM.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: OFM, factory: OFM.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 93235:
/*!****************************************************************!*\
  !*** ./src/app/services/innova-vci-service/src/obd/symptom.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Symptom": function() { return /* binding */ Symptom; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _vcistd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vcistd */ 48860);
/* harmony import */ var _obd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./obd */ 29326);
/* harmony import */ var _utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../utilities/dataParser */ 81402);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);





class Symptom extends _obd__WEBPACK_IMPORTED_MODULE_1__.OBDx {
    initprocess() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            try {
                //this.logdebug("initialize Symptom");
                yield this.LinkVciCmd({
                    Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.symptom,
                    stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_symptom.symptom_init
                });
            }
            catch (err) {
                this.logdebug(err);
            }
        });
    }
    getScreen_UI() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            try {
                //this.logdebug("Getting ui");
                /*Get Screen Title here*/
                var usbData = [..._utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.numberToBytes(_vcistd__WEBPACK_IMPORTED_MODULE_0__.VCI_symptom_getui.symptom_get_title, 1)];
                let _title = yield this.LinkVciCmd({
                    Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.symptom,
                    stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_symptom.symptom_getui,
                    usbData, nretry: 1, timeout: 4000
                });
                let _title_str = _utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.bytesToString(_title);
                //this.logdebug(_title_str);
                /*Get Body screen here*/
                usbData = [..._utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.numberToBytes(_vcistd__WEBPACK_IMPORTED_MODULE_0__.VCI_symptom_getui.symptom_get_body, 1)];
                let _body = yield this.LinkVciCmd({
                    Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.symptom,
                    stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_symptom.symptom_getui,
                    usbData, nretry: 1, timeout: 4000
                });
                let _body_str = _utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.bytesToString(_body).split('\n').join('\\n');
                _body_str = _body_str.split('\r').join('\\r');
                //this.logdebug(_body_str);
                /*Get Optionlist here*/
                usbData = [..._utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.numberToBytes(_vcistd__WEBPACK_IMPORTED_MODULE_0__.VCI_symptom_getui.symptom_get_optionlist, 1)];
                let _optlist = yield this.LinkVciCmd({
                    Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.symptom,
                    stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_symptom.symptom_getui,
                    usbData, nretry: 1, timeout: 4000
                });
                let _optlist_str = _utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.bytesToString(_optlist);
                //this.logdebug(_optlist_str);
                /*Get Optionlist here*/
                usbData = [..._utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.numberToBytes(_vcistd__WEBPACK_IMPORTED_MODULE_0__.VCI_symptom_getui.symptom_get_softkey, 1)];
                let _softkey = yield this.LinkVciCmd({
                    Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.symptom,
                    stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_symptom.symptom_getui,
                    usbData, nretry: 1, timeout: 4000
                });
                let _softkey_str = _utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.bytesToString(_softkey);
                //this.logdebug(_softkey_str);
                return { title: (JSON.parse(_title_str).Title), body: (JSON.parse(_body_str).Body), option: _optlist_str, softkey: _softkey_str };
            }
            catch (err) {
                this.logdebug(err);
                return ({});
            }
        });
    }
    set_useroptionselection(index) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const usbData = [..._utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.numberToBytes(_vcistd__WEBPACK_IMPORTED_MODULE_0__.VCI_symptom_selection_type.symptom_normal_selection, 1), ..._utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.numberToBytes(index, 1)];
                const data = yield this.LinkVciCmd({
                    Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.symptom,
                    stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_symptom.symptom_setselection,
                    usbData, nretry: 1, timeout: 2000
                });
                return true;
            }
            catch (err) {
                this.logdebug(err);
                return false;
            }
        });
    }
    set_softkeyselection(index) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const usbData = [..._utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.numberToBytes(_vcistd__WEBPACK_IMPORTED_MODULE_0__.VCI_symptom_selection_type.symtom_softkey_selection, 1), ..._utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.numberToBytes(index, 1)];
                const data = yield this.LinkVciCmd({
                    Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.symptom,
                    stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_symptom.symptom_setselection,
                    usbData, nretry: 1, timeout: 2000
                });
                return true;
            }
            catch (err) {
                this.logdebug(err);
            }
        });
    }
}
Symptom.ɵfac = /*@__PURE__*/ function () { let ɵSymptom_BaseFactory; return function Symptom_Factory(t) { return (ɵSymptom_BaseFactory || (ɵSymptom_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetInheritedFactory"](Symptom)))(t || Symptom); }; }();
Symptom.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: Symptom, factory: Symptom.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 48860:
/*!***************************************************************!*\
  !*** ./src/app/services/innova-vci-service/src/obd/vcistd.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnumVCIProcStates": function() { return /* binding */ EnumVCIProcStates; },
/* harmony export */   "EnumSeverityText": function() { return /* binding */ EnumSeverityText; },
/* harmony export */   "VCIProg": function() { return /* binding */ VCIProg; },
/* harmony export */   "VCICmd_Unsolicited_msg": function() { return /* binding */ VCICmd_Unsolicited_msg; },
/* harmony export */   "VCICmd_BT_setting": function() { return /* binding */ VCICmd_BT_setting; },
/* harmony export */   "VCICmd_obd2": function() { return /* binding */ VCICmd_obd2; },
/* harmony export */   "enumEVAPStatus": function() { return /* binding */ enumEVAPStatus; },
/* harmony export */   "VCICmd_obd2_reporttype": function() { return /* binding */ VCICmd_obd2_reporttype; },
/* harmony export */   "VCICmd_nwscan": function() { return /* binding */ VCICmd_nwscan; },
/* harmony export */   "VCICmd_system": function() { return /* binding */ VCICmd_system; },
/* harmony export */   "VCICmd_YMME": function() { return /* binding */ VCICmd_YMME; },
/* harmony export */   "VCICmd_ofm": function() { return /* binding */ VCICmd_ofm; },
/* harmony export */   "VCI_ofm_group": function() { return /* binding */ VCI_ofm_group; },
/* harmony export */   "VCICmd_livedata": function() { return /* binding */ VCICmd_livedata; },
/* harmony export */   "VCICmd_symptom": function() { return /* binding */ VCICmd_symptom; },
/* harmony export */   "VCI_symptom_getui": function() { return /* binding */ VCI_symptom_getui; },
/* harmony export */   "VCI_symptom_selection_type": function() { return /* binding */ VCI_symptom_selection_type; },
/* harmony export */   "VCI_symptom_softkey_type": function() { return /* binding */ VCI_symptom_softkey_type; },
/* harmony export */   "Enum_Nws_Link_Status": function() { return /* binding */ Enum_Nws_Link_Status; },
/* harmony export */   "EnumInnovaGroups": function() { return /* binding */ EnumInnovaGroups; },
/* harmony export */   "EnumInspectionGroups": function() { return /* binding */ EnumInspectionGroups; },
/* harmony export */   "Enum_ofm_Items": function() { return /* binding */ Enum_ofm_Items; },
/* harmony export */   "VCICmd_tool": function() { return /* binding */ VCICmd_tool; },
/* harmony export */   "UNIT_ID": function() { return /* binding */ UNIT_ID; },
/* harmony export */   "GUI_LANGUAGE_ID": function() { return /* binding */ GUI_LANGUAGE_ID; },
/* harmony export */   "SF_FunctionGroup": function() { return /* binding */ SF_FunctionGroup; },
/* harmony export */   "VCICmd_GUI": function() { return /* binding */ VCICmd_GUI; },
/* harmony export */   "VCI_Data_Logging": function() { return /* binding */ VCI_Data_Logging; },
/* harmony export */   "VCI_GUI_Param_Type": function() { return /* binding */ VCI_GUI_Param_Type; },
/* harmony export */   "SYS_PROC_ID": function() { return /* binding */ SYS_PROC_ID; },
/* harmony export */   "SYS_CMD_ID": function() { return /* binding */ SYS_CMD_ID; },
/* harmony export */   "GUI_KEY_CODE": function() { return /* binding */ GUI_KEY_CODE; },
/* harmony export */   "enumSmogCheckLoc": function() { return /* binding */ enumSmogCheckLoc; },
/* harmony export */   "enumSmogCheckLocCountry": function() { return /* binding */ enumSmogCheckLocCountry; },
/* harmony export */   "enumFuelType": function() { return /* binding */ enumFuelType; },
/* harmony export */   "ICOMMANDS": function() { return /* binding */ ICOMMANDS; },
/* harmony export */   "USBHIDCommand_64": function() { return /* binding */ USBHIDCommand_64; },
/* harmony export */   "FreezeFrameDataTypes": function() { return /* binding */ FreezeFrameDataTypes; },
/* harmony export */   "Metrics": function() { return /* binding */ Metrics; },
/* harmony export */   "TransferStatus": function() { return /* binding */ TransferStatus; },
/* harmony export */   "Languages": function() { return /* binding */ Languages; },
/* harmony export */   "VehicleDataTypes": function() { return /* binding */ VehicleDataTypes; },
/* harmony export */   "BufferSegmentTypes": function() { return /* binding */ BufferSegmentTypes; }
/* harmony export */ });
/**
 * @Author: quocdo-macbook
 * @Date:   2020-12-21T08:20:18+07:00
 * @Last modified by:   quocdo-macbook
 * @Last modified time: 2022-03-01T11:39:56+07:00
 */
const EnumVCIProcStates = {
    0x11: 'Proc Error',
    0xaa: 'Proc Normal',
    0x22: 'Proc Busy',
    0xbb: 'Proc Not supported',
    0xff: 'Proc General Fail',
};
const EnumSeverityText = {
    0x00: "Not Severity",
    0x01: "Low",
    0x02: "Medium",
    0x03: "High"
};
const VCIProg = {
    systemdata: 1 /*related with system data*/,
    tool: 2 /*related tool */,
    obd2: 3 /*start obd2 link*/,
    oem: 4 /*return system , subsystem , group*/,
    read_report: 5,
    ofm: 6,
    enable_jsonfmt: 7 /*ThuyetHN:added for json format*/,
    disable_jsonfmt: 8 /*ThuyetHN:added for json format*/,
    enable_jsonfmt_def: 9 /*ThuyetHN:added for json format def*/,
    disable_jsonfmt_def: 10 /*ThuyetHN:added for json format def*/,
    livedata: 11,
    symptom: 100,
    gui: 200,
    ymme: 300,
    unsolicited_msg: 65000,
    keepalive_obd2: 65533,
    keepalive_oem: 65534,
    max: 65535,
};
const VCICmd_Unsolicited_msg = {
    msg_cancel: 1,
    msg_gui_ack: 2,
    msg_max: 255
};
const VCICmd_BT_setting = {
    get_bt_name: 0x20,
    set_bt_name: 0x21,
};
const VCICmd_obd2 = {
    start_Query: 0,
    Link_To_Prot_N: 1,
    monitoricon: 2,
    ReadVin: 3,
    Read_Dtc: 4,
    freezeframe: 5,
    Erase_Dtc: 6,
    Read_all: 7,
    pid: 8 /*
    arg 1 : 0 , get supported
    arg 1 : 1 , get pid data , arg 2 : pid id
    return size + pid val if successful
    */,
    ReadService9: 9,
    ReadService5: 15,
    ReadService6: 16,
    ReadService8: 18,
    GetLedStatus: 0x20,
    SetSmogCheckState: 0x21,
    GetSmogCheckState: 0x22,
    SetSmogCheckCountry: 0x23,
    GetSmogCheckCountry: 0x24,
    SetFuelType: 0x25,
    GetFuelType: 0x26,
    SetVehType: 0x27,
    GetVehType: 0x28,
    getymmeprofile: 0xfd,
    GetReport: 0xfe,
    Max: 255,
};
const enumEVAPStatus = {
    eEVAPSTATE_NONE: 0,
    eEVAPSTATE_NO_SUP: 1,
    eEVAPSTATE_SUP_OK: 2,
    eEVAPSTATE_RES_NEG: 3,
    eEVAPSTATE_RES_NO: 4,
    eEVAPSTATE_MAX: 0xFF
};
const VCICmd_obd2_reporttype = {
    report_full: 0,
    report_sid1: 1,
    report_sid2: 2,
    report_sid3: 3,
    report_sid4: 4,
    report_sid5: 5,
    report_sid6: 6,
    report_sid7: 7,
    report_sid8: 8,
    report_sid9: 9,
    report_sid10: 10,
    report_sid37A: 11,
    report_mil_stat: 16,
    report_drivecycle_mon_list: 0x11,
    report_drivecycle_mon_text: 0x12,
    report_sid6_tids: 0x13,
    report_sid6_comp_ids: 0x14,
    report_vehicle_data_ymme_profile: 0x21,
    report_mon_stat: 0x31,
    report_ff_info: 0x32,
    report_ff_ld: 0x33,
    report_dtcs: 0x34,
    report_dtc_def: 0x35,
    report_vin: 0x36,
    report_ymme: 0x37,
    report_vehicle_info: 0x39,
    report_TDC_monitor: 0x41,
    report_RPM_VSS: 0xCD,
    Max: 255,
};
const VCICmd_nwscan = {
    start: 0,
    getsystem: 1,
    getsubsystem: 2,
    listoemprofileid_old: 3 /*[number system 1byte]{<System id><number subsystem><SubSystem>}*/,
    querysystem: 4,
    readdtsystem: 5,
    erasedtcsystem: 6,
    exitsystem: 7,
    getdataofsyste: 8,
    readdtcgroup: 9,
    scan_all: 10,
    quick_readsystem: 105,
    quick_readgroup: 106,
    listoemprofileid: 203,
    report_dtc_system: 205,
    get_dtc_def: 206,
    get_dtc_listinspec: 207,
    max: 0xff,
};
const VCICmd_system = {
    getversion: 1,
    getymme: 2,
    setymme: 3,
    setvin: 4,
    resettool: 0xfe,
};
const VCICmd_YMME = {
    init: 1,
    get: 2,
    confirm: 3,
};
const VCICmd_ofm = {
    getsupport_item: 0,
    read_item: 1,
    stream_cfg: 2,
    max: 0xff,
};
const VCI_ofm_group = {
    ofm_group_none: 0,
    ofm_group_odo: 1,
    ofm_group_srv_check: 2,
    ofm_group_warninglight: 3,
    ofm_group_tpms: 4,
    ofm_group_max: 255
};
const VCICmd_livedata = {
    read_itemlist: 0,
    read_itemval: 1,
    read_list_item_val: 2,
    set_system_subsystem: 3,
    start_hybrid_ld: 4,
    read_item_info: 5,
    set_record_dtc_trigger: 8,
    reset_record_dtc_trigger: 9,
    check_getnumpid_group: 0x14,
    get_listiteminfo: 0x15,
    get_listitemval: 0x16,
    get_itemval_v2: 0x17,
    max: 0xff
};
const VCICmd_symptom = {
    symptom_init: 0,
    symptom_getui: 1,
    symptom_setselection: 2,
    symptom_max: 255
};
const VCI_symptom_getui = {
    symptom_get_title: 0,
    symptom_get_body: 1,
    symptom_get_optionlist: 2,
    symptom_get_softkey: 3,
    symptom_getui_max: 255
};
const VCI_symptom_selection_type = {
    symptom_normal_selection: 0,
    symtom_softkey_selection: 1
};
const VCI_symptom_softkey_type = {
    symptom_left_softkey: 0,
    symptom_right_softkey: 1
};
const Enum_Nws_Link_Status = {
    1: 'Not Support',
    2: 'Success',
    3: 'Fail',
    4: 'Special Ford test',
    5: 'Special Honda test',
    6: 'Fail Input Data',
    7: 'Fail User Event',
    8: 'Need Retry OEM Cable',
    9: 'Need Recycle Ignition Key',
};
const EnumInnovaGroups = {
    1: 'OBDII',
    2: 'ABS',
    4: 'SRS',
    8: 'TCM',
    16: 'PCM',
    32: 'ODBI',
    64: 'TPMS',
    128: 'ADAS',
    255: 'All',
};
const EnumInspectionGroups = {
    1: 'Headlight',
    2: 'Taillight',
    3: 'Turn Indicator Light',
    4: 'Stop Light',
    5: 'Foot Brake',
    6: 'Emergency/Parking Brake',
    7: 'Windshield Wiper',
    8: 'Steering',
    9: 'Window',
    10: 'Seat Adjustment',
    11: 'Door',
    12: 'Horn',
    13: 'Odometer',
    14: 'Bumper And Body Condition',
    15: 'Muffler And Exhaust System',
    16: 'Tire',
    17: 'Mirror',
    18: 'Safety Belts',
    254: 'Ispection Group',
    255: 'Unknown'
};
const Enum_ofm_Items = {
    0: 'Unknow',
    1: 'Fuel Sys 1',
    2: 'Fuel Sys 2',
    3: 'Calc Load',
    4: 'ECT',
    5: 'STFT B1',
    6: 'STFT B3',
    7: 'LTFT B1',
    8: 'LTFT B3',
    9: 'STFT B2',
    10: 'STFT B4',
    11: 'LTFT B2',
    12: 'LTFT B4',
    13: 'Fuel Pres',
    14: 'MAP',
    15: 'Eng RPM',
    16: 'Veh Speed',
    17: 'Spark Adv',
    18: 'IAT',
    19: 'MAF',
    20: 'TPS',
    21: 'Air Status',
    22: 'O2SLoc',
    23: 'O2S B1 S1',
    24: 'STFT B1 S1',
    25: 'O2S B1 S2',
    26: 'STFT B1 S2',
    27: 'O2S B1 S3',
    28: 'O2S B2 S1',
    29: 'STFT B1 S3',
    30: 'STFT B2 S1',
    31: 'O2S B1 S4',
    32: 'O2S B2 S2',
    33: 'STFT B1 S4',
    34: 'STFT B2 S2',
    35: 'O2S B3 S1',
    36: 'STFT B3 S1',
    37: 'O2S B3 S2',
    38: 'STFT B3 S2',
    39: 'O2S B2 S3',
    40: 'O2S B4 S1',
    41: 'STFT B2 S3',
    42: 'STFT B4 S1',
    43: 'O2S B2 S4',
    44: 'O2S B4 S2',
    45: 'STFT B2 S4',
    46: 'STFT B4 S2',
    47: 'OBDSup',
    48: 'Aux Input Status',
    49: 'Run Time',
    50: 'MIL Dis',
    51: 'LAMBDA B1 S1',
    52: 'LAMBDA B1 S2',
    53: 'LAMBDA B1 S3',
    54: 'LAMBDA B2 S1',
    55: 'LAMBDA B1 S4',
    56: 'LAMBDA B2 S2',
    57: 'LAMBDA B3 S1',
    58: 'LAMBDA B3 S2',
    59: 'LAMBDA B2 S3',
    60: 'LAMBDA B4 S1',
    61: 'LAMBDA B2 S4',
    62: 'LAMBDA B4 S2',
    63: 'Command EGR',
    64: 'EGR Error',
    65: 'Command EVAP',
    66: 'Fuel Level',
    67: 'Warm-up DTC Clr',
    68: 'Clr Dist',
    69: 'EVAP_VP',
    70: 'BARO',
    71: 'CAT Te 11',
    72: 'CAT Te 21',
    73: 'CAT Te 12',
    74: 'CAT Te 22',
    75: 'ECU Volts',
    76: 'LOAD Value',
    77: 'EQ Ratio',
    78: 'Rel TPS',
    79: 'Ambient',
    80: 'TPS B',
    81: 'TPS C',
    82: 'ACC Pedal D',
    83: 'ACC Pedal E',
    84: 'ACC Pedal F',
    85: 'Command TAC',
    86: 'MIL Time',
    87: 'Clr Time',
    88: 'FUEL_TYP',
    89: 'ALCH_PCT',
    90: 'EVAP_VPA',
    91: 'STSO2FT1',
    92: 'STSO2FT3',
    93: 'LGSO2FT1',
    94: 'LGSO2FT3',
    95: 'STSO2FT2',
    96: 'STSO2FT4',
    97: 'LGSO2FT2',
    98: 'LGSO2FT4',
    99: 'APP_R',
    100: 'BAT_PWR',
    101: 'EOT',
    102: 'FUEL_TIMING',
    103: 'FUEL_RATE',
    104: 'EMIS_SUP',
    105: 'TQ_DD',
    106: 'TQ_ACT',
    107: 'TQ_REF',
    108: 'TQ_MAX1',
    109: 'TQ_MAX2',
    110: 'TQ_MAX3',
    111: 'TQ_MAX4',
    112: 'TQ_MAX5',
    113: 'N/D_STAT',
    114: 'N/G_STAT',
    115: 'GPL_STAT',
    116: 'MAFA',
    117: 'MAFB',
    118: 'ECT 1',
    119: 'ECT 2',
    120: 'IAT 11',
    121: 'IAT 12',
    122: 'IAT 13',
    123: 'IAT 21',
    124: 'IAT 22',
    125: 'IAT 23',
    126: 'EGR_A_CMD',
    127: 'EGR_A_ACT',
    128: 'EGR_A_ERR',
    129: 'EGR_B_CMD',
    130: 'EGR_B_ACT',
    131: 'EGR_B_ERR',
    132: 'IAF_A_CMD',
    133: 'IAF_A_REL',
    134: 'IAF_B_CMD',
    135: 'IAF_B_REL',
    136: 'EGRTA',
    137: 'EGRTB',
    138: 'EGRTD',
    139: 'TAC_A_CMD',
    140: 'TP_A_REL',
    141: 'TAC_B_CMD',
    142: 'TP_B_REL',
    143: 'FRP_A_CMD',
    144: 'FRP_A',
    145: 'FRT_A',
    146: 'FRP_B_CMD',
    147: 'FRP_B',
    148: 'FRT_B',
    149: 'ICP_A_CMD',
    150: 'ICP_A',
    151: 'ICP_B_CMD',
    152: 'ICP_B',
    153: 'TCA_CINP',
    154: 'TCB_CINP',
    155: 'BP_A_CMD',
    156: 'BP_A_ACT',
    157: 'BP_B_CMD',
    158: 'BP_B_ACT',
    159: 'BP_A',
    160: 'BP_B',
    161: 'VGT_A_CMD',
    162: 'VGT_A_ACT',
    163: 'VGT_B_CMD',
    164: 'VGT_B_ACT',
    165: 'VGT_A',
    166: 'VGT_B',
    167: 'WG_A_CMD',
    168: 'WG_A_ACT',
    169: 'WG_ B_CMD',
    170: 'WG_B_ACT',
    171: 'EP_1',
    172: 'EP_2',
    173: 'TCA_RPM',
    174: 'TCB_RPM',
    175: 'TCA_CINT',
    176: 'TCA_COUTT',
    177: 'TCA_TINT',
    178: 'TCA_TOUTT',
    179: 'TCB_CINT',
    180: 'TCB_COUTT',
    181: 'TCB_TINT',
    182: 'TCB_TOUTT',
    183: 'CACT 11',
    184: 'CACT 12',
    185: 'CACT 21',
    186: 'CACT 22',
    187: 'EGT11',
    188: 'EGT12',
    189: 'EGT13',
    190: 'EGT14',
    191: 'EGT21',
    192: 'EGT22',
    193: 'EGT23',
    194: 'EGT24',
    195: 'DPF1_DP',
    196: 'DPF1_INP',
    197: 'DPF1_OUTP',
    198: 'DPF2_DP',
    199: 'DPF2_INP',
    200: 'DPF2_OUTP',
    201: 'DPF1_INT',
    202: 'DPF1_OUTT',
    203: 'DPF2_INT',
    204: 'DPF2_OUTT',
    205: 'NNTE',
    206: 'PNTE',
    207: 'RUN_TIME',
    208: 'IDLE_TIME',
    209: 'PTO_TIME',
    210: 'AECD1_TIME1',
    211: 'AECD1_TIME2',
    212: 'AECD2_TIME1',
    213: 'AECD2_TIME2',
    214: 'AECD3_TIME1',
    215: 'AECD3_TIME2',
    216: 'AECD4_TIME1',
    217: 'AECD4_TIME2',
    218: 'AECD5_TIME1',
    219: 'AECD5_TIME2',
    220: 'AECD6_TIME1',
    221: 'AECD6_TIME2',
    222: 'AECD7_TIME1',
    223: 'AECD7_TIME2',
    224: 'AECD8_TIME1',
    225: 'AECD8_TIME2',
    226: 'AECD9_TIME1',
    227: 'AECD9_TIME2',
    228: 'AECD10_TIME1',
    229: 'AECD10_TIME2',
    230: 'NOX11',
    231: 'NOX12',
    232: 'NOX21',
    233: 'NOX22',
    234: 'MST',
    235: 'REAG_RATE',
    236: 'REAG_DEMD',
    237: 'REAG_LVL',
    238: 'NWI_TIME',
    239: 'PM11',
    240: 'PM21',
    241: 'MAP_A',
    242: 'MAP_B',
    243: 'SCR_INDUCE_SYSTEM',
    244: 'SCR_INDUCE_SYSTEM_HIST1',
    245: 'SCR_INDUCE_SYSTEM_HIST2',
    246: 'SCR_INDUCE_SYSTEM_HIST3',
    247: 'SCR_INDUCE_SYSTEM_HIST4',
    248: 'SCR_IND_DIST_1N',
    249: 'SCR_IND_DIST_1D',
    250: 'SCR_IND_DIST_2N',
    251: 'SCR_IND_DIST_3N',
    252: 'SCR_IND_DIST_4N',
    253: 'AECD11_TIME1',
    254: 'AECD11_TIME2',
    255: 'AECD12_TIME1',
    256: 'AECD12_TIME2',
    257: 'AECD13_TIME1',
    258: 'AECD13_TIME2',
    259: 'AECD14_TIME1',
    260: 'AECD14_TIME2',
    261: 'AECD15_TIME1',
    262: 'AECD15_TIME2',
    263: 'AECD16_TIME1',
    264: 'AECD16_TIME2',
    265: 'AECD17_TIME1',
    266: 'AECD17_TIME2',
    267: 'AECD18_TIME1',
    268: 'AECD18_TIME2',
    269: 'AECD19_TIME1',
    270: 'AECD19_TIME2',
    271: 'AECD20_TIME1',
    272: 'AECD20_TIME2',
    273: 'DPF_REGEN',
    274: 'NOX_ADS_REGEN',
    275: 'NOX_ADS_DESULF',
    276: 'DPF_REGEN_PCT',
    277: 'DPF_REGEN_AVGT',
    278: 'DPF_REGEN_AVGD',
    279: 'O2S11_PCT',
    280: 'O2S12_PCT',
    281: 'O2S21_PCT',
    282: 'O2S22_PCT',
    283: 'TP_G',
    284: 'TQ_FR',
    285: 'PM11_ACTIVE',
    286: 'PM11_REGEN',
    287: 'PM21_ACTIVE',
    288: 'PM21_REGEN',
    289: 'MI_DISP_VOBD',
    290: 'MI_MODE_VOBD',
    291: 'VOBD_RDY',
    292: 'VOBD_MI_TIME',
    293: 'MI_MODE_ECU',
    294: 'OBD_MI_TIME',
    295: 'OBD_B1_TIME',
    296: 'FP1',
    297: 'FIQ1',
    298: 'FIT1',
    299: 'IFB1',
    300: 'FP2',
    301: 'FIQ2',
    302: 'FIT2',
    303: 'IFB2',
    304: 'MI_TIME_CUM',
    305: 'NOX_WARN_ACT',
    306: 'INDUC_L1',
    307: 'INDUC_L2',
    308: 'INDUC_L3',
    309: 'REAG_QUAL_TIME',
    310: 'REAG_CON_TIME',
    311: 'REAG_DOSE_TIME',
    312: 'EGR_TIME',
    313: 'NOX_DTC_TIME',
    314: 'EGT15',
    315: 'EGT16',
    316: 'EGT17',
    317: 'EGT18',
    318: 'EGT25',
    319: 'EGT26',
    320: 'EGT27',
    321: 'EGT28',
    322: 'O2S13_PCT',
    323: 'O2S14_PCT',
    324: 'O2S23_PCT',
    325: 'O2S24_PCT',
    326: 'ENG_FUEL_RATE',
    327: 'VEH_FUEL_RATE',
    328: 'EXH_RATE',
    329: 'FUELSYSA_B1',
    330: 'FUELSYSB_B1',
    331: 'FUELSYSA_B2',
    332: 'FUELSYSB_B2',
    333: 'FUELSYSA_B3',
    334: 'FUELSYSB_B3',
    335: 'FUELSYSA_B4',
    336: 'FUELSYSB_B4',
    337: 'NOXC11',
    338: 'NOXC12',
    339: 'NOXC21',
    340: 'NOXC22',
    341: 'CYL_RATE',
    342: 'HEV_MODE',
    343: 'HEV_BATT_V',
    344: 'HEV_BATT_A',
    345: 'DEF Type',
    346: 'DEF_CON',
    347: 'DEF_T',
    348: 'DEF_LVL',
    349: 'GEAR_RCMD',
    350: 'Current Fuel Consumption',
    351: 'Average Fuel Consumption',
    352: 'Elapsed Time',
    353: 'Distance (Miles)',
    354: 'Fuel Used',
    355: 'Average Speed',
    1024: 'Coolant Hot Light',
    1025: 'Cruise Control Status',
    1026: 'Fuel Level(milliliters)',
    1027: 'Odometer',
    1028: 'Oil Pressure Lamp',
    1029: 'Seatbelt Fastened',
    1030: 'Service Interval Distance (distance still next service)',
    1031: 'Service Interval Day (time still next service)',
    1032: 'Turn Signal Status',
    1033: 'Brake Switch Status',
    1034: 'Parking Brake Indicator Light',
    1035: 'ABS Dash Indicator',
    1036: 'Airbag Dash Indicator',
    1037: 'Fuel Usage',
    1038: 'Fuel Level(%)',
    1039: 'Maintenance Required',
    1040: 'Transmission Gear',
    1041: 'Turn Left Signal Status',
    1042: 'Turn Right Signal Status',
    65535: 'Max',
    1043: 'Calculated Odometer',
    1044: 'Fuel Trip',
    1045: 'Derived Engine State',
    1046: 'Service Interval_Remain Distance',
    1047: 'Airbag DTC',
    1048: 'ABS DTC',
    1049: 'Brake Pad Check',
    1050: 'Brake Pedal Switch Status',
    1051: 'Harsh Braking',
    1052: 'Harsh Accelerate',
    1053: 'Oil Life Remaining',
    1054: 'Engine Run time (Hours)',
    1055: 'Change Oil Lamp',
    1056: 'Engine Oil Temp',
    1057: 'Service Interval_Remain Time',
    1058: 'Driver Door Status',
    1059: 'Passenger Door Status',
    1060: 'Rear Brake Pad Check',
    1061: 'Front Brake Pad Check',
    1062: 'Calculated Fuel Usage',
    1063: 'Low Tire Pressure',
    1064: 'A/C System Refrigerant Monitor',
    1065: 'Ambient Air Temperature',
    1066: 'Tire Pressure (Actual Tire Pressure)',
    1067: 'Transmission Fluid Temperature',
    1068: 'Charging system status',
    1069: 'Trip Distance',
    1070: 'OEM DTC',
    1071: 'Left Front Tire Pressure',
    1072: 'Left Rear Tire Pressure',
    1073: 'Right Front Tire Pressure',
    1074: 'Right Rear Tire Pressure',
    1075: 'Brake Fluid Level',
    1076: 'Brake Fluid Pressure',
    1077: 'Brake Fluid Temperature',
    1078: 'Brake Disc Temperature',
    1079: 'Engine Oil Level',
    1080: 'Engine Oil Pressure',
    1081: 'Door Lock',
    1082: 'Door Unlock',
    1083: 'Starter Disable',
    1084: 'Starter Enable',
    1085: 'Remote Start',
    1086: 'Horn Honk On',
    1087: 'Horn Honk Off',
    1088: 'Light Flashing On',
    1089: 'Light Flashing Off',
    1090: 'Service Interval',
    1091: 'ABS Active Lamp',
    1092: 'Fuel Rate',
    1093: 'Coolant Level Switch',
    1094: 'MIL Status',
    1095: 'Tire 1 Position',
    1096: 'Tire 2 Position',
    1097: 'Tire 3 Position',
    1098: 'Tire 4 Position',
    1099: 'Left Front Tire Pressure Status',
    1100: 'Left Rear Tire Pressure Status',
    1101: 'Right Front Tire Pressure Status',
    1102: 'Right Rear Tire Pressure Status',
    1103: 'Spare Tire Pressure',
    1104: 'Tire 1 Pressure',
    1105: 'Tire 2 Pressure',
    1106: 'Tire 3 Pressure',
    1107: 'Tire 4 Pressure',
    1108: 'Tire 1 Pressure Threshold',
    1109: 'Tire 2 Pressure Threshold',
    1110: 'Tire 3 Pressure Threshold',
    1111: 'Tire 4 Pressure Threshold',
    1112: 'Tire 5 Pressure Threshold',
    1113: 'Tire 5 Position',
    1114: 'Tire 5 Pressure',
    1115: 'Left Front Tire Pressure Threshold',
    1116: 'Right Front Tire Pressure Threshold',
    1117: 'Right Rear Tire Pressure Threshold',
    1118: 'Left Rear Tire Pressure Threshold',
    1119: 'Spare Tire Pressure Threshold',
    1120: 'Spare Tire Pressure Status',
    1121: 'Tire Pressure Threshold',
    1122: 'Tire 1 Pressure Status',
    1123: 'Tire 2 Pressure Status',
    1124: 'Tire 3 Pressure Status',
    1125: 'Tire 4 Pressure Status',
    1126: 'Engine Oil Temperature',
    1127: 'Transmission Oil Temperature',
    1128: 'Day Since Last Oil Change',
    1129: 'Distance Since Last Oil Change',
    1130: 'Service Interval Distance (distance since last oil change)',
    1131: 'Engine Coolant Level',
    1132: 'TPMS warning light',
    1133: 'Left Front Sensor Battery',
    1134: 'Left Rear Sensor Battery',
    1135: 'Right Front Sensor Battery',
    1136: 'Right Rear Sensor Battery',
    1137: 'Spare Tire Sensor Battery',
    1138: 'Tire 1 Sensor Battery',
    1139: 'Tire 2 Sensor Battery',
    1140: 'Tire 3 Sensor Battery',
    1141: 'Tire 4 Sensor Battery',
    1142: 'Tire 5 Sensor Battery',
    1143: 'Tire Pressure Monitoring System Status',
    1144: 'Tire Pressure Status',
    1145: 'Tire 5 Pressure Status',
    1146: 'Front Tire Pressure Threshold',
    1147: 'Rear Tire Pressure Threshold',
    1148: 'Fuel Level Volume',
    1149: 'Service Interval Day (time since last oil change)',
    1150: 'Steering Angle Sensor',
    1151: 'Crash Event Occurred',
    1152: 'Airbag deployment status',
    1153: 'Crash Detection',
    1154: 'Battery Voltage',
    1155: 'Engine Coolant Temp',
    1156: 'Engine Speed',
    1157: 'Throttle Position',
    1158: 'Vehicle Speed',
    1159: 'Oil Level',
    1160: 'ECU Part Number',
    1161: 'Software Part Number',
    1162: 'Pedestrian Airbag Trigger Status',
    1163: 'Fuel Level (%)',
    1164: 'Brake Light Switch',
    1165: 'Actual gear',
    1166: 'Left Front Tire Pressure Standard',
    1167: 'Right Front Tire Pressure Standard',
    1168: 'Left Rear Tire Pressure Standard',
    1169: 'Right Rear Tire Pressure Standard',
    1170: 'Spare Tire Pressure Standard',
    1171: 'Tire 1 Pressure Standard',
    1172: 'Tire 2 Pressure Standard',
    1173: 'Tire 3 Pressure Standard',
    1174: 'Tire 4 Pressure Standard',
    1175: 'Tire 5 Pressure Standard',
};
const VCICmd_tool = {
    getecuvoltage: 1,
    setting_unit: 2,
    setting_language: 3,
};
const UNIT_ID = {
    Standard: 0,
    Metric: 1
};
const GUI_LANGUAGE_ID = {
    GUI_LANG_ENGLISH: 0,
    GUI_LANG_SPANISH: 1,
    GUI_LANG_FRENCH: 2
};
const SF_FunctionGroup = {
    UNKNOWN: 0,
    Diesel_Injector_Coding: 1,
    Diesel_Particulate_Filter_Reset: 2,
    Reset_Electric_Traction_System: 3,
    Throttle_Body_Relearn: 4,
    Throttle_Body_Relearn_OBD: 5,
    Throttle_Body_Relearn_Procedure: 6,
    TPMS_Relearn_OBD: 7,
    Transmission_Reset_Adaptation: 8,
    Idle_Speed_Relearn: 9,
    Injector_Coding: 10,
    Idle_Speed_Relearn_OBD: 11,
    Idle_Speed_Relearn_Procedure: 12,
    Transmission_Fluid_Level_Check: 13,
    Transmission_Reset: 14,
    Headlamp_Calibration: 15,
    Seat_Occupied_Calibration: 16,
    Maintenance_Reset: 17,
    Window_Door_Roof_Reset: 18,
    Suspension_Calibration: 19,
    Tire_Size_Reset: 20,
    ABS_Bleeding: 21,
};
const VCICmd_GUI = {
    gui_proc_enter: 0,
    gui_proc_leave: 1,
    gui_proc_terminate: 2,
    gui_set_key: 20,
    gui_set_key_with_index: 21,
    gui_set_param: 30,
    gui_lcd_display: 40,
    gui_set_special_function_group: 50,
    gui_host_ack: 60,
    gui_set_special_at_module: 70,
    gui_max: 255
};
const VCI_Data_Logging = {
    EN_NO_LOG: 0x00,
    EN_OBDII: 0x01,
    EN_ECM: 0x02,
    EN_TCM: 0x03,
    EN_ABS: 0x04,
    EN_SRS: 0x05,
    EN_TPMS: 0x06,
    EN_Allsystems: 0x07,
    EN_ABSLD: 0x08,
    EN_SRSLD: 0x09,
    EN_TCMLD: 0x0A,
    EN_TPMSLD: 0x0B,
    EN_ECMAT: 0x0C,
    EN_ECMSF: 0x0D,
    EN_OilReset: 0x0E,
    EN_BatteryReset: 0x0F,
    EN_SAScalibration: 0x10,
    EN_EPBreset: 0x11,
    EN_TPMSRelearn: 0x12,
    EN_ThrottleBodyRelearn: 0x13,
    EN_ElectricTractionSystemReset: 0x14,
    EN_DPFReset: 0x15,
    EN_MaintenanceReset: 0x16,
    EN_Tiresizereset: 0x17,
    EN_SuspensionCalibration: 0x18,
    EN_HeadlampCalibration: 0x19,
    EN_WindowDoorRoofReset: 0x1A,
    EN_SeatOccupiedCalibration: 0x1B,
    EN_ABSBleeding: 0x1C,
    EN_TransmissionReset: 0x1D,
    EN_TransmissionFluidChangeReset: 0x1E,
    EN_TransmissionFluidLevelCheck: 0x1F,
    EN_InjectorCoding: 0x20,
    EN_All: 0xFF,
};
const VCI_GUI_Param_Type = {
    param_selection: 0,
    param_input: 1
};
const SYS_PROC_ID = {
    /*==========================================================================
                      FIXED AREA DECLARE - DO NOT CHANGE
      ==========================================================================*/
    PROC_NONE: 0,
    PROC_CURRENT: 1,
    PROC_PREVIOUS: 2,
    PROC_TOOL_INIT: 3,
    /*==========================================================================
                    USER UI PROCESSES - ADD MORE FROM HERE
    ==========================================================================*/
    PROC_SERVICE_RESET: 10,
    PROC_BATTERY_HEALTH_CHECK: 28,
    PROC_BATTERY_ALTERNATOR_HEALTH_CHECK: 29,
    PROC_OIL_RESET: 45,
    PROC_OEM_BAT_RESET: 46,
    PROC_OILRESETSF: 47,
    PROC_OILRESETSF_LINKING: 48,
    /*-------- Active Test -----------*/
    PROC_ACTIVE_TEST: 15000,
    PROC_AT_LINKING: 15001,
    PROC_AT_LD: 15002,
    PROC_AT_LIST_FUNCTION: 15003,
    /*-------- Special Function -----------*/
    PROC_SPECIAL_FUNCTION: 15004,
    PROC_SF_LINKING: 15005,
    /*2016Nov07 SiT added for Battery reset with Special Function flow*/
    PROC_BAT_LINKING: 15006,
    PROC_OEM_BAT_RESET_SF: 15007,
    /*-------- System And Actual Test -----------*/
    PROC_SYSTEM_AND_ACTUAL_TEST: 15008,
    /*-------- Steering Angle Sensor-------------*/
    PROC_SAS_LINKING: 15009,
    PROC_SAS_CALIBRATION: 15010,
    /*-------- EPB-------------*/
    PROC_EPB_LINKING: 15011,
    PROC_EPB: 15012,
    PROC_TPMS_RESET_MENU: 15013,
    PROC_TPMS_PROCEDURE: 15014,
    PROC_DPF_RESET: 15015,
    PROC_DPF_RESET_SF: 15016,
    /* Diagnostic Routine */
    PROC_DIAGNOSTIC_ROUTINE: 15017,
    PROC_DIAGNOSTIC_ROUTINE_LINKING: 15018,
    /* Service Check */
    // PROC_SERVICE_CHECK                  ,
    // PROC_HYBRID_BATT_CHECK              ,
    //
    //
    // PROC_SETUP_WIFI_APP     ,
    /*==========================================================================
            END OF USER UI PROCESSes
    ==========================================================================*/
    PROC_ID_MAX: 0xFFFF,
};
const SYS_CMD_ID = {
    /*==========================================================================
                      FIXED AREA DECLARE - DO NOT CHANGE
      ==========================================================================*/
    CMD_NONE: 0,
    /*------- BASIC COMMANDs -------------*/
    CMD_CURRENT: 1,
    CMD_PREVIOUS: 2,
    CMD_INIT_PROC: 3,
    CMD_END_PROC: 4,
    CMD_EXIT: 5,
    CMD_DISP: 6,
    CMD_WAITING: 7,
    //#warning do not declare command lager than 1000 here
    /*==========================================================================
                END OF USER UI COMMANDs
    ==========================================================================*/
    CMD_ID_MAX: 0xFFFF
};
const GUI_KEY_CODE = {
    GUI_KEY_NONE: 0,
    GUI_KEY_ERASE: (1 << 0),
    GUI_KEY_ENTER: (1 << 1),
    GUI_KEY_UP: (1 << 2),
    GUI_KEY_DOWN: (1 << 3),
    GUI_KEY_POWER_LINK: (1 << 4),
    GUI_KEY_DTC: (1 << 5),
    GUI_KEY_MENU: (1 << 6),
    GUI_KEY_FF: (1 << 7),
    GUI_KEY_LD: (1 << 8),
    GUI_KEY_SYSTEM: (1 << 9),
    GUI_SOFTKEY_1: (1 << 10),
    GUI_SOFTKEY_2: (1 << 11),
    GUI_SOFTKEY_3: (1 << 12),
    GUI_KEY_RESERVED_13: (1 << 13),
    GUI_KEY_RESERVED_14: (1 << 14),
    GUI_KEY_RESERVED_15: (1 << 15),
    GUI_KEY_ALL: (0xFFFF)
};
const enumSmogCheckLoc = {
    Arizona: 0x01,
    California: 0x02,
    Colorado: 0x03,
    Connecticut: 0x04,
    DC: 0x05,
    Delaware: 0x06,
    Georgia: 0x07,
    Idaho: 0x08,
    Illinois: 0x09,
    Indiana: 0x0A,
    Louisiana: 0x0B,
    Maine: 0x0C,
    Maryland: 0x0D,
    Massachusetts: 0x0E,
    Missouri: 0x0F,
    Nevada: 0x10,
    NewHampshire: 0x11,
    NewJersey: 0x12,
    NewMexico: 0x13,
    NewYork: 0x14,
    NorthCarolina: 0x15,
    Ohio: 0x16,
    Oregon: 0x17,
    Pennsylvania: 0x18,
    RhodeIsland: 0x19,
    Tennessee: 0x1A,
    Texas: 0x1B,
    Utah: 0x1C,
    Vermont: 0x1D,
    Virginia: 0x1E,
    Wisconsin: 0x1F,
    NoIMProg: 0x20,
    // eSmogCheckLoc_NONE: 0,
    // eSmogCheckLoc_California_CARB: 1,
    // eSmogCheckLoc_Wisconsin: 2,
    // eSmogCheckLoc_NewYork: 3,
    // eSmogCheckLoc_Oregon: 4,
    // eSmogCheckLoc_Idaho: 5,
    // eSmogCheckLoc_Utah: 6,
    // eSmogCheckLoc_Missouri: 7,
    // eSmogCheckLoc_Indiana: 8,
    // eSmogCheckLoc_Massachusetts: 9,
    // eSmogCheckLoc_Others_With_IM_Prog: 0xFE,
    // eSmogCheckLoc_No_IM_Prog: 0xFF
};
const enumSmogCheckLocCountry = {
    Cache: 0x01,
    Davis: 0x02,
    SaltLake: 0x03,
    Utah: 0x04,
    Weber: 0x05,
    Ada: 0x06,
    Canyon: 0x07,
    NoProgram: 0x08,
};
const enumFuelType = {
    eFuelType_UNKNOWN: 0,
    eFuelType_GAS: 1,
    eFuelType_DIESEL: 2,
    eFuelType_MAX_255: 0xFF,
};
const ICOMMANDS = {
    xxx: {
        id: 0xE3,
        group: 'Firmware',
        description: 'Goto Firmware Screen',
    },
    getVehicleData: {
        id: 0x01,
        description: 'Get Vehicle Data buffer(ID=01)'
    },
    getFreezeFrameData: {
        id: 0x03,
        description: 'Get FreezeFrame Data(ID=03)',
        timeout: 0.3 * 60 * 1000
    },
    getDtcs: {
        id: 0x3F,
        description: 'Get DTC(ID=3F)',
        timeout: 0.3 * 60 * 1000
    },
    getVIN: {
        id: 0x40,
        description: 'Get Vehicle Identification Number(ID=40)',
        timeout: 2000 //0.5 * 60 * 1000
    },
    getSupportedPIDs: {
        id: 0x41,
        description: 'Get supported PID list for OBD2 LD(ID=41)',
        format: 'bytes'
    },
    registerPIDs: {
        id: 0x42,
        description: `Register PID list for polling(ID=42)
    Time(2 byte), Enable/Disable(1 byte), PID1 (1 byte)`,
        input: { length: 16 },
        timeout: 0.3 * 60 * 1000
    },
    unregisterPIDs: {
        id: 0x43,
        description: 'Unregister All Configured PID'
    },
    poll: {
        id: 0x44,
        description: 'Start/Stop Bus Poll(ID=44)',
        options: [
            { text: 'Start Poll', value: [1] },
            { text: 'Stop Poll', value: [0] }
        ]
    },
    readRegisteredPIDs: {
        id: 0x45,
        description: 'Read Result of Registered PID(ID=45)'
    },
    stream: {
        id: 0x46,
        description: 'Start/Stop Stream PID Result(ID=46)',
        options: [
            { text: 'Start Streaming', value: [1] },
            { text: 'Stop Streaming', value: [0] }
        ]
    },
    clearVehicleDiscovery: {
        id: 0x47,
        description: 'Clear Vehicle Discovery Info(ID=47)'
    },
    startVehicleDiscovery: {
        id: 0x48,
        description: 'Start Vehicle Discovery(ID=48)',
        timeout: 2 * 60 * 1000
    },
    setResponseFormat: {
        id: 0x49,
        description: 'Set Raw/Readable response(ID=49)',
        options: [
            { text: 'Use Raw', value: [0] },
            { text: 'Use JSON', value: [1] }
        ],
        timeout: 1000
    },
    LogData: {
        id: 0x5A,
        description: 'Data Logging(ID=5A)',
        setfuncid: {
            id: 0x01,
            description: 'Set Log Function(ID=01)',
            options: [
                { text: 'NO_LOG', value: VCI_Data_Logging.EN_NO_LOG },
                { text: 'OBD II', value: VCI_Data_Logging.EN_OBDII },
                { text: 'ECM', value: VCI_Data_Logging.EN_ECM },
                { text: 'TCM', value: VCI_Data_Logging.EN_TCM },
                { text: 'ABS', value: VCI_Data_Logging.EN_ABS },
                { text: 'SRS', value: VCI_Data_Logging.EN_SRS },
                { text: 'TPMS', value: VCI_Data_Logging.EN_TPMS },
                { text: 'All systems', value: VCI_Data_Logging.EN_Allsystems },
                { text: 'ABS LD', value: VCI_Data_Logging.EN_ABSLD },
                { text: 'SRS LD', value: VCI_Data_Logging.EN_SRSLD },
                { text: 'TCM LD', value: VCI_Data_Logging.EN_TCMLD },
                { text: 'TPMS LD', value: VCI_Data_Logging.EN_TPMSLD },
                { text: 'ECM AT', value: VCI_Data_Logging.EN_ECMAT },
                { text: 'ECM SF', value: VCI_Data_Logging.EN_ECMSF },
                { text: 'Oil Reset', value: VCI_Data_Logging.EN_OilReset },
                { text: 'Battery Reset', value: VCI_Data_Logging.EN_BatteryReset },
                { text: 'SAS calibration', value: VCI_Data_Logging.EN_SAScalibration },
                { text: 'EPB reset', value: VCI_Data_Logging.EN_EPBreset },
                { text: 'TPMS Relearn', value: VCI_Data_Logging.EN_TPMSRelearn },
                { text: 'Throttle Body Relearn', value: VCI_Data_Logging.EN_ThrottleBodyRelearn },
                { text: 'Electric Traction System Reset', value: VCI_Data_Logging.EN_ElectricTractionSystemReset },
                { text: 'DPF Reset', value: VCI_Data_Logging.EN_DPFReset },
                { text: 'Maintenance Reset', value: VCI_Data_Logging.EN_MaintenanceReset },
                { text: 'Tire size reset', value: VCI_Data_Logging.EN_Tiresizereset },
                { text: 'Suspension Calibration', value: VCI_Data_Logging.EN_SuspensionCalibration },
                { text: 'Headlamp Calibration', value: VCI_Data_Logging.EN_HeadlampCalibration },
                { text: 'Window Door Roof Reset', value: VCI_Data_Logging.EN_WindowDoorRoofReset },
                { text: 'Seat Occupied Calibration', value: VCI_Data_Logging.EN_SeatOccupiedCalibration },
                { text: 'ABS Bleeding', value: VCI_Data_Logging.EN_ABSBleeding },
                { text: 'Transmission Reset', value: VCI_Data_Logging.EN_TransmissionReset },
                { text: 'Transmission Fluid Change Reset', value: VCI_Data_Logging.EN_TransmissionFluidChangeReset },
                { text: 'Transmission Fluid Level Check', value: VCI_Data_Logging.EN_TransmissionFluidLevelCheck },
                { text: 'Injector Coding', value: VCI_Data_Logging.EN_InjectorCoding },
                { text: 'Enable All', value: VCI_Data_Logging.EN_All },
                //{text: 'ECM LiveData', value: [VCI_Data_Logging.EN]},
            ]
        },
        startlog: {
            id: 0x02,
            description: 'Begin Log(ID=02)',
            options: []
        },
        stoplog: {
            id: 0x03,
            description: 'Stop Log(ID=03)',
            options: []
        },
        getlog: {
            id: 0x04,
            description: 'Get Log(ID=04)',
            options: []
        },
        getlog_encrypt: {
            id: 0x05,
            description: 'Get Log Encrypt(ID=05)',
            options: []
        },
        timeout: 1000
    },
    getIMReadiness: {
        id: 0x4b,
        description: 'Get IM Readiness(ID=4b)'
    },
    getToolSettings: {
        id: 0xE1,
        description: 'Get Tool Setting(ID=E1)',
        timeout: 1000
    },
    eraseFirmwareAndJumpToBootloader: {
        id: 0xE2,
        description: 'Erase FW/BL then jump to boot loader/FW(ID=E2)'
    },
    upgradeFirmware: {
        id: 0xE3,
        description: 'Upgrade FW/BL data package(IE=E3)'
    },
    reboot: {
        id: 0xE4,
        description: 'Reboot Dongle Hardware(ID=E4)'
    },
    getGuid: {
        id: 0xE5,
        description: 'Get Device GUID(ID=E5)'
    },
    setGuid: {
        id: 0xE6,
        description: 'Set Device GUID(ID=E6)',
        dataLength: 2,
        input: { length: 16 }
    },
    getUsbProductId: {
        id: 0xE7,
        description: 'Get Device USB PID(ID=E7)',
        retries: 3,
        timeout: 1000
    },
    getOEMSupportedPIDs: {
        id: 0x61,
        timeout: 1 * 60 * 1000,
        retries: 3,
        description: 'Get OEM supported PID list (ID=61)'
    },
    getOEMPIDData: {
        id: 0x62,
        description: 'Get OEM Pid data (ID=62)'
    },
    getOEMBuffer: {
        id: 0x70,
        description: 'Get OEM Buffer (ID=70)'
    },
    getOEMDTC: {
        id: 0x71,
        description: 'Get OEM DTC (ID=71)'
    },
    eraseOEMDTC: {
        id: 0x72,
        description: 'Erase OEM DTC'
    },
    registerOEMPIDs: {
        id: 0x73,
        description: `Register OEM PID list for polling(ID=73)
    Time(2 byte), Enable/Disable(1 byte), PID1 (1 byte)`,
        input: { length: 16 },
        timeout: 0.3 * 60 * 1000
    },
    unregisterOEMPIDs: {
        id: 0x74,
        description: 'Unregister All Configured OEM PID(ID=74)'
    },
    streamOEM: {
        id: 0x75,
        description: 'Start/Stop OEM Live Data Stream(ID=75)',
        options: [
            { text: 'Start Streaming', value: [1] },
            { text: 'Stop Streaming', value: [0] }
        ]
    },
    batteryHealthCheck: {
        id: 0x80,
        description: 'Battery health check(ID=80)',
        timeout: 60 * 1000
    },
    // for BLE tool
    getVehicleV5Data: {
        id: 0x80,
        retries: 3,
        description: 'Get Vehicle Data buffer V5(ID=80)'
    },
    registerNotifyEvents: {
        id: 0xCE,
        retries: 1,
        description: 'Register Notify Events'
    },
    getStoredVehicles: {
        id: 0x81,
        description: 'Get vehicle data information (ID=81)'
    },
    selectVehicle: {
        id: 0x82,
        description: 'Select vehicle data buffer (ID=82)'
    },
    batteryCheck: {
        id: 0x3C,
        description: 'Battery Check(ID=0x3C)',
        timeout: 1000
    },
};
const USBHIDCommand_64 = {
    eVEHICLE_DATA_YMME_PROFILE: { MaxNumBuff: 1, cmd: 1, desc: 'Vehicle YMME profile data' },
    eVEHICLE_DATA_OBD2_LD_SID1_BUFF: { MaxNumBuff: 2, cmd: 11, desc: ' OBD2 Sid$01 data buffer	                (2 buffers for ECM and TCM)' },
    eVEHICLE_DATA_OBD2_FF_SID2_BUFF: { MaxNumBuff: 2, cmd: 12, desc: ' OBD2 FreezeFrame Sid$02 data buffer	    (2 buffers for ECM and TCM)' },
    eVEHICLE_DATA_OBD2_DTC_SID37A_BUFF: { MaxNumBuff: 2, cmd: 13, desc: ' OBD2 DTCs buffer Sid$03, Sid$07, Sid$0A	(2 buffers for ECM and TCM)' },
    eVEHICLE_DATA_OBD2_SPECIALTEST_SID568_BUFF: { MaxNumBuff: 1, cmd: 14, desc: ' OBD2 Sid$05, Sid$06, Sid$08               (just 1 buffer)' },
    eVEHICLE_DATA_OBD2_SPECIALTEST_SID5_BUFF: { MaxNumBuff: 1, cmd: 145, desc: ' OBD2 Sid$05               (just 1 buffer)' },
    eVEHICLE_DATA_OBD2_SPECIALTEST_SID6_BUFF: { MaxNumBuff: 1, cmd: 146, desc: ' OBD2 Sid$06               (just 1 buffer)' },
    eVEHICLE_DATA_OBD2_SPECIALTEST_SID8_BUFF: { MaxNumBuff: 1, cmd: 148, desc: ' OBD2 Sid$08               (just 1 buffer)' },
    eVEHICLE_DATA_OBD2_VEHINFO_SID9_BUFF: { MaxNumBuff: 2, cmd: 15, desc: ' OBD2 Sid$09                               (2 buffers for ECM and TCM)' },
    eVEHICLE_DATA_OBD2_RECORED_LD_BUFF: { MaxNumBuff: 1, cmd: 16, desc: ' OBD2 Recorded Live Data data' },
    eVEHICLE_DATA_OEM_MODULE_BUFF: { MaxNumBuff: 100, cmd: 51, desc: ' OEM modules DTC (includes Module Info)    (Currently we have 100 buffers)' },
    eVEHICLE_DATA_OBD2_FF_SID2_BUFF_RAW: { MaxNumBuff: 2, cmd: 0x70, desc: ' OBD2 FreezeFrame Sid$02 raw data buffer	    (2 buffers for ECM and TCM)' },
};
const FreezeFrameDataTypes = {
    DTC_INFO: 1,
    LD_HEADER: 2,
    LD_ITEM_NAME_STRING: 3,
    LD_ITEM_UNIT_STRING: 4,
    LD_ITEM_VALUE_STRING: 5,
};
const Metrics = {
    USA: 0,
    METRIC: 1,
};
const TransferStatus = {
    TRANSFERRING: 0xbb,
    COMPLETED: 0xaa,
    VALID: 0xaa,
};
const Languages = {
    ENGLISH: 1,
    SPANISH: 2,
    FRENCH: 3,
};
//todo
const VehicleDataTypes = {
    YMME_PROFILE: 1,
    OBD2_LD_SID1_BUFF: 11,
    OBD2_FF_SID2_BUFF: 12,
    OBD2_DTC_SID37A_BUFF: 13,
    OBD2_SPECIALTEST_SID568_BUFF: 14,
    OBD2_VEHINFO_SID9_BUFF: 15,
    OBD2_RECORED_LD_BUFF: 16,
    OEM_MODULE_BUFF: 51,
};
const BufferSegmentTypes = {
    VERSION: 0,
    VIN_PROFILE: 1,
    MONITOR_ICON: 2,
    FREEZE_FRAME: 3,
    DTC: 4,
    SPECIAL_TEST: 5,
    VEHICLE_INFO: 6,
    LIVE_DATA: 7,
    OEM_DATA: 8,
};


/***/ }),

/***/ 86271:
/*!*************************************************************!*\
  !*** ./src/app/services/innova-vci-service/src/obd/ymme.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "YMME": function() { return /* binding */ YMME; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _vcistd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vcistd */ 48860);
/* harmony import */ var _obd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./obd */ 29326);
/* harmony import */ var _utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../utilities/dataParser */ 81402);
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! util */ 94655);
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);






class YMME extends _obd__WEBPACK_IMPORTED_MODULE_1__.OBDx {
    init() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            try {
                yield this.LinkVciCmd({
                    Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.ymme,
                    stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_YMME.init, usbData: [],
                    nretry: 1, timeout: 10000
                });
                return true;
            }
            catch (err) {
                this.logdebug('Error initialize YMME Selection:' + err);
                return false;
            }
        });
    }
    get(sel_id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolve) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                try {
                    const usbData = [..._utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.numberToBytes(sel_id, 1)];
                    const data = yield this.LinkVciCmd({
                        Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.ymme,
                        stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_YMME.get, usbData,
                        nretry: 1, timeout: 10000
                    });
                    let j = {};
                    if ((0,util__WEBPACK_IMPORTED_MODULE_3__.isNullOrUndefined)(data)) {
                        j = {};
                    }
                    else {
                        j = JSON.parse(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.bytesToString(data));
                    }
                    return resolve(j);
                }
                catch (err) {
                    this.logdebug('Error initialize YMME get selection:' + err);
                    return resolve({});
                }
            }));
        });
    }
    confirm() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            try {
                yield this.LinkVciCmd({
                    Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.ymme,
                    stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_YMME.confirm, usbData: [],
                    nretry: 1, timeout: 10000
                });
                return true;
            }
            catch (err) {
                this.logdebug('Error initialize YMME confirm:' + err);
                return false;
            }
        });
    }
}
YMME.ɵfac = /*@__PURE__*/ function () { let ɵYMME_BaseFactory; return function YMME_Factory(t) { return (ɵYMME_BaseFactory || (ɵYMME_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetInheritedFactory"](YMME)))(t || YMME); }; }();
YMME.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: YMME, factory: YMME.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 91537:
/*!***********************************************************************!*\
  !*** ./src/app/services/innova-vci-service/src/obdservice.service.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OBDService": function() { return /* binding */ OBDService; },
/* harmony export */   "EnumNotify": function() { return /* reexport safe */ _standard_enums__WEBPACK_IMPORTED_MODULE_0__.EnumNotify; },
/* harmony export */   "Dataparser": function() { return /* reexport module object */ _utilities_dataParser__WEBPACK_IMPORTED_MODULE_1__; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _standard_enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./standard/enums */ 13930);
/* harmony import */ var _utilities_dataParser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utilities/dataParser */ 81402);
/* harmony import */ var _obd_vcistd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./obd/vcistd */ 48860);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _utilities_notify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utilities/notify.service */ 46607);
/* harmony import */ var _command_command_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./command/command.service */ 12843);
/* harmony import */ var _obd_obd2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./obd/obd2 */ 24394);
/* harmony import */ var _obd_nwscan__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./obd/nwscan */ 10591);
/* harmony import */ var _obd_OBDSystem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./obd/OBDSystem */ 39152);
/* harmony import */ var _obd_obd2ff__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./obd/obd2ff */ 89750);
/* harmony import */ var _obd_ofm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./obd/ofm */ 16017);
/* harmony import */ var _obd_livedata__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./obd/livedata */ 55123);
/* harmony import */ var _obd_symptom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./obd/symptom */ 93235);
/* harmony import */ var _obd_ymme__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./obd/ymme */ 86271);
/* harmony import */ var _obd_gui__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./obd/gui */ 71362);
















class OBDService {
    constructor(notifyService, commService, obd2, nwscan, obdsystem, obd2ff, ofm, livedata, symptom, ymme, gui) {
        this.notifyService = notifyService;
        this.commService = commService;
        this.obd2 = obd2;
        this.nwscan = nwscan;
        this.obdsystem = obdsystem;
        this.obd2ff = obd2ff;
        this.ofm = ofm;
        this.livedata = livedata;
        this.symptom = symptom;
        this.ymme = ymme;
        this.gui = gui;
        this.toolInfo = null;
        this.apiVersion = '1.16';
        this.isDevConnected = false;
    }
    /**
     *
     *
     * @param {(NotifyDataType) => any} [cb=null] : register notify process
     * @returns {Promise<boolean>}
     * @memberof OBDService
     */
    initialize(cb = null) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            this.isDevConnected = yield this.commService.initialize(_standard_enums__WEBPACK_IMPORTED_MODULE_0__.EnumSerialType.Bluetooth);
            // changed by ngoclb
            if (this.isDevConnected) {
                if (this.registerCallback) {
                    this.registerCallback.unsubscribe();
                }
                if (cb) {
                    this.registerCallback = this.notifyService.Event.subscribe(t => cb(t));
                }
                this.isDevConnected = yield this.obd2.initialize();
            }
            return this.isDevConnected;
        });
    }
    /**
     * [initialize_ble function initialize bluetooth]
     * @param  {(NotifyDataType) => any} [cb=null] : register notify process
     * @return   {Promise<boolean>}
     */
    initialize_bt(cb = null) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            const stt = yield this.commService.initialize(_standard_enums__WEBPACK_IMPORTED_MODULE_0__.EnumSerialType.Bluetooth);
            // added by lbngoc
            if (stt) {
                if (this.registerCallback) {
                    this.registerCallback.unsubscribe();
                }
                if (cb) {
                    this.registerCallback = this.notifyService.Event.subscribe(t => cb(t));
                    this.isDevConnected = yield this.obd2.initialize(1500);
                    if (!this.isDevConnected) {
                        // await this.disconnectBluetoothDevices();
                    }
                }
            }
            //this.isDevConnected = false;
            return stt;
        });
    }
    disconnectBluetoothDevices() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            if (this.isBTDevConnected) {
                this.isBTDevConnected.unsubscribe();
                this.isBTDevConnected = null;
            }
            return yield this.commService.disconnectBluetoothDevices();
        });
    }
    BluetoothIsConnected() {
        return this.isBTDevConnected;
    }
    stopQuery() {
        return this.obd2.stopQuery();
    }
    get_list_bt_devices() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.commService.getBluetoothDevicesList();
        });
    }
    get_list_bt_bondeddevices() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.commService.getBluetoothBondedDevicesList();
        });
    }
    connectBlueToothDevice(macAddress) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            console.log('connectBlueToothDevice macAddress: ', macAddress);
            // modified by NGOCLB
            return new Promise((resolve) => (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
                console.log('resolve: ', resolve);
                this.isBTDevConnected = yield this.commService.connectBlueToothDevice(macAddress, (isSuccess) => {
                    // this.isBTDevConnected.add(() => {
                    //   let isSuccess = !this.isBTDevConnected.closed;
                    if (!isSuccess) {
                        this.isBTDevConnected = null;
                    }
                    resolve(isSuccess);
                    // });
                });
            }));
        });
    }
    getVehReport_YMME_String() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () { return yield this.obd2.getYMMEString(); });
    }
    getVehReport_MonitorIconStatus() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () { return yield this.obd2.getMonitorIcon(); });
    }
    getVehReport_MonitorIconStatus_PID41() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () { return yield this.obd2.getMonitorIcon_SID41(); });
    }
    getVehReport_RPM_VSS() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () { return yield this.obd2.getRPM_VSS(); });
    }
    getVehReport_FreezeFrameDTCInfo() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () { return yield this.obd2.getFreezeFrameDTCInfo(); });
    }
    getVehReport_FreezeFrameLDInfo() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () { return yield this.obd2.getFreezeFrameLiveData(); });
    }
    getVehReport_OBD2_DTC_Info() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () { return yield this.obd2.getOBD2DTCInfo(); });
    }
    getVehReport_OBD2_VehicleInfo_SID9() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () { return yield this.obd2.getVehicleInfo_SID9(); });
    }
    getVehReport_OBD2_DTC_Def(moduleindex, index) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () { return yield this.obd2.getOBD2DTCDef(moduleindex, index); });
    }
    getVehReport_YMME_PROFILE() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () { return yield this.obd2.getVehReport_YMME_PROFILE(); });
    }
    getVehReport_OBD2_LD_SID1_BUFF() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () { return yield this.obd2.getVehReport_OBD2_LD_SID1_BUFF_new(); });
    }
    getVehReport_OBD2_FF_SID2_BUFF() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            //NXP do not support readble format
            return yield this.obd2.getVehReport_OBD2_FF_SID2_BUFF_RAW_new();
        });
    }
    getVehReport_OBD2_DTC_SID37A_BUFF() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () { return yield this.obd2.getVehReport_OBD2_DTC_SID37A_BUFF_new(); });
    }
    //public async getVehReport_OBD2_SPECIALTEST_SID568_BUFF() { return await this.obd2.getVehReport_OBD2_SPECIALTEST_SID568_BUFF() }
    getVehReport_OBD2_SPECIALTEST_SID5_BUFF() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () { return yield this.obd2.getVehReport_OBD2_SPECIALTEST_SID5_BUFF_new(); });
    }
    getVehReport_OBD2_SPECIALTEST_SID6_BUFF() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () { return yield this.obd2.getVehReport_OBD2_SPECIALTEST_SID6_BUFF_v2(); });
    }
    getVehReport_OBD2_SPECIALTEST_SID8_BUFF() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () { return yield this.obd2.getVehReport_OBD2_SPECIALTEST_SID8_BUFF_new(); });
    }
    getVehReport_OBD2_VEHINFO_SID9_BUFF() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () { return yield this.obd2.getVehReport_OBD2_VEHINFO_SID9_BUFF_new(); });
    }
    getVehReport_OBD2_RECORED_LD_BUFF() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () { return yield this.obd2.getVehReport_OBD2_RECORED_LD_BUFF(); });
    }
    getVehReport_OEM_MODULE_BUFF() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () { return yield this.obd2.getVehReport_OEM_MODULE_BUFF(); });
    }
    linkVehReport_OBD2_SPECIALTEST_SID6() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () { return this.obd2.link_OBD2_SPECIALTEST_SID6(); });
    }
    linkVehReport_OBD2_SPECIALTEST_SID5() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () { return this.obd2.link_OBD2_SPECIALTEST_SID5(); });
    }
    linkVehReport_OBD2_SPECIALTEST_SID8() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () { return this.obd2.link_OBD2_SPECIALTEST_SID8(); });
    }
    OBD2_erase_Dtcs() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () { return this.obd2.Erase_OBD2_Dtcs(); });
    }
    getVersion() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            return Object.assign(Object.assign({}, yield this.obd2.getInfo()), { 'apiVersion': this.apiVersion });
        });
    }
    isConnected() {
        return this.isDevConnected;
    }
    setVINString(vinstring) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            return this.nwscan.setVinString(vinstring);
        });
    }
    /**
     * Query OBD2 , trying all basic protocol J1979
     *
     * @param {({ percent, index, total, message, isfinish }) => any} [cb=null] use to notify linking info
     * @returns {Promise<enumProtocol>} linked protocol
     * @memberof OBDService
     */
    obd2Query(cb = null, isNeedCheckVoltage) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            const resp = yield this.obd2.Query((obd2info) => {
                cb && cb(obd2info);
            }, isNeedCheckVoltage);
            return resp;
        });
    }
    /**
     * collect data of full obd2 : Monitor Icon , FF , DTC , VIN and Get Report
     *
     * @param {({ message }) => any} [cb=null]
     * @returns  {Promise<any>} OBD2 Buffer in raw
     * @memberof OBDService
     */
    getBluetoothName() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.obd2.GetBluetoothName();
        });
    }
    setBluetoothName(newName) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            const resp = yield this.obd2.SetBluetoothName(newName);
            return resp;
        });
    }
    obd2RetriveData(cb = null) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            const resp = yield this.obd2.retreiveData((linkinfo) => {
                cb && cb(linkinfo);
            });
            return resp;
        });
    }
    obd2FFDTCMonRetriveData(cb = null) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            const resp = yield this.obd2.retreiveFFDTCMonData((linkinfo) => {
                cb && cb(linkinfo);
            });
            return resp;
        });
    }
    obd2DTCRetriveData(cb = null) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            const resp = yield this.obd2.retreiveDTCData((linkinfo) => {
                cb && cb(linkinfo);
            });
            return resp;
        });
    }
    obd2QuickRetriveData(cb = null, readFFDtc) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            const resp = yield this.obd2.quick_retreiveData((linkinfo) => {
                cb && cb(linkinfo);
            }, readFFDtc);
            return resp;
        });
    }
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    /**
     * OBD2 Autolink Process , Trying query  , retreive data then get report data in raw
     *
     * @param {({ percent, index, total, message, isfinish }) => any} [cb=null]
     * @returns {Promise<boolean>} true:success , false : fail
     * @memberof OBDService
     */
    obd2AutoLink(cb = null) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const linkedPro = yield this.obd2Query(cb);
                if (linkedPro == _standard_enums__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_NO)
                    return false;
                yield this.obd2RetriveData(cb);
                return true;
            }
            catch (err) {
                return false;
            }
        });
    }
    obd2FFDTCMonLink(cb = null) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const linkedPro = yield this.obd2Query(cb);
                if (linkedPro == _standard_enums__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_NO)
                    return false;
                yield this.obd2FFDTCMonRetriveData(cb);
                return true;
            }
            catch (err) {
                return false;
            }
        });
    }
    obd2DTCLink(cb = null) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const linkedPro = yield this.obd2Query(cb);
                if (linkedPro == _standard_enums__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_NO)
                    return false;
                yield this.obd2DTCRetriveData(cb);
                return true;
            }
            catch (err) {
                return false;
            }
        });
    }
    obd2QuickLink(cb = null) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const linkedPro = yield this.obd2Query(cb);
                if (linkedPro == _standard_enums__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_NO)
                    return false;
                yield this.obd2QuickRetriveData(cb);
                return true;
            }
            catch (err) {
                return false;
            }
        });
    }
    testdata(eprotocol) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            // return this.commService.testWrite()
            const resp = yield this.obd2.QueryProtocolCAN(eprotocol);
            this.log('response data :' + JSON.stringify(resp));
            return resp;
        });
    }
    log(t) {
        this.notifyService.log(t);
    }
    /**
     * [setYmmeProfile set ymmeprofile]
     * @param  manufacture_enum [any]
     * @param  year_enum                     [any]
     * @param  make_enum                     [any]
     * @param  model_enum                    [any]
     * @param  engine_enum                   [any]
     * @param  trim_enum                     [any]
     * @param  option_enum                   [any]
     * @param  transmission_enum             [any]
     * @return            Promise<boolean>
     */
    setYmmeProfile(ymmeprofile = {
        manufacture_enum: undefined,
        year_enum: undefined,
        make_enum: undefined,
        model_enum: undefined,
        engine_enum: undefined,
        trim_enum: undefined,
        option_enum: undefined,
        transmission_enum: undefined
    }) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            this.log(JSON.stringify(ymmeprofile));
            return yield this.nwscan.setYmmeProfile(ymmeprofile);
        });
    }
    /**
     * [getYMMEProfile get the current ymmeprofile]
     * @return Promise<any>
     */
    getYMMEProfile() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.nwscan.getYMMEProfile();
        });
    }
    /**
     * [nwscan_getSupportSystem this function gets the list of supported systems]
     * @return Promise<{}>
     */
    nwscan_getSupportSystem() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.nwscan.getSupportedOEMModules();
        });
    }
    /**
     * [nwscan_eraseSystem Erase system and subSystem]
     * @param  {system,  subSystem} [system index and subsystem index]
     * @return            Promise<{}>
     */
    nwscan_eraseSystem({ system, subSystem }) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.nwscan.eraseOEMSystem({ system, subSystem });
        });
    }
    /**
     * [nwscan_LinkSystem Link system and subSystem]
     * @param  {system,  subSystem} [system index and subsystem index]
     * @return      Promise<{}>
     */
    nwscan_LinkSystem({ system, subSystem }) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.nwscan.getOEMSystem_quick({ system, subSystem });
        });
    }
    nwscan_getdtcdef({ system, subSystem, id }) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.nwscan.getDtcdef({ system, subSystem, id });
        });
    }
    nwscan_getdtcdef_withgroup({ system, subSystem, id, group }) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.nwscan.getDtcdef_withgroup({ system, subSystem, id, group });
        });
    }
    nwscan_getdtc_listgroup({ system, subSystem, id }) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.nwscan.getDtc_listInspecGroup({ system, subSystem, id });
        });
    }
    nws_querySystem({ system, subSystem }) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.nwscan.QueryOEMSystem({ system, subSystem });
        });
    }
    nws_exitSystem({ system, subSystem }) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.nwscan.ExitOEMSystem({ system, subSystem });
        });
    }
    /**
     * [getBatteryVoltage Get ECU battery voltage]
     * @return Promise<{BatteryVoltage:any,Unit:string}>
     */
    getBatteryVoltage() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.obdsystem.getECUVoltage();
        });
    }
    setting_smogcheckstate(loc) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.obd2.SetOBD2SmogCheckState(loc);
        });
    }
    setting_smogcheckcountry(loc) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.obd2.SetOBD2SmogCheckCountry(loc);
        });
    }
    getting_smogcheckstate() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.obd2.GetOBD2SmogCheckState();
        });
    }
    getting_smogcheckcountry() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.obd2.GetOBD2SmogCheckCountry();
        });
    }
    getting_ledstatus() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.obd2.GetOBD2LedStatus();
        });
    }
    setting_fueltype(type) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.obd2.SetFuelType(type);
        });
    }
    getting_fueltype() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.obd2.GetFuelType();
        });
    }
    setting_vehtype(type) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.obd2.SetVehType(type);
        });
    }
    getting_vehtype() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.obd2.GetVehType();
        });
    }
    setting_getguid() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.obdsystem.readGUID();
        });
    }
    setting_setguid(guid) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.obdsystem.writeGUID(guid);
        });
    }
    setting_unittype(unittype) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.obdsystem.settingUnitType(unittype);
        });
    }
    setting_language(lang_id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.obdsystem.SettingLanguage(lang_id);
        });
    }
    getodometer_pidsupport() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.ofm.ofm_getodometer_pidsupport();
        });
    }
    getservicecheck_pidsupport() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.ofm.ofm_getservicecheck_pidsupport();
        });
    }
    getwarninglight_pidsupport() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.ofm.ofm_getwarninglight_pidsupport();
        });
    }
    gettpmspid_pidsupport() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.ofm.ofm_gettpms_pidsupport();
        });
    }
    getofmprofileid_value(profileid) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.ofm.getofmprofileid_value(profileid);
        });
    }
    ofm_getitemname(itemid) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () { return _obd_vcistd__WEBPACK_IMPORTED_MODULE_2__.Enum_ofm_Items[itemid]; });
    }
    nws_getdtcgroup_all() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.nwscan.getInnovaGroupDtc(_standard_enums__WEBPACK_IMPORTED_MODULE_0__.enumInnovagroup.einnovagroup_INNOVA_GROUP_UNKNOW);
        });
    }
    ld_abs_get_ListItem_Val(start_idx, end_idx) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.livedata.getlivedata_list_itemval_v2(_standard_enums__WEBPACK_IMPORTED_MODULE_0__.enumInnovagroup.einnovagroup_GROUP_ABS, start_idx, end_idx);
        });
    }
    ld_srs_get_ListItem_Val(start_idx, end_idx) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.livedata.getlivedata_list_itemval_v2(_standard_enums__WEBPACK_IMPORTED_MODULE_0__.enumInnovagroup.einnovagroup_GROUP_SRS, start_idx, end_idx);
        });
    }
    ld_ecm_get_ListItem_Val(start_idx, end_idx) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.livedata.getlivedata_list_itemval_v2(_standard_enums__WEBPACK_IMPORTED_MODULE_0__.enumInnovagroup.einnovagroup_GROUP_ENH_ECM, start_idx, end_idx);
        });
    }
    ld_others_get_ListItem_Val(start_idx, end_idx) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.livedata.getlivedata_list_itemval_v2(_standard_enums__WEBPACK_IMPORTED_MODULE_0__.enumInnovagroup.einnovagroup_INNOVA_GROUP_UNKNOW, start_idx, end_idx);
        });
    }
    ld_obd2_get_ListItem_Val(start_idx, end_idx) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.livedata.getlivedata_list_itemval(_standard_enums__WEBPACK_IMPORTED_MODULE_0__.enumInnovagroup.einnovagroup_GROUP_OBDII, start_idx, end_idx);
        });
    }
    ld_hybrid_ld_ListItem_Val(start_idx, end_idx) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.livedata.getlivedata_list_itemval(_standard_enums__WEBPACK_IMPORTED_MODULE_0__.enumInnovagroup.einnovagroup_INNOVA_GROUP_UNKNOW, start_idx, end_idx);
        });
    }
    ld_hybrid_ld_get_itemval(itemid) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.livedata.getlivedata_itemval(_standard_enums__WEBPACK_IMPORTED_MODULE_0__.enumInnovagroup.einnovagroup_INNOVA_GROUP_UNKNOW, itemid);
        });
    }
    ld_disable_dtc_trigger() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.livedata.disable_dtc_trigger();
        });
    }
    ld_enable_dtc_trigger() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.livedata.enable_dtc_trigger();
        });
    }
    ld_hybrid_get_info() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.livedata.getlivedata_hybrid_info();
        });
    }
    /**
     * [getVehReport_MIL_Status get Mil Status report]
     * @return Promise<{MilStatus:status}> status : ON or OFF
     */
    getVehReport_MIL_Status() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.obd2.getVehReport_MIL_Status();
        });
    }
    getVehReport_DriveCycle_Mon_List() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.obd2.getVehReport_DriveCycle_Mon_List();
        });
    }
    getVehReport_DriveCycle_Mon_Text(textid) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.obd2.getVehReport_DriveCycle_Mon_Text(textid);
        });
    }
    //symptom diagnostic here
    symptom_init() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.symptom.initprocess();
        });
    }
    getsymptom_screenui() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.symptom.getScreen_UI();
        });
    }
    setSymptom_SetNormalSelection(index) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.symptom.set_useroptionselection(index);
        });
    }
    setSymptom_SetSoftkeySelection(index) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.symptom.set_softkeyselection(index);
        });
    }
    // Live Data
    ld_obd2_get_itemlist() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.livedata.getOBD2_LiveDataListPIDsupport();
        });
    }
    ld_obd2_get_itemval(itemid) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.livedata.getOBD2_LiveDataItem_Val(itemid);
        });
    }
    ld_abs_get_itemlist() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.livedata.getABS_LiveDataListPIDsupport();
        });
    }
    ld_abs_get_itemval(itemid) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.livedata.getABS_LiveDataItem_Val(itemid);
        });
    }
    ld_srs_get_itemlist() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.livedata.getSRS_LiveDataListPIDsupport();
        });
    }
    ld_srs_get_itemval(itemid) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.livedata.getSRS_LiveDataItem_Val(itemid);
        });
    }
    ld_ecm_get_itemlist() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.livedata.getECM_LiveDataListPIDsupport();
        });
    }
    ld_ecm_get_itemval(itemid) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.livedata.getECM_LiveDataItem_Val(itemid);
        });
    }
    ld_other_get_itemval(itemid) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.livedata.getOther_LiveDataItem_Val(itemid);
        });
    }
    ld_obd2_get_iteminfo(itemid) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.livedata.getlivedata_iteminfo(_standard_enums__WEBPACK_IMPORTED_MODULE_0__.enumInnovagroup.einnovagroup_GROUP_OBDII, itemid);
        });
    }
    ld_abs_get_iteminfo(itemid) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.livedata.getlivedata_iteminfo(_standard_enums__WEBPACK_IMPORTED_MODULE_0__.enumInnovagroup.einnovagroup_GROUP_ABS, itemid);
        });
    }
    ld_srs_get_iteminfo(itemid) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.livedata.getlivedata_iteminfo(_standard_enums__WEBPACK_IMPORTED_MODULE_0__.enumInnovagroup.einnovagroup_GROUP_SRS, itemid);
        });
    }
    ld_ecm_get_iteminfo(itemid) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.livedata.getlivedata_iteminfo(_standard_enums__WEBPACK_IMPORTED_MODULE_0__.enumInnovagroup.einnovagroup_GROUP_ENH_ECM, itemid);
        });
    }
    ld_others_get_iteminfo(itemid) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.livedata.getlivedata_iteminfo(_standard_enums__WEBPACK_IMPORTED_MODULE_0__.enumInnovagroup.einnovagroup_INNOVA_GROUP_UNKNOW, itemid);
        });
    }
    ld_ecm_get_numbersupporteditem() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.livedata.getECM_LiveDataNumberItemSupport();
        });
    }
    ld_abs_get_numbersupporteditem() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.livedata.getABS_LiveDataNumberItemSupport();
        });
    }
    ld_system_subsystem_numbersupporteditem(system, subsystem) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.livedata.getlivedata_numberpidsuppport_other(system, subsystem);
        });
    }
    ld_srs_get_numbersupporteditem() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.livedata.getSRS_LiveDataNumberItemSupport();
        });
    }
    ld_ecm_get_listinfo(start, end) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.livedata.getlivedata_listinfo(_standard_enums__WEBPACK_IMPORTED_MODULE_0__.enumInnovagroup.einnovagroup_GROUP_ENH_ECM, start, end);
        });
    }
    ld_abs_get_listinfo(start, end) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.livedata.getlivedata_listinfo(_standard_enums__WEBPACK_IMPORTED_MODULE_0__.enumInnovagroup.einnovagroup_GROUP_ABS, start, end);
        });
    }
    ld_srs_get_listinfo(start, end) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.livedata.getlivedata_listinfo(_standard_enums__WEBPACK_IMPORTED_MODULE_0__.enumInnovagroup.einnovagroup_GROUP_SRS, start, end);
        });
    }
    ld_others_get_listinfo(start, end) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.livedata.getlivedata_listinfo(_standard_enums__WEBPACK_IMPORTED_MODULE_0__.enumInnovagroup.einnovagroup_INNOVA_GROUP_UNKNOW, start, end);
        });
    }
    // Service Reset
    power_actual_test_enter_proc() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.gui.proc_enter_proc(_obd_vcistd__WEBPACK_IMPORTED_MODULE_2__.SYS_PROC_ID.PROC_SYSTEM_AND_ACTUAL_TEST, _obd_vcistd__WEBPACK_IMPORTED_MODULE_2__.SYS_CMD_ID.CMD_INIT_PROC);
        });
    }
    service_reset_proc_enter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.gui.proc_enter_proc(_obd_vcistd__WEBPACK_IMPORTED_MODULE_2__.SYS_PROC_ID.PROC_SERVICE_RESET, _obd_vcistd__WEBPACK_IMPORTED_MODULE_2__.SYS_CMD_ID.CMD_INIT_PROC);
        });
    }
    oil_reset_enter_proc() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.gui.proc_enter_proc(_obd_vcistd__WEBPACK_IMPORTED_MODULE_2__.SYS_PROC_ID.PROC_OIL_RESET, _obd_vcistd__WEBPACK_IMPORTED_MODULE_2__.SYS_CMD_ID.CMD_INIT_PROC);
        });
    }
    battery_reset_enter_proc() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.gui.proc_enter_proc(_obd_vcistd__WEBPACK_IMPORTED_MODULE_2__.SYS_PROC_ID.PROC_OEM_BAT_RESET, _obd_vcistd__WEBPACK_IMPORTED_MODULE_2__.SYS_CMD_ID.CMD_INIT_PROC);
        });
    }
    epb_enter_proc() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.gui.proc_enter_proc(_obd_vcistd__WEBPACK_IMPORTED_MODULE_2__.SYS_PROC_ID.PROC_EPB, _obd_vcistd__WEBPACK_IMPORTED_MODULE_2__.SYS_CMD_ID.CMD_INIT_PROC);
        });
    }
    sas_enter_proc() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.gui.proc_enter_proc(_obd_vcistd__WEBPACK_IMPORTED_MODULE_2__.SYS_PROC_ID.PROC_SAS_CALIBRATION, _obd_vcistd__WEBPACK_IMPORTED_MODULE_2__.SYS_CMD_ID.CMD_INIT_PROC);
        });
    }
    /**
     * [specfunction_enter_proc enter proc special test]
     * @return [description]
     */
    spectest_enter_proc() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.gui.gui_proc_enter_specialFunction_feature(_obd_vcistd__WEBPACK_IMPORTED_MODULE_2__.SF_FunctionGroup.UNKNOWN);
            // await this.gui.gui_set_special_function_group(ENUMVCIs.SF_FunctionGroup.UNKNOWN);
            // return await this.gui.proc_enter_proc(ENUMVCIs.SYS_PROC_ID.PROC_SPECIAL_FUNCTION, ENUMVCIs.SYS_CMD_ID.CMD_INIT_PROC);
        });
    }
    spectest_activetest_set_module(system, subsystem) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.gui.gui_proc_sf_at_set_active_module(system, subsystem);
        });
    }
    dpf_enter_proc() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            //await this.gui.gui_set_special_function_group(ENUMVCIs.SF_FunctionGroup.UNKNOWN);
            return yield this.gui.proc_enter_proc(_obd_vcistd__WEBPACK_IMPORTED_MODULE_2__.SYS_PROC_ID.PROC_DPF_RESET, _obd_vcistd__WEBPACK_IMPORTED_MODULE_2__.SYS_CMD_ID.CMD_INIT_PROC);
        });
    }
    actuatortest_enter_proc() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            //await this.gui.gui_set_special_function_group(ENUMVCIs.SF_FunctionGroup.UNKNOWN);
            return yield this.gui.proc_enter_proc(_obd_vcistd__WEBPACK_IMPORTED_MODULE_2__.SYS_PROC_ID.PROC_ACTIVE_TEST, _obd_vcistd__WEBPACK_IMPORTED_MODULE_2__.SYS_CMD_ID.CMD_INIT_PROC);
        });
    }
    tpms_reset_enter_proc() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.gui.proc_enter_proc(_obd_vcistd__WEBPACK_IMPORTED_MODULE_2__.SYS_PROC_ID.PROC_TPMS_RESET_MENU, _obd_vcistd__WEBPACK_IMPORTED_MODULE_2__.SYS_CMD_ID.CMD_INIT_PROC);
        });
    }
    battery_health_check_enter_proc() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.gui.proc_enter_proc(_obd_vcistd__WEBPACK_IMPORTED_MODULE_2__.SYS_PROC_ID.PROC_BATTERY_HEALTH_CHECK, _obd_vcistd__WEBPACK_IMPORTED_MODULE_2__.SYS_CMD_ID.CMD_INIT_PROC);
        });
    }
    gui_set_key_option_old(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            try {
                yield this.gui.set_param(_obd_vcistd__WEBPACK_IMPORTED_MODULE_2__.VCI_GUI_Param_Type.param_selection, id);
                yield this.delay(100);
                yield this.gui.gui_set_key_code(_obd_vcistd__WEBPACK_IMPORTED_MODULE_2__.GUI_KEY_CODE.GUI_KEY_ENTER);
            }
            catch (err) {
                this.log('set key option issue:' + err);
            }
        });
    }
    //
    gui_set_key_option(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            try {
                yield this.gui.gui_set_key_code_with_index(_obd_vcistd__WEBPACK_IMPORTED_MODULE_2__.GUI_KEY_CODE.GUI_KEY_ENTER, id);
            }
            catch (err) {
                this.log('set key option issue:' + err);
            }
        });
    }
    gui_set_softkey(type) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            if (type === "left") {
                //await this.gui.set_param(ENUMVCIs.VCI_GUI_Param_Type.param_selection, id);
                return yield this.gui.gui_set_key_code(_obd_vcistd__WEBPACK_IMPORTED_MODULE_2__.GUI_KEY_CODE.GUI_SOFTKEY_1);
            }
            else {
                //await this.gui.set_param(ENUMVCIs.VCI_GUI_Param_Type.param_selection, id);
                return yield this.gui.gui_set_key_code(_obd_vcistd__WEBPACK_IMPORTED_MODULE_2__.GUI_KEY_CODE.GUI_SOFTKEY_2);
            }
        });
    }
    cancel_process() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.obd2.cancel_vci_process();
        });
    }
    reset_fast_cancel() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.obd2.ResetFastCancel();
        });
    }
    deregisterReceiveCb() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            this.commService.isRegisterCallBack = false;
        });
    }
    initGUIProc() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            this.commService.isRegisterCallBack = true;
            this.commService.isConfirmNormal = false;
        });
    }
    deinitGUIProc() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            this.commService.isRegisterCallBack = false;
            this.log('Terminate proc');
            yield this.gui_terminate_proc();
        });
    }
    gui_register_cb(cbfunc = null) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            try {
                this.commService.isRegisterCallBack = true;
                this.commService.isConfirmNormal = false;
                this.commService.EventCallBackFunction.subscribe({
                    next: data => {
                        cbfunc & cbfunc(data);
                        // this.logger.log(datau8array.toString())
                    },
                    error: err => {
                        this.log('error' + err);
                    },
                    complete: () => {
                        this.log('done');
                    }
                });
            }
            catch (err) {
                alert(err);
                this.log(err);
            }
        });
    }
    gui_set_input_val(input_val) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.gui.set_param(_obd_vcistd__WEBPACK_IMPORTED_MODULE_2__.VCI_GUI_Param_Type.param_input, input_val);
        });
    }
    gui_exec_disp() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.gui.gui_notice_disp();
        });
    }
    gui_terminate_proc() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            //await this.gui.gui_set_special_function_group(ENUMVCIs.SF_FunctionGroup.UNKNOWN);
            return yield this.gui.proc_terminate_proc();
        });
    }
    ABS_bleeding_enter_proc() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            // await this.gui.gui_set_special_function_group(ENUMVCIs.SF_FunctionGroup.ABS_Bleeding);
            // return await this.gui.proc_enter_proc(ENUMVCIs.SYS_PROC_ID.PROC_SPECIAL_FUNCTION, ENUMVCIs.SYS_CMD_ID.CMD_INIT_PROC);
            return yield this.gui.gui_proc_enter_specialFunction_feature(_obd_vcistd__WEBPACK_IMPORTED_MODULE_2__.SF_FunctionGroup.ABS_Bleeding);
        });
    }
    //20-08-2020 10:17 Log Data Function
    /**
     * [StartLog start logging data]
     * @return [true if start logging no issue, otherwise is false]
     */
    StartLog() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            yield this.obdsystem.SetLogFunction(_obd_vcistd__WEBPACK_IMPORTED_MODULE_2__.VCI_Data_Logging.EN_All);
            return yield this.obdsystem.StartLog();
        });
    }
    /**
     * [StopLog stop logging data]
     * @return [true if stop logging no issue, otherwise is false]
     */
    StopLog() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.obdsystem.StopLog();
        });
    }
    /**
    * [GetLog get the logging data stored before ]
    * @return [vehicle data logged in VCI]
    */
    GetLog() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.obdsystem.GetLog();
        });
    }
    //YMME function 07-09-2020 21:26
    ymme_init() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            yield this.ymme.init();
            return yield this.ymme.get(0);
        });
    }
    ymme_get(sel_id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.ymme.get(sel_id);
        });
    }
    ymme_back() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.ymme.get(0xFF);
        });
    }
    ymme_confirm() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.ymme.confirm();
        });
    }
}
OBDService.ɵfac = function OBDService_Factory(t) { return new (t || OBDService)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵinject"](_utilities_notify_service__WEBPACK_IMPORTED_MODULE_3__.NotifyService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵinject"](_command_command_service__WEBPACK_IMPORTED_MODULE_4__.CommandService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵinject"](_obd_obd2__WEBPACK_IMPORTED_MODULE_5__.OBD2), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵinject"](_obd_nwscan__WEBPACK_IMPORTED_MODULE_6__.NWSCAN), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵinject"](_obd_OBDSystem__WEBPACK_IMPORTED_MODULE_7__.OBDSystem), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵinject"](_obd_obd2ff__WEBPACK_IMPORTED_MODULE_8__.OBD2FF), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵinject"](_obd_ofm__WEBPACK_IMPORTED_MODULE_9__.OFM), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵinject"](_obd_livedata__WEBPACK_IMPORTED_MODULE_10__.Livedata), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵinject"](_obd_symptom__WEBPACK_IMPORTED_MODULE_11__.Symptom), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵinject"](_obd_ymme__WEBPACK_IMPORTED_MODULE_12__.YMME), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵinject"](_obd_gui__WEBPACK_IMPORTED_MODULE_13__.GUI)); };
OBDService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjectable"]({ token: OBDService, factory: OBDService.ɵfac, providedIn: 'root' });



/***/ }),

/***/ 7860:
/*!************************************************!*\
  !*** ./src/app/services/innova-vci.service.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bytesToBase64": function() { return /* binding */ bytesToBase64; },
/* harmony export */   "isEmptyResponse": function() { return /* binding */ isEmptyResponse; },
/* harmony export */   "includesAny": function() { return /* binding */ includesAny; },
/* harmony export */   "VCI_STATIC_TEXTS": function() { return /* binding */ VCI_STATIC_TEXTS; },
/* harmony export */   "InnovaScreenEventResp": function() { return /* binding */ InnovaScreenEventResp; },
/* harmony export */   "InnovaVCIService": function() { return /* binding */ InnovaVCIService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../configs/app.config */ 66626);
/* harmony import */ var _innova_vci_service_src_obdservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./innova-vci-service/src/obdservice.service */ 91537);
/* harmony import */ var _innova_vci_service_src_utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./innova-vci-service/src/utilities/dataParser */ 81402);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs */ 79441);
/* harmony import */ var _innova_vci_service_src_standard_enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./innova-vci-service/src/standard/enums */ 13930);
/* harmony import */ var _innova_tool_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./innova-tool-models */ 92951);
/* harmony import */ var _innova_vci_service_src_obd_vcistd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./innova-vci-service/src/obd/vcistd */ 48860);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ 202);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _innova_vci_service_src_obd_obdUtils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./innova-vci-service/src/obd/obdUtils */ 2586);
/* harmony import */ var _models_app_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../models/app.model */ 20998);
/* harmony import */ var _models_app_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../models/app.enum */ 34932);
/* harmony import */ var _app_validators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../app.validators */ 48420);
/* harmony import */ var _innova_helper_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./innova-helper.service */ 59413);
/* harmony import */ var _models_app_data__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../models/app.data */ 40354);
/* harmony import */ var _state_app_state__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./state/app.state */ 12607);
/* harmony import */ var _innova_report_helper_innova_report_data_models__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./innova-report-helper/innova-report-data-models */ 51572);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _events_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./events.service */ 80106);
/* harmony import */ var _helper_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./helper.service */ 22486);
/* harmony import */ var _ionic_native_ble_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic-native/ble/ngx */ 11695);
/* harmony import */ var _innova_vci_service_src_connectivity_connectivity_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./innova-vci-service/src/connectivity/connectivity.service */ 27555);
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./logger */ 88737);

/**
 * @Author: quocdo-macbook
 * @Date:   2021-11-22T09:22:51+07:00
 * @Last modified by:   quocdo-macbook
 * @Last modified time: 2021-12-29T13:57:29+07:00
 */
/**
 * Innova VCI Service Wrapper
 * @author Ngoc LB <ngoclb@card.com>
 * @date July 08, 2019
 */
























function bytesToBase64(bytes) {
    return btoa(String.fromCharCode.apply(null, bytes));
}
function isEmptyResponse(bytes) {
    let count = (bytes || []).reduce((total, x) => (x === 0x00 ? total + 1 : total), 0);
    return (count === bytes.length || (bytes[0] === 0xaa && count === bytes.length - 1));
}
const DEFAULT_LOG_LEVEL = [
    _innova_vci_service_src_obdservice_service__WEBPACK_IMPORTED_MODULE_1__.EnumNotify.NOTIFY_DEBUG_LOG,
    _innova_vci_service_src_obdservice_service__WEBPACK_IMPORTED_MODULE_1__.EnumNotify.NOTIFY_DEBUG_LOG_COM_TX,
    _innova_vci_service_src_obdservice_service__WEBPACK_IMPORTED_MODULE_1__.EnumNotify.NOTIFY_DEBUG_LOG_COM_RX,
    _innova_vci_service_src_obdservice_service__WEBPACK_IMPORTED_MODULE_1__.EnumNotify.NOTIFY_DEBUG_LOG_COM_RX_RX,
    _innova_vci_service_src_obdservice_service__WEBPACK_IMPORTED_MODULE_1__.EnumNotify.NOTIFY_VCI_DATA_RESPONSE,
    // EnumNotify.NOTIFY_VCI_COMMAND_REQUEST
];
function includesAny(search, haystack, matchCase = false) {
    search = typeof search === 'string' ? search : '';
    return !!(haystack || []).find((str) => matchCase
        ? search.includes(str)
        : search.toLowerCase().includes(str.toLowerCase()));
}
const VCI_STATIC_TEXTS = {
    DtcStatus: {
        store: ['stored', 'almacenado'],
        pending: ['pending', 'pendiente'],
        permanent: ['permanent', 'permanente'],
    },
    UIProcess: {
        loading_symbols: ['…', '...'],
        service_reset: ['service reset', 'reinicio del servicio'],
        start_process: [
            'start process..',
            'iniciar proceso..',
            'démarrer le processus..',
        ],
        retry: ['retry', 'reintentar', 'réessayez'],
        exit: ['exit', 'salida', 'sortie'],
        back: ['back', 'atrás', 'arrière'],
        yes: ['yes'],
        no: ['no'],
        one_moment_please: [
            'one moment please',
            'espere un momento',
            'un instant',
            "s'il vous plaît",
        ],
        view_procedure: [
            'view procedure',
            'ver procedimiento',
            'voir la procédure',
        ],
        successful: ['successful', 'satisfactoriamente', 'succès'],
        complete: ['complete', 'completo', 'achevée'],
        completed: ['completed', 'terminado', 'terminé'],
        command_state: ['Commanded State:', 'Estado mandado:', 'État commandé:'],
        result: ['Result:', 'Resultado:', 'Résultat:'],
        is_not_supported: [
            'is not supported',
            'no es apoyado',
            "n'est pas pris en charge",
        ],
    },
};
class InnovaScreenEventResp {
    constructor(respdataOrType, respBody) {
        if (typeof respdataOrType === 'string') {
            this._type = respdataOrType;
            this._body = respBody;
        }
        else if (typeof respdataOrType === 'object') {
            this._type = Object.keys(respdataOrType || {})[0];
            this._body = respdataOrType[this._type] || null;
        }
    }
    get type() {
        let currenttype = this._type;
        return {
            toString() {
                return currenttype;
            },
            isEquals(screentype) {
                return currenttype === screentype;
            },
        };
    }
    get leftKey() {
        return this._body ? (this._body[0] || '').toString().trim() : null;
    }
    get rightKey() {
        return this._body ? (this._body[2] || '').toString().trim() : null;
    }
    get bodyText() {
        if (this._body) {
            if (this._body.str)
                return this._body.str[2];
            else if (this._body.hdr)
                return this._body.hdr[2] || this._body.hdr[4];
        }
        return '';
    }
    get body() {
        return this._body;
    }
}
class InnovaVCIService {
    constructor(obdService, eventService, helper, ble, connService, appLoggerService) {
        var _a;
        this.obdService = obdService;
        this.eventService = eventService;
        this.helper = helper;
        this.ble = ble;
        this.connService = connService;
        this._isConnected = null;
        this._isVehicleConnected = false;
        this._isWatchingConnection = true;
        this._totalSleepTimeMs = 0;
        this.supportLogTags = DEFAULT_LOG_LEVEL;
        this.isScreenGuiInitialized = false;
        this.isSetVciLocale = false;
        this._screenActions = {
            initGUIProc: () => (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, function* () {
                yield this.obdService.deinitGUIProc().catch((err) => { });
                try {
                    yield this.obdService.initGUIProc();
                }
                catch (err) {
                    return false;
                }
                return this.initToolScreenGUI();
            }),
            deinitGUIProc: (delayMs = src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_0__.SLEEP_TIMEOUT, timeoutMs = src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_0__.TIMEOUT_GET_VEH_SUMMARY) => {
                if (this.isScreenGuiInitialized) {
                    this.isScreenGuiInitialized = false;
                    return new Promise((resolve) => (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, function* () {
                        const sto = setTimeout(() => {
                            this.logger.debug('deinitGUIProc timed out');
                            resolve(false);
                        }, timeoutMs);
                        if (delayMs) {
                            yield this.sleep(delayMs);
                        }
                        yield this.obdService
                            .deinitGUIProc()
                            .catch(this.logger.debug.bind(null, 'deinitGUIProc failed'));
                        this.logger.debug('deinitGUIProc OK');
                        clearTimeout(sto);
                        resolve(true);
                    }));
                }
                return false;
            },
            back: () => {
                this.logger.debug('press left key');
                return this.obdService.gui_set_softkey('left');
            },
            next: () => {
                this.logger.debug('press right key');
                return this.obdService.gui_set_softkey('right');
            },
            selectOption: (option) => {
                this.logger.debug('press option key', option);
                return this.obdService.gui_set_key_option(option);
            },
            setInput: (value) => {
                this.logger.debug('set input value', value);
                return this.obdService.gui_set_input_val(value);
            },
        };
        /** Start VCI Data Log */
        this._isVciLog = false;
        // this.initVCIResponseHandlers();
        this.logger = (_a = appLoggerService.getLogger('InnovaVCIService')) !== null && _a !== void 0 ? _a : {};
    }
    get isConnected() {
        return this._isConnected;
    }
    get connectedDevAddr() {
        return this._connectedDevAddr;
    }
    get toolName() {
        return this._toolName;
    }
    get isVehicleConnected() {
        return this._isVehicleConnected;
    }
    get isWatchingConnection() {
        return this._isWatchingConnection;
    }
    // S16: Show notice for some special Make (BMW)
    get needCheckResetIgnition() {
        if (this._vciResponseData && this._vciResponseData.ymme) {
            let manufacturer = this._vciResponseData.ymme.manufacturer;
            if (!manufacturer) {
                manufacturer = (0,_innova_report_helper_innova_report_data_models__WEBPACK_IMPORTED_MODULE_14__.getManufactureByMake)(this._vciResponseData.ymme.make);
            }
            return ['BMW'].includes(manufacturer.toUpperCase());
        }
        return false;
    }
    // T7R-85 Toyota, Lexus, Scion Pop-Up
    get needUpdateMoreVehicleInfo() {
        if (this._vciResponseData && this._vciResponseData.ymme) {
            const ymme = this._vciResponseData.ymme;
            let manufacturer = ymme.manufacturer;
            if (!manufacturer) {
                manufacturer = (0,_innova_report_helper_innova_report_data_models__WEBPACK_IMPORTED_MODULE_14__.getManufactureByMake)(ymme.make);
            }
            return ['TOYOTA'].includes(manufacturer.toUpperCase());
        }
        return false;
    }
    startWatchingConnection() {
        this._isWatchingConnection = true;
        this.resumeProcess();
    }
    stopWatchingConnection() {
        this._isWatchingConnection = false;
        clearTimeout(this.stoCheckConnection);
        this.stoCheckConnection = 0;
    }
    skipWatchingConnection(isSkip) {
        this.stoCheckConnection = isSkip ? -1 : 0;
    }
    get isToolReady() {
        return this._isToolReady;
    }
    waitToolReady(timeout = 5000) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, function* () {
            if (this.isConnected) {
                const ms = 500;
                yield this.helper.sleep(ms);
                this.logger.debug(`isToolReady=${this._isToolReady}, timeout=${timeout}`);
                timeout -= ms;
                if (!this._isToolReady && timeout > 0) {
                    return this.waitToolReady(timeout);
                }
            }
            return this._isToolReady;
        });
    }
    /**
     * Cancel function by Innova
     */
    cancelProcess(timeoutMs = src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_0__.TIMEOUT_GET_VEH_SUMMARY) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolve) => (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, function* () {
                const sto = setTimeout(() => {
                    this.logger.debug('cancelProcess timed out');
                    resolve(false);
                }, timeoutMs);
                this.obdService.stopQuery();
                try {
                    yield this.screenAction.deinitGUIProc();
                    yield this.obdService.cancel_process();
                }
                catch (err) {
                    this.logger.debug('cancelProcess failed', err);
                }
                this.connService.cancel_process();
                this.linkedProtocol = null;
                this.eventService.publish(_innova_tool_models__WEBPACK_IMPORTED_MODULE_4__.InnovaVCIEvent.INTERRUPT_PROCESS);
                yield this.waitToolReady();
                clearTimeout(sto);
                this.resumeProcess();
                resolve(true);
            }));
        });
    }
    // async proc_keepalive() {
    //   return await this.obdService.gui_keep_alive();
    // }
    /**
     * Resume process still has connection
     */
    resumeProcess() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, function* () {
            this.connService.resume_process();
            this._isToolReady = true;
        });
    }
    /**
     * Disconnect with tool
     * @param closePort true: disconnect and close port | false: just unscribe event, keep connection with tool
     */
    disconnect(closePort = false, deviceId = null) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, function* () {
            yield this.cancelProcess();
            if (closePort) {
                yield this.connService
                    .closePort()
                    // .then(this.logger.debug.bind(null, 'closePort OK'))
                    .catch(this.logger.debug.bind(null, 'closePort failed'));
            }
            this._isConnected = false;
            this._connectedDevAddr = null;
            this._toolName = null;
            this.linkedProtocol = null;
            this.resetVciLocale();
            if (deviceId) {
                yield this.disconnectBT(deviceId);
            }
            return true;
        });
    }
    disconnectBT(deviceId = null) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, function* () {
            if (this.isConnected) {
                this._isConnected = false;
            }
            if (deviceId) {
                yield this.obdService
                    .disconnectBluetoothDevices()
                    .catch(this.logger.debug.bind(null, 'disconnectBluetoothDevices failed'));
            }
            return true;
        });
    }
    initializeBT(timeout = 15000) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, function* () {
            if (this.isConnected)
                return true;
            console.log('this.isConnected: ', this.isConnected);
            this.logger.debug('Start scanning PROSCAN/PROSCANLE tools...');
            const _onDone = (msg = '') => {
                this.logger.debug('initializeBT result: ', msg);
            };
            const isBleEnabled = yield this.obdService
                .initialize_bt()
                .catch(this.logger.error.bind(null, 'initialize_bt failed'));
            console.log('isBleEnabled: ', isBleEnabled);
            if (isBleEnabled) {
                let _btDevices = [], _isStartBtConnect = false;
                const _connectBT = (selectedDevice = null) => (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, function* () {
                    console.log('selectedDevice: ', selectedDevice);
                    if (selectedDevice) {
                        _btDevices = [];
                        _btDevices.push(selectedDevice);
                    }
                    if (this.isConnected || _btDevices.length === 0) {
                        return _onDone(`done: isConnected=${this.isConnected} btDevices length=${_btDevices.length}`);
                    }
                    let device = _btDevices.pop();
                    console.log('device: ', device);
                    this.logger.debug('Connecting...', device);
                    try {
                        this.eventService.publish(_innova_tool_models__WEBPACK_IMPORTED_MODULE_4__.InnovaVCIEvent.SCAN_STATUS, {
                            name: 'Connecting to device...',
                            result: device.name + ' found',
                        });
                        // init log
                        // await this.obdService.initialize_bt(this.handleResponse.bind(this));
                        let isBTConnected = yield this.obdService.connectBlueToothDevice(device.id);
                        console.log('isBTConnected: ', isBTConnected);
                        if (isBTConnected) {
                            if (_scanBtProc) {
                                _scanBtProc.unsubscribe();
                            }
                            _btDevices = [];
                            // init log
                            yield this.obdService.initialize_bt(this.handleResponse.bind(this));
                            this._isConnected = this.obdService.BluetoothIsConnected();
                            if (this.isConnected) {
                                this.linkedProtocol = null;
                                this.resetVciReponseData();
                                this.resetVciLocale();
                                this._connectedDevAddr = device.id;
                                this._toolName = device.name;
                                this._isToolReady = true;
                                this.eventService.publish(_innova_tool_models__WEBPACK_IMPORTED_MODULE_4__.InnovaVCIEvent.CONNECTED, device);
                                return _onDone(`connected to ${device.id}`);
                            }
                            // return _connectBT(device);
                        }
                        else {
                            this.eventService.publish(_innova_tool_models__WEBPACK_IMPORTED_MODULE_4__.InnovaVCIEvent.SCAN_STATUS, {
                                name: 'Unable to connect device',
                                result: '',
                            });
                            return _onDone(`Unable to connect device`);
                        }
                    }
                    catch (e) {
                        return _onDone(`error catched ${e}`);
                    }
                });
                let pairedDevices = yield this.obdService.get_list_bt_bondeddevices();
                console.log('*** pairedDevices: ', pairedDevices);
                if (!lodash__WEBPACK_IMPORTED_MODULE_6__.isEmpty(pairedDevices)) {
                    this.logger.debug('pairedDevices', pairedDevices);
                    _btDevices = pairedDevices
                        .filter((btDevice) => lodash__WEBPACK_IMPORTED_MODULE_6__.includes(src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_0__.SUPPORTED_BLUETOOTH_DEVICE_NAMES, btDevice['name']))
                        .reverse();
                }
                let _scanBtProc = null;
                if (_btDevices && _btDevices.length > 0) {
                    console.log('_btDevices: ', _btDevices);
                    let btDevice = _btDevices[0];
                    this.logger.debug('Found bluetooth device', btDevice);
                    if (!_isStartBtConnect) {
                        _connectBT();
                        _isStartBtConnect = true;
                    }
                }
                else {
                    if (_state_app_state__WEBPACK_IMPORTED_MODULE_13__.AppState.isOnAndroid) {
                        console.log('Call this.ble.stopScan');
                        this.ble.stopScan().then(() => (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, function* () {
                            console.log('**** Start this.ble.scan');
                            _scanBtProc = this.ble.startScan([]).subscribe((btDevice) => {
                                console.log('btDevice: ', btDevice);
                                if (btDevice['name'] && btDevice['name'].length > 0) {
                                    console.log('btDevice Name: ', btDevice['name']);
                                    if (lodash__WEBPACK_IMPORTED_MODULE_6__.includes(src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_0__.SUPPORTED_BLUETOOTH_DEVICE_NAMES, btDevice['name'])) {
                                        this.logger.debug('Device found', btDevice);
                                        console.log('Device found', btDevice);
                                        const index = _btDevices.findIndex((d) => d.id === btDevice['id']);
                                        if (index < 0) {
                                            let btName = btDevice['name'];
                                            let isLocalName = false;
                                            const localName = localStorage.getItem(btDevice['id']);
                                            if (localName) {
                                                btName = localName;
                                                isLocalName = true;
                                            }
                                            const pro15Tool = new _models_app_model__WEBPACK_IMPORTED_MODULE_8__.BleData(btDevice['id'], btName, isLocalName);
                                            this.eventService.publish(_innova_tool_models__WEBPACK_IMPORTED_MODULE_4__.InnovaVCIEvent.DEVICE_FOUND, pro15Tool);
                                            _btDevices.push(pro15Tool);
                                        }
                                    }
                                }
                            });
                        }));
                        this.eventService.subscribe(_innova_tool_models__WEBPACK_IMPORTED_MODULE_4__.InnovaVCIEvent.DEVICE_SELECTED, (device) => {
                            console.log('this.eventService.subscribe device: ', device);
                            this.eventService.unsubscribe(_innova_tool_models__WEBPACK_IMPORTED_MODULE_4__.InnovaVCIEvent.DEVICE_SELECTED);
                            if (!_isStartBtConnect) {
                                _connectBT(device);
                                _isStartBtConnect = true;
                            }
                        });
                    }
                    else {
                        //while(true){
                        let devices = yield this.connService.discoverBluetoothDevices2();
                        if (devices && devices.length > 0) {
                            this.eventService.subscribe(_innova_tool_models__WEBPACK_IMPORTED_MODULE_4__.InnovaVCIEvent.DEVICE_SELECTED, (device) => {
                                this.eventService.unsubscribe(_innova_tool_models__WEBPACK_IMPORTED_MODULE_4__.InnovaVCIEvent.DEVICE_SELECTED);
                                if (!_isStartBtConnect) {
                                    _connectBT(device);
                                    _isStartBtConnect = true;
                                }
                            });
                            while (devices.length) {
                                let device = devices.shift();
                                this.logger.debug('Found Pro15 device', device);
                                let btName = device['name'];
                                let isLocalName = false;
                                const localName = localStorage.getItem(device['id']);
                                if (localName) {
                                    btName = localName;
                                    isLocalName = true;
                                }
                                const pro15Tool = new _models_app_model__WEBPACK_IMPORTED_MODULE_8__.BleData(device['id'], btName, isLocalName);
                                this.eventService.publish(_innova_tool_models__WEBPACK_IMPORTED_MODULE_4__.InnovaVCIEvent.DEVICE_FOUND, pro15Tool);
                                _btDevices.push(pro15Tool);
                            }
                        }
                    }
                }
            }
            else {
                _onDone('bluetooth is disabled');
            }
        });
    }
    /**
     * Check if user connect with Vehicle or not
     * batteryVolt > 3.3: connected
     */
    isConnectedVehicle() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, function* () {
            return !!this.isConnected;
        });
    }
    /**
     * Link protocol and prepare data
     */
    linkProtocols() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.isConnected) {
                yield this.initializeBT();
            }
            /** Since FW 43 (tool cached latest vehicle data), we need  to link protocol when start getting any data */
            // if (this.linkedProtocol) {
            //   this.logger.debug(`Already linked protocol ${this.linkedProtocol}, skip process`);
            //   return true;
            // };
            let callbackResult;
            // const isLinkedProtocol = await this.obdService.obd2AutoLink(info => {
            //     callbackResult = info;
            //     this.events.publish(InnovaVCIEvent.LINK_PROTOCOL, callbackResult);
            //     this.logger.debug(callbackResult);
            //   });
            const protocolId = yield this.obdService.obd2Query((info) => {
                callbackResult = info;
                this.logger.debug('callbackResult: ', callbackResult);
                if (callbackResult.total === 0) {
                    this.disconnect(true, this._connectedDevAddr);
                }
                else if ([
                    (0,_innova_vci_service_src_obd_obdUtils__WEBPACK_IMPORTED_MODULE_7__.enumProtocolToString)(_innova_vci_service_src_standard_enums__WEBPACK_IMPORTED_MODULE_3__.enumProtocol.eprotocol_UNKNOWN),
                    (0,_innova_vci_service_src_obd_obdUtils__WEBPACK_IMPORTED_MODULE_7__.enumProtocolToString)(undefined),
                ].includes(callbackResult.message)) {
                    this._isVehicleConnected = false;
                }
                // this.events.publish(InnovaVCIEvent.LINK_PROTOCOL, callbackResult);
            }, false);
            // if (!protocolId && !callbackResult.isfinish) {
            if (!protocolId) {
                throw new Error(`Link protocols failed: ${JSON.stringify(callbackResult)}`);
            }
            this.linkedProtocol = {
                protocolId,
            };
            this.resetVciLocale();
            if (this.isEmptyVciData) {
                this.resetVciReponseData();
            }
            yield this.sleep(src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_0__.SLEEP_EACH_VCI_REQUEST);
            const startMs = new Date().getTime();
            // await this.obdService.obd2RetriveData(); /*
            yield this.obdService.obd2QuickRetriveData(); // */
            const endMs = new Date().getTime();
            this.logger.debug(`obd2QuickRetrieveData duration: ${Math.round(((endMs - startMs) / 1000) * 100) / 100}s`);
            return true;
        });
    }
    get protocolName() {
        const protocolName = (0,_innova_vci_service_src_obd_obdUtils__WEBPACK_IMPORTED_MODULE_7__.enumProtocolToString)(this.linkedProtocol.protocolId);
        return protocolName.replace('Protocol ', '');
    }
    /**
     * Sleep and check connection
     */
    sleep(ms, checkVehConn = false) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, function* () {
            yield this.helper.sleep(ms);
            if (this.isConnected) {
                if (checkVehConn) {
                    this._isVehicleConnected = yield this.isConnectedVehicle();
                    if (this.isVehicleConnected) {
                        return ms;
                    }
                    else {
                        throw new Error('Vehicle is disconnected.');
                    }
                }
                if (this._totalSleepTimeMs >= 0) {
                    this._totalSleepTimeMs += ms;
                }
                return ms;
            }
            this.enableReportSleepTime(false);
            throw new Error('Disconnected.');
        });
    }
    get totalSleepTime() {
        return this._totalSleepTimeMs;
    }
    enableReportSleepTime(isEnable) {
        if (isEnable) {
            this._totalSleepTimeMs = 0;
        }
        else {
            this._totalSleepTimeMs = -1;
        }
    }
    /**
     * Set Unit and Language for VCI
     */
    setVciLocale({ setUnit = true, setLang = true } = {}) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, function* () {
            this.logger.debug(`setVciLocale setUnit=${setUnit}, setLang=${setLang}`);
            // Set unit
            if (setUnit) {
                let unit_name = _models_app_data__WEBPACK_IMPORTED_MODULE_12__.AppData.get(_models_app_enum__WEBPACK_IMPORTED_MODULE_9__.EnumAppDataKey.AppRegional);
                if (unit_name) {
                    const units = [
                        {
                            name: 'Standard',
                            id: _innova_vci_service_src_obd_vcistd__WEBPACK_IMPORTED_MODULE_5__.UNIT_ID.Standard,
                        },
                        {
                            name: 'Metric',
                            id: _innova_vci_service_src_obd_vcistd__WEBPACK_IMPORTED_MODULE_5__.UNIT_ID.Metric,
                        },
                    ];
                    let selected_unit = units.find((item) => item.name === unit_name);
                    if (selected_unit) {
                        let isOk = yield this.obdService.setting_unittype(selected_unit.id);
                        yield this.sleep(src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_0__.SLEEP_EACH_VCI_REQUEST);
                        if (isOk) {
                            this._vciResponseData.unitId = selected_unit.id;
                            this.logger.debug('setting_unittype OK', unit_name);
                        }
                    }
                }
            }
            // Set language
            if (setLang) {
                let lang = _models_app_data__WEBPACK_IMPORTED_MODULE_12__.AppData.get(_models_app_enum__WEBPACK_IMPORTED_MODULE_9__.EnumAppDataKey.AppLanguage);
                if (lang) {
                    const langs = [
                        {
                            name: 'English',
                            code: 'en',
                            id: _innova_vci_service_src_obd_vcistd__WEBPACK_IMPORTED_MODULE_5__.GUI_LANGUAGE_ID.GUI_LANG_ENGLISH,
                        },
                        {
                            name: 'Spanish',
                            code: 'es',
                            id: _innova_vci_service_src_obd_vcistd__WEBPACK_IMPORTED_MODULE_5__.GUI_LANGUAGE_ID.GUI_LANG_SPANISH,
                        },
                        {
                            name: 'French',
                            code: 'fr',
                            id: _innova_vci_service_src_obd_vcistd__WEBPACK_IMPORTED_MODULE_5__.GUI_LANGUAGE_ID.GUI_LANG_FRENCH,
                        },
                    ];
                    let selected_lang = langs.find((item) => item.code === lang);
                    if (selected_lang) {
                        let isOk = yield this.obdService.setting_language(selected_lang.id);
                        yield this.sleep(src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_0__.SLEEP_EACH_VCI_REQUEST);
                        if (isOk) {
                            this._vciResponseData.langId = selected_lang.id;
                            this.logger.debug('setting_language OK', lang);
                        }
                    }
                }
            }
            return true;
        });
    }
    resetVciLocale() {
        this.isSetVciLocale = false;
    }
    connectAndGetToolInfo(sleepMs = 0) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, function* () {
            try {
                if (!this.isConnected) {
                    yield this.initializeBT();
                }
                if (sleepMs) {
                    yield this.sleep(sleepMs);
                }
                let info = yield this.obdService.getVersion();
                if (!info || !info.productid || !info.boot || !info.main) {
                    throw new Error(`obdService.getVersion return invalid data ${JSON.stringify(info)}`);
                }
                // let toolGUID = InnovaHelper.generateGuid(); /*
                let toolGUID = yield this.obdService.setting_getguid();
                if (_innova_helper_service__WEBPACK_IMPORTED_MODULE_11__.InnovaHelper.isInvalidOrEmptyGUID(toolGUID)) {
                    const guid = _innova_helper_service__WEBPACK_IMPORTED_MODULE_11__.InnovaHelper.generateGuid();
                    // this.logger.debug(`writeGUID ${randomGuid} rs: ${rs}`);
                    const rs = yield this.obdService.setting_setguid(guid);
                    if (rs) {
                        toolGUID = guid;
                    }
                } // */
                if (lodash__WEBPACK_IMPORTED_MODULE_6__.isEmpty(this.vciResponseData)) {
                    this.resetVciReponseData();
                }
                this._vciResponseData.usbProductId = info.productid;
                this._vciResponseData.bootloaderVersion = info.boot;
                this._vciResponseData.firmwareVersion = info.main;
                this._vciResponseData.databaseVersion = info.db;
                this._vciResponseData.dongleId = toolGUID;
                let toolInfo = Object.assign(Object.assign({ db: '0.0.1' }, info), { guid: toolGUID });
                this._connectedDevAddr = toolGUID;
                this.logger.debug('connectAndGetToolInfo', toolInfo);
                _models_app_data__WEBPACK_IMPORTED_MODULE_12__.AppData.set(_models_app_enum__WEBPACK_IMPORTED_MODULE_9__.EnumAppDataKey.InfoToolConnected, toolInfo);
                this.eventService.publish(_models_app_enum__WEBPACK_IMPORTED_MODULE_9__.EnumAppEvent.InfoToolConnected, toolInfo);
                return toolInfo;
            }
            catch (err) {
                this.logger.debug('connectAndGetToolInfo failed', err);
                return null;
            }
        });
    }
    connectAndRequestData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, function* () {
            try {
                let currentData = lodash__WEBPACK_IMPORTED_MODULE_6__.pick(this.vciResponseData, [
                    'vin',
                    'ymme',
                    'vinProfile',
                    'vehicleInfoEcm',
                    'vehicleInfoTcm',
                    'vehicleInfoData',
                    'mileage',
                    'dongleId',
                    'usbProductId',
                    'unitId',
                    'langId',
                    'bootloaderVersion',
                    'firmwareVersion',
                    'allSupportedModules',
                ]);
                this.setVciResponseData(currentData);
                let startMs, endMs;
                this.eventService.publish(_innova_tool_models__WEBPACK_IMPORTED_MODULE_4__.InnovaVCIEvent.SCAN_STATUS, {
                    name: 'Linking to vehicle...',
                    result: this._toolName + ' has been connected',
                });
                if (!this.linkedProtocol) {
                    yield this.linkProtocols();
                }
                //10-07-2020 15:21 Quoc Do changed here to fix Tab 470. Always retreiveData
                if (this.linkedProtocol) {
                    this.logger.debug('Run obd2RetriveData...');
                    startMs = new Date().getTime();
                    this.linkedProtocol.isFullLink =
                        yield this.obdService.obd2RetriveData();
                    endMs = new Date().getTime();
                    this.logger.debug(`[*] obd2RetriveData time: ${Math.round(((endMs - startMs) / 1000) * 100) / 100} seconds`);
                    yield this.sleep(src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_0__.SLEEP_TIMEOUT_LONG);
                }
                if (!this.isSetVciLocale) {
                    this.isSetVciLocale = yield this.setVciLocale();
                }
                if (!this._vciResponseData.dongleId) {
                    yield this.connectAndGetToolInfo();
                }
                //#region Default scan
                this.eventService.publish(_innova_tool_models__WEBPACK_IMPORTED_MODULE_4__.InnovaVCIEvent.SCAN_STATUS, {
                    name: 'Reading Battery Voltage...',
                    result: this.toolName + ' already linked to vehicle.',
                });
                let voltage = yield this.obdService.getBatteryVoltage();
                // console.log('getBatteryVoltage', voltage);
                if (voltage && typeof voltage === 'object') {
                    this._vciResponseData.batteryVoltage =
                        voltage.BatteryVoltage === undefined ? '0' : voltage.BatteryVoltage;
                }
                this.eventService.publish(_innova_tool_models__WEBPACK_IMPORTED_MODULE_4__.InnovaVCIEvent.SCAN_STATUS, {
                    name: 'Reading Vehicle ECM & TCM...',
                    result: 'Battery Voltage: ' + this._vciResponseData.batteryVoltage,
                });
                // 02. vehicle info
                yield this.sleep(src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_0__.SLEEP_EACH_VCI_REQUEST);
                yield this.getVehicleBufferAndInfo(!this._vciResponseData.vehicleInfoEcm, false // read vehicle info in other flow (T7R-15)
                // !this._vciResponseData.vehicleInfoData
                );
                this.eventService.publish(_innova_tool_models__WEBPACK_IMPORTED_MODULE_4__.InnovaVCIEvent.SCAN_STATUS, {
                    name: 'Reading Freeze Frame...',
                    result: 'Vehicle ECM & TCM: ' +
                        (this._vciResponseData.vehicleInfoEcm ? 'YES' : 'N/A'),
                });
                // 03. freeframe
                yield this.sleep(src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_0__.SLEEP_EACH_VCI_REQUEST);
                const ff = yield this.obdService.getVehReport_OBD2_FF_SID2_BUFF();
                this.logger.debug('getVehReport_OBD2_FF_SID2_BUFF', ff);
                if (ff.length > 0) {
                    this._vciResponseData.freezeFrameEcm = bytesToBase64(ff[0].data);
                    this._vciResponseData.freezeFrameTcm = bytesToBase64(ff[1] ? ff[1].data : '');
                    /*
                    await this.sleep(SLEEP_EACH_VCI_REQUEST);
                    const freezeFrameDtc = await this.obdService.getVehReport_FreezeFrameDTCInfo();
                    if(freezeFrameDtc){
                      this._vciResponseData.freezeFrameDTCData = freezeFrameDtc as any;
                    } else {
            
                    }
                    await this.sleep(SLEEP_EACH_VCI_REQUEST);
                    const freezeFrameLd = await this.obdService.getVehReport_FreezeFrameLDInfo();
                    if(freezeFrameLd){
                      this._vciResponseData.freezeFrameLDData = freezeFrameLd as any;
                    } else {
            
                    }
                    */
                    this.eventService.publish(_innova_tool_models__WEBPACK_IMPORTED_MODULE_4__.InnovaVCIEvent.SCAN_STATUS, {
                        name: 'Reading Monitor Status...',
                        result: 'Freeze Frame: ' +
                            (this._vciResponseData.freezeFrameEcm ? 'YES' : 'NO'),
                    });
                }
                else {
                    this.eventService.publish(_innova_tool_models__WEBPACK_IMPORTED_MODULE_4__.InnovaVCIEvent.SCAN_STATUS, {
                        name: 'Reading Monitor Status...',
                        result: 'Freeze Frame: N/A',
                    });
                }
                // 04. monitor
                yield this.sleep(src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_0__.SLEEP_EACH_VCI_REQUEST);
                const monitor = yield this.obdService.getVehReport_OBD2_LD_SID1_BUFF();
                this.logger.debug('getVehReport_OBD2_LD_SID1_BUFF', monitor);
                if (monitor.length > 0) {
                    this._vciResponseData.monitorEcm = bytesToBase64(monitor[0].data);
                    this._vciResponseData.monitorTcm = bytesToBase64(monitor[1] ? monitor[1].data : '');
                    yield this.sleep(src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_0__.SLEEP_EACH_VCI_REQUEST);
                    let dtcs = yield this.readDtcsOBDII();
                    this.logger.debug('getVehReport_OBD2_DTC_Info readDtcsOBDII', dtcs);
                    lodash__WEBPACK_IMPORTED_MODULE_6__.set(this._vciResponseData, 'dtcInfoData', dtcs);
                    yield this.sleep(src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_0__.SLEEP_EACH_VCI_REQUEST);
                    const monitorData = yield this.obdService.getVehReport_MonitorIconStatus();
                    this._vciResponseData.monitorData = monitorData;
                    this.logger.debug('getVehReport_MonitorIconStatus', monitorData);
                    yield this.sleep(src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_0__.SLEEP_EACH_VCI_REQUEST);
                    let milStatus = yield this.obdService.getVehReport_MIL_Status();
                    this.logger.debug('getVehReport_MIL_Status', milStatus);
                    if (milStatus && typeof milStatus !== 'string') {
                        milStatus = milStatus.MilStatus || '';
                    }
                    this._vciResponseData.milStatus = milStatus;
                    this.eventService.publish(_innova_tool_models__WEBPACK_IMPORTED_MODULE_4__.InnovaVCIEvent.SCAN_STATUS, {
                        name: 'Reading ECM & TCM DTCs...',
                        result: 'Monitor Status: ' +
                            (this._vciResponseData.monitorEcm ? 'YES' : 'NO'),
                    });
                }
                else {
                    this.eventService.publish(_innova_tool_models__WEBPACK_IMPORTED_MODULE_4__.InnovaVCIEvent.SCAN_STATUS, {
                        name: 'Reading ECM & TCM DTCs...',
                        result: 'Monitor Status: N/A',
                    });
                }
                // 05. dtc
                yield this.sleep(src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_0__.SLEEP_EACH_VCI_REQUEST);
                const dtc = yield this.obdService.getVehReport_OBD2_DTC_SID37A_BUFF();
                this.logger.debug('getVehReport_OBD2_DTC_SID37A_BUFF', dtc);
                if (dtc.length > 0) {
                    this._vciResponseData.dtcEcm = bytesToBase64(dtc[0].data);
                    this._vciResponseData.dtcTcm = bytesToBase64(dtc[1] ? dtc[1].data : '');
                    this.eventService.publish(_innova_tool_models__WEBPACK_IMPORTED_MODULE_4__.InnovaVCIEvent.SCAN_STATUS, {
                        name: 'Reading VIN...',
                        result: 'ECM & TCM DTCs: ' + (this._vciResponseData.dtcEcm ? 'YES' : 'NO'),
                    });
                }
                else {
                    this.eventService.publish(_innova_tool_models__WEBPACK_IMPORTED_MODULE_4__.InnovaVCIEvent.SCAN_STATUS, {
                        name: 'Reading VIN...',
                        result: 'ECM & TCM DTCs: N/A',
                    });
                }
                // 01. ymme
                if (!this._vciResponseData.vinProfile) {
                    yield this.sleep(src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_0__.SLEEP_EACH_VCI_REQUEST);
                    yield this.getYMME();
                }
            }
            catch (err) {
                // await this.connService.disconnectBluetoothDevices(false);
            }
            return true;
        });
    }
    scanModules(vin) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, function* () {
            console.log('scanModules ßvin: ', vin);
            this.eventService.publish(_innova_tool_models__WEBPACK_IMPORTED_MODULE_4__.InnovaVCIEvent.SCAN_STATUS, {
                name: 'Reading Supported OEM Modules...',
                result: 'VIN: ' + (this._vciResponseData.vin ? this._vciResponseData.vin : vin),
            });
            this._vciResponseData.oemModules = [];
            if (lodash__WEBPACK_IMPORTED_MODULE_6__.isEmpty(this._vciResponseData.allSupportedModules)) {
                yield this.scanAllSupportedModules();
            }
            this.logger.debug('All Supported Modules', this._vciResponseData.allSupportedModules);
            // Full Scan
            let allSupportedGroups = this._vciResponseData.allSupportedModules.map((m) => m.InnovaGroup);
            this.logger.debug('All Supported Groups', allSupportedGroups);
            if (allSupportedGroups.length > 0) {
                this.eventService.publish(_innova_tool_models__WEBPACK_IMPORTED_MODULE_4__.InnovaVCIEvent.SCAN_STATUS, {
                    name: 'Preparing to scan modules...',
                    result: 'Total Modules: ' + allSupportedGroups.length,
                });
                let supportedModules = yield this.readDtc(allSupportedGroups);
                this.logger.debug('Full network scan results', supportedModules);
                this._vciResponseData.oemModules = supportedModules.map((oemModule) => {
                    return {
                        system: oemModule.System,
                        subsystem: oemModule.SubSystem,
                        Dtcs: oemModule.Dtcs,
                        group: oemModule['InnovaGroup'],
                        modulename: oemModule.ModuleName,
                        Status: oemModule.Status,
                        Skipped: oemModule.Skipped,
                        InvalidDTC: oemModule.Status === _innova_tool_models__WEBPACK_IMPORTED_MODULE_4__.InnovaToolModuleStatus.Valid ? 0 : 1,
                    };
                });
            }
            return true;
        });
    }
    /**
     * Connect and YMME, Vin, ODO
     */
    connectAndGetVehicleSummary(readOdo = false, readSupportedModules = false) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.isConnected) {
                const isOK = yield this.initializeBT();
                if (!isOK) {
                    throw new Error('Init failed.');
                }
            }
            yield this.linkProtocols();
            // await this.sleep(SLEEP_EACH_VCI_REQUEST);
            // await this.obdService.obd2RetriveData();
            yield this.sleep(src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_0__.SLEEP_EACH_VCI_REQUEST, true);
            const { ymmeRaw, ymmeReadable } = yield this.getYMME();
            let vin = this._vciResponseData.vin;
            if (ymmeReadable && vin) {
                // Check Make
                /*
                await new Promise((resolve) => {
                  this.eventService.publish(
                    EnumAppEvent.CheckIfNeedResetIgnition,
                    ymmeReadable
                  );
                  this.disposeBag = new DisposeBag(this.eventService);
                  this.disposeBag.add(
                    EnumAppEvent.CheckIfNeedResetIgnitionDone,
                    resolve.bind(null)
                  );
                });
                this.disposeBag.unsubscribe();*/
                /* Read vehicle info (since S41): Tun off since Speed Improvement (04-01-2022) */
                // const { vehicleinfoStr } = await this.getVehicleBufferAndInfo(
                //   false,
                //   true
                // ).catch((err) => {
                //   this.logger.debug('getVehicleBufferAndInfo error', err);
                //   return {} as any;
                // });
                // if (!_.isEmpty(vehicleinfoStr)) {
                //   vehicleinfoStr['CalIDs'] = _.join(vehicleinfoStr['CalID'], ' | ');
                //   vehicleinfoStr['CVNs'] = _.join(vehicleinfoStr['CVN'], ' | ');
                //   vehicleinfoStr['Modules'] = _.join(vehicleinfoStr['Module'], ' | ');
                //   this._vciResponseData.vehicleInfoData = vehicleinfoStr;
                // }
                // Read odo
                if (readOdo) {
                    yield this.sleep(src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_0__.SLEEP_EACH_VCI_REQUEST, true);
                    yield this.readOdometer();
                }
                if (readSupportedModules) {
                    yield this.sleep(src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_0__.SLEEP_EACH_VCI_REQUEST, true);
                    yield this.scanAllSupportedModules();
                }
            }
        });
    }
    getOfmItems(pidsupport) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, function* () {
            let numPID = pidsupport.num_profile;
            let results = [];
            for (let index = 0; index < numPID; index++) {
                let itemid = pidsupport.list[index].ofm_item;
                let profile_id = pidsupport.list[index].profileid;
                const val = yield this.obdService.getofmprofileid_value(profile_id);
                const objitem = JSON.parse(_innova_vci_service_src_obdservice_service__WEBPACK_IMPORTED_MODULE_1__.Dataparser.ObjtoStringBeauty(val));
                let itemname = yield this.obdService.ofm_getitemname(itemid);
                let unit_str = objitem.unit;
                let value = objitem.value;
                results.push({
                    id: itemid,
                    name: itemname,
                    value,
                    unit: unit_str,
                });
            }
            return results;
        });
    }
    eraseDtcsOBDII() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.isConnected) {
                yield this.initializeBT();
            }
            let eraseRs = yield this.obdService.OBD2_erase_Dtcs();
            if (this.linkedProtocol) {
                this.linkedProtocol.isFullLink = false; // Force refresh data after erase
            }
            this.logger.debug('eraseDtcsOBDII result', eraseRs);
            return eraseRs ? eraseRs.result === 'OK' : false;
        });
    }
    eraseDTCs(oemModule, clearCache = true) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.isConnected) {
                yield this.initializeBT();
            }
            let eraseRs = yield this.obdService.nwscan_eraseSystem({
                system: oemModule.System,
                subSystem: oemModule.SubSystem,
            });
            if (this.linkedProtocol) {
                this.linkedProtocol.isFullLink = false; // Force refresh data after erase
            }
            this.logger.debug('eraseDtcs result', oemModule, eraseRs);
            // if (clearCache) {
            //   this.currentVin && this.dbService.deleteCacheData(this.currentVin);
            // }
            return eraseRs ? eraseRs['Erase_Dtc'] === 'OK' : false;
        });
    }
    eraseDTCsByGroup(innovaGroupIds, filter) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, function* () {
            // this.obdService.nwscan_eraseSystem()
            if (!Array.isArray(innovaGroupIds)) {
                innovaGroupIds = [innovaGroupIds];
            }
            this.logger.debug('eraseDtc', innovaGroupIds);
            if (!this.isConnected) {
                yield this.initializeBT();
            }
            let oemModules = lodash__WEBPACK_IMPORTED_MODULE_6__.get(this.vciResponseData, 'allSupportedModules');
            if (lodash__WEBPACK_IMPORTED_MODULE_6__.isEmpty(oemModules)) {
                return true;
            }
            let isErased = true, idx = 0;
            oemModules = oemModules.filter((m) => {
                let isValid = [_innova_tool_models__WEBPACK_IMPORTED_MODULE_4__.InnovaToolModuleStatus.Valid, undefined].includes(m.Status);
                let isModuleInGroup = innovaGroupIds.includes(m.InnovaGroup);
                if (isValid && isModuleInGroup) {
                    if (filter) {
                        return m.System == filter.System && m.SubSystem == filter.SubSystem;
                    }
                    return true;
                }
                return false;
            });
            while (idx < oemModules.length) {
                isErased = yield this.eraseDTCs(oemModules[idx++], false);
                if (!isErased) {
                    break;
                }
                yield this.sleep(src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_0__.SLEEP_EACH_VCI_REQUEST);
            }
            // this.currentVin && this.dbService.deleteCacheData(this.currentVin);
            return isErased;
        });
    }
    readPrimaryDtc() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.linkedProtocol) {
                yield this.linkProtocols();
            }
            yield this.obdService.obd2QuickRetriveData(null, true);
            const freezeFrameDtc = yield this.obdService.getVehReport_FreezeFrameDTCInfo();
            if (lodash__WEBPACK_IMPORTED_MODULE_6__.isEmpty(freezeFrameDtc)) {
                return [];
            }
            else {
                return [
                    {
                        InvalidDTC: 0,
                        Dtcs: [freezeFrameDtc],
                    },
                ];
            }
        });
    }
    readDtcsOBDII() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.linkedProtocol) {
                yield this.linkProtocols();
            }
            const dtcInfoData = yield this.obdService.getVehReport_OBD2_DTC_Info();
            if (dtcInfoData.length) {
                let moduleIndex = 0;
                do {
                    let moduleDtcs = dtcInfoData[moduleIndex].Dtcs;
                    if (moduleDtcs) {
                        let index = 0;
                        do {
                            yield this.sleep(src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_0__.SLEEP_EACH_VCI_REQUEST);
                            const dtcDef = yield this.obdService
                                .getVehReport_OBD2_DTC_Def(moduleIndex, index)
                                .catch(this.logger.error);
                            moduleDtcs[index] = dtcDef;
                        } while (++index < moduleDtcs.length);
                    }
                } while (++moduleIndex < dtcInfoData.length);
                return dtcInfoData;
            }
            return null;
        });
    }
    readDtc(innovaGroupIds, filter) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, function* () {
            // this.obdService.nwscan_eraseSystem()
            if (!this.isConnected) {
                return null;
            }
            let oemModules = this.vciResponseData.allSupportedModules;
            let total = oemModules.length;
            if (Array.isArray(oemModules)) {
                oemModules = oemModules.filter((m) => !!m.ModuleName);
            }
            if (filter) {
                oemModules = oemModules.filter((m) => m.System === filter.System && m.SubSystem === filter.SubSystem);
            }
            let res = [], totalFiltered = oemModules.length, index = 0;
            if (!Array.isArray(innovaGroupIds)) {
                innovaGroupIds = [innovaGroupIds];
            }
            let result = '';
            while (oemModules.length) {
                const oemModule = oemModules.shift();
                if (innovaGroupIds.includes(oemModule.InnovaGroup)) {
                    this.logger.debug(`Start reading module [${++index}/${totalFiltered}/${total}] DTCs`, oemModule);
                    this.eventService.publish(_innova_tool_models__WEBPACK_IMPORTED_MODULE_4__.InnovaVCIEvent.SCAN_STATUS, {
                        name: '(' +
                            index +
                            '/' +
                            total +
                            '): ' +
                            oemModule.ModuleName +
                            ' - Scanning...',
                        result: result,
                    });
                    if (!this.linkedProtocol) {
                        this.logger.debug('Try linkprotocol before readDtc');
                        yield this.linkProtocols();
                    }
                    yield this.sleep(src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_0__.SLEEP_EACH_VCI_REQUEST);
                    let oemItem = yield this.obdService.nwscan_LinkSystem({
                        system: oemModule.System,
                        subSystem: oemModule.SubSystem,
                    });
                    this.logger.debug('nwscan_LinkSystem details', oemItem, this.linkedProtocol);
                    if (oemItem) {
                        let _oemModule = oemModule;
                        if (lodash__WEBPACK_IMPORTED_MODULE_6__.has(oemItem, 'data')) {
                            let dtcs = lodash__WEBPACK_IMPORTED_MODULE_6__.get(oemItem, 'data.Dtcs', []);
                            if (dtcs.length) {
                                let dtcId = 0;
                                while (dtcId < dtcs.length) {
                                    yield this.sleep(src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_0__.SLEEP_EACH_VCI_REQUEST);
                                    let dtcinfo = yield this.obdService.nwscan_getdtcdef({
                                        system: oemModule.System,
                                        subSystem: oemModule.SubSystem,
                                        id: dtcId,
                                    });
                                    dtcinfo['def'] && (dtcs[dtcId]['definition'] = dtcinfo['def']);
                                    dtcId++;
                                }
                                result = _oemModule.ModuleName + ': ' + dtcs.length + ' DTCs';
                            }
                            else {
                                result = _oemModule.ModuleName + ': Good';
                            }
                            _oemModule.Dtcs = dtcs;
                            _oemModule.Skipped = false;
                            if (oemItem['data']['IsInvalidDTC'] === 1) {
                                _oemModule.Status = _innova_tool_models__WEBPACK_IMPORTED_MODULE_4__.InnovaToolModuleStatus.Available;
                            }
                            else {
                                _oemModule.Status = _innova_tool_models__WEBPACK_IMPORTED_MODULE_4__.InnovaToolModuleStatus.Valid;
                            }
                        }
                        else {
                            _oemModule.Dtcs = [];
                            _oemModule.Status =
                                lodash__WEBPACK_IMPORTED_MODULE_6__.get(oemItem, 'error.Status') ===
                                    _innova_tool_models__WEBPACK_IMPORTED_MODULE_4__.InnovaToolModuleStatus.NotSupported
                                    ? _innova_tool_models__WEBPACK_IMPORTED_MODULE_4__.InnovaToolModuleStatus.NotSupported
                                    : _innova_tool_models__WEBPACK_IMPORTED_MODULE_4__.InnovaToolModuleStatus.Unknown;
                            result = _oemModule.ModuleName + ': Unresponsive';
                            _oemModule.Skipped = true;
                        }
                        this.eventService.publish(_innova_tool_models__WEBPACK_IMPORTED_MODULE_4__.InnovaVCIEvent.SCAN_STATUS, {
                            name: index < oemModules.length
                                ? 'Finish! Preparing to scan next module...'
                                : '',
                            result: result,
                        });
                        res.push(_oemModule);
                    }
                    else {
                        let _oemModule = oemModule;
                        _oemModule.Dtcs = null;
                        _oemModule.Status = _innova_tool_models__WEBPACK_IMPORTED_MODULE_4__.InnovaToolModuleStatus.Unknown;
                        _oemModule.Skipped = true;
                        this.eventService.publish(_innova_tool_models__WEBPACK_IMPORTED_MODULE_4__.InnovaVCIEvent.SCAN_STATUS, {
                            name: index < oemModules.length
                                ? 'Finish! Preparing to scan next module...'
                                : '',
                            result: result,
                        });
                        res.push(_oemModule);
                    }
                }
            }
            return res;
        });
    }
    obdTest(mode) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.isConnected) {
                const isOK = yield this.initializeBT();
                if (!isOK) {
                    throw new Error('Init failed.');
                }
            }
            let result;
            switch (mode) {
                case 5:
                    yield this.obdService.linkVehReport_OBD2_SPECIALTEST_SID5();
                    result =
                        yield this.obdService.getVehReport_OBD2_SPECIALTEST_SID5_BUFF();
                    return JSON.parse(_innova_vci_service_src_obdservice_service__WEBPACK_IMPORTED_MODULE_1__.Dataparser.bytesToString(result[0].data));
                case 6:
                    yield this.obdService.linkVehReport_OBD2_SPECIALTEST_SID6();
                    result =
                        yield this.obdService.getVehReport_OBD2_SPECIALTEST_SID6_BUFF();
                    return result[0].data || result;
                case 8:
                    result = yield this.obdService.linkVehReport_OBD2_SPECIALTEST_SID8();
                    // result = await this.obdService.getVehReport_OBD2_SPECIALTEST_SID8_BUFF();
                    return result;
                default:
                    throw new Error(`This mode test ${mode} is unsupported.`);
            }
        });
    }
    runToolFeature(feature) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.linkedProtocol) {
                yield this.linkProtocols();
            }
            yield this.sleep(src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_0__.SLEEP_TIMEOUT);
            switch (feature) {
                case _innova_tool_models__WEBPACK_IMPORTED_MODULE_4__.InnovaToolFeatures.SpecialTest:
                    return this.obdService.spectest_enter_proc();
                case _innova_tool_models__WEBPACK_IMPORTED_MODULE_4__.InnovaToolFeatures.ActuatorTest:
                    return this.obdService.actuatortest_enter_proc();
                case _innova_tool_models__WEBPACK_IMPORTED_MODULE_4__.InnovaToolFeatures.OilReset:
                    return this.obdService.oil_reset_enter_proc();
                case _innova_tool_models__WEBPACK_IMPORTED_MODULE_4__.InnovaToolFeatures.BatteryReset:
                    return this.obdService.battery_reset_enter_proc();
                case _innova_tool_models__WEBPACK_IMPORTED_MODULE_4__.InnovaToolFeatures.EPB:
                    return this.obdService.epb_enter_proc();
                case _innova_tool_models__WEBPACK_IMPORTED_MODULE_4__.InnovaToolFeatures.SASCalib:
                    return this.obdService.sas_enter_proc();
                case _innova_tool_models__WEBPACK_IMPORTED_MODULE_4__.InnovaToolFeatures.ABS_Bleeding:
                    return this.obdService.ABS_bleeding_enter_proc();
                case _innova_tool_models__WEBPACK_IMPORTED_MODULE_4__.InnovaToolFeatures.Battery_Health_Check:
                    return this.obdService.battery_health_check_enter_proc();
                case _innova_tool_models__WEBPACK_IMPORTED_MODULE_4__.InnovaToolFeatures.DPF_Reset:
                    return this.obdService.dpf_enter_proc();
                case _innova_tool_models__WEBPACK_IMPORTED_MODULE_4__.InnovaToolFeatures.TPMS_Reset:
                    return this.obdService.tpms_reset_enter_proc();
                case _innova_tool_models__WEBPACK_IMPORTED_MODULE_4__.InnovaToolFeatures.Service_Reset:
                    return this.obdService.service_reset_proc_enter();
            }
        });
    }
    initToolScreenGUI() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, function* () {
            if (this.isScreenGuiInitialized)
                return true;
            this.logger.debug('initToolScreenGUI OK');
            if (!this.isSetVciLocale) {
                this.isSetVciLocale = yield this.setVciLocale();
            }
            this._screenEvents = new rxjs__WEBPACK_IMPORTED_MODULE_21__.Subject();
            this.eventService.subscribe(_innova_tool_models__WEBPACK_IMPORTED_MODULE_4__.InnovaVCIEvent.USER_GUI_INFO, (data) => {
                if (!data)
                    return;
                this._screenEvents.next(new InnovaScreenEventResp(data));
            });
            this.isScreenGuiInitialized = true;
            let isOk = yield this.sleep(200).catch(() => false);
            return isOk;
        });
    }
    get screenAction() {
        return this._screenActions;
    }
    get screenEvents() {
        return this._screenEvents;
    }
    getYMME(readableData = true) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, function* () {
            // await this.linkProtocols();
            let ymmeRaw, ymmeReadable;
            ymmeRaw = yield this.obdService.getVehReport_YMME_PROFILE();
            this.logger.debug('YMME Profile', ymmeRaw);
            if (ymmeRaw.length === 0) {
                throw new Error('get ymme failed: ' + ymmeRaw[0].error
                    ? ymmeRaw[0].error.message
                    : 0);
            }
            let isNoYmme = isEmptyResponse(ymmeRaw[0].data);
            if (isNoYmme) {
                this._vciResponseData.vin = null;
            }
            else {
                this._vciResponseData.vinProfile = bytesToBase64(ymmeRaw[0].data);
                let vin = (0,_innova_vci_service_src_utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.bytesToString)(ymmeRaw[0].data).replace(/[^0-9a-zA-Z]/g, '');
                if (vin && vin.length >= 17) {
                    this._vciResponseData.vin = vin.substr(0, 17);
                }
                // readable data
                if (readableData) {
                    const ymmeInfo = (yield this.obdService
                        .ymme_get(254)
                        .catch((err) => null));
                    this.logger.debug('ymme_get 254', ymmeInfo);
                    ymmeReadable = yield this.obdService.getVehReport_YMME_String();
                    this.logger.debug('getVehReport_YMME_String', ymmeReadable);
                    if (ymmeReadable && ymmeInfo && ymmeInfo['vehinfo']) {
                        /*
                         * Update 'year' if not matched (FW: 22)
                         * https://iectech.atlassian.net/browse/ITRD-207
                         */
                        const vehinfo = ymmeInfo['vehinfo'] || '';
                        const year = vehinfo.substr(0, vehinfo.indexOf(' '));
                        if (ymmeReadable.year !== year) {
                            ymmeReadable.year = year;
                        }
                    }
                    this.setYmme(ymmeReadable);
                }
            }
            return { ymmeRaw, ymmeReadable };
        });
    }
    getVehicleBufferAndInfo(readBuffer = true, readInfo = true) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, function* () {
            let vehicleinfoBuffer, vehicleinfoStr;
            if (!this.linkedProtocol) {
                yield this.linkProtocols();
            }
            if (readBuffer) {
                vehicleinfoBuffer =
                    yield this.obdService.getVehReport_OBD2_VEHINFO_SID9_BUFF();
                this.logger.debug('getVehReport_OBD2_VEHINFO_SID9_BUFF', vehicleinfoBuffer);
                if (vehicleinfoBuffer.length === 0) {
                    throw new Error('get vehicleinfo failed: ' + vehicleinfoBuffer[0].error
                        ? vehicleinfoBuffer[0].error.message
                        : 0);
                }
                // It seems error if vehicleInfo empty
                if (isEmptyResponse(vehicleinfoBuffer[0].data)) {
                    throw new Error('getVehReport_OBD2_VEHINFO_SID9_BUFF response empty');
                }
                this._vciResponseData.vehicleInfoEcm = bytesToBase64(vehicleinfoBuffer[0].data);
                this._vciResponseData.vehicleInfoTcm = bytesToBase64(vehicleinfoBuffer[1] ? vehicleinfoBuffer[1].data : '');
            }
            if (readInfo) {
                vehicleinfoStr =
                    yield this.obdService.getVehReport_OBD2_VehicleInfo_SID9();
                this.logger.debug('getVehReport_OBD2_VehicleInfo_SID9', vehicleinfoStr);
                if (!lodash__WEBPACK_IMPORTED_MODULE_6__.isEmpty(vehicleinfoStr)) {
                    this._vciResponseData.vehicleInfoData = vehicleinfoStr;
                }
            }
            return { vehicleinfoStr, vehicleinfoBuffer };
        });
    }
    readOdometer() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.isSetVciLocale) {
                yield this.setVciLocale({ setUnit: true, setLang: false });
            }
            let odometer = yield this.obdService.getodometer_pidsupport();
            if (odometer) {
                let ofmitem = yield this.getOfmItems(odometer);
                if (ofmitem.length) {
                    let odo = parseInt(ofmitem.shift().value, 10);
                    // Onlyu set Mileage if it's valid
                    let unitId = this.vciResponseData.unitId, isInvalid;
                    if (unitId === _innova_vci_service_src_obd_vcistd__WEBPACK_IMPORTED_MODULE_5__.UNIT_ID.Standard) {
                        isInvalid = (0,_app_validators__WEBPACK_IMPORTED_MODULE_10__.ValidateMileageKm)({ value: odo });
                    }
                    else {
                        isInvalid = (0,_app_validators__WEBPACK_IMPORTED_MODULE_10__.ValidateMileage)({ value: odo });
                    }
                    if (isInvalid) {
                        this.logger.debug(`Invalid mileage value: ${odo}, skip set to vciResponse`);
                    }
                    else {
                        this._vciResponseData.mileage = odo;
                    }
                    return odo;
                }
            }
            return NaN;
        });
    }
    //#region Live Data
    getSupportedLiveDataPIDs(innovagroup) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.linkedProtocol) {
                yield this.linkProtocols();
            }
            if (!this.isSetVciLocale) {
                this.isSetVciLocale = yield this.setVciLocale();
            }
            let getlistfunc;
            switch (innovagroup) {
                case _innova_tool_models__WEBPACK_IMPORTED_MODULE_4__.InnovaToolLiveDataGroup.ABS:
                    getlistfunc = this.obdService.ld_abs_get_itemlist;
                    break;
                case _innova_tool_models__WEBPACK_IMPORTED_MODULE_4__.InnovaToolLiveDataGroup.SRS:
                    getlistfunc = this.obdService.ld_srs_get_itemlist;
                    break;
                case _innova_tool_models__WEBPACK_IMPORTED_MODULE_4__.InnovaToolLiveDataGroup.ECM:
                case _innova_tool_models__WEBPACK_IMPORTED_MODULE_4__.InnovaToolLiveDataGroup.PCM:
                    getlistfunc = this.obdService.ld_ecm_get_itemlist;
                    break;
                default:
                    getlistfunc = this.obdService.ld_obd2_get_itemlist;
                    break;
            }
            const data = yield getlistfunc.call(this.obdService);
            this.logger.debug('getSupportedLiveDataPIDs data ', data);
            if (data) {
                let pids = data['ListItem'] || [];
                let res = [];
                while (pids.length) {
                    let pidItemInfo = pids.shift();
                    let pId = Number.parseInt(pidItemInfo[0]);
                    let pIdHex = '0x' + ('00' + pId.toString(16).toUpperCase()).slice(-2);
                    let pidItem = {
                        id: pId,
                        name: pidItemInfo[1],
                        desc: `[${pIdHex}] ${pidItemInfo[1]}`,
                        max: parseFloat(pidItemInfo[2]),
                        min: parseFloat(pidItemInfo[3]),
                        unit: pidItemInfo[4],
                        range: 'N/A',
                    };
                    if (!(isNaN(pidItem.min) || isNaN(pidItem.max))) {
                        pidItem.range = `${pidItem.min} to ${pidItem.max}`;
                    }
                    // let iteminfo = await getinteminfofunc.call(this.obdService, pidItem.id).catch(() => null);
                    // if (iteminfo) {
                    //   pidItem = {
                    //     ...pidItem, ...{
                    //       min: parseInt(iteminfo['MinValue']),
                    //       max: parseInt(iteminfo['MaxValue']),
                    //       unit: iteminfo['Unit']
                    //     }
                    //   };
                    // } /** Since v1.6, tool already responses iteminfo in getlist function */
                    res.push(pidItem);
                }
                this.logger.debug('getSupportedLiveDataPIDs res ', res);
                return res;
            }
            return null;
        });
    }
    getLiveDataPIDsValue(pids, innovagroup) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, function* () {
            const listPids = Array.from(pids || []);
            let getitemvalfunc;
            switch (innovagroup) {
                case _innova_tool_models__WEBPACK_IMPORTED_MODULE_4__.InnovaToolLiveDataGroup.ABS:
                    getitemvalfunc = this.obdService.ld_abs_get_itemval;
                    break;
                case _innova_tool_models__WEBPACK_IMPORTED_MODULE_4__.InnovaToolLiveDataGroup.SRS:
                    getitemvalfunc = this.obdService.ld_srs_get_itemval;
                    break;
                case _innova_tool_models__WEBPACK_IMPORTED_MODULE_4__.InnovaToolLiveDataGroup.ECM:
                case _innova_tool_models__WEBPACK_IMPORTED_MODULE_4__.InnovaToolLiveDataGroup.PCM:
                    getitemvalfunc = this.obdService.ld_ecm_get_itemval;
                    break;
                default:
                    getitemvalfunc = this.obdService.ld_obd2_get_itemval;
                    break;
            }
            let pidsValues = [];
            while (listPids.length) {
                let pid = listPids.shift();
                const data = yield getitemvalfunc.call(this.obdService, pid);
                if (data && data['ListValue']) {
                    const val = data['ListValue'];
                    let value = val[1] || '', unit = '', regex = /(.*) \((.*)\)/i, matches = value.match(regex);
                    // this.logger.info('valListVal', data);
                    if (matches) {
                        value = matches[1];
                        unit = matches[2];
                    }
                    pidsValues.push({
                        id: val[0],
                        value,
                        unit,
                    });
                    this.logger.info('getLiveDataPIDsValue data', data, pidsValues);
                }
                yield this.helper.sleep(pid);
            }
            return pidsValues;
        });
    }
    getLiveDataPIDsValueByRange(start, end, innovagroup) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, function* () {
            let getitemvalfunc;
            switch (innovagroup) {
                case _innova_tool_models__WEBPACK_IMPORTED_MODULE_4__.InnovaToolLiveDataGroup.ABS:
                    getitemvalfunc = this.obdService.ld_abs_get_ListItem_Val;
                    break;
                case _innova_tool_models__WEBPACK_IMPORTED_MODULE_4__.InnovaToolLiveDataGroup.SRS:
                    getitemvalfunc = this.obdService.ld_srs_get_ListItem_Val;
                    break;
                case _innova_tool_models__WEBPACK_IMPORTED_MODULE_4__.InnovaToolLiveDataGroup.ECM:
                case _innova_tool_models__WEBPACK_IMPORTED_MODULE_4__.InnovaToolLiveDataGroup.PCM:
                    getitemvalfunc = this.obdService.ld_ecm_get_ListItem_Val;
                    break;
                default:
                    getitemvalfunc = this.obdService.ld_obd2_get_ListItem_Val;
                    break;
            }
            let data = yield getitemvalfunc.call(this.obdService, start, end);
            this.logger.info('getLiveDataPIDsValueByRange data', data);
            // data = {"Group":2,"ListValue":[[154,"1.8 (mph)"],[156,"28.7 (mph)"],[158,"114.9 (mph)"],[160,"217.3 (mph)"],[147,"Not Supported"]]};
            if (data && data['ListValue']) {
                return data['ListValue'].map((data) => {
                    let value = data[1] || '', unit = '', regex = /(.*) \((.*)\)/i, matches = value.match(regex);
                    if (matches) {
                        value = matches[1];
                        unit = matches[2];
                    }
                    return {
                        id: data[0],
                        value,
                        unit,
                    };
                });
            }
            return null;
        });
    }
    //#endregion Live Data
    get vciResponseData() {
        let res = {};
        if (!lodash__WEBPACK_IMPORTED_MODULE_6__.isEmpty(this._vciResponseData)) {
            res = lodash__WEBPACK_IMPORTED_MODULE_6__.cloneDeep(this._vciResponseData);
        }
        return res;
    }
    get isEmptyVciData() {
        return lodash__WEBPACK_IMPORTED_MODULE_6__.isEmpty(this._vciResponseData);
    }
    setVciResponseData(data) {
        this._vciResponseData = data;
    }
    resetVciReponseData() {
        this.setVciResponseData({});
    }
    /**
     * set vin from user input for box-novin
     * @param vin
     */
    setVin(vin, force = false) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, function* () {
            if (force || (this._vciResponseData && !this._vciResponseData.vin)) {
                this._vciResponseData.vin = vin;
                if (vin === '') {
                    // In case user select vehicle
                    return true;
                }
                let isOK = yield this.obdService.setVINString(vin);
                yield this.sleep(2000);
                yield this.getYMME();
                return isOK;
            }
            else {
                this.logger.debug('Cannot override VIN read from box.', this._vciResponseData.vin);
                return false;
            }
        });
    }
    get currentVin() {
        return this._vciResponseData ? this._vciResponseData.vin : '';
    }
    setYmme(ymme) {
        this._vciResponseData.ymme = {
            make: ymme.make || 'N/A',
            year: ymme.year || 'N/A',
            model: ymme.model || 'N/A',
            engine: ymme.engine || 'N/A',
        };
    }
    setMileage(mileage) {
        this._vciResponseData.mileage = mileage;
    }
    setSupportedModules(modules) {
        if (lodash__WEBPACK_IMPORTED_MODULE_6__.isArray(modules)) {
            lodash__WEBPACK_IMPORTED_MODULE_6__.set(this._vciResponseData, 'allSupportedModules', modules);
        }
    }
    getSupportedModules() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, function* () {
            let modules = lodash__WEBPACK_IMPORTED_MODULE_6__.get(this.vciResponseData, 'allSupportedModules', []);
            if (!modules) {
                modules = yield this.scanAllSupportedModules();
            }
            return modules;
        });
    }
    removeSupportedModules() {
        lodash__WEBPACK_IMPORTED_MODULE_6__.unset(this._vciResponseData, 'allSupportedModules');
    }
    scanAllSupportedModules(useCached = false, retry = 1) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, function* () {
            // await this.dbService.deleteCacheData();
            // let loadSupportedModules;
            // if (this.dbService.dbState) {
            //   this.dbService.fetchCacheData().subscribe((caches) => {
            //     if (caches) loadSupportedModules = caches;
            //   });
            // }
            if (!this.isSetVciLocale) {
                this.isSetVciLocale = yield this.setVciLocale();
            }
            let oemModules = yield this.obdService
                .nwscan_getSupportSystem()
                .catch(this.logger.debug.bind(null, 'nwscan_getSupportSystem failed'));
            if (oemModules && lodash__WEBPACK_IMPORTED_MODULE_6__.isArray(oemModules['data'])) {
                this._vciResponseData.allSupportedModules = oemModules['data'].filter((m) => m.groupName);
            }
            else if (retry > 0) {
                yield this.sleep(src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_0__.SLEEP_TIMEOUT * 5);
                this.logger.debug(`Retry run nwscan_getSupportSystem`);
                return this.scanAllSupportedModules(useCached, retry - 1);
            }
            else {
                this._vciResponseData.allSupportedModules = [];
            }
            return this._vciResponseData.allSupportedModules;
        });
    }
    /** YMME */
    ymme_init() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, function* () {
            let resp = yield this.obdService.ymme_init();
            return resp;
        });
    }
    ymme_get(selection_id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, function* () {
            let resp = yield this.obdService.ymme_get(selection_id);
            return resp;
        });
    }
    ymme_confirm() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, function* () {
            let resp = yield this.obdService.ymme_confirm();
            return resp;
        });
    }
    ymme_back() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, function* () {
            let resp = yield this.obdService.ymme_back();
            return resp;
        });
    }
    enableVciLog(isEnabled) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.isConnected) {
                yield this.initializeBT();
            }
            this._isVciLog = isEnabled;
            this.stoCheckConnection = -1;
            let rs = isEnabled
                ? yield this.obdService.StartLog()
                : yield this.obdService.StopLog();
            setTimeout(() => {
                this.stoCheckConnection = 0;
            }, src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_0__.TIMEOUT_INIT_CONNECTION / 2);
            return rs;
        });
    }
    readVciLog() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, function* () {
            let logMessages = '';
            this.logger.debug('Start readVciLog...');
            this.stoCheckConnection = -1;
            try {
                if (this._isVciLog) {
                    yield this.obdService.StopLog();
                    this._isVciLog = false;
                    yield this.sleep(src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_0__.SLEEP_TIMEOUT, false);
                }
                const logPayload = yield this.obdService.GetLog();
                if (logPayload) {
                    logMessages = _innova_vci_service_src_obdservice_service__WEBPACK_IMPORTED_MODULE_1__.Dataparser.getStringOfObj(logPayload);
                    // for (let x of logPayload) {
                    //   if (x.payload) {
                    //     logMessages += Dataparser.bytesToString(x.payload);
                    //   }
                    // }
                }
            }
            catch (err) {
                this.logger.debug('readVciLog err', err);
            }
            setTimeout(() => {
                this.stoCheckConnection = 0;
            }, src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_0__.TIMEOUT_INIT_CONNECTION / 2);
            return logMessages;
        });
    }
    /** End VCI Data Log */
    handleResponse(response) {
        try {
            let { tag, data } = response;
            if ((this.supportLogTags || []).includes(tag)) {
                // this.logger.debug(`[${new Date().toISOString()}] ${tag} ${data}`);
                if (!src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_0__.AppConfig.IS_ENABLED_LOGGER) {
                    tag = `[${new Date().toISOString()}] ${tag}`;
                }
                this.logger.debug(`${tag} ${data}`);
            }
            // else {
            //   throw new Error(`Tag is not suppported: ${tag}`);
            // }
        }
        catch (e) {
            this.logger.error('Cannot handle this repsonse', response, e);
        }
    }
}
InnovaVCIService.ɵfac = function InnovaVCIService_Factory(t) { return new (t || InnovaVCIService)(_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵinject"](_innova_vci_service_src_obdservice_service__WEBPACK_IMPORTED_MODULE_1__.OBDService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵinject"](_events_service__WEBPACK_IMPORTED_MODULE_15__.Events), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵinject"](_helper_service__WEBPACK_IMPORTED_MODULE_16__.HelperService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵinject"](_ionic_native_ble_ngx__WEBPACK_IMPORTED_MODULE_17__.BLE), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵinject"](_innova_vci_service_src_connectivity_connectivity_service__WEBPACK_IMPORTED_MODULE_18__.ConnectivityService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵinject"](_logger__WEBPACK_IMPORTED_MODULE_19__.AppLoggerService)); };
InnovaVCIService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineInjectable"]({ token: InnovaVCIService, factory: InnovaVCIService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=default-src_app_services_innova-vci_service_ts-es2015.js.map