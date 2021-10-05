const uppercase = require('./uppercase.js');

test('testa se "aeiou" retorna "AEIOU"', (done) => {
    uppercase('aeiou', (callback) => {
        try {
            expect(callback).toBe('AEIOU');
            done();
        } catch (error) {
            done(error);
        }
    });
});