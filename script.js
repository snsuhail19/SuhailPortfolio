const nav = document.querySelector('.nav-links');
const menuBtn = document.querySelector('.menu-btn');
const themeBtn = document.querySelector('#themeToggle');
const body = document.body;
const cursorGlow = document.querySelector('.cursor-glow');

menuBtn.addEventListener('click', () => {
  nav.classList.toggle('open');
  menuBtn.textContent = nav.classList.contains('open') ? '×' : '☰';
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuBtn.textContent = '☰';
  });
});

const savedTheme = localStorage.getItem('suhail-theme');
if (savedTheme === 'light') {
  body.classList.add('light');
  themeBtn.textContent = '☀';
}

themeBtn.addEventListener('click', () => {
  body.classList.toggle('light');
  const light = body.classList.contains('light');
  localStorage.setItem('suhail-theme', light ? 'light' : 'dark');
  themeBtn.textContent = light ? '☀' : '☾';
});

document.querySelector('#year').textContent = new Date().getFullYear();

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('show');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 180) current = section.id;
  });
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === '#' + current);
  });
});

window.addEventListener('mousemove', (e) => {
  cursorGlow.style.left = e.clientX + 'px';
  cursorGlow.style.top = e.clientY + 'px';
});
