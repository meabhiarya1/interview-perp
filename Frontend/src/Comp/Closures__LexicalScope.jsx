import React from "react";

const Closures__LexicalScope = () => {
  function outerFunction() {
    let name = "Outer";
    function innerFunction() {
      console.log(name + " + Inner Lexical Envirnoment");
    }
    return innerFunction;
  }
  const innerFunc = outerFunction();
  innerFunc();

  return <div>Closures__LexicalScope</div>;
};

export default Closures__LexicalScope;
