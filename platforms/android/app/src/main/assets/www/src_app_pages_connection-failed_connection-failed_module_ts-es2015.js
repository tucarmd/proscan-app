"use strict";
(self["webpackChunkcom_carmd_proscan2"] = self["webpackChunkcom_carmd_proscan2"] || []).push([["src_app_pages_connection-failed_connection-failed_module_ts"],{

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

/***/ 71758:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/connection-failed/connection-failed-routing.module.ts ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConnectionFailedPageRoutingModule": function() { return /* binding */ ConnectionFailedPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _connection_failed_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./connection-failed.page */ 48186);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);




const routes = [
    {
        path: '',
        component: _connection_failed_page__WEBPACK_IMPORTED_MODULE_0__.ConnectionFailedPage
    }
];
class ConnectionFailedPageRoutingModule {
}
ConnectionFailedPageRoutingModule.ɵfac = function ConnectionFailedPageRoutingModule_Factory(t) { return new (t || ConnectionFailedPageRoutingModule)(); };
ConnectionFailedPageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ConnectionFailedPageRoutingModule });
ConnectionFailedPageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ConnectionFailedPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 15007:
/*!*********************************************************************!*\
  !*** ./src/app/pages/connection-failed/connection-failed.module.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConnectionFailedPageModule": function() { return /* binding */ ConnectionFailedPageModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 81864);
/* harmony import */ var _connection_failed_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./connection-failed-routing.module */ 71758);
/* harmony import */ var _connection_failed_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./connection-failed.page */ 48186);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);






class ConnectionFailedPageModule {
}
ConnectionFailedPageModule.ɵfac = function ConnectionFailedPageModule_Factory(t) { return new (t || ConnectionFailedPageModule)(); };
ConnectionFailedPageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ConnectionFailedPageModule });
ConnectionFailedPageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _connection_failed_routing_module__WEBPACK_IMPORTED_MODULE_0__.ConnectionFailedPageRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ConnectionFailedPageModule, { declarations: [_connection_failed_page__WEBPACK_IMPORTED_MODULE_1__.ConnectionFailedPage], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
        _connection_failed_routing_module__WEBPACK_IMPORTED_MODULE_0__.ConnectionFailedPageRoutingModule] }); })();


/***/ }),

/***/ 48186:
/*!*******************************************************************!*\
  !*** ./src/app/pages/connection-failed/connection-failed.page.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConnectionFailedPage": function() { return /* binding */ ConnectionFailedPage; }
/* harmony export */ });
/* harmony import */ var src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/app-routing.module */ 90158);
/* harmony import */ var src_app_bases_base_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/bases/base-controller */ 38790);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_services_navigation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/navigation.service */ 89565);
/* harmony import */ var src_app_services_report_service_report_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/report-service/report-service */ 45322);
/* harmony import */ var src_app_services_vehicle_service_vehicle_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/vehicle-service/vehicle-service */ 99578);
/* harmony import */ var src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/helper.service */ 22486);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 81864);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 54364);










function ConnectionFailedPage_ion_toolbar_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-toolbar", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "ion-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Connection Failed");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ConnectionFailedPage_ion_toolbar_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-toolbar", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "ion-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Connection Failed");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
class ConnectionFailedPage extends src_app_bases_base_controller__WEBPACK_IMPORTED_MODULE_1__.BaseController {
    constructor(navigationService, reportService, vehicleService, helper, route) {
        super('ConnectionFailedPage');
        this.navigationService = navigationService;
        this.reportService = reportService;
        this.vehicleService = vehicleService;
        this.helper = helper;
        this.route = route;
        this.isRetry = false;
        this.isCanceled = false;
        this.Mileage = 0;
        this.WorkOrderNumber = '';
        this.hasDlcInfo = false;
        this.deviceId = '';
        this.toolName = '';
    }
    ionViewWillEnter() {
        this.deviceId = this.route.snapshot.queryParamMap.get('deviceId');
        this.toolName = this.route.snapshot.queryParamMap.get('toolName');
        this.sourcePage = this.route.snapshot.queryParamMap.get('sourcePage');
    }
    ngOnInit() { }
    ionViewDidEnter() {
        this.reportSession = this.reportService.getReportSession();
    }
    ionViewWillLeave() {
        // Unregister the custom back button action for this page
        this.navigationService.restoreHardwareBack();
    }
    // public initializeBackButtonCustomHandler(): void {
    //   this.unregisterBackButtonAction = this.platform.registerBackButtonAction(() => {
    //     this.customHandleBackButton();
    //   }, 10);
    // }
    // private customHandleBackButton(): void {
    //   this.goHome();
    // }
    tryAgain() {
        console.log('tryAgain click');
        this.navigationService.goTo(this.sourcePage ? this.sourcePage : src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_0__.RoutePath.VehicleLinking, { queryParams: { deviceId: this.deviceId, toolName: this.toolName } });
    }
    locateDlc() {
        let ctx = this;
        if (ctx.reportSession.hasDlc) {
            this.navigationService.goTo(src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_0__.RoutePath.DlcLocatorDetails);
        }
        else {
            if (this.reportSession.vin && this.reportSession.vin.length === 17) {
                ctx.helper.showLoading();
                ctx.vehicleService
                    .getDlcLocationByVin(this.reportSession.vin)
                    .then((result) => {
                    ctx.helper.hideLoading();
                    this.reportSession.hasDlc = true;
                    this.reportSession.dlcModel = result.data;
                    this.reportService.saveReportSession(this.reportSession);
                    this.navigationService.goTo(src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_0__.RoutePath.DlcLocatorDetails);
                })
                    .catch((err) => {
                    ctx.helper.hideLoading();
                    this.reportSession.hasDlc = false;
                    this.reportService.saveReportSession(this.reportSession);
                    this.navigationService.goTo(src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_0__.RoutePath.DlcLocatorDetails);
                });
            }
            else {
                this.navigationService.goTo(src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_0__.RoutePath.DlcLocator);
            }
        }
    }
    goHome() {
        this.reportService.deleteReportSession();
        this.helper.popToRoot(src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_0__.RoutePath.Home);
    }
}
ConnectionFailedPage.ɵfac = function ConnectionFailedPage_Factory(t) { return new (t || ConnectionFailedPage)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_navigation_service__WEBPACK_IMPORTED_MODULE_2__.NavigationService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_report_service_report_service__WEBPACK_IMPORTED_MODULE_3__.ReportServiceProvider), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_vehicle_service_vehicle_service__WEBPACK_IMPORTED_MODULE_4__.VehicleServiceProvider), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_5__.HelperService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute)); };
ConnectionFailedPage.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: ConnectionFailedPage, selectors: [["app-connection-failed"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]], decls: 24, vars: 2, consts: [[1, "ion-no-border"], ["color", "danger", "mode", "md", 4, "ngIf"], ["color", "danger", "mode", "ios", 4, "ngIf"], [1, "ion-padding"], [1, "px-4", "py-2", "bg-01"], [1, "text-center"], ["src", "assets/img/no-dlc.jpg", 2, "max-height", "65vh"], [1, "text-light"], [1, "ion-no-border", "p-2"], [1, "py-1"], [1, "text-center", "font-size-18", "mb-2", 3, "click"], ["expand", "block", 1, "app-button", 3, "click"], ["color", "danger", "expand", "block", 1, "app-button", 3, "click"], ["color", "danger", "mode", "md"], ["color", "danger", "mode", "ios"]], template: function ConnectionFailedPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ConnectionFailedPage_ion_toolbar_1_Template, 3, 0, "ion-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ConnectionFailedPage_ion_toolbar_2_Template, 3, 0, "ion-toolbar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "ion-content", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "No device detected");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Make sure the tool is connected to the vehicle's DLC, the key is turned to the run position (engine OFF), and Bluetooth is enabled on your phone or tablet.");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "ion-footer", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "ion-toolbar", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ConnectionFailedPage_Template_p_click_13_listener() { return ctx.locateDlc(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "Locate DLC");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "ion-grid");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "ion-col");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "ion-button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ConnectionFailedPage_Template_ion_button_click_19_listener() { return ctx.goHome(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "ion-col");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "ion-button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ConnectionFailedPage_Template_ion_button_click_22_listener() { return ctx.tryAgain(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "Try Again");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isAndroid);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.isAndroid);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonHeader, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonFooter, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonTitle], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25uZWN0aW9uLWZhaWxlZC5wYWdlLnNjc3MifQ== */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_pages_connection-failed_connection-failed_module_ts-es2015.js.map