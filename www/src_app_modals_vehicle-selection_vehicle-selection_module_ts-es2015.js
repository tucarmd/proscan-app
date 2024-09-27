"use strict";
(self["webpackChunkcom_carmd_proscan2"] = self["webpackChunkcom_carmd_proscan2"] || []).push([["src_app_modals_vehicle-selection_vehicle-selection_module_ts"],{

/***/ 25611:
/*!******************************************************************************!*\
  !*** ./src/app/modals/vehicle-selection/vehicle-selection-routing.module.ts ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VehicleSelectionPageRoutingModule": function() { return /* binding */ VehicleSelectionPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _vehicle_selection_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vehicle-selection.page */ 31452);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);




const routes = [
    {
        path: '',
        component: _vehicle_selection_page__WEBPACK_IMPORTED_MODULE_0__.VehicleSelectionPage
    }
];
class VehicleSelectionPageRoutingModule {
}
VehicleSelectionPageRoutingModule.ɵfac = function VehicleSelectionPageRoutingModule_Factory(t) { return new (t || VehicleSelectionPageRoutingModule)(); };
VehicleSelectionPageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: VehicleSelectionPageRoutingModule });
VehicleSelectionPageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](VehicleSelectionPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 95210:
/*!**********************************************************************!*\
  !*** ./src/app/modals/vehicle-selection/vehicle-selection.module.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VehicleSelectionPageModule": function() { return /* binding */ VehicleSelectionPageModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 81864);
/* harmony import */ var _vehicle_selection_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vehicle-selection-routing.module */ 25611);
/* harmony import */ var _vehicle_selection_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vehicle-selection.page */ 31452);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);






class VehicleSelectionPageModule {
}
VehicleSelectionPageModule.ɵfac = function VehicleSelectionPageModule_Factory(t) { return new (t || VehicleSelectionPageModule)(); };
VehicleSelectionPageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: VehicleSelectionPageModule });
VehicleSelectionPageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _vehicle_selection_routing_module__WEBPACK_IMPORTED_MODULE_0__.VehicleSelectionPageRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](VehicleSelectionPageModule, { declarations: [_vehicle_selection_page__WEBPACK_IMPORTED_MODULE_1__.VehicleSelectionPage], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
        _vehicle_selection_routing_module__WEBPACK_IMPORTED_MODULE_0__.VehicleSelectionPageRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_modals_vehicle-selection_vehicle-selection_module_ts-es2015.js.map