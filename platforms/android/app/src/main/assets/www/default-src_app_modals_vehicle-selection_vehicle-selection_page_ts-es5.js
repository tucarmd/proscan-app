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

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  (self["webpackChunkcom_carmd_proscan2"] = self["webpackChunkcom_carmd_proscan2"] || []).push([["default-src_app_modals_vehicle-selection_vehicle-selection_page_ts"], {
    /***/
    44676:
    /*!**********************************************************************************!*\
      !*** ./src/app/modals/option-information-modal/option-information-modal.page.ts ***!
      \**********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "OptionInformationModalPage": function OptionInformationModalPage() {
          return (
            /* binding */
            _OptionInformationModalPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      81864);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      54364);

      function OptionInformationModalPage_ion_card_1_p_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r1.optionInformation.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function OptionInformationModalPage_ion_card_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-card", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-item", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-card-header", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-buttons", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OptionInformationModalPage_ion_card_1_Template_ion_button_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r2.dismiss();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "ion-icon", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, OptionInformationModalPage_ion_card_1_p_9_Template, 2, 1, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.optionInformation.option, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r0.optionInformation.description, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.optionInformation.image);
        }
      }

      var _OptionInformationModalPage = /*#__PURE__*/function () {
        function _OptionInformationModalPage(modalController) {
          _classCallCheck(this, _OptionInformationModalPage);

          this.modalController = modalController;
        }

        return _createClass(_OptionInformationModalPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "dismiss",
          value: function dismiss() {
            this.modalController.dismiss();
          }
        }]);
      }();

      _OptionInformationModalPage.ɵfac = function OptionInformationModalPage_Factory(t) {
        return new (t || _OptionInformationModalPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__.ModalController));
      };

      _OptionInformationModalPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _OptionInformationModalPage,
        selectors: [["app-option-information-modal"]],
        inputs: {
          optionInformation: "optionInformation"
        },
        decls: 2,
        vars: 1,
        consts: [[1, "app-dismiss", 3, "click"], ["class", "app-modal-middle", 4, "ngIf"], [1, "app-modal-middle"], ["lines", "none", 1, "bg-secondary"], [1, "pl-0", "app-poppins-medium", "text-white"], ["slot", "end"], [1, "text-black", 3, "click"], ["name", "close"], [1, "mb-3", "app-poppins-semi-bold", 3, "innerHTML"], ["class", "text-center app-vehicle-selection-img", 4, "ngIf"], [1, "text-center", "app-vehicle-selection-img"], ["alt", "", 3, "src"]],
        template: function OptionInformationModalPage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OptionInformationModalPage_Template_div_click_0_listener() {
              return ctx.dismiss();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OptionInformationModalPage_ion_card_1_Template, 10, 3, "ion-card", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.optionInformation);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonCardHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonCardContent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvcHRpb24taW5mb3JtYXRpb24tbW9kYWwucGFnZS5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    31452:
    /*!********************************************************************!*\
      !*** ./src/app/modals/vehicle-selection/vehicle-selection.page.ts ***!
      \********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "VehicleSelectionPage": function VehicleSelectionPage() {
          return (
            /* binding */
            _VehicleSelectionPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! tslib */
      42321);
      /* harmony import */


      var src_app_bases_base_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/bases/base-controller */
      38790);
      /* harmony import */


      var src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/configs/app.config */
      66626);
      /* harmony import */


      var src_app_models_app_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/models/app.constant */
      99888);
      /* harmony import */


      var src_app_models_app_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/models/app.model */
      20998);
      /* harmony import */


      var src_app_services_state_app_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/state/app.state */
      12607);
      /* harmony import */


      var _option_information_modal_option_information_modal_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../option-information-modal/option-information-modal.page */
      44676);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/helper.service */
      22486);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic/angular */
      81864);
      /* harmony import */


      var src_app_services_innova_vci_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/innova-vci.service */
      7860);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/forms */
      1707);

      var _VehicleSelectionPage_emptyRespCnt;

      function VehicleSelectionPage_ion_toolbar_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-toolbar", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "ion-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Vehicle Selection");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }
      }

      function VehicleSelectionPage_ion_toolbar_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-toolbar", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "ion-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Vehicle Selection");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }
      }

      function VehicleSelectionPage_ion_card_20_ion_item_3_ion_buttons_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-buttons");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "ion-button", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function VehicleSelectionPage_ion_card_20_ion_item_3_ion_buttons_3_Template_ion_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r11);

            var option_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);

            return ctx_r9.viewOption(option_r6);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "ion-icon", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }
      }

      function VehicleSelectionPage_ion_card_20_ion_item_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-item", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function VehicleSelectionPage_ion_card_20_ion_item_3_Template_ion_item_click_0_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r13);

            var index_r7 = restoredCtx.index;
            var option_r6 = restoredCtx.$implicit;

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);

            return ctx_r12.selectOption(index_r7, option_r6);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, VehicleSelectionPage_ion_card_20_ion_item_3_ion_buttons_3_Template, 3, 0, "ion-buttons", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var option_r6 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](option_r6.option);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", option_r6.hasDetails);
        }
      }

      function VehicleSelectionPage_ion_card_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-card", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "ion-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "ion-list", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, VehicleSelectionPage_ion_card_20_ion_item_3_Template, 4, 2, "ion-item", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r2.options);
        }
      }

      function VehicleSelectionPage_ion_card_26_ion_item_3_ion_buttons_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-buttons");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "ion-button", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function VehicleSelectionPage_ion_card_26_ion_item_3_ion_buttons_3_Template_ion_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r20);

            var option_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);

            return ctx_r18.viewOption(option_r15);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "ion-icon", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }
      }

      function VehicleSelectionPage_ion_card_26_ion_item_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-item", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function VehicleSelectionPage_ion_card_26_ion_item_3_Template_ion_item_click_0_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r22);

            var index_r16 = restoredCtx.index;
            var option_r15 = restoredCtx.$implicit;

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);

            return ctx_r21.selectOption(index_r16, option_r15);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, VehicleSelectionPage_ion_card_26_ion_item_3_ion_buttons_3_Template, 3, 0, "ion-buttons", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var option_r15 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](option_r15.option);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", option_r15.hasDetails);
        }
      }

      function VehicleSelectionPage_ion_card_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-card", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "ion-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "ion-list", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, VehicleSelectionPage_ion_card_26_ion_item_3_Template, 4, 2, "ion-item", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r3.options);
        }
      }

      function VehicleSelectionPage_ion_card_32_ion_item_3_ion_buttons_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-buttons");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "ion-button", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function VehicleSelectionPage_ion_card_32_ion_item_3_ion_buttons_3_Template_ion_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r29);

            var option_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;

            var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);

            return ctx_r27.viewOption(option_r24);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "ion-icon", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }
      }

      function VehicleSelectionPage_ion_card_32_ion_item_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-item", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function VehicleSelectionPage_ion_card_32_ion_item_3_Template_ion_item_click_0_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r31);

            var index_r25 = restoredCtx.index;
            var option_r24 = restoredCtx.$implicit;

            var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);

            return ctx_r30.selectOption(index_r25, option_r24);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, VehicleSelectionPage_ion_card_32_ion_item_3_ion_buttons_3_Template, 3, 0, "ion-buttons", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var option_r24 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](option_r24.option);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", option_r24.hasDetails);
        }
      }

      function VehicleSelectionPage_ion_card_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-card", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "ion-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "ion-list", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, VehicleSelectionPage_ion_card_32_ion_item_3_Template, 4, 2, "ion-item", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r4.options);
        }
      }

      var SELECT_YEAR = 'Select Year';
      var SELECT_MAKE = 'Select Make';
      var SELECT_MODEL = 'Select Model';
      var SELECT_ENGINE = 'Select Engine';
      var SELECT_OPTION_1 = 'Select Option 1';
      var SELECT_OPTION_2 = 'Select Option 2';
      var SELECT_OPTION_3 = 'Select Option 3';
      var DONE = 'Done';

      var _VehicleSelectionPage = /*#__PURE__*/function (_src_app_bases_base_c) {
        function _VehicleSelectionPage(helper, modalController, innovaVciService, ngZone) {
          var _this;

          _classCallCheck(this, _VehicleSelectionPage);

          _this = _callSuper(this, _VehicleSelectionPage, ['VehicleSelectionPage']);
          _this.helper = helper;
          _this.modalController = modalController;
          _this.innovaVciService = innovaVciService;
          _this.ngZone = ngZone;
          _this.isViewingDetails = false;
          _this.viewingOption1 = false;
          _this.viewingOption2 = false;
          _this.viewingOption3 = false;
          _this.option1 = '';
          _this.option2 = '';
          _this.option3 = '';
          _this.isLoading = false;

          _VehicleSelectionPage_emptyRespCnt.set(_this, void 0);

          return _this;
        }

        _inherits(_VehicleSelectionPage, _src_app_bases_base_c);

        return _createClass(_VehicleSelectionPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            var _a;

            return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    if (src_app_services_state_app_state__WEBPACK_IMPORTED_MODULE_4__.AppState.isOnDevice) {
                      this.listOption1 = (_a = this.ymme) === null || _a === void 0 ? void 0 : _a.options1;
                    } else {
                      this.loadDummyData();
                    }

                  case 1:
                  case "end":
                    return _context.stop();
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "couldSubmit",
          get: function get() {
            return this.fieldSelect === DONE;
          }
        }, {
          key: "reInitYmme",
          value: function reInitYmme(fieldSelect) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
              var _this2 = this;

              var result, index;
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    if (fieldSelect === SELECT_OPTION_1) {
                      this.option2 = this.option3 = null;
                      this.listOption2 = this.listOption3 = [];
                    } else if (fieldSelect === SELECT_OPTION_2) {
                      this.option3 = null;
                      this.listOption3 = [];
                    }

                    _context2.next = 3;
                    return this.innovaVciService.ymme_back();

                  case 3:
                    result = _context2.sent;
                    this.logger.debug('back', result);

                    if (!result) {
                      _context2.next = 79;
                      break;
                    }

                    index = -1;

                    if (!(result.field === SELECT_YEAR)) {
                      _context2.next = 34;
                      break;
                    }

                    index = result.options.findIndex(function (d) {
                      return d === _this2.ymme.year;
                    });

                    if (!(index > -1)) {
                      _context2.next = 34;
                      break;
                    }

                    _context2.next = 12;
                    return this.helper.sleep(src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_1__.SLEEP_TIMEOUT);

                  case 12:
                    _context2.next = 14;
                    return this.innovaVciService.ymme_get(index);

                  case 14:
                    result = _context2.sent;
                    this.logger.debug('get makes', result);

                    if (!(result && result.field === SELECT_MAKE)) {
                      _context2.next = 34;
                      break;
                    }

                    index = result.options.findIndex(function (d) {
                      return d === _this2.ymme.make;
                    });

                    if (!(index > -1)) {
                      _context2.next = 34;
                      break;
                    }

                    _context2.next = 21;
                    return this.helper.sleep(src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_1__.SLEEP_TIMEOUT);

                  case 21:
                    _context2.next = 23;
                    return this.innovaVciService.ymme_get(index);

                  case 23:
                    result = _context2.sent;
                    this.logger.debug('get models', result);

                    if (!(result && result.field === SELECT_MODEL)) {
                      _context2.next = 34;
                      break;
                    }

                    index = result.options.findIndex(function (d) {
                      return d === _this2.ymme.model;
                    });

                    if (!(index > -1)) {
                      _context2.next = 34;
                      break;
                    }

                    _context2.next = 30;
                    return this.helper.sleep(src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_1__.SLEEP_TIMEOUT);

                  case 30:
                    _context2.next = 32;
                    return this.innovaVciService.ymme_get(index);

                  case 32:
                    result = _context2.sent;
                    this.logger.debug('get engines', result);

                  case 34:
                    if (!(result && result.field === SELECT_ENGINE)) {
                      _context2.next = 79;
                      break;
                    }

                    index = result.options.findIndex(function (d) {
                      return d === _this2.ymme.engine;
                    });

                    if (!(index > -1)) {
                      _context2.next = 79;
                      break;
                    }

                    _context2.next = 39;
                    return this.helper.sleep(src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_1__.SLEEP_TIMEOUT);

                  case 39:
                    _context2.next = 41;
                    return this.innovaVciService.ymme_get(index);

                  case 41:
                    result = _context2.sent;
                    this.logger.debug('get options 1', result, fieldSelect);

                    if (!(result && result.field === SELECT_OPTION_1)) {
                      _context2.next = 79;
                      break;
                    }

                    this.listOption1 = result.options;

                    if (!(fieldSelect === SELECT_OPTION_2)) {
                      _context2.next = 59;
                      break;
                    }

                    index = result.options.findIndex(function (d) {
                      return d === _this2.listOption1.find(function (d) {
                        return d === _this2.option1;
                      });
                    });

                    if (!(index > -1)) {
                      _context2.next = 57;
                      break;
                    }

                    _context2.next = 50;
                    return this.helper.sleep(src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_1__.SLEEP_TIMEOUT);

                  case 50:
                    _context2.next = 52;
                    return this.innovaVciService.ymme_get(index);

                  case 52:
                    result = _context2.sent;
                    this.logger.debug('get options 2', result);

                    if (result && result.field === SELECT_OPTION_2) {
                      this.listOption2 = result.options;
                    }

                    _context2.next = 57;
                    return this.helper.sleep(src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_1__.SLEEP_TIMEOUT);

                  case 57:
                    _context2.next = 79;
                    break;

                  case 59:
                    if (!(fieldSelect === SELECT_OPTION_3)) {
                      _context2.next = 79;
                      break;
                    }

                    index = result.options.findIndex(function (d) {
                      return d === _this2.listOption1.find(function (d) {
                        return d === _this2.option1;
                      });
                    });

                    if (!(index > -1)) {
                      _context2.next = 79;
                      break;
                    }

                    _context2.next = 64;
                    return this.helper.sleep(src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_1__.SLEEP_TIMEOUT);

                  case 64:
                    _context2.next = 66;
                    return this.innovaVciService.ymme_get(index);

                  case 66:
                    result = _context2.sent;
                    this.logger.debug('get options 2', result);

                    if (!(result && result.field === SELECT_OPTION_2)) {
                      _context2.next = 79;
                      break;
                    }

                    this.listOption2 = result.options;
                    index = result.options.findIndex(function (d) {
                      return d === _this2.listOption2.find(function (d) {
                        return d === _this2.option2;
                      });
                    });

                    if (!(index > -1)) {
                      _context2.next = 79;
                      break;
                    }

                    _context2.next = 74;
                    return this.helper.sleep(src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_1__.SLEEP_TIMEOUT);

                  case 74:
                    _context2.next = 76;
                    return this.innovaVciService.ymme_get(index);

                  case 76:
                    result = _context2.sent;
                    this.logger.debug('get options 3', result);

                    if (result && result.field === SELECT_OPTION_3) {
                      this.listOption3 = result.options;
                    }

                  case 79:
                  case "end":
                    return _context2.stop();
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "loadFieldData",
          value: function loadFieldData(index) {
            var expectedField = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
            return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
              var resp, field, options;
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) switch (_context3.prev = _context3.next) {
                  case 0:
                    this.fieldSelect = expectedField;

                    if (!this.isLoading) {
                      this.isLoading = true;
                      this.helper.showLoading();
                    }

                    if (!(isNaN(index) && expectedField)) {
                      _context3.next = 6;
                      break;
                    }

                    this.isLoading = false;
                    this.helper.hideLoading();
                    return _context3.abrupt("return", this.logger.debug("loadFieldData (skip) [".concat(expectedField, "]:").concat(index)));

                  case 6:
                    if (!(this.option1 || this.option2 || this.option3)) {
                      _context3.next = 12;
                      break;
                    }

                    if (!(expectedField === SELECT_OPTION_1 && this.option1 || expectedField === SELECT_OPTION_2 && this.option2 || expectedField === SELECT_OPTION_3 && this.option3)) {
                      _context3.next = 12;
                      break;
                    }

                    _context3.next = 10;
                    return this.reInitYmme(expectedField);

                  case 10:
                    _context3.next = 12;
                    return this.helper.sleep(src_app_configs_app_config__WEBPACK_IMPORTED_MODULE_1__.SLEEP_TIMEOUT);

                  case 12:
                    _context3.next = 14;
                    return this.innovaVciService.ymme_get(index);

                  case 14:
                    resp = _context3.sent;
                    this.logger.debug("loadFieldData [".concat(expectedField, "]:").concat(index), resp);
                    field = resp.field, options = resp.options;

                    if (!(field && options)) {
                      _context3.next = 26;
                      break;
                    }

                    (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__classPrivateFieldSet)(this, _VehicleSelectionPage_emptyRespCnt, 0, "f");
                    this.fieldSelect = field;
                    this.fieldOptions = options;

                    if (!this.couldSubmit) {
                      // Load data from tool
                      this.loadFieldOptions();
                    }

                    this.isLoading = false;
                    this.helper.hideLoading();
                    _context3.next = 32;
                    break;

                  case 26:
                    this.isLoading = false;
                    this.helper.hideLoading(); // in case tool not response data, try again?

                    (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__classPrivateFieldSet)(this, _VehicleSelectionPage_emptyRespCnt, +(0, tslib__WEBPACK_IMPORTED_MODULE_9__.__classPrivateFieldGet)(this, _VehicleSelectionPage_emptyRespCnt, "f") + 1, "f");

                    if (!((0, tslib__WEBPACK_IMPORTED_MODULE_9__.__classPrivateFieldGet)(this, _VehicleSelectionPage_emptyRespCnt, "f") >= 6)) {
                      _context3.next = 32;
                      break;
                    }

                    this.logger.debug('!! It seems we lost connect with tool, close dialog to make new connection');
                    return _context3.abrupt("return", this.cancel());

                  case 32:
                  case "end":
                    return _context3.stop();
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "loadFieldOptions",
          value: function loadFieldOptions() {
            var field = (this.fieldSelect || '').toLowerCase();
            var opts = this.fieldOptions ? Array.from(this.fieldOptions) : [];

            if (field.includes('option 1')) {
              this.listOption1 = opts;
              this.listOption2 = this.listOption3 = [];
            } else if (field.includes('option 2')) {
              this.listOption2 = opts;
              this.listOption3 = [];
            } else if (field.includes('option 3')) {
              this.listOption3 = opts;
            }

            this.viewingOption1 = false;
            this.viewingOption2 = false;
            this.viewingOption3 = false;
          }
        }, {
          key: "submit",
          value: function submit() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
              var confirm;
              return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                while (1) switch (_context4.prev = _context4.next) {
                  case 0:
                    if (!this.isLoading) {
                      _context4.next = 2;
                      break;
                    }

                    return _context4.abrupt("return", this.logger.debug('...loading data, skip this request'));

                  case 2:
                    this.isLoading = true;
                    _context4.next = 5;
                    return this.innovaVciService.ymme_confirm();

                  case 5:
                    confirm = _context4.sent;
                    this.isLoading = false;
                    this.logger.debug('ymme_confirm', confirm); // Dismiss modal then hide loading

                    return _context4.abrupt("return", this.modalController.dismiss({
                      confirm: confirm
                    }));

                  case 9:
                  case "end":
                    return _context4.stop();
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "cancel",
          value: function cancel() {
            return this.modalController.dismiss();
          }
        }, {
          key: "loadDummyData",
          value: function loadDummyData() {
            this.listOption1 = {
              vehinfo: '2020 Toyota Camry L4-2.5L (A25A-FKS) ',
              field: 'Select Option 1',
              options: ['TMMK Product', 'Others']
            }.options;
          }
        }, {
          key: "viewMoreInfo",
          value: function viewMoreInfo() {
            this.logger.debug('viewMoreInfo');
          }
        }, {
          key: "getDataFromModal",
          value: function getDataFromModal(modalOptions) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
              var modal;
              return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                while (1) switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.modalController.create(modalOptions);

                  case 2:
                    modal = _context5.sent;
                    _context5.next = 5;
                    return this.helper.hideLoading();

                  case 5:
                    modal.present().then(function () {});
                    return _context5.abrupt("return", modal.onDidDismiss());

                  case 7:
                  case "end":
                    return _context5.stop();
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "getListOption",
          value: function getListOption(option) {
            var options = [];

            switch (option) {
              case 1:
                options = this.listOption1;
                break;

              case 2:
                options = this.listOption2;
                break;

              case 3:
                options = this.listOption3;
                break;
            }

            var result = [];
            options.forEach(function (item) {
              var option = src_app_models_app_constant__WEBPACK_IMPORTED_MODULE_2__.OptionDescription.Toyota.find(function (d) {
                return d.option === item;
              });

              if (option) {
                result.push(new src_app_models_app_model__WEBPACK_IMPORTED_MODULE_3__.OptionInformationModel(option.option, option.description, option.image, true));
              } else {
                result.push(new src_app_models_app_model__WEBPACK_IMPORTED_MODULE_3__.OptionInformationModel(item));
              }
            });
            return result;
          }
        }, {
          key: "viewOptions",
          value: function viewOptions(option) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
              return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                while (1) switch (_context6.prev = _context6.next) {
                  case 0:
                    this.options = this.getListOption(option);
                    _context6.t0 = option;
                    _context6.next = _context6.t0 === 1 ? 4 : _context6.t0 === 2 ? 7 : _context6.t0 === 3 ? 10 : 13;
                    break;

                  case 4:
                    this.viewingOption1 = !this.viewingOption1;
                    this.viewingOption2 = this.viewingOption3 = false;
                    return _context6.abrupt("break", 13);

                  case 7:
                    this.viewingOption2 = !this.viewingOption2;
                    this.viewingOption1 = this.viewingOption3 = false;
                    return _context6.abrupt("break", 13);

                  case 10:
                    this.viewingOption3 = !this.viewingOption3;
                    this.viewingOption1 = this.viewingOption2 = false;
                    return _context6.abrupt("break", 13);

                  case 13:
                  case "end":
                    return _context6.stop();
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "selectOption",
          value: function selectOption(index, option) {
            var _this3 = this;

            this.logger.debug('selectOption', index, option);
            var ctx = this;
            setTimeout(function () {
              return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(_this3, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
                var _this4 = this;

                return _regeneratorRuntime().wrap(function _callee8$(_context8) {
                  while (1) switch (_context8.prev = _context8.next) {
                    case 0:
                      if (!ctx.isViewingDetails) {
                        ctx.ngZone.run(function () {
                          return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(_this4, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
                            var field;
                            return _regeneratorRuntime().wrap(function _callee7$(_context7) {
                              while (1) switch (_context7.prev = _context7.next) {
                                case 0:
                                  ctx.logger.debug('!this.isViewingDetails', index, option);
                                  field = '';

                                  if (ctx.viewingOption1) {
                                    ctx.viewingOption1 = false;
                                    ctx.option1 = option === null || option === void 0 ? void 0 : option.option;
                                    field = SELECT_OPTION_1;

                                    if (!src_app_services_state_app_state__WEBPACK_IMPORTED_MODULE_4__.AppState.isOnDevice) {
                                      this.listOption2 = {
                                        vehinfo: '2015 Toyota Camry L4-2.5L (2AR-FE) ',
                                        field: 'Select Option 2',
                                        options: ['w/ Smart Key', 'w/o Smart Key']
                                      }.options;
                                    }
                                  } else if (ctx.viewingOption2) {
                                    ctx.viewingOption2 = false;
                                    ctx.option2 = option === null || option === void 0 ? void 0 : option.option;
                                    field = SELECT_OPTION_2;

                                    if (!src_app_services_state_app_state__WEBPACK_IMPORTED_MODULE_4__.AppState.isOnDevice) {
                                      this.listOption3 = {
                                        vehinfo: '2015 Toyota Camry L4-2.5L (2AR-FE) ',
                                        field: 'Select Option 3',
                                        options: ['RADAR CRUISE', 'Others']
                                      }.options;
                                    }
                                  } else if (ctx.viewingOption3) {
                                    ctx.viewingOption3 = false;
                                    ctx.option3 = option === null || option === void 0 ? void 0 : option.option;
                                    field = SELECT_OPTION_3;
                                  }

                                  if (!src_app_services_state_app_state__WEBPACK_IMPORTED_MODULE_4__.AppState.isOnDevice) {
                                    _context7.next = 6;
                                    break;
                                  }

                                  _context7.next = 6;
                                  return ctx.loadFieldData(index, field);

                                case 6:
                                case "end":
                                  return _context7.stop();
                              }
                            }, _callee7, this);
                          }));
                        });
                      }

                    case 1:
                    case "end":
                      return _context8.stop();
                  }
                }, _callee8);
              }));
            }, 10);
          }
        }, {
          key: "viewOption",
          value: function viewOption(option) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
              var _yield$this$getDataFr, data;

              return _regeneratorRuntime().wrap(function _callee9$(_context9) {
                while (1) switch (_context9.prev = _context9.next) {
                  case 0:
                    this.isViewingDetails = true;
                    _context9.next = 3;
                    return this.getDataFromModal({
                      component: _option_information_modal_option_information_modal_page__WEBPACK_IMPORTED_MODULE_5__.OptionInformationModalPage,
                      componentProps: {
                        optionInformation: option
                      },
                      showBackdrop: true,
                      backdropDismiss: true,
                      cssClass: 'app-modal-dialog custom-modal'
                    });

                  case 3:
                    _yield$this$getDataFr = _context9.sent;
                    data = _yield$this$getDataFr.data;
                    this.isViewingDetails = false;
                    return _context9.abrupt("return", data && data.confirm);

                  case 7:
                  case "end":
                    return _context9.stop();
                }
              }, _callee9, this);
            }));
          }
        }]);
      }(src_app_bases_base_controller__WEBPACK_IMPORTED_MODULE_0__.BaseController);

      _VehicleSelectionPage_emptyRespCnt = new WeakMap();

      _VehicleSelectionPage.ɵfac = function VehicleSelectionPage_Factory(t) {
        return new (t || _VehicleSelectionPage)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_6__.HelperService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_innova_vci_service__WEBPACK_IMPORTED_MODULE_7__.InnovaVCIService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgZone));
      };

      _VehicleSelectionPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
        type: _VehicleSelectionPage,
        selectors: [["app-vehicle-selection"]],
        inputs: {
          ymme: "ymme"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]],
        decls: 38,
        vars: 25,
        consts: [[1, "ion-no-border"], ["mode", "md", 4, "ngIf"], ["mode", "ios", 4, "ngIf"], ["scroll-y", "false"], [1, "app-sp-font-12"], ["size", "6"], ["placeholder", "Year", "readonly", "", 1, "app-input", "font-size-18", 3, "value"], ["placeholder", "Make", "readonly", "", 1, "app-input", "font-size-18", 3, "value"], ["placeholder", "Model", "readonly", "", 1, "app-input", "font-size-18", 3, "value"], ["placeholder", "Engine", "readonly", "", 1, "app-input", "font-size-18", 3, "value"], ["size", "12", 3, "hidden"], ["placeholder", "Option 1", "readonly", "", 1, "app-input", "font-size-18", "app-input-arrow", 3, "ngModel", "ngModelChange", "click"], ["name", "caret-down-sharp", 1, "font-size-22", "text-03", 3, "hidden"], ["name", "caret-up-sharp", 1, "font-size-22", "text-03", 3, "hidden"], ["style", "margin: 0", 4, "ngIf"], ["placeholder", "Option 2", "readonly", "", 1, "app-input", "font-size-18", "app-input-arrow", 3, "ngModel", "click", "ngModelChange"], ["placeholder", "Option 3", "readonly", "", 1, "app-input", "font-size-18", "app-input-arrow", 3, "ngModel", "click", "ngModelChange"], [1, "ion-no-border", "p-2"], [1, "py-1"], [1, "text-center"], [1, "app-button", 3, "disabled", "click"], ["mode", "md"], ["mode", "ios"], [2, "margin", "0"], [1, "app-vehicle-select-list"], [3, "click", 4, "ngFor", "ngForOf"], [3, "click"], [4, "ngIf"], [1, "text-black", 3, "click"], ["name", "information-circle-outline"]],
        template: function VehicleSelectionPage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, VehicleSelectionPage_ion_toolbar_1_Template, 3, 0, "ion-toolbar", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, VehicleSelectionPage_ion_toolbar_2_Template, 3, 0, "ion-toolbar", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "ion-content", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "ion-grid");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "ion-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "ion-col", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](8, "ion-input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "ion-col", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](10, "ion-input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "ion-col", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](12, "ion-input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "ion-col", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](14, "ion-input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "ion-col", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "ion-input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function VehicleSelectionPage_Template_ion_input_ngModelChange_16_listener($event) {
              return ctx.option1 = $event;
            })("click", function VehicleSelectionPage_Template_ion_input_click_16_listener() {
              return ctx.viewOptions(1);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](17, "ion-icon", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](18, "ion-icon", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "ion-col", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](20, VehicleSelectionPage_ion_card_20_Template, 4, 1, "ion-card", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "ion-col", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "ion-input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function VehicleSelectionPage_Template_ion_input_click_22_listener() {
              return ctx.viewOptions(2);
            })("ngModelChange", function VehicleSelectionPage_Template_ion_input_ngModelChange_22_listener($event) {
              return ctx.option2 = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](23, "ion-icon", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](24, "ion-icon", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "ion-col", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](26, VehicleSelectionPage_ion_card_26_Template, 4, 1, "ion-card", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "ion-col", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "ion-input", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function VehicleSelectionPage_Template_ion_input_click_28_listener() {
              return ctx.viewOptions(3);
            })("ngModelChange", function VehicleSelectionPage_Template_ion_input_ngModelChange_28_listener($event) {
              return ctx.option3 = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](29, "ion-icon", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](30, "ion-icon", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "ion-col", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](32, VehicleSelectionPage_ion_card_32_Template, 4, 1, "ion-card", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](33, "ion-footer", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "ion-toolbar", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](35, "p", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](36, "ion-button", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function VehicleSelectionPage_Template_ion_button_click_36_listener() {
              return ctx.submit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](37, "Continue");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.isAndroid);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.isAndroid);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("value", ctx.ymme == null ? null : ctx.ymme.year);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("value", ctx.ymme == null ? null : ctx.ymme.make);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("value", ctx.ymme == null ? null : ctx.ymme.model);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("value", ctx.ymme == null ? null : ctx.ymme.engine);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("hidden", !(ctx.listOption1 && ctx.listOption1.length));

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.option1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("hidden", ctx.viewingOption1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("hidden", !ctx.viewingOption1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("hidden", !ctx.viewingOption1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.options);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("hidden", !(ctx.listOption2 && ctx.listOption2.length));

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.option2);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("hidden", ctx.viewingOption2);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("hidden", !ctx.viewingOption2);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("hidden", !ctx.viewingOption2);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.options);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("hidden", !(ctx.listOption3 && ctx.listOption3.length));

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.option3);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("hidden", ctx.viewingOption3);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("hidden", !ctx.viewingOption3);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("hidden", !ctx.viewingOption3);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.options);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", !ctx.couldSubmit);
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonHeader, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.TextValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonFooter, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonCardContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonList, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonButtons],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2ZWhpY2xlLXNlbGVjdGlvbi5wYWdlLnNjc3MifQ== */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=default-src_app_modals_vehicle-selection_vehicle-selection_page_ts-es5.js.map