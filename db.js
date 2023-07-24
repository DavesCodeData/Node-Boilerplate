//const Pool = require("pg").Pool;

const { Pool } = require('pg');

const pool = new Pool({//I'm trying to write to this database
    user: 'your_username',
    host: 'your_host',
    database: 'your_database',
    password: 'your_password',
    port: 5432
});
//save IP info to database
//const pool = new Pool({
//    user: 'your_username',
//    host: 'your_host',
//    database: 'your_database',
//    password: 'your_password',
//    port: 5432, // or your PostgreSQL port
//});

module.exports = pool;