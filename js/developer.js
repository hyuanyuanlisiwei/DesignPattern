/**
 * Created by hyylsw on 2017/5/10.
 */
$(function () {
    $(".dev-nav-box a").on("click",function () {
        $(this).siblings("a").removeClass("current");
        $(this).addClass("current");
    });

    //监听滚动条的滚动
    (function(){
        var cur=0;
        $(window).scroll(function (event) {
            var windPos=$(window).scrollTop();
            console.log(windPos);
            //500---ssp
            if(cur!=0 && (windPos>500 && windPos<520)){
                cur=0;
            }else if(cur!=1 && (windPos>1000 && windPos<1020)){
                cur=1;
            }else if(windPos==$(document).height()-$(window).height()){
                cur=1;
            }else if(windPos==0){
                cur=0;
            }
            var navArr=[535,1210];
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
});