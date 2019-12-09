$(document).ready(function(){
    console.log("hola mundo");
   
    $('.html').mouseenter(
     function(){
         $('.html').addClass('color');
     }
    )

    $('.html').mouseleave(
        function(){
            $('.html').removeClass('color');
        }
    )


    $('.hide').click(
        function(e){
            e.preventDefault();
            $('.java').hide(4000);
        }
    )

    $('.show').click(
        function(){
            $('.java').show(2000);
        }
    )

    $('.animate').click(
        function(){
            $('.jquery').animate({
                fontSize: "2em",
            },'2000')
          
        }
    )

    $('.css').click(
        function(){
            $('.css').css({background:'rgb(145, 180, 221)',color:'white'});
        }
    )
   
    
       
    $('.angular').hover(
        function(){
             $('.angular').addClass('color2');
        }
    )
                    
    $('.angular').mouseleave(
        function(){
            $('.angular').removeClass('color2');
        }
    )




});