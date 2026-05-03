// reverse a string using recursion and not use any methods(73)
function reverse(str, i = str.length - 1) {
  if (i < 0) return "";
  return str[i] + reverse(str, (i = i - 1));
}
console.log(reverse(str));
