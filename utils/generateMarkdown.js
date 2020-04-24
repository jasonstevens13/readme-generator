function generateMarkdown(data) {
  return `
# ${data.title} (Repo - ${data.gitHubRepoName})

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## License 
${data.license}

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
