// Na linguagem JavaScript, temos três principais operadores lógicos: && , || e o ! . Podemos nos referir a eles como "AND", "OR" e "NOT", respectivamente.

// Operador AND (&&)
// Esse operador é binário. O que significa que ele precisa de dois elementos para funcionar corretamente.

// 1.Crie uma constante chamada "currentHour" que recebe um número entre 4 e 24 de sua escolha, para representar as horas do dia.
    const currentHour = 13.59;

// 2.Crie uma variável chamada "message" que, inicialmente, é uma string vazia.
    let message = "";

// 3. Implemente condicionais para que:
// Se o horário for maior ou igual a 22, insira "Não deveríamos comer nada, é hora de dormir" na variável "message".
// Se o horário for maior ou igual a 18 e menor que 22, insira "Rango da noite, vamos jantar :D" na variável "message".
// Se o horário for maior ou igual a 14 e menor que 18, insira "Vamos fazer um bolo pro café da tarde?" na variável "message".
// Se o horário estiver entre 11 e 14, insira "Hora do almoço!!!" na variável "message".
// Se o horário estiver entre 4 e 11, insira "Hmmm, cheiro de café recém passado" na variável "message".

if(currentHour >= 22){
    message = ('Não deveríamos comer nada, é hora de dormir');
} else if(currentHour >= 18 && currentHour < 22){
    message = ('Rango da noite, vamos jantar :D');
} else if(currentHour >= 14 && currentHour < 18){
    message = ('Vamos fazer um bolo pro café da tarde?');
} else if(currentHour > 11 && currentHour < 14){
    message = ('Hora do almoço!!!');
} else {
    message = ('Hmmm, cheiro de café recém passado')
}

// 4.Agora imprima a variável message fora das suas condições.
console.log(message);

// Operador OR

// 1.Crie uma variável chamada "weekDay" que recebe a string "quarta-feira".

    let weekDay = 'sabado';

// 2.Implemente condicionais para que:
// Se nossa variável "weekDay" for "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira" ou "sexta-feira", imprima "Oba, mais um dia de aprendizado na Trybe >:D".
// Se for algum dia de fim de semana, imprima "FINALMENTE, descanso merecido UwU".
// Experimente trocar o valor da string ou até mesmo montar seu próprio algoritmo. Esse assunto é muito importante para seu aprendizado :).

    if(weekDay == "segunda-feira" || weekDay == "terça-feira" || weekDay == "quarta-feira" || weekDay == "quinta-feira" || weekDay == "sexta-feira"){
        console.log("Oba, mais um dia de aprendizado na Trybe >:D");
    } else {
        console.log("FINALMENTE, descanso merecido UwU");
    }

// Operador NOT

// Vamos iniciar com um exemplo do que o NOT é capaz, você consegue prever o que esse código vai imprimir?
  console.log((2 + 2) === 4);
// Isso aqui deve nos retornar true , não é? Afinal, 2 + 2 resultar em 4 é uma declaração verdadeira. Agora, se adicionarmos o operador NOT antes dessa declaração?

// Se você executar esse código, vai perceber que o valor impresso é o oposto do anterior. 🤔
console.log(!(2 + 2) === 4);
// Ele pode inverter o valor booleano de um elemento. Isso mesmo!! Se tivermos uma variável ou valor considerado true , podemos gerar o resultado oposto simplesmente fazendo !variável . Ou seja, false .

console.log(!42); // false

console.log(!0); // true
// O número 0 tem o valor "falsy" no javascript. Logo, seu oposto é true.