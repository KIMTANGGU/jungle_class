$(function(){
  // 로딩
  var load_img = 0;
  var total_img = 18;
  //$("body").css({"overflow":"hidden"})//브라우저 스크롤 막음
  $("#fullpage").imagesLoaded().done(function(){
    //로딩완료
    $(".wrap_loading").addClass("on");
    setTimeout(function(){
      $(".wrap_loading").remove();
    },700);
    //$("body").css({"overflow":"auto"})
    init();
  }).progress(function(idx, image){
    //프리로드
    load_img++;
    var percent = Math.round(load_img/total_img*100);
    $(".wrap_loading > span").css({"width":percent+"%"}).text(percent);
  });
  //init();
})

function init(){
  $("#fullpage").fullpage({
    sectionsColor:['', '#eaeef2', '#b6e4fe', '#e2dcd4', '#ffffff'],
    navigation:true,
    navigationTooltips:['MAIN', 'PROFILE', 'SKILL', 'PORTFOLIO', 'CONTACT'],
    anchors:['firstPage', 'secondPage', '3rdPage', '4thPage', '5thPage'],
    scrollingSpeed:1500,
    onLeave: function(index, nextIndex, direction){
      scrollFn(nextIndex);
    },
    afterLoad:function(name, index, direction){
      $(".section").eq(index-1).addClass("on");
    }
  });

  /* main */
  $("#section0 .wrap_link > div > a").mouseover(function(){
    var _idx = $(this).parent().index()+1;
    $("#section0 .wrap_bg").removeClass("select_1 select_2 select_3");
    $("#section0 .wrap_bg").addClass("select_"+_idx);
  }).mouseout(function(){
    $("#section0 .wrap_bg").removeClass("select_1 select_2 select_3");
  });

  // 패럴럭스 효과
  $("#section0").parallax({
    imageSrc: 'img/bg_main.png'
  });
  //메인 오브젝트 시간차 애니메이션
  function scrollFn(idx){
    if(idx ==1 ){
      $(".ico").css({'transform':'translateY(0px)'})
    }else{
      $(".ico").css({'transform':'translateY(-300px)'})
    }
  }

  /* profile */
  $("#section1 .wrap_link > div > a").mouseover(function(){
    var _idx = $(this).parent().index()+1;
    $("#section1 .wrap_bg").removeClass("select_1 select_2 select_3");
    $("#section1 .wrap_bg").addClass("select_"+_idx);
  }).mouseout(function(){
    $("#section1 .wrap_bg").removeClass("select_1 select_2 select_3");
  })

  /* skill */
  var $unit = $("#section2 .wrap_wave .inner > .unit");
  var intId;
  $("#section2 .wrap_link > div > a").mouseover(function(){
    var _idx = $(this).parent().index();
    if(_idx == 0){
      $unit.css({"transform":"translateY(0%)"})
    }else if(_idx == 1){
      $unit.css({"transform":"translateY(55%)"})
    }else if(_idx == 2){
      $unit.css({"transform":"translateY(24%)"})
    }else if(_idx == 3){
      $unit.css({"transform":"translateY(83%)"})
    }
    clearInterval(intId)
    intId = setInterval(checkUnit,10)//transition효과 시작 이벤트와 끝나기 전까지 계속 이벤트를 발생시킴
  }).mouseout(function(){
    $unit.css({"transform":"translateY(100%)"})
  })

  //transition효과 끝에 발생하는 이벤트
  $unit.on("transitionend", function(){
    clearInterval(intId)//계속 발생되는 이벤트를 멈춰줌
    setTimeout(checkUnit,10)
  })
  function checkUnit(){
    var num = $unit.css('transform').split(",")[5];//unit의 transform matrix좌표값 중에서 5번째 traslateY의 값 구함
    num = num.replace(")", "")//위에서 구한 좌표값에서 ")"문자를 지움(현재값)
    var th = $("#section2 .wrap_wave").height();//전체값
    var val = 100-Math.round(num/th*100)//현재값/전체값 백분률 계산
    $("#section2 .wrap_wave .inner > .unit .num > strong").text(val)// html의 숫자태그에 넣어줌
  }


  /* portfolio */
  $("#section3 .wrap_photo > ul").slick({
    dots:false,
    slidesToShow:3,
    SlidesToScroll:1,
    variableWidth: true,
    centerMode:true,
    arrows: false
  }).on("afterChange", function(event, slick, current){
    $("#section3 .wrap_txt > ul > li").removeClass("on");//reset
    $("#section3 .wrap_txt > ul > li").eq(current).addClass("on");
  })
  
  document.addEventListener("mousemove",function(event){
    moveInBox(event)
  })

  function moveInBox(e){
    var $ul = $("#section3 .wrap_photo > ul");
    var $cursor = $("#section3 .wrap_photo .cursor");

    //커서에 대한 값
    var cursorW = $cursor.width()/2;
    var cursorH = $cursor.height()/2;

    //마우스 위치
    var mouseX = e.pageX;
    var mouseY = e.pageY;
    $cursor.css({"top":mouseY-cursorH, "left":mouseX-cursorW})
  }

  /* contact */
  $("#section4 .wrap_input input").on("textInput",function(e){
    //console.log(e.originalEvent.data)//키보드 정보 받아옴
    // $("#section4 .wrap_type_inner > span").text(e.originalEvent.data)
    //   .addClass("ani")
    //   .on('animationend',function(){
    //     $(this).removeClass("ani")
    //   })
    var c1 = Math.floor(Math.random()*256);//Math.random은 랜덤값을 구함
    var c2 = Math.floor(Math.random()*256);//Math.floor는 소수점을 버림(정수)
    var c3 = Math.floor(Math.random()*256);
    var rn = Math.floor(Math.random()*4);
    $("<span style='color:rgb("+c1+","+c2+","+c3+")'>"+e.originalEvent.data+"</span>").appendTo($("#section4 .wrap_type_inner"))
    .addClass("ani"+rn+"")
    .on('animationend',function(){
        $(this).remove();
    });
  })



}

