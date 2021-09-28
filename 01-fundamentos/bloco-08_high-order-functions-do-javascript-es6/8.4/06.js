const assert = require('assert');

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {
    const nameAndAverage = students.map((element, index) => ({
        name: element,
        average: (grades[index].reduce((acc, number, gradeIndex) => {
            let sum = 0
            if (gradeIndex !== grades[index].length - 1) {
                sum = acc + number;
            } else {
                sum = (acc + number) / (gradeIndex + 1)
            }
            return sum;
        }, 0))
    }))
    return nameAndAverage;
}

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

assert.deepStrictEqual(studentAverage(), expected);