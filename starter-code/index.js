'use strict';

const talkToEm = require('./lib/greet.js');
const math = require('./lib/arithmetic.js');
console.log(talkToEm.greetEm('John'));
console.log(math.add(1,3)); // 4
console.log(math.subtract(1,3)); // -2
console.log(math.multiply(2))
console.log(math.divide(1500,3))