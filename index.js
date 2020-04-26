// Defining dependencies.
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

// Defining async writefile, pomisifying the fs.writefile method with util npm.
const writeFileAsync = util.promisify(fs.writeFile);

// Prompt user with the following command line questions using inquirer npm.
function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            name: "gitHubEmail",
            message: "GitHub Email - What is your email address that is associated with your GitHub account?"
        },
        {
            type: "input",
            name: "gitHubUN",
            message: "GitHub Username - What is your GitHub username?"
        },
        {
            type: "input",
            name: "gitHubRepoName",
            message: "GitHub Repo Name - What is the name of your GitHub repository for which you would like this README.md file generated?"
        },
        {
            type: "input",
            name: "title",
            message: "Title - What is the title of your GitHub project that you would like displayed on your README.md file?"
        },
        {
            type: "input",
            name: "description",
            message: "Description - Please provide a description of your GitHub project: "
        },
        {
            type: "input",
            name: "installation",
            message: "Installation - What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running."
        },
        {
            type: "input",
            name: "usage",
            message: "Usage - Provide instructions and/or examples for use."
        },
        {
            type: "list",
            name: "license",
            message: "License - Please select the type of license you would like associated with your GitHub project: ",
            choices: ['MIT', 'GPL', 'Apache', 'None']
        },
        {
            type: "input",
            name: "contributing",
            message: "Contributing - Please indicate whether you welcome contributions to your project; and if so, please provide instructions on how to do contribute."
        },
        {
            type: "input",
            name: "tests",
            message: "Tests - Explain how to run any automated tests for your application."
        }
    ]);
}

// Generate the readme doc contents with the following function (contents are within template literals).
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
  ![Ask Me Anything!](https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg)
  
  ![Profile Pic](https://avatars.githubusercontent.com/${data.gitHubUN})
  
  ### Email - ${data.gitHubEmail}
  
  `;
};

// The following init function outlines the basic order of events to run the app.
function init() {
    promptUser()
        .then(function (answers) {
            const mdown = generateMarkdown(answers);

            return writeFileAsync("README.md", mdown);
        })
        .then(function () {
            console.log("Successfully wrote the README.md doc!");
        })
        .catch(function (err) {
            console.log(err);
        });

};

// Init func called here.
init();


