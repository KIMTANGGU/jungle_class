$(function(){
	//메인 헤더 스크롤 이벤트
	if($(".main").length){
		$(window).scroll(function(){
			if($(window).scrollTop() == 0){
				$(".header").removeClass("down");
			}else{
				$(".header").addClass("down");
			}
		});
	}

	//네비 열기
	$('.header .navi_area .btn_nav').click(function(){
		$('.header .navi_area').addClass('on');
	});


	//네비 닫기
	$('.header .navi_area .navi .btn_nav_close').click(function(){
		$('.header .navi_area').removeClass('on');
	});

	//메인 베너 슬라이드
	  $(".section.visual > ul").bxSlider({
			slideWidth: 1080,
			slideMargin: 209,
			minSlides: 1,
			maxSlides: 2,
			moveSlides: 1,
			onSliderLoad: function(){
				slide_resize();
			}
	  })

	//리사이즈 이벤트
	$(window).resize(function(){
        slide_resize();
    });

	  function slide_resize(){ //슬라이드 이미지가 가운데 정렬이 될 수 있게하는 함수
        var main_slide_wid = ($(".visual").width() - $(".visual .bx-wrapper ul > li").width()) / 2;
        $(".visual .bx-wrapper ul").css({"margin-left":main_slide_wid});
    }

	//베스트 아이템 슬라이드
	var main_market_bx = $('.section.market .slide_area ul').bxSlider({
        mode: 'fade',
        slideWidth: 1080,
        controls: false,
        touchEnabled: true,
        auto: true,
        pause: 2000
    });


})