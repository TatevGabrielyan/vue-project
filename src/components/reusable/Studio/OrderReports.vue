<template>
    <div>
       <div class="row">
          <div class="col-lg-5"></div>
          <div class="col-lg-5 col-md-12 col-12 mytabs-div" id="studioOrdersTop">
             <p class="watermark-header text-uppercase">Orders</p>
          </div>
       <div class="row clientDiscount">
            <div class="col-lg-3">
          </div>
          <div class="col-lg-9 mt-3" id="studioOrders">    
             <div class="row">
                 <div class="col-lg-4">
                       <label class="discount-type">Select Client</label>
                      <v-select class="select-v-type "  v-model="selectedClient" :options="optionsClient" label="text" id="select1">
                         <template #selected-option="{ text }" class="w-100">
                            <div class="w-100">
                               <strong class="select-strong w-100 selecting-credit" >{{ text }}</strong>
                            </div>
                         </template>
                      </v-select>
                 </div>
                 <div class="col-lg-4">
                       <label class="discount-type">Select Order Status</label>
                      <v-select class="select-v-type "  v-model="selectedOrderStatus" :options="optionsOrderStatus" label="text" id="select1">
                         <template #selected-option="{ text }" class="w-100">
                            <div class="w-100">
                               <strong class="select-strong w-100 selecting-credit" >{{ text }}</strong>
                            </div>
                         </template>
                      </v-select>
                 </div>
                 <div class="col-lg-4"> 
                      <b-input-group  class="">
                            <label class="discount-type">Order Number</label>
                         <b-form-input class="modal-input-credit discount-inpt " id="order-num"></b-form-input>
                      </b-input-group> 
                 </div>
             </div>
             <div class="row">
                <div class="col-lg-4">
                   <label class="discount-type">Select Event</label>
                     <v-select class="select-v-type"  v-model="selectedEvent" :options="optionsEvent" label="text">
                         <template #selected-option="{ text }" class="w-100">
                            <div class="w-100">
                               <strong class="select-strong w-100 selecting-credit" >{{ text }}</strong>
                            </div>
                         </template>
                      </v-select>
                </div>
                <div class="col-lg-4">
                   <label class="discount-type">Select Date from to -</label>
                     <v-select class="select-v-type"  v-model="selectedDate" :options="optionsDate" label="text">
                         <template #selected-option="{ text }" class="w-100">
                            <div class="w-100">
                               <strong class="select-strong w-100 selecting-credit" >{{ text }}</strong>
                            </div>
                         </template>
                      </v-select>
                </div>
                <div class="col-lg-4">
                   <label class="discount-type">Report Type</label>
                     <v-select class="select-v-type"  v-model="selectedReportType" :options="optionsReportType" label="text">
                         <template #selected-option="{ text }" class="w-100">
                            <div class="w-100">
                               <strong class="select-strong w-100 selecting-credit" >{{ text }}</strong>
                            </div>
                         </template>
                      </v-select>
                </div>
             </div>
                 <Button class="text-uppercase create-btn  mt-4 save-btn">Search</Button>
                <div v-on:click="orderReportsTable = !orderReportsTable">
                  <img src="../../../assets/icons/1303870_arrow_arrows_back_direction_left_icon.png" alt="down" class="mt-2" v-if="orderReportsTable">
                  <img src="../../../assets/icons/back.png" alt="up" v-if="!orderReportsTable">
                </div>
                <p class="report-gallery">Report Gallery / Packages Order</p>
                <div v-if="orderReportsTable">
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
         orderReportsTable:false,
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
          key: "id",
          sortable: true,
          label: "transaction ID",
          class: "options-column order-th"
        },
        {
          key: "orderNumber",
          sortable: true,
          label: "order number",
          class: "options-column order-th"
        },
        {
           key: "orderDate",
          sortable: true,
          label: "order date",
          class: "options-column order-th"
        },
        {
           key: "clientId",
          sortable: true,
          label: "client id",
          class: "options-column order-th"
        },
         {
          key: "clientName",
          sortable: true,
          label: "client name",
          class: "options-column events-details order-th"
        },
        {
          key: "eventId",
          sortable: true,
          label: "event id",
          class: "options-column events-details order-th"
        }, {
          key: "contact",
          sortable: true,
          label: "contact",
          class: "options-column events-details order-th"
        }, {
          key: "purchaser",
          sortable: true,
          label: "purchaser",
          class: "options-column events-details order-th"
        }, {
          key: "subTotal",
          sortable: true,
          label: "sub total",
          class: "options-column events-details order-th"
        }, {
          key: "allCost",
          sortable: true,
          label: "all cost",
          class: "options-column events-details order-th"
        }, {
          key: "grossProfit",
          sortable: true,
          label: "gross profit",
          class: "options-column events-details order-th"
        },
        {
          key: "grossProfitMargin",
          sortable: true,
          label: "gross profit margin",
          class: "options-column events-details order-th"
        }, {
          key: "internalCredId",
          sortable: true,
          label: "internal credit id",
          class: "options-column events-details order-th"
        }, {
          key: "viewDetails",
          sortable: true,
          label: "view details",
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
     fetch("http://localhost:3000/orderReports")
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
     .acc-credit-type{
      color: #393939;
      font-size: 16px;
      font-weight: 600;
     }
     .check-border{
        border-right: 1px solid #adadad;
     }
     .border-btm{
        border-bottom: 1px solid #adadad;
        margin-top: 9px;
     }
     .order-th{
      vertical-align: middle!important;
      white-space: pre-wrap
     }
     .report-gallery{
      text-align: start;
      color: #393939;
      font-weight: 700;
     }
 </style>