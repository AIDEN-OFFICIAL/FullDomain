// Take an obnject and convert the values multiplied by two and display the new obj
let ob = {
    key2: 2,
    key22: 22,
    key24: 24,
    key3: 3,
    
}
for (let key in ob) {
    ob[key]= 2*ob[key]
}
console.log(ob);
