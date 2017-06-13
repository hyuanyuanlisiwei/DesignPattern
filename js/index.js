/**
 * Created by hyylsw on 2017/5/2.
 */
$(function () {
    //轮播图;
    adverTurns();
    videoTurns();
    //发送邮件
    sendEmail();

});
function sendEmail() {
    $("#submitBtn").on("click",function () {
        var name=$("#name").val();
        var email=$("#email").val();
        var content=$("#content").val();
        var data="name="+name+"&email="+email+"&content="+content;
        $.ajax({
            url:"http://admin.f2time.com/mail/mailToBP",
            dataType:"jsonp",
            type:"POST",
            data:data,
            success:function (html) {
                alert("发送成功");
            }
        });
    });
}

var adverCount=0;
var adverTitleList=["banner广告","开屏广告","信息流广告","贴片广告"];
function adverTurns() {
    var imgsList=$("#adver-imgs");
    var next=$("#adver-next");
    var prev=$("#adver-prev");
    var width=250;
    var maxWidth=width*4;
    var timer=null;
    var title='';
    $(".adver-img-box").mouseover(function () {
        clearInterval(timer);
        timer=null;
    });
    $(".adver-img-box").mouseout(function () {
        startTimer();
    });
    function startTimer() {
        timer=setInterval(animate,2000);
        function animate() {
            adverCount++;
            if(adverCount==5){
                adverCount=0;
                imgsList.css({left:-250});
            }else{
                imgsList.animate({left:-(adverCount+1)*width},1000);
            }
            title=adverTitleList[adverCount];
            if(!adverTitleList[adverCount]){
                title=adverTitleList[0];
            }
            $(".adver-img-title").html(title);
        }
    }
    prev.on("click",function () {
        adverCount--;
        if(adverCount<0){
            adverCount=3;
            imgsList.css({left:-(adverCount+1)*width});
        }else{
            imgsList.animate({left:-(adverCount+1)*width},500);
        }
        title=adverTitleList[adverCount];
        if(!title){
            title=adverTitleList[0];
        }
        $(".adver-img-title").html(title);
    });
    next.on("click",function () {
        adverCount++;
        if(adverCount==5){
            adverCount=1;
            imgsList.css({left:-500});
        }else{
            imgsList.animate({left:-(adverCount+1)*width},500);
        }
        title=adverTitleList[adverCount];
        if(!title){
            title=adverTitleList[0];
        }

        $(".adver-img-title").html(title);
    });
    //设置定时器
    startTimer();
}
var videoCurrent=0;
function videoTurns() {
    var imgsList=$("#video-ad-imgs");
    var btns=$(".video-ad-btns .btn");
    var width=500;
    var timer=null;
    var prev=$("#video-prev");
    var next=$("#video-next");

    $(".video-ad-img-box").mouseover(function () {
        clearInterval(timer);
        timer=null;
    });
    $(".video-ad-img-box").mouseout(function () {
        startTimer();
    });
    function startTimer() {
        timer=setInterval(animate,5000);
        function animate() {
            videoCurrent++;
            if(videoCurrent==3){
                videoCurrent=0;
            }
            imgsList.animate({left:-videoCurrent*width},1000);
            btns.removeClass("current").eq(videoCurrent).addClass("current");
        }
    }
    prev.on("click",function () {
        videoCurrent--;
        if(videoCurrent<0){
            videoCurrent=2;
        }
        imgsList.animate({left:-videoCurrent*width},1000);
        btns.removeClass("current").eq(videoCurrent).addClass("current");
    });
    next.on("click",function () {
        videoCurrent++;
        if(videoCurrent>2){
            videoCurrent=0;
        }
        imgsList.animate({left:-videoCurrent*width},500);
        btns.removeClass("current").eq(videoCurrent).addClass("current");
    });
    startTimer();
}


