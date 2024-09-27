(function () {
  "use strict";

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

  function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }

  function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }

  function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }

  function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }

  (self["webpackChunkcom_carmd_proscan2"] = self["webpackChunkcom_carmd_proscan2"] || []).push([["common"], {
    /***/
    51914:
    /*!*********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/button-active-a4d897e8.js ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "c": function c() {
          return (
            /* binding */
            createButtonActiveGesture
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _index_8e692445_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./index-8e692445.js */
      91477);
      /* harmony import */


      var _haptic_029a46f6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./haptic-029a46f6.js */
      89727);
      /* harmony import */


      var _index_422b6e83_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./index-422b6e83.js */
      18819);
      /*!
       * (C) Ionic http://ionicframework.com - MIT License
       */


      var createButtonActiveGesture = function createButtonActiveGesture(el, isButton) {
        var currentTouchedButton;
        var initialTouchedButton;

        var activateButtonAtPoint = function activateButtonAtPoint(x, y, hapticFeedbackFn) {
          if (typeof document === 'undefined') {
            return;
          }

          var target = document.elementFromPoint(x, y);

          if (!target || !isButton(target)) {
            clearActiveButton();
            return;
          }

          if (target !== currentTouchedButton) {
            clearActiveButton();
            setActiveButton(target, hapticFeedbackFn);
          }
        };

        var setActiveButton = function setActiveButton(button, hapticFeedbackFn) {
          currentTouchedButton = button;

          if (!initialTouchedButton) {
            initialTouchedButton = currentTouchedButton;
          }

          var buttonToModify = currentTouchedButton;
          (0, _index_8e692445_js__WEBPACK_IMPORTED_MODULE_0__.c)(function () {
            return buttonToModify.classList.add('ion-activated');
          });
          hapticFeedbackFn();
        };

        var clearActiveButton = function clearActiveButton() {
          var dispatchClick = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

          if (!currentTouchedButton) {
            return;
          }

          var buttonToModify = currentTouchedButton;
          (0, _index_8e692445_js__WEBPACK_IMPORTED_MODULE_0__.c)(function () {
            return buttonToModify.classList.remove('ion-activated');
          });
          /**
           * Clicking on one button, but releasing on another button
           * does not dispatch a click event in browsers, so we
           * need to do it manually here. Some browsers will
           * dispatch a click if clicking on one button, dragging over
           * another button, and releasing on the original button. In that
           * case, we need to make sure we do not cause a double click there.
           */

          if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
            currentTouchedButton.click();
          }

          currentTouchedButton = undefined;
        };

        return (0, _index_422b6e83_js__WEBPACK_IMPORTED_MODULE_2__.createGesture)({
          el: el,
          gestureName: 'buttonActiveDrag',
          threshold: 0,
          onStart: function onStart(ev) {
            return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_029a46f6_js__WEBPACK_IMPORTED_MODULE_1__.a);
          },
          onMove: function onMove(ev) {
            return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_029a46f6_js__WEBPACK_IMPORTED_MODULE_1__.b);
          },
          onEnd: function onEnd() {
            clearActiveButton(true);
            (0, _haptic_029a46f6_js__WEBPACK_IMPORTED_MODULE_1__.h)();
            initialTouchedButton = undefined;
          }
        });
      };
      /***/

    },

    /***/
    94114:
    /*!***********************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/dir-e8b767a8.js ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "i": function i() {
          return (
            /* binding */
            isRTL
          );
        }
        /* harmony export */

      });
      /*!
       * (C) Ionic http://ionicframework.com - MIT License
       */

      /**
       * Returns `true` if the document or host element
       * has a `dir` set to `rtl`. The host value will always
       * take priority over the root document value.
       */


      var isRTL = function isRTL(hostEl) {
        if (hostEl) {
          if (hostEl.dir !== '') {
            return hostEl.dir.toLowerCase() === 'rtl';
          }
        }

        return (document === null || document === void 0 ? void 0 : document.dir.toLowerCase()) === 'rtl';
      };
      /***/

    },

    /***/
    71989:
    /*!*********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/focus-visible-bd02518b.js ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "startFocusVisible": function startFocusVisible() {
          return (
            /* binding */
            _startFocusVisible
          );
        }
        /* harmony export */

      });
      /*!
       * (C) Ionic http://ionicframework.com - MIT License
       */


      var ION_FOCUSED = 'ion-focused';
      var ION_FOCUSABLE = 'ion-focusable';
      var FOCUS_KEYS = ['Tab', 'ArrowDown', 'Space', 'Escape', ' ', 'Shift', 'Enter', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'Home', 'End'];

      var _startFocusVisible = function _startFocusVisible(rootEl) {
        var currentFocus = [];
        var keyboardMode = true;
        var ref = rootEl ? rootEl.shadowRoot : document;
        var root = rootEl ? rootEl : document.body;

        var setFocus = function setFocus(elements) {
          currentFocus.forEach(function (el) {
            return el.classList.remove(ION_FOCUSED);
          });
          elements.forEach(function (el) {
            return el.classList.add(ION_FOCUSED);
          });
          currentFocus = elements;
        };

        var pointerDown = function pointerDown() {
          keyboardMode = false;
          setFocus([]);
        };

        var onKeydown = function onKeydown(ev) {
          keyboardMode = FOCUS_KEYS.includes(ev.key);

          if (!keyboardMode) {
            setFocus([]);
          }
        };

        var onFocusin = function onFocusin(ev) {
          if (keyboardMode && ev.composedPath !== undefined) {
            var toFocus = ev.composedPath().filter(function (el) {
              // TODO(FW-2832): type
              if (el.classList) {
                return el.classList.contains(ION_FOCUSABLE);
              }

              return false;
            });
            setFocus(toFocus);
          }
        };

        var onFocusout = function onFocusout() {
          if (ref.activeElement === root) {
            setFocus([]);
          }
        };

        ref.addEventListener('keydown', onKeydown);
        ref.addEventListener('focusin', onFocusin);
        ref.addEventListener('focusout', onFocusout);
        ref.addEventListener('touchstart', pointerDown);
        ref.addEventListener('mousedown', pointerDown);

        var destroy = function destroy() {
          ref.removeEventListener('keydown', onKeydown);
          ref.removeEventListener('focusin', onFocusin);
          ref.removeEventListener('focusout', onFocusout);
          ref.removeEventListener('touchstart', pointerDown);
          ref.removeEventListener('mousedown', pointerDown);
        };

        return {
          destroy: destroy,
          setFocus: setFocus
        };
      };
      /***/

    },

    /***/
    64656:
    /*!**************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-c3305a28.js ***!
      \**************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "C": function C() {
          return (
            /* binding */
            CoreDelegate
          );
        },

        /* harmony export */
        "a": function a() {
          return (
            /* binding */
            attachComponent
          );
        },

        /* harmony export */
        "d": function d() {
          return (
            /* binding */
            detachComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _Users_tucarmd_DATA_PROJECTS_proscan_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */
      19369);
      /* harmony import */


      var _helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./helpers-3b390e48.js */
      83870);
      /*!
       * (C) Ionic http://ionicframework.com - MIT License
       */
      // TODO(FW-2832): types


      var attachComponent = /*#__PURE__*/function () {
        var _ref = (0, _Users_tucarmd_DATA_PROJECTS_proscan_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(delegate, container, component, cssClasses, componentProps, inline) {
          var _a, el;

          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                if (!delegate) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return", delegate.attachViewToDom(container, component, componentProps, cssClasses));

              case 2:
                if (!(!inline && typeof component !== 'string' && !(component instanceof HTMLElement))) {
                  _context.next = 4;
                  break;
                }

                throw new Error('framework delegate is missing');

              case 4:
                el = typeof component === 'string' ? (_a = container.ownerDocument) === null || _a === void 0 ? void 0 : _a.createElement(component) : component;

                if (cssClasses) {
                  cssClasses.forEach(function (c) {
                    return el.classList.add(c);
                  });
                }

                if (componentProps) {
                  Object.assign(el, componentProps);
                }

                container.appendChild(el);
                _context.next = 10;
                return new Promise(function (resolve) {
                  return (0, _helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_1__.c)(el, resolve);
                });

              case 10:
                return _context.abrupt("return", el);

              case 11:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }));

        return function attachComponent(_x, _x2, _x3, _x4, _x5, _x6) {
          return _ref.apply(this, arguments);
        };
      }();

      var detachComponent = function detachComponent(delegate, element) {
        if (element) {
          if (delegate) {
            var container = element.parentElement;
            return delegate.removeViewFromDom(container, element);
          }

          element.remove();
        }

        return Promise.resolve();
      };

      var CoreDelegate = function CoreDelegate() {
        var BaseComponent;
        var Reference;

        var attachViewToDom = /*#__PURE__*/function () {
          var _ref2 = (0, _Users_tucarmd_DATA_PROJECTS_proscan_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function (parentElement, userComponent) {
            var userComponentProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
            var cssClasses = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
            return /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
              var _a, _b, el, root, _el, app;

              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    BaseComponent = parentElement;
                    /**
                     * If passing in a component via the `component` props
                     * we need to append it inside of our overlay component.
                     */

                    if (!userComponent) {
                      _context2.next = 10;
                      break;
                    }

                    /**
                     * If passing in the tag name, create
                     * the element otherwise just get a reference
                     * to the component.
                     */
                    el = typeof userComponent === 'string' ? (_a = BaseComponent.ownerDocument) === null || _a === void 0 ? void 0 : _a.createElement(userComponent) : userComponent;
                    /**
                     * Add any css classes passed in
                     * via the cssClasses prop on the overlay.
                     */

                    cssClasses.forEach(function (c) {
                      return el.classList.add(c);
                    });
                    /**
                     * Add any props passed in
                     * via the componentProps prop on the overlay.
                     */

                    Object.assign(el, userComponentProps);
                    /**
                     * Finally, append the component
                     * inside of the overlay component.
                     */

                    BaseComponent.appendChild(el);
                    _context2.next = 8;
                    return new Promise(function (resolve) {
                      return (0, _helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_1__.c)(el, resolve);
                    });

                  case 8:
                    _context2.next = 11;
                    break;

                  case 10:
                    if (BaseComponent.children.length > 0) {
                      root = BaseComponent.children[0];

                      if (!root.classList.contains('ion-delegate-host')) {
                        /**
                         * If the root element is not a delegate host, it means
                         * that the overlay has not been presented yet and we need
                         * to create the containing element with the specified classes.
                         */
                        _el = (_b = BaseComponent.ownerDocument) === null || _b === void 0 ? void 0 : _b.createElement('div'); // Add a class to track if the root element was created by the delegate.

                        _el.classList.add('ion-delegate-host');

                        cssClasses.forEach(function (c) {
                          return _el.classList.add(c);
                        }); // Move each child from the original template to the new parent element.

                        _el.append.apply(_el, _toConsumableArray(BaseComponent.children)); // Append the new parent element to the original parent element.


                        BaseComponent.appendChild(_el);
                      }
                    }

                  case 11:
                    /**
                     * Get the root of the app and
                     * add the overlay there.
                     */
                    app = document.querySelector('ion-app') || document.body;
                    /**
                     * Create a placeholder comment so that
                     * we can return this component to where
                     * it was previously.
                     */

                    Reference = document.createComment('ionic teleport');
                    BaseComponent.parentNode.insertBefore(Reference, BaseComponent);
                    app.appendChild(BaseComponent);
                    return _context2.abrupt("return", BaseComponent);

                  case 16:
                  case "end":
                    return _context2.stop();
                }
              }, _callee2);
            })();
          });

          return function attachViewToDom(_x7, _x8) {
            return _ref2.apply(this, arguments);
          };
        }();

        var removeViewFromDom = function removeViewFromDom() {
          /**
           * Return component to where it was previously in the DOM.
           */
          if (BaseComponent && Reference) {
            Reference.parentNode.insertBefore(BaseComponent, Reference);
            Reference.remove();
          }

          return Promise.resolve();
        };

        return {
          attachViewToDom: attachViewToDom,
          removeViewFromDom: removeViewFromDom
        };
      };
      /***/

    },

    /***/
    89727:
    /*!**************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/haptic-029a46f6.js ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "a": function a() {
          return (
            /* binding */
            hapticSelectionStart
          );
        },

        /* harmony export */
        "b": function b() {
          return (
            /* binding */
            hapticSelectionChanged
          );
        },

        /* harmony export */
        "c": function c() {
          return (
            /* binding */
            hapticSelection
          );
        },

        /* harmony export */
        "d": function d() {
          return (
            /* binding */
            hapticImpact
          );
        },

        /* harmony export */
        "h": function h() {
          return (
            /* binding */
            hapticSelectionEnd
          );
        }
        /* harmony export */

      });
      /*!
       * (C) Ionic http://ionicframework.com - MIT License
       */


      var HapticEngine = {
        getEngine: function getEngine() {
          var _a;

          var win = window;
          return win.TapticEngine || ((_a = win.Capacitor) === null || _a === void 0 ? void 0 : _a.isPluginAvailable('Haptics')) && win.Capacitor.Plugins.Haptics;
        },
        available: function available() {
          var _a;

          var win = window;
          var engine = this.getEngine();

          if (!engine) {
            return false;
          }
          /**
           * Developers can manually import the
           * Haptics plugin in their app which will cause
           * getEngine to return the Haptics engine. However,
           * the Haptics engine will throw an error if
           * used in a web browser that does not support
           * the Vibrate API. This check avoids that error
           * if the browser does not support the Vibrate API.
           */


          if (((_a = win.Capacitor) === null || _a === void 0 ? void 0 : _a.getPlatform()) === 'web') {
            return typeof navigator !== 'undefined' && navigator.vibrate !== undefined;
          }

          return true;
        },
        isCordova: function isCordova() {
          return !!window.TapticEngine;
        },
        isCapacitor: function isCapacitor() {
          var win = window;
          return !!win.Capacitor;
        },
        impact: function impact(options) {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
          engine.impact({
            style: style
          });
        },
        notification: function notification(options) {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
          engine.notification({
            style: style
          });
        },
        selection: function selection() {
          this.impact({
            style: 'light'
          });
        },
        selectionStart: function selectionStart() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionStart();
          } else {
            engine.gestureSelectionStart();
          }
        },
        selectionChanged: function selectionChanged() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionChanged();
          } else {
            engine.gestureSelectionChanged();
          }
        },
        selectionEnd: function selectionEnd() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionEnd();
          } else {
            engine.gestureSelectionEnd();
          }
        }
      };
      /**
       * Check to see if the Haptic Plugin is available
       * @return Returns `true` or false if the plugin is available
       */

      var hapticAvailable = function hapticAvailable() {
        return HapticEngine.available();
      };
      /**
       * Trigger a selection changed haptic event. Good for one-time events
       * (not for gestures)
       */


      var hapticSelection = function hapticSelection() {
        hapticAvailable() && HapticEngine.selection();
      };
      /**
       * Tell the haptic engine that a gesture for a selection change is starting.
       */


      var hapticSelectionStart = function hapticSelectionStart() {
        hapticAvailable() && HapticEngine.selectionStart();
      };
      /**
       * Tell the haptic engine that a selection changed during a gesture.
       */


      var hapticSelectionChanged = function hapticSelectionChanged() {
        hapticAvailable() && HapticEngine.selectionChanged();
      };
      /**
       * Tell the haptic engine we are done with a gesture. This needs to be
       * called lest resources are not properly recycled.
       */


      var hapticSelectionEnd = function hapticSelectionEnd() {
        hapticAvailable() && HapticEngine.selectionEnd();
      };
      /**
       * Use this to indicate success/failure/warning to the user.
       * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
       */


      var hapticImpact = function hapticImpact(options) {
        hapticAvailable() && HapticEngine.impact(options);
      };
      /***/

    },

    /***/
    69002:
    /*!*************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/index-2bcb741c.js ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "a": function a() {
          return (
            /* binding */
            arrowBackSharp
          );
        },

        /* harmony export */
        "b": function b() {
          return (
            /* binding */
            closeCircle
          );
        },

        /* harmony export */
        "c": function c() {
          return (
            /* binding */
            chevronBack
          );
        },

        /* harmony export */
        "d": function d() {
          return (
            /* binding */
            closeSharp
          );
        },

        /* harmony export */
        "e": function e() {
          return (
            /* binding */
            searchSharp
          );
        },

        /* harmony export */
        "f": function f() {
          return (
            /* binding */
            checkmarkOutline
          );
        },

        /* harmony export */
        "g": function g() {
          return (
            /* binding */
            ellipseOutline
          );
        },

        /* harmony export */
        "h": function h() {
          return (
            /* binding */
            caretBackSharp
          );
        },

        /* harmony export */
        "i": function i() {
          return (
            /* binding */
            arrowDown
          );
        },

        /* harmony export */
        "j": function j() {
          return (
            /* binding */
            reorderThreeOutline
          );
        },

        /* harmony export */
        "k": function k() {
          return (
            /* binding */
            reorderTwoSharp
          );
        },

        /* harmony export */
        "l": function l() {
          return (
            /* binding */
            chevronDown
          );
        },

        /* harmony export */
        "m": function m() {
          return (
            /* binding */
            chevronForwardOutline
          );
        },

        /* harmony export */
        "n": function n() {
          return (
            /* binding */
            ellipsisHorizontal
          );
        },

        /* harmony export */
        "o": function o() {
          return (
            /* binding */
            chevronForward
          );
        },

        /* harmony export */
        "p": function p() {
          return (
            /* binding */
            caretUpSharp
          );
        },

        /* harmony export */
        "q": function q() {
          return (
            /* binding */
            caretDownSharp
          );
        },

        /* harmony export */
        "r": function r() {
          return (
            /* binding */
            removeOutline
          );
        },

        /* harmony export */
        "s": function s() {
          return (
            /* binding */
            searchOutline
          );
        },

        /* harmony export */
        "t": function t() {
          return (
            /* binding */
            close
          );
        },

        /* harmony export */
        "u": function u() {
          return (
            /* binding */
            menuOutline
          );
        },

        /* harmony export */
        "v": function v() {
          return (
            /* binding */
            menuSharp
          );
        }
        /* harmony export */

      });
      /*!
       * (C) Ionic http://ionicframework.com - MIT License
       */

      /* Ionicons v6.1.3, ES Modules */


      var arrowBackSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>";
      var arrowDown = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>";
      var caretBackSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>";
      var caretDownSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>";
      var caretUpSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>";
      var checkmarkOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
      var chevronBack = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>";
      var chevronDown = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>";
      var chevronForward = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>";
      var chevronForwardOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>";
      var close = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>";
      var closeCircle = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>";
      var closeSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>";
      var ellipseOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
      var ellipsisHorizontal = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>";
      var menuOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
      var menuSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>";
      var removeOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
      var reorderThreeOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
      var reorderTwoSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>";
      var searchOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
      var searchSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>";
      /***/
    },

    /***/
    64064:
    /*!*************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/index-e6d1a8be.js ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "I": function I() {
          return (
            /* binding */
            ION_CONTENT_ELEMENT_SELECTOR
          );
        },

        /* harmony export */
        "a": function a() {
          return (
            /* binding */
            findIonContent
          );
        },

        /* harmony export */
        "b": function b() {
          return (
            /* binding */
            ION_CONTENT_CLASS_SELECTOR
          );
        },

        /* harmony export */
        "c": function c() {
          return (
            /* binding */
            scrollByPoint
          );
        },

        /* harmony export */
        "d": function d() {
          return (
            /* binding */
            disableContentScrollY
          );
        },

        /* harmony export */
        "f": function f() {
          return (
            /* binding */
            findClosestIonContent
          );
        },

        /* harmony export */
        "g": function g() {
          return (
            /* binding */
            getScrollElement
          );
        },

        /* harmony export */
        "i": function i() {
          return (
            /* binding */
            isIonContent
          );
        },

        /* harmony export */
        "p": function p() {
          return (
            /* binding */
            printIonContentErrorMsg
          );
        },

        /* harmony export */
        "r": function r() {
          return (
            /* binding */
            resetContentScrollY
          );
        },

        /* harmony export */
        "s": function s() {
          return (
            /* binding */
            scrollToTop
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _Users_tucarmd_DATA_PROJECTS_proscan_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */
      19369);
      /* harmony import */


      var _helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./helpers-3b390e48.js */
      83870);
      /* harmony import */


      var _index_c4b11676_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./index-c4b11676.js */
      10570);
      /*!
       * (C) Ionic http://ionicframework.com - MIT License
       */


      var ION_CONTENT_TAG_NAME = 'ION-CONTENT';
      var ION_CONTENT_ELEMENT_SELECTOR = 'ion-content';
      var ION_CONTENT_CLASS_SELECTOR = '.ion-content-scroll-host';
      /**
       * Selector used for implementations reliant on `<ion-content>` for scroll event changes.
       *
       * Developers should use the `.ion-content-scroll-host` selector to target the element emitting
       * scroll events. With virtual scroll implementations this will be the host element for
       * the scroll viewport.
       */

      var ION_CONTENT_SELECTOR = "".concat(ION_CONTENT_ELEMENT_SELECTOR, ", ").concat(ION_CONTENT_CLASS_SELECTOR);

      var isIonContent = function isIonContent(el) {
        return el.tagName === ION_CONTENT_TAG_NAME;
      };
      /**
       * Waits for the element host fully initialize before
       * returning the inner scroll element.
       *
       * For `ion-content` the scroll target will be the result
       * of the `getScrollElement` function.
       *
       * For custom implementations it will be the element host
       * or a selector within the host, if supplied through `scrollTarget`.
       */


      var getScrollElement = /*#__PURE__*/function () {
        var _ref = (0, _Users_tucarmd_DATA_PROJECTS_proscan_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(el) {
          return _regeneratorRuntime().wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
              case 0:
                if (!isIonContent(el)) {
                  _context3.next = 4;
                  break;
                }

                _context3.next = 3;
                return new Promise(function (resolve) {
                  return (0, _helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_1__.c)(el, resolve);
                });

              case 3:
                return _context3.abrupt("return", el.getScrollElement());

              case 4:
                return _context3.abrupt("return", el);

              case 5:
              case "end":
                return _context3.stop();
            }
          }, _callee3);
        }));

        return function getScrollElement(_x) {
          return _ref.apply(this, arguments);
        };
      }();
      /**
       * Queries the element matching the selector for IonContent.
       * See ION_CONTENT_SELECTOR for the selector used.
       */


      var findIonContent = function findIonContent(el) {
        /**
         * First we try to query the custom scroll host selector in cases where
         * the implementation is using an outer `ion-content` with an inner custom
         * scroll container.
         */
        var customContentHost = el.querySelector(ION_CONTENT_CLASS_SELECTOR);

        if (customContentHost) {
          return customContentHost;
        }

        return el.querySelector(ION_CONTENT_SELECTOR);
      };
      /**
       * Queries the closest element matching the selector for IonContent.
       */


      var findClosestIonContent = function findClosestIonContent(el) {
        return el.closest(ION_CONTENT_SELECTOR);
      };
      /**
       * Scrolls to the top of the element. If an `ion-content` is found, it will scroll
       * using the public API `scrollToTop` with a duration.
       */
      // TODO(FW-2832): type


      var scrollToTop = function scrollToTop(el, durationMs) {
        if (isIonContent(el)) {
          var content = el;
          return content.scrollToTop(durationMs);
        }

        return Promise.resolve(el.scrollTo({
          top: 0,
          left: 0,
          behavior: durationMs > 0 ? 'smooth' : 'auto'
        }));
      };
      /**
       * Scrolls by a specified X/Y distance in the component. If an `ion-content` is found, it will scroll
       * using the public API `scrollByPoint` with a duration.
       */


      var scrollByPoint = function scrollByPoint(el, x, y, durationMs) {
        if (isIonContent(el)) {
          var content = el;
          return content.scrollByPoint(x, y, durationMs);
        }

        return Promise.resolve(el.scrollBy({
          top: y,
          left: x,
          behavior: durationMs > 0 ? 'smooth' : 'auto'
        }));
      };
      /**
       * Prints an error informing developers that an implementation requires an element to be used
       * within either the `ion-content` selector or the `.ion-content-scroll-host` class.
       */


      var printIonContentErrorMsg = function printIonContentErrorMsg(el) {
        return (0, _index_c4b11676_js__WEBPACK_IMPORTED_MODULE_2__.a)(el, ION_CONTENT_ELEMENT_SELECTOR);
      };
      /**
       * Several components in Ionic need to prevent scrolling
       * during a gesture (card modal, range, item sliding, etc).
       * Use this utility to account for ion-content and custom content hosts.
       */


      var disableContentScrollY = function disableContentScrollY(contentEl) {
        if (isIonContent(contentEl)) {
          var ionContent = contentEl;
          var initialScrollY = ionContent.scrollY;
          ionContent.scrollY = false;
          /**
           * This should be passed into resetContentScrollY
           * so that we can revert ion-content's scrollY to the
           * correct state. For example, if scrollY = false
           * initially, we do not want to enable scrolling
           * when we call resetContentScrollY.
           */

          return initialScrollY;
        } else {
          contentEl.style.setProperty('overflow', 'hidden');
          return true;
        }
      };

      var resetContentScrollY = function resetContentScrollY(contentEl, initialScrollY) {
        if (isIonContent(contentEl)) {
          contentEl.scrollY = initialScrollY;
        } else {
          contentEl.style.removeProperty('overflow');
        }
      };
      /***/

    },

    /***/
    99601:
    /*!****************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/keyboard-282b81b8.js ***!
      \****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "KEYBOARD_DID_CLOSE": function KEYBOARD_DID_CLOSE() {
          return (
            /* binding */
            _KEYBOARD_DID_CLOSE
          );
        },

        /* harmony export */
        "KEYBOARD_DID_OPEN": function KEYBOARD_DID_OPEN() {
          return (
            /* binding */
            _KEYBOARD_DID_OPEN
          );
        },

        /* harmony export */
        "copyVisualViewport": function copyVisualViewport() {
          return (
            /* binding */
            _copyVisualViewport
          );
        },

        /* harmony export */
        "keyboardDidClose": function keyboardDidClose() {
          return (
            /* binding */
            _keyboardDidClose
          );
        },

        /* harmony export */
        "keyboardDidOpen": function keyboardDidOpen() {
          return (
            /* binding */
            _keyboardDidOpen
          );
        },

        /* harmony export */
        "keyboardDidResize": function keyboardDidResize() {
          return (
            /* binding */
            _keyboardDidResize
          );
        },

        /* harmony export */
        "resetKeyboardAssist": function resetKeyboardAssist() {
          return (
            /* binding */
            _resetKeyboardAssist
          );
        },

        /* harmony export */
        "setKeyboardClose": function setKeyboardClose() {
          return (
            /* binding */
            _setKeyboardClose
          );
        },

        /* harmony export */
        "setKeyboardOpen": function setKeyboardOpen() {
          return (
            /* binding */
            _setKeyboardOpen
          );
        },

        /* harmony export */
        "startKeyboardAssist": function startKeyboardAssist() {
          return (
            /* binding */
            _startKeyboardAssist
          );
        },

        /* harmony export */
        "trackViewportChanges": function trackViewportChanges() {
          return (
            /* binding */
            _trackViewportChanges
          );
        }
        /* harmony export */

      });
      /*!
       * (C) Ionic http://ionicframework.com - MIT License
       */


      var _KEYBOARD_DID_OPEN = 'ionKeyboardDidShow';
      var _KEYBOARD_DID_CLOSE = 'ionKeyboardDidHide';
      var KEYBOARD_THRESHOLD = 150; // TODO(FW-2832): types

      var previousVisualViewport = {};
      var currentVisualViewport = {};
      var keyboardOpen = false;
      /**
       * This is only used for tests
       */

      var _resetKeyboardAssist = function _resetKeyboardAssist() {
        previousVisualViewport = {};
        currentVisualViewport = {};
        keyboardOpen = false;
      };

      var _startKeyboardAssist = function _startKeyboardAssist(win) {
        startNativeListeners(win);

        if (!win.visualViewport) {
          return;
        }

        currentVisualViewport = _copyVisualViewport(win.visualViewport);

        win.visualViewport.onresize = function () {
          _trackViewportChanges(win);

          if (_keyboardDidOpen() || _keyboardDidResize(win)) {
            _setKeyboardOpen(win);
          } else if (_keyboardDidClose(win)) {
            _setKeyboardClose(win);
          }
        };
      };
      /**
       * Listen for events fired by native keyboard plugin
       * in Capacitor/Cordova so devs only need to listen
       * in one place.
       */


      var startNativeListeners = function startNativeListeners(win) {
        win.addEventListener('keyboardDidShow', function (ev) {
          return _setKeyboardOpen(win, ev);
        });
        win.addEventListener('keyboardDidHide', function () {
          return _setKeyboardClose(win);
        });
      };

      var _setKeyboardOpen = function _setKeyboardOpen(win, ev) {
        fireKeyboardOpenEvent(win, ev);
        keyboardOpen = true;
      };

      var _setKeyboardClose = function _setKeyboardClose(win) {
        fireKeyboardCloseEvent(win);
        keyboardOpen = false;
      };
      /**
       * Returns `true` if the `keyboardOpen` flag is not
       * set, the previous visual viewport width equal the current
       * visual viewport width, and if the scaled difference
       * of the previous visual viewport height minus the current
       * visual viewport height is greater than KEYBOARD_THRESHOLD
       *
       * We need to be able to accommodate users who have zooming
       * enabled in their browser (or have zoomed in manually) which
       * is why we take into account the current visual viewport's
       * scale value.
       */


      var _keyboardDidOpen = function _keyboardDidOpen() {
        var scaledHeightDifference = (previousVisualViewport.height - currentVisualViewport.height) * currentVisualViewport.scale;
        return !keyboardOpen && previousVisualViewport.width === currentVisualViewport.width && scaledHeightDifference > KEYBOARD_THRESHOLD;
      };
      /**
       * Returns `true` if the keyboard is open,
       * but the keyboard did not close
       */


      var _keyboardDidResize = function _keyboardDidResize(win) {
        return keyboardOpen && !_keyboardDidClose(win);
      };
      /**
       * Determine if the keyboard was closed
       * Returns `true` if the `keyboardOpen` flag is set and
       * the current visual viewport height equals the
       * layout viewport height.
       */


      var _keyboardDidClose = function _keyboardDidClose(win) {
        return keyboardOpen && currentVisualViewport.height === win.innerHeight;
      };
      /**
       * Dispatch a keyboard open event
       */


      var fireKeyboardOpenEvent = function fireKeyboardOpenEvent(win, nativeEv) {
        var keyboardHeight = nativeEv ? nativeEv.keyboardHeight : win.innerHeight - currentVisualViewport.height;
        var ev = new CustomEvent(_KEYBOARD_DID_OPEN, {
          detail: {
            keyboardHeight: keyboardHeight
          }
        });
        win.dispatchEvent(ev);
      };
      /**
       * Dispatch a keyboard close event
       */


      var fireKeyboardCloseEvent = function fireKeyboardCloseEvent(win) {
        var ev = new CustomEvent(_KEYBOARD_DID_CLOSE);
        win.dispatchEvent(ev);
      };
      /**
       * Given a window object, create a copy of
       * the current visual and layout viewport states
       * while also preserving the previous visual and
       * layout viewport states
       */


      var _trackViewportChanges = function _trackViewportChanges(win) {
        previousVisualViewport = Object.assign({}, currentVisualViewport);
        currentVisualViewport = _copyVisualViewport(win.visualViewport);
      };
      /**
       * Creates a deep copy of the visual viewport
       * at a given state
       */


      var _copyVisualViewport = function _copyVisualViewport(visualViewport) {
        return {
          width: Math.round(visualViewport.width),
          height: Math.round(visualViewport.height),
          offsetTop: visualViewport.offsetTop,
          offsetLeft: visualViewport.offsetLeft,
          pageTop: visualViewport.pageTop,
          pageLeft: visualViewport.pageLeft,
          scale: visualViewport.scale
        };
      };
      /***/

    },

    /***/
    40035:
    /*!***************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/keyboard-controller-73af62b2.js ***!
      \***************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "c": function c() {
          return (
            /* binding */
            createKeyboardController
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./index-33ffec25.js */
      340);
      /*!
       * (C) Ionic http://ionicframework.com - MIT License
       */

      /**
       * Creates a controller that tracks and reacts to opening or closing the keyboard.
       *
       * @internal
       * @param keyboardChangeCallback A function to call when the keyboard opens or closes.
       */


      var createKeyboardController = function createKeyboardController(keyboardChangeCallback) {
        var keyboardWillShowHandler;
        var keyboardWillHideHandler;
        var keyboardVisible;

        var init = function init() {
          keyboardWillShowHandler = function keyboardWillShowHandler() {
            keyboardVisible = true;
            if (keyboardChangeCallback) keyboardChangeCallback(true);
          };

          keyboardWillHideHandler = function keyboardWillHideHandler() {
            keyboardVisible = false;
            if (keyboardChangeCallback) keyboardChangeCallback(false);
          };

          _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w === null || _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w === void 0 ? void 0 : _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w.addEventListener('keyboardWillShow', keyboardWillShowHandler);
          _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w === null || _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w === void 0 ? void 0 : _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w.addEventListener('keyboardWillHide', keyboardWillHideHandler);
        };

        var destroy = function destroy() {
          _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w === null || _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w === void 0 ? void 0 : _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w.removeEventListener('keyboardWillShow', keyboardWillShowHandler);
          _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w === null || _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w === void 0 ? void 0 : _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w.removeEventListener('keyboardWillHide', keyboardWillHideHandler);
          keyboardWillShowHandler = keyboardWillHideHandler = undefined;
        };

        var isKeyboardVisible = function isKeyboardVisible() {
          return keyboardVisible;
        };

        init();
        return {
          init: init,
          destroy: destroy,
          isKeyboardVisible: isKeyboardVisible
        };
      };
      /***/

    },

    /***/
    1802:
    /*!***********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-5d6b6fe7.js ***!
      \***********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "S": function S() {
          return (
            /* binding */
            SPINNERS
          );
        }
        /* harmony export */

      });
      /*!
       * (C) Ionic http://ionicframework.com - MIT License
       */


      var spinners = {
        bubbles: {
          dur: 1000,
          circles: 9,
          fn: function fn(dur, index, total) {
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            var angle = 2 * Math.PI * index / total;
            return {
              r: 5,
              style: {
                top: "".concat(9 * Math.sin(angle), "px"),
                left: "".concat(9 * Math.cos(angle), "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        circles: {
          dur: 1000,
          circles: 8,
          fn: function fn(dur, index, total) {
            var step = index / total;
            var animationDelay = "".concat(dur * step - dur, "ms");
            var angle = 2 * Math.PI * step;
            return {
              r: 5,
              style: {
                top: "".concat(9 * Math.sin(angle), "px"),
                left: "".concat(9 * Math.cos(angle), "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        circular: {
          dur: 1400,
          elmDuration: true,
          circles: 1,
          fn: function fn() {
            return {
              r: 20,
              cx: 48,
              cy: 48,
              fill: 'none',
              viewBox: '24 24 48 48',
              transform: 'translate(0,0)',
              style: {}
            };
          }
        },
        crescent: {
          dur: 750,
          circles: 1,
          fn: function fn() {
            return {
              r: 26,
              style: {}
            };
          }
        },
        dots: {
          dur: 750,
          circles: 3,
          fn: function fn(_, index) {
            var animationDelay = -(110 * index) + 'ms';
            return {
              r: 6,
              style: {
                left: "".concat(9 - 9 * index, "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        lines: {
          dur: 1000,
          lines: 8,
          fn: function fn(dur, index, total) {
            var transform = "rotate(".concat(360 / total * index + (index < total / 2 ? 180 : -180), "deg)");
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            return {
              y1: 14,
              y2: 26,
              style: {
                transform: transform,
                'animation-delay': animationDelay
              }
            };
          }
        },
        'lines-small': {
          dur: 1000,
          lines: 8,
          fn: function fn(dur, index, total) {
            var transform = "rotate(".concat(360 / total * index + (index < total / 2 ? 180 : -180), "deg)");
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            return {
              y1: 12,
              y2: 20,
              style: {
                transform: transform,
                'animation-delay': animationDelay
              }
            };
          }
        },
        'lines-sharp': {
          dur: 1000,
          lines: 12,
          fn: function fn(dur, index, total) {
            var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            return {
              y1: 17,
              y2: 29,
              style: {
                transform: transform,
                'animation-delay': animationDelay
              }
            };
          }
        },
        'lines-sharp-small': {
          dur: 1000,
          lines: 12,
          fn: function fn(dur, index, total) {
            var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            return {
              y1: 12,
              y2: 20,
              style: {
                transform: transform,
                'animation-delay': animationDelay
              }
            };
          }
        }
      };
      var SPINNERS = spinners;
      /***/
    },

    /***/
    72978:
    /*!******************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/swipe-back-e35bd7d6.js ***!
      \******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "createSwipeBackGesture": function createSwipeBackGesture() {
          return (
            /* binding */
            _createSwipeBackGesture
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./helpers-3b390e48.js */
      83870);
      /* harmony import */


      var _dir_e8b767a8_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./dir-e8b767a8.js */
      94114);
      /* harmony import */


      var _index_422b6e83_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./index-422b6e83.js */
      18819);
      /* harmony import */


      var _gesture_controller_17060b7c_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./gesture-controller-17060b7c.js */
      72022);
      /*!
       * (C) Ionic http://ionicframework.com - MIT License
       */


      var _createSwipeBackGesture = function _createSwipeBackGesture(el, canStartHandler, onStartHandler, onMoveHandler, onEndHandler) {
        var win = el.ownerDocument.defaultView;
        var rtl = (0, _dir_e8b767a8_js__WEBPACK_IMPORTED_MODULE_1__.i)(el);
        /**
         * Determine if a gesture is near the edge
         * of the screen. If true, then the swipe
         * to go back gesture should proceed.
         */

        var isAtEdge = function isAtEdge(detail) {
          var threshold = 50;
          var startX = detail.startX;

          if (rtl) {
            return startX >= win.innerWidth - threshold;
          }

          return startX <= threshold;
        };

        var getDeltaX = function getDeltaX(detail) {
          return rtl ? -detail.deltaX : detail.deltaX;
        };

        var getVelocityX = function getVelocityX(detail) {
          return rtl ? -detail.velocityX : detail.velocityX;
        };

        var canStart = function canStart(detail) {
          /**
           * The user's locale can change mid-session,
           * so we need to check text direction at
           * the beginning of every gesture.
           */
          rtl = (0, _dir_e8b767a8_js__WEBPACK_IMPORTED_MODULE_1__.i)(el);
          return isAtEdge(detail) && canStartHandler();
        };

        var onMove = function onMove(detail) {
          // set the transition animation's progress
          var delta = getDeltaX(detail);
          var stepValue = delta / win.innerWidth;
          onMoveHandler(stepValue);
        };

        var onEnd = function onEnd(detail) {
          // the swipe back gesture has ended
          var delta = getDeltaX(detail);
          var width = win.innerWidth;
          var stepValue = delta / width;
          var velocity = getVelocityX(detail);
          var z = width / 2.0;
          var shouldComplete = velocity >= 0 && (velocity > 0.2 || delta > z);
          var missing = shouldComplete ? 1 - stepValue : stepValue;
          var missingDistance = missing * width;
          var realDur = 0;

          if (missingDistance > 5) {
            var dur = missingDistance / Math.abs(velocity);
            realDur = Math.min(dur, 540);
          }

          onEndHandler(shouldComplete, stepValue <= 0 ? 0.01 : (0, _helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_0__.l)(0, stepValue, 0.9999), realDur);
        };

        return (0, _index_422b6e83_js__WEBPACK_IMPORTED_MODULE_2__.createGesture)({
          el: el,
          gestureName: 'goback-swipe',
          gesturePriority: 40,
          threshold: 10,
          canStart: canStart,
          onStart: onStartHandler,
          onMove: onMove,
          onEnd: onEnd
        });
      };
      /***/

    },

    /***/
    4497:
    /*!******************************************************************************!*\
      !*** ./src/app/modals/change-tool-name-modal/change-tool-name-modal.page.ts ***!
      \******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ChangeToolNameModalPage": function ChangeToolNameModalPage() {
          return (
            /* binding */
            _ChangeToolNameModalPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var src_app_bases_base_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/bases/base-controller */
      38790);
      /* harmony import */


      var src_app_services_state_app_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/state/app.state */
      12607);
      /* harmony import */


      var src_app_services_utility_carmd_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/utility/carmd.utils */
      92582);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      81864);
      /* harmony import */


      var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/keyboard/ngx */
      616);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      54364);

      var _c0 = ["nameInput"];

      function ChangeToolNameModalPage_div_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " The entered name must not: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, " - Exceed 15 characters ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, " - Have any spaces ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      var MAX_NAME_CHARACTERS = 15;

      var _ChangeToolNameModalPage = /*#__PURE__*/function (_src_app_bases_base_c) {
        function _ChangeToolNameModalPage(modalController, changeDetector, keyboard) {
          var _this;

          _classCallCheck(this, _ChangeToolNameModalPage);

          _this = _callSuper(this, _ChangeToolNameModalPage, ['ChangeToolNameModalPage']);
          _this.modalController = modalController;
          _this.changeDetector = changeDetector;
          _this.keyboard = keyboard;
          _this.couldConfirm = false;
          _this.meetRequiredCriteria = true;
          return _this;
        }

        _inherits(_ChangeToolNameModalPage, _src_app_bases_base_c);

        return _createClass(_ChangeToolNameModalPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            var _this2 = this;

            this.couldConfirm = false;
            this.meetRequiredCriteria = true;
            setTimeout(function () {
              _this2.nameInput.setFocus();
            }, 500);
          }
        }, {
          key: "close",
          value: function close() {
            var newName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            return this.modalController.dismiss({
              newName: newName
            });
          }
        }, {
          key: "newNameChanges",
          value: function newNameChanges() {
            if (this.newName && this.newName.length > 0) {
              this.couldConfirm = true;
            } else {
              this.couldConfirm = false;
            }

            this.meetRequiredCriteria = true;
            src_app_services_utility_carmd_utils__WEBPACK_IMPORTED_MODULE_2__.CarMDUtils.refreshUI(this.changeDetector);
          }
        }, {
          key: "hideKeyboard",
          value: function hideKeyboard() {
            if (src_app_services_state_app_state__WEBPACK_IMPORTED_MODULE_1__.AppState.isOnDevice) {
              if (this.keyboard.isVisible) {
                this.keyboard.hide();
              }
            }
          }
        }, {
          key: "confirm",
          value: function confirm() {
            this.hideKeyboard();

            if (!this.newName || this.newName.length > MAX_NAME_CHARACTERS) {
              this.meetRequiredCriteria = false;
              this.logger.debug('Exceed 15 characters');
              return;
            }

            if (this.newName.indexOf(' ') > -1) {
              this.logger.debug('Have any spaces');
              this.meetRequiredCriteria = false;
              return;
            }

            this.meetRequiredCriteria = true;
            this.close(this.newName);
          }
        }]);
      }(src_app_bases_base_controller__WEBPACK_IMPORTED_MODULE_0__.BaseController);

      _ChangeToolNameModalPage.ɵfac = function ChangeToolNameModalPage_Factory(t) {
        return new (t || _ChangeToolNameModalPage)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_3__.Keyboard));
      };

      _ChangeToolNameModalPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: _ChangeToolNameModalPage,
        selectors: [["app-change-tool-name-modal"]],
        viewQuery: function ChangeToolNameModalPage_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.nameInput = _t.first);
          }
        },
        inputs: {
          toolId: "toolId",
          toolName: "toolName"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
        decls: 24,
        vars: 4,
        consts: [[1, "ion-no-border"], ["mode", "ios"], ["slot", "end"], ["color", "tertiary", 3, "click"], ["name", "close"], ["scroll-y", "false"], [1, "app-sp-font-12"], ["size", "12"], [1, "app-poppins-semi-bold", "my-1"], ["inputmode", "text", "maxlength", "15", 1, "app-input", 3, "ngModel", "ngModelChange", "ionChange", "keyup.enter"], ["nameInput", ""], [4, "ngIf"], [1, "ion-no-border", "p-1"], [1, "py-0"], [1, "text-center"], [1, "app-button", 3, "disabled", "click"], ["ion-text", "", 1, "text-danger"]],
        template: function ChangeToolNameModalPage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-toolbar", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "ion-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "ion-buttons", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "ion-button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ChangeToolNameModalPage_Template_ion_button_click_5_listener() {
              return ctx.close();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "ion-icon", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "ion-content", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "ion-grid");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "ion-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "ion-col", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, " Enter new Tool Name here: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "ion-col", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "ion-input", 9, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ChangeToolNameModalPage_Template_ion_input_ngModelChange_15_listener($event) {
              return ctx.newName = $event;
            })("ionChange", function ChangeToolNameModalPage_Template_ion_input_ionChange_15_listener() {
              return ctx.newNameChanges();
            })("keyup.enter", function ChangeToolNameModalPage_Template_ion_input_keyup_enter_15_listener() {
              return ctx.couldConfirm && ctx.confirm();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "ion-col", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, ChangeToolNameModalPage_div_18_Template, 7, 0, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "ion-footer", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "ion-toolbar", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "p", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "ion-button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ChangeToolNameModalPage_Template_ion_button_click_22_listener() {
              return ctx.confirm();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Confirm");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.toolName);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.newName);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.meetRequiredCriteria);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx.couldConfirm);
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.TextValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonFooter],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGFuZ2UtdG9vbC1uYW1lLW1vZGFsLnBhZ2Uuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    50016:
    /*!**************************************************************************************!*\
      !*** ./src/app/modals/multiple-tools-found-modal/multiple-tools-found-modal.page.ts ***!
      \**************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MultipleToolsFoundModalPage": function MultipleToolsFoundModalPage() {
          return (
            /* binding */
            _MultipleToolsFoundModalPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var src_app_bases_base_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/bases/base-controller */
      38790);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      81864);

      var _MultipleToolsFoundModalPage = /*#__PURE__*/function (_src_app_bases_base_c2) {
        function _MultipleToolsFoundModalPage(modalController) {
          var _this3;

          _classCallCheck(this, _MultipleToolsFoundModalPage);

          _this3 = _callSuper(this, _MultipleToolsFoundModalPage, ['MultipleToolsFoundModalPage']);
          _this3.modalController = modalController;
          return _this3;
        }

        _inherits(_MultipleToolsFoundModalPage, _src_app_bases_base_c2);

        return _createClass(_MultipleToolsFoundModalPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {}
        }, {
          key: "close",
          value: function close() {
            return this.modalController.dismiss();
          }
        }]);
      }(src_app_bases_base_controller__WEBPACK_IMPORTED_MODULE_0__.BaseController);

      _MultipleToolsFoundModalPage.ɵfac = function MultipleToolsFoundModalPage_Factory(t) {
        return new (t || _MultipleToolsFoundModalPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController));
      };

      _MultipleToolsFoundModalPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _MultipleToolsFoundModalPage,
        selectors: [["app-multiple-tools-found-modal"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
        decls: 14,
        vars: 0,
        consts: [[1, "ion-no-border"], ["mode", "ios"], ["slot", "end"], ["color", "tertiary", 3, "click"], ["name", "close"], ["scroll-y", "false"], [1, "app-sp-font-12"], ["size", "12"], [1, "app-poppins-semi-bold"]],
        template: function MultipleToolsFoundModalPage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Please Note...");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-buttons", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MultipleToolsFoundModalPage_Template_ion_button_click_5_listener() {
              return ctx.close();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "ion-icon", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-content", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-grid");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-col", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Please make sure your Pro15 Unit is the only one within Bluetooth range. If there are multiple found, it will be difficult to identify which one is which, if the names have not yet been changed. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonCol],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtdWx0aXBsZS10b29scy1mb3VuZC1tb2RhbC5wYWdlLnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    36152:
    /*!***********************************************************************!*\
      !*** ./src/app/pages/dlc-locator-details/dlc-locator-details.page.ts ***!
      \***********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DlcLocatorDetailsPage": function DlcLocatorDetailsPage() {
          return (
            /* binding */
            _DlcLocatorDetailsPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! tslib */
      42321);
      /* harmony import */


      var src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/configs/app.config */
      66626);
      /* harmony import */


      var src_app_bases_base_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/bases/base-controller */
      38790);
      /* harmony import */


      var src_app_models_app_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/models/app.model */
      20998);
      /* harmony import */


      var src_app_models_report_session__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/models/report-session */
      34045);
      /* harmony import */


      var _vehicle_linking_vehicle_linking_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../vehicle-linking/vehicle-linking.page */
      55499);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic/angular */
      81864);
      /* harmony import */


      var src_app_services_report_service_report_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/report-service/report-service */
      45322);
      /* harmony import */


      var src_app_services_navigation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/navigation.service */
      89565);
      /* harmony import */


      var src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/helper.service */
      22486);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      54364);

      function DlcLocatorDetailsPage_ion_toolbar_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-toolbar", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "ion-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "DLC Locator");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }
      }

      function DlcLocatorDetailsPage_ion_toolbar_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-toolbar", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "ion-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "DLC Locator");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }
      }

      function DlcLocatorDetailsPage_img_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "img", 15);
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("src", ctx_r2.locationImageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
        }
      }

      function DlcLocatorDetailsPage_div_9_img_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "img", 17);
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("src", ctx_r4.dlcLocationModel.imageFileUrlSmall, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
        }
      }

      function DlcLocatorDetailsPage_div_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, DlcLocatorDetailsPage_div_9_img_1_Template, 1, 1, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r3.locationImageUrl);
        }
      }

      var _DlcLocatorDetailsPage = /*#__PURE__*/function (_src_app_bases_base_c3) {
        function _DlcLocatorDetailsPage(navCtrl, navParams, reportService, navigationService, helper) {
          var _this4;

          _classCallCheck(this, _DlcLocatorDetailsPage);

          _this4 = _callSuper(this, _DlcLocatorDetailsPage, ['DlcLocatorDetailsPage']);
          _this4.navCtrl = navCtrl;
          _this4.navParams = navParams;
          _this4.reportService = reportService;
          _this4.navigationService = navigationService;
          _this4.helper = helper;
          _this4.connectToolLoadingText = "Searching for device...";
          _this4.isRetry = false;
          _this4.dlcLocationModel = new src_app_models_app_model__WEBPACK_IMPORTED_MODULE_2__.DlcLocationModel();
          _this4.isCanceled = false;
          _this4.VehicleLinkingPage = _vehicle_linking_vehicle_linking_page__WEBPACK_IMPORTED_MODULE_4__.VehicleLinkingPage;
          _this4.hasDlcInfo = false;
          _this4.reportSession = new src_app_models_report_session__WEBPACK_IMPORTED_MODULE_3__.ReportSession();
          _this4.isLoadingImage = true;
          return _this4;
        }

        _inherits(_DlcLocatorDetailsPage, _src_app_bases_base_c3);

        return _createClass(_DlcLocatorDetailsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {//this.image.setFileTransferOptions({ trustAllHosts: true });
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.isLoadingImage = true;
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
              return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                while (1) switch (_context4.prev = _context4.next) {
                  case 0:
                    this.reportSession = this.reportService.getReportSession();
                    this.dlcLocationModel = this.reportSession.dlcModel;

                    if (this.dlcLocationModel && this.dlcLocationModel.locationNumber && this.dlcLocationModel.locationNumber > 0 && this.dlcLocationModel.locationNumber < 10) {
                      this.locationImageUrl = "assets/img/dlc_locator/" + this.dlcLocationModel.locationNumber + ".png";
                    } else {
                      this.locationImageUrl = "assets/img/dlc_locator/generic.png";
                    }

                    this.hasDlcInfo = this.reportSession.hasDlc;
                    /*
                    try {
                      this.logger.debug(this.dlcLocationModel.imageFileUrlSmall);
                      this.http.get(this.dlcLocationModel.imageFileUrlSmall)
                      .catch(error => {
                        this.logger.debug(this.dlcLocationModel.imageFileUrlSmall);
                        this.dlcLocationModel.imageFileUrlSmall = null;
                        this.reportSession.dlcModel.imageFileUrlSmall = null;
                        this.reportService.saveReportSession(this.reportSession);
                        this.isLoadingImage = false;
                        return '';
                      });
                      setTimeout(() => {
                        this.logger.debug(this.dlcLocationModel.imageFileUrlSmall);
                        this.isLoadingImage = false;
                      }, 5000);
                    } catch (error) {
                      this.dlcLocationModel.imageFileUrlSmall = null;
                      this.reportSession.dlcModel.imageFileUrlSmall = null;
                      this.reportService.saveReportSession(this.reportSession);
                    }*/

                    this.logger.debug(this.hasDlcInfo);

                  case 5:
                  case "end":
                    return _context4.stop();
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "confirmCancel",
          value: function confirmCancel() {
            var ctx = this;
            this.helper.confirm("Are you sure?", src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_0__.AppStrings.CONFIRM, function () {
              ctx.cancel(true);
            });
          }
        }, {
          key: "cancel",
          value: function cancel() {
            var goHome = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
              return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                while (1) switch (_context5.prev = _context5.next) {
                  case 0:
                    if (!goHome) {
                      _context5.next = 4;
                      break;
                    }

                    this.isCanceled = true;
                    _context5.next = 4;
                    return this.navigationService.goBack();

                  case 4:
                  case "end":
                    return _context5.stop();
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "closeClick",
          value: function closeClick() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
              return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                while (1) switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return this.navigationService.goBack();

                  case 2:
                  case "end":
                    return _context6.stop();
                }
              }, _callee6, this);
            }));
          }
        }]);
      }(src_app_bases_base_controller__WEBPACK_IMPORTED_MODULE_1__.BaseController);

      _DlcLocatorDetailsPage.ɵfac = function DlcLocatorDetailsPage_Factory(t) {
        return new (t || _DlcLocatorDetailsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_10__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_10__.NavParams), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_report_service_report_service__WEBPACK_IMPORTED_MODULE_5__.ReportServiceProvider), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_navigation_service__WEBPACK_IMPORTED_MODULE_6__.NavigationService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_7__.HelperService));
      };

      _DlcLocatorDetailsPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
        type: _DlcLocatorDetailsPage,
        selectors: [["app-dlc-locator-details"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]],
        decls: 25,
        vars: 9,
        consts: [[1, "ion-no-border"], ["mode", "md", 4, "ngIf"], ["mode", "ios", 4, "ngIf"], [1, "ion-padding"], [1, "text-center", "mb-4", "pt-2"], [1, "bg-01", "p-3", "text-center", "no-line-height"], [3, "src", 4, "ngIf"], ["class", "bg-01 p-3 text-center no-line-height", 4, "ngIf"], ["size", "5", "size-sm", "3"], ["size", "7", "size-sm", "9"], [1, "ion-no-border", "p-2"], [1, "py-1"], ["expand", "block", 1, "app-button", 3, "click"], ["mode", "md"], ["mode", "ios"], [3, "src"], ["onerror", "this.style.display='none'", 3, "src", 4, "ngIf"], ["onerror", "this.style.display='none'", 3, "src"]],
        template: function DlcLocatorDetailsPage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, DlcLocatorDetailsPage_ion_toolbar_1_Template, 3, 0, "ion-toolbar", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, DlcLocatorDetailsPage_ion_toolbar_2_Template, 3, 0, "ion-toolbar", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "ion-content", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, DlcLocatorDetailsPage_img_8_Template, 1, 1, "img", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](9, DlcLocatorDetailsPage_div_9_Template, 2, 1, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "ion-grid");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "ion-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "ion-col", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, "Access:");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "ion-col", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "ion-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "ion-col", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18, "comments:");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "ion-col", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "ion-footer", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "ion-toolbar", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "ion-button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function DlcLocatorDetailsPage_Template_ion_button_click_23_listener() {
              return ctx.closeClick();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](24, "Close");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.isAndroid);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.isAndroid);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate3"]("", ctx.dlcLocationModel.year, " ", ctx.dlcLocationModel.make, " ", ctx.dlcLocationModel.model, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.locationImageUrl);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.dlcLocationModel && ctx.dlcLocationModel.imageFileUrlSmall);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.dlcLocationModel.access);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.dlcLocationModel.comments);
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonHeader, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonFooter, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonTitle],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkbGMtbG9jYXRvci1kZXRhaWxzLnBhZ2Uuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    31632:
    /*!***************************************************!*\
      !*** ./src/app/pages/dtc-erase/dtc-erase.page.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DtcErasePage": function DtcErasePage() {
          return (
            /* binding */
            _DtcErasePage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      42321);
      /* harmony import */


      var src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/configs/app.config */
      66626);
      /* harmony import */


      var src_app_bases_base_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/bases/base-controller */
      38790);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      81864);
      /* harmony import */


      var src_app_services_report_service_report_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/report-service/report-service */
      45322);
      /* harmony import */


      var src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/helper.service */
      22486);
      /* harmony import */


      var src_app_services_innova_vci_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/innova-vci.service */
      7860);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      54364);

      function DtcErasePage_ion_button_16_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DtcErasePage_ion_button_16_Template_ion_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r2.eraseOBDDtcs();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Yes");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function DtcErasePage_ion_button_17_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DtcErasePage_ion_button_17_Template_ion_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r4.eraseDtcs();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Yes");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      var _DtcErasePage = /*#__PURE__*/function (_src_app_bases_base_c4) {
        function _DtcErasePage(navCtrl, navParams, reportService, modal, helper, innovaVciService) {
          var _this5;

          _classCallCheck(this, _DtcErasePage);

          _this5 = _callSuper(this, _DtcErasePage, ['DtcErasePage']);
          _this5.navCtrl = navCtrl;
          _this5.navParams = navParams;
          _this5.reportService = reportService;
          _this5.modal = modal;
          _this5.helper = helper;
          _this5.innovaVciService = innovaVciService;
          _this5.ReportId = '';
          _this5.ModuleId = '';
          _this5.IsEraseAll = false;
          _this5.IsEraseOBDDTCs = false;
          return _this5;
        }

        _inherits(_DtcErasePage, _src_app_bases_base_c4);

        return _createClass(_DtcErasePage, [{
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.logger.debug("ReportId: ".concat(this.ReportId, ", ModuleId: ").concat(this.ModuleId, ", System: ").concat(this.System, ", SubSystem: ").concat(this.SubSystem, ", isEraseAll: ").concat(this.IsEraseAll));
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.logger.debug('ionViewDidLoad DtcErasePage');
          }
        }, {
          key: "clearSuccess",
          value: function clearSuccess() {
            var ctx = this;
            ctx.reportService.deleteReport(this.ReportId);
            setTimeout(function () {
              ctx.backToReportPage(true);
            });
          }
        }, {
          key: "eraseOBDDtcs",
          value: function eraseOBDDtcs() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
              var _this6 = this;

              var result;
              return _regeneratorRuntime().wrap(function _callee7$(_context7) {
                while (1) switch (_context7.prev = _context7.next) {
                  case 0:
                    if (!this.innovaVciService.isConnected) {
                      _context7.next = 10;
                      break;
                    }

                    this.helper.showLoading();
                    _context7.next = 4;
                    return this.innovaVciService.eraseDtcsOBDII();

                  case 4:
                    result = _context7.sent;
                    this.logger.debug('Erase OBD DTCs', result);
                    this.helper.hideLoading();
                    this.clearSuccess();
                    _context7.next = 11;
                    break;

                  case 10:
                    this.helper.confirm('Please verify connection and try again', 'No Device Detected', function () {
                      _this6.logger.debug('Retry clicked');

                      _this6.eraseOBDDtcs();
                    }, function () {
                      _this6.logger.debug('Cancel clicked');

                      _this6.backToReportPage();
                    }, 'Retry', 'Cancel');

                  case 11:
                  case "end":
                    return _context7.stop();
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "eraseDtcs",
          value: function eraseDtcs() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
              var _this7 = this;

              var ctx, report, oemModules, index, total, oemModule, _result, result, _result2;

              return _regeneratorRuntime().wrap(function _callee8$(_context8) {
                while (1) switch (_context8.prev = _context8.next) {
                  case 0:
                    ctx = this;

                    if (!ctx.innovaVciService.isConnected) {
                      _context8.next = 48;
                      break;
                    }

                    ctx.helper.showLoading();
                    _context8.next = 5;
                    return ctx.reportService.getReport(ctx.ReportId);

                  case 5:
                    report = _context8.sent;

                    if (!report) {
                      _context8.next = 44;
                      break;
                    }

                    if (!ctx.IsEraseAll) {
                      _context8.next = 33;
                      break;
                    }

                    oemModules = report.modulesWithDTC;

                    if (!(oemModules && oemModules.length)) {
                      _context8.next = 25;
                      break;
                    }

                    index = 0;
                    total = oemModules.length;

                  case 12:
                    if (!oemModules.length) {
                      _context8.next = 23;
                      break;
                    }

                    oemModule = oemModules.shift();
                    this.logger.debug("Start erase DTCs for module [".concat(++index, "/").concat(total, "]"), oemModule);
                    _context8.next = 17;
                    return this.helper.sleep(src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_0__.SLEEP_EACH_VCI_REQUEST);

                  case 17:
                    _context8.next = 19;
                    return this.innovaVciService.eraseDTCs({
                      System: parseInt(oemModule.system),
                      SubSystem: parseInt(oemModule.subSystem)
                    }, true);

                  case 19:
                    _result = _context8.sent;
                    this.logger.debug("Erase ".concat(_result), oemModule);
                    _context8.next = 12;
                    break;

                  case 23:
                    _context8.next = 25;
                    return this.helper.sleep(src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_0__.SLEEP_EACH_VCI_REQUEST);

                  case 25:
                    _context8.next = 27;
                    return this.innovaVciService.eraseDtcsOBDII();

                  case 27:
                    result = _context8.sent;
                    this.logger.debug('Erase OBD DTCs', result);
                    this.helper.hideLoading();
                    ctx.clearSuccess();
                    _context8.next = 41;
                    break;

                  case 33:
                    this.logger.debug("Start erase DTCs for module ".concat(this.ModuleId));
                    _context8.next = 36;
                    return this.helper.sleep(src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_0__.SLEEP_EACH_VCI_REQUEST);

                  case 36:
                    _context8.next = 38;
                    return this.innovaVciService.eraseDTCs({
                      System: this.System,
                      SubSystem: this.SubSystem
                    }, true);

                  case 38:
                    _result2 = _context8.sent;
                    this.logger.debug("Erase ".concat(_result2), this.ModuleId);
                    this.clearSuccess();

                  case 41:
                    ctx.helper.hideLoading();
                    _context8.next = 46;
                    break;

                  case 44:
                    ctx.helper.hideLoading();
                    ctx.backToReportPage();

                  case 46:
                    _context8.next = 49;
                    break;

                  case 48:
                    ctx.helper.confirm('Please verify connection and try again', 'No Device Detected', function () {
                      _this7.logger.debug('Retry clicked');

                      ctx.eraseDtcs();
                    }, function () {
                      _this7.logger.debug('Cancel clicked');

                      ctx.backToReportPage();
                    }, 'Retry', 'Cancel');

                  case 49:
                  case "end":
                    return _context8.stop();
                }
              }, _callee8, this);
            }));
          }
        }, {
          key: "backToReportPage",
          value: function backToReportPage() {
            var isErased = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            this.modal.dismiss({
              isErased: isErased
            });
          }
        }, {
          key: "cancel",
          value: function cancel() {
            this.modal.dismiss();
          }
        }]);
      }(src_app_bases_base_controller__WEBPACK_IMPORTED_MODULE_1__.BaseController);

      _DtcErasePage.ɵfac = function DtcErasePage_Factory(t) {
        return new (t || _DtcErasePage)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavParams), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_report_service_report_service__WEBPACK_IMPORTED_MODULE_2__.ReportServiceProvider), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_3__.HelperService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_innova_vci_service__WEBPACK_IMPORTED_MODULE_4__.InnovaVCIService));
      };

      _DtcErasePage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
        type: _DtcErasePage,
        selectors: [["app-dtc-erase"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]],
        decls: 21,
        vars: 5,
        consts: [[1, "ion-padding"], [1, "app-content-center-midle"], [1, "text-center"], [3, "hidden"], [1, "font-size-18"], [1, "ion-no-border", "py-2"], ["class", "app-button", "color", "danger", "expand", "block", 3, "click", 4, "ngIf"], ["expand", "block", 1, "app-button", 3, "click"], ["color", "danger", "expand", "block", 1, "app-button", 3, "click"]],
        template: function DtcErasePage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-content", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "h4", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Erase DTCs");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "h4", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Erase OBD DTC Codes");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "h4", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Erase all DTCs");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Are you sure?");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "ion-footer", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "ion-toolbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "ion-grid");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "ion-row", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "ion-col");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, DtcErasePage_ion_button_16_Template, 2, 0, "ion-button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, DtcErasePage_ion_button_17_Template, 2, 0, "ion-button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "ion-col");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "ion-button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DtcErasePage_Template_ion_button_click_19_listener() {
              return ctx.cancel();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "No");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidden", ctx.IsEraseAll);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidden", !ctx.IsEraseOBDDTCs);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidden", !ctx.IsEraseAll);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.IsEraseOBDDTCs);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.IsEraseOBDDTCs);
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonFooter, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonCol, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonButton],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkdGMtZXJhc2UucGFnZS5zY3NzIn0= */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map