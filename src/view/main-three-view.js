import { CustomElement } from '../utils/render.js';
import { actualData } from '../utils/data-list.js';
import { getBirdGallery } from '../template/template.js';

// Создадим основной элемент
const MAIN = new CustomElement('main', { className: 'page-main-three _main-container'});

// Заполнение MAIN_THREE
const sectionMainThree = new CustomElement('section', { className: 'main-three _container'});
MAIN.addChildren([sectionMainThree.element]);

// Заполнение sectionMainThree
const galleryList = new CustomElement('div', { className: 'gallery__list'});
sectionMainThree.addChildren([galleryList.element]);

// Заполнение galleryList
const answerItems = getBirdGallery(actualData); // Массив ответов
const answerElements = answerItems.map(item => item.element); // Массив элементов ответов

galleryList.addChildren(answerElements);

// Вставим наш элемент перед тегом script
const mainThreeInit = MAIN.element;

export { mainThreeInit, galleryList }