// Find longest word/second longest word in sentence(68)
let str = "this is a word to check he longest and second large";
let l = "";
let s = "";
str.split(" ").forEach((x) => {
  if (x.length > l.length) {
    s = l;
    l = x;
    }else if(x.length>s.length)s=x
});
console.log("largest:", l);
console.log("sec largest:", s);
