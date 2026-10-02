const crypto = require("node:crypto");

const {
  pbkdf2,
} = require('node:crypto');


console.log("first");
 
// const fileContent = fs.readFileSync("./hello.txt" , "utf-8");
// console.log("fileContent ->" , fileContent);


// const fileContent = fs.readFile("./hello.txt" , "utf-8" , (err,  data) => {
//  console.log("fileContent -->" , data );
// }); 


//  const start = performance.now();


// crypto.pbkdf2Sync('secret', 'salt', 100000, 64, 'sha512' );
// console.log("End of PBKDF2 ms" , performance.now() - start);

// crypto.pbkdf2Sync('secret', 'salt', 100000, 64, 'sha512' );
// console.log("End of PBKDF2 ms" , performance.now() - start);

// crypto.pbkdf2Sync('secret', 'salt', 100000, 64, 'sha512' );
// console.log("End of PBKDF2 ms" , performance.now() - start);

// crypto.pbkdf2Sync('secret', 'salt', 100000, 64, 'sha512', () => {
//     console.log("End of PBKDF2 ms" , performance.now() - start);
// } );

// crypto.pbkdf2Sync('secret', 'salt', 100000, 64, 'sha512', () => {
//     console.log("End of PBKDF2 ms" , performance.now() - start);
// } );


// console.log("second");

// console.log("fileContent ->" , fileContent);



// fetch('https://dummyjson.com/products')
//   .then(console.log("End of Request ms" , performance.now() - start))

//   fetch('https://dummyjson.com/products')
//   .then(console.log("End of Request ms" , performance.now() - start))

//   fetch('https://dummyjson.com/products')
//   .then(console.log("End of Request ms" , performance.now() - start))



//   fetch('https://dummyjson.com/products')
//   .then(console.log("End of Request ms" , performance.now() - start))


//   crypto.pbkdf2Sync('secret', 'salt', 100000, 64, 'sha512' );
//   console.log("End of PBKDF2 ms" , performance.now() - start);


//   crypto.pbkdf2Sync('secret', 'salt', 100000 , 64, 'sha512' , () => {

//   });

//   setTimeout(() => {
//     console.log("End of PBKDF2 ms" , performance.now() - start);
//   } , 100);



const http = require("node:http");

  const server = http.createServer((req , res) => {
    console.log("Request" , req.url);
    if(req.url === "/") {
      res.end("Home Page");
    } else if(req.url === "/about") {
      res.end("About Page");
    }else { 
      res.end("Not Found Page");
    } 
  }
  )  


  server.listen(3001 , () => {
    console.log("listening on port 3001");
  } );