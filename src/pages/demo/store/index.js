import Vue from 'vue'
import Vuex from 'vuex'
import home from './module/home'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    home
  },
  plugins: [createPersistedState('test')],
  state: {}
})

export default store
