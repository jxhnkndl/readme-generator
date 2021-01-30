// Import modules
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// Questions array
const questions = [
  {
    name: "os",
    type: "list",
    message: `This application will guide you through generating a README document.
    Markdown formatting is supported.
    Before we proceed, are you using a Windows machine or a Mac/Linux machine?`,
    choices: ["Windows", "Mac/Linux"]
  },
  {
    name: "Windows",
    type: "confirm",
    message: `The application will use Notepad for questions that may require longer responses. 
    Are you ready to get started?`,
    when: answers => answers.os === "Windows"
  },
  {
    name: "Mac/Linux",
    type: "confirm",
    message: `The application will use Vim for questions that may require longer responses. 
    To use Vim, press "enter" to open the editor and "i" to start typing.
    When you're finished, press "esc" followed by ":wq" to save your answer and close Vim.
    Are you ready to get started?`,
    when: answers => answers.os === "Mac/Linux"
  },
  {
    name: "name",
    type: "input",
    message: `Name:`
  },
  // {
  //   name: "email",
  //   type: "input",
  //   message: `Email Address:`
  // },
  // {
  //   name: "github",
  //   type: "input",
  //   message: `GitHub Username:`
  // },
  // {
  //   name: "title",
  //   type: "input",
  //   message: `Application Title:`
  // },
  // {
  //   name: "description",
  //   type: "editor",
  //   message: `Describe the application:`
  // },
  // {
  //   name: "installation",
  //   type: "input",
  //   message: `How would a user install the application?`
  // },
  // {
  //   name: "usage",
  //   type: "editor",
  //   message: `Please provide instructions for how to use the application:`
  // },
  // {
  //   name: "contributing",
  //   type: "editor",
  //   message: `What are the guidelines for contributions to the project?`
  // },
  // {
  //   name: "tests",
  //   type: "editor",
  //   message: `Please provide information about testing suites and environments:`
  // },
  {
    name: "license",
    type: "list",
    choices: ["MIT", "Apache 2.0", "GPL v3", "GPL v2", "BSD 3"],
    message: "Select a license for your application:"
  },
  {
    name: "badgeColor",
    type: "list",
    choices: ["brightgreen", "yellow", "red", "blue", "orange", "lightgray", "blueviolet"],
    message: "Select a color for your license badge:"
  }
];

// Take the formatted answers and write them into a new or existing file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, err => {
    if (err) new Error(err);
    console.log("README successfully created!");
  });
}

// Init application and begin the command line prompts
// When answers are returned, use them to generate and write the markdown file
function init() {
  inquirer.prompt(questions)
    .then(answers => {
      writeToFile("test.md", generateMarkdown(answers));
    })
    .catch(err => console.log(err));
}

// Function call to initialize app
init();
