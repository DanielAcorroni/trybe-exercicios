const test = (template, studentAnswers, callback) => callback(template, studentAnswers);

const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const templateCheck = (template, testAnswers) => {
    let totalGrade = 0;
    for (let counter = 0; counter < template.length; counter += 1) {
        if (template[counter] === testAnswers[counter]) {
            totalGrade += 1
        } else if (testAnswers[counter] === 'N.A') {
            totalGrade += 0
        } else {
            totalGrade -= 0.5
        }
    }
    return `${totalGrade}/10`
}

console.log(test(rightAnswers, studentAnswers, templateCheck));