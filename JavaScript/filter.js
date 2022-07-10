//Para filtrar os números pares

function filtrarPares(arr) {
    return arr.filter(callback)
}

function callback(item) {
    return item % 2 === 0;
}

const meuArray = [1, 23, 55, 67, 30, 2, 4];

console.log(filtrarPares(meuArray));

//Para filtrar os números ímpares

{function filtrarImpares(arr) {
    return arr.filter(callback)
}

function callback(item) {
    return item % 2 !== 0;
}

const meuArray = [1, 23, 55, 67, 30, 2, 4];

console.log(filtrarImpares(meuArray));}