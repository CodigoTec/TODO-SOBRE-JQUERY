$(document).ready(function () {
    
    // $('#boton1').click(function(){
    //     $('#caja').addClass('rojo');
    //     $('#caja').removeClass('verde');
    //     $('#caja').removeClass('azul');
    // })

    // $('#boton2').click(function(){
    //     $('#caja').addClass('verde');
    //     $('#caja').removeClass('azul');
    //     $('#caja').removeClass('rojo');
    // })

    // $('#boton3').click(function(){
    //     $('#caja').addClass('azul');
    //     $('#caja').removeClass('rojo');
    //     $('#caja').removeClass('verde');
    // })



        
    // $('#boton1').click(function(){
    //     $('#caja').removeClass().addClass('rojo');
    // })

        
    // $('#boton2').click(function(){
    //     $('#caja').removeClass().addClass('verde');
    // })


        
    // $('#boton3').click(function(){
    //     $('#caja').removeClass().addClass('azul');
    // })


    $('#botones').on('click', 'button',function () {
        $('#caja').removeClass().addClass($(this).attr('value'));
    });






    //Ejercicio de Efectos

    $('.aparecer').click(function(){
        $('.varon').fadeIn('5000');
    })

    $('.desaparecer').click(function(){
        $('.varon').fadeOut('5000');
    })


    
    $('.toggle').click(function(){
        $('.parrafo').slideToggle('3000');
    })

   



 




    
});