$(document).ready(function () {
    
$('#btn').on('click',function(){
      
 $.get('datos.json',function(datos){
        console.log(datos);
        $('.info').html(datos.nombre + "<br>" + datos.apellido)
 })


})

});