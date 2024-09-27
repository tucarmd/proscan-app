(function () {
  "use strict";

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkcom_carmd_proscan2"] = self["webpackChunkcom_carmd_proscan2"] || []).push([["src_app_modals_vehicle-selection_vehicle-selection_module_ts"], {
    /***/
    25611:
    /*!******************************************************************************!*\
      !*** ./src/app/modals/vehicle-selection/vehicle-selection-routing.module.ts ***!
      \******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "VehicleSelectionPageRoutingModule": function VehicleSelectionPageRoutingModule() {
          return (
            /* binding */
            _VehicleSelectionPageRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _vehicle_selection_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./vehicle-selection.page */
      31452);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var routes = [{
        path: '',
        component: _vehicle_selection_page__WEBPACK_IMPORTED_MODULE_0__.VehicleSelectionPage
      }];

      var _VehicleSelectionPageRoutingModule = /*#__PURE__*/_createClass(function _VehicleSelectionPageRoutingModule() {
        _classCallCheck(this, _VehicleSelectionPageRoutingModule);
      });

      _VehicleSelectionPageRoutingModule.ɵfac = function VehicleSelectionPageRoutingModule_Factory(t) {
        return new (t || _VehicleSelectionPageRoutingModule)();
      };

      _VehicleSelectionPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _VehicleSelectionPageRoutingModule
      });
      _VehicleSelectionPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_VehicleSelectionPageRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    95210:
    /*!**********************************************************************!*\
      !*** ./src/app/modals/vehicle-selection/vehicle-selection.module.ts ***!
      \**********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "VehicleSelectionPageModule": function VehicleSelectionPageModule() {
          return (
            /* binding */
            _VehicleSelectionPageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      81864);
      /* harmony import */


      var _vehicle_selection_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./vehicle-selection-routing.module */
      25611);
      /* harmony import */


      var _vehicle_selection_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./vehicle-selection.page */
      31452);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _VehicleSelectionPageModule = /*#__PURE__*/_createClass(function _VehicleSelectionPageModule() {
        _classCallCheck(this, _VehicleSelectionPageModule);
      });

      _VehicleSelectionPageModule.ɵfac = function VehicleSelectionPageModule_Factory(t) {
        return new (t || _VehicleSelectionPageModule)();
      };

      _VehicleSelectionPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: _VehicleSelectionPageModule
      });
      _VehicleSelectionPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _vehicle_selection_routing_module__WEBPACK_IMPORTED_MODULE_0__.VehicleSelectionPageRoutingModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](_VehicleSelectionPageModule, {
          declarations: [_vehicle_selection_page__WEBPACK_IMPORTED_MODULE_1__.VehicleSelectionPage],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _vehicle_selection_routing_module__WEBPACK_IMPORTED_MODULE_0__.VehicleSelectionPageRoutingModule]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=src_app_modals_vehicle-selection_vehicle-selection_module_ts-es5.js.map