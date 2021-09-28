const miniSena = (playedNumber, callback) => {
    if (playedNumber < 1 || playedNumber > 5) {
        return 'Número inválido'
    }
    return callback(playedNumber);
};

const numberValidation = number => {
    const sortNumber = Math.floor(Math.random() * (5) + 1);
    if (number === sortNumber) {
        console.log(sortNumber);
        return 'Parabéns você ganhou';
    }
    console.log(sortNumber);
    return 'Tente novamente';
};

console.log(miniSena(5, numberValidation));