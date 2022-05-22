// const pizzas = [
//     { sabor: 'Frango com catupiry', preco: 15.00 },
//     { sabor: 'Marguerita', preco: 13.00 },
//     { sabor: 'Quatro queijos', preco: 18.00 },
//     { sabor: 'Pepperone', preco: 14.00 },
//     { sabor: 'Camarão', preco: 20.00 },
// ];

// const saborAbaixoDeQuinze = () => pizzas.some( (pizza) => {
//     pizza.preco > 15;
// } );

// console.log(saborAbaixoDeQuinze())

// --------------------------------------------------------------------------------------------//

const users = [
    { firstName: 'Homer', lastName: 'Simpson', canDriver: true},
    { firstName: 'Marge', lastName: 'Simpson', canDriver: true},
    { firstName: 'Bart', lastName: 'Simpson', canDriver: true},
    { firstName: 'Lisa', lastName: 'Simpson', canDriver: false},
    { firstName: 'Maggie', lastName: 'Simpson', canDriver: true},
];

// const verificaSePodeDirigir = () => users.every ( (user) => user.canDriver === true); // verifica se todos as pessoas do obj podem dirigir

// console.log(verificaSePodeDirigir());

// -------------------------------------------------------------------------------------------//

// const primeiroQueNaoPodeDirigir = () => users.find( (user) => user.canDriver !== true).firstName

// console.log(primeiroQueNaoPodeDirigir())

// -------------------------------------------------------------------------------------------//

// const pizzas = ['Gratinada', 'Quatro queijos', 'Frango com catupiry', 'Calabresa', 'Marguerita']

// console.log(pizzas.sort()) // para array com strings basta dar o console.log no array utilizando o .sort()


// -------------------------------------------------------------------------------------------//

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

// const ordenaNumeros = () => numbers.sort( (a, b) => a > b) // para ordenar os numeros devemos implementar uma função no método sort()

// console.log(ordenaNumeros())