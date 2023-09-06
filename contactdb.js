const { Pool } = require('pg');

const pool = new Pool({//I'm trying to write to this database
    user: 'your_username',
    host: 'your_host',
    database: 'your_database',
    password: 'your_password',
    port: 5432
});