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
    init();
});

function init() {
    inquirer.prompt({
        name: 'postOrBid',
        type: 'list',
        message: 'Would you like to post and item or bid on and item?',
        choices: ['POST', 'BID']
    }).then(res => {
        console.log(res)
        switch (res.postOrBid) {
            case 'POST':
                startPost(res);
                break;
            case 'BID':
                // startBid();
                break;
            default:
                text = 'Nothing';
        }
    })
}

function startPost() {
    inquirer.prompt([{
        name: 'item',
        type: 'input',
        message: 'What item would you like to post?',
    },
    {
        name: 'price',
        type: 'input',
        messages: 'What is the starting price?',
    },
    {
        name: 'category',
        type: 'input',
        message: 'What is the category of the item?',
    },
    ]).then(res => {
        connection.query('INSERT INTO items SET ?', {
            items_name: res.item,
            category: res.category,
            price: res.price,
        },
        function(err, res) {
            // if (err) throw err;
            console.log(res);
            // startBid();
        })
    })
}

function startBid() {
    inquirer.prompt({
        name: 'item'
    })
}

