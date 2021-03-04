//packages required
const inquirer = require('inquirer');
const fs = require('fs');


//To Do: other links
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const { ENOTEMPTY } = require('constants');

const teamArr = [];


function promptManager() {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter Manager's name:",
        },
        {
            type: "input",
            name: "id",
            message: "Enter Manager's id:"
        },
        {
            type: "input",
            name: "office",
            message: "Enter the Manager's office number"
        },
        {
            type: "input",
            name: "email",
            message: "Enter the Manager's email"
        }
    ]).then(function({name, id, office, email}) {
        let manager = new Manager(name, id, office, email);
        teamArr.push(manager);
        
    })
}