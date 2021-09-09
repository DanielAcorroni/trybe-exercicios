let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let min = 0;

for (let contador = 0; contador < numbers.length; contador += 1) {
    min = (min + numbers[contador]);
}

for (let compare of numbers) {
    if (compare < min) {
        min = compare;
    }
}

console.log(min);