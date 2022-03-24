const licenseContent = [
  {
    licenses: `MIT License`,
    link: `https://choosealicense.com/licenses/mit/`,
    badge: `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`,
  },
  {
    licenses: `GNU GPLv3`,
    link: `https://choosealicense.com/licenses/gpl-3.0/`,
    badge: `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]`
  },
  {
    licenses: `Apache License 2.0`,
    link: `https://choosealicense.com/licenses/apache-2.0/`,
    badge: `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`
  },
  {
    licenses: `The Unlicense`,
    link: `https://choosealicense.com/licenses/unlicense/`,
    badge: `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]`
  }
];

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  for (let i = 0; i < licenseContent.length; i++) {
    if (data.license == licenseContent[i].licenses) {
      return licenseContent[i].badge;
    } else {
      return data;
    }
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  for (let i = 0; i < licenseContent.length; i++) {
    if (data.license == licenseContent[i].licenses) {
      return licenseContent[i].link;
    } else {
      return data;
    }
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  for (let i = 0; i < licenseContent.length; i++) {
    if (data.license == licenseContent[i].licenses) {
      return (
        licenseContent[i].licenses +
        '/n' +
        renderLicenseBadge(data) +
        '/n' +
        renderLicenseLink(data)
      );
    } else {
      return data;
    }; 
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

    ## Description
        - ${data.description}

    ------------

    ## Table of Contents
        - [Installation](#installation)
        - [Usage](#usage)
        - [Contributor](contributor)
        - [License](#license)
        - [Contact](#contact)

    ------------

    ## Installation 
        Below are the instructions on installing the site.
            ${data.installation}

    ## Usage
        ${data.usage}

    ## Contributor
        Here are the contributor(s) of the site --> ${contributor}
    
    ------------

    ## License
        ${renderLicenseSection(data)}

    ### Questions
        You can contact me through my Github ${github} and LinkedIn ${linkedin}. 
`;
}

module.exports = generateMarkdown;
