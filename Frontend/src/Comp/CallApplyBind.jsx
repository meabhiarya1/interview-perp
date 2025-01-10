import React from "react";

const CallApplyBind = () => {
  const name = {
    firstName: "Abhishek",
    lastName: "Kumar",
  };

  const name2 = {
    firstName: "Abhijeet",
    lastName: "Kumar",
  };

  // call
  function printFullNameCall(hometown, state) {
    console.log(this.firstName, this.lastName, hometown, state);
  }
  //Function Borrowing
  //   printFullNameCall.call(name2, "Hajipur", "Bihar");

  //Apply
  function printFullNameApply(...args) {
    console.log(this.firstName, this.lastName, args[0], args[1]);
  }
  //   printFullNameApply.apply(name2, ["Hajipur", "Bihar"]);

  //Bind
  function printFullNameBind(hometown, state, nickName) {
    console.log(this.firstName, this.lastName, hometown, state, nickName);
  }

  let printMyName = printFullNameBind.bind(name2, "Hajipur", "Bihar");
  printMyName("Bittu");

  return <div>Call Apply Bind</div>;
};

export default CallApplyBind;
