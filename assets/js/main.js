
jQuery(document).ready(function ($) {
  
  $('.service-sliders').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    prevArrow: $('.service-left'),
    nextArrow: $('.service-right'),
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 1,
        },
      },
       
    ],
  });

  // menu bg add
    $(window).on('scroll', function() {
      if ($(window).scrollTop() > 300) {
          $('header').addClass('menu-bg');
      } else {
          $('header').removeClass('menu-bg');
      }
  });
  
  $('.service-slide-item').on('mouseenter', function () {
    $('.service-slide-item').removeClass('active')
    $(this).addClass('active')
  });
  $('.testimonial-sliders').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    prevArrow: $('.testimonial-left'),
    nextArrow: $('.testimonial-right'),
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

})
