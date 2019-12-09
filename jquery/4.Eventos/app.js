//Eventos
//click
//mouseenter
//mouseleave
//hover
//keyup

$(document).ready(function () {
    //SINTAXIS::::>
    
    /*$(selector).on(events,handler);*/

     $('#boton1').click(function(){ 
       $('.h2-hide').hide(); 
     });

     $('#boton2').click(function(){ 
        $('.h2-hide').show(); 
      });

      $('.parrafo').mouseenter(function () { 
          $('.parrafo').css({fontSize:'50px'});
      });

      $('.parrafo').mouseleave(function(){
          $('.parrafo').css({fontSize:'10px'});
      });


      $('.h3-hover').hover(function () {
        $('.h3-hover').css({background:'red',color:'white'});
              
          }, function () {
            $('.h3-hover').css({background:'blue',color:'white'});
          }
      );

      $('input').keyup(function () { 
        var valor = $('input').val()
        $('.resultado').html(valor);
      });

});
