import burgerMenu from './utils/burgerMenu.js';
import BoardPresenter from './presenter/board-presenter.js';
import { navigationList } from './view/header-view.js';
import { setPlayStopAudio } from './utils/audioGalery.js';
import { gameInit } from './game/game.js';

const PAGE = new BoardPresenter(); // Создадим новое представление странички

PAGE.init(); // Загрузим базовую страничку
navigationList.element.addEventListener('click', PAGE.renderTargetPage); // Повесим слушатель на переключение странички

// Бергур меню
burgerMenu();

export { PAGE }