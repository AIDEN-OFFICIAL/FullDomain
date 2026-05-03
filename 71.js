// Find the longest common prefix ["flower", "flow", "flight"]
let ar = ["flower", "flow", "flight"];
let start = ar[0];
let pref = start[0];
// console.log(start,pref)
for (let i = 1; i < start.length; i++) {
  let curr = start.slice(0, i);
  if (ar.every((x) => x.startsWith(curr))) {
    pref = curr;
  } else {
      break;
  }
}
console.log(pref);
