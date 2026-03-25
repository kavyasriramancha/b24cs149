const math = require('./calculator.js'); 
const sum = math.add(20, 10); 
const diff = math.subtract(20, 10) 
console.log("--- CommonJS Module Results ---"); 
console.log(`Value of PI: ${math.constantPI}`); 
console.log(`20 + 10 = ${sum}`); 
console.log(`20 - 10 = ${diff}`);