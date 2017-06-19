/**
 * Created by hyylsw on 2017/5/10.
 */
$(function () {
    //监听滚动条的滚动
    (function(){
        var cur=0;
        $(window).scroll(function (event) {
            var windPos=$(window).scrollTop();
            //500---ssp
            if(cur!=0 && (windPos>500 && windPos<1000)){
                cur=0;
            }else if(cur!=1 && (windPos>1400 && windPos<1600)){
                cur=1;
            }else if(cur!=2 && (windPos>2255 && windPos<2600)){
                cur=2;
            }else if(windPos==$(document).height()-$(window).height()){
                cur=2;
            }else if(windPos==0){
                cur=0;
            }
            var navArr=[535,1538,2499];
            for(var i=0;i<navArr.length;i++){
                if(navArr[i]==windPos){
                    cur=i;
                    break;
                }
            }
            $(".nav-box>a").removeClass("current");
            $(".nav-box>a").eq(cur).addClass("current");
        });
    })();
    //广告样式轮播
    (function () {
        var timer=null;
        count=0;
        timer=setInterval(function () {
            count++;
            if(count==5){
                count=0;
                $("#dev-ads-list").css({left:0});
            }else{
                $("#dev-ads-list").animate({left:-300*count},500);
            }
        },2000);
    })();

    $(".dev-nav-box>a").on("click",function () {
        console.log('------------');
        $(this).siblings("a").removeClass("current");
        $(this).addClass("current");
    });
});