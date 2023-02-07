<template>
    <div>
        <div class="row">
         <div class="col-lg-3"></div>
             <div class="col-lg-9 col-md-12 col-12 mytabs-div" id="emailLogin">
                  <div class="text-center pr-5">
                           <p class="watermark-header text-uppercase">Logged in users</p>
                        </div>
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
</template>

<script>


export default {
  data() {
    return {
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
          key: "firstName",
          sortable: true,
          label: "CLIENT ID",
          class: "options-column"
        },
        {
           key: "lastName",
          sortable: true,
          label: "USER ID",
          class: "options-column"
        },
        {
           key: "eventName",
          sortable: true,
          label: "FIRST NAME",
          class: "options-column"
        },
         
         {
          key: "totalEvents",
          sortable: true,
          label: "LAST NAME",
          class: "options-column events-details"
        },
         { key: '', label: 'LAST LOGIN TIME', sortable: true }
        
        
       
        
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
     fetch("http://localhost:3000/clientTable")
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
    .showingPages{
          color: #ADADAD;
    }
    .contacts-table legend{
          left: 2rem;
    }
    .contacts-table div select{
          right: 4rem;
    }
</style>