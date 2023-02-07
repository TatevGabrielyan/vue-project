
<template>
    <div>
      <div class="row mt-lg-0 mt-5">
        <div class="col-lg-3 col-md-3 col-12"></div>
        <div class="col-lg-9 col-md-6 col-12 mt-3" id="eventList">
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
  
      <!-- Main table element -->
      <div class="table-top-row"></div>
    <div v-if="hasRecords" class="table-response"  ref="datatableRef" id="tableResponse">
        <b-table
        :items="records"
        :fields="column"
        responsive
        :sticky-header= "screenHeight"
        :current-page="currentPage"
        :per-page="perPage"
        :filter="filter"
        :filter-included-fields="filterOn"
        show-empty
        @filtered="onFiltered"
        class="admin-datatable-row event-list-table"
        id="admin-datatable event-list-table"
       
      >
        <template #cell(name)="row">
          {{ row.value.first }} {{ row.value.last }}
        </template>
  
      
                        <template #cell(select)>
                            <b-form-checkbox  type="checkbox"  class="shared text-capitalize "  >
                    
                  </b-form-checkbox>
            </template>
            
            <template #cell(isPublic)>
                            <b-form-checkbox  type="checkbox"  class="shared text-capitalize "  >
                    
                  </b-form-checkbox>
            </template>
            <template #cell(thumbnail)>
               <button size="sm"  id="btn-show-all-children" class="datatable-btn thumbnail-btn" type="button">Create Thumbnail</button>
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
               <b-col md="6" class="showing-entries text-start">
                Showing {{this.currentPage}} to   {{this.perPage}} of   {{this.records.length}} entries
                </b-col>
              <b-col md="6" class="d-flex justify-content-lg-end justify-content-md-end justify-content-center p-0 ">
                  <b-pagination :total-rows="totalRows" :per-page="perPage" v-model="currentPage" class="my-0" />
                   
              </b-col>
            </b-row>
    </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import getToken from '../token.vue';
    export default {
      data() {
        return {
           
          mainProps:[
          {
              width: '100%',
              height: 'auto',
          }
          ],
          records: [],
           column: [
           { key: 'select', label: 'select', sortable: false },
          
          {
             key: "id",
            sortable: true,
            label: "event id",
            class: "event-list-th"
          },
        
          {
            key: "eventName",
            sortable: true,
            label: "event name",
            class: "event-list-th"
          },
          {
            key: "eventDate",
            sortable: true,
            label: "event date",
            class: "event-list-th"
          },
          {
            key: "eventType",
            sortable: true,
            label: "event type",
            class: "event-list-th"
          },
          {
             key: "classGroup",
            sortable: true,
            label: "class group",
            class: "event-list-th"
          },
          {
             key: "siblingCode",
            sortable: true,
            label: "sibling code",
            class: "event-list-th"
          },
           {
             key: "isPublic",
            label: "is public",
            sortable: false,

          },
           {
             key: "images",
            sortable: true,
            label: "images",
            class: "event-list-th"
          },
          { key: 'thumbnail', label: 'thumbnail', sortable: false },
          
          { key: 'edit', label: 'edit', sortable: false },
          { key: 'delete', label: 'delete', sortable: false},
         
          
        ],
         
          currentPage: 1,
          perPage: 5,
          pageOptions: [5, 10, 15, { value: this.totalRows, text: "All" }],
          sortBy: '',
          sortDesc: false,
          sortDirection: 'asc',
          filter: null,
          filterOn: [],
          screenHeight:''
  
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
      mounted() {
        
        // Set the initial number of items
        const totalRows = this.records.length;
        const token = getToken.getToken();
       if(!token){
          return false
       }else{
        const sendRequest = async ()  =>{
            try{
                  const studioList = await axios({
                      method: 'post',
                      type:'post',
                      url: 'http://dev.studioseye.com/api/getstudios',
                      data: {
                          'token' : token,
                          
                      },
                      headers: {
                          'Accept': 'application/json',
                          'Content-Type': 'application/json'
                      },
                  });
                  if(studioList.status == 200){
                    
                    this.records = studioList.data;
                    
                   
  
                 }
                 var vm = this;
                vm.records = this.records;
  
               
              }
              catch(err){
                  console.log(err.message);
              }
        };
       
        sendRequest();
       };
      
      },
 
      methods: {
       
         info(item, index, button) {
        const isCookieEnabled = navigator.cookieEnabled;
        if(isCookieEnabled){
            $cookies.set('studio_id', item.id);
            this.$router.push({name: 'User'});
        }
        },
         onFiltered(filteredItems) {
         
          const totalRows = filteredItems.length
          this.currentPage = 1
        },
        getTableHeight: function () {  
        this.screenHeight = screen.availHeight +'px!important';
        let tbl = document.querySelectorAll('.b-table-sticky-header')[0]
        tbl.style.maxHeight = this.screenHeight;
        console.log(tbl.style.maxHeight)
        },
      },
     
    }
  </script>
 <style>
    .event-table-list legend{
        left: 0;
    }
    .event-table-list div{
        text-align: -webkit-left;
    }
    .event-table-list div select{
        right: 0;
    }
    .thumbnail-btn{
        padding: 0.5rem 1rem;
    }
  
    .event-list-table thead{
        position: sticky!important;
      top: 0;
      z-index: 2;   
      }
 </style>