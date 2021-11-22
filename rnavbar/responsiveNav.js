let toggleNav = document.querySelector(".toggle-nav");
let nav = document.querySelector("nav");

toggleNav.addEventListener('click', ()=> {
	nav.classList.toggle("hide");
})