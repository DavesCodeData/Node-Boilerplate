const express = require('express');
const studentRoutes = require('./src/student/routes');//import the exported router object

//new route added 8-28-23
const contactroutes = require('./src/student/contactroutes');
const app = express();
const port = 3001;

const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());//added8-25-23
app.use(bodyParser.json());

//middle ware
app.use(express.json());//allows us to post and get json from our end points 

app.use(express.static("frontend"));//frontend to display website

app.use("/students", studentRoutes);//create the route that leads to student routes listen for /students

//cross origin resources sharing issues cors issues
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})

app.use('/api', contactroutes); // Use the contact routes


//for signup
//app.use('/api', studentRoutes);

app.listen(port, () => console.log(`app listening on port ${port}`));
