import Vue from 'vue';
import Vuex from 'vuex';
import mainApp from '../main';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    storedLang: 'en',
  },
  mutations: {
    SET_LANG(state, payload) {
      mainApp.$i18n.locale = payload;
      state.storedLang = payload;
    },
  },
  actions: {
    setLang({ commit }, payload) {
      commit('SET_LANG', payload);
    }
  },
});
