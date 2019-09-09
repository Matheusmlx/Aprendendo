const peso1 = 1.0;
//outra forma de se criar um numero
const peso2 = Number("2.0");

console.log(peso1, peso2);
//verificar se um numero é inteiro
console.log(Number.isInteger(peso1));

const avalizao1 = 9.871;
const avaliacao = 6.871;

const total = avalizao1 * peso1 + avaliacao * peso2;
const media = total / (peso1 + peso2);

console.log(media.toFixed(2));
//convertendo para binario
console.log(media.toString(2));
//convertendo para String
console.log(media.toString());
