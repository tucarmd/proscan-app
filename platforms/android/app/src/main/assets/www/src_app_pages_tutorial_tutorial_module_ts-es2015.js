"use strict";
(self["webpackChunkcom_carmd_proscan2"] = self["webpackChunkcom_carmd_proscan2"] || []).push([["src_app_pages_tutorial_tutorial_module_ts"],{

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

/***/ 83325:
/*!***********************************************************!*\
  !*** ./src/app/pages/tutorial/tutorial-routing.module.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TutorialPageRoutingModule": function() { return /* binding */ TutorialPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _tutorial_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tutorial.page */ 66420);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);




const routes = [
    {
        path: '',
        component: _tutorial_page__WEBPACK_IMPORTED_MODULE_0__.TutorialPage
    }
];
class TutorialPageRoutingModule {
}
TutorialPageRoutingModule.ɵfac = function TutorialPageRoutingModule_Factory(t) { return new (t || TutorialPageRoutingModule)(); };
TutorialPageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: TutorialPageRoutingModule });
TutorialPageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TutorialPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 10140:
/*!***************************************************!*\
  !*** ./src/app/pages/tutorial/tutorial.module.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TutorialPageModule": function() { return /* binding */ TutorialPageModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 81864);
/* harmony import */ var _tutorial_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tutorial-routing.module */ 83325);
/* harmony import */ var _tutorial_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tutorial.page */ 66420);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);






class TutorialPageModule {
}
TutorialPageModule.ɵfac = function TutorialPageModule_Factory(t) { return new (t || TutorialPageModule)(); };
TutorialPageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: TutorialPageModule });
TutorialPageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _tutorial_routing_module__WEBPACK_IMPORTED_MODULE_0__.TutorialPageRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](TutorialPageModule, { declarations: [_tutorial_page__WEBPACK_IMPORTED_MODULE_1__.TutorialPage], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
        _tutorial_routing_module__WEBPACK_IMPORTED_MODULE_0__.TutorialPageRoutingModule] }); })();


/***/ }),

/***/ 66420:
/*!*************************************************!*\
  !*** ./src/app/pages/tutorial/tutorial.page.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TutorialPage": function() { return /* binding */ TutorialPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/app-routing.module */ 90158);
/* harmony import */ var src_app_bases_base_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/bases/base-controller */ 38790);
/* harmony import */ var src_app_services_state_user_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/state/user.state */ 2470);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 81864);
/* harmony import */ var src_app_services_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth-service/auth-service */ 44073);
/* harmony import */ var src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/helper.service */ 22486);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 54364);










const _c0 = ["slides"];
function TutorialPage_ion_toolbar_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-toolbar", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ion-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Tutorial");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function TutorialPage_ion_toolbar_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-toolbar", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ion-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Tutorial");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
class TutorialPage extends src_app_bases_base_controller__WEBPACK_IMPORTED_MODULE_1__.BaseController {
    constructor(navCtrl, navParams, authService, helper, route) {
        super('TutorialPage');
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.helper = helper;
        this.route = route;
        this.currentIndex = 0;
        this.totalSlides = 7;
        this.fromHome = false;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
    }
    ionViewDidEnter() {
        this.fromHome = this.route.snapshot.queryParamMap.get('fromHome') != null ? true : false;
        let ctx = this;
        setTimeout(() => {
            if (ctx.slides) {
                //ctx.totalSlides = Number.parseInt(ctx.slides.length().toString());
                ctx.currentIndex = Number.parseInt(ctx.slides.getActiveIndex().toString());
            }
        }, 500);
    }
    slideChanged() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.currentIndex = yield this.slides.getActiveIndex();
            if (this.currentIndex > this.totalSlides - 1) {
                this.currentIndex = this.totalSlides - 1;
            }
        });
    }
    skip() {
        this.slides.slideTo(this.totalSlides - 1, 500);
    }
    closeTutorial() {
        if (src_app_services_state_user_state__WEBPACK_IMPORTED_MODULE_2__.UserState.isAuth) {
            this.helper.popToRoot(src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_0__.RoutePath.Home).then(() => {
                this.slides.slideTo(0);
                this.currentIndex = 0;
            });
        }
        else {
            this.helper.popToRoot(src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_0__.RoutePath.Login).then(() => {
                this.slides.slideTo(0);
                this.currentIndex = 0;
            });
            ;
        }
    }
}
TutorialPage.ɵfac = function TutorialPage_Factory(t) { return new (t || TutorialPage)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavParams), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthServiceProvider), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_4__.HelperService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute)); };
TutorialPage.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: TutorialPage, selectors: [["app-tutorial"]], viewQuery: function TutorialPage_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.slides = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]], decls: 40, vars: 4, consts: [[1, "ion-no-border"], ["mode", "md", 4, "ngIf"], ["mode", "ios", 4, "ngIf"], ["pager", "true", 1, "app-tutorial-slides", 3, "ionSlideDidChange"], ["slides", ""], ["src", "assets/img/tutorial/step-1.jpg", "alt", ""], [1, "px-3", "text-left"], ["src", "assets/img/tutorial/step-2.jpg", "alt", ""], ["src", "assets/img/tutorial/step-3.jpg", "alt", ""], ["src", "assets/img/tutorial/step-4.jpg", "alt", ""], ["src", "assets/img/tutorial/step-5.jpg", "alt", ""], ["src", "assets/img/tutorial/step-6.jpg", "alt", ""], ["src", "assets/img/tutorial/step-7.jpg", "alt", ""], [1, "app-swiper-footer-btn", "mb-4", 2, "z-index", "10", 3, "hidden", "click"], [1, "text-secondary"], ["mode", "md"], ["mode", "ios"]], template: function TutorialPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, TutorialPage_ion_toolbar_1_Template, 3, 0, "ion-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, TutorialPage_ion_toolbar_2_Template, 3, 0, "ion-toolbar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "ion-slides", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ionSlideDidChange", function TutorialPage_Template_ion_slides_ionSlideDidChange_4_listener() { return ctx.slideChanged(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "ion-slide");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, " Turn ignition to the ON position. Do not start the vehicle. Plug tool in to the DLC Port. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "ion-slide");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Enter Mileage and select Start Scan");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "ion-slide");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, " If CarMD Pro Scan fails to automatically grab the VIN then scan the VIN ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "ion-slide");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](19, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "Select tool if multiple are detected");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "ion-slide");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](23, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, " Tool will begin scanning vehicle. This process may take several minutes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "ion-slide");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](27, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, " The report summary can be viewed on the app. Here you will have the option to erase all or individual codes. Your full report will be available on the web portal ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "ion-slide");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](31, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, " You can go back and view your complete or incomplete past reports through the home screen by selecting Past Reports ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TutorialPage_Template_div_click_34_listener() { return ctx.skip(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, "Skip");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TutorialPage_Template_div_click_37_listener() { return ctx.closeTutorial(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39, "Close Tutorial");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isAndroid);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isAndroid);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidden", ctx.currentIndex === ctx.totalSlides - 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidden", ctx.currentIndex !== ctx.totalSlides - 1);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonHeader, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonSlides, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonSlide, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonTitle], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0dXRvcmlhbC5wYWdlLnNjc3MifQ== */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_pages_tutorial_tutorial_module_ts-es2015.js.map