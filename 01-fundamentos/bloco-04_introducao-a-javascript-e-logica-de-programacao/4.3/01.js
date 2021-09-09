let n = 5;

let s = "";

if (n > 1) {
    for(var i = 0;i < n; i += 1) {
        s = s + "*";
    }

    for(var i = 0;i < n; i += 1) {
        console.log(s);
    }
}