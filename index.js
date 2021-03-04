//packages required
const inquirer = require('inquirer');
const fs = require('fs');


//other links
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");


const teamArr = [];

function init() {
    htmlStart();
    promptManager();

}
//quewtions for manager
function promptManager() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter the Manager's name:",
        },
        {
            type: "input",
            name: "id",
            message: "Enter the Manager's id:"
        },
        {
            type: "input",
            name: "office",
            message: "Enter the Manager's office number:"
        },
        {
            type: "input",
            name: "email",
            message: "Enter the Manager's email:"
        }
    ]).then(function ({ name, id, office, email }) {
        let manager = new Manager(name, id, office, email);
        teamArr.push(manager);
        htmlCards(manager);
        promptMemberInfo();
    })
}

//new member
function promptMemberInfo() {
    inquirer.prompt([
        {
            type: "list",
            name: "role",
            message: "Choose which role the new team member is:",
            choices: [
                "Engineer",
                "Intern",
                "No more team member's"
            ]
        },
    ]).then(function ({ role }) {
        switch (role) {
            case "Engineer":
                return promptEngineer();
            case "Intern": 
                return promptIntern();
            default:
                htmlInfo();
        }
    });
}

function promptEngineer() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter the Engineer's name:",
        },
        {
            type: "input",
            name: "id",
            message: "Enter the Engineer's id:"
        },
        {
            type: "input",
            name: "office",
            message: "Enter the Engineer's office number:"
        },
        {
            type: "input",
            name: "email",
            message: "Enter the Engineer's email:"
        }
    ]).then(function ({ name, id, office, email }) {
        let engineer = new Engineer(name, id, office, email);
        teamArr.push(engineer);
        htmlCards(engineer);
        promptMemberInfo();
        });
}

function promptIntern() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter the Intern's name:",
        },
        {
            type: "input",
            name: "id",
            message: "Enter the Intern's id:"
        },
        {
            type: "input",
            name: "email",
            message: "Enter the Intern's email:"
        },
        {
            type: "input",
            name: "school",
            message: "Enter the Intern's school:"

        }
    ]).then(function ({ name, id, email, school }) {
        let intern = new Intern(name, id, email, school);
        teamArr.push(intern);
        htmlCards(intern);
        promptMemberInfo();
        });
}

function htmlStart() {

}