let click = 0
const clickCounter = document.querySelector('p');

const clickRaise = () => {
    click += 1;
    clickCounter.innerText = click;
}

const buttonClick = document.querySelector('button');
buttonClick.addEventListener('click', clickRaise)