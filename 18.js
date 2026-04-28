//  find the largest amoung the object and return {key:value}  

ob1 = {
  key1: 1,
  key22: 134,
  key2: 13,
  key12: 15,
  key11: 5, 
};
function chk(ob) {
  let b,a = 0;
  for (let key in ob) {
    if (ob[key] > a) {
      a = ob[key];
      b = key;
      // console.log(a + b);
    }
  }

  return { [b] : a };
}
let ans = chk(ob1);
console.log(ans);
