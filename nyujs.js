/*
*	Author: Yulin Li
*	JQuery Based
*/
if (typeof jQuery === 'undefined') {
	alert("Please load jQuery first!");
}

// nyu-shade事件
;+function($){
	

	var innerwidth = window.innerWidth;
	var innerheight = window.innerHeight;

	// window load事件
	$(window).on("load", function(e){
		$(".nyu-shade").css("height", innerheight).css("width", innerwidth);
	});
	// window resize事件
	$(window).on("resize", function(e){
		/* 调整nyu-shade的位置 */
		$(".nyu-shade").css("height", window.innerHeight).css("width", window.innerWidth);
	});

	//nyu-show-shade事件
	$(".nyu-show-shade").on("click", function(e){
		$(".nyu-shade").show();
	});

	//nyu-hide-shade事件
	$(".nyu-hide-shade").on("click", function(e){
		$(".nyu-shade").hide();
	});

}(window.jQuery);

//轮播图
+function($) {

	var innerwidth = window.innerWidth;
	var innerheight = window.innerHeight;
	// window load事件
	$(window).on("load", function(e){
		// 定位next和prev
		var carouselheight = parseInt($(".nyu-carousel").css("height"));
		var buttonheight = parseInt($(".nyu-carousel > #prev").css("height"));
		$(".nyu-carousel > #prev, #next").css("margin-top", carouselheight/2 - buttonheight/2);

		// 根据img个数插入ul
		insertUl();
		// 轮播图hack
		carouselHack();
		
		// 根据img个数修改img, .nyu-carousel-list的宽度
		changeListSize();

		// allOperation
		allOperation();
	});

	// resize事件
	$(window).on("resize", function(e){
		changeListSize();
	});

	// mouseover事件
	$(".nyu-carousel").on("mouseover", function(e){
		$(".nyu-carousel > #prev, #next").css("visibility", "visible");
	});

	// mouseout事件
	$(".nyu-carousel").on("mouseout", function(e){
		$(".nyu-carousel > #prev, #next").css("visibility", "hidden");
	});


	function insertUl(){

		var imgnum = $(".nyu-carousel-list > img").length;
		var tempul = document.createElement("ul");
		tempul.className = "nyu-carousel-indicators";
		for (var i = 0; i < imgnum; i++){
			var templi = document.createElement("li");
			templi.setAttribute("data-slide-to", i + 1 + "");
			if (i === 0) {
				templi.className = "active";
			}
			tempul.appendChild(templi);
		}
		$(".nyu-carousel").prepend(tempul);
	}
	
	function changeListSize(){
		var imgnum = $(".nyu-carousel-list > img").length;
		$(".nyu-carousel-list img").css("width", $(".nyu-carousel").css("width"));
		$(".nyu-carousel-list").css("width", parseInt($(".nyu-carousel").css("width")) * imgnum + "px");
	}

	function carouselHack(){
		// 取第一个img补到最后
		// 取最后一个img补到首位
		var firstimg = $(".nyu-carousel-list > img:first-child").clone();
		var lastimg = $(".nyu-carousel-list > img:last-child").clone();
		$(".nyu-carousel-list").append(firstimg);
		$(".nyu-carousel-list").prepend(lastimg);
		// 让.nyu-carousel-list的margin-left向左平移一个img单位
		$(".nyu-carousel-list").css("left", -parseInt($(".nyu-carousel").css("width")) + "px");
	}

	function allOperation() {
		var prev = $(".nyu-carousel > #prev");
		var next = $(".nyu-carousel > #next");
		var list = $(".nyu-carousel-list");  // 得到所有img
		var buttons = $(".nyu-carousel-indicators > li");  // 得到所有control buttons
		var value = parseInt($(".nyu-carousel").css("width"));
		var index = 1; // 当前的图片index
		var realnum = $(".nyu-carousel-list > img").length - 2;
		var animated = false;
		var timer = null;

		prev.on("click", function(e){
			index = index <= 1 ? realnum : --index;
			changeButton();
			if (!animated){
				animation(value);
			}
		});
		next.on("click", function(e){
			index = index >= realnum ? 1 : ++index;
			changeButton();
			if (!animated){
				animation(-value);
			}
		});

		function animation(offset) {
			animated = true;
			var newleft = parseInt(list.css("left")) + offset;

			var time = 500;   // 位移总时间
			var interval = 10;   // 位移间隔
			var speed = offset / (time / interval);   // 每次位移量

			function doAni(){
				if ((speed < 0 && parseInt(list.css("left")) > newleft) || (speed > 0 && parseInt(list.css("left")) < newleft)) {
					// 向左移动
					list.css("left", parseInt(list.css("left")) + speed + "px");
					setTimeout(doAni, interval);
				} else {
					animated = false;
					list.css("left", newleft + "px");
					// 已经到了第一张
					if (newleft > -value) {
						list.css("left", -(realnum) * Math.abs(offset) + "px");
					}
					// 已经到了最后一张
					if (newleft < -(realnum) * Math.abs(value)) {
						list.css("left", offset + "px");
					}
				}
			}
			doAni();
		}

		function play() {
			timer = setInterval(function(){
				next.trigger("click");
			}, 3000);
		}

		function stop() {
			clearInterval(timer);
		}

		buttons.each(function(k, elem){
			$(elem).on("click", function(e){
				if (e.target.className.indexOf("active") === -1 && !animated){
					var nowindex = parseInt(e.target.getAttribute("data-slide-to"));
					var offset = -value * (nowindex - index); // 点击偏移量
					index = nowindex;   
					changeButton();
					animation(offset);
				}
			});
		});

		function changeButton() {
			$(".nyu-carousel-indicators").find(".active").removeClass("active");
			buttons.eq(index - 1).addClass("active");
		}


		// 自动播放事件
		$(".nyu-carousel").on("mouseover", stop);
		$(".nyu-carousel").on("mouseout", play);
		play();
	}
}(window.jQuery);