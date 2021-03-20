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
    database: 'top_songsDB',
});

connection.connect((err) => {
    if (err) throw err;
    console.log(`connected as id ${connection.threadId}`);
    init();
});

function songProgram() {
    inquirer.prompt([{
        type: 'list',
        message: 'How would you like to search?',
        name: 'search',
        choices: ['Artist', 'Song', 'Ranking', 'Year']
    },
    {
        type: 'input',
        message: 'What would you like to search for?',
        name: 'query',
    }
    ])
}

const init = () => {
    songProgram()
    .then((data) => {
        if(data.search === 'Artist') {
            readDatabase();
        }
    })
}

const readDatabase = () => {
    connection.query(`SELECT ${data.query} top5000`, (err, res) => {
        if (err) throw err;
        console.log(res);
        connection.end();
    })
}