const circleProgress = document.querySelector(".circle-progress");
const numberOfBreaths = document.querySelector(".breath-input");
const start = document.querySelector(".start");
const instructions = document.querySelector(".instructions");
const breathsText = document.querySelector(".breaths-text");
let breathsLeft = 3; 

// Watching for selected breaths from user 
numberOfBreaths.addEventListener("change", () => {
    breathsLeft = numberOfBreaths.value;
    breathsText.innerText = breathsLeft;
});

// Grow and shrink our circle 

const growcircle = ()=> {
    circleProgress.classList.add('circle-grow');
    setTimeout(() => {
        circleProgress.classList.add('circle-grow');
    }, 8000);
}; 

//Breathing Instructions 
const breathTextUpdate = () => {
    breathsLeft --;
    breathsText.innerText= breathsLeft;
    instructions.innerText="Breath in";
    setTimeout(() => {
        instructions.innerText = "Hold Breath";
        setTimeout(() => {
            instructions.innerText="Exhale Breath Slowly";
        }, 4000);
    }, 4000);
};

//Start Breathing 
start.addEventListener("click", ()=> {
    growcircle();
    breathTextUpdate();
});


