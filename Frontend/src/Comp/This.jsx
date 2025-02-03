import React from "react";

function This() {
  console.log(this); // In strict mode, this will be undefined
  return <div>this</div>;
}

export default This;
