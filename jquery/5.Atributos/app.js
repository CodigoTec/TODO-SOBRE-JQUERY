$(document).ready(function () {
   //attr  ::::> Para obtener el valor del atributo y cambiar ese valor
   //addClass ::::> Agrega la clase a mi elemento
   //removeClass ::::>Remueve la clase de mi elemento
   //removeAttr   :::>Remueve el atributo de mi elemento
  
   var atributo = $('input').attr('class');
   console.log(atributo);

   var atributo1 = $('input').attr('type','text');
   console.log(atributo1);

   $('#add').click(function(){
      $('#caja').addClass('contenido');
   })

   $('#remove').click(function(){
      $('#caja').removeClass('contenido');
   })
     

     
      

  

});