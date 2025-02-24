const scenarioButton = document.querySelector('.btn-alt');
const paragraphOverlay = document.getElementById('paragraph-overlay');
const backdropElement = document.getElementById('backdrop2');


const avatars = document.querySelectorAll('#av3 li');
const avatarInfo = document.getElementById('avatar-info');

avatars.forEach((avatar) => {
  avatar.addEventListener('mouseover', () => {
    avatarInfo.textContent = avatar.getAttribute('data-info');
    avatarInfo.style.display = 'block';
  });

  avatar.addEventListener('mouseout', () => {
    avatarInfo.style.display = 'none';
  });
});
scenarioButton.addEventListener('click', function() {
  window.location.href = 'criseSubprimeInfo.html';
});