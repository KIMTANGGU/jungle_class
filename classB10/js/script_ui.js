$(function(){
    init();
})

function init(){
    $("#fullpage").fullpage({
        sectionsColor:['', '#eaeef2', '#b6e4fe', '#e2dcd4','#ffffff'],
        navigation:true,
        navigationTooltips:['MAIN','PROFILE','SKILL','PORTFOLIO','CONTACT'],
        anchors:['firstPage','secongPage','3rdPage','4thPage','5thPage'],
        scrollingSpeed:1500,
        onLeave:function(index,nextIndex, direction){
            scrollFn(nextIndex);
        }
    });

    /* main */
    $('#section0 .wrap_link > div > a').mouseover(function(){
        var _idx = $(this).parent().index()+1;
        $("#section0 .wrap_bg").removeClass("select_1 select_2 select_3");
        $("#section0 .wrap_bg").addClass("select_"+_idx);
    }).mouseout(function(){
        $("#section0 .wrap_bg").removeClass("select_1 select_2 select_3");
    });

    //패럴럭스 효과
    $("#section0").parallax({
        imageSrc:'img/bg_main.png' //html 기준으로 경로작성
    });
    //메인 오브젝트 시간차 애니메이션
    function scrollFn(idx){
        if(idx ==1){
        $(".ico").css({'transform':'translateY(0px'}) 
        }else{
        $(".ico").css({'transform':'translateY(-300px'}) 

        }
    }
    
    /* profile */
    $('#section1 .wrap_link > div > a').mouseover(function(){
        var _idx = $(this).parent().index()+1;
        $("#section1 .wrap_bg").removeClass("select_1 select_2 select_3");
        $("#section1 .wrap_bg").addClass("select_"+_idx);
    }).mouseout(function(){
        $("#section1 .wrap_bg").removeClass("select_1 select_2 select_3");
    });
    
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
        intId = setInterval(checkUnit,10) //transition 효과 시작 이벤트와 끝나기 전까지 계속 이벤트를 발생시킴
    }).mouseout(function(){
        $unit.css({"transform":"translateY(100%)"})
    })

    //transition 효과 끝에 발생하는 이벤트
    $unit.on("transitionend" , function(){
        clearInterval(intId) //계속 발생괴는 이벤트를 멈춰줌
        setTimeout(checkUnit,10)
       
    })
    function checkUnit(){
        var num = $unit.css('transform').split(",")[5]; //unit의 transform matrix좌표값 중에서  5번째 translateY의 값 구함
        num = num.replace(")","") //위에서 구한 좌표값에서 ")"문자를 지움 (현재값)
        var th = $("#section2 .wrap_wave").height(); //전체값
        var val = 100-Math.round(num/th*100) //현재값 나누기 전체값 백분율로 계산
        $("#section2 .wrap_wave .inner > .unit .num > strong").text(val) //html의 숫자태그에 넣어줌
    }

    /* portfolio */
    $("#section3 .wrap_photo > ul").slick({
        dots:false,
        slidesToShow:3,
        slidesToscroll:1,
        variableWidth:true,
        centerMode:true,
        arrows:false
    }).on("afterChange" , function(event, slick, current){
        $("#section3 .wrap_txt > ul > li").removeClass("on"); //reset
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
        $cursor.css({"top":mouseY-cursorH,"left":mouseX-cursorW})

    }
   

}



