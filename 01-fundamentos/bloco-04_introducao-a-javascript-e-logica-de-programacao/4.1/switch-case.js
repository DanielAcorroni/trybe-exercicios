let processoSeletivo = "Aprovado";

switch (processoSeletivo) {
    case "Aprovado":
        console.log("Parabéns pela aprovação");
        break;
    
    case "Reprovado":
        console.log("Você foi reprovado no processo");
        break;

    case "Lista":
        console.log("Seu nome se encontra na lista de espera");
        break;

    default:
        console.log("Seu nome não consta na lista de participantes");
}