const states = ["Acre", "Alagoas", "Amapá", "Amazonas", "Bahia", "Ceará", "Distrito Federal", "Espírito Santo", "Goiás", "Maranhão", "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais", "Pará", "Paraíba", "Paraná", "Pernambuco", "Piauí", "Rio de Janeiro", "Rio Grande do Norte", "Rio Grande do Sul", "Rondônia", "Roraima", "Santa Catarina", "São Paulo", "Sergipe", "Tocantins"]

function addStates() {
    for(let state of states) {
        let stateSelect = document.querySelector("#state-select")
        let addOption = document.createElement("option")
        addOption.innerText = state
        stateSelect.appendChild(addOption)
    }
}

function btnProperties(event) {
    let sectionForms = document.querySelector("#form-result")
    let inputTextValues = document.querySelectorAll("input[type= 'text']")
    let inputRadio = document.querySelector("input[name = 'habitation-type']:checked")
    let textArea = document.querySelector("textarea")
    event.preventDefault()
    for(let counter = 0; counter < inputTextValues.length; counter += 1) {
        let innerParagraph = inputTextValues[counter]
        let show = innerParagraph.value
        if (show === "") {
            alert("Dados incompletos")
            return;
        } else {
            let createParagraph = document.createElement("p")
            createParagraph.innerText = show
            createParagraph.className = "input-element"
            sectionForms.appendChild(createParagraph)
        }
    }
    if (inputRadio === null) {
        alert("Dados incompletos")
        return;
    } else{
        let labelInput = inputRadio.parentNode
        let createParagraph = document.createElement("p")
            createParagraph.innerText = labelInput.innerText
            createParagraph.className = "input-element"
            sectionForms.appendChild(createParagraph)
    }
    let textTextArea = textArea.value
    if (textTextArea === "") {
        alert("Dados incompletos")
    } else {
         let createParagraph = document.createElement("p")
         createParagraph.innerText = textTextArea
         createParagraph.className = "input-element"
         sectionForms.appendChild(createParagraph)
    }
}

function eraseAll() {
    let inputToDelete = document.querySelectorAll(".input-element")
    let sectionForms = document.querySelector("#form-result")
    for (let counter =0; counter < inputToDelete.length; counter += 1) {
        let erase = inputToDelete[counter]
        sectionForms.removeChild(erase)
    }
}

window.onload = function() {
    addStates()

    let sendBtn = document.querySelector("#send")
    sendBtn.addEventListener("click", btnProperties)

    let eraseBtn = document.querySelector("#erase")
    eraseBtn.addEventListener("click", eraseAll)
}