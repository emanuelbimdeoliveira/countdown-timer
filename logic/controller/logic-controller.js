import { chronometerController } from "./chronometerController.js";
import { countdownController } from "./countdownController.js";

const logicController = (command) => {
  const [module, action] = command.split(":");

  if (module == "chronometer") chronometerController(action);
  if (module == "countdown") countdownController(action);
};

export { logicController };
