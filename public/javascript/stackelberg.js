const leaderButton = document.getElementById('leader');
const followerButton = document.getElementById('follower');
const leaderSent = document.getElementById('leaderSentence');
const followSent = document.getElementById('followerSentence');
const winButton= document.getElementById('360');
const button180 = document.getElementById('180');
const button240 = document.getElementById('240');
const againplay = document.getElementById('againplay');
const first= document.getElementById('first-hint');
const second=document.getElementById('second-hint');
const hintButton=document.getElementById('hint');
const answerButton=document.getElementById('answer');
const closeButton = document.getElementById('close');
const avatarImage = document.getElementById('avatar');
const avatarText = document.getElementById('avatar-text');
const mainElement = document.getElementsByTagName('main')[0];
const scenario = document.getElementById("scenario");





avatarImage.addEventListener('click', function() {
  avatarText.style.display = 'block'; 
  first.style.display = 'block';
  second.style.display = 'none';

});
hintButton.addEventListener('click', function() {
avatarText.style.display = 'block';  
second.style.display = 'block';
first.style.display = 'none';

});
answerButton.addEventListener('click', function() {
  avatarText.style.display = 'none';  
  second.style.display = 'none';
  first.style.display = 'none';
  closeButton.style.display = 'none';
  
  const dropdownButtons = document.querySelectorAll('.dropdown-btn');
  dropdownButtons.forEach(button => {
      const dropdownContent = button.nextElementSibling;
      if (dropdownContent) {
          const correctAnswer = dropdownContent.querySelector('.correct');
          if (correctAnswer) {
              button.textContent = correctAnswer.textContent;
              button.dataset.selected = 'correct';
          }
      }
  });

  const allBranches = document.querySelectorAll('.branch');
  allBranches.forEach(branch => {
      const button = branch.querySelector('.dropdown-btn');
      const dropdownContent = branch.querySelector('.dropdown-content');
      if (dropdownContent) {
          const correctAnswer = dropdownContent.querySelector('.correct');
          if (correctAnswer) {
              button.textContent = correctAnswer.textContent;
              button.dataset.selected = 'correct';
          }
      }
  });
});

closeButton.addEventListener('click', function() {
avatarText.style.display = 'none'; 

});


  function getRandomComputerChoice() {
    
    const choices = ['180', '240', '360'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
document.addEventListener('DOMContentLoaded', () => {
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
 
 leaderButton.addEventListener('click', () => handlePlayerChoice('leader'));
followerButton.addEventListener('click', () => handlePlayerChoice('follower'));

function handlePlayerChoice(playerChoice) {

    if (playerChoice === 'leader') {
        leaderSent.style.display = 'block';
        winButton.addEventListener('click', () => {
            const allButtons = document.querySelectorAll('.dropdown-btn');
            const allCorrect = Array.from(allButtons).every(btn => btn.dataset.selected === 'correct');
            if (allCorrect) {
             
              document.getElementById('win-overlay').style.display = 'grid';
            } else{
              document.getElementById('lose-overlay').style.display = 'grid';

            }
          }); 
          button180.addEventListener('click',() => {
            document.getElementById('lose-overlay').style.display = 'grid';
       }); 
       button240.addEventListener('click',() => {
        document.getElementById('lose-overlay').style.display = 'grid';
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
            if (allCorrect) {
             
              document.getElementById('win-overlay').style.display = 'grid';
              document.getElementById('follower-win').style.display = 'none';
            } else{
              document.getElementById('lose-overlay').style.display = 'grid';

            }
          }); 
          button180.addEventListener('click', () => {
              document.getElementById('lose-overlay').style.display = 'grid';
          }); 
          winButton.addEventListener('click', () => {
            document.getElementById('lose-overlay').style.display = 'grid';
        }); 

      }
      if(randomChoice === '360'){
        button180.addEventListener('click', () => {
            const allButtons = document.querySelectorAll('.dropdown-btn');
            const allCorrect = Array.from(allButtons).every(btn => btn.dataset.selected === 'correct');
            if (allCorrect) {
             
              document.getElementById('win-overlay').style.display = 'grid';
              document.getElementById('follower-win').style.display = 'none';

            } else{
              document.getElementById('lose-overlay').style.display = 'grid';

            }
          }); 
          button240.addEventListener('click', () => {
              document.getElementById('lose-overlay').style.display = 'grid';
          }); 
          winButton.addEventListener('click', () => {
            document.getElementById('lose-overlay').style.display = 'grid';
        }); 




      }
     
      }
 }

 document.addEventListener('DOMContentLoaded', (event) => {
  function restartGame() {
      console.log("Reloading the page to restart the game...");
      location.reload(); // Reload the entire page
  }
  const againPlayButton = document.getElementById('againplay');


againplay.addEventListener('click', restartGame);


if (againPlayButton) {
  againPlayButton.addEventListener('click', restartGame);
  console.log("Attached event listener to againplay button");
} else {
  console.log("againplay button not found");
}
});
leaderButton.addEventListener('click', () => {
scenario.style.display='none';
mainElement.style.display='block';
})
followerButton.addEventListener('click', () => {
  scenario.style.display='none';
  mainElement.style.display='block';
  })

  function closeOverlay(overlayId) {
    document.getElementById(overlayId).style.display = "none";
  }
 