
// Require in third-party module
const outdent = require("outdent");

// Generate a badge using the user's chosen license and color
function renderLicenseBadge(license, color) {
  if (license === "None") {
    return "";

  } else {
    const formatLicense = license.split(" ").join("+");
    const badge = `https://img.shields.io/static/v1?label=license&message=${formatLicense}&color=${color}`;
    return badge;
  }
}

// Find the documentation URL for the selected license
function renderLicenseLink(license) {
  if (license === "None") {
    return "";

  } else {
    const queryString = license.split(" ").join("-");
    return `https://opensource.org/licenses/${queryString}`;
  }
}

// Generate license section markup 
function renderLicenseSection(license, link, name) {
  if (license === "None") {
    return "No license information available."

  } else {
    return outdent`
      Copyright (c) 2021 ${name}  
      Licensed under the [${license} license](${link}).
    `;
  }
}

// Generate formatted markdown file
const generateMarkdown = (data) => {
  const { name, license, badgeColor: color } = data;

  const badge = renderLicenseBadge(license, color);
  const link = renderLicenseLink(license);
  const licenseMarkup = renderLicenseSection(license, link, name);
  const licenseBadge = `[![license](${badge})](${link})`;

  let optionalBadge;

  if (data.license === "None") optionalBadge = "";
  else optionalBadge = licenseBadge;

  // Note: The third-party outdent module is being used 
  // to strip out the leading whitespace from the beginning
  // of each new line in the template literal to ensure 
  // the README is cleanly formatted.

  return outdent`
  # ${data.title}

  ${optionalBadge}
  
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
  ${licenseMarkup}
  
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
