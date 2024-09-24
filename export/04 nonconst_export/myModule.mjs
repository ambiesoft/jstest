// myModule.js
let myObject = {
    name: 'John Doe',
    age: 30,
    greet: function () {
        console.log(`Hello, my name is ${this.name}`);
    }
};

export default myObject; // letで宣言したオブジェクトをエクスポート
