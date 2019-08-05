
new Vue({
    el:"#desafio",
    data:{
        nome:"Matheus",
        idade:20,
        img:"https://vignette.wikia.nocookie.net/naruto/images/3/33/Naruto_Uzumaki_%28Parte_I_-_HD%29.png/revision/latest?cb=20160316113315&path-prefix=pt-br"
    },
    methods:{
        random(){
            return Math.random()
        },
        mudarnome(event){
            event.target.value=this.nome;
        }
    }
})