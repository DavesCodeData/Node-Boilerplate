'use strict';

console.log('Hello world');

const { Client } = require('pg')

const client = new Client({
    user: 'your_username',
    host: 'your_host',
    database: 'your_database',
    password: 'your_password',
    port: 5432
})

client.connect();

client.query(`SELECT * FROM employee`, (err, res) => {
    if (!err) {
        console.log(res.rows);
    } else {
        console.log(err.message);
    }
    client.end;
})
