const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const markdown = require("./utils/generateMarkdown.js");

const MIT = '![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)';
const GPL = '[![GPL license](https://img.shields.io/badge/License-GPL-blue.svg)](http://perso.crans.org/besson/LICENSE.html)';

const writeFileAsync = util.promisify(fs.writeFile);


const questions = [

];

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


// function writeToFile("generateMarkdown.js", data) {

// }

function init() {
    promptUser();
}

init();


// promptUser()
//   .then(function(answers) {
//     const html = generateHTML(answers);

//     return writeFileAsync("index.html", html);
//   })
//   .then(function() {
//     console.log("Successfully wrote to generateMarkdown.js");
//   })
//   .catch(function(err) {
//     console.log(err);
//   });

