/*
  O método filter() cria um novo array com todos
   os elementos que passaram no teste implementado pela função fornecida.
*/

var animais=[
    {name:'Fluffykins',species:'rabbit'},
    {name:'Caro',species:'dog'},
    {name:'Hamilton',species:'dog'},
    {name:'Ursola',species:'fish'},
    {name:'Jimmy',species:'cat'},
]
//Filter Cria um novo array com os valores verdadeiros da condição criada
var isDog=function(animal){
    return animal.species==='dog'
}

var dogs=animais.filter(isDog)

//função reduzida 
var Dogs=animais.filter(animal=>animal.species==='dog')

//função completa
var Dogs=animais.filter(function(animal){
    return animal.species==='dog'
})

//console.log(Dogs)


var pessoa = [
    {name:'Matheus',idade:20,sexo:'M'},
    {name:'Luiz',idade:19,sexo:'M'},
    {name:'Pedro',idade:18,sexo:'M'},
    {name:'Joao',idade:19,sexo:'F'},
    {name:'Mario',idade:21,sexo:'M'},
    {name:'Julia',idade:22,sexo:'F'}
]

var maior20=pessoa.filter(pessoa=>pessoa.idade>=20 && pessoa.sexo==='M')

console.log(maior20)