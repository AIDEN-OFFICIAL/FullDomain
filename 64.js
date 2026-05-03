//  Print even numbers in reverse order(64)
let n = 9;

if (n % 2 !== 0) n--;

while (n >= 0) {
  console.log(n);
  n -= 2;
}
