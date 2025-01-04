import React, { useEffect, useRef } from "react";

const Test = () => {
  function OuterFunc() {
    let a = 1;

    function innerFunc() {
      // let a = 2;
      // console.log(a);
      return a;
      // console.log(b);
    }

    console.log(innerFunc());

    function innerFuncTwo() {
      console.log(a);
    }
    // innerFuncTwo();
  } //Lexical Scope

  function init() {
    let name = "Mozilla";
    function displayName() {
      console.log(name);
    }
    return displayName;
  }
  // Closures
  const myFun = init();

  myFun();

  // useEffect(() => {
  //   OuterFunc();
  // }, []);



  return <div>{/* Lexical Scope */}</div>;
};

export default Test;
