<template>
    <div>
       <div class="row">
          <div class="col-lg-5"></div>
          <div class="col-lg-5 col-md-6 col-12 mytabs-div" id="listPackageTop">
             <p class="watermark-header text-uppercase">Studio packages</p>
          </div>
       <div class="row clientDiscount">
            <div class="col-lg-3">
          </div>
          <div class="col-lg-9" id="listPackage">    
                <div>
                  <div v-if="!hasRecords"><br><br>LOADING DATA...</div>
                  <b-row class="justify-content-end">
          <b-col lg="3" md="6" sm="12" class="d-flex justify-content-lg-end justify-content-md-end justify-content-start mb-3">
          <b-form-group horizontal label="Show entries" class="mb-0 selectPage-table contacts-table">
            <b-form-select :options="pageOptions" v-model="perPage" />
          </b-form-group>
          </b-col>
           <b-col md="3" >
            <b-input-group size="sm" class='filter-contact'>
           <button class="btn-search btn-datatable"><img src="../../../assets/icons/search.png" alt="search" class="w-75"></button>
            <b-form-input
              id="filter-input"
              v-model="filter"
              type="search"
              placeholder="Search here..."
              class="search-on-datatable"
            ></b-form-input>
            <b-input-group-append style="width: 40px;">
              <b-button :disabled="!filter" @click="filter = ''">Clear</b-button>
            </b-input-group-append>
          </b-input-group>
        </b-col>
        </b-row>
        <div class="table-top-row"></div>
       <div v-if="hasRecords">
          <b-table 
            :items="records" 
            :fields="column" 
            :sticky-header= "screenHeight"
            :current-page="currentPage" 
            :per-page="perPage"
            :filter="filter"
            :filter-included-fields="filterOn"
            @filtered="onFiltered"
            class="admin-datatable-row"
            >
            <template #cell(name)="row">
                {{ row.value.first }} {{ row.value.last }}
            </template>
            <template #cell(profile)="row">
               <router-link to='/UserPage'>
                   <button size="sm" @click="info(row.item, row.index, $event.target)" id="btn-show-all-children" class="datatable-btn" type="button">Show</button>
               </router-link>
            </template>
            <template #cell(delete)="row">
           <b-button size="sm" @click="info(row.item, row.index, $event.target)" class="mr-1">
                  <img src="../../../assets/icons/DELETE.png" alt="delete" class="w-100">
             </b-button>
        </template>
        <template #cell(edit)="row">
          <b-button size="sm" @click="info(row.item, row.index, $event.target)" class="mr-1">
            <img src="../../../assets/icons/edit.png" alt="edit">
          </b-button>
        </template>
          </b-table>
          <b-row>
            <b-col md="6" class="showingPages text-start">
              Showing {{this.currentPage}} to   {{this.perPage}} of   {{this.records.length}} entries
              </b-col>
            <b-col md="6" class="my-1 d-flex justify-content-end">
                <b-pagination :total-rows="totalRows" :per-page="perPage" v-model="currentPage" class="my-0" />
            </b-col>
          </b-row>
        </div>
                </div>
          </div>
       </div>
       </div>
    </div>
 </template>
 
 <script>
  import Button from '../Button.vue';
  import "jquery/dist/jquery.min.js";
  import "bootstrap/dist/css/bootstrap.min.css";
  import "datatables.net-dt/js/dataTables.dataTables";
  import "datatables.net-dt/css/jquery.dataTables.min.css";
  import $ from "jquery";
  export default{
       components:{
             Button,
       },
 
   data(){
       return{
        
        selectedClient:['Select some options'],
             optionsClient:[
           { value: 'a', text: 'option 1' },
           { value: 'b', text: 'option 2' },
         ],
         selectedOrderStatus:['In process'],
             optionsOrderStatus:[
           { value: 'a', text: 'Status 1' },
           { value: 'b', text: 'Status 2' },
         ],
         selectedEvent:['Some options'],
             optionsEvent:[
           { value: 'a', text: 'event 1' },
           { value: 'b', text: 'event 2' },
         ],
         selectedDate:['01/02/2022 - 02/03/2022'],
             optionsDate:[
           { value: 'a', text: 'date 1' },
           { value: 'b', text: 'date 2' },
         ],
         selectedReportType:['Gross profit'],
             optionsReportType:[
           { value: 'a', text: 'type 1' },
           { value: 'b', text: 'type 2' },
         ],
         selectAll: false,
      records: [],
      recordsDetails: [],
      recordsDetails2:[],
      perPage: 5,
      currentPage: 1,
      pageOptions: [5, 25,50],
      filter: null,
      filterOn: [],
      screenHeight:'',
     column: [
     {
          key: "packagesCatName",
          sortable: true,
          label: "PACKAGES CATEGORY NAME",
          class: "options-column order-th"
        },
        {
          key: "packageName",
          sortable: true,
          label: "PACKAGE NAME",
          class: "options-column order-th"
        },
        {
           key: "sellingPrice",
          sortable: true,
          label: "SELLING PRICE",
          class: "options-column order-th"
        },
        {
           key: "cost",
          sortable: true,
          label: "COST",
          class: "options-column order-th"
        },
         {
          key: "addOnPrice",
          sortable: true,
          label: "ADD ON PRICE",
          class: "options-column events-details order-th"
        },
        {
          key: "cartePrice",
          sortable: true,
          label: "A LA CARTE PRICE",
          class: "options-column events-details order-th"
        }, {
          key: "desc",
          sortable: true,
          label: "DESCRIPTION",
          class: "options-column events-details order-th"
        }, {
          key: "edit",
          sortable: true,
          label: "EDIT",
          class: "options-column events-details order-th"
        }, {
          key: "delete",
          sortable: true,
          label: "DELETE",
          class: "options-column events-details order-th"
        } 
      ],
      
      infoModal: {
          id: 'info-modal',
          title: '',
          content: ''
        }
    
       }
   },
   computed: {
    hasRecords() {
      return this.records.length > 0;
    },
    totalRows() {
      return this.records.length;
    },
  },
  updated(){
      this.getTableHeight()
   },
  methods: {
    getTableHeight: function () {  
            this.screenHeight = screen.availHeight +'px';
            let tbl = document.querySelectorAll('.b-table-sticky-header')[0]
            tbl.style.maxHeight = this.screenHeight 
          },

          onFiltered(filteredItems) {
         const totalRows = filteredItems.length
         this.currentPage = 1
       },
    info(item, index, button) {
        this.infoModal.title = `Row index: ${index}`
        this.infoModal.content = JSON.stringify(item, null, 2)
        this.$root.$emit('bv::show::modal', this.infoModal.id, button)
      },
  },
  mounted() {
     fetch("http://localhost:3000/listPackages")
      .then((response) => response.json())
      .then((data) => {
        this.records = data;
      });
      
     var vm = this;
      vm.records = this.records;
     
  }
  }
 </script>
<style>
.order-th div{
    white-space: pre-wrap!important;
}
</style>