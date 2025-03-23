let playerScore = 0;
let computerScore = 0;

const playerScoreElement = document.querySelector('#player-1-data .player-symbol');
const computerScoreElement = document.querySelector('#player-2-data .player-symbol');
const coopBtnElement = document.getElementById('coop-btn');
const cheatBtnElement = document.getElementById('cheat-btn');
const gameBoardSquares = document.querySelectorAll('.game-btn');
const gameOverOverlayElement = document.getElementById('game-over-overlay');
const gameOverMessageElement = document.getElementById('game-over-message');

function getRandomComputerChoice() {
    const choices = ['coop', 'cheat'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function handlePlayerChoice(playerChoice) {
    const computerChoice = getRandomComputerChoice();

    console.log('Player choice:', playerChoice);
    console.log('Computer choice:', computerChoice);

    updateScores(playerChoice, computerChoice);
    updateBoard(playerChoice, computerChoice);

    checkGameEnd();
}

function updateScores(playerChoice, computerChoice) {
    if (playerChoice === 'coop' && computerChoice === 'coop') {
        playerScore += 1;
        computerScore += 1;
    } else if (playerChoice === 'cheat' && computerChoice === 'cheat') {
        playerScore += 2;
        computerScore += 2;
    } else if (playerChoice === 'coop' && computerChoice === 'cheat') {
        playerScore += 3;
        computerScore -= 0;
    } else if (playerChoice === 'cheat' && computerChoice === 'coop') {
        computerScore += 3;
        playerScore -= 0;
    }

    playerScoreElement.textContent = playerScore;
    computerScoreElement.textContent = computerScore;
}

function updateBoard(playerChoice, computerChoice) {
    gameBoardSquares.forEach(square => square.style.backgroundColor = '');

    if (playerChoice === 'coop' && computerChoice === 'coop') {
        gameBoardSquares[0].style.backgroundColor = 'rgb(13, 76, 76)';
    } else if (playerChoice === 'cheat' && computerChoice === 'cheat') {
        gameBoardSquares[3].style.backgroundColor = 'rgb(13, 76, 76)';
    } else if (playerChoice === 'coop' && computerChoice === 'cheat') {
        gameBoardSquares[1].style.backgroundColor = 'rgb(13, 76, 76)';
    } else if (playerChoice === 'cheat' && computerChoice === 'coop') {
        gameBoardSquares[2].style.backgroundColor = 'rgb(13, 76, 76)';
    }
}
coopBtnElement.addEventListener('click', () => handlePlayerChoice('coop'));
cheatBtnElement.addEventListener('click', () => handlePlayerChoice('cheat'));

function checkGameEnd() {
    if(playerScore >= 10 && computerScore >= 10){
        endGame('egalite');
    }
    else if(playerScore <= -10 && computerScore <= -10){
        endGame('egalite');
    }
    else if (playerScore >= 10) {
        endGame('win');
    }else if(playerScore <= -10){
        endGame('lose');
    }
    else if(computerScore >= 10){
        endGame('lose');
    } else if (computerScore <= -10) {
        endGame('win');
    }
}

function endGame(result) {
    let message;

    if (result === 'win') {
        message = `Victoire ! Avec un score final de ${playerScore} contre ${computerScore}, vos décisions tactiques ont mené Solaris à la gloire !`;
    } else if (result === 'lose') {
        message = `Défaite. Score final : ${computerScore} contre ${playerScore}. Analysez vos choix et revenez plus fort !`;
    } else if(result === 'egalite'){
        message = `egalite`;

    }

    gameOverMessageElement.textContent = message;
    gameOverOverlayElement.style.display = 'grid';

    coopBtnElement.disabled = true;
    cheatBtnElement.disabled = true;
}
function closeOverlay(overlayId) {
    document.getElementById(overlayId).style.display = "none";
    coopBtnElement.disabled = false;
    cheatBtnElement.disabled = false;
    playerScore = 0;
    computerScore = 0;
    playerScoreElement.textContent = playerScore;
    computerScoreElement.textContent = computerScore;
    gameBoardSquares[0].style.backgroundColor = 'rgb(18, 108, 108)';
    gameBoardSquares[1].style.backgroundColor = 'rgb(18, 108, 108)';
    gameBoardSquares[2].style.backgroundColor = 'rgb(18, 108, 108)';
    gameBoardSquares[3].style.backgroundColor = 'rgb(18, 108, 108)';


}
const tipOne = document.getElementById('tip-one'); 
const avatar = document.getElementById('elprof');
const tipClose = document.getElementById('tip-close');
const tips = document.getElementById('tips');


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
function closeTips() {
    tips.style.display = "none";
    tipOne.style.display = "none";
    tipClose.style.display = "none";
}
tipClose.addEventListener("click", closeTips);

avatar.addEventListener("click", toggleTips);
const mainElement = document.getElementsByTagName('main')[0];

const scenario = document.getElementById("scenario");
const play = document.getElementById("play");
play.addEventListener("click", () => {
    scenario.style.display = 'none';
    mainElement.style.display = 'grid';
});

