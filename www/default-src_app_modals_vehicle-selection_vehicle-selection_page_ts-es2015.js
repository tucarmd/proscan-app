"use strict";
(self["webpackChunkcom_carmd_proscan2"] = self["webpackChunkcom_carmd_proscan2"] || []).push([["default-src_app_modals_vehicle-selection_vehicle-selection_page_ts"],{

/***/ 44676:
/*!**********************************************************************************!*\
  !*** ./src/app/modals/option-information-modal/option-information-modal.page.ts ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OptionInformationModalPage": function() { return /* binding */ OptionInformationModalPage; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 81864);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 54364);



function OptionInformationModalPage_ion_card_1_p_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r1.optionInformation.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function OptionInformationModalPage_ion_card_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-card", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-item", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-card-header", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-buttons", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OptionInformationModalPage_ion_card_1_Template_ion_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.dismiss(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "ion-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, OptionInformationModalPage_ion_card_1_p_9_Template, 2, 1, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.optionInformation.option, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r0.optionInformation.description, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.optionInformation.image);
} }
class OptionInformationModalPage {
    constructor(modalController) {
        this.modalController = modalController;
    }
    ngOnInit() {
    }
    dismiss() {
        this.modalController.dismiss();
    }
}
OptionInformationModalPage.ɵfac = function OptionInformationModalPage_Factory(t) { return new (t || OptionInformationModalPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__.ModalController)); };
OptionInformationModalPage.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OptionInformationModalPage, selectors: [["app-option-information-modal"]], inputs: { optionInformation: "optionInformation" }, decls: 2, vars: 1, consts: [[1, "app-dismiss", 3, "click"], ["class", "app-modal-middle", 4, "ngIf"], [1, "app-modal-middle"], ["lines", "none", 1, "bg-secondary"], [1, "pl-0", "app-poppins-medium", "text-white"], ["slot", "end"], [1, "text-black", 3, "click"], ["name", "close"], [1, "mb-3", "app-poppins-semi-bold", 3, "innerHTML"], ["class", "text-center app-vehicle-selection-img", 4, "ngIf"], [1, "text-center", "app-vehicle-selection-img"], ["alt", "", 3, "src"]], template: function OptionInformationModalPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OptionInformationModalPage_Template_div_click_0_listener() { return ctx.dismiss(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OptionInformationModalPage_ion_card_1_Template, 10, 3, "ion-card", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.optionInformation);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonCardHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonCardContent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvcHRpb24taW5mb3JtYXRpb24tbW9kYWwucGFnZS5zY3NzIn0= */"] });


/***/ }),

/***/ 31452:
/*!********************************************************************!*\
  !*** ./src/app/modals/vehicle-selection/vehicle-selection.page.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VehicleSelectionPage": function() { return /* binding */ VehicleSelectionPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var src_app_bases_base_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/bases/base-controller */ 38790);
/* harmony import */ var src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/configs/app.config */ 66626);
/* harmony import */ var src_app_models_app_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/app.constant */ 99888);
/* harmony import */ var src_app_models_app_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/app.model */ 20998);
/* harmony import */ var src_app_services_state_app_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/state/app.state */ 12607);
/* harmony import */ var _option_information_modal_option_information_modal_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../option-information-modal/option-information-modal.page */ 44676);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/helper.service */ 22486);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 81864);
/* harmony import */ var src_app_services_innova_vci_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/innova-vci.service */ 7860);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 1707);
var _VehicleSelectionPage_emptyRespCnt;













function VehicleSelectionPage_ion_toolbar_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-toolbar", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "ion-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Vehicle Selection");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function VehicleSelectionPage_ion_toolbar_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-toolbar", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "ion-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Vehicle Selection");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function VehicleSelectionPage_ion_card_20_ion_item_3_ion_buttons_3_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-buttons");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "ion-button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function VehicleSelectionPage_ion_card_20_ion_item_3_ion_buttons_3_Template_ion_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r11); const option_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return ctx_r9.viewOption(option_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "ion-icon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function VehicleSelectionPage_ion_card_20_ion_item_3_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-item", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function VehicleSelectionPage_ion_card_20_ion_item_3_Template_ion_item_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r13); const index_r7 = restoredCtx.index; const option_r6 = restoredCtx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return ctx_r12.selectOption(index_r7, option_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, VehicleSelectionPage_ion_card_20_ion_item_3_ion_buttons_3_Template, 3, 0, "ion-buttons", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](option_r6.option);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", option_r6.hasDetails);
} }
function VehicleSelectionPage_ion_card_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-card", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "ion-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "ion-list", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, VehicleSelectionPage_ion_card_20_ion_item_3_Template, 4, 2, "ion-item", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r2.options);
} }
function VehicleSelectionPage_ion_card_26_ion_item_3_ion_buttons_3_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-buttons");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "ion-button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function VehicleSelectionPage_ion_card_26_ion_item_3_ion_buttons_3_Template_ion_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r20); const option_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return ctx_r18.viewOption(option_r15); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "ion-icon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function VehicleSelectionPage_ion_card_26_ion_item_3_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-item", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function VehicleSelectionPage_ion_card_26_ion_item_3_Template_ion_item_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r22); const index_r16 = restoredCtx.index; const option_r15 = restoredCtx.$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return ctx_r21.selectOption(index_r16, option_r15); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, VehicleSelectionPage_ion_card_26_ion_item_3_ion_buttons_3_Template, 3, 0, "ion-buttons", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](option_r15.option);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", option_r15.hasDetails);
} }
function VehicleSelectionPage_ion_card_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-card", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "ion-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "ion-list", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, VehicleSelectionPage_ion_card_26_ion_item_3_Template, 4, 2, "ion-item", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r3.options);
} }
function VehicleSelectionPage_ion_card_32_ion_item_3_ion_buttons_3_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-buttons");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "ion-button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function VehicleSelectionPage_ion_card_32_ion_item_3_ion_buttons_3_Template_ion_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r29); const option_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return ctx_r27.viewOption(option_r24); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "ion-icon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function VehicleSelectionPage_ion_card_32_ion_item_3_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-item", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function VehicleSelectionPage_ion_card_32_ion_item_3_Template_ion_item_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r31); const index_r25 = restoredCtx.index; const option_r24 = restoredCtx.$implicit; const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return ctx_r30.selectOption(index_r25, option_r24); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, VehicleSelectionPage_ion_card_32_ion_item_3_ion_buttons_3_Template, 3, 0, "ion-buttons", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](option_r24.option);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", option_r24.hasDetails);
} }
function VehicleSelectionPage_ion_card_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-card", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "ion-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "ion-list", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, VehicleSelectionPage_ion_card_32_ion_item_3_Template, 4, 2, "ion-item", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r4.options);
} }
const SELECT_YEAR = 'Select Year';
const SELECT_MAKE = 'Select Make';
const SELECT_MODEL = 'Select Model';
const SELECT_ENGINE = 'Select Engine';
const SELECT_OPTION_1 = 'Select Option 1';
const SELECT_OPTION_2 = 'Select Option 2';
const SELECT_OPTION_3 = 'Select Option 3';
const DONE = 'Done';
class VehicleSelectionPage extends src_app_bases_base_controller__WEBPACK_IMPORTED_MODULE_0__.BaseController {
    constructor(helper, modalController, innovaVciService, ngZone) {
        super('VehicleSelectionPage');
        this.helper = helper;
        this.modalController = modalController;
        this.innovaVciService = innovaVciService;
        this.ngZone = ngZone;
        this.isViewingDetails = false;
        this.viewingOption1 = false;
        this.viewingOption2 = false;
        this.viewingOption3 = false;
        this.option1 = '';
        this.option2 = '';
        this.option3 = '';
        this.isLoading = false;
        _VehicleSelectionPage_emptyRespCnt.set(this, void 0);
    }
    ngOnInit() { }
    ionViewDidEnter() {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            if (src_app_services_state_app_state__WEBPACK_IMPORTED_MODULE_4__.AppState.isOnDevice) {
                this.listOption1 = (_a = this.ymme) === null || _a === void 0 ? void 0 : _a.options1;
            }
            else {
                this.loadDummyData();
            }
        });
    }
    get couldSubmit() {
        return this.fieldSelect === DONE;
    }
    reInitYmme(fieldSelect) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            if (fieldSelect === SELECT_OPTION_1) {
                this.option2 = this.option3 = null;
                this.listOption2 = this.listOption3 = [];
            }
            else if (fieldSelect === SELECT_OPTION_2) {
                this.option3 = null;
                this.listOption3 = [];
            }
            let result = yield this.innovaVciService.ymme_back();
            this.logger.debug('back', result);
            if (result) {
                let index = -1;
                if (result.field === SELECT_YEAR) {
                    index = result.options.findIndex((d) => d === this.ymme.year);
                    if (index > -1) {
                        yield this.helper.sleep(src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_1__.SLEEP_TIMEOUT);
                        result = yield this.innovaVciService.ymme_get(index);
                        this.logger.debug('get makes', result);
                        if (result && result.field === SELECT_MAKE) {
                            index = result.options.findIndex((d) => d === this.ymme.make);
                            if (index > -1) {
                                yield this.helper.sleep(src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_1__.SLEEP_TIMEOUT);
                                result = yield this.innovaVciService.ymme_get(index);
                                this.logger.debug('get models', result);
                                if (result && result.field === SELECT_MODEL) {
                                    index = result.options.findIndex((d) => d === this.ymme.model);
                                    if (index > -1) {
                                        yield this.helper.sleep(src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_1__.SLEEP_TIMEOUT);
                                        result = yield this.innovaVciService.ymme_get(index);
                                        this.logger.debug('get engines', result);
                                    }
                                }
                            }
                        }
                    }
                }
                if (result && result.field === SELECT_ENGINE) {
                    index = result.options.findIndex((d) => d === this.ymme.engine);
                    if (index > -1) {
                        yield this.helper.sleep(src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_1__.SLEEP_TIMEOUT);
                        result = yield this.innovaVciService.ymme_get(index);
                        this.logger.debug('get options 1', result, fieldSelect);
                        if (result && result.field === SELECT_OPTION_1) {
                            this.listOption1 = result.options;
                            if (fieldSelect === SELECT_OPTION_2) {
                                index = result.options.findIndex((d) => d === this.listOption1.find((d) => d === this.option1));
                                if (index > -1) {
                                    yield this.helper.sleep(src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_1__.SLEEP_TIMEOUT);
                                    result = yield this.innovaVciService.ymme_get(index);
                                    this.logger.debug('get options 2', result);
                                    if (result && result.field === SELECT_OPTION_2) {
                                        this.listOption2 = result.options;
                                    }
                                    yield this.helper.sleep(src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_1__.SLEEP_TIMEOUT);
                                }
                            }
                            else if (fieldSelect === SELECT_OPTION_3) {
                                index = result.options.findIndex((d) => d === this.listOption1.find((d) => d === this.option1));
                                if (index > -1) {
                                    yield this.helper.sleep(src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_1__.SLEEP_TIMEOUT);
                                    result = yield this.innovaVciService.ymme_get(index);
                                    this.logger.debug('get options 2', result);
                                    if (result && result.field === SELECT_OPTION_2) {
                                        this.listOption2 = result.options;
                                        index = result.options.findIndex((d) => d === this.listOption2.find((d) => d === this.option2));
                                        if (index > -1) {
                                            yield this.helper.sleep(src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_1__.SLEEP_TIMEOUT);
                                            result = yield this.innovaVciService.ymme_get(index);
                                            this.logger.debug('get options 3', result);
                                            if (result && result.field === SELECT_OPTION_3) {
                                                this.listOption3 = result.options;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        });
    }
    loadFieldData(index, expectedField = '') {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            this.fieldSelect = expectedField;
            if (!this.isLoading) {
                this.isLoading = true;
                this.helper.showLoading();
            }
            if (isNaN(index) && expectedField) {
                this.isLoading = false;
                this.helper.hideLoading();
                return this.logger.debug(`loadFieldData (skip) [${expectedField}]:${index}`);
            }
            if (this.option1 || this.option2 || this.option3) {
                if ((expectedField === SELECT_OPTION_1 && this.option1) ||
                    (expectedField === SELECT_OPTION_2 && this.option2) ||
                    (expectedField === SELECT_OPTION_3 && this.option3)) {
                    yield this.reInitYmme(expectedField);
                    yield this.helper.sleep(src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_1__.SLEEP_TIMEOUT);
                }
            }
            let resp = yield this.innovaVciService.ymme_get(index);
            this.logger.debug(`loadFieldData [${expectedField}]:${index}`, resp);
            const { field, options } = resp;
            if (field && options) {
                (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__classPrivateFieldSet)(this, _VehicleSelectionPage_emptyRespCnt, 0, "f");
                this.fieldSelect = field;
                this.fieldOptions = options;
                if (!this.couldSubmit) {
                    // Load data from tool
                    this.loadFieldOptions();
                }
                this.isLoading = false;
                this.helper.hideLoading();
            }
            else {
                this.isLoading = false;
                this.helper.hideLoading();
                // in case tool not response data, try again?
                (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__classPrivateFieldSet)(this, _VehicleSelectionPage_emptyRespCnt, +(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__classPrivateFieldGet)(this, _VehicleSelectionPage_emptyRespCnt, "f") + 1, "f");
                if ((0,tslib__WEBPACK_IMPORTED_MODULE_9__.__classPrivateFieldGet)(this, _VehicleSelectionPage_emptyRespCnt, "f") >= 6) {
                    this.logger.debug('!! It seems we lost connect with tool, close dialog to make new connection');
                    return this.cancel();
                }
            }
        });
    }
    loadFieldOptions() {
        const field = (this.fieldSelect || '').toLowerCase();
        const opts = this.fieldOptions ? Array.from(this.fieldOptions) : [];
        if (field.includes('option 1')) {
            this.listOption1 = opts;
            this.listOption2 = this.listOption3 = [];
        }
        else if (field.includes('option 2')) {
            this.listOption2 = opts;
            this.listOption3 = [];
        }
        else if (field.includes('option 3')) {
            this.listOption3 = opts;
        }
        this.viewingOption1 = false;
        this.viewingOption2 = false;
        this.viewingOption3 = false;
    }
    submit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            if (this.isLoading) {
                return this.logger.debug('...loading data, skip this request');
            }
            this.isLoading = true;
            let confirm = yield this.innovaVciService.ymme_confirm();
            this.isLoading = false;
            this.logger.debug('ymme_confirm', confirm);
            // Dismiss modal then hide loading
            return this.modalController.dismiss({
                confirm,
            });
        });
    }
    cancel() {
        return this.modalController.dismiss();
    }
    loadDummyData() {
        this.listOption1 = {
            vehinfo: '2020 Toyota Camry L4-2.5L (A25A-FKS) ',
            field: 'Select Option 1',
            options: ['TMMK Product', 'Others'],
        }.options;
    }
    viewMoreInfo() {
        this.logger.debug('viewMoreInfo');
    }
    getDataFromModal(modalOptions) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create(modalOptions);
            yield this.helper.hideLoading();
            modal.present().then(() => { });
            return modal.onDidDismiss();
        });
    }
    getListOption(option) {
        let options = [];
        switch (option) {
            case 1:
                options = this.listOption1;
                break;
            case 2:
                options = this.listOption2;
                break;
            case 3:
                options = this.listOption3;
                break;
        }
        let result = [];
        options.forEach((item) => {
            const option = src_app_models_app_constant__WEBPACK_IMPORTED_MODULE_2__.OptionDescription.Toyota.find((d) => d.option === item);
            if (option) {
                result.push(new src_app_models_app_model__WEBPACK_IMPORTED_MODULE_3__.OptionInformationModel(option.option, option.description, option.image, true));
            }
            else {
                result.push(new src_app_models_app_model__WEBPACK_IMPORTED_MODULE_3__.OptionInformationModel(item));
            }
        });
        return result;
    }
    viewOptions(option) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            this.options = this.getListOption(option);
            switch (option) {
                case 1:
                    this.viewingOption1 = !this.viewingOption1;
                    this.viewingOption2 = this.viewingOption3 = false;
                    break;
                case 2:
                    this.viewingOption2 = !this.viewingOption2;
                    this.viewingOption1 = this.viewingOption3 = false;
                    break;
                case 3:
                    this.viewingOption3 = !this.viewingOption3;
                    this.viewingOption1 = this.viewingOption2 = false;
                    break;
            }
        });
    }
    selectOption(index, option) {
        this.logger.debug('selectOption', index, option);
        let ctx = this;
        setTimeout(() => (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            if (!ctx.isViewingDetails) {
                ctx.ngZone.run(() => (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
                    ctx.logger.debug('!this.isViewingDetails', index, option);
                    let field = '';
                    if (ctx.viewingOption1) {
                        ctx.viewingOption1 = false;
                        ctx.option1 = option === null || option === void 0 ? void 0 : option.option;
                        field = SELECT_OPTION_1;
                        if (!src_app_services_state_app_state__WEBPACK_IMPORTED_MODULE_4__.AppState.isOnDevice) {
                            this.listOption2 = {
                                vehinfo: '2015 Toyota Camry L4-2.5L (2AR-FE) ',
                                field: 'Select Option 2',
                                options: ['w/ Smart Key', 'w/o Smart Key'],
                            }.options;
                        }
                    }
                    else if (ctx.viewingOption2) {
                        ctx.viewingOption2 = false;
                        ctx.option2 = option === null || option === void 0 ? void 0 : option.option;
                        field = SELECT_OPTION_2;
                        if (!src_app_services_state_app_state__WEBPACK_IMPORTED_MODULE_4__.AppState.isOnDevice) {
                            this.listOption3 = {
                                vehinfo: '2015 Toyota Camry L4-2.5L (2AR-FE) ',
                                field: 'Select Option 3',
                                options: ['RADAR CRUISE', 'Others'],
                            }.options;
                        }
                    }
                    else if (ctx.viewingOption3) {
                        ctx.viewingOption3 = false;
                        ctx.option3 = option === null || option === void 0 ? void 0 : option.option;
                        field = SELECT_OPTION_3;
                    }
                    if (src_app_services_state_app_state__WEBPACK_IMPORTED_MODULE_4__.AppState.isOnDevice) {
                        yield ctx.loadFieldData(index, field);
                    }
                }));
            }
        }), 10);
    }
    viewOption(option) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            this.isViewingDetails = true;
            const { data } = yield this.getDataFromModal({
                component: _option_information_modal_option_information_modal_page__WEBPACK_IMPORTED_MODULE_5__.OptionInformationModalPage,
                componentProps: {
                    optionInformation: option,
                },
                showBackdrop: true,
                backdropDismiss: true,
                cssClass: 'app-modal-dialog custom-modal',
            });
            this.isViewingDetails = false;
            return data && data.confirm;
        });
    }
}
_VehicleSelectionPage_emptyRespCnt = new WeakMap();
VehicleSelectionPage.ɵfac = function VehicleSelectionPage_Factory(t) { return new (t || VehicleSelectionPage)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_6__.HelperService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_innova_vci_service__WEBPACK_IMPORTED_MODULE_7__.InnovaVCIService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgZone)); };
VehicleSelectionPage.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: VehicleSelectionPage, selectors: [["app-vehicle-selection"]], inputs: { ymme: "ymme" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]], decls: 38, vars: 25, consts: [[1, "ion-no-border"], ["mode", "md", 4, "ngIf"], ["mode", "ios", 4, "ngIf"], ["scroll-y", "false"], [1, "app-sp-font-12"], ["size", "6"], ["placeholder", "Year", "readonly", "", 1, "app-input", "font-size-18", 3, "value"], ["placeholder", "Make", "readonly", "", 1, "app-input", "font-size-18", 3, "value"], ["placeholder", "Model", "readonly", "", 1, "app-input", "font-size-18", 3, "value"], ["placeholder", "Engine", "readonly", "", 1, "app-input", "font-size-18", 3, "value"], ["size", "12", 3, "hidden"], ["placeholder", "Option 1", "readonly", "", 1, "app-input", "font-size-18", "app-input-arrow", 3, "ngModel", "ngModelChange", "click"], ["name", "caret-down-sharp", 1, "font-size-22", "text-03", 3, "hidden"], ["name", "caret-up-sharp", 1, "font-size-22", "text-03", 3, "hidden"], ["style", "margin: 0", 4, "ngIf"], ["placeholder", "Option 2", "readonly", "", 1, "app-input", "font-size-18", "app-input-arrow", 3, "ngModel", "click", "ngModelChange"], ["placeholder", "Option 3", "readonly", "", 1, "app-input", "font-size-18", "app-input-arrow", 3, "ngModel", "click", "ngModelChange"], [1, "ion-no-border", "p-2"], [1, "py-1"], [1, "text-center"], [1, "app-button", 3, "disabled", "click"], ["mode", "md"], ["mode", "ios"], [2, "margin", "0"], [1, "app-vehicle-select-list"], [3, "click", 4, "ngFor", "ngForOf"], [3, "click"], [4, "ngIf"], [1, "text-black", 3, "click"], ["name", "information-circle-outline"]], template: function VehicleSelectionPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, VehicleSelectionPage_ion_toolbar_1_Template, 3, 0, "ion-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, VehicleSelectionPage_ion_toolbar_2_Template, 3, 0, "ion-toolbar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "ion-content", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "ion-grid");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "ion-col", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](8, "ion-input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "ion-col", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](10, "ion-input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "ion-col", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](12, "ion-input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "ion-col", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](14, "ion-input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "ion-col", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "ion-input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function VehicleSelectionPage_Template_ion_input_ngModelChange_16_listener($event) { return ctx.option1 = $event; })("click", function VehicleSelectionPage_Template_ion_input_click_16_listener() { return ctx.viewOptions(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](17, "ion-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](18, "ion-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "ion-col", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](20, VehicleSelectionPage_ion_card_20_Template, 4, 1, "ion-card", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "ion-col", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "ion-input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function VehicleSelectionPage_Template_ion_input_click_22_listener() { return ctx.viewOptions(2); })("ngModelChange", function VehicleSelectionPage_Template_ion_input_ngModelChange_22_listener($event) { return ctx.option2 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](23, "ion-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](24, "ion-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "ion-col", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](26, VehicleSelectionPage_ion_card_26_Template, 4, 1, "ion-card", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "ion-col", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "ion-input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function VehicleSelectionPage_Template_ion_input_click_28_listener() { return ctx.viewOptions(3); })("ngModelChange", function VehicleSelectionPage_Template_ion_input_ngModelChange_28_listener($event) { return ctx.option3 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](29, "ion-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](30, "ion-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "ion-col", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](32, VehicleSelectionPage_ion_card_32_Template, 4, 1, "ion-card", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](33, "ion-footer", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "ion-toolbar", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](35, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](36, "ion-button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function VehicleSelectionPage_Template_ion_button_click_36_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](37, "Continue");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.isAndroid);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.isAndroid);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("value", ctx.ymme == null ? null : ctx.ymme.year);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("value", ctx.ymme == null ? null : ctx.ymme.make);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("value", ctx.ymme == null ? null : ctx.ymme.model);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("value", ctx.ymme == null ? null : ctx.ymme.engine);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("hidden", !(ctx.listOption1 && ctx.listOption1.length));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.option1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("hidden", ctx.viewingOption1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("hidden", !ctx.viewingOption1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("hidden", !ctx.viewingOption1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.options);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("hidden", !(ctx.listOption2 && ctx.listOption2.length));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.option2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("hidden", ctx.viewingOption2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("hidden", !ctx.viewingOption2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("hidden", !ctx.viewingOption2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.options);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("hidden", !(ctx.listOption3 && ctx.listOption3.length));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.option3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("hidden", ctx.viewingOption3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("hidden", !ctx.viewingOption3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("hidden", !ctx.viewingOption3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.options);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", !ctx.couldSubmit);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonHeader, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.TextValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonFooter, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonCardContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonList, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonButtons], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2ZWhpY2xlLXNlbGVjdGlvbi5wYWdlLnNjc3MifQ== */"] });


/***/ })

}]);
//# sourceMappingURL=default-src_app_modals_vehicle-selection_vehicle-selection_page_ts-es2015.js.map