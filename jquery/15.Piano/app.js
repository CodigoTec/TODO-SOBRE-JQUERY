var botones = document.querySelectorAll('button');

for (let index = 0; index < botones.length; index++) {
    const element = botones[index];
    element.addEventListener('click',sonido);
    
}

function sonido(event){
    var note = event.target.getAttribute("value");
    var audio = document.querySelector('#' + note);
        audio.pause();
        audio.currentTime = 0;
        audio.play()
}

























// document.addEventListener('keydown',function(event){
//     const key = event.key
//     const button = document.querySelector(`button[data-key="${key}"]`)
//     if(button){
//         button.click();
//     }
// })
