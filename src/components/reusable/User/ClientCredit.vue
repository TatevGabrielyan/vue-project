<template>
   <div>
      <div class="row mt-lg-0 mt-5">
         <div class="col-lg-5 col-md-3 col-12"></div>
         <div class="col-lg-5 col-md-6 col-12 mytabs-div client-top" id="clientTop">
            <p class="watermark-header text-uppercase">Clients Credit</p>
            <Button class="text-uppercase create-btn w-auto px-5 mt-3" v-b-modal.modal-credit>Add credit</Button>
            <div class="create-folder-modal">
               <b-modal id="modal-credit" size="lg" scrollable  centered title="Add Credit">
                  <div>
                     <p class="credit-modal-header p-0 m-0">Credit</p>
                     <b-input-group  class="mt-2">
                        <b-form-input class="modal-input-credit add-client-credit" placeholder="Max 911.11"></b-form-input>
                        <b-input-group-append>
                           <b-button class="credit-btn">
                              <img src="../../../assets/icons/plus-icon.png" alt="plus" class="w-75">
                           </b-button>
                           <b-button class="credit-btn credit-btn-minus">
                              <img src="../../../assets/icons/minus-icon.png" alt="minus" class="w-75">
                           </b-button>
                        </b-input-group-append>
                     </b-input-group>
                     <p class="credit-modal-header p-0 m-0 mt-3">Type</p>
                     <v-select class="select-v-type " v-model="selectedType" :options="optionsType" label="text">
                        <template #selected-option="{ text }" class="w-100">
                           <div style="" class="w-100">
                              <strong class="select-strong w-100 selecting-credit" >{{ text }}</strong>
                           </div>
                        </template>
                     </v-select>
                     <p class="credit-modal-header p-0 m-0 mt-3">Notes</p>
                     <b-form-textarea
                        id="textarea-no-resize"
                        placeholder="Enter your notes"
                        rows="5"
                        no-resize
                        class="w-100"
                        ></b-form-textarea>
                     <div class="text-center">
                        <button type="submit" variant="primary" class="text-uppercase create-btn save-next-modal save px-5 mt-4"  @click="$bvModal.hide('modal-credit')">Add</button>
                     </div>
                  </div>
               </b-modal>
            </div>
         </div>
         <div class="col-lg-3">
         </div>
         <div class="col-lg-9 col-md-12 col-12" id="clientsCredit">
            <p class="text-uppercase text-start p-0 clients-credit">Clients credit</p>
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
            sticky-header
            :current-page="currentPage" 
            :per-page="perPage"
            :filter="filter"
            :filter-included-fields="filterOn"
            @filtered="onFiltered"
            class="admin-datatable-row year-book-tbl"
            >
            <template #cell(name)="row">
                {{ row.value.first }} {{ row.value.last }}
            </template>
           
            <template #cell(profile)="row">
               <router-link to='/UserPage'>
                   <button size="sm" @click="info(row.item, row.index, $event.target)" id="btn-show-all-children" class="" type="button">
                    <img src="../../../assets/icons/Group 40.png" alt="username-icon" class="login-icon">
                  </button>
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
</template>

<script>
 import Button from '../Button.vue';


 export default{
      components:{
            Button,
      },
//  mounted() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((data) => {
//         this.users = data;
//         setTimeout(() => {
//                $("#creditTable").DataTable({
//             lengthMenu: [
//               [5,10, 25, 50, -1],
//               [5,10, 25, 50, "All"],
//             ],
//         fixedColumns: true,
//              responsive: true,
//             pageLength: 25,
//             scrollX: true,
//              scrollY:        380,
//               scrollCollapse: true,
//               fixedHeader:           {
//             header: true,
//             footer: true
//         },
//             language: {
//                search: "_INPUT_",
//                searchPlaceholder: "Search here...",
//               "lengthMenu": "_MENU_Show  entries",
//                 paginate: {
//                   next: '>', 
//                   previous: '<' 
//                 }
//               },
//           });
//         });
//       });
//   },
  data(){
      return{
           selectedType:['Credit'],
            optionsType:[
          { value: 'a', text: 'Credit' },
          { value: 'b', text: 'Cash' },
          { value: 'c', text: 'Check' },
          { value: 'd', text: 'Adjustments' },

        ],
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
          key: "totalCreditLine",
          sortable: true,
          label: "total Credit Line",
          class: "options-column "
        },
        {
          key: "creditLineUsed",
          sortable: true,
          label: "credit Line Used",
          class: "options-column"
        },
        {
           key: "availableCreditLine",
          sortable: true,
          label: "available Credit Line",
          class: "options-column"
        },
        
        
       
        { key: 'paymentType', label: 'payment Type', sortable: true,   class: "options-column"}
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
//   updated(){
//     this.getTableHeight()
//  },
  methods: {
    info(item, index, button) {
        this.infoModal.title = `Row index: ${index}`
        this.infoModal.content = JSON.stringify(item, null, 2)
        this.$root.$emit('bv::show::modal', this.infoModal.id, button)
      },
      onFiltered(filteredItems) {
       
       const totalRows = filteredItems.length
       this.currentPage = 1
     },
   //   getTableHeight: function () {  
   //      this.screenHeight = screen.availHeight +'px';
   //      let tbl = document.querySelectorAll('.b-table-sticky-header')[0]
   //      tbl.style.maxHeight = this.screenHeight ;
   //      console.log(this.screenHeight)
   //      },
  },
  mounted() {
     fetch("http://localhost:3000/clientCreditTable")
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
 .clients-credit{
    color: #393939;
    font-weight: 600;
    font-size: 16px;
 }
 .credit-tr .credit-th{
    width: 220px!important;
}
#creditTable_wrapper .dataTables_scroll{
    width: 97%;
    display: table;
}
#creditTable .dataTables_empty, #creditTable_info, #creditTable_paginate, #creditTable_length{
    display: none;
}
.modal-input-credit{
    width: 74%!important;
    border-radius: 10px 0px 0px 10px!important;
}
.credit-btn{
    background-color: #fff!important;
    border: none;
    color: #393939!important;
}
.credit-btn:hover{
     background-color: #fff!important;
}
.credit-btn-minus{
    border-radius: 0px 10px 10px 0px!important;
}
.credit-modal-header{
    color: #393939;
    font-weight: 600;
    text-indent: 1.3rem;
}
.selecting-credit{
    position: relative;
    top: -7px;
}
.client-top{
   position: relative;
    top: 0;
}
@media only screen and (max-width:991px){
   .add-client-credit{
      width: 47%!important;
}
}
</style>