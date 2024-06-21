function animation(currentKey) {
    const button = document.querySelector("." + currentKey);
    button.classList.add("pressed");

    setTimeout(function() {
        button.classList.remove("pressed");
    }, 50);
}

const drumLength = document.querySelectorAll(".drum").length;

for (var i = 0; i < drumLength; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        const buttonClicked = this.innerHTML;
        sound(buttonClicked);
        animation(buttonClicked);
    }); 
};

document.addEventListener("keypress", function(event){
    sound(event.key.toLowerCase());
    animation(event.key.toLowerCase());
});

function sound(key) {
    switch(key) {
        case "w": case "W":
            const audioTomOne = new Audio("sounds/tom-1.mp3");
            audioTomOne.play();
            break;
        case "a": case "A":
            const audioTomTwo = new Audio("sounds/tom-2.mp3");
            audioTomTwo.play();
            break;
        case "s": case "S":
            const audioTomThree = new Audio("sounds/tom-3.mp3");
            audioTomThree.play();
            break;
        case "d": case "D":
            const audioTomFour = new Audio("sounds/tom-4.mp3");
            audioTomFour.play();
            break;
        case "j": case "J":
            const audioSnare = new Audio("sounds/snare.mp3");
            audioSnare.play();
            break;
        case "k": case "K":
            const audioCrash = new Audio("sounds/crash.mp3");
            audioCrash.play();
            break;
        case "l": case "L":
            const audioKick = new Audio("sounds/kick-bass.mp3");
            audioKick.play();
            break;
        default:
            console.log('Invalid key!');
    }
}