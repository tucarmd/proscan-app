"use strict";
(self["webpackChunkcom_carmd_proscan2"] = self["webpackChunkcom_carmd_proscan2"] || []).push([["src_app_pages_dlc-locator_dlc-locator_module_ts"],{

/***/ 39490:
/*!*****************************************************************!*\
  !*** ./src/app/pages/dlc-locator/dlc-locator-routing.module.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DlcLocatorPageRoutingModule": function() { return /* binding */ DlcLocatorPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _dlc_locator_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dlc-locator.page */ 19388);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);




const routes = [
    {
        path: '',
        component: _dlc_locator_page__WEBPACK_IMPORTED_MODULE_0__.DlcLocatorPage
    }
];
class DlcLocatorPageRoutingModule {
}
DlcLocatorPageRoutingModule.ɵfac = function DlcLocatorPageRoutingModule_Factory(t) { return new (t || DlcLocatorPageRoutingModule)(); };
DlcLocatorPageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: DlcLocatorPageRoutingModule });
DlcLocatorPageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DlcLocatorPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 11914:
/*!*********************************************************!*\
  !*** ./src/app/pages/dlc-locator/dlc-locator.module.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DlcLocatorPageModule": function() { return /* binding */ DlcLocatorPageModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 81864);
/* harmony import */ var _dlc_locator_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dlc-locator-routing.module */ 39490);
/* harmony import */ var _dlc_locator_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dlc-locator.page */ 19388);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);






class DlcLocatorPageModule {
}
DlcLocatorPageModule.ɵfac = function DlcLocatorPageModule_Factory(t) { return new (t || DlcLocatorPageModule)(); };
DlcLocatorPageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: DlcLocatorPageModule });
DlcLocatorPageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _dlc_locator_routing_module__WEBPACK_IMPORTED_MODULE_0__.DlcLocatorPageRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](DlcLocatorPageModule, { declarations: [_dlc_locator_page__WEBPACK_IMPORTED_MODULE_1__.DlcLocatorPage], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
        _dlc_locator_routing_module__WEBPACK_IMPORTED_MODULE_0__.DlcLocatorPageRoutingModule] }); })();


/***/ }),

/***/ 19388:
/*!*******************************************************!*\
  !*** ./src/app/pages/dlc-locator/dlc-locator.page.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DlcLocatorPage": function() { return /* binding */ DlcLocatorPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/app-routing.module */ 90158);
/* harmony import */ var src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/configs/app.config */ 66626);
/* harmony import */ var src_app_bases_base_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/bases/base-controller */ 38790);
/* harmony import */ var _dlc_locator_details_dlc_locator_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dlc-locator-details/dlc-locator-details.page */ 36152);
/* harmony import */ var _enter_vin_enter_vin_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../enter-vin/enter-vin.page */ 33971);
/* harmony import */ var src_app_services_state_app_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/state/app.state */ 12607);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ 81864);
/* harmony import */ var src_app_services_vehicle_service_vehicle_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/vehicle-service/vehicle-service */ 99578);
/* harmony import */ var src_app_services_report_service_report_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/report-service/report-service */ 45322);
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ 10926);
/* harmony import */ var src_app_services_tool_service_tool_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/tool-service/tool-service */ 91841);
/* harmony import */ var src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/helper.service */ 22486);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 1707);
















function DlcLocatorPage_ion_toolbar_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-toolbar", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "ion-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "DLC Locator");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function DlcLocatorPage_ion_toolbar_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-toolbar", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "ion-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "DLC Locator");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function DlcLocatorPage_ion_select_option_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-select-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const m_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", m_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](m_r5);
} }
function DlcLocatorPage_ion_select_option_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-select-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const y_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", y_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](y_r6);
} }
function DlcLocatorPage_ion_select_option_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-select-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const m_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("value", m_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](m_r7);
} }
class DlcLocatorPage extends src_app_bases_base_controller__WEBPACK_IMPORTED_MODULE_2__.BaseController {
    constructor(navCtrl, navParams, vehicleService, reportService, barcodeScanner, modalCtrl, toolService, helper) {
        super('DlcLocatorPage');
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.vehicleService = vehicleService;
        this.reportService = reportService;
        this.barcodeScanner = barcodeScanner;
        this.modalCtrl = modalCtrl;
        this.toolService = toolService;
        this.helper = helper;
        this.DlcLocatorDetailsPage = _dlc_locator_details_dlc_locator_details_page__WEBPACK_IMPORTED_MODULE_3__.DlcLocatorDetailsPage;
        this.makes = [];
        this.years = [];
        this.models = [];
        this.make = "";
        this.year = "";
        this.model = "";
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            yield this.helper.showLoading();
            let data = yield this.vehicleService.getMakes();
            if (data.success) {
                this.makes = data.data;
            }
            else {
                this.helper.alert(src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_1__.AppStrings.MSG_SERVER_ERROR_TRY_LATER, src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_1__.AppStrings.ERROR);
            }
            ;
            yield this.helper.hideLoading();
        });
    }
    ionViewWillEnter() {
        this.reportSession = this.reportService.getReportSession();
    }
    loadYears(selectedValue) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            this.logger.debug('🚀 ~ file: dlc-locator.page.ts ~ line 55 ~ DlcLocatorPage ~ loadYears ~ selectedValue', selectedValue);
            if (selectedValue) {
                yield this.helper.showLoading();
                this.make = selectedValue.detail.value;
                let ctx = this;
                this.logger.debug('load years', this.make);
                let data = yield ctx.vehicleService.getYears(this.make);
                yield ctx.helper.hideLoading();
                if (data.success) {
                    ctx.years = data.data;
                    ctx.year = '';
                    ctx.model = '';
                }
                else {
                    ctx.helper.alert(src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_1__.AppStrings.MSG_SERVER_ERROR_TRY_LATER, src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_1__.AppStrings.ERROR);
                }
            }
        });
    }
    loadModels(selectedValue) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            if (selectedValue) {
                let ctx = this;
                ctx.year = selectedValue.detail.value;
                if (ctx.year) {
                    this.helper.showLoading();
                    let data = yield ctx.vehicleService.getModels(ctx.make, ctx.year);
                    ctx.helper.hideLoading();
                    if (data.success) {
                        ctx.models = data.data;
                        ctx.model = '';
                    }
                    else {
                        ctx.helper.alert(src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_1__.AppStrings.MSG_SERVER_ERROR_TRY_LATER, src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_1__.AppStrings.ERROR);
                    }
                    ;
                }
            }
        });
    }
    setModel(selectedValue) {
        if (selectedValue)
            this.model = selectedValue.detail.value;
    }
    getDlcLocation() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            if (this.year === '' || this.make === '' || this.model === '') {
                this.helper.alert("Please select Year, Make, and Model to view DLC location.", src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_1__.AppStrings.ERROR);
                return;
            }
            this.helper.showLoading();
            let data = yield this.vehicleService.getDlcLocation(this.make, this.year, this.model);
            this.helper.hideLoading();
            if (data.success) {
                let reportSession = this.reportService.getReportSession();
                reportSession.hasDlc = true;
                reportSession.dlcModel = data.data;
                this.reportService.saveReportSession(reportSession);
                this.helper.goTo(src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_0__.RoutePath.DlcLocatorDetails);
            }
            else {
                this.helper.alert("Unable to get DLC location for this vehicle. Please try again.", src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_1__.AppStrings.ERROR);
            }
            ;
        });
    }
    getDlcLocationByVin(vin) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            this.helper.showLoading();
            let data = yield this.vehicleService.getDlcLocationByVin(vin);
            this.helper.hideLoading();
            if (data.success) {
                let reportSession = this.reportService.getReportSession();
                reportSession.dlcModel = data.data;
                this.reportService.saveReportSession(reportSession);
                this.helper.goTo(src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_0__.RoutePath.DlcLocatorDetails);
            }
            else {
                this.helper.alert('Invalid VIN. Either this VIN is too new for our system, or our system cannot decode this VIN, or this VIN is invalid. Please enter a different VIN.', src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_1__.AppStrings.ERROR);
            }
        });
    }
    scanVin() {
        let ctx = this;
        if (src_app_services_state_app_state__WEBPACK_IMPORTED_MODULE_5__.AppState.isOnDevice) {
            try {
                ctx.barcodeScanner.scan({ orientation: "portrait", prompt: "" }).then((barcodeData) => {
                    if (barcodeData.cancelled) {
                        if (barcodeData.text && barcodeData.text === 'enterVin') {
                            this.enterVinManually();
                        }
                    }
                    else if (barcodeData) {
                        let vin = barcodeData.text;
                        if (barcodeData.format === 'CODE_39' || (vin != '' && vin.length >= 17)) {
                            if (vin.length > 17) {
                                vin = vin.substring(1);
                            }
                            ctx.getDlcLocationByVin(vin);
                        }
                        else {
                            ctx.toolService.wait(10).then(() => {
                                ctx.scanVin();
                            });
                        }
                    }
                }, (err) => {
                    this.logger.debug(err);
                    ctx.toolService.wait(10).then(() => {
                        ctx.scanVin();
                    });
                });
            }
            catch (error) {
                this.helper.alert(error);
            }
        }
        else {
            this.enterVinManually();
        }
    }
    enterVinManually() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            this.logger.debug('enterVinManually');
            let modal = yield this.modalCtrl.create({
                component: _enter_vin_enter_vin_page__WEBPACK_IMPORTED_MODULE_4__.EnterVinPage
            });
            modal.present();
            const { data } = yield modal.onDidDismiss();
            if (data) {
                let reportSession = this.reportService.getReportSession();
                reportSession.dlcModel = data.data;
                this.reportService.saveReportSession(reportSession);
                this.helper.goTo(src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_0__.RoutePath.DlcLocatorDetails);
                // this.getDlcLocationByVin(data.vin);
            }
        });
    }
    cancel() {
        this.helper.goBack();
    }
}
DlcLocatorPage.ɵfac = function DlcLocatorPage_Factory(t) { return new (t || DlcLocatorPage)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_13__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_13__.NavParams), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_services_vehicle_service_vehicle_service__WEBPACK_IMPORTED_MODULE_6__.VehicleServiceProvider), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_services_report_service_report_service__WEBPACK_IMPORTED_MODULE_7__.ReportServiceProvider), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_8__.BarcodeScanner), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_13__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_services_tool_service_tool_service__WEBPACK_IMPORTED_MODULE_9__.ToolServiceProvider), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_10__.HelperService)); };
DlcLocatorPage.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({ type: DlcLocatorPage, selectors: [["app-dlc-locator"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵInheritDefinitionFeature"]], decls: 30, vars: 11, consts: [[1, "ion-no-border"], ["mode", "md", 4, "ngIf"], ["mode", "ios", 4, "ngIf"], [1, "ion-padding"], [1, "mb-4"], ["placeholder", "Make", 1, "app-select", 3, "ngModel", "ngModelChange", "ionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["placeholder", "Year", 1, "app-select", 3, "disabled", "ngModel", "ngModelChange", "ionChange"], [1, "mb-5"], ["placeholder", "Model", 1, "app-select", 3, "disabled", "ngModel", "ngModelChange", "ionChange"], [1, "text-center"], ["expand", "block", "type", "submit", 1, "app-button", 3, "disabled", "click"], [3, "click"], [1, "text-center", "mb-3"], [1, "font-size-18"], [1, "font-size-18", "text-light"], ["mode", "md"], ["mode", "ios"], [3, "value"]], template: function DlcLocatorPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, DlcLocatorPage_ion_toolbar_1_Template, 3, 0, "ion-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, DlcLocatorPage_ion_toolbar_2_Template, 3, 0, "ion-toolbar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "ion-content", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "ion-grid");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "ion-col", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "ion-select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function DlcLocatorPage_Template_ion_select_ngModelChange_7_listener($event) { return ctx.make = $event; })("ionChange", function DlcLocatorPage_Template_ion_select_ionChange_7_listener($event) { return ctx.loadYears($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](8, DlcLocatorPage_ion_select_option_8_Template, 2, 2, "ion-select-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "ion-col", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "ion-select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function DlcLocatorPage_Template_ion_select_ngModelChange_11_listener($event) { return ctx.year = $event; })("ionChange", function DlcLocatorPage_Template_ion_select_ionChange_11_listener($event) { return ctx.loadModels($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](12, DlcLocatorPage_ion_select_option_12_Template, 2, 2, "ion-select-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "ion-col", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](15, "ion-select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function DlcLocatorPage_Template_ion_select_ngModelChange_15_listener($event) { return ctx.model = $event; })("ionChange", function DlcLocatorPage_Template_ion_select_ionChange_15_listener($event) { return ctx.setModel($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](16, DlcLocatorPage_ion_select_option_16_Template, 2, 2, "ion-select-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](17, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](18, "ion-col", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](19, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](20, "ion-button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DlcLocatorPage_Template_ion_button_click_20_listener() { return ctx.getDlcLocation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](21, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](22, "ion-row", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DlcLocatorPage_Template_ion_row_click_22_listener() { return ctx.scanVin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](23, "ion-col", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](24, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](25, "Scan VIN");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](26, "ion-row", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DlcLocatorPage_Template_ion_row_click_26_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](27, "ion-col", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](28, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](29, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.isAndroid);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx.isAndroid);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx.make);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx.makes);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", !ctx.make)("ngModel", ctx.year);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx.years);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", !ctx.make || !ctx.year)("ngModel", ctx.model);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx.models);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", !(ctx.year != "" && ctx.make != "" && ctx.model != ""));
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonHeader, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonSelect, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.SelectValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonSelectOption], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkbGMtbG9jYXRvci5wYWdlLnNjc3MifQ== */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_pages_dlc-locator_dlc-locator_module_ts-es2015.js.map