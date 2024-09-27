(function () {
  "use strict";

  function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }

  function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }

  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }

  function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }

  function _possibleConstructorReturn(t, e) { if (e && ("object" == typeof e || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }

  function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }

  function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }

  function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }

  function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }

  function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }

  function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }

  function _toArray(r) { return _arrayWithHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }

  function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

  function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }

  function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }

  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  (self["webpackChunkcom_carmd_proscan2"] = self["webpackChunkcom_carmd_proscan2"] || []).push([["default-src_app_services_innova-vci_service_ts"], {
    /***/
    48420:
    /*!***********************************!*\
      !*** ./src/app/app.validators.ts ***!
      \***********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ValidateVin": function ValidateVin() {
          return (
            /* binding */
            _ValidateVin
          );
        },

        /* harmony export */
        "ValidateMileage": function ValidateMileage() {
          return (
            /* binding */
            _ValidateMileage
          );
        },

        /* harmony export */
        "ValidateMileageKm": function ValidateMileageKm() {
          return (
            /* binding */
            _ValidateMileageKm
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _configs_app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./configs/app.config */
      66626);

      function _ValidateVin(control) {
        // let re = new RegExp('^[A-HJ-NPR-Z\\d]{8}[\\dX][A-HJ-NPR-Z\\d]{2}\\d{6}$');
        var re = new RegExp('^[a-zA-Z0-9]{17}$');

        if (control.value.length && !control.value.match(re)) {
          return {
            invalidVin: true
          };
        }

        return null;
      }

      function _ValidateMileage(control) {
        if (isNaN(control.value) || control.value <= 0 || control.value > _configs_app_config__WEBPACK_IMPORTED_MODULE_0__.MAX_MILEAGE_VALUE) {
          return {
            invalidMileage: true
          };
        }

        return null;
      }

      function _ValidateMileageKm(control) {
        if (isNaN(control.value) || control.value <= 0 || control.value > _configs_app_config__WEBPACK_IMPORTED_MODULE_0__.MAX_MILEAGE_VALUE_KM) {
          return {
            invalidMileage: true
          };
        }

        return null;
      }
      /***/

    },

    /***/
    80106:
    /*!********************************************!*\
      !*** ./src/app/services/events.service.ts ***!
      \********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Events": function Events() {
          return (
            /* binding */
            _Events
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      79441);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /**
       * A custom Events service just like Ionic 3 Events https://ionicframework.com/docs/v3/api/util/Events/ which got removed in Ionic 5.
       *
       * @author Shashank Agrawal
       */


      var _Events = /*#__PURE__*/function () {
        function _Events() {
          _classCallCheck(this, _Events);

          this.channels = {};
          this.subscriptions = {};
        }
        /**
         * Subscribe to a topic and provide a single handler/observer.
         * @param topic The name of the topic to subscribe to.
         * @param observer The observer or callback function to listen when changes are published.
         *
         * @returns Subscription from which you can unsubscribe to release memory resources and to prevent memory leak.
         */


        return _createClass(_Events, [{
          key: "subscribe",
          value: function subscribe(topic, observer) {
            if (!this.channels[topic]) {
              // You can also use ReplaySubject with one concequence
              this.channels[topic] = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
            }

            var sub = this.channels[topic].subscribe(observer);
            this.subscriptions[topic] = sub;
            return sub;
          }
        }, {
          key: "unsubscribe",
          value: function unsubscribe(topic) {
            if (this.subscriptions[topic]) {
              // You can also use ReplaySubject with one concequence
              this.subscriptions[topic].unsubscribe();
              delete this.subscriptions[topic];
            }
          }
          /**
           * Publish some data to the subscribers of the given topic.
           * @param topic The name of the topic to emit data to.
           * @param data data in any format to pass on.
           */

        }, {
          key: "publish",
          value: function publish(topic, data) {
            var subject = this.channels[topic];

            if (!subject) {
              // Or you can create a new subject for future subscribers
              return;
            }

            subject.next(data);
          }
          /**
           * When you are sure that you are done with the topic and the subscribers no longer needs to listen to a particular topic, you can
           * destroy the observable of the topic using this method.
           * @param topic The name of the topic to destroy.
           */

        }, {
          key: "destroy",
          value: function destroy(topic) {
            var subject = this.channels[topic];

            if (!subject) {
              return;
            }

            subject.complete();
            delete this.channels[topic];
          }
        }]);
      }();

      _Events.ɵfac = function Events_Factory(t) {
        return new (t || _Events)();
      };

      _Events.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _Events,
        factory: _Events.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    59413:
    /*!***************************************************!*\
      !*** ./src/app/services/innova-helper.service.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "InnovaHelper": function InnovaHelper() {
          return (
            /* binding */
            _InnovaHelper
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _uuid_v4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./uuid-v4 */
      2658);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _InnovaHelper = /*#__PURE__*/function () {
        function _InnovaHelper() {
          _classCallCheck(this, _InnovaHelper);
        }

        return _createClass(_InnovaHelper, null, [{
          key: "convertByteArrayToHexString",
          value: function convertByteArrayToHexString(byteArray) {
            if (!byteArray) return null;
            var hexStr = "";

            for (var i = 0; i < byteArray.length; i++) {
              hexStr += ("0" + (byteArray[i] & 0xff).toString(16)).slice(-2);
            }

            return hexStr;
          }
        }, {
          key: "convertByteArrayToString",
          value: function convertByteArrayToString(byteArray) {
            var startIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            if (!byteArray) return null;
            var res = "";

            for (var i = startIndex; i < byteArray.byteLength; i++) {
              res += String.fromCharCode(byteArray[i]);
            }

            return res;
          }
        }, {
          key: "convertByteArrayToBase64String",
          value: function convertByteArrayToBase64String(byteArray) {
            var startIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            if (!byteArray) return null;
            return window.btoa(_InnovaHelper.convertByteArrayToString(byteArray, startIndex));
          }
        }, {
          key: "convertLittleEndianHexToDecimal",
          value: function convertLittleEndianHexToDecimal(littleEndianHex) {
            return parseInt("0x" + littleEndianHex.match(/../g).reverse().join(""));
          }
        }, {
          key: "formatVIN",
          value: function formatVIN(vin) {
            if (!vin) return "";
            var ret = "";

            for (var x = 0; x < vin.length; x++) {
              if (vin.charCodeAt(x) >= 0 && vin.charCodeAt(x) <= 90) {
                ret += vin.charAt(x);
              }
            }

            if (ret.length < 17) return "";

            if (ret.length > 17) {
              ret = ret.substring(0, 17);
            }

            return ret;
          }
        }, {
          key: "isLastPackage",
          value: function isLastPackage(buffer, totalLength) {
            return buffer && buffer.length === totalLength;
          }
        }, {
          key: "convertBytesToInt",
          value: function convertBytesToInt(byteHigh, byteLow) {
            return byteHigh | byteLow << 8;
          }
        }, {
          key: "convertStringToByteArray",
          value: function convertStringToByteArray(text) {
            var array = new Uint8Array(text.length);

            for (var i = 0; i < text.length; i++) {
              array[i] = text.charCodeAt(i);
            }

            return array;
          }
        }, {
          key: "isInvalidOrEmptyGUID",
          value: function isInvalidOrEmptyGUID(obj) {
            return undefined === obj || null === obj || obj.length < 36 || "00000000-0000-0000-0000-000000000000" == obj || "ffffffff-ffff-ffff-ffff-ffffffffffff" == (obj + "").toLowerCase();
          }
        }, {
          key: "isInvalidOrEmptyVIN",
          value: function isInvalidOrEmptyVIN(obj) {
            return undefined === obj || null === obj || obj.length != 17 || "00000000000000000000000000000000" == obj || this._ArrayOfZero(this.convertStringToByteArray(obj));
          }
        }, {
          key: "_ArrayOfZero",
          value: function _ArrayOfZero(obj) {
            for (var i = 0; i < obj.length; i++) {
              if (obj[i] != 0) {
                return false;
              }
            }

            return true;
          }
        }, {
          key: "convertBase64ToBinary",
          value: function convertBase64ToBinary(base64) {
            var raw = window.atob(base64);
            var rawLength = raw.length;
            var array = new Uint8Array(new ArrayBuffer(rawLength));

            for (var i = 0; i < rawLength; i++) {
              array[i] = raw.charCodeAt(i);
            }

            return array;
          }
        }, {
          key: "convertBase",
          value: function convertBase(num) {
            return {
              from: function from(baseFrom) {
                return {
                  to: function to(baseTo) {
                    return parseInt(num, baseFrom).toString(baseTo);
                  }
                };
              }
            };
          }
        }, {
          key: "combineUArray",
          value: function combineUArray() {
            // let len = params.map((arr) => arr.length)
            // .reduce((acc, cur) => acc + cur, 0);
            var res = [];

            for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
              params[_key] = arguments[_key];
            }

            params.forEach(function (arr) {
              arr.forEach(function (element) {
                res.push(element);
              });
            });
            return new Uint8Array(res);
          }
        }, {
          key: "decToBytes",
          value: function decToBytes(decimalValue) {
            var byte0 = decimalValue & 0xff;
            var byte1 = decimalValue >> 8 & 0xff;
            return new Uint8Array([byte0, byte1]);
          }
        }]);
      }();

      _InnovaHelper.convertHexToAscii = function (hexStr) {
        if (!hexStr) return null;
        var hex = hexStr.toString();
        var str = "";

        for (var n = 0; n < hex.length; n += 2) {
          str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
        } //str = this.removeNonAscii( str );


        return str;
      };

      _InnovaHelper.removeNonAscii = function (str) {
        if (!str) return ""; //remove \u0000 in string

        str = str.replace(/\0/g, "");
        var ret = "";

        for (var x = 0; x < str.length; x++) {
          if (str.charCodeAt(x) >= 0 && str.charCodeAt(x) <= 127) {
            ret += str.charAt(x);
          }
        }

        return ret;
      };

      _InnovaHelper.concatTypedArray = function (a, b) {
        if (!a) a = new Uint8Array(0);
        if (!b) b = new Uint8Array(0);
        var temp = new Uint8Array(a.byteLength + b.byteLength);
        temp.set(new Uint8Array(a), 0);
        temp.set(new Uint8Array(b), a.byteLength);
        return temp;
      };

      _InnovaHelper.generateUuid = function () {
        return _uuid_v4__WEBPACK_IMPORTED_MODULE_0__.UuidV4.uuid();
      };

      _InnovaHelper.generateGuid = function () {
        var uuid = _uuid_v4__WEBPACK_IMPORTED_MODULE_0__.UuidV4.uuid();

        return _InnovaHelper.convertUuidToGuid(uuid);
      }; //convert uuidBytes to uuid


      _InnovaHelper.convertByteArrayToUuid = function (byteArray) {
        if (!byteArray || byteArray.length != 16) return null;
        return _uuid_v4__WEBPACK_IMPORTED_MODULE_0__.UuidV4.parseBinary(byteArray); //return UUID( {random: byteArray} );
      }; //convert uuidBytes to guid


      _InnovaHelper.convertByteArrayToGuid = function (byteArray) {
        if (!byteArray || byteArray.length != 16) return null;
        return _uuid_v4__WEBPACK_IMPORTED_MODULE_0__.UuidV4.parseBinary(this.convertUuidBytesToGuidBytes(byteArray));
      };

      _InnovaHelper.convertUuidToBytes = function (id) {
        return _uuid_v4__WEBPACK_IMPORTED_MODULE_0__.UuidV4.parse(id);
      };

      _InnovaHelper.convertUuidBytesToGuidBytes = function (uuidByteArray) {
        var byteArray = JSON.parse(JSON.stringify(uuidByteArray)); //swap first 4

        var swap = byteArray[0];
        byteArray[0] = byteArray[3];
        byteArray[3] = swap;
        swap = byteArray[1];
        byteArray[1] = byteArray[2];
        byteArray[2] = swap; //swap next 2

        swap = byteArray[4];
        byteArray[4] = byteArray[5];
        byteArray[5] = swap; //swap next 2

        swap = byteArray[6];
        byteArray[6] = byteArray[7];
        byteArray[7] = swap;
        return byteArray;
      };

      _InnovaHelper.convertUuidToGuid = function (uuid) {
        return this.convertByteArrayToGuid(this.convertUuidToBytes(uuid));
      };

      _InnovaHelper.ɵfac = function InnovaHelper_Factory(t) {
        return new (t || _InnovaHelper)();
      };

      _InnovaHelper.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _InnovaHelper,
        factory: _InnovaHelper.ɵfac
      });
      /***/
    },

    /***/
    51572:
    /*!****************************************************************************!*\
      !*** ./src/app/services/innova-report-helper/innova-report-data-models.ts ***!
      \****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MANUFACTURE_MAKE_DEFINITION": function MANUFACTURE_MAKE_DEFINITION() {
          return (
            /* binding */
            _MANUFACTURE_MAKE_DEFINITION
          );
        },

        /* harmony export */
        "getManufactureByMake": function getManufactureByMake() {
          return (
            /* binding */
            _getManufactureByMake
          );
        },

        /* harmony export */
        "MONITOR_DEFINITION": function MONITOR_DEFINITION() {
          return (
            /* binding */
            _MONITOR_DEFINITION
          );
        },

        /* harmony export */
        "BRAKE_LIFE_DEFINITION_2021": function BRAKE_LIFE_DEFINITION_2021() {
          return (
            /* binding */
            _BRAKE_LIFE_DEFINITION_
          );
        },

        /* harmony export */
        "OIL_LIFE_DEFINITION_2021": function OIL_LIFE_DEFINITION_2021() {
          return (
            /* binding */
            _OIL_LIFE_DEFINITION_
          );
        },

        /* harmony export */
        "OIL_LEVEL_DEFINITION": function OIL_LEVEL_DEFINITION() {
          return (
            /* binding */
            _OIL_LEVEL_DEFINITION
          );
        },

        /* harmony export */
        "BRAKE_LIFE_DEFINITION": function BRAKE_LIFE_DEFINITION() {
          return (
            /* binding */
            _BRAKE_LIFE_DEFINITION
          );
        },

        /* harmony export */
        "OIL_LIFE_DEFINITION": function OIL_LIFE_DEFINITION() {
          return (
            /* binding */
            _OIL_LIFE_DEFINITION
          );
        },

        /* harmony export */
        "TRANSMISSION_FLUID_TEMPERATURE_DEFINITION": function TRANSMISSION_FLUID_TEMPERATURE_DEFINITION() {
          return (
            /* binding */
            _TRANSMISSION_FLUID_TEMPERATURE_DEFINITION
          );
        },

        /* harmony export */
        "TIRE_PRESSURES_DEFINITION": function TIRE_PRESSURES_DEFINITION() {
          return (
            /* binding */
            _TIRE_PRESSURES_DEFINITION
          );
        }
        /* harmony export */

      });

      var _MANUFACTURE_MAKE_DEFINITION = [{
        Manufacturer: 'BMW',
        Make: 'BMW'
      }, {
        Manufacturer: 'BMW',
        Make: 'Mini'
      }, {
        Manufacturer: 'Chrysler',
        Make: 'Alfa Romeo(FCA)'
      }, {
        Manufacturer: 'Chrysler',
        Make: 'Chrysler'
      }, {
        Manufacturer: 'Chrysler',
        Make: 'Dodge'
      }, {
        Manufacturer: 'Chrysler',
        Make: 'Eagle'
      }, {
        Manufacturer: 'Chrysler',
        Make: 'Fiat(FCA)'
      }, {
        Manufacturer: 'Chrysler',
        Make: 'Jeep'
      }, {
        Manufacturer: 'Chrysler',
        Make: 'Plymouth'
      }, {
        Manufacturer: 'Chrysler',
        Make: 'Ram'
      }, {
        Manufacturer: 'Chrysler',
        Make: 'SRT'
      }, {
        Manufacturer: 'Ford',
        Make: 'Ford'
      }, {
        Manufacturer: 'Ford',
        Make: 'Lincoln'
      }, {
        Manufacturer: 'Ford',
        Make: 'Mercury'
      }, {
        Manufacturer: 'GM',
        Make: 'Buick'
      }, {
        Manufacturer: 'GM',
        Make: 'Cadillac'
      }, {
        Manufacturer: 'GM',
        Make: 'Chevrolet'
      }, {
        Manufacturer: 'GM',
        Make: 'Geo'
      }, {
        Manufacturer: 'GM',
        Make: 'GMC'
      }, {
        Manufacturer: 'GM',
        Make: 'Hummer'
      }, {
        Manufacturer: 'GM',
        Make: 'Oldsmobile'
      }, {
        Manufacturer: 'GM',
        Make: 'Pontiac'
      }, {
        Manufacturer: 'GM',
        Make: 'Saab'
      }, {
        Manufacturer: 'GM',
        Make: 'Saturn'
      }, {
        Manufacturer: 'Honda',
        Make: 'Acura'
      }, {
        Manufacturer: 'Honda',
        Make: 'Honda'
      }, {
        Manufacturer: 'Honda',
        Make: 'Honda '
      }, {
        Manufacturer: 'Hyundai',
        Make: 'Hyundai'
      }, {
        Manufacturer: 'Hyundai',
        Make: 'Kia'
      }, {
        Manufacturer: 'Jaguar Land Rover',
        Make: 'Jaguar'
      }, {
        Manufacturer: 'Jaguar Land Rover',
        Make: 'Land Rover'
      }, {
        Manufacturer: 'Mazda',
        Make: 'Mazda'
      }, {
        Manufacturer: 'Mercedes-Benz',
        Make: 'Mercedes-Benz'
      }, {
        Manufacturer: 'Mercedes-Benz',
        Make: 'Smart'
      }, {
        Manufacturer: 'Mitsubishi',
        Make: 'Mitsubishi'
      }, {
        Manufacturer: 'Nissan',
        Make: 'Infiniti'
      }, {
        Manufacturer: 'Nissan',
        Make: 'Nissan'
      }, {
        Manufacturer: 'Subaru',
        Make: 'Subaru'
      }, {
        Manufacturer: 'Toyota',
        Make: 'Lexus'
      }, {
        Manufacturer: 'Toyota',
        Make: 'Scion'
      }, {
        Manufacturer: 'Toyota',
        Make: 'Toyota'
      }, {
        Manufacturer: 'Volkswagen',
        Make: 'Audi'
      }, {
        Manufacturer: 'Volkswagen',
        Make: 'Volkswagen'
      }, {
        Manufacturer: 'Volvo',
        Make: 'Volvo'
      }];

      function _getManufactureByMake(make) {
        make = (make || '').replace(/[^\w]/gi, '').toUpperCase();

        var manufacturer = _MANUFACTURE_MAKE_DEFINITION.find(function (m) {
          return m.Make.replace(/[^\w]/gi, '').toUpperCase() === make;
        });

        return manufacturer ? manufacturer.Manufacturer : '';
      } // https://codebeautify.org/xmltojson


      var _MONITOR_DEFINITION = [// [shortName, enName, spName, frName ....]
      ['mis', 'Misfire Monitor', 'El monitor de fallo de encendido', 'La sonde des ratés'], ['fue', 'Fuel System Monitor', 'El monitor del sistema de combustible', 'La sonde du système de carburation'], ['ccm', 'Comprehensive Component Monitor (CCM)', 'El monitor general de componentes (CCM)', 'La sonde globale des composants (SGC)'], ['cat', 'Catalyst Monitor', 'Monitor del convertidor catalítico', 'La sonde du convertisseur catalytique'], ['hca', 'Heated Catalyst Monitor', 'Monitor del sistema EGR', "Sonde de catalyseur d'hydrocarbures non méthaniques"], ['eva', 'EVAP System Monitor', 'Monitor del sistema EVAP', "La sonde du système d'évaporation (EVAP)"], ['air', 'Secondary Air System Monitor', 'Monitor del sistema secundario de aire', "La sonde du système d'air secondaire"], ['o2s', 'Oxygen Sensor Monitor', 'Monitor del sensor de oxígeno', "La sonde du détecteur d'oxygène"], ['htr', 'Oxygen Sensor Heater Monitor', 'Monitor del calefactor del sensor de oxígeno'], ['nox', 'NOx Adsorber Monitor', 'Monitor de adsorción NOx', "Sonde d'absorption de NOx"], ['egs', 'Exhaust Gas Sensor Monitor', 'Monitor de sensor de gases de escape', "Sonde du capteur de gaz d'échappement"], ['hcc', 'NMHC Monitor', 'Monitor NMHC', 'La sonde du convertisseur catalytique chauffé'], ['egr', 'EGR System Monitor', 'Monitor del sistema EGR', 'La sonde du système de recirculation des gaz du carter («EGR»)'], ['dpf', 'PM Filter Monitor', 'Monitor de filtro PM', 'Sonde de filtre à particules'], ['ect', 'Engine Coolant Temperature', 'Monitor de ECT', 'Sonde de ECT'], ['bps', 'Boost Pressure System Monitor', 'Monitor del sistema de presión de refuerzo', 'Sonde du système de pression de suralimentation']].map(function (item) {
        return item.join('/').toUpperCase().split('/');
      }); // UPPERCASE ALL


      var _BRAKE_LIFE_DEFINITION_ = [{
        ouput: [{
          applocation: 'Needs Attention',
          appmessage: 'Inspect'
        }, {
          applocation: 'Passed',
          appmessage: 'Good Condition'
        }],
        _Make: 'CHEVROLET',
        _PIDs: 'Brake Pad Check',
        _Group: 'Group 2',
        _Operation: 'Equality',
        _Condition: 'Low|OFF',
        _ValueType: 'string'
      }, {
        ouput: [{
          applocation: 'Needs Attention',
          appmessage: 'Inspect'
        }, {
          applocation: 'Passed',
          appmessage: 'Good Condition'
        }],
        _Make: 'BMW',
        _PIDs: 'Rear Brake Pad Check',
        _Group: 'Group 1',
        _Operation: 'Comparison',
        _Condition: '50',
        _ValueType: 'int'
      }, {
        ouput: [{
          applocation: 'Needs Attention',
          appmessage: 'Inspect'
        }, {
          applocation: 'Passed',
          appmessage: 'Good Condition'
        }],
        _Make: 'BMW',
        _PIDs: 'Front Brake Pad Check',
        _Group: 'Group 1',
        _Operation: 'Comparison',
        _Condition: '50',
        _ValueType: 'int'
      }, {
        ouput: [{
          applocation: 'Needs Attention',
          appmessage: 'Inspect'
        }, {
          applocation: 'Passed',
          appmessage: 'Good Condition'
        }],
        _Make: 'FORD',
        _PIDs: 'Brake Pad Check',
        _Group: 'Group 2',
        _Operation: 'Equality',
        _Condition: 'Low|OFF',
        _ValueType: 'string'
      }, {
        ouput: [{
          applocation: 'Needs Attention',
          appmessage: 'Inspect'
        }, {
          applocation: 'Passed',
          appmessage: 'Good Condition'
        }],
        _Make: 'AUDI',
        _PIDs: 'Brake Pad Check',
        _Group: 'Group 2',
        _Operation: 'Equality',
        _Condition: 'Inactive|Wear indicat.',
        _ValueType: 'string'
      }, {
        ouput: [{
          applocation: 'Needs Attention',
          appmessage: 'Inspect'
        }, {
          applocation: 'Passed',
          appmessage: 'Good Condition'
        }],
        _Make: 'LINCOLN',
        _PIDs: 'Brake Pad Check',
        _Group: 'Group 2',
        _Operation: 'Equality',
        _Condition: 'Low|OFF',
        _ValueType: 'string'
      }, {
        ouput: [{
          applocation: 'Needs Attention',
          appmessage: 'Inspect'
        }, {
          applocation: 'Passed',
          appmessage: 'Good Condition'
        }],
        _Make: 'MERCURY',
        _PIDs: 'Brake Pad Check',
        _Group: 'Group 2',
        _Operation: 'Equality',
        _Condition: 'Low|OFF',
        _ValueType: 'string'
      }, {
        ouput: [{
          applocation: 'Needs Attention',
          appmessage: 'Inspect'
        }, {
          applocation: 'Passed',
          appmessage: 'Good Condition'
        }],
        _Make: 'MERCEDES-BENZ',
        _PIDs: 'Brake Pad Check',
        _Group: 'Group 2',
        _Operation: 'Equality',
        _Condition: 'Off|Not OK|Not Present',
        _ValueType: 'string'
      }, {
        ouput: [{
          applocation: 'Needs Attention',
          appmessage: 'Inspect'
        }, {
          applocation: 'Passed',
          appmessage: 'Good Condition'
        }],
        _Make: 'MERCEDES-BENZ',
        _PIDs: 'Rear Brake Pad Check',
        _Group: 'Group 2',
        _Operation: 'Equality',
        _Condition: 'Off|Not OK|Not Present',
        _ValueType: 'string'
      }, {
        ouput: [{
          applocation: 'Needs Attention',
          appmessage: 'Inspect'
        }, {
          applocation: 'Passed',
          appmessage: 'Good Condition'
        }],
        _Make: 'MERCEDES-BENZ',
        _PIDs: 'Front Brake Pad Check',
        _Group: 'Group 2',
        _Operation: 'Equality',
        _Condition: 'Off|Not OK|Not Present',
        _ValueType: 'string'
      }, {
        ouput: [{
          applocation: 'Needs Attention',
          appmessage: 'Inspect'
        }, {
          applocation: 'Passed',
          appmessage: 'Good Condition'
        }],
        _Make: 'VOLKSWAGEN',
        _PIDs: 'Brake Pad Check',
        _Group: 'Group 2',
        _Operation: 'Equality',
        _Condition: 'Inactive|Wear indicat.',
        _ValueType: 'string'
      }]; // Update since https://iectech.atlassian.net/browse/TABD-224

      var _OIL_LIFE_DEFINITION_ = [{
        ouput: [{
          applocation: 'Needs Attention',
          appmessage: '{0:00}%'
        }, {
          applocation: 'Passed',
          appmessage: '{0:00}%'
        }],
        _Make: 'CHEVROLET',
        _PIDs: 'Oil Life Remaining',
        _Group: 'Group 1',
        _Operation: 'Comparison',
        _Condition: '20',
        _ValueType: 'int'
      }, {
        ouput: [{
          applocation: 'Needs Attention',
          appmessage: '{0:00}%'
        }, {
          applocation: 'Passed',
          appmessage: '{0:00}%'
        }],
        _Make: 'BMW',
        _PIDs: 'Oil Life Remaining',
        _Group: 'Group 1',
        _Operation: 'Comparison',
        _Condition: '20',
        _ValueType: 'int'
      }, {
        ouput: [{
          applocation: 'Needs Attention',
          appmessage: '{0:00}%'
        }, {
          applocation: 'Passed',
          appmessage: '{0:00}%'
        }],
        _Make: 'FORD',
        _PIDs: 'Oil Life Remaining',
        _Group: 'Group 1',
        _Operation: 'Comparison',
        _Condition: '15',
        _ValueType: 'int'
      }, {
        ouput: [{
          applocation: 'Needs Attention',
          appmessage: '{0:00}%'
        }, {
          applocation: 'Passed',
          appmessage: '{0:00}%'
        }],
        _Make: 'OTHERS',
        _PIDs: 'Oil Life Remaining',
        _Group: 'Group 1',
        _Operation: 'Comparison',
        _Condition: '20',
        _ValueType: 'int'
      }, {
        ouput: [{
          applocation: 'Needs Attention',
          appmessage: '{0:00}%'
        }, {
          applocation: 'Passed',
          appmessage: '{0:00}%'
        }],
        _Make: 'GM',
        _PIDs: 'Oil Life Remaining',
        _Group: 'Group 1',
        _Operation: 'Comparison',
        _Condition: '20',
        _ValueType: 'int'
      }, {
        ouput: [{
          applocation: 'Needs Attention',
          appmessage: '{0:00}%'
        }, {
          applocation: 'Passed',
          appmessage: '{0:00}%'
        }],
        _Make: 'LINCOLN',
        _PIDs: 'Oil Life Remaining',
        _Group: 'Group 1',
        _Operation: 'Comparison',
        _Condition: '15',
        _ValueType: 'int'
      }, {
        ouput: [{
          applocation: 'Needs Attention',
          appmessage: '{0:00}%'
        }, {
          applocation: 'Passed',
          appmessage: '{0:00}%'
        }],
        _Make: 'MAZDA',
        _PIDs: 'Oil Life Remaining',
        _Group: 'Group 1',
        _Operation: 'Comparison',
        _Condition: '15',
        _ValueType: 'int'
      }, {
        ouput: [{
          applocation: 'Needs Attention',
          appmessage: '{0:00}%'
        }, {
          applocation: 'Passed',
          appmessage: '{0:00}%'
        }],
        _Make: 'MERCEDES-BENZ',
        _PIDs: 'Oil Life Remaining',
        _Group: 'Group 1',
        _Operation: 'Comparison',
        _Condition: '2',
        _ValueType: 'int'
      }, {
        ouput: [{
          applocation: 'Needs Attention',
          appmessage: '{0:00}%'
        }, {
          applocation: 'Passed',
          appmessage: '{0:00}%'
        }],
        _Make: 'HONDA',
        _PIDs: 'Oil Life Remaining',
        _Group: 'Group 1',
        _Operation: 'Comparison',
        _Condition: '15',
        _ValueType: 'int'
      }, {
        ouput: [{
          applocation: 'Needs Attention',
          appmessage: '{0:00}%'
        }, {
          applocation: 'Passed',
          appmessage: '{0:00}%'
        }],
        _Make: 'ACURA',
        _PIDs: 'Oil Life Remaining',
        _Group: 'Group 1',
        _Operation: 'Comparison',
        _Condition: '15',
        _ValueType: 'int'
      }, {
        ouput: [{
          applocation: 'Needs Attention',
          appmessage: 'Poor'
        }, {
          applocation: 'Passed',
          appmessage: 'Good'
        }],
        _Make: 'VOLKSWAGEN',
        _PIDs: 'Oil Life Remaining',
        _Group: 'Group 2',
        _Operation: 'Equality',
        _Condition: 'Poor|Poor oil quality',
        _ValueType: 'string'
      }, {
        ouput: [{
          applocation: 'Needs Attention',
          appmessage: 'Poor'
        }, {
          applocation: 'Passed',
          appmessage: 'Good'
        }],
        _Make: 'AUDI',
        _PIDs: 'Oil Life Remaining',
        _Group: 'Group 2',
        _Operation: 'Equality',
        _Condition: 'Poor|Poor oil quality',
        _ValueType: 'string'
      }]; // Defined by 'TelematicsDongle_PIDs_Specification (Jul292021).xlsx'

      var _OIL_LEVEL_DEFINITION = [{
        ouput: [{
          applocation: 'Needs Attention',
          appmessage: 'XX %'
        }, {
          applocation: 'Passed',
          appmessage: 'XX %'
        }],
        _Manufacture: 'VOLVO',
        _Group: 'Group 1',
        _Operation: 'Comparison',
        _Condition: 'x<25 || x>57,,x>=35 && x<=57',
        _ValueType: 'int'
      }, {
        ouput: [{
          applocation: 'Needs Attention',
          appmessage: 'Inspect'
        }, {
          applocation: 'Passed',
          appmessage: 'Good Condition'
        }],
        _Manufacture: 'OTHERS',
        _Group: 'Group 2',
        _Operation: 'Equality',
        _Condition: '??,,OK|OFF|Not present|Not activate|Not Actived|Brake lining 1|Brake Pads Not Worn',
        _ValueType: 'int'
      }]; // Defined by 'TelematicsDongle_PIDs_Specification (Jul292021).xlsx'

      var _BRAKE_LIFE_DEFINITION = [{
        ouput: [{
          applocation: 'Needs Attention',
          appmessage: 'XX %'
        }, {
          applocation: 'Passed',
          appmessage: 'XX %'
        }],
        _Manufacture: 'BMW',
        _Group: 'Group 1',
        _Operation: 'Comparison',
        _Condition: 'x<50,,x>51',
        _ValueType: 'int'
      }, {
        ouput: [{
          applocation: 'Needs Attention',
          appmessage: 'Inspect'
        }, {
          applocation: 'Passed',
          appmessage: 'Good Condition'
        }],
        _Manufacture: 'OTHERS',
        _Group: 'Group 2',
        _Operation: 'Equality',
        _Condition: 'Others,,OK|OFF|Not Set|Not present|Not activate|Not Actived|Not Activated|Brake lining 1|Brake Pads Not Worn',
        _ValueType: 'int'
      }]; // Defined by 'TelematicsDongle_PIDs_Specification (Jul292021).xlsx'

      var _OIL_LIFE_DEFINITION = [{
        ouput: [{
          applocation: 'Needs Attention',
          appmessage: 'XX %'
        }, {
          applocation: 'Passed',
          appmessage: 'XX %'
        }],
        _Manufacture: 'FORD|HONDA',
        _Group: 'Group 1',
        _Operation: 'Comparison',
        _Condition: 'x<15,,x>16',
        _ValueType: 'int'
      }, {
        ouput: [{
          applocation: 'Needs Attention',
          appmessage: 'XX %'
        }, {
          applocation: 'Passed',
          appmessage: 'XX %'
        }],
        _Manufacture: 'BMW|GM|CHRYSLER|SUBARU',
        _Group: 'Group 1',
        _Operation: 'Comparison',
        _Condition: 'x<20,,x>21',
        _ValueType: 'int'
      }, {
        ouput: [{
          applocation: 'Needs Attention',
          appmessage: 'Poor'
        }, {
          applocation: 'Passed',
          appmessage: 'Good'
        }],
        _Manufacture: 'FORD',
        _Group: 'Group 2',
        _Operation: 'Equality',
        _Condition: 'Low Oil,,OK',
        _ValueType: 'string'
      }, {
        ouput: [{
          applocation: 'Needs Attention',
          appmessage: 'Poor'
        }, {
          applocation: 'Passed',
          appmessage: 'Good'
        }],
        _Manufacture: 'VOLKSWAGEN',
        _Group: 'Group 2',
        _Operation: 'Equality',
        _Condition: 'Poor|Poor oil quality,,Good|Good oil quality',
        _ValueType: 'string'
      }, {
        ouput: [{
          applocation: 'Needs Attention',
          appmessage: 'Poor'
        }, {
          applocation: 'Passed',
          appmessage: 'Good'
        }],
        _Manufacture: 'VOLKSWAGEN',
        _Group: 'Group 3',
        _Operation: 'Comparison',
        _Condition: 'x<>1,,x==1',
        _ValueType: 'int'
      }, {
        ouput: [{
          applocation: 'Needs Attention',
          appmessage: 'Poor'
        }, {
          applocation: 'Passed',
          appmessage: 'Good'
        }],
        _Manufacture: 'MERCEDES-BENZ',
        _Group: 'Group 3',
        _Operation: 'Comparison',
        _Condition: 'x<1 || x>4,,x>1 && x<4',
        _ValueType: 'int'
      }]; // Defined by 'TelematicsDongle_PIDs_Specification (Jul292021).xlsx'

      var _TRANSMISSION_FLUID_TEMPERATURE_DEFINITION = [{
        ouput: [{
          applocation: 'Needs Attention',
          appmessage: 'Inspect'
        }, {
          applocation: 'Passed',
          appmessage: 'Good Condition'
        }],
        _Manufacture: 'TOYOTA|SUBARU',
        _PIDs: 'Transmission Fluid Temperature',
        _Group: 'Group 2',
        _Operation: 'Comparison',
        _Condition: 'x>=212,,176<=x && x<=194',
        _ValueType: 'int'
      }, {
        ouput: [{
          applocation: 'Needs Attention',
          appmessage: 'Inspect'
        }, {
          applocation: 'Passed',
          appmessage: 'Good Condition'
        }],
        _Manufacture: 'BMW|HONDA|ACURA',
        _PIDs: 'Transmission Fluid Temperature',
        _Group: 'Group 2',
        _Operation: 'Comparison',
        _Condition: 'x>=230,,x<230',
        _ValueType: 'int'
      }, {
        ouput: [{
          applocation: 'Needs Attention',
          appmessage: 'Inspect'
        }, {
          applocation: 'Passed',
          appmessage: 'Good Condition'
        }],
        _Manufacture: 'GM',
        _PIDs: 'Transmission Fluid Temperature',
        _Group: 'Group 2',
        _Operation: 'Comparison',
        _Condition: 'x>240,,x<240',
        _ValueType: 'int'
      }, {
        ouput: [{
          applocation: 'Needs Attention',
          appmessage: 'Inspect'
        }, {
          applocation: 'Passed',
          appmessage: 'Good Condition'
        }],
        _Manufacture: 'FORD|LINCOLN|VOLKSWAGEN|AUDI',
        _PIDs: 'Transmission Fluid Temperature',
        _Group: 'Group 2',
        _Operation: 'Comparison',
        _Condition: 'x>=221,,176<=x && x<=203',
        _ValueType: 'int'
      }, {
        ouput: [{
          applocation: 'Needs Attention',
          appmessage: 'Inspect'
        }, {
          applocation: 'Passed',
          appmessage: 'Good Condition'
        }],
        _Manufacture: 'HYUNDAI',
        _PIDs: 'Transmission Fluid Temperature',
        _Group: 'Group 2',
        _Operation: 'Comparison',
        _Condition: 'x>=221,,176<=x && x<=221',
        _ValueType: 'int'
      }, {
        ouput: [{
          applocation: 'Needs Attention',
          appmessage: 'Inspect'
        }, {
          applocation: 'Passed',
          appmessage: 'Good Condition'
        }],
        _Manufacture: 'MERCURY',
        _PIDs: 'Transmission Fluid Temperature',
        _Group: 'Group 2',
        _Operation: 'Comparison',
        _Condition: 'x>=221,,176<=x && x<=194',
        _ValueType: 'int'
      }, {
        ouput: [{
          applocation: 'Needs Attention',
          appmessage: 'Inspect'
        }, {
          applocation: 'Passed',
          appmessage: 'Good Condition'
        }],
        _Manufacture: 'MERCEDES-BENZ',
        _PIDs: 'Transmission Fluid Temperature',
        _Group: 'Group 2',
        _Operation: 'Comparison',
        _Condition: 'x>=248,,x<248',
        _ValueType: 'int'
      }, {
        ouput: [{
          applocation: 'Needs Attention',
          appmessage: 'Inspect'
        }, {
          applocation: 'Passed',
          appmessage: 'Good Condition'
        }],
        _Manufacture: 'MAZDA',
        _PIDs: 'Transmission Fluid Temperature',
        _Group: 'Group 2',
        _Operation: 'Comparison',
        _Condition: 'x>=266,,x<266',
        _ValueType: 'int'
      }, {
        ouput: [{
          applocation: 'Needs Attention',
          appmessage: 'Inspect'
        }, {
          applocation: 'Passed',
          appmessage: 'Good Condition'
        }],
        _Manufacture: 'VOLVO',
        _PIDs: 'Transmission Fluid Temperature',
        _Group: 'Group 2',
        _Operation: 'Comparison',
        _Condition: 'x>=194,,176<=x && x<=194',
        _ValueType: 'int'
      }, {
        ouput: [{
          applocation: 'Needs Attention',
          appmessage: 'Inspect'
        }, {
          applocation: 'Passed',
          appmessage: 'Good Condition'
        }],
        _Manufacture: 'CHRYSLER',
        _PIDs: 'Transmission Fluid Temperature',
        _Group: 'Group 2',
        _Operation: 'Comparison',
        _Condition: 'x>=200,,x<=200',
        _ValueType: 'int'
      }, {
        ouput: [{
          applocation: 'Needs Attention',
          appmessage: 'Inspect'
        }, {
          applocation: 'Passed',
          appmessage: 'Good Condition'
        }],
        _Manufacture: 'JAGUAR LAND ROVER',
        _PIDs: 'Transmission Fluid Temperature',
        _Group: 'Group 2',
        _Operation: 'Comparison',
        _Condition: 'x>=275,,176<=x && x<=221',
        _ValueType: 'int'
      }, {
        ouput: [{
          applocation: 'Needs Attention',
          appmessage: 'Inspect'
        }, {
          applocation: 'Passed',
          appmessage: 'Good Condition'
        }],
        _Manufacture: 'NISSAN',
        _PIDs: 'Transmission Fluid Temperature',
        _Group: 'Group 2',
        _Operation: 'Comparison',
        _Condition: 'x>=293,,x<293',
        _ValueType: 'int'
      }, {
        ouput: [{
          applocation: 'Needs Attention',
          appmessage: 'Inspect'
        }, {
          applocation: 'Passed',
          appmessage: 'Good Condition'
        }],
        _Manufacture: 'MITSUBISHI',
        _PIDs: 'Transmission Fluid Temperature',
        _Group: 'Group 2',
        _Operation: 'Comparison',
        _Condition: 'x>176,,58<=x && x<=176',
        _ValueType: 'int'
      }, {
        ouput: [{
          applocation: 'Needs Attention',
          appmessage: 'Inspect'
        }, {
          applocation: 'Passed',
          appmessage: 'Good Condition'
        }],
        _Manufacture: 'MITSUBISHI',
        _PIDs: 'Transmission Fluid Temperature',
        _Group: 'Group 2',
        _Operation: 'Comparison',
        _Condition: 'x>161,,143<=x && x<=161',
        _Unit: 'COUNT',
        _ValueType: 'int'
      }];
      var _TIRE_PRESSURES_DEFINITION = [{
        _Pid: '1',
        _Name: 'left front tire pressure',
        _ThresholdName: 'left front tire pressure threshold',
        _StandardName: 'left front tire pressure standard',
        _StatusName: 'left front tire pressure status',
        _OtherName: 'tire 1 pressure',
        _OtherThresholdName: 'tire 1 pressure threshold',
        _OtherStandardName: 'tire 1 pressure standard',
        _OtherStatusName: 'tire 1 pressure status'
      }, {
        _Pid: '2',
        _Name: 'left rear tire pressure',
        _ThresholdName: 'left rear tire pressure threshold',
        _StandardName: 'left rear tire pressure standard',
        _StatusName: 'left rear tire pressure status',
        _OtherName: 'tire 2 pressure',
        _OtherThresholdName: 'tire 2 pressure threshold',
        _OtherStandardName: 'tire 2 pressure standard',
        _OtherStatusName: 'tire 2 pressure status'
      }, {
        _Pid: '3',
        _Name: 'right front tire pressure',
        _ThresholdName: 'right front tire pressure threshold',
        _StandardName: 'right front tire pressure standard',
        _StatusName: 'right front tire pressure status',
        _OtherName: 'tire 3 pressure',
        _OtherThresholdName: 'tire 3 pressure threshold',
        _OtherStandardName: 'tire 3 pressure standard',
        _OtherStatusName: 'tire 3 pressure status'
      }, {
        _Pid: '4',
        _Name: 'right rear tire pressure',
        _ThresholdName: 'right rear tire pressure threshold',
        _StandardName: 'right rear tire pressure standard',
        _StatusName: 'right rear tire pressure status',
        _OtherName: 'tire 4 pressure',
        _OtherThresholdName: 'tire 4 pressure threshold',
        _OtherStandardName: 'tire 4 pressure standard',
        _OtherStatusName: 'tire 4 pressure status'
      }, {
        _Pid: '5',
        _Name: 'spare tire pressure',
        _ThresholdName: 'spare tire pressure threshold',
        _StandardName: 'spare tire pressure standard',
        _StatusName: 'spare tire pressure status',
        _OtherName: 'tire 5 pressure',
        _OtherThresholdName: 'tire 5 pressure threshold',
        _OtherStandardName: 'tire 5 pressure standard',
        _OtherStatusName: 'tire 5 pressure status'
      }];
      /***/
    },

    /***/
    6645:
    /*!***********************************************************************!*\
      !*** ./src/app/services/innova-vci-service/src/command/BufferResp.ts ***!
      \***********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BufferResp": function BufferResp() {
          return (
            /* binding */
            _BufferResp
          );
        }
        /* harmony export */

      });

      var _BufferResp = /*#__PURE__*/function () {
        function _BufferResp(buffer, fLog) {
          _classCallCheck(this, _BufferResp);

          this.buffer = buffer;
          this.fLog = fLog;
          this.command = 0;
          this.isCompleted = false;
          this.payload = [];
          this.expectedLength = 0;
          this.error = {};
          this.isCompleted = false;
          this.payload = [];
          this.expectedLength = 0;
          this.error = {}; //Parse the 1st buffer

          this.command = buffer[1] - 1;
          var type = buffer[0];

          if (type === 0xDD) {
            this.parseFeedback(buffer);
          } else if (type === 0xDA) {
            this.parseData(buffer);
          } else {
            this.isCompleted = true;
            this.error = {
              code: 0,
              message: 'Corrupted packet'
            };
            this.payload = [];
          }
        }

        return _createClass(_BufferResp, [{
          key: "logger",
          value: function logger(t) {
            this.fLog && this.fLog(t);
          }
        }, {
          key: "translateError",
          value: function translateError(code) {
            var knownErrors = {
              0: "No Error",
              2: "Request without correct response from vehicle",
              3: "Parameter is not matched with spec",
              4: "Message is not supported",
              5: "General error",
              6: "process is not ready , need to retry in next time example retry in 100ms",
              7: "Need to restart write flash present section again",
              8: "Already have it"
            };
            return knownErrors[code] || "Error response with code ".concat(code);
          }
        }, {
          key: "parseFeedback",
          value: function parseFeedback(buffer) {
            var res = buffer[4];
            this.isCompleted = true;

            if (res === 0xC2) {
              var code = buffer[5];
              var message = this.translateError(code);
              this.error = {
                code: code,
                message: message
              };
            } else if (buffer[1] === 0xcf && buffer[2] === 2 && buffer[3] === 0) {
              this.payload = [buffer[4], buffer[5]];
            } else {
              this.payload = [];
            }
          }
        }, {
          key: "parseData",
          value: function parseData(buffer) {
            if (this.expectedLength === 0) {
              this.expectedLength = buffer[2] + buffer[3] * 256;
            } //Data which include the checksum


            var data = buffer.slice(4, buffer.length);
            this.appendData(data);
          }
        }, {
          key: "appendData",
          value: function appendData(data) {
            this.payload = this.payload.concat(data); //If payload is ready eg = expected-length + checksum

            this.isCompleted = this.payload.length >= this.expectedLength + 1; // console.log(`append response payload: ${this.payload.length}, expected: ${this.expectedLength}`)

            if (this.isCompleted) {
              this.payload = this.payload.slice(0, this.payload.length - 1);
            }

            return this;
          }
        }]);
      }();
      /***/

    },

    /***/
    71818:
    /*!*********************************************************************!*\
      !*** ./src/app/services/innova-vci-service/src/command/Response.ts ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Response": function Response() {
          return (
            /* binding */
            _Response
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _BufferResp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./BufferResp */
      6645);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _utilities_notify_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../utilities/notify.service */
      46607);

      var _Response = /*#__PURE__*/function () {
        function _Response(Logger) {
          _classCallCheck(this, _Response);

          this.Logger = Logger;
          this.currentResponse = null;
        }

        return _createClass(_Response, [{
          key: "ensurePayload",
          value: function ensurePayload(payload) {
            return payload && payload.slice(0, payload.length - 1);
          }
          /**
           * Process a given buffer and then returns response if completed, otherwise returns null
           */

        }, {
          key: "parseResponse",
          value: function parseResponse(buffer, command) {
            var _this = this;

            if (!command) {
              return {
                command: 'Unknown',
                error: 'Unexpected data received',
                payload: buffer
              };
            }
            /*
              Fix bug drop package data
            */
            //If there is a pending response, just append data


            if (!this.currentResponse || this.currentResponse.command !== command.id) {
              // rule: response command id must equal request command id + 1
              if (!this.currentResponse) {
                this.currentResponse = new _BufferResp__WEBPACK_IMPORTED_MODULE_0__.BufferResp(buffer, function (logt) {
                  _this.Logger.log(logt);
                });

                if (buffer && buffer[1] === 0x81) {
                  //response in JSON format , Pro34
                  this.currentResponse['isJSON'] = true;
                }
              } else if (this.currentResponse && this.currentResponse.isJSON) {
                this.currentResponse.appendData(buffer);
              } else {
                // kind of unknown response, just skip it
                return null;
              }
            } else if (this.currentResponse.command === command.id) {
              this.currentResponse.appendData(buffer);
            } //If response is completed constructed, remove from pending list
            //And returns the response, otherwise returns null


            if (this.currentResponse.isCompleted && this.ensurePayload(this.currentResponse.payload)) {
              var res = this.currentResponse; // if ((this.currentResponse.isJSON || command.isVCIMode) && (res.payload.length > 4))
              // {
              //   res.status = res.payload[4];
              //   res.payload = res.payload.slice(5);/*4bytes length , 1byte status , <data>*/
              // }

              this.currentResponse = null; //console.log('payload----------------------', bytesToHexString(res.payload))

              return {
                command: res.command,
                error: res.error,
                payload: res.payload,
                status: res.status
              };
            }

            return null;
          }
          /**
           * When error occurs reset the current response
           */

        }, {
          key: "resetResponse",
          value: function resetResponse() {
            this.currentResponse = null;
          }
        }]);
      }();

      _Response.ɵfac = function Response_Factory(t) {
        return new (t || _Response)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_utilities_notify_service__WEBPACK_IMPORTED_MODULE_1__.NotifyService));
      };

      _Response.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: _Response,
        factory: _Response.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    12843:
    /*!****************************************************************************!*\
      !*** ./src/app/services/innova-vci-service/src/command/command.service.ts ***!
      \****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CommandService": function CommandService() {
          return (
            /* binding */
            _CommandService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! tslib */
      42321);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _utilities_dataParser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./../utilities/dataParser */
      81402);
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! lodash */
      202);
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _eventParser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./eventParser */
      32963);
      /* harmony import */


      var _standard_enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../standard/enums */
      13930);
      /* harmony import */


      var util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! util */
      94655);
      /* harmony import */


      var util__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var src_app_services_innova_tool_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/innova-tool-models */
      92951);
      /* harmony import */


      var _obd_vcistd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../obd/vcistd */
      48860);
      /* harmony import */


      var _connectivity_connectivity_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./../connectivity/connectivity.service */
      27555);
      /* harmony import */


      var src_app_services_events_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/events.service */
      80106);
      /* harmony import */


      var _utilities_notify_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./../utilities/notify.service */
      46607);
      /* harmony import */


      var _Response__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./Response */
      71818);
      /**
       * @Author: quocdo-macbook
       * @Date:   2020-11-06T22:46:24+07:00
       * @Last modified by:   quocdo-macbook
       * @Last modified time: 2021-12-09T21:14:46+07:00
       */


      var _CommandService = /*#__PURE__*/function () {
        function _CommandService(commService, events, logger, response) {
          var _this2 = this;

          _classCallCheck(this, _CommandService);

          this.commService = commService;
          this.events = events;
          this.logger = logger;
          this.response = response;
          this.command = {};
          this.callback = null;
          this.dataReceiver = null;
          this.notifier = null;
          this.timerInterval = null;
          this.timerIntervalTick = 0;
          this.isForceStop = false;
          this.formatType = 0;
          this.BleMsgRx = _standard_enums__WEBPACK_IMPORTED_MODULE_3__.enumDataFrameType.unknowFrame;
          this.callbackNotify = null;
          this.timerTimeout = null;
          this.isProcessing = false;
          this.isConfirmNormal = false;
          this.isFastCancel = false;
          this.bytes = []; // private vciEvents: EventEmitter<any> = new EventEmitter<any>()

          this.respData = null;
          this.store_multidata = [];
          this.EventCallBackFunction = new _angular_core__WEBPACK_IMPORTED_MODULE_11__.EventEmitter();
          this.isRegisterCallBack = false;
          this.isFastCancel = false;
          this.events.subscribe(src_app_services_innova_tool_models__WEBPACK_IMPORTED_MODULE_5__.InnovaVCIEvent.INTERRUPT_PROCESS, function () {
            _this2.ResetListenerData();

            _this2.ResetResponse();
          });
        } // Add by ngoclb


        return _createClass(_CommandService, [{
          key: "ResetListenerData",
          value: function ResetListenerData() {
            if (this.timerInterval) {
              clearInterval(this.timerInterval);
              this.timerInterval = null;
            }

            this.timerIntervalTick = 0;
            this.command = {};
            this.isProcessing = false;
            this.isFastCancel = false;
          }
        }, {
          key: "ResetResponse",
          value: function ResetResponse() {
            this.bytes = [];
            this.response.resetResponse();
          }
        }, {
          key: "EnableFastCancel",
          value: function EnableFastCancel() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    this.isFastCancel = true;

                  case 1:
                  case "end":
                    return _context.stop();
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "ResetFastCancel",
          value: function ResetFastCancel() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    this.isFastCancel = false;

                  case 1:
                  case "end":
                    return _context2.stop();
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "receivedData",
          value: function receivedData(data) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
              var command, payload, data_load, len_data, _data_load, _data_load2, b0, b1, b2, b3, status, vcidata, str, obj;

              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.prev = 0;
                    command = data.command, payload = data.payload;
                    data_load = null;
                    len_data = 0;

                    if (command === 'Unknown') {
                      data_load = payload.slice(4);
                    } else {
                      data_load = payload;
                    }

                    _data_load = data_load, _data_load2 = _toArray(_data_load), b0 = _data_load2[0], b1 = _data_load2[1], b2 = _data_load2[2], b3 = _data_load2[3], status = _data_load2[4], vcidata = _data_load2.slice(5); //remove four bytes of header when listening

                    _context3.t0 = !(0, util__WEBPACK_IMPORTED_MODULE_4__.isNullOrUndefined)(this.timerInterval);

                    if (!_context3.t0) {
                      _context3.next = 10;
                      break;
                    }

                    _context3.next = 10;
                    return clearInterval(this.timerInterval);

                  case 10:
                    this.isProcessing = false; // received status

                    if (!(status === 0x99)) {
                      _context3.next = 16;
                      break;
                    }

                    _context3.next = 14;
                    return this.events.publish('user:gui_info', {
                      Finish: ''
                    });

                  case 14:
                    _context3.next = 26;
                    break;

                  case 16:
                    _context3.next = 18;
                    return this.notify_confirmack();

                  case 18:
                    if (command === 'Unknown') {
                      length = vcidata.length - 1;
                    } else {
                      length = vcidata.length;
                    }

                    str = _utilities_dataParser__WEBPACK_IMPORTED_MODULE_0__.bytesToString(vcidata.slice(0, length)).replace('Select and press ENTER', ''); //this.logger.log(str);

                    str = str.replace('and press Enter', '');
                    this.logger.log(str);
                    obj = JSON.parse(str);

                    if (!lodash__WEBPACK_IMPORTED_MODULE_1__.isObject(obj)) {
                      _context3.next = 26;
                      break;
                    }

                    _context3.next = 26;
                    return this.events.publish('user:gui_info', obj);

                  case 26:
                    _context3.next = 31;
                    break;

                  case 28:
                    _context3.prev = 28;
                    _context3.t1 = _context3["catch"](0);
                    this.logger.log('Received GUI:' + _context3.t1);

                  case 31:
                  case "end":
                    return _context3.stop();
                }
              }, _callee3, this, [[0, 28]]);
            }));
          }
        }, {
          key: "notify_confirmack",
          value: function notify_confirmack() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
              var procid, statid, usbCommandHeader, usbData, cmdinfo, lencmd, datacmd, cs;
              return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                while (1) switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.prev = 0;
                    procid = _utilities_dataParser__WEBPACK_IMPORTED_MODULE_0__.arrayFromNumber(_obd_vcistd__WEBPACK_IMPORTED_MODULE_6__.VCIProg.gui, 2);
                    statid = _utilities_dataParser__WEBPACK_IMPORTED_MODULE_0__.arrayFromNumber(_obd_vcistd__WEBPACK_IMPORTED_MODULE_6__.VCICmd_GUI.gui_host_ack, 1);
                    usbCommandHeader = [0x04, 0x00, 0x00, 0x00, 0x65, 0x00, 0x00, 0x00];
                    usbData = [];
                    cmdinfo = {
                      id: 0x80,
                      data: [].concat(usbCommandHeader, procid, statid, usbData, [0, 0])
                    };
                    lencmd = [cmdinfo.data.length];
                    datacmd = [0xAD, cmdinfo.id].concat(lencmd, _toConsumableArray(cmdinfo.data));
                    cs = this.sumdata(datacmd);
                    this.logger.log('Send GUI ACK');
                    _context4.next = 12;
                    return this.commService.writeHex([].concat(_toConsumableArray(datacmd), [cs]));

                  case 12:
                    _context4.next = 17;
                    break;

                  case 14:
                    _context4.prev = 14;
                    _context4.t0 = _context4["catch"](0);
                    this.logger.log('Gui ACK Error:' + _context4.t0);

                  case 17:
                  case "end":
                    return _context4.stop();
                }
              }, _callee4, this, [[0, 14]]);
            }));
          }
        }, {
          key: "disconnectBluetoothDevices",
          value: function disconnectBluetoothDevices() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
              return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                while (1) switch (_context5.prev = _context5.next) {
                  case 0:
                    return _context5.abrupt("return", this.commService.disconnectBluetoothDevices());

                  case 1:
                  case "end":
                    return _context5.stop();
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "CloseConnection",
          value: function CloseConnection() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
              return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                while (1) switch (_context6.prev = _context6.next) {
                  case 0:
                    return _context6.abrupt("return", this.commService.CloseConnection());

                  case 1:
                  case "end":
                    return _context6.stop();
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "BluetoothIsConnected",
          value: function BluetoothIsConnected() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
              return _regeneratorRuntime().wrap(function _callee7$(_context7) {
                while (1) switch (_context7.prev = _context7.next) {
                  case 0:
                    return _context7.abrupt("return", this.commService.BluetoothIsConnected());

                  case 1:
                  case "end":
                    return _context7.stop();
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "initialize",
          value: function initialize(type) {
            var _this3 = this;

            return this.commService.initialize(function (data) {
              return (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(_this3, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
                return _regeneratorRuntime().wrap(function _callee8$(_context8) {
                  while (1) switch (_context8.prev = _context8.next) {
                    case 0:
                      _context8.next = 2;
                      return this.datareceivehandler(data);

                    case 2:
                    case "end":
                      return _context8.stop();
                  }
                }, _callee8, this);
              }));
            }, type);
          }
        }, {
          key: "connectBlueToothDevice",
          value: function connectBlueToothDevice(macAddress, cb) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
              var _this4 = this;

              var res;
              return _regeneratorRuntime().wrap(function _callee9$(_context9) {
                while (1) switch (_context9.prev = _context9.next) {
                  case 0:
                    _context9.prev = 0;
                    _context9.next = 3;
                    return this.commService.connectBlueToothDevice(macAddress, function (data) {
                      _this4.datareceivehandler_bluetooth(data);
                    }, cb);

                  case 3:
                    res = _context9.sent;
                    return _context9.abrupt("return", res);

                  case 7:
                    _context9.prev = 7;
                    _context9.t0 = _context9["catch"](0);
                    return _context9.abrupt("return", null);

                  case 10:
                  case "end":
                    return _context9.stop();
                }
              }, _callee9, this, [[0, 7]]);
            }));
          }
        }, {
          key: "getBluetoothDevicesList",
          value: function getBluetoothDevicesList() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
              return _regeneratorRuntime().wrap(function _callee10$(_context10) {
                while (1) switch (_context10.prev = _context10.next) {
                  case 0:
                    console.log('Run getBluetoothDevicesList: ');
                    _context10.prev = 1;
                    _context10.next = 4;
                    return this.commService.listBluetoothDevices();

                  case 4:
                    return _context10.abrupt("return", _context10.sent);

                  case 7:
                    _context10.prev = 7;
                    _context10.t0 = _context10["catch"](1);
                    console.log('err: ', _context10.t0);
                    alert(_context10.t0);

                  case 11:
                  case "end":
                    return _context10.stop();
                }
              }, _callee10, this, [[1, 7]]);
            }));
          }
        }, {
          key: "getBluetoothBondedDevicesList",
          value: function getBluetoothBondedDevicesList() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
              return _regeneratorRuntime().wrap(function _callee11$(_context11) {
                while (1) switch (_context11.prev = _context11.next) {
                  case 0:
                    console.log('Run getBluetoothBondedDevicesList: ');
                    _context11.prev = 1;
                    _context11.next = 4;
                    return this.commService.listBonnedBluetoothDevices();

                  case 4:
                    return _context11.abrupt("return", _context11.sent);

                  case 7:
                    _context11.prev = 7;
                    _context11.t0 = _context11["catch"](1);
                    console.log('getBluetoothBondedDevicesList err: ', _context11.t0);
                    alert(_context11.t0);

                  case 11:
                  case "end":
                    return _context11.stop();
                }
              }, _callee11, this, [[1, 7]]);
            }));
          }
        }, {
          key: "sumdata",
          value: function sumdata(data) {
            var cs = 0;
            (data || []).map(function (t) {
              cs += t;
              return t;
            });
            cs &= 0xff;
            return cs;
          }
          /**
           * [sendGetMultiData Function handle send and get multidata of Loggign]
           * @param  cmdinfo [cmd info]
           * @return         [data of response]
           */

        }, {
          key: "sendGetMultiData",
          value: function sendGetMultiData(cmdinfo) {
            var _this5 = this;

            return new Promise(function (resolve) {
              return (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(_this5, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee13() {
                var _this6 = this;

                var payload, num_retry, lencmd, datacmd, cs;
                return _regeneratorRuntime().wrap(function _callee13$(_context13) {
                  while (1) switch (_context13.prev = _context13.next) {
                    case 0:
                      _context13.prev = 0;
                      this.ResetListenerData();
                      this.ResetResponse();
                      payload = [];
                      this.command = {
                        data: cmdinfo.data || [],
                        id: cmdinfo.id,
                        timeout: cmdinfo.timeout || 3000,
                        nretry: cmdinfo.nretry || 3
                      };
                      num_retry = 0;
                      lencmd = [this.command.data.length];

                      if (this.command.data.length > 0x7f) {
                        lencmd = _utilities_dataParser__WEBPACK_IMPORTED_MODULE_0__.numberToBytes(this.command.data.length, 2);
                        lencmd[0] |= 0x80;
                      }

                      datacmd = [0xAD, this.command.id].concat(_toConsumableArray(lencmd), _toConsumableArray(this.command.data));
                      cs = this.sumdata(datacmd);
                      this.isProcessing = true; //this.timerIntervalTick = 0

                      this.respData = null;
                      this.setBleMsgRx(_standard_enums__WEBPACK_IMPORTED_MODULE_3__.enumDataFrameType.unknowFrame);
                      this.timerIntervalTick = 0; //this.respData.isvalid = false;

                      _context13.next = 16;
                      return this.commService.writeHex([].concat(_toConsumableArray(datacmd), [cs]));

                    case 16:
                      if (this.commService.getSerialType() === _standard_enums__WEBPACK_IMPORTED_MODULE_3__.EnumSerialType.Bluetooth) {
                        this.command.timeout = this.command.timeout * 3;
                      }

                      this.timerInterval && clearInterval(this.timerInterval);
                      this.timerInterval = setInterval(function () {
                        return (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(_this6, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee12() {
                          return _regeneratorRuntime().wrap(function _callee12$(_context12) {
                            while (1) switch (_context12.prev = _context12.next) {
                              case 0:
                                // this.logger.log('TimerID:' + this.timerInterval);
                                this.timerIntervalTick += 10;

                                if (!(this.isProcessing == false)) {
                                  _context12.next = 6;
                                  break;
                                }

                                payload = this.respData; // this.command = undefined;
                                // this.logger.log('Clear TimerID:' + this.timerInterval);
                                // clearInterval(this.timerInterval);

                                this.ResetListenerData();
                                this.logger.log('Finish received with processing false (multi)');
                                return _context12.abrupt("return", resolve({
                                  error: undefined,
                                  data: payload
                                }));

                              case 6:
                                if (this.getBleMsgRx() == _standard_enums__WEBPACK_IMPORTED_MODULE_3__.enumDataFrameType.BusyFrame) {
                                  this.timerIntervalTick = 0;
                                  this.setBleMsgRx(_standard_enums__WEBPACK_IMPORTED_MODULE_3__.enumDataFrameType.unknowFrame);
                                }

                                if (this.getBleMsgRx() == _standard_enums__WEBPACK_IMPORTED_MODULE_3__.enumDataFrameType.StartMultiData) {
                                  this.timerIntervalTick = 0;
                                  this.setBleMsgRx(_standard_enums__WEBPACK_IMPORTED_MODULE_3__.enumDataFrameType.unknowFrame);
                                }

                                if (this.getBleMsgRx() == _standard_enums__WEBPACK_IMPORTED_MODULE_3__.enumDataFrameType.LogDataofMultiData) {
                                  // this.logger.log('Clear TimerID:' + this.timerInterval);
                                  this.timerIntervalTick = 0; //  payload.push(this.respData);

                                  this.logger.log('Data Logging package number:' + this.store_multidata.length);
                                }

                                if (!(this.getBleMsgRx() == _standard_enums__WEBPACK_IMPORTED_MODULE_3__.enumDataFrameType.StopMultiData)) {
                                  _context12.next = 20;
                                  break;
                                }

                                this.timerIntervalTick = 0;
                                this.setBleMsgRx(_standard_enums__WEBPACK_IMPORTED_MODULE_3__.enumDataFrameType.unknowFrame);
                                _context12.t0 = !(0, util__WEBPACK_IMPORTED_MODULE_4__.isNullOrUndefined)(this.timerInterval);

                                if (!_context12.t0) {
                                  _context12.next = 16;
                                  break;
                                }

                                _context12.next = 16;
                                return clearInterval(this.timerInterval);

                              case 16:
                                this.isProcessing = false;
                                this.command = undefined; // this.respData.isvalid = false;

                                this.logger.log('Finish received (Multi)');
                                return _context12.abrupt("return", resolve({
                                  error: undefined,
                                  data: this.store_multidata
                                }));

                              case 20:
                                if (!(this.timerIntervalTick >= this.command.timeout)) {
                                  _context12.next = 33;
                                  break;
                                }

                                num_retry++; //this.logger.log("time-clock:"+this.timerIntervalTick)

                                this.logger.log("time-setup:" + this.command.timeout);
                                this.logger.log('timeout');

                                if (!(num_retry >= this.command.nretry)) {
                                  _context12.next = 30;
                                  break;
                                }

                                //   this.command = undefined;
                                //   this.timerIntervalTick=0;
                                //   // this.logger.log('TimerID:' + this.timerInterval);
                                //  !isNullOrUndefined(this.timerInterval) && await clearInterval(this.timerInterval);
                                //  this.isProcessing = false
                                this.ResetListenerData();
                                this.ResetResponse();
                                return _context12.abrupt("return", resolve({
                                  error: {
                                    message: 'Time Out , No Response'
                                  },
                                  data: undefined
                                }));

                              case 30:
                                _context12.next = 32;
                                return this.commService.writeHex([].concat(_toConsumableArray(datacmd), [cs]));

                              case 32:
                                this.timerIntervalTick = 0;

                              case 33:
                              case "end":
                                return _context12.stop();
                            }
                          }, _callee12, this);
                        }));
                      }, 10);
                      _context13.next = 24;
                      break;

                    case 21:
                      _context13.prev = 21;
                      _context13.t0 = _context13["catch"](0);
                      return _context13.abrupt("return", resolve({
                        error: {
                          message: 'sendGetMultiData error ' + _context13.t0.message
                        },
                        data: undefined
                      }));

                    case 24:
                    case "end":
                      return _context13.stop();
                  }
                }, _callee13, this, [[0, 21]]);
              }));
            });
          }
        }, {
          key: "sendData",
          value: function sendData(cmdinfo) {
            var _this7 = this;

            return new Promise(function (resolve) {
              return (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(_this7, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee15() {
                var _this8 = this;

                var num_retry, lencmd, datacmd, cs;
                return _regeneratorRuntime().wrap(function _callee15$(_context15) {
                  while (1) switch (_context15.prev = _context15.next) {
                    case 0:
                      _context15.prev = 0;

                      if (!this.isProcessing) {
                        _context15.next = 4;
                        break;
                      }

                      this.logger.log('linking busy');
                      return _context15.abrupt("return", resolve({
                        data: undefined,
                        error: {
                          message: 'Linking is busy , need wait to complete'
                        }
                      }));

                    case 4:
                      this.ResetListenerData();
                      this.ResetResponse(); //this.timerInterval =null;

                      this.command = {
                        data: cmdinfo.data || [],
                        id: cmdinfo.id,
                        timeout: cmdinfo.timeout || 3000,
                        nretry: cmdinfo.nretry || 3
                      };
                      num_retry = 0; // const __clearTimeout = ()=>{
                      //   this.logger.log('clear timeout')
                      //   if(!!this.timerTimeout)
                      //   {
                      //   clearTimeout(this.timerTimeout)
                      //   this.timerTimeout=null;
                      //   }
                      // }
                      // const ftimeout = () => {
                      //   this.logger.log('start timeout '+this.command.timeout)
                      //   this.timerTimeout = setTimeout(() => {
                      //     this.logger.log('timeout !!!')
                      //     this.isProcessing = false;
                      //     resolve({
                      //       error: { message: 'Time Out , No Response' },
                      //       data: undefined
                      //     })
                      //   }, this.command.timeout)
                      // }

                      lencmd = [this.command.data.length];

                      if (this.command.data.length > 0x7f) {
                        lencmd = _utilities_dataParser__WEBPACK_IMPORTED_MODULE_0__.numberToBytes(this.command.data.length, 2);
                        lencmd[0] |= 0x80;
                      }

                      datacmd = [0xAD, this.command.id].concat(_toConsumableArray(lencmd), _toConsumableArray(this.command.data));
                      cs = this.sumdata(datacmd);
                      this.isProcessing = true; //this.timerIntervalTick = 0

                      this.respData = null;
                      this.setBleMsgRx(_standard_enums__WEBPACK_IMPORTED_MODULE_3__.enumDataFrameType.unknowFrame);
                      this.timerIntervalTick = 0; //this.respData.isvalid = false;

                      _context15.next = 18;
                      return this.commService.writeHex([].concat(_toConsumableArray(datacmd), [cs]));

                    case 18:
                      if (this.commService.getSerialType() === _standard_enums__WEBPACK_IMPORTED_MODULE_3__.EnumSerialType.Bluetooth) {
                        // this.command.nretry=this.command.nretry*2;
                        this.command.timeout = this.command.timeout * 2;
                      } // const fGetData = async function():Promise<any>{
                      //   this.timerIntervalTick +=10;
                      //   if(this.getBleMsgRx() == enumDataFrameType.BusyFrame)
                      //   {
                      //     this.timerIntervalTick=0;
                      //     this.setBleMsgRx(enumDataFrameType.unknowFrame);
                      //   }
                      //   if(!isNullOrUndefined(this.respData) && this.respData.isvalid)
                      //   {
                      //     // !isNullOrUndefined(this.timerInterval) && clearInterval(this.timerInterval);
                      //     const {payload } = this.respData
                      //     this.isProcessing = false;
                      //     this.command = undefined;
                      //     // this.respData.isvalid = false;
                      //     this.logger.log('Finish received')
                      //     return {
                      //       error: undefined,
                      //       data: payload
                      //     }
                      //   }
                      //   if(this.timerIntervalTick >= this.command.timeout)
                      //   {
                      //     num_retry++;
                      //     //this.logger.log("time-clock:"+this.timerIntervalTick)
                      //     this.logger.log("time-setup:"+this.command.timeout)
                      //     this.logger.log('timeout')
                      //     if(num_retry == this.command.nretry)
                      //     {
                      //       this.command = undefined;
                      //       this.timerIntervalTick=0;
                      //      // !isNullOrUndefined(this.timerInterval) && clearInterval(this.timerInterval);
                      //      this.isProcessing = false
                      //       return {
                      //         error: { message: 'Time Out , No Response' },
                      //         data: undefined
                      //       }
                      //     }
                      //     else
                      //     {
                      //       await this.commService.writeHex([...datacmd, cs])
                      //       this.timerIntervalTick=0;
                      //     }
                      //
                      //
                      //   }
                      //   setTimeout(fGetData,10);
                      // }
                      // const data =await fGetData();
                      // return resolve(data);


                      this.timerInterval && clearInterval(this.timerInterval);
                      this.timerInterval = setInterval(function () {
                        return (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(_this8, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee14() {
                          var _this$respData$payloa, payload, _payload;

                          return _regeneratorRuntime().wrap(function _callee14$(_context14) {
                            while (1) switch (_context14.prev = _context14.next) {
                              case 0:
                                // this.logger.log('TimerID:' + this.timerInterval);
                                this.timerIntervalTick += 10;

                                if (!(this.isProcessing == false)) {
                                  _context14.next = 6;
                                  break;
                                }

                                _this$respData$payloa = this.respData.payload, payload = _this$respData$payloa === void 0 ? null : _this$respData$payloa; // this.command = undefined;
                                // this.logger.log('Clear TimerID:' + this.timerInterval);
                                // clearInterval(this.timerInterval);

                                this.ResetListenerData();
                                this.logger.log('Finish received with processing false');
                                return _context14.abrupt("return", resolve({
                                  error: undefined,
                                  data: payload
                                }));

                              case 6:
                                if (this.getBleMsgRx() == _standard_enums__WEBPACK_IMPORTED_MODULE_3__.enumDataFrameType.BusyFrame) {
                                  this.timerIntervalTick = 0;
                                  this.setBleMsgRx(_standard_enums__WEBPACK_IMPORTED_MODULE_3__.enumDataFrameType.unknowFrame);
                                }

                                if (!(!(0, util__WEBPACK_IMPORTED_MODULE_4__.isNullOrUndefined)(this.respData) && this.respData.isvalid)) {
                                  _context14.next = 12;
                                  break;
                                }

                                // this.logger.log('Clear TimerID:' + this.timerInterval);
                                // !isNullOrUndefined(this.timerInterval) && await clearInterval(this.timerInterval);
                                _payload = this.respData.payload; // this.isProcessing = false;
                                // this.command = undefined;
                                // this.respData.isvalid = false;

                                this.ResetListenerData();
                                this.logger.log('Finish received');
                                return _context14.abrupt("return", resolve({
                                  error: undefined,
                                  data: _payload
                                }));

                              case 12:
                                if (!(this.timerIntervalTick >= this.command.timeout)) {
                                  _context14.next = 25;
                                  break;
                                }

                                // var isOpenPort = await this.commService.blIsCheckOpenPort();
                                // if(isOpenPort)
                                // {
                                //   await this.commService.CloseConnection().then(async ()=>{
                                //     await this.commService.reinitlialize();
                                //   })
                                // }
                                num_retry++; //this.logger.log("time-clock:"+this.timerIntervalTick)

                                this.logger.log("time-setup:" + this.command.timeout);
                                this.logger.log('timeout commandId=' + JSON.stringify(cmdinfo));

                                if (!(num_retry >= this.command.nretry)) {
                                  _context14.next = 22;
                                  break;
                                }

                                //   this.command = undefined;
                                //   this.timerIntervalTick=0;
                                //   // this.logger.log('TimerID:' + this.timerInterval);
                                //  !isNullOrUndefined(this.timerInterval) && clearInterval(this.timerInterval);
                                //  this.isProcessing = false
                                this.ResetListenerData();
                                this.ResetResponse();
                                return _context14.abrupt("return", resolve({
                                  error: {
                                    message: 'Time Out , No Response'
                                  },
                                  data: undefined
                                }));

                              case 22:
                                _context14.next = 24;
                                return this.commService.writeHex([].concat(_toConsumableArray(datacmd), [cs]));

                              case 24:
                                this.timerIntervalTick = 0;

                              case 25:
                              case "end":
                                return _context14.stop();
                            }
                          }, _callee14, this);
                        }));
                      }, 10); // // ftimeout()
                      // this.vciEvents.subscribe((respdata) => {
                      //   if(!isObject(respdata))
                      //     return;
                      //   let {isLinkVCI, isstarttimeout, payload } = respdata
                      //   if(!!!isLinkVCI)
                      //     return;
                      //   __clearTimeout();
                      //   if (!!isstarttimeout) {
                      //     // __clearTimeout();
                      //     ftimeout()
                      //     return;
                      //   }
                      //   this.logger.log(JSON.stringify(respdata))
                      //   this.isProcessing = false
                      //   return resolve({
                      //     data: payload,
                      //     error:undefined
                      //   })
                      // })

                      _context15.next = 27;
                      break;

                    case 23:
                      _context15.prev = 23;
                      _context15.t0 = _context15["catch"](0);
                      this.isProcessing = false;
                      return _context15.abrupt("return", resolve({
                        error: {
                          message: 'sendData error ' + _context15.t0.message
                        },
                        data: undefined
                      }));

                    case 27:
                    case "end":
                      return _context15.stop();
                  }
                }, _callee15, this, [[0, 23]]);
              }));
            });
          }
        }, {
          key: "testWrite",
          value: function testWrite() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee16() {
              return _regeneratorRuntime().wrap(function _callee16$(_context16) {
                while (1) switch (_context16.prev = _context16.next) {
                  case 0:
                    _context16.next = 2;
                    return this.sendData({
                      id: 0xE1,
                      timeout: 100,
                      nretry: 0
                    });

                  case 2:
                    return _context16.abrupt("return", true);

                  case 3:
                  case "end":
                    return _context16.stop();
                }
              }, _callee16, this);
            }));
          }
        }, {
          key: "isConfirmNormalStatus",
          value: function isConfirmNormalStatus(bytes) {
            if ((0, util__WEBPACK_IMPORTED_MODULE_4__.isNullOrUndefined)(this.command)) {
              return false;
            }

            var _this$command$id = this.command.id,
                id = _this$command$id === void 0 ? 1 : _this$command$id;
            return (bytes[0] === 0xda || bytes[0] === 0xdd) && bytes[1] === id + 1 && bytes[2] === 7 && bytes[3] === 0 && bytes[4] === 2 && bytes[5] === 0 && bytes[6] === 0 && bytes[7] === 0 && bytes[8] === 0xaa && bytes[9] === 0 && bytes[10] === 0 && bytes[11] === 14;
          }
        }, {
          key: "isFrameACK",
          value: function isFrameACK(bytes) {
            // const { command = {} } = this;
            if ((0, util__WEBPACK_IMPORTED_MODULE_4__.isNullOrUndefined)(this.command)) {
              return false;
            }

            var _this$command$id2 = this.command.id,
                id = _this$command$id2 === void 0 ? 1 : _this$command$id2;
            return (bytes[0] === 0xda || bytes[0] === 0xdd) && bytes[1] === id + 1 && bytes[2] === 4 &&
            /*Hung Vo fix wrong frame ACK*/
            bytes[3] === 0 && bytes[4] === 0xc4 && bytes[5] === 0 && bytes[6] <= 48 && bytes[7] === 0;
          }
        }, {
          key: "isFrameBusy",
          value: function isFrameBusy(bytes) {
            var busyFrame = [0xdd, 0xc3, 0x02, 0x00, 0x00, 0x00, 0xa2];
            var busyFrame2 = [0xda, 0xc3, 0x02, 0x00, 0x00, 0x00, 0x9f];

            if (bytes.length > 7) {
              return lodash__WEBPACK_IMPORTED_MODULE_1__.isEqual(bytes.slice(0, 6), busyFrame) || lodash__WEBPACK_IMPORTED_MODULE_1__.isEqual(bytes.slice(0, 6), busyFrame2);
            } else if (bytes.length == 7) {
              return lodash__WEBPACK_IMPORTED_MODULE_1__.isEqual(bytes, busyFrame) || lodash__WEBPACK_IMPORTED_MODULE_1__.isEqual(bytes, busyFrame2);
            }
          }
        }, {
          key: "isRequestACK",
          value: function isRequestACK(bytes) {
            var _this$command = this.command,
                command = _this$command === void 0 ? {} : _this$command;
            var _command$id = command.id,
                id = _command$id === void 0 ? 1 : _command$id;
            return bytes.length === 7 && (bytes[0] === 0xda || bytes[0] === 0xdd) && bytes[1] === id + 1 && bytes[4] === 0xc5;
          }
        }, {
          key: "isStartMultiData",
          value: function isStartMultiData(bytes) {
            var _this$command2 = this.command,
                command = _this$command2 === void 0 ? {} : _this$command2;
            return (bytes[0] === 0xda || bytes[0] === 0xdd) && bytes[1] === 0x5B && bytes[4] === 0x01;
          }
        }, {
          key: "isStopMultiData",
          value: function isStopMultiData(bytes) {
            var _this$command3 = this.command,
                command = _this$command3 === void 0 ? {} : _this$command3;
            return (bytes[0] === 0xda || bytes[0] === 0xdd) && bytes[1] === 0x5B && bytes[4] === 0x00;
          }
        }, {
          key: "isDataofMulti",
          value: function isDataofMulti(bytes) {
            var _this$command4 = this.command,
                command = _this$command4 === void 0 ? {} : _this$command4;
            return (bytes[0] === 0xda || bytes[0] === 0xdd) && bytes[1] === 0x5B && bytes[4] === 0x02;
          }
        }, {
          key: "setBleMsgRx",
          value: function setBleMsgRx(type) {
            this.BleMsgRx = type; //BLEMsg.unknowFrame;
          }
        }, {
          key: "getBleMsgRx",
          value: function getBleMsgRx() {
            return this.BleMsgRx;
          }
        }, {
          key: "isNotifyPacket",
          value: function isNotifyPacket(bytes) {
            return bytes[0] === 0xda && bytes[1] === 0xc1;
          }
        }, {
          key: "isStreamOEMPidData",
          value: function isStreamOEMPidData(bytes) {
            return bytes[0] === 0xda && bytes[1] === 0x76;
          }
        }, {
          key: "__onNotifyEvents",
          value: function __onNotifyEvents(eventId, data) {
            if (this.callbackNotify == undefined) return;
            var dataEvent = (0, _eventParser__WEBPACK_IMPORTED_MODULE_2__.parserNotifyEvents)(eventId, data);
            this.callbackNotify(eventId, dataEvent);
          }
        }, {
          key: "__resetTimerTimeout",
          value: function __resetTimerTimeout() {// !!this.timerTimeout && this.vciEvents.emit({isLinkVCI:true, isstarttimeout: true })
          }
        }, {
          key: "datareceivehandler",
          value: function datareceivehandler(dataarray) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee17() {
              var _this9 = this;

              var bytes_temp, lendata, lenNotifyExpected, _isDone, resp;

              return _regeneratorRuntime().wrap(function _callee17$(_context17) {
                while (1) switch (_context17.prev = _context17.next) {
                  case 0:
                    _context17.prev = 0;

                    if (!((0, util__WEBPACK_IMPORTED_MODULE_4__.isNullOrUndefined)(dataarray) || dataarray.length == 0)) {
                      _context17.next = 3;
                      break;
                    }

                    return _context17.abrupt("return");

                  case 3:
                    //const bytes = [];
                    bytes_temp = [];
                    (dataarray || []).map(function (xx) {
                      _this9.bytes.push(xx);

                      return xx;
                    });

                    if (!(this.bytes[0] != 0xDA)) {
                      _context17.next = 9;
                      break;
                    }

                    // not valid response
                    this.logger.log("not valid response");
                    this.bytes = [];
                    return _context17.abrupt("return");

                  case 9:
                    lendata = this.bytes[2] + (this.bytes[3] << 8) + 5; //this.logger.log("len expect"+lendata)

                    if (!(this.bytes.length < lendata)) {
                      _context17.next = 15;
                      break;
                    }

                    // ngoclb: display log in other way
                    this.logger.logComRx("".concat(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_0__.bytesToHexString(dataarray.slice(0, 22))).concat(dataarray.length > 22 ? 'xxx' : '', " ...").concat(this.bytes.length, "/").concat(lendata));
                    return _context17.abrupt("return");

                  case 15:
                    // this.logger.log("len data"+(this.bytes.length))
                    //  this.logger.log(this.bytes)
                    this.logger.log('Finish getting data');
                    bytes_temp = this.bytes; // ngoclb: display log in other way

                    this.logger.logComRx("".concat(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_0__.bytesToHexString(this.bytes.slice(-1)), " [CS]"));
                    this.logger.logComRx("".concat(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_0__.bytesToHexString(bytes_temp), " [").concat(bytes_temp.length, " bytes]"), true);
                    this.bytes = [];

                  case 20:
                    if (!this.isFrameBusy(bytes_temp)) {
                      _context17.next = 29;
                      break;
                    }

                    this.logger.logComRx('Busy');
                    this.timerIntervalTick = 0;

                    if (!(this.isRegisterCallBack == true && this.isConfirmNormal == true)) {
                      _context17.next = 27;
                      break;
                    }

                    _context17.next = 26;
                    return this.events.publish('user:gui_info', {
                      KeepAlive: ''
                    });

                  case 26:
                    this.logger.log('KeepAlive GUI');

                  case 27:
                    this.setBleMsgRx(_standard_enums__WEBPACK_IMPORTED_MODULE_3__.enumDataFrameType.BusyFrame);
                    return _context17.abrupt("return");

                  case 29:
                    if (!this.isFrameACK(bytes_temp)) {
                      _context17.next = 33;
                      break;
                    }

                    this.setBleMsgRx(_standard_enums__WEBPACK_IMPORTED_MODULE_3__.enumDataFrameType.RespFrameACK);
                    this.logger.logComRx('FrameACK');
                    return _context17.abrupt("return");

                  case 33:
                    if (!this.isStartMultiData(bytes_temp)) {
                      _context17.next = 38;
                      break;
                    }

                    this.setBleMsgRx(_standard_enums__WEBPACK_IMPORTED_MODULE_3__.enumDataFrameType.StartMultiData);
                    this.store_multidata = [];
                    this.logger.logComRx('StartMultiData');
                    return _context17.abrupt("return");

                  case 38:
                    if (!this.isStopMultiData(bytes_temp)) {
                      _context17.next = 42;
                      break;
                    }

                    this.setBleMsgRx(_standard_enums__WEBPACK_IMPORTED_MODULE_3__.enumDataFrameType.StopMultiData);
                    this.logger.logComRx('StopMultiData');
                    return _context17.abrupt("return");

                  case 42:
                    if (!this.isRequestACK(bytes_temp)) {
                      _context17.next = 46;
                      break;
                    }

                    this.setBleMsgRx(_standard_enums__WEBPACK_IMPORTED_MODULE_3__.enumDataFrameType.ReqFrameACK);
                    this.logger.logComRx('RequestACK');
                    return _context17.abrupt("return");

                  case 46:
                    // check for notify packet
                    if (this.isNotifyPacket(bytes_temp)) {
                      lenNotifyExpected = bytes_temp[2] + (bytes_temp[3] << 8);
                      _isDone = lenNotifyExpected + 5 === bytes_temp.length;
                      this.logger.log('this.isNotifyPacket(bytes_temp)');
                      this.notifyData = {
                        id: bytes_temp[4],
                        expectedLen: lenNotifyExpected,
                        payload: lodash__WEBPACK_IMPORTED_MODULE_1__.slice(bytes_temp, 5, bytes_temp.length - 1),
                        isDone: _isDone,
                        waiting: !_isDone
                      };
                    } else if (this.notifyData && this.notifyData.waiting) {
                      this.notifyData.payload = (this.notifyData.payload || []).concat(bytes_temp);
                      this.logger.logComRx('notifyData.payload.length' + this.notifyData.payload.length);
                      this.logger.logComRx('notifyData.expectedLen' + this.notifyData.expectedLen);
                      this.logger.log('this.notifyData && this.notifyData.waiting');

                      if (this.notifyData.payload.length + 1 >= this.notifyData.expectedLen) {
                        this.notifyData.isDone = true;
                      }
                    } // else
                    // {
                    //   this.logger.log('XXXXXXX');
                    // }


                    if (!(this.notifyData && this.notifyData.isDone)) {
                      _context17.next = 54;
                      break;
                    }

                    this.logger.log('this.notifyData && this.notifyData.isDone');

                    this.__onNotifyEvents(this.notifyData.id, this.notifyData.payload);

                    this.setBleMsgRx(_standard_enums__WEBPACK_IMPORTED_MODULE_3__.enumDataFrameType.NotifyFrame);

                    this.__resetTimerTimeout();

                    this.notifyData = null;
                    return _context17.abrupt("return");

                  case 54:
                    if (this.isConfirmNormalStatus(bytes_temp)) {
                      if (this.isConfirmNormal || this.isRegisterCallBack == false) {
                        this.isConfirmNormal = false;
                      }

                      this.logger.log('Confirm Normal Status');
                    }

                    this.response.resetResponse();
                    resp = this.response.parseResponse(bytes_temp, this.command); //received response before timeout

                    if (resp) {
                      this.setBleMsgRx(_standard_enums__WEBPACK_IMPORTED_MODULE_3__.enumDataFrameType.NotifyFrame);
                    } else if (this.command) {
                      this.__resetTimerTimeout();
                    }

                    if (!resp) {
                      _context17.next = 66;
                      break;
                    }

                    // this.vciEvents.emit({isLinkVCI:true,...resp});
                    if (this.isDataofMulti(bytes_temp)) {
                      this.setBleMsgRx(_standard_enums__WEBPACK_IMPORTED_MODULE_3__.enumDataFrameType.LogDataofMultiData);
                      this.logger.logComRx('Data of Multi Data with chunk index:' + bytes_temp[5]); //  let resp_multidata =

                      this.store_multidata.push({
                        index: bytes_temp[5],
                        payload: bytes_temp.slice(6, bytes_temp.length - 1)
                      });
                    }

                    this.logger.log('Got Valid Response');
                    this.respData = Object.assign(Object.assign({}, resp), {
                      isvalid: true
                    });
                    this.response.resetResponse();

                    if (!(this.isRegisterCallBack == true && this.isConfirmNormal == true)) {
                      _context17.next = 66;
                      break;
                    }

                    _context17.next = 66;
                    return this.receivedData(this.respData);

                  case 66:
                    if (this.isConfirmNormalStatus(bytes_temp)) {
                      if (this.isRegisterCallBack) {
                        this.isConfirmNormal = true;
                      }

                      this.logger.log('Confirm Normal'); // this.timerIntervalTick =0;
                      // return;
                    }

                    _context17.next = 74;
                    break;

                  case 69:
                    _context17.prev = 69;
                    _context17.t0 = _context17["catch"](0);
                    this.bytes = [];
                    this.logger.log('datareceivehandler ' + _context17.t0);
                    throw new Error(_context17.t0);

                  case 74:
                  case "end":
                    return _context17.stop();
                }
              }, _callee17, this, [[0, 69]]);
            }));
          }
        }, {
          key: "datareceivehandler_bluetooth",
          value: function datareceivehandler_bluetooth(dataarray) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee18() {
              var _this10 = this;

              var bytes_temp, lendata, lenNotifyExpected, _isDone, resp;

              return _regeneratorRuntime().wrap(function _callee18$(_context18) {
                while (1) switch (_context18.prev = _context18.next) {
                  case 0:
                    _context18.prev = 0;

                    if (!((0, util__WEBPACK_IMPORTED_MODULE_4__.isNullOrUndefined)(dataarray) || dataarray.length == 0)) {
                      _context18.next = 3;
                      break;
                    }

                    return _context18.abrupt("return");

                  case 3:
                    //const bytes = [];
                    bytes_temp = [];
                    (dataarray || []).map(function (xx) {
                      _this10.bytes.push(xx);

                      return xx;
                    });

                    if (!(this.bytes.length <= 2)) {
                      _context18.next = 7;
                      break;
                    }

                    return _context18.abrupt("return");

                  case 7:
                    lendata = this.bytes[2] + (this.bytes[3] << 8) + 5; //this.logger.log("len expect"+lendata)

                    if (!(this.bytes.length < lendata)) {
                      _context18.next = 12;
                      break;
                    }

                    return _context18.abrupt("return");

                  case 12:
                    this.logger.log("Received Valid:" + lendata + " bytes"); //this.logger.log(this.bytes)
                    //this.logger.log('Finish getting data');
                    //  this.logger.log('buffer:' + DataParser.bytesToHexString(this.bytes));

                    bytes_temp = this.bytes.slice(0, lendata);
                    this.bytes = this.bytes.slice(lendata);
                    this.logger.log('RX:' + _utilities_dataParser__WEBPACK_IMPORTED_MODULE_0__.bytesToHexString(bytes_temp)); //this.logger.log('buf:' + DataParser.bytesToHexString(this.bytes));
                    // if(this.commService.getSerialType() == EnumSerialType.Serial_USB)
                    // {
                    //   this.bytes =[];
                    // }

                  case 16:
                    if (!this.isFrameBusy(bytes_temp)) {
                      _context18.next = 26;
                      break;
                    }

                    this.logger.logComRx('Busy');
                    this.logger.log('Busy');
                    this.timerIntervalTick = 0;
                    this.setBleMsgRx(_standard_enums__WEBPACK_IMPORTED_MODULE_3__.enumDataFrameType.BusyFrame);

                    if (!(this.isRegisterCallBack == true && this.isConfirmNormal == true)) {
                      _context18.next = 25;
                      break;
                    }

                    _context18.next = 24;
                    return this.events.publish('user:gui_info', {
                      KeepAlive: ''
                    });

                  case 24:
                    this.logger.log('KeepAlive GUI');

                  case 25:
                    return _context18.abrupt("return");

                  case 26:
                    if (!this.isFrameACK(bytes_temp)) {
                      _context18.next = 30;
                      break;
                    }

                    this.setBleMsgRx(_standard_enums__WEBPACK_IMPORTED_MODULE_3__.enumDataFrameType.RespFrameACK);
                    this.logger.logComRx('FrameACK');
                    return _context18.abrupt("return");

                  case 30:
                    if (!this.isRequestACK(bytes_temp)) {
                      _context18.next = 34;
                      break;
                    }

                    this.setBleMsgRx(_standard_enums__WEBPACK_IMPORTED_MODULE_3__.enumDataFrameType.ReqFrameACK);
                    this.logger.logComRx('RequestACK');
                    return _context18.abrupt("return");

                  case 34:
                    // check for notify packet
                    if (this.isNotifyPacket(bytes_temp)) {
                      lenNotifyExpected = bytes_temp[2] + (bytes_temp[3] << 8);
                      _isDone = lenNotifyExpected + 5 === bytes_temp.length;
                      this.logger.log('this.isNotifyPacket(bytes_temp)');
                      this.notifyData = {
                        id: bytes_temp[4],
                        expectedLen: lenNotifyExpected,
                        payload: lodash__WEBPACK_IMPORTED_MODULE_1__.slice(bytes_temp, 5, bytes_temp.length - 1),
                        isDone: _isDone,
                        waiting: !_isDone
                      };
                    } else if (this.notifyData && this.notifyData.waiting) {
                      this.notifyData.payload = (this.notifyData.payload || []).concat(bytes_temp);
                      this.logger.logComRx('notifyData.payload.length' + this.notifyData.payload.length);
                      this.logger.logComRx('notifyData.expectedLen' + this.notifyData.expectedLen);
                      this.logger.log('this.notifyData && this.notifyData.waiting');

                      if (this.notifyData.payload.length + 1 >= this.notifyData.expectedLen) {
                        this.notifyData.isDone = true;
                      }
                    } // else
                    // {
                    //   this.logger.log('XXXXXXX');
                    // }


                    if (!(this.notifyData && this.notifyData.isDone)) {
                      _context18.next = 42;
                      break;
                    }

                    this.logger.log('this.notifyData && this.notifyData.isDone');

                    this.__onNotifyEvents(this.notifyData.id, this.notifyData.payload);

                    this.setBleMsgRx(_standard_enums__WEBPACK_IMPORTED_MODULE_3__.enumDataFrameType.NotifyFrame);

                    this.__resetTimerTimeout();

                    this.notifyData = null;
                    return _context18.abrupt("return");

                  case 42:
                    if (this.isConfirmNormalStatus(bytes_temp)) {
                      if (this.isConfirmNormal || this.isRegisterCallBack == false) {
                        this.isConfirmNormal = false;
                      }

                      this.logger.log("Confirm Normal Status");
                    }

                    this.response.resetResponse();
                    resp = this.response.parseResponse(bytes_temp, this.command); //received response before timeout

                    if (resp) {
                      this.setBleMsgRx(_standard_enums__WEBPACK_IMPORTED_MODULE_3__.enumDataFrameType.NotifyFrame);
                    } else if (this.command) {
                      this.__resetTimerTimeout();
                    }

                    if (!resp) {
                      _context18.next = 52;
                      break;
                    }

                    // this.vciEvents.emit({isLinkVCI:true,...resp});
                    //this.logger.log('lenght response'+bytes_temp.length);
                    this.respData = Object.assign(Object.assign({}, resp), {
                      isvalid: true
                    });
                    this.response.resetResponse();

                    if (!(this.isRegisterCallBack == true && this.isConfirmNormal == true)) {
                      _context18.next = 52;
                      break;
                    }

                    _context18.next = 52;
                    return this.receivedData(this.respData);

                  case 52:
                    if (this.isConfirmNormalStatus(bytes_temp)) {
                      if (this.isRegisterCallBack) {
                        this.isConfirmNormal = true;
                      }

                      this.logger.logComRx('Confirm Normal Status'); // this.timerIntervalTick =0;
                      // return;
                    }

                    _context18.next = 59;
                    break;

                  case 55:
                    _context18.prev = 55;
                    _context18.t0 = _context18["catch"](0);
                    this.bytes = [];
                    this.logger.log('datareceivehandler ' + _context18.t0);

                  case 59:
                  case "end":
                    return _context18.stop();
                }
              }, _callee18, this, [[0, 55]]);
            }));
          }
        }]);
      }();

      _CommandService.ɵfac = function CommandService_Factory(t) {
        return new (t || _CommandService)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_connectivity_connectivity_service__WEBPACK_IMPORTED_MODULE_7__.ConnectivityService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](src_app_services_events_service__WEBPACK_IMPORTED_MODULE_8__.Events), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_utilities_notify_service__WEBPACK_IMPORTED_MODULE_9__.NotifyService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_Response__WEBPACK_IMPORTED_MODULE_10__.Response));
      };

      _CommandService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjectable"]({
        token: _CommandService,
        factory: _CommandService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    32963:
    /*!************************************************************************!*\
      !*** ./src/app/services/innova-vci-service/src/command/eventParser.ts ***!
      \************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "parserNotifyEvents": function parserNotifyEvents() {
          return (
            /* binding */
            _parserNotifyEvents
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! lodash */
      202);
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _utilities_dataParser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../utilities/dataParser */
      81402);
      /* harmony import */


      var _standard_enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../standard/enums */
      13930);

      function _parserNotifyEvents(eventId, data) {
        try {
          var dataRet = [];

          var parseEventData = function parseEventData(bytedatas) {
            var isUnsigned = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

            try {
              return _utilities_dataParser__WEBPACK_IMPORTED_MODULE_1__.arrayToNumber(bytedatas, 4, false, isUnsigned) / 100;
            } catch (errorexception) {
              return 0.0;
            }
          }; // let eventData = { data: undefined, unit: undefined, name: undefined, value: undefined }


          if (eventId === _standard_enums__WEBPACK_IMPORTED_MODULE_2__.ENUM_EVENTIDTYPES.Engine_status) {
            dataRet.push({
              eventId: eventId,
              value: data[0],
              name: _standard_enums__WEBPACK_IMPORTED_MODULE_2__.ENUM_EVENTTYPEDATA.Ignition,
              data: "'".concat(data[0] ? 'ON' : 'OFF')
            });
            return dataRet;
          } else if (eventId === _standard_enums__WEBPACK_IMPORTED_MODULE_2__.ENUM_EVENTIDTYPES.Battery_warning) {
            dataRet.push({
              eventId: eventId,
              value: data[0],
              name: _standard_enums__WEBPACK_IMPORTED_MODULE_2__.ENUM_EVENTTYPEDATA.Battery_Warning,
              data: "{".concat(data[0] ? 'Low' : 'Normal', "}")
            });
            return dataRet;
          } else if (eventId === _standard_enums__WEBPACK_IMPORTED_MODULE_2__.ENUM_EVENTIDTYPES.Fuel_Economy) {
            var a = lodash__WEBPACK_IMPORTED_MODULE_0__.slice(data, 0, 4);
            a = parseEventData(a);
            dataRet.push({
              eventId: eventId,
              value: a,
              name: _standard_enums__WEBPACK_IMPORTED_MODULE_2__.ENUM_EVENTTYPEDATA.Current_Fuel_Consumption,
              data: "".concat(a.toFixed(2)),
              unit: 'L/100Km'
            });
            a = lodash__WEBPACK_IMPORTED_MODULE_0__.slice(data, 4, 8);
            a = parseEventData(a);
            dataRet.push({
              eventId: eventId,
              value: a,
              name: _standard_enums__WEBPACK_IMPORTED_MODULE_2__.ENUM_EVENTTYPEDATA.Avarage_Fuel_Consumption,
              data: "".concat(a.toFixed(2)),
              unit: 'L/100Km'
            });
            return dataRet;
          } else if (eventId === _standard_enums__WEBPACK_IMPORTED_MODULE_2__.ENUM_EVENTIDTYPES.Fuel_Economy__Other_0c) {
            //hh:mm:ss

            /*
            000024
            84030000
            00000000
            */
            var timeElapse = lodash__WEBPACK_IMPORTED_MODULE_0__.slice(data, 0, 3); //3

            var everageSpeed = lodash__WEBPACK_IMPORTED_MODULE_0__.slice(data, 3, 7); //4

            var distance = lodash__WEBPACK_IMPORTED_MODULE_0__.slice(data, 7, 11); //4
            // let listdata = _.chunk(timeElapse, 1)
            // listdata = listdata.map(t => {
            //   return DataUtils.arrayToNumber(t, 2, false)
            // })

            dataRet.push({
              eventId: eventId,
              value: timeElapse,
              data: "".concat(timeElapse[0].toString(16), ":").concat(timeElapse[1].toString(16), ":").concat(timeElapse[2].toString(16)),
              name: _standard_enums__WEBPACK_IMPORTED_MODULE_2__.ENUM_EVENTTYPEDATA.Time_Elapse
            });
            dataRet.push({
              eventId: eventId,
              value: everageSpeed,
              data: "".concat(parseEventData(everageSpeed).toFixed(2)),
              name: _standard_enums__WEBPACK_IMPORTED_MODULE_2__.ENUM_EVENTTYPEDATA.Average_Speed,
              unit: 'Km/h'
            });
            dataRet.push({
              eventId: eventId,
              value: distance,
              data: "".concat(parseEventData(distance).toFixed(2)),
              name: _standard_enums__WEBPACK_IMPORTED_MODULE_2__.ENUM_EVENTTYPEDATA.Distance,
              unit: 'Km'
            });
            return dataRet;
          } else if (eventId === _standard_enums__WEBPACK_IMPORTED_MODULE_2__.ENUM_EVENTIDTYPES.Fuel_Economy__Other_0d) {
            var _a2 = lodash__WEBPACK_IMPORTED_MODULE_0__.slice(data, 0, 4);

            _a2 = parseEventData(_a2);
            dataRet.push({
              eventId: eventId,
              value: _a2,
              name: _standard_enums__WEBPACK_IMPORTED_MODULE_2__.ENUM_EVENTTYPEDATA.Fuel_Usage,
              data: "".concat(_a2.toFixed(2)),
              unit: 'L'
            });
            _a2 = lodash__WEBPACK_IMPORTED_MODULE_0__.slice(data, 4, 8);
            _a2 = parseEventData(_a2);
            dataRet.push({
              eventId: eventId,
              value: _a2,
              name: _standard_enums__WEBPACK_IMPORTED_MODULE_2__.ENUM_EVENTTYPEDATA.Fuel_Trip,
              data: "".concat(_a2.toFixed(2)),
              unit: 'L/100Km'
            });
            return dataRet;
          } else if (eventId === _standard_enums__WEBPACK_IMPORTED_MODULE_2__.ENUM_EVENTIDTYPES.Fuel_Economy__Other_0e) {
            var _a3 = lodash__WEBPACK_IMPORTED_MODULE_0__.slice(data, 0, 4);

            _a3 = parseEventData(_a3);
            dataRet.push({
              eventId: eventId,
              value: _a3,
              name: _standard_enums__WEBPACK_IMPORTED_MODULE_2__.ENUM_EVENTTYPEDATA.Fuel_Rate,
              data: "".concat(_a3.toFixed(2)),
              unit: 'L/h'
            });
            _a3 = lodash__WEBPACK_IMPORTED_MODULE_0__.slice(data, 4, 8);
            _a3 = parseEventData(_a3);
            dataRet.push({
              eventId: eventId,
              value: _a3,
              name: _standard_enums__WEBPACK_IMPORTED_MODULE_2__.ENUM_EVENTTYPEDATA.Distance_to_Empty,
              data: "".concat(_a3.toFixed(2)),
              unit: 'Km'
            });
            return dataRet;
          } else if (eventId === _standard_enums__WEBPACK_IMPORTED_MODULE_2__.ENUM_EVENTIDTYPES.Fuel_Economy__Other_0f) {
            var fuelStatusParser = function fuelStatusParser(xxx) {
              if (xxx === 1) {
                return 'ECO';
              }

              if (xxx === 0) {
                return 'NON-ECO';
              }

              return 'Not Supported';
            };

            dataRet.push({
              eventId: eventId,
              value: data[0],
              name: _standard_enums__WEBPACK_IMPORTED_MODULE_2__.ENUM_EVENTTYPEDATA.Current_Fuel_Consumption_Status,
              data: "".concat(fuelStatusParser(data[0]))
            });
            dataRet.push({
              eventId: eventId,
              value: data[1],
              name: _standard_enums__WEBPACK_IMPORTED_MODULE_2__.ENUM_EVENTTYPEDATA.Average_Fuel_Consumption_Status,
              data: "".concat(fuelStatusParser(data[1]))
            });

            var _a4 = lodash__WEBPACK_IMPORTED_MODULE_0__.slice(data, 2, 6);

            _a4 = parseEventData(_a4);
            dataRet.push({
              eventId: eventId,
              value: _a4,
              name: _standard_enums__WEBPACK_IMPORTED_MODULE_2__.ENUM_EVENTTYPEDATA.Fuel_Tank_Size,
              data: "".concat(_a4.toFixed(2)),
              unit: 'L'
            });
            _a4 = lodash__WEBPACK_IMPORTED_MODULE_0__.slice(data, 6, 10);
            _a4 = parseEventData(_a4);
            dataRet.push({
              eventId: eventId,
              value: _a4,
              name: _standard_enums__WEBPACK_IMPORTED_MODULE_2__.ENUM_EVENTTYPEDATA.Fuel_Volume_Remaining,
              data: "".concat(_a4.toFixed(2)),
              unit: 'L'
            });
            return dataRet;
          } else if (eventId === _standard_enums__WEBPACK_IMPORTED_MODULE_2__.ENUM_EVENTIDTYPES.Acceleration) {
            var _a5 = lodash__WEBPACK_IMPORTED_MODULE_0__.slice(data, 0, 4);

            _a5 = parseEventData(_a5, false);
            dataRet.push({
              eventId: eventId,
              value: _a5,
              name: _standard_enums__WEBPACK_IMPORTED_MODULE_2__.ENUM_EVENTTYPEDATA.Acceleration,
              data: "".concat(_a5.toFixed(2)),
              unit: 'm/s2'
            });
            return dataRet;
          } else if (eventId === _standard_enums__WEBPACK_IMPORTED_MODULE_2__.ENUM_EVENTIDTYPES.Cooling_water_temperature_high) {
            dataRet.push({
              eventId: eventId,
              value: data[0],
              name: _standard_enums__WEBPACK_IMPORTED_MODULE_2__.ENUM_EVENTTYPEDATA.Cooling_Water_Temperature_High,
              data: "".concat(data[0] ? 'High' : 'Normal')
            });
            return dataRet;
          } else if (eventId === _standard_enums__WEBPACK_IMPORTED_MODULE_2__.ENUM_EVENTIDTYPES.Battery_Health) {
            var getBatteryHealthStatus = function getBatteryHealthStatus(a) {
              if (a === 0) {
                return 'GOOD';
              }

              if (a === 1) {
                return 'NORMAL';
              }

              if (a === 2) {
                return 'WARNING';
              }

              if (a === 3) {
                return 'BAD';
              }

              if (a === 4) {
                return 'NOT DETECT';
              }

              if (a === 4) {
                return 'LOW VOLTAGE';
              }

              return 'Unknow';
            };

            dataRet.push({
              eventId: eventId,
              value: data[0],
              name: _standard_enums__WEBPACK_IMPORTED_MODULE_2__.ENUM_EVENTTYPEDATA.Battery_Health,
              data: getBatteryHealthStatus(data[0])
            });
            return dataRet;
          } else if (eventId === _standard_enums__WEBPACK_IMPORTED_MODULE_2__.ENUM_EVENTIDTYPES.Distance_Since_start) {
            // eventData.name :  'Distance Since Start'
            var _a6 = lodash__WEBPACK_IMPORTED_MODULE_0__.slice(data, 0, 4);

            _a6 = parseEventData(_a6);
            dataRet.push({
              eventId: eventId,
              value: _a6,
              data: "".concat(_a6.toFixed(2)),
              unit: 'km',
              name: _standard_enums__WEBPACK_IMPORTED_MODULE_2__.ENUM_EVENTTYPEDATA.Distance_Since_Start
            });
            return dataRet;
          } else if (eventId === _standard_enums__WEBPACK_IMPORTED_MODULE_2__.ENUM_EVENTIDTYPES.OEMPidNotify) {
            var numberPid = data.shift();
            var listPids = lodash__WEBPACK_IMPORTED_MODULE_0__.chunk(data, 10); // const retPidVal = { data: null, raw: [{ pid: activePid, buff: null }] }

            var pidRetVal = [];
            listPids.forEach(function (oemPiddata) {
              pidRetVal.push({
                pid: oemPiddata[0] + (oemPiddata[1] << 8),
                buff: oemPiddata.slice(2)
              });
            });
            dataRet.push({
              eventId: eventId,
              value: data,
              data: {
                data: null,
                raw: pidRetVal,
                unit: '',
                name: _standard_enums__WEBPACK_IMPORTED_MODULE_2__.ENUM_EVENTTYPEDATA.OemPidData
              }
            });
            return dataRet;
          } else if (eventId === _standard_enums__WEBPACK_IMPORTED_MODULE_2__.ENUM_EVENTIDTYPES.Fuel_Level_Low) {
            dataRet.push({
              eventId: eventId,
              value: data[0],
              name: _standard_enums__WEBPACK_IMPORTED_MODULE_2__.ENUM_EVENTTYPEDATA.Fuel_Level_Low,
              data: "".concat(data[0] ? 'Low' : 'Normal')
            });
            return dataRet;
          } else if (eventId === _standard_enums__WEBPACK_IMPORTED_MODULE_2__.ENUM_EVENTIDTYPES.Average_Speed) {
            // 1.1.toFixed(1)
            var _a7 = lodash__WEBPACK_IMPORTED_MODULE_0__.slice(data, 0, 4);

            _a7 = parseEventData(_a7);
            dataRet.push({
              eventId: eventId,
              value: _a7,
              name: _standard_enums__WEBPACK_IMPORTED_MODULE_2__.ENUM_EVENTTYPEDATA.Average_Speed,
              data: "".concat(_a7.toFixed(2)),
              unit: 'km/h'
            });
            return dataRet;
          } else if (eventId === _standard_enums__WEBPACK_IMPORTED_MODULE_2__.ENUM_EVENTIDTYPES.NetworkScan_Data) {
            data.pop();
            dataRet.push({
              eventId: eventId,
              value: data,
              name: _standard_enums__WEBPACK_IMPORTED_MODULE_2__.ENUM_EVENTTYPEDATA.NetworkScan_Data
            });
            return dataRet;
          }

          return [{
            eventId: eventId,
            value: data,
            name: _standard_enums__WEBPACK_IMPORTED_MODULE_2__.ENUM_EVENTTYPEDATA.Event_Unknow,
            data: _utilities_dataParser__WEBPACK_IMPORTED_MODULE_1__.bytesToString(data)
          }];
        } catch (err) {
          console.log('parserNotifyEvents ERROR', err);
          return undefined;
        }
      }
      /***/

    },

    /***/
    39152:
    /*!******************************************************************!*\
      !*** ./src/app/services/innova-vci-service/src/obd/OBDSystem.ts ***!
      \******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "OBDSystem": function OBDSystem() {
          return (
            /* binding */
            _OBDSystem
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      42321);
      /* harmony import */


      var _vcistd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./vcistd */
      48860);
      /* harmony import */


      var _obd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./obd */
      29326);
      /* harmony import */


      var util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! util */
      94655);
      /* harmony import */


      var util__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _utilities_dataParser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../utilities/dataParser */
      81402);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _OBDSystem = /*#__PURE__*/function (_obd__WEBPACK_IMPORTE) {
        function _OBDSystem() {
          _classCallCheck(this, _OBDSystem);

          return _callSuper(this, _OBDSystem, arguments);
        }

        _inherits(_OBDSystem, _obd__WEBPACK_IMPORTE);

        return _createClass(_OBDSystem, [{
          key: "getECUVoltage",
          value: function getECUVoltage() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee19() {
              var ret, usbData, batvol, j, temp, v;
              return _regeneratorRuntime().wrap(function _callee19$(_context19) {
                while (1) switch (_context19.prev = _context19.next) {
                  case 0:
                    ret = {
                      BatteryVoltage: undefined,
                      Unit: 'V'
                    };
                    usbData = [0, 0];
                    _context19.prev = 2;
                    _context19.next = 5;
                    return this.LinkVciCmd({
                      Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.tool,
                      stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_tool.getecuvoltage,
                      usbData: usbData,
                      nretry: 0,
                      timeout: 300 //chang by ngoclb

                    });

                  case 5:
                    batvol = _context19.sent;
                    j = _utilities_dataParser__WEBPACK_IMPORTED_MODULE_3__.bytesToString(batvol);

                    if (!(j.search("Battery Voltage") > 0)) {
                      _context19.next = 10;
                      break;
                    }

                    temp = JSON.parse(j.replace("Battery Voltage", "BatteryVoltage"));
                    return _context19.abrupt("return", temp);

                  case 10:
                    v = new Float32Array(new Uint8Array(batvol).buffer)[0];

                    if ((0, util__WEBPACK_IMPORTED_MODULE_2__.isNullOrUndefined)(v)) {
                      _context19.next = 13;
                      break;
                    }

                    return _context19.abrupt("return", {
                      BatteryVoltage: v.toFixed(2),
                      Unit: 'V'
                    });

                  case 13:
                    _context19.next = 18;
                    break;

                  case 15:
                    _context19.prev = 15;
                    _context19.t0 = _context19["catch"](2);
                    this.logdebug("getECUVoltage error:" + _context19.t0);

                  case 18:
                    return _context19.abrupt("return", ret);

                  case 19:
                  case "end":
                    return _context19.stop();
                }
              }, _callee19, this, [[2, 15]]);
            }));
          }
        }, {
          key: "settingUnitType",
          value: function settingUnitType(unit_type) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee20() {
              var usbData, val;
              return _regeneratorRuntime().wrap(function _callee20$(_context20) {
                while (1) switch (_context20.prev = _context20.next) {
                  case 0:
                    this.logdebug("Unit Selection:" + unit_type);
                    usbData = _toConsumableArray(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_3__.numberToBytes(unit_type, 1));
                    _context20.prev = 2;
                    _context20.next = 5;
                    return this.LinkVciCmd({
                      Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.tool,
                      stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_tool.setting_unit,
                      usbData: usbData
                    });

                  case 5:
                    val = _context20.sent;

                    if (!(0, util__WEBPACK_IMPORTED_MODULE_2__.isNullOrUndefined)(val)) {
                      _context20.next = 10;
                      break;
                    }

                    return _context20.abrupt("return", false);

                  case 10:
                    return _context20.abrupt("return", true);

                  case 11:
                    _context20.next = 15;
                    break;

                  case 13:
                    _context20.prev = 13;
                    _context20.t0 = _context20["catch"](2);

                  case 15:
                    return _context20.abrupt("return", true);

                  case 16:
                  case "end":
                    return _context20.stop();
                }
              }, _callee20, this, [[2, 13]]);
            }));
          }
        }, {
          key: "SettingLanguage",
          value: function SettingLanguage(lang_id) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee21() {
              var usbData, val;
              return _regeneratorRuntime().wrap(function _callee21$(_context21) {
                while (1) switch (_context21.prev = _context21.next) {
                  case 0:
                    this.logdebug("Language Selection:" + lang_id);
                    usbData = _toConsumableArray(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_3__.numberToBytes(lang_id, 1));
                    _context21.prev = 2;
                    _context21.next = 5;
                    return this.LinkVciCmd({
                      Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.tool,
                      stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_tool.setting_language,
                      usbData: usbData
                    });

                  case 5:
                    val = _context21.sent;

                    if (!(0, util__WEBPACK_IMPORTED_MODULE_2__.isNullOrUndefined)(val)) {
                      _context21.next = 10;
                      break;
                    }

                    return _context21.abrupt("return", false);

                  case 10:
                    return _context21.abrupt("return", true);

                  case 11:
                    _context21.next = 15;
                    break;

                  case 13:
                    _context21.prev = 13;
                    _context21.t0 = _context21["catch"](2);

                  case 15:
                    return _context21.abrupt("return", true);

                  case 16:
                  case "end":
                    return _context21.stop();
                }
              }, _callee21, this, [[2, 13]]);
            }));
          }
        }, {
          key: "Cancel_VCI_Process",
          value: function Cancel_VCI_Process() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee22() {
              return _regeneratorRuntime().wrap(function _callee22$(_context22) {
                while (1) switch (_context22.prev = _context22.next) {
                  case 0:
                    try {
                      this.logdebug("Cancel Process...");
                    } catch (err) {}

                  case 1:
                  case "end":
                    return _context22.stop();
                }
              }, _callee22, this);
            }));
          }
          /**
           * [SetLogFunction Set function id for data logging]
           * @param  func_id [func_id based on VCI_Data_Logging]
           * @return         [boolean]
           */

        }, {
          key: "SetLogFunction",
          value: function SetLogFunction(func_id) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee23() {
              var usbData, func, _yield$this$Link, data;

              return _regeneratorRuntime().wrap(function _callee23$(_context23) {
                while (1) switch (_context23.prev = _context23.next) {
                  case 0:
                    _context23.prev = 0;
                    usbData = [].concat(_toConsumableArray(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_3__.numberToBytes(_vcistd__WEBPACK_IMPORTED_MODULE_0__.ICOMMANDS.LogData.setfuncid.id, 1)), _toConsumableArray(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_3__.numberToBytes(func_id, 1)));
                    this.logdebug("Set Function Log:" + func_id);
                    func = _vcistd__WEBPACK_IMPORTED_MODULE_0__.ICOMMANDS.LogData.setfuncid.options.find(function (o) {
                      return o.value === func_id;
                    });
                    this.logdebug("Set Function Log:" + func.text);
                    _context23.next = 7;
                    return this.Link({
                      id: _vcistd__WEBPACK_IMPORTED_MODULE_0__.ICOMMANDS.LogData.id,
                      data: usbData
                    });

                  case 7:
                    _yield$this$Link = _context23.sent;
                    data = _yield$this$Link.data;
                    return _context23.abrupt("return", true);

                  case 12:
                    _context23.prev = 12;
                    _context23.t0 = _context23["catch"](0);
                    this.logdebug("Set Function Log err:" + _context23.t0);
                    return _context23.abrupt("return", false);

                  case 16:
                  case "end":
                    return _context23.stop();
                }
              }, _callee23, this, [[0, 12]]);
            }));
          }
          /**
           * [StartLog Start Data Log]
           * @return [boolean]
           */

        }, {
          key: "StartLog",
          value: function StartLog() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee24() {
              var usbData;
              return _regeneratorRuntime().wrap(function _callee24$(_context24) {
                while (1) switch (_context24.prev = _context24.next) {
                  case 0:
                    _context24.prev = 0;
                    this.logdebug("Start Log");
                    usbData = _toConsumableArray(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_3__.numberToBytes(_vcistd__WEBPACK_IMPORTED_MODULE_0__.ICOMMANDS.LogData.startlog.id, 1));
                    _context24.next = 5;
                    return this.Link({
                      id: _vcistd__WEBPACK_IMPORTED_MODULE_0__.ICOMMANDS.LogData.id,
                      data: usbData
                    });

                  case 5:
                    return _context24.abrupt("return", true);

                  case 8:
                    _context24.prev = 8;
                    _context24.t0 = _context24["catch"](0);
                    this.logdebug("Start Log err:" + _context24.t0);
                    return _context24.abrupt("return", false);

                  case 12:
                  case "end":
                    return _context24.stop();
                }
              }, _callee24, this, [[0, 8]]);
            }));
          }
          /**
           * [StopLog Stop data logging]
           * @return [boolean]
           */

        }, {
          key: "StopLog",
          value: function StopLog() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee25() {
              var usbData;
              return _regeneratorRuntime().wrap(function _callee25$(_context25) {
                while (1) switch (_context25.prev = _context25.next) {
                  case 0:
                    _context25.prev = 0;
                    this.logdebug("Stop Log");
                    usbData = _toConsumableArray(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_3__.numberToBytes(_vcistd__WEBPACK_IMPORTED_MODULE_0__.ICOMMANDS.LogData.stoplog.id, 1));
                    _context25.next = 5;
                    return this.Link({
                      id: _vcistd__WEBPACK_IMPORTED_MODULE_0__.ICOMMANDS.LogData.id,
                      data: usbData
                    });

                  case 5:
                    return _context25.abrupt("return", true);

                  case 8:
                    _context25.prev = 8;
                    _context25.t0 = _context25["catch"](0);
                    this.logdebug("Stop Log err:" + _context25.t0);
                    return _context25.abrupt("return", false);

                  case 12:
                  case "end":
                    return _context25.stop();
                }
              }, _callee25, this, [[0, 8]]);
            }));
          }
          /**
           * [GetLog Get Log Data]
           * @return [Logging data]
           */

        }, {
          key: "GetLog",
          value: function GetLog() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee26() {
              var usbData, _yield$this$LinkMulti, data;

              return _regeneratorRuntime().wrap(function _callee26$(_context26) {
                while (1) switch (_context26.prev = _context26.next) {
                  case 0:
                    _context26.prev = 0;
                    this.logdebug("Get Log");
                    usbData = _toConsumableArray(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_3__.numberToBytes(_vcistd__WEBPACK_IMPORTED_MODULE_0__.ICOMMANDS.LogData.getlog_encrypt.id, 1));
                    _context26.next = 5;
                    return this.LinkMultiData({
                      id: _vcistd__WEBPACK_IMPORTED_MODULE_0__.ICOMMANDS.LogData.id,
                      data: usbData
                    });

                  case 5:
                    _yield$this$LinkMulti = _context26.sent;
                    data = _yield$this$LinkMulti.data;
                    return _context26.abrupt("return", data);

                  case 10:
                    _context26.prev = 10;
                    _context26.t0 = _context26["catch"](0);
                    this.logdebug("Get Log err:" + _context26.t0);
                    return _context26.abrupt("return", null);

                  case 14:
                  case "end":
                    return _context26.stop();
                }
              }, _callee26, this, [[0, 10]]);
            }));
          }
        }, {
          key: "guidToBytes",
          value: function guidToBytes(guid) {
            var bytes = [];
            guid.split('-').map(function (number, index) {
              var bytesInChar = index < 3 ? number.match(/.{1,2}/g).reverse() : number.match(/.{1,2}/g);
              bytesInChar.map(function (_byte) {
                bytes.push(parseInt(_byte, 16));
              });
            });
            return bytes;
          }
          /**
           * [readGUID Function to read GUID]
           * @return [string of GUID]
           */

        }, {
          key: "readGUID",
          value: function readGUID() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee27() {
              var _yield$this$Link2, data, guid, new_x;

              return _regeneratorRuntime().wrap(function _callee27$(_context27) {
                while (1) switch (_context27.prev = _context27.next) {
                  case 0:
                    _context27.prev = 0;
                    _context27.next = 3;
                    return this.Link(_vcistd__WEBPACK_IMPORTED_MODULE_0__.ICOMMANDS.getGuid);

                  case 3:
                    _yield$this$Link2 = _context27.sent;
                    data = _yield$this$Link2.data;
                    guid = data.slice(0, 4).reverse().concat(data.slice(4, 6).reverse()).concat(data.slice(6, 8).reverse()).concat(data.slice(8));
                    new_x = Array.from(guid, function (_byte2) {
                      return ('0' + (_byte2 & 0xFF).toString(16)).slice(-2);
                    }).join('').replace(/(.{8})(.{4})(.{4})(.{4})(.{12})/, "$1-$2-$3-$4-$5").toUpperCase();
                    this.logdebug('GUIID:' + new_x);
                    return _context27.abrupt("return", new_x);

                  case 11:
                    _context27.prev = 11;
                    _context27.t0 = _context27["catch"](0);
                    this.logdebug('Error when reading GUIID:' + _context27.t0);
                    return _context27.abrupt("return", null);

                  case 15:
                  case "end":
                    return _context27.stop();
                }
              }, _callee27, this, [[0, 11]]);
            }));
          }
          /**
           * [writeGUID Function to write GUID]
           * @param  guiid [string of guid]
           * @return       [boolean]
           */

        }, {
          key: "writeGUID",
          value: function writeGUID(guiid) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee28() {
              var _yield$this$Link3, data;

              return _regeneratorRuntime().wrap(function _callee28$(_context28) {
                while (1) switch (_context28.prev = _context28.next) {
                  case 0:
                    _context28.prev = 0;
                    this.logdebug('Writing GUID:' + guiid);
                    _context28.next = 4;
                    return this.Link({
                      id: _vcistd__WEBPACK_IMPORTED_MODULE_0__.ICOMMANDS.setGuid.id,
                      data: this.guidToBytes(guiid)
                    });

                  case 4:
                    _yield$this$Link3 = _context28.sent;
                    data = _yield$this$Link3.data;
                    return _context28.abrupt("return", true);

                  case 9:
                    _context28.prev = 9;
                    _context28.t0 = _context28["catch"](0);
                    this.logdebug('Error when writing GUIID:' + _context28.t0);
                    return _context28.abrupt("return", false);

                  case 13:
                  case "end":
                    return _context28.stop();
                }
              }, _callee28, this, [[0, 9]]);
            }));
          }
        }]);
      }(_obd__WEBPACK_IMPORTED_MODULE_1__.OBDx);

      _OBDSystem.ɵfac = /*@__PURE__*/function () {
        var ɵOBDSystem_BaseFactory;
        return function OBDSystem_Factory(t) {
          return (ɵOBDSystem_BaseFactory || (ɵOBDSystem_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetInheritedFactory"](_OBDSystem)))(t || _OBDSystem);
        };
      }();

      _OBDSystem.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
        token: _OBDSystem,
        factory: _OBDSystem.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    71362:
    /*!************************************************************!*\
      !*** ./src/app/services/innova-vci-service/src/obd/gui.ts ***!
      \************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "GUI": function GUI() {
          return (
            /* binding */
            _GUI
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      42321);
      /* harmony import */


      var _vcistd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./vcistd */
      48860);
      /* harmony import */


      var _obd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./obd */
      29326);
      /* harmony import */


      var _utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../utilities/dataParser */
      81402);
      /* harmony import */


      var util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! util */
      94655);
      /* harmony import */


      var util__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _GUI = /*#__PURE__*/function (_obd__WEBPACK_IMPORTE2) {
        function _GUI() {
          var _this11;

          _classCallCheck(this, _GUI);

          _this11 = _callSuper(this, _GUI, arguments);

          _this11.gui_call_func = function (data) {};

          _this11.that = null;
          return _this11;
        }

        _inherits(_GUI, _obd__WEBPACK_IMPORTE2);

        return _createClass(_GUI, [{
          key: "gui_notice_disp",
          value: function gui_notice_disp() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee29() {
              var data;
              return _regeneratorRuntime().wrap(function _callee29$(_context29) {
                while (1) switch (_context29.prev = _context29.next) {
                  case 0:
                    _context29.prev = 0;
                    _context29.next = 3;
                    return this.LinkVciCmd({
                      Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.gui,
                      stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_GUI.gui_lcd_display
                    });

                  case 3:
                    data = _context29.sent;
                    _context29.next = 9;
                    break;

                  case 6:
                    _context29.prev = 6;
                    _context29.t0 = _context29["catch"](0);
                    this.logdebug(_context29.t0);

                  case 9:
                  case "end":
                    return _context29.stop();
                }
              }, _callee29, this, [[0, 6]]);
            }));
          }
        }, {
          key: "proc_enter_proc",
          value: function proc_enter_proc(proc_id, cmd_id) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee30() {
              var usbData, data;
              return _regeneratorRuntime().wrap(function _callee30$(_context30) {
                while (1) switch (_context30.prev = _context30.next) {
                  case 0:
                    _context30.prev = 0;
                    usbData = [].concat(_toConsumableArray(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.numberToBytes(proc_id, 2)), _toConsumableArray(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.numberToBytes(cmd_id, 2)));
                    this.logdebug("Enter Process:" + proc_id + ",cmd_id" + cmd_id);
                    _context30.next = 5;
                    return this.LinkVciCmd({
                      Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.gui,
                      stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_GUI.gui_proc_enter,
                      usbData: usbData,
                      nretry: 1,
                      timeout: 1000
                    });

                  case 5:
                    data = _context30.sent;

                    if (!(0, util__WEBPACK_IMPORTED_MODULE_3__.isNullOrUndefined)(data)) {
                      _context30.next = 10;
                      break;
                    }

                    return _context30.abrupt("return", false);

                  case 10:
                    return _context30.abrupt("return", true);

                  case 11:
                    _context30.next = 16;
                    break;

                  case 13:
                    _context30.prev = 13;
                    _context30.t0 = _context30["catch"](0);
                    this.logdebug(_context30.t0);

                  case 16:
                  case "end":
                    return _context30.stop();
                }
              }, _callee30, this, [[0, 13]]);
            }));
          }
        }, {
          key: "proc_leave_proc",
          value: function proc_leave_proc() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee31() {
              return _regeneratorRuntime().wrap(function _callee31$(_context31) {
                while (1) switch (_context31.prev = _context31.next) {
                  case 0:
                    _context31.prev = 0;
                    _context31.next = 3;
                    return this.LinkVciCmd({
                      Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.gui,
                      stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_GUI.gui_proc_leave
                    });

                  case 3:
                    _context31.next = 8;
                    break;

                  case 5:
                    _context31.prev = 5;
                    _context31.t0 = _context31["catch"](0);
                    this.logdebug(_context31.t0);

                  case 8:
                  case "end":
                    return _context31.stop();
                }
              }, _callee31, this, [[0, 5]]);
            }));
          }
        }, {
          key: "proc_terminate_proc",
          value: function proc_terminate_proc() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee32() {
              return _regeneratorRuntime().wrap(function _callee32$(_context32) {
                while (1) switch (_context32.prev = _context32.next) {
                  case 0:
                    _context32.prev = 0;
                    _context32.next = 3;
                    return this.LinkVciCmd({
                      Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.gui,
                      stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_GUI.gui_proc_terminate,
                      nretry: 0,
                      timeout: 500 // ngoclb: set timeout for this command

                    });

                  case 3:
                    _context32.next = 8;
                    break;

                  case 5:
                    _context32.prev = 5;
                    _context32.t0 = _context32["catch"](0);
                    this.logdebug(_context32.t0);

                  case 8:
                  case "end":
                    return _context32.stop();
                }
              }, _callee32, this, [[0, 5]]);
            }));
          }
        }, {
          key: "gui_set_key_code",
          value: function gui_set_key_code(keycode) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee33() {
              var usbData;
              return _regeneratorRuntime().wrap(function _callee33$(_context33) {
                while (1) switch (_context33.prev = _context33.next) {
                  case 0:
                    _context33.prev = 0;
                    usbData = _toConsumableArray(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.numberToBytes(keycode, 2));
                    this.logdebug('Set Keycode:' + keycode);
                    _context33.next = 5;
                    return this.LinkVciCmd({
                      Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.gui,
                      stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_GUI.gui_set_key,
                      usbData: usbData,
                      nretry: 3
                    });

                  case 5:
                    _context33.next = 10;
                    break;

                  case 7:
                    _context33.prev = 7;
                    _context33.t0 = _context33["catch"](0);
                    this.logdebug(_context33.t0);

                  case 10:
                  case "end":
                    return _context33.stop();
                }
              }, _callee33, this, [[0, 7]]);
            }));
          }
        }, {
          key: "gui_set_key_code_with_index",
          value: function gui_set_key_code_with_index(keycode, index) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee34() {
              var usbData;
              return _regeneratorRuntime().wrap(function _callee34$(_context34) {
                while (1) switch (_context34.prev = _context34.next) {
                  case 0:
                    _context34.prev = 0;
                    usbData = [].concat(_toConsumableArray(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.numberToBytes(keycode, 2)), _toConsumableArray(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.numberToBytes(index, 4)));
                    this.logdebug('Set Keycode:' + keycode);
                    this.logdebug('Set Keyindex:' + index);
                    _context34.next = 6;
                    return this.LinkVciCmd({
                      Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.gui,
                      stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_GUI.gui_set_key_with_index,
                      usbData: usbData,
                      nretry: 3
                    });

                  case 6:
                    _context34.next = 11;
                    break;

                  case 8:
                    _context34.prev = 8;
                    _context34.t0 = _context34["catch"](0);
                    this.logdebug(_context34.t0);

                  case 11:
                  case "end":
                    return _context34.stop();
                }
              }, _callee34, this, [[0, 8]]);
            }));
          }
        }, {
          key: "gui_proc_sf_at_set_active_module",
          value: function gui_proc_sf_at_set_active_module(system, subsystem) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee35() {
              var usbData, data;
              return _regeneratorRuntime().wrap(function _callee35$(_context35) {
                while (1) switch (_context35.prev = _context35.next) {
                  case 0:
                    usbData = [].concat(_toConsumableArray(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.numberToBytes(system, 2)), _toConsumableArray(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.numberToBytes(subsystem, 2)));
                    this.logdebug('Set system:' + system + ' ' + 'SubSystem:' + subsystem);
                    _context35.next = 4;
                    return this.LinkVciCmd({
                      Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.gui,
                      stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_GUI.gui_set_special_at_module,
                      usbData: usbData,
                      nretry: 1,
                      timeout: 5000
                    });

                  case 4:
                    data = _context35.sent;

                    if (!(0, util__WEBPACK_IMPORTED_MODULE_3__.isNullOrUndefined)(data)) {
                      _context35.next = 9;
                      break;
                    }

                    return _context35.abrupt("return", false);

                  case 9:
                    return _context35.abrupt("return", true);

                  case 10:
                  case "end":
                    return _context35.stop();
                }
              }, _callee35, this);
            }));
          }
        }, {
          key: "gui_proc_enter_specialFunction_feature",
          value: function gui_proc_enter_specialFunction_feature(group_id) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee36() {
              var usbData, data;
              return _regeneratorRuntime().wrap(function _callee36$(_context36) {
                while (1) switch (_context36.prev = _context36.next) {
                  case 0:
                    usbData = [].concat(_toConsumableArray(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.numberToBytes(_vcistd__WEBPACK_IMPORTED_MODULE_0__.SYS_PROC_ID.PROC_SPECIAL_FUNCTION, 2)), _toConsumableArray(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.numberToBytes(_vcistd__WEBPACK_IMPORTED_MODULE_0__.SYS_CMD_ID.CMD_INIT_PROC, 2)), _toConsumableArray(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.numberToBytes(group_id, 1)));
                    _context36.next = 3;
                    return this.LinkVciCmd({
                      Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.gui,
                      stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_GUI.gui_proc_enter,
                      usbData: usbData,
                      nretry: 1,
                      timeout: 5000
                    });

                  case 3:
                    data = _context36.sent;

                    if (!(0, util__WEBPACK_IMPORTED_MODULE_3__.isNullOrUndefined)(data)) {
                      _context36.next = 8;
                      break;
                    }

                    return _context36.abrupt("return", false);

                  case 8:
                    return _context36.abrupt("return", true);

                  case 9:
                  case "end":
                    return _context36.stop();
                }
              }, _callee36, this);
            }));
          }
        }, {
          key: "gui_set_special_function_group",
          value: function gui_set_special_function_group(group_id) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee38() {
              var _this12 = this;

              return _regeneratorRuntime().wrap(function _callee38$(_context38) {
                while (1) switch (_context38.prev = _context38.next) {
                  case 0:
                    return _context38.abrupt("return", new Promise(function (resolve) {
                      return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(_this12, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee37() {
                        var usbData, data;
                        return _regeneratorRuntime().wrap(function _callee37$(_context37) {
                          while (1) switch (_context37.prev = _context37.next) {
                            case 0:
                              _context37.prev = 0;
                              usbData = _toConsumableArray(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.numberToBytes(group_id, 1));
                              this.logdebug('Set Special Function Group:' + group_id);
                              _context37.next = 5;
                              return this.LinkVciCmd({
                                Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.gui,
                                stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_GUI.gui_set_special_function_group,
                                usbData: usbData,
                                timeout: 1000
                              });

                            case 5:
                              data = _context37.sent;

                              if (!(0, util__WEBPACK_IMPORTED_MODULE_3__.isNullOrUndefined)(data)) {
                                _context37.next = 10;
                                break;
                              }

                              return _context37.abrupt("return", resolve(false));

                            case 10:
                              return _context37.abrupt("return", resolve(true));

                            case 12:
                              _context37.next = 18;
                              break;

                            case 14:
                              _context37.prev = 14;
                              _context37.t0 = _context37["catch"](0);
                              this.logdebug(_context37.t0);
                              return _context37.abrupt("return", resolve(false));

                            case 18:
                            case "end":
                              return _context37.stop();
                          }
                        }, _callee37, this, [[0, 14]]);
                      }));
                    }));

                  case 1:
                  case "end":
                    return _context38.stop();
                }
              }, _callee38);
            }));
          }
        }, {
          key: "set_param",
          value: function set_param(type, param) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee40() {
              var _this13 = this;

              var stt, usbData;
              return _regeneratorRuntime().wrap(function _callee40$(_context40) {
                while (1) switch (_context40.prev = _context40.next) {
                  case 0:
                    // { return new Promise( async (resolve,reject)=>{
                    //   let stt= false;
                    //   try{
                    //     await this.logdebug('Set Param:'+ param);
                    //     //this.logdebug('Type Param:'+ (typeof param));
                    //     let usbData=[]
                    //
                    //     switch(typeof param)
                    //     {
                    //       case 'number':
                    //         usbData = [...DataParser.numberToBytes(type, 1), ...DataParser.numberToBytes(param, 4)];
                    //       break;
                    //       case 'string':
                    //         usbData = [...DataParser.numberToBytes(type, 1), ...DataParser.stringToBytes(param)];
                    //       break;
                    //       default:
                    //       break;
                    //     }
                    //
                    //     await this.LinkVciCmd({
                    //         Procid: ENUMVCIs.VCIProg.gui,
                    //         stateid: ENUMVCIs.VCICmd_GUI.gui_set_param,
                    //         usbData,nretry:3
                    //     }).then(async (data)=>{
                    //       if(data== undefined||data==null)
                    //       {
                    //         await this.logdebug('set Param false')
                    //         stt=false;
                    //       }
                    //       else
                    //       {
                    //         await this.logdebug('set Param true')
                    //         stt = true;
                    //       }
                    //     })
                    //     await this.logdebug('Finish set option')
                    //
                    //     //return resolve(true);
                    //   }
                    //   catch(err)
                    //   {
                    //     this.logdebug(err);
                    //     return reject(Error('Error message'));
                    //     //return resolve(false);
                    //   }
                    //   return await resolve(stt);
                    // })
                    stt = false;
                    _context40.prev = 1;
                    _context40.next = 4;
                    return this.logdebug('Set Param:' + param);

                  case 4:
                    //this.logdebug('Type Param:'+ (typeof param));
                    usbData = [];
                    _context40.t0 = typeof param;
                    _context40.next = _context40.t0 === 'number' ? 8 : _context40.t0 === 'string' ? 10 : 12;
                    break;

                  case 8:
                    usbData = [].concat(_toConsumableArray(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.numberToBytes(type, 1)), _toConsumableArray(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.numberToBytes(param, 4)));
                    return _context40.abrupt("break", 13);

                  case 10:
                    usbData = [].concat(_toConsumableArray(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.numberToBytes(type, 1)), _toConsumableArray(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.stringToBytes(param)));
                    return _context40.abrupt("break", 13);

                  case 12:
                    return _context40.abrupt("break", 13);

                  case 13:
                    _context40.next = 15;
                    return this.LinkVciCmd({
                      Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.gui,
                      stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_GUI.gui_set_param,
                      usbData: usbData,
                      nretry: 3
                    }).then(function (data) {
                      return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(_this13, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee39() {
                        return _regeneratorRuntime().wrap(function _callee39$(_context39) {
                          while (1) switch (_context39.prev = _context39.next) {
                            case 0:
                              if (!(data == undefined || data == null)) {
                                _context39.next = 6;
                                break;
                              }

                              _context39.next = 3;
                              return this.logdebug('set Param false');

                            case 3:
                              stt = false;
                              _context39.next = 9;
                              break;

                            case 6:
                              _context39.next = 8;
                              return this.logdebug('set Param true');

                            case 8:
                              stt = true;

                            case 9:
                            case "end":
                              return _context39.stop();
                          }
                        }, _callee39, this);
                      }));
                    });

                  case 15:
                    _context40.next = 17;
                    return this.logdebug('Finish set option');

                  case 17:
                    _context40.next = 22;
                    break;

                  case 19:
                    _context40.prev = 19;
                    _context40.t1 = _context40["catch"](1);
                    this.logdebug(_context40.t1); //return reject(Error('Error message'));
                    //return resolve(false);

                  case 22:
                    return _context40.abrupt("return", stt);

                  case 23:
                  case "end":
                    return _context40.stop();
                }
              }, _callee40, this, [[1, 19]]);
            }));
          }
        }]);
      }(_obd__WEBPACK_IMPORTED_MODULE_1__.OBDx);

      _GUI.ɵfac = /*@__PURE__*/function () {
        var ɵGUI_BaseFactory;
        return function GUI_Factory(t) {
          return (ɵGUI_BaseFactory || (ɵGUI_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetInheritedFactory"](_GUI)))(t || _GUI);
        };
      }();

      _GUI.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
        token: _GUI,
        factory: _GUI.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    55123:
    /*!*****************************************************************!*\
      !*** ./src/app/services/innova-vci-service/src/obd/livedata.ts ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Livedata": function Livedata() {
          return (
            /* binding */
            _Livedata
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      42321);
      /* harmony import */


      var _vcistd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./vcistd */
      48860);
      /* harmony import */


      var _obd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./obd */
      29326);
      /* harmony import */


      var _utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../utilities/dataParser */
      81402);
      /* harmony import */


      var _standard_enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../standard/enums */
      13930);
      /* harmony import */


      var util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! util */
      94655);
      /* harmony import */


      var util__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _Livedata = /*#__PURE__*/function (_obd__WEBPACK_IMPORTE3) {
        function _Livedata() {
          _classCallCheck(this, _Livedata);

          return _callSuper(this, _Livedata, arguments);
        }

        _inherits(_Livedata, _obd__WEBPACK_IMPORTE3);

        return _createClass(_Livedata, [{
          key: "getOBD2_LiveDataListPIDsupport",
          value: function getOBD2_LiveDataListPIDsupport() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee41() {
              return _regeneratorRuntime().wrap(function _callee41$(_context41) {
                while (1) switch (_context41.prev = _context41.next) {
                  case 0:
                    _context41.next = 2;
                    return this.getlivedatapidsupport_group(_standard_enums__WEBPACK_IMPORTED_MODULE_3__.enumInnovagroup.einnovagroup_GROUP_OBDII);

                  case 2:
                    return _context41.abrupt("return", _context41.sent);

                  case 3:
                  case "end":
                    return _context41.stop();
                }
              }, _callee41, this);
            }));
          }
        }, {
          key: "getOBD2_LiveDataItem_Val",
          value: function getOBD2_LiveDataItem_Val(itemid) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee42() {
              return _regeneratorRuntime().wrap(function _callee42$(_context42) {
                while (1) switch (_context42.prev = _context42.next) {
                  case 0:
                    _context42.next = 2;
                    return this.getlivedata_itemval(_standard_enums__WEBPACK_IMPORTED_MODULE_3__.enumInnovagroup.einnovagroup_GROUP_OBDII, itemid);

                  case 2:
                    return _context42.abrupt("return", _context42.sent);

                  case 3:
                  case "end":
                    return _context42.stop();
                }
              }, _callee42, this);
            }));
          }
        }, {
          key: "getABS_LiveDataListPIDsupport",
          value: function getABS_LiveDataListPIDsupport() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee43() {
              return _regeneratorRuntime().wrap(function _callee43$(_context43) {
                while (1) switch (_context43.prev = _context43.next) {
                  case 0:
                    _context43.next = 2;
                    return this.getlivedatapidsupport_group_v2(_standard_enums__WEBPACK_IMPORTED_MODULE_3__.enumInnovagroup.einnovagroup_GROUP_ABS);

                  case 2:
                    return _context43.abrupt("return", _context43.sent);

                  case 3:
                  case "end":
                    return _context43.stop();
                }
              }, _callee43, this);
            }));
          }
        }, {
          key: "getABS_LiveDataItem_Val",
          value: function getABS_LiveDataItem_Val(itemid) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee44() {
              return _regeneratorRuntime().wrap(function _callee44$(_context44) {
                while (1) switch (_context44.prev = _context44.next) {
                  case 0:
                    _context44.next = 2;
                    return this.getlivedata_itemval_v2(_standard_enums__WEBPACK_IMPORTED_MODULE_3__.enumInnovagroup.einnovagroup_GROUP_ABS, itemid);

                  case 2:
                    return _context44.abrupt("return", _context44.sent);

                  case 3:
                  case "end":
                    return _context44.stop();
                }
              }, _callee44, this);
            }));
          }
        }, {
          key: "getECM_LiveDataListPIDsupport",
          value: function getECM_LiveDataListPIDsupport() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee45() {
              return _regeneratorRuntime().wrap(function _callee45$(_context45) {
                while (1) switch (_context45.prev = _context45.next) {
                  case 0:
                    _context45.next = 2;
                    return this.getlivedatapidsupport_group_v2(_standard_enums__WEBPACK_IMPORTED_MODULE_3__.enumInnovagroup.einnovagroup_GROUP_ENH_ECM);

                  case 2:
                    return _context45.abrupt("return", _context45.sent);

                  case 3:
                  case "end":
                    return _context45.stop();
                }
              }, _callee45, this);
            }));
          }
        }, {
          key: "getECM_LiveDataItem_Val",
          value: function getECM_LiveDataItem_Val(itemid) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee46() {
              return _regeneratorRuntime().wrap(function _callee46$(_context46) {
                while (1) switch (_context46.prev = _context46.next) {
                  case 0:
                    _context46.next = 2;
                    return this.getlivedata_itemval_v2(_standard_enums__WEBPACK_IMPORTED_MODULE_3__.enumInnovagroup.einnovagroup_GROUP_ENH_ECM, itemid);

                  case 2:
                    return _context46.abrupt("return", _context46.sent);

                  case 3:
                  case "end":
                    return _context46.stop();
                }
              }, _callee46, this);
            }));
          }
        }, {
          key: "getOther_LiveDataItem_Val",
          value: function getOther_LiveDataItem_Val(itemid) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee47() {
              return _regeneratorRuntime().wrap(function _callee47$(_context47) {
                while (1) switch (_context47.prev = _context47.next) {
                  case 0:
                    _context47.next = 2;
                    return this.getlivedata_itemval_v2(_standard_enums__WEBPACK_IMPORTED_MODULE_3__.enumInnovagroup.einnovagroup_INNOVA_GROUP_UNKNOW, itemid);

                  case 2:
                    return _context47.abrupt("return", _context47.sent);

                  case 3:
                  case "end":
                    return _context47.stop();
                }
              }, _callee47, this);
            }));
          }
        }, {
          key: "getSRS_LiveDataListPIDsupport",
          value: function getSRS_LiveDataListPIDsupport() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee48() {
              return _regeneratorRuntime().wrap(function _callee48$(_context48) {
                while (1) switch (_context48.prev = _context48.next) {
                  case 0:
                    _context48.next = 2;
                    return this.getlivedatapidsupport_group_v2(_standard_enums__WEBPACK_IMPORTED_MODULE_3__.enumInnovagroup.einnovagroup_GROUP_SRS);

                  case 2:
                    return _context48.abrupt("return", _context48.sent);

                  case 3:
                  case "end":
                    return _context48.stop();
                }
              }, _callee48, this);
            }));
          }
        }, {
          key: "getSRS_LiveDataItem_Val",
          value: function getSRS_LiveDataItem_Val(itemid) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee49() {
              return _regeneratorRuntime().wrap(function _callee49$(_context49) {
                while (1) switch (_context49.prev = _context49.next) {
                  case 0:
                    _context49.next = 2;
                    return this.getlivedata_itemval_v2(_standard_enums__WEBPACK_IMPORTED_MODULE_3__.enumInnovagroup.einnovagroup_GROUP_SRS, itemid);

                  case 2:
                    return _context49.abrupt("return", _context49.sent);

                  case 3:
                  case "end":
                    return _context49.stop();
                }
              }, _callee49, this);
            }));
          }
        }, {
          key: "getECM_LiveDataNumberItemSupport",
          value: function getECM_LiveDataNumberItemSupport() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee50() {
              return _regeneratorRuntime().wrap(function _callee50$(_context50) {
                while (1) switch (_context50.prev = _context50.next) {
                  case 0:
                    _context50.next = 2;
                    return this.getlivedata_numberpidsuppport_group_v2(_standard_enums__WEBPACK_IMPORTED_MODULE_3__.enumInnovagroup.einnovagroup_GROUP_ENH_ECM);

                  case 2:
                    return _context50.abrupt("return", _context50.sent);

                  case 3:
                  case "end":
                    return _context50.stop();
                }
              }, _callee50, this);
            }));
          }
        }, {
          key: "getSRS_LiveDataNumberItemSupport",
          value: function getSRS_LiveDataNumberItemSupport() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee51() {
              return _regeneratorRuntime().wrap(function _callee51$(_context51) {
                while (1) switch (_context51.prev = _context51.next) {
                  case 0:
                    _context51.next = 2;
                    return this.getlivedata_numberpidsuppport_group_v2(_standard_enums__WEBPACK_IMPORTED_MODULE_3__.enumInnovagroup.einnovagroup_GROUP_SRS);

                  case 2:
                    return _context51.abrupt("return", _context51.sent);

                  case 3:
                  case "end":
                    return _context51.stop();
                }
              }, _callee51, this);
            }));
          }
        }, {
          key: "getABS_LiveDataNumberItemSupport",
          value: function getABS_LiveDataNumberItemSupport() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee52() {
              return _regeneratorRuntime().wrap(function _callee52$(_context52) {
                while (1) switch (_context52.prev = _context52.next) {
                  case 0:
                    _context52.next = 2;
                    return this.getlivedata_numberpidsuppport_group_v2(_standard_enums__WEBPACK_IMPORTED_MODULE_3__.enumInnovagroup.einnovagroup_GROUP_ABS);

                  case 2:
                    return _context52.abrupt("return", _context52.sent);

                  case 3:
                  case "end":
                    return _context52.stop();
                }
              }, _callee52, this);
            }));
          }
        }, {
          key: "getlivedatapidsupport_group",
          value: function getlivedatapidsupport_group(innovagroup) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee54() {
              var _this14 = this;

              return _regeneratorRuntime().wrap(function _callee54$(_context54) {
                while (1) switch (_context54.prev = _context54.next) {
                  case 0:
                    return _context54.abrupt("return", new Promise(function (resolve) {
                      return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(_this14, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee53() {
                        var usbData, data, j;
                        return _regeneratorRuntime().wrap(function _callee53$(_context53) {
                          while (1) switch (_context53.prev = _context53.next) {
                            case 0:
                              _context53.prev = 0;
                              usbData = _toConsumableArray(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.numberToBytes(innovagroup, 1));
                              this.logdebug('Checking item support ' + innovagroup);
                              _context53.next = 5;
                              return this.LinkVciCmd({
                                Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.livedata,
                                stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_livedata.read_itemlist,
                                usbData: usbData,
                                nretry: 1,
                                timeout: 30000
                              });

                            case 5:
                              data = _context53.sent;
                              j = _utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.bytesToString(data);
                              this.logdebug(j);
                              return _context53.abrupt("return", resolve(JSON.parse(j)));

                            case 11:
                              _context53.prev = 11;
                              _context53.t0 = _context53["catch"](0);
                              this.logdebug(_context53.t0);
                              return _context53.abrupt("return", resolve({}));

                            case 15:
                            case "end":
                              return _context53.stop();
                          }
                        }, _callee53, this, [[0, 11]]);
                      }));
                    }));

                  case 1:
                  case "end":
                    return _context54.stop();
                }
              }, _callee54);
            }));
          }
        }, {
          key: "getlivedata_itemval",
          value: function getlivedata_itemval(innovagroup, itemid) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee56() {
              var _this15 = this;

              return _regeneratorRuntime().wrap(function _callee56$(_context56) {
                while (1) switch (_context56.prev = _context56.next) {
                  case 0:
                    return _context56.abrupt("return", new Promise(function (resolve) {
                      return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(_this15, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee55() {
                        var usbData, data, j;
                        return _regeneratorRuntime().wrap(function _callee55$(_context55) {
                          while (1) switch (_context55.prev = _context55.next) {
                            case 0:
                              _context55.prev = 0;
                              usbData = [].concat(_toConsumableArray(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.numberToBytes(innovagroup, 1)), _toConsumableArray(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.numberToBytes(itemid, 2)));
                              this.logdebug('Checking item support ' + itemid);
                              _context55.next = 5;
                              return this.LinkVciCmd({
                                Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.livedata,
                                stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_livedata.read_itemval,
                                usbData: usbData,
                                nretry: 1,
                                timeout: 20000
                              });

                            case 5:
                              data = _context55.sent;
                              j = _utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.bytesToString(data).split('\n').join('-'); //this.logdebug('item string:'+j);

                              return _context55.abrupt("return", resolve(JSON.parse(j)));

                            case 10:
                              _context55.prev = 10;
                              _context55.t0 = _context55["catch"](0);
                              this.logdebug(_context55.t0);
                              return _context55.abrupt("return", resolve({}));

                            case 14:
                            case "end":
                              return _context55.stop();
                          }
                        }, _callee55, this, [[0, 10]]);
                      }));
                    }));

                  case 1:
                  case "end":
                    return _context56.stop();
                }
              }, _callee56);
            }));
          }
        }, {
          key: "getlivedata_itemval_v2",
          value: function getlivedata_itemval_v2(innovagroup, itemid) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee58() {
              var _this16 = this;

              return _regeneratorRuntime().wrap(function _callee58$(_context58) {
                while (1) switch (_context58.prev = _context58.next) {
                  case 0:
                    return _context58.abrupt("return", new Promise(function (resolve) {
                      return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(_this16, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee57() {
                        var usbData, data, j;
                        return _regeneratorRuntime().wrap(function _callee57$(_context57) {
                          while (1) switch (_context57.prev = _context57.next) {
                            case 0:
                              _context57.prev = 0;
                              usbData = [].concat(_toConsumableArray(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.numberToBytes(innovagroup, 1)), _toConsumableArray(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.numberToBytes(itemid, 2)));
                              this.logdebug('Checking item support ' + itemid);
                              _context57.next = 5;
                              return this.LinkVciCmd({
                                Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.livedata,
                                stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_livedata.get_itemval_v2,
                                usbData: usbData,
                                nretry: 1,
                                timeout: 20000
                              });

                            case 5:
                              data = _context57.sent;
                              j = _utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.bytesToString(data).split('\n').join('-');
                              this.logdebug('item string:' + j);
                              return _context57.abrupt("return", resolve(JSON.parse(j)));

                            case 11:
                              _context57.prev = 11;
                              _context57.t0 = _context57["catch"](0);
                              this.logdebug(_context57.t0);
                              return _context57.abrupt("return", resolve({}));

                            case 15:
                            case "end":
                              return _context57.stop();
                          }
                        }, _callee57, this, [[0, 11]]);
                      }));
                    }));

                  case 1:
                  case "end":
                    return _context58.stop();
                }
              }, _callee58);
            }));
          }
        }, {
          key: "getlivedata_list_itemval",
          value: function getlivedata_list_itemval(innovagroup, start_idx, end_idx) {
            var _this17 = this;

            return new Promise(function (resolve) {
              return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(_this17, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee59() {
                var usbData, data, j;
                return _regeneratorRuntime().wrap(function _callee59$(_context59) {
                  while (1) switch (_context59.prev = _context59.next) {
                    case 0:
                      _context59.prev = 0;
                      //  let list_bytes = (new Uint8Array(list)).map(xx=>{return xx})
                      usbData = [].concat(_toConsumableArray(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.numberToBytes(innovagroup, 1)), _toConsumableArray(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.numberToBytes(start_idx, 1)), _toConsumableArray(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.numberToBytes(end_idx, 1)));
                      this.logdebug('Checking item support list');
                      _context59.next = 5;
                      return this.LinkVciCmd({
                        Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.livedata,
                        stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_livedata.read_list_item_val,
                        usbData: usbData,
                        nretry: 1,
                        timeout: 10000
                      });

                    case 5:
                      data = _context59.sent;
                      j = _utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.bytesToString(data).split('\n').join('-');
                      this.logdebug(start_idx + '-' + end_idx + ':' + j);
                      return _context59.abrupt("return", resolve(JSON.parse(j)));

                    case 11:
                      _context59.prev = 11;
                      _context59.t0 = _context59["catch"](0);
                      this.logdebug(_context59.t0);
                      return _context59.abrupt("return", resolve({}));

                    case 15:
                    case "end":
                      return _context59.stop();
                  }
                }, _callee59, this, [[0, 11]]);
              }));
            });
          }
        }, {
          key: "getlivedata_list_itemval_v2",
          value: function getlivedata_list_itemval_v2(innovagroup, start_idx, end_idx) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee61() {
              var _this18 = this;

              return _regeneratorRuntime().wrap(function _callee61$(_context61) {
                while (1) switch (_context61.prev = _context61.next) {
                  case 0:
                    return _context61.abrupt("return", new Promise(function (resolve) {
                      return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(_this18, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee60() {
                        var usbData, data, j;
                        return _regeneratorRuntime().wrap(function _callee60$(_context60) {
                          while (1) switch (_context60.prev = _context60.next) {
                            case 0:
                              _context60.prev = 0;
                              //  let list_bytes = (new Uint8Array(list)).map(xx=>{return xx})
                              usbData = [].concat(_toConsumableArray(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.numberToBytes(innovagroup, 1)), _toConsumableArray(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.numberToBytes(start_idx, 2)), _toConsumableArray(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.numberToBytes(end_idx, 2)));
                              this.logdebug('Checking item support list');
                              _context60.next = 5;
                              return this.LinkVciCmd({
                                Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.livedata,
                                stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_livedata.get_listitemval,
                                usbData: usbData,
                                nretry: 1,
                                timeout: 10000
                              });

                            case 5:
                              data = _context60.sent;
                              j = _utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.bytesToString(data).split('\n').join('-');
                              this.logdebug(start_idx + '-' + end_idx + ':' + j);
                              return _context60.abrupt("return", resolve(JSON.parse(j)));

                            case 11:
                              _context60.prev = 11;
                              _context60.t0 = _context60["catch"](0);
                              this.logdebug(_context60.t0);
                              return _context60.abrupt("return", resolve({}));

                            case 15:
                            case "end":
                              return _context60.stop();
                          }
                        }, _callee60, this, [[0, 11]]);
                      }));
                    }));

                  case 1:
                  case "end":
                    return _context61.stop();
                }
              }, _callee61);
            }));
          }
        }, {
          key: "getlivedata_hybrid",
          value: function getlivedata_hybrid() {
            var _this19 = this;

            return new Promise(function (resolve) {
              return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(_this19, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee62() {
                var usbData, data, j;
                return _regeneratorRuntime().wrap(function _callee62$(_context62) {
                  while (1) switch (_context62.prev = _context62.next) {
                    case 0:
                      _context62.prev = 0;
                      usbData = []; //this.logdebug('Checking item info of:'+ itemid);

                      _context62.next = 4;
                      return this.LinkVciCmd({
                        Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.livedata,
                        stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_livedata.start_hybrid_ld,
                        usbData: usbData,
                        nretry: 1,
                        timeout: 5000
                      });

                    case 4:
                      data = _context62.sent;
                      j = _utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.bytesToString(data).split('\n').join('-'); //  this.logdebug('Checking item info of:' +itemid);

                      this.logdebug('Response info:' + j);
                      return _context62.abrupt("return", resolve(JSON.parse(j)));

                    case 10:
                      _context62.prev = 10;
                      _context62.t0 = _context62["catch"](0);
                      this.logdebug(_context62.t0);
                      return _context62.abrupt("return", resolve({}));

                    case 14:
                    case "end":
                      return _context62.stop();
                  }
                }, _callee62, this, [[0, 10]]);
              }));
            });
          }
        }, {
          key: "getlivedata_listinfo",
          value: function getlivedata_listinfo(innovagroup, startid, stopid) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee64() {
              var _this20 = this;

              return _regeneratorRuntime().wrap(function _callee64$(_context64) {
                while (1) switch (_context64.prev = _context64.next) {
                  case 0:
                    return _context64.abrupt("return", new Promise(function (resolve) {
                      return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(_this20, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee63() {
                        var usbData, data, j;
                        return _regeneratorRuntime().wrap(function _callee63$(_context63) {
                          while (1) switch (_context63.prev = _context63.next) {
                            case 0:
                              _context63.prev = 0;
                              usbData = [].concat(_toConsumableArray(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.numberToBytes(innovagroup, 1)), _toConsumableArray(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.numberToBytes(startid, 2)), _toConsumableArray(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.numberToBytes(stopid, 2))); //this.logdebug('Checking item info of:'+ itemid);

                              _context63.next = 4;
                              return this.LinkVciCmd({
                                Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.livedata,
                                stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_livedata.get_listiteminfo,
                                usbData: usbData,
                                nretry: 1,
                                timeout: 10000
                              });

                            case 4:
                              data = _context63.sent;
                              j = _utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.bytesToString(data).split('\n').join('-');
                              this.logdebug('Checking item info from:' + startid + 'to ' + stopid);
                              this.logdebug('Response info:' + j);
                              return _context63.abrupt("return", resolve(JSON.parse(j)));

                            case 11:
                              _context63.prev = 11;
                              _context63.t0 = _context63["catch"](0);
                              this.logdebug(_context63.t0);
                              return _context63.abrupt("return", resolve({}));

                            case 15:
                            case "end":
                              return _context63.stop();
                          }
                        }, _callee63, this, [[0, 11]]);
                      }));
                    }));

                  case 1:
                  case "end":
                    return _context64.stop();
                }
              }, _callee64);
            }));
          }
        }, {
          key: "getlivedata_iteminfo",
          value: function getlivedata_iteminfo(innovagroup, itemid) {
            var _this21 = this;

            return new Promise(function (resolve) {
              return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(_this21, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee65() {
                var usbData, data, j;
                return _regeneratorRuntime().wrap(function _callee65$(_context65) {
                  while (1) switch (_context65.prev = _context65.next) {
                    case 0:
                      _context65.prev = 0;
                      usbData = [].concat(_toConsumableArray(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.numberToBytes(innovagroup, 1)), _toConsumableArray(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.numberToBytes(itemid, 2))); //this.logdebug('Checking item info of:'+ itemid);

                      _context65.next = 4;
                      return this.LinkVciCmd({
                        Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.livedata,
                        stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_livedata.read_item_info,
                        usbData: usbData,
                        nretry: 1,
                        timeout: 5000
                      });

                    case 4:
                      data = _context65.sent;
                      j = _utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.bytesToString(data).split('\n').join('-');
                      this.logdebug('Checking item info of:' + itemid);
                      this.logdebug('Response info:' + j);
                      return _context65.abrupt("return", resolve(JSON.parse(j)));

                    case 11:
                      _context65.prev = 11;
                      _context65.t0 = _context65["catch"](0);
                      this.logdebug(_context65.t0);
                      return _context65.abrupt("return", resolve({}));

                    case 15:
                    case "end":
                      return _context65.stop();
                  }
                }, _callee65, this, [[0, 11]]);
              }));
            });
          }
        }, {
          key: "getlivedata_hybrid_info",
          value: function getlivedata_hybrid_info() {
            var _this22 = this;

            return new Promise(function (resolve) {
              return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(_this22, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee66() {
                var usbData, data, j;
                return _regeneratorRuntime().wrap(function _callee66$(_context66) {
                  while (1) switch (_context66.prev = _context66.next) {
                    case 0:
                      _context66.prev = 0;
                      usbData = []; //this.logdebug('Checking item info of:'+ itemid);

                      _context66.next = 4;
                      return this.LinkVciCmd({
                        Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.livedata,
                        stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_livedata.start_hybrid_ld,
                        usbData: usbData,
                        nretry: 1,
                        timeout: 5000
                      });

                    case 4:
                      data = _context66.sent;
                      j = _utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.bytesToString(data).split('\n').join('-'); //this.logdebug('Checking item info of:' +itemid);

                      this.logdebug('Response info:' + j);
                      return _context66.abrupt("return", resolve(JSON.parse(j)));

                    case 10:
                      _context66.prev = 10;
                      _context66.t0 = _context66["catch"](0);
                      this.logdebug(_context66.t0);
                      return _context66.abrupt("return", resolve({}));

                    case 14:
                    case "end":
                      return _context66.stop();
                  }
                }, _callee66, this, [[0, 10]]);
              }));
            });
          }
        }, {
          key: "enable_dtc_trigger",
          value: function enable_dtc_trigger() {
            var _this23 = this;

            return new Promise(function (resolve) {
              return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(_this23, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee67() {
                var usbData, data, j;
                return _regeneratorRuntime().wrap(function _callee67$(_context67) {
                  while (1) switch (_context67.prev = _context67.next) {
                    case 0:
                      _context67.prev = 0;
                      usbData = []; //this.logdebug('Checking item info of:'+ itemid);

                      _context67.next = 4;
                      return this.LinkVciCmd({
                        Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.livedata,
                        stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_livedata.set_record_dtc_trigger,
                        usbData: usbData,
                        nretry: 1,
                        timeout: 5000
                      });

                    case 4:
                      data = _context67.sent;
                      j = _utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.bytesToString(data).split('\n').join('-'); //this.logdebug('Checking item info of:' +itemid);

                      this.logdebug('Response info:' + j);
                      return _context67.abrupt("return", resolve(JSON.parse(j)));

                    case 10:
                      _context67.prev = 10;
                      _context67.t0 = _context67["catch"](0);
                      this.logdebug(_context67.t0);
                      return _context67.abrupt("return", resolve({}));

                    case 14:
                    case "end":
                      return _context67.stop();
                  }
                }, _callee67, this, [[0, 10]]);
              }));
            });
          }
        }, {
          key: "disable_dtc_trigger",
          value: function disable_dtc_trigger() {
            var _this24 = this;

            return new Promise(function (resolve) {
              return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(_this24, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee68() {
                var usbData, data, j;
                return _regeneratorRuntime().wrap(function _callee68$(_context68) {
                  while (1) switch (_context68.prev = _context68.next) {
                    case 0:
                      _context68.prev = 0;
                      usbData = []; //this.logdebug('Checking item info of:'+ itemid);

                      _context68.next = 4;
                      return this.LinkVciCmd({
                        Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.livedata,
                        stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_livedata.reset_record_dtc_trigger,
                        usbData: usbData,
                        nretry: 1,
                        timeout: 5000
                      });

                    case 4:
                      data = _context68.sent;
                      j = _utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.bytesToString(data).split('\n').join('-'); //this.logdebug('Checking item info of:' +itemid);

                      this.logdebug('Response info:' + j);
                      return _context68.abrupt("return", resolve(JSON.parse(j)));

                    case 10:
                      _context68.prev = 10;
                      _context68.t0 = _context68["catch"](0);
                      this.logdebug(_context68.t0);
                      return _context68.abrupt("return", resolve({}));

                    case 14:
                    case "end":
                      return _context68.stop();
                  }
                }, _callee68, this, [[0, 10]]);
              }));
            });
          }
          /*Live Data Version 2 support over 200 Pids*/

        }, {
          key: "getlivedata_numberpidsuppport_other",
          value: function getlivedata_numberpidsuppport_other(system, subsystem) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee70() {
              var _this25 = this;

              return _regeneratorRuntime().wrap(function _callee70$(_context70) {
                while (1) switch (_context70.prev = _context70.next) {
                  case 0:
                    return _context70.abrupt("return", new Promise(function (resolve) {
                      return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(_this25, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee69() {
                        var usbData, data, j, res;
                        return _regeneratorRuntime().wrap(function _callee69$(_context69) {
                          while (1) switch (_context69.prev = _context69.next) {
                            case 0:
                              _context69.prev = 0;
                              usbData = [].concat(_toConsumableArray(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.numberToBytes(_standard_enums__WEBPACK_IMPORTED_MODULE_3__.enumInnovagroup.einnovagroup_INNOVA_GROUP_UNKNOW, 1)), _toConsumableArray(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.numberToBytes(system, 2)), _toConsumableArray(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.numberToBytes(subsystem, 2)));
                              this.logdebug('Checking item of system ' + system + ' and subSystem ' + subsystem);
                              _context69.next = 5;
                              return this.LinkVciCmd({
                                Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.livedata,
                                stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_livedata.check_getnumpid_group,
                                usbData: usbData,
                                nretry: 1,
                                timeout: 30000
                              });

                            case 5:
                              data = _context69.sent;
                              j = _utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.bytesToString(data);
                              this.logdebug(j);
                              res = JSON.parse(j);
                              return _context69.abrupt("return", resolve(res));

                            case 12:
                              _context69.prev = 12;
                              _context69.t0 = _context69["catch"](0);
                              this.logdebug(_context69.t0);
                              return _context69.abrupt("return", resolve({}));

                            case 16:
                            case "end":
                              return _context69.stop();
                          }
                        }, _callee69, this, [[0, 12]]);
                      }));
                    }));

                  case 1:
                  case "end":
                    return _context70.stop();
                }
              }, _callee70);
            }));
          }
        }, {
          key: "getlivedata_numberpidsuppport_group_v2",
          value: function getlivedata_numberpidsuppport_group_v2(innovagroup) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee72() {
              var _this26 = this;

              return _regeneratorRuntime().wrap(function _callee72$(_context72) {
                while (1) switch (_context72.prev = _context72.next) {
                  case 0:
                    return _context72.abrupt("return", new Promise(function (resolve) {
                      return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(_this26, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee71() {
                        var usbData, data, j, res;
                        return _regeneratorRuntime().wrap(function _callee71$(_context71) {
                          while (1) switch (_context71.prev = _context71.next) {
                            case 0:
                              _context71.prev = 0;
                              usbData = _toConsumableArray(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.numberToBytes(innovagroup, 1));
                              this.logdebug('Checking item support ' + innovagroup);
                              _context71.next = 5;
                              return this.LinkVciCmd({
                                Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.livedata,
                                stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_livedata.check_getnumpid_group,
                                usbData: usbData,
                                nretry: 1,
                                timeout: 30000
                              });

                            case 5:
                              data = _context71.sent;
                              j = _utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.bytesToString(data);
                              this.logdebug(j);
                              res = JSON.parse(j);

                              if ((0, util__WEBPACK_IMPORTED_MODULE_4__.isNullOrUndefined)(res)) {
                                res = {
                                  Number: 0
                                };
                              }

                              return _context71.abrupt("return", resolve(res));

                            case 13:
                              _context71.prev = 13;
                              _context71.t0 = _context71["catch"](0);
                              this.logdebug(_context71.t0);
                              return _context71.abrupt("return", resolve({}));

                            case 17:
                            case "end":
                              return _context71.stop();
                          }
                        }, _callee71, this, [[0, 13]]);
                      }));
                    }));

                  case 1:
                  case "end":
                    return _context72.stop();
                }
              }, _callee72);
            }));
          }
        }, {
          key: "getlivedatapidsupport_group_v2",
          value: function getlivedatapidsupport_group_v2(innovagroup) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee74() {
              var _this27 = this;

              return _regeneratorRuntime().wrap(function _callee74$(_context74) {
                while (1) switch (_context74.prev = _context74.next) {
                  case 0:
                    return _context74.abrupt("return", new Promise(function (resolve) {
                      return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(_this27, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee73() {
                        var usbData, data, j, ls_pid, ls_item, new_list_info, id, ls_info, res;
                        return _regeneratorRuntime().wrap(function _callee73$(_context73) {
                          while (1) switch (_context73.prev = _context73.next) {
                            case 0:
                              _context73.prev = 0;
                              usbData = _toConsumableArray(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.numberToBytes(innovagroup, 1));
                              this.logdebug('Checking item support ' + innovagroup);
                              _context73.next = 5;
                              return this.LinkVciCmd({
                                Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.livedata,
                                stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_livedata.check_getnumpid_group,
                                usbData: usbData,
                                nretry: 1,
                                timeout: 30000
                              });

                            case 5:
                              data = _context73.sent;
                              j = _utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.bytesToString(data);
                              this.logdebug(j);
                              ls_pid = JSON.parse(j);
                              ls_item = ls_pid["Number"];
                              new_list_info = [];
                              id = 0;

                            case 12:
                              if (!(id < ls_item)) {
                                _context73.next = 20;
                                break;
                              }

                              _context73.next = 15;
                              return this.getlivedata_listinfo(innovagroup, id, id + 14 > ls_item ? ls_item - 1 : id + 14);

                            case 15:
                              ls_info = _context73.sent;
                              new_list_info.push.apply(new_list_info, _toConsumableArray(ls_info["ListItem"]));

                            case 17:
                              id += 15;
                              _context73.next = 12;
                              break;

                            case 20:
                              // for(const item of ls_item)
                              // {
                              //   const info = await this.getlivedata_iteminfo(innovagroup, item);
                              //   new_list_info.push(info["ListItem"][0]);
                              // }
                              res = {
                                Group: innovagroup,
                                ListItem: new_list_info
                              };
                              return _context73.abrupt("return", resolve(res));

                            case 24:
                              _context73.prev = 24;
                              _context73.t0 = _context73["catch"](0);
                              this.logdebug(_context73.t0);
                              return _context73.abrupt("return", resolve({}));

                            case 28:
                            case "end":
                              return _context73.stop();
                          }
                        }, _callee73, this, [[0, 24]]);
                      }));
                    }));

                  case 1:
                  case "end":
                    return _context74.stop();
                }
              }, _callee74);
            }));
          }
        }]);
      }(_obd__WEBPACK_IMPORTED_MODULE_1__.OBDx);

      _Livedata.ɵfac = /*@__PURE__*/function () {
        var ɵLivedata_BaseFactory;
        return function Livedata_Factory(t) {
          return (ɵLivedata_BaseFactory || (ɵLivedata_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetInheritedFactory"](_Livedata)))(t || _Livedata);
        };
      }();

      _Livedata.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
        token: _Livedata,
        factory: _Livedata.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    10591:
    /*!***************************************************************!*\
      !*** ./src/app/services/innova-vci-service/src/obd/nwscan.ts ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NWSCAN": function NWSCAN() {
          return (
            /* binding */
            _NWSCAN
          );
        },

        /* harmony export */
        "enumProtocol": function enumProtocol() {
          return (
            /* reexport safe */
            _standard_enums__WEBPACK_IMPORTED_MODULE_5__.enumProtocol
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      42321);
      /* harmony import */


      var _vcistd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./vcistd */
      48860);
      /* harmony import */


      var _obd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./obd */
      29326);
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! lodash */
      202);
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! util */
      94655);
      /* harmony import */


      var util__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var _utilities_dataParser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../utilities/dataParser */
      81402);
      /* harmony import */


      var _standard_enums__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../standard/enums */
      13930);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      2316); // import * from './../standard/enums';


      var _NWSCAN = /*#__PURE__*/function (_obd__WEBPACK_IMPORTE4) {
        function _NWSCAN() {
          _classCallCheck(this, _NWSCAN);

          return _callSuper(this, _NWSCAN, arguments);
        }

        _inherits(_NWSCAN, _obd__WEBPACK_IMPORTE4);

        return _createClass(_NWSCAN, [{
          key: "setVinString",
          value: function setVinString(VinString) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee75() {
              var usbData;
              return _regeneratorRuntime().wrap(function _callee75$(_context75) {
                while (1) switch (_context75.prev = _context75.next) {
                  case 0:
                    _context75.prev = 0;
                    this.logdebug("Input VIN:" + VinString);

                    if (!(lodash__WEBPACK_IMPORTED_MODULE_2__.isEmpty(VinString) || VinString.length != 0x11)) {
                      _context75.next = 4;
                      break;
                    }

                    return _context75.abrupt("return", false);

                  case 4:
                    usbData = _utilities_dataParser__WEBPACK_IMPORTED_MODULE_4__.stringToBytes(VinString) || [];
                    _context75.next = 7;
                    return this.LinkVciCmd({
                      Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.systemdata,
                      stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_system.setvin,
                      usbData: [0x11, 0x00].concat(_toConsumableArray(usbData)),
                      nretry: 2,
                      timeout: 3000
                    });

                  case 7:
                    return _context75.abrupt("return", true);

                  case 10:
                    _context75.prev = 10;
                    _context75.t0 = _context75["catch"](0);
                    return _context75.abrupt("return", false);

                  case 13:
                  case "end":
                    return _context75.stop();
                }
              }, _callee75, this, [[0, 10]]);
            }));
          }
        }, {
          key: "setYmmeProfile",
          value: function setYmmeProfile() {
            var ymmeprofile = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
              manufacture_enum: undefined,
              year_enum: undefined,
              make_enum: undefined,
              model_enum: undefined,
              engine_enum: undefined,
              trim_enum: undefined,
              option_enum: undefined,
              transmission_enum: undefined
            };
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee76() {
              var usbData, result, _result, status;

              return _regeneratorRuntime().wrap(function _callee76$(_context76) {
                while (1) switch (_context76.prev = _context76.next) {
                  case 0:
                    // const usbArgs = [ENUMVCIs.VCICmd_system.setymme];
                    usbData = [].concat(_toConsumableArray(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_4__.numberToBytes(512, 2)), _toConsumableArray(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_4__.numberToBytes(0xaa, 1)), _toConsumableArray(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_4__.numberToBytes(ymmeprofile.manufacture_enum, 2)), _toConsumableArray(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_4__.numberToBytes(ymmeprofile.year_enum, 2)), _toConsumableArray(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_4__.numberToBytes(ymmeprofile.make_enum, 2)), _toConsumableArray(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_4__.numberToBytes(ymmeprofile.model_enum, 2)), _toConsumableArray(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_4__.numberToBytes(ymmeprofile.trim_enum || 0xffff, 2)), _toConsumableArray(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_4__.numberToBytes(ymmeprofile.option_enum || 0xffff, 2)), _toConsumableArray(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_4__.numberToBytes(ymmeprofile.engine_enum || 0xff, 2)), _toConsumableArray(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_4__.numberToBytes(ymmeprofile.transmission_enum || 0xffff, 2)));
                    _context76.prev = 1;
                    _context76.next = 4;
                    return this.LinkVciCmd({
                      Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.systemdata,
                      stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_system.setymme,
                      usbData: usbData,
                      nretry: 1
                    });

                  case 4:
                    result = _context76.sent;
                    _result = _slicedToArray(result, 1), status = _result[0];
                    return _context76.abrupt("return", status === 0xaa);

                  case 9:
                    _context76.prev = 9;
                    _context76.t0 = _context76["catch"](1);
                    return _context76.abrupt("return", false);

                  case 12:
                  case "end":
                    return _context76.stop();
                }
              }, _callee76, this, [[1, 9]]);
            }));
          }
        }, {
          key: "getYMMEProfile",
          value: function getYMMEProfile() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee77() {
              var usbData, result;
              return _regeneratorRuntime().wrap(function _callee77$(_context77) {
                while (1) switch (_context77.prev = _context77.next) {
                  case 0:
                    // const usbArgs = [];
                    usbData = [0, 0];
                    _context77.prev = 1;
                    _context77.next = 4;
                    return this.LinkVciCmd({
                      Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.systemdata,
                      stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_system.getymme,
                      usbData: usbData,
                      nretry: 2
                    });

                  case 4:
                    result = _context77.sent;
                    this.logdebug(result);
                    return _context77.abrupt("return", result);

                  case 9:
                    _context77.prev = 9;
                    _context77.t0 = _context77["catch"](1);
                    return _context77.abrupt("return", undefined);

                  case 12:
                  case "end":
                    return _context77.stop();
                }
              }, _callee77, this, [[1, 9]]);
            }));
          }
        }, {
          key: "getSupportedOEMModules",
          value: function getSupportedOEMModules() {
            var _this28 = this;

            return new Promise(function (resolve) {
              return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(_this28, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee78() {
                var modules, data, getGroupName, getInspecGroupName, temp, objSystem, index, nSystem, sysIndex, systemId, nSubSystem, subIndex, LB, HB, bInnovaGroup, subSystemId;
                return _regeneratorRuntime().wrap(function _callee78$(_context78) {
                  while (1) switch (_context78.prev = _context78.next) {
                    case 0:
                      _context78.prev = 0;
                      //const progID = [0x04, 0x00];
                      // const usbArgs = [0x03, 0xee];
                      //const usbArgs = [0x03];//Version firmware from .12
                      // const usbData = [];
                      modules = [];
                      this.logdebug('Reading supported OEM modules');
                      _context78.next = 5;
                      return this.LinkVciCmd({
                        Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.oem,
                        stateid: 3,
                        usbData: [0xee],
                        nretry: 1,
                        timeout: 10000
                      });

                    case 5:
                      data = _context78.sent;

                      getGroupName = function getGroupName(a) {
                        try {
                          return _vcistd__WEBPACK_IMPORTED_MODULE_0__.EnumInnovaGroups[a];
                        } catch (ex) {
                          return "Unknown Group : ".concat(a);
                        }
                      };

                      getInspecGroupName = function getInspecGroupName(a) {
                        try {
                          return _vcistd__WEBPACK_IMPORTED_MODULE_0__.EnumInspectionGroups[a];
                        } catch (ex) {
                          return "Unknown Group : ".concat(a);
                        }
                      };

                      temp = _utilities_dataParser__WEBPACK_IMPORTED_MODULE_4__.bytesToString(data); //this.logdebug(temp);

                      objSystem = JSON.parse(temp);
                      this.logdebug("OEM Modules:" + _utilities_dataParser__WEBPACK_IMPORTED_MODULE_4__.ObjtoStringBeauty(objSystem.data));

                      if (!lodash__WEBPACK_IMPORTED_MODULE_2__.isObject(objSystem)) {
                        _context78.next = 15;
                        break;
                      }

                      if (!(objSystem && objSystem.data.length > 0)) {
                        _context78.next = 15;
                        break;
                      }

                      objSystem.data.forEach(function (obj) {
                        //const { System: system, SubSystem: subsystem, ModuleName: modulename, InnovaGroup: group } = obj;
                        modules.push({
                          System: obj[0],
                          SubSystem: obj[1],
                          ModuleName: obj[2],
                          InnovaGroup: obj[3],
                          groupName: getGroupName(obj[3]),
                          inspecGroup: getInspecGroupName(obj[4])
                        });
                      });
                      return _context78.abrupt("return", resolve({
                        raw: null,
                        data: modules
                      }));

                    case 15:
                      // parse data to get the list of suppurted system and subsystem
                      index = 0;
                      nSystem = data[index++];

                      for (sysIndex = 0; sysIndex < nSystem; sysIndex++) {
                        systemId = _utilities_dataParser__WEBPACK_IMPORTED_MODULE_4__.bytesToInt([data[index++], data[index++]], 2, 0);
                        nSubSystem = data[index++];

                        for (subIndex = 0; subIndex < nSubSystem; subIndex++) {
                          LB = data[index++];
                          HB = data[index++]; // const bInnovaGroup = data[index++];

                          bInnovaGroup = 0xFF;
                          subSystemId = _utilities_dataParser__WEBPACK_IMPORTED_MODULE_4__.bytesToInt([LB, HB], 2, 0);
                          modules.push({
                            system: systemId,
                            subsystem: subSystemId,
                            innovagroup: bInnovaGroup,
                            groupName: getGroupName(bInnovaGroup)
                          });
                        }
                      }

                      return _context78.abrupt("return", resolve({
                        raw: modules,
                        data: null
                      }));

                    case 21:
                      _context78.prev = 21;
                      _context78.t0 = _context78["catch"](0);
                      return _context78.abrupt("return", resolve({}));

                    case 24:
                    case "end":
                      return _context78.stop();
                  }
                }, _callee78, this, [[0, 21]]);
              }));
            });
          }
        }, {
          key: "eraseOEMSystem",
          value: function eraseOEMSystem(_ref) {
            var _this29 = this;

            var system = _ref.system,
                subSystem = _ref.subSystem;
            return new Promise(function (resolve) {
              return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(_this29, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee79() {
                var usbData, data;
                return _regeneratorRuntime().wrap(function _callee79$(_context79) {
                  while (1) switch (_context79.prev = _context79.next) {
                    case 0:
                      _context79.prev = 0;
                      // const usbArgs = [0x05].concat(DataParser.numberToBytes(system, 2), DataParser.numberToBytes(subSystem, 2));
                      usbData = [].concat(_toConsumableArray(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_4__.numberToBytes(system, 2)), _toConsumableArray(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_4__.numberToBytes(subSystem, 2)));
                      this.logdebug("Erasing oem module ".concat(system, " ").concat(subSystem));
                      _context79.next = 5;
                      return this.LinkVciCmd({
                        Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.oem,
                        stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_nwscan.erasedtcsystem,
                        usbData: usbData
                      });

                    case 5:
                      data = _context79.sent;

                      if (!(data === undefined)) {
                        _context79.next = 10;
                        break;
                      }

                      return _context79.abrupt("return", resolve({
                        Erase_Dtc: "Sent"
                      }));

                    case 10:
                      return _context79.abrupt("return", resolve({
                        Erase_Dtc: "OK"
                      }));

                    case 11:
                      _context79.next = 16;
                      break;

                    case 13:
                      _context79.prev = 13;
                      _context79.t0 = _context79["catch"](0);
                      return _context79.abrupt("return", resolve({}));

                    case 16:
                    case "end":
                      return _context79.stop();
                  }
                }, _callee79, this, [[0, 13]]);
              }));
            });
          }
        }, {
          key: "QueryOEMSystem",
          value: function QueryOEMSystem(_ref2) {
            var system = _ref2.system,
                subSystem = _ref2.subSystem;
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee81() {
              var _this30 = this;

              return _regeneratorRuntime().wrap(function _callee81$(_context81) {
                while (1) switch (_context81.prev = _context81.next) {
                  case 0:
                    return _context81.abrupt("return", new Promise(function (resolve) {
                      return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(_this30, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee80() {
                        var usbData, data;
                        return _regeneratorRuntime().wrap(function _callee80$(_context80) {
                          while (1) switch (_context80.prev = _context80.next) {
                            case 0:
                              _context80.prev = 0;
                              // const usbArgs = [0x05].concat(DataParser.numberToBytes(system, 2), DataParser.numberToBytes(subSystem, 2));
                              usbData = [].concat(_toConsumableArray(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_4__.numberToBytes(system, 2)), _toConsumableArray(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_4__.numberToBytes(subSystem, 2)));
                              this.logdebug("query oem module ".concat(system, " ").concat(subSystem));
                              _context80.next = 5;
                              return this.LinkVciCmd({
                                Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.oem,
                                stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_nwscan.querysystem,
                                usbData: usbData
                              });

                            case 5:
                              data = _context80.sent;

                              if (!(data === undefined)) {
                                _context80.next = 10;
                                break;
                              }

                              return _context80.abrupt("return", resolve({
                                Status: "Fail"
                              }));

                            case 10:
                              return _context80.abrupt("return", resolve({
                                Status: "OK"
                              }));

                            case 11:
                              _context80.next = 16;
                              break;

                            case 13:
                              _context80.prev = 13;
                              _context80.t0 = _context80["catch"](0);
                              return _context80.abrupt("return", resolve({}));

                            case 16:
                            case "end":
                              return _context80.stop();
                          }
                        }, _callee80, this, [[0, 13]]);
                      }));
                    }));

                  case 1:
                  case "end":
                    return _context81.stop();
                }
              }, _callee81);
            }));
          }
        }, {
          key: "ExitOEMSystem",
          value: function ExitOEMSystem(_ref3) {
            var system = _ref3.system,
                subSystem = _ref3.subSystem;
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee83() {
              var _this31 = this;

              return _regeneratorRuntime().wrap(function _callee83$(_context83) {
                while (1) switch (_context83.prev = _context83.next) {
                  case 0:
                    return _context83.abrupt("return", new Promise(function (resolve) {
                      return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(_this31, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee82() {
                        var usbData, data;
                        return _regeneratorRuntime().wrap(function _callee82$(_context82) {
                          while (1) switch (_context82.prev = _context82.next) {
                            case 0:
                              _context82.prev = 0;
                              // const usbArgs = [0x05].concat(DataParser.numberToBytes(system, 2), DataParser.numberToBytes(subSystem, 2));
                              usbData = [].concat(_toConsumableArray(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_4__.numberToBytes(system, 2)), _toConsumableArray(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_4__.numberToBytes(subSystem, 2)));
                              this.logdebug("exit oem module ".concat(system, " ").concat(subSystem));
                              _context82.next = 5;
                              return this.LinkVciCmd({
                                Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.oem,
                                stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_nwscan.exitsystem,
                                usbData: usbData
                              });

                            case 5:
                              data = _context82.sent;

                              if (!(data === undefined)) {
                                _context82.next = 10;
                                break;
                              }

                              return _context82.abrupt("return", resolve({
                                Status: "Fail"
                              }));

                            case 10:
                              return _context82.abrupt("return", resolve({
                                Status: "OK"
                              }));

                            case 11:
                              _context82.next = 16;
                              break;

                            case 13:
                              _context82.prev = 13;
                              _context82.t0 = _context82["catch"](0);
                              return _context82.abrupt("return", resolve({}));

                            case 16:
                            case "end":
                              return _context82.stop();
                          }
                        }, _callee82, this, [[0, 13]]);
                      }));
                    }));

                  case 1:
                  case "end":
                    return _context83.stop();
                }
              }, _callee83);
            }));
          }
        }, {
          key: "getOEMSystem_quick",
          value: function getOEMSystem_quick(_ref4) {
            var system = _ref4.system,
                subSystem = _ref4.subSystem;
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee85() {
              var _this32 = this;

              return _regeneratorRuntime().wrap(function _callee85$(_context85) {
                while (1) switch (_context85.prev = _context85.next) {
                  case 0:
                    return _context85.abrupt("return", new Promise(function (resolve) {
                      return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(_this32, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee84() {
                        var usbData, modules, getInspecGroup, rawbuff, objSystem, modulename, inspec_gr, Dtcs, InvalidDTC, _modulename, status;

                        return _regeneratorRuntime().wrap(function _callee84$(_context84) {
                          while (1) switch (_context84.prev = _context84.next) {
                            case 0:
                              _context84.prev = 0;
                              // const usbArgs = [0x05].concat(DataParser.numberToBytes(system, 2), DataParser.numberToBytes(subSystem, 2));
                              usbData = [].concat(_toConsumableArray(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_4__.numberToBytes(system, 2)), _toConsumableArray(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_4__.numberToBytes(subSystem, 2)));
                              modules = [];

                              getInspecGroup = function getInspecGroup(a) {
                                try {
                                  return _vcistd__WEBPACK_IMPORTED_MODULE_0__.EnumInspectionGroups[a];
                                } catch (ex) {
                                  return "Unknown Group : ".concat(a);
                                }
                              };

                              this.logdebug("Reading oem module ".concat(system, " ").concat(subSystem, " quickly"));
                              _context84.next = 7;
                              return this.LinkVciCmd({
                                Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.oem,
                                stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_nwscan.quick_readsystem,
                                usbData: usbData,
                                nretry: 3,
                                timeout: 10000
                              });

                            case 7:
                              rawbuff = _context84.sent;

                              if (!(0, util__WEBPACK_IMPORTED_MODULE_3__.isNullOrUndefined)(rawbuff)) {
                                _context84.next = 10;
                                break;
                              }

                              return _context84.abrupt("return", resolve(null));

                            case 10:
                              objSystem = _utilities_dataParser__WEBPACK_IMPORTED_MODULE_4__.readbleToJSON(rawbuff);
                              _context84.next = 13;
                              return this.logdebug(objSystem);

                            case 13:
                              if (!lodash__WEBPACK_IMPORTED_MODULE_2__.isObject(objSystem)) {
                                _context84.next = 24;
                                break;
                              }

                              if (!Object.keys(objSystem).includes("Dtcs")) {
                                _context84.next = 21;
                                break;
                              }

                              modulename = objSystem.ModuleName, inspec_gr = objSystem.InspecGroup, Dtcs = objSystem.Dtcs, InvalidDTC = objSystem.InvalidDTC;
                              _context84.next = 18;
                              return Dtcs.forEach(function (obj) {
                                var DTCCode = obj[0],
                                    type = obj[1];
                                modules.push({
                                  code: DTCCode,
                                  type: type
                                });
                              });

                            case 18:
                              return _context84.abrupt("return", resolve({
                                data: {
                                  system: system,
                                  subSystem: subSystem,
                                  modulename: modulename,
                                  InspecGroup: getInspecGroup(inspec_gr),
                                  Dtcs: modules,
                                  IsInvalidDTC: InvalidDTC
                                }
                              }));

                            case 21:
                              if (!Object.keys(objSystem).includes("Status")) {
                                _context84.next = 24;
                                break;
                              }

                              _modulename = objSystem.ModuleName, status = objSystem.Status;
                              return _context84.abrupt("return", resolve({
                                error: {
                                  system: system,
                                  subSystem: subSystem,
                                  modulename: _modulename,
                                  Status: _vcistd__WEBPACK_IMPORTED_MODULE_0__.Enum_Nws_Link_Status[status]
                                }
                              }));

                            case 24:
                              return _context84.abrupt("return", resolve({
                                raw: rawbuff
                              }));

                            case 27:
                              _context84.prev = 27;
                              _context84.t0 = _context84["catch"](0);
                              this.logdebug("Reading oem module ".concat(system, " ").concat(subSystem, ":") + _context84.t0);
                              return _context84.abrupt("return", resolve({}));

                            case 31:
                            case "end":
                              return _context84.stop();
                          }
                        }, _callee84, this, [[0, 27]]);
                      }));
                    }));

                  case 1:
                  case "end":
                    return _context85.stop();
                }
              }, _callee85);
            }));
          }
        }, {
          key: "getDtc_listInspecGroup",
          value: function getDtc_listInspecGroup(_ref5) {
            var _this33 = this;

            var system = _ref5.system,
                subSystem = _ref5.subSystem,
                id = _ref5.id;
            return new Promise(function (resolve) {
              return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(_this33, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee86() {
                var usbData, modules, rawbuff, objSystem, dtc, type, list;
                return _regeneratorRuntime().wrap(function _callee86$(_context86) {
                  while (1) switch (_context86.prev = _context86.next) {
                    case 0:
                      _context86.prev = 0;
                      // const usbArgs = [0x05].concat(DataParser.numberToBytes(system, 2), DataParser.numberToBytes(subSystem, 2));
                      usbData = [].concat(_toConsumableArray(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_4__.numberToBytes(system, 2)), _toConsumableArray(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_4__.numberToBytes(subSystem, 2)), _toConsumableArray(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_4__.numberToBytes(id, 2)));
                      modules = [];
                      this.logdebug("Getting dtc def ".concat(system, " ").concat(subSystem, " id: ").concat(id, " "));
                      _context86.next = 6;
                      return this.LinkVciCmd({
                        Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.oem,
                        stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_nwscan.get_dtc_listinspec,
                        usbData: usbData,
                        nretry: 3,
                        timeout: 10000
                      });

                    case 6:
                      rawbuff = _context86.sent;
                      objSystem = _utilities_dataParser__WEBPACK_IMPORTED_MODULE_4__.readbleToJSON(rawbuff); //this.logdebug(objSystem);

                      if (!lodash__WEBPACK_IMPORTED_MODULE_2__.isObject(objSystem)) {
                        _context86.next = 12;
                        break;
                      }

                      dtc = objSystem[0], type = objSystem[1], list = objSystem[2];
                      this.logdebug('response of getting dtc group' + _utilities_dataParser__WEBPACK_IMPORTED_MODULE_4__.getStringOfObj(objSystem));
                      return _context86.abrupt("return", resolve({
                        code: dtc,
                        type: type,
                        list: list
                      }));

                    case 12:
                      return _context86.abrupt("return", resolve({
                        raw: rawbuff
                      }));

                    case 15:
                      _context86.prev = 15;
                      _context86.t0 = _context86["catch"](0);
                      return _context86.abrupt("return", resolve({}));

                    case 18:
                    case "end":
                      return _context86.stop();
                  }
                }, _callee86, this, [[0, 15]]);
              }));
            });
          }
        }, {
          key: "getDtcdef_withgroup",
          value: function getDtcdef_withgroup(_ref6) {
            var _this34 = this;

            var system = _ref6.system,
                subSystem = _ref6.subSystem,
                id = _ref6.id,
                group = _ref6.group;
            return new Promise(function (resolve) {
              return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(_this34, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee87() {
                var groupid, usbData, modules, rawbuff, objSystem, dtc, type, def;
                return _regeneratorRuntime().wrap(function _callee87$(_context87) {
                  while (1) switch (_context87.prev = _context87.next) {
                    case 0:
                      _context87.prev = 0;
                      // const usbArgs = [0x05].concat(DataParser.numberToBytes(system, 2), DataParser.numberToBytes(subSystem, 2));
                      groupid = Object.keys(_vcistd__WEBPACK_IMPORTED_MODULE_0__.EnumInspectionGroups).find(function (key) {
                        return _vcistd__WEBPACK_IMPORTED_MODULE_0__.EnumInspectionGroups[key] === group;
                      });
                      usbData = [].concat(_toConsumableArray(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_4__.numberToBytes(system, 2)), _toConsumableArray(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_4__.numberToBytes(subSystem, 2)), _toConsumableArray(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_4__.numberToBytes(id, 2)), _toConsumableArray(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_4__.numberToBytes(groupid, 1)));
                      modules = [];
                      this.logdebug("Getting dtc def ".concat(system, " ").concat(subSystem, " id: ").concat(id, " group: ").concat(group, " "));
                      _context87.next = 7;
                      return this.LinkVciCmd({
                        Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.oem,
                        stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_nwscan.get_dtc_def,
                        usbData: usbData,
                        nretry: 3,
                        timeout: 5000
                      });

                    case 7:
                      rawbuff = _context87.sent;
                      objSystem = _utilities_dataParser__WEBPACK_IMPORTED_MODULE_4__.readbleToJSON(rawbuff); //this.logdebug(objSystem);

                      if (!lodash__WEBPACK_IMPORTED_MODULE_2__.isObject(objSystem)) {
                        _context87.next = 12;
                        break;
                      }

                      dtc = objSystem[0], type = objSystem[1], def = objSystem[2];
                      return _context87.abrupt("return", resolve({
                        code: dtc,
                        type: type,
                        def: def
                      }));

                    case 12:
                      return _context87.abrupt("return", resolve({
                        raw: rawbuff
                      }));

                    case 15:
                      _context87.prev = 15;
                      _context87.t0 = _context87["catch"](0);
                      return _context87.abrupt("return", resolve({}));

                    case 18:
                    case "end":
                      return _context87.stop();
                  }
                }, _callee87, this, [[0, 15]]);
              }));
            });
          }
        }, {
          key: "getDtcdef",
          value: function getDtcdef(_ref7) {
            var _this35 = this;

            var system = _ref7.system,
                subSystem = _ref7.subSystem,
                id = _ref7.id;
            return new Promise(function (resolve) {
              return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(_this35, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee88() {
                var usbData, modules, rawbuff, objSystem, dtc, type, def;
                return _regeneratorRuntime().wrap(function _callee88$(_context88) {
                  while (1) switch (_context88.prev = _context88.next) {
                    case 0:
                      _context88.prev = 0;
                      // const usbArgs = [0x05].concat(DataParser.numberToBytes(system, 2), DataParser.numberToBytes(subSystem, 2));
                      usbData = [].concat(_toConsumableArray(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_4__.numberToBytes(system, 2)), _toConsumableArray(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_4__.numberToBytes(subSystem, 2)), _toConsumableArray(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_4__.numberToBytes(id, 2)), _toConsumableArray(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_4__.numberToBytes(255, 1)));
                      modules = [];
                      this.logdebug("Getting dtc def ".concat(system, " ").concat(subSystem, " id: ").concat(id, " "));
                      _context88.next = 6;
                      return this.LinkVciCmd({
                        Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.oem,
                        stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_nwscan.get_dtc_def,
                        usbData: usbData,
                        nretry: 3,
                        timeout: 5000
                      });

                    case 6:
                      rawbuff = _context88.sent;
                      objSystem = _utilities_dataParser__WEBPACK_IMPORTED_MODULE_4__.readbleToJSON(rawbuff); //this.logdebug(objSystem);

                      if (!lodash__WEBPACK_IMPORTED_MODULE_2__.isObject(objSystem)) {
                        _context88.next = 11;
                        break;
                      }

                      dtc = objSystem[0], type = objSystem[1], def = objSystem[2];
                      return _context88.abrupt("return", resolve({
                        code: dtc,
                        type: type,
                        def: def
                      }));

                    case 11:
                      return _context88.abrupt("return", resolve({
                        raw: rawbuff
                      }));

                    case 14:
                      _context88.prev = 14;
                      _context88.t0 = _context88["catch"](0);
                      this.logdebug('Get def issue');
                      return _context88.abrupt("return", resolve({}));

                    case 18:
                    case "end":
                      return _context88.stop();
                  }
                }, _callee88, this, [[0, 14]]);
              }));
            });
          }
        }, {
          key: "getOEMSystem",
          value: function getOEMSystem(_ref8) {
            var _this36 = this;

            var system = _ref8.system,
                subSystem = _ref8.subSystem;
            return new Promise(function (resolve) {
              return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(_this36, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee89() {
                var usbData, modules, rawbuff, objSystem, _system, subsystem, modulename, Dtcs, InvalidDTC, BodyInfo;

                return _regeneratorRuntime().wrap(function _callee89$(_context89) {
                  while (1) switch (_context89.prev = _context89.next) {
                    case 0:
                      _context89.prev = 0;
                      // const usbArgs = [0x05].concat(DataParser.numberToBytes(system, 2), DataParser.numberToBytes(subSystem, 2));
                      usbData = [].concat(_toConsumableArray(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_4__.numberToBytes(system, 2)), _toConsumableArray(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_4__.numberToBytes(subSystem, 2)));
                      modules = [];
                      this.logdebug("Reading oem module ".concat(system, " ").concat(subSystem));
                      _context89.next = 6;
                      return this.LinkVciCmd({
                        Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.oem,
                        stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_nwscan.readdtsystem,
                        usbData: usbData,
                        nretry: 1,
                        timeout: 20000
                      });

                    case 6:
                      rawbuff = _context89.sent;
                      objSystem = _utilities_dataParser__WEBPACK_IMPORTED_MODULE_4__.readbleToJSON(rawbuff);
                      this.logdebug(objSystem);

                      if (!lodash__WEBPACK_IMPORTED_MODULE_2__.isObject(objSystem)) {
                        _context89.next = 13;
                        break;
                      }

                      _system = objSystem.System, subsystem = objSystem.SubSystem, modulename = objSystem.ModuleName, Dtcs = objSystem.Dtcs, InvalidDTC = objSystem.InvalidDTC, BodyInfo = objSystem.BodyInfo;
                      objSystem.Dtcs.forEach(function (obj) {
                        var DTCCode = obj[0],
                            type = obj[1],
                            def = obj[2];
                        modules.push({
                          code: DTCCode,
                          type: type,
                          definition: def
                        });
                      });
                      return _context89.abrupt("return", resolve({
                        data: {
                          system: _system,
                          subsystem: subsystem,
                          modulename: modulename,
                          Dtcs: modules,
                          InvalidDTC: !!InvalidDTC
                        }
                      }));

                    case 13:
                      return _context89.abrupt("return", resolve({
                        raw: rawbuff
                      }));

                    case 16:
                      _context89.prev = 16;
                      _context89.t0 = _context89["catch"](0);
                      return _context89.abrupt("return", resolve({}));

                    case 19:
                    case "end":
                      return _context89.stop();
                  }
                }, _callee89, this, [[0, 16]]);
              }));
            });
          }
        }, {
          key: "configJsonReport",
          value: function configJsonReport() {
            var _this37 = this;

            var isEnable = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
            return new Promise(function (resolve) {
              return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(_this37, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee90() {
                var usbArgs, usbData;
                return _regeneratorRuntime().wrap(function _callee90$(_context90) {
                  while (1) switch (_context90.prev = _context90.next) {
                    case 0:
                      usbArgs = [0x00];
                      usbData = [];
                      _context90.prev = 2;
                      _context90.next = 5;
                      return this.LinkVciCmd({
                        Procid: isEnable ? _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.enable_jsonfmt : _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.disable_jsonfmt,
                        stateid: 0,
                        usbData: usbData,
                        nretry: 1
                      });

                    case 5:
                      return _context90.abrupt("return", resolve(true));

                    case 8:
                      _context90.prev = 8;
                      _context90.t0 = _context90["catch"](2);
                      console.log(_context90.t0);
                      return _context90.abrupt("return", resolve(false));

                    case 12:
                    case "end":
                      return _context90.stop();
                  }
                }, _callee90, this, [[2, 8]]);
              }));
            });
          }
        }, {
          key: "configJsonDTCDef",
          value: function configJsonDTCDef() {
            var isEnable = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee91() {
              var usbArgs, usbData;
              return _regeneratorRuntime().wrap(function _callee91$(_context91) {
                while (1) switch (_context91.prev = _context91.next) {
                  case 0:
                    _context91.prev = 0;
                    usbArgs = [0x00];
                    usbData = [];
                    _context91.next = 5;
                    return this.LinkVciCmd({
                      Procid: isEnable ? _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.enable_jsonfmt_def : _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.disable_jsonfmt_def,
                      stateid: 0,
                      usbData: usbData,
                      nretry: 1
                    });

                  case 5:
                    return _context91.abrupt("return", _context91.sent);

                  case 8:
                    _context91.prev = 8;
                    _context91.t0 = _context91["catch"](0);
                    return _context91.abrupt("return", false);

                  case 11:
                  case "end":
                    return _context91.stop();
                }
              }, _callee91, this, [[0, 8]]);
            }));
          }
        }, {
          key: "getInnovaGroupDtc",
          value: function getInnovaGroupDtc(group) {
            var _this38 = this;

            return new Promise(function (resolve) {
              return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(_this38, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee92() {
                var usbData, getGroupName, data;
                return _regeneratorRuntime().wrap(function _callee92$(_context92) {
                  while (1) switch (_context92.prev = _context92.next) {
                    case 0:
                      _context92.prev = 0;
                      usbData = _toConsumableArray(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_4__.numberToBytes(group, 1));

                      getGroupName = function getGroupName(a) {
                        try {
                          return _vcistd__WEBPACK_IMPORTED_MODULE_0__.EnumInnovaGroups[a];
                        } catch (ex) {
                          return "Unknown Group : ".concat(a);
                        }
                      };

                      this.logdebug('Reading dtc of ' + getGroupName(group));
                      _context92.next = 6;
                      return this.LinkVciCmd({
                        Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.oem,
                        stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_nwscan.readdtcgroup,
                        usbData: usbData,
                        nretry: 2,
                        timeout: 3000
                      });

                    case 6:
                      data = _context92.sent;
                      return _context92.abrupt("return", resolve(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_4__.bytesToString(data)));

                    case 10:
                      _context92.prev = 10;
                      _context92.t0 = _context92["catch"](0);
                      this.logdebug(_context92.t0);
                      return _context92.abrupt("return", resolve({}));

                    case 14:
                    case "end":
                      return _context92.stop();
                  }
                }, _callee92, this, [[0, 10]]);
              }));
            });
          }
        }, {
          key: "parser",
          value: function parser(data) {
            this.logdebug(data);
          }
        }]);
      }(_obd__WEBPACK_IMPORTED_MODULE_1__.OBDx);

      _NWSCAN.ɵfac = /*@__PURE__*/function () {
        var ɵNWSCAN_BaseFactory;
        return function NWSCAN_Factory(t) {
          return (ɵNWSCAN_BaseFactory || (ɵNWSCAN_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetInheritedFactory"](_NWSCAN)))(t || _NWSCAN);
        };
      }();

      _NWSCAN.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
        token: _NWSCAN,
        factory: _NWSCAN.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    29326:
    /*!************************************************************!*\
      !*** ./src/app/services/innova-vci-service/src/obd/obd.ts ***!
      \************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "OBDx": function OBDx() {
          return (
            /* binding */
            _OBDx
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      42321);
      /* harmony import */


      var _utilities_dataParser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./../utilities/dataParser */
      81402);
      /* harmony import */


      var util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! util */
      94655);
      /* harmony import */


      var util__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _vcistd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./vcistd */
      48860);
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! lodash */
      202);
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _command_command_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../command/command.service */
      12843);
      /* harmony import */


      var _utilities_notify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../utilities/notify.service */
      46607);

      var _OBDx = /*#__PURE__*/function () {
        function _OBDx(VCICmd, notifier) {
          _classCallCheck(this, _OBDx);

          this.VCICmd = VCICmd;
          this.notifier = notifier;
          this.is_initializing = false;
        } // modified by ngoclb, force return boolean for this function


        return _createClass(_OBDx, [{
          key: "initialize",
          value: function initialize() {
            var sleepMs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee93() {
              return _regeneratorRuntime().wrap(function _callee93$(_context93) {
                while (1) switch (_context93.prev = _context93.next) {
                  case 0:
                    if (!this.is_initializing) {
                      _context93.next = 2;
                      break;
                    }

                    return _context93.abrupt("return", false);

                  case 2:
                    this.is_initializing = true;
                    this.VCICmd.ResetListenerData();
                    _context93.prev = 4;

                    if (!sleepMs) {
                      _context93.next = 8;
                      break;
                    }

                    _context93.next = 8;
                    return this.sleep(sleepMs);

                  case 8:
                    _context93.next = 10;
                    return this.setReableFormat(true);

                  case 10:
                    _context93.next = 17;
                    break;

                  case 12:
                    _context93.prev = 12;
                    _context93.t0 = _context93["catch"](4);
                    this.logdebug("setReableFormat error:" + _context93.t0.message);
                    this.is_initializing = false;
                    return _context93.abrupt("return", false);

                  case 17:
                    this.is_initializing = false;
                    return _context93.abrupt("return", true);

                  case 19:
                  case "end":
                    return _context93.stop();
                }
              }, _callee93, this, [[4, 12]]);
            }));
          }
        }, {
          key: "cancel_vci_process",
          value: function cancel_vci_process() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee94() {
              var data;
              return _regeneratorRuntime().wrap(function _callee94$(_context94) {
                while (1) switch (_context94.prev = _context94.next) {
                  case 0:
                    _context94.prev = 0;
                    this.logdebug("cancel vci process");
                    _context94.next = 4;
                    return this.LinkVciCmd({
                      Procid: _vcistd__WEBPACK_IMPORTED_MODULE_2__.VCIProg.unsolicited_msg,
                      stateid: _vcistd__WEBPACK_IMPORTED_MODULE_2__.VCICmd_Unsolicited_msg.msg_cancel,
                      nretry: 0,
                      timeout: 200 // ngoclb: change timeout

                    });

                  case 4:
                    data = _context94.sent;
                    _context94.next = 7;
                    return this.EnableFastCancel();

                  case 7:
                    return _context94.abrupt("return", data);

                  case 10:
                    _context94.prev = 10;
                    _context94.t0 = _context94["catch"](0);
                    this.logdebug("cancel vci process:" + _context94.t0);

                  case 13:
                  case "end":
                    return _context94.stop();
                }
              }, _callee94, this, [[0, 10]]);
            }));
          } // modified by ngoclb, also get tooid in this function

        }, {
          key: "getInfo",
          value: function getInfo() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee95() {
              var ret, _yield$this$Link4, data, error, pid, v, _v, _v2, _m, _b, _d;

              return _regeneratorRuntime().wrap(function _callee95$(_context95) {
                while (1) switch (_context95.prev = _context95.next) {
                  case 0:
                    ret = {
                      productid: -1,
                      main: '',
                      boot: '',
                      db: ''
                    };
                    _context95.next = 3;
                    return this.Link(_vcistd__WEBPACK_IMPORTED_MODULE_2__.ICOMMANDS.getUsbProductId);

                  case 3:
                    _yield$this$Link4 = _context95.sent;
                    data = _yield$this$Link4.data;
                    error = _yield$this$Link4.error;

                    if (!data) {
                      ret = lodash__WEBPACK_IMPORTED_MODULE_3__.set(ret, "error", error.message ? error.message : error);
                    } else {
                      pid = _utilities_dataParser__WEBPACK_IMPORTED_MODULE_0__.bytesToInt(data, 2, 0);
                      ret = lodash__WEBPACK_IMPORTED_MODULE_3__.set(ret, "productid", pid);
                    } //main:xxx , boot:xxx


                    _context95.next = 9;
                    return this.LinkVciCmd({
                      Procid: _vcistd__WEBPACK_IMPORTED_MODULE_2__.VCIProg.systemdata,
                      stateid: _vcistd__WEBPACK_IMPORTED_MODULE_2__.VCICmd_system.getversion
                    });

                  case 9:
                    v = _context95.sent;
                    v = lodash__WEBPACK_IMPORTED_MODULE_3__.chunk(v, 16) || [];
                    _v = v, _v2 = _slicedToArray(_v, 3), _m = _v2[0], _b = _v2[1], _d = _v2[2];

                    if (!(0, util__WEBPACK_IMPORTED_MODULE_1__.isNullOrUndefined)(_m)) {
                      ret = lodash__WEBPACK_IMPORTED_MODULE_3__.set(ret, "main", _utilities_dataParser__WEBPACK_IMPORTED_MODULE_0__.bytesToString(_m));
                    }

                    if (!(0, util__WEBPACK_IMPORTED_MODULE_1__.isNullOrUndefined)(_b)) {
                      ret = lodash__WEBPACK_IMPORTED_MODULE_3__.set(ret, "boot", _utilities_dataParser__WEBPACK_IMPORTED_MODULE_0__.bytesToString(_b));
                    }

                    if (!(0, util__WEBPACK_IMPORTED_MODULE_1__.isNullOrUndefined)(_d)) {
                      ret = lodash__WEBPACK_IMPORTED_MODULE_3__.set(ret, "db", _utilities_dataParser__WEBPACK_IMPORTED_MODULE_0__.bytesToString(_d));
                    }

                    return _context95.abrupt("return", ret);

                  case 16:
                  case "end":
                    return _context95.stop();
                }
              }, _callee95, this);
            }));
          }
        }, {
          key: "setReableFormat",
          value: function setReableFormat(status) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee96() {
              var _yield$this$Link5, data, error;

              return _regeneratorRuntime().wrap(function _callee96$(_context96) {
                while (1) switch (_context96.prev = _context96.next) {
                  case 0:
                    _context96.next = 2;
                    return this.Link({
                      // ...ICOMMANDS.setResponseFormat,
                      id: _vcistd__WEBPACK_IMPORTED_MODULE_2__.ICOMMANDS.setResponseFormat.id,
                      data: [status ? 1 : 0],
                      nretry: 0,
                      timeout: 300
                    });

                  case 2:
                    _yield$this$Link5 = _context96.sent;
                    data = _yield$this$Link5.data;
                    error = _yield$this$Link5.error;

                    if (!error) {
                      _context96.next = 7;
                      break;
                    }

                    throw new Error(error.message);

                  case 7:
                    if (!status) {
                      _context96.next = 14;
                      break;
                    }

                    _context96.next = 10;
                    return this.LinkVciCmd({
                      Procid: _vcistd__WEBPACK_IMPORTED_MODULE_2__.VCIProg.enable_jsonfmt,
                      stateid: 0
                    });

                  case 10:
                    _context96.next = 12;
                    return this.LinkVciCmd({
                      Procid: _vcistd__WEBPACK_IMPORTED_MODULE_2__.VCIProg.enable_jsonfmt_def,
                      stateid: 0
                    });

                  case 12:
                    _context96.next = 18;
                    break;

                  case 14:
                    _context96.next = 16;
                    return this.LinkVciCmd({
                      Procid: _vcistd__WEBPACK_IMPORTED_MODULE_2__.VCIProg.disable_jsonfmt,
                      stateid: 0
                    });

                  case 16:
                    _context96.next = 18;
                    return this.LinkVciCmd({
                      Procid: _vcistd__WEBPACK_IMPORTED_MODULE_2__.VCIProg.disable_jsonfmt_def,
                      stateid: 0
                    });

                  case 18:
                  case "end":
                    return _context96.stop();
                }
              }, _callee96, this);
            }));
          } // added by ngoclb

        }, {
          key: "sleep",
          value: function sleep(ms) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee97() {
              return _regeneratorRuntime().wrap(function _callee97$(_context97) {
                while (1) switch (_context97.prev = _context97.next) {
                  case 0:
                    return _context97.abrupt("return", new Promise(function (resolve) {
                      setTimeout(resolve, ms);
                    }));

                  case 1:
                  case "end":
                    return _context97.stop();
                }
              }, _callee97);
            }));
          }
        }, {
          key: "LinkVciCmd",
          value: function LinkVciCmd(cmdInfo) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee98() {
              var Procid, stateid, _cmdInfo$usbData, usbData, _cmdInfo$nretry, nretry, _cmdInfo$timeout, timeout, procdata, statedata, usbCommandHeader, respdata, data, _data, b0, b1, b2, b3, status, vcidata, _vcidata, ERASE_STATUS, ERR_CODE, restvcidata, ERASE_ERR_CODE;

              return _regeneratorRuntime().wrap(function _callee98$(_context98) {
                while (1) switch (_context98.prev = _context98.next) {
                  case 0:
                    Procid = cmdInfo.Procid, stateid = cmdInfo.stateid, _cmdInfo$usbData = cmdInfo.usbData, usbData = _cmdInfo$usbData === void 0 ? [] : _cmdInfo$usbData, _cmdInfo$nretry = cmdInfo.nretry, nretry = _cmdInfo$nretry === void 0 ? 3 : _cmdInfo$nretry, _cmdInfo$timeout = cmdInfo.timeout, timeout = _cmdInfo$timeout === void 0 ? 2000 : _cmdInfo$timeout;
                    procdata = _utilities_dataParser__WEBPACK_IMPORTED_MODULE_0__.arrayFromNumber(Procid, 2);
                    statedata = _utilities_dataParser__WEBPACK_IMPORTED_MODULE_0__.arrayFromNumber(stateid, 1);
                    usbCommandHeader = [0x04, 0x00, 0x00, 0x00, 0x65, 0x00, 0x00, 0x00];
                    _context98.next = 6;
                    return this.Link({
                      id: 0x80,
                      data: [].concat(usbCommandHeader, procdata, statedata, usbData),
                      nretry: nretry,
                      timeout: timeout
                    });

                  case 6:
                    respdata = _context98.sent;
                    data = respdata.data; // this.logdebug(`vci link res: ${data}`)

                    if (!(0, util__WEBPACK_IMPORTED_MODULE_1__.isNullOrUndefined)(data)) {
                      _context98.next = 10;
                      break;
                    }

                    return _context98.abrupt("return", undefined);

                  case 10:
                    _data = _toArray(data), b0 = _data[0], b1 = _data[1], b2 = _data[2], b3 = _data[3], status = _data[4], vcidata = _data.slice(5);

                    if (!(status == 0xAA)) {
                      _context98.next = 13;
                      break;
                    }

                    return _context98.abrupt("return", vcidata);

                  case 13:
                    if (!(status == 0x11 && stateid == _vcistd__WEBPACK_IMPORTED_MODULE_2__.VCICmd_obd2.Erase_Dtc)) {
                      _context98.next = 17;
                      break;
                    }

                    _vcidata = _toArray(vcidata), ERASE_STATUS = _vcidata[0], ERR_CODE = _vcidata[1], restvcidata = _vcidata.slice(2);
                    ERASE_ERR_CODE = {
                      0x00: "OBD2_ERASE_STT_NONE",
                      0x01: "OBD2_ERASE_STT_SUCCESS",
                      0x02: "OBD2_ERASE_STT_NEGATIVE",
                      0x03: "OBD2_ERASE_STT_NO_RESPONSE",
                      0x04: "OBD2_ERASE_STT_NEGATIVE_22",
                      0xFF: "OBD2_ERASE_STT_UNKNOWN"
                    }; // this.logdebug(`vci link check: ${ERR_CODE}`)
                    // this.logdebug(`vci link check: ${ERASE_ERR_CODE[ERR_CODE]}`)

                    return _context98.abrupt("return", {
                      status: "Erase fail",
                      error: ERASE_ERR_CODE[ERR_CODE]
                    });

                  case 17:
                    return _context98.abrupt("return", undefined);

                  case 18:
                  case "end":
                    return _context98.stop();
                }
              }, _callee98, this);
            }));
          }
        }, {
          key: "LinkHIDUSBCmd",
          value: function LinkHIDUSBCmd(cmdInfo) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee100() {
              var _this39 = this;

              var cmd, _cmdInfo$vehicleIdx, vehicleIdx, _cmdInfo$nretry2, nretry, _cmdInfo$timeout2, timeout, MaxNumBuff, usbData, usbCommandHeader, ret, _flink;

              return _regeneratorRuntime().wrap(function _callee100$(_context100) {
                while (1) switch (_context100.prev = _context100.next) {
                  case 0:
                    _context100.prev = 0;
                    cmd = cmdInfo.cmd, _cmdInfo$vehicleIdx = cmdInfo.vehicleIdx, vehicleIdx = _cmdInfo$vehicleIdx === void 0 ? 0 : _cmdInfo$vehicleIdx, _cmdInfo$nretry2 = cmdInfo.nretry, nretry = _cmdInfo$nretry2 === void 0 ? 3 : _cmdInfo$nretry2, _cmdInfo$timeout2 = cmdInfo.timeout, timeout = _cmdInfo$timeout2 === void 0 ? 4000 : _cmdInfo$timeout2, MaxNumBuff = cmdInfo.MaxNumBuff;
                    usbData = [cmd, vehicleIdx, 0];
                    usbCommandHeader = [0x04, 0x00, 0x00, 0x00, 0x64, 0x00, 0x00, 0x00];
                    ret = [];

                    _flink = function __flink(idx, MaxNumBuff) {
                      return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(_this39, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee99() {
                        var t;
                        return _regeneratorRuntime().wrap(function _callee99$(_context99) {
                          while (1) switch (_context99.prev = _context99.next) {
                            case 0:
                              if (!(idx >= MaxNumBuff)) {
                                _context99.next = 2;
                                break;
                              }

                              return _context99.abrupt("return", ret);

                            case 2:
                              _context99.next = 4;
                              return this.Link({
                                id: 0x80,
                                data: [].concat(usbCommandHeader, [0, cmd], [idx], [0, 0, 0, 0, 0]),
                                nretry: nretry,
                                timeout: timeout
                              });

                            case 4:
                              _context99.t0 = _context99.sent;

                              if (_context99.t0) {
                                _context99.next = 7;
                                break;
                              }

                              _context99.t0 = [];

                            case 7:
                              t = _context99.t0;
                              ret.push(Object.assign({
                                bufferIndex: idx
                              }, t));
                              _context99.next = 11;
                              return _flink(idx + 1, MaxNumBuff);

                            case 11:
                              return _context99.abrupt("return", _context99.sent);

                            case 12:
                            case "end":
                              return _context99.stop();
                          }
                        }, _callee99, this);
                      }));
                    };

                    _context100.next = 8;
                    return _flink(0, MaxNumBuff);

                  case 8:
                    return _context100.abrupt("return", _context100.sent);

                  case 11:
                    _context100.prev = 11;
                    _context100.t0 = _context100["catch"](0);
                    return _context100.abrupt("return", []);

                  case 14:
                  case "end":
                    return _context100.stop();
                }
              }, _callee100, null, [[0, 11]]);
            }));
          }
        }, {
          key: "getToolReportBuffer",
          value: function getToolReportBuffer(reportConfig) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee101() {
              var returndata;
              return _regeneratorRuntime().wrap(function _callee101$(_context101) {
                while (1) switch (_context101.prev = _context101.next) {
                  case 0:
                    returndata = {
                      YMME_PROFILE: [],
                      OBD2_LD_SID1_BUFF: [],
                      OBD2_FF_SID2_BUFF: [],
                      OBD2_DTC_SID37A_BUFF: [],
                      OBD2_SPECIALTEST_SID568_BUFF: [],
                      OBD2_VEHINFO_SID9_BUFF: [],
                      OBD2_RECORED_LD_BUFF: [],
                      OEM_MODULE_BUFF: []
                    };

                    if (!reportConfig.isVEHICLE_DATA_YMME_PROFILE) {
                      _context101.next = 5;
                      break;
                    }

                    _context101.next = 4;
                    return this.getVehReport_YMME_PROFILE();

                  case 4:
                    returndata.YMME_PROFILE = _context101.sent;

                  case 5:
                    if (!reportConfig.isVEHICLE_DATA_OBD2_LD_SID1_BUFF) {
                      _context101.next = 9;
                      break;
                    }

                    _context101.next = 8;
                    return this.getVehReport_OBD2_LD_SID1_BUFF();

                  case 8:
                    returndata.OBD2_LD_SID1_BUFF = _context101.sent;

                  case 9:
                    if (!reportConfig.isVEHICLE_DATA_OBD2_FF_SID2_BUFF) {
                      _context101.next = 13;
                      break;
                    }

                    _context101.next = 12;
                    return this.getVehReport_OBD2_FF_SID2_BUFF();

                  case 12:
                    returndata.OBD2_FF_SID2_BUFF = _context101.sent;

                  case 13:
                    if (!reportConfig.isVEHICLE_DATA_OBD2_DTC_SID37A_BUFF) {
                      _context101.next = 17;
                      break;
                    }

                    _context101.next = 16;
                    return this.getVehReport_OBD2_DTC_SID37A_BUFF();

                  case 16:
                    returndata.OBD2_DTC_SID37A_BUFF = _context101.sent;

                  case 17:
                    if (!reportConfig.isVEHICLE_DATA_OBD2_SPECIALTEST_SID568_BUFF) {
                      _context101.next = 21;
                      break;
                    }

                    _context101.next = 20;
                    return this.getVehReport_OBD2_SPECIALTEST_SID568_BUFF();

                  case 20:
                    returndata.OBD2_SPECIALTEST_SID568_BUFF = _context101.sent;

                  case 21:
                    if (!reportConfig.isVEHICLE_DATA_OBD2_VEHINFO_SID9_BUFF) {
                      _context101.next = 25;
                      break;
                    }

                    _context101.next = 24;
                    return this.getVehReport_OBD2_VEHINFO_SID9_BUFF();

                  case 24:
                    returndata.OBD2_VEHINFO_SID9_BUFF = _context101.sent;

                  case 25:
                    if (!reportConfig.isVEHICLE_DATA_OBD2_RECORED_LD_BUFF) {
                      _context101.next = 29;
                      break;
                    }

                    _context101.next = 28;
                    return this.getVehReport_OBD2_RECORED_LD_BUFF();

                  case 28:
                    returndata.OBD2_RECORED_LD_BUFF = _context101.sent;

                  case 29:
                    if (!reportConfig.isVEHICLE_DATA_OEM_MODULE_BUFF) {
                      _context101.next = 33;
                      break;
                    }

                    _context101.next = 32;
                    return this.getVehReport_OEM_MODULE_BUFF();

                  case 32:
                    returndata.OEM_MODULE_BUFF = _context101.sent;

                  case 33:
                    return _context101.abrupt("return", returndata);

                  case 34:
                  case "end":
                    return _context101.stop();
                }
              }, _callee101, this);
            }));
          }
        }, {
          key: "getVehReport_YMME_PROFILE",
          value: function getVehReport_YMME_PROFILE() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee102() {
              return _regeneratorRuntime().wrap(function _callee102$(_context102) {
                while (1) switch (_context102.prev = _context102.next) {
                  case 0:
                    _context102.next = 2;
                    return this.LinkHIDUSBCmd(_vcistd__WEBPACK_IMPORTED_MODULE_2__.USBHIDCommand_64.eVEHICLE_DATA_YMME_PROFILE);

                  case 2:
                    return _context102.abrupt("return", _context102.sent);

                  case 3:
                  case "end":
                    return _context102.stop();
                }
              }, _callee102, this);
            }));
          }
        }, {
          key: "getVehReport_OBD2_LD_SID1_BUFF",
          value: function getVehReport_OBD2_LD_SID1_BUFF() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee103() {
              return _regeneratorRuntime().wrap(function _callee103$(_context103) {
                while (1) switch (_context103.prev = _context103.next) {
                  case 0:
                    _context103.next = 2;
                    return this.LinkHIDUSBCmd(_vcistd__WEBPACK_IMPORTED_MODULE_2__.USBHIDCommand_64.eVEHICLE_DATA_OBD2_LD_SID1_BUFF);

                  case 2:
                    return _context103.abrupt("return", _context103.sent);

                  case 3:
                  case "end":
                    return _context103.stop();
                }
              }, _callee103, this);
            }));
          }
        }, {
          key: "getVehReport_OBD2_FF_SID2_BUFF",
          value: function getVehReport_OBD2_FF_SID2_BUFF() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee104() {
              return _regeneratorRuntime().wrap(function _callee104$(_context104) {
                while (1) switch (_context104.prev = _context104.next) {
                  case 0:
                    _context104.next = 2;
                    return this.LinkHIDUSBCmd(_vcistd__WEBPACK_IMPORTED_MODULE_2__.USBHIDCommand_64.eVEHICLE_DATA_OBD2_FF_SID2_BUFF);

                  case 2:
                    return _context104.abrupt("return", _context104.sent);

                  case 3:
                  case "end":
                    return _context104.stop();
                }
              }, _callee104, this);
            }));
          }
        }, {
          key: "getVehReport_OBD2_FF_SID2_BUFF_RAW",
          value: function getVehReport_OBD2_FF_SID2_BUFF_RAW() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee105() {
              return _regeneratorRuntime().wrap(function _callee105$(_context105) {
                while (1) switch (_context105.prev = _context105.next) {
                  case 0:
                    _context105.next = 2;
                    return this.LinkHIDUSBCmd(_vcistd__WEBPACK_IMPORTED_MODULE_2__.USBHIDCommand_64.eVEHICLE_DATA_OBD2_FF_SID2_BUFF_RAW);

                  case 2:
                    return _context105.abrupt("return", _context105.sent);

                  case 3:
                  case "end":
                    return _context105.stop();
                }
              }, _callee105, this);
            }));
          }
        }, {
          key: "getVehReport_OBD2_DTC_SID37A_BUFF",
          value: function getVehReport_OBD2_DTC_SID37A_BUFF() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee106() {
              return _regeneratorRuntime().wrap(function _callee106$(_context106) {
                while (1) switch (_context106.prev = _context106.next) {
                  case 0:
                    _context106.next = 2;
                    return this.LinkHIDUSBCmd(_vcistd__WEBPACK_IMPORTED_MODULE_2__.USBHIDCommand_64.eVEHICLE_DATA_OBD2_DTC_SID37A_BUFF);

                  case 2:
                    return _context106.abrupt("return", _context106.sent);

                  case 3:
                  case "end":
                    return _context106.stop();
                }
              }, _callee106, this);
            }));
          }
        }, {
          key: "getVehReport_OBD2_SPECIALTEST_SID568_BUFF",
          value: function getVehReport_OBD2_SPECIALTEST_SID568_BUFF() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee107() {
              return _regeneratorRuntime().wrap(function _callee107$(_context107) {
                while (1) switch (_context107.prev = _context107.next) {
                  case 0:
                    _context107.next = 2;
                    return this.LinkHIDUSBCmd(_vcistd__WEBPACK_IMPORTED_MODULE_2__.USBHIDCommand_64.eVEHICLE_DATA_OBD2_SPECIALTEST_SID568_BUFF);

                  case 2:
                    return _context107.abrupt("return", _context107.sent);

                  case 3:
                  case "end":
                    return _context107.stop();
                }
              }, _callee107, this);
            }));
          }
        }, {
          key: "getVehReport_OBD2_SPECIALTEST_SID5_BUFF",
          value: function getVehReport_OBD2_SPECIALTEST_SID5_BUFF() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee108() {
              return _regeneratorRuntime().wrap(function _callee108$(_context108) {
                while (1) switch (_context108.prev = _context108.next) {
                  case 0:
                    _context108.next = 2;
                    return this.LinkHIDUSBCmd(_vcistd__WEBPACK_IMPORTED_MODULE_2__.USBHIDCommand_64.eVEHICLE_DATA_OBD2_SPECIALTEST_SID5_BUFF);

                  case 2:
                    return _context108.abrupt("return", _context108.sent);

                  case 3:
                  case "end":
                    return _context108.stop();
                }
              }, _callee108, this);
            }));
          }
        }, {
          key: "getVehReport_OBD2_SPECIALTEST_SID6_BUFF",
          value: function getVehReport_OBD2_SPECIALTEST_SID6_BUFF() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee109() {
              return _regeneratorRuntime().wrap(function _callee109$(_context109) {
                while (1) switch (_context109.prev = _context109.next) {
                  case 0:
                    _context109.next = 2;
                    return this.LinkHIDUSBCmd(_vcistd__WEBPACK_IMPORTED_MODULE_2__.USBHIDCommand_64.eVEHICLE_DATA_OBD2_SPECIALTEST_SID6_BUFF);

                  case 2:
                    return _context109.abrupt("return", _context109.sent);

                  case 3:
                  case "end":
                    return _context109.stop();
                }
              }, _callee109, this);
            }));
          }
        }, {
          key: "getVehReport_OBD2_SPECIALTEST_SID8_BUFF",
          value: function getVehReport_OBD2_SPECIALTEST_SID8_BUFF() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee110() {
              return _regeneratorRuntime().wrap(function _callee110$(_context110) {
                while (1) switch (_context110.prev = _context110.next) {
                  case 0:
                    _context110.next = 2;
                    return this.LinkHIDUSBCmd(_vcistd__WEBPACK_IMPORTED_MODULE_2__.USBHIDCommand_64.eVEHICLE_DATA_OBD2_SPECIALTEST_SID8_BUFF);

                  case 2:
                    return _context110.abrupt("return", _context110.sent);

                  case 3:
                  case "end":
                    return _context110.stop();
                }
              }, _callee110, this);
            }));
          }
        }, {
          key: "getVehReport_OBD2_VEHINFO_SID9_BUFF",
          value: function getVehReport_OBD2_VEHINFO_SID9_BUFF() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee111() {
              return _regeneratorRuntime().wrap(function _callee111$(_context111) {
                while (1) switch (_context111.prev = _context111.next) {
                  case 0:
                    _context111.next = 2;
                    return this.LinkHIDUSBCmd(_vcistd__WEBPACK_IMPORTED_MODULE_2__.USBHIDCommand_64.eVEHICLE_DATA_OBD2_VEHINFO_SID9_BUFF);

                  case 2:
                    return _context111.abrupt("return", _context111.sent);

                  case 3:
                  case "end":
                    return _context111.stop();
                }
              }, _callee111, this);
            }));
          }
        }, {
          key: "getVehReport_OBD2_RECORED_LD_BUFF",
          value: function getVehReport_OBD2_RECORED_LD_BUFF() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee112() {
              return _regeneratorRuntime().wrap(function _callee112$(_context112) {
                while (1) switch (_context112.prev = _context112.next) {
                  case 0:
                    _context112.next = 2;
                    return this.LinkHIDUSBCmd(_vcistd__WEBPACK_IMPORTED_MODULE_2__.USBHIDCommand_64.eVEHICLE_DATA_OBD2_RECORED_LD_BUFF);

                  case 2:
                    return _context112.abrupt("return", _context112.sent);

                  case 3:
                  case "end":
                    return _context112.stop();
                }
              }, _callee112, this);
            }));
          }
        }, {
          key: "getVehReport_OEM_MODULE_BUFF",
          value: function getVehReport_OEM_MODULE_BUFF() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee113() {
              return _regeneratorRuntime().wrap(function _callee113$(_context113) {
                while (1) switch (_context113.prev = _context113.next) {
                  case 0:
                    _context113.next = 2;
                    return this.LinkHIDUSBCmd(_vcistd__WEBPACK_IMPORTED_MODULE_2__.USBHIDCommand_64.eVEHICLE_DATA_OEM_MODULE_BUFF);

                  case 2:
                    return _context113.abrupt("return", _context113.sent);

                  case 3:
                  case "end":
                    return _context113.stop();
                }
              }, _callee113, this);
            }));
          }
        }, {
          key: "Link",
          value: function Link(cmdinfo) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee114() {
              return _regeneratorRuntime().wrap(function _callee114$(_context114) {
                while (1) switch (_context114.prev = _context114.next) {
                  case 0:
                    _context114.prev = 0;
                    _context114.next = 3;
                    return this.VCICmd.sendData(cmdinfo);

                  case 3:
                    return _context114.abrupt("return", _context114.sent);

                  case 6:
                    _context114.prev = 6;
                    _context114.t0 = _context114["catch"](0);
                    return _context114.abrupt("return", {
                      data: undefined,
                      error: _context114.t0
                    });

                  case 9:
                  case "end":
                    return _context114.stop();
                }
              }, _callee114, this, [[0, 6]]);
            }));
          }
        }, {
          key: "LinkMultiData",
          value: function LinkMultiData(cmdinfo) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee115() {
              return _regeneratorRuntime().wrap(function _callee115$(_context115) {
                while (1) switch (_context115.prev = _context115.next) {
                  case 0:
                    _context115.prev = 0;
                    _context115.next = 3;
                    return this.VCICmd.sendGetMultiData(cmdinfo);

                  case 3:
                    return _context115.abrupt("return", _context115.sent);

                  case 6:
                    _context115.prev = 6;
                    _context115.t0 = _context115["catch"](0);
                    return _context115.abrupt("return", {
                      data: undefined,
                      error: _context115.t0
                    });

                  case 9:
                  case "end":
                    return _context115.stop();
                }
              }, _callee115, this, [[0, 6]]);
            }));
          }
        }, {
          key: "EnableFastCancel",
          value: function EnableFastCancel() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee116() {
              return _regeneratorRuntime().wrap(function _callee116$(_context116) {
                while (1) switch (_context116.prev = _context116.next) {
                  case 0:
                    _context116.next = 2;
                    return this.VCICmd.EnableFastCancel();

                  case 2:
                    return _context116.abrupt("return", _context116.sent);

                  case 3:
                  case "end":
                    return _context116.stop();
                }
              }, _callee116, this);
            }));
          }
        }, {
          key: "ResetFastCancel",
          value: function ResetFastCancel() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee117() {
              return _regeneratorRuntime().wrap(function _callee117$(_context117) {
                while (1) switch (_context117.prev = _context117.next) {
                  case 0:
                    _context117.next = 2;
                    return this.VCICmd.ResetFastCancel();

                  case 2:
                    return _context117.abrupt("return", _context117.sent);

                  case 3:
                  case "end":
                    return _context117.stop();
                }
              }, _callee117, this);
            }));
          }
        }, {
          key: "registerReceiveCb",
          value: function registerReceiveCb(func) {
            this.VCICmd.EventCallBackFunction.subscribe(func);
          } // public deregisterReceiveCb()
          // {
          //   this.VCICmd.deregisterCallbackFunc();
          // }

        }, {
          key: "logdebug",
          value: function logdebug(data) {
            if ((0, util__WEBPACK_IMPORTED_MODULE_1__.isArray)(data)) {
              this.notifier.log(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_0__.bytesToHexString(data));
              return;
            }

            if ((0, util__WEBPACK_IMPORTED_MODULE_1__.isString)(data)) {
              this.notifier.log(data);
              return;
            }

            this.notifier.log(JSON.stringify(data));
          }
        }, {
          key: "Cancel_VCI_Process",
          value: function Cancel_VCI_Process() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee118() {
              return _regeneratorRuntime().wrap(function _callee118$(_context118) {
                while (1) switch (_context118.prev = _context118.next) {
                  case 0:
                    try {
                      this.logdebug("Cancel Process...");
                    } catch (err) {}

                  case 1:
                  case "end":
                    return _context118.stop();
                }
              }, _callee118, this);
            }));
          }
        }]);
      }();

      _OBDx.ɵfac = function OBDx_Factory(t) {
        return new (t || _OBDx)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_command_command_service__WEBPACK_IMPORTED_MODULE_4__.CommandService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_utilities_notify_service__WEBPACK_IMPORTED_MODULE_5__.NotifyService));
      };

      _OBDx.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
        token: _OBDx,
        factory: _OBDx.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    24394:
    /*!*************************************************************!*\
      !*** ./src/app/services/innova-vci-service/src/obd/obd2.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "OBD2": function OBD2() {
          return (
            /* binding */
            _OBD
          );
        },

        /* harmony export */
        "enumProtocol": function enumProtocol() {
          return (
            /* reexport safe */
            _standard_enums__WEBPACK_IMPORTED_MODULE_6__.enumProtocol
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      42321);
      /* harmony import */


      var _vcistd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./vcistd */
      48860);
      /* harmony import */


      var _obd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./obd */
      29326);
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! lodash */
      202);
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _obdUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./obdUtils */
      2586);
      /* harmony import */


      var util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! util */
      94655);
      /* harmony import */


      var util__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var _utilities_dataParser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../utilities/dataParser */
      81402);
      /* harmony import */


      var _standard_enums__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./../standard/enums */
      13930);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      2316); // import * from './../standard/enums';


      var _OBD = /*#__PURE__*/function (_obd__WEBPACK_IMPORTE5) {
        function _OBD() {
          var _this40;

          _classCallCheck(this, _OBD);

          _this40 = _callSuper(this, _OBD, arguments); // added by NGOCLB

          _this40.isCancelQuery = false;
          return _this40;
        }

        _inherits(_OBD, _obd__WEBPACK_IMPORTE5);

        return _createClass(_OBD, [{
          key: "stopQuery",
          value: function stopQuery() {
            this.isCancelQuery = true;
          }
        }, {
          key: "Query",
          value: function Query() {
            var cbinfo = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            var isNeedCheckVoltage = arguments.length > 1 ? arguments[1] : undefined;
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee121() {
              var _this41 = this;

              var notifyInfo, result, listProtocol, index, total, fFuncCheckVoltage, _fLinkToProtx, linkedProtocol;

              return _regeneratorRuntime().wrap(function _callee121$(_context121) {
                while (1) switch (_context121.prev = _context121.next) {
                  case 0:
                    _context121.prev = 0;

                    notifyInfo = function notifyInfo() {
                      var percent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                      var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                      var total = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
                      var message = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;
                      var isfinish = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
                      cbinfo && cbinfo({
                        percent: percent,
                        index: index,
                        total: total,
                        message: message,
                        isfinish: isfinish
                      });
                    }; //get total process


                    _context121.next = 4;
                    return this.LinkVciCmd({
                      Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.obd2,
                      stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2.start_Query,
                      nretry: 0,
                      timeout: 200
                    });

                  case 4:
                    _context121.t0 = _context121.sent;

                    if (_context121.t0) {
                      _context121.next = 7;
                      break;
                    }

                    _context121.t0 = [];

                  case 7:
                    result = _context121.t0;
                    listProtocol = lodash__WEBPACK_IMPORTED_MODULE_2__.chunk(result, 2);
                    index = 0;
                    total = listProtocol.length;

                    if (!lodash__WEBPACK_IMPORTED_MODULE_2__.isEmpty(listProtocol)) {
                      _context121.next = 14;
                      break;
                    }

                    notifyInfo(100.0, 0, 0, undefined, true);
                    return _context121.abrupt("return", _standard_enums__WEBPACK_IMPORTED_MODULE_6__.enumProtocol.eprotocol_PROTOCOL_NO);

                  case 14:
                    fFuncCheckVoltage = function fFuncCheckVoltage() {
                      return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(_this41, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee119() {
                        var usbData, batvol, j, temp, v;
                        return _regeneratorRuntime().wrap(function _callee119$(_context119) {
                          while (1) switch (_context119.prev = _context119.next) {
                            case 0:
                              usbData = [0, 0];
                              _context119.next = 3;
                              return this.LinkVciCmd({
                                Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.tool,
                                stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_tool.getecuvoltage,
                                usbData: usbData,
                                nretry: 0,
                                timeout: 1000
                              });

                            case 3:
                              batvol = _context119.sent;
                              j = _utilities_dataParser__WEBPACK_IMPORTED_MODULE_5__.bytesToString(batvol);

                              if (!(j.search("Battery Voltage") > 0)) {
                                _context119.next = 8;
                                break;
                              }

                              temp = JSON.parse(j.replace("Battery Voltage", "BatteryVoltage"));
                              return _context119.abrupt("return", temp['BatteryVoltage']);

                            case 8:
                              v = new Float32Array(new Uint8Array(batvol).buffer)[0];

                              if ((0, util__WEBPACK_IMPORTED_MODULE_4__.isNullOrUndefined)(v)) {
                                _context119.next = 11;
                                break;
                              }

                              return _context119.abrupt("return", v);

                            case 11:
                            case "end":
                              return _context119.stop();
                          }
                        }, _callee119, this);
                      }));
                    };

                    this.isCancelQuery = false;

                    _fLinkToProtx = function fLinkToProtx(list) {
                      return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(_this41, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee120() {
                        var _ecuvol, protocolx, idprotocol, respdata;

                        return _regeneratorRuntime().wrap(function _callee120$(_context120) {
                          while (1) switch (_context120.prev = _context120.next) {
                            case 0:
                              _context120.prev = 0;
                              index++;

                              if (!(lodash__WEBPACK_IMPORTED_MODULE_2__.isEmpty(list) || this.isCancelQuery)) {
                                _context120.next = 5;
                                break;
                              }

                              this.isCancelQuery = false;
                              return _context120.abrupt("return", _standard_enums__WEBPACK_IMPORTED_MODULE_6__.enumProtocol.eprotocol_PROTOCOL_NO);

                            case 5:
                              if (!isNeedCheckVoltage) {
                                _context120.next = 11;
                                break;
                              }

                              _context120.next = 8;
                              return fFuncCheckVoltage();

                            case 8:
                              _ecuvol = _context120.sent;

                              if (!(_ecuvol < 1)) {
                                _context120.next = 11;
                                break;
                              }

                              return _context120.abrupt("return", _standard_enums__WEBPACK_IMPORTED_MODULE_6__.enumProtocol.eprotocol_UNKNOWN);

                            case 11:
                              protocolx = list.shift(); // protocolx = [5,0]

                              idprotocol = (protocolx[1] << 8 & 0xff00) + protocolx[0]; // this.logdebug(protocolx)

                              notifyInfo(100.0 * index / total, index, total, _obdUtils__WEBPACK_IMPORTED_MODULE_3__.enumProtocolToString(idprotocol));
                              this.logdebug('start link ' + protocolx);
                              _context120.next = 17;
                              return this.LinkVciCmd({
                                Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.obd2,
                                stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2.Link_To_Prot_N,
                                usbData: protocolx
                              });

                            case 17:
                              respdata = _context120.sent;

                              if (!(!(0, util__WEBPACK_IMPORTED_MODULE_4__.isNullOrUndefined)(respdata) && respdata[0] == 0xaa)) {
                                _context120.next = 22;
                                break;
                              }

                              return _context120.abrupt("return", idprotocol);

                            case 22:
                              _context120.next = 24;
                              return _fLinkToProtx(list);

                            case 24:
                              return _context120.abrupt("return", _context120.sent);

                            case 25:
                              _context120.next = 31;
                              break;

                            case 27:
                              _context120.prev = 27;
                              _context120.t0 = _context120["catch"](0);
                              this.logdebug('stop query ' + _context120.t0);
                              return _context120.abrupt("return", _standard_enums__WEBPACK_IMPORTED_MODULE_6__.enumProtocol.eprotocol_PROTOCOL_NO);

                            case 31:
                            case "end":
                              return _context120.stop();
                          }
                        }, _callee120, this, [[0, 27]]);
                      }));
                    };

                    _context121.next = 19;
                    return _fLinkToProtx(listProtocol);

                  case 19:
                    linkedProtocol = _context121.sent;
                    this.logdebug('finished ' + linkedProtocol); // added by ngoclb

                    notifyInfo(100.0, total, total, _obdUtils__WEBPACK_IMPORTED_MODULE_3__.enumProtocolToString(linkedProtocol), true);
                    return _context121.abrupt("return", linkedProtocol);

                  case 25:
                    _context121.prev = 25;
                    _context121.t1 = _context121["catch"](0);
                    this.logdebug('crash ' + _context121.t1);
                    return _context121.abrupt("return", _standard_enums__WEBPACK_IMPORTED_MODULE_6__.enumProtocol.eprotocol_PROTOCOL_NO);

                  case 29:
                  case "end":
                    return _context121.stop();
                }
              }, _callee121, this, [[0, 25]]);
            }));
          }
        }, {
          key: "quick_retreiveData",
          value: function quick_retreiveData() {
            var cb = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            var readFFDtc = arguments.length > 1 ? arguments[1] : undefined;
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee123() {
              var _this42 = this;

              var args, _f;

              return _regeneratorRuntime().wrap(function _callee123$(_context123) {
                while (1) switch (_context123.prev = _context123.next) {
                  case 0:
                    // changed by ngoclb
                    args = readFFDtc ? [{
                      id: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2.Read_Dtc,
                      message: 'Reading DTC',
                      data: []
                    }, {
                      id: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2.freezeframe,
                      message: 'Reading FreezeFrame',
                      data: []
                    }, {
                      id: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2.ReadService9,
                      message: 'Read Service 9',
                      data: []
                    }] : [{
                      id: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2.monitoricon,
                      message: 'Reading Monitor Icon',
                      data: []
                    }, {
                      id: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2.ReadVin,
                      message: 'Reading VIN',
                      data: []
                    }];

                    _f = function f(dd) {
                      return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(_this42, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee122() {
                        var d;
                        return _regeneratorRuntime().wrap(function _callee122$(_context122) {
                          while (1) switch (_context122.prev = _context122.next) {
                            case 0:
                              _context122.prev = 0;

                              if (!(dd.length == 0)) {
                                _context122.next = 3;
                                break;
                              }

                              return _context122.abrupt("return", true);

                            case 3:
                              d = dd.shift();
                              cb && cb(d.message);
                              _context122.next = 7;
                              return this.LinkVciCmd({
                                Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.obd2,
                                stateid: d.id,
                                usbData: d.data,
                                nretry: 3,
                                timeout: 10000
                              });

                            case 7:
                              _context122.next = 9;
                              return _f(dd);

                            case 9:
                              return _context122.abrupt("return", _context122.sent);

                            case 12:
                              _context122.prev = 12;
                              _context122.t0 = _context122["catch"](0);
                              return _context122.abrupt("return", false);

                            case 15:
                            case "end":
                              return _context122.stop();
                          }
                        }, _callee122, this, [[0, 12]]);
                      }));
                    };

                    _context123.next = 4;
                    return _f(args);

                  case 4:
                    return _context123.abrupt("return", _context123.sent);

                  case 5:
                  case "end":
                    return _context123.stop();
                }
              }, _callee123);
            }));
          }
        }, {
          key: "retreiveData",
          value: function retreiveData() {
            var cb = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee125() {
              var _this43 = this;

              var args, _f2;

              return _regeneratorRuntime().wrap(function _callee125$(_context125) {
                while (1) switch (_context125.prev = _context125.next) {
                  case 0:
                    args = [{
                      id: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2.monitoricon,
                      message: 'Reading Monitor Icon',
                      data: []
                    }, {
                      id: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2.Read_Dtc,
                      message: 'Reading DTC',
                      data: []
                    }, {
                      id: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2.freezeframe,
                      message: 'Reading FreezeFrame',
                      data: []
                    }, {
                      id: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2.ReadVin,
                      message: 'Reading VIN',
                      data: []
                    }, //{id:ENUMVCIs.VCICmd_obd2.ReadService5,message:'Read Service 5',data:[]},
                    //{id:ENUMVCIs.VCICmd_obd2.ReadService6,message:'Read Service 6',data:[]},
                    //{id:ENUMVCIs.VCICmd_obd2.ReadService8,message:'Read Service 8',data:[]},
                    {
                      id: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2.ReadService9,
                      message: 'Read Service 9',
                      data: []
                    }, {
                      id: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2.GetReport,
                      message: 'Reading Report full',
                      data: _toConsumableArray(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_5__.numberToBytes(_vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2_reporttype.report_full, 1))
                    }];

                    _f2 = function f(dd) {
                      return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(_this43, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee124() {
                        var d;
                        return _regeneratorRuntime().wrap(function _callee124$(_context124) {
                          while (1) switch (_context124.prev = _context124.next) {
                            case 0:
                              _context124.prev = 0;

                              if (!(dd.length == 0)) {
                                _context124.next = 3;
                                break;
                              }

                              return _context124.abrupt("return", true);

                            case 3:
                              d = dd.shift();
                              cb && cb(d.message);
                              _context124.next = 7;
                              return this.LinkVciCmd({
                                Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.obd2,
                                stateid: d.id,
                                usbData: d.data,
                                nretry: 3,
                                timeout: 10000
                              });

                            case 7:
                              _context124.next = 9;
                              return _f2(dd);

                            case 9:
                              return _context124.abrupt("return", _context124.sent);

                            case 12:
                              _context124.prev = 12;
                              _context124.t0 = _context124["catch"](0);
                              return _context124.abrupt("return", false);

                            case 15:
                            case "end":
                              return _context124.stop();
                          }
                        }, _callee124, this, [[0, 12]]);
                      }));
                    };

                    _context125.next = 4;
                    return _f2(args);

                  case 4:
                    return _context125.abrupt("return", _context125.sent);

                  case 5:
                  case "end":
                    return _context125.stop();
                }
              }, _callee125);
            }));
          }
        }, {
          key: "retreiveFFDTCMonData",
          value: function retreiveFFDTCMonData() {
            var cb = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee127() {
              var _this44 = this;

              var args, _f3;

              return _regeneratorRuntime().wrap(function _callee127$(_context127) {
                while (1) switch (_context127.prev = _context127.next) {
                  case 0:
                    args = [{
                      id: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2.monitoricon,
                      message: 'Reading Monitor Icon',
                      data: []
                    }, {
                      id: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2.Read_Dtc,
                      message: 'Reading DTC',
                      data: []
                    }, {
                      id: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2.freezeframe,
                      message: 'Reading FreezeFrame',
                      data: []
                    }];

                    _f3 = function f(dd) {
                      return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(_this44, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee126() {
                        var d;
                        return _regeneratorRuntime().wrap(function _callee126$(_context126) {
                          while (1) switch (_context126.prev = _context126.next) {
                            case 0:
                              _context126.prev = 0;

                              if (!(dd.length == 0)) {
                                _context126.next = 3;
                                break;
                              }

                              return _context126.abrupt("return", true);

                            case 3:
                              d = dd.shift();
                              cb && cb(d.message);
                              _context126.next = 7;
                              return this.LinkVciCmd({
                                Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.obd2,
                                stateid: d.id,
                                usbData: d.data,
                                nretry: 3,
                                timeout: 10000
                              });

                            case 7:
                              _context126.next = 9;
                              return _f3(dd);

                            case 9:
                              return _context126.abrupt("return", _context126.sent);

                            case 12:
                              _context126.prev = 12;
                              _context126.t0 = _context126["catch"](0);
                              return _context126.abrupt("return", false);

                            case 15:
                            case "end":
                              return _context126.stop();
                          }
                        }, _callee126, this, [[0, 12]]);
                      }));
                    };

                    _context127.next = 4;
                    return _f3(args);

                  case 4:
                    return _context127.abrupt("return", _context127.sent);

                  case 5:
                  case "end":
                    return _context127.stop();
                }
              }, _callee127);
            }));
          }
        }, {
          key: "retreiveDTCData",
          value: function retreiveDTCData() {
            var cb = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee129() {
              var _this45 = this;

              var args, _f4;

              return _regeneratorRuntime().wrap(function _callee129$(_context129) {
                while (1) switch (_context129.prev = _context129.next) {
                  case 0:
                    args = [{
                      id: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2.Read_Dtc,
                      message: 'Reading DTC',
                      data: []
                    }];

                    _f4 = function f(dd) {
                      return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(_this45, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee128() {
                        var d;
                        return _regeneratorRuntime().wrap(function _callee128$(_context128) {
                          while (1) switch (_context128.prev = _context128.next) {
                            case 0:
                              _context128.prev = 0;

                              if (!(dd.length == 0)) {
                                _context128.next = 3;
                                break;
                              }

                              return _context128.abrupt("return", true);

                            case 3:
                              d = dd.shift();
                              cb && cb(d.message);
                              _context128.next = 7;
                              return this.LinkVciCmd({
                                Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.obd2,
                                stateid: d.id,
                                usbData: d.data,
                                nretry: 3,
                                timeout: 10000
                              });

                            case 7:
                              _context128.next = 9;
                              return _f4(dd);

                            case 9:
                              return _context128.abrupt("return", _context128.sent);

                            case 12:
                              _context128.prev = 12;
                              _context128.t0 = _context128["catch"](0);
                              return _context128.abrupt("return", false);

                            case 15:
                            case "end":
                              return _context128.stop();
                          }
                        }, _callee128, this, [[0, 12]]);
                      }));
                    };

                    _context129.next = 4;
                    return _f4(args);

                  case 4:
                    return _context129.abrupt("return", _context129.sent);

                  case 5:
                  case "end":
                    return _context129.stop();
                }
              }, _callee129);
            }));
          }
        }, {
          key: "getVehicleProfile",
          value: function getVehicleProfile() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee130() {
              var resp;
              return _regeneratorRuntime().wrap(function _callee130$(_context130) {
                while (1) switch (_context130.prev = _context130.next) {
                  case 0:
                    _context130.prev = 0;
                    _context130.next = 3;
                    return this.LinkVciCmd({
                      Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.obd2,
                      stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2.ReadVin
                    });

                  case 3:
                    _context130.next = 5;
                    return this.LinkVciCmd({
                      Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.obd2,
                      stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2.getymmeprofile
                    });

                  case 5:
                    resp = _context130.sent;
                    return _context130.abrupt("return", resp);

                  case 9:
                    _context130.prev = 9;
                    _context130.t0 = _context130["catch"](0);
                    return _context130.abrupt("return", undefined);

                  case 12:
                  case "end":
                    return _context130.stop();
                }
              }, _callee130, this, [[0, 9]]);
            }));
          }
        }, {
          key: "QueryProtocolCAN",
          value: function QueryProtocolCAN(eProtocol) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee131() {
              return _regeneratorRuntime().wrap(function _callee131$(_context131) {
                while (1) switch (_context131.prev = _context131.next) {
                  case 0:
                    _context131.next = 2;
                    return this.LinkVciCmd({
                      Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.obd2,
                      stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2.Link_To_Prot_N,
                      usbData: _utilities_dataParser__WEBPACK_IMPORTED_MODULE_5__.numberToBytes(eProtocol, 2)
                    });

                  case 2:
                    return _context131.abrupt("return", _context131.sent);

                  case 3:
                  case "end":
                    return _context131.stop();
                }
              }, _callee131, this);
            }));
          }
        }, {
          key: "Erase_OBD2_Dtcs",
          value: function Erase_OBD2_Dtcs() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee132() {
              var usbData, data, result;
              return _regeneratorRuntime().wrap(function _callee132$(_context132) {
                while (1) switch (_context132.prev = _context132.next) {
                  case 0:
                    usbData = []; //link sid 05

                    _context132.next = 3;
                    return this.LinkVciCmd({
                      Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.obd2,
                      stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2.Erase_Dtc,
                      usbData: usbData,
                      nretry: 1,
                      timeout: 10000
                    });

                  case 3:
                    data = _context132.sent;
                    // this.logdebug(`erase res: ${data}`)
                    result = "OK";

                    if (data == undefined) {
                      result = "sent";
                    } else if (data.status) {
                      result = data.error ? data.error : "unknown error";
                    }

                    return _context132.abrupt("return", {
                      result: result
                    });

                  case 7:
                  case "end":
                    return _context132.stop();
                }
              }, _callee132, this);
            }));
          }
        }, {
          key: "link_OBD2_SPECIALTEST_SID6",
          value: function link_OBD2_SPECIALTEST_SID6() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee133() {
              var usbData, data, result;
              return _regeneratorRuntime().wrap(function _callee133$(_context133) {
                while (1) switch (_context133.prev = _context133.next) {
                  case 0:
                    usbData = []; //link sid 05

                    _context133.next = 3;
                    return this.LinkVciCmd({
                      Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.obd2,
                      stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2.ReadService6,
                      usbData: usbData,
                      nretry: 1,
                      timeout: 4000
                    });

                  case 3:
                    data = _context133.sent;
                    result = "OK";

                    if (data == undefined) {
                      result = "sent";
                    }

                    return _context133.abrupt("return", {
                      result: result
                    });

                  case 7:
                  case "end":
                    return _context133.stop();
                }
              }, _callee133, this);
            }));
          }
        }, {
          key: "link_OBD2_SPECIALTEST_SID5",
          value: function link_OBD2_SPECIALTEST_SID5() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee134() {
              var usbData, data, result;
              return _regeneratorRuntime().wrap(function _callee134$(_context134) {
                while (1) switch (_context134.prev = _context134.next) {
                  case 0:
                    usbData = [];
                    _context134.next = 3;
                    return this.LinkVciCmd({
                      Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.obd2,
                      stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2.ReadService5,
                      usbData: usbData,
                      nretry: 1,
                      timeout: 4000
                    });

                  case 3:
                    data = _context134.sent;
                    result = "OK";

                    if (data == undefined) {
                      result = "sent";
                    }

                    return _context134.abrupt("return", {
                      result: result
                    });

                  case 7:
                  case "end":
                    return _context134.stop();
                }
              }, _callee134, this);
            }));
          }
        }, {
          key: "link_OBD2_SPECIALTEST_SID8",
          value: function link_OBD2_SPECIALTEST_SID8() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee135() {
              var usbData, data, result;
              return _regeneratorRuntime().wrap(function _callee135$(_context135) {
                while (1) switch (_context135.prev = _context135.next) {
                  case 0:
                    usbData = [];
                    _context135.next = 3;
                    return this.LinkVciCmd({
                      Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.obd2,
                      stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2.ReadService8,
                      usbData: usbData,
                      nretry: 1,
                      timeout: 4000
                    });

                  case 3:
                    data = _context135.sent;
                    result = "OK";

                    if (!(data == undefined)) {
                      _context135.next = 9;
                      break;
                    }

                    result = "Not support";
                    _context135.next = 18;
                    break;

                  case 9:
                    _context135.t0 = data[0];
                    _context135.next = _context135.t0 === _vcistd__WEBPACK_IMPORTED_MODULE_0__.enumEVAPStatus.eEVAPSTATE_NO_SUP ? 12 : _context135.t0 === _vcistd__WEBPACK_IMPORTED_MODULE_0__.enumEVAPStatus.eEVAPSTATE_SUP_OK ? 14 : _context135.t0 === _vcistd__WEBPACK_IMPORTED_MODULE_0__.enumEVAPStatus.eEVAPSTATE_RES_NEG ? 16 : _context135.t0 === _vcistd__WEBPACK_IMPORTED_MODULE_0__.enumEVAPStatus.eEVAPSTATE_RES_NO ? 16 : 18;
                    break;

                  case 12:
                    result = "Not support";
                    return _context135.abrupt("break", 18);

                  case 14:
                    result = "OK";
                    return _context135.abrupt("break", 18);

                  case 16:
                    result = "Sent";
                    return _context135.abrupt("break", 18);

                  case 18:
                    return _context135.abrupt("return", {
                      result: result
                    });

                  case 19:
                  case "end":
                    return _context135.stop();
                }
              }, _callee135, this);
            }));
          }
        }, {
          key: "getVehReport_MIL_Status",
          value: function getVehReport_MIL_Status() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee136() {
              var ret, usbData, data, j, temp, v;
              return _regeneratorRuntime().wrap(function _callee136$(_context136) {
                while (1) switch (_context136.prev = _context136.next) {
                  case 0:
                    ret = {
                      MilStatus: undefined
                    };
                    usbData = _toConsumableArray(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_5__.numberToBytes(_vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2_reporttype.report_mil_stat, 1));
                    _context136.next = 4;
                    return this.LinkVciCmd({
                      Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.obd2,
                      stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2.GetReport,
                      usbData: usbData
                    });

                  case 4:
                    data = _context136.sent;
                    j = _utilities_dataParser__WEBPACK_IMPORTED_MODULE_5__.bytesToString(data);

                    if (!(j.search("Mil Status") > 0)) {
                      _context136.next = 9;
                      break;
                    }

                    temp = JSON.parse(j.replace("Mil Status", "MilStatus"));
                    return _context136.abrupt("return", temp);

                  case 9:
                    v = new Int8Array(new Uint8Array(data).buffer)[0];

                    if ((0, util__WEBPACK_IMPORTED_MODULE_4__.isNullOrUndefined)(v)) {
                      _context136.next = 16;
                      break;
                    }

                    if (!(v === 0)) {
                      _context136.next = 15;
                      break;
                    }

                    return _context136.abrupt("return", {
                      MilStatus: "OFF"
                    });

                  case 15:
                    return _context136.abrupt("return", {
                      MilStatus: "ON"
                    });

                  case 16:
                    return _context136.abrupt("return", ret);

                  case 17:
                  case "end":
                    return _context136.stop();
                }
              }, _callee136, this);
            }));
          }
        }, {
          key: "getVehReport_DriveCycle_Mon_List",
          value: function getVehReport_DriveCycle_Mon_List() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee138() {
              var _this46 = this;

              return _regeneratorRuntime().wrap(function _callee138$(_context138) {
                while (1) switch (_context138.prev = _context138.next) {
                  case 0:
                    return _context138.abrupt("return", new Promise(function (resolve) {
                      return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(_this46, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee137() {
                        var usbData, data, j;
                        return _regeneratorRuntime().wrap(function _callee137$(_context137) {
                          while (1) switch (_context137.prev = _context137.next) {
                            case 0:
                              _context137.prev = 0;
                              usbData = _toConsumableArray(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_5__.numberToBytes(_vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2_reporttype.report_drivecycle_mon_list, 1));
                              _context137.next = 4;
                              return this.LinkVciCmd({
                                Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.obd2,
                                stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2.GetReport,
                                usbData: usbData
                              });

                            case 4:
                              data = _context137.sent;
                              j = _utilities_dataParser__WEBPACK_IMPORTED_MODULE_5__.bytesToString(data);
                              this.logdebug(j);
                              return _context137.abrupt("return", resolve(JSON.parse(j)));

                            case 10:
                              _context137.prev = 10;
                              _context137.t0 = _context137["catch"](0);
                              this.logdebug(_context137.t0);
                              return _context137.abrupt("return", resolve({}));

                            case 14:
                            case "end":
                              return _context137.stop();
                          }
                        }, _callee137, this, [[0, 10]]);
                      }));
                    }));

                  case 1:
                  case "end":
                    return _context138.stop();
                }
              }, _callee138);
            }));
          }
        }, {
          key: "getVehReport_DriveCycle_Mon_Text",
          value: function getVehReport_DriveCycle_Mon_Text(textid) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee140() {
              var _this47 = this;

              return _regeneratorRuntime().wrap(function _callee140$(_context140) {
                while (1) switch (_context140.prev = _context140.next) {
                  case 0:
                    return _context140.abrupt("return", new Promise(function (resolve) {
                      return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(_this47, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee139() {
                        var usbData, data, j;
                        return _regeneratorRuntime().wrap(function _callee139$(_context139) {
                          while (1) switch (_context139.prev = _context139.next) {
                            case 0:
                              _context139.prev = 0;
                              usbData = [].concat(_toConsumableArray(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_5__.numberToBytes(_vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2_reporttype.report_drivecycle_mon_text, 1)), _toConsumableArray(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_5__.numberToBytes(textid, 1)));
                              _context139.next = 4;
                              return this.LinkVciCmd({
                                Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.obd2,
                                stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2.GetReport,
                                usbData: usbData,
                                nretry: 1,
                                timeout: 4000
                              });

                            case 4:
                              data = _context139.sent;
                              this.logdebug("textid:" + _utilities_dataParser__WEBPACK_IMPORTED_MODULE_5__.numberToBytes(textid, 1));
                              j = _utilities_dataParser__WEBPACK_IMPORTED_MODULE_5__.bytesToString(data).split('``').join('`');
                              j = j.split('`').join('\\n');
                              this.logdebug(j);
                              return _context139.abrupt("return", resolve(JSON.parse(j)));

                            case 12:
                              _context139.prev = 12;
                              _context139.t0 = _context139["catch"](0);
                              this.logdebug(_context139.t0);
                              return _context139.abrupt("return", resolve({}));

                            case 16:
                            case "end":
                              return _context139.stop();
                          }
                        }, _callee139, this, [[0, 12]]);
                      }));
                    }));

                  case 1:
                  case "end":
                    return _context140.stop();
                }
              }, _callee140);
            }));
          }
        }, {
          key: "getYMMEString",
          value: function getYMMEString() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee142() {
              var _this48 = this;

              return _regeneratorRuntime().wrap(function _callee142$(_context142) {
                while (1) switch (_context142.prev = _context142.next) {
                  case 0:
                    return _context142.abrupt("return", new Promise(function (resolve) {
                      return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(_this48, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee141() {
                        var usbData, t, j;
                        return _regeneratorRuntime().wrap(function _callee141$(_context141) {
                          while (1) switch (_context141.prev = _context141.next) {
                            case 0:
                              _context141.prev = 0;
                              usbData = _toConsumableArray(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_5__.numberToBytes(_vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2_reporttype.report_ymme, 1));
                              _context141.next = 4;
                              return this.LinkVciCmd({
                                Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.obd2,
                                stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2.GetReport,
                                usbData: usbData,
                                nretry: 3,
                                timeout: 7000
                              });

                            case 4:
                              t = _context141.sent;
                              j = _utilities_dataParser__WEBPACK_IMPORTED_MODULE_5__.bytesToString(t); //this.logdebug(j);

                              return _context141.abrupt("return", resolve(JSON.parse(j)));

                            case 9:
                              _context141.prev = 9;
                              _context141.t0 = _context141["catch"](0);
                              this.logdebug('getYMMEString error:' + _context141.t0);
                              return _context141.abrupt("return", resolve({}));

                            case 13:
                            case "end":
                              return _context141.stop();
                          }
                        }, _callee141, this, [[0, 9]]);
                      }));
                    }));

                  case 1:
                  case "end":
                    return _context142.stop();
                }
              }, _callee142);
            }));
          }
        }, {
          key: "getMonitorIcon",
          value: function getMonitorIcon() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee144() {
              var _this49 = this;

              return _regeneratorRuntime().wrap(function _callee144$(_context144) {
                while (1) switch (_context144.prev = _context144.next) {
                  case 0:
                    return _context144.abrupt("return", new Promise(function (resolve) {
                      return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(_this49, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee143() {
                        var usbData, t, j;
                        return _regeneratorRuntime().wrap(function _callee143$(_context143) {
                          while (1) switch (_context143.prev = _context143.next) {
                            case 0:
                              _context143.prev = 0;
                              usbData = _toConsumableArray(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_5__.numberToBytes(_vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2_reporttype.report_mon_stat, 1));
                              _context143.next = 4;
                              return this.LinkVciCmd({
                                Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.obd2,
                                stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2.GetReport,
                                usbData: usbData,
                                nretry: 3,
                                timeout: 7000
                              });

                            case 4:
                              t = _context143.sent;
                              j = _utilities_dataParser__WEBPACK_IMPORTED_MODULE_5__.bytesToString(t); //this.logdebug(j);

                              return _context143.abrupt("return", resolve(JSON.parse(j)));

                            case 9:
                              _context143.prev = 9;
                              _context143.t0 = _context143["catch"](0);
                              this.logdebug('getMonitorIcon error:' + _context143.t0);
                              return _context143.abrupt("return", resolve({}));

                            case 13:
                            case "end":
                              return _context143.stop();
                          }
                        }, _callee143, this, [[0, 9]]);
                      }));
                    }));

                  case 1:
                  case "end":
                    return _context144.stop();
                }
              }, _callee144);
            }));
          } //01-03-2022 11:16 Quoc Do added for get new monitor status using PID 41

        }, {
          key: "getMonitorIcon_SID41",
          value: function getMonitorIcon_SID41() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee146() {
              var _this50 = this;

              return _regeneratorRuntime().wrap(function _callee146$(_context146) {
                while (1) switch (_context146.prev = _context146.next) {
                  case 0:
                    return _context146.abrupt("return", new Promise(function (resolve) {
                      return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(_this50, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee145() {
                        var usbData, t, j;
                        return _regeneratorRuntime().wrap(function _callee145$(_context145) {
                          while (1) switch (_context145.prev = _context145.next) {
                            case 0:
                              _context145.prev = 0;
                              usbData = _toConsumableArray(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_5__.numberToBytes(_vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2_reporttype.report_TDC_monitor, 1));
                              _context145.next = 4;
                              return this.LinkVciCmd({
                                Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.obd2,
                                stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2.GetReport,
                                usbData: usbData,
                                nretry: 3,
                                timeout: 7000
                              });

                            case 4:
                              t = _context145.sent;
                              j = _utilities_dataParser__WEBPACK_IMPORTED_MODULE_5__.bytesToString(t); //this.logdebug(j);

                              return _context145.abrupt("return", resolve(JSON.parse(j)));

                            case 9:
                              _context145.prev = 9;
                              _context145.t0 = _context145["catch"](0);
                              this.logdebug('getMonitorIcon_SID41 error:' + _context145.t0);
                              return _context145.abrupt("return", resolve({}));

                            case 13:
                            case "end":
                              return _context145.stop();
                          }
                        }, _callee145, this, [[0, 9]]);
                      }));
                    }));

                  case 1:
                  case "end":
                    return _context146.stop();
                }
              }, _callee146);
            }));
          } //01-03-2022 11:39 Quoc Do added new function read RPM VSS
          //{
          //   "Rpm": 16383,
          //   "Vss": 10
          // }

        }, {
          key: "getRPM_VSS",
          value: function getRPM_VSS() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee148() {
              var _this51 = this;

              return _regeneratorRuntime().wrap(function _callee148$(_context148) {
                while (1) switch (_context148.prev = _context148.next) {
                  case 0:
                    return _context148.abrupt("return", new Promise(function (resolve) {
                      return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(_this51, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee147() {
                        var usbData, t, j;
                        return _regeneratorRuntime().wrap(function _callee147$(_context147) {
                          while (1) switch (_context147.prev = _context147.next) {
                            case 0:
                              _context147.prev = 0;
                              usbData = _toConsumableArray(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_5__.numberToBytes(_vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2_reporttype.report_RPM_VSS, 1));
                              _context147.next = 4;
                              return this.LinkVciCmd({
                                Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.obd2,
                                stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2.GetReport,
                                usbData: usbData,
                                nretry: 3,
                                timeout: 7000
                              });

                            case 4:
                              t = _context147.sent;
                              j = _utilities_dataParser__WEBPACK_IMPORTED_MODULE_5__.bytesToString(t); //this.logdebug(j);

                              return _context147.abrupt("return", resolve(JSON.parse(j)));

                            case 9:
                              _context147.prev = 9;
                              _context147.t0 = _context147["catch"](0);
                              this.logdebug('getRPM_VSS error:' + _context147.t0);
                              return _context147.abrupt("return", resolve({}));

                            case 13:
                            case "end":
                              return _context147.stop();
                          }
                        }, _callee147, this, [[0, 9]]);
                      }));
                    }));

                  case 1:
                  case "end":
                    return _context148.stop();
                }
              }, _callee148);
            }));
          }
        }, {
          key: "getVehicleInfo_SID9",
          value: function getVehicleInfo_SID9() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee150() {
              var _this52 = this;

              return _regeneratorRuntime().wrap(function _callee150$(_context150) {
                while (1) switch (_context150.prev = _context150.next) {
                  case 0:
                    return _context150.abrupt("return", new Promise(function (resolve) {
                      return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(_this52, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee149() {
                        var usbData, t, j;
                        return _regeneratorRuntime().wrap(function _callee149$(_context149) {
                          while (1) switch (_context149.prev = _context149.next) {
                            case 0:
                              _context149.prev = 0;
                              usbData = _toConsumableArray(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_5__.numberToBytes(_vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2_reporttype.report_vehicle_info, 1));
                              _context149.next = 4;
                              return this.LinkVciCmd({
                                Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.obd2,
                                stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2.GetReport,
                                usbData: usbData,
                                nretry: 3,
                                timeout: 7000
                              });

                            case 4:
                              t = _context149.sent;
                              j = _utilities_dataParser__WEBPACK_IMPORTED_MODULE_5__.bytesToString(t);
                              this.logdebug('Vehicle info res:' + j);
                              return _context149.abrupt("return", resolve(JSON.parse(j)));

                            case 10:
                              _context149.prev = 10;
                              _context149.t0 = _context149["catch"](0);
                              this.logdebug('Vehicle info err:' + _context149.t0);
                              return _context149.abrupt("return", resolve({}));

                            case 14:
                            case "end":
                              return _context149.stop();
                          }
                        }, _callee149, this, [[0, 10]]);
                      }));
                    }));

                  case 1:
                  case "end":
                    return _context150.stop();
                }
              }, _callee150);
            }));
          }
        }, {
          key: "getFreezeFrameDTCInfo",
          value: function getFreezeFrameDTCInfo() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee152() {
              var _this53 = this;

              return _regeneratorRuntime().wrap(function _callee152$(_context152) {
                while (1) switch (_context152.prev = _context152.next) {
                  case 0:
                    return _context152.abrupt("return", new Promise(function (resolve) {
                      return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(_this53, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee151() {
                        var usbData, t, j;
                        return _regeneratorRuntime().wrap(function _callee151$(_context151) {
                          while (1) switch (_context151.prev = _context151.next) {
                            case 0:
                              _context151.prev = 0;
                              usbData = _toConsumableArray(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_5__.numberToBytes(_vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2_reporttype.report_ff_info, 1));
                              _context151.next = 4;
                              return this.LinkVciCmd({
                                Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.obd2,
                                stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2.GetReport,
                                usbData: usbData,
                                nretry: 3,
                                timeout: 7000
                              });

                            case 4:
                              t = _context151.sent;
                              j = JSON.parse(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_5__.bytesToString(t));

                              if (j.length > 0) {
                                j[3] = j[3] != undefined ? _vcistd__WEBPACK_IMPORTED_MODULE_0__.EnumSeverityText[j[3]] : _vcistd__WEBPACK_IMPORTED_MODULE_0__.EnumSeverityText[0];
                              } //this.logdebug(j);


                              return _context151.abrupt("return", resolve(j));

                            case 10:
                              _context151.prev = 10;
                              _context151.t0 = _context151["catch"](0);
                              this.logdebug('FF Dtc Info err:' + _context151.t0);
                              return _context151.abrupt("return", resolve({}));

                            case 14:
                            case "end":
                              return _context151.stop();
                          }
                        }, _callee151, this, [[0, 10]]);
                      }));
                    }));

                  case 1:
                  case "end":
                    return _context152.stop();
                }
              }, _callee152);
            }));
          }
        }, {
          key: "getFreezeFrameLiveData",
          value: function getFreezeFrameLiveData() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee154() {
              var _this54 = this;

              return _regeneratorRuntime().wrap(function _callee154$(_context154) {
                while (1) switch (_context154.prev = _context154.next) {
                  case 0:
                    return _context154.abrupt("return", new Promise(function (resolve) {
                      return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(_this54, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee153() {
                        var usbData, t, j;
                        return _regeneratorRuntime().wrap(function _callee153$(_context153) {
                          while (1) switch (_context153.prev = _context153.next) {
                            case 0:
                              _context153.prev = 0;
                              usbData = _toConsumableArray(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_5__.numberToBytes(_vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2_reporttype.report_ff_ld, 1));
                              _context153.next = 4;
                              return this.LinkVciCmd({
                                Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.obd2,
                                stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2.GetReport,
                                usbData: usbData,
                                nretry: 3,
                                timeout: 7000
                              });

                            case 4:
                              t = _context153.sent;
                              j = _utilities_dataParser__WEBPACK_IMPORTED_MODULE_5__.bytesToString(t);
                              return _context153.abrupt("return", resolve(JSON.parse(j)));

                            case 9:
                              _context153.prev = 9;
                              _context153.t0 = _context153["catch"](0);
                              this.logdebug('FF LD Info err:' + _context153.t0);
                              return _context153.abrupt("return", resolve({}));

                            case 13:
                            case "end":
                              return _context153.stop();
                          }
                        }, _callee153, this, [[0, 9]]);
                      }));
                    }));

                  case 1:
                  case "end":
                    return _context154.stop();
                }
              }, _callee154);
            }));
          }
        }, {
          key: "getOBD2DTCInfo",
          value: function getOBD2DTCInfo() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee156() {
              var _this55 = this;

              return _regeneratorRuntime().wrap(function _callee156$(_context156) {
                while (1) switch (_context156.prev = _context156.next) {
                  case 0:
                    return _context156.abrupt("return", new Promise(function (resolve) {
                      return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(_this55, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee155() {
                        var usbData, t, j;
                        return _regeneratorRuntime().wrap(function _callee155$(_context155) {
                          while (1) switch (_context155.prev = _context155.next) {
                            case 0:
                              _context155.prev = 0;
                              usbData = _toConsumableArray(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_5__.numberToBytes(_vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2_reporttype.report_dtcs, 1));
                              _context155.next = 4;
                              return this.LinkVciCmd({
                                Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.obd2,
                                stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2.GetReport,
                                usbData: usbData,
                                nretry: 3,
                                timeout: 7000
                              });

                            case 4:
                              t = _context155.sent;
                              j = _utilities_dataParser__WEBPACK_IMPORTED_MODULE_5__.bytesToString(t); //this.logdebug(j);

                              return _context155.abrupt("return", resolve(JSON.parse(j)));

                            case 9:
                              _context155.prev = 9;
                              _context155.t0 = _context155["catch"](0);
                              this.logdebug('getOBD2DTCInfo:' + _context155.t0);
                              return _context155.abrupt("return", resolve({}));

                            case 13:
                            case "end":
                              return _context155.stop();
                          }
                        }, _callee155, this, [[0, 9]]);
                      }));
                    }));

                  case 1:
                  case "end":
                    return _context156.stop();
                }
              }, _callee156);
            }));
          }
        }, {
          key: "getOBD2DTCDef",
          value: function getOBD2DTCDef(moduleindex, dtcindex) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee158() {
              var _this56 = this;

              return _regeneratorRuntime().wrap(function _callee158$(_context158) {
                while (1) switch (_context158.prev = _context158.next) {
                  case 0:
                    return _context158.abrupt("return", new Promise(function (resolve) {
                      return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(_this56, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee157() {
                        var usbData, t, j;
                        return _regeneratorRuntime().wrap(function _callee157$(_context157) {
                          while (1) switch (_context157.prev = _context157.next) {
                            case 0:
                              usbData = [].concat(_toConsumableArray(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_5__.numberToBytes(_vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2_reporttype.report_dtc_def, 1)), _toConsumableArray(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_5__.numberToBytes(moduleindex, 1)), _toConsumableArray(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_5__.numberToBytes(dtcindex, 1)));
                              _context157.next = 3;
                              return this.LinkVciCmd({
                                Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.obd2,
                                stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2.GetReport,
                                usbData: usbData,
                                nretry: 3,
                                timeout: 7000
                              });

                            case 3:
                              t = _context157.sent;
                              j = _utilities_dataParser__WEBPACK_IMPORTED_MODULE_5__.bytesToString(t); //this.logdebug(j);

                              return _context157.abrupt("return", resolve(JSON.parse(j)));

                            case 6:
                            case "end":
                              return _context157.stop();
                          }
                        }, _callee157, this);
                      }));
                    }));

                  case 1:
                  case "end":
                    return _context158.stop();
                }
              }, _callee158);
            }));
          }
        }, {
          key: "getVehReport_YMME_PROFILE",
          value: function getVehReport_YMME_PROFILE() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee160() {
              var _this57 = this;

              var ret, MaxNumBuff, _flink2;

              return _regeneratorRuntime().wrap(function _callee160$(_context160) {
                while (1) switch (_context160.prev = _context160.next) {
                  case 0:
                    ret = [];
                    MaxNumBuff = 1;

                    _flink2 = function __flink(idx, MaxNumBuff) {
                      return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(_this57, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee159() {
                        var usbData, t;
                        return _regeneratorRuntime().wrap(function _callee159$(_context159) {
                          while (1) switch (_context159.prev = _context159.next) {
                            case 0:
                              if (!(idx >= MaxNumBuff)) {
                                _context159.next = 2;
                                break;
                              }

                              return _context159.abrupt("return", ret);

                            case 2:
                              usbData = _toConsumableArray(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_5__.numberToBytes(_vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2_reporttype.report_vehicle_data_ymme_profile, 1));
                              _context159.next = 5;
                              return this.LinkVciCmd({
                                Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.obd2,
                                stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2.GetReport,
                                usbData: usbData,
                                nretry: 3,
                                timeout: 1000 // decrease timeout

                              });

                            case 5:
                              t = _context159.sent;
                              ret.push({
                                bufferIndex: idx,
                                data: t
                              });
                              this.logdebug('link buffer:' + idx);
                              _context159.next = 10;
                              return _flink2(idx + 1, MaxNumBuff);

                            case 10:
                              return _context159.abrupt("return", _context159.sent);

                            case 11:
                            case "end":
                              return _context159.stop();
                          }
                        }, _callee159, this);
                      }));
                    };

                    _context160.next = 5;
                    return _flink2(0, MaxNumBuff);

                  case 5:
                    return _context160.abrupt("return", _context160.sent);

                  case 6:
                  case "end":
                    return _context160.stop();
                }
              }, _callee160);
            }));
          }
        }, {
          key: "getVehReport_OBD2_LD_SID1_BUFF_new",
          value: function getVehReport_OBD2_LD_SID1_BUFF_new() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee162() {
              var _this58 = this;

              var ret, MaxNumBuff, _flink3;

              return _regeneratorRuntime().wrap(function _callee162$(_context162) {
                while (1) switch (_context162.prev = _context162.next) {
                  case 0:
                    ret = [];
                    MaxNumBuff = 2;

                    _flink3 = function __flink(idx, MaxNumBuff) {
                      return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(_this58, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee161() {
                        var usbData, t;
                        return _regeneratorRuntime().wrap(function _callee161$(_context161) {
                          while (1) switch (_context161.prev = _context161.next) {
                            case 0:
                              if (!(idx >= MaxNumBuff)) {
                                _context161.next = 2;
                                break;
                              }

                              return _context161.abrupt("return", ret);

                            case 2:
                              usbData = [].concat(_toConsumableArray(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_5__.numberToBytes(_vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2_reporttype.report_sid1, 1)), _toConsumableArray(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_5__.numberToBytes(idx, 1)));
                              _context161.next = 5;
                              return this.LinkVciCmd({
                                Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.obd2,
                                stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2.GetReport,
                                usbData: usbData,
                                nretry: 1,
                                timeout: 4000
                              });

                            case 5:
                              t = _context161.sent;
                              ret.push({
                                bufferIndex: idx,
                                data: t
                              });
                              this.logdebug('link buffer:' + idx);
                              _context161.next = 10;
                              return _flink3(idx + 1, MaxNumBuff);

                            case 10:
                              return _context161.abrupt("return", _context161.sent);

                            case 11:
                            case "end":
                              return _context161.stop();
                          }
                        }, _callee161, this);
                      }));
                    };

                    _context162.next = 5;
                    return _flink3(0, MaxNumBuff);

                  case 5:
                    return _context162.abrupt("return", _context162.sent);

                  case 6:
                  case "end":
                    return _context162.stop();
                }
              }, _callee162);
            }));
          } // public async getVehReport_OBD2_FF_SID2_BUFF() {
          //     return await this.LinkHIDUSBCmd(USBHIDCommand_64.eVEHICLE_DATA_OBD2_FF_SID2_BUFF);
          // }

        }, {
          key: "getVehReport_OBD2_FF_SID2_BUFF_RAW_new",
          value: function getVehReport_OBD2_FF_SID2_BUFF_RAW_new() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee164() {
              var _this59 = this;

              var ret, MaxNumBuff, _flink4;

              return _regeneratorRuntime().wrap(function _callee164$(_context164) {
                while (1) switch (_context164.prev = _context164.next) {
                  case 0:
                    ret = [];
                    MaxNumBuff = 2;

                    _flink4 = function __flink(idx, MaxNumBuff) {
                      return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(_this59, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee163() {
                        var usbData, t;
                        return _regeneratorRuntime().wrap(function _callee163$(_context163) {
                          while (1) switch (_context163.prev = _context163.next) {
                            case 0:
                              if (!(idx >= MaxNumBuff)) {
                                _context163.next = 2;
                                break;
                              }

                              return _context163.abrupt("return", ret);

                            case 2:
                              usbData = [].concat(_toConsumableArray(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_5__.numberToBytes(_vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2_reporttype.report_sid2, 1)), _toConsumableArray(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_5__.numberToBytes(idx, 1)));
                              _context163.next = 5;
                              return this.LinkVciCmd({
                                Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.obd2,
                                stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2.GetReport,
                                usbData: usbData,
                                nretry: 1,
                                timeout: 4000
                              });

                            case 5:
                              t = _context163.sent;
                              ret.push({
                                bufferIndex: idx,
                                data: t
                              });
                              this.logdebug('link buffer:' + idx);
                              _context163.next = 10;
                              return _flink4(idx + 1, MaxNumBuff);

                            case 10:
                              return _context163.abrupt("return", _context163.sent);

                            case 11:
                            case "end":
                              return _context163.stop();
                          }
                        }, _callee163, this);
                      }));
                    };

                    _context164.next = 5;
                    return _flink4(0, MaxNumBuff);

                  case 5:
                    return _context164.abrupt("return", _context164.sent);

                  case 6:
                  case "end":
                    return _context164.stop();
                }
              }, _callee164);
            }));
          }
        }, {
          key: "getVehReport_OBD2_DTC_SID37A_BUFF_new",
          value: function getVehReport_OBD2_DTC_SID37A_BUFF_new() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee166() {
              var _this60 = this;

              var ret, MaxNumBuff, _flink5;

              return _regeneratorRuntime().wrap(function _callee166$(_context166) {
                while (1) switch (_context166.prev = _context166.next) {
                  case 0:
                    ret = [];
                    MaxNumBuff = 2;

                    _flink5 = function __flink(idx, MaxNumBuff) {
                      return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(_this60, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee165() {
                        var usbData, t;
                        return _regeneratorRuntime().wrap(function _callee165$(_context165) {
                          while (1) switch (_context165.prev = _context165.next) {
                            case 0:
                              if (!(idx >= MaxNumBuff)) {
                                _context165.next = 2;
                                break;
                              }

                              return _context165.abrupt("return", ret);

                            case 2:
                              usbData = [].concat(_toConsumableArray(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_5__.numberToBytes(_vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2_reporttype.report_sid37A, 1)), _toConsumableArray(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_5__.numberToBytes(idx, 1)));
                              _context165.next = 5;
                              return this.LinkVciCmd({
                                Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.obd2,
                                stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2.GetReport,
                                usbData: usbData,
                                nretry: 1,
                                timeout: 4000
                              });

                            case 5:
                              t = _context165.sent;
                              ret.push({
                                bufferIndex: idx,
                                data: t
                              });
                              this.logdebug('link buffer:' + idx);
                              _context165.next = 10;
                              return _flink5(idx + 1, MaxNumBuff);

                            case 10:
                              return _context165.abrupt("return", _context165.sent);

                            case 11:
                            case "end":
                              return _context165.stop();
                          }
                        }, _callee165, this);
                      }));
                    };

                    _context166.next = 5;
                    return _flink5(0, MaxNumBuff);

                  case 5:
                    return _context166.abrupt("return", _context166.sent);

                  case 6:
                  case "end":
                    return _context166.stop();
                }
              }, _callee166);
            }));
          }
        }, {
          key: "getVehReport_OBD2_SPECIALTEST_SID5_BUFF_new",
          value: function getVehReport_OBD2_SPECIALTEST_SID5_BUFF_new() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee168() {
              var _this61 = this;

              var ret, MaxNumBuff, _flink6;

              return _regeneratorRuntime().wrap(function _callee168$(_context168) {
                while (1) switch (_context168.prev = _context168.next) {
                  case 0:
                    ret = [];
                    MaxNumBuff = 1;

                    _flink6 = function __flink(idx, MaxNumBuff) {
                      return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(_this61, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee167() {
                        var usbData, t;
                        return _regeneratorRuntime().wrap(function _callee167$(_context167) {
                          while (1) switch (_context167.prev = _context167.next) {
                            case 0:
                              if (!(idx >= MaxNumBuff)) {
                                _context167.next = 2;
                                break;
                              }

                              return _context167.abrupt("return", ret);

                            case 2:
                              usbData = [].concat(_toConsumableArray(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_5__.numberToBytes(_vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2_reporttype.report_sid5, 1)), _toConsumableArray(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_5__.numberToBytes(idx, 1)));
                              _context167.next = 5;
                              return this.LinkVciCmd({
                                Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.obd2,
                                stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2.GetReport,
                                usbData: usbData,
                                nretry: 1,
                                timeout: 10000
                              });

                            case 5:
                              t = _context167.sent;
                              ret.push({
                                bufferIndex: idx,
                                data: t
                              });
                              this.logdebug('link buffer:' + idx);
                              _context167.next = 10;
                              return _flink6(idx + 1, MaxNumBuff);

                            case 10:
                              return _context167.abrupt("return", _context167.sent);

                            case 11:
                            case "end":
                              return _context167.stop();
                          }
                        }, _callee167, this);
                      }));
                    };

                    _context168.next = 5;
                    return _flink6(0, MaxNumBuff);

                  case 5:
                    return _context168.abrupt("return", _context168.sent);

                  case 6:
                  case "end":
                    return _context168.stop();
                }
              }, _callee168);
            }));
          }
        }, {
          key: "getVehReport_OBD2_SPECIALTEST_SID6_BUFF_v2",
          value: function getVehReport_OBD2_SPECIALTEST_SID6_BUFF_v2() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee170() {
              var _this62 = this;

              var ret, MaxNumBuff, _flink7;

              return _regeneratorRuntime().wrap(function _callee170$(_context170) {
                while (1) switch (_context170.prev = _context170.next) {
                  case 0:
                    ret = [];
                    MaxNumBuff = 1;

                    _flink7 = function __flink(idx, MaxNumBuff) {
                      return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(_this62, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee169() {
                        var usbData, t, j, keys, obj, _iterator, _step, item, m, c;

                        return _regeneratorRuntime().wrap(function _callee169$(_context169) {
                          while (1) switch (_context169.prev = _context169.next) {
                            case 0:
                              if (!(idx >= MaxNumBuff)) {
                                _context169.next = 2;
                                break;
                              }

                              return _context169.abrupt("return", ret);

                            case 2:
                              usbData = [].concat(_toConsumableArray(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_5__.numberToBytes(_vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2_reporttype.report_sid6_tids, 1)), _toConsumableArray(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_5__.numberToBytes(idx, 1)));
                              _context169.next = 5;
                              return this.LinkVciCmd({
                                Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.obd2,
                                stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2.GetReport,
                                usbData: usbData,
                                nretry: 1,
                                timeout: 10000
                              });

                            case 5:
                              t = _context169.sent;
                              j = JSON.parse(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_5__.bytesToString(t));
                              this.logdebug(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_5__.bytesToString(t));

                              if (!lodash__WEBPACK_IMPORTED_MODULE_2__.isObject(j)) {
                                _context169.next = 37;
                                break;
                              }

                              keys = Object.keys(j);
                              obj = {};
                              _iterator = _createForOfIteratorHelper(j);
                              _context169.prev = 12;

                              _iterator.s();

                            case 14:
                              if ((_step = _iterator.n()).done) {
                                _context169.next = 26;
                                break;
                              }

                              item = _step.value;
                              keys = Object.keys(item);
                              usbData = [].concat(_toConsumableArray(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_5__.numberToBytes(_vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2_reporttype.report_sid6_comp_ids, 1)), _toConsumableArray(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_5__.numberToBytes(item[keys[0]], 1)));
                              this.logdebug('Get CompText of textid:' + item[keys[0]]);
                              _context169.next = 21;
                              return this.LinkVciCmd({
                                Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.obd2,
                                stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2.GetReport,
                                usbData: usbData,
                                nretry: 1,
                                timeout: 10000
                              });

                            case 21:
                              m = _context169.sent;
                              c = JSON.parse(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_5__.bytesToString(m));

                              if (lodash__WEBPACK_IMPORTED_MODULE_2__.isObject(c)) {
                                obj[keys[0]] = c;
                              } else {
                                obj[keys[0]] = '';
                              }

                            case 24:
                              _context169.next = 14;
                              break;

                            case 26:
                              _context169.next = 31;
                              break;

                            case 28:
                              _context169.prev = 28;
                              _context169.t0 = _context169["catch"](12);

                              _iterator.e(_context169.t0);

                            case 31:
                              _context169.prev = 31;

                              _iterator.f();

                              return _context169.finish(31);

                            case 34:
                              //let text = DataParser.getStringOfObj(obj);
                              ret.push({
                                bufferIndex: idx,
                                data: obj
                              });
                              _context169.next = 38;
                              break;

                            case 37:
                              ret.push({
                                bufferIndex: idx,
                                data: t
                              });

                            case 38:
                              this.logdebug('link buffer:' + idx);
                              _context169.next = 41;
                              return _flink7(idx + 1, MaxNumBuff);

                            case 41:
                              return _context169.abrupt("return", _context169.sent);

                            case 42:
                            case "end":
                              return _context169.stop();
                          }
                        }, _callee169, this, [[12, 28, 31, 34]]);
                      }));
                    }; //  const testid = await __flink(0, MaxNumBuff);


                    _context170.next = 5;
                    return _flink7(0, MaxNumBuff);

                  case 5:
                    return _context170.abrupt("return", _context170.sent);

                  case 6:
                  case "end":
                    return _context170.stop();
                }
              }, _callee170);
            }));
          }
        }, {
          key: "getVehReport_OBD2_SPECIALTEST_SID6_BUFF_new",
          value: function getVehReport_OBD2_SPECIALTEST_SID6_BUFF_new() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee172() {
              var _this63 = this;

              var ret, MaxNumBuff, _flink8;

              return _regeneratorRuntime().wrap(function _callee172$(_context172) {
                while (1) switch (_context172.prev = _context172.next) {
                  case 0:
                    ret = [];
                    MaxNumBuff = 1;

                    _flink8 = function __flink(idx, MaxNumBuff) {
                      return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(_this63, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee171() {
                        var usbData, t;
                        return _regeneratorRuntime().wrap(function _callee171$(_context171) {
                          while (1) switch (_context171.prev = _context171.next) {
                            case 0:
                              if (!(idx >= MaxNumBuff)) {
                                _context171.next = 2;
                                break;
                              }

                              return _context171.abrupt("return", ret);

                            case 2:
                              usbData = [].concat(_toConsumableArray(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_5__.numberToBytes(_vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2_reporttype.report_sid6, 1)), _toConsumableArray(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_5__.numberToBytes(idx, 1)));
                              _context171.next = 5;
                              return this.LinkVciCmd({
                                Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.obd2,
                                stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2.GetReport,
                                usbData: usbData,
                                nretry: 1,
                                timeout: 10000
                              });

                            case 5:
                              t = _context171.sent;
                              ret.push({
                                bufferIndex: idx,
                                data: t
                              });
                              this.logdebug('link buffer:' + idx);
                              _context171.next = 10;
                              return _flink8(idx + 1, MaxNumBuff);

                            case 10:
                              return _context171.abrupt("return", _context171.sent);

                            case 11:
                            case "end":
                              return _context171.stop();
                          }
                        }, _callee171, this);
                      }));
                    };

                    _context172.next = 5;
                    return _flink8(0, MaxNumBuff);

                  case 5:
                    return _context172.abrupt("return", _context172.sent);

                  case 6:
                  case "end":
                    return _context172.stop();
                }
              }, _callee172);
            }));
          }
        }, {
          key: "getVehReport_OBD2_SPECIALTEST_SID8_BUFF_new",
          value: function getVehReport_OBD2_SPECIALTEST_SID8_BUFF_new() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee174() {
              var _this64 = this;

              var ret, MaxNumBuff, _flink9;

              return _regeneratorRuntime().wrap(function _callee174$(_context174) {
                while (1) switch (_context174.prev = _context174.next) {
                  case 0:
                    ret = [];
                    MaxNumBuff = 1;

                    _flink9 = function __flink(idx, MaxNumBuff) {
                      return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(_this64, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee173() {
                        var usbData, t;
                        return _regeneratorRuntime().wrap(function _callee173$(_context173) {
                          while (1) switch (_context173.prev = _context173.next) {
                            case 0:
                              if (!(idx >= MaxNumBuff)) {
                                _context173.next = 2;
                                break;
                              }

                              return _context173.abrupt("return", ret);

                            case 2:
                              usbData = [].concat(_toConsumableArray(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_5__.numberToBytes(_vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2_reporttype.report_sid8, 1)), _toConsumableArray(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_5__.numberToBytes(idx, 1)));
                              _context173.next = 5;
                              return this.LinkVciCmd({
                                Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.obd2,
                                stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2.GetReport,
                                usbData: usbData,
                                nretry: 1,
                                timeout: 4000
                              });

                            case 5:
                              t = _context173.sent;
                              ret.push({
                                bufferIndex: idx,
                                data: t
                              });
                              this.logdebug('link buffer:' + idx);
                              _context173.next = 10;
                              return _flink9(idx + 1, MaxNumBuff);

                            case 10:
                              return _context173.abrupt("return", _context173.sent);

                            case 11:
                            case "end":
                              return _context173.stop();
                          }
                        }, _callee173, this);
                      }));
                    };

                    _context174.next = 5;
                    return _flink9(0, MaxNumBuff);

                  case 5:
                    return _context174.abrupt("return", _context174.sent);

                  case 6:
                  case "end":
                    return _context174.stop();
                }
              }, _callee174);
            }));
          }
        }, {
          key: "getVehReport_OBD2_VEHINFO_SID9_BUFF_new",
          value: function getVehReport_OBD2_VEHINFO_SID9_BUFF_new() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee176() {
              var _this65 = this;

              var ret, MaxNumBuff, _flink10;

              return _regeneratorRuntime().wrap(function _callee176$(_context176) {
                while (1) switch (_context176.prev = _context176.next) {
                  case 0:
                    ret = [];
                    MaxNumBuff = 2;

                    _flink10 = function __flink(idx, MaxNumBuff) {
                      return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(_this65, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee175() {
                        var usbData, t;
                        return _regeneratorRuntime().wrap(function _callee175$(_context175) {
                          while (1) switch (_context175.prev = _context175.next) {
                            case 0:
                              if (!(idx >= MaxNumBuff)) {
                                _context175.next = 2;
                                break;
                              }

                              return _context175.abrupt("return", ret);

                            case 2:
                              usbData = [].concat(_toConsumableArray(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_5__.numberToBytes(_vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2_reporttype.report_sid9, 1)), _toConsumableArray(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_5__.numberToBytes(idx, 1)));
                              _context175.next = 5;
                              return this.LinkVciCmd({
                                Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.obd2,
                                stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2.GetReport,
                                usbData: usbData,
                                nretry: 1,
                                timeout: 4000
                              });

                            case 5:
                              t = _context175.sent;
                              ret.push({
                                bufferIndex: idx,
                                data: t
                              });
                              this.logdebug('link buffer:' + idx);
                              _context175.next = 10;
                              return _flink10(idx + 1, MaxNumBuff);

                            case 10:
                              return _context175.abrupt("return", _context175.sent);

                            case 11:
                            case "end":
                              return _context175.stop();
                          }
                        }, _callee175, this);
                      }));
                    };

                    _context176.next = 5;
                    return _flink10(0, MaxNumBuff);

                  case 5:
                    return _context176.abrupt("return", _context176.sent);

                  case 6:
                  case "end":
                    return _context176.stop();
                }
              }, _callee176);
            }));
          } // 18-06-2022 Nguyen Pham added function for new smog check and LED status

        }, {
          key: "SetOBD2SmogCheckState",
          value: function SetOBD2SmogCheckState(loc) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee177() {
              var usbData, val;
              return _regeneratorRuntime().wrap(function _callee177$(_context177) {
                while (1) switch (_context177.prev = _context177.next) {
                  case 0:
                    this.logdebug("Set Smog Check Location:" + loc);
                    usbData = _toConsumableArray(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_5__.numberToBytes(loc, 1));
                    _context177.prev = 2;
                    _context177.next = 5;
                    return this.LinkVciCmd({
                      Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.obd2,
                      stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2.SetSmogCheckState,
                      usbData: usbData
                    });

                  case 5:
                    val = _context177.sent;

                    if (!(0, util__WEBPACK_IMPORTED_MODULE_4__.isNullOrUndefined)(val)) {
                      _context177.next = 8;
                      break;
                    }

                    return _context177.abrupt("return", false);

                  case 8:
                    _context177.next = 13;
                    break;

                  case 10:
                    _context177.prev = 10;
                    _context177.t0 = _context177["catch"](2);
                    return _context177.abrupt("return", false);

                  case 13:
                    return _context177.abrupt("return", true);

                  case 14:
                  case "end":
                    return _context177.stop();
                }
              }, _callee177, this, [[2, 10]]);
            }));
          }
        }, {
          key: "SetOBD2SmogCheckCountry",
          value: function SetOBD2SmogCheckCountry(loc) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee178() {
              var usbData, val;
              return _regeneratorRuntime().wrap(function _callee178$(_context178) {
                while (1) switch (_context178.prev = _context178.next) {
                  case 0:
                    this.logdebug("Set Smog Check Country:" + loc);
                    usbData = _toConsumableArray(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_5__.numberToBytes(loc, 1));
                    _context178.prev = 2;
                    _context178.next = 5;
                    return this.LinkVciCmd({
                      Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.obd2,
                      stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2.SetSmogCheckCountry,
                      usbData: usbData
                    });

                  case 5:
                    val = _context178.sent;

                    if (!(0, util__WEBPACK_IMPORTED_MODULE_4__.isNullOrUndefined)(val)) {
                      _context178.next = 8;
                      break;
                    }

                    return _context178.abrupt("return", false);

                  case 8:
                    _context178.next = 13;
                    break;

                  case 10:
                    _context178.prev = 10;
                    _context178.t0 = _context178["catch"](2);
                    return _context178.abrupt("return", false);

                  case 13:
                    return _context178.abrupt("return", true);

                  case 14:
                  case "end":
                    return _context178.stop();
                }
              }, _callee178, this, [[2, 10]]);
            }));
          }
        }, {
          key: "GetOBD2LedStatus",
          value: function GetOBD2LedStatus() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee180() {
              var _this66 = this;

              return _regeneratorRuntime().wrap(function _callee180$(_context180) {
                while (1) switch (_context180.prev = _context180.next) {
                  case 0:
                    return _context180.abrupt("return", new Promise(function (resolve) {
                      return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(_this66, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee179() {
                        var usbData, t, j;
                        return _regeneratorRuntime().wrap(function _callee179$(_context179) {
                          while (1) switch (_context179.prev = _context179.next) {
                            case 0:
                              _context179.prev = 0;
                              usbData = _toConsumableArray(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_5__.numberToBytes(_vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2.GetLedStatus, 1));
                              _context179.next = 4;
                              return this.LinkVciCmd({
                                Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.obd2,
                                stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2.GetReport,
                                usbData: usbData
                              });

                            case 4:
                              t = _context179.sent;
                              j = _utilities_dataParser__WEBPACK_IMPORTED_MODULE_5__.bytesToString(t);
                              this.logdebug('Get Led status: ' + j);
                              return _context179.abrupt("return", resolve(JSON.parse(j)));

                            case 10:
                              _context179.prev = 10;
                              _context179.t0 = _context179["catch"](0);
                              this.logdebug('err GetLedStatus:' + JSON.stringify(_context179.t0));
                              return _context179.abrupt("return", resolve({}));

                            case 14:
                            case "end":
                              return _context179.stop();
                          }
                        }, _callee179, this, [[0, 10]]);
                      }));
                    }));

                  case 1:
                  case "end":
                    return _context180.stop();
                }
              }, _callee180);
            }));
          }
        }, {
          key: "GetOBD2SmogCheckState",
          value: function GetOBD2SmogCheckState() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee182() {
              var _this67 = this;

              return _regeneratorRuntime().wrap(function _callee182$(_context182) {
                while (1) switch (_context182.prev = _context182.next) {
                  case 0:
                    return _context182.abrupt("return", new Promise(function (resolve) {
                      return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(_this67, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee181() {
                        var t;
                        return _regeneratorRuntime().wrap(function _callee181$(_context181) {
                          while (1) switch (_context181.prev = _context181.next) {
                            case 0:
                              _context181.prev = 0;
                              _context181.next = 3;
                              return this.LinkVciCmd({
                                Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.obd2,
                                stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2.GetSmogCheckState
                              });

                            case 3:
                              t = _context181.sent;
                              return _context181.abrupt("return", resolve(t[0]));

                            case 7:
                              _context181.prev = 7;
                              _context181.t0 = _context181["catch"](0);
                              this.logdebug('err GetSmogCheck:' + JSON.stringify(_context181.t0));
                              return _context181.abrupt("return", resolve({}));

                            case 11:
                            case "end":
                              return _context181.stop();
                          }
                        }, _callee181, this, [[0, 7]]);
                      }));
                    }));

                  case 1:
                  case "end":
                    return _context182.stop();
                }
              }, _callee182);
            }));
          }
        }, {
          key: "GetOBD2SmogCheckCountry",
          value: function GetOBD2SmogCheckCountry() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee184() {
              var _this68 = this;

              return _regeneratorRuntime().wrap(function _callee184$(_context184) {
                while (1) switch (_context184.prev = _context184.next) {
                  case 0:
                    return _context184.abrupt("return", new Promise(function (resolve) {
                      return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(_this68, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee183() {
                        var t;
                        return _regeneratorRuntime().wrap(function _callee183$(_context183) {
                          while (1) switch (_context183.prev = _context183.next) {
                            case 0:
                              _context183.prev = 0;
                              _context183.next = 3;
                              return this.LinkVciCmd({
                                Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.obd2,
                                stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2.GetSmogCheckCountry
                              });

                            case 3:
                              t = _context183.sent;
                              return _context183.abrupt("return", resolve(t[0]));

                            case 7:
                              _context183.prev = 7;
                              _context183.t0 = _context183["catch"](0);
                              this.logdebug('err GetSmogCheck:' + JSON.stringify(_context183.t0));
                              return _context183.abrupt("return", resolve({}));

                            case 11:
                            case "end":
                              return _context183.stop();
                          }
                        }, _callee183, this, [[0, 7]]);
                      }));
                    }));

                  case 1:
                  case "end":
                    return _context184.stop();
                }
              }, _callee184);
            }));
          }
        }, {
          key: "SetFuelType",
          value: function SetFuelType(type) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee185() {
              var usbData, val;
              return _regeneratorRuntime().wrap(function _callee185$(_context185) {
                while (1) switch (_context185.prev = _context185.next) {
                  case 0:
                    this.logdebug("Set Fuel Type: " + type);
                    usbData = _toConsumableArray(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_5__.numberToBytes(type, 1));
                    _context185.prev = 2;
                    _context185.next = 5;
                    return this.LinkVciCmd({
                      Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.obd2,
                      stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2.SetFuelType,
                      usbData: usbData
                    });

                  case 5:
                    val = _context185.sent;

                    if (!(0, util__WEBPACK_IMPORTED_MODULE_4__.isNullOrUndefined)(val)) {
                      _context185.next = 8;
                      break;
                    }

                    return _context185.abrupt("return", false);

                  case 8:
                    _context185.next = 13;
                    break;

                  case 10:
                    _context185.prev = 10;
                    _context185.t0 = _context185["catch"](2);
                    return _context185.abrupt("return", false);

                  case 13:
                    return _context185.abrupt("return", true);

                  case 14:
                  case "end":
                    return _context185.stop();
                }
              }, _callee185, this, [[2, 10]]);
            }));
          }
        }, {
          key: "GetFuelType",
          value: function GetFuelType() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee187() {
              var _this69 = this;

              return _regeneratorRuntime().wrap(function _callee187$(_context187) {
                while (1) switch (_context187.prev = _context187.next) {
                  case 0:
                    return _context187.abrupt("return", new Promise(function (resolve) {
                      return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(_this69, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee186() {
                        var t, enumFuelType, fuelType;
                        return _regeneratorRuntime().wrap(function _callee186$(_context186) {
                          while (1) switch (_context186.prev = _context186.next) {
                            case 0:
                              _context186.prev = 0;
                              _context186.next = 3;
                              return this.LinkVciCmd({
                                Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.obd2,
                                stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2.GetFuelType
                              });

                            case 3:
                              t = _context186.sent;
                              enumFuelType = {
                                0: 'Unknown',
                                1: 'GAS',
                                2: 'DIESEL'
                              };
                              fuelType = enumFuelType[t[0]];
                              this.logdebug('GetFuelType: ' + fuelType);
                              return _context186.abrupt("return", resolve({
                                result: fuelType
                              }));

                            case 10:
                              _context186.prev = 10;
                              _context186.t0 = _context186["catch"](0);
                              this.logdebug('err GetFuelType:' + JSON.stringify(_context186.t0));
                              return _context186.abrupt("return", resolve({}));

                            case 14:
                            case "end":
                              return _context186.stop();
                          }
                        }, _callee186, this, [[0, 10]]);
                      }));
                    }));

                  case 1:
                  case "end":
                    return _context187.stop();
                }
              }, _callee187);
            }));
          }
        }, {
          key: "GetVehType",
          value: function GetVehType() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee189() {
              var _this70 = this;

              return _regeneratorRuntime().wrap(function _callee189$(_context189) {
                while (1) switch (_context189.prev = _context189.next) {
                  case 0:
                    return _context189.abrupt("return", new Promise(function (resolve) {
                      return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(_this70, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee188() {
                        var t, enumVehType, vehType;
                        return _regeneratorRuntime().wrap(function _callee188$(_context188) {
                          while (1) switch (_context188.prev = _context188.next) {
                            case 0:
                              _context188.prev = 0;
                              _context188.next = 3;
                              return this.LinkVciCmd({
                                Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.obd2,
                                stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2.GetVehType
                              });

                            case 3:
                              t = _context188.sent;
                              enumVehType = {
                                0: 'Unknown',
                                1: 'Normal',
                                2: 'Electric',
                                3: 'Hybrid'
                              };
                              vehType = enumVehType[t[0]];
                              this.logdebug('GetVehType: ' + vehType);
                              return _context188.abrupt("return", resolve({
                                result: vehType
                              }));

                            case 10:
                              _context188.prev = 10;
                              _context188.t0 = _context188["catch"](0);
                              this.logdebug('err GetVehType:' + JSON.stringify(_context188.t0));
                              return _context188.abrupt("return", resolve({}));

                            case 14:
                            case "end":
                              return _context188.stop();
                          }
                        }, _callee188, this, [[0, 10]]);
                      }));
                    }));

                  case 1:
                  case "end":
                    return _context189.stop();
                }
              }, _callee189);
            }));
          }
        }, {
          key: "SetVehType",
          value: function SetVehType(type) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee190() {
              var usbData, val;
              return _regeneratorRuntime().wrap(function _callee190$(_context190) {
                while (1) switch (_context190.prev = _context190.next) {
                  case 0:
                    this.logdebug("Set Veh Type: " + type);
                    usbData = _toConsumableArray(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_5__.numberToBytes(type, 1));
                    _context190.prev = 2;
                    _context190.next = 5;
                    return this.LinkVciCmd({
                      Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.obd2,
                      stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_obd2.SetVehType,
                      usbData: usbData
                    });

                  case 5:
                    val = _context190.sent;

                    if (!(0, util__WEBPACK_IMPORTED_MODULE_4__.isNullOrUndefined)(val)) {
                      _context190.next = 8;
                      break;
                    }

                    return _context190.abrupt("return", false);

                  case 8:
                    _context190.next = 13;
                    break;

                  case 10:
                    _context190.prev = 10;
                    _context190.t0 = _context190["catch"](2);
                    return _context190.abrupt("return", false);

                  case 13:
                    return _context190.abrupt("return", true);

                  case 14:
                  case "end":
                    return _context190.stop();
                }
              }, _callee190, this, [[2, 10]]);
            }));
          }
        }, {
          key: "GetBluetoothName",
          value: function GetBluetoothName() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee192() {
              var _this71 = this;

              return _regeneratorRuntime().wrap(function _callee192$(_context192) {
                while (1) switch (_context192.prev = _context192.next) {
                  case 0:
                    return _context192.abrupt("return", new Promise(function (resolve) {
                      return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(_this71, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee191() {
                        var t, name;
                        return _regeneratorRuntime().wrap(function _callee191$(_context191) {
                          while (1) switch (_context191.prev = _context191.next) {
                            case 0:
                              _context191.prev = 0;
                              _context191.next = 3;
                              return this.LinkVciCmd({
                                Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.tool,
                                stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_BT_setting.get_bt_name
                              });

                            case 3:
                              t = _context191.sent;
                              this.logdebug(JSON.stringify(t));
                              name = _utilities_dataParser__WEBPACK_IMPORTED_MODULE_5__.bytesToString(t);
                              return _context191.abrupt("return", resolve(name));

                            case 9:
                              _context191.prev = 9;
                              _context191.t0 = _context191["catch"](0);
                              this.logdebug('err GetBlueToothName:' + JSON.stringify(_context191.t0));
                              return _context191.abrupt("return", resolve(null));

                            case 13:
                            case "end":
                              return _context191.stop();
                          }
                        }, _callee191, this, [[0, 9]]);
                      }));
                    }));

                  case 1:
                  case "end":
                    return _context192.stop();
                }
              }, _callee192);
            }));
          }
        }, {
          key: "SetBluetoothName",
          value: function SetBluetoothName(newName) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee193() {
              var nameString, nameLength, usbData, val;
              return _regeneratorRuntime().wrap(function _callee193$(_context193) {
                while (1) switch (_context193.prev = _context193.next) {
                  case 0:
                    _context193.next = 2;
                    return _utilities_dataParser__WEBPACK_IMPORTED_MODULE_5__.stringToBytes(newName);

                  case 2:
                    nameString = _context193.sent;
                    nameLength = nameString.length; // change this

                    usbData = [nameLength].concat(_toConsumableArray(nameString));
                    _context193.prev = 5;
                    _context193.next = 8;
                    return this.LinkVciCmd({
                      Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.tool,
                      stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_BT_setting.set_bt_name,
                      usbData: usbData
                    });

                  case 8:
                    val = _context193.sent;

                    if (!(0, util__WEBPACK_IMPORTED_MODULE_4__.isNullOrUndefined)(val)) {
                      _context193.next = 11;
                      break;
                    }

                    return _context193.abrupt("return", false);

                  case 11:
                    _context193.next = 16;
                    break;

                  case 13:
                    _context193.prev = 13;
                    _context193.t0 = _context193["catch"](5);
                    return _context193.abrupt("return", false);

                  case 16:
                    return _context193.abrupt("return", true);

                  case 17:
                  case "end":
                    return _context193.stop();
                }
              }, _callee193, this, [[5, 13]]);
            }));
          }
        }]);
      }(_obd__WEBPACK_IMPORTED_MODULE_1__.OBDx);

      _OBD.ɵfac = /*@__PURE__*/function () {
        var ɵOBD2_BaseFactory;
        return function OBD2_Factory(t) {
          return (ɵOBD2_BaseFactory || (ɵOBD2_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetInheritedFactory"](_OBD)))(t || _OBD);
        };
      }();

      _OBD.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({
        token: _OBD,
        factory: _OBD.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    89750:
    /*!***************************************************************!*\
      !*** ./src/app/services/innova-vci-service/src/obd/obd2ff.ts ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "OBD2FF": function OBD2FF() {
          return (
            /* binding */
            _OBD2FF
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      42321);
      /* harmony import */


      var _obd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./obd */
      29326);
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! lodash */
      202);
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../utilities/dataParser */
      81402);
      /* harmony import */


      var _vcistd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./vcistd */
      48860);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _OBD2FF = /*#__PURE__*/function (_obd__WEBPACK_IMPORTE6) {
        function _OBD2FF() {
          var _this72;

          _classCallCheck(this, _OBD2FF);

          _this72 = _callSuper(this, _OBD2FF, arguments);
          _this72.theFFBuffer = [];
          _this72.theFFBufferDTC = null;
          _this72.theFFBufferItemName = [];
          _this72.theFFBufferUnit = [];
          _this72.itemFFValuesBuffer = [];
          _this72.bNoRecordedItem = 0;
          _this72.buffer = {};
          _this72.transferStatus = null;
          return _this72;
        }

        _inherits(_OBD2FF, _obd__WEBPACK_IMPORTE6);

        return _createClass(_OBD2FF, [{
          key: "formatBuffer",
          value: function formatBuffer(name, type, buffer) {
            var bufferType = [type];

            var segmentType = _utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.numberToBytes(_vcistd__WEBPACK_IMPORTED_MODULE_3__.BufferSegmentTypes[name], 2);

            var bufferLength = _utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.numberToBytes(buffer.length, 4);

            return [].concat(bufferType, _toConsumableArray(segmentType), _toConsumableArray(bufferLength), _toConsumableArray(buffer));
          }
        }, {
          key: "appendBuffer",
          value: function appendBuffer(name, data) {
            var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
            var buff = this.buffer[name] || [];
            var formatedBuffer = this.formatBuffer(name, type, data);
            this.buffer[name] = buff.concat(formatedBuffer);
          }
        }, {
          key: "getFFDataCommand",
          value: function getFFDataCommand(itemType) {
            var pkgIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            var language = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _vcistd__WEBPACK_IMPORTED_MODULE_3__.Languages.ENGLISH;
            var unit = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _vcistd__WEBPACK_IMPORTED_MODULE_3__.Metrics.USA;
            var iCommand = [100, 0, 0, 0];
            var iReportId = [0, 0, 0, 0];
            var iVehicleIndex = [0];
            var reserved = [0];
            var dataType = _vcistd__WEBPACK_IMPORTED_MODULE_3__.VehicleDataTypes.OBD2_FF_SID2_BUFF;
            var enumDataType = [dataType];
            var dataBufferIndex = [0];
            var enumItemType = [lodash__WEBPACK_IMPORTED_MODULE_1__.get(_vcistd__WEBPACK_IMPORTED_MODULE_3__.FreezeFrameDataTypes, itemType, 1)];
            var params, iSize;
            params = [0, 0, 0, 0];
            if (language !== undefined) params.push(language);
            if (unit !== undefined) params.push(unit); // package index

            if (pkgIndex !== null) {
              iSize = [pkgIndex, 0, 0, 0];
            } else {
              iSize = _utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.numberToBytes(params.length, 4).reverse();
            }

            var data = [].concat(iReportId, iCommand, iVehicleIndex, enumDataType, dataBufferIndex, enumItemType, iSize, params);
            return {
              dataType: dataType,
              bufferIndex: 0,
              params: params,
              data: data
            };
          }
        }, {
          key: "getUsbCommand",
          value: function getUsbCommand(dataType) {
            var bufferIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
            var iCommand = [100, 0, 0, 0];
            var iReportId = [0, 0, 0, 0];
            var iVehicleIndex = [0];
            var reserved = [0];
            var enumDataType = [lodash__WEBPACK_IMPORTED_MODULE_1__.get(_vcistd__WEBPACK_IMPORTED_MODULE_3__.VehicleDataTypes, dataType, 1)];
            var dataBufferIndex = [bufferIndex];

            var iSize = _utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.numberToBytes(params.length, 4).reverse();

            var data = [].concat(iReportId, iCommand, iVehicleIndex, enumDataType, dataBufferIndex, reserved, iSize, params);
            return {
              dataType: dataType,
              bufferIndex: bufferIndex,
              params: params,
              data: data
            };
          }
        }, {
          key: "getFFBuffer",
          value: function getFFBuffer() {
            var _this73 = this;

            var language = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _vcistd__WEBPACK_IMPORTED_MODULE_3__.Languages.ENGLISH;
            var unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _vcistd__WEBPACK_IMPORTED_MODULE_3__.Metrics.USA;
            return new Promise(function (resolve) {
              return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(_this73, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee194() {
                var _this74 = this;

                var retData, isNeedCheckFF, parseItemFF, parseFreezeFrameData;
                return _regeneratorRuntime().wrap(function _callee194$(_context194) {
                  while (1) switch (_context194.prev = _context194.next) {
                    case 0:
                      this.logdebug('Getting freezeframe');
                      this.theFFBuffer = [];
                      this.theFFBufferDTC = null;
                      this.theFFBufferItemName = [];
                      this.theFFBufferUnit = [];
                      retData = {
                        data: null,
                        raw: null
                      };
                      isNeedCheckFF = true;
                      _context194.t0 = isNeedCheckFF;

                      if (!_context194.t0) {
                        _context194.next = 12;
                        break;
                      }

                      _context194.next = 11;
                      return this.getFFHeader(language, unit);

                    case 11:
                      _context194.t0 = !_context194.sent;

                    case 12:
                      if (!_context194.t0) {
                        _context194.next = 14;
                        break;
                      }

                      isNeedCheckFF = false;

                    case 14:
                      _context194.t1 = isNeedCheckFF;

                      if (!_context194.t1) {
                        _context194.next = 19;
                        break;
                      }

                      _context194.next = 18;
                      return this.getFFDTC(language, unit);

                    case 18:
                      _context194.t1 = !_context194.sent;

                    case 19:
                      if (!_context194.t1) {
                        _context194.next = 21;
                        break;
                      }

                      isNeedCheckFF = false;

                    case 21:
                      _context194.t2 = isNeedCheckFF;

                      if (!_context194.t2) {
                        _context194.next = 26;
                        break;
                      }

                      _context194.next = 25;
                      return this.getFFItemNames(language, unit);

                    case 25:
                      _context194.t2 = !_context194.sent;

                    case 26:
                      if (!_context194.t2) {
                        _context194.next = 28;
                        break;
                      }

                      isNeedCheckFF = false;

                    case 28:
                      _context194.t3 = isNeedCheckFF;

                      if (!_context194.t3) {
                        _context194.next = 33;
                        break;
                      }

                      _context194.next = 32;
                      return this.getFFItemUnits(language, unit);

                    case 32:
                      _context194.t3 = !_context194.sent;

                    case 33:
                      if (!_context194.t3) {
                        _context194.next = 35;
                        break;
                      }

                      isNeedCheckFF = false;

                    case 35:
                      this.itemFFValuesBuffer = [];
                      _context194.t4 = isNeedCheckFF;

                      if (!_context194.t4) {
                        _context194.next = 41;
                        break;
                      }

                      _context194.next = 40;
                      return this.getFFItemValues(language, unit);

                    case 40:
                      _context194.t4 = !_context194.sent;

                    case 41:
                      if (!_context194.t4) {
                        _context194.next = 43;
                        break;
                      }

                      isNeedCheckFF = false;

                    case 43:
                      parseItemFF = function parseItemFF(datas) {
                        var lensize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
                        //LEN
                        var retdata = [];

                        for (var i = 0; i < datas.length;) {
                          if (retdata.length >= _this74.bNoRecordedItem) break;

                          var j = _utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.arrayToNumber(datas.slice(i), lensize, false); //datas[i++];


                          i += lensize;
                          if (j > 0) retdata.push(datas.slice(i, i + j));else retdata.push(null);
                          i += j;
                        }

                        return retdata;
                      };

                      parseFreezeFrameData = function parseFreezeFrameData() {
                        var retdatas = [];

                        try {
                          var listItemNames = parseItemFF(_this74.theFFBufferItemName, 2);
                          var listItemValues = parseItemFF(_this74.itemFFValuesBuffer, 1);
                          var listItemUnits = parseItemFF(_this74.theFFBufferUnit, 1);

                          for (var j = 0; j < _this74.bNoRecordedItem; j++) {
                            retdatas.push({
                              name: _utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.getStringOfObj(listItemNames[j]),
                              value: _utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.getStringOfObj(listItemValues[j]),
                              unit: _utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.getStringOfObj(listItemUnits[j]) || ''
                            });
                          }

                          return retdatas;
                        } catch (exception) {
                          _this74.logdebug(exception);

                          return null;
                        }
                      };

                      retData.data = {
                        dtc: {
                          code: _utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.getStringOfObj(this.theFFBufferDTC),
                          definition: null
                        },
                        datas: parseFreezeFrameData()
                      };
                      this.parseFFItemValues(); // await this.getLDRecordTime(language, unit);

                      this.appendBuffer('FREEZE_FRAME', this.theFFBuffer);
                      return _context194.abrupt("return", resolve(retData));

                    case 49:
                    case "end":
                      return _context194.stop();
                  }
                }, _callee194, this);
              }));
            });
          }
        }, {
          key: "getFFDTC",
          value: function getFFDTC() {
            var language = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _vcistd__WEBPACK_IMPORTED_MODULE_3__.Languages.ENGLISH;
            var unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _vcistd__WEBPACK_IMPORTED_MODULE_3__.Metrics.USA;
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee195() {
              var command, theBuffer, _yield$this$Link6, data, result, milDtcLen;

              return _regeneratorRuntime().wrap(function _callee195$(_context195) {
                while (1) switch (_context195.prev = _context195.next) {
                  case 0:
                    command = this.getFFDataCommand('DTC_INFO', null, language, unit);
                    theBuffer = [];
                    _context195.prev = 2;
                    this.logdebug('FreezeFrame Get DTC'); // const result = await this.executor.execAsync({ ...commands.getVehicleV5Data, data: command.data });

                    _context195.next = 6;
                    return this.Link({
                      id: 0x80,
                      data: command.data
                    });

                  case 6:
                    _yield$this$Link6 = _context195.sent;
                    data = _yield$this$Link6.data;
                    result = data;
                    this.logdebug("resule : ".concat(JSON.stringify(result))); // parse result

                    if (!lodash__WEBPACK_IMPORTED_MODULE_1__.isEmpty(result)) {
                      milDtcLen = result[0];
                      theBuffer = theBuffer.concat(lodash__WEBPACK_IMPORTED_MODULE_1__.slice(result, 0, milDtcLen + 1));
                      this.logdebug('FreezeFrame ' + JSON.stringify(result));
                    } else {
                      theBuffer.push(0);
                      this.logdebug('FreezeFrame : ' + 'NO DTC FF');
                    }

                    _context195.next = 16;
                    break;

                  case 13:
                    _context195.prev = 13;
                    _context195.t0 = _context195["catch"](2);
                    // no FF DTC
                    theBuffer.push(0);

                  case 16:
                    this.theFFBufferDTC = theBuffer;
                    this.theFFBuffer = this.theFFBuffer.concat(theBuffer);
                    return _context195.abrupt("return", Promise.resolve(theBuffer.length > 0));

                  case 19:
                  case "end":
                    return _context195.stop();
                }
              }, _callee195, this, [[2, 13]]);
            }));
          }
        }, {
          key: "getFFHeader",
          value: function getFFHeader() {
            var language = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _vcistd__WEBPACK_IMPORTED_MODULE_3__.Languages.ENGLISH;
            var unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _vcistd__WEBPACK_IMPORTED_MODULE_3__.Metrics.USA;
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee196() {
              var command, _yield$this$Link7, data, result;

              return _regeneratorRuntime().wrap(function _callee196$(_context196) {
                while (1) switch (_context196.prev = _context196.next) {
                  case 0:
                    command = this.getFFDataCommand('LD_HEADER', null);
                    _context196.prev = 1;
                    this.logdebug('FreezeFrame getFFHeader'); // const result = await this.executor.execAsync({ ...commands.getVehicleV5Data, data: command.data });

                    _context196.next = 5;
                    return this.Link({
                      id: 0x80,
                      data: command.data
                    });

                  case 5:
                    _yield$this$Link7 = _context196.sent;
                    data = _yield$this$Link7.data;
                    result = data; // parse result

                    this.bNoRecordedItem = result[5];
                    this.logdebug('FreezeFrame : Number recorded: ' + this.bNoRecordedItem); // number of items (2 bytes)

                    this.theFFBuffer = this.theFFBuffer.concat([this.bNoRecordedItem, 0]); // return Promise.resolve(true);
                    //Hung vo update to ensure number record > 0

                    return _context196.abrupt("return", Promise.resolve(this.bNoRecordedItem > 0));

                  case 14:
                    _context196.prev = 14;
                    _context196.t0 = _context196["catch"](1);
                    //throw error;
                    this.logdebug('FreezeFrame' + JSON.stringify(_context196.t0));
                    return _context196.abrupt("return", Promise.resolve(false));

                  case 18:
                  case "end":
                    return _context196.stop();
                }
              }, _callee196, this, [[1, 14]]);
            }));
          }
        }, {
          key: "getFFItemNames",
          value: function getFFItemNames() {
            var language = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _vcistd__WEBPACK_IMPORTED_MODULE_3__.Languages.ENGLISH;
            var unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _vcistd__WEBPACK_IMPORTED_MODULE_3__.Metrics.USA;
            var pkgIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee197() {
              var command, _yield$this$Link8, data, result, namesBufferIndex, i, itemNameBytes, itemNameLen, itemNameArr;

              return _regeneratorRuntime().wrap(function _callee197$(_context197) {
                while (1) switch (_context197.prev = _context197.next) {
                  case 0:
                    command = this.getFFDataCommand('LD_ITEM_NAME_STRING', pkgIndex, language, unit);
                    this.logdebug('FreezeFrame getFFItemNames :' + "packageIndex ".concat(pkgIndex)); // const result = await this.executor.execAsync({ ...commands.getVehicleV5Data, data: command.data });

                    _context197.next = 4;
                    return this.Link({
                      id: 0x80,
                      data: command.data
                    });

                  case 4:
                    _yield$this$Link8 = _context197.sent;
                    data = _yield$this$Link8.data;
                    result = data;
                    this.logdebug('FreezeFrame getFFItemNames' + "length of response ".concat(result ? result.length : 0));

                    if (!(result && result.length === 512)) {
                      _context197.next = 16;
                      break;
                    }

                    // parse result
                    this.transferStatus = result.length === 512 ? result[510] : _vcistd__WEBPACK_IMPORTED_MODULE_3__.TransferStatus.COMPLETED; //names is as [len1 (2 bytes), name1, len2 (2 bytes), name2, ...]
                    //since some last bytes of the buffer with 512 bytes may not use, so we only add meaningful data to the final buffer

                    namesBufferIndex = 0;

                    for (i = 0; i < this.bNoRecordedItem; i++) {
                      itemNameBytes = [result[namesBufferIndex++], result[namesBufferIndex++]];
                      itemNameLen = _utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.bytesToInt(itemNameBytes, 2, 0);
                      itemNameArr = lodash__WEBPACK_IMPORTED_MODULE_1__.slice(result, namesBufferIndex, namesBufferIndex + itemNameLen);
                      namesBufferIndex = namesBufferIndex + itemNameLen;
                      this.theFFBufferItemName = this.theFFBufferItemName.concat(itemNameBytes, itemNameArr);
                      this.theFFBuffer = this.theFFBuffer.concat(itemNameBytes, itemNameArr);
                    }

                    if (!(this.transferStatus === _vcistd__WEBPACK_IMPORTED_MODULE_3__.TransferStatus.TRANSFERRING)) {
                      _context197.next = 15;
                      break;
                    }

                    _context197.next = 15;
                    return this.getFFItemNames(language, unit, pkgIndex + 1);

                  case 15:
                    return _context197.abrupt("return", Promise.resolve(this.transferStatus === _vcistd__WEBPACK_IMPORTED_MODULE_3__.TransferStatus.COMPLETED));

                  case 16:
                    return _context197.abrupt("return", Promise.resolve(false));

                  case 17:
                  case "end":
                    return _context197.stop();
                }
              }, _callee197, this);
            }));
          }
        }, {
          key: "getFFItemUnits",
          value: function getFFItemUnits() {
            var language = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _vcistd__WEBPACK_IMPORTED_MODULE_3__.Languages.ENGLISH;
            var unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _vcistd__WEBPACK_IMPORTED_MODULE_3__.Metrics.USA;
            var pkgIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee199() {
              var _this75 = this;

              return _regeneratorRuntime().wrap(function _callee199$(_context199) {
                while (1) switch (_context199.prev = _context199.next) {
                  case 0:
                    return _context199.abrupt("return", new Promise(function (resolve) {
                      return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(_this75, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee198() {
                        var command, _yield$this$Link9, data, result, unitsBufferIndex, i, itemUnitBytes, itemUnitLen, itemUnitArr;

                        return _regeneratorRuntime().wrap(function _callee198$(_context198) {
                          while (1) switch (_context198.prev = _context198.next) {
                            case 0:
                              command = this.getFFDataCommand('LD_ITEM_UNIT_STRING', pkgIndex, language, unit);
                              this.logdebug('FreezeFrame getFFItemUnits : ' + "packageIndex ".concat(pkgIndex)); // const result = await this.executor.execAsync({ ...commands.getVehicleV5Data, data: command.data });

                              _context198.next = 4;
                              return this.Link({
                                id: 0x80,
                                data: command.data
                              });

                            case 4:
                              _yield$this$Link9 = _context198.sent;
                              data = _yield$this$Link9.data;
                              result = data;
                              this.logdebug('FreezeFrame getFFItemUnits : ' + "length of response ".concat(result ? result.length : 0));

                              if (!(result && result.length === 512)) {
                                _context198.next = 16;
                                break;
                              }

                              // parse result
                              this.transferStatus = result.length === 512 ? result[510] : _vcistd__WEBPACK_IMPORTED_MODULE_3__.TransferStatus.COMPLETED; //names is as [len1 (1 byte), unit1, len2 (1 byte), unit2, ...]
                              //since some last bytes of the buffer with 512 bytes may not use, so we only add meaningful data to the final buffer

                              unitsBufferIndex = 0;

                              for (i = 0; i < this.bNoRecordedItem; i++) {
                                itemUnitBytes = [result[unitsBufferIndex]];
                                itemUnitLen = result[unitsBufferIndex++];
                                itemUnitArr = lodash__WEBPACK_IMPORTED_MODULE_1__.slice(result, unitsBufferIndex, unitsBufferIndex + itemUnitLen);
                                unitsBufferIndex = unitsBufferIndex + itemUnitLen;
                                this.theFFBufferUnit = this.theFFBufferUnit.concat(itemUnitBytes, itemUnitArr);
                                this.theFFBuffer = this.theFFBuffer.concat(itemUnitBytes, itemUnitArr);
                              }

                              if (!(this.transferStatus === _vcistd__WEBPACK_IMPORTED_MODULE_3__.TransferStatus.TRANSFERRING)) {
                                _context198.next = 15;
                                break;
                              }

                              _context198.next = 15;
                              return this.getFFItemUnits(language, unit, pkgIndex + 1);

                            case 15:
                              return _context198.abrupt("return", resolve(this.transferStatus === _vcistd__WEBPACK_IMPORTED_MODULE_3__.TransferStatus.COMPLETED));

                            case 16:
                              return _context198.abrupt("return", resolve(false));

                            case 17:
                            case "end":
                              return _context198.stop();
                          }
                        }, _callee198, this);
                      }));
                    }));

                  case 1:
                  case "end":
                    return _context199.stop();
                }
              }, _callee199);
            }));
          }
        }, {
          key: "getFFItemValues",
          value: function getFFItemValues() {
            var language = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _vcistd__WEBPACK_IMPORTED_MODULE_3__.Languages.ENGLISH;
            var unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _vcistd__WEBPACK_IMPORTED_MODULE_3__.Metrics.USA;
            var pkgIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee200() {
              var command, _yield$this$Link10, data, result;

              return _regeneratorRuntime().wrap(function _callee200$(_context200) {
                while (1) switch (_context200.prev = _context200.next) {
                  case 0:
                    command = this.getFFDataCommand('LD_ITEM_VALUE_STRING', pkgIndex, language, unit);
                    this.logdebug('FreezeFrame getFFItemValues ' + "packageIndex ".concat(pkgIndex)); // let result = await this.executor.execAsync({ ...commands.getVehicleV5Data, data: command.data });

                    _context200.next = 4;
                    return this.Link({
                      id: 0x80,
                      data: command.data
                    });

                  case 4:
                    _yield$this$Link10 = _context200.sent;
                    data = _yield$this$Link10.data;
                    result = data;
                    this.logdebug('FreezeFrame getFFItemValues ' + "length of response ".concat(result ? result.length : 0));

                    if (!(result && result.length === 512)) {
                      _context200.next = 16;
                      break;
                    }

                    // parse result
                    this.transferStatus = result.length === 512 ? result[510] : _vcistd__WEBPACK_IMPORTED_MODULE_3__.TransferStatus.COMPLETED;
                    result = lodash__WEBPACK_IMPORTED_MODULE_1__.take(result, result.length - 2);
                    this.itemFFValuesBuffer = this.itemFFValuesBuffer.concat(result);

                    if (!(this.transferStatus === _vcistd__WEBPACK_IMPORTED_MODULE_3__.TransferStatus.TRANSFERRING)) {
                      _context200.next = 15;
                      break;
                    }

                    _context200.next = 15;
                    return this.getFFItemValues(language, unit, pkgIndex + 1);

                  case 15:
                    return _context200.abrupt("return", Promise.resolve(this.transferStatus === _vcistd__WEBPACK_IMPORTED_MODULE_3__.TransferStatus.COMPLETED));

                  case 16:
                    return _context200.abrupt("return", Promise.resolve(false));

                  case 17:
                  case "end":
                    return _context200.stop();
                }
              }, _callee200, this);
            }));
          }
        }, {
          key: "parseFFItemValues",
          value: function parseFFItemValues() {
            var valuesBuffer = this.itemFFValuesBuffer;

            if (valuesBuffer.length > 0) {
              var valuesBufferIndex = 0;
              var theBuffer = [];
              var itemValueIndex = 0;

              for (var i = 0; i < this.bNoRecordedItem; i++) {
                var itemValueBytes = [valuesBuffer[itemValueIndex++], valuesBuffer[itemValueIndex++]];

                var itemValueLen = _utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.bytesToInt(itemValueBytes, 2, 0);

                var itemValueArr = lodash__WEBPACK_IMPORTED_MODULE_1__.slice(valuesBuffer, itemValueIndex, itemValueIndex + itemValueLen);
                itemValueIndex = itemValueIndex + itemValueLen;
                theBuffer = theBuffer.concat(itemValueBytes, itemValueArr);
              }

              this.theFFBuffer = this.theFFBuffer.concat(theBuffer);
            }
          }
        }]);
      }(_obd__WEBPACK_IMPORTED_MODULE_0__.OBDx);

      _OBD2FF.ɵfac = /*@__PURE__*/function () {
        var ɵOBD2FF_BaseFactory;
        return function OBD2FF_Factory(t) {
          return (ɵOBD2FF_BaseFactory || (ɵOBD2FF_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetInheritedFactory"](_OBD2FF)))(t || _OBD2FF);
        };
      }();

      _OBD2FF.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
        token: _OBD2FF,
        factory: _OBD2FF.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    2586:
    /*!*****************************************************************!*\
      !*** ./src/app/services/innova-vci-service/src/obd/obdUtils.ts ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "enumProtocolToString": function enumProtocolToString() {
          return (
            /* binding */
            _enumProtocolToString
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./../standard/enums_Global */
      45611);

      function _enumProtocolToString(eprotocol) {
        switch (eprotocol) {
          case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_UNKNOWN:
            return "UNKNOWN";

          case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_NO:
            return "Protocol NO";

          case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_VPW:
            return "Protocol VPW";

          case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_PWM:
            return "Protocol PWM";

          case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_ISO9141:
            return "Protocol ISO9141";

          case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_KW2000:
            return "Protocol KW2000";

          case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_CAN500KBAUD:
            return "Protocol CAN500KBAUD";

          case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_XCAN500KBAUD:
            return "Protocol XCAN500KBAUD";

          case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_CAN250KBAUD:
            return "Protocol CAN250KBAUD";

          case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_XCAN250KBAUD:
            return "Protocol XCAN250KBAUD";

          case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_BOSCH:
            return "Protocol BOSCH";

          case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_RESERVE_10:
            return "Protocol RESERVE 10";

          case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_RESERVE_11:
            return "Protocol RESERVE 11";

          case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_RESERVE_12:
            return "Protocol RESERVE 12";

          case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_RESERVE_13:
            return "Protocol RESERVE 13";

          case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_RESERVE_14:
            return "Protocol RESERVE 14";

          case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_KW:
            return "Protocol KW";

          case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_KW1281:
            return "Protocol KW1281";

          case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_MUT:
            return "Protocol MUT";

          case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_CAN_C_UDS:
            return "Protocol CAN C UDS";

          case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_CAN_I_UDS:
            return "Protocol CAN I UDS";

          case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_RESERVE_20:
            return "Protocol RESERVE_20";

          case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_CCD2:
            return "Protocol CCD2";

          case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_SDL:
            return "Protocol SDL";

          case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_UBP:
            return "Protocol UBP";

          case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_MCAN:
            return "Protocol MCAN";

          case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_MCAN_____UDS:
            return "Protocol MCAN UDS";

          case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_H99B:
            return "Protocol H99B";

          case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_95HM:
            return "Protocol 95HM";

          case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_92HM:
            return "Protocol 92HM";

          case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_CAN:
            return "Protocol CAN";

          case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_RESERVE_30:
            return "Protocol RESERVE_30";

          case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_RESERVE_31:
            return "Protocol RESERVE 31";

          case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_CCD:
            return "Protocol CCD";

          case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_SCI:
            return "Protocol SCI";

          case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_RESERVE_34:
            return "Protocol RESERVE 34";

          case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_RESERVE_35:
            return "Protocol RESERVE 35";

          case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_RESERVE_36:
            return "Protocol RESERVE 36";

          case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_RESERVE_37:
            return "Protocol RESERVE 37";

          case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_RESERVE_38:
            return "Protocol RESERVE 38";

          case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_RESERVE_39:
            return "Protocol RESERVE 39";

          case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_RESERVE_40:
            return "Protocol RESERVE 40";

          case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_RESERVE_41:
            return "Protocol RESERVE 41";

          case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_OBD1:
            return "Protocol OBD1";

          case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_RESERVE_43:
            return "Protocol RESERVE_43";

          case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_RESERVE_44:
            return "Protocol RESERVE_44";

          case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_RESERVE_45:
            return "Protocol RESERVE_45";

          case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_RESERVE_46:
            return "Protocol RESERVE_46";

          case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_RESERVE_47:
            return "Protocol RESERVE_47";

          case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_DDL1:
            return "Protocol DDL1";

          case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_SWCAN:
            return "Protocol SWCAN";

          case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_RESERVE_50:
            return "Protocol RESERVE_50";

          case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_MB_ISO:
            return "Protocol MB_ISO";

          case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_KWFB:
            return "Protocol KWFB";

          case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_BMW_CAN:
            return "Protocol BMW_CAN";

          case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_TPCAN_2_0:
            return "Protocol TPCAN_2_0";

          case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_TPCAN_1_6_KW1281:
            return "Protocol TPCAN 1.6 KW1281";

          case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_TPCAN_1_6_KW2000:
            return "Protocol TPCAN 1.6 KW2000";

          case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_KWSSM:
            return "Protocol KWSSM";

          case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_DDL2:
            return "Protocol DDL2";

          case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_DS2:
            return "Protocol DS2";

          case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_CAN_UDS:
            return "Protocol CAN UDS";

          case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_CANUDS:
            return "Protocol CAN UDS";

          case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_CAN_D2:
            return "Protocol CAN D2";

          case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_CAN_GGD:
            return "Protocol CAN GGD";

          case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_ALDL:
            return "Protocol ALDL";

          case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_GMLAN:
            return "Protocol GMLAN";

          case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_MAX:
            return "Protocol MAX";

          case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_CAN_C:
            return "Protocol CAN C";

          case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_TCAN:
            return "Protocol TCAN";

          case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_DS1:
            return "Protocol DS1";

          case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_DS2_MID:
            return "Protocol DS2 MID";

          case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_D2:
            return "Protocol D2";

          case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_GGD:
            return "Protocol GGD";

          case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_Suzuki_SDL:
            return "Protocol SDL";

          case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_RESERVE_76:
            return "Protocol RESERVE 76";

          case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_RESERVE_77:
            return "Protocol RESERVE 77";

          case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_RESERVE_78:
            return "Protocol RESERVE 78";

          case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_RESERVE_79:
            return "Protocol RESERVE 79";

          case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_RESERVE_80:
            return "Protocol RESERVE 80";

          case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_J1708:
            return "Protocol J1708";

          case _standard_enums_Global__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_J1939:
            return "Protocol J1939";

          default:
            return "NA";
        }
      }
      /***/

    },

    /***/
    16017:
    /*!************************************************************!*\
      !*** ./src/app/services/innova-vci-service/src/obd/ofm.ts ***!
      \************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "OFM": function OFM() {
          return (
            /* binding */
            _OFM
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      42321);
      /* harmony import */


      var _vcistd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./vcistd */
      48860);
      /* harmony import */


      var _obd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./obd */
      29326);
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! lodash */
      202);
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _utilities_dataParser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../utilities/dataParser */
      81402);
      /* harmony import */


      var util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! util */
      94655);
      /* harmony import */


      var util__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      2316); // import * from './../standard/enums';


      var _OFM = /*#__PURE__*/function (_obd__WEBPACK_IMPORTE7) {
        function _OFM() {
          _classCallCheck(this, _OFM);

          return _callSuper(this, _OFM, arguments);
        }

        _inherits(_OFM, _obd__WEBPACK_IMPORTE7);

        return _createClass(_OFM, [{
          key: "ofm_getodometer_pidsupport",
          value: function ofm_getodometer_pidsupport() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee201() {
              return _regeneratorRuntime().wrap(function _callee201$(_context201) {
                while (1) switch (_context201.prev = _context201.next) {
                  case 0:
                    _context201.next = 2;
                    return this.getofmsupportitem(_vcistd__WEBPACK_IMPORTED_MODULE_0__.VCI_ofm_group.ofm_group_odo);

                  case 2:
                    return _context201.abrupt("return", _context201.sent);

                  case 3:
                  case "end":
                    return _context201.stop();
                }
              }, _callee201, this);
            }));
          }
        }, {
          key: "ofm_gettpms_pidsupport",
          value: function ofm_gettpms_pidsupport() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee202() {
              return _regeneratorRuntime().wrap(function _callee202$(_context202) {
                while (1) switch (_context202.prev = _context202.next) {
                  case 0:
                    _context202.next = 2;
                    return this.getofmsupportitem(_vcistd__WEBPACK_IMPORTED_MODULE_0__.VCI_ofm_group.ofm_group_tpms);

                  case 2:
                    return _context202.abrupt("return", _context202.sent);

                  case 3:
                  case "end":
                    return _context202.stop();
                }
              }, _callee202, this);
            }));
          }
        }, {
          key: "ofm_getwarninglight_pidsupport",
          value: function ofm_getwarninglight_pidsupport() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee203() {
              return _regeneratorRuntime().wrap(function _callee203$(_context203) {
                while (1) switch (_context203.prev = _context203.next) {
                  case 0:
                    _context203.next = 2;
                    return this.getofmsupportitem(_vcistd__WEBPACK_IMPORTED_MODULE_0__.VCI_ofm_group.ofm_group_warninglight);

                  case 2:
                    return _context203.abrupt("return", _context203.sent);

                  case 3:
                  case "end":
                    return _context203.stop();
                }
              }, _callee203, this);
            }));
          }
        }, {
          key: "ofm_getservicecheck_pidsupport",
          value: function ofm_getservicecheck_pidsupport() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee204() {
              return _regeneratorRuntime().wrap(function _callee204$(_context204) {
                while (1) switch (_context204.prev = _context204.next) {
                  case 0:
                    _context204.next = 2;
                    return this.getofmsupportitem(_vcistd__WEBPACK_IMPORTED_MODULE_0__.VCI_ofm_group.ofm_group_srv_check);

                  case 2:
                    return _context204.abrupt("return", _context204.sent);

                  case 3:
                  case "end":
                    return _context204.stop();
                }
              }, _callee204, this);
            }));
          }
        }, {
          key: "gettpmspid_val",
          value: function gettpmspid_val() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee206() {
              var _this76 = this;

              return _regeneratorRuntime().wrap(function _callee206$(_context206) {
                while (1) switch (_context206.prev = _context206.next) {
                  case 0:
                    return _context206.abrupt("return", new Promise(function (resolve) {
                      return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(_this76, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee205() {
                        var data, resultdisplay, obj, nPid, modules, modules_val, pididx, profileid, ofm_item, profile_data, obj_temp;
                        return _regeneratorRuntime().wrap(function _callee205$(_context205) {
                          while (1) switch (_context205.prev = _context205.next) {
                            case 0:
                              _context205.prev = 0;
                              this.logdebug('Reading TPMS PID Items...');
                              _context205.next = 4;
                              return this.getofmsupportitem(_vcistd__WEBPACK_IMPORTED_MODULE_0__.VCI_ofm_group.ofm_group_tpms);

                            case 4:
                              data = _context205.sent;
                              this.logdebug('Reading TPMS PID Items successfully...');
                              resultdisplay = _utilities_dataParser__WEBPACK_IMPORTED_MODULE_3__.ObjtoStringBeauty(data);
                              obj = JSON.parse(resultdisplay); //this.logdebug(resultdisplay);

                              if (!lodash__WEBPACK_IMPORTED_MODULE_2__.isObject(obj)) {
                                _context205.next = 29;
                                break;
                              }

                              nPid = obj.num_profile; //this.logdebug("number pid:" + nPid);

                              modules = [];
                              modules_val = [];
                              pididx = 0;

                            case 13:
                              if (!(pididx < nPid)) {
                                _context205.next = 25;
                                break;
                              }

                              profileid = obj.list[pididx].profileid;
                              ofm_item = obj.list[pididx].ofm_item; //this.logdebug("ofm_item"+ ofm_item);
                              //this.logdebug("profileid"+ profileid);
                              //this.logdebug('Reading ofm profile ' + profileid.toString());

                              modules.push({
                                profileid: profileid,
                                ofm_item: ofm_item
                              });
                              _context205.next = 19;
                              return this.getofmprofileid_value(profileid);

                            case 19:
                              profile_data = _context205.sent;
                              //this.logdebug(profile_data);
                              obj_temp = JSON.parse(profile_data);

                              if (lodash__WEBPACK_IMPORTED_MODULE_2__.isObject(obj_temp)) {
                                modules_val.push({
                                  ofm_item: _vcistd__WEBPACK_IMPORTED_MODULE_0__.Enum_ofm_Items[ofm_item],
                                  pid: obj_temp.itemid,
                                  Value: obj_temp.value,
                                  Unit: obj_temp.unit
                                });
                              }

                            case 22:
                              pididx++;
                              _context205.next = 13;
                              break;

                            case 25:
                              //this.logdebug(j);
                              this.logdebug({
                                num_profie: nPid,
                                list: modules
                              }); //return resolve({ num_profie:nPid ,list: modules});

                              return _context205.abrupt("return", resolve(modules_val));

                            case 29:
                              return _context205.abrupt("return", resolve(null));

                            case 30:
                              _context205.next = 36;
                              break;

                            case 32:
                              _context205.prev = 32;
                              _context205.t0 = _context205["catch"](0);
                              this.logdebug(_context205.t0);
                              return _context205.abrupt("return", resolve({}));

                            case 36:
                            case "end":
                              return _context205.stop();
                          }
                        }, _callee205, this, [[0, 32]]);
                      }));
                    }));

                  case 1:
                  case "end":
                    return _context206.stop();
                }
              }, _callee206);
            }));
          }
        }, {
          key: "getodogroup_val",
          value: function getodogroup_val() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee208() {
              var _this77 = this;

              return _regeneratorRuntime().wrap(function _callee208$(_context208) {
                while (1) switch (_context208.prev = _context208.next) {
                  case 0:
                    return _context208.abrupt("return", new Promise(function (resolve) {
                      return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(_this77, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee207() {
                        var data, resultdisplay, obj, nPid, modules, modules_val, pididx, profileid, ofm_item, profile_data, obj_temp;
                        return _regeneratorRuntime().wrap(function _callee207$(_context207) {
                          while (1) switch (_context207.prev = _context207.next) {
                            case 0:
                              _context207.prev = 0;
                              this.logdebug('Reading Odometer Items...');
                              _context207.next = 4;
                              return this.getofmsupportitem(_vcistd__WEBPACK_IMPORTED_MODULE_0__.VCI_ofm_group.ofm_group_odo);

                            case 4:
                              data = _context207.sent;
                              this.logdebug('Reading Odometer Items successfully...');
                              resultdisplay = _utilities_dataParser__WEBPACK_IMPORTED_MODULE_3__.ObjtoStringBeauty(data);
                              obj = JSON.parse(resultdisplay); //this.logdebug(resultdisplay);

                              if (!lodash__WEBPACK_IMPORTED_MODULE_2__.isObject(obj)) {
                                _context207.next = 29;
                                break;
                              }

                              nPid = obj.num_profile; //this.logdebug("number pid:" + nPid);

                              modules = [];
                              modules_val = [];
                              pididx = 0;

                            case 13:
                              if (!(pididx < nPid)) {
                                _context207.next = 25;
                                break;
                              }

                              profileid = obj.list[pididx].profileid;
                              ofm_item = obj.list[pididx].ofm_item; //this.logdebug("ofm_item"+ ofm_item);
                              //this.logdebug("profileid"+ profileid);
                              //this.logdebug('Reading ofm profile ' + profileid.toString());

                              modules.push({
                                profileid: profileid,
                                ofm_item: ofm_item
                              });
                              _context207.next = 19;
                              return this.getofmprofileid_value(profileid);

                            case 19:
                              profile_data = _context207.sent;
                              //this.logdebug(profile_data);
                              obj_temp = JSON.parse(profile_data);

                              if (lodash__WEBPACK_IMPORTED_MODULE_2__.isObject(obj_temp)) {
                                modules_val.push({
                                  ofm_item: _vcistd__WEBPACK_IMPORTED_MODULE_0__.Enum_ofm_Items[ofm_item],
                                  pid: obj_temp.itemid,
                                  Value: obj_temp.value,
                                  Unit: obj_temp.unit
                                });
                              }

                            case 22:
                              pididx++;
                              _context207.next = 13;
                              break;

                            case 25:
                              //this.logdebug(j);
                              this.logdebug({
                                num_profie: nPid,
                                list: modules
                              }); //return resolve({ num_profie:nPid ,list: modules});

                              return _context207.abrupt("return", resolve(modules_val));

                            case 29:
                              return _context207.abrupt("return", resolve(null));

                            case 30:
                              _context207.next = 36;
                              break;

                            case 32:
                              _context207.prev = 32;
                              _context207.t0 = _context207["catch"](0);
                              this.logdebug(_context207.t0);
                              return _context207.abrupt("return", resolve({}));

                            case 36:
                            case "end":
                              return _context207.stop();
                          }
                        }, _callee207, this, [[0, 32]]);
                      }));
                    }));

                  case 1:
                  case "end":
                    return _context208.stop();
                }
              }, _callee208);
            }));
          }
        }, {
          key: "getwarninglight_val",
          value: function getwarninglight_val() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee210() {
              var _this78 = this;

              return _regeneratorRuntime().wrap(function _callee210$(_context210) {
                while (1) switch (_context210.prev = _context210.next) {
                  case 0:
                    return _context210.abrupt("return", new Promise(function (resolve) {
                      return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(_this78, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee209() {
                        var data, resultdisplay, obj, nPid, modules, modules_val, pididx, profileid, ofm_item, profile_data, obj_temp;
                        return _regeneratorRuntime().wrap(function _callee209$(_context209) {
                          while (1) switch (_context209.prev = _context209.next) {
                            case 0:
                              _context209.prev = 0;
                              this.logdebug('Reading warning light status...');
                              _context209.next = 4;
                              return this.getofmsupportitem(_vcistd__WEBPACK_IMPORTED_MODULE_0__.VCI_ofm_group.ofm_group_warninglight);

                            case 4:
                              data = _context209.sent;
                              this.logdebug('Reading warning light status successfully...');
                              resultdisplay = _utilities_dataParser__WEBPACK_IMPORTED_MODULE_3__.ObjtoStringBeauty(data);
                              obj = JSON.parse(resultdisplay); //this.logdebug(resultdisplay);

                              if (!lodash__WEBPACK_IMPORTED_MODULE_2__.isObject(obj)) {
                                _context209.next = 29;
                                break;
                              }

                              nPid = obj.num_profile; //this.logdebug("number pid:" + nPid);

                              modules = [];
                              modules_val = [];
                              pididx = 0;

                            case 13:
                              if (!(pididx < nPid)) {
                                _context209.next = 25;
                                break;
                              }

                              profileid = obj.list[pididx].profileid;
                              ofm_item = obj.list[pididx].ofm_item; //this.logdebug("ofm_item"+ ofm_item);
                              //this.logdebug("profileid"+ profileid);
                              //this.logdebug('Reading ofm profile ' + profileid.toString());

                              modules.push({
                                profileid: profileid,
                                ofm_item: ofm_item
                              });
                              _context209.next = 19;
                              return this.getofmprofileid_value(profileid);

                            case 19:
                              profile_data = _context209.sent;
                              //this.logdebug(profile_data);
                              obj_temp = JSON.parse(profile_data);

                              if (lodash__WEBPACK_IMPORTED_MODULE_2__.isObject(obj_temp)) {
                                modules_val.push({
                                  ofm_item: _vcistd__WEBPACK_IMPORTED_MODULE_0__.Enum_ofm_Items[ofm_item],
                                  pid: obj_temp.itemid,
                                  Value: obj_temp.value,
                                  Unit: obj_temp.unit
                                });
                              }

                            case 22:
                              pididx++;
                              _context209.next = 13;
                              break;

                            case 25:
                              this.logdebug({
                                num_profie: nPid,
                                list: modules
                              }); //return resolve({ num_profie:nPid ,list: modules});

                              return _context209.abrupt("return", resolve(modules_val));

                            case 29:
                              return _context209.abrupt("return", resolve(null));

                            case 30:
                              _context209.next = 36;
                              break;

                            case 32:
                              _context209.prev = 32;
                              _context209.t0 = _context209["catch"](0);
                              this.logdebug(_context209.t0);
                              return _context209.abrupt("return", resolve({}));

                            case 36:
                            case "end":
                              return _context209.stop();
                          }
                        }, _callee209, this, [[0, 32]]);
                      }));
                    }));

                  case 1:
                  case "end":
                    return _context210.stop();
                }
              }, _callee210);
            }));
          }
        }, {
          key: "getservicecheck_val",
          value: function getservicecheck_val() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee212() {
              var _this79 = this;

              return _regeneratorRuntime().wrap(function _callee212$(_context212) {
                while (1) switch (_context212.prev = _context212.next) {
                  case 0:
                    return _context212.abrupt("return", new Promise(function (resolve) {
                      return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(_this79, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee211() {
                        var data, resultdisplay, obj, nPid, modules, modules_val, pididx, profileid, ofm_item, profile_data, obj_temp;
                        return _regeneratorRuntime().wrap(function _callee211$(_context211) {
                          while (1) switch (_context211.prev = _context211.next) {
                            case 0:
                              _context211.prev = 0;
                              this.logdebug('Reading Service Check Items...');
                              _context211.next = 4;
                              return this.getofmsupportitem(_vcistd__WEBPACK_IMPORTED_MODULE_0__.VCI_ofm_group.ofm_group_srv_check);

                            case 4:
                              data = _context211.sent;
                              this.logdebug('Reading Service Check Items status successfully...');
                              resultdisplay = _utilities_dataParser__WEBPACK_IMPORTED_MODULE_3__.ObjtoStringBeauty(data);
                              obj = JSON.parse(resultdisplay);

                              if (!lodash__WEBPACK_IMPORTED_MODULE_2__.isObject(obj)) {
                                _context211.next = 29;
                                break;
                              }

                              //this.logdebug(resultdisplay);
                              nPid = obj.num_profile; //this.logdebug("number pid:" + nPid);

                              modules = [];
                              modules_val = [];
                              pididx = 0;

                            case 13:
                              if (!(pididx < nPid)) {
                                _context211.next = 25;
                                break;
                              }

                              profileid = obj.list[pididx].profileid;
                              ofm_item = obj.list[pididx].ofm_item; //this.logdebug("ofm_item"+ ofm_item);
                              //this.logdebug("profileid"+ profileid);
                              //this.logdebug('Reading ofm profile ' + profileid.toString());

                              modules.push({
                                profileid: profileid,
                                ofm_item: ofm_item
                              });
                              _context211.next = 19;
                              return this.getofmprofileid_value(profileid);

                            case 19:
                              profile_data = _context211.sent;
                              //this.logdebug(profile_data);
                              obj_temp = JSON.parse(profile_data);

                              if (lodash__WEBPACK_IMPORTED_MODULE_2__.isObject(obj_temp)) {
                                modules_val.push({
                                  ofm_item: _vcistd__WEBPACK_IMPORTED_MODULE_0__.Enum_ofm_Items[ofm_item],
                                  pid: obj_temp.itemid,
                                  Value: obj_temp.value,
                                  Unit: obj_temp.unit
                                });
                              }

                            case 22:
                              pididx++;
                              _context211.next = 13;
                              break;

                            case 25:
                              this.logdebug({
                                num_profie: nPid,
                                list: modules
                              }); //return resolve({ num_profie:nPid ,list: modules});

                              return _context211.abrupt("return", resolve(modules_val));

                            case 29:
                              return _context211.abrupt("return", resolve(null));

                            case 30:
                              _context211.next = 36;
                              break;

                            case 32:
                              _context211.prev = 32;
                              _context211.t0 = _context211["catch"](0);
                              this.logdebug(_context211.t0);
                              return _context211.abrupt("return", resolve({}));

                            case 36:
                            case "end":
                              return _context211.stop();
                          }
                        }, _callee211, this, [[0, 32]]);
                      }));
                    }));

                  case 1:
                  case "end":
                    return _context212.stop();
                }
              }, _callee212);
            }));
          }
        }, {
          key: "getofmsupportitem",
          value: function getofmsupportitem(ofm_group) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee214() {
              var _this80 = this;

              return _regeneratorRuntime().wrap(function _callee214$(_context214) {
                while (1) switch (_context214.prev = _context214.next) {
                  case 0:
                    return _context214.abrupt("return", new Promise(function (resolve) {
                      return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(_this80, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee213() {
                        var usbData, mod, data, _index, nPid, pididx, profileid, ofm_item;

                        return _regeneratorRuntime().wrap(function _callee213$(_context213) {
                          while (1) switch (_context213.prev = _context213.next) {
                            case 0:
                              _context213.prev = 0;
                              usbData = _toConsumableArray(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_3__.numberToBytes(ofm_group, 1));
                              mod = [];
                              this.logdebug('Checking ofm item support ' + ofm_group);
                              _context213.next = 6;
                              return this.LinkVciCmd({
                                Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.ofm,
                                stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_ofm.getsupport_item,
                                usbData: usbData,
                                nretry: 1,
                                timeout: 30000
                              });

                            case 6:
                              data = _context213.sent;

                              if (!(data != undefined)) {
                                _context213.next = 15;
                                break;
                              }

                              _index = 0;
                              nPid = data[_index++];
                              this.logdebug("number PID:" + nPid);

                              for (pididx = 0; pididx < nPid; pididx++) {
                                profileid = _utilities_dataParser__WEBPACK_IMPORTED_MODULE_3__.bytesToInt([data[_index++], data[_index++]], 2, 0);
                                ofm_item = _utilities_dataParser__WEBPACK_IMPORTED_MODULE_3__.bytesToInt([data[_index++], data[_index++]], 2, 0); //this.logdebug("ofm_item"+ ofm_item);
                                //this.logdebug("profileid"+ profileid);

                                mod.push({
                                  ofm_item: ofm_item,
                                  profileid: profileid
                                });
                              } //this.logdebug(mod);


                              return _context213.abrupt("return", resolve({
                                num_profile: nPid,
                                list: mod
                              }));

                            case 15:
                              return _context213.abrupt("return", resolve({
                                num_profile: 0,
                                list: []
                              }));

                            case 16:
                              _context213.next = 22;
                              break;

                            case 18:
                              _context213.prev = 18;
                              _context213.t0 = _context213["catch"](0);
                              this.logdebug(_context213.t0);
                              return _context213.abrupt("return", resolve(null));

                            case 22:
                            case "end":
                              return _context213.stop();
                          }
                        }, _callee213, this, [[0, 18]]);
                      }));
                    }));

                  case 1:
                  case "end":
                    return _context214.stop();
                }
              }, _callee214);
            }));
          }
        }, {
          key: "getofmprofileid_value",
          value: function getofmprofileid_value(profileid) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee216() {
              var _this81 = this;

              return _regeneratorRuntime().wrap(function _callee216$(_context216) {
                while (1) switch (_context216.prev = _context216.next) {
                  case 0:
                    return _context216.abrupt("return", new Promise(function (resolve) {
                      return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(_this81, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee215() {
                        var usbData, modules, j, data;
                        return _regeneratorRuntime().wrap(function _callee215$(_context215) {
                          while (1) switch (_context215.prev = _context215.next) {
                            case 0:
                              _context215.prev = 0;
                              usbData = _toConsumableArray(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_3__.numberToBytes(profileid, 2));
                              modules = [];
                              j = {};
                              this.logdebug('Reading ofm profile ' + profileid.toString());
                              _context215.next = 7;
                              return this.LinkVciCmd({
                                Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.ofm,
                                stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_ofm.read_item,
                                usbData: usbData,
                                nretry: 3,
                                timeout: 10000
                              });

                            case 7:
                              data = _context215.sent;

                              if ((0, util__WEBPACK_IMPORTED_MODULE_4__.isNullOrUndefined)(data)) {
                                j = {
                                  pid: profileid,
                                  value: "N/S",
                                  unit: "null"
                                };
                              } else {
                                j = JSON.parse(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_3__.bytesToString(data));
                              } //this.logdebug("read" + j);


                              return _context215.abrupt("return", resolve(j));

                            case 12:
                              _context215.prev = 12;
                              _context215.t0 = _context215["catch"](0);
                              this.logdebug(_context215.t0);
                              return _context215.abrupt("return", resolve({}));

                            case 16:
                            case "end":
                              return _context215.stop();
                          }
                        }, _callee215, this, [[0, 12]]);
                      }));
                    }));

                  case 1:
                  case "end":
                    return _context216.stop();
                }
              }, _callee216);
            }));
          }
        }]);
      }(_obd__WEBPACK_IMPORTED_MODULE_1__.OBDx);

      _OFM.ɵfac = /*@__PURE__*/function () {
        var ɵOFM_BaseFactory;
        return function OFM_Factory(t) {
          return (ɵOFM_BaseFactory || (ɵOFM_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetInheritedFactory"](_OFM)))(t || _OFM);
        };
      }();

      _OFM.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
        token: _OFM,
        factory: _OFM.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    93235:
    /*!****************************************************************!*\
      !*** ./src/app/services/innova-vci-service/src/obd/symptom.ts ***!
      \****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Symptom": function Symptom() {
          return (
            /* binding */
            _Symptom
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      42321);
      /* harmony import */


      var _vcistd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./vcistd */
      48860);
      /* harmony import */


      var _obd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./obd */
      29326);
      /* harmony import */


      var _utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../utilities/dataParser */
      81402);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _Symptom = /*#__PURE__*/function (_obd__WEBPACK_IMPORTE8) {
        function _Symptom() {
          _classCallCheck(this, _Symptom);

          return _callSuper(this, _Symptom, arguments);
        }

        _inherits(_Symptom, _obd__WEBPACK_IMPORTE8);

        return _createClass(_Symptom, [{
          key: "initprocess",
          value: function initprocess() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee217() {
              return _regeneratorRuntime().wrap(function _callee217$(_context217) {
                while (1) switch (_context217.prev = _context217.next) {
                  case 0:
                    _context217.prev = 0;
                    _context217.next = 3;
                    return this.LinkVciCmd({
                      Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.symptom,
                      stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_symptom.symptom_init
                    });

                  case 3:
                    _context217.next = 8;
                    break;

                  case 5:
                    _context217.prev = 5;
                    _context217.t0 = _context217["catch"](0);
                    this.logdebug(_context217.t0);

                  case 8:
                  case "end":
                    return _context217.stop();
                }
              }, _callee217, this, [[0, 5]]);
            }));
          }
        }, {
          key: "getScreen_UI",
          value: function getScreen_UI() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee218() {
              var usbData, _title, _title_str, _body, _body_str, _optlist, _optlist_str, _softkey, _softkey_str;

              return _regeneratorRuntime().wrap(function _callee218$(_context218) {
                while (1) switch (_context218.prev = _context218.next) {
                  case 0:
                    _context218.prev = 0;
                    //this.logdebug("Getting ui");

                    /*Get Screen Title here*/
                    usbData = _toConsumableArray(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.numberToBytes(_vcistd__WEBPACK_IMPORTED_MODULE_0__.VCI_symptom_getui.symptom_get_title, 1));
                    _context218.next = 4;
                    return this.LinkVciCmd({
                      Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.symptom,
                      stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_symptom.symptom_getui,
                      usbData: usbData,
                      nretry: 1,
                      timeout: 4000
                    });

                  case 4:
                    _title = _context218.sent;
                    _title_str = _utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.bytesToString(_title); //this.logdebug(_title_str);

                    /*Get Body screen here*/

                    usbData = _toConsumableArray(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.numberToBytes(_vcistd__WEBPACK_IMPORTED_MODULE_0__.VCI_symptom_getui.symptom_get_body, 1));
                    _context218.next = 9;
                    return this.LinkVciCmd({
                      Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.symptom,
                      stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_symptom.symptom_getui,
                      usbData: usbData,
                      nretry: 1,
                      timeout: 4000
                    });

                  case 9:
                    _body = _context218.sent;
                    _body_str = _utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.bytesToString(_body).split('\n').join('\\n');
                    _body_str = _body_str.split('\r').join('\\r'); //this.logdebug(_body_str);

                    /*Get Optionlist here*/

                    usbData = _toConsumableArray(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.numberToBytes(_vcistd__WEBPACK_IMPORTED_MODULE_0__.VCI_symptom_getui.symptom_get_optionlist, 1));
                    _context218.next = 15;
                    return this.LinkVciCmd({
                      Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.symptom,
                      stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_symptom.symptom_getui,
                      usbData: usbData,
                      nretry: 1,
                      timeout: 4000
                    });

                  case 15:
                    _optlist = _context218.sent;
                    _optlist_str = _utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.bytesToString(_optlist); //this.logdebug(_optlist_str);

                    /*Get Optionlist here*/

                    usbData = _toConsumableArray(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.numberToBytes(_vcistd__WEBPACK_IMPORTED_MODULE_0__.VCI_symptom_getui.symptom_get_softkey, 1));
                    _context218.next = 20;
                    return this.LinkVciCmd({
                      Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.symptom,
                      stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_symptom.symptom_getui,
                      usbData: usbData,
                      nretry: 1,
                      timeout: 4000
                    });

                  case 20:
                    _softkey = _context218.sent;
                    _softkey_str = _utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.bytesToString(_softkey); //this.logdebug(_softkey_str);

                    return _context218.abrupt("return", {
                      title: JSON.parse(_title_str).Title,
                      body: JSON.parse(_body_str).Body,
                      option: _optlist_str,
                      softkey: _softkey_str
                    });

                  case 25:
                    _context218.prev = 25;
                    _context218.t0 = _context218["catch"](0);
                    this.logdebug(_context218.t0);
                    return _context218.abrupt("return", {});

                  case 29:
                  case "end":
                    return _context218.stop();
                }
              }, _callee218, this, [[0, 25]]);
            }));
          }
        }, {
          key: "set_useroptionselection",
          value: function set_useroptionselection(index) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee219() {
              var usbData, data;
              return _regeneratorRuntime().wrap(function _callee219$(_context219) {
                while (1) switch (_context219.prev = _context219.next) {
                  case 0:
                    _context219.prev = 0;
                    usbData = [].concat(_toConsumableArray(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.numberToBytes(_vcistd__WEBPACK_IMPORTED_MODULE_0__.VCI_symptom_selection_type.symptom_normal_selection, 1)), _toConsumableArray(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.numberToBytes(index, 1)));
                    _context219.next = 4;
                    return this.LinkVciCmd({
                      Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.symptom,
                      stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_symptom.symptom_setselection,
                      usbData: usbData,
                      nretry: 1,
                      timeout: 2000
                    });

                  case 4:
                    data = _context219.sent;
                    return _context219.abrupt("return", true);

                  case 8:
                    _context219.prev = 8;
                    _context219.t0 = _context219["catch"](0);
                    this.logdebug(_context219.t0);
                    return _context219.abrupt("return", false);

                  case 12:
                  case "end":
                    return _context219.stop();
                }
              }, _callee219, this, [[0, 8]]);
            }));
          }
        }, {
          key: "set_softkeyselection",
          value: function set_softkeyselection(index) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee220() {
              var usbData, data;
              return _regeneratorRuntime().wrap(function _callee220$(_context220) {
                while (1) switch (_context220.prev = _context220.next) {
                  case 0:
                    _context220.prev = 0;
                    usbData = [].concat(_toConsumableArray(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.numberToBytes(_vcistd__WEBPACK_IMPORTED_MODULE_0__.VCI_symptom_selection_type.symtom_softkey_selection, 1)), _toConsumableArray(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.numberToBytes(index, 1)));
                    _context220.next = 4;
                    return this.LinkVciCmd({
                      Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.symptom,
                      stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_symptom.symptom_setselection,
                      usbData: usbData,
                      nretry: 1,
                      timeout: 2000
                    });

                  case 4:
                    data = _context220.sent;
                    return _context220.abrupt("return", true);

                  case 8:
                    _context220.prev = 8;
                    _context220.t0 = _context220["catch"](0);
                    this.logdebug(_context220.t0);

                  case 11:
                  case "end":
                    return _context220.stop();
                }
              }, _callee220, this, [[0, 8]]);
            }));
          }
        }]);
      }(_obd__WEBPACK_IMPORTED_MODULE_1__.OBDx);

      _Symptom.ɵfac = /*@__PURE__*/function () {
        var ɵSymptom_BaseFactory;
        return function Symptom_Factory(t) {
          return (ɵSymptom_BaseFactory || (ɵSymptom_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetInheritedFactory"](_Symptom)))(t || _Symptom);
        };
      }();

      _Symptom.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
        token: _Symptom,
        factory: _Symptom.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    48860:
    /*!***************************************************************!*\
      !*** ./src/app/services/innova-vci-service/src/obd/vcistd.ts ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EnumVCIProcStates": function EnumVCIProcStates() {
          return (
            /* binding */
            _EnumVCIProcStates
          );
        },

        /* harmony export */
        "EnumSeverityText": function EnumSeverityText() {
          return (
            /* binding */
            _EnumSeverityText
          );
        },

        /* harmony export */
        "VCIProg": function VCIProg() {
          return (
            /* binding */
            _VCIProg
          );
        },

        /* harmony export */
        "VCICmd_Unsolicited_msg": function VCICmd_Unsolicited_msg() {
          return (
            /* binding */
            _VCICmd_Unsolicited_msg
          );
        },

        /* harmony export */
        "VCICmd_BT_setting": function VCICmd_BT_setting() {
          return (
            /* binding */
            _VCICmd_BT_setting
          );
        },

        /* harmony export */
        "VCICmd_obd2": function VCICmd_obd2() {
          return (
            /* binding */
            _VCICmd_obd
          );
        },

        /* harmony export */
        "enumEVAPStatus": function enumEVAPStatus() {
          return (
            /* binding */
            _enumEVAPStatus
          );
        },

        /* harmony export */
        "VCICmd_obd2_reporttype": function VCICmd_obd2_reporttype() {
          return (
            /* binding */
            _VCICmd_obd2_reporttype
          );
        },

        /* harmony export */
        "VCICmd_nwscan": function VCICmd_nwscan() {
          return (
            /* binding */
            _VCICmd_nwscan
          );
        },

        /* harmony export */
        "VCICmd_system": function VCICmd_system() {
          return (
            /* binding */
            _VCICmd_system
          );
        },

        /* harmony export */
        "VCICmd_YMME": function VCICmd_YMME() {
          return (
            /* binding */
            _VCICmd_YMME
          );
        },

        /* harmony export */
        "VCICmd_ofm": function VCICmd_ofm() {
          return (
            /* binding */
            _VCICmd_ofm
          );
        },

        /* harmony export */
        "VCI_ofm_group": function VCI_ofm_group() {
          return (
            /* binding */
            _VCI_ofm_group
          );
        },

        /* harmony export */
        "VCICmd_livedata": function VCICmd_livedata() {
          return (
            /* binding */
            _VCICmd_livedata
          );
        },

        /* harmony export */
        "VCICmd_symptom": function VCICmd_symptom() {
          return (
            /* binding */
            _VCICmd_symptom
          );
        },

        /* harmony export */
        "VCI_symptom_getui": function VCI_symptom_getui() {
          return (
            /* binding */
            _VCI_symptom_getui
          );
        },

        /* harmony export */
        "VCI_symptom_selection_type": function VCI_symptom_selection_type() {
          return (
            /* binding */
            _VCI_symptom_selection_type
          );
        },

        /* harmony export */
        "VCI_symptom_softkey_type": function VCI_symptom_softkey_type() {
          return (
            /* binding */
            _VCI_symptom_softkey_type
          );
        },

        /* harmony export */
        "Enum_Nws_Link_Status": function Enum_Nws_Link_Status() {
          return (
            /* binding */
            _Enum_Nws_Link_Status
          );
        },

        /* harmony export */
        "EnumInnovaGroups": function EnumInnovaGroups() {
          return (
            /* binding */
            _EnumInnovaGroups
          );
        },

        /* harmony export */
        "EnumInspectionGroups": function EnumInspectionGroups() {
          return (
            /* binding */
            _EnumInspectionGroups
          );
        },

        /* harmony export */
        "Enum_ofm_Items": function Enum_ofm_Items() {
          return (
            /* binding */
            _Enum_ofm_Items
          );
        },

        /* harmony export */
        "VCICmd_tool": function VCICmd_tool() {
          return (
            /* binding */
            _VCICmd_tool
          );
        },

        /* harmony export */
        "UNIT_ID": function UNIT_ID() {
          return (
            /* binding */
            _UNIT_ID
          );
        },

        /* harmony export */
        "GUI_LANGUAGE_ID": function GUI_LANGUAGE_ID() {
          return (
            /* binding */
            _GUI_LANGUAGE_ID
          );
        },

        /* harmony export */
        "SF_FunctionGroup": function SF_FunctionGroup() {
          return (
            /* binding */
            _SF_FunctionGroup
          );
        },

        /* harmony export */
        "VCICmd_GUI": function VCICmd_GUI() {
          return (
            /* binding */
            _VCICmd_GUI
          );
        },

        /* harmony export */
        "VCI_Data_Logging": function VCI_Data_Logging() {
          return (
            /* binding */
            _VCI_Data_Logging
          );
        },

        /* harmony export */
        "VCI_GUI_Param_Type": function VCI_GUI_Param_Type() {
          return (
            /* binding */
            _VCI_GUI_Param_Type
          );
        },

        /* harmony export */
        "SYS_PROC_ID": function SYS_PROC_ID() {
          return (
            /* binding */
            _SYS_PROC_ID
          );
        },

        /* harmony export */
        "SYS_CMD_ID": function SYS_CMD_ID() {
          return (
            /* binding */
            _SYS_CMD_ID
          );
        },

        /* harmony export */
        "GUI_KEY_CODE": function GUI_KEY_CODE() {
          return (
            /* binding */
            _GUI_KEY_CODE
          );
        },

        /* harmony export */
        "enumSmogCheckLoc": function enumSmogCheckLoc() {
          return (
            /* binding */
            _enumSmogCheckLoc
          );
        },

        /* harmony export */
        "enumSmogCheckLocCountry": function enumSmogCheckLocCountry() {
          return (
            /* binding */
            _enumSmogCheckLocCountry
          );
        },

        /* harmony export */
        "enumFuelType": function enumFuelType() {
          return (
            /* binding */
            _enumFuelType
          );
        },

        /* harmony export */
        "ICOMMANDS": function ICOMMANDS() {
          return (
            /* binding */
            _ICOMMANDS
          );
        },

        /* harmony export */
        "USBHIDCommand_64": function USBHIDCommand_64() {
          return (
            /* binding */
            _USBHIDCommand_
          );
        },

        /* harmony export */
        "FreezeFrameDataTypes": function FreezeFrameDataTypes() {
          return (
            /* binding */
            _FreezeFrameDataTypes
          );
        },

        /* harmony export */
        "Metrics": function Metrics() {
          return (
            /* binding */
            _Metrics
          );
        },

        /* harmony export */
        "TransferStatus": function TransferStatus() {
          return (
            /* binding */
            _TransferStatus
          );
        },

        /* harmony export */
        "Languages": function Languages() {
          return (
            /* binding */
            _Languages
          );
        },

        /* harmony export */
        "VehicleDataTypes": function VehicleDataTypes() {
          return (
            /* binding */
            _VehicleDataTypes
          );
        },

        /* harmony export */
        "BufferSegmentTypes": function BufferSegmentTypes() {
          return (
            /* binding */
            _BufferSegmentTypes
          );
        }
        /* harmony export */

      });
      /**
       * @Author: quocdo-macbook
       * @Date:   2020-12-21T08:20:18+07:00
       * @Last modified by:   quocdo-macbook
       * @Last modified time: 2022-03-01T11:39:56+07:00
       */


      var _EnumVCIProcStates = {
        0x11: 'Proc Error',
        0xaa: 'Proc Normal',
        0x22: 'Proc Busy',
        0xbb: 'Proc Not supported',
        0xff: 'Proc General Fail'
      };
      var _EnumSeverityText = {
        0x00: "Not Severity",
        0x01: "Low",
        0x02: "Medium",
        0x03: "High"
      };
      var _VCIProg = {
        systemdata: 1
        /*related with system data*/
        ,
        tool: 2
        /*related tool */
        ,
        obd2: 3
        /*start obd2 link*/
        ,
        oem: 4
        /*return system , subsystem , group*/
        ,
        read_report: 5,
        ofm: 6,
        enable_jsonfmt: 7
        /*ThuyetHN:added for json format*/
        ,
        disable_jsonfmt: 8
        /*ThuyetHN:added for json format*/
        ,
        enable_jsonfmt_def: 9
        /*ThuyetHN:added for json format def*/
        ,
        disable_jsonfmt_def: 10
        /*ThuyetHN:added for json format def*/
        ,
        livedata: 11,
        symptom: 100,
        gui: 200,
        ymme: 300,
        unsolicited_msg: 65000,
        keepalive_obd2: 65533,
        keepalive_oem: 65534,
        max: 65535
      };
      var _VCICmd_Unsolicited_msg = {
        msg_cancel: 1,
        msg_gui_ack: 2,
        msg_max: 255
      };
      var _VCICmd_BT_setting = {
        get_bt_name: 0x20,
        set_bt_name: 0x21
      };
      var _VCICmd_obd = {
        start_Query: 0,
        Link_To_Prot_N: 1,
        monitoricon: 2,
        ReadVin: 3,
        Read_Dtc: 4,
        freezeframe: 5,
        Erase_Dtc: 6,
        Read_all: 7,
        pid: 8
        /*
        arg 1 : 0 , get supported
        arg 1 : 1 , get pid data , arg 2 : pid id
        return size + pid val if successful
        */
        ,
        ReadService9: 9,
        ReadService5: 15,
        ReadService6: 16,
        ReadService8: 18,
        GetLedStatus: 0x20,
        SetSmogCheckState: 0x21,
        GetSmogCheckState: 0x22,
        SetSmogCheckCountry: 0x23,
        GetSmogCheckCountry: 0x24,
        SetFuelType: 0x25,
        GetFuelType: 0x26,
        SetVehType: 0x27,
        GetVehType: 0x28,
        getymmeprofile: 0xfd,
        GetReport: 0xfe,
        Max: 255
      };
      var _enumEVAPStatus = {
        eEVAPSTATE_NONE: 0,
        eEVAPSTATE_NO_SUP: 1,
        eEVAPSTATE_SUP_OK: 2,
        eEVAPSTATE_RES_NEG: 3,
        eEVAPSTATE_RES_NO: 4,
        eEVAPSTATE_MAX: 0xFF
      };
      var _VCICmd_obd2_reporttype = {
        report_full: 0,
        report_sid1: 1,
        report_sid2: 2,
        report_sid3: 3,
        report_sid4: 4,
        report_sid5: 5,
        report_sid6: 6,
        report_sid7: 7,
        report_sid8: 8,
        report_sid9: 9,
        report_sid10: 10,
        report_sid37A: 11,
        report_mil_stat: 16,
        report_drivecycle_mon_list: 0x11,
        report_drivecycle_mon_text: 0x12,
        report_sid6_tids: 0x13,
        report_sid6_comp_ids: 0x14,
        report_vehicle_data_ymme_profile: 0x21,
        report_mon_stat: 0x31,
        report_ff_info: 0x32,
        report_ff_ld: 0x33,
        report_dtcs: 0x34,
        report_dtc_def: 0x35,
        report_vin: 0x36,
        report_ymme: 0x37,
        report_vehicle_info: 0x39,
        report_TDC_monitor: 0x41,
        report_RPM_VSS: 0xCD,
        Max: 255
      };
      var _VCICmd_nwscan = {
        start: 0,
        getsystem: 1,
        getsubsystem: 2,
        listoemprofileid_old: 3
        /*[number system 1byte]{<System id><number subsystem><SubSystem>}*/
        ,
        querysystem: 4,
        readdtsystem: 5,
        erasedtcsystem: 6,
        exitsystem: 7,
        getdataofsyste: 8,
        readdtcgroup: 9,
        scan_all: 10,
        quick_readsystem: 105,
        quick_readgroup: 106,
        listoemprofileid: 203,
        report_dtc_system: 205,
        get_dtc_def: 206,
        get_dtc_listinspec: 207,
        max: 0xff
      };
      var _VCICmd_system = {
        getversion: 1,
        getymme: 2,
        setymme: 3,
        setvin: 4,
        resettool: 0xfe
      };
      var _VCICmd_YMME = {
        init: 1,
        get: 2,
        confirm: 3
      };
      var _VCICmd_ofm = {
        getsupport_item: 0,
        read_item: 1,
        stream_cfg: 2,
        max: 0xff
      };
      var _VCI_ofm_group = {
        ofm_group_none: 0,
        ofm_group_odo: 1,
        ofm_group_srv_check: 2,
        ofm_group_warninglight: 3,
        ofm_group_tpms: 4,
        ofm_group_max: 255
      };
      var _VCICmd_livedata = {
        read_itemlist: 0,
        read_itemval: 1,
        read_list_item_val: 2,
        set_system_subsystem: 3,
        start_hybrid_ld: 4,
        read_item_info: 5,
        set_record_dtc_trigger: 8,
        reset_record_dtc_trigger: 9,
        check_getnumpid_group: 0x14,
        get_listiteminfo: 0x15,
        get_listitemval: 0x16,
        get_itemval_v2: 0x17,
        max: 0xff
      };
      var _VCICmd_symptom = {
        symptom_init: 0,
        symptom_getui: 1,
        symptom_setselection: 2,
        symptom_max: 255
      };
      var _VCI_symptom_getui = {
        symptom_get_title: 0,
        symptom_get_body: 1,
        symptom_get_optionlist: 2,
        symptom_get_softkey: 3,
        symptom_getui_max: 255
      };
      var _VCI_symptom_selection_type = {
        symptom_normal_selection: 0,
        symtom_softkey_selection: 1
      };
      var _VCI_symptom_softkey_type = {
        symptom_left_softkey: 0,
        symptom_right_softkey: 1
      };
      var _Enum_Nws_Link_Status = {
        1: 'Not Support',
        2: 'Success',
        3: 'Fail',
        4: 'Special Ford test',
        5: 'Special Honda test',
        6: 'Fail Input Data',
        7: 'Fail User Event',
        8: 'Need Retry OEM Cable',
        9: 'Need Recycle Ignition Key'
      };
      var _EnumInnovaGroups = {
        1: 'OBDII',
        2: 'ABS',
        4: 'SRS',
        8: 'TCM',
        16: 'PCM',
        32: 'ODBI',
        64: 'TPMS',
        128: 'ADAS',
        255: 'All'
      };
      var _EnumInspectionGroups = {
        1: 'Headlight',
        2: 'Taillight',
        3: 'Turn Indicator Light',
        4: 'Stop Light',
        5: 'Foot Brake',
        6: 'Emergency/Parking Brake',
        7: 'Windshield Wiper',
        8: 'Steering',
        9: 'Window',
        10: 'Seat Adjustment',
        11: 'Door',
        12: 'Horn',
        13: 'Odometer',
        14: 'Bumper And Body Condition',
        15: 'Muffler And Exhaust System',
        16: 'Tire',
        17: 'Mirror',
        18: 'Safety Belts',
        254: 'Ispection Group',
        255: 'Unknown'
      };
      var _Enum_ofm_Items = {
        0: 'Unknow',
        1: 'Fuel Sys 1',
        2: 'Fuel Sys 2',
        3: 'Calc Load',
        4: 'ECT',
        5: 'STFT B1',
        6: 'STFT B3',
        7: 'LTFT B1',
        8: 'LTFT B3',
        9: 'STFT B2',
        10: 'STFT B4',
        11: 'LTFT B2',
        12: 'LTFT B4',
        13: 'Fuel Pres',
        14: 'MAP',
        15: 'Eng RPM',
        16: 'Veh Speed',
        17: 'Spark Adv',
        18: 'IAT',
        19: 'MAF',
        20: 'TPS',
        21: 'Air Status',
        22: 'O2SLoc',
        23: 'O2S B1 S1',
        24: 'STFT B1 S1',
        25: 'O2S B1 S2',
        26: 'STFT B1 S2',
        27: 'O2S B1 S3',
        28: 'O2S B2 S1',
        29: 'STFT B1 S3',
        30: 'STFT B2 S1',
        31: 'O2S B1 S4',
        32: 'O2S B2 S2',
        33: 'STFT B1 S4',
        34: 'STFT B2 S2',
        35: 'O2S B3 S1',
        36: 'STFT B3 S1',
        37: 'O2S B3 S2',
        38: 'STFT B3 S2',
        39: 'O2S B2 S3',
        40: 'O2S B4 S1',
        41: 'STFT B2 S3',
        42: 'STFT B4 S1',
        43: 'O2S B2 S4',
        44: 'O2S B4 S2',
        45: 'STFT B2 S4',
        46: 'STFT B4 S2',
        47: 'OBDSup',
        48: 'Aux Input Status',
        49: 'Run Time',
        50: 'MIL Dis',
        51: 'LAMBDA B1 S1',
        52: 'LAMBDA B1 S2',
        53: 'LAMBDA B1 S3',
        54: 'LAMBDA B2 S1',
        55: 'LAMBDA B1 S4',
        56: 'LAMBDA B2 S2',
        57: 'LAMBDA B3 S1',
        58: 'LAMBDA B3 S2',
        59: 'LAMBDA B2 S3',
        60: 'LAMBDA B4 S1',
        61: 'LAMBDA B2 S4',
        62: 'LAMBDA B4 S2',
        63: 'Command EGR',
        64: 'EGR Error',
        65: 'Command EVAP',
        66: 'Fuel Level',
        67: 'Warm-up DTC Clr',
        68: 'Clr Dist',
        69: 'EVAP_VP',
        70: 'BARO',
        71: 'CAT Te 11',
        72: 'CAT Te 21',
        73: 'CAT Te 12',
        74: 'CAT Te 22',
        75: 'ECU Volts',
        76: 'LOAD Value',
        77: 'EQ Ratio',
        78: 'Rel TPS',
        79: 'Ambient',
        80: 'TPS B',
        81: 'TPS C',
        82: 'ACC Pedal D',
        83: 'ACC Pedal E',
        84: 'ACC Pedal F',
        85: 'Command TAC',
        86: 'MIL Time',
        87: 'Clr Time',
        88: 'FUEL_TYP',
        89: 'ALCH_PCT',
        90: 'EVAP_VPA',
        91: 'STSO2FT1',
        92: 'STSO2FT3',
        93: 'LGSO2FT1',
        94: 'LGSO2FT3',
        95: 'STSO2FT2',
        96: 'STSO2FT4',
        97: 'LGSO2FT2',
        98: 'LGSO2FT4',
        99: 'APP_R',
        100: 'BAT_PWR',
        101: 'EOT',
        102: 'FUEL_TIMING',
        103: 'FUEL_RATE',
        104: 'EMIS_SUP',
        105: 'TQ_DD',
        106: 'TQ_ACT',
        107: 'TQ_REF',
        108: 'TQ_MAX1',
        109: 'TQ_MAX2',
        110: 'TQ_MAX3',
        111: 'TQ_MAX4',
        112: 'TQ_MAX5',
        113: 'N/D_STAT',
        114: 'N/G_STAT',
        115: 'GPL_STAT',
        116: 'MAFA',
        117: 'MAFB',
        118: 'ECT 1',
        119: 'ECT 2',
        120: 'IAT 11',
        121: 'IAT 12',
        122: 'IAT 13',
        123: 'IAT 21',
        124: 'IAT 22',
        125: 'IAT 23',
        126: 'EGR_A_CMD',
        127: 'EGR_A_ACT',
        128: 'EGR_A_ERR',
        129: 'EGR_B_CMD',
        130: 'EGR_B_ACT',
        131: 'EGR_B_ERR',
        132: 'IAF_A_CMD',
        133: 'IAF_A_REL',
        134: 'IAF_B_CMD',
        135: 'IAF_B_REL',
        136: 'EGRTA',
        137: 'EGRTB',
        138: 'EGRTD',
        139: 'TAC_A_CMD',
        140: 'TP_A_REL',
        141: 'TAC_B_CMD',
        142: 'TP_B_REL',
        143: 'FRP_A_CMD',
        144: 'FRP_A',
        145: 'FRT_A',
        146: 'FRP_B_CMD',
        147: 'FRP_B',
        148: 'FRT_B',
        149: 'ICP_A_CMD',
        150: 'ICP_A',
        151: 'ICP_B_CMD',
        152: 'ICP_B',
        153: 'TCA_CINP',
        154: 'TCB_CINP',
        155: 'BP_A_CMD',
        156: 'BP_A_ACT',
        157: 'BP_B_CMD',
        158: 'BP_B_ACT',
        159: 'BP_A',
        160: 'BP_B',
        161: 'VGT_A_CMD',
        162: 'VGT_A_ACT',
        163: 'VGT_B_CMD',
        164: 'VGT_B_ACT',
        165: 'VGT_A',
        166: 'VGT_B',
        167: 'WG_A_CMD',
        168: 'WG_A_ACT',
        169: 'WG_ B_CMD',
        170: 'WG_B_ACT',
        171: 'EP_1',
        172: 'EP_2',
        173: 'TCA_RPM',
        174: 'TCB_RPM',
        175: 'TCA_CINT',
        176: 'TCA_COUTT',
        177: 'TCA_TINT',
        178: 'TCA_TOUTT',
        179: 'TCB_CINT',
        180: 'TCB_COUTT',
        181: 'TCB_TINT',
        182: 'TCB_TOUTT',
        183: 'CACT 11',
        184: 'CACT 12',
        185: 'CACT 21',
        186: 'CACT 22',
        187: 'EGT11',
        188: 'EGT12',
        189: 'EGT13',
        190: 'EGT14',
        191: 'EGT21',
        192: 'EGT22',
        193: 'EGT23',
        194: 'EGT24',
        195: 'DPF1_DP',
        196: 'DPF1_INP',
        197: 'DPF1_OUTP',
        198: 'DPF2_DP',
        199: 'DPF2_INP',
        200: 'DPF2_OUTP',
        201: 'DPF1_INT',
        202: 'DPF1_OUTT',
        203: 'DPF2_INT',
        204: 'DPF2_OUTT',
        205: 'NNTE',
        206: 'PNTE',
        207: 'RUN_TIME',
        208: 'IDLE_TIME',
        209: 'PTO_TIME',
        210: 'AECD1_TIME1',
        211: 'AECD1_TIME2',
        212: 'AECD2_TIME1',
        213: 'AECD2_TIME2',
        214: 'AECD3_TIME1',
        215: 'AECD3_TIME2',
        216: 'AECD4_TIME1',
        217: 'AECD4_TIME2',
        218: 'AECD5_TIME1',
        219: 'AECD5_TIME2',
        220: 'AECD6_TIME1',
        221: 'AECD6_TIME2',
        222: 'AECD7_TIME1',
        223: 'AECD7_TIME2',
        224: 'AECD8_TIME1',
        225: 'AECD8_TIME2',
        226: 'AECD9_TIME1',
        227: 'AECD9_TIME2',
        228: 'AECD10_TIME1',
        229: 'AECD10_TIME2',
        230: 'NOX11',
        231: 'NOX12',
        232: 'NOX21',
        233: 'NOX22',
        234: 'MST',
        235: 'REAG_RATE',
        236: 'REAG_DEMD',
        237: 'REAG_LVL',
        238: 'NWI_TIME',
        239: 'PM11',
        240: 'PM21',
        241: 'MAP_A',
        242: 'MAP_B',
        243: 'SCR_INDUCE_SYSTEM',
        244: 'SCR_INDUCE_SYSTEM_HIST1',
        245: 'SCR_INDUCE_SYSTEM_HIST2',
        246: 'SCR_INDUCE_SYSTEM_HIST3',
        247: 'SCR_INDUCE_SYSTEM_HIST4',
        248: 'SCR_IND_DIST_1N',
        249: 'SCR_IND_DIST_1D',
        250: 'SCR_IND_DIST_2N',
        251: 'SCR_IND_DIST_3N',
        252: 'SCR_IND_DIST_4N',
        253: 'AECD11_TIME1',
        254: 'AECD11_TIME2',
        255: 'AECD12_TIME1',
        256: 'AECD12_TIME2',
        257: 'AECD13_TIME1',
        258: 'AECD13_TIME2',
        259: 'AECD14_TIME1',
        260: 'AECD14_TIME2',
        261: 'AECD15_TIME1',
        262: 'AECD15_TIME2',
        263: 'AECD16_TIME1',
        264: 'AECD16_TIME2',
        265: 'AECD17_TIME1',
        266: 'AECD17_TIME2',
        267: 'AECD18_TIME1',
        268: 'AECD18_TIME2',
        269: 'AECD19_TIME1',
        270: 'AECD19_TIME2',
        271: 'AECD20_TIME1',
        272: 'AECD20_TIME2',
        273: 'DPF_REGEN',
        274: 'NOX_ADS_REGEN',
        275: 'NOX_ADS_DESULF',
        276: 'DPF_REGEN_PCT',
        277: 'DPF_REGEN_AVGT',
        278: 'DPF_REGEN_AVGD',
        279: 'O2S11_PCT',
        280: 'O2S12_PCT',
        281: 'O2S21_PCT',
        282: 'O2S22_PCT',
        283: 'TP_G',
        284: 'TQ_FR',
        285: 'PM11_ACTIVE',
        286: 'PM11_REGEN',
        287: 'PM21_ACTIVE',
        288: 'PM21_REGEN',
        289: 'MI_DISP_VOBD',
        290: 'MI_MODE_VOBD',
        291: 'VOBD_RDY',
        292: 'VOBD_MI_TIME',
        293: 'MI_MODE_ECU',
        294: 'OBD_MI_TIME',
        295: 'OBD_B1_TIME',
        296: 'FP1',
        297: 'FIQ1',
        298: 'FIT1',
        299: 'IFB1',
        300: 'FP2',
        301: 'FIQ2',
        302: 'FIT2',
        303: 'IFB2',
        304: 'MI_TIME_CUM',
        305: 'NOX_WARN_ACT',
        306: 'INDUC_L1',
        307: 'INDUC_L2',
        308: 'INDUC_L3',
        309: 'REAG_QUAL_TIME',
        310: 'REAG_CON_TIME',
        311: 'REAG_DOSE_TIME',
        312: 'EGR_TIME',
        313: 'NOX_DTC_TIME',
        314: 'EGT15',
        315: 'EGT16',
        316: 'EGT17',
        317: 'EGT18',
        318: 'EGT25',
        319: 'EGT26',
        320: 'EGT27',
        321: 'EGT28',
        322: 'O2S13_PCT',
        323: 'O2S14_PCT',
        324: 'O2S23_PCT',
        325: 'O2S24_PCT',
        326: 'ENG_FUEL_RATE',
        327: 'VEH_FUEL_RATE',
        328: 'EXH_RATE',
        329: 'FUELSYSA_B1',
        330: 'FUELSYSB_B1',
        331: 'FUELSYSA_B2',
        332: 'FUELSYSB_B2',
        333: 'FUELSYSA_B3',
        334: 'FUELSYSB_B3',
        335: 'FUELSYSA_B4',
        336: 'FUELSYSB_B4',
        337: 'NOXC11',
        338: 'NOXC12',
        339: 'NOXC21',
        340: 'NOXC22',
        341: 'CYL_RATE',
        342: 'HEV_MODE',
        343: 'HEV_BATT_V',
        344: 'HEV_BATT_A',
        345: 'DEF Type',
        346: 'DEF_CON',
        347: 'DEF_T',
        348: 'DEF_LVL',
        349: 'GEAR_RCMD',
        350: 'Current Fuel Consumption',
        351: 'Average Fuel Consumption',
        352: 'Elapsed Time',
        353: 'Distance (Miles)',
        354: 'Fuel Used',
        355: 'Average Speed',
        1024: 'Coolant Hot Light',
        1025: 'Cruise Control Status',
        1026: 'Fuel Level(milliliters)',
        1027: 'Odometer',
        1028: 'Oil Pressure Lamp',
        1029: 'Seatbelt Fastened',
        1030: 'Service Interval Distance (distance still next service)',
        1031: 'Service Interval Day (time still next service)',
        1032: 'Turn Signal Status',
        1033: 'Brake Switch Status',
        1034: 'Parking Brake Indicator Light',
        1035: 'ABS Dash Indicator',
        1036: 'Airbag Dash Indicator',
        1037: 'Fuel Usage',
        1038: 'Fuel Level(%)',
        1039: 'Maintenance Required',
        1040: 'Transmission Gear',
        1041: 'Turn Left Signal Status',
        1042: 'Turn Right Signal Status',
        65535: 'Max',
        1043: 'Calculated Odometer',
        1044: 'Fuel Trip',
        1045: 'Derived Engine State',
        1046: 'Service Interval_Remain Distance',
        1047: 'Airbag DTC',
        1048: 'ABS DTC',
        1049: 'Brake Pad Check',
        1050: 'Brake Pedal Switch Status',
        1051: 'Harsh Braking',
        1052: 'Harsh Accelerate',
        1053: 'Oil Life Remaining',
        1054: 'Engine Run time (Hours)',
        1055: 'Change Oil Lamp',
        1056: 'Engine Oil Temp',
        1057: 'Service Interval_Remain Time',
        1058: 'Driver Door Status',
        1059: 'Passenger Door Status',
        1060: 'Rear Brake Pad Check',
        1061: 'Front Brake Pad Check',
        1062: 'Calculated Fuel Usage',
        1063: 'Low Tire Pressure',
        1064: 'A/C System Refrigerant Monitor',
        1065: 'Ambient Air Temperature',
        1066: 'Tire Pressure (Actual Tire Pressure)',
        1067: 'Transmission Fluid Temperature',
        1068: 'Charging system status',
        1069: 'Trip Distance',
        1070: 'OEM DTC',
        1071: 'Left Front Tire Pressure',
        1072: 'Left Rear Tire Pressure',
        1073: 'Right Front Tire Pressure',
        1074: 'Right Rear Tire Pressure',
        1075: 'Brake Fluid Level',
        1076: 'Brake Fluid Pressure',
        1077: 'Brake Fluid Temperature',
        1078: 'Brake Disc Temperature',
        1079: 'Engine Oil Level',
        1080: 'Engine Oil Pressure',
        1081: 'Door Lock',
        1082: 'Door Unlock',
        1083: 'Starter Disable',
        1084: 'Starter Enable',
        1085: 'Remote Start',
        1086: 'Horn Honk On',
        1087: 'Horn Honk Off',
        1088: 'Light Flashing On',
        1089: 'Light Flashing Off',
        1090: 'Service Interval',
        1091: 'ABS Active Lamp',
        1092: 'Fuel Rate',
        1093: 'Coolant Level Switch',
        1094: 'MIL Status',
        1095: 'Tire 1 Position',
        1096: 'Tire 2 Position',
        1097: 'Tire 3 Position',
        1098: 'Tire 4 Position',
        1099: 'Left Front Tire Pressure Status',
        1100: 'Left Rear Tire Pressure Status',
        1101: 'Right Front Tire Pressure Status',
        1102: 'Right Rear Tire Pressure Status',
        1103: 'Spare Tire Pressure',
        1104: 'Tire 1 Pressure',
        1105: 'Tire 2 Pressure',
        1106: 'Tire 3 Pressure',
        1107: 'Tire 4 Pressure',
        1108: 'Tire 1 Pressure Threshold',
        1109: 'Tire 2 Pressure Threshold',
        1110: 'Tire 3 Pressure Threshold',
        1111: 'Tire 4 Pressure Threshold',
        1112: 'Tire 5 Pressure Threshold',
        1113: 'Tire 5 Position',
        1114: 'Tire 5 Pressure',
        1115: 'Left Front Tire Pressure Threshold',
        1116: 'Right Front Tire Pressure Threshold',
        1117: 'Right Rear Tire Pressure Threshold',
        1118: 'Left Rear Tire Pressure Threshold',
        1119: 'Spare Tire Pressure Threshold',
        1120: 'Spare Tire Pressure Status',
        1121: 'Tire Pressure Threshold',
        1122: 'Tire 1 Pressure Status',
        1123: 'Tire 2 Pressure Status',
        1124: 'Tire 3 Pressure Status',
        1125: 'Tire 4 Pressure Status',
        1126: 'Engine Oil Temperature',
        1127: 'Transmission Oil Temperature',
        1128: 'Day Since Last Oil Change',
        1129: 'Distance Since Last Oil Change',
        1130: 'Service Interval Distance (distance since last oil change)',
        1131: 'Engine Coolant Level',
        1132: 'TPMS warning light',
        1133: 'Left Front Sensor Battery',
        1134: 'Left Rear Sensor Battery',
        1135: 'Right Front Sensor Battery',
        1136: 'Right Rear Sensor Battery',
        1137: 'Spare Tire Sensor Battery',
        1138: 'Tire 1 Sensor Battery',
        1139: 'Tire 2 Sensor Battery',
        1140: 'Tire 3 Sensor Battery',
        1141: 'Tire 4 Sensor Battery',
        1142: 'Tire 5 Sensor Battery',
        1143: 'Tire Pressure Monitoring System Status',
        1144: 'Tire Pressure Status',
        1145: 'Tire 5 Pressure Status',
        1146: 'Front Tire Pressure Threshold',
        1147: 'Rear Tire Pressure Threshold',
        1148: 'Fuel Level Volume',
        1149: 'Service Interval Day (time since last oil change)',
        1150: 'Steering Angle Sensor',
        1151: 'Crash Event Occurred',
        1152: 'Airbag deployment status',
        1153: 'Crash Detection',
        1154: 'Battery Voltage',
        1155: 'Engine Coolant Temp',
        1156: 'Engine Speed',
        1157: 'Throttle Position',
        1158: 'Vehicle Speed',
        1159: 'Oil Level',
        1160: 'ECU Part Number',
        1161: 'Software Part Number',
        1162: 'Pedestrian Airbag Trigger Status',
        1163: 'Fuel Level (%)',
        1164: 'Brake Light Switch',
        1165: 'Actual gear',
        1166: 'Left Front Tire Pressure Standard',
        1167: 'Right Front Tire Pressure Standard',
        1168: 'Left Rear Tire Pressure Standard',
        1169: 'Right Rear Tire Pressure Standard',
        1170: 'Spare Tire Pressure Standard',
        1171: 'Tire 1 Pressure Standard',
        1172: 'Tire 2 Pressure Standard',
        1173: 'Tire 3 Pressure Standard',
        1174: 'Tire 4 Pressure Standard',
        1175: 'Tire 5 Pressure Standard'
      };
      var _VCICmd_tool = {
        getecuvoltage: 1,
        setting_unit: 2,
        setting_language: 3
      };
      var _UNIT_ID = {
        Standard: 0,
        Metric: 1
      };
      var _GUI_LANGUAGE_ID = {
        GUI_LANG_ENGLISH: 0,
        GUI_LANG_SPANISH: 1,
        GUI_LANG_FRENCH: 2
      };
      var _SF_FunctionGroup = {
        UNKNOWN: 0,
        Diesel_Injector_Coding: 1,
        Diesel_Particulate_Filter_Reset: 2,
        Reset_Electric_Traction_System: 3,
        Throttle_Body_Relearn: 4,
        Throttle_Body_Relearn_OBD: 5,
        Throttle_Body_Relearn_Procedure: 6,
        TPMS_Relearn_OBD: 7,
        Transmission_Reset_Adaptation: 8,
        Idle_Speed_Relearn: 9,
        Injector_Coding: 10,
        Idle_Speed_Relearn_OBD: 11,
        Idle_Speed_Relearn_Procedure: 12,
        Transmission_Fluid_Level_Check: 13,
        Transmission_Reset: 14,
        Headlamp_Calibration: 15,
        Seat_Occupied_Calibration: 16,
        Maintenance_Reset: 17,
        Window_Door_Roof_Reset: 18,
        Suspension_Calibration: 19,
        Tire_Size_Reset: 20,
        ABS_Bleeding: 21
      };
      var _VCICmd_GUI = {
        gui_proc_enter: 0,
        gui_proc_leave: 1,
        gui_proc_terminate: 2,
        gui_set_key: 20,
        gui_set_key_with_index: 21,
        gui_set_param: 30,
        gui_lcd_display: 40,
        gui_set_special_function_group: 50,
        gui_host_ack: 60,
        gui_set_special_at_module: 70,
        gui_max: 255
      };
      var _VCI_Data_Logging = {
        EN_NO_LOG: 0x00,
        EN_OBDII: 0x01,
        EN_ECM: 0x02,
        EN_TCM: 0x03,
        EN_ABS: 0x04,
        EN_SRS: 0x05,
        EN_TPMS: 0x06,
        EN_Allsystems: 0x07,
        EN_ABSLD: 0x08,
        EN_SRSLD: 0x09,
        EN_TCMLD: 0x0A,
        EN_TPMSLD: 0x0B,
        EN_ECMAT: 0x0C,
        EN_ECMSF: 0x0D,
        EN_OilReset: 0x0E,
        EN_BatteryReset: 0x0F,
        EN_SAScalibration: 0x10,
        EN_EPBreset: 0x11,
        EN_TPMSRelearn: 0x12,
        EN_ThrottleBodyRelearn: 0x13,
        EN_ElectricTractionSystemReset: 0x14,
        EN_DPFReset: 0x15,
        EN_MaintenanceReset: 0x16,
        EN_Tiresizereset: 0x17,
        EN_SuspensionCalibration: 0x18,
        EN_HeadlampCalibration: 0x19,
        EN_WindowDoorRoofReset: 0x1A,
        EN_SeatOccupiedCalibration: 0x1B,
        EN_ABSBleeding: 0x1C,
        EN_TransmissionReset: 0x1D,
        EN_TransmissionFluidChangeReset: 0x1E,
        EN_TransmissionFluidLevelCheck: 0x1F,
        EN_InjectorCoding: 0x20,
        EN_All: 0xFF
      };
      var _VCI_GUI_Param_Type = {
        param_selection: 0,
        param_input: 1
      };
      var _SYS_PROC_ID = {
        /*==========================================================================
                          FIXED AREA DECLARE - DO NOT CHANGE
          ==========================================================================*/
        PROC_NONE: 0,
        PROC_CURRENT: 1,
        PROC_PREVIOUS: 2,
        PROC_TOOL_INIT: 3,

        /*==========================================================================
                        USER UI PROCESSES - ADD MORE FROM HERE
        ==========================================================================*/
        PROC_SERVICE_RESET: 10,
        PROC_BATTERY_HEALTH_CHECK: 28,
        PROC_BATTERY_ALTERNATOR_HEALTH_CHECK: 29,
        PROC_OIL_RESET: 45,
        PROC_OEM_BAT_RESET: 46,
        PROC_OILRESETSF: 47,
        PROC_OILRESETSF_LINKING: 48,

        /*-------- Active Test -----------*/
        PROC_ACTIVE_TEST: 15000,
        PROC_AT_LINKING: 15001,
        PROC_AT_LD: 15002,
        PROC_AT_LIST_FUNCTION: 15003,

        /*-------- Special Function -----------*/
        PROC_SPECIAL_FUNCTION: 15004,
        PROC_SF_LINKING: 15005,

        /*2016Nov07 SiT added for Battery reset with Special Function flow*/
        PROC_BAT_LINKING: 15006,
        PROC_OEM_BAT_RESET_SF: 15007,

        /*-------- System And Actual Test -----------*/
        PROC_SYSTEM_AND_ACTUAL_TEST: 15008,

        /*-------- Steering Angle Sensor-------------*/
        PROC_SAS_LINKING: 15009,
        PROC_SAS_CALIBRATION: 15010,

        /*-------- EPB-------------*/
        PROC_EPB_LINKING: 15011,
        PROC_EPB: 15012,
        PROC_TPMS_RESET_MENU: 15013,
        PROC_TPMS_PROCEDURE: 15014,
        PROC_DPF_RESET: 15015,
        PROC_DPF_RESET_SF: 15016,

        /* Diagnostic Routine */
        PROC_DIAGNOSTIC_ROUTINE: 15017,
        PROC_DIAGNOSTIC_ROUTINE_LINKING: 15018,

        /* Service Check */
        // PROC_SERVICE_CHECK                  ,
        // PROC_HYBRID_BATT_CHECK              ,
        //
        //
        // PROC_SETUP_WIFI_APP     ,

        /*==========================================================================
                END OF USER UI PROCESSes
        ==========================================================================*/
        PROC_ID_MAX: 0xFFFF
      };
      var _SYS_CMD_ID = {
        /*==========================================================================
                          FIXED AREA DECLARE - DO NOT CHANGE
          ==========================================================================*/
        CMD_NONE: 0,

        /*------- BASIC COMMANDs -------------*/
        CMD_CURRENT: 1,
        CMD_PREVIOUS: 2,
        CMD_INIT_PROC: 3,
        CMD_END_PROC: 4,
        CMD_EXIT: 5,
        CMD_DISP: 6,
        CMD_WAITING: 7,
        //#warning do not declare command lager than 1000 here

        /*==========================================================================
                    END OF USER UI COMMANDs
        ==========================================================================*/
        CMD_ID_MAX: 0xFFFF
      };
      var _GUI_KEY_CODE = {
        GUI_KEY_NONE: 0,
        GUI_KEY_ERASE: 1 << 0,
        GUI_KEY_ENTER: 1 << 1,
        GUI_KEY_UP: 1 << 2,
        GUI_KEY_DOWN: 1 << 3,
        GUI_KEY_POWER_LINK: 1 << 4,
        GUI_KEY_DTC: 1 << 5,
        GUI_KEY_MENU: 1 << 6,
        GUI_KEY_FF: 1 << 7,
        GUI_KEY_LD: 1 << 8,
        GUI_KEY_SYSTEM: 1 << 9,
        GUI_SOFTKEY_1: 1 << 10,
        GUI_SOFTKEY_2: 1 << 11,
        GUI_SOFTKEY_3: 1 << 12,
        GUI_KEY_RESERVED_13: 1 << 13,
        GUI_KEY_RESERVED_14: 1 << 14,
        GUI_KEY_RESERVED_15: 1 << 15,
        GUI_KEY_ALL: 0xFFFF
      };
      var _enumSmogCheckLoc = {
        Arizona: 0x01,
        California: 0x02,
        Colorado: 0x03,
        Connecticut: 0x04,
        DC: 0x05,
        Delaware: 0x06,
        Georgia: 0x07,
        Idaho: 0x08,
        Illinois: 0x09,
        Indiana: 0x0A,
        Louisiana: 0x0B,
        Maine: 0x0C,
        Maryland: 0x0D,
        Massachusetts: 0x0E,
        Missouri: 0x0F,
        Nevada: 0x10,
        NewHampshire: 0x11,
        NewJersey: 0x12,
        NewMexico: 0x13,
        NewYork: 0x14,
        NorthCarolina: 0x15,
        Ohio: 0x16,
        Oregon: 0x17,
        Pennsylvania: 0x18,
        RhodeIsland: 0x19,
        Tennessee: 0x1A,
        Texas: 0x1B,
        Utah: 0x1C,
        Vermont: 0x1D,
        Virginia: 0x1E,
        Wisconsin: 0x1F,
        NoIMProg: 0x20 // eSmogCheckLoc_NONE: 0,
        // eSmogCheckLoc_California_CARB: 1,
        // eSmogCheckLoc_Wisconsin: 2,
        // eSmogCheckLoc_NewYork: 3,
        // eSmogCheckLoc_Oregon: 4,
        // eSmogCheckLoc_Idaho: 5,
        // eSmogCheckLoc_Utah: 6,
        // eSmogCheckLoc_Missouri: 7,
        // eSmogCheckLoc_Indiana: 8,
        // eSmogCheckLoc_Massachusetts: 9,
        // eSmogCheckLoc_Others_With_IM_Prog: 0xFE,
        // eSmogCheckLoc_No_IM_Prog: 0xFF

      };
      var _enumSmogCheckLocCountry = {
        Cache: 0x01,
        Davis: 0x02,
        SaltLake: 0x03,
        Utah: 0x04,
        Weber: 0x05,
        Ada: 0x06,
        Canyon: 0x07,
        NoProgram: 0x08
      };
      var _enumFuelType = {
        eFuelType_UNKNOWN: 0,
        eFuelType_GAS: 1,
        eFuelType_DIESEL: 2,
        eFuelType_MAX_255: 0xFF
      };
      var _ICOMMANDS = {
        xxx: {
          id: 0xE3,
          group: 'Firmware',
          description: 'Goto Firmware Screen'
        },
        getVehicleData: {
          id: 0x01,
          description: 'Get Vehicle Data buffer(ID=01)'
        },
        getFreezeFrameData: {
          id: 0x03,
          description: 'Get FreezeFrame Data(ID=03)',
          timeout: 0.3 * 60 * 1000
        },
        getDtcs: {
          id: 0x3F,
          description: 'Get DTC(ID=3F)',
          timeout: 0.3 * 60 * 1000
        },
        getVIN: {
          id: 0x40,
          description: 'Get Vehicle Identification Number(ID=40)',
          timeout: 2000 //0.5 * 60 * 1000

        },
        getSupportedPIDs: {
          id: 0x41,
          description: 'Get supported PID list for OBD2 LD(ID=41)',
          format: 'bytes'
        },
        registerPIDs: {
          id: 0x42,
          description: "Register PID list for polling(ID=42)\n    Time(2 byte), Enable/Disable(1 byte), PID1 (1 byte)",
          input: {
            length: 16
          },
          timeout: 0.3 * 60 * 1000
        },
        unregisterPIDs: {
          id: 0x43,
          description: 'Unregister All Configured PID'
        },
        poll: {
          id: 0x44,
          description: 'Start/Stop Bus Poll(ID=44)',
          options: [{
            text: 'Start Poll',
            value: [1]
          }, {
            text: 'Stop Poll',
            value: [0]
          }]
        },
        readRegisteredPIDs: {
          id: 0x45,
          description: 'Read Result of Registered PID(ID=45)'
        },
        stream: {
          id: 0x46,
          description: 'Start/Stop Stream PID Result(ID=46)',
          options: [{
            text: 'Start Streaming',
            value: [1]
          }, {
            text: 'Stop Streaming',
            value: [0]
          }]
        },
        clearVehicleDiscovery: {
          id: 0x47,
          description: 'Clear Vehicle Discovery Info(ID=47)'
        },
        startVehicleDiscovery: {
          id: 0x48,
          description: 'Start Vehicle Discovery(ID=48)',
          timeout: 2 * 60 * 1000
        },
        setResponseFormat: {
          id: 0x49,
          description: 'Set Raw/Readable response(ID=49)',
          options: [{
            text: 'Use Raw',
            value: [0]
          }, {
            text: 'Use JSON',
            value: [1]
          }],
          timeout: 1000
        },
        LogData: {
          id: 0x5A,
          description: 'Data Logging(ID=5A)',
          setfuncid: {
            id: 0x01,
            description: 'Set Log Function(ID=01)',
            options: [{
              text: 'NO_LOG',
              value: _VCI_Data_Logging.EN_NO_LOG
            }, {
              text: 'OBD II',
              value: _VCI_Data_Logging.EN_OBDII
            }, {
              text: 'ECM',
              value: _VCI_Data_Logging.EN_ECM
            }, {
              text: 'TCM',
              value: _VCI_Data_Logging.EN_TCM
            }, {
              text: 'ABS',
              value: _VCI_Data_Logging.EN_ABS
            }, {
              text: 'SRS',
              value: _VCI_Data_Logging.EN_SRS
            }, {
              text: 'TPMS',
              value: _VCI_Data_Logging.EN_TPMS
            }, {
              text: 'All systems',
              value: _VCI_Data_Logging.EN_Allsystems
            }, {
              text: 'ABS LD',
              value: _VCI_Data_Logging.EN_ABSLD
            }, {
              text: 'SRS LD',
              value: _VCI_Data_Logging.EN_SRSLD
            }, {
              text: 'TCM LD',
              value: _VCI_Data_Logging.EN_TCMLD
            }, {
              text: 'TPMS LD',
              value: _VCI_Data_Logging.EN_TPMSLD
            }, {
              text: 'ECM AT',
              value: _VCI_Data_Logging.EN_ECMAT
            }, {
              text: 'ECM SF',
              value: _VCI_Data_Logging.EN_ECMSF
            }, {
              text: 'Oil Reset',
              value: _VCI_Data_Logging.EN_OilReset
            }, {
              text: 'Battery Reset',
              value: _VCI_Data_Logging.EN_BatteryReset
            }, {
              text: 'SAS calibration',
              value: _VCI_Data_Logging.EN_SAScalibration
            }, {
              text: 'EPB reset',
              value: _VCI_Data_Logging.EN_EPBreset
            }, {
              text: 'TPMS Relearn',
              value: _VCI_Data_Logging.EN_TPMSRelearn
            }, {
              text: 'Throttle Body Relearn',
              value: _VCI_Data_Logging.EN_ThrottleBodyRelearn
            }, {
              text: 'Electric Traction System Reset',
              value: _VCI_Data_Logging.EN_ElectricTractionSystemReset
            }, {
              text: 'DPF Reset',
              value: _VCI_Data_Logging.EN_DPFReset
            }, {
              text: 'Maintenance Reset',
              value: _VCI_Data_Logging.EN_MaintenanceReset
            }, {
              text: 'Tire size reset',
              value: _VCI_Data_Logging.EN_Tiresizereset
            }, {
              text: 'Suspension Calibration',
              value: _VCI_Data_Logging.EN_SuspensionCalibration
            }, {
              text: 'Headlamp Calibration',
              value: _VCI_Data_Logging.EN_HeadlampCalibration
            }, {
              text: 'Window Door Roof Reset',
              value: _VCI_Data_Logging.EN_WindowDoorRoofReset
            }, {
              text: 'Seat Occupied Calibration',
              value: _VCI_Data_Logging.EN_SeatOccupiedCalibration
            }, {
              text: 'ABS Bleeding',
              value: _VCI_Data_Logging.EN_ABSBleeding
            }, {
              text: 'Transmission Reset',
              value: _VCI_Data_Logging.EN_TransmissionReset
            }, {
              text: 'Transmission Fluid Change Reset',
              value: _VCI_Data_Logging.EN_TransmissionFluidChangeReset
            }, {
              text: 'Transmission Fluid Level Check',
              value: _VCI_Data_Logging.EN_TransmissionFluidLevelCheck
            }, {
              text: 'Injector Coding',
              value: _VCI_Data_Logging.EN_InjectorCoding
            }, {
              text: 'Enable All',
              value: _VCI_Data_Logging.EN_All
            } //{text: 'ECM LiveData', value: [VCI_Data_Logging.EN]},
            ]
          },
          startlog: {
            id: 0x02,
            description: 'Begin Log(ID=02)',
            options: []
          },
          stoplog: {
            id: 0x03,
            description: 'Stop Log(ID=03)',
            options: []
          },
          getlog: {
            id: 0x04,
            description: 'Get Log(ID=04)',
            options: []
          },
          getlog_encrypt: {
            id: 0x05,
            description: 'Get Log Encrypt(ID=05)',
            options: []
          },
          timeout: 1000
        },
        getIMReadiness: {
          id: 0x4b,
          description: 'Get IM Readiness(ID=4b)'
        },
        getToolSettings: {
          id: 0xE1,
          description: 'Get Tool Setting(ID=E1)',
          timeout: 1000
        },
        eraseFirmwareAndJumpToBootloader: {
          id: 0xE2,
          description: 'Erase FW/BL then jump to boot loader/FW(ID=E2)'
        },
        upgradeFirmware: {
          id: 0xE3,
          description: 'Upgrade FW/BL data package(IE=E3)'
        },
        reboot: {
          id: 0xE4,
          description: 'Reboot Dongle Hardware(ID=E4)'
        },
        getGuid: {
          id: 0xE5,
          description: 'Get Device GUID(ID=E5)'
        },
        setGuid: {
          id: 0xE6,
          description: 'Set Device GUID(ID=E6)',
          dataLength: 2,
          input: {
            length: 16
          }
        },
        getUsbProductId: {
          id: 0xE7,
          description: 'Get Device USB PID(ID=E7)',
          retries: 3,
          timeout: 1000
        },
        getOEMSupportedPIDs: {
          id: 0x61,
          timeout: 1 * 60 * 1000,
          retries: 3,
          description: 'Get OEM supported PID list (ID=61)'
        },
        getOEMPIDData: {
          id: 0x62,
          description: 'Get OEM Pid data (ID=62)'
        },
        getOEMBuffer: {
          id: 0x70,
          description: 'Get OEM Buffer (ID=70)'
        },
        getOEMDTC: {
          id: 0x71,
          description: 'Get OEM DTC (ID=71)'
        },
        eraseOEMDTC: {
          id: 0x72,
          description: 'Erase OEM DTC'
        },
        registerOEMPIDs: {
          id: 0x73,
          description: "Register OEM PID list for polling(ID=73)\n    Time(2 byte), Enable/Disable(1 byte), PID1 (1 byte)",
          input: {
            length: 16
          },
          timeout: 0.3 * 60 * 1000
        },
        unregisterOEMPIDs: {
          id: 0x74,
          description: 'Unregister All Configured OEM PID(ID=74)'
        },
        streamOEM: {
          id: 0x75,
          description: 'Start/Stop OEM Live Data Stream(ID=75)',
          options: [{
            text: 'Start Streaming',
            value: [1]
          }, {
            text: 'Stop Streaming',
            value: [0]
          }]
        },
        batteryHealthCheck: {
          id: 0x80,
          description: 'Battery health check(ID=80)',
          timeout: 60 * 1000
        },
        // for BLE tool
        getVehicleV5Data: {
          id: 0x80,
          retries: 3,
          description: 'Get Vehicle Data buffer V5(ID=80)'
        },
        registerNotifyEvents: {
          id: 0xCE,
          retries: 1,
          description: 'Register Notify Events'
        },
        getStoredVehicles: {
          id: 0x81,
          description: 'Get vehicle data information (ID=81)'
        },
        selectVehicle: {
          id: 0x82,
          description: 'Select vehicle data buffer (ID=82)'
        },
        batteryCheck: {
          id: 0x3C,
          description: 'Battery Check(ID=0x3C)',
          timeout: 1000
        }
      };
      var _USBHIDCommand_ = {
        eVEHICLE_DATA_YMME_PROFILE: {
          MaxNumBuff: 1,
          cmd: 1,
          desc: 'Vehicle YMME profile data'
        },
        eVEHICLE_DATA_OBD2_LD_SID1_BUFF: {
          MaxNumBuff: 2,
          cmd: 11,
          desc: ' OBD2 Sid$01 data buffer	                (2 buffers for ECM and TCM)'
        },
        eVEHICLE_DATA_OBD2_FF_SID2_BUFF: {
          MaxNumBuff: 2,
          cmd: 12,
          desc: ' OBD2 FreezeFrame Sid$02 data buffer	    (2 buffers for ECM and TCM)'
        },
        eVEHICLE_DATA_OBD2_DTC_SID37A_BUFF: {
          MaxNumBuff: 2,
          cmd: 13,
          desc: ' OBD2 DTCs buffer Sid$03, Sid$07, Sid$0A	(2 buffers for ECM and TCM)'
        },
        eVEHICLE_DATA_OBD2_SPECIALTEST_SID568_BUFF: {
          MaxNumBuff: 1,
          cmd: 14,
          desc: ' OBD2 Sid$05, Sid$06, Sid$08               (just 1 buffer)'
        },
        eVEHICLE_DATA_OBD2_SPECIALTEST_SID5_BUFF: {
          MaxNumBuff: 1,
          cmd: 145,
          desc: ' OBD2 Sid$05               (just 1 buffer)'
        },
        eVEHICLE_DATA_OBD2_SPECIALTEST_SID6_BUFF: {
          MaxNumBuff: 1,
          cmd: 146,
          desc: ' OBD2 Sid$06               (just 1 buffer)'
        },
        eVEHICLE_DATA_OBD2_SPECIALTEST_SID8_BUFF: {
          MaxNumBuff: 1,
          cmd: 148,
          desc: ' OBD2 Sid$08               (just 1 buffer)'
        },
        eVEHICLE_DATA_OBD2_VEHINFO_SID9_BUFF: {
          MaxNumBuff: 2,
          cmd: 15,
          desc: ' OBD2 Sid$09                               (2 buffers for ECM and TCM)'
        },
        eVEHICLE_DATA_OBD2_RECORED_LD_BUFF: {
          MaxNumBuff: 1,
          cmd: 16,
          desc: ' OBD2 Recorded Live Data data'
        },
        eVEHICLE_DATA_OEM_MODULE_BUFF: {
          MaxNumBuff: 100,
          cmd: 51,
          desc: ' OEM modules DTC (includes Module Info)    (Currently we have 100 buffers)'
        },
        eVEHICLE_DATA_OBD2_FF_SID2_BUFF_RAW: {
          MaxNumBuff: 2,
          cmd: 0x70,
          desc: ' OBD2 FreezeFrame Sid$02 raw data buffer	    (2 buffers for ECM and TCM)'
        }
      };
      var _FreezeFrameDataTypes = {
        DTC_INFO: 1,
        LD_HEADER: 2,
        LD_ITEM_NAME_STRING: 3,
        LD_ITEM_UNIT_STRING: 4,
        LD_ITEM_VALUE_STRING: 5
      };
      var _Metrics = {
        USA: 0,
        METRIC: 1
      };
      var _TransferStatus = {
        TRANSFERRING: 0xbb,
        COMPLETED: 0xaa,
        VALID: 0xaa
      };
      var _Languages = {
        ENGLISH: 1,
        SPANISH: 2,
        FRENCH: 3
      }; //todo

      var _VehicleDataTypes = {
        YMME_PROFILE: 1,
        OBD2_LD_SID1_BUFF: 11,
        OBD2_FF_SID2_BUFF: 12,
        OBD2_DTC_SID37A_BUFF: 13,
        OBD2_SPECIALTEST_SID568_BUFF: 14,
        OBD2_VEHINFO_SID9_BUFF: 15,
        OBD2_RECORED_LD_BUFF: 16,
        OEM_MODULE_BUFF: 51
      };
      var _BufferSegmentTypes = {
        VERSION: 0,
        VIN_PROFILE: 1,
        MONITOR_ICON: 2,
        FREEZE_FRAME: 3,
        DTC: 4,
        SPECIAL_TEST: 5,
        VEHICLE_INFO: 6,
        LIVE_DATA: 7,
        OEM_DATA: 8
      };
      /***/
    },

    /***/
    86271:
    /*!*************************************************************!*\
      !*** ./src/app/services/innova-vci-service/src/obd/ymme.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "YMME": function YMME() {
          return (
            /* binding */
            _YMME
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      42321);
      /* harmony import */


      var _vcistd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./vcistd */
      48860);
      /* harmony import */


      var _obd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./obd */
      29326);
      /* harmony import */


      var _utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../utilities/dataParser */
      81402);
      /* harmony import */


      var util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! util */
      94655);
      /* harmony import */


      var util__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _YMME = /*#__PURE__*/function (_obd__WEBPACK_IMPORTE9) {
        function _YMME() {
          _classCallCheck(this, _YMME);

          return _callSuper(this, _YMME, arguments);
        }

        _inherits(_YMME, _obd__WEBPACK_IMPORTE9);

        return _createClass(_YMME, [{
          key: "init",
          value: function init() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee221() {
              return _regeneratorRuntime().wrap(function _callee221$(_context221) {
                while (1) switch (_context221.prev = _context221.next) {
                  case 0:
                    _context221.prev = 0;
                    _context221.next = 3;
                    return this.LinkVciCmd({
                      Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.ymme,
                      stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_YMME.init,
                      usbData: [],
                      nretry: 1,
                      timeout: 10000
                    });

                  case 3:
                    return _context221.abrupt("return", true);

                  case 6:
                    _context221.prev = 6;
                    _context221.t0 = _context221["catch"](0);
                    this.logdebug('Error initialize YMME Selection:' + _context221.t0);
                    return _context221.abrupt("return", false);

                  case 10:
                  case "end":
                    return _context221.stop();
                }
              }, _callee221, this, [[0, 6]]);
            }));
          }
        }, {
          key: "get",
          value: function get(sel_id) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee223() {
              var _this82 = this;

              return _regeneratorRuntime().wrap(function _callee223$(_context223) {
                while (1) switch (_context223.prev = _context223.next) {
                  case 0:
                    return _context223.abrupt("return", new Promise(function (resolve) {
                      return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(_this82, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee222() {
                        var usbData, data, j;
                        return _regeneratorRuntime().wrap(function _callee222$(_context222) {
                          while (1) switch (_context222.prev = _context222.next) {
                            case 0:
                              _context222.prev = 0;
                              usbData = _toConsumableArray(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.numberToBytes(sel_id, 1));
                              _context222.next = 4;
                              return this.LinkVciCmd({
                                Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.ymme,
                                stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_YMME.get,
                                usbData: usbData,
                                nretry: 1,
                                timeout: 10000
                              });

                            case 4:
                              data = _context222.sent;
                              j = {};

                              if ((0, util__WEBPACK_IMPORTED_MODULE_3__.isNullOrUndefined)(data)) {
                                j = {};
                              } else {
                                j = JSON.parse(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.bytesToString(data));
                              }

                              return _context222.abrupt("return", resolve(j));

                            case 10:
                              _context222.prev = 10;
                              _context222.t0 = _context222["catch"](0);
                              this.logdebug('Error initialize YMME get selection:' + _context222.t0);
                              return _context222.abrupt("return", resolve({}));

                            case 14:
                            case "end":
                              return _context222.stop();
                          }
                        }, _callee222, this, [[0, 10]]);
                      }));
                    }));

                  case 1:
                  case "end":
                    return _context223.stop();
                }
              }, _callee223);
            }));
          }
        }, {
          key: "confirm",
          value: function confirm() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee224() {
              return _regeneratorRuntime().wrap(function _callee224$(_context224) {
                while (1) switch (_context224.prev = _context224.next) {
                  case 0:
                    _context224.prev = 0;
                    _context224.next = 3;
                    return this.LinkVciCmd({
                      Procid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCIProg.ymme,
                      stateid: _vcistd__WEBPACK_IMPORTED_MODULE_0__.VCICmd_YMME.confirm,
                      usbData: [],
                      nretry: 1,
                      timeout: 10000
                    });

                  case 3:
                    return _context224.abrupt("return", true);

                  case 6:
                    _context224.prev = 6;
                    _context224.t0 = _context224["catch"](0);
                    this.logdebug('Error initialize YMME confirm:' + _context224.t0);
                    return _context224.abrupt("return", false);

                  case 10:
                  case "end":
                    return _context224.stop();
                }
              }, _callee224, this, [[0, 6]]);
            }));
          }
        }]);
      }(_obd__WEBPACK_IMPORTED_MODULE_1__.OBDx);

      _YMME.ɵfac = /*@__PURE__*/function () {
        var ɵYMME_BaseFactory;
        return function YMME_Factory(t) {
          return (ɵYMME_BaseFactory || (ɵYMME_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetInheritedFactory"](_YMME)))(t || _YMME);
        };
      }();

      _YMME.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
        token: _YMME,
        factory: _YMME.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    91537:
    /*!***********************************************************************!*\
      !*** ./src/app/services/innova-vci-service/src/obdservice.service.ts ***!
      \***********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "OBDService": function OBDService() {
          return (
            /* binding */
            _OBDService
          );
        },

        /* harmony export */
        "EnumNotify": function EnumNotify() {
          return (
            /* reexport safe */
            _standard_enums__WEBPACK_IMPORTED_MODULE_0__.EnumNotify
          );
        },

        /* harmony export */
        "Dataparser": function Dataparser() {
          return (
            /* reexport module object */
            _utilities_dataParser__WEBPACK_IMPORTED_MODULE_1__
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! tslib */
      42321);
      /* harmony import */


      var _standard_enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./standard/enums */
      13930);
      /* harmony import */


      var _utilities_dataParser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./utilities/dataParser */
      81402);
      /* harmony import */


      var _obd_vcistd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./obd/vcistd */
      48860);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _utilities_notify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./utilities/notify.service */
      46607);
      /* harmony import */


      var _command_command_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./command/command.service */
      12843);
      /* harmony import */


      var _obd_obd2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./obd/obd2 */
      24394);
      /* harmony import */


      var _obd_nwscan__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./obd/nwscan */
      10591);
      /* harmony import */


      var _obd_OBDSystem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./obd/OBDSystem */
      39152);
      /* harmony import */


      var _obd_obd2ff__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./obd/obd2ff */
      89750);
      /* harmony import */


      var _obd_ofm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./obd/ofm */
      16017);
      /* harmony import */


      var _obd_livedata__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./obd/livedata */
      55123);
      /* harmony import */


      var _obd_symptom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./obd/symptom */
      93235);
      /* harmony import */


      var _obd_ymme__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./obd/ymme */
      86271);
      /* harmony import */


      var _obd_gui__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./obd/gui */
      71362);

      var _OBDService = /*#__PURE__*/function () {
        function _OBDService(notifyService, commService, obd2, nwscan, obdsystem, obd2ff, ofm, livedata, symptom, ymme, gui) {
          _classCallCheck(this, _OBDService);

          this.notifyService = notifyService;
          this.commService = commService;
          this.obd2 = obd2;
          this.nwscan = nwscan;
          this.obdsystem = obdsystem;
          this.obd2ff = obd2ff;
          this.ofm = ofm;
          this.livedata = livedata;
          this.symptom = symptom;
          this.ymme = ymme;
          this.gui = gui;
          this.toolInfo = null;
          this.apiVersion = '1.16';
          this.isDevConnected = false;
        }
        /**
         *
         *
         * @param {(NotifyDataType) => any} [cb=null] : register notify process
         * @returns {Promise<boolean>}
         * @memberof OBDService
         */


        return _createClass(_OBDService, [{
          key: "initialize",
          value: function initialize() {
            var cb = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee225() {
              return _regeneratorRuntime().wrap(function _callee225$(_context225) {
                while (1) switch (_context225.prev = _context225.next) {
                  case 0:
                    _context225.next = 2;
                    return this.commService.initialize(_standard_enums__WEBPACK_IMPORTED_MODULE_0__.EnumSerialType.Bluetooth);

                  case 2:
                    this.isDevConnected = _context225.sent;

                    if (!this.isDevConnected) {
                      _context225.next = 9;
                      break;
                    }

                    if (this.registerCallback) {
                      this.registerCallback.unsubscribe();
                    }

                    if (cb) {
                      this.registerCallback = this.notifyService.Event.subscribe(function (t) {
                        return cb(t);
                      });
                    }

                    _context225.next = 8;
                    return this.obd2.initialize();

                  case 8:
                    this.isDevConnected = _context225.sent;

                  case 9:
                    return _context225.abrupt("return", this.isDevConnected);

                  case 10:
                  case "end":
                    return _context225.stop();
                }
              }, _callee225, this);
            }));
          }
          /**
           * [initialize_ble function initialize bluetooth]
           * @param  {(NotifyDataType) => any} [cb=null] : register notify process
           * @return   {Promise<boolean>}
           */

        }, {
          key: "initialize_bt",
          value: function initialize_bt() {
            var cb = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee226() {
              var stt;
              return _regeneratorRuntime().wrap(function _callee226$(_context226) {
                while (1) switch (_context226.prev = _context226.next) {
                  case 0:
                    _context226.next = 2;
                    return this.commService.initialize(_standard_enums__WEBPACK_IMPORTED_MODULE_0__.EnumSerialType.Bluetooth);

                  case 2:
                    stt = _context226.sent;

                    if (!stt) {
                      _context226.next = 11;
                      break;
                    }

                    if (this.registerCallback) {
                      this.registerCallback.unsubscribe();
                    }

                    if (!cb) {
                      _context226.next = 11;
                      break;
                    }

                    this.registerCallback = this.notifyService.Event.subscribe(function (t) {
                      return cb(t);
                    });
                    _context226.next = 9;
                    return this.obd2.initialize(1500);

                  case 9:
                    this.isDevConnected = _context226.sent;

                    if (!this.isDevConnected) {// await this.disconnectBluetoothDevices();
                    }

                  case 11:
                    return _context226.abrupt("return", stt);

                  case 12:
                  case "end":
                    return _context226.stop();
                }
              }, _callee226, this);
            }));
          }
        }, {
          key: "disconnectBluetoothDevices",
          value: function disconnectBluetoothDevices() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee227() {
              return _regeneratorRuntime().wrap(function _callee227$(_context227) {
                while (1) switch (_context227.prev = _context227.next) {
                  case 0:
                    if (this.isBTDevConnected) {
                      this.isBTDevConnected.unsubscribe();
                      this.isBTDevConnected = null;
                    }

                    _context227.next = 3;
                    return this.commService.disconnectBluetoothDevices();

                  case 3:
                    return _context227.abrupt("return", _context227.sent);

                  case 4:
                  case "end":
                    return _context227.stop();
                }
              }, _callee227, this);
            }));
          }
        }, {
          key: "BluetoothIsConnected",
          value: function BluetoothIsConnected() {
            return this.isBTDevConnected;
          }
        }, {
          key: "stopQuery",
          value: function stopQuery() {
            return this.obd2.stopQuery();
          }
        }, {
          key: "get_list_bt_devices",
          value: function get_list_bt_devices() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee228() {
              return _regeneratorRuntime().wrap(function _callee228$(_context228) {
                while (1) switch (_context228.prev = _context228.next) {
                  case 0:
                    _context228.next = 2;
                    return this.commService.getBluetoothDevicesList();

                  case 2:
                    return _context228.abrupt("return", _context228.sent);

                  case 3:
                  case "end":
                    return _context228.stop();
                }
              }, _callee228, this);
            }));
          }
        }, {
          key: "get_list_bt_bondeddevices",
          value: function get_list_bt_bondeddevices() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee229() {
              return _regeneratorRuntime().wrap(function _callee229$(_context229) {
                while (1) switch (_context229.prev = _context229.next) {
                  case 0:
                    _context229.next = 2;
                    return this.commService.getBluetoothBondedDevicesList();

                  case 2:
                    return _context229.abrupt("return", _context229.sent);

                  case 3:
                  case "end":
                    return _context229.stop();
                }
              }, _callee229, this);
            }));
          }
        }, {
          key: "connectBlueToothDevice",
          value: function connectBlueToothDevice(macAddress) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee231() {
              var _this83 = this;

              return _regeneratorRuntime().wrap(function _callee231$(_context231) {
                while (1) switch (_context231.prev = _context231.next) {
                  case 0:
                    console.log('connectBlueToothDevice macAddress: ', macAddress); // modified by NGOCLB

                    return _context231.abrupt("return", new Promise(function (resolve) {
                      return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(_this83, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee230() {
                        var _this84 = this;

                        return _regeneratorRuntime().wrap(function _callee230$(_context230) {
                          while (1) switch (_context230.prev = _context230.next) {
                            case 0:
                              console.log('resolve: ', resolve);
                              _context230.next = 3;
                              return this.commService.connectBlueToothDevice(macAddress, function (isSuccess) {
                                // this.isBTDevConnected.add(() => {
                                //   let isSuccess = !this.isBTDevConnected.closed;
                                if (!isSuccess) {
                                  _this84.isBTDevConnected = null;
                                }

                                resolve(isSuccess); // });
                              });

                            case 3:
                              this.isBTDevConnected = _context230.sent;

                            case 4:
                            case "end":
                              return _context230.stop();
                          }
                        }, _callee230, this);
                      }));
                    }));

                  case 2:
                  case "end":
                    return _context231.stop();
                }
              }, _callee231);
            }));
          }
        }, {
          key: "getVehReport_YMME_String",
          value: function getVehReport_YMME_String() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee232() {
              return _regeneratorRuntime().wrap(function _callee232$(_context232) {
                while (1) switch (_context232.prev = _context232.next) {
                  case 0:
                    _context232.next = 2;
                    return this.obd2.getYMMEString();

                  case 2:
                    return _context232.abrupt("return", _context232.sent);

                  case 3:
                  case "end":
                    return _context232.stop();
                }
              }, _callee232, this);
            }));
          }
        }, {
          key: "getVehReport_MonitorIconStatus",
          value: function getVehReport_MonitorIconStatus() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee233() {
              return _regeneratorRuntime().wrap(function _callee233$(_context233) {
                while (1) switch (_context233.prev = _context233.next) {
                  case 0:
                    _context233.next = 2;
                    return this.obd2.getMonitorIcon();

                  case 2:
                    return _context233.abrupt("return", _context233.sent);

                  case 3:
                  case "end":
                    return _context233.stop();
                }
              }, _callee233, this);
            }));
          }
        }, {
          key: "getVehReport_MonitorIconStatus_PID41",
          value: function getVehReport_MonitorIconStatus_PID41() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee234() {
              return _regeneratorRuntime().wrap(function _callee234$(_context234) {
                while (1) switch (_context234.prev = _context234.next) {
                  case 0:
                    _context234.next = 2;
                    return this.obd2.getMonitorIcon_SID41();

                  case 2:
                    return _context234.abrupt("return", _context234.sent);

                  case 3:
                  case "end":
                    return _context234.stop();
                }
              }, _callee234, this);
            }));
          }
        }, {
          key: "getVehReport_RPM_VSS",
          value: function getVehReport_RPM_VSS() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee235() {
              return _regeneratorRuntime().wrap(function _callee235$(_context235) {
                while (1) switch (_context235.prev = _context235.next) {
                  case 0:
                    _context235.next = 2;
                    return this.obd2.getRPM_VSS();

                  case 2:
                    return _context235.abrupt("return", _context235.sent);

                  case 3:
                  case "end":
                    return _context235.stop();
                }
              }, _callee235, this);
            }));
          }
        }, {
          key: "getVehReport_FreezeFrameDTCInfo",
          value: function getVehReport_FreezeFrameDTCInfo() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee236() {
              return _regeneratorRuntime().wrap(function _callee236$(_context236) {
                while (1) switch (_context236.prev = _context236.next) {
                  case 0:
                    _context236.next = 2;
                    return this.obd2.getFreezeFrameDTCInfo();

                  case 2:
                    return _context236.abrupt("return", _context236.sent);

                  case 3:
                  case "end":
                    return _context236.stop();
                }
              }, _callee236, this);
            }));
          }
        }, {
          key: "getVehReport_FreezeFrameLDInfo",
          value: function getVehReport_FreezeFrameLDInfo() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee237() {
              return _regeneratorRuntime().wrap(function _callee237$(_context237) {
                while (1) switch (_context237.prev = _context237.next) {
                  case 0:
                    _context237.next = 2;
                    return this.obd2.getFreezeFrameLiveData();

                  case 2:
                    return _context237.abrupt("return", _context237.sent);

                  case 3:
                  case "end":
                    return _context237.stop();
                }
              }, _callee237, this);
            }));
          }
        }, {
          key: "getVehReport_OBD2_DTC_Info",
          value: function getVehReport_OBD2_DTC_Info() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee238() {
              return _regeneratorRuntime().wrap(function _callee238$(_context238) {
                while (1) switch (_context238.prev = _context238.next) {
                  case 0:
                    _context238.next = 2;
                    return this.obd2.getOBD2DTCInfo();

                  case 2:
                    return _context238.abrupt("return", _context238.sent);

                  case 3:
                  case "end":
                    return _context238.stop();
                }
              }, _callee238, this);
            }));
          }
        }, {
          key: "getVehReport_OBD2_VehicleInfo_SID9",
          value: function getVehReport_OBD2_VehicleInfo_SID9() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee239() {
              return _regeneratorRuntime().wrap(function _callee239$(_context239) {
                while (1) switch (_context239.prev = _context239.next) {
                  case 0:
                    _context239.next = 2;
                    return this.obd2.getVehicleInfo_SID9();

                  case 2:
                    return _context239.abrupt("return", _context239.sent);

                  case 3:
                  case "end":
                    return _context239.stop();
                }
              }, _callee239, this);
            }));
          }
        }, {
          key: "getVehReport_OBD2_DTC_Def",
          value: function getVehReport_OBD2_DTC_Def(moduleindex, index) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee240() {
              return _regeneratorRuntime().wrap(function _callee240$(_context240) {
                while (1) switch (_context240.prev = _context240.next) {
                  case 0:
                    _context240.next = 2;
                    return this.obd2.getOBD2DTCDef(moduleindex, index);

                  case 2:
                    return _context240.abrupt("return", _context240.sent);

                  case 3:
                  case "end":
                    return _context240.stop();
                }
              }, _callee240, this);
            }));
          }
        }, {
          key: "getVehReport_YMME_PROFILE",
          value: function getVehReport_YMME_PROFILE() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee241() {
              return _regeneratorRuntime().wrap(function _callee241$(_context241) {
                while (1) switch (_context241.prev = _context241.next) {
                  case 0:
                    _context241.next = 2;
                    return this.obd2.getVehReport_YMME_PROFILE();

                  case 2:
                    return _context241.abrupt("return", _context241.sent);

                  case 3:
                  case "end":
                    return _context241.stop();
                }
              }, _callee241, this);
            }));
          }
        }, {
          key: "getVehReport_OBD2_LD_SID1_BUFF",
          value: function getVehReport_OBD2_LD_SID1_BUFF() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee242() {
              return _regeneratorRuntime().wrap(function _callee242$(_context242) {
                while (1) switch (_context242.prev = _context242.next) {
                  case 0:
                    _context242.next = 2;
                    return this.obd2.getVehReport_OBD2_LD_SID1_BUFF_new();

                  case 2:
                    return _context242.abrupt("return", _context242.sent);

                  case 3:
                  case "end":
                    return _context242.stop();
                }
              }, _callee242, this);
            }));
          }
        }, {
          key: "getVehReport_OBD2_FF_SID2_BUFF",
          value: function getVehReport_OBD2_FF_SID2_BUFF() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee243() {
              return _regeneratorRuntime().wrap(function _callee243$(_context243) {
                while (1) switch (_context243.prev = _context243.next) {
                  case 0:
                    _context243.next = 2;
                    return this.obd2.getVehReport_OBD2_FF_SID2_BUFF_RAW_new();

                  case 2:
                    return _context243.abrupt("return", _context243.sent);

                  case 3:
                  case "end":
                    return _context243.stop();
                }
              }, _callee243, this);
            }));
          }
        }, {
          key: "getVehReport_OBD2_DTC_SID37A_BUFF",
          value: function getVehReport_OBD2_DTC_SID37A_BUFF() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee244() {
              return _regeneratorRuntime().wrap(function _callee244$(_context244) {
                while (1) switch (_context244.prev = _context244.next) {
                  case 0:
                    _context244.next = 2;
                    return this.obd2.getVehReport_OBD2_DTC_SID37A_BUFF_new();

                  case 2:
                    return _context244.abrupt("return", _context244.sent);

                  case 3:
                  case "end":
                    return _context244.stop();
                }
              }, _callee244, this);
            }));
          } //public async getVehReport_OBD2_SPECIALTEST_SID568_BUFF() { return await this.obd2.getVehReport_OBD2_SPECIALTEST_SID568_BUFF() }

        }, {
          key: "getVehReport_OBD2_SPECIALTEST_SID5_BUFF",
          value: function getVehReport_OBD2_SPECIALTEST_SID5_BUFF() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee245() {
              return _regeneratorRuntime().wrap(function _callee245$(_context245) {
                while (1) switch (_context245.prev = _context245.next) {
                  case 0:
                    _context245.next = 2;
                    return this.obd2.getVehReport_OBD2_SPECIALTEST_SID5_BUFF_new();

                  case 2:
                    return _context245.abrupt("return", _context245.sent);

                  case 3:
                  case "end":
                    return _context245.stop();
                }
              }, _callee245, this);
            }));
          }
        }, {
          key: "getVehReport_OBD2_SPECIALTEST_SID6_BUFF",
          value: function getVehReport_OBD2_SPECIALTEST_SID6_BUFF() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee246() {
              return _regeneratorRuntime().wrap(function _callee246$(_context246) {
                while (1) switch (_context246.prev = _context246.next) {
                  case 0:
                    _context246.next = 2;
                    return this.obd2.getVehReport_OBD2_SPECIALTEST_SID6_BUFF_v2();

                  case 2:
                    return _context246.abrupt("return", _context246.sent);

                  case 3:
                  case "end":
                    return _context246.stop();
                }
              }, _callee246, this);
            }));
          }
        }, {
          key: "getVehReport_OBD2_SPECIALTEST_SID8_BUFF",
          value: function getVehReport_OBD2_SPECIALTEST_SID8_BUFF() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee247() {
              return _regeneratorRuntime().wrap(function _callee247$(_context247) {
                while (1) switch (_context247.prev = _context247.next) {
                  case 0:
                    _context247.next = 2;
                    return this.obd2.getVehReport_OBD2_SPECIALTEST_SID8_BUFF_new();

                  case 2:
                    return _context247.abrupt("return", _context247.sent);

                  case 3:
                  case "end":
                    return _context247.stop();
                }
              }, _callee247, this);
            }));
          }
        }, {
          key: "getVehReport_OBD2_VEHINFO_SID9_BUFF",
          value: function getVehReport_OBD2_VEHINFO_SID9_BUFF() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee248() {
              return _regeneratorRuntime().wrap(function _callee248$(_context248) {
                while (1) switch (_context248.prev = _context248.next) {
                  case 0:
                    _context248.next = 2;
                    return this.obd2.getVehReport_OBD2_VEHINFO_SID9_BUFF_new();

                  case 2:
                    return _context248.abrupt("return", _context248.sent);

                  case 3:
                  case "end":
                    return _context248.stop();
                }
              }, _callee248, this);
            }));
          }
        }, {
          key: "getVehReport_OBD2_RECORED_LD_BUFF",
          value: function getVehReport_OBD2_RECORED_LD_BUFF() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee249() {
              return _regeneratorRuntime().wrap(function _callee249$(_context249) {
                while (1) switch (_context249.prev = _context249.next) {
                  case 0:
                    _context249.next = 2;
                    return this.obd2.getVehReport_OBD2_RECORED_LD_BUFF();

                  case 2:
                    return _context249.abrupt("return", _context249.sent);

                  case 3:
                  case "end":
                    return _context249.stop();
                }
              }, _callee249, this);
            }));
          }
        }, {
          key: "getVehReport_OEM_MODULE_BUFF",
          value: function getVehReport_OEM_MODULE_BUFF() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee250() {
              return _regeneratorRuntime().wrap(function _callee250$(_context250) {
                while (1) switch (_context250.prev = _context250.next) {
                  case 0:
                    _context250.next = 2;
                    return this.obd2.getVehReport_OEM_MODULE_BUFF();

                  case 2:
                    return _context250.abrupt("return", _context250.sent);

                  case 3:
                  case "end":
                    return _context250.stop();
                }
              }, _callee250, this);
            }));
          }
        }, {
          key: "linkVehReport_OBD2_SPECIALTEST_SID6",
          value: function linkVehReport_OBD2_SPECIALTEST_SID6() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee251() {
              return _regeneratorRuntime().wrap(function _callee251$(_context251) {
                while (1) switch (_context251.prev = _context251.next) {
                  case 0:
                    return _context251.abrupt("return", this.obd2.link_OBD2_SPECIALTEST_SID6());

                  case 1:
                  case "end":
                    return _context251.stop();
                }
              }, _callee251, this);
            }));
          }
        }, {
          key: "linkVehReport_OBD2_SPECIALTEST_SID5",
          value: function linkVehReport_OBD2_SPECIALTEST_SID5() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee252() {
              return _regeneratorRuntime().wrap(function _callee252$(_context252) {
                while (1) switch (_context252.prev = _context252.next) {
                  case 0:
                    return _context252.abrupt("return", this.obd2.link_OBD2_SPECIALTEST_SID5());

                  case 1:
                  case "end":
                    return _context252.stop();
                }
              }, _callee252, this);
            }));
          }
        }, {
          key: "linkVehReport_OBD2_SPECIALTEST_SID8",
          value: function linkVehReport_OBD2_SPECIALTEST_SID8() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee253() {
              return _regeneratorRuntime().wrap(function _callee253$(_context253) {
                while (1) switch (_context253.prev = _context253.next) {
                  case 0:
                    return _context253.abrupt("return", this.obd2.link_OBD2_SPECIALTEST_SID8());

                  case 1:
                  case "end":
                    return _context253.stop();
                }
              }, _callee253, this);
            }));
          }
        }, {
          key: "OBD2_erase_Dtcs",
          value: function OBD2_erase_Dtcs() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee254() {
              return _regeneratorRuntime().wrap(function _callee254$(_context254) {
                while (1) switch (_context254.prev = _context254.next) {
                  case 0:
                    return _context254.abrupt("return", this.obd2.Erase_OBD2_Dtcs());

                  case 1:
                  case "end":
                    return _context254.stop();
                }
              }, _callee254, this);
            }));
          }
        }, {
          key: "getVersion",
          value: function getVersion() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee255() {
              return _regeneratorRuntime().wrap(function _callee255$(_context255) {
                while (1) switch (_context255.prev = _context255.next) {
                  case 0:
                    _context255.t0 = Object;
                    _context255.t1 = Object;
                    _context255.t2 = {};
                    _context255.next = 5;
                    return this.obd2.getInfo();

                  case 5:
                    _context255.t3 = _context255.sent;
                    _context255.t4 = _context255.t1.assign.call(_context255.t1, _context255.t2, _context255.t3);
                    _context255.t5 = {
                      'apiVersion': this.apiVersion
                    };
                    return _context255.abrupt("return", _context255.t0.assign.call(_context255.t0, _context255.t4, _context255.t5));

                  case 9:
                  case "end":
                    return _context255.stop();
                }
              }, _callee255, this);
            }));
          }
        }, {
          key: "isConnected",
          value: function isConnected() {
            return this.isDevConnected;
          }
        }, {
          key: "setVINString",
          value: function setVINString(vinstring) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee256() {
              return _regeneratorRuntime().wrap(function _callee256$(_context256) {
                while (1) switch (_context256.prev = _context256.next) {
                  case 0:
                    return _context256.abrupt("return", this.nwscan.setVinString(vinstring));

                  case 1:
                  case "end":
                    return _context256.stop();
                }
              }, _callee256, this);
            }));
          }
          /**
           * Query OBD2 , trying all basic protocol J1979
           *
           * @param {({ percent, index, total, message, isfinish }) => any} [cb=null] use to notify linking info
           * @returns {Promise<enumProtocol>} linked protocol
           * @memberof OBDService
           */

        }, {
          key: "obd2Query",
          value: function obd2Query() {
            var cb = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            var isNeedCheckVoltage = arguments.length > 1 ? arguments[1] : undefined;
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee257() {
              var resp;
              return _regeneratorRuntime().wrap(function _callee257$(_context257) {
                while (1) switch (_context257.prev = _context257.next) {
                  case 0:
                    _context257.next = 2;
                    return this.obd2.Query(function (obd2info) {
                      cb && cb(obd2info);
                    }, isNeedCheckVoltage);

                  case 2:
                    resp = _context257.sent;
                    return _context257.abrupt("return", resp);

                  case 4:
                  case "end":
                    return _context257.stop();
                }
              }, _callee257, this);
            }));
          }
          /**
           * collect data of full obd2 : Monitor Icon , FF , DTC , VIN and Get Report
           *
           * @param {({ message }) => any} [cb=null]
           * @returns  {Promise<any>} OBD2 Buffer in raw
           * @memberof OBDService
           */

        }, {
          key: "getBluetoothName",
          value: function getBluetoothName() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee258() {
              return _regeneratorRuntime().wrap(function _callee258$(_context258) {
                while (1) switch (_context258.prev = _context258.next) {
                  case 0:
                    _context258.next = 2;
                    return this.obd2.GetBluetoothName();

                  case 2:
                    return _context258.abrupt("return", _context258.sent);

                  case 3:
                  case "end":
                    return _context258.stop();
                }
              }, _callee258, this);
            }));
          }
        }, {
          key: "setBluetoothName",
          value: function setBluetoothName(newName) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee259() {
              var resp;
              return _regeneratorRuntime().wrap(function _callee259$(_context259) {
                while (1) switch (_context259.prev = _context259.next) {
                  case 0:
                    _context259.next = 2;
                    return this.obd2.SetBluetoothName(newName);

                  case 2:
                    resp = _context259.sent;
                    return _context259.abrupt("return", resp);

                  case 4:
                  case "end":
                    return _context259.stop();
                }
              }, _callee259, this);
            }));
          }
        }, {
          key: "obd2RetriveData",
          value: function obd2RetriveData() {
            var cb = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee260() {
              var resp;
              return _regeneratorRuntime().wrap(function _callee260$(_context260) {
                while (1) switch (_context260.prev = _context260.next) {
                  case 0:
                    _context260.next = 2;
                    return this.obd2.retreiveData(function (linkinfo) {
                      cb && cb(linkinfo);
                    });

                  case 2:
                    resp = _context260.sent;
                    return _context260.abrupt("return", resp);

                  case 4:
                  case "end":
                    return _context260.stop();
                }
              }, _callee260, this);
            }));
          }
        }, {
          key: "obd2FFDTCMonRetriveData",
          value: function obd2FFDTCMonRetriveData() {
            var cb = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee261() {
              var resp;
              return _regeneratorRuntime().wrap(function _callee261$(_context261) {
                while (1) switch (_context261.prev = _context261.next) {
                  case 0:
                    _context261.next = 2;
                    return this.obd2.retreiveFFDTCMonData(function (linkinfo) {
                      cb && cb(linkinfo);
                    });

                  case 2:
                    resp = _context261.sent;
                    return _context261.abrupt("return", resp);

                  case 4:
                  case "end":
                    return _context261.stop();
                }
              }, _callee261, this);
            }));
          }
        }, {
          key: "obd2DTCRetriveData",
          value: function obd2DTCRetriveData() {
            var cb = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee262() {
              var resp;
              return _regeneratorRuntime().wrap(function _callee262$(_context262) {
                while (1) switch (_context262.prev = _context262.next) {
                  case 0:
                    _context262.next = 2;
                    return this.obd2.retreiveDTCData(function (linkinfo) {
                      cb && cb(linkinfo);
                    });

                  case 2:
                    resp = _context262.sent;
                    return _context262.abrupt("return", resp);

                  case 4:
                  case "end":
                    return _context262.stop();
                }
              }, _callee262, this);
            }));
          }
        }, {
          key: "obd2QuickRetriveData",
          value: function obd2QuickRetriveData() {
            var cb = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            var readFFDtc = arguments.length > 1 ? arguments[1] : undefined;
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee263() {
              var resp;
              return _regeneratorRuntime().wrap(function _callee263$(_context263) {
                while (1) switch (_context263.prev = _context263.next) {
                  case 0:
                    _context263.next = 2;
                    return this.obd2.quick_retreiveData(function (linkinfo) {
                      cb && cb(linkinfo);
                    }, readFFDtc);

                  case 2:
                    resp = _context263.sent;
                    return _context263.abrupt("return", resp);

                  case 4:
                  case "end":
                    return _context263.stop();
                }
              }, _callee263, this);
            }));
          }
        }, {
          key: "delay",
          value: function delay(ms) {
            return new Promise(function (resolve) {
              return setTimeout(resolve, ms);
            });
          }
          /**
           * OBD2 Autolink Process , Trying query  , retreive data then get report data in raw
           *
           * @param {({ percent, index, total, message, isfinish }) => any} [cb=null]
           * @returns {Promise<boolean>} true:success , false : fail
           * @memberof OBDService
           */

        }, {
          key: "obd2AutoLink",
          value: function obd2AutoLink() {
            var cb = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee264() {
              var linkedPro;
              return _regeneratorRuntime().wrap(function _callee264$(_context264) {
                while (1) switch (_context264.prev = _context264.next) {
                  case 0:
                    _context264.prev = 0;
                    _context264.next = 3;
                    return this.obd2Query(cb);

                  case 3:
                    linkedPro = _context264.sent;

                    if (!(linkedPro == _standard_enums__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_NO)) {
                      _context264.next = 6;
                      break;
                    }

                    return _context264.abrupt("return", false);

                  case 6:
                    _context264.next = 8;
                    return this.obd2RetriveData(cb);

                  case 8:
                    return _context264.abrupt("return", true);

                  case 11:
                    _context264.prev = 11;
                    _context264.t0 = _context264["catch"](0);
                    return _context264.abrupt("return", false);

                  case 14:
                  case "end":
                    return _context264.stop();
                }
              }, _callee264, this, [[0, 11]]);
            }));
          }
        }, {
          key: "obd2FFDTCMonLink",
          value: function obd2FFDTCMonLink() {
            var cb = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee265() {
              var linkedPro;
              return _regeneratorRuntime().wrap(function _callee265$(_context265) {
                while (1) switch (_context265.prev = _context265.next) {
                  case 0:
                    _context265.prev = 0;
                    _context265.next = 3;
                    return this.obd2Query(cb);

                  case 3:
                    linkedPro = _context265.sent;

                    if (!(linkedPro == _standard_enums__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_NO)) {
                      _context265.next = 6;
                      break;
                    }

                    return _context265.abrupt("return", false);

                  case 6:
                    _context265.next = 8;
                    return this.obd2FFDTCMonRetriveData(cb);

                  case 8:
                    return _context265.abrupt("return", true);

                  case 11:
                    _context265.prev = 11;
                    _context265.t0 = _context265["catch"](0);
                    return _context265.abrupt("return", false);

                  case 14:
                  case "end":
                    return _context265.stop();
                }
              }, _callee265, this, [[0, 11]]);
            }));
          }
        }, {
          key: "obd2DTCLink",
          value: function obd2DTCLink() {
            var cb = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee266() {
              var linkedPro;
              return _regeneratorRuntime().wrap(function _callee266$(_context266) {
                while (1) switch (_context266.prev = _context266.next) {
                  case 0:
                    _context266.prev = 0;
                    _context266.next = 3;
                    return this.obd2Query(cb);

                  case 3:
                    linkedPro = _context266.sent;

                    if (!(linkedPro == _standard_enums__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_NO)) {
                      _context266.next = 6;
                      break;
                    }

                    return _context266.abrupt("return", false);

                  case 6:
                    _context266.next = 8;
                    return this.obd2DTCRetriveData(cb);

                  case 8:
                    return _context266.abrupt("return", true);

                  case 11:
                    _context266.prev = 11;
                    _context266.t0 = _context266["catch"](0);
                    return _context266.abrupt("return", false);

                  case 14:
                  case "end":
                    return _context266.stop();
                }
              }, _callee266, this, [[0, 11]]);
            }));
          }
        }, {
          key: "obd2QuickLink",
          value: function obd2QuickLink() {
            var cb = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee267() {
              var linkedPro;
              return _regeneratorRuntime().wrap(function _callee267$(_context267) {
                while (1) switch (_context267.prev = _context267.next) {
                  case 0:
                    _context267.prev = 0;
                    _context267.next = 3;
                    return this.obd2Query(cb);

                  case 3:
                    linkedPro = _context267.sent;

                    if (!(linkedPro == _standard_enums__WEBPACK_IMPORTED_MODULE_0__.enumProtocol.eprotocol_PROTOCOL_NO)) {
                      _context267.next = 6;
                      break;
                    }

                    return _context267.abrupt("return", false);

                  case 6:
                    _context267.next = 8;
                    return this.obd2QuickRetriveData(cb);

                  case 8:
                    return _context267.abrupt("return", true);

                  case 11:
                    _context267.prev = 11;
                    _context267.t0 = _context267["catch"](0);
                    return _context267.abrupt("return", false);

                  case 14:
                  case "end":
                    return _context267.stop();
                }
              }, _callee267, this, [[0, 11]]);
            }));
          }
        }, {
          key: "testdata",
          value: function testdata(eprotocol) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee268() {
              var resp;
              return _regeneratorRuntime().wrap(function _callee268$(_context268) {
                while (1) switch (_context268.prev = _context268.next) {
                  case 0:
                    _context268.next = 2;
                    return this.obd2.QueryProtocolCAN(eprotocol);

                  case 2:
                    resp = _context268.sent;
                    this.log('response data :' + JSON.stringify(resp));
                    return _context268.abrupt("return", resp);

                  case 5:
                  case "end":
                    return _context268.stop();
                }
              }, _callee268, this);
            }));
          }
        }, {
          key: "log",
          value: function log(t) {
            this.notifyService.log(t);
          }
          /**
           * [setYmmeProfile set ymmeprofile]
           * @param  manufacture_enum [any]
           * @param  year_enum                     [any]
           * @param  make_enum                     [any]
           * @param  model_enum                    [any]
           * @param  engine_enum                   [any]
           * @param  trim_enum                     [any]
           * @param  option_enum                   [any]
           * @param  transmission_enum             [any]
           * @return            Promise<boolean>
           */

        }, {
          key: "setYmmeProfile",
          value: function setYmmeProfile() {
            var ymmeprofile = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
              manufacture_enum: undefined,
              year_enum: undefined,
              make_enum: undefined,
              model_enum: undefined,
              engine_enum: undefined,
              trim_enum: undefined,
              option_enum: undefined,
              transmission_enum: undefined
            };
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee269() {
              return _regeneratorRuntime().wrap(function _callee269$(_context269) {
                while (1) switch (_context269.prev = _context269.next) {
                  case 0:
                    this.log(JSON.stringify(ymmeprofile));
                    _context269.next = 3;
                    return this.nwscan.setYmmeProfile(ymmeprofile);

                  case 3:
                    return _context269.abrupt("return", _context269.sent);

                  case 4:
                  case "end":
                    return _context269.stop();
                }
              }, _callee269, this);
            }));
          }
          /**
           * [getYMMEProfile get the current ymmeprofile]
           * @return Promise<any>
           */

        }, {
          key: "getYMMEProfile",
          value: function getYMMEProfile() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee270() {
              return _regeneratorRuntime().wrap(function _callee270$(_context270) {
                while (1) switch (_context270.prev = _context270.next) {
                  case 0:
                    _context270.next = 2;
                    return this.nwscan.getYMMEProfile();

                  case 2:
                    return _context270.abrupt("return", _context270.sent);

                  case 3:
                  case "end":
                    return _context270.stop();
                }
              }, _callee270, this);
            }));
          }
          /**
           * [nwscan_getSupportSystem this function gets the list of supported systems]
           * @return Promise<{}>
           */

        }, {
          key: "nwscan_getSupportSystem",
          value: function nwscan_getSupportSystem() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee271() {
              return _regeneratorRuntime().wrap(function _callee271$(_context271) {
                while (1) switch (_context271.prev = _context271.next) {
                  case 0:
                    _context271.next = 2;
                    return this.nwscan.getSupportedOEMModules();

                  case 2:
                    return _context271.abrupt("return", _context271.sent);

                  case 3:
                  case "end":
                    return _context271.stop();
                }
              }, _callee271, this);
            }));
          }
          /**
           * [nwscan_eraseSystem Erase system and subSystem]
           * @param  {system,  subSystem} [system index and subsystem index]
           * @return            Promise<{}>
           */

        }, {
          key: "nwscan_eraseSystem",
          value: function nwscan_eraseSystem(_ref9) {
            var system = _ref9.system,
                subSystem = _ref9.subSystem;
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee272() {
              return _regeneratorRuntime().wrap(function _callee272$(_context272) {
                while (1) switch (_context272.prev = _context272.next) {
                  case 0:
                    _context272.next = 2;
                    return this.nwscan.eraseOEMSystem({
                      system: system,
                      subSystem: subSystem
                    });

                  case 2:
                    return _context272.abrupt("return", _context272.sent);

                  case 3:
                  case "end":
                    return _context272.stop();
                }
              }, _callee272, this);
            }));
          }
          /**
           * [nwscan_LinkSystem Link system and subSystem]
           * @param  {system,  subSystem} [system index and subsystem index]
           * @return      Promise<{}>
           */

        }, {
          key: "nwscan_LinkSystem",
          value: function nwscan_LinkSystem(_ref10) {
            var system = _ref10.system,
                subSystem = _ref10.subSystem;
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee273() {
              return _regeneratorRuntime().wrap(function _callee273$(_context273) {
                while (1) switch (_context273.prev = _context273.next) {
                  case 0:
                    _context273.next = 2;
                    return this.nwscan.getOEMSystem_quick({
                      system: system,
                      subSystem: subSystem
                    });

                  case 2:
                    return _context273.abrupt("return", _context273.sent);

                  case 3:
                  case "end":
                    return _context273.stop();
                }
              }, _callee273, this);
            }));
          }
        }, {
          key: "nwscan_getdtcdef",
          value: function nwscan_getdtcdef(_ref11) {
            var system = _ref11.system,
                subSystem = _ref11.subSystem,
                id = _ref11.id;
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee274() {
              return _regeneratorRuntime().wrap(function _callee274$(_context274) {
                while (1) switch (_context274.prev = _context274.next) {
                  case 0:
                    _context274.next = 2;
                    return this.nwscan.getDtcdef({
                      system: system,
                      subSystem: subSystem,
                      id: id
                    });

                  case 2:
                    return _context274.abrupt("return", _context274.sent);

                  case 3:
                  case "end":
                    return _context274.stop();
                }
              }, _callee274, this);
            }));
          }
        }, {
          key: "nwscan_getdtcdef_withgroup",
          value: function nwscan_getdtcdef_withgroup(_ref12) {
            var system = _ref12.system,
                subSystem = _ref12.subSystem,
                id = _ref12.id,
                group = _ref12.group;
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee275() {
              return _regeneratorRuntime().wrap(function _callee275$(_context275) {
                while (1) switch (_context275.prev = _context275.next) {
                  case 0:
                    _context275.next = 2;
                    return this.nwscan.getDtcdef_withgroup({
                      system: system,
                      subSystem: subSystem,
                      id: id,
                      group: group
                    });

                  case 2:
                    return _context275.abrupt("return", _context275.sent);

                  case 3:
                  case "end":
                    return _context275.stop();
                }
              }, _callee275, this);
            }));
          }
        }, {
          key: "nwscan_getdtc_listgroup",
          value: function nwscan_getdtc_listgroup(_ref13) {
            var system = _ref13.system,
                subSystem = _ref13.subSystem,
                id = _ref13.id;
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee276() {
              return _regeneratorRuntime().wrap(function _callee276$(_context276) {
                while (1) switch (_context276.prev = _context276.next) {
                  case 0:
                    _context276.next = 2;
                    return this.nwscan.getDtc_listInspecGroup({
                      system: system,
                      subSystem: subSystem,
                      id: id
                    });

                  case 2:
                    return _context276.abrupt("return", _context276.sent);

                  case 3:
                  case "end":
                    return _context276.stop();
                }
              }, _callee276, this);
            }));
          }
        }, {
          key: "nws_querySystem",
          value: function nws_querySystem(_ref14) {
            var system = _ref14.system,
                subSystem = _ref14.subSystem;
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee277() {
              return _regeneratorRuntime().wrap(function _callee277$(_context277) {
                while (1) switch (_context277.prev = _context277.next) {
                  case 0:
                    _context277.next = 2;
                    return this.nwscan.QueryOEMSystem({
                      system: system,
                      subSystem: subSystem
                    });

                  case 2:
                    return _context277.abrupt("return", _context277.sent);

                  case 3:
                  case "end":
                    return _context277.stop();
                }
              }, _callee277, this);
            }));
          }
        }, {
          key: "nws_exitSystem",
          value: function nws_exitSystem(_ref15) {
            var system = _ref15.system,
                subSystem = _ref15.subSystem;
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee278() {
              return _regeneratorRuntime().wrap(function _callee278$(_context278) {
                while (1) switch (_context278.prev = _context278.next) {
                  case 0:
                    _context278.next = 2;
                    return this.nwscan.ExitOEMSystem({
                      system: system,
                      subSystem: subSystem
                    });

                  case 2:
                    return _context278.abrupt("return", _context278.sent);

                  case 3:
                  case "end":
                    return _context278.stop();
                }
              }, _callee278, this);
            }));
          }
          /**
           * [getBatteryVoltage Get ECU battery voltage]
           * @return Promise<{BatteryVoltage:any,Unit:string}>
           */

        }, {
          key: "getBatteryVoltage",
          value: function getBatteryVoltage() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee279() {
              return _regeneratorRuntime().wrap(function _callee279$(_context279) {
                while (1) switch (_context279.prev = _context279.next) {
                  case 0:
                    _context279.next = 2;
                    return this.obdsystem.getECUVoltage();

                  case 2:
                    return _context279.abrupt("return", _context279.sent);

                  case 3:
                  case "end":
                    return _context279.stop();
                }
              }, _callee279, this);
            }));
          }
        }, {
          key: "setting_smogcheckstate",
          value: function setting_smogcheckstate(loc) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee280() {
              return _regeneratorRuntime().wrap(function _callee280$(_context280) {
                while (1) switch (_context280.prev = _context280.next) {
                  case 0:
                    _context280.next = 2;
                    return this.obd2.SetOBD2SmogCheckState(loc);

                  case 2:
                    return _context280.abrupt("return", _context280.sent);

                  case 3:
                  case "end":
                    return _context280.stop();
                }
              }, _callee280, this);
            }));
          }
        }, {
          key: "setting_smogcheckcountry",
          value: function setting_smogcheckcountry(loc) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee281() {
              return _regeneratorRuntime().wrap(function _callee281$(_context281) {
                while (1) switch (_context281.prev = _context281.next) {
                  case 0:
                    _context281.next = 2;
                    return this.obd2.SetOBD2SmogCheckCountry(loc);

                  case 2:
                    return _context281.abrupt("return", _context281.sent);

                  case 3:
                  case "end":
                    return _context281.stop();
                }
              }, _callee281, this);
            }));
          }
        }, {
          key: "getting_smogcheckstate",
          value: function getting_smogcheckstate() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee282() {
              return _regeneratorRuntime().wrap(function _callee282$(_context282) {
                while (1) switch (_context282.prev = _context282.next) {
                  case 0:
                    _context282.next = 2;
                    return this.obd2.GetOBD2SmogCheckState();

                  case 2:
                    return _context282.abrupt("return", _context282.sent);

                  case 3:
                  case "end":
                    return _context282.stop();
                }
              }, _callee282, this);
            }));
          }
        }, {
          key: "getting_smogcheckcountry",
          value: function getting_smogcheckcountry() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee283() {
              return _regeneratorRuntime().wrap(function _callee283$(_context283) {
                while (1) switch (_context283.prev = _context283.next) {
                  case 0:
                    _context283.next = 2;
                    return this.obd2.GetOBD2SmogCheckCountry();

                  case 2:
                    return _context283.abrupt("return", _context283.sent);

                  case 3:
                  case "end":
                    return _context283.stop();
                }
              }, _callee283, this);
            }));
          }
        }, {
          key: "getting_ledstatus",
          value: function getting_ledstatus() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee284() {
              return _regeneratorRuntime().wrap(function _callee284$(_context284) {
                while (1) switch (_context284.prev = _context284.next) {
                  case 0:
                    _context284.next = 2;
                    return this.obd2.GetOBD2LedStatus();

                  case 2:
                    return _context284.abrupt("return", _context284.sent);

                  case 3:
                  case "end":
                    return _context284.stop();
                }
              }, _callee284, this);
            }));
          }
        }, {
          key: "setting_fueltype",
          value: function setting_fueltype(type) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee285() {
              return _regeneratorRuntime().wrap(function _callee285$(_context285) {
                while (1) switch (_context285.prev = _context285.next) {
                  case 0:
                    _context285.next = 2;
                    return this.obd2.SetFuelType(type);

                  case 2:
                    return _context285.abrupt("return", _context285.sent);

                  case 3:
                  case "end":
                    return _context285.stop();
                }
              }, _callee285, this);
            }));
          }
        }, {
          key: "getting_fueltype",
          value: function getting_fueltype() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee286() {
              return _regeneratorRuntime().wrap(function _callee286$(_context286) {
                while (1) switch (_context286.prev = _context286.next) {
                  case 0:
                    _context286.next = 2;
                    return this.obd2.GetFuelType();

                  case 2:
                    return _context286.abrupt("return", _context286.sent);

                  case 3:
                  case "end":
                    return _context286.stop();
                }
              }, _callee286, this);
            }));
          }
        }, {
          key: "setting_vehtype",
          value: function setting_vehtype(type) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee287() {
              return _regeneratorRuntime().wrap(function _callee287$(_context287) {
                while (1) switch (_context287.prev = _context287.next) {
                  case 0:
                    _context287.next = 2;
                    return this.obd2.SetVehType(type);

                  case 2:
                    return _context287.abrupt("return", _context287.sent);

                  case 3:
                  case "end":
                    return _context287.stop();
                }
              }, _callee287, this);
            }));
          }
        }, {
          key: "getting_vehtype",
          value: function getting_vehtype() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee288() {
              return _regeneratorRuntime().wrap(function _callee288$(_context288) {
                while (1) switch (_context288.prev = _context288.next) {
                  case 0:
                    _context288.next = 2;
                    return this.obd2.GetVehType();

                  case 2:
                    return _context288.abrupt("return", _context288.sent);

                  case 3:
                  case "end":
                    return _context288.stop();
                }
              }, _callee288, this);
            }));
          }
        }, {
          key: "setting_getguid",
          value: function setting_getguid() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee289() {
              return _regeneratorRuntime().wrap(function _callee289$(_context289) {
                while (1) switch (_context289.prev = _context289.next) {
                  case 0:
                    _context289.next = 2;
                    return this.obdsystem.readGUID();

                  case 2:
                    return _context289.abrupt("return", _context289.sent);

                  case 3:
                  case "end":
                    return _context289.stop();
                }
              }, _callee289, this);
            }));
          }
        }, {
          key: "setting_setguid",
          value: function setting_setguid(guid) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee290() {
              return _regeneratorRuntime().wrap(function _callee290$(_context290) {
                while (1) switch (_context290.prev = _context290.next) {
                  case 0:
                    _context290.next = 2;
                    return this.obdsystem.writeGUID(guid);

                  case 2:
                    return _context290.abrupt("return", _context290.sent);

                  case 3:
                  case "end":
                    return _context290.stop();
                }
              }, _callee290, this);
            }));
          }
        }, {
          key: "setting_unittype",
          value: function setting_unittype(unittype) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee291() {
              return _regeneratorRuntime().wrap(function _callee291$(_context291) {
                while (1) switch (_context291.prev = _context291.next) {
                  case 0:
                    _context291.next = 2;
                    return this.obdsystem.settingUnitType(unittype);

                  case 2:
                    return _context291.abrupt("return", _context291.sent);

                  case 3:
                  case "end":
                    return _context291.stop();
                }
              }, _callee291, this);
            }));
          }
        }, {
          key: "setting_language",
          value: function setting_language(lang_id) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee292() {
              return _regeneratorRuntime().wrap(function _callee292$(_context292) {
                while (1) switch (_context292.prev = _context292.next) {
                  case 0:
                    _context292.next = 2;
                    return this.obdsystem.SettingLanguage(lang_id);

                  case 2:
                    return _context292.abrupt("return", _context292.sent);

                  case 3:
                  case "end":
                    return _context292.stop();
                }
              }, _callee292, this);
            }));
          }
        }, {
          key: "getodometer_pidsupport",
          value: function getodometer_pidsupport() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee293() {
              return _regeneratorRuntime().wrap(function _callee293$(_context293) {
                while (1) switch (_context293.prev = _context293.next) {
                  case 0:
                    _context293.next = 2;
                    return this.ofm.ofm_getodometer_pidsupport();

                  case 2:
                    return _context293.abrupt("return", _context293.sent);

                  case 3:
                  case "end":
                    return _context293.stop();
                }
              }, _callee293, this);
            }));
          }
        }, {
          key: "getservicecheck_pidsupport",
          value: function getservicecheck_pidsupport() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee294() {
              return _regeneratorRuntime().wrap(function _callee294$(_context294) {
                while (1) switch (_context294.prev = _context294.next) {
                  case 0:
                    _context294.next = 2;
                    return this.ofm.ofm_getservicecheck_pidsupport();

                  case 2:
                    return _context294.abrupt("return", _context294.sent);

                  case 3:
                  case "end":
                    return _context294.stop();
                }
              }, _callee294, this);
            }));
          }
        }, {
          key: "getwarninglight_pidsupport",
          value: function getwarninglight_pidsupport() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee295() {
              return _regeneratorRuntime().wrap(function _callee295$(_context295) {
                while (1) switch (_context295.prev = _context295.next) {
                  case 0:
                    _context295.next = 2;
                    return this.ofm.ofm_getwarninglight_pidsupport();

                  case 2:
                    return _context295.abrupt("return", _context295.sent);

                  case 3:
                  case "end":
                    return _context295.stop();
                }
              }, _callee295, this);
            }));
          }
        }, {
          key: "gettpmspid_pidsupport",
          value: function gettpmspid_pidsupport() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee296() {
              return _regeneratorRuntime().wrap(function _callee296$(_context296) {
                while (1) switch (_context296.prev = _context296.next) {
                  case 0:
                    _context296.next = 2;
                    return this.ofm.ofm_gettpms_pidsupport();

                  case 2:
                    return _context296.abrupt("return", _context296.sent);

                  case 3:
                  case "end":
                    return _context296.stop();
                }
              }, _callee296, this);
            }));
          }
        }, {
          key: "getofmprofileid_value",
          value: function getofmprofileid_value(profileid) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee297() {
              return _regeneratorRuntime().wrap(function _callee297$(_context297) {
                while (1) switch (_context297.prev = _context297.next) {
                  case 0:
                    _context297.next = 2;
                    return this.ofm.getofmprofileid_value(profileid);

                  case 2:
                    return _context297.abrupt("return", _context297.sent);

                  case 3:
                  case "end":
                    return _context297.stop();
                }
              }, _callee297, this);
            }));
          }
        }, {
          key: "ofm_getitemname",
          value: function ofm_getitemname(itemid) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee298() {
              return _regeneratorRuntime().wrap(function _callee298$(_context298) {
                while (1) switch (_context298.prev = _context298.next) {
                  case 0:
                    return _context298.abrupt("return", _obd_vcistd__WEBPACK_IMPORTED_MODULE_2__.Enum_ofm_Items[itemid]);

                  case 1:
                  case "end":
                    return _context298.stop();
                }
              }, _callee298);
            }));
          }
        }, {
          key: "nws_getdtcgroup_all",
          value: function nws_getdtcgroup_all() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee299() {
              return _regeneratorRuntime().wrap(function _callee299$(_context299) {
                while (1) switch (_context299.prev = _context299.next) {
                  case 0:
                    _context299.next = 2;
                    return this.nwscan.getInnovaGroupDtc(_standard_enums__WEBPACK_IMPORTED_MODULE_0__.enumInnovagroup.einnovagroup_INNOVA_GROUP_UNKNOW);

                  case 2:
                    return _context299.abrupt("return", _context299.sent);

                  case 3:
                  case "end":
                    return _context299.stop();
                }
              }, _callee299, this);
            }));
          }
        }, {
          key: "ld_abs_get_ListItem_Val",
          value: function ld_abs_get_ListItem_Val(start_idx, end_idx) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee300() {
              return _regeneratorRuntime().wrap(function _callee300$(_context300) {
                while (1) switch (_context300.prev = _context300.next) {
                  case 0:
                    _context300.next = 2;
                    return this.livedata.getlivedata_list_itemval_v2(_standard_enums__WEBPACK_IMPORTED_MODULE_0__.enumInnovagroup.einnovagroup_GROUP_ABS, start_idx, end_idx);

                  case 2:
                    return _context300.abrupt("return", _context300.sent);

                  case 3:
                  case "end":
                    return _context300.stop();
                }
              }, _callee300, this);
            }));
          }
        }, {
          key: "ld_srs_get_ListItem_Val",
          value: function ld_srs_get_ListItem_Val(start_idx, end_idx) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee301() {
              return _regeneratorRuntime().wrap(function _callee301$(_context301) {
                while (1) switch (_context301.prev = _context301.next) {
                  case 0:
                    _context301.next = 2;
                    return this.livedata.getlivedata_list_itemval_v2(_standard_enums__WEBPACK_IMPORTED_MODULE_0__.enumInnovagroup.einnovagroup_GROUP_SRS, start_idx, end_idx);

                  case 2:
                    return _context301.abrupt("return", _context301.sent);

                  case 3:
                  case "end":
                    return _context301.stop();
                }
              }, _callee301, this);
            }));
          }
        }, {
          key: "ld_ecm_get_ListItem_Val",
          value: function ld_ecm_get_ListItem_Val(start_idx, end_idx) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee302() {
              return _regeneratorRuntime().wrap(function _callee302$(_context302) {
                while (1) switch (_context302.prev = _context302.next) {
                  case 0:
                    _context302.next = 2;
                    return this.livedata.getlivedata_list_itemval_v2(_standard_enums__WEBPACK_IMPORTED_MODULE_0__.enumInnovagroup.einnovagroup_GROUP_ENH_ECM, start_idx, end_idx);

                  case 2:
                    return _context302.abrupt("return", _context302.sent);

                  case 3:
                  case "end":
                    return _context302.stop();
                }
              }, _callee302, this);
            }));
          }
        }, {
          key: "ld_others_get_ListItem_Val",
          value: function ld_others_get_ListItem_Val(start_idx, end_idx) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee303() {
              return _regeneratorRuntime().wrap(function _callee303$(_context303) {
                while (1) switch (_context303.prev = _context303.next) {
                  case 0:
                    _context303.next = 2;
                    return this.livedata.getlivedata_list_itemval_v2(_standard_enums__WEBPACK_IMPORTED_MODULE_0__.enumInnovagroup.einnovagroup_INNOVA_GROUP_UNKNOW, start_idx, end_idx);

                  case 2:
                    return _context303.abrupt("return", _context303.sent);

                  case 3:
                  case "end":
                    return _context303.stop();
                }
              }, _callee303, this);
            }));
          }
        }, {
          key: "ld_obd2_get_ListItem_Val",
          value: function ld_obd2_get_ListItem_Val(start_idx, end_idx) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee304() {
              return _regeneratorRuntime().wrap(function _callee304$(_context304) {
                while (1) switch (_context304.prev = _context304.next) {
                  case 0:
                    _context304.next = 2;
                    return this.livedata.getlivedata_list_itemval(_standard_enums__WEBPACK_IMPORTED_MODULE_0__.enumInnovagroup.einnovagroup_GROUP_OBDII, start_idx, end_idx);

                  case 2:
                    return _context304.abrupt("return", _context304.sent);

                  case 3:
                  case "end":
                    return _context304.stop();
                }
              }, _callee304, this);
            }));
          }
        }, {
          key: "ld_hybrid_ld_ListItem_Val",
          value: function ld_hybrid_ld_ListItem_Val(start_idx, end_idx) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee305() {
              return _regeneratorRuntime().wrap(function _callee305$(_context305) {
                while (1) switch (_context305.prev = _context305.next) {
                  case 0:
                    _context305.next = 2;
                    return this.livedata.getlivedata_list_itemval(_standard_enums__WEBPACK_IMPORTED_MODULE_0__.enumInnovagroup.einnovagroup_INNOVA_GROUP_UNKNOW, start_idx, end_idx);

                  case 2:
                    return _context305.abrupt("return", _context305.sent);

                  case 3:
                  case "end":
                    return _context305.stop();
                }
              }, _callee305, this);
            }));
          }
        }, {
          key: "ld_hybrid_ld_get_itemval",
          value: function ld_hybrid_ld_get_itemval(itemid) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee306() {
              return _regeneratorRuntime().wrap(function _callee306$(_context306) {
                while (1) switch (_context306.prev = _context306.next) {
                  case 0:
                    _context306.next = 2;
                    return this.livedata.getlivedata_itemval(_standard_enums__WEBPACK_IMPORTED_MODULE_0__.enumInnovagroup.einnovagroup_INNOVA_GROUP_UNKNOW, itemid);

                  case 2:
                    return _context306.abrupt("return", _context306.sent);

                  case 3:
                  case "end":
                    return _context306.stop();
                }
              }, _callee306, this);
            }));
          }
        }, {
          key: "ld_disable_dtc_trigger",
          value: function ld_disable_dtc_trigger() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee307() {
              return _regeneratorRuntime().wrap(function _callee307$(_context307) {
                while (1) switch (_context307.prev = _context307.next) {
                  case 0:
                    _context307.next = 2;
                    return this.livedata.disable_dtc_trigger();

                  case 2:
                    return _context307.abrupt("return", _context307.sent);

                  case 3:
                  case "end":
                    return _context307.stop();
                }
              }, _callee307, this);
            }));
          }
        }, {
          key: "ld_enable_dtc_trigger",
          value: function ld_enable_dtc_trigger() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee308() {
              return _regeneratorRuntime().wrap(function _callee308$(_context308) {
                while (1) switch (_context308.prev = _context308.next) {
                  case 0:
                    _context308.next = 2;
                    return this.livedata.enable_dtc_trigger();

                  case 2:
                    return _context308.abrupt("return", _context308.sent);

                  case 3:
                  case "end":
                    return _context308.stop();
                }
              }, _callee308, this);
            }));
          }
        }, {
          key: "ld_hybrid_get_info",
          value: function ld_hybrid_get_info() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee309() {
              return _regeneratorRuntime().wrap(function _callee309$(_context309) {
                while (1) switch (_context309.prev = _context309.next) {
                  case 0:
                    _context309.next = 2;
                    return this.livedata.getlivedata_hybrid_info();

                  case 2:
                    return _context309.abrupt("return", _context309.sent);

                  case 3:
                  case "end":
                    return _context309.stop();
                }
              }, _callee309, this);
            }));
          }
          /**
           * [getVehReport_MIL_Status get Mil Status report]
           * @return Promise<{MilStatus:status}> status : ON or OFF
           */

        }, {
          key: "getVehReport_MIL_Status",
          value: function getVehReport_MIL_Status() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee310() {
              return _regeneratorRuntime().wrap(function _callee310$(_context310) {
                while (1) switch (_context310.prev = _context310.next) {
                  case 0:
                    _context310.next = 2;
                    return this.obd2.getVehReport_MIL_Status();

                  case 2:
                    return _context310.abrupt("return", _context310.sent);

                  case 3:
                  case "end":
                    return _context310.stop();
                }
              }, _callee310, this);
            }));
          }
        }, {
          key: "getVehReport_DriveCycle_Mon_List",
          value: function getVehReport_DriveCycle_Mon_List() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee311() {
              return _regeneratorRuntime().wrap(function _callee311$(_context311) {
                while (1) switch (_context311.prev = _context311.next) {
                  case 0:
                    _context311.next = 2;
                    return this.obd2.getVehReport_DriveCycle_Mon_List();

                  case 2:
                    return _context311.abrupt("return", _context311.sent);

                  case 3:
                  case "end":
                    return _context311.stop();
                }
              }, _callee311, this);
            }));
          }
        }, {
          key: "getVehReport_DriveCycle_Mon_Text",
          value: function getVehReport_DriveCycle_Mon_Text(textid) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee312() {
              return _regeneratorRuntime().wrap(function _callee312$(_context312) {
                while (1) switch (_context312.prev = _context312.next) {
                  case 0:
                    _context312.next = 2;
                    return this.obd2.getVehReport_DriveCycle_Mon_Text(textid);

                  case 2:
                    return _context312.abrupt("return", _context312.sent);

                  case 3:
                  case "end":
                    return _context312.stop();
                }
              }, _callee312, this);
            }));
          } //symptom diagnostic here

        }, {
          key: "symptom_init",
          value: function symptom_init() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee313() {
              return _regeneratorRuntime().wrap(function _callee313$(_context313) {
                while (1) switch (_context313.prev = _context313.next) {
                  case 0:
                    _context313.next = 2;
                    return this.symptom.initprocess();

                  case 2:
                    return _context313.abrupt("return", _context313.sent);

                  case 3:
                  case "end":
                    return _context313.stop();
                }
              }, _callee313, this);
            }));
          }
        }, {
          key: "getsymptom_screenui",
          value: function getsymptom_screenui() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee314() {
              return _regeneratorRuntime().wrap(function _callee314$(_context314) {
                while (1) switch (_context314.prev = _context314.next) {
                  case 0:
                    _context314.next = 2;
                    return this.symptom.getScreen_UI();

                  case 2:
                    return _context314.abrupt("return", _context314.sent);

                  case 3:
                  case "end":
                    return _context314.stop();
                }
              }, _callee314, this);
            }));
          }
        }, {
          key: "setSymptom_SetNormalSelection",
          value: function setSymptom_SetNormalSelection(index) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee315() {
              return _regeneratorRuntime().wrap(function _callee315$(_context315) {
                while (1) switch (_context315.prev = _context315.next) {
                  case 0:
                    _context315.next = 2;
                    return this.symptom.set_useroptionselection(index);

                  case 2:
                    return _context315.abrupt("return", _context315.sent);

                  case 3:
                  case "end":
                    return _context315.stop();
                }
              }, _callee315, this);
            }));
          }
        }, {
          key: "setSymptom_SetSoftkeySelection",
          value: function setSymptom_SetSoftkeySelection(index) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee316() {
              return _regeneratorRuntime().wrap(function _callee316$(_context316) {
                while (1) switch (_context316.prev = _context316.next) {
                  case 0:
                    _context316.next = 2;
                    return this.symptom.set_softkeyselection(index);

                  case 2:
                    return _context316.abrupt("return", _context316.sent);

                  case 3:
                  case "end":
                    return _context316.stop();
                }
              }, _callee316, this);
            }));
          } // Live Data

        }, {
          key: "ld_obd2_get_itemlist",
          value: function ld_obd2_get_itemlist() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee317() {
              return _regeneratorRuntime().wrap(function _callee317$(_context317) {
                while (1) switch (_context317.prev = _context317.next) {
                  case 0:
                    _context317.next = 2;
                    return this.livedata.getOBD2_LiveDataListPIDsupport();

                  case 2:
                    return _context317.abrupt("return", _context317.sent);

                  case 3:
                  case "end":
                    return _context317.stop();
                }
              }, _callee317, this);
            }));
          }
        }, {
          key: "ld_obd2_get_itemval",
          value: function ld_obd2_get_itemval(itemid) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee318() {
              return _regeneratorRuntime().wrap(function _callee318$(_context318) {
                while (1) switch (_context318.prev = _context318.next) {
                  case 0:
                    _context318.next = 2;
                    return this.livedata.getOBD2_LiveDataItem_Val(itemid);

                  case 2:
                    return _context318.abrupt("return", _context318.sent);

                  case 3:
                  case "end":
                    return _context318.stop();
                }
              }, _callee318, this);
            }));
          }
        }, {
          key: "ld_abs_get_itemlist",
          value: function ld_abs_get_itemlist() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee319() {
              return _regeneratorRuntime().wrap(function _callee319$(_context319) {
                while (1) switch (_context319.prev = _context319.next) {
                  case 0:
                    _context319.next = 2;
                    return this.livedata.getABS_LiveDataListPIDsupport();

                  case 2:
                    return _context319.abrupt("return", _context319.sent);

                  case 3:
                  case "end":
                    return _context319.stop();
                }
              }, _callee319, this);
            }));
          }
        }, {
          key: "ld_abs_get_itemval",
          value: function ld_abs_get_itemval(itemid) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee320() {
              return _regeneratorRuntime().wrap(function _callee320$(_context320) {
                while (1) switch (_context320.prev = _context320.next) {
                  case 0:
                    _context320.next = 2;
                    return this.livedata.getABS_LiveDataItem_Val(itemid);

                  case 2:
                    return _context320.abrupt("return", _context320.sent);

                  case 3:
                  case "end":
                    return _context320.stop();
                }
              }, _callee320, this);
            }));
          }
        }, {
          key: "ld_srs_get_itemlist",
          value: function ld_srs_get_itemlist() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee321() {
              return _regeneratorRuntime().wrap(function _callee321$(_context321) {
                while (1) switch (_context321.prev = _context321.next) {
                  case 0:
                    _context321.next = 2;
                    return this.livedata.getSRS_LiveDataListPIDsupport();

                  case 2:
                    return _context321.abrupt("return", _context321.sent);

                  case 3:
                  case "end":
                    return _context321.stop();
                }
              }, _callee321, this);
            }));
          }
        }, {
          key: "ld_srs_get_itemval",
          value: function ld_srs_get_itemval(itemid) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee322() {
              return _regeneratorRuntime().wrap(function _callee322$(_context322) {
                while (1) switch (_context322.prev = _context322.next) {
                  case 0:
                    _context322.next = 2;
                    return this.livedata.getSRS_LiveDataItem_Val(itemid);

                  case 2:
                    return _context322.abrupt("return", _context322.sent);

                  case 3:
                  case "end":
                    return _context322.stop();
                }
              }, _callee322, this);
            }));
          }
        }, {
          key: "ld_ecm_get_itemlist",
          value: function ld_ecm_get_itemlist() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee323() {
              return _regeneratorRuntime().wrap(function _callee323$(_context323) {
                while (1) switch (_context323.prev = _context323.next) {
                  case 0:
                    _context323.next = 2;
                    return this.livedata.getECM_LiveDataListPIDsupport();

                  case 2:
                    return _context323.abrupt("return", _context323.sent);

                  case 3:
                  case "end":
                    return _context323.stop();
                }
              }, _callee323, this);
            }));
          }
        }, {
          key: "ld_ecm_get_itemval",
          value: function ld_ecm_get_itemval(itemid) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee324() {
              return _regeneratorRuntime().wrap(function _callee324$(_context324) {
                while (1) switch (_context324.prev = _context324.next) {
                  case 0:
                    _context324.next = 2;
                    return this.livedata.getECM_LiveDataItem_Val(itemid);

                  case 2:
                    return _context324.abrupt("return", _context324.sent);

                  case 3:
                  case "end":
                    return _context324.stop();
                }
              }, _callee324, this);
            }));
          }
        }, {
          key: "ld_other_get_itemval",
          value: function ld_other_get_itemval(itemid) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee325() {
              return _regeneratorRuntime().wrap(function _callee325$(_context325) {
                while (1) switch (_context325.prev = _context325.next) {
                  case 0:
                    _context325.next = 2;
                    return this.livedata.getOther_LiveDataItem_Val(itemid);

                  case 2:
                    return _context325.abrupt("return", _context325.sent);

                  case 3:
                  case "end":
                    return _context325.stop();
                }
              }, _callee325, this);
            }));
          }
        }, {
          key: "ld_obd2_get_iteminfo",
          value: function ld_obd2_get_iteminfo(itemid) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee326() {
              return _regeneratorRuntime().wrap(function _callee326$(_context326) {
                while (1) switch (_context326.prev = _context326.next) {
                  case 0:
                    _context326.next = 2;
                    return this.livedata.getlivedata_iteminfo(_standard_enums__WEBPACK_IMPORTED_MODULE_0__.enumInnovagroup.einnovagroup_GROUP_OBDII, itemid);

                  case 2:
                    return _context326.abrupt("return", _context326.sent);

                  case 3:
                  case "end":
                    return _context326.stop();
                }
              }, _callee326, this);
            }));
          }
        }, {
          key: "ld_abs_get_iteminfo",
          value: function ld_abs_get_iteminfo(itemid) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee327() {
              return _regeneratorRuntime().wrap(function _callee327$(_context327) {
                while (1) switch (_context327.prev = _context327.next) {
                  case 0:
                    _context327.next = 2;
                    return this.livedata.getlivedata_iteminfo(_standard_enums__WEBPACK_IMPORTED_MODULE_0__.enumInnovagroup.einnovagroup_GROUP_ABS, itemid);

                  case 2:
                    return _context327.abrupt("return", _context327.sent);

                  case 3:
                  case "end":
                    return _context327.stop();
                }
              }, _callee327, this);
            }));
          }
        }, {
          key: "ld_srs_get_iteminfo",
          value: function ld_srs_get_iteminfo(itemid) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee328() {
              return _regeneratorRuntime().wrap(function _callee328$(_context328) {
                while (1) switch (_context328.prev = _context328.next) {
                  case 0:
                    _context328.next = 2;
                    return this.livedata.getlivedata_iteminfo(_standard_enums__WEBPACK_IMPORTED_MODULE_0__.enumInnovagroup.einnovagroup_GROUP_SRS, itemid);

                  case 2:
                    return _context328.abrupt("return", _context328.sent);

                  case 3:
                  case "end":
                    return _context328.stop();
                }
              }, _callee328, this);
            }));
          }
        }, {
          key: "ld_ecm_get_iteminfo",
          value: function ld_ecm_get_iteminfo(itemid) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee329() {
              return _regeneratorRuntime().wrap(function _callee329$(_context329) {
                while (1) switch (_context329.prev = _context329.next) {
                  case 0:
                    _context329.next = 2;
                    return this.livedata.getlivedata_iteminfo(_standard_enums__WEBPACK_IMPORTED_MODULE_0__.enumInnovagroup.einnovagroup_GROUP_ENH_ECM, itemid);

                  case 2:
                    return _context329.abrupt("return", _context329.sent);

                  case 3:
                  case "end":
                    return _context329.stop();
                }
              }, _callee329, this);
            }));
          }
        }, {
          key: "ld_others_get_iteminfo",
          value: function ld_others_get_iteminfo(itemid) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee330() {
              return _regeneratorRuntime().wrap(function _callee330$(_context330) {
                while (1) switch (_context330.prev = _context330.next) {
                  case 0:
                    _context330.next = 2;
                    return this.livedata.getlivedata_iteminfo(_standard_enums__WEBPACK_IMPORTED_MODULE_0__.enumInnovagroup.einnovagroup_INNOVA_GROUP_UNKNOW, itemid);

                  case 2:
                    return _context330.abrupt("return", _context330.sent);

                  case 3:
                  case "end":
                    return _context330.stop();
                }
              }, _callee330, this);
            }));
          }
        }, {
          key: "ld_ecm_get_numbersupporteditem",
          value: function ld_ecm_get_numbersupporteditem() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee331() {
              return _regeneratorRuntime().wrap(function _callee331$(_context331) {
                while (1) switch (_context331.prev = _context331.next) {
                  case 0:
                    _context331.next = 2;
                    return this.livedata.getECM_LiveDataNumberItemSupport();

                  case 2:
                    return _context331.abrupt("return", _context331.sent);

                  case 3:
                  case "end":
                    return _context331.stop();
                }
              }, _callee331, this);
            }));
          }
        }, {
          key: "ld_abs_get_numbersupporteditem",
          value: function ld_abs_get_numbersupporteditem() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee332() {
              return _regeneratorRuntime().wrap(function _callee332$(_context332) {
                while (1) switch (_context332.prev = _context332.next) {
                  case 0:
                    _context332.next = 2;
                    return this.livedata.getABS_LiveDataNumberItemSupport();

                  case 2:
                    return _context332.abrupt("return", _context332.sent);

                  case 3:
                  case "end":
                    return _context332.stop();
                }
              }, _callee332, this);
            }));
          }
        }, {
          key: "ld_system_subsystem_numbersupporteditem",
          value: function ld_system_subsystem_numbersupporteditem(system, subsystem) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee333() {
              return _regeneratorRuntime().wrap(function _callee333$(_context333) {
                while (1) switch (_context333.prev = _context333.next) {
                  case 0:
                    _context333.next = 2;
                    return this.livedata.getlivedata_numberpidsuppport_other(system, subsystem);

                  case 2:
                    return _context333.abrupt("return", _context333.sent);

                  case 3:
                  case "end":
                    return _context333.stop();
                }
              }, _callee333, this);
            }));
          }
        }, {
          key: "ld_srs_get_numbersupporteditem",
          value: function ld_srs_get_numbersupporteditem() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee334() {
              return _regeneratorRuntime().wrap(function _callee334$(_context334) {
                while (1) switch (_context334.prev = _context334.next) {
                  case 0:
                    _context334.next = 2;
                    return this.livedata.getSRS_LiveDataNumberItemSupport();

                  case 2:
                    return _context334.abrupt("return", _context334.sent);

                  case 3:
                  case "end":
                    return _context334.stop();
                }
              }, _callee334, this);
            }));
          }
        }, {
          key: "ld_ecm_get_listinfo",
          value: function ld_ecm_get_listinfo(start, end) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee335() {
              return _regeneratorRuntime().wrap(function _callee335$(_context335) {
                while (1) switch (_context335.prev = _context335.next) {
                  case 0:
                    _context335.next = 2;
                    return this.livedata.getlivedata_listinfo(_standard_enums__WEBPACK_IMPORTED_MODULE_0__.enumInnovagroup.einnovagroup_GROUP_ENH_ECM, start, end);

                  case 2:
                    return _context335.abrupt("return", _context335.sent);

                  case 3:
                  case "end":
                    return _context335.stop();
                }
              }, _callee335, this);
            }));
          }
        }, {
          key: "ld_abs_get_listinfo",
          value: function ld_abs_get_listinfo(start, end) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee336() {
              return _regeneratorRuntime().wrap(function _callee336$(_context336) {
                while (1) switch (_context336.prev = _context336.next) {
                  case 0:
                    _context336.next = 2;
                    return this.livedata.getlivedata_listinfo(_standard_enums__WEBPACK_IMPORTED_MODULE_0__.enumInnovagroup.einnovagroup_GROUP_ABS, start, end);

                  case 2:
                    return _context336.abrupt("return", _context336.sent);

                  case 3:
                  case "end":
                    return _context336.stop();
                }
              }, _callee336, this);
            }));
          }
        }, {
          key: "ld_srs_get_listinfo",
          value: function ld_srs_get_listinfo(start, end) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee337() {
              return _regeneratorRuntime().wrap(function _callee337$(_context337) {
                while (1) switch (_context337.prev = _context337.next) {
                  case 0:
                    _context337.next = 2;
                    return this.livedata.getlivedata_listinfo(_standard_enums__WEBPACK_IMPORTED_MODULE_0__.enumInnovagroup.einnovagroup_GROUP_SRS, start, end);

                  case 2:
                    return _context337.abrupt("return", _context337.sent);

                  case 3:
                  case "end":
                    return _context337.stop();
                }
              }, _callee337, this);
            }));
          }
        }, {
          key: "ld_others_get_listinfo",
          value: function ld_others_get_listinfo(start, end) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee338() {
              return _regeneratorRuntime().wrap(function _callee338$(_context338) {
                while (1) switch (_context338.prev = _context338.next) {
                  case 0:
                    _context338.next = 2;
                    return this.livedata.getlivedata_listinfo(_standard_enums__WEBPACK_IMPORTED_MODULE_0__.enumInnovagroup.einnovagroup_INNOVA_GROUP_UNKNOW, start, end);

                  case 2:
                    return _context338.abrupt("return", _context338.sent);

                  case 3:
                  case "end":
                    return _context338.stop();
                }
              }, _callee338, this);
            }));
          } // Service Reset

        }, {
          key: "power_actual_test_enter_proc",
          value: function power_actual_test_enter_proc() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee339() {
              return _regeneratorRuntime().wrap(function _callee339$(_context339) {
                while (1) switch (_context339.prev = _context339.next) {
                  case 0:
                    _context339.next = 2;
                    return this.gui.proc_enter_proc(_obd_vcistd__WEBPACK_IMPORTED_MODULE_2__.SYS_PROC_ID.PROC_SYSTEM_AND_ACTUAL_TEST, _obd_vcistd__WEBPACK_IMPORTED_MODULE_2__.SYS_CMD_ID.CMD_INIT_PROC);

                  case 2:
                    return _context339.abrupt("return", _context339.sent);

                  case 3:
                  case "end":
                    return _context339.stop();
                }
              }, _callee339, this);
            }));
          }
        }, {
          key: "service_reset_proc_enter",
          value: function service_reset_proc_enter() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee340() {
              return _regeneratorRuntime().wrap(function _callee340$(_context340) {
                while (1) switch (_context340.prev = _context340.next) {
                  case 0:
                    _context340.next = 2;
                    return this.gui.proc_enter_proc(_obd_vcistd__WEBPACK_IMPORTED_MODULE_2__.SYS_PROC_ID.PROC_SERVICE_RESET, _obd_vcistd__WEBPACK_IMPORTED_MODULE_2__.SYS_CMD_ID.CMD_INIT_PROC);

                  case 2:
                    return _context340.abrupt("return", _context340.sent);

                  case 3:
                  case "end":
                    return _context340.stop();
                }
              }, _callee340, this);
            }));
          }
        }, {
          key: "oil_reset_enter_proc",
          value: function oil_reset_enter_proc() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee341() {
              return _regeneratorRuntime().wrap(function _callee341$(_context341) {
                while (1) switch (_context341.prev = _context341.next) {
                  case 0:
                    _context341.next = 2;
                    return this.gui.proc_enter_proc(_obd_vcistd__WEBPACK_IMPORTED_MODULE_2__.SYS_PROC_ID.PROC_OIL_RESET, _obd_vcistd__WEBPACK_IMPORTED_MODULE_2__.SYS_CMD_ID.CMD_INIT_PROC);

                  case 2:
                    return _context341.abrupt("return", _context341.sent);

                  case 3:
                  case "end":
                    return _context341.stop();
                }
              }, _callee341, this);
            }));
          }
        }, {
          key: "battery_reset_enter_proc",
          value: function battery_reset_enter_proc() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee342() {
              return _regeneratorRuntime().wrap(function _callee342$(_context342) {
                while (1) switch (_context342.prev = _context342.next) {
                  case 0:
                    _context342.next = 2;
                    return this.gui.proc_enter_proc(_obd_vcistd__WEBPACK_IMPORTED_MODULE_2__.SYS_PROC_ID.PROC_OEM_BAT_RESET, _obd_vcistd__WEBPACK_IMPORTED_MODULE_2__.SYS_CMD_ID.CMD_INIT_PROC);

                  case 2:
                    return _context342.abrupt("return", _context342.sent);

                  case 3:
                  case "end":
                    return _context342.stop();
                }
              }, _callee342, this);
            }));
          }
        }, {
          key: "epb_enter_proc",
          value: function epb_enter_proc() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee343() {
              return _regeneratorRuntime().wrap(function _callee343$(_context343) {
                while (1) switch (_context343.prev = _context343.next) {
                  case 0:
                    _context343.next = 2;
                    return this.gui.proc_enter_proc(_obd_vcistd__WEBPACK_IMPORTED_MODULE_2__.SYS_PROC_ID.PROC_EPB, _obd_vcistd__WEBPACK_IMPORTED_MODULE_2__.SYS_CMD_ID.CMD_INIT_PROC);

                  case 2:
                    return _context343.abrupt("return", _context343.sent);

                  case 3:
                  case "end":
                    return _context343.stop();
                }
              }, _callee343, this);
            }));
          }
        }, {
          key: "sas_enter_proc",
          value: function sas_enter_proc() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee344() {
              return _regeneratorRuntime().wrap(function _callee344$(_context344) {
                while (1) switch (_context344.prev = _context344.next) {
                  case 0:
                    _context344.next = 2;
                    return this.gui.proc_enter_proc(_obd_vcistd__WEBPACK_IMPORTED_MODULE_2__.SYS_PROC_ID.PROC_SAS_CALIBRATION, _obd_vcistd__WEBPACK_IMPORTED_MODULE_2__.SYS_CMD_ID.CMD_INIT_PROC);

                  case 2:
                    return _context344.abrupt("return", _context344.sent);

                  case 3:
                  case "end":
                    return _context344.stop();
                }
              }, _callee344, this);
            }));
          }
          /**
           * [specfunction_enter_proc enter proc special test]
           * @return [description]
           */

        }, {
          key: "spectest_enter_proc",
          value: function spectest_enter_proc() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee345() {
              return _regeneratorRuntime().wrap(function _callee345$(_context345) {
                while (1) switch (_context345.prev = _context345.next) {
                  case 0:
                    _context345.next = 2;
                    return this.gui.gui_proc_enter_specialFunction_feature(_obd_vcistd__WEBPACK_IMPORTED_MODULE_2__.SF_FunctionGroup.UNKNOWN);

                  case 2:
                    return _context345.abrupt("return", _context345.sent);

                  case 3:
                  case "end":
                    return _context345.stop();
                }
              }, _callee345, this);
            }));
          }
        }, {
          key: "spectest_activetest_set_module",
          value: function spectest_activetest_set_module(system, subsystem) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee346() {
              return _regeneratorRuntime().wrap(function _callee346$(_context346) {
                while (1) switch (_context346.prev = _context346.next) {
                  case 0:
                    _context346.next = 2;
                    return this.gui.gui_proc_sf_at_set_active_module(system, subsystem);

                  case 2:
                    return _context346.abrupt("return", _context346.sent);

                  case 3:
                  case "end":
                    return _context346.stop();
                }
              }, _callee346, this);
            }));
          }
        }, {
          key: "dpf_enter_proc",
          value: function dpf_enter_proc() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee347() {
              return _regeneratorRuntime().wrap(function _callee347$(_context347) {
                while (1) switch (_context347.prev = _context347.next) {
                  case 0:
                    _context347.next = 2;
                    return this.gui.proc_enter_proc(_obd_vcistd__WEBPACK_IMPORTED_MODULE_2__.SYS_PROC_ID.PROC_DPF_RESET, _obd_vcistd__WEBPACK_IMPORTED_MODULE_2__.SYS_CMD_ID.CMD_INIT_PROC);

                  case 2:
                    return _context347.abrupt("return", _context347.sent);

                  case 3:
                  case "end":
                    return _context347.stop();
                }
              }, _callee347, this);
            }));
          }
        }, {
          key: "actuatortest_enter_proc",
          value: function actuatortest_enter_proc() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee348() {
              return _regeneratorRuntime().wrap(function _callee348$(_context348) {
                while (1) switch (_context348.prev = _context348.next) {
                  case 0:
                    _context348.next = 2;
                    return this.gui.proc_enter_proc(_obd_vcistd__WEBPACK_IMPORTED_MODULE_2__.SYS_PROC_ID.PROC_ACTIVE_TEST, _obd_vcistd__WEBPACK_IMPORTED_MODULE_2__.SYS_CMD_ID.CMD_INIT_PROC);

                  case 2:
                    return _context348.abrupt("return", _context348.sent);

                  case 3:
                  case "end":
                    return _context348.stop();
                }
              }, _callee348, this);
            }));
          }
        }, {
          key: "tpms_reset_enter_proc",
          value: function tpms_reset_enter_proc() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee349() {
              return _regeneratorRuntime().wrap(function _callee349$(_context349) {
                while (1) switch (_context349.prev = _context349.next) {
                  case 0:
                    _context349.next = 2;
                    return this.gui.proc_enter_proc(_obd_vcistd__WEBPACK_IMPORTED_MODULE_2__.SYS_PROC_ID.PROC_TPMS_RESET_MENU, _obd_vcistd__WEBPACK_IMPORTED_MODULE_2__.SYS_CMD_ID.CMD_INIT_PROC);

                  case 2:
                    return _context349.abrupt("return", _context349.sent);

                  case 3:
                  case "end":
                    return _context349.stop();
                }
              }, _callee349, this);
            }));
          }
        }, {
          key: "battery_health_check_enter_proc",
          value: function battery_health_check_enter_proc() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee350() {
              return _regeneratorRuntime().wrap(function _callee350$(_context350) {
                while (1) switch (_context350.prev = _context350.next) {
                  case 0:
                    _context350.next = 2;
                    return this.gui.proc_enter_proc(_obd_vcistd__WEBPACK_IMPORTED_MODULE_2__.SYS_PROC_ID.PROC_BATTERY_HEALTH_CHECK, _obd_vcistd__WEBPACK_IMPORTED_MODULE_2__.SYS_CMD_ID.CMD_INIT_PROC);

                  case 2:
                    return _context350.abrupt("return", _context350.sent);

                  case 3:
                  case "end":
                    return _context350.stop();
                }
              }, _callee350, this);
            }));
          }
        }, {
          key: "gui_set_key_option_old",
          value: function gui_set_key_option_old(id) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee351() {
              return _regeneratorRuntime().wrap(function _callee351$(_context351) {
                while (1) switch (_context351.prev = _context351.next) {
                  case 0:
                    _context351.prev = 0;
                    _context351.next = 3;
                    return this.gui.set_param(_obd_vcistd__WEBPACK_IMPORTED_MODULE_2__.VCI_GUI_Param_Type.param_selection, id);

                  case 3:
                    _context351.next = 5;
                    return this.delay(100);

                  case 5:
                    _context351.next = 7;
                    return this.gui.gui_set_key_code(_obd_vcistd__WEBPACK_IMPORTED_MODULE_2__.GUI_KEY_CODE.GUI_KEY_ENTER);

                  case 7:
                    _context351.next = 12;
                    break;

                  case 9:
                    _context351.prev = 9;
                    _context351.t0 = _context351["catch"](0);
                    this.log('set key option issue:' + _context351.t0);

                  case 12:
                  case "end":
                    return _context351.stop();
                }
              }, _callee351, this, [[0, 9]]);
            }));
          } //

        }, {
          key: "gui_set_key_option",
          value: function gui_set_key_option(id) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee352() {
              return _regeneratorRuntime().wrap(function _callee352$(_context352) {
                while (1) switch (_context352.prev = _context352.next) {
                  case 0:
                    _context352.prev = 0;
                    _context352.next = 3;
                    return this.gui.gui_set_key_code_with_index(_obd_vcistd__WEBPACK_IMPORTED_MODULE_2__.GUI_KEY_CODE.GUI_KEY_ENTER, id);

                  case 3:
                    _context352.next = 8;
                    break;

                  case 5:
                    _context352.prev = 5;
                    _context352.t0 = _context352["catch"](0);
                    this.log('set key option issue:' + _context352.t0);

                  case 8:
                  case "end":
                    return _context352.stop();
                }
              }, _callee352, this, [[0, 5]]);
            }));
          }
        }, {
          key: "gui_set_softkey",
          value: function gui_set_softkey(type) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee353() {
              return _regeneratorRuntime().wrap(function _callee353$(_context353) {
                while (1) switch (_context353.prev = _context353.next) {
                  case 0:
                    if (!(type === "left")) {
                      _context353.next = 6;
                      break;
                    }

                    _context353.next = 3;
                    return this.gui.gui_set_key_code(_obd_vcistd__WEBPACK_IMPORTED_MODULE_2__.GUI_KEY_CODE.GUI_SOFTKEY_1);

                  case 3:
                    return _context353.abrupt("return", _context353.sent);

                  case 6:
                    _context353.next = 8;
                    return this.gui.gui_set_key_code(_obd_vcistd__WEBPACK_IMPORTED_MODULE_2__.GUI_KEY_CODE.GUI_SOFTKEY_2);

                  case 8:
                    return _context353.abrupt("return", _context353.sent);

                  case 9:
                  case "end":
                    return _context353.stop();
                }
              }, _callee353, this);
            }));
          }
        }, {
          key: "cancel_process",
          value: function cancel_process() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee354() {
              return _regeneratorRuntime().wrap(function _callee354$(_context354) {
                while (1) switch (_context354.prev = _context354.next) {
                  case 0:
                    _context354.next = 2;
                    return this.obd2.cancel_vci_process();

                  case 2:
                    return _context354.abrupt("return", _context354.sent);

                  case 3:
                  case "end":
                    return _context354.stop();
                }
              }, _callee354, this);
            }));
          }
        }, {
          key: "reset_fast_cancel",
          value: function reset_fast_cancel() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee355() {
              return _regeneratorRuntime().wrap(function _callee355$(_context355) {
                while (1) switch (_context355.prev = _context355.next) {
                  case 0:
                    _context355.next = 2;
                    return this.obd2.ResetFastCancel();

                  case 2:
                    return _context355.abrupt("return", _context355.sent);

                  case 3:
                  case "end":
                    return _context355.stop();
                }
              }, _callee355, this);
            }));
          }
        }, {
          key: "deregisterReceiveCb",
          value: function deregisterReceiveCb() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee356() {
              return _regeneratorRuntime().wrap(function _callee356$(_context356) {
                while (1) switch (_context356.prev = _context356.next) {
                  case 0:
                    this.commService.isRegisterCallBack = false;

                  case 1:
                  case "end":
                    return _context356.stop();
                }
              }, _callee356, this);
            }));
          }
        }, {
          key: "initGUIProc",
          value: function initGUIProc() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee357() {
              return _regeneratorRuntime().wrap(function _callee357$(_context357) {
                while (1) switch (_context357.prev = _context357.next) {
                  case 0:
                    this.commService.isRegisterCallBack = true;
                    this.commService.isConfirmNormal = false;

                  case 2:
                  case "end":
                    return _context357.stop();
                }
              }, _callee357, this);
            }));
          }
        }, {
          key: "deinitGUIProc",
          value: function deinitGUIProc() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee358() {
              return _regeneratorRuntime().wrap(function _callee358$(_context358) {
                while (1) switch (_context358.prev = _context358.next) {
                  case 0:
                    this.commService.isRegisterCallBack = false;
                    this.log('Terminate proc');
                    _context358.next = 4;
                    return this.gui_terminate_proc();

                  case 4:
                  case "end":
                    return _context358.stop();
                }
              }, _callee358, this);
            }));
          }
        }, {
          key: "gui_register_cb",
          value: function gui_register_cb() {
            var cbfunc = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee359() {
              var _this85 = this;

              return _regeneratorRuntime().wrap(function _callee359$(_context359) {
                while (1) switch (_context359.prev = _context359.next) {
                  case 0:
                    try {
                      this.commService.isRegisterCallBack = true;
                      this.commService.isConfirmNormal = false;
                      this.commService.EventCallBackFunction.subscribe({
                        next: function next(data) {
                          cbfunc & cbfunc(data); // this.logger.log(datau8array.toString())
                        },
                        error: function error(err) {
                          _this85.log('error' + err);
                        },
                        complete: function complete() {
                          _this85.log('done');
                        }
                      });
                    } catch (err) {
                      alert(err);
                      this.log(err);
                    }

                  case 1:
                  case "end":
                    return _context359.stop();
                }
              }, _callee359, this);
            }));
          }
        }, {
          key: "gui_set_input_val",
          value: function gui_set_input_val(input_val) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee360() {
              return _regeneratorRuntime().wrap(function _callee360$(_context360) {
                while (1) switch (_context360.prev = _context360.next) {
                  case 0:
                    _context360.next = 2;
                    return this.gui.set_param(_obd_vcistd__WEBPACK_IMPORTED_MODULE_2__.VCI_GUI_Param_Type.param_input, input_val);

                  case 2:
                    return _context360.abrupt("return", _context360.sent);

                  case 3:
                  case "end":
                    return _context360.stop();
                }
              }, _callee360, this);
            }));
          }
        }, {
          key: "gui_exec_disp",
          value: function gui_exec_disp() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee361() {
              return _regeneratorRuntime().wrap(function _callee361$(_context361) {
                while (1) switch (_context361.prev = _context361.next) {
                  case 0:
                    _context361.next = 2;
                    return this.gui.gui_notice_disp();

                  case 2:
                    return _context361.abrupt("return", _context361.sent);

                  case 3:
                  case "end":
                    return _context361.stop();
                }
              }, _callee361, this);
            }));
          }
        }, {
          key: "gui_terminate_proc",
          value: function gui_terminate_proc() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee362() {
              return _regeneratorRuntime().wrap(function _callee362$(_context362) {
                while (1) switch (_context362.prev = _context362.next) {
                  case 0:
                    _context362.next = 2;
                    return this.gui.proc_terminate_proc();

                  case 2:
                    return _context362.abrupt("return", _context362.sent);

                  case 3:
                  case "end":
                    return _context362.stop();
                }
              }, _callee362, this);
            }));
          }
        }, {
          key: "ABS_bleeding_enter_proc",
          value: function ABS_bleeding_enter_proc() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee363() {
              return _regeneratorRuntime().wrap(function _callee363$(_context363) {
                while (1) switch (_context363.prev = _context363.next) {
                  case 0:
                    _context363.next = 2;
                    return this.gui.gui_proc_enter_specialFunction_feature(_obd_vcistd__WEBPACK_IMPORTED_MODULE_2__.SF_FunctionGroup.ABS_Bleeding);

                  case 2:
                    return _context363.abrupt("return", _context363.sent);

                  case 3:
                  case "end":
                    return _context363.stop();
                }
              }, _callee363, this);
            }));
          } //20-08-2020 10:17 Log Data Function

          /**
           * [StartLog start logging data]
           * @return [true if start logging no issue, otherwise is false]
           */

        }, {
          key: "StartLog",
          value: function StartLog() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee364() {
              return _regeneratorRuntime().wrap(function _callee364$(_context364) {
                while (1) switch (_context364.prev = _context364.next) {
                  case 0:
                    _context364.next = 2;
                    return this.obdsystem.SetLogFunction(_obd_vcistd__WEBPACK_IMPORTED_MODULE_2__.VCI_Data_Logging.EN_All);

                  case 2:
                    _context364.next = 4;
                    return this.obdsystem.StartLog();

                  case 4:
                    return _context364.abrupt("return", _context364.sent);

                  case 5:
                  case "end":
                    return _context364.stop();
                }
              }, _callee364, this);
            }));
          }
          /**
           * [StopLog stop logging data]
           * @return [true if stop logging no issue, otherwise is false]
           */

        }, {
          key: "StopLog",
          value: function StopLog() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee365() {
              return _regeneratorRuntime().wrap(function _callee365$(_context365) {
                while (1) switch (_context365.prev = _context365.next) {
                  case 0:
                    _context365.next = 2;
                    return this.obdsystem.StopLog();

                  case 2:
                    return _context365.abrupt("return", _context365.sent);

                  case 3:
                  case "end":
                    return _context365.stop();
                }
              }, _callee365, this);
            }));
          }
          /**
          * [GetLog get the logging data stored before ]
          * @return [vehicle data logged in VCI]
          */

        }, {
          key: "GetLog",
          value: function GetLog() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee366() {
              return _regeneratorRuntime().wrap(function _callee366$(_context366) {
                while (1) switch (_context366.prev = _context366.next) {
                  case 0:
                    _context366.next = 2;
                    return this.obdsystem.GetLog();

                  case 2:
                    return _context366.abrupt("return", _context366.sent);

                  case 3:
                  case "end":
                    return _context366.stop();
                }
              }, _callee366, this);
            }));
          } //YMME function 07-09-2020 21:26

        }, {
          key: "ymme_init",
          value: function ymme_init() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee367() {
              return _regeneratorRuntime().wrap(function _callee367$(_context367) {
                while (1) switch (_context367.prev = _context367.next) {
                  case 0:
                    _context367.next = 2;
                    return this.ymme.init();

                  case 2:
                    _context367.next = 4;
                    return this.ymme.get(0);

                  case 4:
                    return _context367.abrupt("return", _context367.sent);

                  case 5:
                  case "end":
                    return _context367.stop();
                }
              }, _callee367, this);
            }));
          }
        }, {
          key: "ymme_get",
          value: function ymme_get(sel_id) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee368() {
              return _regeneratorRuntime().wrap(function _callee368$(_context368) {
                while (1) switch (_context368.prev = _context368.next) {
                  case 0:
                    _context368.next = 2;
                    return this.ymme.get(sel_id);

                  case 2:
                    return _context368.abrupt("return", _context368.sent);

                  case 3:
                  case "end":
                    return _context368.stop();
                }
              }, _callee368, this);
            }));
          }
        }, {
          key: "ymme_back",
          value: function ymme_back() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee369() {
              return _regeneratorRuntime().wrap(function _callee369$(_context369) {
                while (1) switch (_context369.prev = _context369.next) {
                  case 0:
                    _context369.next = 2;
                    return this.ymme.get(0xFF);

                  case 2:
                    return _context369.abrupt("return", _context369.sent);

                  case 3:
                  case "end":
                    return _context369.stop();
                }
              }, _callee369, this);
            }));
          }
        }, {
          key: "ymme_confirm",
          value: function ymme_confirm() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee370() {
              return _regeneratorRuntime().wrap(function _callee370$(_context370) {
                while (1) switch (_context370.prev = _context370.next) {
                  case 0:
                    _context370.next = 2;
                    return this.ymme.confirm();

                  case 2:
                    return _context370.abrupt("return", _context370.sent);

                  case 3:
                  case "end":
                    return _context370.stop();
                }
              }, _callee370, this);
            }));
          }
        }]);
      }();

      _OBDService.ɵfac = function OBDService_Factory(t) {
        return new (t || _OBDService)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵinject"](_utilities_notify_service__WEBPACK_IMPORTED_MODULE_3__.NotifyService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵinject"](_command_command_service__WEBPACK_IMPORTED_MODULE_4__.CommandService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵinject"](_obd_obd2__WEBPACK_IMPORTED_MODULE_5__.OBD2), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵinject"](_obd_nwscan__WEBPACK_IMPORTED_MODULE_6__.NWSCAN), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵinject"](_obd_OBDSystem__WEBPACK_IMPORTED_MODULE_7__.OBDSystem), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵinject"](_obd_obd2ff__WEBPACK_IMPORTED_MODULE_8__.OBD2FF), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵinject"](_obd_ofm__WEBPACK_IMPORTED_MODULE_9__.OFM), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵinject"](_obd_livedata__WEBPACK_IMPORTED_MODULE_10__.Livedata), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵinject"](_obd_symptom__WEBPACK_IMPORTED_MODULE_11__.Symptom), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵinject"](_obd_ymme__WEBPACK_IMPORTED_MODULE_12__.YMME), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵinject"](_obd_gui__WEBPACK_IMPORTED_MODULE_13__.GUI));
      };

      _OBDService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjectable"]({
        token: _OBDService,
        factory: _OBDService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    7860:
    /*!************************************************!*\
      !*** ./src/app/services/innova-vci.service.ts ***!
      \************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "bytesToBase64": function bytesToBase64() {
          return (
            /* binding */
            _bytesToBase
          );
        },

        /* harmony export */
        "isEmptyResponse": function isEmptyResponse() {
          return (
            /* binding */
            _isEmptyResponse
          );
        },

        /* harmony export */
        "includesAny": function includesAny() {
          return (
            /* binding */
            _includesAny
          );
        },

        /* harmony export */
        "VCI_STATIC_TEXTS": function VCI_STATIC_TEXTS() {
          return (
            /* binding */
            _VCI_STATIC_TEXTS
          );
        },

        /* harmony export */
        "InnovaScreenEventResp": function InnovaScreenEventResp() {
          return (
            /* binding */
            _InnovaScreenEventResp
          );
        },

        /* harmony export */
        "InnovaVCIService": function InnovaVCIService() {
          return (
            /* binding */
            _InnovaVCIService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! tslib */
      42321);
      /* harmony import */


      var src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../configs/app.config */
      66626);
      /* harmony import */


      var _innova_vci_service_src_obdservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./innova-vci-service/src/obdservice.service */
      91537);
      /* harmony import */


      var _innova_vci_service_src_utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./innova-vci-service/src/utilities/dataParser */
      81402);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! rxjs */
      79441);
      /* harmony import */


      var _innova_vci_service_src_standard_enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./innova-vci-service/src/standard/enums */
      13930);
      /* harmony import */


      var _innova_tool_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./innova-tool-models */
      92951);
      /* harmony import */


      var _innova_vci_service_src_obd_vcistd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./innova-vci-service/src/obd/vcistd */
      48860);
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! lodash */
      202);
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
      /* harmony import */


      var _innova_vci_service_src_obd_obdUtils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./innova-vci-service/src/obd/obdUtils */
      2586);
      /* harmony import */


      var _models_app_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../models/app.model */
      20998);
      /* harmony import */


      var _models_app_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../models/app.enum */
      34932);
      /* harmony import */


      var _app_validators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../app.validators */
      48420);
      /* harmony import */


      var _innova_helper_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./innova-helper.service */
      59413);
      /* harmony import */


      var _models_app_data__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../models/app.data */
      40354);
      /* harmony import */


      var _state_app_state__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./state/app.state */
      12607);
      /* harmony import */


      var _innova_report_helper_innova_report_data_models__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./innova-report-helper/innova-report-data-models */
      51572);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _events_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./events.service */
      80106);
      /* harmony import */


      var _helper_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./helper.service */
      22486);
      /* harmony import */


      var _ionic_native_ble_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @ionic-native/ble/ngx */
      11695);
      /* harmony import */


      var _innova_vci_service_src_connectivity_connectivity_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./innova-vci-service/src/connectivity/connectivity.service */
      27555);
      /* harmony import */


      var _logger__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./logger */
      88737);
      /**
       * @Author: quocdo-macbook
       * @Date:   2021-11-22T09:22:51+07:00
       * @Last modified by:   quocdo-macbook
       * @Last modified time: 2021-12-29T13:57:29+07:00
       */

      /**
       * Innova VCI Service Wrapper
       * @author Ngoc LB <ngoclb@card.com>
       * @date July 08, 2019
       */


      function _bytesToBase(bytes) {
        return btoa(String.fromCharCode.apply(null, bytes));
      }

      function _isEmptyResponse(bytes) {
        var count = (bytes || []).reduce(function (total, x) {
          return x === 0x00 ? total + 1 : total;
        }, 0);
        return count === bytes.length || bytes[0] === 0xaa && count === bytes.length - 1;
      }

      var DEFAULT_LOG_LEVEL = [_innova_vci_service_src_obdservice_service__WEBPACK_IMPORTED_MODULE_1__.EnumNotify.NOTIFY_DEBUG_LOG, _innova_vci_service_src_obdservice_service__WEBPACK_IMPORTED_MODULE_1__.EnumNotify.NOTIFY_DEBUG_LOG_COM_TX, _innova_vci_service_src_obdservice_service__WEBPACK_IMPORTED_MODULE_1__.EnumNotify.NOTIFY_DEBUG_LOG_COM_RX, _innova_vci_service_src_obdservice_service__WEBPACK_IMPORTED_MODULE_1__.EnumNotify.NOTIFY_DEBUG_LOG_COM_RX_RX, _innova_vci_service_src_obdservice_service__WEBPACK_IMPORTED_MODULE_1__.EnumNotify.NOTIFY_VCI_DATA_RESPONSE // EnumNotify.NOTIFY_VCI_COMMAND_REQUEST
      ];

      function _includesAny(search, haystack) {
        var matchCase = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        search = typeof search === 'string' ? search : '';
        return !!(haystack || []).find(function (str) {
          return matchCase ? search.includes(str) : search.toLowerCase().includes(str.toLowerCase());
        });
      }

      var _VCI_STATIC_TEXTS = {
        DtcStatus: {
          store: ['stored', 'almacenado'],
          pending: ['pending', 'pendiente'],
          permanent: ['permanent', 'permanente']
        },
        UIProcess: {
          loading_symbols: ['…', '...'],
          service_reset: ['service reset', 'reinicio del servicio'],
          start_process: ['start process..', 'iniciar proceso..', 'démarrer le processus..'],
          retry: ['retry', 'reintentar', 'réessayez'],
          exit: ['exit', 'salida', 'sortie'],
          back: ['back', 'atrás', 'arrière'],
          yes: ['yes'],
          no: ['no'],
          one_moment_please: ['one moment please', 'espere un momento', 'un instant', "s'il vous plaît"],
          view_procedure: ['view procedure', 'ver procedimiento', 'voir la procédure'],
          successful: ['successful', 'satisfactoriamente', 'succès'],
          complete: ['complete', 'completo', 'achevée'],
          completed: ['completed', 'terminado', 'terminé'],
          command_state: ['Commanded State:', 'Estado mandado:', 'État commandé:'],
          result: ['Result:', 'Resultado:', 'Résultat:'],
          is_not_supported: ['is not supported', 'no es apoyado', "n'est pas pris en charge"]
        }
      };

      var _InnovaScreenEventResp = /*#__PURE__*/function () {
        function _InnovaScreenEventResp(respdataOrType, respBody) {
          _classCallCheck(this, _InnovaScreenEventResp);

          if (typeof respdataOrType === 'string') {
            this._type = respdataOrType;
            this._body = respBody;
          } else if (typeof respdataOrType === 'object') {
            this._type = Object.keys(respdataOrType || {})[0];
            this._body = respdataOrType[this._type] || null;
          }
        }

        return _createClass(_InnovaScreenEventResp, [{
          key: "type",
          get: function get() {
            var currenttype = this._type;
            return {
              toString: function toString() {
                return currenttype;
              },
              isEquals: function isEquals(screentype) {
                return currenttype === screentype;
              }
            };
          }
        }, {
          key: "leftKey",
          get: function get() {
            return this._body ? (this._body[0] || '').toString().trim() : null;
          }
        }, {
          key: "rightKey",
          get: function get() {
            return this._body ? (this._body[2] || '').toString().trim() : null;
          }
        }, {
          key: "bodyText",
          get: function get() {
            if (this._body) {
              if (this._body.str) return this._body.str[2];else if (this._body.hdr) return this._body.hdr[2] || this._body.hdr[4];
            }

            return '';
          }
        }, {
          key: "body",
          get: function get() {
            return this._body;
          }
        }]);
      }();

      var _InnovaVCIService = /*#__PURE__*/function () {
        function _InnovaVCIService(obdService, eventService, helper, ble, connService, appLoggerService) {
          var _this86 = this;

          _classCallCheck(this, _InnovaVCIService);

          var _a;

          this.obdService = obdService;
          this.eventService = eventService;
          this.helper = helper;
          this.ble = ble;
          this.connService = connService;
          this._isConnected = null;
          this._isVehicleConnected = false;
          this._isWatchingConnection = true;
          this._totalSleepTimeMs = 0;
          this.supportLogTags = DEFAULT_LOG_LEVEL;
          this.isScreenGuiInitialized = false;
          this.isSetVciLocale = false;
          this._screenActions = {
            initGUIProc: function initGUIProc() {
              return (0, tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(_this86, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee371() {
                return _regeneratorRuntime().wrap(function _callee371$(_context371) {
                  while (1) switch (_context371.prev = _context371.next) {
                    case 0:
                      _context371.next = 2;
                      return this.obdService.deinitGUIProc()["catch"](function (err) {});

                    case 2:
                      _context371.prev = 2;
                      _context371.next = 5;
                      return this.obdService.initGUIProc();

                    case 5:
                      _context371.next = 10;
                      break;

                    case 7:
                      _context371.prev = 7;
                      _context371.t0 = _context371["catch"](2);
                      return _context371.abrupt("return", false);

                    case 10:
                      return _context371.abrupt("return", this.initToolScreenGUI());

                    case 11:
                    case "end":
                      return _context371.stop();
                  }
                }, _callee371, this, [[2, 7]]);
              }));
            },
            deinitGUIProc: function deinitGUIProc() {
              var delayMs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_0__.SLEEP_TIMEOUT;
              var timeoutMs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_0__.TIMEOUT_GET_VEH_SUMMARY;

              if (_this86.isScreenGuiInitialized) {
                _this86.isScreenGuiInitialized = false;
                return new Promise(function (resolve) {
                  return (0, tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(_this86, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee372() {
                    var _this87 = this;

                    var sto;
                    return _regeneratorRuntime().wrap(function _callee372$(_context372) {
                      while (1) switch (_context372.prev = _context372.next) {
                        case 0:
                          sto = setTimeout(function () {
                            _this87.logger.debug('deinitGUIProc timed out');

                            resolve(false);
                          }, timeoutMs);

                          if (!delayMs) {
                            _context372.next = 4;
                            break;
                          }

                          _context372.next = 4;
                          return this.sleep(delayMs);

                        case 4:
                          _context372.next = 6;
                          return this.obdService.deinitGUIProc()["catch"](this.logger.debug.bind(null, 'deinitGUIProc failed'));

                        case 6:
                          this.logger.debug('deinitGUIProc OK');
                          clearTimeout(sto);
                          resolve(true);

                        case 9:
                        case "end":
                          return _context372.stop();
                      }
                    }, _callee372, this);
                  }));
                });
              }

              return false;
            },
            back: function back() {
              _this86.logger.debug('press left key');

              return _this86.obdService.gui_set_softkey('left');
            },
            next: function next() {
              _this86.logger.debug('press right key');

              return _this86.obdService.gui_set_softkey('right');
            },
            selectOption: function selectOption(option) {
              _this86.logger.debug('press option key', option);

              return _this86.obdService.gui_set_key_option(option);
            },
            setInput: function setInput(value) {
              _this86.logger.debug('set input value', value);

              return _this86.obdService.gui_set_input_val(value);
            }
          };
          /** Start VCI Data Log */

          this._isVciLog = false; // this.initVCIResponseHandlers();

          this.logger = (_a = appLoggerService.getLogger('InnovaVCIService')) !== null && _a !== void 0 ? _a : {};
        }

        return _createClass(_InnovaVCIService, [{
          key: "isConnected",
          get: function get() {
            return this._isConnected;
          }
        }, {
          key: "connectedDevAddr",
          get: function get() {
            return this._connectedDevAddr;
          }
        }, {
          key: "toolName",
          get: function get() {
            return this._toolName;
          }
        }, {
          key: "isVehicleConnected",
          get: function get() {
            return this._isVehicleConnected;
          }
        }, {
          key: "isWatchingConnection",
          get: function get() {
            return this._isWatchingConnection;
          } // S16: Show notice for some special Make (BMW)

        }, {
          key: "needCheckResetIgnition",
          get: function get() {
            if (this._vciResponseData && this._vciResponseData.ymme) {
              var manufacturer = this._vciResponseData.ymme.manufacturer;

              if (!manufacturer) {
                manufacturer = (0, _innova_report_helper_innova_report_data_models__WEBPACK_IMPORTED_MODULE_14__.getManufactureByMake)(this._vciResponseData.ymme.make);
              }

              return ['BMW'].includes(manufacturer.toUpperCase());
            }

            return false;
          } // T7R-85 Toyota, Lexus, Scion Pop-Up

        }, {
          key: "needUpdateMoreVehicleInfo",
          get: function get() {
            if (this._vciResponseData && this._vciResponseData.ymme) {
              var ymme = this._vciResponseData.ymme;
              var manufacturer = ymme.manufacturer;

              if (!manufacturer) {
                manufacturer = (0, _innova_report_helper_innova_report_data_models__WEBPACK_IMPORTED_MODULE_14__.getManufactureByMake)(ymme.make);
              }

              return ['TOYOTA'].includes(manufacturer.toUpperCase());
            }

            return false;
          }
        }, {
          key: "startWatchingConnection",
          value: function startWatchingConnection() {
            this._isWatchingConnection = true;
            this.resumeProcess();
          }
        }, {
          key: "stopWatchingConnection",
          value: function stopWatchingConnection() {
            this._isWatchingConnection = false;
            clearTimeout(this.stoCheckConnection);
            this.stoCheckConnection = 0;
          }
        }, {
          key: "skipWatchingConnection",
          value: function skipWatchingConnection(isSkip) {
            this.stoCheckConnection = isSkip ? -1 : 0;
          }
        }, {
          key: "isToolReady",
          get: function get() {
            return this._isToolReady;
          }
        }, {
          key: "waitToolReady",
          value: function waitToolReady() {
            var timeout = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 5000;
            return (0, tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee373() {
              var ms;
              return _regeneratorRuntime().wrap(function _callee373$(_context373) {
                while (1) switch (_context373.prev = _context373.next) {
                  case 0:
                    if (!this.isConnected) {
                      _context373.next = 8;
                      break;
                    }

                    ms = 500;
                    _context373.next = 4;
                    return this.helper.sleep(ms);

                  case 4:
                    this.logger.debug("isToolReady=".concat(this._isToolReady, ", timeout=").concat(timeout));
                    timeout -= ms;

                    if (!(!this._isToolReady && timeout > 0)) {
                      _context373.next = 8;
                      break;
                    }

                    return _context373.abrupt("return", this.waitToolReady(timeout));

                  case 8:
                    return _context373.abrupt("return", this._isToolReady);

                  case 9:
                  case "end":
                    return _context373.stop();
                }
              }, _callee373, this);
            }));
          }
          /**
           * Cancel function by Innova
           */

        }, {
          key: "cancelProcess",
          value: function cancelProcess() {
            var timeoutMs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_0__.TIMEOUT_GET_VEH_SUMMARY;
            return (0, tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee375() {
              var _this88 = this;

              return _regeneratorRuntime().wrap(function _callee375$(_context375) {
                while (1) switch (_context375.prev = _context375.next) {
                  case 0:
                    return _context375.abrupt("return", new Promise(function (resolve) {
                      return (0, tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(_this88, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee374() {
                        var _this89 = this;

                        var sto;
                        return _regeneratorRuntime().wrap(function _callee374$(_context374) {
                          while (1) switch (_context374.prev = _context374.next) {
                            case 0:
                              sto = setTimeout(function () {
                                _this89.logger.debug('cancelProcess timed out');

                                resolve(false);
                              }, timeoutMs);
                              this.obdService.stopQuery();
                              _context374.prev = 2;
                              _context374.next = 5;
                              return this.screenAction.deinitGUIProc();

                            case 5:
                              _context374.next = 7;
                              return this.obdService.cancel_process();

                            case 7:
                              _context374.next = 12;
                              break;

                            case 9:
                              _context374.prev = 9;
                              _context374.t0 = _context374["catch"](2);
                              this.logger.debug('cancelProcess failed', _context374.t0);

                            case 12:
                              this.connService.cancel_process();
                              this.linkedProtocol = null;
                              this.eventService.publish(_innova_tool_models__WEBPACK_IMPORTED_MODULE_4__.InnovaVCIEvent.INTERRUPT_PROCESS);
                              _context374.next = 17;
                              return this.waitToolReady();

                            case 17:
                              clearTimeout(sto);
                              this.resumeProcess();
                              resolve(true);

                            case 20:
                            case "end":
                              return _context374.stop();
                          }
                        }, _callee374, this, [[2, 9]]);
                      }));
                    }));

                  case 1:
                  case "end":
                    return _context375.stop();
                }
              }, _callee375);
            }));
          } // async proc_keepalive() {
          //   return await this.obdService.gui_keep_alive();
          // }

          /**
           * Resume process still has connection
           */

        }, {
          key: "resumeProcess",
          value: function resumeProcess() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee376() {
              return _regeneratorRuntime().wrap(function _callee376$(_context376) {
                while (1) switch (_context376.prev = _context376.next) {
                  case 0:
                    this.connService.resume_process();
                    this._isToolReady = true;

                  case 2:
                  case "end":
                    return _context376.stop();
                }
              }, _callee376, this);
            }));
          }
          /**
           * Disconnect with tool
           * @param closePort true: disconnect and close port | false: just unscribe event, keep connection with tool
           */

        }, {
          key: "disconnect",
          value: function disconnect() {
            var closePort = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            var deviceId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            return (0, tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee377() {
              return _regeneratorRuntime().wrap(function _callee377$(_context377) {
                while (1) switch (_context377.prev = _context377.next) {
                  case 0:
                    _context377.next = 2;
                    return this.cancelProcess();

                  case 2:
                    if (!closePort) {
                      _context377.next = 5;
                      break;
                    }

                    _context377.next = 5;
                    return this.connService.closePort() // .then(this.logger.debug.bind(null, 'closePort OK'))
                    ["catch"](this.logger.debug.bind(null, 'closePort failed'));

                  case 5:
                    this._isConnected = false;
                    this._connectedDevAddr = null;
                    this._toolName = null;
                    this.linkedProtocol = null;
                    this.resetVciLocale();

                    if (!deviceId) {
                      _context377.next = 13;
                      break;
                    }

                    _context377.next = 13;
                    return this.disconnectBT(deviceId);

                  case 13:
                    return _context377.abrupt("return", true);

                  case 14:
                  case "end":
                    return _context377.stop();
                }
              }, _callee377, this);
            }));
          }
        }, {
          key: "disconnectBT",
          value: function disconnectBT() {
            var deviceId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            return (0, tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee378() {
              return _regeneratorRuntime().wrap(function _callee378$(_context378) {
                while (1) switch (_context378.prev = _context378.next) {
                  case 0:
                    if (this.isConnected) {
                      this._isConnected = false;
                    }

                    if (!deviceId) {
                      _context378.next = 4;
                      break;
                    }

                    _context378.next = 4;
                    return this.obdService.disconnectBluetoothDevices()["catch"](this.logger.debug.bind(null, 'disconnectBluetoothDevices failed'));

                  case 4:
                    return _context378.abrupt("return", true);

                  case 5:
                  case "end":
                    return _context378.stop();
                }
              }, _callee378, this);
            }));
          }
        }, {
          key: "initializeBT",
          value: function initializeBT() {
            var timeout = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 15000;
            return (0, tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee381() {
              var _this90 = this;

              var _onDone, isBleEnabled, _btDevices, _isStartBtConnect, _connectBT, pairedDevices, _scanBtProc, btDevice, devices, device, btName, isLocalName, localName, pro15Tool;

              return _regeneratorRuntime().wrap(function _callee381$(_context381) {
                while (1) switch (_context381.prev = _context381.next) {
                  case 0:
                    if (!this.isConnected) {
                      _context381.next = 2;
                      break;
                    }

                    return _context381.abrupt("return", true);

                  case 2:
                    console.log('this.isConnected: ', this.isConnected);
                    this.logger.debug('Start scanning PROSCAN/PROSCANLE tools...');

                    _onDone = function _onDone() {
                      var msg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

                      _this90.logger.debug('initializeBT result: ', msg);
                    };

                    _context381.next = 7;
                    return this.obdService.initialize_bt()["catch"](this.logger.error.bind(null, 'initialize_bt failed'));

                  case 7:
                    isBleEnabled = _context381.sent;
                    console.log('isBleEnabled: ', isBleEnabled);

                    if (!isBleEnabled) {
                      _context381.next = 37;
                      break;
                    }

                    _btDevices = [], _isStartBtConnect = false;

                    _connectBT = function _connectBT() {
                      var selectedDevice = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                      return (0, tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(_this90, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee379() {
                        var device, isBTConnected;
                        return _regeneratorRuntime().wrap(function _callee379$(_context379) {
                          while (1) switch (_context379.prev = _context379.next) {
                            case 0:
                              console.log('selectedDevice: ', selectedDevice);

                              if (selectedDevice) {
                                _btDevices = [];

                                _btDevices.push(selectedDevice);
                              }

                              if (!(this.isConnected || _btDevices.length === 0)) {
                                _context379.next = 4;
                                break;
                              }

                              return _context379.abrupt("return", _onDone("done: isConnected=".concat(this.isConnected, " btDevices length=").concat(_btDevices.length)));

                            case 4:
                              device = _btDevices.pop();
                              console.log('device: ', device);
                              this.logger.debug('Connecting...', device);
                              _context379.prev = 7;
                              this.eventService.publish(_innova_tool_models__WEBPACK_IMPORTED_MODULE_4__.InnovaVCIEvent.SCAN_STATUS, {
                                name: 'Connecting to device...',
                                result: device.name + ' found'
                              }); // init log
                              // await this.obdService.initialize_bt(this.handleResponse.bind(this));

                              _context379.next = 11;
                              return this.obdService.connectBlueToothDevice(device.id);

                            case 11:
                              isBTConnected = _context379.sent;
                              console.log('isBTConnected: ', isBTConnected);

                              if (!isBTConnected) {
                                _context379.next = 30;
                                break;
                              }

                              if (_scanBtProc) {
                                _scanBtProc.unsubscribe();
                              }

                              _btDevices = []; // init log

                              _context379.next = 18;
                              return this.obdService.initialize_bt(this.handleResponse.bind(this));

                            case 18:
                              this._isConnected = this.obdService.BluetoothIsConnected();

                              if (!this.isConnected) {
                                _context379.next = 28;
                                break;
                              }

                              this.linkedProtocol = null;
                              this.resetVciReponseData();
                              this.resetVciLocale();
                              this._connectedDevAddr = device.id;
                              this._toolName = device.name;
                              this._isToolReady = true;
                              this.eventService.publish(_innova_tool_models__WEBPACK_IMPORTED_MODULE_4__.InnovaVCIEvent.CONNECTED, device);
                              return _context379.abrupt("return", _onDone("connected to ".concat(device.id)));

                            case 28:
                              _context379.next = 32;
                              break;

                            case 30:
                              this.eventService.publish(_innova_tool_models__WEBPACK_IMPORTED_MODULE_4__.InnovaVCIEvent.SCAN_STATUS, {
                                name: 'Unable to connect device',
                                result: ''
                              });
                              return _context379.abrupt("return", _onDone("Unable to connect device"));

                            case 32:
                              _context379.next = 37;
                              break;

                            case 34:
                              _context379.prev = 34;
                              _context379.t0 = _context379["catch"](7);
                              return _context379.abrupt("return", _onDone("error catched ".concat(_context379.t0)));

                            case 37:
                            case "end":
                              return _context379.stop();
                          }
                        }, _callee379, this, [[7, 34]]);
                      }));
                    };

                    _context381.next = 14;
                    return this.obdService.get_list_bt_bondeddevices();

                  case 14:
                    pairedDevices = _context381.sent;
                    console.log('*** pairedDevices: ', pairedDevices);

                    if (!lodash__WEBPACK_IMPORTED_MODULE_6__.isEmpty(pairedDevices)) {
                      this.logger.debug('pairedDevices', pairedDevices);
                      _btDevices = pairedDevices.filter(function (btDevice) {
                        return lodash__WEBPACK_IMPORTED_MODULE_6__.includes(src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_0__.SUPPORTED_BLUETOOTH_DEVICE_NAMES, btDevice['name']);
                      }).reverse();
                    }

                    _scanBtProc = null;

                    if (!(_btDevices && _btDevices.length > 0)) {
                      _context381.next = 25;
                      break;
                    }

                    console.log('_btDevices: ', _btDevices);
                    btDevice = _btDevices[0];
                    this.logger.debug('Found bluetooth device', btDevice);

                    if (!_isStartBtConnect) {
                      _connectBT();

                      _isStartBtConnect = true;
                    }

                    _context381.next = 35;
                    break;

                  case 25:
                    if (!_state_app_state__WEBPACK_IMPORTED_MODULE_13__.AppState.isOnAndroid) {
                      _context381.next = 31;
                      break;
                    }

                    console.log('Call this.ble.stopScan');
                    this.ble.stopScan().then(function () {
                      return (0, tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(_this90, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee380() {
                        var _this91 = this;

                        return _regeneratorRuntime().wrap(function _callee380$(_context380) {
                          while (1) switch (_context380.prev = _context380.next) {
                            case 0:
                              console.log('**** Start this.ble.scan');
                              _scanBtProc = this.ble.startScan([]).subscribe(function (btDevice) {
                                console.log('btDevice: ', btDevice);

                                if (btDevice['name'] && btDevice['name'].length > 0) {
                                  console.log('btDevice Name: ', btDevice['name']);

                                  if (lodash__WEBPACK_IMPORTED_MODULE_6__.includes(src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_0__.SUPPORTED_BLUETOOTH_DEVICE_NAMES, btDevice['name'])) {
                                    _this91.logger.debug('Device found', btDevice);

                                    console.log('Device found', btDevice);

                                    var _index2 = _btDevices.findIndex(function (d) {
                                      return d.id === btDevice['id'];
                                    });

                                    if (_index2 < 0) {
                                      var btName = btDevice['name'];
                                      var isLocalName = false;
                                      var localName = localStorage.getItem(btDevice['id']);

                                      if (localName) {
                                        btName = localName;
                                        isLocalName = true;
                                      }

                                      var pro15Tool = new _models_app_model__WEBPACK_IMPORTED_MODULE_8__.BleData(btDevice['id'], btName, isLocalName);

                                      _this91.eventService.publish(_innova_tool_models__WEBPACK_IMPORTED_MODULE_4__.InnovaVCIEvent.DEVICE_FOUND, pro15Tool);

                                      _btDevices.push(pro15Tool);
                                    }
                                  }
                                }
                              });

                            case 2:
                            case "end":
                              return _context380.stop();
                          }
                        }, _callee380, this);
                      }));
                    });
                    this.eventService.subscribe(_innova_tool_models__WEBPACK_IMPORTED_MODULE_4__.InnovaVCIEvent.DEVICE_SELECTED, function (device) {
                      console.log('this.eventService.subscribe device: ', device);

                      _this90.eventService.unsubscribe(_innova_tool_models__WEBPACK_IMPORTED_MODULE_4__.InnovaVCIEvent.DEVICE_SELECTED);

                      if (!_isStartBtConnect) {
                        _connectBT(device);

                        _isStartBtConnect = true;
                      }
                    });
                    _context381.next = 35;
                    break;

                  case 31:
                    _context381.next = 33;
                    return this.connService.discoverBluetoothDevices2();

                  case 33:
                    devices = _context381.sent;

                    if (devices && devices.length > 0) {
                      this.eventService.subscribe(_innova_tool_models__WEBPACK_IMPORTED_MODULE_4__.InnovaVCIEvent.DEVICE_SELECTED, function (device) {
                        _this90.eventService.unsubscribe(_innova_tool_models__WEBPACK_IMPORTED_MODULE_4__.InnovaVCIEvent.DEVICE_SELECTED);

                        if (!_isStartBtConnect) {
                          _connectBT(device);

                          _isStartBtConnect = true;
                        }
                      });

                      while (devices.length) {
                        device = devices.shift();
                        this.logger.debug('Found Pro15 device', device);
                        btName = device['name'];
                        isLocalName = false;
                        localName = localStorage.getItem(device['id']);

                        if (localName) {
                          btName = localName;
                          isLocalName = true;
                        }

                        pro15Tool = new _models_app_model__WEBPACK_IMPORTED_MODULE_8__.BleData(device['id'], btName, isLocalName);
                        this.eventService.publish(_innova_tool_models__WEBPACK_IMPORTED_MODULE_4__.InnovaVCIEvent.DEVICE_FOUND, pro15Tool);

                        _btDevices.push(pro15Tool);
                      }
                    }

                  case 35:
                    _context381.next = 38;
                    break;

                  case 37:
                    _onDone('bluetooth is disabled');

                  case 38:
                  case "end":
                    return _context381.stop();
                }
              }, _callee381, this);
            }));
          }
          /**
           * Check if user connect with Vehicle or not
           * batteryVolt > 3.3: connected
           */

        }, {
          key: "isConnectedVehicle",
          value: function isConnectedVehicle() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee382() {
              return _regeneratorRuntime().wrap(function _callee382$(_context382) {
                while (1) switch (_context382.prev = _context382.next) {
                  case 0:
                    return _context382.abrupt("return", !!this.isConnected);

                  case 1:
                  case "end":
                    return _context382.stop();
                }
              }, _callee382, this);
            }));
          }
          /**
           * Link protocol and prepare data
           */

        }, {
          key: "linkProtocols",
          value: function linkProtocols() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee383() {
              var _this92 = this;

              var callbackResult, protocolId, startMs, endMs;
              return _regeneratorRuntime().wrap(function _callee383$(_context383) {
                while (1) switch (_context383.prev = _context383.next) {
                  case 0:
                    if (this.isConnected) {
                      _context383.next = 3;
                      break;
                    }

                    _context383.next = 3;
                    return this.initializeBT();

                  case 3:
                    _context383.next = 5;
                    return this.obdService.obd2Query(function (info) {
                      callbackResult = info;

                      _this92.logger.debug('callbackResult: ', callbackResult);

                      if (callbackResult.total === 0) {
                        _this92.disconnect(true, _this92._connectedDevAddr);
                      } else if ([(0, _innova_vci_service_src_obd_obdUtils__WEBPACK_IMPORTED_MODULE_7__.enumProtocolToString)(_innova_vci_service_src_standard_enums__WEBPACK_IMPORTED_MODULE_3__.enumProtocol.eprotocol_UNKNOWN), (0, _innova_vci_service_src_obd_obdUtils__WEBPACK_IMPORTED_MODULE_7__.enumProtocolToString)(undefined)].includes(callbackResult.message)) {
                        _this92._isVehicleConnected = false;
                      } // this.events.publish(InnovaVCIEvent.LINK_PROTOCOL, callbackResult);

                    }, false);

                  case 5:
                    protocolId = _context383.sent;

                    if (protocolId) {
                      _context383.next = 8;
                      break;
                    }

                    throw new Error("Link protocols failed: ".concat(JSON.stringify(callbackResult)));

                  case 8:
                    this.linkedProtocol = {
                      protocolId: protocolId
                    };
                    this.resetVciLocale();

                    if (this.isEmptyVciData) {
                      this.resetVciReponseData();
                    }

                    _context383.next = 13;
                    return this.sleep(src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_0__.SLEEP_EACH_VCI_REQUEST);

                  case 13:
                    startMs = new Date().getTime(); // await this.obdService.obd2RetriveData(); /*

                    _context383.next = 16;
                    return this.obdService.obd2QuickRetriveData();

                  case 16:
                    // */
                    endMs = new Date().getTime();
                    this.logger.debug("obd2QuickRetrieveData duration: ".concat(Math.round((endMs - startMs) / 1000 * 100) / 100, "s"));
                    return _context383.abrupt("return", true);

                  case 19:
                  case "end":
                    return _context383.stop();
                }
              }, _callee383, this);
            }));
          }
        }, {
          key: "protocolName",
          get: function get() {
            var protocolName = (0, _innova_vci_service_src_obd_obdUtils__WEBPACK_IMPORTED_MODULE_7__.enumProtocolToString)(this.linkedProtocol.protocolId);
            return protocolName.replace('Protocol ', '');
          }
          /**
           * Sleep and check connection
           */

        }, {
          key: "sleep",
          value: function sleep(ms) {
            var checkVehConn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            return (0, tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee384() {
              return _regeneratorRuntime().wrap(function _callee384$(_context384) {
                while (1) switch (_context384.prev = _context384.next) {
                  case 0:
                    _context384.next = 2;
                    return this.helper.sleep(ms);

                  case 2:
                    if (!this.isConnected) {
                      _context384.next = 14;
                      break;
                    }

                    if (!checkVehConn) {
                      _context384.next = 12;
                      break;
                    }

                    _context384.next = 6;
                    return this.isConnectedVehicle();

                  case 6:
                    this._isVehicleConnected = _context384.sent;

                    if (!this.isVehicleConnected) {
                      _context384.next = 11;
                      break;
                    }

                    return _context384.abrupt("return", ms);

                  case 11:
                    throw new Error('Vehicle is disconnected.');

                  case 12:
                    if (this._totalSleepTimeMs >= 0) {
                      this._totalSleepTimeMs += ms;
                    }

                    return _context384.abrupt("return", ms);

                  case 14:
                    this.enableReportSleepTime(false);
                    throw new Error('Disconnected.');

                  case 16:
                  case "end":
                    return _context384.stop();
                }
              }, _callee384, this);
            }));
          }
        }, {
          key: "totalSleepTime",
          get: function get() {
            return this._totalSleepTimeMs;
          }
        }, {
          key: "enableReportSleepTime",
          value: function enableReportSleepTime(isEnable) {
            if (isEnable) {
              this._totalSleepTimeMs = 0;
            } else {
              this._totalSleepTimeMs = -1;
            }
          }
          /**
           * Set Unit and Language for VCI
           */

        }, {
          key: "setVciLocale",
          value: function setVciLocale() {
            var _ref16 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                _ref16$setUnit = _ref16.setUnit,
                setUnit = _ref16$setUnit === void 0 ? true : _ref16$setUnit,
                _ref16$setLang = _ref16.setLang,
                setLang = _ref16$setLang === void 0 ? true : _ref16$setLang;

            return (0, tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee385() {
              var unit_name, units, selected_unit, isOk, lang, langs, selected_lang, _isOk;

              return _regeneratorRuntime().wrap(function _callee385$(_context385) {
                while (1) switch (_context385.prev = _context385.next) {
                  case 0:
                    this.logger.debug("setVciLocale setUnit=".concat(setUnit, ", setLang=").concat(setLang)); // Set unit

                    if (!setUnit) {
                      _context385.next = 13;
                      break;
                    }

                    unit_name = _models_app_data__WEBPACK_IMPORTED_MODULE_12__.AppData.get(_models_app_enum__WEBPACK_IMPORTED_MODULE_9__.EnumAppDataKey.AppRegional);

                    if (!unit_name) {
                      _context385.next = 13;
                      break;
                    }

                    units = [{
                      name: 'Standard',
                      id: _innova_vci_service_src_obd_vcistd__WEBPACK_IMPORTED_MODULE_5__.UNIT_ID.Standard
                    }, {
                      name: 'Metric',
                      id: _innova_vci_service_src_obd_vcistd__WEBPACK_IMPORTED_MODULE_5__.UNIT_ID.Metric
                    }];
                    selected_unit = units.find(function (item) {
                      return item.name === unit_name;
                    });

                    if (!selected_unit) {
                      _context385.next = 13;
                      break;
                    }

                    _context385.next = 9;
                    return this.obdService.setting_unittype(selected_unit.id);

                  case 9:
                    isOk = _context385.sent;
                    _context385.next = 12;
                    return this.sleep(src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_0__.SLEEP_EACH_VCI_REQUEST);

                  case 12:
                    if (isOk) {
                      this._vciResponseData.unitId = selected_unit.id;
                      this.logger.debug('setting_unittype OK', unit_name);
                    }

                  case 13:
                    if (!setLang) {
                      _context385.next = 25;
                      break;
                    }

                    lang = _models_app_data__WEBPACK_IMPORTED_MODULE_12__.AppData.get(_models_app_enum__WEBPACK_IMPORTED_MODULE_9__.EnumAppDataKey.AppLanguage);

                    if (!lang) {
                      _context385.next = 25;
                      break;
                    }

                    langs = [{
                      name: 'English',
                      code: 'en',
                      id: _innova_vci_service_src_obd_vcistd__WEBPACK_IMPORTED_MODULE_5__.GUI_LANGUAGE_ID.GUI_LANG_ENGLISH
                    }, {
                      name: 'Spanish',
                      code: 'es',
                      id: _innova_vci_service_src_obd_vcistd__WEBPACK_IMPORTED_MODULE_5__.GUI_LANGUAGE_ID.GUI_LANG_SPANISH
                    }, {
                      name: 'French',
                      code: 'fr',
                      id: _innova_vci_service_src_obd_vcistd__WEBPACK_IMPORTED_MODULE_5__.GUI_LANGUAGE_ID.GUI_LANG_FRENCH
                    }];
                    selected_lang = langs.find(function (item) {
                      return item.code === lang;
                    });

                    if (!selected_lang) {
                      _context385.next = 25;
                      break;
                    }

                    _context385.next = 21;
                    return this.obdService.setting_language(selected_lang.id);

                  case 21:
                    _isOk = _context385.sent;
                    _context385.next = 24;
                    return this.sleep(src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_0__.SLEEP_EACH_VCI_REQUEST);

                  case 24:
                    if (_isOk) {
                      this._vciResponseData.langId = selected_lang.id;
                      this.logger.debug('setting_language OK', lang);
                    }

                  case 25:
                    return _context385.abrupt("return", true);

                  case 26:
                  case "end":
                    return _context385.stop();
                }
              }, _callee385, this);
            }));
          }
        }, {
          key: "resetVciLocale",
          value: function resetVciLocale() {
            this.isSetVciLocale = false;
          }
        }, {
          key: "connectAndGetToolInfo",
          value: function connectAndGetToolInfo() {
            var sleepMs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            return (0, tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee386() {
              var info, toolGUID, guid, rs, toolInfo;
              return _regeneratorRuntime().wrap(function _callee386$(_context386) {
                while (1) switch (_context386.prev = _context386.next) {
                  case 0:
                    _context386.prev = 0;

                    if (this.isConnected) {
                      _context386.next = 4;
                      break;
                    }

                    _context386.next = 4;
                    return this.initializeBT();

                  case 4:
                    if (!sleepMs) {
                      _context386.next = 7;
                      break;
                    }

                    _context386.next = 7;
                    return this.sleep(sleepMs);

                  case 7:
                    _context386.next = 9;
                    return this.obdService.getVersion();

                  case 9:
                    info = _context386.sent;

                    if (!(!info || !info.productid || !info.boot || !info.main)) {
                      _context386.next = 12;
                      break;
                    }

                    throw new Error("obdService.getVersion return invalid data ".concat(JSON.stringify(info)));

                  case 12:
                    _context386.next = 14;
                    return this.obdService.setting_getguid();

                  case 14:
                    toolGUID = _context386.sent;

                    if (!_innova_helper_service__WEBPACK_IMPORTED_MODULE_11__.InnovaHelper.isInvalidOrEmptyGUID(toolGUID)) {
                      _context386.next = 21;
                      break;
                    }

                    guid = _innova_helper_service__WEBPACK_IMPORTED_MODULE_11__.InnovaHelper.generateGuid(); // this.logger.debug(`writeGUID ${randomGuid} rs: ${rs}`);

                    _context386.next = 19;
                    return this.obdService.setting_setguid(guid);

                  case 19:
                    rs = _context386.sent;

                    if (rs) {
                      toolGUID = guid;
                    }

                  case 21:
                    // */
                    if (lodash__WEBPACK_IMPORTED_MODULE_6__.isEmpty(this.vciResponseData)) {
                      this.resetVciReponseData();
                    }

                    this._vciResponseData.usbProductId = info.productid;
                    this._vciResponseData.bootloaderVersion = info.boot;
                    this._vciResponseData.firmwareVersion = info.main;
                    this._vciResponseData.databaseVersion = info.db;
                    this._vciResponseData.dongleId = toolGUID;
                    toolInfo = Object.assign(Object.assign({
                      db: '0.0.1'
                    }, info), {
                      guid: toolGUID
                    });
                    this._connectedDevAddr = toolGUID;
                    this.logger.debug('connectAndGetToolInfo', toolInfo);

                    _models_app_data__WEBPACK_IMPORTED_MODULE_12__.AppData.set(_models_app_enum__WEBPACK_IMPORTED_MODULE_9__.EnumAppDataKey.InfoToolConnected, toolInfo);

                    this.eventService.publish(_models_app_enum__WEBPACK_IMPORTED_MODULE_9__.EnumAppEvent.InfoToolConnected, toolInfo);
                    return _context386.abrupt("return", toolInfo);

                  case 35:
                    _context386.prev = 35;
                    _context386.t0 = _context386["catch"](0);
                    this.logger.debug('connectAndGetToolInfo failed', _context386.t0);
                    return _context386.abrupt("return", null);

                  case 39:
                  case "end":
                    return _context386.stop();
                }
              }, _callee386, this, [[0, 35]]);
            }));
          }
        }, {
          key: "connectAndRequestData",
          value: function connectAndRequestData() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee387() {
              var currentData, startMs, endMs, voltage, ff, monitor, dtcs, monitorData, milStatus, dtc;
              return _regeneratorRuntime().wrap(function _callee387$(_context387) {
                while (1) switch (_context387.prev = _context387.next) {
                  case 0:
                    _context387.prev = 0;
                    currentData = lodash__WEBPACK_IMPORTED_MODULE_6__.pick(this.vciResponseData, ['vin', 'ymme', 'vinProfile', 'vehicleInfoEcm', 'vehicleInfoTcm', 'vehicleInfoData', 'mileage', 'dongleId', 'usbProductId', 'unitId', 'langId', 'bootloaderVersion', 'firmwareVersion', 'allSupportedModules']);
                    this.setVciResponseData(currentData);
                    this.eventService.publish(_innova_tool_models__WEBPACK_IMPORTED_MODULE_4__.InnovaVCIEvent.SCAN_STATUS, {
                      name: 'Linking to vehicle...',
                      result: this._toolName + ' has been connected'
                    });

                    if (this.linkedProtocol) {
                      _context387.next = 7;
                      break;
                    }

                    _context387.next = 7;
                    return this.linkProtocols();

                  case 7:
                    if (!this.linkedProtocol) {
                      _context387.next = 17;
                      break;
                    }

                    this.logger.debug('Run obd2RetriveData...');
                    startMs = new Date().getTime();
                    _context387.next = 12;
                    return this.obdService.obd2RetriveData();

                  case 12:
                    this.linkedProtocol.isFullLink = _context387.sent;
                    endMs = new Date().getTime();
                    this.logger.debug("[*] obd2RetriveData time: ".concat(Math.round((endMs - startMs) / 1000 * 100) / 100, " seconds"));
                    _context387.next = 17;
                    return this.sleep(src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_0__.SLEEP_TIMEOUT_LONG);

                  case 17:
                    if (this.isSetVciLocale) {
                      _context387.next = 21;
                      break;
                    }

                    _context387.next = 20;
                    return this.setVciLocale();

                  case 20:
                    this.isSetVciLocale = _context387.sent;

                  case 21:
                    if (this._vciResponseData.dongleId) {
                      _context387.next = 24;
                      break;
                    }

                    _context387.next = 24;
                    return this.connectAndGetToolInfo();

                  case 24:
                    //#region Default scan
                    this.eventService.publish(_innova_tool_models__WEBPACK_IMPORTED_MODULE_4__.InnovaVCIEvent.SCAN_STATUS, {
                      name: 'Reading Battery Voltage...',
                      result: this.toolName + ' already linked to vehicle.'
                    });
                    _context387.next = 27;
                    return this.obdService.getBatteryVoltage();

                  case 27:
                    voltage = _context387.sent;

                    // console.log('getBatteryVoltage', voltage);
                    if (voltage && typeof voltage === 'object') {
                      this._vciResponseData.batteryVoltage = voltage.BatteryVoltage === undefined ? '0' : voltage.BatteryVoltage;
                    }

                    this.eventService.publish(_innova_tool_models__WEBPACK_IMPORTED_MODULE_4__.InnovaVCIEvent.SCAN_STATUS, {
                      name: 'Reading Vehicle ECM & TCM...',
                      result: 'Battery Voltage: ' + this._vciResponseData.batteryVoltage
                    }); // 02. vehicle info

                    _context387.next = 32;
                    return this.sleep(src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_0__.SLEEP_EACH_VCI_REQUEST);

                  case 32:
                    _context387.next = 34;
                    return this.getVehicleBufferAndInfo(!this._vciResponseData.vehicleInfoEcm, false // read vehicle info in other flow (T7R-15)
                    // !this._vciResponseData.vehicleInfoData
                    );

                  case 34:
                    this.eventService.publish(_innova_tool_models__WEBPACK_IMPORTED_MODULE_4__.InnovaVCIEvent.SCAN_STATUS, {
                      name: 'Reading Freeze Frame...',
                      result: 'Vehicle ECM & TCM: ' + (this._vciResponseData.vehicleInfoEcm ? 'YES' : 'N/A')
                    }); // 03. freeframe

                    _context387.next = 37;
                    return this.sleep(src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_0__.SLEEP_EACH_VCI_REQUEST);

                  case 37:
                    _context387.next = 39;
                    return this.obdService.getVehReport_OBD2_FF_SID2_BUFF();

                  case 39:
                    ff = _context387.sent;
                    this.logger.debug('getVehReport_OBD2_FF_SID2_BUFF', ff);

                    if (ff.length > 0) {
                      this._vciResponseData.freezeFrameEcm = _bytesToBase(ff[0].data);
                      this._vciResponseData.freezeFrameTcm = _bytesToBase(ff[1] ? ff[1].data : '');
                      /*
                      await this.sleep(SLEEP_EACH_VCI_REQUEST);
                      const freezeFrameDtc = await this.obdService.getVehReport_FreezeFrameDTCInfo();
                      if(freezeFrameDtc){
                        this._vciResponseData.freezeFrameDTCData = freezeFrameDtc as any;
                      } else {
                                   }
                      await this.sleep(SLEEP_EACH_VCI_REQUEST);
                      const freezeFrameLd = await this.obdService.getVehReport_FreezeFrameLDInfo();
                      if(freezeFrameLd){
                        this._vciResponseData.freezeFrameLDData = freezeFrameLd as any;
                      } else {
                                   }
                      */

                      this.eventService.publish(_innova_tool_models__WEBPACK_IMPORTED_MODULE_4__.InnovaVCIEvent.SCAN_STATUS, {
                        name: 'Reading Monitor Status...',
                        result: 'Freeze Frame: ' + (this._vciResponseData.freezeFrameEcm ? 'YES' : 'NO')
                      });
                    } else {
                      this.eventService.publish(_innova_tool_models__WEBPACK_IMPORTED_MODULE_4__.InnovaVCIEvent.SCAN_STATUS, {
                        name: 'Reading Monitor Status...',
                        result: 'Freeze Frame: N/A'
                      });
                    } // 04. monitor


                    _context387.next = 44;
                    return this.sleep(src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_0__.SLEEP_EACH_VCI_REQUEST);

                  case 44:
                    _context387.next = 46;
                    return this.obdService.getVehReport_OBD2_LD_SID1_BUFF();

                  case 46:
                    monitor = _context387.sent;
                    this.logger.debug('getVehReport_OBD2_LD_SID1_BUFF', monitor);

                    if (!(monitor.length > 0)) {
                      _context387.next = 76;
                      break;
                    }

                    this._vciResponseData.monitorEcm = _bytesToBase(monitor[0].data);
                    this._vciResponseData.monitorTcm = _bytesToBase(monitor[1] ? monitor[1].data : '');
                    _context387.next = 53;
                    return this.sleep(src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_0__.SLEEP_EACH_VCI_REQUEST);

                  case 53:
                    _context387.next = 55;
                    return this.readDtcsOBDII();

                  case 55:
                    dtcs = _context387.sent;
                    this.logger.debug('getVehReport_OBD2_DTC_Info readDtcsOBDII', dtcs);
                    lodash__WEBPACK_IMPORTED_MODULE_6__.set(this._vciResponseData, 'dtcInfoData', dtcs);
                    _context387.next = 60;
                    return this.sleep(src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_0__.SLEEP_EACH_VCI_REQUEST);

                  case 60:
                    _context387.next = 62;
                    return this.obdService.getVehReport_MonitorIconStatus();

                  case 62:
                    monitorData = _context387.sent;
                    this._vciResponseData.monitorData = monitorData;
                    this.logger.debug('getVehReport_MonitorIconStatus', monitorData);
                    _context387.next = 67;
                    return this.sleep(src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_0__.SLEEP_EACH_VCI_REQUEST);

                  case 67:
                    _context387.next = 69;
                    return this.obdService.getVehReport_MIL_Status();

                  case 69:
                    milStatus = _context387.sent;
                    this.logger.debug('getVehReport_MIL_Status', milStatus);

                    if (milStatus && typeof milStatus !== 'string') {
                      milStatus = milStatus.MilStatus || '';
                    }

                    this._vciResponseData.milStatus = milStatus;
                    this.eventService.publish(_innova_tool_models__WEBPACK_IMPORTED_MODULE_4__.InnovaVCIEvent.SCAN_STATUS, {
                      name: 'Reading ECM & TCM DTCs...',
                      result: 'Monitor Status: ' + (this._vciResponseData.monitorEcm ? 'YES' : 'NO')
                    });
                    _context387.next = 77;
                    break;

                  case 76:
                    this.eventService.publish(_innova_tool_models__WEBPACK_IMPORTED_MODULE_4__.InnovaVCIEvent.SCAN_STATUS, {
                      name: 'Reading ECM & TCM DTCs...',
                      result: 'Monitor Status: N/A'
                    });

                  case 77:
                    _context387.next = 79;
                    return this.sleep(src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_0__.SLEEP_EACH_VCI_REQUEST);

                  case 79:
                    _context387.next = 81;
                    return this.obdService.getVehReport_OBD2_DTC_SID37A_BUFF();

                  case 81:
                    dtc = _context387.sent;
                    this.logger.debug('getVehReport_OBD2_DTC_SID37A_BUFF', dtc);

                    if (dtc.length > 0) {
                      this._vciResponseData.dtcEcm = _bytesToBase(dtc[0].data);
                      this._vciResponseData.dtcTcm = _bytesToBase(dtc[1] ? dtc[1].data : '');
                      this.eventService.publish(_innova_tool_models__WEBPACK_IMPORTED_MODULE_4__.InnovaVCIEvent.SCAN_STATUS, {
                        name: 'Reading VIN...',
                        result: 'ECM & TCM DTCs: ' + (this._vciResponseData.dtcEcm ? 'YES' : 'NO')
                      });
                    } else {
                      this.eventService.publish(_innova_tool_models__WEBPACK_IMPORTED_MODULE_4__.InnovaVCIEvent.SCAN_STATUS, {
                        name: 'Reading VIN...',
                        result: 'ECM & TCM DTCs: N/A'
                      });
                    } // 01. ymme


                    if (this._vciResponseData.vinProfile) {
                      _context387.next = 89;
                      break;
                    }

                    _context387.next = 87;
                    return this.sleep(src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_0__.SLEEP_EACH_VCI_REQUEST);

                  case 87:
                    _context387.next = 89;
                    return this.getYMME();

                  case 89:
                    _context387.next = 93;
                    break;

                  case 91:
                    _context387.prev = 91;
                    _context387.t0 = _context387["catch"](0);

                  case 93:
                    return _context387.abrupt("return", true);

                  case 94:
                  case "end":
                    return _context387.stop();
                }
              }, _callee387, this, [[0, 91]]);
            }));
          }
        }, {
          key: "scanModules",
          value: function scanModules(vin) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee388() {
              var allSupportedGroups, supportedModules;
              return _regeneratorRuntime().wrap(function _callee388$(_context388) {
                while (1) switch (_context388.prev = _context388.next) {
                  case 0:
                    console.log('scanModules ßvin: ', vin);
                    this.eventService.publish(_innova_tool_models__WEBPACK_IMPORTED_MODULE_4__.InnovaVCIEvent.SCAN_STATUS, {
                      name: 'Reading Supported OEM Modules...',
                      result: 'VIN: ' + (this._vciResponseData.vin ? this._vciResponseData.vin : vin)
                    });
                    this._vciResponseData.oemModules = [];

                    if (!lodash__WEBPACK_IMPORTED_MODULE_6__.isEmpty(this._vciResponseData.allSupportedModules)) {
                      _context388.next = 6;
                      break;
                    }

                    _context388.next = 6;
                    return this.scanAllSupportedModules();

                  case 6:
                    this.logger.debug('All Supported Modules', this._vciResponseData.allSupportedModules); // Full Scan

                    allSupportedGroups = this._vciResponseData.allSupportedModules.map(function (m) {
                      return m.InnovaGroup;
                    });
                    this.logger.debug('All Supported Groups', allSupportedGroups);

                    if (!(allSupportedGroups.length > 0)) {
                      _context388.next = 16;
                      break;
                    }

                    this.eventService.publish(_innova_tool_models__WEBPACK_IMPORTED_MODULE_4__.InnovaVCIEvent.SCAN_STATUS, {
                      name: 'Preparing to scan modules...',
                      result: 'Total Modules: ' + allSupportedGroups.length
                    });
                    _context388.next = 13;
                    return this.readDtc(allSupportedGroups);

                  case 13:
                    supportedModules = _context388.sent;
                    this.logger.debug('Full network scan results', supportedModules);
                    this._vciResponseData.oemModules = supportedModules.map(function (oemModule) {
                      return {
                        system: oemModule.System,
                        subsystem: oemModule.SubSystem,
                        Dtcs: oemModule.Dtcs,
                        group: oemModule['InnovaGroup'],
                        modulename: oemModule.ModuleName,
                        Status: oemModule.Status,
                        Skipped: oemModule.Skipped,
                        InvalidDTC: oemModule.Status === _innova_tool_models__WEBPACK_IMPORTED_MODULE_4__.InnovaToolModuleStatus.Valid ? 0 : 1
                      };
                    });

                  case 16:
                    return _context388.abrupt("return", true);

                  case 17:
                  case "end":
                    return _context388.stop();
                }
              }, _callee388, this);
            }));
          }
          /**
           * Connect and YMME, Vin, ODO
           */

        }, {
          key: "connectAndGetVehicleSummary",
          value: function connectAndGetVehicleSummary() {
            var readOdo = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            var readSupportedModules = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            return (0, tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee389() {
              var isOK, _yield$this$getYMME, ymmeRaw, ymmeReadable, vin;

              return _regeneratorRuntime().wrap(function _callee389$(_context389) {
                while (1) switch (_context389.prev = _context389.next) {
                  case 0:
                    if (this.isConnected) {
                      _context389.next = 6;
                      break;
                    }

                    _context389.next = 3;
                    return this.initializeBT();

                  case 3:
                    isOK = _context389.sent;

                    if (isOK) {
                      _context389.next = 6;
                      break;
                    }

                    throw new Error('Init failed.');

                  case 6:
                    _context389.next = 8;
                    return this.linkProtocols();

                  case 8:
                    _context389.next = 10;
                    return this.sleep(src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_0__.SLEEP_EACH_VCI_REQUEST, true);

                  case 10:
                    _context389.next = 12;
                    return this.getYMME();

                  case 12:
                    _yield$this$getYMME = _context389.sent;
                    ymmeRaw = _yield$this$getYMME.ymmeRaw;
                    ymmeReadable = _yield$this$getYMME.ymmeReadable;
                    vin = this._vciResponseData.vin;

                    if (!(ymmeReadable && vin)) {
                      _context389.next = 27;
                      break;
                    }

                    if (!readOdo) {
                      _context389.next = 22;
                      break;
                    }

                    _context389.next = 20;
                    return this.sleep(src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_0__.SLEEP_EACH_VCI_REQUEST, true);

                  case 20:
                    _context389.next = 22;
                    return this.readOdometer();

                  case 22:
                    if (!readSupportedModules) {
                      _context389.next = 27;
                      break;
                    }

                    _context389.next = 25;
                    return this.sleep(src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_0__.SLEEP_EACH_VCI_REQUEST, true);

                  case 25:
                    _context389.next = 27;
                    return this.scanAllSupportedModules();

                  case 27:
                  case "end":
                    return _context389.stop();
                }
              }, _callee389, this);
            }));
          }
        }, {
          key: "getOfmItems",
          value: function getOfmItems(pidsupport) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee390() {
              var numPID, results, _index3, itemid, profile_id, val, objitem, itemname, unit_str, value;

              return _regeneratorRuntime().wrap(function _callee390$(_context390) {
                while (1) switch (_context390.prev = _context390.next) {
                  case 0:
                    numPID = pidsupport.num_profile;
                    results = [];
                    _index3 = 0;

                  case 3:
                    if (!(_index3 < numPID)) {
                      _context390.next = 19;
                      break;
                    }

                    itemid = pidsupport.list[_index3].ofm_item;
                    profile_id = pidsupport.list[_index3].profileid;
                    _context390.next = 8;
                    return this.obdService.getofmprofileid_value(profile_id);

                  case 8:
                    val = _context390.sent;
                    objitem = JSON.parse(_innova_vci_service_src_obdservice_service__WEBPACK_IMPORTED_MODULE_1__.Dataparser.ObjtoStringBeauty(val));
                    _context390.next = 12;
                    return this.obdService.ofm_getitemname(itemid);

                  case 12:
                    itemname = _context390.sent;
                    unit_str = objitem.unit;
                    value = objitem.value;
                    results.push({
                      id: itemid,
                      name: itemname,
                      value: value,
                      unit: unit_str
                    });

                  case 16:
                    _index3++;
                    _context390.next = 3;
                    break;

                  case 19:
                    return _context390.abrupt("return", results);

                  case 20:
                  case "end":
                    return _context390.stop();
                }
              }, _callee390, this);
            }));
          }
        }, {
          key: "eraseDtcsOBDII",
          value: function eraseDtcsOBDII() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee391() {
              var eraseRs;
              return _regeneratorRuntime().wrap(function _callee391$(_context391) {
                while (1) switch (_context391.prev = _context391.next) {
                  case 0:
                    if (this.isConnected) {
                      _context391.next = 3;
                      break;
                    }

                    _context391.next = 3;
                    return this.initializeBT();

                  case 3:
                    _context391.next = 5;
                    return this.obdService.OBD2_erase_Dtcs();

                  case 5:
                    eraseRs = _context391.sent;

                    if (this.linkedProtocol) {
                      this.linkedProtocol.isFullLink = false; // Force refresh data after erase
                    }

                    this.logger.debug('eraseDtcsOBDII result', eraseRs);
                    return _context391.abrupt("return", eraseRs ? eraseRs.result === 'OK' : false);

                  case 9:
                  case "end":
                    return _context391.stop();
                }
              }, _callee391, this);
            }));
          }
        }, {
          key: "eraseDTCs",
          value: function eraseDTCs(oemModule) {
            var clearCache = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
            return (0, tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee392() {
              var eraseRs;
              return _regeneratorRuntime().wrap(function _callee392$(_context392) {
                while (1) switch (_context392.prev = _context392.next) {
                  case 0:
                    if (this.isConnected) {
                      _context392.next = 3;
                      break;
                    }

                    _context392.next = 3;
                    return this.initializeBT();

                  case 3:
                    _context392.next = 5;
                    return this.obdService.nwscan_eraseSystem({
                      system: oemModule.System,
                      subSystem: oemModule.SubSystem
                    });

                  case 5:
                    eraseRs = _context392.sent;

                    if (this.linkedProtocol) {
                      this.linkedProtocol.isFullLink = false; // Force refresh data after erase
                    }

                    this.logger.debug('eraseDtcs result', oemModule, eraseRs); // if (clearCache) {
                    //   this.currentVin && this.dbService.deleteCacheData(this.currentVin);
                    // }

                    return _context392.abrupt("return", eraseRs ? eraseRs['Erase_Dtc'] === 'OK' : false);

                  case 9:
                  case "end":
                    return _context392.stop();
                }
              }, _callee392, this);
            }));
          }
        }, {
          key: "eraseDTCsByGroup",
          value: function eraseDTCsByGroup(innovaGroupIds, filter) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee393() {
              var oemModules, isErased, idx;
              return _regeneratorRuntime().wrap(function _callee393$(_context393) {
                while (1) switch (_context393.prev = _context393.next) {
                  case 0:
                    // this.obdService.nwscan_eraseSystem()
                    if (!Array.isArray(innovaGroupIds)) {
                      innovaGroupIds = [innovaGroupIds];
                    }

                    this.logger.debug('eraseDtc', innovaGroupIds);

                    if (this.isConnected) {
                      _context393.next = 5;
                      break;
                    }

                    _context393.next = 5;
                    return this.initializeBT();

                  case 5:
                    oemModules = lodash__WEBPACK_IMPORTED_MODULE_6__.get(this.vciResponseData, 'allSupportedModules');

                    if (!lodash__WEBPACK_IMPORTED_MODULE_6__.isEmpty(oemModules)) {
                      _context393.next = 8;
                      break;
                    }

                    return _context393.abrupt("return", true);

                  case 8:
                    isErased = true, idx = 0;
                    oemModules = oemModules.filter(function (m) {
                      var isValid = [_innova_tool_models__WEBPACK_IMPORTED_MODULE_4__.InnovaToolModuleStatus.Valid, undefined].includes(m.Status);
                      var isModuleInGroup = innovaGroupIds.includes(m.InnovaGroup);

                      if (isValid && isModuleInGroup) {
                        if (filter) {
                          return m.System == filter.System && m.SubSystem == filter.SubSystem;
                        }

                        return true;
                      }

                      return false;
                    });

                  case 10:
                    if (!(idx < oemModules.length)) {
                      _context393.next = 20;
                      break;
                    }

                    _context393.next = 13;
                    return this.eraseDTCs(oemModules[idx++], false);

                  case 13:
                    isErased = _context393.sent;

                    if (isErased) {
                      _context393.next = 16;
                      break;
                    }

                    return _context393.abrupt("break", 20);

                  case 16:
                    _context393.next = 18;
                    return this.sleep(src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_0__.SLEEP_EACH_VCI_REQUEST);

                  case 18:
                    _context393.next = 10;
                    break;

                  case 20:
                    return _context393.abrupt("return", isErased);

                  case 21:
                  case "end":
                    return _context393.stop();
                }
              }, _callee393, this);
            }));
          }
        }, {
          key: "readPrimaryDtc",
          value: function readPrimaryDtc() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee394() {
              var freezeFrameDtc;
              return _regeneratorRuntime().wrap(function _callee394$(_context394) {
                while (1) switch (_context394.prev = _context394.next) {
                  case 0:
                    if (this.linkedProtocol) {
                      _context394.next = 3;
                      break;
                    }

                    _context394.next = 3;
                    return this.linkProtocols();

                  case 3:
                    _context394.next = 5;
                    return this.obdService.obd2QuickRetriveData(null, true);

                  case 5:
                    _context394.next = 7;
                    return this.obdService.getVehReport_FreezeFrameDTCInfo();

                  case 7:
                    freezeFrameDtc = _context394.sent;

                    if (!lodash__WEBPACK_IMPORTED_MODULE_6__.isEmpty(freezeFrameDtc)) {
                      _context394.next = 12;
                      break;
                    }

                    return _context394.abrupt("return", []);

                  case 12:
                    return _context394.abrupt("return", [{
                      InvalidDTC: 0,
                      Dtcs: [freezeFrameDtc]
                    }]);

                  case 13:
                  case "end":
                    return _context394.stop();
                }
              }, _callee394, this);
            }));
          }
        }, {
          key: "readDtcsOBDII",
          value: function readDtcsOBDII() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee395() {
              var dtcInfoData, moduleIndex, moduleDtcs, _index4, dtcDef;

              return _regeneratorRuntime().wrap(function _callee395$(_context395) {
                while (1) switch (_context395.prev = _context395.next) {
                  case 0:
                    if (this.linkedProtocol) {
                      _context395.next = 3;
                      break;
                    }

                    _context395.next = 3;
                    return this.linkProtocols();

                  case 3:
                    _context395.next = 5;
                    return this.obdService.getVehReport_OBD2_DTC_Info();

                  case 5:
                    dtcInfoData = _context395.sent;

                    if (!dtcInfoData.length) {
                      _context395.next = 20;
                      break;
                    }

                    moduleIndex = 0;

                  case 8:
                    moduleDtcs = dtcInfoData[moduleIndex].Dtcs;

                    if (!moduleDtcs) {
                      _context395.next = 18;
                      break;
                    }

                    _index4 = 0;

                  case 11:
                    _context395.next = 13;
                    return this.sleep(src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_0__.SLEEP_EACH_VCI_REQUEST);

                  case 13:
                    _context395.next = 15;
                    return this.obdService.getVehReport_OBD2_DTC_Def(moduleIndex, _index4)["catch"](this.logger.error);

                  case 15:
                    dtcDef = _context395.sent;
                    moduleDtcs[_index4] = dtcDef;

                  case 17:
                    if (++_index4 < moduleDtcs.length) {
                      _context395.next = 11;
                      break;
                    }

                  case 18:
                    if (++moduleIndex < dtcInfoData.length) {
                      _context395.next = 8;
                      break;
                    }

                  case 19:
                    return _context395.abrupt("return", dtcInfoData);

                  case 20:
                    return _context395.abrupt("return", null);

                  case 21:
                  case "end":
                    return _context395.stop();
                }
              }, _callee395, this);
            }));
          }
        }, {
          key: "readDtc",
          value: function readDtc(innovaGroupIds, filter) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee396() {
              var oemModules, total, res, totalFiltered, index, result, oemModule, oemItem, _oemModule, dtcs, dtcId, dtcinfo, _oemModule2;

              return _regeneratorRuntime().wrap(function _callee396$(_context396) {
                while (1) switch (_context396.prev = _context396.next) {
                  case 0:
                    if (this.isConnected) {
                      _context396.next = 2;
                      break;
                    }

                    return _context396.abrupt("return", null);

                  case 2:
                    oemModules = this.vciResponseData.allSupportedModules;
                    total = oemModules.length;

                    if (Array.isArray(oemModules)) {
                      oemModules = oemModules.filter(function (m) {
                        return !!m.ModuleName;
                      });
                    }

                    if (filter) {
                      oemModules = oemModules.filter(function (m) {
                        return m.System === filter.System && m.SubSystem === filter.SubSystem;
                      });
                    }

                    res = [], totalFiltered = oemModules.length, index = 0;

                    if (!Array.isArray(innovaGroupIds)) {
                      innovaGroupIds = [innovaGroupIds];
                    }

                    result = '';

                  case 9:
                    if (!oemModules.length) {
                      _context396.next = 65;
                      break;
                    }

                    oemModule = oemModules.shift();

                    if (!innovaGroupIds.includes(oemModule.InnovaGroup)) {
                      _context396.next = 63;
                      break;
                    }

                    this.logger.debug("Start reading module [".concat(++index, "/").concat(totalFiltered, "/").concat(total, "] DTCs"), oemModule);
                    this.eventService.publish(_innova_tool_models__WEBPACK_IMPORTED_MODULE_4__.InnovaVCIEvent.SCAN_STATUS, {
                      name: '(' + index + '/' + total + '): ' + oemModule.ModuleName + ' - Scanning...',
                      result: result
                    });

                    if (this.linkedProtocol) {
                      _context396.next = 18;
                      break;
                    }

                    this.logger.debug('Try linkprotocol before readDtc');
                    _context396.next = 18;
                    return this.linkProtocols();

                  case 18:
                    _context396.next = 20;
                    return this.sleep(src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_0__.SLEEP_EACH_VCI_REQUEST);

                  case 20:
                    _context396.next = 22;
                    return this.obdService.nwscan_LinkSystem({
                      system: oemModule.System,
                      subSystem: oemModule.SubSystem
                    });

                  case 22:
                    oemItem = _context396.sent;
                    this.logger.debug('nwscan_LinkSystem details', oemItem, this.linkedProtocol);

                    if (!oemItem) {
                      _context396.next = 57;
                      break;
                    }

                    _oemModule = oemModule;

                    if (!lodash__WEBPACK_IMPORTED_MODULE_6__.has(oemItem, 'data')) {
                      _context396.next = 49;
                      break;
                    }

                    dtcs = lodash__WEBPACK_IMPORTED_MODULE_6__.get(oemItem, 'data.Dtcs', []);

                    if (!dtcs.length) {
                      _context396.next = 43;
                      break;
                    }

                    dtcId = 0;

                  case 30:
                    if (!(dtcId < dtcs.length)) {
                      _context396.next = 40;
                      break;
                    }

                    _context396.next = 33;
                    return this.sleep(src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_0__.SLEEP_EACH_VCI_REQUEST);

                  case 33:
                    _context396.next = 35;
                    return this.obdService.nwscan_getdtcdef({
                      system: oemModule.System,
                      subSystem: oemModule.SubSystem,
                      id: dtcId
                    });

                  case 35:
                    dtcinfo = _context396.sent;
                    dtcinfo['def'] && (dtcs[dtcId]['definition'] = dtcinfo['def']);
                    dtcId++;
                    _context396.next = 30;
                    break;

                  case 40:
                    result = _oemModule.ModuleName + ': ' + dtcs.length + ' DTCs';
                    _context396.next = 44;
                    break;

                  case 43:
                    result = _oemModule.ModuleName + ': Good';

                  case 44:
                    _oemModule.Dtcs = dtcs;
                    _oemModule.Skipped = false;

                    if (oemItem['data']['IsInvalidDTC'] === 1) {
                      _oemModule.Status = _innova_tool_models__WEBPACK_IMPORTED_MODULE_4__.InnovaToolModuleStatus.Available;
                    } else {
                      _oemModule.Status = _innova_tool_models__WEBPACK_IMPORTED_MODULE_4__.InnovaToolModuleStatus.Valid;
                    }

                    _context396.next = 53;
                    break;

                  case 49:
                    _oemModule.Dtcs = [];
                    _oemModule.Status = lodash__WEBPACK_IMPORTED_MODULE_6__.get(oemItem, 'error.Status') === _innova_tool_models__WEBPACK_IMPORTED_MODULE_4__.InnovaToolModuleStatus.NotSupported ? _innova_tool_models__WEBPACK_IMPORTED_MODULE_4__.InnovaToolModuleStatus.NotSupported : _innova_tool_models__WEBPACK_IMPORTED_MODULE_4__.InnovaToolModuleStatus.Unknown;
                    result = _oemModule.ModuleName + ': Unresponsive';
                    _oemModule.Skipped = true;

                  case 53:
                    this.eventService.publish(_innova_tool_models__WEBPACK_IMPORTED_MODULE_4__.InnovaVCIEvent.SCAN_STATUS, {
                      name: index < oemModules.length ? 'Finish! Preparing to scan next module...' : '',
                      result: result
                    });
                    res.push(_oemModule);
                    _context396.next = 63;
                    break;

                  case 57:
                    _oemModule2 = oemModule;
                    _oemModule2.Dtcs = null;
                    _oemModule2.Status = _innova_tool_models__WEBPACK_IMPORTED_MODULE_4__.InnovaToolModuleStatus.Unknown;
                    _oemModule2.Skipped = true;
                    this.eventService.publish(_innova_tool_models__WEBPACK_IMPORTED_MODULE_4__.InnovaVCIEvent.SCAN_STATUS, {
                      name: index < oemModules.length ? 'Finish! Preparing to scan next module...' : '',
                      result: result
                    });
                    res.push(_oemModule2);

                  case 63:
                    _context396.next = 9;
                    break;

                  case 65:
                    return _context396.abrupt("return", res);

                  case 66:
                  case "end":
                    return _context396.stop();
                }
              }, _callee396, this);
            }));
          }
        }, {
          key: "obdTest",
          value: function obdTest(mode) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee397() {
              var isOK, result;
              return _regeneratorRuntime().wrap(function _callee397$(_context397) {
                while (1) switch (_context397.prev = _context397.next) {
                  case 0:
                    if (this.isConnected) {
                      _context397.next = 6;
                      break;
                    }

                    _context397.next = 3;
                    return this.initializeBT();

                  case 3:
                    isOK = _context397.sent;

                    if (isOK) {
                      _context397.next = 6;
                      break;
                    }

                    throw new Error('Init failed.');

                  case 6:
                    _context397.t0 = mode;
                    _context397.next = _context397.t0 === 5 ? 9 : _context397.t0 === 6 ? 15 : _context397.t0 === 8 ? 21 : 25;
                    break;

                  case 9:
                    _context397.next = 11;
                    return this.obdService.linkVehReport_OBD2_SPECIALTEST_SID5();

                  case 11:
                    _context397.next = 13;
                    return this.obdService.getVehReport_OBD2_SPECIALTEST_SID5_BUFF();

                  case 13:
                    result = _context397.sent;
                    return _context397.abrupt("return", JSON.parse(_innova_vci_service_src_obdservice_service__WEBPACK_IMPORTED_MODULE_1__.Dataparser.bytesToString(result[0].data)));

                  case 15:
                    _context397.next = 17;
                    return this.obdService.linkVehReport_OBD2_SPECIALTEST_SID6();

                  case 17:
                    _context397.next = 19;
                    return this.obdService.getVehReport_OBD2_SPECIALTEST_SID6_BUFF();

                  case 19:
                    result = _context397.sent;
                    return _context397.abrupt("return", result[0].data || result);

                  case 21:
                    _context397.next = 23;
                    return this.obdService.linkVehReport_OBD2_SPECIALTEST_SID8();

                  case 23:
                    result = _context397.sent;
                    return _context397.abrupt("return", result);

                  case 25:
                    throw new Error("This mode test ".concat(mode, " is unsupported."));

                  case 26:
                  case "end":
                    return _context397.stop();
                }
              }, _callee397, this);
            }));
          }
        }, {
          key: "runToolFeature",
          value: function runToolFeature(feature) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee398() {
              return _regeneratorRuntime().wrap(function _callee398$(_context398) {
                while (1) switch (_context398.prev = _context398.next) {
                  case 0:
                    if (this.linkedProtocol) {
                      _context398.next = 3;
                      break;
                    }

                    _context398.next = 3;
                    return this.linkProtocols();

                  case 3:
                    _context398.next = 5;
                    return this.sleep(src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_0__.SLEEP_TIMEOUT);

                  case 5:
                    _context398.t0 = feature;
                    _context398.next = _context398.t0 === _innova_tool_models__WEBPACK_IMPORTED_MODULE_4__.InnovaToolFeatures.SpecialTest ? 8 : _context398.t0 === _innova_tool_models__WEBPACK_IMPORTED_MODULE_4__.InnovaToolFeatures.ActuatorTest ? 9 : _context398.t0 === _innova_tool_models__WEBPACK_IMPORTED_MODULE_4__.InnovaToolFeatures.OilReset ? 10 : _context398.t0 === _innova_tool_models__WEBPACK_IMPORTED_MODULE_4__.InnovaToolFeatures.BatteryReset ? 11 : _context398.t0 === _innova_tool_models__WEBPACK_IMPORTED_MODULE_4__.InnovaToolFeatures.EPB ? 12 : _context398.t0 === _innova_tool_models__WEBPACK_IMPORTED_MODULE_4__.InnovaToolFeatures.SASCalib ? 13 : _context398.t0 === _innova_tool_models__WEBPACK_IMPORTED_MODULE_4__.InnovaToolFeatures.ABS_Bleeding ? 14 : _context398.t0 === _innova_tool_models__WEBPACK_IMPORTED_MODULE_4__.InnovaToolFeatures.Battery_Health_Check ? 15 : _context398.t0 === _innova_tool_models__WEBPACK_IMPORTED_MODULE_4__.InnovaToolFeatures.DPF_Reset ? 16 : _context398.t0 === _innova_tool_models__WEBPACK_IMPORTED_MODULE_4__.InnovaToolFeatures.TPMS_Reset ? 17 : _context398.t0 === _innova_tool_models__WEBPACK_IMPORTED_MODULE_4__.InnovaToolFeatures.Service_Reset ? 18 : 19;
                    break;

                  case 8:
                    return _context398.abrupt("return", this.obdService.spectest_enter_proc());

                  case 9:
                    return _context398.abrupt("return", this.obdService.actuatortest_enter_proc());

                  case 10:
                    return _context398.abrupt("return", this.obdService.oil_reset_enter_proc());

                  case 11:
                    return _context398.abrupt("return", this.obdService.battery_reset_enter_proc());

                  case 12:
                    return _context398.abrupt("return", this.obdService.epb_enter_proc());

                  case 13:
                    return _context398.abrupt("return", this.obdService.sas_enter_proc());

                  case 14:
                    return _context398.abrupt("return", this.obdService.ABS_bleeding_enter_proc());

                  case 15:
                    return _context398.abrupt("return", this.obdService.battery_health_check_enter_proc());

                  case 16:
                    return _context398.abrupt("return", this.obdService.dpf_enter_proc());

                  case 17:
                    return _context398.abrupt("return", this.obdService.tpms_reset_enter_proc());

                  case 18:
                    return _context398.abrupt("return", this.obdService.service_reset_proc_enter());

                  case 19:
                  case "end":
                    return _context398.stop();
                }
              }, _callee398, this);
            }));
          }
        }, {
          key: "initToolScreenGUI",
          value: function initToolScreenGUI() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee399() {
              var _this93 = this;

              var isOk;
              return _regeneratorRuntime().wrap(function _callee399$(_context399) {
                while (1) switch (_context399.prev = _context399.next) {
                  case 0:
                    if (!this.isScreenGuiInitialized) {
                      _context399.next = 2;
                      break;
                    }

                    return _context399.abrupt("return", true);

                  case 2:
                    this.logger.debug('initToolScreenGUI OK');

                    if (this.isSetVciLocale) {
                      _context399.next = 7;
                      break;
                    }

                    _context399.next = 6;
                    return this.setVciLocale();

                  case 6:
                    this.isSetVciLocale = _context399.sent;

                  case 7:
                    this._screenEvents = new rxjs__WEBPACK_IMPORTED_MODULE_21__.Subject();
                    this.eventService.subscribe(_innova_tool_models__WEBPACK_IMPORTED_MODULE_4__.InnovaVCIEvent.USER_GUI_INFO, function (data) {
                      if (!data) return;

                      _this93._screenEvents.next(new _InnovaScreenEventResp(data));
                    });
                    this.isScreenGuiInitialized = true;
                    _context399.next = 12;
                    return this.sleep(200)["catch"](function () {
                      return false;
                    });

                  case 12:
                    isOk = _context399.sent;
                    return _context399.abrupt("return", isOk);

                  case 14:
                  case "end":
                    return _context399.stop();
                }
              }, _callee399, this);
            }));
          }
        }, {
          key: "screenAction",
          get: function get() {
            return this._screenActions;
          }
        }, {
          key: "screenEvents",
          get: function get() {
            return this._screenEvents;
          }
        }, {
          key: "getYMME",
          value: function getYMME() {
            var readableData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
            return (0, tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee400() {
              var ymmeRaw, ymmeReadable, isNoYmme, vin, ymmeInfo, vehinfo, year;
              return _regeneratorRuntime().wrap(function _callee400$(_context400) {
                while (1) switch (_context400.prev = _context400.next) {
                  case 0:
                    _context400.next = 2;
                    return this.obdService.getVehReport_YMME_PROFILE();

                  case 2:
                    ymmeRaw = _context400.sent;
                    this.logger.debug('YMME Profile', ymmeRaw);

                    if (!(ymmeRaw.length === 0)) {
                      _context400.next = 6;
                      break;
                    }

                    throw new Error('get ymme failed: ' + ymmeRaw[0].error ? ymmeRaw[0].error.message : 0);

                  case 6:
                    isNoYmme = _isEmptyResponse(ymmeRaw[0].data);

                    if (!isNoYmme) {
                      _context400.next = 11;
                      break;
                    }

                    this._vciResponseData.vin = null;
                    _context400.next = 25;
                    break;

                  case 11:
                    this._vciResponseData.vinProfile = _bytesToBase(ymmeRaw[0].data);
                    vin = (0, _innova_vci_service_src_utilities_dataParser__WEBPACK_IMPORTED_MODULE_2__.bytesToString)(ymmeRaw[0].data).replace(/[^0-9a-zA-Z]/g, '');

                    if (vin && vin.length >= 17) {
                      this._vciResponseData.vin = vin.substr(0, 17);
                    } // readable data


                    if (!readableData) {
                      _context400.next = 25;
                      break;
                    }

                    _context400.next = 17;
                    return this.obdService.ymme_get(254)["catch"](function (err) {
                      return null;
                    });

                  case 17:
                    ymmeInfo = _context400.sent;
                    this.logger.debug('ymme_get 254', ymmeInfo);
                    _context400.next = 21;
                    return this.obdService.getVehReport_YMME_String();

                  case 21:
                    ymmeReadable = _context400.sent;
                    this.logger.debug('getVehReport_YMME_String', ymmeReadable);

                    if (ymmeReadable && ymmeInfo && ymmeInfo['vehinfo']) {
                      /*
                       * Update 'year' if not matched (FW: 22)
                       * https://iectech.atlassian.net/browse/ITRD-207
                       */
                      vehinfo = ymmeInfo['vehinfo'] || '';
                      year = vehinfo.substr(0, vehinfo.indexOf(' '));

                      if (ymmeReadable.year !== year) {
                        ymmeReadable.year = year;
                      }
                    }

                    this.setYmme(ymmeReadable);

                  case 25:
                    return _context400.abrupt("return", {
                      ymmeRaw: ymmeRaw,
                      ymmeReadable: ymmeReadable
                    });

                  case 26:
                  case "end":
                    return _context400.stop();
                }
              }, _callee400, this);
            }));
          }
        }, {
          key: "getVehicleBufferAndInfo",
          value: function getVehicleBufferAndInfo() {
            var readBuffer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
            var readInfo = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
            return (0, tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee401() {
              var vehicleinfoBuffer, vehicleinfoStr;
              return _regeneratorRuntime().wrap(function _callee401$(_context401) {
                while (1) switch (_context401.prev = _context401.next) {
                  case 0:
                    if (this.linkedProtocol) {
                      _context401.next = 3;
                      break;
                    }

                    _context401.next = 3;
                    return this.linkProtocols();

                  case 3:
                    if (!readBuffer) {
                      _context401.next = 14;
                      break;
                    }

                    _context401.next = 6;
                    return this.obdService.getVehReport_OBD2_VEHINFO_SID9_BUFF();

                  case 6:
                    vehicleinfoBuffer = _context401.sent;
                    this.logger.debug('getVehReport_OBD2_VEHINFO_SID9_BUFF', vehicleinfoBuffer);

                    if (!(vehicleinfoBuffer.length === 0)) {
                      _context401.next = 10;
                      break;
                    }

                    throw new Error('get vehicleinfo failed: ' + vehicleinfoBuffer[0].error ? vehicleinfoBuffer[0].error.message : 0);

                  case 10:
                    if (!_isEmptyResponse(vehicleinfoBuffer[0].data)) {
                      _context401.next = 12;
                      break;
                    }

                    throw new Error('getVehReport_OBD2_VEHINFO_SID9_BUFF response empty');

                  case 12:
                    this._vciResponseData.vehicleInfoEcm = _bytesToBase(vehicleinfoBuffer[0].data);
                    this._vciResponseData.vehicleInfoTcm = _bytesToBase(vehicleinfoBuffer[1] ? vehicleinfoBuffer[1].data : '');

                  case 14:
                    if (!readInfo) {
                      _context401.next = 20;
                      break;
                    }

                    _context401.next = 17;
                    return this.obdService.getVehReport_OBD2_VehicleInfo_SID9();

                  case 17:
                    vehicleinfoStr = _context401.sent;
                    this.logger.debug('getVehReport_OBD2_VehicleInfo_SID9', vehicleinfoStr);

                    if (!lodash__WEBPACK_IMPORTED_MODULE_6__.isEmpty(vehicleinfoStr)) {
                      this._vciResponseData.vehicleInfoData = vehicleinfoStr;
                    }

                  case 20:
                    return _context401.abrupt("return", {
                      vehicleinfoStr: vehicleinfoStr,
                      vehicleinfoBuffer: vehicleinfoBuffer
                    });

                  case 21:
                  case "end":
                    return _context401.stop();
                }
              }, _callee401, this);
            }));
          }
        }, {
          key: "readOdometer",
          value: function readOdometer() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee402() {
              var odometer, ofmitem, odo, unitId, isInvalid;
              return _regeneratorRuntime().wrap(function _callee402$(_context402) {
                while (1) switch (_context402.prev = _context402.next) {
                  case 0:
                    if (this.isSetVciLocale) {
                      _context402.next = 3;
                      break;
                    }

                    _context402.next = 3;
                    return this.setVciLocale({
                      setUnit: true,
                      setLang: false
                    });

                  case 3:
                    _context402.next = 5;
                    return this.obdService.getodometer_pidsupport();

                  case 5:
                    odometer = _context402.sent;

                    if (!odometer) {
                      _context402.next = 16;
                      break;
                    }

                    _context402.next = 9;
                    return this.getOfmItems(odometer);

                  case 9:
                    ofmitem = _context402.sent;

                    if (!ofmitem.length) {
                      _context402.next = 16;
                      break;
                    }

                    odo = parseInt(ofmitem.shift().value, 10); // Onlyu set Mileage if it's valid

                    unitId = this.vciResponseData.unitId;

                    if (unitId === _innova_vci_service_src_obd_vcistd__WEBPACK_IMPORTED_MODULE_5__.UNIT_ID.Standard) {
                      isInvalid = (0, _app_validators__WEBPACK_IMPORTED_MODULE_10__.ValidateMileageKm)({
                        value: odo
                      });
                    } else {
                      isInvalid = (0, _app_validators__WEBPACK_IMPORTED_MODULE_10__.ValidateMileage)({
                        value: odo
                      });
                    }

                    if (isInvalid) {
                      this.logger.debug("Invalid mileage value: ".concat(odo, ", skip set to vciResponse"));
                    } else {
                      this._vciResponseData.mileage = odo;
                    }

                    return _context402.abrupt("return", odo);

                  case 16:
                    return _context402.abrupt("return", NaN);

                  case 17:
                  case "end":
                    return _context402.stop();
                }
              }, _callee402, this);
            }));
          } //#region Live Data

        }, {
          key: "getSupportedLiveDataPIDs",
          value: function getSupportedLiveDataPIDs(innovagroup) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee403() {
              var getlistfunc, data, pids, res, pidItemInfo, pId, pIdHex, pidItem;
              return _regeneratorRuntime().wrap(function _callee403$(_context403) {
                while (1) switch (_context403.prev = _context403.next) {
                  case 0:
                    if (this.linkedProtocol) {
                      _context403.next = 3;
                      break;
                    }

                    _context403.next = 3;
                    return this.linkProtocols();

                  case 3:
                    if (this.isSetVciLocale) {
                      _context403.next = 7;
                      break;
                    }

                    _context403.next = 6;
                    return this.setVciLocale();

                  case 6:
                    this.isSetVciLocale = _context403.sent;

                  case 7:
                    _context403.t0 = innovagroup;
                    _context403.next = _context403.t0 === _innova_tool_models__WEBPACK_IMPORTED_MODULE_4__.InnovaToolLiveDataGroup.ABS ? 10 : _context403.t0 === _innova_tool_models__WEBPACK_IMPORTED_MODULE_4__.InnovaToolLiveDataGroup.SRS ? 12 : _context403.t0 === _innova_tool_models__WEBPACK_IMPORTED_MODULE_4__.InnovaToolLiveDataGroup.ECM ? 14 : _context403.t0 === _innova_tool_models__WEBPACK_IMPORTED_MODULE_4__.InnovaToolLiveDataGroup.PCM ? 14 : 16;
                    break;

                  case 10:
                    getlistfunc = this.obdService.ld_abs_get_itemlist;
                    return _context403.abrupt("break", 18);

                  case 12:
                    getlistfunc = this.obdService.ld_srs_get_itemlist;
                    return _context403.abrupt("break", 18);

                  case 14:
                    getlistfunc = this.obdService.ld_ecm_get_itemlist;
                    return _context403.abrupt("break", 18);

                  case 16:
                    getlistfunc = this.obdService.ld_obd2_get_itemlist;
                    return _context403.abrupt("break", 18);

                  case 18:
                    _context403.next = 20;
                    return getlistfunc.call(this.obdService);

                  case 20:
                    data = _context403.sent;
                    this.logger.debug('getSupportedLiveDataPIDs data ', data);

                    if (!data) {
                      _context403.next = 28;
                      break;
                    }

                    pids = data['ListItem'] || [];
                    res = [];

                    while (pids.length) {
                      pidItemInfo = pids.shift();
                      pId = Number.parseInt(pidItemInfo[0]);
                      pIdHex = '0x' + ('00' + pId.toString(16).toUpperCase()).slice(-2);
                      pidItem = {
                        id: pId,
                        name: pidItemInfo[1],
                        desc: "[".concat(pIdHex, "] ").concat(pidItemInfo[1]),
                        max: parseFloat(pidItemInfo[2]),
                        min: parseFloat(pidItemInfo[3]),
                        unit: pidItemInfo[4],
                        range: 'N/A'
                      };

                      if (!(isNaN(pidItem.min) || isNaN(pidItem.max))) {
                        pidItem.range = "".concat(pidItem.min, " to ").concat(pidItem.max);
                      } // let iteminfo = await getinteminfofunc.call(this.obdService, pidItem.id).catch(() => null);
                      // if (iteminfo) {
                      //   pidItem = {
                      //     ...pidItem, ...{
                      //       min: parseInt(iteminfo['MinValue']),
                      //       max: parseInt(iteminfo['MaxValue']),
                      //       unit: iteminfo['Unit']
                      //     }
                      //   };
                      // } /** Since v1.6, tool already responses iteminfo in getlist function */


                      res.push(pidItem);
                    }

                    this.logger.debug('getSupportedLiveDataPIDs res ', res);
                    return _context403.abrupt("return", res);

                  case 28:
                    return _context403.abrupt("return", null);

                  case 29:
                  case "end":
                    return _context403.stop();
                }
              }, _callee403, this);
            }));
          }
        }, {
          key: "getLiveDataPIDsValue",
          value: function getLiveDataPIDsValue(pids, innovagroup) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee404() {
              var listPids, getitemvalfunc, pidsValues, pid, data, val, value, unit, regex, matches;
              return _regeneratorRuntime().wrap(function _callee404$(_context404) {
                while (1) switch (_context404.prev = _context404.next) {
                  case 0:
                    listPids = Array.from(pids || []);
                    _context404.t0 = innovagroup;
                    _context404.next = _context404.t0 === _innova_tool_models__WEBPACK_IMPORTED_MODULE_4__.InnovaToolLiveDataGroup.ABS ? 4 : _context404.t0 === _innova_tool_models__WEBPACK_IMPORTED_MODULE_4__.InnovaToolLiveDataGroup.SRS ? 6 : _context404.t0 === _innova_tool_models__WEBPACK_IMPORTED_MODULE_4__.InnovaToolLiveDataGroup.ECM ? 8 : _context404.t0 === _innova_tool_models__WEBPACK_IMPORTED_MODULE_4__.InnovaToolLiveDataGroup.PCM ? 8 : 10;
                    break;

                  case 4:
                    getitemvalfunc = this.obdService.ld_abs_get_itemval;
                    return _context404.abrupt("break", 12);

                  case 6:
                    getitemvalfunc = this.obdService.ld_srs_get_itemval;
                    return _context404.abrupt("break", 12);

                  case 8:
                    getitemvalfunc = this.obdService.ld_ecm_get_itemval;
                    return _context404.abrupt("break", 12);

                  case 10:
                    getitemvalfunc = this.obdService.ld_obd2_get_itemval;
                    return _context404.abrupt("break", 12);

                  case 12:
                    pidsValues = [];

                  case 13:
                    if (!listPids.length) {
                      _context404.next = 23;
                      break;
                    }

                    pid = listPids.shift();
                    _context404.next = 17;
                    return getitemvalfunc.call(this.obdService, pid);

                  case 17:
                    data = _context404.sent;

                    if (data && data['ListValue']) {
                      val = data['ListValue'];
                      value = val[1] || '', unit = '', regex = /(.*) \((.*)\)/i, matches = value.match(regex); // this.logger.info('valListVal', data);

                      if (matches) {
                        value = matches[1];
                        unit = matches[2];
                      }

                      pidsValues.push({
                        id: val[0],
                        value: value,
                        unit: unit
                      });
                      this.logger.info('getLiveDataPIDsValue data', data, pidsValues);
                    }

                    _context404.next = 21;
                    return this.helper.sleep(pid);

                  case 21:
                    _context404.next = 13;
                    break;

                  case 23:
                    return _context404.abrupt("return", pidsValues);

                  case 24:
                  case "end":
                    return _context404.stop();
                }
              }, _callee404, this);
            }));
          }
        }, {
          key: "getLiveDataPIDsValueByRange",
          value: function getLiveDataPIDsValueByRange(start, end, innovagroup) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee405() {
              var getitemvalfunc, data;
              return _regeneratorRuntime().wrap(function _callee405$(_context405) {
                while (1) switch (_context405.prev = _context405.next) {
                  case 0:
                    _context405.t0 = innovagroup;
                    _context405.next = _context405.t0 === _innova_tool_models__WEBPACK_IMPORTED_MODULE_4__.InnovaToolLiveDataGroup.ABS ? 3 : _context405.t0 === _innova_tool_models__WEBPACK_IMPORTED_MODULE_4__.InnovaToolLiveDataGroup.SRS ? 5 : _context405.t0 === _innova_tool_models__WEBPACK_IMPORTED_MODULE_4__.InnovaToolLiveDataGroup.ECM ? 7 : _context405.t0 === _innova_tool_models__WEBPACK_IMPORTED_MODULE_4__.InnovaToolLiveDataGroup.PCM ? 7 : 9;
                    break;

                  case 3:
                    getitemvalfunc = this.obdService.ld_abs_get_ListItem_Val;
                    return _context405.abrupt("break", 11);

                  case 5:
                    getitemvalfunc = this.obdService.ld_srs_get_ListItem_Val;
                    return _context405.abrupt("break", 11);

                  case 7:
                    getitemvalfunc = this.obdService.ld_ecm_get_ListItem_Val;
                    return _context405.abrupt("break", 11);

                  case 9:
                    getitemvalfunc = this.obdService.ld_obd2_get_ListItem_Val;
                    return _context405.abrupt("break", 11);

                  case 11:
                    _context405.next = 13;
                    return getitemvalfunc.call(this.obdService, start, end);

                  case 13:
                    data = _context405.sent;
                    this.logger.info('getLiveDataPIDsValueByRange data', data); // data = {"Group":2,"ListValue":[[154,"1.8 (mph)"],[156,"28.7 (mph)"],[158,"114.9 (mph)"],[160,"217.3 (mph)"],[147,"Not Supported"]]};

                    if (!(data && data['ListValue'])) {
                      _context405.next = 17;
                      break;
                    }

                    return _context405.abrupt("return", data['ListValue'].map(function (data) {
                      var value = data[1] || '',
                          unit = '',
                          regex = /(.*) \((.*)\)/i,
                          matches = value.match(regex);

                      if (matches) {
                        value = matches[1];
                        unit = matches[2];
                      }

                      return {
                        id: data[0],
                        value: value,
                        unit: unit
                      };
                    }));

                  case 17:
                    return _context405.abrupt("return", null);

                  case 18:
                  case "end":
                    return _context405.stop();
                }
              }, _callee405, this);
            }));
          } //#endregion Live Data

        }, {
          key: "vciResponseData",
          get: function get() {
            var res = {};

            if (!lodash__WEBPACK_IMPORTED_MODULE_6__.isEmpty(this._vciResponseData)) {
              res = lodash__WEBPACK_IMPORTED_MODULE_6__.cloneDeep(this._vciResponseData);
            }

            return res;
          }
        }, {
          key: "isEmptyVciData",
          get: function get() {
            return lodash__WEBPACK_IMPORTED_MODULE_6__.isEmpty(this._vciResponseData);
          }
        }, {
          key: "setVciResponseData",
          value: function setVciResponseData(data) {
            this._vciResponseData = data;
          }
        }, {
          key: "resetVciReponseData",
          value: function resetVciReponseData() {
            this.setVciResponseData({});
          }
          /**
           * set vin from user input for box-novin
           * @param vin
           */

        }, {
          key: "setVin",
          value: function setVin(vin) {
            var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            return (0, tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee406() {
              var isOK;
              return _regeneratorRuntime().wrap(function _callee406$(_context406) {
                while (1) switch (_context406.prev = _context406.next) {
                  case 0:
                    if (!(force || this._vciResponseData && !this._vciResponseData.vin)) {
                      _context406.next = 14;
                      break;
                    }

                    this._vciResponseData.vin = vin;

                    if (!(vin === '')) {
                      _context406.next = 4;
                      break;
                    }

                    return _context406.abrupt("return", true);

                  case 4:
                    _context406.next = 6;
                    return this.obdService.setVINString(vin);

                  case 6:
                    isOK = _context406.sent;
                    _context406.next = 9;
                    return this.sleep(2000);

                  case 9:
                    _context406.next = 11;
                    return this.getYMME();

                  case 11:
                    return _context406.abrupt("return", isOK);

                  case 14:
                    this.logger.debug('Cannot override VIN read from box.', this._vciResponseData.vin);
                    return _context406.abrupt("return", false);

                  case 16:
                  case "end":
                    return _context406.stop();
                }
              }, _callee406, this);
            }));
          }
        }, {
          key: "currentVin",
          get: function get() {
            return this._vciResponseData ? this._vciResponseData.vin : '';
          }
        }, {
          key: "setYmme",
          value: function setYmme(ymme) {
            this._vciResponseData.ymme = {
              make: ymme.make || 'N/A',
              year: ymme.year || 'N/A',
              model: ymme.model || 'N/A',
              engine: ymme.engine || 'N/A'
            };
          }
        }, {
          key: "setMileage",
          value: function setMileage(mileage) {
            this._vciResponseData.mileage = mileage;
          }
        }, {
          key: "setSupportedModules",
          value: function setSupportedModules(modules) {
            if (lodash__WEBPACK_IMPORTED_MODULE_6__.isArray(modules)) {
              lodash__WEBPACK_IMPORTED_MODULE_6__.set(this._vciResponseData, 'allSupportedModules', modules);
            }
          }
        }, {
          key: "getSupportedModules",
          value: function getSupportedModules() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee407() {
              var modules;
              return _regeneratorRuntime().wrap(function _callee407$(_context407) {
                while (1) switch (_context407.prev = _context407.next) {
                  case 0:
                    modules = lodash__WEBPACK_IMPORTED_MODULE_6__.get(this.vciResponseData, 'allSupportedModules', []);

                    if (modules) {
                      _context407.next = 5;
                      break;
                    }

                    _context407.next = 4;
                    return this.scanAllSupportedModules();

                  case 4:
                    modules = _context407.sent;

                  case 5:
                    return _context407.abrupt("return", modules);

                  case 6:
                  case "end":
                    return _context407.stop();
                }
              }, _callee407, this);
            }));
          }
        }, {
          key: "removeSupportedModules",
          value: function removeSupportedModules() {
            lodash__WEBPACK_IMPORTED_MODULE_6__.unset(this._vciResponseData, 'allSupportedModules');
          }
        }, {
          key: "scanAllSupportedModules",
          value: function scanAllSupportedModules() {
            var useCached = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            var retry = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
            return (0, tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee408() {
              var oemModules;
              return _regeneratorRuntime().wrap(function _callee408$(_context408) {
                while (1) switch (_context408.prev = _context408.next) {
                  case 0:
                    if (this.isSetVciLocale) {
                      _context408.next = 4;
                      break;
                    }

                    _context408.next = 3;
                    return this.setVciLocale();

                  case 3:
                    this.isSetVciLocale = _context408.sent;

                  case 4:
                    _context408.next = 6;
                    return this.obdService.nwscan_getSupportSystem()["catch"](this.logger.debug.bind(null, 'nwscan_getSupportSystem failed'));

                  case 6:
                    oemModules = _context408.sent;

                    if (!(oemModules && lodash__WEBPACK_IMPORTED_MODULE_6__.isArray(oemModules['data']))) {
                      _context408.next = 11;
                      break;
                    }

                    this._vciResponseData.allSupportedModules = oemModules['data'].filter(function (m) {
                      return m.groupName;
                    });
                    _context408.next = 19;
                    break;

                  case 11:
                    if (!(retry > 0)) {
                      _context408.next = 18;
                      break;
                    }

                    _context408.next = 14;
                    return this.sleep(src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_0__.SLEEP_TIMEOUT * 5);

                  case 14:
                    this.logger.debug("Retry run nwscan_getSupportSystem");
                    return _context408.abrupt("return", this.scanAllSupportedModules(useCached, retry - 1));

                  case 18:
                    this._vciResponseData.allSupportedModules = [];

                  case 19:
                    return _context408.abrupt("return", this._vciResponseData.allSupportedModules);

                  case 20:
                  case "end":
                    return _context408.stop();
                }
              }, _callee408, this);
            }));
          }
          /** YMME */

        }, {
          key: "ymme_init",
          value: function ymme_init() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee409() {
              var resp;
              return _regeneratorRuntime().wrap(function _callee409$(_context409) {
                while (1) switch (_context409.prev = _context409.next) {
                  case 0:
                    _context409.next = 2;
                    return this.obdService.ymme_init();

                  case 2:
                    resp = _context409.sent;
                    return _context409.abrupt("return", resp);

                  case 4:
                  case "end":
                    return _context409.stop();
                }
              }, _callee409, this);
            }));
          }
        }, {
          key: "ymme_get",
          value: function ymme_get(selection_id) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee410() {
              var resp;
              return _regeneratorRuntime().wrap(function _callee410$(_context410) {
                while (1) switch (_context410.prev = _context410.next) {
                  case 0:
                    _context410.next = 2;
                    return this.obdService.ymme_get(selection_id);

                  case 2:
                    resp = _context410.sent;
                    return _context410.abrupt("return", resp);

                  case 4:
                  case "end":
                    return _context410.stop();
                }
              }, _callee410, this);
            }));
          }
        }, {
          key: "ymme_confirm",
          value: function ymme_confirm() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee411() {
              var resp;
              return _regeneratorRuntime().wrap(function _callee411$(_context411) {
                while (1) switch (_context411.prev = _context411.next) {
                  case 0:
                    _context411.next = 2;
                    return this.obdService.ymme_confirm();

                  case 2:
                    resp = _context411.sent;
                    return _context411.abrupt("return", resp);

                  case 4:
                  case "end":
                    return _context411.stop();
                }
              }, _callee411, this);
            }));
          }
        }, {
          key: "ymme_back",
          value: function ymme_back() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee412() {
              var resp;
              return _regeneratorRuntime().wrap(function _callee412$(_context412) {
                while (1) switch (_context412.prev = _context412.next) {
                  case 0:
                    _context412.next = 2;
                    return this.obdService.ymme_back();

                  case 2:
                    resp = _context412.sent;
                    return _context412.abrupt("return", resp);

                  case 4:
                  case "end":
                    return _context412.stop();
                }
              }, _callee412, this);
            }));
          }
        }, {
          key: "enableVciLog",
          value: function enableVciLog(isEnabled) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee413() {
              var _this94 = this;

              var rs;
              return _regeneratorRuntime().wrap(function _callee413$(_context413) {
                while (1) switch (_context413.prev = _context413.next) {
                  case 0:
                    if (this.isConnected) {
                      _context413.next = 3;
                      break;
                    }

                    _context413.next = 3;
                    return this.initializeBT();

                  case 3:
                    this._isVciLog = isEnabled;
                    this.stoCheckConnection = -1;

                    if (!isEnabled) {
                      _context413.next = 11;
                      break;
                    }

                    _context413.next = 8;
                    return this.obdService.StartLog();

                  case 8:
                    _context413.t0 = _context413.sent;
                    _context413.next = 14;
                    break;

                  case 11:
                    _context413.next = 13;
                    return this.obdService.StopLog();

                  case 13:
                    _context413.t0 = _context413.sent;

                  case 14:
                    rs = _context413.t0;
                    setTimeout(function () {
                      _this94.stoCheckConnection = 0;
                    }, src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_0__.TIMEOUT_INIT_CONNECTION / 2);
                    return _context413.abrupt("return", rs);

                  case 17:
                  case "end":
                    return _context413.stop();
                }
              }, _callee413, this);
            }));
          }
        }, {
          key: "readVciLog",
          value: function readVciLog() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_20__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee414() {
              var _this95 = this;

              var logMessages, logPayload;
              return _regeneratorRuntime().wrap(function _callee414$(_context414) {
                while (1) switch (_context414.prev = _context414.next) {
                  case 0:
                    logMessages = '';
                    this.logger.debug('Start readVciLog...');
                    this.stoCheckConnection = -1;
                    _context414.prev = 3;

                    if (!this._isVciLog) {
                      _context414.next = 10;
                      break;
                    }

                    _context414.next = 7;
                    return this.obdService.StopLog();

                  case 7:
                    this._isVciLog = false;
                    _context414.next = 10;
                    return this.sleep(src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_0__.SLEEP_TIMEOUT, false);

                  case 10:
                    _context414.next = 12;
                    return this.obdService.GetLog();

                  case 12:
                    logPayload = _context414.sent;

                    if (logPayload) {
                      logMessages = _innova_vci_service_src_obdservice_service__WEBPACK_IMPORTED_MODULE_1__.Dataparser.getStringOfObj(logPayload); // for (let x of logPayload) {
                      //   if (x.payload) {
                      //     logMessages += Dataparser.bytesToString(x.payload);
                      //   }
                      // }
                    }

                    _context414.next = 19;
                    break;

                  case 16:
                    _context414.prev = 16;
                    _context414.t0 = _context414["catch"](3);
                    this.logger.debug('readVciLog err', _context414.t0);

                  case 19:
                    setTimeout(function () {
                      _this95.stoCheckConnection = 0;
                    }, src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_0__.TIMEOUT_INIT_CONNECTION / 2);
                    return _context414.abrupt("return", logMessages);

                  case 21:
                  case "end":
                    return _context414.stop();
                }
              }, _callee414, this, [[3, 16]]);
            }));
          }
          /** End VCI Data Log */

        }, {
          key: "handleResponse",
          value: function handleResponse(response) {
            try {
              var tag = response.tag,
                  data = response.data;

              if ((this.supportLogTags || []).includes(tag)) {
                // this.logger.debug(`[${new Date().toISOString()}] ${tag} ${data}`);
                if (!src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_0__.AppConfig.IS_ENABLED_LOGGER) {
                  tag = "[".concat(new Date().toISOString(), "] ").concat(tag);
                }

                this.logger.debug("".concat(tag, " ").concat(data));
              } // else {
              //   throw new Error(`Tag is not suppported: ${tag}`);
              // }

            } catch (e) {
              this.logger.error('Cannot handle this repsonse', response, e);
            }
          }
        }]);
      }();

      _InnovaVCIService.ɵfac = function InnovaVCIService_Factory(t) {
        return new (t || _InnovaVCIService)(_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵinject"](_innova_vci_service_src_obdservice_service__WEBPACK_IMPORTED_MODULE_1__.OBDService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵinject"](_events_service__WEBPACK_IMPORTED_MODULE_15__.Events), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵinject"](_helper_service__WEBPACK_IMPORTED_MODULE_16__.HelperService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵinject"](_ionic_native_ble_ngx__WEBPACK_IMPORTED_MODULE_17__.BLE), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵinject"](_innova_vci_service_src_connectivity_connectivity_service__WEBPACK_IMPORTED_MODULE_18__.ConnectivityService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵinject"](_logger__WEBPACK_IMPORTED_MODULE_19__.AppLoggerService));
      };

      _InnovaVCIService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineInjectable"]({
        token: _InnovaVCIService,
        factory: _InnovaVCIService.ɵfac,
        providedIn: 'root'
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=default-src_app_services_innova-vci_service_ts-es5.js.map