function sumaTotal(llista) {
    let total = 0;
    for (let i = 0; i < llista.length; i++) {
        total += llista[i];  // Es pot optimitzar reduint el nombre d'iteracions
    }
    return total;
}

function comptarPrimers(llista) {
    let comptador = 0;
    for (let i = 0; i < llista.length; i++) {
        if (esPrimer(llista[i])) {
            comptador++;
        }
    }
    return comptador;
}

function sumaMatriuPerColumnes(matriu) {
    let suma = 0;
    let n = matriu.length;
    let m = matriu[0].length;

    for (let j = 0; j < m; j++) {  
        for (let i = 0; i < n; i++) {
            suma += matriu[i][j];
        }
    }
    return suma;
}

function processarLlistaAmbCondicio(llista, esParell) {
    let resultat = [];

    for (let i = 0; i < llista.length; i++) {
        if (esParell) {  
            resultat.push(llista[i] * 2);
        } else {
            resultat.push(llista[i] + 1);
        }
    }

    return resultat;
}


// Exemple d'ús
const nums = [10, 3, 5, 7, 2, 8, 11, 13, 17, 4];
const parell = 1;

console.log("Suma total:", sumaTotal(nums));
console.log("Primers:", comptarPrimers(nums));
console.log("Suma matriu:", sumaMatriuPerColumnes(nums));
console.log("Llista amb condicio:", processarLlistaAmbCondicio(nums,parell));
