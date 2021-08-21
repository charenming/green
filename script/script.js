$(function(){
    // 메뉴 작동
    $(".gnb>li").mouseover(function(){
        $(this).children(".sub_menu").stop().slideDown();
    });
    $(".gnb>li").mouseout(function(){
        $(this).children(".sub_menu").stop().slideUp();
    })

    // 팝업
    $(".close").click(function(){
    $("#popup").fadeOut();
    })


    //이미지 슬라이드
// let slideCount = $(".slide>li").length; 
//만약 이걸 넣게되면 if(currentIndex<slideCount-1) 이렇게 해주면됨
// 즉 if(currentIndex<2)에서 2의 뜻은 총 이미지개수-1개 라는 뜻.

let currentIndex=0;
// let slidePosition;

setInterval(function(){
    if(currentIndex<2){
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    let slidePosition = currentIndex * (-1200)+"px";

    $(".slide").animate({left:slidePosition},400);
},3000);

});
