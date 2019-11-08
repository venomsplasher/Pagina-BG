<template>
    <div class="mt-3">
        <div class="mx-auto w-50 h-100">
        <b-row>
            <b-col>
                <b-input-group prepend="Nombre y Apellido" class="mt-3">
                    <b-form-input v-model="nombreyapellido"></b-form-input>
                    
                </b-input-group>
                
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <b-input-group prepend="Telefono" class="mt-3">
                    <b-form-input v-model="telefono"></b-form-input>
                </b-input-group>
            </b-col>
            <b-col>
                <b-input-group prepend="E-mail" class="mt-3">
                    <b-form-input v-model="email"></b-form-input>
                </b-input-group>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <!-- <b-input-group prepend="Consulta" class="mt-3">
                    <b-form-input></b-form-input>
                </b-input-group> -->
                <b-form-textarea
                    v-model="consulta"
                    id="textarea-default"
                    placeholder="Consulta"
                    class="mt-3"
                ></b-form-textarea>
            </b-col>
        </b-row>
    </div>

        <div  id="iconoscontacto" style="width:100%;padding-bottom:5%;padding-top:5%;">
            <b-row>
                <b-col cols="4"></b-col>
                    <b-col>
                        <a :href="'mailto:juansolo1988@gmail.com ?subject=Consulta%20Presupuesto%20para%20BG%20Computacion &body=Nombre:%20'+this.nombreyapellido+'%0A'+'Telefono:%20'+this.telefono+'%0A'+'E-Mail:%20'+this.email+'%0A'+'Consulta:%20'+this.consultaUrl+'%0A%0A%0A%0A%0A%0A%0A%0A'">
                            <img class="imagen" style="display:block; margin:auto; padding-top:0%; width:100px"  src="http://www.suitdoctors.com/wp-content/uploads/2015/11/Email-Icon.png"/>
                        </a>
                        <div id="consultaemail">
                            <p>Consultanos via Email</p>   
                        </div>
                    </b-col>
                    <b-col> 
                        <a :href="'https://wa.me/542267530998?text=Nombre:%20'+this.nombreyapellido+'%0A'+'Telefono:%20'+this.telefono+'%0A'+'E-Mail:%20'+this.email+'%0A'+'Consulta:%0A'+this.consultaUrl+'%0A%0A'+'Consulta realizada desde BG Computacion Web'">
                            <img class="imagen" style="display:block; margin:auto; padding-top:0%; width:100px"  src=" http://chaposac.com/wp-content/uploads/2017/09/icono-whatsapp-chaposac.png"/>
                        </a>
                        <div id="consultawhatsapp" >
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
    name: 'Contacto',
    data(){
        return {
            nombreyapellido:'',
            telefono:'',
            email:'',
            consulta:'',
            consultaUrl:''
        }
    },
    methods:{
        linkear(){
            window.location.href = 'mailto:juansolo1988@gmail.com ?subject=Consulta%20Presupuesto%20para%20BG%20Computacion &body=BLABLABLA' + this.nombreyapellido;
        },
        traerCarrito(){
            for(var i in this.$store.getters.getCarrito){
            this.consulta += "Producto: "+this.$store.getters.getCarrito[i].titulo+"\nMarca: "+this.$store.getters.getCarrito[i].marca+"\nCantidad: "+this.$store.getters.getCarrito[i].cantidad+"\n\n"
            this.consultaUrl += "%0AProducto: "+this.$store.getters.getCarrito[i].titulo+"%0AMarca: "+this.$store.getters.getCarrito[i].marca+"%0ACantidad: "+this.$store.getters.getCarrito[i].cantidad+"%0A%0A"
            }
            //armo la string para que quede bien en la url 

        }
    },
    mounted(){
        this.traerCarrito();
    }
}
</script>