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
    const objEntries = Object.entries(student)
    let objKeysAndValues = [];

    for (let index = 0; index < objEntries.length; index += 1) {
        objKeysAndValues.push(`${objEntries[index][0]}, Nível: ${objEntries[index][1]}`);
    }
    return objKeysAndValues;
}

console.log(getAbiliity(student2))