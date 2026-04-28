// Find sum of the odd numbers from a given array
a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
ans = a.reduce((acc, curr) => {
    if (curr%2==1) {
        acc+=curr
    }
    return acc
}, 0)
console.log(`sum of  the odd numbers:${ans}`);
