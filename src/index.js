import loadHome from "./load-home.js";
import loadMenu from "./load-menu.js";
import loadAbout from "./load-about.js";
import clearPage from "./clear-page.js";
import './style.css';

const homeBtn = document.getElementById('home')
const menuBtn = document.getElementById('menu')
const aboutBtn = document.getElementById('about')


document.addEventListener("DOMContentLoaded", () => {
  homeBtn.addEventListener('click', () => {
    clearPage();
    loadHome();
  });
  
  menuBtn.addEventListener('click', () => {
    clearPage();
    loadMenu();
  });
  
  aboutBtn.addEventListener('click', () => {
    clearPage();
    loadAbout();
  });
})

