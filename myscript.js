"use strict"

const toggleNav = document.querySelector(".toggle-nav");
const container = document.querySelector(".container");

toggleNav.addEventListener("click", () => {
    toggleNav.classList.toggle("active-toggle-btn");
    container.classList.toggle("nav-active");
})