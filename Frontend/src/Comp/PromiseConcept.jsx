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


// All Type of Promises =>

//   Promise.all => All promises are resolved => If any promise reject then it returns the error
//   Promise.race => First promise will be returned either it is success or error
//   Promise.allSettled => All promises are resolved or rejected => It returns an array of error and resolved values
//   Promise.any => Resolved first promise promise will be returned => If all promises are rejected then it returns the aggregator error in an array
  
//   Note: Promise.allSettled and Promise.any are not supported in IE browser
  