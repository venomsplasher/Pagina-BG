<template>
    <div class="container">
        <b-form-input v-model="nombre" placeholder="Enter your name"></b-form-input>
        <div class="mt-2">Value: {{ nombre }}</div>
        <b-button @click="guardarNombre()">guardar</b-button>
  
        <div>
            <ul>
                <li v-for="personName of nombres" v-bind:key="personName['.key']">
                    
                    <div v-if="!personName.edit">
                        <p>{{personName.nombre}}</p><br>
                        <b-button variant="danger" @click="borrarNombre(personName['.key'])">Borrar</b-button>
                        <b-button class="ml-3" variant="info" @click="editarNombre(personName['.key'])">Editar</b-button>
                    </div>
                    <div v-else>
                        <b-form-input v-model="personName.nombre" placeholder="Ingresa nuevo nombre"></b-form-input>
                        <b-button variant="danger" @click="guardarCambios(personName)">Guardar</b-button>
                        <b-button class="ml-3" variant="danger" @click="cancelarEdicion(personName['.key'])">Cancelar</b-button>
                    </div>

                </li>
                
            </ul>
        </div>
    </div>
</template>
<style>

</style>
<script>

import {namesRef} from '../firebase'
import {Productos} from '../firebase'
export default {


    name: 'FirebasePrueba',
    data() {
        return {
            nombre: '',
             
            nombres: []
            
        }
    },
    firebase: {
      nombres: namesRef    
    },
    
    methods:{
        guardarNombre(){
            namesRef.push({nombre: this.nombre, edit: false});
            Productos.push({titulo:'algo'});
        }
        ,
        borrarNombre(key){
            namesRef.child(key).remove();
        }
        ,
        editarNombre(key){
            namesRef.child(key).update({edit:true});
        }
        ,
        cancelarEdicion(key){
            namesRef.child(key).update({edit:false});
        }
        ,
        guardarCambios(persona){
            const key = persona['.key']
            namesRef.child(key).set({nombre: persona.nombre,edit:false })
        }
    },
   
}
</script>