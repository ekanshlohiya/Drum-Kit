
//this part of code will fetch the length of the buttons array and add event listener of mouse click on each of them
var noOfDrumButtons=document.querySelectorAll(".drum").length;
for(var i=0;i<noOfDrumButtons;i++)
{ 
    document.querySelectorAll(".drum")[i].addEventListener("click",function handleClick(){ //it will fetch the inner html of the button and based upon that, play the corresponding sound
        var buttonInnerHtml=this.innerHTML;
        makeSound(buttonInnerHtml);
        addAnimation(buttonInnerHtml);
    });
} 


//adding event listener to keyboard key presses
document.addEventListener("keydown",function(event){
    makeSound(event.key);
    addAnimation(event.key);
});

//function that will play the sound when the event happens
function makeSound(key){
    switch(key){
        case "w":
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
        break;
        case "a":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
        break;
        case "s":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
        break;
        case "d":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
        break;
        case "j":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
        break;
        case "k":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
        break;
        case "l":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
        break;
        default: console.log(buttonInnerHtml);
    }
}

function addAnimation(key){
    var activebutton=document.querySelector("."+key);
    activebutton.classList.add("pressed");
    setTimeout(function(){
        activebutton.classList.remove("pressed");
    },200);
}