// Print 1 to 10 using generator function (57)

function* gen(a) {
  for (let i = 1; i <= a; i++) {
    yield i;
  }
}
const genrator = gen(10);
for (let n of genrator) {
  console.log(n);
}
