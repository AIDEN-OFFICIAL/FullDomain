//  Convert the keys of an Object into capital letters 
let ob = {
  key1: "aiden",
  key2: "sh_4._h4.L",
  key3: "shahal",
};
let ob2 = {};
for (let key in ob) {
  ob[key.toUpperCase()] = ob[key];
}
ob=ob2
console.log(ob);
