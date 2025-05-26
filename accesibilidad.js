let fontSizeMultiplier = 1;
const baseFontSize = 16;
const maxSteps = 3;
const minSteps = 1;

function toggleMenu() {
  document.getElementById('menuOptions').classList.toggle('hidden');
}

function changeFontSize(direction) {
  if (direction === 1 && fontSizeMultiplier < maxSteps) {
    fontSizeMultiplier++;
  } else if (direction === -1 && fontSizeMultiplier > minSteps) {
    fontSizeMultiplier--;
  }
  const size = baseFontSize * fontSizeMultiplier;
  document.documentElement.style.fontSize = `${size}px`;
  localStorage.setItem('fontSize', size);
}

function changeFontFamily(font) {
  document.documentElement.style.setProperty('--font-family', font);
  localStorage.setItem('fontFamily', font);
}

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  localStorage.setItem(
    'darkMode',
    document.body.classList.contains('dark-mode')
  );
}

function toggleHighContrast() {
  document.body.classList.toggle('high-contrast');
  localStorage.setItem(
    'highContrast',
    document.body.classList.contains('high-contrast')
  );
}

function changeCursor(cursorType) {
  document.documentElement.style.setProperty('--cursor', cursorType);
  localStorage.setItem('cursor', cursorType);
}

function toggleImages() {
  document.body.classList.toggle('no-images');
  localStorage.setItem(
    'hideImages',
    document.body.classList.contains('no-images')
  );
}

function toggleLinks() {
  document.body.classList.toggle('highlight-links');
  localStorage.setItem(
    'highlightLinks',
    document.body.classList.contains('highlight-links')
  );
}

// Aplicar configuraciones guardadas
window.addEventListener('DOMContentLoaded', () => {
  const fontSize = localStorage.getItem('fontSize');
  const fontFamily = localStorage.getItem('fontFamily');
  const darkMode = localStorage.getItem('darkMode') === 'true';
  const highContrast = localStorage.getItem('highContrast') === 'true';
  const cursor = localStorage.getItem('cursor');
  const hideImages = localStorage.getItem('hideImages') === 'true';
  const highlightLinks = localStorage.getItem('highlightLinks') === 'true';

  if (fontSize) {
    document.documentElement.style.fontSize = `${fontSize}px`;
  }

  if (fontFamily) {
    document.documentElement.style.setProperty('--font-family', fontFamily);
  }

  if (cursor) {
    document.documentElement.style.setProperty('--cursor', cursor);
  }

  if (darkMode) document.body.classList.add('dark-mode');
  if (highContrast) document.body.classList.add('high-contrast');
  if (hideImages) document.body.classList.add('no-images');
  if (highlightLinks) document.body.classList.add('highlight-links');
});
