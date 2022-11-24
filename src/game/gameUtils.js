// Изменение кнопки для последнего раунда
const changeBtnForResult = (button) => {
  button.textContent = 'Завершить игру'
}

const changeBtnForNextRound = (button) => {
  button.textContent = 'Следующий раунд'
}

const setZeroScoreText = (element) => {
  element.textContent = '0';
}

// Изменение странички с результатами
const setResultText = (element, score, button) => {
  if (score === 30) {
    element.textContent = 'Красавчик, ты набрал 30 из 30 баллов, что является максимальным результатом!!!';
    button.classList.add('btn__hide');
  } else {
    element.textContent = `Молодец, твои баллы равны ${score}, но максимум 30, может ещё разок?`;
    button.classList.remove('btn__hide');
  }
}

// Инициализация нумерации раундов
const setRoundNumberList = (numbersQuestionElement, ROUND) => {
  numbersQuestionElement.forEach(element => {
    element.classList.remove('active-quiz');
  });

  numbersQuestionElement[ROUND].classList.add('active-quiz');
}

// Инициализация карточки ответа
const answerListInit = (itemList, answerList) => {
  const itemsList = answerList.answerItems;

  itemsList.forEach(element => {
    element.classList.remove('active-true');
    element.classList.remove('active-false');
  });

  answerList.setTextItems(itemList);
}

// Инициализация карточки ответа
const answerCardInit = (BLANK_DATA, answerGameCard, answerPlayer) => {
  answerGameCard.cardName = BLANK_DATA.name;
  answerGameCard.cardImage = BLANK_DATA.image_2;
  answerGameCard.cardSpecies = BLANK_DATA.species;
  answerGameCard.cardDiscription = BLANK_DATA.description;

  answerPlayer.setMusic(BLANK_DATA.audio);
}

// Инициализация карточки вопроса
const questionCardInit = (QA_CARD, questionPlayer, BLANK_DATA, questionImageImgElement, questionNameElement) => {
  questionImageImgElement.src = BLANK_DATA.image_1;
  questionNameElement.textContent = '***';
  questionPlayer.setMusic(QA_CARD.audio); // Зададим трек в блок с вопросиком
}

const setTrueQuestionCard = (QA_CARD, questionImageImgElement, questionNameElement, questionPlayer) => {
  questionImageImgElement.src = QA_CARD.image;
  questionNameElement.textContent = QA_CARD.name;
  questionPlayer.pauseSong();
}

const setFalseAnswerList = (targetItemAnswer, answerList) => {
  const itemsList = answerList.answerItems;
  const audioObj = new Audio('https://jik789.github.io/music/other/no.mp3');

  let playAudio = true;
  if (!targetItemAnswer.classList.contains('active-false')) {
    for (let j = 0; j < itemsList.length; j++ ) {
      if (itemsList[j].classList.contains('active-true')) playAudio = false;
    }
    if (playAudio) {
      audioObj.play();
      targetItemAnswer.classList.add('active-false');
    }
  }
}

const setTrueAnswerList = (targetItemAnswer) => {
  const audioObj = new Audio('https://jik789.github.io/music/other/yes.mp3');
  if (!targetItemAnswer.classList.contains('active-true')) audioObj.play();
  targetItemAnswer.classList.add('active-true');
}

const setFalseAnswerCard = (targetItemName, ROUND_DATA, answerGameCard, answerPlayer) => {
  const targetBlock = ROUND_DATA.find((element) => {return element.name === targetItemName}); // находим выбранный блок по имени

  answerGameCard.cardName = targetBlock.name;
  answerGameCard.cardImage = targetBlock.image;
  answerGameCard.cardSpecies = targetBlock.species;
  answerGameCard.cardDiscription = targetBlock.description;

  answerPlayer.setMusic(targetBlock.audio);
}

const setTrueAnswerCard = (targetItemName, ROUND_DATA, answerGameCard, answerPlayer) => {
  const targetBlock = ROUND_DATA.find((element) => {return element.name === targetItemName}); // находим выбранный блок по имени

  answerGameCard.cardName = targetBlock.name;
  answerGameCard.cardImage = targetBlock.image;
  answerGameCard.cardSpecies = targetBlock.species;
  answerGameCard.cardDiscription = targetBlock.description;

  answerPlayer.setMusic(targetBlock.audio);
}

// Функция выбора верного ответа
const setFalseAnswer = (targetItemAnswer, targetItemName, answerList, answerGameCard, answerPlayer, questionImageImgElement, questionNameElement, questionPlayer, quizNextBtnElement, ROUND_DATA, QA_CARD) => {
  setFalseAnswerList(targetItemAnswer, answerList);  // Стили для листа
  setFalseAnswerCard(targetItemName, ROUND_DATA, answerGameCard, answerPlayer);  // Стили для карточки ответа
}

// Функция выбора неверного
const setTrueAnswer = (targetItemAnswer, targetItemName, answerList, answerGameCard, answerPlayer, questionImageImgElement, questionNameElement, questionPlayer, quizNextBtnElement, ROUND_DATA, QA_CARD) => {
  setTrueQuestionCard(QA_CARD, questionImageImgElement, questionNameElement, questionPlayer);
  setTrueAnswerList(targetItemAnswer);
  setTrueAnswerCard(targetItemName, ROUND_DATA, answerGameCard, answerPlayer);
  quizNextBtnElement.disabled = false;
}

const setScore = (targetItemAnswer, answerList) => {
  const itemsList = answerList.answerItems;

  const points = itemsList.filter((element) => !element.classList.contains('active-false')).length - 1; // Количество баллов выдаваемое за ответ
  let isGameActive = true;

  if (targetItemAnswer.classList.contains('active-false')) { // Тут мы проверяем не окончена ли игра, чтоыб правильно засчитать баллы
    for (let j = 0; j < itemsList.length; j++ ) {
      if (itemsList[j].classList.contains('active-true')) isGameActive = false;
    }
    if (isGameActive) {
      return points
    } else {
      return 0
    }
  } else {
    return points
  }

}

const getActuelCard = (ROUND_DATA, OLD_QA_CARD) => {
  for (let i = 0; i < ROUND_DATA.length; i++) {
    if (ROUND_DATA[i].id === OLD_QA_CARD.id) return ROUND_DATA[i]
  }
}

export {answerListInit, questionCardInit, setFalseAnswer, setTrueAnswer, setScore, answerCardInit, setRoundNumberList, changeBtnForResult, setResultText, changeBtnForNextRound, setZeroScoreText, getActuelCard}