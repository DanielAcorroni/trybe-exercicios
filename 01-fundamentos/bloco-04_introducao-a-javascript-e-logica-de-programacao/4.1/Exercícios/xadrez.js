let peçaXadrez = "Torre"

switch (peçaXadrez.toLowerCase()) {
    case "bispo":
        console.log("Diagonal");
        break;
    case "rainha":
        console.log("Any direction and any spaces");
        break;
    case "rei":
        console.log("Any direction, one space");
        break;
    case "cavalo":
        console.log("Moves in a L direction");
        break;
    case "torre":
        console.log("Any spaces in vertical or horizontal direction");
        break;
    case "peão":
        console.log("Two spaces in front on the first play and one space in front on the rest");
        break;
    default:
        console.log("Inválida");
}