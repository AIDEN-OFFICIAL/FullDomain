// convert the array into square for even numbers and cube for odd numbers
let a = [1, 2, 3, 4, 5, 6]
let res = a.map((x) => {
    if (x % 2 == 0) {
        return x*x
    }
    else {
        return x*x*x
    }
})
console.log(res);
