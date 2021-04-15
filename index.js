// DONE: Include packages needed for this application

const inquirer = require('inquirer'); // get user input
const fs = require('fs');             // write MD file
const generateMarkdown = require('./utils/generateMarkdown.js'); // get generate method

// TODO: Create an array of questions for user input
const questions = [
    
    // enter project name 
    // => (display as title of README)
   {
     type: 'input',
     name: 'name',
     message: 'Enter project name:',
   },

    // enter project description
   {
     type: 'input',
     name: 'name',
     message: 'enter project description:',
   },

    // enter installation instructions
   {
     type: 'input',
     name: 'name',
     message: 'enter installation instructions:',
   },

    // usage information
   {
   type: 'input',
   name: 'name',
   message: 'enter usage information:',
   },

    // contribution guidelines
   {
   type: 'input',
   name: 'name',
   message: 'enter contribution guidelines:',
   },

    // choose license from list of options 
    // => (badge for that license is added near the top of the README)
    // => (notice is added to the section of the README entitled License
    //     that explains which license the application is covered under)
   {
     type: 'list',
     message: 'choose license',
     name: 'contact',
     choices: ['MIT', 'License 1', 'License 2'],
   },

     // enter GitHub username
   {
     type: 'input',
     name: 'name',
     message: 'enter GitHub username:',
   },

     // enter e-mail address
   {
     type: 'input',
     name: 'name',
     message: 'enter e-mail address:',
   },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}


// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
