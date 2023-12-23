function playarticle(number){
	var audio = document.getElementById("" + number)
    if(audio.paused){
        audio.play()
    } else {
        audio.pause()
    }
}