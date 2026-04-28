// From an array find the unique array and remove all duplicates
let a = [1, 1, 1, 2, 2, 3, 4, 45, 45, 4, 6, 3];
unar = [...new Set(a)]
// let track = {};
// let unar = a.filter((x) => {
//   if (!track[x]) {
//     track[x] = true;
//     return x;
//   }
// });
console.log(`the old array:${a}\n the unique array is:${unar}`);
