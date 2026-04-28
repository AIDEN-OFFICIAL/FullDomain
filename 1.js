// find the largest number word from the given string
let a = "my name is aiden and i am from kalamassery";
ar = a.split(" ").reduce((acc, curr) => {
  if (curr.length > acc.length) {
    acc = curr;
  }
  return acc;
}, "");
console.log("this is the largest string:" + ar);
