const mobileMenuBtn = document.querySelector('#mobile-menu-btn');
const mobileMenu = document.querySelector('#modal-mobile-menu');

mobileMenuBtn.addEventListener('click', (event) => {
    event.preventDefault();
    mobileMenu.classList.add("visible");
})
