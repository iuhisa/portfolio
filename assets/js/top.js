$(function () {
  $('header').load('/assets/html/header_top.html');
  $('footer').load('/assets/html/footer.html');

  $('.round-flex-item').hover(function(){
    var id = $(this).attr("id");
    $('#item-body-'+id).addClass('open-round-flex-item-body');
  },function(){
    var id=$(this).attr("id");
    $('#item-body-'+id).removeClass('open-round-flex-item-body');
  });
});
