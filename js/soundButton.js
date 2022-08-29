import {elements} from './elements.js'

let indexFlorestButton = 0
let indexRainButton = 0
let indexHouseButton = 0
let indexFireButton = 0

function isPair(value){
  return value % 2 == 0
}

function soundButtonClicked(button){
  
  switch(button){
    case elements.florestButton:
      indexFlorestButton++
      indexRainButton = 0
      indexHouseButton = 0
      indexFireButton = 0
      if(!isPair(indexFlorestButton)){
        elements.florestButton.classList.add('selected')
        elements.florestSound.play()
        elements.rainSound.pause()
        elements.houseSound.pause()
        elements.fireSound.pause()
      } else if(isPair(indexFlorestButton)){
        elements.florestButton.classList.remove('selected')
        elements.florestSound.pause()
      }
      elements.rainButton.classList.remove('selected')
      elements.houseButton.classList.remove('selected')
      elements.fireButton.classList.remove('selected')
    break;
    case elements.rainButton:
      indexFlorestButton = 0
      indexRainButton++
      indexHouseButton = 0
      indexFireButton = 0
      elements.florestButton.classList.remove('selected')
      if(!isPair(indexRainButton)){
        elements.rainButton.classList.add('selected')
        elements.florestSound.pause()
        elements.rainSound.play()
        elements.houseSound.pause()
        elements.fireSound.pause()
      } else if(isPair(indexRainButton)){
        elements.rainButton.classList.remove('selected')
        elements.rainSound.pause()
      }
      elements.houseButton.classList.remove('selected')
      elements.fireButton.classList.remove('selected')
    break;
    case elements.houseButton:
      indexFlorestButton = 0
      indexRainButton = 0
      indexHouseButton++
      indexFireButton = 0
      elements.florestButton.classList.remove('selected')
      elements.rainButton.classList.remove('selected')
      if(!isPair(indexHouseButton)){
        elements.houseButton.classList.add('selected')
        elements.florestSound.pause()
        elements.rainSound.pause()
        elements.houseSound.play()
        elements.fireSound.pause()
      } else if(isPair(indexHouseButton)){
        elements.houseButton.classList.remove('selected')
        elements.houseSound.pause()
      }
      elements.fireButton.classList.remove('selected')
    break;
    case elements.fireButton:
      indexFlorestButton = 0
      indexRainButton = 0
      indexHouseButton = 0
      indexFireButton++
      elements.florestButton.classList.remove('selected')
      elements.rainButton.classList.remove('selected')
      elements.houseButton.classList.remove('selected')
      if(!isPair(indexFireButton)){
        elements.fireButton.classList.add('selected')
        elements.florestSound.pause()
        elements.rainSound.pause()
        elements.houseSound.pause()
        elements.fireSound.play()
      } else if(isPair(indexFireButton)){
        elements.fireButton.classList.remove('selected')
        elements.fireSound.pause()
      }
    break;
    default:
    break;  
  }
}
export {soundButtonClicked}