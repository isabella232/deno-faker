if (
  !function(a, b) {
    "object" == typeof module && "object" == typeof module.exports
      ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document) {
          throw new Error(
            "jQuery requires a window with a document"
          );
        }
        return b(a);
      }
      : b(a);
  }("undefined" != typeof window ? window : this, function(a, b) {
    function c(a) {
      var b = "length" in a && a.length, c = _.type(a);
      return "function" === c || _.isWindow(a)
        ? !1
        : 1 === a.nodeType && b
          ? !0
          : "array" === c || 0 === b || "number" == typeof b && b > 0 &&
            b - 1 in a;
    }
    function d(a, b, c) {
      if (_.isFunction(b)) {
        return _.grep(a, function(a, d) {
          return !!b.call(a, d, a) !== c;
        });
      }
      if (b.nodeType) {
        return _.grep(a, function(a) {
          return a === b !== c;
        });
      }
      if ("string" == typeof b) {
        if (ha.test(b)) return _.filter(b, a, c);
        b = _.filter(b, a);
      }
      return _.grep(a, function(a) {
        return U.call(b, a) >= 0 !== c;
      });
    }
    function e(a, b) {
      for (; (a = a[b]) && 1 !== a.nodeType;);
      return a;
    }
    function f(a) {
      var b = oa[a] = {};
      return _.each(a.match(na) || [], function(a, c) {
        b[c] = !0;
      }), b;
    }
    function g() {
      Z.removeEventListener("DOMContentLoaded", g, !1),
        a.removeEventListener("load", g, !1),
        _.ready();
    }
    function h() {
      Object.defineProperty(this.cache = {}, 0, { get: function() {
        return {};
      } }),
        this.expando = _.expando + h.uid++;
    }
    function i(a, b, c) {
      var d;
      if (void 0 === c && 1 === a.nodeType) {
        if (
          d = "data-" + b.replace(ua, "-$1").toLowerCase(),
            c = a.getAttribute(d),
            "string" == typeof c
        ) {
          try {
            c = "true" === c
              ? !0
              : "false" === c ? !1 : "null" === c
                ? null
                : +c + "" === c ? +c : ta.test(c) ? _.parseJSON(c) : c;
          } catch (e) {}
          sa.set(a, b, c);
        } else c = void 0;
      }
      return c;
    }
    function j() {
      return !0;
    }
    function k() {
      return !1;
    }
    function l() {
      try {
        return Z.activeElement;
      } catch (a) {}
    }
    function m(a, b) {
      return _.nodeName(a, "table") && _.nodeName(11 !== b.nodeType
        ? b
        : b.firstChild, "tr")
        ? a.getElementsByTagName("tbody")[0] ||
          a.appendChild(a.ownerDocument.createElement("tbody"))
        : a;
    }
    function n(a) {
      return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a;
    }
    function o(a) {
      var b = Ka.exec(a.type);
      return b ? a.type = b[1] : a.removeAttribute("type"), a;
    }
    function p(a, b) {
      for (var c = 0, d = a.length; d > c; c++) {
        ra.set(
          a[c],
          "globalEval",
          !b || ra.get(b[c], "globalEval")
        );
      }
    }
    function q(a, b) {
      var c, d, e, f, g, h, i, j;
      if (1 === b.nodeType) {
        if (
          ra.hasData(a) && (f = ra.access(a), g = ra.set(b, f), j = f.events)
        ) {
          delete g.handle,
            g.events = {};
          for (e in j) {
            for (c = 0, d = j[e].length; d > c; c++) {
              _.event.add(
                b,
                e,
                j[e][c]
              );
            }
          }
        }
        sa.hasData(a) && (h = sa.access(a), i = _.extend({}, h), sa.set(b, i));
      }
    }
    function r(a, b) {
      var c = a.getElementsByTagName
        ? a.getElementsByTagName(b || "*")
        : a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
      return void 0 === b || b && _.nodeName(a, b) ? _.merge([a], c) : c;
    }
    function s(a, b) {
      var c = b.nodeName.toLowerCase();
      "input" === c && ya.test(a.type)
        ? b.checked = a.checked
        : ("input" === c || "textarea" === c) &&
          (b.defaultValue = a.defaultValue);
    }
    function t(b, c) {
      var d, e = _(c.createElement(b)).appendTo(c.body),
        f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0]))
          ? d.display
          : _.css(e[0], "display");
      return e.detach(), f;
    }
    function u(a) {
      var b = Z, c = Oa[a];
      return c || (c = t(a, b),
        "none" !== c && c ||
          (Na = (Na || _("<iframe frameborder='0' width='0' height='0'/>"))
            .appendTo(b.documentElement),
            b = Na[0].contentDocument,
            b.write(),
            b.close(),
            c = t(a, b),
            Na.detach()),
        Oa[a] = c),
        c;
    }
    function v(a, b, c) {
      var d, e, f, g, h = a.style;
      return c = c || Ra(a),
        c && (g = c.getPropertyValue(b) || c[b]),
        c &&
          ("" !== g || _.contains(a.ownerDocument, a) || (g = _.style(a, b)),
            Qa.test(g) && Pa.test(b) && (d = h.width,
              e = h.minWidth,
              f = h.maxWidth,
              h.minWidth = h.maxWidth = h.width = g,
              g = c.width,
              h.width = d,
              h.minWidth = e,
              h.maxWidth = f)),
        void 0 !== g ? g + "" : g;
    }
    function w(a, b) {
      return { get: function() {
        return a()
          ? void delete this.get
          : (this.get = b).apply(this, arguments);
      } };
    }
    function x(a, b) {
      if (b in a) return b;
      for (
        var c = b[0].toUpperCase() + b.slice(1), d = b, e = Xa.length;
        e--;
      ) {
        if (b = Xa[e] + c, b in a) return b;
      }
      return d;
    }
    function y(a, b, c) {
      var d = Ta.exec(b);
      return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b;
    }
    function z(a, b, c, d, e) {
      for (
        var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0,
          g = 0;
        4 > f;
        f += 2
      ) {
        "margin" === c && (g += _.css(a, c + wa[f], !0, e)),
          d
            ? ("content" === c && (g -= _.css(a, "padding" + wa[f], !0, e)),
              "margin" !== c &&
                (g -= _.css(a, "border" + wa[f] + "Width", !0, e)))
            : (g += _.css(a, "padding" + wa[f], !0, e),
              "padding" !== c &&
                (g += _.css(a, "border" + wa[f] + "Width", !0, e)));
      }
      return g;
    }
    function A(a, b, c) {
      var d = !0, e = "width" === b ? a.offsetWidth : a.offsetHeight,
        f = Ra(a), g = "border-box" === _.css(a, "boxSizing", !1, f);
      if (0 >= e || null == e) {
        if (
          e = v(a, b, f),
            (0 > e || null == e) && (e = a.style[b]),
            Qa.test(e)
        ) {
          return e;
        }
        d = g && (Y.boxSizingReliable() || e === a.style[b]),
          e = parseFloat(e) || 0;
      }
      return e + z(a, b, c || (g ? "border" : "content"), d, f) + "px";
    }
    function B(a, b) {
      for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) {
        d = a[g],
          d.style && (f[g] = ra.get(d, "olddisplay"),
            c = d.style.display,
            b
              ? (f[g] || "none" !== c || (d.style.display = ""),
                "" === d.style.display && xa(d) &&
                  (f[g] = ra.access(d, "olddisplay", u(d.nodeName))))
              : (e = xa(d),
                "none" === c && e || ra.set(d, "olddisplay", e
                  ? c
                  : _.css(d, "display"))));
      }
      for (g = 0; h > g; g++) {
        d = a[g],
          d.style &&
            (b && "none" !== d.style.display && "" !== d.style.display ||
              (d.style.display = b ? f[g] || "" : "none"));
      }
      return a;
    }
    function C(a, b, c, d, e) {
      return new C.prototype.init(a, b, c, d, e);
    }
    function D() {
      return setTimeout(function() {
        Ya = void 0;
      }), Ya = _.now();
    }
    function E(a, b) {
      var c, d = 0, e = { height: a };
      for (b = b ? 1 : 0; 4 > d; d += 2 - b) {
        c = wa[d],
          e["margin" + c] = e["padding" + c] = a;
      }
      return b && (e.opacity = e.width = a), e;
    }
    function F(a, b, c) {
      for (
        var d, e = (cb[b] || []).concat(cb["*"]), f = 0, g = e.length;
        g > f;
        f++
      ) {
        if (d = e[f].call(c, b, a)) return d;
      }
    }
    function G(a, b, c) {
      var d, e, f, g, h, i, j, k, l = this, m = {}, n = a.style,
        o = a.nodeType && xa(a), p = ra.get(a, "fxshow");
      c.queue || (h = _._queueHooks(a, "fx"),
        null == h.unqueued &&
          (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
            h.unqueued || i();
          }),
        h.unqueued++,
        l.always(function() {
          l.always(function() {
            h.unqueued--,
              _.queue(a, "fx").length || h.empty.fire();
          });
        })),
        1 === a.nodeType && ("height" in b || "width" in b) &&
          (c.overflow = [n.overflow, n.overflowX, n.overflowY],
            j = _.css(a, "display"),
            k = "none" === j ? ra.get(a, "olddisplay") || u(a.nodeName) : j,
            "inline" === k && "none" === _.css(a, "float") &&
              (n.display = "inline-block")),
        c.overflow && (n.overflow = "hidden", l.always(function() {
          n.overflow = c.overflow[0],
            n.overflowX = c.overflow[1],
            n.overflowY = c.overflow[2];
        }));
      for (d in b) {
        if (e = b[d], $a.exec(e)) {
          if (
            delete b[d],
              f = f || "toggle" === e,
              e === (o ? "hide" : "show")
          ) {
            if ("show" !== e || !p || void 0 === p[d]) continue;
            o = !0;
          }
          m[d] = p && p[d] || _.style(a, d);
        } else j = void 0;
      }
      if (
        _.isEmptyObject(
          m
        )
      ) {
        "inline" === ("none" === j ? u(a.nodeName) : j) && (n.display = j);
      } else {
        p ? "hidden" in p && (o = p.hidden) : p = ra.access(a, "fxshow", {}),
          f && (p.hidden = !o),
          o ? _(a).show() : l.done(function() {
            _(a).hide();
          }),
          l.done(function() {
            var b;
            ra.remove(a, "fxshow");
            for (b in m) _.style(a, b, m[b]);
          });
        for (d in m) {
          g = F(o ? p[d] : 0, d, l),
            d in p || (p[d] = g.start,
              o && (g.end = g.start,
                g.start = "width" === d || "height" === d ? 1 : 0));
        }
      }
    }
    function H(a, b) {
      var c, d, e, f, g;
      for (c in a) {
        if (
          d = _.camelCase(c),
            e = b[d],
            f = a[c],
            _.isArray(f) && (e = f[1], f = a[c] = f[0]),
            c !== d && (a[d] = f, delete a[c]),
            g = _.cssHooks[d],
            g && "expand" in g
        ) {
          f = g.expand(f),
            delete a[d];
          for (c in f) c in a || (a[c] = f[c], b[c] = e);
        } else b[d] = e;
      }
    }
    function I(a, b, c) {
      var d, e, f = 0, g = bb.length, h = _.Deferred().always(function() {
        delete i.elem;
      }), i = function() {
        if (e) return !1;
        for (
          var b = Ya || D(), c = Math.max(0, j.startTime + j.duration - b),
            d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length;
          i > g;
          g++
        ) {
          j.tweens[g].run(f);
        }
        return h.notifyWith(a, [j, f, c]),
          1 > f && i ? c : (h.resolveWith(a, [j]), !1);
      }, j = h.promise(
        {
          elem: a,
          props: _.extend({}, b),
          opts: _.extend(!0, { specialEasing: {} }, c),
          originalProperties: b,
          originalOptions: c,
          startTime: Ya || D(),
          duration: c.duration,
          tweens: [],
          createTween: function(b, c) {
            var d = _.Tween(
              a,
              j.opts,
              b,
              c,
              j.opts.specialEasing[b] || j.opts.easing
            );
            return j.tweens.push(d), d;
          },
          stop: function(b) {
            var c = 0, d = b ? j.tweens.length : 0;
            if (e) return this;
            for (e = !0; d > c; c++) j.tweens[c].run(1);
            return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]),
              this;
          }
        }
      ), k = j.props;
      for (H(k, j.opts.specialEasing); g > f; f++) {
        if (
          d = bb[f].call(
            j,
            a,
            k,
            j.opts
          )
        ) {
          return d;
        }
      }
      return _.map(k, F, j),
        _.isFunction(j.opts.start) && j.opts.start.call(a, j),
        _.fx.timer(_.extend(i, { elem: a, anim: j, queue: j.opts.queue })),
        j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(
          j.opts.fail
        ).always(j.opts.always);
    }
    function J(a) {
      return function(b, c) {
        "string" != typeof b && (c = b, b = "*");
        var d, e = 0, f = b.toLowerCase().match(na) || [];
        if (_.isFunction(c)) {
          for (; d = f[e++];) {
            "+" === d[0]
              ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c))
              : (a[d] = a[d] || []).push(c);
          }
        }
      };
    }
    function K(a, b, c, d) {
      function e(h) {
        var i;
        return f[h] = !0, _.each(a[h] || [], function(a, h) {
          var j = h(b, c, d);
          return "string" != typeof j || g || f[j]
            ? g ? !(i = j) : void 0
            : (b.dataTypes.unshift(j), e(j), !1);
        }), i;
      }
      var f = {}, g = a === tb;
      return e(b.dataTypes[0]) || !f["*"] && e("*");
    }
    function L(a, b) {
      var c, d, e = _.ajaxSettings.flatOptions || {};
      for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
      return d && _.extend(!0, a, d), a;
    }
    function M(a, b, c) {
      for (
        var d, e, f, g, h = a.contents, i = a.dataTypes;
        "*" === i[0];
      ) {
        i.shift(),
          void 0 === d &&
            (d = a.mimeType || b.getResponseHeader("Content-Type"));
      }
      if (d) {
        for (e in h) {
          if (h[e] && h[e].test(d)) {
            i.unshift(e);
            break;
          }
        }
      }
      if (i[0] in c) f = i[0];
      else {
        for (e in c) {
          if (!i[0] || a.converters[e + " " + i[0]]) {
            f = e;
            break;
          }
          g || (g = e);
        }
        f = f || g;
      }
      return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
    }
    function N(a, b, c, d) {
      var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
      if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
      for (f = k.shift(); f;) {
        if (
          a.responseFields[f] && (c[a.responseFields[f]] = b),
            !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)),
            i = f,
            f = k.shift()
        ) {
          if ("*" === f) f = i;
          else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g) {
              for (e in j) {
                if (
                  h = e.split(" "),
                    h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])
                ) {
                  g === !0
                    ? g = j[e]
                    : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                  break;
                }
              }
            }
            if (g !== !0) {
              if (g && a["throws"]) b = g(b);
              else {
                try {
                  b = g(b);
                } catch (l) {
                  return {
                    state: "parsererror",
                    error: g ? l : "No conversion from " + i + " to " + f
                  };
                }
              }
            }
          }
        }
      }
      return { state: "success", data: b };
    }
    function O(a, b, c, d) {
      var e;
      if (_.isArray(b)) {
        _.each(b, function(b, e) {
          c || yb.test(a)
            ? d(a, e)
            : O(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d);
        });
      } else if (c || "object" !== _.type(b)) d(a, b);
      else for (e in b) O(a + "[" + e + "]", b[e], c, d);
    }
    function P(a) {
      return _.isWindow(a) ? a : 9 === a.nodeType && a.defaultView;
    }
    var Q = [], R = Q.slice, S = Q.concat, T = Q.push, U = Q.indexOf, V = {},
      W = V.toString, X = V.hasOwnProperty, Y = {}, Z = a.document,
      $ = "2.1.4", _ = function(a, b) {
        return new _.fn.init(a, b);
      }, aa = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ba = /^-ms-/,
      ca = /-([\da-z])/gi, da = function(a, b) {
        return b.toUpperCase();
      };
    _.fn = _.prototype = {
      jquery: $,
      constructor: _,
      selector: "",
      length: 0,
      toArray: function() {
        return R.call(this);
      },
      get: function(a) {
        return null != a
          ? 0 > a ? this[a + this.length] : this[a]
          : R.call(this);
      },
      pushStack: function(a) {
        var b = _.merge(this.constructor(), a);
        return b.prevObject = this, b.context = this.context, b;
      },
      each: function(a, b) {
        return _.each(this, a, b);
      },
      map: function(a) {
        return this.pushStack(_.map(this, function(b, c) {
          return a.call(b, c, b);
        }));
      },
      slice: function() {
        return this.pushStack(R.apply(this, arguments));
      },
      first: function() {
        return this.eq(0);
      },
      last: function() {
        return this.eq(-1);
      },
      eq: function(a) {
        var b = this.length, c = +a + (0 > a ? b : 0);
        return this.pushStack(c >= 0 && b > c ? [this[c]] : []);
      },
      end: function() {
        return this.prevObject || this.constructor(null);
      },
      push: T,
      sort: Q.sort,
      splice: Q.splice
    },
      _.extend = _.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {}, h = 1,
          i = arguments.length, j = !1;
        for (
          "boolean" == typeof g && (j = g, g = arguments[h] || {}, h++),
            "object" == typeof g || _.isFunction(g) || (g = {}),
            h === i && (g = this, h--);
          i > h;
          h++
        ) {
          if (null != (a = arguments[h])) {
            for (b in a) {
              c = g[b],
                d = a[b],
                g !== d &&
                  (j && d && (_.isPlainObject(d) || (e = _.isArray(d)))
                    ? (e
                      ? (e = !1, f = c && _.isArray(c) ? c : [])
                      : f = c && _.isPlainObject(c) ? c : {},
                      g[b] = _.extend(j, f, d))
                    : void 0 !== d && (g[b] = d));
            }
          }
        }
        return g;
      },
      _.extend(
        {
          expando: "jQuery" + ($ + Math.random()).replace(/\D/g, ""),
          isReady: !0,
          error: function(a) {
            throw new Error(a);
          },
          noop: function() {},
          isFunction: function(a) {
            return "function" === _.type(a);
          },
          isArray: Array.isArray,
          isWindow: function(a) {
            return null != a && a === a.window;
          },
          isNumeric: function(a) {
            return !_.isArray(a) && a - parseFloat(a) + 1 >= 0;
          },
          isPlainObject: function(a) {
            return "object" !== _.type(a) || a.nodeType || _.isWindow(a)
              ? !1
              : a.constructor &&
                !X.call(a.constructor.prototype, "isPrototypeOf")
                ? !1
                : !0;
          },
          isEmptyObject: function(a) {
            var b;
            for (b in a) return !1;
            return !0;
          },
          type: function(a) {
            return null == a
              ? a + ""
              : "object" == typeof a || "function" == typeof a
                ? V[W.call(a)] || "object"
                : typeof a;
          },
          globalEval: function(a) {
            var b, c = eval;
            a = _.trim(a),
              a && (1 === a.indexOf("use strict")
                ? (b = Z.createElement("script"),
                  b.text = a,
                  Z.head.appendChild(b).parentNode.removeChild(b))
                : c(a));
          },
          camelCase: function(a) {
            return a.replace(ba, "ms-").replace(ca, da);
          },
          nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
          },
          each: function(a, b, d) {
            var e, f = 0, g = a.length, h = c(a);
            if (d) {
              if (h) for (; g > f && (e = b.apply(a[f], d), e !== !1); f++);
              else for (f in a) if (e = b.apply(a[f], d), e === !1) break;
            } else if (h) {
              for (
                ;
                g > f && (e = b.call(a[f], f, a[f]), e !== !1);
                f++
              );
            } else for (f in a) if (e = b.call(a[f], f, a[f]), e === !1) break;
            return a;
          },
          trim: function(a) {
            return null == a ? "" : (a + "").replace(aa, "");
          },
          makeArray: function(a, b) {
            var d = b || [];
            return null != a && (c(Object(a))
              ? _.merge(d, "string" == typeof a
                ? [a]
                : a)
              : T.call(d, a)),
              d;
          },
          inArray: function(a, b, c) {
            return null == b ? -1 : U.call(b, a, c);
          },
          merge: function(a, b) {
            for (var c = +b.length, d = 0, e = a.length; c > d; d++) {a[e++] =
                b[d];}
            return a.length = e, a;
          },
          grep: function(a, b, c) {
            for (
              var d, e = [], f = 0, g = a.length, h = !c;
              g > f;
              f++
            ) {
              d = !b(a[f], f),
                d !== h && e.push(a[f]);
            }
            return e;
          },
          map: function(a, b, d) {
            var e, f = 0, g = a.length, h = c(a), i = [];
            if (h) {
              for (; g > f; f++) {
                e = b(a[f], f, d),
                  null != e && i.push(e);
              }
            } else for (f in a) e = b(a[f], f, d), null != e && i.push(e);
            return S.apply([], i);
          },
          guid: 1,
          proxy: function(a, b) {
            var c, d, e;
            return "string" == typeof b && (c = a[b], b = a, a = c),
              _.isFunction(a)
                ? (d = R.call(arguments, 2), e = function() {
                  return a.apply(b || this, d.concat(R.call(arguments)));
                }, e.guid = a.guid = a.guid || _.guid++, e)
                : void 0;
          },
          now: Date.now,
          support: Y
        }
      ),
      _.each(
        "Boolean Number String Function Array Date RegExp Object Error".split(
          " "
        ),
        function(a, b) {
          V["[object " + b + "]"] = b.toLowerCase();
        }
      );
    var ea = function(a) {
      function b(a, b, c, d) {
        var e, f, g, h, i, j, l, n, o, p;
        if (
          (b ? b.ownerDocument || b : O) !== G && F(b),
            b = b || G,
            c = c || [],
            h = b.nodeType,
            "string" != typeof a || !a || 1 !== h && 9 !== h && 11 !== h
        ) {
          return c;
        }
        if (!d && I) {
          if (11 !== h && (e = sa.exec(a))) {
            if (g = e[1]) {
              if (9 === h) {
                if (f = b.getElementById(g), !f || !f.parentNode) return c;
                if (f.id === g) return c.push(f), c;
              } else if (
                b.ownerDocument && (f = b.ownerDocument.getElementById(g)) &&
                M(b, f) && f.id === g
              ) {
                return c.push(f), c;
              }
            } else {
              if (e[2]) return $.apply(c, b.getElementsByTagName(a)), c;
              if ((g = e[3]) && v.getElementsByClassName) {
                return $.apply(c, b.getElementsByClassName(g)), c;
              }
            }
          }
          if (v.qsa && (!J || !J.test(a))) {
            if (
              n = l = N,
                o = b,
                p = 1 !== h && a,
                1 === h && "object" !== b.nodeName.toLowerCase()
            ) {
              for (
                j = z(a),
                  (l = b.getAttribute("id"))
                    ? n = l.replace(ua, "\\$&")
                    : b.setAttribute("id", n),
                  n = "[id='" + n + "'] ",
                  i = j.length;
                i--;
              ) {
                j[i] = n + m(j[i]);
              }
              o = ta.test(a) && k(b.parentNode) || b,
                p = j.join(",");
            }
            if (p) {
              try {
                return $.apply(c, o.querySelectorAll(p)), c;
              } catch (q) {
              } finally {
                l || b.removeAttribute("id");
              }
            }
          }
        }
        return B(a.replace(ia, "$1"), b, c, d);
      }
      function c() {
        function a(c, d) {
          return b.push(c + " ") > w.cacheLength && delete a[b.shift()],
            a[c + " "] = d;
        }
        var b = [];
        return a;
      }
      function d(a) {
        return a[N] = !0, a;
      }
      function e(a) {
        var b = G.createElement("div");
        try {
          return !!a(b);
        } catch (c) {
          return !1;
        } finally {
          b.parentNode && b.parentNode.removeChild(b),
            b = null;
        }
      }
      function f(a, b) {
        for (var c = a.split("|"), d = a.length; d--;) w.attrHandle[c[d]] = b;
      }
      function g(a, b) {
        var c = b && a,
          d = c && 1 === a.nodeType && 1 === b.nodeType &&
            (~b.sourceIndex || V) - (~a.sourceIndex || V);
        if (d) return d;
        if (c) for (; c = c.nextSibling;) if (c === b) return -1;
        return a ? 1 : -1;
      }
      function h(a) {
        return function(b) {
          var c = b.nodeName.toLowerCase();
          return "input" === c && b.type === a;
        };
      }
      function i(a) {
        return function(b) {
          var c = b.nodeName.toLowerCase();
          return ("input" === c || "button" === c) && b.type === a;
        };
      }
      function j(a) {
        return d(function(b) {
          return b = +b, d(function(c, d) {
            for (
              var e, f = a([], c.length, b), g = f.length;
              g--;
            ) {
              c[e = f[g]] && (c[e] = !(d[e] = c[e]));
            }
          });
        });
      }
      function k(a) {
        return a && "undefined" != typeof a.getElementsByTagName && a;
      }
      function l() {}
      function m(a) {
        for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
        return d;
      }
      function n(a, b, c) {
        var d = b.dir, e = c && "parentNode" === d, f = Q++;
        return b.first
          ? function(b, c, f) {
            for (; b = b[d];) if (1 === b.nodeType || e) return a(b, c, f);
          }
          : function(b, c, g) {
            var h, i, j = [P, f];
            if (g) {
              for (; b = b[d];) {
                if ((1 === b.nodeType || e) && a(b, c, g)) {
                  return !0;
                }
              }
            } else {
              for (; b = b[d];) {
                if (1 === b.nodeType || e) {
                  if (
                    i = b[N] || (b[N] = {}),
                      (h = i[d]) && h[0] === P && h[1] === f
                  ) {
                    return j[2] = h[2];
                  }
                  if (i[d] = j, j[2] = a(b, c, g)) return !0;
                }
              }
            }
          };
      }
      function o(a) {
        return a.length > 1
          ? function(b, c, d) {
            for (var e = a.length; e--;) if (!a[e](b, c, d)) return !1;
            return !0;
          }
          : a[0];
      }
      function p(a, c, d) {
        for (var e = 0, f = c.length; f > e; e++) b(a, c[e], d);
        return d;
      }
      function q(a, b, c, d, e) {
        for (
          var f, g = [], h = 0, i = a.length, j = null != b;
          i > h;
          h++
        ) {
          (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
        }
        return g;
      }
      function r(a, b, c, e, f, g) {
        return e && !e[N] && (e = r(e)),
          f && !f[N] && (f = r(f, g)),
          d(function(d, g, h, i) {
            var j, k, l, m = [], n = [], o = g.length,
              r = d || p(b || "*", h.nodeType ? [h] : h, []),
              s = !a || !d && b ? r : q(r, m, a, h, i),
              t = c ? f || (d ? a : o || e) ? [] : g : s;
            if (c && c(s, t, h, i), e) {
              for (
                j = q(t, n),
                  e(j, [], h, i),
                  k = j.length;
                k--;
              ) {
                (l = j[k]) && (t[n[k]] = !(s[n[k]] = l));
              }
            }
            if (d) {
              if (f || a) {
                if (f) {
                  for (j = [], k = t.length; k--;) {
                    (l = t[k]) && j.push(s[k] = l);
                  }
                  f(null, t = [], j, i);
                }
                for (k = t.length; k--;) {
                  (l = t[k]) && (j = f ? aa(d, l) : m[k]) > -1 &&
                    (d[j] = !(g[j] = l));
                }
              }
            } else {
              t = q(t === g ? t.splice(o, t.length) : t),
                f ? f(null, g, t, i) : $.apply(g, t);
            }
          });
      }
      function s(a) {
        for (
          var b, c, d, e = a.length, f = w.relative[a[0].type],
            g = f || w.relative[" "], h = f ? 1 : 0, i = n(function(a) {
              return a === b;
            }, g, !0), j = n(function(a) {
              return aa(b, a) > -1;
            }, g, !0), k = [function(a, c, d) {
              var e = !f && (d || c !== C) ||
                ((b = c).nodeType ? i(a, c, d) : j(a, c, d));
              return b = null, e;
            }];
          e > h;
          h++
        ) {
          if (c = w.relative[a[h].type]) k = [n(o(k), c)];
          else {
            if (c = w.filter[a[h].type].apply(null, a[h].matches), c[N]) {
              for (d = ++h; e > d && !w.relative[a[d].type]; d++);
              return r(
                h > 1 && o(k),
                h > 1 && m(a.slice(0, h - 1).concat(
                  { value: " " === a[h - 2].type ? "*" : "" }
                )).replace(ia, "$1"),
                c,
                d > h && s(a.slice(h, d)),
                e > d && s(a = a.slice(d)),
                e > d && m(a)
              );
            }
            k.push(c);
          }
        }
        return o(k);
      }
      function t(a, c) {
        var e = c.length > 0, f = a.length > 0, g = function(d, g, h, i, j) {
          var k, l, m, n = 0, o = "0", p = d && [], r = [], s = C,
            t = d || f && w.find.TAG("*", j),
            u = P += null == s ? 1 : Math.random() || .1, v = t.length;
          for (j && (C = g !== G && g); o !== v && null != (k = t[o]); o++) {
            if (f && k) {
              for (l = 0; m = a[l++];) {
                if (m(k, g, h)) {
                  i.push(k);
                  break;
                }
              }
              j && (P = u);
            }
            e && ((k = !m && k) && n--, d && p.push(k));
          }
          if (n += o, e && o !== n) {
            for (l = 0; m = c[l++];) m(p, r, g, h);
            if (d) {
              if (n > 0) for (; o--;) p[o] || r[o] || (r[o] = Y.call(i));
              r = q(r);
            }
            $.apply(i, r),
              j && !d && r.length > 0 && n + c.length > 1 && b.uniqueSort(i);
          }
          return j && (P = u, C = s), p;
        };
        return e ? d(g) : g;
      }
      var u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M,
        N = "sizzle" + 1 * new Date(), O = a.document, P = 0, Q = 0, R = c(),
        S = c(), T = c(), U = function(a, b) {
          return a === b && (E = !0), 0;
        }, V = 1 << 31, W = {}.hasOwnProperty, X = [], Y = X.pop, Z = X.push,
        $ = X.push, _ = X.slice, aa = function(a, b) {
          for (var c = 0, d = a.length; d > c; c++) if (a[c] === b) return c;
          return -1;
        },
        ba =
          "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        ca = "[\\x20\\t\\r\\n\\f]", da = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        ea = da.replace("w", "w#"),
        fa = "\\[" + ca + "*(" + da + ")(?:" + ca + "*([*^$|!~]?=)" + ca +
          "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ea +
          "))|)" + ca + "*\\]",
        ga = ":(" + da +
          ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
          fa + ")*)|.*)\\)|)", ha = new RegExp(ca + "+", "g"), ia = new RegExp(
          "^" + ca + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ca + "+$",
          "g"
        ), ja = new RegExp("^" + ca + "*," + ca + "*"),
        ka = new RegExp("^" + ca + "*([>+~]|" + ca + ")" + ca + "*"),
        la = new RegExp("=" + ca + "*([^\\]'\"]*?)" + ca + "*\\]", "g"),
        ma = new RegExp(ga), na = new RegExp("^" + ea + "$"), oa = {
          ID: new RegExp("^#(" + da + ")"),
          CLASS: new RegExp("^\\.(" + da + ")"),
          TAG: new RegExp("^(" + da.replace("w", "w*") + ")"),
          ATTR: new RegExp("^" + fa),
          PSEUDO: new RegExp("^" + ga),
          CHILD: new RegExp(
            "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ca +
              "*(even|odd|(([+-]|)(\\d*)n|)" + ca + "*(?:([+-]|)" + ca +
              "*(\\d+)|))" + ca + "*\\)|)",
            "i"
          ),
          bool: new RegExp("^(?:" + ba + ")$", "i"),
          needsContext: new RegExp(
            "^" + ca + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
              ca + "*((?:-\\d)?\\d*)" + ca + "*\\)|)(?=[^-]|$)",
            "i"
          )
        }, pa = /^(?:input|select|textarea|button)$/i, qa = /^h\d$/i,
        ra = /^[^{]+\{\s*\[native \w/, sa = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        ta = /[+~]/, ua = /'|\\/g,
        va = new RegExp("\\\\([\\da-f]{1,6}" + ca + "?|(" + ca + ")|.)", "ig"),
        wa = function(a, b, c) {
          var d = "0x" + b - 65536;
          return d !== d || c ? b : 0 > d
            ? String.fromCharCode(d + 65536)
            : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320);
        }, xa = function() {
          F();
        };
      try {
        $.apply(X = _.call(O.childNodes), O.childNodes),
          X[O.childNodes.length].nodeType;
      } catch (ya) {
        $ = { apply: X.length
          ? function(a, b) {
            Z.apply(a, _.call(b));
          }
          : function(a, b) {
            for (var c = a.length, d = 0; a[c++] = b[d++];);
            a.length = c - 1;
          } };
      }
      v = b.support = {},
        y = b.isXML = function(a) {
          var b = a && (a.ownerDocument || a).documentElement;
          return b ? "HTML" !== b.nodeName : !1;
        },
        F = b.setDocument = function(a) {
          var b, c, d = a ? a.ownerDocument || a : O;
          return d !== G && 9 === d.nodeType && d.documentElement
            ? (G = d,
              H = d.documentElement,
              c = d.defaultView,
              c && c !== c.top && (c.addEventListener
                ? c.addEventListener("unload", xa, !1)
                : c.attachEvent && c.attachEvent("onunload", xa)),
              I = !y(d),
              v.attributes = e(function(a) {
                return a.className = "i", !a.getAttribute("className");
              }),
              v.getElementsByTagName = e(function(a) {
                return a.appendChild(d.createComment("")),
                  !a.getElementsByTagName("*").length;
              }),
              v.getElementsByClassName = ra.test(d.getElementsByClassName),
              v.getById = e(function(a) {
                return H.appendChild(a).id = N,
                  !d.getElementsByName || !d.getElementsByName(N).length;
              }),
              v.getById
                ? (w.find.ID = function(a, b) {
                  if ("undefined" != typeof b.getElementById && I) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : [];
                  }
                }, w.filter.ID = function(a) {
                  var b = a.replace(va, wa);
                  return function(a) {
                    return a.getAttribute("id") === b;
                  };
                })
                : (delete w.find.ID, w.filter.ID = function(a) {
                  var b = a.replace(va, wa);
                  return function(a) {
                    var c = "undefined" != typeof a.getAttributeNode &&
                      a.getAttributeNode("id");
                    return c && c.value === b;
                  };
                }),
              w.find.TAG = v.getElementsByTagName
                ? function(a, b) {
                  return "undefined" != typeof b.getElementsByTagName
                    ? b.getElementsByTagName(a)
                    : v.qsa ? b.querySelectorAll(a) : void 0;
                }
                : function(a, b) {
                  var c, d = [], e = 0, f = b.getElementsByTagName(a);
                  if ("*" === a) {
                    for (; c = f[e++];) 1 === c.nodeType && d.push(c);
                    return d;
                  }
                  return f;
                },
              w.find.CLASS = v.getElementsByClassName && function(a, b) {
                return I ? b.getElementsByClassName(a) : void 0;
              },
              K = [],
              J = [],
              (v.qsa = ra.test(d.querySelectorAll)) && (e(function(a) {
                H.appendChild(a).innerHTML = "<a id='" + N +
                  "'></a><select id='" + N +
                  "-\f]' msallowcapture=''><option selected=''></option></select>",
                  a.querySelectorAll("[msallowcapture^='']").length &&
                    J.push("[*^$]=" + ca + "*(?:''|\"\")"),
                  a.querySelectorAll("[selected]").length ||
                    J.push("\\[" + ca + "*(?:value|" + ba + ")"),
                  a.querySelectorAll("[id~=" + N + "-]").length ||
                    J.push("~="),
                  a.querySelectorAll(":checked").length || J.push(":checked"),
                  a.querySelectorAll("a#" + N + "+*").length ||
                    J.push(".#.+[+~]");
              }), e(function(a) {
                var b = d.createElement("input");
                b.setAttribute("type", "hidden"),
                  a.appendChild(b).setAttribute("name", "D"),
                  a.querySelectorAll("[name=d]").length &&
                    J.push("name" + ca + "*[*^$|!~]?="),
                  a.querySelectorAll(":enabled").length ||
                    J.push(":enabled", ":disabled"),
                  a.querySelectorAll("*,:x"),
                  J.push(",.*:");
              })),
              (v.matchesSelector = ra.test(
                L = H.matches || H.webkitMatchesSelector ||
                  H.mozMatchesSelector || H.oMatchesSelector ||
                  H.msMatchesSelector
              )) && e(function(a) {
                v.disconnectedMatch = L.call(a, "div"),
                  L.call(a, "[s!='']:x"),
                  K.push("!=", ga);
              }),
              J = J.length && new RegExp(J.join("|")),
              K = K.length && new RegExp(K.join("|")),
              b = ra.test(H.compareDocumentPosition),
              M = b || ra.test(H.contains)
                ? function(a, b) {
                  var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                  return a === d || !(!d || 1 !== d.nodeType || !(c.contains
                    ? c.contains(d)
                    : a.compareDocumentPosition &&
                      16 & a.compareDocumentPosition(d)));
                }
                : function(a, b) {
                  if (b) for (; b = b.parentNode;) if (b === a) return !0;
                  return !1;
                },
              U = b
                ? function(a, b) {
                  if (a === b) return E = !0, 0;
                  var c = !a.compareDocumentPosition -
                    !b.compareDocumentPosition;
                  return c
                    ? c
                    : (c = (a.ownerDocument || a) === (b.ownerDocument || b)
                      ? a.compareDocumentPosition(b)
                      : 1,
                      1 & c || !v.sortDetached &&
                        b.compareDocumentPosition(a) === c
                        ? a === d || a.ownerDocument === O && M(O, a)
                          ? -1
                          : b === d || b.ownerDocument === O && M(O, b)
                            ? 1
                            : D ? aa(D, a) - aa(D, b) : 0
                        : 4 & c ? -1 : 1);
                }
                : function(a, b) {
                  if (a === b) return E = !0, 0;
                  var c, e = 0, f = a.parentNode, h = b.parentNode, i = [a],
                    j = [b];
                  if (!f || !h) {
                    return a === d ? -1 : b === d
                      ? 1
                      : f ? -1 : h ? 1 : D ? aa(D, a) - aa(D, b) : 0;
                  }
                  if (f === h) return g(a, b);
                  for (c = a; c = c.parentNode;) i.unshift(c);
                  for (c = b; c = c.parentNode;) j.unshift(c);
                  for (; i[e] === j[e];) e++;
                  return e
                    ? g(i[e], j[e])
                    : i[e] === O ? -1 : j[e] === O ? 1 : 0;
                },
              d)
            : G;
        },
        b.matches = function(a, c) {
          return b(a, null, null, c);
        },
        b.matchesSelector = function(a, c) {
          if (
            (a.ownerDocument || a) !== G && F(a),
              c = c.replace(la, "='$1']"),
              !(!v.matchesSelector || !I || K && K.test(c) || J && J.test(c))
          ) {
            try {
              var d = L.call(a, c);
              if (
                d || v.disconnectedMatch || a.document &&
                11 !== a.document.nodeType
              ) {
                return d;
              }
            } catch (e) {}
          }
          return b(c, G, null, [a]).length > 0;
        },
        b.contains = function(a, b) {
          return (a.ownerDocument || a) !== G && F(a), M(a, b);
        },
        b.attr = function(a, b) {
          (a.ownerDocument || a) !== G && F(a);
          var c = w.attrHandle[b.toLowerCase()],
            d = c && W.call(w.attrHandle, b.toLowerCase())
              ? c(a, b, !I)
              : void 0;
          return void 0 !== d
            ? d
            : v.attributes || !I
              ? a.getAttribute(b)
              : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
        },
        b.error = function(a) {
          throw new Error("Syntax error, unrecognized expression: " + a);
        },
        b.uniqueSort = function(a) {
          var b, c = [], d = 0, e = 0;
          if (
            E = !v.detectDuplicates,
              D = !v.sortStable && a.slice(0),
              a.sort(U),
              E
          ) {
            for (; b = a[e++];) b === a[e] && (d = c.push(e));
            for (; d--;) a.splice(c[d], 1);
          }
          return D = null, a;
        },
        x = b.getText = function(a) {
          var b, c = "", d = 0, e = a.nodeType;
          if (e) {
            if (1 === e || 9 === e || 11 === e) {
              if ("string" == typeof a.textContent) return a.textContent;
              for (a = a.firstChild; a; a = a.nextSibling) c += x(a);
            } else if (3 === e || 4 === e) return a.nodeValue;
          } else for (; b = a[d++];) c += x(b);
          return c;
        },
        w = b.selectors = {
          cacheLength: 50,
          createPseudo: d,
          match: oa,
          attrHandle: {},
          find: {},
          relative: {
            ">": { dir: "parentNode", first: !0 },
            " ": { dir: "parentNode" },
            "+": { dir: "previousSibling", first: !0 },
            "~": { dir: "previousSibling" }
          },
          preFilter: { ATTR: function(a) {
            return a[1] = a[1].replace(va, wa),
              a[3] = (a[3] || a[4] || a[5] || "").replace(va, wa),
              "~=" === a[2] && (a[3] = " " + a[3] + " "),
              a.slice(0, 4);
          }, CHILD: function(a) {
            return a[1] = a[1].toLowerCase(),
              "nth" === a[1].slice(0, 3)
                ? (a[3] || b.error(a[0]),
                  a[4] = +(a[4]
                    ? a[5] + (a[6] || 1)
                    : 2 * ("even" === a[3] || "odd" === a[3])),
                  a[5] = +(a[7] + a[8] || "odd" === a[3]))
                : a[3] && b.error(a[0]),
              a;
          }, PSEUDO: function(a) {
            var b, c = !a[6] && a[2];
            return oa.CHILD.test(a[0])
              ? null
              : (a[3]
                ? a[2] = a[4] || a[5] || ""
                : c && ma.test(c) && (b = z(c, !0)) &&
                  (b = c.indexOf(")", c.length - b) - c.length) &&
                  (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)),
                a.slice(0, 3));
          } },
          filter: { TAG: function(a) {
            var b = a.replace(va, wa).toLowerCase();
            return "*" === a
              ? function() {
                return !0;
              }
              : function(a) {
                return a.nodeName && a.nodeName.toLowerCase() === b;
              };
          }, CLASS: function(a) {
            var b = R[a + " "];
            return b ||
              (b = new RegExp("(^|" + ca + ")" + a + "(" + ca + "|$)")) &&
              R(a, function(a) {
                return b.test(
                  "string" == typeof a.className && a.className ||
                    "undefined" != typeof a.getAttribute &&
                    a.getAttribute("class") || ""
                );
              });
          }, ATTR: function(a, c, d) {
            return function(e) {
              var f = b.attr(e, a);
              return null == f
                ? "!=" === c
                : c
                  ? (f += "",
                    "=" === c
                      ? f === d
                      : "!=" === c ? f !== d : "^=" === c
                        ? d && 0 === f.indexOf(d)
                        : "*=" === c ? d && f.indexOf(d) > -1 : "$=" === c
                          ? d && f.slice(-d.length) === d
                          : "~=" === c
                            ? (" " + f.replace(ha, " ") + " ").indexOf(d) > -1
                            : "|=" === c
                              ? f === d || f.slice(0, d.length + 1) === d + "-"
                              : !1)
                  : !0;
            };
          }, CHILD: function(a, b, c, d, e) {
            var f = "nth" !== a.slice(0, 3), g = "last" !== a.slice(-4),
              h = "of-type" === b;
            return 1 === d && 0 === e
              ? function(a) {
                return !!a.parentNode;
              }
              : function(b, c, i) {
                var j, k, l, m, n, o, p = f !== g
                  ? "nextSibling"
                  : "previousSibling", q = b.parentNode,
                  r = h && b.nodeName.toLowerCase(), s = !i && !h;
                if (q) {
                  if (f) {
                    for (; p;) {
                      for (l = b; l = l[p];) {
                        if (
                          h
                            ? l.nodeName.toLowerCase() === r
                            : 1 === l.nodeType
                        ) {
                          return !1;
                        }
                      }
                      o = p = "only" === a && !o && "nextSibling";
                    }
                    return !0;
                  }
                  if (o = [g ? q.firstChild : q.lastChild], g && s) {
                    for (
                      k = q[N] || (q[N] = {}),
                        j = k[a] || [],
                        n = j[0] === P && j[1],
                        m = j[0] === P && j[2],
                        l = n && q.childNodes[n];
                      l = ++n && l && l[p] || (m = n = 0) || o.pop();
                    ) {
                      if (1 === l.nodeType && ++m && l === b) {
                        k[a] = [P, n, m];
                        break;
                      }
                    }
                  } else if (
                    s && (j = (b[N] || (b[N] = {}))[a]) && j[0] === P
                  ) {
                    m = j[1];
                  } else {
                    for (
                      ;
                      (l = ++n && l && l[p] || (m = n = 0) || o.pop()) && ((h
                        ? l.nodeName.toLowerCase() !== r
                        : 1 !== l.nodeType) || !++m ||
                        (s && ((l[N] || (l[N] = {}))[a] = [P, m]), l !== b));
                    );
                  }
                  return m -= e, m === d || m % d === 0 && m / d >= 0;
                }
              };
          }, PSEUDO: function(a, c) {
            var e,
              f = w.pseudos[a] || w.setFilters[a.toLowerCase()] ||
                b.error("unsupported pseudo: " + a);
            return f[N]
              ? f(c)
              : f.length > 1
                ? (e = [a, a, "", c],
                  w.setFilters.hasOwnProperty(a.toLowerCase())
                    ? d(function(a, b) {
                      for (
                        var d, e = f(a, c), g = e.length;
                        g--;
                      ) {
                        d = aa(a, e[g]),
                          a[d] = !(b[d] = e[g]);
                      }
                    })
                    : function(a) {
                      return f(a, 0, e);
                    })
                : f;
          } },
          pseudos: { not: d(function(a) {
            var b = [], c = [], e = A(a.replace(ia, "$1"));
            return e[N]
              ? d(function(a, b, c, d) {
                for (
                  var f, g = e(a, null, d, []), h = a.length;
                  h--;
                ) {
                  (f = g[h]) && (a[h] = !(b[h] = f));
                }
              })
              : function(a, d, f) {
                return b[0] = a, e(b, null, f, c), b[0] = null, !c.pop();
              };
          }), has: d(function(a) {
            return function(c) {
              return b(a, c).length > 0;
            };
          }), contains: d(function(a) {
            return a = a.replace(va, wa), function(b) {
              return (b.textContent || b.innerText || x(b)).indexOf(a) > -1;
            };
          }), lang: d(function(a) {
            return na.test(a || "") || b.error("unsupported lang: " + a),
              a = a.replace(va, wa).toLowerCase(),
              function(b) {
                var c;
                do if (
                  c = I
                    ? b.lang
                    : b.getAttribute("xml:lang") || b.getAttribute("lang")
                ) {
                  return c = c.toLowerCase(),
                    c === a || 0 === c.indexOf(a + "-");
                } while ((b = b.parentNode) && 1 === b.nodeType);
                return !1;
              };
          }), target: function(b) {
            var c = a.location && a.location.hash;
            return c && c.slice(1) === b.id;
          }, root: function(a) {
            return a === H;
          }, focus: function(a) {
            return a === G.activeElement && (!G.hasFocus || G.hasFocus()) &&
              !!(a.type || a.href || ~a.tabIndex);
          }, enabled: function(a) {
            return a.disabled === !1;
          }, disabled: function(a) {
            return a.disabled === !0;
          }, checked: function(a) {
            var b = a.nodeName.toLowerCase();
            return "input" === b && !!a.checked || "option" === b &&
              !!a.selected;
          }, selected: function(a) {
            return a.parentNode && a.parentNode.selectedIndex,
              a.selected === !0;
          }, empty: function(a) {
            for (a = a.firstChild; a; a = a.nextSibling) {if (a.nodeType < 6) {
                return !1;
              }}
            return !0;
          }, parent: function(a) {
            return !w.pseudos.empty(a);
          }, header: function(a) {
            return qa.test(a.nodeName);
          }, input: function(a) {
            return pa.test(a.nodeName);
          }, button: function(a) {
            var b = a.nodeName.toLowerCase();
            return "input" === b && "button" === a.type || "button" === b;
          }, text: function(a) {
            var b;
            return "input" === a.nodeName.toLowerCase() && "text" === a.type &&
              (null == (b = a.getAttribute("type")) ||
                "text" === b.toLowerCase());
          }, first: j(function() {
            return [0];
          }), last: j(function(a, b) {
            return [b - 1];
          }), eq: j(function(a, b, c) {
            return [0 > c
              ? c + b
              : c];
          }), even: j(function(a, b) {
            for (var c = 0; b > c; c += 2) a.push(c);
            return a;
          }), odd: j(function(a, b) {
            for (var c = 1; b > c; c += 2) a.push(c);
            return a;
          }), lt: j(function(a, b, c) {
            for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
            return a;
          }), gt: j(function(a, b, c) {
            for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
            return a;
          }) }
        },
        w.pseudos.nth = w.pseudos.eq;
      for (
        u in {
          radio: !0,
          checkbox: !0,
          file: !0,
          password: !0,
          image: !0
        }
      ) {
        w.pseudos[u] = h(u);
      }
      for (u in { submit: !0, reset: !0 }) w.pseudos[u] = i(u);
      return l.prototype = w.filters = w.pseudos,
        w.setFilters = new l(),
        z = b.tokenize = function(a, c) {
          var d, e, f, g, h, i, j, k = S[a + " "];
          if (k) return c ? 0 : k.slice(0);
          for (h = a, i = [], j = w.preFilter; h;) {
            (!d || (e = ja.exec(h))) &&
              (e && (h = h.slice(e[0].length) || h), i.push(f = [])),
              d = !1,
              (e = ka.exec(h)) && (d = e.shift(),
                f.push({ value: d, type: e[0].replace(ia, " ") }),
                h = h.slice(d.length));
            for (g in w.filter) {
              !(e = oa[g].exec(h)) || j[g] && !(e = j[g](e)) || (d = e.shift(),
                f.push({ value: d, type: g, matches: e }),
                h = h.slice(d.length));
            }
            if (!d) break;
          }
          return c ? h.length : h ? b.error(a) : S(a, i).slice(0);
        },
        A = b.compile = function(a, b) {
          var c, d = [], e = [], f = T[a + " "];
          if (!f) {
            for (b || (b = z(a)), c = b.length; c--;) {
              f = s(b[c]),
                f[N] ? d.push(f) : e.push(f);
            }
            f = T(a, t(e, d)),
              f.selector = a;
          }
          return f;
        },
        B = b.select = function(a, b, c, d) {
          var e, f, g, h, i, j = "function" == typeof a && a,
            l = !d && z(a = j.selector || a);
          if (c = c || [], 1 === l.length) {
            if (
              f = l[0] = l[0].slice(0),
                f.length > 2 && "ID" === (g = f[0]).type && v.getById &&
                  9 === b.nodeType && I && w.relative[f[1].type]
            ) {
              if (
                b = (w.find.ID(g.matches[0].replace(va, wa), b) || [])[0],
                  !b
              ) {
                return c;
              }
              j && (b = b.parentNode),
                a = a.slice(f.shift().value.length);
            }
            for (
              e = oa.needsContext.test(a) ? 0 : f.length;
              e-- && (g = f[e], !w.relative[h = g.type]);
            ) {
              if (
                (i = w.find[h]) && (d = i(
                  g.matches[0].replace(va, wa),
                  ta.test(f[0].type) && k(b.parentNode) || b
                ))
              ) {
                if (
                  f.splice(e, 1),
                    a = d.length && m(f),
                    !a
                ) {
                  return $.apply(c, d), c;
                }
                break;
              }
            }
          }
          return (j || A(a, l))(
            d,
            b,
            !I,
            c,
            ta.test(a) && k(b.parentNode) || b
          ),
            c;
        },
        v.sortStable = N.split("").sort(U).join("") === N,
        v.detectDuplicates = !!E,
        F(),
        v.sortDetached = e(function(a) {
          return 1 & a.compareDocumentPosition(G.createElement("div"));
        }),
        e(function(a) {
          return a.innerHTML = "<a href='#'></a>",
            "#" === a.firstChild.getAttribute("href");
        }) || f("type|href|height|width", function(a, b, c) {
          return c ? void 0
            : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
        }),
        v.attributes && e(function(a) {
          return a.innerHTML = "<input/>",
            a.firstChild.setAttribute("value", ""),
            "" === a.firstChild.getAttribute("value");
        }) || f("value", function(a, b, c) {
          return c || "input" !== a.nodeName.toLowerCase() ? void 0
            : a.defaultValue;
        }),
        e(function(a) {
          return null == a.getAttribute("disabled");
        }) || f(ba, function(a, b, c) {
          var d;
          return c ? void 0 : a[b] === !0
            ? b.toLowerCase()
            : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
        }),
        b;
    }(a);
    _.find = ea,
      _.expr = ea.selectors,
      _.expr[":"] = _.expr.pseudos,
      _.unique = ea.uniqueSort,
      _.text = ea.getText,
      _.isXMLDoc = ea.isXML,
      _.contains = ea.contains;
    var fa = _.expr.match.needsContext, ga = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
      ha = /^.[^:#\[\.,]*$/;
    _.filter = function(a, b, c) {
      var d = b[0];
      return c && (a = ":not(" + a + ")"),
        1 === b.length && 1 === d.nodeType
          ? _.find.matchesSelector(d, a) ? [d] : []
          : _.find.matches(a, _.grep(b, function(a) {
            return 1 === a.nodeType;
          }));
    },
      _.fn.extend({ find: function(a) {
        var b, c = this.length, d = [], e = this;
        if ("string" != typeof a) {
          return this.pushStack(_(a).filter(function() {
            for (b = 0; c > b; b++) if (_.contains(e[b], this)) return !0;
          }));
        }
        for (b = 0; c > b; b++) _.find(a, e[b], d);
        return d = this.pushStack(c > 1 ? _.unique(d) : d),
          d.selector = this.selector ? this.selector + " " + a : a,
          d;
      }, filter: function(a) {
        return this.pushStack(d(this, a || [], !1));
      }, not: function(a) {
        return this.pushStack(d(this, a || [], !0));
      }, is: function(a) {
        return !!d(
          this,
          "string" == typeof a && fa.test(a) ? _(a) : a || [],
          !1
        ).length;
      } });
    var ia, ja = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
      ka = _.fn.init = function(a, b) {
        var c, d;
        if (!a) return this;
        if ("string" == typeof a) {
          if (
            c = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3
              ? [null, a, null]
              : ja.exec(a),
              !c || !c[1] && b
          ) {
            return !b || b.jquery ? (b || ia).find(a)
              : this.constructor(b).find(a);
          }
          if (c[1]) {
            if (
              b = b instanceof _ ? b[0] : b,
                _.merge(
                  this,
                  _.parseHTML(
                    c[1],
                    b && b.nodeType ? b.ownerDocument || b : Z,
                    !0
                  )
                ),
                ga.test(c[1]) && _.isPlainObject(b)
            ) {
              for (c in b) {
                _.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
              }
            }
            return this;
          }
          return d = Z.getElementById(c[2]),
            d && d.parentNode && (this.length = 1, this[0] = d),
            this.context = Z,
            this.selector = a,
            this;
        }
        return a.nodeType ? (this.context = this[0] = a, this.length = 1, this)
          : _.isFunction(a)
            ? "undefined" != typeof ia.ready ? ia.ready(a) : a(_)
            : (void 0 !== a.selector &&
              (this.selector = a.selector, this.context = a.context),
              _.makeArray(a, this));
      };
    ka.prototype = _.fn,
      ia = _(Z);
    var la = /^(?:parents|prev(?:Until|All))/,
      ma = { children: !0, contents: !0, next: !0, prev: !0 };
    _.extend({ dir: function(a, b, c) {
      for (var d = [], e = void 0 !== c; (a = a[b]) && 9 !== a.nodeType;) {
        if (1 === a.nodeType) {
          if (e && _(a).is(c)) break;
          d.push(a);
        }
      }
      return d;
    }, sibling: function(a, b) {
      for (var c = []; a; a = a.nextSibling) {
        1 === a.nodeType && a !== b && c.push(a);
      }
      return c;
    } }),
      _.fn.extend({ has: function(a) {
        var b = _(a, this), c = b.length;
        return this.filter(function() {
          for (var a = 0; c > a; a++) if (_.contains(this, b[a])) return !0;
        });
      }, closest: function(a, b) {
        for (
          var c, d = 0, e = this.length, f = [],
            g = fa.test(a) || "string" != typeof a ? _(a, b || this.context)
              : 0;
          e > d;
          d++
        ) {
          for (c = this[d]; c && c !== b; c = c.parentNode) {
            if (
              c.nodeType < 11 && (g
                ? g.index(c) > -1
                : 1 === c.nodeType && _.find.matchesSelector(c, a))
            ) {
              f.push(c);
              break;
            }
          }
        }
        return this.pushStack(f.length > 1 ? _.unique(f) : f);
      }, index: function(a) {
        return a
          ? "string" == typeof a ? U.call(_(a), this[0])
            : U.call(this, a.jquery ? a[0] : a)
          : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
      }, add: function(a, b) {
        return this.pushStack(_.unique(_.merge(this.get(), _(a, b))));
      }, addBack: function(a) {
        return this.add(
          null == a ? this.prevObject : this.prevObject.filter(a)
        );
      } }),
      _.each({ parent: function(a) {
        var b = a.parentNode;
        return b && 11 !== b.nodeType ? b : null;
      }, parents: function(a) {
        return _.dir(a, "parentNode");
      }, parentsUntil: function(a, b, c) {
        return _.dir(a, "parentNode", c);
      }, next: function(a) {
        return e(a, "nextSibling");
      }, prev: function(a) {
        return e(a, "previousSibling");
      }, nextAll: function(a) {
        return _.dir(a, "nextSibling");
      }, prevAll: function(a) {
        return _.dir(a, "previousSibling");
      }, nextUntil: function(a, b, c) {
        return _.dir(a, "nextSibling", c);
      }, prevUntil: function(a, b, c) {
        return _.dir(a, "previousSibling", c);
      }, siblings: function(a) {
        return _.sibling((a.parentNode || {}).firstChild, a);
      }, children: function(a) {
        return _.sibling(a.firstChild);
      }, contents: function(a) {
        return a.contentDocument || _.merge([], a.childNodes);
      } }, function(a, b) {
        _.fn[a] = function(c, d) {
          var e = _.map(this, b, c);
          return "Until" !== a.slice(-5) && (d = c),
            d && "string" == typeof d && (e = _.filter(d, e)),
            this.length > 1 &&
              (ma[a] || _.unique(e), la.test(a) && e.reverse()),
            this.pushStack(e);
        };
      });
    var na = /\S+/g, oa = {};
    _.Callbacks = function(a) {
      a = "string" == typeof a ? oa[a] || f(a) : _.extend({}, a);
      var b, c, d, e, g, h, i = [], j = !a.once && [], k = function(f) {
        for (
          b = a.memory && f,
            c = !0,
            h = e || 0,
            e = 0,
            g = i.length,
            d = !0;
          i && g > h;
          h++
        ) {
          if (i[h].apply(f[0], f[1]) === !1 && a.stopOnFalse) {
            b = !1;
            break;
          }
        }
        d = !1,
          i && (j ? j.length && k(j.shift()) : b ? i = [] : l.disable());
      }, l = { add: function() {
        if (i) {
          var c = i.length;
          !function f(b) {
            _.each(b, function(b, c) {
              var d = _.type(c);
              "function" === d ? a.unique && l.has(c) || i.push(c)
                : c && c.length && "string" !== d && f(c);
            });
          }(arguments),
            d ? g = i.length : b && (e = c, k(b));
        }
        return this;
      }, remove: function() {
        return i && _.each(arguments, function(a, b) {
          for (var c; (c = _.inArray(b, i, c)) > -1;) {
            i.splice(c, 1),
              d && (g >= c && g--, h >= c && h--);
          }
        }), this;
      }, has: function(a) {
        return a ? _.inArray(a, i) > -1 : !(!i || !i.length);
      }, empty: function() {
        return i = [], g = 0, this;
      }, disable: function() {
        return i = j = b = void 0, this;
      }, disabled: function() {
        return !i;
      }, lock: function() {
        return j = void 0, b || l.disable(), this;
      }, locked: function() {
        return !j;
      }, fireWith: function(a, b) {
        return !i || c && !j || (b = b || [],
          b = [a, b.slice ? b.slice() : b],
          d ? j.push(b) : k(b)),
          this;
      }, fire: function() {
        return l.fireWith(this, arguments), this;
      }, fired: function() {
        return !!c;
      } };
      return l;
    },
      _.extend({ Deferred: function(a) {
        var b = [
          ["resolve", "done", _.Callbacks("once memory"), "resolved"],
          ["reject", "fail", _.Callbacks("once memory"), "rejected"],
          ["notify", "progress", _.Callbacks("memory")]
        ], c = "pending", d = { state: function() {
          return c;
        }, always: function() {
          return e.done(arguments).fail(arguments), this;
        }, then: function() {
          var a = arguments;
          return _.Deferred(function(c) {
            _.each(b, function(b, f) {
              var g = _.isFunction(a[b]) && a[b];
              e[f[1]](function() {
                var a = g && g.apply(this, arguments);
                a && _.isFunction(a.promise)
                  ? a.promise().done(c.resolve).fail(c.reject).progress(
                    c.notify
                  )
                  : c[f[0] + "With"](
                    this === d ? c.promise() : this,
                    g ? [a] : arguments
                  );
              });
            }),
              a = null;
          }).promise();
        }, promise: function(a) {
          return null != a ? _.extend(a, d) : d;
        } }, e = {};
        return d.pipe = d.then, _.each(b, function(a, f) {
          var g = f[2], h = f[3];
          d[f[1]] = g.add,
            h && g.add(function() {
              c = h;
            }, b[1 ^ a][2].disable, b[2][2].lock),
            e[f[0]] = function() {
              return e[f[0] + "With"](this === e ? d : this, arguments), this;
            },
            e[f[0] + "With"] = g.fireWith;
        }), d.promise(e), a && a.call(e, e), e;
      }, when: function(a) {
        var b, c, d, e = 0, f = R.call(arguments), g = f.length,
          h = 1 !== g || a && _.isFunction(a.promise) ? g : 0,
          i = 1 === h ? a : _.Deferred(), j = function(a, c, d) {
            return function(e) {
              c[a] = this,
                d[a] = arguments.length > 1 ? R.call(arguments) : e,
                d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d);
            };
          };
        if (g > 1) {
          for (
            b = new Array(g),
              c = new Array(g),
              d = new Array(g);
            g > e;
            e++
          ) {
            f[e] && _.isFunction(f[e].promise)
              ? f[e].promise().done(j(e, d, f)).fail(i.reject).progress(
                j(e, c, b)
              )
              : --h;
          }
        }
        return h || i.resolveWith(d, f), i.promise();
      } });
    var pa;
    _.fn.ready = function(a) {
      return _.ready.promise().done(a), this;
    },
      _.extend({ isReady: !1, readyWait: 1, holdReady: function(a) {
        a ? _.readyWait++ : _.ready(!0);
      }, ready: function(a) {
        (a === !0 ? --_.readyWait : _.isReady) || (_.isReady = !0,
          a !== !0 && --_.readyWait > 0 || (pa.resolveWith(Z, [_]),
            _.fn.triggerHandler &&
              (_(Z).triggerHandler("ready"), _(Z).off("ready"))));
      } }),
      _.ready.promise = function(b) {
        return pa || (pa = _.Deferred(),
          "complete" === Z.readyState ? setTimeout(_.ready)
            : (Z.addEventListener("DOMContentLoaded", g, !1),
              a.addEventListener("load", g, !1))),
          pa.promise(b);
      },
      _.ready.promise();
    var qa = _.access = function(a, b, c, d, e, f, g) {
      var h = 0, i = a.length, j = null == c;
      if ("object" === _.type(c)) {
        e = !0;
        for (h in c) _.access(a, b, h, c[h], !0, f, g);
      } else if (
        void 0 !== d && (e = !0,
          _.isFunction(d) || (g = !0),
          j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
            return j.call(_(a), c);
          })),
          b)
      ) {
        for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
      }
      return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
    };
    _.acceptData = function(a) {
      return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
    },
      h.uid = 1,
      h.accepts = _.acceptData,
      h.prototype = { key: function(a) {
        if (!h.accepts(a)) return 0;
        var b = {}, c = a[this.expando];
        if (!c) {
          c = h.uid++;
          try {
            b[this.expando] = { value: c },
              Object.defineProperties(a, b);
          } catch (d) {
            b[this.expando] = c,
              _.extend(a, b);
          }
        }
        return this.cache[c] || (this.cache[c] = {}), c;
      }, set: function(a, b, c) {
        var d, e = this.key(a), f = this.cache[e];
        if ("string" == typeof b) f[b] = c;
        else if (_.isEmptyObject(f)) _.extend(this.cache[e], b);
        else for (d in b) f[d] = b[d];
        return f;
      }, get: function(a, b) {
        var c = this.cache[this.key(a)];
        return void 0 === b ? c : c[b];
      }, access: function(a, b, c) {
        var d;
        return void 0 === b || b && "string" == typeof b && void 0 === c
          ? (d = this.get(a, b),
            void 0 !== d ? d : this.get(a, _.camelCase(b)))
          : (this.set(a, b, c), void 0 !== c ? c : b);
      }, remove: function(a, b) {
        var c, d, e, f = this.key(a), g = this.cache[f];
        if (void 0 === b) this.cache[f] = {};
        else {
          _.isArray(b) ? d = b.concat(b.map(_.camelCase))
            : (e = _.camelCase(b),
              b in g ? d = [b, e]
                : (d = e, d = d in g ? [d] : d.match(na) || [])),
            c = d.length;
          for (; c--;) delete g[d[c]];
        }
      }, hasData: function(a) {
        return !_.isEmptyObject(this.cache[a[this.expando]] || {});
      }, discard: function(a) {
        a[this.expando] && delete this.cache[a[this.expando]];
      } };
    var ra = new h(), sa = new h(), ta = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      ua = /([A-Z])/g;
    _.extend({ hasData: function(a) {
      return sa.hasData(a) || ra.hasData(a);
    }, data: function(a, b, c) {
      return sa.access(a, b, c);
    }, removeData: function(a, b) {
      sa.remove(a, b);
    }, _data: function(a, b, c) {
      return ra.access(a, b, c);
    }, _removeData: function(a, b) {
      ra.remove(a, b);
    } }),
      _.fn.extend({ data: function(a, b) {
        var c, d, e, f = this[0], g = f && f.attributes;
        if (void 0 === a) {
          if (
            this.length &&
            (e = sa.get(f), 1 === f.nodeType && !ra.get(f, "hasDataAttrs"))
          ) {
            for (c = g.length; c--;) {
              g[c] && (d = g[c].name,
                0 === d.indexOf("data-") &&
                  (d = _.camelCase(d.slice(5)), i(f, d, e[d])));
            }
            ra.set(f, "hasDataAttrs", !0);
          }
          return e;
        }
        return "object" == typeof a
          ? this.each(function() {
            sa.set(this, a);
          })
          : qa(this, function(b) {
            var c, d = _.camelCase(a);
            if (f && void 0 === b) {
              if (c = sa.get(f, a), void 0 !== c) return c;
              if (c = sa.get(f, d), void 0 !== c) return c;
              if (c = i(f, d, void 0), void 0 !== c) return c;
            } else {
              this.each(function() {
                var c = sa.get(this, d);
                sa.set(this, d, b),
                  -1 !== a.indexOf("-") && void 0 !== c && sa.set(this, a, b);
              });
            }
          }, null, b, arguments.length > 1, null, !0);
      }, removeData: function(a) {
        return this.each(function() {
          sa.remove(this, a);
        });
      } }),
      _.extend({ queue: function(a, b, c) {
        var d;
        return a
          ? (b = (b || "fx") + "queue",
            d = ra.get(a, b),
            c &&
              (!d || _.isArray(c) ? d = ra.access(a, b, _.makeArray(c))
                : d.push(c)),
            d || [])
          : void 0;
      }, dequeue: function(a, b) {
        b = b || "fx";
        var c = _.queue(a, b), d = c.length, e = c.shift(),
          f = _._queueHooks(a, b), g = function() {
            _.dequeue(a, b);
          };
        "inprogress" === e && (e = c.shift(), d--),
          e && ("fx" === b && c.unshift("inprogress"),
            delete f.stop,
            e.call(a, g, f)),
          !d && f && f.empty.fire();
      }, _queueHooks: function(a, b) {
        var c = b + "queueHooks";
        return ra.get(a, c) ||
          ra.access(a, c, { empty: _.Callbacks("once memory").add(function() {
            ra.remove(a, [b + "queue", c]);
          }) });
      } }),
      _.fn.extend({ queue: function(a, b) {
        var c = 2;
        return "string" != typeof a && (b = a, a = "fx", c--),
          arguments.length < c ? _.queue(this[0], a)
            : void 0 === b ? this : this.each(function() {
              var c = _.queue(this, a, b);
              _._queueHooks(this, a),
                "fx" === a && "inprogress" !== c[0] && _.dequeue(this, a);
            });
      }, dequeue: function(a) {
        return this.each(function() {
          _.dequeue(this, a);
        });
      }, clearQueue: function(a) {
        return this.queue(a || "fx", []);
      }, promise: function(a, b) {
        var c, d = 1, e = _.Deferred(), f = this, g = this.length,
          h = function() {
            --d || e.resolveWith(f, [f]);
          };
        for (
          "string" != typeof a && (b = a, a = void 0),
            a = a || "fx";
          g--;
        ) {
          c = ra.get(f[g], a + "queueHooks"),
            c && c.empty && (d++, c.empty.add(h));
        }
        return h(), e.promise(b);
      } });
    var va = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      wa = ["Top", "Right", "Bottom", "Left"], xa = function(a, b) {
        return a = b || a,
          "none" === _.css(a, "display") || !_.contains(a.ownerDocument, a);
      }, ya = /^(?:checkbox|radio)$/i;
    !function() {
      var a = Z.createDocumentFragment(),
        b = a.appendChild(Z.createElement("div")),
        c = Z.createElement("input");
      c.setAttribute("type", "radio"),
        c.setAttribute("checked", "checked"),
        c.setAttribute("name", "t"),
        b.appendChild(c),
        Y.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked,
        b.innerHTML = "<textarea>x</textarea>",
        Y.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue;
    }();
    var za = "undefined";
    Y.focusinBubbles = "onfocusin" in a;
    var Aa = /^key/, Ba = /^(?:mouse|pointer|contextmenu)|click/,
      Ca = /^(?:focusinfocus|focusoutblur)$/, Da = /^([^.]*)(?:\.(.+)|)$/;
    _.event = {
      global: {},
      add: function(a, b, c, d, e) {
        var f, g, h, i, j, k, l, m, n, o, p, q = ra.get(a);
        if (q) {
          for (
            c.handler && (f = c, c = f.handler, e = f.selector),
              c.guid || (c.guid = _.guid++),
              (i = q.events) || (i = q.events = {}),
              (g = q.handle) || (g = q.handle = function(b) {
                return typeof _ !== za && _.event.triggered !== b.type
                  ? _.event.dispatch.apply(a, arguments) : void 0;
              }),
              b = (b || "").match(na) || [""],
              j = b.length;
            j--;
          ) {
            h = Da.exec(b[j]) || [],
              n = p = h[1],
              o = (h[2] || "").split(".").sort(),
              n && (l = _.event.special[n] || {},
                n = (e ? l.delegateType : l.bindType) || n,
                l = _.event.special[n] || {},
                k = _.extend(
                  {
                    type: n,
                    origType: p,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && _.expr.match.needsContext.test(e),
                    namespace: o.join(".")
                  },
                  f
                ),
                (m = i[n]) || (m = i[n] = [],
                  m.delegateCount = 0,
                  l.setup && l.setup.call(a, d, o, g) !== !1 ||
                    a.addEventListener && a.addEventListener(n, g, !1)),
                l.add && (l.add.call(a, k),
                  k.handler.guid || (k.handler.guid = c.guid)),
                e
                  ? m.splice(m.delegateCount++, 0, k)
                  : m.push(k),
                _.event.global[n] = !0);
          }
        }
      },
      remove: function(a, b, c, d, e) {
        var f, g, h, i, j, k, l, m, n, o, p, q = ra.hasData(a) && ra.get(a);
        if (q && (i = q.events)) {
          for (b = (b || "").match(na) || [""], j = b.length; j--;) {
            if (
              h = Da.exec(b[j]) || [],
                n = p = h[1],
                o = (h[2] || "").split(".").sort(),
                n
            ) {
              for (
                l = _.event.special[n] || {},
                  n = (d ? l.delegateType : l.bindType) || n,
                  m = i[n] || [],
                  h = h[2] && new RegExp(
                    "(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"
                  ),
                  g = f = m.length;
                f--;
              ) {
                k = m[f],
                  !e && p !== k.origType || c && c.guid !== k.guid || h &&
                    !h.test(k.namespace) || d && d !== k.selector &&
                    ("**" !== d || !k.selector) || (m.splice(f, 1),
                      k.selector && m.delegateCount--,
                      l.remove && l.remove.call(a, k));
              }
              g && !m.length &&
                (l.teardown && l.teardown.call(a, o, q.handle) !== !1 ||
                  _.removeEvent(a, n, q.handle), delete i[n]);
            } else for (n in i) _.event.remove(a, n + b[j], c, d, !0);
          }
          _.isEmptyObject(i) && (delete q.handle, ra.remove(a, "events"));
        }
      },
      trigger: function(b, c, d, e) {
        var f, g, h, i, j, k, l, m = [d || Z], n = X.call(b, "type")
          ? b.type
          : b, o = X.call(b, "namespace") ? b.namespace.split(".") : [];
        if (
          g = h = d = d || Z,
            3 !== d.nodeType && 8 !== d.nodeType &&
              !Ca.test(n + _.event.triggered) &&
              (n.indexOf(".") >= 0 &&
                (o = n.split("."), n = o.shift(), o.sort()),
                j = n.indexOf(":") < 0 && "on" + n,
                b = b[_.expando]
                  ? b
                  : new _.Event(n, "object" == typeof b && b),
                b.isTrigger = e ? 2 : 3,
                b.namespace = o.join("."),
                b.namespace_re = b.namespace
                  ? new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)")
                  : null,
                b.result = void 0,
                b.target || (b.target = d),
                c = null == c ? [b] : _.makeArray(c, [b]),
                l = _.event.special[n] || {},
                e || !l.trigger || l.trigger.apply(d, c) !== !1)
        ) {
          if (!e && !l.noBubble && !_.isWindow(d)) {
            for (
              i = l.delegateType || n,
                Ca.test(i + n) || (g = g.parentNode);
              g;
              g = g.parentNode
            ) {
              m.push(g),
                h = g;
            }
            h === (d.ownerDocument || Z) &&
              m.push(h.defaultView || h.parentWindow || a);
          }
          for (f = 0; (g = m[f++]) && !b.isPropagationStopped();) {
            b.type = f > 1 ? i : l.bindType || n,
              k = (ra.get(g, "events") || {})[b.type] && ra.get(g, "handle"),
              k && k.apply(g, c),
              k = j && g[j],
              k && k.apply && _.acceptData(g) && (b.result = k.apply(g, c),
                b.result === !1 && b.preventDefault());
          }
          return b.type = n,
            e || b.isDefaultPrevented() || l._default &&
              l._default.apply(m.pop(), c) !== !1 || !_.acceptData(d) || j &&
              _.isFunction(d[n]) && !_.isWindow(d) && (h = d[j],
                h && (d[j] = null),
                _.event.triggered = n,
                d[n](),
                _.event.triggered = void 0,
                h && (d[j] = h)),
            b.result;
        }
      },
      dispatch: function(a) {
        a = _.event.fix(a);
        var b, c, d, e, f, g = [], h = R.call(arguments),
          i = (ra.get(this, "events") || {})[a.type] || [],
          j = _.event.special[a.type] || {};
        if (
          h[0] = a,
            a.delegateTarget = this,
            !j.preDispatch || j.preDispatch.call(this, a) !== !1
        ) {
          for (
            g = _.event.handlers.call(this, a, i),
              b = 0;
            (e = g[b++]) && !a.isPropagationStopped();
          ) {
            for (
              a.currentTarget = e.elem,
                c = 0;
              (f = e.handlers[c++]) && !a.isImmediatePropagationStopped();
            ) {
              (!a.namespace_re || a.namespace_re.test(f.namespace)) &&
                (a.handleObj = f,
                  a.data = f.data,
                  d = ((_.event.special[f.origType] || {}).handle || f.handler)
                    .apply(e.elem, h),
                  void 0 !== d && (a.result = d) === !1 &&
                    (a.preventDefault(), a.stopPropagation()));
            }
          }
          return j.postDispatch && j.postDispatch.call(this, a), a.result;
        }
      },
      handlers: function(a, b) {
        var c, d, e, f, g = [], h = b.delegateCount, i = a.target;
        if (h && i.nodeType && (!a.button || "click" !== a.type)) {
          for (
            ;
            i !== this;
            i = i.parentNode || this
          ) {
            if (i.disabled !== !0 || "click" !== a.type) {
              for (d = [], c = 0; h > c; c++) {
                f = b[c],
                  e = f.selector + " ",
                  void 0 === d[e] && (d[e] = f.needsContext
                    ? _(e, this).index(i) >= 0
                    : _.find(e, this, null, [i]).length),
                  d[e] && d.push(f);
              }
              d.length && g.push({ elem: i, handlers: d });
            }
          }
        }
        return h < b.length && g.push({ elem: this, handlers: b.slice(h) }), g;
      },
      props:
        "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which"
          .split(" "),
      fixHooks: {},
      keyHooks: {
        props: "char charCode key keyCode".split(" "),
        filter: function(a, b) {
          return null == a.which &&
            (a.which = null != b.charCode ? b.charCode : b.keyCode),
            a;
        }
      },
      mouseHooks: {
        props:
          "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement"
            .split(" "),
        filter: function(a, b) {
          var c, d, e, f = b.button;
          return null == a.pageX && null != b.clientX &&
            (c = a.target.ownerDocument || Z,
              d = c.documentElement,
              e = c.body,
              a.pageX = b.clientX +
                (d && d.scrollLeft || e && e.scrollLeft || 0) -
                (d && d.clientLeft || e && e.clientLeft || 0),
              a.pageY = b.clientY +
                (d && d.scrollTop || e && e.scrollTop || 0) -
                (d && d.clientTop || e && e.clientTop || 0)),
            a.which || void 0 === f ||
              (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0),
            a;
        }
      },
      fix: function(a) {
        if (a[_.expando]) return a;
        var b, c, d, e = a.type, f = a, g = this.fixHooks[e];
        for (
          g || (this.fixHooks[e] = g = Ba.test(e)
            ? this.mouseHooks
            : Aa.test(e) ? this.keyHooks : {}),
            d = g.props ? this.props.concat(g.props) : this.props,
            a = new _.Event(f),
            b = d.length;
          b--;
        ) {
          c = d[b],
            a[c] = f[c];
        }
        return a.target || (a.target = Z),
          3 === a.target.nodeType && (a.target = a.target.parentNode),
          g.filter ? g.filter(a, f) : a;
      },
      special: { load: { noBubble: !0 }, focus: { trigger: function() {
        return this !== l() && this.focus ? (this.focus(), !1) : void 0;
      }, delegateType: "focusin" }, blur: { trigger: function() {
        return this === l() && this.blur ? (this.blur(), !1) : void 0;
      }, delegateType: "focusout" }, click: { trigger: function() {
        return "checkbox" === this.type && this.click &&
          _.nodeName(this, "input") ? (this.click(), !1) : void 0;
      }, _default: function(a) {
        return _.nodeName(a.target, "a");
      } }, beforeunload: { postDispatch: function(a) {
        void 0 !== a.result && a.originalEvent &&
          (a.originalEvent.returnValue = a.result);
      } } },
      simulate: function(a, b, c, d) {
        var e = _.extend(
          new _.Event(),
          c,
          { type: a, isSimulated: !0, originalEvent: {} }
        );
        d ? _.event.trigger(e, null, b) : _.event.dispatch.call(b, e),
          e.isDefaultPrevented() && c.preventDefault();
      }
    },
      _.removeEvent = function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1);
      },
      _.Event = function(a, b) {
        return this instanceof _.Event
          ? (a && a.type
            ? (this.originalEvent = a,
              this.type = a.type,
              this.isDefaultPrevented =
                a.defaultPrevented || void 0 === a.defaultPrevented &&
                  a.returnValue === !1
                  ? j
                  : k)
            : this.type = a,
            b && _.extend(this, b),
            this.timeStamp = a && a.timeStamp || _.now(),
            void (this[_.expando] = !0))
          : new _.Event(a, b);
      },
      _.Event.prototype = {
        isDefaultPrevented: k,
        isPropagationStopped: k,
        isImmediatePropagationStopped: k,
        preventDefault: function() {
          var a = this.originalEvent;
          this.isDefaultPrevented = j,
            a && a.preventDefault && a.preventDefault();
        },
        stopPropagation: function() {
          var a = this.originalEvent;
          this.isPropagationStopped = j,
            a && a.stopPropagation && a.stopPropagation();
        },
        stopImmediatePropagation: function() {
          var a = this.originalEvent;
          this.isImmediatePropagationStopped = j,
            a && a.stopImmediatePropagation && a.stopImmediatePropagation(),
            this.stopPropagation();
        }
      },
      _.each(
        {
          mouseenter: "mouseover",
          mouseleave: "mouseout",
          pointerenter: "pointerover",
          pointerleave: "pointerout"
        },
        function(a, b) {
          _.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
              var c, d = this, e = a.relatedTarget, f = a.handleObj;
              return (!e || e !== d && !_.contains(d, e)) &&
                (a.type = f.origType,
                  c = f.handler.apply(this, arguments),
                  a.type = b),
                c;
            }
          };
        }
      ),
      Y.focusinBubbles ||
        _.each({ focus: "focusin", blur: "focusout" }, function(a, b) {
          var c = function(a) {
            _.event.simulate(b, a.target, _.event.fix(a), !0);
          };
          _.event.special[b] = { setup: function() {
            var d = this.ownerDocument || this, e = ra.access(d, b);
            e || d.addEventListener(a, c, !0),
              ra.access(d, b, (e || 0) + 1);
          }, teardown: function() {
            var d = this.ownerDocument || this, e = ra.access(d, b) - 1;
            e
              ? ra.access(d, b, e)
              : (d.removeEventListener(a, c, !0), ra.remove(d, b));
          } };
        }),
      _.fn.extend({ on: function(a, b, c, d, e) {
        var f, g;
        if ("object" == typeof a) {
          "string" != typeof b && (c = c || b, b = void 0);
          for (g in a) this.on(g, b, c, a[g], e);
          return this;
        }
        if (
          null == c && null == d
            ? (d = b, c = b = void 0)
            : null == d && ("string" == typeof b
              ? (d = c, c = void 0)
              : (d = c, c = b, b = void 0)),
            d === !1
        ) {
          d = k;
        } else if (!d) return this;
        return 1 === e && (f = d, d = function(a) {
          return _().off(a), f.apply(this, arguments);
        }, d.guid = f.guid || (f.guid = _.guid++)), this.each(function() {
          _.event.add(this, a, d, c, b);
        });
      }, one: function(a, b, c, d) {
        return this.on(a, b, c, d, 1);
      }, off: function(a, b, c) {
        var d, e;
        if (a && a.preventDefault && a.handleObj) {
          return d = a.handleObj,
            _(a.delegateTarget).off(
              d.namespace ? d.origType + "." + d.namespace : d.origType,
              d.selector,
              d.handler
            ),
            this;
        }
        if ("object" == typeof a) {
          for (e in a) this.off(e, b, a[e]);
          return this;
        }
        return (b === !1 || "function" == typeof b) && (c = b, b = void 0),
          c === !1 && (c = k),
          this.each(function() {
            _.event.remove(this, a, c, b);
          });
      }, trigger: function(a, b) {
        return this.each(function() {
          _.event.trigger(a, b, this);
        });
      }, triggerHandler: function(a, b) {
        var c = this[0];
        return c ? _.event.trigger(a, b, c, !0) : void 0;
      } });
    var Ea =
      /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
      Fa = /<([\w:]+)/, Ga = /<|&#?\w+;/, Ha = /<(?:script|style|link)/i,
      Ia = /checked\s*(?:[^=]|=\s*.checked.)/i,
      Ja = /^$|\/(?:java|ecma)script/i, Ka = /^true\/(.*)/,
      La = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Ma = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
      };
    Ma.optgroup = Ma.option,
      Ma.tbody = Ma.tfoot = Ma.colgroup = Ma.caption = Ma.thead,
      Ma.th = Ma.td,
      _.extend({ clone: function(a, b, c) {
        var d, e, f, g, h = a.cloneNode(!0),
          i = _.contains(a.ownerDocument, a);
        if (
          !(Y.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType ||
            _.isXMLDoc(a))
        ) {
          for (g = r(h), f = r(a), d = 0, e = f.length; e > d; d++) {
            s(
              f[d],
              g[d]
            );
          }
        }
        if (b) {
          if (c) {
            for (
              f = f || r(a),
                g = g || r(h),
                d = 0,
                e = f.length;
              e > d;
              d++
            ) {
              q(f[d], g[d]);
            }
          } else q(a, h);
        }
        return g = r(h, "script"),
          g.length > 0 && p(g, !i && r(a, "script")),
          h;
      }, buildFragment: function(a, b, c, d) {
        for (
          var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0,
            n = a.length;
          n > m;
          m++
        ) {
          if (e = a[m], e || 0 === e) {
            if ("object" === _.type(e)) {
              _.merge(
                l,
                e.nodeType ? [e] : e
              );
            } else if (Ga.test(e)) {
              for (
                f = f || k.appendChild(b.createElement("div")),
                  g = (Fa.exec(e) || ["", ""])[1].toLowerCase(),
                  h = Ma[g] || Ma._default,
                  f.innerHTML = h[1] + e.replace(Ea, "<$1></$2>") + h[2],
                  j = h[0];
                j--;
              ) {
                f = f.lastChild;
              }
              _.merge(l, f.childNodes),
                f = k.firstChild,
                f.textContent = "";
            } else l.push(b.createTextNode(e));
          }
        }
        for (k.textContent = "", m = 0; e = l[m++];) {
          if (
            (!d || -1 === _.inArray(e, d)) &&
            (i = _.contains(e.ownerDocument, e),
              f = r(k.appendChild(e), "script"),
              i && p(f),
              c)
          ) {
            for (j = 0; e = f[j++];) Ja.test(e.type || "") && c.push(e);
          }
        }
        return k;
      }, cleanData: function(a) {
        for (
          var b, c, d, e, f = _.event.special, g = 0;
          void 0 !== (c = a[g]);
          g++
        ) {
          if (_.acceptData(c) && (e = c[ra.expando], e && (b = ra.cache[e]))) {
            if (b.events) {
              for (d in b.events) {f[d] ? _.event.remove(c, d)
                  : _.removeEvent(c, d, b.handle);}
            }
            ra.cache[e] && delete ra.cache[e];
          }
          delete sa.cache[c[sa.expando]];
        }
      } }),
      _.fn.extend({ text: function(a) {
        return qa(this, function(a) {
          return void 0 === a ? _.text(this) : this.empty().each(function() {
            (1 === this.nodeType || 11 === this.nodeType ||
              9 === this.nodeType) && (this.textContent = a);
          });
        }, null, a, arguments.length);
      }, append: function() {
        return this.domManip(arguments, function(a) {
          if (
            1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType
          ) {
            var b = m(this, a);
            b.appendChild(a);
          }
        });
      }, prepend: function() {
        return this.domManip(arguments, function(a) {
          if (
            1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType
          ) {
            var b = m(this, a);
            b.insertBefore(a, b.firstChild);
          }
        });
      }, before: function() {
        return this.domManip(arguments, function(a) {
          this.parentNode && this.parentNode.insertBefore(a, this);
        });
      }, after: function() {
        return this.domManip(arguments, function(a) {
          this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
        });
      }, remove: function(a, b) {
        for (
          var c, d = a ? _.filter(a, this) : this, e = 0;
          null != (c = d[e]);
          e++
        ) {
          b || 1 !== c.nodeType || _.cleanData(r(c)),
            c.parentNode &&
              (b && _.contains(c.ownerDocument, c) && p(r(c, "script")),
                c.parentNode.removeChild(c));
        }
        return this;
      }, empty: function() {
        for (var a, b = 0; null != (a = this[b]); b++) {
          1 === a.nodeType && (_.cleanData(r(a, !1)), a.textContent = "");
        }
        return this;
      }, clone: function(a, b) {
        return a = null == a ? !1 : a,
          b = null == b ? a : b,
          this.map(function() {
            return _.clone(this, a, b);
          });
      }, html: function(a) {
        return qa(this, function(a) {
          var b = this[0] || {}, c = 0, d = this.length;
          if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
          if (
            "string" == typeof a && !Ha.test(a) &&
            !Ma[(Fa.exec(a) || ["", ""])[1].toLowerCase()]
          ) {
            a = a.replace(Ea, "<$1></$2>");
            try {
              for (; d > c; c++) {
                b = this[c] || {},
                  1 === b.nodeType && (_.cleanData(r(b, !1)), b.innerHTML = a);
              }
              b = 0;
            } catch (e) {}
          }
          b && this.empty().append(a);
        }, null, a, arguments.length);
      }, replaceWith: function() {
        var a = arguments[0];
        return this.domManip(arguments, function(b) {
          a = this.parentNode,
            _.cleanData(r(this)),
            a && a.replaceChild(b, this);
        }), a && (a.length || a.nodeType) ? this : this.remove();
      }, detach: function(a) {
        return this.remove(a, !0);
      }, domManip: function(a, b) {
        a = S.apply([], a);
        var c, d, e, f, g, h, i = 0, j = this.length, k = this, l = j - 1,
          m = a[0], p = _.isFunction(m);
        if (
          p || j > 1 && "string" == typeof m && !Y.checkClone && Ia.test(m)
        ) {
          return this.each(function(c) {
            var d = k.eq(c);
            p && (a[0] = m.call(this, c, d.html())),
              d.domManip(a, b);
          });
        }
        if (
          j && (c = _.buildFragment(a, this[0].ownerDocument, !1, this),
            d = c.firstChild,
            1 === c.childNodes.length && (c = d),
            d)
        ) {
          for (e = _.map(r(c, "script"), n), f = e.length; j > i; i++) {
            g = c,
              i !== l &&
                (g = _.clone(g, !0, !0), f && _.merge(e, r(g, "script"))),
              b.call(this[i], g, i);
          }
          if (f) {
            for (
              h = e[e.length - 1].ownerDocument,
                _.map(e, o),
                i = 0;
              f > i;
              i++
            ) {
              g = e[i],
                Ja.test(g.type || "") && !ra.access(g, "globalEval") &&
                  _.contains(h, g) && (g.src
                    ? _._evalUrl && _._evalUrl(g.src)
                    : _.globalEval(g.textContent.replace(La, "")));
            }
          }
        }
        return this;
      } }),
      _.each(
        {
          appendTo: "append",
          prependTo: "prepend",
          insertBefore: "before",
          insertAfter: "after",
          replaceAll: "replaceWith"
        },
        function(a, b) {
          _.fn[a] = function(a) {
            for (
              var c, d = [], e = _(a), f = e.length - 1, g = 0;
              f >= g;
              g++
            ) {
              c = g === f ? this : this.clone(!0),
                _(e[g])[b](c),
                T.apply(d, c.get());
            }
            return this.pushStack(d);
          };
        }
      );
    var Na, Oa = {}, Pa = /^margin/,
      Qa = new RegExp("^(" + va + ")(?!px)[a-z%]+$", "i"), Ra = function(b) {
        return b.ownerDocument.defaultView.opener
          ? b.ownerDocument.defaultView.getComputedStyle(b, null)
          : a.getComputedStyle(b, null);
      };
    !function() {
      function b() {
        g.style.cssText =
          "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",
          g.innerHTML = "",
          e.appendChild(f);
        var b = a.getComputedStyle(g, null);
        c = "1%" !== b.top,
          d = "4px" === b.width,
          e.removeChild(f);
      }
      var c, d, e = Z.documentElement, f = Z.createElement("div"),
        g = Z.createElement("div");
      g.style && (g.style.backgroundClip = "content-box",
        g.cloneNode(!0).style.backgroundClip = "",
        Y.clearCloneStyle = "content-box" === g.style.backgroundClip,
        f.style.cssText =
          "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",
        f.appendChild(g),
        a.getComputedStyle && _.extend(Y, { pixelPosition: function() {
          return b(), c;
        }, boxSizingReliable: function() {
          return null == d && b(), d;
        }, reliableMarginRight: function() {
          var b, c = g.appendChild(Z.createElement("div"));
          return c.style.cssText = g.style.cssText =
            "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
            c.style.marginRight = c.style.width = "0",
            g.style.width = "1px",
            e.appendChild(f),
            b = !parseFloat(a.getComputedStyle(c, null).marginRight),
            e.removeChild(f),
            g.removeChild(c),
            b;
        } }));
    }(),
      _.swap = function(a, b, c, d) {
        var e, f, g = {};
        for (f in b) {
          g[f] = a.style[f],
            a.style[f] = b[f];
        }
        e = c.apply(a, d || []);
        for (f in b) a.style[f] = g[f];
        return e;
      };
    var Sa = /^(none|table(?!-c[ea]).+)/,
      Ta = new RegExp("^(" + va + ")(.*)$", "i"),
      Ua = new RegExp("^([+-])=(" + va + ")", "i"),
      Va = { position: "absolute", visibility: "hidden", display: "block" },
      Wa = { letterSpacing: "0", fontWeight: "400" },
      Xa = ["Webkit", "O", "Moz", "ms"];
    _.extend({
      cssHooks: { opacity: { get: function(a, b) {
        if (b) {
          var c = v(a, "opacity");
          return "" === c ? "1" : c;
        }
      } } },
      cssNumber: {
        columnCount: !0,
        fillOpacity: !0,
        flexGrow: !0,
        flexShrink: !0,
        fontWeight: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0
      },
      cssProps: { "float": "cssFloat" },
      style: function(a, b, c, d) {
        if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
          var e, f, g, h = _.camelCase(b), i = a.style;
          return b = _.cssProps[h] || (_.cssProps[h] = x(i, h)),
            g = _.cssHooks[b] || _.cssHooks[h],
            void 0 === c
              ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b]
              : (f = typeof c,
                "string" === f && (e = Ua.exec(c)) &&
                  (c = (e[1] + 1) * e[2] + parseFloat(_.css(a, b)),
                    f = "number"),
                void (null != c && c === c &&
                  ("number" !== f || _.cssNumber[h] || (c += "px"),
                    Y.clearCloneStyle || "" !== c ||
                      0 !== b.indexOf("background") || (i[b] = "inherit"),
                    g && "set" in g && void 0 === (c = g.set(a, c, d)) ||
                      (i[b] = c))));
        }
      },
      css: function(a, b, c, d) {
        var e, f, g, h = _.camelCase(b);
        return b = _.cssProps[h] || (_.cssProps[h] = x(a.style, h)),
          g = _.cssHooks[b] || _.cssHooks[h],
          g && "get" in g && (e = g.get(a, !0, c)),
          void 0 === e && (e = v(a, b, d)),
          "normal" === e && b in Wa && (e = Wa[b]),
          "" === c || c
            ? (f = parseFloat(e), c === !0 || _.isNumeric(f) ? f || 0 : e)
            : e;
      }
    }),
      _.each(["height", "width"], function(a, b) {
        _.cssHooks[b] = { get: function(a, c, d) {
          return c
            ? Sa.test(_.css(a, "display")) && 0 === a.offsetWidth
              ? _.swap(a, Va, function() {
                return A(a, b, d);
              })
              : A(a, b, d)
            : void 0;
        }, set: function(a, c, d) {
          var e = d && Ra(a);
          return y(
            a,
            c,
            d ? z(a, b, d, "border-box" === _.css(a, "boxSizing", !1, e), e)
              : 0
          );
        } };
      }),
      _.cssHooks.marginRight = w(Y.reliableMarginRight, function(a, b) {
        return b
          ? _.swap(a, { display: "inline-block" }, v, [a, "marginRight"])
          : void 0;
      }),
      _.each({ margin: "", padding: "", border: "Width" }, function(a, b) {
        _.cssHooks[a + b] = { expand: function(c) {
          for (
            var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c];
            4 > d;
            d++
          ) {
            e[a + wa[d] + b] = f[d] || f[d - 2] || f[0];
          }
          return e;
        } },
          Pa.test(a) || (_.cssHooks[a + b].set = y);
      }),
      _.fn.extend({ css: function(a, b) {
        return qa(this, function(a, b, c) {
          var d, e, f = {}, g = 0;
          if (_.isArray(b)) {
            for (d = Ra(a), e = b.length; e > g; g++) {
              f[b[g]] = _.css(
                a,
                b[g],
                !1,
                d
              );
            }
            return f;
          }
          return void 0 !== c ? _.style(a, b, c) : _.css(a, b);
        }, a, b, arguments.length > 1);
      }, show: function() {
        return B(this, !0);
      }, hide: function() {
        return B(this);
      }, toggle: function(a) {
        return "boolean" == typeof a ? a ? this.show() : this.hide()
          : this.each(function() {
            xa(this) ? _(this).show() : _(this).hide();
          });
      } }),
      _.Tween = C,
      C.prototype = { constructor: C, init: function(a, b, c, d, e, f) {
        this.elem = a,
          this.prop = c,
          this.easing = e || "swing",
          this.options = b,
          this.start = this.now = this.cur(),
          this.end = d,
          this.unit = f || (_.cssNumber[c] ? "" : "px");
      }, cur: function() {
        var a = C.propHooks[this.prop];
        return a && a.get ? a.get(this) : C.propHooks._default.get(this);
      }, run: function(a) {
        var b, c = C.propHooks[this.prop];
        return this.options.duration
          ? this.pos = b = _.easing[this.easing](
            a,
            this.options.duration * a,
            0,
            1,
            this.options.duration
          )
          : this.pos = b = a,
          this.now = (this.end - this.start) * b + this.start,
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          c && c.set ? c.set(this) : C.propHooks._default.set(this),
          this;
      } },
      C.prototype.init.prototype = C.prototype,
      C.propHooks = { _default: { get: function(a) {
        var b;
        return null == a.elem[a.prop] || a.elem.style &&
          null != a.elem.style[a.prop]
          ? (b = _.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0)
          : a.elem[a.prop];
      }, set: function(a) {
        _.fx.step[a.prop] ? _.fx.step[a.prop](a)
          : a.elem.style &&
            (null != a.elem.style[_.cssProps[a.prop]] || _.cssHooks[a.prop])
            ? _.style(a.elem, a.prop, a.now + a.unit)
            : a.elem[a.prop] = a.now;
      } } },
      C.propHooks.scrollTop = C.propHooks.scrollLeft = { set: function(a) {
        a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
      } },
      _.easing = { linear: function(a) {
        return a;
      }, swing: function(a) {
        return .5 - Math.cos(a * Math.PI) / 2;
      } },
      _.fx = C.prototype.init,
      _.fx.step = {};
    var Ya, Za, $a = /^(?:toggle|show|hide)$/,
      _a = new RegExp("^(?:([+-])=|)(" + va + ")([a-z%]*)$", "i"),
      ab = /queueHooks$/, bb = [G], cb = { "*": [function(a, b) {
        var c = this.createTween(a, b), d = c.cur(), e = _a.exec(b),
          f = e && e[3] || (_.cssNumber[a] ? "" : "px"),
          g = (_.cssNumber[a] || "px" !== f && +d) &&
            _a.exec(_.css(c.elem, a)), h = 1, i = 20;
        if (g && g[3] !== f) {
          f = f || g[3],
            e = e || [],
            g = +d || 1;
          do h = h || ".5", g /= h, _.style(c.elem, a, g + f); while (

            h !== (h = c.cur() / d) && 1 !== h && --i
          );
        }
        return e && (g = c.start = +g || +d || 0,
          c.unit = f,
          c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]),
          c;
      }] };
    _.Animation = _.extend(I, { tweener: function(a, b) {
      _.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
      for (var c, d = 0, e = a.length; e > d; d++) {c = a[d],
          cb[c] = cb[c] || [],
          cb[c].unshift(b);}
    }, prefilter: function(a, b) {
      b ? bb.unshift(a) : bb.push(a);
    } }),
      _.speed = function(a, b, c) {
        var d = a && "object" == typeof a
          ? _.extend({}, a)
          : {
            complete: c || !c && b || _.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !_.isFunction(b) && b
          };
        return d.duration = _.fx.off
          ? 0
          : "number" == typeof d.duration
            ? d.duration
            : d.duration in _.fx.speeds
              ? _.fx.speeds[d.duration]
              : _.fx.speeds._default,
          (null == d.queue || d.queue === !0) && (d.queue = "fx"),
          d.old = d.complete,
          d.complete = function() {
            _.isFunction(d.old) && d.old.call(this),
              d.queue && _.dequeue(this, d.queue);
          },
          d;
      },
      _.fn.extend({ fadeTo: function(a, b, c, d) {
        return this.filter(xa).css("opacity", 0).show().end().animate(
          { opacity: b },
          a,
          c,
          d
        );
      }, animate: function(a, b, c, d) {
        var e = _.isEmptyObject(a), f = _.speed(b, c, d), g = function() {
          var b = I(this, _.extend({}, a), f);
          (e || ra.get(this, "finish")) && b.stop(!0);
        };
        return g.finish = g,
          e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g);
      }, stop: function(a, b, c) {
        var d = function(a) {
          var b = a.stop;
          delete a.stop,
            b(c);
        };
        return "string" != typeof a && (c = b, b = a, a = void 0),
          b && a !== !1 && this.queue(a || "fx", []),
          this.each(function() {
            var b = !0, e = null != a && a + "queueHooks", f = _.timers,
              g = ra.get(this);
            if (e) g[e] && g[e].stop && d(g[e]);
            else for (e in g) g[e] && g[e].stop && ab.test(e) && d(g[e]);
            for (e = f.length; e--;) {
              f[e].elem !== this || null != a && f[e].queue !== a ||
                (f[e].anim.stop(c), b = !1, f.splice(e, 1));
            }
            (b || !c) && _.dequeue(this, a);
          });
      }, finish: function(a) {
        return a !== !1 && (a = a || "fx"), this.each(function() {
          var b, c = ra.get(this), d = c[a + "queue"], e = c[a + "queueHooks"],
            f = _.timers, g = d ? d.length : 0;
          for (
            c.finish = !0,
              _.queue(this, a, []),
              e && e.stop && e.stop.call(this, !0),
              b = f.length;
            b--;
          ) {
            f[b].elem === this && f[b].queue === a &&
              (f[b].anim.stop(!0), f.splice(b, 1));
          }
          for (b = 0; g > b; b++)d[b] && d[b].finish && d[b].finish.call(this);
          delete c.finish;
        });
      } }),
      _.each(["toggle", "show", "hide"], function(a, b) {
        var c = _.fn[b];
        _.fn[b] = function(a, d, e) {
          return null == a || "boolean" == typeof a
            ? c.apply(this, arguments)
            : this.animate(E(b, !0), a, d, e);
        };
      }),
      _.each(
        {
          slideDown: E("show"),
          slideUp: E("hide"),
          slideToggle: E("toggle"),
          fadeIn: { opacity: "show" },
          fadeOut: { opacity: "hide" },
          fadeToggle: { opacity: "toggle" }
        },
        function(a, b) {
          _.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d);
          };
        }
      ),
      _.timers = [],
      _.fx.tick = function() {
        var a, b = 0, c = _.timers;
        for (Ya = _.now(); b < c.length; b++) {
          a = c[b],
            a() || c[b] !== a || c.splice(b--, 1);
        }
        c.length || _.fx.stop(),
          Ya = void 0;
      },
      _.fx.timer = function(a) {
        _.timers.push(a),
          a() ? _.fx.start() : _.timers.pop();
      },
      _.fx.interval = 13,
      _.fx.start = function() {
        Za || (Za = setInterval(_.fx.tick, _.fx.interval));
      },
      _.fx.stop = function() {
        clearInterval(Za),
          Za = null;
      },
      _.fx.speeds = { slow: 600, fast: 200, _default: 400 },
      _.fn.delay = function(a, b) {
        return a = _.fx ? _.fx.speeds[a] || a : a,
          b = b || "fx",
          this.queue(b, function(b, c) {
            var d = setTimeout(b, a);
            c.stop = function() {
              clearTimeout(d);
            };
          });
      },
      function() {
        var a = Z.createElement("input"), b = Z.createElement("select"),
          c = b.appendChild(Z.createElement("option"));
        a.type = "checkbox",
          Y.checkOn = "" !== a.value,
          Y.optSelected = c.selected,
          b.disabled = !0,
          Y.optDisabled = !c.disabled,
          a = Z.createElement("input"),
          a.value = "t",
          a.type = "radio",
          Y.radioValue = "t" === a.value;
      }();
    var db, eb, fb = _.expr.attrHandle;
    _.fn.extend({ attr: function(a, b) {
      return qa(this, _.attr, a, b, arguments.length > 1);
    }, removeAttr: function(a) {
      return this.each(function() {
        _.removeAttr(this, a);
      });
    } }),
      _.extend({ attr: function(a, b, c) {
        var d, e, f = a.nodeType;
        return a && 3 !== f && 8 !== f && 2 !== f
          ? typeof a.getAttribute === za
            ? _.prop(a, b, c)
            : (1 === f && _.isXMLDoc(a) || (b = b.toLowerCase(),
              d = _.attrHooks[b] || (_.expr.match.bool.test(b) ? eb : db)),
              void 0 === c
                ? d && "get" in d && null !== (e = d.get(a, b))
                  ? e
                  : (e = _.find.attr(a, b), null == e ? void 0 : e)
                : null !== c
                  ? d && "set" in d && void 0 !== (e = d.set(a, c, b))
                    ? e
                    : (a.setAttribute(b, c + ""), c)
                  : void _.removeAttr(a, b))
          : void 0;
      }, removeAttr: function(a, b) {
        var c, d, e = 0, f = b && b.match(na);
        if (f && 1 === a.nodeType) {
          for (; c = f[e++];) {
            d = _.propFix[c] || c,
              _.expr.match.bool.test(c) && (a[d] = !1),
              a.removeAttribute(c);
          }
        }
      }, attrHooks: { type: { set: function(a, b) {
        if (!Y.radioValue && "radio" === b && _.nodeName(a, "input")) {
          var c = a.value;
          return a.setAttribute("type", b), c && (a.value = c), b;
        }
      } } } }),
      eb = { set: function(a, b, c) {
        return b === !1 ? _.removeAttr(a, c) : a.setAttribute(c, c), c;
      } },
      _.each(_.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = fb[b] || _.find.attr;
        fb[b] = function(a, b, d) {
          var e, f;
          return d || (f = fb[b],
            fb[b] = e,
            e = null != c(a, b, d)
              ? b.toLowerCase()
              : null,
            fb[b] = f),
            e;
        };
      });
    var gb = /^(?:input|select|textarea|button)$/i;
    _.fn.extend({ prop: function(a, b) {
      return qa(this, _.prop, a, b, arguments.length > 1);
    }, removeProp: function(a) {
      return this.each(function() {
        delete this[_.propFix[a] || a];
      });
    } }),
      _.extend(
        {
          propFix: { "for": "htmlFor", "class": "className" },
          prop: function(a, b, c) {
            var d, e, f, g = a.nodeType;
            return a && 3 !== g && 8 !== g && 2 !== g
              ? (f = 1 !== g || !_.isXMLDoc(a),
                f && (b = _.propFix[b] || b, e = _.propHooks[b]),
                void 0 !== c
                  ? e && "set" in e && void 0 !== (d = e.set(a, c, b))
                    ? d
                    : a[b] = c
                  : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b])
              : void 0;
          },
          propHooks: { tabIndex: { get: function(a) {
            return a.hasAttribute("tabindex") || gb.test(a.nodeName) || a.href
              ? a.tabIndex
              : -1;
          } } }
        }
      ),
      Y.optSelected || (_.propHooks.selected = { get: function(a) {
        var b = a.parentNode;
        return b && b.parentNode && b.parentNode.selectedIndex, null;
      } }),
      _.each(
        [
          "tabIndex",
          "readOnly",
          "maxLength",
          "cellSpacing",
          "cellPadding",
          "rowSpan",
          "colSpan",
          "useMap",
          "frameBorder",
          "contentEditable"
        ],
        function() {
          _.propFix[this.toLowerCase()] = this;
        }
      );
    var hb = /[\t\r\n\f]/g;
    _.fn.extend({ addClass: function(a) {
      var b, c, d, e, f, g, h = "string" == typeof a && a, i = 0,
        j = this.length;
      if (_.isFunction(a)) {
        return this.each(function(b) {
          _(this).addClass(a.call(this, b, this.className));
        });
      }
      if (h) {
        for (b = (a || "").match(na) || []; j > i; i++) {
          if (
            c = this[i],
              d = 1 === c.nodeType && (c.className
                ? (" " + c.className + " ").replace(hb, " ")
                : " ")
          ) {
            for (f = 0; e = b[f++];) {d.indexOf(" " + e + " ") < 0 &&
                (d += e + " ");}
            g = _.trim(d),
              c.className !== g && (c.className = g);
          }
        }
      }
      return this;
    }, removeClass: function(a) {
      var b, c, d, e, f, g,
        h = 0 === arguments.length || "string" == typeof a && a, i = 0,
        j = this.length;
      if (_.isFunction(a)) {
        return this.each(function(b) {
          _(this).removeClass(a.call(this, b, this.className));
        });
      }
      if (h) {
        for (b = (a || "").match(na) || []; j > i; i++) {
          if (
            c = this[i],
              d = 1 === c.nodeType && (c.className
                ? (" " + c.className + " ").replace(hb, " ")
                : "")
          ) {
            for (f = 0; e = b[f++];) {
              for (; d.indexOf(" " + e + " ") >= 0;) {
                d = d.replace(
                  " " + e + " ",
                  " "
                );
              }
            }
            g = a ? _.trim(d) : "",
              c.className !== g && (c.className = g);
          }
        }
      }
      return this;
    }, toggleClass: function(a, b) {
      var c = typeof a;
      return "boolean" == typeof b && "string" === c
        ? b ? this.addClass(a) : this.removeClass(a)
        : this.each(_.isFunction(a)
          ? function(c) {
            _(this).toggleClass(a.call(this, c, this.className, b), b);
          }
          : function() {
            if ("string" === c) {
              for (
                var b, d = 0, e = _(this), f = a.match(na) || [];
                b = f[d++];
              ) {
                e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
              }
            } else {
              (c === za || "boolean" === c) &&
                (this.className &&
                  ra.set(this, "__className__", this.className),
                  this.className = this.className || a === !1
                    ? ""
                    : ra.get(this, "__className__") || "");
            }
          });
    }, hasClass: function(a) {
      for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++) {
        if (
          1 === this[c].nodeType &&
          (" " + this[c].className + " ").replace(hb, " ").indexOf(b) >= 0
        ) {
          return !0;
        }
      }
      return !1;
    } });
    var ib = /\r/g;
    _.fn.extend({ val: function(a) {
      var b, c, d, e = this[0];
      return arguments.length
        ? (d = _.isFunction(a), this.each(function(c) {
          var e;
          1 === this.nodeType && (e = d ? a.call(this, c, _(this).val()) : a,
            null == e
              ? e = ""
              : "number" == typeof e
                ? e += ""
                : _.isArray(e) && (e = _.map(e, function(a) {
                  return null == a ? "" : a + "";
                })),
            b = _.valHooks[this.type] ||
              _.valHooks[this.nodeName.toLowerCase()],
            b && "set" in b && void 0 !== b.set(this, e, "value") ||
              (this.value = e));
        }))
        : e
          ? (b = _.valHooks[e.type] || _.valHooks[e.nodeName.toLowerCase()],
            b && "get" in b && void 0 !== (c = b.get(e, "value"))
              ? c
              : (c = e.value,
                "string" == typeof c ? c.replace(ib, "") : null == c ? "" : c))
          : void 0;
    } }),
      _.extend({ valHooks: { option: { get: function(a) {
        var b = _.find.attr(a, "value");
        return null != b ? b : _.trim(_.text(a));
      } }, select: { get: function(a) {
        for (
          var b, c, d = a.options, e = a.selectedIndex,
            f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f
              ? e + 1
              : d.length, i = 0 > e ? h : f ? e : 0;
          h > i;
          i++
        ) {
          if (
            c = d[i],
              !(!c.selected && i !== e || (Y.optDisabled
                ? c.disabled
                : null !== c.getAttribute("disabled")) ||
                c.parentNode.disabled && _.nodeName(c.parentNode, "optgroup"))
          ) {
            if (b = _(c).val(), f) return b;
            g.push(b);
          }
        }
        return g;
      }, set: function(a, b) {
        for (
          var c, d, e = a.options, f = _.makeArray(b), g = e.length;
          g--;
        ) {
          d = e[g],
            (d.selected = _.inArray(d.value, f) >= 0) && (c = !0);
        }
        return c || (a.selectedIndex = -1), f;
      } } } }),
      _.each(["radio", "checkbox"], function() {
        _.valHooks[this] = { set: function(a, b) {
          return _.isArray(b)
            ? a.checked = _.inArray(_(a).val(), b) >= 0
            : void 0;
        } },
          Y.checkOn || (_.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value;
          });
      }),
      _.each(
        "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu"
          .split(" "),
        function(a, b) {
          _.fn[b] = function(a, c) {
            return arguments.length > 0
              ? this.on(b, null, a, c)
              : this.trigger(b);
          };
        }
      ),
      _.fn.extend({ hover: function(a, b) {
        return this.mouseenter(a).mouseleave(b || a);
      }, bind: function(a, b, c) {
        return this.on(a, null, b, c);
      }, unbind: function(a, b) {
        return this.off(a, null, b);
      }, delegate: function(a, b, c, d) {
        return this.on(b, a, c, d);
      }, undelegate: function(a, b, c) {
        return 1 === arguments.length
          ? this.off(a, "**")
          : this.off(b, a || "**", c);
      } });
    var jb = _.now(), kb = /\?/;
    _.parseJSON = function(a) {
      return JSON.parse(a + "");
    },
      _.parseXML = function(a) {
        var b, c;
        if (!a || "string" != typeof a) return null;
        try {
          c = new DOMParser(),
            b = c.parseFromString(a, "text/xml");
        } catch (d) {
          b = void 0;
        }
        return (!b || b.getElementsByTagName("parsererror").length) &&
          _.error("Invalid XML: " + a),
          b;
      };
    var lb = /#.*$/, mb = /([?&])_=[^&]*/, nb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      ob = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      pb = /^(?:GET|HEAD)$/, qb = /^\/\//,
      rb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
      sb = {}, tb = {}, ub = "*/".concat("*"), vb = a.location.href,
      wb = rb.exec(vb.toLowerCase()) || [];
    _.extend(
      {
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
          url: vb,
          type: "GET",
          isLocal: ob.test(wb[1]),
          global: !0,
          processData: !0,
          async: !0,
          contentType: "application/x-www-form-urlencoded; charset=UTF-8",
          accepts: {
            "*": ub,
            text: "text/plain",
            html: "text/html",
            xml: "application/xml, text/xml",
            json: "application/json, text/javascript"
          },
          contents: { xml: /xml/, html: /html/, json: /json/ },
          responseFields: {
            xml: "responseXML",
            text: "responseText",
            json: "responseJSON"
          },
          converters: {
            "* text": String,
            "text html": !0,
            "text json": _.parseJSON,
            "text xml": _.parseXML
          },
          flatOptions: { url: !0, context: !0 }
        },
        ajaxSetup: function(a, b) {
          return b ? L(L(a, _.ajaxSettings), b) : L(_.ajaxSettings, a);
        },
        ajaxPrefilter: J(sb),
        ajaxTransport: J(tb),
        ajax: function(a, b) {
          function c(a, b, c, g) {
            var i, k, r, s, u, w = b;
            2 !== t && (t = 2,
              h && clearTimeout(h),
              d = void 0,
              f = g || "",
              v.readyState = a > 0
                ? 4
                : 0,
              i = a >= 200 && 300 > a || 304 === a,
              c && (s = M(l, v, c)),
              s = N(l, s, v, i),
              i
                ? (l.ifModified && (u = v.getResponseHeader("Last-Modified"),
                  u && (_.lastModified[e] = u),
                  u = v.getResponseHeader("etag"),
                  u && (_.etag[e] = u)),
                  204 === a || "HEAD" === l.type
                    ? w = "nocontent"
                    : 304 === a
                      ? w = "notmodified"
                      : (w = s.state, k = s.data, r = s.error, i = !r))
                : (r = w, (a || !w) && (w = "error", 0 > a && (a = 0))),
              v.status = a,
              v.statusText = (b || w) + "",
              i ? o.resolveWith(m, [k, w, v]) : o.rejectWith(m, [v, w, r]),
              v.statusCode(q),
              q = void 0,
              j && n.trigger(i
                ? "ajaxSuccess"
                : "ajaxError", [v, l, i ? k : r]),
              p.fireWith(m, [v, w]),
              j && (n.trigger("ajaxComplete", [v, l]),
                --_.active || _.event.trigger("ajaxStop")));
          }
          "object" == typeof a && (b = a, a = void 0),
            b = b || {};
          var d, e, f, g, h, i, j, k, l = _.ajaxSetup({}, b),
            m = l.context || l,
            n = l.context && (m.nodeType || m.jquery) ? _(m) : _.event,
            o = _.Deferred(), p = _.Callbacks("once memory"),
            q = l.statusCode || {}, r = {}, s = {}, t = 0, u = "canceled",
            v = { readyState: 0, getResponseHeader: function(a) {
              var b;
              if (2 === t) {
                if (!g) {
                  for (g = {}; b = nb.exec(f);)g[b[1].toLowerCase()] = b[2];
                }
                b = g[a.toLowerCase()];
              }
              return null == b ? null : b;
            }, getAllResponseHeaders: function() {
              return 2 === t ? f : null;
            }, setRequestHeader: function(a, b) {
              var c = a.toLowerCase();
              return t || (a = s[c] = s[c] || a, r[a] = b), this;
            }, overrideMimeType: function(a) {
              return t || (l.mimeType = a), this;
            }, statusCode: function(a) {
              var b;
              if (a) {
                if (2 > t) for (b in a) q[b] = [q[b], a[b]];
                else v.always(a[v.status]);
              }
              return this;
            }, abort: function(a) {
              var b = a || u;
              return d && d.abort(b), c(0, b), this;
            } };
          if (
            o.promise(v).complete = p.add,
              v.success = v.done,
              v.error = v.fail,
              l.url = ((a || l.url || vb) + "").replace(lb, "").replace(
                qb,
                wb[1] + "//"
              ),
              l.type = b.method || b.type || l.method || l.type,
              l.dataTypes =
                _.trim(l.dataType || "*").toLowerCase().match(na) || [""],
              null == l.crossDomain && (i = rb.exec(l.url.toLowerCase()),
                l.crossDomain =
                  !(!i || i[1] === wb[1] && i[2] === wb[2] &&
                    (i[3] || ("http:" === i[1] ? "80" : "443")) ===
                      (wb[3] || ("http:" === wb[1] ? "80" : "443")))),
              l.data && l.processData && "string" != typeof l.data &&
                (l.data = _.param(l.data, l.traditional)),
              K(sb, l, b, v),
              2 === t
          ) {
            return v;
          }
          j = _.event && l.global,
            j && 0 === _.active++ && _.event.trigger("ajaxStart"),
            l.type = l.type.toUpperCase(),
            l.hasContent = !pb.test(l.type),
            e = l.url,
            l.hasContent || (l.data && (e = l.url += (kb.test(e)
              ? "&"
              : "?") + l.data,
              delete l.data),
              l.cache === !1 && (l.url = mb.test(e)
                ? e.replace(mb, "$1_=" + jb++)
                : e + (kb.test(e) ? "&" : "?") + "_=" + jb++)),
            l.ifModified &&
              (_.lastModified[e] &&
                v.setRequestHeader("If-Modified-Since", _.lastModified[e]),
                _.etag[e] && v.setRequestHeader("If-None-Match", _.etag[e])),
            (l.data && l.hasContent && l.contentType !== !1 ||
              b.contentType) &&
              v.setRequestHeader("Content-Type", l.contentType),
            v.setRequestHeader(
              "Accept",
              l.dataTypes[0] && l.accepts[l.dataTypes[0]]
                ? l.accepts[l.dataTypes[0]] +
                  ("*" !== l.dataTypes[0] ? ", " + ub + "; q=0.01" : "")
                : l.accepts["*"]
            );
          for (k in l.headers) v.setRequestHeader(k, l.headers[k]);
          if (
            l.beforeSend && (l.beforeSend.call(m, v, l) === !1 || 2 === t)
          ) {
            return v.abort();
          }
          u = "abort";
          for (k in { success: 1, error: 1, complete: 1 }) v[k](l[k]);
          if (d = K(tb, l, b, v)) {
            v.readyState = 1,
              j && n.trigger("ajaxSend", [v, l]),
              l.async && l.timeout > 0 && (h = setTimeout(function() {
                v.abort("timeout");
              }, l.timeout));
            try {
              t = 1,
                d.send(r, c);
            } catch (w) {
              if (!(2 > t)) throw w;
              c(-1, w);
            }
          } else c(-1, "No Transport");
          return v;
        },
        getJSON: function(a, b, c) {
          return _.get(a, b, c, "json");
        },
        getScript: function(a, b) {
          return _.get(a, void 0, b, "script");
        }
      }
    ),
      _.each(["get", "post"], function(a, b) {
        _[b] = function(a, c, d, e) {
          return _.isFunction(c) && (e = e || d, d = c, c = void 0),
            _.ajax({ url: a, type: b, dataType: e, data: c, success: d });
        };
      }),
      _._evalUrl = function(a) {
        return _.ajax(
          {
            url: a,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
          }
        );
      },
      _.fn.extend({ wrapAll: function(a) {
        var b;
        return _.isFunction(a)
          ? this.each(function(b) {
            _(this).wrapAll(a.call(this, b));
          })
          : (this[0] && (b = _(a, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && b.insertBefore(this[0]),
            b.map(function() {
              for (var a = this; a.firstElementChild;) a = a.firstElementChild;
              return a;
            }).append(this)),
            this);
      }, wrapInner: function(a) {
        return this.each(_.isFunction(a)
          ? function(b) {
            _(this).wrapInner(a.call(this, b));
          }
          : function() {
            var b = _(this), c = b.contents();
            c.length ? c.wrapAll(a) : b.append(a);
          });
      }, wrap: function(a) {
        var b = _.isFunction(a);
        return this.each(function(c) {
          _(this).wrapAll(b ? a.call(this, c) : a);
        });
      }, unwrap: function() {
        return this.parent().each(function() {
          _.nodeName(this, "body") || _(this).replaceWith(this.childNodes);
        }).end();
      } }),
      _.expr.filters.hidden = function(a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0;
      },
      _.expr.filters.visible = function(a) {
        return !_.expr.filters.hidden(a);
      };
    var xb = /%20/g, yb = /\[\]$/, zb = /\r?\n/g,
      Ab = /^(?:submit|button|image|reset|file)$/i,
      Bb = /^(?:input|select|textarea|keygen)/i;
    _.param = function(a, b) {
      var c, d = [], e = function(a, b) {
        b = _.isFunction(b) ? b() : null == b ? "" : b,
          d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b);
      };
      if (
        void 0 === b && (b = _.ajaxSettings && _.ajaxSettings.traditional),
          _.isArray(a) || a.jquery && !_.isPlainObject(a)
      ) {
        _.each(a, function() {
          e(this.name, this.value);
        });
      } else for (c in a) O(c, a[c], b, e);
      return d.join("&").replace(xb, "+");
    },
      _.fn.extend({ serialize: function() {
        return _.param(this.serializeArray());
      }, serializeArray: function() {
        return this.map(function() {
          var a = _.prop(this, "elements");
          return a ? _.makeArray(a) : this;
        }).filter(function() {
          var a = this.type;
          return this.name && !_(this).is(":disabled") &&
            Bb.test(this.nodeName) && !Ab.test(a) &&
            (this.checked || !ya.test(a));
        }).map(function(a, b) {
          var c = _(this).val();
          return null == c ? null : _.isArray(c)
            ? _.map(c, function(a) {
              return { name: b.name, value: a.replace(zb, "\r\n") };
            })
            : { name: b.name, value: c.replace(zb, "\r\n") };
        }).get();
      } }),
      _.ajaxSettings.xhr = function() {
        try {
          return new XMLHttpRequest();
        } catch (a) {}
      };
    var Cb = 0, Db = {}, Eb = { 0: 200, 1223: 204 }, Fb = _.ajaxSettings.xhr();
    a.attachEvent && a.attachEvent("onunload", function() {
      for (var a in Db) Db[a]();
    }),
      Y.cors = !!Fb && "withCredentials" in Fb,
      Y.ajax = Fb = !!Fb,
      _.ajaxTransport(function(a) {
        var b;
        return Y.cors || Fb && !a.crossDomain
          ? { send: function(c, d) {
            var e, f = a.xhr(), g = ++Cb;
            if (
              f.open(a.type, a.url, a.async, a.username, a.password),
                a.xhrFields
            ) {
              for (e in a.xhrFields) f[e] = a.xhrFields[e];
            }
            a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType),
              a.crossDomain || c["X-Requested-With"] ||
                (c["X-Requested-With"] = "XMLHttpRequest");
            for (e in c) f.setRequestHeader(e, c[e]);
            b = function(a) {
              return function() {
                b && (delete Db[g],
                  b = f.onload = f.onerror = null,
                  "abort" === a ? f.abort() : "error" === a
                    ? d(f.status, f.statusText)
                    : d(
                      Eb[f.status] || f.status,
                      f.statusText,
                      "string" == typeof f.responseText
                        ? { text: f.responseText }
                        : void 0,
                      f.getAllResponseHeaders()
                    ));
              };
            },
              f.onload = b(),
              f.onerror = b("error"),
              b = Db[g] = b("abort");
            try {
              f.send(a.hasContent && a.data || null);
            } catch (h) {
              if (b) throw h;
            }
          }, abort: function() {
            b && b();
          } }
          : void 0;
      }),
      _.ajaxSetup(
        {
          accepts: {
            script:
              "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
          },
          contents: { script: /(?:java|ecma)script/ },
          converters: { "text script": function(a) {
            return _.globalEval(a), a;
          } }
        }
      ),
      _.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1),
          a.crossDomain && (a.type = "GET");
      }),
      _.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
          var b, c;
          return { send: function(d, e) {
            b = _("<script>").prop(
              { async: !0, charset: a.scriptCharset, src: a.url }
            ).on("load error", c = function(a) {
              b.remove(),
                c = null,
                a && e("error" === a.type ? 404 : 200, a.type);
            }),
              Z.head.appendChild(b[0]);
          }, abort: function() {
            c && c();
          } };
        }
      });
    var Gb = [], Hb = /(=)\?(?=&|$)|\?\?/;
    _.ajaxSetup({ jsonp: "callback", jsonpCallback: function() {
      var a = Gb.pop() || _.expando + "_" + jb++;
      return this[a] = !0, a;
    } }),
      _.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (Hb.test(b.url)
          ? "url"
          : "string" == typeof b.data && !(b.contentType || "").indexOf(
            "application/x-www-form-urlencoded"
          ) && Hb.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0]
          ? (e = b.jsonpCallback = _.isFunction(b.jsonpCallback)
            ? b.jsonpCallback()
            : b.jsonpCallback,
            h
              ? b[h] = b[h].replace(Hb, "$1" + e)
              : b.jsonp !== !1 && (b.url += (kb.test(b.url)
                ? "&"
                : "?") + b.jsonp + "=" + e),
            b.converters["script json"] = function() {
              return g || _.error(e + " was not called"), g[0];
            },
            b.dataTypes[0] = "json",
            f = a[e],
            a[e] = function() {
              g = arguments;
            },
            d.always(function() {
              a[e] = f,
                b[e] && (b.jsonpCallback = c.jsonpCallback, Gb.push(e)),
                g && _.isFunction(f) && f(g[0]),
                g = f = void 0;
            }),
            "script")
          : void 0;
      }),
      _.parseHTML = function(a, b, c) {
        if (
          !a || "string" != typeof a
        ) {
          return null;
        }
        "boolean" == typeof b && (c = b, b = !1),
          b = b || Z;
        var d = ga.exec(a), e = !c && [];
        return d ? [b.createElement(d[1])] : (d = _.buildFragment([a], b, e),
          e && e.length && _(e).remove(),
          _.merge([], d.childNodes));
      };
    var Ib = _.fn.load;
    _.fn.load = function(a, b, c) {
      if ("string" != typeof a && Ib) return Ib.apply(this, arguments);
      var d, e, f, g = this, h = a.indexOf(" ");
      return h >= 0 && (d = _.trim(a.slice(h)), a = a.slice(0, h)),
        _.isFunction(b)
          ? (c = b, b = void 0)
          : b && "object" == typeof b && (e = "POST"),
        g.length > 0 &&
          _.ajax({ url: a, type: e, dataType: "html", data: b }).done(
            function(a) {
              f = arguments,
                g.html(d ? _("<div>").append(_.parseHTML(a)).find(d) : a);
            }
          ).complete(c && function(a, b) {
            g.each(c, f || [a.responseText, b, a]);
          }),
        this;
    },
      _.each(
        [
          "ajaxStart",
          "ajaxStop",
          "ajaxComplete",
          "ajaxError",
          "ajaxSuccess",
          "ajaxSend"
        ],
        function(a, b) {
          _.fn[b] = function(a) {
            return this.on(b, a);
          };
        }
      ),
      _.expr.filters.animated = function(a) {
        return _.grep(_.timers, function(b) {
          return a === b.elem;
        }).length;
      };
    var Jb = a.document.documentElement;
    _.offset = { setOffset: function(a, b, c) {
      var d, e, f, g, h, i, j, k = _.css(a, "position"), l = _(a), m = {};
      "static" === k && (a.style.position = "relative"),
        h = l.offset(),
        f = _.css(a, "top"),
        i = _.css(a, "left"),
        j = ("absolute" === k || "fixed" === k) &&
          (f + i).indexOf("auto") > -1,
        j
          ? (d = l.position(), g = d.top, e = d.left)
          : (g = parseFloat(f) || 0, e = parseFloat(i) || 0),
        _.isFunction(b) && (b = b.call(a, c, h)),
        null != b.top && (m.top = b.top - h.top + g),
        null != b.left && (m.left = b.left - h.left + e),
        "using" in b ? b.using.call(a, m) : l.css(m);
    } },
      _.fn.extend({ offset: function(a) {
        if (arguments.length) {
          return void 0 === a ? this : this.each(function(b) {
            _.offset.setOffset(this, a, b);
          });
        }
        var b, c, d = this[0], e = { top: 0, left: 0 },
          f = d && d.ownerDocument;
        return f
          ? (b = f.documentElement,
            _.contains(b, d)
              ? (typeof d.getBoundingClientRect !== za &&
                (e = d.getBoundingClientRect()),
                c = P(f),
                {
                  top: e.top + c.pageYOffset - b.clientTop,
                  left: e.left + c.pageXOffset - b.clientLeft
                })
              : e)
          : void 0;
      }, position: function() {
        if (this[0]) {
          var a, b, c = this[0], d = { top: 0, left: 0 };
          return "fixed" === _.css(c, "position")
            ? b = c.getBoundingClientRect() : (a = this.offsetParent(),
              b = this.offset(),
              _.nodeName(a[0], "html") || (d = a.offset()),
              d.top += _.css(a[0], "borderTopWidth", !0),
              d.left += _.css(a[0], "borderLeftWidth", !0)),
            {
              top: b.top - d.top - _.css(c, "marginTop", !0),
              left: b.left - d.left - _.css(c, "marginLeft", !0)
            };
        }
      }, offsetParent: function() {
        return this.map(function() {
          for (
            var a = this.offsetParent || Jb;
            a && !_.nodeName(a, "html") && "static" === _.css(a, "position");
          ) {
            a = a.offsetParent;
          }
          return a || Jb;
        });
      } }),
      _.each(
        { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
        function(b, c) {
          var d = "pageYOffset" === c;
          _.fn[b] = function(e) {
            return qa(this, function(b, e, f) {
              var g = P(b);
              return void 0 === f
                ? g ? g[c] : b[e]
                : void (g
                  ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset)
                  : b[e] = f);
            }, b, e, arguments.length, null);
          };
        }
      ),
      _.each(["top", "left"], function(a, b) {
        _.cssHooks[b] = w(Y.pixelPosition, function(a, c) {
          return c
            ? (c = v(a, b), Qa.test(c) ? _(a).position()[b] + "px" : c)
            : void 0;
        });
      }),
      _.each({ Height: "height", Width: "width" }, function(a, b) {
        _.each(
          { padding: "inner" + a, content: b, "": "outer" + a },
          function(c, d) {
            _.fn[d] = function(d, e) {
              var f = arguments.length && (c || "boolean" != typeof d),
                g = c || (d === !0 || e === !0 ? "margin" : "border");
              return qa(this, function(b, c, d) {
                var e;
                return _.isWindow(b)
                  ? b.document.documentElement["client" + a]
                  : 9 === b.nodeType
                    ? (e = b.documentElement,
                      Math.max(
                        b.body["scroll" + a],
                        e["scroll" + a],
                        b.body["offset" + a],
                        e["offset" + a],
                        e["client" + a]
                      ))
                    : void 0 === d ? _.css(b, c, g) : _.style(b, c, d, g);
              }, b, f ? d : void 0, f, null);
            };
          }
        );
      }),
      _.fn.size = function() {
        return this.length;
      },
      _.fn.andSelf = _.fn.addBack,
      "function" == typeof define && define.amd &&
        define("jquery", [], function() {
          return _;
        });
    var Kb = a.jQuery, Lb = a.$;
    return _.noConflict = function(b) {
      return a.$ === _ && (a.$ = Lb),
        b && a.jQuery === _ && (a.jQuery = Kb),
        _;
    }, typeof b === za && (a.jQuery = a.$ = _), _;
  }),
    function(a, b, c) {
      function d(a) {
        function b(b) {
          var c;
          return 0 === b ? "" : (b = b || 1,
            c = a.substring(h + 1, h + b + 1),
            "" === c ? k : c);
        }
        var d, e, f, h = 0, i = 1, j = 1, k = c;
        return a = a.replace(/\r\n/g, "\n").replace(/\r/g, "\n"),
          d = a.length,
          e = d > 0 ? a.charAt(0) : k,
          { toString: function() {
            return "length: " + d + ", index: " + h + ", line: " + i +
              ", column: " + j + ", current: [" + e + "]";
          }, peek: function(a) {
            return b(a);
          }, substring: function() {
            return a.substring(h);
          }, peekSubstring: function() {
            return a.substring(h + 1);
          }, read: function(a) {
            var c, l, m = b(a);
            return "" === m ? m : (m !== k
              ? (h += m.length,
                j += m.length,
                f && (i++, j = 1, f = !1),
                c = m.substring(0, m.length - 1).replace(/[^\n]/g, "").length,
                c > 0 && (i += c, j = 1),
                l = g(m),
                "\n" === l && (f = !0),
                e = l)
              : (h = d, e = k),
              m);
          }, text: function() {
            return a;
          }, getLine: function() {
            return i;
          }, getColumn: function() {
            return j;
          }, isEof: function() {
            return h >= d;
          }, isSol: function() {
            return 1 === j;
          }, isSolWs: function() {
            var b, c = h;
            if (1 === j) return !0;
            for (; "" !== (b = a.charAt(--c));) {
              if ("\n" === b) return !0;
              if (!/\s/.test(b)) return !1;
            }
            return !0;
          }, isEol: function() {
            return f;
          }, EOF: k, current: function() {
            return e;
          } };
      }
      function e(a) {
        function b() {}
        return b.prototype = a, new b();
      }
      function f(a, b) {
        var c;
        for (c = 0; c < b.length; c++) a.appendChild(b[c]);
      }
      function g(a) {
        return a.charAt ? a.charAt(a.length - 1) : a[a.length - 1];
      }
      function h(a, b, c) {
        var d;
        if (a.indexOf && !c) return a.indexOf(b) >= 0;
        for (d = 0; d < a.length; d++) {
          if (a[d] === b) return !0;
          if (
            c && "string" == typeof a[d] && "string" == typeof b &&
            a[d].toUpperCase() === b.toUpperCase()
          ) {
            return !0;
          }
        }
        return !1;
      }
      function i(a, b) {
        var c;
        if (!b) return a;
        for (c in b) a[c] = b[c];
        return a;
      }
      function j(a) {
        return i({}, a);
      }
      function k(a) {
        return a.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
      }
      function l(a, b, d, e) {
        return d = d.slice(0), function(f) {
          var g, i, j, k = a;
          for (1 === b && d.reverse(), g = 0; g < d.length; g++) {
            if (
              j = f[k + g * b],
                i = d[d.length - 1 - g],
                j === c
            ) {
              if (i.optional === c || !i.optional) return !1;
              k -= b;
            } else {
              if (
                j.name === i.token &&
                (i.values === c || h(i.values, j.value, e))
              ) {
                continue;
              }
              if (i.optional === c || !i.optional) return !1;
              k -= b;
            }
          }
          return !0;
        };
      }
      function m(a, b, d, e) {
        return function(f) {
          for (var g, i = a, j = !1; (g = f[--i]) !== c;) {
            if (g.name === d.token && h(d.values, g.value)) {
              if (g.name === b.token && h(b.values, g.value, e)) {
                j = !0;
                break;
              }
              return !1;
            }
            if (g.name === b.token && h(b.values, g.value, e)) {
              j = !0;
              break;
            }
          }
          if (!j) return !1;
          for (i = a; (g = f[++i]) !== c;) {
            if (g.name === b.token && h(b.values, g.value, e)) {
              if (g.name === d.token && h(d.values, g.value, e)) {
                j = !0;
                break;
              }
              return !1;
            }
            if (g.name === d.token && h(d.values, g.value, e)) {
              j = !0;
              break;
            }
          }
          return j;
        };
      }
      function n(a, b, c, d) {
        var e, f, g, h = a.reader.current(), i = a.reader.getLine(),
          j = a.reader.getColumn();
        if (
          b = b || [],
            a.language.caseInsensitive && (h = h.toUpperCase()),
            !b[h]
        ) {
          return null;
        }
        for (b = b[h], e = 0; e < b.length; e++) {
          if (
            f = b[e].value,
              g = h + a.reader.peek(f.length),
              f === g || b[e].regex.test(g)
          ) {
            return a.createToken(
              c,
              a.reader.current() + a.reader[d ? "peek" : "read"](f.length - 1),
              i,
              j
            );
          }
        }
        return null;
      }
      function o(a, b, d, e) {
        var f, g = 1;
        for (d = d || 1; f = a[b + d * g++];) if (!e(f)) return f;
        return c;
      }
      function p(a, b, c) {
        var d, e, f, g = {};
        for (d = 0; d < a.length; d++) {
          e = c ? a[d].toUpperCase() : a[d],
            f = e.charAt(0),
            g[f] || (g[f] = []),
            g[f].push(
              { value: e, regex: new RegExp("^" + k(e) + b, c ? "i" : "") }
            );
        }
        return g;
      }
      function q(a) {
        var b, c, d = a.reader.current(), e = a.reader.getLine(),
          f = a.reader.getColumn(), g = !0;
        if (/\d/.test(d)) {
          b = d,
            "0" === d && "." !== a.reader.peek() && (g = !1);
        } else {
          if ("." !== d || !/\d/.test(a.reader.peek())) return null;
          b = d + a.reader.read(),
            g = !1;
        }
        for (; (c = a.reader.peek()) !== a.reader.EOF;) {
          if (!/[A-Za-z0-9]/.test(c)) {
            if ("." === c && g && /\d$/.test(a.reader.peek(2))) {
              b += a.reader.read(),
                g = !1;
              continue;
            }
            break;
          }
          b += a.reader.read();
        }
        return a.createToken("number", b, e, f);
      }
      function r(a, b, c) {
        var d, e = E[a] || [];
        for (d = 0; d < e.length; d++) e[d].call(b, c);
      }
      function s(a) {
        this.options = i(j(B), a);
      }
      var t, u, v = !1, w = v ? "\r" : "\n", x = function() {
        return null;
      }, y = 0, z = "plaintext", A = "sunlight-",
        B = { tabWidth: 4, classPrefix: A, showWhitespace: !1, maxHeight: !1 },
        C = {}, D = {}, E = {
          beforeHighlightNode: [],
          beforeHighlight: [],
          beforeTokenize: [],
          afterTokenize: [],
          beforeAnalyze: [],
          afterAnalyze: [],
          afterHighlight: [],
          afterHighlightNode: []
        };
      t = function() {
        function a(a) {
          return function(c) {
            var d = b.createElement("span");
            return d.className = c.options.classPrefix + a,
              d.appendChild(c.createTextNode(c.tokens[c.index])),
              c.addNode(d) || !0;
          };
        }
        return { handleToken: function(b) {
          return a(b.tokens[b.index].name)(b);
        }, handle_default: function(a) {
          return a.addNode(a.createTextNode(a.tokens[a.index]));
        }, handle_ident: function(b) {
          var c = function(c, d) {
            var e;
            for (c = c || [], e = 0; e < c.length; e++) {
              if (
                "function" == typeof c[e]
              ) {
                if (c[e](b)) return a("named-ident")(b);
              } else if (d && d(c[e])(b.tokens)) return a("named-ident")(b);
            }
            return !1;
          };
          return c(b.language.namedIdentRules.custom) ||
            c(b.language.namedIdentRules.follows, function(a) {
              return l(b.index - 1, -1, a, b.language.caseInsensitive);
            }) || c(b.language.namedIdentRules.precedes, function(a) {
              return l(b.index + 1, 1, a, b.language.caseInsensitive);
            }) || c(b.language.namedIdentRules.between, function(a) {
              return m(
                b.index,
                a.opener,
                a.closer,
                b.language.caseInsensitive
              );
            }) || a("ident")(b);
        } };
      }(),
        D = {
          analyzer: e(t),
          customTokens: [],
          namedIdentRules: {},
          punctuation: /[^\w\s]/,
          numberParser: q,
          caseInsensitive: !1,
          doNotParse: /\s/,
          contextItems: {},
          embeddedLanguages: {}
        },
        u = function() {
          var a = null;
          return a = b.defaultView && b.defaultView.getComputedStyle
            ? b.defaultView.getComputedStyle
            : function(a, b) {
              return a.currentStyle || {};
            },
            function(b, c) {
              return a(b, null)[c];
            };
        }(),
        s.prototype = function() {
          function a(a, b) {
            var c = a[2] || [], d = a[1].length,
              e = "string" == typeof a[1] ? new RegExp(k(a[1])) : a[1].regex,
              f = a[3] || !1;
            return function(a, g, h, i, j, k) {
              function l(b) {
                var f, g, i = a.reader.current();
                for (g = 0; g < c.length; g++) {
                  if (
                    f = (b ? i : "") + a.reader.peek(c[g].length - b),
                      f === c[g]
                  ) {
                    return h += a.reader.read(f.length - b), !0;
                  }
                }
                return f = (b ? i : "") + a.reader.peek(d - b),
                  e.test(f) ? (m = !0, !1)
                    : (h += b ? i : a.reader.read(), !0);
              }
              var m = !1;
              if (h = h || "", k = k ? 1 : 0, !k || l(!0)) {
                for (
                  ;
                  a.reader.peek() !== a.reader.EOF && l(!1);
                );
              }
              return k ? (h += a.reader.current(), a.reader.read())
                : h += f || a.reader.peek() === a.reader.EOF ? ""
                  : a.reader.read(d),
                m || (a.continuation = g),
                a.createToken(b, h, i, j);
            };
          }
          function e(a) {
            var b, c;
            for (b = 0; b < a.language.embeddedLanguages.length; b++) {
              if (
                C[a.language.embeddedLanguages[b].language] &&
                (c = j(a.language.embeddedLanguages[b]), c.switchTo(a))
              ) {
                c.oldItems = j(a.items),
                  a.embeddedLanguageStack.push(c),
                  a.language = C[c.language],
                  a.items = i(a.items, j(a.language.contextItems));
                break;
              }
            }
          }
          function h(a) {
            var b, c = g(a.embeddedLanguageStack);
            c && c.switchBack(a) && (a.language = C[c.parentLanguage],
              b = a.embeddedLanguageStack.pop(),
              a.items = j(b.oldItems),
              b.oldItems = {});
          }
          function l(a, b, f, g) {
            var i, k, l, m = [];
            for (
              r("beforeTokenize", this, { code: a, language: b }),
                i = {
                  reader: d(a),
                  language: b,
                  items: j(b.contextItems),
                  token: function(a) {
                    return m[a];
                  },
                  getAllTokens: function() {
                    return m.slice(0);
                  },
                  count: function() {
                    return m.length;
                  },
                  options: g,
                  embeddedLanguageStack: [],
                  defaultData: { text: "", line: 1, column: 1 },
                  createToken: function(a, b, c, d) {
                    return {
                      name: a,
                      line: c,
                      value: v ? b.replace(/\n/g, "\r") : b,
                      column: d,
                      language: this.language.name
                    };
                  }
                },
                f.continuation && (k = f.continuation,
                  f.continuation = null,
                  m.push(
                    k(i, k, "", i.reader.getLine(), i.reader.getColumn(), !0)
                  ));
              !i.reader.isEof();
            ) {
              e(i),
                l = s(i),
                null !== l && ("" !== i.defaultData.text && (m.push(
                  i.createToken(
                    "default",
                    i.defaultData.text,
                    i.defaultData.line,
                    i.defaultData.column
                  )
                ), i.defaultData.text = ""),
                  l[0] !== c ? m = m.concat(l) : m.push(l)),
                h(i),
                i.reader.read();
            }
            return "" !== i.defaultData.text && m.push(
              i.createToken(
                "default",
                i.defaultData.text,
                i.defaultData.line,
                i.defaultData.column
              )
            ),
              r("afterTokenize", this, { code: a, parserContext: i }),
              i;
          }
          function m(a, c, d) {
            var e = [], f = function() {
              var a, b;
              return d.showWhitespace
                ? (a = String.fromCharCode(183),
                  b = new Array(d.tabWidth).join(String.fromCharCode(8212)) +
                    String.fromCharCode(8594))
                : (a = String.fromCharCode(160),
                  b = new Array(d.tabWidth + 1).join(a)),
                function(c) {
                  for (
                    var e, f, g, h, i = c.value.split(" ").join(a);
                    (e = i.indexOf("	")) >= 0;
                  ) {
                    f = i.lastIndexOf(w, e),
                      g = -1 === f ? e : e - f - 1,
                      h = d.tabWidth - g % d.tabWidth,
                      i = i.substring(0, e) + b.substring(d.tabWidth - h) +
                        i.substring(e + 1);
                  }
                  return i;
                };
            }();
            return {
              tokens: (c.tokens || []).concat(a.getAllTokens()),
              index: c.index ? c.index + 1 : 0,
              language: null,
              getAnalyzer: x,
              options: d,
              continuation: a.continuation,
              addNode: function(a) {
                e.push(a);
              },
              createTextNode: function(a) {
                return b.createTextNode(f(a));
              },
              getNodes: function() {
                return e;
              },
              resetNodes: function() {
                e = [];
              },
              items: a.items
            };
          }
          function o(a, b, d) {
            var e, f = C[b];
            return d = d || {},
              f === c && (f = C[z]),
              r(
                "beforeHighlight",
                this,
                { code: a, language: f, previousContext: d }
              ),
              e = m(l.call(this, a, f, d, this.options), d, this.options),
              q.call(this, e, d.index ? d.index + 1 : 0),
              r("afterHighlight", this, { analyzerContext: e }),
              e;
          }
          function p(a) {
            var c = b.createElement("span");
            return c.className = a.options.classPrefix + a.language.name, c;
          }
          function q(a, b) {
            var c, d, e, g, h, i, j, k;
            if (
              r("beforeAnalyze", this, { analyzerContext: a }),
                a.tokens.length > 0
            ) {
              for (
                a.language = C[a.tokens[0].language] || C[z],
                  c = [],
                  d = 0,
                  e = p(a),
                  g = b;
                g < a.tokens.length;
                g++
              ) {
                j = C[a.tokens[g].language] || C[z],
                  j.name !== a.language.name && (f(e, a.getNodes()),
                    a.resetNodes(),
                    c.push(e),
                    a.language = j,
                    e = p(a)),
                  a.index = g,
                  h = a.tokens[g].name,
                  i = "handle_" + h,
                  k = a.getAnalyzer.call(a) || a.language.analyzer,
                  k[i] ? k[i](a) : k.handleToken(a);
              }
              for (
                f(e, a.getNodes()),
                  c.push(e),
                  a.resetNodes(),
                  g = 0;
                g < c.length;
                g++
              ) {
                a.addNode(c[g]);
              }
            }
            r("afterAnalyze", this, { analyzerContext: a });
          }
          var s = function() {
            function b(a) {
              return a.language.identFirstLetter &&
                a.language.identFirstLetter.test(a.reader.current());
            }
            function d(a) {
              return n(a, a.language.keywords, "keyword");
            }
            function e(a) {
              var b, d;
              if (a.language.customTokens === c) return null;
              for (b in a.language.customTokens) {
                if (
                  d = n(a, a.language.customTokens[b], b),
                    null !== d
                ) {
                  return d;
                }
              }
              return null;
            }
            function f(a) {
              return n(a, a.language.operators, "operator");
            }
            function g(a) {
              var b = a.reader.current();
              return a.language.punctuation.test(k(b))
                ? a.createToken(
                  "punctuation",
                  b,
                  a.reader.getLine(),
                  a.reader.getColumn()
                )
                : null;
            }
            function h(a) {
              var c, d, e = a.reader.getLine(), f = a.reader.getColumn();
              if (!b(a)) return null;
              for (
                c = a.reader.current();
                (d = a.reader.peek()) !== a.reader.EOF &&
                a.language.identAfterFirstLetter.test(d);
              ) {
                c += a.reader.read();
              }
              return a.createToken("ident", c, e, f);
            }
            function i(a) {
              return "" === a.defaultData.text &&
                (a.defaultData.line = a.reader.getLine(),
                  a.defaultData.column = a.reader.getColumn()),
                a.defaultData.text += a.reader.current(),
                null;
            }
            function j(b) {
              var c, d, e, f, g, h, i, j, k = b.reader.current();
              for (c in b.language.scopes) {
                for (
                  d = b.language.scopes[c],
                    e = 0;
                  e < d.length;
                  e++
                ) {
                  if (
                    f = d[e][0],
                      j = k + b.reader.peek(f.length - 1),
                      f === j || b.language.caseInsensitive &&
                        j.toUpperCase() === f.toUpperCase()
                  ) {
                    return g = b.reader.getLine(),
                      h = b.reader.getColumn(),
                      b.reader.read(f.length - 1),
                      (i = a(d[e], c))(b, i, j, g, h);
                  }
                }
              }
              return null;
            }
            function l(a) {
              return a.language.numberParser(a);
            }
            function m(a) {
              var b, d, e = a.language.customParseRules;
              if (e === c) return null;
              for (b = 0; b < e.length; b++) if (d = e[b](a)) return d;
              return null;
            }
            return function(a) {
              return a.language.doNotParse.test(a.reader.current()) ? i(a)
                : m(a) || e(a) || d(a) || j(a) || h(a) || l(a) || f(a) ||
                  g(a) || i(a);
            };
          }();
          return { matchSunlightNode: function() {
            var a;
            return function(b) {
              return a || (a = new RegExp(
                "(?:\\s|^)" + this.options.classPrefix +
                  "highlight-(\\S+)(?:\\s|$)"
              )),
                a.exec(b.className);
            };
          }(), isAlreadyHighlighted: function() {
            var a;
            return function(b) {
              return a || (a = new RegExp(
                "(?:\\s|^)" + this.options.classPrefix + "highlighted(?:\\s|$)"
              )),
                a.test(b.className);
            };
          }(), highlight: function(a, b) {
            return o.call(this, a, b);
          }, highlightNode: function t(a) {
            var c, d, e, f, g, h, i, j, k;
            if (
              !this.isAlreadyHighlighted(a) &&
              null !== (c = this.matchSunlightNode(a))
            ) {
              for (
                d = c[1],
                  e = 0,
                  r("beforeHighlightNode", this, { node: a }),
                  f = 0;
                f < a.childNodes.length;
                f++
              ) {
                if (3 === a.childNodes[f].nodeType) {
                  for (
                    i = o.call(this, a.childNodes[f].nodeValue, d, i),
                      y++,
                      e = e || y,
                      g = i.getNodes(),
                      a.replaceChild(g[0], a.childNodes[f]),
                      h = 1;
                    h < g.length;
                    h++
                  ) {
                    a.insertBefore(g[h], g[h - 1].nextSibling);
                  }
                } else {
                  1 === a.childNodes[f].nodeType &&
                    t.call(this, a.childNodes[f]);
                }
              }
              a.className += " " + this.options.classPrefix + "highlighted",
                "block" === u(a, "display") && (j = b.createElement("div"),
                  j.className = this.options.classPrefix + "container",
                  k = b.createElement("div"),
                  k.className = this.options.classPrefix + "code-container",
                  this.options.maxHeight !== !1 && (k.style.overflowY = "auto",
                    k.style.maxHeight = this.options.maxHeight +
                      (/^\d+$/.test(this.options.maxHeight) ? "px" : "")),
                  j.appendChild(k),
                  a.parentNode.insertBefore(k, a),
                  a.parentNode.removeChild(a),
                  k.appendChild(a),
                  k.parentNode.insertBefore(j, k),
                  k.parentNode.removeChild(k),
                  j.appendChild(k)),
                r(
                  "afterHighlightNode",
                  this,
                  { container: j, codeContainer: k, node: a, count: e }
                );
            }
          } };
        }(),
        a.Sunlight = {
          version: "1.22.0",
          Highlighter: s,
          createAnalyzer: function() {
            return e(t);
          },
          globalOptions: B,
          highlightAll: function(a) {
            var c, d = new s(a), e = b.getElementsByTagName("*");
            for (c = 0; c < e.length; c++) d.highlightNode(e[c]);
          },
          registerLanguage: function(a, b) {
            var c, d, e;
            if (

              !a
            ) { 
              throw 'Languages must be registered with an identifier, e.g. "php" for PHP';
            }
            b = i(i({}, D), b),
              b.name = a,
              b.keywords = p(b.keywords || [], "\\b", b.caseInsensitive),
              b.operators = p(b.operators || [], "", b.caseInsensitive);
            for (c in b.customTokens) {
              b.customTokens[c] = p(
                b.customTokens[c].values,
                b.customTokens[c].boundary,
                b.caseInsensitive
              );
            }
            d = [];
            for (e in b.embeddedLanguages) {
              d.push(
                {
                  parentLanguage: b.name,
                  language: e,
                  switchTo: b.embeddedLanguages[e].switchTo,
                  switchBack: b.embeddedLanguages[e].switchBack
                }
              );
            }
            b.embeddedLanguages = d,
              C[b.name] = b;
          },
          isRegistered: function(a) {
            return C[a] !== c;
          },
          bind: function(a, b) {
            if (!E[a]) throw 'Unknown event "' + a + '"';
            E[a].push(b);
          },
          util: {
            last: g,
            regexEscape: k,
            eol: w,
            clone: j,
            escapeSequences: ["\\n", "\\t", "\\r", "\\\\", "\\v", "\\f"],
            contains: h,
            matchWord: n,
            createHashMap: p,
            createBetweenRule: m,
            createProceduralRule: l,
            getNextNonWsToken: function(a, b) {
              return o(a, b, 1, function(a) {
                return "default" === a.name;
              });
            },
            getPreviousNonWsToken: function(a, b) {
              return o(a, b, -1, function(a) {
                return "default" === a.name;
              });
            },
            getNextWhile: function(a, b, c) {
              return o(a, b, 1, c);
            },
            getPreviousWhile: function(a, b, c) {
              return o(a, b, -1, c);
            },
            whitespace: { token: "default", optional: !0 },
            getComputedStyle: u
          }
        },
        a.Sunlight.registerLanguage(
          z,
          { punctuation: /(?!x)x/, numberParser: x }
        );
    }(this, document),
    function(a, b) {
      function c(a) {
        for (var b, c = a.count(); b = a.token(--c);) {
          if (
            "operator" === b.name &&
            (">" === b.value || "/>" === b.value || "</" === b.value)
          ) {
            return !1;
          }
          if ("tagName" === b.name || "xmlOpenTag" === b.name) return !0;
        }
        return !1;
      }
      if (
        a === b || a.registerLanguage === b
      ) {
        throw "Include sunlight.js before including language files";
      }
      a.registerLanguage(
        "xml",
        {
          caseInsensitive: !0,
          scopes: {
            comment: [["<!--", "-->"], ["<%--", "--%>"]],
            cdata: [["<![CDATA[", "]]>"]],
            doctype: [["<!DOCTYPE", ">"]]
          },
          punctuation: /(?!x)x/,
          numberParser: function() {},
          customTokens: {
            xmlOpenTag: { values: ["<?xml"], boundary: "" },
            xmlCloseTag: { values: ["?>"], boundary: "" },
            aspOpenTag: {
              values: ["<%@", "<%$", "<%#", "<%=", "<%"],
              boundary: ""
            },
            aspCloseTag: { values: ["%>"], boundary: "" }
          },
          customParseRules: [function(b) {
            var c, d, e = b.reader.current(), f = e, g = b.reader.getLine(),
              h = b.reader.getColumn();
            if (!/[A-Za-z_]/.test(e)) return null;
            if (
              c = b.token(b.count() - 1),
                !c || "operator" !== c.name ||
                  !a.util.contains(["<", "</"], c.value)
            ) {
              return null;
            }
            for (; (d = b.reader.peek()) && /[.\w-]/.test(d);) {
              f += b.reader.read();
            }
            return b.createToken("tagName", f, g, h);
          }, function(a) {
            var b, d, e = a.reader.current(), f = a.reader.getLine(),
              g = a.reader.getColumn();
            if ('"' !== e && "'" !== e) return null;
            if (!c(a)) return null;
            for (
              b = e;
              (d = a.reader.peek()) && (b += a.reader.read(), d !== e);
            );
            return a.createToken("string", b, f, g);
          }, function(a) {
            var b, d, e = a.reader.current(), f = 1, g = a.reader.getLine(),
              h = a.reader.getColumn();
            if (!/[A-Za-z_]/.test(e)) return null;
            if (!c(a)) return null;
            for (b = a.reader.peek(); b.length === f;) {
              if (/<$/.test(b)) return null;
              if (
                />$/.test(
                  b
                )
              ) {
                return d = d || e + b.substring(0, b.length - 1),
                  a.reader.read(d.length - 1),
                  a.createToken("attribute", d, g, h);
              }
              !d && /[=\s:]$/.test(b) &&
                (d = e + b.substring(0, b.length - 1)),
                b = a.reader.peek(++f);
            }
            return null;
          }, function(a) {
            var b, c = a.reader.current(), d = 1, e = a.reader.getLine(),
              f = a.reader.getColumn();
            if ("&" !== c) return null;
            for (b = a.reader.peek(d); b.length === d;) {
              if (";" === b.charAt(b.length - 1)) {
                return a.createToken(
                  "entity",
                  c + a.reader.read(d),
                  e,
                  f
                );
              }
              if (!/[A-Za-z0-9]$/.test(b)) break;
              b = a.reader.peek(++d);
            }
            return null;
          }, function(a) {
            var b, c = "<%--", d = a.reader.getLine(),
              e = a.reader.getColumn();
            if (
              "<" !== a.reader.current() || "%--" !== a.reader.peek(3)
            ) {
              return null;
            }
            for (a.reader.read(3); b = a.reader.peek();) {
              if ("--%>" === a.reader.peek(4)) {
                c += a.reader.read(4);
                break;
              }
              c += a.reader.read();
            }
            return a.createToken("comment", c, d, e);
          }],
          embeddedLanguages: { css: { switchTo: function(a) {
            var b, c = a.token(a.count() - 1);
            if (
              !c || a.reader.current() + a.reader.peek(6) === "</style"
            ) {
              return !1;
            }
            if ("operator" !== c.name || ">" !== c.value) return !1;
            for (b = a.count() - 1; c = a.token(--b);) {
              if (
                "tagName" === c.name
              ) {
                if (
                  "style" === c.value && (c = a.token(--b),
                    c && "operator" === c.name && "<" === c.value)
                ) {
                  return !0;
                }
                break;
              }
            }
            return !1;
          }, switchBack: function(a) {
            return "</style" === a.reader.peek(7);
          } }, javascript: { switchTo: function(a) {
            var b, c = a.token(a.count() - 1);
            if (
              !c || a.reader.current() + a.reader.peek(7) === "</script"
            ) {
              return !1;
            }
            if ("operator" !== c.name || ">" !== c.value) return !1;
            for (b = a.count() - 1; c = a.token(--b);) {
              if (
                "tagName" === c.name
              ) {
                if (
                  "script" === c.value && (c = a.token(--b),
                    c && "operator" === c.name && "<" === c.value)
                ) {
                  return !0;
                }
                break;
              }
            }
            return !1;
          }, switchBack: function(a) {
            return "</script" === a.reader.peek(8);
          } }, php: { switchTo: function(a) {
            var b = a.reader.peek(4);
            return "<" === a.reader.current() &&
              ("?php" === b || /^\?(?!xml)/.test(b));
          }, switchBack: function(a) {
            var b = a.token(a.count() - 1);
            return b && "closeTag" === b.name;
          } }, csharp: { switchTo: function(a) {
            var b = a.token(a.count() - 1);
            return b && "aspOpenTag" === b.name;
          }, switchBack: function(a) {
            return "%>" === a.reader.peek(2);
          } }, scala: { switchTo: function(a) {
            return a.options.enableScalaXmlInterpolation &&
              "{" === a.reader.current() ? !0 : !1;
          }, switchBack: function(a) {
            var b = a.token(a.count() - 1);
            if ("punctuation" === b.name) {
              if ("{" === b.value) a.items.scalaBracketNestingLevel++;
              else if (
                "}" === b.value && (a.items.scalaBracketNestingLevel--,
                  0 === a.items.scalaBracketNestingLevel)
              ) {
                return !0;
              }
            }
            return !1;
          } } },
          contextItems: { scalaBracketNestingLevel: 0 },
          operators: ["=", "/>", "</", "<", ">", ":"]
        }
      );
    }(this.Sunlight),
    function(a, b) {
      a.fn.sunlight = function(a) {
        var c = new b.Sunlight.Highlighter(a);
        return this.each(function() {
          c.highlightNode(this);
        }), this;
      };
    }(jQuery, this),
    function(a, b) {
      if (
        a === b || a.registerLanguage === b
      ) {
        throw "Include sunlight.js before including language files";
      }
      a.registerLanguage(
        "6502asm",
        {
          keywords: [
            "BCC",
            "BCS",
            "BEQ",
            "BMI",
            "BNE",
            "BPL",
            "BVC",
            "BVS",
            "CMP",
            "CPX",
            "CPY",
            "CLC",
            "CLD",
            "CLI",
            "CLV",
            "SEC",
            "SED",
            "SEI",
            "DEX",
            "DEY",
            "INX",
            "INY",
            "TAX",
            "TAY",
            "TXA",
            "TYA",
            "BRK",
            "NOP",
            "RTI",
            "RTS",
            "ASL",
            "LSR",
            "ROL",
            "ROR",
            "ADC",
            "AND",
            "BIT",
            "DEC",
            "EOR",
            "INC",
            "JMP",
            "JSR",
            "LDA",
            "LDX",
            "LDY",
            "ORA",
            "SBC",
            "STA",
            "STX",
            "STY",
            "PHA",
            "PHP",
            "PLA",
            "PLP",
            "TSX",
            "TXS"
          ],
          scopes: { string: [['"', '"']], comment: [[";", "\n", null, !0]] },
          operators: [
            ">>",
            "<<",
            ">=",
            "<=",
            "==",
            "!=",
            "&&",
            "||",
            "~",
            "-",
            "<",
            ">",
            "*",
            "/",
            "%",
            "+",
            "-",
            "=",
            "&",
            "^",
            "|",
            "?"
          ],
          identFirstLetter: /[A-Za-z]/,
          identAfterFirstLetter: /\w/,
          customTokens: {
            illegalOpcode: {
              values: [
                "SLO",
                "RLA",
                "SRE",
                "RRA",
                "SAX",
                "LAX",
                "DCP",
                "ISC",
                "ANC",
                "ALR",
                "ARR",
                "XAA",
                "AXS",
                "AHX",
                "SHY",
                "SHX",
                "TAS",
                "LAS"
              ],
              boundary: "\\b"
            },
            pseudoOp: {
              values: [
                "BYTE",
                "WORD",
                "DS",
                "ORG",
                "RORG",
                "ALIGN",
                "MAC",
                "ENDM",
                "SUBROUTINE"
              ],
              boundary: "\\b"
            }
          },
          customParseRules: [function(a) {
            var b, c, d = a.reader.current(), e = a.reader.getLine(),
              f = a.reader.getColumn(), g = 0, h = 0;
            if ("#" !== d) return null;
            for (
              b = a.reader.peek(),
                c = d;
              g > 0 || h > 0 || !/\s/.test(b);
            ) {
              ")" === b && g > 0 && g--,
                "]" === b && h > 0 && h--,
                "(" === b && g++,
                "[" === b && h++,
                c += a.reader.read(),
                b = a.reader.peek();
            }
            return a.createToken("constant", c, e, f);
          }, function() {
            var b = [
              "BCC",
              "BCS",
              "BEQ",
              "BMI",
              "BNE",
              "BPL",
              "BVC",
              "BVS",
              "JMP",
              "JSR"
            ];
            return function(c) {
              var d, e, f, g = c.reader.getLine(), h = c.reader.getColumn();
              if (!/[A-Za-z]/.test(c.reader.current())) return null;
              if (

                d = a.util.getPreviousNonWsToken(c.getAllTokens(), c.count()),
                  (!d || "keyword" !== d.name ||
                    !a.util.contains(b, d.value, !0)) && c.count() > 0 &&
                    !/\n$/.test(c.defaultData.text)
              ) {
                return null;
              }
              for (
                e = c.reader.current();
                (f = c.reader.peek()) !== c.reader.EOF && /\w/.test(f);
              ) {
                e += c.reader.read();
              }
              return c.createToken("label", e, g, h);
            };
          }()],
          caseInsensitive: !0,
          numberParser: function(a) {
            var b, c, d = a.reader.current(), e = a.reader.getLine(),
              f = a.reader.getColumn();
            if (/\d/.test(d)) {
              b = d,
                "." === a.reader.peek() && (b += a.reader.read());
            } else {
              if ("$" !== d && "%" !== d) return null;
              b = d + a.reader.read();
            }
            for (
              ;
              (c = a.reader.peek()) !== a.reader.EOF && /[A-Fa-f0-9]/.test(c);
            ) {
              b += a.reader.read();
            }
            return a.createToken("number", b, e, f);
          }
        }
      );
    }(this.Sunlight),
    function(a, b) {
      if (
        a === b || a.registerLanguage === b
      ) {
        throw "Include sunlight.js before including language files";
      }
      a.registerLanguage(
        "actionscript",
        {
          keywords: [
            "default xml namespace",
            "use namespace",
            "break",
            "case",
            "catch",
            "continue",
            "default",
            "do",
            "else",
            "finally",
            "for",
            "if",
            "in",
            "label",
            "return",
            "super",
            "switch",
            "throw",
            "try",
            "while",
            "with",
            "dynamic",
            "final",
            "internal",
            "native",
            "override",
            "private",
            "protected",
            "public",
            "static",
            "class",
            "const",
            "extends",
            "function",
            "get",
            "implements",
            "interface",
            "namespace",
            "package",
            "set",
            "var",
            "import",
            "include",
            "false",
            "null",
            "this",
            "true",
            "typeof",
            "void",
            "as",
            "instanceof",
            "is",
            "new"
          ],
          customTokens: {
            varArgs: { values: ["...rest"], boundary: "[\\W]" },
            constant: {
              values: ["Infinity", "NaN", "undefined"],
              boundary: "\\b"
            },
            globalObject: {
              values: [
                "ArgumentError",
                "arguments",
                "Array",
                "Boolean",
                "Class",
                "Date",
                "DefinitionError",
                "Error",
                "EvalError",
                "Function",
                "int",
                "Math",
                "Namespace",
                "Number",
                "Object",
                "QName",
                "RangeError",
                "ReferenceError",
                "RegExp",
                "SecurityError",
                "String",
                "SyntaxError",
                "TypeError",
                "uint",
                "URIError",
                "Vector",
                "VerifyError",
                "XMLList",
                "XML"
              ],
              boundary: "\\b"
            }
          },
          scopes: {
            string: [
              ['"', '"', a.util.escapeSequences.concat(['\\"'])],
              ["'", "'", a.util.escapeSequences.concat(["\\'", "\\\\"])]
            ],
            comment: [["//", "\n", null, !0], ["/*", "*/"]],
            xmlAttribute: [["@", "\\b"]]
          },
          customParseRules: [function() {
            var b = a.util.createHashMap(
              [
                "Array",
                "Boolean",
                "decodeURIComponent",
                "decodeURI",
                "encodeURIComponent",
                "encodeURI",
                "escape",
                "int",
                "isFinite",
                "isNaN",
                "isXMLName",
                "Number",
                "Object",
                "parseFloat",
                "parseInt",
                "String",
                "trace",
                "uint",
                "unescape",
                "Vector",
                "XML",
                "XMLList"
              ],
              "\\b",
              !1
            );
            return function(c) {
              var d, e, f, g;
              if (!/[A-Za-z]/.test(c.reader.current())) return null;
              if (
                d = c.token(c.count() - 1),
                  d &&
                    ("keyword" === d.name && "new" === d.value ||
                      "operator" === d.name && ":" === d.value)
              ) {
                return null;
              }
              if (
                e = a.util.matchWord(c, b, "globalFunction", !0),
                  !e
              ) {
                return null;
              }
              for (
                g = e.value.length;
                (f = c.reader.peek(g)) && f.length === g;
              ) {
                if (!/\s$/.test(f)) {
                  if (
                    "(" === a.util.last(f)
                  ) {
                    return e.line = c.reader.getLine(),
                      e.column = c.reader.getColumn(),
                      c.reader.read(e.value.length - 1),
                      e;
                  }
                  break;
                }
              }
              return null;
            };
          }(), function(c) {
            var d, e, f, g = c.reader.peek(), h = "/", i = c.reader.getLine(),
              j = c.reader.getColumn();
            if (
              "/" !== c.reader.current() || "/" === g || "*" === g
            ) {
              return null;
            }
            if (
              d = function() {
                var d = c.token(c.count() - 1), e = null;
                return "" !== c.defaultData.text &&
                  (e = c.createToken("default", c.defaultData.text)),
                  e || (e = d),
                  e === b ? !0
                    : "default" === e.name && e.value.indexOf("\n") > -1 ? !0
                      : a.util.contains(["keyword", "ident", "number"], d.name)
                        ? !1
                        : "punctuation" !== d.name ||
                          a.util.contains(["(", "{", "[", ",", ";"], d.value)
                          ? !0 : !1;
              }(),
                !d
            ) {
              return null;
            }
            for (; c.reader.peek() !== c.reader.EOF;) {
              if (
                e = c.reader.peek(2),
                  "\\/" !== e && "\\\\" !== e
              ) {
                if (h += f = c.reader.read(), "/" === f) break;
              } else h += c.reader.read(2);
            }
            for (
              ;
              c.reader.peek() !== c.reader.EOF &&
              /[A-Za-z]/.test(c.reader.peek());
            ) {
              h += c.reader.read();
            }
            return c.createToken("regexLiteral", h, i, j);
          }],
          identFirstLetter: /[A-Za-z_]/,
          identAfterFirstLetter: /\w/,
          namedIdentRules: {
            custom: [function(c) {
              var d, e, f, g = a.util.getNextNonWsToken(c.tokens, c.index);
              if (g && "operator" === g.name && "." === g.value) return !1;
              for (e = c.index, f = c.tokens[e]; (d = c.tokens[--e]) !== b;) {
                if (
                  "keyword" === d.name && a.util.contains(
                    ["new", "is", "instanceof", "import"],
                    d.value
                  )
                ) {
                  return !0;
                }
                if ("default" !== d.name) {
                  if ("ident" !== d.name) {
                    if ("operator" !== d.name || "." !== d.value) break;
                    if (f && "ident" !== f.name) return !1;
                    f = d;
                  } else {
                    if (f && "ident" === f.name) return !1;
                    f = d;
                  }
                }
              }
              return !1;
            }],
            follows: [
              [
                { token: "keyword", values: ["class", "extends"] },
                { token: "default" }
              ],
              [{ token: "operator", values: [":"] }, a.util.whitespace]
            ],
            between: [
              {
                opener: { token: "keyword", values: ["implements"] },
                closer: { token: "punctuation", values: ["{"] }
              }
            ]
          },
          operators: [
            "++",
            "+=",
            "+",
            "--",
            "-=",
            "-",
            "*=",
            "*",
            "/=",
            "/",
            "%=",
            "%",
            "&&=",
            "&&",
            "||=",
            "||",
            "|=",
            "|",
            "&=",
            "&",
            "^=",
            "^",
            ">>>=",
            ">>>",
            ">>=",
            ">>",
            "<<=",
            "<<",
            "<=",
            "<",
            ">=",
            ">",
            "===",
            "==",
            "!==",
            "!=",
            "!",
            "~",
            "::",
            "?",
            ":",
            ".",
            "="
          ]
        }
      );
    }(this.Sunlight),
    function(a, b) {
      if (
        a === b || a.registerLanguage === b
      ) {
        throw "Include sunlight.js before including language files";
      }
      a.registerLanguage(
        "bash",
        {
          keywords: [
            "while",
            "for",
            "in",
            "do",
            "done",
            "until",
            "if",
            "fi",
            "then",
            "else",
            "case",
            "esac",
            "break",
            "continue",
            "select"
          ],
          customTokens: {
            command: {
              values: [
                "return",
                "source",
                "ac",
                "adduser",
                "agetty",
                "agrep",
                "arch",
                "ar",
                "at",
                "autoload",
                "awk",
                "badblocks",
                "banner",
                "basename",
                "batch",
                "bc",
                "bg",
                "bind",
                "bison",
                "builtin",
                "bzgrep",
                "bzip2",
                "caller",
                "cal",
                "cat",
                "cd",
                "chattr",
                "chfn",
                "chgrp",
                "chkconfig",
                "chmod",
                "chown",
                "chroot",
                "cksum",
                "clear",
                "clock",
                "cmp",
                "colrm",
                "column",
                "col",
                "command",
                "comm",
                "compgen",
                "complete",
                "compress",
                "coproc",
                "cpio",
                "cp",
                "cron",
                "crypt",
                "csplit",
                "cut",
                "cu",
                "date",
                "dc",
                "dd",
                "debugfs",
                "declare",
                "depmod",
                "df",
                "dialog",
                "diff3",
                "diffstat",
                "diff",
                "dig",
                "dirname",
                "dirs",
                "disown",
                "dmesg",
                "doexec",
                "dos2unix",
                "dump",
                "dumpe2fs",
                "du",
                "e2fsck",
                "echo",
                "egrep",
                "enable",
                "enscript",
                "env",
                "eqn",
                "eval",
                "exec",
                "exit",
                "expand",
                "export",
                "expr",
                "factor",
                "false",
                "fdformat",
                "fdisk",
                "fgrep",
                "fg",
                "file",
                "find",
                "finger",
                "flex",
                "flock",
                "fmt",
                "fold",
                "free",
                "fsck",
                "ftp",
                "fuser",
                "getfacl",
                "getopts",
                "getopt",
                "gettext",
                "getty",
                "gnome-mount",
                "grep",
                "groff",
                "groupmod",
                "groups",
                "gs",
                "gzip",
                "halt",
                "hash",
                "hdparm",
                "head",
                "help",
                "hexdump",
                "hostid",
                "hostname",
                "host",
                "hwclock",
                "iconv",
                "id",
                "ifconfig",
                "infocmp",
                "info",
                "init",
                "insmod",
                "install",
                "ipcalc",
                "ip",
                "iwconfig",
                "jobs",
                "join",
                "jot",
                "killall",
                "kill",
                "lastcomm",
                "lastlog",
                "last",
                "ldd",
                "less",
                "let",
                "lex",
                "lid",
                "ln",
                "locate",
                "lockfile",
                "logger",
                "logname",
                "logout",
                "logrotate",
                "look",
                "losetup",
                "lp",
                "lsdev",
                "lsmod",
                "lsof",
                "lspci",
                "lsusb",
                "ls",
                "ltrace",
                "lynx",
                "lzcat",
                "lzma",
                "m4",
                "mailstats",
                "mailto",
                "mail",
                "makedev",
                "make",
                "man",
                "mapfile",
                "mcookie",
                "md5sum",
                "merge",
                "mesg",
                "mimencode",
                "mkbootdisk",
                "mkdir",
                "mke2fs",
                "mkfifo",
                "mkisofs",
                "mknod",
                "mkswap",
                "mktemp",
                "mmencode",
                "modinfo",
                "modprobe",
                "more",
                "mount",
                "msgfmt",
                "mv",
                "nc",
                "netconfig",
                "netstat",
                "newgrp",
                "nice",
                "nl",
                "nmap",
                "nm",
                "nohup",
                "nslookup",
                "objdump",
                "od",
                "openssl",
                "passwd",
                "paste",
                "patch",
                "diff",
                "pathchk",
                "pax",
                "pgrep",
                "pidof",
                "ping",
                "pkill",
                "popd",
                "pr",
                "printenv",
                "printf",
                "procinfo",
                "pstree",
                "ps",
                "ptx",
                "pushd",
                "pwd",
                "quota",
                "rcp",
                "rdev",
                "rdist",
                "readelf",
                "readlink",
                "readonly",
                "read",
                "reboot",
                "recode",
                "renice",
                "reset",
                "resize",
                "restore",
                "rev",
                "rlogin",
                "rmdir",
                "rmmod",
                "rm",
                "route",
                "rpm2cpio",
                "rpm",
                "rsh",
                "rsync",
                "runlevel",
                "run-parts",
                "rx",
                "rz",
                "sar",
                "scp",
                "script",
                "sdiff",
                "sed",
                "seq",
                "service",
                "setfacl",
                "setquota",
                "setserial",
                "setterm",
                "set",
                "sha1sum",
                "shar",
                "shopt",
                "shred",
                "shutdown",
                "size",
                "skill",
                "sleep",
                "slocate",
                "snice",
                "sort",
                "source",
                "sox",
                "split",
                "sq",
                "ssh",
                "stat",
                "strace",
                "strings",
                "strip",
                "stty",
                "sudo",
                "sum",
                "suspend",
                "su",
                "swapoff",
                "swapon",
                "sx",
                "sync",
                "sz",
                "tac",
                "tail",
                "tar",
                "tbl",
                "tcpdump",
                "tee",
                "telinit",
                "telnet",
                "tex",
                "texexec",
                "time",
                "times",
                "tmpwatch",
                "top",
                "touch",
                "tput",
                "traceroute",
                "true",
                "tr",
                "tset",
                "tsort",
                "tty",
                "tune2fs",
                "typeset",
                "type",
                "ulimit",
                "umask",
                "umount",
                "uname",
                "unarc",
                "unarj",
                "uncompress",
                "unexpand",
                "uniq",
                "units",
                "unlzma",
                "unrar",
                "unset",
                "unsq",
                "unzip",
                "uptime",
                "usbmodules",
                "useradd",
                "userdel",
                "usermod",
                "users",
                "usleep",
                "uucp",
                "uudecode",
                "uuencode",
                "uux",
                "vacation",
                "vdir",
                "vmstat",
                "vrfy",
                "wait",
                "wall",
                "watch",
                "wc",
                "wget",
                "whatis",
                "whereis",
                "which",
                "whoami",
                "whois",
                "who",
                "write",
                "w",
                "xargs",
                "yacc",
                "yes",
                "zcat",
                "zdiff",
                "zdump",
                "zegrep",
                "zfgrep",
                "zgrep",
                "zip"
              ],
              boundary: "\\b"
            },
            specialVariable: { values: ["$$", "$?", "$#"], boundary: "" }
          },
          scopes: {
            string: [
              ['"', '"', a.util.escapeSequences.concat(['\\"'])],
              ["'", "'", ["'", "\\\\"]]
            ],
            hashBang: [["#!", "\n", null, !0]],
            comment: [["#", "\n", null, !0]],
            verbatimCommand: [["`", "`", ["\\`", "\\\\"]]],
            variable: [["$", { length: 1, regex: /[\W]/ }, null, !0]]
          },
          identFirstLetter: /[A-Za-z_]/,
          identAfterFirstLetter: /\w/,
          namedIdentRules: {
            precedes: [
              [
                a.util.whitespace,
                { token: "punctuation", values: ["("] },
                a.util.whitespace,
                { token: "punctuation", values: [")"] },
                a.util.whitespace,
                { token: "punctuation", values: ["{"] }
              ]
            ]
          },
          operators: [
            "++",
            "--",
            "=",
            "/",
            "+",
            "*",
            "-",
            "!=",
            ".",
            "|",
            ":",
            ",",
            "!",
            "?",
            ">>",
            ">",
            "<",
            ";;",
            ";"
          ]
        }
      );
    }(this.Sunlight),
    function(a, b) {
      if (
        a === b || a.registerLanguage === b
      ) {
        throw "Include sunlight.js before including language files";
      }
      a.registerLanguage(
        "batch",
        {
          caseInsensitive: !0,
          scopes: {
            string: [['"', '"', ['\\"', "\\\\"]]],
            comment: [["REM", "\n", null, !0], ["::", "\n", null, !0]],
            variable: [["%", { regex: /[^\w%]/, length: 1 }, null, !0]]
          },
          customParseRules: [function(a) {
            var b, c, d, e, f = "";
            if (
              !a.reader.isSolWs() || ":" !== a.reader.current() ||
              ":" === a.reader.peek()
            ) {
              return null;
            }
            for (
              b = a.createToken(
                "operator",
                ":",
                a.reader.getLine(),
                a.reader.getColumn()
              );
              (c = a.reader.peek()) && !/\s/.test(c);
            ) {
              f += a.reader.read(),
                d || (d = a.reader.getLine(), e = a.reader.getColumn());
            }
            return "" === f ? null : [b, a.createToken("label", f, d, e)];
          }, function(b) {
            var c, d, e = a.util.createProceduralRule(
              b.count() - 1,
              -1,
              [
                { token: "keyword", values: ["goto"] },
                { token: "operator", values: [":"], optional: !0 }
              ],
              !0
            ), f = b.reader.getLine(), g = b.reader.getColumn();
            if (!e(b.getAllTokens())) return null;
            for (
              d = b.reader.current();
              (c = b.reader.peek()) && !/[\W]/.test(c);
            ) {
              d += b.reader.read();
            }
            return b.createToken("label", d, f, g);
          }, function() {
            var b = a.util.createHashMap(
              [
                "assoc",
                "attrib",
                "break",
                "bcdedit",
                "cacls",
                "call",
                "cd",
                "chcp",
                "chdir",
                "chkdsk",
                "chkntfs",
                "cls",
                "cmd",
                "color",
                "comp",
                "compact",
                "convertfcopy",
                "date",
                "del",
                "dir",
                "diskcomp",
                "diskcopy",
                "diskpart",
                "doskey",
                "driverquery",
                "echo",
                "endlocal",
                "erase",
                "exit",
                "fc",
                "findstr",
                "find",
                "format",
                "for",
                "fsutil",
                "ftype",
                "goto",
                "gpresult",
                "graftabl",
                "help",
                "icacls",
                "if",
                "label",
                "md",
                "mkdir",
                "mklink",
                "mode",
                "more",
                "move",
                "openfiles",
                "path",
                "pause",
                "popd",
                "print",
                "prompt",
                "pushd",
                "rd",
                "recover",
                "rename",
                "ren",
                "replace",
                "rmdir",
                "robocopy",
                "setlocal",
                "set",
                "schtasks",
                "sc",
                "shift",
                "shutdown",
                "sort",
                "start",
                "subst",
                "systeminfo",
                "tasklist",
                "taskkill",
                "time",
                "title",
                "tree",
                "type",
                "verify",
                "ver",
                "vol",
                "xcopy",
                "wmic",
                "lfnfor",
                "do",
                "else",
                "errorlevel",
                "exist",
                "in",
                "not",
                "choice",
                "com1",
                "con",
                "prn",
                "aux",
                "nul",
                "lpt1",
                "exit",
                "eof",
                "off",
                "on",
                "equ",
                "neq",
                "lss",
                "leq",
                "gtr",
                "geq"
              ],
              "\\b",
              !0
            );
            return function(c) {
              var d, e, f = a.util.matchWord(c, b, "keyword", !0);
              if (!f) return null;
              if (!c.reader.isSolWs()) {
                for (e = c.count(); d = c.token(--e);) {
                  if (
                    "keyword" === d.name &&
                    a.util.contains(["echo", "title", "set"], d.value)
                  ) {
                    return null;
                  }
                  if ("operator" === d.name && "=" === d.value) return null;
                  if ("operator" === d.name && "|" === d.value) break;
                  if ("default" === d.name && d.value.indexOf("\n") >= 0)break;
                }
              }
              return c.reader.read(f.value.length - 1), f;
            };
          }()],
          identFirstLetter: /[A-Za-z_\.]/,
          identAfterFirstLetter: /[\w-]/,
          operators: [
            "&&",
            "||",
            "&",
            ":",
            "/",
            "==",
            "|",
            "@",
            "*",
            ">>",
            ">",
            "<",
            "==!",
            "!",
            "=",
            "+"
          ]
        }
      );
    }(this.Sunlight),
    function(a, b) {
      if (
        a === b || a.registerLanguage === b
      ) {
        throw "Include sunlight.js before including language files";
      }
      a.registerLanguage(
        "brainfuck",
        { customTokens: {
          increment: { values: [">"], boundary: "" },
          decrement: { values: ["<"], boundary: "" },
          incrementPointer: { values: ["+"], boundary: "" },
          decrementPointer: { values: ["-"], boundary: "" },
          write: { values: ["."], boundary: "" },
          read: { values: [","], boundary: "" },
          openLoop: { values: ["["], boundary: "" },
          closeLoop: { values: ["]"], boundary: "" }
        } }
      );
    }(this.Sunlight),
    function(a, b) {
      if (
        a === b || a.registerLanguage === b
      ) {
        throw "Include sunlight.js before including language files";
      }
      var c = [
        "int",
        "char",
        "void",
        "long",
        "signed",
        "unsigned",
        "double",
        "bool",
        "typename",
        "class",
        "short",
        "wchar_t",
        "struct"
      ], d = [
        "int",
        "char",
        "void",
        "long",
        "signed",
        "unsigned",
        "double",
        "bool",
        "typename",
        "class",
        "short",
        "wchar_t"
      ];
      a.registerLanguage(
        "cpp",
        {
          keywords: [
            "and",
            "default",
            "noexcept",
            "template",
            "and_eq",
            "delete",
            "not",
            "this",
            "alignof",
            "double",
            "not_eq",
            "thread_local",
            "asm",
            "dynamic_cast",
            "nullptr",
            "throw",
            "auto",
            "else",
            "operator",
            "true",
            "bitand",
            "enum",
            "or",
            "try",
            "bitor",
            "explicittodo",
            "or_eq",
            "typedef",
            "bool",
            "export",
            "private",
            "typeid",
            "break",
            "externtodo",
            "protected",
            "typename",
            "case",
            "false",
            "public",
            "union",
            "catch",
            "float",
            "register",
            "using",
            "char",
            "for",
            "reinterpret_cast",
            "unsigned",
            "char16_t",
            "friend",
            "return",
            "void",
            "char32_t",
            "goto",
            "short",
            "wchar_t",
            "class",
            "if",
            "signed",
            "virtual",
            "compl",
            "inline",
            "sizeof",
            "volatile",
            "const",
            "int",
            "static",
            "while",
            "constexpr",
            "long",
            "static_assert",
            "xor",
            "const_cast",
            "mutable",
            "static_cast",
            "xor_eq",
            "continue",
            "namespace",
            "struct",
            "decltype",
            "new",
            "switch"
          ],
          customTokens: {
            constant: {
              values: [
                "EXIT_SUCCESS",
                "EXIT_FAILURE",
                "SIG_DFL",
                "SIG_IGN",
                "SIG_ERR",
                "SIGABRT",
                "SIGFPE",
                "SIGILL",
                "SIGINT",
                "SIGSEGV",
                "SIGTERM"
              ],
              boundary: "\\b"
            },
            basicType: {
              values: ["ptrdiff_t", "size_t", "nullptr_t", "max_align_t"],
              boundary: "\\b"
            },
            ellipsis: { values: ["..."], boundary: "" }
          },
          scopes: {
            string: [['"', '"', a.util.escapeSequences.concat(['\\"'])]],
            "char": [["'", "'", ["\\'", "\\\\"]]],
            comment: [["//", "\n", null, !0], ["/*", "*/"]],
            preprocessorDirective: [["#", "\n", null, !0]]
          },
          customParseRules: [],
          identFirstLetter: /[A-Za-z_]/,
          identAfterFirstLetter: /\w/,
          namedIdentRules: {
            custom: [function() {
              var b = [
                [
                  a.util.whitespace,
                  { token: "operator", values: ["*", "**"] },
                  { token: "default" },
                  { token: "ident" },
                  a.util.whitespace,
                  { token: "punctuation", values: [";"] }
                ],
                [
                  { token: "default" },
                  { token: "operator", values: ["&"] },
                  a.util.whitespace,
                  { token: "ident" }
                ]
              ];
              return function(c) {
                var d, e, f = function(d) {
                  for (var e = 0; e < b.length; e++) {
                    if (
                      a.util.createProceduralRule(
                        c.index + 1,
                        1,
                        b[e],
                        !1
                      )(d)
                    ) {
                      return !0;
                    }
                  }
                  return !1;
                }(c.tokens);
                if (!f) return !1;
                for (e = c.index; d = c.tokens[--e];) {
                  if (
                    "punctuation" === d.name &&
                    (";" === d.value || "{" === d.value)
                  ) {
                    return !0;
                  }
                  if ("operator" === d.name && "=" === d.value) return !1;
                }
                return !1;
              };
            }(), function() {
              var b = [
                [
                  a.util.whitespace,
                  { token: "punctuation", values: [")"] },
                  a.util.whitespace,
                  { token: "ident" }
                ],
                [
                  { token: "operator", values: ["*", "**"] },
                  a.util.whitespace,
                  { token: "punctuation", values: [")"] },
                  a.util.whitespace,
                  { token: "operator", values: ["&"], optional: !0 },
                  { token: "ident" }
                ]
              ];
              return function(c) {
                var d, e, f, g = function(d) {
                  for (var e = 0; e < b.length; e++) {
                    if (
                      a.util.createProceduralRule(
                        c.index + 1,
                        1,
                        b[e],
                        !1
                      )(d)
                    ) {
                      return !0;
                    }
                  }
                  return !1;
                }(c.tokens);
                if (!g) return !1;
                for (e = c.index; d = c.tokens[--e];) {
                  if (
                    "punctuation" === d.name && "(" === d.value
                  ) {
                    return f = a.util.getPreviousNonWsToken(c.tokens, e),
                      f && "keyword" === f.name ? !1 : !0;
                  }
                }
                return !1;
              };
            }(), function(c) {
              var e, f, g = c.index,
                h = a.util.getPreviousNonWsToken(c.tokens, c.index), i = !1;
              if (!h || "keyword" === h.name) return !1;
              for (f = [0, 0]; (e = c.tokens[--g]) !== b;) {
                if ("keyword" === e.name && "class" === e.value) return !1;
                if ("operator" !== e.name) {
                  if (
                    !("keyword" === e.name && a.util.contains(d, e.value) ||
                      "default" === e.name || "punctuation" === e.name &&
                      "," === e.value)
                  ) {
                    if ("ident" !== e.name) break;
                    i = !0;
                  }
                } else {
                  switch (e.value) {
                    case "<":
                    case "<<":
                      f[0] += e.value.length;
                      break;
                    case ">":
                    case ">>":
                      if (0 === f[0]) return !1;
                      f[1] += e.value.length;
                      break;
                    case ".":
                      break;
                    default:
                      return !1;
                  }
                }
              }
              if (!i || 0 === f[0]) return !1;
              for (g = c.index; (e = c.tokens[++g]) !== b;) {
                if (
                  "operator" === e.name &&
                  (">" === e.value || ">>" === e.value)
                ) {
                  return !0;
                }
                if (

                  !("keyword" === e.name && a.util.contains(d, e.value) ||
                    "operator" === e.name &&
                    a.util.contains(["<", "<<", ">", ">>"], e.value) ||
                    "punctuation" === e.name && "," === e.value ||
                    "ident" === e.name || "default" === e.name)
                ) {
                  return !1;
                }
              }
              return !1;
            }, function(e) {
              var f, g, h = a.util.getPreviousNonWsToken(e.tokens, e.index);
              if (
                h !== b &&
                ("ident" === h.name || "keyword" === h.name && a.util.contains(
                  c.concat(["string", "object", "void"]),
                  h.value
                ) || "operator" === h.name && "." === h.value)
              ) {
                return !1;
              }
              if (
                h = a.util.getNextNonWsToken(e.tokens, e.index),
                  !h || "operator" !== h.name || "<" !== h.value
              ) {
                return !1;
              }
              for (f = e.index, g = [0, 0]; (h = e.tokens[++f]) !== b;) {
                if ("operator" !== h.name) {
                  if (
                    !("default" === h.name || "ident" === h.name ||
                      "keyword" === h.name && a.util.contains(d, h.value) ||
                      "punctuation" === h.name && "," === h.value)
                  ) {
                    return !1;
                  }
                } else {
                  switch (h.value) {
                    case "<":
                      g[0]++;
                      break;
                    case "<<":
                      g[0] += 2;
                      break;
                    case ">":
                      g[1]++;
                      break;
                    case ">>":
                      g[1] += 2;
                      break;
                    default:
                      return !1;
                  }
                  if (g[0] === g[1]) break;
                }
              }
              return g[0] !== g[1] ? !1 : (h = e.tokens[++f],
                !h || "default" !== h.name && "ident" !== h.name ? !1
                  : "default" !== h.name ||
                    (h = e.tokens[++f], h && "ident" === h.name) ? !0 : !1);
            }, function(b) {
              var c, d, e = a.util.getPreviousNonWsToken(b.tokens, b.index);
              if (!e || "keyword" !== e.name || "class" !== e.value) return !1;
              for (d = b.index; c = b.tokens[++d];) {
                if ("punctuation" === c.name && "{" === c.value) return !0;
                if (
                  "operator" === c.name &&
                  a.util.contains([">", ">>"], c.value)
                ) {
                  return !1;
                }
              }
              return !1;
            }],
            follows: [
              [
                { token: "keyword", values: ["enum", "struct", "union"] },
                a.util.whitespace
              ]
            ],
            precedes: [
              [{ token: "default" }, { token: "ident" }],
              [
                a.util.whitespace,
                { token: "operator", values: ["*", "**"] },
                { token: "default" },
                { token: "ident" },
                a.util.whitespace,
                { token: "operator", values: ["=", ","] }
              ],
              [
                a.util.whitespace,
                { token: "operator", values: ["*", "**"] },
                { token: "default" },
                { token: "operator", values: ["&"] },
                a.util.whitespace,
                { token: "ident" },
                a.util.whitespace,
                { token: "operator", values: ["=", ","] }
              ],
              [a.util.whitespace, { token: "operator", values: ["::"] }]
            ]
          },
          operators: [
            "==",
            "=",
            "+=",
            "++",
            "+",
            "->*",
            "->",
            "-=",
            "--",
            "-",
            "**",
            "*=",
            "*",
            "/=",
            "/",
            "%=",
            "%",
            "!=",
            "!",
            ">>=",
            ">>",
            ">=",
            ">",
            "<<=",
            "<<",
            "<=",
            "<",
            "&=",
            "&&",
            "&",
            "|=",
            "||",
            "|",
            "~",
            "^=",
            "^",
            ".*",
            ".",
            "?",
            "::",
            ":",
            ","
          ]
        }
      );
    }(this.Sunlight),
    function(a, b) {
      function c(a) {
        var b = /^T([A-Z0-9]\w*)?$/;
        return function(c) {
          return !b.test(c.tokens[c.index].value) && a(c);
        };
      }
      if (
        a === b || a.registerLanguage === b
      ) {
        throw "Include sunlight.js before including language files";
      }
      var d = [
        "int",
        "bool",
        "double",
        "float",
        "char",
        "byte",
        "sbyte",
        "uint",
        "long",
        "ulong",
        "char",
        "decimal",
        "short",
        "ushort"
      ], e = d.concat(["in", "out", "string", "object"]);
      a.registerLanguage(
        "csharp",
        {
          keywords: d.concat(
            [
              "extern alias",
              "public",
              "private",
              "protected",
              "internal",
              "static",
              "sealed",
              "abstract",
              "partial",
              "virtual",
              "override",
              "new",
              "implicit",
              "explicit",
              "extern",
              "override",
              "operator",
              "const",
              "readonly",
              "volatile",
              "class",
              "interface",
              "enum",
              "struct",
              "event",
              "delegate",
              "null",
              "true",
              "false",
              "string",
              "object",
              "void",
              "for",
              "foreach",
              "do",
              "while",
              "fixed",
              "unchecked",
              "using",
              "lock",
              "namespace",
              "checked",
              "unsafe",
              "if",
              "else",
              "try",
              "catch",
              "finally",
              "break",
              "continue",
              "goto",
              "case",
              "throw",
              "return",
              "switch",
              "yield return",
              "yield break",
              "in",
              "out",
              "ref",
              "params",
              "as",
              "is",
              "typeof",
              "this",
              "sizeof",
              "stackalloc",
              "var",
              "default",
              "from",
              "select",
              "where",
              "groupby",
              "orderby"
            ]
          ),
          customParseRules: [function(a) {
            var b, c, d = "xmlDocCommentMeta", e = "xmlDocCommentContent",
              f = { line: 0, column: 0, value: "", name: null };
            if (
              "/" !== a.reader.current() || "//" !== a.reader.peek(2)
            ) {
              return null;
            }
            for (
              b = [
                a.createToken(
                  d,
                  "///",
                  a.reader.getLine(),
                  a.reader.getColumn()
                )
              ],
                a.reader.read(2);
              (c = a.reader.peek()) !== a.reader.EOF;
            ) {
              if ("<" !== c || f.name === d) {
                if (">" !== c || f.name !== d) {
                  if ("\n" === c) break;
                  null === f.name && (f.name = e,
                    f.line = a.reader.getLine(),
                    f.column = a.reader.getColumn()),
                    f.value += a.reader.read();
                } else {
                  f.value += a.reader.read(),
                    b.push(a.createToken(f.name, f.value, f.line, f.column)),
                    f.name = null,
                    f.value = "";
                }
              } else {
                "" !== f.value &&
                  b.push(a.createToken(f.name, f.value, f.line, f.column)),
                  f.line = a.reader.getLine(),
                  f.column = a.reader.getColumn(),
                  f.name = d,
                  f.value = a.reader.read();
              }
            }
            return f.name === e &&
              b.push(a.createToken(f.name, f.value, f.line, f.column)),
              b.length > 0 ? b : null;
          }, function(b) {
            var c, d, e, f, g = !1, h = b.reader.getLine(),
              i = b.reader.getColumn();
            if (
              !/^(get|set)\b/.test(
                b.reader.current() + b.reader.peek(3)
              )
            ) {
              return null;
            }
            if (
              c = a.util.createProceduralRule(
                b.count() - 1,
                -1,
                [
                  { token: "punctuation", values: ["}", "{", ";"] },
                  a.util.whitespace,
                  {
                    token: "keyword",
                    values: ["public", "private", "protected", "internal"],
                    optional: !0
                  }
                ]
              ),
                !c(b.getAllTokens())
            ) {
              return null;
            }
            for (d = "get".length, e = b.reader.peek(d); e.length === d;) {
              if (!/\s$/.test(e)) {
                if (!/[\{;]$/.test(e)) return null;
                g = !0;
                break;
              }
              e = b.reader.peek(++d);
            }
            return g ? (f = b.reader.current() + b.reader.read(2),
              b.createToken("keyword", f, h, i)) : null;
          }, function(a) {
            var c, d, e, f, g, h, i, j = a.reader.getLine(),
              k = a.reader.getColumn();
            if (
              !/^value\b/.test(
                a.reader.current() + a.reader.peek(5)
              )
            ) {
              return null;
            }
            for (c = "value".length, d = a.reader.peek(c); d.length === c;) {
              if (!/\s$/.test(d)) {
                if (
                  i = a.reader.peek(c + 1),
                    "=" === d.charAt(d.length - 1) &&
                      "=" !== i.charAt(i.length - 1)
                ) {
                  return null;
                }
                e = !0;
                break;
              }
              d = a.reader.peek(++c);
            }
            if (!e) return null;
            g = a.count() - 1,
              h = [0, 0];
            a:
            for (; (f = a.token(g--)) !== b;) {
              if ("punctuation" === f.name) {
                "{" === f.value ? h[0]++ : "}" === f.value && h[1]++;
              } else if ("keyword" === f.name) {
                switch (f.value) {
                  case "set":
                    break a;
                  case "class":
                  case "public":
                  case "private":
                  case "protected":
                  case "internal":
                    return null;
                }
              }
            }
            return f === b ? null
              : h[1] >= h[0] ? null
                : (a.reader.read(4), a.createToken("keyword", "value", j, k));
          }],
          scopes: {
            string: [
              ['"', '"', a.util.escapeSequences.concat(['\\"'])],
              ['@"', '"', ['""']]
            ],
            "char": [["'", "'", ["\\'", "\\\\"]]],
            comment: [["//", "\n", null, !0], ["/*", "*/"]],
            pragma: [["#", "\n", null, !0]]
          },
          identFirstLetter: /[A-Za-z_@]/,
          identAfterFirstLetter: /\w/,
          namedIdentRules: { custom: [c(function(a) {
            for (var c, d, e = a.index, f = !1; (c = a.tokens[--e]) !== b;) {
              if ("punctuation" === c.name && "{" === c.value) return !1;
              if ("keyword" === c.name && "case" === c.value) return !1;
              if (
                "keyword" === c.name &&
                ("class" === c.value || "where" === c.value)
              ) {
                if (

                  d = "default" === a.tokens[e + 1].name ? a.tokens[e + 2]
                    : a.tokens[e + 1],
                    "punctuation" === d.name && "," === d.value
                ) {
                  continue;
                }
                break;
              }
              "operator" === c.name && ":" === c.value && (f = !0);
            }
            return f ? !0 : !1;
          }), c(function(c) {
            for (
              var d, f = c.index, g = !1, h = [0, 0];
              (d = c.tokens[--f]) !== b;
            ) {
              if ("keyword" === d.name && "class" === d.value) return !1;
              if ("operator" === d.name) {
                switch (d.value) {
                  case "<":
                  case "<<":
                    h[0] += d.value.length;
                    continue;
                  case ">":
                  case ">>":
                    if (0 === h[0]) return !1;
                    h[1] += d.value.length;
                    continue;
                }
                break;
              }
              if (

                !("keyword" === d.name && a.util.contains(e, d.value) ||
                  "default" === d.name || "punctuation" === d.name &&
                  "," === d.value)
              ) {
                if ("ident" !== d.name) break;
                g = !0;
              }
            }
            if (!g || 0 === h[0]) return !1;
            for (f = c.index; (d = c.tokens[++f]) !== b;) {
              if (
                "operator" === d.name && (">" === d.value || ">>" === d.value)
              ) {
                return !0;
              }
              if (

                !("keyword" === d.name && a.util.contains(e, d.value) ||
                  "operator" === d.name &&
                  a.util.contains(["<", "<<", ">", ">>"], d.value) ||
                  "punctuation" === d.name && "," === d.value ||
                  "ident" === d.name || "default" === d.name)
              ) {
                return !1;
              }
            }
            return !1;
          }), c(function(c) {
            var f, g, h = a.util.getPreviousNonWsToken(c.tokens, c.index);
            if (
              h !== b &&
              ("ident" === h.name || "keyword" === h.name && a.util.contains(
                d.concat(["string", "object", "void"]),
                h.value
              ) || "operator" === h.name && "." === h.value)
            ) {
              return !1;
            }
            if (
              h = a.util.getNextNonWsToken(c.tokens, c.index),
                !h || "operator" !== h.name || "<" !== h.value
            ) {
              return !1;
            }
            for (f = c.index, g = [0, 0]; (h = c.tokens[++f]) !== b;) {
              if ("operator" !== h.name) {
                if (
                  !("default" === h.name || "ident" === h.name ||
                    "keyword" === h.name && a.util.contains(e, h.value) ||
                    "punctuation" === h.name && "," === h.value)
                ) {
                  return !1;
                }
              } else {
                switch (h.value) {
                  case "<":
                    g[0]++;
                    break;
                  case "<<":
                    g[0] += 2;
                    break;
                  case ">":
                    g[1]++;
                    break;
                  case ">>":
                    g[1] += 2;
                    break;
                  default:
                    return !1;
                }
                if (g[0] === g[1]) break;
              }
            }
            return g[0] !== g[1] ? !1 : (h = c.tokens[++f],
              !h || "default" !== h.name && "ident" !== h.name ? !1
                : "default" !== h.name ||
                  (h = c.tokens[++f], h && "ident" === h.name) ? !0 : !1);
          }), function(b) {
            var c, d = a.util.getPreviousNonWsToken(b.tokens, b.index);
            return d && "keyword" === d.name && "using" === d.value
              ? (c = a.util.getNextNonWsToken(b.tokens, b.index),
                c && "operator" === c.name && "=" === c.value ? !0 : !1) : !1;
          }, c(function(c) {
            var d, e, f, g = a.util.getNextNonWsToken(c.tokens, c.index),
              h = !1;
            if (
              g && "operator" === g.name &&
              ("=" === g.value || "." === g.value)
            ) {
              return !1;
            }
            for (d = c.index, e = [0, 0], h = !1; (g = c.tokens[--d]) !== b;) {
              if ("punctuation" === g.name) {
                if ("[" === g.value) {
                  e[0]++;
                  continue;
                }
                if ("]" === g.value) {
                  e[1]++;
                  continue;
                }
                if (
                  "," === g.value && (h = !0),
                    "{" === g.value || "}" === g.value || ";" === g.value
                ) {
                  break;
                }
              }
            }
            if (0 === e[0] || e[0] === e[1]) return !1;
            for (d = c.index, f = -1; (g = c.tokens[++d]) !== b;) {
              if ("punctuation" === g.name) {
                if ("[" === g.value) {
                  e[0]++;
                  continue;
                }
                if ("]" === g.value) {
                  f = d,
                    e[1]++;
                  continue;
                }
                if (
                  "{" === g.value || "}" === g.value || ";" === g.value
                ) {
                  break;
                }
              }
            }
            return 0 > f || e[0] !== e[1] ? !1
              : (g = a.util.getNextNonWsToken(c.tokens, f),
                !g || "keyword" !== g.name && "ident" !== g.name ? !1 : !0);
          }), c(function(c) {
            var d, e, f, g = a.util.getNextNonWsToken(c.tokens, c.index);
            if (g && "operator" === g.name && "." === g.value) return !1;
            for (e = c.index, f = c.tokens[e]; (d = c.tokens[--e]) !== b;) {
              if (
                "keyword" === d.name && ("new" === d.value || "is" === d.value)
              ) {
                return !0;
              }
              if ("default" !== d.name) {
                if ("ident" !== d.name) {
                  if ("operator" !== d.name || "." !== d.value) break;
                  if (f && "ident" !== f.name) return !1;
                  f = d;
                } else {
                  if (f && "ident" === f.name) return !1;
                  f = d;
                }
              }
            }
            return !1;
          }), function() {
            var b = [
              [
                a.util.whitespace,
                { token: "punctuation", values: [")"] },
                a.util.whitespace,
                { token: "ident" }
              ],
              [
                a.util.whitespace,
                { token: "punctuation", values: [")"] },
                a.util.whitespace,
                { token: "keyword", values: ["this"] }
              ]
            ];
            return c(function(c) {
              var d, e, f, g = function(d) {
                for (var e = 0; e < b.length; e++) {
                  if (
                    a.util.createProceduralRule(
                      c.index + 1,
                      1,
                      b[e],
                      !1
                    )(d)
                  ) {
                    return !0;
                  }
                }
                return !1;
              }(c.tokens);
              if (!g) return !1;
              for (e = c.index; d = c.tokens[--e];) {
                if (
                  "punctuation" === d.name && "(" === d.value
                ) {
                  return f = a.util.getPreviousNonWsToken(c.tokens, e),
                    f && "keyword" === f.name ? !1 : !0;
                }
              }
              return !1;
            });
          }(), function(b) {
            var c, d, e = a.util.getNextNonWsToken(b.tokens, b.index);
            if (!e || "punctuation" !== e.name || ";" !== e.value) return !1;
            for (d = b.index; c = b.tokens[--d];) {
              if (
                "ident" !== c.name && "default" !== c.name &&
                ("operator" !== c.name || "." !== c.value)
              ) {
                return "operator" !== c.name || "=" !== c.value ? !1
                  : a.util.createProceduralRule(d - 1, -1, [
                    {
                      token: "keyword",
                      values: ["using"]
                    },
                    { token: "default" },
                    { token: "ident" },
                    a.util.whitespace
                  ])(
                    b.tokens
                  );
              }
            }
            return !1;
          }, c(function(b) {
            var c, d = [
              [
                {
                  token: "keyword",
                  values: [
                    "class",
                    "interface",
                    "event",
                    "struct",
                    "enum",
                    "delegate",
                    "public",
                    "private",
                    "protected",
                    "internal",
                    "static",
                    "virtual",
                    "sealed",
                    "params"
                  ]
                },
                a.util.whitespace
              ],
              [
                { token: "keyword", values: ["typeof", "default"] },
                a.util.whitespace,
                { token: "punctuation", values: ["("] },
                a.util.whitespace
              ],
              [{ token: "keyword", values: ["as"] }, a.util.whitespace]
            ], e = [
              [
                a.util.whitespace,
                { token: "punctuation", values: ["["] },
                a.util.whitespace,
                { token: "punctuation", values: ["]"] }
              ],
              [{ token: "default" }, { token: "ident" }]
            ];
            for (c = 0; c < d.length; c++) {
              if (
                a.util.createProceduralRule(
                  b.index - 1,
                  -1,
                  d[c],
                  !1
                )(b.tokens)
              ) {
                return !0;
              }
            }
            for (c = 0; c < e.length; c++) {
              if (
                a.util.createProceduralRule(
                  b.index + 1,
                  1,
                  e[c],
                  !1
                )(b.tokens)
              ) {
                return !0;
              }
            }
            return !1;
          })] },
          operators: [
            "++",
            "+=",
            "+",
            "--",
            "-=",
            "-",
            "*=",
            "*",
            "/=",
            "/",
            "%=",
            "%",
            "&&",
            "||",
            "|=",
            "|",
            "&=",
            "&",
            "^=",
            "^",
            ">>=",
            ">>",
            "<<=",
            "<<",
            "<=",
            "<",
            ">=",
            ">",
            "==",
            "!=",
            "!",
            "~",
            "??",
            "?",
            "::",
            ":",
            ".",
            "=>",
            "="
          ]
        }
      );
    }(this.Sunlight),
    function(a, b) {
      function c(a) {
        for (
          var c, d, e = a.count(), f = "", g = !0, h = 1;
          (c = a.token(--e)) !== b &&
          ("punctuation" !== c.name || "}" !== c.value);
        ) {
          if ("punctuation" === c.name && "{" === c.value) return null;
        }
        for (d = a.reader.peek(); d.length === h;) {
          if (letter = d.charAt(d.length - 1), /[^\w-]$/.test(d)) {
            if (g = !1, "{" === letter) break;
            if (";" === letter) return null;
          }
          g && (f += letter),
            d = a.reader.peek(++h);
        }
        return f;
      }
      if (
        a === b || a.registerLanguage === b
      ) {
        throw "Include sunlight.js before including language files";
      }
      a.registerLanguage(
        "css",
        {
          caseInsensitive: !0,
          keywords: [
            "background-color",
            "background-image",
            "background-repeat",
            "background-attachment",
            "background-position",
            "background-clip",
            "background-origin",
            "background-size",
            "background",
            "border-collapse",
            "border-top-style",
            "border-right-style",
            "border-left-style",
            "border-bottom-style",
            "border-style",
            "border-top-width",
            "border-right-width",
            "border-left-width",
            "border-bottom-width",
            "border-width",
            "border-top-color",
            "border-right-color",
            "border-left-color",
            "border-bottom-color",
            "border-color",
            "border-radius",
            "border-top-left-radius",
            "border-top-right-radius",
            "border-bottom-right-radius",
            "border-bottom-left-radius",
            "border-image-repeat",
            "border-image-source",
            "border-image-slice",
            "border-image-width",
            "border-image-outset",
            "border-image",
            "border-top",
            "border-bottom",
            "border-right",
            "border-left",
            "border-spacing",
            "border",
            "box-decoration-break",
            "box-shadow",
            "voice-volume",
            "voice-balance",
            "pause-before",
            "pause-after",
            "pause",
            "rest-before",
            "rest-after",
            "rest",
            "cue-before",
            "cue-after",
            "cue",
            "mark-before",
            "mark-after",
            "mark",
            "voice-family",
            "voice-rate",
            "voice-pitch",
            "voice-pitch-range",
            "voice-stress",
            "voice-duration",
            "phonemes",
            "speak-header",
            "speak-numeral",
            "speak-punctuation",
            "pitch-range",
            "play-during",
            "richness",
            "speak",
            "speech-rate",
            "appearance",
            "icon",
            "box-sizing",
            "outline-width",
            "outline-style",
            "outline-color",
            "outline-offset",
            "outline",
            "resize",
            "cursor",
            "nav-index",
            "nav-up",
            "nav-right",
            "nav-down",
            "nav-left",
            "display",
            "position",
            "float",
            "clear",
            "visibility",
            "bottom",
            "top",
            "left",
            "right",
            "overflow",
            "overflow-x",
            "overflow-y",
            "overflow-style",
            "marquee-style",
            "marquee-direction",
            "marquee-play-count",
            "marquee-speed",
            "padding-top",
            "padding-right",
            "padding-bottom",
            "padding-left",
            "padding",
            "margin-top",
            "margin-right",
            "margin-bottom",
            "margin-left",
            "margin",
            "width",
            "height",
            "min-width",
            "max-width",
            "min-height",
            "max-height",
            "rotation-point",
            "rotation",
            "white-space-collapsing",
            "white-space",
            "line-break",
            "word-break",
            "hyphens",
            "hyphenate-character",
            "hyphenate-limit-before",
            "hyphenate-limit-after",
            "hyphenate-limit-lines",
            "hyphenate-limit-last",
            "hyphenate-resource",
            "text-wrap",
            "word-wrap",
            "text-align-first",
            "text-align-last",
            "text-align",
            "text-justify",
            "word-spacing",
            "letter-spacing",
            "text-trim",
            "text-autospace",
            "text-indent",
            "hanging-punctuation",
            "text-decoration-line",
            "text-decoration-color",
            "text-decoration-style",
            "text-decoration-skip",
            "text-decoration",
            "text-underline-position",
            "text-emphasis-position",
            "text-emphasis-style",
            "text-emphasis-color",
            "text-emphasis",
            "text-shadow",
            "text-outline",
            "text-transform",
            "vertical-align",
            "direction",
            "unicode-bidi",
            "writing-mode",
            "text-orientation",
            "text-combine",
            "color",
            "opacity",
            "font-family",
            "font-weight",
            "font-stretch",
            "font-style",
            "font-size-adjust",
            "font-size",
            "font-synthesis",
            "src",
            "unicode-range",
            "font-feature-settings",
            "font-kerning",
            "vertical-position",
            "font-variant-ligatures",
            "font-variant-caps",
            "font-variant-numeric",
            "font-variant-alternates",
            "font-variant-east-asian",
            "font-variant",
            "font-feature-settings",
            "font-language-override",
            "font",
            "line-height",
            "text-height",
            "transform-origin",
            "transform-style",
            "perspective-origin",
            "perspective",
            "backface-visibility",
            "transform",
            "transition-property",
            "transition-duration",
            "transition-timing-function",
            "transition-delay",
            "list-style-type",
            "list-style-image",
            "list-style-position",
            "list-style",
            "column-width",
            "column-count",
            "colunns",
            "column-gap",
            "column-rule-color",
            "column-rule-style",
            "column-rule-width",
            "column-rule",
            "break-before",
            "break-after",
            "break-inside",
            "column-span",
            "column-fill",
            "caption-side",
            "table-layout",
            "empty-cells",
            "fit-position",
            "fit",
            "image-orientation",
            "orphans",
            "page-break-after",
            "page-break-before",
            "page-break-inside",
            "page",
            "size",
            "widows",
            "content",
            "z-index",
            "counter-increment",
            "counter-reset",
            "azimuth",
            "elevation",
            "quotes",
            "filter",
            "zoom",
            "-moz-appearance",
            "-moz-background-clip",
            "-moz-background-inline-policy",
            "-moz-background-origin",
            "-moz-background-size",
            "-moz-binding",
            "-moz-border-bottom-colors",
            "-moz-border-left-colors",
            "-moz-border-right-colors",
            "-moz-border-top-colors",
            "-moz-border-end",
            "-moz-border-end-color",
            "-moz-border-end-style",
            "-moz-border-end-width",
            "-moz-border-image",
            "-moz-border-start",
            "-moz-border-start-color",
            "-moz-border-start-style",
            "-moz-border-start-width",
            "-moz-box-align",
            "-moz-box-direction",
            "-moz-box-flex",
            "-moz-box-flexgroup",
            "-moz-box-ordinal-group",
            "-moz-box-orient",
            "-moz-box-pack",
            "-moz-box-sizing",
            "-moz-column-count",
            "-moz-column-gap",
            "-moz-column-width",
            "-moz-column-rule",
            "-moz-column-rule-width",
            "-moz-column-rule-style",
            "-moz-column-rule-color",
            "-moz-float-edge",
            "-moz-font-feature-settings",
            "-moz-font-language-override",
            "-moz-force-broken-image-icon",
            "-moz-image-region",
            "-moz-margin-end",
            "-moz-margin",
            "-moz-opacity",
            "-moz-outline",
            "-moz-outline-color",
            "-moz-outline-offset",
            "-moz-outline-radius",
            "-moz-outline-radius-bottomleft",
            "-moz-outline-radius-bottomright",
            "-moz-outline-radius-topleft",
            "-moz-outline-radius-topright",
            "-moz-outline-style",
            "-moz-outline-width",
            "-moz-padding-end",
            "-moz-padding-start",
            "-moz-stack-sizing",
            "-moz-tab-size",
            "-moz-transform",
            "-moz-transform-origin",
            "-moz-transition",
            "-moz-transition-delay",
            "-moz-transition-duration",
            "-moz-transition-property",
            "-moz-transition-timing-function",
            "-moz-user-focus",
            "-moz-user-input",
            "-moz-user-modify",
            "-moz-user-select",
            "-moz-window-shadow",
            "-webkit-appearance",
            "-webkit-background-clip",
            "-webkit-background-composite",
            "-webkit-background-origin",
            "-webkit-background-size",
            "-webkit-binding",
            "-webkit-border-bottom-left-radius",
            "-webkit-border-bottom-right-radius",
            "-webkit-border-fit",
            "-webkit-border-horizontal-spacing",
            "-webkit-border-image",
            "-webkit-border-radius",
            "-webkit-border-top-left-radius",
            "-webkit-border-top-right-radius",
            "-webkit-border-vertical-spacing",
            "-webkit-box-align",
            "-webkit-box-direction",
            "-webkit-box-flex",
            "-webkit-box-flex-group",
            "-webkit-box-lines",
            "-webkit-box-ordinal-group",
            "-webkit-box-orient",
            "-webkit-box-pack",
            "-webkit-box-shadow",
            "-webkit-box-sizing",
            "-webkit-column-break-after",
            "-webkit-column-break-before",
            "-webkit-column-break-inside",
            "-webkit-column-count",
            "-webkit-column-gap",
            "-webkit-column-rule",
            "-webkit-column-rule-color",
            "-webkit-column-rule-style",
            "-webkit-column-rule-width",
            "-webkit-column-width",
            "-webkit-columns",
            "-webkit-dashboard-region",
            "-webkit-font-size-delta",
            "-webkit-highlight",
            "-webkit-line-break",
            "-webkit-line-clamp",
            "-webkit-margin-bottom-collapse",
            "-webkit-margin-collapse	#",
            "-webkit-margin-start",
            "-webkit-margin-top-collapse",
            "-webkit-marquee",
            "-webkit-marquee-direction",
            "-webkit-marquee-increment",
            "-webkit-marquee-repetition",
            "-webkit-marquee-speed",
            "-webkit-marquee-style",
            "-webkit-match-nearest-mail-blockquote-color",
            "-webkit-nbsp-mode",
            "-webkit-padding-start",
            "-webkit-rtl-ordering",
            "-webkit-text-decorations-in-effect",
            "-webkit-text-fill-color",
            "-webkit-text-security",
            "-webkit-text-size-adjust",
            "-webkit-text-stroke",
            "-webkit-text-stroke-color",
            "-webkit-text-stroke-width",
            "-webkit-user-drag",
            "-webkit-user-modify",
            "-webkit-user-select",
            "-o-border-image",
            "-o-device-pixel-ratio",
            "-o-linear-gradient",
            "-o-repeating-linear-gradient",
            "-o-object-fit",
            "-o-object-position",
            "-o-tab-size",
            "-o-table-baseline",
            "-o-transform",
            "-o-transform-origin",
            "-o-transition",
            "-o-transition-delay",
            "-o-transition-duration",
            "-o-transition-property",
            "-o-transition-timing-function",
            "-o-zoom-in",
            "-o-zoom-out",
            "-ms-accelerator",
            "-ms-background-position-x",
            "-ms-background-position-y",
            "-ms-behavior",
            "-ms-block-progression",
            "-ms-filter",
            "-ms-ime-mode",
            "-ms-layout-grid",
            "-ms-layout-grid-char",
            "-ms-layout-grid-line",
            "-ms-layout-grid-mode",
            "-ms-layout-grid-type",
            "-ms-line-break",
            "-ms-line-grid-mode",
            "-ms-interpolation-mode",
            "-ms-overflow-x",
            "-ms-overflow-y",
            "-ms-scrollbar-3dlight-color",
            "-ms-scrollbar-arrow-color",
            "-ms-scrollbar-base-color",
            "-ms-scrollbar-darkshadow-color",
            "-ms-scrollbar-face-color",
            "-ms-scrollbar-highlight-color",
            "-ms-scrollbar-shadow-color",
            "-ms-scrollbar-track-color",
            "-ms-text-align-last",
            "-ms-text-autospace",
            "-ms-text-justify",
            "-ms-text-kashida-space",
            "-ms-text-overflow",
            "-ms-text-underline-position",
            "-ms-word-break",
            "-ms-word-wrap",
            "-ms-writing-mode",
            "-ms-zoom"
          ],
          customParseRules: [function() {
            var b = a.util.createHashMap(
              [
                "matrix",
                "translate",
                "translateX",
                "translateY",
                "scaleX",
                "scaleY",
                "rotate",
                "skewX",
                "skewY",
                "skew",
                "translate3d",
                "scaleZ",
                "translateZ",
                "rotate3d",
                "perspective",
                "url",
                "alpha",
                "basicimage",
                "blur",
                "dropshadow",
                "engrave",
                "glow",
                "light",
                "maskfilter",
                "motionblur",
                "shadow",
                "wave"
              ],
              "\\b",
              !0
            );
            return function(c) {
              var d, e, f = a.util.matchWord(c, b, "function", !0);
              if (null === f) return null;
              for (
                d = f.value.length,
                  e = c.reader.peek(d);
                e.length === d && e !== c.reader.EOF;
              ) {
                if (!/\s$/.test(e)) {
                  if (
                    "(" === e.charAt(e.length - 1)
                  ) {
                    return c.reader.read(f.value.length - 1), f;
                  }
                  break;
                }
                e = c.reader.peek(++d);
              }
              return null;
            };
          }(), function() {
            var b = a.util.createHashMap(
              [
                "root",
                "nth-child",
                "nth-last-child",
                "nth-of-type",
                "nth-last-of-type",
                "first-child",
                "last-child",
                "first-of-type",
                "last-of-type",
                "only-child",
                "only-of-type",
                "empty",
                "link",
                "visited",
                "active",
                "hover",
                "focus",
                "target",
                "lang",
                "enabled",
                "disabled",
                "checked",
                "first-line",
                "first-letter",
                "before",
                "after",
                "not",
                "read-only",
                "read-write",
                "default",
                "valid",
                "invalid",
                "in-range",
                "out-of-range",
                "required",
                "optional"
              ],
              "\\b",
              !0
            );
            return function(c) {
              var d = a.util.getPreviousNonWsToken(
                c.getAllTokens(),
                c.count()
              );
              return d && "operator" === d.name && ":" === d.value
                ? a.util.matchWord(c, b, "pseudoClass") : null;
            };
          }(), function() {
            var b = a.util.createHashMap(
              [
                "before",
                "after",
                "value",
                "choices",
                "repeat-item",
                "repeat-index",
                "marker"
              ],
              "\\b",
              !0
            );
            return function(c) {
              var d = a.util.getPreviousNonWsToken(
                c.getAllTokens(),
                c.count()
              );
              return d && "operator" === d.name && "::" === d.value
                ? a.util.matchWord(c, b, "pseudoElement") : null;
            };
          }(), function(a) {
            var b, d = a.reader.getLine(), e = a.reader.getColumn();
            return "." !== a.reader.current() ? null : (b = c(a),
              null === b ? null : (a.reader.read(b.length),
                [
                  a.createToken("operator", ".", d, e),
                  a.createToken("class", b, d, e + 1)
                ]));
          }, function(b) {
            var d, e, f = b.reader.current(), g = b.reader.getLine(),
              h = b.reader.getColumn();
            return /[A-Za-z_]/.test(f)
              ? (d = a.util.getPreviousNonWsToken(b.getAllTokens(), b.count()),
                !d || "operator" !== d.name || ":" !== d.value &&
                  "::" !== d.value ? (e = c(b),
                    null === e ? null : (b.reader.read(e.length),
                      b.createToken("element", f + e, g, h))) : null) : null;
          }, function(a) {
            var b, c, d = 1, e = "#", f = !0, g = a.reader.getLine(),
              h = a.reader.getColumn();
            if ("#" !== a.reader.current()) return null;
            for (
              b = a.reader.peek();
              b.length === d &&
              (c = b.charAt(b.length - 1), "}" !== c && ";" !== c);
            ) {
              if ("{" === c) return null;
              f && /[A-Fa-f0-9]/.test(c) ? e += c : f = !1,
                b = a.reader.peek(++d);
            }
            return a.reader.read(e.length - 1),
              a.createToken("hexColor", e, g, h);
          }],
          numberParser: function(a) {
            var b, c, d = a.reader.current(), e = a.reader.getLine(),
              f = a.reader.getColumn(), g = !0;
            if (/\d/.test(d)) {
              b = d,
                "0" === d && "." !== a.reader.peek() && (g = !1);
            } else {
              if ("." !== d || !/\d/.test(a.reader.peek())) return null;
              b = d + a.reader.read(),
                g = !1;
            }
            for (; (c = a.reader.peek()) !== a.reader.EOF;) {
              if (!/[A-Za-z0-9%]/.test(c)) {
                if ("." === c && g && /\d$/.test(a.reader.peek(2))) {
                  b += a.reader.read(),
                    g = !1;
                  continue;
                }
                break;
              }
              b += a.reader.read();
            }
            return a.createToken("number", b, e, f);
          },
          customTokens: {
            rule: {
              values: [
                "@import",
                "@media",
                "@font-face",
                "@phonetic-alphabet",
                "@hyphenate-resource",
                "@font-feature-values",
                "@charset",
                "@namespace",
                "@page",
                "@bottom-left-corner",
                "@bottom-left",
                "@bottom-center",
                "@bottom-right",
                "@bottom-right-corner",
                "@top-left-corner",
                "@top-left",
                "@top-center",
                "@top-right",
                "@top-right-corner"
              ],
              boundary: "\\b"
            },
            microsoftFilterPrefix: {
              values: ["progid:DXImageTransform.Microsoft"],
              boundary: "\\b"
            },
            importantFlag: { values: ["!important"], boundary: "\\b" }
          },
          scopes: {
            string: [['"', '"', ['\\"', "\\\\"]], ["'", "'", ["\\'", "\\\\"]]],
            comment: [["/*", "*/"]],
            id: [["#", { length: 1, regex: /[^-\w]/ }, null, !0]]
          },
          identFirstLetter: /[A-Za-z-]/,
          identAfterFirstLetter: /[\w-]/,
          operators: [
            "::",
            ":",
            ">",
            "+",
            "~=",
            "^=",
            "$=",
            "|=",
            "=",
            ".",
            "*"
          ]
        }
      );
    }(this.Sunlight),
    function(a, b) {
      if (
        a === b || a.registerLanguage === b
      ) {
        throw "Include sunlight.js before including language files";
      }
      a.registerLanguage(
        "diff",
        {
          doNotParse: /(?!x)x/,
          scopes: {
            header: [
              ["---", "\n", null, !0],
              ["+++", "\n", null, !0],
              ["***", "\n", null, !0]
            ],
            added: [["+", "\n", null, !0]],
            removed: [["-", "\n", null, !0]],
            modified: [["!", "\n", null, !0]],
            unchanged: [[" ", "\n", null, !0]],
            rangeInfo: [["@@", "\n", null, !0]],
            mergeHeader: [["Index:", "\n", null, !0], ["=", "\n", null, !0]]
          },
          customTokens: {
            noNewLine: {
              values: ["\\ No newline at end of file"],
              boundary: "\\b"
            }
          }
        }
      );
    }(this.Sunlight),
    function(a, b) {
      if (
        a === b || a.registerLanguage === b
      ) {
        throw "Include sunlight.js before including language files";
      }
      a.registerLanguage(
        "erlang",
        {
          keywords: [
            "after",
            "andalso",
            "and",
            "band",
            "begin",
            "bnot",
            "bor",
            "bsl",
            "bsr",
            "bxor",
            "case",
            "catch",
            "cond",
            "div",
            "end",
            "fun",
            "if",
            "let",
            "not",
            "of",
            "orelse",
            "or",
            "query",
            "receive",
            "rem",
            "try",
            "when",
            "xor",
            "true",
            "false"
          ],
          customParseRules: [function(a) {
            var b, c, d, e = a.reader.getLine(), f = a.reader.getColumn(),
              g = 0, h = !1, i = 1;
            if (!/[A-Za-z_]/.test(a.reader.current())) return null;
            for (
              ;
              (b = a.reader.peek(++g)) && b.length === g && /[\w@]$/.test(b);
            );
            for (
              c = a.reader.current() + b.substring(0, b.length - 1),
                g--;
              (b = a.reader.peek(++g)) && b.length === g;
            ) {
              if (!/\s$/.test(b)) {
                /\($/.test(b) && (h = !0);
                break;
              }
            }
            if (!h && !/^[A-Z_]/.test(c)) return null;
            if (a.reader.read(c.length - 1), g = 1, h) {
              for (; (b = a.reader.peek(++g)) && b.length === g;) {
                if (d = b.charAt(b.length - 1), 0 === i) {
                  for (; (b = a.reader.peek(++g)) && b.length === g;) {
                    if (!/\s$/.test(b)) {
                      if (
                        /->$/.test(
                          a.reader.peek(g + 1)
                        )
                      ) {
                        return a.items.userDefinedFunctions.push(c),
                          a.createToken("userDefinedFunction", c, e, f);
                      }
                      break;
                    }
                  }
                  break;
                }
                "(" === d ? i++ : ")" === d && i--;
              }
              return a.createToken("function", c, e, f);
            }
            return a.createToken("ident", c, e, f);
          }],
          customTokens: {
            moduleAttribute: {
              values: [
                "-module",
                "-export",
                "-import",
                "-compile",
                "-vsn",
                "-behaviour",
                "-record",
                "-include",
                "-define",
                "-file",
                "-type",
                "-spec",
                "on_load"
              ],
              boundary: "\\b"
            },
            macroDirective: {
              values: ["-undef", "-ifdef", "-ifndef", "-else", "-endif"],
              boundary: "\\b"
            }
          },
          scopes: {
            string: [['"', '"', a.util.escapeSequences.concat(['\\"'])]],
            quotedAtom: [["'", "'", ["\\'", "\\\\"]]],
            comment: [["%", "\n", null, !0]],
            "char": [["$", { regex: /[^\w\\]/, length: 1 }, null, !0]],
            macro: [["?", { regex: /[^\w?]/, length: 1 }, null, !0]]
          },
          identFirstLetter: /[A-Za-z_]/,
          identAfterFirstLetter: /[\w@]/,
          namedIdentRules: { custom: [function(b) {
            return a.util.contains(
              b.items.userDefinedFunctions,
              b.tokens[b.index].value
            );
          }], precedes: [[{ token: "operator", values: [":"] }]] },
          contextItems: { userDefinedFunctions: [] },
          operators: [
            "<-",
            "<",
            "||",
            "=:=",
            "=/=",
            "==",
            "=<",
            "=",
            "*",
            "<<",
            ",",
            ">=",
            ">>",
            ">",
            ":",
            "#",
            "!",
            "++",
            "+",
            "->",
            "--",
            "-",
            "/=",
            "/"
          ]
        }
      );
    }(this.Sunlight),
    function(a, b) {
      if (
        a === b || a.registerLanguage === b
      ) {
        throw "Include sunlight.js before including language files";
      }
      a.registerLanguage(
        "haskell",
        {
          keywords: [
            "as",
            "case",
            "of",
            "class",
            "datafamily",
            "datainstance",
            "data",
            "default",
            "derivinginstance",
            "deriving",
            "do",
            "forall",
            "foreign",
            "hiding",
            "if",
            "then",
            "else",
            "import",
            "infix",
            "infixl",
            "infixr",
            "instance",
            "let",
            "in",
            "mdo",
            "module",
            "newtype",
            "proc",
            "qualified",
            "rec",
            "typefamily",
            "typeinstance",
            "type",
            "where"
          ],
          customParseRules: [function(a) {
            var b = a.reader.peek(), c = 2, d = a.reader.getLine(),
              e = a.reader.getColumn();
            return "'" !== a.reader.current() && "'" !== b ? null
              : (b && "\\" === b && c++,
                /'$/.test(a.reader.peek(c))
                  ? a.createToken("char", "'" + a.reader.read(c), d, e)
                  : null);
          }, function(b) {
            var c, d, e, f = 0, g = b.reader.getLine(),
              h = b.reader.getColumn();
            if (!/[A-Za-z_]/.test(b.reader.current())) return null;
            for (
              ;
              (c = b.reader.peek(++f)) && c.length === f && /[\w']$/.test(c);
            );
            if (
              d = b.reader.current() + c.substring(0, c.length - 1),
                e = b.token(b.count() - 1),
                e && "keyword" === e.name && a.util.contains(
                  ["class", "newtype", "data", "type"],
                  e.value
                )
            ) {
              return b.items.userDefinedFunctions.push(d),
                b.reader.read(d.length - 1),
                b.createToken("ident", d, g, h);
            }
            if (b.reader.isSolWs()) {
              for (
                ;
                (c = b.reader.peek(++f)) && c.length === f;
              ) {
                if (!/\s$/.test(c)) {
                  return /::$/.test(b.reader.peek(++f))
                    ? (b.items.userDefinedFunctions.push(d),
                      b.reader.read(d.length - 1),
                      b.createToken("ident", d, g, h))
                    : null;
                }
              }
            }
            return null;
          }],
          customTokens: {
            "function": {
              values: [
                "abs",
                "acosh",
                "acos",
                "all",
                "and",
                "any",
                "appendFile",
                "asinh",
                "asin",
                "asTypeOf",
                "atan2",
                "atanh",
                "atan",
                "break",
                "catch",
                "ceiling",
                "compare",
                "concatMap",
                "concat",
                "const",
                "cosh",
                "cos",
                "curry",
                "cycle",
                "decodeFloat",
                "divMod",
                "div",
                "dropWhile",
                "drop",
                "either",
                "elem",
                "encodeFloat",
                "enumFromThenTo",
                "enumFromThen",
                "enumFromTo",
                "enumFrom",
                "error",
                "even",
                "exponent",
                "exp",
                "fail",
                "filter",
                "flip",
                "floatDigits",
                "floatRadix",
                "floatRange",
                "floor",
                "fmap",
                "foldl1",
                "foldl",
                "foldr1",
                "foldr",
                "fromEnum",
                "fromInteger",
                "fromIntegral",
                "fromRational",
                "fst",
                "gcd",
                "getChar",
                "getContents",
                "getLine",
                "head",
                "id",
                "init",
                "interact",
                "ioError",
                "isDenormalized",
                "isIEEE",
                "isInfinite",
                "isNaN",
                "isNegativeZero",
                "iterate",
                "last",
                "lcm",
                "length",
                "lex",
                "lines",
                "logBase",
                "log",
                "lookup",
                "mapM_",
                "mapM",
                "map",
                "maxBound",
                "maximum",
                "max",
                "maybe",
                "minBound",
                "minimum",
                "min",
                "mod",
                "negate",
                "notElem",
                "not",
                "null",
                "odd",
                "or",
                "otherwise",
                "pi",
                "pred",
                "print",
                "product",
                "properFraction",
                "putChar",
                "putStrLn",
                "putStr",
                "quotRem",
                "quot",
                "readFile",
                "readIO",
                "readList",
                "readLn",
                "readParen",
                "readsPrec",
                "reads",
                "realToFrac",
                "read",
                "recip",
                "rem",
                "repeat",
                "replicate",
                "return",
                "reverse",
                "round",
                "scaleFloat",
                "scanl1",
                "scanl",
                "scanr1",
                "scanr",
                "sequence_",
                "sequence",
                "seq",
                "showChar",
                "showList",
                "showParen",
                "showsPrec",
                "showString",
                "shows",
                "show",
                "significand",
                "signum",
                "sinh",
                "sin",
                "snd",
                "splitAt",
                "sqrt",
                "subtract",
                "succ",
                "sum",
                "tail",
                "takeWhile",
                "take",
                "tanh",
                "tan",
                "toEnum",
                "toInteger",
                "toRational",
                "truncate",
                "uncurry",
                "undefined",
                "unlines",
                "until",
                "unwords",
                "unzip3",
                "unzip",
                "userError",
                "words",
                "writeFile",
                "zip3",
                "zipWith3",
                "zipWith",
                "zip"
              ],
              boundary: "\\b"
            },
            "class": {
              values: [
                "Bounded",
                "Enum",
                "Eq",
                "Floating",
                "Fractional",
                "Functor",
                "Integral",
                "Monad",
                "Num",
                "Ord",
                "Read",
                "RealFloat",
                "RealFrac",
                "Real",
                "Show"
              ],
              boundary: "\\b"
            },
            type: {
              values: [
                "Bool",
                "Char",
                "Double",
                "Either",
                "FilePath",
                "Float",
                "Integer",
                "Int",
                "IOError",
                "IO",
                "Maybe",
                "Ordering",
                "ReadS",
                "ShowS",
                "String",
                "False",
                "True",
                "LT",
                "GT",
                "EQ",
                "Nothing",
                "Just",
                "Left",
                "Right"
              ],
              boundary: "\\b"
            }
          },
          scopes: {
            string: [['"', '"', a.util.escapeSequences.concat(['\\"'])]],
            comment: [["--", "\n", null, !0], ["{-", "-}"]],
            infixOperator: [["`", "`", ["\\`"]]]
          },
          identFirstLetter: /[A-Za-z_]/,
          identAfterFirstLetter: /[\w']/,
          namedIdentRules: { custom: [function(b) {
            return a.util.contains(
              b.items.userDefinedFunctions,
              b.tokens[b.index].value
            );
          }] },
          contextItems: { userDefinedFunctions: [] },
          operators: [
            "::",
            ":",
            "=>",
            "==",
            "=",
            "@",
            "[|",
            "|]",
            "\\\\",
            "\\",
            "/=",
            "/",
            "++",
            "+",
            "-<<",
            "-<",
            "->",
            "-",
            "&&",
            "!!",
            "!",
            "''",
            "'",
            "??",
            "?",
            "#",
            "<-",
            "<=",
            "<",
            ">@>",
            ">>=",
            ">>",
            ">=",
            ">",
            "^^",
            "^",
            "**",
            "*",
            "||",
            "|",
            "~",
            "_",
            "..",
            "."
          ]
        }
      );
    }(this.Sunlight),
    function(a, b) {
      if (
        a === b || a.registerLanguage === b
      ) {
        throw "Include sunlight.js before including language files";
      }
      a.registerLanguage(
        "httpd",
        {
          scopes: {
            string: [['"', '"', ['\\"', "\\\\"]]],
            comment: [["#", "\n", null, !0]],
            environmentVariable: [["${", "}"], ["%{", "}"]]
          },
          customParseRules: [function() {
            var b = a.util.createHashMap(
              [
                "AuthnProviderAlias",
                "Directory",
                "DirectoryMatch",
                "Files",
                "FilesMatch",
                "IfDefine",
                "IfModule",
                "IfVersion",
                "Limit",
                "LimitExcept",
                "Location",
                "LocationMatch",
                "ProxyMatch",
                "Proxy",
                "VirtualHost",
                "IfDefine"
              ],
              "\\b",
              !1
            );
            return function(c) {
              var d, e,
                f = a.util.getPreviousNonWsToken(c.getAllTokens(), c.count());
              if (
                !f || "operator" !== f.name || "<" !== f.value &&
                "</" !== f.value
              ) {
                return !1;
              }
              if (f = a.util.matchWord(c, b, "context", !0), !f) return null;
              for (
                e = f.value.length;
                (d = c.reader.peek(e++)) !== c.reader.EOF;
              ) {
                if (/>$/.test(d)) return c.reader.read(f.value.length - 1), f;
                if (/\n$/.test(d)) break;
              }
              return null;
            };
          }(), function(b) {
            var c, d, e, f, g = b.reader.current(), h = b.reader.getLine(),
              i = b.reader.getColumn();
            if (/[\s\n]/.test(g)) return null;
            if (
              c = b.getAllTokens(),
                d = a.util.getPreviousNonWsToken(c, b.count()),
                !d
            ) {
              return null;
            }
            if (
              ("keyword" !== d.name || "RewriteRule" !== d.value) &&
              (d = a.util.getPreviousNonWsToken(c, b.count() - 1),
                !d || "keyword" !== d.name || "RewriteCond" !== d.value)
            ) {
              return null;
            }
            for (
              e = g;
              (f = b.reader.peek()) !== b.reader.EOF && !/[\s\n]/.test(f);
            ) {
              e += b.reader.read();
            }
            return b.createToken("regexLiteral", e, h, i);
          }, function() {
            var b = a.util.createHashMap(
              [
                "AcceptFilter",
                "AcceptMutex",
                "AcceptPathInfo",
                "AccessFileName",
                "Action",
                "AddAltByEncoding",
                "AddAltByType",
                "AddAlt",
                "AddCharset",
                "AddDefaultCharset",
                "AddDescription",
                "AddEncoding",
                "AddHandler",
                "AddIconByEncoding",
                "AddIconByType",
                "AddIcon",
                "AddInputFilter",
                "AddLanguage",
                "AddModuleInfo",
                "AddOutputFilterByType",
                "AddOutputFilter",
                "AddType",
                "AliasMatch",
                "Alias",
                "AllowCONNECT",
                "AllowEncodedSlashes",
                "AllowOverride",
                "Allow",
                "Anonymous_LogEmail",
                "Anonymous_MustGiveEmail",
                "Anonymous_NoUserID",
                "Anonymous_VerifyEmail",
                "Anonymous",
                "AuthBasicAuthoritative",
                "AuthBasicProvider",
                "AuthDBDUserPWQuery",
                "AuthDBDUserRealmQuery",
                "AuthDBMGroupFile",
                "AuthDBMType",
                "AuthDBMUserFile",
                "AuthDefaultAuthoritative",
                "AuthDigestAlgorithm",
                "AuthDigestDomain",
                "AuthDigestNcCheck",
                "AuthDigestNonceFormat",
                "AuthDigestNonceLifetime",
                "AuthDigestProvider",
                "AuthDigestQop",
                "AuthDigestShmemSize",
                "AuthGroupFile",
                "AuthLDAPBindAuthoritative",
                "AuthLDAPBindDN",
                "AuthLDAPBindPassword",
                "AuthLDAPCharsetConfig",
                "AuthLDAPCompareDNOnServer",
                "AuthLDAPDereferenceAliases",
                "AuthLDAPGroupAttributeIsDN",
                "AuthLDAPGroupAttribute",
                "AuthLDAPRemoteUserAttribute",
                "AuthLDAPRemoteUserIsDN",
                "AuthLDAPUrl",
                "AuthName",
                "AuthType",
                "AuthUserFile",
                "AuthzDBMAuthoritative",
                "AuthzDBMType",
                "AuthzDefaultAuthoritative",
                "AuthzGroupFileAuthoritative",
                "AuthzLDAPAuthoritative",
                "AuthzOwnerAuthoritative",
                "AuthzUserAuthoritative",
                "BalancerMember",
                "BrowserMatch",
                "BrowserMatchNoCase",
                "BufferedLogs",
                "CacheDefaultExpire",
                "CacheDirLength",
                "CacheDirLevels",
                "CacheDisable",
                "CacheEnable",
                "CacheFile",
                "CacheIgnoreCacheControl",
                "CacheIgnoreHeaders",
                "CacheIgnoreNoLastMod",
                "CacheIgnoreQueryString",
                "CacheIgnoreURLSessionIdentifiers",
                "CacheLastModifiedFactor",
                "CacheLockMaxAge",
                "CacheLockPath",
                "CacheLock",
                "CacheMaxExpire",
                "CacheMaxFileSize",
                "CacheMinFileSize",
                "CacheNegotiatedDocs",
                "CacheRoot",
                "CacheStoreNoStore",
                "CacheStorePrivate",
                "CGIMapExtension",
                "CharsetDefault",
                "CharsetOptions",
                "CharsetSourceEnc",
                "CheckCaseOnly",
                "CheckSpelling",
                "ChrootDir",
                "ContentDigest",
                "CookieDomain",
                "CookieExpires",
                "CookieLog",
                "CookieName",
                "CookieStyle",
                "CookieTracking",
                "CoreDumpDirectory",
                "CustomLog",
                "DavDepthInfinity",
                "DavGenericLockDB",
                "DavLockDB",
                "DavMinTimeout",
                "Dav",
                "DBDExptime",
                "DBDKeep",
                "DBDMax",
                "DBDMin",
                "DBDParams",
                "DBDPersist",
                "DBDPrepareSQL",
                "DBDriver",
                "DefaultIcon",
                "DefaultLanguage",
                "DefaultType",
                "DeflateBufferSize",
                "DeflateCompressionLevel",
                "DeflateFilterNote",
                "DeflateMemLevel",
                "DeflateWindowSize",
                "Deny",
                "DirectoryIndex",
                "DirectorySlash",
                "DocumentRoot",
                "DumpIOInput",
                "DumpIOLogLevel",
                "DumpIOOutput",
                "EnableExceptionHook",
                "EnableMMAP",
                "EnableSendfile",
                "ErrorDocument",
                "ErrorLog",
                "Example",
                "ExpiresActive",
                "ExpiresByType",
                "ExpiresDefault",
                "ExtendedStatus",
                "ExtFilterDefine",
                "ExtFilterOptions",
                "FallbackResource",
                "FileETag",
                "FilterChain",
                "FilterDeclare",
                "FilterProtocol",
                "FilterProvider",
                "FilterTrace",
                "ForceLanguagePriority",
                "ForceType",
                "ForensicLog",
                "GprofDir",
                "GracefulShutDownTimeout",
                "Group",
                "HeaderName",
                "Header",
                "HostnameLookups",
                "IdentityCheckTimeout",
                "IdentityCheck",
                "ImapBase",
                "ImapDefault",
                "ImapMenu",
                "Include",
                "IndexHeadInsert",
                "IndexIgnore",
                "IndexOptions",
                "IndexOrderDefault",
                "IndexStyleSheet",
                "ISAPIAppendLogToErrors",
                "ISAPIAppendLogToQuery",
                "ISAPICacheFile",
                "ISAPIFakeAsync",
                "ISAPILogNotSupported",
                "ISAPIReadAheadBuffer",
                "KeepAliveTimeout",
                "KeepAlive",
                "LanguagePriority",
                "LDAPCacheEntries",
                "LDAPCacheTTL",
                "LDAPConnectionTimeout",
                "LDAPOpCacheEntries",
                "LDAPOpCacheTTL",
                "LDAPSharedCacheFile",
                "LDAPSharedCacheSize",
                "LDAPTrustedClientCert",
                "LDAPTrustedGlobalCert",
                "LDAPTrustedMode",
                "LDAPVerifyServerCert",
                "LimitInternalRecursion",
                "LimitRequestBody",
                "LimitRequestFields",
                "LimitRequestFieldSize",
                "LimitRequestLine",
                "LimitXMLRequestBody",
                "ListenBacklog",
                "Listen",
                "LoadFile",
                "LoadModule",
                "LockFile",
                "LogFormat",
                "LogLevel",
                "MaxClients",
                "MaxKeepAliveRequests",
                "MaxMemFree",
                "MaxRequestsPerChild",
                "MaxRequestsPerThread",
                "MaxSpareServers",
                "MaxSpareThreads",
                "MaxThreads",
                "MCacheMaxObjectCount",
                "MCacheMaxObjectSize",
                "MCacheMaxStreamingBuffer",
                "MCacheMinObjectSize",
                "MCacheRemovalAlgorithm",
                "MCacheSize",
                "MetaDir",
                "MetaFiles",
                "MetaSuffix",
                "MimeMagicFile",
                "MinSpareServers",
                "MinSpareThreads",
                "MMapFile",
                "ModMimeUsePathInfo",
                "MultiviewsMatch",
                "NameVirtualHost",
                "NoProxy",
                "NWSSLTrustedCerts",
                "NWSSLUpgradeable",
                "Options",
                "Order",
                "PassEnv",
                "PidFile",
                "ProtocolEcho",
                "Protocol",
                "ProxyBadHeader",
                "ProxyBlock",
                "ProxyDomain",
                "ProxyErrorOverride",
                "ProxyFtpDirCharset",
                "ProxyIOBufferSize",
                "ProxyMaxForwards",
                "ProxyPassInterpolateEnv",
                "ProxyPassMatch",
                "ProxyPassReverse",
                "ProxyPassReverseCookieDomain",
                "ProxyPassReverseCookiePath",
                "ProxyPass",
                "ProxyPreserveHost",
                "ProxyReceiveBufferSize",
                "ProxyRemoteMatch",
                "ProxyRemote",
                "ProxyRequests",
                "ProxySCGIInternalRedirect",
                "ProxySCGISendfile",
                "ProxySet",
                "ProxyStatus",
                "ProxyTimeout",
                "ProxyVia",
                "ReadmeName",
                "ReceiveBufferSize",
                "RedirectMatch",
                "RedirectPermanent",
                "RedirectTemp",
                "Redirect",
                "RemoveCharset",
                "RemoveEncoding",
                "RemoveHandler",
                "RemoveInputFilter",
                "RemoveLanguage",
                "RemoveOutputFilter",
                "RemoveType",
                "RequestHeader",
                "RequestReadTimeout",
                "Require",
                "RewriteBase",
                "RewriteCond",
                "RewriteEngine",
                "RewriteLock",
                "RewriteLogLevel",
                "RewriteLog",
                "RewriteMap",
                "RewriteOptions",
                "RewriteRule",
                "RLimitCPU",
                "RLimitMEM",
                "RLimitNPROC",
                "Satisfy",
                "ScoreBoardFile",
                "ScriptAliasMatch",
                "ScriptAlias",
                "ScriptInterpreterSource",
                "ScriptLogBuffer",
                "ScriptLogLength",
                "ScriptLog",
                "ScriptSock",
                "Script",
                "SecureListen",
                "SeeRequestTail",
                "SendBufferSize",
                "ServerAdmin",
                "ServerAlias",
                "ServerLimit",
                "ServerName",
                "ServerPath",
                "ServerRoot",
                "ServerSignature",
                "ServerTokens",
                "SetEnvIfNoCase",
                "SetEnvIf",
                "SetEnv",
                "SetHandler",
                "SetInputFilter",
                "SetOutputFilter",
                "SSIEnableAccess",
                "SSIEndTag",
                "SSIErrorMsg",
                "SSIETag",
                "SSILastModified",
                "SSIStartTag",
                "SSITimeFormat",
                "SSIUndefinedEcho",
                "SSLCACertificateFile",
                "SSLCACertificatePath",
                "SSLCADNRequestFile",
                "SSLCADNRequestPath",
                "SSLCARevocationFile",
                "SSLCARevocationPath",
                "SSLCertificateChainFile",
                "SSLCertificateFile",
                "SSLCertificateKeyFile",
                "SSLCipherSuite",
                "SSLCryptoDevice",
                "SSLEngine",
                "SSLFIPS",
                "SSLHonorCipherOrder",
                "SSLInsecureRenegotiation",
                "SSLMutex",
                "SSLOptions",
                "SSLPassPhraseDialog",
                "SSLProtocol",
                "SSLProxyCACertificateFile",
                "SSLProxyCACertificatePath",
                "SSLProxyCARevocationFile",
                "SSLProxyCARevocationPath",
                "SSLProxyCheckPeerCN",
                "SSLProxyCheckPeerExpire",
                "SSLProxyCipherSuite",
                "SSLProxyEngine",
                "SSLProxyMachineCertificateFile",
                "SSLProxyMachineCertificatePath",
                "SSLProxyProtocol",
                "SSLProxyVerify",
                "SSLProxyVerifyDepth",
                "SSLRandomSeed",
                "SSLRenegBufferSize",
                "SSLRequireSSL",
                "SSLRequire",
                "SSLSessionCacheTimeout",
                "SSLSessionCache",
                "SSLStrictSNIVHostCheck",
                "SSLUserName",
                "SSLVerifyClient",
                "SSLVerifyDepth",
                "StartServers",
                "StartThreads",
                "Substitute",
                "SuexecUserGroup",
                "Suexec",
                "ThreadLimit",
                "ThreadsPerChild",
                "ThreadStackSize",
                "TimeOut",
                "TraceEnable",
                "TransferLog",
                "TypesConfig",
                "UnsetEnv",
                "UseCanonicalName",
                "UseCanonicalPhysicalPort",
                "UserDir",
                "User",
                "VirtualDocumentRootIP",
                "VirtualDocumentRoot",
                "VirtualScriptAliasIP",
                "VirtualScriptAlias",
                "Win32DisableAcceptEx",
                "XBitHack",
                "ServerType"
              ],
              "\\b",
              !0
            );
            return function(c) {
              return c.reader.isSolWs() ? a.util.matchWord(c, b, "keyword")
                : !1;
            };
          }()],
          identFirstLetter: /[A-Za-z_]/,
          identAfterFirstLetter: /[\w]/,
          operators: ["</", "<", ">", "\\"]
        }
      );
    }(this.Sunlight),
    function(a, b) {
      function c(a) {
        var b = /^T([A-Z0-9]\w*)?$/;
        return function(c) {
          return !b.test(c.tokens[c.index].value) && a(c);
        };
      }
      if (
        a === b || a.registerLanguage === b
      ) {
        throw "Include sunlight.js before including language files";
      }
      var d = [
        "boolean",
        "byte",
        "char",
        "double",
        "float",
        "int",
        "long",
        "short"
      ], e = d.concat(["extends"]);
      a.registerLanguage(
        "java",
        {
          keywords: [
            "abstract",
            "assert",
            "boolean",
            "break",
            "byte",
            "case",
            "catch",
            "char",
            "class",
            "const",
            "continue",
            "default",
            "do",
            "double",
            "else",
            "enum",
            "extends",
            "final",
            "finally",
            "float",
            "for",
            "goto",
            "if",
            "implements",
            "import",
            "instanceof",
            "int",
            "interface",
            "long",
            "native",
            "new",
            "package",
            "private",
            "protected",
            "public",
            "return",
            "short",
            "static",
            "strictfp",
            "super",
            "switch",
            "synchronized",
            "this",
            "throw",
            "throws",
            "transient",
            "try",
            "void",
            "volatile",
            "while",
            "null",
            "false",
            "true"
          ],
          scopes: {
            string: [
              ['"', '"', a.util.escapeSequences.concat(['\\"'])],
              ["'", "'", ["'", "\\\\"]]
            ],
            comment: [["//", "\n", null, !0], ["/*", "*/"]],
            annotation: [["@", { length: 1, regex: /[\s\(]/ }, null, !0]]
          },
          identFirstLetter: /[A-Za-z_]/,
          identAfterFirstLetter: /\w/,
          namedIdentRules: { custom: [c(function(c) {
            for (
              var d, f = c.index, g = !1, h = [0, 0];
              (d = c.tokens[--f]) !== b;
            ) {
              if ("keyword" === d.name && "class" === d.value) return !1;
              if ("operator" !== d.name) {if (

                  !("keyword" === d.name && a.util.contains(e, d.value) ||
                    "default" === d.name || "punctuation" === d.name &&
                    "," === d.value)
                ) {
                  if ("ident" !== d.name) break;
                  g = !0;
                }} else {
                switch (d.value) {
                  case "<":
                  case "<<":
                    h[0] += d.value.length;
                    break;
                  case ">":
                  case ">>":
                    if (0 === h[0]) return !1;
                    h[1] += d.value.length;
                    break;
                  case ".":
                  case "?":
                  case "&":
                    break;
                  default:
                    return !1;
                }
              }
            }
            if (!g || 0 === h[0]) return !1;
            for (f = c.index; (d = c.tokens[++f]) !== b;) {
              if (
                "operator" === d.name && (">" === d.value || ">>" === d.value)
              ) {
                return !0;
              }
              if (

                !("keyword" === d.name && a.util.contains(e, d.value) ||
                  "operator" === d.name &&
                  a.util.contains(["<", "<<", ">", ">>"], d.value) ||
                  "punctuation" === d.name && "," === d.value ||
                  "ident" === d.name || "default" === d.name)
              ) {
                return !1;
              }
            }
            return !1;
          }), c(function(c) {
            var f, g, h = a.util.getPreviousNonWsToken(c.tokens, c.index);
            if (
              h !== b &&
              ("ident" === h.name || "keyword" === h.name &&
                a.util.contains(d.concat(["void"]), h.value) ||
                "operator" === h.name && "." === h.value)
            ) {
              return !1;
            }
            if (
              h = a.util.getNextNonWsToken(c.tokens, c.index),
                !h || "operator" !== h.name || "<" !== h.value
            ) {
              return !1;
            }
            for (f = c.index, g = [0, 0]; (h = c.tokens[++f]) !== b;) {
              if ("operator" !== h.name) {
                if (

                  !("default" === h.name || "ident" === h.name ||
                    "keyword" === h.name && a.util.contains(e, h.value) ||
                    "punctuation" === h.name && "," === h.value)
                ) {
                  return !1;
                }
              } else {
                switch (h.value) {
                  case "<":
                    g[0]++;
                    break;
                  case "<<":
                    g[0] += 2;
                    break;
                  case ">":
                    g[1]++;
                    break;
                  case ">>":
                    g[1] += 2;
                    break;
                  case "?":
                  case "&":
                    break;
                  default:
                    return !1;
                }
                if (g[0] > 0 && g[0] === g[1]) break;
              }
            }
            return g[0] !== g[1] ? !1 : (h = c.tokens[++f],
              !h || "default" !== h.name && "ident" !== h.name ? !1
                : "default" !== h.name ||
                  (h = c.tokens[++f], h && "ident" === h.name) ? !0 : !1);
          }), c(function(c) {
            var d, e, f, g = a.util.getNextNonWsToken(c.tokens, c.index);
            if (g && "operator" === g.name && "." === g.value) return !1;
            for (e = c.index, f = c.tokens[e]; (d = c.tokens[--e]) !== b;) {
              if (
                "keyword" === d.name &&
                ("new" === d.value || "import" === d.value ||
                  "instanceof" === d.value)
              ) {
                return !0;
              }
              if ("default" !== d.name) {
                if ("ident" !== d.name) {
                  if ("operator" !== d.name || "." !== d.value) break;
                  if (f && "ident" !== f.name) return !1;
                  f = d;
                } else {
                  if (f && "ident" === f.name) return !1;
                  f = d;
                }
              }
            }
            return !1;
          }), function() {
            var b = [
              [
                a.util.whitespace,
                { token: "punctuation", values: [")"] },
                a.util.whitespace,
                { token: "ident" }
              ],
              [
                a.util.whitespace,
                { token: "punctuation", values: [")"] },
                a.util.whitespace,
                { token: "keyword", values: ["this"] }
              ]
            ];
            return c(function(c) {
              var d, e, f, g = function(d) {
                for (var e = 0; e < b.length; e++) {
                  if (
                    a.util.createProceduralRule(
                      c.index + 1,
                      1,
                      b[e],
                      !1
                    )(d)
                  ) {
                    return !0;
                  }
                }
                return !1;
              }(c.tokens);
              if (!g) return !1;
              for (e = c.index; d = c.tokens[--e];) {
                if (
                  "punctuation" === d.name && "(" === d.value
                ) {
                  return f = a.util.getPreviousNonWsToken(c.tokens, e),
                    f && "keyword" === f.name ? !1 : !0;
                }
              }
              return !1;
            });
          }(), c(function(b) {
            var c, d = [
              [
                { token: "ident" },
                a.util.whitespace,
                { token: "keyword", values: ["extends", "implements"] },
                a.util.whitespace
              ],
              [
                {
                  token: "keyword",
                  values: [
                    "class",
                    "interface",
                    "enum",
                    "public",
                    "private",
                    "protected",
                    "static",
                    "final"
                  ]
                },
                a.util.whitespace
              ],
              [
                { token: "keyword", values: ["extends"] },
                { token: "default" },
                { token: "ident" },
                { token: "default" },
                { token: "operator", values: ["&"] },
                { token: "default" }
              ]
            ], e = [
              [
                a.util.whitespace,
                { token: "punctuation", values: ["["] },
                a.util.whitespace,
                { token: "punctuation", values: ["]"] }
              ],
              [{ token: "default" }, { token: "ident" }]
            ], f = [
              {
                opener: { token: "keyword", values: ["implements", "throws"] },
                closer: { token: "punctuation", values: ["{"] }
              }
            ];
            for (c = 0; c < d.length; c++) {
              if (
                a.util.createProceduralRule(
                  b.index - 1,
                  -1,
                  d[c],
                  !1
                )(b.tokens)
              ) {
                return !0;
              }
            }
            for (c = 0; c < e.length; c++) {
              if (
                a.util.createProceduralRule(
                  b.index + 1,
                  1,
                  e[c],
                  !1
                )(b.tokens)
              ) {
                return !0;
              }
            }
            for (c = 0; c < f.length; c++) {
              if (
                a.util.createBetweenRule(
                  b.index,
                  f[c].opener,
                  f[c].closer,
                  !1
                )(b.tokens)
              ) {
                return !0;
              }
            }
            return !1;
          })] },
          operators: [
            "++",
            "+=",
            "+",
            "--",
            "-=",
            "-",
            "*=",
            "*",
            "/=",
            "/",
            "%=",
            "%",
            "&&",
            "||",
            "|=",
            "|",
            "&=",
            "&",
            "^=",
            "^",
            ">>>=",
            ">>>",
            ">>=",
            ">>",
            "<<=",
            "<<",
            "<=",
            "<",
            ">=",
            ">",
            "==",
            "!=",
            "!",
            "~",
            "?",
            ":",
            ".",
            "="
          ]
        }
      );
    }(this.Sunlight),
    function(a, b) {
      if (
        a === b || a.registerLanguage === b
      ) {
        throw "Include sunlight.js before including language files";
      }
      a.registerLanguage(
        "javascript",
        {
          keywords: [
            "break",
            "case",
            "catch",
            "continue",
            "default",
            "delete",
            "do",
            "else",
            "finally",
            "for",
            "function",
            "if",
            "in",
            "instanceof",
            "new",
            "return",
            "switch",
            "this",
            "throw",
            "try",
            "typeof",
            "var",
            "void",
            "while",
            "with",
            "true",
            "false",
            "null"
          ],
          customTokens: {
            reservedWord: {
              values: [
                "abstract",
                "boolean",
                "byte",
                "char",
                "class",
                "const",
                "debugger",
                "double",
                "enum",
                "export",
                "extends",
                "final",
                "float",
                "goto",
                "implements",
                "import",
                "int",
                "interface",
                "long",
                "native",
                "package",
                "private",
                "protected",
                "public",
                "short",
                "static",
                "super",
                "synchronized",
                "throws",
                "transient",
                "volatile"
              ],
              boundary: "\\b"
            },
            globalVariable: {
              values: ["NaN", "Infinity", "undefined"],
              boundary: "\\b"
            },
            globalFunction: {
              values: [
                "encodeURI",
                "encodeURIComponent",
                "decodeURI",
                "decodeURIComponent",
                "parseInt",
                "parseFloat",
                "isNaN",
                "isFinite",
                "eval"
              ],
              boundary: "\\b"
            },
            globalObject: {
              values: [
                "Math",
                "JSON",
                "XMLHttpRequest",
                "XDomainRequest",
                "ActiveXObject",
                "Boolean",
                "Date",
                "Array",
                "Image",
                "Function",
                "Object",
                "Number",
                "RegExp",
                "String"
              ],
              boundary: "\\b"
            }
          },
          scopes: {
            string: [
              ['"', '"', a.util.escapeSequences.concat(['\\"'])],
              ["'", "'", a.util.escapeSequences.concat(["\\'", "\\\\"])]
            ],
            comment: [["//", "\n", null, !0], ["/*", "*/"]]
          },
          customParseRules: [function(c) {
            var d, e, f, g = c.reader.peek(), h = "/", i = c.reader.getLine(),
              j = c.reader.getColumn(), k = !1;
            if (
              "/" !== c.reader.current() || "/" === g || "*" === g
            ) {
              return null;
            }
            if (
              d = function() {
                var d = c.token(c.count() - 1), e = null;
                return "" !== c.defaultData.text &&
                  (e = c.createToken("default", c.defaultData.text)),
                  e || (e = d),
                  e === b ? !0
                    : "default" === e.name && e.value.indexOf("\n") > -1 ? !0
                      : a.util.contains(["keyword", "ident", "number"], d.name)
                        ? !1
                        : "punctuation" !== d.name ||
                          a.util.contains(["(", "{", "[", ",", ";"], d.value)
                          ? !0 : !1;
              }(),
                !d
            ) {
              return null;
            }
            for (; c.reader.peek() !== c.reader.EOF;) {
              if (
                e = c.reader.peek(2),
                  "\\/" !== e && "\\\\" !== e
              ) {
                if ("\\[" !== e && "\\]" !== e) {
                  if (
                    "[" === f ? k = !0 : "]" === f && (k = !1),
                      h += f = c.reader.read(),
                      "/" === f && !k
                  ) {
                    break;
                  }
                } else h += c.reader.read(2);
              } else h += c.reader.read(2);
            }
            for (
              ;
              c.reader.peek() !== c.reader.EOF &&
              /[A-Za-z]/.test(c.reader.peek());
            ) {
              h += c.reader.read();
            }
            return c.createToken("regexLiteral", h, i, j);
          }],
          identFirstLetter: /[$A-Za-z_]/,
          identAfterFirstLetter: /[\w\$]/,
          namedIdentRules: {
            follows: [
              [{ token: "keyword", values: ["function"] }, a.util.whitespace]
            ]
          },
          operators: [
            "++",
            "+=",
            "+",
            "--",
            "-=",
            "-",
            "*=",
            "*",
            "/=",
            "/",
            "%=",
            "%",
            "&&",
            "||",
            "|=",
            "|",
            "&=",
            "&",
            "^=",
            "^",
            ">>>=",
            ">>>",
            ">>=",
            ">>",
            "<<=",
            "<<",
            "<=",
            "<",
            ">=",
            ">",
            "===",
            "==",
            "!==",
            "!=",
            "!",
            "~",
            "?",
            ":",
            ".",
            "="
          ]
        }
      );
    }(this.Sunlight),
    function(a, b) {
      function c(b, c) {
        var e = a.util.createHashMap(b, d, !1);
        return function(b) {
          var d = a.util.getPreviousNonWsToken(b.getAllTokens(), b.count());
          return d
            ? "punctuation" !== d.name || "(" !== d.value &&
              ("operator" !== d.name || "#'" !== d.value) ? null
              : a.util.matchWord(b, e, c) : null;
        };
      }
      if (
        a === b || a.registerLanguage === b
      ) {
        throw "Include sunlight.js before including language files";
      }
      var d = "[\\s\\(\\)]";
      a.registerLanguage(
        "lisp",
        {
          scopes: {
            string: [['"', '"']],
            comment: [[";", "\n", null, !0]],
            keywordArgument: [
              [":", { regex: /[\s\)\(]/, length: 1 }, null, !0]
            ]
          },
          customTokens: {
            keyword: {
              values: [
                "always",
                "appending",
                "append",
                "as",
                "collecting",
                "collect",
                "counting",
                "count",
                "doing",
                "do",
                "finally",
                "for",
                "if",
                "initially",
                "maximize",
                "maximizing",
                "minimize",
                "minimizing",
                "named",
                "nconcing",
                "nconc",
                "never",
                "repeat",
                "return",
                "summing",
                "sum",
                "thereis",
                "unless",
                "until",
                "when",
                "while",
                "with",
                "into",
                "in"
              ],
              boundary: "[^\\w-]"
            },
            globalVariable: {
              values: [
                "*applyhook*",
                "*break-on-signals*",
                "*break-on-warnings*",
                "*compile-file-pathname*",
                "*compile-file-truename*",
                "*compile-print*",
                "*compile-verbose*",
                "*debug-io*",
                "*debugger-hook*",
                "*gensym-counter*",
                "*terminal-io*",
                "*default-pathname-defaults*",
                "*error-output*",
                "*evalhook*",
                "*features*",
                "*load-pathname*",
                "*load-print*",
                "*load-truename*",
                "*load-verbose*",
                "*macroexpand-hook*",
                "*modules*",
                "*package*",
                "*print-array*",
                "*print-base*",
                "*print-case*",
                "*print-circle*",
                "*print-escape*",
                "*print-gensym*",
                "*print-length*",
                "*print-level*",
                "*print-lines*",
                "*print-miser-width*",
                "*print-pprint-dispatch*",
                "*print-pretty*",
                "*print-radix*",
                "*print-readably*",
                "*print-right-margin*",
                "*query-io*",
                "*random-state*",
                "*read-base*",
                "*read-default-float-format*",
                "*read-eval*",
                "*read-suppress*",
                "*readtable*",
                "*standard-input*",
                "*standard-output*",
                "*suppress-series-warnings*",
                "*trace-output*",
                "***",
                "**",
                "*",
                "+++",
                "++",
                "+",
                "-",
                "///",
                "//",
                "/"
              ],
              boundary: d
            },
            constant: {
              values: [
                "array-dimension-limit",
                "array-rank-limit",
                "array-total-size-limit",
                "call-arguments-limit",
                "char-bits-limit",
                "char-code-limit",
                "char-control-bit",
                "char-font-limit",
                "char-hyper-bit",
                "char-meta-bit",
                "char-super-bit",
                "double-float-epsilon",
                "double-float-negative-epsilon",
                "internal-time-units-per-second",
                "lambda-list-keywords",
                "lambda-parameters-limit",
                "least-negative-double-float",
                "least-negative-long-float",
                "least-negative-normalized-double-float",
                "least-negative-normalized-long-float",
                "least-negative-normalized-short-float",
                "least-negative-normalized-single-float",
                "least-negative-short-float",
                "least-negative-single-float",
                "least-positive-double-float",
                "least-positive-long-float",
                "least-positive-normalized-double-float",
                "least-positive-normalized-long-float",
                "least-positive-normalized-short-float",
                "least-positive-normalized-single-float",
                "least-positive-short-float",
                "least-positive-single-float",
                "long-float-epsilon",
                "long-float-negative-epsilon",
                "most-negative-double-float",
                "most-negative-fixnum",
                "most-negative-long-float",
                "most-negative-short-float",
                "most-negative-single-float",
                "most-positive-double-float",
                "most-positive-fixnum",
                "most-positive-long-float",
                "most-positive-short-float",
                "most-positive-single-float",
                "multiple-values-limit",
                "nil",
                "pi",
                "short-float-epsilon",
                "short-float-negative-epsilon",
                "single-float-epsilon",
                "single-float-negative-epsilon",
                "t"
              ],
              boundary: d
            },
            declarationSpecifier: {
              values: [
                "off-line-port",
                "optimizable-series-function",
                "propagate-alterability"
              ],
              boundary: d
            }
          },
          customParseRules: [
            function(a) {
              var b, c, d = 0;
              if ("#" !== a.reader.current()) return null;
              for (
                ;
                (b = a.reader.peek(++d)) !== a.reader.EOF && b.length === d;
              ) {
                if (!/\d$/.test(b)) {
                  if (/[AR]$/i.test(b)) break;
                  return null;
                }
              }
              return b.length !== d ? null : (c = a.createToken(
                "operator",
                "#" + b,
                a.reader.getLine(),
                a.reader.getColumn()
              ),
                a.reader.read(b.length),
                c);
            },
            function(a) {
              var b, c, d, e = a.reader.getLine(), f = a.reader.getColumn();
              if (
                "" !== a.defaultData.text || /\s/.test(a.reader.current())
              ) {
                return null;
              }
              if (
                b = a.getAllTokens()[a.count() - 1],
                  !b || "operator" !== b.name || "#\\" !== b.value
              ) {
                return null;
              }
              for (
                d = a.reader.current();
                (c = a.reader.peek()) !== a.reader.EOF && !/[\s\(\)]/.test(c);
              ) {
                d += a.reader.read();
              }
              return a.createToken("ident", d, e, f);
            },
            function(b) {
              var c, d, e = "*", f = b.reader.getLine(),
                g = b.reader.getColumn();
              if ("*" !== b.reader.current()) return null;
              if (

                c = a.util.getPreviousNonWsToken(b.getAllTokens(), b.count()),
                  c && "punctuation" === c.name && "(" === c.value
              ) {
                return null;
              }
              if (/[\s\*\)\(]/.test(b.reader.peek())) return null;
              for (
                ;
                (d = b.reader.peek()) !== b.reader.EOF &&
                (e += b.reader.read(), "*" !== d);
              );
              return b.createToken("variable", e, f, g);
            },
            function() {
              var a = new RegExp(d);
              return function(b) {
                var c, d, e, f = b.reader.getLine(), g = b.reader.getColumn();
                if (
                  "" !== b.defaultData.text || a.test(b.reader.current())
                ) {
                  return null;
                }
                if (
                  c = b.getAllTokens()[b.count() - 1],
                    !c || "operator" !== c.name || "#'" !== c.value
                ) {
                  return null;
                }
                for (
                  e = b.reader.current();
                  (d = b.reader.peek()) !== b.reader.EOF && !a.test(d);
                ) {
                  e += b.reader.read();
                }
                return b.createToken("function", e, f, g);
              };
            }(),
            c(
              [
                "arithmetic-error",
                "cell-error",
                "condition",
                "control-error",
                "division-by-zero",
                "end-of-file",
                "error",
                "file-error",
                "floating-point-overflow",
                "floating-point-underflow",
                "package-error",
                "program-error",
                "restart",
                "series",
                "series-element-type",
                "serious-condition",
                "simple-condition",
                "simple-error",
                "simple-type-error",
                "simple-warning",
                "storage-condition",
                "stream-error",
                "type-error",
                "unbound-variable",
                "undefined-function",
                "warning"
              ],
              "type"
            ),
            c(
              [
                "block",
                "catch",
                "compiler-let",
                "declare",
                "eval-when",
                "flet",
                "function",
                "generic-flet",
                "generic-labels",
                "go",
                "if",
                "let*",
                "let",
                "load-time-value",
                "locally",
                "multiple-value-call",
                "multiple-value-prog1",
                "progn",
                "progv",
                "quote",
                "return-from",
                "setq",
                "symbol-macrolet",
                "tagbody",
                "the",
                "throw",
                "unwind-protect",
                "with-added-methods"
              ],
              "specialForm"
            ),
            c(
              [
                "and",
                "assert",
                "call-method",
                "case",
                "ccase",
                "check-type",
                "compiler-let",
                "cond",
                "ctypecase",
                "decf",
                "declaim",
                "defclass",
                "defgeneric",
                "define-compiler-macro",
                "define-condition",
                "define-declaration",
                "define-method-combination",
                "define-modify-macro",
                "define-setf-method",
                "defmacro",
                "defmethod",
                "defpackage",
                "defstruct",
                "deftype",
                "defun",
                "defvar",
                "destructuring-bind",
                "do*",
                "do-all-symbols",
                "do-external-symbols",
                "do-symbols",
                "dolist",
                "dotimes",
                "do",
                "ecase",
                "encapsulated",
                "etypecase",
                "formatter",
                "gathering",
                "generic-function",
                "handler-bind",
                "handler-case",
                "ignore-errors",
                "in-package",
                "incf",
                "iterate",
                "locally",
                "loop-finish",
                "loop",
                "mapping",
                "multiple-value-bind",
                "multiple-value-list",
                "multiple-value-setq",
                "next-in",
                "nth-value",
                "or",
                "pop",
                "pprint-exit-if-list-exhausted",
                "pprint-logical-block",
                "pprint-pop",
                "print-unreadable-object",
                "producing",
                "prog*",
                "prog1",
                "prog2",
                "prog",
                "psetf",
                "psetq",
                "pushnew",
                "push",
                "remf",
                "restart-bind",
                "restart-case",
                "return",
                "rotatef",
                "setf",
                "shiftf",
                "step",
                "terminate-producing",
                "time",
                "trace",
                "typecase",
                "unless",
                "untrace",
                "when",
                "with-accessors",
                "with-compilation-unit",
                "with-condition-restarts",
                "with-hash-table-iterator",
                "with-input-from-string",
                "with-open-file",
                "with-open-stream",
                "with-output-to-string",
                "with-package-iterator",
                "with-simple-restart",
                "with-slots",
                "with-standard-io-syntax",
                "defparameter"
              ],
              "macro"
            ),
            c(
              [
                "*",
                "+",
                "-",
                "/",
                "1+",
                "1-",
                "<=",
                "<",
                ">=",
                ">",
                "=",
                "lambda",
                "abort",
                "abs",
                "acons",
                "acosh",
                "acos",
                "add-method",
                "adjoin",
                "adjust-array",
                "adjustable-array-p",
                "alpha-char-p",
                "alphanumericp",
                "alter",
                "append",
                "applyhook",
                "apply",
                "apropos-list",
                "apropos",
                "aref",
                "arithmetic-error-operands",
                "arithmetic-error-operation",
                "array-dimensions",
                "array-dimension",
                "array-element-type",
                "array-has-fill-pointer-p",
                "array-in-bounds-p",
                "array-rank",
                "array-row-major-index",
                "array-total-size",
                "arrayp",
                "ash",
                "asinh",
                "asin",
                "assoc-if",
                "assoc-if-not",
                "assoc",
                "atanh",
                "atan",
                "atom",
                "augment-environment",
                "bit-andc1",
                "bit-andc2",
                "bit-and",
                "bit-eqv",
                "bit-ior",
                "bit-nand",
                "bit-nor",
                "bit-not",
                "bit-orc1",
                "bit-orc2",
                "bit-vector-p",
                "bit-xor",
                "bit",
                "boole",
                "both-case-p",
                "boundp",
                "break",
                "broadcast-stream-streams",
                "butlast",
                "byte-position",
                "byte-size",
                "byte",
                "caaaar",
                "caaadr",
                "caaar",
                "caadar",
                "caaddr",
                "caadr",
                "caar",
                "cadaar",
                "cadadr",
                "cadar",
                "caddar",
                "cadddr",
                "caddr",
                "cadr",
                "call-next-method",
                "car",
                "catenate",
                "cdaaar",
                "cdaadr",
                "cdaar",
                "cdadar",
                "cdaddr",
                "cdadr",
                "cdar",
                "cddaar",
                "cddadr",
                "cddar",
                "cdddar",
                "cddddr",
                "cdddr",
                "cddr",
                "cdr",
                "ceiling",
                "cell-error-name",
                "cerror",
                "change-class",
                "char-bits",
                "char-bit",
                "char-code",
                "char-downcase",
                "char-equal",
                "char-font",
                "char-greaterp",
                "char-int",
                "char-lessp",
                "char-name",
                "char-not-equal",
                "char-not-greaterp",
                "char-not-lessp",
                "char-upcase",
                "char/=",
                "char<=",
                "char<",
                "char=",
                "char>=",
                "char>",
                "char",
                "characterp",
                "character",
                "choose-if",
                "choose",
                "chunk",
                "cis",
                "class-name",
                "class-of",
                "clear-input",
                "close",
                "clrhash",
                "code-char",
                "coerce",
                "collect-alist",
                "collect-and",
                "collect-append",
                "collect-file",
                "collect-first",
                "collect-fn",
                "collect-hash",
                "collect-last",
                "collect-length",
                "collect-max",
                "collect-min",
                "collect-nconc",
                "collect-nth",
                "collect-or",
                "collect-plist",
                "collect-sum",
                "collecting-fn",
                "collect",
                "commonp",
                "compile-file",
                "compile-file-pathname",
                "compiled-function-p",
                "compiler-macro-function",
                "compiler-macroexpand",
                "compiler-macroexpand-1",
                "compile",
                "complement",
                "complexp",
                "complex",
                "compute-applicable-methods",
                "compute-restarts",
                "concatenated-stream-streams",
                "concatenate",
                "conjugate",
                "consp",
                "constantp",
                "cons",
                "continue",
                "copy-alist",
                "copy-list",
                "copy-pprint-dispatch",
                "copy-readtable",
                "copy-seq",
                "copy-symbol",
                "copy-tree",
                "cosh",
                "cos",
                "cotruncate",
                "count-if",
                "count-if-not",
                "count",
                "declaration-information",
                "decode-float",
                "decode-universal-time",
                "delete-duplicates",
                "delete-file",
                "delete-if",
                "delete-if-not",
                "delete-package",
                "delete",
                "denominator",
                "deposit-field",
                "describe-object",
                "describe",
                "digit-char-p",
                "digit-char",
                "directory-namestring",
                "directory",
                "disassemble",
                "documentation",
                "dpb",
                "dribble",
                "echo-stream-input-stream",
                "echo-stream-output-stream",
                "ed",
                "eighth",
                "elt",
                "enclose",
                "encode-universal-time",
                "endp",
                "enough-namestring",
                "ensure-generic-function",
                "eql",
                "eq",
                "equalp",
                "equal",
                "error",
                "evalhook",
                "eval",
                "evenp",
                "every",
                "expand",
                "export",
                "expt",
                "exp",
                "fboundp",
                "fdefinition",
                "ffloor",
                "fifth",
                "file-author",
                "file-error-pathname",
                "file-length",
                "file-namestring",
                "file-position",
                "file-string-length",
                "file-write-date",
                "fill-pointer",
                "fill",
                "find-all-symbols",
                "find-class",
                "find-if-not",
                "find-if",
                "find-method",
                "find-package",
                "find-restart",
                "find-symbol",
                "find",
                "finish-output",
                "first",
                "float-digits",
                "float-precision",
                "float-radix",
                "float-sign",
                "floatp",
                "float",
                "floor",
                "format",
                "fourth",
                "funcall",
                "function-information",
                "function-keywords",
                "function-lambda-expression",
                "functionp",
                "f",
                "gatherer",
                "gcd",
                "generator",
                "gensym",
                "gentemp",
                "get-decoded-time",
                "get-internal-real-time",
                "get-internal-run-time",
                "get-output-stream-string",
                "get-properties",
                "get-setf-method-multiple-value",
                "get-setf-method",
                "get-universal-time",
                "getf",
                "gethash",
                "get",
                "graphic-char-p",
                "hash-table-count",
                "hash-table-p",
                "hash-table-rehash-size",
                "hash-table-rehash-threshold",
                "hash-table-size",
                "hash-table-test",
                "host-namestring",
                "identity",
                "imagpart",
                "import",
                "in-package",
                "initialize-instance",
                "input-stream-p",
                "inspect",
                "int-char",
                "integer-decode-float",
                "integer-length",
                "integerp",
                "interactive-stream-p",
                "intern",
                "intersection",
                "invalid-method-error",
                "invoke-debugger",
                "invoke-restart",
                "isqrt",
                "keywordp",
                "last",
                "latch",
                "lcm",
                "ldb-test",
                "ldb",
                "ldiff",
                "length",
                "lisp-implementation-type",
                "lisp-implementation-version",
                "list*",
                "list-all-packages",
                "list-length",
                "listen",
                "listp",
                "list",
                "load-logical-pathname-translations",
                "load",
                "logandc1",
                "logandc2",
                "logand",
                "logbitp",
                "logcount",
                "logeqv",
                "logical-pathname-translations",
                "logical-pathname",
                "logior",
                "lognand",
                "lognor",
                "lognot",
                "logorc1",
                "logorc2",
                "logtest",
                "logxor",
                "log",
                "long-site-name",
                "lower-case-p",
                "machine-instance",
                "machine-type",
                "machine-version",
                "macro-function",
                "macroexpand-1",
                "macroexpand",
                "make-array",
                "make-broadcast-stream",
                "make-char",
                "make-concatenated-stream",
                "make-condition",
                "make-dispatch-macro-character",
                "make-echo-stream",
                "make-hash-table",
                "make-instances-obsolete",
                "make-instance",
                "make-list",
                "make-load-form-saving-slots",
                "make-load-form",
                "make-package",
                "make-pathname",
                "make-random-state",
                "make-sequence",
                "make-string-input-stream",
                "make-string-output-stream",
                "make-string",
                "make-symbol",
                "make-synonym-stream",
                "make-two-way-stream",
                "makunbound",
                "map-fn",
                "map-into",
                "mapcan",
                "mapcar",
                "mapcon",
                "mapc",
                "maphash",
                "maplist",
                "mapl",
                "map",
                "mask-field",
                "mask",
                "max",
                "member-if",
                "member-if-not",
                "member",
                "merge-pathnames",
                "merge",
                "method-combination-error",
                "method-qualifiers",
                "mingle",
                "minusp",
                "min",
                "mismatch",
                "mod",
                "muffle-warning",
                "name-char",
                "namestring",
                "nbutlast",
                "nconc",
                "next-method-p",
                "next-out",
                "nintersection",
                "ninth",
                "no-applicable-method",
                "no-next-method",
                "notany",
                "notevery",
                "not",
                "nreconc",
                "nreverse",
                "nset-difference",
                "nset-exclusive-or",
                "nstring-capitalize",
                "nstring-downcase",
                "nstring-upcase",
                "nsublis",
                "nsubst",
                "nsubst-if-not",
                "nsubst-if",
                "nsubstitute-if-not",
                "nsubstitute-if",
                "nsubstitute",
                "nthcdr",
                "nth",
                "null",
                "numberp",
                "numerator",
                "nunion",
                "oddp",
                "open-stream-p",
                "open",
                "output-stream-p",
                "package-error-package",
                "package-name",
                "package-nicknames",
                "package-shadowing-symbols",
                "package-use-list",
                "package-used-by-list",
                "packagep",
                "pairlis",
                "parse-integer",
                "parse-macro",
                "parse-namestring",
                "pathname-device",
                "pathname-directory",
                "pathname-host",
                "pathname-match-p",
                "pathname-name",
                "pathname-type",
                "pathname-version",
                "pathnamep",
                "pathname",
                "peek-char",
                "phase",
                "plusp",
                "position-if-not",
                "position-if",
                "positions",
                "position",
                "pprint-dispatch",
                "pprint-fill",
                "pprint-indent",
                "pprint-linear",
                "pprint-newline",
                "pprint-tabular",
                "pprint-tab",
                "previous",
                "prin1",
                "print-object",
                "probe-file",
                "proclaim",
                "provide",
                "random-state-p",
                "random",
                "rassoc-if-not",
                "rassoc-if",
                "rassoc",
                "rationalize",
                "rationalp",
                "rational",
                "read-byte",
                "read-char-no-hang",
                "read-char",
                "read-delimited-list",
                "read-from-string",
                "read-line",
                "read",
                "read-preserving-whitespace",
                "readtable-case",
                "readtablep",
                "realpart",
                "realp",
                "reduce",
                "reinitialize-instance",
                "remhash",
                "remove-duplicates",
                "remove-method",
                "remove",
                "remprop",
                "rem",
                "rename-file",
                "rename-package",
                "replace",
                "require",
                "restart-name",
                "rest",
                "result-of",
                "revappend",
                "reverse",
                "room",
                "round",
                "row-major-aref",
                "rplaca",
                "rplacd",
                "sbit",
                "scale-float",
                "scan-alist",
                "scan-file",
                "scan-fn-inclusive",
                "scan-fn",
                "scan-hash",
                "scan-lists-of-lists-fringe",
                "scan-lists-of-lists",
                "scan-multiple",
                "scan-plist",
                "scan-range",
                "scan-sublists",
                "scan-symbols",
                "scan",
                "schar",
                "search",
                "second",
                "series",
                "set-char-bit",
                "set-difference",
                "set-dispatch-macro-character",
                "set-exclusive-or",
                "set-macro-character",
                "set-pprint-dispatch",
                "set-syntax-from-char",
                "set",
                "seventh",
                "shadow",
                "shadowing-import",
                "shared-initialize",
                "short-site-name",
                "signal",
                "signum",
                "simple-bit-vector-p",
                "simple-condition-format-arguments",
                "simple-condition-format-string",
                "simple-string-p",
                "simple-vector-p",
                "sinh",
                "sin",
                "sixth",
                "sleep",
                "slot-boundp",
                "slot-exists-p",
                "slot-makunbound",
                "slot-missing",
                "slot-unbound",
                "slot-value",
                "software-type",
                "software-version",
                "some",
                "sort",
                "special-form-p",
                "split-if",
                "split",
                "sqrt",
                "stable-sort",
                "standard-char-p",
                "store-value",
                "stream-element-type",
                "stream-error-stream",
                "stream-external-format",
                "streamp",
                "string-capitalize",
                "string-char-p",
                "string-downcase",
                "string-equal",
                "string-greaterp",
                "string-left-trim",
                "string-lessp",
                "string-not-equal",
                "string-not-greaterp",
                "string-not-lessp",
                "string-right-trim",
                "string-trim",
                "string-upcase",
                "string/=",
                "string<",
                "string<=",
                "string=",
                "string>",
                "string>=",
                "stringp",
                "string",
                "sublis",
                "subseq",
                "subseries",
                "subsetp",
                "subst-if-not",
                "subst-if",
                "substitute-if-not",
                "substitute-if",
                "substitute",
                "subst",
                "subtypep",
                "svref",
                "sxhash",
                "symbol-function",
                "symbol-name",
                "symbol-package",
                "symbol-plist",
                "symbol-value",
                "symbolp",
                "synonym-stream-symbol",
                "tailp",
                "tanh",
                "tan",
                "tenth",
                "terpri",
                "third",
                "to-alter",
                "translate-logical-pathname",
                "translate-pathname",
                "tree-equal",
                "truename",
                "truncate",
                "two-way-stream-input-stream",
                "two-way-stream-output-stream",
                "type-error-datum",
                "type-error-expected-type",
                "type-of",
                "typep",
                "unexport",
                "unintern",
                "union",
                "unread-char",
                "until-if",
                "until",
                "unuse-package",
                "update-instance-for-different-class",
                "update-instance-for-redefined-class",
                "upgraded-array-element-type",
                "upgraded-complex-part-type",
                "upper-case-p",
                "use-package",
                "use-value",
                "user-homedir-pathname",
                "values-list",
                "values",
                "variable-information",
                "vector-pop",
                "vector-push-extend",
                "vector-push",
                "vectorp",
                "vector",
                "warn",
                "wild-pathname-p",
                "write-byte",
                "write-char",
                "write-string",
                "write-to-string",
                "write",
                "y-or-n-p",
                "yes-or-no-p",
                "zerop"
              ],
              "function"
            )
          ],
          identFirstLetter: /[A-Za-z]/,
          identAfterFirstLetter: /[\w-]/,
          namedIdentRules: { custom: [function() {
            var b = [
              "defmacro",
              "defmethod",
              "defpackage",
              "defstruct",
              "deftype",
              "defun",
              "defvar",
              "define-compiler-macro",
              "define-condition",
              "define-declaration",
              "define-method-combination",
              "define-modify-macro",
              "define-setf-method"
            ];
            return function(c) {
              var d = a.util.getPreviousNonWsToken(c.tokens, c.index),
                e = c.tokens[c.index].value;
              return d && "macro" === d.name && a.util.contains(b, d.value) &&
                c.items.userDefinedFunctions.push(e),
                a.util.contains(c.items.userDefinedFunctions, e);
            };
          }()] },
          contextItems: { userDefinedFunctions: [] },
          operators: [
            "=>",
            "#B",
            "#b",
            "#O",
            "#o",
            "#X",
            "#x",
            "#C",
            "#c",
            "#S",
            "#s",
            "#P",
            "#p",
            "#.",
            "#:",
            "#\\",
            "#'",
            "#",
            "'",
            "...",
            "..",
            "."
          ]
        }
      );
    }(this.Sunlight),
    function(a, b) {
      if (
        a === b || a.registerLanguage === b
      ) {
        throw "Include sunlight.js before including language files";
      }
      a.registerLanguage(
        "lua",
        {
          keywords: [
            "and",
            "break",
            "do",
            "elseif",
            "else",
            "end",
            "false",
            "for",
            "function",
            "if",
            "in",
            "local",
            "nil",
            "not",
            "or",
            "repeat",
            "return",
            "then",
            "true",
            "until",
            "while"
          ],
          scopes: {
            string: [['"', '"', ['\\"', "\\\\"]], ["'", "'", ["\\'", "\\\\"]]],
            comment: [["--[[", "]]"], ["--", "\n", null, !0]]
          },
          customTokens: {
            globalVariable: { values: ["_G", "_VERSION"], boundary: "\\b" }
          },
          customParseRules: [function() {
            var b = a.util.createHashMap(
              [
                "assert",
                "collectgarbage",
                "dofile",
                "error",
                "getfenv",
                "getmetatable",
                "ipairs",
                "load",
                "loadfile",
                "loadstring",
                "next",
                "pairs",
                "pcall",
                "print",
                "rawequal",
                "rawget",
                "rawset",
                "select",
                "setfenv",
                "setmetatable",
                "tonumber",
                "tostring",
                "type",
                "unpack",
                "xpcall",
                "module",
                "require"
              ],
              "\\b"
            );
            return function(c) {
              var d = c.token(c.count() - 1);
              return d && "operator" === d.name && "." === d.value ? null
                : a.util.matchWord(c, b, "function");
            };
          }(), function() {
            var b = a.util.createHashMap(
              ["close", "flush", "lines", "read", "seek", "setvbuf", "write"],
              "\\b"
            );
            return function(c) {
              var d = c.token(c.count() - 1);
              return d && "operator" === d.name && ":" === d.value
                ? a.util.matchWord(c, b, "function") : null;
            };
          }(), function(a) {
            var b, c, d, e = 0, f = 0, g = a.reader.getLine(),
              h = a.reader.getColumn();
            if ("[" !== a.reader.current()) return null;
            for (; (b = a.reader.peek(++f)) && b.length === f;) {
              if (
                !/=$/.test(
                  b
                )
              ) {
                if (!/\[$/.test(b)) return null;
                e = b.length - 1;
                break;
              }
            }
            for (
              c = "[" + b,
                a.reader.read(b.length),
                d = "]" + new Array(e + 1).join("=") + "]";
              b = a.reader.peek();
            ) {
              if ("]" === b && a.reader.peek(d.length) === d) {
                c += a.reader.read(d.length);
                break;
              }
              c += a.reader.read();
            }
            return a.createToken("verbatimString", c, g, h);
          }],
          identFirstLetter: /[A-Za-z_]/,
          identAfterFirstLetter: /\w/,
          namedIdentRules: {
            custom: [function() {
              var b = [
                "coroutine",
                "package",
                "string",
                "table",
                "math",
                "io",
                "os",
                "debug"
              ];
              return function(c) {
                var d;
                return a.util.contains(b, c.tokens[c.index].value)
                  ? (d = a.util.getNextNonWsToken(c.tokens, c.index),
                    d && ("operator" !== d.name || ":" !== d.value)) : !1;
              };
            }()],
            follows: [
              [
                { token: "keyword", values: ["function"] },
                { token: "default" }
              ]
            ]
          },
          operators: [
            "+",
            "-",
            "*",
            "/",
            "%",
            "^",
            "#",
            "==",
            "~=",
            "=",
            "<=",
            "<",
            ">=",
            ">",
            ":",
            "...",
            "..",
            "."
          ]
        }
      );
    }(this.Sunlight),
    function(a, b) {
      if (
        a === b || a.registerLanguage === b
      ) {
        throw "Include sunlight.js before including language files";
      }
      a.registerLanguage(
        "mysql",
        {
          caseInsensitive: !0,
          keywords: [
            "accessible",
            "add",
            "all",
            "alter",
            "analyze",
            "and",
            "as",
            "asc",
            "asensitive",
            "before",
            "between",
            "bigint",
            "binary",
            "blob",
            "both",
            "by",
            "call",
            "cascade",
            "case",
            "change",
            "char",
            "character",
            "check",
            "collate",
            "column",
            "condition",
            "constraint",
            "continue",
            "convert",
            "create",
            "cross",
            "current_date",
            "current_time",
            "current_timestamp",
            "current_user",
            "cursor",
            "database",
            "databases",
            "day_hour",
            "day_microsecond",
            "day_minute",
            "day_second",
            "dec",
            "decimal",
            "declare",
            "default",
            "delayed",
            "delete",
            "desc",
            "describe",
            "deterministic",
            "distinct",
            "distinctrow",
            "div",
            "double",
            "drop",
            "dual",
            "each",
            "else",
            "elseif",
            "enclosed",
            "escaped",
            "exists",
            "exit",
            "explain",
            "false",
            "fetch",
            "float",
            "float4",
            "float8",
            "for",
            "force",
            "foreign",
            "from",
            "fulltext",
            "grant",
            "group",
            "having",
            "high_priority",
            "hour_microsecond",
            "hour_minute",
            "hour_second",
            "if",
            "ignore",
            "in",
            "index",
            "infile",
            "inner",
            "inout",
            "insensitive",
            "insert",
            "int",
            "int1",
            "int2",
            "int3",
            "int4",
            "int8",
            "integer",
            "interval",
            "into",
            "is",
            "iterate",
            "join",
            "key",
            "keys",
            "kill",
            "leading",
            "leave",
            "left",
            "like",
            "limit",
            "linear",
            "lines",
            "load",
            "localtime",
            "localtimestamp",
            "lock",
            "long",
            "longblob",
            "longtext",
            "loop",
            "low_priority",
            "master_ssl_verify_server_cert",
            "match",
            "maxvalue",
            "mediumblob",
            "mediumint",
            "mediumtext",
            "middleint",
            "minute_microsecond",
            "minute_second",
            "mod",
            "modifies",
            "natural",
            "not",
            "no_write_to_binlog",
            "null",
            "numeric",
            "on",
            "optimize",
            "option",
            "optionally",
            "or",
            "order",
            "out",
            "outer",
            "outfile",
            "precision",
            "primary",
            "procedure",
            "purge",
            "range",
            "read",
            "reads",
            "read_write",
            "real",
            "references",
            "regexp",
            "release",
            "rename",
            "repeat",
            "replace",
            "require",
            "resignal",
            "restrict",
            "return",
            "revoke",
            "right",
            "rlike",
            "schema",
            "schemas",
            "second_microsecond",
            "select",
            "sensitive",
            "separator",
            "set",
            "show",
            "signal",
            "smallint",
            "spatial",
            "specific",
            "sql",
            "sqlexception",
            "sqlstate",
            "sqlwarning",
            "sql_big_result",
            "sql_calc_found_rows",
            "sql_small_result",
            "ssl",
            "starting",
            "straight_join",
            "table",
            "terminated",
            "then",
            "tinyblob",
            "tinyint",
            "tinytext",
            "to",
            "trailing",
            "trigger",
            "true",
            "undo",
            "union",
            "unique",
            "unlock",
            "unsigned",
            "update",
            "usage",
            "use",
            "using",
            "utc_date",
            "utc_time",
            "utc_timestamp",
            "values",
            "varbinary",
            "varchar",
            "varcharacter",
            "varying",
            "when",
            "where",
            "while",
            "with",
            "write",
            "xor",
            "year_month",
            "zerofill",
            "general",
            "ignore_server_ids",
            "master_heartbeat_period",
            "slow",
            "action",
            "bit",
            "date",
            "enum",
            "no",
            "text",
            "time",
            "timestamp",
            "prepare",
            "execute",
            "deallocate prepare",
            "begin",
            "end",
            "delimiter",
            "repeat",
            "open",
            "close",
            "do",
            "handler",
            "load data infile",
            "start transaction",
            "commit",
            "rollback",
            "flush",
            "with read lock",
            "sounds"
          ],
          customParseRules: [function() {
            var b = a.util.createHashMap(
              [
                "abs",
                "acos",
                "adddate",
                "addtime",
                "aes_decrypt",
                "aes_encrypt",
                "ascii",
                "asin",
                "atan2",
                "atan",
                "atan",
                "avg",
                "benchmark",
                "bin",
                "binary",
                "bit_and",
                "bit_count",
                "bit_length",
                "bit_or",
                "bit_xor",
                "cast",
                "ceil",
                "ceiling",
                "char_length",
                "char",
                "character_length",
                "charset",
                "coalesce",
                "coercibility",
                "collation",
                "compress",
                "concat_ws",
                "concat",
                "connection_id",
                "conv",
                "convert_tz",
                "convert",
                "cos",
                "cot",
                "countdistinct",
                "count",
                "crc32",
                "curdate",
                "current_date",
                "current_time",
                "current_timestamp",
                "current_user",
                "curtime",
                "database",
                "date_add",
                "date_format",
                "date_sub",
                "date",
                "datediff",
                "day",
                "dayname",
                "dayofmonth",
                "dayofweek",
                "dayofyear",
                "decode",
                "default",
                "degrees",
                "des_decrypt",
                "des_encrypt",
                "elt",
                "encode",
                "encrypt",
                "exp",
                "export_set",
                "extract",
                "extractvalue",
                "field",
                "find_in_set",
                "floor",
                "format",
                "found_rows",
                "from_days",
                "from_unixtime",
                "get_format",
                "get_lock",
                "greatest",
                "group_concat",
                "hex",
                "hour",
                "if",
                "ifnull",
                "in",
                "inet_aton",
                "inet_ntoa",
                "insert",
                "instr",
                "interval",
                "is_free_lock",
                "is_used_lock",
                "isnull",
                "last_insert_id",
                "lcase",
                "least",
                "left",
                "length",
                "ln",
                "load_file",
                "localtime",
                "localtimestamp",
                "locate",
                "log10",
                "log2",
                "log",
                "lower",
                "lpad",
                "ltrim",
                "make_set",
                "makedate",
                "master_pos_wait",
                "max",
                "md5",
                "microsecond",
                "mid",
                "min",
                "minute",
                "mod",
                "month",
                "monthname",
                "name_const",
                "now",
                "nullif",
                "oct",
                "octet_length",
                "old_password",
                "ord",
                "password",
                "period_add",
                "period_diff",
                "pi",
                "position",
                "pow",
                "power",
                "procedureanalyse",
                "quarter",
                "quote",
                "radians",
                "rand",
                "release_lock",
                "repeat",
                "replace",
                "reverse",
                "right",
                "rlike",
                "round",
                "row_count",
                "rpad",
                "rtrim",
                "schema",
                "sec_to_time",
                "second",
                "session_user",
                "sha1",
                "sha",
                "sha2",
                "sign",
                "sin",
                "sleep",
                "soundex",
                "space",
                "sqrt",
                "std",
                "stddev_pop",
                "stddev_samp",
                "stddev",
                "str_to_date",
                "strcmp",
                "subdate",
                "substr",
                "substring_index",
                "substring",
                "subtime",
                "sum",
                "sysdate",
                "system_user",
                "tan",
                "time_format",
                "time_to_sec",
                "time",
                "timediff",
                "timestamp",
                "timestampadd",
                "timestampdiff",
                "to_days",
                "to_seconds",
                "trim",
                "truncate",
                "ucase",
                "uncompress",
                "uncompressed_length",
                "unhex",
                "unix_timestamp",
                "updatexml",
                "upper",
                "user",
                "utc_date",
                "utc_time",
                "utc_timestamp",
                "uuid_short",
                "uuid",
                "values",
                "var_pop",
                "var_samp",
                "variance",
                "version",
                "week",
                "weekday",
                "weekofyear",
                "year",
                "yearweek"
              ],
              "\\b",
              !0
            );
            return function(c) {
              var d, e, f = a.util.matchWord(c, b, "function", !0);
              if (null === f) return null;
              for (
                d = f.value.length,
                  e = c.reader.peek(d);
                e.length === d && e !== c.reader.EOF;
              ) {
                if (!/\s$/.test(e)) {
                  if (

                    "(" === e.charAt(e.length - 1)
                  ) {
                    return c.reader.read(f.value.length - 1), f;
                  }
                  break;
                }
                e = c.reader.peek(++d);
              }
              return null;
            };
          }()],
          scopes: {
            string: [
              ['"', '"', a.util.escapeSequences.concat(['\\"'])],
              ["'", "'", ["\\'", "\\\\"]]
            ],
            comment: [
              ["--", "\n", null, !0],
              ["/*", "*/"],
              ["#", "\n", null, !0]
            ],
            quotedIdent: [["`", "`", ["`\\`", "\\\\"]]]
          },
          identFirstLetter: /[A-Za-z_]/,
          identAfterFirstLetter: /\w/,
          namedIdentRules: {
            follows: [
              [
                { token: "keyword", values: ["from", "join"] },
                { token: "default" }
              ],
              [
                { token: "keyword", values: ["from", "join"] },
                { token: "default" },
                { token: "ident" },
                a.util.whitespace,
                { token: "operator", values: ["."] },
                a.util.whitespace
              ]
            ]
          },
          operators: [
            "+",
            "-",
            "*",
            "/",
            "%",
            "&&",
            "||",
            "|",
            "&",
            "^",
            ">>",
            "<<",
            "<>",
            "<=>",
            "<=",
            "<",
            ">=",
            ">",
            "==",
            "!=",
            "!",
            "~",
            ":=",
            "=",
            "."
          ]
        }
      );
    }(this.Sunlight),
    function(a, b) {
      if (
        a === b || a.registerLanguage === b
      ) {
        throw "Include sunlight.js before including language files";
      }
      a.registerLanguage(
        "nginx",
        {
          scopes: {
            string: [
              ['"', '"', a.util.escapeSequences.concat(['\\"'])],
              ["'", "'", ["\\'", "\\\\"]]
            ],
            comment: [["#", "\n", null, !0]],
            variable: [["$", { length: 1, regex: /[\W]/ }, null, !0]],
            label: [["@", { length: 1, regex: /[\W]/ }, null, !0]],
            ssiCommand: [["<!--#", "-->"]]
          },
          customParseRules: [function() {
            var b = a.util.createHashMap(
              [
                "server",
                "location",
                "upstream",
                "http",
                "mail",
                "types",
                "map",
                "split-clients",
                "geo",
                "limit_except"
              ],
              "\\b",
              !1
            );
            return function(c) {
              var d, e, f = a.util.matchWord(c, b, "context", !0);
              if (!f) return null;
              for (
                e = f.value.length;
                (d = c.reader.peek(e++)) !== c.reader.EOF;
              ) {
                if (/\{$/.test(d)) return c.reader.read(f.value.length - 1), f;
                if (/;$/.test(d)) break;
              }
              return null;
            };
          }(), function(b) {
            var c, d, e, f, g = b.reader.current(), h = !1, i = g,
              j = b.reader.getLine(), k = b.reader.getColumn();
            if (/[\s\n]/.test(g)) return null;
            for (d = b.count() - 1; (c = b.token(d--)) !== b.reader.EOF;) {
              if (
                "regexLiteral" === c.name || "punctuation" === c.name &&
                ("{" === c.value || "}" === c.value || ";" === c.value)
              ) {
                return null;
              }
              if (
                "operator" === c.name &&
                a.util.contains(["^~", "~", "~*"], c.value)
              ) {
                if (
                  f = a.util.getPreviousWhile(
                    b.getAllTokens(),
                    d,
                    function(a) {
                      return "default" === a.name || "comment" === a.name;
                    }
                  ),
                    "context" === f.name && "location" === f.value
                ) {
                  h = !0;
                  break;
                }
              } else if ("keyword" === c.name && "server_name" === c.value) {
                if ("~" !== g) return null;
                h = !0;
                break;
              }
            }
            if (!h) return null;
            for (
              ;
              (e = b.reader.peek()) !== b.reader.EOF && !/[\s;\n]/.test(e);
            ) {
              i += b.reader.read();
            }
            return b.createToken("regexLiteral", i, j, k);
          }, function() {
            var b = a.util.createHashMap(
              [
                "daemon",
                "env",
                "debug_points",
                "error_log",
                "include",
                "lock_file",
                "master_process",
                "pid",
                "ssl_engine",
                "timer_resolution",
                "user",
                "worker_cpu_affinity",
                "worker_priority",
                "worker_processes",
                "worker_rlimit_core",
                "worker_rlimit_nofile",
                "worker_rlimit_sigpending",
                "working_directory",
                "accept_mutext_delay",
                "accept_mutex",
                "debug_connection",
                "devpoll_changes",
                "devpoll_events",
                "kqueue_changes",
                "kqueue_events",
                "epoll_events",
                "multi_accept",
                "rtsig_signo",
                "rtsig_overflow_events",
                "rtsig_overflow_text",
                "rtsig_overflow_threshold",
                "use",
                "worker_connections",
                "aio",
                "alias",
                "chunked_transfer_encoding",
                "client_body_in_file_only",
                "client_body_in_single_buffer",
                "client_body_buffer_size",
                "client_body_temp_path",
                "client_body_timeout",
                "client_header_buffer_size",
                "client_header_timeout",
                "client_max_body_size",
                "default_type",
                "directio",
                "error_page",
                "if_modified_since",
                "internal",
                "keepalive_timeout",
                "keepalive_requests",
                "large_client_header_buffers",
                "limit_except",
                "limit_rate_after",
                "limit_rate",
                "listen",
                "location",
                "log_not_found",
                "log_subrequest",
                "msie_padding",
                "msie_refresh",
                "open_file_cache_errors",
                "open_file_cache_min_uses",
                "open_file_cache_valid",
                "open_file_cache",
                "optimize_server_names",
                "port_in_redirect",
                "post_action",
                "recursive_error_pages",
                "resolver_timeout",
                "resolver",
                "root",
                "satisfy_any",
                "satisfy",
                "send_timeout",
                "sendfile",
                "server_name",
                "server_name_in_redirect",
                "server_names_hash_max_size",
                "server_names_hash_bucket_size",
                "server_tokens",
                "server",
                "tcp_nodelay",
                "tcp_nopush",
                "try_files",
                "types",
                "underscores_in_headers",
                "allow",
                "deny",
                "auth_basic_user_file",
                "auth_basic",
                "autoindex_exact_size",
                "autoindex_localtime",
                "autoindex",
                "ancient_browser_value",
                "ancient_browser",
                "modern_browser_value",
                "modern_browser",
                "charset_map",
                "override_charset",
                "source_charset",
                "charset",
                "empty_gif",
                "fastcgi_bind",
                "fastcgi_buffer_size",
                "fastcgi_buffers",
                "fastcgi_cache_key",
                "fastcgi_cache_path",
                "fastcgi_cache_methods",
                "fastcgi_cache_min_uses",
                "fastcgi_cache_use_stale",
                "fastcgi_cache_valid",
                "fastcgi_cache",
                "fastcgi_connect_timeout",
                "fastcgi_index",
                "fastcgi_hide_header",
                "fastcgi_ignore_client_abort",
                "fastcgi_ignore_headers",
                "fastcgi_intercept_errors",
                "fastcgi_max_temp_file_size",
                "fastcgi_no_cache",
                "fastcgi_next_upstream",
                "fastcgi_param",
                "fastcgi_pass_header",
                "fastcgi_pass",
                "fastcgi_read_timeout",
                "fastcgi_redirect_errors",
                "fastcgi_send_timeout",
                "fastcgi_split_path_info",
                "fastcgi_store_access",
                "fastcgi_store",
                "fastcgi_temp_path",
                "geo",
                "gzip_buffers",
                "gzip_comp_level",
                "gzip_disable",
                "gzip_http_version",
                "gzip_min_length",
                "gzip_proxied",
                "gzip_types",
                "gzip_vary",
                "gzip",
                "add_header",
                "expires",
                "index",
                "limit_req_log_level",
                "limit_req_zone",
                "limit_req",
                "limit_zone",
                "limit_conn_log_level",
                "limit_conn",
                "access_log",
                "log_format",
                "open_log_file_cache",
                "map_hash_max_size",
                "map_hash_bucket_size",
                "map",
                "memcached_pass",
                "memcached_connect_timeout",
                "memcached_read_timeout",
                "memcached_send_timeout",
                "memcached_buffer_size",
                "memcached_next_upstream",
                "proxy_bind",
                "proxy_buffer_size",
                "proxy_buffering",
                "proxy_buffers",
                "proxy_busy_buffers_size",
                "proxy_cache_bypass",
                "proxy_cache_key",
                "proxy_cache_methods",
                "proxy_cache_min_uses",
                "proxy_cache_path",
                "proxy_cache_use_stale",
                "proxy_cache_valid",
                "proxy_cache",
                "proxy_connect_timeout",
                "proxy_headers_hash_bucket_size",
                "proxy_headers_hash_max_size",
                "proxy_hide_header",
                "proxy_ignore_client_abort",
                "proxy_ignore_headers",
                "proxy_intercept_errors",
                "proxy_max_temp_file_size",
                "proxy_method",
                "proxy_next_upstream",
                "proxy_no_cache",
                "proxy_pass_header",
                "proxy_pass_request_body",
                "proxy_pass_request_headers",
                "proxy_pass",
                "proxy_read_timeout",
                "proxy_redirect_errors",
                "proxy_redirect",
                "proxy_send_lowat",
                "proxy_send_timeout",
                "proxy_set_body",
                "proxy_set_header",
                "proxy_ssl_session_reuse",
                "proxy_store_access",
                "proxy_store",
                "proxy_temp_file_write_size",
                "proxy_temp_path",
                "proxy_upstream_fail_timeout",
                "proxy_upstream_max_fails",
                "valid_referers",
                "break",
                "if",
                "return",
                "rewrite",
                "set",
                "uninitialized_variable_warn",
                "scgi_bind",
                "scgi_buffer_size",
                "scgi_buffers",
                "scgi_busy_buffers_size",
                "scgi_cache_bypass",
                "scgi_cache_key",
                "scgi_cache_methods",
                "scgi_cache_min_uses",
                "scgi_cache_path",
                "scgi_cache_use_stale",
                "scgi_cache_valid",
                "scgi_cache",
                "scgi_connect_timeout",
                "scgi_hide_header",
                "scgi_ignore_client_abort",
                "scgi_ignore_headers",
                "scgi_intercept_errors",
                "scgi_max_temp_file_size",
                "scgi_next_upstream",
                "scgi_no_cache",
                "scgi_param",
                "scgi_pass_header",
                "scgi_pass_request_body",
                "scgi_pass_request_headers",
                "scgi_pass",
                "scgi_read_timeout",
                "scgi_send_timeout",
                "scgi_store_access",
                "scgi_store",
                "scgi_temp_file_write_size",
                "scgi_temp_path",
                "split-clients",
                "ssi",
                "ssi_silent_errors",
                "ssi_types",
                "ssi_value_length",
                "ip_hash",
                "server",
                "upstream",
                "userid_domain",
                "userid_expires",
                "userid_name",
                "userid_p3p",
                "userid_path",
                "userid_service",
                "userid",
                "uwsgi_bind",
                "uwsgi_buffer_size",
                "uwsgi_buffers",
                "uwsgi_busy_buffers_size",
                "uwsgi_cache_bypass",
                "uwsgi_cache_key",
                "uwsgi_cache_methods",
                "uwsgi_cache_min_uses",
                "uwsgi_cache_path",
                "uwsgi_cache_use_stale",
                "uwsgi_cache_valid",
                "uwsgi_cache",
                "uwsgi_connect_timeout",
                "uwsgi_hide_header",
                "uwsgi_ignore_client_abort",
                "uwsgi_ignore_headers",
                "uwsgi_intercept_errors",
                "uwsgi_max_temp_file_size",
                "uwsgi_modifier1",
                "uwsgi_modifier2",
                "uwsgi_next_upstream",
                "uwsgi_no_cache",
                "uwsgi_param",
                "uwsgi_pass_header",
                "uwsgi_pass_request_body",
                "uwsgi_pass_request_headers",
                "uwsgi_pass",
                "uwsgi_read_timeout",
                "uwsgi_send_timeout",
                "uwsgi_store_access",
                "uwsgi_store",
                "uwsgi_string",
                "uwsgi_temp_file_write_size",
                "uwsgi_temp_path",
                "add_before_body",
                "add_after_body",
                "addition_types",
                "perl_modules",
                "perl_require",
                "perl_set",
                "perl",
                "flv",
                "geoip_country",
                "geoip_city",
                "google_perftools_profiles",
                "gzip_static",
                "gzip_http_version",
                "gzip_proxied",
                "image_filter_buffer",
                "image_filter_jpeg_quality",
                "image_filter_transparency",
                "image_filter",
                "random_index",
                "set_real_ip_from",
                "real_ip_header",
                "secure_link_secret",
                "secure_link_md5",
                "secure_link",
                "ssl_certificate_key",
                "ssl_client_certificate",
                "ssl_certificate",
                "ssl_dhparam",
                "ssl_ciphers",
                "ssl_crl",
                "ssl_prefer_server_ciphers",
                "ssl_protocols",
                "ssl_verify_client",
                "ssl_verify_depth",
                "ssl_session_cache",
                "ssl_session_timeout",
                "ssl_engine",
                "ssl",
                "stub_status",
                "sub_filter_once",
                "sub_filter_types",
                "sub_filter",
                "dav_access",
                "dav_methods",
                "create_full_put_path",
                "xml_entities",
                "xslt_stylesheet",
                "xslt_types",
                "auth",
                "imap_capabilities",
                "imap_client_buffer",
                "listen",
                "pop3_auth",
                "pop3_capabilities",
                "protocol",
                "server",
                "server_name",
                "smtp_auth",
                "smtp_capabilities",
                "so_keepalive",
                "timeout",
                "auth_http",
                "auth_http_header",
                "auth_http_timeout",
                "proxy_buffer",
                "proxy_pass_error_message",
                "proxy_timeout",
                "proxy",
                "xclient",
                "starttls",
                "echo_duplicate",
                "echo_flush",
                "echo_sleep",
                "echo_blocking_sleep",
                "echo_reset_timer",
                "echo_read_request_body",
                "echo_location_async",
                "echo_location",
                "echo_subrequest_async",
                "echo_subrequest",
                "echo_foreach_split",
                "echo_end",
                "echo_request_body",
                "echo_exec",
                "echo_before_body",
                "echo_after_body",
                "echo",
                "default",
                "output_buffers"
              ],
              "[\\s;]",
              !1
            );
            return function(c) {
              var d, e = a.util.matchWord(c, b, "keyword", !0);
              return e
                ? (d = a.util.getPreviousWhile(
                  c.getAllTokens(),
                  c.count(),
                  function(a) {
                    return "default" === a.name || "comment" === a.name;
                  }
                ),
                  !d || "punctuation" === d.name &&
                    a.util.contains(["{", "}", ";"], d.value)
                    ? (c.reader.read(e.value.length - 1), e) : null)
                : null;
            };
          }()],
          identFirstLetter: /[A-Za-z_-]/,
          identAfterFirstLetter: /[\w-]/,
          operators: ["~*", "~", "^~", "=", "::", ":"]
        }
      );
    }(this.Sunlight),
    function(a, b) {
      if (
        a === b || a.registerLanguage === b
      ) {
        throw "Include sunlight.js before including language files";
      }
      a.registerLanguage(
        "objective-c",
        {
          keywords: [
            "and",
            "default",
            "noexcept",
            "template",
            "and_eq",
            "delete",
            "not",
            "this",
            "alignof",
            "double",
            "not_eq",
            "thread_local",
            "asm",
            "dynamic_cast",
            "nullptr",
            "throw",
            "auto",
            "else",
            "operator",
            "true",
            "bitand",
            "enum",
            "or",
            "try",
            "bitor",
            "explicittodo",
            "or_eq",
            "typedef",
            "bool",
            "export",
            "private",
            "typeid",
            "break",
            "externtodo",
            "protected",
            "typename",
            "case",
            "false",
            "public",
            "union",
            "catch",
            "float",
            "register",
            "using",
            "char",
            "for",
            "reinterpret_cast",
            "unsigned",
            "char16_t",
            "friend",
            "return",
            "void",
            "char32_t",
            "goto",
            "short",
            "wchar_t",
            "if",
            "signed",
            "virtual",
            "compl",
            "inline",
            "sizeof",
            "volatile",
            "const",
            "int",
            "static",
            "while",
            "constexpr",
            "long",
            "static_assert",
            "xor",
            "const_cast",
            "mutable",
            "static_cast",
            "xor_eq",
            "continue",
            "namespace",
            "struct",
            "decltype",
            "new",
            "switch",
            "id",
            "self",
            "nil",
            "super",
            "in",
            "out",
            "inout",
            "bycopy",
            "byval",
            "oneway",
            "SEL",
            "BOOL",
            "YES",
            "NO",
            "@interface",
            "@implementation",
            "@end",
            "@class",
            "@private",
            "@public",
            "@package",
            "@protected",
            "@protocol",
            "@optional",
            "@required",
            "@property",
            "@synthesize",
            "@dynamic",
            "@selector",
            "@try",
            "@catch",
            "@finally",
            "@throw",
            "@synchronized",
            "@encode",
            "__attribute__",
            "__weak",
            "__strong"
          ],
          customTokens: {
            constant: {
              values: [
                "EXIT_SUCCESS",
                "EXIT_FAILURE",
                "SIG_DFL",
                "SIG_IGN",
                "SIG_ERR",
                "SIGABRT",
                "SIGFPE",
                "SIGILL",
                "SIGINT",
                "SIGSEGV",
                "SIGTERM"
              ],
              boundary: "\\b"
            }
          },
          scopes: {
            string: [
              ['"', '"', a.util.escapeSequences.concat(['\\"'])],
              ['@"', '"', ["\\\\", '\\"']]
            ],
            "char": [["'", "'", ["\\'", "\\\\"]]],
            comment: [["//", "\n", null, !0], ["/*", "*/"]],
            preprocessorDirective: [["#", "\n", null, !0]]
          },
          customParseRules: [function(b) {
            var c, d, e, f, g, h, i, j, k, l;
            if (
              !b.language.identFirstLetter.test(
                b.reader.current()
              )
            ) {
              return null;
            }
            for (
              d = 0;
              (c = b.reader.peek(++d)) && c.length === d &&
              b.language.identAfterFirstLetter.test(a.util.last(c));
            );
            for (
              e = b.reader.current() + c.substring(0, c.length - 1),
                d -= 1,
                f = !1;
              (c = b.reader.peek(++d)) && c.length === d;
            ) {
              if (!/\s$/.test(c)) {
                if (g = /([\]:])$/.exec(c), null === g) return null;
                f = ":" === g[1] && !/::$/.test(b.reader.peek(d + 1));
                break;
              }
            }
            for (h = 0, i = 0, k = b.count(), l = 1; j = b.token(--k);) {
              if (l > 1 && !f) return null;
              if ("punctuation" === j.name) {
                switch (j.value) {
                  case ";":
                  case "{":
                  case "}":
                    return null;
                  case "(":
                    h--;
                    break;
                  case ")":
                    h++;
                    break;
                  case "[":
                    if (0 === i && 0 === h) {
                      return l >= 1
                        ? (j = b.createToken(
                          f && l > 1 ? "messageArgumentName"
                            : "messageDestination",
                          e,
                          b.reader.getLine(),
                          b.reader.getColumn()
                        ),
                          b.reader.read(e.length - 1),
                          j)
                        : null;
                    }
                    i--;
                    break;
                  case "]":
                    i++;
                }
              }
              0 === i && 0 === h && "default" === j.name && l++;
            }
            return null;
          }, function() {
            var b = a.util.createHashMap(
              [
                "getter",
                "setter",
                "readonly",
                "readwrite",
                "assign",
                "retain",
                "copy",
                "nonatomic"
              ],
              "\\b"
            );
            return function(c) {
              var d, e, f = a.util.matchWord(c, b, "keyword", !0);
              if (!f) return null;
              for (e = c.count(); d = c.token(--e);) {
                if ("punctuation" === d.name) {
                  if ("(" === d.value) {
                    return d = a.util.getPreviousNonWsToken(
                      c.getAllTokens(),
                      e
                    ),
                      d && "keyword" === d.name && "@property" === d.value
                        ? (f.line = c.reader.getLine(),
                          f.column = c.reader.getColumn(),
                          c.reader.read(f.value.length - 1),
                          f)
                        : null;
                  }
                  if (";" === d.value)return null;
                }
              }
              return null;
            };
          }()],
          identFirstLetter: /[A-Za-z_]/,
          identAfterFirstLetter: /\w/,
          namedIdentRules: {
            custom: [function(b) {
              var c = /^(NS|CG).+$/,
                d = a.util.getNextNonWsToken(b.tokens, b.index);
              return c.test(b.tokens[b.index].value) &&
                (!d || "punctuation" !== d.name || "(" !== d.value);
            }, function(b) {
              var c = a.util.getNextNonWsToken(b.tokens, b.index);
              return c && "messageDestination" === c.name &&
                ("class" === c.value || "alloc" === c.value);
            }, function(b) {
              var c, d, e;
              if (
                !a.util.createProceduralRule(
                  b.index + 1,
                  1,
                  [{ token: "default" }, { token: "ident" }]
                )(b.tokens)
              ) {
                return !1;
              }
              if (
                a.util.createProceduralRule(
                  b.index + 1,
                  1,
                  [
                    { token: "default" },
                    { token: "ident" },
                    a.util.whitespace,
                    { token: "operator", value: ":" }
                  ]
                )(b.tokens)
              ) {
                return !1;
              }
              for (d = b.index, e = 0; c = b.tokens[--d];) {
                if (
                  "punctuation" === c.name
                ) {
                  switch (c.value) {
                    case "[":
                      return !1;
                    case "{":
                    case ",":
                      return !0;
                    case "(":
                      if (0 === e) return !0;
                      e++;
                      break;
                    case ")":
                      e--;
                  }
                }
              }
              return !0;
            }, function() {
              var b = [
                [
                  a.util.whitespace,
                  { token: "operator", values: ["*", "**"] },
                  a.util.whitespace,
                  { token: "ident" },
                  a.util.whitespace,
                  { token: "punctuation", values: [";"] }
                ],
                [
                  a.util.whitespace,
                  { token: "operator", values: ["&", "*", "**"] },
                  a.util.whitespace,
                  { token: "ident" }
                ]
              ];
              return function(c) {
                var d, e, f, g, h;
                if (
                  d = function(d) {
                    var e;
                    for (e = 0; e < b.length; e++) {
                      if (
                        a.util.createProceduralRule(
                          c.index + 1,
                          1,
                          b[e],
                          !1
                        )(d)
                      ) {
                        return !0;
                      }
                    }
                    return !1;
                  }(c.tokens),
                    !d
                ) {
                  return !1;
                }
                for (e = !1, f = !1, h = c.index; g = c.tokens[--h];) {
                  if (
                    "punctuation" === g.name &&
                    (";" === g.value || "{" === g.value)
                  ) {
                    return e || !f;
                  }
                  "operator" === g.name && "=" === g.value
                    ? f = !0
                    : "keyword" === g.name && "@property" === g.value &&
                      (e = !0);
                }
                return !1;
              };
            }(), function() {
              var b = [
                [
                  a.util.whitespace,
                  { token: "punctuation", values: [")"] },
                  a.util.whitespace,
                  { token: "ident" }
                ],
                [
                  a.util.whitespace,
                  { token: "punctuation", values: [")"] },
                  a.util.whitespace,
                  { token: "punctuation", values: ["["] }
                ],
                [
                  a.util.whitespace,
                  { token: "operator", values: ["*", "**"] },
                  a.util.whitespace,
                  { token: "punctuation", values: [")"] },
                  a.util.whitespace,
                  { token: "operator", values: ["&"], optional: !0 },
                  { token: "ident" }
                ],
                [
                  a.util.whitespace,
                  { token: "operator", values: ["*", "**"] },
                  a.util.whitespace,
                  { token: "punctuation", values: [")"] },
                  a.util.whitespace,
                  { token: "operator", values: ["&"], optional: !0 },
                  { token: "punctuation", values: ["["] }
                ]
              ];
              return function(c) {
                var d, e, f, g;
                if (
                  g = function(d) {
                    var e;
                    for (e = 0; e < b.length; e++) {
                      if (
                        a.util.createProceduralRule(
                          c.index + 1,
                          1,
                          b[e],
                          !1
                        )(d)
                      ) {
                        return !0;
                      }
                    }
                    return !1;
                  }(c.tokens),
                    !g
                ) {
                  return !1;
                }
                for (e = c.index; d = c.tokens[--e];) {
                  if (
                    "punctuation" === d.name && "(" === d.value
                  ) {
                    if (f = a.util.getPreviousNonWsToken(c.tokens, e)) {
                      if ("ident" === f.name) return !1;
                      if (
                        "keyword" === f.name &&
                        a.util.contains(["if", "while"], f.value)
                      ) {
                        return !1;
                      }
                    }
                    return !0;
                  }
                }
                return !1;
              };
            }(), function(c) {
              var d, e, f, g, h = c.index;
              if (
                g = a.util.getPreviousNonWsToken(c.tokens, c.index),
                  !g || "keyword" === g.name
              ) {
                return !1;
              }
              for (e = !1, f = [0, 0]; (d = c.tokens[--h]) !== b;) {
                if ("operator" === d.name) {
                  switch (d.value) {
                    case "<":
                    case "<<":
                      f[0] += d.value.length;
                      continue;
                    case ">":
                    case ">>":
                      if (0 === f[0]) return !1;
                      f[1] += d.value.length;
                      continue;
                    case ".":
                    case "::":
                    case "*":
                      continue;
                  }
                }
                if (
                  "default" !== d.name &&
                  ("punctuation" !== d.name || "," !== d.value)
                ) {
                  if (
                    !("ident" === d.name || "keyword" === d.name &&
                      a.util.contains(["id", "static_cast"], d.value))
                  ) {
                    break;
                  }
                  e = !0;
                }
              }
              if (!e || 0 === f[0]) return !1;
              for (h = c.index; (d = c.tokens[++h]) !== b;) {
                if (
                  "operator" === d.name &&
                  (">" === d.value || ">>" === d.value)
                ) {
                  return !0;
                }
                if (
                  !("operator" === d.name && a.util.contains(
                    ["<", "<<", ">", ">>", "::", "*"],
                    d.value
                  ) || "punctuation" === d.name && "," === d.value ||
                    "ident" === d.name || "default" === d.name)
                ) {
                  return !1;
                }
              }
              return !1;
            }, function(c) {
              var d, e, f = a.util.getPreviousNonWsToken(c.tokens, c.index);
              if (
                f !== b &&
                ("ident" === f.name || "operator" === f.name &&
                  "." === f.value)
              ) {
                return !1;
              }
              if (
                f = a.util.getNextNonWsToken(c.tokens, c.index),
                  !f || "operator" !== f.name || "<" !== f.value
              ) {
                return !1;
              }
              for (d = c.index, e = [0, 0]; (f = c.tokens[++d]) !== b;) {
                if (
                  "operator" !== f.name
                ) {
                  if (
                    "default" !== f.name && "ident" !== f.name &&
                    ("punctuation" !== f.name || "," !== f.value)
                  ) {
                    return !1;
                  }
                } else {
                  switch (f.value) {
                    case "<":
                      e[0]++;
                      break;
                    case "<<":
                      e[0] += 2;
                      break;
                    case ">":
                      e[1]++;
                      break;
                    case ">>":
                      e[1] += 2;
                      break;
                    default:
                      return !1;
                  }
                  if (e[0] === e[1]) break;
                }
              }
              return e[0] !== e[1] ? !1 : (f = c.tokens[++d],
                !f || "default" !== f.name && "ident" !== f.name
                  ? !1
                  : "default" !== f.name ||
                    (f = c.tokens[++d], f && "ident" === f.name) ? !0 : !1);
            }],
            follows: [
              [
                {
                  token: "keyword",
                  values: ["@interface", "@protocol", "@implementation"]
                },
                { token: "default" }
              ]
            ],
            precedes: [
              [{ token: "operator", values: ["::"] }],
              [
                a.util.whitespace,
                { token: "operator", values: ["*", "**"] },
                { token: "default" },
                { token: "ident" },
                a.util.whitespace,
                { token: "operator", values: ["=", ","] }
              ],
              [
                a.util.whitespace,
                { token: "operator", values: ["*", "**"] },
                a.util.whitespace,
                { token: "operator", values: ["&"] },
                a.util.whitespace,
                { token: "ident" },
                a.util.whitespace,
                { token: "operator", values: ["=", ","] }
              ]
            ]
          },
          operators: [
            "==",
            "=",
            "+=",
            "++",
            "+",
            "->*",
            "->",
            "-=",
            "--",
            "-",
            "**",
            "*=",
            "*",
            "/=",
            "/",
            "%=",
            "%",
            "!=",
            "!",
            ">>=",
            ">>",
            ">=",
            ">",
            "<<=",
            "<<",
            "<=",
            "<",
            "&=",
            "&&",
            "&",
            "|=",
            "||",
            "|",
            "~",
            "^=",
            "^",
            ".*",
            ".",
            "?",
            "::",
            ":",
            ","
          ]
        }
      );
    }(this.Sunlight),
    function(a, b) {
      function c(c) {
        var d = c.token(c.count() - 1), e = null;
        return "" !== c.defaultData.text &&
          (e = c.createToken("default", c.defaultData.text)),
          e || (e = d),
          e === b ? !0 : a.util.contains(
            ["keyword", "ident", "number", "variable", "specialVariable"],
            d.name
          )
            ? !1
            : "punctuation" !== d.name ||
              a.util.contains(["(", "{", "[", ",", ";"], d.value) ? !0 : !1;
      }
      function d(a) {
        for (
          var b, c = "";
          (b = a.reader.peek()) !== a.reader.EOF && /\s/.test(b);
        ) {
          c += a.reader.read();
        }
        return c;
      }
      function e(b, c, d) {
        var e, f, g = c, h = c, i = a.util.contains(["[", "(", "{"], g), j = g,
          k = 1;
        switch (c) {
          case "[":
            h = "]";
            break;
          case "(":
            h = ")";
            break;
          case "{":
            h = "}";
        }
        for (; b.reader.peek() !== b.reader.EOF;) {
          if (
            e = b.reader.peek(2),
              e !== "\\" + h && "\\\\" !== e
          ) {
            if (f = b.reader.read(), f === g && i) k++;
            else if (f === h && --k <= 0) {
              (i || d) && (j += f);
              break;
            }
            j += f;
          } else j += b.reader.read(2);
        }
        return j;
      }
      function f(a, b) {
        for (var c = a.reader.peek(b); c.length === b && /\s$/.test(c);) {
          c = a.reader.peek(++b);
        }
        return /[\w]$/.test(c) ? !1 : (a.reader.read(b),
          {
            delimiter: a.reader.current(),
            value: c.substring(0, c.length - 1)
          });
      }
      if (a === b || a.registerLanguage === b) {
        throw "Include sunlight.js before including language files";
      }
      a.registerLanguage(
        "perl",
        {
          keywords: [
            "caller",
            "die",
            "dump",
            "eval",
            "exit",
            "goto",
            "last",
            "next",
            "redo",
            "return",
            "sub",
            "wantarray",
            "break",
            "continue",
            "given",
            "when",
            "default",
            "import",
            "local",
            "my",
            "our",
            "state",
            "do",
            "no",
            "package",
            "require",
            "use",
            "bless",
            "dbmclose",
            "dbmopen",
            "ref",
            "tied",
            "untie",
            "tie",
            "if",
            "elsif",
            "else",
            "unless",
            "while",
            "foreach",
            "for",
            "until",
            "not",
            "or",
            "and"
          ],
          customTokens: {
            "function": {
              values: [
                "chomp",
                "chop",
                "chr",
                "crypt",
                "hex",
                "index",
                "length",
                "oct",
                "ord",
                "rindex",
                "sprintf",
                "substr",
                "pos",
                "quotemeta",
                "split",
                "study",
                "abs",
                "atan2",
                "cos",
                "exp",
                "hex",
                "int",
                "log",
                "oct",
                "rand",
                "sin",
                "sqrt",
                "srand",
                "pop",
                "push",
                "shift",
                "splice",
                "unshift",
                "grep",
                "join",
                "map",
                "reverse",
                "sort",
                "delete",
                "each",
                "exists",
                "keys",
                "values",
                "binmode",
                "closedir",
                "close",
                "eof",
                "fileno",
                "flock",
                "format",
                "getc",
                "print",
                "printf",
                "readdir",
                "rewinddir",
                "say",
                "seekdir",
                "seek",
                "select",
                "syscall",
                "sysread",
                "sysseek",
                "tell",
                "telldir",
                "truncate",
                "warn",
                "write",
                "pack",
                "syswrite",
                "unpack",
                "vec",
                "chdir",
                "chmod",
                "chown",
                "chroot",
                "fcntl",
                "glob",
                "ioctl",
                "link",
                "lstat",
                "mkdir",
                "open",
                "opendir",
                "readlink",
                "rename",
                "rmdir",
                "stat",
                "symlink",
                "sysopen",
                "umask",
                "unlink",
                "utime",
                "defined",
                "dump",
                "eval",
                "formline",
                "reset",
                "scalar",
                "undef",
                "alarm",
                "exec",
                "fork",
                "getpgrp",
                "getppid",
                "getpriority",
                "kill",
                "pipe",
                "setpgrp",
                "setpriority",
                "sleep",
                "system",
                "wait",
                "waitpid",
                "accept",
                "bind",
                "connect",
                "getpeername",
                "getsockname",
                "getsockopt",
                "listen",
                "recv",
                "send",
                "setsockopt",
                "shutdown",
                "socket",
                "socketpair",
                "msgctl",
                "msgget",
                "msgrcv",
                "msgsnd",
                "semctl",
                "semget",
                "semop",
                "shmctl",
                "shmget",
                "shmread",
                "shmwrite",
                "endgrent",
                "endhostent",
                "endnetent",
                "endpwent",
                "getgrent",
                "getgrgid",
                "getgrnam",
                "getlogin",
                "getpwent",
                "getpwnam",
                "getpwuid",
                "setgrent",
                "setpwent",
                "endprotoent",
                "endservent",
                "gethostbyaddr",
                "gethostbyname",
                "gethostent",
                "getnetbyaddr",
                "getnetbyname",
                "getnetent",
                "getprotobyname",
                "getprotobynumber",
                "getprotoent",
                "getservbyname",
                "getservbyport",
                "getservent",
                "sethostent",
                "setnetent",
                "setprotoent",
                "setservent",
                "gmtime",
                "localtime",
                "times",
                "time",
                "lcfirst",
                "lc",
                "lock",
                "prototype",
                "readline",
                "readpipe",
                "read",
                "ucfirst",
                "uc"
              ],
              boundary: "\\b"
            },
            specialVariable: {
              values: [
                "$.",
                "$<",
                "$_",
                "$/",
                "$!",
                "$ARG",
                "$&",
                "$a",
                "$b",
                "$MATCH",
                "$PREMATCH",
                "${^MATCH}",
                "${^PREMATCH}",
                "$POSTMATCH",
                "$'",
                "$LAST_PAREN_MATCH",
                "$+",
                "$LAST_SUBMATCH_RESULT",
                "$^N",
                "$INPUT_LINE_NUMBER",
                "$NR",
                "$.",
                "$INPUT_RECORD_SEPARATOR",
                "$RS",
                "$OUTPUT_AUTOFLUSH",
                "$OFS",
                "$,",
                "@LAST_MATCH_END",
                "@+",
                "%LAST_PAREN_MATCH",
                "%+",
                "$OUTPUT_RECORD_SEPARATOR",
                "$ORS",
                "$LIST_SEPARATOR",
                '$"',
                "$SUBSCRIPT_SEPARATOR",
                "$SUBSEP",
                "$;",
                "$FORMAT_PAGE_NUMBER",
                "$%",
                "$FORMAT_LINES_PER_PAGE",
                "$=",
                "$FORMAT_LINES_LEFT",
                "$-",
                "@LAST_MATCH_START",
                "@-",
                "%-",
                "$FORMAT_NAME",
                "$~",
                "$FORMAT_TOP_NAME",
                "$FORMAT_LINE_BREAK_CHARACTERS",
                "$:",
                "$FORMAT_FORMFEED",
                "$^L",
                "$ACCUMULATOR",
                "$^A",
                "$CHILD_ERROR",
                "$?",
                "${^CHILD_ERROR_NATIVE}",
                "${^ENCODING}",
                "$OS_ERROR",
                "$ERRNO",
                "$!",
                "%OS_ERROR",
                "%ERRNO",
                "%!",
                "$EXTENDED_OS_ERROR",
                "$^E",
                "$EVAL_ERROR",
                "$@",
                "$PROCESS_ID",
                "$PID",
                "$$",
                "$REAL_USER_ID",
                "$UID",
                "$<",
                "$EFFECTIVE_USER_ID",
                "$EUID",
                "$>",
                "$REAL_GROUP_ID",
                "$GID",
                "$(",
                "$EFFECTIVE_GROUP_ID",
                "$EGID",
                "$)",
                "$PROGRAM_NAME",
                "$0",
                "$[",
                "$]",
                "$COMPILING",
                "$^C",
                "$DEBUGGING",
                "$^D",
                "${^RE_DEBUG_FLAGS}",
                "${^RE_TRIE_MAXBUF}",
                "$SYSTEM_FD_MAX",
                "$^F",
                "$^H",
                "%^H",
                "$INPLACE_EDIT",
                "$^I",
                "$^M",
                "$OSNAME",
                "$^O",
                "${^OPEN}",
                "$PERLDB",
                "$^P",
                "$LAST_REGEXP_CODE_RESULT",
                "$^R",
                "$EXCEPTIONS_BEING_CAUGHT",
                "$^S",
                "$BASETIME",
                "$^T",
                "${^TAINT}",
                "${^UNICODE}",
                "${^UTF8CACHE}",
                "${^UTF8LOCALE}",
                "$PERL_VERSION",
                "$^V",
                "$WARNING",
                "$^W",
                "${^WARNING_BITS}",
                "${^WIN32_SLOPPY_STAT}",
                "$EXECUTABLE_NAME",
                "$^X",
                "ARGV",
                "$ARGV",
                "@ARGV",
                "ARGVOUT",
                "@F",
                "@INC",
                "@ARG",
                "@_",
                "%INC",
                "%ENV",
                "$ENV",
                "%SIG",
                "$SIG",
                "$^",
                "$#array"
              ],
              boundary: "\\W"
            }
          },
          scopes: {
            string: [
              ['"', '"', a.util.escapeSequences.concat(['\\"'])],
              ["'", "'", ["\\'", "\\\\"]]
            ],
            comment: [["#", "\n", null, !0]],
            variable: [
              ["$#", { length: 1, regex: /[\W]/ }, null, !0],
              ["$", { length: 1, regex: /[\W]/ }, null, !0],
              ["@", { length: 1, regex: /[\W]/ }, null, !0],
              ["%", { length: 1, regex: /[\W]/ }, null, !0]
            ]
          },
          customParseRules: [function(b) {
            var g, h, i, j, k, l = !1, m = "", n = b.reader.getLine(),
              o = b.reader.getColumn();
            if (!c(b)) return null;
            if (
              g = b.reader.current(),
                h = b.reader.peek(),
                "/" === g || "?" === g
            ) {
              i = g;
            } else if ("m" === g || "y" === g || "s" === g) {
              if (!(j = f(b, 1))) return null;
              m = g + j.value,
                i = j.delimiter,
                l = "y" === g || "s" === g;
            } else {
              if ("t" !== g && "q" !== g || "r" !== h) return null;
              if (!(j = f(b, 2))) return null;
              l = "t" === g,
                m = g + j.value,
                i = j.delimiter;
            }
            for (
              m += e(b, i, !l),
                l && (m += d(b),
                  k = a.util.contains(["[", "(", "{"], i),
                  k && (j = f(b, 1), j && (m += j.value, i = j.delimiter)),
                  m += e(b, i, !0));
              b.reader.peek() !== b.reader.EOF &&
              /[A-Za-z]/.test(b.reader.peek());
            ) {
              m += b.reader.read();
            }
            return b.createToken("regexLiteral", m, n, o);
          }, function(a) {
            var b, c = "q", d = 1, f = a.reader.getLine(),
              g = a.reader.getColumn();
            return "q" !== a.reader.current() ? null : (b = a.reader.peek(),
              ("q" === b || "w" === b || "x" == b) && d++,
              /[A-Za-z0-9]$/.test(a.reader.peek(d))
                ? null
                : (c += a.reader.read(d - 1) + e(a, a.reader.read(), !0),
                  a.createToken("rawString", c, f, g)));
          }, function(b) {
            var c, d, e, f, g = b.reader.getLine(), h = b.reader.getColumn(),
              i = "<<", j = "", k = "";
            if (
              "<" !== b.reader.current() || "<" !== b.reader.peek()
            ) {
              return null;
            }
            if (
              c = a.util.getPreviousNonWsToken(
                b.getAllTokens(),
                b.count() - 1
              ),
                c &&
                  ("ident" === c.name || "number" === c.name ||
                    "string" === c.name)
            ) {
              return null;
            }
            for (
              b.reader.read(2),
                d = b.reader.current(),
                "-" === d && (b.reader.read(), i += d, d = b.reader.current()),
                a.util.contains(['"', "'", "`"], d) ? k = d : j = d,
                i += d;
              (e = b.reader.peek()) !== b.reader.EOF &&
              !("\n" === e || "" === k && /\W/.test(e));
            ) {
              if (
                "\\" === e && (f = b.reader.peek(2),
                  "" !== k && a.util.contains(["\\" + k, "\\\\"], f))
              ) {
                i += f,
                  j += b.reader.read(2);
              } else {
                if (i += b.reader.read(), "" !== k && e === k) break;
                j += e;
              }
            }
            return b.items.heredocQueue.push(j),
              b.createToken("heredocDeclaration", i, g, h);
          }, function(a) {
            var b, c, d, e, f, g = [];
            if (0 === a.items.heredocQueue.length) return null;
            if (
              0 === a.defaultData.text.replace(/[^\n]/g, "").length
            ) {
              return null;
            }
            for (
              e = a.reader.current();
              a.items.heredocQueue.length > 0 &&
              a.reader.peek() !== a.reader.EOF;
            ) {
              for (
                b = a.items.heredocQueue.shift(),
                  c = a.reader.getLine(),
                  d = a.reader.getColumn();
                a.reader.peek() !== a.reader.EOF;
              ) {
                if (
                  f = a.reader.peek(b.length + 2),
                    f === "\n" + b || f === "\n" + b + "\n"
                ) {
                  e += a.reader.read(b.length + 2);
                  break;
                }
                e += a.reader.read();
              }
              g.push(a.createToken("heredoc", e, c, d)),
                e = "";
            }
            return g.length > 0
              ? g
              : null;
          }, function(a) {
            var b, c = "=", d = a.reader.getLine(), e = a.reader.getColumn(),
              f = !1;
            if ("=" !== a.reader.current() || !a.reader.isSol()) return null;
            for (; (b = a.reader.peek()) !== a.reader.EOF;) {
              if (
                f || "\n=cut" !== a.reader.peek(5)
              ) {
                if (f && "\n" === b) break;
                c += a.reader.read();
              } else f = !0, c += a.reader.read(5);
            }
            return a.createToken("docComment", c, d, e);
          }],
          identFirstLetter: /[A-Za-z_]/,
          identAfterFirstLetter: /\w/,
          namedIdentRules: {
            follows: [
              [{ token: "keyword", values: ["sub"] }, { token: "default" }],
              [{ token: "operator", values: ["\\&"] }, a.util.whitespace]
            ]
          },
          operators: [
            "++",
            "+=",
            "+",
            "--",
            "-=",
            "-",
            "**=",
            "**",
            "*=",
            "*",
            "//=",
            "/=",
            "//",
            "/",
            "%=",
            "%",
            "=>",
            "=~",
            "==",
            "=",
            "!",
            "!~",
            "!=",
            "~",
            "~~",
            "\\&",
            "\\",
            "&&=",
            "&=",
            "&&",
            "&",
            "||=",
            "||",
            "|=",
            "|",
            "<<=",
            "<=>",
            "<<",
            "<=",
            "<",
            ">>=",
            ">>",
            ">=",
            ">",
            "^=",
            "^",
            "?",
            "::",
            ":",
            "...",
            ".=",
            "..",
            ".",
            ",",
            "x=",
            "x",
            "lt",
            "gt",
            "le",
            "ge",
            "eq",
            "ne",
            "cmp"
          ],
          contextItems: { heredocQueue: [] }
        }
      );
    }(this.Sunlight),
    function(a, b, c) {
      if (
        a === c || a.registerLanguage === c
      ) {
        throw "Include sunlight.js before including language files";
      }
      a.registerLanguage(
        "php",
        {
          keywords: [
            "public",
            "private",
            "protected",
            "static",
            "final",
            "abstract",
            "extends",
            "implements",
            "const",
            "var",
            "class",
            "interface",
            "integer",
            "boolean",
            "int",
            "bool",
            "double",
            "float",
            "real",
            "string",
            "null",
            "true",
            "false",
            "for",
            "foreach",
            "do",
            "while",
            "as",
            "endwhile",
            "endfor",
            "endforeach",
            "namespace",
            "if",
            "else",
            "elseif",
            "try",
            "catch",
            "break",
            "continue",
            "goto",
            "case",
            "throw",
            "switch",
            "endif",
            "endswitch",
            "endwhile",
            "instanceof",
            "use",
            "and",
            "or",
            "xor",
            "self",
            "parent",
            "clone",
            "default",
            "new",
            "function",
            "declare",
            "enddeclare",
            "global"
          ],
          customTokens: {
            "function": {
              values: [
                "zlib_get_coding_type",
                "zip_read",
                "zip_open",
                "zip_entry_read",
                "zip_entry_open",
                "zip_entry_name",
                "zip_entry_filesize",
                "zip_entry_compressionmethod",
                "zip_entry_compressedsize",
                "zip_entry_close",
                "zip_close",
                "zend_version",
                "zend_logo_guid",
                "xmlwriter_write_raw",
                "xmlwriter_write_pi",
                "xmlwriter_write_element_ns",
                "xmlwriter_write_element",
                "xmlwriter_write_dtd_entity",
                "xmlwriter_write_dtd_element",
                "xmlwriter_write_dtd_attlist",
                "xmlwriter_write_dtd",
                "xmlwriter_write_comment",
                "xmlwriter_write_cdata",
                "xmlwriter_write_attribute_ns",
                "xmlwriter_write_attribute",
                "xmlwriter_text",
                "xmlwriter_start_pi",
                "xmlwriter_start_element_ns",
                "xmlwriter_start_element",
                "xmlwriter_start_dtd_entity",
                "xmlwriter_start_dtd_element",
                "xmlwriter_start_dtd_attlist",
                "xmlwriter_start_dtd",
                "xmlwriter_start_document",
                "xmlwriter_start_comment",
                "xmlwriter_start_cdata",
                "xmlwriter_start_attribute_ns",
                "xmlwriter_start_attribute",
                "xmlwriter_set_indent_string",
                "xmlwriter_set_indent",
                "xmlwriter_output_memory",
                "xmlwriter_open_uri",
                "xmlwriter_open_memory",
                "xmlwriter_full_end_element",
                "xmlwriter_flush",
                "xmlwriter_end_pi",
                "xmlwriter_end_element",
                "xmlwriter_end_dtd_entity",
                "xmlwriter_end_dtd_element",
                "xmlwriter_end_dtd_attlist",
                "xmlwriter_end_dtd",
                "xmlwriter_end_document",
                "xmlwriter_end_comment",
                "xmlwriter_end_cdata",
                "xmlwriter_end_attribute",
                "xmlrpc_set_type",
                "xmlrpc_server_register_method",
                "xmlrpc_server_register_introspection_callback",
                "xmlrpc_server_destroy",
                "xmlrpc_server_create",
                "xmlrpc_server_call_method",
                "xmlrpc_server_add_introspection_data",
                "xmlrpc_parse_method_descriptions",
                "xmlrpc_is_fault",
                "xmlrpc_get_type",
                "xmlrpc_encode_request",
                "xmlrpc_encode",
                "xmlrpc_decode_request",
                "xmlrpc_decode",
                "xml_set_unparsed_entity_decl_handler",
                "xml_set_start_namespace_decl_handler",
                "xml_set_processing_instruction_handler",
                "xml_set_object",
                "xml_set_notation_decl_handler",
                "xml_set_external_entity_ref_handler",
                "xml_set_end_namespace_decl_handler",
                "xml_set_element_handler",
                "xml_set_default_handler",
                "xml_set_character_data_handler",
                "xml_parser_set_option",
                "xml_parser_get_option",
                "xml_parser_free",
                "xml_parser_create_ns",
                "xml_parser_create",
                "xml_parse_into_struct",
                "xml_parse",
                "xml_get_error_code",
                "xml_get_current_line_number",
                "xml_get_current_column_number",
                "xml_get_current_byte_index",
                "xml_error_string",
                "wordwrap",
                "wddx_serialize_vars",
                "wddx_serialize_value",
                "wddx_packet_start",
                "wddx_packet_end",
                "wddx_deserialize",
                "wddx_add_vars",
                "vsprintf",
                "vprintf",
                "vfprintf",
                "version_compare",
                "variant_xor",
                "variant_sub",
                "variant_set_type",
                "variant_set",
                "variant_round",
                "variant_pow",
                "variant_or",
                "variant_not",
                "variant_neg",
                "variant_mul",
                "variant_mod",
                "variant_int",
                "variant_imp",
                "variant_idiv",
                "variant_get_type",
                "variant_fix",
                "variant_eqv",
                "variant_div",
                "variant_date_to_timestamp",
                "variant_date_from_timestamp",
                "variant_cmp",
                "variant_cat",
                "variant_cast",
                "variant_and",
                "variant_add",
                "variant_abs",
                "var_export",
                "var_dump",
                "utf8_encode",
                "utf8_decode",
                "usort",
                "usleep",
                "user_error",
                "use_soap_error_handler",
                "urlencode",
                "urldecode",
                "unserialize",
                "unregister_tick_function",
                "unpack",
                "unlink",
                "unixtojd",
                "uniqid",
                "umask",
                "uksort",
                "ucwords",
                "ucfirst",
                "uasort",
                "trim",
                "trigger_error",
                "touch",
                "token_name",
                "token_get_all",
                "tmpfile",
                "timezone_version_get",
                "timezone_transitions_get",
                "timezone_open",
                "timezone_offset_get",
                "timezone_name_get",
                "timezone_name_from_abbr",
                "timezone_location_get",
                "timezone_identifiers_list",
                "timezone_abbreviations_list",
                "time_sleep_until",
                "time_nanosleep",
                "time",
                "tidy_warning_count",
                "tidy_repair_string",
                "tidy_repair_file",
                "tidy_parse_string",
                "tidy_parse_file",
                "tidy_is_xml",
                "tidy_is_xhtml",
                "tidy_getopt",
                "tidy_get_status",
                "tidy_get_root",
                "tidy_get_release",
                "tidy_get_output",
                "tidy_get_html_ver",
                "tidy_get_html",
                "tidy_get_head",
                "tidy_get_error_buffer",
                "tidy_get_config",
                "tidy_get_body",
                "tidy_error_count",
                "tidy_diagnose",
                "tidy_config_count",
                "tidy_clean_repair",
                "tidy_access_count",
                "textdomain",
                "tempnam",
                "tanh",
                "tan",
                "system",
                "syslog",
                "sys_get_temp_dir",
                "symlink",
                "substr_replace",
                "substr_count",
                "substr_compare",
                "substr",
                "strval",
                "strtr",
                "strtoupper",
                "strtotime",
                "strtolower",
                "strtok",
                "strstr",
                "strspn",
                "strrpos",
                "strripos",
                "strrev",
                "strrchr",
                "strpos",
                "strpbrk",
                "strncmp",
                "strncasecmp",
                "strnatcmp",
                "strnatcasecmp",
                "strlen",
                "stristr",
                "stripslashes",
                "stripos",
                "stripcslashes",
                "strip_tags",
                "strftime",
                "stream_wrapper_unregister",
                "stream_wrapper_restore",
                "stream_wrapper_register",
                "stream_supports_lock",
                "stream_socket_shutdown",
                "stream_socket_server",
                "stream_socket_sendto",
                "stream_socket_recvfrom",
                "stream_socket_pair",
                "stream_socket_get_name",
                "stream_socket_enable_crypto",
                "stream_socket_client",
                "stream_socket_accept",
                "stream_set_write_buffer",
                "stream_set_timeout",
                "stream_set_blocking",
                "stream_select",
                "stream_resolve_include_path",
                "stream_register_wrapper",
                "stream_is_local",
                "stream_get_wrappers",
                "stream_get_transports",
                "stream_get_meta_data",
                "stream_get_line",
                "stream_get_filters",
                "stream_get_contents",
                "stream_filter_remove",
                "stream_filter_register",
                "stream_filter_prepend",
                "stream_filter_append",
                "stream_copy_to_stream",
                "stream_context_set_params",
                "stream_context_set_option",
                "stream_context_set_default",
                "stream_context_get_params",
                "stream_context_get_options",
                "stream_context_get_default",
                "stream_context_create",
                "stream_bucket_prepend",
                "stream_bucket_new",
                "stream_bucket_make_writeable",
                "stream_bucket_append",
                "strcspn",
                "strcoll",
                "strcmp",
                "strchr",
                "strcasecmp",
                "str_word_count",
                "str_split",
                "str_shuffle",
                "str_rot13",
                "str_replace",
                "str_repeat",
                "str_pad",
                "str_ireplace",
                "str_getcsv",
                "stat",
                "sscanf",
                "srand",
                "sqrt",
                "sqlite_valid",
                "sqlite_unbuffered_query",
                "sqlite_udf_encode_binary",
                "sqlite_udf_decode_binary",
                "sqlite_single_query",
                "sqlite_seek",
                "sqlite_rewind",
                "sqlite_query",
                "sqlite_prev",
                "sqlite_popen",
                "sqlite_open",
                "sqlite_num_rows",
                "sqlite_num_fields",
                "sqlite_next",
                "sqlite_libversion",
                "sqlite_libencoding",
                "sqlite_last_insert_rowid",
                "sqlite_last_error",
                "sqlite_has_prev",
                "sqlite_has_more",
                "sqlite_field_name",
                "sqlite_fetch_string",
                "sqlite_fetch_single",
                "sqlite_fetch_object",
                "sqlite_fetch_column_types",
                "sqlite_fetch_array",
                "sqlite_fetch_all",
                "sqlite_factory",
                "sqlite_exec",
                "sqlite_escape_string",
                "sqlite_error_string",
                "sqlite_current",
                "sqlite_create_function",
                "sqlite_create_aggregate",
                "sqlite_column",
                "sqlite_close",
                "sqlite_changes",
                "sqlite_busy_timeout",
                "sqlite_array_query",
                "sql_regcase",
                "sprintf",
                "spliti",
                "split",
                "spl_object_hash",
                "spl_classes",
                "spl_autoload_unregister",
                "spl_autoload_register",
                "spl_autoload_functions",
                "spl_autoload_extensions",
                "spl_autoload_call",
                "spl_autoload",
                "soundex",
                "sort",
                "socket_write",
                "socket_strerror",
                "socket_shutdown",
                "socket_setopt",
                "socket_set_timeout",
                "socket_set_option",
                "socket_set_nonblock",
                "socket_set_blocking",
                "socket_set_block",
                "socket_sendto",
                "socket_send",
                "socket_select",
                "socket_recvfrom",
                "socket_recv",
                "socket_read",
                "socket_listen",
                "socket_last_error",
                "socket_getsockname",
                "socket_getpeername",
                "socket_getopt",
                "socket_get_status",
                "socket_get_option",
                "socket_create_pair",
                "socket_create_listen",
                "socket_create",
                "socket_connect",
                "socket_close",
                "socket_clear_error",
                "socket_bind",
                "socket_accept",
                "sleep",
                "sizeof",
                "sinh",
                "sin",
                "simplexml_load_string",
                "simplexml_load_file",
                "simplexml_import_dom",
                "similar_text",
                "shuffle",
                "show_source",
                "shmop_write",
                "shmop_size",
                "shmop_read",
                "shmop_open",
                "shmop_delete",
                "shmop_close",
                "shell_exec",
                "sha1_file",
                "sha1",
                "settype",
                "setrawcookie",
                "setlocale",
                "setcookie",
                "set_time_limit",
                "set_socket_blocking",
                "set_magic_quotes_runtime",
                "set_include_path",
                "set_file_buffer",
                "set_exception_handler",
                "set_error_handler",
                "session_write_close",
                "session_unset",
                "session_unregister",
                "session_start",
                "session_set_save_handler",
                "session_set_cookie_params",
                "session_save_path",
                "session_register",
                "session_regenerate_id",
                "session_name",
                "session_module_name",
                "session_is_registered",
                "session_id",
                "session_get_cookie_params",
                "session_encode",
                "session_destroy",
                "session_decode",
                "session_commit",
                "session_cache_limiter",
                "session_cache_expire",
                "serialize",
                "scandir",
                "rtrim",
                "rsort",
                "round",
                "rmdir",
                "rewinddir",
                "rewind",
                "restore_include_path",
                "restore_exception_handler",
                "restore_error_handler",
                "reset",
                "rename",
                "register_tick_function",
                "register_shutdown_function",
                "realpath_cache_size",
                "realpath_cache_get",
                "realpath",
                "readlink",
                "readgzfile",
                "readfile",
                "readdir",
                "read_exif_data",
                "rawurlencode",
                "rawurldecode",
                "range",
                "rand",
                "rad2deg",
                "quotemeta",
                "quoted_printable_encode",
                "quoted_printable_decode",
                "putenv",
                "property_exists",
                "proc_terminate",
                "proc_open",
                "proc_get_status",
                "proc_close",
                "printf",
                "print_r",
                "prev",
                "preg_split",
                "preg_replace_callback",
                "preg_replace",
                "preg_quote",
                "preg_match_all",
                "preg_match",
                "preg_last_error",
                "preg_grep",
                "preg_filter",
                "pow",
                "pos",
                "popen",
                "pi",
                "phpversion",
                "phpinfo",
                "phpcredits",
                "php_uname",
                "php_strip_whitespace",
                "php_sapi_name",
                "php_real_logo_guid",
                "php_logo_guid",
                "php_ini_scanned_files",
                "php_ini_loaded_file",
                "php_egg_logo_guid",
                "pg_version",
                "pg_update",
                "pg_untrace",
                "pg_unescape_bytea",
                "pg_tty",
                "pg_transaction_status",
                "pg_trace",
                "pg_setclientencoding",
                "pg_set_error_verbosity",
                "pg_set_client_encoding",
                "pg_send_query_params",
                "pg_send_query",
                "pg_send_prepare",
                "pg_send_execute",
                "pg_select",
                "pg_result_status",
                "pg_result_seek",
                "pg_result_error_field",
                "pg_result_error",
                "pg_result",
                "pg_query_params",
                "pg_query",
                "pg_put_line",
                "pg_prepare",
                "pg_port",
                "pg_ping",
                "pg_pconnect",
                "pg_parameter_status",
                "pg_options",
                "pg_numrows",
                "pg_numfields",
                "pg_num_rows",
                "pg_num_fields",
                "pg_meta_data",
                "pg_lowrite",
                "pg_lounlink",
                "pg_loreadall",
                "pg_loread",
                "pg_loopen",
                "pg_loimport",
                "pg_loexport",
                "pg_locreate",
                "pg_loclose",
                "pg_lo_write",
                "pg_lo_unlink",
                "pg_lo_tell",
                "pg_lo_seek",
                "pg_lo_read_all",
                "pg_lo_read",
                "pg_lo_open",
                "pg_lo_import",
                "pg_lo_export",
                "pg_lo_create",
                "pg_lo_close",
                "pg_last_oid",
                "pg_last_notice",
                "pg_last_error",
                "pg_insert",
                "pg_host",
                "pg_getlastoid",
                "pg_get_result",
                "pg_get_pid",
                "pg_get_notify",
                "pg_freeresult",
                "pg_free_result",
                "pg_fieldtype",
                "pg_fieldsize",
                "pg_fieldprtlen",
                "pg_fieldnum",
                "pg_fieldname",
                "pg_fieldisnull",
                "pg_field_type_oid",
                "pg_field_type",
                "pg_field_table",
                "pg_field_size",
                "pg_field_prtlen",
                "pg_field_num",
                "pg_field_name",
                "pg_field_is_null",
                "pg_fetch_row",
                "pg_fetch_result",
                "pg_fetch_object",
                "pg_fetch_assoc",
                "pg_fetch_array",
                "pg_fetch_all_columns",
                "pg_fetch_all",
                "pg_execute",
                "pg_exec",
                "pg_escape_string",
                "pg_escape_bytea",
                "pg_errormessage",
                "pg_end_copy",
                "pg_delete",
                "pg_dbname",
                "pg_copy_to",
                "pg_copy_from",
                "pg_convert",
                "pg_connection_status",
                "pg_connection_reset",
                "pg_connection_busy",
                "pg_connect",
                "pg_cmdtuples",
                "pg_close",
                "pg_clientencoding",
                "pg_client_encoding",
                "pg_cancel_query",
                "pg_affected_rows",
                "pfsockopen",
                "pdo_drivers",
                "pclose",
                "pathinfo",
                "passthru",
                "parse_url",
                "parse_str",
                "parse_ini_string",
                "parse_ini_file",
                "pack",
                "output_reset_rewrite_vars",
                "output_add_rewrite_var",
                "ord",
                "openssl_x509_read",
                "openssl_x509_parse",
                "openssl_x509_free",
                "openssl_x509_export_to_file",
                "openssl_x509_export",
                "openssl_x509_checkpurpose",
                "openssl_x509_check_private_key",
                "openssl_verify",
                "openssl_sign",
                "openssl_seal",
                "openssl_random_pseudo_bytes",
                "openssl_public_encrypt",
                "openssl_public_decrypt",
                "openssl_private_encrypt",
                "openssl_private_decrypt",
                "openssl_pkey_new",
                "openssl_pkey_get_public",
                "openssl_pkey_get_private",
                "openssl_pkey_get_details",
                "openssl_pkey_free",
                "openssl_pkey_export_to_file",
                "openssl_pkey_export",
                "openssl_pkcs7_verify",
                "openssl_pkcs7_sign",
                "openssl_pkcs7_encrypt",
                "openssl_pkcs7_decrypt",
                "openssl_pkcs12_read",
                "openssl_pkcs12_export_to_file",
                "openssl_pkcs12_export",
                "openssl_open",
                "openssl_get_publickey",
                "openssl_get_privatekey",
                "openssl_get_md_methods",
                "openssl_get_cipher_methods",
                "openssl_free_key",
                "openssl_error_string",
                "openssl_encrypt",
                "openssl_digest",
                "openssl_dh_compute_key",
                "openssl_decrypt",
                "openssl_csr_sign",
                "openssl_csr_new",
                "openssl_csr_get_subject",
                "openssl_csr_get_public_key",
                "openssl_csr_export_to_file",
                "openssl_csr_export",
                "openlog",
                "opendir",
                "odbc_tables",
                "odbc_tableprivileges",
                "odbc_statistics",
                "odbc_specialcolumns",
                "odbc_setoption",
                "odbc_rollback",
                "odbc_result_all",
                "odbc_result",
                "odbc_procedures",
                "odbc_procedurecolumns",
                "odbc_primarykeys",
                "odbc_prepare",
                "odbc_pconnect",
                "odbc_num_rows",
                "odbc_num_fields",
                "odbc_next_result",
                "odbc_longreadlen",
                "odbc_gettypeinfo",
                "odbc_free_result",
                "odbc_foreignkeys",
                "odbc_field_type",
                "odbc_field_scale",
                "odbc_field_precision",
                "odbc_field_num",
                "odbc_field_name",
                "odbc_field_len",
                "odbc_fetch_row",
                "odbc_fetch_object",
                "odbc_fetch_into",
                "odbc_fetch_array",
                "odbc_execute",
                "odbc_exec",
                "odbc_errormsg",
                "odbc_error",
                "odbc_do",
                "odbc_data_source",
                "odbc_cursor",
                "odbc_connect",
                "odbc_commit",
                "odbc_columns",
                "odbc_columnprivileges",
                "odbc_close_all",
                "odbc_close",
                "odbc_binmode",
                "odbc_autocommit",
                "octdec",
                "ob_tidyhandler",
                "ob_start",
                "ob_list_handlers",
                "ob_inflatehandler",
                "ob_implicit_flush",
                "ob_iconv_handler",
                "ob_gzhandler",
                "ob_get_status",
                "ob_get_level",
                "ob_get_length",
                "ob_get_flush",
                "ob_get_contents",
                "ob_get_clean",
                "ob_flush",
                "ob_etaghandler",
                "ob_end_flush",
                "ob_end_clean",
                "ob_deflatehandler",
                "ob_clean",
                "number_format",
                "nl2br",
                "ngettext",
                "next",
                "natsort",
                "natcasesort",
                "mysqli_warning_count",
                "mysqli_use_result",
                "mysqli_thread_safe",
                "mysqli_thread_id",
                "mysqli_store_result",
                "mysqli_stmt_store_result",
                "mysqli_stmt_sqlstate",
                "mysqli_stmt_send_long_data",
                "mysqli_stmt_result_metadata",
                "mysqli_stmt_reset",
                "mysqli_stmt_prepare",
                "mysqli_stmt_param_count",
                "mysqli_stmt_num_rows",
                "mysqli_stmt_next_result",
                "mysqli_stmt_more_results",
                "mysqli_stmt_insert_id",
                "mysqli_stmt_init",
                "mysqli_stmt_get_warnings",
                "mysqli_stmt_get_result",
                "mysqli_stmt_free_result",
                "mysqli_stmt_field_count",
                "mysqli_stmt_fetch",
                "mysqli_stmt_execute",
                "mysqli_stmt_error",
                "mysqli_stmt_errno",
                "mysqli_stmt_data_seek",
                "mysqli_stmt_close",
                "mysqli_stmt_bind_result",
                "mysqli_stmt_bind_param",
                "mysqli_stmt_attr_set",
                "mysqli_stmt_attr_get",
                "mysqli_stmt_affected_rows",
                "mysqli_stat",
                "mysqli_sqlstate",
                "mysqli_set_opt",
                "mysqli_set_charset",
                "mysqli_send_long_data",
                "mysqli_select_db",
                "mysqli_rollback",
                "mysqli_report",
                "mysqli_refresh",
                "mysqli_reap_async_query",
                "mysqli_real_query",
                "mysqli_real_escape_string",
                "mysqli_real_connect",
                "mysqli_query",
                "mysqli_prepare",
                "mysqli_poll",
                "mysqli_ping",
                "mysqli_param_count",
                "mysqli_options",
                "mysqli_num_rows",
                "mysqli_num_fields",
                "mysqli_next_result",
                "mysqli_multi_query",
                "mysqli_more_results",
                "mysqli_kill",
                "mysqli_insert_id",
                "mysqli_init",
                "mysqli_info",
                "mysqli_get_warnings",
                "mysqli_get_server_version",
                "mysqli_get_server_info",
                "mysqli_get_proto_info",
                "mysqli_get_metadata",
                "mysqli_get_host_info",
                "mysqli_get_connection_stats",
                "mysqli_get_client_version",
                "mysqli_get_client_stats",
                "mysqli_get_client_info",
                "mysqli_get_charset",
                "mysqli_get_cache_stats",
                "mysqli_free_result",
                "mysqli_field_tell",
                "mysqli_field_seek",
                "mysqli_field_count",
                "mysqli_fetch_row",
                "mysqli_fetch_object",
                "mysqli_fetch_lengths",
                "mysqli_fetch_fields",
                "mysqli_fetch_field_direct",
                "mysqli_fetch_field",
                "mysqli_fetch_assoc",
                "mysqli_fetch_array",
                "mysqli_fetch_all",
                "mysqli_fetch",
                "mysqli_execute",
                "mysqli_escape_string",
                "mysqli_error",
                "mysqli_errno",
                "mysqli_dump_debug_info",
                "mysqli_debug",
                "mysqli_data_seek",
                "mysqli_connect_error",
                "mysqli_connect_errno",
                "mysqli_connect",
                "mysqli_commit",
                "mysqli_close",
                "mysqli_client_encoding",
                "mysqli_character_set_name",
                "mysqli_change_user",
                "mysqli_bind_result",
                "mysqli_bind_param",
                "mysqli_autocommit",
                "mysqli_affected_rows",
                "mysql_unbuffered_query",
                "mysql_thread_id",
                "mysql_tablename",
                "mysql_table_name",
                "mysql_stat",
                "mysql_set_charset",
                "mysql_selectdb",
                "mysql_select_db",
                "mysql_result",
                "mysql_real_escape_string",
                "mysql_query",
                "mysql_ping",
                "mysql_pconnect",
                "mysql_numrows",
                "mysql_numfields",
                "mysql_num_rows",
                "mysql_num_fields",
                "mysql_listtables",
                "mysql_listfields",
                "mysql_listdbs",
                "mysql_list_tables",
                "mysql_list_processes",
                "mysql_list_fields",
                "mysql_list_dbs",
                "mysql_insert_id",
                "mysql_info",
                "mysql_get_server_info",
                "mysql_get_proto_info",
                "mysql_get_host_info",
                "mysql_get_client_info",
                "mysql_freeresult",
                "mysql_free_result",
                "mysql_fieldtype",
                "mysql_fieldtable",
                "mysql_fieldname",
                "mysql_fieldlen",
                "mysql_fieldflags",
                "mysql_field_type",
                "mysql_field_table",
                "mysql_field_seek",
                "mysql_field_name",
                "mysql_field_len",
                "mysql_field_flags",
                "mysql_fetch_row",
                "mysql_fetch_object",
                "mysql_fetch_lengths",
                "mysql_fetch_field",
                "mysql_fetch_assoc",
                "mysql_fetch_array",
                "mysql_escape_string",
                "mysql_error",
                "mysql_errno",
                "mysql_dbname",
                "mysql_db_query",
                "mysql_db_name",
                "mysql_data_seek",
                "mysql_connect",
                "mysql_close",
                "mysql_client_encoding",
                "mysql_affected_rows",
                "mysql",
                "mt_srand",
                "mt_rand",
                "mt_getrandmax",
                "move_uploaded_file",
                "mktime",
                "mkdir",
                "min",
                "microtime",
                "method_exists",
                "metaphone",
                "memory_get_usage",
                "memory_get_peak_usage",
                "mdecrypt_generic",
                "md5_file",
                "md5",
                "mcrypt_ofb",
                "mcrypt_module_self_test",
                "mcrypt_module_open",
                "mcrypt_module_is_block_mode",
                "mcrypt_module_is_block_algorithm_mode",
                "mcrypt_module_is_block_algorithm",
                "mcrypt_module_get_supported_key_sizes",
                "mcrypt_module_get_algo_key_size",
                "mcrypt_module_get_algo_block_size",
                "mcrypt_module_close",
                "mcrypt_list_modes",
                "mcrypt_list_algorithms",
                "mcrypt_get_key_size",
                "mcrypt_get_iv_size",
                "mcrypt_get_cipher_name",
                "mcrypt_get_block_size",
                "mcrypt_generic_init",
                "mcrypt_generic_end",
                "mcrypt_generic_deinit",
                "mcrypt_generic",
                "mcrypt_encrypt",
                "mcrypt_enc_self_test",
                "mcrypt_enc_is_block_mode",
                "mcrypt_enc_is_block_algorithm_mode",
                "mcrypt_enc_is_block_algorithm",
                "mcrypt_enc_get_supported_key_sizes",
                "mcrypt_enc_get_modes_name",
                "mcrypt_enc_get_key_size",
                "mcrypt_enc_get_iv_size",
                "mcrypt_enc_get_block_size",
                "mcrypt_enc_get_algorithms_name",
                "mcrypt_ecb",
                "mcrypt_decrypt",
                "mcrypt_create_iv",
                "mcrypt_cfb",
                "mcrypt_cbc",
                "mbsplit",
                "mbregex_encoding",
                "mberegi_replace",
                "mberegi",
                "mbereg_search_setpos",
                "mbereg_search_regs",
                "mbereg_search_pos",
                "mbereg_search_init",
                "mbereg_search_getregs",
                "mbereg_search_getpos",
                "mbereg_search",
                "mbereg_replace",
                "mbereg_match",
                "mbereg",
                "mb_substr_count",
                "mb_substr",
                "mb_substitute_character",
                "mb_strwidth",
                "mb_strtoupper",
                "mb_strtolower",
                "mb_strstr",
                "mb_strrpos",
                "mb_strripos",
                "mb_strrichr",
                "mb_strrchr",
                "mb_strpos",
                "mb_strlen",
                "mb_stristr",
                "mb_stripos",
                "mb_strimwidth",
                "mb_strcut",
                "mb_split",
                "mb_send_mail",
                "mb_regex_set_options",
                "mb_regex_encoding",
                "mb_preferred_mime_name",
                "mb_parse_str",
                "mb_output_handler",
                "mb_list_encodings",
                "mb_language",
                "mb_internal_encoding",
                "mb_http_output",
                "mb_http_input",
                "mb_get_info",
                "mb_eregi_replace",
                "mb_eregi",
                "mb_ereg_search_setpos",
                "mb_ereg_search_regs",
                "mb_ereg_search_pos",
                "mb_ereg_search_init",
                "mb_ereg_search_getregs",
                "mb_ereg_search_getpos",
                "mb_ereg_search",
                "mb_ereg_replace",
                "mb_ereg_match",
                "mb_ereg",
                "mb_encoding_aliases",
                "mb_encode_numericentity",
                "mb_encode_mimeheader",
                "mb_detect_order",
                "mb_detect_encoding",
                "mb_decode_numericentity",
                "mb_decode_mimeheader",
                "mb_convert_variables",
                "mb_convert_kana",
                "mb_convert_encoding",
                "mb_convert_case",
                "mb_check_encoding",
                "max",
                "mail",
                "magic_quotes_runtime",
                "ltrim",
                "lstat",
                "long2ip",
                "log1p",
                "log10",
                "log",
                "localtime",
                "localeconv",
                "linkinfo",
                "link",
                "libxml_use_internal_errors",
                "libxml_set_streams_context",
                "libxml_get_last_error",
                "libxml_get_errors",
                "libxml_disable_entity_loader",
                "libxml_clear_errors",
                "levenshtein",
                "ldap_unbind",
                "ldap_start_tls",
                "ldap_sort",
                "ldap_set_option",
                "ldap_search",
                "ldap_rename",
                "ldap_read",
                "ldap_parse_result",
                "ldap_parse_reference",
                "ldap_next_reference",
                "ldap_next_entry",
                "ldap_next_attribute",
                "ldap_modify",
                "ldap_mod_replace",
                "ldap_mod_del",
                "ldap_mod_add",
                "ldap_list",
                "ldap_get_values_len",
                "ldap_get_values",
                "ldap_get_option",
                "ldap_get_entries",
                "ldap_get_dn",
                "ldap_get_attributes",
                "ldap_free_result",
                "ldap_first_reference",
                "ldap_first_entry",
                "ldap_first_attribute",
                "ldap_explode_dn",
                "ldap_error",
                "ldap_errno",
                "ldap_err2str",
                "ldap_dn2ufn",
                "ldap_delete",
                "ldap_count_entries",
                "ldap_connect",
                "ldap_compare",
                "ldap_close",
                "ldap_bind",
                "ldap_add",
                "lcg_value",
                "lcfirst",
                "ksort",
                "krsort",
                "key_exists",
                "key",
                "juliantojd",
                "json_last_error",
                "json_encode",
                "json_decode",
                "join",
                "jewishtojd",
                "jdtounix",
                "jdtojulian",
                "jdtojewish",
                "jdtogregorian",
                "jdtofrench",
                "jdmonthname",
                "jddayofweek",
                "iterator_to_array",
                "iterator_count",
                "iterator_apply",
                "is_writeable",
                "is_writable",
                "is_uploaded_file",
                "is_subclass_of",
                "is_string",
                "is_soap_fault",
                "is_scalar",
                "is_resource",
                "is_real",
                "is_readable",
                "is_object",
                "is_numeric",
                "is_null",
                "is_nan",
                "is_long",
                "is_link",
                "is_integer",
                "is_int",
                "is_infinite",
                "is_float",
                "is_finite",
                "is_file",
                "is_executable",
                "is_double",
                "is_dir",
                "is_callable",
                "is_bool",
                "is_array",
                "is_a",
                "iptcparse",
                "iptcembed",
                "ip2long",
                "intval",
                "interface_exists",
                "ini_set",
                "ini_restore",
                "ini_get_all",
                "ini_get",
                "ini_alter",
                "inet_pton",
                "inet_ntop",
                "in_array",
                "import_request_variables",
                "implode",
                "image_type_to_mime_type",
                "image_type_to_extension",
                "ignore_user_abort",
                "idate",
                "iconv_substr",
                "iconv_strrpos",
                "iconv_strpos",
                "iconv_strlen",
                "iconv_set_encoding",
                "iconv_mime_encode",
                "iconv_mime_decode_headers",
                "iconv_mime_decode",
                "iconv_get_encoding",
                "iconv",
                "hypot",
                "http_throttle",
                "http_support",
                "http_send_stream",
                "http_send_status",
                "http_send_last_modified",
                "http_send_file",
                "http_send_data",
                "http_send_content_type",
                "http_send_content_disposition",
                "http_request_method_unregister",
                "http_request_method_register",
                "http_request_method_name",
                "http_request_method_exists",
                "http_request_body_encode",
                "http_request",
                "http_redirect",
                "http_put_stream",
                "http_put_file",
                "http_put_data",
                "http_post_fields",
                "http_post_data",
                "http_persistent_handles_ident",
                "http_persistent_handles_count",
                "http_persistent_handles_clean",
                "http_parse_params",
                "http_parse_message",
                "http_parse_headers",
                "http_parse_cookie",
                "http_negotiate_language",
                "http_negotiate_content_type",
                "http_negotiate_charset",
                "http_match_request_header",
                "http_match_modified",
                "http_match_etag",
                "http_inflate",
                "http_head",
                "http_get_request_headers",
                "http_get_request_body_stream",
                "http_get_request_body",
                "http_get",
                "http_deflate",
                "http_date",
                "http_chunked_decode",
                "http_cache_last_modified",
                "http_cache_etag",
                "http_build_url",
                "http_build_str",
                "http_build_query",
                "http_build_cookie",
                "htmlspecialchars_decode",
                "htmlspecialchars",
                "htmlentities",
                "html_entity_decode",
                "highlight_string",
                "highlight_file",
                "hexdec",
                "hebrevc",
                "hebrev",
                "headers_sent",
                "headers_list",
                "header_remove",
                "header",
                "hash_update_stream",
                "hash_update_file",
                "hash_update",
                "hash_init",
                "hash_hmac_file",
                "hash_hmac",
                "hash_final",
                "hash_file",
                "hash_copy",
                "hash_algos",
                "hash",
                "gzwrite",
                "gzuncompress",
                "gztell",
                "gzseek",
                "gzrewind",
                "gzread",
                "gzputs",
                "gzpassthru",
                "gzopen",
                "gzinflate",
                "gzgetss",
                "gzgets",
                "gzgetc",
                "gzfile",
                "gzeof",
                "gzencode",
                "gzdeflate",
                "gzcompress",
                "gzclose",
                "gregoriantojd",
                "gmstrftime",
                "gmmktime",
                "gmdate",
                "glob",
                "gettype",
                "gettimeofday",
                "gettext",
                "getservbyport",
                "getservbyname",
                "getrandmax",
                "getprotobynumber",
                "getprotobyname",
                "getopt",
                "getmyuid",
                "getmypid",
                "getmyinode",
                "getmygid",
                "getmxrr",
                "getlastmod",
                "getimagesize",
                "gethostname",
                "gethostbynamel",
                "gethostbyname",
                "gethostbyaddr",
                "getenv",
                "getdate",
                "getcwd",
                "get_resource_type",
                "get_required_files",
                "get_parent_class",
                "get_object_vars",
                "get_meta_tags",
                "get_magic_quotes_runtime",
                "get_magic_quotes_gpc",
                "get_loaded_extensions",
                "get_included_files",
                "get_include_path",
                "get_html_translation_table",
                "get_headers",
                "get_extension_funcs",
                "get_defined_vars",
                "get_defined_functions",
                "get_defined_constants",
                "get_declared_interfaces",
                "get_declared_classes",
                "get_current_user",
                "get_class_vars",
                "get_class_methods",
                "get_class",
                "get_cfg_var",
                "get_called_class",
                "get_browser",
                "gc_enabled",
                "gc_enable",
                "gc_disable",
                "gc_collect_cycles",
                "fwrite",
                "function_exists",
                "func_num_args",
                "func_get_args",
                "func_get_arg",
                "ftruncate",
                "ftp_systype",
                "ftp_ssl_connect",
                "ftp_size",
                "ftp_site",
                "ftp_set_option",
                "ftp_rmdir",
                "ftp_rename",
                "ftp_rawlist",
                "ftp_raw",
                "ftp_quit",
                "ftp_pwd",
                "ftp_put",
                "ftp_pasv",
                "ftp_nlist",
                "ftp_nb_put",
                "ftp_nb_get",
                "ftp_nb_fput",
                "ftp_nb_fget",
                "ftp_nb_continue",
                "ftp_mkdir",
                "ftp_mdtm",
                "ftp_login",
                "ftp_get_option",
                "ftp_get",
                "ftp_fput",
                "ftp_fget",
                "ftp_exec",
                "ftp_delete",
                "ftp_connect",
                "ftp_close",
                "ftp_chmod",
                "ftp_chdir",
                "ftp_cdup",
                "ftp_alloc",
                "ftell",
                "fstat",
                "fsockopen",
                "fseek",
                "fscanf",
                "frenchtojd",
                "fread",
                "fputs",
                "fputcsv",
                "fprintf",
                "fpassthru",
                "forward_static_call_array",
                "forward_static_call",
                "fopen",
                "fnmatch",
                "fmod",
                "flush",
                "floor",
                "flock",
                "floatval",
                "filter_var_array",
                "filter_var",
                "filter_list",
                "filter_input_array",
                "filter_input",
                "filter_id",
                "filter_has_var",
                "filetype",
                "filesize",
                "fileperms",
                "fileowner",
                "filemtime",
                "fileinode",
                "filegroup",
                "filectime",
                "fileatime",
                "file_put_contents",
                "file_get_contents",
                "file_exists",
                "file",
                "fgetss",
                "fgets",
                "fgetcsv",
                "fgetc",
                "fflush",
                "feof",
                "fclose",
                "ezmlm_hash",
                "extract",
                "extension_loaded",
                "expm1",
                "explode",
                "exp",
                "exif_thumbnail",
                "exif_tagname",
                "exif_read_data",
                "exif_imagetype",
                "exec",
                "escapeshellcmd",
                "escapeshellarg",
                "error_reporting",
                "error_log",
                "error_get_last",
                "eregi_replace",
                "eregi",
                "ereg_replace",
                "ereg",
                "end",
                "easter_days",
                "easter_date",
                "each",
                "doubleval",
                "dom_import_simplexml",
                "dns_get_record",
                "dns_get_mx",
                "dns_check_record",
                "dngettext",
                "dl",
                "diskfreespace",
                "disk_total_space",
                "disk_free_space",
                "dirname",
                "dir",
                "dgettext",
                "deg2rad",
                "defined",
                "define_syslog_variables",
                "define",
                "decoct",
                "dechex",
                "decbin",
                "debug_zval_dump",
                "debug_print_backtrace",
                "debug_backtrace",
                "dcngettext",
                "dcgettext",
                "date_timezone_set",
                "date_timezone_get",
                "date_timestamp_set",
                "date_timestamp_get",
                "date_time_set",
                "date_sunset",
                "date_sunrise",
                "date_sun_info",
                "date_sub",
                "date_parse_from_format",
                "date_parse",
                "date_offset_get",
                "date_modify",
                "date_isodate_set",
                "date_interval_format",
                "date_interval_create_from_date_string",
                "date_get_last_errors",
                "date_format",
                "date_diff",
                "date_default_timezone_set",
                "date_default_timezone_get",
                "date_date_set",
                "date_create_from_format",
                "date_create",
                "date_add",
                "date",
                "current",
                "ctype_xdigit",
                "ctype_upper",
                "ctype_space",
                "ctype_punct",
                "ctype_print",
                "ctype_lower",
                "ctype_graph",
                "ctype_digit",
                "ctype_cntrl",
                "ctype_alpha",
                "ctype_alnum",
                "crypt",
                "create_function",
                "crc32",
                "count_chars",
                "count",
                "cosh",
                "cos",
                "copy",
                "convert_uuencode",
                "convert_uudecode",
                "convert_cyr_string",
                "constant",
                "connection_status",
                "connection_aborted",
                "compact",
                "com_print_typeinfo",
                "com_message_pump",
                "com_load_typelib",
                "com_get_active_object",
                "com_event_sink",
                "com_create_guid",
                "closelog",
                "closedir",
                "clearstatcache",
                "class_parents",
                "class_implements",
                "class_exists",
                "class_alias",
                "chunk_split",
                "chr",
                "chown",
                "chop",
                "chmod",
                "chgrp",
                "checkdnsrr",
                "checkdate",
                "chdir",
                "ceil",
                "call_user_method_array",
                "call_user_method",
                "call_user_func_array",
                "call_user_func",
                "cal_to_jd",
                "cal_info",
                "cal_from_jd",
                "cal_days_in_month",
                "bindtextdomain",
                "bindec",
                "bind_textdomain_codeset",
                "bin2hex",
                "bcsub",
                "bcsqrt",
                "bcscale",
                "bcpowmod",
                "bcpow",
                "bcmul",
                "bcmod",
                "bcdiv",
                "bccomp",
                "bcadd",
                "basename",
                "base_convert",
                "base64_encode",
                "base64_decode",
                "atanh",
                "atan2",
                "atan",
                "assert_options",
                "assert",
                "asort",
                "asinh",
                "asin",
                "arsort",
                "array_walk_recursive",
                "array_walk",
                "array_values",
                "array_unshift",
                "array_unique",
                "array_uintersect_uassoc",
                "array_uintersect_assoc",
                "array_uintersect",
                "array_udiff_uassoc",
                "array_udiff_assoc",
                "array_udiff",
                "array_sum",
                "array_splice",
                "array_slice",
                "array_shift",
                "array_search",
                "array_reverse",
                "array_replace_recursive",
                "array_replace",
                "array_reduce",
                "array_rand",
                "array_push",
                "array_product",
                "array_pop",
                "array_pad",
                "array_multisort",
                "array_merge_recursive",
                "array_merge",
                "array_map",
                "array_keys",
                "array_key_exists",
                "array_intersect_ukey",
                "array_intersect_uassoc",
                "array_intersect_key",
                "array_intersect_assoc",
                "array_intersect",
                "array_flip",
                "array_filter",
                "array_fill_keys",
                "array_fill",
                "array_diff_ukey",
                "array_diff_uassoc",
                "array_diff_key",
                "array_diff_assoc",
                "array_diff",
                "array_count_values",
                "array_combine",
                "array_chunk",
                "array_change_key_case",
                "addslashes",
                "addcslashes",
                "acosh",
                "acos",
                "abs"
              ],
              boundary: "\\b"
            },
            languageConstruct: {
              values: [
                "isset",
                "array",
                "unset",
                "list",
                "echo",
                "include_once",
                "include",
                "require_once",
                "require",
                "print",
                "empty",
                "return",
                "die",
                "eval",
                "exit"
              ],
              boundary: "\\b"
            },
            constant: {
              values: [
                "__CLASS__",
                "__DIR__",
                "__FILE__",
                "__LINE__",
                "__FUNCTION__",
                "__METHOD__",
                "__NAMESPACE__",
                "ZEND_THREAD_SAFE",
                "ZEND_DEBUG_BUILD",
                "XSL_CLONE_NEVER",
                "XSL_CLONE_AUTO",
                "XSL_CLONE_ALWAYS",
                "XSD_UNSIGNEDSHORT",
                "XSD_UNSIGNEDLONG",
                "XSD_UNSIGNEDINT",
                "XSD_UNSIGNEDBYTE",
                "XSD_TOKEN",
                "XSD_TIME",
                "XSD_STRING",
                "XSD_SHORT",
                "XSD_QNAME",
                "XSD_POSITIVEINTEGER",
                "XSD_NOTATION",
                "XSD_NORMALIZEDSTRING",
                "XSD_NONPOSITIVEINTEGER",
                "XSD_NONNEGATIVEINTEGER",
                "XSD_NMTOKENS",
                "XSD_NMTOKEN",
                "XSD_NEGATIVEINTEGER",
                "XSD_NCNAME",
                "XSD_NAMESPACE",
                "XSD_NAME",
                "XSD_LONG",
                "XSD_LANGUAGE",
                "XSD_INTEGER",
                "XSD_INT",
                "XSD_IDREFS",
                "XSD_IDREF",
                "XSD_ID",
                "XSD_HEXBINARY",
                "XSD_GYEARMONTH",
                "XSD_GYEAR",
                "XSD_GMONTHDAY",
                "XSD_GMONTH",
                "XSD_GDAY",
                "XSD_FLOAT",
                "XSD_ENTITY",
                "XSD_ENTITIES",
                "XSD_DURATION",
                "XSD_DOUBLE",
                "XSD_DECIMAL",
                "XSD_DATETIME",
                "XSD_DATE",
                "XSD_BYTE",
                "XSD_BOOLEAN",
                "XSD_BASE64BINARY",
                "XSD_ANYXML",
                "XSD_ANYURI",
                "XSD_ANYTYPE",
                "XSD_1999_TIMEINSTANT",
                "XSD_1999_NAMESPACE",
                "XML_TEXT_NODE",
                "XML_SAX_IMPL",
                "XML_PI_NODE",
                "XML_OPTION_TARGET_ENCODING",
                "XML_OPTION_SKIP_WHITE",
                "XML_OPTION_SKIP_TAGSTART",
                "XML_OPTION_CASE_FOLDING",
                "XML_NOTATION_NODE",
                "XML_NAMESPACE_DECL_NODE",
                "XML_LOCAL_NAMESPACE",
                "XML_HTML_DOCUMENT_NODE",
                "XML_ERROR_UNKNOWN_ENCODING",
                "XML_ERROR_UNDEFINED_ENTITY",
                "XML_ERROR_UNCLOSED_TOKEN",
                "XML_ERROR_UNCLOSED_CDATA_SECTION",
                "XML_ERROR_TAG_MISMATCH",
                "XML_ERROR_SYNTAX",
                "XML_ERROR_RECURSIVE_ENTITY_REF",
                "XML_ERROR_PARTIAL_CHAR",
                "XML_ERROR_PARAM_ENTITY_REF",
                "XML_ERROR_NO_MEMORY",
                "XML_ERROR_NO_ELEMENTS",
                "XML_ERROR_NONE",
                "XML_ERROR_MISPLACED_XML_PI",
                "XML_ERROR_JUNK_AFTER_DOC_ELEMENT",
                "XML_ERROR_INVALID_TOKEN",
                "XML_ERROR_INCORRECT_ENCODING",
                "XML_ERROR_EXTERNAL_ENTITY_HANDLING",
                "XML_ERROR_DUPLICATE_ATTRIBUTE",
                "XML_ERROR_BINARY_ENTITY_REF",
                "XML_ERROR_BAD_CHAR_REF",
                "XML_ERROR_ATTRIBUTE_EXTERNAL_ENTITY_REF",
                "XML_ERROR_ASYNC_ENTITY",
                "XML_ENTITY_REF_NODE",
                "XML_ENTITY_NODE",
                "XML_ENTITY_DECL_NODE",
                "XML_ELEMENT_NODE",
                "XML_ELEMENT_DECL_NODE",
                "XML_DTD_NODE",
                "XML_DOCUMENT_TYPE_NODE",
                "XML_DOCUMENT_NODE",
                "XML_DOCUMENT_FRAG_NODE",
                "XML_COMMENT_NODE",
                "XML_CDATA_SECTION_NODE",
                "XML_ATTRIBUTE_NOTATION",
                "XML_ATTRIBUTE_NODE",
                "XML_ATTRIBUTE_NMTOKENS",
                "XML_ATTRIBUTE_NMTOKEN",
                "XML_ATTRIBUTE_IDREFS",
                "XML_ATTRIBUTE_IDREF",
                "XML_ATTRIBUTE_ID",
                "XML_ATTRIBUTE_ENUMERATION",
                "XML_ATTRIBUTE_ENTITY",
                "XML_ATTRIBUTE_DECL_NODE",
                "XML_ATTRIBUTE_CDATA",
                "X509_PURPOSE_SSL_SERVER",
                "X509_PURPOSE_SSL_CLIENT",
                "X509_PURPOSE_SMIME_SIGN",
                "X509_PURPOSE_SMIME_ENCRYPT",
                "X509_PURPOSE_NS_SSL_SERVER",
                "X509_PURPOSE_CRL_SIGN",
                "X509_PURPOSE_ANY",
                "WSDL_CACHE_NONE",
                "WSDL_CACHE_MEMORY",
                "WSDL_CACHE_DISK",
                "WSDL_CACHE_BOTH",
                "VT_VARIANT",
                "VT_UNKNOWN",
                "VT_UINT",
                "VT_UI4",
                "VT_UI2",
                "VT_UI1",
                "VT_R8",
                "VT_R4",
                "VT_NULL",
                "VT_INT",
                "VT_I4",
                "VT_I2",
                "VT_I1",
                "VT_ERROR",
                "VT_EMPTY",
                "VT_DISPATCH",
                "VT_DECIMAL",
                "VT_DATE",
                "VT_CY",
                "VT_BYREF",
                "VT_BSTR",
                "VT_BOOL",
                "VT_ARRAY",
                "VARCMP_NULL",
                "VARCMP_LT",
                "VARCMP_GT",
                "VARCMP_EQ",
                "UPLOAD_ERR_PARTIAL",
                "UPLOAD_ERR_OK",
                "UPLOAD_ERR_NO_TMP_DIR",
                "UPLOAD_ERR_NO_FILE",
                "UPLOAD_ERR_INI_SIZE",
                "UPLOAD_ERR_FORM_SIZE",
                "UPLOAD_ERR_EXTENSION",
                "UPLOAD_ERR_CANT_WRITE",
                "UNKNOWN_TYPE",
                "T_XOR_EQUAL",
                "T_WHITESPACE",
                "T_WHILE",
                "T_VARIABLE",
                "T_VAR",
                "T_USE",
                "T_UNSET_CAST",
                "T_UNSET",
                "T_TRY",
                "T_THROW",
                "T_SWITCH",
                "T_STRING_VARNAME",
                "T_STRING_CAST",
                "T_STRING",
                "T_STATIC",
                "T_START_HEREDOC",
                "T_SR_EQUAL",
                "T_SR",
                "T_SL_EQUAL",
                "T_SL",
                "T_RETURN",
                "T_REQUIRE_ONCE",
                "T_REQUIRE",
                "T_PUBLIC",
                "T_PROTECTED",
                "T_PRIVATE",
                "T_PRINT",
                "T_PLUS_EQUAL",
                "T_PAAMAYIM_NEKUDOTAYIM",
                "T_OR_EQUAL",
                "T_OPEN_TAG_WITH_ECHO",
                "T_OPEN_TAG",
                "T_OBJECT_OPERATOR",
                "T_OBJECT_CAST",
                "T_NUM_STRING",
                "T_NS_SEPARATOR",
                "T_NS_C",
                "T_NEW",
                "T_NAMESPACE",
                "T_MUL_EQUAL",
                "T_MOD_EQUAL",
                "T_MINUS_EQUAL",
                "T_METHOD_C",
                "T_LOGICAL_XOR",
                "T_LOGICAL_OR",
                "T_LOGICAL_AND",
                "T_LNUMBER",
                "T_LIST",
                "T_LINE",
                "T_IS_SMALLER_OR_EQUAL",
                "T_IS_NOT_IDENTICAL",
                "T_IS_NOT_EQUAL",
                "T_IS_IDENTICAL",
                "T_IS_GREATER_OR_EQUAL",
                "T_IS_EQUAL",
                "T_ISSET",
                "T_INT_CAST",
                "T_INTERFACE",
                "T_INSTANCEOF",
                "T_INLINE_HTML",
                "T_INCLUDE_ONCE",
                "T_INCLUDE",
                "T_INC",
                "T_IMPLEMENTS",
                "T_IF",
                "T_HALT_COMPILER",
                "T_GOTO",
                "T_GLOBAL",
                "T_FUNC_C",
                "T_FUNCTION",
                "T_FOREACH",
                "T_FOR",
                "T_FINAL",
                "T_FILE",
                "T_EXTENDS",
                "T_EXIT",
                "T_EVAL",
                "T_END_HEREDOC",
                "T_ENDWHILE",
                "T_ENDSWITCH",
                "T_ENDIF",
                "T_ENDFOREACH",
                "T_ENDFOR",
                "T_ENDDECLARE",
                "T_ENCAPSED_AND_WHITESPACE",
                "T_EMPTY",
                "T_ELSEIF",
                "T_ELSE",
                "T_ECHO",
                "T_DOUBLE_COLON",
                "T_DOUBLE_CAST",
                "T_DOUBLE_ARROW",
                "T_DOLLAR_OPEN_CURLY_BRACES",
                "T_DOC_COMMENT",
                "T_DO",
                "T_DNUMBER",
                "T_DIV_EQUAL",
                "T_DIR",
                "T_DEFAULT",
                "T_DECLARE",
                "T_DEC",
                "T_CURLY_OPEN",
                "T_CONTINUE",
                "T_CONSTANT_ENCAPSED_STRING",
                "T_CONST",
                "T_CONCAT_EQUAL",
                "T_COMMENT",
                "T_CLOSE_TAG",
                "T_CLONE",
                "T_CLASS_C",
                "T_CLASS",
                "T_CHARACTER",
                "T_CATCH",
                "T_CASE",
                "T_BREAK",
                "T_BOOL_CAST",
                "T_BOOLEAN_OR",
                "T_BOOLEAN_AND",
                "T_BAD_CHARACTER",
                "T_AS",
                "T_ARRAY_CAST",
                "T_ARRAY",
                "T_AND_EQUAL",
                "T_ABSTRACT",
                "TRUE",
                "TIDY_TAG_XMP",
                "TIDY_TAG_WBR",
                "TIDY_TAG_VAR",
                "TIDY_TAG_UNKNOWN",
                "TIDY_TAG_UL",
                "TIDY_TAG_U",
                "TIDY_TAG_TT",
                "TIDY_TAG_TR",
                "TIDY_TAG_TITLE",
                "TIDY_TAG_THEAD",
                "TIDY_TAG_TH",
                "TIDY_TAG_TFOOT",
                "TIDY_TAG_TEXTAREA",
                "TIDY_TAG_TD",
                "TIDY_TAG_TBODY",
                "TIDY_TAG_TABLE",
                "TIDY_TAG_SUP",
                "TIDY_TAG_SUB",
                "TIDY_TAG_STYLE",
                "TIDY_TAG_STRONG",
                "TIDY_TAG_STRIKE",
                "TIDY_TAG_SPAN",
                "TIDY_TAG_SPACER",
                "TIDY_TAG_SMALL",
                "TIDY_TAG_SERVLET",
                "TIDY_TAG_SERVER",
                "TIDY_TAG_SELECT",
                "TIDY_TAG_SCRIPT",
                "TIDY_TAG_SAMP",
                "TIDY_TAG_S",
                "TIDY_TAG_RUBY",
                "TIDY_TAG_RTC",
                "TIDY_TAG_RT",
                "TIDY_TAG_RP",
                "TIDY_TAG_RBC",
                "TIDY_TAG_RB",
                "TIDY_TAG_Q",
                "TIDY_TAG_PRE",
                "TIDY_TAG_PLAINTEXT",
                "TIDY_TAG_PARAM",
                "TIDY_TAG_P",
                "TIDY_TAG_OPTION",
                "TIDY_TAG_OPTGROUP",
                "TIDY_TAG_OL",
                "TIDY_TAG_OBJECT",
                "TIDY_TAG_NOSCRIPT",
                "TIDY_TAG_NOSAVE",
                "TIDY_TAG_NOLAYER",
                "TIDY_TAG_NOFRAMES",
                "TIDY_TAG_NOEMBED",
                "TIDY_TAG_NOBR",
                "TIDY_TAG_MULTICOL",
                "TIDY_TAG_META",
                "TIDY_TAG_MENU",
                "TIDY_TAG_MARQUEE",
                "TIDY_TAG_MAP",
                "TIDY_TAG_LISTING",
                "TIDY_TAG_LINK",
                "TIDY_TAG_LI",
                "TIDY_TAG_LEGEND",
                "TIDY_TAG_LAYER",
                "TIDY_TAG_LABEL",
                "TIDY_TAG_KEYGEN",
                "TIDY_TAG_KBD",
                "TIDY_TAG_ISINDEX",
                "TIDY_TAG_INS",
                "TIDY_TAG_INPUT",
                "TIDY_TAG_IMG",
                "TIDY_TAG_ILAYER",
                "TIDY_TAG_IFRAME",
                "TIDY_TAG_I",
                "TIDY_TAG_HTML",
                "TIDY_TAG_HR",
                "TIDY_TAG_HEAD",
                "TIDY_TAG_H6",
                "TIDY_TAG_H5",
                "TIDY_TAG_H4",
                "TIDY_TAG_H3",
                "TIDY_TAG_H2",
                "TIDY_TAG_H1",
                "TIDY_TAG_FRAMESET",
                "TIDY_TAG_FRAME",
                "TIDY_TAG_FORM",
                "TIDY_TAG_FONT",
                "TIDY_TAG_FIELDSET",
                "TIDY_TAG_EMBED",
                "TIDY_TAG_EM",
                "TIDY_TAG_DT",
                "TIDY_TAG_DL",
                "TIDY_TAG_DIV",
                "TIDY_TAG_DIR",
                "TIDY_TAG_DFN",
                "TIDY_TAG_DEL",
                "TIDY_TAG_DD",
                "TIDY_TAG_COMMENT",
                "TIDY_TAG_COLGROUP",
                "TIDY_TAG_COL",
                "TIDY_TAG_CODE",
                "TIDY_TAG_CITE",
                "TIDY_TAG_CENTER",
                "TIDY_TAG_CAPTION",
                "TIDY_TAG_BUTTON",
                "TIDY_TAG_BR",
                "TIDY_TAG_BODY",
                "TIDY_TAG_BLOCKQUOTE",
                "TIDY_TAG_BLINK",
                "TIDY_TAG_BIG",
                "TIDY_TAG_BGSOUND",
                "TIDY_TAG_BDO",
                "TIDY_TAG_BASEFONT",
                "TIDY_TAG_BASE",
                "TIDY_TAG_B",
                "TIDY_TAG_AREA",
                "TIDY_TAG_APPLET",
                "TIDY_TAG_ALIGN",
                "TIDY_TAG_ADDRESS",
                "TIDY_TAG_ACRONYM",
                "TIDY_TAG_ABBR",
                "TIDY_TAG_A",
                "TIDY_NODETYPE_XMLDECL",
                "TIDY_NODETYPE_TEXT",
                "TIDY_NODETYPE_STARTEND",
                "TIDY_NODETYPE_START",
                "TIDY_NODETYPE_SECTION",
                "TIDY_NODETYPE_ROOT",
                "TIDY_NODETYPE_PROCINS",
                "TIDY_NODETYPE_PHP",
                "TIDY_NODETYPE_JSTE",
                "TIDY_NODETYPE_END",
                "TIDY_NODETYPE_DOCTYPE",
                "TIDY_NODETYPE_COMMENT",
                "TIDY_NODETYPE_CDATA",
                "TIDY_NODETYPE_ASP",
                "TCP_NODELAY",
                "SUNFUNCS_RET_TIMESTAMP",
                "SUNFUNCS_RET_STRING",
                "SUNFUNCS_RET_DOUBLE",
                "STR_PAD_RIGHT",
                "STR_PAD_LEFT",
                "STR_PAD_BOTH",
                "STREAM_USE_PATH",
                "STREAM_URL_STAT_QUIET",
                "STREAM_URL_STAT_LINK",
                "STREAM_SOCK_STREAM",
                "STREAM_SOCK_SEQPACKET",
                "STREAM_SOCK_RDM",
                "STREAM_SOCK_RAW",
                "STREAM_SOCK_DGRAM",
                "STREAM_SHUT_WR",
                "STREAM_SHUT_RDWR",
                "STREAM_SHUT_RD",
                "STREAM_SERVER_LISTEN",
                "STREAM_SERVER_BIND",
                "STREAM_REPORT_ERRORS",
                "STREAM_PF_UNIX",
                "STREAM_PF_INET6",
                "STREAM_PF_INET",
                "STREAM_PEEK",
                "STREAM_OPTION_WRITE_BUFFER",
                "STREAM_OPTION_READ_TIMEOUT",
                "STREAM_OPTION_READ_BUFFER",
                "STREAM_OPTION_BLOCKING",
                "STREAM_OOB",
                "STREAM_NOTIFY_SEVERITY_WARN",
                "STREAM_NOTIFY_SEVERITY_INFO",
                "STREAM_NOTIFY_SEVERITY_ERR",
                "STREAM_NOTIFY_RESOLVE",
                "STREAM_NOTIFY_REDIRECTED",
                "STREAM_NOTIFY_PROGRESS",
                "STREAM_NOTIFY_MIME_TYPE_IS",
                "STREAM_NOTIFY_FILE_SIZE_IS",
                "STREAM_NOTIFY_FAILURE",
                "STREAM_NOTIFY_CONNECT",
                "STREAM_NOTIFY_COMPLETED",
                "STREAM_NOTIFY_AUTH_RESULT",
                "STREAM_NOTIFY_AUTH_REQUIRED",
                "STREAM_MUST_SEEK",
                "STREAM_MKDIR_RECURSIVE",
                "STREAM_IS_URL",
                "STREAM_IPPROTO_IP",
                "STREAM_IGNORE_URL",
                "STREAM_FILTER_WRITE",
                "STREAM_FILTER_READ",
                "STREAM_FILTER_ALL",
                "STREAM_ENFORCE_SAFE_MODE",
                "STREAM_CRYPTO_METHOD_TLS_SERVER",
                "STREAM_CRYPTO_METHOD_TLS_CLIENT",
                "STREAM_CRYPTO_METHOD_SSLv3_SERVER",
                "STREAM_CRYPTO_METHOD_SSLv3_CLIENT",
                "STREAM_CRYPTO_METHOD_SSLv2_SERVER",
                "STREAM_CRYPTO_METHOD_SSLv2_CLIENT",
                "STREAM_CRYPTO_METHOD_SSLv23_SERVER",
                "STREAM_CRYPTO_METHOD_SSLv23_CLIENT",
                "STREAM_CLIENT_PERSISTENT",
                "STREAM_CLIENT_CONNECT",
                "STREAM_CLIENT_ASYNC_CONNECT",
                "STREAM_CAST_FOR_SELECT",
                "STREAM_CAST_AS_STREAM",
                "STREAM_BUFFER_NONE",
                "STREAM_BUFFER_LINE",
                "STREAM_BUFFER_FULL",
                "STDOUT",
                "STDIN",
                "STDERR",
                "SQL_VARCHAR",
                "SQL_VARBINARY",
                "SQL_TINYINT",
                "SQL_TIMESTAMP",
                "SQL_TIME",
                "SQL_SMALLINT",
                "SQL_REAL",
                "SQL_ODBC_CURSORS",
                "SQL_NUMERIC",
                "SQL_LONGVARCHAR",
                "SQL_LONGVARBINARY",
                "SQL_KEYSET_SIZE",
                "SQL_INTEGER",
                "SQL_FLOAT",
                "SQL_FETCH_NEXT",
                "SQL_FETCH_FIRST",
                "SQL_DOUBLE",
                "SQL_DECIMAL",
                "SQL_DATE",
                "SQL_CUR_USE_ODBC",
                "SQL_CUR_USE_IF_NEEDED",
                "SQL_CUR_USE_DRIVER",
                "SQL_CURSOR_TYPE",
                "SQL_CURSOR_STATIC",
                "SQL_CURSOR_KEYSET_DRIVEN",
                "SQL_CURSOR_FORWARD_ONLY",
                "SQL_CURSOR_DYNAMIC",
                "SQL_CONCUR_VALUES",
                "SQL_CONCUR_ROWVER",
                "SQL_CONCUR_READ_ONLY",
                "SQL_CONCUR_LOCK",
                "SQL_CONCURRENCY",
                "SQL_CHAR",
                "SQL_BIT",
                "SQL_BINARY",
                "SQL_BIGINT",
                "SQLITE_TOOBIG",
                "SQLITE_SCHEMA",
                "SQLITE_ROW",
                "SQLITE_READONLY",
                "SQLITE_PROTOCOL",
                "SQLITE_PERM",
                "SQLITE_OK",
                "SQLITE_NUM",
                "SQLITE_NOTFOUND",
                "SQLITE_NOTADB",
                "SQLITE_NOMEM",
                "SQLITE_NOLFS",
                "SQLITE_MISUSE",
                "SQLITE_MISMATCH",
                "SQLITE_LOCKED",
                "SQLITE_IOERR",
                "SQLITE_INTERRUPT",
                "SQLITE_INTERNAL",
                "SQLITE_FULL",
                "SQLITE_FORMAT",
                "SQLITE_ERROR",
                "SQLITE_EMPTY",
                "SQLITE_DONE",
                "SQLITE_CORRUPT",
                "SQLITE_CONSTRAINT",
                "SQLITE_CANTOPEN",
                "SQLITE_BUSY",
                "SQLITE_BOTH",
                "SQLITE_AUTH",
                "SQLITE_ASSOC",
                "SQLITE_ABORT",
                "SQLITE3_TEXT",
                "SQLITE3_OPEN_READWRITE",
                "SQLITE3_OPEN_READONLY",
                "SQLITE3_OPEN_CREATE",
                "SQLITE3_NUM",
                "SQLITE3_NULL",
                "SQLITE3_INTEGER",
                "SQLITE3_FLOAT",
                "SQLITE3_BOTH",
                "SQLITE3_BLOB",
                "SQLITE3_ASSOC",
                "SO_TYPE",
                "SO_SNDTIMEO",
                "SO_SNDLOWAT",
                "SO_SNDBUF",
                "SO_REUSEADDR",
                "SO_RCVTIMEO",
                "SO_RCVLOWAT",
                "SO_RCVBUF",
                "SO_OOBINLINE",
                "SO_LINGER",
                "SO_KEEPALIVE",
                "SO_ERROR",
                "SO_DONTROUTE",
                "SO_DEBUG",
                "SO_BROADCAST",
                "SORT_STRING",
                "SORT_REGULAR",
                "SORT_NUMERIC",
                "SORT_LOCALE_STRING",
                "SORT_DESC",
                "SORT_ASC",
                "SOMAXCONN",
                "SOL_UDP",
                "SOL_TCP",
                "SOL_SOCKET",
                "SOCK_STREAM",
                "SOCK_SEQPACKET",
                "SOCK_RDM",
                "SOCK_RAW",
                "SOCK_DGRAM",
                "SOCKET_VERNOTSUPPORTED",
                "SOCKET_TRY_AGAIN",
                "SOCKET_SYSNOTREADY",
                "SOCKET_NO_RECOVERY",
                "SOCKET_NO_DATA",
                "SOCKET_NO_ADDRESS",
                "SOCKET_NOTINITIALISED",
                "SOCKET_HOST_NOT_FOUND",
                "SOCKET_EWOULDBLOCK",
                "SOCKET_EUSERS",
                "SOCKET_ETOOMANYREFS",
                "SOCKET_ETIMEDOUT",
                "SOCKET_ESTALE",
                "SOCKET_ESOCKTNOSUPPORT",
                "SOCKET_ESHUTDOWN",
                "SOCKET_EREMOTE",
                "SOCKET_EPROTOTYPE",
                "SOCKET_EPROTONOSUPPORT",
                "SOCKET_EPROCLIM",
                "SOCKET_EPFNOSUPPORT",
                "SOCKET_EOPNOTSUPP",
                "SOCKET_ENOTSOCK",
                "SOCKET_ENOTEMPTY",
                "SOCKET_ENOTCONN",
                "SOCKET_ENOPROTOOPT",
                "SOCKET_ENOBUFS",
                "SOCKET_ENETUNREACH",
                "SOCKET_ENETRESET",
                "SOCKET_ENETDOWN",
                "SOCKET_ENAMETOOLONG",
                "SOCKET_EMSGSIZE",
                "SOCKET_EMFILE",
                "SOCKET_ELOOP",
                "SOCKET_EISCONN",
                "SOCKET_EINVAL",
                "SOCKET_EINTR",
                "SOCKET_EINPROGRESS",
                "SOCKET_EHOSTUNREACH",
                "SOCKET_EHOSTDOWN",
                "SOCKET_EFAULT",
                "SOCKET_EDQUOT",
                "SOCKET_EDISCON",
                "SOCKET_EDESTADDRREQ",
                "SOCKET_ECONNRESET",
                "SOCKET_ECONNREFUSED",
                "SOCKET_ECONNABORTED",
                "SOCKET_EBADF",
                "SOCKET_EALREADY",
                "SOCKET_EAFNOSUPPORT",
                "SOCKET_EADDRNOTAVAIL",
                "SOCKET_EADDRINUSE",
                "SOCKET_EACCES",
                "SOAP_WAIT_ONE_WAY_CALLS",
                "SOAP_USE_XSI_ARRAY_TYPE",
                "SOAP_SINGLE_ELEMENT_ARRAYS",
                "SOAP_RPC",
                "SOAP_PERSISTENCE_SESSION",
                "SOAP_PERSISTENCE_REQUEST",
                "SOAP_LITERAL",
                "SOAP_FUNCTIONS_ALL",
                "SOAP_ENC_OBJECT",
                "SOAP_ENC_ARRAY",
                "SOAP_ENCODED",
                "SOAP_DOCUMENT",
                "SOAP_COMPRESSION_GZIP",
                "SOAP_COMPRESSION_DEFLATE",
                "SOAP_COMPRESSION_ACCEPT",
                "SOAP_AUTHENTICATION_DIGEST",
                "SOAP_AUTHENTICATION_BASIC",
                "SOAP_ACTOR_UNLIMATERECEIVER",
                "SOAP_ACTOR_NONE",
                "SOAP_ACTOR_NEXT",
                "SOAP_1_2",
                "SOAP_1_1",
                "SEEK_SET",
                "SEEK_END",
                "SEEK_CUR",
                "PSFS_PASS_ON",
                "PSFS_FLAG_NORMAL",
                "PSFS_FLAG_FLUSH_INC",
                "PSFS_FLAG_FLUSH_CLOSE",
                "PSFS_FEED_ME",
                "PSFS_ERR_FATAL",
                "PREG_SPLIT_OFFSET_CAPTURE",
                "PREG_SPLIT_NO_EMPTY",
                "PREG_SPLIT_DELIM_CAPTURE",
                "PREG_SET_ORDER",
                "PREG_RECURSION_LIMIT_ERROR",
                "PREG_PATTERN_ORDER",
                "PREG_OFFSET_CAPTURE",
                "PREG_NO_ERROR",
                "PREG_INTERNAL_ERROR",
                "PREG_GREP_INVERT",
                "PREG_BAD_UTF8_OFFSET_ERROR",
                "PREG_BAD_UTF8_ERROR",
                "PREG_BACKTRACK_LIMIT_ERROR",
                "PKCS7_TEXT",
                "PKCS7_NOVERIFY",
                "PKCS7_NOSIGS",
                "PKCS7_NOINTERN",
                "PKCS7_NOCHAIN",
                "PKCS7_NOCERTS",
                "PKCS7_NOATTR",
                "PKCS7_DETACHED",
                "PKCS7_BINARY",
                "PHP_ZTS",
                "PHP_WINDOWS_VERSION_SUITEMASK",
                "PHP_WINDOWS_VERSION_SP_MINOR",
                "PHP_WINDOWS_VERSION_SP_MAJOR",
                "PHP_WINDOWS_VERSION_PRODUCTTYPE",
                "PHP_WINDOWS_VERSION_PLATFORM",
                "PHP_WINDOWS_VERSION_MINOR",
                "PHP_WINDOWS_VERSION_MAJOR",
                "PHP_WINDOWS_VERSION_BUILD",
                "PHP_WINDOWS_NT_WORKSTATION",
                "PHP_WINDOWS_NT_SERVER",
                "PHP_WINDOWS_NT_DOMAIN_CONTROLLER",
                "PHP_VERSION_ID",
                "PHP_VERSION",
                "PHP_URL_USER",
                "PHP_URL_SCHEME",
                "PHP_URL_QUERY",
                "PHP_URL_PORT",
                "PHP_URL_PATH",
                "PHP_URL_PASS",
                "PHP_URL_HOST",
                "PHP_URL_FRAGMENT",
                "PHP_SYSCONFDIR",
                "PHP_SHLIB_SUFFIX",
                "PHP_SAPI",
                "PHP_ROUND_HALF_UP",
                "PHP_ROUND_HALF_ODD",
                "PHP_ROUND_HALF_EVEN",
                "PHP_ROUND_HALF_DOWN",
                "PHP_RELEASE_VERSION",
                "PHP_PREFIX",
                "PHP_OUTPUT_HANDLER_START",
                "PHP_OUTPUT_HANDLER_END",
                "PHP_OUTPUT_HANDLER_CONT",
                "PHP_OS",
                "PHP_NORMAL_READ",
                "PHP_MINOR_VERSION",
                "PHP_MAXPATHLEN",
                "PHP_MAJOR_VERSION",
                "PHP_LOCALSTATEDIR",
                "PHP_LIBDIR",
                "PHP_INT_SIZE",
                "PHP_INT_MAX",
                "PHP_EXTRA_VERSION",
                "PHP_EXTENSION_DIR",
                "PHP_EOL",
                "PHP_DEBUG",
                "PHP_DATADIR",
                "PHP_CONFIG_FILE_SCAN_DIR",
                "PHP_CONFIG_FILE_PATH",
                "PHP_BINDIR",
                "PHP_BINARY_READ",
                "PGSQL_TUPLES_OK",
                "PGSQL_TRANSACTION_UNKNOWN",
                "PGSQL_TRANSACTION_INTRANS",
                "PGSQL_TRANSACTION_INERROR",
                "PGSQL_TRANSACTION_IDLE",
                "PGSQL_TRANSACTION_ACTIVE",
                "PGSQL_STATUS_STRING",
                "PGSQL_STATUS_LONG",
                "PGSQL_SEEK_SET",
                "PGSQL_SEEK_END",
                "PGSQL_SEEK_CUR",
                "PGSQL_NUM",
                "PGSQL_NONFATAL_ERROR",
                "PGSQL_FATAL_ERROR",
                "PGSQL_ERRORS_VERBOSE",
                "PGSQL_ERRORS_TERSE",
                "PGSQL_ERRORS_DEFAULT",
                "PGSQL_EMPTY_QUERY",
                "PGSQL_DML_STRING",
                "PGSQL_DML_NO_CONV",
                "PGSQL_DML_EXEC",
                "PGSQL_DML_ASYNC",
                "PGSQL_DIAG_STATEMENT_POSITION",
                "PGSQL_DIAG_SQLSTATE",
                "PGSQL_DIAG_SOURCE_LINE",
                "PGSQL_DIAG_SOURCE_FUNCTION",
                "PGSQL_DIAG_SOURCE_FILE",
                "PGSQL_DIAG_SEVERITY",
                "PGSQL_DIAG_MESSAGE_PRIMARY",
                "PGSQL_DIAG_MESSAGE_HINT",
                "PGSQL_DIAG_MESSAGE_DETAIL",
                "PGSQL_DIAG_INTERNAL_QUERY",
                "PGSQL_DIAG_INTERNAL_POSITION",
                "PGSQL_DIAG_CONTEXT",
                "PGSQL_COPY_OUT",
                "PGSQL_COPY_IN",
                "PGSQL_CONV_IGNORE_NOT_NULL",
                "PGSQL_CONV_IGNORE_DEFAULT",
                "PGSQL_CONV_FORCE_NULL",
                "PGSQL_CONNECT_FORCE_NEW",
                "PGSQL_CONNECTION_OK",
                "PGSQL_CONNECTION_BAD",
                "PGSQL_COMMAND_OK",
                "PGSQL_BOTH",
                "PGSQL_BAD_RESPONSE",
                "PGSQL_ASSOC",
                "PEAR_INSTALL_DIR",
                "PEAR_EXTENSION_DIR",
                "PCRE_VERSION",
                "PATH_SEPARATOR",
                "PATHINFO_FILENAME",
                "PATHINFO_EXTENSION",
                "PATHINFO_DIRNAME",
                "PATHINFO_BASENAME",
                "OPENSSL_VERSION_TEXT",
                "OPENSSL_VERSION_NUMBER",
                "OPENSSL_TLSEXT_SERVER_NAME",
                "OPENSSL_SSLV23_PADDING",
                "OPENSSL_PKCS1_PADDING",
                "OPENSSL_PKCS1_OAEP_PADDING",
                "OPENSSL_NO_PADDING",
                "OPENSSL_KEYTYPE_RSA",
                "OPENSSL_KEYTYPE_EC",
                "OPENSSL_KEYTYPE_DSA",
                "OPENSSL_KEYTYPE_DH",
                "OPENSSL_CIPHER_RC2_64",
                "OPENSSL_CIPHER_RC2_40",
                "OPENSSL_CIPHER_RC2_128",
                "OPENSSL_CIPHER_DES",
                "OPENSSL_CIPHER_3DES",
                "OPENSSL_ALGO_SHA1",
                "OPENSSL_ALGO_MD5",
                "OPENSSL_ALGO_MD4",
                "OPENSSL_ALGO_DSS1",
                "ODBC_TYPE",
                "ODBC_BINMODE_RETURN",
                "ODBC_BINMODE_PASSTHRU",
                "ODBC_BINMODE_CONVERT",
                "NULL",
                "NORM_IGNOREWIDTH",
                "NORM_IGNORESYMBOLS",
                "NORM_IGNORENONSPACE",
                "NORM_IGNOREKANATYPE",
                "NORM_IGNORECASE",
                "NAN",
                "M_SQRTPI",
                "M_SQRT3",
                "M_SQRT2",
                "M_SQRT1_2",
                "M_PI_4",
                "M_PI_2",
                "M_PI",
                "M_LOG2E",
                "M_LOG10E",
                "M_LNPI",
                "M_LN2",
                "M_LN10",
                "M_EULER",
                "M_E",
                "M_2_SQRTPI",
                "M_2_PI",
                "M_1_PI",
                "MYSQL_NUM",
                "MYSQL_CLIENT_SSL",
                "MYSQL_CLIENT_INTERACTIVE",
                "MYSQL_CLIENT_IGNORE_SPACE",
                "MYSQL_CLIENT_COMPRESS",
                "MYSQL_BOTH",
                "MYSQL_ASSOC",
                "MYSQLI_ZEROFILL_FLAG",
                "MYSQLI_USE_RESULT",
                "MYSQLI_UNSIGNED_FLAG",
                "MYSQLI_UNIQUE_KEY_FLAG",
                "MYSQLI_TYPE_YEAR",
                "MYSQLI_TYPE_VAR_STRING",
                "MYSQLI_TYPE_TINY_BLOB",
                "MYSQLI_TYPE_TINY",
                "MYSQLI_TYPE_TIMESTAMP",
                "MYSQLI_TYPE_TIME",
                "MYSQLI_TYPE_STRING",
                "MYSQLI_TYPE_SHORT",
                "MYSQLI_TYPE_SET",
                "MYSQLI_TYPE_NULL",
                "MYSQLI_TYPE_NEWDECIMAL",
                "MYSQLI_TYPE_NEWDATE",
                "MYSQLI_TYPE_MEDIUM_BLOB",
                "MYSQLI_TYPE_LONG_BLOB",
                "MYSQLI_TYPE_LONGLONG",
                "MYSQLI_TYPE_LONG",
                "MYSQLI_TYPE_INTERVAL",
                "MYSQLI_TYPE_INT24",
                "MYSQLI_TYPE_GEOMETRY",
                "MYSQLI_TYPE_FLOAT",
                "MYSQLI_TYPE_ENUM",
                "MYSQLI_TYPE_DOUBLE",
                "MYSQLI_TYPE_DECIMAL",
                "MYSQLI_TYPE_DATETIME",
                "MYSQLI_TYPE_DATE",
                "MYSQLI_TYPE_CHAR",
                "MYSQLI_TYPE_BLOB",
                "MYSQLI_TYPE_BIT",
                "MYSQLI_TIMESTAMP_FLAG",
                "MYSQLI_STORE_RESULT",
                "MYSQLI_STMT_ATTR_UPDATE_MAX_LENGTH",
                "MYSQLI_STMT_ATTR_PREFETCH_ROWS",
                "MYSQLI_STMT_ATTR_CURSOR_TYPE",
                "MYSQLI_SET_FLAG",
                "MYSQLI_SET_CHARSET_NAME",
                "MYSQLI_SERVER_QUERY_WAS_SLOW",
                "MYSQLI_SERVER_QUERY_NO_INDEX_USED",
                "MYSQLI_SERVER_QUERY_NO_GOOD_INDEX_USED",
                "MYSQLI_REPORT_STRICT",
                "MYSQLI_REPORT_OFF",
                "MYSQLI_REPORT_INDEX",
                "MYSQLI_REPORT_ERROR",
                "MYSQLI_REPORT_ALL",
                "MYSQLI_REFRESH_THREADS",
                "MYSQLI_REFRESH_TABLES",
                "MYSQLI_REFRESH_STATUS",
                "MYSQLI_REFRESH_SLAVE",
                "MYSQLI_REFRESH_MASTER",
                "MYSQLI_REFRESH_LOG",
                "MYSQLI_REFRESH_HOSTS",
                "MYSQLI_REFRESH_GRANT",
                "MYSQLI_REFRESH_BACKUP_LOG",
                "MYSQLI_READ_DEFAULT_GROUP",
                "MYSQLI_READ_DEFAULT_FILE",
                "MYSQLI_PRI_KEY_FLAG",
                "MYSQLI_PART_KEY_FLAG",
                "MYSQLI_OPT_NET_READ_BUFFER_SIZE",
                "MYSQLI_OPT_NET_CMD_BUFFER_SIZE",
                "MYSQLI_OPT_LOCAL_INFILE",
                "MYSQLI_OPT_INT_AND_FLOAT_NATIVE",
                "MYSQLI_OPT_CONNECT_TIMEOUT",
                "MYSQLI_ON_UPDATE_NOW_FLAG",
                "MYSQLI_NUM_FLAG",
                "MYSQLI_NUM",
                "MYSQLI_NO_DEFAULT_VALUE_FLAG",
                "MYSQLI_NO_DATA",
                "MYSQLI_NOT_NULL_FLAG",
                "MYSQLI_MULTIPLE_KEY_FLAG",
                "MYSQLI_INIT_COMMAND",
                "MYSQLI_GROUP_FLAG",
                "MYSQLI_ENUM_FLAG",
                "MYSQLI_DEBUG_TRACE_ENABLED",
                "MYSQLI_DATA_TRUNCATED",
                "MYSQLI_CURSOR_TYPE_SCROLLABLE",
                "MYSQLI_CURSOR_TYPE_READ_ONLY",
                "MYSQLI_CURSOR_TYPE_NO_CURSOR",
                "MYSQLI_CURSOR_TYPE_FOR_UPDATE",
                "MYSQLI_CLIENT_SSL",
                "MYSQLI_CLIENT_NO_SCHEMA",
                "MYSQLI_CLIENT_INTERACTIVE",
                "MYSQLI_CLIENT_IGNORE_SPACE",
                "MYSQLI_CLIENT_FOUND_ROWS",
                "MYSQLI_CLIENT_COMPRESS",
                "MYSQLI_BOTH",
                "MYSQLI_BLOB_FLAG",
                "MYSQLI_BINARY_FLAG",
                "MYSQLI_AUTO_INCREMENT_FLAG",
                "MYSQLI_ASYNC",
                "MYSQLI_ASSOC",
                "MSG_WAITALL",
                "MSG_PEEK",
                "MSG_OOB",
                "MSG_DONTROUTE",
                "MK_E_UNAVAILABLE",
                "MCRYPT_XTEA",
                "MCRYPT_WAKE",
                "MCRYPT_TWOFISH",
                "MCRYPT_TRIPLEDES",
                "MCRYPT_THREEWAY",
                "MCRYPT_SKIPJACK",
                "MCRYPT_SERPENT",
                "MCRYPT_SAFERPLUS",
                "MCRYPT_SAFER64",
                "MCRYPT_SAFER128",
                "MCRYPT_RIJNDAEL_256",
                "MCRYPT_RIJNDAEL_192",
                "MCRYPT_RIJNDAEL_128",
                "MCRYPT_RC6",
                "MCRYPT_RC2",
                "MCRYPT_RAND",
                "MCRYPT_PANAMA",
                "MCRYPT_MODE_STREAM",
                "MCRYPT_MODE_OFB",
                "MCRYPT_MODE_NOFB",
                "MCRYPT_MODE_ECB",
                "MCRYPT_MODE_CFB",
                "MCRYPT_MODE_CBC",
                "MCRYPT_MARS",
                "MCRYPT_LOKI97",
                "MCRYPT_IDEA",
                "MCRYPT_GOST",
                "MCRYPT_ENIGNA",
                "MCRYPT_ENCRYPT",
                "MCRYPT_DEV_URANDOM",
                "MCRYPT_DEV_RANDOM",
                "MCRYPT_DES",
                "MCRYPT_DECRYPT",
                "MCRYPT_CRYPT",
                "MCRYPT_CAST_256",
                "MCRYPT_CAST_128",
                "MCRYPT_BLOWFISH_COMPAT",
                "MCRYPT_BLOWFISH",
                "MCRYPT_ARCFOUR_IV",
                "MCRYPT_ARCFOUR",
                "MCRYPT_3DES",
                "MB_OVERLOAD_STRING",
                "MB_OVERLOAD_REGEX",
                "MB_OVERLOAD_MAIL",
                "MB_CASE_UPPER",
                "MB_CASE_TITLE",
                "MB_CASE_LOWER",
                "LOG_WARNING",
                "LOG_UUCP",
                "LOG_USER",
                "LOG_SYSLOG",
                "LOG_PID",
                "LOG_PERROR",
                "LOG_ODELAY",
                "LOG_NOWAIT",
                "LOG_NOTICE",
                "LOG_NEWS",
                "LOG_NDELAY",
                "LOG_MAIL",
                "LOG_LPR",
                "LOG_KERN",
                "LOG_INFO",
                "LOG_ERR",
                "LOG_EMERG",
                "LOG_DEBUG",
                "LOG_DAEMON",
                "LOG_CRON",
                "LOG_CRIT",
                "LOG_CONS",
                "LOG_AUTHPRIV",
                "LOG_AUTH",
                "LOG_ALERT",
                "LOCK_UN",
                "LOCK_SH",
                "LOCK_NB",
                "LOCK_EX",
                "LIBXSLT_VERSION",
                "LIBXSLT_DOTTED_VERSION",
                "LIBXML_XINCLUDE",
                "LIBXML_VERSION",
                "LIBXML_PARSEHUGE",
                "LIBXML_NSCLEAN",
                "LIBXML_NOXMLDECL",
                "LIBXML_NOWARNING",
                "LIBXML_NONET",
                "LIBXML_NOERROR",
                "LIBXML_NOENT",
                "LIBXML_NOEMPTYTAG",
                "LIBXML_NOCDATA",
                "LIBXML_NOBLANKS",
                "LIBXML_LOADED_VERSION",
                "LIBXML_ERR_WARNING",
                "LIBXML_ERR_NONE",
                "LIBXML_ERR_FATAL",
                "LIBXML_ERR_ERROR",
                "LIBXML_DTDVALID",
                "LIBXML_DTDLOAD",
                "LIBXML_DTDATTR",
                "LIBXML_DOTTED_VERSION",
                "LIBXML_COMPACT",
                "LIBEXSLT_VERSION",
                "LIBEXSLT_DOTTED_VERSION",
                "LDAP_OPT_TIMELIMIT",
                "LDAP_OPT_SIZELIMIT",
                "LDAP_OPT_SERVER_CONTROLS",
                "LDAP_OPT_RESTART",
                "LDAP_OPT_REFERRALS",
                "LDAP_OPT_PROTOCOL_VERSION",
                "LDAP_OPT_NETWORK_TIMEOUT",
                "LDAP_OPT_MATCHED_DN",
                "LDAP_OPT_HOST_NAME",
                "LDAP_OPT_ERROR_STRING",
                "LDAP_OPT_ERROR_NUMBER",
                "LDAP_OPT_DEREF",
                "LDAP_OPT_DEBUG_LEVEL",
                "LDAP_OPT_CLIENT_CONTROLS",
                "LDAP_DEREF_SEARCHING",
                "LDAP_DEREF_NEVER",
                "LDAP_DEREF_FINDING",
                "LDAP_DEREF_ALWAYS",
                "LC_TIME",
                "LC_NUMERIC",
                "LC_MONETARY",
                "LC_CTYPE",
                "LC_COLLATE",
                "LC_ALL",
                "JSON_HEX_TAG",
                "JSON_HEX_QUOT",
                "JSON_HEX_APOS",
                "JSON_HEX_AMP",
                "JSON_FORCE_OBJECT",
                "JSON_ERROR_SYNTAX",
                "JSON_ERROR_STATE_MISMATCH",
                "JSON_ERROR_NONE",
                "JSON_ERROR_DEPTH",
                "JSON_ERROR_CTRL_CHAR",
                "INPUT_SESSION",
                "INPUT_SERVER",
                "INPUT_REQUEST",
                "INPUT_POST",
                "INPUT_GET",
                "INPUT_ENV",
                "INPUT_COOKIE",
                "INI_USER",
                "INI_SYSTEM",
                "INI_SCANNER_RAW",
                "INI_SCANNER_NORMAL",
                "INI_PERDIR",
                "INI_ALL",
                "INFO_VARIABLES",
                "INFO_MODULES",
                "INFO_LICENSE",
                "INFO_GENERAL",
                "INFO_ENVIRONMENT",
                "INFO_CREDITS",
                "INFO_CONFIGURATION",
                "INFO_ALL",
                "INF",
                "IMAGETYPE_XBM",
                "IMAGETYPE_WBMP",
                "IMAGETYPE_UNKNOWN",
                "IMAGETYPE_TIFF_MM",
                "IMAGETYPE_TIFF_II",
                "IMAGETYPE_SWF",
                "IMAGETYPE_SWC",
                "IMAGETYPE_PSD",
                "IMAGETYPE_PNG",
                "IMAGETYPE_JPX",
                "IMAGETYPE_JPEG2000",
                "IMAGETYPE_JPEG",
                "IMAGETYPE_JPC",
                "IMAGETYPE_JP2",
                "IMAGETYPE_JB2",
                "IMAGETYPE_IFF",
                "IMAGETYPE_ICO",
                "IMAGETYPE_GIF",
                "IMAGETYPE_COUNT",
                "IMAGETYPE_BMP",
                "ICONV_VERSION",
                "ICONV_MIME_DECODE_STRICT",
                "ICONV_MIME_DECODE_CONTINUE_ON_ERROR",
                "ICONV_IMPL",
                "HTTP_VERSION_NONE",
                "HTTP_VERSION_ANY",
                "HTTP_VERSION_1_1",
                "HTTP_VERSION_1_0",
                "HTTP_URL_STRIP_USER",
                "HTTP_URL_STRIP_QUERY",
                "HTTP_URL_STRIP_PORT",
                "HTTP_URL_STRIP_PATH",
                "HTTP_URL_STRIP_PASS",
                "HTTP_URL_STRIP_FRAGMENT",
                "HTTP_URL_STRIP_AUTH",
                "HTTP_URL_STRIP_ALL",
                "HTTP_URL_REPLACE",
                "HTTP_URL_JOIN_QUERY",
                "HTTP_URL_JOIN_PATH",
                "HTTP_URL_FROM_ENV",
                "HTTP_SUPPORT_SSLREQUESTS",
                "HTTP_SUPPORT_REQUESTS",
                "HTTP_SUPPORT_MAGICMIME",
                "HTTP_SUPPORT_EVENTS",
                "HTTP_SUPPORT_ENCODINGS",
                "HTTP_SUPPORT",
                "HTTP_SSL_VERSION_TLSv1",
                "HTTP_SSL_VERSION_SSLv3",
                "HTTP_SSL_VERSION_SSLv2",
                "HTTP_SSL_VERSION_ANY",
                "HTTP_REDIRECT_TEMP",
                "HTTP_REDIRECT_PROXY",
                "HTTP_REDIRECT_POST",
                "HTTP_REDIRECT_PERM",
                "HTTP_REDIRECT_FOUND",
                "HTTP_REDIRECT",
                "HTTP_QUERYSTRING_TYPE_STRING",
                "HTTP_QUERYSTRING_TYPE_OBJECT",
                "HTTP_QUERYSTRING_TYPE_INT",
                "HTTP_QUERYSTRING_TYPE_FLOAT",
                "HTTP_QUERYSTRING_TYPE_BOOL",
                "HTTP_QUERYSTRING_TYPE_ARRAY",
                "HTTP_PROXY_SOCKS5",
                "HTTP_PROXY_SOCKS4",
                "HTTP_PROXY_HTTP",
                "HTTP_PARAMS_RAISE_ERROR",
                "HTTP_PARAMS_DEFAULT",
                "HTTP_PARAMS_ALLOW_FAILURE",
                "HTTP_PARAMS_ALLOW_COMMA",
                "HTTP_MSG_RESPONSE",
                "HTTP_MSG_REQUEST",
                "HTTP_MSG_NONE",
                "HTTP_METH_VERSION_CONTROL",
                "HTTP_METH_UPDATE",
                "HTTP_METH_UNLOCK",
                "HTTP_METH_UNCHECKOUT",
                "HTTP_METH_TRACE",
                "HTTP_METH_REPORT",
                "HTTP_METH_PUT",
                "HTTP_METH_PROPPATCH",
                "HTTP_METH_PROPFIND",
                "HTTP_METH_POST",
                "HTTP_METH_OPTIONS",
                "HTTP_METH_MOVE",
                "HTTP_METH_MKWORKSPACE",
                "HTTP_METH_MKCOL",
                "HTTP_METH_MKACTIVITY",
                "HTTP_METH_MERGE",
                "HTTP_METH_LOCK",
                "HTTP_METH_LABEL",
                "HTTP_METH_HEAD",
                "HTTP_METH_GET",
                "HTTP_METH_DELETE",
                "HTTP_METH_COPY",
                "HTTP_METH_CONNECT",
                "HTTP_METH_CHECKOUT",
                "HTTP_METH_CHECKIN",
                "HTTP_METH_BASELINE_CONTROL",
                "HTTP_METH_ACL",
                "HTTP_IPRESOLVE_V6",
                "HTTP_IPRESOLVE_V4",
                "HTTP_IPRESOLVE_ANY",
                "HTTP_E_URL",
                "HTTP_E_SOCKET",
                "HTTP_E_RUNTIME",
                "HTTP_E_RESPONSE",
                "HTTP_E_REQUEST_POOL",
                "HTTP_E_REQUEST_METHOD",
                "HTTP_E_REQUEST",
                "HTTP_E_QUERYSTRING",
                "HTTP_E_MESSAGE_TYPE",
                "HTTP_E_MALFORMED_HEADERS",
                "HTTP_E_INVALID_PARAM",
                "HTTP_E_HEADER",
                "HTTP_E_ENCODING",
                "HTTP_ENCODING_STREAM_FLUSH_SYNC",
                "HTTP_ENCODING_STREAM_FLUSH_NONE",
                "HTTP_ENCODING_STREAM_FLUSH_FULL",
                "HTTP_DEFLATE_TYPE_ZLIB",
                "HTTP_DEFLATE_TYPE_RAW",
                "HTTP_DEFLATE_TYPE_GZIP",
                "HTTP_DEFLATE_STRATEGY_RLE",
                "HTTP_DEFLATE_STRATEGY_HUFF",
                "HTTP_DEFLATE_STRATEGY_FIXED",
                "HTTP_DEFLATE_STRATEGY_FILT",
                "HTTP_DEFLATE_STRATEGY_DEF",
                "HTTP_DEFLATE_LEVEL_MIN",
                "HTTP_DEFLATE_LEVEL_MAX",
                "HTTP_DEFLATE_LEVEL_DEF",
                "HTTP_COOKIE_SECURE",
                "HTTP_COOKIE_PARSE_RAW",
                "HTTP_COOKIE_HTTPONLY",
                "HTTP_AUTH_NTLM",
                "HTTP_AUTH_GSSNEG",
                "HTTP_AUTH_DIGEST",
                "HTTP_AUTH_BASIC",
                "HTTP_AUTH_ANY",
                "HTML_SPECIALCHARS",
                "HTML_ENTITIES",
                "HASH_HMAC",
                "GLOB_ONLYDIR",
                "GLOB_NOSORT",
                "GLOB_NOESCAPE",
                "GLOB_NOCHECK",
                "GLOB_MARK",
                "GLOB_ERR",
                "GLOB_BRACE",
                "GLOB_AVAILABLE_FLAGS",
                "FTP_TIMEOUT_SEC",
                "FTP_TEXT",
                "FTP_MOREDATA",
                "FTP_IMAGE",
                "FTP_FINISHED",
                "FTP_FAILED",
                "FTP_BINARY",
                "FTP_AUTOSEEK",
                "FTP_AUTORESUME",
                "FTP_ASCII",
                "FORCE_GZIP",
                "FORCE_DEFLATE",
                "FNM_PERIOD",
                "FNM_PATHNAME",
                "FNM_NOESCAPE",
                "FNM_CASEFOLD",
                "FILTER_VALIDATE_URL",
                "FILTER_VALIDATE_REGEXP",
                "FILTER_VALIDATE_IP",
                "FILTER_VALIDATE_INT",
                "FILTER_VALIDATE_FLOAT",
                "FILTER_VALIDATE_EMAIL",
                "FILTER_VALIDATE_BOOLEAN",
                "FILTER_UNSAFE_RAW",
                "FILTER_SANITIZE_URL",
                "FILTER_SANITIZE_STRIPPED",
                "FILTER_SANITIZE_STRING",
                "FILTER_SANITIZE_SPECIAL_CHARS",
                "FILTER_SANITIZE_NUMBER_INT",
                "FILTER_SANITIZE_NUMBER_FLOAT",
                "FILTER_SANITIZE_MAGIC_QUOTES",
                "FILTER_SANITIZE_ENCODED",
                "FILTER_SANITIZE_EMAIL",
                "FILTER_REQUIRE_SCALAR",
                "FILTER_REQUIRE_ARRAY",
                "FILTER_NULL_ON_FAILURE",
                "FILTER_FORCE_ARRAY",
                "FILTER_FLAG_STRIP_LOW",
                "FILTER_FLAG_STRIP_HIGH",
                "FILTER_FLAG_STRIP_BACKTICK",
                "FILTER_FLAG_SCHEME_REQUIRED",
                "FILTER_FLAG_QUERY_REQUIRED",
                "FILTER_FLAG_PATH_REQUIRED",
                "FILTER_FLAG_NO_RES_RANGE",
                "FILTER_FLAG_NO_PRIV_RANGE",
                "FILTER_FLAG_NO_ENCODE_QUOTES",
                "FILTER_FLAG_NONE",
                "FILTER_FLAG_IPV6",
                "FILTER_FLAG_IPV4",
                "FILTER_FLAG_HOST_REQUIRED",
                "FILTER_FLAG_ENCODE_LOW",
                "FILTER_FLAG_ENCODE_HIGH",
                "FILTER_FLAG_ENCODE_AMP",
                "FILTER_FLAG_EMPTY_STRING_NULL",
                "FILTER_FLAG_ALLOW_THOUSAND",
                "FILTER_FLAG_ALLOW_SCIENTIFIC",
                "FILTER_FLAG_ALLOW_OCTAL",
                "FILTER_FLAG_ALLOW_HEX",
                "FILTER_FLAG_ALLOW_FRACTION",
                "FILTER_DEFAULT",
                "FILTER_CALLBACK",
                "FILE_USE_INCLUDE_PATH",
                "FILE_TEXT",
                "FILE_SKIP_EMPTY_LINES",
                "FILE_NO_DEFAULT_CONTEXT",
                "FILE_IGNORE_NEW_LINES",
                "FILE_BINARY",
                "FILE_APPEND",
                "FALSE",
                "E_WARNING",
                "E_USER_WARNING",
                "E_USER_NOTICE",
                "E_USER_ERROR",
                "E_USER_DEPRECATED",
                "E_STRICT",
                "E_RECOVERABLE_ERROR",
                "E_PARSE",
                "E_NOTICE",
                "E_ERROR",
                "E_DEPRECATED",
                "E_CORE_WARNING",
                "E_CORE_ERROR",
                "E_COMPILE_WARNING",
                "E_COMPILE_ERROR",
                "E_ALL",
                "EXTR_SKIP",
                "EXTR_REFS",
                "EXTR_PREFIX_SAME",
                "EXTR_PREFIX_INVALID",
                "EXTR_PREFIX_IF_EXISTS",
                "EXTR_PREFIX_ALL",
                "EXTR_OVERWRITE",
                "EXTR_IF_EXISTS",
                "EXIF_USE_MBSTRING",
                "ENT_QUOTES",
                "ENT_NOQUOTES",
                "ENT_IGNORE",
                "ENT_COMPAT",
                "DOM_WRONG_DOCUMENT_ERR",
                "DOM_VALIDATION_ERR",
                "DOM_SYNTAX_ERR",
                "DOM_PHP_ERR",
                "DOM_NO_MODIFICATION_ALLOWED_ERR",
                "DOM_NO_DATA_ALLOWED_ERR",
                "DOM_NOT_SUPPORTED_ERR",
                "DOM_NOT_FOUND_ERR",
                "DOM_NAMESPACE_ERR",
                "DOM_INVALID_STATE_ERR",
                "DOM_INVALID_MODIFICATION_ERR",
                "DOM_INVALID_CHARACTER_ERR",
                "DOM_INVALID_ACCESS_ERR",
                "DOM_INUSE_ATTRIBUTE_ERR",
                "DOM_INDEX_SIZE_ERR",
                "DOM_HIERARCHY_REQUEST_ERR",
                "DOMSTRING_SIZE_ERR",
                "DNS_TXT",
                "DNS_SRV",
                "DNS_SOA",
                "DNS_PTR",
                "DNS_NS",
                "DNS_NAPTR",
                "DNS_MX",
                "DNS_HINFO",
                "DNS_CNAME",
                "DNS_ANY",
                "DNS_ALL",
                "DNS_AAAA",
                "DNS_A6",
                "DNS_A",
                "DISP_E_OVERFLOW",
                "DISP_E_DIVBYZERO",
                "DISP_E_BADINDEX",
                "DIRECTORY_SEPARATOR",
                "DEFAULT_INCLUDE_PATH",
                "DATE_W3C",
                "DATE_RSS",
                "DATE_RFC850",
                "DATE_RFC822",
                "DATE_RFC3339",
                "DATE_RFC2822",
                "DATE_RFC1123",
                "DATE_RFC1036",
                "DATE_ISO8601",
                "DATE_COOKIE",
                "DATE_ATOM",
                "CRYPT_STD_DES",
                "CRYPT_SHA512",
                "CRYPT_SHA256",
                "CRYPT_SALT_LENGTH",
                "CRYPT_MD5",
                "CRYPT_EXT_DES",
                "CRYPT_BLOWFISH",
                "CREDITS_SAPI",
                "CREDITS_QA",
                "CREDITS_MODULES",
                "CREDITS_GROUP",
                "CREDITS_GENERAL",
                "CREDITS_FULLPAGE",
                "CREDITS_DOCS",
                "CREDITS_ALL",
                "CP_UTF8",
                "CP_UTF7",
                "CP_THREAD_ACP",
                "CP_SYMBOL",
                "CP_OEMCP",
                "CP_MACCP",
                "CP_ACP",
                "COUNT_RECURSIVE",
                "COUNT_NORMAL",
                "CONNECTION_TIMEOUT",
                "CONNECTION_NORMAL",
                "CONNECTION_ABORTED",
                "CLSCTX_SERVER",
                "CLSCTX_REMOTE_SERVER",
                "CLSCTX_LOCAL_SERVER",
                "CLSCTX_INPROC_SERVER",
                "CLSCTX_INPROC_HANDLER",
                "CLSCTX_ALL",
                "CHAR_MAX",
                "CASE_UPPER",
                "CASE_LOWER",
                "CAL_NUM_CALS",
                "CAL_MONTH_JULIAN_SHORT",
                "CAL_MONTH_JULIAN_LONG",
                "CAL_MONTH_JEWISH",
                "CAL_MONTH_GREGORIAN_SHORT",
                "CAL_MONTH_GREGORIAN_LONG",
                "CAL_MONTH_FRENCH",
                "CAL_JULIAN",
                "CAL_JEWISH_ADD_GERESHAYIM",
                "CAL_JEWISH_ADD_ALAFIM_GERESH",
                "CAL_JEWISH_ADD_ALAFIM",
                "CAL_JEWISH",
                "CAL_GREGORIAN",
                "CAL_FRENCH",
                "CAL_EASTER_ROMAN",
                "CAL_EASTER_DEFAULT",
                "CAL_EASTER_ALWAYS_JULIAN",
                "CAL_EASTER_ALWAYS_GREGORIAN",
                "CAL_DOW_SHORT",
                "CAL_DOW_LONG",
                "CAL_DOW_DAYNO",
                "ASSERT_WARNING",
                "ASSERT_QUIET_EVAL",
                "ASSERT_CALLBACK",
                "ASSERT_BAIL",
                "ASSERT_ACTIVE",
                "APACHE_MAP",
                "AF_UNIX",
                "AF_INET6",
                "AF_INET"
              ],
              boundary: "\\b"
            },
            openTag: { values: ["<?php"], boundary: "\\s" },
            shortOpenTag: { values: ["<?=", "<?"], boundary: "" },
            closeTag: { values: ["?>"], boundary: "" }
          },
          scopes: {
            string: [
              ['"', '"', a.util.escapeSequences.concat(['\\"'])],
              ["'", "'", ["\\'", "\\\\"]]
            ],
            comment: [
              ["//", "\n", null, !0],
              ["/*", "*/"],
              ["#", "\n", null, !0]
            ],
            variable: [
              ["$", { length: 1, regex: /[^\$A-Za-z0-9_]/ }, null, !0]
            ]
          },
          customParseRules: [function(a) {
            var b, c = "<<<", d = a.reader.getLine(), e = a.reader.getColumn(),
              f = "", g = !1;
            if (
              "<" !== a.reader.current() || "<<" !== a.reader.peek(2)
            ) {
              return null;
            }
            for (
              a.reader.read(2),
                b = a.reader.peek();
              b !== a.reader.EOF && "\n" !== b;
            ) {
              c += a.reader.read(),
                "'" !== b ? f += a.reader.current() : g = !0,
                b = a.reader.peek();
            }
            if (b !== a.reader.EOF) {
              for (
                c += a.reader.read();
                a.reader.peek() !== a.reader.EOF &&
                a.reader.peek(f.length + 2) !== "\n" + f + ";";
              ) {
                c += a.reader.read();
              }
              a.reader.peek() !== a.reader.EOF &&
                (c += a.reader.read(f.length + 1));
            }
            return a.createToken(g ? "nowdoc" : "heredoc", c, d, e);
          }],
          identFirstLetter: /[A-Za-z_]/,
          identAfterFirstLetter: /\w/,
          namedIdentRules: {
            custom: [function(b) {
              var c, d = a.util.getPreviousNonWsToken(b.tokens, b.index);
              return d && "keyword" === d.name && "new" === d.value
                ? (c = a.util.getNextNonWsToken(b.tokens, b.index),
                  c && "operator" === c.name && "\\" === c.value ? !1 : !0)
                : !1;
            }, function(b) {
              var c, d, e = a.util.getNextNonWsToken(b.tokens, b.index);
              if (
                !e || "punctuation" !== e.name || ";" !== e.value &&
                "," !== e.value
              ) {
                return !1;
              }
              for (d = b.index; c = b.tokens[--d];) {
                if (
                  !("ident" === c.name || "default" === c.name ||
                    "operator" === c.name && "\\" === c.value ||
                    "punctuation" === c.name && "," === c.value)
                ) {
                  return "keyword" === c.name && "use" === c.value;
                }
              }
              return !1;
            }, function(b) {
              var d, e, f, g = a.util.getNextNonWsToken(b.tokens, b.index);
              if (g && "operator" === g.name && "\\" === g.value) return !1;
              for (e = b.index, f = b.tokens[e]; (d = b.tokens[--e]) !== c;) {
                if (
                  "keyword" === d.name &&
                  ("new" === d.value || "instanceof" === d.value)
                ) {
                  return !0;
                }
                if ("default" !== d.name) {
                  if ("ident" !== d.name) {
                    if ("operator" !== d.name || "\\" !== d.value) break;
                    if (f && "ident" !== f.name) return !1;
                    f = d;
                  } else {
                    if (f && "ident" === f.name) return !1;
                    f = d;
                  }
                }
              }
              return !1;
            }],
            follows: [
              [
                { token: "ident" },
                a.util.whitespace,
                { token: "keyword", values: ["extends", "implements"] },
                a.util.whitespace
              ],
              [
                {
                  token: "keyword",
                  values: ["class", "interface", "abstract", "final"]
                },
                a.util.whitespace
              ]
            ],
            precedes: [
              [a.util.whitespace, { token: "operator", values: ["::"] }],
              [{ token: "default" }, { token: "variable" }]
            ],
            between: [
              {
                opener: { token: "keyword", values: ["implements"] },
                closer: { token: "punctuation", values: ["{"] }
              }
            ]
          },
          operators: [
            "::",
            "->",
            "++",
            "+=",
            "+",
            "--",
            "-=",
            "-",
            "*=",
            "*",
            "/=",
            "/",
            "%=",
            "%",
            "&&",
            "||",
            "|=",
            "|",
            "&=",
            "&",
            "^=",
            "^",
            ">>=",
            ">>",
            "<<=",
            "<<",
            "<=",
            "<",
            ">=",
            ">",
            "===",
            "==",
            "!==",
            "!=",
            "!",
            "~",
            "?:",
            "?",
            ":",
            ".=",
            ".",
            "=>",
            "=",
            "\\"
          ]
        }
      );
    }(this.Sunlight, document),
    function(a, b) {
      if (
        a === b || a.registerLanguage === b
      ) {
        throw "Include sunlight.js before including language files";
      }
      a.registerLanguage(
        "powershell",
        {
          scopes: {
            string: [['"', '"', ['\\"', "\\\\"]], ["'", "'", ["\\'", "\\\\"]]],
            comment: [["#", "\n", null, !0]]
          },
          customParseRules: [function() {
            var b = [
              "-not",
              "-band",
              "-bor",
              "bnot",
              "-replace",
              "-ireplace",
              "-creplace",
              "-and",
              "-or",
              "-isnot",
              "-is",
              "-as",
              "-F",
              "-lt",
              "-le",
              "-gt",
              "-ge",
              "-eq",
              "-ne",
              "-contains",
              "-notcontains",
              "-like",
              "-notlike",
              "-match",
              "-notmatch"
            ], c = [
              "elseif",
              "begin",
              "function",
              "for",
              "foreach",
              "return",
              "else",
              "trap",
              "while",
              "using",
              "do",
              "data",
              "dynamicparam",
              "class",
              "define",
              "until",
              "end",
              "break",
              "if",
              "throw",
              "param",
              "continue",
              "finally",
              "in",
              "switch",
              "exit",
              "filter",
              "from",
              "try",
              "process",
              "var",
              "catch"
            ];
            return function(d) {
              var e, f, g = d.reader.current(), h = d.reader.getLine(),
                i = d.reader.getColumn();
              if (
                !/[A-Za-z_-]/.test(d.reader.current()) ||
                !/[\w-]/.test(d.reader.peek())
              ) {
                return null;
              }
              for (; (e = d.reader.peek()) && /[\w-]/.test(e);) {g += d.reader
                  .read();}
              return f = a.util.contains(b, g)
                ? "specialOperator"
                : a.util.contains(c, g) ? "keyword"
                  : "-" === g.charAt(0) ? "switch" : "ident",
                d.createToken(f, g, h, i);
            };
          }(), function() {
            var b = /[!@#%&,\.\s]/, c = [
              "$$",
              "$?",
              "$^",
              "$_",
              "$ARGS",
              "$CONSOLEFILENAME",
              "$ERROR",
              "$EVENT",
              "$EVENTSUBSCRIBER",
              "$EXECUTIONCONTEXT",
              "$FALSE",
              "$FOREACH",
              "$HOME",
              "$HOST",
              "$INPUT",
              "$LASTEXITCODE",
              "$MATCHES",
              "$MYINVOCATION",
              "$NESTEDPROMPTLEVEL",
              "$NULL",
              "$PID",
              "$PROFILE",
              "$PSBOUNDPARAMETERS",
              "$PSCMDLET",
              "$PSCULTURE",
              "$PSDEBUGCONTEXT",
              "$PSHOME",
              "$PSSCRIPTROOT",
              "$PSUICULTURE",
              "$PSVERSIONTABLE",
              "$PWD",
              "$SENDER",
              "$SHELLID",
              "$SOURCEARGS",
              "$SOURCEEVENTARGS",
              "$THIS",
              "$TRUE"
            ];
            return function(d) {
              var e, f = "$", g = d.reader.getLine(), h = d.reader.getColumn();
              if (
                "$" !== d.reader.current() || b.test(d.reader.peek())
              ) {
                return null;
              }
              for (; (e = d.reader.peek()) && !b.test(e);) {f += d.reader
                  .read();}
              return d.createToken(
                a.util.contains(c, f.toUpperCase())
                  ? "specialVariable"
                  : "variable",
                f,
                g,
                h
              );
            };
          }()],
          namedIdentRules: { custom: [function(b) {
            var c = b.tokens[b.index - 1];
            return c
              ? "default" === c.name && c.value.indexOf(a.util.eol) >= 0
                ? (c = b.tokens[b.index - 2],
                  c && "operator" === c.name && "`" === c.value ? !1 : !0)
                : (c = a.util.getPreviousNonWsToken(b.tokens, b.index),
                  c &&
                    ("operator" === c.name && "=" === c.value ||
                      "punctuation" === c.name && "{" === c.value)
                    ? !0
                    : !1)
              : !0;
          }, function(b) {
            var c, d = a.util.getNextNonWsToken(b.tokens, b.index);
            return d && "operator" === d.name && "." === d.value ? !1
              : (c = a.util.createBetweenRule(
                b.index,
                { token: "punctuation", values: ["["] },
                { token: "punctuation", values: ["]"] }
              ),
                c(b.tokens) ? !0 : !1);
          }] },
          operators: [
            "@(",
            "::",
            "..",
            ".",
            "=",
            "!=",
            "!",
            "|",
            ">>",
            ">",
            "++",
            "+=",
            "+",
            "`",
            "*=",
            "*",
            "/=",
            "/",
            "--",
            "-=",
            "-",
            "%{",
            "%=",
            "%",
            "${",
            "&"
          ]
        }
      );
    }(this.Sunlight),
    function(a, b) {
      if (
        a === b || a.registerLanguage === b
      ) { 
        throw "Include sunlight.js before including language files";
      }
      a.registerLanguage(
        "python",
        {
          keywords: [
            "False",
            "class",
            "finally",
            "is",
            "return",
            "None",
            "continue",
            "for",
            "lambda",
            "try",
            "True",
            "def",
            "from",
            "nonlocal",
            "while",
            "and",
            "del",
            "global",
            "not",
            "with",
            "as",
            "elif",
            "if",
            "or",
            "yield",
            "assert",
            "else",
            "import",
            "pass",
            "break",
            "except",
            "in",
            "raise"
          ],
          customTokens: {
            ellipsis: { values: ["..."], boundary: "" },
            delimiter: {
              values: [
                "(",
                ")",
                "[",
                "]",
                "{",
                "}",
                ",",
                ":",
                ".",
                ";",
                "@",
                "=",
                "+=",
                "-=",
                "*=",
                "/=",
                "//=",
                "%=",
                "&=",
                "|=",
                "^=",
                ">>=",
                "<<=",
                "**="
              ],
              boundary: ""
            },
            constant: {
              values: [
                "NotImplemented",
                "Ellipsis",
                "False",
                "True",
                "None",
                "__debug__"
              ],
              boundary: "\\b"
            },
            attribute: {
              values: [
                "__doc__",
                "__name__",
                "__module__",
                "__defaults__",
                "__code__",
                "__globals__",
                "__dict__",
                "__closure__",
                "__annotations__",
                "__kwedefaults__",
                "__self__",
                "__func__",
                "__bases__"
              ],
              boundary: "\\b"
            },
            specialMethod: {
              values: [
                "__next__",
                "__new__",
                "__init__",
                "__del__",
                "__repr__",
                "__str__",
                "__format__",
                "__lt__",
                "__le__",
                "__eq__",
                "__ne__",
                "__gt__",
                "__ge__",
                "__hash__",
                "__bool__",
                "__call__",
                "__prepare__",
                "__getattr__",
                "__getattribute__",
                "__setattr__",
                "__setattribute__",
                "__delattr__",
                "__dir__",
                "__get__",
                "__set__",
                "__delete__",
                "__slots__",
                "__instancecheck__",
                "__subclasscheck__",
                "__getitem__",
                "__setitem__",
                "__delitem__",
                "__iter__",
                "__reversed__",
                "__contains__",
                "__add__",
                "__sub__",
                "__mul__",
                "__truediv__",
                "__floordiv__",
                "__mod__",
                "__divmod__",
                "__pow__",
                "__lshift__",
                "__rshift__",
                "__and__",
                "__xor__",
                "__or__",
                "__radd__",
                "__rsub__",
                "__rmul__",
                "__rtruediv__",
                "__rfloordiv__",
                "__rmod__",
                "__rdivmod__",
                "__rpow__",
                "__rlshift__",
                "__rrshift__",
                "__rand__",
                "__xror__",
                "__ror__",
                "__iadd__",
                "__isub__",
                "__imul__",
                "__itruediv__",
                "__ifloordiv__",
                "__imod__",
                "__idivmod__",
                "__ipow__",
                "__ilshift__",
                "__irshift__",
                "__iand__",
                "__xror__",
                "__ior__",
                "__neg__",
                "__pos__",
                "__abs__",
                "__invert__",
                "__complex__",
                "__int__",
                "__float__",
                "__round__",
                "__index__",
                "__enter__",
                "__exit__"
              ],
              boundary: "\\b"
            },
            "function": {
              values: [
                "abs",
                "dict",
                "help",
                "min",
                "setattr",
                "all",
                "dir",
                "hex",
                "next",
                "slice",
                "any",
                "divmod",
                "id",
                "object",
                "sorted",
                "ascii",
                "enumerate",
                "input",
                "oct",
                "staticmethod",
                "bin",
                "eval",
                "int",
                "open",
                "str",
                "bool",
                "exec",
                "isinstance",
                "ord",
                "sum",
                "bytearray",
                "filter",
                "issubclass",
                "pow",
                "super",
                "bytes",
                "float",
                "iter",
                "print",
                "tuple",
                "callable",
                "format",
                "len",
                "property",
                "type",
                "chr",
                "frozenset",
                "list",
                "range",
                "vars",
                "classmethod",
                "getattr",
                "locals",
                "repr",
                "zip",
                "compile",
                "globals",
                "map",
                "reversed",
                "__import__",
                "complex",
                "hasattr",
                "max",
                "round",
                "delattr",
                "hash",
                "memoryview",
                "set"
              ],
              boundary: "\\b"
            }
          },
          scopes: {
            longString: [
              ['"""', '"""', a.util.escapeSequences.concat(['\\"'])],
              ["'''", "'''", a.util.escapeSequences.concat(["\\'"])]
            ],
            rawLongString: [
              ['r"""', '"""'],
              ['R"""', '"""'],
              ["r'''", "'''"],
              ["R'''", "'''"]
            ],
            binaryLongString: [
              ['br"""', '"""'],
              ['bR"""', '"""'],
              ['Br"""', '"""'],
              ['BR"""', '"""'],
              ["br'''", "'''"],
              ["bR'''", "'''"],
              ["Br'''", "'''"],
              ["BR'''", "'''"],
              ['b"""', '"""', a.util.escapeSequences.concat(['\\"'])],
              ['B"""', '"""', a.util.escapeSequences.concat(['\\"'])],
              ["b'''", "'''", a.util.escapeSequences.concat(["\\'"])],
              ["B'''", "'''", a.util.escapeSequences.concat(["\\'"])]
            ],
            string: [
              ['"', '"', a.util.escapeSequences.concat(['\\"'])],
              ["'", "'", a.util.escapeSequences.concat(["\\'", "\\\\"])]
            ],
            rawString: [['r"', '"'], ['R"', '"'], ["r'", "'"], ["R'", "'"]],
            binaryString: [
              ['b"', '"', a.util.escapeSequences.concat(['\\"'])],
              ["b'", "'", a.util.escapeSequences.concat(["\\'"])],
              ['B"', '"', a.util.escapeSequences.concat(['\\"'])],
              ["B'", "'", a.util.escapeSequences.concat(["\\'"])],
              ['br"', '"'],
              ['bR"', '"'],
              ['Br"', '"'],
              ['BR"', '"'],
              ["br'", "'"],
              ["bR'", "'"],
              ["Br'", "'"],
              ["BR'", "'"]
            ],
            comment: [["#", "\n", null, !0]]
          },
          identFirstLetter: /[A-Za-z_]/,
          identAfterFirstLetter: /\w/,
          namedIdentRules: {
            follows: [
              [
                {
                  token: "keyword",
                  values: ["class", "def", "raise", "except"]
                },
                a.util.whitespace
              ]
            ]
          },
          operators: [
            "+",
            "-",
            "**",
            "*",
            "//",
            "/",
            "%",
            "&",
            "|",
            "^",
            "~",
            "<<",
            "<=",
            "<",
            ">>",
            ">=",
            ">",
            "==",
            "!="
          ]
        }
      );
    }(this.Sunlight),
    function(a, b) {
      if (
        a === b || a.registerLanguage === b
      ) { 
        throw "Include sunlight.js before including language files";
      }
      a.registerLanguage(
        "ruby",
        {
          keywords: [
            "BEGIN",
            "END",
            "__ENCODING__",
            "__END__",
            "__FILE__",
            "__LINE__",
            "alias",
            "and",
            "begin",
            "break",
            "case",
            "class",
            "def",
            "defined?",
            "do",
            "else",
            "elsif",
            "end",
            "ensure",
            "false",
            "for",
            "if",
            "in",
            "module",
            "next",
            "nil",
            "not",
            "or",
            "redo",
            "rescue",
            "retry",
            "return",
            "self",
            "super",
            "then",
            "true",
            "undef",
            "unless",
            "until",
            "when",
            "while",
            "yield"
          ],
          customTokens: {
            "function": {
              values: [
                "Array",
                "Float",
                "Integer",
                "String",
                "at_exit",
                "autoload",
                "binding",
                "caller",
                "catch",
                "chop!",
                "chop",
                "chomp!",
                "chomp",
                "eval",
                "exec",
                "exit!",
                "exit",
                "fail",
                "fork",
                "format",
                "gets",
                "global_variables",
                "gsub!",
                "gsub",
                "iterator?",
                "lambda",
                "load",
                "local_variables",
                "loop",
                "open",
                "p",
                "print",
                "printf",
                "proc",
                "putc",
                "puts",
                "raise",
                "rand",
                "readline",
                "readlines",
                "require",
                "select",
                "sleep",
                "split",
                "sprintf",
                "srand",
                "sub!",
                "sub",
                "syscall",
                "system",
                "test",
                "trace_var",
                "trap",
                "untrace_var"
              ],
              boundary: "\\W"
            },
            specialOperator: {
              values: ["defined?", "eql?", "equal?"],
              boundary: "\\W"
            }
          },
          customParseRules: [function(c) {
            var d, e, f, g = "/", h = c.reader.getLine(),
              i = c.reader.getColumn();
            if ("/" !== c.reader.current()) return null;
            if (
              d = function() {
                var d = c.token(c.count() - 1), e = null;
                return "" !== c.defaultData.text &&
                  (e = c.createToken("default", c.defaultData.text)),
                  e || (e = d),
                  e === b ? !0
                    : "default" === e.name && e.value.indexOf("\n") > -1 ? !0
                      : a.util.contains(["keyword", "ident", "number"], d.name)
                        ? !1
                        : "punctuation" !== d.name ||
                          a.util.contains(["(", "{", "[", ","], d.value) ? !0
                          : !1;
              }(),
                !d
            ) {
              return null;
            }
            for (; c.reader.peek() !== c.reader.EOF;) {
              if (
                e = c.reader.peek(2),
                  "\\/" !== e && "\\\\" !== e
              ) {
                if (g += f = c.reader.read(), "/" === f) break;
              } else g += c.reader.read(2);
            }
            for (
              ;
              c.reader.peek() !== c.reader.EOF &&
              /[A-Za-z]/.test(c.reader.peek());
            ) {
              g += c.reader.read();
            }
            return c.createToken("regexLiteral", g, h, i);
          }, function(a) {
            var b, c, d, e = a.count(), f = 0, g = e - 1;
            if (
              ":" !== a.reader.current() || !/[a-zA-Z_]/.test(a.reader.peek())
            ) {
              return null;
            }
            for (; b = a.token(--e);) {
              if ("operator" === b.name) {
                if (0 === f) {
                  if ("?" === b.value && g > e) return null;
                  if (":" === b.value) break;
                }
              } else if ("punctuation" === b.name) {
                switch (b.value) {
                  case "(":
                    f--;
                    break;
                  case ")":
                    f++;
                }
              } else if ("default" === b.name && /\n/.test(b.value)) {
                if (
                  c = a.token(e - 1),
                    c &&
                      ("operator" === c.name || "punctuation" === c.name &&
                        "," === c.value)
                ) {
                  continue;
                }
                break;
              }
            }
            return d = /^:\w+/.exec(a.reader.substring())[0],
              b = a.createToken(
                "symbol",
                d,
                a.reader.getLine(),
                a.reader.getColumn()
              ),
              a.reader.read(d.length - 1),
              b;
          }, function(b) {
            var c, d, e, f, g = b.reader.getLine(), h = b.reader.getColumn(),
              i = "<<", j = "", k = "";
            if (
              "<" !== b.reader.current() || !/<[\w'"`-]/.test(b.reader.peek(2))
            ) {
              return null;
            }
            if (
              c = b.token(b.count() - 1),
                c && a.util.contains(["number", "string"], c.name)
            ) {
              return null;
            }
            for (
              b.reader.read(2),
                d = b.reader.current(),
                "-" === d &&
                  (b.reader.read(), i += d, j += d, d = b.reader.current()),
                a.util.contains(['"', "'", "`"], d) ? k = d : j += d,
                i += d;
              (e = b.reader.peek()) !== b.reader.EOF &&
              !("\n" === e || "" === k && /\W/.test(e));
            ) {
              if (
                "\\" === e && (f = b.reader.peek(2),
                  "" !== k && a.util.contains(["\\" + k, "\\\\"], f))
              ) {
                i += f,
                  j += b.reader.read(2);
              } else {
                if (i += b.reader.read(), "" !== k && e === k) break;
                j += e;
              }
            }
            return b.items.heredocQueue.push(j),
              b.createToken("heredocDeclaration", i, g, h);
          }, function(b) {
            var c, d, e, f, g, h = [], i = b.reader.current(), j = !1;
            if (0 === b.items.heredocQueue.length) return null;
            if (
              0 === b.defaultData.text.replace(/[^\n]/g, "").length
            ) {
              return null;
            }
            for (
              ;
              b.items.heredocQueue.length > 0 &&
              b.reader.peek() !== b.reader.EOF;
            ) {
              for (
                c = b.items.heredocQueue.shift(),
                  "-" === c.charAt(0) && (c = c.substring(1), j = !0),
                  d = b.reader.getLine(),
                  e = b.reader.getColumn(),
                  f = new RegExp(
                    "^\\n" + (j ? "[ \\t]*" : "") + a.util.regexEscape(c) +
                      "\\n"
                  );
                b.reader.peek() !== b.reader.EOF;
              ) {
                if (g = f.exec(b.reader.peekSubstring()), null !== g) {
                  i += b.reader.read(g[0].length);
                  break;
                }
                i += b.reader.read();
              }
              h.push(b.createToken("heredoc", i, d, e)),
                i = "";
            }
            return h.length > 0 ? h : null;
          }, function(b) {
            var c, d, e = "%", f = 1, g = !1, h = b.reader.getLine(),
              i = b.reader.getColumn();
            if ("%" !== b.reader.current()) return null;
            if (
              c = b.reader.peek(),
                ("q" === c || "Q" === c || "r" === c) &&
                  (f++, "r" === c && (g = !0)),
                /[A-Za-z0-9=]$/.test(b.reader.peek(f))
            ) {
              return null;
            }
            switch (e += b.reader.read(f), d = e.charAt(e.length - 1)) {
              case "(":
                d = ")";
                break;
              case "[":
                d = "]";
                break;
              case "{":
                d = "}";
            }
            for (; (c = b.reader.peek()) !== b.reader.EOF;) {
              if (
                "\\" === c &&
                a.util.contains(["\\" + d, "\\\\"], b.reader.peek(2))
              ) {
                e += b.reader.read(2);
              } else if (e += b.reader.read(), c === d) break;
            }
            if (g) {
              for (
                ;
                b.reader.peek() !== b.reader.EOF &&
                /[A-Za-z]/.test(b.reader.peek());
              ) {
                e += b.reader.read();
              }
            }
            return b.createToken(g ? "regexLiteral" : "rawString", e, h, i);
          }, function(a) {
            var b, c = "=begin", d = a.reader.getLine(),
              e = a.reader.getColumn(), f = !1;
            if (
              !a.reader.isSol() || "=" !== a.reader.current() ||
              "begin" !== a.reader.peek(5)
            ) {
              return null;
            }
            for (a.reader.read(5); (b = a.reader.peek()) !== a.reader.EOF;) {
              if (
                f || "\n=end" !== a.reader.peek(5)
              ) {
                if (f && "\n" === b) break;
                c += a.reader.read();
              } else f = !0, c += a.reader.read(5);
            }
            return a.createToken("docComment", c, d, e);
          }],
          scopes: {
            string: [
              ['"', '"', a.util.escapeSequences.concat(['\\"'])],
              ["'", "'", ["\\'", "\\\\"]]
            ],
            comment: [["#", "\n", null, !0]],
            subshellCommand: [["`", "`", ["\\`"]]],
            globalVariable: [["$", { length: 1, regex: /[\W]/ }, null, !0]],
            instanceVariable: [["@", { length: 1, regex: /[\W]/ }, null, !0]]
          },
          identFirstLetter: /[A-Za-z_]/,
          identAfterFirstLetter: /\w/,
          namedIdentRules: {
            follows: [
              [
                { token: "keyword", values: ["class", "def"] },
                a.util.whitespace
              ],
              [
                { token: "keyword", values: ["class"] },
                a.util.whitespace,
                { token: "ident" },
                a.util.whitespace,
                { token: "operator", values: ["<", "<<"] },
                a.util.whitespace
              ]
            ],
            precedes: [
              [a.util.whitespace, { token: "operator", values: ["::"] }],
              [
                a.util.whitespace,
                { token: "operator", values: ["."] },
                a.util.whitespace,
                { token: "ident", values: ["new"] },
                a.util.whitespace,
                { token: "punctuation", values: ["("] }
              ]
            ]
          },
          operators: [
            "?",
            "...",
            "..",
            ".",
            "::",
            ":",
            "[]",
            "+=",
            "+",
            "-=",
            "-",
            "**=",
            "*=",
            "**",
            "*",
            "/=",
            "/",
            "%=",
            "%",
            "&&=",
            "&=",
            "&&",
            "&",
            "||=",
            "|=",
            "||",
            "|",
            "^=",
            "^",
            "~",
            "\\",
            "<=>",
            "<<=",
            "<<",
            "<=",
            "<",
            ">>=",
            ">>",
            ">=",
            ">",
            "!~",
            "!=",
            "!",
            "=>",
            "===",
            "==",
            "=~",
            "="
          ],
          contextItems: { heredocQueue: [] }
        }
      );
    }(this.Sunlight),
    function(a, b) {
      if (
        a === b || a.registerLanguage === b
      ) {
        throw "Include sunlight.js before including language files";
      }
      if (
        !a.isRegistered(
          "xml"
        )
      ) {
        throw "Scala requires the XML language to be registered";
      }
      a.registerLanguage(
        "scala",
        {
          keywords: [
            "abstract",
            "case",
            "catch",
            "class",
            "def",
            "do",
            "else",
            "extends",
            "false",
            "final",
            "finally",
            "forSome",
            "for",
            "if",
            "implicit",
            "import",
            "lazy",
            "match",
            "new",
            "null",
            "object",
            "override",
            "package",
            "private",
            "protected",
            "return",
            "sealed",
            "super",
            "this",
            "throw",
            "trait",
            "try",
            "true",
            "type",
            "val",
            "var",
            "while",
            "with",
            "yield"
          ],
          embeddedLanguages: { xml: { switchTo: function(b) {
            var c;
            return "<" === b.reader.current() && /[\w!?]/.test(b.reader.peek())
              ? "" !== b.defaultData.text ? !0 : (c = b.token(b.count() - 1),
                c && "punctuation" === c.name &&
                  a.util.contains(["(", "{"], c.value))
              : !1;
          }, switchBack: function(a) {
            var b = a.token(a.count() - 1);
            if (!b) return !1;
            if ("tagName" === b.name) {a.items.literalXmlOpenTag ||
                (a.items.literalXmlOpenTag = b.value);} else if (

              "operator" === b.name
            ) {
              switch (b.value) {
                case "<":
                  a.items.literalXmlNestingLevel++;
                  break;
                case "</":
                case "/>":
                  a.items.literalXmlNestingLevel--;
              }
            }
            return !a.items.literalXmlOpenTag ||
              0 !== a.items.literalXmlNestingLevel || ">" !== b.value &&
              "/>" !== b.value ? !1 : !0;
          } } },
          scopes: {
            string: [['"""', '"""'], ['"', '"', ["\\\\", '\\"']]],
            "char": [["'", "'", ["\\\\", "\\'"]]],
            quotedIdent: [["`", "`", ["\\`", "\\\\"]]],
            comment: [["//", "\n", null, !0], ["/*", "*/"]],
            annotation: [["@", { length: 1, regex: /\W/ }, null, !0]]
          },
          identFirstLetter: /[A-Za-z]/,
          identAfterFirstLetter: /\w/,
          customParseRules: [function(a) {
            var b = a.reader.getLine(), c = a.reader.getColumn();
            if ("'" !== a.reader.current()) return !1;
            var d = /^(\w+)(?!')/i.exec(a.reader.peekSubstring());
            return d ? (a.reader.read(d[1].length),
              a.createToken("symbolLiteral", "'" + d[1], b, c)) : !1;
          }, function(b) {
            var c, d, e = b.reader.current(), f = b.reader.getLine(),
              g = b.reader.getColumn();
            if ("" === b.defaultData.text) return !1;
            if (!/[A-Za-z]/.test(b.reader.current())) return !1;
            if (
              c = b.token(b.count() - 1),
                "" === b.defaultData.text || !c || "keyword" !== c.name ||
                  !a.util.contains(
                    ["class", "type", "trait", "object"],
                    c.value
                  )
            ) {
              return !1;
            }
            for (; (d = b.reader.peek()) && /\w/.test(d);)e += b.reader.read();
            return b.items.userDefinedTypes.push(e),
              b.createToken("ident", e, f, g);
          }],
          namedIdentRules: { custom: [function() {
            var b = [
              "Nil",
              "Nothing",
              "Unit",
              "Pair",
              "Map",
              "String",
              "List",
              "Int",
              "Seq",
              "Option",
              "Double",
              "AnyRef",
              "AnyVal",
              "Any",
              "ScalaObject",
              "Float",
              "Long",
              "Short",
              "Byte",
              "Char",
              "Boolean"
            ];
            return function(c) {
              var d = a.util.getNextNonWsToken(c.tokens, c.index);
              return d && "operator" === d.name && "." === d.value ? !1
                : a.util.contains(b, c.tokens[c.index].value);
            };
          }(), function(b) {
            return a.util.contains(
              b.items.userDefinedTypes,
              b.tokens[b.index].value
            );
          }, function(c) {
            var d, e, f, g = a.util.getNextNonWsToken(c.tokens, c.index);
            if (g && "operator" === g.name && "." === g.value) return !1;
            for (e = c.index, f = c.tokens[e]; (d = c.tokens[--e]) !== b;) {
              if ("keyword" === d.name && "new" === d.value) return !0;
              if ("default" !== d.name) {
                if ("ident" !== d.name) {
                  if ("operator" !== d.name || "." !== d.value) break;
                  if (f && "ident" !== f.name) return !1;
                  f = d;
                } else {
                  if (f && "ident" === f.name) return !1;
                  f = d;
                }
              }
            }
            return !1;
          }, function() {
            var b = [
              [
                {
                  token: "keyword",
                  values: [
                    "class",
                    "object",
                    "extends",
                    "new",
                    "type",
                    "trait"
                  ]
                },
                { token: "default" }
              ],
              [{ token: "operator", values: [":"] }, a.util.whitespace],
              [{ token: "operator", values: ["#"] }],
              [
                { token: "keyword", values: ["type"] },
                { token: "default" },
                { token: "ident" },
                a.util.whitespace,
                { token: "operator", values: ["="] },
                a.util.whitespace
              ]
            ], c = [
              {
                opener: { token: "punctuation", values: ["["] },
                closer: { token: "punctuation", values: ["]"] }
              }
            ];
            return function(d) {
              var e;
              if (
                /^[A-Z]([A-Z0-9]\w*)?$/.test(
                  d.tokens[d.index].value
                )
              ) {
                return !1;
              }
              for (e = 0; e < b.length; e++) {
                if (
                  a.util.createProceduralRule(
                    d.index - 1,
                    -1,
                    b[e],
                    !1
                  )(d.tokens)
                ) {
                  return !0;
                }
              }
              for (e = 0; e < c.length; e++) {
                if (
                  a.util.createBetweenRule(
                    d.index,
                    c[e].opener,
                    c[e].closer,
                    !1
                  )(d.tokens)
                ) {
                  return !0;
                }
              }
              return !1;
            };
          }()] },
          contextItems: {
            literalXmlOpenTag: null,
            literalXmlNestingLevel: 0,
            userDefinedTypes: []
          },
          operators: [
            "++",
            "+=",
            "+",
            "--",
            "-=",
            "->",
            "-",
            "*=",
            "*",
            "^=",
            "^^",
            "^",
            "~>",
            "~",
            "!=",
            "!",
            "&&",
            "&=",
            "&",
            "||",
            "|=",
            "|",
            ">>>",
            ">>=",
            ">>",
            ">",
            "<<=",
            "<<",
            "<~",
            "<=",
            "<%",
            "<",
            "%>",
            "%=",
            "%",
            "::",
            ":<",
            ":>",
            ":",
            "==",
            "=",
            "@",
            "#",
            "_",
            "."
          ]
        }
      ),
        a.globalOptions.enableScalaXmlInterpolation = !1,
        a.bind("beforeHighlight", function(a) {
          "scala" === a.language.name &&
            (this.options.enableScalaXmlInterpolation = !0);
        }),
        a.bind("afterHighlight", function(a) {
          this.options.enableScalaXmlInterpolation = !1;
        });
    }(this.Sunlight),
    function(a, b) {
      if (
        a === b || a.registerLanguage === b
      ) {
        throw "Include sunlight.js before including language files";
      }
      a.registerLanguage(
        "sln",
        {
          keywords: [
            "Project",
            "EndProject",
            "GlobalSection",
            "Global",
            "EndGlobalSection",
            "EndGlobal"
          ],
          customTokens: {
            sectionName: {
              values: ["preSolution", "postSolution"],
              boundary: "\\b"
            }
          },
          scopes: {
            string: [['"', '"', ['\\"', "\\\\"]]],
            comment: [["#", "\n", null, !0]],
            guid: [["{", "}"]],
            formatDeclaration: [
              [
                "Microsoft Visual Studio Solution File, Format Version",
                "\n",
                null,
                !0
              ]
            ]
          },
          identFirstLetter: /[A-Za-z_\.]/,
          identAfterFirstLetter: /[\w-\.]/,
          namedIdentRules: {
            follows: [
              [
                { token: "keyword", values: ["GlobalSection"] },
                a.util.whitespace,
                { token: "punctuation", values: ["("] },
                a.util.whitespace
              ]
            ]
          },
          operators: ["=", "|"]
        }
      );
    }(this.Sunlight),
    function(a, b) {
      if (
        a === b || a.registerLanguage === b
      ) {
        throw "Include sunlight.js before including language files";
      }
      a.registerLanguage(
        "tsql",
        {
          caseInsensitive: !0,
          keywords: [
            "ddw",
            "existsw",
            "precisionwall",
            "exit",
            "primary",
            "alter",
            "external",
            "print",
            "and",
            "fetch",
            "proc",
            "any",
            "file",
            "procedure",
            "as",
            "fillfactor",
            "public",
            "asc",
            "for",
            "raiserror",
            "authorization",
            "foreign",
            "read",
            "backup",
            "freetext",
            "readtext",
            "begin",
            "freetexttable",
            "reconfigure",
            "between",
            "from",
            "references",
            "break",
            "full",
            "replication",
            "browse",
            "function",
            "restore",
            "bulk",
            "goto",
            "restrict",
            "by",
            "grant",
            "return",
            "cascade",
            "group",
            "revert",
            "case",
            "having",
            "revoke",
            "check",
            "holdlock",
            "right",
            "checkpoint",
            "identity",
            "rollback",
            "close",
            "identity_insert",
            "rowcount",
            "clustered",
            "identitycol",
            "rowguidcol",
            "coalesce",
            "if",
            "rule",
            "collate",
            "in",
            "save",
            "column",
            "index",
            "schema",
            "commit",
            "inner",
            "securityaudit",
            "compute",
            "insert",
            "select",
            "constraint",
            "intersect",
            "session_user",
            "contains",
            "into",
            "set",
            "containstable",
            "is",
            "setuser",
            "continue",
            "join",
            "shutdown",
            "convert",
            "key",
            "some",
            "create",
            "kill",
            "statistics",
            "cross",
            "left",
            "system_user",
            "current",
            "like",
            "table",
            "current_date",
            "lineno",
            "tablesample",
            "current_time",
            "load",
            "textsize",
            "current_timestamp",
            "merge",
            "then",
            "current_user",
            "national",
            "to",
            "cursor",
            "nocheck",
            "top",
            "database",
            "nonclustered",
            "tran",
            "dbcc",
            "not",
            "transaction",
            "deallocate",
            "null",
            "trigger",
            "declare",
            "nullif",
            "truncate",
            "default",
            "of",
            "tsequal",
            "delete",
            "off",
            "union",
            "deny",
            "offsets",
            "unique",
            "desc",
            "on",
            "unpivot",
            "disk",
            "open",
            "update",
            "distinct",
            "opendatasource",
            "updatetext",
            "distributed",
            "openquery",
            "use",
            "double",
            "openrowset",
            "user",
            "drop",
            "openxml",
            "values",
            "dump",
            "option",
            "varying",
            "else",
            "or",
            "view",
            "end",
            "order",
            "waitfor",
            "errlvl",
            "outer",
            "when",
            "escape",
            "over",
            "where",
            "except",
            "percent",
            "while",
            "exec",
            "pivot",
            "with",
            "execute",
            "plan",
            "writetext"
          ],
          customParseRules: [function() {
            var b = a.util.createHashMap(
              [
                "encryptbykey",
                "decryptbykey",
                "encryptbypassphrase",
                "decryptbypassphrase",
                "key_id",
                "key_guid",
                "encryptbyasmkey",
                "decryptbyasmkey",
                "encryptbycert",
                "decryptbycert",
                "cert_id",
                "asymkey_id",
                "certproperty",
                "signbyasymkey",
                "verifysignedbyasmkey",
                "signbycert",
                "verifysignedbycert",
                "decryptbykeyautocert",
                "hashbytes",
                "cursor_status",
                "datalength",
                "ident_seed",
                "ident_current",
                "identity",
                "ident_incr",
                "sql_variant_property",
                "sysdatetime",
                "sysdatetimeoffset",
                "sysutcdatetime",
                "current_timestamp",
                "getdate",
                "getutcdate",
                "datename",
                "datepart",
                "day",
                "month",
                "year",
                "datediff",
                "dateadd",
                "switchoffset",
                "todatetimeoffset",
                "set datefirst",
                "set dateformat",
                "set language",
                "sp_helplanguage",
                "isdate",
                "abs",
                "degrees",
                "rand",
                "acos",
                "exp",
                "round",
                "asin",
                "floor",
                "sign",
                "atan",
                "log",
                "sin",
                "atn2",
                "log10",
                "sqrt",
                "ceiling",
                "pi",
                "square",
                "cos",
                "power",
                "tan",
                "cot",
                "radians",
                "fulltextcatalogproperty",
                "asymkey_id",
                "fulltextserviceproperty",
                "asymkeyproperty",
                "index_col",
                "assemblyproperty",
                "indexkey_property",
                "cert_id",
                "indexproperty",
                "col_length",
                "key_id",
                "col_name",
                "key_guid",
                "columnproperty",
                "key_name",
                "database_principal_id",
                "object_definition",
                "databaseproperty",
                "object_id",
                "databasepropertyex",
                "object_name",
                "db_id",
                "object_schema_name",
                "db_name",
                "objectproperty",
                "file_id",
                "objectpropertyex",
                "file_idex",
                "schema_id",
                "file_name",
                "schema_name",
                "filegroup_id",
                "sql_variant_property",
                "filegroup_name",
                "symkeyproperty",
                "filegroupproperty",
                "type_id",
                "fileproperty",
                "type_name",
                "fn_listextendedproperty",
                "typeproperty",
                "bit_length",
                "concat",
                "octet_length",
                "truncate",
                "current_date",
                "current_time",
                "dayname",
                "dayofweek",
                "hour",
                "minute",
                "monthname",
                "quarter",
                "week",
                "publishingservername",
                "current_user",
                "schema_id",
                "database_principal_id",
                "schema_name",
                "sys.fn_builtin_permissions",
                "session_user",
                "sys.fn_my_permissions",
                "setuser",
                "has_perms_by_name",
                "suser_id",
                "is_member",
                "suser_sid",
                "is_srvrolemember",
                "suser_sname",
                "original_login",
                "system_user",
                "permissions",
                "suser_name",
                "pwdcompare",
                "user_id",
                "pwdencrypt",
                "user_name",
                "ascii",
                "nchar",
                "soundex",
                "char",
                "patindex",
                "space",
                "charindex",
                "quotename",
                "str",
                "difference",
                "replace",
                "stuff",
                "left",
                "replicate",
                "substring",
                "len",
                "reverse",
                "unicode",
                "lower",
                "right",
                "upper",
                "ltrim",
                "rtrim",
                "app_namexx",
                "case",
                "cast",
                "convert",
                "coalesce",
                "collationproperty",
                "columns_updated",
                "current_timestamp",
                "current_user",
                "datalength",
                "error_line",
                "error_message",
                "error_number",
                "error_procedure",
                "error_severity",
                "error_state",
                "fn_helpcollations",
                "fn_servershareddrives",
                "fn_virtualfilestats",
                "formatmessage",
                "getansinull",
                "host_id",
                "host_name",
                "ident_current",
                "ident_incr",
                "ident_seed",
                "identity",
                "isdate",
                "isnull",
                "isnumeric",
                "newid",
                "nullif",
                "parsename",
                "original_login",
                "rowcount_big",
                "scope_identity",
                "serverproperty",
                "sessionproperty",
                "session_user",
                "stats_date",
                "dm_db_index_physical_stats",
                "system_user",
                "user_name",
                "xact_state",
                "fn_virtualfilestats",
                "patindex",
                "textvalid",
                "textptr",
                "columns_updated",
                "eventdata",
                "trigger_nestlevel",
                "update",
                "containstable",
                "openquery",
                "freetexttable",
                "openrowset",
                "opendatasource",
                "openxml",
                "vg",
                "min",
                "checksum_agg",
                "over clause",
                "count",
                "rowcount_big",
                "count_big",
                "stdev",
                "grouping",
                "stdevp",
                "grouping_id",
                "sum",
                "max",
                "var",
                "rank",
                "ntile",
                "dense_rank",
                "row_number",
                "varp"
              ],
              "\\b",
              !0
            );
            return function(c) {
              var d, e, f = a.util.matchWord(c, b, "function", !0);
              if (null === f) return null;
              for (
                d = f.value.length,
                  e = c.reader.peek(d);
                e.length === d && e !== c.reader.EOF;
              ) {
                if (!/\s$/.test(e)) {
                  if (
                    "(" === e.charAt(e.length - 1)
                  ) {
                    return c.reader.read(f.value.length - 1), f;
                  }
                  break;
                }
                e = c.reader.peek(++d);
              }
              return null;
            };
          }()],
          customTokens: {
            constant: {
              values: [
                "@@FETCH_STATUS",
                "@@DATEFIRST",
                "@@OPTIONS",
                "@@DBTS",
                "@@REMSERVER",
                "@@LANGID",
                "@@SERVERNAME",
                "@@LANGUAGE",
                "@@SERVICENAME",
                "@@LOCK_TIMEOUT",
                "@@SPID",
                "@@MAX_CONNECTIONS",
                "@@TEXTSIZE",
                "@@MAX_PRECISION",
                "@@VERSION",
                "@@NESTLEVEL",
                "@@CURSOR_ROWS",
                "@@PROCID",
                "@@IDENTITY",
                "@@TRANCOUNT",
                "@@ERROR",
                "@@ROWCOUNT",
                "@@CONNECTIONS",
                "@@PACK_RECEIVED",
                "@@CPU_BUSY",
                "@@PACK_SENT",
                "@@TIMETICKS",
                "@@IDLE",
                "@@TOTAL_ERRORS",
                "@@IO_BUSY",
                "@@TOTAL_READ",
                "@@PACKET_ERRORS",
                "@@TOTAL_WRITE"
              ],
              boundary: "\\b"
            }
          },
          scopes: {
            string: [
              ['"', '"', a.util.escapeSequences.concat(['\\"'])],
              ["'", "'", ["\\'", "\\\\"]]
            ],
            comment: [["--", "\n", null, !0], ["/*", "*/"]],
            quotedIdent: [["[", "]", ["\\[", "\\\\"]]]
          },
          identFirstLetter: /[A-Za-z_]/,
          identAfterFirstLetter: /\w/,
          namedIdentRules: {
            follows: [
              [
                { token: "keyword", values: ["from", "join"] },
                { token: "default" }
              ],
              [
                { token: "keyword", values: ["from", "join"] },
                { token: "default" },
                { token: "ident" },
                a.util.whitespace,
                { token: "operator", values: ["."] },
                a.util.whitespace
              ]
            ]
          },
          operators: [
            "+",
            "-",
            "*",
            "/",
            "%",
            "&&",
            "||",
            "|",
            "&",
            "^",
            ">>",
            "<<",
            "<>",
            "<=>",
            "<=",
            "<",
            ">=",
            ">",
            "==",
            "!=",
            "!",
            "~",
            ":=",
            "=",
            "."
          ]
        }
      );
    }(this.Sunlight),
    function(a, b) {
      if (
        a === b || a.registerLanguage === b
      ) {
        throw "Include sunlight.js before including language files";
      }
      a.registerLanguage(
        "vb",
        {
          keywords: [
            "AddHandler",
            "AddressOf",
            "Alias",
            "AndAlso",
            "And",
            "As",
            "Boolean",
            "ByRef",
            "Byte",
            "ByVal",
            "Call",
            "Case",
            "Catch",
            "CBool",
            "CByte",
            "CChar",
            "CDate",
            "CDbl",
            "CDec",
            "Char",
            "CInt",
            "Class",
            "CLng",
            "CObj",
            "Const",
            "Continue",
            "CSByte",
            "CShort",
            "CSng",
            "CStr",
            "CType",
            "CUInt",
            "CULng",
            "CUShort",
            "Date",
            "Decimal",
            "Declare",
            "Default",
            "Delegate",
            "Dim",
            "DirectCast",
            "Double",
            "Do",
            "Each",
            "ElseIf",
            "Else",
            "EndStatement",
            "EndIf",
            "End",
            "Enum",
            "Erase",
            "Error",
            "Event",
            "Exit",
            "False",
            "Finally",
            "ForEach",
            "For",
            "Friend",
            "Function",
            "GetType",
            "GetXMLNamespace",
            "Get",
            "Global",
            "GoSub",
            "GoTo",
            "Handles",
            "If",
            "Implements",
            "Imports",
            "Inherits",
            "Integer",
            "Interface",
            "In",
            "IsNot",
            "Is",
            "Let",
            "Lib",
            "Like",
            "Long",
            "Loop",
            "Me",
            "Module",
            "Mod",
            "MustInherit",
            "MustOverride",
            "MyBase",
            "MyClass",
            "Namespace",
            "Narrowing",
            "New",
            "Next",
            "Nothing",
            "NotInheritable",
            "NotOverridable",
            "Not",
            "Object",
            "Of",
            "On",
            "Operator",
            "Option",
            "Optional",
            "OrElse",
            "Or",
            "Out",
            "Overloads",
            "Overridable",
            "Overrides",
            "ParamArray",
            "Partial",
            "Private",
            "Property",
            "Protected",
            "Public",
            "RaiseEvent",
            "ReadOnly",
            "ReDim",
            "RemoveHandler",
            "Resume",
            "Return",
            "SByte",
            "Select",
            "Set",
            "Shadows",
            "Shared",
            "Short",
            "Single",
            "Static",
            "Step",
            "Stop",
            "String",
            "Structure",
            "Sub",
            "SyncLock",
            "Then",
            "Throw",
            "To",
            "True",
            "TryCast",
            "Try",
            "TypeOf",
            "UInteger",
            "ULong",
            "UShort",
            "Using",
            "Variant",
            "Wend",
            "When",
            "While",
            "Widening",
            "WithEvents",
            "With",
            "WriteOnly",
            "Xor"
          ],
          customTokens: {
            reservedWord: {
              values: [
                "Aggregate",
                "Ansi",
                "Assembly",
                "Auto",
                "Binary",
                "Compare",
                "Custom",
                "Distinct",
                "Equals",
                "Explicit",
                "From",
                "Group By",
                "Group Join",
                "Into",
                "IsFalse",
                "IsTrue",
                "Join",
                "Key",
                "Mid",
                "Off",
                "Order By",
                "Preserve",
                "Skip",
                "Skip While",
                "Strict",
                "Take While",
                "Take",
                "Text",
                "Unicode",
                "Until",
                "Where"
              ],
              boundary: "\\b"
            }
          },
          scopes: {
            string: [['"', '"', a.util.escapeSequences.concat(['\\"'])]],
            comment: [["'", "\n", null, !0], ["REM", "\n", null, !0]],
            compilerDirective: [["#", "\n", null, !0]]
          },
          customParseRules: [function(a) {
            var b, c, d, e = "xmlDocCommentMeta", f = "xmlDocCommentContent";
            if (
              "'" !== a.reader.current() || "''" !== a.reader.peek(2)
            ) {
              return null;
            }
            for (
              b = [
                a.createToken(
                  e,
                  "'''",
                  a.reader.getLine(),
                  a.reader.getColumn()
                )
              ],
                d = { line: 0, column: 0, value: "", name: null },
                a.reader.read(2);
              (c = a.reader.peek()) !== a.reader.EOF;
            ) {
              if ("<" !== c || d.name === e) {
                if (">" !== c || d.name !== e) {
                  if ("\n" === c) break;
                  null === d.name && (d.name = f,
                    d.line = a.reader.getLine(),
                    d.column = a.reader.getColumn()),
                    d.value += a.reader.read();
                } else {
                  d.value += a.reader.read(),
                    b.push(a.createToken(d.name, d.value, d.line, d.column)),
                    d.name = null,
                    d.value = "";
                }
              } else {
                "" !== d.value &&
                  b.push(a.createToken(d.name, d.value, d.line, d.column)),
                  d.line = a.reader.getLine(),
                  d.column = a.reader.getColumn(),
                  d.name = e,
                  d.value = a.reader.read();
              }
            }
            return d.name === f &&
              b.push(a.createToken(d.name, d.value, d.line, d.column)),
              b.length > 0 ? b : null;
          }, function(a) {
            var b, c = a.reader.getLine(), d = a.reader.getColumn(), e = "[";
            if ("[" !== a.reader.current()) return null;
            for (
              b = a.reader.read();
              b !== a.reader.EOF && (e += b, "]" !== b);
            ) {
              b = a.reader.read();
            }
            return a.createToken("escapedKeyword", e, c, d);
          }, function() {
            var b = a.util.createHashMap(["New", "GetType"], "\\b");
            return function(c) {
              var d, e = a.util.matchWord(c, b, "keyword");
              return e
                ? (d = a.util.getPreviousNonWsToken(
                  c.getAllTokens(),
                  c.count()
                ),
                  d &&
                    ("operator" === d.name && "." === d.value ||
                      "keyword" === d.name && "Sub" === d.value) &&
                    (e.name = "ident"),
                  e)
                : null;
            };
          }()],
          identFirstLetter: /[A-Za-z_]/,
          identAfterFirstLetter: /\w/,
          namedIdentRules: {
            custom: [function(c) {
              var d, e = a.util.getNextNonWsToken(c.tokens, c.index),
                f = c.index, g = [0, 0], h = -1;
              if (
                e && "operator" === e.name &&
                ("=" === e.value || "." === e.value)
              ) {
                return !1;
              }
              for (; (d = c.tokens[--f]) !== b;) {
                if ("operator" === d.name) {
                  "<" === d.value ? g[0]++ : ">" === d.value && g[1]++;
                } else if (
                  "keyword" === d.name && a.util.contains(
                    ["Public", "Class", "Protected", "Private", "Friend"],
                    d.value
                  )
                ) {
                  break;
                }
              }
              if (0 === g[0] || g[0] === g[1]) return !1;
              for (f = c.index; (d = c.tokens[++f]) !== b;) {
                if (
                  "operator" === d.name
                ) {
                  "<" === d.value
                    ? g[0]++
                    : ">" === d.value && (h = f, g[1]++);
                } else if (
                  "keyword" === d.name && a.util.contains(
                    [
                      "Public",
                      "Class",
                      "Protected",
                      "Private",
                      "Friend",
                      "ByVal"
                    ],
                    d.value
                  )
                ) {
                  break;
                }
              }
              return 0 > h || g[0] !== g[1]
                ? !1
                : (d = a.util.getNextNonWsToken(c.tokens, h),
                  !d || "keyword" !== d.name && "ident" !== d.name ? !1 : !0);
            }, function(b) {
              var c, d = b.index, e = 1;
              if (
                !a.util.createProceduralRule(
                  b.index - 1,
                  -1,
                  [{ token: "punctuation", values: [","] }, a.util.whitespace]
                )(b.tokens)
              ) {
                return !1;
              }
              for (; c = b.tokens[--d];) {
                if (
                  "punctuation" === c.name && "(" === c.value
                ) {
                  if (e--, 0 === e) {
                    return c = b.tokens[--d],
                      c && "keyword" === c.name && a.util.contains(
                        ["CType", "DirectCast", "TryCast"],
                        c.value
                      )
                        ? !0
                        : !1;
                  }
                } else "punctuation" === c.name && ")" === c.value && e++;
              }
              return !1;
            }, function(b) {
              var c, d = a.util.getPreviousNonWsToken(b.tokens, b.index),
                e = b.index;
              if (d && "operator" === d.name && "." === d.value) return !1;
              for (; c = b.tokens[--e];) {
                if ("keyword" === c.name) {
                  switch (
                    c.value
                  ) {
                    case "Class":
                    case "New":
                      break;
                    case "Implements":
                      return !0;
                    default:
                      return !1;
                  }
                } else if (
                  "default" === c.name && c.value.indexOf(a.util.eol) >= 0
                ) {
                  return !1;
                }
              }
              return !1;
            }, function(b) {
              var c, d = b.index, e = function() {
                for (; c = b.tokens[--d];) {
                  if ("punctuation" === c.name) {
                    switch (
                      c.value
                    ) {
                      case "(":
                      case ")":
                        return !1;
                      case "{":
                        return c = a.util.getPreviousNonWsToken(b.tokens, d),
                          c && "keyword" === c.name && "As" === c.value
                            ? !0
                            : !1;
                    }
                  } else if (
                    "keyword" === c.name && a.util.contains(
                      ["Public", "Protected", "Friend", "Private", "End"],
                      c.value
                    )
                  ) {
                    return !1;
                  }
                }
                return !1;
              }();
              if (!e) return !1;
              for (d = b.index; c = b.tokens[++d];) {
                if (
                  "punctuation" === c.name
                ) {
                  switch (c.value) {
                    case "}":
                      return !0;
                    case "(":
                    case ")":
                    case ";":
                      return !1;
                  }
                }
              }
              return !1;
            }],
            follows: [
              [
                {
                  token: "keyword",
                  values: [
                    "Of",
                    "As",
                    "Class",
                    "Implements",
                    "Inherits",
                    "New",
                    "AddressOf",
                    "Interface",
                    "Structure",
                    "Event",
                    "Module",
                    "Enum"
                  ]
                },
                { token: "default" }
              ],
              [
                { token: "keyword", values: ["GetType"] },
                a.util.whitespace,
                { token: "punctuation", values: ["("] },
                a.util.whitespace
              ]
            ]
          },
          numberParser: function(a) {
            var b, c, d = a.reader.current(), e = a.reader.getLine(),
              f = a.reader.getColumn(), g = !0;
            if (
              "&" === d && /[Hh][A-Fa-f0-9]/.test(a.reader.peek(2))
            ) {
              b = d + a.reader.read(2),
                g = !1;
            } else if (/\d/.test(d)) b = d;
            else {
              if ("." !== d || !/\d/.test(a.reader.peek())) return null;
              b = d + a.reader.read(),
                g = !1;
            }
            for (; (c = a.reader.peek()) !== a.reader.EOF;) {
              if (!/[A-Za-z0-9]/.test(c)) {
                if ("." === c && g && /\d$/.test(a.reader.peek(2))) {
                  b += a.reader.read(),
                    g = !1;
                  continue;
                }
                break;
              }
              b += a.reader.read();
            }
            return a.createToken("number", b, e, f);
          },
          operators: [
            ".",
            "<>",
            "=",
            "&=",
            "&",
            "*=",
            "*",
            "/=",
            "/",
            "\\=",
            "\\",
            "^=",
            "^",
            "+=",
            "+",
            "-=",
            "-",
            ">>=",
            ">>",
            "<<=",
            "<<",
            "<=",
            ">=",
            "<",
            ">"
          ]
        }
      );
    }(this.Sunlight),
    function(a, b, c) {
      function d(a) {
        return function(c) {
          var d = b.createElement("a");
          d.className = c.options.classPrefix + c.tokens[c.index].name,
            d.setAttribute("href", a(c.tokens[c.index].value)),
            d.appendChild(c.createTextNode(c.tokens[c.index])),
            c.addNode(d);
        };
      }
      if (a === c) throw "Include sunlight.js before including plugin files";
      var e = { php: { "function": function(a) {
        return "http://php.net/" + a;
      }, languageConstruct: function(a) {
        return "http://php.net/" + a;
      } }, ruby: { "function": function(a) {
        return "http://www.ruby-doc.org/docs/ruby-doc-bundle/Manual/man-1.4/function.html#" +
          a.replace(/!/g, "_bang").replace(/\?/g, "_p");
      } }, python: { "function": function(a) {
        return "http://docs.python.org/py3k/library/functions.html#" + a;
      } }, perl: { "function": function(a) {
        return "http://perldoc.perl.org/functions/" + a + ".html";
      } }, lua: { "function": function(a) {
        return "http://www.lua.org/manual/5.1/manual.html#pdf-" + a;
      } } };
      a.bind("beforeAnalyze", function(b) {
        this.options.enableDocLinks &&
          (b.analyzerContext.getAnalyzer = function() {
            var c, f, g = e[this.language.name];
            if (g) {
              c = a.util.clone(b.analyzerContext.language.analyzer);
              for (f in g) g.hasOwnProperty(f) && (c["handle_" + f] = d(g[f]));
              return c;
            }
          });
      }),
        a.globalOptions.enableDocLinks = !1;
    }(this.Sunlight, document),
    function(a, b, c) {
      function d(a) {
        var b = function c(a) {
          return a.lastChild
            ? 3 === a.lastChild.nodeType ? a.lastChild : c(a.lastChild) : null;
        }(a) || { lastChild: "" };
        return a.innerHTML.replace(/[^\n]/g, "").length -
          /\n$/.test(b.nodeValue);
      }
      if (a === c) throw "Include sunlight.js before including plugin files";
      a.bind("afterHighlightNode", function(c) {
        var e, f, g, h, i, j, k, l, m;
        if (
          this.options.lineNumbers &&
          ("automatic" !== this.options.lineNumbers ||
            "block" === a.util.getComputedStyle(c.node, "display"))
        ) {
          for (
            e = b.createElement("pre"),
              f = d(c.node),
              i = this.options.lineHighlight.length > 0,
              i && (g = b.createElement("div"),
                g.className = this.options.classPrefix +
                  "line-highlight-overlay"),
              e.className = this.options.classPrefix + "line-number-margin",
              k = b.createTextNode(a.util.eol),
              j = this.options.lineNumberStart;
            j <= this.options.lineNumberStart + f;
            j++
          ) {
            l = b.createElement("a"),
              m = (c.node.id
                ? c.node.id
                : this.options.classPrefix + c.count) + "-line-" + j,
              l.setAttribute("name", m),
              l.setAttribute("href", "#" + m),
              l.appendChild(b.createTextNode(j)),
              e.appendChild(l),
              e.appendChild(k.cloneNode(!1)),
              i && (h = b.createElement("div"),
                a.util.contains(this.options.lineHighlight, j) &&
                  (h.className = this.options.classPrefix +
                    "line-highlight-active"),
                g.appendChild(h));
          }
          c.codeContainer.insertBefore(e, c.codeContainer.firstChild),
            i && c.codeContainer.appendChild(g),
            c.codeContainer.style.borderWidth = "1px",
            c.codeContainer.style.borderStyle = "solid";
        }
      }),
        a.globalOptions.lineNumbers = "automatic",
        a.globalOptions.lineNumberStart = 1,
        a.globalOptions.lineHighlight = [];
    }(this.Sunlight, document),
    function(sunlight, document, undefined) {
      function createLink(a, b, c) {
        var d = document.createElement("a");
        return d.setAttribute("href", a),
          d.setAttribute("title", b),
          c && d.appendChild(document.createTextNode(c)),
          d;
      }
      function getTextRecursive(a) {
        var b = "", c = 0;
        if (3 === a.nodeType) return a.nodeValue;
        for (b = "", c = 0; c < a.childNodes.length; c++) {
          b += getTextRecursive(
            a.childNodes[c]
          );
        }
        return b;
      }
      if (
        sunlight === undefined
      ) {
        throw "Include sunlight.js before including plugin files";
      }
      var ieVersion = eval("0 /*@cc_on+ScriptEngineMajorVersion()@*/");
      sunlight.bind("afterHighlightNode", function(a) {
        var b, c, d, e, f, g, h, i, j, k, l;
        ieVersion && 7 > ieVersion || !this.options.showMenu ||
          "block" !== sunlight.util.getComputedStyle(a.node, "display") ||
          (b = document.createElement("div"),
            b.className = this.options.classPrefix + "menu",
            c =
              "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAZdEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My41Ljg3O4BdAAAAl0lEQVQ4jWP4P9n9PyWYgTYGzAr+///Q9P//Ty/HjhfEETDg1oH/YPDgNKbm4wsIuGBO+H84WJJKhhd2dkA0v3tEZhjcPQox4MVN7P7fUEHAgM112DX++Qkx+PEFMqPxwSmIAQenkWHAvCicAUucAbCAfX2PQCCCEtDGKkz86RXEgL39BAwAKcAFbh/6/39GIL3yAj0NAAB+LQeDCZ9tvgAAAABJRU5ErkJggg==",
            d = document.createElement("ul"),
            e = document.createElement("li"),
            f = String.fromCharCode(8212),
            g = createLink("#", "collapse code block", f),
            g.onclick = function() {
              var b = sunlight.util.getComputedStyle(
                a.codeContainer,
                "height"
              ), c = sunlight.util.getComputedStyle(
                a.codeContainer,
                "overflowY"
              );
              return function() {
                var d =
                  sunlight.util.getComputedStyle(a.codeContainer, "height") !==
                    b;
                return this.replaceChild(
                  document.createTextNode(d
                    ? f
                    : "+"),
                  this.firstChild
                ),
                  this.setAttribute(
                    "title",
                    (d ? "collapse" : "expand") + " clode block"
                  ),
                  a.codeContainer.style.height = d ? b : "0px",
                  a.codeContainer.style.overflowY = d ? c : "hidden",
                  !1;
              };
            }(),
            e.appendChild(g),
            h = document.createElement("li"),
            i = createLink("#", "view raw code", "raw"),
            i.onclick = function() {
              var b;
              return function() {
                var c;
                return b
                  ? (b.parentNode.removeChild(b),
                    b = null,
                    a.node.style.display = "block",
                    this.replaceChild(
                      document.createTextNode("raw"),
                      this.firstChild
                    ),
                    this.setAttribute("title", "view raw code"))
                  : (c = getTextRecursive(a.node),
                    b = document.createElement("textarea"),
                    b.value = c,
                    b.setAttribute("readonly", "readonly"),
                    b.style.width = parseInt(
                      sunlight.util.getComputedStyle(a.node, "width")
                    ) - 5 + "px",
                    b.style.height = sunlight.util.getComputedStyle(
                      a.node,
                      "height"
                    ),
                    b.style.border = "none",
                    b.style.overflowX = "hidden",
                    b.setAttribute("wrap", "off"),
                    a.codeContainer.insertBefore(b, a.node),
                    a.node.style.display = "none",
                    this.replaceChild(
                      document.createTextNode("highlighted"),
                      this.firstChild
                    ),
                    this.setAttribute("title", "view highlighted code"),
                    b.select()),
                  !1;
              };
            }(),
            h.appendChild(i),
            j = document.createElement("li"),
            k = createLink(
              "http://sunlightjs.com/",
              "Sunlight: JavaScript syntax highlighter by Tommy Montgomery"
            ),
            l = document.createElement("img"),
            l.setAttribute("src", "data:image/png;base64," + c),
            l.setAttribute("alt", "about"),
            k.appendChild(l),
            j.appendChild(k),
            d.appendChild(j),
            d.appendChild(h),
            d.appendChild(e),
            b.appendChild(d),
            a.container.insertBefore(b, a.container.firstChild),
            this.options.autoCollapse && g.onclick.call(g));
      }),
        sunlight.globalOptions.showMenu = !1,
        sunlight.globalOptions.autoCollapse = !1;
    }(this.Sunlight, document),
    function(a) {
      "use strict";
      "function" == typeof define && define.amd ? define(["jquery"], a)
        : "undefined" != typeof module && module.exports
          ? module.exports = a(require("jquery")) : a(jQuery);
    }(function(a) {
      "use strict";
      function b(b) {
        return !b.nodeName || -1 !== a.inArray(
          b.nodeName.toLowerCase(),
          ["iframe", "#document", "html", "body"]
        );
      }
      function c(b) {
        return a.isFunction(b) || a.isPlainObject(b) ? b : { top: b, left: b };
      }
      var d = a.scrollTo = function(b, c, d) {
        return a(window).scrollTo(b, c, d);
      };
      return d.defaults = { axis: "xy", duration: 0, limit: !0 },
        a.fn.scrollTo = function(e, f, g) {
          "object" == typeof f && (g = f, f = 0),
            "function" == typeof g && (g = { onAfter: g }),
            "max" === e && (e = 9e9),
            g = a.extend({}, d.defaults, g),
            f = f || g.duration;
          var h = g.queue && 1 < g.axis.length;
          return h && (f /= 2),
            g.offset = c(g.offset),
            g.over = c(g.over),
            this.each(function() {
              function i(b) {
                var c = a.extend(
                  {},
                  g,
                  { queue: !0, duration: f, complete: b && function() {
                    b.call(l, n, g);
                  } }
                );
                m.animate(o, c);
              }
              if (null !== e) {
                var j, k = b(this), l = k
                  ? this.contentWindow || window
                  : this, m = a(l), n = e, o = {};
                switch (typeof n) {
                  case "number":
                  case "string":
                    if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(n)) {
                      n = c(n);
                      break;
                    }
                    n = k ? a(n) : a(n, l);
                  case "object":
                    if (0 === n.length) return;
                    (n.is || n.style) && (j = (n = a(n)).offset());
                }
                var p = a.isFunction(g.offset) && g.offset(l, n) || g.offset;
                a.each(g.axis.split(""), function(a, b) {
                  var c = "x" === b ? "Left" : "Top", e = c.toLowerCase(),
                    f = "scroll" + c, q = m[f](), r = d.max(l, b);
                  j
                    ? (o[f] = j[e] + (k ? 0 : q - m.offset()[e]),
                      g.margin &&
                        (o[f] -= parseInt(n.css("margin" + c), 10) || 0,
                          o[f] -=
                            parseInt(n.css("border" + c + "Width"), 10) || 0),
                      o[f] += p[e] || 0,
                      g.over[e] &&
                        (o[f] += n["x" === b ? "width" : "height"]() *
                          g.over[e]))
                    : (c = n[e],
                      o[f] = c.slice && "%" === c.slice(-1)
                        ? parseFloat(c) / 100 * r : c),
                    g.limit && /^\d+$/.test(o[f]) &&
                      (o[f] = 0 >= o[f] ? 0 : Math.min(o[f], r)),
                    !a && 1 < g.axis.length &&
                      (q === o[f] ? o = {} : h && (i(g.onAfterFirst), o = {}));
                }),
                  i(g.onAfter);
              }
            });
        },
        d.max = function(c, d) {
          var e = "x" === d ? "Width" : "Height", f = "scroll" + e;
          if (!b(c)) return c[f] - a(c)[e.toLowerCase()]();
          var e = "client" + e, g = c.ownerDocument || c.document,
            h = g.documentElement, g = g.body;
          return Math.max(h[f], g[f]) - Math.min(h[e], g[e]);
        },
        a.Tween.propHooks.scrollLeft = a.Tween.propHooks.scrollTop = {
          get: function(b) {
            return a(b.elem)[b.prop]();
          },
          set: function(b) {
            var c = this.get(b);
            if (b.options.interrupt && b._last && b._last !== c) {
              return a(
                b.elem
              ).stop();
            }
            var d = Math.round(b.now);
            c !== d && (a(b.elem)[b.prop](d), b._last = this.get(b));
          }
        },
        d;
    }),
    function(a) {
      "function" == typeof define && define.amd ? define(["jquery"], a)
        : a(jQuery);
    }(function(a) {
      function b(b, c, d) {
        var e = c.hash.slice(1),
          f = document.getElementById(e) || document.getElementsByName(e)[0];
        if (f) {
          b && b.preventDefault();
          var g = a(d.target);
          if (
            !(d.lock && g.is(":animated") || d.onBefore &&
              d.onBefore(b, f, g) === !1)
          ) {
            if (
              d.stop && g.stop(!0),
                d.hash
            ) {
              var h = f.id === e
                ? "id"
                : "name", i = a("<a> </a>").attr(h, e).css(
                  {
                    position: "absolute",
                    top: a(window).scrollTop(),
                    left: a(window).scrollLeft()
                  }
                );
              f[h] = "",
                a("body").prepend(i),
                location.hash = c.hash,
                i.remove(),
                f[h] = e;
            }
            g.scrollTo(f, d).trigger("notify.serialScroll", [f]);
          }
        }
      }
      var c = location.href.replace(/#.*/, ""),
        d = a.localScroll = function(b) {
          a("body").localScroll(b);
        };
      return d.defaults = {
        duration: 1e3,
        axis: "y",
        event: "click",
        stop: !0,
        target: window
      },
        a.fn.localScroll = function(e) {
          function f() {
            return !!this.href && !!this.hash &&
              this.href.replace(this.hash, "") === c &&
              (!e.filter || a(this).is(e.filter));
          }
          return e = a.extend({}, d.defaults, e),
            e.hash && location.hash &&
              (e.target && window.scrollTo(0, 0), b(0, location, e)),
            e.lazy
              ? this.on(e.event, "a,area", function(a) {
                f.call(this) && b(a, this, e);
              })
              : this.find("a,area").filter(f).bind(e.event, function(a) {
                b(a, this, e);
              }).end().end();
        },
        d.hash = function() {},
        d;
    }),
    "undefined" == typeof jQuery
) {
  throw new Error("Bootstrap's JavaScript requires jQuery");
}
+function(a) {
  "use strict";
  var b = a.fn.jquery.split(" ")[0].split(".");
  if (
    b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1 || b[0] > 2
  ) {
    throw new Error(
      "Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3"
    );
  }
}(jQuery),
  +function(a) {
    "use strict";
    function b() {
      var a = document.createElement("bootstrap"),
        b = {
          WebkitTransition: "webkitTransitionEnd",
          MozTransition: "transitionend",
          OTransition: "oTransitionEnd otransitionend",
          transition: "transitionend"
        };
      for (var c in b) if (void 0 !== a.style[c]) return { end: b[c] };
      return !1;
    }
    a.fn.emulateTransitionEnd = function(b) {
      var c = !1, d = this;
      a(this).one("bsTransitionEnd", function() {
        c = !0;
      });
      var e = function() {
        c || a(d).trigger(a.support.transition.end);
      };
      return setTimeout(e, b), this;
    },
      a(function() {
        a.support.transition = b(),
          a.support.transition &&
            (a.event.special.bsTransitionEnd = {
              bindType: a.support.transition.end,
              delegateType: a.support.transition.end,
              handle: function(b) {
                return a(b.target).is(this)
                  ? b.handleObj.handler.apply(this, arguments)
                  : void 0;
              }
            });
      });
  }(jQuery),
  +function(a) {
    "use strict";
    function b(b) {
      return this.each(function() {
        var c = a(this), e = c.data("bs.alert");
        e || c.data("bs.alert", e = new d(this)),
          "string" == typeof b && e[b].call(c);
      });
    }
    var c = '[data-dismiss="alert"]', d = function(b) {
      a(b).on("click", c, this.close);
    };
    d.VERSION = "3.3.6",
      d.TRANSITION_DURATION = 150,
      d.prototype.close = function(b) {
        function c() {
          g.detach().trigger("closed.bs.alert").remove();
        }
        var e = a(this), f = e.attr("data-target");
        f || (f = e.attr("href"), f = f && f.replace(/.*(?=#[^\s]*$)/, ""));
        var g = a(f);
        b && b.preventDefault(),
          g.length || (g = e.closest(".alert")),
          g.trigger(b = a.Event("close.bs.alert")),
          b.isDefaultPrevented() ||
            (g.removeClass("in"),
              a.support.transition && g.hasClass("fade")
                ? g.one("bsTransitionEnd", c).emulateTransitionEnd(
                  d.TRANSITION_DURATION
                )
                : c());
      };
    var e = a.fn.alert;
    a.fn.alert = b,
      a.fn.alert.Constructor = d,
      a.fn.alert.noConflict = function() {
        return a.fn.alert = e, this;
      },
      a(document).on("click.bs.alert.data-api", c, d.prototype.close);
  }(jQuery),
  +function(a) {
    "use strict";
    function b(b) {
      return this.each(function() {
        var d = a(this), e = d.data("bs.button"),
          f = "object" == typeof b && b;
        e || d.data("bs.button", e = new c(this, f)),
          "toggle" == b ? e.toggle() : b && e.setState(b);
      });
    }
    var c = function(b, d) {
      this.$element = a(b),
        this.options = a.extend({}, c.DEFAULTS, d),
        this.isLoading = !1;
    };
    c.VERSION = "3.3.6",
      c.DEFAULTS = { loadingText: "loading..." },
      c.prototype.setState = function(b) {
        var c = "disabled", d = this.$element,
          e = d.is("input") ? "val" : "html", f = d.data();
        b += "Text",
          null == f.resetText && d.data("resetText", d[e]()),
          setTimeout(a.proxy(function() {
            d[e](null == f[b] ? this.options[b] : f[b]),
              "loadingText" == b
                ? (this.isLoading = !0, d.addClass(c).attr(c, c))
                : this.isLoading &&
                  (this.isLoading = !1, d.removeClass(c).removeAttr(c));
          }, this), 0);
      },
      c.prototype.toggle = function() {
        var a = !0, b = this.$element.closest('[data-toggle="buttons"]');
        if (b.length) {
          var c = this.$element.find("input");
          "radio" == c.prop("type")
            ? (c.prop("checked") && (a = !1),
              b.find(".active").removeClass("active"),
              this.$element.addClass("active"))
            : "checkbox" == c.prop("type") &&
              (c.prop("checked") !== this.$element.hasClass("active") &&
                (a = !1), this.$element.toggleClass("active")),
            c.prop("checked", this.$element.hasClass("active")),
            a && c.trigger("change");
        } else {
          this.$element.attr(
            "aria-pressed",
            !this.$element.hasClass("active")
          ),
            this.$element.toggleClass("active");
        }
      };
    var d = a.fn.button;
    a.fn.button = b,
      a.fn.button.Constructor = c,
      a.fn.button.noConflict = function() {
        return a.fn.button = d, this;
      },
      a(document).on(
        "click.bs.button.data-api",
        '[data-toggle^="button"]',
        function(c) {
          var d = a(c.target);
          d.hasClass("btn") || (d = d.closest(".btn")),
            b.call(d, "toggle"),
            a(c.target).is('input[type="radio"]') ||
              a(c.target).is('input[type="checkbox"]') || c.preventDefault();
        }
      ).on(
        "focus.bs.button.data-api blur.bs.button.data-api",
        '[data-toggle^="button"]',
        function(b) {
          a(b.target).closest(".btn").toggleClass(
            "focus",
            /^focus(in)?$/.test(b.type)
          );
        }
      );
  }(jQuery),
  +function(a) {
    "use strict";
    function b(b) {
      return this.each(function() {
        var d = a(this), e = d.data("bs.carousel"),
          f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b),
          g = "string" == typeof b ? b : f.slide;
        e || d.data("bs.carousel", e = new c(this, f)),
          "number" == typeof b
            ? e.to(b)
            : g ? e[g]() : f.interval && e.pause().cycle();
      });
    }
    var c = function(b, c) {
      this.$element = a(b),
        this.$indicators = this.$element.find(".carousel-indicators"),
        this.options = c,
        this.paused = null,
        this.sliding = null,
        this.interval = null,
        this.$active = null,
        this.$items = null,
        this.options.keyboard &&
          this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)),
        "hover" == this.options.pause &&
          !("ontouchstart" in document.documentElement) &&
          this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this))
            .on("mouseleave.bs.carousel", a.proxy(this.cycle, this));
    };
    c.VERSION = "3.3.6",
      c.TRANSITION_DURATION = 600,
      c.DEFAULTS = { interval: 5e3, pause: "hover", wrap: !0, keyboard: !0 },
      c.prototype.keydown = function(a) {
        if (!/input|textarea/i.test(a.target.tagName)) {
          switch (a.which) {
            case 37:
              this.prev();
              break;
            case 39:
              this.next();
              break;
            default:
              return;
          }
          a.preventDefault();
        }
      },
      c.prototype.cycle = function(b) {
        return b || (this.paused = !1),
          this.interval && clearInterval(this.interval),
          this.options.interval && !this.paused &&
            (this.interval = setInterval(
              a.proxy(this.next, this),
              this.options.interval
            )),
          this;
      },
      c.prototype.getItemIndex = function(a) {
        return this.$items = a.parent().children(".item"),
          this.$items.index(a || this.$active);
      },
      c.prototype.getItemForDirection = function(a, b) {
        var c = this.getItemIndex(b),
          d = "prev" == a && 0 === c || "next" == a &&
            c == this.$items.length - 1;
        if (d && !this.options.wrap) return b;
        var e = "prev" == a ? -1 : 1, f = (c + e) % this.$items.length;
        return this.$items.eq(f);
      },
      c.prototype.to = function(a) {
        var b = this,
          c = this.getItemIndex(
            this.$active = this.$element.find(".item.active")
          );
        return a > this.$items.length - 1 || 0 > a
          ? void 0
          : this.sliding
            ? this.$element.one("slid.bs.carousel", function() {
              b.to(a);
            })
            : c == a ? this.pause().cycle()
              : this.slide(a > c ? "next" : "prev", this.$items.eq(a));
      },
      c.prototype.pause = function(b) {
        return b || (this.paused = !0),
          this.$element.find(".next, .prev").length && a.support.transition &&
            (this.$element.trigger(a.support.transition.end), this.cycle(!0)),
          this.interval = clearInterval(this.interval),
          this;
      },
      c.prototype.next = function() {
        return this.sliding ? void 0 : this.slide("next");
      },
      c.prototype.prev = function() {
        return this.sliding ? void 0 : this.slide("prev");
      },
      c.prototype.slide = function(b, d) {
        var e = this.$element.find(".item.active"),
          f = d || this.getItemForDirection(b, e), g = this.interval,
          h = "next" == b ? "left" : "right", i = this;
        if (f.hasClass("active")) return this.sliding = !1;
        var j = f[0],
          k = a.Event("slide.bs.carousel", { relatedTarget: j, direction: h });
        if (this.$element.trigger(k), !k.isDefaultPrevented()) {
          if (this.sliding = !0, g && this.pause(), this.$indicators.length) {
            this.$indicators.find(".active").removeClass("active");
            var l = a(this.$indicators.children()[this.getItemIndex(f)]);
            l && l.addClass("active");
          }
          var m = a.Event(
            "slid.bs.carousel",
            { relatedTarget: j, direction: h }
          );
          return a.support.transition && this.$element.hasClass("slide")
            ? (f.addClass(b),
              f[0].offsetWidth,
              e.addClass(h),
              f.addClass(h),
              e.one("bsTransitionEnd", function() {
                f.removeClass([b, h].join(" ")).addClass("active"),
                  e.removeClass(["active", h].join(" ")),
                  i.sliding = !1,
                  setTimeout(function() {
                    i.$element.trigger(m);
                  }, 0);
              }).emulateTransitionEnd(c.TRANSITION_DURATION))
            : (e.removeClass("active"),
              f.addClass("active"),
              this.sliding = !1,
              this.$element.trigger(m)),
            g && this.cycle(),
            this;
        }
      };
    var d = a.fn.carousel;
    a.fn.carousel = b,
      a.fn.carousel.Constructor = c,
      a.fn.carousel.noConflict = function() {
        return a.fn.carousel = d, this;
      };
    var e = function(c) {
      var d, e = a(this),
        f = a(
          e.attr("data-target") || (d = e.attr("href")) &&
            d.replace(/.*(?=#[^\s]+$)/, "")
        );
      if (f.hasClass("carousel")) {
        var g = a.extend({}, f.data(), e.data()), h = e.attr("data-slide-to");
        h && (g.interval = !1),
          b.call(f, g),
          h && f.data("bs.carousel").to(h),
          c.preventDefault();
      }
    };
    a(document).on("click.bs.carousel.data-api", "[data-slide]", e).on(
      "click.bs.carousel.data-api",
      "[data-slide-to]",
      e
    ),
      a(window).on("load", function() {
        a('[data-ride="carousel"]').each(function() {
          var c = a(this);
          b.call(c, c.data());
        });
      });
  }(jQuery),
  +function(a) {
    "use strict";
    function b(b) {
      var c,
        d = b.attr("data-target") || (c = b.attr("href")) &&
          c.replace(/.*(?=#[^\s]+$)/, "");
      return a(d);
    }
    function c(b) {
      return this.each(function() {
        var c = a(this), e = c.data("bs.collapse"),
          f = a.extend({}, d.DEFAULTS, c.data(), "object" == typeof b && b);
        !e && f.toggle && /show|hide/.test(b) && (f.toggle = !1),
          e || c.data("bs.collapse", e = new d(this, f)),
          "string" == typeof b && e[b]();
      });
    }
    var d = function(b, c) {
      this.$element = a(b),
        this.options = a.extend({}, d.DEFAULTS, c),
        this.$trigger = a(
          '[data-toggle="collapse"][href="#' + b.id +
            '"],[data-toggle="collapse"][data-target="#' + b.id + '"]'
        ),
        this.transitioning = null,
        this.options.parent
          ? this.$parent = this.getParent()
          : this.addAriaAndCollapsedClass(this.$element, this.$trigger),
        this.options.toggle && this.toggle();
    };
    d.VERSION = "3.3.6",
      d.TRANSITION_DURATION = 350,
      d.DEFAULTS = { toggle: !0 },
      d.prototype.dimension = function() {
        var a = this.$element.hasClass("width");
        return a ? "width" : "height";
      },
      d.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
          var b,
            e = this.$parent &&
              this.$parent.children(".panel").children(".in, .collapsing");
          if (
            !(e && e.length &&
              (b = e.data("bs.collapse"), b && b.transitioning))
          ) {
            var f = a.Event("show.bs.collapse");
            if (
              this.$element.trigger(f),
                !f.isDefaultPrevented()
            ) {
              e && e.length &&
                (c.call(e, "hide"), b || e.data("bs.collapse", null));
              var g = this.dimension();
              this.$element.removeClass("collapse").addClass("collapsing")[g](
                0
              ).attr("aria-expanded", !0),
                this.$trigger.removeClass("collapsed").attr(
                  "aria-expanded",
                  !0
                ),
                this.transitioning = 1;
              var h = function() {
                this.$element.removeClass("collapsing").addClass("collapse in")
                  [g](""),
                  this.transitioning = 0,
                  this.$element.trigger("shown.bs.collapse");
              };
              if (!a.support.transition) return h.call(this);
              var i = a.camelCase(["scroll", g].join("-"));
              this.$element.one("bsTransitionEnd", a.proxy(h, this))
                .emulateTransitionEnd(d.TRANSITION_DURATION)[g](
                  this.$element[0][i]
                );
            }
          }
        }
      },
      d.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
          var b = a.Event("hide.bs.collapse");
          if (this.$element.trigger(b), !b.isDefaultPrevented()) {
            var c = this.dimension();
            this.$element[c](this.$element[c]())[0].offsetHeight,
              this.$element.addClass("collapsing").removeClass("collapse in")
                .attr("aria-expanded", !1),
              this.$trigger.addClass("collapsed").attr("aria-expanded", !1),
              this.transitioning = 1;
            var e = function() {
              this.transitioning = 0,
                this.$element.removeClass("collapsing").addClass("collapse")
                  .trigger("hidden.bs.collapse");
            };
            return a.support.transition
              ? void this.$element[c](0).one(
                "bsTransitionEnd",
                a.proxy(e, this)
              ).emulateTransitionEnd(d.TRANSITION_DURATION)
              : e.call(this);
          }
        }
      },
      d.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]();
      },
      d.prototype.getParent = function() {
        return a(this.options.parent).find(
          '[data-toggle="collapse"][data-parent="' + this.options.parent + '"]'
        ).each(a.proxy(function(c, d) {
          var e = a(d);
          this.addAriaAndCollapsedClass(b(e), e);
        }, this)).end();
      },
      d.prototype.addAriaAndCollapsedClass = function(a, b) {
        var c = a.hasClass("in");
        a.attr("aria-expanded", c),
          b.toggleClass("collapsed", !c).attr("aria-expanded", c);
      };
    var e = a.fn.collapse;
    a.fn.collapse = c,
      a.fn.collapse.Constructor = d,
      a.fn.collapse.noConflict = function() {
        return a.fn.collapse = e, this;
      },
      a(document).on(
        "click.bs.collapse.data-api",
        '[data-toggle="collapse"]',
        function(d) {
          var e = a(this);
          e.attr("data-target") || d.preventDefault();
          var f = b(e), g = f.data("bs.collapse"), h = g ? "toggle" : e.data();
          c.call(f, h);
        }
      );
  }(jQuery),
  +function(a) {
    "use strict";
    function b(b) {
      var c = b.attr("data-target");
      c ||
        (c = b.attr("href"),
          c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
      var d = c && a(c);
      return d && d.length ? d : b.parent();
    }
    function c(c) {
      c && 3 === c.which || (a(e).remove(), a(f).each(function() {
        var d = a(this), e = b(d), f = { relatedTarget: this };
        e.hasClass("open") &&
          (c && "click" == c.type &&
            /input|textarea/i.test(c.target.tagName) &&
            a.contains(e[0], c.target) ||
            (e.trigger(c = a.Event("hide.bs.dropdown", f)),
              c.isDefaultPrevented() || (d.attr("aria-expanded", "false"),
                e.removeClass("open").trigger(
                  a.Event("hidden.bs.dropdown", f)
                ))));
      }));
    }
    function d(b) {
      return this.each(function() {
        var c = a(this), d = c.data("bs.dropdown");
        d || c.data("bs.dropdown", d = new g(this)),
          "string" == typeof b && d[b].call(c);
      });
    }
    var e = ".dropdown-backdrop", f = '[data-toggle="dropdown"]',
      g = function(b) {
        a(b).on("click.bs.dropdown", this.toggle);
      };
    g.VERSION = "3.3.6",
      g.prototype.toggle = function(d) {
        var e = a(this);
        if (!e.is(".disabled, :disabled")) {
          var f = b(e), g = f.hasClass("open");
          if (c(), !g) {
            "ontouchstart" in document.documentElement &&
              !f.closest(".navbar-nav").length &&
              a(document.createElement("div")).addClass("dropdown-backdrop")
                .insertAfter(a(this)).on("click", c);
            var h = { relatedTarget: this };
            if (
              f.trigger(d = a.Event("show.bs.dropdown", h)),
                d.isDefaultPrevented()
            ) {
              return;
            }
            e.trigger("focus").attr("aria-expanded", "true"),
              f.toggleClass("open").trigger(a.Event("shown.bs.dropdown", h));
          }
          return !1;
        }
      },
      g.prototype.keydown = function(c) {
        if (
          /(38|40|27|32)/.test(c.which) &&
          !/input|textarea/i.test(c.target.tagName)
        ) {
          var d = a(this);
          if (
            c.preventDefault(),
              c.stopPropagation(),
              !d.is(".disabled, :disabled")
          ) {
            var e = b(d), g = e.hasClass("open");
            if (
              !g && 27 != c.which || g && 27 == c.which
            ) {
              return 27 == c.which && e.find(f).trigger("focus"),
                d.trigger("click");
            }
            var h = " li:not(.disabled):visible a",
              i = e.find(".dropdown-menu" + h);
            if (i.length) {
              var j = i.index(c.target);
              38 == c.which && j > 0 && j--,
                40 == c.which && j < i.length - 1 && j++,
                ~j || (j = 0),
                i.eq(j).trigger("focus");
            }
          }
        }
      };
    var h = a.fn.dropdown;
    a.fn.dropdown = d,
      a.fn.dropdown.Constructor = g,
      a.fn.dropdown.noConflict = function() {
        return a.fn.dropdown = h, this;
      },
      a(document).on("click.bs.dropdown.data-api", c).on(
        "click.bs.dropdown.data-api",
        ".dropdown form",
        function(a) {
          a.stopPropagation();
        }
      ).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on(
        "keydown.bs.dropdown.data-api",
        f,
        g.prototype.keydown
      ).on(
        "keydown.bs.dropdown.data-api",
        ".dropdown-menu",
        g.prototype.keydown
      );
  }(jQuery),
  +function(a) {
    "use strict";
    function b(b, d) {
      return this.each(function() {
        var e = a(this), f = e.data("bs.modal"),
          g = a.extend({}, c.DEFAULTS, e.data(), "object" == typeof b && b);
        f || e.data("bs.modal", f = new c(this, g)),
          "string" == typeof b ? f[b](d) : g.show && f.show(d);
      });
    }
    var c = function(b, c) {
      this.options = c,
        this.$body = a(document.body),
        this.$element = a(b),
        this.$dialog = this.$element.find(".modal-dialog"),
        this.$backdrop = null,
        this.isShown = null,
        this.originalBodyPad = null,
        this.scrollbarWidth = 0,
        this.ignoreBackdropClick = !1,
        this.options.remote &&
          this.$element.find(".modal-content").load(
            this.options.remote,
            a.proxy(function() {
              this.$element.trigger("loaded.bs.modal");
            }, this)
          );
    };
    c.VERSION = "3.3.6",
      c.TRANSITION_DURATION = 300,
      c.BACKDROP_TRANSITION_DURATION = 150,
      c.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 },
      c.prototype.toggle = function(a) {
        return this.isShown ? this.hide() : this.show(a);
      },
      c.prototype.show = function(b) {
        var d = this, e = a.Event("show.bs.modal", { relatedTarget: b });
        this.$element.trigger(e),
          this.isShown || e.isDefaultPrevented() ||
            (this.isShown = !0,
              this.checkScrollbar(),
              this.setScrollbar(),
              this.$body.addClass("modal-open"),
              this.escape(),
              this.resize(),
              this.$element.on(
                "click.dismiss.bs.modal",
                '[data-dismiss="modal"]',
                a.proxy(this.hide, this)
              ),
              this.$dialog.on("mousedown.dismiss.bs.modal", function() {
                d.$element.one("mouseup.dismiss.bs.modal", function(b) {
                  a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0);
                });
              }),
              this.backdrop(function() {
                var e = a.support.transition && d.$element.hasClass("fade");
                d.$element.parent().length || d.$element.appendTo(d.$body),
                  d.$element.show().scrollTop(0),
                  d.adjustDialog(),
                  e && d.$element[0].offsetWidth,
                  d.$element.addClass("in"),
                  d.enforceFocus();
                var f = a.Event("shown.bs.modal", { relatedTarget: b });
                e
                  ? d.$dialog.one("bsTransitionEnd", function() {
                    d.$element.trigger("focus").trigger(f);
                  }).emulateTransitionEnd(c.TRANSITION_DURATION)
                  : d.$element.trigger("focus").trigger(f);
              }));
      },
      c.prototype.hide = function(b) {
        b && b.preventDefault(),
          b = a.Event("hide.bs.modal"),
          this.$element.trigger(b),
          this.isShown && !b.isDefaultPrevented() &&
            (this.isShown = !1,
              this.escape(),
              this.resize(),
              a(document).off("focusin.bs.modal"),
              this.$element.removeClass("in").off("click.dismiss.bs.modal")
                .off("mouseup.dismiss.bs.modal"),
              this.$dialog.off("mousedown.dismiss.bs.modal"),
              a.support.transition && this.$element.hasClass("fade")
                ? this.$element.one(
                  "bsTransitionEnd",
                  a.proxy(this.hideModal, this)
                ).emulateTransitionEnd(c.TRANSITION_DURATION)
                : this.hideModal());
      },
      c.prototype.enforceFocus = function() {
        a(document).off("focusin.bs.modal").on(
          "focusin.bs.modal",
          a.proxy(function(a) {
            this.$element[0] === a.target ||
              this.$element.has(a.target).length ||
              this.$element.trigger("focus");
          }, this)
        );
      },
      c.prototype.escape = function() {
        this.isShown && this.options.keyboard
          ? this.$element.on("keydown.dismiss.bs.modal", a.proxy(function(a) {
            27 == a.which && this.hide();
          }, this))
          : this.isShown || this.$element.off("keydown.dismiss.bs.modal");
      },
      c.prototype.resize = function() {
        this.isShown
          ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this))
          : a(window).off("resize.bs.modal");
      },
      c.prototype.hideModal = function() {
        var a = this;
        this.$element.hide(),
          this.backdrop(function() {
            a.$body.removeClass("modal-open"),
              a.resetAdjustments(),
              a.resetScrollbar(),
              a.$element.trigger("hidden.bs.modal");
          });
      },
      c.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(),
          this.$backdrop = null;
      },
      c.prototype.backdrop = function(b) {
        var d = this, e = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
          var f = a.support.transition && e;
          if (
            this.$backdrop = a(document.createElement("div")).addClass(
              "modal-backdrop " + e
            ).appendTo(this.$body),
              this.$element.on("click.dismiss.bs.modal", a.proxy(function(a) {
                return this.ignoreBackdropClick
                  ? void (this.ignoreBackdropClick = !1)
                  : void (a.target === a.currentTarget &&
                    ("static" == this.options.backdrop
                      ? this.$element[0].focus()
                      : this.hide()));
              }, this)),
              f && this.$backdrop[0].offsetWidth,
              this.$backdrop.addClass("in"),
              !b
          ) {
            return;
          }
          f
            ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(
              c.BACKDROP_TRANSITION_DURATION
            )
            : b();
        } else if (!this.isShown && this.$backdrop) {
          this.$backdrop.removeClass("in");
          var g = function() {
            d.removeBackdrop(),
              b && b();
          };
          a.support.transition && this.$element.hasClass("fade")
            ? this.$backdrop.one("bsTransitionEnd", g).emulateTransitionEnd(
              c.BACKDROP_TRANSITION_DURATION
            )
            : g();
        } else b && b();
      },
      c.prototype.handleUpdate = function() {
        this.adjustDialog();
      },
      c.prototype.adjustDialog = function() {
        var a =
          this.$element[0].scrollHeight >
            document.documentElement.clientHeight;
        this.$element.css(
          {
            paddingLeft: !this.bodyIsOverflowing && a
              ? this.scrollbarWidth
              : "",
            paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth
              : ""
          }
        );
      },
      c.prototype.resetAdjustments = function() {
        this.$element.css({ paddingLeft: "", paddingRight: "" });
      },
      c.prototype.checkScrollbar = function() {
        var a = window.innerWidth;
        if (!a) {
          var b = document.documentElement.getBoundingClientRect();
          a = b.right - Math.abs(b.left);
        }
        this.bodyIsOverflowing = document.body.clientWidth < a,
          this.scrollbarWidth = this.measureScrollbar();
      },
      c.prototype.setScrollbar = function() {
        var a = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "",
          this.bodyIsOverflowing &&
            this.$body.css("padding-right", a + this.scrollbarWidth);
      },
      c.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad);
      },
      c.prototype.measureScrollbar = function() {
        var a = document.createElement("div");
        a.className = "modal-scrollbar-measure",
          this.$body.append(a);
        var b = a.offsetWidth - a.clientWidth;
        return this.$body[0].removeChild(a), b;
      };
    var d = a.fn.modal;
    a.fn.modal = b,
      a.fn.modal.Constructor = c,
      a.fn.modal.noConflict = function() {
        return a.fn.modal = d, this;
      },
      a(document).on(
        "click.bs.modal.data-api",
        '[data-toggle="modal"]',
        function(c) {
          var d = a(this), e = d.attr("href"), f = a(
            d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, "")
          ), g = f.data("bs.modal")
            ? "toggle"
            : a.extend({ remote: !/#/.test(e) && e }, f.data(), d.data());
          d.is("a") && c.preventDefault(),
            f.one("show.bs.modal", function(a) {
              a.isDefaultPrevented() || f.one("hidden.bs.modal", function() {
                d.is(":visible") && d.trigger("focus");
              });
            }),
            b.call(f, g, this);
        }
      );
  }(jQuery),
  +function(a) {
    "use strict";
    function b(b) {
      return this.each(function() {
        var d = a(this), e = d.data("bs.tooltip"),
          f = "object" == typeof b && b;
        (e || !/destroy|hide/.test(b)) &&
          (e || d.data("bs.tooltip", e = new c(this, f)),
            "string" == typeof b && e[b]());
      });
    }
    var c = function(a, b) {
      this.type = null,
        this.options = null,
        this.enabled = null,
        this.timeout = null,
        this.hoverState = null,
        this.$element = null,
        this.inState = null,
        this.init("tooltip", a, b);
    };
    c.VERSION = "3.3.6",
      c.TRANSITION_DURATION = 150,
      c.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template:
          '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: { selector: "body", padding: 0 }
      },
      c.prototype.init = function(b, c, d) {
        if (
          this.enabled = !0,
            this.type = b,
            this.$element = a(c),
            this.options = this.getOptions(d),
            this.$viewport = this.options.viewport &&
              a(a.isFunction(this.options.viewport)
                ? this.options.viewport.call(this, this.$element)
                : this.options.viewport.selector || this.options.viewport),
            this.inState = { click: !1, hover: !1, focus: !1 },
            this.$element[0] instanceof document.constructor &&
              !this.options.selector
        ) {
          throw new Error(
            "`selector` option must be specified when initializing " +
              this.type + " on the window.document object!"
          );
        }
        for (var e = this.options.trigger.split(" "), f = e.length; f--;) {
          var g = e[f];
          if ("click" == g) {
            this.$element.on(
              "click." + this.type,
              this.options.selector,
              a.proxy(this.toggle, this)
            );
          } else if ("manual" != g) {
            var h = "hover" == g ? "mouseenter" : "focusin", i = "hover" == g
              ? "mouseleave"
              : "focusout";
            this.$element.on(
              h + "." + this.type,
              this.options.selector,
              a.proxy(this.enter, this)
            ),
              this.$element.on(
                i + "." + this.type,
                this.options.selector,
                a.proxy(this.leave, this)
              );
          }
        }
        this.options.selector
          ? this._options = a.extend(
            {},
            this.options,
            { trigger: "manual", selector: "" }
          )
          : this.fixTitle();
      },
      c.prototype.getDefaults = function() {
        return c.DEFAULTS;
      },
      c.prototype.getOptions = function(b) {
        return b = a.extend({}, this.getDefaults(), this.$element.data(), b),
          b.delay && "number" == typeof b.delay &&
            (b.delay = { show: b.delay, hide: b.delay }),
          b;
      },
      c.prototype.getDelegateOptions = function() {
        var b = {}, c = this.getDefaults();
        return this._options && a.each(this._options, function(a, d) {
          c[a] != d && (b[a] = d);
        }), b;
      },
      c.prototype.enter = function(b) {
        var c = b instanceof this.constructor
          ? b
          : a(b.currentTarget).data("bs." + this.type);
        return c || (c = new this.constructor(
          b.currentTarget,
          this.getDelegateOptions()
        ), a(b.currentTarget).data("bs." + this.type, c)),
          b instanceof a.Event &&
            (c.inState["focusin" == b.type ? "focus" : "hover"] = !0),
          c.tip().hasClass("in") || "in" == c.hoverState
            ? void (c.hoverState = "in")
            : (clearTimeout(c.timeout),
              c.hoverState = "in",
              c.options.delay && c.options.delay.show
                ? void (c.timeout = setTimeout(function() {
                  "in" == c.hoverState && c.show();
                }, c.options.delay.show))
                : c.show());
      },
      c.prototype.isInStateTrue = function() {
        for (var a in this.inState) if (this.inState[a]) return !0;
        return !1;
      },
      c.prototype.leave = function(b) {
        var c = b instanceof this.constructor
          ? b
          : a(b.currentTarget).data("bs." + this.type);
        return c || (c = new this.constructor(
          b.currentTarget,
          this.getDelegateOptions()
        ), a(b.currentTarget).data("bs." + this.type, c)),
          b instanceof a.Event &&
            (c.inState["focusout" == b.type ? "focus" : "hover"] = !1),
          c.isInStateTrue()
            ? void 0
            : (clearTimeout(c.timeout),
              c.hoverState = "out",
              c.options.delay && c.options.delay.hide
                ? void (c.timeout = setTimeout(function() {
                  "out" == c.hoverState && c.hide();
                }, c.options.delay.hide))
                : c.hide());
      },
      c.prototype.show = function() {
        var b = a.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
          this.$element.trigger(b);
          var d = a.contains(
            this.$element[0].ownerDocument.documentElement,
            this.$element[0]
          );
          if (b.isDefaultPrevented() || !d) return;
          var e = this, f = this.tip(), g = this.getUID(this.type);
          this.setContent(),
            f.attr("id", g),
            this.$element.attr("aria-describedby", g),
            this.options.animation && f.addClass("fade");
          var h = "function" == typeof this.options.placement
            ? this.options.placement.call(this, f[0], this.$element[0])
            : this.options.placement, i = /\s?auto?\s?/i, j = i.test(h);
          j && (h = h.replace(i, "") || "top"),
            f.detach().css({ top: 0, left: 0, display: "block" }).addClass(h)
              .data("bs." + this.type, this),
            this.options.container
              ? f.appendTo(this.options.container)
              : f.insertAfter(this.$element),
            this.$element.trigger("inserted.bs." + this.type);
          var k = this.getPosition(), l = f[0].offsetWidth,
            m = f[0].offsetHeight;
          if (j) {
            var n = h, o = this.getPosition(this.$viewport);
            h = "bottom" == h && k.bottom + m > o.bottom
              ? "top"
              : "top" == h && k.top - m < o.top
                ? "bottom"
                : "right" == h && k.right + l > o.width
                  ? "left"
                  : "left" == h && k.left - l < o.left ? "right" : h,
              f.removeClass(n).addClass(h);
          }
          var p = this.getCalculatedOffset(h, k, l, m);
          this.applyPlacement(p, h);
          var q = function() {
            var a = e.hoverState;
            e.$element.trigger("shown.bs." + e.type),
              e.hoverState = null,
              "out" == a && e.leave(e);
          };
          a.support.transition && this.$tip.hasClass("fade")
            ? f.one("bsTransitionEnd", q).emulateTransitionEnd(
              c.TRANSITION_DURATION
            )
            : q();
        }
      },
      c.prototype.applyPlacement = function(b, c) {
        var d = this.tip(), e = d[0].offsetWidth, f = d[0].offsetHeight,
          g = parseInt(d.css("margin-top"), 10),
          h = parseInt(d.css("margin-left"), 10);
        isNaN(g) && (g = 0),
          isNaN(h) && (h = 0),
          b.top += g,
          b.left += h,
          a.offset.setOffset(d[0], a.extend({ using: function(a) {
            d.css({ top: Math.round(a.top), left: Math.round(a.left) });
          } }, b), 0),
          d.addClass("in");
        var i = d[0].offsetWidth, j = d[0].offsetHeight;
        "top" == c && j != f && (b.top = b.top + f - j);
        var k = this.getViewportAdjustedDelta(c, b, i, j);
        k.left ? b.left += k.left : b.top += k.top;
        var l = /top|bottom/.test(c),
          m = l ? 2 * k.left - e + i : 2 * k.top - f + j, n = l
            ? "offsetWidth"
            : "offsetHeight";
        d.offset(b),
          this.replaceArrow(m, d[0][n], l);
      },
      c.prototype.replaceArrow = function(a, b, c) {
        this.arrow().css(c ? "left" : "top", 50 * (1 - a / b) + "%").css(
          c ? "top" : "left",
          ""
        );
      },
      c.prototype.setContent = function() {
        var a = this.tip(), b = this.getTitle();
        a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b),
          a.removeClass("fade in top bottom left right");
      },
      c.prototype.hide = function(b) {
        function d() {
          "in" != e.hoverState && f.detach(),
            e.$element.removeAttr("aria-describedby").trigger(
              "hidden.bs." + e.type
            ),
            b && b();
        }
        var e = this, f = a(this.$tip), g = a.Event("hide.bs." + this.type);
        return this.$element.trigger(g),
          g.isDefaultPrevented()
            ? void 0
            : (f.removeClass("in"),
              a.support.transition && f.hasClass("fade")
                ? f.one("bsTransitionEnd", d).emulateTransitionEnd(
                  c.TRANSITION_DURATION
                )
                : d(),
              this.hoverState = null,
              this);
      },
      c.prototype.fixTitle = function() {
        var a = this.$element;
        (a.attr("title") ||
          "string" != typeof a.attr("data-original-title")) &&
          a.attr("data-original-title", a.attr("title") || "").attr(
            "title",
            ""
          );
      },
      c.prototype.hasContent = function() {
        return this.getTitle();
      },
      c.prototype.getPosition = function(b) {
        b = b || this.$element;
        var c = b[0], d = "BODY" == c.tagName, e = c.getBoundingClientRect();
        null == e.width && (e = a.extend({}, e, {
          width: e.right - e.left,
          height: e.bottom - e.top
        }));
        var f = d ? { top: 0, left: 0 } : b.offset(), g = {
          scroll: d
            ? document.documentElement.scrollTop || document.body.scrollTop
            : b.scrollTop()
        }, h = d
          ? { width: a(window).width(), height: a(window).height() }
          : null;
        return a.extend({}, e, g, h, f);
      },
      c.prototype.getCalculatedOffset = function(a, b, c, d) {
        return "bottom" == a
          ? { top: b.top + b.height, left: b.left + b.width / 2 - c / 2 }
          : "top" == a
            ? { top: b.top - d, left: b.left + b.width / 2 - c / 2 }
            : "left" == a
              ? { top: b.top + b.height / 2 - d / 2, left: b.left - c }
              : { top: b.top + b.height / 2 - d / 2, left: b.left + b.width };
      },
      c.prototype.getViewportAdjustedDelta = function(a, b, c, d) {
        var e = { top: 0, left: 0 };
        if (!this.$viewport) return e;
        var f = this.options.viewport && this.options.viewport.padding || 0,
          g = this.getPosition(this.$viewport);
        if (/right|left/.test(a)) {
          var h = b.top - f - g.scroll, i = b.top + f - g.scroll + d;
          h < g.top
            ? e.top = g.top - h
            : i > g.top + g.height && (e.top = g.top + g.height - i);
        } else {
          var j = b.left - f, k = b.left + f + c;
          j < g.left
            ? e.left = g.left - j
            : k > g.right && (e.left = g.left + g.width - k);
        }
        return e;
      },
      c.prototype.getTitle = function() {
        var a, b = this.$element, c = this.options;
        return a = b.attr("data-original-title") ||
          ("function" == typeof c.title ? c.title.call(b[0]) : c.title);
      },
      c.prototype.getUID = function(a) {
        do a += ~~(1e6 * Math.random()); while (document.getElementById(a));
        return a;
      },
      c.prototype.tip = function() {
        if (
          !this.$tip &&
          (this.$tip = a(this.options.template), 1 != this.$tip.length)
        ) {
          throw new Error(
            this.type +
              " `template` option must consist of exactly 1 top-level element!"
          );
        }
        return this.$tip;
      },
      c.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow");
      },
      c.prototype.enable = function() {
        this.enabled = !0;
      },
      c.prototype.disable = function() {
        this.enabled = !1;
      },
      c.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled;
      },
      c.prototype.toggle = function(b) {
        var c = this;
        b &&
          (c = a(b.currentTarget).data("bs." + this.type),
            c || (c = new this.constructor(
              b.currentTarget,
              this.getDelegateOptions()
            ), a(b.currentTarget).data("bs." + this.type, c))),
          b
            ? (c.inState.click = !c.inState.click,
              c.isInStateTrue() ? c.enter(c) : c.leave(c))
            : c.tip().hasClass("in") ? c.leave(c) : c.enter(c);
      },
      c.prototype.destroy = function() {
        var a = this;
        clearTimeout(this.timeout),
          this.hide(function() {
            a.$element.off("." + a.type).removeData("bs." + a.type),
              a.$tip && a.$tip.detach(),
              a.$tip = null,
              a.$arrow = null,
              a.$viewport = null;
          });
      };
    var d = a.fn.tooltip;
    a.fn.tooltip = b,
      a.fn.tooltip.Constructor = c,
      a.fn.tooltip.noConflict = function() {
        return a.fn.tooltip = d, this;
      };
  }(jQuery),
  +function(a) {
    "use strict";
    function b(b) {
      return this.each(function() {
        var d = a(this), e = d.data("bs.popover"),
          f = "object" == typeof b && b;
        (e || !/destroy|hide/.test(b)) &&
          (e || d.data("bs.popover", e = new c(this, f)),
            "string" == typeof b && e[b]());
      });
    }
    var c = function(a, b) {
      this.init("popover", a, b);
    };
    if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");
    c.VERSION = "3.3.6",
      c.DEFAULTS = a.extend(
        {},
        a.fn.tooltip.Constructor.DEFAULTS,
        {
          placement: "right",
          trigger: "click",
          content: "",
          template:
            '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
        }
      ),
      c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype),
      c.prototype.constructor = c,
      c.prototype.getDefaults = function() {
        return c.DEFAULTS;
      },
      c.prototype.setContent = function() {
        var a = this.tip(), b = this.getTitle(), c = this.getContent();
        a.find(".popover-title")[this.options.html ? "html" : "text"](b),
          a.find(".popover-content").children().detach().end()
            [this.options.html
              ? "string" == typeof c ? "html" : "append"
              : "text"](c),
          a.removeClass("fade top bottom left right in"),
          a.find(".popover-title").html() || a.find(".popover-title").hide();
      },
      c.prototype.hasContent = function() {
        return this.getTitle() || this.getContent();
      },
      c.prototype.getContent = function() {
        var a = this.$element, b = this.options;
        return a.attr("data-content") ||
          ("function" == typeof b.content ? b.content.call(a[0]) : b.content);
      },
      c.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow");
      };
    var d = a.fn.popover;
    a.fn.popover = b,
      a.fn.popover.Constructor = c,
      a.fn.popover.noConflict = function() {
        return a.fn.popover = d, this;
      };
  }(jQuery),
  +function(a) {
    "use strict";
    function b(c, d) {
      this.$body = a(document.body),
        this.$scrollElement = a(a(c).is(document.body) ? window : c),
        this.options = a.extend({}, b.DEFAULTS, d),
        this.selector = (this.options.target || "") + " .nav li > a",
        this.offsets = [],
        this.targets = [],
        this.activeTarget = null,
        this.scrollHeight = 0,
        this.$scrollElement.on(
          "scroll.bs.scrollspy",
          a.proxy(this.process, this)
        ),
        this.refresh(),
        this.process();
    }
    function c(c) {
      return this.each(function() {
        var d = a(this), e = d.data("bs.scrollspy"),
          f = "object" == typeof c && c;
        e || d.data("bs.scrollspy", e = new b(this, f)),
          "string" == typeof c && e[c]();
      });
    }
    b.VERSION = "3.3.6",
      b.DEFAULTS = { offset: 10 },
      b.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight ||
          Math.max(
            this.$body[0].scrollHeight,
            document.documentElement.scrollHeight
          );
      },
      b.prototype.refresh = function() {
        var b = this, c = "offset", d = 0;
        this.offsets = [],
          this.targets = [],
          this.scrollHeight = this.getScrollHeight(),
          a.isWindow(this.$scrollElement[0]) ||
            (c = "position", d = this.$scrollElement.scrollTop()),
          this.$body.find(this.selector).map(function() {
            var b = a(this), e = b.data("target") || b.attr("href"),
              f = /^#./.test(e) && a(e);
            return f && f.length && f.is(":visible") &&
              [[f[c]().top + d, e]] || null;
          }).sort(function(a, b) {
            return a[0] - b[0];
          }).each(function() {
            b.offsets.push(this[0]),
              b.targets.push(this[1]);
          });
      },
      b.prototype.process = function() {
        var a, b = this.$scrollElement.scrollTop() + this.options.offset,
          c = this.getScrollHeight(),
          d = this.options.offset + c - this.$scrollElement.height(),
          e = this.offsets, f = this.targets, g = this.activeTarget;
        if (
          this.scrollHeight != c && this.refresh(),
            b >= d
        ) {
          return g != (a = f[f.length - 1]) && this.activate(a);
        }
        if (g && b < e[0]) return this.activeTarget = null, this.clear();
        for (a = e.length; a--;) {
          g != f[a] && b >= e[a] && (void 0 === e[a + 1] || b < e[a + 1]) &&
            this.activate(f[a]);
        }
      },
      b.prototype.activate = function(b) {
        this.activeTarget = b,
          this.clear();
        var c = this.selector + '[data-target="' + b + '"],' + this.selector +
          '[href="' + b + '"]', d = a(c).parents("li").addClass("active");
        d.parent(".dropdown-menu").length &&
          (d = d.closest("li.dropdown").addClass("active")),
          d.trigger("activate.bs.scrollspy");
      },
      b.prototype.clear = function() {
        a(this.selector).parentsUntil(this.options.target, ".active")
          .removeClass("active");
      };
    var d = a.fn.scrollspy;
    a.fn.scrollspy = c,
      a.fn.scrollspy.Constructor = b,
      a.fn.scrollspy.noConflict = function() {
        return a.fn.scrollspy = d, this;
      },
      a(window).on("load.bs.scrollspy.data-api", function() {
        a('[data-spy="scroll"]').each(function() {
          var b = a(this);
          c.call(b, b.data());
        });
      });
  }(jQuery),
  +function(a) {
    "use strict";
    function b(b) {
      return this.each(function() {
        var d = a(this), e = d.data("bs.tab");
        e || d.data("bs.tab", e = new c(this)),
          "string" == typeof b && e[b]();
      });
    }
    var c = function(b) {
      this.element = a(b);
    };
    c.VERSION = "3.3.6",
      c.TRANSITION_DURATION = 150,
      c.prototype.show = function() {
        var b = this.element, c = b.closest("ul:not(.dropdown-menu)"),
          d = b.data("target");
        if (

          d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")),
            !b.parent("li").hasClass("active")
        ) {
          var e = c.find(".active:last a"),
            f = a.Event("hide.bs.tab", { relatedTarget: b[0] }),
            g = a.Event("show.bs.tab", { relatedTarget: e[0] });
          if (
            e.trigger(f),
              b.trigger(g),
              !g.isDefaultPrevented() && !f.isDefaultPrevented()
          ) {
            var h = a(d);
            this.activate(b.closest("li"), c),
              this.activate(h, h.parent(), function() {
                e.trigger({ type: "hidden.bs.tab", relatedTarget: b[0] }),
                  b.trigger({ type: "shown.bs.tab", relatedTarget: e[0] });
              });
          }
        }
      },
      c.prototype.activate = function(b, d, e) {
        function f() {
          g.removeClass("active").find("> .dropdown-menu > .active")
            .removeClass("active").end().find('[data-toggle="tab"]').attr(
              "aria-expanded",
              !1
            ),
            b.addClass("active").find('[data-toggle="tab"]').attr(
              "aria-expanded",
              !0
            ),
            h ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"),
            b.parent(".dropdown-menu").length &&
              b.closest("li.dropdown").addClass("active").end().find(
                '[data-toggle="tab"]'
              ).attr("aria-expanded", !0),
            e && e();
        }
        var g = d.find("> .active"),
          h = e && a.support.transition &&
            (g.length && g.hasClass("fade") || !!d.find("> .fade").length);
        g.length && h
          ? g.one("bsTransitionEnd", f).emulateTransitionEnd(
            c.TRANSITION_DURATION
          )
          : f(),
          g.removeClass("in");
      };
    var d = a.fn.tab;
    a.fn.tab = b,
      a.fn.tab.Constructor = c,
      a.fn.tab.noConflict = function() {
        return a.fn.tab = d, this;
      };
    var e = function(c) {
      c.preventDefault(),
        b.call(a(this), "show");
    };
    a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', e).on(
      "click.bs.tab.data-api",
      '[data-toggle="pill"]',
      e
    );
  }(jQuery),
  +function(a) {
    "use strict";
    function b(b) {
      return this.each(function() {
        var d = a(this), e = d.data("bs.affix"), f = "object" == typeof b && b;
        e || d.data("bs.affix", e = new c(this, f)),
          "string" == typeof b && e[b]();
      });
    }
    var c = function(b, d) {
      this.options = a.extend({}, c.DEFAULTS, d),
        this.$target = a(this.options.target).on(
          "scroll.bs.affix.data-api",
          a.proxy(this.checkPosition, this)
        ).on(
          "click.bs.affix.data-api",
          a.proxy(this.checkPositionWithEventLoop, this)
        ),
        this.$element = a(b),
        this.affixed = null,
        this.unpin = null,
        this.pinnedOffset = null,
        this.checkPosition();
    };
    c.VERSION = "3.3.6",
      c.RESET = "affix affix-top affix-bottom",
      c.DEFAULTS = { offset: 0, target: window },
      c.prototype.getState = function(a, b, c, d) {
        var e = this.$target.scrollTop(), f = this.$element.offset(),
          g = this.$target.height();
        if (null != c && "top" == this.affixed) return c > e ? "top" : !1;
        if ("bottom" == this.affixed) {
          return null != c
            ? e + this.unpin <= f.top ? !1 : "bottom"
            : a - d >= e + g ? !1 : "bottom";
        }
        var h = null == this.affixed, i = h ? e : f.top, j = h ? g : b;
        return null != c && c >= e
          ? "top"
          : null != d && i + j >= a - d ? "bottom" : !1;
      },
      c.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(c.RESET).addClass("affix");
        var a = this.$target.scrollTop(), b = this.$element.offset();
        return this.pinnedOffset = b.top - a;
      },
      c.prototype.checkPositionWithEventLoop = function() {
        setTimeout(a.proxy(this.checkPosition, this), 1);
      },
      c.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
          var b = this.$element.height(), d = this.options.offset, e = d.top,
            f = d.bottom,
            g = Math.max(a(document).height(), a(document.body).height());
          "object" != typeof d && (f = e = d),
            "function" == typeof e && (e = d.top(this.$element)),
            "function" == typeof f && (f = d.bottom(this.$element));
          var h = this.getState(g, b, e, f);
          if (this.affixed != h) {
            null != this.unpin && this.$element.css("top", "");
            var i = "affix" + (h ? "-" + h : ""), j = a.Event(i + ".bs.affix");
            if (this.$element.trigger(j), j.isDefaultPrevented()) return;
            this.affixed = h,
              this.unpin = "bottom" == h ? this.getPinnedOffset() : null,
              this.$element.removeClass(c.RESET).addClass(i).trigger(
                i.replace("affix", "affixed") + ".bs.affix"
              );
          }
          "bottom" == h && this.$element.offset({ top: g - b - f });
        }
      };
    var d = a.fn.affix;
    a.fn.affix = b,
      a.fn.affix.Constructor = c,
      a.fn.affix.noConflict = function() {
        return a.fn.affix = d, this;
      },
      a(window).on("load", function() {
        a('[data-spy="affix"]').each(function() {
          var c = a(this), d = c.data();
          d.offset = d.offset || {},
            null != d.offsetBottom && (d.offset.bottom = d.offsetBottom),
            null != d.offsetTop && (d.offset.top = d.offsetTop),
            b.call(c, d);
        });
      });
  }(jQuery);
