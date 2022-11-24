// Класс для получения чего-то от плеера
class AnswerList {
  #answerListElement = null;
  #answerItems = null;
  #answerItemsText = null;
  
  constructor(element) {
    this.#answerListElement = element;
    this.#answerItems = Array.from(this.#answerListElement.querySelectorAll('.answer__item'));
    this.#answerItemsText = Array.from(this.#answerListElement.querySelectorAll('.answer__item-text'));
  }

  get elements() {
    return this.#answerListElement;
  }

  get answerItems() {
    return this.#answerItems;
  }
  
  setTextItems(answerDataList) {
    for (let i = 0; i < this.#answerItems.length; i++) {
      this.#answerItemsText[i].textContent =  answerDataList[i].name
    }
  }
}

export { AnswerList }