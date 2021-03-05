const Manager = require('../lib/Manager')

describe('Manager', () => {
    describe('getName', () => {
        it('should return the name of the Manager', () => {
            const Yuri = new Manager('Yuri', 5, 'U.D@gmail.com', 'Manager', 1);
            const yuriName = 'Yuri';
            expect(Yuri.getName()).toBe(yuriName);
        })
    })
    describe('getID', () => {
        it('should return the ID of the Manager', () => {
            const Yuri = new Employee('Yuri', 5, 'U.D@gmail.com', 'Manager', 1);
            const yuriID = 5;
            expect(Yuri.getID()).toBe(yuriID);
        })
    })
    describe('getEmail', () => {
        it('should return the email of the Manager', () => {
            const Yuri = new Employee('Yuri', 5, 'U.D@gmail.com', 'Manager', 1);
            const yuriEmail = 'U.D@gmail.com';
            expect(Yuri.getEmail()).toBe(yuriEmail);
        })
    })
    describe('getRole', () => {
        it('should return the Role of the Manager', () => {
            const Yuri = new Employee('Yuri', 5, 'U.D@gmail.com', 'Manager', 1);
            const yuriRole = 'Employee';
            expect(Yuri.getRole()).toBe(yuriRole);
        })
    })
    describe('getoffice', () => {
        it('should return the Office Number of the Manager', () => {
            const Yuri = new Employee('Yuri', 5, 'U.D@gmail.com', 'Manager', 1);
            const yuriOffice = 1;
            expect(Yuri.getoffice()).toBe(yuriOffice);
        })
    })
})