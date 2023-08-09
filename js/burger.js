const mobileMenu = document.querySelector('.nav-mobile');
const menuBtn = document.querySelector('.burger');
const menuContent = document.querySelector('.nav-mob');
const menuSocials = document.querySelector('.socials-mob');
const bodyLock = document.querySelector('body');
menuBtn.addEventListener("click", showMenu);

function showMenu() {
    mobileMenu.classList.toggle('active');
    menuBtn.classList.toggle('active');
    menuContent.classList.toggle('active');
    menuSocials.classList.toggle('active');
    bodyLock.classList.toggle('lock');
}