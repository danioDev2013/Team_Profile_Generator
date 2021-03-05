const Employee = require ("./employee");

class Manager extends Employee {
    constructor (name, id, office, email, role) {
        super (name, id, email, role);
        this.office = office;
    }
    getoffice() {
        return this.office;
    }
}

module.exports = Manager;