// Find the common elements in the two array
let a = [1, 2, 3, 45, 6, 7]
let b = [9, 8, 3, 45, 6, 2]
let ans=a.filter(x=>b.includes(x))
console.log(ans);
