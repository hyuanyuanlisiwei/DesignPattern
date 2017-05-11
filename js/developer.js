/**
 * Created by hyylsw on 2017/5/10.
 */
$(function () {
    $(".dev-nav-box a").on("click",function () {
        $(this).siblings("a").removeClass("current");
        $(this).addClass("current");
    });
});