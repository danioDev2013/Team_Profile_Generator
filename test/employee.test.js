const Employee = require('../lib/Employee');

describe('Employee', () => {
    describe('getName', () => {
        it('should return the name of the employee', () => {
            const Yuri = new Employee('Yuri', 5, 'U.D@gmail.com', 'Employee');
            const yuriName = 'Yuri';
            expect(Yuri.getName()).toBe(yuriName);
        })
    })
    describe('getID', () => {
        it('should return the ID of the employee', () => {
            const Yuri = new Employee('Yuri', 5, 'U.D@gmail.com', 'Employee');
            const yuriID = 5;
            expect(Yuri.getID()).toBe(yuriID);
        })
    })
    describe('getEmail', () => {
        it('should return the email of the employee', () => {
            const Yuri = new Employee('Yuri', 5, 'U.D@gmail.com', 'Employee');
            const yuriEmail = 'U.D@gmail.com';
            expect(Yuri.getEmail()).toBe(yuriEmail);
        })
    })
    describe('getRole', () => {
        it('should return the Role of the employee', () => {
            const Yuri = new Employee('Yuri', 5, 'U.D@gmail.com', 'Employee');
            const yuriRole = 'Employee';
            expect(Yuri.getRole()).toBe(yuriRole);
        })
    })
})