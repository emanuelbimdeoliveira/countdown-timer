import { state } from "../state/state.js";
import { formatTime } from "../formaters/textFormaters.js";

let display;
let time;

const updateScreen = () => {
  chooseDisplay();
  display.innerText = time;
};

const chooseDisplay = () => {
  if (state.statusMode == "chronometer") {
    display = document.querySelector("#display-chronometer");
    time = formatTime(state.elapsedTime);
  } else if (state.statusMode == "countdown") {
    display = document.querySelector("#display-countdown");
    time = formatTime(state.countdownRemaining);
  }
  if (!display) return;
};

export { updateScreen };
