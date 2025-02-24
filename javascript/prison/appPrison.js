// Oyuncu ve bilgisayar skorları
let playerScore = 0;
let computerScore = 0;

// DOM öğelerine erişim
const gameOverOverlayElement = document.getElementById('game-over-overlay');
const gameOverMessageElement = document.getElementById('game-over-message');
const resultImage = document.getElementById('result-image');
const restartBtnElement = document.getElementById('restart-btn');
const backdropElement = document.getElementById('backdrop');
const playerScoreElement = document.querySelector('#player-1-data .player-symbol');
const computerScoreElement = document.querySelector('#player-2-data .player-symbol');
const coopBtnElement = document.getElementById('coop-btn');
const cheatBtnElement = document.getElementById('cheat-btn');
const gameBoardSquares = document.querySelectorAll('#game-board li');

// Bilgisayarın rastgele bir seçim yapması için fonksiyon
function getRandomComputerChoice() {
    const choices = ['coop', 'cheat'];
    return choices[Math.floor(Math.random() * choices.length)];
}

// Oyuncu seçimi işleyicisi
function handlePlayerChoice(playerChoice) {
    const computerChoice = getRandomComputerChoice();

    console.log('Player choice:', playerChoice);
    console.log('Computer choice:', computerChoice);

    // Skorları ve tahtayı güncelle
    updateScores(playerChoice, computerChoice);
    updateBoard(playerChoice, computerChoice);

    // Skor durumlarını kontrol et
    checkGameEnd();
}

// Skorları güncelle
function updateScores(playerChoice, computerChoice) {
    if (playerChoice === 'coop' && computerChoice === 'coop') {
        playerScore -= 2;
        computerScore -= 2;
    } else if (playerChoice === 'cheat' && computerChoice === 'cheat') {
        playerScore += 0;
        computerScore += 0;
    } else if (playerChoice === 'coop' && computerChoice === 'cheat') {
        playerScore += 3;
        computerScore -= 1;
    } else if (playerChoice === 'cheat' && computerChoice === 'coop') {
        computerScore += 3;
        playerScore -= 1;
    }

    // Skorları DOM üzerinde güncelle
    playerScoreElement.textContent = playerScore;
    computerScoreElement.textContent = computerScore;
}

// Oyun tahtasını güncelle
function updateBoard(playerChoice, computerChoice) {
    gameBoardSquares.forEach(square => square.style.backgroundColor = '');

    if (playerChoice === 'coop' && computerChoice === 'coop') {
        gameBoardSquares[0].style.backgroundColor = 'purple';
    } else if (playerChoice === 'cheat' && computerChoice === 'cheat') {
        gameBoardSquares[3].style.backgroundColor = 'purple';
    } else if (playerChoice === 'coop' && computerChoice === 'cheat') {
        gameBoardSquares[1].style.backgroundColor = 'purple';
    } else if (playerChoice === 'cheat' && computerChoice === 'coop') {
        gameBoardSquares[2].style.backgroundColor = 'purple';
    }
}

// Oyunun bitip bitmediğini kontrol et
function checkGameEnd() {
    if (playerScore >= 5) {
        endGame('win');
    }else if(playerScore <= -5){
        endGame('lose');
    }
    else if(computerScore >= 5){
        endGame('lose');
    } else if (computerScore <= -5) {
        endGame('win');
    }
}

// Oyunu sonlandır
function endGame(result) {
    let message;

    if (result === 'win') {
        message = `Victoire ! Avec un score final de ${playerScore} contre ${computerScore}, vos décisions tactiques ont mené Solaris à la gloire !`;
        resultImage.src = "images/lose.png";
    } else if (result === 'lose') {
        message = `Défaite. Score final : ${computerScore} contre ${playerScore}. Analysez vos choix et revenez plus fort !`;
        resultImage.src = "images/win.png";
    }

    // Overlay'i ve mesajı göster
    gameOverMessageElement.textContent = message;
    gameOverOverlayElement.style.display = 'block';
    backdropElement.style.display = 'block';

    // Butonları devre dışı bırak
    coopBtnElement.disabled = true;
    cheatBtnElement.disabled = true;
}

// Oyunu yeniden başlat
function restartGame() {
    playerScore = 0;
    computerScore = 0;

    playerScoreElement.textContent = playerScore;
    computerScoreElement.textContent = computerScore;

    gameOverOverlayElement.style.display = 'none';
    backdropElement.style.display = 'none';

    // Butonları yeniden etkinleştir
    coopBtnElement.disabled = false;
    cheatBtnElement.disabled = false;

    // Oyun tahtasını sıfırla
    gameBoardSquares.forEach(square => square.style.backgroundColor = '');
}

// Event listenerlar
coopBtnElement.addEventListener('click', () => handlePlayerChoice('coop'));
cheatBtnElement.addEventListener('click', () => handlePlayerChoice('cheat'));
restartBtnElement.addEventListener('click', restartGame);