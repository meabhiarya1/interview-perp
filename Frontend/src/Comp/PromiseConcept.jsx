import React from "react";

const PromiseConcept = () => {
  const P1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise 1 is resolved");
      // reject("Promise 1 is ERR");
    }, 3000);
  });

  const P2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve("Promise 2 is resolved");
      reject("Promise 2 is ERR");
    }, 2000);
  });

  const P3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise 3 is resolved");
      // reject("Promise 3 is ERR");
    }, 5000);
  });

  // Promise All
  Promise.all([P1, P2, P3])
    .then((values) => {
      console.log(values);
    })
    .catch((error) => {
      console.log(error);
    });

  // Promise allSettled
  Promise.allSettled([P1, P2, P3])
    .then((values) => {
      console.log(values);
    })
    .catch((error) => {
      console.log(error);
    });

  // Promise Race
  Promise.race([P1, P2, P3])
    .then((values) => {
      console.log(values);
    })
    .catch((error) => {
      console.log(error);
    });

  // Promise Any
  Promise.any([P1, P2, P3])
    .then((values) => {
      console.log(values);
    })
    .catch((error) => {
      console.log(error);
    });

  return <div>Promises</div>;
};

export default PromiseConcept;
