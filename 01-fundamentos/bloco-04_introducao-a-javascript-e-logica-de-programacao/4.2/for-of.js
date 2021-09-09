let frase = "Star Wars Episódio III: A Vingança dos Sith";

let letra = "a";

let numeroDeRepeticaoFrase = 0;

for (let letraFrase of frase) {
    if (letraFrase.toLowerCase() === letra.toLowerCase()) {
        numeroDeRepeticaoFrase += 1
        console.log(numeroDeRepeticaoFrase);
    }
}