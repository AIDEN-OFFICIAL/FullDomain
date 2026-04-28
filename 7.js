// Demonstarte seal and freeze 
const obj = {
    name: 'Alice',
    age: 25
  };
  
  Object.seal(obj);
  
  obj.age = 26;  // Allowed: you can modify existing properties
  obj.gender = 'female';  // Not allowed: you can't add new properties
  delete obj.name;  // Not allowed: you can't delete properties
  
  console.log(obj);  // Outputs: { name: 'Alice', age: 26 }
  
//freeze prevents modification,adding and removal
const obj2 = {
    name: 'Aiden',
    age: 25
  };
  
  Object.freeze(obj2);
  
  obj2.age = 21;  // Not allowed: you can't modify existing properties
  obj2.gender = 'male';  // Not allowed: you can't add new properties
  delete obj2.name;  // Not allowed: you can't delete properties
  console.log(obj2);  // Outputs: { name: 'Alice', age: 25 }
    
