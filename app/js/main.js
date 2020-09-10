$(function () {

  $('.header-slider__wrapper').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: false,
        }
      }
    ]
  });

  $('.atmosfere__slider-inner').slick({
    prevArrow: '<img class="slider-arrows slider-arrows__left" src="images/icons/nextArrow2.svg" alt=""></img>',
    nextArrow: '<img class="slider-arrows slider-arrows__right" src="images/icons/prewArrow1.svg" alt=""></img>',
    arrows: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 6,
    slidesToScroll: 1,
    infinite: true,
    variableWidth: true,
    centerMode: true,
  });

  $('.fancybox-media').fancybox({
    openEffect: 'none',
    closeEffect: 'none',
    helpers: {
      media: {}
    }
  });

  $(".accordeon dd").hide().prev().click(function () {
    $(this).parents(".accordeon").find("dd").not(this).slideUp().prev().removeClass("active");
    $(this).next().not(":visible").slideDown().prev().addClass("active");
  });

  $(".men1").click(function () {
    $(".header__top-wrapper .menu ul li").removeClass("active");
    $(this).addClass("active");
  });
  $(".men2").click(function () {
    $(".header__top-wrapper .menu ul li").removeClass("active");
    $(this).addClass("active");
    $("html, body").animate({
      scrollTop: $(".first-lesson").offset().top - 120
    }, 400);
  });
  $(".men3").click(function () {
    $(".header__top-wrapper .menu ul li").removeClass("active");
    $(this).addClass("active");
    $("html, body").animate({
      scrollTop: $(".cost").offset().top - 120
    }, 400);
  });
  $(".men4").click(function () {
    $(".header__top-wrapper .menu ul li").removeClass("active");
    $(this).addClass("active");
    $("html, body").animate({
      scrollTop: $(".reviews").offset().top - 120
    }, 400);
  });

  $(window).on('load resize orientationchange', function () {
    $('.directions__wrapper, .teachers__wrapper, .reviews__wrapper').each(function () {
      var $carousel = $(this);
      /* Initializes a slick carousel only on mobile screens */
      // slick on mobile
      if ($(window).width() > 768) {
        if ($carousel.hasClass('slick-initialized')) {
          $carousel.slick('unslick');
        }
      }
      else {
        if (!$carousel.hasClass('slick-initialized')) {
          $carousel.slick({
            prevArrow: '<img class="slider-arrows slider-arrows__left" src="../images/icons/nextArrow2.svg" alt=""></img>',
            nextArrow: '<img class="slider-arrows slider-arrows__right" src="../images/icons/prewArrow1.svg" alt=""></img>',
            arrows: true,
            dots: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            mobileFirst: true,
            centerMode: true,
            variableWidth: true,
          });
        }
      }
    });
  });

  $('.menu__btn').on('click', function(){
    $('.wrapper-menu').toggleClass('active');
    $('.menu__btn').toggleClass('menu__btn-active');
  });

  let isMobile = {
    Android: function() {return navigator.userAgent.match(/Android/i);},
    BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
    iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
    Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
    Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
    any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}
  };
      let body=document.querySelector('body');
  if(isMobile.any()){
      body.classList.add('touch');
      let arrow=document.querySelectorAll('.arrow-mob');
    for(i=0; i<arrow.length; i++){
        let thisLink=arrow[i].previousElementSibling;
        let subMenu=arrow[i].nextElementSibling;
        let thisArrow=arrow[i];
  
        thisLink.classList.add('parent');
      arrow[i].addEventListener('click', function(){
        subMenu.classList.toggle('open');
        thisArrow.classList.toggle('active');
      });
    }
  }else{
    body.classList.add('mouse');
  }

});

