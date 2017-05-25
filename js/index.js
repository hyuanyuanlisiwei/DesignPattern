/**
 * Created by hyylsw on 2017/5/2.
 */
$(function () {
    //轮播图;
    adverTurns();
    videoTurns();


});
var adverCount=0;
function adverTurns() {
    var imgsList=$("#adver-imgs");
    var next=$("#adver-next");
    var prev=$("#adver-prev");
    var width=250;
    var maxWidth=width*3;
    prev.on("click",function () {
        adverCount--;
        if(adverCount<0){
            adverCount=2;
        }
        imgsList.animate({left:-adverCount*width});
    });
    next.on("click",function () {
        adverCount++;
        if(adverCount>2){
            adverCount=0;
        }
        imgsList.animate({left:-adverCount*width});
    });
}
var videoCurrent=0;
function videoTurns() {
    var imgList=$("#video-ad-imgs");
    var btns=$(".video-ad-btns .btn");
    var width=500;
    var timer=setInterval(animate,2000);
    function animate() {
       videoCurrent++;
       if(videoCurrent==3){
           videoCurrent=0;
       }
       imgList.animate({left:-videoCurrent*width});
       btns.removeClass("current").eq(videoCurrent).addClass("current");
    }
}


