import { CustomElement } from './render.js';
import { NAV_ITEM_TEXT, QUIZ_ITEM_LEN, ANSWER_ITEM_LEN } from './const.js';
import { galleryList } from '../view/main-three-view.js';

const GENERAL = galleryList.element; // Получим массив карточек

const ALLPLAYER = Array.from(GENERAL.querySelectorAll('.gallery__item'));
const ALLAUDIO = Array.from(GENERAL.querySelectorAll('.tools__music'));
const ALLBUTTON =  Array.from(GENERAL.querySelectorAll('.control__play'));

const clearNavigationItemClass = (itemList) => {
  const newItemList = Array.from(itemList.childNodes);
  newItemList.forEach(element => element.classList.remove('active-nav'));
}

const allPlayerStop = (button, audio, player) => {
  const otherBtn = ALLBUTTON.filter(element => element !== button);
  const otherAudio = ALLAUDIO.filter(element => element !== audio);
  const otherPlayer = ALLPLAYER.filter(element => element !== player);

  otherAudio.forEach(element => element.pause());
  otherBtn.forEach(element => element.classList.remove('control__pause'));
  otherPlayer.forEach(element => element.classList.remove('play'));
}

// Получение случайно карточки для блока с вопросом
const getRandomQACard = (itemList) => {
  const numberIndex = Math.floor(Math.random() * itemList.length);
  return itemList[numberIndex];
}

export { allPlayerStop, clearNavigationItemClass, getRandomQACard }