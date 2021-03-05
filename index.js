//packages required
const inquirer = require('inquirer');
const fs = require('fs');


//other links
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const renderHTML = require("./lib/renderHTML")


const teamArr = []; 

//starts the application
const init = () => {
    promptManager();
};

//Manager questions
const promptManager = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "managerName",
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
    ]).then(response => {
        const manager = new Manager(response.managerName, response.id, response.office, response.email, 'Manager');
        teamArr.push(manager);
        console.log(teamArr)
        promptSelection();

    })
}

//select new member
const promptSelection = () => {
    inquirer.prompt([
        {
            type: "list",
            name: "role",
            message: "Choose which role the new team member is:",
            choices: [
                "Engineer",
                "Intern",
                "Done"
            ]
        }
    ]).then(response => {
        const employee = response.role;
        if(employee == 'Engineer') {
            return promptEngineer();    
        } else if (employee == 'Intern') {
            return  promptIntern();
        } else if(employee == 'Done') {
           renderHTML(teamArr);
        }
    })
}

const promptEngineer = () => {
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
            name: "github",
            message: "Enter the Engineer's GitHub username:"
        },
        {
            type: "input",
            name: "email",
            message: "Enter the Engineer's email:"
        }
    ]).then(response => {
        const engineer = new Engineer(response.name, response.id, response.github, response.email, 'Engineer');
        teamArr.push(engineer);
        console.log(teamArr);
        promptSelection();
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
    ]).then(response => {
        const intern = new Intern(response.name, response.id, response.email, response.school, 'Intern');
        teamArr.push(intern);
        console.log(teamArr)
        promptSelection();
        });
}


init();

