const myRemoveWithoutCopy = require('./03.js');

const usedArray = [1, 2, 3, 4];
const arrayToCompare = [1, 2, 3, 4];
const actualRemoveThree = myRemoveWithoutCopy(usedArray, 3);

test('testa se quando pedido o número 3 é removido', () => {
    expect(actualRemoveThree).toEqual([1, 2, 4]);
});
test('testa se o retorno não é [1, 2, 3, 4]', () => {
    expect(actualRemoveThree).not.toEqual([1, 2, 3, 4]);
})
test('testa se a função não retorna o array inalterado', () => {
    expect(actualRemoveThree).not.toEqual(arrayToCompare);
});