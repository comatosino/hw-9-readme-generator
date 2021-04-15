// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// USE THIS: https://shields.io/category/license

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}
# ${data.github}
# ${data.email}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contribute](#Contribute)
- [Testing](#Testing)
- [License](#license)
- [Credits](#credits)

## Installation

${data.installation}

## Usage

${data.usage}

## Contribute

${data.contribution}

## Testing

${data.testing}

## Credits

## License

${data.license}

  `;

}

module.exports = generateMarkdown;
