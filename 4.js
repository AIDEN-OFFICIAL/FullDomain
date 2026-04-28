// Array destructuring
let arr = [1, 2, 3, 4];
let [a, b, c, d] = arr;
console.log(a, b, c);

let arr2 = {
  name: "aiden",
  initail: "c terrence",
  phone: 8891,
};
let { name, initail, phone:ai } = arr2;
console.log(name, initail, ai);
