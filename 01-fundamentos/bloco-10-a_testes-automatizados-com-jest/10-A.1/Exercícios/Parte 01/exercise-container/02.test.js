const myRemove = require('./02.js');

const actualRemoveThree = myRemove([1, 2, 3, 4], 3);
describe('testes pedindo a retirada do número 3 de uma array', () => {
    test('verifica se a array pedida não contém o número 3', () => {
        expect(actualRemoveThree).toEqual([1, 2, 4]);
    });
    test('verifica se não retorna o array [1, 2, 3, 4]', () => {
        expect(actualRemoveThree).not.toEqual([1, 2, 3, 4]);
    });
});

describe('testa se os arrays devolvidos são os originais', () => {
    test('dado [1, 2, 3, 4], 4 não retorna [1, 2, 3, 4]', () => {
        expect(myRemove([1, 2, 3, 4], 4)).not.toEqual([1, 2, 3, 4]);
    });
    test('dado [5, 6, 7, 8], 7 não retorna [5, 6, 7, 8]', () => {
        expect(myRemove([5, 6, 7, 8], 7)).not.toEqual([5, 6, 7, 8]);
    });
    test('dado [5, 6, 7, 8], 5 não retorna [5, 6, 7, 8]', () => {
        expect(myRemove([5, 6, 7, 8], 7)).not.toEqual([5, 6, 7, 8]);
    });
    test('dado [1, 2, 3, 4], 2 não retorna [1, 2, 3, 4]', () => {
        expect(myRemove([1, 2, 3, 4], 2)).not.toEqual([1, 2, 3, 4]);
    });
});

test('verifica se dado [1, 2, 3, 4], 5 retorna [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
});