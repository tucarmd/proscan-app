(function () {
  function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }

  function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }

  function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }

  function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

  function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }

  function _possibleConstructorReturn(t, e) { if (e && ("object" == typeof e || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }

  function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }

  function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }

  function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }

  function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }

  function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }

  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  (self["webpackChunkcom_carmd_proscan2"] = self["webpackChunkcom_carmd_proscan2"] || []).push([["main"], {
    /***/
    98255:
    /*!*******************************************************!*\
      !*** ./$_lazy_route_resources/ lazy namespace object ***!
      \*******************************************************/

    /***/
    function _(module) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = 98255;
      module.exports = webpackEmptyAsyncContext;
      /***/
    },

    /***/
    83962:
    /*!*******************************************************************!*\
      !*** ./local_plugins/@ionic-native/bluetooth-serial/ngx/index.js ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BluetoothSerial": function BluetoothSerial() {
          return (
            /* binding */
            _BluetoothSerial
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      42321);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ionic-native/core */
      2490);

      var _BluetoothSerial =
      /** @class */
      function (_super) {
        (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(BluetoothSerial, _super);

        function BluetoothSerial() {
          return _super !== null && _super.apply(this, arguments) || this;
        }

        BluetoothSerial.prototype.connect = function (macAddress_or_uuid) {
          return (0, _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "connect", {
            "platforms": ["Android", "iOS", "Windows Phone"],
            "observable": true,
            "clearFunction": "disconnect"
          }, arguments);
        };

        BluetoothSerial.prototype.connectInsecure = function (macAddress) {
          return (0, _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "connectInsecure", {
            "platforms": ["Android"],
            "observable": true,
            "clearFunction": "disconnect"
          }, arguments);
        };

        BluetoothSerial.prototype.disconnect = function () {
          return (0, _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "disconnect", {}, arguments);
        };

        BluetoothSerial.prototype.write = function (data) {
          return (0, _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "write", {
            "platforms": ["Android", "iOS", "Windows Phone"]
          }, arguments);
        };

        BluetoothSerial.prototype.available = function () {
          return (0, _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "available", {
            "platforms": ["Android", "iOS", "Windows Phone"]
          }, arguments);
        };

        BluetoothSerial.prototype.read = function () {
          return (0, _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "read", {
            "platforms": ["Android", "iOS", "Windows Phone"]
          }, arguments);
        };

        BluetoothSerial.prototype.readUntil = function (delimiter) {
          return (0, _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "readUntil", {
            "platforms": ["Android", "iOS", "Windows Phone"]
          }, arguments);
        };

        BluetoothSerial.prototype.subscribe = function (delimiter) {
          return (0, _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "subscribe", {
            "platforms": ["Android", "iOS", "Windows Phone"],
            "observable": true,
            "clearFunction": "unsubscribe"
          }, arguments);
        };

        BluetoothSerial.prototype.subscribeRawData = function () {
          return (0, _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "subscribeRawData", {
            "platforms": ["Android", "iOS", "Windows Phone"],
            "observable": true,
            "clearFunction": "unsubscribeRawData"
          }, arguments);
        };

        BluetoothSerial.prototype.clear = function () {
          return (0, _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "clear", {
            "platforms": ["Android", "iOS", "Windows Phone"]
          }, arguments);
        };

        BluetoothSerial.prototype.list = function () {
          return (0, _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "list", {
            "platforms": ["Android", "iOS", "Windows Phone"]
          }, arguments);
        };

        BluetoothSerial.prototype.isEnabled = function () {
          return (0, _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "isEnabled", {
            "platforms": ["Android", "iOS", "Windows Phone"]
          }, arguments);
        };

        BluetoothSerial.prototype.isConnected = function () {
          return (0, _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "isConnected", {
            "platforms": ["Android", "iOS", "Windows Phone"]
          }, arguments);
        };

        BluetoothSerial.prototype.readRSSI = function () {
          return (0, _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "readRSSI", {
            "platforms": ["Android", "iOS", "Windows Phone"]
          }, arguments);
        };

        BluetoothSerial.prototype.showBluetoothSettings = function () {
          return (0, _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "showBluetoothSettings", {
            "platforms": ["Android", "iOS", "Windows Phone"]
          }, arguments);
        };

        BluetoothSerial.prototype.enable = function () {
          return (0, _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "enable", {
            "platforms": ["Android", "iOS", "Windows Phone"]
          }, arguments);
        };

        BluetoothSerial.prototype.disable = function () {
          return (0, _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "disable", {
            "platforms": ["Android", "iOS", "Windows Phone"]
          }, arguments);
        };

        BluetoothSerial.prototype.discoverUnpaired = function () {
          return (0, _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "discoverUnpaired", {
            "platforms": ["Android", "iOS", "Windows Phone"]
          }, arguments);
        };

        BluetoothSerial.prototype.setDeviceDiscoveredListener = function () {
          return (0, _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "setDeviceDiscoveredListener", {
            "platforms": ["Android", "iOS", "Windows Phone"],
            "observable": true,
            "clearFunction": "clearDeviceDiscoveredListener"
          }, arguments);
        };

        BluetoothSerial.prototype.setName = function (newName) {
          return (0, _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "setName", {
            "platforms": ["Android"],
            "sync": true
          }, arguments);
        };

        BluetoothSerial.prototype.setDiscoverable = function (discoverableDuration) {
          return (0, _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "setDiscoverable", {
            "platforms": ["Android"],
            "sync": true
          }, arguments);
        };

        BluetoothSerial.pluginName = "BluetoothSerial";
        BluetoothSerial.repo = "https://github.com/don/BluetoothSerial";
        BluetoothSerial.plugin = "cordova-plugin-bluetooth-serial";
        BluetoothSerial.pluginRef = "bluetoothSerial";
        BluetoothSerial.platforms = ["Android", "iOS", "Windows Phone 8"];
        BluetoothSerial = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()], BluetoothSerial);
        return BluetoothSerial;
      }(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.IonicNativePlugin);
      /***/

    },

    /***/
    3877:
    /*!*****************************************!*\
      !*** ./src/app/api/http-interceptor.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HeaderInterceptor": function HeaderInterceptor() {
          return (
            /* binding */
            _HeaderInterceptor
          );
        },

        /* harmony export */
        "JsonParser": function JsonParser() {
          return (
            /* binding */
            _JsonParser
          );
        },

        /* harmony export */
        "CustomJsonInterceptor": function CustomJsonInterceptor() {
          return (
            /* binding */
            _CustomJsonInterceptor
          );
        },

        /* harmony export */
        "httpInterceptorProviders": function httpInterceptorProviders() {
          return (
            /* binding */
            _httpInterceptorProviders
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      42321);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common/http */
      53882);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      79902);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      71435);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs/operators */
      33927);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! rxjs/operators */
      18293);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      34361);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! rxjs */
      81134);
      /* harmony import */


      var _configs_app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../configs/app.config */
      66626);
      /* harmony import */


      var _http_response__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./http-response */
      93649);
      /* harmony import */


      var _models_app_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../models/app.constant */
      99888);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _services_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/helper.service */
      22486);

      var _HeaderInterceptor = /*#__PURE__*/function () {
        function _HeaderInterceptor(helper) {
          _classCallCheck(this, _HeaderInterceptor);

          this.helper = helper;
        }

        return _createClass(_HeaderInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            var _this = this;

            var onStart = this.isApiRequest(request) ? this.onStart() : this.helper.sleep(10);
            return (0, rxjs__WEBPACK_IMPORTED_MODULE_4__.from)(onStart).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(function () {
              if (localStorage.getItem(_models_app_constant__WEBPACK_IMPORTED_MODULE_2__.StorageKeys.ACCESS_KEY)) {
                request = request.clone({
                  setHeaders: {
                    'AuthorizationKey': localStorage.getItem(_models_app_constant__WEBPACK_IMPORTED_MODULE_2__.StorageKeys.ACCESS_KEY)
                  }
                });
              }

              return next.handle(request).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.finalize)(function () {
                return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(_this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
                  return _regeneratorRuntime().wrap(function _callee$(_context) {
                    while (1) switch (_context.prev = _context.next) {
                      case 0:
                        if (!this.isApiRequest(request)) {
                          _context.next = 3;
                          break;
                        }

                        _context.next = 3;
                        return this.onEnd();

                      case 3:
                      case "end":
                        return _context.stop();
                    }
                  }, _callee, this);
                }));
              }));
            }));
          }
        }, {
          key: "onStart",
          value: function onStart() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    return _context2.abrupt("return", this.helper.sleep(10));

                  case 1:
                  case "end":
                    return _context2.stop();
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "onEnd",
          value: function onEnd() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.helper.sleep(_configs_app_config__WEBPACK_IMPORTED_MODULE_0__.AppConfig.SLEEP_TIMEOUT);

                  case 2:
                  case "end":
                    return _context3.stop();
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "isApiRequest",
          value: function isApiRequest(request) {
            return request.url.indexOf(_configs_app_config__WEBPACK_IMPORTED_MODULE_0__.AppConfig.apiEndpoint) > -1;
          }
        }]);
      }();

      _HeaderInterceptor.ɵfac = function HeaderInterceptor_Factory(t) {
        return new (t || _HeaderInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_services_helper_service__WEBPACK_IMPORTED_MODULE_3__.HelperService));
      };

      _HeaderInterceptor.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({
        token: _HeaderInterceptor,
        factory: _HeaderInterceptor.ɵfac
      });

      var _JsonParser = /*#__PURE__*/_createClass(function _JsonParser() {
        _classCallCheck(this, _JsonParser);
      });

      _JsonParser.ɵfac = function JsonParser_Factory(t) {
        return new (t || _JsonParser)();
      };

      _JsonParser.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({
        token: _JsonParser,
        factory: _JsonParser.ɵfac
      });

      var _CustomJsonInterceptor = /*#__PURE__*/function () {
        function _CustomJsonInterceptor(jsonParser) {
          _classCallCheck(this, _CustomJsonInterceptor);

          this.jsonParser = jsonParser;
        }

        return _createClass(_CustomJsonInterceptor, [{
          key: "intercept",
          value: function intercept(httpRequest, next) {
            if (httpRequest.responseType === 'json') {
              // If the expected response type is JSON then handle it here.
              return this.handleJsonResponse(httpRequest, next);
            } else {
              return next.handle(httpRequest);
            }
          }
        }, {
          key: "handleJsonResponse",
          value: function handleJsonResponse(httpRequest, next) {
            var _this2 = this;

            // Override the responseType to disable the default JSON parsing.
            httpRequest = httpRequest.clone({
              responseType: 'text'
            }); // Handle the response using the custom parser.

            return next.handle(httpRequest).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(function (event) {
              return _this2.parseJsonResponse(event);
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.catchError)(function (event) {
              return (0, rxjs__WEBPACK_IMPORTED_MODULE_11__.of)(_this2.parseJsonResponse(event));
            }));
          }
        }, {
          key: "parseJsonResponse",
          value: function parseJsonResponse(event) {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpResponse && typeof event.body === 'string') {
              return event.clone({
                body: this.jsonParser.parse(event.body)
              });
            }

            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpErrorResponse) {
              var res = new _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpResponse(Object.assign({
                body: this.jsonParser.parse({
                  message: {
                    code: event.status || -1,
                    description: event.message
                  }
                })
              }, event));
              return res;
            } else {
              return event;
            }
          }
        }]);
      }();

      _CustomJsonInterceptor.ɵfac = function CustomJsonInterceptor_Factory(t) {
        return new (t || _CustomJsonInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_JsonParser));
      };

      _CustomJsonInterceptor.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({
        token: _CustomJsonInterceptor,
        factory: _CustomJsonInterceptor.ɵfac
      });

      var CustomJsonParser = /*#__PURE__*/function () {
        function CustomJsonParser() {
          _classCallCheck(this, CustomJsonParser);
        }

        return _createClass(CustomJsonParser, [{
          key: "parse",
          value: function parse(obj) {
            if (obj) {
              return new _http_response__WEBPACK_IMPORTED_MODULE_1__.ApiBaseResponse(obj);
            }

            return null;
          }
        }]);
      }();

      var _httpInterceptorProviders = [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HTTP_INTERCEPTORS,
        useClass: _HeaderInterceptor,
        multi: true
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HTTP_INTERCEPTORS,
        useClass: _CustomJsonInterceptor,
        multi: true
      }, {
        provide: _JsonParser,
        useClass: CustomJsonParser
      }];
      /***/
    },

    /***/
    93649:
    /*!**************************************!*\
      !*** ./src/app/api/http-response.ts ***!
      \**************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ApiBaseResponse": function ApiBaseResponse() {
          return (
            /* binding */
            _ApiBaseResponse
          );
        },

        /* harmony export */
        "ApiUserResponse": function ApiUserResponse() {
          return (
            /* binding */
            _ApiUserResponse
          );
        },

        /* harmony export */
        "User": function User() {
          return (
            /* binding */
            _User
          );
        },

        /* harmony export */
        "UserLogin": function UserLogin() {
          return (
            /* binding */
            _UserLogin
          );
        }
        /* harmony export */

      });

      var _ApiBaseResponse = /*#__PURE__*/function () {
        function _ApiBaseResponse(obj) {
          _classCallCheck(this, _ApiBaseResponse);

          if (typeof obj === 'string') {
            obj = JSON.parse(obj);
          }

          if (typeof obj === 'object') {
            Object.assign(this, obj);
          }
        }

        return _createClass(_ApiBaseResponse, [{
          key: "isSuccess",
          get: function get() {
            return this.message && this.message.code === 0;
          }
        }, {
          key: "isTimedOut",
          get: function get() {
            return 0;
          }
        }]);
      }();

      var _ApiUserResponse = /*#__PURE__*/function (_ApiBaseResponse2) {
        function _ApiUserResponse() {
          _classCallCheck(this, _ApiUserResponse);

          return _callSuper(this, _ApiUserResponse, arguments);
        }

        _inherits(_ApiUserResponse, _ApiBaseResponse2);

        return _createClass(_ApiUserResponse);
      }(_ApiBaseResponse);

      var _User = /*#__PURE__*/function (_ApiBaseResponse3) {
        function _User() {
          _classCallCheck(this, _User);

          return _callSuper(this, _User, arguments);
        }

        _inherits(_User, _ApiBaseResponse3);

        return _createClass(_User);
      }(_ApiBaseResponse);

      var _UserLogin = /*#__PURE__*/_createClass(function _UserLogin() {
        _classCallCheck(this, _UserLogin);
      });
      /***/

    },

    /***/
    90158:
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RoutePath": function RoutePath() {
          return (
            /* binding */
            _RoutePath
          );
        },

        /* harmony export */
        "AppRoutingModule": function AppRoutingModule() {
          return (
            /* binding */
            _AppRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _RoutePath = {
        Home: 'home',
        Login: 'login',
        ConnectionFailed: 'connection-failed',
        DlcLocator: 'dlc-locator',
        DlcLocatorDetails: 'dlc-locator-details',
        DtcDetails: 'dtc-details',
        DtcErase: 'dtc-erase',
        ForgotPassword: 'forgot-password',
        ReportHistory: 'report-history',
        ScanComplete: 'scan-complete',
        Tutorial: 'tutorial',
        VehicleLinking: 'vehicle-linking',
        ViewLogs: 'view-logs',
        Template: 'template',
        TemplateModel: 'template-model',
        EnterVin: 'enter-vin',
        VehicleSelection: 'vehicle-selection',
        Modals: 'modals',
        OptionInformationModal: 'option-information-modal',
        ChangeToolName: 'change-tool-name',
        MultipleToolsFoundModal: 'multiple-tools-found-modal',
        ChangeToolNameModal: 'change-tool-name-modal'
      };
      var routes = [{
        path: _RoutePath.Home,
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/home/home.module */
          57994)).then(function (m) {
            return m.HomePageModule;
          });
        }
      }, {
        path: '',
        redirectTo: _RoutePath.Login,
        pathMatch: 'full'
      }, {
        path: _RoutePath.Login,
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/login/login.module */
          21053)).then(function (m) {
            return m.LoginPageModule;
          });
        }
      }, {
        path: _RoutePath.ConnectionFailed,
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_connection-failed_connection-failed_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/connection-failed/connection-failed.module */
          15007)).then(function (m) {
            return m.ConnectionFailedPageModule;
          });
        }
      }, {
        path: _RoutePath.DlcLocator,
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-src_app_bases_base-controller_ts-src_app_services_innova-vci-service_src_connectivity-e7a189"), __webpack_require__.e("default-src_app_services_innova-vci_service_ts"), __webpack_require__.e("default-src_app_modals_vehicle-selection_vehicle-selection_page_ts"), __webpack_require__.e("default-src_app_pages_enter-vin_enter-vin_page_ts"), __webpack_require__.e("default-src_app_pages_vehicle-linking_vehicle-linking_page_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_dlc-locator_dlc-locator_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/dlc-locator/dlc-locator.module */
          11914)).then(function (m) {
            return m.DlcLocatorPageModule;
          });
        }
      }, {
        path: _RoutePath.DlcLocatorDetails,
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-src_app_bases_base-controller_ts-src_app_services_innova-vci-service_src_connectivity-e7a189"), __webpack_require__.e("default-src_app_services_innova-vci_service_ts"), __webpack_require__.e("default-src_app_modals_vehicle-selection_vehicle-selection_page_ts"), __webpack_require__.e("default-src_app_pages_enter-vin_enter-vin_page_ts"), __webpack_require__.e("default-src_app_pages_vehicle-linking_vehicle-linking_page_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_dlc-locator-details_dlc-locator-details_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/dlc-locator-details/dlc-locator-details.module */
          10621)).then(function (m) {
            return m.DlcLocatorDetailsPageModule;
          });
        }
      }, {
        path: _RoutePath.DtcDetails,
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-src_app_pages_dtc-details_dtc-details_page_ts"), __webpack_require__.e("src_app_bases_base-controller_ts-src_app_pages_dtc-details_dtc-details_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/dtc-details/dtc-details.module */
          67848)).then(function (m) {
            return m.DtcDetailsPageModule;
          });
        }
      }, {
        path: _RoutePath.DtcErase,
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-src_app_bases_base-controller_ts-src_app_services_innova-vci-service_src_connectivity-e7a189"), __webpack_require__.e("default-src_app_services_innova-vci_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_dtc-erase_dtc-erase_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/dtc-erase/dtc-erase.module */
          48449)).then(function (m) {
            return m.DtcErasePageModule;
          });
        }
      }, {
        path: _RoutePath.ForgotPassword,
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_forgot-password_forgot-password_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/forgot-password/forgot-password.module */
          65638)).then(function (m) {
            return m.ForgotPasswordPageModule;
          });
        }
      }, {
        path: _RoutePath.ReportHistory,
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_report-history_report-history_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/report-history/report-history.module */
          53291)).then(function (m) {
            return m.ReportHistoryPageModule;
          });
        }
      }, {
        path: _RoutePath.ScanComplete,
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-src_app_bases_base-controller_ts-src_app_services_innova-vci-service_src_connectivity-e7a189"), __webpack_require__.e("default-src_app_services_innova-vci_service_ts"), __webpack_require__.e("default-src_app_pages_dtc-details_dtc-details_page_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_scan-complete_scan-complete_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/scan-complete/scan-complete.module */
          93375)).then(function (m) {
            return m.ScanCompletePageModule;
          });
        }
      }, {
        path: _RoutePath.Tutorial,
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_tutorial_tutorial_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/tutorial/tutorial.module */
          10140)).then(function (m) {
            return m.TutorialPageModule;
          });
        }
      }, {
        path: _RoutePath.VehicleLinking,
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-src_app_bases_base-controller_ts-src_app_services_innova-vci-service_src_connectivity-e7a189"), __webpack_require__.e("default-src_app_services_innova-vci_service_ts"), __webpack_require__.e("default-src_app_modals_vehicle-selection_vehicle-selection_page_ts"), __webpack_require__.e("default-src_app_pages_enter-vin_enter-vin_page_ts"), __webpack_require__.e("default-src_app_pages_vehicle-linking_vehicle-linking_page_ts"), __webpack_require__.e("src_app_pages_vehicle-linking_vehicle-linking_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/vehicle-linking/vehicle-linking.module */
          28048)).then(function (m) {
            return m.VehicleLinkingPageModule;
          });
        }
      }, {
        path: _RoutePath.ViewLogs,
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_view-logs_view-logs_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/view-logs/view-logs.module */
          44674)).then(function (m) {
            return m.ViewLogsPageModule;
          });
        }
      }, {
        path: _RoutePath.Template,
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_template_template_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/template/template.module */
          95685)).then(function (m) {
            return m.TemplatePageModule;
          });
        }
      }, {
        path: _RoutePath.TemplateModel,
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_template-model_template-model_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/template-model/template-model.module */
          68407)).then(function (m) {
            return m.TemplateModelPageModule;
          });
        }
      }, {
        path: _RoutePath.EnterVin,
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-src_app_pages_enter-vin_enter-vin_page_ts"), __webpack_require__.e("src_app_bases_base-controller_ts-src_app_pages_enter-vin_enter-vin_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/enter-vin/enter-vin.module */
          81755)).then(function (m) {
            return m.EnterVinPageModule;
          });
        }
      }, {
        path: _RoutePath.VehicleSelection,
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-src_app_bases_base-controller_ts-src_app_services_innova-vci-service_src_connectivity-e7a189"), __webpack_require__.e("default-src_app_services_innova-vci_service_ts"), __webpack_require__.e("default-src_app_modals_vehicle-selection_vehicle-selection_page_ts"), __webpack_require__.e("src_app_modals_vehicle-selection_vehicle-selection_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./modals/vehicle-selection/vehicle-selection.module */
          95210)).then(function (m) {
            return m.VehicleSelectionPageModule;
          });
        }
      }, {
        path: 'modals',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_modals_modals_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/modals/modals.module */
          48057)).then(function (m) {
            return m.ModalsPageModule;
          });
        }
      }, {
        path: _RoutePath.OptionInformationModal,
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_modals_option-information-modal_option-information-modal_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./modals/option-information-modal/option-information-modal.module */
          65702)).then(function (m) {
            return m.OptionInformationModalPageModule;
          });
        }
      }, {
        path: _RoutePath.MultipleToolsFoundModal,
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("common"), __webpack_require__.e("src_app_bases_base-controller_ts-src_app_modals_multiple-tools-found-modal_multiple-tools-fou-cfad06")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./modals/multiple-tools-found-modal/multiple-tools-found-modal.module */
          26351)).then(function (m) {
            return m.MultipleToolsFoundModalPageModule;
          });
        }
      }, {
        path: _RoutePath.ChangeToolName,
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-src_app_bases_base-controller_ts-src_app_services_innova-vci-service_src_connectivity-e7a189"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_change-tool-name_change-tool-name_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/change-tool-name/change-tool-name.module */
          7246)).then(function (m) {
            return m.ChangeToolNamePageModule;
          });
        }
      }, {
        path: _RoutePath.ChangeToolNameModal,
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("common"), __webpack_require__.e("src_app_bases_base-controller_ts-src_app_modals_change-tool-name-modal_change-tool-name-modal-28f0d2")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./modals/change-tool-name-modal/change-tool-name-modal.module */
          23365)).then(function (m) {
            return m.ChangeToolNameModalPageModule;
          });
        }
      }];

      var _AppRoutingModule = /*#__PURE__*/_createClass(function _AppRoutingModule() {
        _classCallCheck(this, _AppRoutingModule);
      });

      _AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
        return new (t || _AppRoutingModule)();
      };

      _AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: _AppRoutingModule
      });
      _AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__.PreloadAllModules
        })], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](_AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    55041:
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppComponent": function AppComponent() {
          return (
            /* binding */
            _AppComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! tslib */
      42321);
      /* harmony import */


      var _configs_app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./configs/app.config */
      66626);
      /* harmony import */


      var _services_state_app_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./services/state/app.state */
      12607);
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app-routing.module */
      90158);
      /* harmony import */


      var _services_utility_carmd_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./services/utility/carmd.utils */
      92582);
      /* harmony import */


      var _services_state_user_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./services/state/user.state */
      2470);
      /* harmony import */


      var _models_app_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./models/app.constant */
      99888);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _services_logger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./services/logger */
      88737);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @ionic/angular */
      81864);
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      73588);
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      64967);
      /* harmony import */


      var _app_initial__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./app.initial */
      76258);
      /* harmony import */


      var _services_navigation_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./services/navigation.service */
      89565);
      /* harmony import */


      var _services_helper_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./services/helper.service */
      22486);
      /* harmony import */


      var _services_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./services/auth-service/auth-service */
      44073);

      var _AppComponent_instances, _AppComponent_defaultUrl, _AppComponent_isFirstInstall, _AppComponent_hideSplashScreen, _AppComponent_isLiveReloadMode;

      var _AppComponent = /*#__PURE__*/_createClass(function _AppComponent(loggerService, platform, statusBar, splashScreen, appInitial, nav, helper, authService) {
        var _this3 = this;

        _classCallCheck(this, _AppComponent);

        this.loggerService = loggerService;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.appInitial = appInitial;
        this.nav = nav;
        this.helper = helper;
        this.authService = authService;

        _AppComponent_instances.add(this);

        _AppComponent_defaultUrl.set(this, void 0);
        /* Begin trick for live reload mode*/


        (0, tslib__WEBPACK_IMPORTED_MODULE_13__.__classPrivateFieldSet)(this, _AppComponent_defaultUrl, window.location.pathname, "f");
        setTimeout(function () {
          if ((0, tslib__WEBPACK_IMPORTED_MODULE_13__.__classPrivateFieldGet)(_this3, _AppComponent_instances, "m", _AppComponent_isLiveReloadMode).call(_this3)) {
            _this3.nav.goTo(_app_routing_module__WEBPACK_IMPORTED_MODULE_2__.RoutePath.Login);
          }
        }, 50);
        /* End trick for live reload mode*/

        this.platform.ready().then(function () {
          return (0, tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(_this3, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
            var isValidToken;
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.prev = 0;
                  this.logger = this.loggerService.getLogger('AppComponent');
                  this.logger.info('isDevMode:', _configs_app_config__WEBPACK_IMPORTED_MODULE_0__.AppConfig.isDevMode, 'isLiveReloadMode:', (0, tslib__WEBPACK_IMPORTED_MODULE_13__.__classPrivateFieldGet)(this, _AppComponent_instances, "m", _AppComponent_isLiveReloadMode).call(this), 'defaultUrl:', (0, tslib__WEBPACK_IMPORTED_MODULE_13__.__classPrivateFieldGet)(this, _AppComponent_defaultUrl, "f"));
                  _context4.next = 5;
                  return this.appInitial.run(this);

                case 5:
                  if (!(0, tslib__WEBPACK_IMPORTED_MODULE_13__.__classPrivateFieldGet)(this, _AppComponent_instances, "m", _AppComponent_isLiveReloadMode).call(this)) {
                    _context4.next = 9;
                    break;
                  }

                  this.logger.info('Ready for live reload => Go to', (0, tslib__WEBPACK_IMPORTED_MODULE_13__.__classPrivateFieldGet)(this, _AppComponent_defaultUrl, "f"));
                  _context4.next = 9;
                  return this.nav.popToRoot((0, tslib__WEBPACK_IMPORTED_MODULE_13__.__classPrivateFieldGet)(this, _AppComponent_defaultUrl, "f"));

                case 9:
                  //#region Check First Install
                  this.logger.info('IsFirstInstall', (0, tslib__WEBPACK_IMPORTED_MODULE_13__.__classPrivateFieldGet)(this, _AppComponent_instances, "m", _AppComponent_isFirstInstall).call(this)); //#endregion Check First Install

                  _services_utility_carmd_utils__WEBPACK_IMPORTED_MODULE_3__.CarMDUtils.sleep(200);

                  if (_services_state_user_state__WEBPACK_IMPORTED_MODULE_4__.UserState.isAuth) {
                    _context4.next = 16;
                    break;
                  }

                  _context4.next = 14;
                  return this.nav.popToRoot(_app_routing_module__WEBPACK_IMPORTED_MODULE_2__.RoutePath.Login);

                case 14:
                  _context4.next = 23;
                  break;

                case 16:
                  if (!_services_state_app_state__WEBPACK_IMPORTED_MODULE_1__.AppState.isOnDevice) {
                    _context4.next = 23;
                    break;
                  }

                  if ((0, tslib__WEBPACK_IMPORTED_MODULE_13__.__classPrivateFieldGet)(this, _AppComponent_instances, "m", _AppComponent_isLiveReloadMode).call(this)) {
                    _context4.next = 20;
                    break;
                  }

                  _context4.next = 20;
                  return this.nav.popToRoot(_app_routing_module__WEBPACK_IMPORTED_MODULE_2__.RoutePath.Home);

                case 20:
                  _context4.next = 22;
                  return _services_utility_carmd_utils__WEBPACK_IMPORTED_MODULE_3__.CarMDUtils.sleep(200);

                case 22:
                  (0, tslib__WEBPACK_IMPORTED_MODULE_13__.__classPrivateFieldGet)(this, _AppComponent_instances, "m", _AppComponent_hideSplashScreen).call(this);

                case 23:
                  if (_services_state_app_state__WEBPACK_IMPORTED_MODULE_1__.AppState.isOnDevice) {
                    if (_services_state_app_state__WEBPACK_IMPORTED_MODULE_1__.AppState.isOnAndroid) {
                      if (_services_state_app_state__WEBPACK_IMPORTED_MODULE_1__.AppState.isOnPixel) {
                        this.statusBar.overlaysWebView(true);
                        this.statusBar.styleDefault();
                      } else {
                        this.statusBar.styleLightContent();
                      }
                    } else {
                      this.statusBar.overlaysWebView(false);
                      this.statusBar.styleDefault();
                    }

                    (0, tslib__WEBPACK_IMPORTED_MODULE_13__.__classPrivateFieldGet)(this, _AppComponent_instances, "m", _AppComponent_hideSplashScreen).call(this);
                  }

                  if (_services_state_user_state__WEBPACK_IMPORTED_MODULE_4__.UserState.isAuth) {
                    _context4.next = 26;
                    break;
                  }

                  return _context4.abrupt("return");

                case 26:
                  this.logger.info('BEGIN CHECK TOKEN');
                  _context4.next = 29;
                  return this.authService.checkToken();

                case 29:
                  isValidToken = _context4.sent;

                  if (isValidToken) {
                    _context4.next = 39;
                    break;
                  }

                  this.logger.info('TOKEN INVALID => Session has expired');
                  _context4.next = 34;
                  return this.helper.alert('Your session has expired, please login again.');

                case 34:
                  _context4.next = 36;
                  return this.authService.logout();

                case 36:
                  this.nav.popToRoot(_app_routing_module__WEBPACK_IMPORTED_MODULE_2__.RoutePath.Login);
                  _context4.next = 41;
                  break;

                case 39:
                  _context4.next = 41;
                  return this.nav.popToRoot(_app_routing_module__WEBPACK_IMPORTED_MODULE_2__.RoutePath.Home);

                case 41:
                  _context4.next = 46;
                  break;

                case 43:
                  _context4.prev = 43;
                  _context4.t0 = _context4["catch"](0);
                  this.logger.debug('AppComponent>Error', _context4.t0);

                case 46:
                  _context4.prev = 46;
                  this.logger.debug('AppComponent>finally');
                  return _context4.finish(46);

                case 49:
                case "end":
                  return _context4.stop();
              }
            }, _callee4, this, [[0, 43, 46, 49]]);
          }));
        });
      });

      _AppComponent_defaultUrl = new WeakMap(), _AppComponent_instances = new WeakSet(), _AppComponent_isFirstInstall = function _AppComponent_isFirstInstall() {
        var version = localStorage.getItem(_models_app_constant__WEBPACK_IMPORTED_MODULE_5__.StorageKeys.CURRENT_APP_VERSION);

        if (version === _services_state_app_state__WEBPACK_IMPORTED_MODULE_1__.AppState.appVersion) {
          return false;
        }

        this.authService.clearCacheReports();
        localStorage.setItem(_models_app_constant__WEBPACK_IMPORTED_MODULE_5__.StorageKeys.CURRENT_APP_VERSION, _services_state_app_state__WEBPACK_IMPORTED_MODULE_1__.AppState.appVersion);
        return true;
      }, _AppComponent_hideSplashScreen = function _AppComponent_hideSplashScreen() {
        return (0, tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
          return _regeneratorRuntime().wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return _services_utility_carmd_utils__WEBPACK_IMPORTED_MODULE_3__.CarMDUtils.sleep(500);

              case 2:
                this.splashScreen.hide();

              case 3:
              case "end":
                return _context5.stop();
            }
          }, _callee5, this);
        }));
      }, _AppComponent_isLiveReloadMode = function _AppComponent_isLiveReloadMode() {
        return _configs_app_config__WEBPACK_IMPORTED_MODULE_0__.AppConfig.isDevMode && (0, tslib__WEBPACK_IMPORTED_MODULE_13__.__classPrivateFieldGet)(this, _AppComponent_defaultUrl, "f") !== undefined && (0, tslib__WEBPACK_IMPORTED_MODULE_13__.__classPrivateFieldGet)(this, _AppComponent_defaultUrl, "f") != null && (0, tslib__WEBPACK_IMPORTED_MODULE_13__.__classPrivateFieldGet)(this, _AppComponent_defaultUrl, "f") !== '/' && (0, tslib__WEBPACK_IMPORTED_MODULE_13__.__classPrivateFieldGet)(this, _AppComponent_defaultUrl, "f") !== '/index.html';
      };

      _AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || _AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_logger__WEBPACK_IMPORTED_MODULE_6__.AppLoggerService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_15__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__.StatusBar), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_8__.SplashScreen), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_app_initial__WEBPACK_IMPORTED_MODULE_9__.AppInitial), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_navigation_service__WEBPACK_IMPORTED_MODULE_10__.NavigationService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_helper_service__WEBPACK_IMPORTED_MODULE_11__.HelperService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_12__.AuthServiceProvider));
      };

      _AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({
        type: _AppComponent,
        selectors: [["app-root"]],
        decls: 2,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-app");

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "ion-router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonApp, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonRouterOutlet],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    76258:
    /*!********************************!*\
      !*** ./src/app/app.initial.ts ***!
      \********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppInitial": function AppInitial() {
          return (
            /* binding */
            _AppInitial
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      42321);
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/environments/environment */
      92340);
      /* harmony import */


      var _services_state_app_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./services/state/app.state */
      12607);
      /* harmony import */


      var _services_state_user_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./services/state/user.state */
      2470);
      /* harmony import */


      var resize_observer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! resize-observer */
      67447);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _services_logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./services/logger */
      88737);
      /* harmony import */


      var _services_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./services/auth-service/auth-service */
      44073);
      /* harmony import */


      var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic/storage-angular */
      54357);
      /* harmony import */


      var _services_database_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./services/database.service */
      54382);

      var _AppInitial = /*#__PURE__*/function () {
        function _AppInitial(appLoggerService, auth, storage, databaseService) {
          _classCallCheck(this, _AppInitial);

          this.auth = auth;
          this.storage = storage;
          this.databaseService = databaseService;
          this.isInitialled = false;
          this.logger = appLoggerService.getLogger('AppInitial');
        }

        return _createClass(_AppInitial, [{
          key: "fixIssueResizeObserverIos13",
          value: function fixIssueResizeObserverIos13() {
            /* Issue: Unhandled Runtime Error ReferenceError: Can't find variable: ResizeObserver on Safari #27
             * https://github.com/nerdyman/react-compare-slider/issues/27
             *
             * Jira RVD issue: [S10] Can't return value of  live data on Dashboard (iPad)
             * https://iectech.atlassian.net/jira/software/projects/RVD/boards/126?selectedIssue=RVD-404
             */
            if (typeof window !== 'undefined') {
              (0, resize_observer__WEBPACK_IMPORTED_MODULE_3__.install)();
            }
          }
        }, {
          key: "run",
          value: function run(context) {
            var _a;

            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
              return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                while (1) switch (_context6.prev = _context6.next) {
                  case 0:
                    (_a = this.logger) === null || _a === void 0 ? void 0 : _a.info('ENVIRONMENT', src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment); //Should run in static?

                    if (!this.isInitialled) {
                      _context6.next = 3;
                      break;
                    }

                    return _context6.abrupt("return");

                  case 3:
                    _context6.next = 5;
                    return _services_state_app_state__WEBPACK_IMPORTED_MODULE_1__.AppState.init();

                  case 5:
                    this.fixIssueResizeObserverIos13(); //#region Storage

                    _context6.next = 8;
                    return this.storage.create();

                  case 8:
                    //#endregion Storage
                    if (_services_state_app_state__WEBPACK_IMPORTED_MODULE_1__.AppState.isOnDevice) {
                      this.databaseService.createDB();
                    } //#region User


                    _context6.next = 11;
                    return this.auth.init();

                  case 11:
                    _services_state_user_state__WEBPACK_IMPORTED_MODULE_2__.UserState.init();

                    this.logger.info('AuthService was initialled successfully'); //#endregion User

                    this.isInitialled = true;
                    this.logger.info('AppInitial was run successfully');

                  case 15:
                  case "end":
                    return _context6.stop();
                }
              }, _callee6, this);
            }));
          }
        }]);
      }();

      _AppInitial.ɵfac = function AppInitial_Factory(t) {
        return new (t || _AppInitial)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_services_logger__WEBPACK_IMPORTED_MODULE_4__.AppLoggerService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_services_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_5__.AuthServiceProvider), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_ionic_storage_angular__WEBPACK_IMPORTED_MODULE_9__.Storage), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_services_database_service__WEBPACK_IMPORTED_MODULE_6__.DatabaseService));
      };

      _AppInitial.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({
        token: _AppInitial,
        factory: _AppInitial.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    66626:
    /*!***************************************!*\
      !*** ./src/app/configs/app.config.ts ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TIMEOUT_GET_VEH_SUMMARY": function TIMEOUT_GET_VEH_SUMMARY() {
          return (
            /* binding */
            _TIMEOUT_GET_VEH_SUMMARY
          );
        },

        /* harmony export */
        "TIMEOUT_INIT_CONNECTION": function TIMEOUT_INIT_CONNECTION() {
          return (
            /* binding */
            _TIMEOUT_INIT_CONNECTION
          );
        },

        /* harmony export */
        "SLEEP_EACH_VCI_REQUEST": function SLEEP_EACH_VCI_REQUEST() {
          return (
            /* binding */
            _SLEEP_EACH_VCI_REQUEST
          );
        },

        /* harmony export */
        "SLEEP_TIMEOUT": function SLEEP_TIMEOUT() {
          return (
            /* binding */
            _SLEEP_TIMEOUT
          );
        },

        /* harmony export */
        "MS_ONE_SECOND": function MS_ONE_SECOND() {
          return (
            /* binding */
            _MS_ONE_SECOND
          );
        },

        /* harmony export */
        "SLEEP_TIMEOUT_LONG": function SLEEP_TIMEOUT_LONG() {
          return (
            /* binding */
            _SLEEP_TIMEOUT_LONG
          );
        },

        /* harmony export */
        "SUPPORTED_BLUETOOTH_DEVICE_NAMES": function SUPPORTED_BLUETOOTH_DEVICE_NAMES() {
          return (
            /* binding */
            _SUPPORTED_BLUETOOTH_DEVICE_NAMES
          );
        },

        /* harmony export */
        "MILE_TO_KM_RATE": function MILE_TO_KM_RATE() {
          return (
            /* binding */
            _MILE_TO_KM_RATE
          );
        },

        /* harmony export */
        "MAX_MILEAGE_VALUE": function MAX_MILEAGE_VALUE() {
          return (
            /* binding */
            _MAX_MILEAGE_VALUE
          );
        },

        /* harmony export */
        "MAX_MILEAGE_VALUE_KM": function MAX_MILEAGE_VALUE_KM() {
          return (
            /* binding */
            _MAX_MILEAGE_VALUE_KM
          );
        },

        /* harmony export */
        "AppConfig": function AppConfig() {
          return (
            /* binding */
            _AppConfig
          );
        },

        /* harmony export */
        "AppSettings": function AppSettings() {
          return (
            /* binding */
            _AppSettings
          );
        },

        /* harmony export */
        "AppStrings": function AppStrings() {
          return (
            /* binding */
            _AppStrings
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/environments/environment */
      92340);
      /* harmony import */


      var _models_app_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../models/app.constant */
      99888);

      var _TIMEOUT_GET_VEH_SUMMARY = 30000;
      var _TIMEOUT_INIT_CONNECTION = 2000;
      var _SLEEP_EACH_VCI_REQUEST = 100;
      var _SLEEP_TIMEOUT = 200;
      var _MS_ONE_SECOND = 1000;
      var _SLEEP_TIMEOUT_LONG = 2000;
      var _SUPPORTED_BLUETOOTH_DEVICE_NAMES = ['PROSCAN', 'PROSCANLE'];
      var _MILE_TO_KM_RATE = 1.60934;
      var _MAX_MILEAGE_VALUE = 999999;

      var _MAX_MILEAGE_VALUE_KM = _MAX_MILEAGE_VALUE * _MILE_TO_KM_RATE;

      var _AppConfig = /*#__PURE__*/function () {
        function _AppConfig() {
          _classCallCheck(this, _AppConfig);
        }

        return _createClass(_AppConfig, null, [{
          key: "apiEndpoint",
          get:
          /**
           * API Endpoint
           *
           * @readonly
           * @static
           * @type {string}
           * @memberof AppConfig
           */
          function get() {
            return src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.appEndpoint;
          }
        }, {
          key: "IS_ENABLED_LOGGER",
          get: function get() {
            return _AppConfig.isEnabledLogger;
          }
        }]);
      }();
      /**
       * Default HTTP Request Timeout in Milliseconds
       *
       * @static
       * @memberof AppConfig
       */


      _AppConfig.durationTimeoutInMs = 30000;
      _AppConfig.shortHttpRequestTimeoutInMs = 60000;
      _AppConfig.defaultHttpRequestTimeoutInMs = 90000;
      _AppConfig.longHttpRequestTimeoutInMs = 300000;
      _AppConfig.createReportRequestTimeoutInMs = 180000;
      _AppConfig.scanningDevicesInterval = 10000; //static scanningDevicesTimeout = 60_000;

      _AppConfig.scanningDevicesTimeout = 180000; //#region Dev Configs

      _AppConfig.isDevMode = !src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production;
      _AppConfig.enableToSendDevLog = true;
      _AppConfig.IS_RELEASE = true;
      _AppConfig.IS_LIVE = true;
      _AppConfig.KEYBOARD_HIDE_ACCESSORY_BAR = true;
      _AppConfig.KEYBOARD_DISABLE_SCROLL = false;
      _AppConfig.SLEEP_TIMEOUT = 200;
      _AppConfig.SCAN_OEM_MODULE_TIMEOUT = 30000; // 30s

      _AppConfig.isEnabledLogger = false;
      _AppConfig.LOGGER_EMAIL = 'lien.nguyen@carmd.com';
      _AppConfig.LOGGER_CC_EMAIL = 'vieth@carmd.com';

      var _AppSettings = /*#__PURE__*/function () {
        function _AppSettings() {
          _classCallCheck(this, _AppSettings);

          var _settings = JSON.parse(localStorage.getItem(_models_app_constant__WEBPACK_IMPORTED_MODULE_1__.StorageKeys.USER_SETTINGS));

          if (_settings) {
            this.isEnableLocation = _settings.isEnableLocation;
            this.isEnableNotification = _settings.isEnableNotification;
          }
        }

        return _createClass(_AppSettings, [{
          key: "save",
          value: function save() {
            localStorage.setItem(_models_app_constant__WEBPACK_IMPORTED_MODULE_1__.StorageKeys.USER_SETTINGS, JSON.stringify(this));
          }
        }]);
      }();

      var _AppStrings = /*#__PURE__*/_createClass(function _AppStrings() {
        _classCallCheck(this, _AppStrings);
      });

      _AppStrings.LOADING_TEXT = 'Please wait...';
      _AppStrings.APP_NAME = 'Pro Scan';
      _AppStrings.CONFIRM = 'Confirm';
      _AppStrings.SUCCESS = 'Success';
      _AppStrings.ERROR = 'Error';
      _AppStrings.OK = 'OK';
      _AppStrings.CANCEL = 'Cancel';
      _AppStrings.MSG_REQUEST_TIMEOUT = 'Request timed out.';
      _AppStrings.MSG_SERVER_ERROR = 'Cannot connect to server';
      _AppStrings.MSG_SERVER_ERROR_TRY_LATER = 'Cannot connect to server. Please try again later.'; // Login

      _AppStrings.MSG_UNKNOWN_ERROR = 'Internal Server Error.';
      _AppStrings.MSG_LOGIN_ERROR = 'Invalid User and/or Password !'; // Forgot Password

      _AppStrings.MSG_RESET_PASSWORD_ERROR = 'Email not found.';
      _AppStrings.MSG_RESET_PASSWORD_SUCCESS = 'Email sent. Please check your email for resetting your password.'; // Settings

      _AppStrings.MSG_CONFIRM_LOGOUT = 'Do you want to logout?';
      _AppStrings.CHANGE_USERNAME = 'Change User Name';
      _AppStrings.MSG_CHANGE_USERNAME_PROMPT = 'Enter your new user name';
      _AppStrings.MSG_CHANGE_USERNAME_SUCCESS = 'Your user name has been changed.';
      _AppStrings.MSG_CHANGE_USERNAME_ERROR = 'Can not change your user name at this time.';
      _AppStrings.CHANGE_PHONENUMBER = 'Change Phone Number';
      _AppStrings.MSG_CHANGE_PHONENUM_PROMPT = 'Enter your new phone number';
      _AppStrings.MSG_CHANGE_PHONENUM_SUCCESS = 'Your phone number has been changed.';
      _AppStrings.MSG_CHANGE_PHONENUM_ERROR_INVALID = 'Invalid phone number!';
      _AppStrings.MSG_CHANGE_PHONENUM_ERROR = 'Can not change your phone number at this time.';
      _AppStrings.MSG_UNABLE_SCAN_VIN = 'Cannot find the VIN. Please scan VIN again.';
      _AppStrings.MSG_UNABLE_DECODE_VIN = 'Cannot decode your VIN. Please try again.';
      _AppStrings.MSG_INVALID_VIN = 'Invalid VIN';
      /***/
    },

    /***/
    40029:
    /*!******************************************!*\
      !*** ./src/app/configs/logger.config.ts ***!
      \******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LoggerConfig": function LoggerConfig() {
          return (
            /* binding */
            _LoggerConfig
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _models_app_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../models/app.constant */
      99888);

      var _LoggerConfig = /*#__PURE__*/function () {
        function _LoggerConfig() {
          _classCallCheck(this, _LoggerConfig);
        }

        return _createClass(_LoggerConfig, null, [{
          key: "enableLogger",
          get: function get() {
            return _LoggerConfig.enabled;
          },
          set: function set(value) {
            _LoggerConfig.enabled = value;
          }
        }]);
      }();

      _LoggerConfig.enabled = true;
      _LoggerConfig.enabledConsole = false;
      _LoggerConfig.bundleId = _models_app_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.appBundleId;
      _LoggerConfig.defaultTagName = 'General';
      _LoggerConfig.configuration = {
        logLevels: [{
          loggerName: _LoggerConfig.bundleId,
          logLevel: 'ALL'
        }],
        memoryAppender: {
          maxMessages: 8000,
          threshold: 'ALL'
        } // localStorageAppender: {
        //   localStorageKey: AppConstants.loggerLocalStorageKey,
        //   maxMessages: 8_000,
        //   threshold: 'ALL'
        // }

      };
      /***/
    },

    /***/
    28900:
    /*!**************************************!*\
      !*** ./src/app/global-validators.ts ***!
      \**************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "GlobalValidator": function GlobalValidator() {
          return (
            /* binding */
            _GlobalValidator
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _GlobalValidator = /*#__PURE__*/function () {
        function _GlobalValidator() {
          _classCallCheck(this, _GlobalValidator);
        }

        return _createClass(_GlobalValidator, null, [{
          key: "mailFormat",
          value: function mailFormat(control) {
            if (control.value && (control.value.length <= 5 || !_GlobalValidator.EMAIL_REGEXP.test(control.value))) {
              return {
                "email": true
              };
            }

            return null;
          }
        }, {
          key: "phoneNumberFormat",
          value: function phoneNumberFormat(control) {
            if (control.value && (control.value.length <= 5 || !_GlobalValidator.PHONE_REGEXP.test(control.value))) {
              return {
                "phoneNumber": true
              };
            }

            return null;
          }
        }]);
      }();

      _GlobalValidator.PHONE_REGEXP = /^[0-9]{10,12}$/;
      _GlobalValidator.EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

      _GlobalValidator.ɵfac = function GlobalValidator_Factory(t) {
        return new (t || _GlobalValidator)();
      };

      _GlobalValidator.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: _GlobalValidator,
        factory: _GlobalValidator.ɵfac
      });
      /***/
    },

    /***/
    99888:
    /*!****************************************!*\
      !*** ./src/app/models/app.constant.ts ***!
      \****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppConstants": function AppConstants() {
          return (
            /* binding */
            _AppConstants
          );
        },

        /* harmony export */
        "StorageKeys": function StorageKeys() {
          return (
            /* binding */
            _StorageKeys
          );
        },

        /* harmony export */
        "OptionDescription": function OptionDescription() {
          return (
            /* binding */
            _OptionDescription
          );
        }
        /* harmony export */

      });
      /* eslint-disable @typescript-eslint/naming-convention */


      var _AppConstants = {
        appBundleId: 'com.carmd.proscan2',
        loggerLocalStorageKey: 'com.carmd.proscan2.logs',
        contactUsUrl: 'https://carmd.com/support#contact-form',
        databaseFileName: 'proscan2.db'
      };
      var _StorageKeys = {
        LAST_LOGIN_TIME: 'last_login_time',
        FIRST_RUN: 'first_run',
        ACCESS_KEY: 'accessKey',
        USER_INFO: 'userInfo',
        USER_ID: 'userId',
        USER_NAME: 'userName',
        USER_SETTINGS: 'userSettings',
        USER_INCOMPLETE_REPORTS_PREFIX_KEY: 'incompleteReports_',
        FIRMWARE_VERSION: 'firmware_version',
        REPORT_SESSION: 'report_session',
        DEVICE_LIST: 'devices',
        REPORT_DETAILS: 'Report_',
        CURRENT_APP_VERSION: 'app_version'
      };
      var _OptionDescription = {
        Toyota: [{
          option: 'RADAR CRUISE',
          description: 'This type of cruise control uses radar sensing behind the front emblem plus a multi-function camera mounted near the rear-view mirror.<br/>This allows for optimum speed and distance between vehicles. <br/><br/>This system is easily identified by looking at the front emblem. If it’s shiny and smooth plastic, this is a radar system.',
          image: null
        }, {
          option: 'w/ Smart Key',
          description: 'A smart key uses a key fob for electronic authorization to access the vehicle. <br/><br/>This system is easily identified by a Push Button Start type ignition.',
          image: 'assets/img/vehicle_selection/p1.jpg'
        }, {
          option: 'w/o Smart Key',
          description: 'The key and key fob may be integrated or separated, but this system requires the key to manually start the engine.<br/><br/>This system is easily identified by a physical key used for the ignition.',
          image: 'assets/img/vehicle_selection/p2.jpg'
        }, {
          option: 'LASER CRUISE',
          description: 'This type of cruise control uses laser sensing in the lower area of the front bumper with a visible lens exposed. This allows for optimum speed, distance, and stop/go between vehicles.<br/><br/>This system is easily identified by looking at the front emblem. If it’s raised standard emblem and a lens is protruding from the lower bumper area, this is a laser system.',
          image: null
        }, {
          option: 'TMMK Product',
          description: '(TMMK) is an automobile manufacturing factory in Georgetown, Kentucky, United States. It is part of Toyota Motor North America, owned by Toyota Motor Corporation of Japan.<br/><br/>This information is easily found in the VIN Placard on the door jamb as MFD. BY: TOYOTA MOTOR MANUFACTURING, KENTUCKY, INC.',
          image: 'assets/img/vehicle_selection/p3.jpg'
        }, {
          option: 'w/o VSC',
          description: 'Vehicle Stability Control reduces the loss of vehicle control by monitoring steering and vehicle direction while driving.<br/><br/>This system is easily identified by a VSC button found on the dash or center console when turned off the light "VSC OFF"  illuminates on the instrument cluster.',
          image: 'assets/img/vehicle_selection/p4.jpg'
        }, {
          option: 'w/ VSC',
          description: 'Vehicle Stability Control reduces the loss of vehicle control by monitoring steering and vehicle direction while driving.<br/><br/>This system is easily identified by a VSC button found on the dash or center console when turned off the light "VSC OFF"  illuminates on the instrument cluster.',
          image: 'assets/img/vehicle_selection/p4.jpg'
        }, {
          option: 'Automatic Transmission',
          description: 'Automatic Transmission is a multi-speed transmission used in internal combustion engine-based motor vehicles that does not require any driver input to change forward gears under normal driving conditions.',
          image: 'assets/img/vehicle_selection/p5.jpg'
        }, {
          option: 'Manual Transmission',
          description: 'Manual Transmission car a vehicle that uses a stick shift and a clutch pedal to change gears',
          image: 'assets/img/vehicle_selection/p6.jpg'
        }, {
          option: 'w/ KDSS',
          description: 'KDSS stands for Kinetic Dynamic Suspension System and adjusts front and rear stabilizers based on a set of interconnected hydraulic cylinders.<br/><br/>This system can easily be identified when turning the ignition to the ON position a "KDSS" light will illuminate. If still unsure, check under the driver’s side of the vehicle for the accumulator assembly and piping. In addition, the front sway bar will have a canister with a boot attached on one side.',
          image: 'assets/img/vehicle_selection/p7.jpg'
        }, {
          option: 'w/o KDSS',
          description: 'KDSS stands for Kinetic Dynamic Suspension System and adjusts front and rear stabilizers based on a set of interconnected hydraulic cylinders.<br/><br/>This system can easily be identified when turning the ignition to the ON position a "KDSS" light will illuminate. If still unsure, check under the driver’s side of the vehicle for the accumulator assembly and piping. In addition, the front sway bar will have a canister with a boot attached on one side.',
          image: 'assets/img/vehicle_selection/p7.jpg'
        }, {
          option: 'w/ EPB',
          description: 'Electronic Parking Brake (EPB) is an electronically controlled parking brake, whereby the driver activates the holding mechanism with a button and the brake pads are electrically applied to the rear wheels.<br/><br/>This is easily identified by a lever assembly with "P" either on the dash or center console.',
          image: 'assets/img/vehicle_selection/p8.jpg'
        }, {
          option: 'w/o EPB',
          description: 'Electronic Parking Brake (EPB) is an electronically controlled parking brake, whereby the driver activates the holding mechanism with a button and the brake pads are electrically applied to the rear wheels.<br/><br/>This is easily identified by a lever assembly with "P" either on the dash or center console.',
          image: 'assets/img/vehicle_selection/p8.jpg'
        }]
      };
      /***/
    },

    /***/
    40354:
    /*!************************************!*\
      !*** ./src/app/models/app.data.ts ***!
      \************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppData": function AppData() {
          return (
            /* binding */
            _AppData
          );
        },

        /* harmony export */
        "AppFakeData": function AppFakeData() {
          return (
            /* binding */
            _AppFakeData
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _app_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app.enum */
      34932);

      var _AppData = /*#__PURE__*/function () {
        function _AppData() {
          _classCallCheck(this, _AppData);
        }

        return _createClass(_AppData, null, [{
          key: "init",
          value: function init() {
            var storage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            _AppData.storage$ = [];
            window.AppData = _AppData; // export for DEBUG
          }
        }, {
          key: "get",
          value: function get(key) {
            var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            var value = _AppData.storage$ ? _AppData.storage$[key] : defaultValue;
            return value !== undefined ? value : defaultValue;
          }
        }, {
          key: "set",
          value: function set(key, value) {
            if (!_AppData.storage$) {
              _AppData.init();
            }

            return _AppData.storage$[key] = value;
          }
        }, {
          key: "remove",
          value: function remove(key) {
            if (_AppData.storage$) {
              delete _AppData.storage$[key];
            }
          }
        }, {
          key: "reset",
          value: function reset() {
            if (_AppData.storage$) {
              _AppData.storage$.length = 0;
            }
          }
        }, {
          key: "hasInternetConnection",
          get: function get() {
            return !!_AppData.connectionType;
          }
        }, {
          key: "connectionType",
          get: function get() {
            return _AppData.get(_app_enum__WEBPACK_IMPORTED_MODULE_0__.EnumAppDataKey.InternetConnectionType);
          }
        }]);
      }();

      var _AppFakeData = /*#__PURE__*/_createClass(function _AppFakeData() {
        _classCallCheck(this, _AppFakeData);
      });

      _AppFakeData.VCIResponse = {
        "usbProductId": 720,
        "bootloaderVersion": "V01.02.01",
        "firmwareVersion": "V18.02.11",
        "dongleId": "b5d256ad-c423-4d8c-bd62-bcd997cf685c",
        "vinProfile": "qjFGTTVLOEhUNEpHQTc1NjkwAAMAJgAMAAoA/////xoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=",
        "vin": "1FM5K8HT4JGA75690",
        "ymme": {
          "year": "2018",
          "make": "Ford",
          "model": "Explorer",
          "engine": "V6, 3.5L"
        },
        "vehicleInfoEcm": "VUAAAAAxRk01SzhIVDRKR0E3NTY5MABKWkJSM0FaLkgzMgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADUAdSKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQCBAa1AjwCBAAAAAACqAIEAAAAAAK5AgQAAAAAALUARgJEAgQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==",
        "vehicleInfoTcm": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==",
        "vehicleInfoData": {
          "VIN": "1FM5K8HT4JGA75690",
          "Module": ["$7E8"],
          "CalID": ["JZBR3AZ.H32"],
          "CVN": ["D4 01 D4 8A"],
          "IPT": [["OBDCOND", "516"], ["IGNCNTR", "1717"], ["CATCOMP1", "572"], ["CATCOND1", "516"], ["CATCOMP2", "0"], ["CATCOND2", "0"], ["O2SCOMP1", "680"], ["O2SCOND1", "516"], ["O2SCOMP2", "0"], ["O2SCOND2", "0"], ["EGRCOMP", "697"], ["EGRCOND", "516"], ["AIRCOMP", "0"], ["AIRCOND", "0"], ["EVAPCOMP", "181"], ["EVAPCOND", "70"], ["SO2SCOMP1", "580"], ["SO2SCOND1", "516"], ["SO2SCOMP2", "0"], ["SO2SCOND2", "0"]]
        },
        "freezeFrameEcm": "qiYAAAIAAASqIAIEAASqQAIIAASqAQIMAASqAgIQAAKqAwISAAKqBAIUAAGqBQIVAAGqBgIWAAKqBwIYAAKqCwIaAAGqDAIbAAKqDQIdAAGqDgIeAAGqDwIfAAEAEAIgAAKqEQIiAAGqFQIjAAKqHwIlAAKqLAInAAGqLgIoAAGqLwIpAAGqMAIqAAGqMQIrAAKqMgItAAKqMwIvAAGqNAIwAASqPAI0AAKqQQI2AACqQgI2AAKqQwI4AAKqRAI6AAKqRQI8AAGqRgI9AAGqRwI+AAGqSQI/AAGqSgJAAAGqTAJBAAGqAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/j+IAwAX8BH+0AAAAAfl5QMCAQAAFoAGgAd7AAAAlAAAAPv//wAAAAAAAAAAAABbAACAAADeK4cAAIZm3Bb9AAEYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==",
        "freezeFrameTcm": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==",
        "freezeFrameDTCData": [],
        "freezeFrameLDData": [["Fuel Sys 1", "OL"], ["Fuel Sys 2", "N/A"], ["Calc Load", "0.0 (%)"], ["ECT", "-0 (°F)"], ["STFT B1", "0.0 (%)"], ["LTFT B1", "0.0 (%)"], ["MAP", "36 (inHg)"], ["Eng RPM", "0"], ["Veh Speed", "0 (mph)"], ["Spark Adv", "10.0 (°)"], ["IAT", "--"], ["MAF", "0.00 (lb/min)"], ["TPS", "98.4 (%)"], ["O2S B1 S2", "1.275 (V)"], ["STFT B1 S2", "99.2 (%)"], ["Run Time", "0 (sec)"], ["Command EGR", "0.0 (%)"], ["Command EVAP", "0.0 (%)"], ["Fuel Level", "0.0 (%)"], ["Warm-up DTC Clr", "0"], ["Clr Dist", "0 (miles)"], ["EVAP_VP", "0.0 (InH2O)"], ["BARO", "27 (inHg)"], ["LAMBDA B1 S1", "0.000"], ["O2S B1 S1", "0.00 (mA)"], ["CAT Te 11", "-0 (°F)"], ["ECU Volts", "11.143 (V)"], ["LOAD Value", "0.0 (%)"], ["EQ Ratio", "1.049"], ["Rel TPS", "86.3 (%)"], ["Ambient", "-0 (°F)"], ["TPS B", "99.2 (%)"], ["ACC Pedal D", "0.0 (%)"], ["ACC Pedal E", "0.4 (%)"], ["Command TAC", "9.4 (%)"]],
        "monitorEcm": "qr//wACAB+/u",
        "monitorTcm": "AEMIEAEAAADu",
        "monitorData": {
          "MIL": "On",
          "Complete": ["Misfire Monitor", "Fuel System Monitor", "Comprehensive Component Monitor (CCM)", "Catalyst Monitor"],
          "Incomplete": ["EGR System Monitor", "Heated Catalyst Monitor", "EVAP System Monitor", "Secondary Air System Monitor", "Oxygen Sensor Monitor", "Oxygen Sensor Heater Monitor"]
        },
        "dtcEcm": "AAACAAEdAOgHAAAcBAIDMgQRQAQAEAQQCggAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAqgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAqg==",
        "dtcTcm": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAqgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==",
        "dtcInfoData": [{
          "ModuleName": "ECM",
          "Dtcs": [["P0332", "Stored", "Knock Sensor 2 Circuit Low Input (Bank 2)"], ["P1140", "Stored", "Water In Fuel Condition"], ["P0010", "Stored", "Intake Camshaft Position Actuator Circuit / Open (Bank 1)"], ["P100A", "Permanent", "Alternative Fuel Rail Pressure Sensor B Circuit"]],
          "InvalidDTC": 0
        }],
        "driveCycles": [{
          "name": "Misfire Monitor",
          "value": "Complete",
          "option": "",
          "note": "",
          "condition": "1. Pre-Conditioning Requirements:<br/>  A. Cold soaks the vehicle for 8 hours.<br/>  B. No DTCs present.<br/>  C. Fuel Fills between 15% and 85 %.",
          "procedure": "1. Pre-Conditioning Requirements:<br/> A. Cold soak the vehicle for 8 hours.<br/> B. No DTCs present.<br/> C. Fuel fill between 15% and 85 %.<br/>2. Driving Procedure.<br/> A. Start the vehicle and idle for four (4) minutes.<br/> B. Idle the vehicle in drive for 40 seconds (neutral for M/T).<br/> C. Accelerate to 45 mph, using ¼ to ½ throttle (M/T stay in second gear for at least 5 seconds). Accelerate for at least 10 seconds and shift through to 5th gear.<br/> D. Drive with a steady throttle at 45 mph for 30 seconds.<br/> E. Stop the vehicle and idle in drive or neutral for 40 seconds.<br/> F. Drive at speeds between 25 mph and 45 mph for 15 minutes.<br/> Note: Use 25% to 50% throttle accelerations. Include the following conditions:<br/> a. At least 5 stops with ten seconds of idle time.<br/> b. At least 3 steady speed sections of 1 ½ minutes duration.<br/> G. Drive the vehicle between 45 mph and 60 mph for 8 minutes (use high gear).<br/> H. Keep a steady speed between 45 mph and 60 mph for 5 minutes.<br/> I. Drive the vehicle between 45 mph and 60 mph for 8 minutes (use high gear).<br/> J. Stop vehicle, idle for 40 seconds.",
          "id": 14,
          "status": 3
        }, {
          "name": "Fuel System Monitor",
          "value": "Complete",
          "option": "",
          "note": "",
          "condition": "1. Pre-Conditioning Requirements:<br/>  A. Cold soaks the vehicle for 8 hours.<br/>  B. No DTCs present.<br/>  C. Fuel Fills between 15% and 85 %.",
          "procedure": "1. Pre-Conditioning Requirements:<br/> A. Cold soak the vehicle for 8 hours.<br/> B. No DTCs present.<br/> C. Fuel fill between 15% and 85 %.<br/>2. Driving Procedure.<br/> A. Start the vehicle and idle for four (4) minutes.<br/> B. Idle the vehicle in drive for 40 seconds (neutral for M/T).<br/> C. Accelerate to 45 mph, using ¼ to ½ throttle (M/T stay in second gear for at least 5 seconds). Accelerate for at least 10 seconds and shift through to 5th gear.<br/> D. Drive with a steady throttle at 45 mph for 30 seconds.<br/> E. Stop the vehicle and idle in drive or neutral for 40 seconds.<br/> F. Drive at speeds between 25 mph and 45 mph for 15 minutes.<br/> Note: Use 25% to 50% throttle accelerations. Include the following conditions:<br/> a. At least 5 stops with ten seconds of idle time.<br/> b. At least 3 steady speed sections of 1 ½ minutes duration.<br/> G. Drive the vehicle between 45 mph and 60 mph for 8 minutes (use high gear).<br/> H. Keep a steady speed between 45 mph and 60 mph for 5 minutes.<br/> I. Drive the vehicle between 45 mph and 60 mph for 8 minutes (use high gear).<br/> J. Stop vehicle, idle for 40 seconds.",
          "id": 10,
          "status": 3
        }, {
          "name": "Comprehensive Component Monitor (CCM)",
          "value": "Complete",
          "option": "",
          "note": "",
          "condition": "1. Pre-Conditioning Requirements:<br/>  A. Cold soaks the vehicle for 8 hours.<br/>  B. No DTCs present.<br/>  C. Fuel Fills between 15% and 85 %.",
          "procedure": "1. Pre-Conditioning Requirements:<br/> A. Cold soak the vehicle for 8 hours.<br/> B. No DTCs present.<br/> C. Fuel fill between 15% and 85 %.<br/>2. Driving Procedure.<br/> A. Start the vehicle and idle for four (4) minutes.<br/> B. Idle the vehicle in drive for 40 seconds (neutral for M/T).<br/> C. Accelerate to 45 mph, using ¼ to ½ throttle (M/T stay in second gear for at least 5 seconds). Accelerate for at least 10 seconds and shift through to 5th gear.<br/> D. Drive with a steady throttle at 45 mph for 30 seconds.<br/> E. Stop the vehicle and idle in drive or neutral for 40 seconds.<br/> F. Drive at speeds between 25 mph and 45 mph for 15 minutes.<br/> Note: Use 25% to 50% throttle accelerations. Include the following conditions:<br/> a. At least 5 stops with ten seconds of idle time.<br/> b. At least 3 steady speed sections of 1 ½ minutes duration.<br/> G. Drive the vehicle between 45 mph and 60 mph for 8 minutes (use high gear).<br/> H. Keep a steady speed between 45 mph and 60 mph for 5 minutes.<br/> I. Drive the vehicle between 45 mph and 60 mph for 8 minutes (use high gear).<br/> J. Stop vehicle, idle for 40 seconds.",
          "id": 4,
          "status": 3
        }, {
          "name": "Catalyst Monitor",
          "value": "Complete",
          "option": "",
          "note": "",
          "condition": "1. Pre-Conditioning Requirements:<br/>  A. Cold soaks the vehicle for 8 hours.<br/>  B. No DTCs present.<br/>  C. Fuel Fills between 15% and 85 %.",
          "procedure": "1. Pre-Conditioning Requirements:<br/> A. Cold soak the vehicle for 8 hours.<br/> B. No DTCs present.<br/> C. Fuel fill between 15% and 85 %.<br/>2. Driving Procedure.<br/> A. Start the vehicle and idle for four (4) minutes.<br/> B. Idle the vehicle in drive for 40 seconds (neutral for M/T).<br/> C. Accelerate to 45 mph, using ¼ to ½ throttle (M/T stay in second gear for at least 5 seconds). Accelerate for at least 10 seconds and shift through to 5th gear.<br/> D. Drive with a steady throttle at 45 mph for 30 seconds.<br/> E. Stop the vehicle and idle in drive or neutral for 40 seconds.<br/> F. Drive at speeds between 25 mph and 45 mph for 15 minutes.<br/> Note: Use 25% to 50% throttle accelerations. Include the following conditions:<br/> a. At least 5 stops with ten seconds of idle time.<br/> b. At least 3 steady speed sections of 1 ½ minutes duration.<br/> G. Drive the vehicle between 45 mph and 60 mph for 8 minutes (use high gear).<br/> H. Keep a steady speed between 45 mph and 60 mph for 5 minutes.<br/> I. Drive the vehicle between 45 mph and 60 mph for 8 minutes (use high gear).<br/> J. Stop vehicle, idle for 40 seconds.",
          "id": 3,
          "status": 3
        }, {
          "name": "EGR System Monitor",
          "value": "Incomplete",
          "option": "",
          "note": "",
          "condition": "1. Pre-Conditioning Requirements:<br/>  A. Cold soaks the vehicle for 8 hours.<br/>  B. No DTCs present.<br/>  C. Fuel Fills between 15% and 85 %.",
          "procedure": "1. Pre-Conditioning Requirements:<br/> A. Cold soak the vehicle for 8 hours.<br/> B. No DTCs present.<br/> C. Fuel fill between 15% and 85 %.<br/>2. Driving Procedure.<br/> A. Start the vehicle and idle for four (4) minutes.<br/> B. Idle the vehicle in drive for 40 seconds (neutral for M/T).<br/> C. Accelerate to 45 mph, using ¼ to ½ throttle (M/T stay in second gear for at least 5 seconds). Accelerate for at least 10 seconds and shift through to 5th gear.<br/> D. Drive with a steady throttle at 45 mph for 30 seconds.<br/> E. Stop the vehicle and idle in drive or neutral for 40 seconds.<br/> F. Drive at speeds between 25 mph and 45 mph for 15 minutes.<br/> Note: Use 25% to 50% throttle accelerations. Include the following conditions:<br/> a. At least 5 stops with ten seconds of idle time.<br/> b. At least 3 steady speed sections of 1 ½ minutes duration.<br/> G. Drive the vehicle between 45 mph and 60 mph for 8 minutes (use high gear).<br/> H. Keep a steady speed between 45 mph and 60 mph for 5 minutes.<br/> I. Drive the vehicle between 45 mph and 60 mph for 8 minutes (use high gear).<br/> J. Stop vehicle, idle for 40 seconds.",
          "id": 7,
          "status": 2
        }, {
          "name": "Heated Catalyst Monitor",
          "value": "Incomplete",
          "option": "",
          "note": "",
          "condition": "1. Pre-Conditioning Requirements:<br/>  A. Cold soaks the vehicle for 8 hours.<br/>  B. No DTCs present.<br/>  C. Fuel Fills between 15% and 85 %.",
          "procedure": "1. Pre-Conditioning Requirements:<br/> A. Cold soak the vehicle for 8 hours.<br/> B. No DTCs present.<br/> C. Fuel fill between 15% and 85 %.<br/>2. Driving Procedure.<br/> A. Start the vehicle and idle for four (4) minutes.<br/> B. Idle the vehicle in drive for 40 seconds (neutral for M/T).<br/> C. Accelerate to 45 mph, using ¼ to ½ throttle (M/T stay in second gear for at least 5 seconds). Accelerate for at least 10 seconds and shift through to 5th gear.<br/> D. Drive with a steady throttle at 45 mph for 30 seconds.<br/> E. Stop the vehicle and idle in drive or neutral for 40 seconds.<br/> F. Drive at speeds between 25 mph and 45 mph for 15 minutes.<br/> Note: Use 25% to 50% throttle accelerations. Include the following conditions:<br/> a. At least 5 stops with ten seconds of idle time.<br/> b. At least 3 steady speed sections of 1 ½ minutes duration.<br/> G. Drive the vehicle between 45 mph and 60 mph for 8 minutes (use high gear).<br/> H. Keep a steady speed between 45 mph and 60 mph for 5 minutes.<br/> I. Drive the vehicle between 45 mph and 60 mph for 8 minutes (use high gear).<br/> J. Stop vehicle, idle for 40 seconds.",
          "id": 11,
          "status": 2
        }, {
          "name": "EVAP System Monitor",
          "value": "Incomplete",
          "option": "",
          "note": "",
          "condition": "1. Pre-Conditioning Requirements:<br/>  A. Cold soaks the vehicle for 8 hours.<br/>  B. No DTCs present.<br/>  C. Fuel Fills between 15% and 85 %.",
          "procedure": "1. Pre-Conditioning Requirements:<br/> A. Cold soak the vehicle for 8 hours.<br/> B. No DTCs present.<br/> C. Fuel fill between 15% and 85 %.<br/>2. Driving Procedure.<br/> A. Start the vehicle and idle for four (4) minutes.<br/> B. Idle the vehicle in drive for 40 seconds (neutral for M/T).<br/> C. Accelerate to 45 mph, using ¼ to ½ throttle (M/T stay in second gear for at least 5 seconds). Accelerate for at least 10 seconds and shift through to 5th gear.<br/> D. Drive with a steady throttle at 45 mph for 30 seconds.<br/> E. Stop the vehicle and idle in drive or neutral for 40 seconds.<br/> F. Drive at speeds between 25 mph and 45 mph for 15 minutes.<br/> Note: Use 25% to 50% throttle accelerations. Include the following conditions:<br/> a. At least 5 stops with ten seconds of idle time.<br/> b. At least 3 steady speed sections of 1 ½ minutes duration.<br/> G. Drive the vehicle between 45 mph and 60 mph for 8 minutes (use high gear).<br/> H. Keep a steady speed between 45 mph and 60 mph for 5 minutes.<br/> I. Drive the vehicle between 45 mph and 60 mph for 8 minutes (use high gear).<br/> J. Stop vehicle, idle for 40 seconds.",
          "id": 9,
          "status": 2
        }, {
          "name": "Secondary Air System Monitor",
          "value": "Incomplete",
          "option": "",
          "note": "",
          "condition": "1. Pre-Conditioning Requirements:<br/>  A. Cold soaks the vehicle for 8 hours.<br/>  B. No DTCs present.<br/>  C. Fuel Fills between 15% and 85 %.",
          "procedure": "1. Pre-Conditioning Requirements:<br/> A. Cold soak the vehicle for 8 hours.<br/> B. No DTCs present.<br/> C. Fuel fill between 15% and 85 %.<br/>2. Driving Procedure.<br/> A. Start the vehicle and idle for four (4) minutes.<br/> B. Idle the vehicle in drive for 40 seconds (neutral for M/T).<br/> C. Accelerate to 45 mph, using ¼ to ½ throttle (M/T stay in second gear for at least 5 seconds). Accelerate for at least 10 seconds and shift through to 5th gear.<br/> D. Drive with a steady throttle at 45 mph for 30 seconds.<br/> E. Stop the vehicle and idle in drive or neutral for 40 seconds.<br/> F. Drive at speeds between 25 mph and 45 mph for 15 minutes.<br/> Note: Use 25% to 50% throttle accelerations. Include the following conditions:<br/> a. At least 5 stops with ten seconds of idle time.<br/> b. At least 3 steady speed sections of 1 ½ minutes duration.<br/> G. Drive the vehicle between 45 mph and 60 mph for 8 minutes (use high gear).<br/> H. Keep a steady speed between 45 mph and 60 mph for 5 minutes.<br/> I. Drive the vehicle between 45 mph and 60 mph for 8 minutes (use high gear).<br/> J. Stop vehicle, idle for 40 seconds.",
          "id": 1,
          "status": 2
        }, {
          "name": "Oxygen Sensor Monitor",
          "value": "Incomplete",
          "option": "",
          "note": "",
          "condition": "1. Pre-Conditioning Requirements:<br/>  A. Cold soaks the vehicle for 8 hours.<br/>  B. No DTCs present.<br/>  C. Fuel Fills between 15% and 85 %.",
          "procedure": "1. Pre-Conditioning Requirements:<br/> A. Cold soak the vehicle for 8 hours.<br/> B. No DTCs present.<br/> C. Fuel fill between 15% and 85 %.<br/>2. Driving Procedure.<br/> A. Start the vehicle and idle for four (4) minutes.<br/> B. Idle the vehicle in drive for 40 seconds (neutral for M/T).<br/> C. Accelerate to 45 mph, using ¼ to ½ throttle (M/T stay in second gear for at least 5 seconds). Accelerate for at least 10 seconds and shift through to 5th gear.<br/> D. Drive with a steady throttle at 45 mph for 30 seconds.<br/> E. Stop the vehicle and idle in drive or neutral for 40 seconds.<br/> F. Drive at speeds between 25 mph and 45 mph for 15 minutes.<br/> Note: Use 25% to 50% throttle accelerations. Include the following conditions:<br/> a. At least 5 stops with ten seconds of idle time.<br/> b. At least 3 steady speed sections of 1 ½ minutes duration.<br/> G. Drive the vehicle between 45 mph and 60 mph for 8 minutes (use high gear).<br/> H. Keep a steady speed between 45 mph and 60 mph for 5 minutes.<br/> I. Drive the vehicle between 45 mph and 60 mph for 8 minutes (use high gear).<br/> J. Stop vehicle, idle for 40 seconds.",
          "id": 16,
          "status": 2
        }, {
          "name": "Oxygen Sensor Heater Monitor",
          "value": "Incomplete",
          "option": "",
          "note": "",
          "condition": "1. Pre-Conditioning Requirements:<br/>  A. Cold soaks the vehicle for 8 hours.<br/>  B. No DTCs present.<br/>  C. Fuel Fills between 15% and 85 %.",
          "procedure": "1. Pre-Conditioning Requirements:<br/> A. Cold soak the vehicle for 8 hours.<br/> B. No DTCs present.<br/> C. Fuel fill between 15% and 85 %.<br/>2. Driving Procedure.<br/> A. Start the vehicle and idle for four (4) minutes.<br/> B. Idle the vehicle in drive for 40 seconds (neutral for M/T).<br/> C. Accelerate to 45 mph, using ¼ to ½ throttle (M/T stay in second gear for at least 5 seconds). Accelerate for at least 10 seconds and shift through to 5th gear.<br/> D. Drive with a steady throttle at 45 mph for 30 seconds.<br/> E. Stop the vehicle and idle in drive or neutral for 40 seconds.<br/> F. Drive at speeds between 25 mph and 45 mph for 15 minutes.<br/> Note: Use 25% to 50% throttle accelerations. Include the following conditions:<br/> a. At least 5 stops with ten seconds of idle time.<br/> b. At least 3 steady speed sections of 1 ½ minutes duration.<br/> G. Drive the vehicle between 45 mph and 60 mph for 8 minutes (use high gear).<br/> H. Keep a steady speed between 45 mph and 60 mph for 5 minutes.<br/> I. Drive the vehicle between 45 mph and 60 mph for 8 minutes (use high gear).<br/> J. Stop vehicle, idle for 40 seconds.",
          "id": 13,
          "status": 2
        }],
        "oemModules": [{
          "system": 1,
          "subsystem": 65535,
          "Dtcs": [{
            "code": "B146B-28",
            "type": "CM",
            "definition": "Auxiliary Output 1 - Signal Bias Level Out Of Range/Zero Adjustment Failure"
          }, {
            "code": "P01EB-D8",
            "type": "CM|Failsafe/MIL",
            "definition": "Engine Coolant Heater A Control Circuit Performance"
          }, {
            "code": "P2018-F2",
            "type": "CM|Current/MIL",
            "definition": "Intake Manifold Runner Position Sensor/Switch Circuit Intermittent (Bank 1)"
          }, {
            "code": "B1238-1B",
            "type": "CM",
            "definition": "Speaker Amplifier - Circuit Resistance Above Threshold"
          }],
          "group": 16,
          "modulename": "PCM - Powertrain Control Module"
        }, {
          "system": 2,
          "subsystem": 65535,
          "Dtcs": [{
            "code": "P0435-F8",
            "type": "CM|Current",
            "definition": "Catalyst Temperature Sensor (Bank 2)"
          }, {
            "code": "P120F-03",
            "type": "CM",
            "definition": "Fuel Pressure Regulator Excessive Variation - Frequency Modulated / Pulse Width Modulated Failures"
          }, {
            "code": "P0453-ED",
            "type": "CM|Current",
            "definition": "(EVAP) System Pressure Sensor/Switch High Input"
          }, {
            "code": "B1C05-3B",
            "type": "CM|Current/MIL",
            "definition": "Memory 3 Switch"
          }, {
            "code": "P2B91-D9",
            "type": "CM",
            "definition": "Turbocharger/Supercharger 'B' Temperature Sensor Circuit High"
          }, {
            "code": "P24E2-6E",
            "type": "CM",
            "definition": "(NH3) Sensor Circuit Range/Performance"
          }],
          "group": 2,
          "modulename": "ABS - Anti-Lock Brake / Traction Control Module"
        }, {
          "system": 31,
          "subsystem": 65535,
          "Dtcs": [{
            "code": "B1B87-4E",
            "type": "CM",
            "definition": "Seat Height Motor Hall Sensor"
          }, {
            "code": "U3523-F8",
            "type": "CM",
            "definition": "High Voltage System Interlock Circuit 'F' Low"
          }, {
            "code": "P2277-46",
            "type": "CM|Current",
            "definition": "(O2) Sensor Signal Stuck Rich - Bank 2, Sensor 3 - Calibration/Parameter Memory Failure"
          }, {
            "code": "P0376-29",
            "type": "CM|Indeterminate/MIL",
            "definition": "Timing Reference High Resolution Signal B Too Many Pulses - Signal Invalid"
          }, {
            "code": "P279A-88",
            "type": "CM",
            "definition": "Transfer Case Gear High Incorrect Ratio - Bus Off"
          }],
          "group": 4,
          "modulename": "RCM - Restraint Control Module"
        }, {
          "system": 16,
          "subsystem": 65535,
          "Dtcs": [],
          "group": 255,
          "modulename": "ACM - Audio Control Module"
        }, {
          "system": 76,
          "subsystem": 65535,
          "Dtcs": [],
          "group": 255,
          "modulename": "APIM - Accessory Protocol Interface Module"
        }, {
          "system": 107,
          "subsystem": 65535,
          "Dtcs": [{
            "code": "C05F5-85",
            "type": "CM",
            "definition": "4WD/AWD Range Actuator Control Circuit/Open - Signal Above Allowable Range"
          }, {
            "code": "P0873-DA",
            "type": "CM",
            "definition": "Transmission Fluid Pressure Sensor/Switch C Circuit High"
          }, {
            "code": "U0179-A9",
            "type": "CM",
            "definition": "Lost Communication With Restraints System Sensor J"
          }, {
            "code": "P0053-4D",
            "type": "CM",
            "definition": "(HO2S) Heater Resistance (Bank 1, Sensor 1)"
          }, {
            "code": "P0215-25",
            "type": "CM",
            "definition": "Engine Shutoff Solenoid - Signal Shape/Waveform Failure"
          }, {
            "code": "P0737-DC",
            "type": "CM|Current",
            "definition": "(TCM) Engine Speed Output Circuit"
          }, {
            "code": "U0240-72",
            "type": "CM",
            "definition": "Lost Communication With Entrapment Control Module B - Actuator Stuck Open"
          }, {
            "code": "C1A92-1A",
            "type": "CM|Not Current",
            "definition": "Left Rear Wheel Speed Sensor - Circuit Resistance Below Threshold"
          }],
          "group": 255,
          "modulename": "ATCM - All Terrain Control Module"
        }, {
          "system": 102,
          "subsystem": 65535,
          "Dtcs": [],
          "group": 64,
          "modulename": "BdyCM - Body Control Module"
        }, {
          "system": 157,
          "subsystem": 65535,
          "Dtcs": [{
            "code": "B12BF-4F",
            "type": "CM",
            "definition": "Right Front Camera"
          }, {
            "code": "P2711-DB",
            "type": "CM|Current/MIL",
            "definition": "Unexpected mechanical gear disengagement"
          }, {
            "code": "P0075-74",
            "type": "CM|Current",
            "definition": "Intake Valve Control Circuit (Bank 1) - Actuator Slipping"
          }, {
            "code": "U1011-E9",
            "type": "CM",
            "definition": "Invalid Internal Control Module Monitoring Data Received from (ECM#1)/(PCM)"
          }, {
            "code": "P03A7-5C",
            "type": "CM|Indeterminate",
            "definition": "Cylinder 2 Pressure Variation High"
          }, {
            "code": "P0EC1-81",
            "type": "CM|Current/MIL",
            "definition": "(A/C) Refrigerant Temperature Sensor B Circuit - Invalid Serial Data Received"
          }],
          "group": 255,
          "modulename": "BECMB - Battery Energy Control Module B"
        }, {
          "system": 86,
          "subsystem": 65535,
          "Dtcs": [{
            "code": "P1708-D8",
            "type": "CM|Failsafe/MIL",
            "definition": "Clutch Switch Circuit"
          }, {
            "code": "P2B9E-D0",
            "type": "CM",
            "definition": "Coolant Pump 'A' Control Module Overtemperature"
          }, {
            "code": "B1A86-DF",
            "type": "CM|Indeterminate",
            "definition": "Ignition Status"
          }, {
            "code": "P0051-2D",
            "type": "CM",
            "definition": "(HO2S) Heater Control Circuit Low (Bank 2, Sensor 1)"
          }, {
            "code": "P016D-36",
            "type": "CM|Current",
            "definition": "Excessive Time to Enter Closed Loop Fuel Pressure Control - Signal Frequency Too Low"
          }, {
            "code": "P2316-78",
            "type": "CM",
            "definition": "Ignition Coil F Primary Control Circuit High - Alignment Or Adjustment Incorrect"
          }, {
            "code": "P246D-BD",
            "type": "CM",
            "definition": "Diesel Particulate Filter Pressure Sensor A/B Correlation"
          }, {
            "code": "U043A-70",
            "type": "CM|Indeterminate",
            "definition": "Invalid Data Received From Suspension Control Module B"
          }],
          "group": 128,
          "modulename": "C-CM - Cruise-Control Module"
        }, {
          "system": 117,
          "subsystem": 65535,
          "Dtcs": [{
            "code": "B142F-C0",
            "type": "CM|Current",
            "definition": "Wheel Change Manager ((TCCM)/(PCM)/(ECM#1)) All Terrain System State"
          }, {
            "code": "B1458-38",
            "type": "CM",
            "definition": "Auxiliary Switch 2 - Signal Frequency Incorrect"
          }, {
            "code": "B1156-9A",
            "type": "CM|Current",
            "definition": "Driver Seat - Component or System Operating Conditions"
          }, {
            "code": "U0402-EC",
            "type": "CM",
            "definition": "Invalid Data Received From (TCM)"
          }, {
            "code": "U067D-0F",
            "type": "CM|Current/MIL",
            "definition": "Lost Communication with Fan 4"
          }, {
            "code": "P162F-D4",
            "type": "CM",
            "definition": "Starter Motor Disabled - Engine Crank Time Too Long"
          }, {
            "code": "P0A72-A5",
            "type": "CM",
            "definition": "Generator Phase V Current"
          }, {
            "code": "P0EE1-52",
            "type": "CM|Not Current",
            "definition": "Hybrid/EV Battery Pack 'F' Deterioration - Not Activated"
          }],
          "group": 255,
          "modulename": "DACMC - Digital Audio Control Module C"
        }, {
          "system": 5,
          "subsystem": 65535,
          "Dtcs": [],
          "group": 255,
          "modulename": "DDM - Drivers Door Module"
        }, {
          "system": 6,
          "subsystem": 65535,
          "Dtcs": [{
            "code": "C059A-10",
            "type": "CM|Current/MIL",
            "definition": "Power Steering Control Module - Rear Missing Calibration"
          }, {
            "code": "B133E-E2",
            "type": "CM|Not Current",
            "definition": "Left Power Sliding Door Lock"
          }, {
            "code": "P02F9-D3",
            "type": "CM",
            "definition": "Cylinder 12 Injector Circuit Range/Performance"
          }, {
            "code": "P2A70-95",
            "type": "CM",
            "definition": "Alternative Fuel Hydraulic Fuel Pump Select Valve Control Circuit - Incorrect Assembly"
          }, {
            "code": "B1A42-C4",
            "type": "CM|Current/MIL",
            "definition": "Driver Belt Buckle"
          }, {
            "code": "P341B-31",
            "type": "CM",
            "definition": "Deactivation/Intake Valve Control Circuit Performance(Bank 2) - No Signal"
          }, {
            "code": "P0C4D-9D",
            "type": "CM|Current/MIL",
            "definition": "Hybrid Battery Pack Coolant Pump Supply Voltage Circuit High"
          }],
          "group": 255,
          "modulename": "DSM - Drivers Seat Module"
        }, {
          "system": 71,
          "subsystem": 65535,
          "Dtcs": [{
            "code": "P005F-38",
            "type": "CM|Current/MIL",
            "definition": "Turbocharger/Supercharger Boost Control B Supply Voltage Circuit High - Signal Frequency Incorrect"
          }, {
            "code": "P1384-A5",
            "type": "CM|Current/MIL",
            "definition": "Variable Valve Timing Solenoid A Circuit"
          }, {
            "code": "P026D-2C",
            "type": "CM|Failsafe/MIL",
            "definition": "Fuel Injection Quantity Higher Than Expected"
          }],
          "group": 255,
          "modulename": "DSP - (Audio) Digital Signal Processing Module"
        }, {
          "system": 103,
          "subsystem": 65535,
          "Dtcs": [{
            "code": "B009E-F4",
            "type": "CM|Current",
            "definition": "Right Side Restraints Sensor 5"
          }, {
            "code": "P1304-3F",
            "type": "CM|Not Current",
            "definition": "(EGR) Calibration High"
          }, {
            "code": "B12F0-8A",
            "type": "CM",
            "definition": "Master Exterior Light Switch Illumination"
          }],
          "group": 255,
          "modulename": "FCDIM - Front Control/Display Interface Module"
        }, {
          "system": 150,
          "subsystem": 65535,
          "Dtcs": [{
            "code": "P03FD-24",
            "type": "CM|Current",
            "definition": "Ignition 'L' Control Signal Circuit/Open - Signal Stuck High"
          }, {
            "code": "B1557-2D",
            "type": "CM",
            "definition": "Power Liftgate/Decklid Driver Motor 2"
          }, {
            "code": "P030E-A6",
            "type": "CM|Indeterminate/MIL",
            "definition": "Ignition 'B' Control Signal Circuit Low"
          }, {
            "code": "P283C-CC",
            "type": "CM",
            "definition": "Shift Fork C Position Circuit Range/Performance"
          }, {
            "code": "P0EEC-6B",
            "type": "CM",
            "definition": "Battery Energy Control Module 'B' Performance"
          }],
          "group": 255,
          "modulename": "FCIMB - Front Controls Interface Module B"
        }, {
          "system": 111,
          "subsystem": 65535,
          "Dtcs": [{
            "code": "P2036-76",
            "type": "CM|Current/MIL",
            "definition": "Exhaust Gas Temperature Sensor Circuit High Bank 2 Sensor 2 - Wrong Mounting Position"
          }, {
            "code": "P234A-E7",
            "type": "CM",
            "definition": "Cylinder 9 Pressure Sensor Circuit Low"
          }, {
            "code": "P0517-34",
            "type": "CM|Current",
            "definition": "Battery Temperature Sensor Circuit High - Signal High Time Less Than Minimum"
          }],
          "group": 255,
          "modulename": "GFM - Generic Function Module"
        }, {
          "system": 90,
          "subsystem": 65535,
          "Dtcs": [{
            "code": "B10DE-0E",
            "type": "CM|Current",
            "definition": "Low Fuel Warning Switch"
          }, {
            "code": "P2326-CD",
            "type": "CM|Indeterminate",
            "definition": "Ignition Coil I Secondary Circuit"
          }, {
            "code": "P04D3-ED",
            "type": "CM|Current",
            "definition": "Exhaust Brake Input Circuit"
          }, {
            "code": "P2338-98",
            "type": "CM",
            "definition": "Cylinder 3 Above Knock Threshold - Component Or System Over Temperature"
          }, {
            "code": "P0C24-7A",
            "type": "CM",
            "definition": "Auxiliary Transmission Fluid Pump Control Module Circuit Low - Fluid Leak Or Seal Failure"
          }],
          "group": 255,
          "modulename": "GPSM - Global Positioning System Module"
        }, {
          "system": 112,
          "subsystem": 65535,
          "Dtcs": [{
            "code": "P07DE-E4",
            "type": "CM",
            "definition": "Incorrect Shift from Gear 3"
          }, {
            "code": "P05D3-E9",
            "type": "CM|Current/MIL",
            "definition": "Driver Mode Select Switch A Range/Performance"
          }, {
            "code": "C055D-AB",
            "type": "CM",
            "definition": "Secondary Brake Circuit Hydraulic Leak"
          }, {
            "code": "P2B2A-1C",
            "type": "CM",
            "definition": "Hybrid/EV Electronics Coolant Pump Overspeed (Dry Run) - Circuit Voltage Out Of Range"
          }, {
            "code": "P0006-9F",
            "type": "CM|Current/MIL",
            "definition": "Fuel Shutoff Valve A Control Circuit Low - Stuck Off"
          }, {
            "code": "P0187-27",
            "type": "CM",
            "definition": "Fuel Temperature Sensor B Circuit Low Input - Signal Rate Of Change Above Threshold"
          }, {
            "code": "P2C0A-BA",
            "type": "CM|Indeterminate",
            "definition": "'A' Camshaft Profile Actuator Position Sensor B Range/Performance Bank 1"
          }],
          "group": 255,
          "modulename": "GWM - Gateway Module A"
        }, {
          "system": 44,
          "subsystem": 65535,
          "Dtcs": [{
            "code": "P2391-C5",
            "type": "CM",
            "definition": "Diesel Intake Air Flow 'B' Control Performance"
          }, {
            "code": "P03A0-69",
            "type": "CM|Current/MIL",
            "definition": "Cylinder 2 Pressure Sensor Circuit Range/Performance"
          }, {
            "code": "P1618-2E",
            "type": "CM|Failsafe/MIL",
            "definition": "Interactive Reprogramming Code - block program error, low voltage"
          }, {
            "code": "P2A34-A6",
            "type": "CM|Current",
            "definition": "(AFCM) Power Relay Control Circuit High"
          }],
          "group": 128,
          "modulename": "HCM - Headlamp Control Module"
        }, {
          "system": 109,
          "subsystem": 65535,
          "Dtcs": [{
            "code": "P1870-DD",
            "type": "CM",
            "definition": "Mechanical Transfer Case (4X4) Switch Circuit Failure"
          }, {
            "code": "P1381-46",
            "type": "CM|Current",
            "definition": "(CMP) Timing Over Advanced (Bank 1) - Calibration/Parameter Memory Failure"
          }, {
            "code": "P04E2-D5",
            "type": "CM",
            "definition": "Crankcase Ventilation Hose Connection Sensor Circuit Low"
          }, {
            "code": "P1262-68",
            "type": "CM",
            "definition": "Cylinder 2 High To Low Side Short - Event Information"
          }, {
            "code": "P2890-49",
            "type": "CM",
            "definition": "Cylinder 1 Ion Current Sense Circuit - Internal Electronic Failure"
          }, {
            "code": "P0C44-9E",
            "type": "CM|Current/MIL",
            "definition": "Hybrid Battery Pack Coolant Temperature Sensor Circuit Low - Stuck On"
          }, {
            "code": "P20BD-10",
            "type": "CM",
            "definition": "Reductant Heater B Control Circuit Open"
          }],
          "group": 255,
          "modulename": "HSWM - Heated Steering Wheel Module"
        }, {
          "system": 93,
          "subsystem": 65535,
          "Dtcs": [{
            "code": "P3480-14",
            "type": "CM|Current/MIL",
            "definition": "Cylinder 10 Exhaust Valve Control Circuit High - Circuit Short To Ground Or Open"
          }, {
            "code": "P0D2E-CB",
            "type": "CM",
            "definition": "Drive Motor A Inverter Voltage Sensor A Circuit Range/Performance"
          }, {
            "code": "P0143-5F",
            "type": "CM|Indeterminate/MIL",
            "definition": "(O2) Circuit Low Voltage (Bank 1, Sensor 3)"
          }, {
            "code": "P34B0-EA",
            "type": "CM|Current/MIL",
            "definition": "A Camshaft Position Actuator Position Sensor Circuit Bank 2"
          }],
          "group": 128,
          "modulename": "HUD - Head Up Display"
        }, {
          "system": 75,
          "subsystem": 65535,
          "Dtcs": [{
            "code": "U0225-E9",
            "type": "CM",
            "definition": "Lost Communication With Door Window Motor D"
          }, {
            "code": "U0232-CB",
            "type": "CM",
            "definition": "Lost Communication With Side Obstacle Detection Control Module - Left"
          }, {
            "code": "P27B6-75",
            "type": "CM",
            "definition": "Pressure Control Solenoid M Control Circuit Range/Performance - Emergency Position Not Reachable"
          }],
          "group": 255,
          "modulename": "HVAC - Heating Ventilation Air Conditioning"
        }, {
          "system": 84,
          "subsystem": 65535,
          "Dtcs": [{
            "code": "U04B3-C2",
            "type": "CM",
            "definition": "Invalid Data Received From Planetary Gear Set Control Module"
          }, {
            "code": "P186E-B8",
            "type": "CM",
            "definition": "Differential Oil Filter Leakage"
          }, {
            "code": "P1460-09",
            "type": "CM",
            "definition": "Wide Open Throttle (A/C) Cutout Circuit - Component Failures"
          }],
          "group": 64,
          "modulename": "IPC - Instrument Panel Control Module"
        }, {
          "system": 121,
          "subsystem": 65535,
          "Dtcs": [{
            "code": "P1668-F2",
            "type": "CM|Current/MIL",
            "definition": "(PCM)/(IDM) Communications Error"
          }, {
            "code": "P23B9-DB",
            "type": "CM",
            "definition": "NOx Sensor Heater Sense Circuit High Bank 1 Sensor 3"
          }, {
            "code": "P0964-F1",
            "type": "CM|Current",
            "definition": "(PCB) Control Circuit Open"
          }, {
            "code": "P22BE-E0",
            "type": "CM|Current",
            "definition": "(O2) Sensor Reference Voltage Circuit High (Bank 2 Sensor 2)"
          }, {
            "code": "P1611-9E",
            "type": "CM",
            "definition": "Interactive Reprogramming Code - Diagnose Further (used with P1616/18) - Stuck On"
          }, {
            "code": "B146F-D4",
            "type": "CM|Not Current",
            "definition": "Back Bladder System Electropneumatic Failure"
          }, {
            "code": "P1664-81",
            "type": "CM|Current/MIL",
            "definition": "Injection Pump Control Module Malfunction - Invalid Serial Data Received"
          }, {
            "code": "P2B4F-7B",
            "type": "CM",
            "definition": "'A' Camshaft Profile Actuator 'B' Control Performance/Stuck Off Bank 1 - Low Fluid Level"
          }],
          "group": 128,
          "modulename": "IPMA - Image Processing Module A"
        }, {
          "system": 113,
          "subsystem": 65535,
          "Dtcs": [{
            "code": "B1D29-DC",
            "type": "CM",
            "definition": "No Start, Even After Restart Attempt"
          }, {
            "code": "U210C-7C",
            "type": "CM|Current/MIL",
            "definition": "Lost Communication Between Fuel Pump Control Module B and Restraints Control Module - Slow Response"
          }, {
            "code": "P172F-63",
            "type": "CM",
            "definition": "Shift Fork C/D Direction Control Valve Stuck Off - Circuit/Component Protection Time-Out"
          }, {
            "code": "P00C3-44",
            "type": "CM",
            "definition": "Turbocharger/Supercharger Bypass Valve B Control Circuit Range/Performance - Data Memory Failure"
          }, {
            "code": "P1333-C9",
            "type": "CM|Current",
            "definition": "Turbo/Super Charger Boost High Side Control Circuit High"
          }, {
            "code": "P0792-A8",
            "type": "CM|Not Current/MIL",
            "definition": "(ISS) Sensor A Circuit Range/Performance"
          }, {
            "code": "U0654-F2",
            "type": "CM",
            "definition": "Lost Communication With Diesel Intake Air Flow 'A' Position Sensor"
          }],
          "group": 128,
          "modulename": "IPMB - Image Processing Module B"
        }, {
          "system": 63,
          "subsystem": 65535,
          "Dtcs": [{
            "code": "C05AD-F4",
            "type": "CM|Indeterminate",
            "definition": "Brake Blending System Performance"
          }, {
            "code": "U2022-55",
            "type": "CM|Current",
            "definition": "Control Module Calibration Data #5 - Not Configured"
          }, {
            "code": "P2BAC-1F",
            "type": "CM",
            "definition": "(NOX) Exceedence - Deactivation of EGR - Circuit Intermittent"
          }],
          "group": 255,
          "modulename": "OCS - Occupant Classification System Module"
        }, {
          "system": 28,
          "subsystem": 65535,
          "Dtcs": [{
            "code": "P0418-08",
            "type": "CM",
            "definition": "(AIR) System Control A Circuit - Bus Signal/Message Failures"
          }, {
            "code": "P0D7D-7F",
            "type": "CM|Indeterminate/MIL",
            "definition": "(A/C) Compressor Motor Phase V Current High - Actuator Stuck Off"
          }, {
            "code": "B14A4-00",
            "type": "CM",
            "definition": "Camera Power"
          }, {
            "code": "B1A20-46",
            "type": "CM",
            "definition": "Passenger Stage 1 Airbag Squib - Calibration/Parameter Memory Failure"
          }, {
            "code": "U1A27-10",
            "type": "CM|Not Current/MIL",
            "definition": "Lost Communication With (REM)"
          }, {
            "code": "P0914-C3",
            "type": "CM|Current/MIL",
            "definition": "Gear Shift Position Circuit [senses forward / rearward position, odd / even gears]"
          }, {
            "code": "B11A1-28",
            "type": "CM",
            "definition": "Right Side Restraints Pressure Sensor - Signal Bias Level Out Of Range/Zero Adjustment Failure"
          }],
          "group": 255,
          "modulename": "PAM - Parking Aid Module"
        }, {
          "system": 114,
          "subsystem": 65535,
          "Dtcs": [{
            "code": "P1799-11",
            "type": "CM",
            "definition": "(CAN) (TCM)/(ABS) Circuit Malfunction - Circuit Short To Ground"
          }, {
            "code": "P0587-F4",
            "type": "CM|Current/MIL",
            "definition": "Cruise Control Vent Control Circuit Low"
          }, {
            "code": "P2AC5-35",
            "type": "CM",
            "definition": "Intake Air (O2) Sensor Reference Voltage Circuit Low Bank 2 - Signal High Time Greater Than Maximum"
          }, {
            "code": "B1451-F3",
            "type": "CM|Current",
            "definition": "Tailgate/Liftgate/Boot/Trunk Latch Centering Position Switch"
          }, {
            "code": "P208C-77",
            "type": "CM|Current",
            "definition": "Reductant Pump 'A' Control Circuit Low - Commanded Position Not Reachable"
          }],
          "group": 255,
          "modulename": "PDM - Passenger Front Door Module"
        }, {
          "system": 80,
          "subsystem": 65535,
          "Dtcs": [{
            "code": "P1525-EC",
            "type": "CM|Current",
            "definition": "Air Bypass Valve"
          }, {
            "code": "P1849-8C",
            "type": "CM|Current/MIL",
            "definition": "Transfer Case Contact Plate A Short Circuit To Ground"
          }, {
            "code": "B0050-D1",
            "type": "CM|Indeterminate/MIL",
            "definition": "Driver Seatbelt Sensor"
          }, {
            "code": "P23C0-37",
            "type": "CM|Current/MIL",
            "definition": "NOx Sensor Performance - Slow Response High to Low Bank 1 Sensor 3 - Signal Frequency Too High"
          }, {
            "code": "P045A-CB",
            "type": "CM|Current",
            "definition": "(EGR) B Control Circuit"
          }],
          "group": 255,
          "modulename": "PSCM - Power Steering Control Module"
        }, {
          "system": 118,
          "subsystem": 65535,
          "Dtcs": [{
            "code": "C1B22-C8",
            "type": "CM|Not Current/MIL",
            "definition": "Hill Descent Switch"
          }, {
            "code": "P24D8-0E",
            "type": "CM",
            "definition": "(EVAP) System Pressure Sensor/Switch B Circuit High"
          }, {
            "code": "C1A95-3D",
            "type": "CM|Current/MIL",
            "definition": "Wheel speed sensor circuit"
          }, {
            "code": "U0502-1D",
            "type": "CM",
            "definition": "Invalid Data Received From Door Control Module C - Circuit Current Out Of Range"
          }, {
            "code": "B12EA-61",
            "type": "CM|Current",
            "definition": "(RF) Receiver - Signal Calculation Failure"
          }, {
            "code": "B1045-72",
            "type": "CM",
            "definition": "CHIME - Actuator Stuck Open"
          }, {
            "code": "P0281-06",
            "type": "CM",
            "definition": "Cylinder 7 Contribution/Balance - Algorithm Based Failures"
          }],
          "group": 255,
          "modulename": "RGTM - Rear Gate/Trunk Module"
        }, {
          "system": 101,
          "subsystem": 65535,
          "Dtcs": [{
            "code": "B12B4-38",
            "type": "CM",
            "definition": "Door Warning Light - Signal Frequency Incorrect"
          }, {
            "code": "P0C63-31",
            "type": "CM|Failsafe/MIL",
            "definition": "Drive Motor B Position Sensor Circuit B Intermittent/Erratic - No Signal"
          }, {
            "code": "P0C5F-FC",
            "type": "CM|Failsafe/MIL",
            "definition": "Drive Motor B Position Sensor Circuit B"
          }, {
            "code": "U012E-18",
            "type": "CM",
            "definition": "Lost Communication With Camshaft Position Control Module - Circuit Current Below Threshold"
          }, {
            "code": "B1518-AC",
            "type": "CM|Current",
            "definition": "Third Row Passenger Side Inflatable Seatbelt Deployment Control"
          }, {
            "code": "P26AA-71",
            "type": "CM",
            "definition": "Engine Coolant Bypass Valve Position Sensor Maximum Stop Performance - Actuator Stuck"
          }],
          "group": 255,
          "modulename": "RHVAC - Rear Heating Ventilation Air Conditioning"
        }, {
          "system": 122,
          "subsystem": 65535,
          "Dtcs": [{
            "code": "P2A24-AA",
            "type": "CM",
            "definition": "Alternative Fuel Tank Shutoff Valve B Control Circuit Low"
          }, {
            "code": "P0DC6-40",
            "type": "CM",
            "definition": "Hybrid/(EV) Battery Cell Balancing Circuit G Stuck Off"
          }, {
            "code": "P02B8-44",
            "type": "CM",
            "definition": "Cylinder 8 Balance - Injector Restricted - Data Memory Failure"
          }, {
            "code": "B110C-CA",
            "type": "CM",
            "definition": "Rear door driver side power child locking motor"
          }, {
            "code": "P1890-BC",
            "type": "CM|Current/MIL",
            "definition": "4-Wheel Drive Mode Select Return Input Circuit Failure"
          }, {
            "code": "P02F0-F7",
            "type": "CM|Not Current/MIL",
            "definition": "Cylinder 3 Injector Circuit Range/Performance"
          }, {
            "code": "P026D-F7",
            "type": "CM|Indeterminate/MIL",
            "definition": "Fuel Injection Quantity Higher Than Expected"
          }],
          "group": 255,
          "modulename": "RTM - Radio Transceiver Module"
        }, {
          "system": 106,
          "subsystem": 65535,
          "Dtcs": [{
            "code": "P0C37-91",
            "type": "CM|Failsafe/MIL",
            "definition": "Hybrid Battery Temperature Sensor F Circuit Intermittent/Erratic - Parametric"
          }, {
            "code": "U0493-CD",
            "type": "CM|Failsafe/MIL",
            "definition": "Invalid Data Received From Personal Computer"
          }, {
            "code": "P0DF3-0A",
            "type": "CM",
            "definition": "Generator Inverter Temperature Sensor C Circuit Intermittent/Erratic"
          }, {
            "code": "P0C66-75",
            "type": "CM|Current/MIL",
            "definition": "Generator Position Sensor Circuit A Low - Emergency Position Not Reachable"
          }, {
            "code": "P0146-DB",
            "type": "CM|Current/MIL",
            "definition": "(O2) Circuit No Activity Detected (Bank 1, Sensor 3)"
          }, {
            "code": "B13C6-E3",
            "type": "CM|Current/MIL",
            "definition": "Trunk Motor 2"
          }, {
            "code": "P2AD3-B3",
            "type": "CM|Current",
            "definition": "Throttle/Pedal Position Sensor/Switch A/G Voltage Correlation"
          }, {
            "code": "B1B33-09",
            "type": "CM|Current/MIL",
            "definition": "Target I.D. Transfer - Component Failures"
          }],
          "group": 255,
          "modulename": "SCCM - Steering Column Control Module"
        }, {
          "system": 125,
          "subsystem": 65535,
          "Dtcs": [{
            "code": "P0CE1-A0",
            "type": "CM|Current",
            "definition": "Hybrid/(EV) Battery Pack Coolant Control Valve A Stuck On"
          }, {
            "code": "C052B-FC",
            "type": "CM|Current",
            "definition": "(ABS) Pump Motor Control Range/Performance"
          }, {
            "code": "C0047-D3",
            "type": "CM|Current",
            "definition": "Brake Booster Pressure Sensor"
          }, {
            "code": "P00FE-1C",
            "type": "CM|Indeterminate/MIL",
            "definition": "EVAP System Tank Vapor Line Restricted/Blocked - Circuit Voltage Out Of Range"
          }, {
            "code": "P24E5-FE",
            "type": "CM",
            "definition": "(NH3) Sensor Circuit Intermittent/Erratic"
          }, {
            "code": "P2B5D-39",
            "type": "CM|Current/MIL",
            "definition": "Engine Coolant Pump Flow Control Valve Position Sensor Circuit - Incorrect Has Too Few Pulses"
          }],
          "group": 255,
          "modulename": "SCME - Seat Control Module E"
        }, {
          "system": 127,
          "subsystem": 65535,
          "Dtcs": [{
            "code": "P042A-6F",
            "type": "CM|Current",
            "definition": "Catalyst Temperature Sensor Circuit Bank 1, Sensor Circuit 2"
          }, {
            "code": "P1629-CC",
            "type": "CM",
            "definition": "Internal Voltage Regulator"
          }, {
            "code": "P26AF-C5",
            "type": "CM",
            "definition": "Engine Coolant Bypass Valve B Stuck"
          }, {
            "code": "P2466-D1",
            "type": "CM|Not Current",
            "definition": "Exhaust Gas Temperature Sensor Circuit - Bank 2 Sensor 3"
          }],
          "group": 255,
          "modulename": "SCMG - Seat Control Module G"
        }, {
          "system": 128,
          "subsystem": 65535,
          "Dtcs": [{
            "code": "P0C5A-B5",
            "type": "CM|Failsafe/MIL",
            "definition": "Drive Motor B Position Sensor Circuit A"
          }, {
            "code": "C1B07-F9",
            "type": "CM|Indeterminate",
            "definition": "Directional Control Valve 2"
          }, {
            "code": "P0A54-52",
            "type": "CM",
            "definition": "Drive Motor A Current Sensor Circuit High - Not Activated"
          }, {
            "code": "P21B6-07",
            "type": "CM|Current",
            "definition": "Cold Start Cylinder 1 Injection Timing - Mechanical Failures"
          }, {
            "code": "C056B-93",
            "type": "CM|Current",
            "definition": "Brake Pressure Sensor A Intermittent/Erratic - No Operation"
          }, {
            "code": "B1D00-9F",
            "type": "CM",
            "definition": "Lefthand Low Beam Circuit - Stuck Off"
          }],
          "group": 255,
          "modulename": "SCMH - Seat Control Module H"
        }, {
          "system": 96,
          "subsystem": 65535,
          "Dtcs": [{
            "code": "P0CCF-65",
            "type": "CM|Current/MIL",
            "definition": "Charge Port Door Position Sensor Circuit High - Signal Has Too Few Transitions/Events"
          }, {
            "code": "B101D-1D",
            "type": "CM|Current",
            "definition": "Seek Down Switch - Circuit Current Out Of Range"
          }, {
            "code": "P2110-25",
            "type": "CM|Current",
            "definition": "Throttle Actuator Control System - Forced Limited (RPM) - Signal Shape/Waveform Failure"
          }, {
            "code": "P0DFD-33",
            "type": "CM",
            "definition": "Battery Charger Coolant Control Valve Control Circuit Open - Signal Low Time Greater Than Maximum"
          }, {
            "code": "P26FE-06",
            "type": "CM|Current",
            "definition": "Exhaust Flow Control Valve A Control Performance - Algorithm Based Failures"
          }, {
            "code": "P2293-9B",
            "type": "CM",
            "definition": "Fuel Pressure Regulator 2 Performance - High/Excessive Flow"
          }, {
            "code": "B1588-49",
            "type": "CM",
            "definition": "Double Lock Output - Internal Electronic Failure"
          }, {
            "code": "P2640-45",
            "type": "CM",
            "definition": "Torque Management Feedback Signal A High - Program Memory Failure"
          }],
          "group": 128,
          "modulename": "SODL - Side Obstacle Detection Control Module - Left"
        }, {
          "system": 97,
          "subsystem": 65535,
          "Dtcs": [{
            "code": "P0B3C-FD",
            "type": "CM|Current/MIL",
            "definition": "Hybrid Battery Voltage Sense A Circuit Range/Performance"
          }, {
            "code": "P27D1-FB",
            "type": "CM|Current/MIL",
            "definition": "Pressure Control Solenoid S Performance/Stuck Off"
          }, {
            "code": "U1A44-9B",
            "type": "CM",
            "definition": "Fuel Level - High/Excessive Flow"
          }, {
            "code": "P1A10-0F",
            "type": "CM|Current",
            "definition": "Hybrid Powertrain Control Module - Battery Disabled"
          }, {
            "code": "P25CB-B6",
            "type": "CM",
            "definition": "Intake Camshaft Actuator Park Lock Control Circuit Low Bank 1"
          }],
          "group": 128,
          "modulename": "SODR - Side Obstacle Detection Control Module - Right"
        }, {
          "system": 116,
          "subsystem": 65535,
          "Dtcs": [{
            "code": "B0204-50",
            "type": "CM|Current"
          }, {
            "code": "U1961-00",
            "type": "CM"
          }, {
            "code": "P02FF-27",
            "type": "CM|Indeterminate/MIL",
            "definition": "Propulsion System Inactive Timer Performance - Signal Rate Of Change Above Threshold"
          }],
          "group": 255,
          "modulename": "TCU - Telematic Control Unit Module"
        }],
        "allSupportedModules": [{
          "System": 1,
          "SubSystem": 65535,
          "ModuleName": "PCM - Powertrain Control Module",
          "InnovaGroup": 16,
          "groupName": "PCM"
        }, {
          "System": 2,
          "SubSystem": 65535,
          "ModuleName": "ABS - Anti-Lock Brake / Traction Control Module",
          "InnovaGroup": 2,
          "groupName": "ABS"
        }, {
          "System": 31,
          "SubSystem": 65535,
          "ModuleName": "RCM - Restraint Control Module",
          "InnovaGroup": 4,
          "groupName": "SRS"
        }, {
          "System": 16,
          "SubSystem": 65535,
          "ModuleName": "ACM - Audio Control Module",
          "InnovaGroup": 255,
          "groupName": "All"
        }, {
          "System": 76,
          "SubSystem": 65535,
          "ModuleName": "APIM - Accessory Protocol Interface Module",
          "InnovaGroup": 255,
          "groupName": "All"
        }, {
          "System": 107,
          "SubSystem": 65535,
          "ModuleName": "ATCM - All Terrain Control Module",
          "InnovaGroup": 255,
          "groupName": "All"
        }, {
          "System": 102,
          "SubSystem": 65535,
          "ModuleName": "BdyCM - Body Control Module",
          "InnovaGroup": 64,
          "groupName": "TPMS"
        }, {
          "System": 157,
          "SubSystem": 65535,
          "ModuleName": "BECMB - Battery Energy Control Module B",
          "InnovaGroup": 255,
          "groupName": "All"
        }, {
          "System": 86,
          "SubSystem": 65535,
          "ModuleName": "C-CM - Cruise-Control Module",
          "InnovaGroup": 128,
          "groupName": "ADAS"
        }, {
          "System": 117,
          "SubSystem": 65535,
          "ModuleName": "DACMC - Digital Audio Control Module C",
          "InnovaGroup": 255,
          "groupName": "All"
        }, {
          "System": 5,
          "SubSystem": 65535,
          "ModuleName": "DDM - Drivers Door Module",
          "InnovaGroup": 255,
          "groupName": "All"
        }, {
          "System": 6,
          "SubSystem": 65535,
          "ModuleName": "DSM - Drivers Seat Module",
          "InnovaGroup": 255,
          "groupName": "All"
        }, {
          "System": 71,
          "SubSystem": 65535,
          "ModuleName": "DSP - (Audio) Digital Signal Processing Module",
          "InnovaGroup": 255,
          "groupName": "All"
        }, {
          "System": 103,
          "SubSystem": 65535,
          "ModuleName": "FCDIM - Front Control/Display Interface Module",
          "InnovaGroup": 255,
          "groupName": "All"
        }, {
          "System": 150,
          "SubSystem": 65535,
          "ModuleName": "FCIMB - Front Controls Interface Module B",
          "InnovaGroup": 255,
          "groupName": "All"
        }, {
          "System": 111,
          "SubSystem": 65535,
          "ModuleName": "GFM - Generic Function Module",
          "InnovaGroup": 255,
          "groupName": "All"
        }, {
          "System": 90,
          "SubSystem": 65535,
          "ModuleName": "GPSM - Global Positioning System Module",
          "InnovaGroup": 255,
          "groupName": "All"
        }, {
          "System": 112,
          "SubSystem": 65535,
          "ModuleName": "GWM - Gateway Module A",
          "InnovaGroup": 255,
          "groupName": "All"
        }, {
          "System": 44,
          "SubSystem": 65535,
          "ModuleName": "HCM - Headlamp Control Module",
          "InnovaGroup": 128,
          "groupName": "ADAS"
        }, {
          "System": 109,
          "SubSystem": 65535,
          "ModuleName": "HSWM - Heated Steering Wheel Module",
          "InnovaGroup": 255,
          "groupName": "All"
        }, {
          "System": 93,
          "SubSystem": 65535,
          "ModuleName": "HUD - Head Up Display",
          "InnovaGroup": 128,
          "groupName": "ADAS"
        }, {
          "System": 75,
          "SubSystem": 65535,
          "ModuleName": "HVAC - Heating Ventilation Air Conditioning",
          "InnovaGroup": 255,
          "groupName": "All"
        }, {
          "System": 84,
          "SubSystem": 65535,
          "ModuleName": "IPC - Instrument Panel Control Module",
          "InnovaGroup": 64,
          "groupName": "TPMS"
        }, {
          "System": 121,
          "SubSystem": 65535,
          "ModuleName": "IPMA - Image Processing Module A",
          "InnovaGroup": 128,
          "groupName": "ADAS"
        }, {
          "System": 113,
          "SubSystem": 65535,
          "ModuleName": "IPMB - Image Processing Module B",
          "InnovaGroup": 128,
          "groupName": "ADAS"
        }, {
          "System": 63,
          "SubSystem": 65535,
          "ModuleName": "OCS - Occupant Classification System Module",
          "InnovaGroup": 255,
          "groupName": "All"
        }, {
          "System": 28,
          "SubSystem": 65535,
          "ModuleName": "PAM - Parking Aid Module",
          "InnovaGroup": 255,
          "groupName": "All"
        }, {
          "System": 114,
          "SubSystem": 65535,
          "ModuleName": "PDM - Passenger Front Door Module",
          "InnovaGroup": 255,
          "groupName": "All"
        }, {
          "System": 80,
          "SubSystem": 65535,
          "ModuleName": "PSCM - Power Steering Control Module",
          "InnovaGroup": 255,
          "groupName": "All"
        }, {
          "System": 118,
          "SubSystem": 65535,
          "ModuleName": "RGTM - Rear Gate/Trunk Module",
          "InnovaGroup": 255,
          "groupName": "All"
        }, {
          "System": 101,
          "SubSystem": 65535,
          "ModuleName": "RHVAC - Rear Heating Ventilation Air Conditioning",
          "InnovaGroup": 255,
          "groupName": "All"
        }, {
          "System": 122,
          "SubSystem": 65535,
          "ModuleName": "RTM - Radio Transceiver Module",
          "InnovaGroup": 255,
          "groupName": "All"
        }, {
          "System": 106,
          "SubSystem": 65535,
          "ModuleName": "SCCM - Steering Column Control Module",
          "InnovaGroup": 255,
          "groupName": "All"
        }, {
          "System": 125,
          "SubSystem": 65535,
          "ModuleName": "SCME - Seat Control Module E",
          "InnovaGroup": 255,
          "groupName": "All"
        }, {
          "System": 127,
          "SubSystem": 65535,
          "ModuleName": "SCMG - Seat Control Module G",
          "InnovaGroup": 255,
          "groupName": "All"
        }, {
          "System": 128,
          "SubSystem": 65535,
          "ModuleName": "SCMH - Seat Control Module H",
          "InnovaGroup": 255,
          "groupName": "All"
        }, {
          "System": 96,
          "SubSystem": 65535,
          "ModuleName": "SODL - Side Obstacle Detection Control Module - Left",
          "InnovaGroup": 128,
          "groupName": "ADAS"
        }, {
          "System": 97,
          "SubSystem": 65535,
          "ModuleName": "SODR - Side Obstacle Detection Control Module - Right",
          "InnovaGroup": 128,
          "groupName": "ADAS"
        }, {
          "System": 116,
          "SubSystem": 65535,
          "ModuleName": "TCU - Telematic Control Unit Module",
          "InnovaGroup": 255,
          "groupName": "All"
        }],
        "mileage": 39999,
        "batteryVoltage": 11.72,
        "warningLightStatus": "OFF",
        "tirePressures": [{
          "id": 1168,
          "name": "Left Rear Tire Pressure Standard",
          "value": "34.00",
          "unit": "psi"
        }, {
          "id": 1073,
          "name": "Right Front Tire Pressure",
          "value": "33.35",
          "unit": "psi"
        }, {
          "id": 1167,
          "name": "Right Front Tire Pressure Standard",
          "value": "34.00",
          "unit": "psi"
        }, {
          "id": 1071,
          "name": "Left Front Tire Pressure",
          "value": "29.00",
          "unit": "psi"
        }, {
          "id": 1072,
          "name": "Left Rear Tire Pressure",
          "value": "30.45",
          "unit": "psi"
        }, {
          "id": 1166,
          "name": "Left Front Tire Pressure Standard",
          "value": "34.00",
          "unit": "psi"
        }, {
          "id": 1074,
          "name": "Right Rear Tire Pressure",
          "value": "24.65",
          "unit": "psi"
        }, {
          "id": 1169,
          "name": "Right Rear Tire Pressure Standard",
          "value": "34.00",
          "unit": "psi"
        }, {
          "id": 1099,
          "name": "Left Front Tire Pressure Status",
          "value": "OK",
          "unit": "null"
        }, {
          "id": 1100,
          "name": "Left Rear Tire Pressure Status",
          "value": "OK",
          "unit": "null"
        }, {
          "id": 1101,
          "name": "Right Front Tire Pressure Status",
          "value": "OK",
          "unit": "null"
        }, {
          "id": 1102,
          "name": "Right Rear Tire Pressure Status",
          "value": "Low",
          "unit": "null"
        }],
        "oilLevel": "No",
        "oilLife": "86.00",
        "brakePadLife": "OFF"
      };
      _AppFakeData.ReportRes = {
        "reportId": "455be352-c5ce-4124-b525-15583d968f81",
        "reportNumber": 21600,
        "reportType": 2,
        "createdDateTime": "02/06/2020 03:24 AM",
        "scanningType": 2,
        "retailer": "",
        "ledStatus": 3,
        "vehicle": {
          "vehicleId": "1a86add1-a229-4203-974c-83e76a31e3ad",
          "vin": "1FM5K8HT4JGA75690",
          "make": "FORD",
          "year": 2018,
          "model": "EXPLORER",
          "engineType": "V6, 3.5L; DOHC; 24V; DI; Turbo",
          "transmission": "STANDARD",
          "mileage": 152,
          "nickName": "2018 FORD EXPLORER V6, 3.5L; DOHC; 24V; DI; Turbo",
          "manufacturer": "",
          "isActive": true
        },
        "customerInfo": {
          "firstName": "",
          "lastName": "",
          "phone": "",
          "email": "",
          "updatedDateTime": "02/06/2020 03:24 AM"
        },
        "additionalInfo": {
          "caliDs": ["JZBR3AZ.H32"],
          "cvNs": ["D4 01 D4 8A"],
          "ipTs": [{
            "value": 516,
            "name": "ObdCond"
          }, {
            "value": 1717,
            "name": "IngCntr"
          }, {
            "value": 572,
            "name": "CatComP1"
          }, {
            "value": 516,
            "name": "CatConD1"
          }, {
            "value": 0,
            "name": "CatComP2"
          }, {
            "value": 0,
            "name": "CatConD2"
          }, {
            "value": 680,
            "name": "O2SComP1"
          }, {
            "value": 516,
            "name": "O2SConD1"
          }, {
            "value": 0,
            "name": "O2SComP2"
          }, {
            "value": 0,
            "name": "O2SConD2"
          }, {
            "value": 697,
            "name": "EgrComp"
          }, {
            "value": 516,
            "name": "EgrCond"
          }, {
            "value": 0,
            "name": "AirComp"
          }, {
            "value": 0,
            "name": "AirCond"
          }, {
            "value": 181,
            "name": "EvaComp"
          }, {
            "value": 70,
            "name": "EvaCond"
          }, {
            "value": 580,
            "name": "SO2SComP1"
          }, {
            "value": 516,
            "name": "SO2SConD1"
          }, {
            "value": 0,
            "name": "SO2SComP2"
          }, {
            "value": 0,
            "name": "SO2SConD2"
          }]
        },
        "overview": {
          "numberOfFailedModules": 1,
          "numberOfPassedModules": 2,
          "numberOfMaintenances": 28,
          "nextMileage": 10000,
          "numberOfPredictedFailures": 3,
          "numberOfRecalls": 1,
          "numberOfTSBs": 123,
          "ledStatus": 3,
          "batteryLife": null,
          "oilLife": null,
          "brakePadLife": null,
          "oilLevel": "",
          "coolantLevel": "",
          "warrantyStatus": "",
          "tirePressure": {
            "leftFrontTirePressure": null,
            "leftRearTirePressure": null,
            "rightFrontTirePressure": null,
            "rightRearTirePressure": null,
            "spareTirePressure": null
          }
        },
        "monitors": [{
          "name": "Misfire",
          "shortName": "mis",
          "description": "This Monitor continuously checks for engine misfires. A misfire occurs when the air-fuel mixture in the cylinder does not ignite.",
          "status": 3
        }, {
          "name": "Fuel System",
          "shortName": "fue",
          "description": "This Monitor uses a Fuel System Correction program, called Fuel Trim, inside the on-board computer.",
          "status": 3
        }, {
          "name": "comprehensive component",
          "shortName": "ccm",
          "description": "This Monitor continuously checks all inputs and outputs from sensors, actuators, switches and other devices that provide a signal to the computer.",
          "status": 3
        }, {
          "name": "NMHC Catalyst",
          "shortName": "nm",
          "description": "The non-methane hydrocarbon catalyst is a type of catalytic converter. It helps to remove non-methane hydrocarbons (NMH) left over from the combustion process from the exhaust stream. To accomplish this, heat and catalyst materials react with the exhaust gases to convert NMH to less harmful compounds.",
          "status": 1
        }, {
          "name": "NOx/SCR Monitor",
          "shortName": "N",
          "description": "NOx Aftertreatment is designed to reduce oxides of nitrogen emitted in the exhaust stream.",
          "status": 1
        }, {
          "name": "Boost Pressure",
          "shortName": "bp",
          "description": "The boost pressure system serves to increase the pressure produced inside the intake manifold to a level greater than atmospheric pressure.",
          "status": 1
        }, {
          "name": "Exhaust Gas Sensor",
          "shortName": "eg",
          "description": "The exhaust gas sensor is used by a number of systems/monitors to determine the content of the exhaust stream.",
          "status": 1
        }, {
          "name": "PM filter monitoring",
          "shortName": "p",
          "description": "The particulate matter (PM) filter removes particulate matter from the exhaust stream by filtration.",
          "status": 1
        }, {
          "name": "EGR System",
          "shortName": "egr",
          "description": "The Exhaust Gas Recirculation (EGR) system helps reduce the formation of Oxides of Nitrogen during combustion.",
          "status": 1
        }, {
          "name": "Catalyst",
          "shortName": "cat",
          "description": "The catalytic converter is a device that is installed downstream of the exhaust manifold. It helps to oxidize (burn) the unburned fuel (hydrocarbons) and partially burned fuel (carbon monoxide) left over from the combustion process.",
          "status": 3
        }, {
          "name": "Heated Catalyst",
          "shortName": "hca",
          "description": "The “heated” catalyst converter is added to bring the catalytic converter to its operating temperature more quickly.",
          "status": 1
        }, {
          "name": "Evaporative System",
          "shortName": "eva",
          "description": "System that helps prevent fuel vapors from evaporating into the air.",
          "status": 1
        }, {
          "name": "Secondary Air System",
          "shortName": "air",
          "description": "A Secondary Air System injects air into the exhaust stream to aid catalytic converter operation.",
          "status": 1
        }, {
          "name": "Oxygen Sensor",
          "shortName": "o2s",
          "description": "The Oxygen Sensor monitors how much oxygen is in the vehicle's exhaust.",
          "status": 1
        }, {
          "name": "Oxygen Sensor Heater",
          "shortName": "htr",
          "description": "The Oxygen Sensor Heater Monitor tests the operation of the oxygen sensor's heater.",
          "status": 1
        }],
        "driveCycles": [{
          "id": 14,
          "name": "Misfire Monitor",
          "value": "Complete",
          "status": 3,
          "option": "",
          "note": "",
          "condition": "1. Pre-Conditioning Requirements:<br/>  A. Cold soaks the vehicle for 8 hours.<br/>  B. No DTCs present.<br/>  C. Fuel Fills between 15% and 85 %.",
          "procedure": "1. Pre-Conditioning Requirements:<br/> A. Cold soak the vehicle for 8 hours.<br/> B. No DTCs present.<br/> C. Fuel fill between 15% and 85 %.<br/>2. Driving Procedure.<br/> A. Start the vehicle and idle for four (4) minutes.<br/> B. Idle the vehicle in drive for 40 seconds (neutral for M/T).<br/> C. Accelerate to 45 mph, using ¼ to ½ throttle (M/T stay in second gear for at least 5 seconds). Accelerate for at least 10 seconds and shift through to 5th gear.<br/> D. Drive with a steady throttle at 45 mph for 30 seconds.<br/> E. Stop the vehicle and idle in drive or neutral for 40 seconds.<br/> F. Drive at speeds between 25 mph and 45 mph for 15 minutes.<br/> Note: Use 25% to 50% throttle accelerations. Include the following conditions:<br/> a. At least 5 stops with ten seconds of idle time.<br/> b. At least 3 steady speed sections of 1 ½ minutes duration.<br/> G. Drive the vehicle between 45 mph and 60 mph for 8 minutes (use high gear).<br/> H. Keep a steady speed between 45 mph and 60 mph for 5 minutes.<br/> I. Drive the vehicle between 45 mph and 60 mph for 8 minutes (use high gear).<br/> J. Stop vehicle, idle for 40 seconds."
        }, {
          "id": 10,
          "name": "Fuel System Monitor",
          "value": "Complete",
          "status": 3,
          "option": "",
          "note": "",
          "condition": "1. Pre-Conditioning Requirements:<br/>  A. Cold soaks the vehicle for 8 hours.<br/>  B. No DTCs present.<br/>  C. Fuel Fills between 15% and 85 %.",
          "procedure": "1. Pre-Conditioning Requirements:<br/> A. Cold soak the vehicle for 8 hours.<br/> B. No DTCs present.<br/> C. Fuel fill between 15% and 85 %.<br/>2. Driving Procedure.<br/> A. Start the vehicle and idle for four (4) minutes.<br/> B. Idle the vehicle in drive for 40 seconds (neutral for M/T).<br/> C. Accelerate to 45 mph, using ¼ to ½ throttle (M/T stay in second gear for at least 5 seconds). Accelerate for at least 10 seconds and shift through to 5th gear.<br/> D. Drive with a steady throttle at 45 mph for 30 seconds.<br/> E. Stop the vehicle and idle in drive or neutral for 40 seconds.<br/> F. Drive at speeds between 25 mph and 45 mph for 15 minutes.<br/> Note: Use 25% to 50% throttle accelerations. Include the following conditions:<br/> a. At least 5 stops with ten seconds of idle time.<br/> b. At least 3 steady speed sections of 1 ½ minutes duration.<br/> G. Drive the vehicle between 45 mph and 60 mph for 8 minutes (use high gear).<br/> H. Keep a steady speed between 45 mph and 60 mph for 5 minutes.<br/> I. Drive the vehicle between 45 mph and 60 mph for 8 minutes (use high gear).<br/> J. Stop vehicle, idle for 40 seconds."
        }, {
          "id": 4,
          "name": "Comprehensive Component Monitor (CCM)",
          "value": "Complete",
          "status": 3,
          "option": "",
          "note": "",
          "condition": "1. Pre-Conditioning Requirements:<br/>  A. Cold soaks the vehicle for 8 hours.<br/>  B. No DTCs present.<br/>  C. Fuel Fills between 15% and 85 %.",
          "procedure": "1. Pre-Conditioning Requirements:<br/> A. Cold soak the vehicle for 8 hours.<br/> B. No DTCs present.<br/> C. Fuel fill between 15% and 85 %.<br/>2. Driving Procedure.<br/> A. Start the vehicle and idle for four (4) minutes.<br/> B. Idle the vehicle in drive for 40 seconds (neutral for M/T).<br/> C. Accelerate to 45 mph, using ¼ to ½ throttle (M/T stay in second gear for at least 5 seconds). Accelerate for at least 10 seconds and shift through to 5th gear.<br/> D. Drive with a steady throttle at 45 mph for 30 seconds.<br/> E. Stop the vehicle and idle in drive or neutral for 40 seconds.<br/> F. Drive at speeds between 25 mph and 45 mph for 15 minutes.<br/> Note: Use 25% to 50% throttle accelerations. Include the following conditions:<br/> a. At least 5 stops with ten seconds of idle time.<br/> b. At least 3 steady speed sections of 1 ½ minutes duration.<br/> G. Drive the vehicle between 45 mph and 60 mph for 8 minutes (use high gear).<br/> H. Keep a steady speed between 45 mph and 60 mph for 5 minutes.<br/> I. Drive the vehicle between 45 mph and 60 mph for 8 minutes (use high gear).<br/> J. Stop vehicle, idle for 40 seconds."
        }, {
          "id": 3,
          "name": "Catalyst Monitor",
          "value": "Complete",
          "status": 3,
          "option": "",
          "note": "",
          "condition": "1. Pre-Conditioning Requirements:<br/>  A. Cold soaks the vehicle for 8 hours.<br/>  B. No DTCs present.<br/>  C. Fuel Fills between 15% and 85 %.",
          "procedure": "1. Pre-Conditioning Requirements:<br/> A. Cold soak the vehicle for 8 hours.<br/> B. No DTCs present.<br/> C. Fuel fill between 15% and 85 %.<br/>2. Driving Procedure.<br/> A. Start the vehicle and idle for four (4) minutes.<br/> B. Idle the vehicle in drive for 40 seconds (neutral for M/T).<br/> C. Accelerate to 45 mph, using ¼ to ½ throttle (M/T stay in second gear for at least 5 seconds). Accelerate for at least 10 seconds and shift through to 5th gear.<br/> D. Drive with a steady throttle at 45 mph for 30 seconds.<br/> E. Stop the vehicle and idle in drive or neutral for 40 seconds.<br/> F. Drive at speeds between 25 mph and 45 mph for 15 minutes.<br/> Note: Use 25% to 50% throttle accelerations. Include the following conditions:<br/> a. At least 5 stops with ten seconds of idle time.<br/> b. At least 3 steady speed sections of 1 ½ minutes duration.<br/> G. Drive the vehicle between 45 mph and 60 mph for 8 minutes (use high gear).<br/> H. Keep a steady speed between 45 mph and 60 mph for 5 minutes.<br/> I. Drive the vehicle between 45 mph and 60 mph for 8 minutes (use high gear).<br/> J. Stop vehicle, idle for 40 seconds."
        }, {
          "id": 7,
          "name": "EGR System Monitor",
          "value": "Incomplete",
          "status": 2,
          "option": "",
          "note": "",
          "condition": "1. Pre-Conditioning Requirements:<br/>  A. Cold soaks the vehicle for 8 hours.<br/>  B. No DTCs present.<br/>  C. Fuel Fills between 15% and 85 %.",
          "procedure": "1. Pre-Conditioning Requirements:<br/> A. Cold soak the vehicle for 8 hours.<br/> B. No DTCs present.<br/> C. Fuel fill between 15% and 85 %.<br/>2. Driving Procedure.<br/> A. Start the vehicle and idle for four (4) minutes.<br/> B. Idle the vehicle in drive for 40 seconds (neutral for M/T).<br/> C. Accelerate to 45 mph, using ¼ to ½ throttle (M/T stay in second gear for at least 5 seconds). Accelerate for at least 10 seconds and shift through to 5th gear.<br/> D. Drive with a steady throttle at 45 mph for 30 seconds.<br/> E. Stop the vehicle and idle in drive or neutral for 40 seconds.<br/> F. Drive at speeds between 25 mph and 45 mph for 15 minutes.<br/> Note: Use 25% to 50% throttle accelerations. Include the following conditions:<br/> a. At least 5 stops with ten seconds of idle time.<br/> b. At least 3 steady speed sections of 1 ½ minutes duration.<br/> G. Drive the vehicle between 45 mph and 60 mph for 8 minutes (use high gear).<br/> H. Keep a steady speed between 45 mph and 60 mph for 5 minutes.<br/> I. Drive the vehicle between 45 mph and 60 mph for 8 minutes (use high gear).<br/> J. Stop vehicle, idle for 40 seconds."
        }, {
          "id": 11,
          "name": "Heated Catalyst Monitor",
          "value": "Incomplete",
          "status": 2,
          "option": "",
          "note": "",
          "condition": "1. Pre-Conditioning Requirements:<br/>  A. Cold soaks the vehicle for 8 hours.<br/>  B. No DTCs present.<br/>  C. Fuel Fills between 15% and 85 %.",
          "procedure": "1. Pre-Conditioning Requirements:<br/> A. Cold soak the vehicle for 8 hours.<br/> B. No DTCs present.<br/> C. Fuel fill between 15% and 85 %.<br/>2. Driving Procedure.<br/> A. Start the vehicle and idle for four (4) minutes.<br/> B. Idle the vehicle in drive for 40 seconds (neutral for M/T).<br/> C. Accelerate to 45 mph, using ¼ to ½ throttle (M/T stay in second gear for at least 5 seconds). Accelerate for at least 10 seconds and shift through to 5th gear.<br/> D. Drive with a steady throttle at 45 mph for 30 seconds.<br/> E. Stop the vehicle and idle in drive or neutral for 40 seconds.<br/> F. Drive at speeds between 25 mph and 45 mph for 15 minutes.<br/> Note: Use 25% to 50% throttle accelerations. Include the following conditions:<br/> a. At least 5 stops with ten seconds of idle time.<br/> b. At least 3 steady speed sections of 1 ½ minutes duration.<br/> G. Drive the vehicle between 45 mph and 60 mph for 8 minutes (use high gear).<br/> H. Keep a steady speed between 45 mph and 60 mph for 5 minutes.<br/> I. Drive the vehicle between 45 mph and 60 mph for 8 minutes (use high gear).<br/> J. Stop vehicle, idle for 40 seconds."
        }, {
          "id": 9,
          "name": "EVAP System Monitor",
          "value": "Incomplete",
          "status": 2,
          "option": "",
          "note": "",
          "condition": "1. Pre-Conditioning Requirements:<br/>  A. Cold soaks the vehicle for 8 hours.<br/>  B. No DTCs present.<br/>  C. Fuel Fills between 15% and 85 %.",
          "procedure": "1. Pre-Conditioning Requirements:<br/> A. Cold soak the vehicle for 8 hours.<br/> B. No DTCs present.<br/> C. Fuel fill between 15% and 85 %.<br/>2. Driving Procedure.<br/> A. Start the vehicle and idle for four (4) minutes.<br/> B. Idle the vehicle in drive for 40 seconds (neutral for M/T).<br/> C. Accelerate to 45 mph, using ¼ to ½ throttle (M/T stay in second gear for at least 5 seconds). Accelerate for at least 10 seconds and shift through to 5th gear.<br/> D. Drive with a steady throttle at 45 mph for 30 seconds.<br/> E. Stop the vehicle and idle in drive or neutral for 40 seconds.<br/> F. Drive at speeds between 25 mph and 45 mph for 15 minutes.<br/> Note: Use 25% to 50% throttle accelerations. Include the following conditions:<br/> a. At least 5 stops with ten seconds of idle time.<br/> b. At least 3 steady speed sections of 1 ½ minutes duration.<br/> G. Drive the vehicle between 45 mph and 60 mph for 8 minutes (use high gear).<br/> H. Keep a steady speed between 45 mph and 60 mph for 5 minutes.<br/> I. Drive the vehicle between 45 mph and 60 mph for 8 minutes (use high gear).<br/> J. Stop vehicle, idle for 40 seconds."
        }, {
          "id": 1,
          "name": "Secondary Air System Monitor",
          "value": "Incomplete",
          "status": 2,
          "option": "",
          "note": "",
          "condition": "1. Pre-Conditioning Requirements:<br/>  A. Cold soaks the vehicle for 8 hours.<br/>  B. No DTCs present.<br/>  C. Fuel Fills between 15% and 85 %.",
          "procedure": "1. Pre-Conditioning Requirements:<br/> A. Cold soak the vehicle for 8 hours.<br/> B. No DTCs present.<br/> C. Fuel fill between 15% and 85 %.<br/>2. Driving Procedure.<br/> A. Start the vehicle and idle for four (4) minutes.<br/> B. Idle the vehicle in drive for 40 seconds (neutral for M/T).<br/> C. Accelerate to 45 mph, using ¼ to ½ throttle (M/T stay in second gear for at least 5 seconds). Accelerate for at least 10 seconds and shift through to 5th gear.<br/> D. Drive with a steady throttle at 45 mph for 30 seconds.<br/> E. Stop the vehicle and idle in drive or neutral for 40 seconds.<br/> F. Drive at speeds between 25 mph and 45 mph for 15 minutes.<br/> Note: Use 25% to 50% throttle accelerations. Include the following conditions:<br/> a. At least 5 stops with ten seconds of idle time.<br/> b. At least 3 steady speed sections of 1 ½ minutes duration.<br/> G. Drive the vehicle between 45 mph and 60 mph for 8 minutes (use high gear).<br/> H. Keep a steady speed between 45 mph and 60 mph for 5 minutes.<br/> I. Drive the vehicle between 45 mph and 60 mph for 8 minutes (use high gear).<br/> J. Stop vehicle, idle for 40 seconds."
        }, {
          "id": 16,
          "name": "Oxygen Sensor Monitor",
          "value": "Incomplete",
          "status": 2,
          "option": "",
          "note": "",
          "condition": "1. Pre-Conditioning Requirements:<br/>  A. Cold soaks the vehicle for 8 hours.<br/>  B. No DTCs present.<br/>  C. Fuel Fills between 15% and 85 %.",
          "procedure": "1. Pre-Conditioning Requirements:<br/> A. Cold soak the vehicle for 8 hours.<br/> B. No DTCs present.<br/> C. Fuel fill between 15% and 85 %.<br/>2. Driving Procedure.<br/> A. Start the vehicle and idle for four (4) minutes.<br/> B. Idle the vehicle in drive for 40 seconds (neutral for M/T).<br/> C. Accelerate to 45 mph, using ¼ to ½ throttle (M/T stay in second gear for at least 5 seconds). Accelerate for at least 10 seconds and shift through to 5th gear.<br/> D. Drive with a steady throttle at 45 mph for 30 seconds.<br/> E. Stop the vehicle and idle in drive or neutral for 40 seconds.<br/> F. Drive at speeds between 25 mph and 45 mph for 15 minutes.<br/> Note: Use 25% to 50% throttle accelerations. Include the following conditions:<br/> a. At least 5 stops with ten seconds of idle time.<br/> b. At least 3 steady speed sections of 1 ½ minutes duration.<br/> G. Drive the vehicle between 45 mph and 60 mph for 8 minutes (use high gear).<br/> H. Keep a steady speed between 45 mph and 60 mph for 5 minutes.<br/> I. Drive the vehicle between 45 mph and 60 mph for 8 minutes (use high gear).<br/> J. Stop vehicle, idle for 40 seconds."
        }, {
          "id": 13,
          "name": "Oxygen Sensor Heater Monitor",
          "value": "Incomplete",
          "status": 2,
          "option": "",
          "note": "",
          "condition": "1. Pre-Conditioning Requirements:<br/>  A. Cold soaks the vehicle for 8 hours.<br/>  B. No DTCs present.<br/>  C. Fuel Fills between 15% and 85 %.",
          "procedure": "1. Pre-Conditioning Requirements:<br/> A. Cold soak the vehicle for 8 hours.<br/> B. No DTCs present.<br/> C. Fuel fill between 15% and 85 %.<br/>2. Driving Procedure.<br/> A. Start the vehicle and idle for four (4) minutes.<br/> B. Idle the vehicle in drive for 40 seconds (neutral for M/T).<br/> C. Accelerate to 45 mph, using ¼ to ½ throttle (M/T stay in second gear for at least 5 seconds). Accelerate for at least 10 seconds and shift through to 5th gear.<br/> D. Drive with a steady throttle at 45 mph for 30 seconds.<br/> E. Stop the vehicle and idle in drive or neutral for 40 seconds.<br/> F. Drive at speeds between 25 mph and 45 mph for 15 minutes.<br/> Note: Use 25% to 50% throttle accelerations. Include the following conditions:<br/> a. At least 5 stops with ten seconds of idle time.<br/> b. At least 3 steady speed sections of 1 ½ minutes duration.<br/> G. Drive the vehicle between 45 mph and 60 mph for 8 minutes (use high gear).<br/> H. Keep a steady speed between 45 mph and 60 mph for 5 minutes.<br/> I. Drive the vehicle between 45 mph and 60 mph for 8 minutes (use high gear).<br/> J. Stop vehicle, idle for 40 seconds."
        }],
        "freezeFrames": [{
          "pid": "Pid03",
          "code": "Fuel Sys 1",
          "name": "Fuel System 1 Status 1",
          "value": "OL  "
        }, {
          "pid": "Pid03",
          "code": "Fuel Sys 2",
          "name": "Fuel System 2 Status 2",
          "value": "N/A  "
        }, {
          "pid": "Pid04",
          "code": "Calc Load",
          "name": "Calculated LOAD Value",
          "value": "0.0 %"
        }, {
          "pid": "Pid05",
          "code": "ECT",
          "name": "Engine Coolant Temp",
          "value": "-0 °F"
        }, {
          "pid": "Pid06",
          "code": "STFT B1",
          "name": "Short Term Fuel Trim - Bank 1",
          "value": "0.0 %"
        }, {
          "pid": "Pid07",
          "code": "LTFT B1",
          "name": "Long Term Fuel Trim - Bank 1",
          "value": "0.0 %"
        }, {
          "pid": "Pid0B",
          "code": "MAP",
          "name": "Intake Manifold Absolute Pressure",
          "value": "36 inHg"
        }, {
          "pid": "Pid0C",
          "code": "Eng RPM",
          "name": "Engine RPM",
          "value": "0  "
        }, {
          "pid": "Pid0D",
          "code": "Veh Speed",
          "name": "Vehicle Speed Sensor",
          "value": "0 mph"
        }, {
          "pid": "Pid0E",
          "code": "Spark Adv",
          "name": "Ignition Timing Advance #1 Cylinder",
          "value": "10.0 °"
        }, {
          "pid": "Pid0F",
          "code": "IAT",
          "name": "Intake Air Temperature",
          "value": "-40 °F"
        }, {
          "pid": "Pid10",
          "code": "MAF",
          "name": "Air Flow Rate from Mass Air Flow Sensor",
          "value": "0.00 (lb/min) hours, minutes"
        }, {
          "pid": "Pid11",
          "code": "TPS",
          "name": "Absolute Throttle Position",
          "value": "98.4 %"
        }, {
          "pid": "Pid15",
          "code": "O2S B1 S2",
          "name": "Oxygen Sensor Output Voltage Bank 1 - Sensor 2",
          "value": "1.275 V"
        }, {
          "pid": "Pid15",
          "code": "STFT B1 S2",
          "name": "Short Term Fuel Trim Bank 1 - Sensor 2",
          "value": "99.2 %"
        }, {
          "pid": "Pid1F",
          "code": "Run Time",
          "name": "Time Since Engine Start",
          "value": "0 sec"
        }, {
          "pid": "Pid2C",
          "code": "Command EGR",
          "name": "Commanded EGR",
          "value": "0.0 %"
        }, {
          "pid": "Pid2E",
          "code": "Command EVAP",
          "name": "Commanded Evaporative Purge",
          "value": "0.0 %"
        }, {
          "pid": "Pid2F",
          "code": "Fuel Level",
          "name": "Fuel Level Input",
          "value": "0.0 %"
        }, {
          "pid": "Pid30",
          "code": "Warm-up DTC Clr",
          "name": "Number of warm-ups since diagnostic trouble codes cleared",
          "value": "0  "
        }, {
          "pid": "Pid31",
          "code": "Clr Dist",
          "name": "Distance since diagnostic trouble codes cleared",
          "value": "0 miles"
        }, {
          "pid": "Pid32",
          "code": "EVAP_VP",
          "name": "Evap System Vapour Pressure",
          "value": "0.0 InH2O"
        }, {
          "pid": "Pid33",
          "code": "BARO",
          "name": "Barometric Pressure",
          "value": "27 inHg"
        }, {
          "pid": "",
          "code": "",
          "name": "LAMBDA B1 S1",
          "value": "0.000  "
        }, {
          "pid": "Pid14",
          "code": "O2S B1 S1",
          "name": "Oxygen Sensor Output Voltage Bank 1 - Sensor 1",
          "value": "0.00 mA"
        }, {
          "pid": "Pid3C",
          "code": "CAT Te 11",
          "name": "Catalyst Temperature Bank 1 Sensor 1",
          "value": "-0 °F"
        }, {
          "pid": "Pid42",
          "code": "ECU Volts",
          "name": "Control module voltage",
          "value": "11.143 V"
        }, {
          "pid": "Pid43",
          "code": "LOAD Value",
          "name": "Absolute Load Value",
          "value": "0.0 %"
        }, {
          "pid": "Pid44",
          "code": "EQ Ratio",
          "name": "Commanded Equivalence Ratio",
          "value": "1.049  "
        }, {
          "pid": "Pid45",
          "code": "Rel TPS",
          "name": "Relative Throttle Position",
          "value": "86.3 %"
        }, {
          "pid": "Pid46",
          "code": "Ambient",
          "name": "Ambient air temperature (same scaling as IAT - $0F)",
          "value": "-0 °F"
        }, {
          "pid": "Pid47",
          "code": "TPS B",
          "name": "Absolute Throttle Position B",
          "value": "99.2 %"
        }, {
          "pid": "Pid49",
          "code": "ACC Pedal D",
          "name": "Absolute Throttle Position D",
          "value": "0.0 %"
        }, {
          "pid": "Pid4A",
          "code": "ACC Pedal E",
          "name": "Absolute Throttle Position E",
          "value": "0.4 %"
        }, {
          "pid": "Pid4C",
          "code": "Command TAC",
          "name": "Commanded Throttle Actuator Control",
          "value": "9.4 %"
        }],
        "message": {
          "code": 0,
          "description": "OK"
        }
      };
      _AppFakeData.DiagnosticsModules = [{
        "System": 1,
        "SubSystem": 12,
        "ModuleName": "ECM - Engine Control Module",
        "InnovaGroup": 16,
        "groupName": "PCM",
        "displayName": "ECM | Engine Control Module",
        "shortName": "ECM"
      }, {
        "System": 1,
        "SubSystem": 13,
        "ModuleName": "TCM - Transmission Control Module",
        "InnovaGroup": 8,
        "groupName": "TCM",
        "displayName": "TCM | Transmission Control Module",
        "shortName": "TCM"
      }, {
        "System": 2,
        "SubSystem": 11,
        "ModuleName": "EBCM - Electronic Brake Control Module",
        "InnovaGroup": 2,
        "groupName": "ABS",
        "displayName": "ABS | Antilock Braking System",
        "shortName": "ABS"
      }, {
        "System": 3,
        "SubSystem": 174,
        "ModuleName": "IRSDM - Inflatable Restraint Sensing And Diagnostic Module",
        "InnovaGroup": 4,
        "groupName": "SRS",
        "displayName": "SRS | Supplemental Restraint System",
        "shortName": "SRS"
      }];
      _AppFakeData.DiagnosticsModuleECM = {
        "System": 1,
        "SubSystem": 12,
        "ModuleName": "ECM - Engine Control Module",
        "InnovaGroup": 16,
        "groupName": "PCM",
        "displayName": "ECM | Engine Control Module",
        "shortName": "ECM",
        "Dtcs": [{
          "code": "P1B30-17",
          "type": "MIL|History|FSC|Current",
          "definition": "Hybrid/EV Battery Pack Temperature Measurement System Performance - Expected Temperature Change Not Detected - Performance - Signal Shape/Waveform Failure"
        }, {
          "code": "P1E1B-3C",
          "type": "MIL|Current",
          "definition": "Auxiliary Transmission Fluid Pump Control Module Hybrid/EV Battery Voltage Isolation Sensing Performance - Internal Communication Malfunction"
        }, {
          "code": "U183B-1A",
          "type": "MIL|History|FSC|Current",
          "definition": "Auxiliary Transmission Fluid Pump Control Module Lost Communication With Transmission Control Module - Performance - Bias Level Out Of Range"
        }, {
          "code": "P2101-00",
          "type": "History",
          "definition": "Throttle Actuator Position Performance"
        }]
      };
      _AppFakeData.ObdS5TestResult = {
        "O2SB1S1": [["Low V for Switch", "0.295 (V)", "N/A", "N/A"], ["High V for Switch", "0.595 (V)", "N/A", "N/A"], ["Rich to Ln Time", "0.000 (S)", "N/A", "N/A"], ["Ln to Rich Time", "0.000 (S)", "N/A", "N/A"]],
        "O2SB2S1": [["Low V for Switch", "0.295 (V)", "N/A", "N/A"], ["High V for Switch", "0.595 (V)", "N/A", "N/A"], ["Rich to Ln Time", "0.000 (S)", "N/A", "N/A"], ["Ln to Rich Time", "0.000 (S)", "N/A", "N/A"]]
      };
      _AppFakeData.ObdS6TestResult = {
        "O2 Sensor ($01)": [["$7E8", "Response rate deterioration level for bank1 sensor1 ($8E)", "0.000 (V)", "0.000 (V)", "0.000 (V)", "OK"], ["$7E8", "Abnormal range for bank1 sensor1 ($91)bank1 sensor1 ($8E)", "0.00000000 (mA)", "0.00000000 (mA)", "0.00000000 (mA)", "OK"]],
        "O2 Sensor ($02)": [["$7E8", "Minimum sensor voltage for test cycle (calculated) for bank1 sensor2 ($07)", "0.000 (V)", "0.000 (V)", "0.000 (V)", "OK"], ["$7E8", "Maximum sensor voltage for test cycle (constant) for bank1 sensor2 ($08)7)", "0.000 (V)", "0.000 (V)", "0.000 (V)", "OK"], ["$7E8", "Rich to lean sensor switch time when Fuel-Cut is executed for bank1 sensor2 ($8B) (V)", "0.000 s(0 min,0 s)", "0.000 s(0 min,0 s)", "0.000 s(0 min,0 s)", "OK"], ["$7E8", "Time from fuel cut occurs to sensor output drops to 0.2V for bank1 sensor2 ($8D)) (V)", "0.000 s(0 min,0 s)", "0.000 s(0 min,0 s)", "0.000 s(0 min,0 s)", "OK"], ["$7E8", "Maximum Oxygen Storage Capacity for bank1 sensor2 ($8F)V for bank1 sensor2 ($8D)) (V)", "0.000000", "0.000000", "0.000000", "OK"]],
        "O2 Sensor ($05)": [["$7E8", "Response rate deterioration level for bank2 sensor1 ($8E)for bank1 sensor2 ($8D)) (V)", "0.000 (V)", "0.000 (V)", "0.000 (V)", "OK"], ["$7E8", "Abnormal range for bank2 sensor1 ($91)bank2 sensor1 ($8E)for bank1 sensor2 ($8D)) (V)", "0.00000000 (mA)", "0.00000000 (mA)", "0.00000000 (mA)", "OK"]],
        "O2 Sensor ($06)": [["$7E8", "Minimum sensor voltage for test cycle (calculated) for bank2 sensor2 ($07) ($8D)) (V)", "0.000 (V)", "0.000 (V)", "0.000 (V)", "OK"], ["$7E8", "Maximum sensor voltage for test cycle (calculated) for bank2 sensor2 ($08) ($8D)) (V)", "0.000 (V)", "0.000 (V)", "0.000 (V)", "OK"], ["$7E8", "Rich to lean sensor switch time when Fuel-Cut is executed for bank2 sensor2 ($8B) (V)", "0.000 s(0 min,0 s)", "0.000 s(0 min,0 s)", "0.000 s(0 min,0 s)", "OK"], ["$7E8", "Time from fuel cut occurs to sensor output drops to 0.2V for bank2 sensor2 ($8D)) (V)", "0.000 s(0 min,0 s)", "0.000 s(0 min,0 s)", "0.000 s(0 min,0 s)", "OK"], ["$7E8", "Maximum Oxygen Storage Capacity for bank2 sensor2 ($8F)V for bank2 sensor2 ($8D)) (V)", "0.000000", "0.000000", "0.000000", "OK"]],
        "Catalyst Efficiency ($21)": [["$7E8", "Oxygen storage capacity of bank1 catalyst ($A9)(0 min,0 s)", "0.000000", "0.000000", "0.000000", "OK"]],
        "Catalyst Efficiency ($22)": [["$7E8", "Oxygen storage capacity of bank2 catalyst ($A9)(0 min,0 s)", "0.000000", "0.000000", "0.000000", "OK"]],
        "EVAP System ($3D)": [["$7E8", "0.02inch reference leak pressure - saturated EVAP pressure at the leak check ($C9)000000", "0.000 (PSI)", "0.000 (PSI)", "0.000 (PSI)", "OK"], ["$7E8", "0.02inch reference leak pressure - saturated EVAP pressure at the leak check ($CA)000000", "0.000 (PSI)", "0.000 (PSI)", "0.000 (PSI)", "OK"], ["$7E8", "-1KPa - 0.02inch reference leak pressure ($CB)VAP pressure at the leak check ($CA)000000", "0.000 (PSI)", "0.000 (PSI)", "0.000 (PSI)", "OK"], ["$7E8", "-1KPa - 0.02inch reference leak pressure ($CD)VAP pressure at the leak check ($CA)000000", "0.000 (PSI)", "0.000 (PSI)", "0.000 (PSI)", "OK"], ["$7E8", "Variation of EVAP pressure for 10 seconds when the vent valve is turned off (closed->vent) during the vacuum pump is opened - 0.3KPa ($CE)", "0.000 (PSI)", "0.000 (PSI)", "0.000 (PSI)", "OK"], ["$7E8", "-1KPa - 0.02inch reference leak pressure ($CF) the vent valve is turned off (closed->vent) during the vacuum pump is opened - 0.3KPa ($CE)", "0.000 (PSI)", "0.000 (PSI)", "0.000 (PSI)", "OK"], ["$7E8", "0.02inch reference leak pressure - (-4.5KPa) ($D0) vent valve is turned off (closed->vent) during the vacuum pump is opened - 0.3KPa ($CE)", "0.000 (PSI)", "0.000 (PSI)", "0.000 (PSI)", "OK"], ["$7E8", "0.02inch reference leak pressure - (-1KPa) ($D1)0) vent valve is turned off (closed->vent) during the vacuum pump is opened - 0.3KPa ($CE)", "0.000 (PSI)", "0.000 (PSI)", "0.000 (PSI)", "OK"], ["$7E8", "Variation of EVAP pressure for 10 seconds when the purge VSV is opened after the leak check - 3KPa ($D4)cuum pump is opened - 0.3KPa ($CE)", "0.000 (PSI)", "0.000 (PSI)", "0.000 (PSI)", "OK"], ["$7E8", "0.02inch reference leak pressure - saturated EVAP pressure at the leak check ($D5)eak check - 3KPa ($D4)cuum pump is opened - 0.3KPa ($CE)", "0.000 (PSI)", "0.000 (PSI)", "0.000 (PSI)", "OK"], ["$7E8", "Purge flow ($D7)ce leak pressure - saturated EVAP pressure at the leak check ($D5)eak check - 3KPa ($D4)cuum pump is opened - 0.3KPa ($CE)", "0.000 (PSI)", "0.000 (PSI)", "0.000 (PSI)", "OK"]],
        "O2 Sensor Heater ($42)": [["$7E8", "Oxygen sensor heater monitor bank 1 sensor 2 ($91)pressure at the leak check ($D5)eak check - 3KPa ($D4)cuum pump is opened - 0.3KPa ($CE)", "0.000 (Ohm)", "0.000 (Ohm)", "0.000 (Ohm)", "OK"]],
        "O2 Sensor Heater ($46)": [["$7E8", "Oxygen sensor heater monitor bank 2 sensor 2 ($91)pressure at the leak check ($D5)eak check - 3KPa ($D4)cuum pump is opened - 0.3KPa ($CE)", "0.000 (Ohm)", "0.000 (Ohm)", "0.000 (Ohm)", "OK"]],
        "Misfire ($A1)": [["$7E8", "EWMA(Exponential Weighted Moving Average) misfire counts for last 10 drive cycles(calculated) for general data ($0B) opened - 0.3KPa ($CE)", "0 (counts)", "65535 (counts)", "0 (counts)", "OK"], ["$7E8", "Misfire count for last/current drive cycles(calculated) for general data ($0C)les(calculated) for general data ($0B) opened - 0.3KPa ($CE)", "0 (counts)", "0 (counts)", "0 (counts)", "OK"]],
        "Misfire ($A2)": [["$7E8", "EWMA(Exponential Weighted Moving Average) misfire counts for last 10 drive cycles(calculated) for Cylinder 1 Data ($0B)ened - 0.3KPa ($CE)", "0 (counts)", "65535 (counts)", "0 (counts)", "OK"], ["$7E8", "Misfire count for last/current drive cycles(calculated) for Cylinder 1 Data ($0C)(calculated) for Cylinder 1 Data ($0B)ened - 0.3KPa ($CE)", "0 (counts)", "0 (counts)", "0 (counts)", "OK"]],
        "Misfire ($A3)": [["$7E8", "EWMA(Exponential Weighted Moving Average) misfire counts for last 10 drive cycles(calculated) for Cylinder 2 Data ($0B)ened - 0.3KPa ($CE)", "0 (counts)", "65535 (counts)", "0 (counts)", "OK"], ["$7E8", "Misfire count for last/current drive cycles(calculated) for Cylinder 2 Data ($0C)(calculated) for Cylinder 2 Data ($0B)ened - 0.3KPa ($CE)", "0 (counts)", "0 (counts)", "0 (counts)", "OK"]],
        "Misfire ($A4)": [["$7E8", "EWMA(Exponential Weighted Moving Average) misfire counts for last 10 drive cycles(calculated) for Cylinder 3 Data ($0B)ened - 0.3KPa ($CE)", "0 (counts)", "65535 (counts)", "0 (counts)", "OK"], ["$7E8", "Misfire count for last/current drive cycles(calculated) for Cylinder 3 Data ($0C)(calculated) for Cylinder 3 Data ($0B)ened - 0.3KPa ($CE)", "0 (counts)", "0 (counts)", "0 (counts)", "OK"]],
        "Misfire ($A5)": [["$7E8", "EWMA(Exponential Weighted Moving Average) misfire counts for last 10 drive cycles(calculated) for Cylinder 4 Data ($0B)ened - 0.3KPa ($CE)", "0 (counts)", "65535 (counts)", "0 (counts)", "OK"], ["$7E8", "Misfire count for last/current drive cycles(calculated) for Cylinder 4 Data ($0C)(calculated) for Cylinder 4 Data ($0B)ened - 0.3KPa ($CE)", "0 (counts)", "0 (counts)", "0 (counts)", "OK"]],
        "Misfire ($A6)": [["$7E8", "EWMA(Exponential Weighted Moving Average) misfire counts for last 10 drive cycles(calculated) for Cylinder 5 Data ($0B)ened - 0.3KPa ($CE)", "0 (counts)", "65535 (counts)", "0 (counts)", "OK"], ["$7E8", "Misfire count for last/current drive cycles(calculated) for Cylinder 5 Data ($0C)(calculated) for Cylinder 5 Data ($0B)ened - 0.3KPa ($CE)", "0 (counts)", "0 (counts)", "0 (counts)", "OK"]],
        "Misfire ($A7)": [["$7E8", "EWMA(Exponential Weighted Moving Average) misfire counts for last 10 drive cycles(calculated) for Cylinder 6 Data ($0B)ened - 0.3KPa ($CE)", "0 (counts)", "65535 (counts)", "0 (counts)", "OK"], ["$7E8", "Misfire count for last/current drive cycles(calculated) for Cylinder 6 Data ($0C)(calculated) for Cylinder 6 Data ($0B)ened - 0.3KPa ($CE)", "0 (counts)", "0 (counts)", "0 (counts)", "OK"]]
      };
      _AppFakeData.SpecialTestInstruction = {
        "str": ["Crankshaft Pos. Variation Learn", "", "Press Accelerator pedal to Wide Open Throttle (WOT).`Release pedal when fuel cut off occurs.`Read more information in Service Manual.`RPM value for fuel cut off:`Psgr. Cars:`L4 3970 RPM`V6 5150 RPM`V8 4000 RPM`Lduty Trucks:`L4 3970 RPM`V6 4000 RPM`V8 4000 RPM", ""],
        "hl": 0,
        "tt": 0
      };
      _AppFakeData.ListReport = [{
        createdAt: "1600225223421",
        customerName: "",
        dtcs: 11,
        email: null,
        id: 1,
        isSentReport: 0,
        phone: null,
        reportId: "1600225223421",
        reportNumber: 3421,
        scanningType: 2,
        vehicle: "2002 Chevrolet TrailBlazer L6, 4.2L (VIN 8th = S)",
        reportDetails: null
      }, {
        createdAt: "1611452393792",
        customerName: "",
        dtcs: 11,
        email: null,
        id: 126,
        isSentReport: 0,
        phone: null,
        reportId: "c181ecff-745a-4ce9-9ed2-4109792694f2",
        reportNumber: 3421,
        scanningType: 3,
        vehicle: "2014 Kia Cadenza(VG) G 3.3 GDI LAMBDA2",
        reportDetails: null
      }];
      _AppFakeData.reportDetails = {
        "customerInfo": {},
        "additionalInfo": {
          "caliDs": ["JMB*36761500", "JMB*47872611"],
          "cvNs": ["17 91 BC 82", "16 E0 62 BE"],
          "ipTs": [["OBDCOND", "1024"], ["IGNCNTR", "3337"], ["CATCOMP1", "824"], ["CATCOND1", "945"], ["CATCOMP2", "711"], ["CATCOND2", "945"], ["O2SCOMP1", "737"], ["O2SCOND1", "924"], ["O2SCOMP2", "724"], ["O2SCOND2", "833"], ["EGRCOMP", "997"], ["EGRCOND", "1010"], ["AIRCOMP", "937"], ["AIRCOND", "973"], ["EVAPCOMP", "68"], ["EVAPCOND", "97"]],
          "modules": ["$7E8"]
        },
        "createdAt": 1611798333576,
        "reportId": "74904796-3dac-41b8-85ef-bc4b3f91acb2",
        "reportNumber": 167,
        "scanningType": 3,
        "retailer": "AutoZone",
        "mileage": 34749,
        "toolInfo": {
          "dongleId": "E7335CD7-8CDC-4E1C-A493-68CC0B5F2F58",
          "usbProductId": 720,
          "unitId": 0,
          "languageId": 0
        },
        "RawData": {
          "VinProfileRaw": "qjFDNlJSN0dHNEhTNzQ4MjE3AAIAJQAhABEA/////wIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=",
          "MonitorStatusEcmRaw": "qogYgAEBJ+Ul",
          "MonitorStatusTcmRaw": "AHsIEAEAAADu",
          "DtcsEcmRaw": "AAACAAEdAOgHAAAcAQIEQwQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAqgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAqg==",
          "DtcsTcmRaw": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAqgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==",
          "FreezeFrameEcmRaw": "qiEAAAIAAASqIAIEAASqQAIIAASqAgIMAAKqAwIOAAKqBAIQAAGqBQIRAAGqBgISAAKqBwIUAAKqCAIWAAKqCQIYAAKqCwIaAAGqDAIbAAKqDQIdAAGqDgIeAAGqDwIfAAGqEQIgAAGqHwIhAAKqLgIjAAGqLwIkAAGqMgIlAAKqMwInAAGqQgIoAAKqQwIqAAKqRAIsAAKqRQIuAAGqRgIvAAGqRwIwAAGqSQIxAAGqSgIyAAGqTAIzAAGqUQI0AAGqUgI1AAGqAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf76AAwAGYAF+0MAABEMBAVdZgAaAB4AIgAkpEwQAjT0oAAIAOgFIZDDrAEWAAA45KBUKDgMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==",
          "FreezeFrameTcmRaw": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==",
          "VehicleInfoEcmRaw": "VQAAAAAxQzZSUjdHRzRIUzc0ODIxNwBKTUIqMzY3NjE1MDAAAAAASk1CKjQ3ODcyNjExAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAXkbyCFuBivgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAEAA0JAzgDsQLHA7EC4QOcAtQDQQPlA/IDqQPNAEQAYWEAYaqqqqqqAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==",
          "VehicleInfoTcmRaw": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==",
          "TirePressuresRaw": [{
            "id": 1072,
            "name": "Left Rear Tire Pressure",
            "value": "N/S",
            "unit": "null"
          }, {
            "id": 1073,
            "name": "Right Front Tire Pressure",
            "value": "N/S",
            "unit": "null"
          }, {
            "id": 1074,
            "name": "Right Rear Tire Pressure",
            "value": "N/S",
            "unit": "null"
          }, {
            "id": 1103,
            "name": "Spare Tire Pressure",
            "value": "N/S",
            "unit": "null"
          }, {
            "id": 1115,
            "name": "Left Front Tire Pressure Threshold",
            "value": "N/S",
            "unit": "null"
          }, {
            "id": 1118,
            "name": "Left Rear Tire Pressure Threshold",
            "value": "N/S",
            "unit": "null"
          }, {
            "id": 1116,
            "name": "Right Front Tire Pressure Threshold",
            "value": "N/S",
            "unit": "null"
          }, {
            "id": 1117,
            "name": "Right Rear Tire Pressure Threshold",
            "value": "N/S",
            "unit": "null"
          }, {
            "id": 1166,
            "name": "Left Front Tire Pressure Standard",
            "value": "N/S",
            "unit": "null"
          }, {
            "id": 1168,
            "name": "Left Rear Tire Pressure Standard",
            "value": "N/S",
            "unit": "null"
          }, {
            "id": 1167,
            "name": "Right Front Tire Pressure Standard",
            "value": "N/S",
            "unit": "null"
          }, {
            "id": 1169,
            "name": "Right Rear Tire Pressure Standard",
            "value": "N/S",
            "unit": "null"
          }, {
            "id": 1099,
            "name": "Left Front Tire Pressure Status",
            "value": "N/S",
            "unit": "null"
          }, {
            "id": 1100,
            "name": "Left Rear Tire Pressure Status",
            "value": "N/S",
            "unit": "null"
          }, {
            "id": 1101,
            "name": "Right Front Tire Pressure Status",
            "value": "N/S",
            "unit": "null"
          }, {
            "id": 1102,
            "name": "Right Rear Tire Pressure Status",
            "value": "N/S",
            "unit": "null"
          }, {
            "id": 1120,
            "name": "Spare Tire Pressure Status",
            "value": "N/S",
            "unit": "null"
          }],
          "OemModulesRaw": [{
            "system": 1,
            "subsystem": 1,
            "Dtcs": [{
              "code": "P0505",
              "type": "Active",
              "definition": "Idle Air Control Motor Circuits"
            }, {
              "code": "P0020",
              "type": "Active",
              "definition": "Bank 2 Camshaft 1 Position Actuator Circuit Open"
            }, {
              "code": "P0100",
              "type": "Active",
              "definition": "Mass Air Flow Sensor 'A'"
            }],
            "group": 16,
            "modulename": "PCM - Engine Control Module",
            "InvalidDTC": 0
          }, {
            "system": 1,
            "subsystem": 2,
            "Dtcs": [{
              "code": "P0702-00",
              "type": "Active",
              "definition": "Transmission Control System Electrical"
            }, {
              "code": "P0704-31",
              "type": "Stored",
              "definition": "Clutch Switch Input Circuit - No Signal"
            }],
            "group": 8,
            "modulename": "TCM - Transmission Control Module",
            "InvalidDTC": 0
          }, {
            "system": 1,
            "subsystem": 6,
            "Dtcs": [{
              "code": "B180F-00",
              "type": "Stored",
              "definition": "Driver Door Ajar"
            }, {
              "code": "B1BBC-00",
              "type": "Stored",
              "definition": "OCS Negative System Weight"
            }],
            "group": 255,
            "modulename": "ESM - Electronic Shifter Module",
            "InvalidDTC": 0
          }, {
            "system": 2,
            "subsystem": 3,
            "Dtcs": [{
              "code": "C0049-18",
              "type": "Active",
              "definition": "Brake Fluid - Under Current"
            }, {
              "code": "C0040-00",
              "type": "Stored",
              "definition": "Brake Pedal Switch"
            }, {
              "code": "C2130-31",
              "type": "",
              "definition": "Electric Vacuum Pump Power Supply Circuit - No Signal"
            }, {
              "code": "U113C-4C",
              "type": "Pending",
              "definition": "Lost Wheel Speed Messages"
            }],
            "group": 2,
            "modulename": "ABS - Anti Lock Brake System",
            "InvalidDTC": 0
          }, {
            "system": 2,
            "subsystem": 20,
            "Dtcs": [{
              "code": "C15A5-4B",
              "type": "Active",
              "definition": "Power Steering Pump - Over Temperature"
            }, {
              "code": "U1966-00",
              "type": "Stored",
              "definition": "Message counter/CRC fault in GE (from Electrical Power Steering)"
            }],
            "group": 255,
            "modulename": "EPS - Electric Power Steering",
            "InvalidDTC": 0
          }, {
            "system": 2,
            "subsystem": 140,
            "Dtcs": [],
            "group": 128,
            "modulename": "PTS - Parktronics",
            "InvalidDTC": 0
          }, {
            "system": 3,
            "subsystem": 4,
            "Dtcs": [{
              "code": "B1BCF-07",
              "type": "Stored",
              "definition": "Roll Over Sensors - Mechanical Failures"
            }, {
              "code": "B1BD1-2F",
              "type": "Stored",
              "definition": "Roll Over Sensor Configuration Mismatch - Signal Erratic"
            }, {
              "code": "B1B4F-00",
              "type": "Stored",
              "definition": "1st Row Passenger Seat Belt Load Limiter Circuit Shorted Together"
            }],
            "group": 4,
            "modulename": "ORC - Occupant Restraint Controller",
            "InvalidDTC": 0
          }, {
            "system": 3,
            "subsystem": 25,
            "Dtcs": [{
              "code": "B0013-00",
              "type": "Active",
              "definition": "Passenger Knee Bolster Squib Control"
            }, {
              "code": "B0050-00",
              "type": "Active",
              "definition": "Driver Seatbelt Sensor"
            }, {
              "code": "B100C-00",
              "type": "Pending",
              "definition": "Floor Mode Switch Request Input"
            }],
            "group": 255,
            "modulename": "BCM - Body Control Module",
            "InvalidDTC": 0
          }, {
            "system": 3,
            "subsystem": 26,
            "Dtcs": [{
              "code": "B1783-01",
              "type": "Stored",
              "definition": "Stop Lamp Control - General Electrical Failure"
            }, {
              "code": "C0020-35",
              "type": "Stored",
              "definition": "ABS Pump Motor Control - Signal High Time > Maximum"
            }, {
              "code": "C1231-00",
              "type": "Stored",
              "definition": "Drive Test: Steering Angle Sensor"
            }, {
              "code": "C2200-47",
              "type": "Stored",
              "definition": "Anti-lock Brake Module Internal - Watchdog / Safety ÂµC Failure"
            }],
            "group": 255,
            "modulename": "IPC - Instrument Panel Cluster",
            "InvalidDTC": 0
          }, {
            "system": 3,
            "subsystem": 27,
            "Dtcs": [{
              "code": "B1A71-01",
              "type": "Stored",
              "definition": "Passive Entry Antenna 1 - General Electrical Failure"
            }],
            "group": 64,
            "modulename": "RFH - Radio Frequency Hub",
            "InvalidDTC": 0
          }]
        },
        "vehicle": {
          "vehicleId": "893c204a-20c7-449e-a342-7170915a50a6",
          "vin": "1C6RR7GG4HS748217",
          "make": "RAM",
          "year": 2017,
          "model": "1500",
          "engineType": "V6, 3.6L; DOHC; 24V; SEFI; FFV",
          "transmission": "AUTOMATIC",
          "mileage": 34749,
          "nickName": "2017 RAM 1500 V6, 3.6L; DOHC; 24V; SEFI; FFV",
          "manufacturer": "",
          "isActive": true
        },
        "freezeFrames": [{
          "pid": "Pid03",
          "code": "Fuel Sys 1",
          "name": "Fuel System 1 Status 1",
          "value": "OL  "
        }, {
          "pid": "Pid03",
          "code": "Fuel Sys 2",
          "name": "Fuel System 2 Status 2",
          "value": "OL  "
        }, {
          "pid": "Pid04",
          "code": "Calc Load",
          "name": "Calculated LOAD Value",
          "value": "34.1 %"
        }, {
          "pid": "Pid05",
          "code": "ECT",
          "name": "Engine Coolant Temp",
          "value": "120 °F"
        }, {
          "pid": "Pid06",
          "code": "STFT B1",
          "name": "Short Term Fuel Trim - Bank 1",
          "value": "0.0 %"
        }, {
          "pid": "Pid07",
          "code": "LTFT B1",
          "name": "Long Term Fuel Trim - Bank 1",
          "value": "0.0 %"
        }, {
          "pid": "Pid08",
          "code": "STFT B2",
          "name": "Short Term Fuel Trim - Bank 2",
          "value": "0.0 %"
        }, {
          "pid": "Pid09",
          "code": "LTFT B2",
          "name": "Long Term Fuel Trim - Bank 2",
          "value": "0.0 %"
        }, {
          "pid": "Pid0B",
          "code": "MAP",
          "name": "Intake Manifold Absolute Pressure",
          "value": "12 inHg"
        }, {
          "pid": "Pid0C",
          "code": "Eng RPM",
          "name": "Engine RPM",
          "value": "1217  "
        }, {
          "pid": "Pid0D",
          "code": "Veh Speed",
          "name": "Vehicle Speed Sensor",
          "value": "0 mph"
        }, {
          "pid": "Pid0E",
          "code": "Spark Adv",
          "name": "Ignition Timing Advance #1 Cylinder",
          "value": "6.5 °"
        }, {
          "pid": "Pid0F",
          "code": "IAT",
          "name": "Intake Air Temperature",
          "value": "70 °F"
        }, {
          "pid": "Pid11",
          "code": "TPS",
          "name": "Absolute Throttle Position",
          "value": "15.7 %"
        }, {
          "pid": "Pid1F",
          "code": "Run Time",
          "name": "Time Since Engine Start",
          "value": "2 sec"
        }, {
          "pid": "Pid2E",
          "code": "Command EVAP",
          "name": "Commanded Evaporative Purge",
          "value": "0.0 %"
        }, {
          "pid": "Pid2F",
          "code": "Fuel Level",
          "name": "Fuel Level Input",
          "value": "22.7 %"
        }, {
          "pid": "Pid32",
          "code": "EVAP_VP",
          "name": "Evap System Vapour Pressure",
          "value": "0.3 InH2O"
        }, {
          "pid": "Pid33",
          "code": "BARO",
          "name": "Barometric Pressure",
          "value": "30 inHg"
        }, {
          "pid": "Pid42",
          "code": "ECU Volts",
          "name": "Control module voltage",
          "value": "12.523 V"
        }, {
          "pid": "Pid43",
          "code": "LOAD Value",
          "name": "Absolute Load Value",
          "value": "27.1 %"
        }, {
          "pid": "Pid44",
          "code": "EQ Ratio",
          "name": "Commanded Equivalence Ratio",
          "value": "0.999  "
        }, {
          "pid": "Pid45",
          "code": "Rel TPS",
          "name": "Relative Throttle Position",
          "value": "5.5 %"
        }, {
          "pid": "Pid46",
          "code": "Ambient",
          "name": "Ambient air temperature (same scaling as IAT - $0F)",
          "value": "63 °F"
        }, {
          "pid": "Pid47",
          "code": "TPS B",
          "name": "Absolute Throttle Position B",
          "value": "15.7 %"
        }, {
          "pid": "Pid49",
          "code": "ACC Pedal D",
          "name": "Absolute Throttle Position D",
          "value": "8.2 %"
        }, {
          "pid": "Pid4A",
          "code": "ACC Pedal E",
          "name": "Absolute Throttle Position E",
          "value": "3.9 %"
        }, {
          "pid": "Pid4C",
          "code": "Command TAC",
          "name": "Commanded Throttle Actuator Control",
          "value": "5.5 %"
        }, {
          "pid": "",
          "code": "",
          "name": "FUEL_TYP",
          "value": "ETH  "
        }, {
          "pid": "",
          "code": "",
          "name": "ALCH_PCT",
          "value": "0.0 %"
        }],
        "monitors": [{
          "name": "Misfire Monitor",
          "shortName": "MIS",
          "description": "Misfire Monitor",
          "status": 3
        }, {
          "name": "Comprehensive Component Monitor (CCM)",
          "shortName": "CCM",
          "description": "Comprehensive Component Monitor (CCM)",
          "status": 3
        }, {
          "name": "EGR System Monitor",
          "shortName": "EGR",
          "description": "EGR System Monitor",
          "status": 3
        }, {
          "name": "Oxygen Sensor Heater Monitor",
          "shortName": "HTR",
          "description": "Oxygen Sensor Heater Monitor",
          "status": 3
        }, {
          "name": "Fuel System Monitor",
          "shortName": "FUE",
          "description": "Fuel System Monitor",
          "status": 2
        }, {
          "name": "Catalyst Monitor",
          "shortName": "CAT",
          "description": "Catalyst Monitor",
          "status": 2
        }, {
          "name": "EVAP System Monitor",
          "shortName": "EVA",
          "description": "EVAP System Monitor",
          "status": 2
        }, {
          "name": "Oxygen Sensor Monitor",
          "shortName": "O2S",
          "description": "Oxygen Sensor Monitor",
          "status": 2
        }],
        "ledStatus": 2,
        "warningLightStatus": [{
          "id": 1132,
          "name": "TPMS warning light",
          "value": "Lamp On",
          "unit": "null"
        }, {
          "id": 1036,
          "name": "Airbag Dash Indicator",
          "value": "Continuous light",
          "unit": "null"
        }],
        "totalDtc": 25,
        "powertrainModule": {
          "numberOfDTCs": 1,
          "milStatus": "OFF",
          "primaryDTC": {
            "code": "P0443",
            "description": "Evaporative Emission System Purge Control Valve Circuit",
            "conditions": "",
            "possibleCauses": "",
            "codeType": null,
            "laymansTermSeverityLevel": 1,
            "laymansTermSeverityLevelDefinition": "Service should be scheduled and repaired when convenient. This DTC typically has no immediate threat to essential system components in short-term",
            "laymansTermsConditions": "Code P0443 indicates a fault in the Evaporative Emission System Purge Control Valve electrical circuit for a predetermined period of time.",
            "laymansTermsTitle": "Evaporative Emission System Purge Control Valve Circuit",
            "laymansTermDescription": "Code P0443 indicates a fault in the Evaporative Emission System Purge Control Valve electrical circuit for a predetermined period of time.",
            "numberOfTSBs": 0
          },
          "storedDTCs": [{
            "code": "P0443",
            "description": "Evaporative Emission System Purge Control Valve Circuit",
            "conditions": "",
            "possibleCauses": "",
            "codeType": null,
            "laymansTermSeverityLevel": 1,
            "laymansTermSeverityLevelDefinition": "Service should be scheduled and repaired when convenient. This DTC typically has no immediate threat to essential system components in short-term",
            "laymansTermsConditions": "Code P0443 indicates a fault in the Evaporative Emission System Purge Control Valve electrical circuit for a predetermined period of time.",
            "laymansTermsTitle": "Evaporative Emission System Purge Control Valve Circuit",
            "laymansTermDescription": "Code P0443 indicates a fault in the Evaporative Emission System Purge Control Valve electrical circuit for a predetermined period of time.",
            "numberOfTSBs": 0
          }],
          "pendingDTCs": [],
          "permanentDTCs": [],
          "mostLikelyFixes": []
        },
        "overview": {
          "numberOfFailedModules": 10,
          "numberOfPassedModules": 1,
          "numberOfMaintenances": 0,
          "nextMileage": 0,
          "numberOfPredictedFailures": 0,
          "numberOfRecalls": 11,
          "numberOfTSBs": 70,
          "ledStatus": 2,
          "batteryLife": {
            "value": 12.2,
            "status": "Check Battery"
          },
          "oilLife": {
            "value": "64%",
            "status": "Passed"
          },
          "brakePadLife": {
            "status": null
          },
          "frontbrakePadLife": {
            "status": null
          },
          "rearbrakePadLife": {
            "status": null
          },
          "warrantyStatus": "",
          "tirePressure": {
            "leftFrontTirePressure": {
              "value": null,
              "status": "N/S",
              "thresholdValue": "N/S",
              "standardValue": "N/S"
            },
            "leftRearTirePressure": {
              "value": "N/S",
              "status": "N/S",
              "thresholdValue": "N/S",
              "standardValue": "N/S"
            },
            "rightFrontTirePressure": {
              "value": "N/S",
              "status": "N/S",
              "thresholdValue": "N/S",
              "standardValue": "N/S"
            },
            "rightRearTirePressure": {
              "value": "N/S",
              "status": "N/S",
              "thresholdValue": "N/S",
              "standardValue": "N/S"
            },
            "spareTirePressure": {
              "value": "N/S",
              "status": "N/S",
              "thresholdValue": null,
              "standardValue": null
            }
          }
        },
        "driveCycles": [{
          "name": "Misfire Monitor",
          "value": "Complete",
          "option": [""],
          "note": [""],
          "condition": [""],
          "procedure": ["1. Start the engine then place in idle for 5 minutes<br/>2. Smoothly accelerate to a speed between 40 mph and 60 mph for 8 minutes<br/>3. Stop and place in idle for 3 minutes<br/>4. Drive vehicle with speed above 25 mph for 2 minutes<br/>5. Turn off the engine then leave for 10 minutes"],
          "id": 14,
          "status": 3
        }, {
          "name": "Comprehensive Component Monitor (CCM)",
          "value": "Complete",
          "option": [""],
          "note": [""],
          "condition": [""],
          "procedure": ["1. Start the engine then place in idle for 5 minutes<br/>2. Smoothly accelerate to a speed between 40 mph and 60 mph for 8 minutes<br/>3. Stop and place in idle for 3 minutes<br/>4. Drive vehicle with speed above 25 mph for 2 minutes<br/>5. Turn off the engine then leave for 10 minutes"],
          "id": 4,
          "status": 3
        }, {
          "name": "EGR System Monitor",
          "value": "Complete",
          "option": [""],
          "note": [""],
          "condition": [""],
          "procedure": ["Vacuum controlled<br/>1. Start the engine than place in idle for 5 minutes<br/>2. Smoothly accelerate to a speed between 40 mph and 60 mph for 8 minutes<br/>Electronic<br/>1. Start the engine then place in idle for 5 minutes<br/>2. Smoothly accelerate to a speed between 40 mph and 60 mph 2 minutes<br/>3. Stop the engine and place in idle for 3 minutes"],
          "id": 7,
          "status": 3
        }, {
          "name": "Oxygen Sensor Heater Monitor",
          "value": "Complete",
          "option": [""],
          "note": [""],
          "condition": [""],
          "procedure": ["1. Start engine then place idle for 5 minutes<br/>2. Turn off engine and leave for 10 minutes"],
          "id": 13,
          "status": 3
        }, {
          "name": "Fuel System Monitor",
          "value": "Incomplete",
          "option": [""],
          "note": [""],
          "condition": [""],
          "procedure": ["1. Start the engine then place in idle for 5 minutes<br/>2. Smoothly accelerate to a speed between 40 mph and 60 mph for 8 minutes<br/>3. Stop and place in idle for 3 minutes<br/>4. Drive vehicle with speed above 25 mph for 2 minutes<br/>5. Turn off the engine then leave for 10 minutes"],
          "id": 10,
          "status": 2
        }, {
          "name": "Catalyst Monitor",
          "value": "Incomplete",
          "option": [""],
          "note": [""],
          "condition": [""],
          "procedure": ["1. Start the engine than place in idle for 5 minutes<br/>2. Smoothly accelerate to a speed between 40 mph and 60 mph for 2 minutes"],
          "id": 3,
          "status": 2
        }, {
          "name": "EVAP System Monitor",
          "value": "Incomplete",
          "option": [""],
          "note": [""],
          "condition": [""],
          "procedure": ["1. Start the engine then place in idle for five minutes<br/>2. Smoothly accelerate to a speed between 30 mph and 40 mph 2 minutes"],
          "id": 9,
          "status": 2
        }, {
          "name": "Oxygen Sensor Monitor",
          "value": "Incomplete",
          "option": [""],
          "note": [""],
          "condition": [""],
          "procedure": ["1. Place the engine in idle for five minutes (to reach closed loop operation).<br/>2. Drive with a steady vehicle speed above 25 mph for 2 minutes.<br/>3. Stop the engine in idle for 30 seconds.<br/>4. Smoothly accelerate to a speed between 30 mph and 40 mph.<br/>5. Steps 3 & 4 should be repeated five times."],
          "id": 16,
          "status": 2
        }],
        "obdTest": {
          "5": {},
          "6": {
            "Exhaust Gas Sensor Monitor Bank 1 - Sensor 1 ($01)": [["$7E8", "Minimum sensor voltage for test cycle ($07)", "0.00 (V)", "655.35 (V)", "15.00 (V)", "OK"], ["$7E8", "Maximum sensor voltage for test cycle ($08)", "0.00 (V)", "655.35 (V)", "450.00 (V)", "OK"]],
            "Exhaust Gas Sensor Monitor Bank 1 - Sensor 2 ($02)": [["$7E8", "Minimum sensor voltage for test cycle ($07)", "0.00 (V)", "655.35 (V)", "15.00 (V)", "OK"], ["$7E8", "Maximum sensor voltage for test cycle ($08)", "0.00 (V)", "655.35 (V)", "450.00 (V)", "OK"]],
            "Catalyst Monitor Bank 1 ($21)": [["$7E8", "Rich to lean sensor threshold voltage ($01)", "0.00 (V)", "655.35 (V)", "250.00 (V)", "OK"], ["$7E8", "Lean to rich sensor threshold voltage ($02)", "0.00 (V)", "655.35 (V)", "250.00 (V)", "OK"]],
            "EGR Monitor Bank 1 ($31)": [["$7E8", "Rich to lean sensor switch time ($05)", "0.000 s(0 min,0 s)", "65.535 s(1 min,5 s)", "1.400 s(0 min,1 s)", "OK"], ["$7E8", "Lean to rich sensor switch time ($06)", "0.000 s(0 min,0 s)", "65.535 s(1 min,5 s)", "0.850 s(0 min,0 s)", "OK"]],
            "EVAP Monitor (Cap Off / 0.150”) ($39)": [["$7E8", "Time between sensor transitions ($09)", "0.000 s(0 min,0 s)", "65.535 s(1 min,5 s)", "1.500 s(0 min,1 s)", "OK"]],
            "Exhaust Gas Sensor Heater Monitor Bank 1 - Sensor 1 ($41)": [["$7E8", "Low sensor voltage for switch time calculation ($03)", "0.000 s(0 min,0 s)", "65.535 s(1 min,5 s)", "1.500 s(0 min,1 s)", "OK"]],
            "Exhaust Gas Sensor Heater Monitor Bank 1 - Sensor 2 ($42)": [["$7E8", "High sensor voltage for switch time calculation ($04)", "0.000 s(0 min,0 s)", "65.535 s(1 min,5 s)", "1.500 s(0 min,1 s)", "OK"]],
            "Misfire Cylinder 1 Data ($A2)": [["$7E8", "Misfire counts for last/current driving cycles ($0C)", "0 (counts)", "65535 (counts)", "10 (counts)", "OK"]],
            "Misfire Cylinder 2 Data ($A3)": [["$7E8", "Misfire counts for last/current driving cycles ($0C)", "0 (counts)", "65535 (counts)", "120 (counts)", "OK"]]
          },
          "8": {
            "result": "OK"
          }
        },
        "absModule": {
          "numberOfDTCs": 4,
          "dtCsNoFix": [{
            "fixes": null,
            "type": "Active",
            "code": "C0049-18",
            "description": "Brake Fluid - Under Current",
            "numberOfTSBs": 0
          }, {
            "fixes": null,
            "type": "Stored",
            "code": "C0040-00",
            "description": "Brake Pedal Switch",
            "numberOfTSBs": 0
          }, {
            "fixes": null,
            "type": "",
            "code": "C2130-31",
            "description": "Electric Vacuum Pump Power Supply Circuit - No Signal",
            "numberOfTSBs": 0
          }, {
            "fixes": null,
            "type": "Pending",
            "code": "U113C-4C",
            "description": "Lost Wheel Speed Messages",
            "numberOfTSBs": 0
          }],
          "dtCsWithFix": []
        },
        "srsModule": {
          "numberOfDTCs": 3,
          "dtCsNoFix": [{
            "fixes": null,
            "type": "Stored",
            "code": "B1BCF-07",
            "description": "Roll Over Sensors - Mechanical Failures",
            "numberOfTSBs": 0
          }, {
            "fixes": null,
            "type": "Stored",
            "code": "B1BD1-2F",
            "description": "Roll Over Sensor Configuration Mismatch - Signal Erratic",
            "numberOfTSBs": 0
          }, {
            "fixes": null,
            "type": "Stored",
            "code": "B1B4F-00",
            "description": "1st Row Passenger Seat Belt Load Limiter Circuit Shorted Together",
            "numberOfTSBs": 0
          }],
          "dtCsWithFix": []
        },
        "passedModules": {
          "numberOfModules": 1,
          "modules": [{
            "moduleName": "PTS - Parktronics",
            "subSystem": 140,
            "system": 2,
            "group": 128,
            "numberOfDTCs": 0,
            "InvalidDTC": 0,
            "dtCs": []
          }],
          "monitors": [{
            "name": "Misfire Monitor",
            "shortName": "MIS",
            "description": "Misfire Monitor",
            "status": 3
          }, {
            "name": "Comprehensive Component Monitor (CCM)",
            "shortName": "CCM",
            "description": "Comprehensive Component Monitor (CCM)",
            "status": 3
          }, {
            "name": "EGR System Monitor",
            "shortName": "EGR",
            "description": "EGR System Monitor",
            "status": 3
          }, {
            "name": "Oxygen Sensor Heater Monitor",
            "shortName": "HTR",
            "description": "Oxygen Sensor Heater Monitor",
            "status": 3
          }, {
            "name": "Fuel System Monitor",
            "shortName": "FUE",
            "description": "Fuel System Monitor",
            "status": 2
          }, {
            "name": "Catalyst Monitor",
            "shortName": "CAT",
            "description": "Catalyst Monitor",
            "status": 2
          }, {
            "name": "EVAP System Monitor",
            "shortName": "EVA",
            "description": "EVAP System Monitor",
            "status": 2
          }, {
            "name": "Oxygen Sensor Monitor",
            "shortName": "O2S",
            "description": "Oxygen Sensor Monitor",
            "status": 2
          }]
        },
        "otherModules": {
          "numberOfModules": 7,
          "modules": [{
            "moduleName": "PCM - Engine Control Module",
            "subSystem": 1,
            "system": 1,
            "group": 16,
            "numberOfDTCs": 3,
            "InvalidDTC": 0,
            "dtCs": [{
              "code": "P0505",
              "def": "Idle Air Control Motor Circuits",
              "type": "Active"
            }, {
              "code": "P0020",
              "def": "Bank 2 Camshaft 1 Position Actuator Circuit Open",
              "type": "Active"
            }, {
              "code": "P0100",
              "def": "Mass Air Flow Sensor 'A'",
              "type": "Active"
            }]
          }, {
            "moduleName": "TCM - Transmission Control Module",
            "subSystem": 2,
            "system": 1,
            "group": 8,
            "numberOfDTCs": 2,
            "InvalidDTC": 0,
            "dtCs": [{
              "code": "P0702-00",
              "def": "Transmission Control System Electrical",
              "type": "Active"
            }, {
              "code": "P0704-31",
              "def": "Clutch Switch Input Circuit - No Signal",
              "type": "Stored"
            }]
          }, {
            "moduleName": "ESM - Electronic Shifter Module",
            "subSystem": 6,
            "system": 1,
            "group": 255,
            "numberOfDTCs": 2,
            "InvalidDTC": 0,
            "dtCs": [{
              "code": "B180F-00",
              "def": "Driver Door Ajar",
              "type": "Stored"
            }, {
              "code": "B1BBC-00",
              "def": "OCS Negative System Weight",
              "type": "Stored"
            }]
          }, {
            "moduleName": "EPS - Electric Power Steering",
            "subSystem": 20,
            "system": 2,
            "group": 255,
            "numberOfDTCs": 2,
            "InvalidDTC": 0,
            "dtCs": [{
              "code": "C15A5-4B",
              "def": "Power Steering Pump - Over Temperature",
              "type": "Active"
            }, {
              "code": "U1966-00",
              "def": "Message counter/CRC fault in GE (from Electrical Power Steering)",
              "type": "Stored"
            }]
          }, {
            "moduleName": "BCM - Body Control Module",
            "subSystem": 25,
            "system": 3,
            "group": 255,
            "numberOfDTCs": 3,
            "InvalidDTC": 0,
            "dtCs": [{
              "code": "B0013-00",
              "def": "Passenger Knee Bolster Squib Control",
              "type": "Active"
            }, {
              "code": "B0050-00",
              "def": "Driver Seatbelt Sensor",
              "type": "Active"
            }, {
              "code": "B100C-00",
              "def": "Floor Mode Switch Request Input",
              "type": "Pending"
            }]
          }, {
            "moduleName": "IPC - Instrument Panel Cluster",
            "subSystem": 26,
            "system": 3,
            "group": 255,
            "numberOfDTCs": 4,
            "InvalidDTC": 0,
            "dtCs": [{
              "code": "B1783-01",
              "def": "Stop Lamp Control - General Electrical Failure",
              "type": "Stored"
            }, {
              "code": "C0020-35",
              "def": "ABS Pump Motor Control - Signal High Time > Maximum",
              "type": "Stored"
            }, {
              "code": "C1231-00",
              "def": "Drive Test: Steering Angle Sensor",
              "type": "Stored"
            }, {
              "code": "C2200-47",
              "def": "Anti-lock Brake Module Internal - Watchdog / Safety ÂµC Failure",
              "type": "Stored"
            }]
          }, {
            "moduleName": "RFH - Radio Frequency Hub",
            "subSystem": 27,
            "system": 3,
            "group": 64,
            "numberOfDTCs": 1,
            "InvalidDTC": 0,
            "dtCs": [{
              "code": "B1A71-01",
              "def": "Passive Entry Antenna 1 - General Electrical Failure",
              "type": "Stored"
            }]
          }]
        },
        "id": 164,
        "scheduledMaintenances": {
          "vehicle": {
            "vehicleId": "893c204a-20c7-449e-a342-7170915a50a6",
            "vin": "1C6RR7GG4HS748217",
            "make": "RAM",
            "year": 2017,
            "model": "1500",
            "engineType": "V6, 3.6L; DOHC; 24V; SEFI; FFV",
            "transmission": "AUTOMATIC",
            "mileage": 34749,
            "nickName": "2017 RAM 1500 V6, 3.6L; DOHC; 24V; SEFI; FFV",
            "manufacturer": "",
            "isActive": true
          },
          "nextMileage": 0,
          "numberOfItems": 0,
          "totalEstimatedServiceCost": 0,
          "retailer": "AutoZone",
          "items": []
        },
        "predictedFailures": {
          "numberOfItems": 0,
          "totalEstimatedServiceCost": 0,
          "items": [],
          "retailer": "AutoZone"
        },
        "reportType": 2,
        "isSentReport": 0,
        "isCustomerInfoSynced": true,
        "tsbAndRecalls": {
          "numberOfSafetyRecalls": 11,
          "numberOfTSBCategory": 11,
          "safetyRecalls": [{
            "campaignNumber": "19V757000",
            "defectConsequence": "COMBUSTION IN THE INTAKE MANIFOLD CAN INCREASE THE RISK OF A FIRE.",
            "defectCorrectiveAction": "CHRYSLER WILL NOTIFY OWNERS, AND DEALERS WILL REPLACE THE EGR COOLER, FREE OF CHARGE.  DEALERS WILL ALSO INSPECT AND, AS NECESSARY, REPLACE THE INTAKE MANIFOLD.  THE RECALL BEGAN APRIL 16, 2020.  OWNERS MAY CONTACT CHRYSLER CUSTOMER SERVICE AT 1-800-853-1403.  CHRYSLER'S NUMBER FOR THIS RECALL IS VB1.",
            "defectDescription": "CHRYSLER (FCA US LLC) IS RECALLING CERTAIN 2014-2019 RAM 1500 AND 1500 CLASSIC PICKUP TRUCKS EQUIPPED WITH 3.0L ECO DIESEL ENGINES.  THE EXHAUST GAS RECIRCULATION (EGR) COOLER MAY CRACK AND ALLOW PRE-HEATED VAPORIZED COOLANT TO ENTER THE EGR SYSTEM. THIS MIXTURE MAY COMBUST INSIDE THE INTAKE MANIFOLD. ",
            "recallDate": "1/24/2019",
            "recallDateString": "24/01/2019",
            "recordNumber": 116653,
            "recallDateFormat": "2019-01-24T00:00:00"
          }, {
            "campaignNumber": "19V347000",
            "defectConsequence": "IF THE TAILGATE OPENS WHILE THE VEHICLE IS BEING DRIVEN, CARGO MAY FALL OUT THE VEHICLE AND CREATE A ROAD HAZARD, INCREASING THE RISK OF CRASH.",
            "defectCorrectiveAction": "CHRYSLER WILL NOTIFY OWNERS, AND DEALERS WILL REPAIR THE TAILGATE LATCH, FREE OF CHARGE.  THE RECALL BEGAN MAY 23, 2019.  CHRYSLER IS EXPECTED TO NOTIFY OWNERS OF THE EXPANDED POPULATION ON OCTOBER 18, 2019.  OWNERS MAY CONTACT FCA US CUSTOMER SERVICE AT 1-800-853-1403.  FCA US'S NUMBER FOR THIS RECALL IS V44.  NOTE: 2015-2017 MY RAM 1500 PICKUP TRUCKS WITH TRUCK BEDS OTHER THAN 8 FOOT, ARE CURRENTLY COVERED UNDER NHTSA RECALL 18V-486 FOR THIS ISSUE.",
            "defectDescription": "CHRYSLER (FCA US LLC) IS RECALLING CERTAIN 2015-2017 RAM 1500, 2500 AND 3500 PICKUP TRUCKS EQUIPPED WITH AN 8 FOOT BED AND A POWER LOCKING TAILGATE.  CHRYSLER IS ALSO RECALLING ALL 2013-2014 AND 2018 RAM 1500, 2500 AND 3500 PICKUP TRUCKS BUILT BEFORE APRIL 1, 2018 WITH A 6 OR 8 FOOT BED AND A POWER LOCKING TAILGATE.  ON AUGUST 29, 2019 CHRYSLER EXPANDED THE RECALL TO INCLUDE AN ADDITIONAL 693,128 MODEL YEAR 2013-2014 RAM 1500, 2500 AND 3500 PICKUP TRUCKS.  THE TAILGATE ACTUATOR LIMITER TAB MAY FRACTURE AND CAUSE THE TAILGATE TO UNLATCH AND OPEN WHILE DRIVING. ",
            "recallDate": "1/9/2019",
            "recallDateString": "09/01/2019",
            "recordNumber": 116654,
            "recallDateFormat": "2019-01-09T00:00:00"
          }, {
            "campaignNumber": "18V486000",
            "defectConsequence": "IF THE TAILGATE LATCH RELEASES AND THE TAILGATE OPENS WHILE DRIVING, CARGO MAY FALL OUT, CREATING A ROAD HAZARD AND INCREASING THE RISK OF A CRASH.",
            "defectCorrectiveAction": "CHRYSLER WILL NOTIFY OWNERS, AND DEALERS WILL REPAIR THE VEHICLE, FREE OF CHARGE.  THE RECALL BEGAN SEPTEMBER 17, 2018.  OWNERS MAY CONTACT CHRYSLER CUSTOMER SERVICE AT 1-800-853-1403.  CHRYSLER'S NUMBER FOR THIS RECALL IS U74.",
            "defectDescription": "CHRYSLER (FCA US LLC) IS RECALLING CERTAIN 2015-2017 RAM 1500, 2500, AND 3500 PICKUP TRUCKS EQUIPPED WITH A POWER LOCKING TAILGATE AND EITHER A 5 FOOT, 7 INCH OR 6 FOOT, 4 INCH BED.  THE TAILGATE ACTUATOR LIMITER TAB MAY FRACTURE AND CAUSE THE TAILGATE TO UNLATCH AND OPEN WHILE DRIVING. ",
            "recallDate": "1/27/2018",
            "recallDateString": "27/01/2018",
            "recordNumber": 116662,
            "recallDateFormat": "2018-01-27T00:00:00"
          }, {
            "campaignNumber": "18V486000",
            "defectConsequence": "IF THE TAILGATE LATCH RELEASES AND THE TAILGATE OPENS WHILE DRIVING, CARGO MAY FALL OUT, CREATING A ROAD HAZARD AND INCREASING THE RISK OF A CRASH.",
            "defectCorrectiveAction": "CHRYSLER WILL NOTIFY OWNERS, AND DEALERS WILL REPAIR THE VEHICLE, FREE OF CHARGE.  THE RECALL BEGAN SEPTEMBER 17, 2018.  OWNERS MAY CONTACT CHRYSLER CUSTOMER SERVICE AT 1-800-853-1403.  CHRYSLER'S NUMBER FOR THIS RECALL IS U74.",
            "defectDescription": "CHRYSLER (FCA US LLC) IS RECALLING CERTAIN 2015-2017 RAM 1500, 2500, AND 3500 PICKUP TRUCKS EQUIPPED WITH A POWER LOCKING TAILGATE AND EITHER A 5 FOOT, 7 INCH OR 6 FOOT, 4 INCH BED.  THE TAILGATE ACTUATOR LIMITER TAB MAY FRACTURE AND CAUSE THE TAILGATE TO UNLATCH AND OPEN WHILE DRIVING. ",
            "recallDate": "1/27/2018",
            "recallDateString": "27/01/2018",
            "recordNumber": 116663,
            "recallDateFormat": "2018-01-27T00:00:00"
          }, {
            "campaignNumber": "18V332000",
            "defectConsequence": "IF THE VEHICLE MAINTAINS ITS SPEED OR ACCELERATES DESPITE ATTEMPTS TO DEACTIVATE THE CRUISE CONTROL, THERE WOULD BE AN INCREASED RISK OF A CRASH.",
            "defectCorrectiveAction": "CHRYSLER WILL NOTIFY OWNERS, AND DEALERS WILL INSPECT THE SOFTWARE, AND PERFORM A SOFTWARE FLASH ON THE ENGINE OR POWERTRAIN CONTROL MODULE, FREE OF CHARGE.  THE RECALL BEGAN JUNE 4, 2018.  OWNERS MAY CONTACT CHRYSLER CUSTOMER SERVICE AT 1-800-853-1403.  NOTE: OWNERS ARE ADVISED TO STOP USING CRUISE CONTROL UNTIL THE SOFTWARE UPDATE HAS BEEN PERFORMED.  IN THE EVENT THAT CRUISE CONTROL CANNOT BE DISENGAGED WHILE DRIVING, OWNERS SHOULD FIRMLY AND STEADILY APPLY THE BRAKES AND SHIFT THE TRANSMISSION TO NEUTRAL, PLACING THE VEHICLE IN PARK ONCE IT HAS STOPPED.  ",
            "defectDescription": "CHRYSLER (FCA US LLC) IS RECALLING CERTAIN 2014-2018 DODGE JOURNEY, CHARGER AND DURANGO, RAM 2500, 3500, 3500 CAB CHASSIS (MORE THAN 10,000LB), 4500 CAB CHASSIS AND 5500 CAB CHASSIS, JEEP CHEROKEE AND GRAND CHEROKEE AND CHRYSLER 300, 2014-2019 RAM 1500, 2015-2018 DODGE CHALLENGER, 2015-2017 CHRYSLER 200, 2016-2018 RAM 3500 CAB CHASSIS (LESS THAN 10,000 LB), 2017-2018 CHRYSLER PACIFICA AND 2018 JEEP WRANGLER VEHICLES.  THESE VEHICLES ARE BEING RECALLED TO ADDRESS A DEFECT THAT COULD PREVENT THE CRUISE CONTROL SYSTEM FROM DISENGAGING.  IF, WHEN USING CRUISE CONTROL, THERE IS A SHORT CIRCUIT WITHIN THE VEHICLE'S WIRING, THE DRIVER MAY NOT BE ABLE TO SHUT OFF THE CRUISE CONTROL EITHER BY DEPRESSING THE BRAKE PEDAL OR MANUALLY TURNING THE SYSTEM OFF ONCE IT HAS BEEN ENGAGED, RESULTING IN EITHER THE VEHICLE MAINTAINING ITS CURRENT SPEED OR POSSIBLY ACCELERATING.  ",
            "recallDate": "1/17/2018",
            "recallDateString": "17/01/2018",
            "recordNumber": 116658,
            "recallDateFormat": "2018-01-17T00:00:00"
          }, {
            "campaignNumber": "18V332000",
            "defectConsequence": "IF THE VEHICLE MAINTAINS ITS SPEED OR ACCELERATES DESPITE ATTEMPTS TO DEACTIVATE THE CRUISE CONTROL, THERE WOULD BE AN INCREASED RISK OF A CRASH.",
            "defectCorrectiveAction": "CHRYSLER WILL NOTIFY OWNERS, AND DEALERS WILL INSPECT THE SOFTWARE, AND PERFORM A SOFTWARE FLASH ON THE ENGINE OR POWERTRAIN CONTROL MODULE, FREE OF CHARGE.  THE RECALL BEGAN JUNE 4, 2018.  OWNERS MAY CONTACT CHRYSLER CUSTOMER SERVICE AT 1-800-853-1403.  NOTE: OWNERS ARE ADVISED TO STOP USING CRUISE CONTROL UNTIL THE SOFTWARE UPDATE HAS BEEN PERFORMED.  IN THE EVENT THAT CRUISE CONTROL CANNOT BE DISENGAGED WHILE DRIVING, OWNERS SHOULD FIRMLY AND STEADILY APPLY THE BRAKES AND SHIFT THE TRANSMISSION TO NEUTRAL, PLACING THE VEHICLE IN PARK ONCE IT HAS STOPPED.  ",
            "defectDescription": "CHRYSLER (FCA US LLC) IS RECALLING CERTAIN 2014-2018 DODGE JOURNEY, CHARGER AND DURANGO, RAM 2500, 3500, 3500 CAB CHASSIS (MORE THAN 10,000LB), 4500 CAB CHASSIS AND 5500 CAB CHASSIS, JEEP CHEROKEE AND GRAND CHEROKEE AND CHRYSLER 300, 2014-2019 RAM 1500, 2015-2018 DODGE CHALLENGER, 2015-2017 CHRYSLER 200, 2016-2018 RAM 3500 CAB CHASSIS (LESS THAN 10,000 LB), 2017-2018 CHRYSLER PACIFICA AND 2018 JEEP WRANGLER VEHICLES.  THESE VEHICLES ARE BEING RECALLED TO ADDRESS A DEFECT THAT COULD PREVENT THE CRUISE CONTROL SYSTEM FROM DISENGAGING.  IF, WHEN USING CRUISE CONTROL, THERE IS A SHORT CIRCUIT WITHIN THE VEHICLE'S WIRING, THE DRIVER MAY NOT BE ABLE TO SHUT OFF THE CRUISE CONTROL EITHER BY DEPRESSING THE BRAKE PEDAL OR MANUALLY TURNING THE SYSTEM OFF ONCE IT HAS BEEN ENGAGED, RESULTING IN EITHER THE VEHICLE MAINTAINING ITS CURRENT SPEED OR POSSIBLY ACCELERATING.  ",
            "recallDate": "1/17/2018",
            "recallDateString": "17/01/2018",
            "recordNumber": 116659,
            "recallDateFormat": "2018-01-17T00:00:00"
          }, {
            "campaignNumber": "18V332000",
            "defectConsequence": "IF THE VEHICLE MAINTAINS ITS SPEED OR ACCELERATES DESPITE ATTEMPTS TO DEACTIVATE THE CRUISE CONTROL, THERE WOULD BE AN INCREASED RISK OF A CRASH.",
            "defectCorrectiveAction": "CHRYSLER WILL NOTIFY OWNERS, AND DEALERS WILL INSPECT THE SOFTWARE, AND PERFORM A SOFTWARE FLASH ON THE ENGINE OR POWERTRAIN CONTROL MODULE, FREE OF CHARGE.  THE RECALL BEGAN JUNE 4, 2018.  OWNERS MAY CONTACT CHRYSLER CUSTOMER SERVICE AT 1-800-853-1403.  NOTE: OWNERS ARE ADVISED TO STOP USING CRUISE CONTROL UNTIL THE SOFTWARE UPDATE HAS BEEN PERFORMED.  IN THE EVENT THAT CRUISE CONTROL CANNOT BE DISENGAGED WHILE DRIVING, OWNERS SHOULD FIRMLY AND STEADILY APPLY THE BRAKES AND SHIFT THE TRANSMISSION TO NEUTRAL, PLACING THE VEHICLE IN PARK ONCE IT HAS STOPPED.  ",
            "defectDescription": "CHRYSLER (FCA US LLC) IS RECALLING CERTAIN 2014-2018 DODGE JOURNEY, CHARGER AND DURANGO, RAM 2500, 3500, 3500 CAB CHASSIS (MORE THAN 10,000LB), 4500 CAB CHASSIS AND 5500 CAB CHASSIS, JEEP CHEROKEE AND GRAND CHEROKEE AND CHRYSLER 300, 2014-2019 RAM 1500, 2015-2018 DODGE CHALLENGER, 2015-2017 CHRYSLER 200, 2016-2018 RAM 3500 CAB CHASSIS (LESS THAN 10,000 LB), 2017-2018 CHRYSLER PACIFICA AND 2018 JEEP WRANGLER VEHICLES.  THESE VEHICLES ARE BEING RECALLED TO ADDRESS A DEFECT THAT COULD PREVENT THE CRUISE CONTROL SYSTEM FROM DISENGAGING.  IF, WHEN USING CRUISE CONTROL, THERE IS A SHORT CIRCUIT WITHIN THE VEHICLE'S WIRING, THE DRIVER MAY NOT BE ABLE TO SHUT OFF THE CRUISE CONTROL EITHER BY DEPRESSING THE BRAKE PEDAL OR MANUALLY TURNING THE SYSTEM OFF ONCE IT HAS BEEN ENGAGED, RESULTING IN EITHER THE VEHICLE MAINTAINING ITS CURRENT SPEED OR POSSIBLY ACCELERATING.  ",
            "recallDate": "1/17/2018",
            "recallDateString": "17/01/2018",
            "recordNumber": 116660,
            "recallDateFormat": "2018-01-17T00:00:00"
          }, {
            "campaignNumber": "18V100000",
            "defectConsequence": "BEING ABLE TO SHIFT THE TRANSMISSION WITHOUT PUSHING THE BRAKE PEDAL AND/OR WITHOUT A KEY IN THE IGNITION CAN INCREASE THE RISK OF AN UNINTENDED VEHICLE ROLLAWAY THAT MAY RESULT IN PERSONAL INJURY OR A CRASH.",
            "defectCorrectiveAction": "CHRYSLER WILL NOTIFY OWNERS AND DEALERS WILL UPDATE THE BODY CONTROL MODULE SOFTWARE.  DEALERS WILL ALSO TEST THE BTSI OPERATION, REPLACING THE SOLENOID AS NECESSARY.  THE RECALL BEGAN FEBRUARY 26, 2018.  OWNERS MAY CONTACT CHRYSLER CUSTOMER SERVICE AT 1-800-853-1403.  CHRYSLER'S NUMBER FOR THIS RECALL IS U11.",
            "defectDescription": "CHRYSLER (FCA US LLC) IS RECALLING CERTAIN 2017-2018 RAM 1500, 2500, 3500, 3500 CAB CHASSIS, 4500 CAB CHASSIS, AND 5500 CAB CHASSIS VEHICLES, ALL EQUIPPED WITH A COLUMN SHIFTER.  PUSHING THE BRAKE PEDAL FOR PROLONGED PERIODS WHEN THE VEHICLE IS RUNNING AND IN PARK MAY CAUSE THE BRAKE TRANSMISSION SHIFT INTERLOCK (BTSI) PIN TO STICK IN THE OPEN POSITION.  WITH THE PIN IN THE OPEN POSITION, THE TRANSMISSION CAN BE SHIFTED OUT OF PARK INTO ANY GEAR WITHOUT PUSHING THE BRAKE PEDAL OR HAVING THE KEY IN THE IGNITION. ",
            "recallDate": "1/8/2018",
            "recallDateString": "08/01/2018",
            "recordNumber": 116655,
            "recallDateFormat": "2018-01-08T00:00:00"
          }, {
            "campaignNumber": "17V821000",
            "defectConsequence": "BEING ABLE TO SHIFT THE TRANSMISSION WITHOUT PUSHING THE BRAKE PEDAL AND/OR WITHOUT A KEY IN THE IGNITION CAN INCREASE THE RISK OF AN UNINTENDED VEHICLE ROLLAWAY THAT MAY RESULT IN PERSONAL INJURY OR A CRASH.",
            "defectCorrectiveAction": "CHRYSLER WILL NOTIFY OWNERS, AND DEALERS WILL UPDATE THE VEHICLE SOFTWARE, INSPECT THE BTSI, AND, AS NECESSARY, REPLACE IT, FREE OF CHARGE. THE RECALL BEGAN FEBRUARY 26, 2018.  OWNERS MAY CONTACT CHRYSLER CUSTOMER SERVICE AT 1-800-853-1403.  CHRYSLER'S NUMBER FOR THIS RECALL IS T79.",
            "defectDescription": "CHRYSLER (FCA US LLC) IS RECALLING CERTAIN 2016-2017 RAM 3500 CAB CHASSIS WITH A GROSS VEHICLE WEIGHT RATING (GVWR) OF LESS THAN 10,000 LBS, 2011-2017 RAM 3500, 4500 AND 5500 CAB CHASSIS VEHICLES, 2009-2017 RAM 1500 AND 2010-2017 RAM 2500 AND 3500 PICKUP TRUCKS, ALL EQUIPPED WITH A COLUMN SHIFTER.  PUSHING THE BRAKE PEDAL FOR PROLONGED PERIODS WHEN THE VEHICLE IS RUNNING AND IN PARK MAY CAUSE THE BRAKE TRANSMISSION SHIFT INTERLOCK (BTSI) PIN TO STICK IN THE OPEN POSITION.  WITH THE PIN IN THE OPEN POSITION, THE TRANSMISSION CAN BE SHIFTED OUT OF PARK INTO ANY GEAR WITHOUT PUSHING THE BRAKE PEDAL OR HAVING THE KEY IN THE IGNITION. ",
            "recallDate": "1/20/2017",
            "recallDateString": "20/01/2017",
            "recordNumber": 116661,
            "recallDateFormat": "2017-01-20T00:00:00"
          }, {
            "campaignNumber": "17V434000",
            "defectConsequence": "IN THE EVENT OF A ROLLOVER CRASH, LEAKING FUEL IN THE PRESENCE OF AN IGNITION SOURCE CAN INCREASE THE RISK OF A FIRE. ",
            "defectCorrectiveAction": "CHRYSLER WILL NOTIFY OWNERS, AND DEALERS WILL REPLACE THE FUEL TANKS, FREE OF CHARGE.  THE RECALL BEGAN ON AUGUST 10, 2017.  OWNERS MAY CONTACT CHRYSLER CUSTOMER SERVICE AT 1-800-853-1403.  CHRYSLER'S NUMBER FOR THIS RECALL IS T45.",
            "defectDescription": "CHRYSLER (FCA US LLC) IS RECALLING CERTAIN 2017 RAM 1500 TRUCKS.  THE FUEL TANKS IN THE AFFECTED VEHICLES MAY HAVE A BROKEN FUEL TANK CONTROL VALVE WHICH MIGHT LEAK FUEL IF THE VEHICLE WERE TO BECOME INVERTED.  AS SUCH, THESE VEHICLES FAIL TO COMPLY WITH THE REQUIREMENTS OF FEDERAL MOTOR VEHICLE SAFETY STANDARD (FMVSS) NUMBER 301, FUEL SYSTEM INTEGRITY.",
            "recallDate": "1/7/2017",
            "recallDateString": "07/01/2017",
            "recordNumber": 116657,
            "recallDateFormat": "2017-01-07T00:00:00"
          }, {
            "campaignNumber": "17V198000",
            "defectConsequence": "A BROKEN OR LOCKED UP DIFFERENTIAL MAY RESULT IN A LOSS OF MOTIVE POWER AND POSSIBLY A LOSS OF VEHICLE CONTROL.  EITHER SCENARIO INCREASES THE RISK OF A CRASH.",
            "defectCorrectiveAction": "CHRYSLER WILL NOTIFY OWNERS, AND DEALERS WILL INSPECT AND REPLACE THE DIFFERENTIAL RETAINING PIN, FREE OF CHARGE.  THE RECALL BEGAN APRIL 24, 2017.  OWNERS MAY CONTACT CHRYSLER CUSTOMER SERVICE AT 1-800-853-1403.  CHRYSLER'S NUMBER FOR THIS RECALL IS T20.",
            "defectDescription": "CHRYSLER (FCA US LLC) IS RECALLING CERTAIN 2016-2017 RAM 1500 TRUCKS.  THE DIFFERENTIAL PIN RETAINING SCREW MAY COME LOOSE WHILE DRIVING, POTENTIALLY CAUSING THE DIFFERENTIAL TO BREAK OR LOCK UP.",
            "recallDate": "1/23/2017",
            "recallDateString": "23/01/2017",
            "recordNumber": 116656,
            "recallDateFormat": "2017-01-23T00:00:00"
          }],
          "tsbCategories": [{
            "tsbs": [{
              "tsbId": 132370,
              "autoSystem": "",
              "description": "Flash: Powertrain Control Module (PCM) Updates",
              "issueDate": "2019-07-30T00:00:00",
              "issueDateString": "30/07/2019",
              "fileNamePDF": "00000000c0f09502",
              "manufacturerNumber": "18 017 19 REV. A",
              "tsbTypes": ["Technical"],
              "tsbUrl": "http://resources.innova.com/TSBFiles/132000/00000000c0f09502.pdf",
              "tsbCategories": [1, 7]
            }, {
              "tsbId": 121786,
              "autoSystem": "",
              "description": "Excessive Door Mirror Wind Noise",
              "issueDate": "2018-03-08T00:00:00",
              "issueDateString": "08/03/2018",
              "fileNamePDF": "00000000c0f090b3",
              "manufacturerNumber": "23 010 18",
              "tsbTypes": ["Technical", "Warranty", "Labor"],
              "tsbUrl": "http://resources.innova.com/TSBFiles/121000/00000000c0f090b3.pdf",
              "tsbCategories": [1, 2]
            }],
            "id": 1,
            "description": "Accessories and Fluids TSBs",
            "tsbCount": 2
          }, {
            "tsbs": [{
              "tsbId": 130051,
              "autoSystem": "",
              "description": "Flash: Powertrain Control Module (PCM) Updates",
              "issueDate": "2019-02-06T00:00:00",
              "issueDateString": "06/02/2019",
              "fileNamePDF": "00000000c0f093e2",
              "manufacturerNumber": "18 017 19",
              "tsbTypes": ["Technical", "Dealer Notification"],
              "tsbUrl": "http://resources.innova.com/TSBFiles/130000/00000000c0f093e2.pdf",
              "tsbCategories": [2, 9]
            }, {
              "tsbId": 126878,
              "autoSystem": "",
              "description": "Flash: Powertrain Control Module (PCM) Updates",
              "issueDate": "2018-10-12T00:00:00",
              "issueDateString": "12/10/2018",
              "fileNamePDF": "00000000c0f092ef",
              "manufacturerNumber": "18 030 18 REV. B",
              "tsbTypes": ["Technical", "Warranty", "Labor"],
              "tsbUrl": "http://resources.innova.com/TSBFiles/126000/00000000c0f092ef.pdf",
              "tsbCategories": [2, 5]
            }, {
              "tsbId": 126842,
              "autoSystem": "",
              "description": "HVAC Condenser Modulator O Ring Leaking",
              "issueDate": "2018-09-19T00:00:00",
              "issueDateString": "19/09/2018",
              "fileNamePDF": "00000000c0f092be",
              "manufacturerNumber": "24 010 18",
              "tsbTypes": ["Technical", "Warranty", "Labor"],
              "tsbUrl": "http://resources.innova.com/TSBFiles/126000/00000000c0f092be.pdf",
              "tsbCategories": [2, 10]
            }, {
              "tsbId": 126709,
              "autoSystem": "",
              "description": "Outside Power Fold Mirror Binding or Clicking at  Pivot",
              "issueDate": "2018-06-19T00:00:00",
              "issueDateString": "19/06/2018",
              "fileNamePDF": "00000000c0f0920c",
              "manufacturerNumber": "23 027 18",
              "tsbTypes": ["Technical", "Warranty", "Labor"],
              "tsbUrl": "http://resources.innova.com/TSBFiles/126000/00000000c0f0920c.pdf",
              "tsbCategories": [2]
            }, {
              "tsbId": 126582,
              "autoSystem": "",
              "description": "Flash: Instrument Panel Cluster (IPC) Enhancement",
              "issueDate": "2018-05-24T00:00:00",
              "issueDateString": "24/05/2018",
              "fileNamePDF": "00000000c0f0914a",
              "manufacturerNumber": "08 074 18",
              "tsbTypes": ["Technical", "Warranty", "Labor"],
              "tsbUrl": "http://resources.innova.com/TSBFiles/126000/00000000c0f0914a.pdf",
              "tsbCategories": [2]
            }, {
              "tsbId": 126644,
              "autoSystem": "",
              "description": "RJ3 and RJ4 Radio Enhancements",
              "issueDate": "2018-05-02T00:00:00",
              "issueDateString": "02/05/2018",
              "fileNamePDF": "00000000c0f091bb",
              "manufacturerNumber": "08 003 18 REV. B",
              "tsbTypes": ["Technical", "Warranty", "Labor"],
              "tsbUrl": "http://resources.innova.com/TSBFiles/126000/00000000c0f091bb.pdf",
              "tsbCategories": [2]
            }, {
              "tsbId": 121892,
              "autoSystem": "",
              "description": "Flash: Vehicle System Interface Module (VSIM) Enhancement",
              "issueDate": "2018-03-24T00:00:00",
              "issueDateString": "24/03/2018",
              "fileNamePDF": "00000000c0f0914b",
              "manufacturerNumber": "08 047 18",
              "tsbTypes": ["Technical", "Warranty", "Labor"],
              "tsbUrl": "http://resources.innova.com/TSBFiles/121000/00000000c0f0914b.pdf",
              "tsbCategories": [2, 5]
            }, {
              "tsbId": 121909,
              "autoSystem": "",
              "description": "Missing Floor Mats in Vehicles",
              "issueDate": "2018-03-09T00:00:00",
              "issueDateString": "09/03/2018",
              "fileNamePDF": "00000000c0f0916d",
              "manufacturerNumber": "23 008 18 REV. A",
              "tsbTypes": ["Technical", "Warranty", "Labor"],
              "tsbUrl": "http://resources.innova.com/TSBFiles/121000/00000000c0f0916d.pdf",
              "tsbCategories": [2]
            }, {
              "tsbId": 121786,
              "autoSystem": "",
              "description": "Excessive Door Mirror Wind Noise",
              "issueDate": "2018-03-08T00:00:00",
              "issueDateString": "08/03/2018",
              "fileNamePDF": "00000000c0f090b3",
              "manufacturerNumber": "23 010 18",
              "tsbTypes": ["Technical", "Warranty", "Labor"],
              "tsbUrl": "http://resources.innova.com/TSBFiles/121000/00000000c0f090b3.pdf",
              "tsbCategories": [1, 2]
            }, {
              "tsbId": 121855,
              "autoSystem": "",
              "description": "Missing Floor Mats in Vehicles",
              "issueDate": "2018-02-21T00:00:00",
              "issueDateString": "21/02/2018",
              "fileNamePDF": "00000000c0f09119",
              "manufacturerNumber": "23 008 18",
              "tsbTypes": ["Technical", "Warranty", "Labor"],
              "tsbUrl": "http://resources.innova.com/TSBFiles/121000/00000000c0f09119.pdf",
              "tsbCategories": [2]
            }, {
              "tsbId": 121757,
              "autoSystem": "",
              "description": "Gap at Center of Rear Door Handle  Bezel",
              "issueDate": "2017-12-16T00:00:00",
              "issueDateString": "16/12/2017",
              "fileNamePDF": "00000000c0f09090",
              "manufacturerNumber": "23 051 17",
              "tsbTypes": ["Technical", "Warranty", "Labor"],
              "tsbUrl": "http://resources.innova.com/TSBFiles/121000/00000000c0f09090.pdf",
              "tsbCategories": [2]
            }, {
              "tsbId": 121659,
              "autoSystem": "",
              "description": "Incorrect Tint on Backlite Glass",
              "issueDate": "2017-10-12T00:00:00",
              "issueDateString": "12/10/2017",
              "fileNamePDF": "00000000c0f09008",
              "manufacturerNumber": "23 045 17",
              "tsbTypes": ["Technical"],
              "tsbUrl": "http://resources.innova.com/TSBFiles/121000/00000000c0f09008.pdf",
              "tsbCategories": [2]
            }, {
              "tsbId": 121695,
              "autoSystem": "",
              "description": "Clicking Noise when Opening/Closing Power Sliding Backlite",
              "issueDate": "2017-09-09T00:00:00",
              "issueDateString": "09/09/2017",
              "fileNamePDF": "00000000c0f09034",
              "manufacturerNumber": "23 034 17 REV. A",
              "tsbTypes": ["Technical", "Warranty", "Labor"],
              "tsbUrl": "http://resources.innova.com/TSBFiles/121000/00000000c0f09034.pdf",
              "tsbCategories": [2, 5]
            }, {
              "tsbId": 121646,
              "autoSystem": "",
              "description": "Clicking Noise when Opening/Closing Power Sliding Backlite",
              "issueDate": "2017-09-06T00:00:00",
              "issueDateString": "06/09/2017",
              "fileNamePDF": "00000000c0f08ff8",
              "manufacturerNumber": "23 034 17",
              "tsbTypes": ["Technical", "Warranty", "Labor"],
              "tsbUrl": "http://resources.innova.com/TSBFiles/121000/00000000c0f08ff8.pdf",
              "tsbCategories": [2]
            }, {
              "tsbId": 121657,
              "autoSystem": "",
              "description": "Gap at Center Stack at the Instrument  Panel",
              "issueDate": "2017-09-02T00:00:00",
              "issueDateString": "02/09/2017",
              "fileNamePDF": "00000000c0f09004",
              "manufacturerNumber": "23 040 17",
              "tsbTypes": ["Technical", "Warranty", "Labor"],
              "tsbUrl": "http://resources.innova.com/TSBFiles/121000/00000000c0f09004.pdf",
              "tsbCategories": [2]
            }, {
              "tsbId": 121656,
              "autoSystem": "",
              "description": "Rear Door Fixed Glass Cover is Loose",
              "issueDate": "2017-09-02T00:00:00",
              "issueDateString": "02/09/2017",
              "fileNamePDF": "00000000c0f09003",
              "manufacturerNumber": "23 039 17",
              "tsbTypes": ["Technical", "Warranty", "Labor"],
              "tsbUrl": "http://resources.innova.com/TSBFiles/121000/00000000c0f09003.pdf",
              "tsbCategories": [2]
            }, {
              "tsbId": 121569,
              "autoSystem": "",
              "description": "Left Front Door Cup Holder Insert  Missing",
              "issueDate": "2017-07-08T00:00:00",
              "issueDateString": "08/07/2017",
              "fileNamePDF": "00000000c0f08f79",
              "manufacturerNumber": "23 032 17",
              "tsbTypes": ["Technical", "Warranty", "Labor"],
              "tsbUrl": "http://resources.innova.com/TSBFiles/121000/00000000c0f08f79.pdf",
              "tsbCategories": [2]
            }, {
              "tsbId": 121564,
              "autoSystem": "",
              "description": "Wheel Liner to Steel Bumper Slip Fit  Design",
              "issueDate": "2017-07-07T00:00:00",
              "issueDateString": "07/07/2017",
              "fileNamePDF": "00000000c0f08f6d",
              "manufacturerNumber": "23 031 17",
              "tsbTypes": ["Technical"],
              "tsbUrl": "http://resources.innova.com/TSBFiles/121000/00000000c0f08f6d.pdf",
              "tsbCategories": [2]
            }, {
              "tsbId": 117597,
              "autoSystem": "",
              "description": "Sublime Green Outside Door Handle Paint Adhesion Issue",
              "issueDate": "2017-06-01T00:00:00",
              "issueDateString": "01/06/2017",
              "fileNamePDF": "00000000c0f08e9d",
              "manufacturerNumber": "23 026 17",
              "tsbTypes": ["Technical", "Warranty", "Labor"],
              "tsbUrl": "http://resources.innova.com/TSBFiles/117000/00000000c0f08e9d.pdf",
              "tsbCategories": [2]
            }, {
              "tsbId": 117575,
              "autoSystem": "",
              "description": "Service Alignment Set To and Measurement Specifications",
              "issueDate": "2017-05-19T00:00:00",
              "issueDateString": "19/05/2017",
              "fileNamePDF": "000000003b9bdd9f",
              "manufacturerNumber": "23-025-17",
              "tsbTypes": ["Technical", "Warranty"],
              "tsbUrl": "http://resources.innova.com/TSBFiles/117000/000000003b9bdd9f.pdf",
              "tsbCategories": [2]
            }, {
              "tsbId": 117529,
              "autoSystem": "",
              "description": "Gap Between Door Trim Panel And Inner Belt Molding",
              "issueDate": "2017-04-08T00:00:00",
              "issueDateString": "08/04/2017",
              "fileNamePDF": "000000003b9bd871",
              "manufacturerNumber": "23-017-17 REV. A",
              "tsbTypes": ["Technical", "Warranty", "Labor"],
              "tsbUrl": "http://resources.innova.com/TSBFiles/117000/000000003b9bd871.pdf",
              "tsbCategories": [2]
            }, {
              "tsbId": 117514,
              "autoSystem": "",
              "description": "Gap Between Door Trim Panel And Inner Belt Molding",
              "issueDate": "2017-03-31T00:00:00",
              "issueDateString": "31/03/2017",
              "fileNamePDF": "000000003b9bd702",
              "manufacturerNumber": "23-017-17",
              "tsbTypes": ["Technical", "Warranty", "Labor"],
              "tsbUrl": "http://resources.innova.com/TSBFiles/117000/000000003b9bd702.pdf",
              "tsbCategories": [2]
            }, {
              "tsbId": 117496,
              "autoSystem": "",
              "description": "Failure Code Change",
              "issueDate": "2017-03-18T00:00:00",
              "issueDateString": "18/03/2017",
              "fileNamePDF": "000000003b9bd5a3",
              "manufacturerNumber": "04-001-17",
              "tsbTypes": ["Technical", "Dealer Notification", "Warranty"],
              "tsbUrl": "http://resources.innova.com/TSBFiles/117000/000000003b9bd5a3.pdf",
              "tsbCategories": [2, 5, 6, 7]
            }, {
              "tsbId": 117413,
              "autoSystem": "",
              "description": "Water Entering Passenger Side Windshield Area",
              "issueDate": "2017-01-21T00:00:00",
              "issueDateString": "21/01/2017",
              "fileNamePDF": "000000003b9bcd66",
              "manufacturerNumber": "23-003-17",
              "tsbTypes": ["Technical", "Warranty", "Labor"],
              "tsbUrl": "http://resources.innova.com/TSBFiles/117000/000000003b9bcd66.pdf",
              "tsbCategories": [2]
            }, {
              "tsbId": 115095,
              "autoSystem": "",
              "description": "Hemi Emblems Installed On Vehicles Equipped with A 3.6L Engine",
              "issueDate": "2016-11-15T00:00:00",
              "issueDateString": "15/11/2016",
              "fileNamePDF": "000000003b9bc614",
              "manufacturerNumber": "23-053-16",
              "tsbTypes": ["Technical", "Warranty", "Labor"],
              "tsbUrl": "http://resources.innova.com/TSBFiles/115000/000000003b9bc614.pdf",
              "tsbCategories": [2]
            }, {
              "tsbId": 115008,
              "autoSystem": "",
              "description": "Body Control Module (BCM) Re-configure",
              "issueDate": "2016-09-09T00:00:00",
              "issueDateString": "09/09/2016",
              "fileNamePDF": "000000003b9bbd99",
              "manufacturerNumber": "08-075-16",
              "tsbTypes": ["Technical", "Warranty", "Labor"],
              "tsbUrl": "http://resources.innova.com/TSBFiles/115000/000000003b9bbd99.pdf",
              "tsbCategories": [2]
            }],
            "id": 2,
            "description": "Body TSBs",
            "tsbCount": 26
          }, {
            "tsbs": [{
              "tsbId": 132319,
              "autoSystem": "",
              "description": "Rear Brake Noise",
              "issueDate": "2019-07-31T00:00:00",
              "issueDateString": "31/07/2019",
              "fileNamePDF": "00000000c0f0947d",
              "manufacturerNumber": "05 003 19",
              "tsbTypes": ["Technical"],
              "tsbUrl": "http://resources.innova.com/TSBFiles/132000/00000000c0f0947d.pdf",
              "tsbCategories": [3]
            }, {
              "tsbId": 112025,
              "autoSystem": "",
              "description": "Scan Tool Support Before and After Collision Repair",
              "issueDate": "2016-06-29T00:00:00",
              "issueDateString": "29/06/2016",
              "fileNamePDF": "000000003b9bb2cf",
              "manufacturerNumber": "31-002-16",
              "tsbTypes": ["Technical", "Information"],
              "tsbUrl": "http://resources.innova.com/TSBFiles/112000/000000003b9bb2cf.pdf",
              "tsbCategories": [3, 11, 12]
            }],
            "id": 3,
            "description": "Brake TSBs",
            "tsbCount": 2
          }, {
            "tsbs": [{
              "tsbId": 126878,
              "autoSystem": "",
              "description": "Flash: Powertrain Control Module (PCM) Updates",
              "issueDate": "2018-10-12T00:00:00",
              "issueDateString": "12/10/2018",
              "fileNamePDF": "00000000c0f092ef",
              "manufacturerNumber": "18 030 18 REV. B",
              "tsbTypes": ["Technical", "Warranty", "Labor"],
              "tsbUrl": "http://resources.innova.com/TSBFiles/126000/00000000c0f092ef.pdf",
              "tsbCategories": [2, 5]
            }, {
              "tsbId": 126627,
              "autoSystem": "",
              "description": "Headlamp Condensation and Fogging",
              "issueDate": "2018-04-19T00:00:00",
              "issueDateString": "19/04/2018",
              "fileNamePDF": "00000000c0f091a6",
              "manufacturerNumber": "23 015 18",
              "tsbTypes": ["Technical", "Warranty", "Labor"],
              "tsbUrl": "http://resources.innova.com/TSBFiles/126000/00000000c0f091a6.pdf",
              "tsbCategories": [5]
            }, {
              "tsbId": 121892,
              "autoSystem": "",
              "description": "Flash: Vehicle System Interface Module (VSIM) Enhancement",
              "issueDate": "2018-03-24T00:00:00",
              "issueDateString": "24/03/2018",
              "fileNamePDF": "00000000c0f0914b",
              "manufacturerNumber": "08 047 18",
              "tsbTypes": ["Technical", "Warranty", "Labor"],
              "tsbUrl": "http://resources.innova.com/TSBFiles/121000/00000000c0f0914b.pdf",
              "tsbCategories": [2, 5]
            }, {
              "tsbId": 121883,
              "autoSystem": "",
              "description": "Keyless Ignition Node (KIN) Replacement",
              "issueDate": "2018-02-22T00:00:00",
              "issueDateString": "22/02/2018",
              "fileNamePDF": "00000000c0f09140",
              "manufacturerNumber": "08 028 18",
              "tsbTypes": ["Technical", "Warranty", "Labor"],
              "tsbUrl": "http://resources.innova.com/TSBFiles/121000/00000000c0f09140.pdf",
              "tsbCategories": [5, 9]
            }, {
              "tsbId": 121766,
              "autoSystem": "",
              "description": "Keyless Ignition Node (KIN) Replacement",
              "issueDate": "2017-12-06T00:00:00",
              "issueDateString": "06/12/2017",
              "fileNamePDF": "00000000c0f0909a",
              "manufacturerNumber": "08 103 17",
              "tsbTypes": ["Technical", "Warranty", "Labor"],
              "tsbUrl": "http://resources.innova.com/TSBFiles/121000/00000000c0f0909a.pdf",
              "tsbCategories": [5, 9]
            }, {
              "tsbId": 121695,
              "autoSystem": "",
              "description": "Clicking Noise when Opening/Closing Power Sliding Backlite",
              "issueDate": "2017-09-09T00:00:00",
              "issueDateString": "09/09/2017",
              "fileNamePDF": "00000000c0f09034",
              "manufacturerNumber": "23 034 17 REV. A",
              "tsbTypes": ["Technical", "Warranty", "Labor"],
              "tsbUrl": "http://resources.innova.com/TSBFiles/121000/00000000c0f09034.pdf",
              "tsbCategories": [2, 5]
            }, {
              "tsbId": 121662,
              "autoSystem": "",
              "description": "Headlamps and Wheel Alignment Are Out of Adjustment",
              "issueDate": "2017-08-26T00:00:00",
              "issueDateString": "26/08/2017",
              "fileNamePDF": "00000000c0f0900c",
              "manufacturerNumber": "08 074 17 REV. A",
              "tsbTypes": ["Technical", "Warranty", "Labor"],
              "tsbUrl": "http://resources.innova.com/TSBFiles/121000/00000000c0f0900c.pdf",
              "tsbCategories": [5, 11]
            }, {
              "tsbId": 121600,
              "autoSystem": "",
              "description": "Headlamps and Wheel Alignment Are Out of Adjustment",
              "issueDate": "2017-08-04T00:00:00",
              "issueDateString": "04/08/2017",
              "fileNamePDF": "00000000c0f08fb4",
              "manufacturerNumber": "08 074 17",
              "tsbTypes": ["Technical", "Warranty", "Labor"],
              "tsbUrl": "http://resources.innova.com/TSBFiles/121000/00000000c0f08fb4.pdf",
              "tsbCategories": [5, 11]
            }, {
              "tsbId": 117496,
              "autoSystem": "",
              "description": "Failure Code Change",
              "issueDate": "2017-03-18T00:00:00",
              "issueDateString": "18/03/2017",
              "fileNamePDF": "000000003b9bd5a3",
              "manufacturerNumber": "04-001-17",
              "tsbTypes": ["Technical", "Dealer Notification", "Warranty"],
              "tsbUrl": "http://resources.innova.com/TSBFiles/117000/000000003b9bd5a3.pdf",
              "tsbCategories": [2, 5, 6, 7]
            }, {
              "tsbId": 115083,
              "autoSystem": "",
              "description": "Headlamps and Wheel Alignment Are Out of Adjustment.",
              "issueDate": "2016-10-29T00:00:00",
              "issueDateString": "29/10/2016",
              "fileNamePDF": "000000003b9bc42a",
              "manufacturerNumber": "08-085-16",
              "tsbTypes": ["Technical", "Warranty", "Labor"],
              "tsbUrl": "http://resources.innova.com/TSBFiles/115000/000000003b9bc42a.pdf",
              "tsbCategories": [5, 11]
            }],
            "id": 5,
            "description": "Electrical TSBs",
            "tsbCount": 10
          }, {
            "tsbs": [{
              "tsbId": 126602,
              "autoSystem": "",
              "description": "Flash: Powertrain Diagnostic and System Enhancements",
              "issueDate": "2018-03-28T00:00:00",
              "issueDateString": "28/03/2018",
              "fileNamePDF": "00000000c0f09185",
              "manufacturerNumber": "18 030 18",
              "tsbTypes": ["Technical", "Warranty", "Labor"],
              "tsbUrl": "http://resources.innova.com/TSBFiles/126000/00000000c0f09185.pdf",
              "tsbCategories": [6, 7]
            }, {
              "tsbId": 117627,
              "autoSystem": "",
              "description": "Flash: Powertrain Diagnostic and System Enhancements",
              "issueDate": "2017-06-23T00:00:00",
              "issueDateString": "23/06/2017",
              "fileNamePDF": "00000000c0f08f2f",
              "manufacturerNumber": "18 031 17 REV. B",
              "tsbTypes": ["Technical", "Warranty", "Labor"],
              "tsbUrl": "http://resources.innova.com/TSBFiles/117000/00000000c0f08f2f.pdf",
              "tsbCategories": [6, 7]
            }, {
              "tsbId": 117543,
              "autoSystem": "",
              "description": "Flash: Powertrain Diagnostic And System Enhancements",
              "issueDate": "2017-04-20T00:00:00",
              "issueDateString": "20/04/2017",
              "fileNamePDF": "000000003b9bd970",
              "manufacturerNumber": "18-031-17 REV. A",
              "tsbTypes": ["Technical", "Warranty", "Labor"],
              "tsbUrl": "http://resources.innova.com/TSBFiles/117000/000000003b9bd970.pdf",
              "tsbCategories": [6, 7]
            }, {
              "tsbId": 117511,
              "autoSystem": "",
              "description": "Flash: Powertrain Diagnostic And System Enhancements",
              "issueDate": "2017-03-31T00:00:00",
              "issueDateString": "31/03/2017",
              "fileNamePDF": "000000003b9bd6d7",
              "manufacturerNumber": "18-031-17",
              "tsbTypes": ["Technical", "Warranty", "Labor"],
              "tsbUrl": "http://resources.innova.com/TSBFiles/117000/000000003b9bd6d7.pdf",
              "tsbCategories": [6, 7]
            }, {
              "tsbId": 117496,
              "autoSystem": "",
              "description": "Failure Code Change",
              "issueDate": "2017-03-18T00:00:00",
              "issueDateString": "18/03/2017",
              "fileNamePDF": "000000003b9bd5a3",
              "manufacturerNumber": "04-001-17",
              "tsbTypes": ["Technical", "Dealer Notification", "Warranty"],
              "tsbUrl": "http://resources.innova.com/TSBFiles/117000/000000003b9bd5a3.pdf",
              "tsbCategories": [2, 5, 6, 7]
            }],
            "id": 6,
            "description": "Emission Control TSBs",
            "tsbCount": 5
          }, {
            "tsbs": [{
              "tsbId": 130051,
              "autoSystem": "",
              "description": "Flash: Powertrain Control Module (PCM) Updates",
              "issueDate": "2019-02-06T00:00:00",
              "issueDateString": "06/02/2019",
              "fileNamePDF": "00000000c0f093e2",
              "manufacturerNumber": "18 017 19",
              "tsbTypes": ["Technical", "Dealer Notification"],
              "tsbUrl": "http://resources.innova.com/TSBFiles/130000/00000000c0f093e2.pdf",
              "tsbCategories": [2, 9]
            }, {
              "tsbId": 121883,
              "autoSystem": "",
              "description": "Keyless Ignition Node (KIN) Replacement",
              "issueDate": "2018-02-22T00:00:00",
              "issueDateString": "22/02/2018",
              "fileNamePDF": "00000000c0f09140",
              "manufacturerNumber": "08 028 18",
              "tsbTypes": ["Technical", "Warranty", "Labor"],
              "tsbUrl": "http://resources.innova.com/TSBFiles/121000/00000000c0f09140.pdf",
              "tsbCategories": [5, 9]
            }, {
              "tsbId": 121772,
              "autoSystem": "",
              "description": "Fuel Tank Strap Frame Mounting Bracket  Corrosion",
              "issueDate": "2018-02-01T00:00:00",
              "issueDateString": "01/02/2018",
              "fileNamePDF": "00000000c0f090a3",
              "manufacturerNumber": "14 002 18",
              "tsbTypes": ["Technical", "Warranty", "Labor"],
              "tsbUrl": "http://resources.innova.com/TSBFiles/121000/00000000c0f090a3.pdf",
              "tsbCategories": [9]
            }, {
              "tsbId": 121766,
              "autoSystem": "",
              "description": "Keyless Ignition Node (KIN) Replacement",
              "issueDate": "2017-12-06T00:00:00",
              "issueDateString": "06/12/2017",
              "fileNamePDF": "00000000c0f0909a",
              "manufacturerNumber": "08 103 17",
              "tsbTypes": ["Technical", "Warranty", "Labor"],
              "tsbUrl": "http://resources.innova.com/TSBFiles/121000/00000000c0f0909a.pdf",
              "tsbCategories": [5, 9]
            }, {
              "tsbId": 121761,
              "autoSystem": "",
              "description": "Fuel Weeping from Number Three Cylinder Injector Return Hose",
              "issueDate": "2017-11-21T00:00:00",
              "issueDateString": "21/11/2017",
              "fileNamePDF": "00000000c0f09094",
              "manufacturerNumber": "14 003 17",
              "tsbTypes": ["Technical", "Warranty", "Labor"],
              "tsbUrl": "http://resources.innova.com/TSBFiles/121000/00000000c0f09094.pdf",
              "tsbCategories": [9]
            }],
            "id": 9,
            "description": "Fuel & Spark TSBs",
            "tsbCount": 5
          }, {
            "tsbs": [{
              "tsbId": 132322,
              "autoSystem": "",
              "description": "HVAC Condenser Modulator O Ring Leaking",
              "issueDate": "2019-09-24T00:00:00",
              "issueDateString": "24/09/2019",
              "fileNamePDF": "00000000c0f094a0",
              "manufacturerNumber": "24 011 19",
              "tsbTypes": ["Technical"],
              "tsbUrl": "http://resources.innova.com/TSBFiles/132000/00000000c0f094a0.pdf",
              "tsbCategories": [10]
            }, {
              "tsbId": 126842,
              "autoSystem": "",
              "description": "HVAC Condenser Modulator O Ring Leaking",
              "issueDate": "2018-09-19T00:00:00",
              "issueDateString": "19/09/2018",
              "fileNamePDF": "00000000c0f092be",
              "manufacturerNumber": "24 010 18",
              "tsbTypes": ["Technical", "Warranty", "Labor"],
              "tsbUrl": "http://resources.innova.com/TSBFiles/126000/00000000c0f092be.pdf",
              "tsbCategories": [2, 10]
            }, {
              "tsbId": 126786,
              "autoSystem": "",
              "description": "A/C Systems Contain Fluorescent Leak Check Dye in Factory  Fill",
              "issueDate": "2018-07-13T00:00:00",
              "issueDateString": "13/07/2018",
              "fileNamePDF": "00000000c0f0927a",
              "manufacturerNumber": "24 008 18",
              "tsbTypes": ["Technical"],
              "tsbUrl": "http://resources.innova.com/TSBFiles/126000/00000000c0f0927a.pdf",
              "tsbCategories": [10]
            }],
            "id": 10,
            "description": "HVAC TSBs",
            "tsbCount": 3
          }, {
            "tsbs": [{
              "tsbId": 132459,
              "autoSystem": "",
              "description": "GEN 2 and GEN 33.0L Oil Filter Cartridge Identification Differences",
              "issueDate": "2019-10-10T00:00:00",
              "issueDateString": "10/10/2019",
              "fileNamePDF": "00000000c0f09568",
              "manufacturerNumber": "09 003 19",
              "tsbTypes": ["Technical"],
              "tsbUrl": "http://resources.innova.com/TSBFiles/132000/00000000c0f09568.pdf",
              "tsbCategories": [7]
            }, {
              "tsbId": 132370,
              "autoSystem": "",
              "description": "Flash: Powertrain Control Module (PCM) Updates",
              "issueDate": "2019-07-30T00:00:00",
              "issueDateString": "30/07/2019",
              "fileNamePDF": "00000000c0f09502",
              "manufacturerNumber": "18 017 19 REV. A",
              "tsbTypes": ["Technical"],
              "tsbUrl": "http://resources.innova.com/TSBFiles/132000/00000000c0f09502.pdf",
              "tsbCategories": [1, 7]
            }, {
              "tsbId": 126719,
              "autoSystem": "",
              "description": "Flash: Transmission Diagnostic and Shift Enhancements",
              "issueDate": "2018-06-23T00:00:00",
              "issueDateString": "23/06/2018",
              "fileNamePDF": "00000000c0f09218",
              "manufacturerNumber": "21 039 18",
              "tsbTypes": ["Technical", "Warranty", "Labor"],
              "tsbUrl": "http://resources.innova.com/TSBFiles/126000/00000000c0f09218.pdf",
              "tsbCategories": [7]
            }, {
              "tsbId": 126602,
              "autoSystem": "",
              "description": "Flash: Powertrain Diagnostic and System Enhancements",
              "issueDate": "2018-03-28T00:00:00",
              "issueDateString": "28/03/2018",
              "fileNamePDF": "00000000c0f09185",
              "manufacturerNumber": "18 030 18",
              "tsbTypes": ["Technical", "Warranty", "Labor"],
              "tsbUrl": "http://resources.innova.com/TSBFiles/126000/00000000c0f09185.pdf",
              "tsbCategories": [6, 7]
            }, {
              "tsbId": 126605,
              "autoSystem": "",
              "description": "Flash: Transmission Diagnostic and Shift Enhancements",
              "issueDate": "2018-03-28T00:00:00",
              "issueDateString": "28/03/2018",
              "fileNamePDF": "00000000c0f09188",
              "manufacturerNumber": "21 018 18",
              "tsbTypes": ["Technical", "Warranty", "Labor"],
              "tsbUrl": "http://resources.innova.com/TSBFiles/126000/00000000c0f09188.pdf",
              "tsbCategories": [7]
            }, {
              "tsbId": 121637,
              "autoSystem": "",
              "description": "Tighten Transmission Extension Housing Bolts",
              "issueDate": "2017-08-18T00:00:00",
              "issueDateString": "18/08/2017",
              "fileNamePDF": "00000000c0f08fe8",
              "manufacturerNumber": "21 038 17",
              "tsbTypes": ["Technical", "Warranty", "Labor"],
              "tsbUrl": "http://resources.innova.com/TSBFiles/121000/00000000c0f08fe8.pdf",
              "tsbCategories": [7]
            }, {
              "tsbId": 121559,
              "autoSystem": "",
              "description": "Flash: Transmission Diagnostic and Shift Enhancements",
              "issueDate": "2017-07-07T00:00:00",
              "issueDateString": "07/07/2017",
              "fileNamePDF": "00000000c0f08f30",
              "manufacturerNumber": "21 013 17 REV. A",
              "tsbTypes": ["Technical", "Warranty", "Labor"],
              "tsbUrl": "http://resources.innova.com/TSBFiles/121000/00000000c0f08f30.pdf",
              "tsbCategories": [7]
            }, {
              "tsbId": 117633,
              "autoSystem": "",
              "description": "Replace Rear Axle",
              "issueDate": "2017-06-24T00:00:00",
              "issueDateString": "24/06/2017",
              "fileNamePDF": "00000000c0f08f3e",
              "manufacturerNumber": "03 002 17",
              "tsbTypes": ["Technical", "Warranty", "Labor"],
              "tsbUrl": "http://resources.innova.com/TSBFiles/117000/00000000c0f08f3e.pdf",
              "tsbCategories": [7]
            }, {
              "tsbId": 117627,
              "autoSystem": "",
              "description": "Flash: Powertrain Diagnostic and System Enhancements",
              "issueDate": "2017-06-23T00:00:00",
              "issueDateString": "23/06/2017",
              "fileNamePDF": "00000000c0f08f2f",
              "manufacturerNumber": "18 031 17 REV. B",
              "tsbTypes": ["Technical", "Warranty", "Labor"],
              "tsbUrl": "http://resources.innova.com/TSBFiles/117000/00000000c0f08f2f.pdf",
              "tsbCategories": [6, 7]
            }, {
              "tsbId": 117599,
              "autoSystem": "",
              "description": "Flash: Powertrain Diagnostic And System Enhancements",
              "issueDate": "2017-06-08T00:00:00",
              "issueDateString": "08/06/2017",
              "fileNamePDF": "00000000c0f08ea4",
              "manufacturerNumber": "18 055 17",
              "tsbTypes": ["Technical"],
              "tsbUrl": "http://resources.innova.com/TSBFiles/117000/00000000c0f08ea4.pdf",
              "tsbCategories": [7]
            }, {
              "tsbId": 117543,
              "autoSystem": "",
              "description": "Flash: Powertrain Diagnostic And System Enhancements",
              "issueDate": "2017-04-20T00:00:00",
              "issueDateString": "20/04/2017",
              "fileNamePDF": "000000003b9bd970",
              "manufacturerNumber": "18-031-17 REV. A",
              "tsbTypes": ["Technical", "Warranty", "Labor"],
              "tsbUrl": "http://resources.innova.com/TSBFiles/117000/000000003b9bd970.pdf",
              "tsbCategories": [6, 7]
            }, {
              "tsbId": 117511,
              "autoSystem": "",
              "description": "Flash: Powertrain Diagnostic And System Enhancements",
              "issueDate": "2017-03-31T00:00:00",
              "issueDateString": "31/03/2017",
              "fileNamePDF": "000000003b9bd6d7",
              "manufacturerNumber": "18-031-17",
              "tsbTypes": ["Technical", "Warranty", "Labor"],
              "tsbUrl": "http://resources.innova.com/TSBFiles/117000/000000003b9bd6d7.pdf",
              "tsbCategories": [6, 7]
            }, {
              "tsbId": 117510,
              "autoSystem": "",
              "description": "Flash: Transmission Diagnostic And Shift Enhancements",
              "issueDate": "2017-03-31T00:00:00",
              "issueDateString": "31/03/2017",
              "fileNamePDF": "000000003b9bd6cc",
              "manufacturerNumber": "21-013-17",
              "tsbTypes": ["Technical", "Warranty", "Labor"],
              "tsbUrl": "http://resources.innova.com/TSBFiles/117000/000000003b9bd6cc.pdf",
              "tsbCategories": [7]
            }, {
              "tsbId": 117496,
              "autoSystem": "",
              "description": "Failure Code Change",
              "issueDate": "2017-03-18T00:00:00",
              "issueDateString": "18/03/2017",
              "fileNamePDF": "000000003b9bd5a3",
              "manufacturerNumber": "04-001-17",
              "tsbTypes": ["Technical", "Dealer Notification", "Warranty"],
              "tsbUrl": "http://resources.innova.com/TSBFiles/117000/000000003b9bd5a3.pdf",
              "tsbCategories": [2, 5, 6, 7]
            }, {
              "tsbId": 117422,
              "autoSystem": "",
              "description": "Replacement of Solenoid Pack in Transmission",
              "issueDate": "2017-01-31T00:00:00",
              "issueDateString": "31/01/2017",
              "fileNamePDF": "000000003b9bce57",
              "manufacturerNumber": "21-004-17",
              "tsbTypes": ["Technical", "Warranty", "Labor"],
              "tsbUrl": "http://resources.innova.com/TSBFiles/117000/000000003b9bce57.pdf",
              "tsbCategories": [7]
            }],
            "id": 7,
            "description": "Powertrain TSBs",
            "tsbCount": 15
          }, {
            "tsbs": [{
              "tsbId": 121662,
              "autoSystem": "",
              "description": "Headlamps and Wheel Alignment Are Out of Adjustment",
              "issueDate": "2017-08-26T00:00:00",
              "issueDateString": "26/08/2017",
              "fileNamePDF": "00000000c0f0900c",
              "manufacturerNumber": "08 074 17 REV. A",
              "tsbTypes": ["Technical", "Warranty", "Labor"],
              "tsbUrl": "http://resources.innova.com/TSBFiles/121000/00000000c0f0900c.pdf",
              "tsbCategories": [5, 11]
            }, {
              "tsbId": 121600,
              "autoSystem": "",
              "description": "Headlamps and Wheel Alignment Are Out of Adjustment",
              "issueDate": "2017-08-04T00:00:00",
              "issueDateString": "04/08/2017",
              "fileNamePDF": "00000000c0f08fb4",
              "manufacturerNumber": "08 074 17",
              "tsbTypes": ["Technical", "Warranty", "Labor"],
              "tsbUrl": "http://resources.innova.com/TSBFiles/121000/00000000c0f08fb4.pdf",
              "tsbCategories": [5, 11]
            }, {
              "tsbId": 117565,
              "autoSystem": "",
              "description": "Vehicle Pulls or Leads Left",
              "issueDate": "2017-05-13T00:00:00",
              "issueDateString": "13/05/2017",
              "fileNamePDF": "000000003b9bdcf7",
              "manufacturerNumber": "02-005-17",
              "tsbTypes": ["Technical", "Warranty", "Labor"],
              "tsbUrl": "http://resources.innova.com/TSBFiles/117000/000000003b9bdcf7.pdf",
              "tsbCategories": [11]
            }, {
              "tsbId": 117428,
              "autoSystem": "",
              "description": "Vehicle Pulls or Leads Right or Left",
              "issueDate": "2017-02-03T00:00:00",
              "issueDateString": "03/02/2017",
              "fileNamePDF": "000000003b9bcf35",
              "manufacturerNumber": "02-002-17 REV. A",
              "tsbTypes": ["Technical", "Warranty", "Labor"],
              "tsbUrl": "http://resources.innova.com/TSBFiles/117000/000000003b9bcf35.pdf",
              "tsbCategories": [11]
            }, {
              "tsbId": 117407,
              "autoSystem": "",
              "description": "Vehicle Pulls or Leads Right or Left",
              "issueDate": "2017-01-20T00:00:00",
              "issueDateString": "20/01/2017",
              "fileNamePDF": "000000003b9bcd29",
              "manufacturerNumber": "02-002-17",
              "tsbTypes": ["Technical", "Warranty", "Labor"],
              "tsbUrl": "http://resources.innova.com/TSBFiles/117000/000000003b9bcd29.pdf",
              "tsbCategories": [11]
            }, {
              "tsbId": 115083,
              "autoSystem": "",
              "description": "Headlamps and Wheel Alignment Are Out of Adjustment.",
              "issueDate": "2016-10-29T00:00:00",
              "issueDateString": "29/10/2016",
              "fileNamePDF": "000000003b9bc42a",
              "manufacturerNumber": "08-085-16",
              "tsbTypes": ["Technical", "Warranty", "Labor"],
              "tsbUrl": "http://resources.innova.com/TSBFiles/115000/000000003b9bc42a.pdf",
              "tsbCategories": [5, 11]
            }, {
              "tsbId": 112025,
              "autoSystem": "",
              "description": "Scan Tool Support Before and After Collision Repair",
              "issueDate": "2016-06-29T00:00:00",
              "issueDateString": "29/06/2016",
              "fileNamePDF": "000000003b9bb2cf",
              "manufacturerNumber": "31-002-16",
              "tsbTypes": ["Technical", "Information"],
              "tsbUrl": "http://resources.innova.com/TSBFiles/112000/000000003b9bb2cf.pdf",
              "tsbCategories": [3, 11, 12]
            }],
            "id": 11,
            "description": "Steering & Suspension TSBs",
            "tsbCount": 7
          }, {
            "tsbs": [{
              "tsbId": 121880,
              "autoSystem": "",
              "description": "RA3 and RA4 Radio Enhancements",
              "issueDate": "2018-02-14T00:00:00",
              "issueDateString": "14/02/2018",
              "fileNamePDF": "00000000c0f0913a",
              "manufacturerNumber": "08 025 18",
              "tsbTypes": ["Technical", "Warranty", "Labor"],
              "tsbUrl": "http://resources.innova.com/TSBFiles/121000/00000000c0f0913a.pdf",
              "tsbCategories": [12]
            }, {
              "tsbId": 121673,
              "autoSystem": "",
              "description": "RA3 and RA4 Radio Over the Air Software  Updates",
              "issueDate": "2017-09-08T00:00:00",
              "issueDateString": "08/09/2017",
              "fileNamePDF": "00000000c0f09018",
              "manufacturerNumber": "08 028 17 REV. B",
              "tsbTypes": ["Technical"],
              "tsbUrl": "http://resources.innova.com/TSBFiles/121000/00000000c0f09018.pdf",
              "tsbCategories": [12]
            }, {
              "tsbId": 121607,
              "autoSystem": "",
              "description": "RA3 and RA4 Radio Enhancements",
              "issueDate": "2017-07-15T00:00:00",
              "issueDateString": "15/07/2017",
              "fileNamePDF": "00000000c0f08fbc",
              "manufacturerNumber": "08 053 17 REV. A",
              "tsbTypes": ["Technical", "Warranty", "Labor"],
              "tsbUrl": "http://resources.innova.com/TSBFiles/121000/00000000c0f08fbc.pdf",
              "tsbCategories": [12]
            }, {
              "tsbId": 112025,
              "autoSystem": "",
              "description": "Scan Tool Support Before and After Collision Repair",
              "issueDate": "2016-06-29T00:00:00",
              "issueDateString": "29/06/2016",
              "fileNamePDF": "000000003b9bb2cf",
              "manufacturerNumber": "31-002-16",
              "tsbTypes": ["Technical", "Information"],
              "tsbUrl": "http://resources.innova.com/TSBFiles/112000/000000003b9bb2cf.pdf",
              "tsbCategories": [3, 11, 12]
            }],
            "id": 12,
            "description": "Tools & Hardware TSBs",
            "tsbCount": 4
          }, {
            "tsbs": [{
              "tsbId": 111554,
              "autoSystem": "",
              "description": "Windshield Wiper Blade/Element Maintenance",
              "issueDate": "2015-10-14T00:00:00",
              "issueDateString": "14/10/2015",
              "fileNamePDF": "000000003b9b810f",
              "manufacturerNumber": "23-037-15",
              "tsbTypes": ["Technical", "Information"],
              "tsbUrl": "http://resources.innova.com/TSBFiles/111000/000000003b9b810f.pdf",
              "tsbCategories": [13]
            }],
            "id": 13,
            "description": "Wiper and Washer TSBs",
            "tsbCount": 1
          }]
        }
      };
      /***/
    },

    /***/
    34932:
    /*!************************************!*\
      !*** ./src/app/models/app.enum.ts ***!
      \************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EnumConnectionEnternet": function EnumConnectionEnternet() {
          return (
            /* binding */
            _EnumConnectionEnternet
          );
        },

        /* harmony export */
        "EnumGroupQuickScan": function EnumGroupQuickScan() {
          return (
            /* binding */
            _EnumGroupQuickScan
          );
        },

        /* harmony export */
        "EnumAppDataKey": function EnumAppDataKey() {
          return (
            /* binding */
            _EnumAppDataKey
          );
        },

        /* harmony export */
        "EnumQuickScan": function EnumQuickScan() {
          return (
            /* binding */
            _EnumQuickScan
          );
        },

        /* harmony export */
        "QuickScanSetting": function QuickScanSetting() {
          return (
            /* binding */
            _QuickScanSetting
          );
        },

        /* harmony export */
        "EnumLocalStorage": function EnumLocalStorage() {
          return (
            /* binding */
            _EnumLocalStorage
          );
        },

        /* harmony export */
        "EnumAppEvent": function EnumAppEvent() {
          return (
            /* binding */
            _EnumAppEvent
          );
        },

        /* harmony export */
        "SideBarScan": function SideBarScan() {
          return (
            /* binding */
            _SideBarScan
          );
        },

        /* harmony export */
        "EnumLedStatus": function EnumLedStatus() {
          return (
            /* binding */
            _EnumLedStatus
          );
        },

        /* harmony export */
        "EnumMonitorStatus": function EnumMonitorStatus() {
          return (
            /* binding */
            _EnumMonitorStatus
          );
        },

        /* harmony export */
        "ScanningType": function ScanningType() {
          return (
            /* binding */
            _ScanningType
          );
        },

        /* harmony export */
        "ScanSettingItem": function ScanSettingItem() {
          return (
            /* binding */
            _ScanSettingItem
          );
        },

        /* harmony export */
        "SettingItem": function SettingItem() {
          return (
            /* binding */
            _SettingItem
          );
        },

        /* harmony export */
        "ModuleReportFailed": function ModuleReportFailed() {
          return (
            /* binding */
            _ModuleReportFailed
          );
        },

        /* harmony export */
        "SeverityLevel": function SeverityLevel() {
          return (
            /* binding */
            _SeverityLevel
          );
        },

        /* harmony export */
        "EnumEraseSetting": function EnumEraseSetting() {
          return (
            /* binding */
            _EnumEraseSetting
          );
        },

        /* harmony export */
        "EraseSetting": function EraseSetting() {
          return (
            /* binding */
            _EraseSetting
          );
        },

        /* harmony export */
        "Status": function Status() {
          return (
            /* binding */
            _Status
          );
        },

        /* harmony export */
        "SettingModalStatus": function SettingModalStatus() {
          return (
            /* binding */
            _SettingModalStatus
          );
        },

        /* harmony export */
        "TypeSearchDLC": function TypeSearchDLC() {
          return (
            /* binding */
            _TypeSearchDLC
          );
        },

        /* harmony export */
        "PrintType": function PrintType() {
          return (
            /* binding */
            _PrintType
          );
        },

        /* harmony export */
        "DateFormat": function DateFormat() {
          return (
            /* binding */
            _DateFormat
          );
        },

        /* harmony export */
        "TimeFormat": function TimeFormat() {
          return (
            /* binding */
            _TimeFormat
          );
        },

        /* harmony export */
        "DateTimeFormat": function DateTimeFormat() {
          return (
            /* binding */
            _DateTimeFormat
          );
        },

        /* harmony export */
        "EnumWarningLightStartus": function EnumWarningLightStartus() {
          return (
            /* binding */
            _EnumWarningLightStartus
          );
        },

        /* harmony export */
        "EnumConnectionWifi": function EnumConnectionWifi() {
          return (
            /* binding */
            _EnumConnectionWifi
          );
        },

        /* harmony export */
        "EnumMessageBrakeLife": function EnumMessageBrakeLife() {
          return (
            /* binding */
            _EnumMessageBrakeLife
          );
        },

        /* harmony export */
        "EnumMessageOilLife": function EnumMessageOilLife() {
          return (
            /* binding */
            _EnumMessageOilLife
          );
        },

        /* harmony export */
        "warningLightIndex": function warningLightIndex() {
          return (
            /* binding */
            _warningLightIndex
          );
        },

        /* harmony export */
        "LanguageApp": function LanguageApp() {
          return (
            /* binding */
            _LanguageApp
          );
        },

        /* harmony export */
        "StatesUSA": function StatesUSA() {
          return (
            /* binding */
            _StatesUSA
          );
        },

        /* harmony export */
        "EnumRetailers": function EnumRetailers() {
          return (
            /* binding */
            _EnumRetailers
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _services_innova_vci_service_src_standard_enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../services/innova-vci-service/src/standard/enums */
      13930);

      var _EnumConnectionEnternet;

      (function (EnumConnectionEnternet) {
        EnumConnectionEnternet["CONNECTED"] = "connected";
        EnumConnectionEnternet["DISCONNECTED"] = "disconnected";
      })(_EnumConnectionEnternet || (_EnumConnectionEnternet = {}));

      var _EnumGroupQuickScan = {
        General: 'General Information',
        Enhanced: 'Enhanced Information',
        Service: 'Service Information'
      };

      var _EnumAppDataKey;

      (function (EnumAppDataKey) {
        EnumAppDataKey["Mileage"] = "Mileage";
        EnumAppDataKey["InternetConnectionType"] = "InternetConnectionType";
        EnumAppDataKey["IsFirstTime"] = "IsFirstTime";
        EnumAppDataKey["QuickScanSettings"] = "QuickScanSettings";
        EnumAppDataKey["ReportDetails"] = "ReportDetails";
        EnumAppDataKey["ReportId"] = "ReportId";
        EnumAppDataKey["ScanningType"] = "ScanningType";
        EnumAppDataKey["SelectedDiagnosticsModule"] = "SelectedDiagnosticsModule";
        EnumAppDataKey["SpecialTestIntruction"] = "SpecialTestIntruction";
        EnumAppDataKey["SupportedLiveDataPIDs"] = "SupportedLiveDataPIDs";
        EnumAppDataKey["SelectedLiveDataPIDs"] = "SelectedLiveDataPIDs";
        EnumAppDataKey["LiveDataRecordsList"] = "LiveDataRecordsList";
        EnumAppDataKey["LiveDataRecordEntry"] = "LiveDataRecordEntry";
        EnumAppDataKey["InfoVehicleConnected"] = "InfoVehicleConnected";
        EnumAppDataKey["InfoToolConnected"] = "InfoToolConnected";
        EnumAppDataKey["Reports"] = "Reports";
        EnumAppDataKey["HistoryReport"] = "HistoryReport";
        EnumAppDataKey["ListMake"] = "ListMake";
        EnumAppDataKey["UpgradeMeta"] = "UpgradeMeta";
        EnumAppDataKey["UpdateAvailable"] = "UpdateAvailable";
        EnumAppDataKey["UpdateVCIAvailable"] = "UpdateVCIAvailable";
        EnumAppDataKey["CheckUpdate"] = "CheckUpdate";
        EnumAppDataKey["SupportedModulesData"] = "SupportedModulesData";
        EnumAppDataKey["AppRegional"] = "AppRegional";
        EnumAppDataKey["AppLanguage"] = "AppLanguage";
        EnumAppDataKey["BatteryStatus"] = "BatteryStatus";
        EnumAppDataKey["SkipDeviceAddresses"] = "SkipDeviceAddresses";
        EnumAppDataKey["TimeAwake"] = "TimeAwake";
        EnumAppDataKey["TimeShutdown"] = "TimeShutdown";
        EnumAppDataKey["IsEnableWifi"] = "IsEnableWifi";
        EnumAppDataKey["CurrentRoutePath"] = "CurrentRoutePath";
        EnumAppDataKey["DelayTimeReport"] = "DelayTimeReport";
      })(_EnumAppDataKey || (_EnumAppDataKey = {}));

      var _EnumQuickScan = {
        Full: 'Full Network Scan',
        Powertrain: 'Powertrain DTCs',
        ABS: 'ABS Results',
        SRS: 'SRS Results',
        Odometer: 'Odometer',
        BatteryVoltage: 'Battery Voltage',
        WarningLightStatus: 'Warning Light Status',
        EnhancedDTCResults: 'Enhanced DTC Results',
        TPMSReading: 'TPMS Reading',
        OilLevel: 'Oil Level',
        OilLife: 'Oil Life',
        CoolantLevel: 'Coolant Level',
        BrakePadLife: 'Brake Pad Life',
        ScheduledMaintenance: 'Scheduled Maintenance',
        PredictedFailures: 'Predicted Failures',
        VehicleRecalls: 'Vehicle Recalls',
        TSBs: 'TSBs',
        VIN: 'VIN and Vehicle Information',
        IMReadiness: 'I/M Readiness',
        CodeSeverity: 'Code Severity',
        DiagnosticRoutine: 'Diagnostic Routine',
        VerifiedFix: 'Verified Fix',
        FreezeFrame: 'Freeze Frame',
        ServiceMaintenance: 'Service Maintenance',
        Warranty: 'Warranty'
      };
      var _QuickScanSetting = [{
        id: 0,
        name: _EnumGroupQuickScan.Enhanced,
        data: [{
          id: 0,
          name: _EnumQuickScan.VIN,
          enabled: true
        }, {
          id: 1,
          name: _EnumQuickScan.Odometer,
          enabled: true,
          ofmPid: 1027
        }, {
          id: 2,
          name: _EnumQuickScan.IMReadiness,
          enabled: true
        }, {
          id: 3,
          name: _EnumQuickScan.Powertrain,
          enabled: true,
          group: _services_innova_vci_service_src_standard_enums__WEBPACK_IMPORTED_MODULE_0__.enumInnovagroup.einnovagroup_GROUP_ENH_PCM
        }, // { id: 4, name: EnumQuickScan.CodeSeverity , enabled: true },
        {
          id: 4,
          name: _EnumQuickScan.DiagnosticRoutine,
          enabled: true
        }, {
          id: 5,
          name: _EnumQuickScan.BatteryVoltage,
          enabled: false
        }, {
          id: 6,
          name: _EnumQuickScan.VerifiedFix,
          enabled: false
        }, {
          id: 7,
          name: _EnumQuickScan.FreezeFrame,
          enabled: true
        }, {
          id: 8,
          name: _EnumQuickScan.WarningLightStatus,
          enabled: true,
          ofmPid: 1132
        }]
      }, {
        id: 1,
        name: _EnumGroupQuickScan.General,
        data: [{
          id: 0,
          name: _EnumQuickScan.EnhancedDTCResults,
          enabled: false,
          group: [_services_innova_vci_service_src_standard_enums__WEBPACK_IMPORTED_MODULE_0__.enumInnovagroup.einnovagroup_GROUP_ENH_ECM, _services_innova_vci_service_src_standard_enums__WEBPACK_IMPORTED_MODULE_0__.enumInnovagroup.einnovagroup_GROUP_ENH_TCM]
        }, {
          id: 1,
          name: _EnumQuickScan.ABS,
          enabled: true,
          group: _services_innova_vci_service_src_standard_enums__WEBPACK_IMPORTED_MODULE_0__.enumInnovagroup.einnovagroup_GROUP_ABS
        }, {
          id: 2,
          name: _EnumQuickScan.SRS,
          enabled: true,
          group: _services_innova_vci_service_src_standard_enums__WEBPACK_IMPORTED_MODULE_0__.enumInnovagroup.einnovagroup_GROUP_SRS
        }, {
          id: 3,
          name: _EnumQuickScan.Full,
          enabled: false
        }, {
          id: 4,
          name: _EnumQuickScan.TPMSReading,
          enabled: false
        }, {
          id: 5,
          name: _EnumQuickScan.OilLife,
          enabled: false,
          ofmPid: 1053
        }, {
          id: 6,
          name: _EnumQuickScan.CoolantLevel,
          enabled: false,
          ofmPid: 1131
        }, {
          id: 7,
          name: _EnumQuickScan.BrakePadLife,
          enabled: false,
          ofmPid: 1049
        }]
      }, {
        id: 2,
        name: _EnumGroupQuickScan.Service,
        data: [{
          id: 0,
          name: _EnumQuickScan.ServiceMaintenance,
          enabled: false
        }, {
          id: 1,
          name: _EnumQuickScan.PredictedFailures,
          enabled: false
        }, {
          id: 2,
          name: _EnumQuickScan.VehicleRecalls,
          enabled: false
        }, {
          id: 3,
          name: _EnumQuickScan.TSBs,
          enabled: false
        }, {
          id: 4,
          name: _EnumQuickScan.OilLevel,
          enabled: false,
          ofmPid: 1079
        }, {
          id: 5,
          name: _EnumQuickScan.Warranty,
          enabled: false
        }]
      }];

      var _EnumLocalStorage;

      (function (EnumLocalStorage) {
        EnumLocalStorage["TokenKey"] = "TokenKey";
        EnumLocalStorage["UserInfo"] = "UserInfo";
        EnumLocalStorage["LastLogInTime"] = "LastLogInTime";
        EnumLocalStorage["UsbProductId"] = "UsbProductId";
        EnumLocalStorage["ScanSetting"] = "ScanSetting";
        EnumLocalStorage["Retailer"] = "Retailer";
        EnumLocalStorage["ScanningType"] = "ScanningType";
        EnumLocalStorage["DriveCycles"] = "DriveCycles";
        EnumLocalStorage["FormatDate"] = "FormatDate";
        EnumLocalStorage["FormatTime"] = "FormatTime";
        EnumLocalStorage["EmailSupport"] = "EmailSupport";
        EnumLocalStorage["RecentVINScanned"] = "RecentVINScanned";
        EnumLocalStorage["RecentMileage"] = "RecentMileage";
        EnumLocalStorage["AgreePolicies"] = "AgreePolicies";
        EnumLocalStorage["SkipToolUpdatingAt"] = "SkipToolUpdatingAt";
        EnumLocalStorage["FirstDateOff"] = "FirstDateOff";
        EnumLocalStorage["VCIResponse"] = "VCIResponse";
        EnumLocalStorage["SupportedModulesData"] = "SupportedModulesData";
        EnumLocalStorage["AppRegional"] = "AppRegional";
        EnumLocalStorage["AppLanguage"] = "AppLanguage";
        EnumLocalStorage["DateSetting"] = "DateSetting";
        EnumLocalStorage["TimeSetting"] = "TimeSetting";
        EnumLocalStorage["TimeAwake"] = "TimeAwake";
        EnumLocalStorage["SkipUpdateNotice"] = "SkipUpdateNotice";
        EnumLocalStorage["TimeShutdown"] = "TimeShutdown";
        EnumLocalStorage["IsEnableWifi"] = "IsEnableWifi";
        EnumLocalStorage["PhoneNumberSupport"] = "PhoneNumberSupport";
        EnumLocalStorage["Brightness"] = "Brightness";
        EnumLocalStorage["LightTheme"] = "LightTheme";
      })(_EnumLocalStorage || (_EnumLocalStorage = {}));

      var _EnumAppEvent;

      (function (EnumAppEvent) {
        EnumAppEvent["LOGGER"] = "Logger";
        EnumAppEvent["UpdateLiveDataSnapshot"] = "UpdateLiveDataSnapshot";
        EnumAppEvent["UpdateAvailable"] = "UpdateAvailable";
        EnumAppEvent["SidebarName"] = "SidebarName";
        EnumAppEvent["ReportDetailsIsUpdated"] = "ReportDetailsIsUpdated";
        EnumAppEvent["ShowUpdateNotice"] = "ShowUpdateNotice";
        EnumAppEvent["ShowModalReminder"] = "ShowModalReminder";
        EnumAppEvent["CheckVCIUpdate"] = "CheckVCIUpdate";
        EnumAppEvent["UpdateVCIAvailable"] = "UpdateVCIAvailable";
        EnumAppEvent["ShowUpdateVCINotice"] = "ShowUpdateVCINotice";
        EnumAppEvent["InfoVehicleConnected"] = "InfoVehicleConnected";
        EnumAppEvent["WatchVCIConnection"] = "WatchVCIConnection";
        EnumAppEvent["InfoToolConnected"] = "InfoToolConnected";
        EnumAppEvent["ForceVCIUpdate"] = "ForceVCIUpdate";
        EnumAppEvent["CheckIfNeedResetIgnition"] = "CheckIfNeedResetIgnition";
        EnumAppEvent["CheckIfNeedResetIgnitionDone"] = "CheckIfNeedResetIgnitionDone";
        EnumAppEvent["ScreenOnOff"] = "ScreenOnOff";
        EnumAppEvent["IsWifiEnabled"] = "IsWifiEnabled";
        EnumAppEvent["IsInternetConnected"] = "IsInternetConnected";
        EnumAppEvent["DeviceWakeUp"] = "DeviceWakeUp";
        EnumAppEvent["ReadVciLog"] = "ReadVciLog";
        EnumAppEvent["LightTheme"] = "LightTheme";
        EnumAppEvent["GotVIN"] = "GotVIN";
      })(_EnumAppEvent || (_EnumAppEvent = {}));

      var _SideBarScan;

      (function (SideBarScan) {
        SideBarScan["QUICKSCAN"] = "Custom Scan";
        SideBarScan["GLOBALOBD"] = "OBD2 Diagnostics";
        SideBarScan["VEHICLEDIANOSTICS"] = "Vehicle Diagnostics";
      })(_SideBarScan || (_SideBarScan = {}));

      var _EnumLedStatus;

      (function (EnumLedStatus) {
        EnumLedStatus[EnumLedStatus["Off"] = 0] = "Off";
        EnumLedStatus[EnumLedStatus["Green"] = 1] = "Green";
        EnumLedStatus[EnumLedStatus["Yellow"] = 2] = "Yellow";
        EnumLedStatus[EnumLedStatus["Red"] = 3] = "Red";
      })(_EnumLedStatus || (_EnumLedStatus = {}));

      var _EnumMonitorStatus;

      (function (EnumMonitorStatus) {
        EnumMonitorStatus[EnumMonitorStatus["NotSupported"] = 1] = "NotSupported";
        EnumMonitorStatus[EnumMonitorStatus["Incompleted"] = 2] = "Incompleted";
        EnumMonitorStatus[EnumMonitorStatus["Completed"] = 3] = "Completed";
      })(_EnumMonitorStatus || (_EnumMonitorStatus = {}));

      var _ScanningType;

      (function (ScanningType) {
        ScanningType["QuickScan"] = "quick-scan";
        ScanningType["GlobalOBD"] = "global-obd";
        ScanningType["VehicleDiagnostics"] = "vehicle-diagnostics";
        ScanningType["NetworkScan"] = "network-scan";
        ScanningType["ServiceReset"] = "ServiceReset";
      })(_ScanningType || (_ScanningType = {})); // handle all route path in app --


      var _ScanSettingItem = /*#__PURE__*/_createClass(function _ScanSettingItem() {
        _classCallCheck(this, _ScanSettingItem);
      });

      var _SettingItem = /*#__PURE__*/_createClass(function _SettingItem() {
        _classCallCheck(this, _SettingItem);
      });

      var _ModuleReportFailed;

      (function (ModuleReportFailed) {
        ModuleReportFailed[ModuleReportFailed["powertrain"] = 0] = "powertrain";
        ModuleReportFailed[ModuleReportFailed["srs"] = 1] = "srs";
        ModuleReportFailed[ModuleReportFailed["abs"] = 2] = "abs";
        ModuleReportFailed[ModuleReportFailed["other"] = 3] = "other";
      })(_ModuleReportFailed || (_ModuleReportFailed = {}));

      var _SeverityLevel;

      (function (SeverityLevel) {
        SeverityLevel[SeverityLevel["low"] = 0] = "low";
        SeverityLevel[SeverityLevel["medium"] = 1] = "medium";
        SeverityLevel[SeverityLevel["high"] = 2] = "high";
      })(_SeverityLevel || (_SeverityLevel = {}));

      var _EnumEraseSetting;

      (function (EnumEraseSetting) {
        EnumEraseSetting["AllDTCs"] = "All DTCs";
        EnumEraseSetting["Powertrain"] = "Powertrain";
        EnumEraseSetting["ABS"] = "ABS";
        EnumEraseSetting["SRS"] = "SRS";
        EnumEraseSetting["Trunk"] = "Trunk";
      })(_EnumEraseSetting || (_EnumEraseSetting = {}));

      var _EraseSetting = [{
        name: _EnumEraseSetting.AllDTCs,
        selected: false
      }, {
        name: _EnumEraseSetting.Powertrain,
        selected: false
      }, {
        name: _EnumEraseSetting.ABS,
        selected: false
      }, {
        name: _EnumEraseSetting.SRS,
        selected: false
      }, {
        name: _EnumEraseSetting.Trunk,
        selected: false
      }];

      var _Status;

      (function (Status) {
        Status[Status["Success"] = 1] = "Success";
        Status[Status["Fail"] = 0] = "Fail";
      })(_Status || (_Status = {}));

      var _SettingModalStatus = /*#__PURE__*/_createClass(function _SettingModalStatus() {
        _classCallCheck(this, _SettingModalStatus);
      });

      var _TypeSearchDLC;

      (function (TypeSearchDLC) {
        TypeSearchDLC["ymm"] = "YMM";
        TypeSearchDLC["vin"] = "VIN";
      })(_TypeSearchDLC || (_TypeSearchDLC = {}));

      var _PrintType;

      (function (PrintType) {
        PrintType[PrintType["QuickScan"] = 1] = "QuickScan";
        PrintType[PrintType["GlobalOBD"] = 2] = "GlobalOBD";
        PrintType[PrintType["VehicleDisagnostics"] = 3] = "VehicleDisagnostics";
        PrintType[PrintType["NetworkScan"] = 4] = "NetworkScan";
      })(_PrintType || (_PrintType = {}));

      var _DateFormat;

      (function (DateFormat) {
        DateFormat["MMDDYY"] = "MM/dd/yy";
        DateFormat["DDMMYY"] = "dd/MM/yy";
      })(_DateFormat || (_DateFormat = {}));

      var _TimeFormat;

      (function (TimeFormat) {
        TimeFormat["TimeOne"] = "h:mm a";
        TimeFormat["TimeTwo"] = "H:MM";
      })(_TimeFormat || (_TimeFormat = {}));

      var _DateTimeFormat = /*#__PURE__*/_createClass(function _DateTimeFormat() {
        _classCallCheck(this, _DateTimeFormat);
      });

      var _EnumWarningLightStartus;

      (function (EnumWarningLightStartus) {
        EnumWarningLightStartus["ON"] = "ON";
        EnumWarningLightStartus["OFF"] = "OFF";
      })(_EnumWarningLightStartus || (_EnumWarningLightStartus = {}));

      var _EnumConnectionWifi;

      (function (EnumConnectionWifi) {
        EnumConnectionWifi["ONLINE"] = "online";
        EnumConnectionWifi["OFFLINE"] = "offline";
      })(_EnumConnectionWifi || (_EnumConnectionWifi = {}));

      var _EnumMessageBrakeLife;

      (function (EnumMessageBrakeLife) {
        EnumMessageBrakeLife["SUCCESS"] = "Good Condition";
        EnumMessageBrakeLife["FAIL"] = "Inspect";
      })(_EnumMessageBrakeLife || (_EnumMessageBrakeLife = {}));

      var _EnumMessageOilLife;

      (function (EnumMessageOilLife) {
        EnumMessageOilLife["SUCCESS"] = "Passed";
        EnumMessageOilLife["FAIL"] = "Needs Attention";
      })(_EnumMessageOilLife || (_EnumMessageOilLife = {}));

      var _warningLightIndex;

      (function (warningLightIndex) {
        warningLightIndex[warningLightIndex["ABS"] = 1035] = "ABS";
        warningLightIndex[warningLightIndex["SRS"] = 1036] = "SRS";
        warningLightIndex[warningLightIndex["TMPS"] = 1132] = "TMPS";
      })(_warningLightIndex || (_warningLightIndex = {}));

      var _LanguageApp;

      (function (LanguageApp) {
        LanguageApp["ENGLISH"] = "en";
        LanguageApp["SPANISH"] = "es";
      })(_LanguageApp || (_LanguageApp = {}));

      var _StatesUSA = [{
        name: 'Alabama',
        abbreviation: 'AL'
      }, {
        name: 'Alaska',
        abbreviation: 'AK'
      }, {
        name: 'American Samoa',
        abbreviation: 'AS'
      }, {
        name: 'Arizona',
        abbreviation: 'AZ'
      }, {
        name: 'Arkansas',
        abbreviation: 'AR'
      }, {
        name: 'California',
        abbreviation: 'CA'
      }, {
        name: 'Colorado',
        abbreviation: 'CO'
      }, {
        name: 'Connecticut',
        abbreviation: 'CT'
      }, {
        name: 'Delaware',
        abbreviation: 'DE'
      }, {
        name: 'District Of Columbia',
        abbreviation: 'DC'
      }, {
        name: 'Federated States Of Micronesia',
        abbreviation: 'FM'
      }, {
        name: 'Florida',
        abbreviation: 'FL'
      }, {
        name: 'Georgia',
        abbreviation: 'GA'
      }, {
        name: 'Guam',
        abbreviation: 'GU'
      }, {
        name: 'Hawaii',
        abbreviation: 'HI'
      }, {
        name: 'Idaho',
        abbreviation: 'ID'
      }, {
        name: 'Illinois',
        abbreviation: 'IL'
      }, {
        name: 'Indiana',
        abbreviation: 'IN'
      }, {
        name: 'Iowa',
        abbreviation: 'IA'
      }, {
        name: 'Kansas',
        abbreviation: 'KS'
      }, {
        name: 'Kentucky',
        abbreviation: 'KY'
      }, {
        name: 'Louisiana',
        abbreviation: 'LA'
      }, {
        name: 'Maine',
        abbreviation: 'ME'
      }, {
        name: 'Marshall Islands',
        abbreviation: 'MH'
      }, {
        name: 'Maryland',
        abbreviation: 'MD'
      }, {
        name: 'Massachusetts',
        abbreviation: 'MA'
      }, {
        name: 'Michigan',
        abbreviation: 'MI'
      }, {
        name: 'Minnesota',
        abbreviation: 'MN'
      }, {
        name: 'Mississippi',
        abbreviation: 'MS'
      }, {
        name: 'Missouri',
        abbreviation: 'MO'
      }, {
        name: 'Montana',
        abbreviation: 'MT'
      }, {
        name: 'Nebraska',
        abbreviation: 'NE'
      }, {
        name: 'Nevada',
        abbreviation: 'NV'
      }, {
        name: 'New Hampshire',
        abbreviation: 'NH'
      }, {
        name: 'New Jersey',
        abbreviation: 'NJ'
      }, {
        name: 'New Mexico',
        abbreviation: 'NM'
      }, {
        name: 'New York',
        abbreviation: 'NY'
      }, {
        name: 'North Carolina',
        abbreviation: 'NC'
      }, {
        name: 'North Dakota',
        abbreviation: 'ND'
      }, {
        name: 'Northern Mariana Islands',
        abbreviation: 'MP'
      }, {
        name: 'Ohio',
        abbreviation: 'OH'
      }, {
        name: 'Oklahoma',
        abbreviation: 'OK'
      }, {
        name: 'Oregon',
        abbreviation: 'OR'
      }, {
        name: 'Palau',
        abbreviation: 'PW'
      }, {
        name: 'Pennsylvania',
        abbreviation: 'PA'
      }, {
        name: 'Puerto Rico',
        abbreviation: 'PR'
      }, {
        name: 'Rhode Island',
        abbreviation: 'RI'
      }, {
        name: 'South Carolina',
        abbreviation: 'SC'
      }, {
        name: 'South Dakota',
        abbreviation: 'SD'
      }, {
        name: 'Tennessee',
        abbreviation: 'TN'
      }, {
        name: 'Texas',
        abbreviation: 'TX'
      }, {
        name: 'Utah',
        abbreviation: 'UT'
      }, {
        name: 'Vermont',
        abbreviation: 'VT'
      }, {
        name: 'Virgin Islands',
        abbreviation: 'VI'
      }, {
        name: 'Virginia',
        abbreviation: 'VA'
      }, {
        name: 'Washington',
        abbreviation: 'WA'
      }, {
        name: 'West Virginia',
        abbreviation: 'WV'
      }, {
        name: 'Wisconsin',
        abbreviation: 'WI'
      }, {
        name: 'Wyoming',
        abbreviation: 'WY'
      }];
      var _EnumRetailers = [{
        id: '9765f96d-5cc1-4cfb-83a9-94c8c197ab58',
        name: 'Advance auto parts',
        website: 'https://shop.advanceautoparts.com',
        spellings: ['Avants Autopart', 'Atvance Ato Parts ', 'Auto Parts ', 'Advance Auto Prts', 'Advance Parts ', 'Advane Auto Parts ', 'At Vance Auto Parts ', 'Abanse Auto Parts', 'Ad bans Auto', 'Vance Auto Parts ', 'Avanse Auto Parts', 'Atvance Auto Parts ', 'Advanse Auto Partes', 'adbans Auto Parts ', 'AAP', 'Atvance Atuo parts ', 'Avanse Autoparts', 'Advans Auto Parts', 'Alvance Auto Parts ', 'Alvance Autoparts ', 'Ad vance Auto Parts ', 'Avans Auto Parts', 'Avanse Auto Pars ', 'Advance Auto', 'Advants Auto Part', 'Abans Auto Part', 'Ad vance Auto', 'Avance Autoparts', 'Advance atuo pats', 'Advance Ato Parts ', 'Adbans auto', 'Advance Autoparts', 'Abanse Autoparts ', 'Avants Auto Parts', 'Advnce Auto Parts ', 'Atvance Atuo prts', 'Arvanse Auto Parts', 'Advance auto Perts ', 'Avans Outo Part', 'Advance atuo parts ', 'Advance Auto pts', 'Advance Parts Auto ']
      }, {
        id: '563976c6-28b8-448b-a1d2-88fca8f2f6c1',
        name: 'Amazon',
        website: 'http://www.amazon.com/automotive',
        spellings: ['Amazzon', 'Amazeon', 'Amasson', 'Ammazzon', 'azon', 'Aazon', 'Amazonn', 'Ammasson', 'Ameson', 'Ammazon', 'Ahmason', 'Amazn', 'Hamazon', 'mazon ', 'Amizon ', 'Amazo', 'Amezon', 'Imason', 'Ammason', 'Emizon', 'AMZ', 'Aamazon', 'Amaazon', 'Amaazzon', 'Omozon', 'Almazon', 'Emazon', 'Amason', 'Amazoon', 'AMZN', 'Almason']
      }, {
        id: '08dafed3-d11a-4dbb-bcaa-823eabc3d704',
        name: 'AutoZone',
        website: 'https://m.autozone.com',
        spellings: []
      }, {
        id: '69ad0114-50df-4c65-9f99-555d73866911',
        name: "O'Reilly",
        website: 'https://www.oreillyauto.com',
        spellings: ['O’', 'Or']
      }, {
        id: 'b206ec2d-f596-4b82-9af3-8c30a5cc2558',
        name: 'Canadian Tire',
        website: 'https://www.canadiantire.ca',
        spellings: []
      }, {
        id: '00d0cc01-4400-4c5f-8df0-604abec80d01',
        name: 'Napa',
        website: 'https://www.napaonline.com',
        spellings: []
      }];
      /***/
    },

    /***/
    20998:
    /*!*************************************!*\
      !*** ./src/app/models/app.model.ts ***!
      \*************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ApiModel": function ApiModel() {
          return (
            /* binding */
            _ApiModel
          );
        },

        /* harmony export */
        "User": function User() {
          return (
            /* binding */
            _User2
          );
        },

        /* harmony export */
        "ApiMessage": function ApiMessage() {
          return (
            /* binding */
            _ApiMessage
          );
        },

        /* harmony export */
        "ApiResponseData": function ApiResponseData() {
          return (
            /* binding */
            _ApiResponseData
          );
        },

        /* harmony export */
        "ApiUserResponse": function ApiUserResponse() {
          return (
            /* binding */
            _ApiUserResponse2
          );
        },

        /* harmony export */
        "ApiBooleanResponse": function ApiBooleanResponse() {
          return (
            /* binding */
            _ApiBooleanResponse
          );
        },

        /* harmony export */
        "VehicleModel": function VehicleModel() {
          return (
            /* binding */
            _VehicleModel
          );
        },

        /* harmony export */
        "DlcLocationModel": function DlcLocationModel() {
          return (
            /* binding */
            _DlcLocationModel
          );
        },

        /* harmony export */
        "ReportModel": function ReportModel() {
          return (
            /* binding */
            _ReportModel
          );
        },

        /* harmony export */
        "PowertrainCodes": function PowertrainCodes() {
          return (
            /* binding */
            _PowertrainCodes
          );
        },

        /* harmony export */
        "DtcItem": function DtcItem() {
          return (
            /* binding */
            _DtcItem
          );
        },

        /* harmony export */
        "ReportHistoryItem": function ReportHistoryItem() {
          return (
            /* binding */
            _ReportHistoryItem
          );
        },

        /* harmony export */
        "ReportHistoryModel": function ReportHistoryModel() {
          return (
            /* binding */
            _ReportHistoryModel
          );
        },

        /* harmony export */
        "ModuleDtcModel": function ModuleDtcModel() {
          return (
            /* binding */
            _ModuleDtcModel
          );
        },

        /* harmony export */
        "DtcModel": function DtcModel() {
          return (
            /* binding */
            _DtcModel
          );
        },

        /* harmony export */
        "ApiVehicleResponse": function ApiVehicleResponse() {
          return (
            /* binding */
            _ApiVehicleResponse
          );
        },

        /* harmony export */
        "ApiMakesResponse": function ApiMakesResponse() {
          return (
            /* binding */
            _ApiMakesResponse
          );
        },

        /* harmony export */
        "ApiModelsResponse": function ApiModelsResponse() {
          return (
            /* binding */
            _ApiModelsResponse
          );
        },

        /* harmony export */
        "ApiYearsResponse": function ApiYearsResponse() {
          return (
            /* binding */
            _ApiYearsResponse
          );
        },

        /* harmony export */
        "ApiDlcLocationResponse": function ApiDlcLocationResponse() {
          return (
            /* binding */
            _ApiDlcLocationResponse
          );
        },

        /* harmony export */
        "ApiReportResponse": function ApiReportResponse() {
          return (
            /* binding */
            _ApiReportResponse
          );
        },

        /* harmony export */
        "ApiReportHistoryResponse": function ApiReportHistoryResponse() {
          return (
            /* binding */
            _ApiReportHistoryResponse
          );
        },

        /* harmony export */
        "ModuleItem": function ModuleItem() {
          return (
            /* binding */
            _ModuleItem
          );
        },

        /* harmony export */
        "Report": function Report() {
          return (
            /* binding */
            _Report
          );
        },

        /* harmony export */
        "ReportItem": function ReportItem() {
          return (
            /* binding */
            _ReportItem
          );
        },

        /* harmony export */
        "SettingData": function SettingData() {
          return (
            /* binding */
            _SettingData
          );
        },

        /* harmony export */
        "ItemSupportedModules": function ItemSupportedModules() {
          return (
            /* binding */
            _ItemSupportedModules
          );
        },

        /* harmony export */
        "CacheData": function CacheData() {
          return (
            /* binding */
            _CacheData
          );
        },

        /* harmony export */
        "LiveDataReportItem": function LiveDataReportItem() {
          return (
            /* binding */
            _LiveDataReportItem
          );
        },

        /* harmony export */
        "MaintenanceItem": function MaintenanceItem() {
          return (
            /* binding */
            _MaintenanceItem
          );
        },

        /* harmony export */
        "AddingInfo": function AddingInfo() {
          return (
            /* binding */
            _AddingInfo
          );
        },

        /* harmony export */
        "BleData": function BleData() {
          return (
            /* binding */
            _BleData
          );
        },

        /* harmony export */
        "CharacteristicData": function CharacteristicData() {
          return (
            /* binding */
            _CharacteristicData
          );
        },

        /* harmony export */
        "OptionInformationModel": function OptionInformationModel() {
          return (
            /* binding */
            _OptionInformationModel
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var src_app_services_innova_tool_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/services/innova-tool-models */
      92951);
      /* harmony import */


      var _services_api_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../services/api.models */
      16928);
      /* harmony import */


      var _services_uuid_v4__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/uuid-v4 */
      2658);

      var _ApiModel = /*#__PURE__*/_createClass(function _ApiModel(obj) {
        _classCallCheck(this, _ApiModel);

        Object.assign(this, obj);
      });

      var _User2 = /*#__PURE__*/function (_ApiModel2) {
        function _User2() {
          _classCallCheck(this, _User2);

          return _callSuper(this, _User2, arguments);
        }

        _inherits(_User2, _ApiModel2);

        return _createClass(_User2);
      }(_ApiModel);

      var _ApiMessage = /*#__PURE__*/function (_ApiModel3) {
        function _ApiMessage() {
          _classCallCheck(this, _ApiMessage);

          return _callSuper(this, _ApiMessage, arguments);
        }

        _inherits(_ApiMessage, _ApiModel3);

        return _createClass(_ApiMessage);
      }(_ApiModel);

      var _ApiResponseData = /*#__PURE__*/function (_ApiModel4) {
        function _ApiResponseData() {
          _classCallCheck(this, _ApiResponseData);

          return _callSuper(this, _ApiResponseData, arguments);
        }

        _inherits(_ApiResponseData, _ApiModel4);

        return _createClass(_ApiResponseData, [{
          key: "success",
          get: function get() {
            return this.message && this.message.code === 0;
          }
        }]);
      }(_ApiModel);

      var _ApiUserResponse2 = /*#__PURE__*/function (_ApiResponseData2) {
        function _ApiUserResponse2() {
          _classCallCheck(this, _ApiUserResponse2);

          return _callSuper(this, _ApiUserResponse2, arguments);
        }

        _inherits(_ApiUserResponse2, _ApiResponseData2);

        return _createClass(_ApiUserResponse2);
      }(_ApiResponseData);

      var _ApiBooleanResponse = /*#__PURE__*/function (_ApiResponseData3) {
        function _ApiBooleanResponse() {
          _classCallCheck(this, _ApiBooleanResponse);

          return _callSuper(this, _ApiBooleanResponse, arguments);
        }

        _inherits(_ApiBooleanResponse, _ApiResponseData3);

        return _createClass(_ApiBooleanResponse);
      }(_ApiResponseData);

      var _VehicleModel = /*#__PURE__*/function (_ApiModel5) {
        function _VehicleModel() {
          _classCallCheck(this, _VehicleModel);

          return _callSuper(this, _VehicleModel, arguments);
        }

        _inherits(_VehicleModel, _ApiModel5);

        return _createClass(_VehicleModel);
      }(_ApiModel);

      var _DlcLocationModel = /*#__PURE__*/function (_ApiModel6) {
        function _DlcLocationModel() {
          _classCallCheck(this, _DlcLocationModel);

          return _callSuper(this, _DlcLocationModel, arguments);
        }

        _inherits(_DlcLocationModel, _ApiModel6);

        return _createClass(_DlcLocationModel);
      }(_ApiModel);

      var _ReportModel = /*#__PURE__*/function (_ApiModel7) {
        function _ReportModel() {
          _classCallCheck(this, _ReportModel);

          return _callSuper(this, _ReportModel, arguments);
        }

        _inherits(_ReportModel, _ApiModel7);

        return _createClass(_ReportModel);
      }(_ApiModel);

      var _PowertrainCodes = /*#__PURE__*/_createClass(function _PowertrainCodes() {
        _classCallCheck(this, _PowertrainCodes);
      });

      var _DtcItem = /*#__PURE__*/_createClass(function _DtcItem() {
        _classCallCheck(this, _DtcItem);
      });

      var _ReportHistoryItem = /*#__PURE__*/_createClass(function _ReportHistoryItem() {
        _classCallCheck(this, _ReportHistoryItem);
      });

      var _ReportHistoryModel = /*#__PURE__*/function (_ApiModel8) {
        function _ReportHistoryModel() {
          _classCallCheck(this, _ReportHistoryModel);

          return _callSuper(this, _ReportHistoryModel, arguments);
        }

        _inherits(_ReportHistoryModel, _ApiModel8);

        return _createClass(_ReportHistoryModel);
      }(_ApiModel);

      var _ModuleDtcModel = /*#__PURE__*/_createClass(function _ModuleDtcModel() {
        _classCallCheck(this, _ModuleDtcModel);
      });

      var _DtcModel = /*#__PURE__*/_createClass(function _DtcModel() {
        _classCallCheck(this, _DtcModel);
      });

      var _ApiVehicleResponse = /*#__PURE__*/function (_ApiResponseData4) {
        function _ApiVehicleResponse() {
          _classCallCheck(this, _ApiVehicleResponse);

          return _callSuper(this, _ApiVehicleResponse, arguments);
        }

        _inherits(_ApiVehicleResponse, _ApiResponseData4);

        return _createClass(_ApiVehicleResponse);
      }(_ApiResponseData);

      var _ApiMakesResponse = /*#__PURE__*/function (_ApiResponseData5) {
        function _ApiMakesResponse() {
          _classCallCheck(this, _ApiMakesResponse);

          return _callSuper(this, _ApiMakesResponse, arguments);
        }

        _inherits(_ApiMakesResponse, _ApiResponseData5);

        return _createClass(_ApiMakesResponse);
      }(_ApiResponseData);

      var _ApiModelsResponse = /*#__PURE__*/function (_ApiResponseData6) {
        function _ApiModelsResponse() {
          _classCallCheck(this, _ApiModelsResponse);

          return _callSuper(this, _ApiModelsResponse, arguments);
        }

        _inherits(_ApiModelsResponse, _ApiResponseData6);

        return _createClass(_ApiModelsResponse);
      }(_ApiResponseData);

      var _ApiYearsResponse = /*#__PURE__*/function (_ApiResponseData7) {
        function _ApiYearsResponse() {
          _classCallCheck(this, _ApiYearsResponse);

          return _callSuper(this, _ApiYearsResponse, arguments);
        }

        _inherits(_ApiYearsResponse, _ApiResponseData7);

        return _createClass(_ApiYearsResponse);
      }(_ApiResponseData);

      var _ApiDlcLocationResponse = /*#__PURE__*/function (_ApiResponseData8) {
        function _ApiDlcLocationResponse() {
          _classCallCheck(this, _ApiDlcLocationResponse);

          return _callSuper(this, _ApiDlcLocationResponse, arguments);
        }

        _inherits(_ApiDlcLocationResponse, _ApiResponseData8);

        return _createClass(_ApiDlcLocationResponse);
      }(_ApiResponseData);

      var _ApiReportResponse = /*#__PURE__*/function (_ApiResponseData9) {
        function _ApiReportResponse() {
          _classCallCheck(this, _ApiReportResponse);

          return _callSuper(this, _ApiReportResponse, arguments);
        }

        _inherits(_ApiReportResponse, _ApiResponseData9);

        return _createClass(_ApiReportResponse);
      }(_ApiResponseData);

      var _ApiReportHistoryResponse = /*#__PURE__*/function (_ApiResponseData10) {
        function _ApiReportHistoryResponse() {
          _classCallCheck(this, _ApiReportHistoryResponse);

          return _callSuper(this, _ApiReportHistoryResponse, arguments);
        }

        _inherits(_ApiReportHistoryResponse, _ApiResponseData10);

        return _createClass(_ApiReportHistoryResponse);
      }(_ApiResponseData);

      var _ModuleItem = /*#__PURE__*/_createClass(function _ModuleItem() {
        _classCallCheck(this, _ModuleItem);
      });

      var _Report = /*#__PURE__*/function (_services_api_models_) {
        function _Report(obj) {
          var _this4;

          _classCallCheck(this, _Report);

          _this4 = _callSuper(this, _Report, [obj]);
          _this4.customerInfo = _this4.customerInfo || {};
          _this4.additionalInfo = _this4.additionalInfo || {};
          return _this4;
        }

        _inherits(_Report, _services_api_models_);

        return _createClass(_Report, [{
          key: "hasAdditionalInfo",
          get: function get() {
            return this.additionalInfo && this.additionalInfo.caliDs && this.additionalInfo.cvNs && this.additionalInfo.ipTs;
          }
        }, {
          key: "isGeneratedOffline",
          get: function get() {
            return !_services_uuid_v4__WEBPACK_IMPORTED_MODULE_2__.UuidV4.isValid(this.reportId); // because offline report ID was generated from timestamp
          }
        }, {
          key: "toApiRequestFormat",
          value: function toApiRequestFormat(addInfo) {
            // let req = new ApiCreateReportRequest();
            var req = new _services_api_models__WEBPACK_IMPORTED_MODULE_1__.ApiCreateReportRequest({
              Vin: this.vin,
              Mileage: this.mileage,
              DongleId: this.toolInfo.dongleId,
              UsbProductId: this.toolInfo.usbProductId || 720,
              VinProfileRaw: this.RawData.VinProfileRaw,
              MonitorStatusEcmRaw: this.RawData.MonitorStatusEcmRaw,
              MonitorStatusTcmRaw: this.RawData.MonitorStatusTcmRaw,
              DtcsEcmRaw: this.RawData.DtcsEcmRaw,
              DtcsTcmRaw: this.RawData.DtcsTcmRaw,
              FreezeFrameEcmRaw: this.RawData.FreezeFrameEcmRaw,
              FreezeFrameTcmRaw: this.RawData.FreezeFrameTcmRaw,
              VehicleInfoEcmRaw: this.RawData.VehicleInfoEcmRaw,
              VehicleInfoTcmRaw: this.RawData.VehicleInfoTcmRaw,
              RawDataVersion: 5,
              BatteryLife: this.overview.batteryLife.value,
              brakePadLife: this.overview.brakePadLife,
              OilLevel: this.overview.oilLevel,
              OilLife: this.overview.oilLife.value,
              CoolantLevel: this.overview.coolantLevel,
              TirePressures: this.RawData.TirePressuresRaw,
              scanningType: this.scanningType,
              DriveCycles: this.driveCycles,
              Retailer: addInfo.retailer,
              ReportNumber: this.reportNumber,
              frontbrakePadLife: this.overview.frontbrakePadLife,
              rearbrakePadLife: this.overview.rearbrakePadLife,
              Language: addInfo.lang,
              additionalInfo: this.additionalInfo,
              warningLightStatus: this.warningLightStatus,
              RegionalUnit: addInfo.regional,
              freezeFrames: this.freezeFrames
            });

            if (this.RawData.OemModulesRaw) {
              req.Modules = this.RawData.OemModulesRaw.filter(function (m) {
                return [src_app_services_innova_tool_models__WEBPACK_IMPORTED_MODULE_0__.InnovaToolModuleStatus.Valid, src_app_services_innova_tool_models__WEBPACK_IMPORTED_MODULE_0__.InnovaToolModuleStatus.Available, undefined].includes(m.Status);
              }).map(function (m) {
                return {
                  System: m.system,
                  SubSystem: m.subsystem,
                  ModuleName: m.modulename,
                  Group: m.group,
                  InvalidDTC: m.InvalidDTC,
                  Status: m.Status,
                  Dtcs: (m.Dtcs || []).map(function (d) {
                    return {
                      Code: d.code,
                      Type: d.type,
                      Def: d.definition
                    };
                  })
                };
              });
            }

            return req;
          }
        }]);
      }(_services_api_models__WEBPACK_IMPORTED_MODULE_1__.ApiCreateReportResponse);

      var VehicleInfo = /*#__PURE__*/_createClass(function VehicleInfo() {
        _classCallCheck(this, VehicleInfo);
      });

      var _ReportItem = /*#__PURE__*/_createClass(function _ReportItem() {
        _classCallCheck(this, _ReportItem);
      });

      var _SettingData = /*#__PURE__*/_createClass(function _SettingData() {
        _classCallCheck(this, _SettingData);
      });

      var _ItemSupportedModules = /*#__PURE__*/_createClass(function _ItemSupportedModules() {
        _classCallCheck(this, _ItemSupportedModules);
      });

      var _CacheData = /*#__PURE__*/_createClass(function _CacheData() {
        _classCallCheck(this, _CacheData);
      });

      var _LiveDataReportItem = /*#__PURE__*/_createClass(function _LiveDataReportItem() {
        _classCallCheck(this, _LiveDataReportItem);
      });

      var _MaintenanceItem = /*#__PURE__*/_createClass(function _MaintenanceItem() {
        _classCallCheck(this, _MaintenanceItem);
      });

      var _AddingInfo = /*#__PURE__*/_createClass(function _AddingInfo() {
        _classCallCheck(this, _AddingInfo);
      });

      var _BleData = /*#__PURE__*/_createClass(function _BleData(id, name) {
        var isLocalName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        _classCallCheck(this, _BleData);

        this.id = id;
        this.name = name;

        if (isLocalName) {
          this.displayName = name;
        } else {
          if (id && id.length > 5) {
            if (id.indexOf(':') > -1) {
              var subString = id.substring(id.length - 7, id.length);
              this.displayName = this.name + '_' + subString.replace(/:/g, '');
            } else {
              this.displayName = this.name + '_' + id.substring(id.length - 5, id.length);
            }
          } else {
            this.displayName = this.name + '_' + this.id;
          }
        }
      });

      var _CharacteristicData = /*#__PURE__*/_createClass(function _CharacteristicData() {
        _classCallCheck(this, _CharacteristicData);
      });

      var _OptionInformationModel = /*#__PURE__*/_createClass(function _OptionInformationModel(option) {
        var description = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var image = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        var hasDetails = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

        _classCallCheck(this, _OptionInformationModel);

        this.option = option;
        this.description = description;
        this.image = image;
        this.hasDetails = hasDetails;
      });
      /***/

    },

    /***/
    34045:
    /*!******************************************!*\
      !*** ./src/app/models/report-session.ts ***!
      \******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ReportStatus": function ReportStatus() {
          return (
            /* binding */
            _ReportStatus
          );
        },

        /* harmony export */
        "ReportSession": function ReportSession() {
          return (
            /* binding */
            _ReportSession
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _app_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app.model */
      20998);

      var _ReportStatus;

      (function (ReportStatus) {
        ReportStatus[ReportStatus["Complete"] = 0] = "Complete";
        ReportStatus[ReportStatus["Incomplete"] = 1] = "Incomplete";
      })(_ReportStatus || (_ReportStatus = {}));

      var _ReportSession = /*#__PURE__*/_createClass(function _ReportSession() {
        _classCallCheck(this, _ReportSession);

        this.workOrderNumber = "";
        this.mileage = 0;
        this.vin = "";
        this.hasDlc = false;
        this.toolName = "";
        this.reportId = "";
        this.reportNumber = "";
        this.dlcModel = new _app_model__WEBPACK_IMPORTED_MODULE_0__.DlcLocationModel();
        this.reportStatus = _ReportStatus.Complete;
      });
      /***/

    },

    /***/
    5105:
    /*!***************************************!*\
      !*** ./src/app/modules/app.module.ts ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppModule": function AppModule() {
          return (
            /* binding */
            _AppModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! @angular/platform-browser */
      71570);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! @ionic/angular */
      81864);
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../app.component */
      55041);
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../app-routing.module */
      90158);
      /* harmony import */


      var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/device/ngx */
      96265);
      /* harmony import */


      var _api_http_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../api/http-interceptor */
      3877);
      /* harmony import */


      var _services_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/auth-service/auth-service */
      44073);
      /* harmony import */


      var _services_api_rest_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../services/api-rest.service */
      96363);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! @angular/common/http */
      53882);
      /* harmony import */


      var _services_helper_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../services/helper.service */
      22486);
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      73588);
      /* harmony import */


      var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic-native/network/ngx */
      95680);
      /* harmony import */


      var _ionic_native_ble_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic-native/ble/ngx */
      11695);
      /* harmony import */


      var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic-native/barcode-scanner/ngx */
      10926);
      /* harmony import */


      var _global_validators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../global-validators */
      28900);
      /* harmony import */


      var _services_vehicle_service_vehicle_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../services/vehicle-service/vehicle-service */
      99578);
      /* harmony import */


      var _services_tool_service_tool_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../services/tool-service/tool-service */
      91841);
      /* harmony import */


      var _services_report_service_report_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../services/report-service/report-service */
      45322);
      /* harmony import */


      var _ionic_native_open_native_settings_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @ionic-native/open-native-settings/ngx */
      35266);
      /* harmony import */


      var _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @ionic-native/email-composer/ngx */
      36543);
      /* harmony import */


      var ngx_pagination__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ngx-pagination */
      57483);
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      64967);
      /* harmony import */


      var _services_navigation_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ../services/navigation.service */
      89565);
      /* harmony import */


      var _ionic_native_bluetooth_serial_ngx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @ionic-native/bluetooth-serial/ngx */
      83962);
      /* harmony import */


      var _ionic_native_insomnia_ngx__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @ionic-native/insomnia/ngx */
      31484);
      /* harmony import */


      var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! @ionic/storage-angular */
      90516);
      /* harmony import */


      var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! @ionic/storage-angular */
      54357);
      /* harmony import */


      var _ionic_native_sqlite_porter_ngx__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @ionic-native/sqlite-porter/ngx */
      90897);
      /* harmony import */


      var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @ionic-native/sqlite/ngx */
      24921);
      /* harmony import */


      var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @ionic-native/file/ngx */
      18659);
      /* harmony import */


      var ionic_image_loader_v5__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
      /*! ionic-image-loader-v5 */
      86233);
      /* harmony import */


      var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @ionic-native/ionic-webview/ngx */
      73039);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @ionic-native/keyboard/ngx */
      616);
      /* harmony import */


      var _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! @ionic-native/diagnostic/ngx */
      91089);
      /* harmony import */


      var _service_injector_module__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ./service-injector.module */
      34973);
      /* harmony import */


      var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! @ionic-native/app-version/ngx */
      21788);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _AppModule = /*#__PURE__*/_createClass(function _AppModule() {
        _classCallCheck(this, _AppModule);
      });

      _AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || _AppModule)();
      };

      _AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵdefineNgModule"]({
        type: _AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
      });
      _AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵdefineInjector"]({
        providers: [{
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_31__.RouteReuseStrategy,
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_32__.IonicRouteStrategy
        }].concat(_toConsumableArray(_api_http_interceptor__WEBPACK_IMPORTED_MODULE_3__.httpInterceptorProviders), [_ionic_native_ble_ngx__WEBPACK_IMPORTED_MODULE_9__.BLE, _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_24__.File, _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_2__.Device, _services_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthServiceProvider, _services_api_rest_service__WEBPACK_IMPORTED_MODULE_5__.ApiRestService, _services_helper_service__WEBPACK_IMPORTED_MODULE_6__.HelperService, _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__.StatusBar, _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_18__.SplashScreen, _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_8__.Network, _ionic_angular__WEBPACK_IMPORTED_MODULE_32__.NavParams, _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_33__.Storage, _global_validators__WEBPACK_IMPORTED_MODULE_11__.GlobalValidator, _services_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthServiceProvider, _services_vehicle_service_vehicle_service__WEBPACK_IMPORTED_MODULE_12__.VehicleServiceProvider, _services_tool_service_tool_service__WEBPACK_IMPORTED_MODULE_13__.ToolServiceProvider, _services_navigation_service__WEBPACK_IMPORTED_MODULE_19__.NavigationService, _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_10__.BarcodeScanner, _ionic_native_bluetooth_serial_ngx__WEBPACK_IMPORTED_MODULE_20__.BluetoothSerial, _services_report_service_report_service__WEBPACK_IMPORTED_MODULE_14__.ReportServiceProvider, _ionic_native_insomnia_ngx__WEBPACK_IMPORTED_MODULE_21__.Insomnia, _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_23__.SQLite, _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_25__.WebView, _ionic_native_sqlite_porter_ngx__WEBPACK_IMPORTED_MODULE_22__.SQLitePorter, _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_26__.Keyboard, _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_27__.Diagnostic, _ionic_native_open_native_settings_ngx__WEBPACK_IMPORTED_MODULE_15__.OpenNativeSettings, {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_34__.HTTP_INTERCEPTORS,
          useClass: _api_http_interceptor__WEBPACK_IMPORTED_MODULE_3__.HeaderInterceptor,
          multi: true
        }, _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_16__.EmailComposer, _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_29__.AppVersion]),
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_35__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_32__.IonicModule.forRoot({
          scrollAssist: true,
          swipeBackEnabled: false,
          hardwareBackButton: false,
          _forceStatusbarPadding: true
        }), _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_36__.IonicStorageModule.forRoot({
          name: 'com.carmd.proscan2',
          driverOrder: ['indexeddb', 'sqlite', 'websql', 'localstorage']
        }), _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_34__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_37__.ReactiveFormsModule, ionic_image_loader_v5__WEBPACK_IMPORTED_MODULE_38__.IonicImageLoaderModule, _service_injector_module__WEBPACK_IMPORTED_MODULE_28__.ServiceInjectorModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_17__.NgxPaginationModule], _service_injector_module__WEBPACK_IMPORTED_MODULE_28__.ServiceInjectorModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵsetNgModuleScope"](_AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_35__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_32__.IonicModule, _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_36__.IonicStorageModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_34__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_37__.ReactiveFormsModule, ionic_image_loader_v5__WEBPACK_IMPORTED_MODULE_38__.IonicImageLoaderModule, _service_injector_module__WEBPACK_IMPORTED_MODULE_28__.ServiceInjectorModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_17__.NgxPaginationModule],
          exports: [_service_injector_module__WEBPACK_IMPORTED_MODULE_28__.ServiceInjectorModule]
        });
      })();
      /***/

    },

    /***/
    34973:
    /*!****************************************************!*\
      !*** ./src/app/modules/service-injector.module.ts ***!
      \****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ServiceInjector": function ServiceInjector() {
          return (
            /* binding */
            _ServiceInjector
          );
        },

        /* harmony export */
        "ServiceInjectorModule": function ServiceInjectorModule() {
          return (
            /* binding */
            _ServiceInjectorModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316); // eslint-disable-next-line @typescript-eslint/naming-convention


      var _ServiceInjector;

      var _ServiceInjectorModule = /*#__PURE__*/_createClass(function _ServiceInjectorModule(injector) {
        _classCallCheck(this, _ServiceInjectorModule);

        this.injector = injector;
        _ServiceInjector = this.injector;
      });

      _ServiceInjectorModule.ɵfac = function ServiceInjectorModule_Factory(t) {
        return new (t || _ServiceInjectorModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector));
      };

      _ServiceInjectorModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: _ServiceInjectorModule
      });
      _ServiceInjectorModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
      /***/
    },

    /***/
    96363:
    /*!**********************************************!*\
      !*** ./src/app/services/api-rest.service.ts ***!
      \**********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ApiRestService": function ApiRestService() {
          return (
            /* binding */
            _ApiRestService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _configs_app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../configs/app.config */
      66626);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      53882);

      var _ApiRestService = /*#__PURE__*/function () {
        function _ApiRestService(http) {
          _classCallCheck(this, _ApiRestService);

          this.http = http;
        }

        return _createClass(_ApiRestService, [{
          key: "get",
          value: function get(path, opts) {
            return this.http.get("".concat(_configs_app_config__WEBPACK_IMPORTED_MODULE_0__.AppConfig.apiEndpoint).concat(path), Object.assign({}, opts));
          }
        }, {
          key: "post",
          value: function post(path, body) {
            return this.http.post("".concat(_configs_app_config__WEBPACK_IMPORTED_MODULE_0__.AppConfig.apiEndpoint).concat(path), body);
          }
        }, {
          key: "put",
          value: function put(path, body) {
            return this.http.put("".concat(_configs_app_config__WEBPACK_IMPORTED_MODULE_0__.AppConfig.apiEndpoint).concat(path), body);
          }
        }, {
          key: "patch",
          value: function patch(path, body) {
            return this.http.patch("".concat(_configs_app_config__WEBPACK_IMPORTED_MODULE_0__.AppConfig.apiEndpoint).concat(path), body);
          }
        }, {
          key: "delete",
          value: function _delete(path) {
            return this.http["delete"]("".concat(_configs_app_config__WEBPACK_IMPORTED_MODULE_0__.AppConfig.apiEndpoint).concat(path));
          }
        }]);
      }();

      _ApiRestService.ɵfac = function ApiRestService_Factory(t) {
        return new (t || _ApiRestService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
      };

      _ApiRestService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _ApiRestService,
        factory: _ApiRestService.ɵfac
      });
      /***/
    },

    /***/
    16928:
    /*!****************************************!*\
      !*** ./src/app/services/api.models.ts ***!
      \****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BaseApiModel": function BaseApiModel() {
          return (
            /* binding */
            _BaseApiModel
          );
        },

        /* harmony export */
        "BaseApiResponse": function BaseApiResponse() {
          return (
            /* binding */
            _BaseApiResponse
          );
        },

        /* harmony export */
        "ApiDataResponse": function ApiDataResponse() {
          return (
            /* binding */
            _ApiDataResponse
          );
        },

        /* harmony export */
        "FixPartItem": function FixPartItem() {
          return (
            /* binding */
            _FixPartItem
          );
        },

        /* harmony export */
        "MostLikelyFixFixesItem": function MostLikelyFixFixesItem() {
          return (
            /* binding */
            _MostLikelyFixFixesItem
          );
        },

        /* harmony export */
        "ApiGetList": function ApiGetList() {
          return (
            /* binding */
            _ApiGetList
          );
        },

        /* harmony export */
        "InfoModalVehicle": function InfoModalVehicle() {
          return (
            /* binding */
            _InfoModalVehicle
          );
        },

        /* harmony export */
        "ApiDecodeVinResponse": function ApiDecodeVinResponse() {
          return (
            /* binding */
            _ApiDecodeVinResponse
          );
        },

        /* harmony export */
        "TirePressureItem": function TirePressureItem() {
          return (
            /* binding */
            _TirePressureItem
          );
        },

        /* harmony export */
        "ApiCreateReportRequest": function ApiCreateReportRequest() {
          return (
            /* binding */
            _ApiCreateReportRequest
          );
        },

        /* harmony export */
        "ApiUpdateReportRequest": function ApiUpdateReportRequest() {
          return (
            /* binding */
            _ApiUpdateReportRequest
          );
        },

        /* harmony export */
        "VehicleInfo": function VehicleInfo() {
          return (
            /* binding */
            _VehicleInfo
          );
        },

        /* harmony export */
        "ApiCreateReportResponse": function ApiCreateReportResponse() {
          return (
            /* binding */
            _ApiCreateReportResponse
          );
        },

        /* harmony export */
        "MonitorItem": function MonitorItem() {
          return (
            /* binding */
            _MonitorItem
          );
        },

        /* harmony export */
        "DataUpdateInfo": function DataUpdateInfo() {
          return (
            /* binding */
            _DataUpdateInfo
          );
        },

        /* harmony export */
        "ApiReportPrimaryTSBs": function ApiReportPrimaryTSBs() {
          return (
            /* binding */
            _ApiReportPrimaryTSBs
          );
        },

        /* harmony export */
        "ApiReportTSBs": function ApiReportTSBs() {
          return (
            /* binding */
            _ApiReportTSBs
          );
        },

        /* harmony export */
        "ApiTsbsAndRecall": function ApiTsbsAndRecall() {
          return (
            /* binding */
            _ApiTsbsAndRecall
          );
        },

        /* harmony export */
        "ApiReportSearchTSBs": function ApiReportSearchTSBs() {
          return (
            /* binding */
            _ApiReportSearchTSBs
          );
        },

        /* harmony export */
        "TsbCategoryModel": function TsbCategoryModel() {
          return (
            /* binding */
            _TsbCategoryModel
          );
        },

        /* harmony export */
        "TsbModel": function TsbModel() {
          return (
            /* binding */
            _TsbModel
          );
        },

        /* harmony export */
        "tsbRecallModel": function tsbRecallModel() {
          return (
            /* binding */
            _tsbRecallModel
          );
        },

        /* harmony export */
        "ApiReportTsbRecall": function ApiReportTsbRecall() {
          return (
            /* binding */
            _ApiReportTsbRecall
          );
        },

        /* harmony export */
        "ApiReportFailedModules": function ApiReportFailedModules() {
          return (
            /* binding */
            _ApiReportFailedModules
          );
        },

        /* harmony export */
        "EnumStatusTirePressure": function EnumStatusTirePressure() {
          return (
            /* binding */
            _EnumStatusTirePressure
          );
        },

        /* harmony export */
        "ApiReportOverview": function ApiReportOverview() {
          return (
            /* binding */
            _ApiReportOverview
          );
        },

        /* harmony export */
        "ApiReportPassed": function ApiReportPassed() {
          return (
            /* binding */
            _ApiReportPassed
          );
        },

        /* harmony export */
        "ApiReportMaintenance": function ApiReportMaintenance() {
          return (
            /* binding */
            _ApiReportMaintenance
          );
        },

        /* harmony export */
        "ApiGetDtcDetailsResponse": function ApiGetDtcDetailsResponse() {
          return (
            /* binding */
            _ApiGetDtcDetailsResponse
          );
        },

        /* harmony export */
        "ApiDLCLocationResponse": function ApiDLCLocationResponse() {
          return (
            /* binding */
            _ApiDLCLocationResponse
          );
        },

        /* harmony export */
        "DriveCycleMonitorItem": function DriveCycleMonitorItem() {
          return (
            /* binding */
            _DriveCycleMonitorItem
          );
        },

        /* harmony export */
        "ToolInfoSendDataLog": function ToolInfoSendDataLog() {
          return (
            /* binding */
            _ToolInfoSendDataLog
          );
        },

        /* harmony export */
        "EnumScreenType": function EnumScreenType() {
          return (
            /* binding */
            _EnumScreenType
          );
        },

        /* harmony export */
        "CreateUser": function CreateUser() {
          return (
            /* binding */
            _CreateUser
          );
        },

        /* harmony export */
        "ToolUser": function ToolUser() {
          return (
            /* binding */
            _ToolUser
          );
        },

        /* harmony export */
        "LoginUser": function LoginUser() {
          return (
            /* binding */
            _LoginUser
          );
        },

        /* harmony export */
        "LoginModel": function LoginModel() {
          return (
            /* binding */
            _LoginModel
          );
        },

        /* harmony export */
        "ApiUserResponse": function ApiUserResponse() {
          return (
            /* binding */
            _ApiUserResponse3
          );
        },

        /* harmony export */
        "ApiTokenResponse": function ApiTokenResponse() {
          return (
            /* binding */
            _ApiTokenResponse
          );
        },

        /* harmony export */
        "ApiRegisterDeviceResponse": function ApiRegisterDeviceResponse() {
          return (
            /* binding */
            _ApiRegisterDeviceResponse
          );
        },

        /* harmony export */
        "ApiDeviceInfoResponse": function ApiDeviceInfoResponse() {
          return (
            /* binding */
            _ApiDeviceInfoResponse
          );
        },

        /* harmony export */
        "ApiEmailReportResponse": function ApiEmailReportResponse() {
          return (
            /* binding */
            _ApiEmailReportResponse
          );
        },

        /* harmony export */
        "Retailer": function Retailer() {
          return (
            /* binding */
            _Retailer
          );
        },

        /* harmony export */
        "ApiRetailers": function ApiRetailers() {
          return (
            /* binding */
            _ApiRetailers
          );
        },

        /* harmony export */
        "ApiRetailerPartsForAdvanceAutoPart": function ApiRetailerPartsForAdvanceAutoPart() {
          return (
            /* binding */
            _ApiRetailerPartsForAdvanceAutoPart
          );
        },

        /* harmony export */
        "Battery": function Battery() {
          return (
            /* binding */
            _Battery
          );
        },

        /* harmony export */
        "DisplayToolBar": function DisplayToolBar() {
          return (
            /* binding */
            _DisplayToolBar
          );
        },

        /* harmony export */
        "Product": function Product() {
          return (
            /* binding */
            _Product
          );
        },

        /* harmony export */
        "ApiProducts": function ApiProducts() {
          return (
            /* binding */
            _ApiProducts
          );
        },

        /* harmony export */
        "OrderInfo": function OrderInfo() {
          return (
            /* binding */
            _OrderInfo
          );
        },

        /* harmony export */
        "OrderDetail": function OrderDetail() {
          return (
            /* binding */
            _OrderDetail
          );
        },

        /* harmony export */
        "ApiOrderResponse": function ApiOrderResponse() {
          return (
            /* binding */
            _ApiOrderResponse
          );
        },

        /* harmony export */
        "ApiCheckUpgradeFirmwareResponse": function ApiCheckUpgradeFirmwareResponse() {
          return (
            /* binding */
            _ApiCheckUpgradeFirmwareResponse
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _models_app_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../models/app.enum */
      34932);

      var _BaseApiModel = /*#__PURE__*/function () {
        function _BaseApiModel(obj) {
          _classCallCheck(this, _BaseApiModel);

          Object.assign(this, obj);
        }

        return _createClass(_BaseApiModel, [{
          key: "toString",
          value: function toString() {
            var body = Object.assign({}, this);

            if (body['message']) {
              delete body['message'];
            }

            return JSON.stringify(body);
          }
        }]);
      }();

      var _BaseApiResponse = /*#__PURE__*/function (_BaseApiModel2) {
        function _BaseApiResponse() {
          _classCallCheck(this, _BaseApiResponse);

          return _callSuper(this, _BaseApiResponse, arguments);
        }

        _inherits(_BaseApiResponse, _BaseApiModel2);

        return _createClass(_BaseApiResponse);
      }(_BaseApiModel);

      var _ApiDataResponse = /*#__PURE__*/function (_BaseApiResponse2) {
        function _ApiDataResponse() {
          _classCallCheck(this, _ApiDataResponse);

          return _callSuper(this, _ApiDataResponse, arguments);
        }

        _inherits(_ApiDataResponse, _BaseApiResponse2);

        return _createClass(_ApiDataResponse);
      }(_BaseApiResponse);

      var _FixPartItem = /*#__PURE__*/_createClass(function _FixPartItem() {
        _classCallCheck(this, _FixPartItem);
      });

      var _MostLikelyFixFixesItem = /*#__PURE__*/_createClass(function _MostLikelyFixFixesItem() {
        _classCallCheck(this, _MostLikelyFixFixesItem);
      });

      var _ApiGetList = /*#__PURE__*/function (_ApiDataResponse2) {
        function _ApiGetList() {
          _classCallCheck(this, _ApiGetList);

          return _callSuper(this, _ApiGetList, arguments);
        }

        _inherits(_ApiGetList, _ApiDataResponse2);

        return _createClass(_ApiGetList);
      }(_ApiDataResponse);

      var _InfoModalVehicle = /*#__PURE__*/_createClass(function _InfoModalVehicle() {
        _classCallCheck(this, _InfoModalVehicle);
      });

      var _ApiDecodeVinResponse = /*#__PURE__*/function (_ApiDataResponse3) {
        function _ApiDecodeVinResponse() {
          _classCallCheck(this, _ApiDecodeVinResponse);

          return _callSuper(this, _ApiDecodeVinResponse, arguments);
        }

        _inherits(_ApiDecodeVinResponse, _ApiDataResponse3);

        return _createClass(_ApiDecodeVinResponse, [{
          key: "vehicleName",
          get: function get() {
            return "".concat(this.year, " ").concat(this.make, " ").concat(this.model);
          }
        }]);
      }(_ApiDataResponse);

      var _TirePressureItem = /*#__PURE__*/_createClass(function _TirePressureItem() {
        _classCallCheck(this, _TirePressureItem);
      });

      var _ApiCreateReportRequest = /*#__PURE__*/_createClass(function _ApiCreateReportRequest(obj) {
        _classCallCheck(this, _ApiCreateReportRequest);

        this.RawDataVersion = 5;
        this.UsbProductId = 720;
        Object.assign(this, obj);
      });

      var _ApiUpdateReportRequest = /*#__PURE__*/_createClass(function _ApiUpdateReportRequest() {
        _classCallCheck(this, _ApiUpdateReportRequest);
      });

      var _VehicleInfo = /*#__PURE__*/_createClass(function _VehicleInfo() {
        _classCallCheck(this, _VehicleInfo);
      });

      var _ApiCreateReportResponse = /*#__PURE__*/function (_ApiDataResponse4) {
        function _ApiCreateReportResponse() {
          _classCallCheck(this, _ApiCreateReportResponse);

          return _callSuper(this, _ApiCreateReportResponse, arguments);
        }

        _inherits(_ApiCreateReportResponse, _ApiDataResponse4);

        return _createClass(_ApiCreateReportResponse, [{
          key: "isMILOn",
          get: // tsbAndRecalls: {
          //   vehicle: VehicleInfo;
          //   numberOfSafetyRecalls: number;
          //   numberOfTSBCategory: number;
          //   safetyRecalls: tsbRecallModel[];
          //   tsbCategories?: TsbCategoryModel[];
          // }

          /** Other properties for parsing data on view */
          function get() {
            var status_On = 'ON';

            if (this.powertrainModule) {
              if (typeof this.powertrainModule.milStatus === 'string') {
                return this.powertrainModule.milStatus.toUpperCase() === status_On;
              }

              return !!(this.powertrainModule.primaryDTC && this.powertrainModule.primaryDTC.code);
            }

            return true;
          }
        }, {
          key: "isLedOff",
          get: function get() {
            return this.ledStatus === _models_app_enum__WEBPACK_IMPORTED_MODULE_0__.EnumLedStatus.Off;
          }
        }, {
          key: "isLedGreen",
          get: function get() {
            return this.ledStatus === _models_app_enum__WEBPACK_IMPORTED_MODULE_0__.EnumLedStatus.Green;
          }
        }, {
          key: "isLedYellow",
          get: function get() {
            return this.ledStatus === _models_app_enum__WEBPACK_IMPORTED_MODULE_0__.EnumLedStatus.Yellow;
          }
        }, {
          key: "isLedRed",
          get: function get() {
            return this.ledStatus === _models_app_enum__WEBPACK_IMPORTED_MODULE_0__.EnumLedStatus.Red;
          }
        }, {
          key: "hasDtc",
          get: function get() {
            return this.powertrainModule ? this.powertrainModule.numberOfDTCs > 0 : this.totalDtc ? this.totalDtc > 0 : false;
          }
        }, {
          key: "hasFixes",
          get: function get() {
            return this.mostLikelyFixFixes && this.mostLikelyFixFixes.length > 0;
          }
        }, {
          key: "hasMonitors",
          get: function get() {
            return this.monitors && this.monitors.length > 0;
          }
        }, {
          key: "primaryDtc",
          get: function get() {
            return this.troubleCodes && this.troubleCodes.milDtc ? this.troubleCodes.milDtc : null;
          }
        }, {
          key: "verifiedFixes",
          get: function get() {
            return this.mostLikelyFixFixes ? this.mostLikelyFixFixes.map(function (f) {
              return f;
            }) : [];
          }
        }, {
          key: "localCreateReportTime",
          get: function get() {
            return new Date(this.createdDateTime + ' UTC').toString();
          }
        }, {
          key: "ledDTC",
          get: function get() {
            switch (this.ledStatus) {
              case _models_app_enum__WEBPACK_IMPORTED_MODULE_0__.EnumLedStatus.Green:
                {
                  return {
                    "class": 'line-success',
                    src: '/assets/svg/inv-tbl-green.svg',
                    text: 'Ready'
                  };
                }

              case _models_app_enum__WEBPACK_IMPORTED_MODULE_0__.EnumLedStatus.Yellow:
                {
                  return {
                    "class": 'line-warning',
                    src: '/assets/svg/inv-tbl-yellow.svg',
                    text: 'Not Ready'
                  };
                }

              case _models_app_enum__WEBPACK_IMPORTED_MODULE_0__.EnumLedStatus.Red:
                {
                  return {
                    "class": 'line-danger',
                    src: '/assets/svg/inv-tbl-red.svg',
                    text: 'Not Complete'
                  };
                }

              default:
                {
                  return {
                    "class": 'line-danger',
                    src: '/assets/svg/inv-tbl-red.svg',
                    text: 'Not Complete'
                  };
                }
            }
          }
        }, {
          key: "battery",
          get: function get() {
            if (this.overview.batteryLife) {
              switch (this.overview.batteryLife.status) {
                case 'Good':
                  {
                    return {
                      "class": 'line-success',
                      src: '/assets/svg/inv-battery-life-green.svg',
                      text: 'Good'
                    };
                  }

                case 'Replace Battery':
                  {
                    return {
                      "class": 'line-danger',
                      src: '/assets/svg/inv-battery-life-red.svg',
                      text: 'Replace Battery'
                    };
                  }

                default:
                  {
                    return {
                      "class": 'line-danger',
                      src: '/assets/svg/inv-battery-life-red.svg',
                      text: 'Replace Battery'
                    };
                  }
              }
            }
          }
        }, {
          key: "severityLevel",
          get: function get() {
            if (this.powertrainModule.primaryDTC) {
              switch (this.powertrainModule.primaryDTC.laymansTermSeverityLevel) {
                case _models_app_enum__WEBPACK_IMPORTED_MODULE_0__.SeverityLevel.low:
                  {
                    return 'Low Severity';
                  }

                case _models_app_enum__WEBPACK_IMPORTED_MODULE_0__.SeverityLevel.medium:
                  {
                    return 'Medium Severity';
                  }

                case _models_app_enum__WEBPACK_IMPORTED_MODULE_0__.SeverityLevel.high:
                  {
                    return 'High Severity';
                  }

                default:
                  {
                    return '';
                  }
              }
            }
          }
        }, {
          key: "highlightWidgetTirePressure",
          get: function get() {
            if (this.overview.tirePressure && this.overview.tirePressure.leftFrontTirePressure && this.overview.tirePressure.leftFrontTirePressure.status == _EnumStatusTirePressure.Low || this.overview.tirePressure && this.overview.tirePressure.leftRearTirePressure && this.overview.tirePressure.leftRearTirePressure.status == _EnumStatusTirePressure.Low || this.overview.tirePressure && this.overview.tirePressure.rightFrontTirePressure && this.overview.tirePressure.rightFrontTirePressure.status == _EnumStatusTirePressure.Low || this.overview.tirePressure && this.overview.tirePressure.rightRearTirePressure && this.overview.tirePressure.rightRearTirePressure.status == _EnumStatusTirePressure.Low) {
              return 'line-danger';
            } else {
              return 'line-success';
            }
          }
        }, {
          key: "localUpdateDateTime",
          get: function get() {
            return new Date(this.customerInfo.updatedDateTime + ' UTC').toString();
          }
        }, {
          key: "isExpiredWarranty",
          get: function get() {
            return this.overview.warrantyStatus === 'Expired';
          }
        }, {
          key: "isPassedOilLife",
          get: function get() {
            return this.overview.oilLife && this.overview.oilLife.status ? this.overview.oilLife.status === _models_app_enum__WEBPACK_IMPORTED_MODULE_0__.EnumMessageOilLife.SUCCESS : false;
          }
        }, {
          key: "isGoodConditionBrakePadLife",
          get: function get() {
            return this.overview.brakePadLife && this.overview.brakePadLife.status ? this.overview.brakePadLife.status === _models_app_enum__WEBPACK_IMPORTED_MODULE_0__.EnumMessageBrakeLife.SUCCESS : false;
          }
        }, {
          key: "isGoodConditionFrontBrakePadLife",
          get: function get() {
            return this.overview.frontbrakePadLife && this.overview.frontbrakePadLife.status ? this.overview.frontbrakePadLife.status === _models_app_enum__WEBPACK_IMPORTED_MODULE_0__.EnumMessageBrakeLife.SUCCESS : false;
          }
        }, {
          key: "isGoodConditionRearBrakePadLife",
          get: function get() {
            return this.overview.rearbrakePadLife && this.overview.rearbrakePadLife.status ? this.overview.rearbrakePadLife.status === _models_app_enum__WEBPACK_IMPORTED_MODULE_0__.EnumMessageBrakeLife.SUCCESS : false;
          }
        }]);
      }(_ApiDataResponse); // export class ReportSummary {
      //   id;
      //   reportNumber: number;
      //   mileage;
      //   createdDate;
      //   createdTime;
      //   vin;
      //   vehicleName;
      //   customerName;
      //   customerPhone;
      //   customerEmail;
      //   totalDtcs: number;
      //   totalModules: number;
      //   scanningType: PrintType;
      // }
      // export class ApiGetReportsResponse extends ApiDataResponse {
      //   currentPage?: number;
      //   pageSize?: number;
      //   totalPages?: number;
      //   totalRecords?: number;
      //   data: ReportSummary[];
      // }


      var VehicleFix = /*#__PURE__*/_createClass(function VehicleFix() {
        _classCallCheck(this, VehicleFix);
      });

      var _MonitorItem = /*#__PURE__*/_createClass(function _MonitorItem() {
        _classCallCheck(this, _MonitorItem);
      });

      var _DataUpdateInfo = /*#__PURE__*/_createClass(function _DataUpdateInfo(ReportId, firstName, lastName, phone, email, updatedDateTime) {
        _classCallCheck(this, _DataUpdateInfo);

        this.ReportId = ReportId;
        this.FirstName = firstName;
        this.LastName = lastName;
        this.Phone = phone;
        this.email = email;
        this.updatedDateTime = updatedDateTime || new Date().getTime();
      });

      var _ApiReportPrimaryTSBs = /*#__PURE__*/function (_ApiDataResponse5) {
        function _ApiReportPrimaryTSBs() {
          _classCallCheck(this, _ApiReportPrimaryTSBs);

          return _callSuper(this, _ApiReportPrimaryTSBs, arguments);
        }

        _inherits(_ApiReportPrimaryTSBs, _ApiDataResponse5);

        return _createClass(_ApiReportPrimaryTSBs);
      }(_ApiDataResponse);

      var _ApiReportTSBs = /*#__PURE__*/function (_ApiDataResponse6) {
        function _ApiReportTSBs() {
          _classCallCheck(this, _ApiReportTSBs);

          return _callSuper(this, _ApiReportTSBs, arguments);
        }

        _inherits(_ApiReportTSBs, _ApiDataResponse6);

        return _createClass(_ApiReportTSBs);
      }(_ApiDataResponse); // new


      var _ApiTsbsAndRecall = /*#__PURE__*/function (_ApiDataResponse7) {
        function _ApiTsbsAndRecall() {
          _classCallCheck(this, _ApiTsbsAndRecall);

          return _callSuper(this, _ApiTsbsAndRecall, arguments);
        }

        _inherits(_ApiTsbsAndRecall, _ApiDataResponse7);

        return _createClass(_ApiTsbsAndRecall);
      }(_ApiDataResponse);

      var _ApiReportSearchTSBs = /*#__PURE__*/_createClass(function _ApiReportSearchTSBs() {
        _classCallCheck(this, _ApiReportSearchTSBs);
      });

      var _TsbCategoryModel = /*#__PURE__*/_createClass(function _TsbCategoryModel(obj) {
        _classCallCheck(this, _TsbCategoryModel);

        Object.assign(this, obj);
      });

      var _TsbModel = /*#__PURE__*/_createClass(function _TsbModel() {
        _classCallCheck(this, _TsbModel);
      });

      var _tsbRecallModel = /*#__PURE__*/_createClass(function _tsbRecallModel() {
        _classCallCheck(this, _tsbRecallModel);
      });

      var _ApiReportTsbRecall = /*#__PURE__*/_createClass(function _ApiReportTsbRecall() {
        _classCallCheck(this, _ApiReportTsbRecall);
      });

      var _ApiReportFailedModules = /*#__PURE__*/function (_ApiDataResponse8) {
        function _ApiReportFailedModules() {
          _classCallCheck(this, _ApiReportFailedModules);

          return _callSuper(this, _ApiReportFailedModules, arguments);
        }

        _inherits(_ApiReportFailedModules, _ApiDataResponse8);

        return _createClass(_ApiReportFailedModules, [{
          key: "hasDTC",
          get: function get() {
            return this.powertrainModule && this.powertrainModule.numberOfDTCs > 0;
          }
        }]);
      }(_ApiDataResponse);

      var _EnumStatusTirePressure;

      (function (EnumStatusTirePressure) {
        EnumStatusTirePressure["NotReady"] = "Not Ready";
        EnumStatusTirePressure["Ok"] = "Ok";
        EnumStatusTirePressure["High"] = "High";
        EnumStatusTirePressure["Low"] = "Low";
      })(_EnumStatusTirePressure || (_EnumStatusTirePressure = {}));

      var _ApiReportOverview = /*#__PURE__*/function (_ApiDataResponse9) {
        function _ApiReportOverview() {
          _classCallCheck(this, _ApiReportOverview);

          return _callSuper(this, _ApiReportOverview, arguments);
        }

        _inherits(_ApiReportOverview, _ApiDataResponse9);

        return _createClass(_ApiReportOverview, [{
          key: "localCreateReportTime",
          get: function get() {
            return new Date(this.createdDateTime + ' UTC').toString();
          }
        }, {
          key: "localUpdateDateTime",
          get: function get() {
            return new Date(this.customerInfo.updatedDateTime + ' UTC').toString();
          }
        }, {
          key: "isExpiredWarranty",
          get: function get() {
            return this.overview.warrantyStatus == 'Expired';
          }
        }, {
          key: "isGoodConditionBrakePadLife",
          get: function get() {
            return this.overview.brakePadLife && this.overview.brakePadLife.status ? this.overview.brakePadLife.status == 'Good Condition' : false;
          }
        }, {
          key: "ledDTC",
          get: function get() {
            switch (this.ledStatus) {
              case _models_app_enum__WEBPACK_IMPORTED_MODULE_0__.EnumLedStatus.Green:
                {
                  return {
                    "class": 'line-success',
                    src: '/assets/svg/inv-tbl-green.svg',
                    text: 'Ready'
                  };
                }

              case _models_app_enum__WEBPACK_IMPORTED_MODULE_0__.EnumLedStatus.Yellow:
                {
                  return {
                    "class": 'line-warning',
                    src: '/assets/svg/inv-tbl-yellow.svg',
                    text: 'Not Ready'
                  };
                }

              case _models_app_enum__WEBPACK_IMPORTED_MODULE_0__.EnumLedStatus.Red:
                {
                  return {
                    "class": 'line-danger',
                    src: '/assets/svg/inv-tbl-red.svg',
                    text: 'Not Complete'
                  };
                }

              default:
                {
                  return {
                    "class": 'line-danger',
                    src: '/assets/svg/inv-tbl-red.svg',
                    text: 'Not Complete'
                  };
                }
            }
          }
        }, {
          key: "battery",
          get: function get() {
            if (this.overview.batteryLife) {
              switch (this.overview.batteryLife.status) {
                case 'Good':
                  {
                    return {
                      "class": 'line-success',
                      src: '/assets/svg/inv-battery-life-green.svg',
                      text: 'Good'
                    };
                  }

                case 'Replace Battery':
                  {
                    return {
                      "class": 'line-danger',
                      src: '/assets/svg/inv-battery-life-red.svg',
                      text: 'Replace Battery'
                    };
                  }

                default:
                  {
                    return {
                      "class": 'line-danger',
                      src: '/assets/svg/inv-battery-life-red.svg',
                      text: 'Replace Battery'
                    };
                  }
              }
            }
          } // getCaseTPMS() {
          //   if (this.overview.tirePressure) {
          //     if (this.overview.tirePressure.leftFrontTirePressure &&
          //       this.overview.tirePressure.leftRearTirePressure &&
          //       this.overview.tirePressure.rightFrontTirePressure &&
          //       this.overview.tirePressure.rightRearTirePressure) {
          //     }
          //   }
          //   return;
          // }

        }, {
          key: "highlightWidgetTirePressure",
          get: function get() {
            if (this.overview.tirePressure && this.overview.tirePressure.leftFrontTirePressure && this.overview.tirePressure.leftFrontTirePressure.status == _EnumStatusTirePressure.Low || this.overview.tirePressure && this.overview.tirePressure.leftRearTirePressure && this.overview.tirePressure.leftRearTirePressure.status == _EnumStatusTirePressure.Low || this.overview.tirePressure && this.overview.tirePressure.rightFrontTirePressure && this.overview.tirePressure.rightFrontTirePressure.status == _EnumStatusTirePressure.Low || this.overview.tirePressure && this.overview.tirePressure.rightRearTirePressure && this.overview.tirePressure.rightRearTirePressure.status == _EnumStatusTirePressure.Low) {
              return 'line-danger';
            } else {
              return 'line-success';
            }
          }
        }]);
      }(_ApiDataResponse);

      var _ApiReportPassed = /*#__PURE__*/function (_ApiDataResponse10) {
        function _ApiReportPassed() {
          _classCallCheck(this, _ApiReportPassed);

          return _callSuper(this, _ApiReportPassed, arguments);
        }

        _inherits(_ApiReportPassed, _ApiDataResponse10);

        return _createClass(_ApiReportPassed);
      }(_ApiDataResponse);

      var _ApiReportMaintenance = /*#__PURE__*/function (_ApiDataResponse11) {
        function _ApiReportMaintenance() {
          _classCallCheck(this, _ApiReportMaintenance);

          return _callSuper(this, _ApiReportMaintenance, arguments);
        }

        _inherits(_ApiReportMaintenance, _ApiDataResponse11);

        return _createClass(_ApiReportMaintenance);
      }(_ApiDataResponse);

      var _ApiGetDtcDetailsResponse = /*#__PURE__*/function (_ApiDataResponse12) {
        function _ApiGetDtcDetailsResponse() {
          _classCallCheck(this, _ApiGetDtcDetailsResponse);

          return _callSuper(this, _ApiGetDtcDetailsResponse, arguments);
        }

        _inherits(_ApiGetDtcDetailsResponse, _ApiDataResponse12);

        return _createClass(_ApiGetDtcDetailsResponse);
      }(_ApiDataResponse);

      var _ApiDLCLocationResponse = /*#__PURE__*/function (_ApiDataResponse13) {
        function _ApiDLCLocationResponse() {
          _classCallCheck(this, _ApiDLCLocationResponse);

          return _callSuper(this, _ApiDLCLocationResponse, arguments);
        }

        _inherits(_ApiDLCLocationResponse, _ApiDataResponse13);

        return _createClass(_ApiDLCLocationResponse);
      }(_ApiDataResponse);

      var _DriveCycleMonitorItem = /*#__PURE__*/_createClass(function _DriveCycleMonitorItem() {
        _classCallCheck(this, _DriveCycleMonitorItem);

        this.name = '';
        this.value = '';
        this.option = [];
        this.note = [];
        this.condition = [];
        this.procedure = [];
      });

      var _ToolInfoSendDataLog = /*#__PURE__*/_createClass(function _ToolInfoSendDataLog() {
        _classCallCheck(this, _ToolInfoSendDataLog);
      });

      var _EnumScreenType = {
        MenuForm: 'menuform',
        TextForm: 'textform',
        InputForm: 'inputtextform',
        InfoValueForm: 'infovalform',
        Softkey: 'softkeyform',
        InfoMenuForm: 'infomenuform',
        Finish: 'FinishProcess',
        GotScreenEventData: 'GotScreenEventData',
        IncreaseLoadingPercent: 'IncreaseLoadingPercent',
        UpdateTextInModal: 'UpdateTextInModal'
      };

      var _CreateUser = /*#__PURE__*/_createClass(function _CreateUser() {
        _classCallCheck(this, _CreateUser);
      });

      var _ToolUser = /*#__PURE__*/_createClass(function _ToolUser() {
        _classCallCheck(this, _ToolUser);
      });

      var _LoginUser = /*#__PURE__*/_createClass(function _LoginUser() {
        _classCallCheck(this, _LoginUser);
      });

      var _LoginModel = /*#__PURE__*/_createClass(function _LoginModel() {
        _classCallCheck(this, _LoginModel);
      });

      var _ApiUserResponse3 = /*#__PURE__*/function (_ApiDataResponse14) {
        function _ApiUserResponse3() {
          _classCallCheck(this, _ApiUserResponse3);

          return _callSuper(this, _ApiUserResponse3, arguments);
        }

        _inherits(_ApiUserResponse3, _ApiDataResponse14);

        return _createClass(_ApiUserResponse3);
      }(_ApiDataResponse);

      var _ApiTokenResponse = /*#__PURE__*/function (_ApiDataResponse15) {
        function _ApiTokenResponse() {
          _classCallCheck(this, _ApiTokenResponse);

          return _callSuper(this, _ApiTokenResponse, arguments);
        }

        _inherits(_ApiTokenResponse, _ApiDataResponse15);

        return _createClass(_ApiTokenResponse);
      }(_ApiDataResponse);

      var _ApiRegisterDeviceResponse = /*#__PURE__*/function (_ApiDataResponse16) {
        function _ApiRegisterDeviceResponse() {
          _classCallCheck(this, _ApiRegisterDeviceResponse);

          return _callSuper(this, _ApiRegisterDeviceResponse, arguments);
        }

        _inherits(_ApiRegisterDeviceResponse, _ApiDataResponse16);

        return _createClass(_ApiRegisterDeviceResponse);
      }(_ApiDataResponse);

      var _ApiDeviceInfoResponse = /*#__PURE__*/function (_ApiDataResponse17) {
        function _ApiDeviceInfoResponse() {
          _classCallCheck(this, _ApiDeviceInfoResponse);

          return _callSuper(this, _ApiDeviceInfoResponse, arguments);
        }

        _inherits(_ApiDeviceInfoResponse, _ApiDataResponse17);

        return _createClass(_ApiDeviceInfoResponse);
      }(_ApiDataResponse);

      var _ApiEmailReportResponse = /*#__PURE__*/function (_ApiDataResponse18) {
        function _ApiEmailReportResponse() {
          _classCallCheck(this, _ApiEmailReportResponse);

          return _callSuper(this, _ApiEmailReportResponse, arguments);
        }

        _inherits(_ApiEmailReportResponse, _ApiDataResponse18);

        return _createClass(_ApiEmailReportResponse);
      }(_ApiDataResponse);

      var _Retailer = /*#__PURE__*/_createClass(function _Retailer() {
        _classCallCheck(this, _Retailer);
      });

      var _ApiRetailers = /*#__PURE__*/function (_ApiDataResponse19) {
        function _ApiRetailers() {
          _classCallCheck(this, _ApiRetailers);

          return _callSuper(this, _ApiRetailers, arguments);
        }

        _inherits(_ApiRetailers, _ApiDataResponse19);

        return _createClass(_ApiRetailers);
      }(_ApiDataResponse);

      var _ApiRetailerPartsForAdvanceAutoPart = /*#__PURE__*/function (_ApiDataResponse20) {
        function _ApiRetailerPartsForAdvanceAutoPart() {
          _classCallCheck(this, _ApiRetailerPartsForAdvanceAutoPart);

          return _callSuper(this, _ApiRetailerPartsForAdvanceAutoPart, arguments);
        }

        _inherits(_ApiRetailerPartsForAdvanceAutoPart, _ApiDataResponse20);

        return _createClass(_ApiRetailerPartsForAdvanceAutoPart);
      }(_ApiDataResponse);

      var _Battery = /*#__PURE__*/_createClass(function _Battery() {
        _classCallCheck(this, _Battery);
      });

      var _DisplayToolBar = /*#__PURE__*/_createClass(function _DisplayToolBar() {
        _classCallCheck(this, _DisplayToolBar);
      });

      var _Product = /*#__PURE__*/_createClass(function _Product() {
        _classCallCheck(this, _Product);
      });

      var _ApiProducts = /*#__PURE__*/function (_ApiDataResponse21) {
        function _ApiProducts() {
          _classCallCheck(this, _ApiProducts);

          return _callSuper(this, _ApiProducts, arguments);
        }

        _inherits(_ApiProducts, _ApiDataResponse21);

        return _createClass(_ApiProducts);
      }(_ApiDataResponse);

      var _OrderInfo = /*#__PURE__*/_createClass(function _OrderInfo() {
        _classCallCheck(this, _OrderInfo);
      });

      var _OrderDetail = /*#__PURE__*/_createClass(function _OrderDetail(sku, quantity) {
        _classCallCheck(this, _OrderDetail);

        this.SKU = sku;
        this.Quantity = quantity;
      });

      var _ApiOrderResponse = /*#__PURE__*/function (_ApiDataResponse22) {
        function _ApiOrderResponse() {
          _classCallCheck(this, _ApiOrderResponse);

          return _callSuper(this, _ApiOrderResponse, arguments);
        }

        _inherits(_ApiOrderResponse, _ApiDataResponse22);

        return _createClass(_ApiOrderResponse);
      }(_ApiDataResponse);

      var _ApiCheckUpgradeFirmwareResponse = /*#__PURE__*/function (_ApiDataResponse23) {
        function _ApiCheckUpgradeFirmwareResponse() {
          _classCallCheck(this, _ApiCheckUpgradeFirmwareResponse);

          return _callSuper(this, _ApiCheckUpgradeFirmwareResponse, arguments);
        }

        _inherits(_ApiCheckUpgradeFirmwareResponse, _ApiDataResponse23);

        return _createClass(_ApiCheckUpgradeFirmwareResponse);
      }(_ApiDataResponse);
      /***/

    },

    /***/
    44073:
    /*!*******************************************************!*\
      !*** ./src/app/services/auth-service/auth-service.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AuthServiceProvider": function AuthServiceProvider() {
          return (
            /* binding */
            _AuthServiceProvider
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      42321);
      /* harmony import */


      var src_app_models_app_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/models/app.model */
      20998);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      76491);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! rxjs */
      81134);
      /* harmony import */


      var src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/configs/app.config */
      66626);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      53803);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs/operators */
      33927);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs/operators */
      18293);
      /* harmony import */


      var src_app_models_app_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/models/app.constant */
      99888);
      /* harmony import */


      var _state_user_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../state/user.state */
      2470);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _api_rest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../api-rest.service */
      96363);

      var _AuthServiceProvider_instances, _AuthServiceProvider_importUserResponseToStorage, _AuthServiceProvider_loadFromStorage, _AuthServiceProvider_setAuthData;

      var invalidTokenKeyCode = 401;
      /*
        Generated class for the AuthServiceProvider provider.
      
        See https://angular.io/docs/ts/latest/guide/dependency-injection.html
        for more info on providers and Angular DI.
      */

      var API_LOGIN = '/shops/login';
      var API_GET_USER_INFO = '/shops/getUserInformation';
      var API_RESET_PASSWORD = '/shops/{USER_ID}/resetpassword';

      var _AuthServiceProvider = /*#__PURE__*/function () {
        function _AuthServiceProvider(apiRestService) {
          _classCallCheck(this, _AuthServiceProvider);

          this.apiRestService = apiRestService;

          _AuthServiceProvider_instances.add(this);

          this.authState = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(null);
        }

        return _createClass(_AuthServiceProvider, [{
          key: "init",
          value: function init() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
              return _regeneratorRuntime().wrap(function _callee7$(_context7) {
                while (1) switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__classPrivateFieldGet)(this, _AuthServiceProvider_instances, "m", _AuthServiceProvider_loadFromStorage).call(this);

                  case 2:
                  case "end":
                    return _context7.stop();
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "checkToken",
          value: function checkToken() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
              var resp;
              return _regeneratorRuntime().wrap(function _callee8$(_context8) {
                while (1) switch (_context8.prev = _context8.next) {
                  case 0:
                    _context8.prev = 0;
                    _context8.next = 3;
                    return this.loginByToken();

                  case 3:
                    resp = _context8.sent;
                    _context8.next = 6;
                    return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__classPrivateFieldGet)(this, _AuthServiceProvider_instances, "m", _AuthServiceProvider_importUserResponseToStorage).call(this, resp);

                  case 6:
                    _context8.next = 12;
                    break;

                  case 8:
                    _context8.prev = 8;
                    _context8.t0 = _context8["catch"](0);

                    if (!((_context8.t0 === null || _context8.t0 === void 0 ? void 0 : _context8.t0.status) === invalidTokenKeyCode)) {
                      _context8.next = 12;
                      break;
                    }

                    return _context8.abrupt("return", Promise.resolve(false));

                  case 12:
                    return _context8.abrupt("return", Promise.resolve(true));

                  case 13:
                  case "end":
                    return _context8.stop();
                }
              }, _callee8, this, [[0, 8]]);
            }));
          }
        }, {
          key: "loginByToken",
          value: function loginByToken() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
              var resp;
              return _regeneratorRuntime().wrap(function _callee9$(_context9) {
                while (1) switch (_context9.prev = _context9.next) {
                  case 0:
                    _context9.next = 2;
                    return this.apiRestService.get(API_GET_USER_INFO).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.timeout)(src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_1__.AppConfig.shortHttpRequestTimeoutInMs), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(function (res) {
                      return new src_app_models_app_model__WEBPACK_IMPORTED_MODULE_0__.ApiUserResponse(res);
                    }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.catchError)(function (error) {
                      return (0, rxjs__WEBPACK_IMPORTED_MODULE_10__.of)(new src_app_models_app_model__WEBPACK_IMPORTED_MODULE_0__.ApiUserResponse(error));
                    })).toPromise();

                  case 2:
                    resp = _context9.sent;

                    if (!resp.success) {
                      _context9.next = 7;
                      break;
                    }

                    _context9.next = 6;
                    return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__classPrivateFieldGet)(this, _AuthServiceProvider_instances, "m", _AuthServiceProvider_importUserResponseToStorage).call(this, resp);

                  case 6:
                    return _context9.abrupt("return", resp);

                  case 7:
                  case "end":
                    return _context9.stop();
                }
              }, _callee9, this);
            }));
          }
        }, {
          key: "login",
          value: function login(username, password) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
              var credentials, resp;
              return _regeneratorRuntime().wrap(function _callee10$(_context10) {
                while (1) switch (_context10.prev = _context10.next) {
                  case 0:
                    if (!(username && password)) {
                      _context10.next = 9;
                      break;
                    }

                    credentials = {
                      u: username,
                      p: password,
                      isFitCar: true
                    };
                    _context10.next = 4;
                    return this.apiRestService.post(API_LOGIN, credentials).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.timeout)(src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_1__.AppConfig.shortHttpRequestTimeoutInMs), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(function (res) {
                      return new src_app_models_app_model__WEBPACK_IMPORTED_MODULE_0__.ApiUserResponse(res);
                    }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.catchError)(function (error) {
                      return (0, rxjs__WEBPACK_IMPORTED_MODULE_10__.of)(new src_app_models_app_model__WEBPACK_IMPORTED_MODULE_0__.ApiUserResponse(error));
                    })).toPromise();

                  case 4:
                    resp = _context10.sent;

                    if (!resp.success) {
                      _context10.next = 8;
                      break;
                    }

                    _context10.next = 8;
                    return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__classPrivateFieldGet)(this, _AuthServiceProvider_instances, "m", _AuthServiceProvider_importUserResponseToStorage).call(this, resp);

                  case 8:
                    return _context10.abrupt("return", resp);

                  case 9:
                    return _context10.abrupt("return", null);

                  case 10:
                  case "end":
                    return _context10.stop();
                }
              }, _callee10, this);
            }));
          }
        }, {
          key: "reset",
          value: function reset(email) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
              return _regeneratorRuntime().wrap(function _callee11$(_context11) {
                while (1) switch (_context11.prev = _context11.next) {
                  case 0:
                    return _context11.abrupt("return", this.apiRestService.post(API_RESET_PASSWORD.replace('{USER_ID}', email), {}).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.timeout)(src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_1__.AppConfig.shortHttpRequestTimeoutInMs), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(function (res) {
                      return new src_app_models_app_model__WEBPACK_IMPORTED_MODULE_0__.ApiBooleanResponse(res);
                    }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.catchError)(function (error) {
                      return (0, rxjs__WEBPACK_IMPORTED_MODULE_10__.of)(new src_app_models_app_model__WEBPACK_IMPORTED_MODULE_0__.ApiBooleanResponse(error));
                    })).toPromise());

                  case 1:
                  case "end":
                    return _context11.stop();
                }
              }, _callee11, this);
            }));
          }
        }, {
          key: "setUserInfo",
          value: function setUserInfo(user) {
            this.currentUser = user;
            localStorage.setItem(src_app_models_app_constant__WEBPACK_IMPORTED_MODULE_2__.StorageKeys.ACCESS_KEY, user.authorizationKey);
            localStorage.setItem(src_app_models_app_constant__WEBPACK_IMPORTED_MODULE_2__.StorageKeys.USER_ID, user.id);
            localStorage.setItem(src_app_models_app_constant__WEBPACK_IMPORTED_MODULE_2__.StorageKeys.USER_INFO, JSON.stringify(this.currentUser));
          }
        }, {
          key: "logout",
          value: function logout() {
            this.currentUser = null;
            localStorage.removeItem(src_app_models_app_constant__WEBPACK_IMPORTED_MODULE_2__.StorageKeys.USER_ID);
            localStorage.removeItem(src_app_models_app_constant__WEBPACK_IMPORTED_MODULE_2__.StorageKeys.ACCESS_KEY);
            localStorage.removeItem(src_app_models_app_constant__WEBPACK_IMPORTED_MODULE_2__.StorageKeys.USER_INFO);
            localStorage.removeItem(src_app_models_app_constant__WEBPACK_IMPORTED_MODULE_2__.StorageKeys.USER_SETTINGS);
            localStorage.removeItem(src_app_models_app_constant__WEBPACK_IMPORTED_MODULE_2__.StorageKeys.REPORT_SESSION);
            this.clearCacheReports();

            _state_user_state__WEBPACK_IMPORTED_MODULE_3__.UserState.resetAll();
          }
        }, {
          key: "clearCacheReports",
          value: function clearCacheReports() {
            var arr = [];

            for (var i = 0; i < localStorage.length; i++) {
              if (localStorage.key(i).indexOf(src_app_models_app_constant__WEBPACK_IMPORTED_MODULE_2__.StorageKeys.REPORT_DETAILS) > -1) {
                arr.push(localStorage.key(i));
              }
            }

            for (var _i = 0; _i < arr.length; _i++) {
              localStorage.removeItem(arr[_i]);
            }
          }
        }]);
      }();

      _AuthServiceProvider_instances = new WeakSet(), _AuthServiceProvider_importUserResponseToStorage = function _AuthServiceProvider_importUserResponseToStorage(resp) {
        return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee12() {
          return _regeneratorRuntime().wrap(function _callee12$(_context12) {
            while (1) switch (_context12.prev = _context12.next) {
              case 0:
                if (resp.success && resp.data) {
                  localStorage.setItem(src_app_models_app_constant__WEBPACK_IMPORTED_MODULE_2__.StorageKeys.LAST_LOGIN_TIME, new Date().getTime().toString());
                  localStorage.setItem(src_app_models_app_constant__WEBPACK_IMPORTED_MODULE_2__.StorageKeys.ACCESS_KEY, resp.data.authorizationKey);
                  localStorage.setItem(src_app_models_app_constant__WEBPACK_IMPORTED_MODULE_2__.StorageKeys.USER_INFO, JSON.stringify(resp.data)); //this.userProfile = resp.user;

                  (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__classPrivateFieldGet)(this, _AuthServiceProvider_instances, "m", _AuthServiceProvider_setAuthData).call(this, resp.data, resp.data.authorizationKey);
                }

              case 1:
              case "end":
                return _context12.stop();
            }
          }, _callee12, this);
        }));
      }, _AuthServiceProvider_loadFromStorage = function _AuthServiceProvider_loadFromStorage() {
        return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee13() {
          var token, userProfile;
          return _regeneratorRuntime().wrap(function _callee13$(_context13) {
            while (1) switch (_context13.prev = _context13.next) {
              case 0:
                token = localStorage.getItem(src_app_models_app_constant__WEBPACK_IMPORTED_MODULE_2__.StorageKeys.ACCESS_KEY);
                userProfile = localStorage.getItem(src_app_models_app_constant__WEBPACK_IMPORTED_MODULE_2__.StorageKeys.USER_INFO);

                if (token && userProfile) {
                  _state_user_state__WEBPACK_IMPORTED_MODULE_3__.UserState.setAuthenticatedUser(JSON.parse(userProfile), token);
                } else {
                  _state_user_state__WEBPACK_IMPORTED_MODULE_3__.UserState.setAuthenticatedUser(null, null);
                }

              case 3:
              case "end":
                return _context13.stop();
            }
          }, _callee13);
        }));
      }, _AuthServiceProvider_setAuthData = function _AuthServiceProvider_setAuthData(user, token) {
        if (user && token) {
          this.authState.next(true);

          _state_user_state__WEBPACK_IMPORTED_MODULE_3__.UserState.setAuthenticatedUser(user, token);
        } else {
          this.authState.next(false);

          _state_user_state__WEBPACK_IMPORTED_MODULE_3__.UserState.setAuthenticatedUser();
        }
      };

      _AuthServiceProvider.ɵfac = function AuthServiceProvider_Factory(t) {
        return new (t || _AuthServiceProvider)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_api_rest_service__WEBPACK_IMPORTED_MODULE_4__.ApiRestService));
      };

      _AuthServiceProvider.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjectable"]({
        token: _AuthServiceProvider,
        factory: _AuthServiceProvider.ɵfac
      });
      /***/
    },

    /***/
    54382:
    /*!**********************************************!*\
      !*** ./src/app/services/database.service.ts ***!
      \**********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DatabaseService": function DatabaseService() {
          return (
            /* binding */
            _DatabaseService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! tslib */
      42321);
      /* harmony import */


      var src_app_models_app_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/models/app.enum */
      34932);
      /* harmony import */


      var src_app_models_app_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/models/app.data */
      40354);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs */
      76491);
      /* harmony import */


      var _models_app_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../models/app.model */
      20998);
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! lodash */
      202);
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var _models_app_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../models/app.constant */
      99888);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/sqlite/ngx */
      24921);
      /* harmony import */


      var _logger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./logger */
      88737);

      var _DatabaseService = /*#__PURE__*/function () {
        function _DatabaseService(sqlite, appLoggerService) {
          _classCallCheck(this, _DatabaseService);

          this.sqlite = sqlite;
          this.reports = new rxjs__WEBPACK_IMPORTED_MODULE_7__.BehaviorSubject([]);
          this.liveDataReports = new rxjs__WEBPACK_IMPORTED_MODULE_7__.BehaviorSubject([]);
          this.settingData = new rxjs__WEBPACK_IMPORTED_MODULE_7__.BehaviorSubject([]);
          this.isDbReady = new rxjs__WEBPACK_IMPORTED_MODULE_7__.BehaviorSubject(false);
          this.cacheData = new rxjs__WEBPACK_IMPORTED_MODULE_7__.BehaviorSubject([]);
          this.logger = appLoggerService.getLogger(this.constructor.name);
        }

        return _createClass(_DatabaseService, [{
          key: "createDB",
          value: function createDB() {
            var _this5 = this;

            this.sqlite.create({
              name: _models_app_constant__WEBPACK_IMPORTED_MODULE_4__.AppConstants.databaseFileName,
              location: 'default'
            }).then(function (db) {
              return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(_this5, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee14() {
                return _regeneratorRuntime().wrap(function _callee14$(_context14) {
                  while (1) switch (_context14.prev = _context14.next) {
                    case 0:
                      this.storage = db;

                    case 1:
                    case "end":
                      return _context14.stop();
                  }
                }, _callee14, this);
              }));
            })["catch"](function (err) {
              _this5.logger.error('Err Create DB', err);
            });
          }
        }, {
          key: "dbState",
          get: function get() {
            return this.isDbReady.value;
          }
        }, {
          key: "fetchReports",
          value: function fetchReports() {
            return this.reports.asObservable();
          }
        }, {
          key: "fetchLiveDataReports",
          value: function fetchLiveDataReports() {
            return this.liveDataReports.asObservable();
          }
        }, {
          key: "fetchSettingData",
          value: function fetchSettingData() {
            return this.settingData.asObservable();
          }
        }, {
          key: "fetchCacheData",
          value: function fetchCacheData() {
            return this.cacheData.asObservable();
          } // Get list

        }, {
          key: "getSQLReports",
          value: function getSQLReports() {
            var customerName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
            var vehicle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
            var phone = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
            var email = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
            var orderBy = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
            var sort = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
            orderBy = orderBy || 'id';
            sort = sort || 'DESC';
            var sql = 'SELECT id, reportId, reportNumber, customerName, vehicle, phone, email, scanningType, isSentReport, createdAt, dtcs FROM reports ';
            var sqlWhere = 'WHERE';
            sqlWhere += customerName ? " customerName LIKE '%" + customerName + "%' " : '';

            if (sqlWhere !== 'WHERE' && vehicle) {
              sqlWhere += 'AND';
            }

            sqlWhere += vehicle ? " vehicle LIKE '%" + vehicle + "%' " : '';

            if (sqlWhere !== 'WHERE' && phone) {
              sqlWhere += 'AND';
            }

            sqlWhere += phone ? " phone LIKE '%" + phone + "%' " : '';

            if (sqlWhere !== 'WHERE' && email) {
              sqlWhere += 'AND';
            }

            sqlWhere += email ? " email LIKE '%" + email + "%' " : '';
            sql += sqlWhere !== 'WHERE' ? sqlWhere : '';
            sql += ' ORDER BY ' + orderBy + ' ' + sort;
            return sql;
          }
        }, {
          key: "getReports",
          value: function getReports() {
            var _this6 = this;

            var customerName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
            var vehicle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
            var phone = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
            var email = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
            var orderBy = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
            var sort = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
            var sql = this.getSQLReports(customerName, vehicle, phone, email, orderBy, sort);
            return this.storage.executeSql(sql, []).then(function (res) {
              return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(_this6, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee15() {
                var items, i, reportHistoryItem;
                return _regeneratorRuntime().wrap(function _callee15$(_context15) {
                  while (1) switch (_context15.prev = _context15.next) {
                    case 0:
                      items = [];

                      if (res.rows.length > 0) {
                        for (i = 0; i < res.rows.length; i++) {
                          reportHistoryItem = new _models_app_model__WEBPACK_IMPORTED_MODULE_2__.ReportItem();
                          reportHistoryItem.id = res.rows.item(i).id;
                          reportHistoryItem.reportId = res.rows.item(i).reportId;
                          reportHistoryItem.reportNumber = res.rows.item(i).reportNumber;
                          reportHistoryItem.createdAt = res.rows.item(i).createdAt;
                          reportHistoryItem.customerName = res.rows.item(i).customerName;
                          reportHistoryItem.vehicle = res.rows.item(i).vehicle;
                          reportHistoryItem.dtcs = res.rows.item(i).dtcs;
                          reportHistoryItem.phone = res.rows.item(i).phone;
                          reportHistoryItem.email = res.rows.item(i).email;
                          reportHistoryItem.isSentReport = res.rows.item(i).isSentReport ? res.rows.item(i).isSentReport : 0;
                          reportHistoryItem.scanningType = res.rows.item(i).scanningType;
                          items.push(reportHistoryItem);
                        }
                      }

                      this.reports.next(items);

                    case 3:
                    case "end":
                      return _context15.stop();
                  }
                }, _callee15, this);
              }));
            })["catch"](function (error) {
              return console.error('getReports', error);
            });
          } // Add

        }, {
          key: "addReport",
          value: function addReport(reportDetails, totalDtc) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee17() {
              var _this7 = this;

              var data;
              return _regeneratorRuntime().wrap(function _callee17$(_context17) {
                while (1) switch (_context17.prev = _context17.next) {
                  case 0:
                    if (reportDetails) {
                      _context17.next = 2;
                      break;
                    }

                    return _context17.abrupt("return");

                  case 2:
                    data = [reportDetails.reportId, reportDetails.reportNumber, reportDetails.createdAt, reportDetails.vehicle ? reportDetails.vehicle.nickName : reportDetails.vin, totalDtc || reportDetails.totalDtc, reportDetails.scanningType, reportDetails ? JSON.stringify(reportDetails) : ''];
                    _context17.next = 5;
                    return this.storage.executeSql('INSERT INTO reports (reportId, reportNumber, createdAt, vehicle, dtcs, scanningType, reportDetails ) VALUES (?, ?, ?, ?, ?, ?, ?)', data).then(function (res) {
                      return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(_this7, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee16() {
                        return _regeneratorRuntime().wrap(function _callee16$(_context16) {
                          while (1) switch (_context16.prev = _context16.next) {
                            case 0:
                              _context16.next = 2;
                              return src_app_models_app_data__WEBPACK_IMPORTED_MODULE_1__.AppData.set(src_app_models_app_enum__WEBPACK_IMPORTED_MODULE_0__.EnumAppDataKey.ReportId, res && res.insertId ? res.insertId : '');

                            case 2:
                              _context16.next = 4;
                              return this.getReports();

                            case 4:
                            case "end":
                              return _context16.stop();
                          }
                        }, _callee16, this);
                      }));
                    })["catch"](function (err) {
                      _this7.logger.error('Err when addReport sql', err);
                    });

                  case 5:
                    return _context17.abrupt("return", _context17.sent);

                  case 6:
                  case "end":
                    return _context17.stop();
                }
              }, _callee17, this);
            }));
          } // Get report details

        }, {
          key: "getReport",
          value: function getReport(id) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee18() {
              var res, report, newReport;
              return _regeneratorRuntime().wrap(function _callee18$(_context18) {
                while (1) switch (_context18.prev = _context18.next) {
                  case 0:
                    _context18.prev = 0;
                    _context18.next = 3;
                    return this.storage.executeSql('SELECT * FROM reports WHERE id = ?', [id]);

                  case 3:
                    res = _context18.sent;

                    if (!(res && res.rows)) {
                      _context18.next = 11;
                      break;
                    }

                    if (!res.rows.item(0).reportDetails) {
                      _context18.next = 11;
                      break;
                    }

                    report = JSON.parse(res.rows.item(0).reportDetails);
                    report.id = res.rows.item(0).id;

                    if (lodash__WEBPACK_IMPORTED_MODULE_3___default().isNumber(res.rows.item(0).reportNumber)) {
                      report.reportNumber = res.rows.item(0).reportNumber;
                    }

                    newReport = new _models_app_model__WEBPACK_IMPORTED_MODULE_2__.Report(report);
                    return _context18.abrupt("return", newReport);

                  case 11:
                    _context18.next = 16;
                    break;

                  case 13:
                    _context18.prev = 13;
                    _context18.t0 = _context18["catch"](0);
                    return _context18.abrupt("return", null);

                  case 16:
                  case "end":
                    return _context18.stop();
                }
              }, _callee18, this, [[0, 13]]);
            }));
          } // Update

        }, {
          key: "updateEmailSent",
          value: function updateEmailSent(id, isSentReport) {
            var _this8 = this;

            return this.storage.executeSql("UPDATE reports SET isSentReport = ? WHERE id = ".concat(id), [isSentReport]).then(function (a) {
              _this8.logger.debug('updateEmailSent Updated', a);

              _this8.getReports();
            })["catch"](function (e) {
              _this8.logger.error('error ' + JSON.stringify(e));
            });
          }
        }, {
          key: "updateReportNumber",
          value: function updateReportNumber(id, reportNumber) {
            var _this9 = this;

            return this.storage.executeSql("UPDATE reports SET reportNumber = ? WHERE id = ".concat(id), [reportNumber]).then(function (a) {
              _this9.logger.debug('reportNumber Updated', a);

              _this9.getReports();
            })["catch"](function (e) {
              _this9.logger.error('error ' + JSON.stringify(e));
            });
          }
        }, {
          key: "updateCustomerInfo",
          value: function updateCustomerInfo(id, customerInfo, reportDetails) {
            var _this10 = this;

            var data = [customerInfo.firstName + ' ' + customerInfo.lastName, customerInfo.phone, customerInfo.email, reportDetails ? JSON.stringify(reportDetails) : ''];
            return this.storage.executeSql("UPDATE reports SET customerName = ?, phone = ?, email = ?, reportDetails = ? WHERE id = ".concat(id), data).then(function () {
              _this10.getReports();
            })["catch"](function (err) {
              _this10.logger.error('Err when update customer info:', err);
            });
          }
        }, {
          key: "updateReportDetails",
          value: function updateReportDetails(id, report) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee19() {
              var _this11 = this;

              var data;
              return _regeneratorRuntime().wrap(function _callee19$(_context19) {
                while (1) switch (_context19.prev = _context19.next) {
                  case 0:
                    data = [report ? JSON.stringify(report) : ''];
                    this.storage.executeSql("UPDATE reports SET reportDetails = ? WHERE id = ".concat(id), data).then(function () {
                      // update reportId, reportNumber after sync
                      var dataUpdate = [report ? report.reportId : id, report.reportNumber];

                      _this11.logger.debug('data report Update:', dataUpdate);

                      return _this11.storage.executeSql("UPDATE reports SET reportId = ?, reportNumber = ? WHERE id = ".concat(id), dataUpdate).then(function () {
                        _this11.getReports();
                      });
                    })["catch"](function (err) {
                      _this11.logger.error("Error updateReportDetails id: ".concat(id), err);
                    });

                  case 2:
                  case "end":
                    return _context19.stop();
                }
              }, _callee19, this);
            }));
          } // Delete

        }, {
          key: "deleteReport",
          value: function deleteReport(id) {
            return this.storage.executeSql('DELETE FROM reports WHERE id = ?', [id]).then(function () {// this.getReports();
            });
          } // Live data reports START

        }, {
          key: "getLiveDataItemDetail",
          value: function getLiveDataItemDetail(id) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee20() {
              var res;
              return _regeneratorRuntime().wrap(function _callee20$(_context20) {
                while (1) switch (_context20.prev = _context20.next) {
                  case 0:
                    _context20.next = 2;
                    return this.storage.executeSql('SELECT * FROM liveDataReports WHERE id = ?', [id]);

                  case 2:
                    res = _context20.sent;

                    if (!res.rows.item(0).reportDetails) {
                      _context20.next = 5;
                      break;
                    }

                    return _context20.abrupt("return", JSON.parse(res.rows.item(0).reportDetails));

                  case 5:
                    return _context20.abrupt("return", null);

                  case 6:
                  case "end":
                    return _context20.stop();
                }
              }, _callee20, this);
            }));
          } // Get list live data reports

        }, {
          key: "getLiveDataReports",
          value: function getLiveDataReports() {
            var _this12 = this;

            return this.storage.executeSql('SELECT * FROM liveDataReports ORDER BY id DESC', []).then(function (res) {
              var items = [];

              if (res.rows.length > 0) {
                for (var i = 0; i < res.rows.length; i++) {
                  var reportLiveDataReports = new _models_app_model__WEBPACK_IMPORTED_MODULE_2__.LiveDataReportItem();
                  reportLiveDataReports.id = res.rows.item(i).id;
                  reportLiveDataReports.createdAt = res.rows.item(i).createdAt;
                  reportLiveDataReports.vehicle = res.rows.item(i).vehicle;
                  items.push(reportLiveDataReports);
                }
              }

              _this12.liveDataReports.next(items);
            })["catch"](function (error) {
              return console.error('Get live -data-reports', error);
            });
          } // Add list live data reports

        }, {
          key: "addLiveDataReports",
          value: function addLiveDataReports(vehicle, reportDetails) {
            var _this13 = this;

            var data = [new Date().getTime(), vehicle, reportDetails ? JSON.stringify(reportDetails) : ''];
            return this.storage.executeSql('INSERT INTO liveDataReports (createdAt, vehicle, reportDetails) VALUES (?, ?, ?)', data).then(function () {
              _this13.getLiveDataReports();
            })["catch"](function (error) {
              return console.error('addLiveDataReports', error);
            });
          } //Get live report detail.
          // Update list live data reports
          // Delete list live data reports

        }, {
          key: "deleteLiveDataReports",
          value: function deleteLiveDataReports(id) {
            var _this14 = this;

            return this.storage.executeSql('DELETE FROM liveDataReports WHERE id = ?', [id]).then(function (_) {
              _this14.getLiveDataReports();
            });
          } //Live data reports END
          //Setting data START
          //Get Setting data

        }, {
          key: "getSettingData",
          value: function getSettingData() {
            var _this15 = this;

            return this.storage.executeSql('SELECT * FROM settingsData', []).then(function (res) {
              var items = [];

              if (res.rows.length > 0) {
                for (var i = 0; i < res.rows.length; i++) {
                  var settingData = new _models_app_model__WEBPACK_IMPORTED_MODULE_2__.SettingData();
                  settingData.id = res.rows.item(i).id;
                  settingData.tokenKey = res.rows.item(i).tokenKey; //settingData.userInfo  = res.rows.item(i).userInfo ;

                  settingData.lastLogInTime = res.rows.item(i).lastLogInTime;
                  settingData.usbProductId = res.rows.item(i).usbProductId; //settingData.scanSetting  = res.rows.item(i).scanSetting ;

                  settingData.retailer = res.rows.item(i).retailer;
                  settingData.scanningType = res.rows.item(i).scanningType;
                  settingData.driveCycles = res.rows.item(i).driveCycles;
                  settingData.formatDate = res.rows.item(i).formatDate;
                  settingData.formatTime = res.rows.item(i).formatTime;
                  settingData.emailSupport = res.rows.item(i).emailSupport;
                  settingData.recentVINScanned = res.rows.item(i).recentVINScanned;
                  settingData.recentMileage = res.rows.item(i).recentMileage;
                  settingData.agreePolicies = res.rows.item(i).agreePolicies;
                  settingData.skipToolUpdatingAt = res.rows.item(i).skipToolUpdatingAt;
                  settingData.firstDateOff = res.rows.item(i).firstDateOff;
                  settingData.vCIResponse = res.rows.item(i).vCIResponse;
                  settingData.supportedModulesData = res.rows.item(i).supportedModulesData;
                  settingData.appRegional = res.rows.item(i).appRegional;
                  settingData.appLanguage = res.rows.item(i).appLanguage;
                  settingData.recentVins = res.rows.item(i).recentVins; // save 5 Vins

                  items.push(settingData);
                }
              }

              _this15.settingData.next(items);
            })["catch"](function (error) {
              return console.error('get Setting Data', error);
            });
          }
        }, {
          key: "getItemSettting",
          value: function getItemSettting(item) {
            var id = this.settingData.value ? this.settingData.value[0] && this.settingData.value[0].id : 1;
            return this.storage.executeSql("SELECT ".concat(item, " FROM settingsData WHERE id = ?"), [id]).then(function (res) {
              if (res.rows.length > 0) {
                return res.rows.item(0)[item];
              }
            })["catch"](function (error) {
              return console.error('getItemSettting', error);
            });
          }
        }, {
          key: "addSetting",
          value: function addSetting(tokenKey, userInfo, lastLogInTime, usbProductId, scanSetting, retailer, scanningType, driveCycles, formatDate, formatTime, emailSupport, recentVINScanned, recentMileage, agreePolicies, skipToolUpdatingAt, firstDateOff, vCIResponse, supportedModulesData, appRegional, appLanguage) {
            var _this16 = this;

            var data = [tokenKey, userInfo ? JSON.stringify(userInfo) : '', lastLogInTime, usbProductId, scanSetting ? JSON.stringify(scanSetting) : '', retailer, scanningType, driveCycles, formatDate, formatTime, emailSupport, recentVINScanned, recentMileage, agreePolicies, skipToolUpdatingAt, firstDateOff, vCIResponse, supportedModulesData, appRegional, appLanguage];
            return this.storage.executeSql('INSERT INTO settingsData (tokenKey, userInfo, lastLogInTime, usbProductId, scanSetting, retailer, scanningType, driveCycles, formatDate, formatTime, emailSupport, recentVINScanned, recentMileage, agreePolicies, skipToolUpdatingAt, firstDateOff, vCIResponse, supportedModulesData, appRegional, appLanguage) VALUES (?, ?, ?, ?, ?,?, ?, ?, ?, ?,?, ?, ?, ?, ?,?, ?, ?, ?, ?)', data).then(function (res) {
              _this16.logger.debug('addSetting Success', res);

              _this16.getSettingData();
            })["catch"](function (err) {
              _this16.logger.debug('err when add settingdata', err);
            });
          }
        }, {
          key: "saveSettingItem",
          value: function saveSettingItem(itemName, value) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee21() {
              var _this17 = this;

              var id;
              return _regeneratorRuntime().wrap(function _callee21$(_context21) {
                while (1) switch (_context21.prev = _context21.next) {
                  case 0:
                    if (!(this.settingData.value && this.settingData.value.length > 0)) {
                      _context21.next = 7;
                      break;
                    }

                    id = this.settingData.value[0].id; // save always in first array

                    _context21.next = 4;
                    return this.storage.executeSql("UPDATE settingsData SET ".concat(itemName, " = ? WHERE id = ?"), [value, id]).then(function (res) {
                      _this17.logger.debug("updateSettingItem data ".concat(itemName), res);

                      _this17.getSettingData();
                    })["catch"](function (err) {
                      _this17.logger.debug("err data ".concat(itemName), err);
                    });

                  case 4:
                    return _context21.abrupt("return", _context21.sent);

                  case 7:
                    // add defaut setting
                    this.logger.debug("add setting data default");
                    _context21.next = 10;
                    return this.addSetting('', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '');

                  case 10:
                    return _context21.abrupt("return", this.saveSettingItem(itemName, value));

                  case 11:
                  case "end":
                    return _context21.stop();
                }
              }, _callee21, this);
            }));
          }
        }, {
          key: "deleteSettingData",
          value: function deleteSettingData(id) {
            var _this18 = this;

            return this.storage.executeSql('DELETE FROM settingsData WHERE id = ?', [id]).then(function (_) {
              _this18.logger.debug("DELETE setting data", _);

              _this18.getSettingData();
            })["catch"](function (err) {
              _this18.logger.error('Err when delet settingsData', err);
            });
          }
        }, {
          key: "updateSettingData",
          value: function updateSettingData(id, setting) {
            var _this19 = this;

            var data = [setting.tokenKey, setting.userInfo ? JSON.stringify(setting.userInfo) : '', setting.lastLogInTime, setting.usbProductId, setting.scanSetting ? JSON.stringify(setting.scanSetting) : '', setting.retailer, setting.scanningType, setting.driveCycles, setting.formatDate, setting.formatTime, setting.emailSupport, setting.recentVINScanned, setting.recentMileage, setting.agreePolicies, setting.skipToolUpdatingAt, setting.firstDateOff, setting.vCIResponse, setting.supportedModulesData, setting.appRegional, setting.appLanguage];
            return this.storage.executeSql("UPDATE settingsData SET\n        tokenKey =?,\n        userInfo =?,\n        lastLogInTime =?,\n        usbProductId =?,\n        scanSetting =?,\n        retailer =?,\n        scanningType =?,\n        driveCycles =?,\n        formatDate =?,\n        formatTime =?,\n        emailSupport =?,\n        recentVINScanned =?,\n        recentMileage =?,\n        agreePolicies =?,\n        skipToolUpdatingAt =?,\n        firstDateOff =?,\n        vCIResponse =?,\n        supportedModulesData =?,\n        appRegional =?,\n        appLanguage =? WHERE id = ".concat(id), data).then(function () {
              _this19.getSettingData();
            });
          } //Setting data END
          //Cache data START

        }, {
          key: "getCacheData",
          value: function getCacheData() {
            var _this20 = this;

            return this.storage.executeSql('SELECT * FROM cacheData', []).then(function (res) {
              var items = [];

              if (res.rows.length > 0) {
                for (var i = 0; i < res.rows.length; i++) {
                  var cacheData = new _models_app_model__WEBPACK_IMPORTED_MODULE_2__.CacheData();
                  cacheData.id = res.rows.item(i).id;
                  cacheData.vin = res.rows.item(i).vin;
                  cacheData.data = res.rows.item(i).data; // { supportedModules: { en: [], es: [] } }

                  cacheData.createdAt = res.rows.item(i).createdAt;
                  items.push(cacheData);
                }
              }

              _this20.cacheData.next(items);

              _this20.logger.debug('cacheData', _this20.cacheData);
            })["catch"](function (error) {
              return console.error('getCacheData', error);
            });
          }
        }, {
          key: "addCacheData",
          value: function addCacheData(vin, data) {
            var _this21 = this;

            var supportedModules = [data ? JSON.stringify(data) : ''];
            var parameters = [vin, supportedModules, new Date().getTime()];
            var isExist = false;

            if (this.cacheData.value) {
              isExist = this.cacheData.value.findIndex(function (cache) {
                return cache.vin === vin;
              }) >= 0;
            }

            this.logger.info("addCacheData vin data [".concat(isExist ? 'UPDATE' : 'INSERT', "]"), vin, data);
            var proc = isExist ? this.storage.executeSql('UPDATE cacheData SET data = ?, createdAt = ? WHERE vin = ?', [supportedModules, +new Date(), vin]) : this.storage.executeSql('INSERT INTO cacheData (vin, data, createdAt) VALUES (?, ?, ?)', parameters);
            return proc.then(function () {
              _this21.getCacheData();
            });
          }
        }, {
          key: "getCacheDetail",
          value: function getCacheDetail(vin) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee22() {
              var res, modulesCache;
              return _regeneratorRuntime().wrap(function _callee22$(_context22) {
                while (1) switch (_context22.prev = _context22.next) {
                  case 0:
                    _context22.prev = 0;
                    _context22.next = 3;
                    return this.storage.executeSql('SELECT * FROM cacheData WHERE vin = ?', [vin]);

                  case 3:
                    res = _context22.sent;

                    if (!(res && res.rows)) {
                      _context22.next = 8;
                      break;
                    }

                    if (!res.rows.item(0).data) {
                      _context22.next = 8;
                      break;
                    }

                    modulesCache = JSON.parse(res.rows.item(0).data); //  modulesCache.id = res.rows.item(0).id;

                    return _context22.abrupt("return", modulesCache);

                  case 8:
                    _context22.next = 13;
                    break;

                  case 10:
                    _context22.prev = 10;
                    _context22.t0 = _context22["catch"](0);
                    return _context22.abrupt("return", null);

                  case 13:
                  case "end":
                    return _context22.stop();
                }
              }, _callee22, this, [[0, 10]]);
            }));
          }
        }, {
          key: "deleteCacheData",
          value: function deleteCacheData(vin) {
            var _this22 = this;

            return this.storage.executeSql("DELETE FROM cacheData WHERE vin ".concat(vin ? '= ?' : ' != ""'), vin ? [vin] : undefined).then(function (_) {
              _this22.logger.debug("Cached data ".concat(vin ? 'of ' + vin + ' ' : '', "is removed"));

              _this22.getCacheData();
            });
          }
        }]);
      }();

      _DatabaseService.ɵfac = function DatabaseService_Factory(t) {
        return new (t || _DatabaseService)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_5__.SQLite), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_logger__WEBPACK_IMPORTED_MODULE_6__.AppLoggerService));
      };

      _DatabaseService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({
        token: _DatabaseService,
        factory: _DatabaseService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    22486:
    /*!********************************************!*\
      !*** ./src/app/services/helper.service.ts ***!
      \********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HelperService": function HelperService() {
          return (
            /* binding */
            _HelperService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! tslib */
      42321);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _configs_app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../configs/app.config */
      66626);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs */
      41618);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! rxjs/operators */
      18511);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! rxjs/operators */
      33927);
      /* harmony import */


      var _models_app_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../models/app.enum */
      34932);
      /* harmony import */


      var _state_app_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./state/app.state */
      12607);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ionic/angular */
      81864);
      /* harmony import */


      var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/device/ngx */
      96265);
      /* harmony import */


      var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @ionic/storage-angular */
      54357);
      /* harmony import */


      var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/network/ngx */
      95680);
      /* harmony import */


      var _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/diagnostic/ngx */
      91089);
      /* harmony import */


      var _ionic_native_ble_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/ble/ngx */
      11695);

      var _HelperService = /*#__PURE__*/function () {
        function _HelperService(modal, platform, loadingController, alertController, alertCtrl, device, storage, menuController, navController, network, diagnostic, ble) {
          _classCallCheck(this, _HelperService);

          this.modal = modal;
          this.platform = platform;
          this.loadingController = loadingController;
          this.alertController = alertController;
          this.alertCtrl = alertCtrl;
          this.device = device;
          this.storage = storage;
          this.menuController = menuController;
          this.navController = navController;
          this.network = network;
          this.diagnostic = diagnostic;
          this.ble = ble;
          this._isLoadingPresented = false;
          this.backButtonSubscriptions = [];
          this._eraseMenuItem = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
          this._showMenuItem = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
        }

        return _createClass(_HelperService, [{
          key: "checkBluetoothPermissions",
          value: function checkBluetoothPermissions() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee23() {
              return _regeneratorRuntime().wrap(function _callee23$(_context23) {
                while (1) switch (_context23.prev = _context23.next) {
                  case 0:
                    if (!_state_app_state__WEBPACK_IMPORTED_MODULE_2__.AppState.isOnIOs) {
                      _context23.next = 12;
                      break;
                    }

                    _context23.prev = 1;
                    _context23.next = 4;
                    return this.ble.isEnabled();

                  case 4:
                    return _context23.abrupt("return", true);

                  case 7:
                    _context23.prev = 7;
                    _context23.t0 = _context23["catch"](1);
                    return _context23.abrupt("return", false);

                  case 10:
                    _context23.next = 29;
                    break;

                  case 12:
                    if (!(_state_app_state__WEBPACK_IMPORTED_MODULE_2__.AppState.isOnAndroid && (_state_app_state__WEBPACK_IMPORTED_MODULE_2__.AppState.isOnAndroid12 || _state_app_state__WEBPACK_IMPORTED_MODULE_2__.AppState.isOnAndroid13OrNewer))) {
                      _context23.next = 18;
                      break;
                    }

                    console.log('RUN: await this.diagnostic.requestRuntimePermissions');
                    _context23.next = 16;
                    return this.diagnostic.requestRuntimePermissions([this.diagnostic.permission.ACCESS_FINE_LOCATION, this.diagnostic.permission.ACCESS_COARSE_LOCATION, 'BLUETOOTH_CONNECT', 'BLUETOOTH_SCAN']);

                  case 16:
                    _context23.next = 20;
                    break;

                  case 18:
                    _context23.next = 20;
                    return this.diagnostic.requestRuntimePermissions([this.diagnostic.permission.ACCESS_FINE_LOCATION, this.diagnostic.permission.ACCESS_COARSE_LOCATION]);

                  case 20:
                    _context23.prev = 20;
                    _context23.next = 23;
                    return this.ble.isEnabled();

                  case 23:
                    return _context23.abrupt("return", true);

                  case 26:
                    _context23.prev = 26;
                    _context23.t1 = _context23["catch"](20);
                    return _context23.abrupt("return", false);

                  case 29:
                  case "end":
                    return _context23.stop();
                }
              }, _callee23, this, [[1, 7], [20, 26]]);
            }));
          }
        }, {
          key: "newGuid",
          value: function newGuid() {
            function s4() {
              return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
            }

            return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
          }
        }, {
          key: "prompt",
          value: function prompt(message, title, inputs, confirmCallback, cancelCallback) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee24() {
              var prompt;
              return _regeneratorRuntime().wrap(function _callee24$(_context24) {
                while (1) switch (_context24.prev = _context24.next) {
                  case 0:
                    _context24.next = 2;
                    return this.alertCtrl.create({
                      header: title,
                      message: message,
                      inputs: inputs,
                      buttons: [{
                        text: _configs_app_config__WEBPACK_IMPORTED_MODULE_0__.AppStrings.CANCEL,
                        role: 'cancel',
                        handler: cancelCallback
                      }, {
                        text: _configs_app_config__WEBPACK_IMPORTED_MODULE_0__.AppStrings.OK,
                        handler: confirmCallback
                      }]
                    });

                  case 2:
                    prompt = _context24.sent;
                    prompt.present();
                    return _context24.abrupt("return", prompt);

                  case 5:
                  case "end":
                    return _context24.stop();
                }
              }, _callee24, this);
            }));
          }
        }, {
          key: "toHexString",
          value: function toHexString(byteArray) {
            return Array.from(byteArray, function (mbyte) {
              return ('0' + (mbyte & 0xff).toString(16)).slice(-2);
            }).join('');
          }
        }, {
          key: "wait",
          value: function wait(ms) {
            return new Promise(function (resolve, reject) {
              setTimeout(resolve, ms);
            });
          }
        }, {
          key: "goTo",
          value: function goTo(path, opts) {
            return this.navController.navigateForward(path, opts);
          }
        }, {
          key: "goBack",
          value: function goBack(path, opts) {
            var _this23 = this;

            return path ? this.navController.navigateBack(path, opts) : this.sleep(10).then(function () {
              _this23.navController.back();
            });
          }
        }, {
          key: "coerceBooleanProperty",
          value: function coerceBooleanProperty(value) {
            if (value === 'true') {
              return true;
            }

            if (value === true) {
              return true;
            }

            return false;
          }
        }, {
          key: "storageDriver",
          get: function get() {
            return this.storage.driver;
          }
        }, {
          key: "setStorage",
          value: function setStorage(label, value) {
            return this.storage.set(label, value)["catch"](console.error.bind(null, 'setStorage failed'));
          }
        }, {
          key: "getStorage",
          value: function getStorage(label) {
            var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee25() {
              var value;
              return _regeneratorRuntime().wrap(function _callee25$(_context25) {
                while (1) switch (_context25.prev = _context25.next) {
                  case 0:
                    _context25.next = 2;
                    return this.storage.get(label)["catch"](console.error.bind(null, 'getStorage failed'));

                  case 2:
                    value = _context25.sent;
                    return _context25.abrupt("return", value !== null ? value : defaultValue);

                  case 4:
                  case "end":
                    return _context25.stop();
                }
              }, _callee25, this);
            }));
          }
        }, {
          key: "removeStorage",
          value: function removeStorage(label) {
            return this.storage.remove(label)["catch"](console.error.bind(null, 'removeStorage failed'));
          }
        }, {
          key: "getAllScanItems",
          value: function getAllScanItems() {
            var scanItems = _toConsumableArray(_models_app_enum__WEBPACK_IMPORTED_MODULE_1__.QuickScanSetting);

            return scanItems.reduce(function (items, item) {
              if (item.data.length) {
                return [].concat(_toConsumableArray(items), _toConsumableArray(item.data));
              }

              return items.map(function (i) {
                i.enable = true;
              });
            }, []);
          }
        }, {
          key: "enableMenuGlobal",
          value: function enableMenuGlobal() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee26() {
              return _regeneratorRuntime().wrap(function _callee26$(_context26) {
                while (1) switch (_context26.prev = _context26.next) {
                  case 0:
                    _context26.next = 2;
                    return this.menuController.close('home');

                  case 2:
                    this.menuController.enable(true, 'global');

                  case 3:
                  case "end":
                    return _context26.stop();
                }
              }, _callee26, this);
            }));
          }
        }, {
          key: "enableMenuHome",
          value: function enableMenuHome() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee27() {
              return _regeneratorRuntime().wrap(function _callee27$(_context27) {
                while (1) switch (_context27.prev = _context27.next) {
                  case 0:
                    _context27.next = 2;
                    return this.menuController.close('global');

                  case 2:
                    _context27.next = 4;
                    return this.menuController.enable(true, 'home');

                  case 4:
                  case "end":
                    return _context27.stop();
                }
              }, _callee27, this);
            }));
          }
        }, {
          key: "enableMenuLiveData",
          value: function enableMenuLiveData() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee28() {
              return _regeneratorRuntime().wrap(function _callee28$(_context28) {
                while (1) switch (_context28.prev = _context28.next) {
                  case 0:
                    this.menuController.enable(true, 'live-data');

                  case 1:
                  case "end":
                    return _context28.stop();
                }
              }, _callee28, this);
            }));
          }
        }, {
          key: "disableMenuLiveData",
          value: function disableMenuLiveData() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee29() {
              return _regeneratorRuntime().wrap(function _callee29$(_context29) {
                while (1) switch (_context29.prev = _context29.next) {
                  case 0:
                    this.menuController.enable(false, 'live-data');

                  case 1:
                  case "end":
                    return _context29.stop();
                }
              }, _callee29, this);
            }));
          }
        }, {
          key: "displayEraseMenuItem",
          value: function displayEraseMenuItem(_ref) {
            var isShow = _ref.isShow,
                isEnable = _ref.isEnable,
                groups = _ref.groups;

            this._eraseMenuItem.emit({
              isShow: isShow,
              isEnable: isEnable,
              groups: groups
            });
          }
        }, {
          key: "alert",
          value: function alert(message) {
            var header = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Message';
            var customButtons = arguments.length > 2 ? arguments[2] : undefined;
            return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee30() {
              var alert;
              return _regeneratorRuntime().wrap(function _callee30$(_context30) {
                while (1) switch (_context30.prev = _context30.next) {
                  case 0:
                    _context30.next = 2;
                    return this.hideLoading();

                  case 2:
                    _context30.next = 4;
                    return this.alertController.create({
                      header: header,
                      message: message,
                      backdropDismiss: false,
                      buttons: customButtons ? customButtons : [{
                        text: 'OK'
                      }]
                    });

                  case 4:
                    alert = _context30.sent;
                    _context30.next = 7;
                    return alert.present();

                  case 7:
                    this.alertInstance = alert;
                    return _context30.abrupt("return", alert);

                  case 9:
                  case "end":
                    return _context30.stop();
                }
              }, _callee30, this);
            }));
          }
        }, {
          key: "dismissAlert",
          value: function dismissAlert() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee31() {
              return _regeneratorRuntime().wrap(function _callee31$(_context31) {
                while (1) switch (_context31.prev = _context31.next) {
                  case 0:
                    if (!this.alertInstance) {
                      _context31.next = 4;
                      break;
                    }

                    _context31.next = 3;
                    return this.alertInstance.dismiss();

                  case 3:
                    this.alertInstance = null;

                  case 4:
                  case "end":
                    return _context31.stop();
                }
              }, _callee31, this);
            }));
          }
        }, {
          key: "eraseMenuItemEmittedValue",
          get: function get() {
            return this._eraseMenuItem;
          }
        }, {
          key: "displayMenuItem",
          value: function displayMenuItem(_ref2) {
            var isShowLive = _ref2.isShowLive,
                isShowEmail = _ref2.isShowEmail;

            this._showMenuItem.emit({
              isShowLive: isShowLive,
              isShowEmail: isShowEmail
            });
          }
        }, {
          key: "menuItemEmittedValue",
          get: function get() {
            return this._showMenuItem;
          }
        }, {
          key: "isIOs10",
          value: function isIOs10() {
            return this.device && this.device.version && this.device.version.indexOf('10.') === 0;
          }
        }, {
          key: "isIOs",
          value: function isIOs() {
            return this.device && this.device.platform === 'iOS';
          }
        }, {
          key: "hasInternetConnection",
          get: function get() {
            if (_state_app_state__WEBPACK_IMPORTED_MODULE_2__.AppState.isOnDevice) return this.network.type !== this.network.Connection.NONE;
            return true;
          }
        }, {
          key: "showLoading",
          value: function showLoading(message) {
            var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _configs_app_config__WEBPACK_IMPORTED_MODULE_0__.AppConfig.durationTimeoutInMs;
            return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee32() {
              var loading;
              return _regeneratorRuntime().wrap(function _callee32$(_context32) {
                while (1) switch (_context32.prev = _context32.next) {
                  case 0:
                    message = message || 'Please wait...';
                    _context32.next = 3;
                    return this.loadingController.create({
                      message: message,
                      duration: duration,
                      animated: false,
                      spinner: 'circles'
                    });

                  case 3:
                    loading = _context32.sent;
                    _context32.next = 6;
                    return loading.present();

                  case 6:
                    this.loadingInstance = loading;
                    return _context32.abrupt("return", loading);

                  case 8:
                  case "end":
                    return _context32.stop();
                }
              }, _callee32, this);
            }));
          }
        }, {
          key: "hideLoading",
          value: function hideLoading() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee33() {
              return _regeneratorRuntime().wrap(function _callee33$(_context33) {
                while (1) switch (_context33.prev = _context33.next) {
                  case 0:
                    if (!this.loadingInstance) {
                      _context33.next = 6;
                      break;
                    }

                    _context33.next = 3;
                    return this.loadingInstance.dismiss();

                  case 3:
                    this.loadingInstance = null;
                    _context33.next = 8;
                    break;

                  case 6:
                    _context33.next = 8;
                    return this.loadingController.dismiss()["catch"](function (err) {// this.logger.warn.bind(err, 'Dismiss loading error')
                    });

                  case 8:
                  case "end":
                    return _context33.stop();
                }
              }, _callee33, this);
            }));
          }
        }, {
          key: "isLoading",
          get: function get() {
            return this._isLoadingPresented;
          } // async dismissAll() {
          //     if (this._isAlertPresented) {
          //         await this.alertController.dismiss();
          //         this._isAlertPresented = false;
          //     }
          // }

        }, {
          key: "dismissAll",
          value: function dismissAll() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee34() {
              var top;
              return _regeneratorRuntime().wrap(function _callee34$(_context34) {
                while (1) switch (_context34.prev = _context34.next) {
                  case 0:
                    if (!top) {
                      _context34.next = 3;
                      break;
                    }

                    _context34.next = 3;
                    return top.dismiss();

                  case 3:
                    _context34.next = 5;
                    return this.modal.getTop();

                  case 5:
                    top = _context34.sent;

                  case 6:
                    if (top) {
                      _context34.next = 0;
                      break;
                    }

                  case 7:
                  case "end":
                    return _context34.stop();
                }
              }, _callee34, this);
            }));
          }
        }, {
          key: "sleep",
          value: function sleep(ms) {
            return new Promise(function (resolve) {
              return setTimeout(function () {
                resolve(ms);
              }, Math.abs(ms));
            });
          }
        }, {
          key: "confirm",
          value: function confirm(message, title, confirmCallback, cancelCallback) {
            var okText = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : _configs_app_config__WEBPACK_IMPORTED_MODULE_0__.AppStrings.OK;
            var cancelText = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : _configs_app_config__WEBPACK_IMPORTED_MODULE_0__.AppStrings.CANCEL;
            return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee35() {
              var confirm;
              return _regeneratorRuntime().wrap(function _callee35$(_context35) {
                while (1) switch (_context35.prev = _context35.next) {
                  case 0:
                    confirm = this.alertController.create({
                      header: title,
                      message: message,
                      buttons: [{
                        text: cancelText,
                        role: 'cancel',
                        handler: cancelCallback
                      }, {
                        text: okText,
                        handler: confirmCallback
                      }]
                    });
                    _context35.next = 3;
                    return confirm;

                  case 3:
                    _context35.sent.present();

                    return _context35.abrupt("return", confirm);

                  case 5:
                  case "end":
                    return _context35.stop();
                }
              }, _callee35, this);
            }));
          }
        }, {
          key: "popToRoot",
          value: function popToRoot() {
            var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/';
            return this.navController.navigateRoot(path);
          }
        }, {
          key: "overrideHardwareBack",
          value: function overrideHardwareBack(callableFunction, description) {
            var desc = description ? description : "".concat(callableFunction);
            var priority = 99999999 + this.backButtonSubscriptions.length;
            var subs = this.platform.backButton.subscribeWithPriority(priority, function () {
              // callableFunction.bind(context);
              callableFunction();
            });
            subs.add(function () {
              console.log("Remove back action ".concat(desc));
            });
            console.log("Overide back action with \"".concat(desc, "\""));
            this.backButtonSubscriptions.push(subs);
          }
        }, {
          key: "restoreHardwareBack",
          value: function restoreHardwareBack() {
            if (this.backButtonSubscriptions.length) {
              var subs = this.backButtonSubscriptions.shift();
              subs.unsubscribe();
            }
          }
        }, {
          key: "refreshLayout",
          value: function refreshLayout(changeDetectorRef) {
            try {
              changeDetectorRef != null && changeDetectorRef.detectChanges();
            } catch (_a) {}
          }
          /* No need this function anymore
            async convertForSetupQuickScan(allScan: SettingItem[]) {
                let quickScan: ScanSettingItem[] = QuickScanDefaultSettings;
                quickScan[0].enabled = allScan[1].data[3].enabled;
                quickScan[1].enabled = allScan[0].data[3].enabled;
                quickScan[2].enabled = allScan[1].data[1].enabled;
                quickScan[3].enabled = allScan[1].data[2].enabled;
                quickScan[4].enabled = allScan[0].data[1].enabled;
                quickScan[5].enabled = allScan[0].data[6].enabled;
                quickScan[6].enabled = allScan[0].data[9].enabled;
                quickScan[7].enabled = allScan[1].data[2].enabled;
                quickScan[8].enabled = allScan[1].data[4].enabled;
                quickScan[9].enabled = allScan[2].data[4].enabled;
                quickScan[10].enabled = allScan[1].data[5].enabled;
                quickScan[11].enabled = allScan[1].data[6].enabled;
                quickScan[12].enabled = allScan[1].data[7].enabled;
                quickScan[13].enabled = allScan[2].data[0].enabled;
                quickScan[14].enabled = allScan[2].data[1].enabled;
                quickScan[15].enabled = allScan[2].data[2].enabled;
                quickScan[16].enabled = allScan[2].data[3].enabled;
                return quickScan;
            } */

        }, {
          key: "createMockupPercentProcess",
          value: function createMockupPercentProcess(avgSleepTimeMs) {
            var maxLoadingTimeMs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 150000;
            var updateIntervalMs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 800;
            var percent = 0,
                isPaused = false,
                isTimedOut = false;

            var _startTimeout = function _startTimeout() {
              var id = setTimeout(function () {
                isTimedOut = true; // console.log('time out', id, `percent=${percent}`);
              }, maxLoadingTimeMs); // console.log('start time out', id);

              return id;
            };

            var _startTick2 = function _startTick() {
              if (percent < 99) {
                var sleepInMs = Math.floor(Math.random() * 10 + 1) * Math.floor(avgSleepTimeMs / 10);

                if (percent < 40) {
                  sleepInMs *= 1;
                } else if (percent < 65) {
                  sleepInMs *= 3;
                } else if (percent < 80) {
                  sleepInMs *= 6;
                } else if (percent < 90) {
                  sleepInMs *= 9;
                } else {
                  sleepInMs *= 15;
                }

                !isPaused && percent++;
                return setTimeout(_startTick2, sleepInMs);
              }
            };

            var _stopTick = function _stopTick() {
              // console.log('stop time out', timeout);
              timeout && clearTimeout(timeout);
              percent = 100;
            };

            var _pauseTick = function _pauseTick() {
              isPaused = true; // console.log('pause (stop) time out', timeout);

              timeout && clearTimeout(timeout);
            };

            var _resumeTick = function _resumeTick() {
              if (isPaused) {
                isPaused = false;
                timeout = _startTimeout();
              }
            };

            var id = _startTick2(),
                timeout = _startTimeout(),
                _tick = (0, rxjs__WEBPACK_IMPORTED_MODULE_9__.interval)(updateIntervalMs).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeWhile)(function (n) {
              return percent < 100;
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(function (n) {
              if (isTimedOut) {
                percent = 100;
                throw new Error('Timed out.');
              }

              return percent;
            }));

            var proc = {
              subscribe: function subscribe() {
                return _tick.subscribe.apply(_tick, arguments);
              },
              pause: _pauseTick,
              resume: _resumeTick,
              stop: _stopTick
            };
            return proc;
          } // get Image battery

        }, {
          key: "getImgBattery",
          value: function getImgBattery(level, isPlugged) {
            if (isPlugged) {
              return '/assets/svg/battery/inv-battery-recharge.svg';
            } else {
              return "/assets/svg/battery/inv-battery".concat(level < 20 ? '' : "-".concat(Math.round(level / 20) * 20), ".svg");
            }
          }
        }, {
          key: "getScanningTypeText",
          value: function getScanningTypeText(numScanType) {
            var scan = '';

            if (numScanType === _models_app_enum__WEBPACK_IMPORTED_MODULE_1__.PrintType.GlobalOBD) {
              return scan = _models_app_enum__WEBPACK_IMPORTED_MODULE_1__.ScanningType.GlobalOBD;
            }

            if (numScanType === _models_app_enum__WEBPACK_IMPORTED_MODULE_1__.PrintType.QuickScan) {
              return scan = _models_app_enum__WEBPACK_IMPORTED_MODULE_1__.ScanningType.QuickScan;
            }

            return scan = _models_app_enum__WEBPACK_IMPORTED_MODULE_1__.ScanningType.NetworkScan;
          }
        }]);
      }();

      _HelperService.ɵfac = function HelperService_Factory(t) {
        return new (t || _HelperService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_12__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_12__.LoadingController), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_12__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_12__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_3__.Device), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_ionic_storage_angular__WEBPACK_IMPORTED_MODULE_13__.Storage), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_12__.MenuController), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_12__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_4__.Network), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_5__.Diagnostic), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_ionic_native_ble_ngx__WEBPACK_IMPORTED_MODULE_6__.BLE));
      };

      _HelperService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
        token: _HelperService,
        factory: _HelperService.ɵfac
      });
      /***/
    },

    /***/
    92951:
    /*!************************************************!*\
      !*** ./src/app/services/innova-tool-models.ts ***!
      \************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PidBase": function PidBase() {
          return (
            /* binding */
            _PidBase
          );
        },

        /* harmony export */
        "InnovaVCIEvent": function InnovaVCIEvent() {
          return (
            /* binding */
            _InnovaVCIEvent
          );
        },

        /* harmony export */
        "InnovaToolFeatures": function InnovaToolFeatures() {
          return (
            /* binding */
            _InnovaToolFeatures
          );
        },

        /* harmony export */
        "InnovaToolScreenType": function InnovaToolScreenType() {
          return (
            /* binding */
            _InnovaToolScreenType
          );
        },

        /* harmony export */
        "InnovaToolModuleStatus": function InnovaToolModuleStatus() {
          return (
            /* binding */
            _InnovaToolModuleStatus
          );
        },

        /* harmony export */
        "InnovaToolLiveDataGroup": function InnovaToolLiveDataGroup() {
          return (
            /* binding */
            _InnovaToolLiveDataGroup
          );
        }
        /* harmony export */

      });

      var _PidBase = /*#__PURE__*/_createClass(function _PidBase() {
        var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

        _classCallCheck(this, _PidBase);

        this.id = id;
        this.value = value;
      });

      var _InnovaVCIEvent;

      (function (InnovaVCIEvent) {
        InnovaVCIEvent["LINK_PROTOCOL"] = "LINK_PROTOCOL";
        InnovaVCIEvent["CONNECTED"] = "CONNECTED";
        InnovaVCIEvent["DISCONNECTED"] = "DISCONNECTED";
        InnovaVCIEvent["USER_GUI_INFO"] = "user:gui_info";
        InnovaVCIEvent["INTERRUPT_PROCESS"] = "INTERRUPT_PROCESS";
        InnovaVCIEvent["SCAN_STATUS"] = "SCAN_STATUS";
        InnovaVCIEvent["DEVICE_FOUND"] = "DEVICE_FOUND";
        InnovaVCIEvent["DEVICE_SELECTED"] = "DEVICE_SELECTED";
      })(_InnovaVCIEvent || (_InnovaVCIEvent = {}));

      var _InnovaToolFeatures;

      (function (InnovaToolFeatures) {
        InnovaToolFeatures["SpecialTest"] = "Special Test";
        InnovaToolFeatures["ActuatorTest"] = "Actuator Test";
        InnovaToolFeatures["OilReset"] = "Oil Reset";
        InnovaToolFeatures["BatteryReset"] = "Battery Reset";
        InnovaToolFeatures["SASCalib"] = "Steering Angle Sensor";
        InnovaToolFeatures["EPB"] = "Electric Pad Brake";
        InnovaToolFeatures["ABS_Bleeding"] = "ABS Bleeding";
        InnovaToolFeatures["DPF_Reset"] = "DPF Reset";
        InnovaToolFeatures["TPMS_Reset"] = "TPMS Relearn";
        InnovaToolFeatures["Battery_Health_Check"] = "Battery/Alternator Test";
        InnovaToolFeatures["Service_Reset"] = "Service Reset";
      })(_InnovaToolFeatures || (_InnovaToolFeatures = {}));

      var _InnovaToolScreenType;

      (function (InnovaToolScreenType) {
        InnovaToolScreenType["MenuForm"] = "menuform";
        InnovaToolScreenType["TextForm"] = "textform";
        InnovaToolScreenType["InputForm"] = "inputtextform";
        InnovaToolScreenType["InfoValueForm"] = "infovalform";
        InnovaToolScreenType["Softkey"] = "softkeyform";
        InnovaToolScreenType["InfoMenuForm"] = "infomenuform";
        InnovaToolScreenType["Progressbar"] = "progressbar";
        InnovaToolScreenType["Finish"] = "Finish";
        InnovaToolScreenType["KeepAlive"] = "KeepAlive";
      })(_InnovaToolScreenType || (_InnovaToolScreenType = {}));

      var _InnovaToolModuleStatus;

      (function (InnovaToolModuleStatus) {
        InnovaToolModuleStatus["Valid"] = "Valid";
        InnovaToolModuleStatus["Available"] = "Available";
        InnovaToolModuleStatus["NotSupported"] = "Fail";
        InnovaToolModuleStatus["Unknown"] = "Unknown";
      })(_InnovaToolModuleStatus || (_InnovaToolModuleStatus = {}));

      var _InnovaToolLiveDataGroup;

      (function (InnovaToolLiveDataGroup) {
        InnovaToolLiveDataGroup[InnovaToolLiveDataGroup["OBD2"] = 1] = "OBD2";
        InnovaToolLiveDataGroup[InnovaToolLiveDataGroup["PCM"] = 16] = "PCM";
        InnovaToolLiveDataGroup[InnovaToolLiveDataGroup["ECM"] = 16] = "ECM";
        InnovaToolLiveDataGroup[InnovaToolLiveDataGroup["ABS"] = 2] = "ABS";
        InnovaToolLiveDataGroup[InnovaToolLiveDataGroup["SRS"] = 4] = "SRS";
      })(_InnovaToolLiveDataGroup || (_InnovaToolLiveDataGroup = {}));
      /***/

    },

    /***/
    13930:
    /*!*******************************************************************!*\
      !*** ./src/app/services/innova-vci-service/src/standard/enums.ts ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EnumNotify": function EnumNotify() {
          return (
            /* binding */
            _EnumNotify
          );
        },

        /* harmony export */
        "EnumSerialType": function EnumSerialType() {
          return (
            /* binding */
            _EnumSerialType
          );
        },

        /* harmony export */
        "enumDataFrameType": function enumDataFrameType() {
          return (
            /* binding */
            _enumDataFrameType
          );
        },

        /* harmony export */
        "ENUM_NOTIFY_EVENTS": function ENUM_NOTIFY_EVENTS() {
          return (
            /* binding */
            _ENUM_NOTIFY_EVENTS
          );
        },

        /* harmony export */
        "ENUM_EVENTIDTYPES": function ENUM_EVENTIDTYPES() {
          return (
            /* binding */
            _ENUM_EVENTIDTYPES
          );
        },

        /* harmony export */
        "ENUM_EVENTTYPEDATA": function ENUM_EVENTTYPEDATA() {
          return (
            /* binding */
            _ENUM_EVENTTYPEDATA
          );
        },

        /* harmony export */
        "enumBuffername": function enumBuffername() {
          return (
            /* reexport safe */
            _enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumBuffername
          );
        },

        /* harmony export */
        "enumChecksum": function enumChecksum() {
          return (
            /* reexport safe */
            _enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumChecksum
          );
        },

        /* harmony export */
        "enumConnector": function enumConnector() {
          return (
            /* reexport safe */
            _enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumConnector
          );
        },

        /* harmony export */
        "enumDlc": function enumDlc() {
          return (
            /* reexport safe */
            _enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumDlc
          );
        },

        /* harmony export */
        "enumDlcvoltage": function enumDlcvoltage() {
          return (
            /* reexport safe */
            _enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumDlcvoltage
          );
        },

        /* harmony export */
        "enumDtcdisplaytype": function enumDtcdisplaytype() {
          return (
            /* reexport safe */
            _enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumDtcdisplaytype
          );
        },

        /* harmony export */
        "enumDtcstatuse": function enumDtcstatuse() {
          return (
            /* reexport safe */
            _enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumDtcstatuse
          );
        },

        /* harmony export */
        "enumField": function enumField() {
          return (
            /* reexport safe */
            _enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumField
          );
        },

        /* harmony export */
        "enumInittype": function enumInittype() {
          return (
            /* reexport safe */
            _enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumInittype
          );
        },

        /* harmony export */
        "enumInnovagroup": function enumInnovagroup() {
          return (
            /* reexport safe */
            _enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumInnovagroup
          );
        },

        /* harmony export */
        "enumMake": function enumMake() {
          return (
            /* reexport safe */
            _enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumMake
          );
        },

        /* harmony export */
        "enumManufacturer": function enumManufacturer() {
          return (
            /* reexport safe */
            _enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumManufacturer
          );
        },

        /* harmony export */
        "enumMonitortype": function enumMonitortype() {
          return (
            /* reexport safe */
            _enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumMonitortype
          );
        },

        /* harmony export */
        "enumPd_Resitor": function enumPd_Resitor() {
          return (
            /* reexport safe */
            _enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumPd_Resitor
          );
        },

        /* harmony export */
        "enumProtocol": function enumProtocol() {
          return (
            /* reexport safe */
            _enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol
          );
        },

        /* harmony export */
        "enumResitor": function enumResitor() {
          return (
            /* reexport safe */
            _enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumResitor
          );
        },

        /* harmony export */
        "enumUartdata": function enumUartdata() {
          return (
            /* reexport safe */
            _enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumUartdata
          );
        },

        /* harmony export */
        "enumVin10toyear": function enumVin10toyear() {
          return (
            /* reexport safe */
            _enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumVin10toyear
          );
        },

        /* harmony export */
        "enumVref": function enumVref() {
          return (
            /* reexport safe */
            _enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumVref
          );
        },

        /* harmony export */
        "enumYear": function enumYear() {
          return (
            /* reexport safe */
            _enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumYear
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _enums_Global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./enums_Global */
      45611);

      var _EnumNotify;

      (function (EnumNotify) {
        EnumNotify["NOTIFY_OBD2_QUERY_INFO"] = "NOTIFY_OBD2_QUERY_INFO";
        EnumNotify["NOTIFY_DEBUG_LOG"] = "NOTIFY DEBUG LOG";
        EnumNotify["NOTIFY_DEBUG_LOG_COM_TX"] = "DEBUG TX";
        EnumNotify["NOTIFY_DEBUG_LOG_COM_RX"] = "DEBUG RX";
        EnumNotify["NOTIFY_DEBUG_LOG_COM_RX_RX"] = "DEBUG RX RX";
        EnumNotify["NOTIFY_VCI_DATA_RESPONSE"] = "VCI DATA RESPONSE";
      })(_EnumNotify || (_EnumNotify = {}));

      ;
      ;

      var _EnumSerialType;

      (function (EnumSerialType) {
        EnumSerialType[EnumSerialType["Serial_USB"] = 0] = "Serial_USB";
        EnumSerialType[EnumSerialType["Bluetooth"] = 1] = "Bluetooth";
      })(_EnumSerialType || (_EnumSerialType = {}));

      var _enumDataFrameType = {
        unknowFrame: 0,
        RespFrameACK: 1,
        ReqFrameACK: 2,
        NotifyFrame: 3,
        DataFrame: 4,
        BusyFrame: 5,
        StreamFrame: 6,
        StartMultiData: 7,
        StopMultiData: 8,
        LogDataofMultiData: 9
      };
      var _ENUM_NOTIFY_EVENTS = {
        UNKNOW: 0,
        IGNITION_ON_OFF: 1,
        BATTERY_WARNING: 2,
        FUEL_ECONOMY: 4,
        ACCELERATION: 8,
        COOLING_WATER_TEMPERATURE_HIGH: 0x10,
        DISTANCE_SINCE_START: 0x20,
        FUEL_LEVEL_LOW: 0x40,
        AVERAGE_SPEED: 0x80
      };
      var _ENUM_EVENTIDTYPES = {
        Engine_status: 0x04,
        Battery_warning: 0x05,
        Fuel_Economy: 0x06,
        Acceleration: 0x07,
        Cooling_water_temperature_high: 0x08,
        Distance_Since_start: 0x09,
        Fuel_Level_Low: 0x0a,
        Average_Speed: 0x0b,
        Fuel_Economy__Other_0c: 0x0c,
        Fuel_Economy__Other_0d: 0x0d,
        Fuel_Economy__Other_0e: 0x0e,
        Fuel_Economy__Other_0f: 0x0f,
        NetworkScan_Data: 0x11,
        Battery_Health: 0x20,
        OEMPidNotify: 0xfe
      };
      var _ENUM_EVENTTYPEDATA = {
        Ignition: 'Ignition',
        Battery_Warning: 'Battery Warning',
        Current_Fuel_Consumption: 'Current Fuel Consumption',
        Avarage_Fuel_Consumption: 'Avarage Fuel Consumption',
        Time_Elapse: 'Time Elapse',
        Average_Speed: 'Average Speed',
        Distance: 'Distance',
        Fuel_Usage: 'Fuel Usage',
        Fuel_Trip: 'Fuel Trip',
        Fuel_Rate: 'Fuel Rate',
        Distance_to_Empty: 'Distance to Empty',
        Acceleration: 'Acceleration',
        Cooling_Water_Temperature_High: 'Cooling Water Temperature High',
        Distance_Since_Start: 'Distance Since Start',
        Fuel_Level_Low: 'Fuel Level Low',
        // Average_Speed: 'Average Speed',
        Current_Fuel_Consumption_Status: 'Current Fuel Consumption Status',
        Average_Fuel_Consumption_Status: 'Average  Fuel Consumption Status',
        Fuel_Tank_Size: 'Fuel Tank Size',
        Fuel_Volume_Remaining: 'Fuel Volume Remaining',
        NetworkScan_Data: 'Network Scan Data',
        Battery_Health: 'Battery Health',
        OemPidData: 'Oem Pid Data',
        Event_Unknow: 'Event Unknow'
      };
      /***/
    },

    /***/
    45611:
    /*!**************************************************************************!*\
      !*** ./src/app/services/innova-vci-service/src/standard/enums_Global.ts ***!
      \**************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "enumYear": function enumYear() {
          return (
            /* binding */
            _enumYear
          );
        },

        /* harmony export */
        "enumManufacturer": function enumManufacturer() {
          return (
            /* binding */
            _enumManufacturer
          );
        },

        /* harmony export */
        "enumMake": function enumMake() {
          return (
            /* binding */
            _enumMake
          );
        },

        /* harmony export */
        "enumField": function enumField() {
          return (
            /* binding */
            _enumField
          );
        },

        /* harmony export */
        "enumVin10toyear": function enumVin10toyear() {
          return (
            /* binding */
            _enumVin10toyear
          );
        },

        /* harmony export */
        "enumProtocol": function enumProtocol() {
          return (
            /* binding */
            _enumProtocol
          );
        },

        /* harmony export */
        "enumMonitortype": function enumMonitortype() {
          return (
            /* binding */
            _enumMonitortype
          );
        },

        /* harmony export */
        "enumDlc": function enumDlc() {
          return (
            /* binding */
            _enumDlc
          );
        },

        /* harmony export */
        "enumDlcvoltage": function enumDlcvoltage() {
          return (
            /* binding */
            _enumDlcvoltage
          );
        },

        /* harmony export */
        "enumPd_Resitor": function enumPd_Resitor() {
          return (
            /* binding */
            _enumPd_Resitor
          );
        },

        /* harmony export */
        "enumResitor": function enumResitor() {
          return (
            /* binding */
            _enumResitor
          );
        },

        /* harmony export */
        "enumVref": function enumVref() {
          return (
            /* binding */
            _enumVref
          );
        },

        /* harmony export */
        "enumUartdata": function enumUartdata() {
          return (
            /* binding */
            _enumUartdata
          );
        },

        /* harmony export */
        "enumChecksum": function enumChecksum() {
          return (
            /* binding */
            _enumChecksum
          );
        },

        /* harmony export */
        "enumInittype": function enumInittype() {
          return (
            /* binding */
            _enumInittype
          );
        },

        /* harmony export */
        "enumConnector": function enumConnector() {
          return (
            /* binding */
            _enumConnector
          );
        },

        /* harmony export */
        "enumDtcstatuse": function enumDtcstatuse() {
          return (
            /* binding */
            _enumDtcstatuse
          );
        },

        /* harmony export */
        "enumBuffername": function enumBuffername() {
          return (
            /* binding */
            _enumBuffername
          );
        },

        /* harmony export */
        "enumDtcdisplaytype": function enumDtcdisplaytype() {
          return (
            /* binding */
            _enumDtcdisplaytype
          );
        },

        /* harmony export */
        "enumInnovagroup": function enumInnovagroup() {
          return (
            /* binding */
            _enumInnovagroup
          );
        }
        /* harmony export */

      });
      /******************************************************************************************************************
      * Engineer    : automatic generated
      * Date        : 4/3/2016
      * Version   : V01.00.01
      ********************************************************************************************************************/


      var _enumYear;

      (function (enumYear) {
        enumYear[enumYear["eyear_UNKNOWN"] = 0] = "eyear_UNKNOWN";
        enumYear[enumYear["eyear_1996"] = 16] = "eyear_1996";
        enumYear[enumYear["eyear_1997"] = 17] = "eyear_1997";
        enumYear[enumYear["eyear_1998"] = 18] = "eyear_1998";
        enumYear[enumYear["eyear_1999"] = 19] = "eyear_1999";
        enumYear[enumYear["eyear_2000"] = 20] = "eyear_2000";
        enumYear[enumYear["eyear_2001"] = 21] = "eyear_2001";
        enumYear[enumYear["eyear_2002"] = 22] = "eyear_2002";
        enumYear[enumYear["eyear_2003"] = 23] = "eyear_2003";
        enumYear[enumYear["eyear_2004"] = 24] = "eyear_2004";
        enumYear[enumYear["eyear_2005"] = 25] = "eyear_2005";
        enumYear[enumYear["eyear_2006"] = 26] = "eyear_2006";
        enumYear[enumYear["eyear_2007"] = 27] = "eyear_2007";
        enumYear[enumYear["eyear_2008"] = 28] = "eyear_2008";
        enumYear[enumYear["eyear_2009"] = 29] = "eyear_2009";
        enumYear[enumYear["eyear_2010"] = 30] = "eyear_2010";
        enumYear[enumYear["eyear_2011"] = 31] = "eyear_2011";
        enumYear[enumYear["eyear_2012"] = 32] = "eyear_2012";
        enumYear[enumYear["eyear_2013"] = 33] = "eyear_2013";
        enumYear[enumYear["eyear_2014"] = 34] = "eyear_2014";
        enumYear[enumYear["eyear_2015"] = 35] = "eyear_2015";
        enumYear[enumYear["eyear_Others"] = 65534] = "eyear_Others";
        enumYear[enumYear["eyear_MAX"] = 65535] = "eyear_MAX";
        enumYear[enumYear["eyear_2016"] = 36] = "eyear_2016";
      })(_enumYear || (_enumYear = {}));

      ;

      var _enumManufacturer;

      (function (enumManufacturer) {
        enumManufacturer[enumManufacturer["emanufacturer_UNKNOWN"] = 0] = "emanufacturer_UNKNOWN";
        enumManufacturer[enumManufacturer["emanufacturer_BMW"] = 1] = "emanufacturer_BMW";
        enumManufacturer[enumManufacturer["emanufacturer_Chrysler"] = 2] = "emanufacturer_Chrysler";
        enumManufacturer[enumManufacturer["emanufacturer_Ford"] = 3] = "emanufacturer_Ford";
        enumManufacturer[enumManufacturer["emanufacturer_GM"] = 4] = "emanufacturer_GM";
        enumManufacturer[enumManufacturer["emanufacturer_Honda"] = 5] = "emanufacturer_Honda";
        enumManufacturer[enumManufacturer["emanufacturer_Hyundai"] = 6] = "emanufacturer_Hyundai";
        enumManufacturer[enumManufacturer["emanufacturer_Mazda"] = 10] = "emanufacturer_Mazda";
        enumManufacturer[enumManufacturer["emanufacturer_Mercedes_Benz"] = 11] = "emanufacturer_Mercedes_Benz";
        enumManufacturer[enumManufacturer["emanufacturer_Nissan"] = 12] = "emanufacturer_Nissan";
        enumManufacturer[enumManufacturer["emanufacturer_Toyota"] = 13] = "emanufacturer_Toyota";
        enumManufacturer[enumManufacturer["emanufacturer_Volkswagen"] = 14] = "emanufacturer_Volkswagen";
        enumManufacturer[enumManufacturer["emanufacturer_Volvo"] = 15] = "emanufacturer_Volvo";
        enumManufacturer[enumManufacturer["emanufacturer_Isuzu"] = 16] = "emanufacturer_Isuzu";
        enumManufacturer[enumManufacturer["emanufacturer_Mitsubishi"] = 17] = "emanufacturer_Mitsubishi";
        enumManufacturer[enumManufacturer["emanufacturer_Subaru"] = 18] = "emanufacturer_Subaru";
        enumManufacturer[enumManufacturer["emanufacturer_Suzuki"] = 19] = "emanufacturer_Suzuki";
        enumManufacturer[enumManufacturer["emanufacturer_Porsche"] = 20] = "emanufacturer_Porsche";
        enumManufacturer[enumManufacturer["emanufacturer_GlobalTruck"] = 65533] = "emanufacturer_GlobalTruck";
        enumManufacturer[enumManufacturer["emanufacturer_Others"] = 65534] = "emanufacturer_Others";
        enumManufacturer[enumManufacturer["emanufacturer_MAX"] = 65535] = "emanufacturer_MAX";
        enumManufacturer[enumManufacturer["emanufacturer_Generic"] = 65535] = "emanufacturer_Generic";
        enumManufacturer[enumManufacturer["emanufacturer_Jaguar_____Land_____Rover"] = 21] = "emanufacturer_Jaguar_____Land_____Rover";
        enumManufacturer[enumManufacturer["emanufacturer_BYD"] = 22] = "emanufacturer_BYD";
        enumManufacturer[enumManufacturer["emanufacturer_Chery"] = 23] = "emanufacturer_Chery";
        enumManufacturer[enumManufacturer["emanufacturer_Daihatsu"] = 24] = "emanufacturer_Daihatsu";
        enumManufacturer[enumManufacturer["emanufacturer_Ssangyong"] = 25] = "emanufacturer_Ssangyong";
        enumManufacturer[enumManufacturer["emanufacturer_Rover_____Group"] = 26] = "emanufacturer_Rover_____Group";
        enumManufacturer[enumManufacturer["emanufacturer_SAIC"] = 27] = "emanufacturer_SAIC";
        enumManufacturer[enumManufacturer["emanufacturer_Fiat"] = 28] = "emanufacturer_Fiat";
        enumManufacturer[enumManufacturer["emanufacturer_Peugeot"] = 29] = "emanufacturer_Peugeot";
        enumManufacturer[enumManufacturer["emanufacturer_Daewoo"] = 30] = "emanufacturer_Daewoo";
        enumManufacturer[enumManufacturer["emanufacturer_Lifan"] = 31] = "emanufacturer_Lifan";
        enumManufacturer[enumManufacturer["emanufacturer_Faw"] = 32] = "emanufacturer_Faw";
        enumManufacturer[enumManufacturer["emanufacturer_MG"] = 33] = "emanufacturer_MG";
        enumManufacturer[enumManufacturer["emanufacturer_Opel"] = 34] = "emanufacturer_Opel";
        enumManufacturer[enumManufacturer["emanufacturer_Renault"] = 35] = "emanufacturer_Renault";
      })(_enumManufacturer || (_enumManufacturer = {}));

      ;

      var _enumMake;

      (function (enumMake) {
        enumMake[enumMake["emake_UNKNOWN"] = 0] = "emake_UNKNOWN";
        enumMake[enumMake["emake_Acura"] = 1] = "emake_Acura";
        enumMake[enumMake["emake_AM_____General"] = 2] = "emake_AM_____General";
        enumMake[enumMake["emake_Audi"] = 3] = "emake_Audi";
        enumMake[enumMake["emake_BMW"] = 4] = "emake_BMW";
        enumMake[enumMake["emake_Buick"] = 5] = "emake_Buick";
        enumMake[enumMake["emake_Cadillac"] = 6] = "emake_Cadillac";
        enumMake[enumMake["emake_Chevrolet"] = 7] = "emake_Chevrolet";
        enumMake[enumMake["emake_Chrysler"] = 8] = "emake_Chrysler";
        enumMake[enumMake["emake_Daewoo"] = 9] = "emake_Daewoo";
        enumMake[enumMake["emake_Dodge"] = 10] = "emake_Dodge";
        enumMake[enumMake["emake_Eagle"] = 11] = "emake_Eagle";
        enumMake[enumMake["emake_Ford"] = 12] = "emake_Ford";
        enumMake[enumMake["emake_Geo"] = 13] = "emake_Geo";
        enumMake[enumMake["emake_GMC"] = 14] = "emake_GMC";
        enumMake[enumMake["emake_Honda"] = 15] = "emake_Honda";
        enumMake[enumMake["emake_Hummer"] = 16] = "emake_Hummer";
        enumMake[enumMake["emake_Hyundai"] = 17] = "emake_Hyundai";
        enumMake[enumMake["emake_Infiniti"] = 18] = "emake_Infiniti";
        enumMake[enumMake["emake_Jaguar"] = 19] = "emake_Jaguar";
        enumMake[enumMake["emake_Jeep"] = 20] = "emake_Jeep";
        enumMake[enumMake["emake_Kia"] = 21] = "emake_Kia";
        enumMake[enumMake["emake_Land_____Rover"] = 22] = "emake_Land_____Rover";
        enumMake[enumMake["emake_Lexus"] = 23] = "emake_Lexus";
        enumMake[enumMake["emake_Lincoln"] = 24] = "emake_Lincoln";
        enumMake[enumMake["emake_Mazda"] = 25] = "emake_Mazda";
        enumMake[enumMake["emake_Mercedes_Benz"] = 26] = "emake_Mercedes_Benz";
        enumMake[enumMake["emake_Mercury"] = 27] = "emake_Mercury";
        enumMake[enumMake["emake_Mini"] = 28] = "emake_Mini";
        enumMake[enumMake["emake_Nissan"] = 29] = "emake_Nissan";
        enumMake[enumMake["emake_Oldsmobile"] = 30] = "emake_Oldsmobile";
        enumMake[enumMake["emake_Plymouth"] = 31] = "emake_Plymouth";
        enumMake[enumMake["emake_Pontiac"] = 32] = "emake_Pontiac";
        enumMake[enumMake["emake_Ram"] = 33] = "emake_Ram";
        enumMake[enumMake["emake_Saab"] = 34] = "emake_Saab";
        enumMake[enumMake["emake_Saturn"] = 35] = "emake_Saturn";
        enumMake[enumMake["emake_Scion"] = 36] = "emake_Scion";
        enumMake[enumMake["emake_SRT"] = 37] = "emake_SRT";
        enumMake[enumMake["emake_Toyota"] = 38] = "emake_Toyota";
        enumMake[enumMake["emake_Volkswagen"] = 39] = "emake_Volkswagen";
        enumMake[enumMake["emake_Volvo"] = 40] = "emake_Volvo";
        enumMake[enumMake["emake_Fiat"] = 41] = "emake_Fiat";
        enumMake[enumMake["emake_Isuzu"] = 42] = "emake_Isuzu";
        enumMake[enumMake["emake_Mitsubishi"] = 43] = "emake_Mitsubishi";
        enumMake[enumMake["emake_Porsche"] = 44] = "emake_Porsche";
        enumMake[enumMake["emake_Smart"] = 45] = "emake_Smart";
        enumMake[enumMake["emake_Subaru"] = 46] = "emake_Subaru";
        enumMake[enumMake["emake_Suzuki"] = 47] = "emake_Suzuki";
        enumMake[enumMake["emake_Others"] = 65534] = "emake_Others";
        enumMake[enumMake["emake_MAX"] = 65535] = "emake_MAX";
        enumMake[enumMake["emake_BYD"] = 48] = "emake_BYD";
        enumMake[enumMake["emake_Chery"] = 49] = "emake_Chery";
        enumMake[enumMake["emake_Daihatsu"] = 50] = "emake_Daihatsu";
        enumMake[enumMake["emake_Ssangyong"] = 51] = "emake_Ssangyong";
        enumMake[enumMake["emake_MG"] = 52] = "emake_MG";
        enumMake[enumMake["emake_Peugeot"] = 53] = "emake_Peugeot";
        enumMake[enumMake["emake_Seat"] = 54] = "emake_Seat";
        enumMake[enumMake["emake_Bentley"] = 55] = "emake_Bentley";
        enumMake[enumMake["emake_Alfa_____Romeo"] = 56] = "emake_Alfa_____Romeo";
        enumMake[enumMake["emake_Citro_n"] = 57] = "emake_Citro_n";
        enumMake[enumMake["emake_Lifan"] = 58] = "emake_Lifan";
        enumMake[enumMake["emake_Faw"] = 59] = "emake_Faw";
        enumMake[enumMake["emake_GM"] = 60] = "emake_GM";
        enumMake[enumMake["emake_Opel"] = 61] = "emake_Opel";
        enumMake[enumMake["emake_Fiat_FCA_"] = 62] = "emake_Fiat_FCA_";
        enumMake[enumMake["emake_Renault"] = 63] = "emake_Renault";
      })(_enumMake || (_enumMake = {}));

      ;

      var _enumField;

      (function (enumField) {
        enumField[enumField["efield_UNKNOWN"] = 0] = "efield_UNKNOWN";
        enumField[enumField["efield_year"] = 1] = "efield_year";
        enumField[enumField["efield_manufacturer"] = 2] = "efield_manufacturer";
        enumField[enumField["efield_make"] = 3] = "efield_make";
        enumField[enumField["efield_model"] = 4] = "efield_model";
        enumField[enumField["efield_engine"] = 5] = "efield_engine";
        enumField[enumField["efield_trim"] = 6] = "efield_trim";
        enumField[enumField["efield_transmission"] = 7] = "efield_transmission";
        enumField[enumField["efield_bodycode"] = 8] = "efield_bodycode";
        enumField[enumField["efield_vin10toyear"] = 9] = "efield_vin10toyear";
        enumField[enumField["efield_protocol"] = 10] = "efield_protocol";
        enumField[enumField["efield_dlc"] = 11] = "efield_dlc";
        enumField[enumField["efield_dlcvoltage"] = 12] = "efield_dlcvoltage";
        enumField[enumField["efield_pd_resitor"] = 13] = "efield_pd_resitor";
        enumField[enumField["efield_resitor"] = 14] = "efield_resitor";
        enumField[enumField["efield_vref"] = 15] = "efield_vref";
        enumField[enumField["efield_uartdata"] = 16] = "efield_uartdata";
        enumField[enumField["efield_checksum"] = 17] = "efield_checksum";
        enumField[enumField["efield_inittype"] = 18] = "efield_inittype";
        enumField[enumField["efield_connector"] = 19] = "efield_connector";
        enumField[enumField["efield_dtcstatuse"] = 20] = "efield_dtcstatuse";
        enumField[enumField["efield_buffername"] = 21] = "efield_buffername";
        enumField[enumField["efield_dtcdisplaytype"] = 22] = "efield_dtcdisplaytype";
        enumField[enumField["efield_innovagroup"] = 23] = "efield_innovagroup";
        enumField[enumField["efield_bmwvariantformula"] = 24] = "efield_bmwvariantformula";
        enumField[enumField["efield_variant"] = 25] = "efield_variant";
        enumField[enumField["efield_step"] = 26] = "efield_step";
        enumField[enumField["efield_bmwreaddtctype"] = 27] = "efield_bmwreaddtctype";
        enumField[enumField["efield_bmwerasedtctype"] = 28] = "efield_bmwerasedtctype";
        enumField[enumField["efield_bmwparserdtctype"] = 29] = "efield_bmwparserdtctype";
        enumField[enumField["efield_command"] = 30] = "efield_command";
        enumField[enumField["efield_bmwvariantdecode"] = 31] = "efield_bmwvariantdecode";
        enumField[enumField["efield_readdtccommandlist"] = 32] = "efield_readdtccommandlist";
        enumField[enumField["efield_commandlist"] = 33] = "efield_commandlist";
        enumField[enumField["efield_ecuinfotype"] = 34] = "efield_ecuinfotype";
        enumField[enumField["efield_dtcreadtype"] = 35] = "efield_dtcreadtype";
        enumField[enumField["efield_lookuptable"] = 36] = "efield_lookuptable";
        enumField[enumField["efield_messageid"] = 37] = "efield_messageid";
        enumField[enumField["efield_system"] = 38] = "efield_system";
        enumField[enumField["efield_timing"] = 39] = "efield_timing";
        enumField[enumField["efield_erasetype"] = 40] = "efield_erasetype";
        enumField[enumField["efield_subsystem"] = 41] = "efield_subsystem";
        enumField[enumField["efield_programid"] = 42] = "efield_programid";
        enumField[enumField["efield_unitinforesult"] = 43] = "efield_unitinforesult";
        enumField[enumField["efield_displayvisible"] = 44] = "efield_displayvisible";
        enumField[enumField["efield_hondaoption"] = 45] = "efield_hondaoption";
        enumField[enumField["efield_ecutype"] = 46] = "efield_ecutype";
        enumField[enumField["efield_ecupartnumber"] = 47] = "efield_ecupartnumber";
        enumField[enumField["efield_parsertype"] = 48] = "efield_parsertype";
        enumField[enumField["efield_formula"] = 49] = "efield_formula";
        enumField[enumField["efield_convertunit"] = 50] = "efield_convertunit";
        enumField[enumField["efield_mercedes_supplier"] = 51] = "efield_mercedes_supplier";
        enumField[enumField["efield_mercedes_qualifier"] = 52] = "efield_mercedes_qualifier";
        enumField[enumField["efield_modeltype"] = 53] = "efield_modeltype";
        enumField[enumField["efield_bm"] = 54] = "efield_bm";
        enumField[enumField["efield_ecuid"] = 55] = "efield_ecuid";
        enumField[enumField["efield_type"] = 56] = "efield_type";
      })(_enumField || (_enumField = {}));

      ;

      var _enumVin10toyear;

      (function (enumVin10toyear) {
        enumVin10toyear[enumVin10toyear["evin10toyear_UNKNOWN"] = 0] = "evin10toyear_UNKNOWN";
        enumVin10toyear[enumVin10toyear["evin10toyear_T"] = 16] = "evin10toyear_T";
        enumVin10toyear[enumVin10toyear["evin10toyear_V"] = 17] = "evin10toyear_V";
        enumVin10toyear[enumVin10toyear["evin10toyear_W"] = 18] = "evin10toyear_W";
        enumVin10toyear[enumVin10toyear["evin10toyear_X"] = 19] = "evin10toyear_X";
        enumVin10toyear[enumVin10toyear["evin10toyear_Y"] = 20] = "evin10toyear_Y";
        enumVin10toyear[enumVin10toyear["evin10toyear_1"] = 21] = "evin10toyear_1";
        enumVin10toyear[enumVin10toyear["evin10toyear_2"] = 22] = "evin10toyear_2";
        enumVin10toyear[enumVin10toyear["evin10toyear_3"] = 23] = "evin10toyear_3";
        enumVin10toyear[enumVin10toyear["evin10toyear_4"] = 24] = "evin10toyear_4";
        enumVin10toyear[enumVin10toyear["evin10toyear_5"] = 25] = "evin10toyear_5";
        enumVin10toyear[enumVin10toyear["evin10toyear_6"] = 26] = "evin10toyear_6";
        enumVin10toyear[enumVin10toyear["evin10toyear_7"] = 27] = "evin10toyear_7";
        enumVin10toyear[enumVin10toyear["evin10toyear_8"] = 28] = "evin10toyear_8";
        enumVin10toyear[enumVin10toyear["evin10toyear_9"] = 29] = "evin10toyear_9";
        enumVin10toyear[enumVin10toyear["evin10toyear_A"] = 30] = "evin10toyear_A";
        enumVin10toyear[enumVin10toyear["evin10toyear_B"] = 31] = "evin10toyear_B";
        enumVin10toyear[enumVin10toyear["evin10toyear_C"] = 32] = "evin10toyear_C";
        enumVin10toyear[enumVin10toyear["evin10toyear_D"] = 33] = "evin10toyear_D";
        enumVin10toyear[enumVin10toyear["evin10toyear_E"] = 34] = "evin10toyear_E";
        enumVin10toyear[enumVin10toyear["evin10toyear_F"] = 35] = "evin10toyear_F";
        enumVin10toyear[enumVin10toyear["evin10toyear_G"] = 36] = "evin10toyear_G";
        enumVin10toyear[enumVin10toyear["evin10toyear_H"] = 37] = "evin10toyear_H";
        enumVin10toyear[enumVin10toyear["evin10toyear_J"] = 38] = "evin10toyear_J";
        enumVin10toyear[enumVin10toyear["evin10toyear_K"] = 39] = "evin10toyear_K";
        enumVin10toyear[enumVin10toyear["evin10toyear_L"] = 40] = "evin10toyear_L";
        enumVin10toyear[enumVin10toyear["evin10toyear_M"] = 41] = "evin10toyear_M";
        enumVin10toyear[enumVin10toyear["evin10toyear_N"] = 42] = "evin10toyear_N";
        enumVin10toyear[enumVin10toyear["evin10toyear_P"] = 43] = "evin10toyear_P";
        enumVin10toyear[enumVin10toyear["evin10toyear_R"] = 44] = "evin10toyear_R";
        enumVin10toyear[enumVin10toyear["evin10toyear_S"] = 45] = "evin10toyear_S";
      })(_enumVin10toyear || (_enumVin10toyear = {}));

      ;

      var _enumProtocol;

      (function (enumProtocol) {
        enumProtocol[enumProtocol["eprotocol_UNKNOWN"] = -1] = "eprotocol_UNKNOWN";
        enumProtocol[enumProtocol["eprotocol_PROTOCOL_NO"] = 0] = "eprotocol_PROTOCOL_NO";
        enumProtocol[enumProtocol["eprotocol_PROTOCOL_VPW"] = 1] = "eprotocol_PROTOCOL_VPW";
        enumProtocol[enumProtocol["eprotocol_PROTOCOL_PWM"] = 2] = "eprotocol_PROTOCOL_PWM";
        enumProtocol[enumProtocol["eprotocol_PROTOCOL_ISO9141"] = 3] = "eprotocol_PROTOCOL_ISO9141";
        enumProtocol[enumProtocol["eprotocol_PROTOCOL_KW2000"] = 4] = "eprotocol_PROTOCOL_KW2000";
        enumProtocol[enumProtocol["eprotocol_PROTOCOL_CAN500KBAUD"] = 5] = "eprotocol_PROTOCOL_CAN500KBAUD";
        enumProtocol[enumProtocol["eprotocol_PROTOCOL_XCAN500KBAUD"] = 6] = "eprotocol_PROTOCOL_XCAN500KBAUD";
        enumProtocol[enumProtocol["eprotocol_PROTOCOL_CAN250KBAUD"] = 7] = "eprotocol_PROTOCOL_CAN250KBAUD";
        enumProtocol[enumProtocol["eprotocol_PROTOCOL_XCAN250KBAUD"] = 8] = "eprotocol_PROTOCOL_XCAN250KBAUD";
        enumProtocol[enumProtocol["eprotocol_PROTOCOL_BOSCH"] = 9] = "eprotocol_PROTOCOL_BOSCH";
        enumProtocol[enumProtocol["eprotocol_PROTOCOL_RESERVE_10"] = 10] = "eprotocol_PROTOCOL_RESERVE_10";
        enumProtocol[enumProtocol["eprotocol_PROTOCOL_RESERVE_11"] = 11] = "eprotocol_PROTOCOL_RESERVE_11";
        enumProtocol[enumProtocol["eprotocol_PROTOCOL_RESERVE_12"] = 12] = "eprotocol_PROTOCOL_RESERVE_12";
        enumProtocol[enumProtocol["eprotocol_PROTOCOL_RESERVE_13"] = 13] = "eprotocol_PROTOCOL_RESERVE_13";
        enumProtocol[enumProtocol["eprotocol_PROTOCOL_RESERVE_14"] = 14] = "eprotocol_PROTOCOL_RESERVE_14";
        enumProtocol[enumProtocol["eprotocol_PROTOCOL_KW"] = 15] = "eprotocol_PROTOCOL_KW";
        enumProtocol[enumProtocol["eprotocol_PROTOCOL_KW1281"] = 16] = "eprotocol_PROTOCOL_KW1281";
        enumProtocol[enumProtocol["eprotocol_PROTOCOL_MUT"] = 17] = "eprotocol_PROTOCOL_MUT";
        enumProtocol[enumProtocol["eprotocol_PROTOCOL_CAN_C_UDS"] = 18] = "eprotocol_PROTOCOL_CAN_C_UDS";
        enumProtocol[enumProtocol["eprotocol_PROTOCOL_CAN_I_UDS"] = 19] = "eprotocol_PROTOCOL_CAN_I_UDS";
        enumProtocol[enumProtocol["eprotocol_PROTOCOL_RESERVE_20"] = 20] = "eprotocol_PROTOCOL_RESERVE_20";
        enumProtocol[enumProtocol["eprotocol_PROTOCOL_CCD2"] = 21] = "eprotocol_PROTOCOL_CCD2";
        enumProtocol[enumProtocol["eprotocol_PROTOCOL_SDL"] = 22] = "eprotocol_PROTOCOL_SDL";
        enumProtocol[enumProtocol["eprotocol_PROTOCOL_UBP"] = 23] = "eprotocol_PROTOCOL_UBP";
        enumProtocol[enumProtocol["eprotocol_PROTOCOL_MCAN"] = 24] = "eprotocol_PROTOCOL_MCAN";
        enumProtocol[enumProtocol["eprotocol_PROTOCOL_MCAN_____UDS"] = 25] = "eprotocol_PROTOCOL_MCAN_____UDS";
        enumProtocol[enumProtocol["eprotocol_PROTOCOL_H99B"] = 26] = "eprotocol_PROTOCOL_H99B";
        enumProtocol[enumProtocol["eprotocol_PROTOCOL_95HM"] = 27] = "eprotocol_PROTOCOL_95HM";
        enumProtocol[enumProtocol["eprotocol_PROTOCOL_92HM"] = 28] = "eprotocol_PROTOCOL_92HM";
        enumProtocol[enumProtocol["eprotocol_PROTOCOL_CAN"] = 29] = "eprotocol_PROTOCOL_CAN";
        enumProtocol[enumProtocol["eprotocol_PROTOCOL_RESERVE_30"] = 30] = "eprotocol_PROTOCOL_RESERVE_30";
        enumProtocol[enumProtocol["eprotocol_PROTOCOL_RESERVE_31"] = 31] = "eprotocol_PROTOCOL_RESERVE_31";
        enumProtocol[enumProtocol["eprotocol_PROTOCOL_CCD"] = 32] = "eprotocol_PROTOCOL_CCD";
        enumProtocol[enumProtocol["eprotocol_PROTOCOL_SCI"] = 33] = "eprotocol_PROTOCOL_SCI";
        enumProtocol[enumProtocol["eprotocol_PROTOCOL_RESERVE_34"] = 34] = "eprotocol_PROTOCOL_RESERVE_34";
        enumProtocol[enumProtocol["eprotocol_PROTOCOL_RESERVE_35"] = 35] = "eprotocol_PROTOCOL_RESERVE_35";
        enumProtocol[enumProtocol["eprotocol_PROTOCOL_RESERVE_36"] = 36] = "eprotocol_PROTOCOL_RESERVE_36";
        enumProtocol[enumProtocol["eprotocol_PROTOCOL_RESERVE_37"] = 37] = "eprotocol_PROTOCOL_RESERVE_37";
        enumProtocol[enumProtocol["eprotocol_PROTOCOL_RESERVE_38"] = 38] = "eprotocol_PROTOCOL_RESERVE_38";
        enumProtocol[enumProtocol["eprotocol_PROTOCOL_RESERVE_39"] = 39] = "eprotocol_PROTOCOL_RESERVE_39";
        enumProtocol[enumProtocol["eprotocol_PROTOCOL_RESERVE_40"] = 40] = "eprotocol_PROTOCOL_RESERVE_40";
        enumProtocol[enumProtocol["eprotocol_PROTOCOL_RESERVE_41"] = 41] = "eprotocol_PROTOCOL_RESERVE_41";
        enumProtocol[enumProtocol["eprotocol_PROTOCOL_OBD1"] = 42] = "eprotocol_PROTOCOL_OBD1";
        enumProtocol[enumProtocol["eprotocol_PROTOCOL_RESERVE_43"] = 43] = "eprotocol_PROTOCOL_RESERVE_43";
        enumProtocol[enumProtocol["eprotocol_PROTOCOL_RESERVE_44"] = 44] = "eprotocol_PROTOCOL_RESERVE_44";
        enumProtocol[enumProtocol["eprotocol_PROTOCOL_RESERVE_45"] = 45] = "eprotocol_PROTOCOL_RESERVE_45";
        enumProtocol[enumProtocol["eprotocol_PROTOCOL_RESERVE_46"] = 46] = "eprotocol_PROTOCOL_RESERVE_46";
        enumProtocol[enumProtocol["eprotocol_PROTOCOL_RESERVE_47"] = 47] = "eprotocol_PROTOCOL_RESERVE_47";
        enumProtocol[enumProtocol["eprotocol_PROTOCOL_DDL1"] = 48] = "eprotocol_PROTOCOL_DDL1";
        enumProtocol[enumProtocol["eprotocol_PROTOCOL_SWCAN"] = 49] = "eprotocol_PROTOCOL_SWCAN";
        enumProtocol[enumProtocol["eprotocol_PROTOCOL_RESERVE_50"] = 50] = "eprotocol_PROTOCOL_RESERVE_50";
        enumProtocol[enumProtocol["eprotocol_PROTOCOL_MB_ISO"] = 51] = "eprotocol_PROTOCOL_MB_ISO";
        enumProtocol[enumProtocol["eprotocol_PROTOCOL_KWFB"] = 52] = "eprotocol_PROTOCOL_KWFB";
        enumProtocol[enumProtocol["eprotocol_PROTOCOL_BMW_CAN"] = 53] = "eprotocol_PROTOCOL_BMW_CAN";
        enumProtocol[enumProtocol["eprotocol_PROTOCOL_TPCAN_2_0"] = 54] = "eprotocol_PROTOCOL_TPCAN_2_0";
        enumProtocol[enumProtocol["eprotocol_PROTOCOL_TPCAN_1_6_KW1281"] = 55] = "eprotocol_PROTOCOL_TPCAN_1_6_KW1281";
        enumProtocol[enumProtocol["eprotocol_PROTOCOL_TPCAN_1_6_KW2000"] = 56] = "eprotocol_PROTOCOL_TPCAN_1_6_KW2000";
        enumProtocol[enumProtocol["eprotocol_PROTOCOL_KWSSM"] = 57] = "eprotocol_PROTOCOL_KWSSM";
        enumProtocol[enumProtocol["eprotocol_PROTOCOL_DDL2"] = 58] = "eprotocol_PROTOCOL_DDL2";
        enumProtocol[enumProtocol["eprotocol_PROTOCOL_DS2"] = 59] = "eprotocol_PROTOCOL_DS2";
        enumProtocol[enumProtocol["eprotocol_PROTOCOL_CAN_UDS"] = 60] = "eprotocol_PROTOCOL_CAN_UDS";
        enumProtocol[enumProtocol["eprotocol_PROTOCOL_CANUDS"] = 60] = "eprotocol_PROTOCOL_CANUDS";
        enumProtocol[enumProtocol["eprotocol_PROTOCOL_CAN_D2"] = 61] = "eprotocol_PROTOCOL_CAN_D2";
        enumProtocol[enumProtocol["eprotocol_PROTOCOL_CAN_GGD"] = 62] = "eprotocol_PROTOCOL_CAN_GGD";
        enumProtocol[enumProtocol["eprotocol_PROTOCOL_ALDL"] = 63] = "eprotocol_PROTOCOL_ALDL";
        enumProtocol[enumProtocol["eprotocol_PROTOCOL_GMLAN"] = 64] = "eprotocol_PROTOCOL_GMLAN";
        enumProtocol[enumProtocol["eprotocol_PROTOCOL_MAX"] = 65535] = "eprotocol_PROTOCOL_MAX";
        enumProtocol[enumProtocol["eprotocol_PROTOCOL_CAN_C"] = 65] = "eprotocol_PROTOCOL_CAN_C";
        enumProtocol[enumProtocol["eprotocol_PROTOCOL_TCAN"] = 66] = "eprotocol_PROTOCOL_TCAN";
        enumProtocol[enumProtocol["eprotocol_PROTOCOL_DS1"] = 70] = "eprotocol_PROTOCOL_DS1";
        enumProtocol[enumProtocol["eprotocol_PROTOCOL_DS2_MID"] = 71] = "eprotocol_PROTOCOL_DS2_MID";
        enumProtocol[enumProtocol["eprotocol_PROTOCOL_D2"] = 73] = "eprotocol_PROTOCOL_D2";
        enumProtocol[enumProtocol["eprotocol_PROTOCOL_GGD"] = 74] = "eprotocol_PROTOCOL_GGD";
        enumProtocol[enumProtocol["eprotocol_Suzuki_SDL"] = 75] = "eprotocol_Suzuki_SDL";
        enumProtocol[enumProtocol["eprotocol_PROTOCOL_RESERVE_76"] = 76] = "eprotocol_PROTOCOL_RESERVE_76";
        enumProtocol[enumProtocol["eprotocol_PROTOCOL_RESERVE_77"] = 77] = "eprotocol_PROTOCOL_RESERVE_77";
        enumProtocol[enumProtocol["eprotocol_PROTOCOL_RESERVE_78"] = 78] = "eprotocol_PROTOCOL_RESERVE_78";
        enumProtocol[enumProtocol["eprotocol_PROTOCOL_RESERVE_79"] = 79] = "eprotocol_PROTOCOL_RESERVE_79";
        enumProtocol[enumProtocol["eprotocol_PROTOCOL_RESERVE_80"] = 80] = "eprotocol_PROTOCOL_RESERVE_80";
        enumProtocol[enumProtocol["eprotocol_PROTOCOL_J1708"] = 81] = "eprotocol_PROTOCOL_J1708";
        enumProtocol[enumProtocol["eprotocol_PROTOCOL_J1939"] = 82] = "eprotocol_PROTOCOL_J1939";
      })(_enumProtocol || (_enumProtocol = {}));

      ;

      var _enumMonitortype;

      (function (enumMonitortype) {
        enumMonitortype[enumMonitortype["emonitortype_UNKNOWN"] = 0] = "emonitortype_UNKNOWN";
        enumMonitortype[enumMonitortype["emonitortype_AIR_Secondary_____air_____system_____monitoring"] = 1] = "emonitortype_AIR_Secondary_____air_____system_____monitoring";
        enumMonitortype[enumMonitortype["emonitortype_BPS_Boost_____Pressure_____System_____Monitor"] = 2] = "emonitortype_BPS_Boost_____Pressure_____System_____Monitor";
        enumMonitortype[enumMonitortype["emonitortype_CAT_Catalyst_____monitoring"] = 3] = "emonitortype_CAT_Catalyst_____monitoring";
        enumMonitortype[enumMonitortype["emonitortype_CCM_Comprehensive_____component_____monitoring"] = 4] = "emonitortype_CCM_Comprehensive_____component_____monitoring";
        enumMonitortype[enumMonitortype["emonitortype_DPF_PM_____Filter_____Monitor"] = 5] = "emonitortype_DPF_PM_____Filter_____Monitor";
        enumMonitortype[enumMonitortype["emonitortype_ECT_Engine_____Coolant_____Temperature"] = 6] = "emonitortype_ECT_Engine_____Coolant_____Temperature";
        enumMonitortype[enumMonitortype["emonitortype_EGR_EGR_____system_____monitoring"] = 7] = "emonitortype_EGR_EGR_____system_____monitoring";
        enumMonitortype[enumMonitortype["emonitortype_EGS_Exhaust_____Gas_____Sensor_____Monitor"] = 8] = "emonitortype_EGS_Exhaust_____Gas_____Sensor_____Monitor";
        enumMonitortype[enumMonitortype["emonitortype_EVA_Evaporative_____system_____monitoring"] = 9] = "emonitortype_EVA_Evaporative_____system_____monitoring";
        enumMonitortype[enumMonitortype["emonitortype_FUE_Fuel_____system_____monitoring"] = 10] = "emonitortype_FUE_Fuel_____system_____monitoring";
        enumMonitortype[enumMonitortype["emonitortype_HCA_Heated_____catalyst_____monitoring"] = 11] = "emonitortype_HCA_Heated_____catalyst_____monitoring";
        enumMonitortype[enumMonitortype["emonitortype_HCC_NMHC_____Monitor"] = 12] = "emonitortype_HCC_NMHC_____Monitor";
        enumMonitortype[enumMonitortype["emonitortype_HTR_Oxygen_____sensor_____heater_____monitoring"] = 13] = "emonitortype_HTR_Oxygen_____sensor_____heater_____monitoring";
        enumMonitortype[enumMonitortype["emonitortype_MIS_Misfire_____monitoring"] = 14] = "emonitortype_MIS_Misfire_____monitoring";
        enumMonitortype[enumMonitortype["emonitortype_NOx_NOx_____Adsorber_____Monitor"] = 15] = "emonitortype_NOx_NOx_____Adsorber_____Monitor";
        enumMonitortype[enumMonitortype["emonitortype_O2S_Oxygen_____sensor_____monitoring"] = 16] = "emonitortype_O2S_Oxygen_____sensor_____monitoring";
      })(_enumMonitortype || (_enumMonitortype = {}));

      ;

      var _enumDlc;

      (function (enumDlc) {
        enumDlc[enumDlc["edlc_UNKNOWN"] = 0] = "edlc_UNKNOWN";
        enumDlc[enumDlc["edlc_PIN1"] = 2] = "edlc_PIN1";
        enumDlc[enumDlc["edlc_PIN1_INV"] = 3] = "edlc_PIN1_INV";
        enumDlc[enumDlc["edlc_PIN2"] = 4] = "edlc_PIN2";
        enumDlc[enumDlc["edlc_PIN2_INV"] = 5] = "edlc_PIN2_INV";
        enumDlc[enumDlc["edlc_PIN3"] = 6] = "edlc_PIN3";
        enumDlc[enumDlc["edlc_PIN3_INV"] = 7] = "edlc_PIN3_INV";
        enumDlc[enumDlc["edlc_PIN4"] = 8] = "edlc_PIN4";
        enumDlc[enumDlc["edlc_PIN4_INV"] = 9] = "edlc_PIN4_INV";
        enumDlc[enumDlc["edlc_PIN5"] = 10] = "edlc_PIN5";
        enumDlc[enumDlc["edlc_PIN5_INV"] = 11] = "edlc_PIN5_INV";
        enumDlc[enumDlc["edlc_PIN6"] = 12] = "edlc_PIN6";
        enumDlc[enumDlc["edlc_PIN6_INV"] = 13] = "edlc_PIN6_INV";
        enumDlc[enumDlc["edlc_PIN7"] = 14] = "edlc_PIN7";
        enumDlc[enumDlc["edlc_PIN7_INV"] = 15] = "edlc_PIN7_INV";
        enumDlc[enumDlc["edlc_PIN8"] = 16] = "edlc_PIN8";
        enumDlc[enumDlc["edlc_PIN8_INV"] = 17] = "edlc_PIN8_INV";
        enumDlc[enumDlc["edlc_PIN9"] = 18] = "edlc_PIN9";
        enumDlc[enumDlc["edlc_PIN9_INV"] = 19] = "edlc_PIN9_INV";
        enumDlc[enumDlc["edlc_PIN10"] = 20] = "edlc_PIN10";
        enumDlc[enumDlc["edlc_PIN10_INV"] = 21] = "edlc_PIN10_INV";
        enumDlc[enumDlc["edlc_PIN11"] = 22] = "edlc_PIN11";
        enumDlc[enumDlc["edlc_PIN11_INV"] = 23] = "edlc_PIN11_INV";
        enumDlc[enumDlc["edlc_PIN12"] = 24] = "edlc_PIN12";
        enumDlc[enumDlc["edlc_PIN12_INV"] = 25] = "edlc_PIN12_INV";
        enumDlc[enumDlc["edlc_PIN13"] = 26] = "edlc_PIN13";
        enumDlc[enumDlc["edlc_PIN13_INV"] = 27] = "edlc_PIN13_INV";
        enumDlc[enumDlc["edlc_PIN14"] = 28] = "edlc_PIN14";
        enumDlc[enumDlc["edlc_PIN14_INV"] = 29] = "edlc_PIN14_INV";
        enumDlc[enumDlc["edlc_PIN15"] = 30] = "edlc_PIN15";
        enumDlc[enumDlc["edlc_PIN15_INV"] = 31] = "edlc_PIN15_INV";
        enumDlc[enumDlc["edlc_PIN3_INV_OBD1"] = 32] = "edlc_PIN3_INV_OBD1";
        enumDlc[enumDlc["edlc_PIN7_OBD1"] = 33] = "edlc_PIN7_OBD1";
        enumDlc[enumDlc["edlc_PIN15_OBD1"] = 34] = "edlc_PIN15_OBD1";
        enumDlc[enumDlc["edlc_CCD_3_11"] = 35] = "edlc_CCD_3_11";
        enumDlc[enumDlc["edlc_PIN_NA"] = 255] = "edlc_PIN_NA";
        enumDlc[enumDlc["edlc_PIN16"] = 32] = "edlc_PIN16";
        enumDlc[enumDlc["edlc_PIN20"] = 33] = "edlc_PIN20";
        enumDlc[enumDlc["edlc_PIN22"] = 34] = "edlc_PIN22";
        enumDlc[enumDlc["edlc_PIN23"] = 35] = "edlc_PIN23";
        enumDlc[enumDlc["edlc_PIN24"] = 36] = "edlc_PIN24";
        enumDlc[enumDlc["edlc_PIN25"] = 37] = "edlc_PIN25";
        enumDlc[enumDlc["edlc_PIN28"] = 38] = "edlc_PIN28";
        enumDlc[enumDlc["edlc_PIN30"] = 39] = "edlc_PIN30";
        enumDlc[enumDlc["edlc_PIN32"] = 40] = "edlc_PIN32";
        enumDlc[enumDlc["edlc_PIN33"] = 41] = "edlc_PIN33";
        enumDlc[enumDlc["edlc_PIN34"] = 42] = "edlc_PIN34";
        enumDlc[enumDlc["edlc_PIN35"] = 43] = "edlc_PIN35";
        enumDlc[enumDlc["edlc_PIN36"] = 44] = "edlc_PIN36";
        enumDlc[enumDlc["edlc_PIN17"] = 45] = "edlc_PIN17";
        enumDlc[enumDlc["edlc_PIN15_INV_OBD1"] = 46] = "edlc_PIN15_INV_OBD1";
        enumDlc[enumDlc["edlc_PIN9_OBD1"] = 47] = "edlc_PIN9_OBD1";
        enumDlc[enumDlc["edlc_PIN2_OBD1"] = 48] = "edlc_PIN2_OBD1";
        enumDlc[enumDlc["edlc_PIN8_OBD1"] = 49] = "edlc_PIN8_OBD1";
        enumDlc[enumDlc["edlc_PIN14_OBD1"] = 50] = "edlc_PIN14_OBD1";
        enumDlc[enumDlc["edlc_PIN11_OBD1"] = 51] = "edlc_PIN11_OBD1";
        enumDlc[enumDlc["edlc_PIN6_OBD1"] = 52] = "edlc_PIN6_OBD1";
      })(_enumDlc || (_enumDlc = {}));

      ;

      var _enumDlcvoltage;

      (function (enumDlcvoltage) {
        enumDlcvoltage[enumDlcvoltage["edlcvoltage_UNKNOWN"] = 0] = "edlcvoltage_UNKNOWN";
        enumDlcvoltage[enumDlcvoltage["edlcvoltage_LEVEL_FLOAT"] = 1] = "edlcvoltage_LEVEL_FLOAT";
        enumDlcvoltage[enumDlcvoltage["edlcvoltage_LEVEL_5V"] = 2] = "edlcvoltage_LEVEL_5V";
        enumDlcvoltage[enumDlcvoltage["edlcvoltage_LEVEL_8V"] = 3] = "edlcvoltage_LEVEL_8V";
        enumDlcvoltage[enumDlcvoltage["edlcvoltage_LEVEL_12V"] = 4] = "edlcvoltage_LEVEL_12V";
        enumDlcvoltage[enumDlcvoltage["edlcvoltage_LEVEL_24V"] = 5] = "edlcvoltage_LEVEL_24V";
        enumDlcvoltage[enumDlcvoltage["edlcvoltage_LEVEL_36V"] = 6] = "edlcvoltage_LEVEL_36V";
      })(_enumDlcvoltage || (_enumDlcvoltage = {}));

      ;

      var _enumPd_Resitor;

      (function (enumPd_Resitor) {
        enumPd_Resitor[enumPd_Resitor["epd_resitor_UNKNOWN"] = 0] = "epd_resitor_UNKNOWN";
        enumPd_Resitor[enumPd_Resitor["epd_resitor_PD_NONE"] = 0] = "epd_resitor_PD_NONE";
        enumPd_Resitor[enumPd_Resitor["epd_resitor_PD_OPEN"] = 1] = "epd_resitor_PD_OPEN";
        enumPd_Resitor[enumPd_Resitor["epd_resitor_PD_2K8"] = 2] = "epd_resitor_PD_2K8";
        enumPd_Resitor[enumPd_Resitor["epd_resitor_PD_3K9"] = 3] = "epd_resitor_PD_3K9";
        enumPd_Resitor[enumPd_Resitor["epd_resitor_PD_10K"] = 4] = "epd_resitor_PD_10K";
      })(_enumPd_Resitor || (_enumPd_Resitor = {}));

      ;

      var _enumResitor;

      (function (enumResitor) {
        enumResitor[enumResitor["eresitor_UNKNOWN"] = 0] = "eresitor_UNKNOWN";
        enumResitor[enumResitor["eresitor_PU_NONE"] = 0] = "eresitor_PU_NONE";
        enumResitor[enumResitor["eresitor_PU_511"] = 1] = "eresitor_PU_511";
        enumResitor[enumResitor["eresitor_PU_2K7"] = 2] = "eresitor_PU_2K7";
        enumResitor[enumResitor["eresitor_PU_4K7"] = 4] = "eresitor_PU_4K7";
        enumResitor[enumResitor["eresitor_PU_1K"] = 8] = "eresitor_PU_1K";
        enumResitor[enumResitor["eresitor_PU_2K"] = 16] = "eresitor_PU_2K";
      })(_enumResitor || (_enumResitor = {}));

      ;

      var _enumVref;

      (function (enumVref) {
        enumVref[enumVref["evref_UNKNOWN"] = 0] = "evref_UNKNOWN";
        enumVref[enumVref["evref_VREF_NA"] = 0] = "evref_VREF_NA";
        enumVref[enumVref["evref_VREF_AUTO"] = 1] = "evref_VREF_AUTO";
        enumVref[enumVref["evref_VREF_1V5"] = 2] = "evref_VREF_1V5";
        enumVref[enumVref["evref_VREF_2V5"] = 3] = "evref_VREF_2V5";
      })(_enumVref || (_enumVref = {}));

      ;

      var _enumUartdata;

      (function (enumUartdata) {
        enumUartdata[enumUartdata["euartdata_UNKNOWN"] = 0] = "euartdata_UNKNOWN";
        enumUartdata[enumUartdata["euartdata_DATA8BIT_NO_PARITY"] = 0] = "euartdata_DATA8BIT_NO_PARITY";
        enumUartdata[enumUartdata["euartdata_DATA8BIT_EVEN_PARITY"] = 1] = "euartdata_DATA8BIT_EVEN_PARITY";
        enumUartdata[enumUartdata["euartdata_DATA8BIT_ODD_PARIRY"] = 2] = "euartdata_DATA8BIT_ODD_PARIRY";
      })(_enumUartdata || (_enumUartdata = {}));

      ;

      var _enumChecksum;

      (function (enumChecksum) {
        enumChecksum[enumChecksum["echecksum_UNKNOWN"] = 0] = "echecksum_UNKNOWN";
        enumChecksum[enumChecksum["echecksum_CS_NONE"] = 0] = "echecksum_CS_NONE";
        enumChecksum[enumChecksum["echecksum_CS_NORMAL_1BYTE"] = 1] = "echecksum_CS_NORMAL_1BYTE";
        enumChecksum[enumChecksum["echecksum_CS_INVERT_1BYTE"] = 2] = "echecksum_CS_INVERT_1BYTE";
        enumChecksum[enumChecksum["echecksum_CS_NORMAL_2BYTE"] = 3] = "echecksum_CS_NORMAL_2BYTE";
        enumChecksum[enumChecksum["echecksum_CS_CRC_1D"] = 4] = "echecksum_CS_CRC_1D";
        enumChecksum[enumChecksum["echecksum_CS_CRC_01"] = 5] = "echecksum_CS_CRC_01";
      })(_enumChecksum || (_enumChecksum = {}));

      ;

      var _enumInittype;

      (function (enumInittype) {
        enumInittype[enumInittype["einittype_UNKNOWN"] = 0] = "einittype_UNKNOWN";
        enumInittype[enumInittype["einittype_INIT_NONE"] = 0] = "einittype_INIT_NONE";
        enumInittype[enumInittype["einittype_INIT_FIVEBAUDS"] = 1] = "einittype_INIT_FIVEBAUDS";
        enumInittype[enumInittype["einittype_INIT_FASTBAUDS"] = 2] = "einittype_INIT_FASTBAUDS";
        enumInittype[enumInittype["einittype_INIT_MAX"] = 3] = "einittype_INIT_MAX";
      })(_enumInittype || (_enumInittype = {}));

      ;

      var _enumConnector;

      (function (enumConnector) {
        enumConnector[enumConnector["econnector_UNKNOWN"] = 0] = "econnector_UNKNOWN";
        enumConnector[enumConnector["econnector_NONE"] = 0] = "econnector_NONE";
        enumConnector[enumConnector["econnector_OBDII"] = 1] = "econnector_OBDII";
        enumConnector[enumConnector["econnector_GM_OBD1"] = 2] = "econnector_GM_OBD1";
        enumConnector[enumConnector["econnector_FORD_OBD1"] = 3] = "econnector_FORD_OBD1";
        enumConnector[enumConnector["econnector_CHRYSLER_OBD1"] = 4] = "econnector_CHRYSLER_OBD1";
        enumConnector[enumConnector["econnector_TOYOTA_OBD1"] = 5] = "econnector_TOYOTA_OBD1";
        enumConnector[enumConnector["econnector_HONDA_OBD1"] = 6] = "econnector_HONDA_OBD1";
        enumConnector[enumConnector["econnector_KIA_20_PINS"] = 7] = "econnector_KIA_20_PINS";
        enumConnector[enumConnector["econnector_TOYOTA_17_PINS"] = 8] = "econnector_TOYOTA_17_PINS";
        enumConnector[enumConnector["econnector_TOYOTA_22_PINS"] = 9] = "econnector_TOYOTA_22_PINS";
        enumConnector[enumConnector["econnector_BMW_20_PINS"] = 10] = "econnector_BMW_20_PINS";
        enumConnector[enumConnector["econnector_NISSAN_14_PINS"] = 11] = "econnector_NISSAN_14_PINS";
        enumConnector[enumConnector["econnector_BMW_16_PINS"] = 12] = "econnector_BMW_16_PINS";
        enumConnector[enumConnector["econnector_BENZ_38_PINS"] = 13] = "econnector_BENZ_38_PINS";
        enumConnector[enumConnector["econnector_CHRYSLER_16_PINS"] = 14] = "econnector_CHRYSLER_16_PINS";
        enumConnector[enumConnector["econnector_BENZ_14PIN_PINS"] = 15] = "econnector_BENZ_14PIN_PINS";
        enumConnector[enumConnector["econnector_MAZDA_17_PINS"] = 16] = "econnector_MAZDA_17_PINS";
        enumConnector[enumConnector["econnector_MIT_12_16_PINS"] = 17] = "econnector_MIT_12_16_PINS";
        enumConnector[enumConnector["econnector_NISSAN_14_TSURU"] = 18] = "econnector_NISSAN_14_TSURU";
        enumConnector[enumConnector["econnector_MAX"] = 65535] = "econnector_MAX";
        enumConnector[enumConnector["econnector_OEM"] = 19] = "econnector_OEM";
        enumConnector[enumConnector["econnector_Hyundai_12"] = 20] = "econnector_Hyundai_12";
        enumConnector[enumConnector["econnector_Kia_20"] = 21] = "econnector_Kia_20";
        enumConnector[enumConnector["econnector_NISSAN_14"] = 22] = "econnector_NISSAN_14";
        enumConnector[enumConnector["econnector_TOYOTA_17_22"] = 23] = "econnector_TOYOTA_17_22";
        enumConnector[enumConnector["econnector_BMW_OEM_20"] = 24] = "econnector_BMW_OEM_20";
        enumConnector[enumConnector["econnector_BENZ_14"] = 25] = "econnector_BENZ_14";
        enumConnector[enumConnector["econnector_BMW_20"] = 26] = "econnector_BMW_20";
        enumConnector[enumConnector["econnector_BENZ_38"] = 27] = "econnector_BENZ_38";
      })(_enumConnector || (_enumConnector = {}));

      ;

      var _enumDtcstatuse;

      (function (enumDtcstatuse) {
        enumDtcstatuse[enumDtcstatuse["edtcstatuse_UNKNOWN"] = 0] = "edtcstatuse_UNKNOWN";
        enumDtcstatuse[enumDtcstatuse["edtcstatuse_Type_Dtc_Status_NA"] = 0] = "edtcstatuse_Type_Dtc_Status_NA";
        enumDtcstatuse[enumDtcstatuse["edtcstatuse_Type_Dtc_Status_General"] = 1] = "edtcstatuse_Type_Dtc_Status_General";
        enumDtcstatuse[enumDtcstatuse["edtcstatuse_Type_Dtc_Status_Chrysler_CAN"] = 2] = "edtcstatuse_Type_Dtc_Status_Chrysler_CAN";
        enumDtcstatuse[enumDtcstatuse["edtcstatuse_Type_Dtc_Status_Chrysler_CAN_UDS"] = 3] = "edtcstatuse_Type_Dtc_Status_Chrysler_CAN_UDS";
        enumDtcstatuse[enumDtcstatuse["edtcstatuse_Type_Dtc_Status_GM_GMLAN_DOC"] = 4] = "edtcstatuse_Type_Dtc_Status_GM_GMLAN_DOC";
        enumDtcstatuse[enumDtcstatuse["edtcstatuse_Type_Dtc_Status_HondaBody_KW"] = 5] = "edtcstatuse_Type_Dtc_Status_HondaBody_KW";
        enumDtcstatuse[enumDtcstatuse["edtcstatuse_Type_Dtc_Status_Hyundai_1"] = 6] = "edtcstatuse_Type_Dtc_Status_Hyundai_1";
        enumDtcstatuse[enumDtcstatuse["edtcstatuse_Type_Dtc_Status_Hyundai_2"] = 7] = "edtcstatuse_Type_Dtc_Status_Hyundai_2";
        enumDtcstatuse[enumDtcstatuse["edtcstatuse_Type_Dtc_Status_VAG_0"] = 8] = "edtcstatuse_Type_Dtc_Status_VAG_0";
        enumDtcstatuse[enumDtcstatuse["edtcstatuse_Type_Dtc_Status_VAG_1"] = 9] = "edtcstatuse_Type_Dtc_Status_VAG_1";
        enumDtcstatuse[enumDtcstatuse["edtcstatuse_Type_Dtc_Status_VAG_2"] = 10] = "edtcstatuse_Type_Dtc_Status_VAG_2";
        enumDtcstatuse[enumDtcstatuse["edtcstatuse_Type_Dtc_Status_VAG_3"] = 11] = "edtcstatuse_Type_Dtc_Status_VAG_3";
        enumDtcstatuse[enumDtcstatuse["edtcstatuse_Type_Dtc_Status_VAG_4"] = 12] = "edtcstatuse_Type_Dtc_Status_VAG_4";
        enumDtcstatuse[enumDtcstatuse["edtcstatuse_Type_Dtc_Status_VAG_5"] = 13] = "edtcstatuse_Type_Dtc_Status_VAG_5";
        enumDtcstatuse[enumDtcstatuse["edtcstatuse_Type_Dtc_Status_VAG_6"] = 14] = "edtcstatuse_Type_Dtc_Status_VAG_6";
        enumDtcstatuse[enumDtcstatuse["edtcstatuse_Type_Dtc_Status_VAG_7"] = 15] = "edtcstatuse_Type_Dtc_Status_VAG_7";
        enumDtcstatuse[enumDtcstatuse["edtcstatuse_Type_Dtc_Status_Volvo_1"] = 16] = "edtcstatuse_Type_Dtc_Status_Volvo_1";
        enumDtcstatuse[enumDtcstatuse["edtcstatuse_Type_Dtc_Status_Mercedes_CANUDS"] = 17] = "edtcstatuse_Type_Dtc_Status_Mercedes_CANUDS";
        enumDtcstatuse[enumDtcstatuse["edtcstatuse_Type_Dtc_Status_Mercedes_KW2000_CAN"] = 18] = "edtcstatuse_Type_Dtc_Status_Mercedes_KW2000_CAN";
        enumDtcstatuse[enumDtcstatuse["edtcstatuse_Type_Dtc_Status_Mercedes_KWFB"] = 19] = "edtcstatuse_Type_Dtc_Status_Mercedes_KWFB";
        enumDtcstatuse[enumDtcstatuse["edtcstatuse_Type_Dtc_Status_Volvo_2"] = 20] = "edtcstatuse_Type_Dtc_Status_Volvo_2";
        enumDtcstatuse[enumDtcstatuse["edtcstatuse_Type_Dtc_Status_Nissan_Byte"] = 21] = "edtcstatuse_Type_Dtc_Status_Nissan_Byte";
        enumDtcstatuse[enumDtcstatuse["edtcstatuse_Type_Dtc_Status_Nissan_Bit"] = 22] = "edtcstatuse_Type_Dtc_Status_Nissan_Bit";
        enumDtcstatuse[enumDtcstatuse["edtcstatuse_Type_Dtc_Status_Hyundai_SRS_0207"] = 23] = "edtcstatuse_Type_Dtc_Status_Hyundai_SRS_0207";
        enumDtcstatuse[enumDtcstatuse["edtcstatuse_Type_Dtc_Status_Opel_1"] = 24] = "edtcstatuse_Type_Dtc_Status_Opel_1";
        enumDtcstatuse[enumDtcstatuse["edtcstatuse_Type_Dtc_Status_Opel_2"] = 25] = "edtcstatuse_Type_Dtc_Status_Opel_2";
        enumDtcstatuse[enumDtcstatuse["edtcstatuse_Type_Dtc_Status_Suzuki_1"] = 26] = "edtcstatuse_Type_Dtc_Status_Suzuki_1";
        enumDtcstatuse[enumDtcstatuse["edtcstatuse_Type_Dtc_Status_GM_0008"] = 27] = "edtcstatuse_Type_Dtc_Status_GM_0008";
        enumDtcstatuse[enumDtcstatuse["edtcstatuse_Type_Dtc_Status_GM_0009"] = 28] = "edtcstatuse_Type_Dtc_Status_GM_0009";
        enumDtcstatuse[enumDtcstatuse["edtcstatuse_Type_Dtc_Status_GM_00010"] = 29] = "edtcstatuse_Type_Dtc_Status_GM_00010";
        enumDtcstatuse[enumDtcstatuse["edtcstatuse_Type_Dtc_Status_Oem_1"] = 30] = "edtcstatuse_Type_Dtc_Status_Oem_1";
        enumDtcstatuse[enumDtcstatuse["edtcstatuse_Type_Dtc_Status_Oem_2"] = 31] = "edtcstatuse_Type_Dtc_Status_Oem_2";
        enumDtcstatuse[enumDtcstatuse["edtcstatuse_Type_Dtc_Status_Oem_3"] = 32] = "edtcstatuse_Type_Dtc_Status_Oem_3";
        enumDtcstatuse[enumDtcstatuse["edtcstatuse_Type_Dtc_Status_Oem_4"] = 33] = "edtcstatuse_Type_Dtc_Status_Oem_4";
        enumDtcstatuse[enumDtcstatuse["edtcstatuse_Type_Dtc_Status_Oem_5"] = 34] = "edtcstatuse_Type_Dtc_Status_Oem_5";
        enumDtcstatuse[enumDtcstatuse["edtcstatuse_Type_Dtc_Status_Oem_6"] = 35] = "edtcstatuse_Type_Dtc_Status_Oem_6";
        enumDtcstatuse[enumDtcstatuse["edtcstatuse_Type_Dtc_Status_Oem_7"] = 36] = "edtcstatuse_Type_Dtc_Status_Oem_7";
        enumDtcstatuse[enumDtcstatuse["edtcstatuse_Type_Dtc_Status_Oem_8"] = 37] = "edtcstatuse_Type_Dtc_Status_Oem_8";
        enumDtcstatuse[enumDtcstatuse["edtcstatuse_Type_Dtc_Status_Oem_9"] = 38] = "edtcstatuse_Type_Dtc_Status_Oem_9";
        enumDtcstatuse[enumDtcstatuse["edtcstatuse_Type_Dtc_Status_Oem_10"] = 39] = "edtcstatuse_Type_Dtc_Status_Oem_10";
        enumDtcstatuse[enumDtcstatuse["edtcstatuse_Type_Dtc_Status_Oem_11"] = 40] = "edtcstatuse_Type_Dtc_Status_Oem_11";
        enumDtcstatuse[enumDtcstatuse["edtcstatuse_Type_Dtc_Status_Oem_12"] = 41] = "edtcstatuse_Type_Dtc_Status_Oem_12";
        enumDtcstatuse[enumDtcstatuse["edtcstatuse_Type_Dtc_Status_Oem_13"] = 42] = "edtcstatuse_Type_Dtc_Status_Oem_13";
        enumDtcstatuse[enumDtcstatuse["edtcstatuse_Type_Dtc_Status_Oem_14"] = 43] = "edtcstatuse_Type_Dtc_Status_Oem_14";
        enumDtcstatuse[enumDtcstatuse["edtcstatuse_Type_Dtc_Status_Oem_15"] = 44] = "edtcstatuse_Type_Dtc_Status_Oem_15";
        enumDtcstatuse[enumDtcstatuse["edtcstatuse_Type_Dtc_Status_Oem_16"] = 45] = "edtcstatuse_Type_Dtc_Status_Oem_16";
        enumDtcstatuse[enumDtcstatuse["edtcstatuse_Type_Dtc_Status_Oem_17"] = 46] = "edtcstatuse_Type_Dtc_Status_Oem_17";
        enumDtcstatuse[enumDtcstatuse["edtcstatuse_Type_Dtc_Status_Oem_18"] = 47] = "edtcstatuse_Type_Dtc_Status_Oem_18";
        enumDtcstatuse[enumDtcstatuse["edtcstatuse_Type_Dtc_Status_Oem_19"] = 48] = "edtcstatuse_Type_Dtc_Status_Oem_19";
        enumDtcstatuse[enumDtcstatuse["edtcstatuse_Type_Dtc_Status_Oem_20"] = 49] = "edtcstatuse_Type_Dtc_Status_Oem_20";
        enumDtcstatuse[enumDtcstatuse["edtcstatuse_Type_Dtc_Status_Oem_21"] = 50] = "edtcstatuse_Type_Dtc_Status_Oem_21";
        enumDtcstatuse[enumDtcstatuse["edtcstatuse_Type_Dtc_Status_Oem_22"] = 51] = "edtcstatuse_Type_Dtc_Status_Oem_22";
        enumDtcstatuse[enumDtcstatuse["edtcstatuse_Type_Dtc_Status_Oem_23"] = 52] = "edtcstatuse_Type_Dtc_Status_Oem_23";
        enumDtcstatuse[enumDtcstatuse["edtcstatuse_Type_Dtc_Status_Oem_24"] = 53] = "edtcstatuse_Type_Dtc_Status_Oem_24";
        enumDtcstatuse[enumDtcstatuse["edtcstatuse_Type_Dtc_Status_Oem_25"] = 54] = "edtcstatuse_Type_Dtc_Status_Oem_25";
      })(_enumDtcstatuse || (_enumDtcstatuse = {}));

      ;

      var _enumBuffername;

      (function (enumBuffername) {
        enumBuffername[enumBuffername["ebuffername_UNKNOWN"] = 0] = "ebuffername_UNKNOWN";
        enumBuffername[enumBuffername["ebuffername_NONE"] = 0] = "ebuffername_NONE";
        enumBuffername[enumBuffername["ebuffername_HISTORY"] = 1] = "ebuffername_HISTORY";
        enumBuffername[enumBuffername["ebuffername_HISTORICAL"] = 2] = "ebuffername_HISTORICAL";
        enumBuffername[enumBuffername["ebuffername_CURRENT"] = 3] = "ebuffername_CURRENT";
        enumBuffername[enumBuffername["ebuffername_STORED"] = 4] = "ebuffername_STORED";
        enumBuffername[enumBuffername["ebuffername_PENDING"] = 5] = "ebuffername_PENDING";
        enumBuffername[enumBuffername["ebuffername_MIL"] = 6] = "ebuffername_MIL";
        enumBuffername[enumBuffername["ebuffername_READINESS"] = 7] = "ebuffername_READINESS";
        enumBuffername[enumBuffername["ebuffername_PERMANENT"] = 8] = "ebuffername_PERMANENT";
        enumBuffername[enumBuffername["ebuffername_TEMPORARY"] = 9] = "ebuffername_TEMPORARY";
        enumBuffername[enumBuffername["ebuffername_FAIL_SINCE_CLEAR"] = 10] = "ebuffername_FAIL_SINCE_CLEAR";
        enumBuffername[enumBuffername["ebuffername_KOEO"] = 11] = "ebuffername_KOEO";
        enumBuffername[enumBuffername["ebuffername_KOER"] = 12] = "ebuffername_KOER";
        enumBuffername[enumBuffername["ebuffername_CONTINUOUS"] = 13] = "ebuffername_CONTINUOUS";
        enumBuffername[enumBuffername["ebuffername_PAST"] = 14] = "ebuffername_PAST";
        enumBuffername[enumBuffername["ebuffername_PRESENT"] = 15] = "ebuffername_PRESENT";
        enumBuffername[enumBuffername["ebuffername_CONFIRMED"] = 16] = "ebuffername_CONFIRMED";
        enumBuffername[enumBuffername["ebuffername_CM"] = 17] = "ebuffername_CM";
        enumBuffername[enumBuffername["ebuffername_DCHECK"] = 18] = "ebuffername_DCHECK";
        enumBuffername[enumBuffername["ebuffername_NOTPRESENT"] = 19] = "ebuffername_NOTPRESENT";
        enumBuffername[enumBuffername["ebuffername_ACTIVE"] = 20] = "ebuffername_ACTIVE";
        enumBuffername[enumBuffername["ebuffername_MEMORY"] = 21] = "ebuffername_MEMORY";
        enumBuffername[enumBuffername["ebuffername_INTERMITTENT"] = 22] = "ebuffername_INTERMITTENT";
        enumBuffername[enumBuffername["ebuffername_INVALID"] = 23] = "ebuffername_INVALID";
        enumBuffername[enumBuffername["ebuffername_STATIC"] = 24] = "ebuffername_STATIC";
        enumBuffername[enumBuffername["ebuffername_ON_DEMAND"] = 25] = "ebuffername_ON_DEMAND";
        enumBuffername[enumBuffername["ebuffername_CURRENT_DTC_SINCE_POWER_UP"] = 26] = "ebuffername_CURRENT_DTC_SINCE_POWER_UP";
        enumBuffername[enumBuffername["ebuffername_DTC_SUPPORTED_BY_CALIBRATION"] = 27] = "ebuffername_DTC_SUPPORTED_BY_CALIBRATION";
        enumBuffername[enumBuffername["ebuffername_TEST_NOT_PASSED_SINCE_CURRENT_POWER_UP"] = 28] = "ebuffername_TEST_NOT_PASSED_SINCE_CURRENT_POWER_UP";
        enumBuffername[enumBuffername["ebuffername_TEST_NOT_PASSED_SINCE_DTC_CLEARED"] = 29] = "ebuffername_TEST_NOT_PASSED_SINCE_DTC_CLEARED";
        enumBuffername[enumBuffername["ebuffername_KOEO_INJECTOR"] = 30] = "ebuffername_KOEO_INJECTOR";
        enumBuffername[enumBuffername["ebuffername_KOER_GLOWPLUG"] = 31] = "ebuffername_KOER_GLOWPLUG";
        enumBuffername[enumBuffername["ebuffername_MAX"] = 255] = "ebuffername_MAX";
        enumBuffername[enumBuffername["ebuffername_LATCHED"] = 32] = "ebuffername_LATCHED";
        enumBuffername[enumBuffername["ebuffername_NOT_____ACTIVE"] = 33] = "ebuffername_NOT_____ACTIVE";
        enumBuffername[enumBuffername["ebuffername_BUFF_RESEVER_34"] = 34] = "ebuffername_BUFF_RESEVER_34";
        enumBuffername[enumBuffername["ebuffername_BUFF_RESEVER_35"] = 35] = "ebuffername_BUFF_RESEVER_35";
        enumBuffername[enumBuffername["ebuffername_BUFF_RESEVER_36"] = 36] = "ebuffername_BUFF_RESEVER_36";
        enumBuffername[enumBuffername["ebuffername_Last_____Test_____Failed"] = 37] = "ebuffername_Last_____Test_____Failed";
        enumBuffername[enumBuffername["ebuffername_Current_History"] = 38] = "ebuffername_Current_History";
        enumBuffername[enumBuffername["ebuffername_Record"] = 39] = "ebuffername_Record";
        enumBuffername[enumBuffername["ebuffername_Storage"] = 40] = "ebuffername_Storage";
        enumBuffername[enumBuffername["ebuffername_Chassis"] = 41] = "ebuffername_Chassis";
        enumBuffername[enumBuffername["ebuffername_Region"] = 42] = "ebuffername_Region";
        enumBuffername[enumBuffername["ebuffername_Failed"] = 43] = "ebuffername_Failed";
        enumBuffername[enumBuffername["ebuffername_Failed_____Operation_____Cycle"] = 44] = "ebuffername_Failed_____Operation_____Cycle";
        enumBuffername[enumBuffername["ebuffername_Not_____Completed_____SC"] = 45] = "ebuffername_Not_____Completed_____SC";
        enumBuffername[enumBuffername["ebuffername_Not_____Completed_____Operation_____Cycle"] = 46] = "ebuffername_Not_____Completed_____Operation_____Cycle";
        enumBuffername[enumBuffername["ebuffername_Warning_____Indicator"] = 47] = "ebuffername_Warning_____Indicator";
        enumBuffername[enumBuffername["ebuffername_Provisional"] = 48] = "ebuffername_Provisional";
        enumBuffername[enumBuffername["ebuffername_NOT_____CONFIRMED"] = 49] = "ebuffername_NOT_____CONFIRMED";
      })(_enumBuffername || (_enumBuffername = {}));

      ;

      var _enumDtcdisplaytype;

      (function (enumDtcdisplaytype) {
        enumDtcdisplaytype[enumDtcdisplaytype["edtcdisplaytype_UNKNOWN"] = 0] = "edtcdisplaytype_UNKNOWN";
        enumDtcdisplaytype[enumDtcdisplaytype["edtcdisplaytype_DTC_1BYTE_HB_LB"] = 1] = "edtcdisplaytype_DTC_1BYTE_HB_LB";
        enumDtcdisplaytype[enumDtcdisplaytype["edtcdisplaytype_DTC_DEC"] = 2] = "edtcdisplaytype_DTC_DEC";
        enumDtcdisplaytype[enumDtcdisplaytype["edtcdisplaytype_DTC_DEC_2DIGIT"] = 3] = "edtcdisplaytype_DTC_DEC_2DIGIT";
        enumDtcdisplaytype[enumDtcdisplaytype["edtcdisplaytype_DTC_DEC_3DIGIT"] = 4] = "edtcdisplaytype_DTC_DEC_3DIGIT";
        enumDtcdisplaytype[enumDtcdisplaytype["edtcdisplaytype_DTC_DEC_4DIGIT"] = 5] = "edtcdisplaytype_DTC_DEC_4DIGIT";
        enumDtcdisplaytype[enumDtcdisplaytype["edtcdisplaytype_DTC_DEC_5DIGIT"] = 6] = "edtcdisplaytype_DTC_DEC_5DIGIT";
        enumDtcdisplaytype[enumDtcdisplaytype["edtcdisplaytype_DTC_HEX"] = 7] = "edtcdisplaytype_DTC_HEX";
        enumDtcdisplaytype[enumDtcdisplaytype["edtcdisplaytype_DTC_HEX_2DIGIT"] = 8] = "edtcdisplaytype_DTC_HEX_2DIGIT";
        enumDtcdisplaytype[enumDtcdisplaytype["edtcdisplaytype_DTC_HEX_3DIGIT"] = 9] = "edtcdisplaytype_DTC_HEX_3DIGIT";
        enumDtcdisplaytype[enumDtcdisplaytype["edtcdisplaytype_DTC_HEX_4DIGIT"] = 10] = "edtcdisplaytype_DTC_HEX_4DIGIT";
        enumDtcdisplaytype[enumDtcdisplaytype["edtcdisplaytype_DTC_HEX_5DIGIT"] = 11] = "edtcdisplaytype_DTC_HEX_5DIGIT";
        enumDtcdisplaytype[enumDtcdisplaytype["edtcdisplaytype_DTC_HEX_6DIGIT"] = 12] = "edtcdisplaytype_DTC_HEX_6DIGIT";
        enumDtcdisplaytype[enumDtcdisplaytype["edtcdisplaytype_DTC_MAIN_DEC_SUB_1BYTE_DEC"] = 13] = "edtcdisplaytype_DTC_MAIN_DEC_SUB_1BYTE_DEC";
        enumDtcdisplaytype[enumDtcdisplaytype["edtcdisplaytype_DTC_MAIN_DEC_SUB_1BYTE_DEC_2"] = 14] = "edtcdisplaytype_DTC_MAIN_DEC_SUB_1BYTE_DEC_2";
        enumDtcdisplaytype[enumDtcdisplaytype["edtcdisplaytype_DTC_MAIN_DEC_SUB_1BYTE_DEC_3"] = 15] = "edtcdisplaytype_DTC_MAIN_DEC_SUB_1BYTE_DEC_3";
        enumDtcdisplaytype[enumDtcdisplaytype["edtcdisplaytype_DTC_MAIN_DEC_SUB_1BYTE_HEX"] = 16] = "edtcdisplaytype_DTC_MAIN_DEC_SUB_1BYTE_HEX";
        enumDtcdisplaytype[enumDtcdisplaytype["edtcdisplaytype_DTC_MAIN_DEC_SUB_1BYTE_HEX_NO_TRIM"] = 17] = "edtcdisplaytype_DTC_MAIN_DEC_SUB_1BYTE_HEX_NO_TRIM";
        enumDtcdisplaytype[enumDtcdisplaytype["edtcdisplaytype_DTC_MAIN_HEX_SUB_1BYTE_DEC"] = 18] = "edtcdisplaytype_DTC_MAIN_HEX_SUB_1BYTE_DEC";
        enumDtcdisplaytype[enumDtcdisplaytype["edtcdisplaytype_DTC_MAIN_HEX_SUB_1BYTE_DEC_2"] = 19] = "edtcdisplaytype_DTC_MAIN_HEX_SUB_1BYTE_DEC_2";
        enumDtcdisplaytype[enumDtcdisplaytype["edtcdisplaytype_DTC_MAIN_HEX_SUB_1BYTE_DEC_3"] = 20] = "edtcdisplaytype_DTC_MAIN_HEX_SUB_1BYTE_DEC_3";
        enumDtcdisplaytype[enumDtcdisplaytype["edtcdisplaytype_DTC_MAIN_HEX_SUB_1BYTE_HEX"] = 21] = "edtcdisplaytype_DTC_MAIN_HEX_SUB_1BYTE_HEX";
        enumDtcdisplaytype[enumDtcdisplaytype["edtcdisplaytype_DTC_MAIN_HEX_SUB_1BYTE_HEX_NO_TRIM"] = 22] = "edtcdisplaytype_DTC_MAIN_HEX_SUB_1BYTE_HEX_NO_TRIM";
        enumDtcdisplaytype[enumDtcdisplaytype["edtcdisplaytype_DTC_MAIN_SAE_SUB_1BYTE_DEC"] = 23] = "edtcdisplaytype_DTC_MAIN_SAE_SUB_1BYTE_DEC";
        enumDtcdisplaytype[enumDtcdisplaytype["edtcdisplaytype_DTC_MAIN_SAE_SUB_1BYTE_DEC_NO_TRIM"] = 24] = "edtcdisplaytype_DTC_MAIN_SAE_SUB_1BYTE_DEC_NO_TRIM";
        enumDtcdisplaytype[enumDtcdisplaytype["edtcdisplaytype_DTC_MAIN_SAE_SUB_1BYTE_HEX"] = 25] = "edtcdisplaytype_DTC_MAIN_SAE_SUB_1BYTE_HEX";
        enumDtcdisplaytype[enumDtcdisplaytype["edtcdisplaytype_DTC_MAIN_SAE_SUB_1BYTE_HEX_NO_TRIM"] = 26] = "edtcdisplaytype_DTC_MAIN_SAE_SUB_1BYTE_HEX_NO_TRIM";
        enumDtcdisplaytype[enumDtcdisplaytype["edtcdisplaytype_DTC_OEM_SPECIAL"] = 27] = "edtcdisplaytype_DTC_OEM_SPECIAL";
        enumDtcdisplaytype[enumDtcdisplaytype["edtcdisplaytype_DTC_SAE"] = 28] = "edtcdisplaytype_DTC_SAE";
        enumDtcdisplaytype[enumDtcdisplaytype["edtcdisplaytype_DTC_HONDA_HEX_1BYTE"] = 29] = "edtcdisplaytype_DTC_HONDA_HEX_1BYTE";
        enumDtcdisplaytype[enumDtcdisplaytype["edtcdisplaytype_DTC_MAIN_DEC_5DIGIT_SUB_DEC_3"] = 30] = "edtcdisplaytype_DTC_MAIN_DEC_5DIGIT_SUB_DEC_3";
        enumDtcdisplaytype[enumDtcdisplaytype["edtcdisplaytype_DTC_HONDA_MAIN_SUB_HEX"] = 31] = "edtcdisplaytype_DTC_HONDA_MAIN_SUB_HEX";
        enumDtcdisplaytype[enumDtcdisplaytype["edtcdisplaytype_DTC_MAIN_HEX_SUB_1BYTE_DEC_NO_TRIM"] = 32] = "edtcdisplaytype_DTC_MAIN_HEX_SUB_1BYTE_DEC_NO_TRIM";
        enumDtcdisplaytype[enumDtcdisplaytype["edtcdisplaytype_DTC_ASCII"] = 33] = "edtcdisplaytype_DTC_ASCII";
        enumDtcdisplaytype[enumDtcdisplaytype["edtcdisplaytype_DTC_TRUCK_J1708"] = 34] = "edtcdisplaytype_DTC_TRUCK_J1708";
        enumDtcdisplaytype[enumDtcdisplaytype["edtcdisplaytype_DTC_TRUCK_J1939"] = 35] = "edtcdisplaytype_DTC_TRUCK_J1939";
        enumDtcdisplaytype[enumDtcdisplaytype["edtcdisplaytype_DTC_MAIN_DEC_5DIGIT_SAE_AUTO_SUB_DEC_3"] = 36] = "edtcdisplaytype_DTC_MAIN_DEC_5DIGIT_SAE_AUTO_SUB_DEC_3";
        enumDtcdisplaytype[enumDtcdisplaytype["edtcdisplaytype_MitsubishiDTC"] = 37] = "edtcdisplaytype_MitsubishiDTC";
      })(_enumDtcdisplaytype || (_enumDtcdisplaytype = {}));

      ;

      var _enumInnovagroup;

      (function (enumInnovagroup) {
        enumInnovagroup[enumInnovagroup["einnovagroup_UNKNOWN"] = 0] = "einnovagroup_UNKNOWN";
        enumInnovagroup[enumInnovagroup["einnovagroup_GROUP_OBDII"] = 1] = "einnovagroup_GROUP_OBDII";
        enumInnovagroup[enumInnovagroup["einnovagroup_GROUP_ABS"] = 2] = "einnovagroup_GROUP_ABS";
        enumInnovagroup[enumInnovagroup["einnovagroup_GROUP_SRS"] = 4] = "einnovagroup_GROUP_SRS";
        enumInnovagroup[enumInnovagroup["einnovagroup_GROUP_ENH_TCM"] = 8] = "einnovagroup_GROUP_ENH_TCM";
        enumInnovagroup[enumInnovagroup["einnovagroup_GROUP_ENH_ECM"] = 16] = "einnovagroup_GROUP_ENH_ECM";
        enumInnovagroup[enumInnovagroup["einnovagroup_GROUP_ENH_PCM"] = 16] = "einnovagroup_GROUP_ENH_PCM";
        enumInnovagroup[enumInnovagroup["einnovagroup_GROUP_OBDI"] = 32] = "einnovagroup_GROUP_OBDI";
        enumInnovagroup[enumInnovagroup["einnovagroup_INNOVA_GROUP_UNKNOW"] = 255] = "einnovagroup_INNOVA_GROUP_UNKNOW";
      })(_enumInnovagroup || (_enumInnovagroup = {}));

      ;
      /***/
    },

    /***/
    88737:
    /*!******************************************!*\
      !*** ./src/app/services/logger/index.ts ***!
      \******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppLogger": function AppLogger() {
          return (
            /* binding */
            _AppLogger
          );
        },

        /* harmony export */
        "AppLoggerService": function AppLoggerService() {
          return (
            /* binding */
            _AppLoggerService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./logger */
      3837);
      /* harmony import */


      var _logger_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./logger.service */
      48616);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var ionic_logging_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ionic-logging-service */
      18799);

      var _AppLogger = /*#__PURE__*/function (_logger__WEBPACK_IMPO) {
        function _AppLogger() {
          _classCallCheck(this, _AppLogger);

          return _callSuper(this, _AppLogger, arguments);
        }

        _inherits(_AppLogger, _logger__WEBPACK_IMPO);

        return _createClass(_AppLogger);
      }(_logger__WEBPACK_IMPORTED_MODULE_0__.Logger);

      var _AppLoggerService = /*#__PURE__*/function (_logger_service__WEBP) {
        function _AppLoggerService(loggingService) {
          var _this24;

          _classCallCheck(this, _AppLoggerService);

          _this24 = _callSuper(this, _AppLoggerService, [loggingService]);
          _this24.loggingService = loggingService;
          return _this24;
        }

        _inherits(_AppLoggerService, _logger_service__WEBP);

        return _createClass(_AppLoggerService);
      }(_logger_service__WEBPACK_IMPORTED_MODULE_1__.LoggerService);

      _AppLoggerService.ɵfac = function AppLoggerService_Factory(t) {
        return new (t || _AppLoggerService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](ionic_logging_service__WEBPACK_IMPORTED_MODULE_3__.LoggingService));
      };

      _AppLoggerService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: _AppLoggerService,
        factory: _AppLoggerService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    48616:
    /*!***************************************************!*\
      !*** ./src/app/services/logger/logger.service.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LoggerService": function LoggerService() {
          return (
            /* binding */
            _LoggerService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var ionic_logging_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ionic-logging-service */
      18799);
      /* harmony import */


      var src_app_configs_logger_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/configs/logger.config */
      40029);
      /* harmony import */


      var _logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./logger */
      3837);

      var _LoggerService = /*#__PURE__*/function () {
        function _LoggerService(loggingService) {
          var _this25 = this;

          _classCallCheck(this, _LoggerService);

          this.loggingService = loggingService;

          this.getLogMessages = function () {
            return _this25.loggingService.getLogMessages();
          };

          this.removeLogMessages = function () {
            return _this25.loggingService.removeLogMessages();
          };

          this.getStoredLogMessage = function () {
            var _a, _b;

            var appenderList = (_b = (_a = new ionic_logging_service__WEBPACK_IMPORTED_MODULE_2__.Logger()) === null || _a === void 0 ? void 0 : _a.getInternalLogger()) === null || _b === void 0 ? void 0 : _b.getEffectiveAppenders();
            var localStorageAppender = appenderList.find(function (a) {
              return a.toString() === 'Ionic.Logging.LocalStorageAppender';
            });
            return localStorageAppender === null || localStorageAppender === void 0 ? void 0 : localStorageAppender.getLogMessages();
          };

          this.loggingService.configure(src_app_configs_logger_config__WEBPACK_IMPORTED_MODULE_0__.LoggerConfig.configuration);
          this.logger = this.loggingService.getLogger(src_app_configs_logger_config__WEBPACK_IMPORTED_MODULE_0__.LoggerConfig.bundleId);
          this.loggerList = new Map();
        }

        return _createClass(_LoggerService, [{
          key: "getLogger",
          value: function getLogger() {
            var tagName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : src_app_configs_logger_config__WEBPACK_IMPORTED_MODULE_0__.LoggerConfig.defaultTagName;
            var logger = this.loggerList[tagName];

            if (logger == null) {
              logger = new _logger__WEBPACK_IMPORTED_MODULE_1__.Logger(this.logger, tagName);
              this.loggerList[tagName] = logger;
            }

            if (!logger) {
              return {};
            }

            return logger;
          }
        }], [{
          key: "offService",
          value: function offService() {
            this.isTurnedOn = false;
          }
        }, {
          key: "onService",
          value: function onService() {
            this.isTurnedOn = true;
          }
        }, {
          key: "isON",
          get: function get() {
            return this.isTurnedOn === true;
          }
        }, {
          key: "isOFF",
          get: function get() {
            return this.isTurnedOn === false;
          }
        }]);
      }();

      _LoggerService.isTurnedOn = true;
      /***/
    },

    /***/
    3837:
    /*!*******************************************!*\
      !*** ./src/app/services/logger/logger.ts ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Logger": function Logger() {
          return (
            /* binding */
            _Logger
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      42321);
      /* harmony import */


      var _logger_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./logger.service */
      48616);

      var _Logger_instances, _Logger_msgStringify;

      var _Logger = /*#__PURE__*/_createClass(function _Logger(logger, tagName) {
        var _this26 = this;

        _classCallCheck(this, _Logger);

        _Logger_instances.add(this);

        this.info = function () {
          if (_logger_service__WEBPACK_IMPORTED_MODULE_0__.LoggerService.isOFF) {
            return;
          }

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          var msg = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__classPrivateFieldGet)(_this26, _Logger_instances, "m", _Logger_msgStringify).call(_this26, args);

          _this26.logger.info(_this26.tagName, msg);
        };

        this.warn = function () {
          if (_logger_service__WEBPACK_IMPORTED_MODULE_0__.LoggerService.isOFF) {
            return;
          }

          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }

          var msg = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__classPrivateFieldGet)(_this26, _Logger_instances, "m", _Logger_msgStringify).call(_this26, args);

          _this26.logger.warn(_this26.tagName, msg);
        };

        this.debug = function () {
          if (_logger_service__WEBPACK_IMPORTED_MODULE_0__.LoggerService.isOFF) {
            return;
          }

          for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            args[_key3] = arguments[_key3];
          }

          var msg = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__classPrivateFieldGet)(_this26, _Logger_instances, "m", _Logger_msgStringify).call(_this26, args);

          _this26.logger.debug(_this26.tagName, msg);
        };

        this.error = function () {
          if (_logger_service__WEBPACK_IMPORTED_MODULE_0__.LoggerService.isOFF) {
            return;
          }

          for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
            args[_key4] = arguments[_key4];
          }

          var msg = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__classPrivateFieldGet)(_this26, _Logger_instances, "m", _Logger_msgStringify).call(_this26, args);

          _this26.logger.error(_this26.tagName, msg);
        };

        this.entry = function () {
          if (_logger_service__WEBPACK_IMPORTED_MODULE_0__.LoggerService.isOFF) {
            return;
          }

          for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
            args[_key5] = arguments[_key5];
          }

          var msg = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__classPrivateFieldGet)(_this26, _Logger_instances, "m", _Logger_msgStringify).call(_this26, args);

          _this26.logger.entry(_this26.tagName, msg);
        };

        this.exit = function () {
          if (_logger_service__WEBPACK_IMPORTED_MODULE_0__.LoggerService.isOFF) {
            return;
          }

          for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
            args[_key6] = arguments[_key6];
          }

          var msg = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__classPrivateFieldGet)(_this26, _Logger_instances, "m", _Logger_msgStringify).call(_this26, args);

          _this26.logger.exit(_this26.tagName, msg);
        };

        this.logger = logger;
        this.tagName = ['[', tagName, ']'].join('');
      });

      _Logger_instances = new WeakSet(), _Logger_msgStringify = function _Logger_msgStringify(args) {
        var isObject = function isObject(val) {
          if (val === null) {
            return false;
          }

          return typeof val === 'function' || typeof val === 'object';
        };

        if (args && Array.isArray(args)) {
          return args.map(function (item) {
            if (item) {
              if (item instanceof Error) {
                var obj = Object.assign({}, item);
                delete obj.stack;
                obj.message = item.message;
                obj.name = item.name;
                return JSON.stringify(obj); //return JSON.stringify(obj, Object.getOwnPropertyNames(obj));
              }

              if (isObject(item)) {
                if (item.buffer) {
                  var _obj = Object.assign({}, item);

                  delete _obj.buffer;
                  return JSON.stringify(_obj);
                } else {
                  return JSON.stringify(item);
                }
              }
            }

            return item;
          }).join(' ');
        }

        return args;
      };
      /***/
    },

    /***/
    89565:
    /*!************************************************!*\
      !*** ./src/app/services/navigation.service.ts ***!
      \************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NavigationService": function NavigationService() {
          return (
            /* binding */
            _NavigationService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../app-routing.module */
      90158);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      81864);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      71258);

      var _NavigationService = /*#__PURE__*/function () {
        function _NavigationService(navCtrl, plt, router, activatedRoute) {
          _classCallCheck(this, _NavigationService);

          this.navCtrl = navCtrl;
          this.plt = plt;
          this.router = router;
          this.activatedRoute = activatedRoute;
          this.backBtnSubs = [];
        }

        return _createClass(_NavigationService, [{
          key: "snapshot",
          get: function get() {
            return this.activatedRoute.snapshot;
          }
        }, {
          key: "getQueryParam",
          value: function getQueryParam(key) {
            var _a;

            return (_a = this.snapshot) === null || _a === void 0 ? void 0 : _a.queryParams[key];
          }
        }, {
          key: "urlIncludes",
          value: function urlIncludes(text) {
            return this.router.url.includes(text);
          }
        }, {
          key: "isCurrentUrl",
          value: function isCurrentUrl(text) {
            return this.router.url === text || this.router.url === '/' + text;
          }
        }, {
          key: "popToRoot",
          value: function popToRoot() {
            var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/';
            var opts = arguments.length > 1 ? arguments[1] : undefined;
            return this.navCtrl.navigateRoot(path, opts);
          }
        }, {
          key: "goTo",
          value: function goTo(path, opts) {
            return this.navCtrl.navigateForward(path, opts);
          }
        }, {
          key: "goBack",
          value: function goBack(path, opts) {
            return path ? this.navCtrl.navigateBack(path, opts) : this.navCtrl.back();
          }
        }, {
          key: "overrideHardwareBack",
          value: function overrideHardwareBack(callableFunction, description) {
            var desc = description ? description : "".concat(callableFunction);
            var priority = 99999999 + this.backBtnSubs.length;
            var subs = this.plt.backButton.subscribeWithPriority(priority, function () {
              // callableFunction.bind(context);
              callableFunction();
            });
            subs.add(function () {
              console.log("Remove back action ".concat(desc));
            });
            console.log("Override back action with \"".concat(desc, "\""));
            this.backBtnSubs.push(subs);
          }
        }, {
          key: "restoreHardwareBack",
          value: function restoreHardwareBack() {
            if (this.backBtnSubs.length) {
              var subs = this.backBtnSubs.shift();
              subs.unsubscribe();
            }
          }
        }, {
          key: "popToHomes",
          value: function popToHomes(latestVin) {
            return this.popToRoot(_app_routing_module__WEBPACK_IMPORTED_MODULE_0__.RoutePath.Home); //Sprint 4
            // if (latestVin) {
            //   return this.popToRoot(Routing.RSLite.Home.fullPath);
            // } else {
            //   return this.popToRoot(Routing.Welcome.path);
            // }
          }
        }]);
      }();

      _NavigationService.ɵfac = function NavigationService_Factory(t) {
        return new (t || _NavigationService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute));
      };

      _NavigationService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _NavigationService,
        factory: _NavigationService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    45322:
    /*!***********************************************************!*\
      !*** ./src/app/services/report-service/report-service.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ReportServiceProvider": function ReportServiceProvider() {
          return (
            /* binding */
            _ReportServiceProvider
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      42321);
      /* harmony import */


      var src_app_models_app_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/models/app.model */
      20998);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      53803);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs/operators */
      33927);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs/operators */
      18293);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! rxjs */
      81134);
      /* harmony import */


      var src_app_models_report_session__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/models/report-session */
      34045);
      /* harmony import */


      var src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/configs/app.config */
      66626);
      /* harmony import */


      var src_app_models_app_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/models/app.constant */
      99888);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _api_rest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../api-rest.service */
      96363);
      /* harmony import */


      var _logger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../logger */
      88737);

      var _ReportServiceProvider_logger;

      var API_REPORT = '/shops/reports';
      var API_REPORT_HISTORY = '/shops/reports?pageSize=10000';
      var API_ERASE_MODULE_DTCS = '/shops/reports/eraseModuleDtcs';
      /*
        Generated class for the VehicleServiceProvider provider.
      
        See https://angular.io/docs/ts/latest/guide/dependency-injection.html
        for more info on providers and Angular DI.
      */

      var _ReportServiceProvider = /*#__PURE__*/function () {
        function _ReportServiceProvider(apiRestService, loggerService) {
          var _this27 = this;

          _classCallCheck(this, _ReportServiceProvider);

          this.apiRestService = apiRestService;
          this.loggerService = loggerService;

          _ReportServiceProvider_logger.set(this, void 0);

          this.getReport = function (reportId) {
            return new Promise(function (resolve, reject) {
              return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(_this27, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee36() {
                var reportData, report;
                return _regeneratorRuntime().wrap(function _callee36$(_context36) {
                  while (1) switch (_context36.prev = _context36.next) {
                    case 0:
                      reportData = localStorage.getItem(src_app_models_app_constant__WEBPACK_IMPORTED_MODULE_3__.StorageKeys.REPORT_DETAILS + reportId);

                      if (!reportData) {
                        _context36.next = 6;
                        break;
                      }

                      (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__classPrivateFieldGet)(this, _ReportServiceProvider_logger, "f").debug('local report');
                      resolve(JSON.parse(reportData));
                      _context36.next = 11;
                      break;

                    case 6:
                      (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__classPrivateFieldGet)(this, _ReportServiceProvider_logger, "f").debug('online report');
                      _context36.next = 9;
                      return this.getReportDetails(reportId);

                    case 9:
                      report = _context36.sent;

                      if (report && report.success && report.data) {
                        this.saveReport(report.data);
                        resolve(report.data);
                      } else {
                        resolve(null);
                      }

                    case 11:
                    case "end":
                      return _context36.stop();
                  }
                }, _callee36, this);
              }));
            });
          };

          (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__classPrivateFieldSet)(this, _ReportServiceProvider_logger, loggerService.getLogger('ReportServiceProvider'), "f");
        }

        return _createClass(_ReportServiceProvider, [{
          key: "saveReport",
          value: function saveReport(reportData) {
            if (reportData && reportData.modulesWithDTC && reportData.modulesWithDTC.length > 0) {
              var index = 0;
              reportData.modulesWithDTC.forEach(function (item) {
                item.index = index++;
              });
            }

            localStorage.setItem(src_app_models_app_constant__WEBPACK_IMPORTED_MODULE_3__.StorageKeys.REPORT_DETAILS + reportData.id, JSON.stringify(reportData));
          }
        }, {
          key: "deleteReport",
          value: function deleteReport(reportId) {
            localStorage.removeItem(src_app_models_app_constant__WEBPACK_IMPORTED_MODULE_3__.StorageKeys.REPORT_DETAILS + reportId);
          }
        }, {
          key: "eraseModuleDtcs",
          value: function eraseModuleDtcs(reportId, moduleId) {
            var eraseAll = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee37() {
              var data;
              return _regeneratorRuntime().wrap(function _callee37$(_context37) {
                while (1) switch (_context37.prev = _context37.next) {
                  case 0:
                    data = {
                      ReportId: reportId,
                      ModuleId: moduleId,
                      ClearAll: eraseAll
                    };
                    return _context37.abrupt("return", this.apiRestService.post(API_ERASE_MODULE_DTCS, data).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.timeout)(src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_2__.AppConfig.shortHttpRequestTimeoutInMs), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(function (res) {
                      return new src_app_models_app_model__WEBPACK_IMPORTED_MODULE_0__.ApiBooleanResponse(res);
                    }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.catchError)(function (error) {
                      return (0, rxjs__WEBPACK_IMPORTED_MODULE_10__.of)(new src_app_models_app_model__WEBPACK_IMPORTED_MODULE_0__.ApiBooleanResponse(error));
                    })).toPromise());

                  case 2:
                  case "end":
                    return _context37.stop();
                }
              }, _callee37, this);
            }));
          }
        }, {
          key: "createReport",
          value: function createReport(workOrderNumber, vciResponseData, status) {
            var _a;

            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee38() {
              var _this28 = this;

              var req;
              return _regeneratorRuntime().wrap(function _callee38$(_context38) {
                while (1) switch (_context38.prev = _context38.next) {
                  case 0:
                    // let req = new ApiCreateReportRequest();
                    req = {
                      workOrderNumber: workOrderNumber,
                      status: status,
                      vin: vciResponseData.vin,
                      mileage: vciResponseData.mileage,
                      dongleId: vciResponseData.dongleId,
                      usbProductId: vciResponseData.usbProductId || 720,
                      vinProfileRaw: vciResponseData.vinProfile,
                      monitorStatusEcmRaw: vciResponseData.monitorEcm,
                      monitorStatusTcmRaw: vciResponseData.monitorTcm,
                      dtcsEcmRaw: vciResponseData.dtcEcm,
                      dtcsTcmRaw: vciResponseData.dtcTcm,
                      freezeFrameEcmRaw: vciResponseData.freezeFrameEcm,
                      freezeFrameTcmRaw: vciResponseData.freezeFrameTcm,
                      vehicleInfoEcmRaw: vciResponseData.vehicleInfoEcm,
                      vehicleInfoTcmRaw: vciResponseData.vehicleInfoTcm,
                      rawDataVersion: 5,
                      batteryLife: (_a = vciResponseData.batteryVoltage) !== null && _a !== void 0 ? _a : '0',
                      // BatteryLife: vciResponseData..value,
                      brakePadLife: vciResponseData.brakePadLife,
                      oilLevel: vciResponseData.oilLevel,
                      oilLife: vciResponseData.oilLife,
                      coolantLevel: vciResponseData.coolantLevel,
                      tirePressures: vciResponseData.tirePressures,
                      // scanningType: this.scanningType,
                      // DriveCycles: this.driveCycles,
                      // Retailer: addInfo.retailer,
                      // ReportNumber: this.reportNumber,
                      frontbrakePadLife: vciResponseData.frontbrakePadLife,
                      rearbrakePadLife: vciResponseData.rearbrakePadLife,
                      // CustomScanModules: this.QuickScanSettings,
                      // Language: addInfo.lang,
                      // additionalInfo: this.additionalInfo,
                      warningLightStatus: vciResponseData.warningLightStatus,
                      // RegionalUnit: addInfo.regional,
                      // freezeFrames: this.freezeFrames
                      modules: null
                    };

                    if (vciResponseData.oemModules) {
                      req.modules = vciResponseData.oemModules.map(function (m) {
                        return {
                          System: m.system,
                          SubSystem: m.subsystem,
                          ModuleName: m.modulename,
                          Group: m.group,
                          InvalidDTC: m.InvalidDTC,
                          Status: m.Status,
                          Skipped: m.Skipped,
                          Dtcs: (m.Dtcs || []).map(function (d) {
                            return {
                              Code: d.code,
                              Type: d.type,
                              Def: d.definition
                            };
                          })
                        };
                      });
                    }

                    (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__classPrivateFieldGet)(this, _ReportServiceProvider_logger, "f").debug('Create Report Request Data', req);
                    return _context38.abrupt("return", this.apiRestService.post(API_REPORT, req).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.timeout)(src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_2__.AppConfig.createReportRequestTimeoutInMs), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(function (res) {
                      return new src_app_models_app_model__WEBPACK_IMPORTED_MODULE_0__.ApiReportResponse(res);
                    }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.catchError)(function (error) {
                      (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__classPrivateFieldGet)(_this28, _ReportServiceProvider_logger, "f").debug(error);
                      return (0, rxjs__WEBPACK_IMPORTED_MODULE_10__.of)(new src_app_models_app_model__WEBPACK_IMPORTED_MODULE_0__.ApiReportResponse(error));
                    })).toPromise());

                  case 4:
                  case "end":
                    return _context38.stop();
                }
              }, _callee38, this);
            }));
          }
        }, {
          key: "getReportHistory",
          value: function getReportHistory() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee39() {
              return _regeneratorRuntime().wrap(function _callee39$(_context39) {
                while (1) switch (_context39.prev = _context39.next) {
                  case 0:
                    return _context39.abrupt("return", this.apiRestService.get(API_REPORT_HISTORY).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.timeout)(src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_2__.AppConfig.shortHttpRequestTimeoutInMs), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(function (res) {
                      return new src_app_models_app_model__WEBPACK_IMPORTED_MODULE_0__.ApiReportHistoryResponse(res);
                    }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.catchError)(function (error) {
                      return (0, rxjs__WEBPACK_IMPORTED_MODULE_10__.of)(new src_app_models_app_model__WEBPACK_IMPORTED_MODULE_0__.ApiReportHistoryResponse(error));
                    })).toPromise());

                  case 1:
                  case "end":
                    return _context39.stop();
                }
              }, _callee39, this);
            }));
          }
        }, {
          key: "getReportDetails",
          value: function getReportDetails(id) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee40() {
              return _regeneratorRuntime().wrap(function _callee40$(_context40) {
                while (1) switch (_context40.prev = _context40.next) {
                  case 0:
                    return _context40.abrupt("return", this.apiRestService.get(API_REPORT + '/' + id).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.timeout)(src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_2__.AppConfig.shortHttpRequestTimeoutInMs), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(function (res) {
                      return new src_app_models_app_model__WEBPACK_IMPORTED_MODULE_0__.ApiReportResponse(res);
                    }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.catchError)(function (error) {
                      return (0, rxjs__WEBPACK_IMPORTED_MODULE_10__.of)(new src_app_models_app_model__WEBPACK_IMPORTED_MODULE_0__.ApiReportResponse(error));
                    })).toPromise());

                  case 1:
                  case "end":
                    return _context40.stop();
                }
              }, _callee40, this);
            }));
          }
        }, {
          key: "getReportSession",
          value: function getReportSession() {
            var reportSession = JSON.parse(localStorage.getItem(src_app_models_app_constant__WEBPACK_IMPORTED_MODULE_3__.StorageKeys.REPORT_SESSION));

            if (!reportSession) {
              reportSession = new src_app_models_report_session__WEBPACK_IMPORTED_MODULE_1__.ReportSession();
            }

            return reportSession;
          }
        }, {
          key: "saveReportSession",
          value: function saveReportSession(reportSession) {
            localStorage.setItem(src_app_models_app_constant__WEBPACK_IMPORTED_MODULE_3__.StorageKeys.REPORT_SESSION, JSON.stringify(reportSession));
          }
        }, {
          key: "deleteReportSession",
          value: function deleteReportSession() {
            localStorage.removeItem(src_app_models_app_constant__WEBPACK_IMPORTED_MODULE_3__.StorageKeys.REPORT_SESSION);
          }
        }]);
      }();

      _ReportServiceProvider_logger = new WeakMap();

      _ReportServiceProvider.ɵfac = function ReportServiceProvider_Factory(t) {
        return new (t || _ReportServiceProvider)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_api_rest_service__WEBPACK_IMPORTED_MODULE_4__.ApiRestService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_logger__WEBPACK_IMPORTED_MODULE_5__.AppLoggerService));
      };

      _ReportServiceProvider.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjectable"]({
        token: _ReportServiceProvider,
        factory: _ReportServiceProvider.ɵfac
      });
      /***/
    },

    /***/
    12607:
    /*!*********************************************!*\
      !*** ./src/app/services/state/app.state.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppState": function AppState() {
          return (
            /* binding */
            _AppState
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      42321);
      /* harmony import */


      var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ionic-native/app-version/ngx */
      21788);
      /* harmony import */


      var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic-native/device/ngx */
      96265);
      /* harmony import */


      var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/network/ngx */
      95680);
      /* harmony import */


      var src_app_modules_service_injector_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/modules/service-injector.module */
      34973);
      /* harmony import */


      var _logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../logger */
      88737);

      var _a, _AppState_isInitialled, _AppState_deviceVersion, _AppState_deviceModel, _AppState_devicePlatform, _AppState_deviceManufacturer, _AppState_cordovaVersion, _AppState_appVersion, _AppState_isOnIOs, _AppState_isOnIOs10, _AppState_isLowerVersionIOs154, _AppState_isOnDesktopChrome, _AppState_isOnAndroid, _AppState_isOnAndroid12, _AppState_isOnAndroid13OrNewer, _AppState_isOnPixel, _AppState_storageVersion, _AppState_isOffline, _AppState_isBTTurnedOn, _AppState_isBTLowMode;
      /* eslint-disable @typescript-eslint/member-ordering */

      /**
       * Application state management
       *
       * @export
       * @class AppState
       */


      var _AppState = /*#__PURE__*/function () {
        function _AppState() {
          _classCallCheck(this, _AppState);
        }

        return _createClass(_AppState, null, [{
          key: "appVersion",
          get:
          /**
           * Get the current app version
           *
           * @static
           * @memberof AppState
           */
          function get() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__classPrivateFieldGet)(this, _a, "f", _AppState_appVersion);
          }
          /**
           * Is running on the iOS device or not
           *
           * @static
           * @memberof AppState
           */

        }, {
          key: "isOnIOs",
          get: function get() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__classPrivateFieldGet)(this, _a, "f", _AppState_isOnIOs);
          }
          /**
           * Is running on the Android device or not
           *
           * @static
           * @memberof AppState
           */

        }, {
          key: "isOnAndroid",
          get: function get() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__classPrivateFieldGet)(this, _a, "f", _AppState_isOnAndroid);
          }
          /**
           * Is running on the Android 12 device or not
           *
           * @static
           * @memberof AppState
           */

        }, {
          key: "isOnAndroid12",
          get: function get() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__classPrivateFieldGet)(this, _a, "f", _AppState_isOnAndroid12);
          }
        }, {
          key: "isOnAndroid13OrNewer",
          get: function get() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__classPrivateFieldGet)(this, _a, "f", _AppState_isOnAndroid13OrNewer);
          }
          /**
           * Is running on the Pixel device or not
           *
           * @static
           * @memberof AppState
           */

        }, {
          key: "isOnPixel",
          get: function get() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__classPrivateFieldGet)(this, _a, "f", _AppState_isOnPixel);
          }
          /**
           * Is connecting to internet or not
           *
           * @static
           * @memberof AppState
           */

        }, {
          key: "isOffline",
          get: function get() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__classPrivateFieldGet)(this, _a, "f", _AppState_isOffline);
          }
          /**
           * Is bluetooth turned ON or OFF
           *
           * @static
           * @memberof AppState
           */

        }, {
          key: "isBluetoothTurnedOn",
          get: function get() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__classPrivateFieldGet)(this, _a, "f", _AppState_isBTTurnedOn);
          }
          /**
           * Set bluetooth state is turned ON or OFF
           *
           * @param isTurnedOn
           */

        }, {
          key: "setBluetoothState",
          value: function setBluetoothState(isTurnedOn) {
            (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__classPrivateFieldSet)(this, _a, isTurnedOn, "f", _AppState_isBTTurnedOn);
          }
          /**
           * Is bluetooth in LOW mode or not
           *
           * @static
           * @memberof AppState
           */

        }, {
          key: "isBluetoothLowMode",
          get: function get() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__classPrivateFieldGet)(this, _a, "f", _AppState_isBTLowMode);
          }
          /**
           * Set bluetooth is LOW mode or not
           *
           * @param isLowMode
           * @static
           * @memberof AppState
           */
          ,
          set: function set(isLowMode) {
            (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__classPrivateFieldSet)(this, _a, isLowMode, "f", _AppState_isBTLowMode);
          }
          /**
           * Is running on the Android device or not
           *
           * @static
           * @memberof AppState
           */

        }, {
          key: "isOnIOs10",
          get: function get() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__classPrivateFieldGet)(this, _a, "f", _AppState_isOnIOs10);
          }
          /**
           * Is on lower version of IOS 15.4 device or not
           *
           * @static
           * @memberof AppState
           */

        }, {
          key: "isLowerVersionIOs154",
          get: function get() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__classPrivateFieldGet)(this, _a, "f", _AppState_isLowerVersionIOs154);
          }
          /**
           * Is on Desktop Chrome.
           *
           * @static
           * @memberof AppState
           */

        }, {
          key: "isOnDesktopChrome",
          get: function get() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__classPrivateFieldGet)(this, _a, "f", _AppState_isOnDesktopChrome);
          }
          /**
           * Get the current storage version
           *
           * @static
           * @memberof AppState
           */

        }, {
          key: "storageVersion",
          get: function get() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__classPrivateFieldGet)(this, _a, "f", _AppState_storageVersion);
          }
        }, {
          key: "init",
          value: function init() {
            var _b, _c, _d;

            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee41() {
              var _this29 = this;

              var regexChrome, serviceInjector, logger, device, appVersion, versionParts, network;
              return _regeneratorRuntime().wrap(function _callee41$(_context41) {
                while (1) switch (_context41.prev = _context41.next) {
                  case 0:
                    regexChrome = new RegExp(/(plt-mobileweb)/g);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__classPrivateFieldSet)(this, _a, regexChrome.test(document.querySelector('html').className), "f", _AppState_isOnDesktopChrome);

                    if (!(typeof cordova === 'undefined' || (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__classPrivateFieldGet)(this, _a, "f", _AppState_isInitialled))) {
                      _context41.next = 4;
                      break;
                    }

                    return _context41.abrupt("return");

                  case 4:
                    serviceInjector = src_app_modules_service_injector_module__WEBPACK_IMPORTED_MODULE_3__.ServiceInjector;
                    logger = (_b = serviceInjector === null || serviceInjector === void 0 ? void 0 : serviceInjector.get(_logger__WEBPACK_IMPORTED_MODULE_4__.AppLoggerService)) === null || _b === void 0 ? void 0 : _b.getLogger('AppState');
                    device = serviceInjector === null || serviceInjector === void 0 ? void 0 : serviceInjector.get(_ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_1__.Device);

                    if (device) {
                      (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__classPrivateFieldSet)(this, _a, device.platform, "f", _AppState_devicePlatform);
                      (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__classPrivateFieldSet)(this, _a, ((_c = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__classPrivateFieldGet)(this, _a, "f", _AppState_devicePlatform)) === null || _c === void 0 ? void 0 : _c.toUpperCase()) === 'IOS', "f", _AppState_isOnIOs);
                      (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__classPrivateFieldSet)(this, _a, ((_d = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__classPrivateFieldGet)(this, _a, "f", _AppState_devicePlatform)) === null || _d === void 0 ? void 0 : _d.toUpperCase()) === 'ANDROID', "f", _AppState_isOnAndroid);
                      (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__classPrivateFieldSet)(this, _a, (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__classPrivateFieldGet)(this, _a, "f", _AppState_isOnAndroid) && device.version && device.version.startsWith('12'), "f", _AppState_isOnAndroid12);
                      (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__classPrivateFieldSet)(this, _a, this.isOnAndroid && device.version != null && Number.parseFloat(device.version) >= 13, "f", _AppState_isOnAndroid13OrNewer);
                      (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__classPrivateFieldSet)(this, _a, device.version && device.version.indexOf('10.') === 0, "f", _AppState_isOnIOs10);
                      (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__classPrivateFieldSet)(this, _a, device.version && device.version < '15.4', "f", _AppState_isLowerVersionIOs154);
                      (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__classPrivateFieldSet)(this, _a, device.version, "f", _AppState_deviceVersion);
                      (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__classPrivateFieldSet)(this, _a, device.model, "f", _AppState_deviceModel);
                      (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__classPrivateFieldSet)(this, _a, device.model.startsWith('Pixel'), "f", _AppState_isOnPixel);
                      (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__classPrivateFieldSet)(this, _a, device.cordova, "f", _AppState_cordovaVersion);
                      (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__classPrivateFieldSet)(this, _a, device.manufacturer, "f", _AppState_deviceManufacturer);
                      logger === null || logger === void 0 ? void 0 : logger.info('DEVICE:', 'platform', (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__classPrivateFieldGet)(this, _a, "f", _AppState_devicePlatform), 'version', (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__classPrivateFieldGet)(this, _a, "f", _AppState_deviceVersion), 'model', (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__classPrivateFieldGet)(this, _a, "f", _AppState_deviceModel));
                    } else {
                      logger === null || logger === void 0 ? void 0 : logger.info('device is null');
                    }
                    /** */


                    if (!this.isOnDevice) {
                      _context41.next = 21;
                      break;
                    }

                    appVersion = serviceInjector === null || serviceInjector === void 0 ? void 0 : serviceInjector.get(_ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_0__.AppVersion);

                    if (!appVersion) {
                      _context41.next = 21;
                      break;
                    }

                    _context41.t0 = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__classPrivateFieldSet);
                    _context41.t1 = this;
                    _context41.t2 = _a;
                    _context41.next = 16;
                    return appVersion.getVersionNumber();

                  case 16:
                    _context41.t3 = _context41.sent;
                    _context41.t4 = _AppState_appVersion;
                    (0, _context41.t0)(_context41.t1, _context41.t2, _context41.t3, "f", _context41.t4);
                    versionParts = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__classPrivateFieldGet)(this, _a, "f", _AppState_appVersion).split('.');

                    if (versionParts.length > 2) {
                      (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__classPrivateFieldSet)(this, _a, "V".concat(versionParts[0].padStart(2, '0'), ".").concat(versionParts[1].padStart(2, '0'), ".").concat(versionParts[2].padStart(2, '0')), "f", _AppState_appVersion);
                    }

                  case 21:
                    network = serviceInjector === null || serviceInjector === void 0 ? void 0 : serviceInjector.get(_ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_2__.Network);
                    logger === null || logger === void 0 ? void 0 : logger.info('Network Type:', network === null || network === void 0 ? void 0 : network.type);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__classPrivateFieldSet)(this, _a, (network === null || network === void 0 ? void 0 : network.type) === (network === null || network === void 0 ? void 0 : network.Connection.NONE), "f", _AppState_isOffline);
                    network === null || network === void 0 ? void 0 : network.onDisconnect().subscribe(function () {
                      logger === null || logger === void 0 ? void 0 : logger.info('NETWORK WAS DISCONNECTED');
                      (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__classPrivateFieldSet)(_this29, _a, true, "f", _AppState_isOffline);
                    });
                    network === null || network === void 0 ? void 0 : network.onConnect().subscribe(function () {
                      /*We just got a connection but we need to wait briefly
                        before we determine the connection type. Might need to wait.
                        prior to doing any api requests as well.*/
                      setTimeout(function () {
                        logger === null || logger === void 0 ? void 0 : logger.info('NETWORK CONNECTED', network === null || network === void 0 ? void 0 : network.type);

                        if ((network === null || network === void 0 ? void 0 : network.type) === (network === null || network === void 0 ? void 0 : network.Connection.NONE)) {
                          (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__classPrivateFieldSet)(_this29, _a, true, "f", _AppState_isOffline);
                        } else {
                          (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__classPrivateFieldSet)(_this29, _a, false, "f", _AppState_isOffline);
                        }
                      }, 3000);
                    });
                    (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__classPrivateFieldSet)(this, _a, true, "f", _AppState_isInitialled);
                    logger === null || logger === void 0 ? void 0 : logger.info('AppState was initialled successfully');

                  case 28:
                  case "end":
                    return _context41.stop();
                }
              }, _callee41, this);
            }));
          }
          /**
           * Is running on mobile devices (iOS or Android) or not
           *
           * @readonly
           * @static
           * @memberof AppState
           */

        }, {
          key: "isOnDevice",
          get: function get() {
            return this.isOnIOs || this.isOnAndroid;
          }
          /**
           * Is running on web browser or not
           *
           * @readonly
           * @static
           * @memberof AppState
           */

        }, {
          key: "isOnBrowser",
          get: function get() {
            return !this.isOnDevice;
          }
          /**
           * Get current device version. Ex: 14.6.1
           *
           * @readonly
           * @static
           * @memberof AppState
           */

        }, {
          key: "deviceVersion",
          get: function get() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__classPrivateFieldGet)(this, _a, "f", _AppState_deviceVersion);
          }
          /**
           * Get current device platform. Ex: Android
           *
           * @readonly
           * @static
           * @memberof AppState
           */

        }, {
          key: "devicePlatform",
          get: function get() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__classPrivateFieldGet)(this, _a, "f", _AppState_devicePlatform);
          }
          /**
           * Get current device manufacturer. Ex: Apple, Samsung
           *
           * @readonly
           * @static
           * @memberof AppState
           */

        }, {
          key: "deviceManufacturer",
          get: function get() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__classPrivateFieldGet)(this, _a, "f", _AppState_deviceManufacturer);
          }
          /**
           * Get current major device version. Ex: 14.6.1 => 14
           *
           * @readonly
           * @static
           * @type {number}
           * @memberof AppState
           */

        }, {
          key: "majorDeviceVersion",
          get: function get() {
            if ((0, tslib__WEBPACK_IMPORTED_MODULE_5__.__classPrivateFieldGet)(this, _a, "f", _AppState_deviceVersion)) {
              var aV = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__classPrivateFieldGet)(this, _a, "f", _AppState_deviceVersion).split('.');

              if (aV.length > 0 && aV[0]) {
                return Number.parseInt(aV[0], 10);
              }
            }

            return null;
          }
          /**
           * Get current minor device version. Ex: 14.6.1 => 6
           *
           * @readonly
           * @static
           * @type {number}
           * @memberof AppState
           */

        }, {
          key: "minorDeviceVersion",
          get: function get() {
            if ((0, tslib__WEBPACK_IMPORTED_MODULE_5__.__classPrivateFieldGet)(this, _a, "f", _AppState_deviceVersion)) {
              var aV = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__classPrivateFieldGet)(this, _a, "f", _AppState_deviceVersion).split('.');

              if (aV.length > 1 && aV[1]) {
                return Number.parseInt(aV[1], 10);
              }
            }

            return null;
          }
          /**
           * Compare major device version
           *
           * @param majorVersion The major version to compare. Ex: 14
           * @returns boolean
           */

        }, {
          key: "isOnIOsVersion",
          value: function isOnIOsVersion(majorVersion) {
            return this.isOnIOs && this.majorDeviceVersion === majorVersion;
          }
          /**
           * Check At Least major & minor ios device version. Ex: >= 14.0
           *
           * @param majorVersion The major version to compare. Ex: 14
           * @param minorVersion The minor version to compare. Ex: 0
           * @returns boolean
           */

        }, {
          key: "isOnAtLeastIOsVersion",
          value: function isOnAtLeastIOsVersion(majorVersion) {
            var minorVersion = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            return this.isOnIOs && this.majorDeviceVersion > majorVersion || this.majorDeviceVersion === majorVersion && this.minorDeviceVersion >= minorVersion;
          }
          /**
           * Check At Least major & minor device version. Ex: >= 14.0
           *
           * @param majorVersion The major version to compare. Ex: 14
           * @param minorVersion The minor version to compare. Ex: 0
           * @returns boolean
           */

        }, {
          key: "isOnAtLeastVersion",
          value: function isOnAtLeastVersion(majorVersion) {
            var minorVersion = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            return this.majorDeviceVersion > majorVersion || this.majorDeviceVersion === majorVersion && this.minorDeviceVersion >= minorVersion;
          }
          /**
           * Get current device model
           *
           * @readonly
           * @static
           * @memberof AppState
           */

        }, {
          key: "deviceModel",
          get: function get() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__classPrivateFieldGet)(this, _a, "f", _AppState_deviceModel);
          }
          /**
           * Get current Cordova version
           *
           * @readonly
           * @static
           * @memberof AppState
           */

        }, {
          key: "cordovaVersion",
          get: function get() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__classPrivateFieldGet)(this, _a, "f", _AppState_cordovaVersion);
          }
        }]);
      }();

      _a = _AppState;
      _AppState_isInitialled = {
        value: false
      };
      _AppState_deviceVersion = {
        value: void 0
      };
      _AppState_deviceModel = {
        value: void 0
      };
      _AppState_devicePlatform = {
        value: void 0
      };
      _AppState_deviceManufacturer = {
        value: void 0
      };
      _AppState_cordovaVersion = {
        value: void 0
      };
      _AppState_appVersion = {
        value: 'N/A'
      };
      _AppState_isOnIOs = {
        value: false
      };
      _AppState_isOnIOs10 = {
        value: false
      };
      _AppState_isLowerVersionIOs154 = {
        value: false
      };
      _AppState_isOnDesktopChrome = {
        value: false
      };
      _AppState_isOnAndroid = {
        value: false
      };
      _AppState_isOnAndroid12 = {
        value: false
      };
      _AppState_isOnAndroid13OrNewer = {
        value: false
      };
      _AppState_isOnPixel = {
        value: false
      };
      _AppState_storageVersion = {
        value: '1.0.0'
      };
      _AppState_isOffline = {
        value: false
      };
      _AppState_isBTTurnedOn = {
        value: false
      };
      _AppState_isBTLowMode = {
        value: false
      };
      /***/
    },

    /***/
    2470:
    /*!**********************************************!*\
      !*** ./src/app/services/state/user.state.ts ***!
      \**********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UserState": function UserState() {
          return (
            /* binding */
            _UserState
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      42321);

      var _a, _UserState_user, _UserState_token;

      var _UserState = /*#__PURE__*/function () {
        function _UserState() {
          _classCallCheck(this, _UserState);
        }

        return _createClass(_UserState, null, [{
          key: "init",
          value:
          /*
          * @memberof UserState
          */

          /**
           * Initial some states. Be careful!
           */
          function init() {}
          /**
           * Reset all states. Should reset them after logout. Be careful!
           */

        }, {
          key: "resetAll",
          value: function resetAll() {
            _UserState.init();

            (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__classPrivateFieldSet)(this, _a, null, "f", _UserState_user);
            (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__classPrivateFieldSet)(this, _a, null, "f", _UserState_token);
          }
        }, {
          key: "user",
          get: function get() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__classPrivateFieldGet)(this, _a, "f", _UserState_user);
          }
        }, {
          key: "token",
          get: function get() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__classPrivateFieldGet)(this, _a, "f", _UserState_token);
          }
        }, {
          key: "setAuthenticatedUser",
          value: function setAuthenticatedUser(user, token) {
            (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__classPrivateFieldSet)(this, _a, user, "f", _UserState_user);
            (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__classPrivateFieldSet)(this, _a, token, "f", _UserState_token);
          }
        }, {
          key: "isAuth",
          get: function get() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__classPrivateFieldGet)(this, _a, "f", _UserState_token) != null;
          }
        }]);
      }();

      _a = _UserState;
      _UserState_user = {
        value: void 0
      };
      _UserState_token = {
        value: void 0
      };
      /***/
    },

    /***/
    91841:
    /*!*******************************************************!*\
      !*** ./src/app/services/tool-service/tool-service.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ToolServiceProvider": function ToolServiceProvider() {
          return (
            /* binding */
            _ToolServiceProvider
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _ToolServiceProvider = /*#__PURE__*/function () {
        function _ToolServiceProvider() {
          _classCallCheck(this, _ToolServiceProvider);

          this.readingTimeout = 60000;
        }

        return _createClass(_ToolServiceProvider, [{
          key: "setConnectedDevice",
          value: function setConnectedDevice(device) {
            this.connectedDevice = device;
          }
        }, {
          key: "getConnectedDevice",
          value: function getConnectedDevice() {
            return this.connectedDevice;
          }
        }, {
          key: "clearConnectedDevice",
          value: function clearConnectedDevice() {
            this.connectedDevice = null;
          }
        }, {
          key: "isStartsWithToolName",
          value: function isStartsWithToolName(toolName) {
            return toolName.startsWith("BM1021") || toolName.startsWith("STVCI-826E") || toolName.startsWith("ScanTool");
          }
        }, {
          key: "isEqualToolName",
          value: function isEqualToolName(toolName) {
            return toolName === "BM1021" || toolName === "STVCI-826ELE";
          }
        }, {
          key: "wait",
          value: function wait(ms) {
            return new Promise(function (resolve, reject) {
              setTimeout(resolve, ms);
            });
          }
        }, {
          key: "checkFirmwareUpdates",
          value: function checkFirmwareUpdates() {
            var url = "http://dev.publicws.innova.com/UpdateServiceRest.svc/GetFirmwareUpdateByUsbProductIdXml?UsbProductid=660&firmwareV=17.07.03&BootLoaderV=01.01.03&DatabaseV=17.05.02";
            var ctx = this;
            var process = new Promise(function (resolve, reject) {
              this.http.post(url).map(function (res) {
                return res.json();
              }).subscribe(function (res) {
                resolve(res);
              }, function (err) {
                console.log(err);
                reject(err);
              }, function () {});
            });
            return ctx.promiseTimeout(ctx.readingTimeout, process);
          }
        }, {
          key: "promiseTimeout",
          value: function promiseTimeout(ms, promise) {
            var id;
            var timeout = new Promise(function (resolve, reject) {
              id = setTimeout(function () {
                reject('Timed out');
              }, ms);
            });
            return Promise.race([promise, timeout]).then(function (result) {
              clearTimeout(id);
              return new Promise(function (resolve) {
                resolve(result);
              });
            })["catch"](function (error) {
              clearTimeout(id);
              return new Promise(function (resolve, reject) {
                reject(error);
              });
            });
          }
        }]);
      }();

      _ToolServiceProvider.ɵfac = function ToolServiceProvider_Factory(t) {
        return new (t || _ToolServiceProvider)();
      };

      _ToolServiceProvider.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: _ToolServiceProvider,
        factory: _ToolServiceProvider.ɵfac
      });
      /***/
    },

    /***/
    92582:
    /*!*************************************************!*\
      !*** ./src/app/services/utility/carmd.utils.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CarMDUtils": function CarMDUtils() {
          return (
            /* binding */
            _CarMDUtils
          );
        },

        /* harmony export */
        "dateTimeAgoByString": function dateTimeAgoByString() {
          return (
            /* binding */
            _dateTimeAgoByString
          );
        },

        /* harmony export */
        "dateTimeAgo": function dateTimeAgo() {
          return (
            /* binding */
            _dateTimeAgo
          );
        },

        /* harmony export */
        "numberWithCommas": function numberWithCommas() {
          return (
            /* binding */
            _numberWithCommas
          );
        },

        /* harmony export */
        "showLabelTimeRecord": function showLabelTimeRecord() {
          return (
            /* binding */
            _showLabelTimeRecord
          );
        },

        /* harmony export */
        "showTimeRecordDetail": function showTimeRecordDetail() {
          return (
            /* binding */
            _showTimeRecordDetail
          );
        },

        /* harmony export */
        "calculatorTimeDisplayFormat": function calculatorTimeDisplayFormat() {
          return (
            /* binding */
            _calculatorTimeDisplayFormat
          );
        },

        /* harmony export */
        "durationTime": function durationTime() {
          return (
            /* binding */
            _durationTime
          );
        },

        /* harmony export */
        "msToTime": function msToTime() {
          return (
            /* binding */
            _msToTime
          );
        },

        /* harmony export */
        "Rs2ModalAnimation": function Rs2ModalAnimation() {
          return (
            /* binding */
            _Rs2ModalAnimation
          );
        },

        /* harmony export */
        "Rs2Animation": function Rs2Animation() {
          return (
            /* binding */
            _Rs2Animation
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _ionic_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ionic/core */
      95992);

      var _CarMDUtils = /*#__PURE__*/function () {
        function _CarMDUtils() {
          _classCallCheck(this, _CarMDUtils);
        }

        return _createClass(_CarMDUtils, null, [{
          key: "clone",
          value: function clone(array) {
            return array.map(function (e) {
              return Object.assign(new Object(), e);
            });
          }
        }, {
          key: "sleep",
          value: function sleep() {
            var ms = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            return new Promise(function (res) {
              setTimeout(function () {
                return res(null);
              }, ms);
            });
          }
        }, {
          key: "isOnDevice",
          get: function get() {
            return typeof cordova !== 'undefined';
          }
        }, {
          key: "getKilobytesPerSecond",
          value: function getKilobytesPerSecond(totalTimeInMillisecond) {
            var totalBytes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2048;

            if (totalTimeInMillisecond == null || totalTimeInMillisecond <= 0 || totalBytes == null || totalBytes <= 0) {
              return 0;
            }

            return (totalBytes / 1024 / (totalTimeInMillisecond / 1000)).toFixed(3);
          }
        }, {
          key: "refreshUI",
          value: function refreshUI(changeDetectorRef) {
            try {
              changeDetectorRef.detectChanges();
            } catch (err) {}
          }
        }, {
          key: "getYearFromDateTimeString",
          value: function getYearFromDateTimeString(date) {
            var _a;

            date = new Date(date);
            return (_a = date.getFullYear()) !== null && _a !== void 0 ? _a : new Date().getFullYear();
          }
        }, {
          key: "versionString2Number",
          value: function versionString2Number(version) {
            return Number(version.replace('V', '').replace('v', '').split('.').map(function (e) {
              if (e.length === 1) {
                return '0' + e;
              }

              return e;
            }).join(''));
          }
        }]);
      }();

      _CarMDUtils.aMinutesByMs = 60000;

      function _dateTimeAgoByString(timeStringLocal) {
        var useLongUnit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var second = Math.floor((Date.now() - new Date(timeStringLocal).getTime()) / 1000);
        var arrUnit = [{
          unit: 'year',
          symbol: 'y',
          symbolMulti: 'years',
          equalSecond: 60 * 60 * 24 * 365
        }, {
          unit: 'month',
          symbol: 'mon',
          symbolMulti: 'months',
          equalSecond: 60 * 60 * 24 * 30
        }, {
          unit: 'week',
          symbol: 'w',
          symbolMulti: 'weeks',
          equalSecond: 60 * 60 * 24 * 7
        }, {
          unit: 'day',
          symbol: 'd',
          symbolMulti: 'days',
          equalSecond: 60 * 60 * 24
        }, {
          unit: 'hour',
          symbol: 'h',
          symbolMulti: 'hours',
          equalSecond: 60 * 60
        }, {
          unit: 'minute',
          symbol: 'min',
          symbolMulti: 'minutes',
          equalSecond: 60
        }, {
          unit: 'second',
          symbol: 's',
          symbolMulti: 'seconds',
          equalSecond: 1
        }];

        for (var i = 0; i <= arrUnit.length - 1; i++) {
          if (second >= arrUnit[i].equalSecond) {
            var time = Math.floor(second / arrUnit[i].equalSecond);
            var symbol = arrUnit[i].symbol;
            var longSymbol = arrUnit[i].unit;
            var symbolMulti = arrUnit[i].symbolMulti;

            if (useLongUnit) {
              return time + ' ' + (time > 1 ? symbolMulti : longSymbol) + ' ago';
            }

            return time + symbol + ' ' + 'ago';
          }
        }

        return '';
      }

      function _dateTimeAgo() {
        var second = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var useLongUnit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var arrUnit = [{
          unit: 'year',
          symbol: 'y',
          symbolMulti: 'years',
          equalSecond: 60 * 60 * 24 * 365
        }, {
          unit: 'month',
          symbol: 'mon',
          symbolMulti: 'months',
          equalSecond: 60 * 60 * 24 * 30
        }, {
          unit: 'week',
          symbol: 'w',
          symbolMulti: 'weeks',
          equalSecond: 60 * 60 * 24 * 7
        }, {
          unit: 'day',
          symbol: 'd',
          symbolMulti: 'days',
          equalSecond: 60 * 60 * 24
        }, {
          unit: 'hour',
          symbol: 'h',
          symbolMulti: 'hours',
          equalSecond: 60 * 60
        }, {
          unit: 'minute',
          symbol: 'min',
          symbolMulti: 'minutes',
          equalSecond: 60
        }, {
          unit: 'second',
          symbol: 's',
          symbolMulti: 'seconds',
          equalSecond: 1
        }];

        for (var i = 0; i <= arrUnit.length - 1; i++) {
          if (second >= arrUnit[i].equalSecond) {
            var time = Math.floor(second / arrUnit[i].equalSecond);
            var symbol = arrUnit[i].symbol;
            var longSymbol = arrUnit[i].unit;
            var symbolMulti = arrUnit[i].symbolMulti;

            if (useLongUnit) {
              return time + ' ' + (time > 1 ? symbolMulti : longSymbol) + ' ago';
            }

            return time + symbol + ' ' + 'ago';
          }
        }

        return '';
      }

      function _numberWithCommas() {
        var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

        if (x) {
          return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        }

        return x;
      }

      function _showLabelTimeRecord() {
        var timeStamp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var strArray = [// month from 0-11
        'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        var label = '';
        var currentDate = new Date().getDate();
        var currentMonth = strArray[new Date().getMonth()];
        var recordDate = new Date(timeStamp).getDate();
        var recordMonth = strArray[new Date(timeStamp).getMonth()];
        var recordYear = new Date(timeStamp).getFullYear();

        var timeHour = _calculatorTimeDisplayFormat(timeStamp, false); // today: Today at time
        // # and current month: Month Day
        // # year: Month Day, Year


        label = recordMonth + ' ' + (recordDate <= 9 ? '0' + recordDate : recordDate) + ', ' + recordYear;

        if (currentMonth === recordMonth) {
          label = recordMonth + ' ' + (recordDate <= 9 ? '0' + recordDate : recordDate);

          if (currentDate === recordDate) {
            label = 'Today at ' + timeHour;
          }
        }

        return label;
      }

      function _showTimeRecordDetail() {
        var timeStamp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var todayAtMode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        var forceAt = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var strArray = [// month from 0-11
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var label = '';
        var currentDate = new Date().getDate();
        var recordDate = new Date(timeStamp).getDate();
        var recordMonth = strArray[new Date(timeStamp).getMonth()];
        var recordYear = new Date(timeStamp).getFullYear();

        var timeHour = _calculatorTimeDisplayFormat(timeStamp, false); // today -> show Today at time else show MMM DD, YYYY


        label = recordMonth + ' ' + (recordDate <= 9 ? '0' + recordDate : recordDate) + ', ' + recordYear;

        if (todayAtMode && currentDate === recordDate) {
          label = 'Today at ' + timeHour;
        } else if (forceAt) {
          label += ' at ' + timeHour;
        }

        return label;
      } // time display format HH:MM:SS or HH:MM AM/PM


      function _calculatorTimeDisplayFormat() {
        var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var checkShowSecond = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isShowAmPm = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
        var timeInput = new Date(time);
        var hours = timeInput.getHours() > 12 ? timeInput.getHours() - 12 : timeInput.getHours();
        var amPM = timeInput.getHours() >= 12 ? 'PM' : 'AM';
        var minutes = timeInput.getMinutes() < 10 ? '0' + timeInput.getMinutes() : timeInput.getMinutes();
        var seconds = timeInput.getSeconds() < 10 ? '0' + timeInput.getSeconds() : timeInput.getSeconds();
        var timeFormat = checkShowSecond ? hours + ':' + minutes + ':' + seconds : hours + ':' + minutes;
        return isShowAmPm ? timeFormat + ' ' + amPM : timeFormat;
      }

      function _durationTime() {
        var startTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var totalTime = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        // time display
        // if <60s show format HH:MM:ss else HH:MM
        var checkShowSecond = totalTime < 60 * 1000;
        return "".concat(_calculatorTimeDisplayFormat(startTime - totalTime, checkShowSecond, false), " - ").concat(_calculatorTimeDisplayFormat(startTime, checkShowSecond));
      }

      function _msToTime() {
        var s = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

        // return ms time to HH:mm:ss
        // Pad to 2 or 3 digits, default is 2
        function pad(n) {
          var z = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
          return ('00' + n).slice(-z);
        }

        var ms = s % 1000;
        s = (s - ms) / 1000;
        var secs = s % 60;
        s = (s - secs) / 60;
        var mins = s % 60;
        var hrs = (s - mins) / 60;
        var result = hrs < 1 ? pad(mins) + ':' + pad(secs) : pad(hrs) + ':' + pad(mins) + ':' + pad(secs);
        return result;
      }

      var _Rs2ModalAnimation = /*#__PURE__*/function () {
        function _Rs2ModalAnimation() {
          _classCallCheck(this, _Rs2ModalAnimation);
        }

        return _createClass(_Rs2ModalAnimation, null, [{
          key: "ionApp3DEnterAnimation",
          value: function ionApp3DEnterAnimation() {
            document.querySelector('ion-app').style.setProperty('background', 'black');
            document.querySelector('ion-router-outlet').style.setProperty('border-radius', '0.9125rem');
            var backdropAnimation = (0, _ionic_core__WEBPACK_IMPORTED_MODULE_0__.createAnimation)().addElement(document.querySelector('ion-router-outlet')).fromTo('transform', 'scaleX(1) translateY(0)', 'scaleX(0.96) translateY(max(1rem, env(safe-area-inset-top)))');
            return (0, _ionic_core__WEBPACK_IMPORTED_MODULE_0__.createAnimation)().duration(200).addAnimation([backdropAnimation]);
          }
        }, {
          key: "ionApp3DLeaveAnimation",
          value: function ionApp3DLeaveAnimation() {
            _CarMDUtils.sleep(300).then(function () {
              return document.querySelector('ion-app').style.removeProperty('background');
            });

            document.querySelector('ion-router-outlet').style.setProperty('border-radius', '0');
            var backdropAnimation = (0, _ionic_core__WEBPACK_IMPORTED_MODULE_0__.createAnimation)().addElement(document.querySelector('ion-router-outlet')).fromTo('transform', 'scaleX(0.96) translateY(max(1rem, env(safe-area-inset-top)))', 'scaleX(1) translateY(0)');
            return (0, _ionic_core__WEBPACK_IMPORTED_MODULE_0__.createAnimation)().easing('ease-out').duration(300).addAnimation([backdropAnimation]);
          }
        }]);
      }();

      var _Rs2Animation = /*#__PURE__*/function () {
        function _Rs2Animation() {
          _classCallCheck(this, _Rs2Animation);
        }

        return _createClass(_Rs2Animation, null, [{
          key: "transformFromTo",
          value: function transformFromTo(baseEl, from, to) {
            var ms = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 300;
            var backdropAnimation = (0, _ionic_core__WEBPACK_IMPORTED_MODULE_0__.createAnimation)().addElement(baseEl).fromTo('transform', from, to);
            return (0, _ionic_core__WEBPACK_IMPORTED_MODULE_0__.createAnimation)().addElement(baseEl).easing('linear').duration(ms).addAnimation([backdropAnimation]);
          }
        }, {
          key: "leftToRight",
          value: function leftToRight(baseEl) {
            var ms = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;
            var backdropAnimation = (0, _ionic_core__WEBPACK_IMPORTED_MODULE_0__.createAnimation)().addElement(baseEl).fromTo('transform', 'translateX(-50%)', 'translateX(0)').fromTo('opacity', '0.2', '1');
            return (0, _ionic_core__WEBPACK_IMPORTED_MODULE_0__.createAnimation)().addElement(baseEl).easing('cubic-bezier(0.75, 0.42, 0.2, 1)').duration(ms).addAnimation([backdropAnimation]);
          }
        }, {
          key: "rightToLeft",
          value: function rightToLeft(baseEl) {
            var ms = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;
            var backdropAnimation = (0, _ionic_core__WEBPACK_IMPORTED_MODULE_0__.createAnimation)().addElement(baseEl).fromTo('transform', 'translateX(50%)', 'translateX(0)').fromTo('opacity', '0.2', '1');
            return (0, _ionic_core__WEBPACK_IMPORTED_MODULE_0__.createAnimation)().addElement(baseEl).easing('cubic-bezier(0.75, 0.42, 0.2, 1)').duration(ms).addAnimation([backdropAnimation]);
          }
        }, {
          key: "fadeOut",
          value: function fadeOut(baseEl) {
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
              from: 0.1,
              to: 0,
              ms: 300
            };
            return (0, _ionic_core__WEBPACK_IMPORTED_MODULE_0__.createAnimation)().duration(options.ms).easing('ease-out').addElement(baseEl).fromTo('opacity', options.from, options.to).play();
          }
        }, {
          key: "fadeIn",
          value: function fadeIn(baseEl) {
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
              from: 0,
              to: 0.1,
              ms: 300
            };
            return (0, _ionic_core__WEBPACK_IMPORTED_MODULE_0__.createAnimation)().duration(options.ms).easing('ease-in').addElement(baseEl).fromTo('opacity', options.from, options.to).play();
          }
        }]);
      }();
      /***/

    },

    /***/
    2658:
    /*!*************************************!*\
      !*** ./src/app/services/uuid-v4.ts ***!
      \*************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UuidV4": function UuidV4() {
          return (
            /* binding */
            _UuidV
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _UuidV = /*#__PURE__*/_createClass(function _UuidV() {
        _classCallCheck(this, _UuidV);
      });

      _UuidV.uuid = function () {
        return this.create();
      };

      _UuidV.create = function () {
        var bytes = this.createBinary();
        return this.parseBinary(bytes);
      };

      _UuidV.createBinary = function () {
        var getRandomBytes = function getRandomBytes() {
          var bytes = new Uint8Array(16);

          for (var i = 0; i < 16; i++) {
            bytes[i] = Math.random() * 256 | 0;
          }

          return bytes;
        }; // version 4


        var bytes = getRandomBytes();
        bytes[6] = bytes[6] & 0x0f | 0x40;
        bytes[8] = bytes[8] & 0x3f | 0x80;
        return bytes;
      };

      _UuidV.parseBinary = function (bytes) {
        var result = '';

        var toHex = function toHex(number) {
          var hex = Number(number).toString(16);

          if (hex.length & 1) {
            return '0' + hex;
          }

          return hex;
        };

        for (var i = 0; i < 16; i++) {
          if (i === 4 || i === 6 || i === 8 || i === 10) {
            result += '-';
          }

          result += toHex(bytes[i]);
        }

        return result;
      };

      _UuidV.parse = function (string) {
        var result = new Uint8Array(16);
        var charCount = 0;

        var toNumber = function toNumber(hex) {
          return parseInt(hex, 16);
        };

        for (var i = 0; i < 16; i++) {
          if (i === 4 || i === 6 || i === 8 || i === 10) {
            charCount++;
          }

          result[i] = toNumber(string[charCount] + string[charCount + 1]);
          charCount += 2;
        }

        return result;
      };

      _UuidV.isValid = function (str) {
        var REG_EX = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
        return REG_EX.test(str);
      };

      _UuidV.ɵfac = function UuidV4_Factory(t) {
        return new (t || _UuidV)();
      };

      _UuidV.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: _UuidV,
        factory: _UuidV.ɵfac
      });
      /***/
    },

    /***/
    99578:
    /*!*************************************************************!*\
      !*** ./src/app/services/vehicle-service/vehicle-service.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "VehicleServiceProvider": function VehicleServiceProvider() {
          return (
            /* binding */
            _VehicleServiceProvider
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      42321);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      53803);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      33927);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      18293);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs */
      81134);
      /* harmony import */


      var src_app_models_app_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/models/app.model */
      20998);
      /* harmony import */


      var src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/configs/app.config */
      66626);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _api_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../api-rest.service */
      96363);

      var API_DECODE_VIN = '/vehicles/decode/${vin}';
      var API_GET_MAKES = '/makes';
      var API_GET_YEARS = '/years/${make}';
      var API_GET_MODELS = '/models/${make}/${year}';
      var API_GET_DLC_LOCATION = '/dlc/${make}/${year}/${model}';
      var API_GET_DLC_LOCATION_BY_VIN = '/dlc/${vin}';

      var _VehicleServiceProvider = /*#__PURE__*/function () {
        function _VehicleServiceProvider(apiRestService) {
          _classCallCheck(this, _VehicleServiceProvider);

          this.apiRestService = apiRestService;
        }

        return _createClass(_VehicleServiceProvider, [{
          key: "decodeVin",
          value: function decodeVin(vin) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee42() {
              return _regeneratorRuntime().wrap(function _callee42$(_context42) {
                while (1) switch (_context42.prev = _context42.next) {
                  case 0:
                    return _context42.abrupt("return", this.apiRestService.get(API_DECODE_VIN.replace('${vin}', vin)).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.timeout)(src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_1__.AppConfig.shortHttpRequestTimeoutInMs), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(function (res) {
                      return new src_app_models_app_model__WEBPACK_IMPORTED_MODULE_0__.ApiVehicleResponse(res);
                    }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(function (error) {
                      return (0, rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(new src_app_models_app_model__WEBPACK_IMPORTED_MODULE_0__.ApiVehicleResponse(error));
                    })).toPromise());

                  case 1:
                  case "end":
                    return _context42.stop();
                }
              }, _callee42, this);
            }));
          }
        }, {
          key: "getMakes",
          value: function getMakes() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee43() {
              return _regeneratorRuntime().wrap(function _callee43$(_context43) {
                while (1) switch (_context43.prev = _context43.next) {
                  case 0:
                    return _context43.abrupt("return", this.apiRestService.get(API_GET_MAKES).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.timeout)(src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_1__.AppConfig.shortHttpRequestTimeoutInMs), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(function (res) {
                      return new src_app_models_app_model__WEBPACK_IMPORTED_MODULE_0__.ApiMakesResponse(res);
                    }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(function (error) {
                      return (0, rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(new src_app_models_app_model__WEBPACK_IMPORTED_MODULE_0__.ApiMakesResponse(error));
                    })).toPromise());

                  case 1:
                  case "end":
                    return _context43.stop();
                }
              }, _callee43, this);
            }));
          }
        }, {
          key: "getYears",
          value: function getYears(make) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee44() {
              return _regeneratorRuntime().wrap(function _callee44$(_context44) {
                while (1) switch (_context44.prev = _context44.next) {
                  case 0:
                    return _context44.abrupt("return", this.apiRestService.get(API_GET_YEARS.replace('${make}', make)).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.timeout)(src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_1__.AppConfig.shortHttpRequestTimeoutInMs), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(function (res) {
                      return new src_app_models_app_model__WEBPACK_IMPORTED_MODULE_0__.ApiYearsResponse(res);
                    }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(function (error) {
                      return (0, rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(new src_app_models_app_model__WEBPACK_IMPORTED_MODULE_0__.ApiYearsResponse(error));
                    })).toPromise());

                  case 1:
                  case "end":
                    return _context44.stop();
                }
              }, _callee44, this);
            }));
          }
        }, {
          key: "getModels",
          value: function getModels(make, year) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee45() {
              return _regeneratorRuntime().wrap(function _callee45$(_context45) {
                while (1) switch (_context45.prev = _context45.next) {
                  case 0:
                    return _context45.abrupt("return", this.apiRestService.get(API_GET_MODELS.replace('${make}', make).replace('${year}', year)).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.timeout)(src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_1__.AppConfig.shortHttpRequestTimeoutInMs), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(function (res) {
                      return new src_app_models_app_model__WEBPACK_IMPORTED_MODULE_0__.ApiModelsResponse(res);
                    }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(function (error) {
                      return (0, rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(new src_app_models_app_model__WEBPACK_IMPORTED_MODULE_0__.ApiModelsResponse(error));
                    })).toPromise());

                  case 1:
                  case "end":
                    return _context45.stop();
                }
              }, _callee45, this);
            }));
          }
        }, {
          key: "getDlcLocation",
          value: function getDlcLocation(make, year, model) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee46() {
              return _regeneratorRuntime().wrap(function _callee46$(_context46) {
                while (1) switch (_context46.prev = _context46.next) {
                  case 0:
                    return _context46.abrupt("return", this.apiRestService.get(API_GET_DLC_LOCATION.replace('${make}', make).replace('${year}', year).replace('${model}', model)).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.timeout)(src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_1__.AppConfig.shortHttpRequestTimeoutInMs), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(function (res) {
                      return new src_app_models_app_model__WEBPACK_IMPORTED_MODULE_0__.ApiDlcLocationResponse(res);
                    }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(function (error) {
                      return (0, rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(new src_app_models_app_model__WEBPACK_IMPORTED_MODULE_0__.ApiDlcLocationResponse(error));
                    })).toPromise());

                  case 1:
                  case "end":
                    return _context46.stop();
                }
              }, _callee46, this);
            }));
          }
        }, {
          key: "getDlcLocationByVin",
          value: function getDlcLocationByVin(vin) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee47() {
              return _regeneratorRuntime().wrap(function _callee47$(_context47) {
                while (1) switch (_context47.prev = _context47.next) {
                  case 0:
                    return _context47.abrupt("return", this.apiRestService.get(API_GET_DLC_LOCATION_BY_VIN.replace('${vin}', vin)).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.timeout)(src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_1__.AppConfig.shortHttpRequestTimeoutInMs), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(function (res) {
                      return new src_app_models_app_model__WEBPACK_IMPORTED_MODULE_0__.ApiDlcLocationResponse(res);
                    }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(function (error) {
                      return (0, rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(new src_app_models_app_model__WEBPACK_IMPORTED_MODULE_0__.ApiDlcLocationResponse(error));
                    })).toPromise());

                  case 1:
                  case "end":
                    return _context47.stop();
                }
              }, _callee47, this);
            }));
          }
        }]);
      }();

      _VehicleServiceProvider.ɵfac = function VehicleServiceProvider_Factory(t) {
        return new (t || _VehicleServiceProvider)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_api_rest_service__WEBPACK_IMPORTED_MODULE_2__.ApiRestService));
      };

      _VehicleServiceProvider.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({
        token: _VehicleServiceProvider,
        factory: _VehicleServiceProvider.ɵfac
      });
      /***/
    },

    /***/
    92340:
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "environment": function environment() {
          return (
            /* binding */
            _environment
          );
        }
        /* harmony export */

      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var _environment = {
        production: false,
        appEndpoint: 'https://scanapi.carmd.com/v2.0'
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    14431:
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser */
      71570);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _app_modules_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app/modules/app.module */
      5105);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      92340);
      /* harmony import */


      var _angular_compiler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/compiler */
      74068);

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
        (0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.enableProdMode)();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.platformBrowser().bootstrapModule(_app_modules_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)["catch"](function (err) {
        return console.log(err);
      });
      /***/

    },

    /***/
    50863:
    /*!******************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \******************************************************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      var map = {
        "./ion-accordion_2.entry.js": [83750, "common", "node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"],
        "./ion-action-sheet.entry.js": [90733, "common", "node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"],
        "./ion-alert.entry.js": [20985, "common", "node_modules_ionic_core_dist_esm_ion-alert_entry_js"],
        "./ion-app_8.entry.js": [93899, "common", "node_modules_ionic_core_dist_esm_ion-app_8_entry_js"],
        "./ion-avatar_3.entry.js": [5121, "node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"],
        "./ion-back-button.entry.js": [52960, "common", "node_modules_ionic_core_dist_esm_ion-back-button_entry_js"],
        "./ion-backdrop.entry.js": [45473, "node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"],
        "./ion-breadcrumb_2.entry.js": [57951, "common", "node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"],
        "./ion-button_2.entry.js": [19787, "node_modules_ionic_core_dist_esm_ion-button_2_entry_js"],
        "./ion-card_5.entry.js": [66165, "node_modules_ionic_core_dist_esm_ion-card_5_entry_js"],
        "./ion-checkbox.entry.js": [69569, "node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"],
        "./ion-chip.entry.js": [35119, "node_modules_ionic_core_dist_esm_ion-chip_entry_js"],
        "./ion-col_3.entry.js": [90799, "node_modules_ionic_core_dist_esm_ion-col_3_entry_js"],
        "./ion-datetime-button.entry.js": [16519, "default-node_modules_ionic_core_dist_esm_data-caf38df0_js-node_modules_ionic_core_dist_esm_th-3ec348", "node_modules_ionic_core_dist_esm_ion-datetime-button_entry_js"],
        "./ion-datetime_3.entry.js": [68918, "default-node_modules_ionic_core_dist_esm_data-caf38df0_js-node_modules_ionic_core_dist_esm_th-3ec348", "common", "node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"],
        "./ion-fab_3.entry.js": [94028, "common", "node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"],
        "./ion-img.entry.js": [98107, "node_modules_ionic_core_dist_esm_ion-img_entry_js"],
        "./ion-infinite-scroll_2.entry.js": [72178, "common", "node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"],
        "./ion-input.entry.js": [20123, "common", "node_modules_ionic_core_dist_esm_ion-input_entry_js"],
        "./ion-item-option_3.entry.js": [18706, "common", "node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"],
        "./ion-item_8.entry.js": [12099, "common", "node_modules_ionic_core_dist_esm_ion-item_8_entry_js"],
        "./ion-loading.entry.js": [84868, "node_modules_ionic_core_dist_esm_ion-loading_entry_js"],
        "./ion-menu_3.entry.js": [54377, "common", "node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"],
        "./ion-modal.entry.js": [15678, "common", "node_modules_ionic_core_dist_esm_ion-modal_entry_js"],
        "./ion-nav_2.entry.js": [16735, "common", "node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"],
        "./ion-picker-column-internal.entry.js": [42322, "common", "node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"],
        "./ion-picker-internal.entry.js": [57754, "node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"],
        "./ion-popover.entry.js": [87686, "common", "node_modules_ionic_core_dist_esm_ion-popover_entry_js"],
        "./ion-progress-bar.entry.js": [48555, "node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"],
        "./ion-radio_2.entry.js": [30568, "node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"],
        "./ion-range.entry.js": [6231, "common", "node_modules_ionic_core_dist_esm_ion-range_entry_js"],
        "./ion-refresher_2.entry.js": [45772, "common", "node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"],
        "./ion-reorder_2.entry.js": [14977, "common", "node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"],
        "./ion-ripple-effect.entry.js": [42886, "node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"],
        "./ion-route_4.entry.js": [54990, "node_modules_ionic_core_dist_esm_ion-route_4_entry_js"],
        "./ion-searchbar.entry.js": [13810, "common", "node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"],
        "./ion-segment_2.entry.js": [2446, "common", "node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"],
        "./ion-select_3.entry.js": [47619, "node_modules_ionic_core_dist_esm_ion-select_3_entry_js"],
        "./ion-slide_2.entry.js": [28393, "node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"],
        "./ion-spinner.entry.js": [56281, "common", "node_modules_ionic_core_dist_esm_ion-spinner_entry_js"],
        "./ion-split-pane.entry.js": [35932, "node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"],
        "./ion-tab-bar_2.entry.js": [57970, "common", "node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"],
        "./ion-tab_2.entry.js": [80298, "common", "node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"],
        "./ion-text.entry.js": [71006, "node_modules_ionic_core_dist_esm_ion-text_entry_js"],
        "./ion-textarea.entry.js": [74783, "node_modules_ionic_core_dist_esm_ion-textarea_entry_js"],
        "./ion-toast.entry.js": [62749, "node_modules_ionic_core_dist_esm_ion-toast_entry_js"],
        "./ion-toggle.entry.js": [55404, "common", "node_modules_ionic_core_dist_esm_ion-toggle_entry_js"],
        "./ion-virtual-scroll.entry.js": [39043, "node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function () {
        return Object.keys(map);
      };

      webpackAsyncContext.id = 50863;
      module.exports = webpackAsyncContext;
      /***/
    }
  },
  /******/
  function (__webpack_require__) {
    // webpackRuntimeModules

    /******/
    var __webpack_exec__ = function __webpack_exec__(moduleId) {
      return __webpack_require__(__webpack_require__.s = moduleId);
    };
    /******/


    __webpack_require__.O(0, ["vendor"], function () {
      return __webpack_exec__(14431);
    });
    /******/


    var __webpack_exports__ = __webpack_require__.O();
    /******/

  }]);
})();
//# sourceMappingURL=main-es5.js.map