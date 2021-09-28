const student1 = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkills: 'Ótimo',
};
  
const student2 = {
    Html: 'Bom',
    Css: 'Ótimo',
    JavaScript: 'Ruim',
    SoftSkills: 'Ótimo',
    Git: 'Bom', // chave adicionada
};

const getAbiliity = student => {
    const objKeys = Object.keys(student)
    const objValues = Object.values(student)
    let objKeysAndValues = [];

    for (let index = 0; index < objKeys.length; index += 1) {
        objKeysAndValues.push(`${objKeys[index]}, Nível: ${objValues[index]}`);
    }
    return objKeysAndValues;
}

console.log(getAbiliity(student2))