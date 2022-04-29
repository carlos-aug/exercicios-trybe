// 1-🚀 Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;


const heading = document.createElement('h1');
heading.innerText = "5.2 - JavaScript";
document.body.appendChild(heading);
console.log(heading);

// 2-🚀 Adicione a tag main com a classe main-content como filho da tag body

const elementMain = document.createElement('main');
elementMain.className = 'main-content';
document.body.appendChild(elementMain);
console.log(elementMain);

// 3-🚀 Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;

const elementoSection = document.createElement(elementMain);
elementSection.className = "center-content";
elementMain.appendChild(elementSection)

// 4-🚀 Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;

const elementP = document.createElement('p');
elementP.body.elementSection.appendChild(elementP);
elementP.innerText = "Shamalamalu"