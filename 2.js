// Find vowels used from the string and store in an array
let string = "welcome to javascript";
let vow = ['a', 'e', 'i', 'o', 'u'];
newstring = string.split(" ").join("").split("").filter((x) => {
    if (vow.includes(x)) { 
        return x; 
    }
}) 
console.log(newstring);
