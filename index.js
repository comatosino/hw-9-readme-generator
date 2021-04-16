// DONE: Include packages needed for this application

const inquirer = require('inquirer'); // get user input
const fs = require('fs');             // write MD file
const generateMarkdown = require('./utils/generateMarkdown.js'); // get generate method

const questions = [
   {
    type: 'input',
    name: 'github',
    message: 'Enter GitHub username:',
  },

  {
    type: 'input',
    name: 'email',
    message: 'Enter e-mail address:',
  },

   {
     type: 'input',
     name: 'title',
     message: 'Enter project title:',
   },

   {
     type: 'input',
     name: 'description',
     message: 'Enter a short description of this project:',
   },

   {
    type: 'list',
    message: 'What kind of license should this project have?',
    name: 'license',
    choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'None',],
  },

   {
     type: 'input',
     name: 'installation',
     message: 'Enter any installation instructions:',
   },

   {
    type: 'input',
    name: 'tests',
    message: 'Enter any testing instructions:',
    },

   {
   type: 'input',
   name: 'usage',
   message: 'What does the user need to know about using the repo?',
   },

   {
   type: 'input',
   name: 'contribution',
   message: 'What does the user need to know about contributing to the repo?',
   },
];

// writes README to .md file
// data: 
function writeToFiledata (data) {

  fs.writeFile(`${data.title}-README.md`, generateMarkdown(data), (err) =>
    err ? console.error(err) : console.log('README generated successfully!')
  );
}

// initialize application
function init() {

    inquirer
    .prompt(questions)
    .then((answers) => {
    
        writeToFiledata(answers);

    });
}

init();
