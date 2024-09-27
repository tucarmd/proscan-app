"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var enums_1 = require("../standard/enums");
var util_1 = require("util");
var DataParser = require("./../utilities/dataParser");
var NotifyService = /** @class */ (function () {
    function NotifyService() {
        this.Event = new core_1.EventEmitter();
    }
    NotifyService.prototype.log = function (t) {
        this.Event.emit({
            tag: enums_1.EnumNotify.NOTIFY_DEBUG_LOG,
            data: t
        });
    };
    NotifyService.prototype.logComTx = function (t) {
        if (util_1.isArray(t)) {
            t = DataParser.bytesToHexString(t);
        }
        this.Event.emit({
            tag: enums_1.EnumNotify.NOTIFY_DEBUG_LOG_COM_TX,
            data: 'TX: ' + t
        });
    };
    NotifyService.prototype.logComRx = function (t) {
        if (util_1.isArray(t)) {
            t = DataParser.bytesToHexString(t);
        }
        this.Event.emit({
            tag: enums_1.EnumNotify.NOTIFY_DEBUG_LOG_COM_RX,
            data: 'RX: ' + t
        });
    };
    NotifyService.prototype.notify = function (t) {
        this.Event.emit(t);
    };
    NotifyService.prototype.notifyResponse = function (data) {
        this.notify({
            tag: enums_1.EnumNotify.NOTIFY_VCI_DATA_RESPONSE,
            data: data
        });
    };
    NotifyService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], NotifyService);
    return NotifyService;
}());
exports.NotifyService = NotifyService;
