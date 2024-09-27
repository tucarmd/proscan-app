"use strict";
(self["webpackChunkcom_carmd_proscan2"] = self["webpackChunkcom_carmd_proscan2"] || []).push([["src_app_pages_scan-complete_scan-complete_module_ts"],{

/***/ 13651:
/*!*********************************************************************!*\
  !*** ./src/app/pages/scan-complete/scan-complete-routing.module.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScanCompletePageRoutingModule": function() { return /* binding */ ScanCompletePageRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _scan_complete_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scan-complete.page */ 61415);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);




const routes = [
    {
        path: '',
        component: _scan_complete_page__WEBPACK_IMPORTED_MODULE_0__.ScanCompletePage
    }
];
class ScanCompletePageRoutingModule {
}
ScanCompletePageRoutingModule.ɵfac = function ScanCompletePageRoutingModule_Factory(t) { return new (t || ScanCompletePageRoutingModule)(); };
ScanCompletePageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ScanCompletePageRoutingModule });
ScanCompletePageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ScanCompletePageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 93375:
/*!*************************************************************!*\
  !*** ./src/app/pages/scan-complete/scan-complete.module.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScanCompletePageModule": function() { return /* binding */ ScanCompletePageModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 81864);
/* harmony import */ var _scan_complete_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scan-complete-routing.module */ 13651);
/* harmony import */ var _scan_complete_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scan-complete.page */ 61415);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);






class ScanCompletePageModule {
}
ScanCompletePageModule.ɵfac = function ScanCompletePageModule_Factory(t) { return new (t || ScanCompletePageModule)(); };
ScanCompletePageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ScanCompletePageModule });
ScanCompletePageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _scan_complete_routing_module__WEBPACK_IMPORTED_MODULE_0__.ScanCompletePageRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ScanCompletePageModule, { declarations: [_scan_complete_page__WEBPACK_IMPORTED_MODULE_1__.ScanCompletePage], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
        _scan_complete_routing_module__WEBPACK_IMPORTED_MODULE_0__.ScanCompletePageRoutingModule] }); })();


/***/ }),

/***/ 61415:
/*!***********************************************************!*\
  !*** ./src/app/pages/scan-complete/scan-complete.page.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScanCompletePage": function() { return /* binding */ ScanCompletePage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/app-routing.module */ 90158);
/* harmony import */ var src_app_bases_base_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/bases/base-controller */ 38790);
/* harmony import */ var _dtc_details_dtc_details_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dtc-details/dtc-details.page */ 43430);
/* harmony import */ var _dtc_erase_dtc_erase_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dtc-erase/dtc-erase.page */ 31632);
/* harmony import */ var src_app_services_state_app_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/state/app.state */ 12607);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 81864);
/* harmony import */ var src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/helper.service */ 22486);
/* harmony import */ var src_app_services_report_service_report_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/report-service/report-service */ 45322);
/* harmony import */ var src_app_services_innova_vci_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/innova-vci.service */ 7860);
/* harmony import */ var src_app_services_navigation_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/navigation.service */ 89565);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 54364);













const _c0 = ["content"];
function ScanCompletePage_ion_toolbar_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-toolbar", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "ion-title", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("color", ctx_r0.incompleteReport ? "danger" : "secondary");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", ctx_r0.incompleteReport, "Report");
} }
function ScanCompletePage_ion_toolbar_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-toolbar", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "ion-title", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("color", ctx_r1.incompleteReport ? "danger" : "secondary");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", ctx_r1.incompleteReport, "Report");
} }
function ScanCompletePage_ion_item_34_ion_col_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-col", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Erase");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function ScanCompletePage_ion_item_34_ion_icon_16_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ScanCompletePage_ion_item_34_ion_icon_16_Template_ion_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return ctx_r13.viewMilDtc(ctx_r13.PowertrainCodes.primaryCode); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function ScanCompletePage_ion_item_34_ion_col_17_ion_icon_1_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-icon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ScanCompletePage_ion_item_34_ion_col_17_ion_icon_1_Template_ion_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3); return ctx_r16.eraseDtcs(0, "", 0, 0, true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function ScanCompletePage_ion_item_34_ion_col_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-col", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, ScanCompletePage_ion_item_34_ion_col_17_ion_icon_1_Template, 1, 0, "ion-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r10.PowertrainCodes.primaryCode);
} }
function ScanCompletePage_ion_item_34_ion_icon_24_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ScanCompletePage_ion_item_34_ion_icon_24_Template_ion_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return ctx_r18.viewObdDtcs(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function ScanCompletePage_ion_item_34_ion_col_25_ion_icon_1_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-icon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ScanCompletePage_ion_item_34_ion_col_25_ion_icon_1_Template_ion_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3); return ctx_r21.eraseDtcs(0, "", 0, 0, true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function ScanCompletePage_ion_item_34_ion_col_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-col", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, ScanCompletePage_ion_item_34_ion_col_25_ion_icon_1_Template, 1, 0, "ion-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r12.totalOBDCodes > 0);
} }
function ScanCompletePage_ion_item_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-item", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "ion-grid", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "ion-row", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "ion-col", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "OBD DTC Codes");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "ion-col", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, "DTC");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "ion-col", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, "Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](9, ScanCompletePage_ion_item_34_ion_col_9_Template, 2, 0, "ion-col", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "ion-col", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12, "MIL DTC");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "ion-col", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "ion-col", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](16, ScanCompletePage_ion_item_34_ion_icon_16_Template, 1, 0, "ion-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](17, ScanCompletePage_ion_item_34_ion_col_17_Template, 2, 1, "ion-col", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "ion-col", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](20, "Other OBD DTC Codes");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "ion-col", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](23, "ion-col", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](24, ScanCompletePage_ion_item_34_ion_icon_24_Template, 1, 0, "ion-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](25, ScanCompletePage_ion_item_34_ion_col_25_Template, 2, 1, "ion-col", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("size", ctx_r2.showButtonEraseDtcs ? 6 : 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.showButtonEraseDtcs);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("size", ctx_r2.showButtonEraseDtcs ? 6 : 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r2.PowertrainCodes.primaryCode ? 1 : 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.PowertrainCodes.primaryCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.showButtonEraseDtcs && !ctx_r2.isErasedOBDDtcs);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("size", ctx_r2.showButtonEraseDtcs ? 6 : 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r2.totalOBDCodes);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.totalOBDCodes > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.showButtonEraseDtcs && !ctx_r2.isErasedOBDDtcs);
} }
function ScanCompletePage_ion_item_35_ion_col_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-col", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Erase");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function ScanCompletePage_ion_item_35_ion_row_10_ion_col_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-col", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const module_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("size", ctx_r26.showButtonEraseDtcs ? 6 : 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](module_r25.name);
} }
function ScanCompletePage_ion_item_35_ion_row_10_ion_col_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-col", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const module_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("size", ctx_r27.showButtonEraseDtcs ? 6 : 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](module_r25.name);
} }
function ScanCompletePage_ion_item_35_ion_row_10_ion_icon_6_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ScanCompletePage_ion_item_35_ion_row_10_ion_icon_6_Template_ion_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r34); const module_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit; const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return ctx_r32.viewDtcDetails(module_r25.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function ScanCompletePage_ion_item_35_ion_row_10_ion_col_7_ion_icon_1_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-icon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ScanCompletePage_ion_item_35_ion_row_10_ion_col_7_ion_icon_1_Template_ion_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r38); const module_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2).$implicit; const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return ctx_r36.eraseDtcs(module_r25.id, module_r25.name, module_r25.system, module_r25.subSystem, false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function ScanCompletePage_ion_item_35_ion_row_10_ion_col_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-col", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, ScanCompletePage_ion_item_35_ion_row_10_ion_col_7_ion_icon_1_Template, 1, 0, "ion-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const module_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", module_r25.dtcCount > 0 && !module_r25.isErased);
} }
function ScanCompletePage_ion_item_35_ion_row_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, ScanCompletePage_ion_item_35_ion_row_10_ion_col_1_Template, 2, 2, "ion-col", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, ScanCompletePage_ion_item_35_ion_row_10_ion_col_2_Template, 3, 2, "ion-col", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "ion-col", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "ion-col", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](6, ScanCompletePage_ion_item_35_ion_row_10_ion_icon_6_Template, 1, 0, "ion-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](7, ScanCompletePage_ion_item_35_ion_row_10_ion_col_7_Template, 2, 1, "ion-col", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const module_r25 = ctx.$implicit;
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !module_r25.isErased);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", module_r25.isErased);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](module_r25.dtcCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", module_r25.dtcCount > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r24.showButtonEraseDtcs);
} }
function ScanCompletePage_ion_item_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-item", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "ion-grid", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "ion-row", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "ion-col", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "Failed Modules");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "ion-col", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, "DTC");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "ion-col", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, "Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](9, ScanCompletePage_ion_item_35_ion_col_9_Template, 2, 0, "ion-col", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](10, ScanCompletePage_ion_item_35_ion_row_10_Template, 8, 5, "ion-row", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("size", ctx_r3.showButtonEraseDtcs ? 6 : 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r3.showButtonEraseDtcs);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r3.ModulesWithDTC);
} }
function ScanCompletePage_ion_button_37_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ScanCompletePage_ion_button_37_Template_ion_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r41); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r40.viewModulesWithoutDTC(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r4.btnViewModulesText);
} }
function ScanCompletePage_ion_item_38_ion_row_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "ion-col", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "ion-col", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const module_r43 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](module_r43.name);
} }
function ScanCompletePage_ion_item_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-item", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "ion-grid", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "ion-row", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "ion-col", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "System");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "ion-col", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, "DTC");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](7, ScanCompletePage_ion_item_38_ion_row_7_Template, 5, 1, "ion-row", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r5.ModulesWithoutDTC);
} }
function ScanCompletePage_div_39_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "ion-button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ScanCompletePage_div_39_Template_ion_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r45); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r44.rescan(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "Rescan");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function ScanCompletePage_ion_col_47_Template(rf, ctx) { if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "ion-button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ScanCompletePage_ion_col_47_Template_ion_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r47); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r46.eraseAllDtcs(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "Erase All");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
class ScanCompletePage extends src_app_bases_base_controller__WEBPACK_IMPORTED_MODULE_1__.BaseController {
    constructor(navCtrl, navParams, helper, modalCtrl, reportService, innovaVciService, navigationService) {
        super('ScanCompletePage');
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.helper = helper;
        this.modalCtrl = modalCtrl;
        this.reportService = reportService;
        this.innovaVciService = innovaVciService;
        this.navigationService = navigationService;
        this.WorkOrderNumber = '';
        this.ReportId = '';
        this.ModulesScannedCount = 0;
        this.VehicleName = '';
        this.VIN = '';
        this.Mileage = 0;
        this.TotalDTCCount = 0;
        this.fromHistoryPage = false;
        this.isViewModulesWithoutDTC = false;
        this.showButtonEraseDtcs = true;
        this.btnViewModulesText = 'Click to view good modules';
        this.incompleteReport = '';
        this.isErased = false;
        this.isErasedOBDDtcs = false;
        this.erasedModuleIds = [];
        this.deviceId = '';
        this.totalOBDCodes = 0;
    }
    ngOnInit() { }
    ionViewWillEnter() {
        this.erasedModuleIds = [];
        this.deviceId = this.navigationService.getQueryParam('deviceId');
        this.ReportId = this.navigationService.getQueryParam('reportId');
        this.fromHistoryPage = this.helper.coerceBooleanProperty(this.navigationService.getQueryParam('fromHistory'));
        if (this.fromHistoryPage) {
            this.showButtonEraseDtcs = false;
        }
        else {
            this.showButtonEraseDtcs = true;
        }
    }
    ionViewDidEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            this.isErased = false;
            yield this.loadReport();
        });
    }
    loadReport() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            let ctx = this;
            yield ctx.helper.showLoading();
            this.report = yield ctx.reportService.getReport(ctx.ReportId);
            if (this.report) {
                this.WorkOrderNumber = this.report.workOrderNumber;
                this.ReportNumber = this.report.reportNumber;
                if (this.report.powertrainCodes) {
                    this.PowertrainCodes = this.report.powertrainCodes;
                    this.totalOBDCodes = this.PowertrainCodes.otherCodeCount;
                }
                if (this.report.modulesWithDTC) {
                    ctx.ModulesWithDTC = this.report.modulesWithDTC.sort((d) => d.index);
                    ctx.ModulesWithDTC.forEach((item) => {
                        if (ctx.erasedModuleIds.findIndex((e) => e.id === item.id) > -1)
                            item.isErased = true;
                    });
                }
                if (this.report.modulesWithoutDTC) {
                    ctx.ModulesWithoutDTC = this.report.modulesWithoutDTC;
                }
                if (this.report.status === 1) {
                    ctx.incompleteReport = 'Incomplete ';
                }
                else {
                    ctx.incompleteReport = '';
                }
                ctx.VehicleName = this.report.ymme ? this.report.ymme : '';
                ctx.VIN = this.report.vin ? this.report.vin : '';
                ctx.Mileage = this.report.mileage;
                ctx.TotalDTCCount = this.report.totalErrorCodeCount ? this.report.totalErrorCodeCount : 0;
                ctx.ModulesScannedCount = this.report.modulesScannedCount
                    ? this.report.modulesScannedCount
                    : 0;
                if (ctx.TotalDTCCount === 0) {
                    ctx.showButtonEraseDtcs = false;
                    if (!ctx.fromHistoryPage) {
                        yield ctx.helper.hideLoading();
                        ctx.disconnectTool();
                    }
                }
            }
            yield ctx.helper.hideLoading();
        });
    }
    viewDtcDetails(moduleId) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            let modal = yield this.modalCtrl.create({
                component: _dtc_details_dtc_details_page__WEBPACK_IMPORTED_MODULE_2__.DtcDetailsPage,
                componentProps: { ReportModel: this.report, ModuleId: moduleId },
            });
            modal.present();
        });
    }
    viewObdDtcs() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _dtc_details_dtc_details_page__WEBPACK_IMPORTED_MODULE_2__.DtcDetailsPage,
                componentProps: { DisplayOBDCodes: true, StoredCodes: this.PowertrainCodes.storedCodes, PendingCodes: this.PowertrainCodes.pendingCodes, PermanentCodes: this.PowertrainCodes.permanentCodes },
            });
            modal.present();
        });
    }
    viewMilDtc(milDtc) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            let modal = yield this.modalCtrl.create({
                component: _dtc_details_dtc_details_page__WEBPACK_IMPORTED_MODULE_2__.DtcDetailsPage,
                componentProps: { MilDTC: milDtc },
            });
            modal.present();
        });
    }
    viewModulesWithoutDTC() {
        this.isViewModulesWithoutDTC = !this.isViewModulesWithoutDTC;
        if (this.isViewModulesWithoutDTC) {
            this.btnViewModulesText = 'Click to hide good modules';
        }
        else
            this.btnViewModulesText = 'Click to view good modules';
    }
    eraseDtcs(moduleId, moduleName, system, subSystem, isEraseOBDDTCs) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            this.logger.debug(`erase dtcs ${moduleId} ${moduleName} ${system} ${subSystem}`);
            let modal = yield this.modalCtrl.create({
                component: _dtc_erase_dtc_erase_page__WEBPACK_IMPORTED_MODULE_3__.DtcErasePage,
                componentProps: {
                    ReportId: this.ReportId,
                    ModuleId: moduleId,
                    ModuleName: moduleName,
                    System: system,
                    SubSystem: subSystem,
                    IsEraseAll: false,
                    IsEraseOBDDTCs: isEraseOBDDTCs
                },
            });
            modal.present();
            const { data } = yield modal.onDidDismiss();
            if (data) {
                if (isEraseOBDDTCs) {
                    if (data.isErased) {
                        this.isErasedOBDDtcs = data.isErased;
                    }
                    else {
                        this.helper.alert('Unable to erase OBD DTC Codes. Please try again.');
                    }
                }
                else {
                    if (data.isErased) {
                        this.isErased = data.isErased;
                        this.ModulesWithDTC.forEach((item) => {
                            if (item.id === moduleId)
                                item.isErased = true;
                        });
                    }
                    else {
                        this.helper.alert('Unable to erase dtcs of module: ' +
                            moduleName +
                            '. Please try again.');
                    }
                }
            }
        });
    }
    eraseAllDtcs() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            let modal = yield this.modalCtrl.create({
                component: _dtc_erase_dtc_erase_page__WEBPACK_IMPORTED_MODULE_3__.DtcErasePage,
                componentProps: { ReportId: this.ReportId, IsEraseAll: true },
            });
            modal.present();
            const { data } = yield modal.onDidDismiss();
            if (data) {
                if (data.isErased) {
                    this.isErased = data.isErased;
                    this.isErasedOBDDtcs = data.isErased;
                    if (this.ModulesWithDTC && this.ModulesWithDTC.length) {
                        this.ModulesWithDTC.forEach((item) => {
                            item.isErased = true;
                        });
                    }
                }
                else {
                    this.helper.alert('Unable to erase all dtcs. Please try again.');
                }
            }
        });
    }
    backToPastReport() {
        this.helper.goTo(src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_0__.RoutePath.ReportHistory);
    }
    goHome() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            this.reportService.deleteReportSession();
            return this.helper.popToRoot(src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_0__.RoutePath.Home).then(() => (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
                yield this.innovaVciService.disconnect(true, this.deviceId);
            }));
        });
    }
    rescan() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            this.navigationService.goTo(src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_0__.RoutePath.VehicleLinking, {
                queryParams: { isRescan: 'true' },
            });
        });
    }
    disconnectTool(goHome = false) {
        let ctx = this;
        if (src_app_services_state_app_state__WEBPACK_IMPORTED_MODULE_4__.AppState.isOnDevice) {
            ctx.helper.hideLoading();
            if (goHome) {
                ctx.reportService.deleteReportSession();
                this.helper.popToRoot(src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_0__.RoutePath.Home);
            }
        }
    }
    done() {
        if (this.fromHistoryPage) {
            this.backToPastReport();
        }
        else {
            this.goHome();
        }
    }
}
ScanCompletePage.ɵfac = function ScanCompletePage_Factory(t) { return new (t || ScanCompletePage)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_11__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_11__.NavParams), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_5__.HelperService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_services_report_service_report_service__WEBPACK_IMPORTED_MODULE_6__.ReportServiceProvider), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_services_innova_vci_service__WEBPACK_IMPORTED_MODULE_7__.InnovaVCIService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_services_navigation_service__WEBPACK_IMPORTED_MODULE_8__.NavigationService)); };
ScanCompletePage.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: ScanCompletePage, selectors: [["app-scan-complete"]], viewQuery: function ScanCompletePage_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵInheritDefinitionFeature"]], decls: 48, vars: 17, consts: [[1, "ion-no-border"], ["mode", "md", 3, "color", 4, "ngIf"], ["mode", "ios", 3, "color", 4, "ngIf"], [1, "ion-padding"], [1, "app-report-history", "py-3"], ["lines", "none"], ["lines", "none", "class", "ion-no-padding", 4, "ngIf"], [1, "mt-2", "mb-4-01"], ["type", "button", "class", "app-button w-100", 3, "click", 4, "ngIf"], ["class", "mt-2 mb-4-01", 4, "ngIf"], [1, "ion-no-border", "p-2"], [1, "py-1"], [1, "text-center"], ["type", "submit", "expand", "block", 1, "app-button", 3, "click"], [4, "ngIf"], ["mode", "md", 3, "color"], [2, "color", "white"], ["mode", "ios", 3, "color"], ["lines", "none", 1, "ion-no-padding"], [1, "app-grid-table"], [1, "app-grid-th"], [3, "size"], ["size", "2", 1, "ion-text-center"], ["size", "2", 1, "ion-text-center", 2, "padding-left", "0", "padding-right", "0"], ["style", "padding-left: 0; padding-right: 0;", "size", "2", "class", "ion-text-center", 4, "ngIf"], ["src", "assets/svg/info.svg", "class", "font-size-25", 3, "click", 4, "ngIf"], ["size", "2", "class", "ion-text-center", 4, "ngIf"], ["src", "assets/svg/info.svg", 1, "font-size-25", 3, "click"], ["class", "icon-proscan-delete font-size-25", "src", "assets/svg/delete.svg", 3, "click", 4, "ngIf"], ["src", "assets/svg/delete.svg", 1, "icon-proscan-delete", "font-size-25", 3, "click"], [4, "ngFor", "ngForOf"], [3, "size", 4, "ngIf"], [2, "color", "gray"], ["type", "button", 1, "app-button", "w-100", 3, "click"], ["size", "9"], ["size", "3", 1, "ion-text-center"], ["color", "danger", "expand", "block", 1, "app-button", 3, "click"]], template: function ScanCompletePage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, ScanCompletePage_ion_toolbar_1_Template, 3, 2, "ion-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, ScanCompletePage_ion_toolbar_2_Template, 3, 2, "ion-toolbar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "ion-content", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "ion-list", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "ion-item", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, "Report ID:");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "ion-item", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10, "Work Order Number:");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "ion-item", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14, "Vehicle:");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "ion-item", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](18, "VIN:");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "ion-item", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](22, "Mileage:");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](23, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](25, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "ion-item", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](27, "Active Modules:");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](28, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](30, "ion-item", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](31, "Total DTC Count:");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](32, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](34, ScanCompletePage_ion_item_34_Template, 26, 10, "ion-item", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](35, ScanCompletePage_ion_item_35_Template, 11, 3, "ion-item", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](36, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](37, ScanCompletePage_ion_button_37_Template, 2, 1, "ion-button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](38, ScanCompletePage_ion_item_38_Template, 8, 1, "ion-item", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](39, ScanCompletePage_div_39_Template, 3, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](40, "ion-footer", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](41, "ion-toolbar", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](42, "ion-grid");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](43, "ion-row", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](44, "ion-col");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](45, "ion-button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ScanCompletePage_Template_ion_button_click_45_listener() { return ctx.done(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](46, "Done");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](47, ScanCompletePage_ion_col_47_Template, 3, 0, "ion-col", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.isAndroid);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.isAndroid);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.ReportNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.WorkOrderNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.VehicleName);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.VIN);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](25, 15, ctx.Mileage));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.ModulesScannedCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.TotalDTCCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.PowertrainCodes);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.ModulesWithDTC && ctx.ModulesWithDTC.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.ModulesWithoutDTC && ctx.ModulesWithoutDTC.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.isViewModulesWithoutDTC);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.isErased);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.fromHistoryPage);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonHeader, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonFooter, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonIcon, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.DecimalPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzY2FuLWNvbXBsZXRlLnBhZ2Uuc2NzcyJ9 */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_pages_scan-complete_scan-complete_module_ts-es2015.js.map