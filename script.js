const hamburger = document.querySelector("#menu-btn");
const drop = document.querySelector("#drop-btn");
const navLinks = document.getElementById("drop-menu");

hamburger.addEventListener('click', () => {
    const btnState = hamburger.classList.item(0);
    if (btnState === "notclicked") {
        hamburger.classList.replace("notclicked","clicked");
        navLinks.classList.replace("visible", "hidden");
    } else {
        hamburger.classList.replace("clicked","notclicked");
        navLinks.classList.replace("hidden","visible");
    }
})


drop.addEventListener('click', () => {
    const btnState = hamburger.classList.item(0);
    if (btnState === "notclicked") {
        hamburger.classList.replace("notclicked","clicked");
        navLinks.classList.replace("visible", "hidden");
    } else {
        hamburger.classList.replace("clicked","notclicked");
        navLinks.classList.replace("hidden","visible");
    }
})