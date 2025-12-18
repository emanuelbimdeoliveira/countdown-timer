import { toNavigation } from "../display/navigation.js";
import { logicController } from "../controller/logic-controller.js";

const buttons = document.querySelectorAll("button");

let navigation;
let logic;

const initialize = () => {
  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      navigation = event.target.dataset.navigation;
      logic = event.target.dataset.logic;

      if (navigation) toNavigation(navigation);
      if (logic) logicController(logic);
    });
  });
};

export { initialize };
