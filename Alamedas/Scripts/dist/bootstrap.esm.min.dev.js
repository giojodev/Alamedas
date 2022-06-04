"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tooltip = exports.Toast = exports.Tab = exports.ScrollSpy = exports.Popover = exports.Offcanvas = exports.Modal = exports.Dropdown = exports.Collapse = exports.Carousel = exports.Button = exports.Alert = void 0;

var Popper = _interopRequireWildcard(require("@popperjs/core"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var MAX_UID = 1e6,
    MILLISECONDS_MULTIPLIER = 1e3,
    TRANSITION_END = "transitionend",
    toType = function toType(e) {
  return null == e ? "".concat(e) : {}.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase();
},
    getUID = function getUID(e) {
  do {
    e += Math.floor(1e6 * Math.random());
  } while (document.getElementById(e));

  return e;
},
    getSelector = function getSelector(e) {
  var t = e.getAttribute("data-bs-target");

  if (!t || "#" === t) {
    var i = e.getAttribute("href");
    if (!i || !i.includes("#") && !i.startsWith(".")) return null;
    i.includes("#") && !i.startsWith("#") && (i = "#".concat(i.split("#")[1])), t = i && "#" !== i ? i.trim() : null;
  }

  return t;
},
    getSelectorFromElement = function getSelectorFromElement(e) {
  var t = getSelector(e);
  return t && document.querySelector(t) ? t : null;
},
    getElementFromSelector = function getElementFromSelector(e) {
  var t = getSelector(e);
  return t ? document.querySelector(t) : null;
},
    getTransitionDurationFromElement = function getTransitionDurationFromElement(e) {
  if (!e) return 0;

  var _window$getComputedSt = window.getComputedStyle(e),
      t = _window$getComputedSt.transitionDuration,
      i = _window$getComputedSt.transitionDelay;

  var n = Number.parseFloat(t),
      s = Number.parseFloat(i);
  return n || s ? (t = t.split(",")[0], i = i.split(",")[0], 1e3 * (Number.parseFloat(t) + Number.parseFloat(i))) : 0;
},
    triggerTransitionEnd = function triggerTransitionEnd(e) {
  e.dispatchEvent(new Event(TRANSITION_END));
},
    isElement = function isElement(e) {
  return !(!e || "object" != _typeof(e)) && (void 0 !== e.jquery && (e = e[0]), void 0 !== e.nodeType);
},
    getElement = function getElement(e) {
  return isElement(e) ? e.jquery ? e[0] : e : "string" == typeof e && e.length > 0 ? document.querySelector(e) : null;
},
    typeCheckConfig = function typeCheckConfig(e, t, i) {
  Object.keys(i).forEach(function (n) {
    var s = i[n],
        o = t[n],
        r = o && isElement(o) ? "element" : null == (a = o) ? "".concat(a) : {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase();
    var a;
    if (!new RegExp(s).test(r)) throw new TypeError("".concat(e.toUpperCase(), ": Option \"").concat(n, "\" provided type \"").concat(r, "\" but expected type \"").concat(s, "\"."));
  });
},
    isVisible = function isVisible(e) {
  return !(!isElement(e) || 0 === e.getClientRects().length) && "visible" === getComputedStyle(e).getPropertyValue("visibility");
},
    isDisabled = function isDisabled(e) {
  return !e || e.nodeType !== Node.ELEMENT_NODE || !!e.classList.contains("disabled") || (void 0 !== e.disabled ? e.disabled : e.hasAttribute("disabled") && "false" !== e.getAttribute("disabled"));
},
    findShadowRoot = function findShadowRoot(e) {
  if (!document.documentElement.attachShadow) return null;

  if ("function" == typeof e.getRootNode) {
    var t = e.getRootNode();
    return t instanceof ShadowRoot ? t : null;
  }

  return e instanceof ShadowRoot ? e : e.parentNode ? findShadowRoot(e.parentNode) : null;
},
    noop = function noop() {},
    reflow = function reflow(e) {
  e.offsetHeight;
},
    getjQuery = function getjQuery() {
  var _window = window,
      e = _window.jQuery;
  return e && !document.body.hasAttribute("data-bs-no-jquery") ? e : null;
},
    DOMContentLoadedCallbacks = [],
    onDOMContentLoaded = function onDOMContentLoaded(e) {
  "loading" === document.readyState ? (DOMContentLoadedCallbacks.length || document.addEventListener("DOMContentLoaded", function () {
    DOMContentLoadedCallbacks.forEach(function (e) {
      return e();
    });
  }), DOMContentLoadedCallbacks.push(e)) : e();
},
    isRTL = function isRTL() {
  return "rtl" === document.documentElement.dir;
},
    defineJQueryPlugin = function defineJQueryPlugin(e) {
  var t;
  t = function t() {
    var t = getjQuery();

    if (t) {
      var i = e.NAME,
          n = t.fn[i];
      t.fn[i] = e.jQueryInterface, t.fn[i].Constructor = e, t.fn[i].noConflict = function () {
        return t.fn[i] = n, e.jQueryInterface;
      };
    }
  }, "loading" === document.readyState ? (DOMContentLoadedCallbacks.length || document.addEventListener("DOMContentLoaded", function () {
    DOMContentLoadedCallbacks.forEach(function (e) {
      return e();
    });
  }), DOMContentLoadedCallbacks.push(t)) : t();
},
    execute = function execute(e) {
  "function" == typeof e && e();
},
    executeAfterTransition = function executeAfterTransition(e, t) {
  var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
  if (!i) return void execute(e);
  var n = getTransitionDurationFromElement(t) + 5;
  var s = !1;

  var o = function o(_ref) {
    var i = _ref.target;
    i === t && (s = !0, t.removeEventListener(TRANSITION_END, o), execute(e));
  };

  t.addEventListener(TRANSITION_END, o), setTimeout(function () {
    s || triggerTransitionEnd(t);
  }, n);
},
    getNextActiveElement = function getNextActiveElement(e, t, i, n) {
  var s = e.indexOf(t);
  if (-1 === s) return e[!i && n ? e.length - 1 : 0];
  var o = e.length;
  return s += i ? 1 : -1, n && (s = (s + o) % o), e[Math.max(0, Math.min(s, o - 1))];
},
    namespaceRegex = /[^.]*(?=\..*)\.|.*/,
    stripNameRegex = /\..*/,
    stripUidRegex = /::\d+$/,
    eventRegistry = {};

var uidEvent = 1;
var customEvents = {
  mouseenter: "mouseover",
  mouseleave: "mouseout"
},
    customEventsRegex = /^(mouseenter|mouseleave)/i,
    nativeEvents = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);

function getUidEvent(e, t) {
  return t && "".concat(t, "::").concat(uidEvent++) || e.uidEvent || uidEvent++;
}

function getEvent(e) {
  var t = getUidEvent(e);
  return e.uidEvent = t, eventRegistry[t] = eventRegistry[t] || {}, eventRegistry[t];
}

function bootstrapHandler(e, t) {
  return function i(n) {
    return n.delegateTarget = e, i.oneOff && EventHandler.off(e, n.type, t), t.apply(e, [n]);
  };
}

function bootstrapDelegationHandler(e, t, i) {
  return function n(s) {
    var o = e.querySelectorAll(t);

    for (var r = s.target; r && r !== this; r = r.parentNode) {
      for (var a = o.length; a--;) {
        if (o[a] === r) return s.delegateTarget = r, n.oneOff && EventHandler.off(e, s.type, t, i), i.apply(r, [s]);
      }
    }

    return null;
  };
}

function findHandler(e, t) {
  var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var n = Object.keys(e);

  for (var s = 0, o = n.length; s < o; s++) {
    var _o = e[n[s]];
    if (_o.originalHandler === t && _o.delegationSelector === i) return _o;
  }

  return null;
}

function normalizeParams(e, t, i) {
  var n = "string" == typeof t,
      s = n ? i : t;
  var o = getTypeEvent(e);
  return nativeEvents.has(o) || (o = e), [n, s, o];
}

function addHandler(e, t, i, n, s) {
  if ("string" != typeof t || !e) return;

  if (i || (i = n, n = null), customEventsRegex.test(t)) {
    var _e = function _e(e) {
      return function (t) {
        if (!t.relatedTarget || t.relatedTarget !== t.delegateTarget && !t.delegateTarget.contains(t.relatedTarget)) return e.call(this, t);
      };
    };

    n ? n = _e(n) : i = _e(i);
  }

  var _normalizeParams = normalizeParams(t, i, n),
      _normalizeParams2 = _slicedToArray(_normalizeParams, 3),
      o = _normalizeParams2[0],
      r = _normalizeParams2[1],
      a = _normalizeParams2[2],
      l = getEvent(e),
      c = l[a] || (l[a] = {}),
      E = findHandler(c, r, o ? i : null);

  if (E) return void (E.oneOff = E.oneOff && s);

  var _ = getUidEvent(r, t.replace(namespaceRegex, "")),
      h = o ? bootstrapDelegationHandler(e, i, n) : bootstrapHandler(e, i);

  h.delegationSelector = o ? i : null, h.originalHandler = r, h.oneOff = s, h.uidEvent = _, c[_] = h, e.addEventListener(a, h, o);
}

function removeHandler(e, t, i, n, s) {
  var o = findHandler(t[i], n, s);
  o && (e.removeEventListener(i, o, Boolean(s)), delete t[i][o.uidEvent]);
}

function removeNamespacedHandlers(e, t, i, n) {
  var s = t[i] || {};
  Object.keys(s).forEach(function (o) {
    if (o.includes(n)) {
      var _n2 = s[o];
      removeHandler(e, t, i, _n2.originalHandler, _n2.delegationSelector);
    }
  });
}

function getTypeEvent(e) {
  return e = e.replace(stripNameRegex, ""), customEvents[e] || e;
}

var EventHandler = {
  on: function on(e, t, i, n) {
    addHandler(e, t, i, n, !1);
  },
  one: function one(e, t, i, n) {
    addHandler(e, t, i, n, !0);
  },
  off: function off(e, t, i, n) {
    if ("string" != typeof t || !e) return;

    var _normalizeParams3 = normalizeParams(t, i, n),
        _normalizeParams4 = _slicedToArray(_normalizeParams3, 3),
        s = _normalizeParams4[0],
        o = _normalizeParams4[1],
        r = _normalizeParams4[2],
        a = r !== t,
        l = getEvent(e),
        c = t.startsWith(".");

    if (void 0 !== o) {
      if (!l || !l[r]) return;
      return void removeHandler(e, l, r, o, s ? i : null);
    }

    c && Object.keys(l).forEach(function (i) {
      removeNamespacedHandlers(e, l, i, t.slice(1));
    });
    var E = l[r] || {};
    Object.keys(E).forEach(function (i) {
      var n = i.replace(stripUidRegex, "");

      if (!a || t.includes(n)) {
        var _t = E[i];
        removeHandler(e, l, r, _t.originalHandler, _t.delegationSelector);
      }
    });
  },
  trigger: function trigger(e, t, i) {
    if ("string" != typeof t || !e) return null;
    var n = getjQuery(),
        s = getTypeEvent(t),
        o = t !== s,
        r = nativeEvents.has(s);
    var a,
        l = !0,
        c = !0,
        E = !1,
        _ = null;
    return o && n && (a = n.Event(t, i), n(e).trigger(a), l = !a.isPropagationStopped(), c = !a.isImmediatePropagationStopped(), E = a.isDefaultPrevented()), r ? (_ = document.createEvent("HTMLEvents"), _.initEvent(s, l, !0)) : _ = new CustomEvent(t, {
      bubbles: l,
      cancelable: !0
    }), void 0 !== i && Object.keys(i).forEach(function (e) {
      Object.defineProperty(_, e, {
        get: function get() {
          return i[e];
        }
      });
    }), E && _.preventDefault(), c && e.dispatchEvent(_), _.defaultPrevented && void 0 !== a && a.preventDefault(), _;
  }
},
    elementMap = new Map(),
    Data = {
  set: function set(e, t, i) {
    elementMap.has(e) || elementMap.set(e, new Map());
    var n = elementMap.get(e);
    n.has(t) || 0 === n.size ? n.set(t, i) : console.error("Bootstrap doesn't allow more than one instance per element. Bound instance: ".concat(Array.from(n.keys())[0], "."));
  },
  get: function get(e, t) {
    return elementMap.has(e) && elementMap.get(e).get(t) || null;
  },
  remove: function remove(e, t) {
    if (!elementMap.has(e)) return;
    var i = elementMap.get(e);
    i["delete"](t), 0 === i.size && elementMap["delete"](e);
  }
},
    VERSION = "5.1.3";

var BaseComponent =
/*#__PURE__*/
function () {
  function BaseComponent(e) {
    _classCallCheck(this, BaseComponent);

    (e = getElement(e)) && (this._element = e, Data.set(this._element, this.constructor.DATA_KEY, this));
  }

  _createClass(BaseComponent, [{
    key: "dispose",
    value: function dispose() {
      var _this = this;

      Data.remove(this._element, this.constructor.DATA_KEY), EventHandler.off(this._element, this.constructor.EVENT_KEY), Object.getOwnPropertyNames(this).forEach(function (e) {
        _this[e] = null;
      });
    }
  }, {
    key: "_queueCallback",
    value: function _queueCallback(e, t) {
      var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
      executeAfterTransition(e, t, i);
    }
  }], [{
    key: "getInstance",
    value: function getInstance(e) {
      return Data.get(getElement(e), this.DATA_KEY);
    }
  }, {
    key: "getOrCreateInstance",
    value: function getOrCreateInstance(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.getInstance(e) || new this(e, "object" == _typeof(t) ? t : null);
    }
  }, {
    key: "VERSION",
    get: function get() {
      return "5.1.3";
    }
  }, {
    key: "NAME",
    get: function get() {
      throw new Error('You have to implement the static method "NAME", for each component!');
    }
  }, {
    key: "DATA_KEY",
    get: function get() {
      return "bs.".concat(this.NAME);
    }
  }, {
    key: "EVENT_KEY",
    get: function get() {
      return ".".concat(this.DATA_KEY);
    }
  }]);

  return BaseComponent;
}();

var enableDismissTrigger = function enableDismissTrigger(e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "hide";
  var i = "click.dismiss".concat(e.EVENT_KEY),
      n = e.NAME;
  EventHandler.on(document, i, "[data-bs-dismiss=\"".concat(n, "\"]"), function (i) {
    if (["A", "AREA"].includes(this.tagName) && i.preventDefault(), isDisabled(this)) return;
    var s = getElementFromSelector(this) || this.closest(".".concat(n));
    e.getOrCreateInstance(s)[t]();
  });
},
    NAME$d = "alert",
    DATA_KEY$c = "bs.alert",
    EVENT_KEY$c = ".bs.alert",
    EVENT_CLOSE = "close.bs.alert",
    EVENT_CLOSED = "closed.bs.alert",
    CLASS_NAME_FADE$5 = "fade",
    CLASS_NAME_SHOW$8 = "show";

var Alert =
/*#__PURE__*/
function (_BaseComponent) {
  _inherits(Alert, _BaseComponent);

  function Alert() {
    _classCallCheck(this, Alert);

    return _possibleConstructorReturn(this, _getPrototypeOf(Alert).apply(this, arguments));
  }

  _createClass(Alert, [{
    key: "close",
    value: function close() {
      var _this2 = this;

      if (EventHandler.trigger(this._element, EVENT_CLOSE).defaultPrevented) return;

      this._element.classList.remove("show");

      var e = this._element.classList.contains("fade");

      this._queueCallback(function () {
        return _this2._destroyElement();
      }, this._element, e);
    }
  }, {
    key: "_destroyElement",
    value: function _destroyElement() {
      this._element.remove(), EventHandler.trigger(this._element, EVENT_CLOSED), this.dispose();
    }
  }], [{
    key: "jQueryInterface",
    value: function jQueryInterface(e) {
      return this.each(function () {
        var t = Alert.getOrCreateInstance(this);

        if ("string" == typeof e) {
          if (void 0 === t[e] || e.startsWith("_") || "constructor" === e) throw new TypeError("No method named \"".concat(e, "\""));
          t[e](this);
        }
      });
    }
  }, {
    key: "NAME",
    get: function get() {
      return NAME$d;
    }
  }]);

  return Alert;
}(BaseComponent);

exports.Alert = Alert;
enableDismissTrigger(Alert, "close"), defineJQueryPlugin(Alert);
var NAME$c = "button",
    DATA_KEY$b = "bs.button",
    EVENT_KEY$b = ".bs.button",
    DATA_API_KEY$7 = ".data-api",
    CLASS_NAME_ACTIVE$3 = "active",
    SELECTOR_DATA_TOGGLE$5 = '[data-bs-toggle="button"]',
    EVENT_CLICK_DATA_API$6 = "click.bs.button.data-api";

var Button =
/*#__PURE__*/
function (_BaseComponent2) {
  _inherits(Button, _BaseComponent2);

  function Button() {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(this, _getPrototypeOf(Button).apply(this, arguments));
  }

  _createClass(Button, [{
    key: "toggle",
    value: function toggle() {
      this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"));
    }
  }], [{
    key: "jQueryInterface",
    value: function jQueryInterface(e) {
      return this.each(function () {
        var t = Button.getOrCreateInstance(this);
        "toggle" === e && t[e]();
      });
    }
  }, {
    key: "NAME",
    get: function get() {
      return NAME$c;
    }
  }]);

  return Button;
}(BaseComponent);

exports.Button = Button;

function normalizeData(e) {
  return "true" === e || "false" !== e && (e === Number(e).toString() ? Number(e) : "" === e || "null" === e ? null : e);
}

function normalizeDataKey(e) {
  return e.replace(/[A-Z]/g, function (e) {
    return "-".concat(e.toLowerCase());
  });
}

EventHandler.on(document, EVENT_CLICK_DATA_API$6, SELECTOR_DATA_TOGGLE$5, function (e) {
  e.preventDefault();
  var t = e.target.closest(SELECTOR_DATA_TOGGLE$5);
  Button.getOrCreateInstance(t).toggle();
}), defineJQueryPlugin(Button);
var Manipulator = {
  setDataAttribute: function setDataAttribute(e, t, i) {
    e.setAttribute("data-bs-".concat(normalizeDataKey(t)), i);
  },
  removeDataAttribute: function removeDataAttribute(e, t) {
    e.removeAttribute("data-bs-".concat(normalizeDataKey(t)));
  },
  getDataAttributes: function getDataAttributes(e) {
    if (!e) return {};
    var t = {};
    return Object.keys(e.dataset).filter(function (e) {
      return e.startsWith("bs");
    }).forEach(function (i) {
      var n = i.replace(/^bs/, "");
      n = n.charAt(0).toLowerCase() + n.slice(1, n.length), t[n] = normalizeData(e.dataset[i]);
    }), t;
  },
  getDataAttribute: function getDataAttribute(e, t) {
    return normalizeData(e.getAttribute("data-bs-".concat(normalizeDataKey(t))));
  },
  offset: function offset(e) {
    var t = e.getBoundingClientRect();
    return {
      top: t.top + window.pageYOffset,
      left: t.left + window.pageXOffset
    };
  },
  position: function position(e) {
    return {
      top: e.offsetTop,
      left: e.offsetLeft
    };
  }
},
    NODE_TEXT = 3,
    SelectorEngine = {
  find: function find(e) {
    var _ref2;

    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.documentElement;
    return (_ref2 = []).concat.apply(_ref2, _toConsumableArray(Element.prototype.querySelectorAll.call(t, e)));
  },
  findOne: function findOne(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.documentElement;
    return Element.prototype.querySelector.call(t, e);
  },
  children: function children(e, t) {
    var _ref3;

    return (_ref3 = []).concat.apply(_ref3, _toConsumableArray(e.children)).filter(function (e) {
      return e.matches(t);
    });
  },
  parents: function parents(e, t) {
    var i = [];
    var n = e.parentNode;

    for (; n && n.nodeType === Node.ELEMENT_NODE && 3 !== n.nodeType;) {
      n.matches(t) && i.push(n), n = n.parentNode;
    }

    return i;
  },
  prev: function prev(e, t) {
    var i = e.previousElementSibling;

    for (; i;) {
      if (i.matches(t)) return [i];
      i = i.previousElementSibling;
    }

    return [];
  },
  next: function next(e, t) {
    var i = e.nextElementSibling;

    for (; i;) {
      if (i.matches(t)) return [i];
      i = i.nextElementSibling;
    }

    return [];
  },
  focusableChildren: function focusableChildren(e) {
    var t = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map(function (e) {
      return "".concat(e, ":not([tabindex^=\"-\"])");
    }).join(", ");
    return this.find(t, e).filter(function (e) {
      return !isDisabled(e) && isVisible(e);
    });
  }
},
    NAME$b = "carousel",
    DATA_KEY$a = "bs.carousel",
    EVENT_KEY$a = ".bs.carousel",
    DATA_API_KEY$6 = ".data-api",
    ARROW_LEFT_KEY = "ArrowLeft",
    ARROW_RIGHT_KEY = "ArrowRight",
    TOUCHEVENT_COMPAT_WAIT = 500,
    SWIPE_THRESHOLD = 40,
    Default$a = {
  interval: 5e3,
  keyboard: !0,
  slide: !1,
  pause: "hover",
  wrap: !0,
  touch: !0
},
    DefaultType$a = {
  interval: "(number|boolean)",
  keyboard: "boolean",
  slide: "(boolean|string)",
  pause: "(string|boolean)",
  wrap: "boolean",
  touch: "boolean"
},
    ORDER_NEXT = "next",
    ORDER_PREV = "prev",
    DIRECTION_LEFT = "left",
    DIRECTION_RIGHT = "right",
    KEY_TO_DIRECTION = {
  ArrowLeft: DIRECTION_RIGHT,
  ArrowRight: DIRECTION_LEFT
},
    EVENT_SLIDE = "slide.bs.carousel",
    EVENT_SLID = "slid.bs.carousel",
    EVENT_KEYDOWN = "keydown.bs.carousel",
    EVENT_MOUSEENTER = "mouseenter.bs.carousel",
    EVENT_MOUSELEAVE = "mouseleave.bs.carousel",
    EVENT_TOUCHSTART = "touchstart.bs.carousel",
    EVENT_TOUCHMOVE = "touchmove.bs.carousel",
    EVENT_TOUCHEND = "touchend.bs.carousel",
    EVENT_POINTERDOWN = "pointerdown.bs.carousel",
    EVENT_POINTERUP = "pointerup.bs.carousel",
    EVENT_DRAG_START = "dragstart.bs.carousel",
    EVENT_LOAD_DATA_API$2 = "load.bs.carousel.data-api",
    EVENT_CLICK_DATA_API$5 = "click.bs.carousel.data-api",
    CLASS_NAME_CAROUSEL = "carousel",
    CLASS_NAME_ACTIVE$2 = "active",
    CLASS_NAME_SLIDE = "slide",
    CLASS_NAME_END = "carousel-item-end",
    CLASS_NAME_START = "carousel-item-start",
    CLASS_NAME_NEXT = "carousel-item-next",
    CLASS_NAME_PREV = "carousel-item-prev",
    CLASS_NAME_POINTER_EVENT = "pointer-event",
    SELECTOR_ACTIVE$1 = ".active",
    SELECTOR_ACTIVE_ITEM = ".active.carousel-item",
    SELECTOR_ITEM = ".carousel-item",
    SELECTOR_ITEM_IMG = ".carousel-item img",
    SELECTOR_NEXT_PREV = ".carousel-item-next, .carousel-item-prev",
    SELECTOR_INDICATORS = ".carousel-indicators",
    SELECTOR_INDICATOR = "[data-bs-target]",
    SELECTOR_DATA_SLIDE = "[data-bs-slide], [data-bs-slide-to]",
    SELECTOR_DATA_RIDE = '[data-bs-ride="carousel"]',
    POINTER_TYPE_TOUCH = "touch",
    POINTER_TYPE_PEN = "pen";

var Carousel =
/*#__PURE__*/
function (_BaseComponent3) {
  _inherits(Carousel, _BaseComponent3);

  function Carousel(e, t) {
    var _this3;

    _classCallCheck(this, Carousel);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(Carousel).call(this, e)), _this3._items = null, _this3._interval = null, _this3._activeElement = null, _this3._isPaused = !1, _this3._isSliding = !1, _this3.touchTimeout = null, _this3.touchStartX = 0, _this3.touchDeltaX = 0, _this3._config = _this3._getConfig(t), _this3._indicatorsElement = SelectorEngine.findOne(SELECTOR_INDICATORS, _this3._element), _this3._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, _this3._pointerEvent = Boolean(window.PointerEvent), _this3._addEventListeners();
    return _this3;
  }

  _createClass(Carousel, [{
    key: "next",
    value: function next() {
      this._slide(ORDER_NEXT);
    }
  }, {
    key: "nextWhenVisible",
    value: function nextWhenVisible() {
      !document.hidden && isVisible(this._element) && this.next();
    }
  }, {
    key: "prev",
    value: function prev() {
      this._slide(ORDER_PREV);
    }
  }, {
    key: "pause",
    value: function pause(e) {
      e || (this._isPaused = !0), SelectorEngine.findOne(SELECTOR_NEXT_PREV, this._element) && (triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null;
    }
  }, {
    key: "cycle",
    value: function cycle(e) {
      e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config && this._config.interval && !this._isPaused && (this._updateInterval(), this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
    }
  }, {
    key: "to",
    value: function to(e) {
      var _this4 = this;

      this._activeElement = SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);

      var t = this._getItemIndex(this._activeElement);

      if (e > this._items.length - 1 || e < 0) return;
      if (this._isSliding) return void EventHandler.one(this._element, EVENT_SLID, function () {
        return _this4.to(e);
      });
      if (t === e) return this.pause(), void this.cycle();
      var i = e > t ? ORDER_NEXT : ORDER_PREV;

      this._slide(i, this._items[e]);
    }
  }, {
    key: "_getConfig",
    value: function _getConfig(e) {
      return e = _objectSpread({}, Default$a, {}, Manipulator.getDataAttributes(this._element), {}, "object" == _typeof(e) ? e : {}), typeCheckConfig(NAME$b, e, DefaultType$a), e;
    }
  }, {
    key: "_handleSwipe",
    value: function _handleSwipe() {
      var e = Math.abs(this.touchDeltaX);
      if (e <= 40) return;
      var t = e / this.touchDeltaX;
      this.touchDeltaX = 0, t && this._slide(t > 0 ? DIRECTION_RIGHT : DIRECTION_LEFT);
    }
  }, {
    key: "_addEventListeners",
    value: function _addEventListeners() {
      var _this5 = this;

      this._config.keyboard && EventHandler.on(this._element, EVENT_KEYDOWN, function (e) {
        return _this5._keydown(e);
      }), "hover" === this._config.pause && (EventHandler.on(this._element, EVENT_MOUSEENTER, function (e) {
        return _this5.pause(e);
      }), EventHandler.on(this._element, EVENT_MOUSELEAVE, function (e) {
        return _this5.cycle(e);
      })), this._config.touch && this._touchSupported && this._addTouchEventListeners();
    }
  }, {
    key: "_addTouchEventListeners",
    value: function _addTouchEventListeners() {
      var _this6 = this;

      var e = function e(_e2) {
        return _this6._pointerEvent && ("pen" === _e2.pointerType || "touch" === _e2.pointerType);
      },
          t = function t(_t2) {
        e(_t2) ? _this6.touchStartX = _t2.clientX : _this6._pointerEvent || (_this6.touchStartX = _t2.touches[0].clientX);
      },
          i = function i(e) {
        _this6.touchDeltaX = e.touches && e.touches.length > 1 ? 0 : e.touches[0].clientX - _this6.touchStartX;
      },
          n = function n(t) {
        e(t) && (_this6.touchDeltaX = t.clientX - _this6.touchStartX), _this6._handleSwipe(), "hover" === _this6._config.pause && (_this6.pause(), _this6.touchTimeout && clearTimeout(_this6.touchTimeout), _this6.touchTimeout = setTimeout(function (e) {
          return _this6.cycle(e);
        }, 500 + _this6._config.interval));
      };

      SelectorEngine.find(SELECTOR_ITEM_IMG, this._element).forEach(function (e) {
        EventHandler.on(e, EVENT_DRAG_START, function (e) {
          return e.preventDefault();
        });
      }), this._pointerEvent ? (EventHandler.on(this._element, EVENT_POINTERDOWN, function (e) {
        return t(e);
      }), EventHandler.on(this._element, EVENT_POINTERUP, function (e) {
        return n(e);
      }), this._element.classList.add("pointer-event")) : (EventHandler.on(this._element, EVENT_TOUCHSTART, function (e) {
        return t(e);
      }), EventHandler.on(this._element, EVENT_TOUCHMOVE, function (e) {
        return i(e);
      }), EventHandler.on(this._element, EVENT_TOUCHEND, function (e) {
        return n(e);
      }));
    }
  }, {
    key: "_keydown",
    value: function _keydown(e) {
      if (/input|textarea/i.test(e.target.tagName)) return;
      var t = KEY_TO_DIRECTION[e.key];
      t && (e.preventDefault(), this._slide(t));
    }
  }, {
    key: "_getItemIndex",
    value: function _getItemIndex(e) {
      return this._items = e && e.parentNode ? SelectorEngine.find(SELECTOR_ITEM, e.parentNode) : [], this._items.indexOf(e);
    }
  }, {
    key: "_getItemByOrder",
    value: function _getItemByOrder(e, t) {
      var i = e === ORDER_NEXT;
      return getNextActiveElement(this._items, t, i, this._config.wrap);
    }
  }, {
    key: "_triggerSlideEvent",
    value: function _triggerSlideEvent(e, t) {
      var i = this._getItemIndex(e),
          n = this._getItemIndex(SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element));

      return EventHandler.trigger(this._element, EVENT_SLIDE, {
        relatedTarget: e,
        direction: t,
        from: n,
        to: i
      });
    }
  }, {
    key: "_setActiveIndicatorElement",
    value: function _setActiveIndicatorElement(e) {
      if (this._indicatorsElement) {
        var t = SelectorEngine.findOne(".active", this._indicatorsElement);
        t.classList.remove("active"), t.removeAttribute("aria-current");
        var i = SelectorEngine.find("[data-bs-target]", this._indicatorsElement);

        for (var _t3 = 0; _t3 < i.length; _t3++) {
          if (Number.parseInt(i[_t3].getAttribute("data-bs-slide-to"), 10) === this._getItemIndex(e)) {
            i[_t3].classList.add("active"), i[_t3].setAttribute("aria-current", "true");
            break;
          }
        }
      }
    }
  }, {
    key: "_updateInterval",
    value: function _updateInterval() {
      var e = this._activeElement || SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);
      if (!e) return;
      var t = Number.parseInt(e.getAttribute("data-bs-interval"), 10);
      t ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = t) : this._config.interval = this._config.defaultInterval || this._config.interval;
    }
  }, {
    key: "_slide",
    value: function _slide(e, t) {
      var _this7 = this;

      var i = this._directionToOrder(e),
          n = SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element),
          s = this._getItemIndex(n),
          o = t || this._getItemByOrder(i, n),
          r = this._getItemIndex(o),
          a = Boolean(this._interval),
          l = i === ORDER_NEXT,
          c = l ? CLASS_NAME_START : CLASS_NAME_END,
          E = l ? CLASS_NAME_NEXT : CLASS_NAME_PREV,
          _ = this._orderToDirection(i);

      if (o && o.classList.contains("active")) return void (this._isSliding = !1);
      if (this._isSliding) return;
      if (this._triggerSlideEvent(o, _).defaultPrevented) return;
      if (!n || !o) return;
      this._isSliding = !0, a && this.pause(), this._setActiveIndicatorElement(o), this._activeElement = o;

      var h = function h() {
        EventHandler.trigger(_this7._element, EVENT_SLID, {
          relatedTarget: o,
          direction: _,
          from: s,
          to: r
        });
      };

      if (this._element.classList.contains("slide")) {
        o.classList.add(E), reflow(o), n.classList.add(c), o.classList.add(c);

        var _e3 = function _e3() {
          o.classList.remove(c, E), o.classList.add("active"), n.classList.remove("active", E, c), _this7._isSliding = !1, setTimeout(h, 0);
        };

        this._queueCallback(_e3, n, !0);
      } else n.classList.remove("active"), o.classList.add("active"), this._isSliding = !1, h();

      a && this.cycle();
    }
  }, {
    key: "_directionToOrder",
    value: function _directionToOrder(e) {
      return [DIRECTION_RIGHT, DIRECTION_LEFT].includes(e) ? isRTL() ? e === DIRECTION_LEFT ? ORDER_PREV : ORDER_NEXT : e === DIRECTION_LEFT ? ORDER_NEXT : ORDER_PREV : e;
    }
  }, {
    key: "_orderToDirection",
    value: function _orderToDirection(e) {
      return [ORDER_NEXT, ORDER_PREV].includes(e) ? isRTL() ? e === ORDER_PREV ? DIRECTION_LEFT : DIRECTION_RIGHT : e === ORDER_PREV ? DIRECTION_RIGHT : DIRECTION_LEFT : e;
    }
  }], [{
    key: "carouselInterface",
    value: function carouselInterface(e, t) {
      var i = Carousel.getOrCreateInstance(e, t);
      var n = i._config;
      "object" == _typeof(t) && (n = _objectSpread({}, n, {}, t));
      var s = "string" == typeof t ? t : n.slide;
      if ("number" == typeof t) i.to(t);else if ("string" == typeof s) {
        if (void 0 === i[s]) throw new TypeError("No method named \"".concat(s, "\""));
        i[s]();
      } else n.interval && n.ride && (i.pause(), i.cycle());
    }
  }, {
    key: "jQueryInterface",
    value: function jQueryInterface(e) {
      return this.each(function () {
        Carousel.carouselInterface(this, e);
      });
    }
  }, {
    key: "dataApiClickHandler",
    value: function dataApiClickHandler(e) {
      var t = getElementFromSelector(this);
      if (!t || !t.classList.contains("carousel")) return;

      var i = _objectSpread({}, Manipulator.getDataAttributes(t), {}, Manipulator.getDataAttributes(this)),
          n = this.getAttribute("data-bs-slide-to");

      n && (i.interval = !1), Carousel.carouselInterface(t, i), n && Carousel.getInstance(t).to(n), e.preventDefault();
    }
  }, {
    key: "Default",
    get: function get() {
      return Default$a;
    }
  }, {
    key: "NAME",
    get: function get() {
      return NAME$b;
    }
  }]);

  return Carousel;
}(BaseComponent);

exports.Carousel = Carousel;
EventHandler.on(document, EVENT_CLICK_DATA_API$5, SELECTOR_DATA_SLIDE, Carousel.dataApiClickHandler), EventHandler.on(window, EVENT_LOAD_DATA_API$2, function () {
  var e = SelectorEngine.find(SELECTOR_DATA_RIDE);

  for (var t = 0, i = e.length; t < i; t++) {
    Carousel.carouselInterface(e[t], Carousel.getInstance(e[t]));
  }
}), defineJQueryPlugin(Carousel);
var NAME$a = "collapse",
    DATA_KEY$9 = "bs.collapse",
    EVENT_KEY$9 = ".bs.collapse",
    DATA_API_KEY$5 = ".data-api",
    Default$9 = {
  toggle: !0,
  parent: null
},
    DefaultType$9 = {
  toggle: "boolean",
  parent: "(null|element)"
},
    EVENT_SHOW$5 = "show.bs.collapse",
    EVENT_SHOWN$5 = "shown.bs.collapse",
    EVENT_HIDE$5 = "hide.bs.collapse",
    EVENT_HIDDEN$5 = "hidden.bs.collapse",
    EVENT_CLICK_DATA_API$4 = "click.bs.collapse.data-api",
    CLASS_NAME_SHOW$7 = "show",
    CLASS_NAME_COLLAPSE = "collapse",
    CLASS_NAME_COLLAPSING = "collapsing",
    CLASS_NAME_COLLAPSED = "collapsed",
    CLASS_NAME_DEEPER_CHILDREN = ":scope .collapse .collapse",
    CLASS_NAME_HORIZONTAL = "collapse-horizontal",
    WIDTH = "width",
    HEIGHT = "height",
    SELECTOR_ACTIVES = ".collapse.show, .collapse.collapsing",
    SELECTOR_DATA_TOGGLE$4 = '[data-bs-toggle="collapse"]';

var Collapse =
/*#__PURE__*/
function (_BaseComponent4) {
  _inherits(Collapse, _BaseComponent4);

  function Collapse(e, t) {
    var _this8;

    _classCallCheck(this, Collapse);

    _this8 = _possibleConstructorReturn(this, _getPrototypeOf(Collapse).call(this, e)), _this8._isTransitioning = !1, _this8._config = _this8._getConfig(t), _this8._triggerArray = [];
    var i = SelectorEngine.find(SELECTOR_DATA_TOGGLE$4);

    for (var _e4 = 0, _t4 = i.length; _e4 < _t4; _e4++) {
      var _t5 = i[_e4],
          n = getSelectorFromElement(_t5),
          s = SelectorEngine.find(n).filter(function (e) {
        return e === _this8._element;
      });
      null !== n && s.length && (_this8._selector = n, _this8._triggerArray.push(_t5));
    }

    _this8._initializeChildren(), _this8._config.parent || _this8._addAriaAndCollapsedClass(_this8._triggerArray, _this8._isShown()), _this8._config.toggle && _this8.toggle();
    return _this8;
  }

  _createClass(Collapse, [{
    key: "toggle",
    value: function toggle() {
      this._isShown() ? this.hide() : this.show();
    }
  }, {
    key: "show",
    value: function show() {
      var _this9 = this;

      if (this._isTransitioning || this._isShown()) return;
      var e,
          t = [];

      if (this._config.parent) {
        var _e5 = SelectorEngine.find(CLASS_NAME_DEEPER_CHILDREN, this._config.parent);

        t = SelectorEngine.find(SELECTOR_ACTIVES, this._config.parent).filter(function (t) {
          return !_e5.includes(t);
        });
      }

      var i = SelectorEngine.findOne(this._selector);

      if (t.length) {
        var _n3 = t.find(function (e) {
          return i !== e;
        });

        if (e = _n3 ? Collapse.getInstance(_n3) : null, e && e._isTransitioning) return;
      }

      if (EventHandler.trigger(this._element, EVENT_SHOW$5).defaultPrevented) return;
      t.forEach(function (t) {
        i !== t && Collapse.getOrCreateInstance(t, {
          toggle: !1
        }).hide(), e || Data.set(t, DATA_KEY$9, null);
      });

      var n = this._getDimension();

      this._element.classList.remove("collapse"), this._element.classList.add("collapsing"), this._element.style[n] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
      var s = "scroll".concat(n[0].toUpperCase() + n.slice(1));
      this._queueCallback(function () {
        _this9._isTransitioning = !1, _this9._element.classList.remove("collapsing"), _this9._element.classList.add("collapse", "show"), _this9._element.style[n] = "", EventHandler.trigger(_this9._element, EVENT_SHOWN$5);
      }, this._element, !0), this._element.style[n] = "".concat(this._element[s], "px");
    }
  }, {
    key: "hide",
    value: function hide() {
      var _this10 = this;

      if (this._isTransitioning || !this._isShown()) return;
      if (EventHandler.trigger(this._element, EVENT_HIDE$5).defaultPrevented) return;

      var e = this._getDimension();

      this._element.style[e] = "".concat(this._element.getBoundingClientRect()[e], "px"), reflow(this._element), this._element.classList.add("collapsing"), this._element.classList.remove("collapse", "show");
      var t = this._triggerArray.length;

      for (var _e6 = 0; _e6 < t; _e6++) {
        var _t6 = this._triggerArray[_e6],
            _i2 = getElementFromSelector(_t6);

        _i2 && !this._isShown(_i2) && this._addAriaAndCollapsedClass([_t6], !1);
      }

      this._isTransitioning = !0, this._element.style[e] = "", this._queueCallback(function () {
        _this10._isTransitioning = !1, _this10._element.classList.remove("collapsing"), _this10._element.classList.add("collapse"), EventHandler.trigger(_this10._element, EVENT_HIDDEN$5);
      }, this._element, !0);
    }
  }, {
    key: "_isShown",
    value: function _isShown() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._element;
      return e.classList.contains("show");
    }
  }, {
    key: "_getConfig",
    value: function _getConfig(e) {
      return (e = _objectSpread({}, Default$9, {}, Manipulator.getDataAttributes(this._element), {}, e)).toggle = Boolean(e.toggle), e.parent = getElement(e.parent), typeCheckConfig(NAME$a, e, DefaultType$9), e;
    }
  }, {
    key: "_getDimension",
    value: function _getDimension() {
      return this._element.classList.contains("collapse-horizontal") ? WIDTH : HEIGHT;
    }
  }, {
    key: "_initializeChildren",
    value: function _initializeChildren() {
      var _this11 = this;

      if (!this._config.parent) return;
      var e = SelectorEngine.find(CLASS_NAME_DEEPER_CHILDREN, this._config.parent);
      SelectorEngine.find(SELECTOR_DATA_TOGGLE$4, this._config.parent).filter(function (t) {
        return !e.includes(t);
      }).forEach(function (e) {
        var t = getElementFromSelector(e);
        t && _this11._addAriaAndCollapsedClass([e], _this11._isShown(t));
      });
    }
  }, {
    key: "_addAriaAndCollapsedClass",
    value: function _addAriaAndCollapsedClass(e, t) {
      e.length && e.forEach(function (e) {
        t ? e.classList.remove("collapsed") : e.classList.add("collapsed"), e.setAttribute("aria-expanded", t);
      });
    }
  }], [{
    key: "jQueryInterface",
    value: function jQueryInterface(e) {
      return this.each(function () {
        var t = {};
        "string" == typeof e && /show|hide/.test(e) && (t.toggle = !1);
        var i = Collapse.getOrCreateInstance(this, t);

        if ("string" == typeof e) {
          if (void 0 === i[e]) throw new TypeError("No method named \"".concat(e, "\""));
          i[e]();
        }
      });
    }
  }, {
    key: "Default",
    get: function get() {
      return Default$9;
    }
  }, {
    key: "NAME",
    get: function get() {
      return NAME$a;
    }
  }]);

  return Collapse;
}(BaseComponent);

exports.Collapse = Collapse;
EventHandler.on(document, EVENT_CLICK_DATA_API$4, SELECTOR_DATA_TOGGLE$4, function (e) {
  ("A" === e.target.tagName || e.delegateTarget && "A" === e.delegateTarget.tagName) && e.preventDefault();
  var t = getSelectorFromElement(this);
  SelectorEngine.find(t).forEach(function (e) {
    Collapse.getOrCreateInstance(e, {
      toggle: !1
    }).toggle();
  });
}), defineJQueryPlugin(Collapse);
var NAME$9 = "dropdown",
    DATA_KEY$8 = "bs.dropdown",
    EVENT_KEY$8 = ".bs.dropdown",
    DATA_API_KEY$4 = ".data-api",
    ESCAPE_KEY$2 = "Escape",
    SPACE_KEY = "Space",
    TAB_KEY$1 = "Tab",
    ARROW_UP_KEY = "ArrowUp",
    ARROW_DOWN_KEY = "ArrowDown",
    RIGHT_MOUSE_BUTTON = 2,
    REGEXP_KEYDOWN = new RegExp("ArrowUp|ArrowDown|Escape"),
    EVENT_HIDE$4 = "hide.bs.dropdown",
    EVENT_HIDDEN$4 = "hidden.bs.dropdown",
    EVENT_SHOW$4 = "show.bs.dropdown",
    EVENT_SHOWN$4 = "shown.bs.dropdown",
    EVENT_CLICK_DATA_API$3 = "click.bs.dropdown.data-api",
    EVENT_KEYDOWN_DATA_API = "keydown.bs.dropdown.data-api",
    EVENT_KEYUP_DATA_API = "keyup.bs.dropdown.data-api",
    CLASS_NAME_SHOW$6 = "show",
    CLASS_NAME_DROPUP = "dropup",
    CLASS_NAME_DROPEND = "dropend",
    CLASS_NAME_DROPSTART = "dropstart",
    CLASS_NAME_NAVBAR = "navbar",
    SELECTOR_DATA_TOGGLE$3 = '[data-bs-toggle="dropdown"]',
    SELECTOR_MENU = ".dropdown-menu",
    SELECTOR_NAVBAR_NAV = ".navbar-nav",
    SELECTOR_VISIBLE_ITEMS = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
    PLACEMENT_TOP = isRTL() ? "top-end" : "top-start",
    PLACEMENT_TOPEND = isRTL() ? "top-start" : "top-end",
    PLACEMENT_BOTTOM = isRTL() ? "bottom-end" : "bottom-start",
    PLACEMENT_BOTTOMEND = isRTL() ? "bottom-start" : "bottom-end",
    PLACEMENT_RIGHT = isRTL() ? "left-start" : "right-start",
    PLACEMENT_LEFT = isRTL() ? "right-start" : "left-start",
    Default$8 = {
  offset: [0, 2],
  boundary: "clippingParents",
  reference: "toggle",
  display: "dynamic",
  popperConfig: null,
  autoClose: !0
},
    DefaultType$8 = {
  offset: "(array|string|function)",
  boundary: "(string|element)",
  reference: "(string|element|object)",
  display: "string",
  popperConfig: "(null|object|function)",
  autoClose: "(boolean|string)"
};

var Dropdown =
/*#__PURE__*/
function (_BaseComponent5) {
  _inherits(Dropdown, _BaseComponent5);

  function Dropdown(e, t) {
    var _this12;

    _classCallCheck(this, Dropdown);

    _this12 = _possibleConstructorReturn(this, _getPrototypeOf(Dropdown).call(this, e)), _this12._popper = null, _this12._config = _this12._getConfig(t), _this12._menu = _this12._getMenuElement(), _this12._inNavbar = _this12._detectNavbar();
    return _this12;
  }

  _createClass(Dropdown, [{
    key: "toggle",
    value: function toggle() {
      return this._isShown() ? this.hide() : this.show();
    }
  }, {
    key: "show",
    value: function show() {
      var _ref4;

      if (isDisabled(this._element) || this._isShown(this._menu)) return;
      var e = {
        relatedTarget: this._element
      };
      if (EventHandler.trigger(this._element, EVENT_SHOW$4, e).defaultPrevented) return;
      var t = Dropdown.getParentFromElement(this._element);
      this._inNavbar ? Manipulator.setDataAttribute(this._menu, "popper", "none") : this._createPopper(t), "ontouchstart" in document.documentElement && !t.closest(".navbar-nav") && (_ref4 = []).concat.apply(_ref4, _toConsumableArray(document.body.children)).forEach(function (e) {
        return EventHandler.on(e, "mouseover", noop);
      }), this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add("show"), this._element.classList.add("show"), EventHandler.trigger(this._element, EVENT_SHOWN$4, e);
    }
  }, {
    key: "hide",
    value: function hide() {
      if (isDisabled(this._element) || !this._isShown(this._menu)) return;
      var e = {
        relatedTarget: this._element
      };

      this._completeHide(e);
    }
  }, {
    key: "dispose",
    value: function dispose() {
      this._popper && this._popper.destroy(), _get(_getPrototypeOf(Dropdown.prototype), "dispose", this).call(this);
    }
  }, {
    key: "update",
    value: function update() {
      this._inNavbar = this._detectNavbar(), this._popper && this._popper.update();
    }
  }, {
    key: "_completeHide",
    value: function _completeHide(e) {
      var _ref5;

      EventHandler.trigger(this._element, EVENT_HIDE$4, e).defaultPrevented || ("ontouchstart" in document.documentElement && (_ref5 = []).concat.apply(_ref5, _toConsumableArray(document.body.children)).forEach(function (e) {
        return EventHandler.off(e, "mouseover", noop);
      }), this._popper && this._popper.destroy(), this._menu.classList.remove("show"), this._element.classList.remove("show"), this._element.setAttribute("aria-expanded", "false"), Manipulator.removeDataAttribute(this._menu, "popper"), EventHandler.trigger(this._element, EVENT_HIDDEN$4, e));
    }
  }, {
    key: "_getConfig",
    value: function _getConfig(e) {
      if (e = _objectSpread({}, this.constructor.Default, {}, Manipulator.getDataAttributes(this._element), {}, e), typeCheckConfig(NAME$9, e, this.constructor.DefaultType), "object" == _typeof(e.reference) && !isElement(e.reference) && "function" != typeof e.reference.getBoundingClientRect) throw new TypeError("".concat(NAME$9.toUpperCase(), ": Option \"reference\" provided type \"object\" without a required \"getBoundingClientRect\" method."));
      return e;
    }
  }, {
    key: "_createPopper",
    value: function _createPopper(e) {
      if (void 0 === Popper) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
      var t = this._element;
      "parent" === this._config.reference ? t = e : isElement(this._config.reference) ? t = getElement(this._config.reference) : "object" == _typeof(this._config.reference) && (t = this._config.reference);

      var i = this._getPopperConfig(),
          n = i.modifiers.find(function (e) {
        return "applyStyles" === e.name && !1 === e.enabled;
      });

      this._popper = Popper.createPopper(t, this._menu, i), n && Manipulator.setDataAttribute(this._menu, "popper", "static");
    }
  }, {
    key: "_isShown",
    value: function _isShown() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._element;
      return e.classList.contains("show");
    }
  }, {
    key: "_getMenuElement",
    value: function _getMenuElement() {
      return SelectorEngine.next(this._element, SELECTOR_MENU)[0];
    }
  }, {
    key: "_getPlacement",
    value: function _getPlacement() {
      var e = this._element.parentNode;
      if (e.classList.contains("dropend")) return PLACEMENT_RIGHT;
      if (e.classList.contains("dropstart")) return PLACEMENT_LEFT;
      var t = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
      return e.classList.contains("dropup") ? t ? PLACEMENT_TOPEND : PLACEMENT_TOP : t ? PLACEMENT_BOTTOMEND : PLACEMENT_BOTTOM;
    }
  }, {
    key: "_detectNavbar",
    value: function _detectNavbar() {
      return null !== this._element.closest(".navbar");
    }
  }, {
    key: "_getOffset",
    value: function _getOffset() {
      var _this13 = this;

      var e = this._config.offset;
      return "string" == typeof e ? e.split(",").map(function (e) {
        return Number.parseInt(e, 10);
      }) : "function" == typeof e ? function (t) {
        return e(t, _this13._element);
      } : e;
    }
  }, {
    key: "_getPopperConfig",
    value: function _getPopperConfig() {
      var e = {
        placement: this._getPlacement(),
        modifiers: [{
          name: "preventOverflow",
          options: {
            boundary: this._config.boundary
          }
        }, {
          name: "offset",
          options: {
            offset: this._getOffset()
          }
        }]
      };
      return "static" === this._config.display && (e.modifiers = [{
        name: "applyStyles",
        enabled: !1
      }]), _objectSpread({}, e, {}, "function" == typeof this._config.popperConfig ? this._config.popperConfig(e) : this._config.popperConfig);
    }
  }, {
    key: "_selectMenuItem",
    value: function _selectMenuItem(_ref6) {
      var e = _ref6.key,
          t = _ref6.target;
      var i = SelectorEngine.find(SELECTOR_VISIBLE_ITEMS, this._menu).filter(isVisible);
      i.length && getNextActiveElement(i, t, "ArrowDown" === e, !i.includes(t)).focus();
    }
  }], [{
    key: "jQueryInterface",
    value: function jQueryInterface(e) {
      return this.each(function () {
        var t = Dropdown.getOrCreateInstance(this, e);

        if ("string" == typeof e) {
          if (void 0 === t[e]) throw new TypeError("No method named \"".concat(e, "\""));
          t[e]();
        }
      });
    }
  }, {
    key: "clearMenus",
    value: function clearMenus(e) {
      if (e && (2 === e.button || "keyup" === e.type && "Tab" !== e.key)) return;
      var t = SelectorEngine.find(SELECTOR_DATA_TOGGLE$3);

      for (var _i3 = 0, n = t.length; _i3 < n; _i3++) {
        var _n4 = Dropdown.getInstance(t[_i3]);

        if (!_n4 || !1 === _n4._config.autoClose) continue;
        if (!_n4._isShown()) continue;
        var s = {
          relatedTarget: _n4._element
        };

        if (e) {
          var _t7 = e.composedPath(),
              _i4 = _t7.includes(_n4._menu);

          if (_t7.includes(_n4._element) || "inside" === _n4._config.autoClose && !_i4 || "outside" === _n4._config.autoClose && _i4) continue;
          if (_n4._menu.contains(e.target) && ("keyup" === e.type && "Tab" === e.key || /input|select|option|textarea|form/i.test(e.target.tagName))) continue;
          "click" === e.type && (s.clickEvent = e);
        }

        _n4._completeHide(s);
      }
    }
  }, {
    key: "getParentFromElement",
    value: function getParentFromElement(e) {
      return getElementFromSelector(e) || e.parentNode;
    }
  }, {
    key: "dataApiKeydownHandler",
    value: function dataApiKeydownHandler(e) {
      if (/input|textarea/i.test(e.target.tagName) ? "Space" === e.key || "Escape" !== e.key && ("ArrowDown" !== e.key && "ArrowUp" !== e.key || e.target.closest(SELECTOR_MENU)) : !REGEXP_KEYDOWN.test(e.key)) return;
      var t = this.classList.contains("show");
      if (!t && "Escape" === e.key) return;
      if (e.preventDefault(), e.stopPropagation(), isDisabled(this)) return;
      var i = this.matches(SELECTOR_DATA_TOGGLE$3) ? this : SelectorEngine.prev(this, SELECTOR_DATA_TOGGLE$3)[0],
          n = Dropdown.getOrCreateInstance(i);
      if ("Escape" !== e.key) return "ArrowUp" === e.key || "ArrowDown" === e.key ? (t || n.show(), void n._selectMenuItem(e)) : void (t && "Space" !== e.key || Dropdown.clearMenus());
      n.hide();
    }
  }, {
    key: "Default",
    get: function get() {
      return Default$8;
    }
  }, {
    key: "DefaultType",
    get: function get() {
      return DefaultType$8;
    }
  }, {
    key: "NAME",
    get: function get() {
      return NAME$9;
    }
  }]);

  return Dropdown;
}(BaseComponent);

exports.Dropdown = Dropdown;
EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_DATA_TOGGLE$3, Dropdown.dataApiKeydownHandler), EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_MENU, Dropdown.dataApiKeydownHandler), EventHandler.on(document, EVENT_CLICK_DATA_API$3, Dropdown.clearMenus), EventHandler.on(document, EVENT_KEYUP_DATA_API, Dropdown.clearMenus), EventHandler.on(document, EVENT_CLICK_DATA_API$3, SELECTOR_DATA_TOGGLE$3, function (e) {
  e.preventDefault(), Dropdown.getOrCreateInstance(this).toggle();
}), defineJQueryPlugin(Dropdown);
var SELECTOR_FIXED_CONTENT = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
    SELECTOR_STICKY_CONTENT = ".sticky-top";

var ScrollBarHelper =
/*#__PURE__*/
function () {
  function ScrollBarHelper() {
    _classCallCheck(this, ScrollBarHelper);

    this._element = document.body;
  }

  _createClass(ScrollBarHelper, [{
    key: "getWidth",
    value: function getWidth() {
      var e = document.documentElement.clientWidth;
      return Math.abs(window.innerWidth - e);
    }
  }, {
    key: "hide",
    value: function hide() {
      var e = this.getWidth();
      this._disableOverFlow(), this._setElementAttributes(this._element, "paddingRight", function (t) {
        return t + e;
      }), this._setElementAttributes(SELECTOR_FIXED_CONTENT, "paddingRight", function (t) {
        return t + e;
      }), this._setElementAttributes(".sticky-top", "marginRight", function (t) {
        return t - e;
      });
    }
  }, {
    key: "_disableOverFlow",
    value: function _disableOverFlow() {
      this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden";
    }
  }, {
    key: "_setElementAttributes",
    value: function _setElementAttributes(e, t, i) {
      var _this14 = this;

      var n = this.getWidth();

      this._applyManipulationCallback(e, function (e) {
        if (e !== _this14._element && window.innerWidth > e.clientWidth + n) return;

        _this14._saveInitialAttribute(e, t);

        var s = window.getComputedStyle(e)[t];
        e.style[t] = "".concat(i(Number.parseFloat(s)), "px");
      });
    }
  }, {
    key: "reset",
    value: function reset() {
      this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, "paddingRight"), this._resetElementAttributes(SELECTOR_FIXED_CONTENT, "paddingRight"), this._resetElementAttributes(".sticky-top", "marginRight");
    }
  }, {
    key: "_saveInitialAttribute",
    value: function _saveInitialAttribute(e, t) {
      var i = e.style[t];
      i && Manipulator.setDataAttribute(e, t, i);
    }
  }, {
    key: "_resetElementAttributes",
    value: function _resetElementAttributes(e, t) {
      this._applyManipulationCallback(e, function (e) {
        var i = Manipulator.getDataAttribute(e, t);
        void 0 === i ? e.style.removeProperty(t) : (Manipulator.removeDataAttribute(e, t), e.style[t] = i);
      });
    }
  }, {
    key: "_applyManipulationCallback",
    value: function _applyManipulationCallback(e, t) {
      isElement(e) ? t(e) : SelectorEngine.find(e, this._element).forEach(t);
    }
  }, {
    key: "isOverflowing",
    value: function isOverflowing() {
      return this.getWidth() > 0;
    }
  }]);

  return ScrollBarHelper;
}();

var Default$7 = {
  className: "modal-backdrop",
  isVisible: !0,
  isAnimated: !1,
  rootElement: "body",
  clickCallback: null
},
    DefaultType$7 = {
  className: "string",
  isVisible: "boolean",
  isAnimated: "boolean",
  rootElement: "(element|string)",
  clickCallback: "(function|null)"
},
    NAME$8 = "backdrop",
    CLASS_NAME_FADE$4 = "fade",
    CLASS_NAME_SHOW$5 = "show",
    EVENT_MOUSEDOWN = "mousedown.bs.backdrop";

var Backdrop =
/*#__PURE__*/
function () {
  function Backdrop(e) {
    _classCallCheck(this, Backdrop);

    this._config = this._getConfig(e), this._isAppended = !1, this._element = null;
  }

  _createClass(Backdrop, [{
    key: "show",
    value: function show(e) {
      this._config.isVisible ? (this._append(), this._config.isAnimated && reflow(this._getElement()), this._getElement().classList.add("show"), this._emulateAnimation(function () {
        execute(e);
      })) : execute(e);
    }
  }, {
    key: "hide",
    value: function hide(e) {
      var _this15 = this;

      this._config.isVisible ? (this._getElement().classList.remove("show"), this._emulateAnimation(function () {
        _this15.dispose(), execute(e);
      })) : execute(e);
    }
  }, {
    key: "_getElement",
    value: function _getElement() {
      if (!this._element) {
        var e = document.createElement("div");
        e.className = this._config.className, this._config.isAnimated && e.classList.add("fade"), this._element = e;
      }

      return this._element;
    }
  }, {
    key: "_getConfig",
    value: function _getConfig(e) {
      return (e = _objectSpread({}, Default$7, {}, "object" == _typeof(e) ? e : {})).rootElement = getElement(e.rootElement), typeCheckConfig(NAME$8, e, DefaultType$7), e;
    }
  }, {
    key: "_append",
    value: function _append() {
      var _this16 = this;

      this._isAppended || (this._config.rootElement.append(this._getElement()), EventHandler.on(this._getElement(), EVENT_MOUSEDOWN, function () {
        execute(_this16._config.clickCallback);
      }), this._isAppended = !0);
    }
  }, {
    key: "dispose",
    value: function dispose() {
      this._isAppended && (EventHandler.off(this._element, EVENT_MOUSEDOWN), this._element.remove(), this._isAppended = !1);
    }
  }, {
    key: "_emulateAnimation",
    value: function _emulateAnimation(e) {
      executeAfterTransition(e, this._getElement(), this._config.isAnimated);
    }
  }]);

  return Backdrop;
}();

var Default$6 = {
  trapElement: null,
  autofocus: !0
},
    DefaultType$6 = {
  trapElement: "element",
  autofocus: "boolean"
},
    NAME$7 = "focustrap",
    DATA_KEY$7 = "bs.focustrap",
    EVENT_KEY$7 = ".bs.focustrap",
    EVENT_FOCUSIN$1 = "focusin.bs.focustrap",
    EVENT_KEYDOWN_TAB = "keydown.tab.bs.focustrap",
    TAB_KEY = "Tab",
    TAB_NAV_FORWARD = "forward",
    TAB_NAV_BACKWARD = "backward";

var FocusTrap =
/*#__PURE__*/
function () {
  function FocusTrap(e) {
    _classCallCheck(this, FocusTrap);

    this._config = this._getConfig(e), this._isActive = !1, this._lastTabNavDirection = null;
  }

  _createClass(FocusTrap, [{
    key: "activate",
    value: function activate() {
      var _this17 = this;

      var _this$_config = this._config,
          e = _this$_config.trapElement,
          t = _this$_config.autofocus;
      this._isActive || (t && e.focus(), EventHandler.off(document, EVENT_KEY$7), EventHandler.on(document, EVENT_FOCUSIN$1, function (e) {
        return _this17._handleFocusin(e);
      }), EventHandler.on(document, EVENT_KEYDOWN_TAB, function (e) {
        return _this17._handleKeydown(e);
      }), this._isActive = !0);
    }
  }, {
    key: "deactivate",
    value: function deactivate() {
      this._isActive && (this._isActive = !1, EventHandler.off(document, EVENT_KEY$7));
    }
  }, {
    key: "_handleFocusin",
    value: function _handleFocusin(e) {
      var t = e.target,
          i = this._config.trapElement;
      if (t === document || t === i || i.contains(t)) return;
      var n = SelectorEngine.focusableChildren(i);
      0 === n.length ? i.focus() : "backward" === this._lastTabNavDirection ? n[n.length - 1].focus() : n[0].focus();
    }
  }, {
    key: "_handleKeydown",
    value: function _handleKeydown(e) {
      "Tab" === e.key && (this._lastTabNavDirection = e.shiftKey ? "backward" : "forward");
    }
  }, {
    key: "_getConfig",
    value: function _getConfig(e) {
      return e = _objectSpread({}, Default$6, {}, "object" == _typeof(e) ? e : {}), typeCheckConfig(NAME$7, e, DefaultType$6), e;
    }
  }]);

  return FocusTrap;
}();

var NAME$6 = "modal",
    DATA_KEY$6 = "bs.modal",
    EVENT_KEY$6 = ".bs.modal",
    DATA_API_KEY$3 = ".data-api",
    ESCAPE_KEY$1 = "Escape",
    Default$5 = {
  backdrop: !0,
  keyboard: !0,
  focus: !0
},
    DefaultType$5 = {
  backdrop: "(boolean|string)",
  keyboard: "boolean",
  focus: "boolean"
},
    EVENT_HIDE$3 = "hide.bs.modal",
    EVENT_HIDE_PREVENTED = "hidePrevented.bs.modal",
    EVENT_HIDDEN$3 = "hidden.bs.modal",
    EVENT_SHOW$3 = "show.bs.modal",
    EVENT_SHOWN$3 = "shown.bs.modal",
    EVENT_RESIZE = "resize.bs.modal",
    EVENT_CLICK_DISMISS = "click.dismiss.bs.modal",
    EVENT_KEYDOWN_DISMISS$1 = "keydown.dismiss.bs.modal",
    EVENT_MOUSEUP_DISMISS = "mouseup.dismiss.bs.modal",
    EVENT_MOUSEDOWN_DISMISS = "mousedown.dismiss.bs.modal",
    EVENT_CLICK_DATA_API$2 = "click.bs.modal.data-api",
    CLASS_NAME_OPEN = "modal-open",
    CLASS_NAME_FADE$3 = "fade",
    CLASS_NAME_SHOW$4 = "show",
    CLASS_NAME_STATIC = "modal-static",
    OPEN_SELECTOR$1 = ".modal.show",
    SELECTOR_DIALOG = ".modal-dialog",
    SELECTOR_MODAL_BODY = ".modal-body",
    SELECTOR_DATA_TOGGLE$2 = '[data-bs-toggle="modal"]';

var Modal =
/*#__PURE__*/
function (_BaseComponent6) {
  _inherits(Modal, _BaseComponent6);

  function Modal(e, t) {
    var _this18;

    _classCallCheck(this, Modal);

    _this18 = _possibleConstructorReturn(this, _getPrototypeOf(Modal).call(this, e)), _this18._config = _this18._getConfig(t), _this18._dialog = SelectorEngine.findOne(".modal-dialog", _this18._element), _this18._backdrop = _this18._initializeBackDrop(), _this18._focustrap = _this18._initializeFocusTrap(), _this18._isShown = !1, _this18._ignoreBackdropClick = !1, _this18._isTransitioning = !1, _this18._scrollBar = new ScrollBarHelper();
    return _this18;
  }

  _createClass(Modal, [{
    key: "toggle",
    value: function toggle(e) {
      return this._isShown ? this.hide() : this.show(e);
    }
  }, {
    key: "show",
    value: function show(e) {
      var _this19 = this;

      this._isShown || this._isTransitioning || EventHandler.trigger(this._element, EVENT_SHOW$3, {
        relatedTarget: e
      }).defaultPrevented || (this._isShown = !0, this._isAnimated() && (this._isTransitioning = !0), this._scrollBar.hide(), document.body.classList.add("modal-open"), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), EventHandler.on(this._dialog, EVENT_MOUSEDOWN_DISMISS, function () {
        EventHandler.one(_this19._element, EVENT_MOUSEUP_DISMISS, function (e) {
          e.target === _this19._element && (_this19._ignoreBackdropClick = !0);
        });
      }), this._showBackdrop(function () {
        return _this19._showElement(e);
      }));
    }
  }, {
    key: "hide",
    value: function hide() {
      var _this20 = this;

      if (!this._isShown || this._isTransitioning) return;
      if (EventHandler.trigger(this._element, EVENT_HIDE$3).defaultPrevented) return;
      this._isShown = !1;

      var e = this._isAnimated();

      e && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), this._focustrap.deactivate(), this._element.classList.remove("show"), EventHandler.off(this._element, EVENT_CLICK_DISMISS), EventHandler.off(this._dialog, EVENT_MOUSEDOWN_DISMISS), this._queueCallback(function () {
        return _this20._hideModal();
      }, this._element, e);
    }
  }, {
    key: "dispose",
    value: function dispose() {
      [window, this._dialog].forEach(function (e) {
        return EventHandler.off(e, ".bs.modal");
      }), this._backdrop.dispose(), this._focustrap.deactivate(), _get(_getPrototypeOf(Modal.prototype), "dispose", this).call(this);
    }
  }, {
    key: "handleUpdate",
    value: function handleUpdate() {
      this._adjustDialog();
    }
  }, {
    key: "_initializeBackDrop",
    value: function _initializeBackDrop() {
      return new Backdrop({
        isVisible: Boolean(this._config.backdrop),
        isAnimated: this._isAnimated()
      });
    }
  }, {
    key: "_initializeFocusTrap",
    value: function _initializeFocusTrap() {
      return new FocusTrap({
        trapElement: this._element
      });
    }
  }, {
    key: "_getConfig",
    value: function _getConfig(e) {
      return e = _objectSpread({}, Default$5, {}, Manipulator.getDataAttributes(this._element), {}, "object" == _typeof(e) ? e : {}), typeCheckConfig(NAME$6, e, DefaultType$5), e;
    }
  }, {
    key: "_showElement",
    value: function _showElement(e) {
      var _this21 = this;

      var t = this._isAnimated(),
          i = SelectorEngine.findOne(".modal-body", this._dialog);

      this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0, i && (i.scrollTop = 0), t && reflow(this._element), this._element.classList.add("show"), this._queueCallback(function () {
        _this21._config.focus && _this21._focustrap.activate(), _this21._isTransitioning = !1, EventHandler.trigger(_this21._element, EVENT_SHOWN$3, {
          relatedTarget: e
        });
      }, this._dialog, t);
    }
  }, {
    key: "_setEscapeEvent",
    value: function _setEscapeEvent() {
      var _this22 = this;

      this._isShown ? EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS$1, function (e) {
        _this22._config.keyboard && "Escape" === e.key ? (e.preventDefault(), _this22.hide()) : _this22._config.keyboard || "Escape" !== e.key || _this22._triggerBackdropTransition();
      }) : EventHandler.off(this._element, EVENT_KEYDOWN_DISMISS$1);
    }
  }, {
    key: "_setResizeEvent",
    value: function _setResizeEvent() {
      var _this23 = this;

      this._isShown ? EventHandler.on(window, EVENT_RESIZE, function () {
        return _this23._adjustDialog();
      }) : EventHandler.off(window, EVENT_RESIZE);
    }
  }, {
    key: "_hideModal",
    value: function _hideModal() {
      var _this24 = this;

      this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide(function () {
        document.body.classList.remove("modal-open"), _this24._resetAdjustments(), _this24._scrollBar.reset(), EventHandler.trigger(_this24._element, EVENT_HIDDEN$3);
      });
    }
  }, {
    key: "_showBackdrop",
    value: function _showBackdrop(e) {
      var _this25 = this;

      EventHandler.on(this._element, EVENT_CLICK_DISMISS, function (e) {
        _this25._ignoreBackdropClick ? _this25._ignoreBackdropClick = !1 : e.target === e.currentTarget && (!0 === _this25._config.backdrop ? _this25.hide() : "static" === _this25._config.backdrop && _this25._triggerBackdropTransition());
      }), this._backdrop.show(e);
    }
  }, {
    key: "_isAnimated",
    value: function _isAnimated() {
      return this._element.classList.contains("fade");
    }
  }, {
    key: "_triggerBackdropTransition",
    value: function _triggerBackdropTransition() {
      var _this26 = this;

      if (EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED).defaultPrevented) return;
      var _this$_element = this._element,
          e = _this$_element.classList,
          t = _this$_element.scrollHeight,
          i = _this$_element.style,
          n = t > document.documentElement.clientHeight;
      !n && "hidden" === i.overflowY || e.contains("modal-static") || (n || (i.overflowY = "hidden"), e.add("modal-static"), this._queueCallback(function () {
        e.remove("modal-static"), n || _this26._queueCallback(function () {
          i.overflowY = "";
        }, _this26._dialog);
      }, this._dialog), this._element.focus());
    }
  }, {
    key: "_adjustDialog",
    value: function _adjustDialog() {
      var e = this._element.scrollHeight > document.documentElement.clientHeight,
          t = this._scrollBar.getWidth(),
          i = t > 0;

      (!i && e && !isRTL() || i && !e && isRTL()) && (this._element.style.paddingLeft = "".concat(t, "px")), (i && !e && !isRTL() || !i && e && isRTL()) && (this._element.style.paddingRight = "".concat(t, "px"));
    }
  }, {
    key: "_resetAdjustments",
    value: function _resetAdjustments() {
      this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
    }
  }], [{
    key: "jQueryInterface",
    value: function jQueryInterface(e, t) {
      return this.each(function () {
        var i = Modal.getOrCreateInstance(this, e);

        if ("string" == typeof e) {
          if (void 0 === i[e]) throw new TypeError("No method named \"".concat(e, "\""));
          i[e](t);
        }
      });
    }
  }, {
    key: "Default",
    get: function get() {
      return Default$5;
    }
  }, {
    key: "NAME",
    get: function get() {
      return NAME$6;
    }
  }]);

  return Modal;
}(BaseComponent);

exports.Modal = Modal;
EventHandler.on(document, EVENT_CLICK_DATA_API$2, SELECTOR_DATA_TOGGLE$2, function (e) {
  var _this27 = this;

  var t = getElementFromSelector(this);
  ["A", "AREA"].includes(this.tagName) && e.preventDefault(), EventHandler.one(t, EVENT_SHOW$3, function (e) {
    e.defaultPrevented || EventHandler.one(t, EVENT_HIDDEN$3, function () {
      isVisible(_this27) && _this27.focus();
    });
  });
  var i = SelectorEngine.findOne(".modal.show");
  i && Modal.getInstance(i).hide(), Modal.getOrCreateInstance(t).toggle(this);
}), enableDismissTrigger(Modal), defineJQueryPlugin(Modal);
var NAME$5 = "offcanvas",
    DATA_KEY$5 = "bs.offcanvas",
    EVENT_KEY$5 = ".bs.offcanvas",
    DATA_API_KEY$2 = ".data-api",
    EVENT_LOAD_DATA_API$1 = "load.bs.offcanvas.data-api",
    ESCAPE_KEY = "Escape",
    Default$4 = {
  backdrop: !0,
  keyboard: !0,
  scroll: !1
},
    DefaultType$4 = {
  backdrop: "boolean",
  keyboard: "boolean",
  scroll: "boolean"
},
    CLASS_NAME_SHOW$3 = "show",
    CLASS_NAME_BACKDROP = "offcanvas-backdrop",
    OPEN_SELECTOR = ".offcanvas.show",
    EVENT_SHOW$2 = "show.bs.offcanvas",
    EVENT_SHOWN$2 = "shown.bs.offcanvas",
    EVENT_HIDE$2 = "hide.bs.offcanvas",
    EVENT_HIDDEN$2 = "hidden.bs.offcanvas",
    EVENT_CLICK_DATA_API$1 = "click.bs.offcanvas.data-api",
    EVENT_KEYDOWN_DISMISS = "keydown.dismiss.bs.offcanvas",
    SELECTOR_DATA_TOGGLE$1 = '[data-bs-toggle="offcanvas"]';

var Offcanvas =
/*#__PURE__*/
function (_BaseComponent7) {
  _inherits(Offcanvas, _BaseComponent7);

  function Offcanvas(e, t) {
    var _this28;

    _classCallCheck(this, Offcanvas);

    _this28 = _possibleConstructorReturn(this, _getPrototypeOf(Offcanvas).call(this, e)), _this28._config = _this28._getConfig(t), _this28._isShown = !1, _this28._backdrop = _this28._initializeBackDrop(), _this28._focustrap = _this28._initializeFocusTrap(), _this28._addEventListeners();
    return _this28;
  }

  _createClass(Offcanvas, [{
    key: "toggle",
    value: function toggle(e) {
      return this._isShown ? this.hide() : this.show(e);
    }
  }, {
    key: "show",
    value: function show(e) {
      var _this29 = this;

      this._isShown || EventHandler.trigger(this._element, EVENT_SHOW$2, {
        relatedTarget: e
      }).defaultPrevented || (this._isShown = !0, this._element.style.visibility = "visible", this._backdrop.show(), this._config.scroll || new ScrollBarHelper().hide(), this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add("show"), this._queueCallback(function () {
        _this29._config.scroll || _this29._focustrap.activate(), EventHandler.trigger(_this29._element, EVENT_SHOWN$2, {
          relatedTarget: e
        });
      }, this._element, !0));
    }
  }, {
    key: "hide",
    value: function hide() {
      var _this30 = this;

      this._isShown && (EventHandler.trigger(this._element, EVENT_HIDE$2).defaultPrevented || (this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.remove("show"), this._backdrop.hide(), this._queueCallback(function () {
        _this30._element.setAttribute("aria-hidden", !0), _this30._element.removeAttribute("aria-modal"), _this30._element.removeAttribute("role"), _this30._element.style.visibility = "hidden", _this30._config.scroll || new ScrollBarHelper().reset(), EventHandler.trigger(_this30._element, EVENT_HIDDEN$2);
      }, this._element, !0)));
    }
  }, {
    key: "dispose",
    value: function dispose() {
      this._backdrop.dispose(), this._focustrap.deactivate(), _get(_getPrototypeOf(Offcanvas.prototype), "dispose", this).call(this);
    }
  }, {
    key: "_getConfig",
    value: function _getConfig(e) {
      return e = _objectSpread({}, Default$4, {}, Manipulator.getDataAttributes(this._element), {}, "object" == _typeof(e) ? e : {}), typeCheckConfig(NAME$5, e, DefaultType$4), e;
    }
  }, {
    key: "_initializeBackDrop",
    value: function _initializeBackDrop() {
      var _this31 = this;

      return new Backdrop({
        className: CLASS_NAME_BACKDROP,
        isVisible: this._config.backdrop,
        isAnimated: !0,
        rootElement: this._element.parentNode,
        clickCallback: function clickCallback() {
          return _this31.hide();
        }
      });
    }
  }, {
    key: "_initializeFocusTrap",
    value: function _initializeFocusTrap() {
      return new FocusTrap({
        trapElement: this._element
      });
    }
  }, {
    key: "_addEventListeners",
    value: function _addEventListeners() {
      var _this32 = this;

      EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS, function (e) {
        _this32._config.keyboard && "Escape" === e.key && _this32.hide();
      });
    }
  }], [{
    key: "jQueryInterface",
    value: function jQueryInterface(e) {
      return this.each(function () {
        var t = Offcanvas.getOrCreateInstance(this, e);

        if ("string" == typeof e) {
          if (void 0 === t[e] || e.startsWith("_") || "constructor" === e) throw new TypeError("No method named \"".concat(e, "\""));
          t[e](this);
        }
      });
    }
  }, {
    key: "NAME",
    get: function get() {
      return NAME$5;
    }
  }, {
    key: "Default",
    get: function get() {
      return Default$4;
    }
  }]);

  return Offcanvas;
}(BaseComponent);

exports.Offcanvas = Offcanvas;
EventHandler.on(document, EVENT_CLICK_DATA_API$1, SELECTOR_DATA_TOGGLE$1, function (e) {
  var _this33 = this;

  var t = getElementFromSelector(this);
  if (["A", "AREA"].includes(this.tagName) && e.preventDefault(), isDisabled(this)) return;
  EventHandler.one(t, EVENT_HIDDEN$2, function () {
    isVisible(_this33) && _this33.focus();
  });
  var i = SelectorEngine.findOne(OPEN_SELECTOR);
  i && i !== t && Offcanvas.getInstance(i).hide(), Offcanvas.getOrCreateInstance(t).toggle(this);
}), EventHandler.on(window, EVENT_LOAD_DATA_API$1, function () {
  return SelectorEngine.find(OPEN_SELECTOR).forEach(function (e) {
    return Offcanvas.getOrCreateInstance(e).show();
  });
}), enableDismissTrigger(Offcanvas), defineJQueryPlugin(Offcanvas);

var uriAttributes = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]),
    ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i,
    SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,
    DATA_URL_PATTERN = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
    allowedAttribute = function allowedAttribute(e, t) {
  var i = e.nodeName.toLowerCase();
  if (t.includes(i)) return !uriAttributes.has(i) || Boolean(SAFE_URL_PATTERN.test(e.nodeValue) || DATA_URL_PATTERN.test(e.nodeValue));
  var n = t.filter(function (e) {
    return e instanceof RegExp;
  });

  for (var _e7 = 0, _t8 = n.length; _e7 < _t8; _e7++) {
    if (n[_e7].test(i)) return !0;
  }

  return !1;
},
    DefaultAllowlist = {
  "*": ["class", "dir", "id", "lang", "role", ARIA_ATTRIBUTE_PATTERN],
  a: ["target", "href", "title", "rel"],
  area: [],
  b: [],
  br: [],
  col: [],
  code: [],
  div: [],
  em: [],
  hr: [],
  h1: [],
  h2: [],
  h3: [],
  h4: [],
  h5: [],
  h6: [],
  i: [],
  img: ["src", "srcset", "alt", "title", "width", "height"],
  li: [],
  ol: [],
  p: [],
  pre: [],
  s: [],
  small: [],
  span: [],
  sub: [],
  sup: [],
  strong: [],
  u: [],
  ul: []
};

function sanitizeHtml(e, t, i) {
  var _ref7;

  if (!e.length) return e;
  if (i && "function" == typeof i) return i(e);

  var n = new window.DOMParser().parseFromString(e, "text/html"),
      s = (_ref7 = []).concat.apply(_ref7, _toConsumableArray(n.body.querySelectorAll("*")));

  var _loop = function _loop(_e8, _i5) {
    var _ref8;

    var i = s[_e8],
        n = i.nodeName.toLowerCase();

    if (!Object.keys(t).includes(n)) {
      i.remove();
      return "continue";
    }

    var o = (_ref8 = []).concat.apply(_ref8, _toConsumableArray(i.attributes)),
        r = [].concat(t["*"] || [], t[n] || []);

    o.forEach(function (e) {
      allowedAttribute(e, r) || i.removeAttribute(e.nodeName);
    });
  };

  for (var _e8 = 0, _i5 = s.length; _e8 < _i5; _e8++) {
    var _ret = _loop(_e8, _i5);

    if (_ret === "continue") continue;
  }

  return n.body.innerHTML;
}

var NAME$4 = "tooltip",
    DATA_KEY$4 = "bs.tooltip",
    EVENT_KEY$4 = ".bs.tooltip",
    CLASS_PREFIX$1 = "bs-tooltip",
    DISALLOWED_ATTRIBUTES = new Set(["sanitize", "allowList", "sanitizeFn"]),
    DefaultType$3 = {
  animation: "boolean",
  template: "string",
  title: "(string|element|function)",
  trigger: "string",
  delay: "(number|object)",
  html: "boolean",
  selector: "(string|boolean)",
  placement: "(string|function)",
  offset: "(array|string|function)",
  container: "(string|element|boolean)",
  fallbackPlacements: "array",
  boundary: "(string|element)",
  customClass: "(string|function)",
  sanitize: "boolean",
  sanitizeFn: "(null|function)",
  allowList: "object",
  popperConfig: "(null|object|function)"
},
    AttachmentMap = {
  AUTO: "auto",
  TOP: "top",
  RIGHT: isRTL() ? "left" : "right",
  BOTTOM: "bottom",
  LEFT: isRTL() ? "right" : "left"
},
    Default$3 = {
  animation: !0,
  template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
  trigger: "hover focus",
  title: "",
  delay: 0,
  html: !1,
  selector: !1,
  placement: "top",
  offset: [0, 0],
  container: !1,
  fallbackPlacements: ["top", "right", "bottom", "left"],
  boundary: "clippingParents",
  customClass: "",
  sanitize: !0,
  sanitizeFn: null,
  allowList: DefaultAllowlist,
  popperConfig: null
},
    Event$2 = {
  HIDE: "hide.bs.tooltip",
  HIDDEN: "hidden.bs.tooltip",
  SHOW: "show.bs.tooltip",
  SHOWN: "shown.bs.tooltip",
  INSERTED: "inserted.bs.tooltip",
  CLICK: "click.bs.tooltip",
  FOCUSIN: "focusin.bs.tooltip",
  FOCUSOUT: "focusout.bs.tooltip",
  MOUSEENTER: "mouseenter.bs.tooltip",
  MOUSELEAVE: "mouseleave.bs.tooltip"
},
    CLASS_NAME_FADE$2 = "fade",
    CLASS_NAME_MODAL = "modal",
    CLASS_NAME_SHOW$2 = "show",
    HOVER_STATE_SHOW = "show",
    HOVER_STATE_OUT = "out",
    SELECTOR_TOOLTIP_INNER = ".tooltip-inner",
    SELECTOR_MODAL = ".modal",
    EVENT_MODAL_HIDE = "hide.bs.modal",
    TRIGGER_HOVER = "hover",
    TRIGGER_FOCUS = "focus",
    TRIGGER_CLICK = "click",
    TRIGGER_MANUAL = "manual";

var Tooltip =
/*#__PURE__*/
function (_BaseComponent8) {
  _inherits(Tooltip, _BaseComponent8);

  function Tooltip(e, t) {
    var _this34;

    _classCallCheck(this, Tooltip);

    if (void 0 === Popper) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
    _this34 = _possibleConstructorReturn(this, _getPrototypeOf(Tooltip).call(this, e)), _this34._isEnabled = !0, _this34._timeout = 0, _this34._hoverState = "", _this34._activeTrigger = {}, _this34._popper = null, _this34._config = _this34._getConfig(t), _this34.tip = null, _this34._setListeners();
    return _this34;
  }

  _createClass(Tooltip, [{
    key: "enable",
    value: function enable() {
      this._isEnabled = !0;
    }
  }, {
    key: "disable",
    value: function disable() {
      this._isEnabled = !1;
    }
  }, {
    key: "toggleEnabled",
    value: function toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    }
  }, {
    key: "toggle",
    value: function toggle(e) {
      if (this._isEnabled) if (e) {
        var t = this._initializeOnDelegatedTarget(e);

        t._activeTrigger.click = !t._activeTrigger.click, t._isWithActiveTrigger() ? t._enter(null, t) : t._leave(null, t);
      } else {
        if (this.getTipElement().classList.contains("show")) return void this._leave(null, this);

        this._enter(null, this);
      }
    }
  }, {
    key: "dispose",
    value: function dispose() {
      clearTimeout(this._timeout), EventHandler.off(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler), this.tip && this.tip.remove(), this._disposePopper(), _get(_getPrototypeOf(Tooltip.prototype), "dispose", this).call(this);
    }
  }, {
    key: "show",
    value: function show() {
      var _n$classList,
          _ref9,
          _this35 = this;

      if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
      if (!this.isWithContent() || !this._isEnabled) return;
      var e = EventHandler.trigger(this._element, this.constructor.Event.SHOW),
          t = findShadowRoot(this._element),
          i = null === t ? this._element.ownerDocument.documentElement.contains(this._element) : t.contains(this._element);
      if (e.defaultPrevented || !i) return;
      "tooltip" === this.constructor.NAME && this.tip && this.getTitle() !== this.tip.querySelector(".tooltip-inner").innerHTML && (this._disposePopper(), this.tip.remove(), this.tip = null);
      var n = this.getTipElement(),
          s = getUID(this.constructor.NAME);
      n.setAttribute("id", s), this._element.setAttribute("aria-describedby", s), this._config.animation && n.classList.add("fade");

      var o = "function" == typeof this._config.placement ? this._config.placement.call(this, n, this._element) : this._config.placement,
          r = this._getAttachment(o);

      this._addAttachmentClass(r);

      var a = this._config.container;
      Data.set(n, this.constructor.DATA_KEY, this), this._element.ownerDocument.documentElement.contains(this.tip) || (a.append(n), EventHandler.trigger(this._element, this.constructor.Event.INSERTED)), this._popper ? this._popper.update() : this._popper = Popper.createPopper(this._element, n, this._getPopperConfig(r)), n.classList.add("show");

      var l = this._resolvePossibleFunction(this._config.customClass);

      l && (_n$classList = n.classList).add.apply(_n$classList, _toConsumableArray(l.split(" "))), "ontouchstart" in document.documentElement && (_ref9 = []).concat.apply(_ref9, _toConsumableArray(document.body.children)).forEach(function (e) {
        EventHandler.on(e, "mouseover", noop);
      });
      var c = this.tip.classList.contains("fade");

      this._queueCallback(function () {
        var e = _this35._hoverState;
        _this35._hoverState = null, EventHandler.trigger(_this35._element, _this35.constructor.Event.SHOWN), "out" === e && _this35._leave(null, _this35);
      }, this.tip, c);
    }
  }, {
    key: "hide",
    value: function hide() {
      var _ref10,
          _this36 = this;

      if (!this._popper) return;
      var e = this.getTipElement();
      if (EventHandler.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented) return;
      e.classList.remove("show"), "ontouchstart" in document.documentElement && (_ref10 = []).concat.apply(_ref10, _toConsumableArray(document.body.children)).forEach(function (e) {
        return EventHandler.off(e, "mouseover", noop);
      }), this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1;
      var t = this.tip.classList.contains("fade");
      this._queueCallback(function () {
        _this36._isWithActiveTrigger() || ("show" !== _this36._hoverState && e.remove(), _this36._cleanTipClass(), _this36._element.removeAttribute("aria-describedby"), EventHandler.trigger(_this36._element, _this36.constructor.Event.HIDDEN), _this36._disposePopper());
      }, this.tip, t), this._hoverState = "";
    }
  }, {
    key: "update",
    value: function update() {
      null !== this._popper && this._popper.update();
    }
  }, {
    key: "isWithContent",
    value: function isWithContent() {
      return Boolean(this.getTitle());
    }
  }, {
    key: "getTipElement",
    value: function getTipElement() {
      if (this.tip) return this.tip;
      var e = document.createElement("div");
      e.innerHTML = this._config.template;
      var t = e.children[0];
      return this.setContent(t), t.classList.remove("fade", "show"), this.tip = t, this.tip;
    }
  }, {
    key: "setContent",
    value: function setContent(e) {
      this._sanitizeAndSetContent(e, this.getTitle(), ".tooltip-inner");
    }
  }, {
    key: "_sanitizeAndSetContent",
    value: function _sanitizeAndSetContent(e, t, i) {
      var n = SelectorEngine.findOne(i, e);
      t || !n ? this.setElementContent(n, t) : n.remove();
    }
  }, {
    key: "setElementContent",
    value: function setElementContent(e, t) {
      if (null !== e) return isElement(t) ? (t = getElement(t), void (this._config.html ? t.parentNode !== e && (e.innerHTML = "", e.append(t)) : e.textContent = t.textContent)) : void (this._config.html ? (this._config.sanitize && (t = sanitizeHtml(t, this._config.allowList, this._config.sanitizeFn)), e.innerHTML = t) : e.textContent = t);
    }
  }, {
    key: "getTitle",
    value: function getTitle() {
      var e = this._element.getAttribute("data-bs-original-title") || this._config.title;

      return this._resolvePossibleFunction(e);
    }
  }, {
    key: "updateAttachment",
    value: function updateAttachment(e) {
      return "right" === e ? "end" : "left" === e ? "start" : e;
    }
  }, {
    key: "_initializeOnDelegatedTarget",
    value: function _initializeOnDelegatedTarget(e, t) {
      return t || this.constructor.getOrCreateInstance(e.delegateTarget, this._getDelegateConfig());
    }
  }, {
    key: "_getOffset",
    value: function _getOffset() {
      var _this37 = this;

      var e = this._config.offset;
      return "string" == typeof e ? e.split(",").map(function (e) {
        return Number.parseInt(e, 10);
      }) : "function" == typeof e ? function (t) {
        return e(t, _this37._element);
      } : e;
    }
  }, {
    key: "_resolvePossibleFunction",
    value: function _resolvePossibleFunction(e) {
      return "function" == typeof e ? e.call(this._element) : e;
    }
  }, {
    key: "_getPopperConfig",
    value: function _getPopperConfig(e) {
      var _this38 = this;

      var t = {
        placement: e,
        modifiers: [{
          name: "flip",
          options: {
            fallbackPlacements: this._config.fallbackPlacements
          }
        }, {
          name: "offset",
          options: {
            offset: this._getOffset()
          }
        }, {
          name: "preventOverflow",
          options: {
            boundary: this._config.boundary
          }
        }, {
          name: "arrow",
          options: {
            element: ".".concat(this.constructor.NAME, "-arrow")
          }
        }, {
          name: "onChange",
          enabled: !0,
          phase: "afterWrite",
          fn: function fn(e) {
            return _this38._handlePopperPlacementChange(e);
          }
        }],
        onFirstUpdate: function onFirstUpdate(e) {
          e.options.placement !== e.placement && _this38._handlePopperPlacementChange(e);
        }
      };
      return _objectSpread({}, t, {}, "function" == typeof this._config.popperConfig ? this._config.popperConfig(t) : this._config.popperConfig);
    }
  }, {
    key: "_addAttachmentClass",
    value: function _addAttachmentClass(e) {
      this.getTipElement().classList.add("".concat(this._getBasicClassPrefix(), "-").concat(this.updateAttachment(e)));
    }
  }, {
    key: "_getAttachment",
    value: function _getAttachment(e) {
      return AttachmentMap[e.toUpperCase()];
    }
  }, {
    key: "_setListeners",
    value: function _setListeners() {
      var _this39 = this;

      this._config.trigger.split(" ").forEach(function (e) {
        if ("click" === e) EventHandler.on(_this39._element, _this39.constructor.Event.CLICK, _this39._config.selector, function (e) {
          return _this39.toggle(e);
        });else if ("manual" !== e) {
          var t = "hover" === e ? _this39.constructor.Event.MOUSEENTER : _this39.constructor.Event.FOCUSIN,
              _i6 = "hover" === e ? _this39.constructor.Event.MOUSELEAVE : _this39.constructor.Event.FOCUSOUT;

          EventHandler.on(_this39._element, t, _this39._config.selector, function (e) {
            return _this39._enter(e);
          }), EventHandler.on(_this39._element, _i6, _this39._config.selector, function (e) {
            return _this39._leave(e);
          });
        }
      }), this._hideModalHandler = function () {
        _this39._element && _this39.hide();
      }, EventHandler.on(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler), this._config.selector ? this._config = _objectSpread({}, this._config, {
        trigger: "manual",
        selector: ""
      }) : this._fixTitle();
    }
  }, {
    key: "_fixTitle",
    value: function _fixTitle() {
      var e = this._element.getAttribute("title"),
          t = _typeof(this._element.getAttribute("data-bs-original-title"));

      (e || "string" !== t) && (this._element.setAttribute("data-bs-original-title", e || ""), !e || this._element.getAttribute("aria-label") || this._element.textContent || this._element.setAttribute("aria-label", e), this._element.setAttribute("title", ""));
    }
  }, {
    key: "_enter",
    value: function _enter(e, t) {
      t = this._initializeOnDelegatedTarget(e, t), e && (t._activeTrigger["focusin" === e.type ? "focus" : "hover"] = !0), t.getTipElement().classList.contains("show") || "show" === t._hoverState ? t._hoverState = "show" : (clearTimeout(t._timeout), t._hoverState = "show", t._config.delay && t._config.delay.show ? t._timeout = setTimeout(function () {
        "show" === t._hoverState && t.show();
      }, t._config.delay.show) : t.show());
    }
  }, {
    key: "_leave",
    value: function _leave(e, t) {
      t = this._initializeOnDelegatedTarget(e, t), e && (t._activeTrigger["focusout" === e.type ? "focus" : "hover"] = t._element.contains(e.relatedTarget)), t._isWithActiveTrigger() || (clearTimeout(t._timeout), t._hoverState = "out", t._config.delay && t._config.delay.hide ? t._timeout = setTimeout(function () {
        "out" === t._hoverState && t.hide();
      }, t._config.delay.hide) : t.hide());
    }
  }, {
    key: "_isWithActiveTrigger",
    value: function _isWithActiveTrigger() {
      for (var e in this._activeTrigger) {
        if (this._activeTrigger[e]) return !0;
      }

      return !1;
    }
  }, {
    key: "_getConfig",
    value: function _getConfig(e) {
      var t = Manipulator.getDataAttributes(this._element);
      return Object.keys(t).forEach(function (e) {
        DISALLOWED_ATTRIBUTES.has(e) && delete t[e];
      }), (e = _objectSpread({}, this.constructor.Default, {}, t, {}, "object" == _typeof(e) && e ? e : {})).container = !1 === e.container ? document.body : getElement(e.container), "number" == typeof e.delay && (e.delay = {
        show: e.delay,
        hide: e.delay
      }), "number" == typeof e.title && (e.title = e.title.toString()), "number" == typeof e.content && (e.content = e.content.toString()), typeCheckConfig(NAME$4, e, this.constructor.DefaultType), e.sanitize && (e.template = sanitizeHtml(e.template, e.allowList, e.sanitizeFn)), e;
    }
  }, {
    key: "_getDelegateConfig",
    value: function _getDelegateConfig() {
      var e = {};

      for (var t in this._config) {
        this.constructor.Default[t] !== this._config[t] && (e[t] = this._config[t]);
      }

      return e;
    }
  }, {
    key: "_cleanTipClass",
    value: function _cleanTipClass() {
      var e = this.getTipElement(),
          t = new RegExp("(^|\\s)".concat(this._getBasicClassPrefix(), "\\S+"), "g"),
          i = e.getAttribute("class").match(t);
      null !== i && i.length > 0 && i.map(function (e) {
        return e.trim();
      }).forEach(function (t) {
        return e.classList.remove(t);
      });
    }
  }, {
    key: "_getBasicClassPrefix",
    value: function _getBasicClassPrefix() {
      return "bs-tooltip";
    }
  }, {
    key: "_handlePopperPlacementChange",
    value: function _handlePopperPlacementChange(e) {
      var t = e.state;
      t && (this.tip = t.elements.popper, this._cleanTipClass(), this._addAttachmentClass(this._getAttachment(t.placement)));
    }
  }, {
    key: "_disposePopper",
    value: function _disposePopper() {
      this._popper && (this._popper.destroy(), this._popper = null);
    }
  }], [{
    key: "jQueryInterface",
    value: function jQueryInterface(e) {
      return this.each(function () {
        var t = Tooltip.getOrCreateInstance(this, e);

        if ("string" == typeof e) {
          if (void 0 === t[e]) throw new TypeError("No method named \"".concat(e, "\""));
          t[e]();
        }
      });
    }
  }, {
    key: "Default",
    get: function get() {
      return Default$3;
    }
  }, {
    key: "NAME",
    get: function get() {
      return NAME$4;
    }
  }, {
    key: "Event",
    get: function get() {
      return Event$2;
    }
  }, {
    key: "DefaultType",
    get: function get() {
      return DefaultType$3;
    }
  }]);

  return Tooltip;
}(BaseComponent);

exports.Tooltip = Tooltip;
defineJQueryPlugin(Tooltip);

var NAME$3 = "popover",
    DATA_KEY$3 = "bs.popover",
    EVENT_KEY$3 = ".bs.popover",
    CLASS_PREFIX = "bs-popover",
    Default$2 = _objectSpread({}, Tooltip.Default, {
  placement: "right",
  offset: [0, 8],
  trigger: "click",
  content: "",
  template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
}),
    DefaultType$2 = _objectSpread({}, Tooltip.DefaultType, {
  content: "(string|element|function)"
}),
    Event$1 = {
  HIDE: "hide.bs.popover",
  HIDDEN: "hidden.bs.popover",
  SHOW: "show.bs.popover",
  SHOWN: "shown.bs.popover",
  INSERTED: "inserted.bs.popover",
  CLICK: "click.bs.popover",
  FOCUSIN: "focusin.bs.popover",
  FOCUSOUT: "focusout.bs.popover",
  MOUSEENTER: "mouseenter.bs.popover",
  MOUSELEAVE: "mouseleave.bs.popover"
},
    SELECTOR_TITLE = ".popover-header",
    SELECTOR_CONTENT = ".popover-body";

var Popover =
/*#__PURE__*/
function (_Tooltip) {
  _inherits(Popover, _Tooltip);

  function Popover() {
    _classCallCheck(this, Popover);

    return _possibleConstructorReturn(this, _getPrototypeOf(Popover).apply(this, arguments));
  }

  _createClass(Popover, [{
    key: "isWithContent",
    value: function isWithContent() {
      return this.getTitle() || this._getContent();
    }
  }, {
    key: "setContent",
    value: function setContent(e) {
      this._sanitizeAndSetContent(e, this.getTitle(), SELECTOR_TITLE), this._sanitizeAndSetContent(e, this._getContent(), ".popover-body");
    }
  }, {
    key: "_getContent",
    value: function _getContent() {
      return this._resolvePossibleFunction(this._config.content);
    }
  }, {
    key: "_getBasicClassPrefix",
    value: function _getBasicClassPrefix() {
      return "bs-popover";
    }
  }], [{
    key: "jQueryInterface",
    value: function jQueryInterface(e) {
      return this.each(function () {
        var t = Popover.getOrCreateInstance(this, e);

        if ("string" == typeof e) {
          if (void 0 === t[e]) throw new TypeError("No method named \"".concat(e, "\""));
          t[e]();
        }
      });
    }
  }, {
    key: "Default",
    get: function get() {
      return Default$2;
    }
  }, {
    key: "NAME",
    get: function get() {
      return NAME$3;
    }
  }, {
    key: "Event",
    get: function get() {
      return Event$1;
    }
  }, {
    key: "DefaultType",
    get: function get() {
      return DefaultType$2;
    }
  }]);

  return Popover;
}(Tooltip);

exports.Popover = Popover;
defineJQueryPlugin(Popover);
var NAME$2 = "scrollspy",
    DATA_KEY$2 = "bs.scrollspy",
    EVENT_KEY$2 = ".bs.scrollspy",
    DATA_API_KEY$1 = ".data-api",
    Default$1 = {
  offset: 10,
  method: "auto",
  target: ""
},
    DefaultType$1 = {
  offset: "number",
  method: "string",
  target: "(string|element)"
},
    EVENT_ACTIVATE = "activate.bs.scrollspy",
    EVENT_SCROLL = "scroll.bs.scrollspy",
    EVENT_LOAD_DATA_API = "load.bs.scrollspy.data-api",
    CLASS_NAME_DROPDOWN_ITEM = "dropdown-item",
    CLASS_NAME_ACTIVE$1 = "active",
    SELECTOR_DATA_SPY = '[data-bs-spy="scroll"]',
    SELECTOR_NAV_LIST_GROUP$1 = ".nav, .list-group",
    SELECTOR_NAV_LINKS = ".nav-link",
    SELECTOR_NAV_ITEMS = ".nav-item",
    SELECTOR_LIST_ITEMS = ".list-group-item",
    SELECTOR_LINK_ITEMS = ".nav-link, .list-group-item, .dropdown-item",
    SELECTOR_DROPDOWN$1 = ".dropdown",
    SELECTOR_DROPDOWN_TOGGLE$1 = ".dropdown-toggle",
    METHOD_OFFSET = "offset",
    METHOD_POSITION = "position";

var ScrollSpy =
/*#__PURE__*/
function (_BaseComponent9) {
  _inherits(ScrollSpy, _BaseComponent9);

  function ScrollSpy(e, t) {
    var _this40;

    _classCallCheck(this, ScrollSpy);

    _this40 = _possibleConstructorReturn(this, _getPrototypeOf(ScrollSpy).call(this, e)), _this40._scrollElement = "BODY" === _this40._element.tagName ? window : _this40._element, _this40._config = _this40._getConfig(t), _this40._offsets = [], _this40._targets = [], _this40._activeTarget = null, _this40._scrollHeight = 0, EventHandler.on(_this40._scrollElement, EVENT_SCROLL, function () {
      return _this40._process();
    }), _this40.refresh(), _this40._process();
    return _this40;
  }

  _createClass(ScrollSpy, [{
    key: "refresh",
    value: function refresh() {
      var _this41 = this;

      var e = this._scrollElement === this._scrollElement.window ? "offset" : "position",
          t = "auto" === this._config.method ? e : this._config.method,
          i = "position" === t ? this._getScrollTop() : 0;
      this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), SelectorEngine.find(SELECTOR_LINK_ITEMS, this._config.target).map(function (e) {
        var n = getSelectorFromElement(e),
            s = n ? SelectorEngine.findOne(n) : null;

        if (s) {
          var _e9 = s.getBoundingClientRect();

          if (_e9.width || _e9.height) return [Manipulator[t](s).top + i, n];
        }

        return null;
      }).filter(function (e) {
        return e;
      }).sort(function (e, t) {
        return e[0] - t[0];
      }).forEach(function (e) {
        _this41._offsets.push(e[0]), _this41._targets.push(e[1]);
      });
    }
  }, {
    key: "dispose",
    value: function dispose() {
      EventHandler.off(this._scrollElement, EVENT_KEY$2), _get(_getPrototypeOf(ScrollSpy.prototype), "dispose", this).call(this);
    }
  }, {
    key: "_getConfig",
    value: function _getConfig(e) {
      return (e = _objectSpread({}, Default$1, {}, Manipulator.getDataAttributes(this._element), {}, "object" == _typeof(e) && e ? e : {})).target = getElement(e.target) || document.documentElement, typeCheckConfig(NAME$2, e, DefaultType$1), e;
    }
  }, {
    key: "_getScrollTop",
    value: function _getScrollTop() {
      return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
    }
  }, {
    key: "_getScrollHeight",
    value: function _getScrollHeight() {
      return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    }
  }, {
    key: "_getOffsetHeight",
    value: function _getOffsetHeight() {
      return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
    }
  }, {
    key: "_process",
    value: function _process() {
      var e = this._getScrollTop() + this._config.offset,
          t = this._getScrollHeight(),
          i = this._config.offset + t - this._getOffsetHeight();

      if (this._scrollHeight !== t && this.refresh(), e >= i) {
        var _e10 = this._targets[this._targets.length - 1];
        this._activeTarget !== _e10 && this._activate(_e10);
      } else {
        if (this._activeTarget && e < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();

        for (var _t9 = this._offsets.length; _t9--;) {
          this._activeTarget !== this._targets[_t9] && e >= this._offsets[_t9] && (void 0 === this._offsets[_t9 + 1] || e < this._offsets[_t9 + 1]) && this._activate(this._targets[_t9]);
        }
      }
    }
  }, {
    key: "_activate",
    value: function _activate(e) {
      this._activeTarget = e, this._clear();
      var t = SELECTOR_LINK_ITEMS.split(",").map(function (t) {
        return "".concat(t, "[data-bs-target=\"").concat(e, "\"],").concat(t, "[href=\"").concat(e, "\"]");
      }),
          i = SelectorEngine.findOne(t.join(","), this._config.target);
      i.classList.add("active"), i.classList.contains("dropdown-item") ? SelectorEngine.findOne(".dropdown-toggle", i.closest(".dropdown")).classList.add("active") : SelectorEngine.parents(i, ".nav, .list-group").forEach(function (e) {
        SelectorEngine.prev(e, ".nav-link, .list-group-item").forEach(function (e) {
          return e.classList.add("active");
        }), SelectorEngine.prev(e, ".nav-item").forEach(function (e) {
          SelectorEngine.children(e, ".nav-link").forEach(function (e) {
            return e.classList.add("active");
          });
        });
      }), EventHandler.trigger(this._scrollElement, EVENT_ACTIVATE, {
        relatedTarget: e
      });
    }
  }, {
    key: "_clear",
    value: function _clear() {
      SelectorEngine.find(SELECTOR_LINK_ITEMS, this._config.target).filter(function (e) {
        return e.classList.contains("active");
      }).forEach(function (e) {
        return e.classList.remove("active");
      });
    }
  }], [{
    key: "jQueryInterface",
    value: function jQueryInterface(e) {
      return this.each(function () {
        var t = ScrollSpy.getOrCreateInstance(this, e);

        if ("string" == typeof e) {
          if (void 0 === t[e]) throw new TypeError("No method named \"".concat(e, "\""));
          t[e]();
        }
      });
    }
  }, {
    key: "Default",
    get: function get() {
      return Default$1;
    }
  }, {
    key: "NAME",
    get: function get() {
      return NAME$2;
    }
  }]);

  return ScrollSpy;
}(BaseComponent);

exports.ScrollSpy = ScrollSpy;
EventHandler.on(window, EVENT_LOAD_DATA_API, function () {
  SelectorEngine.find(SELECTOR_DATA_SPY).forEach(function (e) {
    return new ScrollSpy(e);
  });
}), defineJQueryPlugin(ScrollSpy);
var NAME$1 = "tab",
    DATA_KEY$1 = "bs.tab",
    EVENT_KEY$1 = ".bs.tab",
    DATA_API_KEY = ".data-api",
    EVENT_HIDE$1 = "hide.bs.tab",
    EVENT_HIDDEN$1 = "hidden.bs.tab",
    EVENT_SHOW$1 = "show.bs.tab",
    EVENT_SHOWN$1 = "shown.bs.tab",
    EVENT_CLICK_DATA_API = "click.bs.tab.data-api",
    CLASS_NAME_DROPDOWN_MENU = "dropdown-menu",
    CLASS_NAME_ACTIVE = "active",
    CLASS_NAME_FADE$1 = "fade",
    CLASS_NAME_SHOW$1 = "show",
    SELECTOR_DROPDOWN = ".dropdown",
    SELECTOR_NAV_LIST_GROUP = ".nav, .list-group",
    SELECTOR_ACTIVE = ".active",
    SELECTOR_ACTIVE_UL = ":scope > li > .active",
    SELECTOR_DATA_TOGGLE = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
    SELECTOR_DROPDOWN_TOGGLE = ".dropdown-toggle",
    SELECTOR_DROPDOWN_ACTIVE_CHILD = ":scope > .dropdown-menu .active";

var Tab =
/*#__PURE__*/
function (_BaseComponent10) {
  _inherits(Tab, _BaseComponent10);

  function Tab() {
    _classCallCheck(this, Tab);

    return _possibleConstructorReturn(this, _getPrototypeOf(Tab).apply(this, arguments));
  }

  _createClass(Tab, [{
    key: "show",
    value: function show() {
      var _this42 = this;

      if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains("active")) return;
      var e;

      var t = getElementFromSelector(this._element),
          i = this._element.closest(".nav, .list-group");

      if (i) {
        var _t10 = "UL" === i.nodeName || "OL" === i.nodeName ? SELECTOR_ACTIVE_UL : ".active";

        e = SelectorEngine.find(_t10, i), e = e[e.length - 1];
      }

      var n = e ? EventHandler.trigger(e, EVENT_HIDE$1, {
        relatedTarget: this._element
      }) : null;
      if (EventHandler.trigger(this._element, EVENT_SHOW$1, {
        relatedTarget: e
      }).defaultPrevented || null !== n && n.defaultPrevented) return;

      this._activate(this._element, i);

      var s = function s() {
        EventHandler.trigger(e, EVENT_HIDDEN$1, {
          relatedTarget: _this42._element
        }), EventHandler.trigger(_this42._element, EVENT_SHOWN$1, {
          relatedTarget: e
        });
      };

      t ? this._activate(t, t.parentNode, s) : s();
    }
  }, {
    key: "_activate",
    value: function _activate(e, t, i) {
      var _this43 = this;

      var n = (!t || "UL" !== t.nodeName && "OL" !== t.nodeName ? SelectorEngine.children(t, ".active") : SelectorEngine.find(SELECTOR_ACTIVE_UL, t))[0],
          s = i && n && n.classList.contains("fade"),
          o = function o() {
        return _this43._transitionComplete(e, n, i);
      };

      n && s ? (n.classList.remove("show"), this._queueCallback(o, e, !0)) : o();
    }
  }, {
    key: "_transitionComplete",
    value: function _transitionComplete(e, t, i) {
      if (t) {
        t.classList.remove("active");

        var _e11 = SelectorEngine.findOne(SELECTOR_DROPDOWN_ACTIVE_CHILD, t.parentNode);

        _e11 && _e11.classList.remove("active"), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !1);
      }

      e.classList.add("active"), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), reflow(e), e.classList.contains("fade") && e.classList.add("show");
      var n = e.parentNode;

      if (n && "LI" === n.nodeName && (n = n.parentNode), n && n.classList.contains("dropdown-menu")) {
        var _t11 = e.closest(".dropdown");

        _t11 && SelectorEngine.find(".dropdown-toggle", _t11).forEach(function (e) {
          return e.classList.add("active");
        }), e.setAttribute("aria-expanded", !0);
      }

      i && i();
    }
  }], [{
    key: "jQueryInterface",
    value: function jQueryInterface(e) {
      return this.each(function () {
        var t = Tab.getOrCreateInstance(this);

        if ("string" == typeof e) {
          if (void 0 === t[e]) throw new TypeError("No method named \"".concat(e, "\""));
          t[e]();
        }
      });
    }
  }, {
    key: "NAME",
    get: function get() {
      return "tab";
    }
  }]);

  return Tab;
}(BaseComponent);

exports.Tab = Tab;
EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function (e) {
  ["A", "AREA"].includes(this.tagName) && e.preventDefault(), isDisabled(this) || Tab.getOrCreateInstance(this).show();
}), defineJQueryPlugin(Tab);
var NAME = "toast",
    DATA_KEY = "bs.toast",
    EVENT_KEY = ".bs.toast",
    EVENT_MOUSEOVER = "mouseover.bs.toast",
    EVENT_MOUSEOUT = "mouseout.bs.toast",
    EVENT_FOCUSIN = "focusin.bs.toast",
    EVENT_FOCUSOUT = "focusout.bs.toast",
    EVENT_HIDE = "hide.bs.toast",
    EVENT_HIDDEN = "hidden.bs.toast",
    EVENT_SHOW = "show.bs.toast",
    EVENT_SHOWN = "shown.bs.toast",
    CLASS_NAME_FADE = "fade",
    CLASS_NAME_HIDE = "hide",
    CLASS_NAME_SHOW = "show",
    CLASS_NAME_SHOWING = "showing",
    DefaultType = {
  animation: "boolean",
  autohide: "boolean",
  delay: "number"
},
    Default = {
  animation: !0,
  autohide: !0,
  delay: 5e3
};

var Toast =
/*#__PURE__*/
function (_BaseComponent11) {
  _inherits(Toast, _BaseComponent11);

  function Toast(e, t) {
    var _this44;

    _classCallCheck(this, Toast);

    _this44 = _possibleConstructorReturn(this, _getPrototypeOf(Toast).call(this, e)), _this44._config = _this44._getConfig(t), _this44._timeout = null, _this44._hasMouseInteraction = !1, _this44._hasKeyboardInteraction = !1, _this44._setListeners();
    return _this44;
  }

  _createClass(Toast, [{
    key: "show",
    value: function show() {
      var _this45 = this;

      EventHandler.trigger(this._element, EVENT_SHOW).defaultPrevented || (this._clearTimeout(), this._config.animation && this._element.classList.add("fade"), this._element.classList.remove("hide"), reflow(this._element), this._element.classList.add("show"), this._element.classList.add("showing"), this._queueCallback(function () {
        _this45._element.classList.remove("showing"), EventHandler.trigger(_this45._element, EVENT_SHOWN), _this45._maybeScheduleHide();
      }, this._element, this._config.animation));
    }
  }, {
    key: "hide",
    value: function hide() {
      var _this46 = this;

      this._element.classList.contains("show") && (EventHandler.trigger(this._element, EVENT_HIDE).defaultPrevented || (this._element.classList.add("showing"), this._queueCallback(function () {
        _this46._element.classList.add("hide"), _this46._element.classList.remove("showing"), _this46._element.classList.remove("show"), EventHandler.trigger(_this46._element, EVENT_HIDDEN);
      }, this._element, this._config.animation)));
    }
  }, {
    key: "dispose",
    value: function dispose() {
      this._clearTimeout(), this._element.classList.contains("show") && this._element.classList.remove("show"), _get(_getPrototypeOf(Toast.prototype), "dispose", this).call(this);
    }
  }, {
    key: "_getConfig",
    value: function _getConfig(e) {
      return e = _objectSpread({}, Default, {}, Manipulator.getDataAttributes(this._element), {}, "object" == _typeof(e) && e ? e : {}), typeCheckConfig(NAME, e, this.constructor.DefaultType), e;
    }
  }, {
    key: "_maybeScheduleHide",
    value: function _maybeScheduleHide() {
      var _this47 = this;

      this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(function () {
        _this47.hide();
      }, this._config.delay)));
    }
  }, {
    key: "_onInteraction",
    value: function _onInteraction(e, t) {
      switch (e.type) {
        case "mouseover":
        case "mouseout":
          this._hasMouseInteraction = t;
          break;

        case "focusin":
        case "focusout":
          this._hasKeyboardInteraction = t;
      }

      if (t) return void this._clearTimeout();
      var i = e.relatedTarget;
      this._element === i || this._element.contains(i) || this._maybeScheduleHide();
    }
  }, {
    key: "_setListeners",
    value: function _setListeners() {
      var _this48 = this;

      EventHandler.on(this._element, EVENT_MOUSEOVER, function (e) {
        return _this48._onInteraction(e, !0);
      }), EventHandler.on(this._element, EVENT_MOUSEOUT, function (e) {
        return _this48._onInteraction(e, !1);
      }), EventHandler.on(this._element, EVENT_FOCUSIN, function (e) {
        return _this48._onInteraction(e, !0);
      }), EventHandler.on(this._element, EVENT_FOCUSOUT, function (e) {
        return _this48._onInteraction(e, !1);
      });
    }
  }, {
    key: "_clearTimeout",
    value: function _clearTimeout() {
      clearTimeout(this._timeout), this._timeout = null;
    }
  }], [{
    key: "jQueryInterface",
    value: function jQueryInterface(e) {
      return this.each(function () {
        var t = Toast.getOrCreateInstance(this, e);

        if ("string" == typeof e) {
          if (void 0 === t[e]) throw new TypeError("No method named \"".concat(e, "\""));
          t[e](this);
        }
      });
    }
  }, {
    key: "DefaultType",
    get: function get() {
      return DefaultType;
    }
  }, {
    key: "Default",
    get: function get() {
      return Default;
    }
  }, {
    key: "NAME",
    get: function get() {
      return NAME;
    }
  }]);

  return Toast;
}(BaseComponent);

exports.Toast = Toast;
enableDismissTrigger(Toast), defineJQueryPlugin(Toast);