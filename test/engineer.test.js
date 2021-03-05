const Engineer = require('../lib/Engineer')

describe('Engineer', () => {
    describe('getName', () => {
        it('should return the name of the Engineer', () => {
            const Yuri = new Engineer('Yuri', 5, 'U.D@gmail.com', 'Engineer', 'u.d_Engineer');
            const yuriName = 'Yuri';
            expect(Yuri.getName()).toBe(yuriName);
        })
    })
    describe('getID', () => {
        it('should return the ID of the Engineer', () => {
            const Yuri = new Engineer('Yuri', 5, 'U.D@gmail.com', 'Engineer', 'u.d_Engineer');
            const yuriID = 5;
            expect(Yuri.getID()).toBe(yuriID);
        })
    })
    describe('getEmail', () => {
        it('should return the email of the Engineer', () => {
            const Yuri = new Engineer('Yuri', 5, 'U.D@gmail.com', 'Engineer', 'u.d_Engineer');
            const yuriEmail = 'U.D@gmail.com';
            expect(Yuri.getEmail()).toBe(yuriEmail);
        })
    })
    describe('getRole', () => {
        it('should return the Role of the Engineer', () => {
            const Yuri = new Engineer('Yuri', 5, 'U.D@gmail.com', 'Engineer', 'u.d_Engineer');
            const yuriRole = 'Employee';
            expect(Yuri.getRole()).toBe(yuriRole);
        })
    })
    describe('getGitHub', () => {
        it('should return the GitHub username of the Engineer', () => {
            const Yuri = new Engineer('Yuri', 5, 'U.D@gmail.com', 'Engineer', 'u.d_Engineer');
            const yuriGitHub = 'u.d_Engineer';
            expect(Yuri.getGitHub()).toBe(yuriGitHub);
        })
    })
})