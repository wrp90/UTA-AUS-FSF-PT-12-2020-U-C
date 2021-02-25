const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your user name?',
      name: 'username',
    },
    {
      type: 'input',
      message: 'What languages do you know?',
      name: 'language',
    },
    {
      type: 'input',
      message: 'What is your preferred method of communication?',
      name: 'preferred',
    },
  ]).then((response) =>
    fs.appendFile(('log.txt', response), (err) =>
    err ? console.error(err) : console.log('Commit logged!')
  ));