(self["webpackChunkcom_carmd_proscan2"] = self["webpackChunkcom_carmd_proscan2"] || []).push([["default-src_app_bases_base-controller_ts-src_app_services_innova-vci-service_src_connectivity-e7a189"],{

/***/ 4155:
/*!*********************************************************************!*\
  !*** ./node_modules/util/node_modules/inherits/inherits_browser.js ***!
  \*********************************************************************/
/***/ (function(module) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
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
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ }),

/***/ 59720:
/*!******************************************************!*\
  !*** ./node_modules/util/support/isBufferBrowser.js ***!
  \******************************************************/
/***/ (function(module) {

module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}

/***/ }),

/***/ 94655:
/*!***********************************!*\
  !*** ./node_modules/util/util.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

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
    return '\u001b[' + inspect.colors[style][0] + 'm' + str + '\u001b[' + inspect.colors[style][1] + 'm';
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
exports.isBuffer = __webpack_require__(/*! ./support/isBuffer */ 59720);

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


exports.inherits = __webpack_require__(/*! inherits */ 4155);

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

    var cb = function () {
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

/***/ }),

/***/ 38790:
/*!******************************************!*\
  !*** ./src/app/bases/base-controller.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseController": function() { return /* binding */ BaseController; }
/* harmony export */ });
/* harmony import */ var _services_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/logger */ 88737);
/* harmony import */ var _modules_service_injector_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/service-injector.module */ 34973);
/* harmony import */ var _services_state_app_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/state/app.state */ 12607);



class BaseController {
    constructor(name) {
        this.serviceInjector = _modules_service_injector_module__WEBPACK_IMPORTED_MODULE_1__.ServiceInjector;
        this.name = name; // || this.constructor?.name;
        const appLoggerService = _modules_service_injector_module__WEBPACK_IMPORTED_MODULE_1__.ServiceInjector.get(_services_logger__WEBPACK_IMPORTED_MODULE_0__.AppLoggerService);
        this.logger = appLoggerService === null || appLoggerService === void 0 ? void 0 : appLoggerService.getLogger(this.name);
        this.logger.debug('Enter');
        this.isAndroid = _services_state_app_state__WEBPACK_IMPORTED_MODULE_2__.AppState.isOnAndroid;
    }
}


/***/ }),

/***/ 27555:
/*!**************************************************************************************!*\
  !*** ./src/app/services/innova-vci-service/src/connectivity/connectivity.service.ts ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConnectivityService": function() { return /* binding */ ConnectivityService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _standard_enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../standard/enums */ 13930);
/* harmony import */ var _utilities_dataParser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../utilities/dataParser */ 81402);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ 202);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! util */ 94655);
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_services_state_app_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/state/app.state */ 12607);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _utilities_notify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../utilities/notify.service */ 46607);
/* harmony import */ var _ionic_native_bluetooth_serial_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/bluetooth-serial/ngx */ 83962);
/* harmony import */ var src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/helper.service */ 22486);
/* harmony import */ var _ionic_native_ble_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/ble/ngx */ 11695);











class ConnectivityService {
    constructor(logger, ble_serial, helper, ble) {
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
    blIsCheckOpenPort() {
        return this.isOpenPort;
    }
    getSerialType() {
        return this.serial_type;
    }
    initialize(cbdatahandler = null, type) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            // ngoclb: only set this.serial_type after init success
            try {
                const com_serial = this.ble_serial;
                this.com_serial = com_serial;
                this.serial_type = type;
                return true;
            }
            catch (err) {
                this.com_serial = null;
                this.logger.log(err);
            }
            return false;
        });
    }
    /**
     * interrupt device connection (soft)
     */
    cancel_process() {
        this.logger.log('cancel_process');
        this.isDevConnected = false;
    }
    /**
     * interrupt device connection (soft)
     */
    resume_process() {
        this.logger.log('resume_process');
        this.isDevConnected = true;
    }
    connectBlueToothDevice(add, cbdatahandler = null, cbresult = null) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            // if(this.serial_type ==  EnumSerialType.Bluetooth)
            // {
            if (src_app_services_state_app_state__WEBPACK_IMPORTED_MODULE_4__.AppState.isOnAndroid) {
                return yield this.ble_serial.connectInsecure(add).subscribe((success) => {
                    this.logger.log(`[BT] Device connect successfully ${add}`);
                    this.isDevConnected = true;
                    this.com_serial = this.ble_serial;
                    this.watchResponse && this.watchResponse.unsubscribe();
                    this.watchResponse = this.com_serial.subscribeRawData().subscribe((data) => {
                        var datau8array = new Uint8Array(data).map((xx) => {
                            return xx;
                        });
                        this.logger.logComRx(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_1__.bytesToHexString(datau8array));
                        cbdatahandler && cbdatahandler(datau8array);
                    });
                    cbresult && cbresult(true);
                }, (error) => (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
                    this.logger.log(`[BT] Device connect unsuccessfully ${add}: ${error}`);
                    yield this.helper.sleep(3000);
                    yield this.ble_serial.connectInsecure(add).subscribe(success => {
                        this.logger.log(`[BT] Device connect successfully ${add}`);
                        this.isDevConnected = true;
                        this.com_serial = this.ble_serial;
                        this.watchResponse && this.watchResponse.unsubscribe();
                        this.watchResponse = this.com_serial.subscribeRawData().subscribe(data => {
                            var datau8array = (new Uint8Array(data)).map(xx => { return xx; });
                            this.logger.logComRx(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_1__.bytesToHexString(datau8array));
                            cbdatahandler && cbdatahandler(datau8array);
                        });
                        cbresult && cbresult(true);
                    }, (err) => {
                        cbresult && cbresult(false);
                    });
                }));
            }
            else {
                return yield this.ble_serial.connect(add).subscribe((success) => {
                    this.logger.log(`[BT] Device connect successfully ${add}`);
                    this.isDevConnected = true;
                    this.com_serial = this.ble_serial;
                    this.watchResponse && this.watchResponse.unsubscribe();
                    this.watchResponse = this.com_serial.subscribeRawData().subscribe((data) => {
                        var datau8array = new Uint8Array(data).map((xx) => {
                            return xx;
                        });
                        this.logger.logComRx(_utilities_dataParser__WEBPACK_IMPORTED_MODULE_1__.bytesToHexString(datau8array));
                        cbdatahandler && cbdatahandler(datau8array);
                    });
                    cbresult && cbresult(true);
                }, (error) => {
                    this.logger.log(`[BT] Device connect unsuccessfully ${add}: ${error}`);
                    this.com_serial = this.ble_serial;
                    cbresult && cbresult(false);
                });
            }
            // }
            // return null;
        });
    }
    BluetoothIsConnected() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            yield this.ble_serial.isConnected().then((success) => {
                this.logger.log('Device Connected!!');
                this.isDevConnected = true;
            }, (error) => {
                this.logger.log('Device is not Connected');
                this.isDevConnected = false;
            });
            return this.isDevConnected;
        });
    }
    disconnectBluetoothDevices() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            try {
                let isDisconnect = yield this.ble_serial.disconnect().catch(() => {
                    this.logger.log('[BT] Device disconnect unsuccessfully!');
                });
                if (!isDisconnect) {
                    this.logger.log('[BT] Device disconnect unsuccessfully!');
                }
                return true;
            }
            catch (err) {
                this.logger.log(err);
                return this.isDevConnected;
            }
        });
    }
    listBonnedBluetoothDevices() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            // if(this.serial_type ===  EnumSerialType.Bluetooth)
            // {
            try {
                if (this.helper.isIOs()) {
                    /*
                      await this.ble.connectedPeripheralsWithServices([]).then(list => {
                        this.logger.log('device list: ' + list);
                        if(!isNullOrUndefined(list))
                          this.listBondeddev = list;
                      }, error => {
                        this.logger.log('Bluetooth is not yet enabled');
                        //return null;
                      })*/
                }
                else {
                    let result = yield this.ble.bondedDevices().then((list) => {
                        console.log('list: ', list);
                        this.logger.log('device list: ' + list);
                        if (!(0,util__WEBPACK_IMPORTED_MODULE_3__.isNullOrUndefined)(list))
                            this.listBondeddev = list;
                    }, (error) => {
                        console.log('error: ', error);
                        this.logger.log('Bluetooth is not yet enabled');
                        //return null;
                    });
                    console.log('result: ', result);
                }
                return this.listBondeddev;
            }
            catch (err) {
                //alert(err)
                this.logger.log(err);
            }
            // }
        });
    }
    stopScan() {
        // if(this.serial_type ===  EnumSerialType.Bluetooth)
        // {
        setTimeout(() => {
            console.log('Call this.ble.stopScan');
            this.ble.stopScan();
        }, 500);
        // }
        // return null;
    }
    discoverBluetoothDevices2() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            return this.ble_serial.list();
        });
    }
    listBluetoothDevices() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            // if(this.serial_type ===  EnumSerialType.Bluetooth)
            // {
            //let listdev=null;
            try {
                // await this.com_serial.setDeviceDiscoveredListener(function (device) {
                //   this.logger.log('Found: ' + device.name);
                // });
                yield this.ble_serial.discoverUnpaired().then((list) => {
                    if (!(0,util__WEBPACK_IMPORTED_MODULE_3__.isNullOrUndefined)(list))
                        this.listdev = list;
                    this.logger.log('device list: ' + list);
                }, (error) => {
                    this.logger.log('Bluetooth is not yet enabled');
                    //return null;
                });
                return this.listdev;
                //return listdev;
            }
            catch (err) {
                // alert(err)
                this.logger.log(err);
            }
            // }
            // else
            // {
            //   return null;
            // }
        });
    }
    writeString(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            try {
                if (!(this.isOpenPort && this.isDevConnected))
                    return -1;
                yield this.com_serial.write(data);
                return data.length;
            }
            catch (error) {
                this.logger.log(`writeString() ${error}`);
                return -2;
            }
        });
    }
    // modified by ngoclb
    __delayTimeGuard(ms = 50) {
        return new Promise((resolve) => {
            setTimeout(() => {
                return resolve(true);
            }, ms);
        });
    }
    writeHex(arraydata) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            try {
                if (!this.isDevConnected) {
                    throw new Error('process was interrupted');
                }
                const __writeHex = (listdata) => (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
                    if (lodash__WEBPACK_IMPORTED_MODULE_2__.isEmpty(listdata)) {
                        return true;
                    }
                    var data = listdata.shift();
                    let txdata = _utilities_dataParser__WEBPACK_IMPORTED_MODULE_1__.bytesToHexString(data);
                    this.logger.logComTx(`${txdata} [${data.length} bytes]`);
                    if (this.serial_type == _standard_enums__WEBPACK_IMPORTED_MODULE_0__.EnumSerialType.Serial_USB) {
                        if (this.isOpenPort) {
                            yield this.com_serial.writeHex(txdata);
                        }
                        else {
                            throw new Error('Write on a closed port.');
                        }
                    }
                    else {
                        yield this.com_serial.write(data);
                    }
                    return yield __writeHex(listdata);
                });
                const chunkdatas = lodash__WEBPACK_IMPORTED_MODULE_2__.chunk(arraydata, 20);
                yield __writeHex(chunkdatas);
                return true;
            }
            catch (Err) {
                throw new Error('[writeHex error] ' + Err);
                // return false
            }
        });
    }
    CloseConnection() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            try {
                this.logger.log('Close connection via bluetooth');
                this.disconnectBluetoothDevices();
            }
            catch (err) {
                this.logger.log('Close Connection Error!!' + err);
                return false;
            }
        });
    }
    // changed by ngoclb
    testWrite() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            try {
                return this.writeString('\r\n');
            }
            catch (error) {
                return 0;
            }
        });
    }
    get isPortOpen() {
        return this.isOpenPort;
    }
    closePort() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            this.watchResponse && this.watchResponse.unsubscribe();
            this.isOpenPort = false;
            this.isDevConnected = false;
            return true;
        });
    }
}
ConnectivityService.ɵfac = function ConnectivityService_Factory(t) { return new (t || ConnectivityService)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_utilities_notify_service__WEBPACK_IMPORTED_MODULE_5__.NotifyService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_ionic_native_bluetooth_serial_ngx__WEBPACK_IMPORTED_MODULE_6__.BluetoothSerial), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_7__.HelperService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_ionic_native_ble_ngx__WEBPACK_IMPORTED_MODULE_8__.BLE)); };
ConnectivityService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjectable"]({ token: ConnectivityService, factory: ConnectivityService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 81402:
/*!*************************************************************************!*\
  !*** ./src/app/services/innova-vci-service/src/utilities/dataParser.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "arrayu8_tostringhex": function() { return /* binding */ arrayu8_tostringhex; },
/* harmony export */   "isNA": function() { return /* binding */ isNA; },
/* harmony export */   "hexToDecimal": function() { return /* binding */ hexToDecimal; },
/* harmony export */   "stringToDecimal": function() { return /* binding */ stringToDecimal; },
/* harmony export */   "isHex": function() { return /* binding */ isHex; },
/* harmony export */   "isDigitOrLetter": function() { return /* binding */ isDigitOrLetter; },
/* harmony export */   "toWellformedHex": function() { return /* binding */ toWellformedHex; },
/* harmony export */   "hexStringToBytes": function() { return /* binding */ hexStringToBytes; },
/* harmony export */   "bytesToHexString": function() { return /* binding */ bytesToHexString; },
/* harmony export */   "bytesToString": function() { return /* binding */ bytesToString; },
/* harmony export */   "stringToBytes": function() { return /* binding */ stringToBytes; },
/* harmony export */   "numberToBytes": function() { return /* binding */ numberToBytes; },
/* harmony export */   "numberToDecBytes": function() { return /* binding */ numberToDecBytes; },
/* harmony export */   "arrayToNumber": function() { return /* binding */ arrayToNumber; },
/* harmony export */   "arrayFromNumber": function() { return /* binding */ arrayFromNumber; },
/* harmony export */   "bytesToInt": function() { return /* binding */ bytesToInt; },
/* harmony export */   "bytesToDouble": function() { return /* binding */ bytesToDouble; },
/* harmony export */   "bytesToInt_dec": function() { return /* binding */ bytesToInt_dec; },
/* harmony export */   "readbleToJSON": function() { return /* binding */ readbleToJSON; },
/* harmony export */   "getStringOfObj": function() { return /* binding */ getStringOfObj; },
/* harmony export */   "bytestoObj": function() { return /* binding */ bytestoObj; },
/* harmony export */   "getObjfromString": function() { return /* binding */ getObjfromString; },
/* harmony export */   "getValOfObj": function() { return /* binding */ getValOfObj; },
/* harmony export */   "ObjtoStringBeauty": function() { return /* binding */ ObjtoStringBeauty; }
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 202);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

function arrayu8_tostringhex(byteArray) {
    return Array.from(byteArray, function (byte) {
        return ('0' + (byte & 0xFF).toString(16)).slice(-2);
    }).join('');
}
function isNA(s) {
    if (s === null || s === undefined || s.trim() === '') {
        return true;
    }
    s = s.toLowerCase();
    return s === 'na' || s === 'n/a';
}
function hexToDecimal(s, def) {
    s = (s || '').toLowerCase();
    if (s.indexOf('0x') !== 0) {
        s = '0x' + s;
    }
    try {
        const rtn = parseInt(s);
        if (isNA(rtn)) {
            return def;
        }
        return rtn;
    }
    catch (err) {
        console.log(err);
        return def;
    }
}
function stringToDecimal(s, def) {
    s = (s || '').toLowerCase();
    try {
        let rtn = parseInt(s);
        if (isNA(rtn)) {
            return def;
        }
        return rtn;
    }
    catch (err) {
        console.log(err);
        return def;
    }
}
function isHex(v) {
    const hexRegEx = /[0-9,a-f]/gim;
    return (v.match(hexRegEx) || []).length === v.length;
}
function isDigitOrLetter(v) {
    const hexRegEx = /[a-z,0-9]/gim;
    return (v.match(hexRegEx) || []).length === v.length;
}
function toWellformedHex(s) {
    s = s || '';
    s = s.replace(/ /g, '');
    if (s.length % 2 === 1)
        s = '0' + s;
    return s;
}
// Convert a hex string to a byte array
function hexStringToBytes(hex) {
    for (var bytes = [], c = 0; c < hex.length; c += 2)
        bytes.push(parseInt(hex.substr(c, 2), 16));
    return bytes;
}
// Convert a byte array to a hex string
function bytesToHexString(bytes, ishasspace = false) {
    var hex = [];
    for (var i = 0; i < bytes.length; i++) {
        hex.push((bytes[i] >>> 4).toString(16));
        hex.push((bytes[i] & 0xF).toString(16));
        if (ishasspace)
            hex.push(' ');
    }
    return hex.join('').trim();
}
function bytesToString(bytes) {
    //return _.trim(String.fromCharCode.apply(null, bytes), '\0')
    return lodash__WEBPACK_IMPORTED_MODULE_0__.trim(new TextDecoder('utf-8').decode(Uint8Array.from(bytes)), '\0'); //06-11-2019 21:58 Quoc Do change here to try decode utf8
}
function stringToBytes(str) {
    const bytes = [];
    for (let i = 0; i < str.length; i++) {
        bytes.push(str.charCodeAt(i));
    }
    return bytes;
    // return bytes
}
function numberToBytes(x, size) {
    let bytes = [];
    let current = parseInt(x, 10);
    do {
        bytes.push(current & 0xFF);
        current = current >>> 8;
    } while (!!current);
    // adding padding 0 if size provided
    if (size) {
        if (size > bytes.length) {
            let padIndex = bytes.length;
            while (padIndex < size) {
                bytes.push(0);
                padIndex++;
            }
        }
        else {
            bytes = bytes.splice(0, size);
        }
    }
    return bytes;
}
function numberToDecBytes(x, size) {
    let bytes = [];
    let current = parseInt(x);
    let byte;
    do {
        byte = current % 10;
        bytes.push(byte);
        current = (current - byte) / 10;
    } while (!!current);
    // adding padding 0 if size provided
    if (size) {
        if (size > bytes.length) {
            let padIndex = bytes.length;
            while (padIndex < size) {
                bytes.push(0);
                padIndex++;
            }
        }
        else {
            bytes = bytes.splice(0, size);
        }
    }
    // reverse the order
    bytes.reverse();
    return bytes;
}
function arrayToNumber(datas, size = 4, isMsb = false, isUnsigned = true) {
    try {
        let ret = 0;
        let val = lodash__WEBPACK_IMPORTED_MODULE_0__.assign([], datas.slice(0, lodash__WEBPACK_IMPORTED_MODULE_0__.min([datas.length, size])));
        if (isMsb === false) {
            val = lodash__WEBPACK_IMPORTED_MODULE_0__.reverse(val);
        }
        for (let j = 0; j < size;) {
            ret += val[j];
            j++;
            if (j < size)
                ret <<= 8;
        }
        if (isUnsigned)
            return ret >>> 0;
        else
            return ret;
    }
    catch (err) {
        return 0;
    }
}
function arrayFromNumber(val, size = 4, isMsb = false) {
    let ret = [];
    //LSB
    for (let j = 0; j < size; j++) {
        ret.push((val >> (j * 8)) & 0xff);
    }
    //MSB
    if (isMsb) {
        ret = ret.reverse();
    }
    return ret;
}
function bytesToInt(bytes, size = 2, endian = 1) {
    let rtn = lodash__WEBPACK_IMPORTED_MODULE_0__.chunk(bytes, size);
    rtn = rtn.map((arr) => {
        if (!endian) {
            arr.reverse();
        }
        let val = 0;
        arr.map((v) => {
            val = (val << 8) + v;
        });
        return val;
    });
    // if (rtn.length === 1) {
    //     return rtn[0]
    // }
    return rtn[0];
}
function bytesToDouble(bytes, endian = 1) {
    const buffer = new ArrayBuffer(8);
    const dv = new DataView(buffer, 0);
    bytes.map((b, index) => dv.setUint8(index, b));
    return dv.getFloat64(0, !endian);
}
function bytesToInt_dec(bytes) {
    let rtn = 0;
    bytes.map((byte, index) => {
        if (byte > 9) {
            throw new Error('Invalid number');
        }
        rtn = rtn + (byte * Math.pow(10, index));
    });
    return rtn;
}
function readbleToJSON(val) {
    try {
        if (lodash__WEBPACK_IMPORTED_MODULE_0__.isArray(val) && val.length === 0)
            return {};
        const _string = bytesToString(val);
        if (lodash__WEBPACK_IMPORTED_MODULE_0__.isString(_string)) {
            try {
                return JSON.parse(_string);
            }
            catch (err) {
                let tempstring = lodash__WEBPACK_IMPORTED_MODULE_0__.replace(_string, /""/g, '"');
                tempstring = lodash__WEBPACK_IMPORTED_MODULE_0__.replace(tempstring, /}/g, '}');
                tempstring = lodash__WEBPACK_IMPORTED_MODULE_0__.replace(tempstring, /[\n]/g, '//n');
                return JSON.parse(tempstring);
            }
        }
        //   logger.log('Warning', 'TODO', 'ReadableFormat', _string);
        return null;
    }
    catch (err) {
        //   logger.log('ParseToJSON', err);
        return null;
    }
}
function getStringOfObj(obj) {
    if (!obj)
        return 'null';
    if (typeof obj === 'string') {
        return obj;
    }
    if (lodash__WEBPACK_IMPORTED_MODULE_0__.isArray(obj)) {
        if (obj.length === 0)
            return null;
        const s = this.bytesToString(obj);
        if (s)
            return s;
    }
    if (lodash__WEBPACK_IMPORTED_MODULE_0__.isNumber(obj)) {
        return `0x${obj.toString(16)}`;
    }
    return JSON.stringify(obj);
}
function bytestoObj(data) {
    try {
        let a = this.bytesToString(data);
        return JSON.parse(a);
    }
    catch (err) {
        return undefined;
    }
}
function getObjfromString(jsonObj) {
    try {
        return JSON.parse(jsonObj);
    }
    catch (err) {
        console.log('Error JSON', jsonObj);
    }
    return null;
}
function getValOfObj(key, obj) {
    try {
        const _keys = lodash__WEBPACK_IMPORTED_MODULE_0__.keys(obj);
        //console.log('key of object', _keys);
        //const _keys = Object.keys(obj);
        key = lodash__WEBPACK_IMPORTED_MODULE_0__.lowerCase(key);
        for (let i = 0; i < _keys.length; i++) {
            if (lodash__WEBPACK_IMPORTED_MODULE_0__.lowerCase(_keys[i]) === key) {
                return obj[_keys[i]];
            }
        }
        return null;
    }
    catch (err) {
        console.log(err);
        return null;
    }
}
function ObjtoStringBeauty(data) {
    try {
        return JSON.stringify(data, (key, value) => {
            if (Array.isArray(value) && (typeof value[0] == 'number')) {
                return `[${this.bytesToHexString(value, true)}]`;
            }
            return value;
        });
    }
    catch (err) {
        return JSON.stringify(data);
    }
}


/***/ }),

/***/ 46607:
/*!*****************************************************************************!*\
  !*** ./src/app/services/innova-vci-service/src/utilities/notify.service.ts ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotifyService": function() { return /* binding */ NotifyService; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _standard_enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../standard/enums */ 13930);
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! util */ 94655);
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dataParser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dataParser */ 81402);





class NotifyService {
    constructor() {
        this.Event = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    }
    log(t) {
        this.Event.emit({
            tag: _standard_enums__WEBPACK_IMPORTED_MODULE_0__.EnumNotify.NOTIFY_DEBUG_LOG,
            data: t // ngoclb: no need log timestamp here
        });
    }
    logComTx(t) {
        if ((0,util__WEBPACK_IMPORTED_MODULE_1__.isArray)(t)) {
            t = _dataParser__WEBPACK_IMPORTED_MODULE_2__.bytesToHexString(t);
        }
        this.Event.emit({
            tag: _standard_enums__WEBPACK_IMPORTED_MODULE_0__.EnumNotify.NOTIFY_DEBUG_LOG_COM_TX,
            data: t
        });
    }
    logComRx(t, f) {
        if ((0,util__WEBPACK_IMPORTED_MODULE_1__.isArray)(t)) {
            t = _dataParser__WEBPACK_IMPORTED_MODULE_2__.bytesToHexString(t);
        }
        this.Event.emit({
            tag: f ? _standard_enums__WEBPACK_IMPORTED_MODULE_0__.EnumNotify.NOTIFY_DEBUG_LOG_COM_RX_RX : _standard_enums__WEBPACK_IMPORTED_MODULE_0__.EnumNotify.NOTIFY_DEBUG_LOG_COM_RX,
            data: t
        });
    }
    notify(t) {
        this.Event.emit(t);
    }
    notifyResponse(data) {
        this.notify({
            tag: _standard_enums__WEBPACK_IMPORTED_MODULE_0__.EnumNotify.NOTIFY_VCI_DATA_RESPONSE,
            data
        });
    }
}
NotifyService.ɵfac = function NotifyService_Factory(t) { return new (t || NotifyService)(); };
NotifyService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: NotifyService, factory: NotifyService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=default-src_app_bases_base-controller_ts-src_app_services_innova-vci-service_src_connectivity-e7a189-es2015.js.map