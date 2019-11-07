<template>
    <div class="mt-3">
        <div class="mx-auto w-50 h-100">
        <b-row>
            <b-col>
                <b-input-group prepend="Nombre y Apellido" class="mt-3">
                    <b-form-input></b-form-input>
                </b-input-group>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <b-input-group prepend="Telefono" class="mt-3">
                    <b-form-input></b-form-input>
                </b-input-group>
            </b-col>
            <b-col>
                <b-input-group prepend="E-mail" class="mt-3">
                    <b-form-input></b-form-input>
                </b-input-group>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <!-- <b-input-group prepend="Consulta" class="mt-3">
                    <b-form-input></b-form-input>
                </b-input-group> -->
                <b-form-textarea
                    id="textarea-default"
                    placeholder="Consulta"
                    class="mt-3"
                ></b-form-textarea>
            </b-col>
        </b-row>
        
        </div>

        <div  id="iconoscontacto" style="width:100%;padding-bottom:5%;padding-top:5%;">
            <a href="mailto:juansolo1988@gmail.com ?subject=Consulta%20Presupuesto%20para%20BG%20Computacion &body=Pasame%20los%20precios%20gato!">
                <img class="imagen" style="display:block; margin:auto; padding-top:0%; width:100px"  src="http://www.suitdoctors.com/wp-content/uploads/2015/11/Email-Icon.png"/>
            </a>
            <div id="consulta" >
                <p>Consultanos via Email</p>   
            </div> 
            <a href="https://wa.me/542254594530?text=Hola!%20este%20es%20un%20mensaje%20automatico%20de%20prueba%20desde%20la%20web%20de%20BGComputacion">
            <!-- <a href="https://wa.me/542254413556?text=Hola!%20Necesito%20informacion%20sobre..."> -->
                <img class="imagen" style="display:block; margin:auto; padding-top:0%; width:100px"  src=" http://chaposac.com/wp-content/uploads/2017/09/icono-whatsapp-chaposac.png"/>
            </a>
            <div id="consulta" >
                <p>Consultanos via Whatsapp</p>   
            </div> 
            
        </div>
        
    </div> 
</template>
<style>

</style>
<script>


export default {
    name: 'Contacto',
  components: {
  
  
  }
}
</script>