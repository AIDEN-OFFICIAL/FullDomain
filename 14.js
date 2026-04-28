// find the duplicate letters
// let a = "hh hmy nae is aidy";
// let result = a.split(" ").join("").split("");
// let ob = {};
// for (const key of result) {
//   ob[key] = (ob[key] || 0) + 1;
// }
// console.log(ob);
// // console.log("the duplicate letters are:");

// for (const key in ob) {
//   if (ob[key] > 1) {
//     console.log(key);
//   }
// }



let a = "hh my nae is aidy";
let res = a.split(" ").join("").split("");
let dup = [];
for (let i = 0; i < res.length; i++) {
  let count = 0;
  for (let j = i + 1; j < res.length; j++) {
    if (res[j] != 0 && res[i] == res[j]) {
      res[j] = 0;
      count++;
    }
  }
  if (count > 0) {
    dup.push(res[i]);
    res[i] = 0;
  }
}

console.log(dup);
