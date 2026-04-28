// Convert an object into an array without using Object.values
let ob = {
  key2: 2,
  key22: 2,
  key24: 2,
  key3: 2,
};

console.log(Object.values(ob));

let p = [];
for (let key in ob) {
  p.push(ob[key]);
}

console.log(p);
