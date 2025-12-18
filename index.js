import { initialize } from "./logic/events/events.js";
import { engine } from "./logic/engine/mainEngine.js";
import { handleRadioInputs } from "./logic/display/handleRadioInputs.js";

initialize();
engine();
handleRadioInputs()