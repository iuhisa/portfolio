$(function(){
  var opened = false;

  $('#header-nav-button').on('click', function () {
    if (opened) {
      opened = false;
      $('#site-header').removeClass('opened');
      $("#site-header .nav-wrapper").stop().slideToggle({duration: 1000});
    } else {
      opened = true;
      $('#site-header').addClass('opened');
      $("#site-header .nav-wrapper").stop().slideToggle({duration: 1000});
    }
  });

  $('a[href^="#"]').on('click', function () {
    var speed = 400;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $('body,html').animate({
      scrollTop: position
    }, speed, 'swing');
    return false;
  });
});