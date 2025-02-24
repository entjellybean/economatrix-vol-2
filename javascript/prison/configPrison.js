function openPlayerConfig(event) {
  editedPlayer= +event.target.dataset.playerid;
    playerConfigOverlayElement.style.display = 'block';
    backdropElement.style.display = 'block';
  }
  
  function closePlayerConfig() {
    playerConfigOverlayElement.style.display = 'none';
    backdropElement.style.display = 'none';
    formElement.firstElementChild.classList.remove('error');
    errorsOutputElement.textContent=' ';
  }
  
  function savePlayerConfig(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    if (editedPlayer === 1) {
        const enteredPlayerName = formData.get('playername').trim();
        if (!enteredPlayerName) {
            event.target.firstElementChild.classList.add('error');
            errorsOutputElement.textContent = 'Enter a valid name';
            return;
        }
        const updatedPlayerData = document.getElementById('player-' + editedPlayer + '-data');
        updatedPlayerData.children[1].textContent = enteredPlayerName;

        // Oyuncu adını kaydet
        playerName = enteredPlayerName;
    }

    closePlayerConfig();
}

const avatarImage = document.getElementById('avatar-image');
const avatarText = document.getElementById('avatar-text');
const secondhint = document.getElementById('second-hint');
const firsthint = document.getElementById('first-hint');
const answer = document.getElementById('answer');
const hint = document.getElementById('hint');
const hintTexte = document.getElementById('reponse');


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
const closebtn= document.getElementById('close');
closebtn.addEventListener('click', function(){
  avatarText.style.display='none';
});
answer.addEventListener('click', function(){
  avatarText.style.display = 'block';  // Paragrafı görünür yap
  hintTexte.style.display='block';
  firsthint.style.display='none';
  secondhint.style.display = 'none';
});











