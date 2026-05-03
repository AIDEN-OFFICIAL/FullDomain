// Find non-repeating elements from array(65)
let arr = [1, 2, 4, 6, 9, 7, 6, 5, 4, 32, 3, 4, 5, 6, 1];
let unique = arr.filter((x) => arr.indexOf(x) == arr.lastIndexOf(x));
console.log(unique);
