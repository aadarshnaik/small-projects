const drums = document.querySelectorAll('.drum');

drums.forEach(function(drum){
    drum.addEventListener('click',function(e){
        let alphabet = e.currentTarget.classList;
        drumsAudio(alphabet);

    });  
});
drums.forEach(function(drum){
    drum.addEventListener('keydown',function(e){
        alphabet.contains('w') = e.key
        drumsAudio(alphabet);
    });

    });  

function drumsAudio(alphabet){
    if (alphabet.contains('w')){
        var tom1 = new Audio('sounds/tom-1.mp3');
        tom1.play();
    }
    if (alphabet.contains('a')){
        var tom2 = new Audio('sounds/tom-2.mp3');
        tom2.play();
    }
    if (alphabet.contains('s')){
        var tom3 = new Audio('sounds/tom-3.mp3');
        tom3.play();
    }
    if (alphabet.contains('d')){
        var tom4 = new Audio('sounds/tom-4.mp3');
        tom4.play();
    }
    if (alphabet.contains('j')){
        var snare = new Audio('sounds/snare.mp3');
        snare.play();
    }
    if (alphabet.contains('k')){
        var crash = new Audio('sounds/crash.mp3');
        crash.play();
    }
    if (alphabet.contains('l')){
        var kick = new Audio('sounds/kick-bass.mp3');
        kick.play();
    }
}