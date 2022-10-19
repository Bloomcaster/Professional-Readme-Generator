// TODO: Include packages needed for this application
const inquirer = require('inquirer');
//const generateMarkdown = require('.utils/generateMarkdown.js');
const fs = require('fs');
console.log("A professional README generator")
console.log("Answer the folowing questions to quickly generate a README for your project")

// TODO: Create an array of questions for user input
const questions = [
//TITLE of the new project
{
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
    validate: your_input => {
        if (your_input) {
            return true;
        } else {
            console.log('Enter your title of project to proceed!!');
            return false;
        }
    }
},

// DESCRIPTION of the project
{
    type: 'input',
    name: 'description',
    message: 'What does your project entail?',
    validate: your_description => {
        if (your_description) {
            return true;
        } else {
            console.log('Enter your project description!!');
            return false;
        }
    }
},

// Provide INSTALLATION instructions for the project
{
    type: 'input',
    name: 'installation',
    message: 'What are the steps required to install your project?',
    validate: your_installation => {
        if (your_installation) {
            return true;
        } else {
            console.log('Input steps of installation to proceed!!');
            return false;
        
        }
    }
},

// Provide USAGE informtion for project
{
    type: 'input',
    name: 'usage',
    message: 'How do you use this particular project?',
    validate: your_usage => {
        if (your_usage) {
            return true;
        } else {
            console.log('Provide information of on how to use this project!!');
            return false;
        
        }
    }
},

// License Availability
{
    type: 'checkbox',
    name: 'license',
    message: 'Which license would you like for this project?',
    choices: ['MLP 2.0', 'GNU', 'Apache', 'MIT', 'None of the above'],
    validate: your_license => {
        if (your_license) {
            return true;
        } else {
            console.log('Choose a license for your project.');
            return false;
        }
    }
},

//CONTRIBUTORS to the code
{
    
}


        
    
    



];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
