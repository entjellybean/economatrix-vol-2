const advTrahirPrice = document.getElementById("trahir-price-adv");
const advCartelPrice = document.getElementById("cartel-price-adv");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const jeux= document.getElementById("jeux");
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

const bravoSurplus= document.getElementById("bravo-surplus"); 
const trySurplus= document.getElementById("try-surplus"); 
const submitSurplus= document.getElementById("submit-surplus"); 
const tipOne = document.getElementById("tip-one");
const tipOneSur = document.getElementById("tip-one-sur");

const tiptwo = document.getElementById("tip-two");
const btntipOne = document.getElementById("btn-tip-one");
const btntiptwo = document.getElementById("btn-tip-two");
const coffeeman = document.getElementById("coffeeman");
const coffeemanSur = document.getElementById("coffeeman-sur");

const cournotResult= document.getElementById("cournot-result");
const tipsSur= document.getElementById("tips-sur");
const tips= document.getElementById("tips");

const tipClose= document.getElementById("tip-close");
const tipCloseSur= document.getElementById("tip-close-sur");




// Butonları seç
const gameButtons = document.querySelectorAll(".game-btn");

// Butona tıklandığında üzerine yeni değer yazmak için event listener ekle
gameButtons.forEach(button => {
    button.addEventListener("click", () => {
        let newValue = prompt("Entrez les profits pour chaque scenario \n ex: (547,456)");
        if (newValue !== null && newValue.trim() !== "") {
            button.textContent = newValue;
        }
    });
});

const surplusButtons = document.querySelectorAll(".surplus-btn");

// Butona tıklandığında üzerine yeni değer yazmak için event listener ekle
surplusButtons.forEach(button => {
    button.addEventListener("click", () => {
        let newValue = prompt("Entrez les surplus consommateur  pour chaque scenario \n ex: 456 ");
        if (newValue !== null && newValue.trim() !== "") {
            button.textContent = newValue;
        }
    });
});



// Cartel ve Cartel-Adv Butonları
const priceButtons = [cartelPrice, advCartelPrice];

// Trahir ve Trahir-Adv Butonları
const trahirButtons = [trahirPrice, advTrahirPrice];

// Fiyatı güncelleyen fonksiyon
function updatePrice(buttons) {
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            let newValue = prompt("Entrez le prix dans cette scenario");
            if (newValue !== null && newValue.trim() !== "") {
                buttons.forEach(btn => btn.textContent = newValue);
            }
        });
    });
}

// Cartel ve Trahir fiyat butonlarını senkronize et
updatePrice(priceButtons);
updatePrice(trahirButtons);

function checkConditions() {
    return (
        cartelPrice.textContent === "6" &&
        trahirPrice.textContent === "9" &&
        btn1.textContent === "(139,139)" &&
        btn2.textContent === "(98,152)" &&
        btn3.textContent === "(152,98)" &&
        btn4.textContent === "(98,98)"
    );
}

function surplusConditions() {
    return (
        surplusBtn1.textContent === "144" &&
        surplusBtn2.textContent === "225" &&
        surplusBtn3.textContent === "225" &&
        surplusBtn4.textContent === "324"
    );
}



function surplusHandle() {
    if (surplusConditions()) {
            bravoSurplus.style.display = "block"; 
        } else {
            trySurplus.style.display = "block"; 
        }
    
}




submitSurplus.addEventListener("click", () =>  surplusHandle());

// Overlay kapatma fonksiyonu
function closeOverlay(overlayId) {
    document.getElementById(overlayId).style.display = "none";
}

function toggleTips() {
    if (tipOne.style.display === "block") {
        tipOne.style.display = "none";
    } else if (tiptwo.style.display === "block") {
        tiptwo.style.display = "none";
    } else if (cournotResult.style.display === "block") {
        cournotResult.style.display = "none";
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
    } else {
        tipsSur.style.display = "block";
        tipCloseSur.style.display = "block";
        tipOneSur.style.display = "block";
    }
}
coffeemanSur.addEventListener("click", toggleTipsSur);

function opentiptwo(){
    tipOne.style.display= "none";
    tiptwo.style.display= "block";

}
function openresult(){
    tipOne.style.display= "none";
    tiptwo.style.display= "none";
    cournotResult.style.display= "block";
}
function closeTips(){
    tips.style.display = "none";
    tipOne.style.display = "none";
    tiptwo.style.display = "none";
    cournotResult.style.display = "none";
}

function closeTipsSur(){
    tipsSur.style.display = "none";
    tipOneSur.style.display = "none";
}


btntipOne.addEventListener("click",opentiptwo);
btntiptwo.addEventListener("click",openresult);
tipClose.addEventListener("click",closeTips);
tipCloseSur.addEventListener("click",closeTipsSur);


const btnOpenSurplus = document.getElementById("open-surplus");
const surplusOverlay = document.getElementById("surplus-sec");

btnOpenSurplus.addEventListener('click', () => {
    surplusOverlay.style.display = 'grid';
    overlayBravo.style.display= 'none';
    jeux.style.display='none';
  });







const restartSurplus = document.getElementById("restart-surplus");

restartSurplus.addEventListener("click", () => {
    surplusButtons.forEach(button => {
        button.textContent = "..."; 
    });
    trySurplus.style.display = "none"; 
});

trahirButton.addEventListener('click', () => {
    if(checkConditions()){
        overlayBravo.style.display='block';
    }
    else{
        overlayMissing.style.display='block';
    }

    });
    cartelButton.addEventListener('click', () => {
        if(checkConditions()){
            overlayTryAgain.style.display='block';
        }
        else{
            overlayMissing.style.display='block';
        }
    
        });

