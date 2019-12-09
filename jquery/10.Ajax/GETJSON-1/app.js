$(document).ready(function () {
    
$('#btn').on('click',function(){
      
 $.getJSON("datos.json",function (data) {
          console.log(data)
          $.each(data.empleados, function (index, empleado) { 
                  $('.info').append('<li>' + empleado.nombre + '</li>')
          });  
   }
 );

 

})

});





