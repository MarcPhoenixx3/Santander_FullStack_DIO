//JAVASCRIPT - VARIÁVEIS E TIPOS - ATIVIDADE 1

//Solução 1
function verificarPalindromo(string){
    if(!string) return "string inexistente";

    return string.split("").reverse().join("") === string;
}

let Var = null;

console.log(verificarPalindromo("ovo"));

console.log(verificarPalindromo("gato"));

console.log(verificarPalindromo(""));

console.log(verificarPalindromo(Var));

//Solução 2

function verificarPalindromo2(string){
    if (!string) return "string inexistente";

    for (let i = 0; i < string.length / 2; i++) {
        if(string[i] !== string[string.length -1 - i]) {
            return false
        };
    }

    return true;
}

console.log(verificarPalindromo2("gato"));

console.log(verificarPalindromo2("abba"));

console.log(verificarPalindromo2(Var));