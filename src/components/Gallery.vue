<template>
   <div>
      <Navbar2 class="mb-3"/>
      <div class="row">
         <div class="col-lg-3 col-md-4 ">
          
            <div>
               <b-button id="button-2" variant="" class="tooltip-btn p-0 " >
                  <div class="logo user-logo gallery-logo">
                     <img src="../assets/icons/Group 1.png" alt="logo">
                  </div>
               </b-button>
               <b-sidebar visible  id="sidebar-variant" title="" bg-variant="" text-variant="dark" shadow>
              
                  <div class="px-3 sidebar-menus" id="gallery-sidebar-padding">
                     <div class="mt-3">
                           <p>{{clientData.FIRST_NAME}} {{clientData.LAST_NAME}} ({{clientData.QR_BASED}})</p>
                           <h4 class="text-uppercase menus-header">{{eventData.EVENT_TYPE}}</h4>
                            <p class="menu-date">{{eventData.EVENT_NAME}}  {{eventData.EVENT_DATE}}</p>
                        <img src="../assets/icons/Mask Group 5.png" alt="user-img" class="w-100 menu-image">
                     </div>
                     <div class="menu-icons mt-3">
                        <div class="row m-0 d-flex justify-content-between">
                           <!-- <div class="col-2 camera-icon">
                              <img src="../assets/icons/Camera.png" alt="Camera">
                           </div> -->
                           <div class="col-5 share-icon">
                              <a href="/" class="text-decoration-none share-link">
                                 <img src="../assets/icons/share-svgrepo-com.png" alt="share" class="share-icon-link">
                                 <span class="share-icon-txt">Share</span> 
                              </a>
                           </div>
                        </div>
                     </div>
                     <div>
                        <b-list-group class="settings-list pt-2" >
                           <b-list-group-item class="setting-detail px-0 pb-0">Create Folder
                           </b-list-group-item>
                           <b-list-group-item class="setting-detail px-0 pb-0">All Photos   ({{this.folders.TOTAL_IMAGES}})</b-list-group-item>

                           <b-list-group-item class="setting-detail px-0 pb-0">Favorite Photos
                                ({{this.favourite.TOTAL_IMAGES}})
                               
                           </b-list-group-item>
                           <div class="row">
                              <div class="col-6">
                                 <b-list-group-item class="setting-detail px-0 pb-0">Test Folder</b-list-group-item>
                              </div>
                              <div class="col-2"></div>
                              <div class="col-1 testing-folder">
                                 <img src="../assets/icons/edit.png" alt="edit" class="test-icon">
                              </div>
                              <div class="col-1 testing-folder">
                                 <img src="../assets/icons/cart-add.png" alt="cart" class="test-icon">
                              </div>
                              <div class="col-1 testing-folder">
                                 <img src="../assets/icons/DELETE.png" alt="delete" class="">
                              </div>
                           </div>
                        </b-list-group>
                     </div>
                     <hr class="mt-0">
                     <div class="sidebar-order">
                        <p class="view-order text-uppercase">View / order</p>
                        <div class="row">
                           <div class="col-6">
                                <router-link  to='/GalleryViewOrder'>
                                      <Button  variant="primary" class="text-uppercase create-btn mb-3 w-auto order-client-btn view-order-btns" >Client</Button>
                                </router-link>
                           </div>
                           <div class="col-6">
                               <router-link  to='/GalleryViewOrder'>
                                     <Button variant="primary" class="text-uppercase create-btn mb-3 w-auto order-studio-btn  view-order-btns" >Studio</Button>
                               </router-link>
         
                           </div>
                        </div>
                        <p class="view-order text-uppercase">Order details</p>
                        <Button type="submit" variant="primary" class="text-uppercase create-btn mb-2 w-auto order-studio-btn  view-order-btns" >Studio</Button>
                     </div>
                  </div>
               </b-sidebar>
            </div>
         </div>
         <div class="col-lg-9 col-md-12 main-gallery" id="clientGallery">
            <b-button v-b-toggle.sidebar-variant class="open-sidebar-txt text-start" @click="sidebarCollapse()" id="open-sidebar">
                  <img src="../assets/icons/Path_118.svg" alt="open" id="sidebarIcon" class="sidebar-icon">
                </b-button>
            <div class="row">
                <div class="col-lg-6 col-md-6 col-12 gallery-items gal-position">
                  <div class="container-fluid text-end">
                     <div class="input-group justify-content-end" > 
                        <span class="input-icon" id="basic-addon1">
                        <img src="../assets/icons/basket.png" alt="basket">
                        </span>
                        <span class="divider"></span>
                        <input type="submit" class="your-items text-center" aria-describedby="basic-addon1" value="Your items">
                     </div>
                  </div>
               </div>
               <div class="col-lg-2 col-md-2 col-6 pt-2 gallery-header ">
                  <a href="/" class="text-decoration-none gallery-link pb-2 text-nowrap">Back to Galleries</a>
               </div>
               <div class="col-lg-2 col-md-2 col-6 pt-2 gallery-header gallery-user-name">
                  <span class="gallery-link pb-2  text-nowrap">Name ({{clientData.CLIENT_ID}})</span>
               </div>
               <div class="col-lg-2 col-md-2 col-6 gallery-header gallery-photo  gallery-open-sidebar">
                  <b-dropdown id="dropdown-left" text="Photographers"  class="gallery-link text-nowrap photographers-dropdown" >
                     <b-dropdown-item href="#" v-for="element in photographers.data" :key="element.photographer_id">{{element.PHOTOGRAPHER_ID}}</b-dropdown-item>
                  </b-dropdown>
               </div>
            </div>
            <div>
            </div>
           <div class="header-container p-0 pb-3  gallery-open-sidebar" >
             <div class="row justify-content-around">
               <div class="col-lg-3 col-md-4 col-4">
                  <div class="add-photos mt-4 photos-width">
                     <button class="btn btn-secondary text-black button pl-0 add-btn-gallery" @click="add">
                        <div class="d-inline  add-photos-icon">
                           <img src="../assets/icons/plus.png" alt="plus">
                        </div>
                        <span class="add-photos-txt">Add photos</span>
                     </button>
                  </div>
               </div>
                <div class="col-lg-3 col-md-4 col-8">
                   <div class="add-photos mt-4 m-auto seen-hidden">
                     <button class="btn btn-secondary text-black button pl-0 add-btn-gallery ">
                         
                        <div class="d-inline add-photos-icon gallery-seen" id="seen" @click="seen()">
                            <img src="../assets/icons/seen.png" alt="seen" id="seen-img">
                        </div>
                        <div class="d-inline  add-photos-icon gallery-unseen" id="hidden" @click="hidden()">
                            <img src="../assets/icons/hidden.png" alt="hidden" id="hidden-img">
                        </div>
                        <span class="add-photos-txt photos-seen">Photos</span>
                     </button>
                  </div>
                </div>
                <div class="col-lg-3 col-md-4 col-12 view-dropdown">
                   <div class="add-photos mt-4 mb-3 add-dropdown view-mode-dropdown">
                        <b-dropdown
                            split
                            split-variant="outline-primary"
                            block
                            text="Medium"
                            class="my-2 view-mode"
                            id="view-mode"
                        >
                            <b-dropdown-item href="#" class="small-gallery" @click="small()">Small</b-dropdown-item>
                            <b-dropdown-item href="#" class="medium-gallery" @click="medium()">Medium</b-dropdown-item>
                            <b-dropdown-item href="#" class="large-gallery" @click="large()">Large</b-dropdown-item>
                        </b-dropdown>

                  </div>
                </div>
                <div class="col-lg-2 col-md-4 col-12 mt-4">
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
             <div class="row list-header  mt-4 pt-0 gallery-open-sidebar" id="selected-header" v-if="selectedHead">
                        <div class="col-lg-6 col-md-6 col-12">
                           <div class="row">
                              <div class="col-3 py-0">
                                 <span class="selected-number">  {{ galleryItems.length }} / {{imgLength.length}} selected</span>
                              </div>
                              <div class="col-5 py-0">
                                 <!-- v-on:click="galleryItems = true" -->
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
                                 <!-- <img src="../assets/icons/edit-selected.png" alt="edit"> -->
                                 <img src="../assets/Path 23.png" alt="Camera">
                              </div>
                              <div class="col-lg-1 col-md-2 col-2 select-icons py-0">
                                 <img src="../assets/icons/delete-selected.png" alt="delete">
                              </div>
                              <div class="col-lg-1"></div>
                           </div>
                        </div>
                     </div>
                  <div>

                     <draggable draggable=".xyz" class="flexbox gallery-flexbox mb-5 mt-5" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="limit">
          
          <div
                   class="flex-image card gallery-card mt-4 xyz gallery-card-image"
                   v-for="(element, idx) in resultQuery"
                   :key="element.id"
                   ref="galleryItemId"
                  
                 
                >
                <div class="card-body  gallery-card-body" >
                   <div class="d-flex justify-content-between card-icons px-2">
                      <img src="../assets/icons/move.png" alt="move" class="user-icon d-inline handle">
                        <div>
                            <input 
                               type='checkbox' 
                               class="select-checkbox"  
                               v-bind:value='element' 
                               v-model='galleryItems'  
                               @change="printValues($event)"
                               
                               ref="checkAllInputs"
                            >
                          
                            

                   <b-dropdown  size="lg" id="dropdown-right" right  variant="link" toggle-class="text-decoration-none" no-caret class="ellipsis">
                      <template #button-content>
                        <font-awesome-icon icon="ellipsis-v" class="user-icon d-inline handle" />
                      </template>
                      <b-dropdown-item href="#" @click="removeAt(idx)" class="dropdown-ellipsis">
                                  Remove
                      </b-dropdown-item>
                      <b-dropdown-item href="#" class="dropdown-ellipsis">Another option</b-dropdown-item>
                 
                   </b-dropdown>
                        </div>
                   </div>
               
                 <div class="card-image">
                  <span class="wtr-span">
                     <img 
                     ref="cardImage"
                     class="" 
                  />
                  </span>                  
                  <img 
                     v-bind:src="'https://studioseye.com/' + element.IMAGE_LINK_PATH + 'THUMBNAILS/' + element.IMAGE_NAME"  
                     @click="index = idx++; 
                     slideshow=!slideshow, 
                     openSlideshow()" 
                     class="w-100"
                  />
                 </div>
                </div>
                <div class="card-footer gallery-card-footer border-0">
                   <span class="text img-src" ref="galleryName">{{ element.IMAGE_NAME }} </span>
                </div>
             </div>
       </draggable>
         <div class="col-lg-2 col-md-4 col-12 p-0  gallery-open-sidebar">
               <div class="items-gallery text-end m-0 items-sm">
                  <div class="create-folder-modal">
                     <b-modal id="modal-cart" size="lg" scrollable  centered title="Selected Image">
                        <div>
                           <div class="row">
                              <div class="col-lg-12 col-md-12 col-12">
                                 <img :src="img" alt="add-to-cart-img"  class="w-100 add-to gallery-modal-img">
                              </div>
                           </div>
                        </div>
                     </b-modal>
                  </div>
               </div>
            </div>
            <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="limit">
                           <CoolLightBox 
                                 :items="items"
                                 :index="index"
                                 :fullScreen="true"
                                 :useZoomBar="true"
                                 @close="index = null"
                              >
                           </CoolLightBox>
                        </div>
         </div>
         </div>
        
      </div>
    
   </div>
</template>

<script>
import Navbar2 from "./reusable/Navbar2.vue";
import Button from './reusable/Button.vue'
import draggable from "vuedraggable";
import axios from "axios";
import VueSelectImage from "vue-select-image";
import "vue-select-image/dist/vue-select-image.css";
import VueGallerySlideshow from 'vue-gallery-slideshow';
import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'
let id = 3;

import getToken from '../components/reusable/token.vue';
export default {
  components:{
    Navbar2,
    Button,
    draggable,
    VueSelectImage,
    VueGallerySlideshow,
    CoolLightBox
},

  instruction: "Drag using the handle icon",
data(){
   return{
      searchQuery: null,
      photos: [],
      results: [],
      busy: false,
      limit: 10,
      search: '',
      items: [],
      slideshowImages:[],
      selectedHead: false,
      isCheckAll: false,
      galleryItems: [],
      selectedItem: "",
      selectedImages: [],
      initialSelected: [],
      img:'',
      index: null,
       headers: ["id", "alt", ],
         users: [],
        active: false,
          selectedOptions:['View mode'],
        optionsSelect:[
          { value: 'a', text: 'None' },
          { value: 'b', text: 'Logo' },
        ],
      checked: false,
         list: [],
      dragging: false,
      eventData:[],
      clientData:[],
      photographers:[],
      galleryFolders:[],
      galleryImages:[],
      imgLength:'',
      favourite:[],
      folders:[]
   }
},

computed: {
    draggingInfo() {
      return this.dragging ? "under drag" : "";
    },
  resultQuery(){
      if(this.searchQuery){
      return this.photos.filter((item)=>{
        return this.searchQuery.toLowerCase().split(' ').every(v => item.IMAGE_NAME.toLowerCase().includes(v))
      })
      }else{
        return this.photos;
      }
    }
  },
  methods: {
   async loadMore() {
   
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
              this.busy = false;
              this.imgLength = getGalleryImages.data
              for(let img in getGalleryImages.data){
                     this.items.push('https://studioseye.com/' + getGalleryImages.data[img].IMAGE_LINK_PATH + 'THUMBNAILS/' + getGalleryImages.data[img].IMAGE_NAME)
               
                  }    
           };
           
            if(this.galleryItems.length == this.imgLength.length){
               this.checkAll()
            }
       
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
  
      let checkbox = e.currentTarget.parentElement.parentElement.parentElement.parentElement;
      
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
      // this.galleryItems.push(this.imgLength);
      console.log(this.galleryItems);
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
           document.getElementById('selected-header').style.display='none'
         };
          this.galleryItems = [];
          this.selectedHead = false;
     },
   
    removeAt(idx) {  //   removing a single element
      if(confirm("Do you really want to remove the item?")){

                this.photos.splice(idx, 1);
   }
     
    },
    
    add: function() { 
      id++;
      for(let i in this.list){
         // console.log(this.list[i].alt)
      }
      this.list.push({ alt: 'Image 001.jpg', id, src:'http://localhost:8080/img/Mask%20Group%205.ef4d630a.png' });

    },
   
      // hiding and unhiding the element's name
  
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

     //  changing size of the gallery cards to small / medium / large

    small(){
        let galleryImgs = this.$refs.galleryItemId;
        for(let img in galleryImgs){
           if ($(window).width() > 768) {
            galleryImgs[img].style.flex='0 0 15%';
            document.getElementById('view-mode__BV_button_').innerText='Small';
            
         }
         else {
            galleryImgs[img].style.flex='0 0 30%'
         }
        }
    },
    medium(){
        let galleryImgs = this.$refs.galleryItemId;
        for(let img in galleryImgs){
            if ($(window).width() > 768) {
            galleryImgs[img].style.flex='0 0 18%';
            document.getElementById('view-mode__BV_button_').innerText='Medium';
            
         }
         else {
            galleryImgs[img].style.flex='0 0 40%'
         }
        }
    },
    large(){
        let galleryImgs = this.$refs.galleryItemId;
        for(let img in galleryImgs){
            if ($(window).width() > 768) {
         galleryImgs[img].style.flex='0 0 23%';
         document.getElementById('view-mode__BV_button_').innerText='Large';
         
      }
      else {
         galleryImgs[img].style.flex='0 0 50%'
      }
        }
    },
    onOver() {
        this.$refs.dropdown.visible = true;
      },
      onLeave() {
        this.$refs.dropdown.visible = false;
      },
        sidebarCollapse(){
      let sidebar = document.getElementById('sidebar-variant');
      let sidebarIcon = document.getElementById('sidebarIcon');
      let openSidebar = document.getElementById('open-sidebar');
      let clientGallery = document.getElementById('clientGallery');
      let galleryHeader =  document.querySelectorAll('.gallery-header');


      if(sidebar.style.display=='none'){
            sidebarIcon.src= require('../assets/icons/Path_118.svg');
            openSidebar.style.left='19.5rem';
            clientGallery.classList.add('col-lg-9');
            clientGallery.classList.remove('col-lg-12');
            clientGallery.classList.add('pl-0');
            clientGallery.classList.remove('pl-5');
            clientGallery.style.position = 'inherit';

      }else{
           clientGallery.classList.remove('col-lg-9');
             clientGallery.classList.add('col-lg-12');
         openSidebar.style.left='0.5rem';
         sidebarIcon.src= require('../assets/icons/Path_119.svg');
         clientGallery.classList.remove('pl-0');
               clientGallery.classList.add('pl-5');
         clientGallery.style.position = 'absolute';
         galleryHeader.forEach((v, i) => {
            v.style.textAlign = 'end'
         });

        
      }
    },
      handleScroll (event) {
     let sidebar = document.getElementById('gallery-sidebar-padding');
  
     if(window.scrollY == 0){
         sidebar.style.padding= '5.5rem';
     }
     else{
      let viewMode = document.getElementById('view-mode__BV_button_');
      if(viewMode.innerText == 'small'){
         this.small();
      }else if(viewMode.innerText == 'medium'){
         this.medium();
      }else if(viewMode.innerText == 'large'){
         this.large();
      }

        sidebar.style.padding = '0px';
        axios({
                method: 'get',
                url: 'http://localhost:3000/loggedUser/',
               
              })
            .then(res => {
                for(let i in res.data){
                    if(res.data[i].watermarkLogo == 'true'){
                        axios({
                    method: 'get',
                    url: 'http://localhost:3000/watermarkLogoData/',
                
                })
                .then(res => {
                  let watermark = res.data[0];
                  let galleryCardImg = this.$refs.cardImage;
                     for(let i in galleryCardImg){
                        galleryCardImg[i].src = watermark.watermarkLogo;
                        galleryCardImg[i].style.objectFit = 'cover';
                        galleryCardImg[i].style.position = 'absolute';
                        galleryCardImg[i].style.zIndex = '10';
                        galleryCardImg[i].style.width = watermark.logoWidth;
                        galleryCardImg[i].style.height = watermark.logoHeight;
                        galleryCardImg[i].style.top = +watermark.logoX + 13 + 'px';
                        galleryCardImg[i].style.left = watermark.logoY;
                     }
                  })
         
                    }
                }
            });

     }
  
    },
  },
created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);

  },
   mounted(){

    const token = getToken.getToken();
     if(!token){
        return false
     }else{
     
        const getGalleryEvent = async ()  =>{
       let event_id = $cookies.get('event_id');
       let client_id = $cookies.get('client_id');

          try{
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
                  console.log(this.clientData)
               };
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
                  axios({
                method: 'get',
                url: 'http://localhost:3000/loggedUser/',
               
              })
            .then(res => {
                for(let i in res.data){
                    if(res.data[i].watermarkLogo == 'true'){
                        axios({
                    method: 'get',
                    url: 'http://localhost:3000/watermarkLogoData/',
                
                })
                .then(res => {
                  let watermark = res.data[0];
                  let galleryCardImg = this.$refs.cardImage;
                     for(let i in galleryCardImg){
                        galleryCardImg[i].src = watermark.watermarkLogo;
                        galleryCardImg[i].style.objectFit = 'cover';
                        galleryCardImg[i].style.position = 'absolute';
                        galleryCardImg[i].style.zIndex = '10';
                        galleryCardImg[i].style.width = watermark.logoWidth;
                        galleryCardImg[i].style.height = watermark.logoHeight;
                        galleryCardImg[i].style.top = +watermark.logoX + 13 + 'px';
                        galleryCardImg[i].style.left = watermark.logoY;
                     }
                  })
         
                    }
                }
            })
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
                  this.galleryFolders = getGalleryFolders.data; 
                  this.favourite =  this.galleryFolders[0];
                  this.folders = this.galleryFolders[1];
               };


               this.loadMore();


            }
             
            catch(err){
                console.log('err');
                console.log(err.message);
                this.busy = false;
            }

          
      };
      getGalleryEvent();
     };


 
  },
}
</script>

<style>
.sidebar-menus{
   padding-top: 2rem;
}
.menus-header{
    font-size: 16px;
    color: #393939;
    font-weight: 700;
}
.menu-date{
    font-size: 14px;
    line-height: 10px;
    color: #393939;
    font-weight: 400;
}
.camera-icon, .share-icon{
    width: 40px;
    height: 40px;
    border-radius: 5px;
    background-color: #223d8f;
    color: #ffff;
    text-align: center;
    padding-top: 6px;
    cursor: pointer;
    padding-left: 0.5rem!important;
}
.share-link{
    color: white;
}
.share-icon-link{
   width: 1.2rem;
}
.gallery-icon{
    font-size: 25px;
    position: relative;
    right: 3px;
}
.share-icon-txt{
    font-size: 16px;
    line-height: 9px;
    color: #ffffff;
    font-weight: 500;
    position: relative;
    /* top: -3px; */
    left: 8px;
}
.test-icon{
    color: #adadad;
    width: 20px;
}
.view-order{
    font-size: 16px;
    line-height: 10px;
    color: #223d8f;
    font-weight: bold;
}
.order-client-btn, .order-studio-btn{
    padding: 0.5rem 2rem!important;
    border-radius: 7px!important;
    background-color: #ffffff;
    border: 2px solid #223d8f!important;
}
.menu-image{
    height: 16rem;
    object-fit: cover;
}
.view-order-btns{
   height: 45px!important;
}
/* center */

.gallery-link{
    font-size: 14px;
    color: #393939;
    font-weight: 500;
    border-bottom: 1px solid #707070;
}
.gallery-link:hover{
    color:#393939;
}
.angle-down-icon{
    font-size: 10px;
    padding-left: 6px;
}
.card-icons{
   cursor: pointer;
}
.card-icons svg{
    color: #223d8f;
    font-size: 20px
}
.img-src{
    font-size: 12px;
line-height: 10px;
color: #393939;
font-weight: 400;
text-align: center;
}

.gallery-card-footer{
    background: #ffffff!important;
    border: none;
    filter: drop-shadow(0px 3px 3.5px rgba(0,0,0,0.16));
    background-color: #ffffff;
}
.gallery-card{
    background-color: #ffffff;
    border: none!important;
}
.card-image{
  position: relative;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  overflow: hidden;

}
.gallery-card-body{
    padding-right: 0!important;
    padding-left: 0!important;
    filter: drop-shadow(0px 3px 3.5px rgba(0,0,0,0.16));
    background-color: #ffffff;
    
}
.gallery-header{
    padding-bottom: 0.5rem !important;
}
.add-photos{
    width: fit-content;
    border-radius: 10px;
    filter: drop-shadow(0px 3px 3.5px rgba(0,0,0,0.16));
    background-color: #ffffff;
    
}
.add-photos-icon{
    color: #223d8f;
    font-size: 20px;
    border-radius: 10px;
    background-color: #ffffff;
    border: 1px solid #223d8f;
    padding: 10px;
    cursor:pointer
}
.add-photos-txt{
    padding: 1rem;
    position: relative;
    top: -0.1rem;
    color: #393939;
}
.add-icon{
    width: 25px;
    height: 20px
}
.handle-gallery{
    padding-left: 6px;
}
.gallery-unseen:hover{
   background: #223D8F;
   border: 1px solid #223D8F;
}
.gallery-unseen:hover img{
   filter: invert(100%) sepia(100%) saturate(20%) hue-rotate() brightness(141%) contrast(104%);
}
.gallery-seen:hover img{
   filter: invert(84%) sepia(80%) saturate(2177%) hue-rotate(217deg) brightness(94%) contrast(90%);

}
.add-btn-gallery:focus, .add-btn-gallery:active{
     border-radius: 10px;
}
.gallery-seen{
    margin-right: 0.5rem;
    background: #223d8f;
    color: #fff;
}
.gallery-seen:hover{
    color: #223d8f;
    background: #fff;
}
.view-mode{
    width: 205px;
        height: 30px;
        
}
.view-mode .dropdown-toggle-split{
    position: absolute!important;
    color: #393939;
    background: none;
    border-right: 1px solid #F2F2F2;
    padding-left: 1.2rem;
    padding-right: 1.2rem;
}

.view-mode .btn-outline-primary{
    color:  #223D8F;
        padding-left: 2rem;
}
.view-mode button{
 border-right: 1px solid #F2F2F2!important;
}
.view-mode button:hover, .view-mode button:active, .view-mode button:focus{
    background: none!important;
    outline: none;
    border: 0;
    box-shadow: none!important;
     color: #223D8F;
    border-right: 1px solid #F2F2F2!important;
}
.view-mode button{
    border: none;
}
.view-mode-dropdown{
   position: absolute;
    right: 2.3rem;
}
.add-dropdown{
    z-index: 1;
    position: absolute;
}
.add-dropdown ul{
    width: 11rem;
    border: none;
    border-radius: 0 0px 10px 10px;
    text-align-last: center;
       
}
.view-mode ul{
    width: 205px;
    left: -1px!important;
}
.small-gallery a{
    padding-right: 4rem;
    font-size: 14px;
    color: #393939!important;
    font-weight: 500;
}
.medium-gallery a{
        padding-right: 2.5rem;
        font-size: 14px;
        color: #393939!important;
        font-weight: 500;
}
.large-gallery a{
        padding-right: 3.7rem;
        font-size: 14px;
        color: #393939!important;
        font-weight: 500;
}
.small-gallery a:hover, .medium-gallery a:hover, .large-gallery a:hover{
    color: #223d8f!important;
}
.flexbox {
    display: flex;
    flex-wrap: wrap;
    height: 550px;
    overflow-x: hidden;
    overflow-y: scroll;
}
.flex-image {
    flex: 0 0 100%;
}
.ellipsis button{
   padding: 0;
    margin-top: -0.5rem;
}

.dropdown-ellipsis a:hover{
   color: #223d8f!important;
}
.photographers-dropdown{
       margin-top: -1rem;
       z-index: 1000;
       border-radius: 0!important;
}
#modal-cart___BV_modal_outer_{
   z-index: 10000000000!important;
}
.photographers-dropdown button{
   font-size: 16px;
    color: #393939;
    font-weight: 500;
    border-bottom: 1px solid #707070;
}
.photographers-dropdown button:hover{
    color: #393939;

}
.photographers-dropdown ul li .dropdown-item:hover{
   color: #223d8f!important;
}
.photos-width{
       width: 205px;
}
.select-checkbox{
    position: relative;
    right: 25px;
    top: -6px;
}
.select-checkbox:before, .select-checkbox:after{
   width: 20px!important;
   height: 20px!important;
   padding-left: 0.2rem!important;
   border: 1px solid #C2CAE2!important
}
.selected-element{
   
background-color: #ffffff;
border: 4px solid #223d8f!important;
padding: 1rem;
}
.list-header{
    filter: drop-shadow(0px 3px 3.5px rgba(0,0,0,0.16));
    background-color: #f5f5f5;
    padding: 0.5rem 0 0.5rem 0.5rem;

}
.selected-number{
   font-size: 14px;
    color: #223d8f;
    font-weight: 600;
}
.select-unselect{
      font-size: 14px;
      color: #393939;
      font-weight: 500;
}
.select-icons img{
   width: 20px;
   cursor: pointer;
}

.remove-select:after{
   content:''!important
}
.view-mode button:after{
  border: none;
  background-image: url('../assets/icons/arrow-select.png');
   height: 23px;
    width: 12px;
    margin-top: -2px;
}
.gal-position{
       position: absolute;
    right: 0;
}
.header-container{
   padding: 0;
}
.gallery-logo img{
   top:-4rem
}

.open-sidebar{
    color: #223D8F!important;
    position: absolute;
    top: 2rem;
    left: 0;
}
.gallery-search{
        position: relative;
        right: 37px;
        top: 15px;
}
.gallery-search-filter{
   position: relative;
    right: 21px;
    top: 15px;
}
.gallery-search button{
       padding: 0 0.4rem;
}
.gallery-modal-img{
   height: 500px;
    object-fit: contain;
}

.img-span{
   position: relative;
}
#view-mode__BV_button_:hover{
   color: #223D8F;
}
#dropdown-left__BV_toggle_:hover{
   color: #393939;
}
.testing-folder img{
   cursor:pointer
}
@media only screen and (max-width: 1225px) and (min-width:991px){
   .header-container>div{
      display: flex;
    justify-content: right;
   }
   .add-dropdown{
      
    padding: 1px;
    position: initial;
    height: 46px;

   }
   .photos-seen{
      display: none;
   }
}
@media screen and (max-width: 991px) {
    .main-gallery {
        position: absolute;
    }
    .gal-position{
          padding: 0!important;
    }
    .img-src{
      font-size: 10px;
   }
}

@media screen and (min-width: 768px) {
    .flex-image {
        flex: 0 0 18%;
        margin-right: 1rem;
    }
    
   
}
@media screen and (max-width: 768px) {
   .gallery-header{
      text-align: center!important;
      margin-top: 3rem!important;
    }
   .flexbox{
      margin-top: 4rem;
   }
    .add-photos{
       margin: auto;
    }
    .view-mode-dropdown{
      position: initial;
      height: 44px;
    }
   .add-photos-txt{
      display: none;
   }
   .photos-width {
    width: 0;
   }
   .add-btn-gallery{
         width: inherit;
   }
   .gallery-unseen{
      position: relative;
      right: -13px;
   }
   .view-mode-dropdown .btn-outline-primary, .view-mode-dropdown .dropdown-toggle {
      top: 6px;
   }
   .header-container{
      padding: 1rem;
   }
 
}
@media only screen and (max-width:767px){
     .gallery-photo{
      margin: auto;
      padding: 0!important;
   }
   .gallery-search{
    position: absolute!important;
    width: 100%;
    top: unset;
   }
 
}
@media screen and (max-width: 610px) {
    .gal-position {
      position: relative;
    }
      .gallery-user-name{
      text-align: end;
   }
   .dropdown-photographers{
      margin-top: 1rem;
   }
   
}
</style>