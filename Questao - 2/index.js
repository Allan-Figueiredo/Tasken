function compactarString(str) {
    let resultado = '';  // Variável para armazenar o resultado final da string compactada
    let contador = 1;  // Variável para contar a quantidade de caracteres repetidos

    // Loop para percorrer
    for (let i = 0; i < str.length; i++) {
        
        // Se o caractere atual for igual ao próximo, incrementa o contador
        if (str[i] === str[i + 1]) {
            contador++;
        } else {
            // Quando os caracteres não forem iguais, adiciona o caractere e a quantidade no resultado
            resultado += str[i] + contador;
            contador = 1; // Reseta o contador para o próximo caractere
        }
    }
    return resultado;  // Retorna a string compactada
}

console.log(compactarString("jjjjooaoo"));