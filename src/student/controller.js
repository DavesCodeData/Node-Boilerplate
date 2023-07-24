const pool = require('../../db');
const queries = require('./queries');

const getStudent = (req, res) => {
    pool.query(queries.getStudent, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};
//const addip = (req, res) => {
//    const { ipAddress } = req.body;

//    try {
//        pool.query('INSERT INTO access_logs (ip_address) VALUES ($1)', [ipAddress]);
//        res.status(200).json({ message: 'IP address logged successfully' });
//    } catch (err) {
//        console.error('Error executing query:', err);
//        res.status(500).json({ error: 'Internal server error' });
//    }
//}

module.exports = {
    getStudent,
    //addip
};