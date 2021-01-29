// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// Generate markdown file
const generateMarkdown = (data) => `
# ${data.title}

![license](https://img.shields.io/static/v1?label=license&message=MIT&color=blue&style=flat-square)

## Table of Contents

* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

# Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## License
Copyright (c) 2021 ${data.name}  
Licensed under the ${data.license} license

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
Need support?   
Reach me on [GitHub](https://www.github.com/${data.github})  
Reach me via email at <${data.email}>
`;

// Export generateMarkdown() function
module.exports = generateMarkdown;
