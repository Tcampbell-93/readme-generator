function renderLicenseBadge(license) {    
  switch (license) {      //Switch function to choose a badge for the license picked
    case 'MIT license':
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
      break;
    case 'GNU Lesser General Public License v3.0':
      return `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)`;
      break;
    case 'Mozilla Public License 2.0':
      return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
      break;
    case 'GNU Affero General Public License v3.0':
      return `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`;
      break;
    case 'Apache License 2.0':
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
      break;
    case 'GNU General Public License v3.0':
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
      break;
    case 'Unlicensed':
      return '';
      break;
  }
}

function renderLicenseLink(license) {
  switch (license) {    // switch function to choose the link for the license picked
    case 'MIT license':
      return `https://opensource.org/license/mit/`;
      break;
    case 'GNU Lesser General Public License v3.0':
      return `https://www.gnu.org/licenses/lgpl-3.0.en.html`;
      break;
    case 'Mozilla Public License 2.0':
      return `https://www.mozilla.org/en-US/MPL/2.0/`;
      break;
    case 'GNU Affero General Public License v3.0':
      return `https://www.gnu.org/licenses/agpl-3.0.en.html`;
      break;
    case 'Apache License 2.0':
      return `https://www.apache.org/licenses/LICENSE-2.0`;
      break;
    case 'GNU General Public License v3.0':
      return `https://www.gnu.org/licenses/gpl-3.0.en.html`;
      break;
    case 'Unlicensed':
      return '';
      break;
  }
}

function renderLicenseSection(license) {      // function to render the License section
  if (license) {
    return `## License
This project is licensed under ${license}.
`;
}else{
  return '';
}
}

function generateMarkdown(data) {       // generates the markdown language and plugs in the answers to the questions asked
  return `# ${data.title}
` + renderLicenseBadge(data.license) + `

## Table of Contents
[Description](#description)
[Installations](#installation)
[Usage](#usage)
[License](#license)
[Contributions](#contribution)
[Testing](#tests)
[Questions](#questions)

## Description
${data.description}
<a name="description"></a>

## Installation
${data.installation}
<a name="installation"></a>

## Usage
${data.usage}
<a name="usage"></a>

` + renderLicenseSection(data.license) +        // renders the license section and link 
renderLicenseLink(data.license) +
`
<a name="license"></a>

## Contributors
${data.contribution}
<a name="contribution"></a>

## Testing
${data.tests}
<a name="tests"></a>

## Questions
Here is a link to my github: https://github.com/${data.username}
If you have any questions please email me at ${data.email}
<a name="questions"></a>
`;
}

module.exports = generateMarkdown;
