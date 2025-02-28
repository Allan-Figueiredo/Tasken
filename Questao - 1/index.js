const readline = require('readline');

// Função para imprimir as linhas conforme a lógica do exercício
function imprimirLinhas(n) {
    // Se o número for menor ou igual a zero, exibe uma mensagem de erro
    if (n <= 0) {
        console.log("Valor inválido. O número deve ser maior que zero.");
        return;
    }

    // Laço para imprimir as linhas
    for (let i = 0; i < n; i++) {
        let linha = [];
        
        // Preenche a linha com os quadrados dos números, diminuindo conforme i
        for (let j = n - i; j > 0; j--) {
            linha.push(j * j); // Adiciona o quadrado de j na linha
        }

        // Exibe a linha final (os números quadrados) separando por espaço
        console.log(linha.join(" "));
    }
}

// O readline cria uma interface para capturar a entrada do usuário no terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Faz uma pergunta ao usuário e usa o valor informado para chamar a função
rl.question("Informe um número: ", (input) => {
    const numero = parseInt(input); // Converte a entrada para um número inteiro
    if (isNaN(numero)) {
        console.log('Você deve informar um número');

        rl.close();
    }
    imprimirLinhas(numero); // Chama a função para imprimir as linhas
    rl.close();
});
