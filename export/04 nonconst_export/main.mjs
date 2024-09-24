import myObject from './myModule.mjs'; // myObjectをインポート

// プロパティの使用
console.log(myObject.name); // 'John Doe'
console.log(myObject.age);  // 30

// メソッドの呼び出し
myObject.greet(); // 'Hello, my name is John Doe'

// プロパティの変更
myObject.age = 31;
console.log(myObject.age); // 31