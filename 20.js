// filter odd numbers from  [1 , 1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 5] and only dislay the array of repeating odd numbers
let a = [1, 1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 5];

let res = a.filter((x, ind) => {
  if (x % 2 == 1 && ind != a.lastIndexOf(x)) {
    return x;
  }
});
console.log(res);

let odd = a.filter((x) => x % 2 == 1);
// another method
let ans = odd.filter((x, ind) => {
  if (!(odd.indexOf(x) == ind)) {
    return x;
  }
});

console.log(ans);
console.log([...new Set(ans)]);
