"use strict";
(self["webpackChunkcom_carmd_proscan2"] = self["webpackChunkcom_carmd_proscan2"] || []).push([["src_app_bases_base-controller_ts-src_app_modals_multiple-tools-found-modal_multiple-tools-fou-cfad06"],{

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

/***/ 24220:
/*!************************************************************************************************!*\
  !*** ./src/app/modals/multiple-tools-found-modal/multiple-tools-found-modal-routing.module.ts ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MultipleToolsFoundModalPageRoutingModule": function() { return /* binding */ MultipleToolsFoundModalPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _multiple_tools_found_modal_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./multiple-tools-found-modal.page */ 50016);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);




const routes = [
    {
        path: '',
        component: _multiple_tools_found_modal_page__WEBPACK_IMPORTED_MODULE_0__.MultipleToolsFoundModalPage
    }
];
class MultipleToolsFoundModalPageRoutingModule {
}
MultipleToolsFoundModalPageRoutingModule.ɵfac = function MultipleToolsFoundModalPageRoutingModule_Factory(t) { return new (t || MultipleToolsFoundModalPageRoutingModule)(); };
MultipleToolsFoundModalPageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: MultipleToolsFoundModalPageRoutingModule });
MultipleToolsFoundModalPageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MultipleToolsFoundModalPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 26351:
/*!****************************************************************************************!*\
  !*** ./src/app/modals/multiple-tools-found-modal/multiple-tools-found-modal.module.ts ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MultipleToolsFoundModalPageModule": function() { return /* binding */ MultipleToolsFoundModalPageModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 81864);
/* harmony import */ var _multiple_tools_found_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./multiple-tools-found-modal-routing.module */ 24220);
/* harmony import */ var _multiple_tools_found_modal_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./multiple-tools-found-modal.page */ 50016);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);






class MultipleToolsFoundModalPageModule {
}
MultipleToolsFoundModalPageModule.ɵfac = function MultipleToolsFoundModalPageModule_Factory(t) { return new (t || MultipleToolsFoundModalPageModule)(); };
MultipleToolsFoundModalPageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: MultipleToolsFoundModalPageModule });
MultipleToolsFoundModalPageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _multiple_tools_found_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__.MultipleToolsFoundModalPageRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](MultipleToolsFoundModalPageModule, { declarations: [_multiple_tools_found_modal_page__WEBPACK_IMPORTED_MODULE_1__.MultipleToolsFoundModalPage], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
        _multiple_tools_found_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__.MultipleToolsFoundModalPageRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_bases_base-controller_ts-src_app_modals_multiple-tools-found-modal_multiple-tools-fou-cfad06-es2015.js.map