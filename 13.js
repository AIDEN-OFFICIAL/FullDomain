let ob = {
  name: "aiden",
  age: 21,
  phone: 889140,
  details: function (a) {
    console.log(
      `hii ${this.name}, yor age is ${this.age} my fav number is ${a}`,
    );
  },
};
function hii(a) {
  console.log(
    `hii ${this.name}, yor age is ${this.age} my fav numbers are ${a.join(", ")}`,
  );
}
let ob2 = {
  name: "jesus",
  age: 33,
  phone: "god knows",
};
let cal = ob.details.call(ob2, 5);
let ar = [2, 4, 5, 6];
let ar2 = [5, 5, 5];
let app = hii.apply(ob2, [ar]);
let bin = hii.bind(ob2, [ar2]);
bin();
ob.details(5);
