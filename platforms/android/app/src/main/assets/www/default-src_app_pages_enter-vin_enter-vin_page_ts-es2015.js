"use strict";
(self["webpackChunkcom_carmd_proscan2"] = self["webpackChunkcom_carmd_proscan2"] || []).push([["default-src_app_pages_enter-vin_enter-vin_page_ts"],{

/***/ 33971:
/*!***************************************************!*\
  !*** ./src/app/pages/enter-vin/enter-vin.page.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VIN_MAX_LENGTH": function() { return /* binding */ VIN_MAX_LENGTH; },
/* harmony export */   "EnterVinPage": function() { return /* binding */ EnterVinPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var src_app_bases_base_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/bases/base-controller */ 38790);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 81864);
/* harmony import */ var src_app_services_tool_service_tool_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/tool-service/tool-service */ 91841);
/* harmony import */ var src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/helper.service */ 22486);
/* harmony import */ var src_app_services_report_service_report_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/report-service/report-service */ 45322);
/* harmony import */ var src_app_services_vehicle_service_vehicle_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/vehicle-service/vehicle-service */ 99578);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 54364);
var _EnterVinPage_instances, _EnterVinPage_formatVin;











const _c0 = ["vinInput"];
function EnterVinPage_ion_toolbar_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-toolbar", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ion-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Enter VIN");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "ion-buttons", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "ion-button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function EnterVinPage_ion_toolbar_1_Template_ion_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r3.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "ion-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidden", ctx_r0.isModal);
} }
function EnterVinPage_ion_toolbar_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-toolbar", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ion-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Enter VIN");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "ion-buttons", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "ion-button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function EnterVinPage_ion_toolbar_2_Template_ion_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r5.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "ion-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidden", ctx_r1.isModal);
} }
const VIN_MAX_LENGTH = 17;
const DASH_CHARACTER = '-';
class EnterVinPage extends src_app_bases_base_controller__WEBPACK_IMPORTED_MODULE_0__.BaseController {
    constructor(modal, toolService, helper, navParams, reportService, vehicleService) {
        super('EnterVinPage');
        this.modal = modal;
        this.toolService = toolService;
        this.helper = helper;
        this.navParams = navParams;
        this.reportService = reportService;
        this.vehicleService = vehicleService;
        _EnterVinPage_instances.add(this);
        this.isModal = false;
        this.invalidVIN = false;
        this.hasVIN = false;
        this.isVehiclesNotFound = false;
        this.vinLength = VIN_MAX_LENGTH;
    }
    ngOnInit() {
        this.vinForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
            vin: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(17)])
        });
    }
    ionViewWillEnter() {
        this.invalidVIN = false;
        this.isVehiclesNotFound = false;
        this.logger.debug(this.isModal);
        this.reportSession = this.reportService.getReportSession();
    }
    ionViewDidEnter() {
        setTimeout(() => {
            this.vinInput.setFocus();
        }, 1000);
    }
    submit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.hasVIN = false;
            let vin = this.vinInput.value;
            this.isLoading = true;
            let re = new RegExp('[a-zA-Z0-9]{17}$');
            let matches = vin.match(re);
            if (matches && matches.length) {
                vin = matches[0];
                if (this.isModal) {
                    let result = yield this.vehicleService.decodeVin(vin);
                    this.isLoading = false;
                    if (result.success) {
                        yield this.modal.dismiss({ vin: vin, data: result.data });
                    }
                    else {
                        this.hasVIN = true;
                        this.isVehiclesNotFound = true;
                    }
                }
                else {
                    let result = yield this.vehicleService.getDlcLocationByVin(vin);
                    this.isLoading = false;
                    if (result.success) {
                        yield this.modal.dismiss({ vin: vin, data: result.data });
                    }
                    else {
                        this.hasVIN = true;
                        this.isVehiclesNotFound = true;
                    }
                }
            }
            else {
                this.hasVIN = true;
                this.isLoading = false;
                this.isVehiclesNotFound = true;
            }
        });
    }
    vinChanges() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.isVehiclesNotFound = false;
            const vin = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__classPrivateFieldGet)(this, _EnterVinPage_instances, "m", _EnterVinPage_formatVin).call(this, this.vinInput.value);
            this.vinLength = VIN_MAX_LENGTH - vin.length;
            this.vinInput.value = vin;
            if (vin.length === VIN_MAX_LENGTH) {
                this.hasVIN = true;
            }
            else {
                this.hasVIN = false;
            }
        });
    }
    close() {
        this.modal.dismiss(null);
    }
}
_EnterVinPage_instances = new WeakSet(), _EnterVinPage_formatVin = function _EnterVinPage_formatVin(vin) {
    if (vin) {
        vin = vin.replace(/[^a-zA-Z0-9]/gi, '');
        vin = vin.replace(/[qo]/gi, '0');
        vin = vin.replace(/[i]/gi, '1');
        vin = vin.slice(0, 17);
        vin = vin.toUpperCase();
    }
    return vin;
};
EnterVinPage.ɵfac = function EnterVinPage_Factory(t) { return new (t || EnterVinPage)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_tool_service_tool_service__WEBPACK_IMPORTED_MODULE_1__.ToolServiceProvider), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_2__.HelperService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavParams), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_report_service_report_service__WEBPACK_IMPORTED_MODULE_3__.ReportServiceProvider), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_vehicle_service_vehicle_service__WEBPACK_IMPORTED_MODULE_4__.VehicleServiceProvider)); };
EnterVinPage.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: EnterVinPage, selectors: [["app-enter-vin"]], viewQuery: function EnterVinPage_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.vinInput = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]], decls: 21, vars: 9, consts: [[1, "ion-no-border"], ["mode", "md", 4, "ngIf"], ["mode", "ios", 4, "ngIf"], [1, "ion-padding"], [1, "app-content-center-midle"], [1, "w-100", "app-open-keybroad-01", 3, "formGroup"], [1, "mb-3"], ["inputmode", "text", "maxlength", "17", "placeholder", "*****************", 1, "app-input", "vin-input", 3, "keyup.enter", "ionChange"], ["vinInput", ""], [1, "mb-4", "text-danger", 3, "hidden"], ["expand", "block", 1, "app-button", "mt-2", 3, "disabled", "click"], [3, "hidden"], ["mode", "md"], ["slot", "end", 3, "hidden"], [3, "click"], ["name", "close-outline", 1, "font-size-28"], ["mode", "ios"]], template: function EnterVinPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, EnterVinPage_ion_toolbar_1_Template, 6, 1, "ion-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, EnterVinPage_ion_toolbar_2_Template, 6, 1, "ion-toolbar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "ion-content", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "ion-input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keyup.enter", function EnterVinPage_Template_ion_input_keyup_enter_9_listener() { return ctx.submit(); })("ionChange", function EnterVinPage_Template_ion_input_ionChange_9_listener() { return ctx.vinChanges(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "VIN is required and must be 17 chars in length.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Invalid VIN. Either this VIN is too new for our system, or our system cannot decode this VIN, or this VIN is invalid. Please enter a different VIN.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "ion-button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function EnterVinPage_Template_ion_button_click_17_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "ion-spinner", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isAndroid);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isAndroid);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.vinForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("VIN (", ctx.vinLength, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidden", !ctx.invalidVIN);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidden", !ctx.isVehiclesNotFound);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx.hasVIN);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidden", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidden", !ctx.isLoading);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonHeader, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonContent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.TextValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonSpinner, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonIcon], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbnRlci12aW4ucGFnZS5zY3NzIn0= */"] });


/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_enter-vin_enter-vin_page_ts-es2015.js.map