global.name ="varshini"
console.log(name)
// program 2
global.appName = "MyApp";
// console object
console.log("Hello, World!");
console.table([{ name: "Alice", age: 25 }, { name: "Bob", age: 30 }]);
//process
console.log(" Node Version:", process.version);
console.log(" Platform:", process.platform);
console.log(process.env)
//buffer
const buf=Buffer.from("Hello World")
console.log(buf)
const buf1 = Buffer.alloc(10);
console.log(buf1);
//settimeout
console.log("step1:start")
setTimeout(() => {
  console.log("step3:Executes after 2 seconds");
}, 2000);
console.log("step2:end of script")
//dirname
console.log(__dirname)
//filename
console.log(__filename)
//set interval
let count = 1;

// Log every 1 second (1000ms)
setInterval(() => {
  console.log(`Tick count: ${count}`);
  console.log("step4:not executed")
  count++;
}, 1000);
