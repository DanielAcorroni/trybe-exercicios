function smallerNumber(numbers) {
    let min = 0;

 for (let contador = 0; contador < numbers.length; contador += 1) {
    min = (min + numbers[contador]);
 }

 for (let compare of numbers) {
    if (compare < min) {
        min = numbers.indexOf(compare);
    }
 }

 return min;

}

console.log(smallerNumber([2, 4, 6, 7, 10, 0, -3]));