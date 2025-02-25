const p10 = document.getElementById('10');
const p15 = document.getElementById('15');
const p25 = document.getElementById('25');
const p29 = document.getElementById('29');
const p35 = document.getElementById('35');

const tipOne = document.getElementById("tip-one");
const tiptwo = document.getElementById("tip-two");
const btntipOne = document.getElementById("btn-tip-one");
const btntiptwo = document.getElementById("btn-tip-two");
const coffeeman = document.getElementById("coffeeman");

const tips= document.getElementById("tips");
const tipClose= document.getElementById("tip-close");
const mainElement = document.getElementsByTagName('main')[0];

const scenario = document.getElementById("scenario");
const play = document.getElementById("play");
play.addEventListener("click", () => {
   scenario.style.display='none';
   mainElement.style.display='grid';
})

function toggleTips() {
    if (tipOne.style.display === "block") {
        tipOne.style.display = "none";
        tipClose.style.display = "none";

    } else if (tiptwo.style.display === "block") {
        tiptwo.style.display = "none";
        tipClose.style.display = "none";

    
    } else {
        tips.style.display = "block";
        tipClose.style.display = "block";
        tipOne.style.display = "block";
    }
}
coffeeman.addEventListener("click", toggleTips);
function opentiptwo(){
    tipOne.style.display= "none";
    tiptwo.style.display= "block";

}

function closeTips(){
    tips.style.display = "none";
    tipOne.style.display = "none";
    tiptwo.style.display = "none";
}




btntipOne.addEventListener("click",opentiptwo);
tipClose.addEventListener("click",closeTips);



function getRandomComputerChoice() {
    const choices = ['15', '25', '29', '35'];
    return choices[Math.floor(Math.random() * choices.length)];
}


const overlayNashBravo = document.getElementById("overlay-nash-bravo");
const overlayNoNashBravo = document.getElementById("overlay-no-nash-bravo");
const overlayDefait = document.getElementById("overlay-defait");
const overlayMal = document.getElementById("overlay-mal");
const overlayNashMal = document.getElementById("overlay-mal");


p25.addEventListener('click', () => handlePlayerChoice('25'));
p29.addEventListener('click', () => handlePlayerChoice('29'));
p35.addEventListener('click', () => handlePlayerChoice('35'));

p10.addEventListener("click", () => {
    overlayDefait.style.display="grid";
})
p15.addEventListener("click", () => {
    overlayDefait.style.display="grid";
})

const buttons = document.querySelectorAll('#human-game-board button');

buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        handlePlayerChoice(event.target.id); 
    });
});

function handlePlayerChoice(playerChoice) {
    const computerChoice = getRandomComputerChoice(); 

    if (playerChoice === '25') {
        if(computerChoice === '25'){     
        overlayMal.style.display = "grid"; 
        }
        else{
            overlayNoNashBravo.style.display = "grid"; 
    }
    }

      if (playerChoice === '29') {
        if(computerChoice === '35'){     
        overlayNashBravo.style.display = "grid"; 
        }
        else{
            overlayNashMal.style.display = "grid"; 
    }
    }

  if (playerChoice === '35') {
        if(computerChoice === '35'){     
        overlayNoNashBravo.style.display = "grid"; 
        }
        else{
            overlayMal.style.display = "grid"; 
    }
    }
}





