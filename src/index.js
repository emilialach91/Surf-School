import './styles/main.scss';

const image = document.querySelector('.board__image');
const board = document.getElementById("board-rot");
const button = document.querySelector('.header__button');
const menu = document.getElementById("overlay");


image.addEventListener('click', () => {
    board.classList.toggle("rot")
  });

button.addEventListener('click', () => {
  button.classList.toggle("colour")
  menu.classList.toggle("active")
  button.classList.toggle("change") 
  button.classList.toggle("animated")
});





