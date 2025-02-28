// Elementleri Seç
const advTrahirPrice = document.getElementById("trahir-price-adv");
const advCartelPrice = document.getElementById("cartel-price-adv");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const jeux = document.getElementById("jeux");
const trahirButton = document.getElementById("trahir");
const cartelButton = document.getElementById("cartel");



const trahirPrice = document.getElementById("trahir-price");
const cartelPrice = document.getElementById("cartel-price");
const overlayBravo = document.getElementById("overlay-bravo");
const overlayTryAgain = document.getElementById("overlay-tryagain");
const overlayMissing = document.getElementById("overlay-missing");

const surplusBtn1 = document.getElementById("surplus-btn1");
const surplusBtn2 = document.getElementById("surplus-btn2");
const surplusBtn3 = document.getElementById("surplus-btn3");
const surplusBtn4 = document.getElementById("surplus-btn4");

const surplusBravo = document.getElementById('surplus-bravo');
const surplusMissing =document.getElementById('surplus-missing');
const surplusContent = document.getElementById('surplus-content');

const submitSurplus = document.getElementById("submit-surplus");
const tipOne = document.getElementById("tip-one");
const tipOneSur = document.getElementById("tip-one-sur");

const tiptwo = document.getElementById("tip-two");
const btntipOne = document.getElementById("btn-tip-one");
const btntiptwo = document.getElementById("btn-tip-two");
const coffeeman = document.getElementById("coffeeman");
const coffeemanSur = document.getElementById("coffeeman-sur");

const tipsSur = document.getElementById("tips-sur");
const tips = document.getElementById("tips");

const tipClose = document.getElementById("tip-close");
const tipCloseSur = document.getElementById("tip-close-sur");

const mainElement = document.getElementsByTagName('main')[0];

const scenario = document.getElementById("scenario");
const play = document.getElementById("play");
const priceButtons = [cartelPrice, advCartelPrice];

const trahirButtons = [trahirPrice, advTrahirPrice];
play.addEventListener("click", () => {
    scenario.style.display = 'none';
    mainElement.style.display = 'grid';
});

const gameInputs = document.querySelectorAll(".game-btn");
const surplusButtons = document.querySelectorAll(".surplus-btn");

function updateResults() {
    cartelPrice.value = "6";  
    trahirPrice.value = "9"; 
advCartelPrice.value = "6";  
advTrahirPrice.value = "9";  
    btn1.value = "(139,139)";  
    btn2.value = "(98,152)";   
    btn3.value = "(152,98)";  
    btn4.value = "(98,98)";    
}

const resultButton = document.getElementById("btn-tip-two");
resultButton.addEventListener("click", () => {
    updateResults();  
    tips.style.display = 'none';
});

// Inputlara tıklanıldığında placeholder'ı temizle
gameInputs.forEach(input => {
    input.addEventListener("click", () => {
        input.placeholder = "";  // Placeholder'ı temizle
    });
});


function checkConditions() {
    return (
        cartelPrice.value === "6" &&
        trahirPrice.value === "9" &&
        advCartelPrice.value === "6" &&
        advTrahirPrice.value === "9" &&
        btn1.value === "(139,139)" &&
        btn2.value === "(98,152)" &&
        btn3.value === "(152,98)" &&
        btn4.value === "(98,98)"
    );
}

function surplusConditions() {
    return (
        surplusBtn1.value === "144" &&
        surplusBtn2.value === "225" &&
        surplusBtn3.value === "225" &&
        surplusBtn4.value === "324"
    );
}

function surplusHandle() {
    if (surplusConditions()) {
        surplusBravo.style.display = "grid";
    } else {
        surplusMissing.style.display = "grid";
    }
}



function closeOverlay(overlayId) {
    document.getElementById(overlayId).style.display = "none";
}

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

function toggleTipsSur() {
    if (tipOneSur.style.display === "block") {
        tipOneSur.style.display = "none";
        tipCloseSur.style.display = "none";

    } else {
        tipsSur.style.display = "block";
        tipCloseSur.style.display = "block";
        tipOneSur.style.display = "block";
    }
}

coffeemanSur.addEventListener("click", toggleTipsSur);

function opentiptwo() {
    tipOne.style.display = "none";
    tiptwo.style.display = "block";
}

function openresult() {
    tipOne.style.display = "none";
    tiptwo.style.display = "none";
}

function closeTips() {
    tips.style.display = "none";
    tipOne.style.display = "none";
    tiptwo.style.display = "none";
}

function closeTipsSur() {
    tipsSur.style.display = "none";
    tipOneSur.style.display = "none";
}

btntipOne.addEventListener("click", opentiptwo);
btntiptwo.addEventListener("click", openresult);
tipClose.addEventListener("click", closeTips);
tipCloseSur.addEventListener("click", closeTipsSur);

const btnOpenSurplus = document.getElementById("open-surplus");
const surplusOverlay = document.getElementById("surplus-sec");

btnOpenSurplus.addEventListener('click', () => {
    surplusOverlay.style.display = 'grid';
    overlayBravo.style.display = 'none';
    jeux.style.display = 'none';
});




trahirButton.addEventListener('click', () => {
    if (checkConditions()) {
        overlayBravo.style.display = 'grid';
    } else {
        overlayMissing.style.display = 'grid';
    }
});

cartelButton.addEventListener('click', () => {
    if (checkConditions()) {
        overlayTryAgain.style.display = 'grid';
    } else {
        overlayMissing.style.display = 'grid';
    }
});
trahirPrice.addEventListener("input", () => {
    advTrahirPrice.value = trahirPrice.value;
});
advTrahirPrice.addEventListener("input", () => {
    trahirPrice.value = advTrahirPrice.value;
});
cartelPrice.addEventListener("input", () => {
    advCartelPrice.value = cartelPrice.value;
});
advCartelPrice.addEventListener("input", () => {
    cartelPrice.value = advCartelPrice.value;
});

submitSurplus.addEventListener("click", () => surplusHandle());
