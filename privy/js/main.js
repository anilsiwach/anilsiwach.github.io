$(document).ready(function(){

  $('.sliderHome').slick({
    dots: false,
    infinite: true,
    fade: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1
  });



  $('.recommonded_slider').slick({
    dots: false,
    fade: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1
  });


  $('.multiple-items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });


  $( "nav" ).click(function() {
    $( this ).toggleClass( "nav-active" );
  });

  $('.gotonext').click(function(){
      $(this).parent().slideUp();
      $(this).parent().next('.step2').slideDown();
      $(this).parent().next('.step3').slideDown();
  });


  $('.gotoback').click(function(){
    $(this).parent().slideUp();
    $(this).parent().prev('.step1').slideDown();
    $(this).parent().prev('.step2').slideDown();
  });

  $(window).scroll(function() {

    if ($(this).scrollTop()>0)
     {
        $('.mouse_icon').fadeOut();
     }
    else
     {
      $('.mouse_icon').fadeIn();
     }
 });


// SRP Tab

$(".srp_tab li a").on('click', function(e) {
  e.preventDefault()
  var page = $(this).data('page');
  $(".srp .tab_data:not('.hide')").stop().fadeOut('fast', function() {
      $(this).addClass('hide');
      $('.srp .tab_data[data-page="'+page+'"]').fadeIn('slow').removeClass('hide');
  });

  if ($(this).parent().hasClass('active'))
     {
      e.stopPropagation();
     }
    else
     {
      $(this).parent().addClass('active');
      $(this).parent().siblings().removeClass('active');
     }
     
  
});



});