$(function(){
    //첫 화면 세팅 버튼
    $(".btn_setting").click(function(){
        $(this).parent().hide();
        settingFn();
    });

    //테스트를 위한 임시 호출
    settingFn()
     
    function settingFn(){
        $(".section.reservation").show();
        $.ajax({
            url:"js/data.json",
            dataType:"json",
            success: function(result){
                console.log(result);
            }
        })
    }
})