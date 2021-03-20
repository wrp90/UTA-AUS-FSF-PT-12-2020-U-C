const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'Qazwsx1213765',
  database: 'database',
});

connection.connect((err) => {
  if (err) throw err;
  connection.query('SELECT * FROM items', (error, result) => {
    console.log('result: ', result);
    connection.end()
  })
})

