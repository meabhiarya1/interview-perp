import React from "react";

const Memoization = () => {
  let sum = 0;
  const calc = (n) => {
    for (let i = 0; i <= n; i++) {
      sum += i;
    }
    return sum;
  };

//   console.time();
//   console.log(calc(5000));
//   console.timeEnd();

  const memoizedCalc = (fun) => {
    let cache = {};
    return function (...args) {
      let n = args[0];
      if (n in cache) return cache[n];
      return (cache[n] = fun(n));
    };
  };

  const memo = memoizedCalc(calc);
  console.time();
  console.log(memo(5000));
  console.timeEnd();
  
  //   const memoizedCalc = React.useMemo(() => calc, []);

  //   console.time();
  //   console.log(memoizedCalc(5));
  //   console.timeEnd();

  return <div>Memoization</div>;
};

export default Memoization;
