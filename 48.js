// create a nested object with a method, change the nested value, convert the array elements into multiples of 2, rename a key, call the method
ob = {
  name: "aiden",
  phone: 89983,
  fun: function (a) {
    console.log("this is a function and the name is " + this.name);
  },
  university: {
    mgu: "kmm",
  },
  favnum: [1, 3, 5, 7],
};
console.log(JSON.stringify(ob));
ob.name = "rocky";
ob.university.mgu = "BMC";
ob.favnum = ob.favnum.map((x) => x * 2);
ob.place = "kalamasserry";
delete ob.phone;
//rename
ob.loc = ob.place;
delete ob.place;

ob.fun();
console.log(ob);
