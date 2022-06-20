// TODO: Include packages needed for this application

const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What would you like the file name to be?',
        name: 'filename',
    },
    {
        type: 'input',
        message: 'What is the Title?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Please enter a brief description.',
        name: 'description',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    data =
    `# Node_ReadMe_Generator_7.1

## Title: ${data.title}
<br>
    
## Description:
${data.description}
    
The End!`
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Success!'));
};

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)

        .then((data) => {
            const fileName = `${data.filename.toLowerCase().split(' ').join('')}.md`;
            writeToFile(fileName, data, (err) =>
                err ? console.log(err) : console.log('Success!'));
        })
}

// Function call to initialize app
init();
