let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  };

console.log("");
// Exercício 01

console.log("Bem vinda, " + info.personagem);

console.log("");
// Exercício 02

info["recorrente"] = "Sim";

console.log(info);

console.log("");
// Exercício 03

for (let keys in info) {
    console.log(keys);
}

console.log("");
// Exercício 04

for (let keys in info) {
    console.log(info[keys]);
}

console.log("");
// Exercício 05

let info02 = {
    personagem: ["Margarida", "Tio Patinhas"],
    origem: ["Pato Donald", "Christmas on Bear Mountain, Dell's Four Color Comics #178"],
    nota: ["Namorada do personagem principal nos quadrinhos do Pato Donald", "O último MacPatinhas"],
    recorrente: "Ambos recorrentes"
  };

for (let keys in info02) {
    console.log(info02[keys]);
}
