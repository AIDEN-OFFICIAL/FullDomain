//  Tomorrow's date in DD-MM-YYYY format(63)
let d = new Date();
d.setDate(d.getDate() + 1);
let day = String(d.getDay()).padStart(2, 0);

let year = d.getFullYear();
let month = String(d.getMonth()).padStart(2, 0);
console.log(`${day}-${month}-${year}`);
