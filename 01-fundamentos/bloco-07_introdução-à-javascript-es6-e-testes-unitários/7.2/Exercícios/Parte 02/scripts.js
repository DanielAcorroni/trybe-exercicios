const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
};
  
const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
};
  
const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
};

const addShift = (lesson, key, value) => {
    lesson[key] = value;
}

addShift(lesson2, 'turno', 'manhã');

const objKeys = object => Object.keys(object);


const objValues = object => Object.values(object);

const objEntries = object => Object.entries(object);

const objectSize = object => objKeys(object).length;

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

const studentsNumber = () => allLessons.lesson1.numeroEstudantes + allLessons.lesson2.numeroEstudantes + allLessons.lesson3.numeroEstudantes;

const getSpecificEntrie = (lesson, number) => {
    const lessonWanted = allLessons[lesson]
    const columWanted = objEntries(lessonWanted)[number]
    return `${columWanted[0]}: ${columWanted[1]}`;
}

const verifyPair = (lesson, key, value) => {
    const lessonEntries = Object.entries(lesson);
    let isItEqual = false;
    for (let index = 0; index < lessonEntries.length; index += 1) {
        if (lessonEntries[index][0] === key && lessonEntries[index][1] === value) {
            isItEqual = true;
            return isItEqual;
        }
    }
    return isItEqual;
}