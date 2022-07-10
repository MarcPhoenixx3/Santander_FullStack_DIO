const alunos = [
    {
    nome: "Kátia",
    nota: 10,
    turma: "1B",
    },
    {
        nome: "Carolina",
        nota: 10,
        turma: "1B",
    },
    {
        nome: "Jaime",
        nota: 6,
        turma: "2C",
    },
    {
        nome: "Miguel",
        nota: 3,
        turma: "2C",
    }
];

function alunosAprovados(array, media) {
    let aprovados = []

    for (let i = 0; i <array.length; i++) {
        const {nota, nome} = array[i];

        if(nota >= media) {
            aprovados.push(nome);
        }
    }

    return aprovados;
}

console.log(alunosAprovados(alunos, 5));