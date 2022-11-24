// Функция для вставки элемента в конкретное место
const RenderPosition = {
  BEFOREBEGIN: 'beforebegin',
  AFTERBEGIN: 'afterbegin',
  BEFOREEND: 'beforeend',
  AFTEREND: 'afterend',
};

// Функция создания элемента из строки
const createElement = (template) => {
  const newElement = document.createElement('div');
  newElement.innerHTML = template; 

  return newElement.firstElementChild;
};

// Функция вставки элемента в родителя (кого, куда)
const render = (component, container, place = RenderPosition.BEFOREEND) => {
  const element = component.getElement();

  switch (place) {
    case RenderPosition.BEFOREBEGIN:
      container.before(element);
      break;
    case RenderPosition.AFTERBEGIN:
      container.prepend(element);
      break;
    case RenderPosition.BEFOREEND:
      container.append(element);
      break;
    case RenderPosition.AFTEREND:
      container.after(element);
      break;
  }
};

// Функция кастомного элемента
class CustomElement {
  element = null;

  constructor(tagName, options) {
    this.element = document.createElement(tagName);
    if (options) {
      Object.assign(this.element, options);
    }
  }

  addChildren(children) {
    this.element.append(...children);
  }
}

// Класс для получения чего-то от карточки
class CardAudioPlayer {
  parentElement = null;

  constructor(element) {
    this.parentElement = element.closest('.gallery__item');
  }

  get audio() {
    return this.parentElement.querySelector('.tools__music');
  }

  get button() {
    return this.parentElement.querySelector('.control__play');
  }

  get player() {
    return this.parentElement;
  }

  get audioProgressContainer() {
    return this.parentElement.querySelector('.timer__progress');
  }
  
  get audioProgressBar() {
    return this.parentElement.querySelector('.progress__bar');
  }

  get audioCurrentTime() {
    return this.parentElement.querySelector('.current');
  }

  get audioDurationTime() {
    return this.parentElement.querySelector('.duration');
  }

  get audioVolumeContainer() {
    return this.parentElement.querySelector('.sound__progress');
  }

  get audioVolumeBar() {
    return this.parentElement.querySelector('.sound__bar');
  }
}

// Класс для получения чего-то от карточки
class QuestionCard {
  parentElement = null;

  constructor(element) {
    this.parentElement = element.closest('.gallery__item');
  }

  get audio() {
    return this.parentElement.querySelector('.tools__music');
  }
}

// Класс для получения чего-то от карточки
class AnswareCard {
  parentElement = null;

  constructor(element) {
    this.parentElement = element.closest('.gallery__item');
  }

  get audio() {
    return this.parentElement.querySelector('.tools__music');
  }
}

export {RenderPosition, createElement, render, CustomElement, CardAudioPlayer, QuestionCard, AnswareCard};