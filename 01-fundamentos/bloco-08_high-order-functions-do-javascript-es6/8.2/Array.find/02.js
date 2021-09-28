const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = (name) => name.length === 5;

console.log(findNameWithFiveLetters('Maria'));

console.log(names.find(findNameWithFiveLetters));