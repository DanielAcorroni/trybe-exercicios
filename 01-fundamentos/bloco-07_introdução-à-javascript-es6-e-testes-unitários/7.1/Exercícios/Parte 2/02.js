const longestWord = phrase => {
    let longWord = ''
    let loopWord = ''
    for (let index = 0; index <= phrase.length; index += 1) {
        if (phrase[index] !== ' ' && index !== phrase.length) {
            loopWord = `${loopWord}${phrase[index]}`
        } else {
            if (longWord.length < loopWord.length) {
                longWord = loopWord
                loopWord = ''
            } else {
                loopWord = ''
            }
        }
    }
    console.log(longWord)
}

longestWord("Antônio foi no banheiro e não sabemos o que aconteceu")