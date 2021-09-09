let n = 5;
let asterisk = '*';
let line = '';
let middlePyramid = (n + 1) / 2;
let checkLeft = middlePyramid;
let checkRight = middlePyramid;

for (let counterForLine = 0; counterForLine <= middlePyramid; counterForLine += 1) {

  for (let counterForColumn = 0; counterForColumn <= n; counterForColumn += 1) {

    if (counterForColumn > checkLeft && counterForColumn < checkRight) {
      line = line + asterisk;
    }
    
    else {
      line = line + ' ';
    }
  }

  console.log(line);
  line = '';
  checkRight += 1;
  checkLeft -= 1
};