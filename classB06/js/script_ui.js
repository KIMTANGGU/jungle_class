$(function(){
    //첫 화면 세팅 버튼
    $(".btn_setting").click(function(){
        $(this).parent().hide();
        loadDataFn();
    });

    //테스트를 위한 임시 호출
    loadDataFn()
     
    var complateData; //json 데이터 변수
    function loadDataFn(){
        $(".section.reservation").show();
        $.ajax({
            url:"js/data.json",
            dataType:"json",
            success: function(result){
                //console.log(result);
                complateData = result.seatInfo;
                settingSeatFn();
            }
        })
    }

    function settionSearFn(){
        //파싱작업
        console.log(complateData.length)
    }
})