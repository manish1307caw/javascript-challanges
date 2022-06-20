import {listOfAllKeysByClassName} from './app.js';
function setJiggleToAnotherKey() {
    let keyToBeSelected = Math.floor((Math.random() * 52) + 0);
    listOfAllKeysByClassName[keyToBeSelected].classList.add("jiggle");
    listOfAllKeysByClassName[keyToBeSelected].id = "Jiggling";

}

var keyCheck = (keyRef) => {
    var jigglingElement = document.getElementById("Jiggling");
    if(jigglingElement.getAttribute("data-key").toString() == keyRef) {
        jigglingElement.classList.remove("jiggle");
        jigglingElement.id = "";
        setJiggleToAnotherKey();
        
    } else {
        console.log("You Entered Wrong key");
    }
}
function preventException(event, keyVal){
    if (keyVal == "TAB") {  //tab pressed
        event.preventDefault(); // stops its action
    }
}
export {
    setJiggleToAnotherKey,
    keyCheck,
    preventException
};