import { CustomElement } from '../utils/render.js';

// Создадим основной элемент
const MAIN = new CustomElement('main', { className: 'page-main-one _main-container'});

// Заполнение MAIN_ONE
const sectionMainOne = new CustomElement('section', { className: 'main-one _container'});
MAIN.addChildren([sectionMainOne.element]);

// Заполнение sectionMainOne
const mainOneImageContainer = new CustomElement('div', { className: 'main-one__image-container'});
sectionMainOne.addChildren([ mainOneImageContainer.element]);

// Заполнение sectionMainOne
const mainOneImageImg = new CustomElement('div', { className: 'main-one__image-img'});
mainOneImageContainer.addChildren([mainOneImageImg.element]);

// Заполнение language

// Вставим наш элемент перед тегом script
const mainOneInit = MAIN.element;

export { mainOneInit }