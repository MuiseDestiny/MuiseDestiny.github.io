function setAirData(a) {
    function t(a) {
        for (var t = 0, i = a.length - 1; i >= 0; i--)
            t += Number(a[i]);
        return Math.floor(10 * t) / 10
    }
    function i(a) {
        for (var t = a, i = t.length - 1; "" == t[i] && i > 0;)
            --i;
        return t[i]
    }
    function e(a) {
        return a.length == p
    }
    var r = '<div class="tabs"><h2>整点天气实况</h2><p id="currHour"></p><p class="second"><b id="detailHour"></b></p><ul><li class="aqi_on on" data-role="air">空气质量</li><li class="p2" data-role="tem">温度</li><li class="sd" data-role="humidity">相对湿度</li><li class="js" data-role="rain">降水量</li><li class="fl" data-role="wind">风力风向</li></ul></div><div class="split"></div><div class="chart"><div id="hourHolder"><div class="xLabel"></div><div class="yLabel"></div><div class="result"></div><div class="showData"></div></div><em>(h)</em><b id="wd"></b> <b id="tem">℃</b> <b id="pm10">(μg/m³)</b> <b id="sd">(%)</b> <b id="js">(mm)</b> <b id="fl">(级)</b><p class="air detail">空气质量指数：简称AQI，是定量描述空气质量状况的无量纲指数。（数据由生态环境部提供）</p><p class="humidity">相对湿度：空气中实际水汽压与当时气温下的饱和水汽压之比，以百分比（%）表示。</p><p class="pm10 tem">温度：表示大气冷热程度的物理量，气象上给出的温度是指离地面1.5米高度上百叶箱中的空气温度。</p><p class="rain">降水量：某一时段内的未经蒸发、渗透、流失的降水，在水平面上积累的深度，以毫米（mm）为单位。 </p><p class="wind">风力风向：空气的水平运动，风力是风吹到物体上所表示出力量的大小，风向指风的来向。</p><div class="aqiColorExp clearfix"><span class="span1">优</span> <span class="span2">良</span> <span class="span3">轻度</span> <span class="span4">中度</span> <span class="span5">重度</span> <span class="span6">严重</span></div>'
        , n = $("#weatherChart").html(r);
    Raphael.fn.drawGrid = function (a, t, i, e, r, n) {
        n = n || "#000";
        for (var s = ["M", Math.round(a) + .5, Math.round(t) + .5, "L", Math.round(a + i) + .5, Math.round(t) + .5], d = e / r, l = 1; r >= l; l++)
            s = s.concat(["M", Math.round(a) + .5, Math.round(t + l * d) + .5, "H", Math.round(a + i) + .5]);
        return this.path(s.join(",")).attr({
            stroke: n,
            fill: "#fff"
        })
    }
        ,
        Raphael.fn.polygon = function (a, t, i) {
            var e = ["M", a, t, "L", a - i * Math.sin(15), t + Math.sin(15) * i * Math.sqrt(3), a, t - 2 * i * Math.sin(15), a + i * Math.sin(15), t + Math.sin(15) * i * Math.sqrt(3), "z"];
            return this.path(e.join(","))
        }
        ;
    var s = 6
        , d = null
        , l = function (a, t) {
            return "" == a || "null" == a || t && 0 == a
        }
        , h = {
            length: 0,
            date: [],
            air: [],
            airSum: 0,
            tem: [],
            temSum: 0,
            humidity: [],
            humiditySum: 0,
            rain: [],
            rainSum: 0,
            windLevel: [],
            windAngle: [],
            windDirection: [],
            windSum: 0,
            flagData: {
                air: {
                    max: 0,
                    min: 0
                },
                tem: {
                    max: 0,
                    min: 0
                },
                humidity: {
                    max: 0,
                    min: 0
                },
                rain: {
                    max: 0,
                    min: 0
                },
                wind: {
                    max: 0,
                    min: 0
                }
            },
            min: {
                air: 0,
                tem: 0,
                humidity: 0,
                rain: 0,
                wind: 0
            },
            max: {
                air: 0,
                tem: 90,
                humidity: 0,
                rain: 0,
                wind: 12
            },
            step: {
                air: 0,
                tem: 1,
                humidity: 1,
                rain: 1,
                wind: 2
            },
            invalid: {
                air: [],
                tem: [],
                humidity: [],
                rain: [],
                wind: []
            },
            init: function (a) {
                function t(a) {
                    for (var t = -99, i = 0; i < a.length; i++)
                        a[i] && Number(a[i]) > t && (t = a[i]);
                    return t
                }
                var i = a.od.od2;
                this.length = i.length;
                for (var e = this.length - 1; e >= 0; e--) {
                    var r = i[e];
                    this.date.push(r.od21),
                        l(r.od28) && this.invalid.air.push(e),
                        this.air.push(r.od28),
                        l(r.od22) && this.invalid.tem.push(e),
                        this.tem.push(r.od22),
                        l(r.od27) && this.invalid.humidity.push(e),
                        this.humidity.push(r.od27),
                        l(r.od26) && this.invalid.rain.push(e),
                        this.rain.push(r.od26),
                        l(r.od25, !0) && this.invalid.wind.push(e),
                        this.windLevel.push(r.od25),
                        this.windAngle.push(r.od23),
                        this.windDirection.push(r.od24),
                        this.rainSum += parseFloat(r.od26) || 0,
                        this.airSum += parseFloat(r.od28) || 0,
                        this.temSum += parseFloat(r.od22) || 0,
                        this.humiditySum += parseFloat(r.od27) || 0,
                        this.windSum += parseFloat(r.od25) || 0
                }
                var n = function (a, t) {
                    var i = [];
                    return $.each(a, function (e, r) {
                        isNaN(r) ? (i.push(t),
                            a[e] = "") : i.push(r)
                    }),
                        i
                }
                    , d = h.max
                    , o = h.min
                    , m = function (a) {
                        for (var t = 99, i = 0; i < a.length; i++)
                            a[i] && Number(a[i]) < t && (t = a[i]);
                        return t
                    }
                    , c = function (a) {
                        return Math.floor(a)
                    }
                    , p = function (a) {
                        return Math.ceil(a)
                    }
                    , u = h.flagData;
                u.air.max = t(n(h.air, d.air)),
                    u.tem.min = m(n(h.tem, o.tem)),
                    u.tem.max = t(n(h.tem, d.tem)),
                    u.rain.min = m(n(h.rain, o.rain)),
                    u.rain.max = t(n(h.rain, d.rain)),
                    u.humidity.min = m(n(h.humidity, o.humidity)),
                    u.humidity.max = t(n(h.humidity, d.humidity)),
                    u.wind.min = m(n(h.windLevel, o.wind)),
                    u.wind.max = t(n(h.windLevel, d.wind)),
                    h.min.air = c(h.flagData.air.min),
                    h.min.tem = c(h.flagData.tem.min),
                    h.min.rain = c(h.flagData.rain.min),
                    h.min.humidity = c(h.flagData.humidity.min),
                    h.max.air = c(h.flagData.air.max),
                    h.max.tem = c(h.flagData.tem.max),
                    h.max.rain = p(h.flagData.rain.max),
                    h.max.humidity = p(h.flagData.humidity.max),
                    h.min.air = h.min.air - h.step.air,
                    h.min.humidity - h.step.humidity >= 0 && (h.min.humidity -= h.step.humidity),
                    h.min.rain - h.step.rain >= 0 && (h.min.rain -= h.step.rain),
                    h.min.tem - h.step.tem >= 0 && (h.min.tem -= h.step.tem),
                    (h.max.air - h.min.air) / s > h.step.air && (h.step.air = p((h.max.air - h.min.air) / s)),
                    (h.max.humidity - h.min.humidity) / s > h.step.humidity && (h.step.humidity = p((h.max.humidity - h.min.humidity) / s)),
                    (h.max.rain - h.min.rain) / s > h.step.rain && (h.step.rain = p((h.max.rain - h.min.rain) / s)),
                    (h.max.tem - h.min.tem) / s > h.step.tem && (h.step.tem = p((h.max.tem - h.min.tem) / s)),
                    h.max.air = h.min.air + h.step.air * s,
                    h.max.humidity = h.min.humidity + h.step.humidity * s,
                    h.max.tem = h.min.tem + h.step.tem * s,
                    h.max.humidity > 100 && (h.max.humidity = 100,
                        h.min.humidity = h.max.humidity - h.step.humidity * s),
                    h.max.rain = h.min.rain + h.step.rain * s
            }
        };
    h.init(a),
        n.find(".split").append('<p class="air on">过去24小时AQI最高值: ' + h.flagData.air.max + '</p><p class="tem">最高气温: ' + h.flagData.tem.max + "℃ , 最低气温: " + h.flagData.tem.min + '℃</p><p class="humidity">过去24小时最大相对湿度: ' + h.flagData.humidity.max + '%</p><p class="wind">过去24小时最大风力: ' + h.flagData.wind.max + '级</p><p class="rain">过去24小时总降水量：' + t(h.rain) + "mm</p>");
    var o = {
        width: 0,
        height: 0,
        leftgutter: 0,
        bottomgutter: 0,
        topgutter: 0,
        rightgutter: 0,
        rowNum: 0,
        colNum: 0,
        cellHeight: 0,
        cellWidth: 0,
        grid: null,
        rects: null,
        shap: null,
        path: null,
        pathStyle: {
            stroke: "#94c05a",
            "stroke-width": 2,
            "stroke-linejoin": "round"
        },
        init: function (a) {
            var t = [];
            this.width = a.width,
                this.height = a.height,
                this.leftgutter = a.leftgutter,
                this.bottomgutter = a.bottomgutter,
                this.topgutter = a.topgutter,
                this.rightgutter = a.rightgutter,
                this.rowNum = a.rowNum,
                this.colNum = a.colNum,
                this.cellHeight = (this.height - this.topgutter - this.bottomgutter) / this.rowNum,
                this.cellWidth = (this.width - this.leftgutter - this.rightgutter) / this.colNum,
                d = Raphael(a.container, o.width, o.height),
                this.grid = d.drawGrid(o.leftgutter, o.topgutter, o.width - o.leftgutter - o.rightgutter, o.height - o.topgutter - o.bottomgutter, o.rowNum, "#eee"),
                this.rects = d.set(),
                this.shap = d.set();
            for (var i = 0, e = this.colNum; e > i; i++)
                o.rects.push(d.rect(o.leftgutter + o.cellWidth * i, o.topgutter, o.cellWidth, o.height - o.bottomgutter - o.topgutter).attr({
                    stroke: "none",
                    fill: "#fff",
                    opacity: 0
                })),
                    t.push("<span>" + a.date[i] + "</span>");
            $(".xLabel").html(t.join(""))
        },
        drawGraph: function (a) {
            for (var t = [], i = a.step, e = a.unit, r = a.max, n = a.min, s = this.cellWidth, l = this.cellHeight, h = this.topgutter, m = this.leftgutter, c = this.height - h - this.bottomgutter, p = 0; p <= this.rowNum; p++)
                t.unshift("<span>" + (n + p * i) + "</span>");
            if ($(a.container).html(t.join("")),
                a.data.length != a.invalid.length) {
                var m = this.leftgutter
                    , s = this.cellWidth
                    , u = a.r || 0
                    , f = this.height - this.bottomgutter
                    , v = $(a.dataContainer);
                switch (a.shap) {
                    case "rect":
                        for (var w = [], p = 0, g = this.colNum; g > p; p++) {
                            var y, x = Math.round(m + s * (p + .5)) + .5, b = Math.round(l * ((r - a.data[p]) / i) + h), C = "#fff";
                            "" == e ? y = a.data[p] <= 50 ? "#9dca80" : a.data[p] <= 100 ? "#f7da64" : a.data[p] <= 150 ? "#f29e39" : a.data[p] <= 200 ? "#da555d" : a.data[p] <= 300 ? "#b9377a" : "#881326" : a.data[p] < 10 ? y = "#6600CC" : a.data[p] >= 10 && a.data[p] <= 25 ? y = "#0000FF" : a.data[p] > 25 && a.data[p] <= 50 ? y = "#008000" : a.data[p] > 50 && a.data[p] <= 100 ? y = "#FFCC00" : a.data[p] > 100 && a.data[p] <= 250 ? y = "#FF6600" : a.data[p] > 250 && (y = "#FF0000"),
                                C && y && w.push({
                                    stroke: C,
                                    "stroke-width": 1,
                                    fill: y
                                }),
                                this.shap.push(d.rect(x - .5 * s + 4, f, 13, 0).attr(w[p])),
                                this.shap[p].animate({
                                    height: c - b + h,
                                    transform: ["t0," + (-f + b)]
                                }, 500),
                                function (a, t, i, r) {
                                    if ("" != r && 0 != r) {
                                        var n = function () {
                                            o.shap[a].attr({
                                                fill: "#076ea8"
                                            }),
                                                "" == e ? v.html(r + e) : v.html(r + e);
                                            var n = v.width()
                                                , s = t + 10;
                                            n + t > 660 && (s = t - n - 20),
                                                v.css({
                                                    top: i,
                                                    left: s - 2
                                                }).show()
                                        }
                                            , s = function () {
                                                o.shap[a].attr(w[a]),
                                                    v.hide()
                                            }
                                            , d = function () {
                                                setTimeout(function () {
                                                    o.shap[a].attr(w[a]),
                                                        v.hide()
                                                }, 5)
                                            };
                                        o.rects[a].hover(n, s),
                                            o.shap[a].hover(n, d)
                                    }
                                }(p, x, b, a.data[p])
                        }
                        break;
                    default:
                        var k = []
                            , _ = d.path().attr({
                                stroke: "#076ea8",
                                "stroke-width": 1
                            })
                            , M = a.invalid.length + 1
                            , H = new Array(M)
                            , S = new Array(M)
                            , W = 0;
                        this.path = new Array(M);
                        for (var p = 0, g = this.colNum; g > p; p++) {
                            var x = Math.round(m + s * (p + .5)) + .5
                                , b = Math.round(l * ((r - a.data[p]) / i) + h)
                                , N = Math.round(l * ((r - n) / i) + h);
                            if ("" == a.data[p])
                                W++;
                            else if ((0 == p || "" == a.data[p - 1]) && (S[W] = ["M", x, b, "L", x, b],
                                H[W] = ["M", x, N, "L", x, N]),
                                0 != p && "" != a.data[p + 1] && "" != a.data[p - 1]) {
                                var D = Math.round(l * (r - a.data[p - 1]) / i + h)
                                    , F = Math.round(m + s * (p - .5))
                                    , T = Math.round(l * (r - a.data[p + 1]) / i + h)
                                    , L = Math.round(m + s * (p + 1.5));
                                S[W] = S[W].concat(F, D, x, b, L, T),
                                    H[W] = H[W].concat(F, N, x, N, L, N)
                            }
                            if ("dot" == a.shap) {
                                var A;
                                "μg/m³" == e || "" == e ? A = a.data[p] <= 50 ? "#6ac6ce" : a.data[p] <= 100 ? "#78ba60" : a.data[p] <= 150 ? "#f4b212" : a.data[p] <= 200 ? "#e24e31" : a.data[p] <= 300 ? "#ce1c5b" : "#880b20" : "℃" == e ? a.data[p] < 0 ? A = "#6600CC" : a.data[p] >= 0 && a.data[p] <= 5 ? A = "#0000FF" : a.data[p] > 5 && a.data[p] <= 10 ? A = "#00CCFF" : a.data[p] > 10 && a.data[p] <= 15 ? A = "#008000" : a.data[p] > 15 && a.data[p] <= 24 ? A = "#FFCC00" : a.data[p] > 24 && a.data[p] <= 32 ? A = "#FF6600" : a.data[p] > 32 && (A = "#FF0000") : a.data[p] < 26 ? A = "#FF0000" : a.data[p] >= 26 && a.data[p] <= 51 ? A = "#FF6600" : a.data[p] > 51 && a.data[p] <= 75 ? A = "#008000" : a.data[p] > 75 && (A = "#6600CC"),
                                    A && k.push({
                                        fill: A,
                                        stroke: A,
                                        "stroke-width": 1
                                    }),
                                    this.shap.push(d.circle(x, f, u).attr(k[p]))
                            } else
                                0 == p && k.push({
                                    fill: "#6600CC",
                                    stroke: "#6600CC",
                                    "stroke-width": 1
                                }),
                                    this.shap.push(d.polygon(x, f, u).attr(k[0]));
                            "" == a.data[p] && this.shap[p].hide(),
                                "dot" == a.shap ? this.shap[p].animate({
                                    cy: b
                                }, 500).attr({
                                    cy: b
                                }) : this.shap[p].animate({
                                    transform: ["t0," + (-f + b) + "r" + (a.angle[p] - 180)]
                                }, 500),
                                function (t, i, r, n, s) {
                                    var d = function () {
                                        _.attr({
                                            path: ["M", i, 0, "V", o.height - 25, "M", 10, r + .5, "H", o.width]
                                        }).show(),
                                            v.html(s + n + e);
                                        var a = v.width()
                                            , t = i + 10;
                                        a + i > 660 && (t = i - a - 20),
                                            v.css({
                                                top: r,
                                                left: t
                                            }).show()
                                    }
                                        , l = function () {
                                            _.hide(),
                                                $(a.dataContainer).hide()
                                        }
                                        , h = function () {
                                            setTimeout(function () {
                                                _.hide(),
                                                    $(a.dataContainer).hide()
                                            }, 5)
                                        };
                                    "" != n && o.rects[t].hover(d, l),
                                        o.shap[t].hover(d, h)
                                }(p, x, b, a.data[p], a.desc && a.desc[p] || "")
                        }
                        for (var q = 0; M > q; q++)
                            H[q] && (this.path[q] = d.path(H[q]),
                                this.path[q].attr(this.pathStyle).hide(),
                                this.path[q].animate({
                                    path: S[q]
                                }, 470).show());
                        for (var I = 0, j = this.colNum; j > I; I++)
                            this.shap[I] && this.shap[I].toFront()
                }
            }
        }
    }
        , m = {
            width: 630,
            height: 270,
            leftgutter: 42,
            bottomgutter: 40,
            topgutter: 10,
            rightgutter: 10,
            rowNum: s,
            colNum: h.length,
            container: "hourHolder",
            date: h.date
        }
        , c = {
            shap: "rect",
            container: ".yLabel",
            dataContainer: ".showData",
            min: h.min.air,
            max: h.max.air,
            data: h.air,
            unit: "",
            invalid: h.invalid.air,
            step: h.step.air,
            r: 4
        };
    o.init(m),
        o.drawGraph(c);
    var p = h.length;
    $("#currHour"),
        $("#detailHour");
    var u = $("#hourHolder .result");
    i(h.air),
        $("#weatherChart .tabs ul li").hover(function () {
            var a = $(this).attr("class");
            a.length > 3 || $(this).attr("class", $(this).attr("data-role") + " " + a)
        }, function () {
            $(this).removeClass($(this).attr("data-role"))
        }).click(function () {
            var a = $(".aqiColorExp");
            if (!$(this).hasClass("on")) {
                var t = $(this).siblings(".on")
                    , r = $(this).attr("data-role");
                t.attr("data-role"),
                    t.attr("class", t.attr("class").replace("_on", "")).removeClass("on"),
                    $(this).attr("class", $(this).attr("class") + "_on").addClass("on"),
                    n.find(".split").children().filter("." + r).addClass("on").siblings().removeClass("on"),
                    u.hide();
                var s, l = h.invalid;
                switch (r) {
                    case "humidity":
                        $("#sd").show().siblings("b").hide(),
                            a.hide();
                        var p = h.humiditySum;
                        (isNaN(p) || 0 == p || e(l.humidity)) && (u.html("暂无数据").show(),
                            $(".split .humidity").hide()),
                            s = $.extend({}, c, {
                                shap: "dot",
                                min: h.min.humidity,
                                max: h.max.humidity,
                                data: h.humidity,
                                unit: "%",
                                invalid: l.humidity,
                                step: h.step.humidity
                            });
                        break;
                    case "tem":
                        $("#tem").show().siblings("b").hide(),
                            a.hide();
                        var f = h.temSum;
                        (isNaN(f) || e(l.tem)) && (u.html("暂无数据").show(),
                            $(".split .tem").hide()),
                            s = $.extend({}, c, {
                                shap: "dot",
                                min: h.min.tem,
                                max: h.max.tem,
                                data: h.tem,
                                unit: "℃",
                                invalid: l.tem,
                                step: h.step.tem
                            });
                        break;
                    case "air":
                        $("#wd").show().siblings("b").hide(),
                            i(h.air),
                            a.show();
                        var v = h.airSum;
                        (isNaN(v) || 0 == v || e(l.air)) && (u.html("暂无数据").show(),
                            $(".split .air").hide());
                        break;
                    case "rain":
                        $("#js").show().siblings("b").hide(),
                            i(h.rain);
                        var w = h.rainSum;
                        (isNaN(w) || 0 == w || e(l.rain)) && u.html("24小时内无降水数据").show(),
                            a.hide(),
                            s = $.extend({}, c, {
                                min: h.min.rain,
                                max: h.max.rain,
                                data: h.rain,
                                unit: "mm",
                                step: h.step.rain,
                                invalid: l.rain
                            });
                        break;
                    case "wind":
                        $("#fl").show().siblings("b").hide(),
                            a.hide();
                        var g = h.windSum;
                        (isNaN(g) || 0 == g || e(l.wind)) && (u.html("暂无数据").show(),
                            $(".split .wind").hide()),
                            s = $.extend({}, c, {
                                shap: "polygon",
                                min: h.min.wind,
                                max: h.max.wind,
                                data: h.windLevel,
                                angle: h.windAngle,
                                direction: h.windDirection,
                                desc: h.windDirection,
                                unit: "级",
                                invalid: l.wind,
                                step: h.step.wind,
                                r: 8
                            })
                }
                d.remove(),
                    o.init(m),
                    o.drawGraph(s || c),
                    $("#weatherChart .chart .detail").removeClass("detail"),
                    $("#weatherChart .chart").find("." + r).addClass("detail")
            }
        });
    var f = !1;
    $.each(a.od.od2, function (a, t) {
        t.od28 && (f = !0)
    }),
        f || $("#weatherChart [data-role=air]").hide().next().click()
}
function scrollx(a) {
    var t, i = document, e = i.documentElement, r = i.body, n = window, s = i.getElementById(a.id), d = /msie 6/i.test(navigator.userAgent);
    s && (s.style.cssText += ";position:" + (a.f && !d ? "fixed" : "absolute") + ";" + (void 0 == a.l ? "right:0;" : "left:" + a.l + "px;") + (void 0 != a.t ? "top:" + a.t + "px" : "bottom:0"),
        a.f && d ? (s.style.cssText += ";left:expression(documentElement.scrollLeft + " + (void 0 == a.l ? e.clientWidth - s.offsetWidth : a.l) + ' + "px");top:expression(documentElement.scrollTop +' + (void 0 == a.t ? e.clientHeight - s.offsetHeight : a.t) + '+ "px" );',
            e.style.cssText += ";background-image: url(about:blank);background-attachment:fixed;") : a.f || (n.onresize = n.onscroll = function () {
                clearInterval(t),
                    t = setInterval(function () {
                        var i, d = e.scrollTop || r.scrollTop;
                        i = d - s.offsetTop + (void 0 != a.t ? a.t : (n.innerHeight || e.clientHeight) - s.offsetHeight),
                            0 != i ? s.style.top = s.offsetTop + Math.ceil(Math.abs(i) / 10) * (0 > i ? -1 : 1) + "px" : clearInterval(t)
                    }, 10)
            }
            ))
}
define(function (require) {
    require("jquery"), require("j/tool/raphael");
    var a = $(".crumbs a:first").text()
        , t = $('<div class="send"><h1>我在<b>' + a + "</b>，现在看到的天空状况是：</h1>" + '<ul class="clearfix">' + "<li><i></i><span>A. 天空蔚蓝</span></li>" + '<li class="on"><i></i><span>B. 天空淡蓝</span></li>' + "<li><i></i><span>C. 天空阴沉</span></li>" + "<li><i></i><span>D. 天空灰霾</span></li>" + "</ul>" + '<i class="close"></i>' + '<input class="submit" type="button" value="提交">' + "</div>")
        , i = $('<div class="succ"><h1>收到啦~</h1><p>蓝天预报因你而更准</p><i class="img"></i></div>')
        , e = $('<div class="fb"><div class="fbm"></div><div class="bg"></div></div>');
    e.find(".fbm").append(t).append(i),
        $("body").append(e),
        location.href.match(/\d{9}/),
        e.find("li").click(function () {
            var a = $(this);
            a.addClass("on").siblings().removeClass("on")
        });
    var r = e.find(".close").bind("click", function () {
        e.hide(),
            t.css("display", "block")
    });
    $.getScript("http://wgeo.weather.com.cn/ip/"),
        e.find(".submit").click(function () {
            var i = e.find(".on").index() + 1;
            t.css("display", "none"),
                setTimeout(function () {
                    r.first().click()
                }, 1500);
            var n = new XMLHttpRequest;
            "withCredentials" in n || (n = new XDomainRequest),
                n.open("POST", "http://fb.weather.com.cn/getdata");
            var s = addr.split(",")[0] || null
                , d = '{ "ip":"' + ip + '","ip_city":"' + s + '","page_city":"' + a + '","raw_data":"' + $("#7d ul.t li:first").attr("class").match(/lv\d/)[0] + '","user_submit_data":"lv' + i + '"}';
            ip && a && s && n.send(d)
        }),
        $("#fb_sub").click(function () {
            var a = new Date
                , i = a.getMinutes()
                , r = a.getHours() + "时" + (10 > i && "0" + i || a.getMinutes()) + "分";
            t.find("em").text(r),
                e.show()
        });
    var n = {
        _getArrMax: function (a) {
            return Math.max.apply(Math, a) || null
        },
        _getArrMin: function (a) {
            return Math.min.apply(Math, a) || null
        },
        len: 0,
        arrTime: [],
        arrWeapic: [],
        arrWeaTxt: [],
        arrTem: [],
        arrWinf: [],
        arrWinl: [],
        _clearArr: function () {
            n.arrTime = [],
                n.arrWeapic = [],
                n.arrWeaTxt = [],
                n.arrTem = [],
                n.arrWinf = [],
                n.arrWinl = [],
                n.arrCircle = [],
                n.arrSky = []
        },
        _initWeaData: function (a) {
            n._clearArr(),
                $.each(a, function (a, t) {
                    var i = t.split(",");
                    n.arrTime.push(i[0].substr(3)),
                        n.arrWeapic.push(i[1]),
                        n.arrWeaTxt.push(i[2]),
                        n.arrTem.push(parseInt(i[3])),
                        n.arrWinf.push(i[4]),
                        n.arrWinl.push(i[5]),
                        n.arrSky.push(i[6])
                }),
                this.len = a.length;
            var t = n._getArrMin(n.arrTem)
                , i = n._getArrMax(n.arrTem);
            if (t != i)
                var e = (this.svgH - 20) / (i - t);
            else
                var e = (this.svgH - 20) / 1;
            this.cel_w = this.svgW / this.len;
            var r = [];
            $.each(n.arrTem, function (a) {
                var t = n.cel_w * a + n.cel_w / 2
                    , s = (i - n.arrTem[a]) * e + 9;
                n.arrCircle.push({
                    x: t,
                    y: s
                }),
                    r.push([t, s])
            }),
                this.svgPath = r.join(",")
        },
        svgW: 680,
        svgH: 70,
        cel_w: 0,
        svgPath: "",
        linePath: null,
        arrCircle: []
    }
        , s = $("#curve")
        , d = s.find(".time")
        , l = s.find(".wpic")
        , h = s.find(".winf")
        , o = s.find(".winl")
        , m = s.find(".tem")
        , c = "7d";
    n._initWeaData(hour3data[c][0]);
    for (var p = Raphael("biggt", n.svgW, n.svgH), u = p.path("M10,20").attr({
        stroke: "#f68227",
        "stroke-width": 2
    }), f = [], v = n.arrCircle[0].x, w = n.arrCircle[0].y, g = 0; g <= n.len - 1; g++) {
        d.append($('<em style="width:' + n.cel_w + "px;left:" + n.cel_w * g + 'px">' + n.arrTime[g] + "</em>"));
        var y = n.arrWinf[g]
            , x = n.arrWinl[g];
        if ("微风" == x)
            var y = "微风"
                , x = "<3级";
        h.append($('<em style="width:' + n.cel_w + "px;left:" + n.cel_w * g + 'px">' + y + "</em>")),
            o.append($('<em style="width:' + n.cel_w + "px;left:" + n.cel_w * g + 'px">' + x + "</em>"));
        var b = n.arrCircle[g].x
            , C = n.arrCircle[g].y;
        f.push(p.circle(v, w, 4).attr({
            fill: "#f68227",
            stroke: "#f68227",
            cx: b,
            cy: C
        })),
            m.append($('<em style="width:' + n.cel_w + "px;left:" + n.cel_w * g + "px;top:" + (C + 70) + 'px">' + n.arrTem[g] + "℃</em>")),
            l.append($('<div style="width:' + n.cel_w + "px;left:" + n.cel_w * g + "px;top:" + 30 + 'px"><big title="' + n.arrWeaTxt[g] + '" class="png40 ' + n.arrWeapic[g] + " lv" + n.arrSky[g] + '"></big></div>'))
    }
    u.attr({
        path: "M" + n.svgPath
    }),
        $("#7d>ul.t>li").click(function () {
            function a(a, t) {
                if ("change" == t) {
                    var i = n.arrCircle[a].x
                        , c = n.arrCircle[a].y;
                    e.eq(a).length ? e.eq(a).show().text(n.arrTem[a] + "℃").animate({
                        top: c + 70 + "px",
                        left: n.cel_w * a,
                        width: n.cel_w + "px"
                    }, 500) : m.append($('<em style="width:' + n.cel_w + "px;left:1000px;top:" + (c + 70) + 'px">' + n.arrTem[a] + "℃</em>").animate({
                        left: n.cel_w * a
                    }, 500));
                    var u = $("#sky-on").hasClass("off") && "none" || " "
                        , y = n.arrSky[g] && "sky lv" + n.arrSky[g] || " ";
                    r.eq(a).length ? r.eq(a).show().html('<big title="' + n.arrWeaTxt[a] + '" class="png40 ' + n.arrWeapic[g] + " " + y + " " + u + '"></big>').animate({
                        top: c + 30 + "px",
                        left: n.cel_w * g,
                        width: n.cel_w + "px"
                    }, 500) : l.append($('<div style="width:' + n.cel_w + "px;left:" + 1e3 + "px;top:" + (c + 30) + 'px"><big title="' + n.arrWeaTxt[a] + '" class="png40 ' + n.arrWeapic[a] + " " + y + " " + u + '"></big></div>').animate({
                        left: n.cel_w * a + "px"
                    }, 500)),
                        s.eq(a).length ? s.eq(a).show().text(n.arrTime[a]).animate({
                            left: n.cel_w * a,
                            width: n.cel_w + "px"
                        }, 500) : d.append($('<em style="width:' + n.cel_w + "px;left:" + 1e3 + 'px">' + n.arrTime[a] + "</em>").animate({
                            left: n.cel_w * a + "px"
                        }, 500));
                    var x = n.arrWinf[a]
                        , b = n.arrWinl[a];
                    if ("微风" == b)
                        var x = "微风"
                            , b = "<3级";
                    v.eq(a).length ? v.eq(a).show().text(x || "").animate({
                        left: n.cel_w * a,
                        width: n.cel_w + "px"
                    }, 500) : h.append($('<em style="width:' + n.cel_w + "px;left:" + 1e3 + 'px">' + x + "</em>").animate({
                        left: n.cel_w * a + "px"
                    }, 500)),
                        w.eq(a).length ? w.eq(a).show().text(b || "").animate({
                            left: n.cel_w * a,
                            width: n.cel_w + "px"
                        }, 500) : o.append($('<em style="width:' + n.cel_w + "px;left:" + 1e3 + 'px">' + b + "</em>").animate({
                            left: n.cel_w * a + "px"
                        }, 500)),
                        f[a] ? f[a].animate({
                            cy: c,
                            cx: i
                        }, 500) : f.push(p.circle(1e3, c, 4).attr({
                            fill: "#f68227",
                            stroke: "#f68227"
                        }).animate({
                            cx: i
                        }, 500))
                } else
                    "delete" == t ? f[a].animate({
                        cx: 1e3
                    }, 500) : alert("style属性设置错误")
            }
            var t = $(this);
            t.addClass("on").siblings("li").removeClass("on");
            var i = t.index();
            n._initWeaData(hour3data[c][i]);
            var e = m.children().hide()
                , r = l.find("div").hide()
                , s = d.children().hide()
                , v = h.children().hide()
                , w = o.children().hide();
            if (f.length > n.len) {
                for (var g = 0; g <= n.len - 1; g++)
                    a(g, "change");
                for (var g = n.len; g <= f.length - 1; g++)
                    a(g, "delete");
                u.animate({
                    path: "M" + n.svgPath
                }, 500)
            } else {
                for (var g = 0; g <= n.len - 1; g++)
                    a(g, "change");
                u.animate({
                    path: "M" + n.svgPath
                }, 500)
            }
        }),
        $("#sky-on").click(function () {
            var a = $(this)
                , t = a.children("i");
            a.hasClass("off") ? t.stop(!0, !0).animate({
                left: "0px"
            }, function () {
                a.removeClass("off"),
                    $("#7d .skyid").addClass("sky"),
                    l.find("big").removeClass("none")
            }) : t.stop(!0, !0).animate({
                left: "18px"
            }, function () {
                a.addClass("off"),
                    $("#7d .skyid").removeClass("sky"),
                    l.find("big").addClass("none")
            })
        }).next().hover(function () {
            $(this).next().show()
        }, function () {
            $(this).next().hide()
        });
    var k = $(".livezs .li3");
    $.each(k, function (a, t) {
        var i = $(t).find("i");
        switch ($(t).find("span").text()) {
            case "舒适":
                i.addClass("v2");
                break;
            case "较舒适":
                i.addClass("v2");
                break;
            case "较冷":
                i.addClass("v2");
                break;
            case "冷":
                i.addClass("v3");
                break;
            case "寒冷":
                i.addClass("v3")
        }
    }),
        setAirData(observe24h_data),
        $("#weatherChart>.tabs>h2>span").live("click", function () {
            "0" == $(this).attr("data-n") ? ($("#weatherChart .chart").show(),
                $("#weatherChart>.tabs>ul").show(),
                $("#weatherChart>.tabs i").css("left", "52px"),
                $("#weatherChart .sevenDay").hide()) : ($("#weatherChart .chart").hide(),
                    $("#weatherChart>.tabs>ul").hide(),
                    $("#weatherChart>.tabs i").css("left", "184px"),
                    $("#weatherChart .sevenDay").show())
        });
    for (var s = $(".sevenDay"), _ = s.find("ul.f"), M = _.find("li"), H = [], S = [], W = 0, N = 100, D = $("#7d>ul.t>li"), g = D.length - 1; g >= 0; g--) {
        var F = D.eq(g)
            , T = F.find("p.tem")
            , L = T.find("span").text().replace(/^(\s|\xA0)+|(\s|\xA0)+$/g, "")
            , A = T.find("i").text().replace(/^(\s|\xA0)+|(\s|\xA0)+$/g, "")
            , q = parseInt(L)
            , I = parseInt(A);
        if (!q && 0 != q)
            var q = I;
        if (!I && 0 != I)
            var I = q;
        if (K = F.find("big:first").attr("class").match(/d\d{2}/) || " ",
            P = F.find("big:last").attr("class").match(/n\d{2}/) || " ",
            parseInt(q) < parseInt(I))
            var j = q
                , q = I
                , I = j
                , z = L
                , L = A
                , A = z
                , E = K
                , K = P
                , P = E;
        var G = " " == K && " " || '<big class="png30 ' + K + '"></big>'
            , R = " " == P && " " || '<big class="png30 ' + P + '"></big>';
        s.children("ul.f").children("li:eq(" + g + ")").find("p:first").html(L).after(G),
            s.children("ul.f").children("li:eq(" + g + ")").find("p:last").html(A).before(R);
        var O = s.children("ul.d").children("li:eq(" + g + ")").children(".c")
            , X = F.find("h1").text();
        O.html(X.match(/[\u4e00-\u9fa5]{2}/g)[0]),
            H.unshift(q),
            S.unshift(I),
            W = q > W ? q : W,
            N = N > I ? I : N
    }
    for (var Y = Math.ceil(W / 5) + 1, U = N % 5, U = Math.ceil(N / 5) - 2, g = M.length - 1; g >= 0; g--) {
        if (!H[g] && 0 != H[g])
            var H = S;
        if (!S[g] && 0 != S[g])
            var S = H;
        var B = 12 * (5 * Y - H[g])
            , Q = H[g] - S[g]
            , Q = Q > 0 ? Q : -1 * Q;
        M.eq(g).css("marginTop", B + "px").find(".zc").height(12 * Q - 20)
    }
    for (var V = "", Z = "", g = Y; g >= U; g--)
        V += "<li></li>",
            Z += "<li>" + 5 * g + "°C</li>";
    var J = Y - U;
    s.children("ul.b1").empty().append(V).children("li:last").css({
        "border-left": "none",
        "border-right": "none"
    }).parent("ul").next(".b2").empty().append(Z),
        s.children("ul.d").css("top", 60 * J + 15 + "px"),
        $("#7d .btn em").click(function () {
            var a = $(this)
                , t = a.index();
            a.addClass("on").siblings().removeClass("on"),
                $(".curve_livezs").eq(t).show().siblings(".curve_livezs").hide()
        }),
        $("#7d>ul.t>li").click(function () {
            var a = $(this)
                , t = a.index();
            $("#livezs>div").removeClass("show").eq(t).addClass("show")
        }),
        $("#abs p img").click(function () {
            $("#abs").hide()
        }),
        $("#adposter_6287 p img").click(function () {
            $(".adposter_6287").hide()
        })
}),
    scrollx({
        id: "adposter_6287",
        l: 0,
        t: 100,
        f: 1
    }),
    scrollx({
        id: "abs",
        r: 0,
        b: 0,
        f: 1
    });
