$(document).ready(function () {
    
  $('button').on('click',sonido);

   function sonido(e){
        var note = e.target.dataset.value
        var audio = $("#" + note)[0]
        audio.pause();
        audio.currentTime = 0;
        audio.play()
  }
  























     $(document).keydown(function(e){
        var key = e.key
    //     var button = $(`button[data-key="${key}"]`)
    //     if(button){
    //         button.click()
    //     }

    console.log(key)

           var audio = $(`audio[data-key="${key}"]`)[0]
                    console.log(audio)
        audio.pause();
        audio.currentTime = 0;
        audio.play()
     })

});