export function initBurgerMenu() {
  const burgerBtn = document.getElementById('burger-btn');
  const navMenu = document.getElementById('nav-menu');

  if (!burgerBtn || !navMenu) return;

  function toggleMenu() {
    burgerBtn.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
  }

  function closeMenu() {
    burgerBtn.classList.remove('active');
    navMenu.classList.remove('active');
    document.body.classList.remove('no-scroll');
  }

  burgerBtn.addEventListener('click', toggleMenu);

  navMenu.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
      closeMenu();
    }
  });
}