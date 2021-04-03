jQuery(document).ready(function( $ ) {

  $(".toggle-mnu").click(function() {
    $(this).toggleClass("on");
    $(".top-mnu").slideToggle();
    $('.overlay').fadeToggle();
    return false;
  });

  $('body').click(function () {
    if( $(".toggle-mnu").hasClass("on") ){
      $(".toggle-mnu").removeClass("on");
      $(".top-mnu").fadeOut();
      $('.overlay').fadeOut();
    }
  });

//top-ul



$(".top-mnu, .top-w").click(function (e) {
  e.stopPropagation();
});

$('.mnav-w .tabs_control_link').click(function (e) {
  e.preventDefault();

  var item = $(this).closest('.mnav-w .tabs_control_item'),
  contentItem = $('.mnav-w .tabs_content_item'),
  itemPosition = item.index();

  contentItem.eq(itemPosition)
  .add(item)
  .addClass('active')
  .siblings()
  .removeClass('active');

});

$('.wrapper').prepend('<span class="eye-3"></span>');


$('.eye-3').click(function (e) {
  e.preventDefault();
  $('body').toggleClass('active');
});



$('select').select2();

$('.mnav-sel').on('select2:select', function (e) {
  if ( e.params.data.id == 'По рубрикам' ) {
    $('.mnav-links-w').removeClass('active');
    $('.mnav-links-w-1').addClass('active');
  }
  else if (e.params.data.id == 'По алфавиту') {
    $('.mnav-links-w').removeClass('active');
    $('.mnav-links-w-2').addClass('active');
  }
});

$('.comp-more').click(function (e) {
  e.preventDefault();
  $('.abcomp-desc').toggleClass('on');
});


$('.rconts-a a').click(function (e) {
  e.preventDefault();
  $(this).toggleClass('on');
});


$('.compgal-more').click(function (e) {
  e.preventDefault();
  $('.compgal-w').toggleClass('on');
});

if ( $('[data-fancybox="gallery"]').length  ) {

  $('[data-fancybox="gallery"]').fancybox({
    arrows: true,
    infobar: false,
    smallBtn: false,
    toolbar: false,
    iframe : {
      css : {
        width : '950px'
      }
    },    
    slideClass: "myClass",
    baseClass: "myclass"
  });
}

$('.bconts-col-3').each(function () {
  let linkk = $(this).find('a'),
  rowShow = $(this).parent().find('.bconts-col-2 a');
  linkk.click(function (e) {
    e.preventDefault();
    rowShow.toggleClass('on');
  });
});


$('.show-search-more').click(function (e) {
  e.preventDefault();
  $('.manufacturers-filtr').slideToggle();
  $(this).toggleClass('on');
});



var button = $(".show-search-more");
button.html(button.data("text"));
button.click(function(){
  var el = $(this);
  var swap = el.data("swap");
  var text = el.data("text");
  el.data("text", swap);
  el.data("swap", text);
  el.html(swap);
});


}); //ready

