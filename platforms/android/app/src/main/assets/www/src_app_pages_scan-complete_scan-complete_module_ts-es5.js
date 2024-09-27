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

  (self["webpackChunkcom_carmd_proscan2"] = self["webpackChunkcom_carmd_proscan2"] || []).push([["src_app_pages_scan-complete_scan-complete_module_ts"], {
    /***/
    13651:
    /*!*********************************************************************!*\
      !*** ./src/app/pages/scan-complete/scan-complete-routing.module.ts ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ScanCompletePageRoutingModule": function ScanCompletePageRoutingModule() {
          return (
            /* binding */
            _ScanCompletePageRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _scan_complete_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./scan-complete.page */
      61415);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var routes = [{
        path: '',
        component: _scan_complete_page__WEBPACK_IMPORTED_MODULE_0__.ScanCompletePage
      }];

      var _ScanCompletePageRoutingModule = /*#__PURE__*/_createClass(function _ScanCompletePageRoutingModule() {
        _classCallCheck(this, _ScanCompletePageRoutingModule);
      });

      _ScanCompletePageRoutingModule.ɵfac = function ScanCompletePageRoutingModule_Factory(t) {
        return new (t || _ScanCompletePageRoutingModule)();
      };

      _ScanCompletePageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _ScanCompletePageRoutingModule
      });
      _ScanCompletePageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_ScanCompletePageRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    93375:
    /*!*************************************************************!*\
      !*** ./src/app/pages/scan-complete/scan-complete.module.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ScanCompletePageModule": function ScanCompletePageModule() {
          return (
            /* binding */
            _ScanCompletePageModule
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


      var _scan_complete_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./scan-complete-routing.module */
      13651);
      /* harmony import */


      var _scan_complete_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./scan-complete.page */
      61415);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _ScanCompletePageModule = /*#__PURE__*/_createClass(function _ScanCompletePageModule() {
        _classCallCheck(this, _ScanCompletePageModule);
      });

      _ScanCompletePageModule.ɵfac = function ScanCompletePageModule_Factory(t) {
        return new (t || _ScanCompletePageModule)();
      };

      _ScanCompletePageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: _ScanCompletePageModule
      });
      _ScanCompletePageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _scan_complete_routing_module__WEBPACK_IMPORTED_MODULE_0__.ScanCompletePageRoutingModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](_ScanCompletePageModule, {
          declarations: [_scan_complete_page__WEBPACK_IMPORTED_MODULE_1__.ScanCompletePage],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _scan_complete_routing_module__WEBPACK_IMPORTED_MODULE_0__.ScanCompletePageRoutingModule]
        });
      })();
      /***/

    },

    /***/
    61415:
    /*!***********************************************************!*\
      !*** ./src/app/pages/scan-complete/scan-complete.page.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ScanCompletePage": function ScanCompletePage() {
          return (
            /* binding */
            _ScanCompletePage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! tslib */
      42321);
      /* harmony import */


      var src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/app-routing.module */
      90158);
      /* harmony import */


      var src_app_bases_base_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/bases/base-controller */
      38790);
      /* harmony import */


      var _dtc_details_dtc_details_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../dtc-details/dtc-details.page */
      43430);
      /* harmony import */


      var _dtc_erase_dtc_erase_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../dtc-erase/dtc-erase.page */
      31632);
      /* harmony import */


      var src_app_services_state_app_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/state/app.state */
      12607);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ionic/angular */
      81864);
      /* harmony import */


      var src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/helper.service */
      22486);
      /* harmony import */


      var src_app_services_report_service_report_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/report-service/report-service */
      45322);
      /* harmony import */


      var src_app_services_innova_vci_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/innova-vci.service */
      7860);
      /* harmony import */


      var src_app_services_navigation_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/navigation.service */
      89565);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common */
      54364);

      var _c0 = ["content"];

      function ScanCompletePage_ion_toolbar_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-toolbar", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "ion-title", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("color", ctx_r0.incompleteReport ? "danger" : "secondary");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", ctx_r0.incompleteReport, "Report");
        }
      }

      function ScanCompletePage_ion_toolbar_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-toolbar", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "ion-title", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("color", ctx_r1.incompleteReport ? "danger" : "secondary");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", ctx_r1.incompleteReport, "Report");
        }
      }

      function ScanCompletePage_ion_item_34_ion_col_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-col", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Erase");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }
      }

      function ScanCompletePage_ion_item_34_ion_icon_16_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-icon", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ScanCompletePage_ion_item_34_ion_icon_16_Template_ion_icon_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r14);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);

            return ctx_r13.viewMilDtc(ctx_r13.PowertrainCodes.primaryCode);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }
      }

      function ScanCompletePage_ion_item_34_ion_col_17_ion_icon_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-icon", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ScanCompletePage_ion_item_34_ion_col_17_ion_icon_1_Template_ion_icon_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r17);

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);

            return ctx_r16.eraseDtcs(0, "", 0, 0, true);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }
      }

      function ScanCompletePage_ion_item_34_ion_col_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-col", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, ScanCompletePage_ion_item_34_ion_col_17_ion_icon_1_Template, 1, 0, "ion-icon", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r10.PowertrainCodes.primaryCode);
        }
      }

      function ScanCompletePage_ion_item_34_ion_icon_24_Template(rf, ctx) {
        if (rf & 1) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-icon", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ScanCompletePage_ion_item_34_ion_icon_24_Template_ion_icon_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r19);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);

            return ctx_r18.viewObdDtcs();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }
      }

      function ScanCompletePage_ion_item_34_ion_col_25_ion_icon_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-icon", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ScanCompletePage_ion_item_34_ion_col_25_ion_icon_1_Template_ion_icon_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r22);

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);

            return ctx_r21.eraseDtcs(0, "", 0, 0, true);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }
      }

      function ScanCompletePage_ion_item_34_ion_col_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-col", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, ScanCompletePage_ion_item_34_ion_col_25_ion_icon_1_Template, 1, 0, "ion-icon", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r12.totalOBDCodes > 0);
        }
      }

      function ScanCompletePage_ion_item_34_Template(rf, ctx) {
        if (rf & 1) {
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
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

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
        }
      }

      function ScanCompletePage_ion_item_35_ion_col_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-col", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Erase");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }
      }

      function ScanCompletePage_ion_item_35_ion_row_10_ion_col_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-col", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var module_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;

          var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("size", ctx_r26.showButtonEraseDtcs ? 6 : 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](module_r25.name);
        }
      }

      function ScanCompletePage_ion_item_35_ion_row_10_ion_col_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-col", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "span", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var module_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;

          var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("size", ctx_r27.showButtonEraseDtcs ? 6 : 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](module_r25.name);
        }
      }

      function ScanCompletePage_ion_item_35_ion_row_10_ion_icon_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-icon", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ScanCompletePage_ion_item_35_ion_row_10_ion_icon_6_Template_ion_icon_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r34);

            var module_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;

            var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);

            return ctx_r32.viewDtcDetails(module_r25.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }
      }

      function ScanCompletePage_ion_item_35_ion_row_10_ion_col_7_ion_icon_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-icon", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ScanCompletePage_ion_item_35_ion_row_10_ion_col_7_ion_icon_1_Template_ion_icon_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r38);

            var module_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2).$implicit;

            var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);

            return ctx_r36.eraseDtcs(module_r25.id, module_r25.name, module_r25.system, module_r25.subSystem, false);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }
      }

      function ScanCompletePage_ion_item_35_ion_row_10_ion_col_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-col", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, ScanCompletePage_ion_item_35_ion_row_10_ion_col_7_ion_icon_1_Template, 1, 0, "ion-icon", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var module_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", module_r25.dtcCount > 0 && !module_r25.isErased);
        }
      }

      function ScanCompletePage_ion_item_35_ion_row_10_Template(rf, ctx) {
        if (rf & 1) {
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
        }

        if (rf & 2) {
          var module_r25 = ctx.$implicit;

          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);

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
        }
      }

      function ScanCompletePage_ion_item_35_Template(rf, ctx) {
        if (rf & 1) {
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
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("size", ctx_r3.showButtonEraseDtcs ? 6 : 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r3.showButtonEraseDtcs);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r3.ModulesWithDTC);
        }
      }

      function ScanCompletePage_ion_button_37_Template(rf, ctx) {
        if (rf & 1) {
          var _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-button", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ScanCompletePage_ion_button_37_Template_ion_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r41);

            var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

            return ctx_r40.viewModulesWithoutDTC();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r4.btnViewModulesText);
        }
      }

      function ScanCompletePage_ion_item_38_ion_row_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "ion-col", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "ion-col", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "0");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var module_r43 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](module_r43.name);
        }
      }

      function ScanCompletePage_ion_item_38_Template(rf, ctx) {
        if (rf & 1) {
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
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r5.ModulesWithoutDTC);
        }
      }

      function ScanCompletePage_div_39_Template(rf, ctx) {
        if (rf & 1) {
          var _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "ion-button", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ScanCompletePage_div_39_Template_ion_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r45);

            var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

            return ctx_r44.rescan();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "Rescan");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }
      }

      function ScanCompletePage_ion_col_47_Template(rf, ctx) {
        if (rf & 1) {
          var _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-col");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "ion-button", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ScanCompletePage_ion_col_47_Template_ion_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r47);

            var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

            return ctx_r46.eraseAllDtcs();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "Erase All");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }
      }

      var _ScanCompletePage = /*#__PURE__*/function (_src_app_bases_base_c) {
        function _ScanCompletePage(navCtrl, navParams, helper, modalCtrl, reportService, innovaVciService, navigationService) {
          var _this;

          _classCallCheck(this, _ScanCompletePage);

          _this = _callSuper(this, _ScanCompletePage, ['ScanCompletePage']);
          _this.navCtrl = navCtrl;
          _this.navParams = navParams;
          _this.helper = helper;
          _this.modalCtrl = modalCtrl;
          _this.reportService = reportService;
          _this.innovaVciService = innovaVciService;
          _this.navigationService = navigationService;
          _this.WorkOrderNumber = '';
          _this.ReportId = '';
          _this.ModulesScannedCount = 0;
          _this.VehicleName = '';
          _this.VIN = '';
          _this.Mileage = 0;
          _this.TotalDTCCount = 0;
          _this.fromHistoryPage = false;
          _this.isViewModulesWithoutDTC = false;
          _this.showButtonEraseDtcs = true;
          _this.btnViewModulesText = 'Click to view good modules';
          _this.incompleteReport = '';
          _this.isErased = false;
          _this.isErasedOBDDtcs = false;
          _this.erasedModuleIds = [];
          _this.deviceId = '';
          _this.totalOBDCodes = 0;
          return _this;
        }

        _inherits(_ScanCompletePage, _src_app_bases_base_c);

        return _createClass(_ScanCompletePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.erasedModuleIds = [];
            this.deviceId = this.navigationService.getQueryParam('deviceId');
            this.ReportId = this.navigationService.getQueryParam('reportId');
            this.fromHistoryPage = this.helper.coerceBooleanProperty(this.navigationService.getQueryParam('fromHistory'));

            if (this.fromHistoryPage) {
              this.showButtonEraseDtcs = false;
            } else {
              this.showButtonEraseDtcs = true;
            }
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    this.isErased = false;
                    _context.next = 3;
                    return this.loadReport();

                  case 3:
                  case "end":
                    return _context.stop();
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "loadReport",
          value: function loadReport() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
              var ctx;
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    ctx = this;
                    _context2.next = 3;
                    return ctx.helper.showLoading();

                  case 3:
                    _context2.next = 5;
                    return ctx.reportService.getReport(ctx.ReportId);

                  case 5:
                    this.report = _context2.sent;

                    if (!this.report) {
                      _context2.next = 24;
                      break;
                    }

                    this.WorkOrderNumber = this.report.workOrderNumber;
                    this.ReportNumber = this.report.reportNumber;

                    if (this.report.powertrainCodes) {
                      this.PowertrainCodes = this.report.powertrainCodes;
                      this.totalOBDCodes = this.PowertrainCodes.otherCodeCount;
                    }

                    if (this.report.modulesWithDTC) {
                      ctx.ModulesWithDTC = this.report.modulesWithDTC.sort(function (d) {
                        return d.index;
                      });
                      ctx.ModulesWithDTC.forEach(function (item) {
                        if (ctx.erasedModuleIds.findIndex(function (e) {
                          return e.id === item.id;
                        }) > -1) item.isErased = true;
                      });
                    }

                    if (this.report.modulesWithoutDTC) {
                      ctx.ModulesWithoutDTC = this.report.modulesWithoutDTC;
                    }

                    if (this.report.status === 1) {
                      ctx.incompleteReport = 'Incomplete ';
                    } else {
                      ctx.incompleteReport = '';
                    }

                    ctx.VehicleName = this.report.ymme ? this.report.ymme : '';
                    ctx.VIN = this.report.vin ? this.report.vin : '';
                    ctx.Mileage = this.report.mileage;
                    ctx.TotalDTCCount = this.report.totalErrorCodeCount ? this.report.totalErrorCodeCount : 0;
                    ctx.ModulesScannedCount = this.report.modulesScannedCount ? this.report.modulesScannedCount : 0;

                    if (!(ctx.TotalDTCCount === 0)) {
                      _context2.next = 24;
                      break;
                    }

                    ctx.showButtonEraseDtcs = false;

                    if (ctx.fromHistoryPage) {
                      _context2.next = 24;
                      break;
                    }

                    _context2.next = 23;
                    return ctx.helper.hideLoading();

                  case 23:
                    ctx.disconnectTool();

                  case 24:
                    _context2.next = 26;
                    return ctx.helper.hideLoading();

                  case 26:
                  case "end":
                    return _context2.stop();
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "viewDtcDetails",
          value: function viewDtcDetails(moduleId) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
              var modal;
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.modalCtrl.create({
                      component: _dtc_details_dtc_details_page__WEBPACK_IMPORTED_MODULE_2__.DtcDetailsPage,
                      componentProps: {
                        ReportModel: this.report,
                        ModuleId: moduleId
                      }
                    });

                  case 2:
                    modal = _context3.sent;
                    modal.present();

                  case 4:
                  case "end":
                    return _context3.stop();
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "viewObdDtcs",
          value: function viewObdDtcs() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
              var modal;
              return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                while (1) switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.modalCtrl.create({
                      component: _dtc_details_dtc_details_page__WEBPACK_IMPORTED_MODULE_2__.DtcDetailsPage,
                      componentProps: {
                        DisplayOBDCodes: true,
                        StoredCodes: this.PowertrainCodes.storedCodes,
                        PendingCodes: this.PowertrainCodes.pendingCodes,
                        PermanentCodes: this.PowertrainCodes.permanentCodes
                      }
                    });

                  case 2:
                    modal = _context4.sent;
                    modal.present();

                  case 4:
                  case "end":
                    return _context4.stop();
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "viewMilDtc",
          value: function viewMilDtc(milDtc) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
              var modal;
              return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                while (1) switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.modalCtrl.create({
                      component: _dtc_details_dtc_details_page__WEBPACK_IMPORTED_MODULE_2__.DtcDetailsPage,
                      componentProps: {
                        MilDTC: milDtc
                      }
                    });

                  case 2:
                    modal = _context5.sent;
                    modal.present();

                  case 4:
                  case "end":
                    return _context5.stop();
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "viewModulesWithoutDTC",
          value: function viewModulesWithoutDTC() {
            this.isViewModulesWithoutDTC = !this.isViewModulesWithoutDTC;

            if (this.isViewModulesWithoutDTC) {
              this.btnViewModulesText = 'Click to hide good modules';
            } else this.btnViewModulesText = 'Click to view good modules';
          }
        }, {
          key: "eraseDtcs",
          value: function eraseDtcs(moduleId, moduleName, system, subSystem, isEraseOBDDTCs) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
              var modal, _yield$modal$onDidDis, data;

              return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                while (1) switch (_context6.prev = _context6.next) {
                  case 0:
                    this.logger.debug("erase dtcs ".concat(moduleId, " ").concat(moduleName, " ").concat(system, " ").concat(subSystem));
                    _context6.next = 3;
                    return this.modalCtrl.create({
                      component: _dtc_erase_dtc_erase_page__WEBPACK_IMPORTED_MODULE_3__.DtcErasePage,
                      componentProps: {
                        ReportId: this.ReportId,
                        ModuleId: moduleId,
                        ModuleName: moduleName,
                        System: system,
                        SubSystem: subSystem,
                        IsEraseAll: false,
                        IsEraseOBDDTCs: isEraseOBDDTCs
                      }
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
                      if (isEraseOBDDTCs) {
                        if (data.isErased) {
                          this.isErasedOBDDtcs = data.isErased;
                        } else {
                          this.helper.alert('Unable to erase OBD DTC Codes. Please try again.');
                        }
                      } else {
                        if (data.isErased) {
                          this.isErased = data.isErased;
                          this.ModulesWithDTC.forEach(function (item) {
                            if (item.id === moduleId) item.isErased = true;
                          });
                        } else {
                          this.helper.alert('Unable to erase dtcs of module: ' + moduleName + '. Please try again.');
                        }
                      }
                    }

                  case 10:
                  case "end":
                    return _context6.stop();
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "eraseAllDtcs",
          value: function eraseAllDtcs() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
              var modal, _yield$modal$onDidDis2, data;

              return _regeneratorRuntime().wrap(function _callee7$(_context7) {
                while (1) switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return this.modalCtrl.create({
                      component: _dtc_erase_dtc_erase_page__WEBPACK_IMPORTED_MODULE_3__.DtcErasePage,
                      componentProps: {
                        ReportId: this.ReportId,
                        IsEraseAll: true
                      }
                    });

                  case 2:
                    modal = _context7.sent;
                    modal.present();
                    _context7.next = 6;
                    return modal.onDidDismiss();

                  case 6:
                    _yield$modal$onDidDis2 = _context7.sent;
                    data = _yield$modal$onDidDis2.data;

                    if (data) {
                      if (data.isErased) {
                        this.isErased = data.isErased;
                        this.isErasedOBDDtcs = data.isErased;

                        if (this.ModulesWithDTC && this.ModulesWithDTC.length) {
                          this.ModulesWithDTC.forEach(function (item) {
                            item.isErased = true;
                          });
                        }
                      } else {
                        this.helper.alert('Unable to erase all dtcs. Please try again.');
                      }
                    }

                  case 9:
                  case "end":
                    return _context7.stop();
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "backToPastReport",
          value: function backToPastReport() {
            this.helper.goTo(src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_0__.RoutePath.ReportHistory);
          }
        }, {
          key: "goHome",
          value: function goHome() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
              var _this2 = this;

              return _regeneratorRuntime().wrap(function _callee9$(_context9) {
                while (1) switch (_context9.prev = _context9.next) {
                  case 0:
                    this.reportService.deleteReportSession();
                    return _context9.abrupt("return", this.helper.popToRoot(src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_0__.RoutePath.Home).then(function () {
                      return (0, tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(_this2, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
                        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
                          while (1) switch (_context8.prev = _context8.next) {
                            case 0:
                              _context8.next = 2;
                              return this.innovaVciService.disconnect(true, this.deviceId);

                            case 2:
                            case "end":
                              return _context8.stop();
                          }
                        }, _callee8, this);
                      }));
                    }));

                  case 2:
                  case "end":
                    return _context9.stop();
                }
              }, _callee9, this);
            }));
          }
        }, {
          key: "rescan",
          value: function rescan() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
              return _regeneratorRuntime().wrap(function _callee10$(_context10) {
                while (1) switch (_context10.prev = _context10.next) {
                  case 0:
                    this.navigationService.goTo(src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_0__.RoutePath.VehicleLinking, {
                      queryParams: {
                        isRescan: 'true'
                      }
                    });

                  case 1:
                  case "end":
                    return _context10.stop();
                }
              }, _callee10, this);
            }));
          }
        }, {
          key: "disconnectTool",
          value: function disconnectTool() {
            var goHome = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            var ctx = this;

            if (src_app_services_state_app_state__WEBPACK_IMPORTED_MODULE_4__.AppState.isOnDevice) {
              ctx.helper.hideLoading();

              if (goHome) {
                ctx.reportService.deleteReportSession();
                this.helper.popToRoot(src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_0__.RoutePath.Home);
              }
            }
          }
        }, {
          key: "done",
          value: function done() {
            if (this.fromHistoryPage) {
              this.backToPastReport();
            } else {
              this.goHome();
            }
          }
        }]);
      }(src_app_bases_base_controller__WEBPACK_IMPORTED_MODULE_1__.BaseController);

      _ScanCompletePage.ɵfac = function ScanCompletePage_Factory(t) {
        return new (t || _ScanCompletePage)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_11__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_11__.NavParams), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_5__.HelperService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_services_report_service_report_service__WEBPACK_IMPORTED_MODULE_6__.ReportServiceProvider), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_services_innova_vci_service__WEBPACK_IMPORTED_MODULE_7__.InnovaVCIService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_services_navigation_service__WEBPACK_IMPORTED_MODULE_8__.NavigationService));
      };

      _ScanCompletePage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
        type: _ScanCompletePage,
        selectors: [["app-scan-complete"]],
        viewQuery: function ScanCompletePage_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_c0, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵInheritDefinitionFeature"]],
        decls: 48,
        vars: 17,
        consts: [[1, "ion-no-border"], ["mode", "md", 3, "color", 4, "ngIf"], ["mode", "ios", 3, "color", 4, "ngIf"], [1, "ion-padding"], [1, "app-report-history", "py-3"], ["lines", "none"], ["lines", "none", "class", "ion-no-padding", 4, "ngIf"], [1, "mt-2", "mb-4-01"], ["type", "button", "class", "app-button w-100", 3, "click", 4, "ngIf"], ["class", "mt-2 mb-4-01", 4, "ngIf"], [1, "ion-no-border", "p-2"], [1, "py-1"], [1, "text-center"], ["type", "submit", "expand", "block", 1, "app-button", 3, "click"], [4, "ngIf"], ["mode", "md", 3, "color"], [2, "color", "white"], ["mode", "ios", 3, "color"], ["lines", "none", 1, "ion-no-padding"], [1, "app-grid-table"], [1, "app-grid-th"], [3, "size"], ["size", "2", 1, "ion-text-center"], ["size", "2", 1, "ion-text-center", 2, "padding-left", "0", "padding-right", "0"], ["style", "padding-left: 0; padding-right: 0;", "size", "2", "class", "ion-text-center", 4, "ngIf"], ["src", "assets/svg/info.svg", "class", "font-size-25", 3, "click", 4, "ngIf"], ["size", "2", "class", "ion-text-center", 4, "ngIf"], ["src", "assets/svg/info.svg", 1, "font-size-25", 3, "click"], ["class", "icon-proscan-delete font-size-25", "src", "assets/svg/delete.svg", 3, "click", 4, "ngIf"], ["src", "assets/svg/delete.svg", 1, "icon-proscan-delete", "font-size-25", 3, "click"], [4, "ngFor", "ngForOf"], [3, "size", 4, "ngIf"], [2, "color", "gray"], ["type", "button", 1, "app-button", "w-100", 3, "click"], ["size", "9"], ["size", "3", 1, "ion-text-center"], ["color", "danger", "expand", "block", 1, "app-button", 3, "click"]],
        template: function ScanCompletePage_Template(rf, ctx) {
          if (rf & 1) {
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

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ScanCompletePage_Template_ion_button_click_45_listener() {
              return ctx.done();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](46, "Done");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](47, ScanCompletePage_ion_col_47_Template, 3, 0, "ion-col", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
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
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonHeader, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonFooter, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonIcon, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.DecimalPipe],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzY2FuLWNvbXBsZXRlLnBhZ2Uuc2NzcyJ9 */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_scan-complete_scan-complete_module_ts-es5.js.map