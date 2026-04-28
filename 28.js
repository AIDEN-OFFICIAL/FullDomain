// add two array
let a = [1, 2, 3, 4];
let b = [10, 10, 10, 10];


let c = [];
if (a.length === b.length) {
  for (let i = 0; i < a.length; i++) {
    c.push(a[i] + b[i]);
  }
  console.log(`array1:${a}\narray2:${b}\nresult array:${c}`);
}
