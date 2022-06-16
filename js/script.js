const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: 'true',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  

  });

  // <!-- wow.js -->
  new WOW().init();

  jQuery('.drawer-icon').on('click' , function(e) {
    e.preventDefault();

    jQuery('.drawer-icon').toggleClass('is-active')
    jQuery('.drawer-content').toggleClass('is-active')
    jQuery('.drawer-background').toggleClass('is-active')

    return false;
  });


  jQuery('a[href^="#"]').click(function() {
     // 移動速度を指定（ミリ秒）
  let speed = 300;
  // hrefで指定されたidを取得
  let id = jQuery(this).attr("href");
  // idの値が#のみだったらターゲットをhtmlタグにしてトップへ戻るようにする
  let target = jQuery("#" == id ? "html" : id);
  // ページのトップを基準にターゲットの位置を取得
  let position = jQuery(target).offset().top;
  // ターゲットの位置までspeedの速度で移動
  jQuery("html, body").animate(
    {
      scrollTop: position
   },
    speed
  );
  return false;
  });

jQuery(window).on("scroll",function() {
  if (jQuery(this).scrollTop() > 100) {
    jQuery('.to-top').fadeIn(700);
  } else {
    jQuery('.to-top').fadeOut(400);
  }
});

jQuery('.to-top').click(function() {
  jQuery('body.html').animate({
    scrollTop: 0
  }, 500);
  return false;
});
  
jQuery('.header__nav li a').on('click', function() {
  jQuery('.header__nav li a').removeClass('is-active');
  jQuery(this).addClass('is-active');
  return false;
});


jQuery('.ac dt').click(function() {
  jQuery(this).next().slideToggle();
  
});


$(function() {
  $('.js-modal').on('click',function(e){
    e.preventDefault();
    $('body').css('overflow-y' ,'hidden');
    $('.modal').show();
    $('.modal__background').show();
  })
});


$(function() {
  $('.modal__icon , .modal__button').on('click',function(e){
    e.preventDefault();
    $('.modal').hide();
    $('.modal__background').hide();
    $('body').css('overflow-y' ,'auto');
  })
});