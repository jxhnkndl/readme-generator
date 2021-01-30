
// Require in third-party module
const outdent = require("outdent");

// Generate a badge using the user's chosen license and color
function renderLicenseBadge(rawLicense, color) {
  const license = rawLicense.split(" ").join("+");
  const badge = `https://img.shields.io/static/v1?label=license&message=${license}&color=${color}`;

  if (license && color) return badge;
  else return "";
}

// Find the documentation URL for the selected license
function renderLicenseLink(license) {
  const queryString = license.split(" ").join("-");
  const url = `https://opensource.org/licenses/${queryString}`;

  if (license) return url;
  else return "";
}

// Generate formatted markdown file
const generateMarkdown = (data) => {
  const license = data.license;
  const color = data.badgeColor;

  const badge = renderLicenseBadge(license, color);
  const link = renderLicenseLink(license);

  // Note: The third-party outdent module is being used 
  // to strip out the leading whitespace from the beginning
  // of each new line in the template literal to ensure 
  // the README is cleanly formatted.

  return outdent`
  # ${data.title}

  [![license](${badge})](${link})
  
  ## Table of Contents
  
  * [Description](#description)
  * [Technologies](#technologies)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Description
  ${data.description}
  
  ## Technologies
  ${data.tech.join(", ")}

  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## License
  Copyright (c) 2021 ${data.name}  
  Licensed under the [${data.license} license](${link}).
  
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