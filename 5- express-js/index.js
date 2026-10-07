    const express = require('express');
    const app = express();
    app.use(express.json());
  
    const courcesRouter = require("./routes/cources.route.js");

    app.use("/api/cources" , courcesRouter);

    app.listen(4000, ()=>{
        console.log('Server is running on port 4000');
    });