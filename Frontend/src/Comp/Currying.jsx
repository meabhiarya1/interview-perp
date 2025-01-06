import React from "react";

const Currying = () => {
  // Example Questions on Currying

  // Question 1 - sum(2)(3)(6)
  function sum(a) {
    return function (b) {
      return function (c) {
        return a + b + c;
      };
    };
  }
  //   console.log(sum(2)(3)(6));

  //Question 2 -
  /* evaluate("sum")(4)(2) => 6
    evaluate("sub")(4)(2) => 2
    evaluate("mul")(4)(2) => 8
    evaluate("div")(4)(2) => 2
  */
  function evaluate(operation) {
    return function (a) {
      return function (b) {
        if (operation === "sum") return a + b;
        if (operation === "sub") return a - b;
        if (operation === "mul") return a * b;
        if (operation === "div") return a / b;
      };
    };
  }
  //   console.log(evaluate("mul")(4)(2));
  //   const mul = evaluate("mul")
  //   console.log(mul(4)(2))

  //Question 3 -
  function sumInfinite(a) {
    return function (b) {
      if (b) return sumInfinite(a + b);
      return a;
    };
  }
  //   console.log(sumInfinite(1)(2)(3)(4)(5)());

  // Currying vs Partial Application
  // Question 4 -

  function sumPartial(a) {
    return function (b, c) {
      return a + b + c;
    };
  }
  //   console.log(sumPartial(1)(2, 3));  //Partial Application Example

  // Question 4 -
  //Real Life Example
  function UpdateName(firstName) {
    return function (lastname) {
      return firstName + lastname;
    };
  }

  const updateData = UpdateName("John");

  return <div>{updateData("_kumar")}</div>;
};

export default Currying;
