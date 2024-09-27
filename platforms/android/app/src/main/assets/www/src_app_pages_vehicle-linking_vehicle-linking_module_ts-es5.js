(function () {
  "use strict";

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkcom_carmd_proscan2"] = self["webpackChunkcom_carmd_proscan2"] || []).push([["src_app_pages_vehicle-linking_vehicle-linking_module_ts"], {
    /***/
    72322:
    /*!*************************************************************************!*\
      !*** ./src/app/pages/vehicle-linking/vehicle-linking-routing.module.ts ***!
      \*************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "VehicleLinkingPageRoutingModule": function VehicleLinkingPageRoutingModule() {
          return (
            /* binding */
            _VehicleLinkingPageRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _vehicle_linking_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./vehicle-linking.page */
      55499);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var routes = [{
        path: '',
        component: _vehicle_linking_page__WEBPACK_IMPORTED_MODULE_0__.VehicleLinkingPage
      }];

      var _VehicleLinkingPageRoutingModule = /*#__PURE__*/_createClass(function _VehicleLinkingPageRoutingModule() {
        _classCallCheck(this, _VehicleLinkingPageRoutingModule);
      });

      _VehicleLinkingPageRoutingModule.ɵfac = function VehicleLinkingPageRoutingModule_Factory(t) {
        return new (t || _VehicleLinkingPageRoutingModule)();
      };

      _VehicleLinkingPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _VehicleLinkingPageRoutingModule
      });
      _VehicleLinkingPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_VehicleLinkingPageRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    28048:
    /*!*****************************************************************!*\
      !*** ./src/app/pages/vehicle-linking/vehicle-linking.module.ts ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "VehicleLinkingPageModule": function VehicleLinkingPageModule() {
          return (
            /* binding */
            _VehicleLinkingPageModule
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


      var _vehicle_linking_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./vehicle-linking-routing.module */
      72322);
      /* harmony import */


      var _vehicle_linking_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./vehicle-linking.page */
      55499);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _VehicleLinkingPageModule = /*#__PURE__*/_createClass(function _VehicleLinkingPageModule() {
        _classCallCheck(this, _VehicleLinkingPageModule);
      });

      _VehicleLinkingPageModule.ɵfac = function VehicleLinkingPageModule_Factory(t) {
        return new (t || _VehicleLinkingPageModule)();
      };

      _VehicleLinkingPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: _VehicleLinkingPageModule
      });
      _VehicleLinkingPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _vehicle_linking_routing_module__WEBPACK_IMPORTED_MODULE_0__.VehicleLinkingPageRoutingModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](_VehicleLinkingPageModule, {
          declarations: [_vehicle_linking_page__WEBPACK_IMPORTED_MODULE_1__.VehicleLinkingPage],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _vehicle_linking_routing_module__WEBPACK_IMPORTED_MODULE_0__.VehicleLinkingPageRoutingModule]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=src_app_pages_vehicle-linking_vehicle-linking_module_ts-es5.js.map