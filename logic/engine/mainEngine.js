import { setState, state } from "../state/state.js";
import { updateScreen } from "../display/updateScreen.js";

import { chronometerEngine } from "./chronometer.js";
import { countdownEngine } from "./countdown.js";

let chronometerMode;
let countdownMode;
let countdownValidade;

const engine = () => {
  const mainEngine = () => {
    chronometerMode = state.statusMode == "chronometer";
    countdownMode = state.statusMode == "countdown";
    countdownValidade = state.countdownRemaining <= 0 && countdownMode;

    if (countdownValidade) setState("running", false);
    if (!state.running) return;

    if (chronometerMode) chronometerEngine();
    if (countdownMode) countdownEngine();

    updateScreen();
  };

  setInterval(() => {
    mainEngine();
  }, 100);
};

export { engine };
