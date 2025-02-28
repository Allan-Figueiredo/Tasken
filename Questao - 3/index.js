const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function lerNumeros() {
  let numeros = [];
  let contador = 0;

  function pedirNumero() {
    rl.question("Digite um número positivo (ou 0 para parar): ", (entrada) => {
      let numero = parseInt(entrada);

      if (numero === 0) {
        
        if (contador === 0) {
          console.log("Nenhum número foi digitado.");
        } else {
          exibirRelatorio(numeros);
        }
        rl.close();
        return;
      }

      if (numero > 0) {
        numeros.push(numero);
        contador++;
        pedirNumero(); 
      } else {
        console.log("Digite apenas números positivos.");
        pedirNumero();
      }
    });
  }

  pedirNumero();
}

function exibirRelatorio(numeros) {
  
  let qtdNumeros = numeros.length;

  
  let maiorNumero = Math.max(...numeros);


  let soma = numeros.reduce((acc, num) => acc + num, 0);
  let media = soma / qtdNumeros;


  let impares = numeros.filter(num => num % 2 !== 0);
  let menorImpar = impares.length > 0 ? Math.min(...impares) : "Nenhum número ímpar foi digitado.";


  let ocorrencias = {};
  numeros.forEach(num => {
    ocorrencias[num] = (ocorrencias[num] || 0) + 1;
  });


  let relatorio = `
    Relatório:
    a) Quantidade de números lidos: ${qtdNumeros}
    b) Maior número lido: ${maiorNumero}
    c) Média dos números lidos: ${media.toFixed(2)}
    d) Menor número ímpar lido: ${menorImpar}
    e) Quantidade de vezes que cada número ocorreu:
  `;

  for (let numero in ocorrencias) {
    relatorio += `\nO número ${numero} ocorreu ${ocorrencias[numero]} vez(es).`;
  }

  console.log(relatorio);
}

lerNumeros();
