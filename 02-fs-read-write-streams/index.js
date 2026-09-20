const fs = require('node:fs');



// read file

const fileContent = fs.readFileSync("./hello.txt" , "utf8");

console.log("FileContent ==>", fileContent);

console.log("first read file");

fs.readFile("./hello.txt" , "utf8" , (err , data) => {
    if(err) {
        console.error("Error reading file:", err);
    } else {
        console.log("FileContent ==>", data);
    }
});

console.log("second read file");

// create file 

// write file

fs.writeFile("./users.json" , JSON.stringify(
    [{
    id: 1 , title: "Node.js" , author: "John Doe"
   }]) , 'utf8', (err) => {
    if(err) {
        console.log("Error writing file:", err);
    } 
    console.log("Done");
}); 


// delete file

fs.unlink('./users.json', (err) => {
 if(err) {
      console.log("File deleted successfully" , err);
 } 
});



// Streams [readable - writable]

const rStream = fs.createReadStream("./hello.txt" , "utf8");
const wStream = fs.createWriteStream("./stream.txt" , "utf8");

rStream.on('data' , (chunk) => {
    console.log("===============data==========" , chunk);
    wStream.write(chunk);
});



const _ = require('lodash');

  