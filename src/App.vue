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
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="ml-auto">
              <b-nav-item :to="{name:'home'}" class="ml-auto">INICIO</b-nav-item>
              <b-nav-item :to="{name:'catalogo'}" class="ml-auto">CATALOGO</b-nav-item>
              <b-nav-item :to="{name:'contacto'}" class="ml-auto">CONTACTO</b-nav-item>
            </b-navbar-nav>
          
            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
              <b-nav-item :to="{name:'nuevoProducto'}" class="ml-auto">NUEVO PRODUCTO</b-nav-item>
              <b-nav-item :to="{name:'administrador'}" class="ml-auto">ADMINISTRADOR</b-nav-item>
            </b-navbar-nav>
            
          </b-collapse>
        </b-navbar>
      </div>
    </div>
    <div>
    <router-view/>

    <b-navbar toggleable="lg" type="dark" variant="dark" bottom>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item>"BG Computacion 2019 - Todos los derechos e izquierdos bien puestos"</b-nav-item>      
        </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    </div>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
