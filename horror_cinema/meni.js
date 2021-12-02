//postavljanje activa tako da se hamburger meni menja
const hamburger_menu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".cont");

hamburger_menu.addEventListener("click", () => {
    container.classList.toggle("active");
});


