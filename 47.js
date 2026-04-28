//largest repeated number
let a = [34, 42, 42, 2, 3, 4, 52, 1, 1, 1, 52];
a.sort((a, b) => b - a);
function ans() {
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length; j++) {
      if (a[i] == a[j] && i != j) {
        return a[i];
      }
    }
  }
}
// another method 
function lar() {
  let l = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] > l && i != a.lastIndexOf(a[i])) {
      l = a[i];
    }
  }
  return l;
}

console.log(lar());
console.log(ans());
