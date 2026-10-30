//Hamburger
const navbutton = document.querySelector('#ham-btn');
const navlinks = document.querySelector('#nav-bar');

navbutton.addEventListener('click', () => {
    navbutton.classList.toggle('show');
    navlinks.classList.toggle('show');

    const isOpen = navbutton.classList.contains('show');

    navbutton.setAttribute('aria-expanded', isOpen);
    navbutton.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
});

//Footer for Last Modified and Current Year
document.querySelector("#currentyear").textContent = new Date().getFullYear();
document.querySelector("#lastmodified").textContent = document.lastModified;