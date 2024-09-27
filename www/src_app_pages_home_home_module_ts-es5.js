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

  (self["webpackChunkcom_carmd_proscan2"] = self["webpackChunkcom_carmd_proscan2"] || []).push([["src_app_pages_home_home_module_ts"], {
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
    96610:
    /*!***************************************************!*\
      !*** ./src/app/pages/home/home-routing.module.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HomePageRoutingModule": function HomePageRoutingModule() {
          return (
            /* binding */
            _HomePageRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./home.page */
      10678);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var routes = [{
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage
      }];

      var _HomePageRoutingModule = /*#__PURE__*/_createClass(function _HomePageRoutingModule() {
        _classCallCheck(this, _HomePageRoutingModule);
      });

      _HomePageRoutingModule.ɵfac = function HomePageRoutingModule_Factory(t) {
        return new (t || _HomePageRoutingModule)();
      };

      _HomePageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _HomePageRoutingModule
      });
      _HomePageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_HomePageRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    57994:
    /*!*******************************************!*\
      !*** ./src/app/pages/home/home.module.ts ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HomePageModule": function HomePageModule() {
          return (
            /* binding */
            _HomePageModule
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


      var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./home-routing.module */
      96610);
      /* harmony import */


      var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./home.page */
      10678);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _HomePageModule = /*#__PURE__*/_createClass(function _HomePageModule() {
        _classCallCheck(this, _HomePageModule);
      });

      _HomePageModule.ɵfac = function HomePageModule_Factory(t) {
        return new (t || _HomePageModule)();
      };

      _HomePageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: _HomePageModule
      });
      _HomePageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomePageRoutingModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](_HomePageModule, {
          declarations: [_home_page__WEBPACK_IMPORTED_MODULE_1__.HomePage],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomePageRoutingModule]
        });
      })();
      /***/

    },

    /***/
    10678:
    /*!*****************************************!*\
      !*** ./src/app/pages/home/home.page.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HomePage": function HomePage() {
          return (
            /* binding */
            _HomePage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! tslib */
      42321);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/forms */
      1707);
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


      var src_app_models_app_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/models/app.constant */
      99888);
      /* harmony import */


      var src_app_services_state_app_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/state/app.state */
      12607);
      /* harmony import */


      var src_app_services_state_user_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/state/user.state */
      2470);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @ionic/angular */
      81864);
      /* harmony import */


      var src_app_services_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/auth-service/auth-service */
      44073);
      /* harmony import */


      var src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/helper.service */
      22486);
      /* harmony import */


      var src_app_services_tool_service_tool_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/tool-service/tool-service */
      91841);
      /* harmony import */


      var src_app_services_report_service_report_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/report-service/report-service */
      45322);
      /* harmony import */


      var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic-native/network/ngx */
      95680);
      /* harmony import */


      var _ionic_native_open_native_settings_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ionic-native/open-native-settings/ngx */
      35266);
      /* harmony import */


      var src_app_services_navigation_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/services/navigation.service */
      89565);
      /* harmony import */


      var _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @ionic-native/diagnostic/ngx */
      91089);
      /* harmony import */


      var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @ionic-native/keyboard/ngx */
      616);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/common */
      54364);

      function HomePage_span_10_span_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "Mileage is required.");

          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        }
      }

      function HomePage_span_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, HomePage_span_10_span_1_Template, 2, 0, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r0.homeForm.controls.mileage.invalid);
        }
      }

      function HomePage_a_30_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function HomePage_a_30_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();

            return ctx_r6.viewLogs();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "View Logs");

          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        }
      }

      function HomePage_p_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" Software Version: ", ctx_r2.softwareVersion, " ");
        }
      }

      function HomePage_p_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" Firmware Version: ", ctx_r3.firmwareVersion, " ");
        }
      }

      function HomePage_p_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "p", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "Testing Version");

          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        }
      }

      var _HomePage = /*#__PURE__*/function (_src_app_bases_base_c) {
        function _HomePage(platform, authService, helper, formBuilder, toolService, reportService, alertCtrl, network, openNativeSettings, navigationService, diagnostic, keyboard) {
          var _this;

          _classCallCheck(this, _HomePage);

          _this = _callSuper(this, _HomePage, ['HomePage']);
          _this.platform = platform;
          _this.authService = authService;
          _this.helper = helper;
          _this.formBuilder = formBuilder;
          _this.toolService = toolService;
          _this.reportService = reportService;
          _this.alertCtrl = alertCtrl;
          _this.network = network;
          _this.openNativeSettings = openNativeSettings;
          _this.navigationService = navigationService;
          _this.diagnostic = diagnostic;
          _this.keyboard = keyboard;
          _this.formSubmitted = false;
          _this.isKeyboardShow = false;
          _this.isLoading = false;
          _this.devices = [];
          _this.isTesting = src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_1__.AppConfig.isDevMode;
          return _this;
        }

        _inherits(_HomePage, _src_app_bases_base_c);

        return _createClass(_HomePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.homeForm = this.formBuilder.group({
              workOrderNo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.maxLength(10)])],
              mileage: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.maxLength(9)])]
            });
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    if (src_app_services_state_user_state__WEBPACK_IMPORTED_MODULE_5__.UserState.isAuth) {
                      _context.next = 3;
                      break;
                    }

                    this.navigationService.popToRoot(src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_0__.RoutePath.Login);
                    return _context.abrupt("return", false);

                  case 3:
                  case "end":
                    return _context.stop();
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
              var _this2 = this;

              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) switch (_context3.prev = _context3.next) {
                  case 0:
                    this.platform.ready().then(function () {
                      return (0, tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(_this2, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
                        var _this3 = this;

                        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                          while (1) switch (_context2.prev = _context2.next) {
                            case 0:
                              this.isLoading = false;

                              if (src_app_services_state_user_state__WEBPACK_IMPORTED_MODULE_5__.UserState.isAuth) {
                                this.reportSession = this.reportService.getReportSession();
                                this.softwareVersion = src_app_services_state_app_state__WEBPACK_IMPORTED_MODULE_4__.AppState.isOnDevice ? src_app_services_state_app_state__WEBPACK_IMPORTED_MODULE_4__.AppState.appVersion : null;
                                this.keyboard.onKeyboardWillHide().subscribe(function () {
                                  _this3.isKeyboardShow = false;
                                });
                                this.keyboard.onKeyboardWillShow().subscribe(function () {
                                  _this3.isKeyboardShow = true;
                                });
                                this.currentUser = src_app_services_state_user_state__WEBPACK_IMPORTED_MODULE_5__.UserState.user;
                                this.firmwareVersion = localStorage.getItem(src_app_models_app_constant__WEBPACK_IMPORTED_MODULE_3__.StorageKeys.FIRMWARE_VERSION);
                                this.helper.checkBluetoothPermissions();
                              } else {
                                this.authService.logout();
                                this.navigationService.popToRoot(src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_0__.RoutePath.Login);
                              }

                            case 2:
                            case "end":
                              return _context2.stop();
                          }
                        }, _callee2, this);
                      }));
                    });

                  case 1:
                  case "end":
                    return _context3.stop();
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "viewTutorial",
          value: function viewTutorial() {
            this.formSubmitted = false;
            this.navigationService.goTo(src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_0__.RoutePath.Tutorial);
          }
        }, {
          key: "doScanVehicle",
          value: function doScanVehicle(event) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
              var _this4 = this;

              var ctx, confirm, isBtEnabled;
              return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                while (1) switch (_context6.prev = _context6.next) {
                  case 0:
                    ctx = this;

                    if (!ctx.formSubmitted) {
                      _context6.next = 22;
                      break;
                    }

                    this.isLoading = true;

                    if (!src_app_services_state_app_state__WEBPACK_IMPORTED_MODULE_4__.AppState.isOnDevice) {
                      _context6.next = 22;
                      break;
                    }

                    if (!(ctx.network.type === 'none')) {
                      _context6.next = 12;
                      break;
                    }

                    confirm = ctx.alertCtrl.create({
                      header: 'No Internet Connection',
                      message: 'Make sure Wi-Fi or cellular data is turned on, then try again.',
                      buttons: [{
                        text: src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_1__.AppStrings.CANCEL,
                        role: 'cancel',
                        handler: function handler() {
                          _this4.isLoading = false;

                          _this4.logger.debug('Cancel clicked');
                        }
                      }, {
                        text: 'Retry',
                        handler: function handler() {
                          _this4.logger.debug('Retry clicked');

                          ctx.toolService.wait(100).then(function () {
                            ctx.doScanVehicle(null);
                          });
                        }
                      }]
                    });
                    _context6.next = 8;
                    return confirm;

                  case 8:
                    _context6.next = 10;
                    return _context6.sent.present();

                  case 10:
                    _context6.next = 22;
                    break;

                  case 12:
                    this.reportSession.workOrderNumber = this.homeForm.value.workOrderNo;
                    this.reportSession.mileage = this.homeForm.value.mileage;
                    this.reportService.saveReportSession(this.reportSession);
                    ctx.formSubmitted = false;
                    this.logger.debug('Work Order Number:', this.reportSession.workOrderNumber);
                    this.logger.debug('Mileage:', this.reportSession.mileage); // Check Bluetooth Permission

                    _context6.next = 20;
                    return this.helper.checkBluetoothPermissions();

                  case 20:
                    isBtEnabled = _context6.sent;

                    if (!isBtEnabled) {
                      if (src_app_services_state_app_state__WEBPACK_IMPORTED_MODULE_4__.AppState.isOnAndroid && !src_app_services_state_app_state__WEBPACK_IMPORTED_MODULE_4__.AppState.isOnAtLeastVersion(13)) {
                        this.helper.confirm('In order to detect and pair to your scan tool, please turn Bluetooth ON.', 'Bluetooth is turned OFF', function () {
                          return (0, tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(_this4, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
                            var _this5 = this;

                            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                              while (1) switch (_context4.prev = _context4.next) {
                                case 0:
                                  _context4.next = 2;
                                  return this.diagnostic.setBluetoothState(true);

                                case 2:
                                  isBtEnabled = _context4.sent;
                                  this.logger.debug('Is BT Enabled', isBtEnabled);

                                  if (isBtEnabled) {
                                    setTimeout(function () {
                                      _this5.navigationService.goTo(src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_0__.RoutePath.VehicleLinking).then(function () {
                                        ctx.isLoading = false;
                                        ctx.homeForm.reset();
                                      });
                                    }, 1500);
                                  } else {
                                    this.helper.goBack();
                                  }

                                case 5:
                                case "end":
                                  return _context4.stop();
                              }
                            }, _callee4, this);
                          }));
                        }, function () {
                          _this4.helper.goBack();
                        }, 'Turn Bluetooth ON', 'Cancel');
                      } else {
                        this.helper.confirm('In order to detect and pair to your scan tool, turn Bluetooth ON from your device’s settings.', 'Bluetooth is turned OFF', function () {
                          return (0, tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(_this4, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
                            var _this6 = this;

                            return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                              while (1) switch (_context5.prev = _context5.next) {
                                case 0:
                                  this.isLoading = false;

                                  if (src_app_services_state_app_state__WEBPACK_IMPORTED_MODULE_4__.AppState.isOnAndroid) {
                                    this.diagnostic.switchToBluetoothSettings();
                                  } else {
                                    this.openNativeSettings.open('settings')["catch"](function (ex) {
                                      var _a;

                                      (_a = _this6.logger) === null || _a === void 0 ? void 0 : _a.info('openSettings>openNativeSettings>Error', ex);
                                    });
                                  }

                                case 2:
                                case "end":
                                  return _context5.stop();
                              }
                            }, _callee5, this);
                          }));
                        }, function () {
                          _this4.helper.goBack();
                        }, 'Go to settings', 'Cancel');
                      }
                    } else {
                      setTimeout(function () {
                        _this4.navigationService.goTo(src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_0__.RoutePath.VehicleLinking).then(function () {
                          ctx.isLoading = false;
                          ctx.homeForm.reset();
                        });
                      }, 500);
                    }

                  case 22:
                  case "end":
                    return _context6.stop();
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "doLogout",
          value: function doLogout() {
            var _this7 = this;

            this.helper.confirm(src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_1__.AppStrings.MSG_CONFIRM_LOGOUT, src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_1__.AppStrings.CONFIRM, function () {
              _this7.authService.logout();

              localStorage.removeItem(src_app_models_app_constant__WEBPACK_IMPORTED_MODULE_3__.StorageKeys.USER_ID);
              localStorage.removeItem(src_app_models_app_constant__WEBPACK_IMPORTED_MODULE_3__.StorageKeys.ACCESS_KEY);
              localStorage.removeItem(src_app_models_app_constant__WEBPACK_IMPORTED_MODULE_3__.StorageKeys.USER_INFO);
              localStorage.removeItem(src_app_models_app_constant__WEBPACK_IMPORTED_MODULE_3__.StorageKeys.USER_SETTINGS);
              localStorage.removeItem(src_app_models_app_constant__WEBPACK_IMPORTED_MODULE_3__.StorageKeys.REPORT_SESSION);

              _this7.helper.popToRoot(src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_0__.RoutePath.Login);
            });
          }
        }, {
          key: "ionViewWillLeave",
          value: function ionViewWillLeave() {
            // Unregister the custom back button action for this page
            this.unregisterBackButtonAction && this.unregisterBackButtonAction();
          }
        }, {
          key: "viewPastReports",
          value: function viewPastReports() {
            this.formSubmitted = false;
            this.navigationService.goTo(src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_0__.RoutePath.ReportHistory);
          }
        }, {
          key: "viewLogs",
          value: function viewLogs() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
              return _regeneratorRuntime().wrap(function _callee7$(_context7) {
                while (1) switch (_context7.prev = _context7.next) {
                  case 0:
                    this.formSubmitted = false;
                    this.navigationService.goTo(src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_0__.RoutePath.ViewLogs);

                  case 2:
                  case "end":
                    return _context7.stop();
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "lookupDlc",
          value: function lookupDlc() {
            this.formSubmitted = false;
            this.navigationService.goTo(src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_0__.RoutePath.DlcLocator);
          }
        }, {
          key: "changeToolName",
          value: function changeToolName() {
            this.formSubmitted = false;
            this.navigationService.goTo(src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_0__.RoutePath.ChangeToolName);
          }
        }]);
      }(src_app_bases_base_controller__WEBPACK_IMPORTED_MODULE_2__.BaseController);

      _HomePage.ɵfac = function HomePage_Factory(t) {
        return new (t || _HomePage)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_18__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_services_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_6__.AuthServiceProvider), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_7__.HelperService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_services_tool_service_tool_service__WEBPACK_IMPORTED_MODULE_8__.ToolServiceProvider), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_services_report_service_report_service__WEBPACK_IMPORTED_MODULE_9__.ReportServiceProvider), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_18__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_10__.Network), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_ionic_native_open_native_settings_ngx__WEBPACK_IMPORTED_MODULE_11__.OpenNativeSettings), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_services_navigation_service__WEBPACK_IMPORTED_MODULE_12__.NavigationService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_13__.Diagnostic), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_14__.Keyboard));
      };

      _HomePage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineComponent"]({
        type: _HomePage,
        selectors: [["app-home"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵInheritDefinitionFeature"]],
        decls: 39,
        vars: 10,
        consts: [["scroll-y", "false", 1, "ion-padding"], [1, "app-content-center-midle"], [1, "w-100", "px-3"], [3, "formGroup", "ngSubmit"], [1, "app-form-logo"], ["src", "assets/img/its-logo.png", "alt", "Innova Telematics Solutions"], [1, "mb-4"], ["type", "text", "placeholder", "Work Order Number", "formControlName", "workOrderNo", "name", "workOrderNo", "maxlength", "10", 1, "app-input", "mb-2"], ["formControlName", "mileage", "type", "tel", "placeholder", "Mileage", "pattern", "[0-9]*", "name", "mileage", "maxlength", "6", "required", "", 1, "app-input", "mb-2"], [4, "ngIf"], ["expand", "block", "type", "submit", 1, "app-button", 3, "disabled", "click"], [1, "app-sign-up-spinner", 3, "hidden"], [1, "button-inner", 3, "hidden"], ["expand", "block", 1, "app-button", 3, "click"], [1, "text-center"], [1, "no-line", "font-size-16", 3, "click"], ["class", "no-line font-size-16", 3, "click", 4, "ngIf"], ["class", "mb-3", 4, "ngIf"], [1, "ion-no-border", "p-2"], [1, "py-1", 3, "hidden"], [1, "text-center", 3, "click"], [1, "no-line", "font-size-18"], ["class", "text-danger", 4, "ngIf"], [1, "text-danger"], [1, "mb-3"]],
        template: function HomePage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-content", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngSubmit", function HomePage_Template_form_ngSubmit_3_listener($event) {
              return ctx.homeForm.valid && ctx.doScanVehicle($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](5, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](7, "ion-input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](9, "ion-input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](10, HomePage_span_10_Template, 2, 1, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](11, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](12, "ion-button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function HomePage_Template_ion_button_click_12_listener() {
              return ctx.formSubmitted = true;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](13, "ion-spinner", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](14, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](15, "Start Scan");

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](16, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](17, "ion-button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function HomePage_Template_ion_button_click_17_listener() {
              return ctx.viewPastReports();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](18, "Past Reports");

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](19, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](20, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](21, "a", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function HomePage_Template_a_click_21_listener() {
              return ctx.lookupDlc();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](22, "Look up DLC?");

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](23, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](24, "a", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function HomePage_Template_a_click_24_listener() {
              return ctx.viewTutorial();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](25, "Tutorial");

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](26, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](27, "a", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function HomePage_Template_a_click_27_listener() {
              return ctx.changeToolName();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](28, "Change Tool Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](29, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](30, HomePage_a_30_Template, 2, 0, "a", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](31, HomePage_p_31_Template, 2, 1, "p", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](32, HomePage_p_32_Template, 2, 1, "p", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](33, HomePage_p_33_Template, 2, 0, "p", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](34, "ion-footer", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](35, "ion-toolbar", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](36, "p", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function HomePage_Template_p_click_36_listener() {
              return ctx.doLogout();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](37, "a", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](38, "Log Out");

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("formGroup", ctx.homeForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.formSubmitted);

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("disabled", ctx.isLoading);

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("hidden", !ctx.isLoading);

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("hidden", ctx.isLoading);

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.isTesting);

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.softwareVersion);

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.firmwareVersion);

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.isTesting);

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("hidden", ctx.isKeyboardShow);
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_18__.IonContent, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormGroupDirective, _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.TextValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.RequiredValidator, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.IonSpinner, _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.IonFooter, _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.IonToolbar],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLnBhZ2Uuc2NzcyJ9 */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_home_home_module_ts-es5.js.map