import { updateScreen } from "../display/updateScreen.js";
import { setState } from "../state/state.js";

const chronometerController = (command) => {
  setState("statusMode", "chronometer");

  const map = {
    start: () => setState("running", true),
    pause: () => setState("running", false),
    cancel: () => {
      map.pause();
      setState("elapsedTime", 0);
      updateScreen();
    },
    restart: () => {
      map.start();
      setState("elapsedTime", 0);
    },
    toHome: () => {
      map.pause();
    },
  };

  if (map[command]) map[command]();
};

export { chronometerController };
