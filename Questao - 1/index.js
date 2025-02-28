const readline = require('readline');

function imprimirLinhas(n) {
    if (n <= 0) {
        console.log("Valor inválido. O número deve ser maior que zero.");
        return;
    }

    for (let i = 0; i < n; i++) {
        let linha = [];
        for (let j = n - i; j > 0; j--) {
            linha.push(j * j);
        }
        console.log(linha.join(" "));
    }
}

// O readline para utiliza o Node para capturar input do usuário no terminal do VS code
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Informe um número: ", (input) => {
    const numero = parseInt(input);
    imprimirLinhas(numero);
    rl.close();
});
