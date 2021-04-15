// DONE: Include packages needed for this application

const inquirer = require('inquirer'); // get user input
const fs = require('fs');             // write MD file
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    // enter project name 
        // => (display as title of README)
    // enter project description
    // enter installation instructions
    // usage information
    // contribution guidelines
    // test instructions
    // choose license from list of options 
        // => (badge for that license is added near the top of the README)
        // => (notice is added to the section of the README entitled License that explains which license the application is covered under)
    // enter GitHub username
    // enter e-mail address




];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
