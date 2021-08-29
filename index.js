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
            function ({ name, id, email, role }) {
                if (role === "Engineer") {
                        inquirer
                            .prompt({
                                type: "response",
                                name: "github",
                                message: "What is the team member's GitHub username?",
                            }).then(
                                function ({ github }) {
                                    createEngineer(name, id, email, github)
                                    teamMembers()
                                }
                            )
                } else if (role === "Intern") {
                        inquirer
                            .prompt({
                                type: "response",
                                name: "school",
                                message: "What school does the team member attend?",
                            }).then(
                                function ({ school }) {
                                    createIntern(name, id, email, school)
                                    teamMembers()
                                }
                            )
                } else {
                        inquirer
                            .prompt({
                                type: "number",
                                name: "officeNumber",
                                message: "What is the team member's Office Number?",
                            }).then(
                                function ({ officeNumber }) {
                                    createManager(name, id, email, officeNumber)
                                    teamMembers()
                                }
                            )
                }
            })

}

function teamMembers() {
    inquirer.prompt(
    {
        type: "list",
        name: "teamMembers",
        message: "Add more team members?",
        choices: [
            "Yes",
            "No"
        ]
    })
    .then(
        function ({ teamMembers }) {
            console.log("Additional:", teamMembers)
            if (teamMembers === "Yes") {
                entries();
            } else {     
                processHTML()
            }
        }
    )
        .catch(err => {
            console.log("Error", err)
            throw err
        })
}


entries()