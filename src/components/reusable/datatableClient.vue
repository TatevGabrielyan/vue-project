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
        <div class="table-top-row"></div>
       <div v-if="hasRecords" class="table-response">
          <b-table 
            :items="records" 
            :fields="column"
            responsive
            sticky-header
            :current-page="currentPage" 
            :per-page="perPage"
            :filter="filter"
            :filter-included-fields="filterOn"
            @filtered="onFiltered"
            class="admin-datatable-row b-table-sticky-header"
            id="datatable-client"
            v-model="currentItems"
            >
            <template #cell(name)="row">
                {{ row.value.first }} {{ row.value.last }}
            </template>
            <template v-slot:cell(details)="{ detailsShowing, item }" >   
              <b-button @click="toggleDetails(item); "  class="mr-1 details-btn">{{ detailsShowing ? '-' : '+'}}</b-button>
            </template>
            <template #cell(profile)="row">
               <button size="sm" @click="showProfile(row.item, row.index, $event.target)" id="btn-show-all-children" class="datatable-btn" type="button">Show</button>
            </template>
          <template #row-details>
            <b-table 
                :items="recordsDetails" 
                :fields="columnDetails" 
                sticky-header
                class="client-details-row"
                id="client-table-details1"
                v-model="currentDetails"
                >
                <template #cell(name)="row">
                    {{ row.value.first }} {{ row.value.last }}
                </template>
                <template v-slot:cell(details)="{ detailsShowing, item }" >   
                  <b-button @click="toggleDetails2(item); "  class="mr-1 details-btn">{{ detailsShowing ? '-' : '+'}}</b-button>
                </template>
                <template #cell(profile)="row">
                    <b-button size="sm" @click="info(row.item, row.index, $event.target)" class="mr-1">
                    <img src="../../assets/icons/edit.png" alt="edit">
                    </b-button>
                </template>
          <template #row-details>
                <b-table 
                :items="recordsDetails2" 
                :fields="columnDetails2" 
                sticky-header
                class="details-of-details"
                >
              </b-table>
          </template>
              </b-table>
          </template>
          </b-table>
          <b-row class="mt-2">
            <b-col md="6" class="showing-entries">
              Showing {{this.currentPage}} to   {{this.perPage}} of   {{this.records.length}} entries
              </b-col>
            <b-col md="6" class="my-1 d-flex justify-content-end p-0 paging">
                <b-pagination :total-rows="totalRows" :per-page="perPage" v-model="currentPage" class="my-0 pagination" />
            </b-col>
          </b-row>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import tkn from './token.vue';

export default {
  data() {
    return {
      currentItems: [],
      currentDetails:[],
      selectAll: false,
      records: [],
      recordsDetails: [],
      recordsDetails2:[],
      perPage: 50,
      currentPage: 1,
      pageOptions: [50, 100, 500, { value: this.totalRows, text: "All" }],
      filter: null,
      filterOn: [],
      screenHeight:'',
     column: [
         { key: 'details', label: '', sortable: false },
        {
          key: "id",
          sortable: true,
          label: "id",
          class: "options-column details-id first-header-sticky"
        },
        {
          key: "firstName",
          sortable: true,
          label: "first name",
          class: "options-column first-header-sticky"
        },
        {
           key: "lastName",
          sortable: true,
          label: "last name",
          class: "options-column first-header-sticky"
        },
        {
           key: "eventName",
          sortable: true,
          label: "event name",
          class: "options-column first-header-sticky"
        },
         {
           key: "enterDate",
          sortable: true,
          label: "enter date",
          class: "options-column first-header-sticky"
        },
         {
          key: "totalEvents",
          sortable: true,
          label: "total events",
          class: "options-column events-details first-header-sticky"
        },
        { key: 'profile', label: 'profile', sortable: false }
      ],
       columnDetails: [
         { key: 'details', label: '', sortable: false },
        {
          key: "id",
          sortable: false,
          label: "Event ID",
          class: "options-column"
        },
        {
          key: "eventName",
          sortable: false,
          label: "Event name",
          class: " options-column"
        },
        {
           key: "eventType",
          sortable: false,
          label: "Event type",
          class: "options-column"
        },
         {
           key: "eventDate",
          sortable: false,
          label: "Event date",
          class: "options-column"
        },
         {
           key: "eventImages",
          sortable: false,
          label: "Event images",
          class: "options-column"
        },
          {
          key: "totalPhotographers",
          sortable: false,
          label: "Total photographers",
          class: "options-column total-photographer"
        },
      ],
        columnDetails2: [
        {
          key: "id",
          sortable: false,
          label: "",
          class: "options-column"
        },
        {
          key: "photographerId",
          sortable: false,
          label: "Photographer ID",
          class: " options-column"
        },
        {
           key: "firstName",
          sortable: false,
          label: "First Name",
          class: "options-column"
        },
         {
           key: "lastName",
          sortable: false,
          label: "Last Name",
          class: "options-column"
        },
         {
           key: "totalImages",
          sortable: false,
          label: "gallery images",
          class: "options-column"
        },
        {
          key: "total",
          sortable: false,
          label: "uploaded files",
          class: "options-column"
        },
          
        
        
       
        
      ],
      infoModal: {
          id: 'info-modal',
          title: '',
          content: ''
        },
        sortBy: '',
        sortDesc: false,
        sortDirection: 'asc',
    };
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
    toggleDetails(row) {
        if(row._showDetails){
          this.$set(row, '_showDetails', false);
        }else{
          this.currentItems.forEach(item => {
            this.$set(item, '_showDetails', false)
          })

          this.$nextTick(() => {
            this.$set(row, '_showDetails', true);
            console.log(row)
            const getDetails = async ()  =>{
          try{
                const eventListDetails = await axios({
                    method: 'post',
                    type:'post',
                    url: 'http://dev.studioseye.com/api/getevents',
                    data: {
                        'client_id' : row.id,
                    },
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                });
                if(eventListDetails.status == 200){
                  this.recordsDetails = eventListDetails.data;
               }
               var vm = this;
              vm.recordsDetails = this.recordsDetails;
            }
            catch(err){
              console.log('err');
                console.log(err.message);
            }
      };
      getDetails();
          })
        }
      },
      toggleDetails2(row) {
        if(row._showDetails){
          this.$set(row, '_showDetails', false);
        }else{
          this.currentDetails.forEach(item => {
            this.$set(item, '_showDetails', false)
          })

          this.$nextTick(() => {
            this.$set(row, '_showDetails', true);
            console.log(row)
            const getDetails2 = async ()  =>{
      try{
            const photographerListDetail = await axios({
                method: 'post',
                type:'post',
                url: 'http://dev.studioseye.com/api/getphotographers',
                data: {
                    'event_id' : row.id,
                },
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
            });
            if(photographerListDetail.status == 200){
              this.recordsDetails2 = photographerListDetail.data;
           }
           var vm = this;
          vm.recordsDetails2 = this.recordsDetails2;

        }
        catch(err){
          console.log('err');
            console.log(err.message);
        }
  };
  getDetails2();
          })
        }
      },
    // getTableHeight: function () {  
    //     this.screenHeight = screen.availHeight +'px';
    //     let tbl = document.querySelectorAll('.b-table-sticky-header')[0]
    //     tbl.style.maxHeight = this.screenHeight 
    //     },
    getTableHeight: function () {  
        this.screenHeight = screen.availHeight +'px';
        console.log(this.screenHeight);
        let tbl = document.querySelectorAll('.b-table-sticky-header')[0] 
        tbl.style.maxHeight = '65vh' ; 
        console.log(tbl.style);
        // console.log(tbl)
        },
    
      showProfile(row) {
         const isCookieEnabled = navigator.cookieEnabled;
      if(isCookieEnabled){
          $cookies.set('client_id', row.id);
          this.$router.push({name: 'UserPage'});
      }
      },
      onFiltered(filteredItems) {
       
       const totalRows = filteredItems.length
       this.currentPage = 1
     },
  },
   mounted() {
    const token = tkn.getToken();
    const studio_id = tkn.getStudioId();

     if(!token && !studio_id){
        return false
     }else{
      const sendRequest = async ()  =>{
          try{
                const clientList = await axios({
                    method: 'post',
                    type:'post',
                    url: 'http://dev.studioseye.com/api/getclients',
                    data: {
                        'studio_id' : studio_id,
                    },
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                });
                if(clientList.status == 200){
                  this.records = clientList.data;
                  let newLength = this.records.length;
   
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
  
};
</script>
<style>
    .details-btn{
            color: #202124!important;
            font-size: 30px!important;
    }
    .client-details-row{
        width: 95%;
        margin: auto;
    }
    .client-details-row table thead{
        filter: none;
    }
    .client-details-row table thead tr th{
        background-color: #393939 !important;
    }

    .client-details-row table thead tr th div{
        color: #fff;
            text-transform: capitalize;
                font-weight: 500!important;
                font-size: 15px;
    }
    .client-details-row table tbody tr:first-child {
        background-color: #223d8f !important;
       
    }
    .client-details-row table tbody tr td:first-child{
        padding: 0.5rem 0.3rem 0.3rem 0.3rem!important
    }
    .client-details-row table tbody tr td:nth-child(1){
        padding: 0!important;
    }
    .client-details-row table tbody tr td{
        color:#fff;
        font-size: 15px;
    }
    .client-details-row table tbody tr td:first-child{
        text-align: center;
    }
     .client-details-row table tbody tr td button{
        color:#fff!important
     }
     .client-details-row table thead tr th:nth-child(2){
        width: 70px!important;
     }
    
     .client-details-row table thead tr th:nth-last-child(-1){
        width: 135px!important;
     }
      .details-id{
        width: 70px!important;
      }
      #datatable-client thead tr .first-header-sticky:nth-last-child(2){
        width:135px!important
      }
      .details-btn:active, .details-btn:focus{
        color: #fff !important;
        background-color: #223d8f !important;
        border: 0;
      }
      .details-of-details table thead tr th {
        background: #637bc4 !important;
      }
      .details-of-details table thead tr th{
          text-transform: capitalize;
          font-weight: 500;       
      }
      .details-of-details table thead tr th:nth-child(1){
          /* width: 141px!important; */
          width: 128px!important;

      }
      .details-of-details table thead tr th:nth-child(2){
            width: 193px!important;
      }
      .details-of-details table tbody tr td{
        background-color: #e0e0e0;
        color: #393939;
        padding: 0.3rem!important;
        border-bottom: 1px solid #fff!important;
      }
      .details-of-details table tbody tr:first-child,  .details-of-details table thead tr th:first-child{
        background-color: #fff!important;
      }
      .details-of-details table tbody tr td:first-child{
        background-color: #fff!important;
      }
     .details-of-details table thead tr th {
        border-bottom: 1px solid #fff!important;
     }
   .client-details-row table thead tr th:last-child {
        width: 142px!important;
     }
  
    .admin-datatable-row:first-child table thead tr th:last-child{
        width: 100px !important;
    }
    .b-table-sticky-header{
          /* max-height: 300px!important; */
    }
    .details-btn {
    font-size: 20px;
    }
    .details-of-details{
      margin-bottom: 0!important;
    }
    .b-table-has-details td{
      /* background-color: #223d8f !important; */
    }
    .client-details-row table tbody tr{
      background-color: #223d8f !important;

    }
    #client-table-details1 thead tr th{
      position: inherit;
    }
    .b-table-sticky-header #datatable-client:first-child > .table.b-table > thead > tr > th{
      position: sticky!important;
      top: 0;
      z-index: 2;
    }
    #datatable-client thead tr .first-header-sticky{
      position: sticky!important;
    }
    .pagination li{
      background-color: transparent;
    }
    #datatable-client thead tr th:last-child {
    width: 140px !important;
    }
    @media only screen and (max-width:767px){
      .showing-entries{
        text-align: center;
      }
      .paging{
        justify-content: center!important;
      }
    }
</style>