$(document).ready(function () {
  

var slider = $('.slider');
//almacenar botones
var siguiente = $('#despues');
var anterior = $('#antes');
    
//mover ultima imagen al primer lugar
$(' p:last').insertBefore(' p:first');

//mostrar la primera imagen con un margen de -100%
slider.css({marginLeft:"-100%"})

function moverD() {
	slider.animate({
		marginLeft:'-200%'
	} ,900, function(){
		$('p:first').insertAfter('p:last');
		slider.css({marginLeft:'-100%'});
	});
}

function moverI() {
	slider.animate({
		marginLeft:0
	} ,900, function(){
		$('p:last').insertBefore('p:first');
		slider.css({marginLeft:'-100%'});
	});
}

siguiente.on('click',function() {
	moverD();
	
});

anterior.on('click',function() {
	moverI();
	
});

});