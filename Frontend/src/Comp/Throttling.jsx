import React from "react";

const Throttling = () => {
  let counter = 0;
  const getData = () => {
    const now = new Date().toISOString();
    console.log("Fetching Data...", counter++, "Time:", now);
  };

  const throttle = (func, delay) => {
    let last = 0; // Timestamp of the last function call
    return function (...args) {
      let now = new Date().getTime(); // Current timestamp
      if (now - last < delay) return; // Ignore if delay hasn't passed
      last = now; // Update the last call time
      return func(...args); // Execute the function
    };
  };

  const betterFunction = throttle(getData, 1500);

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

export default Throttling;


// How it works:

// last: Tracks the last time the function was called.
// On each event trigger (onKeyUp):
// If the time since the last call is less than delay (1500ms here), the function is ignored.
// If the time since the last call is more than delay, the function executes and updates last.


// betterFunction is a throttled version of getData with a delay of 1500ms.
// It ensures that getData will execute at most once every 1.5 seconds, even if multiple key presses occur.


// Difference Between Throttling & Debouncing:

// Feature	                 Throttling	                             Debouncing
// Execution Frequency	     Limits execution to fixed intervals	   Executes after inactivity
// Use Case	                 Scroll, resize, mouse events	           Search input, form validation
// Control Mechanism	       Executes every delay ms	               Waits delay ms after last event


// ✅ Summary:
// Throttling: Limits function execution to once every 1500ms.
// Debouncing: Waits until the user stops typing for a delay duration before executing.