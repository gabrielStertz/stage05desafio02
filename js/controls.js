export default function Controls({
  elements,
  timerhandle,
  soundButtonClicked
}){

  let timer = 0
  let playIndex = 0
  
  function changeColorWhenClicked(button){
    button.classList.add('increment-decrement-clicked')
    setTimeout(() => button.classList.remove('increment-decrement-clicked'), 500)
  }

  function playButtonClicked(){
    timerhandle.setTimer(Number(elements.minutes.textContent))
    if(playIndex == 0){
      elements.playButton.classList.add('clicked')
      timerhandle.countDown()
    } else if(playIndex > 0){
      changeColorWhenClicked(elements.playButton)
    }
    playIndex++
  }
  function stopButtonClicked(){
    elements.playButton.classList.remove('clicked')
    changeColorWhenClicked(elements.stopButton)
    timerhandle.stop()
    elements.minutes.textContent = String(timer).padStart(2, '0')
    elements.seconds.textContent = '00'
    playIndex = 0
  }
  function incrementButtonClicked(){
    changeColorWhenClicked(elements.incrementButton)
    elements.minutes.textContent = String(Number(elements.minutes.textContent) + 5).padStart(2, '0')
    timer = Number(elements.minutes.textContent)
    playIndex = 0
  }
  function decrementButtonClicked(){
    changeColorWhenClicked(elements.decrementButton)
    if(timer > 0){
      elements.minutes.textContent = String(Number(elements.minutes.textContent) - 5).padStart(2, '0')
    }
    timer = Number(elements.minutes.textContent)
  }
  function florestButtonClicked(){
    soundButtonClicked(elements.florestButton)
  }
  function rainButtonClicked(){
    soundButtonClicked(elements.rainButton)
  }
  function houseButtonClicked(){
    soundButtonClicked(elements.houseButton)
  }
  function fireButtonClicked(){
    soundButtonClicked(elements.fireButton)
  }
  function lightDarkButtonClicked(){
    elements.lightButton.classList.toggle('hide')
    elements.darkButton.classList.toggle('hide')
    elements.body.classList.toggle('light')
    elements.body.classList.toggle('dark')
    elements.timerSide.classList.toggle('light')
    elements.timerSide.classList.toggle('dark')
    elements.soundsSide.classList.toggle('light')
    elements.soundsSide.classList.toggle('dark')
  }
  function florestVolumeChanged(){
    elements.florestSound.volume = elements.florestVolume.value / 100
  }
  function rainVolumeChanged(){
    elements.rainSound.volume = elements.rainVolume.value / 100
  }
  function houseVolumeChanged(){
    elements.houseSound.volume = elements.houseVolume.value / 100
  }
  function fireVolumeChanged(){
    elements.fireSound.volume = elements.fireVolume.value / 100
  }
  return {playButtonClicked, 
          stopButtonClicked, 
          incrementButtonClicked, 
          decrementButtonClicked, 
          lightDarkButtonClicked,
          florestVolumeChanged,
          rainVolumeChanged,
          houseVolumeChanged,
          fireVolumeChanged,
          florestButtonClicked,
          rainButtonClicked,
          houseButtonClicked,
          fireButtonClicked
        }
}