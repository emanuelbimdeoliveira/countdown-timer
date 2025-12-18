import { state, setState } from "../state/state.js";

const countdownEngine = () => {
  const newValue = state.countdownRemaining - 100;
  
  setState("countdownRemaining", newValue);
};

export { countdownEngine };
