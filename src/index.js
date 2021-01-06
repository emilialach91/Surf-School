import './styles/main.scss';
require('dotenv').config()


const image = document.querySelector('.board__image');
const board = document.getElementById("board-rot");
const button = document.querySelector('.header__button');
const menu = document.getElementById("overlay");
require("dotenv/config");

image.addEventListener('click', () => {
    board.classList.toggle("rot")
  });

button.addEventListener('click', () => {
  button.classList.toggle("colour")
  menu.classList.toggle("active")
  button.classList.toggle("change") 
  button.classList.toggle("animated")
});

const dupa = process.env.NODE_ENV;

const script = document.createElement('script');
script.defer = true;
script.async = true;
script.src = `https://maps.googleapis.com/maps/api/js?key=${dupa}&callback=initMap`;

document.body.appendChild(script);
console.log(process.env.NODE_ENV)



