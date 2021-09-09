function sumNumbers(n) {

    let total = 0
    
    for (let counter = 0; counter <= n; counter += 1) {

        total = total + counter

    }

    return total;
}

console.log(sumNumbers(5))