import LICENSES from './licenses';

const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Enter project title',
  },
  {
    type: 'input',
    name: 'desc',
    message: 'Please write a short description of your project',
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  },
  {
    type: 'input',
    name: 'install',
    message: 'What command should be run to install dependencies?',
    default: 'npm install',
  },
  {
    type: 'input',
    name: 'test',
    message: 'What command should be run to run tests?',
    default: 'npm test',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'What does the user need to know about using the repo?',
    default: 'npm start',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'What does the user need to know about contributing to the repo?',
    default: 'Contact me to contribute!',
  },
  {
    type: 'list',
    message: 'What kind of license should this project have?',
    name: 'license',
    choices: [
      LICENSES.MIT,
      LICENSES.APACHE_2,
      LICENSES.GPL_3,
      LICENSES.BSD_3,
      LICENSES.NONE,
    ],
  },
];

export default questions;
