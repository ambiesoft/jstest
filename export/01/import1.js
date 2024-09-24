import { foo } from './global.js';
console.log(foo); // 'foo'

import { foo as aaa } from './global.js';
console.log(aaa); // 'foo'

import something from "./global.js";
console.log("something is", something); // 'something is 123'

import lll from './global.js';
console.log("lll", lll); // 'lll 123'

import { myArray } from './global.js';
myArray.push(4);
console.log(myArray); // [1, 2, 3, 4]

