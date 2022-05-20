const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js')

const questions = [
            {
                type: 'input',
                name: 'title',
                message: 'What would be your title?',
            },
            {
                type: 'input',
                name: 'description',
                message: 'Input a description of your work.'
            },
            {
                type: 'input',
                name: 'installation',
                message: 'Include a description of how to install your work',
            },
            {
                type: 'input',
                name: 'usage',
                message: 'Explain how to use your site',
            },
            {
                type: 'list',
                name: 'license',
                message: 'What kind of license do you want to use?',
                choices: [
                    'MIT License',
                    'GNU GPLv3',
                    'Apache License 2.0',
                    'The Unlicense'
                ],  
            },
            {
                type: 'input',
                name: 'contributor',
                message: 'Enter the contributors',
            },
            {
                type: 'input',
                name: 'github',
                message: 'Enter your GitHub Username',
            },
            {
                type: 'input',
                name: 'linkedin',
                message: 'Enter your LinkedIn URL',
            }
]

function writeToFile(fileName, data) {
    fs.writeFile('./assets/README.md', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log('Successfully created README.md!')
        }
    })
}

function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
        console.log('Generating README...');
        writeToFile('./assets/README.md', generateMarkdown({ ...inquirerResponses }));
      });
};

init();
