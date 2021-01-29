// Import modules
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
  {
    name: "start",
    type: "confirm",
    message: "In order to generate a quality README, first we need to gather some information. \nAre you ready to begin?"
  },
  {
    name: "name",
    type: "editor",
    message: "Name:"
  },
  {
    name: "email",
    type: "input",
    message: "Email Address:"
  },
  {
    name: "github",
    type: "input",
    message: "GitHub Username:"
  },
  {
    name: "instructions",
    type: "confirm",
    message: "Great. As we proceed forward, some questions may require more detailed responses. \nWe'll open and use your local text editor to capture these responses. \nFor more information, please refer to this application's documentation. \nAre you ready to proceed?"
  },
  {
    name: "title",
    type: "input",
    message: "Application Title:"
  },
  {
    name: "description",
    type: "editor",
    message: "Describe the application:"
  },
  {
    name: "installation",
    type: "input",
    message: "Enter installation instructions (if applicable):"
  },
  {
    name: "usage",
    type: "editor",
    message: "Enter detailed usage instructions:"
  },
  {
    name: "contributing",
    type: "editor",
    message: "Enter guidelines for contributions:"
  },
  {
    name: "tests",
    type: "editor",
    message: "Enter testing suite details:"
  },
  {
    name: "license",
    type: "list",
    choices: [
      "MIT", "Apache 2.0", "GPL v3", "BSD 3"
    ],
    message: "Select a license for your application:"
  }
];

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, err => {
    if (err) new Error(err);
    console.log("README successfully created!");
  });
}


function init() {
  inquirer.prompt(questions)
    .then(answers => {
      writeToFile("test.md", generateMarkdown(answers))
    })
    .catch(err => console.log(err));
}

// Function call to initialize app
init();
