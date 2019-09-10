import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  //ele sera o estado centralizado
  state: {
    produtos: []
  },
  getters: {
    //Serve para retornar valores , geralmente utilizados para colocar alguma função
    valorTotal(state) {
      return state.produtos
        .map(p => p.quantidade * p.preco)
        .reduce((total, atual) => total + atual, 0);
    }
  },
  mutations: {
    //Serve apenas alterar o valor de um state
    adicionarProduto(state, payload) {
      state.produtos.push(payload);
    }
  },
  actions: {
    //Serve para tratar alguma regra de negocio antes de chamar a muttaions
    adicionarProduto({ commit }, payload) {
      //Se for apenas dois condições para ser comparados, utiliza ifternario
      !payload.quantidade && !payload.preco
        ? alert("Nenhum valor foi informado")
        : commit("adicionarProduto", payload);
      //: contexto.commit("adicionarProduto", payload);
    }
  }
});
