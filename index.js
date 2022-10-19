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
   type: 'input',
   name: 'contribution',
   message: 'How may users contribute to this project?',
   validate: your_contribution => {
    if (your_contribution) {
        return true;
    } else {
        console.log('How would you like others to add code and how to do so');
        return false;
    }
}
},

// Test Information
{
    type: 'input',
    name: 'test',
    message: 'How does the user test the application/project?',
    validate: your_test => {
        if (your_test) {
            return true;
        } else {
            console.log('Describe how to test this project.');
            return false;
        }
    }
},

//Github information
{
    type: 'input',
    name: 'github',
    message: 'Required, enter Github Username',
    vaildate: github_input => {
        if (github_input) {
            return true;

        }else {
            console.log('You must enter your Github Username!!');
            return false;
        }
    }

},

// Email Information
{
    type: 'input',
    name: 'email',
    message: 'Enter your email so that anyone that has questions about your generator may contact you',
    validate: email_input => {
        if (email_input) {
            return true;
        } else {
            console.log('Please enter your email');
            return false;
        }
    }
},
];
    
    
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(filename, data, (err) => {
        if (err) {
            return console.log(err);
        }

        console.log("Congratulations!! You can preview your README file");
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(userInput) {
        console.log(userInput)
        writeToFile("README.md", generateMarkdown(userInput));
    });
};

// Function call to initialize app
init();
