import {elements} from './elements.js'
import {soundButtonClicked} from './soundButton.js'
import Controls from './controls.js'
import handleTimer from './timer.js'

const timerhandle = handleTimer()
const handleControlButtonsClicked = Controls({elements, timerhandle, soundButtonClicked})

elements.playButton.addEventListener('click', handleControlButtonsClicked.playButtonClicked)
elements.stopButton.addEventListener('click', handleControlButtonsClicked.stopButtonClicked)
elements.incrementButton.addEventListener('click', handleControlButtonsClicked.incrementButtonClicked)
elements.decrementButton.addEventListener('click', handleControlButtonsClicked.decrementButtonClicked)
elements.florestButton.addEventListener('click', handleControlButtonsClicked.florestButtonClicked)
elements.rainButton.addEventListener('click', handleControlButtonsClicked.rainButtonClicked)
elements.houseButton.addEventListener('click', handleControlButtonsClicked.houseButtonClicked)
elements.fireButton.addEventListener('click', handleControlButtonsClicked.fireButtonClicked)
elements.lightDarkButton.addEventListener('click', handleControlButtonsClicked.lightDarkButtonClicked)
elements.florestVolume.addEventListener('change', handleControlButtonsClicked.florestVolumeChanged)
elements.rainVolume.addEventListener('change', handleControlButtonsClicked.rainVolumeChanged)
elements.houseVolume.addEventListener('change', handleControlButtonsClicked.houseVolumeChanged)
elements.fireVolume.addEventListener('change', handleControlButtonsClicked.fireVolumeChanged)