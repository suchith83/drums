// document.querySelector("button").addEventListener("click", handleClick);

// document.querySelector("button").addEventListener("click", function (){
//     alert("I got clicked!");

//     // what to do when the button is clicked
// })

function handleClick() {
    alert("I got clicked!");
}

function makeSound(key) {
    switch(key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break; 
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        default:
            console.log(btnInnerHTML);
    }
}

// Detecting button press

var btns = document.querySelectorAll(".drum");
for(var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var btnInnerHTML = this.innerHTML;
        makeSound2(btnInnerHTML);
        buttonAnimation(btnInnerHTML);
    });
    btns[i].addEventListener("touchstart", function () {
        event.preventDefault();
        var btnInnerHTML = this.innerHTML;
        makeSound2(btnInnerHTML);
        buttonAnimation(btnInnerHTML);
    });
}

// Detecting keyboard press
document.addEventListener("keydown", function(event) {
    var key = event.key;
    makeSound(key);
    buttonAnimation(key);
});

const soundElements = {
    w : document.getElementById("w"),
    a : document.getElementById("a"),
    s : document.getElementById("s"),
    d : document.getElementById("d"),
    j : document.getElementById("j"),
    k : document.getElementById("k"),
    l : document.getElementById("l")
}

function makeSound2(key) {
    if (soundElements[key]) {
        const clonedAudio = soundElements[key].cloneNode();
        clonedAudio.play();
    }
}

// Detecting keyboard press
function makeSound(key) {
    switch(key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break; 
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        default:
            console.log(btnInnerHTML);
    }
}


function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}