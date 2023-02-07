<template>
   <div class="container-fluid p-0">
      <div v-if="!hasRecords">
       <b-spinner
        v-for="variant in variants"
        :variant="variant"
        :key="variant"
        type="grow"
        class="mr-2"
      ></b-spinner>
      </div>
        <div v-if="hasRecords">
      <div class="row">
         <div class="col-lg-3">
         </div>
         <div class="col-lg-9 pl-0 clientView-lg" id="clientViewLg">
            <div class="d-flex justify-content-between show-gallery-header flex-wrap">
               <p class="showGallery-th">
                  User's name
                  <span class="showGallery-th-data">({{clientID}})</span>
               </p>
               <p class="showGallery-th">
                  Total Galleries
                  <span class="showGallery-th-data">({{totalRows}})</span>
               </p>
               <p class="showGallery-th">
                  Page
                  <span class="showGallery-th-data">({{this.currentPage}} of {{Math.ceil(totalRows/this.perPage)}})</span>
               </p>
               <p class="showGallery-th border-0">
                  Show in page
                  <span class="showGallery-th-data">({{this.perPage}})</span>
               </p>
            
               <div class="d-flex justify-content-start flex-wrap w-auto search-event">
                  <div class="input-group justify-content-end search-input-filter" > 
                 
                  </div>
                     <b-input-group >
                     <button class="btn-search btn-datatable"><img src="../../../assets/icons/search.png" alt="search" class="w-75"></button>
                        <b-form-input
                        id="filter-input"
                        v-model="filter"
                        type="search"
                        placeholder="Event ID, Event name"
                        class="event-filter"
                        ></b-form-input>
                     </b-input-group>
                 
               </div>
             

            </div>
            <div class="row">
               <div class="col-lg-8 show-gallery-border p-0">
               </div>
            </div>
            <div class="delete-all-div">
               <Button type="submit" variant="primary" class="text-uppercase login-btn menu-card-delete">Delete All</Button>
            </div>
         <b-row>  
            <b-col md="7" class="my-1 d-flex justify-content-lg-end justify-content-md-end justify-content-center">
                <b-pagination  v-model="currentPage" :total-rows="totalRows" :per-page="perPage" class="my-0" />
            </b-col>
          </b-row>
       <b-table
               :items="records"
               :fields="column"
               responsive
               :current-page="currentPage"
               :per-page="perPage"
               :filter="filter"
               :filter-included-fields="filterOn"
               @filtered="onFiltered"
               class="clientEvents-datatable-row"
    >
      <template #cell(name)="row">
        {{ row.value.first }} {{ row.value.last }}
      </template>
      <template  v-slot:cell(login)="data">

         <div class="row show-card event-card p-0">
                     <div class="col-lg-6 col-md-6 col-sm-12 pointer" >
                    <div class="event-cover-imgs">
                      <span v-if="data.item.eventCover">
                        <img
                           v-bind:src="data.item.eventCover"
                           alt="card menu"
                           class="w-100"
                        />
                     </span>
                     <span v-else>
                         <img
                           src="../../../assets/icons/photo.svg"
                           alt="card menu"
                           class="w-50 card-img-none"
                        />
                     </span>
                    </div>
                       <div>
                           <p class="text-uppercase card-menus text-start mt-2">{{data.item.eventType}}</p>
                           <p class="text-start menu-number">({{data.item.eventId}}) {{data.item.eventName}}</p>
                           <p class="text-start card-date">{{data.item.eventDate}}</p>
                       </div>
                     </div>
                     <div class="col-lg-6 col-md-6 col-sm-12">
                        <div class="row p-3">
                           <div class="col-lg-12 col-md-12 col-12 images-sm">
                              <div class="row justify-content-center showGallery-btns" >
                                 <div class="col-lg-10 col-md-10 col-7 text-nowrap show-data  client-notes">
                                    Total images {{data.item.totalImages}}
                                 </div>
                                 <div class="col-lg-1 col-md-2 col-5 add-btn-div p-0 client-add-btn">
                                    <button class="remove-images">
                                    <img src="../../../assets/icons/minus.png" alt="delete" class="remove-red-icon">
                                    </button>
                                 </div>
                              </div>
                           </div>
                           <div class="col-lg-12 col-md-12 col-12">
                              <div class="row justify-content-center showGallery-btns mt-3">
                                 <div class="col-lg-10 col-md-10 col-7 show-data client-notes" >
                                    Notify Client
                                 </div>
                                 <div class="col-lg-1 col-md-2 col-5 add-btn-div p-0 client-add-btn">
                                    <button class="remove-images">
                                    <img src="../../../assets/icons/211694_bell_icon.png" alt="notify" class="notify-icon">
                                    </button>
                                 </div>
                              </div>
                           </div>
                           <div class="col-lg-12 col-md-12 col-12">
                              <div class="row justify-content-center showGallery-btns mt-3">
                                 <div class="col-lg-10 col-md-10 col-7 show-data client-notes">
                                    Share
                                 </div>
                                 <div class="col-lg-1 col-md-2 col-5 add-btn-div p-0 client-add-btn">
                                    <button class="remove-images">
                                    <!-- <img src="../../../assets/icons/211694_bell_icon.png" alt="notify" class="notify-icon"> -->
                                    <img src="../../../assets/Group 62.png" alt="share" class="share-icon-link">
                                    </button>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="row mt-lg-4 mt-md-4 mt-0 selectPhotographer">
                           <div class="col-lg-12 col-md-12 col-8 mt-1">
                              <div>
                                 <form class="userPage-form"  >
                                 <v-select 
                                    class="select-v-type select-client p-0 select-photographer" 
                                    :options="setPhotographerOptions(data.item.photographers)" 
                                    :placeholder="data.item.photographers.length == 1 ? '('+data.item.photographers[0].photographerId+')Images ('+data.item.photographers[0].totalImages+')' : 'Select photographer'"
                                    ref="selPh"  
                                    label="text"
                                 >
                                    <template #selected-option="{ text }" class="w-100">
                                       <div style="" class="w-100">
                                          <strong class="select-strong w-100 strong-client select-photographer-txt text-nowrap" >
                                             <span class="selectedPhotographer">{{ text }}</span>
                                          </strong>
                                       </div>
                                    </template>
                                 </v-select>
                                 </form>
                              </div>
                           </div>
                           <div class="col-lg-12 col-md-12 col-8 mt-1 text-center">
                              <button class="open-gallery-btn" @click="eventGallery(data)">
                                  Open Gallery
                                    </button>
                           </div>
                        </div>
                     </div>
                  </div>
      </template>
    </b-table>
    <b-row>
           
            <b-col md="7" class="my-1 d-flex justify-content-lg-end justify-content-md-end justify-content-center">
                <b-pagination  v-model="currentPage" :total-rows="totalRows" :per-page="perPage" class="my-0" />
            </b-col>
          </b-row>


         </div>
      </div>
      </div>
   </div>
</template>
<script>
 import Button from '../Button.vue';
 import axios from 'axios';
 import getToken from '../token.vue';

 export default{
      components:{
            Button,
      },
    data(){
        return{
               selectedClient:'',
            optionsClient:[ ],
         mainProps:[
        {
            width: '100%',
            height: 'auto',
        }
        ],
        records: [],
         column: [
       {
          key: "login",
          sortable: false,
          label: "",
          class: "options-column"
        },
        
        
      ],

        currentPage: 1,
        perPage: 96,
        pageOptions: [5, 10, 15, { value: this.totalRows, text: "All" }],
        sortBy: '',
        sortDesc: false,
        sortDirection: 'asc',
        filter: null,
        filterOn: [],
        infoModal: {
          id: 'info-modal',
          title: '',
          content: ''
        },
        totalEvents:[],
          clientID:'',
      //   eventList: [],
       variants: ['danger', 'success', 'primary',  ]
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
     methods: {
      setPhotographerOptions(phData){
        if(phData.length == 1){
         if(typeof phData !== "undefined"){
             const phdata =  [{
            'text': '('+phData[0].photographerId+') Images ('+phData[0].totalImages+')',
            'totalImages':  phData[0].totalImages
             }];
             var act = document.querySelectorAll('.vs__actions');
             for(let i in act){
               if(act[i].tagName === 'DIV'){
                  act[i].style.display='none'
               }
             }
     
            
             
           return phdata;
         }
         
        }else if(phData.length > 1){
          
            const phdata = [];
            for(let i = 0; i < phData.length; i++){
                if(typeof phData[i] !== "undefined"){
                    phdata.push({
                'text': '('+phData[i].photographerId+') Images ('+phData[i].totalImages+')',
                'totalImages':  phData[i].totalImages
            });
    
                };
                var act = document.querySelectorAll('.vs__actions');
             for(let i in act){
               if(act[i].tagName === 'DIV'){
                  act[i].style.display='block'
               }
             }
                
            }
            return phdata;
        }else{
           const phdata =  [{
            'text': 'no photographer',
            'totalImages':  '0'
             }];
         return phData;
        }

      },

      onFiltered(filteredItems) {
       
        const totalRows = filteredItems.length
        this.currentPage = 1
      },

       eventGallery(row) {
         const isCookieEnabled = navigator.cookieEnabled;
      if(isCookieEnabled){
          $cookies.set('event_id', row.item.eventId);
          this.$router.push({name: 'Gallery'});
      }
      }
  },
  mounted(){
    const totalRows = this.records.length;
    const token = getToken.getToken();
     if(!token){
        return false
     }else{
     
        const getEventData = async ()  =>{
       let client_id = $cookies.get('client_id');
       this.clientID = client_id;
       console.log(this.clientID);
          try{
                const getclientEventList = await axios({
                    method: 'post',
                    type:'post',
                    url: 'http://dev.studioseye.com/api/geteventgallerybyclientid',
                     data: {
                        'client_id': client_id
                     },
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                });
                if(getclientEventList.status == 200){
                  this.records = getclientEventList.data;

               };
              var vm = this;
              vm.records = this.records;
            }
            catch(err){
                console.log('err');
                console.log(err.message);
            }
      };
      getEventData();
  
     }
 
  },

  
 }
</script>
<style>
   .clientEvents-datatable-row table > :not(:first-child){
      border-top:none
   }
   .clientEvents-datatable-row table tbody tr td{
      border: none!important;
          padding: 1rem!important;
   }
   .event-filter::placeholder {
                
                text-align: center;
                text-indent: 2rem;
            }
            .event-filter {
                 padding-left: 51px!important;
            }
            .clientEvents-datatable table tbody{
               display: flex;
            }
             .clientEvents-datatable-row  table tbody tr{
                   display: inline;
             }
  .selectPhotographer div  .vs__actions svg {
        background-image: url('../../../assets/icons/down-up-blue.png');
        height: 27px;
        width: 20px;
    }
    .selectPhotographer .v-select .vs__dropdown-toggle{
      padding: 0 6px 1px 5px!important;
      height: 41px;
      top: 0!important;
    }
    .select-photographer div div input{
      display: block;
      font-size: 13px;
    }
    .show-data{
        text-align: start;
    }
    .selectPhotographer .vs--searchable {
    /* width: 97%!important; */
    width: 89%!important;
    margin: auto;
    margin-left: 7px;
   }
    .select-photographer-txt{
        border-radius: 10px;
        line-height: 37px;
        color: #393939;
        font-weight: 400;
        font-size: 14px;
    }
    /* .selectedPhotographer{
         font-variant: all-petite-caps;
         font-size: smaller;
    } */
    .delete-all-div{
        text-align: end;
        width: 93.2%;
    }
    .sup-sm{
    font-size: 14px;
    color: #223d8f;
    position: relative;
    left: -22px;
    margin-top: 7px;
    }
    .clientView-lg{
      margin-top: 2rem!important;
    }
    .client-notes{
          line-height: 12px;
    }
   .event-card{
          width: 450px;
   }
   .menu-number{
          white-space: normal;
   }
   .event-cover-imgs{
          min-height: 285px;
   }
   .card-img-none{
          position: absolute;
    top: 31%;
    right: 50%;
    transform: translate(50%,-50%);
   }
   .pointer{
      cursor: pointer;
   }
   .open-gallery-btn{
    border: 2px solid #223d8f;
    color: #393939;
    font-size: 14px;
    padding: 0.5rem 2rem;
    border-radius: 10px;
    width: 176px;
    margin-top: 1rem;
    font-weight: 700;
   }
   .open-gallery-btn:hover{
      background-color: #223d8f;
      color: #fff!important;

   }
   @media only screen and (min-width: 1237px){
      .event-card{
             min-height: 28.3rem;
      }
   }
    @media only screen and (max-width:1200px){
        .select-photographer-txt, .show-data {
            font-size: 10px;
        }
        .selectPhotographer div{
            padding:0 3px;
        }
        .search-event{
            margin: auto;
        }
        .show-gallery-border{
            display: none;
        }
    }
     @media only screen and (max-width:991px){
        .selectPhotographer {
            width: 100%;
        }
        .selectPhotographer .vs--searchable {
                width: 100%!important;
        }
        .show-gallery-header{
            width: 100%;
        }
        .show-gallery-header p{
            padding-left: 2rem;
        }
        .clientView-lg{
      margin-top:0;
    }
    }
    @media only screen and (max-width:800px){
          .selectPhotographer .vs--searchable {
               /* width: 169px!important; */
        }
       
    }
    @media only screen and (max-width:767px){
        .images-sm{
            margin-top: 1rem!important;
        }
        .selectPhotographer{
         margin-left: 3px!important;
         padding-bottom: 10px;
         margin-top: 0px!important;
         width: 91%;

        }
        .selectPhotographer div .v-select{
            margin-top: 1rem;
            /* margin-right: -4rem; */
        }
        .show-gallery-header p {
            border-right:0;
        }
         .userPage-form{
          margin-top: 2rem;
    }
    .clientView-lg{
      padding-left: 0!important;
    }
    }
    @media only screen and (max-width:550px){
        .delete-all-div {
            width: 55.2%;
            margin-top: -1rem;
        }
    }
       @media only screen and (max-width:500px){
       .event-card {
    width: 300px;
}
    }
    @media only screen and (max-width:426px){
        .row-sm{
                padding: 0 0rem 0 2rem;
        }
        .client-add-btn{
         margin-left: 0;
        }
    }

</style>