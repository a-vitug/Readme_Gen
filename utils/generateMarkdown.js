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

function renderLicenseBadge(data) {
  for (let i = 0; i < licenseContent.length; i++) {
    if (data.license == licenseContent[i].licenses) {
      return data;
    } else {
      return licenseContent[i].badge;
    }
  }
}

function renderLicenseLink(data) {
  for (let i = 0; i < licenseContent.length; i++) {
    if (data.license == licenseContent[i].licenses) {
      return data;
    } else {
      return licenseContent[i].link;
    }
  }
}

function renderLicenseSection(data) {
  for (let i = 0; i < licenseContent.length; i++) {
    if (data.license == licenseContent[i].licenses) {
      return (
        data
      );
    } else {
      return (
        licenseContent[i].licenses + `\n` + renderLicenseBadge(data) + `\n` +
        `\n` + renderLicenseLink(data)
      );
    }; 
  }
};

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
- Below are the instructions on installing the site.
${data.installation}

## Usage
- ${data.usage}

## Contributor
- Here are the contributor(s) of the site --> ${data.contributor}

------------

## License 
${renderLicenseSection(data.license)}

### Questions
-You can contact me through my Github ( ${data.github} ) and LinkedIn ( ${data.linkedin} ). 
`;
}

module.exports = generateMarkdown;
