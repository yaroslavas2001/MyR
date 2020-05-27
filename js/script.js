$(function(){

  //Fixed Header фиксированнная шапка после прокрутки интро
let nav = $("#nav");
let intro = $("#intro");
let introH = intro.innerHeight();

let scrollPos =$(window).scrollTop();


checkScroll(scrollPos,introH);
$(window).on("scroll resize",function(){
  //следим за событием при скроле, загрузки и мобильных телефонов
introH = intro.innerHeight();
scrollPos=$(this).scrollTop();

checkScroll(scrollPos,introH);

});

function checkScroll(scrollPos,introH){
  if(scrollPos >(introH)){
   nav.addClass("fixed");
    }else{
      nav.removeClass("fixed");
    }
}
//Счетчик цифр

$('.counter__number').each(function(){
$(this).prop('Counter',0).animate({
  Counter:$(this).text()
},{
  duration: 7000,
  easing:'swing',
  step:function(now){
 $(this).text(Math.ceil(now));
  }
});
});

$('.slider__row').slick({
  slidesToShow: 4,
  slidesToScroll: 4
});

var filtered = false;

$('.js-filter').on('click', function(){
  if (filtered === false) {
    $('.filtering').slick('slickFilter',':even');
    $(this).text('Unfilter Slides');
    filtered = true;
  } else {
    $('.filtering').slick('slickUnfilter');
    $(this).text('Filter Slides');
    filtered = false;
  }
});
$('.slider__row__mobile').slick({
  slidesToShow: 2,
  slidesToScroll: 2
});

var filtered = false;

$('.js-filter').on('click', function(){
  if (filtered === false) {
    $('.filtering').slick('slickFilter',':even');
    $(this).text('Unfilter Slides');
    filtered = true;
  } else {
    $('.filtering').slick('slickUnfilter');
    $(this).text('Filter Slides');
    filtered = false;
  }
});

$('.menu-btn').on('click',function(even){
even.preventDefault;
$(this).toggleClass('menu-btn_active');
$('.menu__nav').toggleClass('menu__nav_active');
});
});//закрывает все функции
