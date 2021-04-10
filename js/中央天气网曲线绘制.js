function dw(t, a) {
    function e(t) {
        return s ? H - PADDING.top - 20 - (H - PADDING.top - PADDING.buttom - 20) / p * (t - u) : H - PADDING.top - (H - PADDING.top - PADDING.buttom - 20) / p * (t - u)
    }
    function i(t, a) {
        return [PADDING.left + (W - PADDING.left - PADDING.right) / (values.length - 1) * t, e(a)]
    }
    function n() {
        for (var t = [], a = 1, e = $.length; e > a; a++)
            t.push($[a], g[a]);
        t = ["M", $[0], g[0], "R"].concat(t);
        var i;
        i = s ? "L" + (W - PADDING.left) + "," + 0 + ",42," + 0 + "z" : "L" + (W - PADDING.left) + "," + (H - PADDING.buttom) + ",42," + (H - PADDING.top) + "z",
            v.attr({
                path: t
            }),
            x.attr({
                path: t + i
            })
    }
    var s = t.xr
        , l = t.line
        , o = a.color
        , c = a.dotColor
        , h = a.dotDiameter
        , d = a.dotStrokeColor
        , m = a.dotStroke
        , f = a.opacity;
    PADDING = a.PADDING,
        W = a.W,
        H = a.H,
        r = Raphael(t.id, W, H),
        textStyle = a.textStyle,
        values = a.values,
        len = values.length;
    var p, w = Math.max.apply({}, values), u = Math.min.apply({}, values);
    p = w === u ? w / 2 : w - u,
        0 == p && (p = 1);
    var v, $ = ([["M"].concat(i(0, values[0]))],
        []), g = [], y = (r.set(),
            r.set()), x = ((W - PADDING) / values.length,
                r.path().attr({
                    stroke: "none",
                    fill: o,
                    opacity: f
                }));
    v = l ? r.path().attr({
        stroke: o,
        "stroke-width": 2
    }) : r.path().attr({
        stroke: o,
        "stroke-width": 0
    });
    var b;
    for (D = 0,
        b = values.length - 1; b > D; D++) {
        var C, k = i(D, values[D]), I = i(D + 1, values[D + 1]);
        $[D] = k[0],
            g[D] = k[1],
            (C = function (t, a) {
                var e;
                e = l ? {
                    fill: c,
                    stroke: d,
                    "stroke-width": m
                } : t ? {
                    fill: c,
                    stroke: d,
                    "stroke-width": m
                } : {
                    fill: "RGB(194,194,195)",
                    stroke: "RGB(194,194,195)",
                    "stroke-width": "1"
                },
                    y.push(r.circle(a[0], a[1], h).attr(e))
            }
            )(D, k),
            D == b - 1 && C(D + 1, I)
    }
    if (k = i(b, values[b]),
        $.push(k[0]),
        g.push(k[1]),
        !l)
        if (s) {
            var _ = r.text($[0], g[0] + 15, values[0] + "°C");
            _.attr({
                fill: "RGB(194,194,195)",
                "font-size": "14px",
                "text-anchor": "center"
            })
        } else {
            var _ = r.text($[0], g[0] - 15, values[0] + "°C");
            _.attr({
                fill: "RGB(194,194,195)",
                "font-size": "16px",
                "text-anchor": "center"
            })
        }
    var D;
    for (D = l ? 0 : 1,
        b = values.length; b > D; D++)
        if (s) {
            var _ = r.text($[D], g[D] + (a.fontWz || 15), values[D] + "°C");
            _.attr(textStyle)
        } else {
            var _ = r.text($[D], g[D] - (a.fontWz || 15), values[D] + "°C");
            _.attr(textStyle)
        }
    n()
}
function initHouers(t) {
    function a(t) {
        for (var a = [], e = ["无持续风向", "东北风", "东风", "东南风", "南风", "西南风", "西风", "西北风", "北风", "旋转风"], i = ["<3级", "3-4级", "4-5级", "5-6级", "6-7级", "7-8级", "8-9级", "9-10级", "10-11级", "11-12级"], n = 0; n < t.length; n++) {
            var r = t[n]
                , s = {}
                , l = r.jf.slice(8, 10);
            s.time = l,
                s.template = r.jb,
                s.wather = l > 5 && 20 > l ? "d" + r.ja : "n" + r.ja,
                s.windDY = e[r.jd],
                s.windJB = i[r.jc],
                s.itemOne = n % 2 ? "item-one" : "",
                a.push(s)
        }
        return a
    }
    function e(t, a) {
        var e = "";
        return e += '<li class="details-item ' + a.itemOne + '">' + '<i class="item-icon housr_icons ' + a.wather + '"></i>' + '<div class="curor"></div>' + '<p class="wind-info">' + a.windDY + "</p>" + '<p class="wind-js">' + a.windJB + "</p> " + "</li>"
    }
    function i(t, a) {
        return 0 === t ? '<li class="houer-item active">' + a.time + "时</li>" : '<li class="houer-item">' + a.time + "时</li>"
    }
    if (0 !== t) {
        var n, r = t - 1, s = hour3data[r];
        n = s.length;
        var l = function () {
            try {
                return !0
            } catch (t) {
                return !1
            }
        }();
        if (l)
            if (1 === r) {
                var o = parseInt(sunup[0].slice(0, 2))
                    , c = parseInt(sunup[0].slice(3, 5))
                    , h = 60 * o + c
                    , d = parseInt(sunset[0].slice(0, 2))
                    , m = parseInt(sunset[0].slice(3, 5))
                    , f = 60 * d + m
                    , p = new Date
                    , w = p.getHours()
                    , u = p.getMinutes()
                    , v = 60 * w + u;
                h > v ? ($($(".sunup .time")[1]).text(sunup[0]),
                    $($(".sunup .time")[0]).text(sunset[0])) : v >= h && f > v ? ($($(".sunup .time")[1]).text(sunup[0]),
                        $($(".sunup .time")[0]).text(sunset[1])) : ($($(".sunup .time")[1]).text(sunup[1]),
                            $($(".sunup .time")[0]).text(sunset[1]))
            } else
                $($(".sunup .time")[1]).text(sunup[r]),
                    $($(".sunup .time")[0]).text(sunset[r]);
        for (var g = a(s), y = [], x = [], b = 0; n > b; b++)
            y.push(e(b, g[b])),
                x.push(i(b, g[b]));
        $(".details-houers-container").empty().html(y.join("")),
            $(".houers-container").empty().html(x.join(""));
        var C = s.map(function (t) {
            return t.jb
        });
        if (3 > r) {
            var k = "<li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>";
            $(".content-shade").empty().html(k).css("width", "1300px"),
                $(".content-container .scroll-container ").css("width", "1306px");
            var I = {
                id: "drawTF",
                xr: "xr",
                line: "line"
            }
                , _ = {
                    color: "#e99a58",
                    dotColor: "#e9914c",
                    dotDiameter: 5,
                    dotStrokeColor: "#fff",
                    dotStroke: "3",
                    opacity: 0,
                    PADDING: {
                        left: 30,
                        top: 7,
                        right: 30,
                        buttom: 7
                    },
                    W: 1300,
                    H: 70,
                    textStyle: {
                        fill: "#999",
                        "font-size": "16px",
                        "text-anchor": "center"
                    },
                    values: C,
                    fontWz: 20
                }
                , D = {
                    color: "#e99a58",
                    dotColor: "#e9914c",
                    dotDiameter: 5,
                    dotStrokeColor: "#fff",
                    dotStroke: "3",
                    opacity: 0,
                    PADDING: {
                        left: 30,
                        top: 7,
                        right: 30,
                        buttom: 7
                    },
                    W: 650,
                    H: 70,
                    textStyle: {
                        fill: "#999",
                        "font-size": "16px",
                        "text-anchor": "center"
                    },
                    values: C,
                    fontWz: 20
                };
            $("#drawTF").empty(),
                $("#drawTE").empty(),
                $(".header-container .title").text("逐小时预报"),
                n > 20 ? (dw(I, _),
                    $(".content-container").niceScroll({
                        cursorcolor: "#bcbcbc",
                        background: "#dfdfdf",
                        autohidemode: !1,
                        cursorwidth: "10px",
                        cursorborder: "none"
                    }),
                    $(".content-container").getNiceScroll().show()) : (dw(I, D),
                        $(".content-container").getNiceScroll().hide())
        } else if ($("#drawTF").empty(),
            $("#drawTE").empty(),
            n > 9) {
            var I = {
                id: "drawTF",
                xr: "xr",
                line: "line"
            }
                , _ = {
                    color: "#e99a58",
                    dotColor: "#e9914c",
                    dotDiameter: 5,
                    dotStrokeColor: "#fff",
                    dotStroke: "3",
                    opacity: 0,
                    PADDING: {
                        left: 30,
                        top: 7,
                        right: 30,
                        buttom: 7
                    },
                    W: 870,
                    H: 80,
                    textStyle: {
                        fill: "#999",
                        "font-size": "16px",
                        "text-anchor": "center"
                    },
                    values: C,
                    fontWz: 20
                };
            dw(I, _);
            var q = "<li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>";
            $(".content-shade").empty().html(q).css("width", "875px"),
                $(".content-container .scroll-container").css("width", "880px"),
                $(".content-container").niceScroll({
                    cursorcolor: "#bcbcbc",
                    background: "#dfdfdf",
                    autohidemode: !1,
                    cursorwidth: "10px",
                    cursorborder: "none"
                }),
                $(".content-container").getNiceScroll().show()
        } else {
            $(".content-container").getNiceScroll().hide(),
                $(".header-container .title").text("逐3小时预报"),
                $("#ascrail2003-hr").hide();
            var I = {
                id: "drawTE",
                xr: "xr",
                line: "line"
            }
                , _ = {
                    color: "#e99a58",
                    dotColor: "#e9914c",
                    dotDiameter: 5,
                    dotStrokeColor: "#fff",
                    dotStroke: "3",
                    opacity: 0,
                    PADDING: {
                        left: 41,
                        top: 7,
                        right: 41,
                        buttom: 7
                    },
                    W: 650,
                    H: 80,
                    textStyle: {
                        fill: "#999",
                        "font-size": "16px",
                        "text-anchor": "center"
                    },
                    values: C,
                    fontWz: 20
                };
            $("#drawTF").empty(),
                $("#drawTE").empty(),
                dw(I, _)
        }
    }
}
var ct = $("#cy dt").find("em").html()
    , ct_hint_num = ""
    , ct_hint = "";
"炎热" == ct || "热" == ct ? (ct_hint_num = "cyIcon1",
    ct_hint = "短袖") : "舒适" == ct ? (ct_hint_num = "cyIcon2",
        ct_hint = "衬衫") : "较舒适" == ct ? (ct_hint_num = "cyIcon3",
            ct_hint = "薄外套") : "较冷" == ct ? (ct_hint_num = "cyIcon4",
                ct_hint = "厚毛衣") : (ct_hint_num = "cyIcon5",
                    ct_hint = "羽绒服"),
    $(".weather_shzs ul li span.cy").addClass(ct_hint_num),
    $("#cy dt").find("em").html(ct_hint),
    "function" != typeof Array.prototype.map && (Array.prototype.map = function (t, a) {
        var e = [];
        if ("function" == typeof t)
            for (var i = 0, n = this.length; n > i; i++)
                e.push(t.call(a, this[i], i, this));
        return e
    }
    ),
    $(".weather_lo_box_pro").niceScroll({
        cursorcolor: "#bcbcbc",
        background: "#dfdfdf",
        autohidemode: !1,
        cursorwidth: "10px",
        cursorborder: "none"
    }),
    initHouers(1);
var drawBaseOb = {
    id: "drawO",
    xr: "",
    line: ""
}
    , drawOobject = {
        color: "rgb(255,255,255)",
        dotColor: "#fff",
        dotDiameter: 3,
        dotStrokeColor: "#fff",
        dotStroke: "0",
        opacity: .5,
        PADDING: {
            left: 42,
            top: 5,
            right: 42,
            buttom: 5
        },
        W: 687,
        H: 70,
        textStyle: {
            fill: "#fff",
            "font-size": "16px",
            "text-anchor": "center"
        },
        values: eventDay
    }
    , drawNoneBlue = {
        color: "rgb(254,240,208)",
        dotColor: "#e7924c",
        dotDiameter: 3,
        dotStrokeColor: "#fff",
        dotStroke: "1",
        opacity: .8,
        PADDING: {
            left: 42,
            top: 5,
            right: 42,
            buttom: 5
        },
        W: 687,
        H: 70,
        textStyle: {
            fill: "#252525",
            "font-size": "16x",
            "text-anchor": "center"
        },
        values: eventDay
    }
    , drawNoneBlueq = {
        color: "rgb(254,240,208)",
        dotColor: "#999",
        dotDiameter: 2,
        dotStrokeColor: "#fff",
        dotStroke: "0",
        opacity: .8,
        PADDING: {
            left: 42,
            top: 5,
            right: 42,
            buttom: 15
        },
        W: 687,
        H: 70,
        textStyle: {
            fill: "#7d7d7d",
            "font-size": "14px",
            "text-anchor": "center"
        },
        values: eventNight
    };
dw(drawBaseOb, drawOobject);
var drawBaseObq = {
    id: "drawT",
    xr: "xr",
    line: ""
}
    , drawOobjectq = {
        color: "rgb(255,255,255)",
        dotColor: "#fff",
        dotDiameter: 3,
        dotStrokeColor: "#fff",
        dotStroke: "0",
        opacity: .5,
        PADDING: {
            left: 42,
            top: 5,
            right: 42,
            buttom: 15
        },
        W: 687,
        H: 70,
        textStyle: {
            fill: "#fff",
            "font-size": "14px",
            "text-anchor": "center"
        },
        values: eventNight
    };
dw(drawBaseObq, drawOobjectq),
    $("#sky-on").on("click", function () {
        $("#sky-on").hasClass("off") ? ($("#sky-on").removeClass("off"),
            $(".jq-switch").animate({
                left: "22px"
            }, 500),
            $(".blue-container").addClass("sky").removeClass("backccc"),
            $("#drawO").empty(),
            $("#drawT").empty(),
            $("#drawBar").hide(),
            dw(drawBaseOb, drawOobject),
            dw(drawBaseObq, drawOobjectq),
            $("#drawBar").css({
                background: "rgba(255,255,255,0.5)"
            }).show()) : ($("#sky-on").addClass("off"),
                $(".jq-switch").animate({
                    left: "0px"
                }, 500),
                $(".blue-container").removeClass("sky").addClass("backccc"),
                $("#drawO").empty(),
                $("#drawT").empty(),
                $("#drawBar").hide(),
                dw(drawBaseOb, drawNoneBlue),
                dw(drawBaseObq, drawNoneBlueq),
                $("#drawBar").css({
                    background: "rgba(254,240,208,0.8)"
                }).show())
    }),
    $(".blue-item").on("click", function (t) {
        t.preventDefault(),
            t.stopPropagation();
        var a = $(this).index()
            , e = $(".date-bottom-blue")
            , i = $(".blue-item")
            , n = $(".date-item");
        if (0 !== a) {
            n.removeClass("active"),
                n.eq(a).addClass("active"),
                e.removeClass("date-bottom-active"),
                $(e[a]).addClass("date-bottom-active");
            var r = $(".item-active").clone();
            $(".item-active").detach(),
                i.removeClass("active"),
                $(i[a]).append(r).addClass("active"),
                hour3data[a - 1].length > 9 ? ($(".three-container").hide(),
                    $(".content-container").show()) : ($(".content-container").hide(),
                        $(".three-container").show(),
                        $(".nicescroll-rails").hide()),
                initHouers(a)
        }
    }),
    $(".click_warp_item").on("click", function (t) {
        t.preventDefault(),
            t.stopPropagation();
        var a = $(this).index()
            , e = $(".date-bottom-blue")
            , i = $(".blue-item")
            , n = $(".date-item");
        if (0 !== a) {
            n.removeClass("active"),
                n.eq(a).addClass("active"),
                e.removeClass("date-bottom-active"),
                $(e[a]).addClass("date-bottom-active");
            var r = $(".item-active").clone();
            $(".item-active").detach(),
                i.removeClass("active"),
                $(i[a]).append(r).addClass("active"),
                hour3data[a - 1].length > 9 ? ($(".three-container").hide(),
                    $(".content-container").show()) : ($(".content-container").hide(),
                        $(".three-container").show(),
                        $(".nicescroll-rails").hide()),
                initHouers(a)
        }
    }),
    $(".date-item").on("click", function (t) {
        t.preventDefault(),
            t.stopPropagation();
        var a = $(this).index()
            , e = $(".date-bottom-blue")
            , i = $(".blue-item")
            , n = $(".date-item");
        if (0 !== a) {
            n.removeClass("active"),
                n.eq(a).addClass("active"),
                e.removeClass("date-bottom-active"),
                $(e[a]).addClass("date-bottom-active");
            var r = $(".item-active").clone();
            $(".item-active").detach(),
                i.removeClass("active"),
                $(i[a]).append(r).addClass("active"),
                hour3data[a - 1].length > 9 ? ($(".three-container").hide(),
                    $(".content-container").show()) : ($(".content-container").hide(),
                        $(".three-container").show(),
                        $(".nicescroll-rails").hide()),
                initHouers(a)
        }
    }),
    $(".content-shade > li").on("hover", function () {
        var t = $(this).index()
            , a = $(".houer-item");
        a.removeClass("active"),
            $(a[t]).addClass("active");
        var e = $(".details-item");
        e.removeClass("active"),
            $(e[t]).addClass("active")
    }),
    $(".three-content-shade > li").on("hover", function () {
        var t = $(this).index()
            , a = $(".houer-item");
        a.removeClass("active"),
            $(a[8 + t]).addClass("active");
        var e = $(".details-item");
        e.removeClass("active"),
            $(e[8 + t]).addClass("active")
    }),
    $(".date-item", ".click_warp_item", ".blue-item").on("hover", function () {
        var t = $(this).index()
            , a = $(".date-item");
        a.removeClass("hover"),
            $(a[t]).addClass("hover");
        var e = $(".date-bottom-blue");
        e.removeClass("date-bottom-activea"),
            $(e[t]).addClass("date-bottom-activea")
    }),
    $(".weather_7d").on("mouseleave", function () {
        var t = $(".date-item");
        t.removeClass("hover");
        var a = $(".date-bottom-blue");
        a.removeClass("date-bottom-activea")
    });
