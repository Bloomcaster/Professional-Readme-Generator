// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('.utils/generateMarkdown.js');
const fs = require('fs');
console.log("A professional README generator")
console.log("Answer the folowing questions to quickly generate a README for your project")

// TODO: Create an array of questions for user input
const questions = [
//name of the new project
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

// Description of the project
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

//


        
    
    



];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
