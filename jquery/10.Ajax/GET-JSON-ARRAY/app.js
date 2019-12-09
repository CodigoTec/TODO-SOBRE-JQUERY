// $(document).ready(function () {
    
// $('#btn').on('click',function(){
      
//  $.get('datos.json',function(datos){
//         console.log(datos);
//         if($('.info').empty()){
//               $.each(datos,function(index,persona){
//                      $('.info').append(persona.nombre + "<br>" + persona.apellido)
//                })
//         }
        
//  })


// })

// });

$(document).ready(function () {
    $('#btn').on('click',function(){

      $.get('datos.json',function(data){
         
        if($('.info').empty()){
            $.each(data, function (index, item) { 
                $('.info').append('<li>' + item.curso + '</li>')
           });
        }
    
      

      })

    })



});

