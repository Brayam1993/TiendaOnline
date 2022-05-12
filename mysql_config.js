const mysql  = require('mysql');

const dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'fake_store_db',
});

dbConn.connect((err) => {
    if (err) throw err;
    console.log('MySql Database Connected!');
});

module.exports = dbConn;
