//Função sem retorno
function soma(nome, valor1, valor2) {
  console.log(`Ola ${nome} como você está ?
  Vou retornar para você a soma dos valores que você me mandou `);
  return valor1 + valor2;
}
//console.log(soma("Matheus", 2, 4));

//Tratando valores default

function soma(nome, valor1 = 2, valor2 = 3) {
  console.log(`Ola ${nome} como você está ?
    Vou retornar para você a soma dos valores que você me mandou `);
  return valor1 + valor2;
}

//console.log(soma("Matheus"));

//Fazendo com arrow function

// let somar = (nome, valor1, valor2) =>
//   console.log(`Ola ${nome} a soma é ${valor1 + valor2}`);

// console.log(somar("Matheus", 4, 5));

let somar = (valor1, valor2) => valor1 + valor2;

let resultado = somar(4, 5);
console.log(resultado);
