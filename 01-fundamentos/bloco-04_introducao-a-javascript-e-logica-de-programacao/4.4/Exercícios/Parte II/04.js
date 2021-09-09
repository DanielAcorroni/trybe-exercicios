function biggerName(groupNames) {

let bigName = "";

let max = 0;

    for (let unityName of groupNames) {
        
        if (unityName.length > max) {

            max = unityName.length;

            bigName = unityName;

        }

    }

    return bigName;

}

console.log(biggerName(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]));