const { validationResult } = require("express-validator");
const cources = require("../data/cources.js");

const getAllCources = (req, res) => {
  res.json(cources);
};


const getCourse = (req, res)=>{
        const courseId = +req.params.courseId;

    const cource = cources.find((cource) => cource.id === courseId);
        if(!cource){
            return res.status(404).json({message: "Course not found"});
        }
        res.json(cource);    
    }   

const addCourse =
     (req , res) => {
            const errors = validationResult(req);
        
            if(!errors.isEmpty()){
                return res.status(400).json({errors: errors.array()});
            }
    
    const course = { id : cources.length + 1 ,  ...req.body}
            cources.push(course );

        res.status(201).json(course);
        }

const updateCourse = (req, res) => {
        const courseId = +req.params.courseId;
        const course = cources.find((course) => course.id === courseId);

        if(!course) {
            return res.status(404).json({message: "Course not found"});
        }

        Object.assign(course, req.body);
    res.status(200).json(course);
    }

const deleteCourse = (req , res) => {
        const courseId = +req.params.courseId;
        const index = cources.findIndex((course) => course.id === courseId);

        if(index === -1) {
            return res.status(404).json({message: "Course not found"});
        }

        cources.splice(index, 1);
    res.status(200).json({message: "Course deleted successfully"});
};

module.exports = {
    getAllCources,
    getCourse ,
    addCourse,
    deleteCourse,
    updateCourse
};
