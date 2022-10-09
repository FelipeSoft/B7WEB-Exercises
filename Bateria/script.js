document.body.addEventListener("keyup", function(event){
    playSound(event.code.toLowerCase());
});

document.querySelector('button').addEventListener("click", function(){
    var input = document.querySelector("#input").value;

    if(input !== ''){
        var audioArray = input.split('');
        playComposition(audioArray);
        console.log(audioArray)
    }
});

function playSound(sound){
    var audioElement = document.querySelector(`#s_${sound}`);
    var keyElement = document.querySelector(`div[data-key="${sound}"]`);

    if(audioElement){
        audioElement.currentTime = 0;
        audioElement.play();
    }

    if(keyElement){
        keyElement.classList.add('active');
        setTimeout(()=>{
            keyElement.classList.remove('active');
        }, 300)
    }
}

function playComposition(audioArray){
    var wait = 0;

    for(let itemAudio of audioArray){
        setTimeout(()=>{
            playSound(`key${itemAudio}`);
        }, wait)

        wait += 250;
    }
}