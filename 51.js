// Implement currying for 3 argument function and  return the multiplied answer
let ans = (a) => (b) => (c) => a + b + c;


console.log(sum(1)(2)(3)());
//or
let res = function (a) {
  return function (b) {
    return function (c) {
      return a * b * c;
    };
  };
};
console.log(res(2)(3)(5));
