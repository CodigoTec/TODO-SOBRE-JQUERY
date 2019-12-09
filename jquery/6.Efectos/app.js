//Efectos
//Hide...Show   (slow,fast,milisegundos)

//Fade....Aparece y desaparece con un efecto de opacidad

  /*fadeIn() ::::::>Aparezca
    fadeOut() ::::>Desaparezca
    fadeToggle()*/

//Slide....Aparece y desaparece con un efecto paralax

  /*  slideDown() ::::::>Aparezca
      slideUp()   ::::::>Desaparezca
      slideToggle()*/

$(document).ready(function(){ 

  $('#aparecer').click(function(){
       $('#parrafo').slideDown(3000);
  })

  $('#desaparecer').click(function(){
    $('#parrafo').slideUp(4000);
  })

  $('#toggle').click(function(){
    $('#parrafo').slideToggle(3000);
  })


 });