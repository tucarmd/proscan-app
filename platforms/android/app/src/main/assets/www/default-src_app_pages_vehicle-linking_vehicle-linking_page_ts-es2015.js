"use strict";
(self["webpackChunkcom_carmd_proscan2"] = self["webpackChunkcom_carmd_proscan2"] || []).push([["default-src_app_pages_vehicle-linking_vehicle-linking_page_ts"],{

/***/ 55499:
/*!***************************************************************!*\
  !*** ./src/app/pages/vehicle-linking/vehicle-linking.page.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VehicleLinkingPage": function() { return /* binding */ VehicleLinkingPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/configs/app.config */ 66626);
/* harmony import */ var src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/app-routing.module */ 90158);
/* harmony import */ var src_app_models_app_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/app.enum */ 34932);
/* harmony import */ var src_app_services_innova_tool_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/innova-tool-models */ 92951);
/* harmony import */ var src_app_models_app_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/app.data */ 40354);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ 202);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _enter_vin_enter_vin_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../enter-vin/enter-vin.page */ 33971);
/* harmony import */ var src_app_models_report_session__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models/report-session */ 34045);
/* harmony import */ var src_app_bases_base_controller__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/bases/base-controller */ 38790);
/* harmony import */ var src_app_models_app_constant__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/models/app.constant */ 99888);
/* harmony import */ var src_app_services_state_app_state__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/state/app.state */ 12607);
/* harmony import */ var _modals_vehicle_selection_vehicle_selection_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../modals/vehicle-selection/vehicle-selection.page */ 31452);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @ionic/angular */ 81864);
/* harmony import */ var src_app_services_innova_vci_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/innova-vci.service */ 7860);
/* harmony import */ var src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/services/helper.service */ 22486);
/* harmony import */ var src_app_services_navigation_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/services/navigation.service */ 89565);
/* harmony import */ var src_app_services_innova_vci_service_src_connectivity_connectivity_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/services/innova-vci-service/src/connectivity/connectivity.service */ 27555);
/* harmony import */ var _ionic_native_insomnia_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic-native/insomnia/ngx */ 31484);
/* harmony import */ var _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic-native/diagnostic/ngx */ 91089);
/* harmony import */ var _ionic_native_open_native_settings_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ionic-native/open-native-settings/ngx */ 35266);
/* harmony import */ var src_app_services_report_service_report_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/services/report-service/report-service */ 45322);
/* harmony import */ var src_app_services_events_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/app/services/events.service */ 80106);
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ 10926);
/* harmony import */ var src_app_services_vehicle_service_vehicle_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! src/app/services/vehicle-service/vehicle-service */ 99578);
/* harmony import */ var _ionic_native_ble_ngx__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ionic-native/ble/ngx */ 11695);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/common */ 54364);
var _VehicleLinkingPage_instances, _VehicleLinkingPage_vehicleData, _VehicleLinkingPage_startScanTools;




























function VehicleLinkingPage_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](4, "ion-spinner", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](5, "ion-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](6, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](8, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](10, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](11, "This may take several minutes to complete.");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](12, "ion-grid", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](13, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](14, "ion-col", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵlistener"]("click", function VehicleLinkingPage_div_2_Template_ion_col_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"](); return ctx_r3.cancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](15, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](16, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("hidden", ctx_r0.isScanning);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtextInterpolate1"]("", ctx_r0.title, " ...");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtextInterpolate"](ctx_r0.resultText);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtextInterpolate"](ctx_r0.statusText);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("hidden", ctx_r0.creatingReport);
} }
function VehicleLinkingPage_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](2, "Scanning devices...");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](4, "ion-spinner", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](5, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](6, "Starting scan");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](7, "ion-grid");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](8, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](9, "ion-col", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵlistener"]("click", function VehicleLinkingPage_div_3_Template_ion_col_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"](); return ctx_r5.cancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](10, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](11, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("hidden", !ctx_r1.isScanning);
} }
function VehicleLinkingPage_div_4_ion_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](0, "ion-button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵlistener"]("click", function VehicleLinkingPage_div_4_ion_button_3_Template_ion_button_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵrestoreView"](_r10); const device_r8 = restoredCtx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"](2); return ctx_r9.selectDevice(device_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
} if (rf & 2) {
    const device_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtextInterpolate"](device_r8.displayName);
} }
function VehicleLinkingPage_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](1, "h2", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](2, "Please select device");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtemplate"](3, VehicleLinkingPage_div_4_ion_button_3_Template, 2, 1, "ion-button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](4, "ion-grid");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](5, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](6, "ion-col", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵlistener"]("click", function VehicleLinkingPage_div_4_Template_ion_col_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"](); return ctx_r11.cancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](7, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](8, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("ngForOf", ctx_r2.devices);
} }
class VehicleLinkingPage extends src_app_bases_base_controller__WEBPACK_IMPORTED_MODULE_8__.BaseController {
    constructor(modalController, innovaVciService, helper, navigationService, connService, platform, insomnia, zone, diagnostic, openNativeSettings, reportService, eventService, barcodeScanner, changeDetector, vehicleService, ble) {
        super('VehicleLinkingPage');
        this.modalController = modalController;
        this.innovaVciService = innovaVciService;
        this.helper = helper;
        this.navigationService = navigationService;
        this.connService = connService;
        this.platform = platform;
        this.insomnia = insomnia;
        this.zone = zone;
        this.diagnostic = diagnostic;
        this.openNativeSettings = openNativeSettings;
        this.reportService = reportService;
        this.eventService = eventService;
        this.barcodeScanner = barcodeScanner;
        this.changeDetector = changeDetector;
        this.vehicleService = vehicleService;
        this.ble = ble;
        _VehicleLinkingPage_instances.add(this);
        this.title = 'Scanning devices';
        this.isRescan = false;
        this.isScanning = true;
        this.hasMultipleDevices = false;
        this.retry = 0;
        this.retryingCreateReport = false;
        this.percent = 0;
        this.isScanningVIN = false;
        this.isScanningModules = false;
        this.found = false;
        this.result = 'Starting scan';
        this.isRetried = false;
        this.isCancelling = false;
        this.creatingReport = false;
        this.deviceId = '';
        this.toolName = '';
        this.createReportErrorMessage = '';
        this.isLeaveScanningPage = false;
        this.scanningTimeout = null;
        _VehicleLinkingPage_vehicleData.set(this, void 0);
        this.multipleDevicesInterval = null;
    }
    setStatus(result, status = '') {
        console.log('🚀 ~ VehicleLinkingPage ~ setStatus ~ result:', result);
        this.zone.run(() => {
            if (result != null) {
                this.resultText = result;
                this.logger.debug(this.resultText + ' - ' + status);
            }
            this.statusText = status;
        });
    }
    selectDevice(device) {
        console.log('🚀 ~ VehicleLinkingPage ~ selectDevice ~ device:', device);
        this.eventService.publish(src_app_services_innova_tool_models__WEBPACK_IMPORTED_MODULE_3__.InnovaVCIEvent.DEVICE_SELECTED, device);
        this.isScanning = false;
        this.hasMultipleDevices = false;
        // this.title = 'Loading...';
        this.helper.refreshLayout(this.changeDetector);
    }
    ionViewWillEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_25__.__awaiter)(this, void 0, void 0, function* () {
            this.hasMultipleDevices = false;
            this.isScanning = false;
            this.isCancelling = false;
            this.creatingReport = false;
            this.isLeaveScanningPage = false;
            this.createReportErrorMessage = '';
            this.vciRepsonse = null;
            this.reportStatus = src_app_models_report_session__WEBPACK_IMPORTED_MODULE_7__.ReportStatus.Incomplete;
            this.reportSession = this.reportService.getReportSession();
            this.connectedVehicle = src_app_models_app_data__WEBPACK_IMPORTED_MODULE_4__.AppData.get(src_app_models_app_enum__WEBPACK_IMPORTED_MODULE_2__.EnumAppDataKey.InfoVehicleConnected);
            this.isRescan = this.helper.coerceBooleanProperty(this.navigationService.getQueryParam('isRescan'));
            if (this.isRescan) {
                this.title = 'Rescanning modules';
                this.result = '';
            }
            else {
                this.isScanning = true;
                this.title = 'Scanning devices';
                this.result = 'Starting scan';
                this.eventService.subscribe(src_app_services_innova_tool_models__WEBPACK_IMPORTED_MODULE_3__.InnovaVCIEvent.CONNECTED, (device) => {
                    this.logger.debug('Connected: ', device);
                    this.deviceId = device.id;
                    this.toolName = device.name;
                    this.title = 'Loading';
                    this.setStatus(device.name + ' has been connected', 'Linking to vehicle...');
                    this.isScanning = false;
                    if (this.scanningTimeout) {
                        clearTimeout(this.scanningTimeout);
                        this.scanningTimeout = null;
                    }
                    if (this.multipleDevicesInterval) {
                        clearInterval(this.multipleDevicesInterval);
                        this.multipleDevicesInterval = null;
                    }
                    this.startScan();
                });
                let ctx = this;
                ctx.devices = [];
                this.eventService.subscribe(src_app_services_innova_tool_models__WEBPACK_IMPORTED_MODULE_3__.InnovaVCIEvent.DEVICE_FOUND, (device) => {
                    if (!ctx.devices) {
                        ctx.devices = [];
                    }
                    if (ctx.devices.findIndex((d) => d.id === device.id) < 0) {
                        ctx.devices.push(device);
                    }
                });
                ctx.multipleDevicesInterval = setInterval(() => {
                    if (ctx.isScanning) {
                        if (ctx.devices.length > 0) {
                            if (this.multipleDevicesInterval) {
                                clearInterval(this.multipleDevicesInterval);
                                this.multipleDevicesInterval = null;
                            }
                            ctx.eventService.unsubscribe(src_app_services_innova_tool_models__WEBPACK_IMPORTED_MODULE_3__.InnovaVCIEvent.DEVICE_FOUND);
                            ctx.isScanning = false;
                            clearTimeout(ctx.scanningTimeout);
                            ctx.scanningTimeout = null;
                            if (src_app_services_state_app_state__WEBPACK_IMPORTED_MODULE_10__.AppState.isOnAndroid) {
                                console.log('Call this.ble.stopScan');
                                ctx.connService.stopScan();
                            }
                            if (ctx.devices.length > 1) {
                                ctx.hasMultipleDevices = true;
                            }
                            else {
                                ctx.selectDevice(ctx.devices[0]);
                            }
                            ctx.helper.refreshLayout(ctx.changeDetector);
                        }
                    }
                    else {
                        clearInterval(ctx.multipleDevicesInterval);
                        ctx.multipleDevicesInterval = null;
                    }
                }, src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_0__.AppConfig.scanningDevicesInterval);
                this.isScanningModules = false;
                this.eventService.subscribe(src_app_models_app_enum__WEBPACK_IMPORTED_MODULE_2__.EnumAppEvent.InfoToolConnected, (toolInfo) => (0,tslib__WEBPACK_IMPORTED_MODULE_25__.__awaiter)(this, void 0, void 0, function* () {
                    this.eventService.unsubscribe(src_app_models_app_enum__WEBPACK_IMPORTED_MODULE_2__.EnumAppEvent.InfoToolConnected);
                    this.logger.debug(toolInfo);
                    this.toolInfo = toolInfo;
                    if (this.toolInfo) {
                        localStorage.setItem(src_app_models_app_constant__WEBPACK_IMPORTED_MODULE_9__.StorageKeys.FIRMWARE_VERSION, this.toolInfo.main);
                    }
                }));
                this.scanningTimeout = setTimeout(() => (0,tslib__WEBPACK_IMPORTED_MODULE_25__.__awaiter)(this, void 0, void 0, function* () {
                    if (!this.isConnected) {
                        this.navigationService
                            .goTo(src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_1__.RoutePath.ConnectionFailed)
                            .then(() => (0,tslib__WEBPACK_IMPORTED_MODULE_25__.__awaiter)(this, void 0, void 0, function* () {
                            if (src_app_services_state_app_state__WEBPACK_IMPORTED_MODULE_10__.AppState.isOnAndroid) {
                                console.log('Call this.ble.stopScan');
                                this.ble.stopScan();
                            }
                            yield this.innovaVciService.disconnect(true, this.deviceId);
                        }));
                    }
                }), src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_0__.AppConfig.scanningDevicesTimeout);
            }
            console.log('🚀 ~ VehicleLinkingPage ~ ionViewWillEnter ~ DONE ionViewWillEnter:');
        });
    }
    ionViewDidEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_25__.__awaiter)(this, void 0, void 0, function* () {
            this.eventService.subscribe(src_app_services_innova_tool_models__WEBPACK_IMPORTED_MODULE_3__.InnovaVCIEvent.SCAN_STATUS, (res) => {
                let name = lodash__WEBPACK_IMPORTED_MODULE_5___default().get(res, 'name');
                let result = lodash__WEBPACK_IMPORTED_MODULE_5___default().get(res, 'result');
                this.setStatus(result, name);
            });
            // Check Bluetooth Permission
            //bao check temp
            let isBtEnabled = yield this.helper.checkBluetoothPermissions();
            if (!isBtEnabled) {
                if (src_app_services_state_app_state__WEBPACK_IMPORTED_MODULE_10__.AppState.isOnAndroid && !src_app_services_state_app_state__WEBPACK_IMPORTED_MODULE_10__.AppState.isOnAtLeastVersion(13)) {
                    this.helper.confirm('In order to detect and pair to your scan tool, please turn Bluetooth ON.', 'Bluetooth is turned OFF', () => (0,tslib__WEBPACK_IMPORTED_MODULE_25__.__awaiter)(this, void 0, void 0, function* () {
                        isBtEnabled = yield this.diagnostic.setBluetoothState(true);
                        this.logger.debug('Is BT Enabled', isBtEnabled);
                        if (isBtEnabled) {
                            this.startScanNow();
                        }
                        else {
                            this.helper.goBack();
                        }
                    }), () => {
                        this.helper.goBack();
                    }, 'Turn Bluetooth ON', 'Cancel');
                }
                else {
                    this.helper.confirm('In order to detect and pair to your scan tool, turn Bluetooth ON from your device’s settings.', 'Bluetooth is turned OFF', () => (0,tslib__WEBPACK_IMPORTED_MODULE_25__.__awaiter)(this, void 0, void 0, function* () {
                        if (src_app_services_state_app_state__WEBPACK_IMPORTED_MODULE_10__.AppState.isOnAndroid) {
                            this.diagnostic.switchToBluetoothSettings();
                        }
                        else {
                            this.openNativeSettings.open('settings').catch((ex) => {
                                var _a;
                                (_a = this.logger) === null || _a === void 0 ? void 0 : _a.info('openSettings>openNativeSettings>Error', ex);
                            });
                        }
                    }), () => {
                        this.helper.goBack();
                    }, 'Go to settings', 'Cancel');
                }
            }
            else {
                this.startScanNow();
            }
        });
    }
    startScanNow() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_25__.__awaiter)(this, void 0, void 0, function* () {
            console.log('this.isRescan: ', this.isRescan);
            if (this.isRescan) {
                this.isScanningModules = true;
                this.setStatus('', 'Read supported modules...');
                return yield this.scanOEMModules(this.innovaVciService.vciResponseData.vin);
            }
            else {
                return yield (0,tslib__WEBPACK_IMPORTED_MODULE_25__.__classPrivateFieldGet)(this, _VehicleLinkingPage_instances, "m", _VehicleLinkingPage_startScanTools).call(this);
            }
        });
    }
    saveAndCreateReport(vciRepsonse, reportStatus) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_25__.__awaiter)(this, void 0, void 0, function* () {
            this.setStatus('', 'Creating report...');
            let ctx = this;
            if (ctx.isCancelling) {
                return;
            }
            ctx.reportService.saveReportSession(ctx.reportSession);
            ctx.creatingReport = true;
            yield ctx.helper.sleep(1000);
            yield ctx.createReport(vciRepsonse, reportStatus);
        });
    }
    createReportFailed() {
        this.retryingCreateReport = true;
        this.creatingReport = false;
        this.isCancelling = true;
        this.helper.confirm(this.createReportErrorMessage, '', () => (0,tslib__WEBPACK_IMPORTED_MODULE_25__.__awaiter)(this, void 0, void 0, function* () {
            this.isCancelling = false;
            yield this.createReport(this.vciRepsonse, this.reportStatus);
        }), () => {
            this.cancel(true, true);
        }, 'Try Again', 'Cancel');
    }
    createReport(vciRepsonse, reportStatus) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_25__.__awaiter)(this, void 0, void 0, function* () {
            let ctx = this;
            try {
                ctx.creatingReport = true;
                ctx.isScanningModules = false;
                this.logger.debug('Creating report');
                if (!vciRepsonse.mileage) {
                    vciRepsonse.mileage = ctx.reportSession.mileage;
                }
                let result = yield ctx.reportService.createReport(ctx.reportSession.workOrderNumber, vciRepsonse, reportStatus);
                if (result.success) {
                    this.logger.debug('Report Created Success');
                    ctx.reportSession.reportId = result.data.id;
                    ctx.reportSession.reportNumber = result.data.reportNumber + '';
                    ctx.reportService.saveReportSession(ctx.reportSession);
                    ctx.retryingCreateReport = false;
                    ctx.reportService.saveReport(result.data);
                    ctx.resultText = '';
                    ctx.statusText = '';
                    ctx.navigationService.goTo(src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_1__.RoutePath.ScanComplete, {
                        queryParams: {
                            deviceId: ctx.deviceId,
                            reportId: result.data.id
                        },
                    });
                }
                else {
                    this.logger.debug('Unable to create report', result);
                    if (result.message && result.message.message != undefined) {
                        ctx.createReportErrorMessage =
                            'Create report failed: ' +
                                result.message.message +
                                ' Please try again.';
                    }
                    else {
                        ctx.createReportErrorMessage =
                            'Unable to create report. Please check your internet connection and try again.';
                    }
                    ctx.reportStatus = reportStatus;
                    ctx.vciRepsonse = vciRepsonse;
                    ctx.createReportFailed();
                }
            }
            catch (error) {
                this.logger.debug('Unable to create report', error);
                ctx.createReportErrorMessage =
                    'Unable to create report. Please try again.';
                ctx.reportStatus = reportStatus;
                ctx.vciRepsonse = vciRepsonse;
                ctx.createReportFailed();
            }
        });
    }
    gotVIN(needSetVIN, vin) {
        var _a, _b, _c, _d;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_25__.__awaiter)(this, void 0, void 0, function* () {
            if (needSetVIN) {
                this.innovaVciService.vciResponseData.vin = vin;
                this.logger.debug('Writing VIN: ', vin);
                yield this.innovaVciService.setVin(vin, true);
                yield this.helper.sleep(2000);
            }
            if (this.innovaVciService.needUpdateMoreVehicleInfo) {
                let result = (yield this.innovaVciService
                    .ymme_get(254)
                    .catch((err) => null));
                if (result && result.field !== 'Done') {
                    this.logger.debug('vciResponseData ymme', this.innovaVciService.vciResponseData.ymme);
                    this.logger.debug('ymme_get 254 result', result);
                    const isVehicleInfoOk = yield this.setVehicleInfoFromUser({
                        year: (_a = this.innovaVciService.vciResponseData.ymme) === null || _a === void 0 ? void 0 : _a.year,
                        make: (_b = this.innovaVciService.vciResponseData.ymme) === null || _b === void 0 ? void 0 : _b.make,
                        model: (_c = this.innovaVciService.vciResponseData.ymme) === null || _c === void 0 ? void 0 : _c.model,
                        engine: (_d = this.innovaVciService.vciResponseData.ymme) === null || _d === void 0 ? void 0 : _d.engine,
                        options1: result.options,
                    });
                    if (!isVehicleInfoOk) {
                        return yield this.helper
                            .alert('T7R-85 Toyota, Lexus, Scion Pop-Up: Could not auto confirm')
                            .then(() => {
                            this.cancel(false);
                        });
                    }
                }
            }
            return yield this.scanOEMModules(vin);
        });
    }
    startScan() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_25__.__awaiter)(this, void 0, void 0, function* () {
            this.logger.debug('start scan');
            console.log('start scan');
            let ctx = this;
            ctx.isCancelling = false;
            (0,tslib__WEBPACK_IMPORTED_MODULE_25__.__classPrivateFieldSet)(ctx, _VehicleLinkingPage_vehicleData, null, "f");
            if (ctx.retryingCreateReport === true) {
                ctx.retryingCreateReport = false;
                yield ctx.helper.sleep(1000);
                ctx.createReport(this.innovaVciService.vciResponseData, 0);
                return;
            }
            ctx.isRetried = false;
            this.percent = 0;
            try {
                let res;
                yield this.insomnia.keepAwake().catch(this.logger.debug.bind(null));
                const startMs = new Date().getTime();
                this.innovaVciService.enableReportSleepTime(true);
                res = yield this.innovaVciService.connectAndRequestData();
                if (!res) {
                    throw new Error('Could not query data.');
                }
                let vin = this.innovaVciService.vciResponseData.vin;
                if (vin === undefined || vin === null || vin === '') {
                    this.setStatus('No VIN Detected', 'Starting scan VIN or Enter Manually');
                    yield this.scanVin();
                }
                else {
                    yield this.decodeVIN(vin, false);
                }
            }
            catch (e) {
                this.logger.debug('Scan failed', e, 'isLeaveScanningPage', this.isLeaveScanningPage);
                if (this.isLeaveScanningPage) {
                    return this.onScanDone();
                }
                this.isRetried = true; // Disable Retry when scan failed
                if (this.isRetried) {
                    this.percent = 0;
                    return this.showFailureDialog();
                }
                else {
                    this.isRetried = true;
                    yield this.innovaVciService.disconnect(true, this.deviceId);
                    return this.startScan();
                }
            }
        });
    }
    getDataFromModal(modalOptions) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_25__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create(modalOptions);
            yield this.helper.hideLoading();
            modal.present().then(() => {
                // this.currentModal = modal;
            });
            // modal.onDidDismiss().then(() => {
            //   this.currentModal = null;
            // });
            return modal.onDidDismiss();
        });
    }
    setVehicleInfoFromUser(ymme) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_25__.__awaiter)(this, void 0, void 0, function* () {
            const { data } = yield this.getDataFromModal({
                component: _modals_vehicle_selection_vehicle_selection_page__WEBPACK_IMPORTED_MODULE_11__.VehicleSelectionPage,
                componentProps: {
                    ymme: ymme,
                },
                showBackdrop: true,
                backdropDismiss: false,
            });
            return data && data.confirm;
        });
    }
    scanOEMModules(vin) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_25__.__awaiter)(this, void 0, void 0, function* () {
            if (this.isCancelling) {
                return;
            }
            this.isScanningModules = true;
            this.isLeaveScanningPage = false;
            this.isCancelling = false;
            const startMs = new Date().getTime();
            this.innovaVciService.enableReportSleepTime(true);
            let res = yield this.innovaVciService.scanModules(vin);
            this.isScanningModules = false;
            const sleepMs = this.innovaVciService.totalSleepTime;
            const endMs = new Date().getTime();
            this.logger.debug(`[*Done] Scan time: ${Math.round(((endMs - startMs) / 1000) * 100) / 100} seconds. Sleep time: ${Math.round((sleepMs / 1000) * 100) / 100} seconds`);
            this.insomnia.allowSleepAgain().catch(this.logger.debug.bind(null));
            this.logger.debug('result', res);
            yield this.onScanDone();
        });
    }
    showFailureDialog(msg = '', title = '') {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_25__.__awaiter)(this, void 0, void 0, function* () {
            if (this.isLeaveScanningPage)
                return;
            this.isLeaveScanningPage = true;
            yield this.helper.alert(msg ||
                `Please verify the tool is connected to the vehicle’s OBD-II port and try again`, title || 'Scan Failed');
            this.isLeaveScanningPage = false;
        });
    }
    doCancelScanning() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_25__.__awaiter)(this, void 0, void 0, function* () {
            this.isCancelling = true;
            this.resultText = '';
            this.statusText = 'One moment please...';
            this.isLeaveScanningPage = true;
            return this.helper.popToRoot(src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_1__.RoutePath.Home).then(() => (0,tslib__WEBPACK_IMPORTED_MODULE_25__.__awaiter)(this, void 0, void 0, function* () {
                if (src_app_services_state_app_state__WEBPACK_IMPORTED_MODULE_10__.AppState.isOnAndroid) {
                    console.log('Call this.ble.stopScan');
                    this.ble.stopScan();
                }
                yield this.innovaVciService.disconnect(true, this.deviceId);
            }));
        });
    }
    get isConnected() {
        if (src_app_services_state_app_state__WEBPACK_IMPORTED_MODULE_10__.AppState.isOnDevice) {
            return this.innovaVciService.isConnected;
        }
        return true;
    }
    scanVin() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_25__.__awaiter)(this, void 0, void 0, function* () {
            let ctx = this;
            if (ctx.isCancelling) {
                return;
            }
            if (src_app_services_state_app_state__WEBPACK_IMPORTED_MODULE_10__.AppState.isOnDevice) {
                ctx.barcodeScanner.scan({ orientation: 'portrait', prompt: '' }).then((barcodeData) => (0,tslib__WEBPACK_IMPORTED_MODULE_25__.__awaiter)(this, void 0, void 0, function* () {
                    if (barcodeData.cancelled) {
                        if (barcodeData.text && barcodeData.text === 'enterVin') {
                            yield this.getVinFromUser();
                        }
                        else {
                            this.cancel(false);
                        }
                    }
                    else if (barcodeData) {
                        let vin = barcodeData.text;
                        if (barcodeData.format === 'CODE_39' ||
                            (vin != '' && vin.length >= 17)) {
                            if (vin.length > 17) {
                                vin = vin.substring(1);
                            }
                            yield this.decodeVIN(vin, true);
                        }
                        else {
                            yield ctx.helper.sleep(1000);
                            yield ctx.scanVin();
                        }
                    }
                }), (err) => (0,tslib__WEBPACK_IMPORTED_MODULE_25__.__awaiter)(this, void 0, void 0, function* () {
                    this.logger.debug(err);
                    yield ctx.helper.sleep(1000);
                    yield ctx.scanVin();
                }));
            }
            else {
                yield this.getVinFromUser();
            }
        });
    }
    decodeVIN(vin, needSetVIN = true) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_25__.__awaiter)(this, void 0, void 0, function* () {
            this.setStatus('', 'Decoding VIN: ' + vin);
            (0,tslib__WEBPACK_IMPORTED_MODULE_25__.__classPrivateFieldSet)(this, _VehicleLinkingPage_vehicleData, null, "f");
            let result = yield this.vehicleService.decodeVin(vin);
            if (result.success && result.data) {
                if (needSetVIN) {
                    this.setStatus('', 'Writing VIN: ' + vin);
                }
                (0,tslib__WEBPACK_IMPORTED_MODULE_25__.__classPrivateFieldSet)(this, _VehicleLinkingPage_vehicleData, result.data, "f");
                return yield this.gotVIN(needSetVIN, vin);
            }
            else {
                if (result.message && result.message.code != -1) {
                    this.helper.alert(result.message.code === 5006
                        ? `VIN ${vin} is invalid.`
                        : result.message.message, 'Error', [
                        {
                            text: 'OK',
                            handler: () => {
                                this.cancel(false);
                            },
                        },
                    ]);
                }
                else {
                    const message = 'Unable to decode VIN: ' +
                        vin +
                        '. Please check your internet connection and try again.';
                    this.helper.confirm(message, 'Error', () => {
                        this.decodeVIN(vin, needSetVIN);
                    }, () => {
                        this.cancel();
                    }, 'Retry', 'Cancel');
                }
            }
        });
    }
    getVinFromUser() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_25__.__awaiter)(this, void 0, void 0, function* () {
            // if (this.isLeaveScanningPage) return;
            const modal = yield this.modalController.create({
                component: _enter_vin_enter_vin_page__WEBPACK_IMPORTED_MODULE_6__.EnterVinPage,
                componentProps: {
                    isModal: true,
                },
            });
            yield modal.present();
            const { data } = yield modal.onDidDismiss();
            this.setStatus('', 'Writing VIN: ' + data.vin);
            (0,tslib__WEBPACK_IMPORTED_MODULE_25__.__classPrivateFieldSet)(this, _VehicleLinkingPage_vehicleData, data.data, "f");
            return yield this.gotVIN(true, data.vin);
        });
    }
    onScanDone() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_25__.__awaiter)(this, void 0, void 0, function* () {
            if (this.isCancelling) {
                this.logger.debug('isCancelling', this.isCancelling);
                return;
            }
            let vciResponse = this.innovaVciService.vciResponseData;
            this.logger.debug('vciResponseData', vciResponse);
            let recentVin = localStorage.getItem(src_app_models_app_enum__WEBPACK_IMPORTED_MODULE_2__.EnumLocalStorage.RecentVINScanned);
            let recentMileage = 0;
            if (isNaN(vciResponse.mileage) ||
                vciResponse.mileage <= 0 ||
                vciResponse.mileage > src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_0__.MAX_MILEAGE_VALUE) {
                if (recentVin && recentVin === vciResponse.vin) {
                    recentMileage = this.reportSession.mileage;
                }
                if (recentMileage && recentMileage > 0) {
                    vciResponse.mileage = recentMileage;
                    this.logger.debug('auto set mileage from recent user input', recentMileage);
                }
            }
            if (this.connectedVehicle) {
                this.connectedVehicle.vin = vciResponse.vin;
                if (vciResponse.ymme) {
                    this.connectedVehicle.make = vciResponse.ymme.make;
                    this.connectedVehicle.year = vciResponse.ymme.year;
                    this.connectedVehicle.model = vciResponse.ymme.model;
                }
                this.connectedVehicle.mileage = vciResponse.mileage;
                src_app_models_app_data__WEBPACK_IMPORTED_MODULE_4__.AppData.set(src_app_models_app_enum__WEBPACK_IMPORTED_MODULE_2__.EnumAppDataKey.InfoVehicleConnected, this.connectedVehicle);
            }
            this.percent = 100;
            yield this.saveAndCreateReport(vciResponse, src_app_models_report_session__WEBPACK_IMPORTED_MODULE_7__.ReportStatus.Complete);
        });
    }
    ionViewDidLeave() {
        this.eventService.unsubscribe(src_app_services_innova_tool_models__WEBPACK_IMPORTED_MODULE_3__.InnovaVCIEvent.CONNECTED);
        this.eventService.unsubscribe(src_app_services_innova_tool_models__WEBPACK_IMPORTED_MODULE_3__.InnovaVCIEvent.DEVICE_FOUND);
        this.eventService.unsubscribe(src_app_services_innova_tool_models__WEBPACK_IMPORTED_MODULE_3__.InnovaVCIEvent.DEVICE_SELECTED);
        this.eventService.unsubscribe(src_app_services_innova_tool_models__WEBPACK_IMPORTED_MODULE_3__.InnovaVCIEvent.SCAN_STATUS);
        this.eventService.unsubscribe(src_app_services_innova_tool_models__WEBPACK_IMPORTED_MODULE_3__.InnovaVCIEvent.INTERRUPT_PROCESS);
        this.eventService.unsubscribe(src_app_services_innova_tool_models__WEBPACK_IMPORTED_MODULE_3__.InnovaVCIEvent.USER_GUI_INFO);
        if (this.multipleDevicesInterval) {
            clearInterval(this.multipleDevicesInterval);
            this.multipleDevicesInterval = null;
        }
        if (this.scanningTimeout) {
            clearTimeout(this.scanningTimeout);
            this.scanningTimeout = null;
        }
        this.isLeaveScanningPage = true;
        // Unregister the custom back button action for this page
        document.removeEventListener('backbutton', () => {
            this.logger.debug('unregister back button event');
        });
    }
    initializeBackButtonCustomHandler() {
        this.platform.ready().then(() => {
            document.addEventListener('backbutton', () => {
                this.customHandleBackButton();
            });
        });
    }
    customHandleBackButton() {
        this.cancel();
    }
    cancel(confirm = true, reportFailed = false) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_25__.__awaiter)(this, void 0, void 0, function* () {
            if (src_app_services_state_app_state__WEBPACK_IMPORTED_MODULE_10__.AppState.isOnDevice) {
                this.isCancelling = true;
                if (confirm) {
                    this.helper.confirm('Are you sure?', src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_0__.AppStrings.CONFIRM, () => (0,tslib__WEBPACK_IMPORTED_MODULE_25__.__awaiter)(this, void 0, void 0, function* () {
                        this.doCancelScanning();
                    }), () => {
                        if (reportFailed) {
                            this.createReportFailed();
                        }
                        else {
                            this.isCancelling = false;
                        }
                    });
                }
                else {
                    this.doCancelScanning();
                }
            }
        });
    }
}
_VehicleLinkingPage_vehicleData = new WeakMap(), _VehicleLinkingPage_instances = new WeakSet(), _VehicleLinkingPage_startScanTools = function _VehicleLinkingPage_startScanTools() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_25__.__awaiter)(this, void 0, void 0, function* () {
        this.eventService.publish(src_app_services_innova_tool_models__WEBPACK_IMPORTED_MODULE_3__.InnovaVCIEvent.INTERRUPT_PROCESS);
        return yield this.innovaVciService.initializeBT();
    });
};
VehicleLinkingPage.ɵfac = function VehicleLinkingPage_Factory(t) { return new (t || VehicleLinkingPage)(_angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_26__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](src_app_services_innova_vci_service__WEBPACK_IMPORTED_MODULE_12__.InnovaVCIService), _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_13__.HelperService), _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](src_app_services_navigation_service__WEBPACK_IMPORTED_MODULE_14__.NavigationService), _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](src_app_services_innova_vci_service_src_connectivity_connectivity_service__WEBPACK_IMPORTED_MODULE_15__.ConnectivityService), _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_26__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](_ionic_native_insomnia_ngx__WEBPACK_IMPORTED_MODULE_16__.Insomnia), _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_24__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](_ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_17__.Diagnostic), _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](_ionic_native_open_native_settings_ngx__WEBPACK_IMPORTED_MODULE_18__.OpenNativeSettings), _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](src_app_services_report_service_report_service__WEBPACK_IMPORTED_MODULE_19__.ReportServiceProvider), _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](src_app_services_events_service__WEBPACK_IMPORTED_MODULE_20__.Events), _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](_ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_21__.BarcodeScanner), _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_24__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](src_app_services_vehicle_service_vehicle_service__WEBPACK_IMPORTED_MODULE_22__.VehicleServiceProvider), _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](_ionic_native_ble_ngx__WEBPACK_IMPORTED_MODULE_23__.BLE)); };
VehicleLinkingPage.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdefineComponent"]({ type: VehicleLinkingPage, selectors: [["app-vehicle-linking"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵInheritDefinitionFeature"]], decls: 5, vars: 3, consts: [[1, "ion-padding"], [1, "app-content-center-midle"], ["class", "text-center", 3, "hidden", 4, "ngIf"], ["class", "text-center w-100 app-select-device-box px-3 py-4", 4, "ngIf"], [1, "text-center", 3, "hidden"], [1, "app-spinner-wrap"], ["name", "circles"], ["src", "assets/svg/car.svg", 1, "font-size-80"], [1, "text-primary"], [1, "text-danger"], [1, "font-size-20"], [3, "hidden"], [1, "text-center", 3, "click"], [1, "text-secondary", "font-size-18"], ["name", "circles", 1, "size-8"], [1, "font-size-20", "mb-5"], [1, "text-center", "w-100", "app-select-device-box", "px-3", "py-4"], [1, "mb-5"], ["class", "app-button mb-5", "expand", "block", 3, "click", 4, "ngFor", "ngForOf"], [1, "text-white", "font-size-18"], ["expand", "block", 1, "app-button", "mb-5", 3, "click"]], template: function VehicleLinkingPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](0, "ion-content", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtemplate"](2, VehicleLinkingPage_div_2_Template, 17, 5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtemplate"](3, VehicleLinkingPage_div_3_Template, 12, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtemplate"](4, VehicleLinkingPage_div_4_Template, 9, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("ngIf", !ctx.hasMultipleDevices);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("ngIf", !ctx.hasMultipleDevices);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("ngIf", ctx.hasMultipleDevices);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_26__.IonContent, _angular_common__WEBPACK_IMPORTED_MODULE_27__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_26__.IonSpinner, _ionic_angular__WEBPACK_IMPORTED_MODULE_26__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_26__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_26__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_26__.IonCol, _angular_common__WEBPACK_IMPORTED_MODULE_27__.NgForOf, _ionic_angular__WEBPACK_IMPORTED_MODULE_26__.IonButton], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2ZWhpY2xlLWxpbmtpbmcucGFnZS5zY3NzIn0= */"] });


/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_vehicle-linking_vehicle-linking_page_ts-es2015.js.map