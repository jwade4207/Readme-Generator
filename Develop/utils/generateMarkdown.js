// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = licenseInput => {
  if(!licenseInput) {
    return ''
  }
  return `<img src="https://img.shields.io/badge/License-${licenseInput}-green" alt="badge with license name"/>`

}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = licenseLink => {
  if(!licenseLink) {
  return ''
  }
  return ''
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = license => {

  if(!license) {
    return ''
  }
}

// TODO: Create a function to generate markdown for README
const generateMarkdown = data => {
  return `# ${data.title}
  
  ## Description 
  ${data.description}
  
  ## Table of Contents
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
  
  ## Usage 
    
  ## License
  ${renderLicenseBadge(data.licenses)}
  
  ## Contributing
  ${data.contributer}
  
  ## Tests
  
  ## Questions
  If you have any questions, please feel free to visit my Github Account at [${data.username}](https://github.com/${data.username}), or shoot me an email here: ${data.email}
`;
}

module.exports = generateMarkdown;