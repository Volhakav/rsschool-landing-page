export function initTheme() {
  const toggleBtn = document.getElementById('theme-toggle');
  const savedTheme = localStorage.getItem('theme') || 'light';

  document.documentElement.setAttribute('data-theme', savedTheme);
  updateButtonIcon(toggleBtn, savedTheme);

  if (!toggleBtn) return;

  toggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateButtonIcon(toggleBtn, newTheme);
  });
}

function updateButtonIcon(btn, theme) {
  if (btn) {
    btn.textContent = theme === 'dark' ? '☀️' : '🌙';
  }
}