$(function(){
    //첫 화면 세팅 버튼
    $(".btn_setting").click(function(){
        $(this).parent().hide();
        loadDataFn();
    });

    //테스트를 위한 임시 호출
    //loadDataFn()
     
    var complateData; //json 데이터 담는변수 (전역변수)
    function loadDataFn(){
       
        $.ajax({
            url:"js/data.json",
            dataType:"json",
            success: function(result){
                complateData = result.seatInfo;
                settingSeatFn();
            }
        })
    };

    function settingSeatFn(){
        $(".section.reservation").show();
        //파싱작업
        //console.log(complateData.length)
        for(var i=0; i<complateData.length; i++){
            var name = complateData[i].name;
            var price = complateData[i].price;
            var reserve = complateData[i].reserve;
            $(".section.reservation > ol").append('<li class="unit"><button data-price="'+price+'" '+reserve+'>'+name+'</button></li>');
            }

            var selectArray = []; //선택좌석 index를 답는 배열
            var name; //전역변수
            var price; //전역변수

            //좌석버튼 클릭 이벤트
            $(".section.reservation .unit > button").click(function(){
                // alert($(this).text());
                $(this).toggleClass("select");
                if($(this).hasClass("select")){ //좌석선택 할 경우
                    selectArray.push($(this).parent().index());
                  
                }else{ //좌석 해제될 경우
                    var removeIndex = selectArray.indexOf($(this).parent().index()); //해당값이 위치해있는 순서(index)를 찾음
                    selectArray.splice(removeIndex, 1); //배열의 index위치부터 1자리를 삭제함 /splice는 해당index를 삭제
                    //console.log(removeIndex);
                }
                //console.log(selectArray.length);

               name ="";
               price = 0;
                for(var i=0; i<selectArray.length;i++){
                    //console.log(selectArray[i]);
                    name += $(".section.reservation > ol > li").eq(selectArray[i]).find("button").text()+ " ";
                    price += $(".section.reservation > ol > li").eq(selectArray[i]).find("button").data("price");
                    
                }
                $(".txt_info_number").text(name);
                $(".txt_info_total").text(price);

            }); 

            //완료 클릭이벤트
            $(".btn_submit").click(function(){
                $(".section.reservation").hide();
                $(".section.complete").show();
                $(".section.complete .txt_number").text(name);
                $(".section.complete .txt_price strong").text(price);
                
            });


        };

        
});