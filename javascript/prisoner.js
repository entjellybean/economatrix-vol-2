const cartel = document.getElementById('cartel');
const trahir = document.getElementById('trahir');

const cheat = document.getElementById('overlay-cheat');
const coop = document.getElementById('overlay-coop');
const coopcheat = document.getElementById('overlay-coop-cheat');
const cheatcoop = document.getElementById('overlay-cheat-coop');


//cartel=denoncer=cheat
function getRandomComputerChoice() {
    const choices = ['cartel','cartel','cartel','trahir'];
    return choices[Math.floor(Math.random() * choices.length)];
}

cartel.addEventListener("click", () => {
    const computerChoice = getRandomComputerChoice(); 

    if(computerChoice == 'trahir'){
       cheatcoop.style.display='grid';
    }
    else{
        cheat.style.display='grid';

    }
});
trahir.addEventListener("click", () => {
    const computerChoice = getRandomComputerChoice(); 

    if(computerChoice == 'trahir'){
       coop.style.display='grid';
    }
    else{
        coopcheat.style.display='grid';

    }
});

const elprof= document.getElementById('elprof');
const tipOne = document.getElementById("tip-one");
const tips= document.getElementById("tips");
const tipClose= document.getElementById("tip-close");

function toggleTips() {
    if (tipOne.style.display === "block") {
        tipOne.style.display = "none";
        tipClose.style.display = "none";

     } else {
        tips.style.display = "block";
        tipClose.style.display = "block";
        tipOne.style.display = "block";
    }
}
elprof.addEventListener("click", toggleTips);

function closeTips(){
    tips.style.display = "none";
    tipOne.style.display = "none";
    tiptwo.style.display = "none";
}


tipClose.addEventListener("click",closeTips);
function closeOverlay(overlayId) {
    document.getElementById(overlayId).style.display = "none";
}

