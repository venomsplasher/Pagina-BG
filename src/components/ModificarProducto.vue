<template>
      <b-container class="bv-example-row mt-5 ">
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
                <b-col>
                    <p style="font-size:20px;text-align:start">Stock Disponible</p>
                    <b-form-checkbox
                        id="checkstock"
                        v-model="stockdisponible"
                        name="checkstock"
                        value="Si"
                        unchecked-value="No"
                    ></b-form-checkbox>
                </b-col>
            </b-row>

            <b-row class="mt-5">
                <b-col cols="4">
                    <p style="font-size:20px;text-align:start;margin-top:5px">Url de la imagen</p>
                    <b-form-input type="text" v-model="url" placeholder="Pegue Aqui la Url de la imagen"></b-form-input>
                </b-col>
                <b-col cols="8" v-if="url!=''">

                    <b-img center :src="url" alt="Imagen inexistente" style="width:500px ;height:500px"></b-img>

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
            <b-button  class="mt-3" variant="info" :disabled="validarRegistro" @click="updateProducto()+showModal()">Actualizar Producto</b-button>

            <b-modal ref="modal-modificado-ok" hide-footer title="Modificacion exitosa">
                <div class="d-block text-center">
                    <h3>Producto modificado correctamente.</h3>
                </div>
                <b-button class="mt-3" variant="outline-success" block @click="limpiarCampos()+hideModal()+gotoAdministrador()">Aceptar</b-button>
            </b-modal>

        </b-container>
    
</template>
<style>

</style>
<script>

import { store } from '../store'
import {Productos} from '../firebase'
export default {


    name: 'ModificarProducto',
    data() {
        return {
            titulo: '',
            stockdisponible: '',
            marca:'',
            categoria:'',
            descripcion:'',
            url:'',
            precio:'',
            ProductoStore:{},
            productos:[]
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
        // validarInsert(){
        //     if(this.titulo == ''|| this.stock==''|| this.precio=='')
        //     {
        //         return true;
        //     }
        //     else
        //     {
        //         return false;
        //     }
        // },
        validarRegistro(){
            if(this.titulo==undefined|| 
                this.marca==undefined|| 
                this.categoria==undefined|| 
                this.precio==undefined|| 
                this.url==undefined|| 
                this.descripcion==undefined||
                this.titulo==''|| 
                this.marca==''|| 
                this.categoria==''|| 
                this.precio==''|| 
                this.url==''|| 
                this.descripcion==''
                )
            {
                return true;
            }
            else
            {
                return false;
            }
        }
    },
    methods:{
        gotoAdministrador(){
            this.$router.push('./administrador');
        },
        showModal() {
            this.$refs['modal-modificado-ok'].show();
        },
        hideModal() {
            this.$refs['modal-modificado-ok'].hide();
        },
        limpiarCampos(){
            this.titulo="",
            this.marca="",
            this.categoria="",
            this.url="",
            this.descripcion="",
            this.precio="",
            this.stockdisponible=""
        },
        PostProducto(){
            Productos.push({
                titulo: this.titulo,
                stockdisponible: this.stockdisponible,
                marca: this.marca,
                categoria: this.categoria,
                descripcion: this.descripcion,
                url: this.url,
                precio: this.precio
                });
        },
        getProductoFromStore(){
            this.ProductoStore = this.$store.getters.getProducto
            console.log(this.ProductoStore);
            this.armarProdSeleccionado();
        },
        armarProdSeleccionado(){
            this.titulo = this.ProductoStore.titulo;
            this.stockdisponible = this.ProductoStore.stockdisponible;
            this.marca = this.ProductoStore.marca;
            this.categoria = this.ProductoStore.categoria;
            this.descripcion = this.ProductoStore.descripcion;
            this.url = this.ProductoStore.url;
            this.precio = this.ProductoStore.precio;
            
        },
        updateProducto(){
            var key = this.ProductoStore['.key']
            try {
            Productos.child(key).update({

                titulo: this.titulo,
                stockdisponible: this.stockdisponible,
                marca: this.marca,
                categoria: this.categoria,
                descripcion: this.descripcion,
                url: this.url,
                precio : this.precio

            })
            } catch
            {
                alert("anduvo ejhem como el orto");
            }
        }
    },
    
    mounted(){
       this.getProductoFromStore();
    //    this.idProducto = this.$store.getters.getIdProducto;
    //     alert('el id que vino desde la base es: '+this.idProducto);
   }
}
</script>