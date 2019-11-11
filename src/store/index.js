import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    productoEditar:{},
    carrito:[],
    itemsSeleccionados:[],
    carrito:{}
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
    },
    agregarSeleccionado(state,index){
      state.itemsSeleccionados.push(index);
    },
    vaciarSeleccionados(state){
      for (var i in state.itemsSeleccionados+1){
        state.itemsSeleccionados.pop();
      }
    },
    agregarCarrito(state,carrito){
      state.carrito = carrito;
      console.log(state.carrito);
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
    },
    getSeleccionados : state =>{
      return state.itemsSeleccionados
    },
    getCarrito : state =>{
      return state.carrito
    }
  }
})
