'use strict';

const talkToEm = require('./lib/greet.js');
const math = require('./lib/arithmetic.js');
console.log(talkToEm.greetEm('John'));
console.log(math.add(1, 3, 5, 6, 7, 8, 8, 5, 4, 3, 3, 5));
console.log(math.subtract(1, 3, 5, 7, 7, 8, 9, 6, 5));
console.log(math.multiply(2));
console.log(math.divide(1500, 3));