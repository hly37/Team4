$().ready(function(){
	$(".swiper-wrapper").css({
		width:$(window).width(),
		height:$(window).height()
	});
	var Imgss = [];
	var Imgs = [
		"img/1983nian.png",
		"img/2015chuangxiang.png",
		"img/36ke.png",
		"img/36kr.png",
		"img/aqy.png",
		"img/bg-5.png",
		"img/bg2-2.png",
		"img/bg2.png",
		"img/bg4.png",
		"img/cei.png",
		"img/centerdain.png",
		"img/change-the-world.png",
		"img/change15.png",
		"img/chong.png",
		"img/click.png",
		"img/dadan.png",
		"img/dare-to.png",
		"img/dian-1.png",
		"img/dian-2.png",
		"img/dore-1.png",
		"img/dore-2.png",
		"img/dore.png",
		"img/dream.png",
		"img/end-1.png",
		"img/end-2.png",
		"img/end-3.png",
		"img/fenxiang.png",
		"img/guangban.png",
		"img/huanjiangtou.png",
		"img/huaxian.png",
		"img/huojiangtiming.png",
		"img/jianje-1.png",
		"img/jianje-10.png",
		"img/jianje-2.png",
		"img/jianje-3.png",
		"img/jianje-4.png",
		"img/jianje-5.png",
		"img/jianje-6.png",
		"img/jianje-7.png",
		"img/jianje-8.png",
		"img/jianje-9.png",
		"img/jiantou.png",
		"img/jieshao-1.png",
		"img/jieshao-2.png",
		"img/jieshao-3.png",
		"img/jieshao-4.png",
		"img/jieshao-5.png",
		"img/jieshao-6.png",
		"img/jieshao-7.png",
		"img/jieshao-8.png",
		"img/kuai-1.png",
		"img/kuai-10.png",
		"img/kuai-2.png",
		"img/kuai-3.png",
		"img/kuai-4.png",
		"img/kuai-5.png",
		"img/kuai-6.png",
		"img/kuai-7.png",
		"img/kuai-8.png",
		"img/kuai-9.png",
		"img/lengkuai-1.png",
		"img/lengkuai-10.png",
		"img/lengkuai-11.png",
		"img/lengkuai-12.png",
		"img/lengkuai-13.png",
		"img/lengkuai-14.png",
		"img/lengkuai-15.png",
		"img/lengkuai-16.png",
		"img/lengkuai-17.png",
		"img/lengkuai-18.png",
		"img/lengkuai-19.png",
		"img/lengkuai-2.png",
		"img/lengkuai-20.png",
		"img/lengkuai-3.png",
		"img/lengkuai-4.png",
		"img/lengkuai-5.png",
		"img/lengkuai-6.png",
		"img/lengkuai-7.png",
		"img/lengkuai-8.png",
		"img/lengkuai-9-1.png",
		"img/lengkuai-9-2.png",
		"img/lengkuai-9-3.png",
		"img/lengkuai-9-4.png",
		"img/lengkuai-9-5.png",
		"img/lengkuai-9-6.png",
		"img/lengkuai-9.png",
		"img/letter-1.png",
		"img/letter-10.png",
		"img/letter-11.png",
		"img/letter-12.png",
		"img/letter-13.png",
		"img/letter-14.png",
		"img/letter-15.png",
		"img/letter-16.png",
		"img/letter-2.png",
		"img/letter-3.png",
		"img/letter-4.png",
		"img/letter-5.png",
		"img/letter-6.png",
		"img/letter-7.png",
		"img/letter-8.png",
		"img/letter-9.png",
		"img/lianhezhuban.png",
		"img/liuxing1.png",
		"img/liuxing2.png",
		"img/liuxing3.png",
		"img/maker.png",
		"img/men.png",
		"img/music-end.png",
		"img/music-start.png",
		"img/next.png",
		"img/pic-3.png",
		"img/pic3-.png",
		"img/pic3-1-1.png",
		"img/pic3-1.png",
		"img/pic3-10-1.png",
		"img/pic3-2.png",
		"img/pic3-3.png",
		"img/pic3-4.png",
		"img/quxian.png",
		"img/rentou-1.png",
		"img/rentou-2.png",
		"img/rentou-3.png",
		"img/rentou-4.png",
		"img/rentou-5.png",
		"img/rentou-6.png",
		"img/rentou-7.png",
		"img/rentou-8.png",
		"img/sanbu.png",
		"img/sb1.png",
		"img/sb10.png",
		"img/sb2.png",
		"img/sb3.png",
		"img/sb4.png",
		"img/sb5.png",
		"img/sb6.png",
		"img/sb7.png",
		"img/sb8.png",
		"img/sb9.png",
		"img/shijian.png",
		"img/tamen.png",
		"img/tamen2.png",
		"img/wangzhi.png",
		"img/xaingyao.png",
		"img/xian-more.png",
		"img/xiaoyou-1.png",
		"img/xiaoyou-2.png",
		"img/xiaoyou-3.png",
		"img/xiaoyou-4.png",
		"img/xiaoyou-5.png",
		"img/xiaoyou-6.png",
		"img/yibei.png",
		"img/yichang.png",
		"img/yigaibian.png",
		"img/yijian.png",
		"img/yinhang.png",
		"img/yinying.png",
		"img/yiye.png",
		"img/zhanlue.png",
		"img/zhongguowangluo.png",
		"img/zhubanfang.png",
		"img/zuanshi.gif",
		"img/earth/1.jpg",
		"img/earth/10.jpg",
		"img/earth/11.jpg",
		"img/earth/12.jpg",
		"img/earth/13.jpg",
		"img/earth/14.jpg",
		"img/earth/15.jpg",
		"img/earth/16.jpg",
		"img/earth/17.jpg",
		"img/earth/18.jpg",
		"img/earth/19.jpg",
		"img/earth/2.jpg",
		"img/earth/20.jpg",
		"img/earth/21.jpg",
		"img/earth/22.jpg",
		"img/earth/23.jpg",
		"img/earth/24.jpg",
		"img/earth/25.jpg",
		"img/earth/26.jpg",
		"img/earth/27.jpg",
		"img/earth/28.jpg",
		"img/earth/29.jpg",
		"img/earth/3.jpg",
		"img/earth/30.jpg",
		"img/earth/31.jpg",
		"img/earth/32.jpg",
		"img/earth/33.jpg",
		"img/earth/34.jpg",
		"img/earth/35.jpg",
		"img/earth/36.jpg",
		"img/earth/37.jpg",
		"img/earth/38.jpg",
		"img/earth/39.jpg",
		"img/earth/4.jpg",
		"img/earth/40.jpg",
		"img/earth/41.jpg",
		"img/earth/42.jpg",
		"img/earth/43.jpg",
		"img/earth/44.jpg",
		"img/earth/45.jpg",
		"img/earth/46.jpg",
		"img/earth/47.jpg",
		"img/earth/5.jpg",
		"img/earth/6.jpg",
		"img/earth/7.jpg",
		"img/earth/8.jpg",
		"img/earth/9.jpg"
	];
	var n = 0;
	var xianshi = 0;
	for(var i = 0;i < Imgs.length; i++){
		Imgss[i] = new Image();
		Imgss[i].src = Imgs[i];
		(function(i){
			Imgss[i].onload = function(){
				n++;
				xianshi = parseInt((n/Imgs.length)*100);
				$(".jindutiao .tiao p").html(xianshi + "%");
				if(n >= Imgs.length){
					$(".jindutiao").hide();
				}
			}
		})(i);
	}
	
	$("#music")[0].play();
	var time = null;
	var flag = true;
	var mySwiper = new Swiper(".swiper-container",{
		mousewheelControl:true,
		direction : 'vertical',
		onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
		    swiperAnimateCache(swiper); //隐藏动画元素 
		    swiperAnimate(swiper); //初始化完成开始动画
		}, 
		onSlideChangeEnd: function(swiper){ 
		    swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
		    if(swiper.activeIndex == 0){
		    	clearInterval(time);
		    }
		    if(swiper.activeIndex == 1){
		    	var n = 0;
		    	clearInterval(time);
		    	time = setInterval(function(){
		    		n++;
		    		if(n > 47){
		    			n = 0;
		    		}
					$(".earth-box img").eq(n).show().siblings().hide();
		    	},100);
			}
		    if(swiper.activeIndex == 2){
		    	clearInterval(time);
		    	$(".slide4 .rt-bg img").show();
		    }
		    if(swiper.activeIndex == 3){
		    	$(".slide5 .img-box img,.slide5 .shadow img").hide();
		    	$(".slide5 .img-box img").eq(0).css({top:"82.5%",left:"70%"});
		    	$(".slide5 .img-box img").eq(1).css({top:"87.5%",left:"23.5%"});
		    	$(".slide5 .img-box img").eq(2).css({top:"60.5%",left:"80.5%"});
		    	$(".slide5 .img-box img").eq(3).css({top:"67.5%",left:"47.5%"});
		    	$(".slide5 .img-box img").eq(4).css({top:"61.5%",left:"6.5%"});
		    	$(".slide5 .img-box img").eq(5).css({top:"46%",left:"58%"});
		    	$(".slide5 .img-box img").eq(6).css({top:"42%",left:"30.5%"});
		    	$(".slide5 .img-box img").eq(7).css({top:"26.5%",left:"8%"});
		    	$(".slide5 .img-box img").eq(8).css({top:"26.5%",left:"83%"});
		    	$(".slide5 .img-box img").eq(9).css({top:"22%",left:"54.5%"});
		    	$(".slide4 .rt-bg img").show();
		    	var n = 0;
		    	$(document).on("touchstart",function(){
		    		$(".slide4 .text-box .cli").hide();
		    	});
		    	$(".slide4 .ava-box .rt-bg").on("touchstart",function(){
		    		$(".slide4 .rt-bg img").hide();
		    		$(".slide4 .rt-bg").animate({width:"0.5rem",height:"0.5rem"},1000);
		    		n = $(this).index();
		    		var m = -3.75*(n+1);
		    		$(".slide4 .outer").css({
		    			marginLeft:m+"rem",
		    		});
		    		$(".dt-js").show();
		    
		    	})
		    	$(".dt-js .next").on("touchstart",function(){
		    		n++;
		    		if(n>7){
		    			n = 0;
		    		}
		    		var m = -3.75*(n+1);
		    		$(".slide4 .outer").css({
		    			marginLeft:m+"rem",
		    		})
		    	});
		    	$(".dt-js .prev").on("touchstart",function(){
		    		n--;
		    		if(n<=0){
		    			n = 7;
		    		}
		    		var m = -3.75*(n+1);
		    		$(".slide4 .outer").css({
		    			marginLeft:m+"rem",
		    		})
		    	});
		    	$(".end-3").on("touchstart",function(){
					$(".dt-js").addClass("zoomOut");
					time = setTimeout(function(){
						$(".dt-js").removeClass("zoomOut");
						$(".dt-js").hide();
					},1500);
		    		$(".slide4 .rt-bg").animate({width:"1.5rem",height:"1.5rem"},1000,function(){
		    			$(".slide4 .rt-bg img").show();
		    		})
		    	})
		    }
		    if(swiper.activeIndex == 4){
		    	clearInterval(time);
		    	$(".slide4 .rt-bg img").show();
		    	setTimeout(function(){$(".slide5 .shadow img:eq(0)").show();$(".slide5 .img-box img:eq(0)").show().animate({top: "80.5%",left: "67%"},1000,function(){$(this).css({top: "80.5%",left: "67%"})});},500);
		    	setTimeout(function(){$(".slide5 .shadow img:eq(1)").show();$(".slide5 .img-box img:eq(1)").show().animate({top: "85.5%",left: "20.5%"},1000,function(){$(this).css({top: "85.5%",left: "20.5%"})});},1000);
		    	setTimeout(function(){$(".slide5 .shadow img:eq(2)").show();$(".slide5 .img-box img:eq(2)").show().animate({top: "58.5%",left: "77.5%"},1000,function(){$(this).css({top: "58.5%",left: "77.5%"})});},1500);
		    	setTimeout(function(){$(".slide5 .shadow img:eq(3)").show();$(".slide5 .img-box img:eq(3)").show().animate({top: "65.5%",left: "44.5%"},1000,function(){$(this).css({top: "65.5%",left: "44.5%"})});},2000);
		    	setTimeout(function(){$(".slide5 .shadow img:eq(4)").show();$(".slide5 .img-box img:eq(4)").show().animate({top: "59.5%",left: "3.5%"},1000,function(){$(this).css({top: "59.5%",left: "3.5%"})});},2500);
		    	setTimeout(function(){$(".slide5 .shadow img:eq(5)").show();$(".slide5 .img-box img:eq(5)").show().animate({top: "44%",left: "55%"},1000,function(){$(this).css({top: "44%",left: "55%"})});},3000);
		    	setTimeout(function(){$(".slide5 .shadow img:eq(6)").show();$(".slide5 .img-box img:eq(6)").show().animate({top: "40%",left: "27.5%"},1000,function(){$(this).css({top: "40%",left: "27.5%"})});},3500);
		    	setTimeout(function(){$(".slide5 .shadow img:eq(7)").show();$(".slide5 .img-box img:eq(7)").show().animate({top: "24.5%",left: "5%"},1000,function(){$(this).css({top: "24.5%",left: "5%"})});},4000);
		    	setTimeout(function(){$(".slide5 .shadow img:eq(8)").show();$(".slide5 .img-box img:eq(8)").show().animate({top: "24.5%",left: "80%"},1000,function(){$(this).css({top: "24.5%",left: "80%"})});},4500);
		    	setTimeout(function(){$(".slide5 .shadow img:eq(9)").show();$(".slide5 .img-box img:eq(9)").show().animate({top: "20%",left: "51.5%"},1000,function(){$(this).css({top: "20%",left: "51.5%"})});},5000);
		    	$(document).on("touchstart",function(){$(".slide5 .text-box .cli").hide()});
		    	$(".slide5 .img-box img").on("touchstart",function(){
		    		$(".slide5 .bi-box .box-im img").eq($(this).index()).show().siblings().hide();
		    		$(".slide5 .bi-box").show();
		    	})
		    	$(".slide5 .bi-box .box-end img").on("touchstart",function(){
		    		$(".slide5 .bi-box").hide();
		    	})
		    }
		    if(swiper.activeIndex == 5){
		    	$(".slide5 .img-box img,.slide5 .shadow img").hide();
		    	$(".slide5 .img-box img").eq(0).css({top:"82.5%",left:"70%"});
		    	$(".slide5 .img-box img").eq(1).css({top:"87.5%",left:"23.5%"});
		    	$(".slide5 .img-box img").eq(2).css({top:"60.5%",left:"80.5%"});
		    	$(".slide5 .img-box img").eq(3).css({top:"67.5%",left:"47.5%"});
		    	$(".slide5 .img-box img").eq(4).css({top:"61.5%",left:"6.5%"});
		    	$(".slide5 .img-box img").eq(5).css({top:"46%",left:"58%"});
		    	$(".slide5 .img-box img").eq(6).css({top:"42%",left:"30.5%"});
		    	$(".slide5 .img-box img").eq(7).css({top:"26.5%",left:"8%"});
		    	$(".slide5 .img-box img").eq(8).css({top:"26.5%",left:"83%"});
		    	$(".slide5 .img-box img").eq(9).css({top:"22%",left:"54.5%"});
		    	$(".she img:eq(1)").css({height:"100%"}).show();
		    }
		    if(swiper.activeIndex == 6){
		    	
		    	time = setTimeout(function(){
		    		$(".she img:eq(1)").animate({height:"0%"},2000,function(){$(this).hide();});
		    	},1500);
		    }
		    if(swiper.activeIndex == 7){
		    	$(".jiantou-t").show();
		    	$(".she img:eq(1)").css({height:"100%"}).show();
		    	
		    }
		    if(swiper.activeIndex == 8){
		    	$(".jiantou-t").hide();
		    }
		}
	})
	$(".music-s").on("touchstart",function(){
		$(this).hide();$(".music-e").show();
		$("#music")[0].pause();
	});
	$(".music-e").on("touchstart",function(){
		$(this).hide();$(".music-s").show();
		$("#music")[0].play();
	});
});





