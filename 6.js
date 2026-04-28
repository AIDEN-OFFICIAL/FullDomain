// Reverese the string "how are you" to "woh era uoy" using methods and not using methods
let a = "how are you";
let rev = a
  .split(" ")
  .map((x) => x.split("").reverse().join(""))
  .join(" ");
console.log(`orginal:${a}
reversed:${rev}`);
