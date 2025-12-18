import { setState } from "../state/state.js";
import { formatInput } from "../formaters/textFormaters.js";
import { updateScreen } from "../display/updateScreen.js";

const countdownController = (command) => {
  setState("statusMode", "countdown");

  const map = {
    start: () => {
      const ms = formatInput();
      setState("countdownRemaining", ms);
      setState("running", true);
    },
    pause: () => setState("running", false),
    continue: () => setState("running", true),
    cancel: () => {
      map.pause();
      setState("coutdonwRemaining", 0);
      updateScreen();
    },
    toHome: () => {
      map.pause();
    },
  };

  if (map[command]) map[command]();
};

export { countdownController };
