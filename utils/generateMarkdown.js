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
${data.license}

## Badges


## Contributing
${data.contributing}

## Tests 
${data.tests}

## Questions

https://avatars.githubusercontent.com/${data.gitHubUN}

### Email - ${data.gitHubEmail}

`;
}

module.exports = generateMarkdown;
