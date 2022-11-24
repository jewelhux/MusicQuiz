import { CustomElement } from '../utils/render.js';

// Создадим основной элемент
const FOOTER = new CustomElement('footer', { className: 'page-footer _main-container'});

// Заполнение FOOTER
const sectionFooter = new CustomElement('section', { className: 'footer _container'});
FOOTER.addChildren([sectionFooter.element]);

// Заполнение sectionHeader
const github = new CustomElement('div', { className: 'footer__item github'});
const rsschool = new CustomElement('div', { className: 'footer__item rsschool'});
sectionFooter.addChildren([github.element, rsschool.element]);

// Заполнение github
const footerGithub = new CustomElement('a', { className: 'footer__link footer__github', href: 'https://github.com/Jik789'});
const footerAuthor = new CustomElement('p', { className: 'footer__author', textContent: '2022 JiK©'});
github.addChildren([footerGithub.element, footerAuthor.element]);

// Заполнение rsschool
const footerRsschool = new CustomElement('a', { className: 'footer__link footer__rsschool', href: 'https://rs.school/index.html'});
rsschool.addChildren([footerRsschool.element]);

// Вставим наш элемент перед тегом script
const footerInit = FOOTER.element;

export { footerInit }