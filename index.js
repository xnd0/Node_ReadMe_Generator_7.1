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
    // {
    //     type: 'input',
    //     message: 'Please enter input for a Table of Contents.',
    //     name: 'tableOfContents',
    // },
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
    // {
    //     type: 'input',
    //     message: 'Please confirm License.',
    //     name: 'license',
    // },
    {
        type: 'list',
        message: 'Please confirm License.',
        name: 'license',
        choices: [
            'MIT',
            'Mozilla'
        ]
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
        message: 'Please enter your gitHub username',
        name: 'github',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
    // {
    //     type: 'input',
    //     message: 'Do you have any questions to add?',
    //     name: 'questions',
    // },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    // --- Badge Display Logic --- //
    if (data.license === 'MIT') {
        badgeDisplay = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    } else if (data.license === 'Mozilla') {
        badgeDisplay = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
    };



    // --- Readme Data --- //
    data =
    `# Node_ReadMe_Generator_7.1

## Title: ${data.title}
<br>

${badgeDisplay}
    
## Description:
${data.description}
<br>
## Table of Contents:
- [0. Description of this App](#description)
- [1. Installation](#installation)
- [2. Usage](#usage)
- [3. Contributions](#contributions)
- [4. Tests](#tests)
- [5. Questions](#questions)

<br>

## Installation Instructions:
${data.installation}
<br>
## Usage:
${data.usage}
<br>
## Contributions:
${data.contribution}
<br>
## Tests:
${data.tests}
<br>
## Questions:
Email: ${data.email}
<br>
gitHub user: ${data.github}
<br>



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
