<template>
   <div>
      <div class="row" >
         <div class="col-lg-3">
         </div>
         <div class="col-lg-9 pl-0 mt-5" id="showGalleryTop">
            <div class="d-flex justify-content-between show-gallery-header flex-wrap">
               <p class="showGallery-th">
                  User's name
                  <span class="showGallery-th-data">(38117)</span>
               </p>
               <p class="showGallery-th">
                  Total Galleries
                  <span class="showGallery-th-data">(1)</span>
               </p>
               <p class="showGallery-th">
                  Page
                  <span class="showGallery-th-data">(1 of 1)</span>
               </p>
               <p class="showGallery-th border-0">
                  Show in page
                  <span class="showGallery-th-data">(96)</span>
               </p>
               <div class="d-flex justify-content-start flex-wrap w-auto">
                  <div class="input-group justify-content-end search-input-filter" > 
                     <span class="search-icon-gallery search-icon-showGallery" id="basic-addon1">
                     <img src="../../../assets/icons/search.png" alt="search" class="w-75">
                     </span>
                     <span class="divider-search-gallery"></span>
                     <input id="myInput" type="text" placeholder="Event Id, Event name"  class="search-button text-center show-search-input"  aria-describedby="basic-addon1">
                  </div>
               </div>
            </div>
            <div class="row">
               <div class="col-lg-8 show-gallery-border">
               </div>
            </div>
            <div class="row mt-4">
               <div class="col-lg-5 col-md-6 col-12">
                  <div class="row show-card">
                     <div class="col-lg-6 col-md-6 col-sm-12">
                        <img src="../../../assets/icons/card-menu.png" alt="card menu" class="w-100">
                        <p class="text-uppercase card-menus text-start mt-2">Menus</p>
                        <p class="text-start menu-number">(36504) menu</p>
                        <p class="text-start card-date">2021-12-27</p>
                     </div>
                     <div class="col-lg-6 col-md-6 col-sm-12">
                        <div class="row justify-content-center" >
                           <div class="col-lg-10 col-md-10 col-9 text-nowrap show-data show-gallery-cards ">
                              Total images 2
                           </div>
                           <div class="col-lg-1 col-md-2 col-2 add-btn-div p-0">
                              <button class="remove-images client-view-remove">
                              <img src="../../../assets/icons/delete-red.png" alt="delete" class="remove-red-icon">
                              </button>
                           </div>
                        </div>
                        <div class="row justify-content-center mt-4" >
                           <div class="col-lg-10 col-md-10 col-9 show-data show-gallery-cards ">
                              Notify Client
                           </div>
                           <div class="col-lg-1 col-md-2 col-2 add-btn-div p-0">
                              <button class="remove-images client-view-remove">
                              <img src="../../../assets/icons/211694_bell_icon.png" alt="notify" class="notify-icon">
                              </button>
                           </div>
                        </div>
                        <div class="row justify-content-center mt-4" >
                           <div class="col-lg-10 col-md-10 col-9 show-data show-gallery-cards ">
                              Notify User
                           </div>
                           <div class="col-lg-1 col-md-2 col-2 add-btn-div p-0">
                              <button class="remove-images client-view-remove">
                              <img src="../../../assets/icons/211694_bell_icon.png" alt="notify" class="notify-icon">
                              </button>
                           </div>
                        </div>
                       <div>
                        <Button type="submit" variant="primary" class="text-uppercase login-btn menu-card-delete">Delete All</Button>
                       </div>
                     </div>
                  </div>
               </div>
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

 
 }
</script>
<style>
/* header table */
#showGalleryTable_wrapper .dataTables_scroll{
    width: 97%;
}
#showGalleryTable .dataTables_empty, #showGalleryTable_info, #showGalleryTable_paginate, #showGalleryTable_length{
    display: none;
}
.show-gallery-border{
    border-bottom: 0.5px solid #B8B8B8;

}
.show-gallery-header{
    width: 97%;
}
.show-gallery-header p{
    margin-top: 0.5rem;
    border-right: 0.5px solid #B8B8B8;
    padding-right: 2rem;
}
.search-icon-showGallery{
    padding: 0.8rem 1rem 1rem 1rem!important;
}
.show-search-input{
    font-size: 14px;
    padding-right: 20px;
}
.showGallery-th{
    font-size: 15px;
    color: #393939;
}
.showGallery-th-data{
    font-weight: 700;
}

/* card */
.show-card{
    filter: drop-shadow(0px 6px 9px rgba(0,0,0,0.16));
    background-color: #ffffff;
    padding: 1rem 0rem 1rem 1rem;
}
.show-data{
    border-radius: 10px;
    filter: drop-shadow(0px 3px 3.5px rgba(0,0,0,0.16));
    background-color: #ffffff;
    line-height: 37px;
    color: #393939;
    font-weight: 400;
    font-size: 14px;
}
.showGallery-btns{
    height: 37px;
}
.remove-images{
    height: 37px;
    border-radius: 10px;
    background-color: #ffffff;
    border: 2px solid #223d8f;
    cursor: pointer;
    position: relative;
    right: 24px;
    width: 37px;
}
.remove-red-icon{
    width: 1.1rem;
}
.notify-icon{
    width: 1.4rem;
}
.card-menus{
    font-size: 20px;
    color: #393939;
    font-weight: 700;
    margin: 0;
}
.menu-number{
    font-size: 20px;
    color: #393939;
    margin: 0;
}
.card-date{
    font-size: 15px;
    color: #393939;
    margin: 0;
}
.menu-card-delete{
    margin-top: 2rem;
    position: relative;
    /* left: 2.7rem; */
    width: 7rem!important;
    height: 40px!important;
    margin-top: 2.8rem;
}
.show-gallery-cards{
   height: 37px;
   padding-top: 0;
}
@media only screen and (max-width:767px){
   .client-view-remove{
      right:68px
   }
}
@media only screen and (max-width:572px){
   .client-view-remove{
      right:38px
   }
}
@media only screen and (max-width:426px){
   .client-view-remove{
      right:-6px
   }
   .client-view-albums-icon{
      right: -12px;
   }
}
</style>