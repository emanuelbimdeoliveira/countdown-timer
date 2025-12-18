const handleRadioInputs = () => {
  const modeDate = document.querySelector("#mode-date");
  const modeMinutes = document.querySelector("#mode-minutes");

  const dateInput = document.querySelector("#countdown-date");
  const minutesInput = document.querySelector("#countdown-minutes");

  const handleModeChange = () => {
    if (modeDate.checked) {
      dateInput.disabled = false;
      minutesInput.disabled = true;
      minutesInput.value = "";
    }

    if (modeMinutes.checked) {
      minutesInput.disabled = false;
      dateInput.disabled = true;
      dateInput.value = "";
    }
  };

  modeDate.addEventListener("change", handleModeChange);
  modeMinutes.addEventListener("change", handleModeChange);
};

export { handleRadioInputs };
