const { encode, decode } = require('./encodeAndDecode.js');

describe('testa se encode e decode são functions', () => {
    test('testa se enconde é uma function', () => {
        expect(typeof encode).toBe('function');
    });
    test('testa se enconde é uma function', () => {
        expect(typeof decode).toBe('function');
    });
});

describe('testa se encode e decode tem o retorno correto', () => {
    test('testa retorno de encode("a, e, i, o, u")', () => {
        expect(encode('a, e, i, o, u')).toBe('1, 2, 3, 4, 5');
    });
    test('testa retorno de decode("1, 2, 3, 4, 5")', () => {
        expect(decode('1, 2, 3, 4, 5')).toBe('a, e, i, o, u')
    })
    test('testa se outras letras em encode não são convertidas', () => {
        expect(encode('x, p, k, l, w')).toBe('x, p, k, l, w');
    });
    test('testa se outros números não são convertidos', () => {
        expect(decode('6, 7, 8, 9')).toBe('6, 7, 8, 9')
    })
});

describe('testa se a legnth da entrada e da saída da função é a mesma', () => {
    test('testa se length = 1', () => {
        expect(encode('a').length).toBe(1);
    });
    test('esta se length = 4', () => {
        const lengthToCompare ='a, e'.length;
        expect(encode('a, e').length).toBe(lengthToCompare);
    });
    test('esta se length = 7', () => {
        const lengthToCompare = 'a, e, i'.length;
        expect(encode('a, e, i').length).toBe(lengthToCompare);
    });
    test('esta se length = 10', () => {
        const lengthToCompare = 'a, e, i, o'.length;
        expect(encode('a, e, i, o').length).toBe(lengthToCompare);
    });
    test('esta se length = 13', () => {
        const lengthToCompare = 'a, e, i, o, u'.length;
        expect(encode('a, e, i, o, u').length).toBe(lengthToCompare);
    });
    test('testa se length = 9', () => {
        expect(decode('123456789').length).toBe(9);
    });
    test('testa se length = 18', () => {
        expect(decode('123456789123456789').length).toBe(18);
    });
    test('testa se length = 27', () => {
        expect(decode('123456789123456789123456789').length).toBe(27);
    });
});