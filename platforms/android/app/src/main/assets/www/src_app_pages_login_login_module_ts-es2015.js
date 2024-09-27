"use strict";
(self["webpackChunkcom_carmd_proscan2"] = self["webpackChunkcom_carmd_proscan2"] || []).push([["src_app_pages_login_login_module_ts"],{

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

/***/ 73403:
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": function() { return /* binding */ LoginPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 3058);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
class LoginPageRoutingModule {
}
LoginPageRoutingModule.ɵfac = function LoginPageRoutingModule_Factory(t) { return new (t || LoginPageRoutingModule)(); };
LoginPageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: LoginPageRoutingModule });
LoginPageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](LoginPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 21053:
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": function() { return /* binding */ LoginPageModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 81864);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 73403);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 3058);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);







class LoginPageModule {
}
LoginPageModule.ɵfac = function LoginPageModule_Factory(t) { return new (t || LoginPageModule)(); };
LoginPageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: LoginPageModule });
LoginPageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](LoginPageModule, { declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
        _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule] }); })();


/***/ }),

/***/ 3058:
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": function() { return /* binding */ LoginPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/app-routing.module */ 90158);
/* harmony import */ var src_app_bases_base_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/bases/base-controller */ 38790);
/* harmony import */ var src_app_models_app_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/app.constant */ 99888);
/* harmony import */ var src_app_services_state_app_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/state/app.state */ 12607);
/* harmony import */ var src_app_services_state_user_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/state/user.state */ 2470);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 81864);
/* harmony import */ var src_app_services_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth-service/auth-service */ 44073);
/* harmony import */ var src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/helper.service */ 22486);
/* harmony import */ var src_app_services_navigation_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/navigation.service */ 89565);
/* harmony import */ var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/keyboard/ngx */ 616);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 54364);















function LoginPage_div_7_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Email/Phone # is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function LoginPage_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, LoginPage_div_7_span_1_Template, 2, 0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.loginForm.controls.email.errors.required);
} }
function LoginPage_span_10_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Password is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function LoginPage_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, LoginPage_span_10_span_1_Template, 2, 0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r1.loginForm.controls.password.errors.required);
} }
const _c0 = function (a0) { return { "mt--100": a0 }; };
class LoginPage extends src_app_bases_base_controller__WEBPACK_IMPORTED_MODULE_1__.BaseController {
    constructor(navCtrl, authService, formBuilder, helper, navigationService, alert, platform, keyboard, zone) {
        super('LoginPage');
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.helper = helper;
        this.navigationService = navigationService;
        this.alert = alert;
        this.platform = platform;
        this.keyboard = keyboard;
        this.zone = zone;
        this.isLoading = false;
        this.errorMessage = null;
        this.formSubmitted = false;
        this.isKeyboardActive = false;
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required])],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required])],
            rememberMe: [localStorage.getItem(src_app_models_app_constant__WEBPACK_IMPORTED_MODULE_2__.StorageKeys.USER_NAME) ? true : false],
        });
    }
    ionViewWillEnter() {
        this.keyboard.onKeyboardWillShow().subscribe((event) => {
            this.zone.run(() => {
                this.isKeyboardActive = true;
            });
        });
        this.keyboard.onKeyboardWillHide().subscribe((event) => {
            this.zone.run(() => {
                this.isKeyboardActive = false;
            });
        });
    }
    ionViewDidEnter() {
        if (localStorage.getItem(src_app_models_app_constant__WEBPACK_IMPORTED_MODULE_2__.StorageKeys.USER_NAME)) {
            this.loginForm.controls.email.setValue(localStorage.getItem(src_app_models_app_constant__WEBPACK_IMPORTED_MODULE_2__.StorageKeys.USER_NAME));
        }
        if (src_app_services_state_user_state__WEBPACK_IMPORTED_MODULE_4__.UserState.isAuth) {
            this.navigationService.popToRoot(src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_0__.RoutePath.Home);
        }
        else {
            if (!localStorage.getItem(src_app_models_app_constant__WEBPACK_IMPORTED_MODULE_2__.StorageKeys.FIRST_RUN)) {
                localStorage.setItem(src_app_models_app_constant__WEBPACK_IMPORTED_MODULE_2__.StorageKeys.FIRST_RUN, 'done');
                setTimeout(() => {
                    this.navigationService.goTo(src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_0__.RoutePath.Tutorial);
                }, 500);
            }
        }
    }
    goToForgotPassword() {
        this.navigationService.goTo(src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_0__.RoutePath.ForgotPassword);
    }
    hideKeyboard() {
        if (src_app_services_state_app_state__WEBPACK_IMPORTED_MODULE_3__.AppState.isOnDevice) {
            if (this.keyboard.isVisible) {
                this.keyboard.hide();
            }
        }
    }
    doLogin(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            this.hideKeyboard();
            this.isLoading = true;
            this.errorMessage = null;
            let u = this.loginForm.value.email;
            let p = this.loginForm.value.password;
            const resp = yield this.authService.login(u, p);
            this.isLoading = false;
            if (resp && resp.success) {
                this.authService.setUserInfo(resp.data);
                yield this.helper.hideLoading();
                if (this.loginForm.value.rememberMe) {
                    localStorage.setItem(src_app_models_app_constant__WEBPACK_IMPORTED_MODULE_2__.StorageKeys.USER_NAME, u);
                }
                else {
                    localStorage.removeItem(src_app_models_app_constant__WEBPACK_IMPORTED_MODULE_2__.StorageKeys.USER_NAME);
                }
                this.navigationService
                    .popToRoot(src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_0__.RoutePath.Home)
                    .then(() => {
                    this.formSubmitted = false;
                    this.loginForm.reset();
                });
            }
            else {
                this.formSubmitted = false;
                if (resp && resp.message) {
                    if (resp.message.code === 2009) {
                        const confirm = this.alert.create({
                            header: 'Login Failed',
                            message: 'Account not active. Please check email for activation link.',
                            buttons: [
                                {
                                    text: 'Close',
                                    role: 'cancel',
                                    handler: (data) => {
                                        this.logger.debug('Close clicked');
                                    },
                                },
                                {
                                    text: 'Contact Us',
                                    handler: (data) => {
                                        this.logger.debug('Contact Us clicked');
                                        window.open(src_app_models_app_constant__WEBPACK_IMPORTED_MODULE_2__.AppConstants.contactUsUrl, '_system', 'location=yes');
                                    },
                                },
                            ],
                        });
                        (yield confirm).present();
                    }
                    else if (resp.message.code === -1) {
                        this.errorMessage = 'Make sure Wi-Fi or cellular data is turned on, then try again.';
                    }
                    else {
                        this.errorMessage = 'Login Failed. Invalid Email/Password.';
                    }
                }
                else {
                    this.errorMessage = 'Login Failed. Invalid Email/Password.';
                }
            }
        });
    }
}
LoginPage.ɵfac = function LoginPage_Factory(t) { return new (t || LoginPage)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_12__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_services_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_5__.AuthServiceProvider), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_6__.HelperService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_services_navigation_service__WEBPACK_IMPORTED_MODULE_7__.NavigationService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_12__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_12__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_8__.Keyboard), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgZone)); };
LoginPage.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: LoginPage, selectors: [["app-login"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵInheritDefinitionFeature"]], decls: 27, vars: 11, consts: [[1, "ion-padding"], [1, "app-content-center-midle", 3, "formGroup", "ngSubmit"], [1, "w-100", "px-3", 3, "ngClass"], [1, "app-form-logo"], ["src", "assets/img/its-logo.png", "alt", "Innova Telematics Solutions"], [1, "mb-4"], ["type", "email", "placeholder", "Email/Phone #", "formControlName", "email", 1, "app-input", "mb-2"], ["ion-text", "", "color", "danger", 4, "ngIf"], [1, "mb-3"], ["type", "password", "placeholder", "Password", "formControlName", "password", 1, "app-input", "mb-2", 3, "keyup.enter"], [1, "text-danger", 3, "hidden"], ["lines", "none", 1, "ion-no-padding", "no-bg"], [1, "ion-text-end", "font-size-18"], ["slot", "end", "mode", "ios", "formControlName", "rememberMe", 3, "click"], [1, "text-center", "mb-4", "mt-0"], [1, "no-line", "font-size-16", 3, "click"], ["expand", "block", "type", "submit", 1, "app-button", 3, "disabled", "click"], [1, "app-sign-up-spinner", 3, "hidden"], [1, "button-inner", 3, "hidden"], [1, "app-footer-logo"], ["src", "assets/img/CarAi_logo.png", "alt", "Innova Telematics Solutions"], ["ion-text", "", "color", "danger"], ["class", "text-danger", 4, "ngIf"], [1, "text-danger"]], template: function LoginPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-content", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngSubmit", function LoginPage_Template_form_ngSubmit_1_listener($event) { return ctx.loginForm.valid && ctx.doLogin($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](6, "ion-input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](7, LoginPage_div_7_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "ion-input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("keyup.enter", function LoginPage_Template_ion_input_keyup_enter_9_listener($event) { return ctx.loginForm.valid && ctx.doLogin($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](10, LoginPage_span_10_Template, 2, 1, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "ion-item", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "ion-label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16, "Remember me");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "ion-toggle", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function LoginPage_Template_ion_toggle_click_17_listener() { return ctx.hideKeyboard(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function LoginPage_Template_a_click_19_listener() { return ctx.goToForgotPassword(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](20, "Forgot Password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "ion-button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function LoginPage_Template_ion_button_click_21_listener() { return ctx.formSubmitted = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](22, "ion-spinner", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](23, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](24, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](26, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](9, _c0, ctx.isKeyboardActive && ctx.isAndroid));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.formSubmitted && ctx.loginForm.controls.email.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.formSubmitted && ctx.loginForm.controls.password.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("hidden", !ctx.errorMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.errorMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("hidden", !ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("hidden", ctx.isLoading);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonContent, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgClass, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.TextValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonToggle, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.BooleanValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonSpinner], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MifQ== */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_pages_login_login_module_ts-es2015.js.map