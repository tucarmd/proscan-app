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

  (self["webpackChunkcom_carmd_proscan2"] = self["webpackChunkcom_carmd_proscan2"] || []).push([["src_app_pages_dlc-locator_dlc-locator_module_ts"], {
    /***/
    39490:
    /*!*****************************************************************!*\
      !*** ./src/app/pages/dlc-locator/dlc-locator-routing.module.ts ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DlcLocatorPageRoutingModule": function DlcLocatorPageRoutingModule() {
          return (
            /* binding */
            _DlcLocatorPageRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _dlc_locator_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./dlc-locator.page */
      19388);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var routes = [{
        path: '',
        component: _dlc_locator_page__WEBPACK_IMPORTED_MODULE_0__.DlcLocatorPage
      }];

      var _DlcLocatorPageRoutingModule = /*#__PURE__*/_createClass(function _DlcLocatorPageRoutingModule() {
        _classCallCheck(this, _DlcLocatorPageRoutingModule);
      });

      _DlcLocatorPageRoutingModule.ɵfac = function DlcLocatorPageRoutingModule_Factory(t) {
        return new (t || _DlcLocatorPageRoutingModule)();
      };

      _DlcLocatorPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _DlcLocatorPageRoutingModule
      });
      _DlcLocatorPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_DlcLocatorPageRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    11914:
    /*!*********************************************************!*\
      !*** ./src/app/pages/dlc-locator/dlc-locator.module.ts ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DlcLocatorPageModule": function DlcLocatorPageModule() {
          return (
            /* binding */
            _DlcLocatorPageModule
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


      var _dlc_locator_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./dlc-locator-routing.module */
      39490);
      /* harmony import */


      var _dlc_locator_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./dlc-locator.page */
      19388);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _DlcLocatorPageModule = /*#__PURE__*/_createClass(function _DlcLocatorPageModule() {
        _classCallCheck(this, _DlcLocatorPageModule);
      });

      _DlcLocatorPageModule.ɵfac = function DlcLocatorPageModule_Factory(t) {
        return new (t || _DlcLocatorPageModule)();
      };

      _DlcLocatorPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: _DlcLocatorPageModule
      });
      _DlcLocatorPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _dlc_locator_routing_module__WEBPACK_IMPORTED_MODULE_0__.DlcLocatorPageRoutingModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](_DlcLocatorPageModule, {
          declarations: [_dlc_locator_page__WEBPACK_IMPORTED_MODULE_1__.DlcLocatorPage],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _dlc_locator_routing_module__WEBPACK_IMPORTED_MODULE_0__.DlcLocatorPageRoutingModule]
        });
      })();
      /***/

    },

    /***/
    19388:
    /*!*******************************************************!*\
      !*** ./src/app/pages/dlc-locator/dlc-locator.page.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DlcLocatorPage": function DlcLocatorPage() {
          return (
            /* binding */
            _DlcLocatorPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! tslib */
      42321);
      /* harmony import */


      var src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/app-routing.module */
      90158);
      /* harmony import */


      var src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/configs/app.config */
      66626);
      /* harmony import */


      var src_app_bases_base_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/bases/base-controller */
      38790);
      /* harmony import */


      var _dlc_locator_details_dlc_locator_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../dlc-locator-details/dlc-locator-details.page */
      36152);
      /* harmony import */


      var _enter_vin_enter_vin_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../enter-vin/enter-vin.page */
      33971);
      /* harmony import */


      var src_app_services_state_app_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/state/app.state */
      12607);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @ionic/angular */
      81864);
      /* harmony import */


      var src_app_services_vehicle_service_vehicle_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/vehicle-service/vehicle-service */
      99578);
      /* harmony import */


      var src_app_services_report_service_report_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/report-service/report-service */
      45322);
      /* harmony import */


      var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic-native/barcode-scanner/ngx */
      10926);
      /* harmony import */


      var src_app_services_tool_service_tool_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/tool-service/tool-service */
      91841);
      /* harmony import */


      var src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/services/helper.service */
      22486);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/forms */
      1707);

      function DlcLocatorPage_ion_toolbar_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-toolbar", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "ion-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "DLC Locator");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        }
      }

      function DlcLocatorPage_ion_toolbar_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-toolbar", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "ion-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "DLC Locator");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        }
      }

      function DlcLocatorPage_ion_select_option_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-select-option", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var m_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", m_r5);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](m_r5);
        }
      }

      function DlcLocatorPage_ion_select_option_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-select-option", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var y_r6 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", y_r6);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](y_r6);
        }
      }

      function DlcLocatorPage_ion_select_option_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-select-option", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var m_r7 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("value", m_r7);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](m_r7);
        }
      }

      var _DlcLocatorPage = /*#__PURE__*/function (_src_app_bases_base_c) {
        function _DlcLocatorPage(navCtrl, navParams, vehicleService, reportService, barcodeScanner, modalCtrl, toolService, helper) {
          var _this;

          _classCallCheck(this, _DlcLocatorPage);

          _this = _callSuper(this, _DlcLocatorPage, ['DlcLocatorPage']);
          _this.navCtrl = navCtrl;
          _this.navParams = navParams;
          _this.vehicleService = vehicleService;
          _this.reportService = reportService;
          _this.barcodeScanner = barcodeScanner;
          _this.modalCtrl = modalCtrl;
          _this.toolService = toolService;
          _this.helper = helper;
          _this.DlcLocatorDetailsPage = _dlc_locator_details_dlc_locator_details_page__WEBPACK_IMPORTED_MODULE_3__.DlcLocatorDetailsPage;
          _this.makes = [];
          _this.years = [];
          _this.models = [];
          _this.make = "";
          _this.year = "";
          _this.model = "";
          return _this;
        }

        _inherits(_DlcLocatorPage, _src_app_bases_base_c);

        return _createClass(_DlcLocatorPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var data;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.helper.showLoading();

                  case 2:
                    _context.next = 4;
                    return this.vehicleService.getMakes();

                  case 4:
                    data = _context.sent;

                    if (data.success) {
                      this.makes = data.data;
                    } else {
                      this.helper.alert(src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_1__.AppStrings.MSG_SERVER_ERROR_TRY_LATER, src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_1__.AppStrings.ERROR);
                    }

                    ;
                    _context.next = 9;
                    return this.helper.hideLoading();

                  case 9:
                  case "end":
                    return _context.stop();
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.reportSession = this.reportService.getReportSession();
          }
        }, {
          key: "loadYears",
          value: function loadYears(selectedValue) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
              var ctx, data;
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    this.logger.debug('🚀 ~ file: dlc-locator.page.ts ~ line 55 ~ DlcLocatorPage ~ loadYears ~ selectedValue', selectedValue);

                    if (!selectedValue) {
                      _context2.next = 13;
                      break;
                    }

                    _context2.next = 4;
                    return this.helper.showLoading();

                  case 4:
                    this.make = selectedValue.detail.value;
                    ctx = this;
                    this.logger.debug('load years', this.make);
                    _context2.next = 9;
                    return ctx.vehicleService.getYears(this.make);

                  case 9:
                    data = _context2.sent;
                    _context2.next = 12;
                    return ctx.helper.hideLoading();

                  case 12:
                    if (data.success) {
                      ctx.years = data.data;
                      ctx.year = '';
                      ctx.model = '';
                    } else {
                      ctx.helper.alert(src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_1__.AppStrings.MSG_SERVER_ERROR_TRY_LATER, src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_1__.AppStrings.ERROR);
                    }

                  case 13:
                  case "end":
                    return _context2.stop();
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "loadModels",
          value: function loadModels(selectedValue) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
              var ctx, data;
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) switch (_context3.prev = _context3.next) {
                  case 0:
                    if (!selectedValue) {
                      _context3.next = 11;
                      break;
                    }

                    ctx = this;
                    ctx.year = selectedValue.detail.value;

                    if (!ctx.year) {
                      _context3.next = 11;
                      break;
                    }

                    this.helper.showLoading();
                    _context3.next = 7;
                    return ctx.vehicleService.getModels(ctx.make, ctx.year);

                  case 7:
                    data = _context3.sent;
                    ctx.helper.hideLoading();

                    if (data.success) {
                      ctx.models = data.data;
                      ctx.model = '';
                    } else {
                      ctx.helper.alert(src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_1__.AppStrings.MSG_SERVER_ERROR_TRY_LATER, src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_1__.AppStrings.ERROR);
                    }

                    ;

                  case 11:
                  case "end":
                    return _context3.stop();
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "setModel",
          value: function setModel(selectedValue) {
            if (selectedValue) this.model = selectedValue.detail.value;
          }
        }, {
          key: "getDlcLocation",
          value: function getDlcLocation() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
              var data, reportSession;
              return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                while (1) switch (_context4.prev = _context4.next) {
                  case 0:
                    if (!(this.year === '' || this.make === '' || this.model === '')) {
                      _context4.next = 3;
                      break;
                    }

                    this.helper.alert("Please select Year, Make, and Model to view DLC location.", src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_1__.AppStrings.ERROR);
                    return _context4.abrupt("return");

                  case 3:
                    this.helper.showLoading();
                    _context4.next = 6;
                    return this.vehicleService.getDlcLocation(this.make, this.year, this.model);

                  case 6:
                    data = _context4.sent;
                    this.helper.hideLoading();

                    if (data.success) {
                      reportSession = this.reportService.getReportSession();
                      reportSession.hasDlc = true;
                      reportSession.dlcModel = data.data;
                      this.reportService.saveReportSession(reportSession);
                      this.helper.goTo(src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_0__.RoutePath.DlcLocatorDetails);
                    } else {
                      this.helper.alert("Unable to get DLC location for this vehicle. Please try again.", src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_1__.AppStrings.ERROR);
                    }

                    ;

                  case 10:
                  case "end":
                    return _context4.stop();
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "getDlcLocationByVin",
          value: function getDlcLocationByVin(vin) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
              var data, reportSession;
              return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                while (1) switch (_context5.prev = _context5.next) {
                  case 0:
                    this.helper.showLoading();
                    _context5.next = 3;
                    return this.vehicleService.getDlcLocationByVin(vin);

                  case 3:
                    data = _context5.sent;
                    this.helper.hideLoading();

                    if (data.success) {
                      reportSession = this.reportService.getReportSession();
                      reportSession.dlcModel = data.data;
                      this.reportService.saveReportSession(reportSession);
                      this.helper.goTo(src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_0__.RoutePath.DlcLocatorDetails);
                    } else {
                      this.helper.alert('Invalid VIN. Either this VIN is too new for our system, or our system cannot decode this VIN, or this VIN is invalid. Please enter a different VIN.', src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_1__.AppStrings.ERROR);
                    }

                  case 6:
                  case "end":
                    return _context5.stop();
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "scanVin",
          value: function scanVin() {
            var _this2 = this;

            var ctx = this;

            if (src_app_services_state_app_state__WEBPACK_IMPORTED_MODULE_5__.AppState.isOnDevice) {
              try {
                ctx.barcodeScanner.scan({
                  orientation: "portrait",
                  prompt: ""
                }).then(function (barcodeData) {
                  if (barcodeData.cancelled) {
                    if (barcodeData.text && barcodeData.text === 'enterVin') {
                      _this2.enterVinManually();
                    }
                  } else if (barcodeData) {
                    var vin = barcodeData.text;

                    if (barcodeData.format === 'CODE_39' || vin != '' && vin.length >= 17) {
                      if (vin.length > 17) {
                        vin = vin.substring(1);
                      }

                      ctx.getDlcLocationByVin(vin);
                    } else {
                      ctx.toolService.wait(10).then(function () {
                        ctx.scanVin();
                      });
                    }
                  }
                }, function (err) {
                  _this2.logger.debug(err);

                  ctx.toolService.wait(10).then(function () {
                    ctx.scanVin();
                  });
                });
              } catch (error) {
                this.helper.alert(error);
              }
            } else {
              this.enterVinManually();
            }
          }
        }, {
          key: "enterVinManually",
          value: function enterVinManually() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
              var modal, _yield$modal$onDidDis, data, reportSession;

              return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                while (1) switch (_context6.prev = _context6.next) {
                  case 0:
                    this.logger.debug('enterVinManually');
                    _context6.next = 3;
                    return this.modalCtrl.create({
                      component: _enter_vin_enter_vin_page__WEBPACK_IMPORTED_MODULE_4__.EnterVinPage
                    });

                  case 3:
                    modal = _context6.sent;
                    modal.present();
                    _context6.next = 7;
                    return modal.onDidDismiss();

                  case 7:
                    _yield$modal$onDidDis = _context6.sent;
                    data = _yield$modal$onDidDis.data;

                    if (data) {
                      reportSession = this.reportService.getReportSession();
                      reportSession.dlcModel = data.data;
                      this.reportService.saveReportSession(reportSession);
                      this.helper.goTo(src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_0__.RoutePath.DlcLocatorDetails); // this.getDlcLocationByVin(data.vin);
                    }

                  case 10:
                  case "end":
                    return _context6.stop();
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "cancel",
          value: function cancel() {
            this.helper.goBack();
          }
        }]);
      }(src_app_bases_base_controller__WEBPACK_IMPORTED_MODULE_2__.BaseController);

      _DlcLocatorPage.ɵfac = function DlcLocatorPage_Factory(t) {
        return new (t || _DlcLocatorPage)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_13__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_13__.NavParams), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_services_vehicle_service_vehicle_service__WEBPACK_IMPORTED_MODULE_6__.VehicleServiceProvider), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_services_report_service_report_service__WEBPACK_IMPORTED_MODULE_7__.ReportServiceProvider), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_8__.BarcodeScanner), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_13__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_services_tool_service_tool_service__WEBPACK_IMPORTED_MODULE_9__.ToolServiceProvider), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_10__.HelperService));
      };

      _DlcLocatorPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
        type: _DlcLocatorPage,
        selectors: [["app-dlc-locator"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵInheritDefinitionFeature"]],
        decls: 30,
        vars: 11,
        consts: [[1, "ion-no-border"], ["mode", "md", 4, "ngIf"], ["mode", "ios", 4, "ngIf"], [1, "ion-padding"], [1, "mb-4"], ["placeholder", "Make", 1, "app-select", 3, "ngModel", "ngModelChange", "ionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["placeholder", "Year", 1, "app-select", 3, "disabled", "ngModel", "ngModelChange", "ionChange"], [1, "mb-5"], ["placeholder", "Model", 1, "app-select", 3, "disabled", "ngModel", "ngModelChange", "ionChange"], [1, "text-center"], ["expand", "block", "type", "submit", 1, "app-button", 3, "disabled", "click"], [3, "click"], [1, "text-center", "mb-3"], [1, "font-size-18"], [1, "font-size-18", "text-light"], ["mode", "md"], ["mode", "ios"], [3, "value"]],
        template: function DlcLocatorPage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, DlcLocatorPage_ion_toolbar_1_Template, 3, 0, "ion-toolbar", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, DlcLocatorPage_ion_toolbar_2_Template, 3, 0, "ion-toolbar", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "ion-content", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "ion-grid");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "ion-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "ion-col", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "ion-select", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function DlcLocatorPage_Template_ion_select_ngModelChange_7_listener($event) {
              return ctx.make = $event;
            })("ionChange", function DlcLocatorPage_Template_ion_select_ionChange_7_listener($event) {
              return ctx.loadYears($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](8, DlcLocatorPage_ion_select_option_8_Template, 2, 2, "ion-select-option", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "ion-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "ion-col", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "ion-select", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function DlcLocatorPage_Template_ion_select_ngModelChange_11_listener($event) {
              return ctx.year = $event;
            })("ionChange", function DlcLocatorPage_Template_ion_select_ionChange_11_listener($event) {
              return ctx.loadModels($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](12, DlcLocatorPage_ion_select_option_12_Template, 2, 2, "ion-select-option", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "ion-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "ion-col", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](15, "ion-select", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function DlcLocatorPage_Template_ion_select_ngModelChange_15_listener($event) {
              return ctx.model = $event;
            })("ionChange", function DlcLocatorPage_Template_ion_select_ionChange_15_listener($event) {
              return ctx.setModel($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](16, DlcLocatorPage_ion_select_option_16_Template, 2, 2, "ion-select-option", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](17, "ion-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](18, "ion-col", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](19, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](20, "ion-button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DlcLocatorPage_Template_ion_button_click_20_listener() {
              return ctx.getDlcLocation();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](21, "Submit");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](22, "ion-row", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DlcLocatorPage_Template_ion_row_click_22_listener() {
              return ctx.scanVin();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](23, "ion-col", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](24, "a", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](25, "Scan VIN");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](26, "ion-row", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DlcLocatorPage_Template_ion_row_click_26_listener() {
              return ctx.cancel();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](27, "ion-col", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](28, "a", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](29, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.isAndroid);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx.isAndroid);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx.make);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx.makes);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", !ctx.make)("ngModel", ctx.year);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx.years);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", !ctx.make || !ctx.year)("ngModel", ctx.model);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx.models);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", !(ctx.year != "" && ctx.make != "" && ctx.model != ""));
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonHeader, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonSelect, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.SelectValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonSelectOption],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkbGMtbG9jYXRvci5wYWdlLnNjc3MifQ== */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_dlc-locator_dlc-locator_module_ts-es5.js.map