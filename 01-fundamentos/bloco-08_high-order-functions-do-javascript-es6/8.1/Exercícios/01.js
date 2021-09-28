const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  };
  return employees;
};

const createEmailList = function(name) {
    const emailName = name.toLowerCase().split(' ').join("_");
    const employeeList = {
        fullName: name,
        email: `${emailName}@trybe.com`
    };
    return employeeList;
};

console.table(newEmployees(createEmailList))