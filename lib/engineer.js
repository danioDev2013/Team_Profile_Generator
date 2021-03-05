const Employee = require("./employee");

class Engineer extends Employee {
    constructor (name, id, github, email, role) {
        super(name, id, email, role);
        this.github = github;
    }
    getGithub() {
        return this.github;
    }
}

module.exports = Engineer;