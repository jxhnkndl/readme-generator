
function renderLicenseBadge(license, color) {
  const badge = `https://img.shields.io/static/v1?style=plastic&label=license&message=${license}&color=${color}`;

  if (license && color) {
    return badge;

  } else if (license && !color) {
    color = "blue";
    return badge;

  } else if (!license) {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const links = [
    { 
      license: "MIT", 
      link: "https://opensource.org/licenses/MIT" 
    },
    { 
      license: "Apache 2.0", 
      link: "https://opensource.org/licenses/Apache-2.0" 
    },
    { 
      license: "GPL v3", 
      link: "https://www.gnu.org/licenses/gpl-3.0" 
    },
    { 
      license: "GPL v2", 
      link: "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html" 
    },
    { 
      license: "BSD 3", 
      link: "https://opensource.org/licenses/BSD-3-Clause" 
    }
  ];

  const licenseMatch = links.find(link => link.license === license);
  return licenseMatch.link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// Generate markdown file
const generateMarkdown = (data) => {
  const license = data.license;
  const color = data.badgeColor;
  const badge = renderLicenseBadge(license, color);
  const link = renderLicenseLink(license);

  console.log(badge);
  console.log(link);

  return `# ${data.title}

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
}

// Export generateMarkdown() function
module.exports = generateMarkdown;
