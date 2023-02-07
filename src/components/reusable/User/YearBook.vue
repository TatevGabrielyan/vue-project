<template>
    <div>
        <div class="row mt-lg-0 mt-5">
         <div class="col-lg-3 col-md-3 col-12"></div>
             <div class="col-lg-9 col-md-12 col-12 mytabs-div  client-top" id="yearBook">
                <div class="text-center">
                    <p class="watermark-header text-uppercase">Client Year book settings</p>
                </div>
                <p class="text-capitalize text-start p-0 clients-credit">Set Deadline for your book if you have</p>
                <DatePicker class="inline-block h-full text-start client-calendar" v-model="date"  mode="dateTime" :minute-increment="5">
                    <template v-slot="{ inputValue, togglePopover }">
                    <div class="flex items-center calendar-div">
                        <button
                        class="p-2 bg-blue-100 border border-blue-200 hover:bg-blue-200 text-blue-600 rounded-l focus:bg-blue-500 focus:text-white focus:border-blue-500 focus:outline-none"
                        @click="togglePopover()"
                        >
                        <img src="../../../assets/icons/calendar.png" alt="">
                        </button>
                        <input
                        :value="inputValue"
                        class="bg-white text-gray-700 w-full py-1 px-2 appearance-none border rounded-r focus:outline-none focus:border-blue-500"
                        readonly
                        />
                        
                    </div>
                    </template>
                </DatePicker>
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
                    class="admin-datatable-row year-book-tbl mt-lg-0 mt-md-0 mt-3"
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
import Calendar from 'v-calendar/lib/components/calendar.umd'
import DatePicker from 'v-calendar/lib/components/date-picker.umd'

export default {
    components:{
        Calendar,
        DatePicker
    },
  data() {
    let date = new Date();
    date.setMinutes(0, 0, 0);
    return {
      date,
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
          label: "event id",
          class: "options-column details-id"
        },
        {
          key: "eventName",
          sortable: true,
          label: "event name",
          class: "options-column"
        },
        {
           key: "haveYourBookImage",
          sortable: true,
          label: "have your book image",
          class: "options-column"
        },
        
        
       
        { key: 'profile', label: 'profile', sortable: false }
      ],
      
      infoModal: {
          id: 'info-modal',
          title: '',
          content: ''
        }
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
    info(item, index, button) {
        this.infoModal.title = `Row index: ${index}`
        this.infoModal.content = JSON.stringify(item, null, 2)
        this.$root.$emit('bv::show::modal', this.infoModal.id, button)
      },
      onFiltered(filteredItems) {
       
       const totalRows = filteredItems.length
       this.currentPage = 1
     },
     getTableHeight: function () {  
        this.screenHeight = screen.availHeight +'px';
        let tbl = document.querySelectorAll('.b-table-sticky-header')[0]
        tbl.style.maxHeight = this.screenHeight ;
        console.log(this.screenHeight)
        },
  },
  mounted() {
     fetch("http://localhost:3000/yearBook")
      .then((response) => response.json())
      .then((data) => {
        this.records = data;
      });
      
     var vm = this;
      vm.records = this.records;
     
  }
};
</script>
<style>
    .calendar-div{
        width: fit-content;
        padding: 0 1rem 0 0;
        filter: drop-shadow(0px 6px 9px rgba(0,0,0,0.16));
        background: #fff;
        border-radius: 10px;
    }
    .client-calendar div button{
        border: none!important;
    }
    .client-calendar div input{
        border: none!important;
        border-left: 1px solid #ADADAD!important;
        padding-top: 0!important;
        margin: 0;
        color:#223d8f;
    }
    .vc-title{
        color:#223d8f!important;
        font-size: 16px!important; 
    }
    .vc-svg-icon path{
        fill: #121313!important;
    }
    .vc-weekday{
        color: #393939!important;
    }
    .vc-day-content{
        color: #707070!important;
    }
    .is-today span{
        color: #fff!important;
        background: #223D8F!important;
        border-radius: 9px!important;
    }
    .is-today span{
        color:#fff!important
    }
    .vc-date, .vc-time-icon{
        display:none!important
    }
    .vc-time-picker{
        justify-content: center;
    }
    .vc-time .vc-select select, .vc-am-pm{
        filter: drop-shadow(0px 6px 9px rgba(0,0,0,0.16))!important;
        background: #fff!important;
        border-radius: 10px!important;
        color:#223D8F!important
    }
    .vc-am-pm .active{
        background-color:#223D8F!important
    }
    .year-book-tbl table thead tr th{
      position: sticky!important;
    }
</style>