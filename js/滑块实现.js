!function (e) {
    function o() {
        var e = document.getElementsByTagName("script")
            , o = e[e.length - 1].src.split("?")[0];
        return o.split("/").length > 0 ? o.split("/").slice(0, -1).join("/") + "/" : ""
    }
    function t(e, o, t) {
        for (var r = 0; r < o.length; r++)
            t(e, o[r])
    }
    var r = !1
        , i = !1
        , n = 5e3
        , s = 2e3
        , l = 0
        , c = e
        , d = o()
        , u = ["ms", "moz", "webkit", "o"]
        , h = window.requestAnimationFrame || !1
        , p = window.cancelAnimationFrame || !1;
    if (!h)
        for (var m in u) {
            var f = u[m];
            h || (h = window[f + "RequestAnimationFrame"]),
                p || (p = window[f + "CancelAnimationFrame"] || window[f + "CancelRequestAnimationFrame"])
        }
    var g = window.MutationObserver || window.WebKitMutationObserver || !1
        , w = {
            zindex: "auto",
            cursoropacitymin: 0,
            cursoropacitymax: 1,
            cursorcolor: "#424242",
            cursorwidth: "5px",
            cursorborder: "1px solid #fff",
            cursorborderradius: "5px",
            scrollspeed: 60,
            mousescrollstep: 24,
            touchbehavior: !1,
            hwacceleration: !0,
            usetransition: !0,
            boxzoom: !1,
            dblclickzoom: !0,
            gesturezoom: !0,
            grabcursorenabled: !0,
            autohidemode: !0,
            background: "",
            iframeautoresize: !0,
            cursorminheight: 32,
            preservenativescrolling: !0,
            railoffset: !1,
            bouncescroll: !0,
            spacebarenabled: !0,
            railpadding: {
                top: 0,
                right: 0,
                left: 0,
                bottom: 0
            },
            disableoutline: !0,
            horizrailenabled: !0,
            railalign: "right",
            railvalign: "bottom",
            enabletranslate3d: !0,
            enablemousewheel: !0,
            enablekeyboard: !0,
            smoothscroll: !0,
            sensitiverail: !0,
            enablemouselockapi: !0,
            cursorfixedheight: !1,
            directionlockdeadzone: 6,
            hidecursordelay: 400,
            nativeparentscrolling: !0,
            enablescrollonselection: !0,
            overflowx: !0,
            overflowy: !0,
            cursordragspeed: .3,
            rtlmode: !1,
            cursordragontouch: !1,
            oneaxismousemode: "auto"
        }
        , v = !1
        , y = function () {
            function e() {
                var e = ["-moz-grab", "-webkit-grab", "grab"];
                (t.ischrome && !t.ischrome22 || t.isie) && (e = []);
                for (var r = 0; r < e.length; r++) {
                    var i = e[r];
                    if (o.style.cursor = i,
                        o.style.cursor == i)
                        return i
                }
                return "url(http://www.google.com/intl/en_ALL/mapfiles/openhand.cur),n-resize"
            }
            if (v)
                return v;
            var o = document.createElement("DIV")
                , t = {};
            t.haspointerlock = "pointerLockElement" in document || "mozPointerLockElement" in document || "webkitPointerLockElement" in document,
                t.isopera = "opera" in window,
                t.isopera12 = t.isopera && "getUserMedia" in navigator,
                t.isoperamini = "[object OperaMini]" === Object.prototype.toString.call(window.operamini),
                t.isie = "all" in document && "attachEvent" in o && !t.isopera,
                t.isieold = t.isie && !("msInterpolationMode" in o.style),
                t.isie7 = !(!t.isie || t.isieold || "documentMode" in document && 7 != document.documentMode),
                t.isie8 = t.isie && "documentMode" in document && 8 == document.documentMode,
                t.isie9 = t.isie && "performance" in window && document.documentMode >= 9,
                t.isie10 = t.isie && "performance" in window && document.documentMode >= 10,
                t.isie9mobile = /iemobile.9/i.test(navigator.userAgent),
                t.isie9mobile && (t.isie9 = !1),
                t.isie7mobile = !t.isie9mobile && t.isie7 && /iemobile/i.test(navigator.userAgent),
                t.ismozilla = "MozAppearance" in o.style,
                t.iswebkit = "WebkitAppearance" in o.style,
                t.ischrome = "chrome" in window,
                t.ischrome22 = t.ischrome && t.haspointerlock,
                t.ischrome26 = t.ischrome && "transition" in o.style,
                t.cantouch = "ontouchstart" in document.documentElement || "ontouchstart" in window,
                t.hasmstouch = window.navigator.msPointerEnabled || !1,
                t.ismac = /^mac$/i.test(navigator.platform),
                t.isios = t.cantouch && /iphone|ipad|ipod/i.test(navigator.platform),
                t.isios4 = t.isios && !("seal" in Object),
                t.isandroid = /android/i.test(navigator.userAgent),
                t.trstyle = !1,
                t.hastransform = !1,
                t.hastranslate3d = !1,
                t.transitionstyle = !1,
                t.hastransition = !1,
                t.transitionend = !1;
            for (var r = ["transform", "msTransform", "webkitTransform", "MozTransform", "OTransform"], i = 0; i < r.length; i++)
                if ("undefined" != typeof o.style[r[i]]) {
                    t.trstyle = r[i];
                    break
                }
            t.hastransform = 0 != t.trstyle,
                t.hastransform && (o.style[t.trstyle] = "translate3d(1px,2px,3px)",
                    t.hastranslate3d = /translate3d/.test(o.style[t.trstyle])),
                t.transitionstyle = !1,
                t.prefixstyle = "",
                t.transitionend = !1;
            for (var r = ["transition", "webkitTransition", "MozTransition", "OTransition", "OTransition", "msTransition", "KhtmlTransition"], n = ["", "-webkit-", "-moz-", "-o-", "-o", "-ms-", "-khtml-"], s = ["transitionend", "webkitTransitionEnd", "transitionend", "otransitionend", "oTransitionEnd", "msTransitionEnd", "KhtmlTransitionEnd"], i = 0; i < r.length; i++)
                if (r[i] in o.style) {
                    t.transitionstyle = r[i],
                        t.prefixstyle = n[i],
                        t.transitionend = s[i];
                    break
                }
            return t.ischrome26 && (t.prefixstyle = n[1]),
                t.hastransition = t.transitionstyle,
                t.cursorgrabvalue = e(),
                t.hasmousecapture = "setCapture" in o,
                t.hasMutationObserver = g !== !1,
                o = null,
                v = t,
                t
        }
        , b = function (e, o) {
            function t() {
                var e = v.doc.css(S.trstyle);
                return e && "matrix" == e.substr(0, 6) ? e.replace(/^.*\((.*)\)$/g, "$1").replace(/px/g, "").split(/, +/) : !1
            }
            function a() {
                var e = v.win;
                if ("zIndex" in e)
                    return e.zIndex();
                for (; e.length > 0;) {
                    if (9 == e[0].nodeType)
                        return !1;
                    var o = e.css("zIndex");
                    if (!isNaN(o) && 0 != o)
                        return parseInt(o);
                    e = e.parent()
                }
                return !1
            }
            function u(e, o, t) {
                var r = e.css(o)
                    , i = parseFloat(r);
                if (isNaN(i)) {
                    i = z[r] || 0;
                    var n = 3 == i ? t ? v.win.outerHeight() - v.win.innerHeight() : v.win.outerWidth() - v.win.innerWidth() : 1;
                    return v.isie8 && i && (i += 1),
                        n ? i : 0
                }
                return i
            }
            function m(e, o, t, r) {
                v._bind(e, o, function (r) {
                    var r = r ? r : window.event
                        , i = {
                            original: r,
                            target: r.target || r.srcElement,
                            type: "wheel",
                            deltaMode: "MozMousePixelScroll" == r.type ? 0 : 1,
                            deltaX: 0,
                            deltaZ: 0,
                            preventDefault: function () {
                                return r.preventDefault ? r.preventDefault() : r.returnValue = !1,
                                    !1
                            },
                            stopImmediatePropagation: function () {
                                r.stopImmediatePropagation ? r.stopImmediatePropagation() : r.cancelBubble = !0
                            }
                        };
                    return "mousewheel" == o ? (i.deltaY = -1 / 40 * r.wheelDelta,
                        r.wheelDeltaX && (i.deltaX = -1 / 40 * r.wheelDeltaX)) : i.deltaY = r.detail,
                        t.call(e, i)
                }, r)
            }
            function f(e, o, t) {
                var r, i;
                if (0 == e.deltaMode ? (r = -Math.floor(e.deltaX * (v.opt.mousescrollstep / 54)),
                    i = -Math.floor(e.deltaY * (v.opt.mousescrollstep / 54))) : 1 == e.deltaMode && (r = -Math.floor(e.deltaX * v.opt.mousescrollstep),
                        i = -Math.floor(e.deltaY * v.opt.mousescrollstep)),
                    o && v.opt.oneaxismousemode && 0 == r && i && (r = i,
                        i = 0),
                    r && (v.scrollmom && v.scrollmom.stop(),
                        v.lastdeltax += r,
                        v.debounced("mousewheelx", function () {
                            var e = v.lastdeltax;
                            v.lastdeltax = 0,
                                v.rail.drag || v.doScrollLeftBy(e)
                        }, 120)),
                    i) {
                    if (v.opt.nativeparentscrolling && t && !v.ispage && !v.zoomactive)
                        if (0 > i) {
                            if (v.getScrollTop() >= v.page.maxh)
                                return !0
                        } else if (v.getScrollTop() <= 0)
                            return !0;
                    v.scrollmom && v.scrollmom.stop(),
                        v.lastdeltay += i,
                        v.debounced("mousewheely", function () {
                            var e = v.lastdeltay;
                            v.lastdeltay = 0,
                                v.rail.drag || v.doScrollBy(e)
                        }, 120)
                }
                return e.stopImmediatePropagation(),
                    e.preventDefault()
            }
            var v = this;
            if (this.version = "3.5.0 BETA5",
                this.name = "nicescroll",
                this.me = o,
                this.opt = {
                    doc: c("body"),
                    win: !1
                },
                c.extend(this.opt, w),
                this.opt.snapbackspeed = 80,
                e)
                for (var b in v.opt)
                    "undefined" != typeof e[b] && (v.opt[b] = e[b]);
            this.doc = v.opt.doc,
                this.iddoc = this.doc && this.doc[0] ? this.doc[0].id || "" : "",
                this.ispage = /BODY|HTML/.test(v.opt.win ? v.opt.win[0].nodeName : this.doc[0].nodeName),
                this.haswrapper = v.opt.win !== !1,
                this.win = v.opt.win || (this.ispage ? c(window) : this.doc),
                this.docscroll = this.ispage && !this.haswrapper ? c(window) : this.win,
                this.body = c("body"),
                this.viewport = !1,
                this.isfixed = !1,
                this.iframe = !1,
                this.isiframe = "IFRAME" == this.doc[0].nodeName && "IFRAME" == this.win[0].nodeName,
                this.istextarea = "TEXTAREA" == this.win[0].nodeName,
                this.forcescreen = !1,
                this.canshowonmouseevent = "scroll" != v.opt.autohidemode,
                this.onmousedown = !1,
                this.onmouseup = !1,
                this.onmousemove = !1,
                this.onmousewheel = !1,
                this.onkeypress = !1,
                this.ongesturezoom = !1,
                this.onclick = !1,
                this.onscrollstart = !1,
                this.onscrollend = !1,
                this.onscrollcancel = !1,
                this.onzoomin = !1,
                this.onzoomout = !1,
                this.view = !1,
                this.page = !1,
                this.scroll = {
                    x: 0,
                    y: 0
                },
                this.scrollratio = {
                    x: 0,
                    y: 0
                },
                this.cursorheight = 20,
                this.scrollvaluemax = 0,
                this.checkrtlmode = !1,
                this.scrollrunning = !1,
                this.scrollmom = !1,
                this.observer = !1,
                this.observerremover = !1;
            do
                this.id = "ascrail" + s++;
            while (document.getElementById(this.id));
            this.rail = !1,
                this.cursor = !1,
                this.cursorfreezed = !1,
                this.selectiondrag = !1,
                this.zoom = !1,
                this.zoomactive = !1,
                this.hasfocus = !1,
                this.hasmousefocus = !1,
                this.visibility = !0,
                this.locked = !1,
                this.hidden = !1,
                this.cursoractive = !0,
                this.overflowx = v.opt.overflowx,
                this.overflowy = v.opt.overflowy,
                this.nativescrollingarea = !1,
                this.checkarea = 0,
                this.events = [],
                this.saved = {},
                this.delaylist = {},
                this.synclist = {},
                this.lastdeltax = 0,
                this.lastdeltay = 0,
                this.detected = y();
            var S = c.extend({}, this.detected);
            this.canhwscroll = S.hastransform && v.opt.hwacceleration,
                this.ishwscroll = this.canhwscroll && v.haswrapper,
                this.istouchcapable = !1,
                S.cantouch && S.ischrome && !S.isios && !S.isandroid && (this.istouchcapable = !0,
                    S.cantouch = !1),
                S.cantouch && S.ismozilla && !S.isios && !S.isandroid && (this.istouchcapable = !0,
                    S.cantouch = !1),
                v.opt.enablemouselockapi || (S.hasmousecapture = !1,
                    S.haspointerlock = !1),
                this.delayed = function (e, o, t, r) {
                    var i = v.delaylist[e]
                        , n = (new Date).getTime();
                    return !r && i && i.tt ? !1 : (i && i.tt && clearTimeout(i.tt),
                        i && i.last + t > n && !i.tt ? v.delaylist[e] = {
                            last: n + t,
                            tt: setTimeout(function () {
                                v.delaylist[e].tt = 0,
                                    o.call()
                            }, t)
                        } : i && i.tt || (v.delaylist[e] = {
                            last: n,
                            tt: 0
                        },
                            setTimeout(function () {
                                o.call()
                            }, 0)),
                        void 0)
                }
                ,
                this.debounced = function (e, o, t) {
                    var r = v.delaylist[e];
                    (new Date).getTime(),
                        v.delaylist[e] = o,
                        r || setTimeout(function () {
                            var o = v.delaylist[e];
                            v.delaylist[e] = !1,
                                o.call()
                        }, t)
                }
                ,
                this.synched = function (e, o) {
                    function t() {
                        v.onsync || (h(function () {
                            v.onsync = !1;
                            for (e in v.synclist) {
                                var o = v.synclist[e];
                                o && o.call(v),
                                    v.synclist[e] = !1
                            }
                        }),
                            v.onsync = !0)
                    }
                    return v.synclist[e] = o,
                        t(),
                        e
                }
                ,
                this.unsynched = function (e) {
                    v.synclist[e] && (v.synclist[e] = !1)
                }
                ,
                this.css = function (e, o) {
                    for (var t in o)
                        v.saved.css.push([e, t, e.css(t)]),
                            e.css(t, o[t])
                }
                ,
                this.scrollTop = function (e) {
                    return "undefined" == typeof e ? v.getScrollTop() : v.setScrollTop(e)
                }
                ,
                this.scrollLeft = function (e) {
                    return "undefined" == typeof e ? v.getScrollLeft() : v.setScrollLeft(e)
                }
                ,
                BezierClass = function (e, o, t, r, i, n, s) {
                    this.st = e,
                        this.ed = o,
                        this.spd = t,
                        this.p1 = r || 0,
                        this.p2 = i || 1,
                        this.p3 = n || 0,
                        this.p4 = s || 1,
                        this.ts = (new Date).getTime(),
                        this.df = this.ed - this.st
                }
                ,
                BezierClass.prototype = {
                    B2: function (e) {
                        return 3 * e * e * (1 - e)
                    },
                    B3: function (e) {
                        return 3 * e * (1 - e) * (1 - e)
                    },
                    B4: function (e) {
                        return (1 - e) * (1 - e) * (1 - e)
                    },
                    getNow: function () {
                        var e = (new Date).getTime()
                            , o = 1 - (e - this.ts) / this.spd
                            , t = this.B2(o) + this.B3(o) + this.B4(o);
                        return 0 > o ? this.ed : this.st + Math.round(this.df * t)
                    },
                    update: function (e, o) {
                        return this.st = this.getNow(),
                            this.ed = e,
                            this.spd = o,
                            this.ts = (new Date).getTime(),
                            this.df = this.ed - this.st,
                            this
                    }
                },
                this.ishwscroll ? (this.doc.translate = {
                    x: 0,
                    y: 0,
                    tx: "0px",
                    ty: "0px"
                },
                    S.hastranslate3d && S.isios && this.doc.css("-webkit-backface-visibility", "hidden"),
                    this.getScrollTop = function (e) {
                        if (!e) {
                            var o = t();
                            if (o)
                                return 16 == o.length ? -o[13] : -o[5];
                            if (v.timerscroll && v.timerscroll.bz)
                                return v.timerscroll.bz.getNow()
                        }
                        return v.doc.translate.y
                    }
                    ,
                    this.getScrollLeft = function (e) {
                        if (!e) {
                            var o = t();
                            if (o)
                                return 16 == o.length ? -o[12] : -o[4];
                            if (v.timerscroll && v.timerscroll.bh)
                                return v.timerscroll.bh.getNow()
                        }
                        return v.doc.translate.x
                    }
                    ,
                    this.notifyScrollEvent = document.createEvent ? function (e) {
                        var o = document.createEvent("UIEvents");
                        o.initUIEvent("scroll", !1, !0, window, 1),
                            e.dispatchEvent(o)
                    }
                        : document.fireEvent ? function (e) {
                            var o = document.createEventObject();
                            e.fireEvent("onscroll"),
                                o.cancelBubble = !0
                        }
                            : function () { }
                    ,
                    S.hastranslate3d && v.opt.enabletranslate3d ? (this.setScrollTop = function (e, o) {
                        v.doc.translate.y = e,
                            v.doc.translate.ty = -1 * e + "px",
                            v.doc.css(S.trstyle, "translate3d(" + v.doc.translate.tx + "," + v.doc.translate.ty + ",0px)"),
                            o || v.notifyScrollEvent(v.win[0])
                    }
                        ,
                        this.setScrollLeft = function (e, o) {
                            v.doc.translate.x = e,
                                v.doc.translate.tx = -1 * e + "px",
                                v.doc.css(S.trstyle, "translate3d(" + v.doc.translate.tx + "," + v.doc.translate.ty + ",0px)"),
                                o || v.notifyScrollEvent(v.win[0])
                        }
                    ) : (this.setScrollTop = function (e, o) {
                        v.doc.translate.y = e,
                            v.doc.translate.ty = -1 * e + "px",
                            v.doc.css(S.trstyle, "translate(" + v.doc.translate.tx + "," + v.doc.translate.ty + ")"),
                            o || v.notifyScrollEvent(v.win[0])
                    }
                        ,
                        this.setScrollLeft = function (e, o) {
                            v.doc.translate.x = e,
                                v.doc.translate.tx = -1 * e + "px",
                                v.doc.css(S.trstyle, "translate(" + v.doc.translate.tx + "," + v.doc.translate.ty + ")"),
                                o || v.notifyScrollEvent(v.win[0])
                        }
                    )) : (this.getScrollTop = function () {
                        return v.docscroll.scrollTop()
                    }
                        ,
                        this.setScrollTop = function (e) {
                            return v.docscroll.scrollTop(e)
                        }
                        ,
                        this.getScrollLeft = function () {
                            return v.docscroll.scrollLeft()
                        }
                        ,
                        this.setScrollLeft = function (e) {
                            return v.docscroll.scrollLeft(e)
                        }
                ),
                this.getTarget = function (e) {
                    return e ? e.target ? e.target : e.srcElement ? e.srcElement : !1 : !1
                }
                ,
                this.hasParent = function (e, o) {
                    if (!e)
                        return !1;
                    for (var t = e.target || e.srcElement || e || !1; t && t.id != o;)
                        t = t.parentNode || !1;
                    return t !== !1
                }
                ;
            var z = {
                thin: 1,
                medium: 3,
                thick: 5
            };
            this.getOffset = function () {
                if (v.isfixed)
                    return {
                        top: parseFloat(v.win.css("top")),
                        left: parseFloat(v.win.css("left"))
                    };
                if (!v.viewport)
                    return v.win.offset();
                var e = v.win.offset()
                    , o = v.viewport.offset();
                return {
                    top: e.top - o.top + v.viewport.scrollTop(),
                    left: e.left - o.left + v.viewport.scrollLeft()
                }
            }
                ,
                this.updateScrollBar = function (e) {
                    if (v.ishwscroll)
                        v.rail.css({
                            height: v.win.innerHeight()
                        }),
                            v.railh && v.railh.css({
                                width: v.win.innerWidth()
                            });
                    else {
                        var o = v.getOffset()
                            , t = {
                                top: o.top,
                                left: o.left
                            };
                        t.top += u(v.win, "border-top-width", !0),
                            (v.win.outerWidth() - v.win.innerWidth()) / 2,
                            t.left += v.rail.align ? v.win.outerWidth() - u(v.win, "border-right-width") - v.rail.width : u(v.win, "border-left-width");
                        var r = v.opt.railoffset;
                        if (r && (r.top && (t.top += r.top),
                            v.rail.align && r.left && (t.left += r.left)),
                            v.locked || v.rail.css({
                                top: t.top,
                                left: t.left,
                                height: e ? e.h : v.win.innerHeight()
                            }),
                            v.zoom && v.zoom.css({
                                top: t.top + 1,
                                left: 1 == v.rail.align ? t.left - 20 : t.left + v.rail.width + 4
                            }),
                            v.railh && !v.locked) {
                            var t = {
                                top: o.top,
                                left: o.left
                            }
                                , i = v.railh.align ? t.top + u(v.win, "border-top-width", !0) + v.win.innerHeight() - v.railh.height : t.top + u(v.win, "border-top-width", !0)
                                , n = t.left + u(v.win, "border-left-width");
                            v.railh.css({
                                top: i,
                                left: n,
                                width: v.railh.width
                            })
                        }
                    }
                }
                ,
                this.doRailClick = function (e, o, t) {
                    var r, i, n, s;
                    v.locked || (v.cancelEvent(e),
                        o ? (r = t ? v.doScrollLeft : v.doScrollTop,
                            n = t ? (e.pageX - v.railh.offset().left - v.cursorwidth / 2) * v.scrollratio.x : (e.pageY - v.rail.offset().top - v.cursorheight / 2) * v.scrollratio.y,
                            r(n)) : (r = t ? v.doScrollLeftBy : v.doScrollBy,
                                n = t ? v.scroll.x : v.scroll.y,
                                s = t ? e.pageX - v.railh.offset().left : e.pageY - v.rail.offset().top,
                                i = t ? v.view.w : v.view.h,
                                n >= s ? r(i) : r(-i)))
                }
                ,
                v.hasanimationframe = h,
                v.hascancelanimationframe = p,
                v.hasanimationframe ? v.hascancelanimationframe || (p = function () {
                    v.cancelAnimationFrame = !0
                }
                ) : (h = function (e) {
                    return setTimeout(e, 15 - Math.floor(+new Date / 1e3) % 16)
                }
                    ,
                    p = clearInterval),
                this.init = function () {
                    function e(o) {
                        if (v.selectiondrag) {
                            if (o) {
                                var t = v.win.outerHeight()
                                    , r = o.pageY - v.selectiondrag.top;
                                r > 0 && t > r && (r = 0),
                                    r >= t && (r -= t),
                                    v.selectiondrag.df = r
                            }
                            if (0 != v.selectiondrag.df) {
                                var i = 2 * -Math.floor(v.selectiondrag.df / 6);
                                v.doScrollBy(i),
                                    v.debounced("doselectionscroll", function () {
                                        e()
                                    }, 50)
                            }
                        }
                    }
                    function o() {
                        v.iframexd = !1;
                        try {
                            var e = "contentDocument" in this ? this.contentDocument : this.contentWindow.document;
                            e.domain
                        } catch (o) {
                            v.iframexd = !0,
                                e = !1
                        }
                        if (v.iframexd)
                            return "console" in window && console.log("NiceScroll error: policy restriced iframe"),
                                !0;
                        if (v.forcescreen = !0,
                            v.isiframe && (v.iframe = {
                                doc: c(e),
                                html: v.doc.contents().find("html")[0],
                                body: v.doc.contents().find("body")[0]
                            },
                                v.getContentSize = function () {
                                    return {
                                        w: Math.max(v.iframe.html.scrollWidth, v.iframe.body.scrollWidth),
                                        h: Math.max(v.iframe.html.scrollHeight, v.iframe.body.scrollHeight)
                                    }
                                }
                                ,
                                v.docscroll = c(v.iframe.body)),
                            !S.isios && v.opt.iframeautoresize && !v.isiframe) {
                            v.win.scrollTop(0),
                                v.doc.height("");
                            var t = Math.max(e.getElementsByTagName("html")[0].scrollHeight, e.body.scrollHeight);
                            v.doc.height(t)
                        }
                        v.lazyResize(30),
                            S.isie7 && v.css(c(v.iframe.html), {
                                "overflow-y": "hidden"
                            }),
                            v.css(c(v.iframe.body), {
                                "overflow-y": "hidden"
                            }),
                            S.isios && v.haswrapper && (v.css(c(e.body), {
                                "-webkit-transform": "translate3d(0,0,0)"
                            }),
                                console.log(1)),
                            "contentWindow" in this ? v.bind(this.contentWindow, "scroll", v.onscroll) : v.bind(e, "scroll", v.onscroll),
                            v.opt.enablemousewheel && v.bind(e, "mousewheel", v.onmousewheel),
                            v.opt.enablekeyboard && v.bind(e, S.isopera ? "keypress" : "keydown", v.onkeypress),
                            (S.cantouch || v.opt.touchbehavior) && (v.bind(e, "mousedown", v.ontouchstart),
                                v.bind(e, "mousemove", function (e) {
                                    v.ontouchmove(e, !0)
                                }),
                                v.opt.grabcursorenabled && S.cursorgrabvalue && v.css(c(e.body), {
                                    cursor: S.cursorgrabvalue
                                })),
                            v.bind(e, "mouseup", v.ontouchend),
                            v.zoom && (v.opt.dblclickzoom && v.bind(e, "dblclick", v.doZoom),
                                v.ongesturezoom && v.bind(e, "gestureend", v.ongesturezoom))
                    }
                    if (v.saved.css = [],
                        S.isie7mobile)
                        return !0;
                    if (S.isoperamini)
                        return !0;
                    if (S.hasmstouch && v.css(v.ispage ? c("html") : v.win, {
                        "-ms-touch-action": "none"
                    }),
                        v.zindex = "auto",
                        v.zindex = v.ispage || "auto" != v.opt.zindex ? v.opt.zindex : a() || "auto",
                        v.ispage || "auto" == v.zindex || v.zindex > l && (l = v.zindex),
                        v.isie && 0 == v.zindex && "auto" == v.opt.zindex && (v.zindex = "auto"),
                        !v.ispage || !S.cantouch && !S.isieold && !S.isie9mobile) {
                        var t = v.docscroll;
                        v.ispage && (t = v.haswrapper ? v.win : v.doc),
                            S.isie9mobile || v.css(t, {
                                "overflow-y": "hidden"
                            }),
                            v.ispage && S.isie7 && ("BODY" == v.doc[0].nodeName ? v.css(c("html"), {
                                "overflow-y": "hidden"
                            }) : "HTML" == v.doc[0].nodeName && v.css(c("body"), {
                                "overflow-y": "hidden"
                            })),
                            !S.isios || v.ispage || v.haswrapper || v.css(c("body"), {
                                "-webkit-overflow-scrolling": "touch"
                            });
                        var s = c(document.createElement("div"));
                        s.css({
                            position: "relative",
                            top: 0,
                            "float": "right",
                            width: v.opt.cursorwidth,
                            height: "0px",
                            "background-color": v.opt.cursorcolor,
                            border: v.opt.cursorborder,
                            "background-clip": "padding-box",
                            "-webkit-border-radius": v.opt.cursorborderradius,
                            "-moz-border-radius": v.opt.cursorborderradius,
                            "border-radius": v.opt.cursorborderradius,
                            cursor: "pointer"
                        }),
                            s.hborder = parseFloat(s.outerHeight() - s.innerHeight()),
                            v.cursor = s;
                        var u = c(document.createElement("div"));
                        u.attr("id", v.id),
                            u.addClass("nicescroll-rails");
                        var h, p, m = ["left", "right"];
                        for (var f in m)
                            p = m[f],
                                h = v.opt.railpadding[p],
                                h ? u.css("padding-" + p, h + "px") : v.opt.railpadding[p] = 0;
                        u.append(s),
                            u.width = Math.max(parseFloat(v.opt.cursorwidth), s.outerWidth()) + v.opt.railpadding.left + v.opt.railpadding.right,
                            u.css({
                                width: u.width + "px",
                                zIndex: v.zindex,
                                background: v.opt.background,
                                cursor: "default"
                            }),
                            u.visibility = !0,
                            u.scrollable = !0,
                            u.align = "left" == v.opt.railalign ? 0 : 1,
                            v.rail = u,
                            v.rail.drag = !1;
                        var w = !1;
                        if (!v.opt.boxzoom || v.ispage || S.isieold || (w = document.createElement("div"),
                            v.bind(w, "click", v.doZoom),
                            v.zoom = c(w),
                            v.zoom.css({
                                cursor: "pointer",
                                "z-index": v.zindex,
                                backgroundImage: "url(" + d + "zoomico.png)",
                                height: 18,
                                width: 18,
                                backgroundPosition: "0px 0px"
                            }),
                            v.opt.dblclickzoom && v.bind(v.win, "dblclick", v.doZoom),
                            S.cantouch && v.opt.gesturezoom && (v.ongesturezoom = function (e) {
                                return e.scale > 1.5 && v.doZoomIn(e),
                                    e.scale < .8 && v.doZoomOut(e),
                                    v.cancelEvent(e)
                            }
                                ,
                                v.bind(v.win, "gestureend", v.ongesturezoom))),
                            v.railh = !1,
                            v.opt.horizrailenabled) {
                            v.css(t, {
                                "overflow-x": "hidden"
                            });
                            var s = c(document.createElement("div"));
                            s.css({
                                position: "relative",
                                top: 0,
                                height: v.opt.cursorwidth,
                                width: "0px",
                                "background-color": v.opt.cursorcolor,
                                border: v.opt.cursorborder,
                                "background-clip": "padding-box",
                                "-webkit-border-radius": v.opt.cursorborderradius,
                                "-moz-border-radius": v.opt.cursorborderradius,
                                "border-radius": v.opt.cursorborderradius,
                                cursor: "pointer"
                            }),
                                s.wborder = parseFloat(s.outerWidth() - s.innerWidth()),
                                v.cursorh = s;
                            var y = c(document.createElement("div"));
                            y.attr("id", v.id + "-hr"),
                                y.addClass("nicescroll-rails"),
                                y.height = Math.max(parseFloat(v.opt.cursorwidth), s.outerHeight()),
                                y.css({
                                    height: y.height + "px",
                                    zIndex: v.zindex,
                                    background: v.opt.background
                                }),
                                y.append(s),
                                y.visibility = !0,
                                y.scrollable = !0,
                                y.align = "top" == v.opt.railvalign ? 0 : 1,
                                v.railh = y,
                                v.railh.drag = !1
                        }
                        if (v.ispage)
                            u.css({
                                position: "fixed",
                                top: "0px",
                                height: "100%"
                            }),
                                u.align ? u.css({
                                    right: "0px"
                                }) : u.css({
                                    left: "0px"
                                }),
                                v.body.append(u),
                                v.railh && (y.css({
                                    position: "fixed",
                                    left: "0px",
                                    width: "100%"
                                }),
                                    y.align ? y.css({
                                        bottom: "0px"
                                    }) : y.css({
                                        top: "0px"
                                    }),
                                    v.body.append(y));
                        else {
                            if (v.ishwscroll) {
                                "static" == v.win.css("position") && v.css(v.win, {
                                    position: "relative"
                                });
                                var b = "HTML" == v.win[0].nodeName ? v.body : v.win;
                                v.zoom && (v.zoom.css({
                                    position: "absolute",
                                    top: 1,
                                    right: 0,
                                    "margin-right": u.width + 4
                                }),
                                    b.append(v.zoom)),
                                    u.css({
                                        position: "absolute",
                                        top: 0
                                    }),
                                    u.align ? u.css({
                                        right: 0
                                    }) : u.css({
                                        left: 0
                                    }),
                                    b.append(u),
                                    y && (y.css({
                                        position: "absolute",
                                        left: 0,
                                        bottom: 0
                                    }),
                                        y.align ? y.css({
                                            bottom: 0
                                        }) : y.css({
                                            top: 0
                                        }),
                                        b.append(y))
                            } else {
                                v.isfixed = "fixed" == v.win.css("position");
                                var z = v.isfixed ? "fixed" : "absolute";
                                v.isfixed || (v.viewport = v.getViewport(v.win[0])),
                                    v.viewport && (v.body = v.viewport,
                                        0 == /relative|absolute/.test(v.viewport.css("position")) && v.css(v.viewport, {
                                            position: "relative"
                                        })),
                                    u.css({
                                        position: z
                                    }),
                                    v.zoom && v.zoom.css({
                                        position: z
                                    }),
                                    v.updateScrollBar(),
                                    v.body.append(u),
                                    v.zoom && v.body.append(v.zoom),
                                    v.railh && (y.css({
                                        position: z
                                    }),
                                        v.body.append(y))
                            }
                            S.isios && v.css(v.win, {
                                "-webkit-tap-highlight-color": "rgba(0,0,0,0)",
                                "-webkit-touch-callout": "none"
                            }),
                                S.isie && v.opt.disableoutline && v.win.attr("hideFocus", "true"),
                                S.iswebkit && v.opt.disableoutline && v.win.css({
                                    outline: "none"
                                })
                        }
                        if (v.opt.autohidemode === !1 ? (v.autohidedom = !1,
                            v.rail.css({
                                opacity: v.opt.cursoropacitymax
                            }),
                            v.railh && v.railh.css({
                                opacity: v.opt.cursoropacitymax
                            })) : v.opt.autohidemode === !0 ? (v.autohidedom = c().add(v.rail),
                                S.isie8 && (v.autohidedom = v.autohidedom.add(v.cursor)),
                                v.railh && (v.autohidedom = v.autohidedom.add(v.railh)),
                                v.railh && S.isie8 && (v.autohidedom = v.autohidedom.add(v.cursorh))) : "scroll" == v.opt.autohidemode ? (v.autohidedom = c().add(v.rail),
                                    v.railh && (v.autohidedom = v.autohidedom.add(v.railh))) : "cursor" == v.opt.autohidemode ? (v.autohidedom = c().add(v.cursor),
                                        v.railh && (v.autohidedom = v.autohidedom.add(v.cursorh))) : "hidden" == v.opt.autohidemode && (v.autohidedom = !1,
                                            v.hide(),
                                            v.locked = !1),
                            S.isie9mobile) {
                            v.scrollmom = new x(v),
                                v.onmangotouch = function () {
                                    var e = v.getScrollTop()
                                        , o = v.getScrollLeft();
                                    if (e == v.scrollmom.lastscrolly && o == v.scrollmom.lastscrollx)
                                        return !0;
                                    var t = e - v.mangotouch.sy
                                        , r = o - v.mangotouch.sx
                                        , i = Math.round(Math.sqrt(Math.pow(r, 2) + Math.pow(t, 2)));
                                    if (0 != i) {
                                        var n = 0 > t ? -1 : 1
                                            , s = 0 > r ? -1 : 1
                                            , l = +new Date;
                                        if (v.mangotouch.lazy && clearTimeout(v.mangotouch.lazy),
                                            l - v.mangotouch.tm > 80 || v.mangotouch.dry != n || v.mangotouch.drx != s)
                                            v.scrollmom.stop(),
                                                v.scrollmom.reset(o, e),
                                                v.mangotouch.sy = e,
                                                v.mangotouch.ly = e,
                                                v.mangotouch.sx = o,
                                                v.mangotouch.lx = o,
                                                v.mangotouch.dry = n,
                                                v.mangotouch.drx = s,
                                                v.mangotouch.tm = l;
                                        else {
                                            v.scrollmom.stop(),
                                                v.scrollmom.update(v.mangotouch.sx - r, v.mangotouch.sy - t),
                                                l - v.mangotouch.tm,
                                                v.mangotouch.tm = l;
                                            var a = Math.max(Math.abs(v.mangotouch.ly - e), Math.abs(v.mangotouch.lx - o));
                                            v.mangotouch.ly = e,
                                                v.mangotouch.lx = o,
                                                a > 2 && (v.mangotouch.lazy = setTimeout(function () {
                                                    v.mangotouch.lazy = !1,
                                                        v.mangotouch.dry = 0,
                                                        v.mangotouch.drx = 0,
                                                        v.mangotouch.tm = 0,
                                                        v.scrollmom.doMomentum(30)
                                                }, 100))
                                        }
                                    }
                                }
                                ;
                            var T = v.getScrollTop()
                                , k = v.getScrollLeft();
                            v.mangotouch = {
                                sy: T,
                                ly: T,
                                dry: 0,
                                sx: k,
                                lx: k,
                                drx: 0,
                                lazy: !1,
                                tm: 0
                            },
                                v.bind(v.docscroll, "scroll", v.onmangotouch)
                        } else {
                            if (S.cantouch || v.istouchcapable || v.opt.touchbehavior || S.hasmstouch) {
                                v.scrollmom = new x(v),
                                    v.ontouchstart = function (e) {
                                        if (e.pointerType && 2 != e.pointerType)
                                            return !1;
                                        if (!v.locked) {
                                            if (S.hasmstouch)
                                                for (var o = e.target ? e.target : !1; o;) {
                                                    var t = c(o).getNiceScroll();
                                                    if (t.length > 0 && t[0].me == v.me)
                                                        break;
                                                    if (t.length > 0)
                                                        return !1;
                                                    if ("DIV" == o.nodeName && o.id == v.id)
                                                        break;
                                                    o = o.parentNode ? o.parentNode : !1
                                                }
                                            v.cancelScroll();
                                            var o = v.getTarget(e);
                                            if (o) {
                                                var r = /INPUT/i.test(o.nodeName) && /range/i.test(o.type);
                                                if (r)
                                                    return v.stopPropagation(e)
                                            }
                                            if (!("clientX" in e) && "changedTouches" in e && (e.clientX = e.changedTouches[0].clientX,
                                                e.clientY = e.changedTouches[0].clientY),
                                                v.forcescreen) {
                                                var i = e
                                                    , e = {
                                                        original: e.original ? e.original : e
                                                    };
                                                e.clientX = i.screenX,
                                                    e.clientY = i.screenY
                                            }
                                            if (v.rail.drag = {
                                                x: e.clientX,
                                                y: e.clientY,
                                                sx: v.scroll.x,
                                                sy: v.scroll.y,
                                                st: v.getScrollTop(),
                                                sl: v.getScrollLeft(),
                                                pt: 2,
                                                dl: !1
                                            },
                                                v.ispage || !v.opt.directionlockdeadzone)
                                                v.rail.drag.dl = "f";
                                            else {
                                                var n = {
                                                    w: c(window).width(),
                                                    h: c(window).height()
                                                }
                                                    , s = {
                                                        w: Math.max(document.body.scrollWidth, document.documentElement.scrollWidth),
                                                        h: Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
                                                    }
                                                    , l = Math.max(0, s.h - n.h)
                                                    , a = Math.max(0, s.w - n.w);
                                                v.rail.drag.ck = !v.rail.scrollable && v.railh.scrollable ? l > 0 ? "v" : !1 : v.rail.scrollable && !v.railh.scrollable ? a > 0 ? "h" : !1 : !1,
                                                    v.rail.drag.ck || (v.rail.drag.dl = "f")
                                            }
                                            if (v.opt.touchbehavior && v.isiframe && S.isie) {
                                                var d = v.win.position();
                                                v.rail.drag.x += d.left,
                                                    v.rail.drag.y += d.top
                                            }
                                            if (v.hasmoving = !1,
                                                v.lastmouseup = !1,
                                                v.scrollmom.reset(e.clientX, e.clientY),
                                                !S.cantouch && !this.istouchcapable && !S.hasmstouch) {
                                                var u = o ? /INPUT|SELECT|TEXTAREA/i.test(o.nodeName) : !1;
                                                if (!u)
                                                    return !v.ispage && S.hasmousecapture && o.setCapture(),
                                                        v.opt.touchbehavior ? v.cancelEvent(e) : v.stopPropagation(e);
                                                /SUBMIT|CANCEL|BUTTON/i.test(c(o).attr("type")) && (pc = {
                                                    tg: o,
                                                    click: !1
                                                },
                                                    v.preventclick = pc)
                                            }
                                        }
                                    }
                                    ,
                                    v.ontouchend = function (e) {
                                        return e.pointerType && 2 != e.pointerType ? !1 : v.rail.drag && 2 == v.rail.drag.pt && (v.scrollmom.doMomentum(),
                                            v.rail.drag = !1,
                                            v.hasmoving && (v.hasmoving = !1,
                                                v.lastmouseup = !0,
                                                v.hideCursor(),
                                                S.hasmousecapture && document.releaseCapture(),
                                                !S.cantouch)) ? v.cancelEvent(e) : void 0
                                    }
                                    ;
                                var M = v.opt.touchbehavior && v.isiframe && !S.hasmousecapture;
                                v.ontouchmove = function (e, o) {
                                    if (e.pointerType && 2 != e.pointerType)
                                        return !1;
                                    if (v.rail.drag && 2 == v.rail.drag.pt) {
                                        if (S.cantouch && "undefined" == typeof e.original)
                                            return !0;
                                        v.hasmoving = !0,
                                            v.preventclick && !v.preventclick.click && (v.preventclick.click = v.preventclick.tg.onclick || !1,
                                                v.preventclick.tg.onclick = v.onpreventclick);
                                        var t = c.extend({
                                            original: e
                                        }, e);
                                        if (e = t,
                                            "changedTouches" in e && (e.clientX = e.changedTouches[0].clientX,
                                                e.clientY = e.changedTouches[0].clientY),
                                            v.forcescreen) {
                                            var r = e
                                                , e = {
                                                    original: e.original ? e.original : e
                                                };
                                            e.clientX = r.screenX,
                                                e.clientY = r.screenY
                                        }
                                        var i = ofy = 0;
                                        if (M && !o) {
                                            var n = v.win.position();
                                            i = -n.left,
                                                ofy = -n.top
                                        }
                                        var s = e.clientY + ofy
                                            , l = s - v.rail.drag.y
                                            , a = e.clientX + i
                                            , d = a - v.rail.drag.x
                                            , u = v.rail.drag.st - l;
                                        if (v.ishwscroll && v.opt.bouncescroll ? 0 > u ? u = Math.round(u / 2) : u > v.page.maxh && (u = v.page.maxh + Math.round((u - v.page.maxh) / 2)) : (0 > u && (u = 0,
                                            s = 0),
                                            u > v.page.maxh && (u = v.page.maxh,
                                                s = 0)),
                                            v.railh && v.railh.scrollable) {
                                            var h = v.rail.drag.sl - d;
                                            v.ishwscroll && v.opt.bouncescroll ? 0 > h ? h = Math.round(h / 2) : h > v.page.maxw && (h = v.page.maxw + Math.round((h - v.page.maxw) / 2)) : (0 > h && (h = 0,
                                                a = 0),
                                                h > v.page.maxw && (h = v.page.maxw,
                                                    a = 0))
                                        }
                                        var p = !1;
                                        if (v.rail.drag.dl)
                                            p = !0,
                                                "v" == v.rail.drag.dl ? h = v.rail.drag.sl : "h" == v.rail.drag.dl && (u = v.rail.drag.st);
                                        else {
                                            var m = Math.abs(l)
                                                , f = Math.abs(d)
                                                , g = v.opt.directionlockdeadzone;
                                            if ("v" == v.rail.drag.ck) {
                                                if (m > g && .3 * m >= f)
                                                    return v.rail.drag = !1,
                                                        !0;
                                                f > g && (v.rail.drag.dl = "f",
                                                    c("body").scrollTop(c("body").scrollTop()))
                                            } else if ("h" == v.rail.drag.ck) {
                                                if (f > g && .3 * f >= m)
                                                    return v.rail.drag = !1,
                                                        !0;
                                                m > g && (v.rail.drag.dl = "f",
                                                    c("body").scrollLeft(c("body").scrollLeft()))
                                            }
                                        }
                                        if (v.synched("touchmove", function () {
                                            v.rail.drag && 2 == v.rail.drag.pt && (v.prepareTransition && v.prepareTransition(0),
                                                v.rail.scrollable && v.setScrollTop(u),
                                                v.scrollmom.update(a, s),
                                                v.railh && v.railh.scrollable ? (v.setScrollLeft(h),
                                                    v.showCursor(u, h)) : v.showCursor(u),
                                                S.isie10 && document.selection.clear())
                                        }),
                                            S.ischrome && v.istouchcapable && (p = !1),
                                            p)
                                            return v.cancelEvent(e)
                                    }
                                }
                            }
                            v.onmousedown = function (e, o) {
                                if (!v.rail.drag || 1 == v.rail.drag.pt) {
                                    if (v.locked)
                                        return v.cancelEvent(e);
                                    v.cancelScroll(),
                                        v.rail.drag = {
                                            x: e.clientX,
                                            y: e.clientY,
                                            sx: v.scroll.x,
                                            sy: v.scroll.y,
                                            pt: 1,
                                            hr: !!o
                                        };
                                    var t = v.getTarget(e);
                                    return !v.ispage && S.hasmousecapture && t.setCapture(),
                                        v.isiframe && !S.hasmousecapture && (v.saved.csspointerevents = v.doc.css("pointer-events"),
                                            v.css(v.doc, {
                                                "pointer-events": "none"
                                            })),
                                        v.cancelEvent(e)
                                }
                            }
                                ,
                                v.onmouseup = function (e) {
                                    if (v.rail.drag) {
                                        if (S.hasmousecapture && document.releaseCapture(),
                                            v.isiframe && !S.hasmousecapture && v.doc.css("pointer-events", v.saved.csspointerevents),
                                            1 != v.rail.drag.pt)
                                            return;
                                        return v.rail.drag = !1,
                                            v.cancelEvent(e)
                                    }
                                }
                                ,
                                v.onmousemove = function (e) {
                                    if (v.rail.drag) {
                                        if (1 != v.rail.drag.pt)
                                            return;
                                        if (S.ischrome && 0 == e.which)
                                            return v.onmouseup(e);
                                        if (v.cursorfreezed = !0,
                                            v.rail.drag.hr) {
                                            v.scroll.x = v.rail.drag.sx + (e.clientX - v.rail.drag.x),
                                                v.scroll.x < 0 && (v.scroll.x = 0);
                                            var o = v.scrollvaluemaxw;
                                            v.scroll.x > o && (v.scroll.x = o)
                                        } else {
                                            v.scroll.y = v.rail.drag.sy + (e.clientY - v.rail.drag.y),
                                                v.scroll.y < 0 && (v.scroll.y = 0);
                                            var t = v.scrollvaluemax;
                                            v.scroll.y > t && (v.scroll.y = t)
                                        }
                                        return v.synched("mousemove", function () {
                                            v.rail.drag && 1 == v.rail.drag.pt && (v.showCursor(),
                                                v.rail.drag.hr ? v.doScrollLeft(Math.round(v.scroll.x * v.scrollratio.x), v.opt.cursordragspeed) : v.doScrollTop(Math.round(v.scroll.y * v.scrollratio.y), v.opt.cursordragspeed))
                                        }),
                                            v.cancelEvent(e)
                                    }
                                }
                                ,
                                S.cantouch || v.opt.touchbehavior ? (v.onpreventclick = function (e) {
                                    return v.preventclick ? (v.preventclick.tg.onclick = v.preventclick.click,
                                        v.preventclick = !1,
                                        v.cancelEvent(e)) : void 0
                                }
                                    ,
                                    v.bind(v.win, "mousedown", v.ontouchstart),
                                    v.onclick = S.isios ? !1 : function (e) {
                                        return v.lastmouseup ? (v.lastmouseup = !1,
                                            v.cancelEvent(e)) : !0
                                    }
                                    ,
                                    v.opt.grabcursorenabled && S.cursorgrabvalue && (v.css(v.ispage ? v.doc : v.win, {
                                        cursor: S.cursorgrabvalue
                                    }),
                                        v.css(v.rail, {
                                            cursor: S.cursorgrabvalue
                                        }))) : (v.hasTextSelected = "getSelection" in document ? function () {
                                            return document.getSelection().rangeCount > 0
                                        }
                                            : "selection" in document ? function () {
                                                return "None" != document.selection.type
                                            }
                                                : function () {
                                                    return !1
                                                }
                                            ,
                                            v.onselectionstart = function () {
                                                v.ispage || (v.selectiondrag = v.win.offset())
                                            }
                                            ,
                                            v.onselectionend = function () {
                                                v.selectiondrag = !1
                                            }
                                            ,
                                            v.onselectiondrag = function (o) {
                                                v.selectiondrag && v.hasTextSelected() && v.debounced("selectionscroll", function () {
                                                    e(o)
                                                }, 250)
                                            }
                                ),
                                S.hasmstouch && (v.css(v.rail, {
                                    "-ms-touch-action": "none"
                                }),
                                    v.css(v.cursor, {
                                        "-ms-touch-action": "none"
                                    }),
                                    v.bind(v.win, "MSPointerDown", v.ontouchstart),
                                    v.bind(document, "MSPointerUp", v.ontouchend),
                                    v.bind(document, "MSPointerMove", v.ontouchmove),
                                    v.bind(v.cursor, "MSGestureHold", function (e) {
                                        e.preventDefault()
                                    }),
                                    v.bind(v.cursor, "contextmenu", function (e) {
                                        e.preventDefault()
                                    })),
                                this.istouchcapable && (v.bind(v.win, "touchstart", v.ontouchstart),
                                    v.bind(document, "touchend", v.ontouchend),
                                    v.bind(document, "touchcancel", v.ontouchend),
                                    v.bind(document, "touchmove", v.ontouchmove)),
                                v.bind(v.cursor, "mousedown", v.onmousedown),
                                v.bind(v.cursor, "mouseup", v.onmouseup),
                                v.railh && (v.bind(v.cursorh, "mousedown", function (e) {
                                    v.onmousedown(e, !0)
                                }),
                                    v.bind(v.cursorh, "mouseup", function (e) {
                                        return v.rail.drag && 2 == v.rail.drag.pt ? void 0 : (v.rail.drag = !1,
                                            v.hasmoving = !1,
                                            v.hideCursor(),
                                            S.hasmousecapture && document.releaseCapture(),
                                            v.cancelEvent(e))
                                    })),
                                (v.opt.cursordragontouch || !S.cantouch && !v.opt.touchbehavior) && (v.rail.css({
                                    cursor: "default"
                                }),
                                    v.railh && v.railh.css({
                                        cursor: "default"
                                    }),
                                    v.jqbind(v.rail, "mouseenter", function () {
                                        v.canshowonmouseevent && v.showCursor(),
                                            v.rail.active = !0
                                    }),
                                    v.jqbind(v.rail, "mouseleave", function () {
                                        v.rail.active = !1,
                                            v.rail.drag || v.hideCursor()
                                    }),
                                    v.opt.sensitiverail && (v.bind(v.rail, "click", function (e) {
                                        v.doRailClick(e, !1, !1)
                                    }),
                                        v.bind(v.rail, "dblclick", function (e) {
                                            v.doRailClick(e, !0, !1)
                                        }),
                                        v.bind(v.cursor, "click", function (e) {
                                            v.cancelEvent(e)
                                        }),
                                        v.bind(v.cursor, "dblclick", function (e) {
                                            v.cancelEvent(e)
                                        })),
                                    v.railh && (v.jqbind(v.railh, "mouseenter", function () {
                                        v.canshowonmouseevent && v.showCursor(),
                                            v.rail.active = !0
                                    }),
                                        v.jqbind(v.railh, "mouseleave", function () {
                                            v.rail.active = !1,
                                                v.rail.drag || v.hideCursor()
                                        }),
                                        v.opt.sensitiverail && (v.bind(v.railh, "click", function (e) {
                                            v.doRailClick(e, !1, !0)
                                        }),
                                            v.bind(v.railh, "dblclick", function (e) {
                                                v.doRailClick(e, !0, !0)
                                            }),
                                            v.bind(v.cursorh, "click", function (e) {
                                                v.cancelEvent(e)
                                            }),
                                            v.bind(v.cursorh, "dblclick", function (e) {
                                                v.cancelEvent(e)
                                            })))),
                                S.cantouch || v.opt.touchbehavior ? (v.bind(S.hasmousecapture ? v.win : document, "mouseup", v.ontouchend),
                                    v.bind(document, "mousemove", v.ontouchmove),
                                    v.onclick && v.bind(document, "click", v.onclick),
                                    v.opt.cursordragontouch && (v.bind(v.cursor, "mousedown", v.onmousedown),
                                        v.bind(v.cursor, "mousemove", v.onmousemove),
                                        v.cursorh && v.bind(v.cursorh, "mousedown", v.onmousedown),
                                        v.cursorh && v.bind(v.cursorh, "mousemove", v.onmousemove))) : (v.bind(S.hasmousecapture ? v.win : document, "mouseup", v.onmouseup),
                                            v.bind(document, "mousemove", v.onmousemove),
                                            v.onclick && v.bind(document, "click", v.onclick),
                                            !v.ispage && v.opt.enablescrollonselection && (v.bind(v.win[0], "mousedown", v.onselectionstart),
                                                v.bind(document, "mouseup", v.onselectionend),
                                                v.bind(v.cursor, "mouseup", v.onselectionend),
                                                v.cursorh && v.bind(v.cursorh, "mouseup", v.onselectionend),
                                                v.bind(document, "mousemove", v.onselectiondrag)),
                                            v.zoom && (v.jqbind(v.zoom, "mouseenter", function () {
                                                v.canshowonmouseevent && v.showCursor(),
                                                    v.rail.active = !0
                                            }),
                                                v.jqbind(v.zoom, "mouseleave", function () {
                                                    v.rail.active = !1,
                                                        v.rail.drag || v.hideCursor()
                                                }))),
                                v.opt.enablemousewheel && (v.isiframe || v.bind(S.isie && v.ispage ? document : v.win, "mousewheel", v.onmousewheel),
                                    v.bind(v.rail, "mousewheel", v.onmousewheel),
                                    v.railh && v.bind(v.railh, "mousewheel", v.onmousewheelhr)),
                                v.ispage || S.cantouch || /HTML|BODY/.test(v.win[0].nodeName) || (v.win.attr("tabindex") || v.win.attr({
                                    tabindex: n++
                                }),
                                    v.jqbind(v.win, "focus", function (e) {
                                        r = v.getTarget(e).id || !0,
                                            v.hasfocus = !0,
                                            v.canshowonmouseevent && v.noticeCursor()
                                    }),
                                    v.jqbind(v.win, "blur", function () {
                                        r = !1,
                                            v.hasfocus = !1
                                    }),
                                    v.jqbind(v.win, "mouseenter", function (e) {
                                        i = v.getTarget(e).id || !0,
                                            v.hasmousefocus = !0,
                                            v.canshowonmouseevent && v.noticeCursor()
                                    }),
                                    v.jqbind(v.win, "mouseleave", function () {
                                        i = !1,
                                            v.hasmousefocus = !1
                                    }))
                        }
                        if (v.onkeypress = function (e) {
                            if (v.locked && 0 == v.page.maxh)
                                return !0;
                            e = e ? e : window.e;
                            var o = v.getTarget(e);
                            if (o && /INPUT|TEXTAREA|SELECT|OPTION/.test(o.nodeName)) {
                                var t = o.getAttribute("type") || o.type || !1;
                                if (!t || !/submit|button|cancel/i.tp)
                                    return !0
                            }
                            if (v.hasfocus || v.hasmousefocus && !r || v.ispage && !r && !i) {
                                var n = e.keyCode;
                                if (v.locked && 27 != n)
                                    return v.cancelEvent(e);
                                var s = e.ctrlKey || !1
                                    , l = e.shiftKey || !1
                                    , a = !1;
                                switch (n) {
                                    case 38:
                                    case 63233:
                                        v.doScrollBy(72),
                                            a = !0;
                                        break;
                                    case 40:
                                    case 63235:
                                        v.doScrollBy(-72),
                                            a = !0;
                                        break;
                                    case 37:
                                    case 63232:
                                        v.railh && (s ? v.doScrollLeft(0) : v.doScrollLeftBy(72),
                                            a = !0);
                                        break;
                                    case 39:
                                    case 63234:
                                        v.railh && (s ? v.doScrollLeft(v.page.maxw) : v.doScrollLeftBy(-72),
                                            a = !0);
                                        break;
                                    case 33:
                                    case 63276:
                                        v.doScrollBy(v.view.h),
                                            a = !0;
                                        break;
                                    case 34:
                                    case 63277:
                                        v.doScrollBy(-v.view.h),
                                            a = !0;
                                        break;
                                    case 36:
                                    case 63273:
                                        v.railh && s ? v.doScrollPos(0, 0) : v.doScrollTo(0),
                                            a = !0;
                                        break;
                                    case 35:
                                    case 63275:
                                        v.railh && s ? v.doScrollPos(v.page.maxw, v.page.maxh) : v.doScrollTo(v.page.maxh),
                                            a = !0;
                                        break;
                                    case 32:
                                        v.opt.spacebarenabled && (l ? v.doScrollBy(v.view.h) : v.doScrollBy(-v.view.h),
                                            a = !0);
                                        break;
                                    case 27:
                                        v.zoomactive && (v.doZoom(),
                                            a = !0)
                                }
                                if (a)
                                    return v.cancelEvent(e)
                            }
                        }
                            ,
                            v.opt.enablekeyboard && v.bind(document, S.isopera && !S.isopera12 ? "keypress" : "keydown", v.onkeypress),
                            v.bind(window, "resize", v.lazyResize),
                            v.bind(window, "orientationchange", v.lazyResize),
                            v.bind(window, "load", v.lazyResize),
                            S.ischrome && !v.ispage && !v.haswrapper) {
                            var E = v.win.attr("style")
                                , L = parseFloat(v.win.css("width")) + 1;
                            v.win.css("width", L),
                                v.synched("chromefix", function () {
                                    v.win.attr("style", E)
                                })
                        }
                        v.onAttributeChange = function () {
                            v.lazyResize(250)
                        }
                            ,
                            v.ispage || v.haswrapper || (g !== !1 ? (v.observer = new g(function (e) {
                                e.forEach(v.onAttributeChange)
                            }
                            ),
                                v.observer.observe(v.win[0], {
                                    childList: !0,
                                    characterData: !1,
                                    attributes: !0,
                                    subtree: !1
                                }),
                                v.observerremover = new g(function (e) {
                                    e.forEach(function (e) {
                                        if (e.removedNodes.length > 0)
                                            for (var o in e.removedNodes)
                                                if (e.removedNodes[o] == v.win[0])
                                                    return v.remove()
                                    })
                                }
                                ),
                                v.observerremover.observe(v.win[0].parentNode, {
                                    childList: !0,
                                    characterData: !1,
                                    attributes: !1,
                                    subtree: !1
                                })) : (v.bind(v.win, S.isie && !S.isie9 ? "propertychange" : "DOMAttrModified", v.onAttributeChange),
                                    S.isie9 && v.win[0].attachEvent("onpropertychange", v.onAttributeChange),
                                    v.bind(v.win, "DOMNodeRemoved", function (e) {
                                        e.target == v.win[0] && v.remove()
                                    }))),
                            !v.ispage && v.opt.boxzoom && v.bind(window, "resize", v.resizeZoom),
                            v.istextarea && v.bind(v.win, "mouseup", v.lazyResize),
                            v.checkrtlmode = !0,
                            v.lazyResize(30)
                    }
                    "IFRAME" == this.doc[0].nodeName && (this.doc[0].readyState && "complete" == this.doc[0].readyState && setTimeout(function () {
                        o.call(v.doc[0], !1)
                    }, 500),
                        v.bind(this.doc, "load", o))
                }
                ,
                this.showCursor = function (e, o) {
                    v.cursortimeout && (clearTimeout(v.cursortimeout),
                        v.cursortimeout = 0),
                        v.rail && (v.autohidedom && (v.autohidedom.stop().css({
                            opacity: v.opt.cursoropacitymax
                        }),
                            v.cursoractive = !0),
                            v.rail.drag && 1 == v.rail.drag.pt || ("undefined" != typeof e && e !== !1 && (v.scroll.y = Math.round(1 * e / v.scrollratio.y)),
                                "undefined" != typeof o && (v.scroll.x = Math.round(1 * o / v.scrollratio.x))),
                            v.cursor.css({
                                height: v.cursorheight,
                                top: v.scroll.y
                            }),
                            v.cursorh && (!v.rail.align && v.rail.visibility ? v.cursorh.css({
                                width: v.cursorwidth,
                                left: v.scroll.x + v.rail.width
                            }) : v.cursorh.css({
                                width: v.cursorwidth,
                                left: v.scroll.x
                            }),
                                v.cursoractive = !0),
                            v.zoom && v.zoom.stop().css({
                                opacity: v.opt.cursoropacitymax
                            }))
                }
                ,
                this.hideCursor = function (e) {
                    v.cursortimeout || v.rail && v.autohidedom && (v.cursortimeout = setTimeout(function () {
                        v.rail.active && v.showonmouseevent || (v.autohidedom.stop().animate({
                            opacity: v.opt.cursoropacitymin
                        }),
                            v.zoom && v.zoom.stop().animate({
                                opacity: v.opt.cursoropacitymin
                            }),
                            v.cursoractive = !1),
                            v.cursortimeout = 0
                    }, e || v.opt.hidecursordelay))
                }
                ,
                this.noticeCursor = function (e, o, t) {
                    v.showCursor(o, t),
                        v.rail.active || v.hideCursor(e)
                }
                ,
                this.getContentSize = v.ispage ? function () {
                    return {
                        w: Math.max(document.body.scrollWidth, document.documentElement.scrollWidth),
                        h: Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
                    }
                }
                    : v.haswrapper ? function () {
                        return {
                            w: v.doc.outerWidth() + parseInt(v.win.css("paddingLeft")) + parseInt(v.win.css("paddingRight")),
                            h: v.doc.outerHeight() + parseInt(v.win.css("paddingTop")) + parseInt(v.win.css("paddingBottom"))
                        }
                    }
                        : function () {
                            return {
                                w: v.docscroll[0].scrollWidth,
                                h: v.docscroll[0].scrollHeight
                            }
                        }
                ,
                this.onResize = function (e, o) {
                    if (!v.win)
                        return !1;
                    if (!v.haswrapper && !v.ispage) {
                        if ("none" == v.win.css("display"))
                            return v.visibility && v.hideRail().hideRailHr(),
                                !1;
                        v.hidden || v.visibility || v.showRail().showRailHr()
                    }
                    var t = v.page.maxh
                        , r = v.page.maxw
                        , i = {
                            h: v.view.h,
                            w: v.view.w
                        };
                    if (v.view = {
                        w: v.ispage ? v.win.width() : parseInt(v.win[0].clientWidth),
                        h: v.ispage ? v.win.height() : parseInt(v.win[0].clientHeight)
                    },
                        v.page = o ? o : v.getContentSize(),
                        v.page.maxh = Math.max(0, v.page.h - v.view.h),
                        v.page.maxw = Math.max(0, v.page.w - v.view.w),
                        v.page.maxh == t && v.page.maxw == r && v.view.w == i.w) {
                        if (v.ispage)
                            return v;
                        var n = v.win.offset();
                        if (v.lastposition) {
                            var s = v.lastposition;
                            if (s.top == n.top && s.left == n.left)
                                return v
                        }
                        v.lastposition = n
                    }
                    if (0 == v.page.maxh ? (v.hideRail(),
                        v.scrollvaluemax = 0,
                        v.scroll.y = 0,
                        v.scrollratio.y = 0,
                        v.cursorheight = 0,
                        v.setScrollTop(0),
                        v.rail.scrollable = !1) : v.rail.scrollable = !0,
                        0 == v.page.maxw ? (v.hideRailHr(),
                            v.scrollvaluemaxw = 0,
                            v.scroll.x = 0,
                            v.scrollratio.x = 0,
                            v.cursorwidth = 0,
                            v.setScrollLeft(0),
                            v.railh.scrollable = !1) : v.railh.scrollable = !0,
                        v.locked = 0 == v.page.maxh && 0 == v.page.maxw,
                        v.locked)
                        return v.ispage || v.updateScrollBar(v.view),
                            !1;
                    v.hidden || v.visibility ? v.hidden || v.railh.visibility || v.showRailHr() : v.showRail().showRailHr(),
                        v.istextarea && v.win.css("resize") && "none" != v.win.css("resize") && (v.view.h -= 20),
                        v.cursorheight = Math.min(v.view.h, Math.round(v.view.h * (v.view.h / v.page.h))),
                        v.cursorheight = v.opt.cursorfixedheight ? v.opt.cursorfixedheight : Math.max(v.opt.cursorminheight, v.cursorheight),
                        v.cursorwidth = Math.min(v.view.w, Math.round(v.view.w * (v.view.w / v.page.w))),
                        v.cursorwidth = v.opt.cursorfixedheight ? v.opt.cursorfixedheight : Math.max(v.opt.cursorminheight, v.cursorwidth),
                        v.scrollvaluemax = v.view.h - v.cursorheight - v.cursor.hborder,
                        v.railh && (v.railh.width = v.page.maxh > 0 ? v.view.w - v.rail.width : v.view.w,
                            v.scrollvaluemaxw = v.railh.width - v.cursorwidth - v.cursorh.wborder),
                        v.checkrtlmode && v.railh && (v.checkrtlmode = !1,
                            v.opt.rtlmode && 0 == v.scroll.x && v.setScrollLeft(v.page.maxw)),
                        v.ispage || v.updateScrollBar(v.view),
                        v.scrollratio = {
                            x: v.page.maxw / v.scrollvaluemaxw,
                            y: v.page.maxh / v.scrollvaluemax
                        };
                    var l = v.getScrollTop();
                    return l > v.page.maxh ? v.doScrollTop(v.page.maxh) : (v.scroll.y = Math.round(v.getScrollTop() * (1 / v.scrollratio.y)),
                        v.scroll.x = Math.round(v.getScrollLeft() * (1 / v.scrollratio.x)),
                        v.cursoractive && v.noticeCursor()),
                        v.scroll.y && 0 == v.getScrollTop() && v.doScrollTo(Math.floor(v.scroll.y * v.scrollratio.y)),
                        v
                }
                ,
                this.resize = v.onResize,
                this.lazyResize = function (e) {
                    return e = isNaN(e) ? 30 : e,
                        v.delayed("resize", v.resize, e),
                        v
                }
                ,
                this._bind = function (e, o, t, r) {
                    v.events.push({
                        e: e,
                        n: o,
                        f: t,
                        b: r,
                        q: !1
                    }),
                        e.addEventListener ? e.addEventListener(o, t, r || !1) : e.attachEvent ? e.attachEvent("on" + o, t) : e["on" + o] = t
                }
                ,
                this.jqbind = function (e, o, t) {
                    v.events.push({
                        e: e,
                        n: o,
                        f: t,
                        q: !0
                    }),
                        c(e).bind(o, t)
                }
                ,
                this.bind = function (e, o, t, r) {
                    var i = "jquery" in e ? e[0] : e;
                    if ("mousewheel" == o)
                        if ("onwheel" in v.win)
                            v._bind(i, "wheel", t, r || !1);
                        else {
                            var n = "undefined" != typeof document.onmousewheel ? "mousewheel" : "DOMMouseScroll";
                            m(i, n, t, r || !1),
                                "DOMMouseScroll" == n && m(i, "MozMousePixelScroll", t, r || !1)
                        }
                    else if (i.addEventListener) {
                        if (S.cantouch && /mouseup|mousedown|mousemove/.test(o)) {
                            var s = "mousedown" == o ? "touchstart" : "mouseup" == o ? "touchend" : "touchmove";
                            v._bind(i, s, function (e) {
                                if (e.touches) {
                                    if (e.touches.length < 2) {
                                        var o = e.touches.length ? e.touches[0] : e;
                                        o.original = e,
                                            t.call(this, o)
                                    }
                                } else if (e.changedTouches) {
                                    var o = e.changedTouches[0];
                                    o.original = e,
                                        t.call(this, o)
                                }
                            }, r || !1)
                        }
                        v._bind(i, o, t, r || !1),
                            S.cantouch && "mouseup" == o && v._bind(i, "touchcancel", t, r || !1)
                    } else
                        v._bind(i, o, function (e) {
                            return e = e || window.event || !1,
                                e && e.srcElement && (e.target = e.srcElement),
                                "pageY" in e || (e.pageX = e.clientX + document.documentElement.scrollLeft,
                                    e.pageY = e.clientY + document.documentElement.scrollTop),
                                t.call(i, e) === !1 || r === !1 ? v.cancelEvent(e) : !0
                        })
                }
                ,
                this._unbind = function (e, o, t, r) {
                    e.removeEventListener ? e.removeEventListener(o, t, r) : e.detachEvent ? e.detachEvent("on" + o, t) : e["on" + o] = !1
                }
                ,
                this.unbindAll = function () {
                    for (var e = 0; e < v.events.length; e++) {
                        var o = v.events[e];
                        o.q ? o.e.unbind(o.n, o.f) : v._unbind(o.e, o.n, o.f, o.b)
                    }
                }
                ,
                this.cancelEvent = function (e) {
                    var e = e.original ? e.original : e ? e : window.event || !1;
                    return e ? (e.preventDefault && e.preventDefault(),
                        e.stopPropagation && e.stopPropagation(),
                        e.preventManipulation && e.preventManipulation(),
                        e.cancelBubble = !0,
                        e.cancel = !0,
                        e.returnValue = !1,
                        !1) : !1
                }
                ,
                this.stopPropagation = function (e) {
                    var e = e.original ? e.original : e ? e : window.event || !1;
                    return e ? e.stopPropagation ? e.stopPropagation() : (e.cancelBubble && (e.cancelBubble = !0),
                        !1) : !1
                }
                ,
                this.showRail = function () {
                    return 0 == v.page.maxh || !v.ispage && "none" == v.win.css("display") || (v.visibility = !0,
                        v.rail.visibility = !0,
                        v.rail.css("display", "block")),
                        v
                }
                ,
                this.showRailHr = function () {
                    return v.railh ? (0 == v.page.maxw || !v.ispage && "none" == v.win.css("display") || (v.railh.visibility = !0,
                        v.railh.css("display", "block")),
                        v) : v
                }
                ,
                this.hideRail = function () {
                    return v.visibility = !1,
                        v.rail.visibility = !1,
                        v.rail.css("display", "none"),
                        v
                }
                ,
                this.hideRailHr = function () {
                    return v.railh ? (v.railh.visibility = !1,
                        v.railh.css("display", "none"),
                        v) : v
                }
                ,
                this.show = function () {
                    return v.hidden = !1,
                        v.locked = !1,
                        v.showRail().showRailHr()
                }
                ,
                this.hide = function () {
                    return v.hidden = !0,
                        v.locked = !0,
                        v.hideRail().hideRailHr()
                }
                ,
                this.toggle = function () {
                    return v.hidden ? v.show() : v.hide()
                }
                ,
                this.remove = function () {
                    v.stop(),
                        v.cursortimeout && clearTimeout(v.cursortimeout),
                        v.doZoomOut(),
                        v.unbindAll(),
                        S.isie9 && v.win[0].detachEvent("onpropertychange", v.onAttributeChange),
                        v.observer !== !1 && v.observer.disconnect(),
                        v.observerremover !== !1 && v.observerremover.disconnect(),
                        v.events = null,
                        v.cursor && v.cursor.remove(),
                        v.cursorh && v.cursorh.remove(),
                        v.rail && v.rail.remove(),
                        v.railh && v.railh.remove(),
                        v.zoom && v.zoom.remove();
                    for (var e = 0; e < v.saved.css.length; e++) {
                        var o = v.saved.css[e];
                        o[0].css(o[1], "undefined" == typeof o[2] ? "" : o[2])
                    }
                    v.saved = !1,
                        v.me.data("__nicescroll", "");
                    var t = c.nicescroll;
                    t.each(function (e) {
                        if (this && this.id === v.id) {
                            delete t[e];
                            for (var o = ++e; o < t.length; o++,
                                e++)
                                t[e] = t[o];
                            t.length--,
                                t.length && delete t[t.length]
                        }
                    });
                    for (var r in v)
                        v[r] = null,
                            delete v[r];
                    v = null
                }
                ,
                this.scrollstart = function (e) {
                    return this.onscrollstart = e,
                        v
                }
                ,
                this.scrollend = function (e) {
                    return this.onscrollend = e,
                        v
                }
                ,
                this.scrollcancel = function (e) {
                    return this.onscrollcancel = e,
                        v
                }
                ,
                this.zoomin = function (e) {
                    return this.onzoomin = e,
                        v
                }
                ,
                this.zoomout = function (e) {
                    return this.onzoomout = e,
                        v
                }
                ,
                this.isScrollable = function (e) {
                    var o = e.target ? e.target : e;
                    if ("OPTION" == o.nodeName)
                        return !0;
                    for (; o && 1 == o.nodeType && !/BODY|HTML/.test(o.nodeName);) {
                        var t = c(o)
                            , r = t.css("overflowY") || t.css("overflowX") || t.css("overflow") || "";
                        if (/scroll|auto/.test(r))
                            return o.clientHeight != o.scrollHeight;
                        o = o.parentNode ? o.parentNode : !1
                    }
                    return !1
                }
                ,
                this.getViewport = function (e) {
                    for (var o = e && e.parentNode ? e.parentNode : !1; o && 1 == o.nodeType && !/BODY|HTML/.test(o.nodeName);) {
                        var t = c(o)
                            , r = t.css("overflowY") || t.css("overflowX") || t.css("overflow") || "";
                        if (/scroll|auto/.test(r) && o.clientHeight != o.scrollHeight)
                            return t;
                        if (t.getNiceScroll().length > 0)
                            return t;
                        o = o.parentNode ? o.parentNode : !1
                    }
                    return !1
                }
                ,
                this.onmousewheel = function (e) {
                    if (v.locked)
                        return v.debounced("checkunlock", v.resize, 250),
                            !0;
                    if (v.rail.drag)
                        return v.cancelEvent(e);
                    if ("auto" == v.opt.oneaxismousemode && 0 != e.deltaX && (v.opt.oneaxismousemode = !1),
                        v.opt.oneaxismousemode && 0 == e.deltaX && !v.rail.scrollable)
                        return v.railh && v.railh.scrollable ? v.onmousewheelhr(e) : !0;
                    var o = +new Date
                        , t = !1;
                    if (v.opt.preservenativescrolling && v.checkarea + 600 < o && (v.nativescrollingarea = v.isScrollable(e),
                        t = !0),
                        v.checkarea = o,
                        v.nativescrollingarea)
                        return !0;
                    var r = f(e, !1, t);
                    return r && (v.checkarea = 0),
                        r
                }
                ,
                this.onmousewheelhr = function (e) {
                    if (v.locked || !v.railh.scrollable)
                        return !0;
                    if (v.rail.drag)
                        return v.cancelEvent(e);
                    var o = +new Date
                        , t = !1;
                    return v.opt.preservenativescrolling && v.checkarea + 600 < o && (v.nativescrollingarea = v.isScrollable(e),
                        t = !0),
                        v.checkarea = o,
                        v.nativescrollingarea ? !0 : v.locked ? v.cancelEvent(e) : f(e, !0, t)
                }
                ,
                this.stop = function () {
                    return v.cancelScroll(),
                        v.scrollmon && v.scrollmon.stop(),
                        v.cursorfreezed = !1,
                        v.scroll.y = Math.round(v.getScrollTop() * (1 / v.scrollratio.y)),
                        v.noticeCursor(),
                        v
                }
                ,
                this.getTransitionSpeed = function (e) {
                    var o = Math.round(10 * v.opt.scrollspeed)
                        , t = Math.min(o, Math.round(e / 20 * v.opt.scrollspeed));
                    return t > 20 ? t : 0
                }
                ,
                v.opt.smoothscroll ? v.ishwscroll && S.hastransition && v.opt.usetransition ? (this.prepareTransition = function (e, o) {
                    var t = o ? e > 20 ? e : 0 : v.getTransitionSpeed(e)
                        , r = t ? S.prefixstyle + "transform " + t + "ms ease-out" : "";
                    return v.lasttransitionstyle && v.lasttransitionstyle == r || (v.lasttransitionstyle = r,
                        v.doc.css(S.transitionstyle, r)),
                        t
                }
                    ,
                    this.doScrollLeft = function (e, o) {
                        var t = v.scrollrunning ? v.newscrolly : v.getScrollTop();
                        v.doScrollPos(e, t, o)
                    }
                    ,
                    this.doScrollTop = function (e, o) {
                        var t = v.scrollrunning ? v.newscrollx : v.getScrollLeft();
                        v.doScrollPos(t, e, o)
                    }
                    ,
                    this.doScrollPos = function (e, o, t) {
                        var r = v.getScrollTop()
                            , i = v.getScrollLeft();
                        return ((v.newscrolly - r) * (o - r) < 0 || (v.newscrollx - i) * (e - i) < 0) && v.cancelScroll(),
                            0 == v.opt.bouncescroll && (0 > o ? o = 0 : o > v.page.maxh && (o = v.page.maxh),
                                0 > e ? e = 0 : e > v.page.maxw && (e = v.page.maxw)),
                            v.scrollrunning && e == v.newscrollx && o == v.newscrolly ? !1 : (v.newscrolly = o,
                                v.newscrollx = e,
                                v.newscrollspeed = t || !1,
                                v.timer ? !1 : (v.timer = setTimeout(function () {
                                    var t = v.getScrollTop()
                                        , r = v.getScrollLeft()
                                        , i = {};
                                    i.x = e - r,
                                        i.y = o - t,
                                        i.px = r,
                                        i.py = t;
                                    var n = Math.round(Math.sqrt(Math.pow(i.x, 2) + Math.pow(i.y, 2)))
                                        , s = v.newscrollspeed && v.newscrollspeed > 1 ? v.newscrollspeed : v.getTransitionSpeed(n);
                                    if (v.newscrollspeed && v.newscrollspeed <= 1 && (s *= v.newscrollspeed),
                                        v.prepareTransition(s, !0),
                                        v.timerscroll && v.timerscroll.tm && clearInterval(v.timerscroll.tm),
                                        s > 0) {
                                        if (!v.scrollrunning && v.onscrollstart) {
                                            var l = {
                                                type: "scrollstart",
                                                current: {
                                                    x: r,
                                                    y: t
                                                },
                                                request: {
                                                    x: e,
                                                    y: o
                                                },
                                                end: {
                                                    x: v.newscrollx,
                                                    y: v.newscrolly
                                                },
                                                speed: s
                                            };
                                            v.onscrollstart.call(v, l)
                                        }
                                        S.transitionend ? v.scrollendtrapped || (v.scrollendtrapped = !0,
                                            v.bind(v.doc, S.transitionend, v.onScrollEnd, !1)) : (v.scrollendtrapped && clearTimeout(v.scrollendtrapped),
                                                v.scrollendtrapped = setTimeout(v.onScrollEnd, s));
                                        var a = t
                                            , c = r;
                                        v.timerscroll = {
                                            bz: new BezierClass(a, v.newscrolly, s, 0, 0, .58, 1),
                                            bh: new BezierClass(c, v.newscrollx, s, 0, 0, .58, 1)
                                        },
                                            v.cursorfreezed || (v.timerscroll.tm = setInterval(function () {
                                                v.showCursor(v.getScrollTop(), v.getScrollLeft())
                                            }, 60))
                                    }
                                    v.synched("doScroll-set", function () {
                                        v.timer = 0,
                                            v.scrollendtrapped && (v.scrollrunning = !0),
                                            v.setScrollTop(v.newscrolly),
                                            v.setScrollLeft(v.newscrollx),
                                            v.scrollendtrapped || v.onScrollEnd()
                                    })
                                }, 50),
                                    void 0))
                    }
                    ,
                    this.cancelScroll = function () {
                        if (!v.scrollendtrapped)
                            return !0;
                        var e = v.getScrollTop()
                            , o = v.getScrollLeft();
                        return v.scrollrunning = !1,
                            S.transitionend || clearTimeout(S.transitionend),
                            v.scrollendtrapped = !1,
                            v._unbind(v.doc, S.transitionend, v.onScrollEnd),
                            v.prepareTransition(0),
                            v.setScrollTop(e),
                            v.railh && v.setScrollLeft(o),
                            v.timerscroll && v.timerscroll.tm && clearInterval(v.timerscroll.tm),
                            v.timerscroll = !1,
                            v.cursorfreezed = !1,
                            v.showCursor(e, o),
                            v
                    }
                    ,
                    this.onScrollEnd = function () {
                        v.scrollendtrapped && v._unbind(v.doc, S.transitionend, v.onScrollEnd),
                            v.scrollendtrapped = !1,
                            v.prepareTransition(0),
                            v.timerscroll && v.timerscroll.tm && clearInterval(v.timerscroll.tm),
                            v.timerscroll = !1;
                        var e = v.getScrollTop()
                            , o = v.getScrollLeft();
                        if (v.setScrollTop(e),
                            v.railh && v.setScrollLeft(o),
                            v.noticeCursor(!1, e, o),
                            v.cursorfreezed = !1,
                            0 > e ? e = 0 : e > v.page.maxh && (e = v.page.maxh),
                            0 > o ? o = 0 : o > v.page.maxw && (o = v.page.maxw),
                            e != v.newscrolly || o != v.newscrollx)
                            return v.doScrollPos(o, e, v.opt.snapbackspeed);
                        if (v.onscrollend && v.scrollrunning) {
                            var t = {
                                type: "scrollend",
                                current: {
                                    x: o,
                                    y: e
                                },
                                end: {
                                    x: v.newscrollx,
                                    y: v.newscrolly
                                }
                            };
                            v.onscrollend.call(v, t)
                        }
                        v.scrollrunning = !1
                    }
                ) : (this.doScrollLeft = function (e, o) {
                    var t = v.scrollrunning ? v.newscrolly : v.getScrollTop();
                    v.doScrollPos(e, t, o)
                }
                    ,
                    this.doScrollTop = function (e, o) {
                        var t = v.scrollrunning ? v.newscrollx : v.getScrollLeft();
                        v.doScrollPos(t, e, o)
                    }
                    ,
                    this.doScrollPos = function (e, o, t) {
                        function r() {
                            if (v.cancelAnimationFrame)
                                return !0;
                            if (v.scrollrunning = !0,
                                d = 1 - d)
                                return v.timer = h(r) || 1;
                            var e = 0
                                , o = sy = v.getScrollTop();
                            if (v.dst.ay) {
                                o = v.bzscroll ? v.dst.py + v.bzscroll.getNow() * v.dst.ay : v.newscrolly;
                                var t = o - sy;
                                (0 > t && o < v.newscrolly || t > 0 && o > v.newscrolly) && (o = v.newscrolly),
                                    v.setScrollTop(o),
                                    o == v.newscrolly && (e = 1)
                            } else
                                e = 1;
                            var i = sx = v.getScrollLeft();
                            if (v.dst.ax) {
                                i = v.bzscroll ? v.dst.px + v.bzscroll.getNow() * v.dst.ax : v.newscrollx;
                                var t = i - sx;
                                (0 > t && i < v.newscrollx || t > 0 && i > v.newscrollx) && (i = v.newscrollx),
                                    v.setScrollLeft(i),
                                    i == v.newscrollx && (e += 1)
                            } else
                                e += 1;
                            if (2 == e) {
                                if (v.timer = 0,
                                    v.cursorfreezed = !1,
                                    v.bzscroll = !1,
                                    v.scrollrunning = !1,
                                    0 > o ? o = 0 : o > v.page.maxh && (o = v.page.maxh),
                                    0 > i ? i = 0 : i > v.page.maxw && (i = v.page.maxw),
                                    i != v.newscrollx || o != v.newscrolly)
                                    v.doScrollPos(i, o);
                                else if (v.onscrollend) {
                                    var n = {
                                        type: "scrollend",
                                        current: {
                                            x: sx,
                                            y: sy
                                        },
                                        end: {
                                            x: v.newscrollx,
                                            y: v.newscrolly
                                        }
                                    };
                                    v.onscrollend.call(v, n)
                                }
                            } else
                                v.timer = h(r) || 1
                        }
                        var o = "undefined" == typeof o || o === !1 ? v.getScrollTop(!0) : o;
                        if (v.timer && v.newscrolly == o && v.newscrollx == e)
                            return !0;
                        v.timer && p(v.timer),
                            v.timer = 0;
                        var i = v.getScrollTop()
                            , n = v.getScrollLeft();
                        ((v.newscrolly - i) * (o - i) < 0 || (v.newscrollx - n) * (e - n) < 0) && v.cancelScroll(),
                            v.newscrolly = o,
                            v.newscrollx = e,
                            v.bouncescroll && v.rail.visibility || (v.newscrolly < 0 ? v.newscrolly = 0 : v.newscrolly > v.page.maxh && (v.newscrolly = v.page.maxh)),
                            v.bouncescroll && v.railh.visibility || (v.newscrollx < 0 ? v.newscrollx = 0 : v.newscrollx > v.page.maxw && (v.newscrollx = v.page.maxw)),
                            v.dst = {},
                            v.dst.x = e - n,
                            v.dst.y = o - i,
                            v.dst.px = n,
                            v.dst.py = i;
                        var s = Math.round(Math.sqrt(Math.pow(v.dst.x, 2) + Math.pow(v.dst.y, 2)));
                        v.dst.ax = v.dst.x / s,
                            v.dst.ay = v.dst.y / s;
                        var l = 0
                            , a = s;
                        0 == v.dst.x ? (l = i,
                            a = o,
                            v.dst.ay = 1,
                            v.dst.py = 0) : 0 == v.dst.y && (l = n,
                                a = e,
                                v.dst.ax = 1,
                                v.dst.px = 0);
                        var c = v.getTransitionSpeed(s);
                        if (t && 1 >= t && (c *= t),
                            v.bzscroll = c > 0 ? v.bzscroll ? v.bzscroll.update(a, c) : new BezierClass(l, a, c, 0, 1, 0, 1) : !1,
                            !v.timer) {
                            (i == v.page.maxh && o >= v.page.maxh || n == v.page.maxw && e >= v.page.maxw) && v.checkContentSize();
                            var d = 1;
                            if (v.cancelAnimationFrame = !1,
                                v.timer = 1,
                                v.onscrollstart && !v.scrollrunning) {
                                var u = {
                                    type: "scrollstart",
                                    current: {
                                        x: n,
                                        y: i
                                    },
                                    request: {
                                        x: e,
                                        y: o
                                    },
                                    end: {
                                        x: v.newscrollx,
                                        y: v.newscrolly
                                    },
                                    speed: c
                                };
                                v.onscrollstart.call(v, u)
                            }
                            r(),
                                (i == v.page.maxh && o >= i || n == v.page.maxw && e >= n) && v.checkContentSize(),
                                v.noticeCursor()
                        }
                    }
                    ,
                    this.cancelScroll = function () {
                        return v.timer && p(v.timer),
                            v.timer = 0,
                            v.bzscroll = !1,
                            v.scrollrunning = !1,
                            v
                    }
                ) : (this.doScrollLeft = function (e, o) {
                    var t = v.getScrollTop();
                    v.doScrollPos(e, t, o)
                }
                    ,
                    this.doScrollTop = function (e, o) {
                        var t = v.getScrollLeft();
                        v.doScrollPos(t, e, o)
                    }
                    ,
                    this.doScrollPos = function (e, o) {
                        var t = e > v.page.maxw ? v.page.maxw : e;
                        0 > t && (t = 0);
                        var r = o > v.page.maxh ? v.page.maxh : o;
                        0 > r && (r = 0),
                            v.synched("scroll", function () {
                                v.setScrollTop(r),
                                    v.setScrollLeft(t)
                            })
                    }
                    ,
                    this.cancelScroll = function () { }
                ),
                this.doScrollBy = function (e, o) {
                    var t = 0;
                    if (o)
                        t = Math.floor((v.scroll.y - e) * v.scrollratio.y);
                    else {
                        var r = v.timer ? v.newscrolly : v.getScrollTop(!0);
                        t = r - e
                    }
                    if (v.bouncescroll) {
                        var i = Math.round(v.view.h / 2);
                        -i > t ? t = -i : t > v.page.maxh + i && (t = v.page.maxh + i)
                    }
                    return v.cursorfreezed = !1,
                        py = v.getScrollTop(!0),
                        0 > t && 0 >= py ? v.noticeCursor() : t > v.page.maxh && py >= v.page.maxh ? (v.checkContentSize(),
                            v.noticeCursor()) : (v.doScrollTop(t),
                                void 0)
                }
                ,
                this.doScrollLeftBy = function (e, o) {
                    var t = 0;
                    if (o)
                        t = Math.floor((v.scroll.x - e) * v.scrollratio.x);
                    else {
                        var r = v.timer ? v.newscrollx : v.getScrollLeft(!0);
                        t = r - e
                    }
                    if (v.bouncescroll) {
                        var i = Math.round(v.view.w / 2);
                        -i > t ? t = -i : t > v.page.maxw + i && (t = v.page.maxw + i)
                    }
                    return v.cursorfreezed = !1,
                        px = v.getScrollLeft(!0),
                        0 > t && 0 >= px ? v.noticeCursor() : t > v.page.maxw && px >= v.page.maxw ? v.noticeCursor() : (v.doScrollLeft(t),
                            void 0)
                }
                ,
                this.doScrollTo = function (e, o) {
                    var t = o ? Math.round(e * v.scrollratio.y) : e;
                    0 > t ? t = 0 : t > v.page.maxh && (t = v.page.maxh),
                        v.cursorfreezed = !1,
                        v.doScrollTop(e)
                }
                ,
                this.checkContentSize = function () {
                    var e = v.getContentSize();
                    (e.h != v.page.h || e.w != v.page.w) && v.resize(!1, e)
                }
                ,
                v.onscroll = function () {
                    v.rail.drag || v.cursorfreezed || v.synched("scroll", function () {
                        v.scroll.y = Math.round(v.getScrollTop() * (1 / v.scrollratio.y)),
                            v.railh && (v.scroll.x = Math.round(v.getScrollLeft() * (1 / v.scrollratio.x))),
                            v.noticeCursor()
                    })
                }
                ,
                v.bind(v.docscroll, "scroll", v.onscroll),
                this.doZoomIn = function (e) {
                    if (!v.zoomactive) {
                        v.zoomactive = !0,
                            v.zoomrestore = {
                                style: {}
                            };
                        var o = ["position", "top", "left", "zIndex", "backgroundColor", "marginTop", "marginBottom", "marginLeft", "marginRight"]
                            , t = v.win[0].style;
                        for (var r in o) {
                            var i = o[r];
                            v.zoomrestore.style[i] = "undefined" != typeof t[i] ? t[i] : ""
                        }
                        v.zoomrestore.style.width = v.win.css("width"),
                            v.zoomrestore.style.height = v.win.css("height"),
                            v.zoomrestore.padding = {
                                w: v.win.outerWidth() - v.win.width(),
                                h: v.win.outerHeight() - v.win.height()
                            },
                            S.isios4 && (v.zoomrestore.scrollTop = c(window).scrollTop(),
                                c(window).scrollTop(0)),
                            v.win.css({
                                position: S.isios4 ? "absolute" : "fixed",
                                top: 0,
                                left: 0,
                                "z-index": l + 100,
                                margin: "0px"
                            });
                        var n = v.win.css("backgroundColor");
                        return ("" == n || /transparent|rgba\(0, 0, 0, 0\)|rgba\(0,0,0,0\)/.test(n)) && v.win.css("backgroundColor", "#fff"),
                            v.rail.css({
                                "z-index": l + 101
                            }),
                            v.zoom.css({
                                "z-index": l + 102
                            }),
                            v.zoom.css("backgroundPosition", "0px -18px"),
                            v.resizeZoom(),
                            v.onzoomin && v.onzoomin.call(v),
                            v.cancelEvent(e)
                    }
                }
                ,
                this.doZoomOut = function (e) {
                    return v.zoomactive ? (v.zoomactive = !1,
                        v.win.css("margin", ""),
                        v.win.css(v.zoomrestore.style),
                        S.isios4 && c(window).scrollTop(v.zoomrestore.scrollTop),
                        v.rail.css({
                            "z-index": v.zindex
                        }),
                        v.zoom.css({
                            "z-index": v.zindex
                        }),
                        v.zoomrestore = !1,
                        v.zoom.css("backgroundPosition", "0px 0px"),
                        v.onResize(),
                        v.onzoomout && v.onzoomout.call(v),
                        v.cancelEvent(e)) : void 0
                }
                ,
                this.doZoom = function (e) {
                    return v.zoomactive ? v.doZoomOut(e) : v.doZoomIn(e)
                }
                ,
                this.resizeZoom = function () {
                    if (v.zoomactive) {
                        var e = v.getScrollTop();
                        v.win.css({
                            width: c(window).width() - v.zoomrestore.padding.w + "px",
                            height: c(window).height() - v.zoomrestore.padding.h + "px"
                        }),
                            v.onResize(),
                            v.setScrollTop(Math.min(v.page.maxh, e))
                    }
                }
                ,
                this.init(),
                c.nicescroll.push(this)
        }
        , x = function (e) {
            var o = this;
            this.nc = e,
                this.lastx = 0,
                this.lasty = 0,
                this.speedx = 0,
                this.speedy = 0,
                this.lasttime = 0,
                this.steptime = 0,
                this.snapx = !1,
                this.snapy = !1,
                this.demulx = 0,
                this.demuly = 0,
                this.lastscrollx = -1,
                this.lastscrolly = -1,
                this.chkx = 0,
                this.chky = 0,
                this.timer = 0,
                this.time = function () {
                    return +new Date
                }
                ,
                this.reset = function (e, t) {
                    o.stop();
                    var r = o.time();
                    o.steptime = 0,
                        o.lasttime = r,
                        o.speedx = 0,
                        o.speedy = 0,
                        o.lastx = e,
                        o.lasty = t,
                        o.lastscrollx = -1,
                        o.lastscrolly = -1
                }
                ,
                this.update = function (e, t) {
                    var r = o.time();
                    o.steptime = r - o.lasttime,
                        o.lasttime = r;
                    var i = t - o.lasty
                        , n = e - o.lastx
                        , s = o.nc.getScrollTop()
                        , l = o.nc.getScrollLeft()
                        , a = s + i
                        , c = l + n;
                    o.snapx = 0 > c || c > o.nc.page.maxw,
                        o.snapy = 0 > a || a > o.nc.page.maxh,
                        o.speedx = n,
                        o.speedy = i,
                        o.lastx = e,
                        o.lasty = t
                }
                ,
                this.stop = function () {
                    o.nc.unsynched("domomentum2d"),
                        o.timer && clearTimeout(o.timer),
                        o.timer = 0,
                        o.lastscrollx = -1,
                        o.lastscrolly = -1
                }
                ,
                this.doSnapy = function (e, t) {
                    var r = !1;
                    0 > t ? (t = 0,
                        r = !0) : t > o.nc.page.maxh && (t = o.nc.page.maxh,
                            r = !0),
                        0 > e ? (e = 0,
                            r = !0) : e > o.nc.page.maxw && (e = o.nc.page.maxw,
                                r = !0),
                        r && o.nc.doScrollPos(e, t, o.nc.opt.snapbackspeed)
                }
                ,
                this.doMomentum = function (e) {
                    var t = o.time()
                        , r = e ? t + e : o.lasttime
                        , i = o.nc.getScrollLeft()
                        , n = o.nc.getScrollTop()
                        , s = o.nc.page.maxh
                        , l = o.nc.page.maxw;
                    o.speedx = l > 0 ? Math.min(60, o.speedx) : 0,
                        o.speedy = s > 0 ? Math.min(60, o.speedy) : 0;
                    var a = r && 60 >= t - r;
                    (0 > n || n > s || 0 > i || i > l) && (a = !1);
                    var c = o.speedy && a ? o.speedy : !1
                        , d = o.speedx && a ? o.speedx : !1;
                    if (c || d) {
                        var u = Math.max(16, o.steptime);
                        if (u > 50) {
                            var h = u / 50;
                            o.speedx *= h,
                                o.speedy *= h,
                                u = 50
                        }
                        o.demulxy = 0,
                            o.lastscrollx = o.nc.getScrollLeft(),
                            o.chkx = o.lastscrollx,
                            o.lastscrolly = o.nc.getScrollTop(),
                            o.chky = o.lastscrolly;
                        var p = o.lastscrollx
                            , m = o.lastscrolly
                            , f = function () {
                                var e = o.time() - t > 600 ? .04 : .02;
                                o.speedx && (p = Math.floor(o.lastscrollx - o.speedx * (1 - o.demulxy)),
                                    o.lastscrollx = p,
                                    (0 > p || p > l) && (e = .1)),
                                    o.speedy && (m = Math.floor(o.lastscrolly - o.speedy * (1 - o.demulxy)),
                                        o.lastscrolly = m,
                                        (0 > m || m > s) && (e = .1)),
                                    o.demulxy = Math.min(1, o.demulxy + e),
                                    o.nc.synched("domomentum2d", function () {
                                        if (o.speedx) {
                                            var e = o.nc.getScrollLeft();
                                            e != o.chkx && o.stop(),
                                                o.chkx = p,
                                                o.nc.setScrollLeft(p)
                                        }
                                        if (o.speedy) {
                                            var t = o.nc.getScrollTop();
                                            t != o.chky && o.stop(),
                                                o.chky = m,
                                                o.nc.setScrollTop(m)
                                        }
                                        o.timer || (o.nc.hideCursor(),
                                            o.doSnapy(p, m))
                                    }),
                                    o.demulxy < 1 ? o.timer = setTimeout(f, u) : (o.stop(),
                                        o.nc.hideCursor(),
                                        o.doSnapy(p, m))
                            };
                        f()
                    } else
                        o.doSnapy(o.nc.getScrollLeft(), o.nc.getScrollTop())
                }
        }
        , S = e.fn.scrollTop;
    e.cssHooks.pageYOffset = {
        get: function (e) {
            var o = c.data(e, "__nicescroll") || !1;
            return o && o.ishwscroll ? o.getScrollTop() : S.call(e)
        },
        set: function (e, o) {
            var t = c.data(e, "__nicescroll") || !1;
            return t && t.ishwscroll ? t.setScrollTop(parseInt(o)) : S.call(e, o),
                this
        }
    },
        e.fn.scrollTop = function (e) {
            if ("undefined" == typeof e) {
                var o = this[0] ? c.data(this[0], "__nicescroll") || !1 : !1;
                return o && o.ishwscroll ? o.getScrollTop() : S.call(this)
            }
            return this.each(function () {
                var o = c.data(this, "__nicescroll") || !1;
                o && o.ishwscroll ? o.setScrollTop(parseInt(e)) : S.call(c(this), e)
            })
        }
        ;
    var z = e.fn.scrollLeft;
    c.cssHooks.pageXOffset = {
        get: function (e) {
            var o = c.data(e, "__nicescroll") || !1;
            return o && o.ishwscroll ? o.getScrollLeft() : z.call(e)
        },
        set: function (e, o) {
            var t = c.data(e, "__nicescroll") || !1;
            return t && t.ishwscroll ? t.setScrollLeft(parseInt(o)) : z.call(e, o),
                this
        }
    },
        e.fn.scrollLeft = function (e) {
            if ("undefined" == typeof e) {
                var o = this[0] ? c.data(this[0], "__nicescroll") || !1 : !1;
                return o && o.ishwscroll ? o.getScrollLeft() : z.call(this)
            }
            return this.each(function () {
                var o = c.data(this, "__nicescroll") || !1;
                o && o.ishwscroll ? o.setScrollLeft(parseInt(e)) : z.call(c(this), e)
            })
        }
        ;
    var T = function (e) {
        var o = this;
        if (this.length = 0,
            this.name = "nicescrollarray",
            this.each = function (e) {
                for (var t = 0, r = 0; t < o.length; t++)
                    e.call(o[t], r++);
                return o
            }
            ,
            this.push = function (e) {
                o[o.length] = e,
                    o.length++
            }
            ,
            this.eq = function (e) {
                return o[e]
            }
            ,
            e)
            for (a = 0; a < e.length; a++) {
                var t = c.data(e[a], "__nicescroll") || !1;
                t && (this[this.length] = t,
                    this.length++)
            }
        return this
    };
    t(T.prototype, ["show", "hide", "toggle", "onResize", "resize", "remove", "stop", "doScrollPos"], function (e, o) {
        e[o] = function () {
            var e = arguments;
            return this.each(function () {
                this[o].apply(this, e)
            })
        }
    }),
        e.fn.getNiceScroll = function (e) {
            if ("undefined" == typeof e)
                return new T(this);
            var o = this[e] && c.data(this[e], "__nicescroll") || !1;
            return o
        }
        ,
        e.extend(e.expr[":"], {
            nicescroll: function (e) {
                return c.data(e, "__nicescroll") ? !0 : !1
            }
        }),
        c.fn.niceScroll = function (e, o) {
            "undefined" == typeof o && ("object" != typeof e || "jquery" in e || (o = e,
                e = !1));
            var t = new T;
            "undefined" == typeof o && (o = {}),
                e && (o.doc = c(e),
                    o.win = c(this));
            var r = !("doc" in o);
            return r || "win" in o || (o.win = c(this)),
                this.each(function () {
                    var e = c(this).data("__nicescroll") || !1;
                    e || (o.doc = r ? c(this) : o.doc,
                        e = new b(o, c(this)),
                        c(this).data("__nicescroll", e)),
                        t.push(e)
                }),
                1 == t.length ? t[0] : t
        }
        ,
        window.NiceScroll = {
            getjQuery: function () {
                return e
            }
        },
        c.nicescroll || (c.nicescroll = new T,
            c.nicescroll.options = w)
}(jQuery);
