// Return the value and key value pair from the objects which khas the highest string value length 
let ob = {
  key1: "aiden",
  key2: "sh_4._h4.L",
  key3: "shahal",
};
let res = {};

let l = "";
let k;
for (let key in ob) {
  if (ob[key].length > l.length) {
    l = ob[key];
    k = key;
  }
}
res[k] = l;
console.log(res);
console.log(l);

let ans = Object.values(ob).reduce((acc, curr) => {
  if (acc.length < curr.length) {
    acc = curr;
  }
  return acc;
}, "");
console.log(ans);
