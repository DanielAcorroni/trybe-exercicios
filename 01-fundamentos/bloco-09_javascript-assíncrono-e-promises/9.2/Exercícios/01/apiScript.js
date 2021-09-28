// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';

function appendJoke (data) {
    const tittle = document.querySelector('#jokeContainer');
    const joke = data.joke;
    const paragraph = document.createElement('p');
    paragraph.innerText = joke;
    tittle.appendChild(paragraph)
}

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => appendJoke(data));
};

window.onload = () => fetchJoke();