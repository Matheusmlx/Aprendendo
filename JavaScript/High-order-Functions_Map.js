/*
 
*/

var animais=[
    {name:'Fluffykins',species:'rabbit'},
    {name:'Caro',species:'dog'},
    {name:'Hamilton',species:'dog'},
    {name:'Ursola',species:'fish'},
    {name:'Jimmy',species:'cat'},
]
//uma linha  67 caracteres selecionados  
var nomes=animais.map(animal=>animal.name+' Is a '+ animal.species)



/*
var nomes=[];
  for(var i=0;i<animais.length;i++){
    nomes.push(animais[i].name + ' Is a '+animais[i].species)
  }
3 linhas utilizas 116 caracteres foram selecionados
  //
  */

 var pessoa = [
  {name:'Matheus',idade:20,sexo:'M'},
  {name:'Luiz',idade:19,sexo:'M'},
  {name:'Pedro',idade:18,sexo:'M'},
  {name:'Joao',idade:19,sexo:'F'},
  {name:'Mario',idade:21,sexo:'M'},
  {name:'Julia',idade:22,sexo:'F'}
]


var nomesPessoa=pessoa.map(pessoa=>pessoa.name)

console.log(nomesPessoa)
