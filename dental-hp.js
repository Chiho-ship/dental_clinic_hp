const menuToggle = document.querySelector('.menu-toggle');
const spNav = document.querySelector('.sp-nav');

menuToggle.addEventListener('click', () => {
    spNav.classList.toggle('active');
});

const navLinks = spNav.querySelectorAll('a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        spNav.classList.remove('active');
    });
});