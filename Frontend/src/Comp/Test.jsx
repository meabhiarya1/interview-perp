import React, { useEffect, useRef } from "react";

const Test = () => {
  const handleClick = (child) => {
    console.log(child);
  };

  const inputRef = useRef(null);


  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    // <div>
    //   <div
    //     className="border-2 border-black rounded-xl  w-1/2 bg-black text-white cursor-pointer"
    //     onClick={(e) => {
    //       handleClick("parent");
    //     }}
    //   >
    //     {" "}
    //     {/* Parent */}
    //     <div
    //       className="border-2 border-black rounded-xl   bg-purple-600 text-white cursor-pointer"
    //       onClick={(e) => {
    //         handleClick("child 2");
    //       }}
    //     >
    //       {" "}
    //       {/* Child 2 */}
    //       <div
    //         className="border-2 border-black rounded-xl   bg-green-600 text-white cursor-pointer"
    //         onClick={(e) => {
    //           handleClick("child 3");
    //         }}
    //       >
    //         Child 3
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="border-2 border-black rounded-xl  w-1/2 bg-black cursor-pointer">
      <input type="text" ref={inputRef} defaultValue={"hello"} />
    </div>
  );
};

export default Test;
