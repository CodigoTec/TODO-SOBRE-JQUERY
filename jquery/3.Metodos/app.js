$(document).ready(function () {
 //text
 //html
 //width
 //height
   
$('#boton1').click(function(){
    $('.parrafo1').text('<b>soy el reemplazo del parrafo uno </b>');
})

$('#boton2').click(function(){
    $('.parrafo2').html('<b>soy el reemplazo del parrafo dos </b>');
})

$('.caja').click(function(){
    var valorWidth = $('.caja').width();
    var valorHeigth = $('.caja').height();
   
    $('#resultado').html(valorWidth + '<br>' + valorHeigth);

})










});