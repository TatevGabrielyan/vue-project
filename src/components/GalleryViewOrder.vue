 <template>
   <div>
      <div class="mb-3">
         <div class="row">
            <b-navbar  type="dark" class=" py-0">
               <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
               <b-collapse id="nav-collapse" is-nav class="nav-collapse-gallery">
                  <b-navbar-nav class="ml-auto">
                  </b-navbar-nav>
               </b-collapse>
            </b-navbar>
         </div>
      </div>
      <div class="">
         <b-button id="button-2" variant="" class="tooltip-btn p-0 d-lg-block" >
            <div class="logo user-logo">
               <img src="../assets/icons/Group 1.png" alt="logo" class="">
            </div>
         </b-button>
      </div>
      <div class="order-view-header">
         <div class="row relative-header">
            <div class="col-lg-3 col-md-6 col-12 pt-2 gallery-header header-z view-order-header text-lg-start text-md-start text-center">
               <span class="gallery-link pb-2 gallery-user-name">({{clientData.CLIENT_ID}}) {{eventData.EVENT_NAME}}  {{eventData.EVENT_DATE}}</span>
            </div>
            <div class="col-lg-2 col-md-6 col-12  header-z view-order-ph text-lg-start text-md-start text-center">
               <b-dropdown id="dropdown-left" text="Photographers"  class="gallery-link text-nowrap photographers-dropdown" >
                     <b-dropdown-item href="#" v-for="element in photographers.data" :key="element.photographer_id">{{element.PHOTOGRAPHER_ID}}</b-dropdown-item>
                  </b-dropdown>
            </div>
            <div class="col-lg-3 col-md-6 col-6 mb-2 text-lg-center text-md-start text-start header-z">
               <button class="ordering-btn order-btn">Ordering</button>
            </div>
            <div class="col-lg-2 col-md-6 col-6 mb-2 text-lg-center text-md-end text-end header-z">
               <button class="back-to-btn order-btn">Back to Galleries</button>
            </div>
            <div class="container basket-container ">
               <button class="border-0 bg-white " >
                  <div class="input-group justify-content-lg-end justify-content-sm-center items-justify"> 
                     <span class="input-icon" id="basic-addon1">
                     <img src="../assets/icons/basket.png" alt="basket">
                     </span>
                     <span class="divider"></span>
                     <input type="submit" class="your-items text-center" aria-describedby="basic-addon1" value="Your items">
                  </div>
               </button>
            </div>
            <div class="col-lg-2 col-md-4 col-12 p-0">
               <div class="items-gallery text-end m-0 items-sm">
                  <div class="create-folder-modal">
                     <b-modal id="modal-cart" size="lg" scrollable  centered title="Add to Cart">
                        <div>
                           <div class="row">
                              <div class="col-lg-6 col-md-6 col-12">
                                 <v-select class="select-v-type select-card-main" v-model="selectedType" :options="optionsType" label="text">
                                    <template #selected-option="{ text }" class="w-100">
                                       <div style="" class="w-100">
                                          <strong class="select-strong w-100" >{{ text }}</strong>
                                       </div>
                                    </template>
                                 </v-select>
                              </div>
                              <div class="col-lg-6 col-md-6 col-12">
                                 <img :src="img" alt="add-to-cart-img"  class="w-100 add-to">
                              </div>
                           </div>
                           <div class="text-center mt-5">
                              <router-link  to='/Prints'>
                                 <Button  class="text-uppercase create-btn w-auto detail-modal mb-3">Detailed Order</Button>
                              </router-link>
                              <router-link  to='/Checkout'>
                                 <Button class="text-uppercase login-btn w-auto addToCart-modal mb-3" >Add to Cart</Button>
                              </router-link>
                           </div>
                        </div>
                     </b-modal>
                  </div>
               </div>
            </div>
         </div>
         <div class="row">
            <div class="row pr-0">
               <div class="col-lg-6 col-md-12 col-12 mt-2">
                  <div class="row">
                     <div class="col-lg-4 col-md-4 col-6">
                        <div class="d-inline add-photos-icon gallery-seen seen-view" id="seen" @click="seen()">
                           <img src="../assets/icons/seen.png" alt="seen" id="seen-img">
                        </div>
                        <div class="d-inline  add-photos-icon gallery-unseen unseen-view" id="hidden" @click="hidden()">
                           <img src="../assets/icons/hidden.png" alt="hidden" id="hidden-img">
                        </div>
                     </div>
                     <div class="col-lg-4 col-md-2 col-3 creation-of-folder">
                        <div class="add-photos create-folder-sm">
                           <button class="btn btn-secondary text-black button pl-0 add-btn-gallery create-btn-gallery" v-b-modal.modal-center >
                              <div class="d-inline  create-folder ">
                                 <img src="../assets/icons/create folder.png" alt="add-folder" class="add-folder-icon">
                              </div>
                              <span class="add-photos-txt create-folder-txt" >Create folder</span>
                           </button>
                        </div>
                        <div class="create-folder-modal">
                           <b-modal id="modal-center" size="lg" centered title="Create Folder">
                              <div>
                                 <b-form-group
                                    label="Folder name"
                                    label-for="folder-name"
                                    class="folder-name-label"
                                    >
                                    <b-form-input id="folder-name" v-model="text"  placeholder=""></b-form-input>
                                 </b-form-group>
                                 <div id="selector">
                                    <input class="shared" type="checkbox" id="isSHared" v-model="checked">
                                    <label  class="text-capitalize mb-3 shared shared-label" for="isSHared" >Is shared</label>
                                    <div v-if="checked">
                                       <p class="mt-5 text-capitalize select-event-label">Select event</p>
                                       <v-select class="mb-3 selected-options" v-model="selectedOptions" :options="optionsSelect" label="text">
                                          <template #selected-option="{ text }">
                                             <div style="display: flex; align-items: baseline;">
                                                <strong class="select-strong">{{ text }}</strong>
                                             </div>
                                          </template>
                                       </v-select>
                                    </div>
                                 </div>
                                 <div class="text-center mt-5">
                                    <button  class="text-uppercase create-btn w-auto create-modal" v-on:click="create()">Create</button>
                                 
                                 </div>
                              </div>
                           </b-modal>
                        </div>
                     </div>
                     <div class="col-lg-4 col-md-2 col-3">
                        <div class="add-photos create-folder-sm download-sm">
                           <button class="btn btn-secondary text-black button pl-0 add-btn-gallery">
                              <div class="d-inline  download">
                                 <img src="../assets/icons/download.png" alt="download-icon" class="download-icon">
                              </div>
                              <span class="add-photos-txt download-txt">Download</span>
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="col-lg-6 col-md-12 col-12 mt-2 pr-0">
                  <div class="row row-search-sm">
                     <div class="col-lg-4 col-md-3 col-12 index-folder">
                        <div class="add-photos mb-3 d-flex albums-order">
                           <b-dropdown
                              split
                              split-variant="outline-primary"
                              block
                              text="Show Folders"
                              class="my-2 view-mode view-mode-order"
                              id="adding-folder"
                              >
                              <b-dropdown-item>Favorites ({{this.fav.TOTAL_IMAGES}})</b-dropdown-item>
                             
                           </b-dropdown>
                        </div>
                     </div>
                     <div class="col-lg-4 col-md-3 col-12 index-folder">
                        <div class="">
                           <v-select class="select-v-type select-card-main show-page" v-model="selectedPage" :options="optionsPage" label="text">
                                    <template #selected-option="{ text }" class="w-100">
                                       <div style="" class="w-100">
                                          <strong class="select-strong w-100" >Show {{ text }}</strong>
                                       </div>
                                    </template>
                                 </v-select>
                        </div>
                     </div>
                     <div class="col-lg-4 col-md-6 col-12">
                        <b-input-group size="sm" class='filter-contact m-auto'>                    
                     <button class="btn-search btn-datatable"><img src="../assets/icons/search.png" alt="search" class="w-75"></button>
                      <b-form-input
                        id="filter-input"
                        v-model="searchQuery"
                        type="search"
                        placeholder="Search here..."
                        class="search-on-datatable"
                      ></b-form-input>
                      <b-input-group-append style="width: 40px;">
                        <b-button :disabled="!searchQuery" @click="searchQuery = ''">Clear</b-button>
                      </b-input-group-append>
                    </b-input-group>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div class="hr-divider mt-3"></div>
                     <div class="row list-header  mt-4 pt-0 gallery-open-sidebar" id="selected-header" v-if="selectedHead">
                        <div class="col-lg-6 col-md-6 col-12">
                           <div class="row">
                              <div class="col-3 py-0">
                                 <span class="selected-number">  {{ galleryItems.length }} / {{imgLength.length}} selected</span>
                              </div>
                              <div class="col-5 py-0">
                              
                                 <span class="select-unselect" @click="checkAll()" >
                                     Select All Loaded Images
                                 </span>
                              </div>
                              <div class="col-4 py-0">
                                 <span class="select-unselect"> 
                                    <button class="border-0 bg-transparent" @click="uncheck()">Unselect</button>
                                 </span>
                              </div>
                           </div>
                        </div>
                        <div class="col-lg-6 col-md-5 col-12">
                           <div class="row d-flex justify-content-end">
                              <div class="col-lg-1 col-md-2 col-2 select-icons py-0">
                                 <img src="../assets/icons/favorite-selected.png" alt="favourite">
                              </div>
                              <div class="col-lg-1 col-md-2 col-2 select-icons py-0">
                                 <img src="../assets/icons/download-selected.png" alt="download">
                              </div>
                              <div class="col-lg-1 col-md-2 col-2 select-icons py-0">
                                 <img src="../assets/icons/copy-selected.png" alt="copy">
                              </div>
                              <div class="col-lg-1 col-md-2 col-2 select-icons py-0">
                               
                                 <img src="../assets/Path 23.png" alt="Camera">
                              </div>
                              <div class="col-lg-1 col-md-2 col-2 select-icons py-0">
                                 <img src="../assets/icons/delete-selected.png" alt="delete">
                              </div>
                              <div class="col-lg-1"></div>
                           </div>
                        </div>
                     </div>
                     <div class="main-gallery gallery-content">
                        <!-- <div class="flexbox gallery-flexbox mb-5" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="limit">
                           <div  v-for="(element, i) in resultQuery" :key="i"  ref="galleryItemId"  class="flex-image card gallery-card mt-4 gallery-flex-image">
                              <div class="new-cart-images"> 
                                 <span class="text img-src element-txt" ref="galleryName">{{ element.IMAGE_NAME }} </span>
                                 <input 
                                    type='checkbox' 
                                    class="select-checkbox"  
                                    v-bind:value='element' 
                                    v-model='galleryItems' 
                                    @change="printValues($event)"
                                    >
                              </div>
                           
                              <img v-bind:src="'https://studioseye.com/' + element.IMAGE_LINK_PATH + 'THUMBNAILS/' + element.IMAGE_NAME"  class="element-img-response" @click="index = i++; slideshow=!slideshow, openSlideshow()" />
                              <div class="card-footer gallery-card-footer border-0">
                                 <div class="row d-flex justify-content-end pr-3">
                                    <div class="col-1">
                                       <font-awesome-icon icon="heart" class=" d-inline favourite pointer-icons" @click="favourite($event)" ref="faHeart" />
                                    </div>
                                    <div class="col-1">
                                       <font-awesome-icon v-b-modal.modal-cart icon="shopping-cart" class=" d-inline cart cart-icons pointer-icons" @click="cart($event)"/>
                                    </div>
                                    <div class="col-1">
                                       <font-awesome-icon icon="arrow-down" class=" d-inline cart cart-icons pointer-icons"  />
                                    </div>
                                    <div class="col-1">
                                       <font-awesome-icon icon="copy" class=" d-inline cart cart-icons pointer-icons"   />
                                    </div>
                                 </div>
                              </div>
                           
                           </div>
                        </div> -->
                        <!-- <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="limit">
                           <CoolLightBox 
                                 :items="items"
                                 :index="index"
                                 :fullScreen="true"
                                 :useZoomBar="true"
                                 @close="index = null"
                              >
                           </CoolLightBox>
                        </div> -->
                   

                        
                        <vue-masonry-wall :items="items" :options="{width: 300, padding: 12}" @append="append">
                           <template v-slot:default="{item}">
                           <div class="item">
                              <img :src="item" alt="imgSrc"  @click="toggler = !toggler">
                              <!-- <div  v-for="(element, i) in items" :key="i"> 
                                
                              <FsLightbox
                              :toggler="toggler"
                              :sourced="['https://studioseye.com/' + element.IMAGE_LINK_PATH + 'THUMBNAILS/' + element.IMAGE_NAME]"
                           />
                           </div> -->
                            
                           </div>
                        
                       
                          
                           </template>
                        </vue-masonry-wall>
                       
                     </div>
      <div>
      </div>
    
   </div>
</template>

<script>
import Navbar2 from "./reusable/Navbar2.vue";
import Button from './reusable/Button.vue'
import axios from "axios";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import { Carousel, Slide } from 'vue-carousel';
import $ from "jquery";
import VueGallerySlideshow from 'vue-gallery-slideshow';
import getToken from '../components/reusable/token.vue';
import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'
import VueMasonryWall from "vue-masonry-wall";
import FsLightbox from "fslightbox-vue";

export default {
  
  components:{
    Navbar2,
    Button, 
    Carousel,
    Slide,
    VueGallerySlideshow,
    CoolLightBox,
    VueMasonryWall,
    FsLightbox 
},


  name: "table-column-example",
  display: "Table Column",
  order: 9,
  instruction: "Drag using the handle icon",
  data(){
   return{
      items: [],
      toggler: false,
      masonary: [
          {title: 'Item 0', content: 'Content'},
          {title: 'Item 1', content: 'Content'},
        ],
      fav:[],
      slideshowImages:[],
      searchQuery: null,
      photos: [],
      results: [],
      busy: false,
      selectedPage:'10',
      optionsPage:[
         {value:'a', text:'10'},
         {value:'b', text:'100'},
         {value:'c', text:'200'},
       ],
      limit: null,
      clientData:[],
      list:[],
      img:'',
      addCart:[],
      slideshow:false,
      selectedHead: false,
      search: '',
      alt: null,
      index: null,
      eventData:[],
      selectedID: 0,
      photographers:[],
      quantity: [{
         name: '1',
         code: '1'
      }, {
         name: '2',
         code: '2'
      }, {
         name: '3',
         code: '3'
      }, {
         name: '4',
         code: '4'
      }],
      currentId: null,
      imgLength:'',
      status: false,
      selected: null,
      events: [
          { value: null, text: 'Please select an option' },
          { value: 'a', text: 'This is First option' },
          { value: 'b', text: 'Selected Option' },
          { value: { C: '3PO' }, text: 'This is an option with object value' },
          { value: 'd', text: 'This one is disabled', disabled: true }
      ],
      galleryFolders:[],
      text: '',
      options: {
        toolbar: true,
        url: 'data-source',
      },
      modal_image_path: "",
      // activeIndex:0,
      isCheckAll: false,
      galleryItems: [],
      selectedItem: "",
      selectedImages: [],
      initialSelected: [],
      headers: ["id", "alt", ],  
      active: false,
      selectedOptions:['Select event'],
      selectedType:['Print Lustre'],
      optionsType:[
          { value: 'a', text: 'Print Lustre' },
          { value: 'b', text: 'Type 2nd' },
      ],
      selectedNumber:['1'],
            optionsNumber:[
          { value: 'a', text: '1' },
          { value: 'b', text: '2' },
        ],
        optionsSelect:[
          { value: 'a', text: 'event 1' },
          { value: 'b', text: 'event 2' },
        ],
      checked: false,
   }
},
mounted(){
 

const token = getToken.getToken();
 if(!token){
    return false
 }else{
   this.limit = this.selectedPage;
   const getGalleryEvent = async ()  =>{
   let event_id = $cookies.get('event_id');
   let client_id = $cookies.get('client_id');
      try{
         const getGalleryEventList = await axios({
                    method: 'post',
                    type:'post',
                    url: 'http://dev.studioseye.com/api/geteventbyid',
                     data: {
                        'client_id': client_id,
                        'event_id': event_id
                     },
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                });
                if(getGalleryEventList.status == 200){
                  this.eventData = getGalleryEventList.data;
               };

         const getGalleryClientList = await axios({
                    method: 'post',
                    type:'post',
                    url: 'http://dev.studioseye.com/api/getclientinfobyid',
                     data: {
                        'client_id': client_id,
                        'event_id': event_id
                     },
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                });
                if(getGalleryClientList.status == 200){
                  this.clientData = getGalleryClientList.data;
               };
         const getGalleryPhotographersList = await axios({
                    method: 'post',
                    type:'post',
                    url: 'http://dev.studioseye.com/api/getphbyevent',
                     data: {
                        'client_id': client_id,
                        'event_id': event_id
                     },
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                });
                if(getGalleryPhotographersList.status == 200){
                  this.photographers = getGalleryPhotographersList;
               };
               const getGalleryFolders = await axios({
                    method: 'post',
                    type:'post',
                    url: 'http://dev.studioseye.com/api/getgalleryfolderbyevent',
                     data: {
                        'client_id': client_id,
                        'event_id': event_id
                     },
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                });
                if(getGalleryFolders.status == 200){
                  this.galleryFolders = getGalleryFolders.data[1]; 
                  this.fav =  getGalleryFolders.data[0];
               };
           this.loadMore();
        }
        catch(err){
            console.log(err.message);
            this.busy = false;
        }
  };
  getGalleryEvent();
  
 };
},

computed: {
    slideValue: function() {
      return parseInt(this.selectedID, 10);
    },
    resultQuery(){
      if(this.searchQuery){
       
      return this.photos.filter((item)=>{
        return this.searchQuery.toLowerCase().split(' ').every(v => item.IMAGE_NAME.toLowerCase().includes(v))
      })
      }else{
       
        return this.photos;
      }
    
    },
 
},

  methods: {
   append() {
        for (let i = 0; i < 20; i++) {
          this.masonary.push({title: `Item ${this.masonary.length}`, content: 'Content'})
        }
      },

async  loadMore() {

    
      let event_id = $cookies.get('event_id');
       let client_id = $cookies.get('client_id');
      this.busy = true; 
               const getGalleryImages = await axios({
                    method: 'post',
                    type:'post',
                    url: 'http://dev.studioseye.com/api/geteventimages',
                     data: {
                        'client_id': client_id,
                        'event_id': event_id
                     },
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                });
                if(getGalleryImages.status == 200){
                  const append = getGalleryImages.data.slice(this.photos.length, this.photos.length + this.limit );
                  this.photos = this.photos.concat(append);
                  for(let img in getGalleryImages.data){
                     this.items.push('https://studioseye.com/' + getGalleryImages.data[img].IMAGE_LINK_PATH + 'THUMBNAILS/' + getGalleryImages.data[img].IMAGE_NAME)
                  }
                
                  this.busy = false;
                  this.imgLength = getGalleryImages.data;
                  for(let i in this.photos){
                     this.slideshowImages.push('https://studioseye.com/' + this.photos[i].IMAGE_LINK_PATH + 'THUMBNAILS/' + this.photos[i].IMAGE_NAME);
                  
                  }
               };
               if(this.galleryItems.length == this.imgLength.length){
               this.checkAll()
            }
    },
    create(){
        let addingFolder = document.getElementById('adding-folder');
        if($(addingFolder).find('ul').length > 0) {
         let li =  document.createElement('li');
         li.innerHTML = this.text;
         li.classList.add('new-folder-li');
         addingFolder.childNodes[2].appendChild(li);
        };

    },
    openSlideshow(){
      this.$nextTick(() => {
         let btnFav = document.createElement('BUTTON');
         let btnCart = document.createElement('BUTTON');
         let btnCopy = document.createElement('BUTTON');
         let btnDownload = document.createElement('BUTTON');
         let iconFav = document.createElement("img");
         let iconCart = document.createElement("img");
         let iconCopy = document.createElement("img");
         let iconDownload = document.createElement("img");
         iconFav.src=require('../assets/favorite.png');
         iconCart.src=require('../assets/CART.png');
         iconCopy.src=require('../assets/copy.png');
         iconDownload.src=require('../assets/Group 111.png');
         iconFav.style.width='17px';
         iconCart.style.width='17px';
         iconCopy.style.width='17px';
         iconDownload.style.width='17px';
         btnFav.appendChild(iconFav);
         btnCart.appendChild(iconCart);
         btnCopy.appendChild(iconCopy);
         btnDownload.appendChild(iconDownload);
         btnFav.classList.add('cool-lightbox-toolbar__btn');
         btnCart.classList.add('cool-lightbox-toolbar__btn');
         btnCopy.classList.add('cool-lightbox-toolbar__btn');
         btnDownload.classList.add('cool-lightbox-toolbar__btn');
         document.querySelector(".cool-lightbox-toolbar").prepend(btnFav);
         document.querySelector(".cool-lightbox-toolbar").prepend(btnCart);
         document.querySelector(".cool-lightbox-toolbar").prepend(btnCopy);
         document.querySelector(".cool-lightbox-toolbar").prepend(btnDownload);

      });
    
    },
     
    printValues: function(e){    //  on selecting/unselecting the element in gallery
  
  let checkbox = e.currentTarget.parentElement.parentElement;
   if(e.currentTarget.checked){
  checkbox.classList.add('selected-element');
   }else{
       checkbox.classList.remove('selected-element');
   };
   if( this.galleryItems.length > 0){
     this.selectedHead = true;
  }else{
     this.selectedHead = false;
  }

},

checkAll: function(){ // on selecting all the elements in gallery
      this.galleryItems = [];
      // console.log(this.galleryItems);
       let selectAll = this.$refs.galleryItemId;
         for(let a in selectAll){
           selectAll[a].classList.add('selected-element');
          

         };
        for (var key in this.imgLength) {
         this.galleryItems.push(this.imgLength[key])
        }
      
        
       
    },

    uncheck(){  //  on unchecking the selected elements in the gallery
    let selElement = this.$refs.galleryItemId;
     for(let a in selElement){
       selElement[a].classList.remove('selected-element');
     };
      this.galleryItems = [];
 },
    removeAt(idx) {
      this.list.splice(idx, 1);
    },
     hidden(){
        let name = this.$refs.galleryName;
        for(let i in name){
           name[i].style.opacity='0'
        };
      let hidden = document.getElementById('hidden');
      let hiddenImg = document.getElementById('hidden-img');
      let seenImg = document.getElementById('seen-img');
      hidden.style.background='#223d8f';
      hiddenImg.style.filter='invert(133%) sepia(274%) saturate(0%) hue-rotate(217deg) brightness(125%) contrast(117%)'
      seenImg.style.filter='invert(84%) sepia(80%) saturate(2177%) hue-rotate(217deg) brightness(94%) contrast(90%)'
      let seen = document.getElementById('seen');
      seen.style.background='#fff';
    },
    seen(){
        let nameSeen = this.$refs.galleryName;
         for(let i in nameSeen){
           nameSeen[i].style.opacity='1'
        };
      let hidden = document.getElementById('hidden');
      let hiddenImg = document.getElementById('hidden-img');
      let seenImg = document.getElementById('seen-img');
      hidden.style.background='#fff';
      hiddenImg.style.filter='invert(0%) sepia(192%) saturate(2177%) hue-rotate(217deg) brightness(70%) contrast(90%)'
      seenImg.style.filter='invert(26%) sepia(100%) saturate(0%) hue-rotate(217deg) brightness(125%) contrast(117%)'
      let seen = document.getElementById('seen');
      seen.style.background='#223d8f';

    },

    favourite(e){
        
 var clicks = $(this).data('clicks');
  var fav = e.target.parentElement
  if (clicks) {    
     fav.style.color='white';
     fav.style.stroke='#adadad';
  } else {
     fav.style.color='#223D8F';
     fav.style.stroke='white';
  }
  $(this).data("clicks", !clicks);
    },

    cart(e){ 
      let cartImageDiv = e.target.parentElement.parentElement.parentElement.parentElement.parentElement;

      if($(cartImageDiv).find('img').length > 0) {
       let cartImage = cartImageDiv.childNodes[1].src;
       this.img=cartImage 
}
  var clicks = $(this).data('clicks');
  $(this).data("clicks", !clicks);
    },
  },
  created() {
   this.loadMore();
  
  

  }

}
</script>

<style>
.nav-collapse-gallery{
    padding: 1.6rem;
}
.ordering-btn{
    font-size: 13px;
    line-height: 14px;
    color: #ffffff;
    font-weight: 600;
    border-radius: 10px;
    background-color: #223d8f;
    border: none;
    /* padding: 0.7rem; */
    border: 1px solid #223d8f;
    width: 150px;
    text-align: center;
    height: 35px;

}
.back-to-btn{
    font-size: 13px;
    line-height: 14px;
    color: #ffffff;
    font-weight: 600;
    border-radius: 10px;
    background-color: #223d8f;
    border: none;
    /* padding: 0.7rem; */
    border: 1px solid #223d8f;
    width: 150px;
    text-align: center;
      height: 35px;
}
.ordering-btn:hover, .back-to-btn:hover{
   color: #223d8f;
   background-color: #ffffff;
   
}
.add-folder-icon{
        width: 24px;
}
.main-header, .order-view-header{
    margin-top: -4rem;
    padding: 0 2rem;
}
.main-gallery{
     padding: 0 2rem;
}
.download-icon{
        width: 21px;
}
.create-folder, .download{
    color: #223d8f;
    font-size: 20px;
    border-radius: 12px;
    background-color: #ffffff;
    border: 1px solid #223d8f;
    padding: 8px 10px 12px 10px;
}
.download{
      margin-left: -1px;
}
.search-icon-gallery{
   height: 48px;
    padding: 9px;
    border: none;
    border-radius: 10px 0px 0px 10px;
    background-color: #ffffff;
    padding-top: 11px;
    padding-right: 1px;
}
.divider-search-gallery{
        display: inline-block;
    width: 0;
    height: 1.5em;
    border-left: 1px solid #ADADAD;
    border-right: 1px solid #ADADAD;
    margin-top: 1rem;
}
.search-btn-gallery{
    width: 72%;
    height: 48px;
}
.hr-divider{
    width: 100%;
    height: 1px;
    background: #223D8F;
}
.gallery-flex-image{
    flex: 0 0 15.5%;
}
.gallery-card-header{
    position: relative;
    top: 0.7rem;
}
.gallery-flexbox{
    overflow: hidden;
    height: auto;
}
.fa-heart{
    color: white;
    stroke: #adadad;
    stroke-width: 2rem;
}
.selected-element-gallery{
    padding: 0;
       
background-color: #ffffff;
border: 4px solid #223d8f!important;
}
.cart{
        font-size: 17px;
    color: #adadad;
}
.seen-view, .unseen-view{
    position: relative;
    top: 9px;
}
.create-folder-view{
        position: relative;
    top: 3px;
}
.gallery-header-second{
    padding-right: 1.3rem;
}
.items-gallery{
    margin-right: 1.3rem;
}
.image {
  width: 100px;
  height: 100px;
  background-size: cover;
  cursor: pointer;
  margin: 5px;
  border-radius: 3px;
  border: 1px solid lightgray;
  object-fit: contain;
}
.cart:focus{
  outline: none;
}
.favourite{
  font-size: 20px;
}
.cart-icons{
  font-size: 17px;
}
/* modal */
 .modal-content{
    background-color: #f5f5f5!important;
    border-radius: 0!important;
    border: none!important;
    padding: 1rem;
    width: 80%!important;
    margin: auto;
}
.modal-title{
    font-size: 17px;
    color: #393939;
    font-weight: 900;
    text-transform: uppercase;

}
 .modal-header{
  border: none!important;
      /* position: absolute;
    right: 0; */
}

.modal-footer{
  display:none!important
}
.modal-header button {
  border-radius: 50%;
    background: #393939;
    color: #FFFFFF;
    width: 25px;
    height: 25px;
    font-size: 24px;
    padding: 0!important;
    margin: 0!important;
}
#modal-center___BV_modal_body_  #folder-name{
      width: 100%!important;
    filter: drop-shadow(0 0 8.5px rgba(159,159,159,0.33));
    background-color: #ffffff;
    padding: 1rem!important;
}
.folder-name-label label{
    font-size: 15px;
    color: #393939;
    font-weight: 600;
    text-indent: 1.3rem;
}
.shared{
      padding-left: 1rem;
          font-size: 15px;
}
.shared label{
      white-space: initial;
    padding-left: 1rem;
    font-size: 15px;
    color: #393939;
    font-weight: 600;
}
.create-modal{
    padding: 1rem 4rem;
}
.detail-modal{
  border-radius: 10px!important;
    background-color: #ffffff!important;
    padding: 0.5rem 2rem!important;
    border: 3px solid #223d8f!important;
    margin-left: 10px;
}
.addToCart-modal{
      border-radius: 10px!important;
    padding: 0.5rem 3rem!important;
    border: 3px solid #223d8f!important;
    margin-left: 10px;
}
.select-event-label{
    font-size: 15px;
    color: #393939;
    font-weight: 600;
    text-indent: 1rem;
}
.select-card-main .vs__dropdown-toggle .vs__selected-options .vs__selected{
  margin: 0!important;
}
.close{
  opacity: 1;
}
.close:hover{
  color: transparent;
}
.modal-table-header{
    filter: drop-shadow(0px 3px 7px rgba(0,0,0,0.28));
    background-color: #ffffff;
}
.modal-th{
  padding: 0.5rem 1rem;
  text-align: center!important;
  color: #223d8f;
    font-weight: 600;
   
}
.modal-td{
      text-align: center;
      border-bottom: 1px solid transparent!important;
      font-size: 15px;
      color: #393939;
      font-weight: 400;
      padding: 0!important;
          height: 48px;
}

.modal-border{
   border-right: 1px solid #C9C9C9!important;
}
.modal-tbody{
      position: relative;
    top: 1rem;
}
.modal-v-select{
      /* height: 40px; */
    width: 160px!important;
    margin: auto;
}
.modal-v-select> .vs__dropdown-toggle{
      padding: 4px 10px!important;
}

.modal-td ul{
  width: 1px;
}
#showImageModal___BV_modal_header_{
  position: absolute;
  right: 0;
  z-index: 100;
  margin-top: 1rem;
}
.image-alt{
  font-size: 16px;
    color: #393939;
    font-weight: 600;
    text-align: center;
}
.image-num{
  font-size: 15px;
    color: #adadad;
    font-weight: 400;
    text-align: center;
}
#showImageModal .modal-dialog{
      min-width: 100%;
}
.selected-options{
  height: 49px;
}
.selected-options div div .vs__selected{
      margin-top: -4px;
}

.rightside-gallery{
    width: 45%;
    display: inline-block;
    margin: 0 0.5rem 0.5rem 0;
}
.VueCarousel-slide img {
  max-width: 100%;
}

.carousel-nav .carousel-nav-prev {
     position: absolute;
    left: 0;
    top: 14rem;
}

.carousel-nav .carousel-nav-next {
      position: absolute;
    right: 0;
    top: 14rem;
}
.checkbox-view{
  
    right: 11px!important;

}
.shared-label{
    position: relative;
    top: 0.3rem;
}
.download-txt{
  padding-right: 2rem;
}
.basket-container{
    position: absolute;
    text-align: end;
    right: 1.6rem;
    top: 3rem;
}
.view-mode-order {
    width: 210px;
}
.search-for-gallery{
      position: absolute;
    right: -10px;
}
.header-z{
      z-index: 100;

}
.create-folder-modal{
  z-index: 100000!;
}
.col-gapless{
    height: 80vh;
    overflow: hidden;
}
.galleryImg-height{
  height: 80vh;
}
.modal-icons-order{
      text-align: end;
    position: fixed;
    top: 25%;
    right: 0;
}
.modal-icon-img{
  margin-bottom: 1rem;
}
.modal-icon-img img{
      border: 1px solid #223D8F;
    text-align: -webkit-auto;
    padding: 0.5rem;
    border-radius: 10px;
    width: 50px;
    height: 50px;
    
    

}
.new-cart-images{
      padding-right: 0!important;
    padding-left: 0!important;
    -webkit-filter: drop-shadow(0px 3px 3.5px rgba(0,0,0,0.16));
    filter: drop-shadow(0px 3px 3.5px rgba(0,0,0,0.16));
    background-color: #ffffff;
        display: flex;
    justify-content: space-between;
    padding: 0.7rem;
}
.element-txt{
  padding-left: 1rem;
}
.element-img-response{
      height: 100%;
    object-fit: contain;
    filter: drop-shadow(0px 3px 3.5px rgba(0,0,0,0.16));
    background-color: #ffffff;
}



/* vgs-carousel */

.vgs{
    /* background-color: transparent!important; */
    backdrop-filter: brightness(97%);
    z-index: 100000!important;
      background: #F5F5F5!important;
      /* max-width: 150vh!important; */
          left: 150px!important;
    width: 78%!important;
      
}
.vgs__container{
  
    background: #F5F5F5!important;
    border-radius: 0!important;

    /* max-width: 150vh!important; */
height: 72vh!important;
top: 1.5rem;
}
.vgs__gallery{
  background: #F5F5F5;
  /* max-width: 120vh!important; */
      padding: 0 1rem;
      max-width: 81%!important;
}
.vgs__container__img{
      /* height: 80%!important; */
      
}
.vgs__close{
    background: #393939!important;
    border-radius: 50%;
    width: 35px!important;
    height: 35px!important;
    top: 1rem!important;
    left: 95%!important;
}
.vgs__gallery__container__img {
    margin-right: 6px!important;
    border-radius: 0!important;
    object-fit: fill!important;
}
.vgs__next, .vgs__prev{
    top: 35%!important;
    font-size: 55px!important;
    color: #B5B5B5!important;
    width: 35rem!important;
}
.vgs__gallery__title {
    color: #ADADAD!important;
    margin-bottom: 0.5rem;
    position: fixed;
    top: 0.5rem;
    right: 50%;
}
.backdrop-filter-gallery{
       width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    right: 0;
    backdrop-filter: brightness(99%);
    z-index: 100000!important;
    background: transparent!important;
}
.create-modal{
      font-weight: bold;
    font-family: "Montserrat";
    border: 2px solid #223d8f;
    font-size: 13px;
    
    height: 50px;
    border-radius: 10px;
}
.addCart{
    height: 60px;
}
.gallery-content{
   display: contents;
}
.index-folder{
   z-index: 10;
}
.new-folder-li{
   color: #AEAEAE;
    text-indent: 1rem;
}
.dropdown-toggle-split{
   z-index: 1000;
}
#adding-folder ul{
   width: -webkit-fill-available;
    top: 4px;
}
#adding-page__BV_button_:hover, #adding-folder__BV_button_:hover{
   color: #adadad;
}
.show-page ul{
   top: 7px!important;
}
.cool-lightbox{
   z-index: 100000!important;
}
.cool-lightbox .cool-lightbox-thumbs .cool-lightbox-thumbs__list .cool-lightbox__thumb:before{
   border: 3px solid #223D8F
}
.pointer-icons, .element-img-response{
   cursor:pointer
}
/* media */
@media only screen and (max-width:1496px) and (min-width:991px){
     .gallery-header-second .col-lg-2{
    width: 26.666667%;
}
}
@media only screen and (max-width:1403px) {
     .create-folder-txt {
   white-space: nowrap;
    padding: 0;
}
.albums-order, .page-order{
  width: 100%;
}
.page-order div .btn-outline-primary{
      /* margin-top: -1rem; */
      
    margin-left: 1rem;
        font-size: 11px;
}
.albums-order div .btn-outline-primary {
      margin-top: -0.5rem;
    margin-left: 1rem;
        font-size: 11px;
}
}

@media only screen and (max-width:1379px) {
     .create-btn-gallery {
       width: 100%;
    white-space: nowrap;
}
.download-txt{
      padding: 0;
}
.vgs__next, .vgs__prev{
  width:25rem!important
}
}
@media only screen and (max-width:1246px) and (min-width:768px){
  .input-search {
    width: 108px;
}
}
@media only screen and (max-width:1077px) {
     /* .input-icon img {
    width: 65%;
    padding: 0.8rem 0;
} */
.creation-of-folder{
    position: relative;
    right: 2rem;
}
.download-txt, .create-folder-txt{
      font-size: 12px;
}
}

@media only screen and (max-width:992px){
  .main-header{
    margin-top:0;
}
.gallery-flex-image{
      flex: 0 0 22.5%;
}
 .download-sm{
     position: absolute;
      right: -10px;
        width: 157px;
 }
 .create-folder-sm{
  margin: inherit;
 }
 .show-page-order{
      position: relative;
    left: 2.5rem;
 }
 .albums-order, .page-order, .input-filter{
      width: 160px!important;
 }
 .create-folder-txt{
  padding: 0.6rem;
 }
 .vgs{
      left: 0!important;
    width: 100%!important;
 }

}
@media only screen and (max-width:767px){
   .input-filter{
      margin:auto
   }
   .albums-order, .page-order, .input-filter{
      width: 205px!important;
 }
}
@media only screen and (max-width:768px){

  .gallery-flex-image{
        flex: 0 0 30.5%;
  }
  .create-folder-sm{
    background: transparent;
  }
.creation-of-folder {
    right: 1rem;
}
.download-sm {
    right: 41px;
}
 .show-page-order {
    left:0rem;
}
.view-order-header{
   text-align: start!important;
}
.view-order-ph{
   text-align: end!important;
}
}
@media only screen and (max-width:767px){
.search-div-lg{
  position: absolute;
}
.row-search-sm{
  margin-top: 1rem!important;
}
.vgs__container{
  top: 0!important;
  margin-top: 0!important;
  height: 280px!important;
}
.vgs__next, .vgs__prev{
      top: 17%!important;
      width: 7rem!important;
}
.modal-icons-order{
  display:flex;
  top: initial;
  right: initial;
}
.modal-icon-img{

    margin:1rem 1rem 0 0
}
.vgs__close{
  left: 88%!important;
}
}
@media only screen and (max-width:467px){
   .download-sm {
    right: -20px;
}
}

 @media only screen and (max-width:426px){
 .order-view-header {
    padding: 0!important;
}
.basket-container {
    right: 0;
}
.basket-container button{
  padding: 0;
}
.order-btn{
  width:125px
}
.creation-of-folder{
  margin: auto;
}
.gallery-flex-image {
    flex: 0 0 100%;
}
 }
 @media only screen and (max-width:376px){
  
.modal-icon-img img{
    padding: 0.4rem;
    width: 30px;
    height: 30px;
}
 }


</style>
