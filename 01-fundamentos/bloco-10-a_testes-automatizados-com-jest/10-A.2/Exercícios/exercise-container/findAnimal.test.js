const { findAnimalByAge, findAnimalByName, findAnimalsByType } = require('./findAnimal.js');

describe('Testando promise - findAnimalsByType', () => {
    describe('Quando o tipo do animal existe', () => {
      test('Retorne a lista de animais', () => (
        findAnimalsByType('Dog').then((listDogs) => {
          expect(listDogs[0].name).toEqual('Dorminhoco');
          expect(listDogs[1].name).toEqual('Soneca');
        })
    ));
});
  
describe('Quando o tipo do animal, não existe', () => {
      test('Retorne a lista de animais', () => {
        expect.assertions(1);
        return findAnimalsByType('Lion').catch((error) => (
          expect(error.message).toMatch('Não possui esse tipo de animal.')
        ));
      });
    });
});
  
describe('Testando promise - findAnimalByName', () => {
    describe('Quando existe o animal com o nome procurado', () => {
      test('Retorne o objeto do animal', () => (
        findAnimalByName('Dorminhoco').then((animal) => {
          expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
        })
      ));
});
  
describe('Quando não existe o animal com o nome procurado', () => {
      test('Retorna um erro', () => {
          expect.assertions(1);
          return findAnimalByName('Bob').catch((error) => {
          expect(error.message).toEqual('Nenhum animal com esse nome!');
        });
      });
    });
});
  
describe('Testando promise - findAnimalByAge', () => {
    describe('Quando existe o animal com o a idade', () => {
      test('Verifique o primeiro nome do animal no array retornado', () => {
        const animals = [{ name: 'Preguiça', age: 5, type: 'Cat' }];
        return expect(findAnimalByAge(5)).resolves.toEqual(animals);
      });
});
  
describe('Quando não existe o animal com o nome procurado', () => {
      test('Retorna um erro', () => {
        expect.assertions(1);
        return expect(findAnimalByAge(3)).rejects
          .toEqual(new Error('Nenhum animal encontrado!'));
      });
    });
});