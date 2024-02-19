// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

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
renderLicenseBadge() +
`
##Contributors
${data.contribution}
<a name="contribution"></a>

##Testing
${data.tests}
<a name="tests"></a>

##Questions
${data.questions}
<a name="questions"></a>
`;
}

module.exports = generateMarkdown;
