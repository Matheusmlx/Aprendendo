/*
 
*/

var animais=[
    {name:'Fluffykins',species:'rabbit',idade:10},
    {name:'Caro',species:'dog',idade:10},
    {name:'Hamilton',species:'dog',idade:10},
    {name:'Ursola',species:'fish',idade:10},
    {name:'Jimmy',species:'cat',idade:10},
]
//uma linha  67 caracteres selecionados  
var totalAnimal=animais.reduce((sum,animal) =>{
  console.log(`Hello  ${sum}   ${animal.idade}`)
  return sum+animal.idade
},0)

console.log(totalAnimal)



