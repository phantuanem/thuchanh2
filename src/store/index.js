import state from './state'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import { createStore } from "vuex";



const stores = {
	state,
	actions,
	getters,
	mutations
}

export const store = createStore({
  modules: {
    stores
  }
});