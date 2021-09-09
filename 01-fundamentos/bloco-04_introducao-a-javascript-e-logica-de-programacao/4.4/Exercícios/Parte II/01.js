function palindrome(word) {

    let invertWord = ""

    for (index = (word.length - 1); index >= 0; index -= 1) {

        invertWord = invertWord + word[index]

    }

    if (word === invertWord) {
        return true
    }
    else {
        return  false
    }
    
}

console.log(palindrome("Arara".toLowerCase()));

console.log(palindrome("Desenvolvimento".toLowerCase()));