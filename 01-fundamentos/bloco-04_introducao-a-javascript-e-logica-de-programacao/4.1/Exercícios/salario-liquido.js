let salarioBruto = 3000.00;
let salarioMenosInss = null;
let impostoDeRenda = null;

if (salarioBruto >= 0 && salarioBruto <= 1556.94) {
    salarioMenosInss = (salarioBruto - (salarioBruto / 100) * 8);
}

else if (salarioBruto >= 1556.95 && salarioBruto <=2594.92) {
    salarioMenosInss = (salarioBruto - (salarioBruto / 100) * 9);
}

else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    salarioMenosInss = (salarioBruto - (salarioBruto / 100) * 11);
}

else if (salarioBruto > 5189.82) {
    salarioMenosInss = (salarioBruto - 570.88);
}

else {
    console.log("Erro");
}

if (salarioMenosInss >= 0 && salarioMenosInss <=1903.98) {
    impostoDeRenda = 0;
}

else if (salarioMenosInss >= 1903.99 && salarioMenosInss <= 2826.65) {
    impostoDeRenda = ((salarioMenosInss / 100) * 7.5) - 142.80;
}

else if (salarioMenosInss >= 2826.66 && salarioMenosInss <= 3751.05) {
    impostoDeRenda = ((salarioMenosInss / 100) * 15) - 354.80;
}

else if (salarioMenosInss >= 3751.06 && salarioMenosInss <= 4664.68) {
    impostoDeRenda = ((salarioMenosInss / 100) * 22.5) - 636.13;
}

else if (salarioMenosInss > 4664.68) {
    impostoDeRenda = ((salarioMenosInss / 100) * 27.5) - 869.36;
}

else {
    console.log("Erro");
}

let salarioLiquido = salarioMenosInss - impostoDeRenda;

console.log(salarioLiquido);