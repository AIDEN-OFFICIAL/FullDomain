// From [1, 2, 3, 4, 2, 2, 3, 4, 1, 1, 1, 3, 4, 2] give [ [ '1', 4 ], [ '2', 4 ], [ '3', 3 ], [ '4', 3 ] ]
let a = [1, 2, 3, 4, 2, 2, 3, 4, 1, 1, 1, 3, 4, 2];
let ob = {};
let count = 0;
a.map((x) => {
ob[x] = (ob[x] || 0) + 1;
});
console.log(Object.entries(ob));
