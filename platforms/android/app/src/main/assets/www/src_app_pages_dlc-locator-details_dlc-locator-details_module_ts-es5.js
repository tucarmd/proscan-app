(function () {
  "use strict";

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkcom_carmd_proscan2"] = self["webpackChunkcom_carmd_proscan2"] || []).push([["src_app_pages_dlc-locator-details_dlc-locator-details_module_ts"], {
    /***/
    21320:
    /*!*********************************************************************************!*\
      !*** ./src/app/pages/dlc-locator-details/dlc-locator-details-routing.module.ts ***!
      \*********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DlcLocatorDetailsPageRoutingModule": function DlcLocatorDetailsPageRoutingModule() {
          return (
            /* binding */
            _DlcLocatorDetailsPageRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _dlc_locator_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./dlc-locator-details.page */
      36152);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var routes = [{
        path: '',
        component: _dlc_locator_details_page__WEBPACK_IMPORTED_MODULE_0__.DlcLocatorDetailsPage
      }];

      var _DlcLocatorDetailsPageRoutingModule = /*#__PURE__*/_createClass(function _DlcLocatorDetailsPageRoutingModule() {
        _classCallCheck(this, _DlcLocatorDetailsPageRoutingModule);
      });

      _DlcLocatorDetailsPageRoutingModule.ɵfac = function DlcLocatorDetailsPageRoutingModule_Factory(t) {
        return new (t || _DlcLocatorDetailsPageRoutingModule)();
      };

      _DlcLocatorDetailsPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _DlcLocatorDetailsPageRoutingModule
      });
      _DlcLocatorDetailsPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_DlcLocatorDetailsPageRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    10621:
    /*!*************************************************************************!*\
      !*** ./src/app/pages/dlc-locator-details/dlc-locator-details.module.ts ***!
      \*************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DlcLocatorDetailsPageModule": function DlcLocatorDetailsPageModule() {
          return (
            /* binding */
            _DlcLocatorDetailsPageModule
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


      var _dlc_locator_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./dlc-locator-details-routing.module */
      21320);
      /* harmony import */


      var _dlc_locator_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./dlc-locator-details.page */
      36152);
      /* harmony import */


      var ionic_image_loader_v5__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ionic-image-loader-v5 */
      86233);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316); // import { ImagePipe } from 'src/app/components/image-pipe/image.pipe';


      var _DlcLocatorDetailsPageModule = /*#__PURE__*/_createClass(function _DlcLocatorDetailsPageModule() {
        _classCallCheck(this, _DlcLocatorDetailsPageModule);
      });

      _DlcLocatorDetailsPageModule.ɵfac = function DlcLocatorDetailsPageModule_Factory(t) {
        return new (t || _DlcLocatorDetailsPageModule)();
      };

      _DlcLocatorDetailsPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: _DlcLocatorDetailsPageModule
      });
      _DlcLocatorDetailsPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, ionic_image_loader_v5__WEBPACK_IMPORTED_MODULE_6__.IonicImageLoaderModule, _dlc_locator_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.DlcLocatorDetailsPageRoutingModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](_DlcLocatorDetailsPageModule, {
          declarations: [_dlc_locator_details_page__WEBPACK_IMPORTED_MODULE_1__.DlcLocatorDetailsPage],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, ionic_image_loader_v5__WEBPACK_IMPORTED_MODULE_6__.IonicImageLoaderModule, _dlc_locator_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.DlcLocatorDetailsPageRoutingModule]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=src_app_pages_dlc-locator-details_dlc-locator-details_module_ts-es5.js.map