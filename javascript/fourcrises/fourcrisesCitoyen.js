const choix1 = document.querySelector(".btn-choix1");
const choix2 = document.querySelector(".btn-choix2");

function getRandomComputerChoice() {
    const choices = ['respecter', 'pas'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
const computerChoice = getRandomComputerChoice();


choix1.addEventListener("click", () => {
    

    if (computerChoice === "respecter") {
        window.location.href = "scenario1.html";
    } else if (computerChoice === "pas") {
        window.location.href = "scenario2.html";
    }
});




choix2.addEventListener("click", () => {
   

    if (computerChoice === "respecter") {
        window.location.href = "scenario3.html";
    } else if (computerChoice === "pas") {
        window.location.href = "scenario4.html";
    }
});


