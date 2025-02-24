const backdropElement = document.getElementById('backdrop');
const coopBtnElement = document.getElementById('coop-btn');
const cheatBtnElement = document.getElementById('cheat-btn');
const gameBoardSquares = document.querySelectorAll('#game-board li');
const closeOverlay = document.getElementById('close-overlay');
const beginOverlay = document.getElementById('overlay-begin');
const trywin = document.getElementById('tryagain-win');
const trylose = document.getElementById('tryagain-lose');
const first= document.getElementById('first-hint');
const second=document.getElementById('second-hint');
const reponse=document.getElementById('reponse');
const hintButton=document.getElementById('hint');
const answerButton=document.getElementById('answer');
const closeButton = document.getElementById('close');



closeOverlay.addEventListener('click', function(){
  beginOverlay.style.display= 'none';
   });
  const avatarImage = document.getElementById('avatar-image');
  const avatarText = document.getElementById('avatar-text');
  
  // Resme tıklandığında sabit paragrafın görünmesini sağlayan olay dinleyici
  avatarImage.addEventListener('click', function() {
      avatarText.style.display = 'block';  // Paragrafı görünür yap
      second.style.display = 'none';
      reponse.style.display = 'none';
  });
  hintButton.addEventListener('click', function() {
    avatarText.style.display = 'block';  // Paragrafı görünür yap
    second.style.display = 'block';
    reponse.style.display = 'none';
    first.style.display = 'none';
});
answerButton.addEventListener('click', function() {
  avatarText.style.display = 'block';  // Paragrafı görünür yap
  second.style.display = 'none';
  reponse.style.display = 'block';
  first.style.display = 'none';
});
closeButton.addEventListener('click', function() {
  avatarText.style.display = 'none';  // Paragrafı görünür yap
 
});
  

  
document.addEventListener('DOMContentLoaded', () => {
    // Dropdown seçimlerini işlemek
    document.querySelectorAll('.dropdown').forEach(dropdown => {
      const button = dropdown.querySelector('.dropdown-btn');
      const items = dropdown.querySelectorAll('.dropdown-item, .correct');
  
      items.forEach(item => {
        item.addEventListener('click', () => {
          button.textContent = item.textContent;
          button.dataset.selected = item.classList.contains('correct') ? 'correct' : 'incorrect';
        });
      });
    });
  
    // Cheat butonuna basıldığında kontrol
    const cheatButton = document.getElementById('cheat-btn');
    cheatButton.addEventListener('click', () => {
      const allButtons = document.querySelectorAll('.dropdown-btn');
      const allCorrect = Array.from(allButtons).every(btn => btn.dataset.selected === 'correct');
  
      if (allCorrect) {
        document.getElementById('backdrop').style.display = 'block';
        document.getElementById('win-overlay').style.display = 'block';
      } else{
        document.getElementById('lose-overlay').style.display = 'block';
      }
    });
  });
  const coopButton = document.getElementById('coop-btn');
  coopButton.addEventListener('click', () => {
    document.getElementById('lose-overlay').style.display = 'block';
  })

    trywin.addEventListener('click', () => {
      document.getElementById('win-overlay').style.display = 'none';
     backdropElement.style.display= 'none';
  // Dropdown seçimlerini sıfırla
  document.querySelectorAll('.dropdown-btn').forEach(button => {
    button.textContent = '▼';
    delete button.dataset.selected;
  });
    });
      trylose.addEventListener('click', () => {
        document.getElementById('lose-overlay').style.display = 'none';
        backdropElement.style.display= 'none';
  // Dropdown seçimlerini sıfırla
    document.querySelectorAll('.dropdown-btn').forEach(button => {
      button.textContent = '▼';
      delete button.dataset.selected;
    });
      });
  
  










