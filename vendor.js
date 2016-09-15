(function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
})("undefined" != typeof window ? window : this, function(e, t) {
    function n(e) {
        var t = e.length,
            n = ot.type(e);
        return "function" === n || ot.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
    }

    function r(e, t, n) {
        if (ot.isFunction(t)) return ot.grep(e, function(e, r) {
            return !!t.call(e, r, e) !== n
        });
        if (t.nodeType) return ot.grep(e, function(e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (dt.test(t)) return ot.filter(t, e, n);
            t = ot.filter(t, e)
        }
        return ot.grep(e, function(e) {
            return ot.inArray(e, t) >= 0 !== n
        })
    }

    function i(e, t) {
        do e = e[t]; while (e && 1 !== e.nodeType);
        return e
    }

    function o(e) {
        var t = wt[e] = {};
        return ot.each(e.match(xt) || [], function(e, n) {
            t[n] = !0
        }), t
    }

    function a() {
        mt.addEventListener ? (mt.removeEventListener("DOMContentLoaded", s, !1), e.removeEventListener("load", s, !1)) : (mt.detachEvent("onreadystatechange", s), e.detachEvent("onload", s))
    }

    function s() {
        (mt.addEventListener || "load" === event.type || "complete" === mt.readyState) && (a(), ot.ready())
    }

    function u(e, t, n) {
        if (void 0 === n && 1 === e.nodeType) {
            var r = "data-" + t.replace(kt, "-$1").toLowerCase();
            if (n = e.getAttribute(r), "string" == typeof n) {
                try {
                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : Nt.test(n) ? ot.parseJSON(n) : n
                } catch (i) {}
                ot.data(e, t, n)
            } else n = void 0
        }
        return n
    }

    function l(e) {
        var t;
        for (t in e)
            if (("data" !== t || !ot.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }

    function c(e, t, n, r) {
        if (ot.acceptData(e)) {
            var i, o, a = ot.expando,
                s = e.nodeType,
                u = s ? ot.cache : e,
                l = s ? e[a] : e[a] && a;
            if (l && u[l] && (r || u[l].data) || void 0 !== n || "string" != typeof t) return l || (l = s ? e[a] = G.pop() || ot.guid++ : a), u[l] || (u[l] = s ? {} : {
                toJSON: ot.noop
            }), ("object" == typeof t || "function" == typeof t) && (r ? u[l] = ot.extend(u[l], t) : u[l].data = ot.extend(u[l].data, t)), o = u[l], r || (o.data || (o.data = {}), o = o.data), void 0 !== n && (o[ot.camelCase(t)] = n), "string" == typeof t ? (i = o[t], null == i && (i = o[ot.camelCase(t)])) : i = o, i
        }
    }

    function f(e, t, n) {
        if (ot.acceptData(e)) {
            var r, i, o = e.nodeType,
                a = o ? ot.cache : e,
                s = o ? e[ot.expando] : ot.expando;
            if (a[s]) {
                if (t && (r = n ? a[s] : a[s].data)) {
                    ot.isArray(t) ? t = t.concat(ot.map(t, ot.camelCase)) : t in r ? t = [t] : (t = ot.camelCase(t), t = t in r ? [t] : t.split(" ")), i = t.length;
                    for (; i--;) delete r[t[i]];
                    if (n ? !l(r) : !ot.isEmptyObject(r)) return
                }(n || (delete a[s].data, l(a[s]))) && (o ? ot.cleanData([e], !0) : rt.deleteExpando || a != a.window ? delete a[s] : a[s] = null)
            }
        }
    }

    function p() {
        return !0
    }

    function d() {
        return !1
    }

    function h() {
        try {
            return mt.activeElement
        } catch (e) {}
    }

    function m(e) {
        var t = qt.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement)
            for (; t.length;) n.createElement(t.pop());
        return n
    }

    function g(e, t) {
        var n, r, i = 0,
            o = typeof e.getElementsByTagName !== Ct ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== Ct ? e.querySelectorAll(t || "*") : void 0;
        if (!o)
            for (o = [], n = e.childNodes || e; null != (r = n[i]); i++) !t || ot.nodeName(r, t) ? o.push(r) : ot.merge(o, g(r, t));
        return void 0 === t || t && ot.nodeName(e, t) ? ot.merge([e], o) : o
    }

    function v(e) {
        Lt.test(e.type) && (e.defaultChecked = e.checked)
    }

    function y(e, t) {
        return ot.nodeName(e, "table") && ot.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function b(e) {
        return e.type = (null !== ot.find.attr(e, "type")) + "/" + e.type, e
    }

    function x(e) {
        var t = Gt.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function w(e, t) {
        for (var n, r = 0; null != (n = e[r]); r++) ot._data(n, "globalEval", !t || ot._data(t[r], "globalEval"))
    }

    function T(e, t) {
        if (1 === t.nodeType && ot.hasData(e)) {
            var n, r, i, o = ot._data(e),
                a = ot._data(t, o),
                s = o.events;
            if (s) {
                delete a.handle, a.events = {};
                for (n in s)
                    for (r = 0, i = s[n].length; i > r; r++) ot.event.add(t, n, s[n][r])
            }
            a.data && (a.data = ot.extend({}, a.data))
        }
    }

    function E(e, t) {
        var n, r, i;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !rt.noCloneEvent && t[ot.expando]) {
                i = ot._data(t);
                for (r in i.events) ot.removeEvent(t, r, i.handle);
                t.removeAttribute(ot.expando)
            }
            "script" === n && t.text !== e.text ? (b(t).text = e.text, x(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), rt.html5Clone && e.innerHTML && !ot.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Lt.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }

    function C(t, n) {
        var r = ot(n.createElement(t)).appendTo(n.body),
            i = e.getDefaultComputedStyle ? e.getDefaultComputedStyle(r[0]).display : ot.css(r[0], "display");
        return r.detach(), i
    }

    function N(e) {
        var t = mt,
            n = en[e];
        return n || (n = C(e, t), "none" !== n && n || (Zt = (Zt || ot("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (Zt[0].contentWindow || Zt[0].contentDocument).document, t.write(), t.close(), n = C(e, t), Zt.detach()), en[e] = n), n
    }

    function k(e, t) {
        return {
            get: function() {
                var n = e();
                if (null != n) return n ? (delete this.get, void 0) : (this.get = t).apply(this, arguments)
            }
        }
    }

    function S(e, t) {
        if (t in e) return t;
        for (var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = hn.length; i--;)
            if (t = hn[i] + n, t in e) return t;
        return r
    }

    function A(e, t) {
        for (var n, r, i, o = [], a = 0, s = e.length; s > a; a++) r = e[a], r.style && (o[a] = ot._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && jt(r) && (o[a] = ot._data(r, "olddisplay", N(r.nodeName)))) : o[a] || (i = jt(r), (n && "none" !== n || !i) && ot._data(r, "olddisplay", i ? n : ot.css(r, "display"))));
        for (a = 0; s > a; a++) r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
        return e
    }

    function j(e, t, n) {
        var r = cn.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function D(e, t, n, r, i) {
        for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > o; o += 2) "margin" === n && (a += ot.css(e, n + At[o], !0, i)), r ? ("content" === n && (a -= ot.css(e, "padding" + At[o], !0, i)), "margin" !== n && (a -= ot.css(e, "border" + At[o] + "Width", !0, i))) : (a += ot.css(e, "padding" + At[o], !0, i), "padding" !== n && (a += ot.css(e, "border" + At[o] + "Width", !0, i)));
        return a
    }

    function L(e, t, n) {
        var r = !0,
            i = "width" === t ? e.offsetWidth : e.offsetHeight,
            o = tn(e),
            a = rt.boxSizing() && "border-box" === ot.css(e, "boxSizing", !1, o);
        if (0 >= i || null == i) {
            if (i = nn(e, t, o), (0 > i || null == i) && (i = e.style[t]), on.test(i)) return i;
            r = a && (rt.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + D(e, t, n || (a ? "border" : "content"), r, o) + "px"
    }

    function _(e, t, n, r, i) {
        return new _.prototype.init(e, t, n, r, i)
    }

    function H() {
        return setTimeout(function() {
            mn = void 0
        }), mn = ot.now()
    }

    function O(e, t) {
        var n, r = {
                height: e
            },
            i = 0;
        for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = At[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function M(e, t, n) {
        for (var r, i = (wn[t] || []).concat(wn["*"]), o = 0, a = i.length; a > o; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function F(e, t, n) {
        var r, i, o, a, s, u, l, c, f = this,
            p = {},
            d = e.style,
            h = e.nodeType && jt(e),
            m = ot._data(e, "fxshow");
        n.queue || (s = ot._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, u = s.empty.fire, s.empty.fire = function() {
            s.unqueued || u()
        }), s.unqueued++, f.always(function() {
            f.always(function() {
                s.unqueued--, ot.queue(e, "fx").length || s.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [d.overflow, d.overflowX, d.overflowY], l = ot.css(e, "display"), c = N(e.nodeName), "none" === l && (l = c), "inline" === l && "none" === ot.css(e, "float") && (rt.inlineBlockNeedsLayout && "inline" !== c ? d.zoom = 1 : d.display = "inline-block")), n.overflow && (d.overflow = "hidden", rt.shrinkWrapBlocks() || f.always(function() {
            d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2]
        }));
        for (r in t)
            if (i = t[r], vn.exec(i)) {
                if (delete t[r], o = o || "toggle" === i, i === (h ? "hide" : "show")) {
                    if ("show" !== i || !m || void 0 === m[r]) continue;
                    h = !0
                }
                p[r] = m && m[r] || ot.style(e, r)
            }
        if (!ot.isEmptyObject(p)) {
            m ? "hidden" in m && (h = m.hidden) : m = ot._data(e, "fxshow", {}), o && (m.hidden = !h), h ? ot(e).show() : f.done(function() {
                ot(e).hide()
            }), f.done(function() {
                var t;
                ot._removeData(e, "fxshow");
                for (t in p) ot.style(e, t, p[t])
            });
            for (r in p) a = M(h ? m[r] : 0, r, f), r in m || (m[r] = a.start, h && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
        }
    }

    function q(e, t) {
        var n, r, i, o, a;
        for (n in e)
            if (r = ot.camelCase(n), i = t[r], o = e[n], ot.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), a = ot.cssHooks[r], a && "expand" in a) {
                o = a.expand(o), delete e[r];
                for (n in o) n in e || (e[n] = o[n], t[n] = i)
            } else t[r] = i
    }

    function R(e, t, n) {
        var r, i, o = 0,
            a = xn.length,
            s = ot.Deferred().always(function() {
                delete u.elem
            }),
            u = function() {
                if (i) return !1;
                for (var t = mn || H(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r, a = 0, u = l.tweens.length; u > a; a++) l.tweens[a].run(o);
                return s.notifyWith(e, [l, o, n]), 1 > o && u ? n : (s.resolveWith(e, [l]), !1)
            },
            l = s.promise({
                elem: e,
                props: ot.extend({}, t),
                opts: ot.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: mn || H(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var r = ot.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                    return l.tweens.push(r), r
                },
                stop: function(t) {
                    var n = 0,
                        r = t ? l.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; r > n; n++) l.tweens[n].run(1);
                    return t ? s.resolveWith(e, [l, t]) : s.rejectWith(e, [l, t]), this
                }
            }),
            c = l.props;
        for (q(c, l.opts.specialEasing); a > o; o++)
            if (r = xn[o].call(l, e, c, l.opts)) return r;
        return ot.map(c, M, l), ot.isFunction(l.opts.start) && l.opts.start.call(e, l), ot.fx.timer(ot.extend(u, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }

    function B(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
                o = t.toLowerCase().match(xt) || [];
            if (ot.isFunction(n))
                for (; r = o[i++];) "+" === r.charAt(0) ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function P(e, t, n, r) {
        function i(s) {
            var u;
            return o[s] = !0, ot.each(e[s] || [], function(e, s) {
                var l = s(t, n, r);
                return "string" != typeof l || a || o[l] ? a ? !(u = l) : void 0 : (t.dataTypes.unshift(l), i(l), !1)
            }), u
        }
        var o = {},
            a = e === Xn;
        return i(t.dataTypes[0]) || !o["*"] && i("*")
    }

    function I(e, t) {
        var n, r, i = ot.ajaxSettings.flatOptions || {};
        for (r in t) void 0 !== t[r] && ((i[r] ? e : n || (n = {}))[r] = t[r]);
        return n && ot.extend(!0, e, n), e
    }

    function W(e, t, n) {
        for (var r, i, o, a, s = e.contents, u = e.dataTypes;
            "*" === u[0];) u.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
        if (i)
            for (a in s)
                if (s[a] && s[a].test(i)) {
                    u.unshift(a);
                    break
                }
        if (u[0] in n) o = u[0];
        else {
            for (a in n) {
                if (!u[0] || e.converters[a + " " + u[0]]) {
                    o = a;
                    break
                }
                r || (r = a)
            }
            o = o || r
        }
        return o ? (o !== u[0] && u.unshift(o), n[o]) : void 0
    }

    function $(e, t, n, r) {
        var i, o, a, s, u, l = {},
            c = e.dataTypes.slice();
        if (c[1])
            for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
        for (o = c.shift(); o;)
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                if ("*" === o) o = u;
                else if ("*" !== u && u !== o) {
            if (a = l[u + " " + o] || l["* " + o], !a)
                for (i in l)
                    if (s = i.split(" "), s[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                        a === !0 ? a = l[i] : l[i] !== !0 && (o = s[0], c.unshift(s[1]));
                        break
                    }
            if (a !== !0)
                if (a && e["throws"]) t = a(t);
                else try {
                    t = a(t)
                } catch (f) {
                    return {
                        state: "parsererror",
                        error: a ? f : "No conversion from " + u + " to " + o
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }

    function z(e, t, n, r) {
        var i;
        if (ot.isArray(t)) ot.each(t, function(t, i) {
            n || Jn.test(e) ? r(e, i) : z(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
        });
        else if (n || "object" !== ot.type(t)) r(e, t);
        else
            for (i in t) z(e + "[" + i + "]", t[i], n, r)
    }

    function X() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }

    function V() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }

    function U(e) {
        return ot.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }
    var G = [],
        J = G.slice,
        Y = G.concat,
        K = G.push,
        Q = G.indexOf,
        Z = {},
        et = Z.toString,
        tt = Z.hasOwnProperty,
        nt = "".trim,
        rt = {},
        it = "1.11.0",
        ot = function(e, t) {
            return new ot.fn.init(e, t)
        },
        at = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        st = /^-ms-/,
        ut = /-([\da-z])/gi,
        lt = function(e, t) {
            return t.toUpperCase()
        };
    ot.fn = ot.prototype = {
        jquery: it,
        constructor: ot,
        selector: "",
        length: 0,
        toArray: function() {
            return J.call(this)
        },
        get: function(e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : J.call(this)
        },
        pushStack: function(e) {
            var t = ot.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(e, t) {
            return ot.each(this, e, t)
        },
        map: function(e) {
            return this.pushStack(ot.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(J.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: K,
        sort: G.sort,
        splice: G.splice
    }, ot.extend = ot.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {},
            s = 1,
            u = arguments.length,
            l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || ot.isFunction(a) || (a = {}), s === u && (a = this, s--); u > s; s++)
            if (null != (i = arguments[s]))
                for (r in i) e = a[r], n = i[r], a !== n && (l && n && (ot.isPlainObject(n) || (t = ot.isArray(n))) ? (t ? (t = !1, o = e && ot.isArray(e) ? e : []) : o = e && ot.isPlainObject(e) ? e : {}, a[r] = ot.extend(l, o, n)) : void 0 !== n && (a[r] = n));
        return a
    }, ot.extend({
        expando: "jQuery" + (it + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === ot.type(e)
        },
        isArray: Array.isArray || function(e) {
            return "array" === ot.type(e)
        },
        isWindow: function(e) {
            return null != e && e == e.window
        },
        isNumeric: function(e) {
            return e - parseFloat(e) >= 0
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        isPlainObject: function(e) {
            var t;
            if (!e || "object" !== ot.type(e) || e.nodeType || ot.isWindow(e)) return !1;
            try {
                if (e.constructor && !tt.call(e, "constructor") && !tt.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (n) {
                return !1
            }
            if (rt.ownLast)
                for (t in e) return tt.call(e, t);
            for (t in e);
            return void 0 === t || tt.call(e, t)
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? Z[et.call(e)] || "object" : typeof e
        },
        globalEval: function(t) {
            t && ot.trim(t) && (e.execScript || function(t) {
                e.eval.call(e, t)
            })(t)
        },
        camelCase: function(e) {
            return e.replace(st, "ms-").replace(ut, lt)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, r) {
            var i, o = 0,
                a = e.length,
                s = n(e);
            if (r) {
                if (s)
                    for (; a > o && (i = t.apply(e[o], r), i !== !1); o++);
                else
                    for (o in e)
                        if (i = t.apply(e[o], r), i === !1) break
            } else if (s)
                for (; a > o && (i = t.call(e[o], o, e[o]), i !== !1); o++);
            else
                for (o in e)
                    if (i = t.call(e[o], o, e[o]), i === !1) break; return e
        },
        trim: nt && !nt.call("﻿ ") ? function(e) {
            return null == e ? "" : nt.call(e)
        } : function(e) {
            return null == e ? "" : (e + "").replace(at, "")
        },
        makeArray: function(e, t) {
            var r = t || [];
            return null != e && (n(Object(e)) ? ot.merge(r, "string" == typeof e ? [e] : e) : K.call(r, e)), r
        },
        inArray: function(e, t, n) {
            var r;
            if (t) {
                if (Q) return Q.call(t, e, n);
                for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++)
                    if (n in t && t[n] === e) return n
            }
            return -1
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; n > r;) e[i++] = t[r++];
            if (n !== n)
                for (; void 0 !== t[r];) e[i++] = t[r++];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            for (var r, i = [], o = 0, a = e.length, s = !n; a > o; o++) r = !t(e[o], o), r !== s && i.push(e[o]);
            return i
        },
        map: function(e, t, r) {
            var i, o = 0,
                a = e.length,
                s = n(e),
                u = [];
            if (s)
                for (; a > o; o++) i = t(e[o], o, r), null != i && u.push(i);
            else
                for (o in e) i = t(e[o], o, r), null != i && u.push(i);
            return Y.apply([], u)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, r, i;
            return "string" == typeof t && (i = e[t], t = e, e = i), ot.isFunction(e) ? (n = J.call(arguments, 2), r = function() {
                return e.apply(t || this, n.concat(J.call(arguments)))
            }, r.guid = e.guid = e.guid || ot.guid++, r) : void 0
        },
        now: function() {
            return +new Date
        },
        support: rt
    }), ot.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        Z["[object " + t + "]"] = t.toLowerCase()
    });
    var ct = function(e) {
        function t(e, t, n, r) {
            var i, o, a, s, u, l, f, h, m, g;
            if ((t ? t.ownerDocument || t : P) !== _ && L(t), t = t || _, n = n || [], !e || "string" != typeof e) return n;
            if (1 !== (s = t.nodeType) && 9 !== s) return [];
            if (O && !r) {
                if (i = yt.exec(e))
                    if (a = i[1]) {
                        if (9 === s) {
                            if (o = t.getElementById(a), !o || !o.parentNode) return n;
                            if (o.id === a) return n.push(o), n
                        } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && R(t, o) && o.id === a) return n.push(o), n
                    } else {
                        if (i[2]) return Z.apply(n, t.getElementsByTagName(e)), n;
                        if ((a = i[3]) && E.getElementsByClassName && t.getElementsByClassName) return Z.apply(n, t.getElementsByClassName(a)), n
                    }
                if (E.qsa && (!M || !M.test(e))) {
                    if (h = f = B, m = t, g = 9 === s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                        for (l = p(e), (f = t.getAttribute("id")) ? h = f.replace(xt, "\\$&") : t.setAttribute("id", h), h = "[id='" + h + "'] ", u = l.length; u--;) l[u] = h + d(l[u]);
                        m = bt.test(e) && c(t.parentNode) || t, g = l.join(",")
                    }
                    if (g) try {
                        return Z.apply(n, m.querySelectorAll(g)), n
                    } catch (v) {} finally {
                        f || t.removeAttribute("id")
                    }
                }
            }
            return w(e.replace(ut, "$1"), t, n, r)
        }

        function n() {
            function e(n, r) {
                return t.push(n + " ") > C.cacheLength && delete e[t.shift()], e[n + " "] = r
            }
            var t = [];
            return e
        }

        function r(e) {
            return e[B] = !0, e
        }

        function i(e) {
            var t = _.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function o(e, t) {
            for (var n = e.split("|"), r = e.length; r--;) C.attrHandle[n[r]] = t
        }

        function a(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || G) - (~e.sourceIndex || G);
            if (r) return r;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function s(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }

        function u(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function l(e) {
            return r(function(t) {
                return t = +t, r(function(n, r) {
                    for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }

        function c(e) {
            return e && typeof e.getElementsByTagName !== U && e
        }

        function f() {}

        function p(e, n) {
            var r, i, o, a, s, u, l, c = z[e + " "];
            if (c) return n ? 0 : c.slice(0);
            for (s = e, u = [], l = C.preFilter; s;) {
                (!r || (i = lt.exec(s))) && (i && (s = s.slice(i[0].length) || s), u.push(o = [])), r = !1, (i = ct.exec(s)) && (r = i.shift(), o.push({
                    value: r,
                    type: i[0].replace(ut, " ")
                }), s = s.slice(r.length));
                for (a in C.filter) !(i = ht[a].exec(s)) || l[a] && !(i = l[a](i)) || (r = i.shift(), o.push({
                    value: r,
                    type: a,
                    matches: i
                }), s = s.slice(r.length));
                if (!r) break
            }
            return n ? s.length : s ? t.error(e) : z(e, u).slice(0)
        }

        function d(e) {
            for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
            return r
        }

        function h(e, t, n) {
            var r = t.dir,
                i = n && "parentNode" === r,
                o = W++;
            return t.first ? function(t, n, o) {
                for (; t = t[r];)
                    if (1 === t.nodeType || i) return e(t, n, o)
            } : function(t, n, a) {
                var s, u, l = [I, o];
                if (a) {
                    for (; t = t[r];)
                        if ((1 === t.nodeType || i) && e(t, n, a)) return !0
                } else
                    for (; t = t[r];)
                        if (1 === t.nodeType || i) {
                            if (u = t[B] || (t[B] = {}), (s = u[r]) && s[0] === I && s[1] === o) return l[2] = s[2];
                            if (u[r] = l, l[2] = e(t, n, a)) return !0
                        }
            }
        }

        function m(e) {
            return e.length > 1 ? function(t, n, r) {
                for (var i = e.length; i--;)
                    if (!e[i](t, n, r)) return !1;
                return !0
            } : e[0]
        }

        function g(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; u > s; s++)(o = e[s]) && (!n || n(o, r, i)) && (a.push(o), l && t.push(s));
            return a
        }

        function v(e, t, n, i, o, a) {
            return i && !i[B] && (i = v(i)), o && !o[B] && (o = v(o, a)), r(function(r, a, s, u) {
                var l, c, f, p = [],
                    d = [],
                    h = a.length,
                    m = r || x(t || "*", s.nodeType ? [s] : s, []),
                    v = !e || !r && t ? m : g(m, p, e, s, u),
                    y = n ? o || (r ? e : h || i) ? [] : a : v;
                if (n && n(v, y, s, u), i)
                    for (l = g(y, d), i(l, [], s, u), c = l.length; c--;)(f = l[c]) && (y[d[c]] = !(v[d[c]] = f));
                if (r) {
                    if (o || e) {
                        if (o) {
                            for (l = [], c = y.length; c--;)(f = y[c]) && l.push(v[c] = f);
                            o(null, y = [], l, u)
                        }
                        for (c = y.length; c--;)(f = y[c]) && (l = o ? tt.call(r, f) : p[c]) > -1 && (r[l] = !(a[l] = f))
                    }
                } else y = g(y === a ? y.splice(h, y.length) : y), o ? o(null, a, y, u) : Z.apply(a, y)
            })
        }

        function y(e) {
            for (var t, n, r, i = e.length, o = C.relative[e[0].type], a = o || C.relative[" "], s = o ? 1 : 0, u = h(function(e) {
                    return e === t
                }, a, !0), l = h(function(e) {
                    return tt.call(t, e) > -1
                }, a, !0), c = [function(e, n, r) {
                    return !o && (r || n !== A) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r))
                }]; i > s; s++)
                if (n = C.relative[e[s].type]) c = [h(m(c), n)];
                else {
                    if (n = C.filter[e[s].type].apply(null, e[s].matches), n[B]) {
                        for (r = ++s; i > r && !C.relative[e[r].type]; r++);
                        return v(s > 1 && m(c), s > 1 && d(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(ut, "$1"), n, r > s && y(e.slice(s, r)), i > r && y(e = e.slice(r)), i > r && d(e))
                    }
                    c.push(n)
                }
            return m(c)
        }

        function b(e, n) {
            var i = n.length > 0,
                o = e.length > 0,
                a = function(r, a, s, u, l) {
                    var c, f, p, d = 0,
                        h = "0",
                        m = r && [],
                        v = [],
                        y = A,
                        b = r || o && C.find.TAG("*", l),
                        x = I += null == y ? 1 : Math.random() || .1,
                        w = b.length;
                    for (l && (A = a !== _ && a); h !== w && null != (c = b[h]); h++) {
                        if (o && c) {
                            for (f = 0; p = e[f++];)
                                if (p(c, a, s)) {
                                    u.push(c);
                                    break
                                }
                            l && (I = x)
                        }
                        i && ((c = !p && c) && d--, r && m.push(c))
                    }
                    if (d += h, i && h !== d) {
                        for (f = 0; p = n[f++];) p(m, v, a, s);
                        if (r) {
                            if (d > 0)
                                for (; h--;) m[h] || v[h] || (v[h] = K.call(u));
                            v = g(v)
                        }
                        Z.apply(u, v), l && !r && v.length > 0 && d + n.length > 1 && t.uniqueSort(u)
                    }
                    return l && (I = x, A = y), m
                };
            return i ? r(a) : a
        }

        function x(e, n, r) {
            for (var i = 0, o = n.length; o > i; i++) t(e, n[i], r);
            return r
        }

        function w(e, t, n, r) {
            var i, o, a, s, u, l = p(e);
            if (!r && 1 === l.length) {
                if (o = l[0] = l[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && E.getById && 9 === t.nodeType && O && C.relative[o[1].type]) {
                    if (t = (C.find.ID(a.matches[0].replace(wt, Tt), t) || [])[0], !t) return n;
                    e = e.slice(o.shift().value.length)
                }
                for (i = ht.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !C.relative[s = a.type]);)
                    if ((u = C.find[s]) && (r = u(a.matches[0].replace(wt, Tt), bt.test(o[0].type) && c(t.parentNode) || t))) {
                        if (o.splice(i, 1), e = r.length && d(o), !e) return Z.apply(n, r), n;
                        break
                    }
            }
            return S(e, l)(r, t, !O, n, bt.test(e) && c(t.parentNode) || t), n
        }
        var T, E, C, N, k, S, A, j, D, L, _, H, O, M, F, q, R, B = "sizzle" + -new Date,
            P = e.document,
            I = 0,
            W = 0,
            $ = n(),
            z = n(),
            X = n(),
            V = function(e, t) {
                return e === t && (D = !0), 0
            },
            U = "undefined",
            G = 1 << 31,
            J = {}.hasOwnProperty,
            Y = [],
            K = Y.pop,
            Q = Y.push,
            Z = Y.push,
            et = Y.slice,
            tt = Y.indexOf || function(e) {
                for (var t = 0, n = this.length; n > t; t++)
                    if (this[t] === e) return t;
                return -1
            },
            nt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            rt = "[\\x20\\t\\r\\n\\f]",
            it = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            ot = it.replace("w", "w#"),
            at = "\\[" + rt + "*(" + it + ")" + rt + "*(?:([*^$|!~]?=)" + rt + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + ot + ")|)|)" + rt + "*\\]",
            st = ":(" + it + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + at.replace(3, 8) + ")*)|.*)\\)|)",
            ut = RegExp("^" + rt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + rt + "+$", "g"),
            lt = RegExp("^" + rt + "*," + rt + "*"),
            ct = RegExp("^" + rt + "*([>+~]|" + rt + ")" + rt + "*"),
            ft = RegExp("=" + rt + "*([^\\]'\"]*?)" + rt + "*\\]", "g"),
            pt = RegExp(st),
            dt = RegExp("^" + ot + "$"),
            ht = {
                ID: RegExp("^#(" + it + ")"),
                CLASS: RegExp("^\\.(" + it + ")"),
                TAG: RegExp("^(" + it.replace("w", "w*") + ")"),
                ATTR: RegExp("^" + at),
                PSEUDO: RegExp("^" + st),
                CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + rt + "*(even|odd|(([+-]|)(\\d*)n|)" + rt + "*(?:([+-]|)" + rt + "*(\\d+)|))" + rt + "*\\)|)", "i"),
                bool: RegExp("^(?:" + nt + ")$", "i"),
                needsContext: RegExp("^" + rt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + rt + "*((?:-\\d)?\\d*)" + rt + "*\\)|)(?=[^-]|$)", "i")
            },
            mt = /^(?:input|select|textarea|button)$/i,
            gt = /^h\d$/i,
            vt = /^[^{]+\{\s*\[native \w/,
            yt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            bt = /[+~]/,
            xt = /'|\\/g,
            wt = RegExp("\\\\([\\da-f]{1,6}" + rt + "?|(" + rt + ")|.)", "ig"),
            Tt = function(e, t, n) {
                var r = "0x" + t - 65536;
                return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(55296 | r >> 10, 56320 | 1023 & r)
            };
        try {
            Z.apply(Y = et.call(P.childNodes), P.childNodes), Y[P.childNodes.length].nodeType
        } catch (Et) {
            Z = {
                apply: Y.length ? function(e, t) {
                    Q.apply(e, et.call(t))
                } : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];);
                    e.length = n - 1
                }
            }
        }
        E = t.support = {}, k = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }, L = t.setDocument = function(e) {
            var t, n = e ? e.ownerDocument || e : P,
                r = n.defaultView;
            return n !== _ && 9 === n.nodeType && n.documentElement ? (_ = n, H = n.documentElement, O = !k(n), r && r !== r.top && (r.addEventListener ? r.addEventListener("unload", function() {
                L()
            }, !1) : r.attachEvent && r.attachEvent("onunload", function() {
                L()
            })), E.attributes = i(function(e) {
                return e.className = "i", !e.getAttribute("className")
            }), E.getElementsByTagName = i(function(e) {
                return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
            }), E.getElementsByClassName = vt.test(n.getElementsByClassName) && i(function(e) {
                return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
            }), E.getById = i(function(e) {
                return H.appendChild(e).id = B, !n.getElementsByName || !n.getElementsByName(B).length
            }), E.getById ? (C.find.ID = function(e, t) {
                if (typeof t.getElementById !== U && O) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }, C.filter.ID = function(e) {
                var t = e.replace(wt, Tt);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete C.find.ID, C.filter.ID = function(e) {
                var t = e.replace(wt, Tt);
                return function(e) {
                    var n = typeof e.getAttributeNode !== U && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), C.find.TAG = E.getElementsByTagName ? function(e, t) {
                return typeof t.getElementsByTagName !== U ? t.getElementsByTagName(e) : void 0
            } : function(e, t) {
                var n, r = [],
                    i = 0,
                    o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }, C.find.CLASS = E.getElementsByClassName && function(e, t) {
                return typeof t.getElementsByClassName !== U && O ? t.getElementsByClassName(e) : void 0
            }, F = [], M = [], (E.qsa = vt.test(n.querySelectorAll)) && (i(function(e) {
                e.innerHTML = "<select t=''><option selected=''></option></select>", e.querySelectorAll("[t^='']").length && M.push("[*^$]=" + rt + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || M.push("\\[" + rt + "*(?:value|" + nt + ")"), e.querySelectorAll(":checked").length || M.push(":checked")
            }), i(function(e) {
                var t = n.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && M.push("name" + rt + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || M.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), M.push(",.*:")
            })), (E.matchesSelector = vt.test(q = H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && i(function(e) {
                E.disconnectedMatch = q.call(e, "div"), q.call(e, "[s!='']:x"), F.push("!=", st)
            }), M = M.length && RegExp(M.join("|")), F = F.length && RegExp(F.join("|")), t = vt.test(H.compareDocumentPosition), R = t || vt.test(H.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function(e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, V = t ? function(e, t) {
                if (e === t) return D = !0, 0;
                var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return r ? r : (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & r || !E.sortDetached && t.compareDocumentPosition(e) === r ? e === n || e.ownerDocument === P && R(P, e) ? -1 : t === n || t.ownerDocument === P && R(P, t) ? 1 : j ? tt.call(j, e) - tt.call(j, t) : 0 : 4 & r ? -1 : 1)
            } : function(e, t) {
                if (e === t) return D = !0, 0;
                var r, i = 0,
                    o = e.parentNode,
                    s = t.parentNode,
                    u = [e],
                    l = [t];
                if (!o || !s) return e === n ? -1 : t === n ? 1 : o ? -1 : s ? 1 : j ? tt.call(j, e) - tt.call(j, t) : 0;
                if (o === s) return a(e, t);
                for (r = e; r = r.parentNode;) u.unshift(r);
                for (r = t; r = r.parentNode;) l.unshift(r);
                for (; u[i] === l[i];) i++;
                return i ? a(u[i], l[i]) : u[i] === P ? -1 : l[i] === P ? 1 : 0
            }, n) : _
        }, t.matches = function(e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== _ && L(e), n = n.replace(ft, "='$1']"), !(!E.matchesSelector || !O || F && F.test(n) || M && M.test(n))) try {
                var r = q.call(e, n);
                if (r || E.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
            } catch (i) {}
            return t(n, _, null, [e]).length > 0
        }, t.contains = function(e, t) {
            return (e.ownerDocument || e) !== _ && L(e), R(e, t)
        }, t.attr = function(e, t) {
            (e.ownerDocument || e) !== _ && L(e);
            var n = C.attrHandle[t.toLowerCase()],
                r = n && J.call(C.attrHandle, t.toLowerCase()) ? n(e, t, !O) : void 0;
            return void 0 !== r ? r : E.attributes || !O ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }, t.error = function(e) {
            throw Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function(e) {
            var t, n = [],
                r = 0,
                i = 0;
            if (D = !E.detectDuplicates, j = !E.sortStable && e.slice(0), e.sort(V), D) {
                for (; t = e[i++];) t === e[i] && (r = n.push(i));
                for (; r--;) e.splice(n[r], 1)
            }
            return j = null, e
        }, N = t.getText = function(e) {
            var t, n = "",
                r = 0,
                i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += N(e)
                } else if (3 === i || 4 === i) return e.nodeValue
            } else
                for (; t = e[r++];) n += N(t);
            return n
        }, C = t.selectors = {
            cacheLength: 50,
            createPseudo: r,
            match: ht,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(wt, Tt), e[3] = (e[4] || e[5] || "").replace(wt, Tt), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                },
                PSEUDO: function(e) {
                    var t, n = !e[5] && e[2];
                    return ht.CHILD.test(e[0]) ? null : (e[3] && void 0 !== e[4] ? e[2] = e[4] : n && pt.test(n) && (t = p(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(wt, Tt).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = $[e + " "];
                    return t || (t = RegExp("(^|" + rt + ")" + e + "(" + rt + "|$)")) && $(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== U && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, n, r) {
                    return function(i) {
                        var o = t.attr(i, e);
                        return null == o ? "!=" === n : n ? (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o + " ").indexOf(r) > -1 : "|=" === n ? o === r || o.slice(0, r.length + 1) === r + "-" : !1) : !0
                    }
                },
                CHILD: function(e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3),
                        a = "last" !== e.slice(-4),
                        s = "of-type" === t;
                    return 1 === r && 0 === i ? function(e) {
                        return !!e.parentNode
                    } : function(t, n, u) {
                        var l, c, f, p, d, h, m = o !== a ? "nextSibling" : "previousSibling",
                            g = t.parentNode,
                            v = s && t.nodeName.toLowerCase(),
                            y = !u && !s;
                        if (g) {
                            if (o) {
                                for (; m;) {
                                    for (f = t; f = f[m];)
                                        if (s ? f.nodeName.toLowerCase() === v : 1 === f.nodeType) return !1;
                                    h = m = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? g.firstChild : g.lastChild], a && y) {
                                for (c = g[B] || (g[B] = {}), l = c[e] || [], d = l[0] === I && l[1], p = l[0] === I && l[2], f = d && g.childNodes[d]; f = ++d && f && f[m] || (p = d = 0) || h.pop();)
                                    if (1 === f.nodeType && ++p && f === t) {
                                        c[e] = [I, d, p];
                                        break
                                    }
                            } else if (y && (l = (t[B] || (t[B] = {}))[e]) && l[0] === I) p = l[1];
                            else
                                for (;
                                    (f = ++d && f && f[m] || (p = d = 0) || h.pop()) && ((s ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++p || (y && ((f[B] || (f[B] = {}))[e] = [I, p]), f !== t)););
                            return p -= i, p === r || 0 === p % r && p / r >= 0
                        }
                    }
                },
                PSEUDO: function(e, n) {
                    var i, o = C.pseudos[e] || C.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return o[B] ? o(n) : o.length > 1 ? (i = [e, e, "", n], C.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) {
                        for (var r, i = o(e, n), a = i.length; a--;) r = tt.call(e, i[a]), e[r] = !(t[r] = i[a])
                    }) : function(e) {
                        return o(e, 0, i)
                    }) : o
                }
            },
            pseudos: {
                not: r(function(e) {
                    var t = [],
                        n = [],
                        i = S(e.replace(ut, "$1"));
                    return i[B] ? r(function(e, t, n, r) {
                        for (var o, a = i(e, null, r, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                    }) : function(e, r, o) {
                        return t[0] = e, i(t, null, o, n), !n.pop()
                    }
                }),
                has: r(function(e) {
                    return function(n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: r(function(e) {
                    return function(t) {
                        return (t.textContent || t.innerText || N(t)).indexOf(e) > -1
                    }
                }),
                lang: r(function(e) {
                    return dt.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(wt, Tt).toLowerCase(),
                        function(t) {
                            var n;
                            do
                                if (n = O ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                            while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === H
                },
                focus: function(e) {
                    return e === _.activeElement && (!_.hasFocus || _.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return e.disabled === !1
                },
                disabled: function(e) {
                    return e.disabled === !0
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (6 > e.nodeType) return !1;
                    return !0
                },
                parent: function(e) {
                    return !C.pseudos.empty(e)
                },
                header: function(e) {
                    return gt.test(e.nodeName)
                },
                input: function(e) {
                    return mt.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: l(function() {
                    return [0]
                }),
                last: l(function(e, t) {
                    return [t - 1]
                }),
                eq: l(function(e, t, n) {
                    return [0 > n ? n + t : n]
                }),
                even: l(function(e, t) {
                    for (var n = 0; t > n; n += 2) e.push(n);
                    return e
                }),
                odd: l(function(e, t) {
                    for (var n = 1; t > n; n += 2) e.push(n);
                    return e
                }),
                lt: l(function(e, t, n) {
                    for (var r = 0 > n ? n + t : n; --r >= 0;) e.push(r);
                    return e
                }),
                gt: l(function(e, t, n) {
                    for (var r = 0 > n ? n + t : n; t > ++r;) e.push(r);
                    return e
                })
            }
        }, C.pseudos.nth = C.pseudos.eq;
        for (T in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) C.pseudos[T] = s(T);
        for (T in {
                submit: !0,
                reset: !0
            }) C.pseudos[T] = u(T);
        return f.prototype = C.filters = C.pseudos, C.setFilters = new f, S = t.compile = function(e, t) {
            var n, r = [],
                i = [],
                o = X[e + " "];
            if (!o) {
                for (t || (t = p(e)), n = t.length; n--;) o = y(t[n]), o[B] ? r.push(o) : i.push(o);
                o = X(e, b(i, r))
            }
            return o
        }, E.sortStable = B.split("").sort(V).join("") === B, E.detectDuplicates = !!D, L(), E.sortDetached = i(function(e) {
            return 1 & e.compareDocumentPosition(_.createElement("div"))
        }), i(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function(e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), E.attributes && i(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || o("value", function(e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }), i(function(e) {
            return null == e.getAttribute("disabled")
        }) || o(nt, function(e, t, n) {
            var r;
            return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), t
    }(e);
    ot.find = ct, ot.expr = ct.selectors, ot.expr[":"] = ot.expr.pseudos, ot.unique = ct.uniqueSort, ot.text = ct.getText, ot.isXMLDoc = ct.isXML, ot.contains = ct.contains;
    var ft = ot.expr.match.needsContext,
        pt = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        dt = /^.[^:#\[\.,]*$/;
    ot.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? ot.find.matchesSelector(r, e) ? [r] : [] : ot.find.matches(e, ot.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, ot.fn.extend({
        find: function(e) {
            var t, n = [],
                r = this,
                i = r.length;
            if ("string" != typeof e) return this.pushStack(ot(e).filter(function() {
                for (t = 0; i > t; t++)
                    if (ot.contains(r[t], this)) return !0
            }));
            for (t = 0; i > t; t++) ot.find(e, r[t], n);
            return n = this.pushStack(i > 1 ? ot.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
        },
        filter: function(e) {
            return this.pushStack(r(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(r(this, e || [], !0))
        },
        is: function(e) {
            return !!r(this, "string" == typeof e && ft.test(e) ? ot(e) : e || [], !1).length
        }
    });
    var ht, mt = e.document,
        gt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        vt = ot.fn.init = function(e, t) {
            var n, r;
            if (!e) return this;
            if ("string" == typeof e) {
                if (n = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : gt.exec(e), !n || !n[1] && t) return !t || t.jquery ? (t || ht).find(e) : this.constructor(t).find(e);
                if (n[1]) {
                    if (t = t instanceof ot ? t[0] : t, ot.merge(this, ot.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : mt, !0)), pt.test(n[1]) && ot.isPlainObject(t))
                        for (n in t) ot.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                    return this
                }
                if (r = mt.getElementById(n[2]), r && r.parentNode) {
                    if (r.id !== n[2]) return ht.find(e);
                    this.length = 1, this[0] = r
                }
                return this.context = mt, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : ot.isFunction(e) ? ht.ready !== void 0 ? ht.ready(e) : e(ot) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), ot.makeArray(e, this))
        };
    vt.prototype = ot.fn, ht = ot(mt);
    var yt = /^(?:parents|prev(?:Until|All))/,
        bt = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    ot.extend({
        dir: function(e, t, n) {
            for (var r = [], i = e[t]; i && 9 !== i.nodeType && (void 0 === n || 1 !== i.nodeType || !ot(i).is(n));) 1 === i.nodeType && r.push(i), i = i[t];
            return r
        },
        sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    }), ot.fn.extend({
        has: function(e) {
            var t, n = ot(e, this),
                r = n.length;
            return this.filter(function() {
                for (t = 0; r > t; t++)
                    if (ot.contains(this, n[t])) return !0
            })
        },
        closest: function(e, t) {
            for (var n, r = 0, i = this.length, o = [], a = ft.test(e) || "string" != typeof e ? ot(e, t || this.context) : 0; i > r; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (11 > n.nodeType && (a ? a.index(n) > -1 : 1 === n.nodeType && ot.find.matchesSelector(n, e))) {
                        o.push(n);
                        break
                    }
            return this.pushStack(o.length > 1 ? ot.unique(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? ot.inArray(this[0], ot(e)) : ot.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(ot.unique(ot.merge(this.get(), ot(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), ot.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return ot.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return ot.dir(e, "parentNode", n)
        },
        next: function(e) {
            return i(e, "nextSibling")
        },
        prev: function(e) {
            return i(e, "previousSibling")
        },
        nextAll: function(e) {
            return ot.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return ot.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return ot.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return ot.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return ot.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return ot.sibling(e.firstChild)
        },
        contents: function(e) {
            return ot.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : ot.merge([], e.childNodes)
        }
    }, function(e, t) {
        ot.fn[e] = function(n, r) {
            var i = ot.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = ot.filter(r, i)), this.length > 1 && (bt[e] || (i = ot.unique(i)), yt.test(e) && (i = i.reverse())), this.pushStack(i)
        }
    });
    var xt = /\S+/g,
        wt = {};
    ot.Callbacks = function(e) {
        e = "string" == typeof e ? wt[e] || o(e) : ot.extend({}, e);
        var t, n, r, i, a, s, u = [],
            l = !e.once && [],
            c = function(o) {
                for (n = e.memory && o, r = !0, a = s || 0, s = 0, i = u.length, t = !0; u && i > a; a++)
                    if (u[a].apply(o[0], o[1]) === !1 && e.stopOnFalse) {
                        n = !1;
                        break
                    }
                t = !1, u && (l ? l.length && c(l.shift()) : n ? u = [] : f.disable())
            },
            f = {
                add: function() {
                    if (u) {
                        var r = u.length;
                        (function o(t) {
                            ot.each(t, function(t, n) {
                                var r = ot.type(n);
                                "function" === r ? e.unique && f.has(n) || u.push(n) : n && n.length && "string" !== r && o(n)
                            })
                        })(arguments), t ? i = u.length : n && (s = r, c(n))
                    }
                    return this
                },
                remove: function() {
                    return u && ot.each(arguments, function(e, n) {
                        for (var r;
                            (r = ot.inArray(n, u, r)) > -1;) u.splice(r, 1), t && (i >= r && i--, a >= r && a--)
                    }), this
                },
                has: function(e) {
                    return e ? ot.inArray(e, u) > -1 : !(!u || !u.length)
                },
                empty: function() {
                    return u = [], i = 0, this
                },
                disable: function() {
                    return u = l = n = void 0, this
                },
                disabled: function() {
                    return !u
                },
                lock: function() {
                    return l = void 0, n || f.disable(), this
                },
                locked: function() {
                    return !l
                },
                fireWith: function(e, n) {
                    return !u || r && !l || (n = n || [], n = [e, n.slice ? n.slice() : n], t ? l.push(n) : c(n)), this
                },
                fire: function() {
                    return f.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!r
                }
            };
        return f
    }, ot.extend({
        Deferred: function(e) {
            var t = [
                    ["resolve", "done", ot.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", ot.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", ot.Callbacks("memory")]
                ],
                n = "pending",
                r = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return i.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var e = arguments;
                        return ot.Deferred(function(n) {
                            ot.each(t, function(t, o) {
                                var a = ot.isFunction(e[t]) && e[t];
                                i[o[1]](function() {
                                    var e = a && a.apply(this, arguments);
                                    e && ot.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === r ? n.promise() : this, a ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? ot.extend(e, r) : r
                    }
                },
                i = {};
            return r.pipe = r.then, ot.each(t, function(e, o) {
                var a = o[2],
                    s = o[3];
                r[o[1]] = a.add, s && a.add(function() {
                    n = s
                }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function() {
                    return i[o[0] + "With"](this === i ? r : this, arguments), this
                }, i[o[0] + "With"] = a.fireWith
            }), r.promise(i), e && e.call(i, i), i
        },
        when: function(e) {
            var t, n, r, i = 0,
                o = J.call(arguments),
                a = o.length,
                s = 1 !== a || e && ot.isFunction(e.promise) ? a : 0,
                u = 1 === s ? e : ot.Deferred(),
                l = function(e, n, r) {
                    return function(i) {
                        n[e] = this, r[e] = arguments.length > 1 ? J.call(arguments) : i, r === t ? u.notifyWith(n, r) : --s || u.resolveWith(n, r)
                    }
                };
            if (a > 1)
                for (t = Array(a), n = Array(a), r = Array(a); a > i; i++) o[i] && ot.isFunction(o[i].promise) ? o[i].promise().done(l(i, r, o)).fail(u.reject).progress(l(i, n, t)) : --s;
            return s || u.resolveWith(r, o), u.promise()
        }
    });
    var Tt;
    ot.fn.ready = function(e) {
        return ot.ready.promise().done(e), this
    }, ot.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? ot.readyWait++ : ot.ready(!0)
        },
        ready: function(e) {
            if (e === !0 ? !--ot.readyWait : !ot.isReady) {
                if (!mt.body) return setTimeout(ot.ready);
                ot.isReady = !0, e !== !0 && --ot.readyWait > 0 || (Tt.resolveWith(mt, [ot]), ot.fn.trigger && ot(mt).trigger("ready").off("ready"))
            }
        }
    }), ot.ready.promise = function(t) {
        if (!Tt)
            if (Tt = ot.Deferred(), "complete" === mt.readyState) setTimeout(ot.ready);
            else if (mt.addEventListener) mt.addEventListener("DOMContentLoaded", s, !1), e.addEventListener("load", s, !1);
        else {
            mt.attachEvent("onreadystatechange", s), e.attachEvent("onload", s);
            var n = !1;
            try {
                n = null == e.frameElement && mt.documentElement
            } catch (r) {}
            n && n.doScroll && function i() {
                if (!ot.isReady) {
                    try {
                        n.doScroll("left")
                    } catch (e) {
                        return setTimeout(i, 50)
                    }
                    a(), ot.ready()
                }
            }()
        }
        return Tt.promise(t)
    };
    var Et, Ct = "undefined";
    for (Et in ot(rt)) break;
    rt.ownLast = "0" !== Et, rt.inlineBlockNeedsLayout = !1, ot(function() {
            var e, t, n = mt.getElementsByTagName("body")[0];
            n && (e = mt.createElement("div"), e.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", t = mt.createElement("div"), n.appendChild(e).appendChild(t), typeof t.style.zoom !== Ct && (t.style.cssText = "border:0;margin:0;width:1px;padding:1px;display:inline;zoom:1", (rt.inlineBlockNeedsLayout = 3 === t.offsetWidth) && (n.style.zoom = 1)), n.removeChild(e), e = t = null)
        }),
        function() {
            var e = mt.createElement("div");
            if (null == rt.deleteExpando) {
                rt.deleteExpando = !0;
                try {
                    delete e.test
                } catch (t) {
                    rt.deleteExpando = !1
                }
            }
            e = null
        }(), ot.acceptData = function(e) {
            var t = ot.noData[(e.nodeName + " ").toLowerCase()],
                n = +e.nodeType || 1;
            return 1 !== n && 9 !== n ? !1 : !t || t !== !0 && e.getAttribute("classid") === t
        };
    var Nt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        kt = /([A-Z])/g;
    ot.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(e) {
            return e = e.nodeType ? ot.cache[e[ot.expando]] : e[ot.expando], !!e && !l(e)
        },
        data: function(e, t, n) {
            return c(e, t, n)
        },
        removeData: function(e, t) {
            return f(e, t)
        },
        _data: function(e, t, n) {
            return c(e, t, n, !0)
        },
        _removeData: function(e, t) {
            return f(e, t, !0)
        }
    }), ot.fn.extend({
        data: function(e, t) {
            var n, r, i, o = this[0],
                a = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = ot.data(o), 1 === o.nodeType && !ot._data(o, "parsedAttrs"))) {
                    for (n = a.length; n--;) r = a[n].name, 0 === r.indexOf("data-") && (r = ot.camelCase(r.slice(5)), u(o, r, i[r]));
                    ot._data(o, "parsedAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function() {
                ot.data(this, e)
            }) : arguments.length > 1 ? this.each(function() {
                ot.data(this, e, t)
            }) : o ? u(o, e, ot.data(o, e)) : void 0
        },
        removeData: function(e) {
            return this.each(function() {
                ot.removeData(this, e)
            })
        }
    }), ot.extend({
        queue: function(e, t, n) {
            var r;
            return e ? (t = (t || "fx") + "queue", r = ot._data(e, t), n && (!r || ot.isArray(n) ? r = ot._data(e, t, ot.makeArray(n)) : r.push(n)), r || []) : void 0
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = ot.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = ot._queueHooks(e, t),
                a = function() {
                    ot.dequeue(e, t)
                };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return ot._data(e, n) || ot._data(e, n, {
                empty: ot.Callbacks("once memory").add(function() {
                    ot._removeData(e, t + "queue"), ot._removeData(e, n)
                })
            })
        }
    }), ot.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), n > arguments.length ? ot.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = ot.queue(this, e, t);
                ot._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && ot.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                ot.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1,
                i = ot.Deferred(),
                o = this,
                a = this.length,
                s = function() {
                    --r || i.resolveWith(o, [o])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) n = ot._data(o[a], e + "queueHooks"), n && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t)
        }
    });
    var St = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        At = ["Top", "Right", "Bottom", "Left"],
        jt = function(e, t) {
            return e = t || e, "none" === ot.css(e, "display") || !ot.contains(e.ownerDocument, e)
        },
        Dt = ot.access = function(e, t, n, r, i, o, a) {
            var s = 0,
                u = e.length,
                l = null == n;
            if ("object" === ot.type(n)) {
                i = !0;
                for (s in n) ot.access(e, t, s, n[s], !0, o, a)
            } else if (void 0 !== r && (i = !0, ot.isFunction(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
                    return l.call(ot(e), n)
                })), t))
                for (; u > s; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
        },
        Lt = /^(?:checkbox|radio)$/i;
    (function() {
        var e = mt.createDocumentFragment(),
            t = mt.createElement("div"),
            n = mt.createElement("input");
        if (t.setAttribute("className", "t"), t.innerHTML = "  <link/><table></table><a href='/a'>a</a>", rt.leadingWhitespace = 3 === t.firstChild.nodeType, rt.tbody = !t.getElementsByTagName("tbody").length, rt.htmlSerialize = !!t.getElementsByTagName("link").length, rt.html5Clone = "<:nav></:nav>" !== mt.createElement("nav").cloneNode(!0).outerHTML, n.type = "checkbox", n.checked = !0, e.appendChild(n), rt.appendChecked = n.checked, t.innerHTML = "<textarea>x</textarea>", rt.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, e.appendChild(t), t.innerHTML = "<input type='radio' checked='checked' name='t'/>", rt.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, rt.noCloneEvent = !0, t.attachEvent && (t.attachEvent("onclick", function() {
                rt.noCloneEvent = !1
            }), t.cloneNode(!0).click()), null == rt.deleteExpando) {
            rt.deleteExpando = !0;
            try {
                delete t.test
            } catch (r) {
                rt.deleteExpando = !1
            }
        }
        e = t = n = null
    })(),
    function() {
        var t, n, r = mt.createElement("div");
        for (t in {
                submit: !0,
                change: !0,
                focusin: !0
            }) n = "on" + t, (rt[t + "Bubbles"] = n in e) || (r.setAttribute(n, "t"), rt[t + "Bubbles"] = r.attributes[n].expando === !1);
        r = null
    }();
    var _t = /^(?:input|select|textarea)$/i,
        Ht = /^key/,
        Ot = /^(?:mouse|contextmenu)|click/,
        Mt = /^(?:focusinfocus|focusoutblur)$/,
        Ft = /^([^.]*)(?:\.(.+)|)$/;
    ot.event = {
        global: {},
        add: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, m, g = ot._data(e);
            if (g) {
                for (n.handler && (u = n, n = u.handler, i = u.selector), n.guid || (n.guid = ot.guid++), (a = g.events) || (a = g.events = {}), (c = g.handle) || (c = g.handle = function(e) {
                        return typeof ot === Ct || e && ot.event.triggered === e.type ? void 0 : ot.event.dispatch.apply(c.elem, arguments)
                    }, c.elem = e), t = (t || "").match(xt) || [""], s = t.length; s--;) o = Ft.exec(t[s]) || [], d = m = o[1], h = (o[2] || "").split(".").sort(), d && (l = ot.event.special[d] || {}, d = (i ? l.delegateType : l.bindType) || d, l = ot.event.special[d] || {}, f = ot.extend({
                    type: d,
                    origType: m,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && ot.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, u), (p = a[d]) || (p = a[d] = [], p.delegateCount = 0, l.setup && l.setup.call(e, r, h, c) !== !1 || (e.addEventListener ? e.addEventListener(d, c, !1) : e.attachEvent && e.attachEvent("on" + d, c))), l.add && (l.add.call(e, f), f.handler.guid || (f.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, f) : p.push(f), ot.event.global[d] = !0);
                e = null
            }
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, m, g = ot.hasData(e) && ot._data(e);
            if (g && (c = g.events)) {
                for (t = (t || "").match(xt) || [""], l = t.length; l--;)
                    if (s = Ft.exec(t[l]) || [], d = m = s[1], h = (s[2] || "").split(".").sort(), d) {
                        for (f = ot.event.special[d] || {}, d = (r ? f.delegateType : f.bindType) || d, p = c[d] || [], s = s[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), u = o = p.length; o--;) a = p[o], !i && m !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (p.splice(o, 1), a.selector && p.delegateCount--, f.remove && f.remove.call(e, a));
                        u && !p.length && (f.teardown && f.teardown.call(e, h, g.handle) !== !1 || ot.removeEvent(e, d, g.handle), delete c[d])
                    } else
                        for (d in c) ot.event.remove(e, d + t[l], n, r, !0);
                ot.isEmptyObject(c) && (delete g.handle, ot._removeData(e, "events"))
            }
        },
        trigger: function(t, n, r, i) {
            var o, a, s, u, l, c, f, p = [r || mt],
                d = tt.call(t, "type") ? t.type : t,
                h = tt.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = c = r = r || mt, 3 !== r.nodeType && 8 !== r.nodeType && !Mt.test(d + ot.event.triggered) && (d.indexOf(".") >= 0 && (h = d.split("."), d = h.shift(), h.sort()), a = 0 > d.indexOf(":") && "on" + d, t = t[ot.expando] ? t : new ot.Event(d, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = h.join("."), t.namespace_re = t.namespace ? RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : ot.makeArray(n, [t]), l = ot.event.special[d] || {}, i || !l.trigger || l.trigger.apply(r, n) !== !1)) {
                if (!i && !l.noBubble && !ot.isWindow(r)) {
                    for (u = l.delegateType || d, Mt.test(u + d) || (s = s.parentNode); s; s = s.parentNode) p.push(s), c = s;
                    c === (r.ownerDocument || mt) && p.push(c.defaultView || c.parentWindow || e)
                }
                for (f = 0;
                    (s = p[f++]) && !t.isPropagationStopped();) t.type = f > 1 ? u : l.bindType || d, o = (ot._data(s, "events") || {})[t.type] && ot._data(s, "handle"), o && o.apply(s, n), o = a && s[a], o && o.apply && ot.acceptData(s) && (t.result = o.apply(s, n), t.result === !1 && t.preventDefault());
                if (t.type = d, !i && !t.isDefaultPrevented() && (!l._default || l._default.apply(p.pop(), n) === !1) && ot.acceptData(r) && a && r[d] && !ot.isWindow(r)) {
                    c = r[a], c && (r[a] = null), ot.event.triggered = d;
                    try {
                        r[d]()
                    } catch (m) {}
                    ot.event.triggered = void 0, c && (r[a] = c)
                }
                return t.result
            }
        },
        dispatch: function(e) {
            e = ot.event.fix(e);
            var t, n, r, i, o, a = [],
                s = J.call(arguments),
                u = (ot._data(this, "events") || {})[e.type] || [],
                l = ot.event.special[e.type] || {};
            if (s[0] = e, e.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, e) !== !1) {
                for (a = ot.event.handlers.call(this, e, u), t = 0;
                    (i = a[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = i.elem, o = 0;
                        (r = i.handlers[o++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(r.namespace)) && (e.handleObj = r, e.data = r.data, n = ((ot.event.special[r.origType] || {}).handle || r.handler).apply(i.elem, s), void 0 !== n && (e.result = n) === !1 && (e.preventDefault(), e.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a = [],
                s = t.delegateCount,
                u = e.target;
            if (s && u.nodeType && (!e.button || "click" !== e.type))
                for (; u != this; u = u.parentNode || this)
                    if (1 === u.nodeType && (u.disabled !== !0 || "click" !== e.type)) {
                        for (i = [], o = 0; s > o; o++) r = t[o], n = r.selector + " ", void 0 === i[n] && (i[n] = r.needsContext ? ot(n, this).index(u) >= 0 : ot.find(n, this, null, [u]).length), i[n] && i.push(r);
                        i.length && a.push({
                            elem: u,
                            handlers: i
                        })
                    }
            return t.length > s && a.push({
                elem: this,
                handlers: t.slice(s)
            }), a
        },
        fix: function(e) {
            if (e[ot.expando]) return e;
            var t, n, r, i = e.type,
                o = e,
                a = this.fixHooks[i];
            for (a || (this.fixHooks[i] = a = Ot.test(i) ? this.mouseHooks : Ht.test(i) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, e = new ot.Event(o), t = r.length; t--;) n = r[t], e[n] = o[n];
            return e.target || (e.target = o.srcElement || mt), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e, o) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, r, i, o = t.button,
                    a = t.fromElement;
                return null == e.pageX && null != t.clientX && (r = e.target.ownerDocument || mt, i = r.documentElement, n = r.body, e.pageX = t.clientX + (i && i.scrollLeft || n && n.scrollLeft || 0) - (i && i.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || n && n.scrollTop || 0) - (i && i.clientTop || n && n.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement : a), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== h() && this.focus) try {
                        return this.focus(), !1
                    } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === h() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return ot.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function(e) {
                    return ot.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n, r) {
            var i = ot.extend(new ot.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? ot.event.trigger(i, null, t) : ot.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
        }
    }, ot.removeEvent = mt.removeEventListener ? function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    } : function(e, t, n) {
        var r = "on" + t;
        e.detachEvent && (typeof e[r] === Ct && (e[r] = null), e.detachEvent(r, n))
    }, ot.Event = function(e, t) {
        return this instanceof ot.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && (e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault()) ? p : d) : this.type = e, t && ot.extend(this, t), this.timeStamp = e && e.timeStamp || ot.now(), this[ot.expando] = !0, void 0) : new ot.Event(e, t)
    }, ot.Event.prototype = {
        isDefaultPrevented: d,
        isPropagationStopped: d,
        isImmediatePropagationStopped: d,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = p, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = p, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = p, this.stopPropagation()
        }
    }, ot.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(e, t) {
        ot.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this,
                    i = e.relatedTarget,
                    o = e.handleObj;
                return (!i || i !== r && !ot.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), rt.submitBubbles || (ot.event.special.submit = {
        setup: function() {
            return ot.nodeName(this, "form") ? !1 : (ot.event.add(this, "click._submit keypress._submit", function(e) {
                var t = e.target,
                    n = ot.nodeName(t, "input") || ot.nodeName(t, "button") ? t.form : void 0;
                n && !ot._data(n, "submitBubbles") && (ot.event.add(n, "submit._submit", function(e) {
                    e._submit_bubble = !0
                }), ot._data(n, "submitBubbles", !0))
            }), void 0)
        },
        postDispatch: function(e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && ot.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function() {
            return ot.nodeName(this, "form") ? !1 : (ot.event.remove(this, "._submit"), void 0)
        }
    }), rt.changeBubbles || (ot.event.special.change = {
        setup: function() {
            return _t.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (ot.event.add(this, "propertychange._change", function(e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }), ot.event.add(this, "click._change", function(e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1), ot.event.simulate("change", this, e, !0)
            })), !1) : (ot.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                _t.test(t.nodeName) && !ot._data(t, "changeBubbles") && (ot.event.add(t, "change._change", function(e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || ot.event.simulate("change", this.parentNode, e, !0)
                }), ot._data(t, "changeBubbles", !0))
            }), void 0)
        },
        handle: function(e) {
            var t = e.target;
            return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return ot.event.remove(this, "._change"), !_t.test(this.nodeName)
        }
    }), rt.focusinBubbles || ot.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            ot.event.simulate(t, e.target, ot.event.fix(e), !0)
        };
        ot.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this,
                    i = ot._data(r, t);
                i || r.addEventListener(e, n, !0), ot._data(r, t, (i || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this,
                    i = ot._data(r, t) - 1;
                i ? ot._data(r, t, i) : (r.removeEventListener(e, n, !0), ot._removeData(r, t))
            }
        }
    }), ot.fn.extend({
        on: function(e, t, n, r, i) {
            var o, a;
            if ("object" == typeof e) {
                "string" != typeof t && (n = n || t, t = void 0);
                for (o in e) this.on(o, t, n, e[o], i);
                return this
            }
            if (null == n && null == r ? (r = t, n = t = void 0) : null == r && ("string" == typeof t ? (r = n, n = void 0) : (r = n, n = t, t = void 0)), r === !1) r = d;
            else if (!r) return this;
            return 1 === i && (a = r, r = function(e) {
                return ot().off(e), a.apply(this, arguments)
            }, r.guid = a.guid || (a.guid = ot.guid++)), this.each(function() {
                ot.event.add(this, e, r, n, t)
            })
        },
        one: function(e, t, n, r) {
            return this.on(e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, ot(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = d), this.each(function() {
                ot.event.remove(this, e, n, t)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                ot.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            return n ? ot.event.trigger(e, t, n, !0) : void 0
        }
    });
    var qt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        Rt = / jQuery\d+="(?:null|\d+)"/g,
        Bt = RegExp("<(?:" + qt + ")[\\s/>]", "i"),
        Pt = /^\s+/,
        It = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Wt = /<([\w:]+)/,
        $t = /<tbody/i,
        zt = /<|&#?\w+;/,
        Xt = /<(?:script|style|link)/i,
        Vt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ut = /^$|\/(?:java|ecma)script/i,
        Gt = /^true\/(.*)/,
        Jt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Yt = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: rt.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        Kt = m(mt),
        Qt = Kt.appendChild(mt.createElement("div"));
    Yt.optgroup = Yt.option, Yt.tbody = Yt.tfoot = Yt.colgroup = Yt.caption = Yt.thead, Yt.th = Yt.td, ot.extend({
        clone: function(e, t, n) {
            var r, i, o, a, s, u = ot.contains(e.ownerDocument, e);
            if (rt.html5Clone || ot.isXMLDoc(e) || !Bt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Qt.innerHTML = e.outerHTML, Qt.removeChild(o = Qt.firstChild)), !(rt.noCloneEvent && rt.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ot.isXMLDoc(e)))
                for (r = g(o), s = g(e), a = 0; null != (i = s[a]); ++a) r[a] && E(i, r[a]);
            if (t)
                if (n)
                    for (s = s || g(e), r = r || g(o), a = 0; null != (i = s[a]); a++) T(i, r[a]);
                else T(e, o);
            return r = g(o, "script"), r.length > 0 && w(r, !u && g(e, "script")), r = s = i = null, o
        },
        buildFragment: function(e, t, n, r) {
            for (var i, o, a, s, u, l, c, f = e.length, p = m(t), d = [], h = 0; f > h; h++)
                if (o = e[h], o || 0 === o)
                    if ("object" === ot.type(o)) ot.merge(d, o.nodeType ? [o] : o);
                    else if (zt.test(o)) {
                for (s = s || p.appendChild(t.createElement("div")), u = (Wt.exec(o) || ["", ""])[1].toLowerCase(), c = Yt[u] || Yt._default, s.innerHTML = c[1] + o.replace(It, "<$1></$2>") + c[2], i = c[0]; i--;) s = s.lastChild;
                if (!rt.leadingWhitespace && Pt.test(o) && d.push(t.createTextNode(Pt.exec(o)[0])), !rt.tbody)
                    for (o = "table" !== u || $t.test(o) ? "<table>" !== c[1] || $t.test(o) ? 0 : s : s.firstChild, i = o && o.childNodes.length; i--;) ot.nodeName(l = o.childNodes[i], "tbody") && !l.childNodes.length && o.removeChild(l);
                for (ot.merge(d, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
                s = p.lastChild
            } else d.push(t.createTextNode(o));
            for (s && p.removeChild(s), rt.appendChecked || ot.grep(g(d, "input"), v), h = 0; o = d[h++];)
                if ((!r || -1 === ot.inArray(o, r)) && (a = ot.contains(o.ownerDocument, o), s = g(p.appendChild(o), "script"), a && w(s), n))
                    for (i = 0; o = s[i++];) Ut.test(o.type || "") && n.push(o);
            return s = null, p
        },
        cleanData: function(e, t) {
            for (var n, r, i, o, a = 0, s = ot.expando, u = ot.cache, l = rt.deleteExpando, c = ot.event.special; null != (n = e[a]); a++)
                if ((t || ot.acceptData(n)) && (i = n[s], o = i && u[i])) {
                    if (o.events)
                        for (r in o.events) c[r] ? ot.event.remove(n, r) : ot.removeEvent(n, r, o.handle);
                    u[i] && (delete u[i], l ? delete n[s] : typeof n.removeAttribute !== Ct ? n.removeAttribute(s) : n[s] = null, G.push(i))
                }
        }
    }), ot.fn.extend({
        text: function(e) {
            return Dt(this, function(e) {
                return void 0 === e ? ot.text(this) : this.empty().append((this[0] && this[0].ownerDocument || mt).createTextNode(e))
            }, null, e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = y(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = y(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            for (var n, r = e ? ot.filter(e, this) : this, i = 0; null != (n = r[i]); i++) t || 1 !== n.nodeType || ot.cleanData(g(n)), n.parentNode && (t && ot.contains(n.ownerDocument, n) && w(g(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && ot.cleanData(g(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                e.options && ot.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                return ot.clone(this, e, t)
            })
        },
        html: function(e) {
            return Dt(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(Rt, "") : void 0;
                if (!("string" != typeof e || Xt.test(e) || !rt.htmlSerialize && Bt.test(e) || !rt.leadingWhitespace && Pt.test(e) || Yt[(Wt.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace(It, "<$1></$2>");
                    try {
                        for (; r > n; n++) t = this[n] || {}, 1 === t.nodeType && (ot.cleanData(g(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (i) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = arguments[0];
            return this.domManip(arguments, function(t) {
                e = this.parentNode, ot.cleanData(g(this)), e && e.replaceChild(t, this)
            }), e && (e.length || e.nodeType) ? this : this.remove()
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, t) {
            e = Y.apply([], e);
            var n, r, i, o, a, s, u = 0,
                l = this.length,
                c = this,
                f = l - 1,
                p = e[0],
                d = ot.isFunction(p);
            if (d || l > 1 && "string" == typeof p && !rt.checkClone && Vt.test(p)) return this.each(function(n) {
                var r = c.eq(n);
                d && (e[0] = p.call(this, n, r.html())), r.domManip(e, t)
            });
            if (l && (s = ot.buildFragment(e, this[0].ownerDocument, !1, this), n = s.firstChild, 1 === s.childNodes.length && (s = n), n)) {
                for (o = ot.map(g(s, "script"), b), i = o.length; l > u; u++) r = s, u !== f && (r = ot.clone(r, !0, !0), i && ot.merge(o, g(r, "script"))), t.call(this[u], r, u);
                if (i)
                    for (a = o[o.length - 1].ownerDocument, ot.map(o, x), u = 0; i > u; u++) r = o[u], Ut.test(r.type || "") && !ot._data(r, "globalEval") && ot.contains(a, r) && (r.src ? ot._evalUrl && ot._evalUrl(r.src) : ot.globalEval((r.text || r.textContent || r.innerHTML || "").replace(Jt, "")));
                s = n = null
            }
            return this
        }
    }), ot.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        ot.fn[e] = function(e) {
            for (var n, r = 0, i = [], o = ot(e), a = o.length - 1; a >= r; r++) n = r === a ? this : this.clone(!0), ot(o[r])[t](n), K.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var Zt, en = {};
    (function() {
        var e, t, n = mt.createElement("div"),
            r = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
        n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = n.getElementsByTagName("a")[0], e.style.cssText = "float:left;opacity:.5", rt.opacity = /^0.5/.test(e.style.opacity), rt.cssFloat = !!e.style.cssFloat, n.style.backgroundClip = "content-box", n.cloneNode(!0).style.backgroundClip = "", rt.clearCloneStyle = "content-box" === n.style.backgroundClip, e = n = null, rt.shrinkWrapBlocks = function() {
            var e, n, i, o;
            if (null == t) {
                if (e = mt.getElementsByTagName("body")[0], !e) return;
                o = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px", n = mt.createElement("div"), i = mt.createElement("div"), e.appendChild(n).appendChild(i), t = !1, typeof i.style.zoom !== Ct && (i.style.cssText = r + ";width:1px;padding:1px;zoom:1", i.innerHTML = "<div></div>", i.firstChild.style.width = "5px", t = 3 !== i.offsetWidth), e.removeChild(n), e = n = i = null
            }
            return t
        }
    })();
    var tn, nn, rn = /^margin/,
        on = RegExp("^(" + St + ")(?!px)[a-z%]+$", "i"),
        an = /^(top|right|bottom|left)$/;
    e.getComputedStyle ? (tn = function(e) {
            return e.ownerDocument.defaultView.getComputedStyle(e, null)
        }, nn = function(e, t, n) {
            var r, i, o, a, s = e.style;
            return n = n || tn(e), a = n ? n.getPropertyValue(t) || n[t] : void 0, n && ("" !== a || ot.contains(e.ownerDocument, e) || (a = ot.style(e, t)), on.test(a) && rn.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 === a ? a : a + ""
        }) : mt.documentElement.currentStyle && (tn = function(e) {
            return e.currentStyle
        }, nn = function(e, t, n) {
            var r, i, o, a, s = e.style;
            return n = n || tn(e), a = n ? n[t] : void 0, null == a && s && s[t] && (a = s[t]), on.test(a) && !an.test(t) && (r = s.left, i = e.runtimeStyle, o = i && i.left, o && (i.left = e.currentStyle.left), s.left = "fontSize" === t ? "1em" : a, a = s.pixelLeft + "px", s.left = r, o && (i.left = o)), void 0 === a ? a : a + "" || "auto"
        }),
        function() {
            function t() {
                var t, n, r = mt.getElementsByTagName("body")[0];
                r && (t = mt.createElement("div"), n = mt.createElement("div"), t.style.cssText = l, r.appendChild(t).appendChild(n), n.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;display:block;padding:1px;border:1px;width:4px;margin-top:1%;top:1%", ot.swap(r, null != r.style.zoom ? {
                    zoom: 1
                } : {}, function() {
                    i = 4 === n.offsetWidth
                }), o = !0, a = !1, s = !0, e.getComputedStyle && (a = "1%" !== (e.getComputedStyle(n, null) || {}).top, o = "4px" === (e.getComputedStyle(n, null) || {
                    width: "4px"
                }).width), r.removeChild(t), n = r = null)
            }
            var n, r, i, o, a, s, u = mt.createElement("div"),
                l = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px",
                c = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
            u.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = u.getElementsByTagName("a")[0], n.style.cssText = "float:left;opacity:.5", rt.opacity = /^0.5/.test(n.style.opacity), rt.cssFloat = !!n.style.cssFloat, u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", rt.clearCloneStyle = "content-box" === u.style.backgroundClip, n = u = null, ot.extend(rt, {
                reliableHiddenOffsets: function() {
                    if (null != r) return r;
                    var e, t, n, i = mt.createElement("div"),
                        o = mt.getElementsByTagName("body")[0];
                    if (o) return i.setAttribute("className", "t"), i.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = mt.createElement("div"), e.style.cssText = l, o.appendChild(e).appendChild(i), i.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", t = i.getElementsByTagName("td"), t[0].style.cssText = "padding:0;margin:0;border:0;display:none", n = 0 === t[0].offsetHeight, t[0].style.display = "", t[1].style.display = "none", r = n && 0 === t[0].offsetHeight, o.removeChild(e), i = o = null, r
                },
                boxSizing: function() {
                    return null == i && t(), i
                },
                boxSizingReliable: function() {
                    return null == o && t(), o
                },
                pixelPosition: function() {
                    return null == a && t(), a
                },
                reliableMarginRight: function() {
                    var t, n, r, i;
                    if (null == s && e.getComputedStyle) {
                        if (t = mt.getElementsByTagName("body")[0], !t) return;
                        n = mt.createElement("div"), r = mt.createElement("div"), n.style.cssText = l, t.appendChild(n).appendChild(r), i = r.appendChild(mt.createElement("div")), i.style.cssText = r.style.cssText = c, i.style.marginRight = i.style.width = "0", r.style.width = "1px", s = !parseFloat((e.getComputedStyle(i, null) || {}).marginRight), t.removeChild(n)
                    }
                    return s
                }
            })
        }(), ot.swap = function(e, t, n, r) {
            var i, o, a = {};
            for (o in t) a[o] = e.style[o], e.style[o] = t[o];
            i = n.apply(e, r || []);
            for (o in t) e.style[o] = a[o];
            return i
        };
    var sn = /alpha\([^)]*\)/i,
        un = /opacity\s*=\s*([^)]*)/,
        ln = /^(none|table(?!-c[ea]).+)/,
        cn = RegExp("^(" + St + ")(.*)$", "i"),
        fn = RegExp("^([+-])=(" + St + ")", "i"),
        pn = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        dn = {
            letterSpacing: 0,
            fontWeight: 400
        },
        hn = ["Webkit", "O", "Moz", "ms"];
    ot.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = nn(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": rt.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = ot.camelCase(t),
                    u = e.style;
                if (t = ot.cssProps[s] || (ot.cssProps[s] = S(u, s)), a = ot.cssHooks[t] || ot.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : u[t];
                if (o = typeof n, "string" === o && (i = fn.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(ot.css(e, t)), o = "number"), null != n && n === n && ("number" !== o || ot.cssNumber[s] || (n += "px"), rt.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), !(a && "set" in a && void 0 === (n = a.set(e, n, r))))) try {
                    u[t] = "", u[t] = n
                } catch (l) {}
            }
        },
        css: function(e, t, n, r) {
            var i, o, a, s = ot.camelCase(t);
            return t = ot.cssProps[s] || (ot.cssProps[s] = S(e.style, s)), a = ot.cssHooks[t] || ot.cssHooks[s], a && "get" in a && (o = a.get(e, !0, n)), void 0 === o && (o = nn(e, t, r)), "normal" === o && t in dn && (o = dn[t]), "" === n || n ? (i = parseFloat(o), n === !0 || ot.isNumeric(i) ? i || 0 : o) : o
        }
    }), ot.each(["height", "width"], function(e, t) {
        ot.cssHooks[t] = {
            get: function(e, n, r) {
                return n ? 0 === e.offsetWidth && ln.test(ot.css(e, "display")) ? ot.swap(e, pn, function() {
                    return L(e, t, r)
                }) : L(e, t, r) : void 0
            },
            set: function(e, n, r) {
                var i = r && tn(e);
                return j(e, n, r ? D(e, t, r, rt.boxSizing() && "border-box" === ot.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }), rt.opacity || (ot.cssHooks.opacity = {
        get: function(e, t) {
            return un.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var n = e.style,
                r = e.currentStyle,
                i = ot.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                o = r && r.filter || n.filter || "";
            n.zoom = 1, (t >= 1 || "" === t) && "" === ot.trim(o.replace(sn, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = sn.test(o) ? o.replace(sn, i) : o + " " + i)
        }
    }), ot.cssHooks.marginRight = k(rt.reliableMarginRight, function(e, t) {
        return t ? ot.swap(e, {
            display: "inline-block"
        }, nn, [e, "marginRight"]) : void 0
    }), ot.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        ot.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) i[e + At[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, rn.test(e) || (ot.cssHooks[e + t].set = j)
    }), ot.fn.extend({
        css: function(e, t) {
            return Dt(this, function(e, t, n) {
                var r, i, o = {},
                    a = 0;
                if (ot.isArray(t)) {
                    for (r = tn(e), i = t.length; i > a; a++) o[t[a]] = ot.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? ot.style(e, t, n) : ot.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function() {
            return A(this, !0)
        },
        hide: function() {
            return A(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                jt(this) ? ot(this).show() : ot(this).hide()
            })
        }
    }), ot.Tween = _, _.prototype = {
        constructor: _,
        init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (ot.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = _.propHooks[this.prop];
            return e && e.get ? e.get(this) : _.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = _.propHooks[this.prop];
            return this.pos = t = this.options.duration ? ot.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : _.propHooks._default.set(this), this
        }
    }, _.prototype.init.prototype = _.prototype, _.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = ot.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function(e) {
                ot.fx.step[e.prop] ? ot.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[ot.cssProps[e.prop]] || ot.cssHooks[e.prop]) ? ot.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, _.propHooks.scrollTop = _.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, ot.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, ot.fx = _.prototype.init, ot.fx.step = {};
    var mn, gn, vn = /^(?:toggle|show|hide)$/,
        yn = RegExp("^(?:([+-])=|)(" + St + ")([a-z%]*)$", "i"),
        bn = /queueHooks$/,
        xn = [F],
        wn = {
            "*": [function(e, t) {
                var n = this.createTween(e, t),
                    r = n.cur(),
                    i = yn.exec(t),
                    o = i && i[3] || (ot.cssNumber[e] ? "" : "px"),
                    a = (ot.cssNumber[e] || "px" !== o && +r) && yn.exec(ot.css(n.elem, e)),
                    s = 1,
                    u = 20;
                if (a && a[3] !== o) {
                    o = o || a[3], i = i || [], a = +r || 1;
                    do s = s || ".5", a /= s, ot.style(n.elem, e, a + o); while (s !== (s = n.cur() / r) && 1 !== s && --u)
                }
                return i && (a = n.start = +a || +r || 0, n.unit = o, n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]), n
            }]
        };
    ot.Animation = ot.extend(R, {
            tweener: function(e, t) {
                ot.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                for (var n, r = 0, i = e.length; i > r; r++) n = e[r], wn[n] = wn[n] || [], wn[n].unshift(t)
            },
            prefilter: function(e, t) {
                t ? xn.unshift(e) : xn.push(e)
            }
        }), ot.speed = function(e, t, n) {
            var r = e && "object" == typeof e ? ot.extend({}, e) : {
                complete: n || !n && t || ot.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !ot.isFunction(t) && t
            };
            return r.duration = ot.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in ot.fx.speeds ? ot.fx.speeds[r.duration] : ot.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                ot.isFunction(r.old) && r.old.call(this), r.queue && ot.dequeue(this, r.queue)
            }, r
        }, ot.fn.extend({
            fadeTo: function(e, t, n, r) {
                return this.filter(jt).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, r)
            },
            animate: function(e, t, n, r) {
                var i = ot.isEmptyObject(e),
                    o = ot.speed(t, n, r),
                    a = function() {
                        var t = R(this, ot.extend({}, e), o);
                        (i || ot._data(this, "finish")) && t.stop(!0)
                    };
                return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
            },
            stop: function(e, t, n) {
                var r = function(e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        i = null != e && e + "queueHooks",
                        o = ot.timers,
                        a = ot._data(this);
                    if (i) a[i] && a[i].stop && r(a[i]);
                    else
                        for (i in a) a[i] && a[i].stop && bn.test(i) && r(a[i]);
                    for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                    (t || !n) && ot.dequeue(this, e)
                })
            },
            finish: function(e) {
                return e !== !1 && (e = e || "fx"), this.each(function() {
                    var t, n = ot._data(this),
                        r = n[e + "queue"],
                        i = n[e + "queueHooks"],
                        o = ot.timers,
                        a = r ? r.length : 0;
                    for (n.finish = !0, ot.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish
                })
            }
        }), ot.each(["toggle", "show", "hide"], function(e, t) {
            var n = ot.fn[t];
            ot.fn[t] = function(e, r, i) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(O(t, !0), e, r, i)
            }
        }), ot.each({
            slideDown: O("show"),
            slideUp: O("hide"),
            slideToggle: O("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            ot.fn[e] = function(e, n, r) {
                return this.animate(t, e, n, r)
            }
        }), ot.timers = [], ot.fx.tick = function() {
            var e, t = ot.timers,
                n = 0;
            for (mn = ot.now(); t.length > n; n++) e = t[n], e() || t[n] !== e || t.splice(n--, 1);
            t.length || ot.fx.stop(), mn = void 0
        }, ot.fx.timer = function(e) {
            ot.timers.push(e), e() ? ot.fx.start() : ot.timers.pop()
        }, ot.fx.interval = 13, ot.fx.start = function() {
            gn || (gn = setInterval(ot.fx.tick, ot.fx.interval))
        }, ot.fx.stop = function() {
            clearInterval(gn), gn = null
        }, ot.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, ot.fn.delay = function(e, t) {
            return e = ot.fx ? ot.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                var r = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(r)
                }
            })
        },
        function() {
            var e, t, n, r, i = mt.createElement("div");
            i.setAttribute("className", "t"), i.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = i.getElementsByTagName("a")[0], n = mt.createElement("select"), r = n.appendChild(mt.createElement("option")), t = i.getElementsByTagName("input")[0], e.style.cssText = "top:1px", rt.getSetAttribute = "t" !== i.className, rt.style = /top/.test(e.getAttribute("style")), rt.hrefNormalized = "/a" === e.getAttribute("href"), rt.checkOn = !!t.value, rt.optSelected = r.selected, rt.enctype = !!mt.createElement("form").enctype, n.disabled = !0, rt.optDisabled = !r.disabled, t = mt.createElement("input"), t.setAttribute("value", ""), rt.input = "" === t.getAttribute("value"), t.value = "t", t.setAttribute("type", "radio"), rt.radioValue = "t" === t.value, e = t = n = r = i = null
        }();
    var Tn = /\r/g;
    ot.fn.extend({
        val: function(e) {
            var t, n, r, i = this[0]; {
                if (arguments.length) return r = ot.isFunction(e), this.each(function(n) {
                    var i;
                    1 === this.nodeType && (i = r ? e.call(this, n, ot(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : ot.isArray(i) && (i = ot.map(i, function(e) {
                        return null == e ? "" : e + ""
                    })), t = ot.valHooks[this.type] || ot.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                });
                if (i) return t = ot.valHooks[i.type] || ot.valHooks[i.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(Tn, "") : null == n ? "" : n)
            }
        }
    }), ot.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = ot.find.attr(e, "value");
                    return null != t ? t : ot.text(e)
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, a = o ? null : [], s = o ? i + 1 : r.length, u = 0 > i ? s : o ? i : 0; s > u; u++)
                        if (n = r[u], !(!n.selected && u !== i || (rt.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && ot.nodeName(n.parentNode, "optgroup"))) {
                            if (t = ot(n).val(), o) return t;
                            a.push(t)
                        }
                    return a
                },
                set: function(e, t) {
                    for (var n, r, i = e.options, o = ot.makeArray(t), a = i.length; a--;)
                        if (r = i[a], ot.inArray(ot.valHooks.option.get(r), o) >= 0) try {
                            r.selected = n = !0
                        } catch (s) {
                            r.scrollHeight
                        } else r.selected = !1;
                    return n || (e.selectedIndex = -1), i
                }
            }
        }
    }), ot.each(["radio", "checkbox"], function() {
        ot.valHooks[this] = {
            set: function(e, t) {
                return ot.isArray(t) ? e.checked = ot.inArray(ot(e).val(), t) >= 0 : void 0
            }
        }, rt.checkOn || (ot.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var En, Cn, Nn = ot.expr.attrHandle,
        kn = /^(?:checked|selected)$/i,
        Sn = rt.getSetAttribute,
        An = rt.input;
    ot.fn.extend({
        attr: function(e, t) {
            return Dt(this, ot.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                ot.removeAttr(this, e)
            })
        }
    }), ot.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (e && 3 !== o && 8 !== o && 2 !== o) return typeof e.getAttribute === Ct ? ot.prop(e, t, n) : (1 === o && ot.isXMLDoc(e) || (t = t.toLowerCase(), r = ot.attrHooks[t] || (ot.expr.match.bool.test(t) ? Cn : En)), void 0 === n ? r && "get" in r && null !== (i = r.get(e, t)) ? i : (i = ot.find.attr(e, t), null == i ? void 0 : i) : null !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : (ot.removeAttr(e, t), void 0))
        },
        removeAttr: function(e, t) {
            var n, r, i = 0,
                o = t && t.match(xt);
            if (o && 1 === e.nodeType)
                for (; n = o[i++];) r = ot.propFix[n] || n, ot.expr.match.bool.test(n) ? An && Sn || !kn.test(n) ? e[r] = !1 : e[ot.camelCase("default-" + n)] = e[r] = !1 : ot.attr(e, n, ""), e.removeAttribute(Sn ? n : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!rt.radioValue && "radio" === t && ot.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }
    }), Cn = {
        set: function(e, t, n) {
            return t === !1 ? ot.removeAttr(e, n) : An && Sn || !kn.test(n) ? e.setAttribute(!Sn && ot.propFix[n] || n, n) : e[ot.camelCase("default-" + n)] = e[n] = !0, n
        }
    }, ot.each(ot.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = Nn[t] || ot.find.attr;
        Nn[t] = An && Sn || !kn.test(t) ? function(e, t, r) {
            var i, o;
            return r || (o = Nn[t], Nn[t] = i, i = null != n(e, t, r) ? t.toLowerCase() : null, Nn[t] = o), i
        } : function(e, t, n) {
            return n ? void 0 : e[ot.camelCase("default-" + t)] ? t.toLowerCase() : null
        }
    }), An && Sn || (ot.attrHooks.value = {
        set: function(e, t, n) {
            return ot.nodeName(e, "input") ? (e.defaultValue = t, void 0) : En && En.set(e, t, n)
        }
    }), Sn || (En = {
        set: function(e, t, n) {
            var r = e.getAttributeNode(n);
            return r || e.setAttributeNode(r = e.ownerDocument.createAttribute(n)), r.value = t += "", "value" === n || t === e.getAttribute(n) ? t : void 0
        }
    }, Nn.id = Nn.name = Nn.coords = function(e, t, n) {
        var r;
        return n ? void 0 : (r = e.getAttributeNode(t)) && "" !== r.value ? r.value : null
    }, ot.valHooks.button = {
        get: function(e, t) {
            var n = e.getAttributeNode(t);
            return n && n.specified ? n.value : void 0
        },
        set: En.set
    }, ot.attrHooks.contenteditable = {
        set: function(e, t, n) {
            En.set(e, "" === t ? !1 : t, n)
        }
    }, ot.each(["width", "height"], function(e, t) {
        ot.attrHooks[t] = {
            set: function(e, n) {
                return "" === n ? (e.setAttribute(t, "auto"), n) : void 0
            }
        }
    })), rt.style || (ot.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || void 0
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    });
    var jn = /^(?:input|select|textarea|button|object)$/i,
        Dn = /^(?:a|area)$/i;
    ot.fn.extend({
        prop: function(e, t) {
            return Dt(this, ot.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = ot.propFix[e] || e, this.each(function() {
                try {
                    this[e] = void 0, delete this[e]
                } catch (t) {}
            })
        }
    }), ot.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(e, t, n) {
            var r, i, o, a = e.nodeType;
            if (e && 3 !== a && 8 !== a && 2 !== a) return o = 1 !== a || !ot.isXMLDoc(e), o && (t = ot.propFix[t] || t, i = ot.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = ot.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : jn.test(e.nodeName) || Dn.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }
    }), rt.hrefNormalized || ot.each(["href", "src"], function(e, t) {
        ot.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4)
            }
        }
    }), rt.optSelected || (ot.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    }), ot.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        ot.propFix[this.toLowerCase()] = this
    }), rt.enctype || (ot.propFix.enctype = "encoding");
    var Ln = /[\t\r\n\f]/g;
    ot.fn.extend({
        addClass: function(e) {
            var t, n, r, i, o, a, s = 0,
                u = this.length,
                l = "string" == typeof e && e;
            if (ot.isFunction(e)) return this.each(function(t) {
                ot(this).addClass(e.call(this, t, this.className))
            });
            if (l)
                for (t = (e || "").match(xt) || []; u > s; s++)
                    if (n = this[s], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Ln, " ") : " ")) {
                        for (o = 0; i = t[o++];) 0 > r.indexOf(" " + i + " ") && (r += i + " ");
                        a = ot.trim(r), n.className !== a && (n.className = a)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, o, a, s = 0,
                u = this.length,
                l = 0 === arguments.length || "string" == typeof e && e;
            if (ot.isFunction(e)) return this.each(function(t) {
                ot(this).removeClass(e.call(this, t, this.className))
            });
            if (l)
                for (t = (e || "").match(xt) || []; u > s; s++)
                    if (n = this[s], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Ln, " ") : "")) {
                        for (o = 0; i = t[o++];)
                            for (; r.indexOf(" " + i + " ") >= 0;) r = r.replace(" " + i + " ", " ");
                        a = e ? ot.trim(r) : "", n.className !== a && (n.className = a)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : ot.isFunction(e) ? this.each(function(n) {
                ot(this).toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function() {
                if ("string" === n)
                    for (var t, r = 0, i = ot(this), o = e.match(xt) || []; t = o[r++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                else(n === Ct || "boolean" === n) && (this.className && ot._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : ot._data(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Ln, " ").indexOf(t) >= 0) return !0;
            return !1
        }
    }), ot.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        ot.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), ot.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var _n = ot.now(),
        Hn = /\?/,
        On = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    ot.parseJSON = function(t) {
        if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
        var n, r = null,
            i = ot.trim(t + "");
        return i && !ot.trim(i.replace(On, function(e, t, i, o) {
            return n && t && (r = 0), 0 === r ? e : (n = i || t, r += !o - !i, "")
        })) ? Function("return " + i)() : ot.error("Invalid JSON: " + t)
    }, ot.parseXML = function(t) {
        var n, r;
        if (!t || "string" != typeof t) return null;
        try {
            e.DOMParser ? (r = new DOMParser, n = r.parseFromString(t, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(t))
        } catch (i) {
            n = void 0
        }
        return n && n.documentElement && !n.getElementsByTagName("parsererror").length || ot.error("Invalid XML: " + t), n
    };
    var Mn, Fn, qn = /#.*$/,
        Rn = /([?&])_=[^&]*/,
        Bn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Pn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        In = /^(?:GET|HEAD)$/,
        Wn = /^\/\//,
        $n = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        zn = {},
        Xn = {},
        Vn = "*/".concat("*");
    try {
        Fn = location.href
    } catch (Un) {
        Fn = mt.createElement("a"), Fn.href = "", Fn = Fn.href
    }
    Mn = $n.exec(Fn.toLowerCase()) || [], ot.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Fn,
            type: "GET",
            isLocal: Pn.test(Mn[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Vn,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": ot.parseJSON,
                "text xml": ot.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? I(I(e, ot.ajaxSettings), t) : I(ot.ajaxSettings, e)
        },
        ajaxPrefilter: B(zn),
        ajaxTransport: B(Xn),
        ajax: function(e, t) {
            function n(e, t, n, r) {
                var i, c, v, y, x, T = t;
                2 !== b && (b = 2, s && clearTimeout(s), l = void 0, a = r || "", w.readyState = e > 0 ? 4 : 0, i = e >= 200 && 300 > e || 304 === e, n && (y = W(f, w, n)), y = $(f, y, w, i), i ? (f.ifModified && (x = w.getResponseHeader("Last-Modified"), x && (ot.lastModified[o] = x), x = w.getResponseHeader("etag"), x && (ot.etag[o] = x)), 204 === e || "HEAD" === f.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = y.state, c = y.data, v = y.error, i = !v)) : (v = T, (e || !T) && (T = "error", 0 > e && (e = 0))), w.status = e, w.statusText = (t || T) + "", i ? h.resolveWith(p, [c, T, w]) : h.rejectWith(p, [w, T, v]), w.statusCode(g), g = void 0, u && d.trigger(i ? "ajaxSuccess" : "ajaxError", [w, f, i ? c : v]), m.fireWith(p, [w, T]), u && (d.trigger("ajaxComplete", [w, f]), --ot.active || ot.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var r, i, o, a, s, u, l, c, f = ot.ajaxSetup({}, t),
                p = f.context || f,
                d = f.context && (p.nodeType || p.jquery) ? ot(p) : ot.event,
                h = ot.Deferred(),
                m = ot.Callbacks("once memory"),
                g = f.statusCode || {},
                v = {},
                y = {},
                b = 0,
                x = "canceled",
                w = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === b) {
                            if (!c)
                                for (c = {}; t = Bn.exec(a);) c[t[1].toLowerCase()] = t[2];
                            t = c[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === b ? a : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return b || (e = y[n] = y[n] || e, v[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return b || (f.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (2 > b)
                                for (t in e) g[t] = [g[t], e[t]];
                            else w.always(e[w.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || x;
                        return l && l.abort(t), n(0, t), this
                    }
                };
            if (h.promise(w).complete = m.add, w.success = w.done, w.error = w.fail, f.url = ((e || f.url || Fn) + "").replace(qn, "").replace(Wn, Mn[1] + "//"), f.type = t.method || t.type || f.method || f.type, f.dataTypes = ot.trim(f.dataType || "*").toLowerCase().match(xt) || [""], null == f.crossDomain && (r = $n.exec(f.url.toLowerCase()), f.crossDomain = !(!r || r[1] === Mn[1] && r[2] === Mn[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (Mn[3] || ("http:" === Mn[1] ? "80" : "443")))), f.data && f.processData && "string" != typeof f.data && (f.data = ot.param(f.data, f.traditional)), P(zn, f, t, w), 2 === b) return w;
            u = f.global, u && 0 === ot.active++ && ot.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !In.test(f.type), o = f.url, f.hasContent || (f.data && (o = f.url += (Hn.test(o) ? "&" : "?") + f.data, delete f.data), f.cache === !1 && (f.url = Rn.test(o) ? o.replace(Rn, "$1_=" + _n++) : o + (Hn.test(o) ? "&" : "?") + "_=" + _n++)), f.ifModified && (ot.lastModified[o] && w.setRequestHeader("If-Modified-Since", ot.lastModified[o]), ot.etag[o] && w.setRequestHeader("If-None-Match", ot.etag[o])), (f.data && f.hasContent && f.contentType !== !1 || t.contentType) && w.setRequestHeader("Content-Type", f.contentType), w.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Vn + "; q=0.01" : "") : f.accepts["*"]);
            for (i in f.headers) w.setRequestHeader(i, f.headers[i]);
            if (f.beforeSend && (f.beforeSend.call(p, w, f) === !1 || 2 === b)) return w.abort();
            x = "abort";
            for (i in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) w[i](f[i]);
            if (l = P(Xn, f, t, w)) {
                w.readyState = 1, u && d.trigger("ajaxSend", [w, f]), f.async && f.timeout > 0 && (s = setTimeout(function() {
                    w.abort("timeout")
                }, f.timeout));
                try {
                    b = 1, l.send(v, n)
                } catch (T) {
                    if (!(2 > b)) throw T;
                    n(-1, T)
                }
            } else n(-1, "No Transport");
            return w
        },
        getJSON: function(e, t, n) {
            return ot.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return ot.get(e, void 0, t, "script")
        }
    }), ot.each(["get", "post"], function(e, t) {
        ot[t] = function(e, n, r, i) {
            return ot.isFunction(n) && (i = i || r, r = n, n = void 0), ot.ajax({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            })
        }
    }), ot.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        ot.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), ot._evalUrl = function(e) {
        return ot.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, ot.fn.extend({
        wrapAll: function(e) {
            if (ot.isFunction(e)) return this.each(function(t) {
                ot(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = ot(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return ot.isFunction(e) ? this.each(function(t) {
                ot(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = ot(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = ot.isFunction(e);
            return this.each(function(n) {
                ot(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                ot.nodeName(this, "body") || ot(this).replaceWith(this.childNodes)
            }).end()
        }
    }), ot.expr.filters.hidden = function(e) {
        return 0 >= e.offsetWidth && 0 >= e.offsetHeight || !rt.reliableHiddenOffsets() && "none" === (e.style && e.style.display || ot.css(e, "display"))
    }, ot.expr.filters.visible = function(e) {
        return !ot.expr.filters.hidden(e)
    };
    var Gn = /%20/g,
        Jn = /\[\]$/,
        Yn = /\r?\n/g,
        Kn = /^(?:submit|button|image|reset|file)$/i,
        Qn = /^(?:input|select|textarea|keygen)/i;
    ot.param = function(e, t) {
        var n, r = [],
            i = function(e, t) {
                t = ot.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (void 0 === t && (t = ot.ajaxSettings && ot.ajaxSettings.traditional), ot.isArray(e) || e.jquery && !ot.isPlainObject(e)) ot.each(e, function() {
            i(this.name, this.value)
        });
        else
            for (n in e) z(n, e[n], t, i);
        return r.join("&").replace(Gn, "+")
    }, ot.fn.extend({
        serialize: function() {
            return ot.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = ot.prop(this, "elements");
                return e ? ot.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !ot(this).is(":disabled") && Qn.test(this.nodeName) && !Kn.test(e) && (this.checked || !Lt.test(e))
            }).map(function(e, t) {
                var n = ot(this).val();
                return null == n ? null : ot.isArray(n) ? ot.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Yn, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Yn, "\r\n")
                }
            }).get()
        }
    }), ot.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function() {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && X() || V()
    } : X;
    var Zn = 0,
        er = {},
        tr = ot.ajaxSettings.xhr();
    e.ActiveXObject && ot(e).on("unload", function() {
        for (var e in er) er[e](void 0, !0)
    }), rt.cors = !!tr && "withCredentials" in tr, tr = rt.ajax = !!tr, tr && ot.ajaxTransport(function(e) {
        if (!e.crossDomain || rt.cors) {
            var t;
            return {
                send: function(n, r) {
                    var i, o = e.xhr(),
                        a = ++Zn;
                    if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                        for (i in e.xhrFields) o[i] = e.xhrFields[i];
                    e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                    for (i in n) void 0 !== n[i] && o.setRequestHeader(i, n[i] + "");
                    o.send(e.hasContent && e.data || null), t = function(n, i) {
                        var s, u, l;
                        if (t && (i || 4 === o.readyState))
                            if (delete er[a], t = void 0, o.onreadystatechange = ot.noop, i) 4 !== o.readyState && o.abort();
                            else {
                                l = {}, s = o.status, "string" == typeof o.responseText && (l.text = o.responseText);
                                try {
                                    u = o.statusText
                                } catch (c) {
                                    u = ""
                                }
                                s || !e.isLocal || e.crossDomain ? 1223 === s && (s = 204) : s = l.text ? 200 : 404
                            }
                        l && r(s, u, l, o.getAllResponseHeaders())
                    }, e.async ? 4 === o.readyState ? setTimeout(t) : o.onreadystatechange = er[a] = t : t()
                },
                abort: function() {
                    t && t(void 0, !0)
                }
            }
        }
    }), ot.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return ot.globalEval(e), e
            }
        }
    }), ot.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), ot.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n = mt.head || ot("head")[0] || mt.documentElement;
            return {
                send: function(r, i) {
                    t = mt.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function(e, n) {
                        (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || i(200, "success"))
                    }, n.insertBefore(t, n.firstChild)
                },
                abort: function() {
                    t && t.onload(void 0, !0)
                }
            }
        }
    });
    var nr = [],
        rr = /(=)\?(?=&|$)|\?\?/;
    ot.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = nr.pop() || ot.expando + "_" + _n++;
            return this[e] = !0, e
        }
    }), ot.ajaxPrefilter("json jsonp", function(t, n, r) {
        var i, o, a, s = t.jsonp !== !1 && (rr.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && rr.test(t.data) && "data");
        return s || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = ot.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(rr, "$1" + i) : t.jsonp !== !1 && (t.url += (Hn.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
            return a || ot.error(i + " was not called"), a[0]
        }, t.dataTypes[0] = "json", o = e[i], e[i] = function() {
            a = arguments
        }, r.always(function() {
            e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, nr.push(i)), a && ot.isFunction(o) && o(a[0]), a = o = void 0
        }), "script") : void 0
    }), ot.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || mt;
        var r = pt.exec(e),
            i = !n && [];
        return r ? [t.createElement(r[1])] : (r = ot.buildFragment([e], t, i), i && i.length && ot(i).remove(), ot.merge([], r.childNodes))
    };
    var ir = ot.fn.load;
    ot.fn.load = function(e, t, n) {
        if ("string" != typeof e && ir) return ir.apply(this, arguments);
        var r, i, o, a = this,
            s = e.indexOf(" ");
        return s >= 0 && (r = e.slice(s, e.length), e = e.slice(0, s)), ot.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), a.length > 0 && ot.ajax({
            url: e,
            type: o,
            dataType: "html",
            data: t
        }).done(function(e) {
            i = arguments, a.html(r ? ot("<div>").append(ot.parseHTML(e)).find(r) : e)
        }).complete(n && function(e, t) {
            a.each(n, i || [e.responseText, t, e])
        }), this
    }, ot.expr.filters.animated = function(e) {
        return ot.grep(ot.timers, function(t) {
            return e === t.elem
        }).length
    };
    var or = e.document.documentElement;
    ot.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, u, l, c = ot.css(e, "position"),
                f = ot(e),
                p = {};
            "static" === c && (e.style.position = "relative"), s = f.offset(), o = ot.css(e, "top"), u = ot.css(e, "left"), l = ("absolute" === c || "fixed" === c) && ot.inArray("auto", [o, u]) > -1, l ? (r = f.position(), a = r.top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), ot.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (p.top = t.top - s.top + a), null != t.left && (p.left = t.left - s.left + i), "using" in t ? t.using.call(e, p) : f.css(p)
        }
    }, ot.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                ot.offset.setOffset(this, e, t)
            });
            var t, n, r = {
                    top: 0,
                    left: 0
                },
                i = this[0],
                o = i && i.ownerDocument;
            if (o) return t = o.documentElement, ot.contains(t, i) ? (typeof i.getBoundingClientRect !== Ct && (r = i.getBoundingClientRect()), n = U(o), {
                top: r.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                left: r.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
            }) : r
        },
        position: function() {
            if (this[0]) {
                var e, t, n = {
                        top: 0,
                        left: 0
                    },
                    r = this[0];
                return "fixed" === ot.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), ot.nodeName(e[0], "html") || (n = e.offset()), n.top += ot.css(e[0], "borderTopWidth", !0), n.left += ot.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - ot.css(r, "marginTop", !0),
                    left: t.left - n.left - ot.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || or; e && !ot.nodeName(e, "html") && "static" === ot.css(e, "position");) e = e.offsetParent;
                return e || or
            })
        }
    }), ot.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = /Y/.test(t);
        ot.fn[e] = function(r) {
            return Dt(this, function(e, r, i) {
                var o = U(e);
                return void 0 === i ? o ? t in o ? o[t] : o.document.documentElement[r] : e[r] : (o ? o.scrollTo(n ? ot(o).scrollLeft() : i, n ? i : ot(o).scrollTop()) : e[r] = i, void 0)
            }, e, r, arguments.length, null)
        }
    }), ot.each(["top", "left"], function(e, t) {
        ot.cssHooks[t] = k(rt.pixelPosition, function(e, n) {
            return n ? (n = nn(e, t), on.test(n) ? ot(e).position()[t] + "px" : n) : void 0
        })
    }), ot.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        ot.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, r) {
            ot.fn[r] = function(r, i) {
                var o = arguments.length && (n || "boolean" != typeof r),
                    a = n || (r === !0 || i === !0 ? "margin" : "border");
                return Dt(this, function(t, n, r) {
                    var i;
                    return ot.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? ot.css(t, n, a) : ot.style(t, n, r, a)
                }, t, o ? r : void 0, o, null)
            }
        })
    }), ot.fn.size = function() {
        return this.length
    }, ot.fn.andSelf = ot.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return ot
    });
    var ar = e.jQuery,
        sr = e.$;
    return ot.noConflict = function(t) {
        return e.$ === ot && (e.$ = sr), t && e.jQuery === ot && (e.jQuery = ar), ot
    }, typeof t === Ct && (e.jQuery = e.$ = ot), ot
}),
function() {
    var e = this,
        t = e._,
        n = {},
        r = Array.prototype,
        i = Object.prototype,
        o = Function.prototype,
        a = r.push,
        s = r.slice,
        u = r.concat,
        l = i.toString,
        c = i.hasOwnProperty,
        f = r.forEach,
        p = r.map,
        d = r.reduce,
        h = r.reduceRight,
        m = r.filter,
        g = r.every,
        v = r.some,
        y = r.indexOf,
        b = r.lastIndexOf,
        x = Array.isArray,
        w = Object.keys,
        T = o.bind,
        E = function(e) {
            return e instanceof E ? e : this instanceof E ? (this._wrapped = e, void 0) : new E(e)
        };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = E), exports._ = E) : e._ = E, E.VERSION = "1.5.2";
    var C = E.each = E.forEach = function(e, t, r) {
        if (null != e)
            if (f && e.forEach === f) e.forEach(t, r);
            else if (e.length === +e.length) {
            for (var i = 0, o = e.length; o > i; i++)
                if (t.call(r, e[i], i, e) === n) return
        } else
            for (var a = E.keys(e), i = 0, o = a.length; o > i; i++)
                if (t.call(r, e[a[i]], a[i], e) === n) return
    };
    E.map = E.collect = function(e, t, n) {
        var r = [];
        return null == e ? r : p && e.map === p ? e.map(t, n) : (C(e, function(e, i, o) {
            r.push(t.call(n, e, i, o))
        }), r)
    };
    var N = "Reduce of empty array with no initial value";
    E.reduce = E.foldl = E.inject = function(e, t, n, r) {
        var i = arguments.length > 2;
        if (null == e && (e = []), d && e.reduce === d) return r && (t = E.bind(t, r)), i ? e.reduce(t, n) : e.reduce(t);
        if (C(e, function(e, o, a) {
                i ? n = t.call(r, n, e, o, a) : (n = e, i = !0)
            }), !i) throw new TypeError(N);
        return n
    }, E.reduceRight = E.foldr = function(e, t, n, r) {
        var i = arguments.length > 2;
        if (null == e && (e = []), h && e.reduceRight === h) return r && (t = E.bind(t, r)), i ? e.reduceRight(t, n) : e.reduceRight(t);
        var o = e.length;
        if (o !== +o) {
            var a = E.keys(e);
            o = a.length
        }
        if (C(e, function(s, u, l) {
                u = a ? a[--o] : --o, i ? n = t.call(r, n, e[u], u, l) : (n = e[u], i = !0)
            }), !i) throw new TypeError(N);
        return n
    }, E.find = E.detect = function(e, t, n) {
        var r;
        return k(e, function(e, i, o) {
            return t.call(n, e, i, o) ? (r = e, !0) : void 0
        }), r
    }, E.filter = E.select = function(e, t, n) {
        var r = [];
        return null == e ? r : m && e.filter === m ? e.filter(t, n) : (C(e, function(e, i, o) {
            t.call(n, e, i, o) && r.push(e)
        }), r)
    }, E.reject = function(e, t, n) {
        return E.filter(e, function(e, r, i) {
            return !t.call(n, e, r, i)
        }, n)
    }, E.every = E.all = function(e, t, r) {
        t || (t = E.identity);
        var i = !0;
        return null == e ? i : g && e.every === g ? e.every(t, r) : (C(e, function(e, o, a) {
            return (i = i && t.call(r, e, o, a)) ? void 0 : n
        }), !!i)
    };
    var k = E.some = E.any = function(e, t, r) {
        t || (t = E.identity);
        var i = !1;
        return null == e ? i : v && e.some === v ? e.some(t, r) : (C(e, function(e, o, a) {
            return i || (i = t.call(r, e, o, a)) ? n : void 0
        }), !!i)
    };
    E.contains = E.include = function(e, t) {
        return null == e ? !1 : y && e.indexOf === y ? -1 != e.indexOf(t) : k(e, function(e) {
            return e === t
        })
    }, E.invoke = function(e, t) {
        var n = s.call(arguments, 2),
            r = E.isFunction(t);
        return E.map(e, function(e) {
            return (r ? t : e[t]).apply(e, n)
        })
    }, E.pluck = function(e, t) {
        return E.map(e, function(e) {
            return e[t]
        })
    }, E.where = function(e, t, n) {
        return E.isEmpty(t) ? n ? void 0 : [] : E[n ? "find" : "filter"](e, function(e) {
            for (var n in t)
                if (t[n] !== e[n]) return !1;
            return !0
        })
    }, E.findWhere = function(e, t) {
        return E.where(e, t, !0)
    }, E.max = function(e, t, n) {
        if (!t && E.isArray(e) && e[0] === +e[0] && 65535 > e.length) return Math.max.apply(Math, e);
        if (!t && E.isEmpty(e)) return -1 / 0;
        var r = {
            computed: -1 / 0,
            value: -1 / 0
        };
        return C(e, function(e, i, o) {
            var a = t ? t.call(n, e, i, o) : e;
            a > r.computed && (r = {
                value: e,
                computed: a
            })
        }), r.value
    }, E.min = function(e, t, n) {
        if (!t && E.isArray(e) && e[0] === +e[0] && 65535 > e.length) return Math.min.apply(Math, e);
        if (!t && E.isEmpty(e)) return 1 / 0;
        var r = {
            computed: 1 / 0,
            value: 1 / 0
        };
        return C(e, function(e, i, o) {
            var a = t ? t.call(n, e, i, o) : e;
            r.computed > a && (r = {
                value: e,
                computed: a
            })
        }), r.value
    }, E.shuffle = function(e) {
        var t, n = 0,
            r = [];
        return C(e, function(e) {
            t = E.random(n++), r[n - 1] = r[t], r[t] = e
        }), r
    }, E.sample = function(e, t, n) {
        return 2 > arguments.length || n ? e[E.random(e.length - 1)] : E.shuffle(e).slice(0, Math.max(0, t))
    };
    var S = function(e) {
        return E.isFunction(e) ? e : function(t) {
            return t[e]
        }
    };
    E.sortBy = function(e, t, n) {
        var r = S(t);
        return E.pluck(E.map(e, function(e, t, i) {
            return {
                value: e,
                index: t,
                criteria: r.call(n, e, t, i)
            }
        }).sort(function(e, t) {
            var n = e.criteria,
                r = t.criteria;
            if (n !== r) {
                if (n > r || void 0 === n) return 1;
                if (r > n || void 0 === r) return -1
            }
            return e.index - t.index
        }), "value")
    };
    var A = function(e) {
        return function(t, n, r) {
            var i = {},
                o = null == n ? E.identity : S(n);
            return C(t, function(n, a) {
                var s = o.call(r, n, a, t);
                e(i, s, n)
            }), i
        }
    };
    E.groupBy = A(function(e, t, n) {
        (E.has(e, t) ? e[t] : e[t] = []).push(n)
    }), E.indexBy = A(function(e, t, n) {
        e[t] = n
    }), E.countBy = A(function(e, t) {
        E.has(e, t) ? e[t]++ : e[t] = 1
    }), E.sortedIndex = function(e, t, n, r) {
        n = null == n ? E.identity : S(n);
        for (var i = n.call(r, t), o = 0, a = e.length; a > o;) {
            var s = o + a >>> 1;
            i > n.call(r, e[s]) ? o = s + 1 : a = s
        }
        return o
    }, E.toArray = function(e) {
        return e ? E.isArray(e) ? s.call(e) : e.length === +e.length ? E.map(e, E.identity) : E.values(e) : []
    }, E.size = function(e) {
        return null == e ? 0 : e.length === +e.length ? e.length : E.keys(e).length
    }, E.first = E.head = E.take = function(e, t, n) {
        return null == e ? void 0 : null == t || n ? e[0] : s.call(e, 0, t)
    }, E.initial = function(e, t, n) {
        return s.call(e, 0, e.length - (null == t || n ? 1 : t))
    }, E.last = function(e, t, n) {
        return null == e ? void 0 : null == t || n ? e[e.length - 1] : s.call(e, Math.max(e.length - t, 0))
    }, E.rest = E.tail = E.drop = function(e, t, n) {
        return s.call(e, null == t || n ? 1 : t)
    }, E.compact = function(e) {
        return E.filter(e, E.identity)
    };
    var j = function(e, t, n) {
        return t && E.every(e, E.isArray) ? u.apply(n, e) : (C(e, function(e) {
            E.isArray(e) || E.isArguments(e) ? t ? a.apply(n, e) : j(e, t, n) : n.push(e)
        }), n)
    };
    E.flatten = function(e, t) {
        return j(e, t, [])
    }, E.without = function(e) {
        return E.difference(e, s.call(arguments, 1))
    }, E.uniq = E.unique = function(e, t, n, r) {
        E.isFunction(t) && (r = n, n = t, t = !1);
        var i = n ? E.map(e, n, r) : e,
            o = [],
            a = [];
        return C(i, function(n, r) {
            (t ? r && a[a.length - 1] === n : E.contains(a, n)) || (a.push(n), o.push(e[r]))
        }), o
    }, E.union = function() {
        return E.uniq(E.flatten(arguments, !0))
    }, E.intersection = function(e) {
        var t = s.call(arguments, 1);
        return E.filter(E.uniq(e), function(e) {
            return E.every(t, function(t) {
                return E.indexOf(t, e) >= 0
            })
        })
    }, E.difference = function(e) {
        var t = u.apply(r, s.call(arguments, 1));
        return E.filter(e, function(e) {
            return !E.contains(t, e)
        })
    }, E.zip = function() {
        for (var e = E.max(E.pluck(arguments, "length").concat(0)), t = Array(e), n = 0; e > n; n++) t[n] = E.pluck(arguments, "" + n);
        return t
    }, E.object = function(e, t) {
        if (null == e) return {};
        for (var n = {}, r = 0, i = e.length; i > r; r++) t ? n[e[r]] = t[r] : n[e[r][0]] = e[r][1];
        return n
    }, E.indexOf = function(e, t, n) {
        if (null == e) return -1;
        var r = 0,
            i = e.length;
        if (n) {
            if ("number" != typeof n) return r = E.sortedIndex(e, t), e[r] === t ? r : -1;
            r = 0 > n ? Math.max(0, i + n) : n
        }
        if (y && e.indexOf === y) return e.indexOf(t, n);
        for (; i > r; r++)
            if (e[r] === t) return r;
        return -1
    }, E.lastIndexOf = function(e, t, n) {
        if (null == e) return -1;
        var r = null != n;
        if (b && e.lastIndexOf === b) return r ? e.lastIndexOf(t, n) : e.lastIndexOf(t);
        for (var i = r ? n : e.length; i--;)
            if (e[i] === t) return i;
        return -1
    }, E.range = function(e, t, n) {
        1 >= arguments.length && (t = e || 0, e = 0), n = arguments[2] || 1;
        for (var r = Math.max(Math.ceil((t - e) / n), 0), i = 0, o = Array(r); r > i;) o[i++] = e, e += n;
        return o
    };
    var D = function() {};
    E.bind = function(e, t) {
        var n, r;
        if (T && e.bind === T) return T.apply(e, s.call(arguments, 1));
        if (!E.isFunction(e)) throw new TypeError;
        return n = s.call(arguments, 2), r = function() {
            if (!(this instanceof r)) return e.apply(t, n.concat(s.call(arguments)));
            D.prototype = e.prototype;
            var i = new D;
            D.prototype = null;
            var o = e.apply(i, n.concat(s.call(arguments)));
            return Object(o) === o ? o : i
        }
    }, E.partial = function(e) {
        var t = s.call(arguments, 1);
        return function() {
            return e.apply(this, t.concat(s.call(arguments)))
        }
    }, E.bindAll = function(e) {
        var t = s.call(arguments, 1);
        if (0 === t.length) throw Error("bindAll must be passed function names");
        return C(t, function(t) {
            e[t] = E.bind(e[t], e)
        }), e
    }, E.memoize = function(e, t) {
        var n = {};
        return t || (t = E.identity),
            function() {
                var r = t.apply(this, arguments);
                return E.has(n, r) ? n[r] : n[r] = e.apply(this, arguments)
            }
    }, E.delay = function(e, t) {
        var n = s.call(arguments, 2);
        return setTimeout(function() {
            return e.apply(null, n)
        }, t)
    }, E.defer = function(e) {
        return E.delay.apply(E, [e, 1].concat(s.call(arguments, 1)))
    }, E.throttle = function(e, t, n) {
        var r, i, o, a = null,
            s = 0;
        n || (n = {});
        var u = function() {
            s = n.leading === !1 ? 0 : new Date, a = null, o = e.apply(r, i)
        };
        return function() {
            var l = new Date;
            s || n.leading !== !1 || (s = l);
            var c = t - (l - s);
            return r = this, i = arguments, 0 >= c ? (clearTimeout(a), a = null, s = l, o = e.apply(r, i)) : a || n.trailing === !1 || (a = setTimeout(u, c)), o
        }
    }, E.debounce = function(e, t, n) {
        var r, i, o, a, s;
        return function() {
            o = this, i = arguments, a = new Date;
            var u = function() {
                    var l = new Date - a;
                    t > l ? r = setTimeout(u, t - l) : (r = null, n || (s = e.apply(o, i)))
                },
                l = n && !r;
            return r || (r = setTimeout(u, t)), l && (s = e.apply(o, i)), s
        }
    }, E.once = function(e) {
        var t, n = !1;
        return function() {
            return n ? t : (n = !0, t = e.apply(this, arguments), e = null, t)
        }
    }, E.wrap = function(e, t) {
        return function() {
            var n = [e];
            return a.apply(n, arguments), t.apply(this, n)
        }
    }, E.compose = function() {
        var e = arguments;
        return function() {
            for (var t = arguments, n = e.length - 1; n >= 0; n--) t = [e[n].apply(this, t)];
            return t[0]
        }
    }, E.after = function(e, t) {
        return function() {
            return 1 > --e ? t.apply(this, arguments) : void 0
        }
    }, E.keys = w || function(e) {
        if (e !== Object(e)) throw new TypeError("Invalid object");
        var t = [];
        for (var n in e) E.has(e, n) && t.push(n);
        return t
    }, E.values = function(e) {
        for (var t = E.keys(e), n = t.length, r = Array(n), i = 0; n > i; i++) r[i] = e[t[i]];
        return r
    }, E.pairs = function(e) {
        for (var t = E.keys(e), n = t.length, r = Array(n), i = 0; n > i; i++) r[i] = [t[i], e[t[i]]];
        return r
    }, E.invert = function(e) {
        for (var t = {}, n = E.keys(e), r = 0, i = n.length; i > r; r++) t[e[n[r]]] = n[r];
        return t
    }, E.functions = E.methods = function(e) {
        var t = [];
        for (var n in e) E.isFunction(e[n]) && t.push(n);
        return t.sort()
    }, E.extend = function(e) {
        return C(s.call(arguments, 1), function(t) {
            if (t)
                for (var n in t) e[n] = t[n]
        }), e
    }, E.pick = function(e) {
        var t = {},
            n = u.apply(r, s.call(arguments, 1));
        return C(n, function(n) {
            n in e && (t[n] = e[n])
        }), t
    }, E.omit = function(e) {
        var t = {},
            n = u.apply(r, s.call(arguments, 1));
        for (var i in e) E.contains(n, i) || (t[i] = e[i]);
        return t
    }, E.defaults = function(e) {
        return C(s.call(arguments, 1), function(t) {
            if (t)
                for (var n in t) void 0 === e[n] && (e[n] = t[n])
        }), e
    }, E.clone = function(e) {
        return E.isObject(e) ? E.isArray(e) ? e.slice() : E.extend({}, e) : e
    }, E.tap = function(e, t) {
        return t(e), e
    };
    var L = function(e, t, n, r) {
        if (e === t) return 0 !== e || 1 / e == 1 / t;
        if (null == e || null == t) return e === t;
        e instanceof E && (e = e._wrapped), t instanceof E && (t = t._wrapped);
        var i = l.call(e);
        if (i != l.call(t)) return !1;
        switch (i) {
            case "[object String]":
                return e == t + "";
            case "[object Number]":
                return e != +e ? t != +t : 0 == e ? 1 / e == 1 / t : e == +t;
            case "[object Date]":
            case "[object Boolean]":
                return +e == +t;
            case "[object RegExp]":
                return e.source == t.source && e.global == t.global && e.multiline == t.multiline && e.ignoreCase == t.ignoreCase
        }
        if ("object" != typeof e || "object" != typeof t) return !1;
        for (var o = n.length; o--;)
            if (n[o] == e) return r[o] == t;
        var a = e.constructor,
            s = t.constructor;
        if (a !== s && !(E.isFunction(a) && a instanceof a && E.isFunction(s) && s instanceof s)) return !1;
        n.push(e), r.push(t);
        var u = 0,
            c = !0;
        if ("[object Array]" == i) {
            if (u = e.length, c = u == t.length)
                for (; u-- && (c = L(e[u], t[u], n, r)););
        } else {
            for (var f in e)
                if (E.has(e, f) && (u++, !(c = E.has(t, f) && L(e[f], t[f], n, r)))) break;
            if (c) {
                for (f in t)
                    if (E.has(t, f) && !u--) break;
                c = !u
            }
        }
        return n.pop(), r.pop(), c
    };
    E.isEqual = function(e, t) {
        return L(e, t, [], [])
    }, E.isEmpty = function(e) {
        if (null == e) return !0;
        if (E.isArray(e) || E.isString(e)) return 0 === e.length;
        for (var t in e)
            if (E.has(e, t)) return !1;
        return !0
    }, E.isElement = function(e) {
        return !(!e || 1 !== e.nodeType)
    }, E.isArray = x || function(e) {
        return "[object Array]" == l.call(e)
    }, E.isObject = function(e) {
        return e === Object(e)
    }, C(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function(e) {
        E["is" + e] = function(t) {
            return l.call(t) == "[object " + e + "]"
        }
    }), E.isArguments(arguments) || (E.isArguments = function(e) {
        return !(!e || !E.has(e, "callee"))
    }), E.isFunction = function(e) {
        return "function" == typeof e
    }, E.isFinite = function(e) {
        return isFinite(e) && !isNaN(parseFloat(e))
    }, E.isNaN = function(e) {
        return E.isNumber(e) && e != +e
    }, E.isBoolean = function(e) {
        return e === !0 || e === !1 || "[object Boolean]" == l.call(e)
    }, E.isNull = function(e) {
        return null === e
    }, E.isUndefined = function(e) {
        return void 0 === e
    }, E.has = function(e, t) {
        return c.call(e, t)
    }, E.noConflict = function() {
        return e._ = t, this
    }, E.identity = function(e) {
        return e
    }, E.times = function(e, t, n) {
        for (var r = Array(Math.max(0, e)), i = 0; e > i; i++) r[i] = t.call(n, i);
        return r
    }, E.random = function(e, t) {
        return null == t && (t = e, e = 0), e + Math.floor(Math.random() * (t - e + 1))
    };
    var _ = {
        escape: {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;"
        }
    };
    _.unescape = E.invert(_.escape);
    var H = {
        escape: RegExp("[" + E.keys(_.escape).join("") + "]", "g"),
        unescape: RegExp("(" + E.keys(_.unescape).join("|") + ")", "g")
    };
    E.each(["escape", "unescape"], function(e) {
        E[e] = function(t) {
            return null == t ? "" : ("" + t).replace(H[e], function(t) {
                return _[e][t]
            })
        }
    }), E.result = function(e, t) {
        if (null == e) return void 0;
        var n = e[t];
        return E.isFunction(n) ? n.call(e) : n
    }, E.mixin = function(e) {
        C(E.functions(e), function(t) {
            var n = E[t] = e[t];
            E.prototype[t] = function() {
                var e = [this._wrapped];
                return a.apply(e, arguments), R.call(this, n.apply(E, e))
            }
        })
    };
    var O = 0;
    E.uniqueId = function(e) {
        var t = ++O + "";
        return e ? e + t : t
    }, E.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var M = /(.)^/,
        F = {
            "'": "'",
            "\\": "\\",
            "\r": "r",
            "\n": "n",
            "	": "t",
            "\u2028": "u2028",
            "\u2029": "u2029"
        },
        q = /\\|'|\r|\n|\t|\u2028|\u2029/g;
    E.template = function(e, t, n) {
        var r;
        n = E.defaults({}, n, E.templateSettings);
        var i = RegExp([(n.escape || M).source, (n.interpolate || M).source, (n.evaluate || M).source].join("|") + "|$", "g"),
            o = 0,
            a = "__p+='";
        e.replace(i, function(t, n, r, i, s) {
            return a += e.slice(o, s).replace(q, function(e) {
                return "\\" + F[e]
            }), n && (a += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'"), r && (a += "'+\n((__t=(" + r + "))==null?'':__t)+\n'"), i && (a += "';\n" + i + "\n__p+='"), o = s + t.length, t
        }), a += "';\n", n.variable || (a = "with(obj||{}){\n" + a + "}\n"), a = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + a + "return __p;\n";
        try {
            r = Function(n.variable || "obj", "_", a)
        } catch (s) {
            throw s.source = a, s
        }
        if (t) return r(t, E);
        var u = function(e) {
            return r.call(this, e, E)
        };
        return u.source = "function(" + (n.variable || "obj") + "){\n" + a + "}", u
    }, E.chain = function(e) {
        return E(e).chain()
    };
    var R = function(e) {
        return this._chain ? E(e).chain() : e
    };
    E.mixin(E), C(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(e) {
        var t = r[e];
        E.prototype[e] = function() {
            var n = this._wrapped;
            return t.apply(n, arguments), "shift" != e && "splice" != e || 0 !== n.length || delete n[0], R.call(this, n)
        }
    }), C(["concat", "join", "slice"], function(e) {
        var t = r[e];
        E.prototype[e] = function() {
            return R.call(this, t.apply(this._wrapped, arguments))
        }
    }), E.extend(E.prototype, {
        chain: function() {
            return this._chain = !0, this
        },
        value: function() {
            return this._wrapped
        }
    })
}.call(this);
var Handlebars = {};
(function(e, t) {
    e.VERSION = "1.0.0", e.COMPILER_REVISION = 4, e.REVISION_CHANGES = {
        1: "<= 1.0.rc.2",
        2: "== 1.0.0-rc.3",
        3: "== 1.0.0-rc.4",
        4: ">= 1.0.0"
    }, e.helpers = {}, e.partials = {};
    var n = Object.prototype.toString,
        r = "[object Function]",
        i = "[object Object]";
    e.registerHelper = function(t, r, o) {
        if (n.call(t) === i) {
            if (o || r) throw new e.Exception("Arg not supported with multiple helpers");
            e.Utils.extend(this.helpers, t)
        } else o && (r.not = o), this.helpers[t] = r
    }, e.registerPartial = function(t, r) {
        n.call(t) === i ? e.Utils.extend(this.partials, t) : this.partials[t] = r
    }, e.registerHelper("helperMissing", function(e) {
        if (2 === arguments.length) return t;
        throw Error("Missing helper: '" + e + "'")
    }), e.registerHelper("blockHelperMissing", function(t, i) {
        var o = i.inverse || function() {},
            a = i.fn,
            s = n.call(t);
        return s === r && (t = t.call(this)), t === !0 ? a(this) : t === !1 || null == t ? o(this) : "[object Array]" === s ? t.length > 0 ? e.helpers.each(t, i) : o(this) : a(t)
    }), e.K = function() {}, e.createFrame = Object.create || function(t) {
        e.K.prototype = t;
        var n = new e.K;
        return e.K.prototype = null, n
    }, e.logger = {
        DEBUG: 0,
        INFO: 1,
        WARN: 2,
        ERROR: 3,
        level: 3,
        methodMap: {
            0: "debug",
            1: "info",
            2: "warn",
            3: "error"
        },
        log: function(t, n) {
            if (t >= e.logger.level) {
                var r = e.logger.methodMap[t];
                "undefined" != typeof console && console[r] && console[r].call(console, n)
            }
        }
    }, e.log = function(t, n) {
        e.logger.log(t, n)
    }, e.registerHelper("each", function(t, i) {
        var o, a = i.fn,
            s = i.inverse,
            u = 0,
            l = "",
            c = n.call(t);
        if (c === r && (t = t.call(this)), i.data && (o = e.createFrame(i.data)), t && "object" == typeof t)
            if (t instanceof Array)
                for (var f = t.length; f > u; u++) o && (o.index = u), l += a(t[u], {
                    data: o
                });
            else
                for (var p in t) t.hasOwnProperty(p) && (o && (o.key = p), l += a(t[p], {
                    data: o
                }), u++);
        return 0 === u && (l = s(this)), l
    }), e.registerHelper("if", function(t, i) {
        var o = n.call(t);
        return o === r && (t = t.call(this)), !t || e.Utils.isEmpty(t) ? i.inverse(this) : i.fn(this)
    }), e.registerHelper("unless", function(t, n) {
        return e.helpers["if"].call(this, t, {
            fn: n.inverse,
            inverse: n.fn
        })
    }), e.registerHelper("with", function(i, o) {
        var a = n.call(i);
        return a === r && (i = i.call(this)), e.Utils.isEmpty(i) ? t : o.fn(i)
    }), e.registerHelper("log", function(t, n) {
        var r = n.data && null != n.data.level ? parseInt(n.data.level, 10) : 1;
        e.log(r, t)
    });
    var o = ["description", "fileName", "lineNumber", "message", "name", "number", "stack"];
    e.Exception = function() {
        for (var e = Error.prototype.constructor.apply(this, arguments), t = 0; o.length > t; t++) this[o[t]] = e[o[t]]
    }, e.Exception.prototype = Error(), e.SafeString = function(e) {
        this.string = e
    }, e.SafeString.prototype.toString = function() {
        return "" + this.string
    };
    var a = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "`": "&#x60;"
        },
        s = /[&<>"'`]/g,
        u = /[&<>"'`]/,
        l = function(e) {
            return a[e] || "&amp;"
        };
    e.Utils = {
        extend: function(e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        },
        escapeExpression: function(t) {
            return t instanceof e.SafeString ? "" + t : null == t || t === !1 ? "" : (t = "" + t, u.test(t) ? t.replace(s, l) : t)
        },
        isEmpty: function(e) {
            return e || 0 === e ? "[object Array]" === n.call(e) && 0 === e.length ? !0 : !1 : !0
        }
    }, e.VM = {
        template: function(t) {
            var n = {
                escapeExpression: e.Utils.escapeExpression,
                invokePartial: e.VM.invokePartial,
                programs: [],
                program: function(t, n, r) {
                    var i = this.programs[t];
                    return r ? i = e.VM.program(t, n, r) : i || (i = this.programs[t] = e.VM.program(t, n)), i
                },
                merge: function(t, n) {
                    var r = t || n;
                    return t && n && (r = {}, e.Utils.extend(r, n), e.Utils.extend(r, t)), r
                },
                programWithDepth: e.VM.programWithDepth,
                noop: e.VM.noop,
                compilerInfo: null
            };
            return function(r, i) {
                i = i || {};
                var o = t.call(n, e, r, i.helpers, i.partials, i.data),
                    a = n.compilerInfo || [],
                    s = a[0] || 1,
                    u = e.COMPILER_REVISION;
                if (s !== u) {
                    if (u > s) {
                        var l = e.REVISION_CHANGES[u],
                            c = e.REVISION_CHANGES[s];
                        throw "Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + l + ") or downgrade your runtime to an older version (" + c + ")."
                    }
                    throw "Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + a[1] + ")."
                }
                return o
            }
        },
        programWithDepth: function(e, t, n) {
            var r = Array.prototype.slice.call(arguments, 3),
                i = function(e, i) {
                    return i = i || {}, t.apply(this, [e, i.data || n].concat(r))
                };
            return i.program = e, i.depth = r.length, i
        },
        program: function(e, t, n) {
            var r = function(e, r) {
                return r = r || {}, t(e, r.data || n)
            };
            return r.program = e, r.depth = 0, r
        },
        noop: function() {
            return ""
        },
        invokePartial: function(n, r, i, o, a, s) {
            var u = {
                helpers: o,
                partials: a,
                data: s
            };
            if (n === t) throw new e.Exception("The partial " + r + " could not be found");
            if (n instanceof Function) return n(i, u);
            if (e.compile) return a[r] = e.compile(n, {
                data: s !== t
            }), a[r](i, u);
            throw new e.Exception("The partial " + r + " could not be compiled when running in runtime-only mode")
        }
    }, e.template = e.VM.template
})(Handlebars);
