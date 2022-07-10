const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valoresUnicos(arr){
    const mySet = new Set(arr);

    return mySet;
}

console.log(valoresUnicos(meuArray));//retorna um set, não um array

function valoresUnicos(arr){
    const mySet = new Set(arr);

    return [...mySet];//esta forma irá retornar um array. Método spread
}