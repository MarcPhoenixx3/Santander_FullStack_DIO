const retornaNomes = function () {
    return this.nome;
};

let bruno = retornaNomes.bind({nome: "Bruno Miguel"});

console.log(bruno());
