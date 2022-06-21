import{
	setEnabled, isValid, invertState, changeTiming, alterSettings, switcher 
} from './utility.js';
let settingsButtonRef = document.getElementById("settingsTBR");
let startButton = document.getElementById("timerTrigger");
console.log("This is testing the game");
startButton.addEventListener("click", switcher);
settingsButtonRef.addEventListener("click", alterSettings);