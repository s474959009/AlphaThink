fnDropmenu = function (b, a) {
    b.hover(function () {
        $(this).addClass(a).find(".dropdown").stop(true, true).slideDown(200);
        if ($(this).parent().hasClass("sysmenulist") && $(this).addClass(a).find(".dropdown").size() > 0) {
            $("#js-mesg").hide()
        }
    },
    function () {
        $(this).removeClass(a).find(".dropdown").hide();
    })
};

function f() {
    var h = document.documentElement || document.body;
    if (document.documentElement.clientHeight < document.body.offsetHeight) {
        $("#footer").removeClass("fixedfooter")
    } else {
        $("#footer").addClass("fixedfooter")
    }
}

$(function () {
    fnDropmenu($('#header li'), 'navhover');  //导航菜单实现
    $(window).scroll(function () {
        f();
        $(document).scrollTop() > 1000 ? $("#backtotop").show().die().live("click",
        function () {
            $("body,html").animate({
                scrollTop: 0
            },
            500)
        }) : $("#backtotop").hide()
    });
});
