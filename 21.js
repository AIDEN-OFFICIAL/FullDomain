// 
let a = [1, 2, 2, 3, 4, 4, 5];
let ans = a.filter((x, ind) => {
  if (a.indexOf(x) == ind) {
    return x;
  }
});

console.log(ans);
console.log([...new Set(ans)]);

// to find the secondLargest with or without sort

function sec(a) {
  let d,
    c = a[0];
  for (let i = 1; i < a.length; i++) {
    if (c < a[i]) {
      d = c;
      c = a[i];
    }
  }
  console.log(d);
}
sec(a);

// another
let sor = a.sort((a, b) => b - a);
console.log(sor[1]);
