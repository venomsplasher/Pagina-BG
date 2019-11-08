<template>
    <div class="container   mt-5">
        <h1 style="text-align:start"> ADMINISTRADOR</h1>
        <p style="font-size:20px;text-align:start;margin-top:5%">Email de Google</p>
        <b-form-input v-model="email" type="email"></b-form-input>

        <p style="font-size:20px;text-align:start;margin-top:5px">Contraseña</p>
        <b-form-input v-model="password" type="password"></b-form-input>
        <b-button size="lg" class="mt-5" @click="Login">Ingresar</b-button>
    </div>
</template>
<script>
import {auth} from '../firebase';

export default {
    name:'Login',
    data(){
        return{
            email:'',
            password:'',
            Auth:''
        }
    },
    firebase: {
      Auth: auth    
    },
    methods:{
        Login: function(e){
            
            auth
            .signInWithEmailAndPassword(this.email,this.password)
            .then(
                user => {
                    alert("Bienvenido");
                    this.$router.push('/Administrador');
                },
                err =>{
                    alert(err.message)
                }
            );
            e.preventDefault();
        }
    }
}
</script>