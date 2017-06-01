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
    // 监听滚动条的滚动
    (function () {
        var cur=0;
        $(window).scroll(function (event) {
            var windPos=$(window).scrollTop();
            console.log(windPos);

            if(cur!=0 && (windPos>500 && windPos<520)){
                cur=0;
            }else if(cur!=1 && (windPos>1000 && windPos<1020)){
                cur=1;
            }else if(cur!=2 && (windPos>1500 && windPos<1520)){
                cur=2;
            }else if(cur!=3 && (windPos>2000 && windPos<2020)){
                cur=3;
            }else if(cur!=4 && (windPos>2500 && windPos<2520)){
                cur=4;
            }else if(windPos==$(document).height()-$(window).height()){
                cur=4;
            }else if(windPos==0){
                cur=0;
            }

            var navArr=[535,1206,1786,2417,3067];
            for(var i=0;i<navArr.length;i++){
                if(navArr[i]==windPos){
                    cur=i;
                    break;
                }
            }
            $(".nav-box>a").removeClass("current");
            $(".nav-box>a:eq("+cur+")").addClass("current");
        });
    })();
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