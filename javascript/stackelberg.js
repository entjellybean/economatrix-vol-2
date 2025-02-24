const scenarioOverlay = document.getElementById('scenario-overlay');
const backdropElement = document.getElementById('backdrop1');
const leaderButton = document.getElementById('leader');
const followerButton = document.getElementById('follower');
const leaderSent = document.getElementById('leaderSentence');
const followSent = document.getElementById('followerSentence');
const winButton= document.getElementById('360');
const button180 = document.getElementById('180');
const button240 = document.getElementById('240');
const againtry = document.getElementById('againtry');
const againplay = document.getElementById('againplay');

const first= document.getElementById('first-hint');
const second=document.getElementById('second-hint');
const reponse=document.getElementById('reponse');
const hintButton=document.getElementById('hint');
const answerButton=document.getElementById('answer');
const closeButton = document.getElementById('close');
const avatarImage = document.getElementById('avatar');
const avatarText = document.getElementById('avatar-text');

avatarImage.addEventListener('click', function() {
  avatarText.style.display = 'block';  // Paragrafı görünür yap
  first.style.display = 'block';

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

  // Tüm dropdown butonlarını seçiyoruz
  const dropdownButtons = document.querySelectorAll('.dropdown-btn');
  dropdownButtons.forEach(button => {
      // İlgili dropdown içeriğini buluyoruz
      const dropdownContent = button.nextElementSibling;
      if (dropdownContent) {
          // Doğru cevabı buluyoruz
          const correctAnswer = dropdownContent.querySelector('.correct');
          if (correctAnswer) {
              // Butonun içeriğini doğru cevapla değiştiriyoruz
              button.textContent = correctAnswer.textContent;
              button.dataset.selected = 'correct';
          }
      }
  });
});
closeButton.addEventListener('click', function() {
avatarText.style.display = 'none';  // Paragrafı görünür yap

});


  function closeScenarioOverlay() {
    backdropElement.style.display = 'none'; 
    scenarioOverlay.style.display = 'none'; 
  }
  function getRandomComputerChoice() {
    
    const choices = ['180', '240', '360'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
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
  
    
  });
 leaderButton.addEventListener('click', closeScenarioOverlay);
 followerButton.addEventListener('click', closeScenarioOverlay);


 leaderButton.addEventListener('click', () => handlePlayerChoice('leader'));
followerButton.addEventListener('click', () => handlePlayerChoice('follower'));

function handlePlayerChoice(playerChoice) {

    if (playerChoice === 'leader') {
        leaderSent.style.display = 'block';
        winButton.addEventListener('click', () => {
            const allButtons = document.querySelectorAll('.dropdown-btn');
            const allCorrect = Array.from(allButtons).every(btn => btn.dataset.selected === 'correct');
            document.getElementById('backdrop1').style.display = 'block';
            if (allCorrect) {
             
              document.getElementById('win-overlay').style.display = 'block';
            } else{
              document.getElementById('lose-overlay').style.display = 'block';

            }
          }); 
          button180.addEventListener('click',() => {
            document.getElementById('backdrop1').style.display = 'block';
            document.getElementById('lose-overlay').style.display = 'block';
       }); 
       button240.addEventListener('click',() => {
        document.getElementById('backdrop1').style.display = 'block';
        document.getElementById('lose-overlay').style.display = 'block';
   }); 
 }
 if (playerChoice === 'follower') { 

    const randomChoice = getRandomComputerChoice(); // Rastgele seçimi al
        followSent.style.display = 'block';
        followSent.textContent = `ChocoLeader a choisi de produire ${randomChoice} chocolats`;
      if(randomChoice === '180' || randomChoice === '240' ){
        button240.addEventListener('click', () => {
            const allButtons = document.querySelectorAll('.dropdown-btn');
            const allCorrect = Array.from(allButtons).every(btn => btn.dataset.selected === 'correct');
            document.getElementById('backdrop1').style.display = 'block';
            if (allCorrect) {
             
              document.getElementById('win-overlay').style.display = 'block';
              document.getElementById('follower-win').style.display = 'none';
            } else{
              document.getElementById('lose-overlay').style.display = 'block';

            }
          }); 
          button180.addEventListener('click', () => {
            document.getElementById('backdrop1').style.display = 'block';
              document.getElementById('lose-overlay').style.display = 'block';
          }); 
          winButton.addEventListener('click', () => {
            document.getElementById('backdrop1').style.display = 'block';
            document.getElementById('lose-overlay').style.display = 'block';
        }); 

      }
      if(randomChoice === '360'){
        button180.addEventListener('click', () => {
            const allButtons = document.querySelectorAll('.dropdown-btn');
            const allCorrect = Array.from(allButtons).every(btn => btn.dataset.selected === 'correct');
            document.getElementById('backdrop1').style.display = 'block';
            if (allCorrect) {
             
              document.getElementById('win-overlay').style.display = 'block';
              document.getElementById('follower-win').style.display = 'none';

            } else{
              document.getElementById('lose-overlay').style.display = 'block';

            }
          }); 
          button240.addEventListener('click', () => {
              document.getElementById('lose-overlay').style.display = 'block';
          }); 
          winButton.addEventListener('click', () => {
            document.getElementById('lose-overlay').style.display = 'block';
        }); 




      }
     
      }
 }

 document.addEventListener('DOMContentLoaded', (event) => {
  function restartGame() {
      console.log("Reloading the page to restart the game...");
      location.reload(); // Reload the entire page
  }
  const againTryButton = document.getElementById('againtry');
  const againPlayButton = document.getElementById('againplay');

againtry.addEventListener('click', restartGame);
againplay.addEventListener('click', restartGame);

if (againTryButton) {
  againTryButton.addEventListener('click', restartGame);
  console.log("Attached event listener to againtry button");
} else {
  console.log("againtry button not found");
}
if (againPlayButton) {
  againPlayButton.addEventListener('click', restartGame);
  console.log("Attached event listener to againplay button");
} else {
  console.log("againplay button not found");
}
});

 