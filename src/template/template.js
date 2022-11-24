import { CustomElement } from '../utils/render.js';
import { NAV_ITEM_TEXT, QUIZ_ITEM_LEN, ANSWER_ITEM_LEN } from '../utils/const.js';

const getNavigationItems = () => {
  let itemList = [];

  for (let i = 0; i < NAV_ITEM_TEXT.length; i++) {
    const navigationItem = new CustomElement('li', { className: 'navigation__item'});
    const navigationItemLink = new CustomElement('a', { className: `navigation__link nav-${i + 1}`, href: '#', textContent: `${NAV_ITEM_TEXT[i]}`, data: 'nav'});
    navigationItem.addChildren([navigationItemLink.element]);
    itemList.push(navigationItem.element)
  }

  return itemList
}

const getQuizItems = () => {
  let itemList = [];

  for (let i = 0; i < QUIZ_ITEM_LEN; i++) {
    const quizItem = new CustomElement('li', { className: 'quiz__category-item', textContent: `Раунд ${i + 1}`});
    if (i === 0) quizItem.element.classList.add('active-quiz')
    itemList.push(quizItem)
  }

  return itemList
}

const getAnswerItems = () => {
  let itemList = [];

  for (let i = 0; i < ANSWER_ITEM_LEN; i++) {
    const answerItem = new CustomElement('li', { className: 'answer__item'});
    const answerItemText = new CustomElement('span', { className: 'answer__item-text', textContent: `Ответ ${i + 1}`});
    const answerItemSpan = new CustomElement('span', { className: 'answer__item-marker'});
    answerItem.addChildren([answerItemSpan.element, answerItemText.element]);

    itemList.push(answerItem)
  }

  return itemList
}

const getBirdGallery = (data) => {
  const itemList = data.flat();
  let finishItemList = [];

  for (let i = 0; i < itemList.length; i++) {
    // Заполнение обертки элемента
    const subject = new CustomElement('div', { className: 'gallery__item subject'});

    // Заполнение subject
    const subjectImage = new CustomElement('div', { className: 'subject__image'});
    const subjectData = new CustomElement('div', { className: 'subject__data'});
    subject.addChildren([subjectImage.element, subjectData.element]);

    // Заполнение subjectImage
    const subjectImageImg = new CustomElement('img', { className: 'subject__image-img', alt: 'birds-subject', src: `${itemList[i].image}`});
    subjectImage.addChildren([subjectImageImg.element]);

    // Заполнение subjectData
    const subjectName = new CustomElement('h3', { className: 'subject__name', textContent: `${itemList[i].name}`});
    const subjectSpecies = new CustomElement('p', { className: 'subject__species', textContent: `${itemList[i].species}`});
    const subjectPlayer = new CustomElement('div', { className: 'subject__player tools'});
    const subjectDiscription = new CustomElement('p', { className: 'subject__species', textContent: `${itemList[i].description}`});
    subjectData.addChildren([subjectName.element, subjectSpecies.element, subjectPlayer.element, subjectDiscription.element,]);

    // Заполнение subjectPlayer
    const toolsMusic = new CustomElement('audio', { className: 'tools__music', src: `${itemList[i].audio}`});
    const toolsSound = new CustomElement('div', { className: 'tools__sound sound'});
    const toolsTimer = new CustomElement('div', { className: 'tools__timer timer'});
    const controlPlay = new CustomElement('button', { className: 'control__play control__switch'});
    subjectPlayer.addChildren([toolsMusic.element, toolsSound.element, toolsTimer.element, controlPlay.element,]);

    finishItemList.push(subject)

    // Заполнение toolsSound
    const soundImage = new CustomElement('div', { className: 'sound__image'});
    const soundProgress = new CustomElement('div', { className: 'sound__progress progress'});
    toolsSound.addChildren([soundImage.element, soundProgress.element]);

    // Заполнение soundProgress
    const soundBar = new CustomElement('div', { className: 'sound__bar'});
    soundProgress.addChildren([soundBar.element]);

    // Заполнение toolsTimer
    const timerCurrentOne = new CustomElement('div', { className: 'timer__current current', textContent: '00:00'});
    const timerProgress = new CustomElement('div', { className: 'timer__progress progress'});
    const timerCurrentTwo = new CustomElement('div', { className: 'timer__current duration', textContent: '02:25'});
    toolsTimer.addChildren([timerCurrentOne.element, timerProgress.element, timerCurrentTwo.element]);

    // Заполнение timerProgress
    const progressBar = new CustomElement('div', { className: 'progress__bar'});
    timerProgress.addChildren([progressBar.element]);
  }

  return finishItemList
}

const getScoreListItem = (place) => {
  const scoreListItemContainer = new CustomElement('div', { className: 'score-list__item score-list__body'});

  const scoreListItemPlace = new CustomElement('p', { className: 'score-list__place', textContent: `${place}`});
  const scoreListItemScore = new CustomElement('p', { className: 'score-list__score', textContent: '-'});
  const scoreListItemGameCount = new CustomElement('p', { className: 'score-list__gameCount', textContent: '-'});

  scoreListItemContainer.addChildren([scoreListItemPlace.element, scoreListItemScore.element, scoreListItemGameCount.element]);

  return scoreListItemContainer
}

export { getNavigationItems, getQuizItems, getAnswerItems, getBirdGallery, getScoreListItem }