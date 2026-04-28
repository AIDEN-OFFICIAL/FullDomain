// Find the largest and second largest using methods and not using methods
a = [19, 34, 32, 14, 5];
db = a.map((x) => x * 2).sort((a, b) => b - a);
// let r = Math.max(...db);
console.log(`largest:${db[0]}\nsecond largest:${db[1]}`);
