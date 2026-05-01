// Out put of:
var a = 10;
(function () {
  console.log(a);
  var a = 20;
})();
// undefined 
//Even though there is a global a = 10, it is NOT used because:
// 👉 The function has its own local a (due to hoisting)
// 👉 Local scope always takes priority over global scope