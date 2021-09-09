function biggerNumber(numbers) {
    
    let max = 0;

 for (let compare of numbers) {
    if (compare > max) {
        max = numbers.indexOf(compare);
    }
 }
 return max;

}

console.log(biggerNumber([2, 3, 6, 7, 10, 1]));