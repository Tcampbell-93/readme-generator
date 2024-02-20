// requires the packages needed to run the app
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// creates an array of questions to later be prompted to the user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Give a description of your project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions for your project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use your project?'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'List any collaborators or contributions you had for this project.'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Write any test instructions you have for your project.'
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your Github username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
    {
        type: 'list',       // creates a list of common licenses
        name: 'license',
        message: 'What type of license do you have for your project?',
        choices: ['MIT license', 'GNU Lesser General Public License v3.0', 'Mozilla Public License 2.0',
         'GNU Affero General Public License v3.0', 'Apache License 2.0', 'GNU General Public License v3.0', 'Unlicensed']
    }
];

// writes the file with the name being README_[filetitle]
function writeToFile(data) {
    const fileTitle = data.title;
    const markdownFile = generateMarkdown(data);

    fs.writeFile('README_' + fileTitle + `.md`, markdownFile, (err) =>
        err ? console.log(err) : console.log('Success!')
    );
}

// simplifies the initialization function
function init() {
    inquirer
        .prompt(questions)      // asks the questions
        .then((data) => {       
            writeToFile(data);      // writes the answers in the created readme file
        })
}

// Function call to initialize app
init();
