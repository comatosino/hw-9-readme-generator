import fs from 'fs';
import inquirer from 'inquirer';
import path from 'path';
import questions from './utils/questions';
import generateMarkdown from './utils/generateMarkdown';

const DIR = path.join(process.cwd(), 'dist');

const main = async () => {
  try {
    if (!fs.existsSync(DIR)) fs.mkdirSync(DIR);
    const responses = await inquirer.prompt(questions);
    const markdown = generateMarkdown(responses);
    const FILEPATH = path.join(DIR, `${responses.title}-README.md`);
    fs.writeFileSync(FILEPATH, markdown);
    console.log(`README generated successfully at ${FILEPATH}`);
  } catch (err) {
    if (err instanceof Error) {
      console.log(err.message);
    }
  }
};

main();
