<template>
        <b-container fluid>
                <b-modal ref="my-modal" hide-footer title="ATENCION">
                    <div class="d-block text-center">
                        <h1 style="color:red"> REALMENTE DESEA ELIMINAR EL PRODUCTO:</h1>
                        <p style="text-align:start;font-weigth:800">{{itemBorrar.titulo}}</p> 
                        <b-img :src="itemBorrar.url" style="width:300px ;height:300px" class="rounded-0"></b-img>

                    </div>
                    <b-button class="mt-3" variant="outline-danger" block @click="hideModal()+eliminarProducto(itemBorrar.key)" >ELIMINAR</b-button>
                    <b-button class="mt-3" variant="outline-success" block @click="hideModal()" >CANCELAR</b-button>
                </b-modal>
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
                label="Mostrar los primeros: "
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
            </b-col>-->
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
                <b-button size="sm" @click="mandarInfo(row.item)" class="mr-1">
                <i class="material-icons" id="tienda">edit</i>
                </b-button>
                <b-button size="sm" @click="row.toggleDetails" variant="success">
                <i class="material-icons" id="tienda">remove_red_eye</i>
                </b-button>
                <b-button variant="danger" size="sm"  class="ml-1" @click="showModal()+setearItem(row.item,row.index,row.item['.key'])">
               <i class="material-icons" id="tienda">delete_forever</i>
                </b-button>
 <!-- @click="eliminarProducto(row.item['.key'])" -->



            </template>

            <template v-slot:row-details="row">
                <!-- <b-card>
                    
                    <h2 v-for="(value, key) in row.item" :key="key">
                        {{ key }}: {{ value }}
                    </h2>
               
                </b-card> -->
                <div class="container">
                    <b-card no-body style="width:auto; height:auto;max-width:auto; margin-top:5px;margin-bottom:5px">
                        <b-row no-gutters>
                        <b-col md="6">
                            <b-img :src="row.item.url" style="width:500px ;height:500px" class="rounded-0"></b-img>
                        </b-col>
                        <b-col md="6">
                            <b-card-body >
                                <h1> {{row.item.titulo}}</h1><br>
                                <h4> {{row.item.marca}}</h4>

                            <b-card-text>
                                
                                <h5 style="witdh:500px;text-align:center">{{row.item.descripcion}}</h5><br>
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
    
</template>
<style>

</style>
<script>
import axios from "axios"
import {Productos} from '../firebase'
import { store } from '../store'

export default {
    name: "Administrador",
    data() {
      return {
        urlprueba:'https://images-na.ssl-images-amazon.com/images/I/41CCazqracL.jpg',
        abrirModal:false,
        prueba:[],
        itemBorrar:{},
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
        filter: null,
        filterOn: [],
        infoModal: {
          id: 'info-modal',
          title: 'titulo ',
          content: 'contenido'
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
    //   this.getProducto();
     
    },
    methods: {
      info(item, index, button) {
        this.infoModal.title = `Titulo: ${index}`
        this.infoModal.content = item.titulo
        // JSON.stringify(item, null, 2)
        this.$root.$emit('bv::show::modal', this.infoModal.id, button)
        this.$router.push('/NuevoProducto');
      },
      mandarInfo(item){
        this.$store.commit('setProducto',item);
        this.$router.push('/modificarProducto');
      },
      resetInfoModal() {
        this.infoModal.title = ''
        this.infoModal.content = ''
      },
      onFiltered(filteredItems) {
        // Trigger pagination to update the number of buttons/pages due to filtering
        this.totalRows = filteredItems.length
        this.currentPage = 1
      },
      eliminarProducto(key){
        Productos.child(key).remove();
      },
      setearItem(item,index,key){
          var prod = {
              titulo : item.titulo,
              marca: item.marca,
              index: index ,
              url: item.url, 
              key: key

          }
           this.itemBorrar = prod
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
