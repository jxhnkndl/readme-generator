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
function generateMarkdown(data) {
  return `
    # Title

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
    This is an application that does some stuff.
    
    ## Installation
    
    The repository contains a package.json file documenting dependencies and their versions. To install the application and its dependencies, run:
    \```
    npm install
    \```
    OR:
    \```
    npm i
    \```
    
    ## Usage
    
    This is application uses a command line interface. To launch the application:
    \```
    node index.js
    \```
    
    ## License
    Copyright (c) 2021  
    Licensed under the MIT license.
    
    ## Contributing
    Guidelines for contributing to this application adhere to the Contributor Covenant v2.0.
    
    ## Tests
    Tests written using Mocha. Test data can be found in the \`/tests\` directory.
    
    ## Questions
    Need support? Reach me on [GitHub](https://www.github.com/) or shoot me an email at <jkroysto@gmail.com>.

`;
}

module.exports = generateMarkdown;
