import { CustomElement } from '../utils/render.js';
import { getNavigationItems } from '../template/template.js'

// Создадим основной элемент
const FONE = new CustomElement('div', { className: 'fone'});
const HEADER = new CustomElement('header', { className: 'page-header _main-container'});

// Заполнение HEADER
const sectionHeader = new CustomElement('section', { className: 'header _container'});
HEADER.addChildren([sectionHeader.element]);

// sectionHeader
const headerLogo = new CustomElement('a', { className: 'header__logo logo', href: '#'});
const headerNavigation = new CustomElement('nav', { className: 'header__navigation navigation'});
const menuIcon = new CustomElement('div', { className: 'menu__icon'});
sectionHeader.addChildren([headerLogo.element, headerNavigation.element, menuIcon.element]);

// headerLogo
const logoTitle = new CustomElement('h1', { className: 'logo__title', textContent: 'Song Trivia'});
const logoDiscription = new CustomElement('p', { className: 'logo__discription', textContent: 'Quiz-App'});
headerLogo.addChildren([logoTitle.element, logoDiscription.element]);

// headerNavigation
const navigationList = new CustomElement('ul', { className: 'navigation__list'});
const navigationItems = getNavigationItems(); // Массив навигации
navigationList.addChildren(navigationItems);
headerNavigation.addChildren([navigationList.element]);

// menuIcon
const menuIconSpan = new CustomElement('span', { className: 'menu__icon-span'});
menuIcon.addChildren([menuIconSpan.element]);

// Вставим наши элементы перед тегом script
const foneInit = FONE.element;
const headerInit = HEADER.element;

export { headerInit, foneInit, navigationList }