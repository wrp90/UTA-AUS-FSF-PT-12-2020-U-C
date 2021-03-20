const inquirer = require('inquirer');

const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',

    // Your port; if not 3306
    port: 3307,

    // Your username
    user: 'root',

    // Be sure to update with your own MySQL password!
    password: 'Qazwsx1213765',
    database: 'play_listDB',
});

connection.connect((err) => {
    if (err) throw err;
    console.log(`connected as id ${connection.threadId}`);
    let artist = 'queen';
    connection.query('select song ,artist, year, position from tblalbums where artist=? order by position ASC', [artist] , (err, res) => {
        if (err) throw err;
        console.log(res);
     });
});
