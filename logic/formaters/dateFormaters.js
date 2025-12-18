const calculateFromDate = (inputValue = 0) => {
  let target = new Date(inputValue);
  let now = Date.now();
  let diff = target - now;

  return diff;
};

const calculateFromMinutes = (inputValue = 0) => {
  let diff = Number(inputValue) * 60000;

  return diff;
};

export { calculateFromDate, calculateFromMinutes };
