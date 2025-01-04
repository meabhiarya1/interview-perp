import React from "react";

const Debouncing = () => {
  let counter = 0;
  const getData = () => {
    const now = new Date().toISOString();
    console.log("Fetching Data...", counter++, "Time:", now);
  };

  const debounce = (func, delay) => {
    let timer;
    return function (...args) {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  const betterFunction = debounce(getData, 500);

  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        <input
          type="text"
          placeholder="Search"
          onKeyUp={betterFunction}
          className="border border-red-800 p-2 rounded-lg"
        />
      </div>
    </div>
  );
};

export default Debouncing;

// Key Points:

// Timer Resetting:
// Every key press clears the existing timer (clearTimeout).
// A new timer is set for the specified delay (500ms).

// Exact Delay:
// The func (in this case, getData) only executes after 500ms of no further keypresses.
// If you keep pressing keys, the delay keeps resetting.

// Expected Behavior:
// If you type continuously, no logs will appear.
// When you stop typing for 500ms, the console.log will trigger with a timestamp.
// ✅ The delay will always be exactly 500ms after the last key press.
