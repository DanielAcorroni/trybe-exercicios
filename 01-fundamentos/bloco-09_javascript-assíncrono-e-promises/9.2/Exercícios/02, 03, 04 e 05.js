const promiseFunction = () => {
    const myArraySum = [];
    let resultDivided;
    const promiseAction = new Promise((resolve, reject) => {
        const myArray = Array.from(
            { length: 10 },
            () =>  Math.floor(Math.random() * 50) + 1
        );
        const sum = myArray.map((number) => number * number).reduce((acc, actual) => acc + actual);
        const numbersToDivide = [2, 3, 5, 10];
        resultDivided = numbersToDivide.map(number => sum / number)
        myArraySum.push(myArray.reduce((acc, actual) => acc + actual));

        if (sum < 8000) { resolve() }
        else { reject() }
    });

    promiseAction
      .then(() => console.log('Soma do quadrado dos números menor que 8000'))
      .then(() => console.log(`A divisão do resultado pelos número 2, 3, 5 e 10 é: `, resultDivided))
      .then(() => console.log(`Soma dos números gerados é ${myArraySum}`))
      .catch(() => console.log('ERROR!!: É mais de oito mil! Essa promise deve estar quebrada!'));
}

promiseFunction();