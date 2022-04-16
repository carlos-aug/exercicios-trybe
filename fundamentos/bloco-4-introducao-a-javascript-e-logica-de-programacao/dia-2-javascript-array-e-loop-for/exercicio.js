let pessoa = {
    nome: 'Carlos',
    ultimoNome: 'Santos',
    apelido: 'Carlinhos',
    idade: 31,
    naturalidade: 'AL',
    hobbies: ['Futebol', 'Praia', 'Trilha', 'Cinema']
    residencia: {
        estado: 'Rio de Janeiro',
        cidade: 'São Gonçalo'
    }
};

console.log(pessoa)
console.log('O estudante ' + pessoa.nome + ' ' + pessoa.ultimoNome + ' possui ' + pessoa.idade + ' anos.');
console.log('O estudante ' + pessoa['nome'] + ' ' + pessoa['ultimoNome'] + ' possui ' + pessoa['idade'] + ' anos.');

pessoa['nomeCompleto'] = pessoa.nome + ' ' + pessoa.ultimoNome; 
console.table(pessoa);

console.log('O estudante ' + pessoa.nomeCompleto + ' reside no ' + residencia.estado + ' na cidade ' + residencia.cidade);