﻿//document.write('Copyright <span title="WEB-22-32-143">©</span>2012 在郑大 zzufor.com All Rights Reserved.&nbsp;&nbsp;技术支持&nbsp;&nbsp;AlphaThink&nbsp;&nbsp;');
(function () {
    var f = document, g = window, l = navigator, o = location, m = screen, h = encodeURIComponent, i = decodeURIComponent, j = "https:" == document.location.protocol ? "https:" : "http:", n = function () {
        this.siteid = "4467039"; this.pic = ""; this.lpic = "none"; this.NR = j + "//c.cnzz.com/cnzz_core.php"; this.online = ""; this.cookiemax = 2048; this.error_log = "_CNZZ_error_log"; this.server_now = "1346672481"; this.move_server = "g26.cnzz.com";
        this.init()
    }; n.prototype = { init: function () {
        this.getAllSubCookies(); this.cnzzed = new Date; this.now = parseInt(this.cnzzed.getTime()); this.cnzzed.setTime(this.now + 157248E5); this.rt = parseInt(this.getSubCookiePart("rtime")) || 0; this.lt = this.getSubCookiePart("ltime") || this.now; this.lt = parseInt(this.lt); this.domain = this.getDomain() || ""; this.subCookieParts = []; if (this.domain) this.domain = "." + this.domain; if (1E6 > this.lt) this.rt = this.lt = 0; 1 > this.rt && (this.rt = 0); this.getAllPara(); this.bridgename = "_CNZZDbridge_" + this.siteid;
        g[this.bridgename] = g[this.bridgename] || {}
    }, getAllPara: function () { this.getReferer(); this.getLG(); this.getRepeatIP(); this.getRtime(); this.getShowp(); this.getSin(); this.getSt(); this.getRes(); this.getLt(); this.getLvTime() }, getReferer: function () { this.refer = f.referrer || ""; this.refer = h(this.refer) }, getLG: function () { this.lg = l.systemLanguage || l.language; this.lg = this.lg.toLowerCase() }, getRepeatIP: function () {
        var a = new Date, c = new Date, b = this.getSubCookiePart("cnzz_a"); if (null === b) b = 0; else {
            var d = this.getSubCookiePart("retime") ||
this.now, d = parseInt(d); a.setTime(d); c.setTime(this.now); a.getDate() != c.getDate() ? b = 0 : b++
        } this.repeatip = b
    }, getRtime: function () { 432E5 < this.now - this.lt && 0 < this.lt && this.rt++ }, getShowp: function () { this.showp = m.width + "x" + m.height }, getSt: function () { this.st = parseInt((this.now - this.lt) / 1E3) }, getLt: function () { var a = this.getSubCookiePart("ltime") || this.now; this.lt = a = parseInt(a) }, getSin: function () { this.sin = this.getSubCookiePart("sin") || "none"; i(this.refer).split("/")[2] != f.domain && (this.sin = this.refer) }, getRes: function () {
        this.res =
0
    }, getCNZZeid: function () { this.eid = this.getSubCookiePart("cnzz_eid") || "none" }, getLvTime: function () { this.ntime = this.getSubCookiePart("ntime") || "none" }, requestNext: function () {
        var a = this.NR + "?web_id=" + this.siteid; this.pic && (a += "&show=" + this.pic); this.online && (a += "&online=" + this.online); this.lpic && (a += "&l=" + this.lpic); if ("none" == this.pic || 0 == this.lpic) {
            var c = f.createElement("script"); c.type = "text/javascript"; c.async = !0; c.src = a; c.charset = "utf-8"; a = f.getElementsByTagName("script")[0]; a.parentNode.insertBefore(c,
a)
        } else f.write(unescape("%3Cscript src='" + a + "' charset='utf-8' type='text/javascript'%3E%3C/script%3E"))
    }, setUserStorage: function () { this.setRepeatIP(); this.setRetime(); this.setSin(); this.setLtime(); this.setRtime(); this.setSubCookieValue() }, setRepeatIP: function () { this.setCookiePart("cnzz_a", this.repeatip) }, setRetime: function () { this.setCookiePart("retime", this.now) }, setSin: function () { this.setCookiePart("sin", this.sin) }, setRtime: function () { this.setCookiePart("rtime", this.rt) }, setLtime: function () {
        this.setCookiePart("ltime",
this.now)
    }, setCNZZeid: function (a) { this.setCookiePart("cnzz_eid", this.getSubCookiePart("cnzz_eid") || Math.floor(1E8 * Math.random()) + "-" + a + "-" + this.refer) }, setLVTime: function (a) { this.setCookiePart("ntime", a) }, getSubCookiePart: function (a) { return this.subcookies ? this.subcookies[a] || null : null }, getAllSubCookies: function () {
        var a = "CNZZDATA" + this.siteid + "=", c = f.cookie.indexOf(a), b = null, d = {}; if (-1 < c) {
            b = f.cookie.indexOf(";", c); if (-1 == b) b = f.cookie.length; b = f.cookie.substring(c + a.length, b); if (0 < b.length) {
                a = b.split("&");
                c = 0; for (b = a.length; c < b; c++) { var e = a[c].split("="); d[i(e[0])] = i(e[1]) } this.subcookies = d
            } 
        } else this.subcookies = null
    }, setCookiePart: function (a, c) { a = a.toString(); c = c.toString(); this.subCookieParts.push(h(a) + "=" + h(c)) }, setSubCookieValue: function () { var a = "CNZZDATA" + this.siteid + "="; 0 < this.subCookieParts.length ? (this.checkCookieParts(), a += this.subCookieParts.join("&"), a += "; expires=" + this.cnzzed.toUTCString(), a += "; path=/") : a += "; expires=" + (new Date(0)).toUTCString(); f.cookie = a; this.subCookieParts = [] }, checkCookieParts: function () {
        for (var a =
0, c = 0, b = this.subCookieParts.length; c < b; c++) a += this.subCookieParts[c].length; a > this.cookiemax - 4 && this.rebuildCookieParts(a)
    }, getDomain: function () { var a = (o.hostname + "/").match(/[\w-]+\.(com|net|org|gov|edu|mil|cc|biz|name|info|mobi|cn|int|pro|museum|coop|aero|xxx|idv)(\.(cn|hk|jp|tw|kr|mo))*\//ig); if (a) { if (0 < a.length) return a[0].substr(0, a[0].length - 1) } else return !1 }, addHandler: function (a, c, b) { a.addEventListener ? a.addEventListener(c, b, !1) : a.attachEvent ? a.attachEvent("on" + c, b) : a["on" + c] = b }, removeHandler: function (a,
c, b) { a.removeEventListener ? a.removeEventListener(c, b, !1) : a.detachEvent ? a.detachEvent("on" + c, b) : a["on" + c] = null }, rebuildCookieParts: function (a) { var c = this.subCookieParts[0], b = this.subCookieParts[2], a = a - (this.cookiemax - 4), d = c.length - 512; 0 < d ? (this.subCookieParts[1] = c.substr(0, 512), a > d && (this.subCookieParts[2] = b.substr(0, this.sin.length - (a - d)))) : this.subCookieParts[2] = b.substr(0, b.length - a) }, callScript: function (a) {
    for (var c = a.length, b = 0; b < c; b++) if (a[b][0]) if ("none" == this.pic || 0 == this.lpic) {
        var d = f.createElement("script");
        d.type = "text/javascript"; d.async = !0; d.charset = a[b][0]; d.src = a[b][1]; var e = f.getElementsByTagName("script")[0]; e.parentNode.insertBefore(d, e)
    } else f.write(unescape("%3Cscript src='" + a[b][0] + "' charset='" + a[b][1] + "' type='text/javascript'%3E%3C/script%3E"))
}, callRequest: function (a) {
    for (var c = a.length, b = null, d = 0; d < c; d++) if (a[d]) b = "cnzz_image_" + Math.floor(2147483648 * Math.random()), g[b] = new Image, g[b].cnzzname = b, g[b].onload = g[b].onerror = g[b].onabort = function () {
        try {
            this.onload = this.onerror = this.onabort =
null, g[this.cnzzname] = null
        } catch (a) { } 
    }, g[b].src = a[d] + "&rnd=" + Math.floor(2147483648 * Math.random())
}, createIcon: function (a) { for (var c = a.length, b = 0; b < c; b++) a[b] && f.write(unescape(a[b])) }, sendData: function () {
    this.move_server && this.callRequest([j + "//g26.cnzz.com/stat.htm?id=4467039&r=" + this.refer + "&lg=" + this.lg + "&ntime=" + this.ntime + "&repeatip=" + this.repeatip + "&rtime=" + this.rt + "&cnzz_eid=" + this.eid + "&showp=" + this.showp + "&st=" + this.st + "&sin=" + this.sin + "&res=" + this.res]); this.callRequest([j +
"//hzs20.cnzz.com/stat.htm?id=4467039&r=" + this.refer + "&lg=" + this.lg + "&ntime=" + this.ntime + "&repeatip=" + this.repeatip + "&rtime=" + this.rt + "&cnzz_eid=" + this.eid + "&showp=" + this.showp + "&st=" + this.st + "&sin=" + this.sin + "&res=" + this.res])
} 
    }; try { var e = new n; e.setCNZZeid(e.server_now); e.setLVTime(e.server_now); e.setUserStorage(); e.getAllSubCookies(); e.getCNZZeid(); e.sendData(); g[e.bridgename].bobject = e; e.requestNext() } catch (k) {
        g[e.error_log] = g[e.error_log] || [], g[e.error_log].push(k.fileName +
"|" + k.lineNumber + "|" + k.message)
    } 
})();