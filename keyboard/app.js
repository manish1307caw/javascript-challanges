import { keyCheck, preventException } from "./utility.js";

window.addEventListener("keydown", (event) => {
  let keyVal = event.key.toString().toUpperCase();
  preventException(event, keyVal);
  keyCheck(keyVal);
});
