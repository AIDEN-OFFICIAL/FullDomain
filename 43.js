// sort objects according to the values
let ob = {
  key2: 2,
  wey22: 23,
  ley24: 25,
  gey3: 12,
};

let ans = Object.entries(ob).sort((a, b) => a[1] - b[1]);
ob = Object.fromEntries(ans);
console.log(ob);
