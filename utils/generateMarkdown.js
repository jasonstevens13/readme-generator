function generateMarkdown(data) {
  return `
# ${data.title} (Repo - ${data.gitHubRepoName})

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#licesnse)
* [Badges](#badges)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)


## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## License 
![${data.license} License](https://img.shields.io/badge/License-${data.license}-green)

## Contributing
${data.contributing}

## Tests 
${data.tests}

## Questions
![Ask Me Anything !](https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg)

https://avatars.githubusercontent.com/${data.gitHubUN}

### Email - ${data.gitHubEmail}

`;
};

module.exports = generateMarkdown;
