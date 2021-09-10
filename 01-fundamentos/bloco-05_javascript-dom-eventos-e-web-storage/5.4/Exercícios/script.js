window.onload = () => {
    function changeBackgroundColor(color) {
      let container = document.querySelector(".paragraph-container")
      container.style.backgroundColor = color
      localStorage.setItem("backgroundColor", color)
    }

    function changeFontColor(color) {
      let paragraphs = document.querySelectorAll(".paragraph")
      for (let index = 0; index < paragraphs.length; index += 1) {
        paragraphs[index].style.color = color
      }
      localStorage.setItem("fontColor", color)
    }

    function changeFontSize(size) {
      let paragraphs = document.querySelectorAll(".paragraph")
      for (let index = 0; index < paragraphs.length; index += 1) {
        paragraphs[index].style.fontSize = size
      }
      localStorage.setItem("fontSize", size)
    }

    function changeLineHeight(height) {
      let paragraphs = document.querySelectorAll(".paragraph")
      for (let index = 0; index < paragraphs.length; index += 1) {
        paragraphs[index].style.lineHeight = height
      }
      localStorage.setItem("lineHeight", height)
    }

    function changeFontFamily(family) {
      let paragraphs = document.querySelectorAll(".paragraph")
      for (let index = 0; index < paragraphs.length; index += 1) {
        paragraphs[index].style.fontFamily = family
      }
      localStorage.setItem("fontFamily", family)
    }

    let backgroundColorButtons = document.querySelectorAll("#background-color>button")
    for (let index = 0; index < backgroundColorButtons.length; index += 1) {
      backgroundColorButtons[index].addEventListener("click", function(event) {
        changeBackgroundColor(event.target.innerHTML)
      })
    }

    let fontColorButtons = document.querySelectorAll("#font-color>button")
    for (let index = 0; index < fontColorButtons.length; index += 1) {
      fontColorButtons[index].addEventListener("click", function(event) {
        changeFontColor(event.target.innerHTML)
      })
    }

    let fontSizeButtons = document.querySelectorAll("#font-size>button")
    for (let index = 0; index < fontSizeButtons.length; index += 1) {
      fontSizeButtons[index].addEventListener("click", function(event) {
        changeFontSize(event.target.innerHTML)
      })
    }

    let lineHeightButtons = document.querySelectorAll("#line-height>button")
    for (let index = 0; index < lineHeightButtons.length; index += 1) {
      lineHeightButtons[index].addEventListener("click", function(event) {
        changeLineHeight(event.target.innerHTML)
      })
    }

    let fontFamilyButtons = document.querySelectorAll("#font-family>button")
    for (let index = 0; index < fontFamilyButtons.length; index += 1) {
      fontFamilyButtons[index].addEventListener("click", function(event) {
        changeFontFamily(event.target.innerHTML)
      })
    }

    function loadPage() {
      let backgroundColor = localStorage.getItem("backgroundColor")
      if (backgroundColor) changeBackgroundColor(backgroundColor)

      let fontColor = localStorage.getItem("fontColor")
      if (fontColor) changeFontColor(fontColor)

      let fontSize = localStorage.getItem("fontSize")
      if (fontSize) changeFontSize(fontSize)

      let lineHeight = localStorage.getItem("lineHeight")
      if (lineHeight) changeLineHeight(lineHeight)

      let fontFamily = localStorage.getItem("fontFamily")
      if (fontFamily) changeFontFamily(fontFamily)
    }

    loadPage()
}