import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/Home.vue')
  }
  ,
  {
    path: '/catalogo',
    name: 'catalogo',
    component: () => import('../views/CatalogoView.vue')
  }
  ,
  {
    path: '/contacto',
    name: 'contacto',
    component: () => import('../views/ContactoView.vue')
  }
  ,
  {
    path: '/prueba',
    name: 'prueba',
    component: () => import('../views/PruebaFirebaseView.vue')
  }
  ,
  {
    path: '/nuevoProducto',
    name: 'nuevoProducto',
    component: () => import('../views/NuevoProductoView.vue')
  }
  ,
  {
    path: '/administrador',
    name: 'administrador',
    component: () => import('../views/AdministradorView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
