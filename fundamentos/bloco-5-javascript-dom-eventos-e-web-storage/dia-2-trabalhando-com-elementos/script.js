// 🚀 Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body

const bodyElement = document.body;
const newH1 = document.createElement('h1');
newH1.className = 'title'
newH1.innerHTML = 'Exercício 5.2 - JavaScript DOM'
bodyElement.appendChild(newH1);

// 🚀 Adicione a tag main com a classe main-content como filho da tag body;

const newMain = document.createElement('main');
newMain.className = 'main-content'
bodyElement.appendChild(newMain);

// 🚀 Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;

const mainElement = document.querySelector('.main-content');
const newSection = document.createElement('section');
newSection.id = 'center-content'
mainElement.appendChild(newSection)

// 🚀 Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;

const sectionPai = document.querySelector('#center-content')
const newParagraph = document.createElement('p');
newParagraph.innerHTML = 'JavaScript é muito legal!!!'
sectionPai.appendChild(newParagraph)

// 🚀 Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;

const sectionFilhoDaMain = document.createElement('section')
sectionFilhoDaMain.className = 'left-content'
mainElement.appendChild(sectionFilhoDaMain)


// 🚀 Adicione a tag section com a classe right-content como filho da tag main criada no passo 2

const segundaSectionFilhoDaMain = document.createElement('section');
segundaSectionFilhoDaMain.className = 'right-content'
mainElement.appendChild(segundaSectionFilhoDaMain)

// Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho do section criado no passo 5;

const newImage = document.createElement('img')
newImage.src = 'https://picsum.photos/200';
newImage.className = 'small-image'
sectionFilhoDaMain.appendChild(newImage);

// 🚀 Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um, dois, três, ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;

const newList = document.createElement('ul');
segundaSectionFilhoDaMain.appendChild(newList)
const arrayNumeros = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis', 'Sete', 'Oito', 'Nove', 'Dez'];

for ( let i = 0; i < arrayNumeros.length; i += 1) {
const newLi = document.createElement('li');
newLi.innerHTML = arrayNumeros[i];
newList.appendChild(newLi);
};


// 🚀 Adicione 3 tags h3, todas sendo filhas do main criado no passo 2.


for ( let i = 1; i <= 3; i += 1) {
    const newH3 = document.createElement('h3')
    newH3.innerHTML = 'Show' + i;
    newMain.appendChild(newH3)
    newH3.className = 'description'
}

const ul = document.getElementsByTagName('ul')[0];
ul.lastChild.remove();
ul.lastChild.remove()
ul.firstChild.remove()