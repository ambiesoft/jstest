import myObject from './myModule.mjs';

console.log(myObject.name); // 'John Doe'
console.log(myObject.age);  // 30

myObject.greet(); // 'Hello, my name is John Doe'

myObject.age = 31;
console.log(myObject.age); // 31