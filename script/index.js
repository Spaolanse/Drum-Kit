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
    if (key == "w" || key == "W") {
        const audioTomOne = new Audio("sounds/tom-1.mp3");
        audioTomOne.play();
    } else if (key == "a" || key == "A") {
        const audioTomTwo = new Audio("sounds/tom-2.mp3");
        audioTomTwo.play();
    } else if (key == "s" || key == "S") {
        const audioTomThree = new Audio("sounds/tom-3.mp3");
        audioTomThree.play();
    } else if (key == "d" || key == "D") {
        const audioTomFour = new Audio("sounds/tom-4.mp3");
        audioTomFour.play();
    } else if (key == "j" || key == "J") {
        const audioSnare = new Audio("sounds/snare.mp3");
        audioSnare.play();
    } else if (key == "k" || key == "K") {
        const audioCrash = new Audio("sounds/crash.mp3");
        audioCrash.play();
    } else if (key == "l" || key == "L") {
        const audioKick = new Audio("sounds/kick-bass.mp3");
        audioKick.play();
    } else {
        console.log('Invalid key!')
    }
}