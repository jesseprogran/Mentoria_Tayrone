// function cadastro() {
//   let g = 300;
//   if (g >= 120) {
//     alert("caminho direto");
//   } else if (g >= 100 && g < 120) {
//     alert("abastecer ligeiro");
//   } else if (g == 30 || g == 40) {
//     alert("reserva");
//   } else {
//     alert("acabou tudo");
//   }
// }

// cadastro();

// function cadastro() {
//   let g = 119;
//   switch (true) {
//     case g >= 120:
//       alert("caminho direto");
//       break;
//     case g >= 100 && g < 120:
//       alert("abastecer ligeiro");
//       break;
//     case g == 30 || g == 40:
//       alert("reserva");
//       break;
//     default:
//       alert("acabou tudo");
//   }
// }

// cadastro();

// function cadastro() {
//   let g = 119;
//   switch (true) {
//     case g >= 120:
//       alert("caminho direto");
//     case g >= 100 && g < 120:
//       alert("abastecer ligeiro");

//     case g == 30 || g == 40:
//       alert("reserva");
//       break;
//     default:
//       alert("acabou tudo");
//   }
// }

// cadastro();

/*########################################################################## */

// a loja abre as 7 hs da manha porem a fila comeca a ser criada as 6hs,
//levando em consideração que a cada 1 minuto chega de  5 a 10 pessoas
//crie um algoritmo que calcule o range de pessoas q terão na fila apos até 7hs .

// Função para calcular o número de pessoas...
function calcularPessoas() {
  const horaAbertura = 7;
  const horaFechamento = 20;
  const minutoInicioFila = 6 * 60; // 6h em minutos
  const taxaMinimaPessoas = 5;
  const taxaMaximaPessoas = 10;
  let totalPessoasNaFila = 0;

  for (let minuto = minutoInicioFila; minuto < horaAbertura * 60; minuto++) {
    const pessoasNesteMinuto = Math.floor(
      Math.random() * (taxaMaximaPessoas - taxaMinimaPessoas + 1) +
        taxaMinimaPessoas
    );
    totalPessoasNaFila += pessoasNesteMinuto;
  }

  return totalPessoasNaFila;
}
calcularPessoas();

// todos produos tem a faixa de preço de 2reais
//o mercado ele tem a capacidade diaria de armazenar 20mil produtos. o mercado
// ele fecha as 20hs
// normalmente os cliente gastam de 100 a 500 reais de compra por individuo
// o mercado tem uma promoção para motivar as pessoas a comprarem mais mercadoria
// se o cliente compra a cima de 200 reais ele tem 10% de desconto
// se o cliente compra a cima de 400 reias ele tem 50% de desconto
// crie um algoritimo que faça a seguinte analise

// quantas venda eu fiz até 20hs, preciso saber tambem se meu estoque zerou antes do fechamento da loja
// preciso saber tbm quantos cliente tiveream 10% desconto e 50%  de desconto e quanto nao tiveram desconto

// Função para simular as vendas até as 20hs e analisar os descontos
function simularVendas() {
  const capacidadeEstoque = 20000;
  let estoque = capacidadeEstoque;
  let totalVendas = 0;
  let clientesCom10Desconto = 0;
  let clientesCom50Desconto = 0;

  for (let hora = 7; hora < 20; hora++) {
    for (let minuto = 0; minuto < 60; minuto++) {
      if (estoque <= 0) {
        console.log("Estoque zerou antes do fechamento da loja!");
        break; // Sai do loop se o estoque zerar
      }

      const precoCompra = Math.floor(Math.random() * (500 - 100 + 1)) + 100;
      totalVendas++;

      if (precoCompra > 400) {
        clientesCom50Desconto++;
        estoque--;
      } else if (precoCompra > 200) {
        clientesCom10Desconto++;
        estoque--;
      } else {
        estoque--;
      }
    }
  }

  return {
    totalVendas,
    clientesCom10Desconto,
    clientesCom50Desconto,
    clientesSemDesconto:
      totalVendas - clientesCom10Desconto - clientesCom50Desconto,
  };
}

//Função para exibir resultados na
function exibirResultadosNaTela() {
  const resultadosVendas = simularVendas();
  const totalPessoasNaFila = calcularPessoas();

  const resultadosDiv = document.getElementById("resultados");
  resultadosDiv.innerHTML = `
        <p>Total de vendas até 20h: ${resultadosVendas.totalVendas}</p>
        <p>Clientes com 10% de desconto: ${resultadosVendas.clientesCom10Desconto}</p>
        <p>Clientes com 50% de desconto: ${resultadosVendas.clientesCom50Desconto}</p>
        <p>Clientes sem desconto: ${resultadosVendas.clientesSemDesconto}</p>
        <p>Número de pessoas na fila até as 7h da manhã: ${totalPessoasNaFila}</p>
      `;
}

// Adicionar um ouvinte de evento ao botão
document
  .getElementById("simularBtn")
  .addEventListener("click", exibirResultadosNaTela);
