// Find the highest Odd number from an array and also display the higest of all in the array
a = [17, 24, 45, 500, 34, 2, 3, 5, 78];
let ans = a.reduce((acc, curr) => {
  if (curr > acc && curr % 2 == 1) {
    acc = curr;
  }
  return acc;
}, 0);
let max = Math.max(...a);
console.log(ans);
console.log(max);
