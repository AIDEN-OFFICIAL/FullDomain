// from the object find the highest value and also find the {key: value}
let ob = {
  key1: 190,
  key2: 193,
  key3: 192,
  key4: 194,
  key12: 139,
};
let high = Math.max(...Object.values(ob));
console.log(high);

function ans() {
  for (let key in ob) {
    if (ob[key] === high) {
      return { [key]: high };
    }
  }
}
console.log(ans());
