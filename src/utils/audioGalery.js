import { galleryList } from '../view/main-three-view.js';
import { allPlayerStop } from './utils.js';
import { CardAudioPlayer } from './render.js';

const GENERAL = galleryList.element; // Получим массив карточек

const allAudio = Array.from(GENERAL.querySelectorAll('.tools__music'));
const allPlayBtn =  Array.from(GENERAL.querySelectorAll('.control__play'));
const allProgressContainer = Array.from(GENERAL.querySelectorAll('.timer__progress'));
const allVolumeContainer = Array.from(GENERAL.querySelectorAll('.sound__progress'));

//Проигрывание песни
function playSong(button, audio, player) {
  button.classList.add('control__pause');
  player.classList.add('play');
  audio.play();
}

//Пауза для песни
function pauseSong(button, audio, player) {
  button.classList.remove('control__pause');
  player.classList.remove('play');
  audio.pause();
}

//запуск и остановка песни
function setPlayStopAudio(event) {
  const currentElement = new CardAudioPlayer(event.target);

  const currentAudio = currentElement.audio;
  const currentPlayer = currentElement.player; 
  const currentButton = currentElement.button;

  const isPlaying = currentPlayer.classList.contains('play');

  allPlayerStop(currentButton, currentAudio, currentPlayer); // Вот тут мы прокидываем все плееры кроме выбранного, чтобы остановить их
  isPlaying ? pauseSong(currentButton, currentAudio, currentPlayer) : playSong(currentButton, currentAudio, currentPlayer); // Запускаем или останавливаем выбранный трек
}

//Прогресс бар 
function updateProgress(event) {
  const currentElement = new CardAudioPlayer(event.target);

  const currentAudio = currentElement.audio;
  const currentPlayer = currentElement.player; 
  const currentButton = currentElement.button;

  const currenеDuration = currentAudio.duration; // Общая длительность звука
  const currentTime = currentAudio.currentTime;
  const currentAudioProgressBar = currentElement.audioProgressBar;

  const progressPercent = (currentTime / currenеDuration) * 100;
  currentAudioProgressBar.style.width = `${progressPercent}%`;

  //Обновление времени трека
  const musicCurrentTime = currentElement.audioCurrentTime;

  //Время начала трека
  let currentMin = Math.floor(currentTime / 60);
  let currentSec = Math.floor(currentTime % 60);

  if (currentSec < 10) currentSec = `0${currentSec}`
  if (currentMin < 10) currentMin = `0${currentMin}`

  if (currentTime === currenеDuration) { // обнулим плеер карточки если песня закончилась
    musicCurrentTime.textContent = '00:00';
    currentAudioProgressBar.style.width = 0;
    pauseSong(currentButton, currentAudio, currentPlayer);
  } else {
    musicCurrentTime.textContent = `${currentMin}:${currentSec}`;
  }
};


// Перемотка трекича
function setTimeProgress(event) {
  const currentElement = new CardAudioPlayer(event.target);

  const currentAudioProgressContainer = currentElement.audioProgressContainer;
  const currentAudio = currentElement.audio;

  // Определяем общую длину и длину от начала до клика
  const width = currentAudioProgressContainer.clientWidth;
  const clickX = event.offsetX;
  const currentAudioDuration = currentAudio.duration;

  currentAudio.currentTime = (clickX / width) * currentAudioDuration;
};

// Изменение звука трека
function setVolume(event) {
  const currentElement = new CardAudioPlayer(event.target);

  const currentAudioVolumeContainer = currentElement.audioVolumeContainer;
  const currentAudioVolumeBar = currentElement.audioVolumeBar;
  const currentAudio = currentElement.audio;

  // Определяем общую длину и длину от начала до клика
  const width = currentAudioVolumeContainer.clientWidth; 
  const clickX = event.offsetX; 

  currentAudio.volume = clickX / width; // Задаем громкость
  const progressPercent = currentAudio.volume * 100;

  currentAudioVolumeBar.style.width = `${progressPercent}%`;
};

const addEventPlayBtn = () => {
  for (let i = 0; i < allPlayBtn.length; i++) {
    allPlayBtn[i].addEventListener('click', setPlayStopAudio);
  }
}

const addEventUpdateAudio = () => {
  for (let i = 0; i < allAudio.length; i++) {
    allAudio[i].addEventListener('timeupdate', updateProgress);
  }
}

const addEventDurationAudio = () => {
  for (let i = 0; i < allAudio.length; i++) {
    const currentElement = new CardAudioPlayer(allAudio[i]);
    const currentDurationElement = currentElement.audioDurationTime;

    const currentAudioDuration = allAudio[i].duration;

    let totalMin = Math.floor(currentAudioDuration / 60);
    let totalSec = Math.floor(currentAudioDuration % 60);

    if (totalMin < 10) {
      totalMin = `0${totalMin}`
    }

    if (totalSec < 10) {
      totalSec = `0${totalSec}`
    }

    if (!allAudio[i].duration) {
      totalMin = '00';
      totalSec = '00';
    }

    currentDurationElement.textContent = `${totalMin}:${totalSec}`;
  }
}

const addEventTimerProgress = () => {
  for (let i = 0; i < allProgressContainer.length; i++) {
    allProgressContainer[i].addEventListener('click', setTimeProgress);
  }
}

const addEventVolume = () => {
  for (let i = 0; i < allVolumeContainer.length; i++) {
    allVolumeContainer[i].addEventListener('click', setVolume);
  }
}

window.addEventListener('load', addEventDurationAudio);
window.addEventListener('load', addEventUpdateAudio);
window.addEventListener('load', addEventPlayBtn);
window.addEventListener('load', addEventTimerProgress);
window.addEventListener('load', addEventVolume);

export { setPlayStopAudio }