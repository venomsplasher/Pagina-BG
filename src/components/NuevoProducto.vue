<template>
    
      <b-container class="bv-example-row mt-5">
            <b-row>
                <b-col>
                    <p style="font-size:20px;text-align:start">Nombre de Producto</p>
                    <b-form-input type="text" v-model="titulo" :state="validarCampo" placeholder="Minimo 5 caracteres"></b-form-input>
                    </b-col>
                <b-col>
                    <p style="font-size:20px;text-align:start">Marca</p>
                    <b-form-input type="text" v-model="marca"  placeholder="Escribe aqui"></b-form-input>
                </b-col>
                <b-col>
                    <p style="font-size:20px;text-align:start">Categoria</p>
                    <b-form-input type="text" v-model="categoria"  placeholder="Escribe aqui"></b-form-input>
                </b-col>
                <b-col>
                    <p style="font-size:20px;text-align:start">Precio</p>
                    <b-form-input type="text" v-model="precio" placeholder="valor no nulo"></b-form-input>
                </b-col>

            </b-row>

            <b-row class="mt-5">
                <b-col cols="4">
                    <p style="font-size:20px;text-align:start;margin-top:5px">Url de la imagen</p>
                    <b-form-input type="text" v-model="url" placeholder="Pegue Aqui la Url de la imagen"></b-form-input>
                </b-col>
                <b-col cols="8" v-if="url!=''">

                    <b-img center :src="url" alt="Imagen inexistente"></b-img>

                </b-col>

            </b-row>

            <b-row class="mt-5">
                <b-col>
                    <p style="font-size:20px;text-align:start;margin-top:5px">Descripcion del producto</p>
                    <b-form-textarea
                        id="textarea"
                        v-model="descripcion"
                        placeholder="Ingresa una descripcion"
                        rows="3"
                        max-rows="6"
                    ></b-form-textarea>
                </b-col>
                
            </b-row>
             <b-button  class="mt-3" variant="info" :disabled="validarInsert" @click="PostProducto()">Guardar Producto</b-button>
        </b-container>
    
</template>
<style>

</style>
<script>


import {Productos} from '../firebase'
export default {


    name: 'NuevoProducto',
    data() {
        return {
            titulo: '',
            stock: '',
            marca:'',
            categoria:'',
            descripcion:'',
            url:'',
            precio:''
            
        }
    },
    firebase: {
      productos: Productos    
    },
    computed:{
        validarCampo(){
             if(this.titulo.length > 4 )
            {
                return true;
            }
            else if(this.titulo.length == 0 )
            {
                return null;
            }
            else
            {
                return false;
            }
        },
        validarInsert(){
            if(this.titulo == ''|| this.stock==''|| this.precio=='')
            {
                return false;
            }
            else
            {
                return false;
            }
        }
    },
    methods:{
        PostProducto(){
            Productos.push({
                titulo: this.titulo,
                stock: this.stock,
                marca: this.marca,
                categoria: this.categoria,
                descripcion: this.descripcion,
                url: this.url,
                precio: this.precio
                });
        }
     
    },
   
}
</script>