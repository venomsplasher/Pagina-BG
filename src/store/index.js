import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    productoEditar:{},
    carrito:[]
  },
  mutations: {
    setProducto (state, productoDeAfuera) {
      state.productoEditar=productoDeAfuera;
    },
    agregarProd(state,producto){
      state.carrito.push(producto);
    },
    vaciarCarrito (state){
      for (var i in state.carrito+1){
        state.carrito.pop();
      }
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    getProducto : state => {
      return state.productoEditar
    },
    getCarrito : state =>{
      return state.carrito
    }
  }
})
