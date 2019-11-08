<template>
  <div id="app">
   
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    
    <div id="navbar">
      <div id="contienelogo">
      <img alt="Vue logo" id="logo" src="./assets/LogoBG.png">
      </div>
      <div>
        <b-navbar toggleable="lg" type="dark" variant="dark" fixed>
          <!-- <b-navbar-brand href="#">NavBar</b-navbar-brand> -->

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="ml-auto">
              <b-nav-item :to="{name:'home'}">INICIO</b-nav-item>
              <b-nav-item :to="{name:'catalogo'}" class="ml-3">CATALOGO</b-nav-item>
              <b-nav-item :to="{name:'contacto'}"  class="ml-3">CONTACTO</b-nav-item>
              <b-nav-item :to="{name:'login'}"  class="ml-3" v-if="!estaLogueado()" >LOGIN</b-nav-item>
              <b-nav-item :to="{name:'nuevoProducto'}"  class="ml-3" v-if="estaLogueado()" >AGREGAR PRODUCTO</b-nav-item>
              <b-nav-item :to="{name:'modificarProducto'}"  class="ml-3" v-if="estaLogueado()" >MODIFICAR PRODUCTO</b-nav-item>
              <b-nav-item :to="{name:'administrador'}" class="ml-auto" v-if="estaLogueado()">CATALOGO ADMIN</b-nav-item>
              <b-nav-item class="ml-3" @click="logout" v-if="estaLogueado()">DESLOGEARSE</b-nav-item>
              
              <!-- <b-nav-item-dropdown text="Productos" class="ml-3" right>
                <b-dropdown-item href="#">EN</b-dropdown-item>
                <b-dropdown-item href="#">ES</b-dropdown-item>
                <b-dropdown-item href="#">RU</b-dropdown-item>
                <b-dropdown-item href="#">FA</b-dropdown-item>
              </b-nav-item-dropdown> -->

              <!-- <b-nav-item-dropdown right class="ml-3"> -->
                <!-- Using 'button-content' slot -->
                <!-- <template v-slot:button-content>
                  <em>User</em>
                </template>
                <b-dropdown-item href="#">Profile</b-dropdown-item>
                <b-dropdown-item href="#">Sign Out</b-dropdown-item>
              </b-nav-item-dropdown> -->
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
              <!-- <b-nav-item href="#">Inicio</b-nav-item> -->
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>
    </div>
    <div>
    <router-view/>

    <b-navbar toggleable="lg" type="dark" variant="dark" style="" bottom class="mt-5">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-row>

            <b-col cols="5">
              <b-nav-text>
              Local Pinamar<br />
              Totoras 174<br />
              02254-513484
              </b-nav-text>
            </b-col>

            <b-col cols="7">
              <b-nav-text>
                Local Valeria<br />
                Espora y Urquiza<br />
                02254-513484
              </b-nav-text>      
            </b-col>

          </b-row>
        </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    
    </div>
  </div>
</template>

<script>
import {auth} from './firebase'
export default {
  name:'navbar',
  data(){
    return{
      usuario:false
    }
  },
    methods:{
      logout(){
        auth.signOut().then(()=>{
          this.$router.push('./login');
        })
      },
      estaLogueado(){
        if(auth.currentUser){
          
          return true;
        }else{
          return false
        }
      }
    }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
#navbar{
  align-items: center;
  
}
#logo{
  width: 500px;
}
#contienelogo{
  background: black;
}
</style>
