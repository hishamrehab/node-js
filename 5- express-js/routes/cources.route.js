const express = require('express');
const router = express.Router();

const {
    getAllCources,
    getCourse,
    addCourse,
    updateCourse,
    deleteCourse
} = require("../controllers/cources.controllers.js");
const { validationSchema } = require("../middlewares/validationSchema.js");

router.route("/")
    .get(getAllCources)
    .post(validationSchema(), addCourse);

router.route("/:courseId")
    .get(getCourse)
    .patch(updateCourse)
    .delete(deleteCourse);

module.exports = router;
