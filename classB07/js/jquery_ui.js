var isIos = /iphone|ipad|ipod/i.test(navigator.userAgent) ? true : false;


$(function(){
    $(".txt_area input").keypress(function(e){
        if(e.keyCode == 13 && $(this).val().length){ //13이 엔터값 엔터 누를 경우와 입력하고있는 input에 값이 있을때 실행.

            var _val = $(this).val(); //입력된 value
            var _class = ($(this).attr("class")); //입력된 input의 class
            var _time = currentTimeFn();

            $(this).val(""); //입력된 value삭제
            $(".chat_wrap .inner").append('<div class="item '+ _class +'"><div class="box"><p class="msg">'+ _val +'</p><span class="time">'+ _time +'</span></div></div>')
           
            setTimeout(function(){ //애니메이션 클래스는 시간차를 줘야 작동함.
                $(".chat_wrap .inner .item").last().addClass("on");
                var _h = $(".chat_wrap .inner .item").height();
                var _l = $(".chat_wrap .inner .item").length;
                var _mt = $(".chat_wrap .inner .item").last().css("margin-top");
                _mt = parseInt(_mt, 10); //margin-top값중 px를 삭제
                //$(".chat_wrap .inner").scrollTop(_h*_l + _mt*(_l-1)); 
                $(".chat_wrap .inner").stop().animate({
                    scrollTop:_h*_l + _mt*(_l-1)
                },500)
            },100)
           
        }
    });

    //아이폰 처리
    if(isIos){
        $(".txt_area input").focusin(function(){
            setTimeout(function(){
                $(".chat_wrap").addClass("keypad_on")
                $("html").stop().animate({
                    scrollTop:0
                },10)
            },30)
        })
    }

});

//현재 시간을 알아내고 값을 반환하는 함수(function)
function currentTimeFn(){
    var _data = new Date(); //현재 시간 객체
    var _hh = _data.getHours(); //현재 시
    var _mm = _data.getMinutes(); //현재 분
    var _apm;
    
    if(_hh > 12){
        //오후 정보를 담는 변수
        _apm = "오후"
        _hh = _hh - 12; 
    }else{
        _apm = "오전"
    }
    if(_hh < 10) _hh = "0"+_hh;
    if(_mm < 10) _mm = "0"+_mm;

    var _ct = _apm +" "+_hh+":"+_mm;
    return _ct;
}
