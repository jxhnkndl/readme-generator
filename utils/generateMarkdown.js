
// Require in third-party module
const outdent = require("outdent");

// Generate a badge using the user's chosen license and color
function renderLicenseBadge(rawLicense, color) {
  const license = rawLicense.replace(" ", "+");
  const badge = `https://img.shields.io/static/v1?label=license&message=${license}&color=${color}`;

  if (license && color) {
    return badge;

  } else if (license && !color) {
    color = "blue";
    return badge;

  } else if (!license) {
    return "";
  }
}

// Find the documentation URL for the selected license
function renderLicenseLink(license) {
  const links = [
    { license: "MIT", link: "https://opensource.org/licenses/MIT" },
    { license: "Apache 2.0", link: "https://opensource.org/licenses/Apache-2.0" },
    { license: "GPL v3", link: "https://www.gnu.org/licenses/gpl-3.0" },
    { license: "GPL v2", link: "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html" },
    { license: "BSD 3", link: "https://opensource.org/licenses/BSD-3-Clause" },
  ];

  const licenseMatch = links.find((link) => link.license === license);

  if (licenseMatch) {
    return licenseMatch.link;
  } else {
    return "";
  }
}

// Generate formatted markdown file
const generateMarkdown = (data) => {
  const license = data.license;
  const color = data.badgeColor;

  const badge = renderLicenseBadge(license, color);
  const link = renderLicenseLink(license);

  // Note: The third-party outdent module is being used 
  // to strip out the leading whitespace from the beginning
  // of each line to ensure the README is cleanly formatted

  return outdent`
  # ${data.title}

  [![license](${badge})](${link})
  
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