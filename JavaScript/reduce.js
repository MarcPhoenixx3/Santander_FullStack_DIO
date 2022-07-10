//Somar números de um array

function somarNums(arr) {
    return arr.reduce(function(prev, current) {
        console.log({prev});
        console.log({current});
        return prev + current;
    })
}

const arr = [1, 2];

console.log (somarNums(arr));


//Lista de preços e valor após subtração de todos os itens da lista
const lista = [
    {
        nome: "sabao em po",
        preco: 30,
    },
    {
        nome: "cereal",
        preco: 12,
    },
    {
        nome: "papel toalha",
        preco: 10,
    }
]

const saldoDisponivel = 100;

function calculaSaldo (saldoDisponivel, lista){
    return lista.reduce(function(prev, current, index) {
        console.log("rodada", index + 1)
        console.log({prev});
        console.log({current});
        return prev - current.preco;
    }, saldoDisponivel)
}

console.log(calculaSaldo(saldoDisponivel, lista));