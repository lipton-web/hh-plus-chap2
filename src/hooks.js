export function createHooks(callback) {
  let states = [];
  let calls = 0;
  console.log("createHooks", callback);

  const useState = (initState) => {
    console.log("initState", initState);
    // return [];
    if (states[calls]) {
      let state = states[calls];
      const setState = (newState) => {
        console.log("newState", newState);
        states[calls] = newState;
        callback();
      };
      calls++;
      return [state, setState];
    } else {
      let state = initState;
      const setState = (newState) => {
        console.log("newState2", newState);
        states[calls] = newState;
        callback();
      };
      states[calls] = state;
      calls++;
      return [state, setState];
    }
  };

  const useMemo = (fn, refs) => {
    return fn();
  };

  const resetContext = () => {};

  return { useState, useMemo, resetContext };
}
