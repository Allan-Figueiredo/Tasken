const readline = require('readline');

function compactarString(str) {
    let resultado = '';  // Variável para armazenar o resultado final da string compactada
    let contador = 1;    // Variável para contar a quantidade de caracteres repetidos

    // Loop para percorrer a string
    for (let i = 0; i < str.length; i++) {        
        // Se o caractere atual for igual ao próximo, incrementa o contador
        if (str[i] === str[i + 1]) {
            contador++;
        } else {
            // Quando os caracteres não forem iguais, adiciona o caractere e a quantidade no resultado
            if (contador > 1) {
                resultado += str[i] + contador;
            } else {
                resultado += str[i];
            }
            
            contador = 1; // Reseta o contador para o próximo caractere
        }
    }
    return resultado;  // Retorna a string compactada
}

// Criação da interface para ler a entrada do terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Solicita ao usuário que digite um nome
rl.question('Digite o nome: ', (entrada) => {
    console.log('Resultado:', compactarString(entrada));
    rl.close();
});
