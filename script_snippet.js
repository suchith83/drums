function makeSound(key) {
    switch (key) {
        case "w":
            var audio = new Audio("https://suchith83.github.io/drum_sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("https://suchith83.github.io/drum_sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("https://suchith83.github.io/drum_sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("https://suchith83.github.io/drum_sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("https://suchith83.github.io/drum_sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("https://suchith83.github.io/drum_sounds/crash.mp3"); 
            audio.play();
            break;
        case "l":
            var audio = new Audio("https://suchith83.github.io/drum_sounds/kick-bass.mp3");
            audio.play();
            break;
        default:
            break;
    }
}

// Detecting keyboard press
document.addEventListener("keydown", function(event) {
    
    var key = event.key;
    makeSound(key);
});
