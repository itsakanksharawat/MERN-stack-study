const fs = require("fs");
const { callbackify } = require("util");
//syn call
fs.writeFileSync('./test.txt','hey');
fs.writeFile('./test.txt','hey',(err)=>{});
const result=fs.readFileSync("./contact.txt","utf-8")

console.log(result)