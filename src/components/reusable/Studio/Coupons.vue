<template>
    <div>
        <div class="row">
         <div class="col-lg-3"></div>
             <div class="col-lg-9 col-md-6 col-12 mytabs-div" id="studioCoupons">
                  <div class="text-center pr-5">
                           <p class="watermark-header text-uppercase">Add Studio cards</p>
                           <div class="row justify-content-center">
                               <div class="col-lg-4 col-md-6 col-12">
                                 <label class="discount-type">Coupon Code</label>
                                <b-input-group  class="">
                                    <b-form-input class="modal-input-credit discount-inpt " placeholder="01/01/2022" id="inpt2"></b-form-input>
                                </b-input-group>
                               </div>
                               <div class="col-lg-4 col-md-6 col-12">
                                  <label class="discount-type">Coupon Discount (%)</label>
                                 <v-select class="select-v-type"  v-model="selectedCouponDiscount" :options="optionsCouponDiscount" label="text" id="select1">
                        <template #selected-option="{ text }" class="w-100">
                           <div class="w-100">
                              <strong class="select-strong w-100 selecting-credit" >{{ text }}</strong>
                           </div>
                        </template>
                     </v-select>
                               </div>
                               
                           </div>
                               <Button class="text-uppercase create-btn  mt-4 save-btn">Save</Button>
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
</template>

<script>


export default {
  data() {
    return {
      selectedCouponDiscount:['Select'],
      optionsCouponDiscount:[
          { value: 'a', text: 'Coupon Dsicount 1' },
          { value: 'b', text: 'Coupon Dsicount 2' },
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
          key: "firstName",
          sortable: true,
          label: "N",
          class: "options-column"
        },
        {
           key: "lastName",
          sortable: true,
          label: "CODE",
          class: "options-column"
        },
        {
           key: "eventName",
          sortable: true,
          label: "DISCOUNT",
          class: "options-column"
        },
         {
          key: "EDIT",
          sortable: true,
          label: "edit",
          class: "options-column events-details"
        },
         { key: 'enterDate', label: 'DELETE', sortable: true }
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
