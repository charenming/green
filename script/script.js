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

var imgs = 2;
var now = 0;

start();

function start(){
  $(".imgSlide>a").eq(0).siblings().animate({width:"-1200px"});

  setInterval(function(){
    now = now==imgs ? 0 : now+=1;
    $(".imgSlide>a").eq(now-1).animate({width:"-1200px"});
    $(".imgSlide>a").eq(now).animate({width:"1200px"});
  },3000);
}

