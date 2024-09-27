(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkcom_carmd_proscan2"] = self["webpackChunkcom_carmd_proscan2"] || []).push([["default-src_app_bases_base-controller_ts-src_app_services_innova-vci-service_src_connectivity-e7a189"], {
    /***/
    4155:
    /*!*********************************************************************!*\
      !*** ./node_modules/util/node_modules/inherits/inherits_browser.js ***!
      \*********************************************************************/

    /***/
    function _(module) {
      if (typeof Object.create === 'function') {
        // implementation from standard node.js 'util' module
        module.exports = function inherits(ctor, superCtor) {
          ctor.super_ = superCtor;
          ctor.prototype = Object.create(superCtor.prototype, {
            constructor: {
              value: ctor,
              enumerable: false,
              writable: true,
              configurable: true
            }
          });
        };
      } else {
        // old school shim for old browsers
        module.exports = function inherits(ctor, superCtor) {
          ctor.super_ = superCtor;

          var TempCtor = function TempCtor() {};

          TempCtor.prototype = superCtor.prototype;
          ctor.prototype = new TempCtor();
          ctor.prototype.constructor = ctor;
        };
      }
      /***/

    },

    /***/
    59720:
    /*!******************************************************!*\
      !*** ./node_modules/util/support/isBufferBrowser.js ***!
      \******************************************************/

    /***/
    function _(module) {
      module.exports = function isBuffer(arg) {
        return arg && typeof arg === 'object' && typeof arg.copy === 'function' && typeof arg.fill === 'function' && typeof arg.readUInt8 === 'function';
      };
      /***/

    },

    /***/
    94655:
    /*!***********************************!*\
      !*** ./node_modules/util/util.js ***!
      \***********************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      // Copyright Joyent, Inc. and other Node contributors.
      //
      // Permission is hereby granted, free of charge, to any person obtaining a
      // copy of this software and associated documentation files (the
      // "Software"), to deal in the Software without restriction, including
      // without limitation the rights to use, copy, modify, merge, publish,
      // distribute, sublicense, and/or sell copies of the Software, and to permit
      // persons to whom the Software is furnished to do so, subject to the
      // following conditions:
      //
      // The above copyright notice and this permission notice shall be included
      // in all copies or substantial portions of the Software.
      //
      // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
      // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
      // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
      // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
      // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
      // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
      // USE OR OTHER DEALINGS IN THE SOFTWARE.
      var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors || function getOwnPropertyDescriptors(obj) {
        var keys = Object.keys(obj);
        var descriptors = {};

        for (var i = 0; i < keys.length; i++) {
          descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
        }

        return descriptors;
      };

      var formatRegExp = /%[sdj%]/g;

      exports.format = function (f) {
        if (!isString(f)) {
          var objects = [];

          for (var i = 0; i < arguments.length; i++) {
            objects.push(inspect(arguments[i]));
          }

          return objects.join(' ');
        }

        var i = 1;
        var args = arguments;
        var len = args.length;
        var str = String(f).replace(formatRegExp, function (x) {
          if (x === '%%') return '%';
          if (i >= len) return x;

          switch (x) {
            case '%s':
              return String(args[i++]);

            case '%d':
              return Number(args[i++]);

            case '%j':
              try {
                return JSON.stringify(args[i++]);
              } catch (_) {
                return '[Circular]';
              }

            default:
              return x;
          }
        });

        for (var x = args[i]; i < len; x = args[++i]) {
          if (isNull(x) || !isObject(x)) {
            str += ' ' + x;
          } else {
            str += ' ' + inspect(x);
          }
        }

        return str;
      }; // Mark that a method should not be used.
      // Returns a modified function which warns once by default.
      // If --no-deprecation is set, then it is a no-op.


      exports.deprecate = function (fn, msg) {
        if (typeof process !== 'undefined' && process.noDeprecation === true) {
          return fn;
        } // Allow for deprecating things in the process of starting up.


        if (typeof process === 'undefined') {
          return function () {
            return exports.deprecate(fn, msg).apply(this, arguments);
          };
        }

        var warned = false;

        function deprecated() {
          if (!warned) {
            if (process.throwDeprecation) {
              throw new Error(msg);
            } else if (process.traceDeprecation) {
              console.trace(msg);
            } else {
              console.error(msg);
            }

            warned = true;
          }

          return fn.apply(this, arguments);
        }

        return deprecated;
      };

      var debugs = {};
      var debugEnviron;

      exports.debuglog = function (set) {
        if (isUndefined(debugEnviron)) debugEnviron = process.env.NODE_DEBUG || '';
        set = set.toUpperCase();

        if (!debugs[set]) {
          if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
            var pid = process.pid;

            debugs[set] = function () {
              var msg = exports.format.apply(exports, arguments);
              console.error('%s %d: %s', set, pid, msg);
            };
          } else {
            debugs[set] = function () {};
          }
        }

        return debugs[set];
      };
      /**
       * Echos the value of a value. Trys to print the value out
       * in the best way possible given the different types.
       *
       * @param {Object} obj The object to print out.
       * @param {Object} opts Optional options object that alters the output.
       */

      /* legacy: obj, showHidden, depth, colors*/


      function inspect(obj, opts) {
        // default options
        var ctx = {
          seen: [],
          stylize: stylizeNoColor
        }; // legacy...

        if (arguments.length >= 3) ctx.depth = arguments[2];
        if (arguments.length >= 4) ctx.colors = arguments[3];

        if (isBoolean(opts)) {
          // legacy...
          ctx.showHidden = opts;
        } else if (opts) {
          // got an "options" object
          exports._extend(ctx, opts);
        } // set default options


        if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
        if (isUndefined(ctx.depth)) ctx.depth = 2;
        if (isUndefined(ctx.colors)) ctx.colors = false;
        if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
        if (ctx.colors) ctx.stylize = stylizeWithColor;
        return formatValue(ctx, obj, ctx.depth);
      }

      exports.inspect = inspect; // http://en.wikipedia.org/wiki/ANSI_escape_code#graphics

      inspect.colors = {
        'bold': [1, 22],
        'italic': [3, 23],
        'underline': [4, 24],
        'inverse': [7, 27],
        'white': [37, 39],
        'grey': [90, 39],
        'black': [30, 39],
        'blue': [34, 39],
        'cyan': [36, 39],
        'green': [32, 39],
        'magenta': [35, 39],
        'red': [31, 39],
        'yellow': [33, 39]
      }; // Don't use 'blue' not visible on cmd.exe

      inspect.styles = {
        'special': 'cyan',
        'number': 'yellow',
        'boolean': 'yellow',
        'undefined': 'grey',
        'null': 'bold',
        'string': 'green',
        'date': 'magenta',
        // "name": intentionally not styling
        'regexp': 'red'
      };

      function stylizeWithColor(str, styleType) {
        var style = inspect.styles[styleType];

        if (style) {
          return "\x1B[" + inspect.colors[style][0] + 'm' + str + "\x1B[" + inspect.colors[style][1] + 'm';
        } else {
          return str;
        }
      }

      function stylizeNoColor(str, styleType) {
        return str;
      }

      function arrayToHash(array) {
        var hash = {};
        array.forEach(function (val, idx) {
          hash[val] = true;
        });
        return hash;
      }

      function formatValue(ctx, value, recurseTimes) {
        // Provide a hook for user-specified inspect functions.
        // Check that value is an object with an inspect function on it
        if (ctx.customInspect && value && isFunction(value.inspect) && // Filter out the util module, it's inspect function is special
        value.inspect !== exports.inspect && // Also filter out any prototype objects using the circular check.
        !(value.constructor && value.constructor.prototype === value)) {
          var ret = value.inspect(recurseTimes, ctx);

          if (!isString(ret)) {
            ret = formatValue(ctx, ret, recurseTimes);
          }

          return ret;
        } // Primitive types cannot have properties


        var primitive = formatPrimitive(ctx, value);

        if (primitive) {
          return primitive;
        } // Look up the keys of the object.


        var keys = Object.keys(value);
        var visibleKeys = arrayToHash(keys);

        if (ctx.showHidden) {
          keys = Object.getOwnPropertyNames(value);
        } // IE doesn't make error fields non-enumerable
        // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx


        if (isError(value) && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
          return formatError(value);
        } // Some type of object without properties can be shortcutted.


        if (keys.length === 0) {
          if (isFunction(value)) {
            var name = value.name ? ': ' + value.name : '';
            return ctx.stylize('[Function' + name + ']', 'special');
          }

          if (isRegExp(value)) {
            return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
          }

          if (isDate(value)) {
            return ctx.stylize(Date.prototype.toString.call(value), 'date');
          }

          if (isError(value)) {
            return formatError(value);
          }
        }

        var base = '',
            array = false,
            braces = ['{', '}']; // Make Array say that they are Array

        if (isArray(value)) {
          array = true;
          braces = ['[', ']'];
        } // Make functions say that they are functions


        if (isFunction(value)) {
          var n = value.name ? ': ' + value.name : '';
          base = ' [Function' + n + ']';
        } // Make RegExps say that they are RegExps


        if (isRegExp(value)) {
          base = ' ' + RegExp.prototype.toString.call(value);
        } // Make dates with properties first say the date


        if (isDate(value)) {
          base = ' ' + Date.prototype.toUTCString.call(value);
        } // Make error with message first say the error


        if (isError(value)) {
          base = ' ' + formatError(value);
        }

        if (keys.length === 0 && (!array || value.length == 0)) {
          return braces[0] + base + braces[1];
        }

        if (recurseTimes < 0) {
          if (isRegExp(value)) {
            return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
          } else {
            return ctx.stylize('[Object]', 'special');
          }
        }

        ctx.seen.push(value);
        var output;

        if (array) {
          output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
        } else {
          output = keys.map(function (key) {
            return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
          });
        }

        ctx.seen.pop();
        return reduceToSingleString(output, base, braces);
      }

      function formatPrimitive(ctx, value) {
        if (isUndefined(value)) return ctx.stylize('undefined', 'undefined');

        if (isString(value)) {
          var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '').replace(/'/g, "\\'").replace(/\\"/g, '"') + '\'';
          return ctx.stylize(simple, 'string');
        }

        if (isNumber(value)) return ctx.stylize('' + value, 'number');
        if (isBoolean(value)) return ctx.stylize('' + value, 'boolean'); // For some reason typeof null is "object", so special case here.

        if (isNull(value)) return ctx.stylize('null', 'null');
      }

      function formatError(value) {
        return '[' + Error.prototype.toString.call(value) + ']';
      }

      function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
        var output = [];

        for (var i = 0, l = value.length; i < l; ++i) {
          if (hasOwnProperty(value, String(i))) {
            output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, String(i), true));
          } else {
            output.push('');
          }
        }

        keys.forEach(function (key) {
          if (!key.match(/^\d+$/)) {
            output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, key, true));
          }
        });
        return output;
      }

      function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
        var name, str, desc;
        desc = Object.getOwnPropertyDescriptor(value, key) || {
          value: value[key]
        };

        if (desc.get) {
          if (desc.set) {
            str = ctx.stylize('[Getter/Setter]', 'special');
          } else {
            str = ctx.stylize('[Getter]', 'special');
          }
        } else {
          if (desc.set) {
            str = ctx.stylize('[Setter]', 'special');
          }
        }

        if (!hasOwnProperty(visibleKeys, key)) {
          name = '[' + key + ']';
        }

        if (!str) {
          if (ctx.seen.indexOf(desc.value) < 0) {
            if (isNull(recurseTimes)) {
              str = formatValue(ctx, desc.value, null);
            } else {
              str = formatValue(ctx, desc.value, recurseTimes - 1);
            }

            if (str.indexOf('\n') > -1) {
              if (array) {
                str = str.split('\n').map(function (line) {
                  return '  ' + line;
                }).join('\n').substr(2);
              } else {
                str = '\n' + str.split('\n').map(function (line) {
                  return '   ' + line;
                }).join('\n');
              }
            }
          } else {
            str = ctx.stylize('[Circular]', 'special');
          }
        }

        if (isUndefined(name)) {
          if (array && key.match(/^\d+$/)) {
            return str;
          }

          name = JSON.stringify('' + key);

          if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
            name = name.substr(1, name.length - 2);
            name = ctx.stylize(name, 'name');
          } else {
            name = name.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
            name = ctx.stylize(name, 'string');
          }
        }

        return name + ': ' + str;
      }

      function reduceToSingleString(output, base, braces) {
        var numLinesEst = 0;
        var length = output.reduce(function (prev, cur) {
          numLinesEst++;
          if (cur.indexOf('\n') >= 0) numLinesEst++;
          return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
        }, 0);

        if (length > 60) {
          return braces[0] + (base === '' ? '' : base + '\n ') + ' ' + output.join(',\n  ') + ' ' + braces[1];
        }

        return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
      } // NOTE: These type checking functions intentionally don't use `instanceof`
      // because it is fragile and can be easily faked with `Object.create()`.


      function isArray(ar) {
        return Array.isArray(ar);
      }

      exports.isArray = isArray;

      function isBoolean(arg) {
        return typeof arg === 'boolean';
      }

      exports.isBoolean = isBoolean;

      function isNull(arg) {
        return arg === null;
      }

      exports.isNull = isNull;

      function isNullOrUndefined(arg) {
        return arg == null;
      }

      exports.isNullOrUndefined = isNullOrUndefined;

      function isNumber(arg) {
        return typeof arg === 'number';
      }

      exports.isNumber = isNumber;

      function isString(arg) {
        return typeof arg === 'string';
      }

      exports.isString = isString;

      function isSymbol(arg) {
        return typeof arg === 'symbol';
      }

      exports.isSymbol = isSymbol;

      function isUndefined(arg) {
        return arg === void 0;
      }

      exports.isUndefined = isUndefined;

      function isRegExp(re) {
        return isObject(re) && objectToString(re) === '[object RegExp]';
      }

      exports.isRegExp = isRegExp;

      function isObject(arg) {
        return typeof arg === 'object' && arg !== null;
      }

      exports.isObject = isObject;

      function isDate(d) {
        return isObject(d) && objectToString(d) === '[object Date]';
      }

      exports.isDate = isDate;

      function isError(e) {
        return isObject(e) && (objectToString(e) === '[object Error]' || e instanceof Error);
      }

      exports.isError = isError;

      function isFunction(arg) {
        return typeof arg === 'function';
      }

      exports.isFunction = isFunction;

      function isPrimitive(arg) {
        return arg === null || typeof arg === 'boolean' || typeof arg === 'number' || typeof arg === 'string' || typeof arg === 'symbol' || // ES6 symbol
        typeof arg === 'undefined';
      }

      exports.isPrimitive = isPrimitive;
      exports.isBuffer = __webpack_require__(
      /*! ./support/isBuffer */
      59720);

      function objectToString(o) {
        return Object.prototype.toString.call(o);
      }

      function pad(n) {
        return n < 10 ? '0' + n.toString(10) : n.toString(10);
      }

      var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']; // 26 Feb 16:19:34

      function timestamp() {
        var d = new Date();
        var time = [pad(d.getHours()), pad(d.getMinutes()), pad(d.getSeconds())].join(':');
        return [d.getDate(), months[d.getMonth()], time].join(' ');
      } // log is just a thin wrapper to console.log that prepends a timestamp


      exports.log = function () {
        console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
      };
      /**
       * Inherit the prototype methods from one constructor into another.
       *
       * The Function.prototype.inherits from lang.js rewritten as a standalone
       * function (not on Function.prototype). NOTE: If this file is to be loaded
       * during bootstrapping this function needs to be rewritten using some native
       * functions as prototype setup using normal JavaScript does not work as
       * expected during bootstrapping (see mirror.js in r114903).
       *
       * @param {function} ctor Constructor function which needs to inherit the
       *     prototype.
       * @param {function} superCtor Constructor function to inherit prototype from.
       */


      exports.inherits = __webpack_require__(
      /*! inherits */
      4155);

      exports._extend = function (origin, add) {
        // Don't do anything if add isn't an object
        if (!add || !isObject(add)) return origin;
        var keys = Object.keys(add);
        var i = keys.length;

        while (i--) {
          origin[keys[i]] = add[keys[i]];
        }

        return origin;
      };

      function hasOwnProperty(obj, prop) {
        return Object.prototype.hasOwnProperty.call(obj, prop);
      }

      var kCustomPromisifiedSymbol = typeof Symbol !== 'undefined' ? Symbol('util.promisify.custom') : undefined;

      exports.promisify = function promisify(original) {
        if (typeof original !== 'function') throw new TypeError('The "original" argument must be of type Function');

        if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {
          var fn = original[kCustomPromisifiedSymbol];

          if (typeof fn !== 'function') {
            throw new TypeError('The "util.promisify.custom" argument must be of type Function');
          }

          Object.defineProperty(fn, kCustomPromisifiedSymbol, {
            value: fn,
            enumerable: false,
            writable: false,
            configurable: true
          });
          return fn;
        }

        function fn() {
          var promiseResolve, promiseReject;
          var promise = new Promise(function (resolve, reject) {
            promiseResolve = resolve;
            promiseReject = reject;
          });
          var args = [];

          for (var i = 0; i < arguments.length; i++) {
            args.push(arguments[i]);
          }

          args.push(function (err, value) {
            if (err) {
              promiseReject(err);
            } else {
              promiseResolve(value);
            }
          });

          try {
            original.apply(this, args);
          } catch (err) {
            promiseReject(err);
          }

          return promise;
        }

        Object.setPrototypeOf(fn, Object.getPrototypeOf(original));
        if (kCustomPromisifiedSymbol) Object.defineProperty(fn, kCustomPromisifiedSymbol, {
          value: fn,
          enumerable: false,
          writable: false,
          configurable: true
        });
        return Object.defineProperties(fn, getOwnPropertyDescriptors(original));
      };

      exports.promisify.custom = kCustomPromisifiedSymbol;

      function callbackifyOnRejected(reason, cb) {
        // `!reason` guard inspired by bluebird (Ref: https://goo.gl/t5IS6M).
        // Because `null` is a special error value in callbacks which means "no error
        // occurred", we error-wrap so the callback consumer can distinguish between
        // "the promise rejected with null" or "the promise fulfilled with undefined".
        if (!reason) {
          var newReason = new Error('Promise was rejected with a falsy value');
          newReason.reason = reason;
          reason = newReason;
        }

        return cb(reason);
      }

      function callbackify(original) {
        if (typeof original !== 'function') {
          throw new TypeError('The "original" argument must be of type Function');
        } // We DO NOT return the promise as it gives the user a false sense that
        // the promise is actually somehow related to the callback's execution
        // and that the callback throwing will reject the promise.


        function callbackified() {
          var args = [];

          for (var i = 0; i < arguments.length; i++) {
            args.push(arguments[i]);
          }

          var maybeCb = args.pop();

          if (typeof maybeCb !== 'function') {
            throw new TypeError('The last argument must be of type Function');
          }

          var self = this;

          var cb = function cb() {
            return maybeCb.apply(self, arguments);
          }; // In true node style we process the callback on `nextTick` with all the
          // implications (stack, `uncaughtException`, `async_hooks`)


          original.apply(this, args).then(function (ret) {
            process.nextTick(cb, null, ret);
          }, function (rej) {
            process.nextTick(callbackifyOnRejected, rej, cb);
          });
        }

        Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
        Object.defineProperties(callbackified, getOwnPropertyDescriptors(original));
        return callbackified;
      }

      exports.callbackify = callbackify;
      /***/
    },

    /***/
    38790:
    /*!******************************************!*\
      !*** ./src/app/bases/base-controller.ts ***!
      \******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

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
    27555:
    /*!**************************************************************************************!*\
      !*** ./src/app/services/innova-vci-service/src/connectivity/connectivity.service.ts ***!
      \**************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ConnectivityService": function ConnectivityService() {
          return (
            /* binding */
            _ConnectivityService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! tslib */
      42321);
      /* harmony import */


      var _standard_enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../standard/enums */
      13930);
      /* harmony import */


      var _utilities_dataParser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../utilities/dataParser */
      81402);
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


      var src_app_services_state_app_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/state/app.state */
      12607);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _utilities_notify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../utilities/notify.service */
      46607);
      /* harmony import */


      var _ionic_native_bluetooth_serial_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/bluetooth-serial/ngx */
      83962);
      /* harmony import */


      var src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/helper.service */
      22486);
      /* harmony import */


      var _ionic_native_ble_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic-native/ble/ngx */
      11695);

      var _ConnectivityService = /*#__PURE__*/function () {
        function _ConnectivityService(logger, ble_serial, helper, ble) {
          _classCallCheck(this, _ConnectivityService);

          this.logger = logger;
          this.ble_serial = ble_serial;
          this.helper = helper;
          this.ble = ble;
          this.com_serial = null;
          this.cbbluetooth = null;
          this.Productid = '0';
          this.isOpenPort = false;
          this.Productid = '0';
          this.com_serial = ble_serial;
        }

        return _createClass(_ConnectivityService, [{
          key: "blIsCheckOpenPort",
          value: function blIsCheckOpenPort() {
            return this.isOpenPort;
          }
        }, {
          key: "getSerialType",
          value: function getSerialType() {
            return this.serial_type;
          }
        }, {
          key: "initialize",
          value: function initialize() {
            var cbdatahandler = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            var type = arguments.length > 1 ? arguments[1] : undefined;
            return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var com_serial;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    _context.prev = 0;
                    com_serial = this.ble_serial;
                    this.com_serial = com_serial;
                    this.serial_type = type;
                    return _context.abrupt("return", true);

                  case 7:
                    _context.prev = 7;
                    _context.t0 = _context["catch"](0);
                    this.com_serial = null;
                    this.logger.log(_context.t0);

                  case 11:
                    return _context.abrupt("return", false);

                  case 12:
                  case "end":
                    return _context.stop();
                }
              }, _callee, this, [[0, 7]]);
            }));
          }
          /**
           * interrupt device connection (soft)
           */

        }, {
          key: "cancel_process",
          value: function cancel_process() {
            this.logger.log('cancel_process');
            this.isDevConnected = false;
          }
          /**
           * interrupt device connection (soft)
           */

        }, {
          key: "resume_process",
          value: function resume_process() {
            this.logger.log('resume_process');
            this.isDevConnected = true;
          }
        }, {
          key: "connectBlueToothDevice",
          value: function connectBlueToothDevice(add) {
            var cbdatahandler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            var cbresult = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
            return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
              var _this = this;

              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) switch (_context3.prev = _context3.next) {
                  case 0:
                    if (!src_app_services_state_app_state__WEBPACK_IMPORTED_MODULE_4__.AppState.isOnAndroid) {
                      _context3.next = 6;
                      break;
                    }

                    _context3.next = 3;
                    return this.ble_serial.connectInsecure(add).subscribe(function (success) {
                      _this.logger.log("[BT] Device connect successfully ".concat(add));

                      _this.isDevConnected = true;
                      _this.com_serial = _this.ble_serial;
                      _this.watchResponse && _this.watchResponse.unsubscribe();
                      _this.watchResponse = _this.com_serial.subscribeRawData().subscribe(function (data) {
                        var datau8array = new Uint8Array(data).map(function (xx) {
                          return xx;
                        });

                        _this.logger.logComRx(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_1__.bytesToHexString(datau8array));

                        cbdatahandler && cbdatahandler(datau8array);
                      });
                      cbresult && cbresult(true);
                    }, function (error) {
                      return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(_this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
                        var _this2 = this;

                        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                          while (1) switch (_context2.prev = _context2.next) {
                            case 0:
                              this.logger.log("[BT] Device connect unsuccessfully ".concat(add, ": ").concat(error));
                              _context2.next = 3;
                              return this.helper.sleep(3000);

                            case 3:
                              _context2.next = 5;
                              return this.ble_serial.connectInsecure(add).subscribe(function (success) {
                                _this2.logger.log("[BT] Device connect successfully ".concat(add));

                                _this2.isDevConnected = true;
                                _this2.com_serial = _this2.ble_serial;
                                _this2.watchResponse && _this2.watchResponse.unsubscribe();
                                _this2.watchResponse = _this2.com_serial.subscribeRawData().subscribe(function (data) {
                                  var datau8array = new Uint8Array(data).map(function (xx) {
                                    return xx;
                                  });

                                  _this2.logger.logComRx(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_1__.bytesToHexString(datau8array));

                                  cbdatahandler && cbdatahandler(datau8array);
                                });
                                cbresult && cbresult(true);
                              }, function (err) {
                                cbresult && cbresult(false);
                              });

                            case 5:
                            case "end":
                              return _context2.stop();
                          }
                        }, _callee2, this);
                      }));
                    });

                  case 3:
                    return _context3.abrupt("return", _context3.sent);

                  case 6:
                    _context3.next = 8;
                    return this.ble_serial.connect(add).subscribe(function (success) {
                      _this.logger.log("[BT] Device connect successfully ".concat(add));

                      _this.isDevConnected = true;
                      _this.com_serial = _this.ble_serial;
                      _this.watchResponse && _this.watchResponse.unsubscribe();
                      _this.watchResponse = _this.com_serial.subscribeRawData().subscribe(function (data) {
                        var datau8array = new Uint8Array(data).map(function (xx) {
                          return xx;
                        });

                        _this.logger.logComRx(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_1__.bytesToHexString(datau8array));

                        cbdatahandler && cbdatahandler(datau8array);
                      });
                      cbresult && cbresult(true);
                    }, function (error) {
                      _this.logger.log("[BT] Device connect unsuccessfully ".concat(add, ": ").concat(error));

                      _this.com_serial = _this.ble_serial;
                      cbresult && cbresult(false);
                    });

                  case 8:
                    return _context3.abrupt("return", _context3.sent);

                  case 9:
                  case "end":
                    return _context3.stop();
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "BluetoothIsConnected",
          value: function BluetoothIsConnected() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
              var _this3 = this;

              return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                while (1) switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.ble_serial.isConnected().then(function (success) {
                      _this3.logger.log('Device Connected!!');

                      _this3.isDevConnected = true;
                    }, function (error) {
                      _this3.logger.log('Device is not Connected');

                      _this3.isDevConnected = false;
                    });

                  case 2:
                    return _context4.abrupt("return", this.isDevConnected);

                  case 3:
                  case "end":
                    return _context4.stop();
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "disconnectBluetoothDevices",
          value: function disconnectBluetoothDevices() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
              var _this4 = this;

              var isDisconnect;
              return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                while (1) switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.prev = 0;
                    _context5.next = 3;
                    return this.ble_serial.disconnect()["catch"](function () {
                      _this4.logger.log('[BT] Device disconnect unsuccessfully!');
                    });

                  case 3:
                    isDisconnect = _context5.sent;

                    if (!isDisconnect) {
                      this.logger.log('[BT] Device disconnect unsuccessfully!');
                    }

                    return _context5.abrupt("return", true);

                  case 8:
                    _context5.prev = 8;
                    _context5.t0 = _context5["catch"](0);
                    this.logger.log(_context5.t0);
                    return _context5.abrupt("return", this.isDevConnected);

                  case 12:
                  case "end":
                    return _context5.stop();
                }
              }, _callee5, this, [[0, 8]]);
            }));
          }
        }, {
          key: "listBonnedBluetoothDevices",
          value: function listBonnedBluetoothDevices() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
              var _this5 = this;

              var result;
              return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                while (1) switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.prev = 0;

                    if (!this.helper.isIOs()) {
                      _context6.next = 4;
                      break;
                    }

                    _context6.next = 8;
                    break;

                  case 4:
                    _context6.next = 6;
                    return this.ble.bondedDevices().then(function (list) {
                      console.log('list: ', list);

                      _this5.logger.log('device list: ' + list);

                      if (!(0, util__WEBPACK_IMPORTED_MODULE_3__.isNullOrUndefined)(list)) _this5.listBondeddev = list;
                    }, function (error) {
                      console.log('error: ', error);

                      _this5.logger.log('Bluetooth is not yet enabled'); //return null;

                    });

                  case 6:
                    result = _context6.sent;
                    console.log('result: ', result);

                  case 8:
                    return _context6.abrupt("return", this.listBondeddev);

                  case 11:
                    _context6.prev = 11;
                    _context6.t0 = _context6["catch"](0);
                    //alert(err)
                    this.logger.log(_context6.t0);

                  case 14:
                  case "end":
                    return _context6.stop();
                }
              }, _callee6, this, [[0, 11]]);
            }));
          }
        }, {
          key: "stopScan",
          value: function stopScan() {
            var _this6 = this;

            // if(this.serial_type ===  EnumSerialType.Bluetooth)
            // {
            setTimeout(function () {
              console.log('Call this.ble.stopScan');

              _this6.ble.stopScan();
            }, 500); // }
            // return null;
          }
        }, {
          key: "discoverBluetoothDevices2",
          value: function discoverBluetoothDevices2() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
              return _regeneratorRuntime().wrap(function _callee7$(_context7) {
                while (1) switch (_context7.prev = _context7.next) {
                  case 0:
                    return _context7.abrupt("return", this.ble_serial.list());

                  case 1:
                  case "end":
                    return _context7.stop();
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "listBluetoothDevices",
          value: function listBluetoothDevices() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
              var _this7 = this;

              return _regeneratorRuntime().wrap(function _callee8$(_context8) {
                while (1) switch (_context8.prev = _context8.next) {
                  case 0:
                    _context8.prev = 0;
                    _context8.next = 3;
                    return this.ble_serial.discoverUnpaired().then(function (list) {
                      if (!(0, util__WEBPACK_IMPORTED_MODULE_3__.isNullOrUndefined)(list)) _this7.listdev = list;

                      _this7.logger.log('device list: ' + list);
                    }, function (error) {
                      _this7.logger.log('Bluetooth is not yet enabled'); //return null;

                    });

                  case 3:
                    return _context8.abrupt("return", this.listdev);

                  case 6:
                    _context8.prev = 6;
                    _context8.t0 = _context8["catch"](0);
                    // alert(err)
                    this.logger.log(_context8.t0);

                  case 9:
                  case "end":
                    return _context8.stop();
                }
              }, _callee8, this, [[0, 6]]);
            }));
          }
        }, {
          key: "writeString",
          value: function writeString(data) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
              return _regeneratorRuntime().wrap(function _callee9$(_context9) {
                while (1) switch (_context9.prev = _context9.next) {
                  case 0:
                    _context9.prev = 0;

                    if (this.isOpenPort && this.isDevConnected) {
                      _context9.next = 3;
                      break;
                    }

                    return _context9.abrupt("return", -1);

                  case 3:
                    _context9.next = 5;
                    return this.com_serial.write(data);

                  case 5:
                    return _context9.abrupt("return", data.length);

                  case 8:
                    _context9.prev = 8;
                    _context9.t0 = _context9["catch"](0);
                    this.logger.log("writeString() ".concat(_context9.t0));
                    return _context9.abrupt("return", -2);

                  case 12:
                  case "end":
                    return _context9.stop();
                }
              }, _callee9, this, [[0, 8]]);
            }));
          } // modified by ngoclb

        }, {
          key: "__delayTimeGuard",
          value: function __delayTimeGuard() {
            var ms = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 50;
            return new Promise(function (resolve) {
              setTimeout(function () {
                return resolve(true);
              }, ms);
            });
          }
        }, {
          key: "writeHex",
          value: function writeHex(arraydata) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
              var _this8 = this;

              var _writeHex, chunkdatas;

              return _regeneratorRuntime().wrap(function _callee11$(_context11) {
                while (1) switch (_context11.prev = _context11.next) {
                  case 0:
                    _context11.prev = 0;

                    if (this.isDevConnected) {
                      _context11.next = 3;
                      break;
                    }

                    throw new Error('process was interrupted');

                  case 3:
                    _writeHex = function __writeHex(listdata) {
                      return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(_this8, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
                        var data, txdata;
                        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
                          while (1) switch (_context10.prev = _context10.next) {
                            case 0:
                              if (!lodash__WEBPACK_IMPORTED_MODULE_2__.isEmpty(listdata)) {
                                _context10.next = 2;
                                break;
                              }

                              return _context10.abrupt("return", true);

                            case 2:
                              data = listdata.shift();
                              txdata = _utilities_dataParser__WEBPACK_IMPORTED_MODULE_1__.bytesToHexString(data);
                              this.logger.logComTx("".concat(txdata, " [").concat(data.length, " bytes]"));

                              if (!(this.serial_type == _standard_enums__WEBPACK_IMPORTED_MODULE_0__.EnumSerialType.Serial_USB)) {
                                _context10.next = 14;
                                break;
                              }

                              if (!this.isOpenPort) {
                                _context10.next = 11;
                                break;
                              }

                              _context10.next = 9;
                              return this.com_serial.writeHex(txdata);

                            case 9:
                              _context10.next = 12;
                              break;

                            case 11:
                              throw new Error('Write on a closed port.');

                            case 12:
                              _context10.next = 16;
                              break;

                            case 14:
                              _context10.next = 16;
                              return this.com_serial.write(data);

                            case 16:
                              _context10.next = 18;
                              return _writeHex(listdata);

                            case 18:
                              return _context10.abrupt("return", _context10.sent);

                            case 19:
                            case "end":
                              return _context10.stop();
                          }
                        }, _callee10, this);
                      }));
                    };

                    chunkdatas = lodash__WEBPACK_IMPORTED_MODULE_2__.chunk(arraydata, 20);
                    _context11.next = 7;
                    return _writeHex(chunkdatas);

                  case 7:
                    return _context11.abrupt("return", true);

                  case 10:
                    _context11.prev = 10;
                    _context11.t0 = _context11["catch"](0);
                    throw new Error('[writeHex error] ' + _context11.t0);

                  case 13:
                  case "end":
                    return _context11.stop();
                }
              }, _callee11, this, [[0, 10]]);
            }));
          }
        }, {
          key: "CloseConnection",
          value: function CloseConnection() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee12() {
              return _regeneratorRuntime().wrap(function _callee12$(_context12) {
                while (1) switch (_context12.prev = _context12.next) {
                  case 0:
                    _context12.prev = 0;
                    this.logger.log('Close connection via bluetooth');
                    this.disconnectBluetoothDevices();
                    _context12.next = 9;
                    break;

                  case 5:
                    _context12.prev = 5;
                    _context12.t0 = _context12["catch"](0);
                    this.logger.log('Close Connection Error!!' + _context12.t0);
                    return _context12.abrupt("return", false);

                  case 9:
                  case "end":
                    return _context12.stop();
                }
              }, _callee12, this, [[0, 5]]);
            }));
          } // changed by ngoclb

        }, {
          key: "testWrite",
          value: function testWrite() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee13() {
              return _regeneratorRuntime().wrap(function _callee13$(_context13) {
                while (1) switch (_context13.prev = _context13.next) {
                  case 0:
                    _context13.prev = 0;
                    return _context13.abrupt("return", this.writeString('\r\n'));

                  case 4:
                    _context13.prev = 4;
                    _context13.t0 = _context13["catch"](0);
                    return _context13.abrupt("return", 0);

                  case 7:
                  case "end":
                    return _context13.stop();
                }
              }, _callee13, this, [[0, 4]]);
            }));
          }
        }, {
          key: "isPortOpen",
          get: function get() {
            return this.isOpenPort;
          }
        }, {
          key: "closePort",
          value: function closePort() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee14() {
              return _regeneratorRuntime().wrap(function _callee14$(_context14) {
                while (1) switch (_context14.prev = _context14.next) {
                  case 0:
                    this.watchResponse && this.watchResponse.unsubscribe();
                    this.isOpenPort = false;
                    this.isDevConnected = false;
                    return _context14.abrupt("return", true);

                  case 4:
                  case "end":
                    return _context14.stop();
                }
              }, _callee14, this);
            }));
          }
        }]);
      }();

      _ConnectivityService.ɵfac = function ConnectivityService_Factory(t) {
        return new (t || _ConnectivityService)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_utilities_notify_service__WEBPACK_IMPORTED_MODULE_5__.NotifyService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_ionic_native_bluetooth_serial_ngx__WEBPACK_IMPORTED_MODULE_6__.BluetoothSerial), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_7__.HelperService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_ionic_native_ble_ngx__WEBPACK_IMPORTED_MODULE_8__.BLE));
      };

      _ConnectivityService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjectable"]({
        token: _ConnectivityService,
        factory: _ConnectivityService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    81402:
    /*!*************************************************************************!*\
      !*** ./src/app/services/innova-vci-service/src/utilities/dataParser.ts ***!
      \*************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "arrayu8_tostringhex": function arrayu8_tostringhex() {
          return (
            /* binding */
            _arrayu8_tostringhex
          );
        },

        /* harmony export */
        "isNA": function isNA() {
          return (
            /* binding */
            _isNA
          );
        },

        /* harmony export */
        "hexToDecimal": function hexToDecimal() {
          return (
            /* binding */
            _hexToDecimal
          );
        },

        /* harmony export */
        "stringToDecimal": function stringToDecimal() {
          return (
            /* binding */
            _stringToDecimal
          );
        },

        /* harmony export */
        "isHex": function isHex() {
          return (
            /* binding */
            _isHex
          );
        },

        /* harmony export */
        "isDigitOrLetter": function isDigitOrLetter() {
          return (
            /* binding */
            _isDigitOrLetter
          );
        },

        /* harmony export */
        "toWellformedHex": function toWellformedHex() {
          return (
            /* binding */
            _toWellformedHex
          );
        },

        /* harmony export */
        "hexStringToBytes": function hexStringToBytes() {
          return (
            /* binding */
            _hexStringToBytes
          );
        },

        /* harmony export */
        "bytesToHexString": function bytesToHexString() {
          return (
            /* binding */
            _bytesToHexString
          );
        },

        /* harmony export */
        "bytesToString": function bytesToString() {
          return (
            /* binding */
            _bytesToString
          );
        },

        /* harmony export */
        "stringToBytes": function stringToBytes() {
          return (
            /* binding */
            _stringToBytes
          );
        },

        /* harmony export */
        "numberToBytes": function numberToBytes() {
          return (
            /* binding */
            _numberToBytes
          );
        },

        /* harmony export */
        "numberToDecBytes": function numberToDecBytes() {
          return (
            /* binding */
            _numberToDecBytes
          );
        },

        /* harmony export */
        "arrayToNumber": function arrayToNumber() {
          return (
            /* binding */
            _arrayToNumber
          );
        },

        /* harmony export */
        "arrayFromNumber": function arrayFromNumber() {
          return (
            /* binding */
            _arrayFromNumber
          );
        },

        /* harmony export */
        "bytesToInt": function bytesToInt() {
          return (
            /* binding */
            _bytesToInt
          );
        },

        /* harmony export */
        "bytesToDouble": function bytesToDouble() {
          return (
            /* binding */
            _bytesToDouble
          );
        },

        /* harmony export */
        "bytesToInt_dec": function bytesToInt_dec() {
          return (
            /* binding */
            _bytesToInt_dec
          );
        },

        /* harmony export */
        "readbleToJSON": function readbleToJSON() {
          return (
            /* binding */
            _readbleToJSON
          );
        },

        /* harmony export */
        "getStringOfObj": function getStringOfObj() {
          return (
            /* binding */
            _getStringOfObj
          );
        },

        /* harmony export */
        "bytestoObj": function bytestoObj() {
          return (
            /* binding */
            _bytestoObj
          );
        },

        /* harmony export */
        "getObjfromString": function getObjfromString() {
          return (
            /* binding */
            _getObjfromString
          );
        },

        /* harmony export */
        "getValOfObj": function getValOfObj() {
          return (
            /* binding */
            _getValOfObj
          );
        },

        /* harmony export */
        "ObjtoStringBeauty": function ObjtoStringBeauty() {
          return (
            /* binding */
            _ObjtoStringBeauty
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

      function _arrayu8_tostringhex(byteArray) {
        return Array.from(byteArray, function (_byte) {
          return ('0' + (_byte & 0xFF).toString(16)).slice(-2);
        }).join('');
      }

      function _isNA(s) {
        if (s === null || s === undefined || s.trim() === '') {
          return true;
        }

        s = s.toLowerCase();
        return s === 'na' || s === 'n/a';
      }

      function _hexToDecimal(s, def) {
        s = (s || '').toLowerCase();

        if (s.indexOf('0x') !== 0) {
          s = '0x' + s;
        }

        try {
          var rtn = parseInt(s);

          if (_isNA(rtn)) {
            return def;
          }

          return rtn;
        } catch (err) {
          console.log(err);
          return def;
        }
      }

      function _stringToDecimal(s, def) {
        s = (s || '').toLowerCase();

        try {
          var rtn = parseInt(s);

          if (_isNA(rtn)) {
            return def;
          }

          return rtn;
        } catch (err) {
          console.log(err);
          return def;
        }
      }

      function _isHex(v) {
        var hexRegEx = /[0-9,a-f]/gim;
        return (v.match(hexRegEx) || []).length === v.length;
      }

      function _isDigitOrLetter(v) {
        var hexRegEx = /[a-z,0-9]/gim;
        return (v.match(hexRegEx) || []).length === v.length;
      }

      function _toWellformedHex(s) {
        s = s || '';
        s = s.replace(/ /g, '');
        if (s.length % 2 === 1) s = '0' + s;
        return s;
      } // Convert a hex string to a byte array


      function _hexStringToBytes(hex) {
        for (var bytes = [], c = 0; c < hex.length; c += 2) bytes.push(parseInt(hex.substr(c, 2), 16));

        return bytes;
      } // Convert a byte array to a hex string


      function _bytesToHexString(bytes) {
        var ishasspace = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var hex = [];

        for (var i = 0; i < bytes.length; i++) {
          hex.push((bytes[i] >>> 4).toString(16));
          hex.push((bytes[i] & 0xF).toString(16));
          if (ishasspace) hex.push(' ');
        }

        return hex.join('').trim();
      }

      function _bytesToString(bytes) {
        //return _.trim(String.fromCharCode.apply(null, bytes), '\0')
        return lodash__WEBPACK_IMPORTED_MODULE_0__.trim(new TextDecoder('utf-8').decode(Uint8Array.from(bytes)), '\0'); //06-11-2019 21:58 Quoc Do change here to try decode utf8
      }

      function _stringToBytes(str) {
        var bytes = [];

        for (var i = 0; i < str.length; i++) {
          bytes.push(str.charCodeAt(i));
        }

        return bytes; // return bytes
      }

      function _numberToBytes(x, size) {
        var bytes = [];
        var current = parseInt(x, 10);

        do {
          bytes.push(current & 0xFF);
          current = current >>> 8;
        } while (!!current); // adding padding 0 if size provided


        if (size) {
          if (size > bytes.length) {
            var padIndex = bytes.length;

            while (padIndex < size) {
              bytes.push(0);
              padIndex++;
            }
          } else {
            bytes = bytes.splice(0, size);
          }
        }

        return bytes;
      }

      function _numberToDecBytes(x, size) {
        var bytes = [];
        var current = parseInt(x);

        var _byte2;

        do {
          _byte2 = current % 10;
          bytes.push(_byte2);
          current = (current - _byte2) / 10;
        } while (!!current); // adding padding 0 if size provided


        if (size) {
          if (size > bytes.length) {
            var padIndex = bytes.length;

            while (padIndex < size) {
              bytes.push(0);
              padIndex++;
            }
          } else {
            bytes = bytes.splice(0, size);
          }
        } // reverse the order


        bytes.reverse();
        return bytes;
      }

      function _arrayToNumber(datas) {
        var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;
        var isMsb = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isUnsigned = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

        try {
          var ret = 0;
          var val = lodash__WEBPACK_IMPORTED_MODULE_0__.assign([], datas.slice(0, lodash__WEBPACK_IMPORTED_MODULE_0__.min([datas.length, size])));

          if (isMsb === false) {
            val = lodash__WEBPACK_IMPORTED_MODULE_0__.reverse(val);
          }

          for (var j = 0; j < size;) {
            ret += val[j];
            j++;
            if (j < size) ret <<= 8;
          }

          if (isUnsigned) return ret >>> 0;else return ret;
        } catch (err) {
          return 0;
        }
      }

      function _arrayFromNumber(val) {
        var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;
        var isMsb = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var ret = []; //LSB

        for (var j = 0; j < size; j++) {
          ret.push(val >> j * 8 & 0xff);
        } //MSB


        if (isMsb) {
          ret = ret.reverse();
        }

        return ret;
      }

      function _bytesToInt(bytes) {
        var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
        var endian = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
        var rtn = lodash__WEBPACK_IMPORTED_MODULE_0__.chunk(bytes, size);
        rtn = rtn.map(function (arr) {
          if (!endian) {
            arr.reverse();
          }

          var val = 0;
          arr.map(function (v) {
            val = (val << 8) + v;
          });
          return val;
        }); // if (rtn.length === 1) {
        //     return rtn[0]
        // }

        return rtn[0];
      }

      function _bytesToDouble(bytes) {
        var endian = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
        var buffer = new ArrayBuffer(8);
        var dv = new DataView(buffer, 0);
        bytes.map(function (b, index) {
          return dv.setUint8(index, b);
        });
        return dv.getFloat64(0, !endian);
      }

      function _bytesToInt_dec(bytes) {
        var rtn = 0;
        bytes.map(function (_byte3, index) {
          if (_byte3 > 9) {
            throw new Error('Invalid number');
          }

          rtn = rtn + _byte3 * Math.pow(10, index);
        });
        return rtn;
      }

      function _readbleToJSON(val) {
        try {
          if (lodash__WEBPACK_IMPORTED_MODULE_0__.isArray(val) && val.length === 0) return {};

          var _string = _bytesToString(val);

          if (lodash__WEBPACK_IMPORTED_MODULE_0__.isString(_string)) {
            try {
              return JSON.parse(_string);
            } catch (err) {
              var tempstring = lodash__WEBPACK_IMPORTED_MODULE_0__.replace(_string, /""/g, '"');
              tempstring = lodash__WEBPACK_IMPORTED_MODULE_0__.replace(tempstring, /}/g, '}');
              tempstring = lodash__WEBPACK_IMPORTED_MODULE_0__.replace(tempstring, /[\n]/g, '//n');
              return JSON.parse(tempstring);
            }
          } //   logger.log('Warning', 'TODO', 'ReadableFormat', _string);


          return null;
        } catch (err) {
          //   logger.log('ParseToJSON', err);
          return null;
        }
      }

      function _getStringOfObj(obj) {
        if (!obj) return 'null';

        if (typeof obj === 'string') {
          return obj;
        }

        if (lodash__WEBPACK_IMPORTED_MODULE_0__.isArray(obj)) {
          if (obj.length === 0) return null;
          var s = this.bytesToString(obj);
          if (s) return s;
        }

        if (lodash__WEBPACK_IMPORTED_MODULE_0__.isNumber(obj)) {
          return "0x".concat(obj.toString(16));
        }

        return JSON.stringify(obj);
      }

      function _bytestoObj(data) {
        try {
          var a = this.bytesToString(data);
          return JSON.parse(a);
        } catch (err) {
          return undefined;
        }
      }

      function _getObjfromString(jsonObj) {
        try {
          return JSON.parse(jsonObj);
        } catch (err) {
          console.log('Error JSON', jsonObj);
        }

        return null;
      }

      function _getValOfObj(key, obj) {
        try {
          var _keys = lodash__WEBPACK_IMPORTED_MODULE_0__.keys(obj); //console.log('key of object', _keys);
          //const _keys = Object.keys(obj);


          key = lodash__WEBPACK_IMPORTED_MODULE_0__.lowerCase(key);

          for (var i = 0; i < _keys.length; i++) {
            if (lodash__WEBPACK_IMPORTED_MODULE_0__.lowerCase(_keys[i]) === key) {
              return obj[_keys[i]];
            }
          }

          return null;
        } catch (err) {
          console.log(err);
          return null;
        }
      }

      function _ObjtoStringBeauty(data) {
        var _this9 = this;

        try {
          return JSON.stringify(data, function (key, value) {
            if (Array.isArray(value) && typeof value[0] == 'number') {
              return "[".concat(_this9.bytesToHexString(value, true), "]");
            }

            return value;
          });
        } catch (err) {
          return JSON.stringify(data);
        }
      }
      /***/

    },

    /***/
    46607:
    /*!*****************************************************************************!*\
      !*** ./src/app/services/innova-vci-service/src/utilities/notify.service.ts ***!
      \*****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NotifyService": function NotifyService() {
          return (
            /* binding */
            _NotifyService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _standard_enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../standard/enums */
      13930);
      /* harmony import */


      var util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! util */
      94655);
      /* harmony import */


      var util__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _dataParser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./dataParser */
      81402);

      var _NotifyService = /*#__PURE__*/function () {
        function _NotifyService() {
          _classCallCheck(this, _NotifyService);

          this.Event = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        }

        return _createClass(_NotifyService, [{
          key: "log",
          value: function log(t) {
            this.Event.emit({
              tag: _standard_enums__WEBPACK_IMPORTED_MODULE_0__.EnumNotify.NOTIFY_DEBUG_LOG,
              data: t // ngoclb: no need log timestamp here

            });
          }
        }, {
          key: "logComTx",
          value: function logComTx(t) {
            if ((0, util__WEBPACK_IMPORTED_MODULE_1__.isArray)(t)) {
              t = _dataParser__WEBPACK_IMPORTED_MODULE_2__.bytesToHexString(t);
            }

            this.Event.emit({
              tag: _standard_enums__WEBPACK_IMPORTED_MODULE_0__.EnumNotify.NOTIFY_DEBUG_LOG_COM_TX,
              data: t
            });
          }
        }, {
          key: "logComRx",
          value: function logComRx(t, f) {
            if ((0, util__WEBPACK_IMPORTED_MODULE_1__.isArray)(t)) {
              t = _dataParser__WEBPACK_IMPORTED_MODULE_2__.bytesToHexString(t);
            }

            this.Event.emit({
              tag: f ? _standard_enums__WEBPACK_IMPORTED_MODULE_0__.EnumNotify.NOTIFY_DEBUG_LOG_COM_RX_RX : _standard_enums__WEBPACK_IMPORTED_MODULE_0__.EnumNotify.NOTIFY_DEBUG_LOG_COM_RX,
              data: t
            });
          }
        }, {
          key: "notify",
          value: function notify(t) {
            this.Event.emit(t);
          }
        }, {
          key: "notifyResponse",
          value: function notifyResponse(data) {
            this.notify({
              tag: _standard_enums__WEBPACK_IMPORTED_MODULE_0__.EnumNotify.NOTIFY_VCI_DATA_RESPONSE,
              data: data
            });
          }
        }]);
      }();

      _NotifyService.ɵfac = function NotifyService_Factory(t) {
        return new (t || _NotifyService)();
      };

      _NotifyService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        token: _NotifyService,
        factory: _NotifyService.ɵfac,
        providedIn: 'root'
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=default-src_app_bases_base-controller_ts-src_app_services_innova-vci-service_src_connectivity-e7a189-es5.js.map