$(document).ready(function(){
    
    
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300){  
        $('header').addClass("sticky");
        }
        else{
        $('header').removeClass("sticky");
        }
    });
    
    
    if($(window).width() < 1025){
        
        /* super saver */
        $( ".super_saver ul" ).addClass("ul_3");
        
        var li_l1 = $('.super_saver ul li').length;
        var li_w1 = $('.super_saver ul li').width();
    
        $('.super_saver ul').css("width",li_w1*li_l1+30);
        $('.super_saver ul li').css("width",li_w1);
        
        $( ".super_saver ul" ).wrap( "<div class='over_hidden'><div class='overflows'></div></div>" );
        
        
        /* perfect holidays */
        
        $( ".perfect_holidays ul" ).addClass("ul_4");
        
        var li_l1 = $('.perfect_holidays ul li').length;
        var li_w1 = $('.perfect_holidays ul li').width();
    
        $('.perfect_holidays ul').css("width",li_w1*li_l1+30);
        $('.perfect_holidays ul li').css("width",li_w1);
        
        $( ".perfect_holidays ul" ).wrap( "<div class='over_hidden'><div class='overflows'></div></div>" );
        
        
        /* travel talk */
        
        $( ".travel_talk ul" ).addClass("ul_3");
        
        var li_l = $('.travel_talk ul li').length;
        var li_w = $('.travel_talk ul li').width();

        $('.travel_talk ul').css("width",li_w*li_l+30);
        $('.travel_talk ul li').css("width",li_w);
        
        $( ".travel_talk ul" ).wrap( "<div class='over_hidden'><div class='overflows'></div></div>" );
        
        $("ul.booking_lobs").wrap( "<div class='over_hidden'><div class='overflows'></div></div>" );
        
        
    }else{

    /* super saver */
        
    $('.slider4').bxSlider({
    slideWidth: 350,
    minSlides: 2,
    maxSlides: 3,
    moveSlides: 1,
    slideMargin: 30,
    infiniteLoop: false, 
    hideControlOnEnd: true
    });
        
    /* perfect holidays */
        
    $('.slider5').bxSlider({
    slideWidth: 255,
    minSlides: 2,
    maxSlides: 4,
    moveSlides: 1,
    slideMargin: 30,
    infiniteLoop: false,
    hideControlOnEnd: true
    });
        
    /* perfect holidays */
        
    $('.slider6').bxSlider({
    slideWidth: 350,
    minSlides: 2,
    maxSlides: 3,
    moveSlides: 1,
    slideMargin: 30,
    infiniteLoop: false,
    hideControlOnEnd: true
    });
        
    
    
        
    }
    
    
    
    
    
    
    
    /* Booking offers */
        
$('.slider7,.slider8,.slider9,.slider10,.slider11,.slider12,.slider13,.slider14,.slider15').bxSlider({ slideWidth: 255, minSlides: 1, maxSlides: 4, moveSlides: 1, slideMargin: 30,infiniteLoop: false,hideControlOnEnd: true });

    
    
    
    
    
    var cont_w = $('.commondiv').width();
    var offers_w = $('.booking_offers ul').width();
    var offers_h = $('.booking_offers ul').height();
    var cont_h = $('.commondiv').height()+20;
    
    $('.commondiv').css("min-width",cont_w);
    $('.search_inputs').css("min-height",cont_h);
    $('.booking_offers').css("min-height",offers_h);
    
    
    
    
	$('ul.booking_lobs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.booking_lobs li').removeClass('active');
		$(this).addClass('active');
		$("."+tab_id).animate({opacity:1,zIndex:2},500);
		$("."+tab_id).siblings().animate({opacity:0,zIndex:-2},500);
	})

    
	$('.mobile_clicks').click(function(){
		

		$(this).parent().siblings().removeClass('active');
		$(this).parent().addClass('active');
        $(this).siblings().slideDown(500);
        $(this).parent().siblings().children("ul").slideUp(500);
	})
    
    
    
    $(".icon-menu").click(function(e){
        $(".menu_for_mobile").fadeIn();
        e.stopPropagation();
    });
    $("html").click(function(){
        $(".menu_for_mobile").fadeOut();
    });
    
    $('.menus_m').click(function(e){
        e.stopPropagation();
    });
    
  
    $('.trip_type p input').click(function () {
        $('input:not(:checked)').parent().removeClass("active");
        $('input:checked').parent().addClass("active");
    });   
    
    $('.travel_class li label input:checked').parent().addClass("active");
    
    $('.travel_class li label').click(function () {
        $('input:not(:checked)').parent().removeClass("active");
        $('input:checked').parent().addClass("active");
    });   
    
    
    $('.travellers').click(function(e){ 
        if($(this).hasClass("active")){
            $('.travellers').removeClass("active");
        $('.no_traveller').hide();
        }else{
            $(this).addClass("active");
            $('.no_traveller').show();
            $('.no_traveller').parent().css("zIndex","3");
        e.stopPropagation();
        }
        
    });
    $('.no_traveller').click(function(e){
        e.stopPropagation();
    });
    $('body,.close_class_type').click(function(){
        $('.travellers').removeClass("active");
        $('.no_traveller').hide();
    });
	
    
    $('.footer_top_menus li').click(function(){
		var tab_ids = $(this).attr('data-tab');

		$('.footer_top_menus li').removeClass('active');
		$(this).addClass('active');
		$("#"+tab_ids).slideDown(500);
		$("#"+tab_ids).siblings(".open_data").slideUp(500);
	})
    
    
    
    
    
})


/*
$(function(){
  $('.crsl-items').carousel({
    visible: 3,
    itemMinWidth: 180,
    itemEqualHeight: 370,
    itemMargin: 9,
  });
 
});*/