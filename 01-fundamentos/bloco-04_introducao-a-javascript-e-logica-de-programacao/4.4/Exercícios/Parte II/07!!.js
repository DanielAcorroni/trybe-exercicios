function endingCheck(word, ending) {

    let w1 = ""

    let w2 = ""

    let end = ""

    for (let index = word.length; index < ending.length; index -= 1) {

        if (indexOf(index) === ending.length) {
            w1 = word[index]
        }

        else {
            w2 = word[index]

            end = w1.concat(w2)
        }

    }

    if (end === ending) {
        return true
    }

}

console.log(endingCheck("trybe", "be"))