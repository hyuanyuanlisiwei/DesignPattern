function sendEmail(){$("#submitBtn").on("click",function(){var e=$("#name").val(),n=$("#email").val(),t=$("#content").val(),r="name="+e+"&email="+n+"&content="+t;$.ajax({url:"http://admin.f2time.com/mail/mailToBP",dataType:"jsonp",type:"POST",data:r,success:function(e){alert("发送成功")}})})}function adverTurns(){function e(){function e(){adverCount++,adverCount>3&&(adverCount=0),n.animate({left:-adverCount*a},1e3),$(".adver-img-title").html(adverTitleList[adverCount])}o=setInterval(e,2e3)}var n=$("#adver-imgs"),t=$("#adver-next"),r=$("#adver-prev"),a=250,o=null;$(".adver-img-box").mouseover(function(){clearInterval(o),o=null}),$(".adver-img-box").mouseout(function(){e()}),r.on("click",function(){adverCount--,adverCount<0&&(adverCount=3),n.animate({left:-adverCount*a},500),$(".adver-img-title").html(adverTitleList[adverCount])}),t.on("click",function(){adverCount++,adverCount>3&&(adverCount=0),n.animate({left:-adverCount*a},500),$(".adver-img-title").html(adverTitleList[adverCount])}),e()}function videoTurns(){function e(){function e(){videoCurrent++,3==videoCurrent&&(videoCurrent=0),n.animate({left:-videoCurrent*r},1e3),t.removeClass("current").eq(videoCurrent).addClass("current")}a=setInterval(e,15e3)}var n=$("#video-ad-imgs"),t=$(".video-ad-btns .btn"),r=500,a=null,o=$("#video-prev"),i=$("#video-next");$(".video-ad-img-box").mouseover(function(){clearInterval(a),a=null}),$(".video-ad-img-box").mouseout(function(){e()}),o.on("click",function(){videoCurrent--,videoCurrent<0&&(videoCurrent=2),n.animate({left:-videoCurrent*r},1e3),t.removeClass("current").eq(videoCurrent).addClass("current")}),i.on("click",function(){videoCurrent++,videoCurrent>2&&(videoCurrent=0),n.animate({left:-adverCount*r},500),t.removeClass("current").eq(videoCurrent).addClass("current")}),e()}$(function(){adverTurns(),videoTurns(),sendEmail()});var adverCount=0,adverTitleList=["banner广告","开屏广告","信息流广告","贴片广告"],videoCurrent=0;