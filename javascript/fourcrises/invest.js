const choix1Button = document.querySelector('.btn-choix1');
const choix2Button = document.querySelector('.btn-choix2');
const choix11Button = document.querySelector('.btn-choix11');
const choix12Button = document.querySelector('.btn-choix12');
const choix21Button = document.querySelector('.btn-choix21');
const choix22Button = document.querySelector('.btn-choix22');
const close11Button = document.querySelector('.btn-close11');
const close22Button = document.querySelector('.btn-close22');
const close12Button = document.querySelector('.btn-close12');
const close21Button = document.querySelector('.btn-close21');
const close1Button = document.querySelector('.btn-close1');
const close2Button = document.querySelector('.btn-close2');
const choix111Button = document.querySelector('.btn-choix111');
const choix112Button = document.querySelector('.btn-choix112');

const choixInvest = document.getElementById('choixInvest');
const choix11 = document.getElementById('choix11');
const choix21 = document.getElementById('choix21');

const fin11 = document.getElementById('fin11');
const fin12 = document.getElementById('fin12');
const fin21 = document.getElementById('fin21');
const fin22 = document.getElementById('fin22');

const message1Overlay = document.getElementById('message1');
const message2Overlay = document.getElementById('message2');
const message11Overlay = document.getElementById('message11');
const message12Overlay = document.getElementById('message12');
const message21Overlay = document.getElementById('message21');
const message22Overlay = document.getElementById('message22');
const backdrop1Element = document.getElementById('backdrop1');


const retourGrandeDepression = document.getElementById('grandeDepression');
const retourGrandeDepression2 = document.getElementById('grandeDepression2');
const goChocPetrolier2 = document.getElementById('chocPetrolier2');
const gocriseImmobilier2 = document.getElementById('criseImmobilier2');
const goChocPetrolier = document.getElementById('chocPetrolier');
const goCriseSanitaire = document.getElementById('criseSanitaire');
const titles2 = document.getElementById('titlesCrisesOverlay2');

function openMessage1Overlay() {
    backdrop1Element.style.display = 'block'; 
    message1Overlay.style.display = 'block'; 

  }

  function closeMessage1Overlay() {
    backdrop1Element.style.display = 'none'; 
    message1Overlay.style.display = 'none';
    choixInvest.style.display = 'none'; 
    choix1Button.style.display = 'none'; 
    choix2Button.style.display = 'none'; 
    choix11.style.display = 'block';
    choix11Button.style.display = 'block';
    choix12Button.style.display = 'block';
    
  }
  function openMessage2Overlay() {
    backdrop1Element.style.display = 'block'; 
    message2Overlay.style.display = 'block'; 
  }

  function closeMessage2Overlay() {
    backdrop1Element.style.display = 'none'; 
    message2Overlay.style.display = 'none';
    choixInvest.style.display = 'none'; 
    choix1Button.style.display = 'none'; 
    choix2Button.style.display = 'none'; 
    choix21.style.display = 'block';
    choix21Button.style.display = 'block';
    choix22Button.style.display = 'block';
    
  }
  function openMessage11Overlay() {
    backdrop1Element.style.display = 'block'; 
    message11Overlay.style.display = 'block'; 

  }

  function closeMessage11Overlay() {
    backdrop1Element.style.display = 'none';
    message11Overlay.style.display = 'none';
    choix11Button.style.display = 'none';
    choix12Button.style.display = 'none';
    choix11.style.display = 'none';
    fin11.style.display = 'block';
    choix111Button.style.display = 'block';
    choix112Button.style.display = 'block';
  }
  function openMessage21Overlay() {
    backdrop1Element.style.display = 'block'; 
    message21Overlay.style.display = 'block'; 
  }
  function closeMessage21Overlay() {
    backdrop1Element.style.display = 'none';
    message21Overlay.style.display = 'none';
    choix21Button.style.display = 'none';
    choix22Button.style.display = 'none';
    choix21.style.display = 'none';
    fin21.style.display = 'block';
    choix111Button.style.display = 'block';
    choix112Button.style.display = 'block';
  }
  function openMessage12Overlay() {
    backdrop1Element.style.display = 'block'; 
    message12Overlay.style.display = 'block'; 
  }
  function closeMessage12Overlay() {
    backdrop1Element.style.display = 'none';
    message12Overlay.style.display = 'none';
    choix11Button.style.display = 'none';
    choix12Button.style.display = 'none';
    choix11.style.display = 'none';
    fin12.style.display = 'block';
    choix111Button.style.display = 'block';
    choix112Button.style.display = 'block';
  }
  function openMessage22Overlay() {
    backdrop1Element.style.display = 'block'; 
    message22Overlay.style.display = 'block'; 
  }
  function closeMessage22Overlay() {
    backdrop1Element.style.display = 'none';
    message22Overlay.style.display = 'none';
    choix21Button.style.display = 'none';
    choix22Button.style.display = 'none';
    choix21.style.display = 'none';
    fin22.style.display = 'block';
    choix111Button.style.display = 'block';
    choix112Button.style.display = 'block';
  }
  function goNextCrises(){
    backdrop1Element.style.display = 'block';
     titles2.style.display = 'block';
  }

 


  choix1Button.addEventListener('click', openMessage1Overlay);
  choix2Button.addEventListener('click', openMessage2Overlay);
  close1Button.addEventListener('click',closeMessage1Overlay);
  choix11Button.addEventListener('click',openMessage11Overlay);
  close11Button.addEventListener('click',closeMessage11Overlay);
  close2Button.addEventListener('click',closeMessage2Overlay);
  choix21Button.addEventListener('click',openMessage21Overlay);
  close21Button.addEventListener('click',closeMessage21Overlay);
  choix12Button.addEventListener('click',openMessage12Overlay);
  close12Button.addEventListener('click',closeMessage12Overlay);
  choix22Button.addEventListener('click',openMessage22Overlay);
  close22Button.addEventListener('click',closeMessage22Overlay);
  retourGrandeDepression.addEventListener('click', function() {
    window.location.href = 'QuatreCrisesJeux.html'; // Yönlendirilmek istenen sayfanın URL'sini buraya yazın
  });
goChocPetrolier.addEventListener('click',goNextCrises);
goChocPetrolier2.addEventListener('click',function(){
  backdrop1Element.style.display = 'none';
  window.location.href = 'chocPetrolierJeux.html';
  
   // Yönlendirilmek istenen sayfanın URL'sini buraya yazın
});
retourGrandeDepression2.addEventListener('click',function(){
  backdrop1Element.style.display = 'none';
  window.location.href = 'QuatreCrisesJeux.html';
  
   // Yönlendirilmek istenen sayfanın URL'sini buraya yazın
});
gocriseImmobilier2.addEventListener('click',function(){
  backdrop1Element.style.display = 'none';
  window.location.href = 'criseImmobilierJeux.html';
  
   // Yönlendirilmek istenen sayfanın URL'sini buraya yazın
});
goCriseSanitaire.addEventListener('click',function(){
  backdrop1Element.style.display = 'none';
  window.location.href = 'criseSanitaire.html';
  
   // Yönlendirilmek istenen sayfanın URL'sini buraya yazın
});


  