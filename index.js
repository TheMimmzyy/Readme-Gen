const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  "What is the Title of your project?",
  "What is a description of your project?",
  "What are the installation instructions?",
  "What is the projects usage information?",
  "What License is application covered under?",
  "Any contribution guidelines?",
  "What are your test instructions?",
  "What is your GitHub username?",
  "What is your email address?",
];

// function to write README file
function writeToFile(fileName, data) {
  console.log(data);
  const genMarkdown = generateMarkdown(data);
  fs.writeFile(fileName, genMarkdown, (err) => {
    if (err) throw err;
  });
}

// function to initialize program
function init() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: questions[0],
      },
      {
        type: "input",
        name: "description",
        message: questions[1],
      },
      {
        type: "input",
        name: "installation",
        message: questions[2],
      },
      {
        type: "input",
        name: "usage",
        message: questions[3],
      },
      {
        type: "list",
        name: "badge",
        message: questions[4],
        choices: ["None", "MIT", "Apache", "GPL"],
      },
      {
        type: "input",
        name: "contributing",
        message: questions[5],
      },
      {
        type: "input",
        name: "tests",
        message: questions[6],
      },

      {
        type: "input",
        name: "github",
        message: questions[7],
      },
      {
        type: "input",
        name: "email",
        message: questions[8],
      },
    ])
    .then((answers) => {
      writeToFile("README.md", answers);
    });
}

// function call to initialize program
init();
