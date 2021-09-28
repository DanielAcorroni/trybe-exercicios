const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const turnToOneString = names.reduce((acc, individualName) => {
    let fullString = `${acc}${individualName}`
    fullString = fullString.toLowerCase();
    return fullString;
}, '')

let containsA = 0;
for (let justA of turnToOneString) {
    if (justA === 'a') {
        containsA += 1
    }
}

assert.deepStrictEqual(containsA, 20);