const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: 'root',
  
    // Be sure to update with your own MySQL password!
    password: '',
    database: 'database',
});


const queryAllItems = () => {
    connection.query('SELECT * FROM items', (err, res) => {
      if (err) throw err;
      res.forEach(({ id, title, artist, genre }) => {
        console.log(`${id} | ${title} | ${artist} | ${genre}`);
      });
      console.log('-----------------------------------');
    });
};

connection.connect((err) => {
    if (err) throw err;
    console.log(`connected as id ${connection.threadId}`);
    queryAllSongs();
    queryDanceSongs();
});