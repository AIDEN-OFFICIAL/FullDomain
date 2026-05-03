//  Convert first character to uppercase(71)
let str = "my name is aiden";
let ar = str.split(" ");
for (let i = 0; i < ar.length; i++) {
  ar[i] = ar[i].slice(0, 1).toUpperCase() + ar[i].slice(1);
}
console.log(ar.join(" "));

