const checkbox = document.querySelectorAll('input[type="checkbox"]');
let currentState = "None";
let currentStateRef = null;
let loopThrough = (startPos, endPos, temp) => {
    for(let i = startPos; i < endPos-1; i++) {
      checkbox[i].checked = checkbox[temp-1].checked;
    }
    
  }
  let changeStatesOfKey = (event) => {
    let endPos = parseInt(currentStateRef.target.name.slice(8));
    let startPos = parseInt(event.target.name.slice(8));
    let temp = startPos;
    if(endPos < startPos) {
      temp = startPos;
      startPos = endPos;
      endPos = temp;
    }
    console.log("hi", startPos, endPos);
    loopThrough(startPos, endPos, temp);
  }
  let changeWithoutShift = (event) => {
    // tbi
    currentStateRef = event;
    if(event.target.checked) {
      currentState = "checked";
    } else{
      currentState = "unchecked";
    }
    console.log("without shift Key", currentStateRef);
  }
  let changeSettingsTillEnd = (event) => {
    let startPos = parseInt(event.target.name.slice(8));
    for(let i = startPos; i < 10; i++) {
      checkbox[i].checked = checkbox[startPos-1].checked;
    }
    console.log(startPos);
  }
  let changeWithShift = (event) => {
    if(currentState === "checked" && event.target.checked || (currentState === "unchecked" && !event.target.checked)) {
      changeStatesOfKey(event);
      console.log("within the range")
    } else {
      changeSettingsTillEnd(event);
      console.log("out of range");
    }
  }
  let changeSettings = (event, element) => {
    if(event.shiftKey) {
      changeWithShift(event);
    } else {
      changeWithoutShift(event);
    }
    console.log(event);
  }
  export {
    loopThrough, changeStatesOfKey, changeWithoutShift,
     changeSettingsTillEnd, changeWithShift, changeSettings
  };