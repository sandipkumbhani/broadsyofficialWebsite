document.addEventListener("DOMContentLoaded", function () {
    // Select the header element
    const header = document.querySelector(".header");
    // Select the navigation element
    const nav = document.querySelector(".main-nav");
    // Select all menu items (assuming they are <li> elements)
    const menuItems = document.querySelectorAll(".main-nav__item");
    if (header && nav && menuItems.length > 0) {
        // Add 'headMod' class to the header
        header.classList.add("headMod");
        // Remove 'activated' class from the navigation
        nav.classList.remove("activated");
        // Loop through all menu items and add hover effects
        menuItems.forEach((menuItem) => {
            menuItem.addEventListener("mouseenter", function () {
                menuItem.classList.add("active");
            });
            menuItem.addEventListener("mouseleave", function () {
                menuItem.classList.remove("active");
            });
        });
    }
});