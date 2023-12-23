const dropdownContainer = document.querySelector(".dropdown-container");
const menuTitle = document.querySelector(".menu-title");
const dropdownMenu = document.querySelector(".dropdown-menu");

/* Open and close menu when click "MENU" */
menuTitle.addEventListener("click", (e) => {
  // if (e.target === e.currentTarget) {
    dropdownMenu.classList.toggle("visible");
  // }  
})

/* Close menu when click outside dropdownContainer */
window.addEventListener("click", (e) => {
  if (!dropdownContainer.contains(e.target)) 
    dropdownMenu.classList.remove("visible")
  
})