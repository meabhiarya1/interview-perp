import React from "react";

const Debouncing = () => {
  let counter = 0;
  const getData = () => {
    const now = new Date().toISOString();
    console.log("Fetching Data...", counter++, "Time:", now);
  };

  const debounce = (func, delay) => {
    let timer; // Variable to store the timer reference

    // Return a new function that will be called on every event trigger
    return function (...args) {
      // Clear the existing timer if the function is called again before the delay
      if (timer) clearTimeout(timer);

      // Set a new timer to execute the function after the specified delay
      timer = setTimeout(() => {
        func(...args); // Call the original function with provided arguments
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

// Difference Between Throttling & Debouncing:

// Feature	                 Throttling	                             Debouncing
// Execution Frequency	     Limits execution to fixed intervals	   Executes after inactivity
// Use Case	                 Scroll, resize, mouse events	           Search input, form validation
// Control Mechanism	       Executes every delay ms	               Waits delay ms after last event

// ✅ Summary:
// Throttling: Limits function execution to once every 1500ms.
// Debouncing: Waits until the user stops typing for a delay duration before executing.
