import React from "react";
import _ from 'lodash';

const DeepAndShallow = () => {
  let obj = {
    name: "John",
  };

  //Shallow Copy Examples
  //let user = Object.assign({}, obj);
  let user = { ...obj };
  user.name = "Abhishek";
  //console.log(obj);
  //console.log(user);

  //Deep Copy Examples
  let obj2 = {
    name: "John",
    address: {
      city: "New York",
      state: "NY",
    },
  };

  let user2 = JSON.parse(JSON.stringify(obj2));
  user2.address.city = "Bihar";
//   console.log(obj2);
//   console.log(user2);

  let arr = [1, 2, 3, 4, 5];
  let arr2 = [...arr];
  arr2[0] = 100;
  //   console.log(arr);
  //   console.log(arr2);

  let obj3 = {
    name: "John",
    address: {
      city: "New York",
      state: "NY",
    },
    getData: function () {
      return "All Data";
    },
  };

//   let user3 = JSON.parse(JSON.stringify(obj3));

// After installing Lodash we can use _.cloneDeep

  let user3 = _.cloneDeep(obj3);

  console.log(obj3);
  console.log(user3)

  return <div>DeepAndShallow</div>;
};

export default DeepAndShallow;
