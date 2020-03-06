let array = [0, 1, 5];

function encontreUm5 (numeros) {
    var i = 0; 
    do {
        console.log(numeros[i]);
        i++;
        if (numeros[i] == 5) {
            console.log("Encontrei um 5!");
        }
    }
    while (numeros[i] !== 5);
}

console.log(encontreUm5(array));
