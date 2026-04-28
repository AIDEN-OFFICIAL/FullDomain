// Sum of multiples of 5 from an array of numbers
a = [1, 2, 30, 4, 5, 6, 10, 67, 55];
ar = a.reduce((acc, curr) => {
    if (curr % 5 == 0) {
        acc+=curr
    }
    return acc
}, 0)
console.log("sum of multiples of 5:",ar);
