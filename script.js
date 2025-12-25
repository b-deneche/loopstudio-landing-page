const hamburger = document.querySelector("#menu-btn");
const navLinks = document.getElementById("nav-links");

console.log(navLinks);
hamburger.addEventListener('click', () => {
    const btnState = hamburger.classList.item(0);
    console.log(btnState)
    if (btnState === "notclicked") {
        hamburger.classList.replace("notclicked","clicked");
        navLinks.classList.add("hidden");
        navLinks.classList.remove("visible");
    } else {
        hamburger.classList.replace("clicked","notclicked");
        navLinks.classList.remove("hidden");
        navLinks.classList.add("visible");
    }
})