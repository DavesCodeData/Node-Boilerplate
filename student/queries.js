//store sql queries to use on db
const getStudents = "SELECT * FROM students";//the query to use
const getStudentById = "SELECT * FROM students WHERE studentid = $1";//$1 is our parameter, variable name
const checkEmailExists = "SELECT s FROM  students s WHERE s.email = $1";
const addstudent = 
    "INSERT INTO students (studentid, studentname, email, gender, classname, address, classnumber) VALUES ($1, $2, $3, $4, $5, $6, $7)";
const removeStudent = "DELETE FROM students WHERE studentid = $1";
const updateStudent = "UPDATE students SET studentname = $1 WHERE studentid = $2";

// queries for signup
const createUser = 'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id';
const findUser = 'SELECT id FROM users WHERE username = $1 AND password = $2';

//added 8-28-23
const sendContactInfo = 'INSERT INTO users (name, email, message) VALUES ($1, $2, $3)';

module.exports = {
    getStudents,//object getStudents query
    getStudentById,//export
    checkEmailExists,//expost sql command
    addstudent,
    removeStudent,
    updateStudent,
    createUser,
    findUser,
    sendContactInfo
};