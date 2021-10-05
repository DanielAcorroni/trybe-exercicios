function hydrate(alcoholic) {
    let numberFinder = /\d+/g;
    let numbers = alcoholic.match(numberFinder);
    let sum = 0;
  
    for (let counter = 0; counter < numbers.length; counter += 1) {
      sum = sum + parseInt(numbers[counter]);
    }
    let singular = `${sum} copo de água`;
    let plural = `${sum} copos de água`;
    
    if (sum === 1) {
      return singular;
    }
    return plural;
}

module.exports = hydrate;