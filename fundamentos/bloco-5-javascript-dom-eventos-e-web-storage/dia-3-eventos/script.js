function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

// O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days". Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.

// Os dias devem estar contidos em uma tag <li>, e todos devem ter a classe day. Ex: <li class="day">3</li>
// Os dias 24, 25 e 31 são feriados e, além da classe day, devem conter também a classe holiday. Ex: <li class="day holiday">24</li>

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDays() {
  const daysDezember = document.querySelector('#days');
  for ( let index = 0; index < dezDaysList.length; index +=1) {
    let day = dezDaysList[index]
    let createDay = document.createElement('li')

    if (day === 24 || day === 31) {
      createDay.className = 'day holiday';
      createDay.innerHTML = day;
      daysDezember.appendChild(createDay)
    }

    if (day === 4 || day === 11 || day === 18) {
      createDay.className = 'day friday';
      createDay.innerHTML = day;
      daysDezember.appendChild(createDay)
    }

    if (day === 25) {
      createDay.className = 'day holiday friday'
      createDay.innerHTML = day;
      daysDezember.appendChild(createDay)
    }

    else {
      createDay.className = 'day';
      createDay.innerHTML = day;
      daysDezember.appendChild(createDay)
    }
  }
}

createDays()

// Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
// Adicione a este botão a ID "btn-holiday".
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container".

function createButton(holiday) {
  let getDiv = document.querySelector('.buttons-container');
  let button = document.createElement('button');
  button.id = 'btn-holiday'
  button.innerHTML = holiday

  getDiv.appendChild(button);
}

createButton('Feriados');