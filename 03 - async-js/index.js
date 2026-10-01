const crypto = require("node:crypto");

const {
  pbkdf2,
} = require('node:crypto');


console.log("first");
 
// const fileContent = fs.readFileSync("./hello.txt" , "utf-8");
// console.log("fileContent ->" , fileContent);


const fileContent = fs.readFile("./hello.txt" , "utf-8" , (err,  data) => {
 console.log("fileContent -->" , data );
}); 


 const start = performance.now();


crypto.pbkdf2Sync('secret', 'salt', 100000, 64, 'sha512' );
console.log("End of PBKDF2 ms" , performance.now() - start);

crypto.pbkdf2Sync('secret', 'salt', 100000, 64, 'sha512' );
console.log("End of PBKDF2 ms" , performance.now() - start);

crypto.pbkdf2Sync('secret', 'salt', 100000, 64, 'sha512' );
console.log("End of PBKDF2 ms" , performance.now() - start);

crypto.pbkdf2Sync('secret', 'salt', 100000, 64, 'sha512', () => {
    console.log("End of PBKDF2 ms" , performance.now() - start);
} );


console.log("second");

console.log("fileContent ->" , fileContent);
