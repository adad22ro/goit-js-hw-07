!function(e) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = e();
    else if ("function" == typeof define && define.amd) define([], e);
    else ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).basicLightbox = e();
}(function() {
    return (function e1(n, t, o) {
        function r(c, u) {
            if (!t[c]) {
                if (!n[c]) {
                    var s = "function" == typeof require && undefined;
                    if (!u && s) return s(c, !0);
                    if (i) return i(c, !0);
                    var a = new Error("Cannot find module '" + c + "'");
                    throw a.code = "MODULE_NOT_FOUND", a;
                }
                var l = t[c] = {
                    exports: {}
                };
                n[c][0].call(l.exports, function(e) {
                    return r(n[c][1][e] || e);
                }, l, l.exports, e1, n, t, o);
            }
            return t[c].exports;
        }
        for(var i = "function" == typeof require && undefined, c1 = 0; c1 < o.length; c1++)r(o[c1]);
        return r;
    })({
        1: [
            function(e2, n1, t1) {
                "use strict";
                Object.defineProperty(t1, "__esModule", {
                    value: !0
                }), t1.create = t1.visible = void 0;
                var o = function(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], t = document.createElement("div");
                    return t.innerHTML = e.trim(), !0 === n ? t.children : t.firstChild;
                }, r = function(e, n) {
                    var t = e.children;
                    return 1 === t.length && t[0].tagName === n;
                }, i1 = function(e) {
                    return null != (e = e || document.querySelector(".basicLightbox")) && !0 === e.ownerDocument.body.contains(e);
                };
                t1.visible = i1;
                t1.create = function(e3, n2) {
                    var t2 = function(e4, n) {
                        var t = o('\n		<div class="basicLightbox '.concat(n.className, '">\n			<div class="basicLightbox__placeholder" role="dialog"></div>\n		</div>\n	')), i = t.querySelector(".basicLightbox__placeholder");
                        e4.forEach(function(e) {
                            return i.appendChild(e);
                        });
                        var c = r(i, "IMG"), u = r(i, "VIDEO"), s = r(i, "IFRAME");
                        return !0 === c && t.classList.add("basicLightbox--img"), !0 === u && t.classList.add("basicLightbox--video"), !0 === s && t.classList.add("basicLightbox--iframe"), t;
                    }(e3 = function(e) {
                        var n = "string" == typeof e, t = e instanceof HTMLElement == 1;
                        if (!1 === n && !1 === t) throw new Error("Content must be a DOM element/node or string");
                        return !0 === n ? Array.from(o(e, !0)) : "TEMPLATE" === e.tagName ? [
                            e.content.cloneNode(!0)
                        ] : Array.from(e.children);
                    }(e3), n2 = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        if (null == (e = Object.assign({}, e)).closable && (e.closable = !0), null == e.className && (e.className = ""), null == e.onShow && (e.onShow = function() {}), null == e.onClose && (e.onClose = function() {}), "boolean" != typeof e.closable) throw new Error("Property `closable` must be a boolean");
                        if ("string" != typeof e.className) throw new Error("Property `className` must be a string");
                        if ("function" != typeof e.onShow) throw new Error("Property `onShow` must be a function");
                        if ("function" != typeof e.onClose) throw new Error("Property `onClose` must be a function");
                        return e;
                    }(n2)), c2 = function(e5) {
                        return !1 !== n2.onClose(u1) && function(e, n) {
                            return e.classList.remove("basicLightbox--visible"), setTimeout(function() {
                                return !1 === i1(e) || e.parentElement.removeChild(e), n();
                            }, 410), !0;
                        }(t2, function() {
                            if ("function" == typeof e5) return e5(u1);
                        });
                    };
                    !0 === n2.closable && t2.addEventListener("click", function(e) {
                        e.target === t2 && c2();
                    });
                    var u1 = {
                        element: function() {
                            return t2;
                        },
                        visible: function() {
                            return i1(t2);
                        },
                        show: function(e6) {
                            return !1 !== n2.onShow(u1) && function(e, n) {
                                return document.body.appendChild(e), setTimeout(function() {
                                    requestAnimationFrame(function() {
                                        return e.classList.add("basicLightbox--visible"), n();
                                    });
                                }, 10), !0;
                            }(t2, function() {
                                if ("function" == typeof e6) return e6(u1);
                            });
                        },
                        close: c2
                    };
                    return u1;
                };
            },
            {}
        ]
    }, {}, [
        1
    ])(1);
});

//# sourceMappingURL=01-gallery.e85ec6f8.js.map
