// multiply all the values from an object and display the sum
let ob = {
  key2: 2,
  key22: 2,
  key24: 2,
  key3: 2,
};
let p = 1;
for (let key in ob) {
  p *= ob[key];
}

console.log(p);
