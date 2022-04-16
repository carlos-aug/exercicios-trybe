let trybe = 16;

if(trybe >= 14 && trybe < 15){
    console.log('Esquenta');
} else if (trybe >= 15 && trybe < 17.50 ){
    console.log('Aula ao vivo');
} else if (trybe >= 17.50 && trybe < 19){
    console.log('Exercícios');
} else {
    console.log('Fora dos momentos síncronos');
};

// 1.Crie uma constante que receba a nota de uma pessoa candidata em um desafio técnico, e atribua a ela um valor entre 1 e 100;

const note = 30;

// 2.Implemente uma lógica que verifique se a pessoa candidata foi aprovada, reprovada ou se ela está na lista de espera. Para isso, considere as seguintes informações:
// Se a nota for maior ou igual a 80, imprima "Parabéns, você foi aprovada(o)!"
// Se a nota for menor que 80 e maior ou igual a 60, imprima "Você está na nossa lista de espera"
// Se a nota for menor que 60, imprima "Você foi reprovada(o)"

if(note >= 80){
    console.log('Parabéns, você foi aprovada(o)');
} else if(note < 80 && note >= 60 ){
    console.log('Você está na nossa lista de espera');
} else {
    console.log('Você foi reprovada(o)');
}

// 3.Crie uma estrutura condicional utilizando o if , else if e else para criar o seu algoritmo, e os operadores lógicos que se aplicam a cada situação.

let beHaved = true;
let media = 60;

if(beHaved == true && media < 80){
    console.log('Não pode brincar! Você deve estudar mais')
} else if(beHaved == false && media >= 80){
    console.log('Não pode brincar! Você deve melhorar seu comportamento');
} else if(beHaved == false && media < 80){
    console.log('Não pode brincar! Você deve melhorar seu comportamento e sua nota');
} else {
    console.log('Pode brincar!');
}

// 4.Altere o valor da nota para verificar se as condições que você implementou funcionam;