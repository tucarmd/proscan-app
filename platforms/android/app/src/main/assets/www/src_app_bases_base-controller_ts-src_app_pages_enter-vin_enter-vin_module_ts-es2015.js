"use strict";
(self["webpackChunkcom_carmd_proscan2"] = self["webpackChunkcom_carmd_proscan2"] || []).push([["src_app_bases_base-controller_ts-src_app_pages_enter-vin_enter-vin_module_ts"],{

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

/***/ 22371:
/*!*************************************************************!*\
  !*** ./src/app/pages/enter-vin/enter-vin-routing.module.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnterVinPageRoutingModule": function() { return /* binding */ EnterVinPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _enter_vin_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enter-vin.page */ 33971);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);




const routes = [
    {
        path: '',
        component: _enter_vin_page__WEBPACK_IMPORTED_MODULE_0__.EnterVinPage
    }
];
class EnterVinPageRoutingModule {
}
EnterVinPageRoutingModule.ɵfac = function EnterVinPageRoutingModule_Factory(t) { return new (t || EnterVinPageRoutingModule)(); };
EnterVinPageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: EnterVinPageRoutingModule });
EnterVinPageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](EnterVinPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 81755:
/*!*****************************************************!*\
  !*** ./src/app/pages/enter-vin/enter-vin.module.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnterVinPageModule": function() { return /* binding */ EnterVinPageModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 81864);
/* harmony import */ var _enter_vin_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enter-vin-routing.module */ 22371);
/* harmony import */ var _enter_vin_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enter-vin.page */ 33971);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);






class EnterVinPageModule {
}
EnterVinPageModule.ɵfac = function EnterVinPageModule_Factory(t) { return new (t || EnterVinPageModule)(); };
EnterVinPageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: EnterVinPageModule });
EnterVinPageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _enter_vin_routing_module__WEBPACK_IMPORTED_MODULE_0__.EnterVinPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](EnterVinPageModule, { declarations: [_enter_vin_page__WEBPACK_IMPORTED_MODULE_1__.EnterVinPage], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
        _enter_vin_routing_module__WEBPACK_IMPORTED_MODULE_0__.EnterVinPageRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_bases_base-controller_ts-src_app_pages_enter-vin_enter-vin_module_ts-es2015.js.map