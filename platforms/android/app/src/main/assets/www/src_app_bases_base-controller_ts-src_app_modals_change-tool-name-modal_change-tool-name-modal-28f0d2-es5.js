(function () {
  "use strict";

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkcom_carmd_proscan2"] = self["webpackChunkcom_carmd_proscan2"] || []).push([["src_app_bases_base-controller_ts-src_app_modals_change-tool-name-modal_change-tool-name-modal-28f0d2"], {
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
    92392:
    /*!****************************************************************************************!*\
      !*** ./src/app/modals/change-tool-name-modal/change-tool-name-modal-routing.module.ts ***!
      \****************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ChangeToolNameModalPageRoutingModule": function ChangeToolNameModalPageRoutingModule() {
          return (
            /* binding */
            _ChangeToolNameModalPageRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _change_tool_name_modal_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./change-tool-name-modal.page */
      4497);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var routes = [{
        path: '',
        component: _change_tool_name_modal_page__WEBPACK_IMPORTED_MODULE_0__.ChangeToolNameModalPage
      }];

      var _ChangeToolNameModalPageRoutingModule = /*#__PURE__*/_createClass(function _ChangeToolNameModalPageRoutingModule() {
        _classCallCheck(this, _ChangeToolNameModalPageRoutingModule);
      });

      _ChangeToolNameModalPageRoutingModule.ɵfac = function ChangeToolNameModalPageRoutingModule_Factory(t) {
        return new (t || _ChangeToolNameModalPageRoutingModule)();
      };

      _ChangeToolNameModalPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _ChangeToolNameModalPageRoutingModule
      });
      _ChangeToolNameModalPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_ChangeToolNameModalPageRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    23365:
    /*!********************************************************************************!*\
      !*** ./src/app/modals/change-tool-name-modal/change-tool-name-modal.module.ts ***!
      \********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ChangeToolNameModalPageModule": function ChangeToolNameModalPageModule() {
          return (
            /* binding */
            _ChangeToolNameModalPageModule
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


      var _change_tool_name_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./change-tool-name-modal-routing.module */
      92392);
      /* harmony import */


      var _change_tool_name_modal_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./change-tool-name-modal.page */
      4497);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _ChangeToolNameModalPageModule = /*#__PURE__*/_createClass(function _ChangeToolNameModalPageModule() {
        _classCallCheck(this, _ChangeToolNameModalPageModule);
      });

      _ChangeToolNameModalPageModule.ɵfac = function ChangeToolNameModalPageModule_Factory(t) {
        return new (t || _ChangeToolNameModalPageModule)();
      };

      _ChangeToolNameModalPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: _ChangeToolNameModalPageModule
      });
      _ChangeToolNameModalPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _change_tool_name_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__.ChangeToolNameModalPageRoutingModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](_ChangeToolNameModalPageModule, {
          declarations: [_change_tool_name_modal_page__WEBPACK_IMPORTED_MODULE_1__.ChangeToolNameModalPage],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _change_tool_name_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__.ChangeToolNameModalPageRoutingModule]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=src_app_bases_base-controller_ts-src_app_modals_change-tool-name-modal_change-tool-name-modal-28f0d2-es5.js.map