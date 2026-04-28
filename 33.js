// Separate only string valued keys and values from the object and form a new object 
let ob = { name: "diyaa", a: 1, b: 23, c: "aiden" };
let newob = {};
// ob = Object.entries(ob);
let ans = function a() {
  for (let key in ob) {
    if (typeof ob[key] === "string") {
      newob[key] = ob[key];
    }
  }
};
ans();
console.log(newob);
