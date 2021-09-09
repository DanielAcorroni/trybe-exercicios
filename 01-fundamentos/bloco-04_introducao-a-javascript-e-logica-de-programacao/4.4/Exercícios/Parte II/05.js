function repeatedNumber(numbers) {

    let repeatNumber = "";

    let repeat = 0;

    for (let counter = 0; counter < numbers.length; counter += 1) {

        let presentNumber = numbers[counter];

        let min = 0;
        
        for (let counter = 0; counter < numbers.length; counter += 1) {
            
            if (presentNumber === numbers[counter]) {

                min += 1;

            }

            if (min > repeat) {

                repeat = min;

                repeatNumber = presentNumber;
            }

        }

    }

    return repeatNumber;

}

console.log(repeatedNumber([2, 3, 2, 5, 8, 2, 3]));