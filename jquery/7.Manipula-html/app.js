$(document).ready(function () {
    
    // $('<li>cacita</li>').insertAfter($('#lista'))
    //$('<li>hhhhh</li>').appendTo($('#lista'))

    //$('#lista').after('hahhaha')
  


    /*Afuera*/

    //before() :::> 	Inserta contenido antes del elemento seleccionado
    //after()  :::> 	Inserta contenido después del elemento seleccionado
    //insertBefore() ::::> Inserta elementos HTML antes del elemento seleccionado
    //insertAfter()  ::::> Inserta elementos HTML despues del elemento seleccionado


    /*Adentro*/

    //append() :::::::> Inserta contenido al final  del elemento seleccionado
    //prepend() :::::::> Inserta contenido al principio del elemento seleccionado
    //appendTo() :::::> Inserta elementos HTML al final  del elemento seleccionado
    //prependTo() ::::::> Inserta elementos HTML al principio  del elemento seleccionado
    //wrap() ::::::::> 	Envuelve elementos HTML alrededor de cada elemento seleccionado

       $('#btn').on('click',function(){
           //$('#lista').before('tres');
           //$('#lista').after('<p>cuatro</p>');
           //$('<li>tres</li>').insertBefore($('#lista'))
           //$('<li>cuatro</li>').insertAfter($('#lista'))
           //$('#lista').prepend('hola como estas');
           //$('p').wrap('<div></div>');

           $('<p>antes</p>').insertAfter($('#lista'))

           

       })



});