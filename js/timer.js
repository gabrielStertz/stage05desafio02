import {elements} from './elements.js'
export default function handleTimer(){
  let timerTimeOut
  let timer = 0  
  function countDown(){
    timerTimeOut = setTimeout(function(){
      let newSecond = Number(elements.seconds.textContent)
      let newMinute = Number(elements.minutes.textContent)
      if(newMinute <= 0 && newSecond <= 0){
        if(timer > 0){
          elements.kitchenTimer.play()  
        }
        elements.playButton.classList.remove('clicked')
        return timerTimeOut
      }
      if(newSecond <= 0){
        newSecond = 60
        elements.minutes.textContent = String(Number(elements.minutes.textContent)-1).padStart(2, '0')
      }
      --newSecond
      elements.seconds.textContent = String(newSecond).padStart(2, '0')
      countDown()
    }, 1000)
  }
  function stop(){
    clearTimeout(timerTimeOut)
  }
  function setTimer(value){
    timer = value
  }
  return {countDown, stop, setTimer}
}