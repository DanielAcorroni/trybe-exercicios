// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Morango', 'Banana', 'Uva'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Leite condensado', 'Chantilly', 'Gelatina'];

const fruitSalad = (fruit, additional) => [...fruit, ...additional];

console.log(fruitSalad(specialFruit, additionalItens));