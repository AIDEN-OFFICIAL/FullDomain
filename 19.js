// display the object containing letter of the word and the count of the letter 
let a = "hello";
let ob = {};
for (const key of a) {
  ob[key] = (ob[key] || 0) + 1;
}
console.log(ob);

