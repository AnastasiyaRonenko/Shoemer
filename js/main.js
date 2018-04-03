$(function(){
	$(".burger").on("click",function(){
        $(".header__mobMenu").stop().slideToggle();
    });

    let windowWidth = $(window).width();

    if (windowWidth>=992) {
    	$(".topMenu").appendTo(".header__topInner");
    	$(".search").appendTo(".header__topInner");
    	$(".mainMenu").appendTo(".header__bottomLeft");
    	$(".basket").appendTo(".header__bottomInner");
    }

    $('input,textarea').focus(function(){
       $(this).data('placeholder',$(this).attr('placeholder'))
       $(this).attr('placeholder','');
    });
    $('input,textarea').blur(function(){
        $(this).attr('placeholder',$(this).data('placeholder'));
    });
});