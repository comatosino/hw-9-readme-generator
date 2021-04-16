// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
// USE THIS: https://shields.io/category/license

// use this format:
//[![alt text](img src url)](link url)
  
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  // md link format:
  // [display text]( URL )
  // choices: ['MIT', 'Apache', 'GPL 3.0', 'None',],

  if (license == 'MIT') {
    // return [display text]( URL )

  } else if (license == 'Apache') {
    // return [display text]( URL )

  } else if (license == 'GPL 3.0') {
    // return [display text]( URL )

  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `
  ## License
  
  `
}

// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
function generateMarkdown(data) {
  return `
  
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
