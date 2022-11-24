import { CustomElement } from '../utils/render.js';
import { getScoreListItem } from '../template/template.js';

// Создадим основной элемент
const MAIN = new CustomElement('main', { className: 'page-main-four _main-container'});

// Заполнение MAIN_FOUR
const sectionMainFour = new CustomElement('section', { className: 'main-four _container'});
MAIN.addChildren([sectionMainFour.element]);

// Заполнение sectionMainFour
const leaders = new CustomElement('div', { className: 'leasers'});
sectionMainFour.addChildren([leaders.element]);

// Заполнение leaders
const leadersImage = new CustomElement('div', { className: 'leasers__image'});
const leadersText = new CustomElement('p', { className: 'leasers__text', textContent:'Ты ещё не поиграл в викторину, по этому результатов не увидишь.'});
const leadersBtn = new CustomElement('button', { className: '_btn quiz__nextBtn btn__hide', textContent:'Играть'});
leaders.addChildren([leadersImage.element, leadersText.element, leadersBtn.element]);

// Заполнение leasersImage
const leadersImageImg = new CustomElement('img', { className: 'leasers__image-img', alt:'leasers-card', src:'./assets/result.jpg'});
leadersImage.addChildren([leadersImageImg.element]);

// Вставим наш элемент перед тегом script
const mainFourInit = MAIN.element;

export { mainFourInit, leadersText, leadersBtn }