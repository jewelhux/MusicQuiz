// Класс для получения чего-то от плеера
class AudioPlayer {
  #currentPlayer = null;
  #audio = null;
  #button = null;
  #audioProgressContainer = null;
  #audioProgressBar = null;
  #audioVolumeContainer = null;
  #audioVolumeBar = null;
  #audioCurrentTime = null;
  #audioDurationTime = null;

  constructor(element) {
    this.#currentPlayer = element;
    this.#audio = this.#currentPlayer.querySelector('.tools__music');
    this.#button = this.#currentPlayer.querySelector('.control__play');
    this.#audioProgressContainer = this.#currentPlayer.querySelector('.timer__progress');
    this.#audioProgressBar = this.#currentPlayer.querySelector('.progress__bar');
    this.#audioVolumeContainer = this.#currentPlayer.querySelector('.sound__progress');
    this.#audioVolumeBar = this.#currentPlayer.querySelector('.sound__bar');
    this.#audioCurrentTime = this.#currentPlayer.querySelector('.current');
    this.#audioDurationTime = this.#currentPlayer.querySelector('.duration');

    // Вешаем обработчики на плеер
    this.#button.addEventListener('click', () => {this.setPlayStopAudio()});
    this.#audioProgressContainer.addEventListener('click', (event) => {this.setTimeProgress(event)});
    this.#audioVolumeContainer.addEventListener('click', (event) => {this.setVolume(event)});
    this.#audio.addEventListener('timeupdate', () => {this.updateProgress()});
    window.addEventListener('load', () => this.setDurationAudio());
  }

  set audio(value) {
    this.#audio.src = value;
  }

  get audio() {
    return this.#audio;
  }

  playSong() {
    this.#button.classList.add('control__pause');
    this.#currentPlayer.classList.add('play');
    this.#audio.play();
  }

  pauseSong() {
    this.#button.classList.remove('control__pause');
    this.#currentPlayer.classList.remove('play');
    this.#audio.pause();
  }

  // Установка музыки
  setMusic(value) {
    this.#audio.src = value;
    this.pauseSong();
    this.updateProgress();
    this.#audioProgressBar.style.width = 0;
    this.#audio.onloadedmetadata = () => this.setDurationAudio();
  }

  // Запуск песенки
  setPlayStopAudio() {
    const isPlaying = this.#currentPlayer.classList.contains('play');
    isPlaying ? this.pauseSong() : this.playSong();
  }

  // Обновление прогресс-бара
  updateProgress() {
    const audioCurrentTime = this.#audio.currentTime; // Текущее время трека
    const audioDurationTime = this.#audio.duration; // Общее время трека
    const audioCurrentTimeText = this.#audioCurrentTime; // Текст времени текущего трека
    const audioProgressBar = this.#audioProgressBar; // Линия прогресса 

    const progressPercent = (audioCurrentTime / audioDurationTime) * 100;
    audioProgressBar.style.width = `${progressPercent}%`;

    let currentMin = Math.floor(audioCurrentTime / 60);
    let currentSec = Math.floor(audioCurrentTime % 60);

    if (currentSec < 10) currentSec = `0${currentSec}`;
    if (currentMin < 10) currentMin = `0${currentMin}`;

    if (audioCurrentTime === audioDurationTime) { // Если трек кончился
      audioCurrentTimeText.textContent = '00:00';
      audioProgressBar.style.width = 0;
      this.pauseSong();
    } else {
      audioCurrentTimeText.textContent = `${currentMin}:${currentSec}`;
    }
  }

  // Длительность трека
  setDurationAudio() {
    const audioDurationTimeText = this.#audioDurationTime; // Текст длительности текущего трека
    const audioDurationTime = this.#audio.duration; // Общее время трека

    let totalMin = Math.floor(audioDurationTime / 60);
    let totalSec = Math.floor(audioDurationTime % 60);

    if (totalMin < 10) totalMin = `0${totalMin}`
    if (totalSec < 10) totalSec = `0${totalSec}`

    if (!audioDurationTime) {
      totalMin = '00';
      totalSec = '00';
    }

    audioDurationTimeText.textContent = `${totalMin}:${totalSec}`;
  }

  // Перемотка трекича
  setTimeProgress(event) {
    const width = this.#audioProgressContainer.clientWidth; // Длина всей полоски 
    const clickX = event.offsetX; // Место клика на полоске
    const audioDurationTime = this.#audio.duration; // Общее время трека

    this.#audio.currentTime = (clickX / width) * audioDurationTime
  }

  // Установка громкости
  setVolume(event) {
    const currentAudioVolumeContainer = this.#audioVolumeContainer;
    const currentAudio = this.#audio;
  
    // Определяем общую длину и длину от начала до клика
    const width = currentAudioVolumeContainer.clientWidth; 
    const clickX = event.offsetX; 
  
    currentAudio.volume = clickX / width; // Задаем громкость
    const progressPercent = currentAudio.volume * 100;
  
    this.#audioVolumeBar.style.width = `${progressPercent}%`;
  };
}

export { AudioPlayer }