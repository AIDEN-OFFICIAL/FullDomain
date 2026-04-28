// Find the longest word from the array of words
let a = ["hii", "my", "name", "is", "aidencterrence"];
let ans = a.reduce((acc, curr) => {
  if (acc.length < curr.length) {
    acc = curr;
  }
  return acc;
}, "");
console.log(ans);
