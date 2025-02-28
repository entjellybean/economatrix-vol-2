document.addEventListener("DOMContentLoaded", function () {
    const overlay = document.getElementById("overlay-begin");
    const closeButton = document.getElementById("close-overlay");
    const backdrop=document.getElementById("backdrop");
  
    overlay.style.display = "flex";
      closeButton.addEventListener("click", function () {
        overlay.style.display = "none";
        backdrop.style.display = "none";
    });
  });