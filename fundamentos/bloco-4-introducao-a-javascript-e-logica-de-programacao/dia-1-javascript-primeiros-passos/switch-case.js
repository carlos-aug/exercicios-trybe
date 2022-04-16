// 1.Crie uma variável para armazenar o estado da pessoa candidata no processo seletivo, que pode ser: 'aprovada' , 'lista' ou 'reprovada' ;

let note = 80;

// 2.Crie uma estrutura condicional com o switch/case que irá imprimir as mensagens do exercício anterior se o estado da pessoa candidata for 'aprovada' , 'lista' ou 'reprovada' . Como default , imprima a mensagem de 'não se aplica' .

switch (note) {
    case 80:
        console.log('aprovada');
        break;

    case 60:
        console.log('lista');
        break;

    case 50:
        console.log('reprovada');
        break;
    
    default: 
        console.log('não se aplica')
}