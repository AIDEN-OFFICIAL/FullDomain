// Timer function to print 1-10 with intervals(59)
let c = 1;

let id = setInterval(() => {
  console.log(c);
  if (c === 10) {
    clearInterval(id);
  }
  c++;
}, 1000);
