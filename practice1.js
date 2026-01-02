console.log("first");
const fs = require('fs');
 let a = 10;
 let b = 5;
 let sum = a + b;
 let data = `sum: ${sum}`;
 fs.writeFileSync('result.txt', data);
console.log(data);
 
 

