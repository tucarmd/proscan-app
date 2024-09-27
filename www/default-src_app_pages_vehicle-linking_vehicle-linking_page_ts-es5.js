(function () {
  "use strict";

  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }

  function _possibleConstructorReturn(t, e) { if (e && ("object" == typeof e || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }

  function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }

  function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }

  function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }

  function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }

  function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }

  (self["webpackChunkcom_carmd_proscan2"] = self["webpackChunkcom_carmd_proscan2"] || []).push([["default-src_app_pages_vehicle-linking_vehicle-linking_page_ts"], {
    /***/
    55499:
    /*!***************************************************************!*\
      !*** ./src/app/pages/vehicle-linking/vehicle-linking.page.ts ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "VehicleLinkingPage": function VehicleLinkingPage() {
          return (
            /* binding */
            _VehicleLinkingPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! tslib */
      42321);
      /* harmony import */


      var src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/configs/app.config */
      66626);
      /* harmony import */


      var src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/app-routing.module */
      90158);
      /* harmony import */


      var src_app_models_app_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/models/app.enum */
      34932);
      /* harmony import */


      var src_app_services_innova_tool_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/innova-tool-models */
      92951);
      /* harmony import */


      var src_app_models_app_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/models/app.data */
      40354);
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! lodash */
      202);
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var _enter_vin_enter_vin_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../enter-vin/enter-vin.page */
      33971);
      /* harmony import */


      var src_app_models_report_session__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/models/report-session */
      34045);
      /* harmony import */


      var src_app_bases_base_controller__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/bases/base-controller */
      38790);
      /* harmony import */


      var src_app_models_app_constant__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/models/app.constant */
      99888);
      /* harmony import */


      var src_app_services_state_app_state__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/services/state/app.state */
      12607);
      /* harmony import */


      var _modals_vehicle_selection_vehicle_selection_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../modals/vehicle-selection/vehicle-selection.page */
      31452);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @ionic/angular */
      81864);
      /* harmony import */


      var src_app_services_innova_vci_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/services/innova-vci.service */
      7860);
      /* harmony import */


      var src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/services/helper.service */
      22486);
      /* harmony import */


      var src_app_services_navigation_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! src/app/services/navigation.service */
      89565);
      /* harmony import */


      var src_app_services_innova_vci_service_src_connectivity_connectivity_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! src/app/services/innova-vci-service/src/connectivity/connectivity.service */
      27555);
      /* harmony import */


      var _ionic_native_insomnia_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @ionic-native/insomnia/ngx */
      31484);
      /* harmony import */


      var _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @ionic-native/diagnostic/ngx */
      91089);
      /* harmony import */


      var _ionic_native_open_native_settings_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @ionic-native/open-native-settings/ngx */
      35266);
      /* harmony import */


      var src_app_services_report_service_report_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! src/app/services/report-service/report-service */
      45322);
      /* harmony import */


      var src_app_services_events_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! src/app/services/events.service */
      80106);
      /* harmony import */


      var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @ionic-native/barcode-scanner/ngx */
      10926);
      /* harmony import */


      var src_app_services_vehicle_service_vehicle_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! src/app/services/vehicle-service/vehicle-service */
      99578);
      /* harmony import */


      var _ionic_native_ble_ngx__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @ionic-native/ble/ngx */
      11695);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! @angular/common */
      54364);

      var _VehicleLinkingPage_instances, _VehicleLinkingPage_vehicleData, _VehicleLinkingPage_startScanTools;

      function VehicleLinkingPage_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](1, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](3, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](4, "ion-spinner", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](5, "ion-icon", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](6, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](8, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](10, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](11, "This may take several minutes to complete.");

          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](12, "ion-grid", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](13, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](14, "ion-col", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵlistener"]("click", function VehicleLinkingPage_div_2_Template_ion_col_click_14_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"]();

            return ctx_r3.cancel();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](15, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](16, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("hidden", ctx_r0.isScanning);

          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtextInterpolate1"]("", ctx_r0.title, " ...");

          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtextInterpolate"](ctx_r0.resultText);

          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtextInterpolate"](ctx_r0.statusText);

          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("hidden", ctx_r0.creatingReport);
        }
      }

      function VehicleLinkingPage_div_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](1, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](2, "Scanning devices...");

          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](3, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](4, "ion-spinner", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](5, "p", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](6, "Starting scan");

          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](7, "ion-grid");

          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](8, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](9, "ion-col", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵlistener"]("click", function VehicleLinkingPage_div_3_Template_ion_col_click_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"]();

            return ctx_r5.cancel();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](10, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](11, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("hidden", !ctx_r1.isScanning);
        }
      }

      function VehicleLinkingPage_div_4_ion_button_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](0, "ion-button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵlistener"]("click", function VehicleLinkingPage_div_4_ion_button_3_Template_ion_button_click_0_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵrestoreView"](_r10);

            var device_r8 = restoredCtx.$implicit;

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"](2);

            return ctx_r9.selectDevice(device_r8);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var device_r8 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtextInterpolate"](device_r8.displayName);
        }
      }

      function VehicleLinkingPage_div_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](1, "h2", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](2, "Please select device");

          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtemplate"](3, VehicleLinkingPage_div_4_ion_button_3_Template, 2, 1, "ion-button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](4, "ion-grid");

          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](5, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](6, "ion-col", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵlistener"]("click", function VehicleLinkingPage_div_4_Template_ion_col_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵrestoreView"](_r12);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"]();

            return ctx_r11.cancel();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](7, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](8, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("ngForOf", ctx_r2.devices);
        }
      }

      var _VehicleLinkingPage = /*#__PURE__*/function (_src_app_bases_base_c) {
        function _VehicleLinkingPage(modalController, innovaVciService, helper, navigationService, connService, platform, insomnia, zone, diagnostic, openNativeSettings, reportService, eventService, barcodeScanner, changeDetector, vehicleService, ble) {
          var _this;

          _classCallCheck(this, _VehicleLinkingPage);

          _this = _callSuper(this, _VehicleLinkingPage, ['VehicleLinkingPage']);
          _this.modalController = modalController;
          _this.innovaVciService = innovaVciService;
          _this.helper = helper;
          _this.navigationService = navigationService;
          _this.connService = connService;
          _this.platform = platform;
          _this.insomnia = insomnia;
          _this.zone = zone;
          _this.diagnostic = diagnostic;
          _this.openNativeSettings = openNativeSettings;
          _this.reportService = reportService;
          _this.eventService = eventService;
          _this.barcodeScanner = barcodeScanner;
          _this.changeDetector = changeDetector;
          _this.vehicleService = vehicleService;
          _this.ble = ble;

          _VehicleLinkingPage_instances.add(_this);

          _this.title = 'Scanning devices';
          _this.isRescan = false;
          _this.isScanning = true;
          _this.hasMultipleDevices = false;
          _this.retry = 0;
          _this.retryingCreateReport = false;
          _this.percent = 0;
          _this.isScanningVIN = false;
          _this.isScanningModules = false;
          _this.found = false;
          _this.result = 'Starting scan';
          _this.isRetried = false;
          _this.isCancelling = false;
          _this.creatingReport = false;
          _this.deviceId = '';
          _this.toolName = '';
          _this.createReportErrorMessage = '';
          _this.isLeaveScanningPage = false;
          _this.scanningTimeout = null;

          _VehicleLinkingPage_vehicleData.set(_this, void 0);

          _this.multipleDevicesInterval = null;
          return _this;
        }

        _inherits(_VehicleLinkingPage, _src_app_bases_base_c);

        return _createClass(_VehicleLinkingPage, [{
          key: "setStatus",
          value: function setStatus(result) {
            var _this2 = this;

            var status = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
            console.log('🚀 ~ VehicleLinkingPage ~ setStatus ~ result:', result);
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
            console.log('🚀 ~ VehicleLinkingPage ~ selectDevice ~ device:', device);
            this.eventService.publish(src_app_services_innova_tool_models__WEBPACK_IMPORTED_MODULE_3__.InnovaVCIEvent.DEVICE_SELECTED, device);
            this.isScanning = false;
            this.hasMultipleDevices = false; // this.title = 'Loading...';

            this.helper.refreshLayout(this.changeDetector);
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_25__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
              var _this3 = this;

              var ctx;
              return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                while (1) switch (_context4.prev = _context4.next) {
                  case 0:
                    this.hasMultipleDevices = false;
                    this.isScanning = false;
                    this.isCancelling = false;
                    this.creatingReport = false;
                    this.isLeaveScanningPage = false;
                    this.createReportErrorMessage = '';
                    this.vciRepsonse = null;
                    this.reportStatus = src_app_models_report_session__WEBPACK_IMPORTED_MODULE_7__.ReportStatus.Incomplete;
                    this.reportSession = this.reportService.getReportSession();
                    this.connectedVehicle = src_app_models_app_data__WEBPACK_IMPORTED_MODULE_4__.AppData.get(src_app_models_app_enum__WEBPACK_IMPORTED_MODULE_2__.EnumAppDataKey.InfoVehicleConnected);
                    this.isRescan = this.helper.coerceBooleanProperty(this.navigationService.getQueryParam('isRescan'));

                    if (this.isRescan) {
                      this.title = 'Rescanning modules';
                      this.result = '';
                    } else {
                      this.isScanning = true;
                      this.title = 'Scanning devices';
                      this.result = 'Starting scan';
                      this.eventService.subscribe(src_app_services_innova_tool_models__WEBPACK_IMPORTED_MODULE_3__.InnovaVCIEvent.CONNECTED, function (device) {
                        _this3.logger.debug('Connected: ', device);

                        _this3.deviceId = device.id;
                        _this3.toolName = device.name;
                        _this3.title = 'Loading';

                        _this3.setStatus(device.name + ' has been connected', 'Linking to vehicle...');

                        _this3.isScanning = false;

                        if (_this3.scanningTimeout) {
                          clearTimeout(_this3.scanningTimeout);
                          _this3.scanningTimeout = null;
                        }

                        if (_this3.multipleDevicesInterval) {
                          clearInterval(_this3.multipleDevicesInterval);
                          _this3.multipleDevicesInterval = null;
                        }

                        _this3.startScan();
                      });
                      ctx = this;
                      ctx.devices = [];
                      this.eventService.subscribe(src_app_services_innova_tool_models__WEBPACK_IMPORTED_MODULE_3__.InnovaVCIEvent.DEVICE_FOUND, function (device) {
                        if (!ctx.devices) {
                          ctx.devices = [];
                        }

                        if (ctx.devices.findIndex(function (d) {
                          return d.id === device.id;
                        }) < 0) {
                          ctx.devices.push(device);
                        }
                      });
                      ctx.multipleDevicesInterval = setInterval(function () {
                        if (ctx.isScanning) {
                          if (ctx.devices.length > 0) {
                            if (_this3.multipleDevicesInterval) {
                              clearInterval(_this3.multipleDevicesInterval);
                              _this3.multipleDevicesInterval = null;
                            }

                            ctx.eventService.unsubscribe(src_app_services_innova_tool_models__WEBPACK_IMPORTED_MODULE_3__.InnovaVCIEvent.DEVICE_FOUND);
                            ctx.isScanning = false;
                            clearTimeout(ctx.scanningTimeout);
                            ctx.scanningTimeout = null;

                            if (src_app_services_state_app_state__WEBPACK_IMPORTED_MODULE_10__.AppState.isOnAndroid) {
                              console.log('Call this.ble.stopScan');
                              ctx.connService.stopScan();
                            }

                            if (ctx.devices.length > 1) {
                              ctx.hasMultipleDevices = true;
                            } else {
                              ctx.selectDevice(ctx.devices[0]);
                            }

                            ctx.helper.refreshLayout(ctx.changeDetector);
                          }
                        } else {
                          clearInterval(ctx.multipleDevicesInterval);
                          ctx.multipleDevicesInterval = null;
                        }
                      }, src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_0__.AppConfig.scanningDevicesInterval);
                      this.isScanningModules = false;
                      this.eventService.subscribe(src_app_models_app_enum__WEBPACK_IMPORTED_MODULE_2__.EnumAppEvent.InfoToolConnected, function (toolInfo) {
                        return (0, tslib__WEBPACK_IMPORTED_MODULE_25__.__awaiter)(_this3, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
                          return _regeneratorRuntime().wrap(function _callee$(_context) {
                            while (1) switch (_context.prev = _context.next) {
                              case 0:
                                this.eventService.unsubscribe(src_app_models_app_enum__WEBPACK_IMPORTED_MODULE_2__.EnumAppEvent.InfoToolConnected);
                                this.logger.debug(toolInfo);
                                this.toolInfo = toolInfo;

                                if (this.toolInfo) {
                                  localStorage.setItem(src_app_models_app_constant__WEBPACK_IMPORTED_MODULE_9__.StorageKeys.FIRMWARE_VERSION, this.toolInfo.main);
                                }

                              case 4:
                              case "end":
                                return _context.stop();
                            }
                          }, _callee, this);
                        }));
                      });
                      this.scanningTimeout = setTimeout(function () {
                        return (0, tslib__WEBPACK_IMPORTED_MODULE_25__.__awaiter)(_this3, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
                          var _this4 = this;

                          return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                            while (1) switch (_context3.prev = _context3.next) {
                              case 0:
                                if (!this.isConnected) {
                                  this.navigationService.goTo(src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_1__.RoutePath.ConnectionFailed).then(function () {
                                    return (0, tslib__WEBPACK_IMPORTED_MODULE_25__.__awaiter)(_this4, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
                                      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                                        while (1) switch (_context2.prev = _context2.next) {
                                          case 0:
                                            if (src_app_services_state_app_state__WEBPACK_IMPORTED_MODULE_10__.AppState.isOnAndroid) {
                                              console.log('Call this.ble.stopScan');
                                              this.ble.stopScan();
                                            }

                                            _context2.next = 3;
                                            return this.innovaVciService.disconnect(true, this.deviceId);

                                          case 3:
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
                      }, src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_0__.AppConfig.scanningDevicesTimeout);
                    }

                    console.log('🚀 ~ VehicleLinkingPage ~ ionViewWillEnter ~ DONE ionViewWillEnter:');

                  case 13:
                  case "end":
                    return _context4.stop();
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_25__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
              var _this5 = this;

              var isBtEnabled;
              return _regeneratorRuntime().wrap(function _callee7$(_context7) {
                while (1) switch (_context7.prev = _context7.next) {
                  case 0:
                    this.eventService.subscribe(src_app_services_innova_tool_models__WEBPACK_IMPORTED_MODULE_3__.InnovaVCIEvent.SCAN_STATUS, function (res) {
                      var name = lodash__WEBPACK_IMPORTED_MODULE_5___default().get(res, 'name');
                      var result = lodash__WEBPACK_IMPORTED_MODULE_5___default().get(res, 'result');

                      _this5.setStatus(result, name);
                    }); // Check Bluetooth Permission
                    //bao check temp

                    _context7.next = 3;
                    return this.helper.checkBluetoothPermissions();

                  case 3:
                    isBtEnabled = _context7.sent;

                    if (!isBtEnabled) {
                      if (src_app_services_state_app_state__WEBPACK_IMPORTED_MODULE_10__.AppState.isOnAndroid && !src_app_services_state_app_state__WEBPACK_IMPORTED_MODULE_10__.AppState.isOnAtLeastVersion(13)) {
                        this.helper.confirm('In order to detect and pair to your scan tool, please turn Bluetooth ON.', 'Bluetooth is turned OFF', function () {
                          return (0, tslib__WEBPACK_IMPORTED_MODULE_25__.__awaiter)(_this5, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
                            return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                              while (1) switch (_context5.prev = _context5.next) {
                                case 0:
                                  _context5.next = 2;
                                  return this.diagnostic.setBluetoothState(true);

                                case 2:
                                  isBtEnabled = _context5.sent;
                                  this.logger.debug('Is BT Enabled', isBtEnabled);

                                  if (isBtEnabled) {
                                    this.startScanNow();
                                  } else {
                                    this.helper.goBack();
                                  }

                                case 5:
                                case "end":
                                  return _context5.stop();
                              }
                            }, _callee5, this);
                          }));
                        }, function () {
                          _this5.helper.goBack();
                        }, 'Turn Bluetooth ON', 'Cancel');
                      } else {
                        this.helper.confirm('In order to detect and pair to your scan tool, turn Bluetooth ON from your device’s settings.', 'Bluetooth is turned OFF', function () {
                          return (0, tslib__WEBPACK_IMPORTED_MODULE_25__.__awaiter)(_this5, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
                            var _this6 = this;

                            return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                              while (1) switch (_context6.prev = _context6.next) {
                                case 0:
                                  if (src_app_services_state_app_state__WEBPACK_IMPORTED_MODULE_10__.AppState.isOnAndroid) {
                                    this.diagnostic.switchToBluetoothSettings();
                                  } else {
                                    this.openNativeSettings.open('settings')["catch"](function (ex) {
                                      var _a;

                                      (_a = _this6.logger) === null || _a === void 0 ? void 0 : _a.info('openSettings>openNativeSettings>Error', ex);
                                    });
                                  }

                                case 1:
                                case "end":
                                  return _context6.stop();
                              }
                            }, _callee6, this);
                          }));
                        }, function () {
                          _this5.helper.goBack();
                        }, 'Go to settings', 'Cancel');
                      }
                    } else {
                      this.startScanNow();
                    }

                  case 5:
                  case "end":
                    return _context7.stop();
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "startScanNow",
          value: function startScanNow() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_25__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
              return _regeneratorRuntime().wrap(function _callee8$(_context8) {
                while (1) switch (_context8.prev = _context8.next) {
                  case 0:
                    console.log('this.isRescan: ', this.isRescan);

                    if (!this.isRescan) {
                      _context8.next = 9;
                      break;
                    }

                    this.isScanningModules = true;
                    this.setStatus('', 'Read supported modules...');
                    _context8.next = 6;
                    return this.scanOEMModules(this.innovaVciService.vciResponseData.vin);

                  case 6:
                    return _context8.abrupt("return", _context8.sent);

                  case 9:
                    _context8.next = 11;
                    return (0, tslib__WEBPACK_IMPORTED_MODULE_25__.__classPrivateFieldGet)(this, _VehicleLinkingPage_instances, "m", _VehicleLinkingPage_startScanTools).call(this);

                  case 11:
                    return _context8.abrupt("return", _context8.sent);

                  case 12:
                  case "end":
                    return _context8.stop();
                }
              }, _callee8, this);
            }));
          }
        }, {
          key: "saveAndCreateReport",
          value: function saveAndCreateReport(vciRepsonse, reportStatus) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_25__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
              var ctx;
              return _regeneratorRuntime().wrap(function _callee9$(_context9) {
                while (1) switch (_context9.prev = _context9.next) {
                  case 0:
                    this.setStatus('', 'Creating report...');
                    ctx = this;

                    if (!ctx.isCancelling) {
                      _context9.next = 4;
                      break;
                    }

                    return _context9.abrupt("return");

                  case 4:
                    ctx.reportService.saveReportSession(ctx.reportSession);
                    ctx.creatingReport = true;
                    _context9.next = 8;
                    return ctx.helper.sleep(1000);

                  case 8:
                    _context9.next = 10;
                    return ctx.createReport(vciRepsonse, reportStatus);

                  case 10:
                  case "end":
                    return _context9.stop();
                }
              }, _callee9, this);
            }));
          }
        }, {
          key: "createReportFailed",
          value: function createReportFailed() {
            var _this7 = this;

            this.retryingCreateReport = true;
            this.creatingReport = false;
            this.isCancelling = true;
            this.helper.confirm(this.createReportErrorMessage, '', function () {
              return (0, tslib__WEBPACK_IMPORTED_MODULE_25__.__awaiter)(_this7, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
                return _regeneratorRuntime().wrap(function _callee10$(_context10) {
                  while (1) switch (_context10.prev = _context10.next) {
                    case 0:
                      this.isCancelling = false;
                      _context10.next = 3;
                      return this.createReport(this.vciRepsonse, this.reportStatus);

                    case 3:
                    case "end":
                      return _context10.stop();
                  }
                }, _callee10, this);
              }));
            }, function () {
              _this7.cancel(true, true);
            }, 'Try Again', 'Cancel');
          }
        }, {
          key: "createReport",
          value: function createReport(vciRepsonse, reportStatus) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_25__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
              var ctx, result;
              return _regeneratorRuntime().wrap(function _callee11$(_context11) {
                while (1) switch (_context11.prev = _context11.next) {
                  case 0:
                    ctx = this;
                    _context11.prev = 1;
                    ctx.creatingReport = true;
                    ctx.isScanningModules = false;
                    this.logger.debug('Creating report');

                    if (!vciRepsonse.mileage) {
                      vciRepsonse.mileage = ctx.reportSession.mileage;
                    }

                    _context11.next = 8;
                    return ctx.reportService.createReport(ctx.reportSession.workOrderNumber, vciRepsonse, reportStatus);

                  case 8:
                    result = _context11.sent;

                    if (result.success) {
                      this.logger.debug('Report Created Success');
                      ctx.reportSession.reportId = result.data.id;
                      ctx.reportSession.reportNumber = result.data.reportNumber + '';
                      ctx.reportService.saveReportSession(ctx.reportSession);
                      ctx.retryingCreateReport = false;
                      ctx.reportService.saveReport(result.data);
                      ctx.resultText = '';
                      ctx.statusText = '';
                      ctx.navigationService.goTo(src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_1__.RoutePath.ScanComplete, {
                        queryParams: {
                          deviceId: ctx.deviceId,
                          reportId: result.data.id
                        }
                      });
                    } else {
                      this.logger.debug('Unable to create report', result);

                      if (result.message && result.message.message != undefined) {
                        ctx.createReportErrorMessage = 'Create report failed: ' + result.message.message + ' Please try again.';
                      } else {
                        ctx.createReportErrorMessage = 'Unable to create report. Please check your internet connection and try again.';
                      }

                      ctx.reportStatus = reportStatus;
                      ctx.vciRepsonse = vciRepsonse;
                      ctx.createReportFailed();
                    }

                    _context11.next = 19;
                    break;

                  case 12:
                    _context11.prev = 12;
                    _context11.t0 = _context11["catch"](1);
                    this.logger.debug('Unable to create report', _context11.t0);
                    ctx.createReportErrorMessage = 'Unable to create report. Please try again.';
                    ctx.reportStatus = reportStatus;
                    ctx.vciRepsonse = vciRepsonse;
                    ctx.createReportFailed();

                  case 19:
                  case "end":
                    return _context11.stop();
                }
              }, _callee11, this, [[1, 12]]);
            }));
          }
        }, {
          key: "gotVIN",
          value: function gotVIN(needSetVIN, vin) {
            var _a, _b, _c, _d;

            return (0, tslib__WEBPACK_IMPORTED_MODULE_25__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee12() {
              var _this8 = this;

              var result, isVehicleInfoOk;
              return _regeneratorRuntime().wrap(function _callee12$(_context12) {
                while (1) switch (_context12.prev = _context12.next) {
                  case 0:
                    if (!needSetVIN) {
                      _context12.next = 7;
                      break;
                    }

                    this.innovaVciService.vciResponseData.vin = vin;
                    this.logger.debug('Writing VIN: ', vin);
                    _context12.next = 5;
                    return this.innovaVciService.setVin(vin, true);

                  case 5:
                    _context12.next = 7;
                    return this.helper.sleep(2000);

                  case 7:
                    if (!this.innovaVciService.needUpdateMoreVehicleInfo) {
                      _context12.next = 21;
                      break;
                    }

                    _context12.next = 10;
                    return this.innovaVciService.ymme_get(254)["catch"](function (err) {
                      return null;
                    });

                  case 10:
                    result = _context12.sent;

                    if (!(result && result.field !== 'Done')) {
                      _context12.next = 21;
                      break;
                    }

                    this.logger.debug('vciResponseData ymme', this.innovaVciService.vciResponseData.ymme);
                    this.logger.debug('ymme_get 254 result', result);
                    _context12.next = 16;
                    return this.setVehicleInfoFromUser({
                      year: (_a = this.innovaVciService.vciResponseData.ymme) === null || _a === void 0 ? void 0 : _a.year,
                      make: (_b = this.innovaVciService.vciResponseData.ymme) === null || _b === void 0 ? void 0 : _b.make,
                      model: (_c = this.innovaVciService.vciResponseData.ymme) === null || _c === void 0 ? void 0 : _c.model,
                      engine: (_d = this.innovaVciService.vciResponseData.ymme) === null || _d === void 0 ? void 0 : _d.engine,
                      options1: result.options
                    });

                  case 16:
                    isVehicleInfoOk = _context12.sent;

                    if (isVehicleInfoOk) {
                      _context12.next = 21;
                      break;
                    }

                    _context12.next = 20;
                    return this.helper.alert('T7R-85 Toyota, Lexus, Scion Pop-Up: Could not auto confirm').then(function () {
                      _this8.cancel(false);
                    });

                  case 20:
                    return _context12.abrupt("return", _context12.sent);

                  case 21:
                    _context12.next = 23;
                    return this.scanOEMModules(vin);

                  case 23:
                    return _context12.abrupt("return", _context12.sent);

                  case 24:
                  case "end":
                    return _context12.stop();
                }
              }, _callee12, this);
            }));
          }
        }, {
          key: "startScan",
          value: function startScan() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_25__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee13() {
              var ctx, res, startMs, vin;
              return _regeneratorRuntime().wrap(function _callee13$(_context13) {
                while (1) switch (_context13.prev = _context13.next) {
                  case 0:
                    this.logger.debug('start scan');
                    console.log('start scan');
                    ctx = this;
                    ctx.isCancelling = false;
                    (0, tslib__WEBPACK_IMPORTED_MODULE_25__.__classPrivateFieldSet)(ctx, _VehicleLinkingPage_vehicleData, null, "f");

                    if (!(ctx.retryingCreateReport === true)) {
                      _context13.next = 11;
                      break;
                    }

                    ctx.retryingCreateReport = false;
                    _context13.next = 9;
                    return ctx.helper.sleep(1000);

                  case 9:
                    ctx.createReport(this.innovaVciService.vciResponseData, 0);
                    return _context13.abrupt("return");

                  case 11:
                    ctx.isRetried = false;
                    this.percent = 0;
                    _context13.prev = 13;
                    _context13.next = 16;
                    return this.insomnia.keepAwake()["catch"](this.logger.debug.bind(null));

                  case 16:
                    startMs = new Date().getTime();
                    this.innovaVciService.enableReportSleepTime(true);
                    _context13.next = 20;
                    return this.innovaVciService.connectAndRequestData();

                  case 20:
                    res = _context13.sent;

                    if (res) {
                      _context13.next = 23;
                      break;
                    }

                    throw new Error('Could not query data.');

                  case 23:
                    vin = this.innovaVciService.vciResponseData.vin;

                    if (!(vin === undefined || vin === null || vin === '')) {
                      _context13.next = 30;
                      break;
                    }

                    this.setStatus('No VIN Detected', 'Starting scan VIN or Enter Manually');
                    _context13.next = 28;
                    return this.scanVin();

                  case 28:
                    _context13.next = 32;
                    break;

                  case 30:
                    _context13.next = 32;
                    return this.decodeVIN(vin, false);

                  case 32:
                    _context13.next = 49;
                    break;

                  case 34:
                    _context13.prev = 34;
                    _context13.t0 = _context13["catch"](13);
                    this.logger.debug('Scan failed', _context13.t0, 'isLeaveScanningPage', this.isLeaveScanningPage);

                    if (!this.isLeaveScanningPage) {
                      _context13.next = 39;
                      break;
                    }

                    return _context13.abrupt("return", this.onScanDone());

                  case 39:
                    this.isRetried = true; // Disable Retry when scan failed

                    if (!this.isRetried) {
                      _context13.next = 45;
                      break;
                    }

                    this.percent = 0;
                    return _context13.abrupt("return", this.showFailureDialog());

                  case 45:
                    this.isRetried = true;
                    _context13.next = 48;
                    return this.innovaVciService.disconnect(true, this.deviceId);

                  case 48:
                    return _context13.abrupt("return", this.startScan());

                  case 49:
                  case "end":
                    return _context13.stop();
                }
              }, _callee13, this, [[13, 34]]);
            }));
          }
        }, {
          key: "getDataFromModal",
          value: function getDataFromModal(modalOptions) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_25__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee14() {
              var modal;
              return _regeneratorRuntime().wrap(function _callee14$(_context14) {
                while (1) switch (_context14.prev = _context14.next) {
                  case 0:
                    _context14.next = 2;
                    return this.modalController.create(modalOptions);

                  case 2:
                    modal = _context14.sent;
                    _context14.next = 5;
                    return this.helper.hideLoading();

                  case 5:
                    modal.present().then(function () {// this.currentModal = modal;
                    }); // modal.onDidDismiss().then(() => {
                    //   this.currentModal = null;
                    // });

                    return _context14.abrupt("return", modal.onDidDismiss());

                  case 7:
                  case "end":
                    return _context14.stop();
                }
              }, _callee14, this);
            }));
          }
        }, {
          key: "setVehicleInfoFromUser",
          value: function setVehicleInfoFromUser(ymme) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_25__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee15() {
              var _yield$this$getDataFr, data;

              return _regeneratorRuntime().wrap(function _callee15$(_context15) {
                while (1) switch (_context15.prev = _context15.next) {
                  case 0:
                    _context15.next = 2;
                    return this.getDataFromModal({
                      component: _modals_vehicle_selection_vehicle_selection_page__WEBPACK_IMPORTED_MODULE_11__.VehicleSelectionPage,
                      componentProps: {
                        ymme: ymme
                      },
                      showBackdrop: true,
                      backdropDismiss: false
                    });

                  case 2:
                    _yield$this$getDataFr = _context15.sent;
                    data = _yield$this$getDataFr.data;
                    return _context15.abrupt("return", data && data.confirm);

                  case 5:
                  case "end":
                    return _context15.stop();
                }
              }, _callee15, this);
            }));
          }
        }, {
          key: "scanOEMModules",
          value: function scanOEMModules(vin) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_25__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee16() {
              var startMs, res, sleepMs, endMs;
              return _regeneratorRuntime().wrap(function _callee16$(_context16) {
                while (1) switch (_context16.prev = _context16.next) {
                  case 0:
                    if (!this.isCancelling) {
                      _context16.next = 2;
                      break;
                    }

                    return _context16.abrupt("return");

                  case 2:
                    this.isScanningModules = true;
                    this.isLeaveScanningPage = false;
                    this.isCancelling = false;
                    startMs = new Date().getTime();
                    this.innovaVciService.enableReportSleepTime(true);
                    _context16.next = 9;
                    return this.innovaVciService.scanModules(vin);

                  case 9:
                    res = _context16.sent;
                    this.isScanningModules = false;
                    sleepMs = this.innovaVciService.totalSleepTime;
                    endMs = new Date().getTime();
                    this.logger.debug("[*Done] Scan time: ".concat(Math.round((endMs - startMs) / 1000 * 100) / 100, " seconds. Sleep time: ").concat(Math.round(sleepMs / 1000 * 100) / 100, " seconds"));
                    this.insomnia.allowSleepAgain()["catch"](this.logger.debug.bind(null));
                    this.logger.debug('result', res);
                    _context16.next = 18;
                    return this.onScanDone();

                  case 18:
                  case "end":
                    return _context16.stop();
                }
              }, _callee16, this);
            }));
          }
        }, {
          key: "showFailureDialog",
          value: function showFailureDialog() {
            var msg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
            var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
            return (0, tslib__WEBPACK_IMPORTED_MODULE_25__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee17() {
              return _regeneratorRuntime().wrap(function _callee17$(_context17) {
                while (1) switch (_context17.prev = _context17.next) {
                  case 0:
                    if (!this.isLeaveScanningPage) {
                      _context17.next = 2;
                      break;
                    }

                    return _context17.abrupt("return");

                  case 2:
                    this.isLeaveScanningPage = true;
                    _context17.next = 5;
                    return this.helper.alert(msg || "Please verify the tool is connected to the vehicle\u2019s OBD-II port and try again", title || 'Scan Failed');

                  case 5:
                    this.isLeaveScanningPage = false;

                  case 6:
                  case "end":
                    return _context17.stop();
                }
              }, _callee17, this);
            }));
          }
        }, {
          key: "doCancelScanning",
          value: function doCancelScanning() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_25__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee19() {
              var _this9 = this;

              return _regeneratorRuntime().wrap(function _callee19$(_context19) {
                while (1) switch (_context19.prev = _context19.next) {
                  case 0:
                    this.isCancelling = true;
                    this.resultText = '';
                    this.statusText = 'One moment please...';
                    this.isLeaveScanningPage = true;
                    return _context19.abrupt("return", this.helper.popToRoot(src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_1__.RoutePath.Home).then(function () {
                      return (0, tslib__WEBPACK_IMPORTED_MODULE_25__.__awaiter)(_this9, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee18() {
                        return _regeneratorRuntime().wrap(function _callee18$(_context18) {
                          while (1) switch (_context18.prev = _context18.next) {
                            case 0:
                              if (src_app_services_state_app_state__WEBPACK_IMPORTED_MODULE_10__.AppState.isOnAndroid) {
                                console.log('Call this.ble.stopScan');
                                this.ble.stopScan();
                              }

                              _context18.next = 3;
                              return this.innovaVciService.disconnect(true, this.deviceId);

                            case 3:
                            case "end":
                              return _context18.stop();
                          }
                        }, _callee18, this);
                      }));
                    }));

                  case 5:
                  case "end":
                    return _context19.stop();
                }
              }, _callee19, this);
            }));
          }
        }, {
          key: "isConnected",
          get: function get() {
            if (src_app_services_state_app_state__WEBPACK_IMPORTED_MODULE_10__.AppState.isOnDevice) {
              return this.innovaVciService.isConnected;
            }

            return true;
          }
        }, {
          key: "scanVin",
          value: function scanVin() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_25__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee22() {
              var _this10 = this;

              var ctx;
              return _regeneratorRuntime().wrap(function _callee22$(_context22) {
                while (1) switch (_context22.prev = _context22.next) {
                  case 0:
                    ctx = this;

                    if (!ctx.isCancelling) {
                      _context22.next = 3;
                      break;
                    }

                    return _context22.abrupt("return");

                  case 3:
                    if (!src_app_services_state_app_state__WEBPACK_IMPORTED_MODULE_10__.AppState.isOnDevice) {
                      _context22.next = 7;
                      break;
                    }

                    ctx.barcodeScanner.scan({
                      orientation: 'portrait',
                      prompt: ''
                    }).then(function (barcodeData) {
                      return (0, tslib__WEBPACK_IMPORTED_MODULE_25__.__awaiter)(_this10, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee20() {
                        var vin;
                        return _regeneratorRuntime().wrap(function _callee20$(_context20) {
                          while (1) switch (_context20.prev = _context20.next) {
                            case 0:
                              if (!barcodeData.cancelled) {
                                _context20.next = 9;
                                break;
                              }

                              if (!(barcodeData.text && barcodeData.text === 'enterVin')) {
                                _context20.next = 6;
                                break;
                              }

                              _context20.next = 4;
                              return this.getVinFromUser();

                            case 4:
                              _context20.next = 7;
                              break;

                            case 6:
                              this.cancel(false);

                            case 7:
                              _context20.next = 21;
                              break;

                            case 9:
                              if (!barcodeData) {
                                _context20.next = 21;
                                break;
                              }

                              vin = barcodeData.text;

                              if (!(barcodeData.format === 'CODE_39' || vin != '' && vin.length >= 17)) {
                                _context20.next = 17;
                                break;
                              }

                              if (vin.length > 17) {
                                vin = vin.substring(1);
                              }

                              _context20.next = 15;
                              return this.decodeVIN(vin, true);

                            case 15:
                              _context20.next = 21;
                              break;

                            case 17:
                              _context20.next = 19;
                              return ctx.helper.sleep(1000);

                            case 19:
                              _context20.next = 21;
                              return ctx.scanVin();

                            case 21:
                            case "end":
                              return _context20.stop();
                          }
                        }, _callee20, this);
                      }));
                    }, function (err) {
                      return (0, tslib__WEBPACK_IMPORTED_MODULE_25__.__awaiter)(_this10, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee21() {
                        return _regeneratorRuntime().wrap(function _callee21$(_context21) {
                          while (1) switch (_context21.prev = _context21.next) {
                            case 0:
                              this.logger.debug(err);
                              _context21.next = 3;
                              return ctx.helper.sleep(1000);

                            case 3:
                              _context21.next = 5;
                              return ctx.scanVin();

                            case 5:
                            case "end":
                              return _context21.stop();
                          }
                        }, _callee21, this);
                      }));
                    });
                    _context22.next = 9;
                    break;

                  case 7:
                    _context22.next = 9;
                    return this.getVinFromUser();

                  case 9:
                  case "end":
                    return _context22.stop();
                }
              }, _callee22, this);
            }));
          }
        }, {
          key: "decodeVIN",
          value: function decodeVIN(vin) {
            var needSetVIN = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
            return (0, tslib__WEBPACK_IMPORTED_MODULE_25__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee23() {
              var _this11 = this;

              var result, message;
              return _regeneratorRuntime().wrap(function _callee23$(_context23) {
                while (1) switch (_context23.prev = _context23.next) {
                  case 0:
                    this.setStatus('', 'Decoding VIN: ' + vin);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_25__.__classPrivateFieldSet)(this, _VehicleLinkingPage_vehicleData, null, "f");
                    _context23.next = 4;
                    return this.vehicleService.decodeVin(vin);

                  case 4:
                    result = _context23.sent;

                    if (!(result.success && result.data)) {
                      _context23.next = 13;
                      break;
                    }

                    if (needSetVIN) {
                      this.setStatus('', 'Writing VIN: ' + vin);
                    }

                    (0, tslib__WEBPACK_IMPORTED_MODULE_25__.__classPrivateFieldSet)(this, _VehicleLinkingPage_vehicleData, result.data, "f");
                    _context23.next = 10;
                    return this.gotVIN(needSetVIN, vin);

                  case 10:
                    return _context23.abrupt("return", _context23.sent);

                  case 13:
                    if (result.message && result.message.code != -1) {
                      this.helper.alert(result.message.code === 5006 ? "VIN ".concat(vin, " is invalid.") : result.message.message, 'Error', [{
                        text: 'OK',
                        handler: function handler() {
                          _this11.cancel(false);
                        }
                      }]);
                    } else {
                      message = 'Unable to decode VIN: ' + vin + '. Please check your internet connection and try again.';
                      this.helper.confirm(message, 'Error', function () {
                        _this11.decodeVIN(vin, needSetVIN);
                      }, function () {
                        _this11.cancel();
                      }, 'Retry', 'Cancel');
                    }

                  case 14:
                  case "end":
                    return _context23.stop();
                }
              }, _callee23, this);
            }));
          }
        }, {
          key: "getVinFromUser",
          value: function getVinFromUser() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_25__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee24() {
              var modal, _yield$modal$onDidDis, data;

              return _regeneratorRuntime().wrap(function _callee24$(_context24) {
                while (1) switch (_context24.prev = _context24.next) {
                  case 0:
                    _context24.next = 2;
                    return this.modalController.create({
                      component: _enter_vin_enter_vin_page__WEBPACK_IMPORTED_MODULE_6__.EnterVinPage,
                      componentProps: {
                        isModal: true
                      }
                    });

                  case 2:
                    modal = _context24.sent;
                    _context24.next = 5;
                    return modal.present();

                  case 5:
                    _context24.next = 7;
                    return modal.onDidDismiss();

                  case 7:
                    _yield$modal$onDidDis = _context24.sent;
                    data = _yield$modal$onDidDis.data;
                    this.setStatus('', 'Writing VIN: ' + data.vin);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_25__.__classPrivateFieldSet)(this, _VehicleLinkingPage_vehicleData, data.data, "f");
                    _context24.next = 13;
                    return this.gotVIN(true, data.vin);

                  case 13:
                    return _context24.abrupt("return", _context24.sent);

                  case 14:
                  case "end":
                    return _context24.stop();
                }
              }, _callee24, this);
            }));
          }
        }, {
          key: "onScanDone",
          value: function onScanDone() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_25__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee25() {
              var vciResponse, recentVin, recentMileage;
              return _regeneratorRuntime().wrap(function _callee25$(_context25) {
                while (1) switch (_context25.prev = _context25.next) {
                  case 0:
                    if (!this.isCancelling) {
                      _context25.next = 3;
                      break;
                    }

                    this.logger.debug('isCancelling', this.isCancelling);
                    return _context25.abrupt("return");

                  case 3:
                    vciResponse = this.innovaVciService.vciResponseData;
                    this.logger.debug('vciResponseData', vciResponse);
                    recentVin = localStorage.getItem(src_app_models_app_enum__WEBPACK_IMPORTED_MODULE_2__.EnumLocalStorage.RecentVINScanned);
                    recentMileage = 0;

                    if (isNaN(vciResponse.mileage) || vciResponse.mileage <= 0 || vciResponse.mileage > src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_0__.MAX_MILEAGE_VALUE) {
                      if (recentVin && recentVin === vciResponse.vin) {
                        recentMileage = this.reportSession.mileage;
                      }

                      if (recentMileage && recentMileage > 0) {
                        vciResponse.mileage = recentMileage;
                        this.logger.debug('auto set mileage from recent user input', recentMileage);
                      }
                    }

                    if (this.connectedVehicle) {
                      this.connectedVehicle.vin = vciResponse.vin;

                      if (vciResponse.ymme) {
                        this.connectedVehicle.make = vciResponse.ymme.make;
                        this.connectedVehicle.year = vciResponse.ymme.year;
                        this.connectedVehicle.model = vciResponse.ymme.model;
                      }

                      this.connectedVehicle.mileage = vciResponse.mileage;
                      src_app_models_app_data__WEBPACK_IMPORTED_MODULE_4__.AppData.set(src_app_models_app_enum__WEBPACK_IMPORTED_MODULE_2__.EnumAppDataKey.InfoVehicleConnected, this.connectedVehicle);
                    }

                    this.percent = 100;
                    _context25.next = 12;
                    return this.saveAndCreateReport(vciResponse, src_app_models_report_session__WEBPACK_IMPORTED_MODULE_7__.ReportStatus.Complete);

                  case 12:
                  case "end":
                    return _context25.stop();
                }
              }, _callee25, this);
            }));
          }
        }, {
          key: "ionViewDidLeave",
          value: function ionViewDidLeave() {
            var _this12 = this;

            this.eventService.unsubscribe(src_app_services_innova_tool_models__WEBPACK_IMPORTED_MODULE_3__.InnovaVCIEvent.CONNECTED);
            this.eventService.unsubscribe(src_app_services_innova_tool_models__WEBPACK_IMPORTED_MODULE_3__.InnovaVCIEvent.DEVICE_FOUND);
            this.eventService.unsubscribe(src_app_services_innova_tool_models__WEBPACK_IMPORTED_MODULE_3__.InnovaVCIEvent.DEVICE_SELECTED);
            this.eventService.unsubscribe(src_app_services_innova_tool_models__WEBPACK_IMPORTED_MODULE_3__.InnovaVCIEvent.SCAN_STATUS);
            this.eventService.unsubscribe(src_app_services_innova_tool_models__WEBPACK_IMPORTED_MODULE_3__.InnovaVCIEvent.INTERRUPT_PROCESS);
            this.eventService.unsubscribe(src_app_services_innova_tool_models__WEBPACK_IMPORTED_MODULE_3__.InnovaVCIEvent.USER_GUI_INFO);

            if (this.multipleDevicesInterval) {
              clearInterval(this.multipleDevicesInterval);
              this.multipleDevicesInterval = null;
            }

            if (this.scanningTimeout) {
              clearTimeout(this.scanningTimeout);
              this.scanningTimeout = null;
            }

            this.isLeaveScanningPage = true; // Unregister the custom back button action for this page

            document.removeEventListener('backbutton', function () {
              _this12.logger.debug('unregister back button event');
            });
          }
        }, {
          key: "initializeBackButtonCustomHandler",
          value: function initializeBackButtonCustomHandler() {
            var _this13 = this;

            this.platform.ready().then(function () {
              document.addEventListener('backbutton', function () {
                _this13.customHandleBackButton();
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
            var reportFailed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            return (0, tslib__WEBPACK_IMPORTED_MODULE_25__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee27() {
              var _this14 = this;

              return _regeneratorRuntime().wrap(function _callee27$(_context27) {
                while (1) switch (_context27.prev = _context27.next) {
                  case 0:
                    if (src_app_services_state_app_state__WEBPACK_IMPORTED_MODULE_10__.AppState.isOnDevice) {
                      this.isCancelling = true;

                      if (confirm) {
                        this.helper.confirm('Are you sure?', src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_0__.AppStrings.CONFIRM, function () {
                          return (0, tslib__WEBPACK_IMPORTED_MODULE_25__.__awaiter)(_this14, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee26() {
                            return _regeneratorRuntime().wrap(function _callee26$(_context26) {
                              while (1) switch (_context26.prev = _context26.next) {
                                case 0:
                                  this.doCancelScanning();

                                case 1:
                                case "end":
                                  return _context26.stop();
                              }
                            }, _callee26, this);
                          }));
                        }, function () {
                          if (reportFailed) {
                            _this14.createReportFailed();
                          } else {
                            _this14.isCancelling = false;
                          }
                        });
                      } else {
                        this.doCancelScanning();
                      }
                    }

                  case 1:
                  case "end":
                    return _context27.stop();
                }
              }, _callee27, this);
            }));
          }
        }]);
      }(src_app_bases_base_controller__WEBPACK_IMPORTED_MODULE_8__.BaseController);

      _VehicleLinkingPage_vehicleData = new WeakMap(), _VehicleLinkingPage_instances = new WeakSet(), _VehicleLinkingPage_startScanTools = function _VehicleLinkingPage_startScanTools() {
        return (0, tslib__WEBPACK_IMPORTED_MODULE_25__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee28() {
          return _regeneratorRuntime().wrap(function _callee28$(_context28) {
            while (1) switch (_context28.prev = _context28.next) {
              case 0:
                this.eventService.publish(src_app_services_innova_tool_models__WEBPACK_IMPORTED_MODULE_3__.InnovaVCIEvent.INTERRUPT_PROCESS);
                _context28.next = 3;
                return this.innovaVciService.initializeBT();

              case 3:
                return _context28.abrupt("return", _context28.sent);

              case 4:
              case "end":
                return _context28.stop();
            }
          }, _callee28, this);
        }));
      };

      _VehicleLinkingPage.ɵfac = function VehicleLinkingPage_Factory(t) {
        return new (t || _VehicleLinkingPage)(_angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_26__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](src_app_services_innova_vci_service__WEBPACK_IMPORTED_MODULE_12__.InnovaVCIService), _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_13__.HelperService), _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](src_app_services_navigation_service__WEBPACK_IMPORTED_MODULE_14__.NavigationService), _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](src_app_services_innova_vci_service_src_connectivity_connectivity_service__WEBPACK_IMPORTED_MODULE_15__.ConnectivityService), _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_26__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](_ionic_native_insomnia_ngx__WEBPACK_IMPORTED_MODULE_16__.Insomnia), _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_24__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](_ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_17__.Diagnostic), _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](_ionic_native_open_native_settings_ngx__WEBPACK_IMPORTED_MODULE_18__.OpenNativeSettings), _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](src_app_services_report_service_report_service__WEBPACK_IMPORTED_MODULE_19__.ReportServiceProvider), _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](src_app_services_events_service__WEBPACK_IMPORTED_MODULE_20__.Events), _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](_ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_21__.BarcodeScanner), _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_24__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](src_app_services_vehicle_service_vehicle_service__WEBPACK_IMPORTED_MODULE_22__.VehicleServiceProvider), _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](_ionic_native_ble_ngx__WEBPACK_IMPORTED_MODULE_23__.BLE));
      };

      _VehicleLinkingPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdefineComponent"]({
        type: _VehicleLinkingPage,
        selectors: [["app-vehicle-linking"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵInheritDefinitionFeature"]],
        decls: 5,
        vars: 3,
        consts: [[1, "ion-padding"], [1, "app-content-center-midle"], ["class", "text-center", 3, "hidden", 4, "ngIf"], ["class", "text-center w-100 app-select-device-box px-3 py-4", 4, "ngIf"], [1, "text-center", 3, "hidden"], [1, "app-spinner-wrap"], ["name", "circles"], ["src", "assets/svg/car.svg", 1, "font-size-80"], [1, "text-primary"], [1, "text-danger"], [1, "font-size-20"], [3, "hidden"], [1, "text-center", 3, "click"], [1, "text-secondary", "font-size-18"], ["name", "circles", 1, "size-8"], [1, "font-size-20", "mb-5"], [1, "text-center", "w-100", "app-select-device-box", "px-3", "py-4"], [1, "mb-5"], ["class", "app-button mb-5", "expand", "block", 3, "click", 4, "ngFor", "ngForOf"], [1, "text-white", "font-size-18"], ["expand", "block", 1, "app-button", "mb-5", 3, "click"]],
        template: function VehicleLinkingPage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](0, "ion-content", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtemplate"](2, VehicleLinkingPage_div_2_Template, 17, 5, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtemplate"](3, VehicleLinkingPage_div_3_Template, 12, 1, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtemplate"](4, VehicleLinkingPage_div_4_Template, 9, 1, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("ngIf", !ctx.hasMultipleDevices);

            _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("ngIf", !ctx.hasMultipleDevices);

            _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("ngIf", ctx.hasMultipleDevices);
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_26__.IonContent, _angular_common__WEBPACK_IMPORTED_MODULE_27__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_26__.IonSpinner, _ionic_angular__WEBPACK_IMPORTED_MODULE_26__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_26__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_26__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_26__.IonCol, _angular_common__WEBPACK_IMPORTED_MODULE_27__.NgForOf, _ionic_angular__WEBPACK_IMPORTED_MODULE_26__.IonButton],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2ZWhpY2xlLWxpbmtpbmcucGFnZS5zY3NzIn0= */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=default-src_app_pages_vehicle-linking_vehicle-linking_page_ts-es5.js.map