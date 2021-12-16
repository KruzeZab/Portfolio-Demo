// Initialize AOT
AOS.init();

// Load Particle JS
particlesJS.load('particles-js', './js/particles.json');

// Navbar Toggle
const menu = document.getElementById('menu');
const dropdownNav = document.querySelector('.navbar__right');

const links = document.querySelectorAll('.navbar__link');
const sections = document.querySelectorAll('section');

// Toggle Navbar (show navbar and change burger icon)
const toggleNavbar = () => {
  dropdownNav.classList.toggle('show-nav');
  menu.classList.toggle('active-menu');
};

// Bind toggleNavbar to menu click
menu.addEventListener('click', toggleNavbar);

// Bin toggleNavbar to link click
links.forEach(link => {
  link.addEventListener('click', toggleNavbar);
});

// Change active menu on scroll
const changeLinkState = () => {
  let index = sections.length;

  while (
    --index &&
    window.scrollY + 50 < sections[index].offsetTop
  ) {}

  links.forEach(link => link.classList.remove('active'));
  links[index].classList.add('active');
};

changeLinkState();
window.addEventListener('scroll', changeLinkState);



