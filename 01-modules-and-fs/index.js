// const os = require("node:os");
// console.log(os.arch());
// console.log(os.platform());
// console.log(os.release());
// console.log(os.version());
// console.log(os.homedir());
// console.log(os.tmpdir());
// console.log(os.type());
// console.log(os.userInfo());
// console.log(os.cpus());
// console.log(os.freemem());
// console.log(os.totalmem());

console.log("this is logger file");

const fs = require("node:fs");
const fileContent = fs.readFileSync("./hello.txt", "utf-8");
console.log("fileContent" , fileContent);


const logger = require("./logger");
const logger1 = require("./logger");
const logger2 = require("./logger");
const logger3 = require("./logger");
const logger4 = require("./logger");

console.log(require.cache);

// fs.writeFileSync("./hello.txt", "Hello World");
// const fileData = fs.readFileSync("./hello.txt", "utf-8");

// console.log(fileData);

logger.log("test");


console.log(__dirname);
console.log(__filename);



const http = require("node:http");
const crypto = require("node:crypto");