const fs = require('fs');
const readline = require('readline');

// Função para contar vogais e consoantes em uma linha
function contarVogaisConsoantes(linha) {

    // Todas as vogais
    const vogais = /[aeiou]/gi;

    // Quantidade de vogais na linha
    const numVogais = (linha.match(vogais) || []).length;

    // Todas as consoantes
    const consoantes = /[bcdfghjklmnpqrstvwxyz]/gi;

    // Quantidade de consoantes na linha
    const numConsoantes = (linha.match(consoantes) || []).length;

    // Retorna objeto com as informações
    return {
        vogais: numVogais,
        consoantes: numConsoantes
    };
}

// Função para analisar o arquivo
function analisarArquivo(nomeArquivo) {

    // Executa leitura do arquivo informado
    fs.readFile(nomeArquivo, 'utf8', (err, data) => {

        // Caso aconteça algum erro, retorna pro usuário e encerra
        if (err) {
            console.log("Erro ao ler o arquivo:", err.message);
            return;
        }

        // Quebra as linhas em um array
        const linhas = data.split('\n');

        // Tratamento para arquivo vazio
        if (linhas.length === 0) {
            console.log("O arquivo está vazio!");
            return;
        }

        let maxVogais = 0;
        let maxConsoantes = 0;
        let linhaMaxVogais = "";
        let linhaMaxConsoantes = "";

        // Laço para cada linha
        linhas.forEach((linha, index) => {

            // Executa a contagem dos caracteres para a linha e salva o resultado
            const resultado = contarVogaisConsoantes(linha);

            const vogais = resultado.vogais;
            const consoantes = resultado.consoantes;

            // Atualização do indicador de max vogais
            if (vogais > maxVogais) {
                maxVogais = vogais;
                linhaMaxVogais = 'Linha ' + (index + 1) + ': ' + linha;
            }

            // Atualização do indicador de max consoantes
            if (consoantes > maxConsoantes) {
                maxConsoantes = consoantes;
                linhaMaxConsoantes = 'Linha ' + (index + 1) + ': ' + linha;
            }
        });

        console.log('Linha com mais vogais (' + maxVogais + ' vogais): ' + linhaMaxVogais);
        console.log('Linha com mais consoantes (' + maxConsoantes + ' consoantes): ' + linhaMaxConsoantes);
    });
}

// Interface para ler o nome do arquivo do usuário
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite o nome do arquivo texto (inclua .txt): ", (nomeArquivo) => {
    analisarArquivo(nomeArquivo);
    rl.close();
});
