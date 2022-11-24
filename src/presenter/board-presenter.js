import { headerInit, foneInit, navigationList } from '../view/header-view.js';
import { mainOneInit } from '../view/main-one-view.js';
import { mainTwoInit } from '../view/main-two-view.js';
import { mainThreeInit } from '../view/main-three-view.js';
import { mainFourInit } from '../view/main-four-view.js';
import { footerInit } from '../view/footer-view.js';
import { clearNavigationItemClass } from '../utils/utils.js';

let statePage; // тут будем хранить текущую страничку

export default class BoardPresenter {

  init() {
    document.body.prepend(...[foneInit, headerInit, mainOneInit, footerInit]);
    const itemNav = navigationList.element.firstChild; // Первый элемент списка по умолчанию
    itemNav.classList.add('active-nav');
    statePage = mainOneInit;
  }

  renderTargetPage(event) {
    const target = event.target;
    if (!target.classList.contains('navigation__link')) return // Если не ссылка завершаем
    const itemNav = target.closest('.navigation__item'); // Находим элемент на который повесим активный класс
    
    clearNavigationItemClass(navigationList.element); // Удалим классы у всех элементов навигации

    if (target.classList.contains('nav-1') ) {
      document.body.replaceChild(mainOneInit, statePage);
      statePage = mainOneInit;
    }

    if (target.classList.contains('nav-2')) {
      document.body.replaceChild(mainTwoInit, statePage);
      statePage = mainTwoInit;
    }

    if (target.classList.contains('nav-3')) {
      document.body.replaceChild(mainThreeInit, statePage);
      statePage = mainThreeInit;
    }

    if (target.classList.contains('nav-4')) {
      document.body.replaceChild(mainFourInit, statePage);
      statePage = mainFourInit;
    }

    itemNav.classList.add('active-nav');
  }

  renderResultPage() {
    clearNavigationItemClass(navigationList.element); 

    const resultPage = document.querySelector('.nav-4');
    const itemNav = resultPage.closest('.navigation__item');

    document.body.replaceChild(mainFourInit, statePage);
    statePage = mainFourInit;
    itemNav.classList.add('active-nav');
  }

  renderNewGamePage() {
    clearNavigationItemClass(navigationList.element); 
    
    const resultPage = document.querySelector('.nav-2');
    const itemNav = resultPage.closest('.navigation__item');

    document.body.replaceChild(mainTwoInit, statePage);
    statePage = mainTwoInit;
    itemNav.classList.add('active-nav');
  }
}