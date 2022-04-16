// Dia 4.3 – Lógica de programação e algoritmos

// - Vamos desenvolver o algoritmo da rainha
// - Vamos atacar somente 1 problema
// ( Verificar se a Rainha consegue atacar)

// Posicao da Rainha 

let posicaoRainhaLinha = 4;
let posicaoRainhaColuna =2;

// Posicao da outra peca

let posicaoPecaLinha = 3; 
let posicaoPecaColuna = 3;

// Identifica se o ataque foi bem sucedido ou não

let ataqueBemSucedido = false;

// Verifica se a peca esta na mesma linha
	if (posicaoDaRainhaLinha === posicaoPecaLinha)
		ataqueBemSucedido = true;
		console.log('O ataque foi bem sucedido na mesma linha');
// Verifica se a peca esta na mesma coluna
    if (posicaoRainhaColuna === posicaoPecaColuna){
        ataqueBemSucedido = true;
        console.log('O ataque foi bem sucedido na mesma coluna')
    }
// Verifica se a peca esta na mesma diagonal NE


    