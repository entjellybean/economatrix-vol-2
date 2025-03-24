const leaderButton = document.getElementById('leader');
const followerButton = document.getElementById('follower');
const leaderSent = document.getElementById('leaderSentence');
const followSent = document.getElementById('followerSentence');
const winOverlay = document.getElementById('win-overlay');
const loseOverlay = document.getElementById('lose-overlay');
const againplay = document.getElementById('againplay');
const first = document.getElementById('first-hint');
const second = document.getElementById('second-hint');
const hintButton = document.getElementById('hint');
const answerButton = document.getElementById('answer');
const closeButton = document.getElementById('close');
const avatarImage = document.getElementById('avatar');
const avatarText = document.getElementById('avatar-text');
const mainElement = document.getElementsByTagName('main')[0];
const scenario = document.getElementById("scenario");

let selectedRole = "";

leaderButton.addEventListener('click', () => {
  selectedRole = "chocoleader";
  scenario.style.display = 'none';
  mainElement.style.display = 'block';
  leaderSent.style.display = 'block';
  followSent.style.display = 'none';
});

followerButton.addEventListener('click', () => {
  selectedRole = "chocofollower";
  scenario.style.display = 'none';
  mainElement.style.display = 'block';
  followSent.style.display = 'block';
  leaderSent.style.display = 'none';

  const randomChoice = getRandomComputerChoice();
  followSent.textContent = `ChocoLeader a choisi de produire ${randomChoice} chocolats`;
});

function sendChoiceToServer(choice) {
  if (!selectedRole) return;

  fetch("/stackelberg/save", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      choice,
      role: selectedRole,
    }),
  })
    .then((res) => res.text())
    .then((msg) => {
      console.log("Kayıt sonucu:", msg);
    })
    .catch((err) => {
      console.error("Kayıt hatası:", err);
    });
}

function checkIfAllCorrect() {
  const allButtons = document.querySelectorAll('.dropdown-btn');
  return Array.from(allButtons).every(btn => btn.dataset.selected === 'correct');
}

["180", "240", "360"].forEach((id) => {
  const button = document.getElementById(id);
  button.addEventListener("click", () => {
    sendChoiceToServer(id);

    if (checkIfAllCorrect()) {
      winOverlay.style.display = 'grid';
    } else {
      loseOverlay.style.display = 'grid';
    }
  });
});

answerButton.addEventListener('click', function () {
  avatarText.style.display = 'none';
  second.style.display = 'none';
  first.style.display = 'none';
  closeButton.style.display = 'none';

  const dropdowns = document.querySelectorAll('.dropdown');

  dropdowns.forEach(dropdown => {
    const buttons = dropdown.querySelectorAll('.dropdown-btn');
    const correctAnswer = dropdown.querySelector('.correct');
    
    if (correctAnswer) {
      buttons.forEach(button => {
        button.textContent = correctAnswer.textContent;
        button.dataset.selected = 'correct';
      });
    }
  });
});

avatarImage.addEventListener('click', function () {
  avatarText.style.display = 'block';
  first.style.display = 'block';
  second.style.display = 'none';
});

hintButton.addEventListener('click', function () {
  avatarText.style.display = 'block';
  second.style.display = 'block';
  first.style.display = 'none';
});

closeButton.addEventListener('click', function () {
  avatarText.style.display = 'none';
});

againplay?.addEventListener('click', () => location.reload());

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

function closeOverlay(overlayId) {
  document.getElementById(overlayId).style.display = "none";
}
