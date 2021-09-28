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

//01
const rearrangementArray = books.map((unityBook) => `${unityBook.name} - ${unityBook.genre} - ${unityBook.author.name}`);
assert.deepStrictEqual(rearrangementArray, [ 'As Crônicas de Gelo e Fogo - Fantasia - George R. R. Martin', 'O Senhor dos Anéis - Fantasia - J. R. R. Tolkien', 'Fundação - Ficção Científica - Isaac Asimov', 'Duna - Ficção Científica - Frank Herbert', 'A Coisa - Terror - Stephen King', 'O Chamado de Cthulhu - Terror - H. P. Lovecraft']);

//02
const expectedResult = [
    {
      age: 31,
      author: 'Isaac Asimov',
    },
    {
      age: 38,
      author: 'H. P. Lovecraft',
    },
    {
      age: 39,
      author: 'Stephen King',
    },
    {
      age: 43,
      author: 'George R. R. Martin',
    },
    {
      age: 45,
      author: 'Frank Herbert',
    },
    {
      age: 62,
      author: 'J. R. R. Tolkien',
    },
];

const authorsBook = books.map((unityBook) => ({author: unityBook.author.name, age: unityBook.releaseYear - unityBook.author.birthYear}));
authorsBook.sort((authorA, authorB) => authorA.age - authorB.age);
assert.deepStrictEqual(authorsBook, expectedResult);

//03
const expectedResult01 = [
    { 
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: { name: 'George R. R. Martin', birthYear: 1948 },
      releaseYear: 1991
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
      releaseYear: 1954
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: { name: 'Isaac Asimov', birthYear: 1920 },
      releaseYear: 1951
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: { name: 'Frank Herbert', birthYear: 1920 },
      releaseYear: 1965
    }
];

const genreSeparate = books.filter((unityBook) => unityBook.genre === 'Ficção Científica' || unityBook.genre ==='Fantasia');
assert.deepStrictEqual(genreSeparate, expectedResult01);

//04
const expectedResult02 = [
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: { name: 'H. P. Lovecraft', birthYear: 1890 },
      releaseYear: 1928,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: { name: 'Isaac Asimov', birthYear: 1920 },
      releaseYear: 1951,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
      releaseYear: 1954,
    },
];

const currentYear = new Date().getFullYear();
const oldBooks = books.filter((unityBook) => currentYear - unityBook.releaseYear > 60);
oldBooks.sort((bookA, bookB) => bookA.releaseYear - bookB.releaseYear);
assert.deepStrictEqual(oldBooks, expectedResult02);

//05
const expectedResult03 = [
    'Frank Herbert',
    'George R. R. Martin',
    'Isaac Asimov',
    'J. R. R. Tolkien',
];

const sortedGenreSeparate = genreSeparate.map((unityBook) => unityBook.author.name);
sortedGenreSeparate.sort();
assert.deepStrictEqual(sortedGenreSeparate, expectedResult03);

//06
const expectedResult04 = [
    'O Senhor dos Anéis',
    'Fundação',
    'O Chamado de Cthulhu',
];

const notSortedOldBooks = books.filter((unityBook) => currentYear - unityBook.releaseYear > 60);
const oldBooksNames = notSortedOldBooks.map((unityOldBook) => unityOldBook.name);
assert.deepEqual(oldBooksNames, expectedResult04);

//07
const threeInitialsName = books
    .find((unityBook) => (unityBook.author.name.split(' ').filter((splitedString) => splitedString.endsWith('.')).length === 3)).name;
assert.strictEqual(threeInitialsName, 'O Senhor dos Anéis');