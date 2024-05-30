/* в этот файл добавляет скрипты*/
const menu = document.querySelector('.navigation__menu-button');
const navigation = document.querySelector('.navigation__list');
menu.addEventListener('click', () => {
  menu.classList.toggle('navigation__menu-button--open');
  navigation.classList.toggle('navigation__list--open');
}
);
