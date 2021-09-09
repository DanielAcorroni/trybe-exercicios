let numbers = [];

let dividedByTwo = [];

for (contador = 1; contador < 26; contador += 1) {
    numbers.push(contador);
}

for (let division of numbers) {
    let divide = division / 2
    dividedByTwo.push(divide);
}

console.log(dividedByTwo);