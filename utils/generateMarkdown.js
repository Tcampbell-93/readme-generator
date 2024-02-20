// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT license':
      `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
      break;
    case 'GNU Lesser General Public License v3.0':
      `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)`;
      break;
    case 'Mozilla Public License 2.0':
      `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
      break;
    case 'GNU Affero General Public License v3.0':
      `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`;
      break;
    case 'Apache License 2.0':
      `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
      break;
    case 'GNU General Public License v3.0':
      `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
      break;
    case 'Unlicensed':
      '';
      break;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
` + renderLicenseBadge() + `

##Table of Contents
[Description](#description)
[Installations](#installation)
[Usage](#usage)
[License](#license)
[Contributions](#contribution)
[Testing](#tests)
[Questions](#questions)

##Description
${data.description}
<a name="description"></a>

##Installation
${data.installation}
<a name="installation"></a>

##Usage
${data.usage}
<a name="usage"></a>

##License
<a name="license"></a>
`+ renderLicenseSection() +
renderLicenseLink() +
`
##Contributors
${data.contribution}
<a name="contribution"></a>

##Testing
${data.tests}
<a name="tests"></a>

##Questions
Here is a link to my github: https://github.com/${data.username}
If you have any questions please email me at ${data.email}
<a name="questions"></a>
`;
}

module.exports = generateMarkdown;
