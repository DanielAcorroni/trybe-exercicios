const fatorial = number => {
    let multiply = 1
    for (let counter = number; counter > 0; counter -= 1) {
        multiply = multiply * counter;
    }
    console.log(multiply)
}

fatorial(10)