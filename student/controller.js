//business logic related to each route
const pool = require('../../db');
const queries = require('./queries'); //seperating the queries from business logic

// //added 8-28-23
// const sendContactInfo = (req, res) => {
//     // Handle data insertion into the PostgreSQL database
//     // db.saveData(req.body);
  
//     res.json({ message: 'Data saved successfully' });
// };

//added8-28-23
async function sendContactInfo(req, res, next) {
    try {
      const data = req.body;
      const sendContactInfo = await dataQueries.sendContactInfo(data);
      res.json(sendContactInfo);
    } catch (error) {
      next(error);
    }
  }

const getStudents = (req, res) => {
    pool.query(queries.getStudents, (error, results) => {//use this pool to query the db, the query function takes two parameters
        if (error) throw error;
        res.status(200).json(results.rows);//using function status to continue
    });
};

const getStudentById = (req, res) => {
    const studentid = parseInt(req.params.studentid);
    pool.query(queries.getStudentById, [studentid], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const addstudent = (req, res) => {
    //javascript destructuring
    const {studentid, studentname, email, gender, classname, address, classnumber} = req.body;
    //check if email exists, variable we are passing in [email] 
    pool.query(queries.checkEmailExists, [email], (error, results) => {//using query method, for email validation
        //if there is an array with something in it
        if (results.rows.length) {
            res.send("Email already exists.");
        }
        //add student to db
        pool.query(queries.addstudent, [studentid, studentname, email, gender, classname, address, classnumber], (error, results) => {
            if (error) throw error;
            res.status(201).send("Student created successfully!");//status 201 is creation was a success
            //console.log("Student created")//log for creation not needed
            }
        );
    });
};


const removeStudent = (req, res) => {
    const studentid = parseInt(req.params.studentid);

    pool.query(queries.getStudentById, [studentid], (error, results) => {//logic for if delete by studentid that does not exist
        const noStudentFound = !results.rows.length;//if the length of the result is 0 then no studentid was found
        if (noStudentFound) {
            res.send("Student does not exist.");
        }
        pool.query(queries.removeStudent, [studentid], (error, results) => {
            if (error) throw error;
            res.status(200).send("Student removed successfully.");
        });
    });
};

const updateStudent = (req, res) => {
    const studentid = parseInt(req.params.studentid);
    const {studentname} = req.body;

    pool.query(queries.getStudentById, [studentid], (error, results) =>{
        const noStudentFound = !results.rows.length;//if the length of the result is 0 then no studentid was found
        if (noStudentFound) {
            res.send("Student name does not exist.");
        }
        pool.query(queries.updateStudent, [studentname, studentid], (error, results) => {
            if (error) throw error;
            res.status(200).send("Student updated successfully.")
        });
    });
};

//const { createUser, findUser } = require('../queries/authQueries');
//might have to change const to export for the two methods below
//for signup 
const registerUser = async (req, res) => {
    const { username, password } = req.body;
    try {
      const result = await db.query(createUser, [username, password]);
      const insertedId = result.rows[0].id;
      res.json({ id: insertedId });
    } catch (error) {
      console.error('Error during user registration:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  
  const loginUser = async (req, res) => {
    const { username, password } = req.body;
    try {
      const result = await db.query(findUser, [username, password]);
      if (result.rows.length === 1) {
        res.json({ success: true });
      } else {
        res.json({ success: false });
      }
    } catch (error) {
      console.error('Error during user login:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };

//we need to export these as objects becasue we will have multiple exports
module.exports = {
    getStudents,//method on object
    getStudentById,
    addstudent,
    removeStudent,
    updateStudent,
    registerUser,
    loginUser,
    sendContactInfo

};