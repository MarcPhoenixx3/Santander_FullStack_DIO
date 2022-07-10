function calcularIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${
        this.idade + anos
    } anos de idade.`;
};

const pessoa1 = {
    nome: "Kátia",
    idade: 56
};

const pessoa2 = {
    nome: "Carolina",
    idade: 26
};

const animal = {
    nome: "Manju",
    idade: 4,
    raça: "SRD"
};

console.log(calcularIdade.call(pessoa2, 30));

console.log(calcularIdade.apply(pessoa1, [18]));

console.log(calcularIdade.call(animal, 12));

console.log(calcularIdade.apply(animal, [2]));