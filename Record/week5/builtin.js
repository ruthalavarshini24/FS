const fs = require('fs');

fs.writeFileSync('hello.txt', 'Hello Node');

const data = fs.readFileSync('hello.txt','utf8');

console.log(data);
//builtin
const os = require('os');

console.log(os.platform());
console.log(os.arch());
console.log(os.cpus());
console.log(os.totalmem());
console.log(os.freemem());