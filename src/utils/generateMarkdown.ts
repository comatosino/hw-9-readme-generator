import LICENSES from './licenses';

/**
 * @param license string
 * @returns license badge img and link on README if license given
 */
const renderLicenseBadge = (license: string): string => {
  switch (license) {
    case LICENSES.MIT:
      return `[![${LICENSES.MIT}](https://img.shields.io/badge/license-MIT-blue)](https://opensource.org/licenses/MIT)`;

    case LICENSES.APACHE_2:
      return `[![${LICENSES.APACHE_2}](https://img.shields.io/badge/license-Apache--2.0-blue)](https://opensource.org/licenses/Apache-2.0)`;

    case LICENSES.GPL_3:
      return `[![${LICENSES.GPL_3}](https://img.shields.io/badge/license-GPL--3.0-blue)](https://opensource.org/licenses/GPL-3.0)`;

    case LICENSES.BSD_3:
      return `[![${LICENSES.BSD_3}](https://img.shields.io/badge/license-BSD--3-blue)](https://opensource.org/licenses/BSD-3-Clause)`;

    default: // license === LICENSES.NONE
      return ``;
  }
};

/**
 * @param license string
 * @returns a link to the license section of the README, if license given
 */
const renderLicenseLink = (license: string): string => {
  if (license === LICENSES.NONE) return ``;
  return `[License](#license)`;
};

/**
 * @param license string
 * @returns license section of the README, if license given
 */
const renderLicenseSection = (license: string) => {
  if (license === LICENSES.NONE) return ``;
  return `
  ## License

  This project is licensed under the ${license} license.
  `;
};

/**
 * @param data object with user answers
 * @returns string template literal to be saved as markdown
 */
const generateMarkdown = (data: { [key: string]: string }) => {
  return `
  ${renderLicenseBadge(data.license)}

  # ${data.title}

  ## Description

  ${data.desc}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Tests](#tests)
  * [Contributing](#contributing)
  * [Questions](#questions)
  * ${renderLicenseLink(data.license)}

  ## Installation

  Run the following command to install dependencies:

  \`\`\`
  ${data.install}
  \`\`\`

  ## Usage

  \`\`\`
  ${data.usage}
  \`\`\`

  ## Tests

  \`\`\`
  ${data.test}
  \`\`\`

  ## Contributing

  ${data.contributing}

  ## Questions

  Questions? Open an issue or contact me at:

  GitHub: [${data.github}](https://github.com/${data.github})
  Email: ${data.email}

  ${renderLicenseSection(data.license)}
    `;
};

export default generateMarkdown;
