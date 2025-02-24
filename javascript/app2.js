document.addEventListener("DOMContentLoaded", function () {
    const overlay = document.getElementById("overlay-begin");
    const closeButton = document.getElementById("close-overlay");
    const backdrop=document.getElementById("backdrop");
  
    // Sayfa yüklendiğinde overlay'i göster
    overlay.style.display = "flex";
  
    // Butona tıklandığında overlay'i gizle
    closeButton.addEventListener("click", function () {
        overlay.style.display = "none";
        backdrop.style.display = "none";
    });
  });