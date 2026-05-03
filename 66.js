// Remove duplicate even numbers from array(66)
let arr = [1, 2, 4, 6, 9, 7, 6, 5, 4, 32, 3, 4, 5, 6, 1];
let seen = new Set()
let ans = arr.filter((x, i) => {
    if (x % 2 == 0) {
        if (seen.has(x)) return false
        seen.add(x)
    } 
    return true
});
console.log(ans);
