//Valore Nulos e Undefined
let valor; // não inicializada
console.log(valor);

valor = null; //ausencia de valor; inicializada mas sem valor
console.log(valor);

//Valores por referencia e por valor

const a = {};
a.nome = "Matheus";
console.log(a.nome);

b = a;
console.log(b.nome);

b.nome = "Luiz";
console.log(b.nome);
console.log(a.nome);
//Os valores foram alterados porque as duas constantes estão apontando para o mesmo obj e esse valor é por referencia

const c = 4;
console.log(c);
let d = c;
console.log(d);
d = 6;
console.log(d);
console.log(c);
// Os valores não foram alterados porque as duas variaveis estão apontando para lugar diferentes e essse valor é por copia
