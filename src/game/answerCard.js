// Класс для получения чего-то от плеера
class AnswerCard {
  #card = null;
  #cardName = null;
  #cardImage = null;
  #cardSpecies = null;
  #cardDiscription = null;

  constructor(card) {
    this.#card = card;
    this.#cardName = this.#card.querySelector('.card__name');
    this.#cardImage = this.#card.querySelector('.card__image-img');
    this.#cardSpecies = this.#card.querySelector('.card__species');
    this.#cardDiscription = this.#card.querySelector('.card__discription');
  }

  get cardName() {
    return this.#cardName
  }

  set cardName(value) {
    this.#cardName.textContent = value;
  }

  get cardImage() {
    return this.#cardImage
  }

  set cardImage(value) {
    this.#cardImage.src = value;
  }

  get cardSpecies() {
    return this.#cardSpecies
  }

  set cardSpecies(value) {
    this.#cardSpecies.textContent = value;
  }

  get cardDiscription() {
    return this.#cardDiscription
  }

  set cardDiscription(value) {
    this.#cardDiscription.textContent = value;
  }
}

export { AnswerCard }