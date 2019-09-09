//Armazenando uma funcao em uma variavel
const impirmirSoma = function(a, b) {
  //Funcao anonima
  console.log(a + b);
};

//impirmirSoma(2, 3);

//Armazenando uma funcao arrow em uma variavel
const soma = (a, b) => {
  return a + b;
};
//console.log(soma(2, 3));

//retorno implícito
const subtrair = (a, b) => a - b;

console.log(subtrair(42, 3));

//reduzindo ainda mais

const imprimir = a => console.log(a);
imprimir("Legall!!!");
