// find argest key value pair from the object (35) laready done
let ob = {
  key1: 2,
  key5: 5,
  key4: 4,
  key3: 3,
};
let max = -Infinity;
let k = 0;
let ans = {};
for (let key in ob) {
  if (ob[key] > max) {
    max = ob[key];
    k = key;
  }
}
ans[k] = max;
console.log(ans);
