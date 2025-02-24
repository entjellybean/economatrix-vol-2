const titlesCrisesOverlay = document.getElementById("titlesCrisesOverlay");
const closeTitlesButton = document.getElementById("open");

closeTitlesButton.addEventListener('click', () => {
titlesCrisesOverlay.style.display='none';
});

const avatars = document.querySelectorAll('#av1 li');
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
