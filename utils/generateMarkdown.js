// returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return `[![${license}](https://img.shields.io/badge/license-MIT-green)](https://opensource.org/licenses/MIT)`;

  } else if (license === 'Apache 2.0') {
    return `[![${license}](https://img.shields.io/badge/license-Apache%202.0-red)](https://opensource.org/licenses/Apache-2.0)`;

  } else if (license === 'GPL 3.0') {
    return `[![${license}](https://img.shields.io/badge/license-GPL%203.0-blue)](https://opensource.org/licenses/GPL-3.0)`;

  } else {
    return ""; // If there is no license, return an empty string
  }  
}

// returns the license link based on which license is passed in
function renderLicenseLink(license) {

  if (license == 'MIT') {
    return `[${license}](https://opensource.org/licenses/MIT)`;

  } else if (license == 'Apache 2.0') {
    return `[${license}](https://opensource.org/licenses/Apache-2.0)`;

  } else if (license == 'GPL 3.0') {
    return `[${license}](https://opensource.org/licenses/GPL-3.0)`;

  } else {
    return ""; // If there is no license, return an empty string
  }
}

// returns the license section of README file
function renderLicenseSection(license) {

  if (license==='None') {
    return ""; // If there is no license, return an empty string
  } else {
    return `
## License
    
This project is covered under the ${renderLicenseLink(license)} license.
    `
  }
}

// returns the text content of README file
function generateMarkdown(data) {
  return `
  ${renderLicenseBadge(data.license)}
# ${data.title}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#Contributing)
- [Testing](#Testing)
- [Questions](#Questions)
- [License](#License)

## Installation

${data.installation}

## Usage

${data.usage}

## Contributing

${data.contribution}

## Tests

${data.tests}

## Questions

Questions? Reach out to me:

GitHub: [${data.github}](https://github.com/${data.github})

Email: ${data.email}


${renderLicenseSection(data.license)}

`;
}

module.exports = generateMarkdown;
