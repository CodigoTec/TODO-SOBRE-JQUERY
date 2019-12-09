// $(document).ready(function () {
    
// $('#btn').on('click',function(){
      
// $.ajax({
//         type: "GET",
//         url: "datos.json",
//         dataType: "json",
//         success: function (data) {
//              console.log(data)
//              if($('.info').empty()){
//                 $.each(data.empleados, function (index, empleado) { 
//                         $('.info').append(empleado.nombre + '<br>')
//                 }); 
//              }
//         },
//         error:function(xhr,status,error){
//           console.log('url incorrecta')
//           console.log(status)
//         },
        
// });
 


// })

// });

$(document).ready(function () {
        $('#btn').on('click',function(){
            
                $.ajax({
                        type: "GET",
                        url: "datos.json",
                        dataType: "json",
                        success: function (response) {

                              $.each(response.empleados, function (i, empleado) { 
                                       $('.info').append(empleado.nombre + "<br>")
                              });
                        },
                        error: function (){
                          console.log('no se encuentra los datos')
                        }
                });
        })

});