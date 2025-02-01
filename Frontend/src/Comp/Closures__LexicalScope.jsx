import React from "react";

const Closures__LexicalScope = () => {
  function outerFunction() {
    let name = "Outer";
    function innerFunction() {
      return name + " + Inner Lexical Envirnoment";
    }
    return innerFunction;
  }
  const innerFunc = outerFunction();
  console.log(innerFunc); // Output: [Function: innerFunction] and 
  // // Even though the outerFunction has returned, the innerFunction still has access to the outerFunction's variables this is called closure.
  console.log(innerFunc()); // Output: Outer + Inner Lexical Envirnoment and 
  // // Even though the innerFunction has returned, the outerFunction still has access to the innerFunction's variables this is called closure.

  return <div>Closures__LexicalScope</div>;
};

export default Closures__LexicalScope;
