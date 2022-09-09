const io = require('inquirer');
const fs = require('fs/promises');
const path = require('path');
const questions = require('./utils/questions');
const generateMarkdown = require('./utils/generateMarkdown.js');

const DIST_PATH = path.join(process.cwd(), 'dist', 'README.md');

function init() {
  io.prompt(questions)
    .then((answers) => generateMarkdown(answers))
    .then((markdown) => fs.writeFile(DIST_PATH, markdown))
    .then(() => console.log('README generated successfully!'))
    .catch((err) => console.error(err.message));
}

init();
