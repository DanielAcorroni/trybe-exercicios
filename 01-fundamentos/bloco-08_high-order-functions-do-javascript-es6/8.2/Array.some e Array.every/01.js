const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  return arr.some((nm) => nm === name);
}

console.log(hasName(names, 'Ana'))