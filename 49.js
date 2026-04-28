// Given a string find the most repeated character
let a = "hii my name is aiden";
a = a.split(" ").join("");
let ob = {};
for (const key of a) {
  ob[key] = (ob[key] || 0) + 1;
}


let ans = Math.max(...Object.values(ob));
let res = Object.keys(ob).filter((x) => ob[x] === ans);
console.log(res + "=" + ans);
// let ans = Object.entries(ob).filter((x) => x[1] > 10);

// another method 
let k = 0;
let v = 0;
for (const key in ob) {
  if (ob[key] > v) {
    v = ob[key];
    k = key;
  }
}
console.log(`${k}=${v}`);