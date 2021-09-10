const firstLi = document.getElementById('firstLi');
const secondLi = document.getElementById('secondLi');
const thirdLi = document.getElementById('thirdLi');
const input = document.getElementById('input');
const myWebpage = document.getElementById('mySpotrybefy');
const container = document.querySelector(".container");

window.onload = function () {

    container.addEventListener("click", addClass);
    input.addEventListener("keyup", changeTech);
    myWebpage.addEventListener("dblclick", redirectLink);
    myWebpage.addEventListener("mouseenter", changeGreen);
    myWebpage.addEventListener("mouseleave", changeWhite);
    myWebpage.addEventListener("mouseenter", changeCursor)

}

//02

function addClass(elementOrigin){
    let element = elementOrigin.target

    let currentClass = document.querySelector(".tech")

    if (document.getElementsByClassName("tech").length >= 1) {
        currentClass.classList.remove("tech")
    }

    element.className = "tech";

}
//03
function changeTech() {
    let select = document.querySelector(".tech")
    let text = document.querySelector("#input")

    select.innerText = text.value
}

//04
function redirectLink() {
    window.location.href = "https://www.youtube.com/watch?v=IO9XlQrEt2Y";
}

function changeCursor() {
    myWebpage.style.cursor = "pointer"
}

//05
function changeGreen() {
    myWebpage.style.color = "green"
}

function changeWhite() {
    myWebpage.style.color = "white"
}
// function resetText(event) {
//   // O Event é passado como um parâmetro para a função.
//   event.target.innerText = 'Opção reiniciada';
//   // O event possui várias propriedades, porém a mais usada é o event.target,
//   // que retorna o objeto que disparou o evento.
// }

// firstLi.addEventListener('dblclick', resetText);

// // Não precisa passar o parâmetro dentro da callback resetText. O próprio
// // navegador fará esse trabalho por você, não é legal? Desse jeito, o
// // event.target na nossa função retornará o objeto 'firstLi'.