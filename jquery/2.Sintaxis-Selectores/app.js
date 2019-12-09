//Selectores
// $("h1").show();
// jQuery(".ultimo").show();
//etiqueta
//clase
//id
//first
//last

$(document).ready(function () {
    console.log("hola mundo funcionando");

    /*_____________________sintaxis_________________*/
        
        // $('h1').hide();  /* Selector :::> Accion */

    /*____________________Selectores_______________*/

    //document.querySelector('.dia')........vanilla.js
    
        $('h3').css({color:'blue'}); //Por etiqueta
        $('.dia').css({color:'red'}); //Por Clase
        $('#soyId').css({background:'black',color:'white'}); //Por Id
        $('h4:first').css({background:'blue'}); //Primer elemento
        $('h4:last').css({background:'blue'}); //Ultimo elemento
        


});
