import { CustomElement } from '../utils/render.js';
import { getQuizItems, getAnswerItems } from '../template/template.js';

// Создадим основной элемент
const MAIN = new CustomElement('main', { className: 'page-main-two _main-container'});

// Заполнение MAIN_TWO
const sectionMainTwo = new CustomElement('section', { className: 'main-two _container quiz'});
MAIN.addChildren([sectionMainTwo.element]);

// Заполнение sectionMainTwo
const quizCategoryList = new CustomElement('ul', { className: 'quiz__category-list'});
const quizScoreCurrentContainer = new CustomElement('p', { className: 'quiz__score-current', textContent: 'Количество баллов: '});
const quizQuestion = new CustomElement('div', { className: 'quiz__question question'});
const quizGame = new CustomElement('div', { className: 'quiz__game game'});
const quizNextBtn = new CustomElement('button', { className: '_btn quiz__nextBtn', textContent: 'Следующий раунд'});
sectionMainTwo.addChildren([quizCategoryList.element, quizScoreCurrentContainer.element,quizQuestion.element, quizGame.element, quizNextBtn.element]);

// Заполнение quizCategoryList
const quizCategoryItems = getQuizItems(); // Массив нумерации вопросов
const numbersQuestion = quizCategoryItems.map(item => item.element); // Массив улументов вопросов
quizCategoryList.addChildren(numbersQuestion);

// Заполнение quizScoreCurrentContainer
const quizScoreCurrent = new CustomElement('span', { className: 'quiz__score-current-span', textContent: '0'});
quizScoreCurrentContainer.addChildren([quizScoreCurrent.element]);

// Заполнение quizQuestion
const questionImage = new CustomElement('div', { className: 'question__image'});
const questionData = new CustomElement('div', { className: 'question__data'});
quizQuestion.addChildren([questionImage.element, questionData.element]);

// Заполнение questionImage
const questionImageImg = new CustomElement('img', { className: 'question__image-img', alt: 'birds', src: './assets/question-img.jpg'});
questionImage.addChildren([questionImageImg.element]);

// Заполнение questionData
const questionName = new CustomElement('h3', { className: 'question__name', textContent: '***'});
const qPlayer = new CustomElement('div', { className: 'subject__player tools'});
questionData.addChildren([questionName.element, qPlayer.element]);

// Заполнение quizGame
const gameAnswer = new CustomElement('div', { className: 'game__answer answer'});
const gameCardA = new CustomElement('div', { className: 'game__card card'});
quizGame.addChildren([gameAnswer.element, gameCardA.element]);

// Заполнение gameAnswer
const AList = new CustomElement('ul', { className: 'answer__list'});
gameAnswer.addChildren([AList.element]);

// Заполнение AList
const answerItems = getAnswerItems(); // Массив ответов
const answerElements = answerItems.map(item => item.element); // Массив элементов ответов
AList.addChildren(answerElements);

// Заполнение gameCard
const cardImageAnswer = new CustomElement('div', { className: 'card__image'});
const cardDataAnswer = new CustomElement('div', { className: 'card__data'});
const cardDiscriptionAnswer = new CustomElement('p', { className: 'card__discription'});
gameCardA.addChildren([cardImageAnswer.element, cardDataAnswer.element, cardDiscriptionAnswer.element]);

// Заполнение cardImage
const cardImageImgAnswer = new CustomElement('img', { className: 'card__image-img', alt: 'birds-card', src: './assets/answerBlank.jpg'});
cardImageAnswer.addChildren([cardImageImgAnswer.element]);

// Заполнение cardData
const cardNameAnswer = new CustomElement('h3', { className: 'card__name', textContent: 'Прослушайте музыку из вопроса и выберите один из ответов'});
const cardSpeciesAnswer = new CustomElement('p', { className: 'card__species'});
const aPlayer = new CustomElement('div', { className: 'subject__player tools'});
cardDataAnswer.addChildren([cardNameAnswer.element, cardSpeciesAnswer.element, aPlayer.element]);

//
// ПЛЕЕР ДЛЯ ВОПРОСА!!!
//

// Заполнение qPlayer
const toolsMusicQuestion = new CustomElement('audio', { className: 'tools__music', src: `./assets/mus.mp3`});
const toolsSoundQuestion = new CustomElement('div', { className: 'tools__sound sound'});
const toolsTimerQuestion = new CustomElement('div', { className: 'tools__timer timer'});
const controlPlayQuestion = new CustomElement('button', { className: 'control__play control__switch'});
qPlayer.addChildren([toolsMusicQuestion.element, toolsSoundQuestion.element, toolsTimerQuestion.element, controlPlayQuestion.element,]);

// Заполнение toolsSound
const soundImageQuestion = new CustomElement('div', { className: 'sound__image'});
const soundProgressQuestion = new CustomElement('div', { className: 'sound__progress progress'});
toolsSoundQuestion.addChildren([soundImageQuestion.element, soundProgressQuestion.element]);


// Заполнение soundProgress
const soundBarQuestion = new CustomElement('div', { className: 'sound__bar'});
soundProgressQuestion.addChildren([soundBarQuestion.element]);


// Заполнение toolsTimer
const timerCurrentOneQuestion = new CustomElement('div', { className: 'timer__current current', textContent: '00:00'});
const timerProgressQuestion = new CustomElement('div', { className: 'timer__progress progress'});
const timerCurrentTwoQuestion = new CustomElement('div', { className: 'timer__current duration', textContent: '00:00'});
toolsTimerQuestion.addChildren([timerCurrentOneQuestion.element, timerProgressQuestion.element, timerCurrentTwoQuestion.element]);


// Заполнение timerProgress
const progressBarQuestion = new CustomElement('div', { className: 'progress__bar'});
timerProgressQuestion.addChildren([progressBarQuestion.element]);

//
// ПЛЕЕР ДЛЯ КАРТОЧКИ ОТВЕТА!!!
//

// Заполнение aPlayer
const toolsMusicAnswer = new CustomElement('audio', { className: 'tools__music', src: `./assets/defaultAnswer.mp3`});
const toolsSoundAnswer = new CustomElement('div', { className: 'tools__sound sound'});
const toolsTimerAnswer = new CustomElement('div', { className: 'tools__timer timer'});
const controlPlayAnswer = new CustomElement('button', { className: 'control__play control__switch'});
aPlayer.addChildren([toolsMusicAnswer.element, toolsSoundAnswer.element, toolsTimerAnswer.element, controlPlayAnswer.element,]);

// Заполнение toolsSound
const soundImageAnswer = new CustomElement('div', { className: 'sound__image'});
const soundProgressAnswer = new CustomElement('div', { className: 'sound__progress progress'});
toolsSoundAnswer.addChildren([soundImageAnswer.element, soundProgressAnswer.element]);


// Заполнение soundProgress
const soundBarAnswer = new CustomElement('div', { className: 'sound__bar'});
soundProgressAnswer.addChildren([soundBarAnswer.element]);


// Заполнение toolsTimer
const timerCurrentOneAnswer = new CustomElement('div', { className: 'timer__current current', textContent: '00:00'});
const timerProgressAnswer = new CustomElement('div', { className: 'timer__progress progress'});
const timerCurrentTwoAnswer = new CustomElement('div', { className: 'timer__current duration', textContent: '00:00'});
toolsTimerAnswer.addChildren([timerCurrentOneAnswer.element, timerProgressAnswer.element, timerCurrentTwoAnswer.element]);

// Заполнение timerProgress
const progressBarAnswer = new CustomElement('div', { className: 'progress__bar'});
timerProgressAnswer.addChildren([progressBarAnswer.element]);

// Вставим наш элемент перед тегом script
const mainTwoInit = MAIN.element;

export { mainTwoInit, numbersQuestion, quizScoreCurrent, questionImageImg, questionName, qPlayer, AList, cardImageImgAnswer, cardNameAnswer, cardSpeciesAnswer, aPlayer, cardDiscriptionAnswer, quizNextBtn, gameCardA}