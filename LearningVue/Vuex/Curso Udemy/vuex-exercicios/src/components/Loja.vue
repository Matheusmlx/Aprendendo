<template>
  <Painel titulo="Loja Virtual" verde>
    <div class="loja">
      <span>Adicionar</span>
      <input type="number" v-model.number="quantidade" />
      <span>
        itens de
        <strong>R$</strong>
      </span>
      <input type="number" v-model.number="preco" />
      <button @click="adicionar">Agora!</button>
    </div>
  </Painel>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      sequencia: 1,
      quantidade: 1,
      preco: 9.99
    };
  },
  methods: {
    ...mapActions(["adicionarProduto"]), //Outra forma de adicionar uma mutation no codigo

    adicionar() {
      const produto = {
        id: this.sequencia,
        nome: `Produto ${this.sequencia}`,
        quantidade: this.quantidade,
        preco: this.preco
      };
      this.sequencia++;
      // antigamente tinha acesso direto ao state this.$store.state.produtos.push(produto);

      //this.$store.commit("adicionarProduto", produto); //agora utilizando a mutation this.$store.commit('nomedaMutatio',parametro)
      this.adicionarProduto(produto);
      //this.$store.dispatch("adicionarProduto", produto);
    }
  }
};
</script>

<style>
.loja {
  display: flex;
  justify-content: center;
}

.loja > * {
  margin: 0px 10px;
}

input {
  font-size: 2rem;
  width: 90px;
}
</style>
