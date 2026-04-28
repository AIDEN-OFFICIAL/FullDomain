// Create an object from a object where the keys are values and values are keys
let ob = { key1: "aiden", key2: "akhil" };
let ob2 = {};
for (let key in ob) {
  ob2[ob[key]] = key;
}
console.log(ob);
console.log(ob2);
