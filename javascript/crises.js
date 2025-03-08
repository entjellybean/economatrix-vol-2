function closeOverlay(className) {
    const element = document.querySelector(`.${className}:not([style*="display: none"])`);
    if (element) {
        element.style.display = 'none';
    }
}
function openOverlay(className) {
    const element = document.querySelector(`.${className}:not([style*="display: none"])`);
    if (element) {
        element.style.display = 'grid';
    }
}

function toggleSection(showId, hideId) {
    const hideSection = document.getElementById(hideId);
    if (hideSection) {
        hideSection.style.display = 'none';
    }

    const showSection = document.getElementById(showId);
    if (showSection) {
        showSection.style.display = 'grid';
    }
}

function toggleClass(showClass, hideClass) {
    const hideSection = document.querySelector(`.${hideClass}:not([style*="display: none"])`);
    if (hideSection) {
        hideSection.style.display = 'none';
    }

    const showSection = document.querySelector(`.${showClass}:not([style*="display: none"])`);
    if (showSection) {
        showSection.style.display = 'grid';
    }
}



