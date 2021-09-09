let anguloA = 90;

let anguloB = 45;

let anguloC = 45;

if (anguloA + anguloB + anguloC === 180) {
    console.log(true);
}

else if (anguloA <= 0 || anguloB <= 0 || anguloC <= 0) {
    console.log("erro");
}

else {
    console.log(false);
}