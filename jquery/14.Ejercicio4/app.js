$(document).ready(function () {
    
 $('#buscar').on('click',function(){
     var tag = $('#palabra').val();
     $('.imagenes').text('cargando.....  ');
     $.getJSON("https://www.flickr.com/services/feeds/photos_public.gne?tags="+tag+"&tagmode=any&format=json&jsoncallback=?",function (data) {
             console.log(data.items)
            $.each(data.items, function (index, item) { 
                contenido = "<img src='" + item.media.m + "' />";
                $('.imagenes').append(contenido);
            });
           

       
    });
 })



});