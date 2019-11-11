<template>
    <div class="mt-3">
        <div class="mx-auto w-50 h-100">
            <H1 style="text-align:start">CARRITO DE COMPRA</H1>
        <b-row>
            <b-col>
                <b-input-group prepend="Nombre y Apellido" class="mt-3">
                    <b-form-input v-model="nombreyapellido" @change="commitearCarrito"></b-form-input>
                    
                </b-input-group>
                
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <b-input-group prepend="Telefono" class="mt-3">
                    <b-form-input v-model="telefono" @change="commitearCarrito"></b-form-input>
                </b-input-group>
            </b-col>
            <b-col>
                <b-input-group prepend="E-mail" class="mt-3">
                    <b-form-input v-model="email" @change="commitearCarrito"></b-form-input>
                </b-input-group>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <!-- <b-input-group prepend="Consulta" class="mt-3">
                    <b-form-input></b-form-input>
                </b-input-group> -->
                
                <div style="width:100%; display:inline-flex">
                    <p style="font-size:20px; text-align:start; margin-top:15px; ">SU PEDIDO:</p>
                    <b-button class="mt-3" variant="danger" style="margin-left:80%" @click="limpiarCarrito()"><i class="material-icons" id="tienda">delete</i></b-button>
                </div>
                
                <b-form-textarea
                    v-model="consulta"
                    
                    id="textarea-default"
                    placeholder="Su carrito"
                    class="mt-3"
                    rows="12"
                    readonly="true"
                    no-resize="true"
                ></b-form-textarea>
            </b-col>
        </b-row>
    </div>

        <div  id="iconoscarrito" style="width:100%;padding-bottom:5%;padding-top:5%;">
            <b-row>
                <b-col cols="4"></b-col>
                    <b-col>
                        <a v-if="camposCompletos" :href="'mailto:bgcomputacionpinamar@hotmail.com ?subject=Pedido%20Preeliminar%20para%20BG%20Computacion &body=Nombre:%20'+this.nombreyapellido+'%0A'+'Telefono:%20'+this.telefono+'%0A'+'E-Mail:%20'+this.email+'%0A'+'Pedido:%20%0A'+this.consultaUrl+'%0A%0A%0A%0A%0A%0A%0A%0A'">
                            <img class="imagen" style="display:block; margin:auto; padding-top:0%; width:100px"  src="http://www.suitdoctors.com/wp-content/uploads/2015/11/Email-Icon.png"/>
                        </a>
                        <div v-if="camposCompletos" id="consultaemail">
                            <p>Consultanos via Email</p>   
                        </div>
                    </b-col>
                    <b-col> 
                        <a v-if="camposCompletos" :href="'https://wa.me/542254594530?text=Nombre:%20'+this.nombreyapellido+'%0A'+'Telefono:%20'+this.telefono+'%0A'+'E-Mail:%20'+this.email+'%0A'+'Pedido:%0A'+this.consultaUrl+'%0A%0A'+'Consulta realizada desde BG Computacion Web'">
                            <img class="imagen" style="display:block; margin:auto; padding-top:0%; width:100px"  src=" http://chaposac.com/wp-content/uploads/2017/09/icono-whatsapp-chaposac.png"/>
                        </a>
                        <div v-if="camposCompletos" id="consultawhatsapp" >
                            <p>Consultanos via Whatsapp</p>   
                        </div> 
                    </b-col>
                <b-col cols="4"></b-col>
            </b-row>
        </div>
        <!-- 542254594530 -->
    </div> 
</template>
<style>

</style>
<script>
import { store } from '../store'

export default {
    name: 'Carrito',
    data(){
        return {
            nombreyapellido:'',
            telefono:'',
            email:'',
            consulta:'',
            consultaUrl:'',
            camposCompletos:false,
            total:0        }
    },
    methods:{
        linkear(){
            window.location.href = 'mailto:juansolo1988@gmail.com ?subject=Consulta%20Presupuesto%20para%20BG%20Computacion &body=BLABLABLA' + this.nombreyapellido;
        },
        traerCarrito(){
            for(var i in this.$store.getters.getCarrito){
            this.total += (this.$store.getters.getCarrito[i].precio*this.$store.getters.getCarrito[i].cantidad);     
            this.consulta += "Producto: "+this.$store.getters.getCarrito[i].titulo+"\nMarca: "+this.$store.getters.getCarrito[i].marca+"\nCantidad: "+this.$store.getters.getCarrito[i].cantidad+"\nPrecio Unitario: $"+this.$store.getters.getCarrito[i].precio + "\nSubtotal: $"+(this.$store.getters.getCarrito[i].precio*this.$store.getters.getCarrito[i].cantidad)+"\n\n"
            this.consultaUrl += "%0AProducto: "+this.$store.getters.getCarrito[i].titulo+"%0AMarca: "+this.$store.getters.getCarrito[i].marca+"%0ACantidad: "+this.$store.getters.getCarrito[i].cantidad+"%0APrecio Unitario: $"+this.$store.getters.getCarrito[i].precio + "%0ASubtotal: $"+(this.$store.getters.getCarrito[i].precio*this.$store.getters.getCarrito[i].cantidad)+"%0A"
            }
            //armo la string para que quede bien en la url 
            this.consulta+="\n-----TOTAL------: $"+this.total;
            this.consultaUrl+="%0A-----TOTAL------: $"+this.total;
        },
        limpiarCarrito(){
            this.$store.commit('vaciarCarrito');
            this.$store.commit('vaciarSeleccionados');
            this.consulta="Carrito Vacio";
        },
        commitearCarrito(){
            var carrito = {
                nombreyapellido: this.nombreyapellido,
                telefono: this.telefono,
                email: this.email
            }
            this.$store.commit('agregarCarrito',carrito);
            this.habilitarCarrito();
        },
        traerCarrito(){
            var carritoStore = this.$store.getters.getcarrito;
            this.nombreyapellido = carritoStore.nombreyapellido;
            this.telefono = carritoStore.telefono;
            this.email = carritoStore.email;
            
        },
        habilitarCarrito(){
                
            if(this.consulta!= undefined&&this.nombreyapellido!= undefined&&this.telefono!= undefined&&this.email!= undefined&&this.consulta!=''&&this.nombreyapellido!=''&&this.telefono!=''&&this.email!=''){
                this.camposCompletos = true;
                
            }else{
                this.camposCompletos = false;
            }
        }
    },

    mounted(){
        this.traerCarrito();
        this.traerCarrito();
        this.habilitarCarrito();
    }
}
</script>