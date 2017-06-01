/**
 * Created by hyylsw on 2017/6/1.
 */
$(function () {
    //监听滚动条的滚动
    (function(){
        var cur=0;
        $(window).scroll(function (event) {
            var windPos=$(window).scrollTop();
            console.log(windPos);
            //500---ssp
            if(cur!=0 && (windPos>0 && windPos<20)){
                cur=0;
            }else if(cur!=1 && (windPos>430 && windPos<450)){
                cur=1;
            }else if(windPos==$(document).height()-$(window).height()){
                cur=1;
            }else if(windPos==0){
                cur=0;
            }
            $(".nav-box>a").removeClass("current");
            $(".nav-box>a").eq(cur).addClass("current");
        });
    })();
});