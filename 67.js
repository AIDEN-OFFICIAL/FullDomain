//  Remove duplicates from string(67)
let str = 'thiscontainsduplicates'
let seen = new Set()
let ans = str.split('').filter((x) => {
    if (seen.has(x)) return false
    seen.add(x)
    return true
}).join('')
console.log(ans)
// or
// let ans = [...new Set(str)].join('');
