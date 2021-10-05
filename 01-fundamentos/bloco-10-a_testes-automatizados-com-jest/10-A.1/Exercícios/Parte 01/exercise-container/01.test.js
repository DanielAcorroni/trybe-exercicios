const sum = require('./01.js')

const actualFourFive = sum(4, 5);
test('verifica se 4 + 5 = 9', () => {
    expect(actualFourFive).toBe(9)
})

const actualZero = sum(0, 0);
test('verifica se 0 + 0 = 0', () => {
    expect(actualZero).toBe(0);
})

test('verifica se um erro é lançado quando se coloca uma string no parâmetro', () => {
    expect(() => { sum(4, '5') }).toThrowError(new Error('parameters must be numbers')) })