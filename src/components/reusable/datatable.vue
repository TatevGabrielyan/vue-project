<template>
  <div>
     <div v-if="!hasRecords"><br><br>LOADING DATA...</div>
     <b-row class="justify-content-end">
          <b-col lg="3" md="4" class="d-flex justify-content-end mt-2">
          <b-form-group horizontal label="Show entries" class="mb-0 selectPage-table">
            <b-form-select :options="pageOptions" v-model="perPage" />
          </b-form-group>
          </b-col>
           <b-col lg="3" md="4" class="filter-search">
          <b-form-group
            label-for="filter-input"
            label-cols-sm="3"
            label-align-sm="right"
            label-size="sm"
            class="mb-0 input-filter-xs"
          >
          <b-input-group size="sm">
           <button class="btn-search btn-datatable"><img src="../../assets/icons/search.png" alt="search" class="w-75"></button>
            <b-form-input
              id="filter-input"
              v-model="filter"
              type="search"
              placeholder="Search here..."
              class="search-on-datatable"
            ></b-form-input>
            <b-input-group-append class="clear-filter">
              <b-button :disabled="!filter" @click="filter = ''">Clear</b-button>
            </b-input-group-append>
          </b-input-group>
        </b-form-group>
        </b-col>
        </b-row>
    <!-- Main table element -->
    <div class="table-top-row"></div>
  <div v-if="hasRecords" class="table-response"  ref="datatableRef" id="tableResponse">
      <b-table
      :items="records"
      :fields="column"
      responsive
       sticky-header
      :current-page="currentPage"
      :per-page="perPage"
      :filter="filter"
      :filter-included-fields="filterOn"
      show-empty
      @filtered="onFiltered"
      class="admin-datatable-row"
      id="admin-datatable"
    >
      <template #cell(name)="row">
        {{ row.value.first }} {{ row.value.last }}
      </template>
     <template #cell(companyLogo)="row">
                        <div>
                            <b-img
                             v-on:click="info(row.item, row.index, $event.target)"
                              v-bind="mainProps"
                              
                              alt="logo"
                              :src="'https://studioseye.com/pricing/upload/' + row.item.companyLogo"
                
                            />
                        </div>
                      </template>
      <template #cell(login)="row">
         <b-button size="sm" @click="info(row.item, row.index, $event.target)" class="mr-1">
                <img src="../../assets/icons/Group 40.png" alt="login" class="w-75">
           </b-button>
      </template>
      <template #cell(edit)="row">
        <b-button size="sm" @click="info(row.item, row.index, $event.target)" class="mr-1">
          <img src="../../assets/icons/edit.png" alt="edit">
        </b-button>
      </template>
    </b-table>
    <b-row>
             <b-col md="6" class="showing-entries">
              Showing {{this.currentPage}} to   {{this.perPage}} of   {{this.records.length}} entries
              </b-col>
            <b-col md="6" class="d-flex justify-content-lg-end justify-content-md-end justify-content-center p-0 ">
                <b-pagination :total-rows="totalRows" :per-page="perPage" v-model="currentPage" class="my-0" />
                 
            </b-col>
          </b-row>
  </div>
  </div>
</template>
<script>
import axios from 'axios';
import getToken from './token.vue';
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
        {
          key: "id",
          sortable: true,
          label: "id",
          class: "options-column"
        },
        {
          key: "companyLogo",
          sortable: true,
          label: "company logo",
          editable: true, 
          image: true,
          class:'company-logo-img admin-logo-bg'
        },
      
        {
          key: "companyName",
          sortable: true,
          label: "company name",
          class: " options-column"
        },
        {
          key: "firstName",
          sortable: true,
          label: "first name",
          class: " options-column"
        },
        {
           key: "lastName",
          sortable: true,
          label: "last name",
          class: "options-column"
        },
        // {
        //    key: "address",
        //   sortable: true,
        //   label: "Address",
        //   class: "options-column"
        // },
        //  {
        //    key: "zip",
        //   sortable: true,
        //   label: "zip",
        //   class: "options-column"
        // },
        //  {
        //    key: "state",
        //   sortable: true,
        //   label: "state",
        //   class: "options-column"
        // },
        //  {
        //   key: "city",
        //   sortable: true,
        //   label: "city",
        //   class: "options-column"
        // },
        //  {
        //    key: "country",
        //   sortable: true,
        //   label: "country",
        //   class: "options-column"
        // },
          {
          key: "login",
          sortable: true,
          label: "login",
          class: "options-column"
        },
        { key: 'login', label: 'login', sortable: false },
        { key: 'edit', label: 'edit', sortable: false },
        
      ],
       
        currentPage: 1,
        perPage: 50,
        pageOptions: [50, 100, 500, { value: this.totalRows, text: "All" }],
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
    updated(){
    this.getTableHeight()
 },
    methods: {
      getTableHeight: function () {  
        this.screenHeight = screen.availHeight +'px';
        console.log(this.screenHeight);
        let tbl = document.querySelectorAll('.b-table-sticky-header')[0]
        // tbl.style.maxHeight = this.screenHeight + 'px!important';
        // tbl.style.maxHeight = 
        tbl.style.maxHeight = '65vh' ; 
        console.log(tbl.style);
        // console.log(tbl)
        },
     
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
    },
   
  }
</script>
<style>
.selectPage-table{
    font-weight: 400;
    border-radius: 10px;
    -webkit-filter: drop-shadow(0px 3px 3.5px rgba(0, 0, 0, 0.16));
    filter: drop-shadow(0px 3px 3.5px rgba(0, 0, 0, 0.16));
    background-color: #ffffff;
    border: none;
    width: 13.5rem!important;
    height: 48px;
}
.selectPage-table legend{
    position: absolute;
    left: 4rem;
    top: 0.7rem;
    font-size: 17px!important;
    color: #adadad;
    font-weight: 400;
}
.selectPage-table div select{
    width: 28%;
    border: none;
    position: relative;
    top: 0.3rem;
    font-size: 18px;
    right: -10px;
}
.btn-datatable{
    position: absolute;
    top: 13px;
    z-index: 10;
    padding-left: 0.5rem;
    padding-right: 0.3rem;
}
.search-on-datatable{
      padding-left: 4rem!important;
      width: 12rem!important;
}
.selectPage-table div .custom-select{
  padding:0
}
.custom-select:focus {
    border-color: none;
    outline: 0;
    box-shadow: none;
}

/* pagination */

.bv-no-focus-ring:after{
    content: "";
}
.page-item.disabled .page-link {
  border:none
}

.page-item:not(:first-child) .page-link, .page-link {
      color: #ADADAD!important;
    border: none!important;
}
.page-item.active .page-link{
    border: none;
    background: none!important;
    color: #202124!important;
}
/* table */
.admin-datatable-row thead{
  filter: drop-shadow(0px 3px 7px rgba(0, 0, 0, 0.16));
    background-color: #ffffff;
}
.admin-datatable-row tbody{
  border: none!important;
}
.admin-datatable-row thead tr th div{
    white-space: nowrap;
    font-size: 17px;
    line-height: 20px;
    color: #223d8f;
    font-weight: 600;
    text-transform: uppercase;
}
.table>:not(caption)>*>* {
  padding: none;
}
.table-top-row{
    filter: drop-shadow(0px 3px 7px rgba(0, 0, 0, 0.16));
    background-color: #ffffff;
    width: 100%;
    height: 3px;
}

.options-column{
  padding: 0.5rem!important;
}
.company-logo-img div img{
  object-fit: contain;
  height: auto;
}
#filter-input{
  font-size: 17px;
}

.admin-logo-bg{
    background-color: #223d8f!important;
    cursor: pointer;
}
.table-b-table-default{
  background-color: #fff!important;
}
.b-table-sticky-header, .table-responsive, [class*=table-responsive-]{
  margin-bottom: 0!important;
}
#admin-datatable thead tr{
  position:sticky;
  top:0;
}
#admin-datatable tbody tr:nth-child(odd), #datatable-client tbody tr:nth-child(odd){
  background: whitesmoke;
}
@media only screen and (max-width:1128px){
  .input-filter-xs label{
    display: none;
  }
}
@media only screen and (max-width:768px) {
  .selectPage-table legend{
    left: 0;
  }
}
@media only screen and (max-width:425px){
  .btn-datatable{
    z-index: 1;
  }
}

</style>