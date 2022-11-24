import { actualData } from '../utils/data-list.js';
import { numbersQuestion, quizScoreCurrent, questionImageImg, questionName, qPlayer, AList, aPlayer, quizNextBtn, gameCardA } from '../view/main-two-view.js';
import { leadersText, leadersBtn } from '../view/main-four-view';
import { AudioPlayer } from './playerGame.js';
import { AnswerList } from './answerList.js';
import { AnswerCard } from './answerCard.js';
import { getRandomQACard } from '../utils/utils.js';
import { BLANK_DATA } from '../utils/const.js';
import { answerListInit, questionCardInit, setFalseAnswer, setTrueAnswer, setScore, answerCardInit, setRoundNumberList, changeBtnForResult, setResultText, changeBtnForNextRound, setZeroScoreText, getActuelCard } from './gameUtils.js';
import { PAGE } from '../main.js';

let ROUND = 0; // Раунд игры
let SCORE = 0; // Баллы игры
let ACTIVE_ROUND = true; // Активность раунда
let QA_CARD = null; // Карточка с ответом/вопросом

// Вводим основные переменные
let DATA = actualData; // Тут закидываем данные, потом будем менятьв зависимости от языка

const numbersQuestionElement = numbersQuestion // массив с нумерацией вопросов
const quizScoreCurrentElement = quizScoreCurrent.element // количество баллов

const questionImageImgElement = questionImageImg.element // картинка вопроса
const questionNameElement = questionName.element // название в вопросе
const questionPlayer = new AudioPlayer(qPlayer.element);

const answerList = new AnswerList(AList.element); // варианты ответов 

const answerGameCard = new AnswerCard(gameCardA.element); // Карточка ответа, без плеера
const answerPlayer = new AudioPlayer(aPlayer.element);  // плеер в карточке ответа

const quizNextBtnElement = quizNextBtn.element; // Кнопка следующего вопросика
const leadersTextElement = leadersText.element; // Элемента текста со странички результатов
const leadersBtnElement = leadersBtn.element; // Элемента текста со странички результатов

// Инициализация игры при загрузке страницы
const gameInit = () => {
  const FIRST_ROUND_DATA = DATA[ROUND]; // Тут кароч специально прокидываем первы массив объектов, ибо именно он должен быть
  QA_CARD = getRandomQACard(FIRST_ROUND_DATA); // Тут получаем случайную карточки для вопрос и верного ответвета
  questionCardInit(QA_CARD, questionPlayer, BLANK_DATA, questionImageImgElement, questionNameElement); // Инициализация карточки вопроса
  answerListInit(FIRST_ROUND_DATA, answerList); // Инициализация листа ответов
  answerCardInit(BLANK_DATA, answerGameCard, answerPlayer); // Инициализация карточки ответа
  quizNextBtnElement.disabled = true;

  setRoundNumberList(numbersQuestionElement, ROUND);
}

const restartGame = () => {
  ROUND = 0; // Раунд игры
  SCORE = 0; // Баллы игры
  QA_CARD = null; // Карточка с ответом/вопросом
  ACTIVE_ROUND = true; // Активность раунда

  gameInit();
  changeBtnForNextRound(quizNextBtnElement); // Поменяем текст кнопочки
  setZeroScoreText(quizScoreCurrentElement); // Обнулим текст очков
  PAGE.renderNewGamePage();
}

// Функция в которой мы выбираем ответ
const clickOnAnswer = (event) => {
  const item = event.target.closest('.answer__item');
  const itemName = item.querySelector('.answer__item-text').textContent; // Текст выбранного ответа

  const WIN_ANSWER_NAME = QA_CARD.name // Победный вариант определяем по сравнению имен
  const ROUND_DATA = DATA[ROUND];

   if (WIN_ANSWER_NAME === itemName) {
    setTrueAnswer(item, itemName, answerList, answerGameCard, answerPlayer, questionImageImgElement, questionNameElement, questionPlayer, quizNextBtnElement, ROUND_DATA, QA_CARD);

    if (ACTIVE_ROUND) { // Тут првоеряем на активность раунд
      SCORE += setScore(item, answerList);
      quizScoreCurrentElement.textContent = SCORE;
      ACTIVE_ROUND = false;
    }

   } else {
    setFalseAnswer(item, itemName, answerList, answerGameCard, answerPlayer, questionImageImgElement, questionNameElement, questionPlayer, quizNextBtnElement, ROUND_DATA, QA_CARD);
  }
}

const roundInit = () => {
  ACTIVE_ROUND = true;

  const ROUND_DATA = DATA[ROUND]; // Тут кароч специально прокидываем первы массив объектов, ибо именно он должен быть
  QA_CARD = getRandomQACard(ROUND_DATA); // Тут получаем случайную карточки для вопрос и верного ответвета
  questionCardInit(QA_CARD, questionPlayer, BLANK_DATA, questionImageImgElement, questionNameElement); // Инициализация карточки вопроса
  answerListInit(ROUND_DATA, answerList); // Инициализация листа ответов
  answerCardInit(BLANK_DATA, answerGameCard, answerPlayer); // Инициализация карточки ответа
  quizNextBtnElement.disabled = true;

  setRoundNumberList(numbersQuestionElement, ROUND);
}

// Функция которая завершает игры
const resultInit = () => {
  PAGE.renderResultPage();
}

const clickNextBtnInit = () => {
  ROUND += 1;

  if (ROUND > 5) {
    resultInit();
    setResultText(leadersTextElement, SCORE, leadersBtnElement);
  } else if (ROUND === 5) {
    roundInit();
    changeBtnForResult(quizNextBtnElement);
  } else {
    roundInit();
  }
}

// Вешаем обработчики
answerList.answerItems.forEach(element => {
  element.addEventListener('click', clickOnAnswer);
});

quizNextBtnElement.addEventListener('click', clickNextBtnInit);
leadersBtnElement.addEventListener('click', restartGame);

// Запускаем инициализацию игры при старте
gameInit();

export { gameInit }