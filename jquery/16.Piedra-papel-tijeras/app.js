$(document).ready(function () {
    
    var jugador = $('#yo');
    var computadora = $('#computadora')
    var botones = $('button')
    var mensaje = $('#resultado')

    botones.on('click',empezandoJugar);


    function empezandoJugar(e){

        //Determinar la eleccion del jugador
        var eleccionyo = e.currentTarget.dataset.img 
        jugador.attr('src','images/' + eleccionyo + '.png');

        //Determinar la eleccion de la computadora
        var eleccionComputadora = elecComputadora();
        computadora.attr('src','images/' + eleccionComputadora + '.png')

        //Determinar quien gana
        var resultado = quienGana(eleccionyo,eleccionComputadora);  
       mensaje.html("Tú<strong>" + " "+ resultado + " " + "</strong>escogiendo<strong>" + " " + eleccionyo + " " + "</strong>en contra de <strong>"
       + " " + eleccionComputadora + " " + "</strong>.")


    }


function elecComputadora(){
        var posibilidades = ['piedra','papel','tijera'];
        var index = parseInt(Math.random()*3);
        return posibilidades[index];
}


function quienGana(eleccionyo,eleccionComputadora){
        if(eleccionyo === eleccionComputadora){
            return "empataste"
}
    

    if((eleccionyo === 'papel') && (eleccionComputadora === 'tijera')){
            return 'pierdes';
    }else if((eleccionyo === 'papel') && (eleccionComputadora === 'piedra')){
            return 'ganas';
     }else if((eleccionyo === 'tijera') && (eleccionComputadora === 'papel')){
            return 'ganas';
    }else if((eleccionyo === 'tijera') && (eleccionComputadora === 'piedra')){
            return 'pierdes';
    }else if((eleccionyo === 'piedra') && (eleccionComputadora === 'papel')){
            return 'pierdes';
    }else if((eleccionyo === 'piedra') && (eleccionComputadora === 'tijera')){
        return 'ganas'
    }
          

    }
       

      
    

        

    

    



   
   
//     //Lo que elige el jugador

//     if(eleccionyo === eleccionComputadora){
//         return "empataste"
//     }

//    switch (eleccionyo === 'papel') { 
// 	case eleccionComputadora === 'piedra': 
// 		alert('yo');
// 		break;
// 	case eleccionComputadora === 'tijera': 
// 		alert('compu');
//     }

//     switch (eleccionyo === 'tijera') { 
//         case eleccionComputadora === 'papel': 
//             alert('yo');
//             break;
//         case eleccionComputadora === 'piedra': 
//             alert('compu');
//         }


//         switch (eleccionyo === 'piedra') { 
//             case eleccionComputadora === 'papel': 
//                 alert('yo');
//                 break;
//             case eleccionComputadora === 'tijera': 
//                 alert('compu');
//             }

















});