// Generate infinite odd numbers with 1s interval (58)
// let c = 1;
// setInterval(() => {
//   console.log(c);
//   c += 2;
// }, 1000);

// using generator function
function* oddgen() {
  let i = 1;
  while (true) {
    yield i;
    i += 2;
  }
}
const gen = oddgen();
setInterval(() => {
  console.log(gen.next().value);
}, 1000);
