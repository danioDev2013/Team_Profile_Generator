const Intern = require('../lib/Intern')

describe('Intern', () => {
    describe('getName', () => {
        it('should return the name of the Intern', () => {
            const Yuri = new Intern('Yuri', 5, 'U.D@gmail.com', 'Intern', 'University of Washington');
            const yuriName = 'Yuri';
            expect(Yuri.getName()).toBe(yuriName);
        })
    })
    describe('getID', () => {
        it('should return the ID of the Intern', () => {
            const Yuri = new Intern('Yuri', 5, 'U.D@gmail.com', 'Intern', 'University of Washington');
            const yuriID = 'Yuri';
            expect(Yuri.getID()).toBe(yuriID);
        })
    })
    describe('getEmail', () => {
        it('should return the email of the Intern', () => {
            const Yuri = new Engineer('Yuri', 5, 'U.D@gmail.com', 'Intern', 'University of Washington');
            const yuriEmail = 'U.D@gmail.com';
            expect(Yuri.getEmail()).toBe(yuriEmail);
        })
    })
    describe('getRole', () => {
        it('should return the Role of the Intern', () => {
            const Yuri = new Engineer('Yuri', 5, 'U.D@gmail.com', 'Intern', 'University of Washington');
            const yuriRole = 'Employee';
            expect(Yuri.getRole()).toBe(yuriRole);
        })
    })
    describe('getSchool', () => {
        it('should return the School of the Intern', () => {
            const Yuri = new Engineer('Yuri', 5, 'U.D@gmail.com', 'Intern', 'University of Washington');
            const yuriSchool = 'University of Washington';
            expect(Yuri.getSchool()).toBe(yuriSchool);
        })
    })
})