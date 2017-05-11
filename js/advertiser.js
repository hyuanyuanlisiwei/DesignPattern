/**
 * Created by hyylsw on 2017/5/4.
 */
$(function () {
    //轮播图;
    adverTurns();
    $(".adver-nav-box a").on("click",function () {
        $(this).siblings("a").removeClass("current");
        $(this).addClass("current");
    });
});
var adverCount=2;
function adverTurns() {
    var imgsList=$("#adver-case-turns");
    var next=$("#next");
    var prev=$("#prev");
    var width=1000;
    var maxWidth=width*3;
    prev.on("click",function () {
        adverCount--;
        if(adverCount<0){
            adverCount=2;
        }
        animateAd();
    });
    next.on("click",function () {
        adverCount++;
        if(adverCount>2){
            adverCount=0;
        }
        animateAd();
    });
    function animateAd() {
        imgsList.animate({left:-adverCount*width});
    }
}