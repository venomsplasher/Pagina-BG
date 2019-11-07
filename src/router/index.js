import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import {auth} from '../firebase';


Vue.use(VueRouter)



let router = new VueRouter({
  routes : [
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
      component: () => import('../views/CatalogoView.vue'),
      meta:{
        requiresGuest:false
        
      }
    }
    ,
    {
      path: '/contacto',
      name: 'contacto',
      component: () => import('../views/ContactoView.vue')
      ,
      meta:{
        requiresGuest:false
        
      }
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
      component: () => import('../views/NuevoProductoView.vue'),
      meta:{
        requiresAuth:true
        
      }
    }
    ,
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
      ,
      meta:{
        requiresGuest:true
        
      }
    }
    ,
    {
      path: '/administrador',
      name: 'administrador',
      component: () => import('../views/AdministradorView.vue'),
      meta:{
        requiresAuth:true
        
      }
    }
  ]
})

router.beforeEach((to,from,next)=>{
  //checkeo los requiredauth
  if(to.matched.some(record=>record.meta.requiresAuth)){
    //checkeo si no esta logeado
    if(!auth.currentUser){
      //ir al login
      next({
        path:'/login',
        query:{
          redirect: to.fullPath
        }
      });
    }
    else{
      //estoy logueado
      next();
    }

  }
  else if(to.matched.some(record=>record.meta.requiresGuest))
  {
     //checkeo si esta logeado
     if(auth.currentUser){
        //ir al login
        next({
          path:'/NuevoProducto',
          query:{
            redirect: to.fullPath
          }
        });
      }
      else{
        
        next();
      }
  }
  else{
    next();
  }
});

export default router
