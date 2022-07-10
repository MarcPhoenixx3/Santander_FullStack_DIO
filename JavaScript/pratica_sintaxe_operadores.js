function compararnumeros(num1, num2){
    if (!num1 || !num2) return "Defina dois números!";

    const primeiroatributo = criarprimeiroatributo(num1, num2);
    const segundoatributo = criarsegundoatributo(num1, num2);

    return `${primeiroatributo}${segundoatributo}`
}

function criarprimeiroatributo(num1, num2){
    let Iguais = "";

    if(num1 !== num2) {
        Iguais = "não";
    }

    return `Os números ${num1} e ${num2} ${Iguais} são iguais.`
};

function criarsegundoatributo(num1, num2){
    const soma = num1 + num2;

    let resultado10 = "menor"
    let resultado20 = "menor"

    const compara10 = soma > 10;
    const compara20 = soma > 20;

    if(compara10) {
        resultado10 = "maior"
    }

    if(compara20) {
        resultado20 = "maior"
    }
    return `Sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20.`
};

console.log(compararnumeros()); //teste1

console.log(compararnumeros(1, 2)); //teste2

console.log(compararnumeros(20, 20)); //teste3

console.log(compararnumeros(4, 20)); //teste4