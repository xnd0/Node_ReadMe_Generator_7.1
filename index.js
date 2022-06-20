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
    {
        type: 'input',
        message: 'Please enter input for a Table of Contents.',
        name: 'tableOfContents',
    },
    {
        type: 'input',
        message: 'What are the installation instructions?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'What is usage',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Please confirm License.',
        name: 'license',
    },
    {
        type: 'input',
        message: 'Contributions?',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'Are there any tests?',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'Do you have any questions to add?',
        name: 'questions',
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
<br>
## Table of Contents:
${data.tableOfContents}
<br>
## Installation Instructions:
${data.installation}
<br>
## Usage:
${data.usage}
<br>
## License:
${data.license}
<br>
## Contributions:
${data.contribution}
<br>
## Tests:
${data.tests}
<br>
## Questions:
${data.questions}

  
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
