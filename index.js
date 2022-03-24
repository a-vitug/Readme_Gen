// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')

// const generateReadMe = ({ title, description, table_of_contents, installation, usage, license, contributor, github, linkedin }) =>
//     `# Title
//         ${title}

//     ## Description
//         - ${description}

//     ------------

//     ## Table of Contents
//         - [Installation](#installation)
//         - [Usage](#usage)
//         - [License](#license)
//         - [Contributor](contributor)
//         - [Contact](#contact)

//     ------------

//     ## Installation 
//         Below are the instructions on installing the site.
//             ${installation}

//     ## Usage
//         ${usage}

//     ## License
//         ${license}

//     ## Contributor
//         Here are the contributor(s) of the site --> ${contributor}
    
//     ------------

//     ### Questions
//         You can contact me through my Github ${github} and LinkedIn ${linkedin}. `

// TODO: Create an array of questions for user input
inquirer
    .prompt([
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
        },
    ])
        .then ((answers) => {
            const readMeContent = generateMarkdown(answers);

            fs.writeFile('README.md', readMeContent, (err) => 
                err ? console.log(err) : console.log('Successfully wrote to README.md file')
            );
});

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {
//     questions()
//         .then((answers) => fs.writeFileSync('README.md', generateMarkdown(answers)))
//         .then (() => console.log('Successfully wrote to README.md'))
//         .catch((err) => console.error(err));
// };

// // Function call to initialize app
// init();
