function encode(phrase) {

    let code = phrase.replace(/a/gi, '1');
    code = code.replace(/e/gi, '2');
    code = code.replace(/i/gi, '3');
    code = code.replace(/o/gi, '4');
    code = code.replace(/u/gi, '5');
  
    return code;
}
  
function decode(codedPhrase) {
    let code = codedPhrase.replace(/1/gi, 'a');
    code = code.replace(/2/gi, 'e');
    code = code.replace(/3/gi, 'i');
    code = code.replace(/4/gi, 'o');
    code = code.replace(/5/gi, 'u');
  
    return code;
}

const functions = { encode, decode };
module.exports = functions;