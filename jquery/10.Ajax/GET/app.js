
$(document).ready(function () {
        $('#boton').on('click',function(){
                $.get('datos.txt',function(dato,status,xhr){
                         console.log(dato);
                         console.log(status);
                         console.log(xhr);
                         $('#info').append(dato);
                });
        })
});