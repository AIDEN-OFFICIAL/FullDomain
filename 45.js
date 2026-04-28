// Sort an array 
let a = [1, 4, 6, 28, 39, 40, 2];
let temp = 0;
for (let i = 0; i < a.length; i++) {
  for (let j = i + 1; j < a.length; j++) {
    if (a[i] > a[j]) {
      temp = a[i];
      a[i] = a[j];
      a[j] = temp;
    }
  }
}
console.log(a);
