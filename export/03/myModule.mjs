// myModule.js
const myObject = {
    name: 'John Doe',
    age: 30,
    greet: function () {
        console.log(`Hello, my name is ${this.name}`);
    }
};

export default myObject;