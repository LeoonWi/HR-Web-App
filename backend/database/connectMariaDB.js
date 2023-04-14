const mariadb = require('mariadb/callback');

const db = mariadb.createConnection({
    host: 'localhost',
    user: 'root',
    password: '2003',
    database: 'db_hr'
})

module.exports = db;