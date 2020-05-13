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
  duration: 4000,
  easing:'swing',
  step:function(now){
 $(this).text(Math.ceil(now));
  }
});
});



});//закрывает все функции
