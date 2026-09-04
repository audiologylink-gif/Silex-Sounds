const menu = document.querySelector('.menu-toggle');
const links = document.querySelector('.nav-links');
menu?.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(open));
});
document.querySelectorAll('.nav-links a').forEach((link) => link.addEventListener('click', () => {
  links.classList.remove('open');
  menu?.setAttribute('aria-expanded', 'false');
}));
document.querySelector('#year').textContent = new Date().getFullYear();
