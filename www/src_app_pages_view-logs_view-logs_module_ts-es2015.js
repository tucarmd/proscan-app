"use strict";
(self["webpackChunkcom_carmd_proscan2"] = self["webpackChunkcom_carmd_proscan2"] || []).push([["src_app_pages_view-logs_view-logs_module_ts"],{

/***/ 38790:
/*!******************************************!*\
  !*** ./src/app/bases/base-controller.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseController": function() { return /* binding */ BaseController; }
/* harmony export */ });
/* harmony import */ var _services_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/logger */ 88737);
/* harmony import */ var _modules_service_injector_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/service-injector.module */ 34973);
/* harmony import */ var _services_state_app_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/state/app.state */ 12607);



class BaseController {
    constructor(name) {
        this.serviceInjector = _modules_service_injector_module__WEBPACK_IMPORTED_MODULE_1__.ServiceInjector;
        this.name = name; // || this.constructor?.name;
        const appLoggerService = _modules_service_injector_module__WEBPACK_IMPORTED_MODULE_1__.ServiceInjector.get(_services_logger__WEBPACK_IMPORTED_MODULE_0__.AppLoggerService);
        this.logger = appLoggerService === null || appLoggerService === void 0 ? void 0 : appLoggerService.getLogger(this.name);
        this.logger.debug('Enter');
        this.isAndroid = _services_state_app_state__WEBPACK_IMPORTED_MODULE_2__.AppState.isOnAndroid;
    }
}


/***/ }),

/***/ 11820:
/*!*************************************************************!*\
  !*** ./src/app/pages/view-logs/view-logs-routing.module.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewLogsPageRoutingModule": function() { return /* binding */ ViewLogsPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _view_logs_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-logs.page */ 79705);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);




const routes = [
    {
        path: '',
        component: _view_logs_page__WEBPACK_IMPORTED_MODULE_0__.ViewLogsPage
    }
];
class ViewLogsPageRoutingModule {
}
ViewLogsPageRoutingModule.ɵfac = function ViewLogsPageRoutingModule_Factory(t) { return new (t || ViewLogsPageRoutingModule)(); };
ViewLogsPageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ViewLogsPageRoutingModule });
ViewLogsPageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ViewLogsPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 44674:
/*!*****************************************************!*\
  !*** ./src/app/pages/view-logs/view-logs.module.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewLogsPageModule": function() { return /* binding */ ViewLogsPageModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 81864);
/* harmony import */ var _view_logs_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-logs-routing.module */ 11820);
/* harmony import */ var _view_logs_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-logs.page */ 79705);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);






class ViewLogsPageModule {
}
ViewLogsPageModule.ɵfac = function ViewLogsPageModule_Factory(t) { return new (t || ViewLogsPageModule)(); };
ViewLogsPageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ViewLogsPageModule });
ViewLogsPageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _view_logs_routing_module__WEBPACK_IMPORTED_MODULE_0__.ViewLogsPageRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ViewLogsPageModule, { declarations: [_view_logs_page__WEBPACK_IMPORTED_MODULE_1__.ViewLogsPage], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
        _view_logs_routing_module__WEBPACK_IMPORTED_MODULE_0__.ViewLogsPageRoutingModule] }); })();


/***/ }),

/***/ 79705:
/*!***************************************************!*\
  !*** ./src/app/pages/view-logs/view-logs.page.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewLogsPage": function() { return /* binding */ ViewLogsPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/configs/app.config */ 66626);
/* harmony import */ var src_app_bases_base_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/bases/base-controller */ 38790);
/* harmony import */ var src_app_configs_logger_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/configs/logger.config */ 40029);
/* harmony import */ var src_app_services_state_app_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/state/app.state */ 12607);
/* harmony import */ var src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app-routing.module */ 90158);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 81864);
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/file/ngx */ 18659);
/* harmony import */ var src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/helper.service */ 22486);
/* harmony import */ var _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/email-composer/ngx */ 36543);
/* harmony import */ var src_app_services_logger__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/logger */ 88737);
/* harmony import */ var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/device/ngx */ 96265);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 54364);














function ViewLogsPage_ion_toolbar_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-toolbar", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "ion-buttons", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "ion-button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ViewLogsPage_ion_toolbar_1_Template_ion_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r3.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "ion-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "ion-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, "View Logs");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "ion-buttons", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "ion-button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ViewLogsPage_ion_toolbar_1_Template_ion_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r5.showDownloadPopup(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](8, "ion-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "ion-button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ViewLogsPage_ion_toolbar_1_Template_ion_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r4); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r6.clear(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](10, "ion-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function ViewLogsPage_ion_toolbar_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-toolbar", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "ion-buttons", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "ion-button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ViewLogsPage_ion_toolbar_2_Template_ion_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r7.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "ion-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "ion-title", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, "View Logs");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "ion-buttons", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "ion-button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ViewLogsPage_ion_toolbar_2_Template_ion_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r9.showDownloadPopup(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](8, "ion-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "ion-button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ViewLogsPage_ion_toolbar_2_Template_ion_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r8); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r10.clear(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](10, "ion-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function ViewLogsPage_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "div", 15);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("innerHtml", ctx_r2.logs, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeHtml"]);
} }
class ViewLogsPage extends src_app_bases_base_controller__WEBPACK_IMPORTED_MODULE_1__.BaseController {
    constructor(navCtrl, navParams, file, helper, emailComposer, appLoggerService, device) {
        super('ViewLogsPage');
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.file = file;
        this.helper = helper;
        this.emailComposer = emailComposer;
        this.appLoggerService = appLoggerService;
        this.device = device;
    }
    ngOnInit() { }
    ionViewWillEnter() {
    }
    ionViewDidEnter() {
        this.downloadLink = null;
        if (src_app_services_state_app_state__WEBPACK_IMPORTED_MODULE_3__.AppState.isOnDevice) {
            let logs = this.appLoggerService
                .getLogMessages()
                .filter((e) => e.logger === src_app_configs_logger_config__WEBPACK_IMPORTED_MODULE_2__.LoggerConfig.bundleId
            //e.timeStamp > CheckUpdateViewController.#startLogTime
            )
                .map((e) => [
                new Date(e.timeStamp).toISOString(),
                e.level,
                e.methodName,
                e.message,
            ].join(' '))
                .join('\n');
            this.textLogs = logs;
            logs = logs.replace(/</g, '&lt;');
            logs = logs.replace(/</g, '&gt;');
            logs = logs.replace(/\n/g, '<br/>');
            this.logs = logs;
        }
    }
    close() {
        this.helper.popToRoot(src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_4__.RoutePath.Home);
    }
    clear() {
        if (this.textLogs) {
            this.helper.confirm('Are you sure to clear all logs?', 'Clear Logs', () => {
                this.appLoggerService.removeLogMessages();
                this.logs = '';
                this.textLogs = '';
                this.downloadLink = null;
                this.helper.alert('Log file has been cleared successfully!');
            }, () => { });
        }
        else {
            this.helper.alert('No logs file available.');
        }
    }
    download() {
        if (this.textLogs) {
            const filename = 'TestDrive-Log-Tool-' + new Date().getTime() + '.txt';
            const logContent = this.textLogs;
            try {
                this.file
                    .writeFile(this.file.cacheDirectory, filename, logContent)
                    .then((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
                    yield this.onSuccess(data);
                }))
                    .catch((error) => {
                    this.onErr(error);
                });
            }
            catch (error) {
                this.helper.alert(error);
            }
        }
        else {
            this.helper.alert('No logs file available.');
        }
    }
    onSuccess(resp) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const deviceInfo = 'DEVICE INFO: ' +
                    '\r\n<br />- Cordova version: ' +
                    this.device.cordova +
                    '\r\n<br />- Model : ' +
                    this.device.model +
                    '\r\n<br />- Platform: ' +
                    this.device.platform +
                    '\r\n<br />- Version: ' +
                    this.device.version +
                    '\r\n<br />- Manufacturer: ' +
                    this.device.manufacturer +
                    '\r\n<br />- Serial: ' +
                    this.device.serial;
                const email = {
                    to: src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_0__.AppConfig.LOGGER_EMAIL,
                    cc: src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_0__.AppConfig.LOGGER_CC_EMAIL,
                    attachments: ['base64:ProScan_2_Log.txt//' + btoa(this.textLogs)],
                    subject: 'ProScan 2.0 Logs ' + new Date().toISOString(),
                    body: deviceInfo,
                    isHtml: true,
                };
                // Send a text message using default options
                try {
                    this.emailComposer.isAvailable().then((available) => {
                        this.logger.debug(resp.nativeURL);
                        this.logger.debug(available);
                        if (available) {
                            this.emailComposer.open(email).catch((error) => {
                                this.logger.debug(error);
                            });
                        }
                        else {
                            this.helper.alert('Unable to send mail.');
                        }
                    });
                }
                catch (error) {
                    this.logger.debug(error);
                }
            }
            catch (err) {
                this.onErr(err);
            }
        });
    }
    onErr(resp) {
        this.logger.debug(resp);
        this.helper.alert('Cannot connect to server. Please try again.');
    }
    showDownloadPopup() {
        if (this.downloadLink) {
            this.helper.prompt('Please copy this url and open on your device, it will expired after access.', 'Download Logs File', [{ name: 'url', value: this.downloadLink }]);
        }
        else {
            this.download();
        }
    }
}
ViewLogsPage.ɵfac = function ViewLogsPage_Factory(t) { return new (t || ViewLogsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_12__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_12__.NavParams), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__.File), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_6__.HelperService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_7__.EmailComposer), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_services_logger__WEBPACK_IMPORTED_MODULE_8__.AppLoggerService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_9__.Device)); };
ViewLogsPage.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: ViewLogsPage, selectors: [["app-view-logs"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵInheritDefinitionFeature"]], decls: 5, vars: 3, consts: [[1, "ion-no-border"], ["mode", "md", 4, "ngIf"], ["mode", "ios", 4, "ngIf"], [3, "innerHtml", 4, "ngIf"], ["mode", "md"], ["slot", "start"], [3, "click"], ["name", "chevron-back-outline", "color", "primary", 1, "font-size-28"], ["slot", "end"], ["name", "download", 1, "font-size-28"], ["name", "trash", 1, "font-size-28"], ["mode", "ios"], [2, "padding-left", "40px"], ["name", "download", "color", "light", 1, "font-size-28"], ["name", "trash", "color", "light", 1, "font-size-28"], [3, "innerHtml"]], template: function ViewLogsPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, ViewLogsPage_ion_toolbar_1_Template, 11, 0, "ion-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, ViewLogsPage_ion_toolbar_2_Template, 11, 0, "ion-toolbar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, ViewLogsPage_div_4_Template, 1, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.isAndroid);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.isAndroid);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.logs);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonHeader, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonTitle], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3LWxvZ3MucGFnZS5zY3NzIn0= */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_pages_view-logs_view-logs_module_ts-es2015.js.map