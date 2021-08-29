const fs = require("fs")
const inquirer = require("inquirer")
let newHtml = require("./newHtml")
const createManager = newHtml.newManager
const createEngineer = newHtml.newEngineer
const createIntern = newHtml.newIntern
const processHTML = newHtml.appendtoMainHTML

function entries() {

    inquirer
        .prompt([
        {
            type: "response",
            name: "name",
            message: "What is the team member's name?",
        },
        {
            type: "number",
            name: "id",
            message: "What is the team member's ID number?",

        }, {
            type: "response",
            name: "email",
            message: "What is the team member's email?",
        },
        {
            type: "list",
            name: "role",
            message: "What is the team member's role",
            choices: [
                "Engineer",
                "Intern",
                "Manager",
            ]
            },
        ])
        .then(