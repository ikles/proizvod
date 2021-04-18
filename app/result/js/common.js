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
    $('.filter-reg-values').removeClass('on');
  });

//top-ul









$(".top-mnu, .top-w, .filter-reg-w").click(function (e) {
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


/**********/

/*$('.wrapper').prepend('<span class="eye-3"></span>');
let pg = parseInt(document.location.pathname.match(/\d+/))
$('body').addClass('active').css('background-image', "url('../img/"+pg+".jpg')");
$('body:not(.active)').css('background-image', "unset");

$('.eye-3').click(function (e) {
  e.preventDefault();  
  $('body').toggleClass('active');
  let pg = parseInt(document.location.pathname.match(/\d+/));
  $('body.active').css('background-image', "url('../img/"+pg+".jpg')");
  $('body:not(.active)').css('background-image', "unset");

});*/

/**********/


$('select').select2({
  minimumResultsForSearch: -1
});

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

$('.mnav-links-li-par > a').click(function (e) {
  e.preventDefault();
  let child = $(this).parent().next('.mnav-links-ul-2');
  child.show();
  $('.mnav-links-li').hide();
});

$('.mnav-links-li-back').click(function (e) {
  e.preventDefault();
  $(this).parent().hide();
  $('.mnav-links-li').show();
});


$('.mnav-links-li-inn-par > a').click(function (e) {
  e.preventDefault();
  let child = $(this).parent().next('.mnav-links-ul-3');
  child.show();
  $('.mnav-links-li-inn').hide();
});

$('.mnav-links-li-back2').click(function (e) {
  e.preventDefault();
  $(this).parent().hide();
  $('.mnav-links-li-inn').show();
});

//.mnav-links-li-inn-par
//.mnav-links-li-back2

$('.tsearch').click(function (e) {
  e.preventDefault();
});


$('.top-search').click(function (e) {
  e.preventDefault();
  $('.top-search-f').toggleClass('on');
  $('.top-right-link').toggleClass('off');
});



$('.back-s').click(function (e) {
  e.preventDefault();
  $('.top-search-f').removeClass('on');
  $('.top-right-link').removeClass('off');
});



let prodImg = $('.product-photo-span img');

$('.product-photo-mini').click(function (e) {
  e.preventDefault();
  prodImg.fadeOut(100);
  let miniImgSrc = $(this).find('img').attr('src');
  prodImg.attr('src', miniImgSrc);
  prodImg.fadeIn(100);
});


let regForm = document.querySelector('.reg-form'),
checkinFormInputName = document.querySelector('.checkin-form-input-name'),
checkinFormInputShort = document.querySelector('.checkin-form-input-short'),
checkinFormInputDeal = document.querySelector('.checkin-form-input-deal'),
headWievTit = document.querySelector('.head-wiev-tit'),
checkBoxAll = document.querySelectorAll('.filter-reg-label input[type="checkbox"]');


if ($('.reg-form').length) {

  regForm.addEventListener('input', function () {

    if( checkinFormInputShort.value  != '') {
      headWievTit.textContent = checkinFormInputShort.value + ' — ' + checkinFormInputDeal.value;
    }
    else {
      headWievTit.textContent = checkinFormInputName.value + ' — ' + checkinFormInputDeal.value;
    }

    let counSels = document.querySelectorAll(".filter-reg-values input[type='checkbox']:checked").length;





    let counSelsTotal = document.querySelector('.filter-reg-desc span');
    if ( +counSelsTotal.textContent <= 19 ) {
      counSelsTotal.textContent = counSels;
    } 
    else {
      alert('Невозможно выбрать больше 20 категорий');
      return false;
    } 

  });

}

if ($(".filter-reg-values").length) {

  $(".filter-reg-values").mCustomScrollbar({
    axis: "y",
    theme: "dark-3",
    mouseWheel: 1,
    scrollInertia: '230'
  });
}


/*if ($(".mess-table-w").length) {


  if( $(window).width() < 641 ) {
    $(".mess-table-w").mCustomScrollbar({
      axis: "x",
      theme: "dark-3",
      mouseWheel: 1,
      scrollInertia: '230'
    });    
  }


  $(window).resize(function() {
    if( $(window).width() > 640 ) {
      $(".mess-table-w").mCustomScrollbar("destroy");
    }
  });

  $(window).resize(function() {
    if( $(window).width() < 641 ) {
      $(".mess-table-w").mCustomScrollbar({
        axis: "x",
        theme: "dark-3",
        mouseWheel: 1,
        scrollInertia: '230'
      });  
    }
  });


} //here*/



$('.filter-reg-input').focus(function() {  
  $('.filter-reg-values').addClass('on');
});

/*$('.filter-reg-input').blur(function() {  
  $('.filter-reg-values').removeClass('on');
});*/



$('.filter-parent').click(function () {
  $(this).toggleClass('on');
  $(this).parent().find('> ul').toggleClass('on');
});






/********/

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}




let imgWrapper = document.querySelector('.img_wrapper');
let imgWrapper2 = document.querySelector('.img_wrapper_2');
let imgWrapper3 = document.querySelector('.img_wrapper_3');
let imgWrapper4 = document.querySelector('.img_wrapper_4');
let fileMulti = document.querySelector('#fileMulti-1');
let fileMulti2 = document.querySelector('#fileMulti-2');
let fileMulti3 = document.querySelector('#fileMulti-3');
let fileMulti4 = document.querySelector('#fileMulti-4');


function download(input) {
  let file = input.files[0];
  let reader = new FileReader();
  reader.readAsDataURL(file);
  $('.image-input-val-1').html(file.name);  
  reader.onload = function () {
    let img = document.createElement('img');
    img.src = reader.result;    
    let linkImg = document.createElement('span');
    linkImg.classList.add('add-comp-col-1-l-img-w');
    linkImg.appendChild(img);
      //console.log(img);
      imgWrapper.innerHTML = '';
      imgWrapper.appendChild(linkImg);
    //console.log(imgWrapper);
    removeImg();
  }
}

function download2(input) {
  let file = input.files[0];
  let reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function () {
    let img = document.createElement('img');
    img.src = reader.result;
    let linkImgWrap = document.createElement('div');
    let linkImg = document.createElement('span');
    let inputImg = document.createElement('input');
    inputImg.type = "text";
    inputImg.placeholder = "Описание";
    linkImgWrap.classList.add('add-comp-img-input-row');    
    linkImg.classList.add('add-comp-col-1-l-img-w-2');
    inputImg.classList.add('add-comp-input-img', 'input');    
    linkImg.appendChild(img);
    linkImgWrap.appendChild(linkImg);
    linkImgWrap.appendChild(inputImg);    
      //console.log(img);
      imgWrapper2.appendChild(linkImgWrap);      
    //console.log(imgWrapper);    
    removeImg2();    
  }
}



function download3(input) {
  let file = input.files[0];
  let reader = new FileReader();
  reader.readAsDataURL(file);
  fileSize = (file.size * 0.000001).toFixed(2);
  $('.image-input-val-3').html(file.name);  
  reader.onload = function () {

    let linkImg = document.createElement('span');
    let linkI = document.createElement('i');
    let linkSize = document.createElement('span');
    let linkDel = document.createElement('a');
    linkDel.href = "#";
    linkI.innerHTML = file.name;
    linkDel.innerHTML = 'Удалить';
    linkSize.innerHTML = '('+fileSize+' MB)';
    linkImg.classList.add('add-comp-col-1-l-img-w-3');    
    linkImg.appendChild(linkI);
    linkImg.appendChild(linkSize);
    linkImg.appendChild(linkDel);
      //console.log(img);      
      imgWrapper3.appendChild(linkImg);
    //console.log(imgWrapper);    
    removeImg3();
  }
}


function download4(input) {
  let file = input.files[0];
  let reader = new FileReader();
  reader.readAsDataURL(file);
  $('.image-input-val-4').html(file.name);  
  reader.onload = function () {
    let img = document.createElement('img');
    img.src = reader.result;    
    let linkImg = document.createElement('span');
    linkImg.classList.add('add-comp-col-1-l-img-w-4');
    linkImg.appendChild(img);
      //console.log(img);      
      imgWrapper4.appendChild(linkImg);
    //console.log(imgWrapper);
    removeImg4();
  }
}


if($('#fileMulti-1').length) {
  fileMulti.addEventListener("change", function() {
   download(this); 
 });
}


if($('#fileMulti-2').length) {
  fileMulti2.addEventListener("change", function() {
   download2(this);  
 });
}


if($('#fileMulti-3').length) {
  fileMulti3.addEventListener("change", function() {
   download3(this);  
 });
}

if($('#fileMulti-4').length) {
  fileMulti4.addEventListener("change", function() {
   download4(this);  
 });
}


function removeImg() {
  $('.add-comp-col-1-l-img-w').click(function () {
    this.remove();
    $('.image-input-val-1').html('Не выбрано');
  });  
}

function removeImg2() {
  $('.add-comp-col-1-l-img-w-2').click(function () {
    this.parentElement.remove();      
  });  
}

function removeImg3() {
  $('.add-comp-col-1-l-img-w-3 a').click(function (e) {
    e.preventDefault();
    this.parentElement.remove();  
    $('.image-input-val-3').html('Не выбрано');    
  });  
}

function removeImg4() {
  $('.add-comp-col-1-l-img-w-4').click(function (e) {
    e.preventDefault();
    this.remove();  
    $('.image-input-val-4').html('Не выбрано');    
  });  
}

removeImg();
removeImg2();
removeImg3();
removeImg4();




$('.checkin-chars-add-more').click(function (e) {
  e.preventDefault();
  $('.checkin-chars-w').append(`
    <div class="checkin-chars-it">
    <div class="checkin-chars-col-1">
    <div class="checkin-txt-1">Название:</div>
    <input class="checkin-form-input" type="text" placeholder="Не указано">
    </div>
    <div class="checkin-chars-col-2">
    <div class="checkin-txt-1">Характеристики:</div>
    <input class="checkin-form-input" type="text" placeholder="Не указано">
    </div>
    <div class="checkin-chars-col-3">
    <a href="#" class="checkin-chars-butt butt">Удалить</a>
    </div>
    </div>
    `);
  charsRemove()
});

function charsRemove() {
  $('.checkin-chars-butt').click(function (e) {
    e.preventDefault();
    $(this).parent().parent().remove();
  });  
}

charsRemove();



}); //ready

