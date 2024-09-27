"use strict";
(self["webpackChunkcom_carmd_proscan2"] = self["webpackChunkcom_carmd_proscan2"] || []).push([["src_app_pages_change-tool-name_change-tool-name_module_ts"],{

/***/ 97232:
/*!***************************************************************************!*\
  !*** ./src/app/pages/change-tool-name/change-tool-name-routing.module.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangeToolNamePageRoutingModule": function() { return /* binding */ ChangeToolNamePageRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _change_tool_name_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./change-tool-name.page */ 89912);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);




const routes = [
    {
        path: '',
        component: _change_tool_name_page__WEBPACK_IMPORTED_MODULE_0__.ChangeToolNamePage
    }
];
class ChangeToolNamePageRoutingModule {
}
ChangeToolNamePageRoutingModule.ɵfac = function ChangeToolNamePageRoutingModule_Factory(t) { return new (t || ChangeToolNamePageRoutingModule)(); };
ChangeToolNamePageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ChangeToolNamePageRoutingModule });
ChangeToolNamePageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ChangeToolNamePageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 7246:
/*!*******************************************************************!*\
  !*** ./src/app/pages/change-tool-name/change-tool-name.module.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangeToolNamePageModule": function() { return /* binding */ ChangeToolNamePageModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 81864);
/* harmony import */ var _change_tool_name_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./change-tool-name-routing.module */ 97232);
/* harmony import */ var _change_tool_name_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./change-tool-name.page */ 89912);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);






class ChangeToolNamePageModule {
}
ChangeToolNamePageModule.ɵfac = function ChangeToolNamePageModule_Factory(t) { return new (t || ChangeToolNamePageModule)(); };
ChangeToolNamePageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ChangeToolNamePageModule });
ChangeToolNamePageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _change_tool_name_routing_module__WEBPACK_IMPORTED_MODULE_0__.ChangeToolNamePageRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ChangeToolNamePageModule, { declarations: [_change_tool_name_page__WEBPACK_IMPORTED_MODULE_1__.ChangeToolNamePage], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
        _change_tool_name_routing_module__WEBPACK_IMPORTED_MODULE_0__.ChangeToolNamePageRoutingModule] }); })();


/***/ }),

/***/ 89912:
/*!*****************************************************************!*\
  !*** ./src/app/pages/change-tool-name/change-tool-name.page.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangeToolNamePage": function() { return /* binding */ ChangeToolNamePage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/configs/app.config */ 66626);
/* harmony import */ var src_app_models_app_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/app.model */ 20998);
/* harmony import */ var src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app-routing.module */ 90158);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ 202);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_bases_base_controller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/bases/base-controller */ 38790);
/* harmony import */ var src_app_services_state_app_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/state/app.state */ 12607);
/* harmony import */ var src_app_services_utility_carmd_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/utility/carmd.utils */ 92582);
/* harmony import */ var src_app_modals_multiple_tools_found_modal_multiple_tools_found_modal_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/modals/multiple-tools-found-modal/multiple-tools-found-modal.page */ 50016);
/* harmony import */ var src_app_modals_change_tool_name_modal_change_tool_name_modal_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/modals/change-tool-name-modal/change-tool-name-modal.page */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/helper.service */ 22486);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic/angular */ 81864);
/* harmony import */ var src_app_services_navigation_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/navigation.service */ 89565);
/* harmony import */ var src_app_services_innova_vci_service_src_connectivity_connectivity_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/innova-vci-service/src/connectivity/connectivity.service */ 27555);
/* harmony import */ var _ionic_native_ble_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/ble/ngx */ 11695);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 54364);
var _ChangeToolNamePage_instances, _ChangeToolNamePage_scanningTimeout, _ChangeToolNamePage_hasMultipleDevices, _ChangeToolNamePage_multipleToolsFoundPopupVisible, _ChangeToolNamePage_startScanDevices, _ChangeToolNamePage_addDevice, _ChangeToolNamePage_displayMultipleToolsFoundPopup;

















function ChangeToolNamePage_div_14_ion_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ion-button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function ChangeToolNamePage_div_14_ion_button_5_Template_ion_button_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r4); const device_r2 = restoredCtx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2); return ctx_r3.selectDevice(device_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const device_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](device_r2.displayName);
} }
function ChangeToolNamePage_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "h2", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2, "Please select device ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4, "to change Tool Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](5, ChangeToolNamePage_div_14_ion_button_5_Template, 2, 1, "ion-button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "ion-grid");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "ion-col", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function ChangeToolNamePage_div_14_Template_ion_col_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return ctx_r5.cancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](10, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r0.devices);
} }
class ChangeToolNamePage extends src_app_bases_base_controller__WEBPACK_IMPORTED_MODULE_4__.BaseController {
    constructor(helper, modalController, navigationService, connService, platform, zone, changeDetector, ble) {
        super('ChangeToolNamePage');
        this.helper = helper;
        this.modalController = modalController;
        this.navigationService = navigationService;
        this.connService = connService;
        this.platform = platform;
        this.zone = zone;
        this.changeDetector = changeDetector;
        this.ble = ble;
        _ChangeToolNamePage_instances.add(this);
        this.title = 'Scanning devices';
        this.isScanning = true;
        this.retry = 0;
        this.found = false;
        this.result = 'Starting scan';
        this.isCancelling = false;
        this.deviceId = '';
        this.toolName = '';
        _ChangeToolNamePage_scanningTimeout.set(this, null);
        _ChangeToolNamePage_hasMultipleDevices.set(this, false);
        _ChangeToolNamePage_multipleToolsFoundPopupVisible.set(this, false);
    }
    setStatus(result, status = '') {
        this.zone.run(() => {
            if (result != null) {
                this.resultText = result;
                this.logger.debug(this.resultText + ' - ' + status);
            }
            this.statusText = status;
        });
    }
    selectDevice(device) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            if (src_app_services_state_app_state__WEBPACK_IMPORTED_MODULE_5__.AppState.isOnAndroid) {
                console.log('Call this.ble.stopScan');
                yield this.ble.stopScan();
            }
            const modal = yield this.modalController.create({
                component: src_app_modals_change_tool_name_modal_change_tool_name_modal_page__WEBPACK_IMPORTED_MODULE_8__.ChangeToolNameModalPage,
                componentProps: {
                    toolId: device.id,
                    toolName: device.displayName
                },
                cssClass: 'app-modal-dialog-2 px-2 keyboard-active',
                showBackdrop: true,
                backdropDismiss: false
            });
            yield modal.present();
            const data = yield modal.onDidDismiss();
            if (data && data.data && data.data.newName) {
                localStorage.setItem(device.id, data.data.newName);
                return this.navigationService.popToRoot(src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_2__.RoutePath.Home);
            }
        });
    }
    ionViewWillEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            this.isScanning = false;
            this.isCancelling = false;
            this.isScanning = true;
            this.title = 'Scanning devices';
            this.result = 'Starting scan';
            let ctx = this;
            ctx.devices = [];
            (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__classPrivateFieldSet)(this, _ChangeToolNamePage_scanningTimeout, setTimeout(() => (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
                if (!this.devices || this.devices.length === 0) {
                    this.navigationService
                        .goTo(src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_2__.RoutePath.ConnectionFailed, {
                        queryParams: {
                            sourcePage: src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_2__.RoutePath.ChangeToolName,
                        },
                    })
                        .then(() => (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
                        if (src_app_services_state_app_state__WEBPACK_IMPORTED_MODULE_5__.AppState.isOnAndroid) {
                            console.log('Call this.ble.stopScan');
                            this.ble.stopScan();
                        }
                    }));
                }
            }), src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_0__.AppConfig.scanningDevicesTimeout), "f");
        });
    }
    ionViewDidEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            this.isScanning = true;
            yield (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__classPrivateFieldGet)(this, _ChangeToolNamePage_instances, "m", _ChangeToolNamePage_startScanDevices).call(this);
        });
    }
    doCancelScanning() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            this.isCancelling = true;
            this.resultText = '';
            this.statusText = 'One moment please...';
            return this.helper.popToRoot(src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_2__.RoutePath.Home).then(() => (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
                if (src_app_services_state_app_state__WEBPACK_IMPORTED_MODULE_5__.AppState.isOnAndroid) {
                    this.ble.stopScan();
                }
            }));
        });
    }
    ionViewDidLeave() {
        if ((0,tslib__WEBPACK_IMPORTED_MODULE_14__.__classPrivateFieldGet)(this, _ChangeToolNamePage_scanningTimeout, "f")) {
            clearTimeout((0,tslib__WEBPACK_IMPORTED_MODULE_14__.__classPrivateFieldGet)(this, _ChangeToolNamePage_scanningTimeout, "f"));
            (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__classPrivateFieldSet)(this, _ChangeToolNamePage_scanningTimeout, null, "f");
        }
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
    cancel(confirm = true) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            if (src_app_services_state_app_state__WEBPACK_IMPORTED_MODULE_5__.AppState.isOnDevice) {
                this.isCancelling = true;
                if (confirm) {
                    this.helper.confirm('Are you sure?', src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_0__.AppStrings.CONFIRM, () => (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
                        this.doCancelScanning();
                    }), () => {
                        this.isCancelling = false;
                    });
                }
                else {
                    this.doCancelScanning();
                }
            }
        });
    }
}
_ChangeToolNamePage_scanningTimeout = new WeakMap(), _ChangeToolNamePage_hasMultipleDevices = new WeakMap(), _ChangeToolNamePage_multipleToolsFoundPopupVisible = new WeakMap(), _ChangeToolNamePage_instances = new WeakSet(), _ChangeToolNamePage_startScanDevices = function _ChangeToolNamePage_startScanDevices() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
        if (src_app_services_state_app_state__WEBPACK_IMPORTED_MODULE_5__.AppState.isOnAndroid) {
            this.ble.stopScan().then(() => {
                this.ble.startScan([]).subscribe((btDevice) => {
                    if (btDevice['name'] && btDevice['name'].length > 0) {
                        if (lodash__WEBPACK_IMPORTED_MODULE_3___default().includes(src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_0__.SUPPORTED_BLUETOOTH_DEVICE_NAMES, btDevice['name'])) {
                            this.logger.debug('Device found', btDevice);
                            const index = this.devices.findIndex((d) => d.id === btDevice['id']);
                            if (index < 0) {
                                (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__classPrivateFieldGet)(this, _ChangeToolNamePage_instances, "m", _ChangeToolNamePage_addDevice).call(this, btDevice['id'], btDevice['name']);
                                this.isScanning = false;
                                src_app_services_utility_carmd_utils__WEBPACK_IMPORTED_MODULE_6__.CarMDUtils.refreshUI(this.changeDetector);
                            }
                            (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__classPrivateFieldSet)(this, _ChangeToolNamePage_hasMultipleDevices, this.devices.length > 1, "f");
                            if ((0,tslib__WEBPACK_IMPORTED_MODULE_14__.__classPrivateFieldGet)(this, _ChangeToolNamePage_hasMultipleDevices, "f")) {
                                (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__classPrivateFieldGet)(this, _ChangeToolNamePage_instances, "m", _ChangeToolNamePage_displayMultipleToolsFoundPopup).call(this).then();
                            }
                        }
                    }
                });
            });
        }
        else {
            let devices = yield this.connService.discoverBluetoothDevices2();
            if (devices && devices.length > 0) {
                while (devices.length) {
                    let device = devices.shift();
                    this.logger.debug('Found Pro15 device', device);
                    (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__classPrivateFieldGet)(this, _ChangeToolNamePage_instances, "m", _ChangeToolNamePage_addDevice).call(this, device['id'], device['name']);
                    this.isScanning = false;
                    src_app_services_utility_carmd_utils__WEBPACK_IMPORTED_MODULE_6__.CarMDUtils.refreshUI(this.changeDetector);
                }
                (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__classPrivateFieldSet)(this, _ChangeToolNamePage_hasMultipleDevices, this.devices.length > 1, "f");
                if ((0,tslib__WEBPACK_IMPORTED_MODULE_14__.__classPrivateFieldGet)(this, _ChangeToolNamePage_hasMultipleDevices, "f")) {
                    yield (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__classPrivateFieldGet)(this, _ChangeToolNamePage_instances, "m", _ChangeToolNamePage_displayMultipleToolsFoundPopup).call(this);
                }
            }
        }
    });
}, _ChangeToolNamePage_addDevice = function _ChangeToolNamePage_addDevice(id, name) {
    const localName = localStorage.getItem(id);
    if (localName) {
        this.devices.push(new src_app_models_app_model__WEBPACK_IMPORTED_MODULE_1__.BleData(id, localName, true));
    }
    else {
        this.devices.push(new src_app_models_app_model__WEBPACK_IMPORTED_MODULE_1__.BleData(id, name));
    }
}, _ChangeToolNamePage_displayMultipleToolsFoundPopup = function _ChangeToolNamePage_displayMultipleToolsFoundPopup() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
        if (!(0,tslib__WEBPACK_IMPORTED_MODULE_14__.__classPrivateFieldGet)(this, _ChangeToolNamePage_multipleToolsFoundPopupVisible, "f")) {
            (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__classPrivateFieldSet)(this, _ChangeToolNamePage_multipleToolsFoundPopupVisible, true, "f");
            const modal = yield this.modalController.create({
                component: src_app_modals_multiple_tools_found_modal_multiple_tools_found_modal_page__WEBPACK_IMPORTED_MODULE_7__.MultipleToolsFoundModalPage,
                showBackdrop: true,
                backdropDismiss: false,
                cssClass: 'app-modal-dialog-3 px-2',
            });
            yield modal.present();
            yield modal.onDidDismiss();
        }
    });
};
ChangeToolNamePage.ɵfac = function ChangeToolNamePage_Factory(t) { return new (t || ChangeToolNamePage)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_9__.HelperService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_15__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_app_services_navigation_service__WEBPACK_IMPORTED_MODULE_10__.NavigationService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_app_services_innova_vci_service_src_connectivity_connectivity_service__WEBPACK_IMPORTED_MODULE_11__.ConnectivityService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_15__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_13__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_13__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_ionic_native_ble_ngx__WEBPACK_IMPORTED_MODULE_12__.BLE)); };
ChangeToolNamePage.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({ type: ChangeToolNamePage, selectors: [["app-change-tool-name"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵInheritDefinitionFeature"]], decls: 15, vars: 2, consts: [[1, "ion-padding"], [1, "app-content-center-midle"], [1, "text-center", 3, "hidden"], [1, "app-spinner-wrap"], ["name", "circles", 1, "size-8"], [1, "font-size-20", "mb-5"], [1, "text-center", 3, "click"], [1, "text-secondary", "font-size-18"], ["class", "text-center w-100 app-select-device-box px-3 py-4", 4, "ngIf"], [1, "text-center", "w-100", "app-select-device-box", "px-3", "py-4"], [1, "mb-5"], ["class", "app-button mb-5", "expand", "block", 3, "click", 4, "ngFor", "ngForOf"], [1, "text-white", "font-size-18"], ["expand", "block", 1, "app-button", "mb-5", 3, "click"]], template: function ChangeToolNamePage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ion-content", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4, "Scanning devices...");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](6, "ion-spinner", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](8, "Starting scan");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "ion-grid");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](11, "ion-col", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function ChangeToolNamePage_Template_ion_col_click_11_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](12, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](13, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](14, ChangeToolNamePage_div_14_Template, 11, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("hidden", !ctx.isScanning);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.devices && ctx.devices.length > 0);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonSpinner, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonCol, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgForOf, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonButton], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGFuZ2UtdG9vbC1uYW1lLnBhZ2Uuc2NzcyJ9 */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_pages_change-tool-name_change-tool-name_module_ts-es2015.js.map