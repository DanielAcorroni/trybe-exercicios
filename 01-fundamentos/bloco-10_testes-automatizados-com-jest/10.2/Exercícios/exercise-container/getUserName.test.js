const getUserName = require('./getUserName.js');

describe('testa retorno da função getUserName', () => {
    test('testa o retorno caso o id seja existente', () => {
        getUserName(1).then((userName) => {
            expect(userName).toBe('Mark');
        });
        getUserName(2).then((userName) => {
            expect(userName).toBe('Paul');
        });
    });
    test('testa caso o id seja inexistente', () => {
        expect.assertions(1);
        return getUserName(3).catch((error) => {
            expect(error.message).toMatch(`User with 3 not found.`);
        })
    })
});

describe('mesmo teste acima só que com o async/await', () => {
    test('testa o retorno caso o id seja existente', async () => {
        const userName1 = await getUserName(1);
        expect(userName1).toBe('Mark');
        const userName2 = await getUserName(2);
        expect(userName2).toBe('Paul');
    });
    test('testa caso o id seja inexistente', async () => {
        try { await getUserName(3) }
        catch (error) {
            expect(error.message).toMatch(`User with 3 not found.`);
        }
    })
})