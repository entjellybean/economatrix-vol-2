const sc1Button = document.querySelector(".sc1");
const sc2Button = document.querySelector(".sc2");
const sc3Button = document.querySelector(".sc3");
const sc4Button = document.querySelector(".sc4");
const backdrop = document.getElementById("backdrop7");

const grandeDepression= document.getElementById("grandeDepression2");
const chocPetrolier=document.getElementById("chocPetrolier2");
const criseImmobilierJeux=document.getElementById("criseImmobilier2");
const criseSanitaire=document.getElementById("criseSanitaire");

const endToBeginning = document.getElementById("endToBeginning");
const endToChoice = document.getElementById("endToChoice");
const tryagain = document.getElementById("tryagain");
const fin = document.getElementById("finNette");
const tryAgain = document.getElementById("tryAgain");
const crises = document.getElementById("titlesCrisesOverlay2")
function bravo(){
   fin.style.display = 'block';
   backdrop.style.display = 'block';
}
function badChoice(){
    tryAgain.style.display = 'block';
    backdrop.style.display = 'block';
 }
function goToBeginning(){
    window.location.href = 'QuatreCrisesJeux.html';
 }
  function start(){
    tryAgain.style.display = 'none';
    backdrop.style.display = 'none';
 }
 function goToRandom(){
    fin.style.display = 'none';
    crises.style.display='block';
 }

sc1Button.addEventListener('click',bravo);
sc2Button.addEventListener('click',badChoice);
sc3Button.addEventListener('click',badChoice);
sc4Button.addEventListener('click',badChoice);
endToBeginning.addEventListener('click',goToBeginning);
endToChoice.addEventListener('click',goToRandom);
tryagain.addEventListener('click',start);

chocPetrolier.addEventListener('click',function(){
   
    window.location.href = 'chocPetrolierJeux.html';
 
  });
  grandeDepression.addEventListener('click',function(){
   
    window.location.href = 'QuatreCrisesJeux.html';
    
  });
  criseImmobilierJeux.addEventListener('click',function(){
   
    window.location.href = 'criseImmobilierJeux.html';
    
  });
  criseSanitaire.addEventListener('click',function(){
   
    window.location.href = 'criseSanitaire.html';
    
  });