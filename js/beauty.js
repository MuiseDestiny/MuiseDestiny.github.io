function getXYbyIP() {
    var url = "https://api.map.baidu.com/location/ip?ak=HQi0eHpVOLlRuIFlsTZNGlYvqLO56un3&coor=bd09ll"
    $.ajax({
        url: url,
        type: 'POST',
        dataType: 'JSONP',
        async: false,
        cache: true,
        success: function (data) {
            province = data['content']['address_detail']['province'].replace('省', '')
            city = data['content']['address_detail']['city'].replace('市', '')
            // 策略1 直接找字典
            cityData = city_data[province][city][city]
            if (city == undefined) {
                // 不存在
                $("input").val(`${city}-${province}`)
                complete(city)
            } else {
                // 刷新
                refresh(cityData.AREAID)
                // 输入框
                $("input").val(`${city}-${province}`)
            }
        }
    });
}
getXYbyIP()
function complete(cityName) {
    $.ajax({
        type: "GET",
        url: "http://toy1.weather.com.cn/search?cityname=" + cityName.split("-")[0],
        dataType: "jsonp",
        success: function (reponse) {
            clearSuggestion() // 再次清除
            max_li = (reponse.length > 6) ? 6 : reponse.length
            if (max_li == 0) {
                $(".autocomplete-suggestions ul").append($("<li><strong style='color: deeppink; font-size: 14px;'>未查询到" + cityName + "</strong></li>").css('text-align', 'center'))
            }
            for (var i = 0; i < max_li; i++) {
                let data = {}
                data = reponse[i]['ref'].split('~')
                let set = new Set([data[2], data[4], data[9]])
                inputStr = Array.from(set).join("-") // 转化为列表
                var Li = $("<li code='" + data[0] + "' index='" + i + "'" + ">" + inputStr + "</li>").click(
                    function () {
                        $("input").val(this.innerHTML)
                        refresh($(this).attr('code'), clearSuggestion)
                    }
                ).mouseenter(function () {
                    $(".autocomplete-suggestions li[selected]").removeAttr('selected') // 清除原来
                    $(this).attr('selected', 'selected') // 设为选区
                })
                $(".autocomplete-suggestions ul").append(Li)
            }
            $(".autocomplete-suggestions").show()
        }
    })
}

function max(arr) {
    return Math.max.apply(null, arr);
}
function min(arr) {
    return Math.min.apply(null, arr);
}
function drawOneLine(data, side) {
    d = "M"
    circleGroupStr = ""
    arrPoints = new Array()
    maxTem = max(data)
    minTem = min(data)
    for (var i = 0; i < data.length; i++) {
        cx = String(i * 270 + 135)
        cy = String(45 - (parseInt(data[i]) - minTem) / (maxTem - minTem) * 40)
        arrPoints.push(cx + " " + cy)
        circleGroupStr += `<circle cx="${cx}" cy="${cy}" r="4"/>\n`
    }
    d += arrPoints.join(" L ")
    // 让起闭合 
    d += (side == "LineTop") ? (" V 50 H 135") : (" V 0 H 135")
    // 温度
    $(".weather-boxes-window").append($('<svg class="' + side + '" height="50px" width="1620px">' +
        '<path  d="' + d + '" stroke="black" fill="white" fill-opacity="0.23"/>\n' +
        '<g stroke="white" stroke-width="2" fill="deeppink" fill-opacity="0.8">' + circleGroupStr + '</g>' +
        '<tspan cx="135" cy="10">12</tspan>' + '</svg>'))
}
function drawOneCurve(data, side) {
    d = "M 135 0"
    padding = 5
    arrStrPoints = new Array()
    _arrStrPoints = new Array()
    arrPoints = new Array()
    maxTem = max(data)
    minTem = min(data)
    for (var i = 0; i < data.length; i++) {
        cx = String(i * 270 + 135)
        cy = String((50 - padding * 2) - (parseInt(data[i]) - minTem) / (maxTem - minTem) * (50-padding*2) + padding)
        arrStrPoints.push(cx + " " + cy)
        _arrStrPoints.push(cx + " " + ((side == "curveTop") ? "50" : "0"))
        arrPoints.push([cx, cy])
    }
    var initd = String(["M 135 0 L", _arrStrPoints[0], "R"].concat(_arrStrPoints.slice(1))) + String((side == "curveTop") ? (" V 50 H 135") : (" V 0 H 135"))
    var finald = String(["M 135 0 L", arrStrPoints[0], "R"].concat(arrStrPoints.slice(1))) + String((side == "curveTop") ? (" V 50 H 135") : (" V 0 H 135"))
    // Raphael 库绘制R曲线
    // 添加div容器
    figure = $(`<div class="curve" id="${side}"></div>`)[0]
    $(".weather-boxes-window").append(figure)
    raphaelObj = Raphael(figure, 1620, 50)
    let path = raphaelObj.path(initd).attr({
        stroke: "transparent",
        fill: "white",
        "fill-opacity": "0.5"
    })
    // 添加点
    let temPoints = []
    let temY = []
    initY = (side == "curveBottom") ? -10 : 60 // 偏移10防止露出来
    for (var i in arrPoints) {
        x = arrPoints[i][0]
        y = Number(arrPoints[i][1])
        let point = raphaelObj.circle(x, initY, 4).attr(
            {
                stroke: "none",
                fill: "white",
                "fill-opacity": "0.8"
            }
        )
        temPoints.push(point)
        temY.push(y)
        offset = 15
        if (y <= 25) {
            y += offset
        } else { y -= offset }
        raphaelObj.text(x, y, `${data[i]}` + "℃").attr(
            {
                fill: "white",
                "font-size": "14px",
            }
        )
    }
    animatePointsUp(temY, temPoints, path, finald, side)
}
function animatePointsUp(arrY, ele, path, finald, side) {
    // 搜索点上升
    // ele = $(`#${side}`).find('circle')
    for (var i in ele) {
        ele[i].animate({
            cy: arrY[i]
        }, 332, "ease-in")
    }
    path.animate({
        path: finald,
    }, 332, "ease-out")

}
function animatePointsDown(arrY) {
    // 搜索点下降

}
function drawLine(temJson) {
    let dataDay = temJson['dayTem']
    let dataNight = temJson['nightTem']
    // 纯直线
    // drawOneLine(dataDay, 'LineTop')
    // drawOneLine(dataNight, 'LineBottom')
    // 曲线
    drawOneCurve(dataDay, 'curveTop')
    drawOneCurve(dataNight, 'curveBottom')
}
/* 全局变量 */
var elementJson
function refresh(cityCode, callback = null) {
    $.ajax({
        type: "GET",
        url: "https://service-6pwmc8ox-1256272652.bj.apigw.tencentcs.com/getWeatherInfo?cityCode=" + cityCode,
        dataType: "jsonp",
        jsonpCallback: "jQuery",
        success: function (reponse) {
            elementJson = reponse;
            console.log(elementJson)
            var weatherInfoList = $(".weather-info");
            var day = $(".day-info .day");
            var week = $(".day-info .week");
            for (var i = 0; i < weatherInfoList.length; i++) {
                $(weatherInfoList[i]).empty() // 清空区域
                $(weatherInfoList[i]).attr('class', "weather-info " + elementJson[i]['sky'])
                $(elementJson[i]['wea'].replace('</span>/<i>', '</span>&nbsp;to&nbsp;<i>')).appendTo(weatherInfoList[i])
                day[i].innerHTML = elementJson[i]['day']
                week[i].innerHTML = elementJson[i]['week']
            }
            // 删除 figure和原本文字描述
            $(".tem").empty()
            $(".curve").remove()
            // 开始绘制 svg
            drawLine({
                dayTem: elementJson['temperate']['eventDay'].slice(1, -1),
                nightTem: elementJson['temperate']['eventNight'].slice(1, -1)
            })
            $("li:contains('气温')").click()
        }
    })
    if (callback != null) callback()
}
/* 清楚并隐藏建议 */
function clearSuggestion() {
    $(".autocomplete-suggestions").hide()
    $(".autocomplete-suggestions ul").empty()
}
/* 文档加载完执行函数内容 */
var almanacData
/* 默认点击第一个 */
$('.weather-type li').click(function() {
    offsetMenuBorder(this)
}
)
/* 鼠标放上去 */
$(".weather-box").hover(function() {
    // $(".tem *").show()
    $("svg path").animate({
        "fill-opacity": "0"
    }, 123, "linear")
}, $(".weather-box").onmouseout = function () {
    // $(".tem *").hide()
    $("svg path").animate({
        "fill-opacity": "0.5"
    }, 123, "linear")
})
/* 搜索图标绑定 */
$(".search img").bind('click', function () {
    console.log('正在查询' + $("input").val());
    var reg = /\d{,9}\W{0,1}/i
    var cityCode = $("input").val()
    if (!reg.test(cityCode) | (cityCode.length != 9)) {
        complete(cityCode)
    }
    else {
        refresh(cityCode);
    }
})
/* 实现自动补全 */
// 回车弹出
var lastValue = ''
$(".autocomplete-suggestions").hide()
$("input").blur(function () {
    setTimeout(clearSuggestion, 600)
})
$("input").bind('keydown', function (event) {
    if (event.which == '40' | event.which == '38') {
        return false
    }
})
$("input").bind('keyup', function (event) {
    var inputStr = $("input").val().split("  ")[0].replace(' ', '') // 防止用户输入空格策略
    // 空值清楚
    if (inputStr == '') {
        clearSuggestion()
    } else if (inputStr != lastValue) {
        console.log(inputStr)
        // 清除现存内容
        clearSuggestion()
        // 获取数据
        complete(inputStr)
        lastValue = inputStr
    } else if (event.keyCode == "40" | event.keyCode == "38") {
        // 判断是否有弹框选择
        if (($(".autocomplete-suggestions").css('display') == "block") && ($(".autocomplete-suggestions li").length > 0)) {
            let selectLi = $(".autocomplete-suggestions li[selected]")
            if (selectLi.length) {
                step = (event.keyCode == "40") ? 1 : -1
                let currentIndex = Number(selectLi.attr('index'))
                selectLi.removeAttr('selected')
                let max_li = $(".autocomplete-suggestions li").length
                if ((currentIndex + step) < max_li & (currentIndex + step) >= 0) {
                    nextIndex = currentIndex + step
                } else if ((currentIndex + step) >= max_li) {
                    nextIndex = 0
                } else if ((currentIndex + step) < 0) {
                    nextIndex = max_li - 1
                }
                $(".autocomplete-suggestions li[index=" + String(nextIndex) + "]").attr('selected', 'selected')
            } else { $(".autocomplete-suggestions li[index=0]").attr('selected', 'selected') }

        }
    } else if (event.keyCode == "13") { // 回车
        // 选中元素
        let selectLi = $(".autocomplete-suggestions li[selected]")[0]
        console.log(selectLi)
        console.log($(selectLi).attr('code'))
        refresh($(selectLi).attr('code'))
        $("input").val(selectLi.innerHTML)
        clearSuggestion()
    }
})
/* 老黄历 */
// Ajax请求数据 请求后全局变量被赋值
var today = new Date()
function getAndSetAlmanac(almanacDiv, dateList) {
    // 格式化时间
    console.log(dateList.join('-'))
    $.ajax({
        type: "GET",
        url: "http://tools.2345.com/api/almanac/" + dateList[0] + "/" + dateList.join('-') + ".js",
        dataType: "jsonp",
        jsonpCallback: "Tools.almanac",
        error: function (e) {
            setAlmanac(almanacDiv)
        }
    })
}
// 实现虚假 Tools ps：被迫这么些，因为要跨域，就得满足人家的条件
Tools = {
    almanac: function (data) {
        almanacData = data['day']
        console.log(almanacData)
    }
}
function setAlmanac(almanacDiv) {
    // 添加主要部件：农历，图标
    $('<div class="almanac-top"><h1>{yinli}</h1></div>\
    <div class="almanac-bottom">\
    <div class= "good-box" ><img src="img/yi.png" alt="宜">\
    <ul></ul>\
    </div>\
    <div class="bad-box"><img src="img/ji.png" alt="忌">\
    <ul></ul>\
    </div>\
    </div>'.replace('{yinli}', almanacData.yinli)).appendTo(almanacDiv)
    // 宜
    let goodList = almanacData['yi'].split(' ')
    let badList = almanacData['ji'].split(' ')
    for (var i = 0; i < goodList.length; i++) {
        let goodThing = goodList[i]
        if (huangli.hasOwnProperty(goodThing)) {
            tip = huangli[goodThing]
        } else {
            tip = '顾名思义'
        }
        $(almanacDiv).find('.good-box ul').append($('<li title="' + tip + '">' + goodList[i] + '</li>'))
    }
    // 忌
    for (var i = 0; i < badList.length; i++) {
        let badThing = badList[i]
        if (huangli.hasOwnProperty(badThing)) {
            tip = huangli[badThing]
        } else {
            tip = '顾名思义'
        }
        $(almanacDiv).find('.bad-box ul').append($('<li title="' + tip + '">' + badList[i] + '</li>'))
    }
}
// 点击日期弹出，绑定事件
let dayInfos = $(".day-info")
for (var i = 0; i < dayInfos.length; i++) {
    // 绑定双击事件
    $(dayInfos[i]).dblclick(function () {
        // 用户双击日期
        // 判断div下是否存在黄历box
        var almanacDiv = $(this).prev().children('.almanac-box')
        if (almanacDiv.length == 0) {
            $('.curve').hide()
            // 不存在则创建div 并更新almanacDiv的值
            almanacDiv = $('<div class="almanac-box"></div>').appendTo($(this).prev())[0]
            $(almanacDiv).animate({ bottom: '+=100%', height: '+=100%' }, 456)
            // 计算标签日期
            var year = today.getFullYear() // 年不会有大变化
            console.log(year)
            var day = $(this).children('span.day')[0].innerHTML
            var month = (Number(day) >= today.getDate()) ? (today.getMonth() + 1) : today.getMonth() + 2 // 月也不会有太大变化
            var dateList = [String(year), month >= 10 ? String(month) : ('0' + month), day >= 10 ? String(day) : ('0' + day)]
            getAndSetAlmanac(almanacDiv, dateList) // 获取
        } else {
            $('.curve').show()
            // 有则去除
            almanacDiv = almanacDiv[0]
            $(almanacDiv).animate({ opacity: '0' }, 321, function () {
                almanacDiv.remove('.almanac-box')
            })
        }
    })
}
/* 绘图底部 */
function getDataMaxPointNumber(data) {
    maxPointNumber = 0
    for (var i = 0; i < data.length; i++) {
        if (data[i].length >= maxPointNumber) {
            maxPointNumber = data[i].length
        }
    }
    return maxPointNumber
}
const maxPointNumber = 25
const pixelX = 911*2.5
const pixelY = 275
const padTopBottom = 80
const paper = Raphael("charts", pixelX, pixelY)
const liBox = $("#charts ul")
var padLeftRight
var temLine = null
var circles = []
var temTextList = []
const style = {
    "气温": {
        unit: "℃",
        lineColor: "#f5c0c0",
        pointColor: "#ff8585"
    },
    "空气质量": {
        unit: "",
        lineColor: "#94ebcd",
        pointColor: "#16c79a"
    },
    "湿度": {
        unit: "%",
        lineColor: "#ffd66b",
        pointColor: "#ff9d72"
    },
    "降水": {
        unit: "mm",
        lineColor: "#aee1e1",
        pointColor: "#75cfb8"
    }
}
// 注册颜色
if (window.CSS) {
    if (CSS.registerProperty){
    CSS.registerProperty({
        name: "--end-color",
        syntax: "<color>",
        inherits: false,
        initialValue: "transparent"
    })}
}
/* 点击移动 */
function offsetMenuBorder(activeLi) {
    // 获取标签相对ul位置
    const pad = 12
    const left = $(activeLi).position().left - pad
    const width = $(activeLi)[0].getBoundingClientRect().width + pad * 2
    const menuBorder = $(".slide")
    if (menuBorder.css("display") == "none") {
        // 不参在元素,创建
        menuBorder.css({
            left: left + "px",
            width: width + "px"
        })
        menuBorder.show()
    } else {
        menuBorder.animate({
            left: left + "px",
            width: width + "px"
        }, 333)
    }
    // 改变背景颜色
    $(".weather-type ul").css({ 
        "background-color": style[activeLi.innerHTML].pointColor,
        "-webkit-transition": "background-color 1s"})
    // body动画
    const element = document.getElementsByTagName('body')[0]
    element.style.setProperty('--end-color', style[activeLi.innerHTML].pointColor)
    $("body").css("cssText", `--end-color: ${style[activeLi.innerHTML].pointColor};`)
}
function drawDetailLine(X, Y, style) {
    // {unit, lineColor, pointColor}
    let maxY = max(Y)
    let minY = min(Y)
    let intervalX = pixelX / (X.length)
    padLeftRight = intervalX / 2
    let realPixelX = pixelX - padLeftRight * 2
    let realPixelY = pixelY - padTopBottom * 2
    let strXY = []
    let pointXY = []
    for (var i=0;i<X.length;i++) {
        pointX = Number(padLeftRight + intervalX * i)
        if (maxY-minY) {
            pointY = pixelY - Number(padTopBottom + realPixelY * (Number(Y[i]) - minY) / (maxY - minY))
        } else {
            pointY = pixelY - padTopBottom
        }
        strXY.push(
            `${pointX} ${pointY}`
        )
        pointXY.push([pointX, pointY])
    }
    let d = String(["M", strXY[0], "R"].concat(strXY.slice(1)))
    if (temLine != null) {
        temLine.animate({
                path: d,
                stroke: style.lineColor
        }, 450)
        
    } else {
        temLine = paper.path(d).attr({
            stroke: "pink",
            "stroke-width": "4",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
        })
        // 创建点
        var i = 0
        while (i < maxPointNumber) {
            initPointX = Number(padLeftRight + intervalX * i)
            initPointY = Number(pixelY*1.1) // 使它隐藏
            circle = paper.circle(
                initPointX, initPointY, 6
            ).attr({
                stroke: "none",
                fill: style.pointColor
            })
            circles.push(circle)
            i++
        }
    }
    // 点动画
    for (var i in Y) {
        circles[i].animate({
            cx: pointXY[i][0],
            cy: pointXY[i][1],
            fill: style.pointColor
        }, 450)
    }
    var i = Y.length
    while (i < maxPointNumber) {
        // initPointX = Number(pad + intervalX * i)
        initPointY = Number(pixelY * 1.1) // 使它隐藏
        circles[i].animate({
            // cx: initPointX,
            cy: initPointY,
            fill: style.pointColor
        }, 450)
        i++
    }
    // 添加标注
    // 先隐藏
    for (var i in temTextList) {
        temTextList[i].animate({
            "fill-opacity": 0
        }, 300)
    }
    setTimeout(function() {
        $("#charts svg text").remove()
    }, 300)
    temTextList = []
    setTimeout(function() {
        for (var i in Y) {
        if (style.unit == "mm" && Y[i] == 0) {
            continue
        }
        e = 20
        temText = paper.text(pointXY[i][0], pointXY[i][1] + e, `${Y[i]}` + style.unit).attr({
            "font-size": "18px",
            "fill": style.pointColor,
            "fill-opacity": 0
        }).animate({
            "fill-opacity": 1
        }, 450, "linear")
        temTextList.push(temText)
    }
    }, 500)
    // 绘制悬停标注
    liBox.css({
        width: pixelX + "px"
    })
    liBox.empty()
    for (var i in X) {
        let li = $(`<li>${X[i]}</li>`)
        li.css({
            "background-color": style.lineColor
        })
        li.mouseover(function () {
            li.animate({
                opacity: 0.5,
                "padding-top": "20px"
            }, 350, "linear")
        })
        li.mouseout(function() {
            li.animate({
                opacity: 0,
                "padding-top": "0px"
            }, 350, "linear")
        })
        liBox.append(li)
    }
}
var change = function (data, index) {
    // current data
    currentData = data[index]
    let temX = []
    let temY = []
    for (var i in currentData) {
        temY.push(currentData[i]['jb'])
        temX.push(currentData[i]['jf'].slice(8))
    }
    drawDetailLine(temX, temY, style['气温'])
    
}
/* 绑定天气双击事件 */
$(".weather-info").bind("dblclick", (function () {
    index = $(this).parent().index()
    change(elementJson['hourData'], index)
    offsetMenuBorder($("li:contains('气温')")[0])
}))
$("li:contains('气温')").click(function () {
    change(elementJson['hourData'], 0)
    $('.slide').attr('value', '气温')
})
/* 空气质量 */
$("li:contains('空气质量')").click(function () {
    let airX = []
    let airY = []
    data = elementJson['observe24h_data']["od"]["od2"]
    i = 24
    while (i >= 0) {
        airX.push(data[i]['od21'].slice())
        airY.push(Number(data[i]['od28']))
        i--
    }
    drawDetailLine(airX, airY, style['空气质量'])
    $('.slide').attr('value', '空气质量')
})
/* 湿度 */
$("li:contains('湿度')").click(function () {
    let humidityX = []
    let humidityY = []
    data = elementJson['observe24h_data']["od"]["od2"]
    i = 24
    while (i >= 0) {
        humidityX.push(data[i]['od21'])
        humidityY.push(Number(data[i]['od27']))
        i--
    }
    drawDetailLine(humidityX, humidityY, style['湿度'])
    $('.slide').attr('value', '湿度')
})
/* 降水 */
$("li:contains('降水')").click(function () {
    let preX = []
    let preY = []
    data = elementJson['observe24h_data']["od"]["od2"]
    i = 24
    while (i >= 0) {
        preX.push(data[i]['od21'])
        preY.push(Number(data[i]['od26']))
        i--
    }
    console.log(preY)
    drawDetailLine(preX, preY, style['降水'])
    $('.slide').attr('value', '降水')
})
// 鼠标滚动
$(".weather-boxes-window").niceScroll({
    cursorcolor: "#ccc",//#CC0071 光标颜色
    cursoropacitymax: 1, //改变不透明度非常光标处于活动状态（scrollabar“可见”状态），范围从1到0
    touchbehavior: false, //使光标拖动滚动像在台式电脑触摸设备
    cursorwidth: "8px", //像素光标的宽度
    cursorborder: "0", // 游标边框css定义
    cursorborderradius: "5px",//以像素为光标边界半径
    autohidemode: true
})
$("#charts").niceScroll({
    cursorcolor: "#ccc",//#CC0071 光标颜色
    cursoropacitymax: 1, //改变不透明度非常光标处于活动状态（scrollabar“可见”状态），范围从1到0
    touchbehavior: true, //使光标拖动滚动像在台式电脑触摸设备
    cursorwidth: "5px", //像素光标的宽度
    cursorborder: "0", // 游标边框css定义
    cursorborderradius: "5px",//以像素为光标边界半径
    autohidemode: true //是否隐藏滚动条
})
$("#charts").getNiceScroll().hide()