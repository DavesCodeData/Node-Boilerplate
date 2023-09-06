//store all student routes 
const {Router} = require('express');
const controller = require('./controller');//import the exported route from controller

const router = Router();

//create router object
router.get('/students', controller.getStudents);//getStudent is a call back that is handeld in the controller for req, res passed as parameters
//when we hit this we query our db and get the json response with 
//students and send it back to the client who is pinging us
//export router object so it can be imported to server.js
router.get("/:studentid", controller.getStudentById);///:is only for the route to type in /number to pick individual students
router.post("/", controller.addstudent);
router.delete("/:studentid", controller.removeStudent);
router.put("/:studentid", controller.updateStudent);
//for signup
router.post('/register', controller.registerUser);
router.post('/login', controller.loginUser);

//added on 8-28-23
//app.use('/api', dataRoutes);
router.post('/api/save-data', controller.sendContactInfo);

module.exports = router;