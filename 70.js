// Find palindromic substring(70)b and longest palindrome(70)
let str = "aabaacc";
let res = new Set();
let longest = "";
for (let i = 0; i < str.length; i++) {
  for (let j = i + 1; j <= str.length; j++) {
    sub = str.slice(i, j);
    if (sub == sub.split("").reverse().join("")) {
      res.add(sub);
      if (longest.length < sub.length) longest = sub;
    }
  }
}
console.log([...res]);
console.log(longest);