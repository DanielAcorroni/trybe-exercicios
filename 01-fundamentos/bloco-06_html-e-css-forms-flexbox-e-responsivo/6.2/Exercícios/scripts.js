import "./node_modules/just-validate/dist/js/just-validate.js"

const states = ["Acre", "Alagoas", "Amapá", "Amazonas", "Bahia", "Ceará", "Distrito Federal", "Espírito Santo", "Goiás", "Maranhão", "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais", "Pará", "Paraíba", "Paraná", "Pernambuco", "Piauí", "Rio de Janeiro", "Rio Grande do Norte", "Rio Grande do Sul", "Rondônia", "Roraima", "Santa Catarina", "São Paulo", "Sergipe", "Tocantins"]

function addStates() {
    for(let state of states) {
        let stateSelect = document.querySelector("#state-select")
        let addOption = document.createElement("option")
        addOption.innerText = state
        stateSelect.appendChild(addOption)
    }
}

window.onload = function() {
    addStates()

    let sendBtn = document.querySelector("#send")
    sendBtn.addEventListener("click", btnProperties)
}