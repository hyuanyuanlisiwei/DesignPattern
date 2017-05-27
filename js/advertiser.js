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
var adverCount=0;
function adverTurns() {
    var imgsList=$("#adver-case-turns");
    var next=$("#next");
    var prev=$("#prev");
    var width=1000;
    var maxWidth=width*3;
    var timer=null;

    prev.mouseover(function () {
        clearInterval(timer);
        timer=null;
    });
    prev.mouseleave(function () {
        startTimer();
    });
    next.mouseover(function () {
        clearInterval(timer);
        timer=null;
    });
    next.mouseleave(function () {
        startTimer();
    });

    function startTimer() {
       timer=setInterval(function () {
           adverCount++;
           if(adverCount>2){
               adverCount=0;
           }
           imgsList.animate({left:-adverCount*width},500);
       },2000);
    }
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
        imgsList.animate({left:-adverCount*width},500);
    }
    startTimer();
}