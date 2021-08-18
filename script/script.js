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
});


