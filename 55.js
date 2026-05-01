 // If only number return the number array from "[{}, 56, 7, "aiden", [], NaN]"
let x = [{}, 56, 7, "aiden", [], NaN];
let ans = x.filter((n) => {
  if (typeof n === "number") {
    return n;
  }
});
console.log(ans);
