const state = {
  statusMode: "chronometer",
  running: false,
  elapsedTime: 0,
  countdownRemaining: 0,
};

const setState = (key, value) => {
  state[key] = value;
};

export { state, setState };
