//  Print current time without date (61)
let time = new Date().toLocaleTimeString();
let d = new Date().toTimeString();
let e = new Date();
let f = new Date().toLocaleTimeString(
  {},
  { hour: "2-digit", minute: "2-digit", second: "2-digit" },
);

console.log(d);
console.log(time);
console.log(`${e.getHours()}:${e.getMinutes()} `);
console.log(f);
