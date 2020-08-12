$(function(){
  init();
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

}

