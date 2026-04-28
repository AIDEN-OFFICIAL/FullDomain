// Find the two sum from an array and not use obj to track and also display result in arry of arrays
let a = [1, 2, 3, 4, 5, 6, 7];
let target = 8;
let b = []; 
let ans = a.map((x,ind) => {
  let comp = target - x;
  if (a.includes(comp)&& a.indexOf(comp)>ind) {
    b.push([x, comp]);
    console.log(`${x} + ${comp} =${target}`);
  }
});
console.log(b);
