// TODO: Include packages needed for this application

const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your user name?',
        name: 'username',
    },
    {
        type: 'input',
        message: 'Where are you located?',
        name: 'location',
    },
    {
        type: 'input',
        message: 'What coding language do you use?',
        name: 'language',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    data = `FILLER ${data.username} testestestetetst
    filler ${data.location}
    testetsetsetsetsetset`
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('Success!'));
};

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)

    .then((data) => {
        const fileName = `${data.username.toLowerCase().split(' ').join('')}.html`;
        writeToFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Success!'));
    })     
}

// Function call to initialize app
init();
