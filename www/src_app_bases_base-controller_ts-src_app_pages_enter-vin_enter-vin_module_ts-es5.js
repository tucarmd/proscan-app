(function () {
  "use strict";

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkcom_carmd_proscan2"] = self["webpackChunkcom_carmd_proscan2"] || []).push([["src_app_bases_base-controller_ts-src_app_pages_enter-vin_enter-vin_module_ts"], {
    /***/
    38790:
    /*!******************************************!*\
      !*** ./src/app/bases/base-controller.ts ***!
      \******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BaseController": function BaseController() {
          return (
            /* binding */
            _BaseController
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _services_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../services/logger */
      88737);
      /* harmony import */


      var _modules_service_injector_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../modules/service-injector.module */
      34973);
      /* harmony import */


      var _services_state_app_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/state/app.state */
      12607);

      var _BaseController = /*#__PURE__*/_createClass(function _BaseController(name) {
        _classCallCheck(this, _BaseController);

        this.serviceInjector = _modules_service_injector_module__WEBPACK_IMPORTED_MODULE_1__.ServiceInjector;
        this.name = name; // || this.constructor?.name;

        var appLoggerService = _modules_service_injector_module__WEBPACK_IMPORTED_MODULE_1__.ServiceInjector.get(_services_logger__WEBPACK_IMPORTED_MODULE_0__.AppLoggerService);

        this.logger = appLoggerService === null || appLoggerService === void 0 ? void 0 : appLoggerService.getLogger(this.name);
        this.logger.debug('Enter');
        this.isAndroid = _services_state_app_state__WEBPACK_IMPORTED_MODULE_2__.AppState.isOnAndroid;
      });
      /***/

    },

    /***/
    22371:
    /*!*************************************************************!*\
      !*** ./src/app/pages/enter-vin/enter-vin-routing.module.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EnterVinPageRoutingModule": function EnterVinPageRoutingModule() {
          return (
            /* binding */
            _EnterVinPageRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _enter_vin_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./enter-vin.page */
      33971);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var routes = [{
        path: '',
        component: _enter_vin_page__WEBPACK_IMPORTED_MODULE_0__.EnterVinPage
      }];

      var _EnterVinPageRoutingModule = /*#__PURE__*/_createClass(function _EnterVinPageRoutingModule() {
        _classCallCheck(this, _EnterVinPageRoutingModule);
      });

      _EnterVinPageRoutingModule.ɵfac = function EnterVinPageRoutingModule_Factory(t) {
        return new (t || _EnterVinPageRoutingModule)();
      };

      _EnterVinPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _EnterVinPageRoutingModule
      });
      _EnterVinPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_EnterVinPageRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    81755:
    /*!*****************************************************!*\
      !*** ./src/app/pages/enter-vin/enter-vin.module.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EnterVinPageModule": function EnterVinPageModule() {
          return (
            /* binding */
            _EnterVinPageModule
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


      var _enter_vin_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./enter-vin-routing.module */
      22371);
      /* harmony import */


      var _enter_vin_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./enter-vin.page */
      33971);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _EnterVinPageModule = /*#__PURE__*/_createClass(function _EnterVinPageModule() {
        _classCallCheck(this, _EnterVinPageModule);
      });

      _EnterVinPageModule.ɵfac = function EnterVinPageModule_Factory(t) {
        return new (t || _EnterVinPageModule)();
      };

      _EnterVinPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: _EnterVinPageModule
      });
      _EnterVinPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _enter_vin_routing_module__WEBPACK_IMPORTED_MODULE_0__.EnterVinPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](_EnterVinPageModule, {
          declarations: [_enter_vin_page__WEBPACK_IMPORTED_MODULE_1__.EnterVinPage],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _enter_vin_routing_module__WEBPACK_IMPORTED_MODULE_0__.EnterVinPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=src_app_bases_base-controller_ts-src_app_pages_enter-vin_enter-vin_module_ts-es5.js.map