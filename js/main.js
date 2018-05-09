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

    if (windowWidth<992) {
        $(".left__sidebar").appendTo(".modal");
    }

    $('input,textarea').focus(function(){
       $(this).data('placeholder',$(this).attr('placeholder'))
       $(this).attr('placeholder','');
    });
    $('input,textarea').blur(function(){
        $(this).attr('placeholder',$(this).data('placeholder'));
    });

    $('#sort').niceSelect();

    $(".accordion__itemTitle").on("click",function(){

        var accordionItem = $(this).closest(".accordion__item");
        var accordionItemSiblings = $(accordionItem).siblings(".accordion__item");
        var accordionCheckboxWrap = $(accordionItemSiblings).children(".accordion__checkboxWrap");

        $(accordionCheckboxWrap).hide();

        $(this).siblings(".accordion__checkboxWrap").slideToggle();
    });
    
    $(".openModelBtn").on("click",function(){
        $(".modal").addClass("active");
    });

    $(".closeModelBtn").on("click",function(){
        $(".modal").removeClass("active");
    });
});