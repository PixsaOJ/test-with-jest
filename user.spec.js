import User from './user'

describe('User', () => {
    test('name returs full name', () => {
        const user = new User( {firstname: 'Jane',  lastname: 'Doe'} )
        expect(user.name).toBe('Jane Doe');
    });
});
