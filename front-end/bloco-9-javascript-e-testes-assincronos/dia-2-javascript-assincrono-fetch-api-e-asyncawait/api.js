const url = "https://icanhazdadjoke.com/"

const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

const createDivJoke = (data) => {
    const joke = data.joke
    const div = document.createElement('div')
    div.innerHTML = joke
    const body = document.querySelector('body')
    body.appendChild(div)
} 

const fetchJoke = () => {
    fetch(url, myObject)
     .then((response) => response.json())
     .then((data) => createDivJoke(data))
}

window.onload = () => fetchJoke()