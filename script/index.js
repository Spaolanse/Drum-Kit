document.querySelectorAll(".drum")[0].addEventListener("click", function(){
    const audioTomOne = new Audio("sounds/tom-1.mp3");
    audioTomOne.play();
});
document.querySelectorAll(".drum")[1].addEventListener("click", function(){
    const audioTomTwo = new Audio("sounds/tom-2.mp3");
    audioTomTwo.play();
});
document.querySelectorAll(".drum")[2].addEventListener("click", function(){
    const audioTomThree = new Audio("sounds/tom-3.mp3");
    audioTomThree.play();
});
document.querySelectorAll(".drum")[3].addEventListener("click", function(){
    const audioTomFour = new Audio("sounds/tom-4.mp3");
    audioTomFour.play();
});
document.querySelectorAll(".drum")[4].addEventListener("click", function(){
    const audioSnare = new Audio("sounds/snare.mp3");
    audioSnare.play();
});
document.querySelectorAll(".drum")[5].addEventListener("click", function(){
    const audioCrash = new Audio("sounds/crash.mp3");
    audioCrash.play();
});
document.querySelectorAll(".drum")[6].addEventListener("click", function(){
    const audioKick = new Audio("sounds/kick-bass.mp3");
    audioKick.play();
});

document.addEventListener("keypress", function(event){

    Sound(event.key);

});

function Sound(key) {

    switch(key){
        case "w":
        const audioTomOne = new Audio("sounds/tom-1.mp3");
        audioTomOne.play();
        break;

        case "a":
        const audioTomTwo = new Audio("sounds/tom-2.mp3");
        audioTomTwo.play();
        break;

        case "s":
        const audioTomThree = new Audio("sounds/tom-3.mp3");
        audioTomThree.play();
        break;

        case "d":
        const audioTomFour = new Audio("sounds/tom-4.mp3");
        audioTomFour.play();
        break;

        case "j":
        const audioSnare = new Audio("sounds/snare.mp3");
        audioSnare.play();
        break;

        case "k":
        const audioCrash = new Audio("sounds/crash.mp3");
        audioCrash.play();
        break;

        case "l":
        const audioKick = new Audio("sounds/kick-bass.mp3");
        audioKick.play();
        break;

        default: console.log(key);
    }
}