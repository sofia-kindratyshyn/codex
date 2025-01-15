document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('hdr-menu-button');
  const sideMenu = document.getElementById('popup');
  const closeButton = document.getElementById('close-button'); // Кнопка закриття

  // Відкриття меню при натисканні на кнопку меню
  menuToggle.addEventListener('click', () => {
    sideMenu.classList.toggle('is-open'); // Додаємо/забираємо клас is-open
  });

  // Закриття меню при натисканні на кнопку закриття
  closeButton.addEventListener('click', () => {
    sideMenu.classList.remove('is-open'); // Забираємо клас is-open
  });

  // Закриття меню при кліку за межами меню
  document.addEventListener('click', (event) => {
    if (
      !sideMenu.contains(event.target) && 
      !menuToggle.contains(event.target) &&
      event.target !== closeButton // Ігноруємо клік по кнопці закриття
    ) {
      sideMenu.classList.remove('is-open');
    }
  });
});
