$(document).ready(function () {

    //$('selector').on('click',handler);
    //$(selector).click(handeler);
    //evento ::::> es un objeto con mucha informacion acerca del evento que ocurrio.
    //Propagacion de Eventos ::::> Detener la propagacion
    //Delegacion de Eventos  :::> Escuchos al contenedor (Cuando tienes muchos elementos y le quieres aplicar el mismo evento)
    //Triggering             :::> Es hacer que un evento dispare otro
    //Prevent default      ::::> Prevenir el comportamiento predeteminado del navegador.

    // $('div').on('mouseenter mouseleave click',function(){
    //     $(this).toggleClass('rojo');
    // })


  
   $('#evento').on('click',function(e){
      console.log(e)
   })

   $('#enlace').on('click',function(e){
        e.preventDefault()
       $('div').css({background:'black'});
   })

   $('#hijo').on('click',function(e){
       e.stopPropagation()
       console.log('esta escuchando el hijo')
   })

   $('#padre').on('click',function(){
       console.log('esta essuchando el padre')
   })

   $('#padre-botones').on('click','p',function(){
       alert('funcionando');
   })


   //$(selector).trigger(eventType);


   $( "#foo" ).on( "click", function() {
       alert( $(this).text() );
  });


  
   $( "#foo" ).trigger( "click" );

  



    
   
    
     
    


});