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
              <b-nav-item :to="{name:'home'}"><i class="material-icons" id="tienda">home</i><p>INICIO</p></b-nav-item>
              <b-nav-item :to="{name:'catalogo'}" class="ml-3"><i class="material-icons" id="tienda">storefront</i> <p>CATALOGO</p></b-nav-item>
              <b-nav-item :to="{name:'carrito'}"  class="ml-3"> <i class="material-icons" id="tienda">local_grocery_store</i> <p class="ITEM">CARRITO</p></b-nav-item>
              <b-nav-item :to="{name:'contacto'}" class="ml-3"><i class="material-icons" id="tienda">person_pin</i> <p>CONTACTO</p></b-nav-item>
              <!-- <b-nav-item :to="{name:'login'}"  class="ml-3" v-if="!estaLogueado()" >LOGIN</b-nav-item> -->
              <b-nav-item :to="{name:'nuevoProducto'}"  class="ml-3" v-if="estaLogueado()" ><i class="material-icons" id="tienda">cloud_upload</i><p>AGREGAR PRODUCTO</p></b-nav-item>
              <!-- <b-nav-item :to="{name:'modificarProducto'}"  class="ml-3" v-if="estaLogueado()" >MODIFICAR PRODUCTO</b-nav-item> -->
              <b-nav-item :to="{name:'administrador'}" class="ml-auto" v-if="estaLogueado()"><i class="material-icons" id="tienda">menu_book</i><p>CATALOGO ADMIN</p></b-nav-item>
              
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
    <div style="width:100%;overflow-x: hidden;min-height: 502px;">
      <router-view/>
    </div>
    <b-navbar toggleable="lg" type="dark" variant="dark"  sticky="true" >
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
            
            <b-nav-item :to="{name:'login'}" style="margin-left:2%" v-if="!estaLogueado()"><i class="material-icons" id="tienda">perm_identity</i><p>ADMIN</p></b-nav-item>
            <b-nav-item class="ml-3" @click="logout" v-if="estaLogueado()"><i class="material-icons" id="tienda">exit_to_app</i><p>CERRAR SESION</p></b-nav-item>
             <b-nav-item class="ml-auto" style="margin-rigth:0px"></b-nav-item>

            <!-- <b-col cols="5">
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
              </b-nav-text>      
            </b-col> -->

        </b-navbar-nav>
   
      </b-collapse>
       <i class="material-icons" style="color:white;margin-right:5px;margin-bottom:5px">copyright</i><p style="color:white" >Black Horse Software™ 2019</p>
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
#tienda{
  position: relative;
  margin-top:5px;
 
  font-size: 25px;
}
#ITEM{
  margin-bottom: 2px;
}
</style>
