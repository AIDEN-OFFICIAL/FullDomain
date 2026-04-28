// Display array without vowels
let a = "my vowels are checked";
const vow = ["a", "e", "i", "o", "u"];
a = a.split(" ").join("").split("");
let res = a.filter((x) =>!vow.includes(x));
console.log(res);
