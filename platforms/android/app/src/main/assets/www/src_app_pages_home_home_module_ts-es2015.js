"use strict";
(self["webpackChunkcom_carmd_proscan2"] = self["webpackChunkcom_carmd_proscan2"] || []).push([["src_app_pages_home_home_module_ts"],{

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

/***/ 96610:
/*!***************************************************!*\
  !*** ./src/app/pages/home/home-routing.module.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": function() { return /* binding */ HomePageRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 10678);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage
    }
];
class HomePageRoutingModule {
}
HomePageRoutingModule.ɵfac = function HomePageRoutingModule_Factory(t) { return new (t || HomePageRoutingModule)(); };
HomePageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: HomePageRoutingModule });
HomePageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](HomePageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 57994:
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": function() { return /* binding */ HomePageModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 81864);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 96610);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page */ 10678);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);







class HomePageModule {
}
HomePageModule.ɵfac = function HomePageModule_Factory(t) { return new (t || HomePageModule)(); };
HomePageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: HomePageModule });
HomePageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomePageRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](HomePageModule, { declarations: [_home_page__WEBPACK_IMPORTED_MODULE_1__.HomePage], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
        _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomePageRoutingModule] }); })();


/***/ }),

/***/ 10678:
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": function() { return /* binding */ HomePage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/app-routing.module */ 90158);
/* harmony import */ var src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/configs/app.config */ 66626);
/* harmony import */ var src_app_bases_base_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/bases/base-controller */ 38790);
/* harmony import */ var src_app_models_app_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/app.constant */ 99888);
/* harmony import */ var src_app_services_state_app_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/state/app.state */ 12607);
/* harmony import */ var src_app_services_state_user_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/state/user.state */ 2470);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ionic/angular */ 81864);
/* harmony import */ var src_app_services_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/auth-service/auth-service */ 44073);
/* harmony import */ var src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/helper.service */ 22486);
/* harmony import */ var src_app_services_tool_service_tool_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/tool-service/tool-service */ 91841);
/* harmony import */ var src_app_services_report_service_report_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/report-service/report-service */ 45322);
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/network/ngx */ 95680);
/* harmony import */ var _ionic_native_open_native_settings_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/open-native-settings/ngx */ 35266);
/* harmony import */ var src_app_services_navigation_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/navigation.service */ 89565);
/* harmony import */ var _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/diagnostic/ngx */ 91089);
/* harmony import */ var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/keyboard/ngx */ 616);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 54364);





















function HomePage_span_10_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "Mileage is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} }
function HomePage_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, HomePage_span_10_span_1_Template, 2, 0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r0.homeForm.controls.mileage.invalid);
} }
function HomePage_a_30_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function HomePage_a_30_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](); return ctx_r6.viewLogs(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "View Logs");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} }
function HomePage_p_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" Software Version: ", ctx_r2.softwareVersion, " ");
} }
function HomePage_p_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" Firmware Version: ", ctx_r3.firmwareVersion, " ");
} }
function HomePage_p_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "Testing Version");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} }
class HomePage extends src_app_bases_base_controller__WEBPACK_IMPORTED_MODULE_2__.BaseController {
    constructor(platform, authService, helper, formBuilder, toolService, reportService, alertCtrl, network, openNativeSettings, navigationService, diagnostic, keyboard) {
        super('HomePage');
        this.platform = platform;
        this.authService = authService;
        this.helper = helper;
        this.formBuilder = formBuilder;
        this.toolService = toolService;
        this.reportService = reportService;
        this.alertCtrl = alertCtrl;
        this.network = network;
        this.openNativeSettings = openNativeSettings;
        this.navigationService = navigationService;
        this.diagnostic = diagnostic;
        this.keyboard = keyboard;
        this.formSubmitted = false;
        this.isKeyboardShow = false;
        this.isLoading = false;
        this.devices = [];
        this.isTesting = src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_1__.AppConfig.isDevMode;
    }
    ngOnInit() {
        this.homeForm = this.formBuilder.group({
            workOrderNo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.maxLength(10)])],
            mileage: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.minLength(1),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.maxLength(9),
                ]),
            ],
        });
    }
    ionViewWillEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, function* () {
            if (!src_app_services_state_user_state__WEBPACK_IMPORTED_MODULE_5__.UserState.isAuth) {
                this.navigationService.popToRoot(src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_0__.RoutePath.Login);
                return false;
            }
        });
    }
    ionViewDidEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, function* () {
            this.platform.ready().then(() => (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, function* () {
                this.isLoading = false;
                if (src_app_services_state_user_state__WEBPACK_IMPORTED_MODULE_5__.UserState.isAuth) {
                    this.reportSession = this.reportService.getReportSession();
                    this.softwareVersion = src_app_services_state_app_state__WEBPACK_IMPORTED_MODULE_4__.AppState.isOnDevice ? src_app_services_state_app_state__WEBPACK_IMPORTED_MODULE_4__.AppState.appVersion : null;
                    this.keyboard.onKeyboardWillHide().subscribe(() => {
                        this.isKeyboardShow = false;
                    });
                    this.keyboard.onKeyboardWillShow().subscribe(() => {
                        this.isKeyboardShow = true;
                    });
                    this.currentUser = src_app_services_state_user_state__WEBPACK_IMPORTED_MODULE_5__.UserState.user;
                    this.firmwareVersion = localStorage.getItem(src_app_models_app_constant__WEBPACK_IMPORTED_MODULE_3__.StorageKeys.FIRMWARE_VERSION);
                    this.helper.checkBluetoothPermissions();
                }
                else {
                    this.authService.logout();
                    this.navigationService.popToRoot(src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_0__.RoutePath.Login);
                }
            }));
        });
    }
    viewTutorial() {
        this.formSubmitted = false;
        this.navigationService.goTo(src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_0__.RoutePath.Tutorial);
    }
    doScanVehicle(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, function* () {
            let ctx = this;
            if (ctx.formSubmitted) {
                this.isLoading = true;
                if (src_app_services_state_app_state__WEBPACK_IMPORTED_MODULE_4__.AppState.isOnDevice) {
                    if (ctx.network.type === 'none') {
                        let confirm = ctx.alertCtrl.create({
                            header: 'No Internet Connection',
                            message: 'Make sure Wi-Fi or cellular data is turned on, then try again.',
                            buttons: [
                                {
                                    text: src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_1__.AppStrings.CANCEL,
                                    role: 'cancel',
                                    handler: () => {
                                        this.isLoading = false;
                                        this.logger.debug('Cancel clicked');
                                    },
                                },
                                {
                                    text: 'Retry',
                                    handler: () => {
                                        this.logger.debug('Retry clicked');
                                        ctx.toolService.wait(100).then(() => {
                                            ctx.doScanVehicle(null);
                                        });
                                    },
                                },
                            ],
                        });
                        yield (yield confirm).present();
                    }
                    else {
                        this.reportSession.workOrderNumber = this.homeForm.value.workOrderNo;
                        this.reportSession.mileage = this.homeForm.value.mileage;
                        this.reportService.saveReportSession(this.reportSession);
                        ctx.formSubmitted = false;
                        this.logger.debug('Work Order Number:', this.reportSession.workOrderNumber);
                        this.logger.debug('Mileage:', this.reportSession.mileage);
                        // Check Bluetooth Permission
                        let isBtEnabled = yield this.helper.checkBluetoothPermissions();
                        if (!isBtEnabled) {
                            if (src_app_services_state_app_state__WEBPACK_IMPORTED_MODULE_4__.AppState.isOnAndroid && !src_app_services_state_app_state__WEBPACK_IMPORTED_MODULE_4__.AppState.isOnAtLeastVersion(13)) {
                                this.helper.confirm('In order to detect and pair to your scan tool, please turn Bluetooth ON.', 'Bluetooth is turned OFF', () => (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, function* () {
                                    isBtEnabled = yield this.diagnostic.setBluetoothState(true);
                                    this.logger.debug('Is BT Enabled', isBtEnabled);
                                    if (isBtEnabled) {
                                        setTimeout(() => {
                                            this.navigationService
                                                .goTo(src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_0__.RoutePath.VehicleLinking)
                                                .then(() => {
                                                ctx.isLoading = false;
                                                ctx.homeForm.reset();
                                            });
                                        }, 1500);
                                    }
                                    else {
                                        this.helper.goBack();
                                    }
                                }), () => {
                                    this.helper.goBack();
                                }, 'Turn Bluetooth ON', 'Cancel');
                            }
                            else {
                                this.helper.confirm('In order to detect and pair to your scan tool, turn Bluetooth ON from your device’s settings.', 'Bluetooth is turned OFF', () => (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, function* () {
                                    this.isLoading = false;
                                    if (src_app_services_state_app_state__WEBPACK_IMPORTED_MODULE_4__.AppState.isOnAndroid) {
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
                            setTimeout(() => {
                                this.navigationService
                                    .goTo(src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_0__.RoutePath.VehicleLinking)
                                    .then(() => {
                                    ctx.isLoading = false;
                                    ctx.homeForm.reset();
                                });
                            }, 500);
                        }
                    }
                }
            }
        });
    }
    doLogout() {
        this.helper.confirm(src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_1__.AppStrings.MSG_CONFIRM_LOGOUT, src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_1__.AppStrings.CONFIRM, () => {
            this.authService.logout();
            localStorage.removeItem(src_app_models_app_constant__WEBPACK_IMPORTED_MODULE_3__.StorageKeys.USER_ID);
            localStorage.removeItem(src_app_models_app_constant__WEBPACK_IMPORTED_MODULE_3__.StorageKeys.ACCESS_KEY);
            localStorage.removeItem(src_app_models_app_constant__WEBPACK_IMPORTED_MODULE_3__.StorageKeys.USER_INFO);
            localStorage.removeItem(src_app_models_app_constant__WEBPACK_IMPORTED_MODULE_3__.StorageKeys.USER_SETTINGS);
            localStorage.removeItem(src_app_models_app_constant__WEBPACK_IMPORTED_MODULE_3__.StorageKeys.REPORT_SESSION);
            this.helper.popToRoot(src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_0__.RoutePath.Login);
        });
    }
    ionViewWillLeave() {
        // Unregister the custom back button action for this page
        this.unregisterBackButtonAction && this.unregisterBackButtonAction();
    }
    viewPastReports() {
        this.formSubmitted = false;
        this.navigationService.goTo(src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_0__.RoutePath.ReportHistory);
    }
    viewLogs() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, function* () {
            this.formSubmitted = false;
            this.navigationService.goTo(src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_0__.RoutePath.ViewLogs);
        });
    }
    lookupDlc() {
        this.formSubmitted = false;
        this.navigationService.goTo(src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_0__.RoutePath.DlcLocator);
    }
    changeToolName() {
        this.formSubmitted = false;
        this.navigationService.goTo(src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_0__.RoutePath.ChangeToolName);
    }
}
HomePage.ɵfac = function HomePage_Factory(t) { return new (t || HomePage)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_18__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_services_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_6__.AuthServiceProvider), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_7__.HelperService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_services_tool_service_tool_service__WEBPACK_IMPORTED_MODULE_8__.ToolServiceProvider), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_services_report_service_report_service__WEBPACK_IMPORTED_MODULE_9__.ReportServiceProvider), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_18__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_10__.Network), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_ionic_native_open_native_settings_ngx__WEBPACK_IMPORTED_MODULE_11__.OpenNativeSettings), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_services_navigation_service__WEBPACK_IMPORTED_MODULE_12__.NavigationService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_13__.Diagnostic), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_14__.Keyboard)); };
HomePage.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineComponent"]({ type: HomePage, selectors: [["app-home"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵInheritDefinitionFeature"]], decls: 39, vars: 10, consts: [["scroll-y", "false", 1, "ion-padding"], [1, "app-content-center-midle"], [1, "w-100", "px-3"], [3, "formGroup", "ngSubmit"], [1, "app-form-logo"], ["src", "assets/img/its-logo.png", "alt", "Innova Telematics Solutions"], [1, "mb-4"], ["type", "text", "placeholder", "Work Order Number", "formControlName", "workOrderNo", "name", "workOrderNo", "maxlength", "10", 1, "app-input", "mb-2"], ["formControlName", "mileage", "type", "tel", "placeholder", "Mileage", "pattern", "[0-9]*", "name", "mileage", "maxlength", "6", "required", "", 1, "app-input", "mb-2"], [4, "ngIf"], ["expand", "block", "type", "submit", 1, "app-button", 3, "disabled", "click"], [1, "app-sign-up-spinner", 3, "hidden"], [1, "button-inner", 3, "hidden"], ["expand", "block", 1, "app-button", 3, "click"], [1, "text-center"], [1, "no-line", "font-size-16", 3, "click"], ["class", "no-line font-size-16", 3, "click", 4, "ngIf"], ["class", "mb-3", 4, "ngIf"], [1, "ion-no-border", "p-2"], [1, "py-1", 3, "hidden"], [1, "text-center", 3, "click"], [1, "no-line", "font-size-18"], ["class", "text-danger", 4, "ngIf"], [1, "text-danger"], [1, "mb-3"]], template: function HomePage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-content", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngSubmit", function HomePage_Template_form_ngSubmit_3_listener($event) { return ctx.homeForm.valid && ctx.doScanVehicle($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](7, "ion-input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](9, "ion-input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](10, HomePage_span_10_Template, 2, 1, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](11, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](12, "ion-button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function HomePage_Template_ion_button_click_12_listener() { return ctx.formSubmitted = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](13, "ion-spinner", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](14, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](15, "Start Scan");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](16, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](17, "ion-button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function HomePage_Template_ion_button_click_17_listener() { return ctx.viewPastReports(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](18, "Past Reports");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](21, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function HomePage_Template_a_click_21_listener() { return ctx.lookupDlc(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](22, "Look up DLC?");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](24, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function HomePage_Template_a_click_24_listener() { return ctx.viewTutorial(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](25, "Tutorial");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](27, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function HomePage_Template_a_click_27_listener() { return ctx.changeToolName(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](28, "Change Tool Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](30, HomePage_a_30_Template, 2, 0, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](31, HomePage_p_31_Template, 2, 1, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](32, HomePage_p_32_Template, 2, 1, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](33, HomePage_p_33_Template, 2, 0, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](34, "ion-footer", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](35, "ion-toolbar", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](36, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function HomePage_Template_p_click_36_listener() { return ctx.doLogout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](37, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](38, "Log Out");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("formGroup", ctx.homeForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.formSubmitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("disabled", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("hidden", !ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("hidden", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.isTesting);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.softwareVersion);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.firmwareVersion);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.isTesting);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("hidden", ctx.isKeyboardShow);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_18__.IonContent, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormGroupDirective, _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.TextValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.RequiredValidator, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.IonSpinner, _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.IonFooter, _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.IonToolbar], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLnBhZ2Uuc2NzcyJ9 */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_pages_home_home_module_ts-es2015.js.map