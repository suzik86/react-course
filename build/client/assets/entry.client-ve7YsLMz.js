var Ep = Object.defineProperty;
var xp = (e, t, n) =>
  t in e
    ? Ep(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (e[t] = n);
var Il = (e, t, n) => xp(e, typeof t != "symbol" ? t + "" : t, n);
function rd(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const l in r)
        if (l !== "default" && !(l in e)) {
          const i = Object.getOwnPropertyDescriptor(r, l);
          i &&
            Object.defineProperty(
              e,
              l,
              i.get ? i : { enumerable: !0, get: () => r[l] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
  );
}
function ld(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var id = { exports: {} },
  Ji = {},
  od = { exports: {} },
  Y = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var xl = Symbol.for("react.element"),
  _p = Symbol.for("react.portal"),
  kp = Symbol.for("react.fragment"),
  Rp = Symbol.for("react.strict_mode"),
  Cp = Symbol.for("react.profiler"),
  Pp = Symbol.for("react.provider"),
  Lp = Symbol.for("react.context"),
  Tp = Symbol.for("react.forward_ref"),
  Dp = Symbol.for("react.suspense"),
  Np = Symbol.for("react.memo"),
  Mp = Symbol.for("react.lazy"),
  Es = Symbol.iterator;
function Op(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Es && e[Es]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ad = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  ud = Object.assign,
  sd = {};
function xr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = sd),
    (this.updater = n || ad);
}
xr.prototype.isReactComponent = {};
xr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
xr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function cd() {}
cd.prototype = xr.prototype;
function qa(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = sd),
    (this.updater = n || ad);
}
var eu = (qa.prototype = new cd());
eu.constructor = qa;
ud(eu, xr.prototype);
eu.isPureReactComponent = !0;
var xs = Array.isArray,
  dd = Object.prototype.hasOwnProperty,
  tu = { current: null },
  fd = { key: !0, ref: !0, __self: !0, __source: !0 };
function hd(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      dd.call(t, r) && !fd.hasOwnProperty(r) && (l[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) l.children = n;
  else if (1 < a) {
    for (var u = Array(a), s = 0; s < a; s++) u[s] = arguments[s + 2];
    l.children = u;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) l[r] === void 0 && (l[r] = a[r]);
  return {
    $$typeof: xl,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: tu.current,
  };
}
function zp(e, t) {
  return {
    $$typeof: xl,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function nu(e) {
  return typeof e == "object" && e !== null && e.$$typeof === xl;
}
function Fp(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var _s = /\/+/g;
function So(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Fp("" + e.key)
    : t.toString(36);
}
function ii(e, t, n, r, l) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (i) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case xl:
          case _p:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (l = l(o)),
      (e = r === "" ? "." + So(o, 0) : r),
      xs(l)
        ? ((n = ""),
          e != null && (n = e.replace(_s, "$&/") + "/"),
          ii(l, t, n, "", function (s) {
            return s;
          }))
        : l != null &&
          (nu(l) &&
            (l = zp(
              l,
              n +
                (!l.key || (o && o.key === l.key)
                  ? ""
                  : ("" + l.key).replace(_s, "$&/") + "/") +
                e,
            )),
          t.push(l)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), xs(e)))
    for (var a = 0; a < e.length; a++) {
      i = e[a];
      var u = r + So(i, a);
      o += ii(i, t, n, u, l);
    }
  else if (((u = Op(e)), typeof u == "function"))
    for (e = u.call(e), a = 0; !(i = e.next()).done; )
      (i = i.value), (u = r + So(i, a++)), (o += ii(i, t, n, u, l));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead.",
      ))
    );
  return o;
}
function Ul(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    ii(e, r, "", "", function (i) {
      return t.call(n, i, l++);
    }),
    r
  );
}
function jp(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var He = { current: null },
  oi = { transition: null },
  Ip = {
    ReactCurrentDispatcher: He,
    ReactCurrentBatchConfig: oi,
    ReactCurrentOwner: tu,
  };
function pd() {
  throw Error("act(...) is not supported in production builds of React.");
}
Y.Children = {
  map: Ul,
  forEach: function (e, t, n) {
    Ul(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Ul(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Ul(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!nu(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
Y.Component = xr;
Y.Fragment = kp;
Y.Profiler = Cp;
Y.PureComponent = qa;
Y.StrictMode = Rp;
Y.Suspense = Dp;
Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ip;
Y.act = pd;
Y.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var r = ud({}, e.props),
    l = e.key,
    i = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (o = tu.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (u in t)
      dd.call(t, u) &&
        !fd.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && a !== void 0 ? a[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    a = Array(u);
    for (var s = 0; s < u; s++) a[s] = arguments[s + 2];
    r.children = a;
  }
  return { $$typeof: xl, type: e.type, key: l, ref: i, props: r, _owner: o };
};
Y.createContext = function (e) {
  return (
    (e = {
      $$typeof: Lp,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Pp, _context: e }),
    (e.Consumer = e)
  );
};
Y.createElement = hd;
Y.createFactory = function (e) {
  var t = hd.bind(null, e);
  return (t.type = e), t;
};
Y.createRef = function () {
  return { current: null };
};
Y.forwardRef = function (e) {
  return { $$typeof: Tp, render: e };
};
Y.isValidElement = nu;
Y.lazy = function (e) {
  return { $$typeof: Mp, _payload: { _status: -1, _result: e }, _init: jp };
};
Y.memo = function (e, t) {
  return { $$typeof: Np, type: e, compare: t === void 0 ? null : t };
};
Y.startTransition = function (e) {
  var t = oi.transition;
  oi.transition = {};
  try {
    e();
  } finally {
    oi.transition = t;
  }
};
Y.unstable_act = pd;
Y.useCallback = function (e, t) {
  return He.current.useCallback(e, t);
};
Y.useContext = function (e) {
  return He.current.useContext(e);
};
Y.useDebugValue = function () {};
Y.useDeferredValue = function (e) {
  return He.current.useDeferredValue(e);
};
Y.useEffect = function (e, t) {
  return He.current.useEffect(e, t);
};
Y.useId = function () {
  return He.current.useId();
};
Y.useImperativeHandle = function (e, t, n) {
  return He.current.useImperativeHandle(e, t, n);
};
Y.useInsertionEffect = function (e, t) {
  return He.current.useInsertionEffect(e, t);
};
Y.useLayoutEffect = function (e, t) {
  return He.current.useLayoutEffect(e, t);
};
Y.useMemo = function (e, t) {
  return He.current.useMemo(e, t);
};
Y.useReducer = function (e, t, n) {
  return He.current.useReducer(e, t, n);
};
Y.useRef = function (e) {
  return He.current.useRef(e);
};
Y.useState = function (e) {
  return He.current.useState(e);
};
Y.useSyncExternalStore = function (e, t, n) {
  return He.current.useSyncExternalStore(e, t, n);
};
Y.useTransition = function () {
  return He.current.useTransition();
};
Y.version = "18.3.1";
od.exports = Y;
var y = od.exports;
const Up = ld(y),
  Ap = rd({ __proto__: null, default: Up }, [y]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $p = y,
  Bp = Symbol.for("react.element"),
  Hp = Symbol.for("react.fragment"),
  Wp = Object.prototype.hasOwnProperty,
  Vp = $p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Kp = { key: !0, ref: !0, __self: !0, __source: !0 };
function md(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) Wp.call(t, r) && !Kp.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: Bp,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: Vp.current,
  };
}
Ji.Fragment = Hp;
Ji.jsx = md;
Ji.jsxs = md;
id.exports = Ji;
var ks = id.exports,
  vd = { exports: {} },
  tt = {},
  yd = { exports: {} },
  gd = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(z, B) {
    var H = z.length;
    z.push(B);
    e: for (; 0 < H; ) {
      var G = (H - 1) >>> 1,
        ie = z[G];
      if (0 < l(ie, B)) (z[G] = B), (z[H] = ie), (H = G);
      else break e;
    }
  }
  function n(z) {
    return z.length === 0 ? null : z[0];
  }
  function r(z) {
    if (z.length === 0) return null;
    var B = z[0],
      H = z.pop();
    if (H !== B) {
      z[0] = H;
      e: for (var G = 0, ie = z.length, _t = ie >>> 1; G < _t; ) {
        var Pe = 2 * (G + 1) - 1,
          ht = z[Pe],
          Ie = Pe + 1,
          Bn = z[Ie];
        if (0 > l(ht, H))
          Ie < ie && 0 > l(Bn, ht)
            ? ((z[G] = Bn), (z[Ie] = H), (G = Ie))
            : ((z[G] = ht), (z[Pe] = H), (G = Pe));
        else if (Ie < ie && 0 > l(Bn, H)) (z[G] = Bn), (z[Ie] = H), (G = Ie);
        else break e;
      }
    }
    return B;
  }
  function l(z, B) {
    var H = z.sortIndex - B.sortIndex;
    return H !== 0 ? H : z.id - B.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var o = Date,
      a = o.now();
    e.unstable_now = function () {
      return o.now() - a;
    };
  }
  var u = [],
    s = [],
    d = 1,
    c = null,
    h = 3,
    x = !1,
    w = !1,
    S = !1,
    L = typeof setTimeout == "function" ? setTimeout : null,
    m = typeof clearTimeout == "function" ? clearTimeout : null,
    f = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(z) {
    for (var B = n(s); B !== null; ) {
      if (B.callback === null) r(s);
      else if (B.startTime <= z)
        r(s), (B.sortIndex = B.expirationTime), t(u, B);
      else break;
      B = n(s);
    }
  }
  function _(z) {
    if (((S = !1), p(z), !w))
      if (n(u) !== null) (w = !0), rt(P);
      else {
        var B = n(s);
        B !== null && ue(_, B.startTime - z);
      }
  }
  function P(z, B) {
    (w = !1), S && ((S = !1), m(C), (C = -1)), (x = !0);
    var H = h;
    try {
      for (
        p(B), c = n(u);
        c !== null && (!(c.expirationTime > B) || (z && !W()));

      ) {
        var G = c.callback;
        if (typeof G == "function") {
          (c.callback = null), (h = c.priorityLevel);
          var ie = G(c.expirationTime <= B);
          (B = e.unstable_now()),
            typeof ie == "function" ? (c.callback = ie) : c === n(u) && r(u),
            p(B);
        } else r(u);
        c = n(u);
      }
      if (c !== null) var _t = !0;
      else {
        var Pe = n(s);
        Pe !== null && ue(_, Pe.startTime - B), (_t = !1);
      }
      return _t;
    } finally {
      (c = null), (h = H), (x = !1);
    }
  }
  var v = !1,
    T = null,
    C = -1,
    M = 5,
    O = -1;
  function W() {
    return !(e.unstable_now() - O < M);
  }
  function X() {
    if (T !== null) {
      var z = e.unstable_now();
      O = z;
      var B = !0;
      try {
        B = T(!0, z);
      } finally {
        B ? ge() : ((v = !1), (T = null));
      }
    } else v = !1;
  }
  var ge;
  if (typeof f == "function")
    ge = function () {
      f(X);
    };
  else if (typeof MessageChannel < "u") {
    var ee = new MessageChannel(),
      xe = ee.port2;
    (ee.port1.onmessage = X),
      (ge = function () {
        xe.postMessage(null);
      });
  } else
    ge = function () {
      L(X, 0);
    };
  function rt(z) {
    (T = z), v || ((v = !0), ge());
  }
  function ue(z, B) {
    C = L(function () {
      z(e.unstable_now());
    }, B);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (z) {
      z.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      w || x || ((w = !0), rt(P));
    }),
    (e.unstable_forceFrameRate = function (z) {
      0 > z || 125 < z
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (M = 0 < z ? Math.floor(1e3 / z) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (z) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var B = 3;
          break;
        default:
          B = h;
      }
      var H = h;
      h = B;
      try {
        return z();
      } finally {
        h = H;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (z, B) {
      switch (z) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          z = 3;
      }
      var H = h;
      h = z;
      try {
        return B();
      } finally {
        h = H;
      }
    }),
    (e.unstable_scheduleCallback = function (z, B, H) {
      var G = e.unstable_now();
      switch (
        (typeof H == "object" && H !== null
          ? ((H = H.delay), (H = typeof H == "number" && 0 < H ? G + H : G))
          : (H = G),
        z)
      ) {
        case 1:
          var ie = -1;
          break;
        case 2:
          ie = 250;
          break;
        case 5:
          ie = 1073741823;
          break;
        case 4:
          ie = 1e4;
          break;
        default:
          ie = 5e3;
      }
      return (
        (ie = H + ie),
        (z = {
          id: d++,
          callback: B,
          priorityLevel: z,
          startTime: H,
          expirationTime: ie,
          sortIndex: -1,
        }),
        H > G
          ? ((z.sortIndex = H),
            t(s, z),
            n(u) === null &&
              z === n(s) &&
              (S ? (m(C), (C = -1)) : (S = !0), ue(_, H - G)))
          : ((z.sortIndex = ie), t(u, z), w || x || ((w = !0), rt(P))),
        z
      );
    }),
    (e.unstable_shouldYield = W),
    (e.unstable_wrapCallback = function (z) {
      var B = h;
      return function () {
        var H = h;
        h = B;
        try {
          return z.apply(this, arguments);
        } finally {
          h = H;
        }
      };
    });
})(gd);
yd.exports = gd;
var Qp = yd.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Yp = y,
  et = Qp;
function D(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var wd = new Set(),
  nl = {};
function Un(e, t) {
  hr(e, t), hr(e + "Capture", t);
}
function hr(e, t) {
  for (nl[e] = t, e = 0; e < t.length; e++) wd.add(t[e]);
}
var $t = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  ea = Object.prototype.hasOwnProperty,
  Xp =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Rs = {},
  Cs = {};
function Jp(e) {
  return ea.call(Cs, e)
    ? !0
    : ea.call(Rs, e)
      ? !1
      : Xp.test(e)
        ? (Cs[e] = !0)
        : ((Rs[e] = !0), !1);
}
function Gp(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Zp(e, t, n, r) {
  if (t === null || typeof t > "u" || Gp(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function We(e, t, n, r, l, i, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = o);
}
var Ne = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Ne[e] = new We(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Ne[t] = new We(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Ne[e] = new We(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Ne[e] = new We(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Ne[e] = new We(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Ne[e] = new We(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Ne[e] = new We(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Ne[e] = new We(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Ne[e] = new We(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ru = /[\-:]([a-z])/g;
function lu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ru, lu);
    Ne[t] = new We(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ru, lu);
    Ne[t] = new We(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(ru, lu);
  Ne[t] = new We(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Ne[e] = new We(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ne.xlinkHref = new We(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Ne[e] = new We(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function iu(e, t, n, r) {
  var l = Ne.hasOwnProperty(t) ? Ne[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Zp(t, n, l, r) && (n = null),
    r || l === null
      ? Jp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
        ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
        : ((t = l.attributeName),
          (r = l.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((l = l.type),
              (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Vt = Yp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Al = Symbol.for("react.element"),
  Xn = Symbol.for("react.portal"),
  Jn = Symbol.for("react.fragment"),
  ou = Symbol.for("react.strict_mode"),
  ta = Symbol.for("react.profiler"),
  Sd = Symbol.for("react.provider"),
  Ed = Symbol.for("react.context"),
  au = Symbol.for("react.forward_ref"),
  na = Symbol.for("react.suspense"),
  ra = Symbol.for("react.suspense_list"),
  uu = Symbol.for("react.memo"),
  bt = Symbol.for("react.lazy"),
  xd = Symbol.for("react.offscreen"),
  Ps = Symbol.iterator;
function Dr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ps && e[Ps]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var pe = Object.assign,
  Eo;
function Hr(e) {
  if (Eo === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Eo = (t && t[1]) || "";
    }
  return (
    `
` +
    Eo +
    e
  );
}
var xo = !1;
function _o(e, t) {
  if (!e || xo) return "";
  xo = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (s) {
          var r = s;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (s) {
          r = s;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (s) {
        r = s;
      }
      e();
    }
  } catch (s) {
    if (s && r && typeof s.stack == "string") {
      for (
        var l = s.stack.split(`
`),
          i = r.stack.split(`
`),
          o = l.length - 1,
          a = i.length - 1;
        1 <= o && 0 <= a && l[o] !== i[a];

      )
        a--;
      for (; 1 <= o && 0 <= a; o--, a--)
        if (l[o] !== i[a]) {
          if (o !== 1 || a !== 1)
            do
              if ((o--, a--, 0 > a || l[o] !== i[a])) {
                var u =
                  `
` + l[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    u.includes("<anonymous>") &&
                    (u = u.replace("<anonymous>", e.displayName)),
                  u
                );
              }
            while (1 <= o && 0 <= a);
          break;
        }
    }
  } finally {
    (xo = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Hr(e) : "";
}
function bp(e) {
  switch (e.tag) {
    case 5:
      return Hr(e.type);
    case 16:
      return Hr("Lazy");
    case 13:
      return Hr("Suspense");
    case 19:
      return Hr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = _o(e.type, !1)), e;
    case 11:
      return (e = _o(e.type.render, !1)), e;
    case 1:
      return (e = _o(e.type, !0)), e;
    default:
      return "";
  }
}
function la(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Jn:
      return "Fragment";
    case Xn:
      return "Portal";
    case ta:
      return "Profiler";
    case ou:
      return "StrictMode";
    case na:
      return "Suspense";
    case ra:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Ed:
        return (e.displayName || "Context") + ".Consumer";
      case Sd:
        return (e._context.displayName || "Context") + ".Provider";
      case au:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case uu:
        return (
          (t = e.displayName || null), t !== null ? t : la(e.type) || "Memo"
        );
      case bt:
        (t = e._payload), (e = e._init);
        try {
          return la(e(t));
        } catch {}
    }
  return null;
}
function qp(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return la(t);
    case 8:
      return t === ou ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function hn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function _d(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function em(e) {
  var t = _d(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (o) {
          (r = "" + o), i.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function $l(e) {
  e._valueTracker || (e._valueTracker = em(e));
}
function kd(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = _d(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Si(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ia(e, t) {
  var n = t.checked;
  return pe({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Ls(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = hn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Rd(e, t) {
  (t = t.checked), t != null && iu(e, "checked", t, !1);
}
function oa(e, t) {
  Rd(e, t);
  var n = hn(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? aa(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && aa(e, t.type, hn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Ts(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function aa(e, t, n) {
  (t !== "number" || Si(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Wr = Array.isArray;
function ar(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + hn(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function ua(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(D(91));
  return pe({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Ds(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(D(92));
      if (Wr(n)) {
        if (1 < n.length) throw Error(D(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: hn(n) };
}
function Cd(e, t) {
  var n = hn(t.value),
    r = hn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Ns(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Pd(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function sa(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Pd(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var Bl,
  Ld = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Bl = Bl || document.createElement("div"),
          Bl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Bl.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function rl(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Yr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  tm = ["Webkit", "ms", "Moz", "O"];
Object.keys(Yr).forEach(function (e) {
  tm.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Yr[t] = Yr[e]);
  });
});
function Td(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Yr.hasOwnProperty(e) && Yr[e])
      ? ("" + t).trim()
      : t + "px";
}
function Dd(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = Td(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var nm = pe(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function ca(e, t) {
  if (t) {
    if (nm[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(D(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(D(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(D(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(D(62));
  }
}
function da(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var fa = null;
function su(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var ha = null,
  ur = null,
  sr = null;
function Ms(e) {
  if ((e = Rl(e))) {
    if (typeof ha != "function") throw Error(D(280));
    var t = e.stateNode;
    t && ((t = eo(t)), ha(e.stateNode, e.type, t));
  }
}
function Nd(e) {
  ur ? (sr ? sr.push(e) : (sr = [e])) : (ur = e);
}
function Md() {
  if (ur) {
    var e = ur,
      t = sr;
    if (((sr = ur = null), Ms(e), t)) for (e = 0; e < t.length; e++) Ms(t[e]);
  }
}
function Od(e, t) {
  return e(t);
}
function zd() {}
var ko = !1;
function Fd(e, t, n) {
  if (ko) return e(t, n);
  ko = !0;
  try {
    return Od(e, t, n);
  } finally {
    (ko = !1), (ur !== null || sr !== null) && (zd(), Md());
  }
}
function ll(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = eo(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(D(231, t, typeof n));
  return n;
}
var pa = !1;
if ($t)
  try {
    var Nr = {};
    Object.defineProperty(Nr, "passive", {
      get: function () {
        pa = !0;
      },
    }),
      window.addEventListener("test", Nr, Nr),
      window.removeEventListener("test", Nr, Nr);
  } catch {
    pa = !1;
  }
function rm(e, t, n, r, l, i, o, a, u) {
  var s = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, s);
  } catch (d) {
    this.onError(d);
  }
}
var Xr = !1,
  Ei = null,
  xi = !1,
  ma = null,
  lm = {
    onError: function (e) {
      (Xr = !0), (Ei = e);
    },
  };
function im(e, t, n, r, l, i, o, a, u) {
  (Xr = !1), (Ei = null), rm.apply(lm, arguments);
}
function om(e, t, n, r, l, i, o, a, u) {
  if ((im.apply(this, arguments), Xr)) {
    if (Xr) {
      var s = Ei;
      (Xr = !1), (Ei = null);
    } else throw Error(D(198));
    xi || ((xi = !0), (ma = s));
  }
}
function An(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function jd(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Os(e) {
  if (An(e) !== e) throw Error(D(188));
}
function am(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = An(e)), t === null)) throw Error(D(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var i = l.alternate;
    if (i === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === i.child) {
      for (i = l.child; i; ) {
        if (i === n) return Os(l), e;
        if (i === r) return Os(l), t;
        i = i.sibling;
      }
      throw Error(D(188));
    }
    if (n.return !== r.return) (n = l), (r = i);
    else {
      for (var o = !1, a = l.child; a; ) {
        if (a === n) {
          (o = !0), (n = l), (r = i);
          break;
        }
        if (a === r) {
          (o = !0), (r = l), (n = i);
          break;
        }
        a = a.sibling;
      }
      if (!o) {
        for (a = i.child; a; ) {
          if (a === n) {
            (o = !0), (n = i), (r = l);
            break;
          }
          if (a === r) {
            (o = !0), (r = i), (n = l);
            break;
          }
          a = a.sibling;
        }
        if (!o) throw Error(D(189));
      }
    }
    if (n.alternate !== r) throw Error(D(190));
  }
  if (n.tag !== 3) throw Error(D(188));
  return n.stateNode.current === n ? e : t;
}
function Id(e) {
  return (e = am(e)), e !== null ? Ud(e) : null;
}
function Ud(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Ud(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Ad = et.unstable_scheduleCallback,
  zs = et.unstable_cancelCallback,
  um = et.unstable_shouldYield,
  sm = et.unstable_requestPaint,
  ye = et.unstable_now,
  cm = et.unstable_getCurrentPriorityLevel,
  cu = et.unstable_ImmediatePriority,
  $d = et.unstable_UserBlockingPriority,
  _i = et.unstable_NormalPriority,
  dm = et.unstable_LowPriority,
  Bd = et.unstable_IdlePriority,
  Gi = null,
  Tt = null;
function fm(e) {
  if (Tt && typeof Tt.onCommitFiberRoot == "function")
    try {
      Tt.onCommitFiberRoot(Gi, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var wt = Math.clz32 ? Math.clz32 : mm,
  hm = Math.log,
  pm = Math.LN2;
function mm(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((hm(e) / pm) | 0)) | 0;
}
var Hl = 64,
  Wl = 4194304;
function Vr(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function ki(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    i = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var a = o & ~l;
    a !== 0 ? (r = Vr(a)) : ((i &= o), i !== 0 && (r = Vr(i)));
  } else (o = n & ~l), o !== 0 ? (r = Vr(o)) : i !== 0 && (r = Vr(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (i = t & -t), l >= i || (l === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - wt(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function vm(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function ym(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var o = 31 - wt(i),
      a = 1 << o,
      u = l[o];
    u === -1
      ? (!(a & n) || a & r) && (l[o] = vm(a, t))
      : u <= t && (e.expiredLanes |= a),
      (i &= ~a);
  }
}
function va(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Hd() {
  var e = Hl;
  return (Hl <<= 1), !(Hl & 4194240) && (Hl = 64), e;
}
function Ro(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function _l(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - wt(t)),
    (e[t] = n);
}
function gm(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - wt(n),
      i = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~i);
  }
}
function du(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - wt(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var q = 0;
function Wd(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Vd,
  fu,
  Kd,
  Qd,
  Yd,
  ya = !1,
  Vl = [],
  ln = null,
  on = null,
  an = null,
  il = new Map(),
  ol = new Map(),
  en = [],
  wm =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function Fs(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      ln = null;
      break;
    case "dragenter":
    case "dragleave":
      on = null;
      break;
    case "mouseover":
    case "mouseout":
      an = null;
      break;
    case "pointerover":
    case "pointerout":
      il.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      ol.delete(t.pointerId);
  }
}
function Mr(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [l],
      }),
      t !== null && ((t = Rl(t)), t !== null && fu(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function Sm(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (ln = Mr(ln, e, t, n, r, l)), !0;
    case "dragenter":
      return (on = Mr(on, e, t, n, r, l)), !0;
    case "mouseover":
      return (an = Mr(an, e, t, n, r, l)), !0;
    case "pointerover":
      var i = l.pointerId;
      return il.set(i, Mr(il.get(i) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (i = l.pointerId), ol.set(i, Mr(ol.get(i) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function Xd(e) {
  var t = Rn(e.target);
  if (t !== null) {
    var n = An(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = jd(n)), t !== null)) {
          (e.blockedOn = t),
            Yd(e.priority, function () {
              Kd(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function ai(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ga(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (fa = r), n.target.dispatchEvent(r), (fa = null);
    } else return (t = Rl(n)), t !== null && fu(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function js(e, t, n) {
  ai(e) && n.delete(t);
}
function Em() {
  (ya = !1),
    ln !== null && ai(ln) && (ln = null),
    on !== null && ai(on) && (on = null),
    an !== null && ai(an) && (an = null),
    il.forEach(js),
    ol.forEach(js);
}
function Or(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    ya ||
      ((ya = !0),
      et.unstable_scheduleCallback(et.unstable_NormalPriority, Em)));
}
function al(e) {
  function t(l) {
    return Or(l, e);
  }
  if (0 < Vl.length) {
    Or(Vl[0], e);
    for (var n = 1; n < Vl.length; n++) {
      var r = Vl[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    ln !== null && Or(ln, e),
      on !== null && Or(on, e),
      an !== null && Or(an, e),
      il.forEach(t),
      ol.forEach(t),
      n = 0;
    n < en.length;
    n++
  )
    (r = en[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < en.length && ((n = en[0]), n.blockedOn === null); )
    Xd(n), n.blockedOn === null && en.shift();
}
var cr = Vt.ReactCurrentBatchConfig,
  Ri = !0;
function xm(e, t, n, r) {
  var l = q,
    i = cr.transition;
  cr.transition = null;
  try {
    (q = 1), hu(e, t, n, r);
  } finally {
    (q = l), (cr.transition = i);
  }
}
function _m(e, t, n, r) {
  var l = q,
    i = cr.transition;
  cr.transition = null;
  try {
    (q = 4), hu(e, t, n, r);
  } finally {
    (q = l), (cr.transition = i);
  }
}
function hu(e, t, n, r) {
  if (Ri) {
    var l = ga(e, t, n, r);
    if (l === null) Fo(e, t, r, Ci, n), Fs(e, r);
    else if (Sm(l, e, t, n, r)) r.stopPropagation();
    else if ((Fs(e, r), t & 4 && -1 < wm.indexOf(e))) {
      for (; l !== null; ) {
        var i = Rl(l);
        if (
          (i !== null && Vd(i),
          (i = ga(e, t, n, r)),
          i === null && Fo(e, t, r, Ci, n),
          i === l)
        )
          break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else Fo(e, t, r, null, n);
  }
}
var Ci = null;
function ga(e, t, n, r) {
  if (((Ci = null), (e = su(r)), (e = Rn(e)), e !== null))
    if (((t = An(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = jd(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Ci = e), null;
}
function Jd(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (cm()) {
        case cu:
          return 1;
        case $d:
          return 4;
        case _i:
        case dm:
          return 16;
        case Bd:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var nn = null,
  pu = null,
  ui = null;
function Gd() {
  if (ui) return ui;
  var e,
    t = pu,
    n = t.length,
    r,
    l = "value" in nn ? nn.value : nn.textContent,
    i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === l[i - r]; r++);
  return (ui = l.slice(e, 1 < r ? 1 - r : void 0));
}
function si(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Kl() {
  return !0;
}
function Is() {
  return !1;
}
function nt(e) {
  function t(n, r, l, i, o) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = o),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(i) : i[a]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? Kl
        : Is),
      (this.isPropagationStopped = Is),
      this
    );
  }
  return (
    pe(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Kl));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Kl));
      },
      persist: function () {},
      isPersistent: Kl,
    }),
    t
  );
}
var _r = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  mu = nt(_r),
  kl = pe({}, _r, { view: 0, detail: 0 }),
  km = nt(kl),
  Co,
  Po,
  zr,
  Zi = pe({}, kl, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: vu,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== zr &&
            (zr && e.type === "mousemove"
              ? ((Co = e.screenX - zr.screenX), (Po = e.screenY - zr.screenY))
              : (Po = Co = 0),
            (zr = e)),
          Co);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Po;
    },
  }),
  Us = nt(Zi),
  Rm = pe({}, Zi, { dataTransfer: 0 }),
  Cm = nt(Rm),
  Pm = pe({}, kl, { relatedTarget: 0 }),
  Lo = nt(Pm),
  Lm = pe({}, _r, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Tm = nt(Lm),
  Dm = pe({}, _r, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Nm = nt(Dm),
  Mm = pe({}, _r, { data: 0 }),
  As = nt(Mm),
  Om = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  zm = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Fm = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function jm(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Fm[e]) ? !!t[e] : !1;
}
function vu() {
  return jm;
}
var Im = pe({}, kl, {
    key: function (e) {
      if (e.key) {
        var t = Om[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = si(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? zm[e.keyCode] || "Unidentified"
          : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: vu,
    charCode: function (e) {
      return e.type === "keypress" ? si(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? si(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  Um = nt(Im),
  Am = pe({}, Zi, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  $s = nt(Am),
  $m = pe({}, kl, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: vu,
  }),
  Bm = nt($m),
  Hm = pe({}, _r, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Wm = nt(Hm),
  Vm = pe({}, Zi, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Km = nt(Vm),
  Qm = [9, 13, 27, 32],
  yu = $t && "CompositionEvent" in window,
  Jr = null;
$t && "documentMode" in document && (Jr = document.documentMode);
var Ym = $t && "TextEvent" in window && !Jr,
  Zd = $t && (!yu || (Jr && 8 < Jr && 11 >= Jr)),
  Bs = " ",
  Hs = !1;
function bd(e, t) {
  switch (e) {
    case "keyup":
      return Qm.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function qd(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Gn = !1;
function Xm(e, t) {
  switch (e) {
    case "compositionend":
      return qd(t);
    case "keypress":
      return t.which !== 32 ? null : ((Hs = !0), Bs);
    case "textInput":
      return (e = t.data), e === Bs && Hs ? null : e;
    default:
      return null;
  }
}
function Jm(e, t) {
  if (Gn)
    return e === "compositionend" || (!yu && bd(e, t))
      ? ((e = Gd()), (ui = pu = nn = null), (Gn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Zd && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Gm = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Ws(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Gm[e.type] : t === "textarea";
}
function ef(e, t, n, r) {
  Nd(r),
    (t = Pi(t, "onChange")),
    0 < t.length &&
      ((n = new mu("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Gr = null,
  ul = null;
function Zm(e) {
  ff(e, 0);
}
function bi(e) {
  var t = qn(e);
  if (kd(t)) return e;
}
function bm(e, t) {
  if (e === "change") return t;
}
var tf = !1;
if ($t) {
  var To;
  if ($t) {
    var Do = "oninput" in document;
    if (!Do) {
      var Vs = document.createElement("div");
      Vs.setAttribute("oninput", "return;"),
        (Do = typeof Vs.oninput == "function");
    }
    To = Do;
  } else To = !1;
  tf = To && (!document.documentMode || 9 < document.documentMode);
}
function Ks() {
  Gr && (Gr.detachEvent("onpropertychange", nf), (ul = Gr = null));
}
function nf(e) {
  if (e.propertyName === "value" && bi(ul)) {
    var t = [];
    ef(t, ul, e, su(e)), Fd(Zm, t);
  }
}
function qm(e, t, n) {
  e === "focusin"
    ? (Ks(), (Gr = t), (ul = n), Gr.attachEvent("onpropertychange", nf))
    : e === "focusout" && Ks();
}
function ev(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return bi(ul);
}
function tv(e, t) {
  if (e === "click") return bi(t);
}
function nv(e, t) {
  if (e === "input" || e === "change") return bi(t);
}
function rv(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Et = typeof Object.is == "function" ? Object.is : rv;
function sl(e, t) {
  if (Et(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!ea.call(t, l) || !Et(e[l], t[l])) return !1;
  }
  return !0;
}
function Qs(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Ys(e, t) {
  var n = Qs(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Qs(n);
  }
}
function rf(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? rf(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function lf() {
  for (var e = window, t = Si(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Si(e.document);
  }
  return t;
}
function gu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function lv(e) {
  var t = lf(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    rf(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && gu(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          i = Math.min(r.start, l);
        (r = r.end === void 0 ? i : Math.min(r.end, l)),
          !e.extend && i > r && ((l = r), (r = i), (i = l)),
          (l = Ys(n, i));
        var o = Ys(n, r);
        l &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var iv = $t && "documentMode" in document && 11 >= document.documentMode,
  Zn = null,
  wa = null,
  Zr = null,
  Sa = !1;
function Xs(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Sa ||
    Zn == null ||
    Zn !== Si(r) ||
    ((r = Zn),
    "selectionStart" in r && gu(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Zr && sl(Zr, r)) ||
      ((Zr = r),
      (r = Pi(wa, "onSelect")),
      0 < r.length &&
        ((t = new mu("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Zn))));
}
function Ql(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var bn = {
    animationend: Ql("Animation", "AnimationEnd"),
    animationiteration: Ql("Animation", "AnimationIteration"),
    animationstart: Ql("Animation", "AnimationStart"),
    transitionend: Ql("Transition", "TransitionEnd"),
  },
  No = {},
  of = {};
$t &&
  ((of = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete bn.animationend.animation,
    delete bn.animationiteration.animation,
    delete bn.animationstart.animation),
  "TransitionEvent" in window || delete bn.transitionend.transition);
function qi(e) {
  if (No[e]) return No[e];
  if (!bn[e]) return e;
  var t = bn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in of) return (No[e] = t[n]);
  return e;
}
var af = qi("animationend"),
  uf = qi("animationiteration"),
  sf = qi("animationstart"),
  cf = qi("transitionend"),
  df = new Map(),
  Js =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function gn(e, t) {
  df.set(e, t), Un(t, [e]);
}
for (var Mo = 0; Mo < Js.length; Mo++) {
  var Oo = Js[Mo],
    ov = Oo.toLowerCase(),
    av = Oo[0].toUpperCase() + Oo.slice(1);
  gn(ov, "on" + av);
}
gn(af, "onAnimationEnd");
gn(uf, "onAnimationIteration");
gn(sf, "onAnimationStart");
gn("dblclick", "onDoubleClick");
gn("focusin", "onFocus");
gn("focusout", "onBlur");
gn(cf, "onTransitionEnd");
hr("onMouseEnter", ["mouseout", "mouseover"]);
hr("onMouseLeave", ["mouseout", "mouseover"]);
hr("onPointerEnter", ["pointerout", "pointerover"]);
hr("onPointerLeave", ["pointerout", "pointerover"]);
Un(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
Un(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
Un("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Un(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
Un(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
Un(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var Kr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  uv = new Set("cancel close invalid load scroll toggle".split(" ").concat(Kr));
function Gs(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), om(r, t, void 0, e), (e.currentTarget = null);
}
function ff(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var a = r[o],
            u = a.instance,
            s = a.currentTarget;
          if (((a = a.listener), u !== i && l.isPropagationStopped())) break e;
          Gs(l, a, s), (i = u);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((a = r[o]),
            (u = a.instance),
            (s = a.currentTarget),
            (a = a.listener),
            u !== i && l.isPropagationStopped())
          )
            break e;
          Gs(l, a, s), (i = u);
        }
    }
  }
  if (xi) throw ((e = ma), (xi = !1), (ma = null), e);
}
function oe(e, t) {
  var n = t[Ra];
  n === void 0 && (n = t[Ra] = new Set());
  var r = e + "__bubble";
  n.has(r) || (hf(t, e, 2, !1), n.add(r));
}
function zo(e, t, n) {
  var r = 0;
  t && (r |= 4), hf(n, e, r, t);
}
var Yl = "_reactListening" + Math.random().toString(36).slice(2);
function cl(e) {
  if (!e[Yl]) {
    (e[Yl] = !0),
      wd.forEach(function (n) {
        n !== "selectionchange" && (uv.has(n) || zo(n, !1, e), zo(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Yl] || ((t[Yl] = !0), zo("selectionchange", !1, t));
  }
}
function hf(e, t, n, r) {
  switch (Jd(t)) {
    case 1:
      var l = xm;
      break;
    case 4:
      l = _m;
      break;
    default:
      l = hu;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !pa ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
        ? e.addEventListener(t, n, { passive: l })
        : e.addEventListener(t, n, !1);
}
function Fo(e, t, n, r, l) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var a = r.stateNode.containerInfo;
        if (a === l || (a.nodeType === 8 && a.parentNode === l)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var u = o.tag;
            if (
              (u === 3 || u === 4) &&
              ((u = o.stateNode.containerInfo),
              u === l || (u.nodeType === 8 && u.parentNode === l))
            )
              return;
            o = o.return;
          }
        for (; a !== null; ) {
          if (((o = Rn(a)), o === null)) return;
          if (((u = o.tag), u === 5 || u === 6)) {
            r = i = o;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  Fd(function () {
    var s = i,
      d = su(n),
      c = [];
    e: {
      var h = df.get(e);
      if (h !== void 0) {
        var x = mu,
          w = e;
        switch (e) {
          case "keypress":
            if (si(n) === 0) break e;
          case "keydown":
          case "keyup":
            x = Um;
            break;
          case "focusin":
            (w = "focus"), (x = Lo);
            break;
          case "focusout":
            (w = "blur"), (x = Lo);
            break;
          case "beforeblur":
          case "afterblur":
            x = Lo;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            x = Us;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            x = Cm;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            x = Bm;
            break;
          case af:
          case uf:
          case sf:
            x = Tm;
            break;
          case cf:
            x = Wm;
            break;
          case "scroll":
            x = km;
            break;
          case "wheel":
            x = Km;
            break;
          case "copy":
          case "cut":
          case "paste":
            x = Nm;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            x = $s;
        }
        var S = (t & 4) !== 0,
          L = !S && e === "scroll",
          m = S ? (h !== null ? h + "Capture" : null) : h;
        S = [];
        for (var f = s, p; f !== null; ) {
          p = f;
          var _ = p.stateNode;
          if (
            (p.tag === 5 &&
              _ !== null &&
              ((p = _),
              m !== null && ((_ = ll(f, m)), _ != null && S.push(dl(f, _, p)))),
            L)
          )
            break;
          f = f.return;
        }
        0 < S.length &&
          ((h = new x(h, w, null, n, d)), c.push({ event: h, listeners: S }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((h = e === "mouseover" || e === "pointerover"),
          (x = e === "mouseout" || e === "pointerout"),
          h &&
            n !== fa &&
            (w = n.relatedTarget || n.fromElement) &&
            (Rn(w) || w[Bt]))
        )
          break e;
        if (
          (x || h) &&
          ((h =
            d.window === d
              ? d
              : (h = d.ownerDocument)
                ? h.defaultView || h.parentWindow
                : window),
          x
            ? ((w = n.relatedTarget || n.toElement),
              (x = s),
              (w = w ? Rn(w) : null),
              w !== null &&
                ((L = An(w)), w !== L || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((x = null), (w = s)),
          x !== w)
        ) {
          if (
            ((S = Us),
            (_ = "onMouseLeave"),
            (m = "onMouseEnter"),
            (f = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((S = $s),
              (_ = "onPointerLeave"),
              (m = "onPointerEnter"),
              (f = "pointer")),
            (L = x == null ? h : qn(x)),
            (p = w == null ? h : qn(w)),
            (h = new S(_, f + "leave", x, n, d)),
            (h.target = L),
            (h.relatedTarget = p),
            (_ = null),
            Rn(d) === s &&
              ((S = new S(m, f + "enter", w, n, d)),
              (S.target = p),
              (S.relatedTarget = L),
              (_ = S)),
            (L = _),
            x && w)
          )
            t: {
              for (S = x, m = w, f = 0, p = S; p; p = Qn(p)) f++;
              for (p = 0, _ = m; _; _ = Qn(_)) p++;
              for (; 0 < f - p; ) (S = Qn(S)), f--;
              for (; 0 < p - f; ) (m = Qn(m)), p--;
              for (; f--; ) {
                if (S === m || (m !== null && S === m.alternate)) break t;
                (S = Qn(S)), (m = Qn(m));
              }
              S = null;
            }
          else S = null;
          x !== null && Zs(c, h, x, S, !1),
            w !== null && L !== null && Zs(c, L, w, S, !0);
        }
      }
      e: {
        if (
          ((h = s ? qn(s) : window),
          (x = h.nodeName && h.nodeName.toLowerCase()),
          x === "select" || (x === "input" && h.type === "file"))
        )
          var P = bm;
        else if (Ws(h))
          if (tf) P = nv;
          else {
            P = ev;
            var v = qm;
          }
        else
          (x = h.nodeName) &&
            x.toLowerCase() === "input" &&
            (h.type === "checkbox" || h.type === "radio") &&
            (P = tv);
        if (P && (P = P(e, s))) {
          ef(c, P, n, d);
          break e;
        }
        v && v(e, h, s),
          e === "focusout" &&
            (v = h._wrapperState) &&
            v.controlled &&
            h.type === "number" &&
            aa(h, "number", h.value);
      }
      switch (((v = s ? qn(s) : window), e)) {
        case "focusin":
          (Ws(v) || v.contentEditable === "true") &&
            ((Zn = v), (wa = s), (Zr = null));
          break;
        case "focusout":
          Zr = wa = Zn = null;
          break;
        case "mousedown":
          Sa = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Sa = !1), Xs(c, n, d);
          break;
        case "selectionchange":
          if (iv) break;
        case "keydown":
        case "keyup":
          Xs(c, n, d);
      }
      var T;
      if (yu)
        e: {
          switch (e) {
            case "compositionstart":
              var C = "onCompositionStart";
              break e;
            case "compositionend":
              C = "onCompositionEnd";
              break e;
            case "compositionupdate":
              C = "onCompositionUpdate";
              break e;
          }
          C = void 0;
        }
      else
        Gn
          ? bd(e, n) && (C = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (C = "onCompositionStart");
      C &&
        (Zd &&
          n.locale !== "ko" &&
          (Gn || C !== "onCompositionStart"
            ? C === "onCompositionEnd" && Gn && (T = Gd())
            : ((nn = d),
              (pu = "value" in nn ? nn.value : nn.textContent),
              (Gn = !0))),
        (v = Pi(s, C)),
        0 < v.length &&
          ((C = new As(C, e, null, n, d)),
          c.push({ event: C, listeners: v }),
          T ? (C.data = T) : ((T = qd(n)), T !== null && (C.data = T)))),
        (T = Ym ? Xm(e, n) : Jm(e, n)) &&
          ((s = Pi(s, "onBeforeInput")),
          0 < s.length &&
            ((d = new As("onBeforeInput", "beforeinput", null, n, d)),
            c.push({ event: d, listeners: s }),
            (d.data = T)));
    }
    ff(c, t);
  });
}
function dl(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Pi(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      i = l.stateNode;
    l.tag === 5 &&
      i !== null &&
      ((l = i),
      (i = ll(e, n)),
      i != null && r.unshift(dl(e, i, l)),
      (i = ll(e, t)),
      i != null && r.push(dl(e, i, l))),
      (e = e.return);
  }
  return r;
}
function Qn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Zs(e, t, n, r, l) {
  for (var i = t._reactName, o = []; n !== null && n !== r; ) {
    var a = n,
      u = a.alternate,
      s = a.stateNode;
    if (u !== null && u === r) break;
    a.tag === 5 &&
      s !== null &&
      ((a = s),
      l
        ? ((u = ll(n, i)), u != null && o.unshift(dl(n, u, a)))
        : l || ((u = ll(n, i)), u != null && o.push(dl(n, u, a)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var sv = /\r\n?/g,
  cv = /\u0000|\uFFFD/g;
function bs(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      sv,
      `
`,
    )
    .replace(cv, "");
}
function Xl(e, t, n) {
  if (((t = bs(t)), bs(e) !== t && n)) throw Error(D(425));
}
function Li() {}
var Ea = null,
  xa = null;
function _a(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var ka = typeof setTimeout == "function" ? setTimeout : void 0,
  dv = typeof clearTimeout == "function" ? clearTimeout : void 0,
  qs = typeof Promise == "function" ? Promise : void 0,
  fv =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof qs < "u"
        ? function (e) {
            return qs.resolve(null).then(e).catch(hv);
          }
        : ka;
function hv(e) {
  setTimeout(function () {
    throw e;
  });
}
function jo(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), al(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  al(t);
}
function un(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function ec(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var kr = Math.random().toString(36).slice(2),
  Pt = "__reactFiber$" + kr,
  fl = "__reactProps$" + kr,
  Bt = "__reactContainer$" + kr,
  Ra = "__reactEvents$" + kr,
  pv = "__reactListeners$" + kr,
  mv = "__reactHandles$" + kr;
function Rn(e) {
  var t = e[Pt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Bt] || n[Pt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = ec(e); e !== null; ) {
          if ((n = e[Pt])) return n;
          e = ec(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Rl(e) {
  return (
    (e = e[Pt] || e[Bt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function qn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(D(33));
}
function eo(e) {
  return e[fl] || null;
}
var Ca = [],
  er = -1;
function wn(e) {
  return { current: e };
}
function ae(e) {
  0 > er || ((e.current = Ca[er]), (Ca[er] = null), er--);
}
function le(e, t) {
  er++, (Ca[er] = e.current), (e.current = t);
}
var pn = {},
  je = wn(pn),
  Qe = wn(!1),
  On = pn;
function pr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return pn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    i;
  for (i in n) l[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function Ye(e) {
  return (e = e.childContextTypes), e != null;
}
function Ti() {
  ae(Qe), ae(je);
}
function tc(e, t, n) {
  if (je.current !== pn) throw Error(D(168));
  le(je, t), le(Qe, n);
}
function pf(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(D(108, qp(e) || "Unknown", l));
  return pe({}, n, r);
}
function Di(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || pn),
    (On = je.current),
    le(je, e),
    le(Qe, Qe.current),
    !0
  );
}
function nc(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(D(169));
  n
    ? ((e = pf(e, t, On)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      ae(Qe),
      ae(je),
      le(je, e))
    : ae(Qe),
    le(Qe, n);
}
var jt = null,
  to = !1,
  Io = !1;
function mf(e) {
  jt === null ? (jt = [e]) : jt.push(e);
}
function vv(e) {
  (to = !0), mf(e);
}
function Sn() {
  if (!Io && jt !== null) {
    Io = !0;
    var e = 0,
      t = q;
    try {
      var n = jt;
      for (q = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (jt = null), (to = !1);
    } catch (l) {
      throw (jt !== null && (jt = jt.slice(e + 1)), Ad(cu, Sn), l);
    } finally {
      (q = t), (Io = !1);
    }
  }
  return null;
}
var tr = [],
  nr = 0,
  Ni = null,
  Mi = 0,
  at = [],
  ut = 0,
  zn = null,
  It = 1,
  Ut = "";
function _n(e, t) {
  (tr[nr++] = Mi), (tr[nr++] = Ni), (Ni = e), (Mi = t);
}
function vf(e, t, n) {
  (at[ut++] = It), (at[ut++] = Ut), (at[ut++] = zn), (zn = e);
  var r = It;
  e = Ut;
  var l = 32 - wt(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var i = 32 - wt(t) + l;
  if (30 < i) {
    var o = l - (l % 5);
    (i = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (l -= o),
      (It = (1 << (32 - wt(t) + l)) | (n << l) | r),
      (Ut = i + e);
  } else (It = (1 << i) | (n << l) | r), (Ut = e);
}
function wu(e) {
  e.return !== null && (_n(e, 1), vf(e, 1, 0));
}
function Su(e) {
  for (; e === Ni; )
    (Ni = tr[--nr]), (tr[nr] = null), (Mi = tr[--nr]), (tr[nr] = null);
  for (; e === zn; )
    (zn = at[--ut]),
      (at[ut] = null),
      (Ut = at[--ut]),
      (at[ut] = null),
      (It = at[--ut]),
      (at[ut] = null);
}
var qe = null,
  be = null,
  de = !1,
  gt = null;
function yf(e, t) {
  var n = st(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function rc(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (qe = e), (be = un(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (qe = e), (be = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = zn !== null ? { id: It, overflow: Ut } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = st(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (qe = e),
            (be = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Pa(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function La(e) {
  if (de) {
    var t = be;
    if (t) {
      var n = t;
      if (!rc(e, t)) {
        if (Pa(e)) throw Error(D(418));
        t = un(n.nextSibling);
        var r = qe;
        t && rc(e, t)
          ? yf(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (de = !1), (qe = e));
      }
    } else {
      if (Pa(e)) throw Error(D(418));
      (e.flags = (e.flags & -4097) | 2), (de = !1), (qe = e);
    }
  }
}
function lc(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  qe = e;
}
function Jl(e) {
  if (e !== qe) return !1;
  if (!de) return lc(e), (de = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !_a(e.type, e.memoizedProps))),
    t && (t = be))
  ) {
    if (Pa(e)) throw (gf(), Error(D(418)));
    for (; t; ) yf(e, t), (t = un(t.nextSibling));
  }
  if ((lc(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(D(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              be = un(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      be = null;
    }
  } else be = qe ? un(e.stateNode.nextSibling) : null;
  return !0;
}
function gf() {
  for (var e = be; e; ) e = un(e.nextSibling);
}
function mr() {
  (be = qe = null), (de = !1);
}
function Eu(e) {
  gt === null ? (gt = [e]) : gt.push(e);
}
var yv = Vt.ReactCurrentBatchConfig;
function Fr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(D(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(D(147, e));
      var l = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (o) {
            var a = l.refs;
            o === null ? delete a[i] : (a[i] = o);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(D(284));
    if (!n._owner) throw Error(D(290, e));
  }
  return e;
}
function Gl(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      D(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    ))
  );
}
function ic(e) {
  var t = e._init;
  return t(e._payload);
}
function wf(e) {
  function t(m, f) {
    if (e) {
      var p = m.deletions;
      p === null ? ((m.deletions = [f]), (m.flags |= 16)) : p.push(f);
    }
  }
  function n(m, f) {
    if (!e) return null;
    for (; f !== null; ) t(m, f), (f = f.sibling);
    return null;
  }
  function r(m, f) {
    for (m = new Map(); f !== null; )
      f.key !== null ? m.set(f.key, f) : m.set(f.index, f), (f = f.sibling);
    return m;
  }
  function l(m, f) {
    return (m = fn(m, f)), (m.index = 0), (m.sibling = null), m;
  }
  function i(m, f, p) {
    return (
      (m.index = p),
      e
        ? ((p = m.alternate),
          p !== null
            ? ((p = p.index), p < f ? ((m.flags |= 2), f) : p)
            : ((m.flags |= 2), f))
        : ((m.flags |= 1048576), f)
    );
  }
  function o(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function a(m, f, p, _) {
    return f === null || f.tag !== 6
      ? ((f = Vo(p, m.mode, _)), (f.return = m), f)
      : ((f = l(f, p)), (f.return = m), f);
  }
  function u(m, f, p, _) {
    var P = p.type;
    return P === Jn
      ? d(m, f, p.props.children, _, p.key)
      : f !== null &&
          (f.elementType === P ||
            (typeof P == "object" &&
              P !== null &&
              P.$$typeof === bt &&
              ic(P) === f.type))
        ? ((_ = l(f, p.props)), (_.ref = Fr(m, f, p)), (_.return = m), _)
        : ((_ = vi(p.type, p.key, p.props, null, m.mode, _)),
          (_.ref = Fr(m, f, p)),
          (_.return = m),
          _);
  }
  function s(m, f, p, _) {
    return f === null ||
      f.tag !== 4 ||
      f.stateNode.containerInfo !== p.containerInfo ||
      f.stateNode.implementation !== p.implementation
      ? ((f = Ko(p, m.mode, _)), (f.return = m), f)
      : ((f = l(f, p.children || [])), (f.return = m), f);
  }
  function d(m, f, p, _, P) {
    return f === null || f.tag !== 7
      ? ((f = Mn(p, m.mode, _, P)), (f.return = m), f)
      : ((f = l(f, p)), (f.return = m), f);
  }
  function c(m, f, p) {
    if ((typeof f == "string" && f !== "") || typeof f == "number")
      return (f = Vo("" + f, m.mode, p)), (f.return = m), f;
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case Al:
          return (
            (p = vi(f.type, f.key, f.props, null, m.mode, p)),
            (p.ref = Fr(m, null, f)),
            (p.return = m),
            p
          );
        case Xn:
          return (f = Ko(f, m.mode, p)), (f.return = m), f;
        case bt:
          var _ = f._init;
          return c(m, _(f._payload), p);
      }
      if (Wr(f) || Dr(f))
        return (f = Mn(f, m.mode, p, null)), (f.return = m), f;
      Gl(m, f);
    }
    return null;
  }
  function h(m, f, p, _) {
    var P = f !== null ? f.key : null;
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return P !== null ? null : a(m, f, "" + p, _);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Al:
          return p.key === P ? u(m, f, p, _) : null;
        case Xn:
          return p.key === P ? s(m, f, p, _) : null;
        case bt:
          return (P = p._init), h(m, f, P(p._payload), _);
      }
      if (Wr(p) || Dr(p)) return P !== null ? null : d(m, f, p, _, null);
      Gl(m, p);
    }
    return null;
  }
  function x(m, f, p, _, P) {
    if ((typeof _ == "string" && _ !== "") || typeof _ == "number")
      return (m = m.get(p) || null), a(f, m, "" + _, P);
    if (typeof _ == "object" && _ !== null) {
      switch (_.$$typeof) {
        case Al:
          return (m = m.get(_.key === null ? p : _.key) || null), u(f, m, _, P);
        case Xn:
          return (m = m.get(_.key === null ? p : _.key) || null), s(f, m, _, P);
        case bt:
          var v = _._init;
          return x(m, f, p, v(_._payload), P);
      }
      if (Wr(_) || Dr(_)) return (m = m.get(p) || null), d(f, m, _, P, null);
      Gl(f, _);
    }
    return null;
  }
  function w(m, f, p, _) {
    for (
      var P = null, v = null, T = f, C = (f = 0), M = null;
      T !== null && C < p.length;
      C++
    ) {
      T.index > C ? ((M = T), (T = null)) : (M = T.sibling);
      var O = h(m, T, p[C], _);
      if (O === null) {
        T === null && (T = M);
        break;
      }
      e && T && O.alternate === null && t(m, T),
        (f = i(O, f, C)),
        v === null ? (P = O) : (v.sibling = O),
        (v = O),
        (T = M);
    }
    if (C === p.length) return n(m, T), de && _n(m, C), P;
    if (T === null) {
      for (; C < p.length; C++)
        (T = c(m, p[C], _)),
          T !== null &&
            ((f = i(T, f, C)), v === null ? (P = T) : (v.sibling = T), (v = T));
      return de && _n(m, C), P;
    }
    for (T = r(m, T); C < p.length; C++)
      (M = x(T, m, C, p[C], _)),
        M !== null &&
          (e && M.alternate !== null && T.delete(M.key === null ? C : M.key),
          (f = i(M, f, C)),
          v === null ? (P = M) : (v.sibling = M),
          (v = M));
    return (
      e &&
        T.forEach(function (W) {
          return t(m, W);
        }),
      de && _n(m, C),
      P
    );
  }
  function S(m, f, p, _) {
    var P = Dr(p);
    if (typeof P != "function") throw Error(D(150));
    if (((p = P.call(p)), p == null)) throw Error(D(151));
    for (
      var v = (P = null), T = f, C = (f = 0), M = null, O = p.next();
      T !== null && !O.done;
      C++, O = p.next()
    ) {
      T.index > C ? ((M = T), (T = null)) : (M = T.sibling);
      var W = h(m, T, O.value, _);
      if (W === null) {
        T === null && (T = M);
        break;
      }
      e && T && W.alternate === null && t(m, T),
        (f = i(W, f, C)),
        v === null ? (P = W) : (v.sibling = W),
        (v = W),
        (T = M);
    }
    if (O.done) return n(m, T), de && _n(m, C), P;
    if (T === null) {
      for (; !O.done; C++, O = p.next())
        (O = c(m, O.value, _)),
          O !== null &&
            ((f = i(O, f, C)), v === null ? (P = O) : (v.sibling = O), (v = O));
      return de && _n(m, C), P;
    }
    for (T = r(m, T); !O.done; C++, O = p.next())
      (O = x(T, m, C, O.value, _)),
        O !== null &&
          (e && O.alternate !== null && T.delete(O.key === null ? C : O.key),
          (f = i(O, f, C)),
          v === null ? (P = O) : (v.sibling = O),
          (v = O));
    return (
      e &&
        T.forEach(function (X) {
          return t(m, X);
        }),
      de && _n(m, C),
      P
    );
  }
  function L(m, f, p, _) {
    if (
      (typeof p == "object" &&
        p !== null &&
        p.type === Jn &&
        p.key === null &&
        (p = p.props.children),
      typeof p == "object" && p !== null)
    ) {
      switch (p.$$typeof) {
        case Al:
          e: {
            for (var P = p.key, v = f; v !== null; ) {
              if (v.key === P) {
                if (((P = p.type), P === Jn)) {
                  if (v.tag === 7) {
                    n(m, v.sibling),
                      (f = l(v, p.props.children)),
                      (f.return = m),
                      (m = f);
                    break e;
                  }
                } else if (
                  v.elementType === P ||
                  (typeof P == "object" &&
                    P !== null &&
                    P.$$typeof === bt &&
                    ic(P) === v.type)
                ) {
                  n(m, v.sibling),
                    (f = l(v, p.props)),
                    (f.ref = Fr(m, v, p)),
                    (f.return = m),
                    (m = f);
                  break e;
                }
                n(m, v);
                break;
              } else t(m, v);
              v = v.sibling;
            }
            p.type === Jn
              ? ((f = Mn(p.props.children, m.mode, _, p.key)),
                (f.return = m),
                (m = f))
              : ((_ = vi(p.type, p.key, p.props, null, m.mode, _)),
                (_.ref = Fr(m, f, p)),
                (_.return = m),
                (m = _));
          }
          return o(m);
        case Xn:
          e: {
            for (v = p.key; f !== null; ) {
              if (f.key === v)
                if (
                  f.tag === 4 &&
                  f.stateNode.containerInfo === p.containerInfo &&
                  f.stateNode.implementation === p.implementation
                ) {
                  n(m, f.sibling),
                    (f = l(f, p.children || [])),
                    (f.return = m),
                    (m = f);
                  break e;
                } else {
                  n(m, f);
                  break;
                }
              else t(m, f);
              f = f.sibling;
            }
            (f = Ko(p, m.mode, _)), (f.return = m), (m = f);
          }
          return o(m);
        case bt:
          return (v = p._init), L(m, f, v(p._payload), _);
      }
      if (Wr(p)) return w(m, f, p, _);
      if (Dr(p)) return S(m, f, p, _);
      Gl(m, p);
    }
    return (typeof p == "string" && p !== "") || typeof p == "number"
      ? ((p = "" + p),
        f !== null && f.tag === 6
          ? (n(m, f.sibling), (f = l(f, p)), (f.return = m), (m = f))
          : (n(m, f), (f = Vo(p, m.mode, _)), (f.return = m), (m = f)),
        o(m))
      : n(m, f);
  }
  return L;
}
var vr = wf(!0),
  Sf = wf(!1),
  Oi = wn(null),
  zi = null,
  rr = null,
  xu = null;
function _u() {
  xu = rr = zi = null;
}
function ku(e) {
  var t = Oi.current;
  ae(Oi), (e._currentValue = t);
}
function Ta(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function dr(e, t) {
  (zi = e),
    (xu = rr = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ke = !0), (e.firstContext = null));
}
function dt(e) {
  var t = e._currentValue;
  if (xu !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), rr === null)) {
      if (zi === null) throw Error(D(308));
      (rr = e), (zi.dependencies = { lanes: 0, firstContext: e });
    } else rr = rr.next = e;
  return t;
}
var Cn = null;
function Ru(e) {
  Cn === null ? (Cn = [e]) : Cn.push(e);
}
function Ef(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), Ru(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    Ht(e, r)
  );
}
function Ht(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var qt = !1;
function Cu(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function xf(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function At(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function sn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), J & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      Ht(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), Ru(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    Ht(e, n)
  );
}
function ci(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), du(e, n);
  }
}
function oc(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (l = i = o) : (i = i.next = o), (n = n.next);
      } while (n !== null);
      i === null ? (l = i = t) : (i = i.next = t);
    } else l = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Fi(e, t, n, r) {
  var l = e.updateQueue;
  qt = !1;
  var i = l.firstBaseUpdate,
    o = l.lastBaseUpdate,
    a = l.shared.pending;
  if (a !== null) {
    l.shared.pending = null;
    var u = a,
      s = u.next;
    (u.next = null), o === null ? (i = s) : (o.next = s), (o = u);
    var d = e.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (a = d.lastBaseUpdate),
      a !== o &&
        (a === null ? (d.firstBaseUpdate = s) : (a.next = s),
        (d.lastBaseUpdate = u)));
  }
  if (i !== null) {
    var c = l.baseState;
    (o = 0), (d = s = u = null), (a = i);
    do {
      var h = a.lane,
        x = a.eventTime;
      if ((r & h) === h) {
        d !== null &&
          (d = d.next =
            {
              eventTime: x,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var w = e,
            S = a;
          switch (((h = t), (x = n), S.tag)) {
            case 1:
              if (((w = S.payload), typeof w == "function")) {
                c = w.call(x, c, h);
                break e;
              }
              c = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (
                ((w = S.payload),
                (h = typeof w == "function" ? w.call(x, c, h) : w),
                h == null)
              )
                break e;
              c = pe({}, c, h);
              break e;
            case 2:
              qt = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (h = l.effects),
          h === null ? (l.effects = [a]) : h.push(a));
      } else
        (x = {
          eventTime: x,
          lane: h,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          d === null ? ((s = d = x), (u = c)) : (d = d.next = x),
          (o |= h);
      if (((a = a.next), a === null)) {
        if (((a = l.shared.pending), a === null)) break;
        (h = a),
          (a = h.next),
          (h.next = null),
          (l.lastBaseUpdate = h),
          (l.shared.pending = null);
      }
    } while (!0);
    if (
      (d === null && (u = c),
      (l.baseState = u),
      (l.firstBaseUpdate = s),
      (l.lastBaseUpdate = d),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (o |= l.lane), (l = l.next);
      while (l !== t);
    } else i === null && (l.shared.lanes = 0);
    (jn |= o), (e.lanes = o), (e.memoizedState = c);
  }
}
function ac(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(D(191, l));
        l.call(r);
      }
    }
}
var Cl = {},
  Dt = wn(Cl),
  hl = wn(Cl),
  pl = wn(Cl);
function Pn(e) {
  if (e === Cl) throw Error(D(174));
  return e;
}
function Pu(e, t) {
  switch ((le(pl, t), le(hl, e), le(Dt, Cl), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : sa(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = sa(t, e));
  }
  ae(Dt), le(Dt, t);
}
function yr() {
  ae(Dt), ae(hl), ae(pl);
}
function _f(e) {
  Pn(pl.current);
  var t = Pn(Dt.current),
    n = sa(t, e.type);
  t !== n && (le(hl, e), le(Dt, n));
}
function Lu(e) {
  hl.current === e && (ae(Dt), ae(hl));
}
var fe = wn(0);
function ji(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Uo = [];
function Tu() {
  for (var e = 0; e < Uo.length; e++)
    Uo[e]._workInProgressVersionPrimary = null;
  Uo.length = 0;
}
var di = Vt.ReactCurrentDispatcher,
  Ao = Vt.ReactCurrentBatchConfig,
  Fn = 0,
  he = null,
  _e = null,
  Re = null,
  Ii = !1,
  br = !1,
  ml = 0,
  gv = 0;
function Me() {
  throw Error(D(321));
}
function Du(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Et(e[n], t[n])) return !1;
  return !0;
}
function Nu(e, t, n, r, l, i) {
  if (
    ((Fn = i),
    (he = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (di.current = e === null || e.memoizedState === null ? xv : _v),
    (e = n(r, l)),
    br)
  ) {
    i = 0;
    do {
      if (((br = !1), (ml = 0), 25 <= i)) throw Error(D(301));
      (i += 1),
        (Re = _e = null),
        (t.updateQueue = null),
        (di.current = kv),
        (e = n(r, l));
    } while (br);
  }
  if (
    ((di.current = Ui),
    (t = _e !== null && _e.next !== null),
    (Fn = 0),
    (Re = _e = he = null),
    (Ii = !1),
    t)
  )
    throw Error(D(300));
  return e;
}
function Mu() {
  var e = ml !== 0;
  return (ml = 0), e;
}
function Ct() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Re === null ? (he.memoizedState = Re = e) : (Re = Re.next = e), Re;
}
function ft() {
  if (_e === null) {
    var e = he.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = _e.next;
  var t = Re === null ? he.memoizedState : Re.next;
  if (t !== null) (Re = t), (_e = e);
  else {
    if (e === null) throw Error(D(310));
    (_e = e),
      (e = {
        memoizedState: _e.memoizedState,
        baseState: _e.baseState,
        baseQueue: _e.baseQueue,
        queue: _e.queue,
        next: null,
      }),
      Re === null ? (he.memoizedState = Re = e) : (Re = Re.next = e);
  }
  return Re;
}
function vl(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function $o(e) {
  var t = ft(),
    n = t.queue;
  if (n === null) throw Error(D(311));
  n.lastRenderedReducer = e;
  var r = _e,
    l = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (l !== null) {
      var o = l.next;
      (l.next = i.next), (i.next = o);
    }
    (r.baseQueue = l = i), (n.pending = null);
  }
  if (l !== null) {
    (i = l.next), (r = r.baseState);
    var a = (o = null),
      u = null,
      s = i;
    do {
      var d = s.lane;
      if ((Fn & d) === d)
        u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: s.action,
              hasEagerState: s.hasEagerState,
              eagerState: s.eagerState,
              next: null,
            }),
          (r = s.hasEagerState ? s.eagerState : e(r, s.action));
      else {
        var c = {
          lane: d,
          action: s.action,
          hasEagerState: s.hasEagerState,
          eagerState: s.eagerState,
          next: null,
        };
        u === null ? ((a = u = c), (o = r)) : (u = u.next = c),
          (he.lanes |= d),
          (jn |= d);
      }
      s = s.next;
    } while (s !== null && s !== i);
    u === null ? (o = r) : (u.next = a),
      Et(r, t.memoizedState) || (Ke = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = u),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (i = l.lane), (he.lanes |= i), (jn |= i), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Bo(e) {
  var t = ft(),
    n = t.queue;
  if (n === null) throw Error(D(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    i = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var o = (l = l.next);
    do (i = e(i, o.action)), (o = o.next);
    while (o !== l);
    Et(i, t.memoizedState) || (Ke = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function kf() {}
function Rf(e, t) {
  var n = he,
    r = ft(),
    l = t(),
    i = !Et(r.memoizedState, l);
  if (
    (i && ((r.memoizedState = l), (Ke = !0)),
    (r = r.queue),
    Ou(Lf.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (Re !== null && Re.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      yl(9, Pf.bind(null, n, r, l, t), void 0, null),
      Ce === null)
    )
      throw Error(D(349));
    Fn & 30 || Cf(n, t, l);
  }
  return l;
}
function Cf(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = he.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (he.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Pf(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Tf(t) && Df(e);
}
function Lf(e, t, n) {
  return n(function () {
    Tf(t) && Df(e);
  });
}
function Tf(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Et(e, n);
  } catch {
    return !0;
  }
}
function Df(e) {
  var t = Ht(e, 1);
  t !== null && St(t, e, 1, -1);
}
function uc(e) {
  var t = Ct();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: vl,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Ev.bind(null, he, e)),
    [t.memoizedState, e]
  );
}
function yl(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = he.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (he.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Nf() {
  return ft().memoizedState;
}
function fi(e, t, n, r) {
  var l = Ct();
  (he.flags |= e),
    (l.memoizedState = yl(1 | t, n, void 0, r === void 0 ? null : r));
}
function no(e, t, n, r) {
  var l = ft();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (_e !== null) {
    var o = _e.memoizedState;
    if (((i = o.destroy), r !== null && Du(r, o.deps))) {
      l.memoizedState = yl(t, n, i, r);
      return;
    }
  }
  (he.flags |= e), (l.memoizedState = yl(1 | t, n, i, r));
}
function sc(e, t) {
  return fi(8390656, 8, e, t);
}
function Ou(e, t) {
  return no(2048, 8, e, t);
}
function Mf(e, t) {
  return no(4, 2, e, t);
}
function Of(e, t) {
  return no(4, 4, e, t);
}
function zf(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Ff(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), no(4, 4, zf.bind(null, t, e), n)
  );
}
function zu() {}
function jf(e, t) {
  var n = ft();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Du(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function If(e, t) {
  var n = ft();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Du(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Uf(e, t, n) {
  return Fn & 21
    ? (Et(n, t) || ((n = Hd()), (he.lanes |= n), (jn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ke = !0)), (e.memoizedState = n));
}
function wv(e, t) {
  var n = q;
  (q = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Ao.transition;
  Ao.transition = {};
  try {
    e(!1), t();
  } finally {
    (q = n), (Ao.transition = r);
  }
}
function Af() {
  return ft().memoizedState;
}
function Sv(e, t, n) {
  var r = dn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    $f(e))
  )
    Bf(t, n);
  else if (((n = Ef(e, t, n, r)), n !== null)) {
    var l = Be();
    St(n, e, r, l), Hf(n, t, r);
  }
}
function Ev(e, t, n) {
  var r = dn(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if ($f(e)) Bf(t, l);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var o = t.lastRenderedState,
          a = i(o, n);
        if (((l.hasEagerState = !0), (l.eagerState = a), Et(a, o))) {
          var u = t.interleaved;
          u === null
            ? ((l.next = l), Ru(t))
            : ((l.next = u.next), (u.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = Ef(e, t, l, r)),
      n !== null && ((l = Be()), St(n, e, r, l), Hf(n, t, r));
  }
}
function $f(e) {
  var t = e.alternate;
  return e === he || (t !== null && t === he);
}
function Bf(e, t) {
  br = Ii = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Hf(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), du(e, n);
  }
}
var Ui = {
    readContext: dt,
    useCallback: Me,
    useContext: Me,
    useEffect: Me,
    useImperativeHandle: Me,
    useInsertionEffect: Me,
    useLayoutEffect: Me,
    useMemo: Me,
    useReducer: Me,
    useRef: Me,
    useState: Me,
    useDebugValue: Me,
    useDeferredValue: Me,
    useTransition: Me,
    useMutableSource: Me,
    useSyncExternalStore: Me,
    useId: Me,
    unstable_isNewReconciler: !1,
  },
  xv = {
    readContext: dt,
    useCallback: function (e, t) {
      return (Ct().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: dt,
    useEffect: sc,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        fi(4194308, 4, zf.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return fi(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return fi(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Ct();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Ct();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Sv.bind(null, he, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Ct();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: uc,
    useDebugValue: zu,
    useDeferredValue: function (e) {
      return (Ct().memoizedState = e);
    },
    useTransition: function () {
      var e = uc(!1),
        t = e[0];
      return (e = wv.bind(null, e[1])), (Ct().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = he,
        l = Ct();
      if (de) {
        if (n === void 0) throw Error(D(407));
        n = n();
      } else {
        if (((n = t()), Ce === null)) throw Error(D(349));
        Fn & 30 || Cf(r, t, n);
      }
      l.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (l.queue = i),
        sc(Lf.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        yl(9, Pf.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Ct(),
        t = Ce.identifierPrefix;
      if (de) {
        var n = Ut,
          r = It;
        (n = (r & ~(1 << (32 - wt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = ml++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = gv++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  _v = {
    readContext: dt,
    useCallback: jf,
    useContext: dt,
    useEffect: Ou,
    useImperativeHandle: Ff,
    useInsertionEffect: Mf,
    useLayoutEffect: Of,
    useMemo: If,
    useReducer: $o,
    useRef: Nf,
    useState: function () {
      return $o(vl);
    },
    useDebugValue: zu,
    useDeferredValue: function (e) {
      var t = ft();
      return Uf(t, _e.memoizedState, e);
    },
    useTransition: function () {
      var e = $o(vl)[0],
        t = ft().memoizedState;
      return [e, t];
    },
    useMutableSource: kf,
    useSyncExternalStore: Rf,
    useId: Af,
    unstable_isNewReconciler: !1,
  },
  kv = {
    readContext: dt,
    useCallback: jf,
    useContext: dt,
    useEffect: Ou,
    useImperativeHandle: Ff,
    useInsertionEffect: Mf,
    useLayoutEffect: Of,
    useMemo: If,
    useReducer: Bo,
    useRef: Nf,
    useState: function () {
      return Bo(vl);
    },
    useDebugValue: zu,
    useDeferredValue: function (e) {
      var t = ft();
      return _e === null ? (t.memoizedState = e) : Uf(t, _e.memoizedState, e);
    },
    useTransition: function () {
      var e = Bo(vl)[0],
        t = ft().memoizedState;
      return [e, t];
    },
    useMutableSource: kf,
    useSyncExternalStore: Rf,
    useId: Af,
    unstable_isNewReconciler: !1,
  };
function mt(e, t) {
  if (e && e.defaultProps) {
    (t = pe({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Da(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : pe({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var ro = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? An(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Be(),
      l = dn(e),
      i = At(r, l);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = sn(e, i, l)),
      t !== null && (St(t, e, l, r), ci(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Be(),
      l = dn(e),
      i = At(r, l);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = sn(e, i, l)),
      t !== null && (St(t, e, l, r), ci(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Be(),
      r = dn(e),
      l = At(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = sn(e, l, r)),
      t !== null && (St(t, e, r, n), ci(t, e, r));
  },
};
function cc(e, t, n, r, l, i, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, o)
      : t.prototype && t.prototype.isPureReactComponent
        ? !sl(n, r) || !sl(l, i)
        : !0
  );
}
function Wf(e, t, n) {
  var r = !1,
    l = pn,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = dt(i))
      : ((l = Ye(t) ? On : je.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? pr(e, l) : pn)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = ro),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function dc(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && ro.enqueueReplaceState(t, t.state, null);
}
function Na(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = {}), Cu(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (l.context = dt(i))
    : ((i = Ye(t) ? On : je.current), (l.context = pr(e, i))),
    (l.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (Da(e, t, i, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && ro.enqueueReplaceState(l, l.state, null),
      Fi(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function gr(e, t) {
  try {
    var n = "",
      r = t;
    do (n += bp(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (i) {
    l =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function Ho(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ma(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Rv = typeof WeakMap == "function" ? WeakMap : Map;
function Vf(e, t, n) {
  (n = At(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      $i || (($i = !0), (Ha = r)), Ma(e, t);
    }),
    n
  );
}
function Kf(e, t, n) {
  (n = At(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        Ma(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        Ma(e, t),
          typeof r != "function" &&
            (cn === null ? (cn = new Set([this])) : cn.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function fc(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Rv();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = Av.bind(null, e, t, n)), t.then(e, e));
}
function hc(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function pc(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = At(-1, 1)), (t.tag = 2), sn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Cv = Vt.ReactCurrentOwner,
  Ke = !1;
function $e(e, t, n, r) {
  t.child = e === null ? Sf(t, null, n, r) : vr(t, e.child, n, r);
}
function mc(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return (
    dr(t, l),
    (r = Nu(e, t, n, r, i, l)),
    (n = Mu()),
    e !== null && !Ke
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Wt(e, t, l))
      : (de && n && wu(t), (t.flags |= 1), $e(e, t, r, l), t.child)
  );
}
function vc(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !Hu(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), Qf(e, t, i, r, l))
      : ((e = vi(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & l))) {
    var o = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : sl), n(o, r) && e.ref === t.ref)
    )
      return Wt(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = fn(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Qf(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (sl(i, r) && e.ref === t.ref)
      if (((Ke = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0))
        e.flags & 131072 && (Ke = !0);
      else return (t.lanes = e.lanes), Wt(e, t, l);
  }
  return Oa(e, t, n, r, l);
}
function Yf(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        le(ir, Ge),
        (Ge |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          le(ir, Ge),
          (Ge |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        le(ir, Ge),
        (Ge |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      le(ir, Ge),
      (Ge |= r);
  return $e(e, t, l, n), t.child;
}
function Xf(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Oa(e, t, n, r, l) {
  var i = Ye(n) ? On : je.current;
  return (
    (i = pr(t, i)),
    dr(t, l),
    (n = Nu(e, t, n, r, i, l)),
    (r = Mu()),
    e !== null && !Ke
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Wt(e, t, l))
      : (de && r && wu(t), (t.flags |= 1), $e(e, t, n, l), t.child)
  );
}
function yc(e, t, n, r, l) {
  if (Ye(n)) {
    var i = !0;
    Di(t);
  } else i = !1;
  if ((dr(t, l), t.stateNode === null))
    hi(e, t), Wf(t, n, r), Na(t, n, r, l), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      a = t.memoizedProps;
    o.props = a;
    var u = o.context,
      s = n.contextType;
    typeof s == "object" && s !== null
      ? (s = dt(s))
      : ((s = Ye(n) ? On : je.current), (s = pr(t, s)));
    var d = n.getDerivedStateFromProps,
      c =
        typeof d == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    c ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== r || u !== s) && dc(t, o, r, s)),
      (qt = !1);
    var h = t.memoizedState;
    (o.state = h),
      Fi(t, r, o, l),
      (u = t.memoizedState),
      a !== r || h !== u || Qe.current || qt
        ? (typeof d == "function" && (Da(t, n, d, r), (u = t.memoizedState)),
          (a = qt || cc(t, n, a, r, h, u, s))
            ? (c ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = u)),
          (o.props = r),
          (o.state = u),
          (o.context = s),
          (r = a))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (o = t.stateNode),
      xf(e, t),
      (a = t.memoizedProps),
      (s = t.type === t.elementType ? a : mt(t.type, a)),
      (o.props = s),
      (c = t.pendingProps),
      (h = o.context),
      (u = n.contextType),
      typeof u == "object" && u !== null
        ? (u = dt(u))
        : ((u = Ye(n) ? On : je.current), (u = pr(t, u)));
    var x = n.getDerivedStateFromProps;
    (d =
      typeof x == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== c || h !== u) && dc(t, o, r, u)),
      (qt = !1),
      (h = t.memoizedState),
      (o.state = h),
      Fi(t, r, o, l);
    var w = t.memoizedState;
    a !== c || h !== w || Qe.current || qt
      ? (typeof x == "function" && (Da(t, n, x, r), (w = t.memoizedState)),
        (s = qt || cc(t, n, s, r, h, w, u) || !1)
          ? (d ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, w, u),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, w, u)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (a === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = w)),
        (o.props = r),
        (o.state = w),
        (o.context = u),
        (r = s))
      : (typeof o.componentDidUpdate != "function" ||
          (a === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return za(e, t, n, r, i, l);
}
function za(e, t, n, r, l, i) {
  Xf(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return l && nc(t, n, !1), Wt(e, t, i);
  (r = t.stateNode), (Cv.current = t);
  var a =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = vr(t, e.child, null, i)), (t.child = vr(t, null, a, i)))
      : $e(e, t, a, i),
    (t.memoizedState = r.state),
    l && nc(t, n, !0),
    t.child
  );
}
function Jf(e) {
  var t = e.stateNode;
  t.pendingContext
    ? tc(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && tc(e, t.context, !1),
    Pu(e, t.containerInfo);
}
function gc(e, t, n, r, l) {
  return mr(), Eu(l), (t.flags |= 256), $e(e, t, n, r), t.child;
}
var Fa = { dehydrated: null, treeContext: null, retryLane: 0 };
function ja(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Gf(e, t, n) {
  var r = t.pendingProps,
    l = fe.current,
    i = !1,
    o = (t.flags & 128) !== 0,
    a;
  if (
    ((a = o) ||
      (a = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    a
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    le(fe, l & 1),
    e === null)
  )
    return (
      La(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = o))
                : (i = oo(o, r, 0, null)),
              (e = Mn(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = ja(n)),
              (t.memoizedState = Fa),
              e)
            : Fu(t, o))
    );
  if (((l = e.memoizedState), l !== null && ((a = l.dehydrated), a !== null)))
    return Pv(e, t, o, r, a, l, n);
  if (i) {
    (i = r.fallback), (o = t.mode), (l = e.child), (a = l.sibling);
    var u = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (t.deletions = null))
        : ((r = fn(l, u)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      a !== null ? (i = fn(a, i)) : ((i = Mn(i, o, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? ja(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (i.memoizedState = o),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = Fa),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = fn(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Fu(e, t) {
  return (
    (t = oo({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Zl(e, t, n, r) {
  return (
    r !== null && Eu(r),
    vr(t, e.child, null, n),
    (e = Fu(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Pv(e, t, n, r, l, i, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Ho(Error(D(422)))), Zl(e, t, o, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((i = r.fallback),
          (l = t.mode),
          (r = oo({ mode: "visible", children: r.children }, l, 0, null)),
          (i = Mn(i, l, o, null)),
          (i.flags |= 2),
          (r.return = t),
          (i.return = t),
          (r.sibling = i),
          (t.child = r),
          t.mode & 1 && vr(t, e.child, null, o),
          (t.child.memoizedState = ja(o)),
          (t.memoizedState = Fa),
          i);
  if (!(t.mode & 1)) return Zl(e, t, o, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (i = Error(D(419))), (r = Ho(i, r, void 0)), Zl(e, t, o, r);
  }
  if (((a = (o & e.childLanes) !== 0), Ke || a)) {
    if (((r = Ce), r !== null)) {
      switch (o & -o) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | o) ? 0 : l),
        l !== 0 &&
          l !== i.retryLane &&
          ((i.retryLane = l), Ht(e, l), St(r, e, l, -1));
    }
    return Bu(), (r = Ho(Error(D(421)))), Zl(e, t, o, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = $v.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (be = un(l.nextSibling)),
      (qe = t),
      (de = !0),
      (gt = null),
      e !== null &&
        ((at[ut++] = It),
        (at[ut++] = Ut),
        (at[ut++] = zn),
        (It = e.id),
        (Ut = e.overflow),
        (zn = t)),
      (t = Fu(t, r.children)),
      (t.flags |= 4096),
      t);
}
function wc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Ta(e.return, t, n);
}
function Wo(e, t, n, r, l) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = l));
}
function Zf(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    i = r.tail;
  if (($e(e, t, r.children, n), (r = fe.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && wc(e, n, t);
        else if (e.tag === 19) wc(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((le(fe, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && ji(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          Wo(t, !1, l, n, i);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && ji(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        Wo(t, !0, n, null, i);
        break;
      case "together":
        Wo(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function hi(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Wt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (jn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(D(153));
  if (t.child !== null) {
    for (
      e = t.child, n = fn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = fn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Lv(e, t, n) {
  switch (t.tag) {
    case 3:
      Jf(t), mr();
      break;
    case 5:
      _f(t);
      break;
    case 1:
      Ye(t.type) && Di(t);
      break;
    case 4:
      Pu(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      le(Oi, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (le(fe, fe.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? Gf(e, t, n)
            : (le(fe, fe.current & 1),
              (e = Wt(e, t, n)),
              e !== null ? e.sibling : null);
      le(fe, fe.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Zf(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        le(fe, fe.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Yf(e, t, n);
  }
  return Wt(e, t, n);
}
var bf, Ia, qf, eh;
bf = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Ia = function () {};
qf = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), Pn(Dt.current);
    var i = null;
    switch (n) {
      case "input":
        (l = ia(e, l)), (r = ia(e, r)), (i = []);
        break;
      case "select":
        (l = pe({}, l, { value: void 0 })),
          (r = pe({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (l = ua(e, l)), (r = ua(e, r)), (i = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Li);
    }
    ca(n, r);
    var o;
    n = null;
    for (s in l)
      if (!r.hasOwnProperty(s) && l.hasOwnProperty(s) && l[s] != null)
        if (s === "style") {
          var a = l[s];
          for (o in a) a.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          s !== "dangerouslySetInnerHTML" &&
            s !== "children" &&
            s !== "suppressContentEditableWarning" &&
            s !== "suppressHydrationWarning" &&
            s !== "autoFocus" &&
            (nl.hasOwnProperty(s)
              ? i || (i = [])
              : (i = i || []).push(s, null));
    for (s in r) {
      var u = r[s];
      if (
        ((a = l != null ? l[s] : void 0),
        r.hasOwnProperty(s) && u !== a && (u != null || a != null))
      )
        if (s === "style")
          if (a) {
            for (o in a)
              !a.hasOwnProperty(o) ||
                (u && u.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in u)
              u.hasOwnProperty(o) &&
                a[o] !== u[o] &&
                (n || (n = {}), (n[o] = u[o]));
          } else n || (i || (i = []), i.push(s, n)), (n = u);
        else
          s === "dangerouslySetInnerHTML"
            ? ((u = u ? u.__html : void 0),
              (a = a ? a.__html : void 0),
              u != null && a !== u && (i = i || []).push(s, u))
            : s === "children"
              ? (typeof u != "string" && typeof u != "number") ||
                (i = i || []).push(s, "" + u)
              : s !== "suppressContentEditableWarning" &&
                s !== "suppressHydrationWarning" &&
                (nl.hasOwnProperty(s)
                  ? (u != null && s === "onScroll" && oe("scroll", e),
                    i || a === u || (i = []))
                  : (i = i || []).push(s, u));
    }
    n && (i = i || []).push("style", n);
    var s = i;
    (t.updateQueue = s) && (t.flags |= 4);
  }
};
eh = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function jr(e, t) {
  if (!de)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Oe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Tv(e, t, n) {
  var r = t.pendingProps;
  switch ((Su(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Oe(t), null;
    case 1:
      return Ye(t.type) && Ti(), Oe(t), null;
    case 3:
      return (
        (r = t.stateNode),
        yr(),
        ae(Qe),
        ae(je),
        Tu(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Jl(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), gt !== null && (Ka(gt), (gt = null)))),
        Ia(e, t),
        Oe(t),
        null
      );
    case 5:
      Lu(t);
      var l = Pn(pl.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        qf(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(D(166));
          return Oe(t), null;
        }
        if (((e = Pn(Dt.current)), Jl(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[Pt] = t), (r[fl] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              oe("cancel", r), oe("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              oe("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Kr.length; l++) oe(Kr[l], r);
              break;
            case "source":
              oe("error", r);
              break;
            case "img":
            case "image":
            case "link":
              oe("error", r), oe("load", r);
              break;
            case "details":
              oe("toggle", r);
              break;
            case "input":
              Ls(r, i), oe("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                oe("invalid", r);
              break;
            case "textarea":
              Ds(r, i), oe("invalid", r);
          }
          ca(n, i), (l = null);
          for (var o in i)
            if (i.hasOwnProperty(o)) {
              var a = i[o];
              o === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (i.suppressHydrationWarning !== !0 &&
                      Xl(r.textContent, a, e),
                    (l = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (i.suppressHydrationWarning !== !0 &&
                      Xl(r.textContent, a, e),
                    (l = ["children", "" + a]))
                : nl.hasOwnProperty(o) &&
                  a != null &&
                  o === "onScroll" &&
                  oe("scroll", r);
            }
          switch (n) {
            case "input":
              $l(r), Ts(r, i, !0);
              break;
            case "textarea":
              $l(r), Ns(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Li);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Pd(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                  ? (e = o.createElement(n, { is: r.is }))
                  : ((e = o.createElement(n)),
                    n === "select" &&
                      ((o = e),
                      r.multiple
                        ? (o.multiple = !0)
                        : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[Pt] = t),
            (e[fl] = r),
            bf(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = da(n, r)), n)) {
              case "dialog":
                oe("cancel", e), oe("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                oe("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Kr.length; l++) oe(Kr[l], e);
                l = r;
                break;
              case "source":
                oe("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                oe("error", e), oe("load", e), (l = r);
                break;
              case "details":
                oe("toggle", e), (l = r);
                break;
              case "input":
                Ls(e, r), (l = ia(e, r)), oe("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = pe({}, r, { value: void 0 })),
                  oe("invalid", e);
                break;
              case "textarea":
                Ds(e, r), (l = ua(e, r)), oe("invalid", e);
                break;
              default:
                l = r;
            }
            ca(n, l), (a = l);
            for (i in a)
              if (a.hasOwnProperty(i)) {
                var u = a[i];
                i === "style"
                  ? Dd(e, u)
                  : i === "dangerouslySetInnerHTML"
                    ? ((u = u ? u.__html : void 0), u != null && Ld(e, u))
                    : i === "children"
                      ? typeof u == "string"
                        ? (n !== "textarea" || u !== "") && rl(e, u)
                        : typeof u == "number" && rl(e, "" + u)
                      : i !== "suppressContentEditableWarning" &&
                        i !== "suppressHydrationWarning" &&
                        i !== "autoFocus" &&
                        (nl.hasOwnProperty(i)
                          ? u != null && i === "onScroll" && oe("scroll", e)
                          : u != null && iu(e, i, u, o));
              }
            switch (n) {
              case "input":
                $l(e), Ts(e, r, !1);
                break;
              case "textarea":
                $l(e), Ns(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + hn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? ar(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      ar(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Li);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Oe(t), null;
    case 6:
      if (e && t.stateNode != null) eh(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(D(166));
        if (((n = Pn(pl.current)), Pn(Dt.current), Jl(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Pt] = t),
            (i = r.nodeValue !== n) && ((e = qe), e !== null))
          )
            switch (e.tag) {
              case 3:
                Xl(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Xl(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Pt] = t),
            (t.stateNode = r);
      }
      return Oe(t), null;
    case 13:
      if (
        (ae(fe),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (de && be !== null && t.mode & 1 && !(t.flags & 128))
          gf(), mr(), (t.flags |= 98560), (i = !1);
        else if (((i = Jl(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(D(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(D(317));
            i[Pt] = t;
          } else
            mr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Oe(t), (i = !1);
        } else gt !== null && (Ka(gt), (gt = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || fe.current & 1 ? ke === 0 && (ke = 3) : Bu())),
          t.updateQueue !== null && (t.flags |= 4),
          Oe(t),
          null);
    case 4:
      return (
        yr(), Ia(e, t), e === null && cl(t.stateNode.containerInfo), Oe(t), null
      );
    case 10:
      return ku(t.type._context), Oe(t), null;
    case 17:
      return Ye(t.type) && Ti(), Oe(t), null;
    case 19:
      if ((ae(fe), (i = t.memoizedState), i === null)) return Oe(t), null;
      if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
        if (r) jr(i, !1);
        else {
          if (ke !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = ji(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    jr(i, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (o = i.alternate),
                    o === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = o.childLanes),
                        (i.lanes = o.lanes),
                        (i.child = o.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = o.memoizedProps),
                        (i.memoizedState = o.memoizedState),
                        (i.updateQueue = o.updateQueue),
                        (i.type = o.type),
                        (e = o.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return le(fe, (fe.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            ye() > wr &&
            ((t.flags |= 128), (r = !0), jr(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = ji(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              jr(i, !0),
              i.tail === null && i.tailMode === "hidden" && !o.alternate && !de)
            )
              return Oe(t), null;
          } else
            2 * ye() - i.renderingStartTime > wr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), jr(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = i.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (i.last = o));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = ye()),
          (t.sibling = null),
          (n = fe.current),
          le(fe, r ? (n & 1) | 2 : n & 1),
          t)
        : (Oe(t), null);
    case 22:
    case 23:
      return (
        $u(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Ge & 1073741824 && (Oe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Oe(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(D(156, t.tag));
}
function Dv(e, t) {
  switch ((Su(t), t.tag)) {
    case 1:
      return (
        Ye(t.type) && Ti(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        yr(),
        ae(Qe),
        ae(je),
        Tu(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Lu(t), null;
    case 13:
      if (
        (ae(fe), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(D(340));
        mr();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return ae(fe), null;
    case 4:
      return yr(), null;
    case 10:
      return ku(t.type._context), null;
    case 22:
    case 23:
      return $u(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var bl = !1,
  ze = !1,
  Nv = typeof WeakSet == "function" ? WeakSet : Set,
  j = null;
function lr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        ve(e, t, r);
      }
    else n.current = null;
}
function Ua(e, t, n) {
  try {
    n();
  } catch (r) {
    ve(e, t, r);
  }
}
var Sc = !1;
function Mv(e, t) {
  if (((Ea = Ri), (e = lf()), gu(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            a = -1,
            u = -1,
            s = 0,
            d = 0,
            c = e,
            h = null;
          t: for (;;) {
            for (
              var x;
              c !== n || (l !== 0 && c.nodeType !== 3) || (a = o + l),
                c !== i || (r !== 0 && c.nodeType !== 3) || (u = o + r),
                c.nodeType === 3 && (o += c.nodeValue.length),
                (x = c.firstChild) !== null;

            )
              (h = c), (c = x);
            for (;;) {
              if (c === e) break t;
              if (
                (h === n && ++s === l && (a = o),
                h === i && ++d === r && (u = o),
                (x = c.nextSibling) !== null)
              )
                break;
              (c = h), (h = c.parentNode);
            }
            c = x;
          }
          n = a === -1 || u === -1 ? null : { start: a, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (xa = { focusedElem: e, selectionRange: n }, Ri = !1, j = t; j !== null; )
    if (((t = j), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (j = e);
    else
      for (; j !== null; ) {
        t = j;
        try {
          var w = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var S = w.memoizedProps,
                    L = w.memoizedState,
                    m = t.stateNode,
                    f = m.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? S : mt(t.type, S),
                      L,
                    );
                  m.__reactInternalSnapshotBeforeUpdate = f;
                }
                break;
              case 3:
                var p = t.stateNode.containerInfo;
                p.nodeType === 1
                  ? (p.textContent = "")
                  : p.nodeType === 9 &&
                    p.documentElement &&
                    p.removeChild(p.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(D(163));
            }
        } catch (_) {
          ve(t, t.return, _);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (j = e);
          break;
        }
        j = t.return;
      }
  return (w = Sc), (Sc = !1), w;
}
function qr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        (l.destroy = void 0), i !== void 0 && Ua(t, n, i);
      }
      l = l.next;
    } while (l !== r);
  }
}
function lo(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Aa(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function th(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), th(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Pt], delete t[fl], delete t[Ra], delete t[pv], delete t[mv])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function nh(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Ec(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || nh(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function $a(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Li));
  else if (r !== 4 && ((e = e.child), e !== null))
    for ($a(e, t, n), e = e.sibling; e !== null; ) $a(e, t, n), (e = e.sibling);
}
function Ba(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ba(e, t, n), e = e.sibling; e !== null; ) Ba(e, t, n), (e = e.sibling);
}
var Te = null,
  vt = !1;
function Jt(e, t, n) {
  for (n = n.child; n !== null; ) rh(e, t, n), (n = n.sibling);
}
function rh(e, t, n) {
  if (Tt && typeof Tt.onCommitFiberUnmount == "function")
    try {
      Tt.onCommitFiberUnmount(Gi, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ze || lr(n, t);
    case 6:
      var r = Te,
        l = vt;
      (Te = null),
        Jt(e, t, n),
        (Te = r),
        (vt = l),
        Te !== null &&
          (vt
            ? ((e = Te),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Te.removeChild(n.stateNode));
      break;
    case 18:
      Te !== null &&
        (vt
          ? ((e = Te),
            (n = n.stateNode),
            e.nodeType === 8
              ? jo(e.parentNode, n)
              : e.nodeType === 1 && jo(e, n),
            al(e))
          : jo(Te, n.stateNode));
      break;
    case 4:
      (r = Te),
        (l = vt),
        (Te = n.stateNode.containerInfo),
        (vt = !0),
        Jt(e, t, n),
        (Te = r),
        (vt = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ze &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var i = l,
            o = i.destroy;
          (i = i.tag),
            o !== void 0 && (i & 2 || i & 4) && Ua(n, t, o),
            (l = l.next);
        } while (l !== r);
      }
      Jt(e, t, n);
      break;
    case 1:
      if (
        !ze &&
        (lr(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          ve(n, t, a);
        }
      Jt(e, t, n);
      break;
    case 21:
      Jt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ze = (r = ze) || n.memoizedState !== null), Jt(e, t, n), (ze = r))
        : Jt(e, t, n);
      break;
    default:
      Jt(e, t, n);
  }
}
function xc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Nv()),
      t.forEach(function (r) {
        var l = Bv.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function pt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var i = e,
          o = t,
          a = o;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (Te = a.stateNode), (vt = !1);
              break e;
            case 3:
              (Te = a.stateNode.containerInfo), (vt = !0);
              break e;
            case 4:
              (Te = a.stateNode.containerInfo), (vt = !0);
              break e;
          }
          a = a.return;
        }
        if (Te === null) throw Error(D(160));
        rh(i, o, l), (Te = null), (vt = !1);
        var u = l.alternate;
        u !== null && (u.return = null), (l.return = null);
      } catch (s) {
        ve(l, t, s);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) lh(t, e), (t = t.sibling);
}
function lh(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((pt(t, e), Rt(e), r & 4)) {
        try {
          qr(3, e, e.return), lo(3, e);
        } catch (S) {
          ve(e, e.return, S);
        }
        try {
          qr(5, e, e.return);
        } catch (S) {
          ve(e, e.return, S);
        }
      }
      break;
    case 1:
      pt(t, e), Rt(e), r & 512 && n !== null && lr(n, n.return);
      break;
    case 5:
      if (
        (pt(t, e),
        Rt(e),
        r & 512 && n !== null && lr(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          rl(l, "");
        } catch (S) {
          ve(e, e.return, S);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var i = e.memoizedProps,
          o = n !== null ? n.memoizedProps : i,
          a = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            a === "input" && i.type === "radio" && i.name != null && Rd(l, i),
              da(a, o);
            var s = da(a, i);
            for (o = 0; o < u.length; o += 2) {
              var d = u[o],
                c = u[o + 1];
              d === "style"
                ? Dd(l, c)
                : d === "dangerouslySetInnerHTML"
                  ? Ld(l, c)
                  : d === "children"
                    ? rl(l, c)
                    : iu(l, d, c, s);
            }
            switch (a) {
              case "input":
                oa(l, i);
                break;
              case "textarea":
                Cd(l, i);
                break;
              case "select":
                var h = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!i.multiple;
                var x = i.value;
                x != null
                  ? ar(l, !!i.multiple, x, !1)
                  : h !== !!i.multiple &&
                    (i.defaultValue != null
                      ? ar(l, !!i.multiple, i.defaultValue, !0)
                      : ar(l, !!i.multiple, i.multiple ? [] : "", !1));
            }
            l[fl] = i;
          } catch (S) {
            ve(e, e.return, S);
          }
      }
      break;
    case 6:
      if ((pt(t, e), Rt(e), r & 4)) {
        if (e.stateNode === null) throw Error(D(162));
        (l = e.stateNode), (i = e.memoizedProps);
        try {
          l.nodeValue = i;
        } catch (S) {
          ve(e, e.return, S);
        }
      }
      break;
    case 3:
      if (
        (pt(t, e), Rt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          al(t.containerInfo);
        } catch (S) {
          ve(e, e.return, S);
        }
      break;
    case 4:
      pt(t, e), Rt(e);
      break;
    case 13:
      pt(t, e),
        Rt(e),
        (l = e.child),
        l.flags & 8192 &&
          ((i = l.memoizedState !== null),
          (l.stateNode.isHidden = i),
          !i ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (Uu = ye())),
        r & 4 && xc(e);
      break;
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ze = (s = ze) || d), pt(t, e), (ze = s)) : pt(t, e),
        Rt(e),
        r & 8192)
      ) {
        if (
          ((s = e.memoizedState !== null),
          (e.stateNode.isHidden = s) && !d && e.mode & 1)
        )
          for (j = e, d = e.child; d !== null; ) {
            for (c = j = d; j !== null; ) {
              switch (((h = j), (x = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  qr(4, h, h.return);
                  break;
                case 1:
                  lr(h, h.return);
                  var w = h.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    (r = h), (n = h.return);
                    try {
                      (t = r),
                        (w.props = t.memoizedProps),
                        (w.state = t.memoizedState),
                        w.componentWillUnmount();
                    } catch (S) {
                      ve(r, n, S);
                    }
                  }
                  break;
                case 5:
                  lr(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    kc(c);
                    continue;
                  }
              }
              x !== null ? ((x.return = h), (j = x)) : kc(c);
            }
            d = d.sibling;
          }
        e: for (d = null, c = e; ; ) {
          if (c.tag === 5) {
            if (d === null) {
              d = c;
              try {
                (l = c.stateNode),
                  s
                    ? ((i = l.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((a = c.stateNode),
                      (u = c.memoizedProps.style),
                      (o =
                        u != null && u.hasOwnProperty("display")
                          ? u.display
                          : null),
                      (a.style.display = Td("display", o)));
              } catch (S) {
                ve(e, e.return, S);
              }
            }
          } else if (c.tag === 6) {
            if (d === null)
              try {
                c.stateNode.nodeValue = s ? "" : c.memoizedProps;
              } catch (S) {
                ve(e, e.return, S);
              }
          } else if (
            ((c.tag !== 22 && c.tag !== 23) ||
              c.memoizedState === null ||
              c === e) &&
            c.child !== null
          ) {
            (c.child.return = c), (c = c.child);
            continue;
          }
          if (c === e) break e;
          for (; c.sibling === null; ) {
            if (c.return === null || c.return === e) break e;
            d === c && (d = null), (c = c.return);
          }
          d === c && (d = null), (c.sibling.return = c.return), (c = c.sibling);
        }
      }
      break;
    case 19:
      pt(t, e), Rt(e), r & 4 && xc(e);
      break;
    case 21:
      break;
    default:
      pt(t, e), Rt(e);
  }
}
function Rt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (nh(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(D(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (rl(l, ""), (r.flags &= -33));
          var i = Ec(e);
          Ba(e, i, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            a = Ec(e);
          $a(e, a, o);
          break;
        default:
          throw Error(D(161));
      }
    } catch (u) {
      ve(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Ov(e, t, n) {
  (j = e), ih(e);
}
function ih(e, t, n) {
  for (var r = (e.mode & 1) !== 0; j !== null; ) {
    var l = j,
      i = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || bl;
      if (!o) {
        var a = l.alternate,
          u = (a !== null && a.memoizedState !== null) || ze;
        a = bl;
        var s = ze;
        if (((bl = o), (ze = u) && !s))
          for (j = l; j !== null; )
            (o = j),
              (u = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? Rc(l)
                : u !== null
                  ? ((u.return = o), (j = u))
                  : Rc(l);
        for (; i !== null; ) (j = i), ih(i), (i = i.sibling);
        (j = l), (bl = a), (ze = s);
      }
      _c(e);
    } else
      l.subtreeFlags & 8772 && i !== null ? ((i.return = l), (j = i)) : _c(e);
  }
}
function _c(e) {
  for (; j !== null; ) {
    var t = j;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ze || lo(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ze)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : mt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var i = t.updateQueue;
              i !== null && ac(t, i, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                ac(t, o, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var u = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    u.autoFocus && n.focus();
                    break;
                  case "img":
                    u.src && (n.src = u.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var s = t.alternate;
                if (s !== null) {
                  var d = s.memoizedState;
                  if (d !== null) {
                    var c = d.dehydrated;
                    c !== null && al(c);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(D(163));
          }
        ze || (t.flags & 512 && Aa(t));
      } catch (h) {
        ve(t, t.return, h);
      }
    }
    if (t === e) {
      j = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (j = n);
      break;
    }
    j = t.return;
  }
}
function kc(e) {
  for (; j !== null; ) {
    var t = j;
    if (t === e) {
      j = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (j = n);
      break;
    }
    j = t.return;
  }
}
function Rc(e) {
  for (; j !== null; ) {
    var t = j;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            lo(4, t);
          } catch (u) {
            ve(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              ve(t, l, u);
            }
          }
          var i = t.return;
          try {
            Aa(t);
          } catch (u) {
            ve(t, i, u);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Aa(t);
          } catch (u) {
            ve(t, o, u);
          }
      }
    } catch (u) {
      ve(t, t.return, u);
    }
    if (t === e) {
      j = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (j = a);
      break;
    }
    j = t.return;
  }
}
var zv = Math.ceil,
  Ai = Vt.ReactCurrentDispatcher,
  ju = Vt.ReactCurrentOwner,
  ct = Vt.ReactCurrentBatchConfig,
  J = 0,
  Ce = null,
  Ee = null,
  De = 0,
  Ge = 0,
  ir = wn(0),
  ke = 0,
  gl = null,
  jn = 0,
  io = 0,
  Iu = 0,
  el = null,
  Ve = null,
  Uu = 0,
  wr = 1 / 0,
  Ft = null,
  $i = !1,
  Ha = null,
  cn = null,
  ql = !1,
  rn = null,
  Bi = 0,
  tl = 0,
  Wa = null,
  pi = -1,
  mi = 0;
function Be() {
  return J & 6 ? ye() : pi !== -1 ? pi : (pi = ye());
}
function dn(e) {
  return e.mode & 1
    ? J & 2 && De !== 0
      ? De & -De
      : yv.transition !== null
        ? (mi === 0 && (mi = Hd()), mi)
        : ((e = q),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Jd(e.type))),
          e)
    : 1;
}
function St(e, t, n, r) {
  if (50 < tl) throw ((tl = 0), (Wa = null), Error(D(185)));
  _l(e, n, r),
    (!(J & 2) || e !== Ce) &&
      (e === Ce && (!(J & 2) && (io |= n), ke === 4 && tn(e, De)),
      Xe(e, r),
      n === 1 && J === 0 && !(t.mode & 1) && ((wr = ye() + 500), to && Sn()));
}
function Xe(e, t) {
  var n = e.callbackNode;
  ym(e, t);
  var r = ki(e, e === Ce ? De : 0);
  if (r === 0)
    n !== null && zs(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && zs(n), t === 1))
      e.tag === 0 ? vv(Cc.bind(null, e)) : mf(Cc.bind(null, e)),
        fv(function () {
          !(J & 6) && Sn();
        }),
        (n = null);
    else {
      switch (Wd(r)) {
        case 1:
          n = cu;
          break;
        case 4:
          n = $d;
          break;
        case 16:
          n = _i;
          break;
        case 536870912:
          n = Bd;
          break;
        default:
          n = _i;
      }
      n = hh(n, oh.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function oh(e, t) {
  if (((pi = -1), (mi = 0), J & 6)) throw Error(D(327));
  var n = e.callbackNode;
  if (fr() && e.callbackNode !== n) return null;
  var r = ki(e, e === Ce ? De : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Hi(e, r);
  else {
    t = r;
    var l = J;
    J |= 2;
    var i = uh();
    (Ce !== e || De !== t) && ((Ft = null), (wr = ye() + 500), Nn(e, t));
    do
      try {
        Iv();
        break;
      } catch (a) {
        ah(e, a);
      }
    while (!0);
    _u(),
      (Ai.current = i),
      (J = l),
      Ee !== null ? (t = 0) : ((Ce = null), (De = 0), (t = ke));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = va(e)), l !== 0 && ((r = l), (t = Va(e, l)))), t === 1)
    )
      throw ((n = gl), Nn(e, 0), tn(e, r), Xe(e, ye()), n);
    if (t === 6) tn(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !Fv(l) &&
          ((t = Hi(e, r)),
          t === 2 && ((i = va(e)), i !== 0 && ((r = i), (t = Va(e, i)))),
          t === 1))
      )
        throw ((n = gl), Nn(e, 0), tn(e, r), Xe(e, ye()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(D(345));
        case 2:
          kn(e, Ve, Ft);
          break;
        case 3:
          if (
            (tn(e, r), (r & 130023424) === r && ((t = Uu + 500 - ye()), 10 < t))
          ) {
            if (ki(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              Be(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = ka(kn.bind(null, e, Ve, Ft), t);
            break;
          }
          kn(e, Ve, Ft);
          break;
        case 4:
          if ((tn(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - wt(r);
            (i = 1 << o), (o = t[o]), o > l && (l = o), (r &= ~i);
          }
          if (
            ((r = l),
            (r = ye() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * zv(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = ka(kn.bind(null, e, Ve, Ft), r);
            break;
          }
          kn(e, Ve, Ft);
          break;
        case 5:
          kn(e, Ve, Ft);
          break;
        default:
          throw Error(D(329));
      }
    }
  }
  return Xe(e, ye()), e.callbackNode === n ? oh.bind(null, e) : null;
}
function Va(e, t) {
  var n = el;
  return (
    e.current.memoizedState.isDehydrated && (Nn(e, t).flags |= 256),
    (e = Hi(e, t)),
    e !== 2 && ((t = Ve), (Ve = n), t !== null && Ka(t)),
    e
  );
}
function Ka(e) {
  Ve === null ? (Ve = e) : Ve.push.apply(Ve, e);
}
function Fv(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            i = l.getSnapshot;
          l = l.value;
          try {
            if (!Et(i(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function tn(e, t) {
  for (
    t &= ~Iu,
      t &= ~io,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - wt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Cc(e) {
  if (J & 6) throw Error(D(327));
  fr();
  var t = ki(e, 0);
  if (!(t & 1)) return Xe(e, ye()), null;
  var n = Hi(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = va(e);
    r !== 0 && ((t = r), (n = Va(e, r)));
  }
  if (n === 1) throw ((n = gl), Nn(e, 0), tn(e, t), Xe(e, ye()), n);
  if (n === 6) throw Error(D(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    kn(e, Ve, Ft),
    Xe(e, ye()),
    null
  );
}
function Au(e, t) {
  var n = J;
  J |= 1;
  try {
    return e(t);
  } finally {
    (J = n), J === 0 && ((wr = ye() + 500), to && Sn());
  }
}
function In(e) {
  rn !== null && rn.tag === 0 && !(J & 6) && fr();
  var t = J;
  J |= 1;
  var n = ct.transition,
    r = q;
  try {
    if (((ct.transition = null), (q = 1), e)) return e();
  } finally {
    (q = r), (ct.transition = n), (J = t), !(J & 6) && Sn();
  }
}
function $u() {
  (Ge = ir.current), ae(ir);
}
function Nn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), dv(n)), Ee !== null))
    for (n = Ee.return; n !== null; ) {
      var r = n;
      switch ((Su(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Ti();
          break;
        case 3:
          yr(), ae(Qe), ae(je), Tu();
          break;
        case 5:
          Lu(r);
          break;
        case 4:
          yr();
          break;
        case 13:
          ae(fe);
          break;
        case 19:
          ae(fe);
          break;
        case 10:
          ku(r.type._context);
          break;
        case 22:
        case 23:
          $u();
      }
      n = n.return;
    }
  if (
    ((Ce = e),
    (Ee = e = fn(e.current, null)),
    (De = Ge = t),
    (ke = 0),
    (gl = null),
    (Iu = io = jn = 0),
    (Ve = el = null),
    Cn !== null)
  ) {
    for (t = 0; t < Cn.length; t++)
      if (((n = Cn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          i = n.pending;
        if (i !== null) {
          var o = i.next;
          (i.next = l), (r.next = o);
        }
        n.pending = r;
      }
    Cn = null;
  }
  return e;
}
function ah(e, t) {
  do {
    var n = Ee;
    try {
      if ((_u(), (di.current = Ui), Ii)) {
        for (var r = he.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        Ii = !1;
      }
      if (
        ((Fn = 0),
        (Re = _e = he = null),
        (br = !1),
        (ml = 0),
        (ju.current = null),
        n === null || n.return === null)
      ) {
        (ke = 1), (gl = t), (Ee = null);
        break;
      }
      e: {
        var i = e,
          o = n.return,
          a = n,
          u = t;
        if (
          ((t = De),
          (a.flags |= 32768),
          u !== null && typeof u == "object" && typeof u.then == "function")
        ) {
          var s = u,
            d = a,
            c = d.tag;
          if (!(d.mode & 1) && (c === 0 || c === 11 || c === 15)) {
            var h = d.alternate;
            h
              ? ((d.updateQueue = h.updateQueue),
                (d.memoizedState = h.memoizedState),
                (d.lanes = h.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var x = hc(o);
          if (x !== null) {
            (x.flags &= -257),
              pc(x, o, a, i, t),
              x.mode & 1 && fc(i, s, t),
              (t = x),
              (u = s);
            var w = t.updateQueue;
            if (w === null) {
              var S = new Set();
              S.add(u), (t.updateQueue = S);
            } else w.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              fc(i, s, t), Bu();
              break e;
            }
            u = Error(D(426));
          }
        } else if (de && a.mode & 1) {
          var L = hc(o);
          if (L !== null) {
            !(L.flags & 65536) && (L.flags |= 256),
              pc(L, o, a, i, t),
              Eu(gr(u, a));
            break e;
          }
        }
        (i = u = gr(u, a)),
          ke !== 4 && (ke = 2),
          el === null ? (el = [i]) : el.push(i),
          (i = o);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var m = Vf(i, u, t);
              oc(i, m);
              break e;
            case 1:
              a = u;
              var f = i.type,
                p = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof f.getDerivedStateFromError == "function" ||
                  (p !== null &&
                    typeof p.componentDidCatch == "function" &&
                    (cn === null || !cn.has(p))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var _ = Kf(i, a, t);
                oc(i, _);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      ch(n);
    } catch (P) {
      (t = P), Ee === n && n !== null && (Ee = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function uh() {
  var e = Ai.current;
  return (Ai.current = Ui), e === null ? Ui : e;
}
function Bu() {
  (ke === 0 || ke === 3 || ke === 2) && (ke = 4),
    Ce === null || (!(jn & 268435455) && !(io & 268435455)) || tn(Ce, De);
}
function Hi(e, t) {
  var n = J;
  J |= 2;
  var r = uh();
  (Ce !== e || De !== t) && ((Ft = null), Nn(e, t));
  do
    try {
      jv();
      break;
    } catch (l) {
      ah(e, l);
    }
  while (!0);
  if ((_u(), (J = n), (Ai.current = r), Ee !== null)) throw Error(D(261));
  return (Ce = null), (De = 0), ke;
}
function jv() {
  for (; Ee !== null; ) sh(Ee);
}
function Iv() {
  for (; Ee !== null && !um(); ) sh(Ee);
}
function sh(e) {
  var t = fh(e.alternate, e, Ge);
  (e.memoizedProps = e.pendingProps),
    t === null ? ch(e) : (Ee = t),
    (ju.current = null);
}
function ch(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Dv(n, t)), n !== null)) {
        (n.flags &= 32767), (Ee = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ke = 6), (Ee = null);
        return;
      }
    } else if (((n = Tv(n, t, Ge)), n !== null)) {
      Ee = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Ee = t;
      return;
    }
    Ee = t = e;
  } while (t !== null);
  ke === 0 && (ke = 5);
}
function kn(e, t, n) {
  var r = q,
    l = ct.transition;
  try {
    (ct.transition = null), (q = 1), Uv(e, t, n, r);
  } finally {
    (ct.transition = l), (q = r);
  }
  return null;
}
function Uv(e, t, n, r) {
  do fr();
  while (rn !== null);
  if (J & 6) throw Error(D(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(D(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (gm(e, i),
    e === Ce && ((Ee = Ce = null), (De = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      ql ||
      ((ql = !0),
      hh(_i, function () {
        return fr(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = ct.transition), (ct.transition = null);
    var o = q;
    q = 1;
    var a = J;
    (J |= 4),
      (ju.current = null),
      Mv(e, n),
      lh(n, e),
      lv(xa),
      (Ri = !!Ea),
      (xa = Ea = null),
      (e.current = n),
      Ov(n),
      sm(),
      (J = a),
      (q = o),
      (ct.transition = i);
  } else e.current = n;
  if (
    (ql && ((ql = !1), (rn = e), (Bi = l)),
    (i = e.pendingLanes),
    i === 0 && (cn = null),
    fm(n.stateNode),
    Xe(e, ye()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if ($i) throw (($i = !1), (e = Ha), (Ha = null), e);
  return (
    Bi & 1 && e.tag !== 0 && fr(),
    (i = e.pendingLanes),
    i & 1 ? (e === Wa ? tl++ : ((tl = 0), (Wa = e))) : (tl = 0),
    Sn(),
    null
  );
}
function fr() {
  if (rn !== null) {
    var e = Wd(Bi),
      t = ct.transition,
      n = q;
    try {
      if (((ct.transition = null), (q = 16 > e ? 16 : e), rn === null))
        var r = !1;
      else {
        if (((e = rn), (rn = null), (Bi = 0), J & 6)) throw Error(D(331));
        var l = J;
        for (J |= 4, j = e.current; j !== null; ) {
          var i = j,
            o = i.child;
          if (j.flags & 16) {
            var a = i.deletions;
            if (a !== null) {
              for (var u = 0; u < a.length; u++) {
                var s = a[u];
                for (j = s; j !== null; ) {
                  var d = j;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      qr(8, d, i);
                  }
                  var c = d.child;
                  if (c !== null) (c.return = d), (j = c);
                  else
                    for (; j !== null; ) {
                      d = j;
                      var h = d.sibling,
                        x = d.return;
                      if ((th(d), d === s)) {
                        j = null;
                        break;
                      }
                      if (h !== null) {
                        (h.return = x), (j = h);
                        break;
                      }
                      j = x;
                    }
                }
              }
              var w = i.alternate;
              if (w !== null) {
                var S = w.child;
                if (S !== null) {
                  w.child = null;
                  do {
                    var L = S.sibling;
                    (S.sibling = null), (S = L);
                  } while (S !== null);
                }
              }
              j = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) (o.return = i), (j = o);
          else
            e: for (; j !== null; ) {
              if (((i = j), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    qr(9, i, i.return);
                }
              var m = i.sibling;
              if (m !== null) {
                (m.return = i.return), (j = m);
                break e;
              }
              j = i.return;
            }
        }
        var f = e.current;
        for (j = f; j !== null; ) {
          o = j;
          var p = o.child;
          if (o.subtreeFlags & 2064 && p !== null) (p.return = o), (j = p);
          else
            e: for (o = f; j !== null; ) {
              if (((a = j), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      lo(9, a);
                  }
                } catch (P) {
                  ve(a, a.return, P);
                }
              if (a === o) {
                j = null;
                break e;
              }
              var _ = a.sibling;
              if (_ !== null) {
                (_.return = a.return), (j = _);
                break e;
              }
              j = a.return;
            }
        }
        if (
          ((J = l), Sn(), Tt && typeof Tt.onPostCommitFiberRoot == "function")
        )
          try {
            Tt.onPostCommitFiberRoot(Gi, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (q = n), (ct.transition = t);
    }
  }
  return !1;
}
function Pc(e, t, n) {
  (t = gr(n, t)),
    (t = Vf(e, t, 1)),
    (e = sn(e, t, 1)),
    (t = Be()),
    e !== null && (_l(e, 1, t), Xe(e, t));
}
function ve(e, t, n) {
  if (e.tag === 3) Pc(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Pc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (cn === null || !cn.has(r)))
        ) {
          (e = gr(n, e)),
            (e = Kf(t, e, 1)),
            (t = sn(t, e, 1)),
            (e = Be()),
            t !== null && (_l(t, 1, e), Xe(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Av(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Be()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Ce === e &&
      (De & n) === n &&
      (ke === 4 || (ke === 3 && (De & 130023424) === De && 500 > ye() - Uu)
        ? Nn(e, 0)
        : (Iu |= n)),
    Xe(e, t);
}
function dh(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Wl), (Wl <<= 1), !(Wl & 130023424) && (Wl = 4194304))
      : (t = 1));
  var n = Be();
  (e = Ht(e, t)), e !== null && (_l(e, t, n), Xe(e, n));
}
function $v(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), dh(e, n);
}
function Bv(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(D(314));
  }
  r !== null && r.delete(t), dh(e, n);
}
var fh;
fh = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Qe.current) Ke = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Ke = !1), Lv(e, t, n);
      Ke = !!(e.flags & 131072);
    }
  else (Ke = !1), de && t.flags & 1048576 && vf(t, Mi, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      hi(e, t), (e = t.pendingProps);
      var l = pr(t, je.current);
      dr(t, n), (l = Nu(null, t, r, e, l, n));
      var i = Mu();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ye(r) ? ((i = !0), Di(t)) : (i = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            Cu(t),
            (l.updater = ro),
            (t.stateNode = l),
            (l._reactInternals = t),
            Na(t, r, e, n),
            (t = za(null, t, r, !0, i, n)))
          : ((t.tag = 0), de && i && wu(t), $e(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (hi(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = Wv(r)),
          (e = mt(r, e)),
          l)
        ) {
          case 0:
            t = Oa(null, t, r, e, n);
            break e;
          case 1:
            t = yc(null, t, r, e, n);
            break e;
          case 11:
            t = mc(null, t, r, e, n);
            break e;
          case 14:
            t = vc(null, t, r, mt(r.type, e), n);
            break e;
        }
        throw Error(D(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : mt(r, l)),
        Oa(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : mt(r, l)),
        yc(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((Jf(t), e === null)) throw Error(D(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (l = i.element),
          xf(e, t),
          Fi(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (l = gr(Error(D(423)), t)), (t = gc(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = gr(Error(D(424)), t)), (t = gc(e, t, r, n, l));
            break e;
          } else
            for (
              be = un(t.stateNode.containerInfo.firstChild),
                qe = t,
                de = !0,
                gt = null,
                n = Sf(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((mr(), r === l)) {
            t = Wt(e, t, n);
            break e;
          }
          $e(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        _f(t),
        e === null && La(t),
        (r = t.type),
        (l = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (o = l.children),
        _a(r, l) ? (o = null) : i !== null && _a(r, i) && (t.flags |= 32),
        Xf(e, t),
        $e(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && La(t), null;
    case 13:
      return Gf(e, t, n);
    case 4:
      return (
        Pu(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = vr(t, null, r, n)) : $e(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : mt(r, l)),
        mc(e, t, r, l, n)
      );
    case 7:
      return $e(e, t, t.pendingProps, n), t.child;
    case 8:
      return $e(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return $e(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (i = t.memoizedProps),
          (o = l.value),
          le(Oi, r._currentValue),
          (r._currentValue = o),
          i !== null)
        )
          if (Et(i.value, o)) {
            if (i.children === l.children && !Qe.current) {
              t = Wt(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var a = i.dependencies;
              if (a !== null) {
                o = i.child;
                for (var u = a.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (i.tag === 1) {
                      (u = At(-1, n & -n)), (u.tag = 2);
                      var s = i.updateQueue;
                      if (s !== null) {
                        s = s.shared;
                        var d = s.pending;
                        d === null
                          ? (u.next = u)
                          : ((u.next = d.next), (d.next = u)),
                          (s.pending = u);
                      }
                    }
                    (i.lanes |= n),
                      (u = i.alternate),
                      u !== null && (u.lanes |= n),
                      Ta(i.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  u = u.next;
                }
              } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((o = i.return), o === null)) throw Error(D(341));
                (o.lanes |= n),
                  (a = o.alternate),
                  a !== null && (a.lanes |= n),
                  Ta(o, n, t),
                  (o = i.sibling);
              } else o = i.child;
              if (o !== null) o.return = i;
              else
                for (o = i; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((i = o.sibling), i !== null)) {
                    (i.return = o.return), (o = i);
                    break;
                  }
                  o = o.return;
                }
              i = o;
            }
        $e(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        dr(t, n),
        (l = dt(l)),
        (r = r(l)),
        (t.flags |= 1),
        $e(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = mt(r, t.pendingProps)),
        (l = mt(r.type, l)),
        vc(e, t, r, l, n)
      );
    case 15:
      return Qf(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : mt(r, l)),
        hi(e, t),
        (t.tag = 1),
        Ye(r) ? ((e = !0), Di(t)) : (e = !1),
        dr(t, n),
        Wf(t, r, l),
        Na(t, r, l, n),
        za(null, t, r, !0, e, n)
      );
    case 19:
      return Zf(e, t, n);
    case 22:
      return Yf(e, t, n);
  }
  throw Error(D(156, t.tag));
};
function hh(e, t) {
  return Ad(e, t);
}
function Hv(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function st(e, t, n, r) {
  return new Hv(e, t, n, r);
}
function Hu(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Wv(e) {
  if (typeof e == "function") return Hu(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === au)) return 11;
    if (e === uu) return 14;
  }
  return 2;
}
function fn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = st(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function vi(e, t, n, r, l, i) {
  var o = 2;
  if (((r = e), typeof e == "function")) Hu(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case Jn:
        return Mn(n.children, l, i, t);
      case ou:
        (o = 8), (l |= 8);
        break;
      case ta:
        return (
          (e = st(12, n, t, l | 2)), (e.elementType = ta), (e.lanes = i), e
        );
      case na:
        return (e = st(13, n, t, l)), (e.elementType = na), (e.lanes = i), e;
      case ra:
        return (e = st(19, n, t, l)), (e.elementType = ra), (e.lanes = i), e;
      case xd:
        return oo(n, l, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Sd:
              o = 10;
              break e;
            case Ed:
              o = 9;
              break e;
            case au:
              o = 11;
              break e;
            case uu:
              o = 14;
              break e;
            case bt:
              (o = 16), (r = null);
              break e;
          }
        throw Error(D(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = st(o, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function Mn(e, t, n, r) {
  return (e = st(7, e, r, t)), (e.lanes = n), e;
}
function oo(e, t, n, r) {
  return (
    (e = st(22, e, r, t)),
    (e.elementType = xd),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Vo(e, t, n) {
  return (e = st(6, e, null, t)), (e.lanes = n), e;
}
function Ko(e, t, n) {
  return (
    (t = st(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Vv(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Ro(0)),
    (this.expirationTimes = Ro(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Ro(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function Wu(e, t, n, r, l, i, o, a, u) {
  return (
    (e = new Vv(e, t, n, a, u)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = st(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Cu(i),
    e
  );
}
function Kv(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Xn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function ph(e) {
  if (!e) return pn;
  e = e._reactInternals;
  e: {
    if (An(e) !== e || e.tag !== 1) throw Error(D(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ye(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(D(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ye(n)) return pf(e, n, t);
  }
  return t;
}
function mh(e, t, n, r, l, i, o, a, u) {
  return (
    (e = Wu(n, r, !0, e, l, i, o, a, u)),
    (e.context = ph(null)),
    (n = e.current),
    (r = Be()),
    (l = dn(n)),
    (i = At(r, l)),
    (i.callback = t ?? null),
    sn(n, i, l),
    (e.current.lanes = l),
    _l(e, l, r),
    Xe(e, r),
    e
  );
}
function ao(e, t, n, r) {
  var l = t.current,
    i = Be(),
    o = dn(l);
  return (
    (n = ph(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = At(i, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = sn(l, t, o)),
    e !== null && (St(e, l, o, i), ci(e, l, o)),
    o
  );
}
function Wi(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Lc(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Vu(e, t) {
  Lc(e, t), (e = e.alternate) && Lc(e, t);
}
function Qv() {
  return null;
}
var vh =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Ku(e) {
  this._internalRoot = e;
}
uo.prototype.render = Ku.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(D(409));
  ao(e, t, null, null);
};
uo.prototype.unmount = Ku.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    In(function () {
      ao(null, e, null, null);
    }),
      (t[Bt] = null);
  }
};
function uo(e) {
  this._internalRoot = e;
}
uo.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Qd();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < en.length && t !== 0 && t < en[n].priority; n++);
    en.splice(n, 0, e), n === 0 && Xd(e);
  }
};
function Qu(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function so(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Tc() {}
function Yv(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var s = Wi(o);
        i.call(s);
      };
    }
    var o = mh(t, r, e, 0, null, !1, !1, "", Tc);
    return (
      (e._reactRootContainer = o),
      (e[Bt] = o.current),
      cl(e.nodeType === 8 ? e.parentNode : e),
      In(),
      o
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var s = Wi(u);
      a.call(s);
    };
  }
  var u = Wu(e, 0, !1, null, null, !1, !1, "", Tc);
  return (
    (e._reactRootContainer = u),
    (e[Bt] = u.current),
    cl(e.nodeType === 8 ? e.parentNode : e),
    In(function () {
      ao(t, u, n, r);
    }),
    u
  );
}
function co(e, t, n, r, l) {
  var i = n._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof l == "function") {
      var a = l;
      l = function () {
        var u = Wi(o);
        a.call(u);
      };
    }
    ao(t, o, e, l);
  } else o = Yv(n, t, e, l, r);
  return Wi(o);
}
Vd = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Vr(t.pendingLanes);
        n !== 0 &&
          (du(t, n | 1), Xe(t, ye()), !(J & 6) && ((wr = ye() + 500), Sn()));
      }
      break;
    case 13:
      In(function () {
        var r = Ht(e, 1);
        if (r !== null) {
          var l = Be();
          St(r, e, 1, l);
        }
      }),
        Vu(e, 1);
  }
};
fu = function (e) {
  if (e.tag === 13) {
    var t = Ht(e, 134217728);
    if (t !== null) {
      var n = Be();
      St(t, e, 134217728, n);
    }
    Vu(e, 134217728);
  }
};
Kd = function (e) {
  if (e.tag === 13) {
    var t = dn(e),
      n = Ht(e, t);
    if (n !== null) {
      var r = Be();
      St(n, e, t, r);
    }
    Vu(e, t);
  }
};
Qd = function () {
  return q;
};
Yd = function (e, t) {
  var n = q;
  try {
    return (q = e), t();
  } finally {
    q = n;
  }
};
ha = function (e, t, n) {
  switch (t) {
    case "input":
      if ((oa(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = eo(r);
            if (!l) throw Error(D(90));
            kd(r), oa(r, l);
          }
        }
      }
      break;
    case "textarea":
      Cd(e, n);
      break;
    case "select":
      (t = n.value), t != null && ar(e, !!n.multiple, t, !1);
  }
};
Od = Au;
zd = In;
var Xv = { usingClientEntryPoint: !1, Events: [Rl, qn, eo, Nd, Md, Au] },
  Ir = {
    findFiberByHostInstance: Rn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Jv = {
    bundleType: Ir.bundleType,
    version: Ir.version,
    rendererPackageName: Ir.rendererPackageName,
    rendererConfig: Ir.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Vt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Id(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Ir.findFiberByHostInstance || Qv,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ei = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ei.isDisabled && ei.supportsFiber)
    try {
      (Gi = ei.inject(Jv)), (Tt = ei);
    } catch {}
}
tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Xv;
tt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Qu(t)) throw Error(D(200));
  return Kv(e, t, null, n);
};
tt.createRoot = function (e, t) {
  if (!Qu(e)) throw Error(D(299));
  var n = !1,
    r = "",
    l = vh;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = Wu(e, 1, !1, null, null, n, !1, r, l)),
    (e[Bt] = t.current),
    cl(e.nodeType === 8 ? e.parentNode : e),
    new Ku(t)
  );
};
tt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(D(188))
      : ((e = Object.keys(e).join(",")), Error(D(268, e)));
  return (e = Id(t)), (e = e === null ? null : e.stateNode), e;
};
tt.flushSync = function (e) {
  return In(e);
};
tt.hydrate = function (e, t, n) {
  if (!so(t)) throw Error(D(200));
  return co(null, e, t, !0, n);
};
tt.hydrateRoot = function (e, t, n) {
  if (!Qu(e)) throw Error(D(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    i = "",
    o = vh;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = mh(t, null, e, 1, n ?? null, l, !1, i, o)),
    (e[Bt] = t.current),
    cl(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new uo(t);
};
tt.render = function (e, t, n) {
  if (!so(t)) throw Error(D(200));
  return co(null, e, t, !1, n);
};
tt.unmountComponentAtNode = function (e) {
  if (!so(e)) throw Error(D(40));
  return e._reactRootContainer
    ? (In(function () {
        co(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Bt] = null);
        });
      }),
      !0)
    : !1;
};
tt.unstable_batchedUpdates = Au;
tt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!so(n)) throw Error(D(200));
  if (e == null || e._reactInternals === void 0) throw Error(D(38));
  return co(e, t, n, !1, r);
};
tt.version = "18.3.1-next-f1338f8080-20240426";
function yh() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(yh);
    } catch (e) {
      console.error(e);
    }
}
yh(), (vd.exports = tt);
var Yu = vd.exports;
const Gv = ld(Yu),
  Zv = rd({ __proto__: null, default: Gv }, [Yu]);
/**
 * @remix-run/router v1.19.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ce() {
  return (
    (ce = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ce.apply(this, arguments)
  );
}
var Se;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(Se || (Se = {}));
const Dc = "popstate";
function bv(e) {
  e === void 0 && (e = {});
  function t(r, l) {
    let { pathname: i, search: o, hash: a } = r.location;
    return wl(
      "",
      { pathname: i, search: o, hash: a },
      (l.state && l.state.usr) || null,
      (l.state && l.state.key) || "default",
    );
  }
  function n(r, l) {
    return typeof l == "string" ? l : mn(l);
  }
  return ey(t, n, null, e);
}
function V(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Sr(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function qv() {
  return Math.random().toString(36).substr(2, 8);
}
function Nc(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function wl(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    ce(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Kt(t) : t,
      { state: n, key: (t && t.key) || r || qv() },
    )
  );
}
function mn(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Kt(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function ey(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: l = document.defaultView, v5Compat: i = !1 } = r,
    o = l.history,
    a = Se.Pop,
    u = null,
    s = d();
  s == null && ((s = 0), o.replaceState(ce({}, o.state, { idx: s }), ""));
  function d() {
    return (o.state || { idx: null }).idx;
  }
  function c() {
    a = Se.Pop;
    let L = d(),
      m = L == null ? null : L - s;
    (s = L), u && u({ action: a, location: S.location, delta: m });
  }
  function h(L, m) {
    a = Se.Push;
    let f = wl(S.location, L, m);
    s = d() + 1;
    let p = Nc(f, s),
      _ = S.createHref(f);
    try {
      o.pushState(p, "", _);
    } catch (P) {
      if (P instanceof DOMException && P.name === "DataCloneError") throw P;
      l.location.assign(_);
    }
    i && u && u({ action: a, location: S.location, delta: 1 });
  }
  function x(L, m) {
    a = Se.Replace;
    let f = wl(S.location, L, m);
    s = d();
    let p = Nc(f, s),
      _ = S.createHref(f);
    o.replaceState(p, "", _),
      i && u && u({ action: a, location: S.location, delta: 0 });
  }
  function w(L) {
    let m = l.location.origin !== "null" ? l.location.origin : l.location.href,
      f = typeof L == "string" ? L : mn(L);
    return (
      (f = f.replace(/ $/, "%20")),
      V(
        m,
        "No window.location.(origin|href) available to create URL for href: " +
          f,
      ),
      new URL(f, m)
    );
  }
  let S = {
    get action() {
      return a;
    },
    get location() {
      return e(l, o);
    },
    listen(L) {
      if (u) throw new Error("A history only accepts one active listener");
      return (
        l.addEventListener(Dc, c),
        (u = L),
        () => {
          l.removeEventListener(Dc, c), (u = null);
        }
      );
    },
    createHref(L) {
      return t(l, L);
    },
    createURL: w,
    encodeLocation(L) {
      let m = w(L);
      return { pathname: m.pathname, search: m.search, hash: m.hash };
    },
    push: h,
    replace: x,
    go(L) {
      return o.go(L);
    },
  };
  return S;
}
var ne;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(ne || (ne = {}));
const ty = new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "children",
]);
function ny(e) {
  return e.index === !0;
}
function Sl(e, t, n, r) {
  return (
    n === void 0 && (n = []),
    r === void 0 && (r = {}),
    e.map((l, i) => {
      let o = [...n, String(i)],
        a = typeof l.id == "string" ? l.id : o.join("-");
      if (
        (V(
          l.index !== !0 || !l.children,
          "Cannot specify children on an index route",
        ),
        V(
          !r[a],
          'Found a route id collision on id "' +
            a +
            `".  Route id's must be globally unique within Data Router usages`,
        ),
        ny(l))
      ) {
        let u = ce({}, l, t(l), { id: a });
        return (r[a] = u), u;
      } else {
        let u = ce({}, l, t(l), { id: a, children: void 0 });
        return (
          (r[a] = u), l.children && (u.children = Sl(l.children, t, o, r)), u
        );
      }
    })
  );
}
function Lt(e, t, n) {
  return n === void 0 && (n = "/"), yi(e, t, n, !1);
}
function yi(e, t, n, r) {
  let l = typeof t == "string" ? Kt(t) : t,
    i = xt(l.pathname || "/", n);
  if (i == null) return null;
  let o = gh(e);
  ly(o);
  let a = null;
  for (let u = 0; a == null && u < o.length; ++u) {
    let s = my(i);
    a = hy(o[u], s, r);
  }
  return a;
}
function ry(e, t) {
  let { route: n, pathname: r, params: l } = e;
  return { id: n.id, pathname: r, params: l, data: t[n.id], handle: n.handle };
}
function gh(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let l = (i, o, a) => {
    let u = {
      relativePath: a === void 0 ? i.path || "" : a,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: o,
      route: i,
    };
    u.relativePath.startsWith("/") &&
      (V(
        u.relativePath.startsWith(r),
        'Absolute route path "' +
          u.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes.",
      ),
      (u.relativePath = u.relativePath.slice(r.length)));
    let s = Nt([r, u.relativePath]),
      d = n.concat(u);
    i.children &&
      i.children.length > 0 &&
      (V(
        i.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + s + '".'),
      ),
      gh(i.children, t, d, s)),
      !(i.path == null && !i.index) &&
        t.push({ path: s, score: dy(s, i.index), routesMeta: d });
  };
  return (
    e.forEach((i, o) => {
      var a;
      if (i.path === "" || !((a = i.path) != null && a.includes("?"))) l(i, o);
      else for (let u of wh(i.path)) l(i, o, u);
    }),
    t
  );
}
function wh(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    l = n.endsWith("?"),
    i = n.replace(/\?$/, "");
  if (r.length === 0) return l ? [i, ""] : [i];
  let o = wh(r.join("/")),
    a = [];
  return (
    a.push(...o.map((u) => (u === "" ? i : [i, u].join("/")))),
    l && a.push(...o),
    a.map((u) => (e.startsWith("/") && u === "" ? "/" : u))
  );
}
function ly(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : fy(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex),
        ),
  );
}
const iy = /^:[\w-]+$/,
  oy = 3,
  ay = 2,
  uy = 1,
  sy = 10,
  cy = -2,
  Mc = (e) => e === "*";
function dy(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Mc) && (r += cy),
    t && (r += ay),
    n
      .filter((l) => !Mc(l))
      .reduce((l, i) => l + (iy.test(i) ? oy : i === "" ? uy : sy), r)
  );
}
function fy(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function hy(e, t, n) {
  n === void 0 && (n = !1);
  let { routesMeta: r } = e,
    l = {},
    i = "/",
    o = [];
  for (let a = 0; a < r.length; ++a) {
    let u = r[a],
      s = a === r.length - 1,
      d = i === "/" ? t : t.slice(i.length) || "/",
      c = Vi(
        { path: u.relativePath, caseSensitive: u.caseSensitive, end: s },
        d,
      ),
      h = u.route;
    if (
      (!c &&
        s &&
        n &&
        !r[r.length - 1].route.index &&
        (c = Vi(
          { path: u.relativePath, caseSensitive: u.caseSensitive, end: !1 },
          d,
        )),
      !c)
    )
      return null;
    Object.assign(l, c.params),
      o.push({
        params: l,
        pathname: Nt([i, c.pathname]),
        pathnameBase: gy(Nt([i, c.pathnameBase])),
        route: h,
      }),
      c.pathnameBase !== "/" && (i = Nt([i, c.pathnameBase]));
  }
  return o;
}
function Vi(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = py(e.path, e.caseSensitive, e.end),
    l = t.match(n);
  if (!l) return null;
  let i = l[0],
    o = i.replace(/(.)\/+$/, "$1"),
    a = l.slice(1);
  return {
    params: r.reduce((s, d, c) => {
      let { paramName: h, isOptional: x } = d;
      if (h === "*") {
        let S = a[c] || "";
        o = i.slice(0, i.length - S.length).replace(/(.)\/+$/, "$1");
      }
      const w = a[c];
      return (
        x && !w ? (s[h] = void 0) : (s[h] = (w || "").replace(/%2F/g, "/")), s
      );
    }, {}),
    pathname: i,
    pathnameBase: o,
    pattern: e,
  };
}
function py(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Sr(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'),
    );
  let r = [],
    l =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (o, a, u) => (
            r.push({ paramName: a, isOptional: u != null }),
            u ? "/?([^\\/]+)?" : "/([^\\/]+)"
          ),
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (l += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
        ? (l += "\\/*$")
        : e !== "" && e !== "/" && (l += "(?:(?=\\/|$))"),
    [new RegExp(l, t ? void 0 : "i"), r]
  );
}
function my(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      Sr(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ")."),
      ),
      e
    );
  }
}
function xt(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function vy(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: l = "",
  } = typeof e == "string" ? Kt(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : yy(n, t)) : t,
    search: wy(r),
    hash: Sy(l),
  };
}
function yy(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((l) => {
      l === ".." ? n.length > 1 && n.pop() : l !== "." && n.push(l);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function Qo(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Sh(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0),
  );
}
function Xu(e, t) {
  let n = Sh(e);
  return t
    ? n.map((r, l) => (l === n.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function Ju(e, t, n, r) {
  r === void 0 && (r = !1);
  let l;
  typeof e == "string"
    ? (l = Kt(e))
    : ((l = ce({}, e)),
      V(
        !l.pathname || !l.pathname.includes("?"),
        Qo("?", "pathname", "search", l),
      ),
      V(
        !l.pathname || !l.pathname.includes("#"),
        Qo("#", "pathname", "hash", l),
      ),
      V(!l.search || !l.search.includes("#"), Qo("#", "search", "hash", l)));
  let i = e === "" || l.pathname === "",
    o = i ? "/" : l.pathname,
    a;
  if (o == null) a = n;
  else {
    let c = t.length - 1;
    if (!r && o.startsWith("..")) {
      let h = o.split("/");
      for (; h[0] === ".."; ) h.shift(), (c -= 1);
      l.pathname = h.join("/");
    }
    a = c >= 0 ? t[c] : "/";
  }
  let u = vy(l, a),
    s = o && o !== "/" && o.endsWith("/"),
    d = (i || o === ".") && n.endsWith("/");
  return !u.pathname.endsWith("/") && (s || d) && (u.pathname += "/"), u;
}
const Nt = (e) => e.join("/").replace(/\/\/+/g, "/"),
  gy = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  wy = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  Sy = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
class Ey {
  constructor(t, n) {
    (this.type = "DataWithResponseInit"),
      (this.data = t),
      (this.init = n || null);
  }
}
function xy(e, t) {
  return new Ey(e, typeof t == "number" ? { status: t } : t);
}
class Ki extends Error {}
class _y {
  constructor(t, n) {
    (this.pendingKeysSet = new Set()),
      (this.subscribers = new Set()),
      (this.deferredKeys = []),
      V(
        t && typeof t == "object" && !Array.isArray(t),
        "defer() only accepts plain objects",
      );
    let r;
    (this.abortPromise = new Promise((i, o) => (r = o))),
      (this.controller = new AbortController());
    let l = () => r(new Ki("Deferred data aborted"));
    (this.unlistenAbortSignal = () =>
      this.controller.signal.removeEventListener("abort", l)),
      this.controller.signal.addEventListener("abort", l),
      (this.data = Object.entries(t).reduce((i, o) => {
        let [a, u] = o;
        return Object.assign(i, { [a]: this.trackPromise(a, u) });
      }, {})),
      this.done && this.unlistenAbortSignal(),
      (this.init = n);
  }
  trackPromise(t, n) {
    if (!(n instanceof Promise)) return n;
    this.deferredKeys.push(t), this.pendingKeysSet.add(t);
    let r = Promise.race([n, this.abortPromise]).then(
      (l) => this.onSettle(r, t, void 0, l),
      (l) => this.onSettle(r, t, l),
    );
    return (
      r.catch(() => {}),
      Object.defineProperty(r, "_tracked", { get: () => !0 }),
      r
    );
  }
  onSettle(t, n, r, l) {
    if (this.controller.signal.aborted && r instanceof Ki)
      return (
        this.unlistenAbortSignal(),
        Object.defineProperty(t, "_error", { get: () => r }),
        Promise.reject(r)
      );
    if (
      (this.pendingKeysSet.delete(n),
      this.done && this.unlistenAbortSignal(),
      r === void 0 && l === void 0)
    ) {
      let i = new Error(
        'Deferred data for key "' +
          n +
          '" resolved/rejected with `undefined`, you must resolve/reject with a value or `null`.',
      );
      return (
        Object.defineProperty(t, "_error", { get: () => i }),
        this.emit(!1, n),
        Promise.reject(i)
      );
    }
    return l === void 0
      ? (Object.defineProperty(t, "_error", { get: () => r }),
        this.emit(!1, n),
        Promise.reject(r))
      : (Object.defineProperty(t, "_data", { get: () => l }),
        this.emit(!1, n),
        l);
  }
  emit(t, n) {
    this.subscribers.forEach((r) => r(t, n));
  }
  subscribe(t) {
    return this.subscribers.add(t), () => this.subscribers.delete(t);
  }
  cancel() {
    this.controller.abort(),
      this.pendingKeysSet.forEach((t, n) => this.pendingKeysSet.delete(n)),
      this.emit(!0);
  }
  async resolveData(t) {
    let n = !1;
    if (!this.done) {
      let r = () => this.cancel();
      t.addEventListener("abort", r),
        (n = await new Promise((l) => {
          this.subscribe((i) => {
            t.removeEventListener("abort", r), (i || this.done) && l(i);
          });
        }));
    }
    return n;
  }
  get done() {
    return this.pendingKeysSet.size === 0;
  }
  get unwrappedData() {
    return (
      V(
        this.data !== null && this.done,
        "Can only unwrap data on initialized and settled deferreds",
      ),
      Object.entries(this.data).reduce((t, n) => {
        let [r, l] = n;
        return Object.assign(t, { [r]: Ry(l) });
      }, {})
    );
  }
  get pendingKeys() {
    return Array.from(this.pendingKeysSet);
  }
}
function ky(e) {
  return e instanceof Promise && e._tracked === !0;
}
function Ry(e) {
  if (!ky(e)) return e;
  if (e._error) throw e._error;
  return e._data;
}
const Eh = function (t, n) {
  n === void 0 && (n = 302);
  let r = n;
  typeof r == "number"
    ? (r = { status: r })
    : typeof r.status > "u" && (r.status = 302);
  let l = new Headers(r.headers);
  return l.set("Location", t), new Response(null, ce({}, r, { headers: l }));
};
class vn {
  constructor(t, n, r, l) {
    l === void 0 && (l = !1),
      (this.status = t),
      (this.statusText = n || ""),
      (this.internal = l),
      r instanceof Error
        ? ((this.data = r.toString()), (this.error = r))
        : (this.data = r);
  }
}
function Rr(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const xh = ["post", "put", "patch", "delete"],
  Cy = new Set(xh),
  Py = ["get", ...xh],
  Ly = new Set(Py),
  Ty = new Set([301, 302, 303, 307, 308]),
  Dy = new Set([307, 308]),
  Yo = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  Ny = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  Ur = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 },
  Gu = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  My = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
  _h = "remix-router-transitions";
function Oy(e) {
  const t = e.window ? e.window : typeof window < "u" ? window : void 0,
    n =
      typeof t < "u" &&
      typeof t.document < "u" &&
      typeof t.document.createElement < "u",
    r = !n;
  V(
    e.routes.length > 0,
    "You must provide a non-empty routes array to createRouter",
  );
  let l;
  if (e.mapRouteProperties) l = e.mapRouteProperties;
  else if (e.detectErrorBoundary) {
    let g = e.detectErrorBoundary;
    l = (E) => ({ hasErrorBoundary: g(E) });
  } else l = My;
  let i = {},
    o = Sl(e.routes, l, void 0, i),
    a,
    u = e.basename || "/",
    s = e.unstable_dataStrategy || Uy,
    d = e.unstable_patchRoutesOnMiss,
    c = ce(
      {
        v7_fetcherPersist: !1,
        v7_normalizeFormMethod: !1,
        v7_partialHydration: !1,
        v7_prependBasename: !1,
        v7_relativeSplatPath: !1,
        v7_skipActionErrorRevalidation: !1,
      },
      e.future,
    ),
    h = null,
    x = new Set(),
    w = null,
    S = null,
    L = null,
    m = e.hydrationData != null,
    f = Lt(o, e.history.location, u),
    p = null;
  if (f == null && !d) {
    let g = Ae(404, { pathname: e.history.location.pathname }),
      { matches: E, route: k } = Hc(o);
    (f = E), (p = { [k.id]: g });
  }
  f &&
    !e.hydrationData &&
    Ml(f, o, e.history.location.pathname).active &&
    (f = null);
  let _;
  if (f)
    if (f.some((g) => g.route.lazy)) _ = !1;
    else if (!f.some((g) => g.route.loader)) _ = !0;
    else if (c.v7_partialHydration) {
      let g = e.hydrationData ? e.hydrationData.loaderData : null,
        E = e.hydrationData ? e.hydrationData.errors : null,
        k = (R) =>
          R.route.loader
            ? typeof R.route.loader == "function" &&
              R.route.loader.hydrate === !0
              ? !1
              : (g && g[R.route.id] !== void 0) ||
                (E && E[R.route.id] !== void 0)
            : !0;
      if (E) {
        let R = f.findIndex((F) => E[F.route.id] !== void 0);
        _ = f.slice(0, R + 1).every(k);
      } else _ = f.every(k);
    } else _ = e.hydrationData != null;
  else if (((_ = !1), (f = []), c.v7_partialHydration)) {
    let g = Ml(null, o, e.history.location.pathname);
    g.active && g.matches && (f = g.matches);
  }
  let P,
    v = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: f,
      initialized: _,
      navigation: Yo,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || p,
      fetchers: new Map(),
      blockers: new Map(),
    },
    T = Se.Pop,
    C = !1,
    M,
    O = !1,
    W = new Map(),
    X = null,
    ge = !1,
    ee = !1,
    xe = [],
    rt = new Set(),
    ue = new Map(),
    z = 0,
    B = -1,
    H = new Map(),
    G = new Set(),
    ie = new Map(),
    _t = new Map(),
    Pe = new Set(),
    ht = new Map(),
    Ie = new Map(),
    Bn = new Map(),
    vo = !1;
  function lp() {
    if (
      ((h = e.history.listen((g) => {
        let { action: E, location: k, delta: R } = g;
        if (vo) {
          vo = !1;
          return;
        }
        Sr(
          Ie.size === 0 || R != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.",
        );
        let F = ys({
          currentLocation: v.location,
          nextLocation: k,
          historyAction: E,
        });
        if (F && R != null) {
          (vo = !0),
            e.history.go(R * -1),
            Dl(F, {
              state: "blocked",
              location: k,
              proceed() {
                Dl(F, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: k,
                }),
                  e.history.go(R);
              },
              reset() {
                let I = new Map(v.blockers);
                I.set(F, Ur), Ue({ blockers: I });
              },
            });
          return;
        }
        return xn(E, k);
      })),
      n)
    ) {
      Zy(t, W);
      let g = () => by(t, W);
      t.addEventListener("pagehide", g),
        (X = () => t.removeEventListener("pagehide", g));
    }
    return v.initialized || xn(Se.Pop, v.location, { initialHydration: !0 }), P;
  }
  function ip() {
    h && h(),
      X && X(),
      x.clear(),
      M && M.abort(),
      v.fetchers.forEach((g, E) => Tl(E)),
      v.blockers.forEach((g, E) => vs(E));
  }
  function op(g) {
    return x.add(g), () => x.delete(g);
  }
  function Ue(g, E) {
    E === void 0 && (E = {}), (v = ce({}, v, g));
    let k = [],
      R = [];
    c.v7_fetcherPersist &&
      v.fetchers.forEach((F, I) => {
        F.state === "idle" && (Pe.has(I) ? R.push(I) : k.push(I));
      }),
      [...x].forEach((F) =>
        F(v, {
          deletedFetchers: R,
          unstable_viewTransitionOpts: E.viewTransitionOpts,
          unstable_flushSync: E.flushSync === !0,
        }),
      ),
      c.v7_fetcherPersist &&
        (k.forEach((F) => v.fetchers.delete(F)), R.forEach((F) => Tl(F)));
  }
  function Hn(g, E, k) {
    var R, F;
    let { flushSync: I } = k === void 0 ? {} : k,
      $ =
        v.actionData != null &&
        v.navigation.formMethod != null &&
        yt(v.navigation.formMethod) &&
        v.navigation.state === "loading" &&
        ((R = g.state) == null ? void 0 : R._isRedirect) !== !0,
      N;
    E.actionData
      ? Object.keys(E.actionData).length > 0
        ? (N = E.actionData)
        : (N = null)
      : $
        ? (N = v.actionData)
        : (N = null);
    let K = E.loaderData
        ? $c(v.loaderData, E.loaderData, E.matches || [], E.errors)
        : v.loaderData,
      U = v.blockers;
    U.size > 0 && ((U = new Map(U)), U.forEach((b, re) => U.set(re, Ur)));
    let A =
      C === !0 ||
      (v.navigation.formMethod != null &&
        yt(v.navigation.formMethod) &&
        ((F = g.state) == null ? void 0 : F._isRedirect) !== !0);
    a && ((o = a), (a = void 0)),
      ge ||
        T === Se.Pop ||
        (T === Se.Push
          ? e.history.push(g, g.state)
          : T === Se.Replace && e.history.replace(g, g.state));
    let te;
    if (T === Se.Pop) {
      let b = W.get(v.location.pathname);
      b && b.has(g.pathname)
        ? (te = { currentLocation: v.location, nextLocation: g })
        : W.has(g.pathname) &&
          (te = { currentLocation: g, nextLocation: v.location });
    } else if (O) {
      let b = W.get(v.location.pathname);
      b
        ? b.add(g.pathname)
        : ((b = new Set([g.pathname])), W.set(v.location.pathname, b)),
        (te = { currentLocation: v.location, nextLocation: g });
    }
    Ue(
      ce({}, E, {
        actionData: N,
        loaderData: K,
        historyAction: T,
        location: g,
        initialized: !0,
        navigation: Yo,
        revalidation: "idle",
        restoreScrollPosition: ws(g, E.matches || v.matches),
        preventScrollReset: A,
        blockers: U,
      }),
      { viewTransitionOpts: te, flushSync: I === !0 },
    ),
      (T = Se.Pop),
      (C = !1),
      (O = !1),
      (ge = !1),
      (ee = !1),
      (xe = []);
  }
  async function ss(g, E) {
    if (typeof g == "number") {
      e.history.go(g);
      return;
    }
    let k = Qa(
        v.location,
        v.matches,
        u,
        c.v7_prependBasename,
        g,
        c.v7_relativeSplatPath,
        E == null ? void 0 : E.fromRouteId,
        E == null ? void 0 : E.relative,
      ),
      {
        path: R,
        submission: F,
        error: I,
      } = Oc(c.v7_normalizeFormMethod, !1, k, E),
      $ = v.location,
      N = wl(v.location, R, E && E.state);
    N = ce({}, N, e.history.encodeLocation(N));
    let K = E && E.replace != null ? E.replace : void 0,
      U = Se.Push;
    K === !0
      ? (U = Se.Replace)
      : K === !1 ||
        (F != null &&
          yt(F.formMethod) &&
          F.formAction === v.location.pathname + v.location.search &&
          (U = Se.Replace));
    let A =
        E && "preventScrollReset" in E ? E.preventScrollReset === !0 : void 0,
      te = (E && E.unstable_flushSync) === !0,
      b = ys({ currentLocation: $, nextLocation: N, historyAction: U });
    if (b) {
      Dl(b, {
        state: "blocked",
        location: N,
        proceed() {
          Dl(b, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: N,
          }),
            ss(g, E);
        },
        reset() {
          let re = new Map(v.blockers);
          re.set(b, Ur), Ue({ blockers: re });
        },
      });
      return;
    }
    return await xn(U, N, {
      submission: F,
      pendingError: I,
      preventScrollReset: A,
      replace: E && E.replace,
      enableViewTransition: E && E.unstable_viewTransition,
      flushSync: te,
    });
  }
  function ap() {
    if (
      (yo(),
      Ue({ revalidation: "loading" }),
      v.navigation.state !== "submitting")
    ) {
      if (v.navigation.state === "idle") {
        xn(v.historyAction, v.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      xn(T || v.historyAction, v.navigation.location, {
        overrideNavigation: v.navigation,
      });
    }
  }
  async function xn(g, E, k) {
    M && M.abort(),
      (M = null),
      (T = g),
      (ge = (k && k.startUninterruptedRevalidation) === !0),
      yp(v.location, v.matches),
      (C = (k && k.preventScrollReset) === !0),
      (O = (k && k.enableViewTransition) === !0);
    let R = a || o,
      F = k && k.overrideNavigation,
      I = Lt(R, E, u),
      $ = (k && k.flushSync) === !0,
      N = Ml(I, R, E.pathname);
    if ((N.active && N.matches && (I = N.matches), !I)) {
      let { error: Z, notFoundMatches: Le, route: we } = go(E.pathname);
      Hn(
        E,
        { matches: Le, loaderData: {}, errors: { [we.id]: Z } },
        { flushSync: $ },
      );
      return;
    }
    if (
      v.initialized &&
      !ee &&
      Vy(v.location, E) &&
      !(k && k.submission && yt(k.submission.formMethod))
    ) {
      Hn(E, { matches: I }, { flushSync: $ });
      return;
    }
    M = new AbortController();
    let K = Yn(e.history, E, M.signal, k && k.submission),
      U;
    if (k && k.pendingError)
      U = [or(I).route.id, { type: ne.error, error: k.pendingError }];
    else if (k && k.submission && yt(k.submission.formMethod)) {
      let Z = await up(K, E, k.submission, I, N.active, {
        replace: k.replace,
        flushSync: $,
      });
      if (Z.shortCircuited) return;
      if (Z.pendingActionResult) {
        let [Le, we] = Z.pendingActionResult;
        if (Ze(we) && Rr(we.error) && we.error.status === 404) {
          (M = null),
            Hn(E, {
              matches: Z.matches,
              loaderData: {},
              errors: { [Le]: we.error },
            });
          return;
        }
      }
      (I = Z.matches || I),
        (U = Z.pendingActionResult),
        (F = Xo(E, k.submission)),
        ($ = !1),
        (N.active = !1),
        (K = Yn(e.history, K.url, K.signal));
    }
    let {
      shortCircuited: A,
      matches: te,
      loaderData: b,
      errors: re,
    } = await sp(
      K,
      E,
      I,
      N.active,
      F,
      k && k.submission,
      k && k.fetcherSubmission,
      k && k.replace,
      k && k.initialHydration === !0,
      $,
      U,
    );
    A ||
      ((M = null),
      Hn(E, ce({ matches: te || I }, Bc(U), { loaderData: b, errors: re })));
  }
  async function up(g, E, k, R, F, I) {
    I === void 0 && (I = {}), yo();
    let $ = Jy(E, k);
    if ((Ue({ navigation: $ }, { flushSync: I.flushSync === !0 }), F)) {
      let U = await Ol(R, E.pathname, g.signal);
      if (U.type === "aborted") return { shortCircuited: !0 };
      if (U.type === "error") {
        let { boundaryId: A, error: te } = Nl(E.pathname, U);
        return {
          matches: U.partialMatches,
          pendingActionResult: [A, { type: ne.error, error: te }],
        };
      } else if (U.matches) R = U.matches;
      else {
        let { notFoundMatches: A, error: te, route: b } = go(E.pathname);
        return {
          matches: A,
          pendingActionResult: [b.id, { type: ne.error, error: te }],
        };
      }
    }
    let N,
      K = Qr(R, E);
    if (!K.route.action && !K.route.lazy)
      N = {
        type: ne.error,
        error: Ae(405, {
          method: g.method,
          pathname: E.pathname,
          routeId: K.route.id,
        }),
      };
    else if (((N = (await Lr("action", g, [K], R))[0]), g.signal.aborted))
      return { shortCircuited: !0 };
    if (Tn(N)) {
      let U;
      return (
        I && I.replace != null
          ? (U = I.replace)
          : (U =
              Ic(N.response.headers.get("Location"), new URL(g.url), u) ===
              v.location.pathname + v.location.search),
        await Pr(g, N, { submission: k, replace: U }),
        { shortCircuited: !0 }
      );
    }
    if (Ln(N)) throw Ae(400, { type: "defer-action" });
    if (Ze(N)) {
      let U = or(R, K.route.id);
      return (
        (I && I.replace) !== !0 && (T = Se.Push),
        { matches: R, pendingActionResult: [U.route.id, N] }
      );
    }
    return { matches: R, pendingActionResult: [K.route.id, N] };
  }
  async function sp(g, E, k, R, F, I, $, N, K, U, A) {
    let te = F || Xo(E, I),
      b = I || $ || Qc(te),
      re = !ge && (!c.v7_partialHydration || !K);
    if (R) {
      if (re) {
        let me = cs(A);
        Ue(ce({ navigation: te }, me !== void 0 ? { actionData: me } : {}), {
          flushSync: U,
        });
      }
      let Q = await Ol(k, E.pathname, g.signal);
      if (Q.type === "aborted") return { shortCircuited: !0 };
      if (Q.type === "error") {
        let { boundaryId: me, error: Je } = Nl(E.pathname, Q);
        return {
          matches: Q.partialMatches,
          loaderData: {},
          errors: { [me]: Je },
        };
      } else if (Q.matches) k = Q.matches;
      else {
        let { error: me, notFoundMatches: Je, route: se } = go(E.pathname);
        return { matches: Je, loaderData: {}, errors: { [se.id]: me } };
      }
    }
    let Z = a || o,
      [Le, we] = zc(
        e.history,
        v,
        k,
        b,
        E,
        c.v7_partialHydration && K === !0,
        c.v7_skipActionErrorRevalidation,
        ee,
        xe,
        rt,
        Pe,
        ie,
        G,
        Z,
        u,
        A,
      );
    if (
      (wo(
        (Q) =>
          !(k && k.some((me) => me.route.id === Q)) ||
          (Le && Le.some((me) => me.route.id === Q)),
      ),
      (B = ++z),
      Le.length === 0 && we.length === 0)
    ) {
      let Q = ps();
      return (
        Hn(
          E,
          ce(
            {
              matches: k,
              loaderData: {},
              errors: A && Ze(A[1]) ? { [A[0]]: A[1].error } : null,
            },
            Bc(A),
            Q ? { fetchers: new Map(v.fetchers) } : {},
          ),
          { flushSync: U },
        ),
        { shortCircuited: !0 }
      );
    }
    if (re) {
      let Q = {};
      if (!R) {
        Q.navigation = te;
        let me = cs(A);
        me !== void 0 && (Q.actionData = me);
      }
      we.length > 0 && (Q.fetchers = cp(we)), Ue(Q, { flushSync: U });
    }
    we.forEach((Q) => {
      ue.has(Q.key) && Yt(Q.key), Q.controller && ue.set(Q.key, Q.controller);
    });
    let Tr = () => we.forEach((Q) => Yt(Q.key));
    M && M.signal.addEventListener("abort", Tr);
    let { loaderResults: Xt, fetcherResults: Wn } = await ds(
      v.matches,
      k,
      Le,
      we,
      g,
    );
    if (g.signal.aborted) return { shortCircuited: !0 };
    M && M.signal.removeEventListener("abort", Tr),
      we.forEach((Q) => ue.delete(Q.key));
    let Vn = Wc([...Xt, ...Wn]);
    if (Vn) {
      if (Vn.idx >= Le.length) {
        let Q = we[Vn.idx - Le.length].key;
        G.add(Q);
      }
      return await Pr(g, Vn.result, { replace: N }), { shortCircuited: !0 };
    }
    let { loaderData: Kn, errors: kt } = Ac(v, k, Le, Xt, A, we, Wn, ht);
    ht.forEach((Q, me) => {
      Q.subscribe((Je) => {
        (Je || Q.done) && ht.delete(me);
      });
    }),
      c.v7_partialHydration &&
        K &&
        v.errors &&
        Object.entries(v.errors)
          .filter((Q) => {
            let [me] = Q;
            return !Le.some((Je) => Je.route.id === me);
          })
          .forEach((Q) => {
            let [me, Je] = Q;
            kt = Object.assign(kt || {}, { [me]: Je });
          });
    let zl = ps(),
      Fl = ms(B),
      jl = zl || Fl || we.length > 0;
    return ce(
      { matches: k, loaderData: Kn, errors: kt },
      jl ? { fetchers: new Map(v.fetchers) } : {},
    );
  }
  function cs(g) {
    if (g && !Ze(g[1])) return { [g[0]]: g[1].data };
    if (v.actionData)
      return Object.keys(v.actionData).length === 0 ? null : v.actionData;
  }
  function cp(g) {
    return (
      g.forEach((E) => {
        let k = v.fetchers.get(E.key),
          R = Ar(void 0, k ? k.data : void 0);
        v.fetchers.set(E.key, R);
      }),
      new Map(v.fetchers)
    );
  }
  function dp(g, E, k, R) {
    if (r)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.",
      );
    ue.has(g) && Yt(g);
    let F = (R && R.unstable_flushSync) === !0,
      I = a || o,
      $ = Qa(
        v.location,
        v.matches,
        u,
        c.v7_prependBasename,
        k,
        c.v7_relativeSplatPath,
        E,
        R == null ? void 0 : R.relative,
      ),
      N = Lt(I, $, u),
      K = Ml(N, I, $);
    if ((K.active && K.matches && (N = K.matches), !N)) {
      Ot(g, E, Ae(404, { pathname: $ }), { flushSync: F });
      return;
    }
    let {
      path: U,
      submission: A,
      error: te,
    } = Oc(c.v7_normalizeFormMethod, !0, $, R);
    if (te) {
      Ot(g, E, te, { flushSync: F });
      return;
    }
    let b = Qr(N, U);
    if (((C = (R && R.preventScrollReset) === !0), A && yt(A.formMethod))) {
      fp(g, E, U, b, N, K.active, F, A);
      return;
    }
    ie.set(g, { routeId: E, path: U }), hp(g, E, U, b, N, K.active, F, A);
  }
  async function fp(g, E, k, R, F, I, $, N) {
    yo(), ie.delete(g);
    function K(se) {
      if (!se.route.action && !se.route.lazy) {
        let zt = Ae(405, { method: N.formMethod, pathname: k, routeId: E });
        return Ot(g, E, zt, { flushSync: $ }), !0;
      }
      return !1;
    }
    if (!I && K(R)) return;
    let U = v.fetchers.get(g);
    Qt(g, Gy(N, U), { flushSync: $ });
    let A = new AbortController(),
      te = Yn(e.history, k, A.signal, N);
    if (I) {
      let se = await Ol(F, k, te.signal);
      if (se.type === "aborted") return;
      if (se.type === "error") {
        let { error: zt } = Nl(k, se);
        Ot(g, E, zt, { flushSync: $ });
        return;
      } else if (se.matches) {
        if (((F = se.matches), (R = Qr(F, k)), K(R))) return;
      } else {
        Ot(g, E, Ae(404, { pathname: k }), { flushSync: $ });
        return;
      }
    }
    ue.set(g, A);
    let b = z,
      Z = (await Lr("action", te, [R], F))[0];
    if (te.signal.aborted) {
      ue.get(g) === A && ue.delete(g);
      return;
    }
    if (c.v7_fetcherPersist && Pe.has(g)) {
      if (Tn(Z) || Ze(Z)) {
        Qt(g, Zt(void 0));
        return;
      }
    } else {
      if (Tn(Z))
        if ((ue.delete(g), B > b)) {
          Qt(g, Zt(void 0));
          return;
        } else
          return G.add(g), Qt(g, Ar(N)), Pr(te, Z, { fetcherSubmission: N });
      if (Ze(Z)) {
        Ot(g, E, Z.error);
        return;
      }
    }
    if (Ln(Z)) throw Ae(400, { type: "defer-action" });
    let Le = v.navigation.location || v.location,
      we = Yn(e.history, Le, A.signal),
      Tr = a || o,
      Xt =
        v.navigation.state !== "idle"
          ? Lt(Tr, v.navigation.location, u)
          : v.matches;
    V(Xt, "Didn't find any matches after fetcher action");
    let Wn = ++z;
    H.set(g, Wn);
    let Vn = Ar(N, Z.data);
    v.fetchers.set(g, Vn);
    let [Kn, kt] = zc(
      e.history,
      v,
      Xt,
      N,
      Le,
      !1,
      c.v7_skipActionErrorRevalidation,
      ee,
      xe,
      rt,
      Pe,
      ie,
      G,
      Tr,
      u,
      [R.route.id, Z],
    );
    kt
      .filter((se) => se.key !== g)
      .forEach((se) => {
        let zt = se.key,
          Ss = v.fetchers.get(zt),
          Sp = Ar(void 0, Ss ? Ss.data : void 0);
        v.fetchers.set(zt, Sp),
          ue.has(zt) && Yt(zt),
          se.controller && ue.set(zt, se.controller);
      }),
      Ue({ fetchers: new Map(v.fetchers) });
    let zl = () => kt.forEach((se) => Yt(se.key));
    A.signal.addEventListener("abort", zl);
    let { loaderResults: Fl, fetcherResults: jl } = await ds(
      v.matches,
      Xt,
      Kn,
      kt,
      we,
    );
    if (A.signal.aborted) return;
    A.signal.removeEventListener("abort", zl),
      H.delete(g),
      ue.delete(g),
      kt.forEach((se) => ue.delete(se.key));
    let Q = Wc([...Fl, ...jl]);
    if (Q) {
      if (Q.idx >= Kn.length) {
        let se = kt[Q.idx - Kn.length].key;
        G.add(se);
      }
      return Pr(we, Q.result);
    }
    let { loaderData: me, errors: Je } = Ac(
      v,
      v.matches,
      Kn,
      Fl,
      void 0,
      kt,
      jl,
      ht,
    );
    if (v.fetchers.has(g)) {
      let se = Zt(Z.data);
      v.fetchers.set(g, se);
    }
    ms(Wn),
      v.navigation.state === "loading" && Wn > B
        ? (V(T, "Expected pending action"),
          M && M.abort(),
          Hn(v.navigation.location, {
            matches: Xt,
            loaderData: me,
            errors: Je,
            fetchers: new Map(v.fetchers),
          }))
        : (Ue({
            errors: Je,
            loaderData: $c(v.loaderData, me, Xt, Je),
            fetchers: new Map(v.fetchers),
          }),
          (ee = !1));
  }
  async function hp(g, E, k, R, F, I, $, N) {
    let K = v.fetchers.get(g);
    Qt(g, Ar(N, K ? K.data : void 0), { flushSync: $ });
    let U = new AbortController(),
      A = Yn(e.history, k, U.signal);
    if (I) {
      let Z = await Ol(F, k, A.signal);
      if (Z.type === "aborted") return;
      if (Z.type === "error") {
        let { error: Le } = Nl(k, Z);
        Ot(g, E, Le, { flushSync: $ });
        return;
      } else if (Z.matches) (F = Z.matches), (R = Qr(F, k));
      else {
        Ot(g, E, Ae(404, { pathname: k }), { flushSync: $ });
        return;
      }
    }
    ue.set(g, U);
    let te = z,
      re = (await Lr("loader", A, [R], F))[0];
    if (
      (Ln(re) && (re = (await Lh(re, A.signal, !0)) || re),
      ue.get(g) === U && ue.delete(g),
      !A.signal.aborted)
    ) {
      if (Pe.has(g)) {
        Qt(g, Zt(void 0));
        return;
      }
      if (Tn(re))
        if (B > te) {
          Qt(g, Zt(void 0));
          return;
        } else {
          G.add(g), await Pr(A, re);
          return;
        }
      if (Ze(re)) {
        Ot(g, E, re.error);
        return;
      }
      V(!Ln(re), "Unhandled fetcher deferred data"), Qt(g, Zt(re.data));
    }
  }
  async function Pr(g, E, k) {
    let {
      submission: R,
      fetcherSubmission: F,
      replace: I,
    } = k === void 0 ? {} : k;
    E.response.headers.has("X-Remix-Revalidate") && (ee = !0);
    let $ = E.response.headers.get("Location");
    V($, "Expected a Location header on the redirect Response"),
      ($ = Ic($, new URL(g.url), u));
    let N = wl(v.location, $, { _isRedirect: !0 });
    if (n) {
      let re = !1;
      if (E.response.headers.has("X-Remix-Reload-Document")) re = !0;
      else if (Gu.test($)) {
        const Z = e.history.createURL($);
        re = Z.origin !== t.location.origin || xt(Z.pathname, u) == null;
      }
      if (re) {
        I ? t.location.replace($) : t.location.assign($);
        return;
      }
    }
    M = null;
    let K =
        I === !0 || E.response.headers.has("X-Remix-Replace")
          ? Se.Replace
          : Se.Push,
      { formMethod: U, formAction: A, formEncType: te } = v.navigation;
    !R && !F && U && A && te && (R = Qc(v.navigation));
    let b = R || F;
    if (Dy.has(E.response.status) && b && yt(b.formMethod))
      await xn(K, N, {
        submission: ce({}, b, { formAction: $ }),
        preventScrollReset: C,
      });
    else {
      let re = Xo(N, R);
      await xn(K, N, {
        overrideNavigation: re,
        fetcherSubmission: F,
        preventScrollReset: C,
      });
    }
  }
  async function Lr(g, E, k, R) {
    try {
      let F = await Ay(s, g, E, k, R, i, l);
      return await Promise.all(
        F.map((I, $) => {
          if (Qy(I)) {
            let N = I.result;
            return {
              type: ne.redirect,
              response: Hy(N, E, k[$].route.id, R, u, c.v7_relativeSplatPath),
            };
          }
          return By(I);
        }),
      );
    } catch (F) {
      return k.map(() => ({ type: ne.error, error: F }));
    }
  }
  async function ds(g, E, k, R, F) {
    let [I, ...$] = await Promise.all([
      k.length ? Lr("loader", F, k, E) : [],
      ...R.map((N) => {
        if (N.matches && N.match && N.controller) {
          let K = Yn(e.history, N.path, N.controller.signal);
          return Lr("loader", K, [N.match], N.matches).then((U) => U[0]);
        } else
          return Promise.resolve({
            type: ne.error,
            error: Ae(404, { pathname: N.path }),
          });
      }),
    ]);
    return (
      await Promise.all([
        Kc(
          g,
          k,
          I,
          I.map(() => F.signal),
          !1,
          v.loaderData,
        ),
        Kc(
          g,
          R.map((N) => N.match),
          $,
          R.map((N) => (N.controller ? N.controller.signal : null)),
          !0,
        ),
      ]),
      { loaderResults: I, fetcherResults: $ }
    );
  }
  function yo() {
    (ee = !0),
      xe.push(...wo()),
      ie.forEach((g, E) => {
        ue.has(E) && (rt.add(E), Yt(E));
      });
  }
  function Qt(g, E, k) {
    k === void 0 && (k = {}),
      v.fetchers.set(g, E),
      Ue(
        { fetchers: new Map(v.fetchers) },
        { flushSync: (k && k.flushSync) === !0 },
      );
  }
  function Ot(g, E, k, R) {
    R === void 0 && (R = {});
    let F = or(v.matches, E);
    Tl(g),
      Ue(
        { errors: { [F.route.id]: k }, fetchers: new Map(v.fetchers) },
        { flushSync: (R && R.flushSync) === !0 },
      );
  }
  function fs(g) {
    return (
      c.v7_fetcherPersist &&
        (_t.set(g, (_t.get(g) || 0) + 1), Pe.has(g) && Pe.delete(g)),
      v.fetchers.get(g) || Ny
    );
  }
  function Tl(g) {
    let E = v.fetchers.get(g);
    ue.has(g) && !(E && E.state === "loading" && H.has(g)) && Yt(g),
      ie.delete(g),
      H.delete(g),
      G.delete(g),
      Pe.delete(g),
      rt.delete(g),
      v.fetchers.delete(g);
  }
  function pp(g) {
    if (c.v7_fetcherPersist) {
      let E = (_t.get(g) || 0) - 1;
      E <= 0 ? (_t.delete(g), Pe.add(g)) : _t.set(g, E);
    } else Tl(g);
    Ue({ fetchers: new Map(v.fetchers) });
  }
  function Yt(g) {
    let E = ue.get(g);
    V(E, "Expected fetch controller: " + g), E.abort(), ue.delete(g);
  }
  function hs(g) {
    for (let E of g) {
      let k = fs(E),
        R = Zt(k.data);
      v.fetchers.set(E, R);
    }
  }
  function ps() {
    let g = [],
      E = !1;
    for (let k of G) {
      let R = v.fetchers.get(k);
      V(R, "Expected fetcher: " + k),
        R.state === "loading" && (G.delete(k), g.push(k), (E = !0));
    }
    return hs(g), E;
  }
  function ms(g) {
    let E = [];
    for (let [k, R] of H)
      if (R < g) {
        let F = v.fetchers.get(k);
        V(F, "Expected fetcher: " + k),
          F.state === "loading" && (Yt(k), H.delete(k), E.push(k));
      }
    return hs(E), E.length > 0;
  }
  function mp(g, E) {
    let k = v.blockers.get(g) || Ur;
    return Ie.get(g) !== E && Ie.set(g, E), k;
  }
  function vs(g) {
    v.blockers.delete(g), Ie.delete(g);
  }
  function Dl(g, E) {
    let k = v.blockers.get(g) || Ur;
    V(
      (k.state === "unblocked" && E.state === "blocked") ||
        (k.state === "blocked" && E.state === "blocked") ||
        (k.state === "blocked" && E.state === "proceeding") ||
        (k.state === "blocked" && E.state === "unblocked") ||
        (k.state === "proceeding" && E.state === "unblocked"),
      "Invalid blocker state transition: " + k.state + " -> " + E.state,
    );
    let R = new Map(v.blockers);
    R.set(g, E), Ue({ blockers: R });
  }
  function ys(g) {
    let { currentLocation: E, nextLocation: k, historyAction: R } = g;
    if (Ie.size === 0) return;
    Ie.size > 1 && Sr(!1, "A router only supports one blocker at a time");
    let F = Array.from(Ie.entries()),
      [I, $] = F[F.length - 1],
      N = v.blockers.get(I);
    if (
      !(N && N.state === "proceeding") &&
      $({ currentLocation: E, nextLocation: k, historyAction: R })
    )
      return I;
  }
  function go(g) {
    let E = Ae(404, { pathname: g }),
      k = a || o,
      { matches: R, route: F } = Hc(k);
    return wo(), { notFoundMatches: R, route: F, error: E };
  }
  function Nl(g, E) {
    return {
      boundaryId: or(E.partialMatches).route.id,
      error: Ae(400, {
        type: "route-discovery",
        pathname: g,
        message:
          E.error != null && "message" in E.error ? E.error : String(E.error),
      }),
    };
  }
  function wo(g) {
    let E = [];
    return (
      ht.forEach((k, R) => {
        (!g || g(R)) && (k.cancel(), E.push(R), ht.delete(R));
      }),
      E
    );
  }
  function vp(g, E, k) {
    if (((w = g), (L = E), (S = k || null), !m && v.navigation === Yo)) {
      m = !0;
      let R = ws(v.location, v.matches);
      R != null && Ue({ restoreScrollPosition: R });
    }
    return () => {
      (w = null), (L = null), (S = null);
    };
  }
  function gs(g, E) {
    return (
      (S &&
        S(
          g,
          E.map((R) => ry(R, v.loaderData)),
        )) ||
      g.key
    );
  }
  function yp(g, E) {
    if (w && L) {
      let k = gs(g, E);
      w[k] = L();
    }
  }
  function ws(g, E) {
    if (w) {
      let k = gs(g, E),
        R = w[k];
      if (typeof R == "number") return R;
    }
    return null;
  }
  function Ml(g, E, k) {
    if (d)
      if (g) {
        let R = g[g.length - 1].route;
        if (R.path && (R.path === "*" || R.path.endsWith("/*")))
          return { active: !0, matches: yi(E, k, u, !0) };
      } else return { active: !0, matches: yi(E, k, u, !0) || [] };
    return { active: !1, matches: null };
  }
  async function Ol(g, E, k) {
    let R = g,
      F = R.length > 0 ? R[R.length - 1].route : null;
    for (;;) {
      let I = a == null,
        $ = a || o;
      try {
        await Iy(d, E, R, $, i, l, Bn, k);
      } catch (A) {
        return { type: "error", error: A, partialMatches: R };
      } finally {
        I && (o = [...o]);
      }
      if (k.aborted) return { type: "aborted" };
      let N = Lt($, E, u),
        K = !1;
      if (N) {
        let A = N[N.length - 1].route;
        if (A.index) return { type: "success", matches: N };
        if (A.path && A.path.length > 0)
          if (A.path === "*") K = !0;
          else return { type: "success", matches: N };
      }
      let U = yi($, E, u, !0);
      if (
        !U ||
        R.map((A) => A.route.id).join("-") ===
          U.map((A) => A.route.id).join("-")
      )
        return { type: "success", matches: K ? N : null };
      if (((R = U), (F = R[R.length - 1].route), F.path === "*"))
        return { type: "success", matches: R };
    }
  }
  function gp(g) {
    (i = {}), (a = Sl(g, l, void 0, i));
  }
  function wp(g, E) {
    let k = a == null;
    Rh(g, E, a || o, i, l), k && ((o = [...o]), Ue({}));
  }
  return (
    (P = {
      get basename() {
        return u;
      },
      get future() {
        return c;
      },
      get state() {
        return v;
      },
      get routes() {
        return o;
      },
      get window() {
        return t;
      },
      initialize: lp,
      subscribe: op,
      enableScrollRestoration: vp,
      navigate: ss,
      fetch: dp,
      revalidate: ap,
      createHref: (g) => e.history.createHref(g),
      encodeLocation: (g) => e.history.encodeLocation(g),
      getFetcher: fs,
      deleteFetcher: pp,
      dispose: ip,
      getBlocker: mp,
      deleteBlocker: vs,
      patchRoutes: wp,
      _internalFetchControllers: ue,
      _internalActiveDeferreds: ht,
      _internalSetRoutes: gp,
    }),
    P
  );
}
function zy(e) {
  return (
    e != null &&
    (("formData" in e && e.formData != null) ||
      ("body" in e && e.body !== void 0))
  );
}
function Qa(e, t, n, r, l, i, o, a) {
  let u, s;
  if (o) {
    u = [];
    for (let c of t)
      if ((u.push(c), c.route.id === o)) {
        s = c;
        break;
      }
  } else (u = t), (s = t[t.length - 1]);
  let d = Ju(l || ".", Xu(u, i), xt(e.pathname, n) || e.pathname, a === "path");
  return (
    l == null && ((d.search = e.search), (d.hash = e.hash)),
    (l == null || l === "" || l === ".") &&
      s &&
      s.route.index &&
      !Zu(d.search) &&
      (d.search = d.search ? d.search.replace(/^\?/, "?index&") : "?index"),
    r &&
      n !== "/" &&
      (d.pathname = d.pathname === "/" ? n : Nt([n, d.pathname])),
    mn(d)
  );
}
function Oc(e, t, n, r) {
  if (!r || !zy(r)) return { path: n };
  if (r.formMethod && !Xy(r.formMethod))
    return { path: n, error: Ae(405, { method: r.formMethod }) };
  let l = () => ({ path: n, error: Ae(400, { type: "invalid-body" }) }),
    i = r.formMethod || "get",
    o = e ? i.toUpperCase() : i.toLowerCase(),
    a = Ch(n);
  if (r.body !== void 0) {
    if (r.formEncType === "text/plain") {
      if (!yt(o)) return l();
      let h =
        typeof r.body == "string"
          ? r.body
          : r.body instanceof FormData || r.body instanceof URLSearchParams
            ? Array.from(r.body.entries()).reduce((x, w) => {
                let [S, L] = w;
                return (
                  "" +
                  x +
                  S +
                  "=" +
                  L +
                  `
`
                );
              }, "")
            : String(r.body);
      return {
        path: n,
        submission: {
          formMethod: o,
          formAction: a,
          formEncType: r.formEncType,
          formData: void 0,
          json: void 0,
          text: h,
        },
      };
    } else if (r.formEncType === "application/json") {
      if (!yt(o)) return l();
      try {
        let h = typeof r.body == "string" ? JSON.parse(r.body) : r.body;
        return {
          path: n,
          submission: {
            formMethod: o,
            formAction: a,
            formEncType: r.formEncType,
            formData: void 0,
            json: h,
            text: void 0,
          },
        };
      } catch {
        return l();
      }
    }
  }
  V(
    typeof FormData == "function",
    "FormData is not available in this environment",
  );
  let u, s;
  if (r.formData) (u = Ya(r.formData)), (s = r.formData);
  else if (r.body instanceof FormData) (u = Ya(r.body)), (s = r.body);
  else if (r.body instanceof URLSearchParams) (u = r.body), (s = Uc(u));
  else if (r.body == null) (u = new URLSearchParams()), (s = new FormData());
  else
    try {
      (u = new URLSearchParams(r.body)), (s = Uc(u));
    } catch {
      return l();
    }
  let d = {
    formMethod: o,
    formAction: a,
    formEncType: (r && r.formEncType) || "application/x-www-form-urlencoded",
    formData: s,
    json: void 0,
    text: void 0,
  };
  if (yt(d.formMethod)) return { path: n, submission: d };
  let c = Kt(n);
  return (
    t && c.search && Zu(c.search) && u.append("index", ""),
    (c.search = "?" + u),
    { path: mn(c), submission: d }
  );
}
function Fy(e, t) {
  let n = e;
  if (t) {
    let r = e.findIndex((l) => l.route.id === t);
    r >= 0 && (n = e.slice(0, r));
  }
  return n;
}
function zc(e, t, n, r, l, i, o, a, u, s, d, c, h, x, w, S) {
  let L = S ? (Ze(S[1]) ? S[1].error : S[1].data) : void 0,
    m = e.createURL(t.location),
    f = e.createURL(l),
    p = S && Ze(S[1]) ? S[0] : void 0,
    _ = p ? Fy(n, p) : n,
    P = S ? S[1].statusCode : void 0,
    v = o && P && P >= 400,
    T = _.filter((M, O) => {
      let { route: W } = M;
      if (W.lazy) return !0;
      if (W.loader == null) return !1;
      if (i)
        return typeof W.loader != "function" || W.loader.hydrate
          ? !0
          : t.loaderData[W.id] === void 0 &&
              (!t.errors || t.errors[W.id] === void 0);
      if (
        jy(t.loaderData, t.matches[O], M) ||
        u.some((ee) => ee === M.route.id)
      )
        return !0;
      let X = t.matches[O],
        ge = M;
      return Fc(
        M,
        ce(
          {
            currentUrl: m,
            currentParams: X.params,
            nextUrl: f,
            nextParams: ge.params,
          },
          r,
          {
            actionResult: L,
            actionStatus: P,
            defaultShouldRevalidate: v
              ? !1
              : a ||
                m.pathname + m.search === f.pathname + f.search ||
                m.search !== f.search ||
                kh(X, ge),
          },
        ),
      );
    }),
    C = [];
  return (
    c.forEach((M, O) => {
      if (i || !n.some((xe) => xe.route.id === M.routeId) || d.has(O)) return;
      let W = Lt(x, M.path, w);
      if (!W) {
        C.push({
          key: O,
          routeId: M.routeId,
          path: M.path,
          matches: null,
          match: null,
          controller: null,
        });
        return;
      }
      let X = t.fetchers.get(O),
        ge = Qr(W, M.path),
        ee = !1;
      h.has(O)
        ? (ee = !1)
        : s.has(O)
          ? (s.delete(O), (ee = !0))
          : X && X.state !== "idle" && X.data === void 0
            ? (ee = a)
            : (ee = Fc(
                ge,
                ce(
                  {
                    currentUrl: m,
                    currentParams: t.matches[t.matches.length - 1].params,
                    nextUrl: f,
                    nextParams: n[n.length - 1].params,
                  },
                  r,
                  {
                    actionResult: L,
                    actionStatus: P,
                    defaultShouldRevalidate: v ? !1 : a,
                  },
                ),
              )),
        ee &&
          C.push({
            key: O,
            routeId: M.routeId,
            path: M.path,
            matches: W,
            match: ge,
            controller: new AbortController(),
          });
    }),
    [T, C]
  );
}
function jy(e, t, n) {
  let r = !t || n.route.id !== t.route.id,
    l = e[n.route.id] === void 0;
  return r || l;
}
function kh(e, t) {
  let n = e.route.path;
  return (
    e.pathname !== t.pathname ||
    (n != null && n.endsWith("*") && e.params["*"] !== t.params["*"])
  );
}
function Fc(e, t) {
  if (e.route.shouldRevalidate) {
    let n = e.route.shouldRevalidate(t);
    if (typeof n == "boolean") return n;
  }
  return t.defaultShouldRevalidate;
}
async function Iy(e, t, n, r, l, i, o, a) {
  let u = [t, ...n.map((s) => s.route.id)].join("-");
  try {
    let s = o.get(u);
    s ||
      ((s = e({
        path: t,
        matches: n,
        patch: (d, c) => {
          a.aborted || Rh(d, c, r, l, i);
        },
      })),
      o.set(u, s)),
      s && Ky(s) && (await s);
  } finally {
    o.delete(u);
  }
}
function Rh(e, t, n, r, l) {
  if (e) {
    var i;
    let o = r[e];
    V(o, "No route found to patch children into: routeId = " + e);
    let a = Sl(
      t,
      l,
      [
        e,
        "patch",
        String(((i = o.children) == null ? void 0 : i.length) || "0"),
      ],
      r,
    );
    o.children ? o.children.push(...a) : (o.children = a);
  } else {
    let o = Sl(t, l, ["patch", String(n.length || "0")], r);
    n.push(...o);
  }
}
async function jc(e, t, n) {
  if (!e.lazy) return;
  let r = await e.lazy();
  if (!e.lazy) return;
  let l = n[e.id];
  V(l, "No route found in manifest");
  let i = {};
  for (let o in r) {
    let u = l[o] !== void 0 && o !== "hasErrorBoundary";
    Sr(
      !u,
      'Route "' +
        l.id +
        '" has a static property "' +
        o +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + o + '" will be ignored.'),
    ),
      !u && !ty.has(o) && (i[o] = r[o]);
  }
  Object.assign(l, i), Object.assign(l, ce({}, t(l), { lazy: void 0 }));
}
function Uy(e) {
  return Promise.all(e.matches.map((t) => t.resolve()));
}
async function Ay(e, t, n, r, l, i, o, a) {
  let u = r.reduce((c, h) => c.add(h.route.id), new Set()),
    s = new Set(),
    d = await e({
      matches: l.map((c) => {
        let h = u.has(c.route.id);
        return ce({}, c, {
          shouldLoad: h,
          resolve: (w) => (
            s.add(c.route.id),
            h
              ? $y(t, n, c, i, o, w, a)
              : Promise.resolve({ type: ne.data, result: void 0 })
          ),
        });
      }),
      request: n,
      params: l[0].params,
      context: a,
    });
  return (
    l.forEach((c) =>
      V(
        s.has(c.route.id),
        '`match.resolve()` was not called for route id "' +
          c.route.id +
          '". You must call `match.resolve()` on every match passed to `dataStrategy` to ensure all routes are properly loaded.',
      ),
    ),
    d.filter((c, h) => u.has(l[h].route.id))
  );
}
async function $y(e, t, n, r, l, i, o) {
  let a,
    u,
    s = (d) => {
      let c,
        h = new Promise((S, L) => (c = L));
      (u = () => c()), t.signal.addEventListener("abort", u);
      let x = (S) =>
          typeof d != "function"
            ? Promise.reject(
                new Error(
                  "You cannot call the handler for a route which defines a boolean " +
                    ('"' + e + '" [routeId: ' + n.route.id + "]"),
                ),
              )
            : d(
                { request: t, params: n.params, context: o },
                ...(S !== void 0 ? [S] : []),
              ),
        w;
      return (
        i
          ? (w = i((S) => x(S)))
          : (w = (async () => {
              try {
                return { type: "data", result: await x() };
              } catch (S) {
                return { type: "error", result: S };
              }
            })()),
        Promise.race([w, h])
      );
    };
  try {
    let d = n.route[e];
    if (n.route.lazy)
      if (d) {
        let c,
          [h] = await Promise.all([
            s(d).catch((x) => {
              c = x;
            }),
            jc(n.route, l, r),
          ]);
        if (c !== void 0) throw c;
        a = h;
      } else if ((await jc(n.route, l, r), (d = n.route[e]), d)) a = await s(d);
      else if (e === "action") {
        let c = new URL(t.url),
          h = c.pathname + c.search;
        throw Ae(405, { method: t.method, pathname: h, routeId: n.route.id });
      } else return { type: ne.data, result: void 0 };
    else if (d) a = await s(d);
    else {
      let c = new URL(t.url),
        h = c.pathname + c.search;
      throw Ae(404, { pathname: h });
    }
    V(
      a.result !== void 0,
      "You defined " +
        (e === "action" ? "an action" : "a loader") +
        " for route " +
        ('"' +
          n.route.id +
          "\" but didn't return anything from your `" +
          e +
          "` ") +
        "function. Please return a value or `null`.",
    );
  } catch (d) {
    return { type: ne.error, result: d };
  } finally {
    u && t.signal.removeEventListener("abort", u);
  }
  return a;
}
async function By(e) {
  let { result: t, type: n } = e;
  if (Ph(t)) {
    let s;
    try {
      let d = t.headers.get("Content-Type");
      d && /\bapplication\/json\b/.test(d)
        ? t.body == null
          ? (s = null)
          : (s = await t.json())
        : (s = await t.text());
    } catch (d) {
      return { type: ne.error, error: d };
    }
    return n === ne.error
      ? {
          type: ne.error,
          error: new vn(t.status, t.statusText, s),
          statusCode: t.status,
          headers: t.headers,
        }
      : { type: ne.data, data: s, statusCode: t.status, headers: t.headers };
  }
  if (n === ne.error) {
    if (Vc(t)) {
      var r;
      if (t.data instanceof Error) {
        var l;
        return {
          type: ne.error,
          error: t.data,
          statusCode: (l = t.init) == null ? void 0 : l.status,
        };
      }
      t = new vn(
        ((r = t.init) == null ? void 0 : r.status) || 500,
        void 0,
        t.data,
      );
    }
    return { type: ne.error, error: t, statusCode: Rr(t) ? t.status : void 0 };
  }
  if (Yy(t)) {
    var i, o;
    return {
      type: ne.deferred,
      deferredData: t,
      statusCode: (i = t.init) == null ? void 0 : i.status,
      headers:
        ((o = t.init) == null ? void 0 : o.headers) &&
        new Headers(t.init.headers),
    };
  }
  if (Vc(t)) {
    var a, u;
    return {
      type: ne.data,
      data: t.data,
      statusCode: (a = t.init) == null ? void 0 : a.status,
      headers:
        (u = t.init) != null && u.headers
          ? new Headers(t.init.headers)
          : void 0,
    };
  }
  return { type: ne.data, data: t };
}
function Hy(e, t, n, r, l, i) {
  let o = e.headers.get("Location");
  if (
    (V(
      o,
      "Redirects returned/thrown from loaders/actions must have a Location header",
    ),
    !Gu.test(o))
  ) {
    let a = r.slice(0, r.findIndex((u) => u.route.id === n) + 1);
    (o = Qa(new URL(t.url), a, l, !0, o, i)), e.headers.set("Location", o);
  }
  return e;
}
function Ic(e, t, n) {
  if (Gu.test(e)) {
    let r = e,
      l = r.startsWith("//") ? new URL(t.protocol + r) : new URL(r),
      i = xt(l.pathname, n) != null;
    if (l.origin === t.origin && i) return l.pathname + l.search + l.hash;
  }
  return e;
}
function Yn(e, t, n, r) {
  let l = e.createURL(Ch(t)).toString(),
    i = { signal: n };
  if (r && yt(r.formMethod)) {
    let { formMethod: o, formEncType: a } = r;
    (i.method = o.toUpperCase()),
      a === "application/json"
        ? ((i.headers = new Headers({ "Content-Type": a })),
          (i.body = JSON.stringify(r.json)))
        : a === "text/plain"
          ? (i.body = r.text)
          : a === "application/x-www-form-urlencoded" && r.formData
            ? (i.body = Ya(r.formData))
            : (i.body = r.formData);
  }
  return new Request(l, i);
}
function Ya(e) {
  let t = new URLSearchParams();
  for (let [n, r] of e.entries())
    t.append(n, typeof r == "string" ? r : r.name);
  return t;
}
function Uc(e) {
  let t = new FormData();
  for (let [n, r] of e.entries()) t.append(n, r);
  return t;
}
function Wy(e, t, n, r, l, i) {
  let o = {},
    a = null,
    u,
    s = !1,
    d = {},
    c = r && Ze(r[1]) ? r[1].error : void 0;
  return (
    n.forEach((h, x) => {
      let w = t[x].route.id;
      if (
        (V(!Tn(h), "Cannot handle redirect results in processLoaderData"),
        Ze(h))
      ) {
        let S = h.error;
        c !== void 0 && ((S = c), (c = void 0)), (a = a || {});
        {
          let L = or(e, w);
          a[L.route.id] == null && (a[L.route.id] = S);
        }
        (o[w] = void 0),
          s || ((s = !0), (u = Rr(h.error) ? h.error.status : 500)),
          h.headers && (d[w] = h.headers);
      } else
        Ln(h)
          ? (l.set(w, h.deferredData),
            (o[w] = h.deferredData.data),
            h.statusCode != null &&
              h.statusCode !== 200 &&
              !s &&
              (u = h.statusCode),
            h.headers && (d[w] = h.headers))
          : ((o[w] = h.data),
            h.statusCode && h.statusCode !== 200 && !s && (u = h.statusCode),
            h.headers && (d[w] = h.headers));
    }),
    c !== void 0 && r && ((a = { [r[0]]: c }), (o[r[0]] = void 0)),
    { loaderData: o, errors: a, statusCode: u || 200, loaderHeaders: d }
  );
}
function Ac(e, t, n, r, l, i, o, a) {
  let { loaderData: u, errors: s } = Wy(t, n, r, l, a);
  for (let d = 0; d < i.length; d++) {
    let { key: c, match: h, controller: x } = i[d];
    V(
      o !== void 0 && o[d] !== void 0,
      "Did not find corresponding fetcher result",
    );
    let w = o[d];
    if (!(x && x.signal.aborted))
      if (Ze(w)) {
        let S = or(e.matches, h == null ? void 0 : h.route.id);
        (s && s[S.route.id]) || (s = ce({}, s, { [S.route.id]: w.error })),
          e.fetchers.delete(c);
      } else if (Tn(w)) V(!1, "Unhandled fetcher revalidation redirect");
      else if (Ln(w)) V(!1, "Unhandled fetcher deferred data");
      else {
        let S = Zt(w.data);
        e.fetchers.set(c, S);
      }
  }
  return { loaderData: u, errors: s };
}
function $c(e, t, n, r) {
  let l = ce({}, t);
  for (let i of n) {
    let o = i.route.id;
    if (
      (t.hasOwnProperty(o)
        ? t[o] !== void 0 && (l[o] = t[o])
        : e[o] !== void 0 && i.route.loader && (l[o] = e[o]),
      r && r.hasOwnProperty(o))
    )
      break;
  }
  return l;
}
function Bc(e) {
  return e
    ? Ze(e[1])
      ? { actionData: {} }
      : { actionData: { [e[0]]: e[1].data } }
    : {};
}
function or(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e])
      .reverse()
      .find((r) => r.route.hasErrorBoundary === !0) || e[0]
  );
}
function Hc(e) {
  let t =
    e.length === 1
      ? e[0]
      : e.find((n) => n.index || !n.path || n.path === "/") || {
          id: "__shim-error-route__",
        };
  return {
    matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }],
    route: t,
  };
}
function Ae(e, t) {
  let {
      pathname: n,
      routeId: r,
      method: l,
      type: i,
      message: o,
    } = t === void 0 ? {} : t,
    a = "Unknown Server Error",
    u = "Unknown @remix-run/router error";
  return (
    e === 400
      ? ((a = "Bad Request"),
        i === "route-discovery"
          ? (u =
              'Unable to match URL "' +
              n +
              '" - the `unstable_patchRoutesOnMiss()` ' +
              (`function threw the following error:
` +
                o))
          : l && n && r
            ? (u =
                "You made a " +
                l +
                ' request to "' +
                n +
                '" but ' +
                ('did not provide a `loader` for route "' + r + '", ') +
                "so there is no way to handle the request.")
            : i === "defer-action"
              ? (u = "defer() is not supported in actions")
              : i === "invalid-body" &&
                (u = "Unable to encode submission body"))
      : e === 403
        ? ((a = "Forbidden"),
          (u = 'Route "' + r + '" does not match URL "' + n + '"'))
        : e === 404
          ? ((a = "Not Found"), (u = 'No route matches URL "' + n + '"'))
          : e === 405 &&
            ((a = "Method Not Allowed"),
            l && n && r
              ? (u =
                  "You made a " +
                  l.toUpperCase() +
                  ' request to "' +
                  n +
                  '" but ' +
                  ('did not provide an `action` for route "' + r + '", ') +
                  "so there is no way to handle the request.")
              : l && (u = 'Invalid request method "' + l.toUpperCase() + '"')),
    new vn(e || 500, a, new Error(u), !0)
  );
}
function Wc(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (Tn(n)) return { result: n, idx: t };
  }
}
function Ch(e) {
  let t = typeof e == "string" ? Kt(e) : e;
  return mn(ce({}, t, { hash: "" }));
}
function Vy(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search
    ? !1
    : e.hash === ""
      ? t.hash !== ""
      : e.hash === t.hash
        ? !0
        : t.hash !== "";
}
function Ky(e) {
  return typeof e == "object" && e != null && "then" in e;
}
function Qy(e) {
  return Ph(e.result) && Ty.has(e.result.status);
}
function Ln(e) {
  return e.type === ne.deferred;
}
function Ze(e) {
  return e.type === ne.error;
}
function Tn(e) {
  return (e && e.type) === ne.redirect;
}
function Vc(e) {
  return (
    typeof e == "object" &&
    e != null &&
    "type" in e &&
    "data" in e &&
    "init" in e &&
    e.type === "DataWithResponseInit"
  );
}
function Yy(e) {
  let t = e;
  return (
    t &&
    typeof t == "object" &&
    typeof t.data == "object" &&
    typeof t.subscribe == "function" &&
    typeof t.cancel == "function" &&
    typeof t.resolveData == "function"
  );
}
function Ph(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.headers == "object" &&
    typeof e.body < "u"
  );
}
function Xy(e) {
  return Ly.has(e.toLowerCase());
}
function yt(e) {
  return Cy.has(e.toLowerCase());
}
async function Kc(e, t, n, r, l, i) {
  for (let o = 0; o < n.length; o++) {
    let a = n[o],
      u = t[o];
    if (!u) continue;
    let s = e.find((c) => c.route.id === u.route.id),
      d = s != null && !kh(s, u) && (i && i[u.route.id]) !== void 0;
    if (Ln(a) && (l || d)) {
      let c = r[o];
      V(c, "Expected an AbortSignal for revalidating fetcher deferred result"),
        await Lh(a, c, l).then((h) => {
          h && (n[o] = h || n[o]);
        });
    }
  }
}
async function Lh(e, t, n) {
  if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
    if (n)
      try {
        return { type: ne.data, data: e.deferredData.unwrappedData };
      } catch (l) {
        return { type: ne.error, error: l };
      }
    return { type: ne.data, data: e.deferredData.data };
  }
}
function Zu(e) {
  return new URLSearchParams(e).getAll("index").some((t) => t === "");
}
function Qr(e, t) {
  let n = typeof t == "string" ? Kt(t).search : t.search;
  if (e[e.length - 1].route.index && Zu(n || "")) return e[e.length - 1];
  let r = Sh(e);
  return r[r.length - 1];
}
function Qc(e) {
  let {
    formMethod: t,
    formAction: n,
    formEncType: r,
    text: l,
    formData: i,
    json: o,
  } = e;
  if (!(!t || !n || !r)) {
    if (l != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: void 0,
        text: l,
      };
    if (i != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: i,
        json: void 0,
        text: void 0,
      };
    if (o !== void 0)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: o,
        text: void 0,
      };
  }
}
function Xo(e, t) {
  return t
    ? {
        state: "loading",
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text,
      }
    : {
        state: "loading",
        location: e,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function Jy(e, t) {
  return {
    state: "submitting",
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text,
  };
}
function Ar(e, t) {
  return e
    ? {
        state: "loading",
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t,
      }
    : {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t,
      };
}
function Gy(e, t) {
  return {
    state: "submitting",
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t ? t.data : void 0,
  };
}
function Zt(e) {
  return {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: e,
  };
}
function Zy(e, t) {
  try {
    let n = e.sessionStorage.getItem(_h);
    if (n) {
      let r = JSON.parse(n);
      for (let [l, i] of Object.entries(r || {}))
        i && Array.isArray(i) && t.set(l, new Set(i || []));
    }
  } catch {}
}
function by(e, t) {
  if (t.size > 0) {
    let n = {};
    for (let [r, l] of t) n[r] = [...l];
    try {
      e.sessionStorage.setItem(_h, JSON.stringify(n));
    } catch (r) {
      Sr(
        !1,
        "Failed to save applied view transitions in sessionStorage (" +
          r +
          ").",
      );
    }
  }
}
/**
 * React Router v6.26.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Qi() {
  return (
    (Qi = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Qi.apply(this, arguments)
  );
}
const Cr = y.createContext(null),
  fo = y.createContext(null),
  Yi = y.createContext(null),
  Mt = y.createContext(null),
  bu = y.createContext(null),
  En = y.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Th = y.createContext(null);
function qu(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  Pl() || V(!1);
  let { basename: r, navigator: l } = y.useContext(Mt),
    { hash: i, pathname: o, search: a } = Ll(e, { relative: n }),
    u = o;
  return (
    r !== "/" && (u = o === "/" ? r : Nt([r, o])),
    l.createHref({ pathname: u, search: a, hash: i })
  );
}
function Pl() {
  return y.useContext(bu) != null;
}
function $n() {
  return Pl() || V(!1), y.useContext(bu).location;
}
function Dh(e) {
  y.useContext(Mt).static || y.useLayoutEffect(e);
}
function qy() {
  let { isDataRoute: e } = y.useContext(En);
  return e ? hg() : eg();
}
function eg() {
  Pl() || V(!1);
  let e = y.useContext(Cr),
    { basename: t, future: n, navigator: r } = y.useContext(Mt),
    { matches: l } = y.useContext(En),
    { pathname: i } = $n(),
    o = JSON.stringify(Xu(l, n.v7_relativeSplatPath)),
    a = y.useRef(!1);
  return (
    Dh(() => {
      a.current = !0;
    }),
    y.useCallback(
      function (s, d) {
        if ((d === void 0 && (d = {}), !a.current)) return;
        if (typeof s == "number") {
          r.go(s);
          return;
        }
        let c = Ju(s, JSON.parse(o), i, d.relative === "path");
        e == null &&
          t !== "/" &&
          (c.pathname = c.pathname === "/" ? t : Nt([t, c.pathname])),
          (d.replace ? r.replace : r.push)(c, d.state, d);
      },
      [t, r, o, i, e],
    )
  );
}
function Ll(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = y.useContext(Mt),
    { matches: l } = y.useContext(En),
    { pathname: i } = $n(),
    o = JSON.stringify(Xu(l, r.v7_relativeSplatPath));
  return y.useMemo(() => Ju(e, JSON.parse(o), i, n === "path"), [e, o, i, n]);
}
function tg(e, t, n, r) {
  Pl() || V(!1);
  let { navigator: l } = y.useContext(Mt),
    { matches: i } = y.useContext(En),
    o = i[i.length - 1],
    a = o ? o.params : {};
  o && o.pathname;
  let u = o ? o.pathnameBase : "/";
  o && o.route;
  let s = $n(),
    d;
  d = s;
  let c = d.pathname || "/",
    h = c;
  if (u !== "/") {
    let S = u.replace(/^\//, "").split("/");
    h = "/" + c.replace(/^\//, "").split("/").slice(S.length).join("/");
  }
  let x = Lt(e, { pathname: h });
  return og(
    x &&
      x.map((S) =>
        Object.assign({}, S, {
          params: Object.assign({}, a, S.params),
          pathname: Nt([
            u,
            l.encodeLocation
              ? l.encodeLocation(S.pathname).pathname
              : S.pathname,
          ]),
          pathnameBase:
            S.pathnameBase === "/"
              ? u
              : Nt([
                  u,
                  l.encodeLocation
                    ? l.encodeLocation(S.pathnameBase).pathname
                    : S.pathnameBase,
                ]),
        }),
      ),
    i,
    n,
    r,
  );
}
function ng() {
  let e = Mh(),
    t = Rr(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
        ? e.message
        : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    l = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return y.createElement(
    y.Fragment,
    null,
    y.createElement("h2", null, "Unexpected Application Error!"),
    y.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? y.createElement("pre", { style: l }, n) : null,
    null,
  );
}
const rg = y.createElement(ng, null);
class lg extends y.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n,
    );
  }
  render() {
    return this.state.error !== void 0
      ? y.createElement(
          En.Provider,
          { value: this.props.routeContext },
          y.createElement(Th.Provider, {
            value: this.state.error,
            children: this.props.component,
          }),
        )
      : this.props.children;
  }
}
function ig(e) {
  let { routeContext: t, match: n, children: r } = e,
    l = y.useContext(Cr);
  return (
    l &&
      l.static &&
      l.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (l.staticContext._deepestRenderedBoundaryId = n.route.id),
    y.createElement(En.Provider, { value: t }, r)
  );
}
function og(e, t, n, r) {
  var l;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var i;
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (
      (i = r) != null &&
      i.v7_partialHydration &&
      t.length === 0 &&
      !n.initialized &&
      n.matches.length > 0
    )
      e = n.matches;
    else return null;
  }
  let o = e,
    a = (l = n) == null ? void 0 : l.errors;
  if (a != null) {
    let d = o.findIndex(
      (c) => c.route.id && (a == null ? void 0 : a[c.route.id]) !== void 0,
    );
    d >= 0 || V(!1), (o = o.slice(0, Math.min(o.length, d + 1)));
  }
  let u = !1,
    s = -1;
  if (n && r && r.v7_partialHydration)
    for (let d = 0; d < o.length; d++) {
      let c = o[d];
      if (
        ((c.route.HydrateFallback || c.route.hydrateFallbackElement) && (s = d),
        c.route.id)
      ) {
        let { loaderData: h, errors: x } = n,
          w =
            c.route.loader &&
            h[c.route.id] === void 0 &&
            (!x || x[c.route.id] === void 0);
        if (c.route.lazy || w) {
          (u = !0), s >= 0 ? (o = o.slice(0, s + 1)) : (o = [o[0]]);
          break;
        }
      }
    }
  return o.reduceRight((d, c, h) => {
    let x,
      w = !1,
      S = null,
      L = null;
    n &&
      ((x = a && c.route.id ? a[c.route.id] : void 0),
      (S = c.route.errorElement || rg),
      u &&
        (s < 0 && h === 0
          ? ((w = !0), (L = null))
          : s === h &&
            ((w = !0), (L = c.route.hydrateFallbackElement || null))));
    let m = t.concat(o.slice(0, h + 1)),
      f = () => {
        let p;
        return (
          x
            ? (p = S)
            : w
              ? (p = L)
              : c.route.Component
                ? (p = y.createElement(c.route.Component, null))
                : c.route.element
                  ? (p = c.route.element)
                  : (p = d),
          y.createElement(ig, {
            match: c,
            routeContext: { outlet: d, matches: m, isDataRoute: n != null },
            children: p,
          })
        );
      };
    return n && (c.route.ErrorBoundary || c.route.errorElement || h === 0)
      ? y.createElement(lg, {
          location: n.location,
          revalidation: n.revalidation,
          component: S,
          error: x,
          children: f(),
          routeContext: { outlet: null, matches: m, isDataRoute: !0 },
        })
      : f();
  }, null);
}
var Nh = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(Nh || {}),
  El = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(El || {});
function ag(e) {
  let t = y.useContext(Cr);
  return t || V(!1), t;
}
function ug(e) {
  let t = y.useContext(fo);
  return t || V(!1), t;
}
function sg(e) {
  let t = y.useContext(En);
  return t || V(!1), t;
}
function es(e) {
  let t = sg(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || V(!1), n.route.id;
}
function cg() {
  return es(El.UseRouteId);
}
function Mh() {
  var e;
  let t = y.useContext(Th),
    n = ug(El.UseRouteError),
    r = es(El.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function dg() {
  let e = y.useContext(Yi);
  return e == null ? void 0 : e._data;
}
function fg() {
  let e = y.useContext(Yi);
  return e == null ? void 0 : e._error;
}
function hg() {
  let { router: e } = ag(Nh.UseNavigateStable),
    t = es(El.UseNavigateStable),
    n = y.useRef(!1);
  return (
    Dh(() => {
      n.current = !0;
    }),
    y.useCallback(
      function (l, i) {
        i === void 0 && (i = {}),
          n.current &&
            (typeof l == "number"
              ? e.navigate(l)
              : e.navigate(l, Qi({ fromRouteId: t }, i)));
      },
      [e, t],
    )
  );
}
function pg(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: l = Se.Pop,
    navigator: i,
    static: o = !1,
    future: a,
  } = e;
  Pl() && V(!1);
  let u = t.replace(/^\/*/, "/"),
    s = y.useMemo(
      () => ({
        basename: u,
        navigator: i,
        static: o,
        future: Qi({ v7_relativeSplatPath: !1 }, a),
      }),
      [u, a, i, o],
    );
  typeof r == "string" && (r = Kt(r));
  let {
      pathname: d = "/",
      search: c = "",
      hash: h = "",
      state: x = null,
      key: w = "default",
    } = r,
    S = y.useMemo(() => {
      let L = xt(d, u);
      return L == null
        ? null
        : {
            location: { pathname: L, search: c, hash: h, state: x, key: w },
            navigationType: l,
          };
    }, [u, d, c, h, x, w, l]);
  return S == null
    ? null
    : y.createElement(
        Mt.Provider,
        { value: s },
        y.createElement(bu.Provider, { children: n, value: S }),
      );
}
function mg(e) {
  let { children: t, errorElement: n, resolve: r } = e;
  return y.createElement(
    yg,
    { resolve: r, errorElement: n },
    y.createElement(gg, null, t),
  );
}
var it = (function (e) {
  return (
    (e[(e.pending = 0)] = "pending"),
    (e[(e.success = 1)] = "success"),
    (e[(e.error = 2)] = "error"),
    e
  );
})(it || {});
const vg = new Promise(() => {});
class yg extends y.Component {
  constructor(t) {
    super(t), (this.state = { error: null });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  componentDidCatch(t, n) {
    console.error("<Await> caught the following error during render", t, n);
  }
  render() {
    let { children: t, errorElement: n, resolve: r } = this.props,
      l = null,
      i = it.pending;
    if (!(r instanceof Promise))
      (i = it.success),
        (l = Promise.resolve()),
        Object.defineProperty(l, "_tracked", { get: () => !0 }),
        Object.defineProperty(l, "_data", { get: () => r });
    else if (this.state.error) {
      i = it.error;
      let o = this.state.error;
      (l = Promise.reject().catch(() => {})),
        Object.defineProperty(l, "_tracked", { get: () => !0 }),
        Object.defineProperty(l, "_error", { get: () => o });
    } else
      r._tracked
        ? ((l = r),
          (i =
            "_error" in l ? it.error : "_data" in l ? it.success : it.pending))
        : ((i = it.pending),
          Object.defineProperty(r, "_tracked", { get: () => !0 }),
          (l = r.then(
            (o) => Object.defineProperty(r, "_data", { get: () => o }),
            (o) => Object.defineProperty(r, "_error", { get: () => o }),
          )));
    if (i === it.error && l._error instanceof Ki) throw vg;
    if (i === it.error && !n) throw l._error;
    if (i === it.error)
      return y.createElement(Yi.Provider, { value: l, children: n });
    if (i === it.success)
      return y.createElement(Yi.Provider, { value: l, children: t });
    throw l;
  }
}
function gg(e) {
  let { children: t } = e,
    n = dg(),
    r = typeof t == "function" ? t(n) : t;
  return y.createElement(y.Fragment, null, r);
}
function wg(e) {
  let t = {
    hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null,
  };
  return (
    e.Component &&
      Object.assign(t, {
        element: y.createElement(e.Component),
        Component: void 0,
      }),
    e.HydrateFallback &&
      Object.assign(t, {
        hydrateFallbackElement: y.createElement(e.HydrateFallback),
        HydrateFallback: void 0,
      }),
    e.ErrorBoundary &&
      Object.assign(t, {
        errorElement: y.createElement(e.ErrorBoundary),
        ErrorBoundary: void 0,
      }),
    t
  );
}
/**
 * React Router DOM v6.26.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Er() {
  return (
    (Er = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Er.apply(this, arguments)
  );
}
function ts(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    l,
    i;
  for (i = 0; i < r.length; i++)
    (l = r[i]), !(t.indexOf(l) >= 0) && (n[l] = e[l]);
  return n;
}
const gi = "get",
  Jo = "application/x-www-form-urlencoded";
function ho(e) {
  return e != null && typeof e.tagName == "string";
}
function Sg(e) {
  return ho(e) && e.tagName.toLowerCase() === "button";
}
function Eg(e) {
  return ho(e) && e.tagName.toLowerCase() === "form";
}
function xg(e) {
  return ho(e) && e.tagName.toLowerCase() === "input";
}
function _g(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function kg(e, t) {
  return e.button === 0 && (!t || t === "_self") && !_g(e);
}
let ti = null;
function Rg() {
  if (ti === null)
    try {
      new FormData(document.createElement("form"), 0), (ti = !1);
    } catch {
      ti = !0;
    }
  return ti;
}
const Cg = new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain",
]);
function Go(e) {
  return e != null && !Cg.has(e) ? null : e;
}
function Pg(e, t) {
  let n, r, l, i, o;
  if (Eg(e)) {
    let a = e.getAttribute("action");
    (r = a ? xt(a, t) : null),
      (n = e.getAttribute("method") || gi),
      (l = Go(e.getAttribute("enctype")) || Jo),
      (i = new FormData(e));
  } else if (Sg(e) || (xg(e) && (e.type === "submit" || e.type === "image"))) {
    let a = e.form;
    if (a == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>',
      );
    let u = e.getAttribute("formaction") || a.getAttribute("action");
    if (
      ((r = u ? xt(u, t) : null),
      (n = e.getAttribute("formmethod") || a.getAttribute("method") || gi),
      (l =
        Go(e.getAttribute("formenctype")) ||
        Go(a.getAttribute("enctype")) ||
        Jo),
      (i = new FormData(a, e)),
      !Rg())
    ) {
      let { name: s, type: d, value: c } = e;
      if (d === "image") {
        let h = s ? s + "." : "";
        i.append(h + "x", "0"), i.append(h + "y", "0");
      } else s && i.append(s, c);
    }
  } else {
    if (ho(e))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">',
      );
    (n = gi), (r = null), (l = Jo), (o = e);
  }
  return (
    i && l === "text/plain" && ((o = i), (i = void 0)),
    { action: r, method: n.toLowerCase(), encType: l, formData: i, body: o }
  );
}
const Lg = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "unstable_viewTransition",
  ],
  Tg = [
    "aria-current",
    "caseSensitive",
    "className",
    "end",
    "style",
    "to",
    "unstable_viewTransition",
    "children",
  ],
  Dg = [
    "fetcherKey",
    "navigate",
    "reloadDocument",
    "replace",
    "state",
    "method",
    "action",
    "onSubmit",
    "relative",
    "preventScrollReset",
    "unstable_viewTransition",
  ],
  Ng = "6";
try {
  window.__reactRouterVersion = Ng;
} catch {}
const Oh = y.createContext({ isTransitioning: !1 }),
  Mg = y.createContext(new Map()),
  Og = "startTransition",
  Yc = Ap[Og],
  zg = "flushSync",
  Xc = Zv[zg];
function Fg(e) {
  Yc ? Yc(e) : e();
}
function $r(e) {
  Xc ? Xc(e) : e();
}
let jg = class {
  constructor() {
    (this.status = "pending"),
      (this.promise = new Promise((t, n) => {
        (this.resolve = (r) => {
          this.status === "pending" && ((this.status = "resolved"), t(r));
        }),
          (this.reject = (r) => {
            this.status === "pending" && ((this.status = "rejected"), n(r));
          });
      }));
  }
};
function Ig(e) {
  let { fallbackElement: t, router: n, future: r } = e,
    [l, i] = y.useState(n.state),
    [o, a] = y.useState(),
    [u, s] = y.useState({ isTransitioning: !1 }),
    [d, c] = y.useState(),
    [h, x] = y.useState(),
    [w, S] = y.useState(),
    L = y.useRef(new Map()),
    { v7_startTransition: m } = r || {},
    f = y.useCallback(
      (C) => {
        m ? Fg(C) : C();
      },
      [m],
    ),
    p = y.useCallback(
      (C, M) => {
        let {
          deletedFetchers: O,
          unstable_flushSync: W,
          unstable_viewTransitionOpts: X,
        } = M;
        O.forEach((ee) => L.current.delete(ee)),
          C.fetchers.forEach((ee, xe) => {
            ee.data !== void 0 && L.current.set(xe, ee.data);
          });
        let ge =
          n.window == null ||
          n.window.document == null ||
          typeof n.window.document.startViewTransition != "function";
        if (!X || ge) {
          W ? $r(() => i(C)) : f(() => i(C));
          return;
        }
        if (W) {
          $r(() => {
            h && (d && d.resolve(), h.skipTransition()),
              s({
                isTransitioning: !0,
                flushSync: !0,
                currentLocation: X.currentLocation,
                nextLocation: X.nextLocation,
              });
          });
          let ee = n.window.document.startViewTransition(() => {
            $r(() => i(C));
          });
          ee.finished.finally(() => {
            $r(() => {
              c(void 0), x(void 0), a(void 0), s({ isTransitioning: !1 });
            });
          }),
            $r(() => x(ee));
          return;
        }
        h
          ? (d && d.resolve(),
            h.skipTransition(),
            S({
              state: C,
              currentLocation: X.currentLocation,
              nextLocation: X.nextLocation,
            }))
          : (a(C),
            s({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: X.currentLocation,
              nextLocation: X.nextLocation,
            }));
      },
      [n.window, h, d, L, f],
    );
  y.useLayoutEffect(() => n.subscribe(p), [n, p]),
    y.useEffect(() => {
      u.isTransitioning && !u.flushSync && c(new jg());
    }, [u]),
    y.useEffect(() => {
      if (d && o && n.window) {
        let C = o,
          M = d.promise,
          O = n.window.document.startViewTransition(async () => {
            f(() => i(C)), await M;
          });
        O.finished.finally(() => {
          c(void 0), x(void 0), a(void 0), s({ isTransitioning: !1 });
        }),
          x(O);
      }
    }, [f, o, d, n.window]),
    y.useEffect(() => {
      d && o && l.location.key === o.location.key && d.resolve();
    }, [d, h, l.location, o]),
    y.useEffect(() => {
      !u.isTransitioning &&
        w &&
        (a(w.state),
        s({
          isTransitioning: !0,
          flushSync: !1,
          currentLocation: w.currentLocation,
          nextLocation: w.nextLocation,
        }),
        S(void 0));
    }, [u.isTransitioning, w]),
    y.useEffect(() => {}, []);
  let _ = y.useMemo(
      () => ({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: (C) => n.navigate(C),
        push: (C, M, O) =>
          n.navigate(C, {
            state: M,
            preventScrollReset: O == null ? void 0 : O.preventScrollReset,
          }),
        replace: (C, M, O) =>
          n.navigate(C, {
            replace: !0,
            state: M,
            preventScrollReset: O == null ? void 0 : O.preventScrollReset,
          }),
      }),
      [n],
    ),
    P = n.basename || "/",
    v = y.useMemo(
      () => ({ router: n, navigator: _, static: !1, basename: P }),
      [n, _, P],
    ),
    T = y.useMemo(
      () => ({ v7_relativeSplatPath: n.future.v7_relativeSplatPath }),
      [n.future.v7_relativeSplatPath],
    );
  return y.createElement(
    y.Fragment,
    null,
    y.createElement(
      Cr.Provider,
      { value: v },
      y.createElement(
        fo.Provider,
        { value: l },
        y.createElement(
          Mg.Provider,
          { value: L.current },
          y.createElement(
            Oh.Provider,
            { value: u },
            y.createElement(
              pg,
              {
                basename: P,
                location: l.location,
                navigationType: l.historyAction,
                navigator: _,
                future: T,
              },
              l.initialized || n.future.v7_partialHydration
                ? y.createElement(Ug, {
                    routes: n.routes,
                    future: n.future,
                    state: l,
                  })
                : t,
            ),
          ),
        ),
      ),
    ),
    null,
  );
}
const Ug = y.memo(Ag);
function Ag(e) {
  let { routes: t, future: n, state: r } = e;
  return tg(t, void 0, r, n);
}
const $g =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Bg = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  zh = y.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: l,
        reloadDocument: i,
        replace: o,
        state: a,
        target: u,
        to: s,
        preventScrollReset: d,
        unstable_viewTransition: c,
      } = t,
      h = ts(t, Lg),
      { basename: x } = y.useContext(Mt),
      w,
      S = !1;
    if (typeof s == "string" && Bg.test(s) && ((w = s), $g))
      try {
        let p = new URL(window.location.href),
          _ = s.startsWith("//") ? new URL(p.protocol + s) : new URL(s),
          P = xt(_.pathname, x);
        _.origin === p.origin && P != null
          ? (s = P + _.search + _.hash)
          : (S = !0);
      } catch {}
    let L = qu(s, { relative: l }),
      m = Vg(s, {
        replace: o,
        state: a,
        target: u,
        preventScrollReset: d,
        relative: l,
        unstable_viewTransition: c,
      });
    function f(p) {
      r && r(p), p.defaultPrevented || m(p);
    }
    return y.createElement(
      "a",
      Er({}, h, { href: w || L, onClick: S || i ? r : f, ref: n, target: u }),
    );
  }),
  Hg = y.forwardRef(function (t, n) {
    let {
        "aria-current": r = "page",
        caseSensitive: l = !1,
        className: i = "",
        end: o = !1,
        style: a,
        to: u,
        unstable_viewTransition: s,
        children: d,
      } = t,
      c = ts(t, Tg),
      h = Ll(u, { relative: c.relative }),
      x = $n(),
      w = y.useContext(fo),
      { navigator: S, basename: L } = y.useContext(Mt),
      m = w != null && Gg(h) && s === !0,
      f = S.encodeLocation ? S.encodeLocation(h).pathname : h.pathname,
      p = x.pathname,
      _ =
        w && w.navigation && w.navigation.location
          ? w.navigation.location.pathname
          : null;
    l ||
      ((p = p.toLowerCase()),
      (_ = _ ? _.toLowerCase() : null),
      (f = f.toLowerCase())),
      _ && L && (_ = xt(_, L) || _);
    const P = f !== "/" && f.endsWith("/") ? f.length - 1 : f.length;
    let v = p === f || (!o && p.startsWith(f) && p.charAt(P) === "/"),
      T =
        _ != null &&
        (_ === f || (!o && _.startsWith(f) && _.charAt(f.length) === "/")),
      C = { isActive: v, isPending: T, isTransitioning: m },
      M = v ? r : void 0,
      O;
    typeof i == "function"
      ? (O = i(C))
      : (O = [
          i,
          v ? "active" : null,
          T ? "pending" : null,
          m ? "transitioning" : null,
        ]
          .filter(Boolean)
          .join(" "));
    let W = typeof a == "function" ? a(C) : a;
    return y.createElement(
      zh,
      Er({}, c, {
        "aria-current": M,
        className: O,
        ref: n,
        style: W,
        to: u,
        unstable_viewTransition: s,
      }),
      typeof d == "function" ? d(C) : d,
    );
  }),
  Wg = y.forwardRef((e, t) => {
    let {
        fetcherKey: n,
        navigate: r,
        reloadDocument: l,
        replace: i,
        state: o,
        method: a = gi,
        action: u,
        onSubmit: s,
        relative: d,
        preventScrollReset: c,
        unstable_viewTransition: h,
      } = e,
      x = ts(e, Dg),
      w = Xg(),
      S = Jg(u, { relative: d }),
      L = a.toLowerCase() === "get" ? "get" : "post",
      m = (f) => {
        if ((s && s(f), f.defaultPrevented)) return;
        f.preventDefault();
        let p = f.nativeEvent.submitter,
          _ = (p == null ? void 0 : p.getAttribute("formmethod")) || a;
        w(p || f.currentTarget, {
          fetcherKey: n,
          method: _,
          navigate: r,
          replace: i,
          state: o,
          relative: d,
          preventScrollReset: c,
          unstable_viewTransition: h,
        });
      };
    return y.createElement(
      "form",
      Er({ ref: t, method: L, action: S, onSubmit: l ? s : m }, x),
    );
  });
var Xi;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(Xi || (Xi = {}));
var Jc;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(Jc || (Jc = {}));
function Fh(e) {
  let t = y.useContext(Cr);
  return t || V(!1), t;
}
function Vg(e, t) {
  let {
      target: n,
      replace: r,
      state: l,
      preventScrollReset: i,
      relative: o,
      unstable_viewTransition: a,
    } = t === void 0 ? {} : t,
    u = qy(),
    s = $n(),
    d = Ll(e, { relative: o });
  return y.useCallback(
    (c) => {
      if (kg(c, n)) {
        c.preventDefault();
        let h = r !== void 0 ? r : mn(s) === mn(d);
        u(e, {
          replace: h,
          state: l,
          preventScrollReset: i,
          relative: o,
          unstable_viewTransition: a,
        });
      }
    },
    [s, u, d, r, l, n, e, i, o, a],
  );
}
function Kg() {
  if (typeof document > "u")
    throw new Error(
      "You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.",
    );
}
let Qg = 0,
  Yg = () => "__" + String(++Qg) + "__";
function Xg() {
  let { router: e } = Fh(Xi.UseSubmit),
    { basename: t } = y.useContext(Mt),
    n = cg();
  return y.useCallback(
    function (r, l) {
      l === void 0 && (l = {}), Kg();
      let { action: i, method: o, encType: a, formData: u, body: s } = Pg(r, t);
      if (l.navigate === !1) {
        let d = l.fetcherKey || Yg();
        e.fetch(d, n, l.action || i, {
          preventScrollReset: l.preventScrollReset,
          formData: u,
          body: s,
          formMethod: l.method || o,
          formEncType: l.encType || a,
          unstable_flushSync: l.unstable_flushSync,
        });
      } else
        e.navigate(l.action || i, {
          preventScrollReset: l.preventScrollReset,
          formData: u,
          body: s,
          formMethod: l.method || o,
          formEncType: l.encType || a,
          replace: l.replace,
          state: l.state,
          fromRouteId: n,
          unstable_flushSync: l.unstable_flushSync,
          unstable_viewTransition: l.unstable_viewTransition,
        });
    },
    [e, t, n],
  );
}
function Jg(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { basename: r } = y.useContext(Mt),
    l = y.useContext(En);
  l || V(!1);
  let [i] = l.matches.slice(-1),
    o = Er({}, Ll(e || ".", { relative: n })),
    a = $n();
  if (e == null) {
    o.search = a.search;
    let u = new URLSearchParams(o.search);
    u.has("index") &&
      u.get("index") === "" &&
      (u.delete("index"), (o.search = u.toString() ? "?" + u.toString() : ""));
  }
  return (
    (!e || e === ".") &&
      i.route.index &&
      (o.search = o.search ? o.search.replace(/^\?/, "?index&") : "?index"),
    r !== "/" && (o.pathname = o.pathname === "/" ? r : Nt([r, o.pathname])),
    mn(o)
  );
}
function Gg(e, t) {
  t === void 0 && (t = {});
  let n = y.useContext(Oh);
  n == null && V(!1);
  let { basename: r } = Fh(Xi.useViewTransitionState),
    l = Ll(e, { relative: t.relative });
  if (!n.isTransitioning) return !1;
  let i = xt(n.currentLocation.pathname, r) || n.currentLocation.pathname,
    o = xt(n.nextLocation.pathname, r) || n.nextLocation.pathname;
  return Vi(l.pathname, o) != null || Vi(l.pathname, i) != null;
}
var Zg = -1,
  bg = -2,
  qg = -3,
  e0 = -4,
  t0 = -5,
  n0 = -6,
  r0 = -7,
  l0 = "B",
  i0 = "D",
  jh = "E",
  o0 = "M",
  a0 = "N",
  Ih = "P",
  u0 = "R",
  s0 = "S",
  c0 = "Y",
  d0 = "U",
  f0 = "Z",
  Uh = class {
    constructor() {
      Il(this, "promise");
      Il(this, "resolve");
      Il(this, "reject");
      this.promise = new Promise((e, t) => {
        (this.resolve = e), (this.reject = t);
      });
    }
  };
function h0() {
  const e = new TextDecoder();
  let t = "";
  return new TransformStream({
    transform(n, r) {
      const l = e.decode(n, { stream: !0 }),
        i = (t + l).split(`
`);
      t = i.pop() || "";
      for (const o of i) r.enqueue(o);
    },
    flush(n) {
      t && n.enqueue(t);
    },
  });
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var Zo =
  typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : void 0;
function Xa(e) {
  const { hydrated: t, values: n } = this;
  if (typeof e == "number") return ot.call(this, e);
  if (!Array.isArray(e) || !e.length) throw new SyntaxError();
  const r = n.length;
  return n.push(...e), (t.length = n.length), ot.call(this, r);
}
function ot(e) {
  const { hydrated: t, values: n, deferred: r, plugins: l } = this;
  switch (e) {
    case r0:
      return;
    case t0:
      return null;
    case bg:
      return NaN;
    case n0:
      return 1 / 0;
    case qg:
      return -1 / 0;
    case e0:
      return -0;
  }
  if (t[e]) return t[e];
  const i = n[e];
  if (!i || typeof i != "object") return (t[e] = i);
  if (Array.isArray(i))
    if (typeof i[0] == "string") {
      const [o, a, u] = i;
      switch (o) {
        case i0:
          return (t[e] = new Date(a));
        case d0:
          return (t[e] = new URL(a));
        case l0:
          return (t[e] = BigInt(a));
        case u0:
          return (t[e] = new RegExp(a, u));
        case c0:
          return (t[e] = Symbol.for(a));
        case s0:
          const s = new Set();
          t[e] = s;
          for (let S = 1; S < i.length; S++) s.add(ot.call(this, i[S]));
          return s;
        case o0:
          const d = new Map();
          t[e] = d;
          for (let S = 1; S < i.length; S += 2)
            d.set(ot.call(this, i[S]), ot.call(this, i[S + 1]));
          return d;
        case a0:
          const c = Object.create(null);
          t[e] = c;
          for (const S in a) c[ot.call(this, Number(S))] = ot.call(this, a[S]);
          return c;
        case Ih:
          if (t[a]) return (t[e] = t[a]);
          {
            const S = new Uh();
            return (r[a] = S), (t[e] = S.promise);
          }
        case jh:
          const [, h, x] = i;
          let w = x && Zo && Zo[x] ? new Zo[x](h) : new Error(h);
          return (t[e] = w), w;
        case f0:
          return ot.call(this, a);
        default:
          if (Array.isArray(l)) {
            const S = i.slice(1).map((L) => ot.call(this, L));
            for (const L of l) {
              const m = L(i[0], ...S);
              if (m) return (t[e] = m.value);
            }
          }
          throw new SyntaxError();
      }
    } else {
      const o = [];
      t[e] = o;
      for (let a = 0; a < i.length; a++) {
        const u = i[a];
        u !== Zg && (o[a] = ot.call(this, u));
      }
      return o;
    }
  else {
    const o = {};
    t[e] = o;
    for (const a in i) o[ot.call(this, Number(a))] = ot.call(this, i[a]);
    return o;
  }
}
async function p0(e, t) {
  const { plugins: n } = t ?? {},
    r = new Uh(),
    l = e.pipeThrough(h0()).getReader(),
    i = { values: [], hydrated: [], deferred: {}, plugins: n },
    o = await m0.call(i, l);
  let a = r.promise;
  return (
    o.done
      ? r.resolve()
      : (a = v0
          .call(i, l)
          .then(r.resolve)
          .catch((u) => {
            for (const s of Object.values(i.deferred)) s.reject(u);
            r.reject(u);
          })),
    { done: a.then(() => l.closed), value: o.value }
  );
}
async function m0(e) {
  const t = await e.read();
  if (!t.value) throw new SyntaxError();
  let n;
  try {
    n = JSON.parse(t.value);
  } catch {
    throw new SyntaxError();
  }
  return { done: t.done, value: Xa.call(this, n) };
}
async function v0(e) {
  let t = await e.read();
  for (; !t.done; ) {
    if (!t.value) continue;
    const n = t.value;
    switch (n[0]) {
      case Ih: {
        const r = n.indexOf(":"),
          l = Number(n.slice(1, r)),
          i = this.deferred[l];
        if (!i) throw new Error(`Deferred ID ${l} not found in stream`);
        const o = n.slice(r + 1);
        let a;
        try {
          a = JSON.parse(o);
        } catch {
          throw new SyntaxError();
        }
        const u = Xa.call(this, a);
        i.resolve(u);
        break;
      }
      case jh: {
        const r = n.indexOf(":"),
          l = Number(n.slice(1, r)),
          i = this.deferred[l];
        if (!i) throw new Error(`Deferred ID ${l} not found in stream`);
        const o = n.slice(r + 1);
        let a;
        try {
          a = JSON.parse(o);
        } catch {
          throw new SyntaxError();
        }
        const u = Xa.call(this, a);
        i.reject(u);
        break;
      }
      default:
        throw new SyntaxError();
    }
    t = await e.read();
  }
}
/**
 * @remix-run/server-runtime v2.11.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ const Ah = Symbol("SingleFetchRedirect");
/**
 * @remix-run/react v2.11.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Fe() {
  return (
    (Fe = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Fe.apply(this, arguments)
  );
}
/**
 * @remix-run/react v2.11.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function yn(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
/**
 * @remix-run/react v2.11.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ async function $h(e, t) {
  if (e.id in t) return t[e.id];
  try {
    let n = await import(e.module);
    return (t[e.id] = n), n;
  } catch (n) {
    return (
      console.error(
        `Error loading route module \`${e.module}\`, reloading page...`,
      ),
      console.error(n),
      window.__remixContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
/**
 * @remix-run/react v2.11.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ async function Bh(e, t) {
  var n, r;
  if ((!e.css && !t.links) || !R0()) return;
  let l = [
    ((n = e.css) === null || n === void 0
      ? void 0
      : n.map((a) => ({ rel: "stylesheet", href: a }))) ?? [],
    ((r = t.links) === null || r === void 0 ? void 0 : r.call(t)) ?? [],
  ].flat(1);
  if (l.length === 0) return;
  let i = [];
  for (let a of l)
    !g0(a) &&
      a.rel === "stylesheet" &&
      i.push({ ...a, rel: "preload", as: "style" });
  let o = i.filter(
    (a) =>
      (!a.media || window.matchMedia(a.media).matches) &&
      !document.querySelector(`link[rel="stylesheet"][href="${a.href}"]`),
  );
  await Promise.all(o.map(y0));
}
async function y0(e) {
  return new Promise((t) => {
    let n = document.createElement("link");
    Object.assign(n, e);
    function r() {
      document.head.contains(n) && document.head.removeChild(n);
    }
    (n.onload = () => {
      r(), t();
    }),
      (n.onerror = () => {
        r(), t();
      }),
      document.head.appendChild(n);
  });
}
function g0(e) {
  return e != null && typeof e.page == "string";
}
function w0(e) {
  return e == null
    ? !1
    : e.href == null
      ? e.rel === "preload" &&
        typeof e.imageSrcSet == "string" &&
        typeof e.imageSizes == "string"
      : typeof e.rel == "string" && typeof e.href == "string";
}
async function S0(e, t, n) {
  let r = await Promise.all(
    e.map(async (l) => {
      let i = await $h(t.routes[l.route.id], n);
      return i.links ? i.links() : [];
    }),
  );
  return k0(
    r
      .flat(1)
      .filter(w0)
      .filter((l) => l.rel === "stylesheet" || l.rel === "preload")
      .map((l) =>
        l.rel === "stylesheet"
          ? { ...l, rel: "prefetch", as: "style" }
          : { ...l, rel: "prefetch" },
      ),
  );
}
function Gc(e, t, n, r, l, i) {
  let o = Wh(e),
    a = (d, c) => (n[c] ? d.route.id !== n[c].route.id : !0),
    u = (d, c) => {
      var h;
      return (
        n[c].pathname !== d.pathname ||
        (((h = n[c].route.path) === null || h === void 0
          ? void 0
          : h.endsWith("*")) &&
          n[c].params["*"] !== d.params["*"])
      );
    };
  return i === "data" && l.search !== o.search
    ? t.filter((d, c) => {
        if (!r.routes[d.route.id].hasLoader) return !1;
        if (a(d, c) || u(d, c)) return !0;
        if (d.route.shouldRevalidate) {
          var x;
          let w = d.route.shouldRevalidate({
            currentUrl: new URL(l.pathname + l.search + l.hash, window.origin),
            currentParams:
              ((x = n[0]) === null || x === void 0 ? void 0 : x.params) || {},
            nextUrl: new URL(e, window.origin),
            nextParams: d.params,
            defaultShouldRevalidate: !0,
          });
          if (typeof w == "boolean") return w;
        }
        return !0;
      })
    : t.filter((d, c) => {
        let h = r.routes[d.route.id];
        return (i === "assets" || h.hasLoader) && (a(d, c) || u(d, c));
      });
}
function E0(e, t, n) {
  let r = Wh(e);
  return Hh(
    t
      .filter(
        (l) =>
          n.routes[l.route.id].hasLoader &&
          !n.routes[l.route.id].hasClientLoader,
      )
      .map((l) => {
        let { pathname: i, search: o } = r,
          a = new URLSearchParams(o);
        return a.set("_data", l.route.id), `${i}?${a}`;
      }),
  );
}
function x0(e, t) {
  return Hh(
    e
      .map((n) => {
        let r = t.routes[n.route.id],
          l = [r.module];
        return r.imports && (l = l.concat(r.imports)), l;
      })
      .flat(1),
  );
}
function Hh(e) {
  return [...new Set(e)];
}
function _0(e) {
  let t = {},
    n = Object.keys(e).sort();
  for (let r of n) t[r] = e[r];
  return t;
}
function k0(e, t) {
  let n = new Set();
  return (
    new Set(t),
    e.reduce((r, l) => {
      let i = JSON.stringify(_0(l));
      return n.has(i) || (n.add(i), r.push({ key: i, link: l })), r;
    }, [])
  );
}
function Wh(e) {
  let t = Kt(e);
  return t.search === void 0 && (t.search = ""), t;
}
let ni;
function R0() {
  if (ni !== void 0) return ni;
  let e = document.createElement("link");
  return (ni = e.relList.supports("preload")), (e = null), ni;
}
/**
 * @remix-run/react v2.11.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ const C0 = {
    "&": "\\u0026",
    ">": "\\u003e",
    "<": "\\u003c",
    "\u2028": "\\u2028",
    "\u2029": "\\u2029",
  },
  P0 = /[&><\u2028\u2029]/g;
function ri(e) {
  return e.replace(P0, (t) => C0[t]);
}
function Zc(e) {
  return { __html: e };
}
/**
 * @remix-run/react v2.11.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function L0(e) {
  return e.headers.get("X-Remix-Catch") != null;
}
function T0(e) {
  return e.headers.get("X-Remix-Error") != null;
}
function D0(e) {
  return (
    ns(e) &&
    e.status >= 400 &&
    e.headers.get("X-Remix-Error") == null &&
    e.headers.get("X-Remix-Catch") == null &&
    e.headers.get("X-Remix-Response") == null
  );
}
function N0(e) {
  return e.headers.get("X-Remix-Redirect") != null;
}
function M0(e) {
  var t;
  return !!(
    (t = e.headers.get("Content-Type")) !== null &&
    t !== void 0 &&
    t.match(/text\/remix-deferred/)
  );
}
function ns(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.headers == "object" &&
    typeof e.body < "u"
  );
}
function O0(e) {
  let t = e;
  return (
    t &&
    typeof t == "object" &&
    typeof t.data == "object" &&
    typeof t.subscribe == "function" &&
    typeof t.cancel == "function" &&
    typeof t.resolveData == "function"
  );
}
async function Vh(e, t, n = 0) {
  let r = new URL(e.url);
  r.searchParams.set("_data", t),
    n > 0 && (await new Promise((a) => setTimeout(a, 5 ** n * 10)));
  let l = await rs(e),
    i = window.__remixRevalidation,
    o = await fetch(r.href, l).catch((a) => {
      if (
        typeof i == "number" &&
        i === window.__remixRevalidation &&
        (a == null ? void 0 : a.name) === "TypeError" &&
        n < 3
      )
        return Vh(e, t, n + 1);
      throw a;
    });
  if (T0(o)) {
    let a = await o.json(),
      u = new Error(a.message);
    return (u.stack = a.stack), u;
  }
  if (D0(o)) {
    let a = await o.text(),
      u = new Error(a);
    return (u.stack = void 0), u;
  }
  return o;
}
async function rs(e) {
  let t = { signal: e.signal };
  if (e.method !== "GET") {
    t.method = e.method;
    let n = e.headers.get("Content-Type");
    n && /\bapplication\/json\b/.test(n)
      ? ((t.headers = { "Content-Type": n }),
        (t.body = JSON.stringify(await e.json())))
      : n && /\btext\/plain\b/.test(n)
        ? ((t.headers = { "Content-Type": n }), (t.body = await e.text()))
        : n && /\bapplication\/x-www-form-urlencoded\b/.test(n)
          ? (t.body = new URLSearchParams(await e.text()))
          : (t.body = await e.formData());
  }
  return t;
}
const z0 = "__deferred_promise:";
async function F0(e) {
  if (!e)
    throw new Error("parseDeferredReadableStream requires stream argument");
  let t,
    n = {};
  try {
    let r = j0(e),
      i = (await r.next()).value;
    if (!i) throw new Error("no critical data");
    let o = JSON.parse(i);
    if (typeof o == "object" && o !== null)
      for (let [a, u] of Object.entries(o))
        typeof u != "string" ||
          !u.startsWith(z0) ||
          ((t = t || {}),
          (t[a] = new Promise((s, d) => {
            n[a] = {
              resolve: (c) => {
                s(c), delete n[a];
              },
              reject: (c) => {
                d(c), delete n[a];
              },
            };
          })));
    return (
      (async () => {
        try {
          for await (let a of r) {
            let [u, ...s] = a.split(":"),
              d = s.join(":"),
              c = JSON.parse(d);
            if (u === "data")
              for (let [h, x] of Object.entries(c)) n[h] && n[h].resolve(x);
            else if (u === "error")
              for (let [h, x] of Object.entries(c)) {
                let w = new Error(x.message);
                (w.stack = x.stack), n[h] && n[h].reject(w);
              }
          }
          for (let [a, u] of Object.entries(n))
            u.reject(new Ki(`Deferred ${a} will never be resolved`));
        } catch (a) {
          for (let u of Object.values(n)) u.reject(a);
        }
      })(),
      new _y({ ...o, ...t })
    );
  } catch (r) {
    for (let l of Object.values(n)) l.reject(r);
    throw r;
  }
}
async function* j0(e) {
  let t = e.getReader(),
    n = [],
    r = [],
    l = !1,
    i = new TextEncoder(),
    o = new TextDecoder(),
    a = async () => {
      if (r.length > 0) return r.shift();
      for (; !l && r.length === 0; ) {
        let s = await t.read();
        if (s.done) {
          l = !0;
          break;
        }
        n.push(s.value);
        try {
          let c = o.decode(bc(...n)).split(`

`);
          if (
            (c.length >= 2 &&
              (r.push(...c.slice(0, -1)),
              (n = [
                i.encode(
                  c.slice(-1).join(`

`),
                ),
              ])),
            r.length > 0)
          )
            break;
        } catch {
          continue;
        }
      }
      return (
        r.length > 0 ||
          (n.length > 0 &&
            ((r = o
              .decode(bc(...n))
              .split(
                `

`,
              )
              .filter((d) => d)),
            (n = []))),
        r.shift()
      );
    },
    u = await a();
  for (; u; ) yield u, (u = await a());
}
function bc(...e) {
  let t = new Uint8Array(e.reduce((r, l) => r + l.length, 0)),
    n = 0;
  for (let r of e) t.set(r, n), (n += r.length);
  return t;
}
/**
 * @remix-run/react v2.11.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function I0(e, t) {
  return async ({ request: n, matches: r }) =>
    n.method !== "GET" ? U0(n, r) : A0(e, t, n, r);
}
function U0(e, t) {
  return Promise.all(
    t.map(async (n) => {
      let r,
        l = await n.resolve(async (i) => ({
          type: "data",
          result: await i(async () => {
            let a = ls(e.url),
              u = await rs(e),
              { data: s, status: d } = await Ja(a, u);
            return (r = d), Ga(s, n.route.id);
          }),
        }));
      return ns(l.result) || Rr(l.result)
        ? l
        : { type: l.type, result: xy(l.result, r) };
    }),
  );
}
function A0(e, t, n, r) {
  let l;
  return Promise.all(
    r.map(async (i) =>
      i.resolve(async (o) => {
        let a,
          u = $0(ls(n.url)),
          s = await rs(n);
        return (
          e.routes[i.route.id].hasClientLoader
            ? (a = await o(async () => {
                u.searchParams.set("_routes", i.route.id);
                let { data: d } = await Ja(u, s);
                return qc(d, i.route.id);
              }))
            : (a = await o(async () => {
                l ||
                  ((u = Kh(
                    e,
                    t,
                    r.map((c) => c.route),
                    r.filter((c) => c.shouldLoad).map((c) => c.route),
                    u,
                  )),
                  (l = Ja(u, s).then(({ data: c }) => c)));
                let d = await l;
                return qc(d, i.route.id);
              })),
          { type: "data", result: a }
        );
      }),
    ),
  );
}
function $0(e) {
  let t = e.searchParams.getAll("index");
  e.searchParams.delete("index");
  let n = [];
  for (let r of t) r && n.push(r);
  for (let r of n) e.searchParams.append("index", r);
  return e;
}
function Kh(e, t, n, r, l) {
  let i = (s) => s.filter((d) => e.routes[d].hasLoader).join(",");
  if (
    !n.some((s) => {
      var d, c;
      return (
        ((d = t[s.id]) === null || d === void 0
          ? void 0
          : d.shouldRevalidate) ||
        ((c = e.routes[s.id]) === null || c === void 0
          ? void 0
          : c.hasClientLoader)
      );
    })
  )
    return l;
  let a = i(n.map((s) => s.id)),
    u = i(
      r
        .filter((s) => {
          var d;
          return !(
            (d = e.routes[s.id]) !== null &&
            d !== void 0 &&
            d.hasClientLoader
          );
        })
        .map((s) => s.id),
    );
  return a !== u && l.searchParams.set("_routes", u), l;
}
function ls(e) {
  let t = typeof e == "string" ? new URL(e, window.location.origin) : e;
  return (
    t.pathname === "/"
      ? (t.pathname = "_root.data")
      : (t.pathname = `${t.pathname.replace(/\/$/, "")}.data`),
    t
  );
}
async function Ja(e, t) {
  let n = await fetch(e, t);
  yn(n.body, "No response body to decode");
  try {
    let r = await Qh(n.body, window);
    return { status: n.status, data: r.value };
  } catch (r) {
    throw (
      (console.error(r),
      new Error(
        `Unable to decode turbo-stream response from URL: ${e.toString()}`,
      ))
    );
  }
}
function Qh(e, t) {
  return p0(e, {
    plugins: [
      (n, ...r) => {
        if (n === "SanitizedError") {
          let [l, i, o] = r,
            a = Error;
          l && l in t && typeof t[l] == "function" && (a = t[l]);
          let u = new a(i);
          return (u.stack = o), { value: u };
        }
        if (n === "ErrorResponse") {
          let [l, i, o] = r;
          return { value: new vn(i, o, l) };
        }
        if (n === "SingleFetchRedirect") return { value: { [Ah]: r[0] } };
      },
    ],
  });
}
function qc(e, t) {
  let n = e[Ah];
  return n ? Ga(n, t) : e[t] !== void 0 ? Ga(e[t], t) : null;
}
function Ga(e, t) {
  if ("error" in e) throw e.error;
  if ("redirect" in e) {
    let n = {};
    return (
      e.revalidate && (n["X-Remix-Revalidate"] = "yes"),
      e.reload && (n["X-Remix-Reload-Document"] = "yes"),
      e.replace && (n["X-Remix-Replace"] = "yes"),
      Eh(e.redirect, { status: e.status, headers: n })
    );
  } else {
    if ("data" in e) return e.data;
    throw new Error(`No response found for routeId "${t}"`);
  }
}
/**
 * @remix-run/react v2.11.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ class B0 extends y.Component {
  constructor(t) {
    super(t), (this.state = { error: t.error || null, location: t.location });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location
      ? { error: t.error || null, location: t.location }
      : { error: t.error || n.error, location: n.location };
  }
  render() {
    return this.state.error
      ? y.createElement(Yh, { error: this.state.error, isOutsideRemixApp: !0 })
      : this.props.children;
  }
}
function Yh({ error: e, isOutsideRemixApp: t }) {
  console.error(e);
  let n = y.createElement("script", {
    dangerouslySetInnerHTML: {
      __html: `
        console.log(
          "💿 Hey developer 👋. You can provide a way better UX than this when your app throws errors. Check out https://remix.run/guides/errors for more information."
        );
      `,
    },
  });
  if (Rr(e))
    return y.createElement(
      Za,
      { title: "Unhandled Thrown Response!" },
      y.createElement(
        "h1",
        { style: { fontSize: "24px" } },
        e.status,
        " ",
        e.statusText,
      ),
      n,
    );
  let r;
  if (e instanceof Error) r = e;
  else {
    let l =
      e == null
        ? "Unknown Error"
        : typeof e == "object" && "toString" in e
          ? e.toString()
          : JSON.stringify(e);
    r = new Error(l);
  }
  return y.createElement(
    Za,
    { title: "Application Error!", isOutsideRemixApp: t },
    y.createElement("h1", { style: { fontSize: "24px" } }, "Application Error"),
    y.createElement(
      "pre",
      {
        style: {
          padding: "2rem",
          background: "hsla(10, 50%, 50%, 0.1)",
          color: "red",
          overflow: "auto",
        },
      },
      r.stack,
    ),
    n,
  );
}
function Za({ title: e, renderScripts: t, isOutsideRemixApp: n, children: r }) {
  var l;
  let { routeModules: i } = mo();
  return (l = i.root) !== null && l !== void 0 && l.Layout && !n
    ? r
    : y.createElement(
        "html",
        { lang: "en" },
        y.createElement(
          "head",
          null,
          y.createElement("meta", { charSet: "utf-8" }),
          y.createElement("meta", {
            name: "viewport",
            content: "width=device-width,initial-scale=1,viewport-fit=cover",
          }),
          y.createElement("title", null, e),
        ),
        y.createElement(
          "body",
          null,
          y.createElement(
            "main",
            { style: { fontFamily: "system-ui, sans-serif", padding: "2rem" } },
            r,
            t ? y.createElement(uw, null) : null,
          ),
        ),
      );
}
/**
 * @remix-run/react v2.11.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function H0() {
  return y.createElement(
    Za,
    { title: "Loading...", renderScripts: !0 },
    y.createElement("script", {
      dangerouslySetInnerHTML: {
        __html: `
              console.log(
                "💿 Hey developer 👋. You can provide a way better UX than this " +
                "when your app is running \`clientLoader\` functions on hydration. " +
                "Check out https://remix.run/route/hydrate-fallback for more information."
              );
            `,
      },
    }),
  );
}
/**
 * @remix-run/react v2.11.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Xh(e) {
  let t = {};
  return (
    Object.values(e).forEach((n) => {
      let r = n.parentId || "";
      t[r] || (t[r] = []), t[r].push(n);
    }),
    t
  );
}
function W0(e, t, n) {
  let r = Jh(t),
    l =
      t.HydrateFallback && (!n || e.id === "root")
        ? t.HydrateFallback
        : e.id === "root"
          ? H0
          : void 0,
    i = t.ErrorBoundary
      ? t.ErrorBoundary
      : e.id === "root"
        ? () => y.createElement(Yh, { error: Mh() })
        : void 0;
  return e.id === "root" && t.Layout
    ? {
        ...(r
          ? {
              element: y.createElement(
                t.Layout,
                null,
                y.createElement(r, null),
              ),
            }
          : { Component: r }),
        ...(i
          ? {
              errorElement: y.createElement(
                t.Layout,
                null,
                y.createElement(i, null),
              ),
            }
          : { ErrorBoundary: i }),
        ...(l
          ? {
              hydrateFallbackElement: y.createElement(
                t.Layout,
                null,
                y.createElement(l, null),
              ),
            }
          : { HydrateFallback: l }),
      }
    : { Component: r, ErrorBoundary: i, HydrateFallback: l };
}
function V0(e, t, n, r, l, i) {
  return po(t, n, r, l, i, "", Xh(t), e);
}
function li(e, t, n) {
  if (n) {
    let o = `You cannot call ${e === "action" ? "serverAction()" : "serverLoader()"} in SPA Mode (routeId: "${t.id}")`;
    throw (console.error(o), new vn(400, "Bad Request", new Error(o), !0));
  }
  let l = `You are trying to call ${e === "action" ? "serverAction()" : "serverLoader()"} on a route that does not have a server ${e} (routeId: "${t.id}")`;
  if ((e === "loader" && !t.hasLoader) || (e === "action" && !t.hasAction))
    throw (console.error(l), new vn(400, "Bad Request", new Error(l), !0));
}
function bo(e, t) {
  let n = e === "clientAction" ? "a" : "an",
    r = `Route "${t}" does not have ${n} ${e}, but you are trying to submit to it. To fix this, please add ${n} \`${e}\` function to the route`;
  throw (console.error(r), new vn(405, "Method Not Allowed", new Error(r), !0));
}
function po(e, t, n, r, l, i = "", o = Xh(e), a) {
  return (o[i] || []).map((u) => {
    let s = t[u.id];
    async function d(p, _, P) {
      if (typeof P == "function") return await P();
      let v = await Q0(p, u);
      return _ ? Y0(v) : v;
    }
    function c(p, _, P) {
      return u.hasLoader ? d(p, _, P) : Promise.resolve(null);
    }
    function h(p, _, P) {
      if (!u.hasAction) throw bo("action", u.id);
      return d(p, _, P);
    }
    async function x(p) {
      let _ = t[u.id],
        P = _ ? Bh(u, _) : Promise.resolve();
      try {
        return p();
      } finally {
        await P;
      }
    }
    let w = { id: u.id, index: u.index, path: u.path };
    if (s) {
      var S, L, m;
      Object.assign(w, {
        ...w,
        ...W0(u, s, l),
        handle: s.handle,
        shouldRevalidate: a
          ? ed(u.id, s.shouldRevalidate, a)
          : s.shouldRevalidate,
      });
      let p =
          n == null || (S = n.loaderData) === null || S === void 0
            ? void 0
            : S[u.id],
        _ =
          n == null || (L = n.errors) === null || L === void 0
            ? void 0
            : L[u.id],
        P =
          a == null &&
          (((m = s.clientLoader) === null || m === void 0
            ? void 0
            : m.hydrate) === !0 ||
            !u.hasLoader);
      (w.loader = async ({ request: v, params: T }, C) => {
        try {
          return await x(
            async () => (
              yn(s, "No `routeModule` available for critical-route loader"),
              s.clientLoader
                ? s.clientLoader({
                    request: v,
                    params: T,
                    async serverLoader() {
                      if ((li("loader", u, l), P)) {
                        if (_ !== void 0) throw _;
                        return p;
                      }
                      return c(v, !0, C);
                    },
                  })
                : l
                  ? null
                  : c(v, !1, C)
            ),
          );
        } finally {
          P = !1;
        }
      }),
        (w.loader.hydrate = Gh(u, s, l)),
        (w.action = ({ request: v, params: T }, C) =>
          x(async () => {
            if (
              (yn(s, "No `routeModule` available for critical-route action"),
              !s.clientAction)
            ) {
              if (l) throw bo("clientAction", u.id);
              return h(v, !1, C);
            }
            return s.clientAction({
              request: v,
              params: T,
              async serverAction() {
                return li("action", u, l), h(v, !0, C);
              },
            });
          }));
    } else
      u.hasClientLoader ||
        (w.loader = ({ request: p }, _) =>
          x(() => (l ? Promise.resolve(null) : c(p, !1, _)))),
        u.hasClientAction ||
          (w.action = ({ request: p }, _) =>
            x(() => {
              if (l) throw bo("clientAction", u.id);
              return h(p, !1, _);
            })),
        (w.lazy = async () => {
          let p = await K0(u, t),
            _ = { ...p };
          if (p.clientLoader) {
            let P = p.clientLoader;
            _.loader = (v, T) =>
              P({
                ...v,
                async serverLoader() {
                  return li("loader", u, l), c(v.request, !0, T);
                },
              });
          }
          if (p.clientAction) {
            let P = p.clientAction;
            _.action = (v, T) =>
              P({
                ...v,
                async serverAction() {
                  return li("action", u, l), h(v.request, !0, T);
                },
              });
          }
          return (
            a && (_.shouldRevalidate = ed(u.id, p.shouldRevalidate, a)),
            {
              ...(_.loader ? { loader: _.loader } : {}),
              ...(_.action ? { action: _.action } : {}),
              hasErrorBoundary: _.hasErrorBoundary,
              shouldRevalidate: _.shouldRevalidate,
              handle: _.handle,
              Component: _.Component,
              ErrorBoundary: _.ErrorBoundary,
            }
          );
        });
    let f = po(e, t, n, r, l, u.id, o, a);
    return f.length > 0 && (w.children = f), w;
  });
}
function ed(e, t, n) {
  let r = !1;
  return (l) =>
    r ? (t ? t(l) : l.defaultShouldRevalidate) : ((r = !0), n.has(e));
}
async function K0(e, t) {
  let n = await $h(e, t);
  return (
    await Bh(e, n),
    {
      Component: Jh(n),
      ErrorBoundary: n.ErrorBoundary,
      clientAction: n.clientAction,
      clientLoader: n.clientLoader,
      handle: n.handle,
      links: n.links,
      meta: n.meta,
      shouldRevalidate: n.shouldRevalidate,
    }
  );
}
async function Q0(e, t) {
  let n = await Vh(e, t.id);
  if (n instanceof Error) throw n;
  if (N0(n)) throw X0(n);
  if (L0(n)) throw n;
  return M0(n) && n.body ? await F0(n.body) : n;
}
function Y0(e) {
  if (O0(e)) return e.data;
  if (ns(e)) {
    let t = e.headers.get("Content-Type");
    return t && /\bapplication\/json\b/.test(t) ? e.json() : e.text();
  }
  return e;
}
function X0(e) {
  let t = parseInt(e.headers.get("X-Remix-Status"), 10) || 302,
    n = e.headers.get("X-Remix-Redirect"),
    r = {},
    l = e.headers.get("X-Remix-Revalidate");
  l && (r["X-Remix-Revalidate"] = l);
  let i = e.headers.get("X-Remix-Reload-Document");
  i && (r["X-Remix-Reload-Document"] = i);
  let o = e.headers.get("X-Remix-Replace");
  return o && (r["X-Remix-Replace"] = o), Eh(n, { status: t, headers: r });
}
function Jh(e) {
  if (e.default == null) return;
  if (!(typeof e.default == "object" && Object.keys(e.default).length === 0))
    return e.default;
}
function Gh(e, t, n) {
  return (
    (n && e.id !== "root") ||
    (t.clientLoader != null &&
      (t.clientLoader.hydrate === !0 || e.hasLoader !== !0))
  );
}
/**
 * @remix-run/react v2.11.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ const J0 = 7680;
let Dn = null;
function is(e, t) {
  return e.unstable_lazyRouteDiscovery === !0 && !t;
}
function G0(e, t) {
  let n = new Set(t.state.matches.map((o) => o.route.id)),
    r = t.state.location.pathname.split("/").filter(Boolean),
    l = ["/"];
  for (r.pop(); r.length > 0; ) l.push(`/${r.join("/")}`), r.pop();
  l.forEach((o) => {
    let a = Lt(t.routes, o, t.basename);
    a && a.forEach((u) => n.add(u.route.id));
  });
  let i = [...n].reduce((o, a) => Object.assign(o, { [a]: e.routes[a] }), {});
  return { ...e, routes: i };
}
function Z0(e, t, n, r, l) {
  return is(n, r)
    ? ((Dn = {
        nextPaths: new Set(),
        knownGoodPaths: new Set(),
        known404Paths: new Set(),
      }),
      {
        enabled: !0,
        patchRoutesOnMiss: async ({ path: i, patch: o }) => {
          Dn.known404Paths.has(i) ||
            Dn.knownGoodPaths.has(i) ||
            (await Zh([i], Dn, e, t, n, r, l, o));
        },
      })
    : { enabled: !1 };
}
function b0(e, t, n, r, l) {
  y.useEffect(() => {
    var i;
    if (
      !is(r, l) ||
      ((i = navigator.connection) === null || i === void 0
        ? void 0
        : i.saveData) === !0
    )
      return;
    function o(c) {
      let h =
        c.tagName === "FORM"
          ? c.getAttribute("action")
          : c.getAttribute("href");
      if (!h) return;
      let x = new URL(h, window.location.origin),
        { knownGoodPaths: w, known404Paths: S, nextPaths: L } = Dn;
      w.has(x.pathname) || S.has(x.pathname) || L.add(x.pathname);
    }
    async function a() {
      let c = q0(Dn);
      if (c.length !== 0)
        try {
          await Zh(c, Dn, t, n, r, l, e.basename, e.patchRoutes);
        } catch (h) {
          console.error("Failed to fetch manifest patches", h);
        }
    }
    document.body
      .querySelectorAll("a[data-discover], form[data-discover]")
      .forEach((c) => o(c)),
      a();
    let u = ew(a, 100);
    function s(c) {
      return c.nodeType === Node.ELEMENT_NODE;
    }
    let d = new MutationObserver((c) => {
      let h = new Set();
      c.forEach((x) => {
        [x.target, ...x.addedNodes].forEach((w) => {
          s(w) &&
            (((w.tagName === "A" && w.getAttribute("data-discover")) ||
              (w.tagName === "FORM" && w.getAttribute("data-discover"))) &&
              h.add(w),
            w.tagName !== "A" &&
              w
                .querySelectorAll("a[data-discover], form[data-discover]")
                .forEach((S) => h.add(S)));
        });
      }),
        h.forEach((x) => o(x)),
        u();
    });
    return (
      d.observe(document.documentElement, {
        subtree: !0,
        childList: !0,
        attributes: !0,
        attributeFilter: ["data-discover", "href", "action"],
      }),
      () => d.disconnect()
    );
  }, [r, l, t, n, e]);
}
function q0(e, t) {
  let { knownGoodPaths: n, known404Paths: r, nextPaths: l } = e;
  return Array.from(l.keys()).filter((i) =>
    n.has(i) || r.has(i) ? (l.delete(i), !1) : !0,
  );
}
async function Zh(e, t, n, r, l, i, o, a) {
  let { nextPaths: u, knownGoodPaths: s, known404Paths: d } = t,
    c = `${o ?? "/"}/__manifest`.replace(/\/+/g, "/"),
    h = new URL(c, window.location.origin);
  if (
    (h.searchParams.set("version", n.version),
    e.forEach((f) => h.searchParams.append("p", f)),
    h.toString().length > J0)
  ) {
    u.clear();
    return;
  }
  let x = await fetch(h);
  if (x.ok) {
    if (x.status >= 400) throw new Error(await x.text());
  } else throw new Error(`${x.status} ${x.statusText}`);
  let w = await x.json(),
    S = new Set(Object.keys(n.routes)),
    L = Object.values(w.patches).reduce(
      (f, p) => (S.has(p.id) ? f : Object.assign(f, { [p.id]: p })),
      {},
    );
  Object.assign(n.routes, L),
    w.notFoundPaths.forEach((f) => d.add(f)),
    e.forEach((f) => s.add(f));
  let m = new Set();
  Object.values(L).forEach((f) => {
    (!f.parentId || !L[f.parentId]) && m.add(f.parentId);
  }),
    m.forEach((f) => a(f || null, po(L, r, null, l, i, f)));
}
function ew(e, t) {
  let n;
  return (...r) => {
    window.clearTimeout(n), (n = window.setTimeout(() => e(...r), t));
  };
}
function bh() {
  let e = y.useContext(Cr);
  return (
    yn(
      e,
      "You must render this element inside a <DataRouterContext.Provider> element",
    ),
    e
  );
}
function qh() {
  let e = y.useContext(fo);
  return (
    yn(
      e,
      "You must render this element inside a <DataRouterStateContext.Provider> element",
    ),
    e
  );
}
const os = y.createContext(void 0);
os.displayName = "Remix";
function mo() {
  let e = y.useContext(os);
  return yn(e, "You must render this element inside a <Remix> element"), e;
}
function ep(e, t) {
  let [n, r] = y.useState(!1),
    [l, i] = y.useState(!1),
    {
      onFocus: o,
      onBlur: a,
      onMouseEnter: u,
      onMouseLeave: s,
      onTouchStart: d,
    } = t,
    c = y.useRef(null);
  y.useEffect(() => {
    if ((e === "render" && i(!0), e === "viewport")) {
      let w = (L) => {
          L.forEach((m) => {
            i(m.isIntersecting);
          });
        },
        S = new IntersectionObserver(w, { threshold: 0.5 });
      return (
        c.current && S.observe(c.current),
        () => {
          S.disconnect();
        }
      );
    }
  }, [e]);
  let h = () => {
      e === "intent" && r(!0);
    },
    x = () => {
      e === "intent" && (r(!1), i(!1));
    };
  return (
    y.useEffect(() => {
      if (n) {
        let w = setTimeout(() => {
          i(!0);
        }, 100);
        return () => {
          clearTimeout(w);
        };
      }
    }, [n]),
    [
      l,
      c,
      {
        onFocus: Br(o, h),
        onBlur: Br(a, x),
        onMouseEnter: Br(u, h),
        onMouseLeave: Br(s, x),
        onTouchStart: Br(d, h),
      },
    ]
  );
}
const as = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
function us(e, t, n) {
  return e === "render" && !t && !n ? "true" : void 0;
}
let tw = y.forwardRef(
  ({ to: e, prefetch: t = "none", discover: n = "render", ...r }, l) => {
    let i = typeof e == "string" && as.test(e),
      o = qu(e),
      [a, u, s] = ep(t, r);
    return y.createElement(
      y.Fragment,
      null,
      y.createElement(
        Hg,
        Fe({}, r, s, {
          ref: np(l, u),
          to: e,
          "data-discover": us(n, i, r.reloadDocument),
        }),
      ),
      a && !i ? y.createElement(tp, { page: o }) : null,
    );
  },
);
tw.displayName = "NavLink";
let nw = y.forwardRef(
  ({ to: e, prefetch: t = "none", discover: n = "render", ...r }, l) => {
    let i = typeof e == "string" && as.test(e),
      o = qu(e),
      [a, u, s] = ep(t, r);
    return y.createElement(
      y.Fragment,
      null,
      y.createElement(
        zh,
        Fe({}, r, s, {
          ref: np(l, u),
          to: e,
          "data-discover": us(n, i, r.reloadDocument),
        }),
      ),
      a && !i ? y.createElement(tp, { page: o }) : null,
    );
  },
);
nw.displayName = "Link";
let rw = y.forwardRef(({ discover: e = "render", ...t }, n) => {
  let r = typeof t.action == "string" && as.test(t.action);
  return y.createElement(
    Wg,
    Fe({}, t, { ref: n, "data-discover": us(e, r, t.reloadDocument) }),
  );
});
rw.displayName = "Form";
function Br(e, t) {
  return (n) => {
    e && e(n), n.defaultPrevented || t(n);
  };
}
function lw(e, t, n) {
  return n && !wi ? [e[0]] : e;
}
function tp({ page: e, ...t }) {
  let { router: n } = bh(),
    r = y.useMemo(() => Lt(n.routes, e, n.basename), [n.routes, e, n.basename]);
  return r
    ? y.createElement(ow, Fe({ page: e, matches: r }, t))
    : (console.warn(`Tried to prefetch ${e} but no routes matched.`), null);
}
function iw(e) {
  let { manifest: t, routeModules: n } = mo(),
    [r, l] = y.useState([]);
  return (
    y.useEffect(() => {
      let i = !1;
      return (
        S0(e, t, n).then((o) => {
          i || l(o);
        }),
        () => {
          i = !0;
        }
      );
    }, [e, t, n]),
    r
  );
}
function ow({ page: e, matches: t, ...n }) {
  let r = $n(),
    { future: l, manifest: i, routeModules: o } = mo(),
    { matches: a } = qh(),
    u = y.useMemo(() => Gc(e, t, a, i, r, "data"), [e, t, a, i, r]),
    s = y.useMemo(() => Gc(e, t, a, i, r, "assets"), [e, t, a, i, r]),
    d = y.useMemo(() => E0(e, u, i), [u, e, i]),
    c = y.useMemo(() => x0(s, i), [s, i]),
    h = iw(s),
    x = null;
  if (!l.unstable_singleFetch)
    x = d.map((w) =>
      y.createElement(
        "link",
        Fe({ key: w, rel: "prefetch", as: "fetch", href: w }, n),
      ),
    );
  else if (u.length > 0) {
    let w = Kh(
      i,
      o,
      t.map((S) => S.route),
      u.map((S) => S.route),
      ls(e),
    );
    w.searchParams.get("_routes") !== "" &&
      (x = y.createElement(
        "link",
        Fe(
          {
            key: w.pathname + w.search,
            rel: "prefetch",
            as: "fetch",
            href: w.pathname + w.search,
          },
          n,
        ),
      ));
  }
  return y.createElement(
    y.Fragment,
    null,
    x,
    c.map((w) =>
      y.createElement("link", Fe({ key: w, rel: "modulepreload", href: w }, n)),
    ),
    h.map(({ key: w, link: S }) => y.createElement("link", Fe({ key: w }, S))),
  );
}
function aw(e) {
  return y.createElement(mg, e);
}
let wi = !1;
function uw(e) {
  let {
      manifest: t,
      serverHandoffString: n,
      abortDelay: r,
      serializeError: l,
      isSpaMode: i,
      future: o,
      renderMeta: a,
    } = mo(),
    { router: u, static: s, staticContext: d } = bh(),
    { matches: c } = qh(),
    h = is(o, i);
  a && (a.didRenderScripts = !0);
  let x = lw(c, null, i);
  y.useEffect(() => {
    wi = !0;
  }, []);
  let w = (v, T) => {
      let C;
      return (
        l && T instanceof Error ? (C = l(T)) : (C = T),
        `${JSON.stringify(v)}:__remixContext.p(!1, ${ri(JSON.stringify(C))})`
      );
    },
    S = (v, T, C) => {
      let M;
      try {
        M = JSON.stringify(C);
      } catch (O) {
        return w(T, O);
      }
      return `${JSON.stringify(T)}:__remixContext.p(${ri(M)})`;
    },
    L = (v, T, C) => {
      let M;
      return (
        l && C instanceof Error ? (M = l(C)) : (M = C),
        `__remixContext.r(${JSON.stringify(v)}, ${JSON.stringify(T)}, !1, ${ri(JSON.stringify(M))})`
      );
    },
    m = (v, T, C) => {
      let M;
      try {
        M = JSON.stringify(C);
      } catch (O) {
        return L(v, T, O);
      }
      return `__remixContext.r(${JSON.stringify(v)}, ${JSON.stringify(T)}, ${ri(M)})`;
    },
    f = [],
    p = y.useMemo(() => {
      var v;
      let T = o.unstable_singleFetch
          ? "window.__remixContext.stream = new ReadableStream({start(controller){window.__remixContext.streamController = controller;}}).pipeThrough(new TextEncoderStream());"
          : "",
        C = d ? `window.__remixContext = ${n};${T}` : " ",
        M = o.unstable_singleFetch || d == null ? void 0 : d.activeDeferreds;
      C += M
        ? [
            "__remixContext.p = function(v,e,p,x) {",
            "  if (typeof e !== 'undefined') {",
            `    x=new Error("Unexpected Server Error");
    x.stack=undefined;`,
            "    p=Promise.reject(x);",
            "  } else {",
            "    p=Promise.resolve(v);",
            "  }",
            "  return p;",
            "};",
            "__remixContext.n = function(i,k) {",
            "  __remixContext.t = __remixContext.t || {};",
            "  __remixContext.t[i] = __remixContext.t[i] || {};",
            "  let p = new Promise((r, e) => {__remixContext.t[i][k] = {r:(v)=>{r(v);},e:(v)=>{e(v);}};});",
            typeof r == "number"
              ? `setTimeout(() => {if(typeof p._error !== "undefined" || typeof p._data !== "undefined"){return;} __remixContext.t[i][k].e(new Error("Server timeout."))}, ${r});`
              : "",
            "  return p;",
            "};",
            "__remixContext.r = function(i,k,v,e,p,x) {",
            "  p = __remixContext.t[i][k];",
            "  if (typeof e !== 'undefined') {",
            `    x=new Error("Unexpected Server Error");
    x.stack=undefined;`,
            "    p.e(x);",
            "  } else {",
            "    p.r(v);",
            "  }",
            "};",
          ].join(`
`) +
          Object.entries(M).map(([W, X]) => {
            let ge = new Set(X.pendingKeys),
              ee = X.deferredKeys.map((xe) => {
                if (ge.has(xe))
                  return (
                    f.push(
                      y.createElement(td, {
                        key: `${W} | ${xe}`,
                        deferredData: X,
                        routeId: W,
                        dataKey: xe,
                        scriptProps: e,
                        serializeData: m,
                        serializeError: L,
                      }),
                    ),
                    `${JSON.stringify(xe)}:__remixContext.n(${JSON.stringify(W)}, ${JSON.stringify(xe)})`
                  );
                {
                  let rt = X.data[xe];
                  return typeof rt._error < "u"
                    ? w(xe, rt._error)
                    : S(W, xe, rt._data);
                }
              }).join(`,
`);
            return `Object.assign(__remixContext.state.loaderData[${JSON.stringify(W)}], {${ee}});`;
          }).join(`
`) +
          (f.length > 0 ? `__remixContext.a=${f.length};` : "")
        : "";
      let O = s
        ? `${(v = t.hmr) !== null && v !== void 0 && v.runtime ? `import ${JSON.stringify(t.hmr.runtime)};` : ""}${h ? "" : `import ${JSON.stringify(t.url)}`};
${x.map(
  (W, X) =>
    `import * as route${X} from ${JSON.stringify(t.routes[W.route.id].module)};`,
).join(`
`)}
${h ? `window.__remixManifest = ${JSON.stringify(G0(t, u), null, 2)};` : ""}
window.__remixRouteModules = {${x.map((W, X) => `${JSON.stringify(W.route.id)}:route${X}`).join(",")}};

import(${JSON.stringify(t.entry.module)});`
        : " ";
      return y.createElement(
        y.Fragment,
        null,
        y.createElement(
          "script",
          Fe({}, e, {
            suppressHydrationWarning: !0,
            dangerouslySetInnerHTML: Zc(C),
            type: void 0,
          }),
        ),
        y.createElement(
          "script",
          Fe({}, e, {
            suppressHydrationWarning: !0,
            dangerouslySetInnerHTML: Zc(O),
            type: "module",
            async: !0,
          }),
        ),
      );
    }, []);
  if (!s && typeof __remixContext == "object" && __remixContext.a)
    for (let v = 0; v < __remixContext.a; v++)
      f.push(
        y.createElement(td, {
          key: v,
          scriptProps: e,
          serializeData: m,
          serializeError: L,
        }),
      );
  let _ = x
      .map((v) => {
        let T = t.routes[v.route.id];
        return (T.imports || []).concat([T.module]);
      })
      .flat(1),
    P = wi ? [] : t.entry.imports.concat(_);
  return wi
    ? null
    : y.createElement(
        y.Fragment,
        null,
        h
          ? null
          : y.createElement("link", {
              rel: "modulepreload",
              href: t.url,
              crossOrigin: e.crossOrigin,
            }),
        y.createElement("link", {
          rel: "modulepreload",
          href: t.entry.module,
          crossOrigin: e.crossOrigin,
        }),
        cw(P).map((v) =>
          y.createElement("link", {
            key: v,
            rel: "modulepreload",
            href: v,
            crossOrigin: e.crossOrigin,
          }),
        ),
        p,
        f,
      );
}
function td({
  dataKey: e,
  deferredData: t,
  routeId: n,
  scriptProps: r,
  serializeData: l,
  serializeError: i,
}) {
  return (
    typeof document > "u" &&
      t &&
      e &&
      n &&
      yn(
        t.pendingKeys.includes(e),
        `Deferred data for route ${n} with key ${e} was not pending but tried to render a script for it.`,
      ),
    y.createElement(
      y.Suspense,
      {
        fallback:
          typeof document > "u" && t && e && n
            ? null
            : y.createElement(
                "script",
                Fe({}, r, {
                  async: !0,
                  suppressHydrationWarning: !0,
                  dangerouslySetInnerHTML: { __html: " " },
                }),
              ),
      },
      typeof document > "u" && t && e && n
        ? y.createElement(aw, {
            resolve: t.data[e],
            errorElement: y.createElement(sw, {
              dataKey: e,
              routeId: n,
              scriptProps: r,
              serializeError: i,
            }),
            children: (o) =>
              y.createElement(
                "script",
                Fe({}, r, {
                  async: !0,
                  suppressHydrationWarning: !0,
                  dangerouslySetInnerHTML: { __html: l(n, e, o) },
                }),
              ),
          })
        : y.createElement(
            "script",
            Fe({}, r, {
              async: !0,
              suppressHydrationWarning: !0,
              dangerouslySetInnerHTML: { __html: " " },
            }),
          ),
    )
  );
}
function sw({ dataKey: e, routeId: t, scriptProps: n, serializeError: r }) {
  let l = fg();
  return y.createElement(
    "script",
    Fe({}, n, {
      suppressHydrationWarning: !0,
      dangerouslySetInnerHTML: { __html: r(t, e, l) },
    }),
  );
}
function cw(e) {
  return [...new Set(e)];
}
function np(...e) {
  return (t) => {
    e.forEach((n) => {
      typeof n == "function" ? n(t) : n != null && (n.current = t);
    });
  };
}
/**
 * @remix-run/react v2.11.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function dw(e) {
  if (!e) return null;
  let t = Object.entries(e),
    n = {};
  for (let [r, l] of t)
    if (l && l.__type === "RouteErrorResponse")
      n[r] = new vn(l.status, l.statusText, l.data, l.internal === !0);
    else if (l && l.__type === "Error") {
      if (l.__subType) {
        let i = window[l.__subType];
        if (typeof i == "function")
          try {
            let o = new i(l.message);
            (o.stack = l.stack), (n[r] = o);
          } catch {}
      }
      if (n[r] == null) {
        let i = new Error(l.message);
        (i.stack = l.stack), (n[r] = i);
      }
    } else n[r] = l;
  return n;
}
/**
 * @remix-run/react v2.11.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ let Gt,
  lt,
  qo = !1;
let ba,
  mw = new Promise((e) => {
    ba = e;
  }).catch(() => {});
function fw(e) {
  if (!lt) {
    let i = window.__remixContext.url,
      o = window.location.pathname;
    if (i !== o && !window.__remixContext.isSpaMode) {
      let c = `Initial URL (${i}) does not match URL at time of hydration (${o}), reloading page...`;
      return (
        console.error(c),
        window.location.reload(),
        y.createElement(y.Fragment, null)
      );
    }
    if (window.__remixContext.future.unstable_singleFetch) {
      if (!Gt) {
        let c = window.__remixContext.stream;
        yn(c, "No stream found for single fetch decoding"),
          (window.__remixContext.stream = void 0),
          (Gt = Qh(c, window)
            .then((h) => {
              (window.__remixContext.state = h.value), (Gt.value = !0);
            })
            .catch((h) => {
              Gt.error = h;
            }));
      }
      if (Gt.error) throw Gt.error;
      if (!Gt.value) throw Gt;
    }
    let a = po(
        window.__remixManifest.routes,
        window.__remixRouteModules,
        window.__remixContext.state,
        window.__remixContext.future,
        window.__remixContext.isSpaMode,
      ),
      u;
    if (!window.__remixContext.isSpaMode) {
      u = {
        ...window.__remixContext.state,
        loaderData: { ...window.__remixContext.state.loaderData },
      };
      let c = Lt(a, window.location, window.__remixContext.basename);
      if (c)
        for (let h of c) {
          let x = h.route.id,
            w = window.__remixRouteModules[x],
            S = window.__remixManifest.routes[x];
          w &&
          Gh(S, w, window.__remixContext.isSpaMode) &&
          (w.HydrateFallback || !S.hasLoader)
            ? (u.loaderData[x] = void 0)
            : S && !S.hasLoader && (u.loaderData[x] = null);
        }
      u && u.errors && (u.errors = dw(u.errors));
    }
    let { enabled: s, patchRoutesOnMiss: d } = Z0(
      window.__remixManifest,
      window.__remixRouteModules,
      window.__remixContext.future,
      window.__remixContext.isSpaMode,
      window.__remixContext.basename,
    );
    (lt = Oy({
      routes: a,
      history: bv(),
      basename: window.__remixContext.basename,
      future: {
        v7_normalizeFormMethod: !0,
        v7_fetcherPersist: window.__remixContext.future.v3_fetcherPersist,
        v7_partialHydration: !0,
        v7_prependBasename: !0,
        v7_relativeSplatPath: window.__remixContext.future.v3_relativeSplatPath,
        v7_skipActionErrorRevalidation:
          window.__remixContext.future.unstable_singleFetch === !0,
      },
      hydrationData: u,
      mapRouteProperties: wg,
      unstable_dataStrategy: window.__remixContext.future.unstable_singleFetch
        ? I0(window.__remixManifest, window.__remixRouteModules)
        : void 0,
      ...(s ? { unstable_patchRoutesOnMiss: d } : {}),
    })),
      lt.state.initialized && ((qo = !0), lt.initialize()),
      (lt.createRoutesForHMR = V0),
      (window.__remixRouter = lt),
      ba && ba(lt);
  }
  let [t, n] = y.useState(void 0),
    [r, l] = y.useState(lt.state.location);
  return (
    y.useLayoutEffect(() => {
      qo || ((qo = !0), lt.initialize());
    }, []),
    y.useLayoutEffect(
      () =>
        lt.subscribe((i) => {
          i.location !== r && l(i.location);
        }),
      [r],
    ),
    b0(
      lt,
      window.__remixManifest,
      window.__remixRouteModules,
      window.__remixContext.future,
      window.__remixContext.isSpaMode,
    ),
    y.createElement(
      y.Fragment,
      null,
      y.createElement(
        os.Provider,
        {
          value: {
            manifest: window.__remixManifest,
            routeModules: window.__remixRouteModules,
            future: window.__remixContext.future,
            criticalCss: t,
            isSpaMode: window.__remixContext.isSpaMode,
          },
        },
        y.createElement(
          B0,
          { location: r },
          y.createElement(Ig, {
            router: lt,
            fallbackElement: null,
            future: { v7_startTransition: !0 },
          }),
        ),
      ),
      window.__remixContext.future.unstable_singleFetch
        ? y.createElement(y.Fragment, null)
        : null,
    )
  );
}
var rp,
  nd = Yu;
nd.createRoot, (rp = nd.hydrateRoot);
y.startTransition(() => {
  rp(document, ks.jsx(y.StrictMode, { children: ks.jsx(fw, {}) }));
});
