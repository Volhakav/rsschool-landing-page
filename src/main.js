import './styles/main.scss';
import { initTheme } from './theme.js';
import { initBurgerMenu } from './burger.js';
import { initSlider } from './slider.js';
import { initCatalog } from './catalog.js';

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initBurgerMenu();
  initSlider();
  initCatalog();
});