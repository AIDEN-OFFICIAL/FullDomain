// Take this word "diya williams" and convert to "Diya Williams"
let str = "anakha santhosh";
str = str.split(" ");
let ans = [];

for (let i = 0; i < str.length; i++) {
  word = str[i];
  words = word[0].toUpperCase() + word.slice(1);
  ans.push(words);
}
console.log(ans.join(" "));
