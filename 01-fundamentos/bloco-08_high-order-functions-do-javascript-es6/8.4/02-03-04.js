const assert = require('assert');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

//Exercício 02
const expectedResult = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";
const mappedNames = books.map((element) => element.author.name)
const reduceNames = mappedNames.reduce((acc, elements, index) => {
    let names = `${acc}, ${elements}`;
    if (index === mappedNames.length - 1) {
        names = `${acc}, ${elements}.`;
    }
    return names;
})

assert.strictEqual(reduceNames, expectedResult);

//Exercício 03
const expectedResult1 = 43;
const mappedAges = books.map((elements) => elements.releaseYear - elements.author.birthYear);
const averageAge = mappedAges.reduce((acc, elements, index) => {
    let average = acc + elements;
    if (index === mappedAges.length -1) {
        average = (acc + elements) / (index + 1);
    }
    return average;
}, 0);

assert.strictEqual(averageAge, expectedResult1);

//Exercício 04
const expectedResult2 = {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
};

const getBookNames = books.map((elements) => elements.name);
const biggerName = getBookNames.reduce((bigger, name) => (bigger.length > name.length) ? bigger : name)
let biggerNameObject;
books.forEach((element) => {if (element.name === biggerName) {
    biggerNameObject = element
}})

assert.deepStrictEqual(biggerNameObject, expectedResult2);