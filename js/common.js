/**
 * Created by hyylsw on 2017/4/25.
 */
$(function () {
    currentNav();
    var hash=window.location.hash;
    if(hash){
       scroll(hash);
    }
});
//滚动到指定位置
function  scroll(hash) {
    var name=hash.slice(1);
    $("html,body").animate({
        scrollTop:$("a[name='"+name+"']").offset().top
    },1000);
}
function currentNav() {
    var pathname=window.location.pathname;
    pathname=pathname.slice(pathname.lastIndexOf('/'));
    var hash=window.location.hash;
    var current=0;
    switch (pathname){
        case "/index.html":
        case "/":
            current=0;
            break;
        case "/developer.html":
            current=1;
            break;
        case "/advertiser.html":
            current=2;
            break;
        case "/agent.html":
            current=3;
            break;
        case "/brief.html":
            current=4;
            break;
        case "/recruit.html":
            current=5;
            break;
        case "/cooperate.html":
            current=5;
            break;
    }
    $(".navbar-nav>li").removeClass("current").eq(current).addClass("current");
}
