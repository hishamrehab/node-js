    const http = require('http');
    const fs = require('fs');
    const path = require('path');

   const homePage =  fs.readFileSync(path.join(__dirname, "views", "index.html"), "utf-8");
   const cssFile = fs.readFileSync("./views/styles.css", "utf-8");


    const server = http.createServer((request, response) => {
    console.log("Request URL: " + request.url);
    console.log("Request Method: " + request.method);
    console.log("Request Headers: " + JSON.stringify(request.headers));

    response.setHeader("Content-Type", "text/html");

     if(request.url === "/") {
        response.statusCode = 200;
        response.write(homePage);``
    } else if (request.url === "/about") {
        response.statusCode = 200;
        response.write("<h1>Welcome to the About Page</h1>");
    }else if (request.url === "/styles.css") {``
           response.write(cssFile);
    }
    
    else {
        response.statusCode = 404;
        response.write("<h1>404 Not Found</h1>");
    }

    response.end();
    });

    server.listen(5000, 'localhost', () => {
        console.log('Server is listening on port: 5000');
    });