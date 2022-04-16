// let firstName = 'Joana';
// let lastName = 'Pereira';
// let agePerson = 43;
// let canDrive = true;
// let favoriteMovies = ['Matrix', 'Vingadores'];
// let favoriteNumbers = [14, 5, 23, 28];

let estudante = {
    firstName: 'Joana',
    lastName: 'Pereira',
    agePerson: 43,
    canDrive: true,
    favoriteMovies: ['Matrix', 'Vingadores'],
    favoriteNumbers: [14, 5, 23, 28],
};

// console.log(estudante.favoriteMovies[1]);

// delete(estudante.agePerson);
// console.log(estudante);

for(let number in estudante.favoriteNumbers){
    console.log(number);
}

