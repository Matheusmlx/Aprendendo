//Um objeto em JS é uma entidade chave e valor;
const prod1 = {};

prod1.ace = 21;
prod1.cel = [];
prod1.cel.push(190);
prod1.cel.push(190);
prod1.name = {};
prod1.name.primeiro = "Matheus";
prod1.name.segundo = "Luiz";
//console.log(`Ola ${prod1.name.primeiro} ${prod1.name.segundo}`);

// Exercicio 1 Objeto pessoa
//primeiro você cria o obj e depois adiciona chaves e valores

pessoa = {};
pessoa.nome = {};
pessoa.nome.primeiro = "Matheus";
pessoa.nome.segundo = "Luiz";
pessoa.idade = 21;
pessoa.telefone = [{}];
pessoa.telefone[0].lugar = "Casa";
pessoa.telefone[0].numero = 190;
pessoa.telefone.push({ lugar: "Escritorio", numero: 192 });
console.log(pessoa);
