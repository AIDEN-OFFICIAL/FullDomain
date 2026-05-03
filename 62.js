// Print Date 15 days ago (62)

let d = new Date();
d.setDate(d.getDate() - 15);
console.log(d.toLocaleString());
console.log(d.toLocaleDateString());
console.log(d.toString());
console.log(d.toDateString());
