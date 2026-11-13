
// DARK AND LIGHT MODE

const themeToggle = document.getElementById("themeToggle");

const savedTheme = localStorage.getItem("careerCompassTheme") || "light";

document.body.setAttribute("data-theme", savedTheme);

function updateThemeButton() {

    const currentTheme = document.body.getAttribute("data-theme");

    if (currentTheme === "dark") {
        themeToggle.textContent = "☀️";
        themeToggle.setAttribute("aria-label", "Switch to light mode");
    } else {
        themeToggle.textContent = "🌙";
        themeToggle.setAttribute("aria-label", "Switch to dark mode");
    }
}

updateThemeButton();


themeToggle.addEventListener("click", function () {

    const currentTheme = document.body.getAttribute("data-theme");

    const newTheme = currentTheme === "light" ? "dark" : "light";

    document.body.setAttribute("data-theme", newTheme);

    localStorage.setItem("careerCompassTheme", newTheme);

    updateThemeButton();

});


// MOBILE NAVIGATION MENU

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("show");

    const isOpen = navLinks.classList.contains("show");

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.textContent = isOpen ? "✕" : "☰";

});


// CLOSE MENU AFTER CLICKING A LINK

document.querySelectorAll(".nav-links a").forEach(function(link) {

    link.addEventListener("click", function() {

        navLinks.classList.remove("show");

        menuToggle.textContent = "☰";

        menuToggle.setAttribute("aria-expanded", "false");

    });

});


// AUTOMATIC COPYRIGHT YEAR

document.getElementById("currentYear").textContent =
    new Date().getFullYear();
