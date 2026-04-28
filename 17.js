// Average of an Array
let a = [1, 2, 3, 4, 5]
let ans = a.reduce((acc, curr) => {
    acc += curr 
    return acc
},0)
console.log(ans/a.length);
