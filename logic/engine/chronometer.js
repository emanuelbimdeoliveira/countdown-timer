import { state, setState } from "../state/state.js";

const chronometerEngine = () => {
  const newValue = state.elapsedTime + 100;

  setState("elapsedTime", newValue);
};

export { chronometerEngine };
