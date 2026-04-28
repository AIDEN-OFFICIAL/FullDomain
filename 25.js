// write three different methods to convert a words first letter into upper case 
let str = "aiden";
let ans = str.split("");
ans.splice(0, 1, ans[0].toUpperCase());
console.log(ans.join(""));

let res = str.charAt(0).toUpperCase() + str.slice(1);
console.log(res);


let c = ans.splice(0, 1).join("");
c = c.toUpperCase();
ans.unshift(c);
console.log(ans.join(""));
