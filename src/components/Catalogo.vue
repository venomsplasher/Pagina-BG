<template>
<div style="min-height: 500px;">
        <b-container fluid>
                            <b-modal ref="my-modal" hide-footer title="Agregar al Carrito">
                    <div class="d-block text-center">
                        <p style="text-align:start;font-weigth:800">{{itemSeleccionado.titulo}}</p>
                        <b-row class="my-1">
                            <b-col sm="2">
                            <label for="input-small">Cantidad:</label>
                            </b-col>
                            <b-col sm="10">
                            <b-form-input v-model="cantidad" :state="cantidad>0" id="input-small" size="sm" placeholder="Ingresar Cantidad" type="number"></b-form-input>
                            </b-col>
                        </b-row>
                    </div>
                    <b-button class="mt-3" variant="outline-success" block @click="hideModal()+agregarAlCarrito(itemSeleccionado,itemSeleccionado.index)" v-if="cantidad>0">Confirmar</b-button>
                </b-modal>
            <!-- User Interface controls -->
            <b-row>
            <b-col lg="6" class="my-1">
                <b-form-group
                label="Ordenar Por"
                label-cols-sm="3"
                label-align-sm="right"
                label-size="sm"
                label-for="sortBySelect"
                class="mb-0"
                >
                <b-input-group size="sm">
                    <b-form-select v-model="sortBy" id="sortBySelect" :options="sortOptions" class="w-75">
                    <template v-slot:first>
                        <option value="">-- ninguno --</option>
                    </template>
                    </b-form-select>
                    <b-form-select v-model="sortDesc" size="sm" :disabled="!sortBy" class="w-25">
                    <option :value="false">Ascendente</option>
                    <option :value="true">Descendente</option>
                    </b-form-select>
                </b-input-group>
                </b-form-group>
            </b-col>

            <b-col lg="6" class="my-1">
                <b-form-group
                label="Ordenamiento Inicial"
                label-cols-sm="3"
                label-align-sm="right"
                label-size="sm"
                label-for="initialSortSelect"
                class="mb-0"
                >
                <b-form-select
                    v-model="sortDirection"
                    id="initialSortSelect"
                    size="sm"
                    :options="['Ascendente', 'Descendente', 'Ultimo']"
                ></b-form-select>
                </b-form-group>
            </b-col>

            <b-col lg="6" class="my-1">
                <b-form-group
                label="Buscar"
                label-cols-sm="3"
                label-align-sm="right"
                label-size="sm"
                label-for="filterInput"
                class="mb-0"
                >
                <b-input-group size="sm">
                    <b-form-input
                    v-model="filter"
                    type="search"
                    id="filterInput"
                    placeholder="Escribe para buscar"
                    ></b-form-input>
                    <b-input-group-append>
                    <b-button :disabled="!filter" @click="filter = ''">Limpiar</b-button>
                    </b-input-group-append>
                </b-input-group>
                </b-form-group>
            </b-col>

            <b-col lg="6" class="my-1">
                <b-form-group
                label="Buscar por"
                label-cols-sm="3"
                label-align-sm="right"
                label-size="sm"
                description="Mantener todos deseleccionados para buscar por todos los campos"
                class="mb-0">
                <b-form-checkbox-group v-model="filterOn" class="mt-1">
                    <b-form-checkbox value="titulo">Titulo</b-form-checkbox>
                    <b-form-checkbox value="categoria">Categoria</b-form-checkbox>
                    <b-form-checkbox value="marca">Marca</b-form-checkbox>
                </b-form-checkbox-group>
                </b-form-group>
            </b-col>

            <b-col sm="5" md="6" class="my-1">
                <b-form-group
                label="Mostrar los primeros : "
                label-cols-sm="6"
                label-cols-md="4"
                label-cols-lg="3"
                label-align-sm="right"
                label-size="sm"
                label-for="perPageSelect"
                class="mb-0"
                >
                <b-form-select
                    v-model="perPage"
                    id="perPageSelect"
                    size="sm"
                    :options="pageOptions"
                ></b-form-select>
                </b-form-group>
            </b-col>

            <!-- <b-col sm="7" md="6" class="my-1">
                <b-pagination
                v-model="currentPage"
                :total-rows="totalRows"
                :per-page="perPage"
                align="fill"
                size="sm"
                class="my-0"
                ></b-pagination>
            </b-col> -->
            </b-row>

            <!-- Main table element -->
            <b-table
            show-empty
            small
            stacked="md"
            :items="items"
            :fields="fields"
            :current-page="currentPage"
            :per-page="perPage"
            :filter="filter"
            :filterIncludedFields="filterOn"
            :sort-by.sync="sortBy"
            :sort-desc.sync="sortDesc"
            :sort-direction="sortDirection"
            @filtered="onFiltered"
            >
            <template v-slot:cell(name)="row">
                {{ row.value.first }} {{ row.value.last }}
            </template>


            <template v-slot:cell(actions)="row">
                <b-button size="sm"  @click="showModal()+setearItem(row.item,row.index)" class="mr-1" :variant="agregado.includes(row.index) ? 'success' : 'primary'">
                     
                 <i class="material-icons" id="tienda">add_shopping_cart </i>{{  }}
                </b-button>
               

                
                <b-button size="sm" @click="row.toggleDetails" variant="warning">
                <i class="material-icons" id="tienda" style="color:white">remove_red_eye</i>
                </b-button>
            </template>

            <template v-slot:row-details="row">

                <div class="container">
                    <b-card no-body class="overflow-hidden" style="width:auto; height:auto;max-width:auto; margin-top:5px;margin-bottom:5px">
                        <b-row no-gutters>
                        <b-col md="6">
                            <b-img :src="row.item.url" style="width:600px ;height:600px" class="rounded-0"></b-img>
                        </b-col>
                        <b-col md="6">
                            <b-card-body >
                                <h1> {{row.item.titulo}}</h1><br>
                                <h4> {{row.item.marca}}</h4>

                            <b-card-text>
                                
                                <h5>{{row.item.descripcion}}</h5><br>
                                <h2 style="color:green">${{row.item.precio}}</h2>                                

                            </b-card-text>
                            </b-card-body>
                        </b-col>
                        </b-row>
                    </b-card>
                </div>
            </template>
            </b-table>

            <!-- Info modal -->
            <b-modal :id="infoModal.id" :title="infoModal.title" ok-only @hide="resetInfoModal">
            <pre>{{ infoModal.content }}</pre>
            </b-modal>
        </b-container>
    </div>
</template>
<style>

</style>
<script>
import axios from "axios"
import {Productos} from '../firebase'

export default {
    name: "Catalogo",
    data() {
      return {
        urlprueba:'https://images-na.ssl-images-amazon.com/images/I/41CCazqracL.jpg',
        prueba:[],
        agregado:[],
        cantidad:'',
        itemSeleccionado:{},
        items: []

        ,
        fields: [
          { key: 'categoria', label: 'Categoria', sortable: true, sortDirection: 'desc' },
          { key: 'titulo', label: 'Titulo', sortable: true, sortDirection: 'desc' },
          { key: 'marca', label: 'Marca', sortable: true, class: 'text-center' },
          {
            key: 'stockdisponible',
            label: 'Stock disponible',
            sortable: true,
            sortByFormatted: true,
            filterByFormatted: true
          },
          { key: 'precio', label: 'Precio' ,sortable: true, sortDirection: 'asc' },
          { key: 'actions', label: 'Opciones' }
        ],
        totalRows: 1,
        currentPage: 1,
        perPage: 100,
        pageOptions: [ 5,10,20,50 , 100, 200 , 300,500],
        sortBy: '',
        sortDesc: false,
        sortDirection: 'asc',
        filter: ' ',
        filterOn: [],
        infoModal: {
          id: 'info-modal',
          title: '',
          content: ''
        }
      }
    },
    firebase:{
        items:Productos
    }
    ,
    computed: {
      sortOptions() {
        // Create an options list from our fields
        return this.fields
          .filter(f => f.sortable)
          .map(f => {
            return { text: f.label, value: f.key }
          })
      }
    },
    mounted() {
      // Set the initial number of items
      this.totalRows = this.items.length;
      this.agregado = this.$store.getters.getSeleccionados;
    //   this.getProducto();
     
    },
    methods: {
        
        onFiltered(filteredItems) {
        // Trigger pagination to update the number of buttons/pages due to filtering
        this.totalRows = filteredItems.length
        this.currentPage = 1
      },
      info(item, index, button) {
        this.infoModal.title = `Row index: ${index}`
        this.infoModal.content = JSON.stringify(item, null, 2)
        this.$root.$emit('bv::show::modal', this.infoModal.id, button)
      },
    //   validarModal(){
    //       if(this.cantidad>0){
    //           return true
    //        }else{
    //            return false
    //        }
    //   },
      agregarAlCarrito(item,index){

          var prod = {
              titulo : item.titulo,
              marca: item.marca,
              cantidad : this.cantidad,
              precio: item.precio

          }
          alert(item.precio);
          this.$store.commit('agregarProd',prod);
          this.$store.commit('agregarSeleccionado',index);
          this.cantidad = 0;
          
      },
      setearItem(item,index){
          var prod = {
              titulo : item.titulo,
              marca: item.marca,
              index: index ,
              precio: item.precio 

          }
           this.itemSeleccionado = prod
      },
      resetInfoModal() {
        this.infoModal.title = ''
        this.infoModal.content = ''
      },

      showModal() {
        this.$refs['my-modal'].show()
      },
      hideModal() {
        this.$refs['my-modal'].hide()
      },
      toggleModal() {
        // We pass the ID of the button that we want to return focus to
        // when the modal has hidden
        this.$refs['my-modal'].toggle('#toggle-btn')
      }
  }}

</script>
