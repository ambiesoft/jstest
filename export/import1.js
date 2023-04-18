import { foo } from './global.js';

console.log(foo); // 'foo'


import something from "./global.js";

console.log("something is", something);

import lll from './global.js';

console.log("lll", lll);
console.log("lll", lll);

import { myArray } from './global.js';

myArray.push(4);
console.log(myArray); // [1, 2, 3, 4]

//myArray = [5, 6, 7];
console.log(myArray); // [5, 6, 7]


// fff = 444;