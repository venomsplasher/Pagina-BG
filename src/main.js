import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './firebase';


// import VueFire from 'vuefire'
import { firestorePlugin } from 'vuefire'
import { rtdbPlugin } from 'vuefire'

Vue.use(rtdbPlugin)

Vue.use(firestorePlugin)
Vue.use(VueAxios, axios)
Vue.use(BootstrapVue)
// Vue.use(VueFire)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
