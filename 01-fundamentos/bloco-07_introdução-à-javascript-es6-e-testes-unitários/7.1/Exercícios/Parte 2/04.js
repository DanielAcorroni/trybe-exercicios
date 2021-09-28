const xSubstitute = (string, word) => {
    const splitedString = string.split(' ');
    let variableReturn = '';
    splitedString.forEach(element => {
        if (element === 'x') {
            variableReturn = `${variableReturn} ${word}`;
        } else {
            variableReturn = `${variableReturn} ${element}`;
        }
    });
    return variableReturn;
}

console.log(xSubstitute("Tryber x aqui!", "Bebeto"));

const addSkills = (...skills) => {
    const phraseToAdd = xSubstitute("Tryber x aqui!", "Bebeto");
    return `${phraseToAdd} Minhas cinco principais habilidades são:
    ${skills}`
}

console.log(addSkills('JavaScript', 'HTML', 'CSS', 'Git'));