# README Generator

![languages](https://img.shields.io/github/languages/count/jxhnkndl/readme-generator?style=plastic)
![html](https://img.shields.io/github/languages/top/jxhnkndl/readme-generator?style=plastic)
![commit](https://img.shields.io/github/last-commit/jxhnkndl/readme-generator?style=plastic)

## Table of Contents

* [Description](#description)
* [Technologies](#technologies)
* [Installation](#installation)
* [Usage](#usage)
* [Video Walktrhgouh](#video-walkthrough)
* [License](#license)
* [Contact](#contact)

## Description
This application partially automates the process of generating README documentation for new and existing repositories. Using a pre-built markdown template, the application uses command line prompts to collect information from the user about their application or repository. For more technical sections such as Installation or Usage, the application opens a text editor allowing the user to offer more detailed responses including markdown. Once the application has gathered all of the necessary information, it generates a clean, professionally formatted README populated with the user's responses.

## Technologies
* JavaScript
* Node.js
* Inquirer.js
* Command Line

## Installation
Before proceeding, verify that Node.js and npm are installed on your device. To check whether Node.js and npm are installed, open a terminal and run:
```
node -v
```
```
npm -v
```
Visit [Node.js](http://www.nodejs.org/) or [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) for installation details and docs.  

The README Generator also requires the Inquirer.js module. To install Inquirer from npm, navigate to the project's root directory and run:
```
npm install
```
Once Inquirer.js and its dependencies have been installed, the application is ready to use.

## Usage
To launch the application from the command line, navigate to the project's root directory and run:
```
node index.js
```
Questions that may require code blocks, markdown, or more details responses will prompt the user to open their default text editor. These questions will prompt the user to press "enter" to open their operating system's default text editor:
* **Windows Users:** The application will open Notepad.
* **Mac/Linux Users:** The application will open Vim. Once Vim is open, press "i" to begin typing. Once finished, press "esc" to complete the input followed by ":wq" to save and close the editor. 

## Video Walkthrough
The following video documents the entire user story from application launch through generation of a professionally formatted README. Use this video to supplement the documentation above:  

[![Application Preview](assets/readme-generator-demo.gif)](https://drive.google.com/file/d/1etho5UZRIpRxv737bAu4iUli7TLAbhLT/view)

## License
Copyright (c) 2021 J.K. Royston  
Licensed under the [MIT License](https://opensource.org/licenses/MIT).

## Contact
J.K. Royston  
<jkroyston@gmail.com>  
[GitHub](https://www.github.com/jxhnkndl)