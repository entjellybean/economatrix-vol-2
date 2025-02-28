const grandeBtn = document.getElementById('grande-depression-btn');
const mainElement = document.getElementsByTagName('main')[0];
const titles = document.getElementById('titles');
const debut = document.getElementById('debut');

function startLevel(){
    titles.style.display='none';
    mainElement.style.display='grid';
}
grandeBtn.addEventListener('click',startLevel);

