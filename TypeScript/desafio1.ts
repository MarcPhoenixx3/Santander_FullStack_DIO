// Como podemos rodar isso em um arquivo .ts sem causar erros?
// let employee = {};
// employee.code = 10;
// employee.name = "John";

let funcionario = {
    codigo: 44,
    nome: "João"
};


let funcionario2: {codigo: number, nome: string} = {
    codigo: 57,
    nome: "Jorge"
}

interface Funcionario {
    codigo: number,
    nome: string
}

let funcionario3: Funcionario = {
    codigo: 200,
    nome: "Welder"
}