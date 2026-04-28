// Join two objects both has some similar values and keys , join them into the first one 
let ob1 = { a: 1, b: 2, c: 4 };
let ob2 = { b: 3, d: 4, a: 5 };
for (let key in ob2) {
  ob1[key] = ob2[key];
}
console.log(ob1);
