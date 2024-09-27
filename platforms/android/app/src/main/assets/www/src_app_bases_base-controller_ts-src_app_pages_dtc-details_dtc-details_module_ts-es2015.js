"use strict";
(self["webpackChunkcom_carmd_proscan2"] = self["webpackChunkcom_carmd_proscan2"] || []).push([["src_app_bases_base-controller_ts-src_app_pages_dtc-details_dtc-details_module_ts"],{

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

/***/ 62191:
/*!*****************************************************************!*\
  !*** ./src/app/pages/dtc-details/dtc-details-routing.module.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DtcDetailsPageRoutingModule": function() { return /* binding */ DtcDetailsPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _dtc_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dtc-details.page */ 43430);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);




const routes = [
    {
        path: '',
        component: _dtc_details_page__WEBPACK_IMPORTED_MODULE_0__.DtcDetailsPage
    }
];
class DtcDetailsPageRoutingModule {
}
DtcDetailsPageRoutingModule.ɵfac = function DtcDetailsPageRoutingModule_Factory(t) { return new (t || DtcDetailsPageRoutingModule)(); };
DtcDetailsPageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: DtcDetailsPageRoutingModule });
DtcDetailsPageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DtcDetailsPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 67848:
/*!*********************************************************!*\
  !*** ./src/app/pages/dtc-details/dtc-details.module.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DtcDetailsPageModule": function() { return /* binding */ DtcDetailsPageModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 81864);
/* harmony import */ var _dtc_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dtc-details-routing.module */ 62191);
/* harmony import */ var _dtc_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dtc-details.page */ 43430);
/* harmony import */ var src_app_components_group_by_group_by_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/group-by/group-by-pipe */ 85805);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);







class DtcDetailsPageModule {
}
DtcDetailsPageModule.ɵfac = function DtcDetailsPageModule_Factory(t) { return new (t || DtcDetailsPageModule)(); };
DtcDetailsPageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: DtcDetailsPageModule });
DtcDetailsPageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _dtc_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.DtcDetailsPageRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](DtcDetailsPageModule, { declarations: [src_app_components_group_by_group_by_pipe__WEBPACK_IMPORTED_MODULE_2__.GroupByPipe, _dtc_details_page__WEBPACK_IMPORTED_MODULE_1__.DtcDetailsPage], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
        _dtc_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.DtcDetailsPageRoutingModule], exports: [src_app_components_group_by_group_by_pipe__WEBPACK_IMPORTED_MODULE_2__.GroupByPipe] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_bases_base-controller_ts-src_app_pages_dtc-details_dtc-details_module_ts-es2015.js.map