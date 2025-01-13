import React from "react";

const EventBubbling__EventCapturing = () => {
  return (
    <div>
      <div
        className="flex flex-col justify-center items-center h-72 border-4 border-black p-4 gap-4"
        onClick={(e) => {
          console.log("Grand Parent");
          e.stopPropagation(); // Stop event bubbling
        }}
      >
        Grand Parent
        <div
          className="flex flex-col justify-center items-center h-52 w-72 border-4 border-black p-4 gap-4"
          onClick={(e) => {
            {
              console.log("Parent");
              e.stopPropagation(); // Stop event bubbling
            }
          }}
        >
          Parent
          <div
            className="flex flex-col justify-center items-center h-28 w-64 border-4 border-black p-4"
            onClick={(e) => {
              console.log("Child");
              e.stopPropagation(); // Stop event bubbling
            }}
          >
            Child
          </div>
        </div>
      </div>

      <div
        className="flex flex-col justify-center items-center h-72 border-4 border-black p-4 gap-4 mt-4"
        onClickCapture={(e) => {
          console.log("Grand Parent (Capturing)");
          e.stopPropagation();
        }}
      >
        Grand Parent (Capturing)
        <div
          className="flex flex-col justify-center items-center h-52 w-72 border-4 border-black p-4 gap-4"
          onClickCapture={() => console.log("Parent (Capturing)")}
        >
          Parent (Capturing)
          <div
            className="flex flex-col justify-center items-center h-28 w-64 border-4 border-black p-4"
            onClickCapture={(e) => {
              {
                console.log("Child (Capturing)");
              }
            }}
          >
            Child (Capturing)
          </div>
        </div>
      </div>
    </div>
  );
};

// Event Bubbling is bottom to top approch and Event Capturing is top to bottom
// We can use event.stopPropagation() to stop event bubbling or event capturing

export default EventBubbling__EventCapturing;
