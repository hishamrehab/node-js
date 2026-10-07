    const express = require('express');
    const { body , validationResult } = require("express-validator");
    const app = express();
    app.use(express.json());

    let cources = [{
    id: 1,
    title: "Learn React",
    price: 299
} , {
    id: 2,
    title: "Learn Angular",
    price: 700
}
];

// CRUD (Create, Read, Update, Delete) operations

    // get all cources
    app.get("/api/cources" ,  
        body('title')
        .notEmpty()
        .isLength({ min: 2, max: 100 }) ,(req, res)=>{
        res.json(cources);
    })

    // get single course
    app.get("/api/cources/:courseId" , (req, res)=>{
        const courseId = +req.params.courseId;

    const cource = cources.find((cource) => cource.id === courseId);
        if(!cource){
            return res.status(404).json({message: "Course not found"});
        }
        res.json(cource);    
    })

    // create a new course
    app.post('api/cources' ,
    [
    body("title")
    .notEmpty()
    .withMessage("Title is required")
    .isLength({min: 2})
    .withMessage("Title must be at least 2 characters long"), 
    body("price")
    .notEmpty()
    .withMessage("Price is required")
    .isFloat({ min: 0 })
    .withMessage("Price must be a positive number"),
    ],
    (req , res) => {
        const errors = validationResult(req);
    
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()});
        }

        console.log("errors" , errors);
const course = { id : cources.length + 1 ,  ...req.body}
        cources.push(course );

    res.status(201).json(cources);
    })

    //  Update  a new course
    app.patch("/api/cources/:courseId" , (req, res) => {
        const courseId = +req.params.courseId; 
        let course = cources.find((course) => course.id === courseId);

        if(!course) {
            return res.status(404).json({message: "Course not found"});
        }
        
        course = {...course , ...req.body};
    res.status(200).json(course);
    })
    // Delete a course
    app.delete("/api/cources/:courseId" ,(req , res) => {
        const courseId = +req.params.courseId;
        cources = cources.filter((course) => course.id !== courseId);

        res.status(200).json({message: "Course deleted successfully"});
    });

    app.listen(4000, ()=>{
        console.log('Server is running on port 4000');
    });
