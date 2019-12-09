//animate :::> ({propiedades de css},velocidad,function())
// bordes, margin, marginBottom, marginLeft, marginRight y marginTop
// padding, paddingBottom, paddingLeft, paddingRight y paddingTop
//height, width, maxHeight, maxWidth, 
// fontSize


$(document).ready(function () {
    
    $('#animar').on('click',function(){
        $('div').animate({fontSize:'60px',color:'red'},3000,function(){
            $('div').css({fontSize:'20px'});
        });
    })

 
   


});