let n = 5;
let s2 = "";

for (let counter = 1; counter <= n; counter += 1) {

    let s1 = "";

    for (let count = 1; count <= (n - counter); count +=1) {
    s1 = s1 + " ";
    }

    s2 = s2 + "*"
    console.log(s1 + s2);
}