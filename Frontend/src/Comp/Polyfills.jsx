import React from "react";

const Polyfills = () => {
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // Design a polyfill for the Array.prototype.map method as like map method.
  Array.prototype.myMap = function (callback) {
    let temp = [];

    for (let i = 0; i < this.length; i++) {
      temp.push(callback(this[i], i, this));
    }

    return temp;
  };
  const newArray = nums.myMap((num, index, array) => num * 3);
  // console.log(newArray);

  // Design a polyfill for the Array.prototype.filter method as like filter method.
  Array.prototype.myFilter = function (callback) {
    let temp = [];

    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        temp.push(this[i]);
      }
    }
    return temp;
  };

  const newFilterArray = nums.myFilter((num, index, array) => num % 2 === 0);
  // console.log(newFilterArray);

  // Design a polyfill for the Array.prototype.reduce method as like reduce method.
  Array.prototype.myReduce = function (callback, initialValue) {
    let acc = initialValue ? initialValue : this[0];
    for (let i = 0; i < this.length; i++) {
      acc = callback(acc, this[i], i, this);
    }
    return acc;
  };
  const sumReducedValue = nums.myReduce((acc, num, index, arr) => {
    return acc + num;
  }, 0);
  // console.log(sumReducedValue);

  // Design a polyfill for the Function.prototype.call method as like call method.
  let car1 = {
    color: "Red",
    company: "Ferrari",
  };

  function purchaseCar(currency, price) {
    console.log(
      `I have purchased ${this.color}, ${this.company} car for ${currency} ${price}`
    );
  }

  // purchaseCar.call(car1, "$", "50000");
  Function.prototype.myCall = function (context = {}, ...args) {
    if (typeof this !== "function") {
      throw new Error(this + "It's not Callable");
    }
    context.fn = this;
    context.fn(...args);
  };
  // purchaseCar.myCall(car1, "$", "50000");

  // Design a polyfill for the Function.prototype.apply method as like apply method.

  Function.prototype.myApply = function (context = {}, args = []) {
    if (typeof this !== "function") {
      throw new Error(this + "It's not Callable");
    }
    if (!Array.isArray(args)) {
      throw new Error(this + "It's not Array");
    }

    context.fn = this;
    context.fn(...args);
  };
  purchaseCar.myApply(car1, ["$", 500000]);

  return <div>Polyfills</div>;
};

export default Polyfills;