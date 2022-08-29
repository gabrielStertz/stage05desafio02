const playButton = document.querySelector('#play')
const stopButton = document.querySelector('#stop')
const incrementButton = document.querySelector('#increment')
const decrementButton = document.querySelector('#decrement')
const florestButton = document.querySelector('.florest')
const rainButton = document.querySelector('.rain')
const houseButton = document.querySelector('.house')
const fireButton = document.querySelector('.fire')
const minutes = document.querySelector('#minutes')
const seconds = document.querySelector('#seconds')
const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
const florestSound = document.querySelector('#florestSound')
const rainSound = document.querySelector('#rainSound')
const houseSound = document.querySelector('#houseSound')
const fireSound = document.querySelector('#fireSound')
const lightButton = document.querySelector('.sun')
const darkButton = document.querySelector('.moon')
const lightDarkButton = document.querySelector('.mode')
const body = document.querySelector('body')
const timerSide = document.querySelector('#timer-side')
const soundsSide = document.querySelector('#sounds-side')
const florestVolume = document.querySelector('#florestVolume')
const rainVolume = document.querySelector('#rainVolume')
const houseVolume = document.querySelector('#houseVolume')
const fireVolume = document.querySelector('#fireVolume')

florestSound.loop = true
rainSound.loop = true
houseSound.loop = true
fireSound.loop = true
florestVolume.value = 50
florestSound.volume = 0.5
rainVolume.value = 50
rainSound.volume = 0.5
houseVolume.value = 50
houseSound.volume = 0.5
fireVolume.value= 50
fireSound.volume = 0.5

export const elements = {
  playButton,
  stopButton,
  incrementButton,
  decrementButton,
  florestButton,
  rainButton,
  houseButton,
  fireButton,
  minutes,
  seconds,
  kitchenTimer,
  florestSound,
  rainSound,
  houseSound,
  fireSound,
  lightButton,
  darkButton,
  lightDarkButton,
  body,
  timerSide,
  soundsSide,
  florestVolume,
  rainVolume,
  houseVolume,
  fireVolume
}