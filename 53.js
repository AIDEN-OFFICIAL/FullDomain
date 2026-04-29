//create a class and make two different instance and display the result of a funciton inside the class
class a {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.fav = 55;
  }
  print() {
    console.log(
      `hii ${this.name},i know your age is ${this.age} and your fav number is ${this.fav}`
    );
  }
}
const ob = new a("aiden", 21);
const ob2 = new a("MAHESH", 20);
ob.print();
ob2.print();
