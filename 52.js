// MERN interview questions (youtube)
if ([] == true) {
  console.log(true);
} else {
  console.log(false);
}
//false becasue here the [] is an empty object so its value is 0 and value of true is 1  so 0!=1
console.log([] + [] == []);
// here []+[] coerced into ""+"" which is 0+0=0 and its equal to empty object value 0

let abc = 123;
if (function f() {}) {
  abc += typeof f;
}
console.log(abc);
//heree the if statement condition is true but because of the function block scope the output is 123 undefined

// infinte currying of 10 numbers
function sum(a) {
  return function next(b) {
    if (b !== undefined) {
      return sum(a + b);
    } else {
      return a;
    }
  };
}
console.log(sum(1)(2)(3)(4)(5)(6)(7)(8)(9)(10)());

// to compare two arrays we can also use 
let a=[1,2,3,4]
let b=[1,2,3,4]
console.log(JSON.stringify(a) == JSON.stringify(b))

console.log(null == undefined)
console.log(typeof NaN)//number
console.log(typeof undefined)//undefined
console.log([,,,,].length)//4