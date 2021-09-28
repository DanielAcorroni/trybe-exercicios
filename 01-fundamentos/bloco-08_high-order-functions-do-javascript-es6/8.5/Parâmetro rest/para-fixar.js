const sum = (...args) => args.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum(4, 7, 8, 9, 60));
console.log(sum(4, 7, 8, 9, 60, 90, 45, 5, 100));