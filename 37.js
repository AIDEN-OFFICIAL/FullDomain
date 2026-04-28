// Take an object and increment 1 to all the values and display the obj
let ob = {
  key2: 2,
  key22: 22,
  key24: 24,
  key3: 3,
};
for (let key in ob) {
  ob[key] = ob[key] + 1;
}
console.log(ob);
