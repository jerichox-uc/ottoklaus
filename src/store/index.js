import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
const emptyToy = {

                   data: {
                   name: '',
                   price: 0,
                   code: '',
                   stock: 0
                },
                   id: null,
}

export default new Vuex.Store({


  state: {
    toys: [],
    showForm: false,
    currentToy: emptyToy,
    overlay: false
  },
  mutations: {
    SET_EMPTY_TOY (state) {
      state.currentToy.id = null
      Object.keys(emptyToy.data).forEach(key => {
        state.currentToy.data[key] = emptyToy.data[key]
      })
    },


    SET_TOYS(state, data){ state.toys = data },
    DISPLAY_TOY_FORM(state) {state.showForm = true },
    HIDE_TOY_FORM(state) {state.showForm = false},
    UPDATE_NAME(state, name){state.currentToy.data.name =name},
    UPDATE_PRICE(state, price){state.currentToy.data.price =price},
    UPDATE_CODE(state, code){state.currentToy.data.code =code},
    UPDATE_STOCK(state, stock){state.currentToy.data.stock =stock},
    SET_CURRENT_TOY(state, toy){state.currentToy = toy},
    DISPLAY_OVERLAY(state){
      state.overlay = true
    },
    HIDE_OVERLAY(state){
      state.overlay = false
    }
  },
  actions: {
    setToys({commit}){
      commit('OVERLAY')
      axios.get('https://us-central1-ottoklaus-8708b.cloudfunctions.net/toys/toys')
      .then(response => {
        commit('SET_TOYS', response.data)
        commit('SET_CURRENT_TOY', emptyToy)
      }) .finally(() => {
        commit('OVERLAY')
      })
    
  },
  displayToyForm({commit}) { commit ('DISPLAY_TOY_FORM')},
  hideToyForm({commit}) {commit('HIDE_TOY_FORM')},
  updateName({commit},name){commit('UPDATE_NAME', name)},
  updatePrice({commit},price){commit('UPDATE_PRICE', price)},
  updateCode({commit},code){commit('UPDATE_CODE', code)},
  updateStock({commit},stock){commit('UPDATE_STOCK', stock)},
  postToy({dispatch, state}){ 
    axios.post('https://us-central1-ottoklaus-8708b.cloudfunctions.net/toys/toy', state.currentToy.data)
    .then(() => {
      
      dispatch('setToys')
    })
  },
  deleteToy({dispatch}, id) {
    axios.delete(`https://us-central1-ottoklaus-8708b.cloudfunctions.net/toys/toy/${id}`)
    .then(() => {
      
      dispatch('setToys')
    })

  },
  setCurrentToy({commit}, id){
    axios.get(`https://us-central1-ottoklaus-8708b.cloudfunctions.net/toys/toy/${id}`)
    .then((response) => {
      commit('SET_CURRENT_TOY', response.data)
    })
  },
  updateToy({ state, dispatch }, id) {
    axios.put(`https://us-central1-ottoklaus-8708b.cloudfunctions.net/toys/toy/${id}`, state.currentToy.data)
    .then(() => {
      dispatch('setToys')
      
    })
  }
},
  modules: {
  }
})
