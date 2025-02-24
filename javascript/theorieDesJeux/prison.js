const backdropElement = document.getElementById('backdrop');
const coop= document.getElementById('coop-btn');
const cheat= document.getElementById('cheat-btn');

const cas1= document.getElementById('cas1');
const cas2= document.getElementById('cas2');
const cas3= document.getElementById('cas3'); 
const cas4= document.getElementById('cas4');

const casOverlay= document.getElementById('cas-overlay')
const gameBoardSquares = document.querySelectorAll('#game-board li');

const again= document.getElementById('again')
const other= document.getElementById('other')

const avatarImage = document.getElementById('avatar-image');
const avatarText = document.getElementById('avatar-text');
const secondhint = document.getElementById('second-hint');
const firsthint = document.getElementById('first-hint');
const answer = document.getElementById('answer');
const hint = document.getElementById('hint');
const hintTexte=document.getElementById('reponse');
const plusButton=document.getElementById('plus-btn');

// Resme tıklandığında sabit paragrafın görünmesini sağlayan olay dinleyici
avatarImage.addEventListener('click', function() {
    avatarText.style.display = 'block';  // Paragrafı görünür yap
    secondhint.style.display='none';
    hintTexte.style.display='none';
});

hint.addEventListener('click', function() {
  avatarText.style.display = 'block';  // Paragrafı görünür yap
  firsthint.style.display='none';
  secondhint.style.display = 'block';
  hintTexte.style.display='none';

});
answer.addEventListener('click', function() {
  hintTexte.style.display = 'block';   // DÜZELTİLDİ
  secondhint.style.display = 'none';   // DÜZELTİLDİ
  firsthint.style.display = 'none';    // DÜZELTİLDİ
  avatarText.style.display = 'block';
});

const closeButton = document.getElementById('close');
closeButton.addEventListener('click',function(){
avatarText.style.display = 'none'; 
  });


  
  function getRandomComputerChoice() {
    
    const choices = ['coop', 'cheat'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
coop.addEventListener('click', () => handlePlayerChoice('coop'));
cheat.addEventListener('click', () => handlePlayerChoice('cheat'));

function handlePlayerChoice(playerChoice) {
    const computerChoice = getRandomComputerChoice();

    backdropElement.style.display = 'block';

    // Oyuncu ve bilgisayarın seçimlerine göre skor güncelleme
    if (playerChoice === 'coop' && computerChoice === 'coop') {
        casOverlay.style.display= 'block';
        cas2.style.display= 'none';
        cas3.style.display= 'none';
        cas4.style.display= 'none';
        gameBoardSquares[0].style.backgroundColor = 'purple';
       
        
    } else if (playerChoice === 'cheat' && computerChoice === 'cheat') {
        casOverlay.style.display= 'block';
        cas2.style.display= 'none';
        cas1.style.display= 'none';
        cas3.style.display= 'none';
        gameBoardSquares[3].style.backgroundColor = 'purple';
       
    } else if (playerChoice === 'coop' && computerChoice === 'cheat') {
        casOverlay.style.display= 'block';
        cas2.style.display= 'none';
        cas1.style.display= 'none';
        cas4.style.display= 'none';
        gameBoardSquares[1].style.backgroundColor = 'purple';
        
    } else if (playerChoice === 'cheat' && computerChoice === 'coop') {
        casOverlay.style.display= 'block';
        cas4.style.display= 'none';
        cas1.style.display= 'none';
        cas3.style.display= 'none';
        gameBoardSquares[2].style.backgroundColor = 'purple';
        
    }
    
     // Butonları devre dışı bırak
     coop.disabled = true;
     cheat.disabled = true;
 }
 
 
 // Yeniden Başlatma
 again.addEventListener('click', restartGame);
 
 function restartGame() {
     
 
 
    casOverlay.style.display = 'none';
    backdropElement.style.display = 'none';
 
     // Butonları yeniden etkinleştir
     coop.disabled = false;
     cheat.disabled = false;
     cas2.style.display= 'block';
        cas3.style.display= 'block';
        cas4.style.display= 'block';
        cas1.style.display= 'block';
 
     // Oyun tahtasındaki kareleri sıfırla
     gameBoardSquares.forEach(a => a.style.backgroundColor = '');
 }


coop.addEventListener('click', handlePlayerChoice);
cheat.addEventListener('click', handlePlayerChoice);
other.addEventListener('click',function(){
   
    window.location.href = 'TheoriesDeJeux.html';
 
  });

  plusButton.addEventListener('click',function(){
   
    window.location.href = 'prisonerInfo.html';
 
  });