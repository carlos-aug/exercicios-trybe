// Switch e Case

// 1. Crie uma variável para armazenar o estado da pessoa candidata no processo seletivo, que pode ser: 'aprovada' , 'lista' ou 'reprovada' ;

let processoSeletivo = "parabens";

switch(processoSeletivo){
    case "aprovada":
        console.log("parabéns, você foi aprovada");
        break;
    case "lista":
        console.log("você está na nossa lista de espera");
        break;
    case "reprovada":
        console.log("não foi dessa vez");
        break;
    default:
        console.log("tente novamente");
}
