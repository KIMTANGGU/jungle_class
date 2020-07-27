$(function(){
    //첫 화면 세팅 버튼
    $(".btn_setting").click(function(){
        $(this).parent().hide();
        loadDataFn();
    });

    //테스트를 위한 임시 호출
    loadDataFn()
     
    var complateData; //json 데이터 담는변수
    function loadDataFn(){
        $(".section.reservation").show();
        $.ajax({
            url:"js/data.json",
            dataType:"json",
            success: function(result){
                //consold.log(result);
                complateData = result.seatInfo;
                settingSeatFn();
            }
        })
    };

    function settionSearFn(){
        //파싱작업
        console.log(complateData.length)
        for(var i=0; i<complateData.length; i++){
            var name = complateData[i].name;
            var price = complateData[i].price;
            var reserve = complateData[i].reserve; 
        }

        $(".section.reservetion > ol").append('<li class="unit"><button data-price="'+price+'" '+reserve+'>'+name+'</button></li>');
    }
})