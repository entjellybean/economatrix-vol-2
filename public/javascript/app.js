const closeMenuButton= document.getElementById("close-menu-button");
const sideDrawer= document.getElementById("side-drawer");
const menuButton= document.getElementById("menu-btn");
const carouselSlide = document.querySelector('.carousel-slide');
const images = document.querySelectorAll('.carousel-slide img');
const jeuxButton = document.getElementById('jeux-button');
const quatreButton = document.getElementById('quatrebtn');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');



menuButton.addEventListener('click', function() {
    sideDrawer.style.display='block';
});

closeMenuButton.addEventListener('click', function() {
    sideDrawer.style.display='none';
});
document.addEventListener('DOMContentLoaded', function() {
 
    let counter = 0;
    const size = images[0]?.clientWidth || 0;
  
    // Sayfa yönlendirmeleri
    if (jeuxButton) {
        jeuxButton.addEventListener('click', function() {
            window.location.href = 'TheoriesDeJeux.html';
        });
    }
  
    if (quatreButton) {
        quatreButton.addEventListener('click', function() {
            window.location.href = 'QuatreCrisesJeux.html';
        });
    }
  
    // İleri butonu
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            if (counter >= images.length - 1) return;
            carouselSlide.style.transition = "transform 0.5s ease-in-out";
            counter++;
            carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        });
    }
  
    // Geri butonu
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            if (counter <= 0) return;
            carouselSlide.style.transition = "transform 0.5s ease-in-out";
            counter--;
            carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        });
    }
  
    // Sonsuz döngü için kontrol
    carouselSlide.addEventListener('transitionend', () => {
        if (images[counter].id === 'lastClone') {
            carouselSlide.style.transition = "none";
            counter = images.length - 2;
            carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        }
        if (images[counter].id === 'firstClone') {
            carouselSlide.style.transition = "none";
            counter = images.length - counter;
            carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        }
    });
  });
  