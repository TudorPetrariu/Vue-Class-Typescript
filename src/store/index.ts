import Vue from "vue";
import Vuex from "vuex";
import { TableData } from "@/types/types";
import api from "../../plugins/axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: () => ({
    tableResources: Array<TableData>()
  }),
  getters: {
    tableResources(state) {
      return state.tableResources
    }
  },
  mutations: {
    setTableData(state, data) {
      state.tableResources = data
    }
  },
  actions: {
    async getTableData({ commit }) {
      try {
        const { data }: { data: TableData[] } = await api.get(`/resources`)
        commit('setTableData', data)
      } catch (error) {
        console.log('Cannot getTableData', error);
      }
    },
  },
});
