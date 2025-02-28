const readline = require('readline');

// Cria a interface para capturar a entrada do usuário no terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function lerNumeros() {
  let numeros = [];  // Lista para armazenar os números digitados
  let contador = 0;  // Contador para contar quantos números foram digitados

  function pedirNumero() {
    // Pede ao usuário para digitar um número
    rl.question("Digite um número positivo (ou 0 para parar): ", (entrada) => {
      let numero = parseInt(entrada);  // Converte a entrada para número inteiro

      // Se o número for 0, encerra o programa e exibe o relatório
      if (numero === 0) {
        if (contador === 0) {
          console.log("Nenhum número foi digitado.");
        } else {
          exibirRelatorio(numeros);  // Chama a função para exibir o relatório
        }
        rl.close();  // Fecha a interface do readline
        return;
      }

      // Se o número for positivo, adiciona na lista e continua pedindo números
      if (numero > 0) {
        numeros.push(numero);
        contador++;
        pedirNumero();  // Chama novamente a função para pedir outro número
      } else {
        // Se o número não for positivo, solicita outro número
        console.log("Digite apenas números positivos.");
        pedirNumero();  // Chama novamente a função para pedir outro número
      }
    });
  }

  pedirNumero();  // Inicia o processo de pedir números
}

function exibirRelatorio(numeros) {
  let qtdNumeros = numeros.length;  // Conta a quantidade de números lidos

  // Encontra o maior número da lista
  let maiorNumero = Math.max(...numeros);

  // Calcula a soma de todos os números e depois a média
  let soma = numeros.reduce((acc, num) => acc + num, 0);
  let media = soma / qtdNumeros;

  // Filtra os números ímpares e encontra o menor deles
  let impares = numeros.filter(num => num % 2 !== 0);
  let menorImpar = impares.length > 0 ? Math.min(...impares) : "Nenhum número ímpar foi digitado.";

  // Conta quantas vezes cada número apareceu na lista
  let ocorrencias = {};
  numeros.forEach(num => {
    ocorrencias[num] = (ocorrencias[num] || 0) + 1;
  });

  // Monta o relatório com todas as informações coletadas
  let relatorio = `
    Relatório:
    a) Quantidade de números lidos: ${qtdNumeros}
    b) Maior número lido: ${maiorNumero}
    c) Média dos números lidos: ${media.toFixed(2)}
    d) Menor número ímpar lido: ${menorImpar}
    e) Quantidade de vezes que cada número ocorreu:
  `;

  // Exibe as ocorrências de cada número
  for (let numero in ocorrencias) {
    relatorio += `\nO número ${numero} ocorreu ${ocorrencias[numero]} vez(es).`;
  }

  console.log(relatorio);  // Exibe o relatório final no terminal
}

lerNumeros();  // Chama a função para iniciar o processo de ler números
