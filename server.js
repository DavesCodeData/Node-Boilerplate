const express = require('express');
const studentRoutes = require('./src/student/routes');
const cors = require('cors');
//const fs = require('fs');//for middleware
const { Pool } = require('pg');//need library to load into script to save ip info to database

const app = express();
const port = 3000;

app.use(cors());

app.use(express.json());

//const { Pool } = require('pg');//added 7/17/23

//const satelize = require('satelize');//added 7/17/23 critical volnerabilities
//app.use((req, res, next) => {
//    const ipAddress = req.ip;

//    satelize.satelize({ ip: ipAddress }, (err, payload) => {
//        if (err) {
//            console.error('Error retrieving geolocation:', err);
//            next(); // Proceed to the next middleware or route
//            return;
//        }

//        req.geolocation = payload; // Store the geolocation data in the request object
//        next(); // Proceed to the next middleware or route
//    });

//    app.get('/example', (req, res) => {
//        const geolocation = req.geolocation;
//        // Use the geolocation data as needed
//        console.log(geolocation);

//        // Send a response
//        res.json({ geolocation });
//    });

    //satelize method that works
    //satelize.satelize({ ip: '8.8.8.8' }, (err, payload) => {
    //    if (err) {
    //        console.error('Error retrieving geolocation:', err);
    //        return;
    //    }

    //    console.log(payload);
    //});

    // Middleware to log IP address added 7-14-23
    //app.use((req, res, next) => {
    //    const ipAddress = req.ip;
    //    const logEntry = `${new Date().toISOString()} - IP: ${ipAddress}\n`;

    //    fs.appendFile('access.log', logEntry, (err) => {
    //        if (err) {
    //            console.error('Error writing to log file:', err);
    //        }
    //    });

    //    next();
    //});

    //app.get("/", (req, res) => {
    //    res.send("Hello World!");
    //})

    //app.get('/getData', (req, res) => {
    //    res.json({
    //        "statusCode": 200,
    //        "statusMessage":"SUCCESS"
    //    })
    //})

    app.use(express.static("frontend"));

    app.use('/api/v1/student', studentRoutes);

    app.listen(port, () => console.log(`app listennig on port ${port}`));
