(function () {
  "use strict";

  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }

  function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }

  function _possibleConstructorReturn(t, e) { if (e && ("object" == typeof e || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }

  function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }

  function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }

  function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }

  function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }

  function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkcom_carmd_proscan2"] = self["webpackChunkcom_carmd_proscan2"] || []).push([["src_app_pages_change-tool-name_change-tool-name_module_ts"], {
    /***/
    97232:
    /*!***************************************************************************!*\
      !*** ./src/app/pages/change-tool-name/change-tool-name-routing.module.ts ***!
      \***************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ChangeToolNamePageRoutingModule": function ChangeToolNamePageRoutingModule() {
          return (
            /* binding */
            _ChangeToolNamePageRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _change_tool_name_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./change-tool-name.page */
      89912);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var routes = [{
        path: '',
        component: _change_tool_name_page__WEBPACK_IMPORTED_MODULE_0__.ChangeToolNamePage
      }];

      var _ChangeToolNamePageRoutingModule = /*#__PURE__*/_createClass(function _ChangeToolNamePageRoutingModule() {
        _classCallCheck(this, _ChangeToolNamePageRoutingModule);
      });

      _ChangeToolNamePageRoutingModule.ɵfac = function ChangeToolNamePageRoutingModule_Factory(t) {
        return new (t || _ChangeToolNamePageRoutingModule)();
      };

      _ChangeToolNamePageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _ChangeToolNamePageRoutingModule
      });
      _ChangeToolNamePageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_ChangeToolNamePageRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    7246:
    /*!*******************************************************************!*\
      !*** ./src/app/pages/change-tool-name/change-tool-name.module.ts ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ChangeToolNamePageModule": function ChangeToolNamePageModule() {
          return (
            /* binding */
            _ChangeToolNamePageModule
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


      var _change_tool_name_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./change-tool-name-routing.module */
      97232);
      /* harmony import */


      var _change_tool_name_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./change-tool-name.page */
      89912);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _ChangeToolNamePageModule = /*#__PURE__*/_createClass(function _ChangeToolNamePageModule() {
        _classCallCheck(this, _ChangeToolNamePageModule);
      });

      _ChangeToolNamePageModule.ɵfac = function ChangeToolNamePageModule_Factory(t) {
        return new (t || _ChangeToolNamePageModule)();
      };

      _ChangeToolNamePageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: _ChangeToolNamePageModule
      });
      _ChangeToolNamePageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _change_tool_name_routing_module__WEBPACK_IMPORTED_MODULE_0__.ChangeToolNamePageRoutingModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](_ChangeToolNamePageModule, {
          declarations: [_change_tool_name_page__WEBPACK_IMPORTED_MODULE_1__.ChangeToolNamePage],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _change_tool_name_routing_module__WEBPACK_IMPORTED_MODULE_0__.ChangeToolNamePageRoutingModule]
        });
      })();
      /***/

    },

    /***/
    89912:
    /*!*****************************************************************!*\
      !*** ./src/app/pages/change-tool-name/change-tool-name.page.ts ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ChangeToolNamePage": function ChangeToolNamePage() {
          return (
            /* binding */
            _ChangeToolNamePage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! tslib */
      42321);
      /* harmony import */


      var src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/configs/app.config */
      66626);
      /* harmony import */


      var src_app_models_app_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/models/app.model */
      20998);
      /* harmony import */


      var src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/app-routing.module */
      90158);
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! lodash */
      202);
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var src_app_bases_base_controller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/bases/base-controller */
      38790);
      /* harmony import */


      var src_app_services_state_app_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/state/app.state */
      12607);
      /* harmony import */


      var src_app_services_utility_carmd_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/utility/carmd.utils */
      92582);
      /* harmony import */


      var src_app_modals_multiple_tools_found_modal_multiple_tools_found_modal_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/modals/multiple-tools-found-modal/multiple-tools-found-modal.page */
      50016);
      /* harmony import */


      var src_app_modals_change_tool_name_modal_change_tool_name_modal_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/modals/change-tool-name-modal/change-tool-name-modal.page */
      4497);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/helper.service */
      22486);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @ionic/angular */
      81864);
      /* harmony import */


      var src_app_services_navigation_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/services/navigation.service */
      89565);
      /* harmony import */


      var src_app_services_innova_vci_service_src_connectivity_connectivity_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/services/innova-vci-service/src/connectivity/connectivity.service */
      27555);
      /* harmony import */


      var _ionic_native_ble_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ionic-native/ble/ngx */
      11695);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/common */
      54364);

      var _ChangeToolNamePage_instances, _ChangeToolNamePage_scanningTimeout, _ChangeToolNamePage_hasMultipleDevices, _ChangeToolNamePage_multipleToolsFoundPopupVisible, _ChangeToolNamePage_startScanDevices, _ChangeToolNamePage_addDevice, _ChangeToolNamePage_displayMultipleToolsFoundPopup;

      function ChangeToolNamePage_div_14_ion_button_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ion-button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function ChangeToolNamePage_div_14_ion_button_5_Template_ion_button_click_0_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r4);

            var device_r2 = restoredCtx.$implicit;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);

            return ctx_r3.selectDevice(device_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var device_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](device_r2.displayName);
        }
      }

      function ChangeToolNamePage_div_14_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "h2", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2, "Please select device ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4, "to change Tool Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](5, ChangeToolNamePage_div_14_ion_button_5_Template, 2, 1, "ion-button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "ion-grid");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "ion-col", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function ChangeToolNamePage_div_14_Template_ion_col_click_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();

            return ctx_r5.cancel();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](10, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r0.devices);
        }
      }

      var _ChangeToolNamePage = /*#__PURE__*/function (_src_app_bases_base_c) {
        function _ChangeToolNamePage(helper, modalController, navigationService, connService, platform, zone, changeDetector, ble) {
          var _this;

          _classCallCheck(this, _ChangeToolNamePage);

          _this = _callSuper(this, _ChangeToolNamePage, ['ChangeToolNamePage']);
          _this.helper = helper;
          _this.modalController = modalController;
          _this.navigationService = navigationService;
          _this.connService = connService;
          _this.platform = platform;
          _this.zone = zone;
          _this.changeDetector = changeDetector;
          _this.ble = ble;

          _ChangeToolNamePage_instances.add(_this);

          _this.title = 'Scanning devices';
          _this.isScanning = true;
          _this.retry = 0;
          _this.found = false;
          _this.result = 'Starting scan';
          _this.isCancelling = false;
          _this.deviceId = '';
          _this.toolName = '';

          _ChangeToolNamePage_scanningTimeout.set(_this, null);

          _ChangeToolNamePage_hasMultipleDevices.set(_this, false);

          _ChangeToolNamePage_multipleToolsFoundPopupVisible.set(_this, false);

          return _this;
        }

        _inherits(_ChangeToolNamePage, _src_app_bases_base_c);

        return _createClass(_ChangeToolNamePage, [{
          key: "setStatus",
          value: function setStatus(result) {
            var _this2 = this;

            var status = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
            this.zone.run(function () {
              if (result != null) {
                _this2.resultText = result;

                _this2.logger.debug(_this2.resultText + ' - ' + status);
              }

              _this2.statusText = status;
            });
          }
        }, {
          key: "selectDevice",
          value: function selectDevice(device) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var modal, data;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    if (!src_app_services_state_app_state__WEBPACK_IMPORTED_MODULE_5__.AppState.isOnAndroid) {
                      _context.next = 4;
                      break;
                    }

                    console.log('Call this.ble.stopScan');
                    _context.next = 4;
                    return this.ble.stopScan();

                  case 4:
                    _context.next = 6;
                    return this.modalController.create({
                      component: src_app_modals_change_tool_name_modal_change_tool_name_modal_page__WEBPACK_IMPORTED_MODULE_8__.ChangeToolNameModalPage,
                      componentProps: {
                        toolId: device.id,
                        toolName: device.displayName
                      },
                      cssClass: 'app-modal-dialog-2 px-2 keyboard-active',
                      showBackdrop: true,
                      backdropDismiss: false
                    });

                  case 6:
                    modal = _context.sent;
                    _context.next = 9;
                    return modal.present();

                  case 9:
                    _context.next = 11;
                    return modal.onDidDismiss();

                  case 11:
                    data = _context.sent;

                    if (!(data && data.data && data.data.newName)) {
                      _context.next = 15;
                      break;
                    }

                    localStorage.setItem(device.id, data.data.newName);
                    return _context.abrupt("return", this.navigationService.popToRoot(src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_2__.RoutePath.Home));

                  case 15:
                  case "end":
                    return _context.stop();
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
              var _this3 = this;

              var ctx;
              return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                while (1) switch (_context4.prev = _context4.next) {
                  case 0:
                    this.isScanning = false;
                    this.isCancelling = false;
                    this.isScanning = true;
                    this.title = 'Scanning devices';
                    this.result = 'Starting scan';
                    ctx = this;
                    ctx.devices = [];
                    (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__classPrivateFieldSet)(this, _ChangeToolNamePage_scanningTimeout, setTimeout(function () {
                      return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(_this3, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
                        var _this4 = this;

                        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                          while (1) switch (_context3.prev = _context3.next) {
                            case 0:
                              if (!this.devices || this.devices.length === 0) {
                                this.navigationService.goTo(src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_2__.RoutePath.ConnectionFailed, {
                                  queryParams: {
                                    sourcePage: src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_2__.RoutePath.ChangeToolName
                                  }
                                }).then(function () {
                                  return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(_this4, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
                                    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                                      while (1) switch (_context2.prev = _context2.next) {
                                        case 0:
                                          if (src_app_services_state_app_state__WEBPACK_IMPORTED_MODULE_5__.AppState.isOnAndroid) {
                                            console.log('Call this.ble.stopScan');
                                            this.ble.stopScan();
                                          }

                                        case 1:
                                        case "end":
                                          return _context2.stop();
                                      }
                                    }, _callee2, this);
                                  }));
                                });
                              }

                            case 1:
                            case "end":
                              return _context3.stop();
                          }
                        }, _callee3, this);
                      }));
                    }, src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_0__.AppConfig.scanningDevicesTimeout), "f");

                  case 8:
                  case "end":
                    return _context4.stop();
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
              return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                while (1) switch (_context5.prev = _context5.next) {
                  case 0:
                    this.isScanning = true;
                    _context5.next = 3;
                    return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__classPrivateFieldGet)(this, _ChangeToolNamePage_instances, "m", _ChangeToolNamePage_startScanDevices).call(this);

                  case 3:
                  case "end":
                    return _context5.stop();
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "doCancelScanning",
          value: function doCancelScanning() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
              var _this5 = this;

              return _regeneratorRuntime().wrap(function _callee7$(_context7) {
                while (1) switch (_context7.prev = _context7.next) {
                  case 0:
                    this.isCancelling = true;
                    this.resultText = '';
                    this.statusText = 'One moment please...';
                    return _context7.abrupt("return", this.helper.popToRoot(src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_2__.RoutePath.Home).then(function () {
                      return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(_this5, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
                        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                          while (1) switch (_context6.prev = _context6.next) {
                            case 0:
                              if (src_app_services_state_app_state__WEBPACK_IMPORTED_MODULE_5__.AppState.isOnAndroid) {
                                this.ble.stopScan();
                              }

                            case 1:
                            case "end":
                              return _context6.stop();
                          }
                        }, _callee6, this);
                      }));
                    }));

                  case 4:
                  case "end":
                    return _context7.stop();
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "ionViewDidLeave",
          value: function ionViewDidLeave() {
            var _this6 = this;

            if ((0, tslib__WEBPACK_IMPORTED_MODULE_14__.__classPrivateFieldGet)(this, _ChangeToolNamePage_scanningTimeout, "f")) {
              clearTimeout((0, tslib__WEBPACK_IMPORTED_MODULE_14__.__classPrivateFieldGet)(this, _ChangeToolNamePage_scanningTimeout, "f"));
              (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__classPrivateFieldSet)(this, _ChangeToolNamePage_scanningTimeout, null, "f");
            } // Unregister the custom back button action for this page


            document.removeEventListener('backbutton', function () {
              _this6.logger.debug('unregister back button event');
            });
          }
        }, {
          key: "initializeBackButtonCustomHandler",
          value: function initializeBackButtonCustomHandler() {
            var _this7 = this;

            this.platform.ready().then(function () {
              document.addEventListener('backbutton', function () {
                _this7.customHandleBackButton();
              });
            });
          }
        }, {
          key: "customHandleBackButton",
          value: function customHandleBackButton() {
            this.cancel();
          }
        }, {
          key: "cancel",
          value: function cancel() {
            var confirm = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
              var _this8 = this;

              return _regeneratorRuntime().wrap(function _callee9$(_context9) {
                while (1) switch (_context9.prev = _context9.next) {
                  case 0:
                    if (src_app_services_state_app_state__WEBPACK_IMPORTED_MODULE_5__.AppState.isOnDevice) {
                      this.isCancelling = true;

                      if (confirm) {
                        this.helper.confirm('Are you sure?', src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_0__.AppStrings.CONFIRM, function () {
                          return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(_this8, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
                            return _regeneratorRuntime().wrap(function _callee8$(_context8) {
                              while (1) switch (_context8.prev = _context8.next) {
                                case 0:
                                  this.doCancelScanning();

                                case 1:
                                case "end":
                                  return _context8.stop();
                              }
                            }, _callee8, this);
                          }));
                        }, function () {
                          _this8.isCancelling = false;
                        });
                      } else {
                        this.doCancelScanning();
                      }
                    }

                  case 1:
                  case "end":
                    return _context9.stop();
                }
              }, _callee9, this);
            }));
          }
        }]);
      }(src_app_bases_base_controller__WEBPACK_IMPORTED_MODULE_4__.BaseController);

      _ChangeToolNamePage_scanningTimeout = new WeakMap(), _ChangeToolNamePage_hasMultipleDevices = new WeakMap(), _ChangeToolNamePage_multipleToolsFoundPopupVisible = new WeakMap(), _ChangeToolNamePage_instances = new WeakSet(), _ChangeToolNamePage_startScanDevices = function _ChangeToolNamePage_startScanDevices() {
        return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
          var _this9 = this;

          var devices, device;
          return _regeneratorRuntime().wrap(function _callee10$(_context10) {
            while (1) switch (_context10.prev = _context10.next) {
              case 0:
                if (!src_app_services_state_app_state__WEBPACK_IMPORTED_MODULE_5__.AppState.isOnAndroid) {
                  _context10.next = 4;
                  break;
                }

                this.ble.stopScan().then(function () {
                  _this9.ble.startScan([]).subscribe(function (btDevice) {
                    if (btDevice['name'] && btDevice['name'].length > 0) {
                      if (lodash__WEBPACK_IMPORTED_MODULE_3___default().includes(src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_0__.SUPPORTED_BLUETOOTH_DEVICE_NAMES, btDevice['name'])) {
                        _this9.logger.debug('Device found', btDevice);

                        var index = _this9.devices.findIndex(function (d) {
                          return d.id === btDevice['id'];
                        });

                        if (index < 0) {
                          (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__classPrivateFieldGet)(_this9, _ChangeToolNamePage_instances, "m", _ChangeToolNamePage_addDevice).call(_this9, btDevice['id'], btDevice['name']);
                          _this9.isScanning = false;
                          src_app_services_utility_carmd_utils__WEBPACK_IMPORTED_MODULE_6__.CarMDUtils.refreshUI(_this9.changeDetector);
                        }

                        (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__classPrivateFieldSet)(_this9, _ChangeToolNamePage_hasMultipleDevices, _this9.devices.length > 1, "f");

                        if ((0, tslib__WEBPACK_IMPORTED_MODULE_14__.__classPrivateFieldGet)(_this9, _ChangeToolNamePage_hasMultipleDevices, "f")) {
                          (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__classPrivateFieldGet)(_this9, _ChangeToolNamePage_instances, "m", _ChangeToolNamePage_displayMultipleToolsFoundPopup).call(_this9).then();
                        }
                      }
                    }
                  });
                });
                _context10.next = 13;
                break;

              case 4:
                _context10.next = 6;
                return this.connService.discoverBluetoothDevices2();

              case 6:
                devices = _context10.sent;

                if (!(devices && devices.length > 0)) {
                  _context10.next = 13;
                  break;
                }

                while (devices.length) {
                  device = devices.shift();
                  this.logger.debug('Found Pro15 device', device);
                  (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__classPrivateFieldGet)(this, _ChangeToolNamePage_instances, "m", _ChangeToolNamePage_addDevice).call(this, device['id'], device['name']);
                  this.isScanning = false;
                  src_app_services_utility_carmd_utils__WEBPACK_IMPORTED_MODULE_6__.CarMDUtils.refreshUI(this.changeDetector);
                }

                (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__classPrivateFieldSet)(this, _ChangeToolNamePage_hasMultipleDevices, this.devices.length > 1, "f");

                if (!(0, tslib__WEBPACK_IMPORTED_MODULE_14__.__classPrivateFieldGet)(this, _ChangeToolNamePage_hasMultipleDevices, "f")) {
                  _context10.next = 13;
                  break;
                }

                _context10.next = 13;
                return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__classPrivateFieldGet)(this, _ChangeToolNamePage_instances, "m", _ChangeToolNamePage_displayMultipleToolsFoundPopup).call(this);

              case 13:
              case "end":
                return _context10.stop();
            }
          }, _callee10, this);
        }));
      }, _ChangeToolNamePage_addDevice = function _ChangeToolNamePage_addDevice(id, name) {
        var localName = localStorage.getItem(id);

        if (localName) {
          this.devices.push(new src_app_models_app_model__WEBPACK_IMPORTED_MODULE_1__.BleData(id, localName, true));
        } else {
          this.devices.push(new src_app_models_app_model__WEBPACK_IMPORTED_MODULE_1__.BleData(id, name));
        }
      }, _ChangeToolNamePage_displayMultipleToolsFoundPopup = function _ChangeToolNamePage_displayMultipleToolsFoundPopup() {
        return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
          var modal;
          return _regeneratorRuntime().wrap(function _callee11$(_context11) {
            while (1) switch (_context11.prev = _context11.next) {
              case 0:
                if ((0, tslib__WEBPACK_IMPORTED_MODULE_14__.__classPrivateFieldGet)(this, _ChangeToolNamePage_multipleToolsFoundPopupVisible, "f")) {
                  _context11.next = 9;
                  break;
                }

                (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__classPrivateFieldSet)(this, _ChangeToolNamePage_multipleToolsFoundPopupVisible, true, "f");
                _context11.next = 4;
                return this.modalController.create({
                  component: src_app_modals_multiple_tools_found_modal_multiple_tools_found_modal_page__WEBPACK_IMPORTED_MODULE_7__.MultipleToolsFoundModalPage,
                  showBackdrop: true,
                  backdropDismiss: false,
                  cssClass: 'app-modal-dialog-3 px-2'
                });

              case 4:
                modal = _context11.sent;
                _context11.next = 7;
                return modal.present();

              case 7:
                _context11.next = 9;
                return modal.onDidDismiss();

              case 9:
              case "end":
                return _context11.stop();
            }
          }, _callee11, this);
        }));
      };

      _ChangeToolNamePage.ɵfac = function ChangeToolNamePage_Factory(t) {
        return new (t || _ChangeToolNamePage)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_9__.HelperService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_15__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_app_services_navigation_service__WEBPACK_IMPORTED_MODULE_10__.NavigationService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_app_services_innova_vci_service_src_connectivity_connectivity_service__WEBPACK_IMPORTED_MODULE_11__.ConnectivityService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_15__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_13__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_13__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_ionic_native_ble_ngx__WEBPACK_IMPORTED_MODULE_12__.BLE));
      };

      _ChangeToolNamePage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({
        type: _ChangeToolNamePage,
        selectors: [["app-change-tool-name"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵInheritDefinitionFeature"]],
        decls: 15,
        vars: 2,
        consts: [[1, "ion-padding"], [1, "app-content-center-midle"], [1, "text-center", 3, "hidden"], [1, "app-spinner-wrap"], ["name", "circles", 1, "size-8"], [1, "font-size-20", "mb-5"], [1, "text-center", 3, "click"], [1, "text-secondary", "font-size-18"], ["class", "text-center w-100 app-select-device-box px-3 py-4", 4, "ngIf"], [1, "text-center", "w-100", "app-select-device-box", "px-3", "py-4"], [1, "mb-5"], ["class", "app-button mb-5", "expand", "block", 3, "click", 4, "ngFor", "ngForOf"], [1, "text-white", "font-size-18"], ["expand", "block", 1, "app-button", "mb-5", 3, "click"]],
        template: function ChangeToolNamePage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ion-content", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4, "Scanning devices...");

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](6, "ion-spinner", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](8, "Starting scan");

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "ion-grid");

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "ion-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](11, "ion-col", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function ChangeToolNamePage_Template_ion_col_click_11_listener() {
              return ctx.cancel();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](12, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](13, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](14, ChangeToolNamePage_div_14_Template, 11, 1, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("hidden", !ctx.isScanning);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.devices && ctx.devices.length > 0);
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonSpinner, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonCol, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgForOf, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonButton],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGFuZ2UtdG9vbC1uYW1lLnBhZ2Uuc2NzcyJ9 */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_change-tool-name_change-tool-name_module_ts-es5.js.map