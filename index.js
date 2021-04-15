// DONE: Include packages needed for this application

const inquirer = require('inquirer'); // get user input
const fs = require('fs');             // write MD file
const generateMarkdown = require('./utils/generateMarkdown.js'); // get generate method

// DONE: Create an array of questions for user input
const questions = [
    // enter GitHub username
   {
    type: 'input',
    name: 'github',
    message: 'enter GitHub username:',
  },

    // enter e-mail address
  {
    type: 'input',
    name: 'email',
    message: 'enter e-mail address:',
  },
    // enter project name 
    // => (display as title of README)
   {
     type: 'input',
     name: 'title',
     message: 'Enter project title:',
   },

    // enter project description
   {
     type: 'input',
     name: 'description',
     message: 'enter project description:',
   },

    // enter installation instructions
   {
     type: 'input',
     name: 'installation',
     message: 'enter installation instructions:',
   },

    // usage information
   {
   type: 'input',
   name: 'usage',
   message: 'enter usage information:',
   },

    // contribution guidelines
   {
   type: 'input',
   name: 'contribution',
   message: 'enter contribution guidelines:',
   },

    // testing information
   {
    type: 'input',
    name: 'testing',
    message: 'enter testing information:',
    },

    // choose license from list of options 
    // => (badge for that license is added near the top of the README)
    // => (notice is added to the section of the README entitled License
    //     that explains which license the application is covered under)
   {
     type: 'list',
     message: 'choose license',
     name: 'license',
     choices: ['MIT', 'License 1', 'None'],
   },
];

// writes README to .md file
function writeToFiledata (data) {

  fs.writeFile(`${data.title}.md`, generateMarkdown(data), (err) =>
    err ? console.error(err) : console.log('README generated successfully!')
  );
}

// initialize application
function init() {

    inquirer
    .prompt(questions)     // ask the questions
    .then((answers) => {   // do something with the user input
    
        // console.log(answers);
        writeToFiledata(answers);

    });
}

// Function call to initialize app
init();
